import FotoPemimpin from "@/components/components-ui/foto-pemimpin";
import React from "react";
import { BookText } from "lucide-react";
import Image from "next/image";
import { LambangKotaPangkalpinang, logoFull } from "@/lib/image";

export const metadata = {
  title: `Visi Misi - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}

export default function PageVisiMisi() {
  return (
    <section className="w-full mb-12 px-3 max-w-full mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
      <div className="lg:flex lg:gap-2 p-2">
        <div className="lg:flex-none lg:w-4/6 relative">
          <section className="py-2">
            <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <BookText className="w-6 h-6 text-rose-500" />
                VISI DAN MISI KOTA PANGKAL PINANG
              </h2>
            </div>
            <div className="h-15 aspect-video py-4 flex items-center justify-center">
              <Image src={LambangKotaPangkalpinang} alt="Visi Misi" width={400} height={400} quality={100} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-10 text-center">
              VISI
            </h3>
            <p className="text-center italic text-gray-600 mt-4 px-6 leading-relaxed">
              “Meningkatkan Kesejahteraan Rakyat Melalui Pembangunan Yang Berbasis Perdagangan dan Jasa Dengan Dukungan Industri Unggulan”
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-10 text-center">
              MISI
            </h3>
            <div className="mt-6 space-y-6 px-6">
              <div className="flex items-start">
                <span className="font-semibold">1.</span>
                <p className="text-justify leading-relaxed ml-6">
                  Meningkatkan kesejahteraan rakyat melalui peningkatan pendapatan per kapita.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">2.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Mewujudkan kesejahteraan yang mendukung peningkatan kualitas pelayanan dasar sektor publik dari pendidikan dan kesehatan.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">3.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Mengurangi dampak negatif pembangunan ekonomi seperti kemiskinan, pengangguran, ketimpangan distribusi pendapatan antar golongan dan antar daerah serta masalah pencemaran lingkungan.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">4.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Menciptakan aparatur pemerintah jujur, bersih, berwibawa dan berkualitas melalui dukungan fasilitas yang memadai dan penegakan supremasi hukum.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">5.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Menegakkan hukum yang tidak diskriminatif dan tanpa membedakan kedudukan pelaku guna menekan tindakan kejahatan dan aksi illegal.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">6.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Menjalin kerjasama yang baik antar dinas, antar pemerintah daerah dan antar pemerintah, dewan dan masyarakat guna mencapai masyarakat yang adil, makmur, aman dan damai.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">7.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Mengembangkan sektor perdagangan dan jasa melalui pembangunan sistem informasi dan ketersediaan data yang berkualitas terutama di dalam menghadapi era globalisasi.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">8.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Meningkatkan peran para pengusaha melalui peningkatan jiwa kewirausahaan, kesetaraan gender, dan dukungan terhadap wanita pengusaha dalam meningkatkan pertumbuhan dan pemerataan pembangunan ekonomi.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">9.</span>
                <p className="text-justify leading-relaxed ml-5">
                  Menciptakan masyarakat dengan gaya hidup yang religius dan memiliki jiwa serta tubuh yang sehat.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-semibold">10.</span>
                <p className="text-justify leading-relaxed ml-3">
                  Menciptakan keharmonisan hidup melalui masyarakat taat hukum yang memiliki komitmen dan integritas tinggi terhadap pembangunan.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="py-2 px-2 lg:flex-none lg:w-2/6">
          <FotoPemimpin />
        </div>
      </div>
    </section>
  );
}
