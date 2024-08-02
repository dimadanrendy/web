import PageCarousel from "@/components/components-hero-ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

export default function PageProfile() {
  return (
    <>
      {/* <section className="py-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="lg:flex gap-4">
            <div className="lg:w-5/6 ">
              <h1 className="text-3xl pb-8 font-extrabold text-slate-600">
                Sejarah Bakeuda Kota Pangkalpinang
              </h1>
              <div className="text-justify">
                <p className="indent-8">
                  Dengan terbitnya Undang-Undang Nomor 22 Tahun 1999 tentang
                  Pemerintah Daerah, maka dimulai era otonomi daerah untuk
                  Pemerintah Kabupaten dan Kota. Pemerintah Kota Pangkalpinang
                  melakukan restrukturisasi semua perangkat-perangkat (instansi)
                  daerah untuk disesuaikan dengan Undang-Undang Nomor 22 Tahun
                  1999 tersebut. Termasuk perangkat daerah yang menangani bidang
                  keuangan daerah.Sesuai amanat Peraturan Daerah (Perda) Kota
                  Pangkalpinag Nomor 17 Tahun 2000 tentang Pembentukan dan
                  Susunan Organisasi Perangkat-Perangkat Pemerintah Kota
                  Panfkalpinang, maka Dinas Pendapatan Daerah (Dispenda)
                  Pemerintah Kotamadya Daerah Tingkat II Pangklpinang
                  digabungkan dengan Bagian Keuangan Sekretariat Pemerintah
                  Kotamadya Daerah Tingkat II Pangkalpinang dengan nama Badan
                  Keuangan Daearah (Bakuda) Pemerintah Kota Pangkalpinang.
                  Organisasi Bakuda ini dipimpin oleh seorang Kepala Badan
                  dengan eselon II/b, yang dibantu oleh seorang Bagian Tata
                  Usaha Badan dengan tiga orang Kepala Bidang yang masing-masing
                  dengan eselon III/a. bidang-bidang tersebut adalah
                </p>
                <p className="indent-8">
                  Dengan terbitnya Undang-Undang Nomor 22 Tahun 1999 tentang
                  Pemerintah Daerah, maka dimulai era otonomi daerah untuk
                  Pemerintah Kabupaten dan Kota. Pemerintah Kota Pangkalpinang
                  melakukan restrukturisasi semua perangkat-perangkat (instansi)
                  daerah untuk disesuaikan dengan Undang-Undang Nomor 22 Tahun
                  1999 tersebut. Termasuk perangkat daerah yang menangani bidang
                  keuangan daerah.Sesuai amanat Peraturan Daerah (Perda) Kota
                  Pangkalpinag Nomor 17 Tahun 2000 tentang Pembentukan dan
                  Susunan Organisasi Perangkat-Perangkat Pemerintah Kota
                  Panfkalpinang, maka Dinas Pendapatan Daerah (Dispenda)
                  Pemerintah Kotamadya Daerah Tingkat II Pangklpinang
                  digabungkan dengan Bagian Keuangan Sekretariat Pemerintah
                  Kotamadya Daerah Tingkat II Pangkalpinang dengan nama Badan
                  Keuangan Daearah (Bakuda) Pemerintah Kota Pangkalpinang.
                  Organisasi Bakuda ini dipimpin oleh seorang Kepala Badan
                  dengan eselon II/b, yang dibantu oleh seorang Bagian Tata
                  Usaha Badan dengan tiga orang Kepala Bidang yang masing-masing
                  dengan eselon III/a. bidang-bidang tersebut adalah
                </p>
                <p className="indent-8">
                  Dengan terbitnya Undang-Undang Nomor 22 Tahun 1999 tentang
                  Pemerintah Daerah, maka dimulai era otonomi daerah untuk
                  Pemerintah Kabupaten dan Kota. Pemerintah Kota Pangkalpinang
                  melakukan restrukturisasi semua perangkat-perangkat (instansi)
                  daerah untuk disesuaikan dengan Undang-Undang Nomor 22 Tahun
                  1999 tersebut. Termasuk perangkat daerah yang menangani bidang
                  keuangan daerah.Sesuai amanat Peraturan Daerah (Perda) Kota
                  Pangkalpinag Nomor 17 Tahun 2000 tentang Pembentukan dan
                  Susunan Organisasi Perangkat-Perangkat Pemerintah Kota
                  Panfkalpinang, maka Dinas Pendapatan Daerah (Dispenda)
                  Pemerintah Kotamadya Daerah Tingkat II Pangklpinang
                  digabungkan dengan Bagian Keuangan Sekretariat Pemerintah
                  Kotamadya Daerah Tingkat II Pangkalpinang dengan nama Badan
                  Keuangan Daearah (Bakuda) Pemerintah Kota Pangkalpinang.
                  Organisasi Bakuda ini dipimpin oleh seorang Kepala Badan
                  dengan eselon II/b, yang dibantu oleh seorang Bagian Tata
                  Usaha Badan dengan tiga orang Kepala Bidang yang masing-masing
                  dengan eselon III/a. bidang-bidang tersebut adalah
                </p>
                <p className="indent-8">
                  Dengan terbitnya Undang-Undang Nomor 22 Tahun 1999 tentang
                  Pemerintah Daerah, maka dimulai era otonomi daerah untuk
                  Pemerintah Kabupaten dan Kota. Pemerintah Kota Pangkalpinang
                  melakukan restrukturisasi semua perangkat-perangkat (instansi)
                  daerah untuk disesuaikan dengan Undang-Undang Nomor 22 Tahun
                  1999 tersebut. Termasuk perangkat daerah yang menangani bidang
                  keuangan daerah.Sesuai amanat Peraturan Daerah (Perda) Kota
                  Pangkalpinag Nomor 17 Tahun 2000 tentang Pembentukan dan
                  Susunan Organisasi Perangkat-Perangkat Pemerintah Kota
                  Panfkalpinang, maka Dinas Pendapatan Daerah (Dispenda)
                  Pemerintah Kotamadya Daerah Tingkat II Pangklpinang
                  digabungkan dengan Bagian Keuangan Sekretariat Pemerintah
                  Kotamadya Daerah Tingkat II Pangkalpinang dengan nama Badan
                  Keuangan Daearah (Bakuda) Pemerintah Kota Pangkalpinang.
                  Organisasi Bakuda ini dipimpin oleh seorang Kepala Badan
                  dengan eselon II/b, yang dibantu oleh seorang Bagian Tata
                  Usaha Badan dengan tiga orang Kepala Bidang yang masing-masing
                  dengan eselon III/a. bidang-bidang tersebut adalah
                </p>
              </div>
            </div>
            <div className="w-3/12">
              <div className="overflow-x-scroll bg-gray-200 px-16 lg:px-0">
                <div className=" bg-blue-500">
                  <div className="grid grid-cols-3 gap-2 lg:w-[1024px] lg:h-[400px] w-[1200px] h-[300px]">
                    <div>
                      <Image
                        className="w-full h-full"
                        src="/images/foto-diri.jpeg"
                        alt="logo"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/foto.jpg"
                        alt="logo"
                        width={800}
                        height={800}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/logo-full.png"
                        alt="logo"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full mb-12 px-3 max-w-full mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
        <div className="lg:flex lg:gap-2 p-2">
          <div className="lg:flex-none lg:w-4/6 relative">
            <section className="py-2">
              <h1 className="text-2xl font-bold text-secondary-foreground pb-4">
                Sejarah Bakeuda Kota Pangkalpinang
              </h1>
              <div className="h-15 bg-rose-500 aspect-video py-4"></div>

              <p className="text-justify indent-8 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                omnis laudantium, libero eos qui totam recusandae ullam harum
                corrupti ea voluptates est quis ipsum enim dolore. Blanditiis
                inventore esse cum dignissimos nam quod ullam! Doloremque
                repudiandae deserunt esse facilis error quam doloribus earum
                laborum, incidunt sint, excepturi praesentium mollitia natus
                quia architecto. Quaerat repudiandae nostrum hic atque dolore
                voluptatum, quod earum consequatur officiis cumque quas itaque
                eius labore possimus beatae, ratione dignissimos ipsa
                consequuntur doloribus velit. Quam quisquam asperiores maiores!
                Id, pariatur facere nostrum alias architecto soluta asperiores
                ad ab dignissimos ullam quam accusamus sit natus minus quia
                quaerat excepturi unde deserunt quo quasi. Asperiores reiciendis
                veritatis, eligendi ex sed culpa, perspiciatis atque voluptatem
                a repudiandae aspernatur, rerum possimus molestiae dolore. Nulla
                eaque suscipit temporibus repellendus veniam tempora, mollitia
                reprehenderit est nam vel ratione tempore architecto aut aliquam
                impedit molestiae. Modi hic quisquam mollitia odit
                necessitatibus architecto dignissimos tenetur enim, esse
                numquam. Asperiores neque provident quo ab voluptatem,
                distinctio architecto a corporis ea excepturi fuga quidem rerum
                qui quasi mollitia hic dolore voluptate impedit officia cumque
                soluta vitae? Fugiat doloribus eos fugit quidem, sed eius illo,
                placeat est excepturi inventore voluptates sunt voluptatum,
                consequuntur architecto vitae quaerat? Reprehenderit, ut
                reiciendis?
              </p>
            </section>
          </div>
          <div className="py-2 px-2 lg:flex-none lg:w-2/6">
            <div className="top-24 z-30 -ml-2  w-full shrink-0 sticky block">
              <div className="content-wrap ">
                <div className="px-2">
                  <h1 className="text-2xl font-bold text-secondary-foreground ">
                    PIMPINAN
                  </h1>
                  <div className="py-2 overflow-y-scroll h-90 w-full">
                    <div className="w-[800px] flex gap-2 justify-start">
                      <div className="h-18 bg-slate-500 aspect-[9/16] rounded-lg w-[250px]"></div>
                      <div className="h-18 bg-slate-500 aspect-[9/16] rounded-lg w-[250px]"></div>
                      <div className="h-18 bg-slate-500 aspect-[9/16] rounded-lg w-[250px]"></div>
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
        </div>
      </section>
    </>
  );
}
