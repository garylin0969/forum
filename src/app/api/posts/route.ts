import { NextApiRequest } from 'next';
import dbConnect from '@/lib/dbConnect'; // Your MongoDB connection utility
import Post from '@/models/Post'; // Your Post model

// GET 請求處理
export async function GET() {
    await dbConnect();
    const posts = await Post.find(); // 獲取所有文章
    return new Response(JSON.stringify(posts), { status: 200 });
}

// POST 請求處理
export async function POST(req: NextApiRequest) {
    await dbConnect();
    const body = await req.body; // 使用 req.body 獲取請求體中的資料
    const newPost = new Post(body);
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
}
