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
import { postUsers } from '@/features/management/users/usePostUsers';
import { logout, verifyToken } from '@/features/management/auth';
import PageLanding from '@/components/loading-ui/landing-page';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const addAccountSchema = z.object({
    email: z.string().min(3, { message: 'Email is required' }),
    username: z.string().min(3, { message: 'Username is required' }),
    name: z.string().min(3, { message: 'Name is required' }),
    bidang: z.string().min(3, { message: 'Bidang is required' }),
    role: z.string().min(3, { message: 'Role is required' }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
    status: z.boolean(),
});

type addAccountSchema = z.infer<typeof addAccountSchema>;

export default function AddAccount() {
    const router = useRouter();
    const [error, setError] = useState(""); // State untuk array error
    const [isLoading, setIsLoading] = useState(false);

    const tipe_role = ["admin", "user"];
    const tipe_bidang = ["Sekretariat", "Perbendaharaan", "Aset", "Akuntansi", "Anggaran", "Pendaftaran", "Penagihan"];

    const form = useForm < addAccountSchema > ({
        resolver: zodResolver(addAccountSchema),
    });

    const onSubmit = async (data: addAccountSchema) => {
        setIsLoading(true);
        try {
            const response = await postUsers(data);
            if (response.status === true) {
                setIsLoading(false);
                toast.success("User added successfully", {
                    position: "top-right",
                    description: response.message
                })
                router.push('/account');
            } else {
                toast.error("Failed to add user", {
                    position: "top-right",
                    description: response
                })

                setError(response); // Set error sebagai array
            }
        } catch (err: any) {
            toast.error("Failed to add user", {
                position: "top-right",
                description: err
            })

            setError(err); // Pesan error umum
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const checkToken = async () => {
            const isValid = await verifyToken();
            if (isValid === false || isValid === null || isValid === undefined) {
                const success = await logout();
                localStorage.removeItem('auth-storage');
                router.push('/login');
            }

        };
        checkToken();
    }, [router]);
    return (
        <div className="">

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
                            <CardTitle className="text-2xl">Add Account</CardTitle>
                            <CardDescription>
                                Tambahkan Akun
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                defaultValue=""
                                render={({ field }) => (
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
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                defaultValue=""
                                render={({ field }) => (
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
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="name"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jhon Doe" {...field} />
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
                                name="role"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {tipe_role.map((tipe) => (
                                                        <SelectItem key={tipe} value={String(tipe)}>
                                                            {tipe}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Tipe harap diisi sesuai dokumen
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="bidang"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bidang</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih bidang" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {tipe_bidang.map((tipe) => (
                                                        <SelectItem key={tipe} value={String(tipe)}>
                                                            {tipe}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Diisi sesuai bidang author
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField control={form.control} name="status" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="checkbox"
                                            {...field}
                                            value={field.value ? "true" : "false"}
                                            onChange={(e) => field.onChange(e.target.checked)} // Set nilai sesuai dengan checked
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Aktifkan jika status akun aktif.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />

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

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Konfirmasi Password</FormLabel>
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
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full text-white" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Add Account"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
