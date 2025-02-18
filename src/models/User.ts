import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        image: { type: String }, // Optional: for user profile image
        id: { type: String, required: true, unique: true }, // Google ID
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
