import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageTopInformation() {
  return (
    <div className="flex gap-2 px-4 items-center  h-8 w-full md:scale-75 md:-translate-x-24 lg:scale-100 lg:translate-x-0">
      <Link href="#" className="hover:cursor-pointer hover:animate-pulse">
        <div className="flex gap-1">
          <Image
            src="/images/logo-facebook-color.png"
            alt="logo"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-xs font-bold self-center text-slate-600">
            <span className="text-[10px] font-bold">Bakeuda Pgk</span>
          </p>
        </div>
      </Link>
      <Link href="#" className="hover:cursor-pointer hover:animate-pulse">
        <div className="flex gap-1">
          <Image
            src="/images/logo-instagram-color.png"
            alt="logo"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-xs font-bold self-center text-slate-600">
            <span className="text-[10px] font-bold">Bakeuda Pgk</span>
          </p>
        </div>
      </Link>
      <Link href="#" className="hover:cursor-pointer hover:animate-pulse">
        <div className="flex gap-1">
          <Image
            src="/images/logo-tiktok.png"
            alt="logo"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-xs font-bold self-center text-slate-600">
            <span className="text-[10px] font-bold">Bakeuda Pgk</span>
          </p>
        </div>
      </Link>
      <Link href="#" className="hover:cursor-pointer hover:animate-pulse">
        <div className="flex gap-1">
          <Image
            src="/images/logo-youtube.png"
            alt="logo"
            width={20}
            height={20}
            quality={100}
          />
          <p className="text-xs font-bold self-center text-slate-600">
            <span className="text-[10px] font-bold">Bakeuda Pgk</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
