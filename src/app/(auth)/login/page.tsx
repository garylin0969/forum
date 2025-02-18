import { Button } from '@/components/atoms/buttons';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '登入 - 論壇',
    description: '使用 Google 帳號登入論壇',
};

export default function LoginPage() {
    return (
        <main className="container max-w-lg mx-auto px-4 py-8">
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold">登入論壇</h1>
                <p className="text-muted-foreground">使用以下方式登入</p>
                <Button size="lg" className="w-full">
                    使用 Google 帳號登入
                </Button>
            </div>
        </main>
    );
}
