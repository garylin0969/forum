import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '發表新文章 - 論壇',
    description: '在論壇發表新文章',
};

export default function NewPostPage() {
    return (
        <main className="container max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">發表新文章</h1>
            {/* TODO: 新增發文表單元件 */}
        </main>
    );
}
