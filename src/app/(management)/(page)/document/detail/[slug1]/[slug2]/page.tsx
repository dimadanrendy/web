"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { getDocumentsById } from '@/features/management/dokumen/useGetDocumentsById';
import { logout, verifyToken } from '@/features/management/auth';
import Link from 'next/link';
import PageLanding from '@/components/loading-ui/landing-page';
import { getFile } from '@/features/management/file/useGetFile';
import { saveAs } from 'file-saver';

interface DataDocumentType {
    nomor?: string;
    judul?: string;
    documentUrl?: string;
    fileType?: string;
    tipe_dokumen?: string;
    bidang?: string;
    lokasi?: string;
    tahun?: string;
    bahasa?: string;
    file?: string;
    tempat_penetapan?: string;
    singkatan?: string;
    sumber?: string;
    published?: string;
    createdAt?: string;
    authorUsername?: string;
}

export default function DetailDocument({ params }: { params: { slug1: String; slug2: number } }) {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [DataDocument, setDocument] = useState < DataDocumentType > ({});

    useEffect(() => {
        const checkToken = async () => {
            setIsLoading(true);
            const isValid = await verifyToken();
            if (!isValid) {
                await logout();
                localStorage.removeItem('auth-storage');
                router.push('/login');
                return;
            }

            const response = await getDocumentsById(params.slug2);
            if (!response.status) {
                toast.error("Failed to get document", {
                    position: "top-right",
                    description: response.message,
                });
                setError(response.message);
            } else {
                setDocument(response.data);
            }
            setIsLoading(false);
        };

        checkToken();
    }, [params.slug2, router]);

    if (isLoading) {
        return <PageLanding />;
    }

    return (
        <div className="">
            <div>
                <Link href={`/${params.slug1}`}>
                    <Button variant="outline" className="w-full">
                        Back
                    </Button>
                </Link>
            </div>
            <Card className="w-full">
                <CardContent className="grid grid-cols-1 xl:grid-cols-3 gap-4 p-3">
                    <div>
                        <h1 className="text-2xl mb-2">Detail Dokumen</h1>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nomor</Label>
                                <Input readOnly defaultValue={DataDocument?.nomor ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Judul</Label>
                                <Textarea readOnly defaultValue={DataDocument?.judul ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tipe Dokumen</Label>
                                <Input readOnly defaultValue={DataDocument?.tipe_dokumen ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tahun</Label>
                                <Input readOnly defaultValue={DataDocument?.tahun ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Bahasa</Label>
                                <Input readOnly defaultValue={DataDocument?.bahasa ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tempat Penetapan</Label>
                                <Input readOnly defaultValue={DataDocument?.tempat_penetapan ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Singkatan</Label>
                                <Input readOnly defaultValue={DataDocument?.singkatan ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Bidang</Label>
                                <Input readOnly defaultValue={DataDocument?.bidang ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Sumber</Label>
                                <Input readOnly defaultValue={DataDocument?.sumber ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Published</Label>
                                <Input readOnly defaultValue={DataDocument?.published ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Lokasi</Label>
                                <Input readOnly defaultValue={DataDocument?.lokasi ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Sumber</Label>
                                <Input readOnly defaultValue={DataDocument?.sumber ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">File</Label>
                                <Input readOnly defaultValue={DataDocument?.file ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                        <div className="grid w-full items-center gap-1 mb-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Author</Label>
                                <Input readOnly defaultValue={DataDocument?.authorUsername ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="h-[1000px]">
                            {DataDocument?.documentUrl ? (
                                DataDocument.fileType === "pdf" ? (
                                    <iframe src={DataDocument.documentUrl} width="100%" height="100%" />
                                ) : (
                                    <Button
                                        onClick={() => saveAs(DataDocument.documentUrl, "document-file")}
                                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                                    >
                                        Download Document
                                    </Button>
                                )
                            ) : (
                                <h1>Document not available</h1>
                            )}

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
