"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { pj, kaban, sekda1 } from '@/lib/image'
import { Skeleton } from '../ui/skleton'
import { useQuery } from '@tanstack/react-query'
import { getBeritaByTipe } from '@/features/presentesion/berita/useGetManagementBerita';

type Berita = {
    id_photos: string;
    judul: string;
    tipe: string;
    deskripsi: string;
    bidang: string;
    tanggal: string;
    file: string;
    published: string;
    authorId: string;
    authorUsername: string;
    createdAt: string;
    updatedAt: string;
    photoUrl: string;
};

export default function FotoPemimpin() {
    const [pageFoto, setPageFoto] = useState(1);
    const [pageSize, setPageSize] = useState(10);


    const { data: DataBeritaFoto, isLoading: LoadingBeritaFoto } = useQuery({
        queryKey: ["berita", "banner", pageFoto],
        queryFn: async () => {
            return await getBeritaByTipe("banner", pageFoto, pageSize);
        },
    });
    return (
        <div>
            <div className="top-24 z-30 -ml-2  w-full shrink-0 sticky block">
                <div className="content-wrap ">
                    <div className="px-2">
                        <h1 className="text-2xl font-bold text-secondary-foreground ">
                            PIMPINAN
                        </h1>
                        <div className="py-2 overflow-y-scroll h-[350px] w-full">
                            <div className="w-[800px] flex gap-2 justify-start">
                                <Link href={"https://website.pangkalpinangkota.go.id/profil-penjabat-walikota-pangkalpinang-2/"} target="_blank" className='bg-white'>
                                    <div className="h-[210px]  aspect-[9/16] rounded-lg w-[250px] ">
                                        <Image src={pj} alt="logo" width={2500} height={2500} className='w-[98%] mx-auto' quality={100} placeholder='blur' />
                                        <div className='text-center flex-col bg-slate-200 rounded-t-lg'>
                                            <h1 className='text-sm font-sans'>
                                                M. Unu Ibnudin, S.E., M.Si
                                            </h1>
                                            <h1 className='text-xs font-sans'>
                                                Pj. Wali Kota Pangkal Pinang
                                            </h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"https://website.pangkalpinangkota.go.id/sekretaris-daerah/"} target="_blank" className='bg-white'>
                                    <div className="h-[310px]  aspect-[9/16] rounded-lg w-[250px] ">
                                        <Image src={sekda1} alt="logo" width={2500} height={2500} className='w-[100%] mx-auto' quality={100} placeholder='blur' />
                                        <div className='text-center flex-col bg-slate-200 rounded-t-lg'>
                                            <h1 className='text-sm font-sans'>
                                                Mie Go, S.T., M.Si.
                                            </h1>
                                            <h1 className='text-xs font-sans'>
                                                Sekretaris Daerah Kota Pangkal Pinang
                                            </h1>
                                        </div>
                                    </div>
                                </Link>
                                <div className="h-[310px] bg-white aspect-[9/16] rounded-lg w-[250px]  hover:cursor-pointer">
                                    <Image src={kaban} alt="logo" width={200} height={200} className='w-[100%] mx-auto' quality={100} placeholder='blur' />
                                    <div className='text-center flex-col bg-slate-200 rounded-t-lg'>
                                        <h1 className='text-sm font-sans'>
                                            Muhammad Yasin, S.E., M.M.
                                        </h1>
                                        <h1 className='text-xs font-sans'>
                                            Kepala Badan Keuangan Daerah Kota Pangkal Pinang
                                        </h1>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <h1 className="text-2xl font-bold text-secondary-foreground flex justify-center mb-4">
                            BANNER INFORMASI
                        </h1>
                        {LoadingBeritaFoto ? (
                            <div className="flex gap-2 justify-center flex-col items-center">
                                <Skeleton className="h-15aspect-[3/4] bg-slate-400 rounded-lg sm:w-3/4 w-72 " />
                            </div>
                        ) : (
                            <section className="py-2">
                                {DataBeritaFoto?.data?.length > 0 ? (
                                    DataBeritaFoto.data.map((item: Berita) => {
                                        const firstLetter = item.deskripsi.trim().charAt(0).toUpperCase(); // Huruf pertama besar
                                        const restText = item.deskripsi.trim().slice(1); // Sisa tekst
                                        return (
                                            <div key={item.id_photos}>
                                                <div className="flex gap-2 justify-center flex-col items-center">
                                                    <div className="h-15  aspect-[3/4] rounded-lg sm:w-3/4 w-72 ">
                                                        <Image
                                                            src={item.photoUrl}
                                                            alt={item.judul}
                                                            width={300}
                                                            height={400}
                                                            className="w-full h-full object-cover rounded-lg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="flex gap-2 justify-center flex-col items-center">
                                        <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div>
                                    </div>
                                )}
                            </section>
                        )}
                        {/* <div className="flex gap-2 justify-center flex-col items-center">
                            <div className="h-15 bg-slate-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                            <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div>
                            <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                            <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                            <div className="h-15 bg-green-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
