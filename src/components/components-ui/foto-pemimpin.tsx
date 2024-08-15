import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { pj, kaban, sekda1 } from '@/lib/image'
export default function FotoPemimpin() {
    return (
        <div>
            <div className="top-24 z-30 -ml-2  w-full shrink-0 sticky block">
                <div className="content-wrap ">
                    <div className="px-2">
                        <h1 className="text-2xl font-bold text-secondary-foreground ">
                            PIMPINAN
                        </h1>
                        <div className="py-2 overflow-y-scroll h-90 w-full">
                            <div className="w-[800px] flex gap-2 justify-start">
                                <Link href={"https://website.pangkalpinangkota.go.id/profil-penjabat-walikota-pangkalpinang-2/"} target="_blank">
                                    <div className="h-[310px] bg-slate-200 aspect-[9/16] rounded-lg w-[250px] hover:animate-pulse">
                                        <Image src={pj} alt="logo" width={2500} height={2500} className='w-full mx-auto' quality={100} placeholder='blur' />
                                        <div className='text-center flex-col bg-white rounded-t-lg'>
                                            <h1 className='text-sm font-sans'>
                                                pj. Wali Kota Pangkal Pinang
                                            </h1>
                                            <h1 className='text-sm font-sans'>
                                                Budi Utama, S.STP., M.Si.
                                            </h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"https://website.pangkalpinangkota.go.id/sekretaris-daerah/"} target="_blank">
                                    <div className="h-[310px] bg-slate-200 aspect-[9/16] rounded-lg w-[250px] hover:animate-pulse">
                                        <Image src={sekda1} alt="logo" width={2500} height={2500} className='w-[97%] mx-auto' quality={100} placeholder='blur' />
                                        <div className='text-center flex-col bg-white rounded-t-lg'>
                                            <h1 className='text-sm font-sans'>
                                                Sekretaris Daerah
                                            </h1>
                                            <h1 className='text-sm font-sans'>
                                                Mie Go, S.T., M.Si.
                                            </h1>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"https://website.pangkalpinangkota.go.id/sekretaris-daerah/"} target="_blank">
                                    <div className="h-[310px] bg-slate-200 aspect-[9/16] rounded-lg w-[250px] hover:animate-pulse">
                                        <Image src={kaban} alt="logo" width={2500} height={2500} className='w-[97%] mx-auto' quality={100} placeholder='blur' />
                                        <div className='text-center flex-col bg-white rounded-t-lg'>
                                            <h1 className='text-sm font-sans'>
                                                Kepala Badan Keuangan Daerah
                                            </h1>
                                            <h1 className='text-sm font-sans'>
                                                Muhammad Yasin, S.E., M.M.
                                            </h1>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <h1 className="text-2xl font-bold text-secondary-foreground flex justify-center mb-4">
                            BANNER INFORMASI
                        </h1>
                        <div className="flex gap-2 justify-center flex-col items-center">
                            <div className="h-15 bg-slate-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                            <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div>
                            <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                            <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                            <div className="h-15 bg-green-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
