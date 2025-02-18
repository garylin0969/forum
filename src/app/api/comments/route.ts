import { NextApiRequest } from 'next';
import dbConnect from '@/lib/dbConnect';
import Comment from '@/models/Comment'; // Your Comment model

// GET 請求處理
export async function GET() {
    await dbConnect();
    const comments = await Comment.find(); // 獲取所有評論
    return new Response(JSON.stringify(comments), { status: 200 });
}

// POST 請求處理
export async function POST(req: NextApiRequest) {
    await dbConnect();
    const body = await req.body; // 使用 req.body 獲取請求體中的資料
    const newComment = new Comment(body);
    await newComment.save();
    return new Response(JSON.stringify(newComment), { status: 201 });
}
