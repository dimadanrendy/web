"use client";
import React, { useEffect, useState } from 'react';
import { verifyToken } from '@/features/management/auth/useVerifyToken';
import PageLanding from '@/components/loading-ui/landing-page';
import { logout } from '@/features/management/auth/useLogOutAuth';
import { useRouter } from 'next/navigation';
import { useUser } from "@/store/store";


export default function Dashboard() {
    const router = useRouter();
    const user = useUser((state) => state.user);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            setIsLoading(true);
            const isValid = await verifyToken();
            if (isValid === false || isValid === null || isValid === undefined) {
                const success = await logout();
                localStorage.removeItem('auth-storage');
                router.push('/login');
            }
            setIsLoading(false);
        };
        checkToken();
    }, [router]);

    if (isLoading) return <PageLanding />;

    return (
        <div>
            {user ? `Selamat datang ${user.name}` : "Anda tidak memiliki akses."}
        </div>
    );
}
