import { Navbar } from '@/components/organisms/navbar';
import { AuthProvider } from '@/components/providers/auth-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '論壇',
    description: '一個使用 Next.js 建立的論壇',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-TW">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AuthProvider>
                    <Navbar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
