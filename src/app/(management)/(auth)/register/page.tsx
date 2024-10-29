"use client";
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { isLoading, login, error, user, logout } = useAuthStore();
    const { isLoading, login, error, logout, user, accessToken, newRefreshToken, refreshToken, initializeAuth } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await login(email, password);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
        localStorage.removeItem('auth-storage');
    };

    const handleRefreshToken = async () => {
        await newRefreshToken();

    };

    useEffect(() => {
        initializeAuth(); // Inisialisasi auth ketika page pertama kali dimuat
    }, []);
    return (
        <>
            <form onSubmit={handleSubmit}>
                {isLoading && <p>Loading...</p>}

                {user && <p>Logged in as {user.username}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <button onClick={handleLogout}>Logout</button>
            <br />

            <button onClick={handleRefreshToken}>Refresh Token</button>

            <br />
            {refreshToken && <p>Refresh Token: {refreshToken}</p>}

            <br />
            {user && <p>User: {user.username}</p>}
            {accessToken && <p>Access Token: {accessToken}</p>}

            <br />
            {user && <p>User: {user.role}</p>}

        </>
    );
};

export default Login;
