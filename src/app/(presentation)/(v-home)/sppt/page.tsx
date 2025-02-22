"use client";
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Form,
    FormDescription
} from '@/components/ui/form';
import { login } from '@/features/management/auth/useLoginAuth';
import { useUser } from '@/store/store';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import axiosInstance from '@/tools/axiosInstance';
import ReCAPTCHA from 'react-google-recaptcha';




const CekSpptSchema = z.object({
    input: z.string().optional(),
    tahun: z.string().optional(),

});

type CekSpptSchema = z.infer<typeof CekSpptSchema>;

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState < string | null > (null);
    const [isLoading, setIsLoading] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState < string | null > (null);

    const recaptchaRef = useRef < ReCAPTCHA | null > (null); // Define the type for ref
    const setUser = useUser((state) => state.setUser);

    const form = useForm < CekSpptSchema > ({
        resolver: zodResolver(CekSpptSchema),
        defaultValues: {
            tahun: String(new Date().getFullYear()), // Menetapkan default value tahun berjalan
        },
    });

    const onSubmit = async (data: CekSpptSchema) => {
        if (!recaptchaValue) {
            setError("Please complete the reCAPTCHA.");
            return;
        }
        const nop = data.input;
        setIsLoading(true);
        if (!nop) {
            setError("NOP harus diisi.");
            return;
        }
        // cek nop apakah mengandung angka
        if (!/^\d+$/.test(nop)) {
            setError("NOP hanya boleh mengandung angka");
            setIsLoading(false);
            return;
        }
        if (nop.length !== 18) {
            setError("NOP hanya boleh mengandung 18 angka");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axiosInstance.get(`/sppt/${nop}`);

            if (response.status === 200) {
                setError(null);
                const sppt = response.data;
                if (sppt) {
                    const pdfWindow = window.open("", "_blank");
                    if (pdfWindow) {
                        pdfWindow.document.write(`
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <title>SPPT PDF Viewer</title>
                                <style>
                                    body, html {
                                        margin: 0;
                                        padding: 0;
                                        height: 100%;
                                        overflow: hidden;
                                    }
                                    iframe {
                                        width: 100%;
                                        height: 100%;
                                        border: none;
                                    }
                                </style>
                            </head>
                            <body>
                                <iframe src="data:application/pdf;base64,${sppt}" allowfullscreen></iframe>
                            </body>
                            </html>
                        `);
                        pdfWindow.document.close();
                        return;
                    }

                } else {
                    setError("NOP tidak ditemukan atau SPPT belum cetak masal");
                }
            }
        } catch (error) {
            setError("NOP tidak ditemukan atau SPPT belum cetak masal");
        } finally {
            setIsLoading(false);
            recaptchaRef?.current?.reset();
            setRecaptchaValue(null);
        }
    };

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
        setError(null);
    };

    return (
        <div className="flex items-center justify-center py-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-6xl">
                    <Card className="w-full max-w-6xl">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Cek SPPT PBB-P2</CardTitle>
                            <CardDescription className='text-center'>
                                Masukan NOP untuk melihat SPPT
                            </CardDescription>
                            {error && <div className="text-red-500">{error}</div>}
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <FormField
                                control={form.control}
                                name="input"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>NOP</FormLabel>
                                        <FormControl>
                                            <InputOTP maxLength={18} {...field}>
                                                <InputOTPGroup className='-mr-2' >
                                                    <InputOTPSlot index={0} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={1} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={2} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={3} className='w-[18px] md:w-[40px] ' />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup className='-ml-2 -mr-2'>
                                                    <InputOTPSlot index={4} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={5} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={6} className='w-[18px] md:w-[40px] ' />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup className='-ml-2 -mr-2'>
                                                    <InputOTPSlot index={7} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={8} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={9} className='w-[18px] md:w-[40px] ' />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup className='-ml-2 -mr-2'>
                                                    <InputOTPSlot index={10} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={11} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={12} className='w-[18px] md:w-[40px] ' />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup className='-ml-2 -mr-2'>
                                                    <InputOTPSlot index={13} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={14} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={15} className='w-[18px] md:w-[40px] ' />
                                                    <InputOTPSlot index={16} className='w-[18px] md:w-[40px] ' />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup className='-ml-2 -mr-2'>
                                                    <InputOTPSlot index={17} className='w-[18px] md:w-[40px] ' />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                            Pastikan NOP di input dengan benar
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-4">
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                    ref={recaptchaRef}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Cek SPPT"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
