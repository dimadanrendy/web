import { logoBakeuda, logoFacebook, logoInstagram, logoTiktok, logoYoutube } from "@/lib/image";
import { BeakerIcon, Globe2Icon, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function PageTopInformation() {
  return (
    <div>
      <div className="flex justify-center items-center relative h-40 sm:h-48 md:hidden">
        <Link href={"/home"}>
          <Image src={logoBakeuda} alt="logo" fill quality={100} className="p-4" />
        </Link>
      </div>
      <div className="flex gap-2 px-4 items-center  h-8 w-full md:scale-75 md:-translate-x-24 lg:scale-100 lg:translate-x-0">
        <Link
          href="https://www.facebook.com/profile.php?id=61563803127772"
          className="hover:cursor-pointer hover:animate-pulse">
          <div className="flex gap-1">
            <Image
              src={logoFacebook}
              alt="logo"
              width={20}
              height={20}
              quality={100}
            />
            <p className="text-xs font-bold self-center text-slate-600">
              <span className="text-[10px] font-bold">bakeudapgk</span>
            </p>
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/bakeudapgk"
          className="hover:cursor-pointer hover:animate-pulse">
          <div className="flex gap-1">
            <Image
              src={logoInstagram}
              alt="logo"
              width={20}
              height={20}
              quality={100}
            />
            <p className="text-xs font-bold self-center text-slate-600">
              <span className="text-[10px] font-bold">@bakeudapgk</span>
            </p>
          </div>
        </Link>
        <Link
          href="https://www.tiktok.com/@bakeudapgk"
          className="hover:cursor-pointer hover:animate-pulse">
          <div className="flex gap-1">
            <Image
              src={logoTiktok}
              alt="logo"
              width={20}
              height={20}
              quality={100}
            />
            <p className="text-xs font-bold self-center text-slate-600">
              <span className="text-[10px] font-bold">@bakeudapgk</span>
            </p>
          </div>
        </Link>
        <Link
          href="https://www.youtube.com/@bakeudapgk"
          className="hover:cursor-pointer hover:animate-pulse">
          <div className="flex gap-1">
            <Image
              src={logoYoutube}
              alt="logo"
              width={20}
              height={20}
              quality={100}
            />
            <p className="text-xs font-bold self-center text-slate-600">
              <span className="text-[10px] font-bold">@bakeudapgk</span>
            </p>
          </div>
        </Link>
      </div>
    </div >
  );
}
