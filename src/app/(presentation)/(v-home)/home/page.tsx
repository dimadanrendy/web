import PageCarousel from "@/components/components-hero-ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Home - Bakeuda Pangkal Pinang",
};


export default function HomePage() {
  return (
    <>
      <PageCarousel />
      <section className="w-full">
        <div className="mt-2 grid grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto px-2">
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            cek Pbb
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Pajak Online
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Persediaan
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Tatat Cara Laporan Pajak
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Loket Pelayanan
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Inforasi
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Lapor
          </div>
          <div className="h-15 bg-rose-500 aspect-video lg:max-w-[300px] rounded-md flex justify-center items-center">
            Cek
          </div>
        </div>
      </section>

      <section className="w-full mt-4 px-3 max-w-7xl mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
        <div className="lg:flex lg:gap-2 p-2">
          <div className="lg:flex-none lg:w-4/6 ">
            <Tabs defaultValue="foto">
              <TabsList className="w-full sm:gap-10 bg-transparent flex lg:justify-start">
                <TabsTrigger value="foto">BERITA FOTO</TabsTrigger>
                <TabsTrigger value="video">BERITA VIDEO</TabsTrigger>
                <TabsTrigger value="siaran">SIARAN PERS</TabsTrigger>
              </TabsList>
              <TabsContent value="foto">
                <section className="py-2">
                  <div className="h-15 bg-rose-500 aspect-video py-4"></div>
                  <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <div className=" ">
                      <span className="text-[11px] font-mono ">
                        Kamis, 12 Mei 2022
                      </span>
                      <span className="text-[11px] font-mono ml-2">
                        Kota Pangkalpinang
                      </span>
                    </div>
                  </div>
                  <h1 className="text-xl font-bold uppercase pb-4">
                    Judul Artikel Dalam Sebuah Artikel Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Laboriosam pariatur aut
                    temporibus quibusdam, esse in minus inventore asperiores
                    saepe earum.
                  </h1>
                  <p className="text-justify">
                    <span className="text-6xl font-bold float-left w-12 uppercase">
                      L
                    </span>
                    orem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere omnis laudantium, libero eos qui totam recusandae
                    ullam harum corrupti ea voluptates est quis ipsum enim
                    dolore. Blanditiis inventore esse cum dignissimos nam quod
                    ullam! Doloremque repudiandae deserunt esse facilis error
                    quam doloribus earum laborum, incidunt sint, excepturi
                    praesentium mollitia natus quia architecto. Quaerat
                    repudiandae nostrum hic atque dolore voluptatum, quod earum
                    consequatur officiis cumque quas itaque eius labore possimus
                    beatae, ratione dignissimos ipsa consequuntur doloribus
                    velit. Quam quisquam asperiores maiores! Id, pariatur facere
                    nostrum alias architecto soluta asperiores ad ab dignissimos
                    ullam quam accusamus sit natus minus quia quaerat excepturi
                    unde deserunt quo quasi. Asperiores reiciendis veritatis,
                    eligendi ex sed culpa, perspiciatis atque voluptatem a
                    repudiandae aspernatur, rerum possimus molestiae dolore.
                    Nulla eaque suscipit temporibus repellendus veniam tempora,
                    mollitia reprehenderit est nam vel ratione tempore
                    architecto aut aliquam impedit molestiae. Modi hic quisquam
                    mollitia odit necessitatibus architecto dignissimos tenetur
                    enim, esse numquam. Asperiores neque provident quo ab
                    voluptatem, distinctio architecto a corporis ea excepturi
                    fuga quidem rerum qui quasi mollitia hic dolore voluptate
                    impedit officia cumque soluta vitae? Fugiat doloribus eos
                    fugit quidem, sed eius illo, placeat est excepturi inventore
                    voluptates sunt voluptatum, consequuntur architecto vitae
                    quaerat? Reprehenderit, ut reiciendis?
                  </p>
                  <div className="p-2 flex justify-center items-center ">
                    <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                      Berita Foto Selengkapnya .....
                    </h1>
                  </div>
                </section>
                <section className="py-2">
                  <div className="h-15 bg-rose-500 aspect-video py-4"></div>
                  <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <div className=" ">
                      <span className="text-[11px] font-mono ">
                        Kamis, 12 Mei 2022
                      </span>
                      <span className="text-[11px] font-mono ml-2">
                        Kota Pangkalpinang
                      </span>
                    </div>
                  </div>
                  <h1 className="text-xl font-bold uppercase pb-4">
                    Judul Artikel Dalam Sebuah Artikel Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Laboriosam pariatur aut
                    temporibus quibusdam, esse in minus inventore asperiores
                    saepe earum.
                  </h1>
                  <p className="text-justify">
                    <span className="text-6xl font-bold float-left w-12">
                      P
                    </span>
                    orem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere omnis laudantium, libero eos qui totam recusandae
                    ullam harum corrupti ea voluptates est quis ipsum enim
                    dolore. Blanditiis inventore esse cum dignissimos nam quod
                    ullam! Doloremque repudiandae deserunt esse facilis error
                    quam doloribus earum laborum, incidunt sint, excepturi
                    praesentium mollitia natus quia architecto. Quaerat
                    repudiandae nostrum hic atque dolore voluptatum, quod earum
                    consequatur officiis cumque quas itaque eius labore possimus
                    beatae, ratione dignissimos ipsa consequuntur doloribus
                    velit. Quam quisquam asperiores maiores! Id, pariatur facere
                    nostrum alias architecto soluta asperiores ad ab dignissimos
                    ullam quam accusamus sit natus minus quia quaerat excepturi
                    unde deserunt quo quasi. Asperiores reiciendis veritatis,
                    eligendi ex sed culpa, perspiciatis atque voluptatem a
                    repudiandae aspernatur, rerum possimus molestiae dolore.
                    Nulla eaque suscipit temporibus repellendus veniam tempora,
                    mollitia reprehenderit est nam vel ratione tempore
                    architecto aut aliquam impedit molestiae. Modi hic quisquam
                    mollitia odit necessitatibus architecto dignissimos tenetur
                    enim, esse numquam. Asperiores neque provident quo ab
                    voluptatem, distinctio architecto a corporis ea excepturi
                    fuga quidem rerum qui quasi mollitia hic dolore voluptate
                    impedit officia cumque soluta vitae? Fugiat doloribus eos
                    fugit quidem, sed eius illo, placeat est excepturi inventore
                    voluptates sunt voluptatum, consequuntur architecto vitae
                    quaerat? Reprehenderit, ut reiciendis?
                  </p>
                  <div className="p-2 flex justify-center items-center ">
                    <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                      Berita Foto Selengkapnya .....
                    </h1>
                  </div>
                </section>
                <section className="py-2">
                  <div className="h-15 bg-rose-500 aspect-video py-4"></div>
                  <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <div className=" ">
                      <span className="text-[11px] font-mono ">
                        Kamis, 12 Mei 2022
                      </span>
                      <span className="text-[11px] font-mono ml-2">
                        Kota Pangkalpinang
                      </span>
                    </div>
                  </div>
                  <h1 className="text-xl font-bold uppercase pb-4">
                    Judul Artikel Dalam Sebuah Artikel Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Laboriosam pariatur aut
                    temporibus quibusdam, esse in minus inventore asperiores
                    saepe earum.
                  </h1>
                  <p className="text-justify">
                    <span className="text-6xl font-bold float-left w-12">
                      P
                    </span>
                    orem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere omnis laudantium, libero eos qui totam recusandae
                    ullam harum corrupti ea voluptates est quis ipsum enim
                    dolore. Blanditiis inventore esse cum dignissimos nam quod
                    ullam! Doloremque repudiandae deserunt esse facilis error
                    quam doloribus earum laborum, incidunt sint, excepturi
                    praesentium mollitia natus quia architecto. Quaerat
                    repudiandae nostrum hic atque dolore voluptatum, quod earum
                    consequatur officiis cumque quas itaque eius labore possimus
                    beatae, ratione dignissimos ipsa consequuntur doloribus
                    velit. Quam quisquam asperiores maiores! Id, pariatur facere
                    nostrum alias architecto soluta asperiores ad ab dignissimos
                    ullam quam accusamus sit natus minus quia quaerat excepturi
                    unde deserunt quo quasi. Asperiores reiciendis veritatis,
                    eligendi ex sed culpa, perspiciatis atque voluptatem a
                    repudiandae aspernatur, rerum possimus molestiae dolore.
                    Nulla eaque suscipit temporibus repellendus veniam tempora,
                    mollitia reprehenderit est nam vel ratione tempore
                    architecto aut aliquam impedit molestiae. Modi hic quisquam
                    mollitia odit necessitatibus architecto dignissimos tenetur
                    enim, esse numquam. Asperiores neque provident quo ab
                    voluptatem, distinctio architecto a corporis ea excepturi
                    fuga quidem rerum qui quasi mollitia hic dolore voluptate
                    impedit officia cumque soluta vitae? Fugiat doloribus eos
                    fugit quidem, sed eius illo, placeat est excepturi inventore
                    voluptates sunt voluptatum, consequuntur architecto vitae
                    quaerat? Reprehenderit, ut reiciendis?
                  </p>
                  <div className="p-2 flex justify-center items-center ">
                    <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                      Berita Foto Selengkapnya .....
                    </h1>
                  </div>
                </section>
                <section className="py-2">
                  <div className="h-15 bg-rose-500 aspect-video py-4"></div>
                  <div className="flex items-center gap-2 py-4 text-secondary font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <div className=" ">
                      <span className="text-[11px] font-mono ">
                        Kamis, 12 Mei 2022
                      </span>
                      <span className="text-[11px] font-mono ml-2">
                        Kota Pangkalpinang
                      </span>
                    </div>
                  </div>
                  <h1 className="text-xl font-bold uppercase pb-4">
                    Judul Artikel Dalam Sebuah Artikel Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Laboriosam pariatur aut
                    temporibus quibusdam, esse in minus inventore asperiores
                    saepe earum.
                  </h1>
                  <p className="text-justify">
                    <span className="text-6xl font-bold float-left w-12">
                      P
                    </span>
                    orem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere omnis laudantium, libero eos qui totam recusandae
                    ullam harum corrupti ea voluptates est quis ipsum enim
                    dolore. Blanditiis inventore esse cum dignissimos nam quod
                    ullam! Doloremque repudiandae deserunt esse facilis error
                    quam doloribus earum laborum, incidunt sint, excepturi
                    praesentium mollitia natus quia architecto. Quaerat
                    repudiandae nostrum hic atque dolore voluptatum, quod earum
                    consequatur officiis cumque quas itaque eius labore possimus
                    beatae, ratione dignissimos ipsa consequuntur doloribus
                    velit. Quam quisquam asperiores maiores! Id, pariatur facere
                    nostrum alias architecto soluta asperiores ad ab dignissimos
                    ullam quam accusamus sit natus minus quia quaerat excepturi
                    unde deserunt quo quasi. Asperiores reiciendis veritatis,
                    eligendi ex sed culpa, perspiciatis atque voluptatem a
                    repudiandae aspernatur, rerum possimus molestiae dolore.
                    Nulla eaque suscipit temporibus repellendus veniam tempora,
                    mollitia reprehenderit est nam vel ratione tempore
                    architecto aut aliquam impedit molestiae. Modi hic quisquam
                    mollitia odit necessitatibus architecto dignissimos tenetur
                    enim, esse numquam. Asperiores neque provident quo ab
                    voluptatem, distinctio architecto a corporis ea excepturi
                    fuga quidem rerum qui quasi mollitia hic dolore voluptate
                    impedit officia cumque soluta vitae? Fugiat doloribus eos
                    fugit quidem, sed eius illo, placeat est excepturi inventore
                    voluptates sunt voluptatum, consequuntur architecto vitae
                    quaerat? Reprehenderit, ut reiciendis?
                  </p>
                  <div className="p-2 flex justify-center items-center ">
                    <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                      Berita Foto Selengkapnya .....
                    </h1>
                  </div>
                </section>
              </TabsContent>
              <TabsContent value="video">
                <div className="h-15 bg-blue-500 aspect-video"></div>
                <div className="p-2 flex justify-center items-center ">
                  <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                    Berita Foto Selengkapnya .....
                  </h1>
                </div>
              </TabsContent>
              <TabsContent value="siaran">
                <div className="h-15 bg-slate-500 aspect-video"></div>
                <div className="p-2 flex justify-center items-center ">
                  <h1 className="flex justify-center items-center p-2 w-full lg:w-2/3 xl:w-1/2  text-xs text-slate-100  font-bold bg-primary hover:cursor-pointer hover:animate-pulse rounded-lg">
                    Berita Foto Selengkapnya .....
                  </h1>
                </div>
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
                    <PageCarousel />
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
                <TabsTrigger value="foto">Facebook</TabsTrigger>
                <TabsTrigger value="video">Instagram</TabsTrigger>
                <TabsTrigger value="siaran">TikTok</TabsTrigger>
              </TabsList>
              <div className="flex items-evenly w-full">
                <TabsContent value="foto" className="">
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <Image
                      src="/images/logo-facebook.png"
                      alt="facebook"
                      width={200}
                      height={200}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="video">
                  <div className="bg-slate-100 shadow-2xl shadow-slate-300 rounded-3xl">
                    <div className=" aspect-square rounded-md px-20">
                      <div className="h-15 bg-blue-500 max-w-64 h-72 rounded-md"></div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="siaran">
                  <div className="bg-slate-100 shadow-2xl shadow-slate-300 rounded-3xl">
                    <div className=" aspect-square rounded-md px-20">
                      <div className="h-15 bg-blue-500 max-w-64 h-72 rounded-md"></div>
                    </div>
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
              <PageCarousel />
            </div>
            <div className="mb-2 sm:mb-0 sm:w-2/3 ">
              <PageCarousel />
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
    </>
  );
}
