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

interface DataDocumentType {
    nomor?: string;
    judul?: string;
    tipe_dokumen?: string;
    tahun?: string;
    bahasa?: string;
    tempat_penetapan?: string;
    singkatan?: string;
    sumber?: string;
    published?: string;
    createdAt?: string;
    authorUsername?: string;
}

export default function DetailDocument({ params }: { params: { slug: number } }) {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [DataDocument, setDocument] = useState < DataDocumentType > ({});
    const [file, setFile] = useState < string > ("");

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

            const response = await getDocumentsById(params.slug);
            if (!response.status) {
                toast.error("Failed to get document", {
                    position: "top-right",
                    description: response.message,
                });
                setError(response.message);
            } else {
                const fileResponse = await getFile(response.data.file);
                setFile(fileResponse);
                setDocument(response.data);
            }
            setIsLoading(false);
        };

        checkToken();
    }, [params.slug, router]);

    if (isLoading) {
        return <PageLanding />;
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
                    <div>
                        <h1 className="text-4xl mb-2">Detail Dokumen</h1>
                        <div className="grid w-full items-center gap-1">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nomor</Label>
                                <Input readOnly defaultValue={DataDocument?.nomor ?? ""} />
                            </div>
                            {/* Repeat similar blocks for other fields */}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="h-[800px]">
                            <iframe src={file} width="100%" height="100%" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
