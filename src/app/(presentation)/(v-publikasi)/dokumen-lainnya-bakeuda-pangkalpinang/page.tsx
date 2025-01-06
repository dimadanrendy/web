import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dokumenlainnya25, dokumenlainnya24, dokumenlainnya23, dokumenlainnya22, dokumenlainnya21, dokumenlainnya20 } from '@/lib/image'

export const metadata = {
    title: `Dokumen Lainnya - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
    description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}
export default function PageDokumenLainnya() {

    const StyleBox = "h-[400px] text-slate-300 aspect-square lg:aspect-video max-w-[260px] lg:max-w-[300px] mx-auto rounded-md flex justify-center items-center relative overflow-hidden"

    return (
        <section className="w-full py-4">
            <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
                <Link href={"/dokumen/details/lainnya/2025"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={dokumenlainnya25} alt="dokumenlainnya-2025" fill quality={100} />
                    </div>
                </Link>
                <Link href={"/dokumen/details/lainnya/2024"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={dokumenlainnya24} alt="dokumenlainnya-2024" fill quality={100} />
                    </div>
                </Link>
                <Link href={"/dokumen/details/lainnya/2023"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={dokumenlainnya23} alt="dokumenlainnya-2023" fill quality={100} />
                    </div>
                </Link>
                <Link href={"/dokumen/details/lainnya/2022"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={dokumenlainnya22} alt="dokumenlainnya-2022" fill quality={100} />
                    </div>
                </Link>
                <Link href={"/dokumen/details/lainnya/2021"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={dokumenlainnya21} alt="dokumenlainnya-2021" fill quality={100} />
                    </div>
                </Link>
                <Link href={"/dokumen/details/lainnya/2020"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={dokumenlainnya20} alt="dokumenlainnya-2020" fill quality={100} />
                    </div>
                </Link>
            </div>
        </section>
    )
}
