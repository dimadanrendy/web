import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sk24, sk23, sk22, sk21, sk20 } from "@/lib/image";

export const metadata = {
  title: `SK - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}

export default function PageSk() {
  const StyleBox =
    "h-[400px] text-slate-300 aspect-square lg:aspect-video max-w-[260px] lg:max-w-[300px] mx-auto rounded-md flex justify-center items-center relative overflow-hidden";

  return (
    <section className="w-full py-4">
      <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <Link
          href={"/dokumen/details/sk/2024"}
          className="hover:scale-105">
          <div className={StyleBox}>
            <Image src={sk24} alt="sk-2024" fill quality={100} />
          </div>
        </Link>
        <Link
          href={"/dokumen/details/sk/2023"}
          className="hover:scale-105">
          <div className={StyleBox}>
            <Image src={sk23} alt="sk-2023" fill quality={100} />
          </div>
        </Link>
        <Link
          href={"/dokumen/details/sk/2022"}
          className="hover:scale-105">
          <div className={StyleBox}>
            <Image src={sk22} alt="sk-2022" fill quality={100} />
          </div>
        </Link>
        <Link
          href={"/dokumen/details/sk/2021"}
          className="hover:scale-105">
          <div className={StyleBox}>
            <Image src={sk21} alt="sk-2021" fill quality={100} />
          </div>
        </Link>
        <Link
          href={"/dokumen/details/sk/2020"}
          className="hover:scale-105">
          <div className={StyleBox}>
            <Image src={sk20} alt="sk-2020" fill quality={100} />
          </div>
        </Link>
      </div>
    </section>
  );
}
