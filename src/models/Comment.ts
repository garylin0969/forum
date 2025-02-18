import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
    {
        post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
