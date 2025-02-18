'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function NewPostPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, userId: session?.user.id }),
        });
        if (res.ok) {
            router.push('/posts'); // Redirect to posts list
        }
    };

    return (
        <main className="container max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">發表新文章</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Create Post</button>
            </form>
        </main>
    );
}
