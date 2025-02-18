import { NextAuthOptions, DefaultUser, Profile, Account } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// Extend the Profile type to include the properties returned by Google
interface CustomProfile extends Profile {
    name: string; // User's name
    email: string; // User's email
    image: string; // User's profile image
    id: string; // User's Google ID
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        /* https://next-auth.js.org/providers/google */
        signIn: async ({ profile }: { user: DefaultUser; account: Account | null; profile?: Profile }) => {
            await dbConnect();

            console.log(profile);

            if (profile) {
                const customProfile = profile as CustomProfile; // Type assertion
                try {
                    const existingUser = await User.findOne({ id: customProfile.id }); // Use the Google ID
                    if (!existingUser) {
                        const newUser = new User({
                            name: customProfile.name,
                            email: customProfile.email,
                            image: customProfile.image,
                            id: customProfile.id, // Store the Google ID
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.error('Error creating user:', error);
                    return false; // Prevent sign-in if there's an error
                }
            }
            return true;
        },
    },
};
