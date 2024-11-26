"use client";
import { useEffect, useState } from 'react';
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
import Link from 'next/link';
import { patchUsers } from '@/features/management/users/usePatchUser';
import { logout, verifyToken } from '@/features/management/auth';
import { getUsersById } from '@/features/management/users/useGetUserById';
import { toast } from 'sonner';
const EditAccountSchema = z.object({
    id: z.string().min(3, { message: 'ID is required' }),
    email: z.string().min(3, { message: 'Email is required' }),
    username: z.string().min(3, { message: 'Username is required' }),
    name: z.string().min(3, { message: 'Name is required' }),
    bidang: z.string().min(3, { message: 'Bidang is required' }),
    role: z.string().min(3, { message: 'Role is required' }),
    password: z.string().min(1, { message: 'Password is required' }).optional(),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }).optional(),
    status: z.boolean().default(true)
});

type EditAccountSchema = z.infer<typeof EditAccountSchema>;

export default function EditAccount({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [error, setError] = useState(""); // State for error messages
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState < Partial < EditAccountSchema >> ({});

    const form = useForm < EditAccountSchema > ({
        resolver: zodResolver(EditAccountSchema),
    });

    const onSubmit = async (data: EditAccountSchema) => {

        setIsLoading(true);
        try {

            const response = await patchUsers(data);

            if (response.status === true) {
                setIsLoading(false);
                toast.success("User updated successfully", {
                    position: "top-right",
                    description: response.message
                })
                router.push('/account');
            } else {
                setIsLoading(false);
                setError(response.message); // Set error message
            }
        } catch (err: any) {
            setIsLoading(false);
            setError(err); // General error message
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const isValid = await verifyToken();
            if (!isValid) {
                await logout();
                localStorage.removeItem('auth-storage');
                router.push('/login');
                return;
            }

            const response = await getUsersById(params.slug);
            if (response.status === false) {
                toast.error("User not found", {
                    position: "top-right",
                    description: response.message
                })
                return;
            }
            setUser(response.data);
        };

        fetchUserData();
    }, [params.slug, router]);

    // Update default values whenever user data changes
    useEffect(() => {
        user.id = params.slug;
        const { password, confirmPassword, ...restUser } = user;
        form.reset(restUser);
    }, [params.slug, user, form]);

    return (
        <div>
            <div>
                <Link href="/account">
                    <Button variant="outline" className="w-full">
                        Back
                    </Button>
                </Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Edit Account</CardTitle>
                            <CardDescription>
                                Update your account details.
                            </CardDescription>
                            {error && (
                                <div className="text-red-500 space-y-2">
                                    <p>{error}</p>
                                </div>
                            )}
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/** Form Fields **/}
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="jhondoe@gmail.com" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="username" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="jhondoe" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="role" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Input placeholder="admin/user" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="bidang" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bidang</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Bidang" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="checkbox"
                                                checked={!!field.value}
                                                onChange={(e) => field.onChange(e.target.checked)}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Aktifkan jika status akun aktif.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField control={form.control} name="password" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="**********" type="password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Leave empty to keep the current password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="**********" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full text-white" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Update Account"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
