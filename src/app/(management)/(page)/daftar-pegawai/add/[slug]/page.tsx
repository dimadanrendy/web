"use client";
import { use, useEffect, useState } from 'react';
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
import { postPegawai } from '@/features/management/pegawai/usePegawaiService';

const addAccountSchema = z.object({
    name: z.string().min(3, { message: 'Name is required' }),
    nip: z.string().min(1, { message: 'NIP is required' }),
    golongan: z.string().min(1, { message: 'Golongan is required' }),
    jabatan: z.string().min(1, { message: 'Jabatan is required' }),
    pendidikan_terahir: z.string().min(3, { message: 'Pendidikan terahir is required' }),
    email: z.string().min(1, { message: 'Email is required' }),
    bidang: z.string().min(1, { message: 'Bidang is required' }),
    status: z.string().min(3, { message: 'Status is required' }),
    image: z
        .instanceof(File)
        .refine((file) => file.size <= 2 * 1024 * 1024, { message: 'Ukuran file maksimal adalah 2MB' })
        .refine(
            (file) => ['image/jpeg', 'image/png'].includes(file.type),
            { message: 'Hanya file JPG, PNG yang diperbolehkan' }
        ),
});

type addAccountSchema = z.infer<typeof addAccountSchema>;

export default function AddPegawai({ params }: { params: { slug: String } }) {
    const router = useRouter();
    const [error, setError] = useState(""); // State untuk array error
    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState < string > ("");

    const tipe_role = ["admin", "user"];
    const tipe_bidang = ["-", "Sekretariat", "Perbendaharaan", "Aset", "Akuntansi", "Anggaran", "Pendaftaran", "Penagihan"];
    const status_pegawai = ["Pejabat Eselon", "PNS", "PHL"];

    const form = useForm < addAccountSchema > ({
        resolver: zodResolver(addAccountSchema),
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            form.setValue("image", file); // Update nilai file di form
        }
    };

    const onSubmit = async (data: addAccountSchema) => {
        try {
            // Membuat instance FormData
            const formData = new FormData();

            // Append semua field ke FormData
            formData.append("name", data.name);
            formData.append("nip", data.nip);
            formData.append("golongan", data.golongan);
            formData.append("jabatan", data.jabatan);
            formData.append("pendidikan_terahir", data.pendidikan_terahir);
            formData.append("email", data.email);
            formData.append("status", data.status);
            formData.append("bidang", data.bidang);

            // Append file secara khusus
            formData.append("image", data.image);

            console.log(formData);

            // Panggil API postUsers dengan formData
            const response = await postPegawai(formData);

            console.log(response);

            if (response.status === true) {
                toast.success("Document added successfully", {
                    position: "top-right",
                    description: response.message,
                });
            } else {
                const errorMsg = response.message || "Failed to add document";
                toast.error("Failed to add document", { description: errorMsg });
                setError(errorMsg);
            }

        } catch (err: any) {
            const errorMessage = err.message || "An unexpected error occurred";
            toast.error("Failed to add document", { description: errorMessage });
            setError(errorMessage); // Simpan hanya pesan string
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

    useEffect(() => {
        // Update title berdasarkan pathname
        if (params.slug === "pejabat-eselon") {
            setTitle("Daftar Pejabat Eselon");
            form.setValue("status", "Pejabat Eselon");
        } else if (params.slug === "staf-pns") {
            setTitle("Daftar Staf PNS");
            form.setValue("status", "PNS");
        } else if (params.slug === "staf-pppk") {
            setTitle("Daftar Staf PPPK");
            form.setValue("status", "PPPK");
        } else if (params.slug === "phl-sekretariat") {
            setTitle("Daftar PHL Sekretariat");
            form.setValue("status", "PHL");
        } else if (params.slug === "phl-perbendaharaan") {
            setTitle("Daftar PHL Perbendaharaan");
            form.setValue("status", "PHL");
        } else if (params.slug === "phl-aset") {
            setTitle("Daftar PHL Aset");
            form.setValue("status", "PHL");
        } else if (params.slug === "phl-akuntansi") {
            setTitle("Daftar PHL Akuntansi");
            form.setValue("status", "PHL");
        } else if (params.slug === "phl-anggaran") {
            setTitle("Daftar PHL Anggaran");
            form.setValue("status", "PHL");
        } else if (params.slug === "phl-pendaftaran") {
            setTitle("Daftar PHL Pendaftaran");
            form.setValue("status", "PHL");
        } else if (params.slug === "phl-penagihan") {
            setTitle("Daftar PHL Penagihan");
            form.setValue("status", "PHL");
        } else {
            setTitle("Daftar Pegawai");
        }
    }, [params.slug, form]);
    return (
        <div className="">

            <div>
                <Link href={`/daftar-pegawai/all/${params.slug}`}>
                    <Button variant="outline" className="w-full">
                        Back
                    </Button>
                </Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Add {title}</CardTitle>
                            <CardDescription>
                                Tambahkan {title} baru
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                name="jabatan"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jabatan</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jabatan" {...field} />
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
                                name="nip"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>NIP</FormLabel>
                                        <FormControl>
                                            <Input placeholder="1971...." {...field} />
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
                                name="golongan"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Golongan</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Golongan" {...field} />
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
                                name="pendidikan_terahir"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pendidikan Terahir</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Pendidikan Terahir" {...field} />
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

                            {/* <FormField
                                control={form.control}
                                name="status"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih status pegawai" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {status_pegawai.map((tipe) => (
                                                        <SelectItem key={tipe} value={String(tipe)}>
                                                            {tipe}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Diisi sesuai status pegawai
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

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

                            {/* <FormField control={form.control} name="status" render={({ field }) => (
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
                            )} /> */}

                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Upload Image</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                onChange={handleFileChange}
                                                className='hover:cursor-pointer'

                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Upload Image terkait
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full text-white" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Add Pegawai"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
