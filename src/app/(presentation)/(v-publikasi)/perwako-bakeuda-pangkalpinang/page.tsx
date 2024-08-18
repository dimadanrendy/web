import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    perwako24,
    perwako23,
    perwako22,
    perwako21,
    perwako20
} from '@/lib/image'

export const metadata = {
    title: `Perwako - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
    description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}
export default function PagePerwako() {

    const StyleBox = "h-[420px] text-slate-300 aspect-square lg:aspect-video max-w-[300px] lg:max-w-[300px] mx-auto rounded-md flex justify-center items-center relative overflow-hidden";


    return (
        <section className="w-full py-4">
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
                <Link href={"/dokumen/details/perwako/2024"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={perwako24} alt="perwako-2024" fill quality={100} placeholder='blur' />
                    </div>
                </Link>
                <Link href={"/dokumen/details/perwako/2023"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={perwako23} alt="perwako-2023" fill quality={100} placeholder='blur' />
                    </div>
                </Link>
                <Link href={"/dokumen/details/perwako/2022"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={perwako22} alt="perwako-2022" fill quality={100} placeholder='blur' />
                    </div>
                </Link>
                <Link href={"/dokumen/details/perwako/2021"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={perwako21} alt="perwako-2021" fill quality={100} placeholder='blur' />
                    </div>
                </Link>
                <Link href={"/dokumen/details/perwako/2020"} className="hover:scale-105">
                    <div className={StyleBox}>
                        <Image src={perwako20} alt="perwako-2020" fill quality={100} placeholder='blur' />
                    </div>
                </Link>
            </div>
        </section>
    )
}
