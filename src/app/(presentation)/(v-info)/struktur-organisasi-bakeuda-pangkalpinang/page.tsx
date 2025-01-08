"use client";
import FotoPemimpin from "@/components/components-ui/foto-pemimpin";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skleton";
import { getPegawaiByQuery, getPegawaiPhl } from "@/features/presentesion/pegawai/useManagementPegawai";
import { kaban, strukturorganisasi } from "@/lib/image";
import { useQuery } from "@tanstack/react-query";
import { Minus, Network, Plus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";


type Pegawai = {
  id_pegawai: string;
  name: string;
  jabatan: string;
  nip: string;
  golongan: string;
  pendidikan_terahir: string;
  email: string;
  bidang: string;
  image: string;
  status: string;
  authorId: string;
  authorUsername: string;
  published: string;
  createdAt: string;
  updatedAt: string;
  photoUrl: string;
}


export default function PageStrukturOrganisasi() {

  const [isFetchedPejabat, setIsFetchedPejabat] = useState(false);
  const [isFetchedPns, setIsFetchedPns] = useState(false);
  const [isFetchedPppk, setIsFetchedPppk] = useState(false);
  const [isFetchedPhlSekretaritat, setIsFetchedPhlSekretaritat] = useState(false);
  const [isFetchedPhlPerbendaharaan, setIsFetchedPhlPerbendaharaan] = useState(false);
  const [isFetchedPhlAset, setIsFetchedPhlAset] = useState(false);
  const [isFetchedPhlAkuntansi, setIsFetchedPhlAkuntansi] = useState(false);
  const [isFetchedPhlAnggaran, setIsFetchedPhlAnggaran] = useState(false);
  const [isFetchedPhlPendaftaran, setIsFetchedPhlPendaftaran] = useState(false);
  const [isFetchedPhlPenagihan, setIsFetchedPhlPenagihan] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: DataPejabatEselon, isLoading: LoadingPejabatEselon } = useQuery({
    queryKey: ["pejabat-eselon"],
    queryFn: async () => {
      return await getPegawaiByQuery("pejabat-eselon");
    },
    enabled: isFetchedPejabat,
  });

  const { data: DataPegawaiPns, isLoading: LoadingPegawaiPns } = useQuery({
    queryKey: ["pns"],
    queryFn: async () => {
      return await getPegawaiByQuery("pns");
    },
    enabled: isFetchedPns,
  });

  const { data: DataPegawaiPppk, isLoading: LoadingPegawaiPppk } = useQuery({
    queryKey: ["pppk"],
    queryFn: async () => {
      return await getPegawaiByQuery("pppk");
    },
    enabled: isFetchedPppk,
  });

  const { data: DataPegawaiPhlSekretariat, isLoading: LoadingPegawaiPhlSekretariat } = useQuery({
    queryKey: ["phl-sekretariat"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "sekretariat");
    },
    enabled: isFetchedPhlSekretaritat,
  });

  const { data: DataPegawaiPhlPerbendaharaan, isLoading: LoadingPegawaiPhlPerbendaharaan } = useQuery({
    queryKey: ["phl-perbendaharaan"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "perbendaharaan");
    },
    enabled: isFetchedPhlPerbendaharaan,
  });

  const { data: DataPegawaiPhlAset, isLoading: LoadingPegawaiPhlAset } = useQuery({
    queryKey: ["phl-aset"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "aset");
    },
    enabled: isFetchedPhlAset,
  });

  const { data: DataPegawaiPhlAkuntansi, isLoading: LoadingPegawaiPhlAkuntansi } = useQuery({
    queryKey: ["phl-akuntansi"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "akuntansi");
    },
    enabled: isFetchedPhlAkuntansi,
  });

  const { data: DataPegawaiPhlAnggaran, isLoading: LoadingPegawaiPhlAnggaran } = useQuery({
    queryKey: ["phl-anggaran"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "anggaran");
    },
    enabled: isFetchedPhlAnggaran,
  });

  const { data: DataPegawaiPhlPendaftaran, isLoading: LoadingPegawaiPhlPendaftaran } = useQuery({
    queryKey: ["phl-pendaftaran"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "pendaftaran");
    },
    enabled: isFetchedPhlPendaftaran,
  });

  const { data: DataPegawaiPhlPenagihan, isLoading: LoadingPegawaiPhlPenagihan } = useQuery({
    queryKey: ["phl-penagihan"],
    queryFn: async () => {
      return await getPegawaiPhl("phl", "penagihan");
    },
    enabled: isFetchedPhlPenagihan,
  });

  const sortedPejabat = DataPejabatEselon?.data
    ?.slice() // Salin array untuk menghindari mutasi data asli
    ?.sort((a: Pegawai, b: Pegawai) => {
      // Urutkan Kepala Badan pertama
      if (a.jabatan === "Kepala Badan") return -1;
      if (b.jabatan === "Kepala Badan") return 1;

      // Urutkan Sekretaris Badan kedua
      if (a.jabatan === "Sekretaris Badan") return -1;
      if (b.jabatan === "Sekretaris Badan") return 1;

      // Sisanya bebas (default urutan)
      return 0;
    });

  const handleTabClick = (slug: String): MouseEventHandler<HTMLDivElement> => (event) => {
    if (slug === "pns" && !isFetchedPns) {
      setIsFetchedPns(true);
    } else if (slug === "pppk" && !isFetchedPppk) {
      setIsFetchedPppk(true);
    } else if (slug === "pejabat" && !isFetchedPejabat) {
      setIsFetchedPejabat(true);
    } else if (slug === "sekretariat" && !isFetchedPhlSekretaritat) {
      setIsFetchedPhlSekretaritat(true);
    } else if (slug === "perbendaharaan" && !isFetchedPhlPerbendaharaan) {
      setIsFetchedPhlPerbendaharaan(true);
    } else if (slug === "aset" && !isFetchedPhlAset) {
      setIsFetchedPhlAset(true);
    } else if (slug === "akuntansi" && !isFetchedPhlAkuntansi) {
      setIsFetchedPhlAkuntansi(true);
    } else if (slug === "anggaran" && !isFetchedPhlAnggaran) {
      setIsFetchedPhlAnggaran(true);
    } else if (slug === "pendaftaran" && !isFetchedPhlPendaftaran) {
      setIsFetchedPhlPendaftaran(true);
    } else if (slug === "penagihan" && !isFetchedPhlPenagihan) {
      setIsFetchedPhlPenagihan(true);
    }
  };


  return (
    <section className="w-full mb-12 px-3 max-w-full mx-auto bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
      <div className="lg:flex lg:gap-2 p-2">
        {/* Konten Utama */}
        <div className="lg:flex-none lg:w-4/6 relative">
          <section className="py-2 mb-4">

            <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Network className="w-6 h-6 text-rose-500" />
                STRUKTUR ORGANISASI
              </h2>
            </div>

            <div className="h-15  aspect-video py-4 mb-10">
              <Image src={strukturorganisasi} alt="Struktur Organisasi" className="w-full h-full" width={9000} height={9000} quality={100} />
            </div>
          </section>

          <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Users className="w-6 h-6 text-rose-500" />
              DAFTAR PEGAWAI
            </h2>
          </div>


          {/* Collapsible Section */}
          <div className="mt-6 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("pejabat")}
                >
                  <span className="font-medium">Daftar Pejabat Eselon</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPejabatEselon ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPejabatEselon || DataPejabatEselon.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pejabat eselon.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {sortedPejabat?.map((pejabat: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pejabat.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pejabat.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pejabat.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pejabat.name}</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. {pejabat.nip}</h3>

                        <p className="text-gray-500">Jabatan : {pejabat.jabatan}</p>
                        <p className="text-gray-500">Pangkat/Gol : {pejabat.golongan}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pejabat.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("pns")}
                >
                  <span className="font-medium">Daftar Staff PNS</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPns ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPns || DataPegawaiPns.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pns.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPns?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. {pegawai.nip}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Pangkat/Gol : {pegawai.golongan}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("pppk")}
                >
                  <span className="font-medium">Daftar Staff PPPK</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPppk ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPppk || DataPegawaiPppk.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPppk?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. {pegawai.nip}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Pangkat/Gol : {pegawai.golongan}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("sekretariat")}
                >
                  <span className="font-medium">Daftar PHL Bidang Sekretariat</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlSekretariat ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlSekretariat || DataPegawaiPhlSekretariat.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlSekretariat?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("perbendaharaan")}
                >
                  <span className="font-medium">Daftar PHL Bidang Perbendaharaan</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlPerbendaharaan ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlPerbendaharaan || DataPegawaiPhlPerbendaharaan.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlPerbendaharaan?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("aset")}
                >
                  <span className="font-medium">Daftar PHL Bidang Aset</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlAset ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlAset || DataPegawaiPhlAset.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlAset?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("akuntansi")}
                >
                  <span className="font-medium">Daftar PHL Bidang Akuntansi</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlAkuntansi ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlAkuntansi || DataPegawaiPhlAkuntansi.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlAkuntansi?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("anggaran")}
                >
                  <span className="font-medium">Daftar PHL Bidang Anggaran</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlAnggaran ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlAnggaran || DataPegawaiPhlAnggaran.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlAnggaran?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("pendaftaran")}
                >
                  <span className="font-medium">Daftar PHL Bidang Pendaftaran dan Penetapan Pajak Daerah</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlPendaftaran ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlPendaftaran || DataPegawaiPhlPendaftaran.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlPendaftaran?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mt-2 border rounded-lg shadow-sm">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleTabClick("penagihan")}
                >
                  <span className="font-medium">Daftar PHL Bidang Penagihan dan Pengendalian Pajak Daerah</span>
                  <div className="ml-auto">
                    <Plus className="group-data-[state=open]:hidden" />
                    <Minus className="hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 border-t">
                {LoadingPegawaiPhlPenagihan ? (
                  // Skeleton Loading
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <Skeleton className="w-56 h-64 rounded-lg mb-3" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-4 w-48 mb-1" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    ))}
                  </div>
                ) : !DataPegawaiPhlPenagihan || DataPegawaiPhlPenagihan.length === 0 ? (
                  // Data kosong
                  <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-medium">Tidak ada data pegawai.</p>
                  </div>
                ) : (
                  // Tampilkan data jika tersedia
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {DataPegawaiPhlPenagihan?.data?.map((pegawai: Pegawai, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center text-sm bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link href={pegawai.photoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={pegawai.photoUrl || kaban}
                            width={500}
                            height={500}
                            className="w-56 h-64 rounded-lg object-cover mb-3"
                            alt={pegawai.name}
                          />
                        </Link>
                        <h3 className="font-semibold text-lg text-gray-800">{pegawai.name}</h3>

                        <p className="text-gray-500">Jabatan : {pegawai.jabatan}</p>
                        <p className="text-gray-500">Bidang : {pegawai.bidang}</p>
                        <p className="text-gray-500">Status : {pegawai.status}</p>
                        <p className="text-gray-500">Pendidikan Terahir : {pegawai.pendidikan_terahir}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Foto Pemimpin */}
        <div className="py-2 px-2 lg:flex-none lg:w-2/6">
          <FotoPemimpin />
        </div>
      </div>
    </section>
  );
}
