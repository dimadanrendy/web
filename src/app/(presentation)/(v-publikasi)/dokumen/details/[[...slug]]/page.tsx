"use client";
import PageLanding from "@/components/loading-ui/landing-page";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { getDokumenBySlug } from "@/features/presentesion/dokumen/useGetManagementDokumen";
import { formatDate } from "@/lib/date";
import { useQuery } from "@tanstack/react-query";
import { Calendar } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";
import { saveAs } from 'file-saver';

export default function DetailsPerwako({ params }: {
    params: { slug: string[] }
}) {
    const { slug } = params;

    const [title, setTitle] = useState < string > ("");
    const [documentData, setDocumentData] = useState < any > (null);


    const { data, isLoading, error } = useQuery({
        queryKey: [slug[0]],
        queryFn: async () => {
            return await getDokumenBySlug(slug[0], slug[1]);
        },
    });

    const handlePratinjau = (fileUrl: string) => {
        // Membuka file PDF di tab baru
        window.open(fileUrl, "_blank"); // Membuka file PDF di tab baru
    };

    useEffect(() => {
        if (slug && slug.length > 0) {
            // Ambil nilai dari slug
            const jenisDokumen = slug[0]; // Index pertama
            const tahunDokumen = slug[1]; // Index kedua

            // Contoh kondisi berdasarkan slug
            if (jenisDokumen === "perwako") {
                setTitle(`Peraturan Wali Kota`);
            } else if (jenisDokumen === "perda") {
                setTitle(`Peraturan Daerah`);
            } else if (jenisDokumen === "sk") {
                setTitle(`Surat Keputusan`);
            } else if (jenisDokumen === "lainnya") {
                setTitle(`Dokumen Lainnya`);
            } else {
                setTitle("Dokumen Tidak Ditemukan");
            }
        }
    }, [slug])

    useEffect(() => {
        if (data?.data && slug?.length === 3) {
            // Cari dokumen berdasarkan id_documents yang ada di slug[2]
            const document = data.data.find((item: any) => item.id_documents === Number(slug[2]));
            setDocumentData(document); // Set data ke state
        }
    }, [data, slug]);

    if (slug?.length === 2) {
        return (
            <div className="px-6 xl:max-w-7xl mx-auto">
                <h1 className="uppercase font-bold text-2xl md:text-3xl py-6">Dokumen {slug[0]} tahun {slug[1]}</h1>
                <div className="flex gap-4 pb-4">
                    <Input type="email" placeholder="Cari dokumen..." className="w-1/2" />
                    <Button type="submit" className="text-slate-200">Cari</Button>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" className="text-slate-100 bg-primary hover:bg-primary/90 hover:text-slate-200">Filter</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="text-slate-100">Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

                {isLoading ? (
                    <div className="text-center text-gray-500">Loading dokumen...</div>
                ) : data?.data?.length ? (
                    data.data.map((item: any) => (
                        <Link key={item.id_documents} href={`${slug[1]}/${item.id_documents}`}>
                            <div className="flex flex-col gap-4 pb-4 hover:scale-105">
                                <div className="w-full h-24 bg-primary rounded-lg">
                                    <div className="grid grid-cols-6 gap-1 items-center text-slate-100">
                                        <div className="col-start-1 col-end-7 p-2">
                                            <div>
                                                <div className="space-y-1">
                                                    <h4 className="text-sm font-medium leading-none">
                                                        {item.judul}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Nomor: {item.nomor}
                                                    </p>
                                                </div>
                                                <Separator className="my-4" />
                                                <div className="flex h-2 items-center space-x-4 text-sm">
                                                    <Calendar className="mr-2 h-4 w-4" /> {formatDate(item.createdAt)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        Tidak ada dokumen tersedia.
                    </div>
                )}



            </div>
        )
    }

    if (slug?.length === 3 && documentData) {
        return (
            <div className="max-w-7xl mx-auto p-4 divide-y divide-slate-200">
                <div className="pt-2">
                    <h1 className="font-bold">Di Publikasikan</h1>
                    <span className="text-slate-500" >{formatDate(documentData?.createdAt)}</span>

                </div>
                <div className="pt-2">
                    <h1 className="font-bold">Nomor</h1>
                    <span className="text-slate-500" >{documentData?.nomor}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Judul</h1>
                    <span className="text-slate-500">{documentData?.judul}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Dokumen</h1>
                    <span className="text-slate-500">{documentData?.dokumen}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tipe Dokumen</h1>
                    <span className="text-slate-500">{documentData?.tipe_dokumen}</span>
                </div>

                <div className="my-4 pt-2">
                    <h1 className="font-bold">Subjek</h1>
                    <span className="text-slate-500">{documentData?.bidang}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Singkatan Jenis / Bentuk Peraturan</h1>
                    <span className="text-slate-500">{documentData?.singkatan}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tahun</h1>
                    <span className="text-slate-500">{documentData?.tahun}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Bahasa</h1>
                    <span className="text-slate-500">{documentData?.bahasa}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tempat Penetapan</h1>
                    <span className="text-slate-500">{documentData?.tempat_penetapan}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Sumber</h1>
                    <span className="text-slate-500">{documentData?.sumber}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Lokasi</h1>
                    <span className="text-slate-500">{documentData?.lokasi}</span>
                </div>
                <div className="my-4 pt-2 space-x-3 flex gap-2">
                    <Button variant="outline" onClick={() => saveAs(documentData?.documentUrl, documentData?.file)} className="">Unduh</Button>

                    {documentData?.fileType === 'pdf' ? (
                        <Button variant="outline" onClick={() => handlePratinjau(documentData?.documentUrl)} className="">
                            Pratinjau
                        </Button>
                    ) : documentData?.fileType === 'rar' || documentData?.fileType === 'zip' ? (
                        <div className="text-warning">
                            File berbentuk {documentData?.fileType}. Silakan unduh untuk membuka.
                        </div>
                    ) : null}

                </div>
                <div className="my-4 pt-2">
                    <span className="text-slate-500 text-sm">{documentData?.published ? "Published" : "Unpublished"}</span>
                </div>

            </div>
        )

        if (isLoading) {
            return <PageLanding />;
        }

    }
    return (
        <div>
            <h1>Folder as</h1>
        </div>
    )
}
