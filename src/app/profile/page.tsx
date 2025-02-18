import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '個人資料 - 論壇',
    description: '管理您的個人資料',
};

export default function ProfilePage() {
    return (
        <main className="container max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">個人資料</h1>
            <div className="space-y-6">{/* TODO: 新增個人資料表單元件 */}</div>
        </main>
    );
}
