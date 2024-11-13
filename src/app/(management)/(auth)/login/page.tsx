"use client";
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Form,
    FormDescription
} from '@/components/ui/form';
import { login } from '@/features/management/auth/useLoginAuth';
import { useUser } from '@/store/store';
import ReCAPTCHA from 'react-google-recaptcha';

const loginSchema = z.object({
    input: z.string().min(3, { message: 'Email is required' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState < string | null > (null);
    const [isLoading, setIsLoading] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState < string | null > (null);


    const recaptchaRef = useRef(null);
    const setUser = useUser((state) => state.setUser);

    const form = useForm < LoginSchema > ({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginSchema) => {
        if (!recaptchaValue) {
            setError("Please complete the reCAPTCHA.");
            return;
        }
        setIsLoading(true); // Mulai loading
        setError(null); // Reset error state
        try {
            const response = await login(data); // Panggil fungsi login
            if (response.status === true) {
                setUser(response.user);
                setIsLoading(false);
                router.push('/dashboard'); // Arahkan user ke halaman lain setelah login sukses
            } else {
                setIsLoading(false);
                setError(response);
            }
        } catch (err) {
            setError("Login failed. Please check your credentials.");

        } finally {
            setIsLoading(false); // Selesai loading
            recaptchaRef.current.reset();
            setRecaptchaValue(null);
        }
    };

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
        setError(null);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl">Welcome Back ...</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account.
                            </CardDescription>
                            {error && <div className="text-red-500">{error}</div>}
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <FormField
                                control={form.control}
                                name="input"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email/Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="admin@gmail.com" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="**********" type="password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-4">
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    ref={recaptchaRef}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Login"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
