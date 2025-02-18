import { NextApiRequest } from 'next';
import dbConnect from '@/lib/dbConnect';
import Notification from '@/models/Notification';

// GET 請求處理
export async function GET() {
    await dbConnect();
    const notifications = await Notification.find(); // 獲取所有通知
    return new Response(JSON.stringify(notifications), { status: 200 });
}

// POST 請求處理
export async function POST(req: NextApiRequest) {
    await dbConnect();
    const body = await req.body; // 使用 req.body 獲取請求體中的資料
    const newNotification = new Notification(body);
    await newNotification.save();
    return new Response(JSON.stringify(newNotification), { status: 201 });
}
