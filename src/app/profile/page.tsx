'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
    const { data: session } = useSession();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            if (session) {
                const res = await fetch(`/api/profile?id=${session.user.id}`); // 使用用戶的 Google ID 獲取資料
                console.log(res);

                const data = await res.json();
                setName(data.name);
                setEmail(data.email);
                setImage(data.image);
            }
        };
        fetchUserData();
    }, [session]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: session?.user?.id, name, email, image }), // 發送更新的資料
        });
        if (res.ok) {
            // 可以在這裡添加成功提示
        }
    };

    return (
        <main className="container max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">個人資料</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button type="submit">更新個人資料</button>
            </form>
        </main>
    );
}
