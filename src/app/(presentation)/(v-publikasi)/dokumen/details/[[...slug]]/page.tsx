"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function DetailsPerwako({ params }: {
    params: { slug: string[] }
}) {
    const { slug } = params;

    console.log(slug);

    const [title, setTitle] = useState < string > ("");

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
            } else if (jenisDokumen === "dokumenlainnya") {
                setTitle(`Dokumen Lainnya`);
            } else {
                setTitle("Dokumen Tidak Ditemukan");
            }
        }
    }, [slug])

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

                <Link href={`${slug[1]}/24`} >
                    <div className="flex flex-col gap-4 pb-4 hover:scale-105">
                        <div className="w-full h-48 bg-primary rounded-lg">
                            <div className="grid grid-cols-6 gap-4 h-40 items-center text-slate-100">
                                <div className="col-start-1 col-end-7 p-2">
                                    <div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-medium leading-none">{title}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Nomor:
                                            </p>
                                        </div>
                                        <Separator className="my-4" />
                                        <div className="flex h-5 items-center space-x-4 text-sm">
                                            <div>Uplouded : </div>
                                            <div>Kamis</div>
                                            <Separator orientation="vertical" />
                                            <div>09</div>
                                            <Separator orientation="vertical" />
                                            <div>Desember</div>
                                            <Separator orientation="vertical" />
                                            <div>2024</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-start-1 col-end-7 px-2 line-clamp-3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sequi in error deserunt ipsa incidunt perferendis quod neque recusandae eius!
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    if (slug?.length === 3) {
        return (
            <div className="max-w-7xl mx-auto p-4 divide-y divide-slate-200">
                <div className="pt-2">
                    <h1 className="font-bold">Nomor</h1>
                    <span className="text-slate-500" >1 Tahun {slug[1]}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Judul</h1>
                    <span className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime!</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tipe Dokumen</h1>
                    <span className="text-slate-500">Peraturan Wali Kota</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Subjek</h1>
                    <span className="text-slate-500">Anggaran</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Jenis / Bentuk Peraturan</h1>
                    <span className="text-slate-500">Surat Edaran</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Singkatan Jenis / Bentuk Peraturan</h1>
                    <span className="text-slate-500">SE</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tahun</h1>
                    <span className="text-slate-500">{slug[1]}</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Bahasa</h1>
                    <span className="text-slate-500">Indonesia</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tempat Penetapan</h1>
                    <span className="text-slate-500">Pangkal Pinang</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Tanggal Penetapan</h1>
                    <span className="text-slate-500">17 Agustus 2024</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Sumber</h1>
                    <span className="text-slate-500">-</span>
                </div>
                <div className="my-4 pt-2">
                    <h1 className="font-bold">Lokasi</h1>
                    <span className="text-slate-500">Badan Keuangan Daerah</span>
                </div>
                <div className="my-4 pt-2 space-x-3">
                    <Button variant="outline" className="">Unduh</Button>
                    <Button variant="outline" className="">Pratinjau</Button>
                    <Button variant="outline" className="">Evaluasi</Button>
                </div>
                <div className="my-4 pt-2">
                    <span className="text-slate-500 text-sm">Berlaku</span>
                </div>

            </div>
        )

    }
    return (
        <div>
            <h1>Folder as</h1>
        </div>
    )
}
