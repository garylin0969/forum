import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
        signIn: async ({ account }) => {
            if (account && account.provider === 'google') {
                return true; // Allow all Google accounts to sign in
            }
            return true; // Handle other providers differently if needed
        },
    },
};
