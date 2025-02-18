'use client';

import { Button } from '@/components/atoms/buttons';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Navbar() {
    const { data: session } = useSession();
    console.log(session);

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    論壇
                </Link>

                <div className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Link href="/posts/new">
                                <Button>發文</Button>
                            </Link>
                            <Link href="/profile">
                                <Button variant="ghost">個人資料</Button>
                            </Link>
                            <Button variant="outline" onClick={() => signOut()}>
                                登出
                            </Button>
                        </>
                    ) : (
                        <Button onClick={() => signIn('google')}>使用 Google 登入</Button>
                    )}
                </div>
            </div>
        </nav>
    );
}
