"use client";
import { use, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { id } from "date-fns/locale";
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
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { postBerita } from '@/features/management/berita/useManagementBerita';

const addAccountSchema = z.object({
    judul: z.string().min(3, { message: 'Judul is required' }),
    tipe: z.string().min(3, { message: 'Tipe is required' }),
    deskripsi: z.string().min(1, { message: 'Deskripsi is required' }),
    bidang: z.string().min(1, { message: 'Bidang is required' }),
    tanggal: z.string().min(1, { message: 'Tanggal is required' }),
    file: z.any().refine(
        (file) => file instanceof File && file.size <= 30 * 1024 * 1024,
        { message: 'Ukuran file maksimal adalah 30MB' }
    ).refine(
        (file) => ['image/jpeg', 'image/png', 'video/mp4'].includes(file.type),
        { message: 'Hanya file JPG, PNG yang diperbolehkan' }
    )

});

type addAccountSchema = z.infer<typeof addAccountSchema>;

export default function AddPegawai({ params }: { params: { slug: String } }) {
    const router = useRouter();
    const [error, setError] = useState(""); // State untuk array error
    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState < string > ("");

    const formatDateToIndonesian = (date: Date): string => {
        return format(date, "EEEE, dd MMMM yyyy", { locale: id });
    };

    const tipe_bidang = ["-", "Sekretariat", "Perbendaharaan", "Aset", "Akuntansi", "Anggaran", "Pendaftaran", "Penagihan"];

    const form = useForm < addAccountSchema > ({
        resolver: zodResolver(addAccountSchema),
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            form.setValue("file", file); // Update nilai file di form
        }
    };

    const onSubmit = async (data: addAccountSchema) => {
        try {
            // Membuat instance FormData
            const formData = new FormData();

            // Append semua field ke FormData
            formData.append("judul", data.judul);
            formData.append("tipe", data.tipe);
            formData.append("deskripsi", data.deskripsi);
            formData.append("bidang", data.bidang);
            formData.append("tanggal", data.tanggal);

            // Append file secara khusus
            formData.append("file", data.file);

            // Panggil API postUsers dengan formData
            const response = await postBerita(formData);

            if (response.status === true) {
                setIsLoading(false);

                toast.success("Berita added successfully", {
                    position: "top-right",
                    description: response.message
                });
                router.push(`/management-berita/all/${params.slug}`);
            } else {
                toast.error("Failed to add Berita", { description: response });
                setError(response); // Set error sebagai array
            }
        } catch (err: any) {
            toast.error("Failed to add Berita", { description: err });
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

    useEffect(() => {
        // Update title berdasarkan pathname
        if (params.slug === "slider") {
            setTitle("Slider");
            form.setValue("tipe", "Slider");
        } else if (params.slug === "berita-foto") {
            setTitle("Berita Foto");
            form.setValue("tipe", "Berita Foto");
        } else if (params.slug === "berita-video") {
            setTitle("Berita Video");
            form.setValue("tipe", "Berita Video");
        } else if (params.slug === "kegiatan") {
            setTitle("Kegiatan");
            form.setValue("tipe", "Kegiatan");
        } else if (params.slug === "sekilas-info") {
            setTitle("Sekilas Info");
            form.setValue("tipe", "Sekilas Info");
        } else if (params.slug === "banner") {
            setTitle("Banner");
            form.setValue("tipe", "Banner");
        } else if (params.slug === "seputar-informasi") {
            setTitle("Seputar Informasi");
            form.setValue("tipe", "Seputar Informasi");
        } else {
            setTitle("Berita");
        }
    }, [params.slug, form]);
    return (
        <div className="">

            <div>
                <Link href={`/management-berita/all/${params.slug}`}>
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
                                name="deskripsi"
                                defaultValue=""
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Deskripsi</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Deskripsi" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Harap isi deskripsi
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

                            <FormField
                                control={form.control}
                                name="tanggal"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tanggal</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className="w-full justify-start text-left font-normal"
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value
                                                            ? formatDateToIndonesian(new Date(field.value)) // Format ke Bahasa Indonesia saat ditampilkan
                                                            : "Pilih Tanggal"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value ? new Date(field.value) : undefined} // Convert string to Date if not undefined
                                                        onSelect={(date) => {
                                                            if (date) {
                                                                const formattedDate = formatDateToIndonesian(date); // Format tanggal sebelum disimpan
                                                                field.onChange(formattedDate);
                                                            }
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="file"
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
                                {isLoading ? "Loading..." : "Add Berita"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
