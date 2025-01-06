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
import { postDocuments } from '@/features/management/dokumen/usePostDocuments';
import { logout, verifyToken } from '@/features/management/auth';
import PageLanding from '@/components/loading-ui/landing-page';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const addDocumentSchema = z.object({
    nomor: z.string().min(3, { message: 'Nomor is required' }),
    judul: z.string().min(3, { message: 'Judul is required' }),
    tipe_dokumen: z.string().min(3, { message: 'Tipe Dokumen is required' }),
    dokumen: z.string().min(3, { message: 'Dokumen is required' }),
    singkatan: z.string().min(1, { message: 'Singkatan is required' }),
    tahun: z.string().min(3, { message: 'Tahun is required' }),
    bahasa: z.string().min(3, { message: 'Bahasa is required' }),
    bidang: z.string().min(3, { message: 'Bidang is required' }),
    tempat_penetapan: z.string().min(3, { message: 'Tempat Penetapan is required' }),
    sumber: z.string().min(1, { message: 'Sumber Penetapan is required' }),
    lokasi: z.string().min(3, { message: 'Lokasi Penetapan is required' }),
    file: z
        .instanceof(File)
        .refine((file) => file.size <= 2 * 1024 * 1024, { message: 'Ukuran file maksimal adalah 2MB' })
        .refine((file) => ["application/pdf"].includes(file.type), { message: 'Hanya file PDF yang diperbolehkan' })
    // password: z.string().min(1, { message: 'Password is required' }),
    // confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
    // status: z.boolean(),
});

type addDocumentSchema = z.infer<typeof addDocumentSchema>;

export default function AddDocument({ params }: { params: { slug: any } }) {
    const router = useRouter();
    const [error, setError] = useState(""); // State untuk array error
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState < string > ("Dokumen");

    const years = [2021, 2022, 2023, 2024];
    const tipe_dokumen = ["perwako", "perda", "surat-keputusan", "lainnya"];
    const bidang = ["Sekretariat", "Perbendaharaan", "Aset", "Akuntansi", "Anggaran", "Pendaftaran", "Penagihan"]

    const form = useForm < addDocumentSchema > ({
        resolver: zodResolver(addDocumentSchema),
    });

    const onSubmit = async (data: addDocumentSchema) => {
        try {
            // Membuat instance FormData
            const formData = new FormData();

            // Append semua field ke FormData
            formData.append("nomor", data.nomor);
            formData.append("judul", data.judul);
            formData.append("tipe_dokumen", data.tipe_dokumen);
            formData.append("dokumen", data.dokumen);
            formData.append("singkatan", data.singkatan);
            formData.append("tahun", data.tahun);
            formData.append("bahasa", data.bahasa);
            formData.append("bidang", data.bidang);
            formData.append("tempat_penetapan", data.tempat_penetapan);
            formData.append("sumber", data.sumber);
            formData.append("lokasi", data.lokasi);

            // Append file secara khusus
            formData.append("file", data.file);

            // Panggil API postUsers dengan formData
            const response = await postDocuments(formData);

            if (response.status === true) {
                setIsLoading(false);

                toast.success("Document added successfully", {
                    position: "top-right",
                    description: response.message
                });
                router.push(`/${params.slug}`);
            } else {
                toast.error("Failed to add document", { description: response });
                setError(response); // Set error sebagai array
            }
        } catch (err: any) {
            toast.error("Failed to add document", { description: err });
            setError(err); // Pesan error umum
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            form.setValue("file", file); // Update nilai file di form
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
    }, [router, params.slug]);

    useEffect(() => {
        // Update title berdasarkan pathname
        if (params.slug === "peraturan-daerah") {
            setTitle("Peraturan Daerah");
        } else if (params.slug === "peraturan-walikota") {
            setTitle("Peraturan Wali Kota");
        } else if (params.slug === "surat-keputusan") {
            setTitle("Surat Keputusan");
        } else if (params.slug === "dokumen-lainnya") {
            setTitle("Lainnya");
        } else {
            setTitle("");
        }

    }, [params.slug]);

    return (
        <div className="">
            <div>
                <Link href={`/${params.slug}`}>
                    <Button variant="outline" className="w-full">
                        Back
                    </Button>
                </Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Add Document {title}</CardTitle>
                            <CardDescription>
                                Tambahkan Dokumen
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="nomor"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nomor</FormLabel>
                                        <FormControl>
                                            <Input placeholder="00/BAKEUDA/2024" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nomor dokumen harap diisi
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="judul"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Judul</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Judul" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Judul dokumen harap diisi
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tipe_dokumen"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tipe Dokumen</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih tipe dokumen" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {tipe_dokumen.map((tipe) => (
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
                                name="dokumen"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dokumen Tentang</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dokumen Tentang" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Dokumen harap diisi sesuai dokumen
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="singkatan"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Singkatan</FormLabel>
                                        <FormControl>
                                            <Input placeholder="-" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Singkatan harap diisi jika ada / -
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tahun"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tahun</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih tahun" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {years.map((year) => (
                                                        <SelectItem key={year} value={String(year)}>
                                                            {year}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Tahun harap diisi sesuai dokumen
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="bahasa"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bahasa</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Indonesia" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Bahasa harap diisi sesuai dokumen
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
                                                    {bidang.map((b) => (
                                                        <SelectItem key={b} value={String(b)}>
                                                            {b}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Bidang harap diisi
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tempat_penetapan"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tempat Penetapan</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Bakeuda Kota Pangkal Pinang" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Harap diisi sesuai dokumen tempat penetapan
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="sumber"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sumber</FormLabel>
                                        <FormControl>
                                            <Input placeholder="sumber" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Harap diisi sesuai dokumen sumber jika ada / -
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lokasi"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lokasi Dokumen</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Pemerintah Kota Pangkal Pinang" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Pemerintah Kota Pangkal Pinang
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="file"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Upload Dokumen</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="bidang"
                                                type="file"
                                                onChange={handleFileChange}
                                                className='hover:cursor-pointer'

                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Upload dokumen terkait
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
                            /> */}
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full text-white" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Add Document"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
