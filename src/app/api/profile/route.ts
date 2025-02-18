import { NextApiRequest } from 'next';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User'; // Your User model

// GET 請求處理
export async function GET(req: NextApiRequest) {
    await dbConnect();

    console.log(req.url);

    const { searchParams } = new URL(req.url || ''); // 獲取查詢參數
    const id = searchParams.get('id'); // 獲取用戶 ID

    console.log(id);

    if (!id) {
        return new Response(JSON.stringify({ message: 'Invalid ID' }), { status: 400 }); // 返回錯誤響應
    }

    const user = await User.findOne({ id }); // 根據 Google ID 查找用戶
    if (user) {
        return new Response(JSON.stringify(user), { status: 200 }); // 返回用戶資料
    } else {
        return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 }); // 用戶未找到
    }
}

// PUT 請求處理
export async function PUT(req: NextApiRequest) {
    await dbConnect();

    const body = await req.body; // 使用 req.body 獲取請求體中的資料
    const { id, name, email, image } = body; // 解構賦值

    if (!id || !name || !email || !image) {
        return new Response(JSON.stringify({ message: 'Missing fields' }), { status: 400 }); // 返回錯誤響應
    }

    const updatedUser = await User.findOneAndUpdate({ id }, { name, email, image }, { new: true });
    if (updatedUser) {
        return new Response(JSON.stringify(updatedUser), { status: 200 }); // 返回更新後的用戶資料
    } else {
        return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 }); // 用戶未找到
    }
}
