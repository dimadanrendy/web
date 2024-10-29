"use client";
import React, { useEffect, useState } from 'react';
import { verifyToken } from '@/features/management/auth/useVerifyToken';
import PageLanding from '@/components/loading-ui/landing-page';
import { logout } from '@/features/management/auth/useLogOutAuth';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            setIsLoading(true);
            const isValid = await verifyToken();
            console.log(isValid);
            if (isValid === false || isValid === null || isValid === undefined) {
                const success = await logout();
                console.log(success);
                localStorage.removeItem('auth-storage');
                router.push('/login');
            } else {
                // Misalnya, atur data pengguna dari hasil verifikasi
                setUser(isValid.user); // Sesuaikan dengan data pengguna yang diinginkan
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
