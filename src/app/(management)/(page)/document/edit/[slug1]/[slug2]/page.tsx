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
import { patchDocuments } from '@/features/management/dokumen/usePatchDocuments';
import { getDocumentsById } from '@/features/management/dokumen/useGetDocumentsById';
import { logout, verifyToken } from '@/features/management/auth';
import PageLanding from '@/components/loading-ui/landing-page';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const editDocumentSchema = z.object({
    id: z.string().min(1, { message: 'ID is required' }),
    nomor: z.string().min(1, { message: 'Nomor is required' }),
    judul: z.string().min(3, { message: 'Judul is required' }),
    tipe_dokumen: z.string().min(3, { message: 'Tipe Dokumen is required' }),
    dokumen: z.string().min(3, { message: 'Dokumen is required' }),
    singkatan: z.string().min(1, { message: 'Singkatan is required' }),
    tahun: z.string().min(3, { message: 'Tahun is required' }),
    bahasa: z.string().min(1, { message: 'Bahasa is required' }),
    bidang: z.string().min(1, { message: 'Bidang is required' }),
    tempat_penetapan: z.string().min(3, { message: 'Tempat Penetapan is required' }),
    sumber: z.string().min(1, { message: 'Sumber Penetapan is required' }),
    lokasi: z.string().min(3, { message: 'Lokasi Penetapan is required' }),
    published: z.boolean().optional(),
    file: z
        .union([z.instanceof(File), z.null(), z.undefined()])
        .refine((file) => !file || file.size <= 20 * 1024 * 1024, {
            message: 'Ukuran file maksimal adalah 20MB',
        }),
});

type editDocumentSchema = z.infer<typeof editDocumentSchema>;

export default function EditDocument({ params }: { params: { slug1: String; slug2: Number } }) {
    const router = useRouter();
    const [error, setError] = useState(""); // State untuk array error
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState < Partial < editDocumentSchema >> ({});
    const [title, setTitle] = useState("");

    const years = [2021, 2022, 2023, 2024];
    const tipe_dokumen = ["perwako", "perda", "surat-keputusan", "lainnya"];
    const bidang = ["-", "Sekretariat", "Perbendaharaan", "Aset", "Akuntansi", "Anggaran", "Pendaftaran", "Penagihan"]

    const form = useForm < editDocumentSchema > ({
        resolver: zodResolver(editDocumentSchema),
    });

    const onSubmit = async (data: editDocumentSchema) => {

        try {
            // Membuat instance FormData
            const formData = new FormData();

            // Append semua field ke FormData
            formData.append("id", data.id);
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
            formData.append("published", String(data.published));

            // Append file secara khusus
            if (data.file) {
                formData.append("file", data.file);
            } else {
                formData.append("file", "");
            }

            // Panggil API postUsers dengan formData
            const response = await patchDocuments(formData);

            if (response.status === true) {
                setIsLoading(false);

                toast.success("Document updated successfully", {
                    position: "top-right",
                    description: response.message
                });
                router.push('/peraturan-daerah');
            } else {
                toast.error("Failed to update document", {
                    position: "top-right",
                    description: response
                });
                setError(response); // Set error sebagai array
            }
        } catch (err: any) {
            toast.error("Failed to update document", {
                position: "top-right",
                description: err
            });
            setError(err); // Pesan error umum
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
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

            const response = await getDocumentsById(params.slug2);
            if (response.status === false) {
                toast.error("Failed to get document", {
                    position: "top-right",
                    description: response.message
                });
                setError(response); // Set error sebagai array
            } else {
                setUser(response.data);
            }

        };
        checkToken();
    }, [params.slug2, router]);

    useEffect(() => {
        user.id = params.slug2.toString();
        const { ...restUser } = user;
        form.reset(restUser);
        form.setValue("file", null);
    }, [params.slug2, user, form]);

    useEffect(() => {
        // Update title berdasarkan pathname
        if (params.slug1 === "peraturan-daerah") {
            setTitle("Peraturan Daerah");
        } else if (params.slug1 === "peraturan-walikota") {
            setTitle("Peraturan Wali Kota");
        } else if (params.slug1 === "surat-keputusan") {
            setTitle("Surat Keputusan");
        } else if (params.slug1 === "lainnya") {
            setTitle("Lainnya");
        } else {
            setTitle("");
        }

    }, [params.slug1]);

    return (
        <div className="">
            <div>
                <Link href={`/${params.slug1}`}>
                    <Button variant="outline" className="w-full">
                        Back
                    </Button>
                </Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Edit Document {title}</CardTitle>
                            <CardDescription>
                                Edit Dokumen
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
                                            <Input placeholder="Judul" {...field} />
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
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tipe Dokumen</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                value={field.value}
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
                                            Diisi sesuai tipe dokumen
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
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tahun</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih tahun" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {years.map((tipe) => (
                                                        <SelectItem key={tipe} value={String(tipe)}>
                                                            {tipe}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Diisi sesuai tahun dokumen
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
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bidang</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih bidang" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {bidang.map((tipe) => (
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
                                name="published"
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
                                            Aktifkan jika status document dipulbish.
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
                                {isLoading ? "Loading..." : "Edit Dokumen"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
