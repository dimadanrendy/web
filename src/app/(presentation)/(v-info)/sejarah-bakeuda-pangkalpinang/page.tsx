import FotoPemimpin from "@/components/components-ui/foto-pemimpin";
import { Card, CardContent } from "@/components/ui/card";
import { fotoBakeuda } from "@/lib/image";
import { BookText } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: `Sejarah - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}

export default function PageProfile() {
  return (
    <>

      <section className="w-full mb-12 px-3 max-w-full mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
        <div className="lg:flex lg:gap-2 p-2">
          <div className="lg:flex-none lg:w-4/6 relative">
            <section className="py-2">
              <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <BookText className="w-6 h-6 text-rose-500" />
                  SEJARAH BADAN KEUANGAN DAERAH KOTA PANGKAL PINANG
                </h2>
              </div>
              <Card>
                <CardContent className="flex relative bg-slate-500 aspect-[21/9] items-center justify-center">
                  <Image
                    src={fotoBakeuda}
                    alt="placeholder"
                    quality={100}
                    fill
                  />
                </CardContent>
              </Card>

              <p className="font-bold mt-4 text-sm">
                1. Badan Keuangan Daerah (Bakuda) Periode Tahun 2000-2003
              </p>
              <p className="text-justify indent-8 text-sm">
                Dengan terbitnya Undang-Undang Nomor 22 Tahun 1999 tentang
                Pemerintah Daerah, maka dimulai era otonomi daerah untuk Pemerintah
                Kabupaten dan Kota. Pemerintah Kota Pangkalpinang melakukan restrukturisasi
                semua perangkat-perangkat (instansi) daerah untuk disesuaikan dengan
                Undang-Undang Nomor 22 Tahun 1999 tersebut. Termasuk perangkat daerah
                yang menangani bidang keuangan daerah.Sesuai amanat Peraturan Daerah
                (Perda) Kota Pangkalpinag Nomor 17 Tahun 2000 tentang Pembentukan dan
                Susunan Organisasi Perangkat-Perangkat Pemerintah Kota Panfkalpinang,
                maka Dinas Pendapatan Daerah (Dispenda) Pemerintah Kotamadya Daerah
                Tingkat II Pangklpinang digabungkan dengan Bagian Keuangan Sekretariat
                Pemerintah Kotamadya Daerah Tingkat II Pangkalpinang dengan nama Badan
                Keuangan Daearah (Bakuda) Pemerintah Kota Pangkalpinang.
                Organisasi Bakuda ini dipimpin oleh seorang Kepala Badan dengan eselon II/b,
                yang dibantu oleh seorang Bagian Tata Usaha Badan dengan tiga orang Kepala
                Bidang yang masing-masing dengan eselon III/a. bidang-bidang tersebut adalah:
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Anggaran, Pendapatan dan Penetapan Pajak Daerah;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Perbendaharaan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pembukuan dan Verifikasi.
              </p>
              <p className="font-bold mt-4 text-sm">
                2. Badan Keuangan Daerah (Bakuda) Periode 2003-2008
              </p>
              <p className="text-justify indent-8 text-sm">
                Dengan diterbitkanya Peraturan Pemerintah (PP) Nomor 08 Tahun 2003
                tentang Pedoman Organisasi Perangkat Daerah,maka Perda Pemerintah Kota
                Pangkalpinang ada perubahan dengan Perda Nomor 17 Tahun 2000 tentang
                Pembentukan Susunan dan Organisasi Perangkat-Perangkat Pemerintah Kota
                Pangkalpinang dan perubahan kembali dengan Perda Nomor 04 Tahun 2003
                tentang Perubahan Peraturan Daerah Nomor 17 Tahun 2003 tentang
                Pembentukan Susunan dan Organisasi Perangkat-Perangkat Pemerintah Kota
                Pangkalpinang, maka Organisasi tetap sama yaitu Kepala Badan dengan eselon
                II/b
              </p>
              <p className="text-justify indent-8 text-sm">
                Perubahan terjadi pada jajaran se-tingkat kepala Bidang yaitu:
              </p>
              <p className="text-justify indent-8 text-sm">
                - Kepala Badan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bagian Tata Usaha;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Anggaran;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Perbendaharaan dan Akuntansi;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pendapatan.
              </p>
              <p className="font-bold mt-4 text-sm">
                3. Dinas Pendapatan dan Pengelolaan Keuangan Daerah (DPPKD) Periode
                Tahun 2008-2009
              </p>
              <p className="text-justify indent-8 text-sm">
                Dengan diterbitkan Perubahan PP Nomor 08 Tahun 2003 tentang
                Pedoman Organisasi Perangkat Daerah yaitu Peraturan Pemerintah (PP) Nomor
                41 Tahun 2007 tentang Organisasi Perangkat Daerah, maka Perda Kota
                Pangkalpinang Nomor 04 Tahun 2003 tentang Pembentukan dan Susunan
                Organisasi Perangkat-Perangkat Pemerintah Kota pangkalpinang dirubah lagi
                menjadi Perda Kota Pangkalpinang Nomor 07 Tahun 2008 tentang
                Pembentukan dan Susunan Organisasi, maka nama satuan kerja
                (nomenklatur) pengelolaan keuangan Pemerintah Kota Pangkalpinang menjadi
                Dinas Pendapatan dan Pengelolaan Keuangan Daerah (DPPKD) Kota
                Pangkalpinang.
              </p>
              <p className="text-justify indent-8 text-sm">
                DPPKD ini dipimpin oleh seorang Kepala Dinas dengan eselon II/b, yang
                dibantu oleh seorang Sekretaris Dinas dengan easelon III/a dan empat orang
                Kepala bidang yang masing-masing dengan eselon III/b, Bidang-bidang tersebut
                yaitu:
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Anggaran;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Perbendaharaan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Akuntansi dan Pelaporan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pendapatan.
              </p>

              <p className="font-bold mt-4 text-sm">
                4. Dinas Pendapatan, Pengelolaan Keuangan dan Aset Daerah (DPPKAD)
                Preode Tahun 2008- 2016
              </p>
              <p className="text-justify indent-8 text-sm">
                Peraturan Daerah Kota Pangkalpinang Nomor 07 Tahun 2008 tentang
                Pembentukan dan Susunan Oraganisasi mengalami perubahan lagi dan struktur
                oraganiasi DPPKAD Kota Pangkalpinang juga mengalami peruhan yaitu
                bertambahnya satu bidang yang menangani aset daaerah sehingga nomenklatur
                organisasi ini menjadi Dinas Pendapatan, Pengelolaan Keuangan dan Aset
                Daerah (DPPKAD) Kota Pangkalpinang dengan diatur Peraturan Daerah Kota
                Pangkalpinang Nomor 24 Tahun 2009, Dinas ini dipimpin oleh seorang Kepala
                Dinas dengan eselon II/b, yang dibantu oleh seorang Sekretaris dengan eselon
                III/a dan lima Bidang yang masing-masing dengan eselon III/b tersebut yaitu:
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Anggaran ;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Perbendaharaan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pendapatan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Akuntansi dan Pelaporan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pengelolaan Aset.
              </p>
              <p className="font-bold mt-4 text-sm">
                5. Badan Keuangan Daerah (Bakeuda) Periode Tahun 2016 -2021
              </p>
              <p className="text-justify indent-8 text-sm">
                Peraturan Daerah Kota Pangkalpinang Nomor 18 Tahun 2016 tentang
                Pembentukan dan Susunan Perangkat Daerah Kota Pangkalpinang adalah
                amanat dari Peraturan Pemerintah Nomor 18 Tahun 2016 tentang Perangkat
                Daerah dimana Badan Keuangan Daerah Tipe A merupakan unsur penunjang
                perangkat daerah bidang keuangan, pendapatan dan aset daerah yang dipimpin
                oleh seorang Kepala Badan berkedudukan dibawah dan bertanggung jawab
                kepada Walikota melalui Sekretaris Daerah dengan eselon II/b, yang dibantu
                oleh seorang Sekretaris dengan eselon III/a dan lima bidang masing-masing
                dengan eselon III/b yaitu :
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Anggaran;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Perbendaharaan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Akuntansi dan Pelaporan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pendapatan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Aset.
              </p>
              <p className="font-bold mt-4 text-sm">
                6. Badan Keuangan Daerah (Bakeuda) Periode Tahun 2021 - sekarang
              </p>
              <p className="text-justify indent-8 text-sm">
                Badan Keuangan Daerah Tipe A merupakan unsur penunjang perangkat
                daerah bidang keuangan, pendapatan dan aset daerah yang dipimpin oleh
                seorang Kepala Badan Keuangan Daerah, berkedudukan dibawah dan
                bertanggung jawab kepada Walikota melalui Sekretaris Daerah. Struktur
                organisasi merupakan hal yang penting dalam pelaksanakan program dan
                kegiatan pada suatu instansi pemerintah. Dalam melaksanakan tugas pokok
                dan fungsinya, berdasarkan Peraturan Walikota Pangkalpinang Nomor 51 Tahun 2021 tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi
                serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkalpinang
                (Berita Daerah Kota Pangkalpinang Tahun 2021 Nomor 51), menjelaskan
                bahwa Kepala Badan Keuangan Daerah mempunyai tugas melaksanakan
                perumusan kebijakan teknis, koordinasi, pembinaan dan penyelenggaraan
                urusan pemerintahan bidang keuangan, pendapatan dan aset daerah
                berdasarkan asas desentralisasi dan tugas pembantuan. Badan Keuangan
                Daerah dipimpin oleh seorang Kepala Badan berkedudukan dibawah dan
                bertanggung jawab kepada Walikota melalui Sekretaris Daerah dengan
                eselon II/b, yang dibantu oleh seorang Sekretaris dengan eselon III/a dan
                lima bidang masing-masing dengan eselon III/b yaitu :
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Anggaran;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Perbendaharaan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Akuntansi dan Pelaporan;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Pendaftaran dan Penetapan Pajak Daerah;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Penagihan dan Pengendalian Pajak Daerah;
              </p>
              <p className="text-justify indent-8 text-sm">
                - Bidang Aset.
              </p>
            </section>
          </div>
          <div className="py-2 px-2 lg:flex-none lg:w-2/6">
            <FotoPemimpin />
          </div>
        </div>
      </section>
    </>
  );
}
