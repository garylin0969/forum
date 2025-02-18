import { PostCard } from '@/components/molecules/post-card';

export function PostList() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold mb-6">最新文章</h1>
            <div className="grid gap-4">
                <PostCard />
            </div>
        </div>
    );
}
