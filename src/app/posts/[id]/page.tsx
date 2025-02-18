import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '文章標題 - 論壇',
    description: '文章內容預覽...',
};

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    return (
        <main className="container max-w-4xl mx-auto px-4 py-8">
            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <h1>文章 #{id}</h1>
                <div className="not-prose flex items-center gap-4 text-sm text-muted-foreground">
                    <span>作者名稱</span>
                    <time>發布時間</time>
                </div>
                <p>文章內容...</p>
            </article>
        </main>
    );
}
