"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { IDocuments } from "@/types/index";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { getDocumentsById } from '@/features/management/dokumen/useGetDocumentsById';
import { logout, verifyToken } from '@/features/management/auth';
import Link from 'next/link';
import PageLanding from '@/components/loading-ui/landing-page';
import { Textarea } from '@/components/ui/textarea';
import { getFile } from '@/features/management/file/useGetFile';

export default function DetailDocument({ params }: { params: { slug: Number } }) {

    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [DataDocument, setDocument] = useState({}) || "";
    const [file, setFile] = useState("") || "";

    useEffect(() => {
        const checkToken = async () => {
            setIsLoading(true);
            const isValid = await verifyToken();
            if (isValid === false || isValid === null || isValid === undefined) {
                const success = await logout();
                localStorage.removeItem('auth-storage');
                router.push('/login');
            }

            const response = await getDocumentsById(params.slug);
            if (response.status === false) {
                toast.error("Failed to get document", {
                    position: "top-right",
                    description: response.message
                });
                setIsLoading(false);
                setError(response);
            } else {
                const file = await getFile(response.data.file);
                setFile(file);
                setIsLoading(false);
                setDocument(response.data);
            }



        };
        checkToken();
    }, [params.slug, router, setError, setIsLoading, setDocument, setFile]);

    if (isLoading) {
        return <div>loading..</div>
    }

    return (
        <div className="">
            <div>
                <Link href="/peraturan-daerah">
                    <Button variant="outline" className="w-full">
                        Back
                    </Button>
                </Link>
            </div>
            <Card className="w-full">
                <CardContent className="grid grid-cols-1 xl:grid-cols-3 gap-4 p-3">
                    <div >
                        <h1 className='text-4xl mb-2'>Detail Dokumen</h1>
                        <div className="grid w-full items-center gap-1">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nomor</Label>
                                <Input readOnly defaultValue={DataDocument.nomor} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Judul</Label>
                                <Textarea readOnly defaultValue={DataDocument.judul} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tipe Dokumen</Label>
                                <Input readOnly defaultValue={DataDocument.tipe_dokumen} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tahun</Label>
                                <Input readOnly defaultValue={DataDocument.tahun} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Bahasa</Label>
                                <Input readOnly defaultValue={DataDocument.bahasa} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tempat Penetapan</Label>
                                <Input readOnly defaultValue={DataDocument.tempat_penetapan} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Singkatan</Label>
                                <Input readOnly defaultValue={DataDocument.singkatan} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Sumber</Label>
                                <Input readOnly defaultValue={DataDocument.sumber} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Publish</Label>
                                <Input readOnly defaultValue={DataDocument.published} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tanggal Dibuat</Label>
                                <Input readOnly defaultValue={DataDocument.createdAt} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Author</Label>
                                <Input readOnly defaultValue={DataDocument.authorUsername} />
                            </div>
                            {/* <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Framework</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div> */}
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='h-[800px]'>
                            <iframe
                                src={file ?? ""}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
