"use client";
import PageCarousel from "@/components/components-hero-ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { logoFacebook } from "@/lib/image";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBeritaByTipe } from "@/features/presentesion/berita/useGetManagementBerita";
import { Skeleton } from "@/components/ui/skleton";
import PageCarouselSekilasInfo from "@/components/components-hero-ui/carouselSekilasInfo";
import PageCarouselSeputarInformasiOne from "@/components/components-hero-ui/carouselSeputarInformasiOne";
import PageCarouselSeputarInformasiTwo from "@/components/components-hero-ui/carouselSeputarInformasiTwo";
import FormPengaduan from "@/components/components-ui/form-pengaduan";


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

export default function HomePage() {
  const [pageFoto, setPageFoto] = useState(1); // Halaman untuk foto
  const [pageSlider, setPageSlider] = useState(1); // Halaman untuk slider
  const pageSize = 5; // Ukuran halaman yang ditentukan

  const queryClient = useQueryClient();

  const { data: DataBeritaFoto, isLoading: LoadingBeritaFoto } = useQuery({
    queryKey: ["berita", "berita-foto", pageFoto],
    queryFn: async () => {
      return await getBeritaByTipe("berita-foto", pageFoto, pageSize);
    },
  });

  const { data: DataBeritaVideo, isLoading: LoadingBeritaVideo } = useQuery({
    queryKey: ["berita", "video", pageFoto],
    queryFn: async () => {
      return await getBeritaByTipe("berita-video", pageFoto, pageSize);
    },
  });

  const { data: DataBeritaKegiatan, isLoading: LoadingBeritaKegiatan } = useQuery({
    queryKey: ["berita", "kegiatan", pageFoto],
    queryFn: async () => {
      return await getBeritaByTipe("kegiatan", pageFoto, pageSize);
    },
  });

  const { data: DataBeritaBanner, isLoading: LoadingBeritaBanner } = useQuery({
    queryKey: ["berita", "banner", pageSlider],
    queryFn: async () => {
      return await getBeritaByTipe("banner", pageSlider, pageSize);
    },
  });

  return (
    <>
      <PageCarousel />
      <section className="w-full">
        <div className="mt-2 grid grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto px-2 text-sm">
          <Link href={"https://cekpbb.pangkalpinangkota.go.id"} target="_blank" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              CEK PBB
            </div>
          </Link>
          <Link href="/sppt" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              CEK SPPT
            </div>
          </Link>
          <Link href={"https://pajakonline.pangkalpinangkota.go.id"} target="_blank" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              Pajak Online
            </div>
          </Link>
          <Link href="/informasi-pelayanan" className="group text-center">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              Informasi Pelayanan
            </div>
          </Link>
          {/* <Link href={"https://presensi.pangkalpinangkota.go.id/dashboard"} target="_blank" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              Loket Pelayanan
            </div>
          </Link>
          <Link href={"https://presensi.pangkalpinangkota.go.id/dashboard"} target="_blank" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              Inforasi
            </div>
          </Link>
          <Link href={"https://presensi.pangkalpinangkota.go.id/dashboard"} target="_blank" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              Lapor
            </div>
          </Link>
          <Link href={"https://presensi.pangkalpinangkota.go.id/dashboard"} target="_blank" className="group">
            <div className="h-15 bg-primary text-slate-300 aspect-video md:group-hover:animate-bounce lg:max-w-[300px] rounded-md flex justify-center items-center">
              Presensi
            </div>
          </Link> */}
        </div>
      </section>

      <section className="w-full mt-4 px-3 max-w-7xl mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
        <div className="lg:flex lg:gap-2 p-2">
          <div className="lg:flex-none lg:w-4/6 ">
            <Tabs defaultValue="foto">
              <TabsList className="w-full sm:gap-10 bg-transparent flex lg:justify-start">
                <TabsTrigger value="foto">BERITA FOTO</TabsTrigger>
                <TabsTrigger value="video">BERITA VIDEO</TabsTrigger>
                <TabsTrigger value="dokumentasi">KEGIATAN</TabsTrigger>
              </TabsList>
              <TabsContent value="foto">
                {LoadingBeritaFoto ? (
                  <section className="py-2">
                    <div className="grid grid-cols-1 max-w-7xl mx-auto gap-4">
                      <Skeleton className="h-15 aspect-video rounded-md" />
                      <Skeleton className="h-15 aspect-video rounded-md" />
                    </div>
                  </section>
                ) : (
                  <section className="py-2">
                    {DataBeritaFoto?.data?.length > 0 ? (
                      DataBeritaFoto.data.map((item: Berita) => {
                        const firstLetter = item.deskripsi.trim().charAt(0).toUpperCase(); // Huruf pertama besar
                        const restText = item.deskripsi.trim().slice(1); // Sisa tekst
                        return (
                          <div key={item.id_photos}>
                            <div className="h-15 aspect-video py-4 relative">
                              <Image
                                src={item.photoUrl}
                                alt="Foto"
                                fill
                                className="rounded-md object-cover shadow"
                              />
                            </div>

                            <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                />
                              </svg>
                              <div className="">
                                <span className="text-[11px] font-mono ">
                                  {item.tanggal}
                                </span>
                                <span className="text-[11px] font-mono ml-2">
                                  Kota Pangkalpinang
                                </span>
                              </div>
                            </div>
                            <h1 className="text-xl font-bold uppercase pb-4">
                              {item.judul}
                            </h1>
                            <p className="text-justify">
                              <span className="text-6xl font-bold float-left w-12">
                                {firstLetter}
                              </span>
                              <span className="text-justify">
                                {restText}
                              </span>
                            </p>
                            <Link href={`/berita/${item.id_photos}`}>
                              <div className="p-2 flex justify-center items-center ">
                                <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                                  Berita Foto Selengkapnya .....
                                </h1>
                              </div>
                            </Link>
                            <Link href={`/berita/${item.id_photos}`}>
                              <div className="p-2 flex justify-center items-center ">
                                <h1 className="flex justify-center items-center p-2 w-full text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                                  Semua Berita Foto .....
                                </h1>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center text-sm text-gray-500">
                        Tidak ada data untuk ditampilkan.
                      </div>
                    )}
                  </section>
                )}
              </TabsContent>
              <TabsContent value="video">
                {LoadingBeritaVideo ? (
                  <section className="py-2">
                    <div className="grid grid-cols-1 max-w-7xl mx-auto gap-4">
                      <Skeleton className="h-15 aspect-video rounded-md" />
                      <Skeleton className="h-15 aspect-video rounded-md" />
                    </div>
                  </section>
                ) : (
                  <section className="py-2">
                    {DataBeritaVideo?.data?.length > 0 ? (
                      DataBeritaVideo.data.map((item: Berita) => {
                        const firstLetter = item.deskripsi.trim().charAt(0).toUpperCase(); // Huruf pertama besar
                        const restText = item.deskripsi.trim().slice(1); // Sisa tekst
                        return (
                          <div key={item.id_photos}>
                            <div className="h-15 aspect-video py-4 relative">
                              <Image
                                src={item.photoUrl}
                                alt="Foto"
                                fill
                                className="rounded-md object-cover shadow"
                              />
                            </div>

                            <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                />
                              </svg>
                              <div className="">
                                <span className="text-[11px] font-mono ">
                                  {item.tanggal}
                                </span>
                                <span className="text-[11px] font-mono ml-2">
                                  Kota Pangkalpinang
                                </span>
                              </div>
                            </div>
                            <h1 className="text-xl font-bold uppercase pb-4">
                              {item.judul}
                            </h1>
                            <p className="text-justify">
                              <span className="text-6xl font-bold float-left w-12">
                                {firstLetter}
                              </span>
                              <span className="text-justify">
                                {restText}
                              </span>
                            </p>
                            <Link href={`/berita/${item.id_photos}`}>
                              <div className="p-2 flex justify-center items-center ">
                                <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                                  Berita Foto Selengkapnya .....
                                </h1>
                              </div>
                            </Link>
                            <Link href={`/berita/${item.id_photos}`}>
                              <div className="p-2 flex justify-center items-center ">
                                <h1 className="flex justify-center items-center p-2 w-full text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                                  Semua Berita Foto .....
                                </h1>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center text-sm text-gray-500">
                        Tidak ada data untuk ditampilkan.
                      </div>
                    )}
                  </section>
                )}
              </TabsContent>
              <TabsContent value="dokumentasi">
                {LoadingBeritaKegiatan ? (
                  <section className="py-2">
                    <div className="grid grid-cols-1 max-w-7xl mx-auto gap-4">
                      <Skeleton className="h-15 aspect-video rounded-md" />
                      <Skeleton className="h-15 aspect-video rounded-md" />
                    </div>
                  </section>
                ) : (
                  <section className="py-2">
                    {DataBeritaKegiatan?.data?.length > 0 ? (
                      DataBeritaKegiatan.data.map((item: Berita) => {
                        const firstLetter = item.deskripsi.trim().charAt(0).toUpperCase(); // Huruf pertama besar
                        const restText = item.deskripsi.trim().slice(1); // Sisa tekst
                        return (
                          <div key={item.id_photos}>
                            <div className="h-15 aspect-video py-4 relative">
                              <Image
                                src={item.photoUrl}
                                alt="Foto"
                                fill
                                className="rounded-md object-cover shadow"
                              />
                            </div>

                            <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                />
                              </svg>
                              <div className="">
                                <span className="text-[11px] font-mono ">
                                  {item.tanggal}
                                </span>
                                <span className="text-[11px] font-mono ml-2">
                                  Kota Pangkalpinang
                                </span>
                              </div>
                            </div>
                            <h1 className="text-xl font-bold uppercase pb-4">
                              {item.judul}
                            </h1>
                            <p className="text-justify">
                              <span className="text-6xl font-bold float-left w-12">
                                {firstLetter}
                              </span>
                              <span className="text-justify">
                                {restText}
                              </span>
                            </p>
                            <Link href={`/berita/${item.id_photos}`}>
                              <div className="p-2 flex justify-center items-center ">
                                <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                                  Berita Foto Selengkapnya .....
                                </h1>
                              </div>
                            </Link>
                            <Link href={`/berita/${item.id_photos}`}>
                              <div className="p-2 flex justify-center items-center ">
                                <h1 className="flex justify-center items-center p-2 w-full text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                                  Semua Berita Foto .....
                                </h1>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center text-sm text-gray-500">
                        Tidak ada data untuk ditampilkan.
                      </div>
                    )}
                  </section>
                )}
              </TabsContent>
            </Tabs>
          </div>
          <div className="py-2 px-2 lg:flex-none lg:w-2/6">
            <div className="top-24 z-30 -ml-2 w-full shrink-0 sticky block">
              <div className="content-wrap ">
                <div className="px-2">
                  <h1 className="text-2xl font-bold text-secondary-foreground ">
                    SEKILAS INFO
                  </h1>
                  <div className="py-2">
                    <PageCarouselSekilasInfo />
                  </div>
                </div>
                <div className="p-2 flex justify-center items-center ">
                  <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-full  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                    Sekilas Info Selengkapnya .....
                  </h1>
                </div>
                <div className="px-2">
                  <h1 className="text-2xl font-bold text-secondary-foreground flex justify-center mb-4">
                    BANNER INFORMASI
                  </h1>

                  {LoadingBeritaBanner ? (
                    <div className="flex gap-2 justify-center flex-col items-center">
                      <Skeleton className="h-15aspect-[3/4] bg-slate-400 rounded-lg sm:w-3/4 w-72 " />
                    </div>
                  ) : (
                    <section className="py-2">
                      {DataBeritaBanner?.data?.length > 0 ? (
                        DataBeritaBanner.data.map((item: Berita) => {
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
                                    className="w-full h-full object-cover"
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
                  {/* <div className="h-15 bg-slate-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                    <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div>
                    <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                    <div className="h-15 bg-rose-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72"></div>
                    <div className="h-15 bg-green-500 aspect-[3/4] rounded-lg sm:w-3/4 w-72 "></div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full mt-6 px-3 max-w-7xl mx-auto py-16">
          <div>
            <h1 className="text-2xl font-bold text-secondary-foreground flex justify-center mb-4">
              SOSIAL MEDIA
            </h1>
            <Tabs defaultValue="foto">
              <TabsList className="w-full ">
                <TabsTrigger value="facebook">Facebook</TabsTrigger>
                <TabsTrigger value="video">Instagram</TabsTrigger>
                <TabsTrigger value="tiktok">TikTok</TabsTrigger>
                <TabsTrigger value="youtube">Youtube</TabsTrigger>
              </TabsList>
              <div className="flex items-evenly w-full">
                <TabsContent value="facebook">
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="video">
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="tiktok">
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={logoFacebook}
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="youtube">
                  <div className="flex flex-wrap gap-2 justify-center items-center">

                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="w-full my-12  px-3 max-w-7xl mx-auto  bg-slate-100 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
        <div className="p-2">
          <h1 className="text-2xl font-bold text-secondary-foreground flex justify-center mb-4">
            SEPUTAR INFORMASI
          </h1>
          <div className="sm:flex items-centerjustify-center">
            <div className="mb-2 sm:mb-0 sm:w-2/3">
              <PageCarouselSeputarInformasiOne />
            </div>
            <div className="mb-2 sm:mb-0 sm:w-2/3 ">
              <PageCarouselSeputarInformasiTwo />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-4 px-3 max-w-7xl mx-auto py-16">
        <h1 className="text-2xl font-bold text-secondary-foreground flex justify-center mb-4">
          HUBUNGAN
        </h1>
        <div className="grid grid-cols-4 gap-2 mx-auto max-w-md px-2">
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md"></div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md"></div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md"></div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md"></div>
        </div>
      </section>

      <FormPengaduan />

    </>
  );
}
