import { formatDistance } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import Link from 'next/link';

export function PostCard() {
    return (
        <Link href="/posts/1" className="block">
            <article className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
                <h2 className="text-xl font-semibold mb-2">文章標題</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">這是文章預覽內容...</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>作者名稱</span>
                    <span>•</span>
                    <time>
                        {formatDistance(new Date(), new Date(), {
                            addSuffix: true,
                            locale: zhTW,
                        })}
                    </time>
                </div>
            </article>
        </Link>
    );
}
