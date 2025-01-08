import FotoPemimpin from "@/components/components-ui/foto-pemimpin";
import React from "react";
import { BookText, Minus, Plus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { kaban, kakuntansi, kanggaran, kaset, kpenagihan, kpendaftaran, kperben, sekban } from "@/lib/image";

export const metadata = {
  title: `Tugas Fungsi - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}

export default function PageTugasFungsi() {
  return (
    <section className="w-full mb-12 px-3 max-w-full mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
      <div className="lg:flex lg:gap-2 p-2">
        <div className="lg:flex-none lg:w-4/6 relative">
          <section className="py-2">
            <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <BookText className="w-6 h-6 text-rose-500" />
                TUGAS DAN FUNGSI BADAN KEUANGAN DAERAH KOTA PANGKAL PINANG
              </h2>
            </div>
            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Badan</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">Muhammad Yasin, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Kepala Badan Keuangan Daerah</p>
                        <p className="text-gray-500">Pangkat/Gol : Pembina TK.I/IV.B</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Melaksanakan perumusan kebijakan teknis, koordinasi, pembinaan dan penyelenggaraan urusan pemerintahan bidang keuangan, pendapatan dan aset daerah berdasarkan asas desentralisasi dan tugas pembantuan.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Perumusan kebijakan teknis bidang keuangan, pendapatan dan aset daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penetapan rencana strategis Badan Keuangan Daerah untuk mendukung visi dan misi dan kebijakan Wali Kota;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemberian dukungan atas penyelenggaraan Pemerintahan Kota Pangkal Pinang bidang keuangan daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penetapan rencana kerja Badan Keuangan Daerah menurut skala prioritas dan mendistribusikannya kepada bawahan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pembinaan dan pelaksanaan tugas dibidang keuangan daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          pelaksanaan perencanaan bidang keuangan daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pengkoordinasian dan pelaksanaan keuangan lingkup kota termasuk dukungan dana, sarana dan prasarana Badan Keuangan Daerah; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas lain yang diberikan Wali Kota sesuai dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Sekretaris</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={sekban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">SYAMSUL BACHRI, S.E., M.Ec.Dev.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Sekretaris Badan Keuangan Daerah</p>
                        <p className="text-gray-500">Pangkat/Gol : Pembina / IV.A</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Melaksanakan koordinasi pelaksanaan tugas dan pemberian pelayanan administratif dan fungsional kepada seluruh unit organisasi di lingkungan Badan Keuangan Daerah.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Pelaksanaan koordinasi kegiatan Badan keuangan Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan rencana program dan anggaran Badan Keuangan Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyelenggaraan urusan ketatausahaan rumah tangga, kepegawaian, hukum dan organisasi serta hubungan masyarakat Badan Keuangan Daerah;
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
                          Penyelenggaraan urusan keuangan, perbendaharaan, akuntansi, verifikasi, tindak lanjut Laporan Hasil Pemeriksaan dan pengelolaan sarana Badan Keuangan Daerah; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas pemerintahan umum lainnya yang diberikan Kepala Badan sesuai tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Anggaran</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kanggaran}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">FIRMAN RAHMADONI, S.E., M.Acc.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 198202022008011006</h3>
                        <p className="text-gray-500">Jabatan : Kepala Bidang Anggaran</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata Tk.I / III</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Melaksanakan koordinasi pelaksanaan tugas, pembinaan dan pemberian dukungan administrasi bidang anggaran kepada seluruh unit organisasi di Lingkungan Pemerintah Kota.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Penyusunan rencana program dan kegiatan lingkup Penganggaran;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan petunjuk teknis lingkup Penganggaran;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Penganggaran lingkup Perumusan Anggaran, Penyusunan Anggaran dan Sistem Informasi Anggaran;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemberdayaan dan peningkatan kualitas sumber daya manusia lingkup Penganggaran;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksaan monitoring, evaluasi dan pelaporan lingkup Penganggaran; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas lainnya yang diberikan Kepala Badan Keuangan Daerah sesuai dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Perbendaharaan</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kperben}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">NATALIAWATI, S.AP.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 196912251990032004</h3>
                        <p className="text-gray-500">Jabatan : Kepala Bidang Perbendaharaan</p>
                        <p className="text-gray-500">Pangkat/Gol : Pembina / IV.A</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Melaksanakan koordinasi pelaksaan tugas, pembinaan dan pemberian dukungan administrasi bidang perbendaharaan kepada seluruh unit organisasi dilingkungan Pemerintah Kota.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Penyusunan rencana program dan kegiatan lingkup Perbendaharaan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan petunjuk teknis lingkup Perbendaharaan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Perbendaharaan lingkup Penatausahaan Pengeluaran, Penatausahaan Kas Daerah dan Pengendalian Belanja;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemberdayaan dan peningkatan kualitas sumber daya manusia lingkup Perbendaharaan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan monitoring, evaluasi dan pelaporan lingkup Perbendaharaan; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas pemerintah umum lainnya yang diberikan Kepala Badan Kenagan Daerah sesuai dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Akuntansi dan Pelaporan </span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kakuntansi}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">SUMARSONO, S.E.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 197307232005011007</h3>
                        <p className="text-gray-500">Jabatan : Kepala Bidang Akuntansi dan Pelaporan</p>
                        <p className="text-gray-500">Pangkat/Gol : Pembina / IV.A</p>
                      </div>
                    </div>

                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Melaksanakan koordinasi pelaksaan tugas, pembinaan dan pemberian dukungan administrasi bidang Akuntansi dan Pelaporan kepada seluruh unit organisasi di lingkungan Pemerintah Kota.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Penyusunan rencana program dan kegiatan lingkup Akuntansi dan Pelaporan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan petunjuk teknis lingkup Akuntansi dan Pelaporan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Akuntansi dan Pelaporan lingkup Akuntansi Penerimaan, Akuntansi Pengeluaran dan Pelporan Keuangan Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemberdayaan dan peningkatan kualitas sumber daya manusia lingkup Akuntansi dan Pelaporan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan monitoring, evaluasi dan pelaporan lingkup Akuntansi dan Pelaporan; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas pemerintahan umum lainnya yang diberikan Kepala Badan Keuangan Daerah sesuai dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Pendaftaran dan Penetapan Pajak Daerah</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kpenagihan}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">HARRY, S.Kom.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 198405082010011011</h3>
                        <p className="text-gray-500">Jabatan : Kepala Bidang Pendaftaran dan Penetapan Pajak Daerah</p>
                        <p className="text-gray-500">Pangkat/Gol : Pembina / IV.A</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Membantu Kepala Badan dalam melaksanakan perumusan kebijakan teknis dan dukungan teknis, mengoordinasikan, melaksanakan dan mengendalikan serta membina pelaksanaan tugas Bidang Pendaftaran, Penetapan Pajak dan Retribusi Daerah.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Penyusunan program kerja dan rencana kegiatan Bidang untuk kelancaran tugas Bidang Pendaftaran dan Penetapan Pajak Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Perumusan kebijakan teknis perencanaan dan pengembangan ekstensifikasi dan intensifikasi pendapatan daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan kebijakan teknis, operasional dan petunjuk pelaksanaan sistem administrasi pendapatan daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Perumusan kebijakan strategi penyuluhan dan penyebarluasan informasi serta pelayanan pajak daerah dan retribusi daerah kepada masyarakat yang berbasis teknologi informasi;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan laporan hasil pelaksanaan kegiatan bidang sebagai bahan pertanggungjawaban pelaksanaan tugas;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemberian saran dan pertimbangan kepada Kepala Badan tentang Langkah-langkah dan tindakan yang perlu diambil dalam bidang tugasnya; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas fungsi lain yang diberikan oleh Kepala Badan terkait dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Penagihan dan Pengendalian Pajak Daerah</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kpendaftaran}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">ZULPIAN, S.E.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 198309162008041002</h3>
                        <p className="text-gray-500">Jabatan : Kepala Bidang Penagihan dan Pengendalian Pajak Daerah</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata / III.C</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Membantu Kepala Badan dalam melaksakan perumusan kebijakan teknis dan dukungan teknis bidang Penagihan dan Pengendalian Pajak Daerah yang meliputi operasional, mengoordinasikan, melaksanakan dan mengendalikan serta membina pelaksanaan tugas bidang Penagihan dan Pengendalian Pajak Daerah, pemrosesan keringanan/keberatan pajak daerah serta pengendalian operasional, pemeriksaan dan penindakan pajak daerah dan pengendalian retribusi daerah.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Penyusunan program kerja dan rencana kegiatan Bidang untuk kelancaran tugas Bidang Penagihan dan Pengendalian Pajak Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan kebijakan petunjuk teknis dan petunjuk pelaksanaan sistem dan prosedur Penagihan dan Pengendalian Pajak Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyelenggaraan dan pengoordinasian penagihan pajak daerah dan pengelolaan piutang pajak daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemrosesam permohonan kringanan/keberatan pajak daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan pemeriksaan pajak daerah dan keberatan;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pengendalian operasional, pemeriksaan dan penindakan pajak daerah dan pengendalian retribusi daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tindak lanjut surat pengurangan/keringanan, keberatan dan banding, pengendalian operasional, pemeriksaan dan penindakan di bidang pajak daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan evaluasi tunggakan pajak daerah, penghapusan piutang, penundaan pembayaran, angsuran tunggakan, pengurangan/keringanan, keberatan dan banding pengendalian operasional, pemeriksaan dan penindakan di bidang pajak daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">9.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pengoordinasian pelaksanaan, pemberdayaan, pengawasan dan pengendalian retribusi daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">10.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pembahasan pelaporan pelaksaan program kerja bidang pajak daerah maupun retribusi daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">11.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pengevaluasian pelaksaan tugas dan menginventarisir permasalahan dilingkup Bidang baik pajak daerah maupun retribusi daerah serta mencari alternatif pemecahannya;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">12.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pengoordinasian pelaksanaan kegiatan intensifikasi dan ekstensifikasi pendapatan Bidang Penagihan dan Pengendalian Pajak Daerah;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">13.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Memberikan saran dan pertimbangan Kepala Badan tentang langkah-langkah dan tindakan yang perlu diambil dalam bidang tugasnya; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">14.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksaan fungsi lain yang diberikan oleh Kepala Badan terkait dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Aset</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">

                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaset}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">LENAWATI, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 198005262000032001</h3>
                        <p className="text-gray-500">Jabatan : Kepala Bidang Aset</p>
                        <p className="text-gray-500">Pangkat/Gol : Pembina / IV.A</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Peraturan Wali Kota Pangkal Pinang Nomor 48 Tahun 2023 Tentang Kedudukan, Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja Unsur Penunjang Perangkat Daerah Kota Pangkal Pinang.
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Koordinasi pelaksaan tugas, pembinaan dan pemberian dukungan administrasi bidang Aset kepada seluruh unit organisasi di lingkungan Pemerintah Kota.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Penyusunan rencana program dan kegiatan lingkup Aset;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyusunan petunjuk teknis lingkup Aset;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Aset lingkup penatausahaan Aset, Penilaian dan Penghapusan Aset, Pengamanan dan Pemanfaatan Aset;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pemberdayaan dan peningkatan kualitas sumber daya manusia lingkup Aset;
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan monitoring, evaluasi dan pelaporan lingkup Aset; dan
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Pelaksanaan tugas pemerintahan umum lainnya yang diberikan Kepala Badan Keuangan Daerah sesuai dengan tugas dan fungsinya.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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
