"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Captcha, { CaptchaRef } from "./caphca"; // pastikan ini valid
import { toast } from "sonner";
import { postPengaduan, statusPengaduan } from "@/features/presentesion/pengaduan/useManagementPengaduan";

// Skema validasi form pengaduan
const pengaduanSchema = z.object({
    email: z.string().email("Email tidak valid"),
    lingkupPengaduan: z.string().min(1, "Harus diisi"),
    areaPengaduan: z.string().min(1, "Harus diisi"),
    namaTerlapor: z.string().min(3, "Minimal 3 karakter"),
    lokasiKejadian: z.string().min(3, "Harus diisi"),
    tanggalKejadian: z.string().min(1, "Harus diisi"),
    waktuKejadian: z.string().min(1, "Harus diisi"),
    uraianPengaduan: z.string().min(10, "Minimal 10 karakter"),
    lampiran: z
        .custom < FileList > ()
            .refine((files) => files?.length > 0, "Lampiran wajib diisi")
            .refine((files) => files[0]?.size <= 4 * 1024 * 1024, "Ukuran maksimal 4MB")
            .refine(
                (files) =>
                    ["image/jpeg", "image/png", "video/mp4", "application/pdf"].includes(files[0]?.type),
                "Format harus JPG, PNG, MP4, atau PDF"
            ),
    pernyataan: z.literal(true, {
        errorMap: () => ({ message: "Harus menyetujui pernyataan" }),
    }),
});

type PengaduanFormData = z.infer<typeof pengaduanSchema>;

const cekStatusSchema = z.object({
    noLaporan: z.string().min(1, "Masukkan nomor laporan"),
});
type CekStatusFormData = z.infer<typeof cekStatusSchema>;

interface BalasanType {
    id: number;
    no_pelaporan: string;
    isi_balasan: string;
    createdAt: string;
}

export default function FormPengaduan() {
    // Form pelaporan
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm < PengaduanFormData > ({
        resolver: zodResolver(pengaduanSchema),
    });

    // Form cek status
    const {
        register: registerStatus,
        handleSubmit: handleSubmitStatus,
        formState: { errors: errorsStatus },
    } = useForm < CekStatusFormData > ({
        resolver: zodResolver(cekStatusSchema),
    });

    const reportRef = useRef < HTMLDivElement > (null);
    const [captchaValid, setCaptchaValid] = useState(false);
    const [nopelak, setNopelak] = useState("");
    const [balasanLaporan, setBalasanLaporan] = useState < BalasanType[] > ([]); // atau useState([]) jika tidak pakai TypeScript
    const [errorLapor, setErrorLapor] = useState("");
    const [konfirmasiLaporan, setKonfirmasiLaporan] = useState("");
    const [errorStatusLapor, setErrorStatusLapor] = useState("");
    const [loadingCekStatus, setLoadingCekStatus] = useState(false);
    const [loadingPengaduan, setLoadingPengaduan] = useState(false);
    const captchaRef = useRef < CaptchaRef > (null);

    const onSubmit = async (data: PengaduanFormData) => {
        if (!captchaValid) {
            toast.error("Captcha tidak valid");
            return;
        }

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("lingkuppengaduan", data.lingkupPengaduan);
        formData.append("areapengaduan", data.areaPengaduan);
        formData.append("namaterlapor", data.namaTerlapor);
        formData.append("lokasikejadian", data.lokasiKejadian);
        formData.append("tanggalkejadian", data.tanggalKejadian);
        formData.append("waktukejadian", data.waktuKejadian);
        formData.append("uraianpengaduan", data.uraianPengaduan);
        formData.append("lampiran", data.lampiran[0]);
        formData.append("pernyataan", data.pernyataan.toString());

        try {
            setLoadingPengaduan(true);
            const response = await postPengaduan(formData);

            if (response.status === true) {
                setNopelak(response.no_pelaporan);
                setErrorLapor("");
            } else {
                setErrorLapor(response.message);
            }
        } catch (error) {
            setErrorLapor("Ada Kesalahan Dalam Pengaduan");
        } finally {
            setLoadingPengaduan(false);
            // reset();
            // setCaptchaValid(false);
            // captchaRef.current?.resetCaptcha();
        }
    };

    const onSubmitStatusPengaduan = async (data: CekStatusFormData) => {
        setLoadingCekStatus(true);
        setBalasanLaporan([]);
        setErrorStatusLapor("");
        setKonfirmasiLaporan("");

        try {
            const response = await statusPengaduan(data.noLaporan);

            if (response.status === true) {
                setBalasanLaporan(response?.balasan);
                setKonfirmasiLaporan(response?.message);
            } else {
                setErrorStatusLapor(response.message);
            }
        } catch (error) {
            setErrorStatusLapor("Ada Kesalahan");
        } finally {
            setLoadingCekStatus(false);
        }
    };

    useEffect(() => {
        if (nopelak && reportRef.current) {
            reportRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [nopelak]);

    return (
        <div className="max-w-4xl mx-auto mt-10 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center">FORM PELAPORAN PENGADUAN</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormField label="Email" error={errors.email?.message}>
                            <Input type="email" {...register("email")} />
                        </FormField>

                        <FormField label="Lingkup Pengaduan" error={errors.lingkupPengaduan?.message}>
                            <Input type="text" {...register("lingkupPengaduan")} />
                        </FormField>

                        <FormField label="Area Pengaduan" error={errors.areaPengaduan?.message}>
                            <Input type="text" {...register("areaPengaduan")} />
                        </FormField>

                        <FormField label="Nama Terlapor" error={errors.namaTerlapor?.message}>
                            <Input type="text" {...register("namaTerlapor")} />
                        </FormField>

                        <FormField label="Lokasi Kejadian" error={errors.lokasiKejadian?.message}>
                            <Input type="text" {...register("lokasiKejadian")} />
                        </FormField>

                        <FormField label="Tanggal Kejadian" error={errors.tanggalKejadian?.message}>
                            <Input type="date" {...register("tanggalKejadian")} />
                        </FormField>

                        <FormField label="Waktu Kejadian" error={errors.waktuKejadian?.message}>
                            <Input type="time" {...register("waktuKejadian")} />
                        </FormField>

                        <FormField label="Uraian Pengaduan" error={errors.uraianPengaduan?.message}>
                            <Textarea {...register("uraianPengaduan")} />
                        </FormField>

                        <FormField label="Lampiran" error={errors.lampiran?.message}>
                            <Input type="file" {...register("lampiran")} />
                        </FormField>

                        <div>
                            <label className="flex items-start space-x-2">
                                <input type="checkbox" {...register("pernyataan")} />
                                <span>Saya menyatakan bahwa informasi di atas benar dan dapat dipertanggungjawabkan</span>
                            </label>
                            {errors.pernyataan && (
                                <p className="text-red-500 text-sm">{errors.pernyataan.message}</p>
                            )}
                        </div>

                        <Captcha ref={captchaRef} onValidate={setCaptchaValid} />

                        <Button type="submit" className="w-full text-white" disabled={!captchaValid || loadingPengaduan}>
                            {loadingPengaduan ? "Mengirim..." : "Kirim"}
                        </Button>

                        {errorLapor && (
                            <p className="text-red-600 text-center mt-2">{errorLapor}</p>
                        )}
                    </form>
                </CardContent>
            </Card>

            {nopelak && (
                <div
                    ref={reportRef}
                    className="mt-6 border border-gray-300 rounded-md p-4 bg-gray-50 max-w-sm mx-auto"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-lg">{nopelak}</span>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(nopelak);
                                toast.success("Nomor laporan disalin!");
                            }}
                            type="button"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            SALIN
                        </button>
                    </div>
                    <p className="text-sm text-gray-600">
                        Harap simpan nomor pelaporan di atas sebagai bukti dan untuk memudahkan pengecekan status laporan Anda.
                    </p>
                </div>
            )}

            <Card className="mt-10">
                <CardHeader>
                    <CardTitle className="text-center">CEK STATUS LAPORAN</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmitStatus(onSubmitStatusPengaduan)} className="space-y-4">
                        <FormField label="Nomor Laporan" error={errorsStatus.noLaporan?.message}>
                            <Input
                                {...registerStatus("noLaporan")}
                                placeholder="PEL-XXXXXXXX-XXXX-XXX"
                                disabled={loadingCekStatus}
                            />
                        </FormField>
                        <Button type="submit" className="w-full text-white" disabled={loadingCekStatus}>
                            {loadingCekStatus ? "Memeriksa..." : "Cek Status"}
                        </Button>
                        {errorStatusLapor && (
                            <p className="text-red-600 text-center mt-2">{errorStatusLapor}</p>
                        )}
                        {/* konfirmasi message laporan */}
                        {konfirmasiLaporan && (
                            <p className="font-bold text-center mt-2">{konfirmasiLaporan}</p>
                        )}
                    </form>
                </CardContent>
            </Card>
            {balasanLaporan.length > 0 ? (
                balasanLaporan.map((item) => (

                    <div key={item.id} className="mt-6 border border-gray-300 rounded-md p-4 bg-gray-50 max-w-sm mx-auto">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-sm">{item.no_pelaporan}</span>
                            <p className="text-xs text-gray-600">
                                {new Date(item.createdAt).toLocaleString()}
                            </p>
                        </div>
                        <p className="text-sm text-gray-600">
                            {item.isi_balasan}

                        </p>
                    </div>
                ))
            ) : (
                <></>
            )}


        </div>
    );
}

// Komponen kecil untuk label dan error
function FormField({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">{label}</label>
            {children}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
