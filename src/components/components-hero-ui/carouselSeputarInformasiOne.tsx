"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { fotoBakeuda } from "@/lib/image";
import { useQuery } from "@tanstack/react-query";
import { getBeritaByTipe } from "@/features/presentesion/berita/useGetManagementBerita";
import { Skeleton } from "../ui/skleton";

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

export default function PageCarouselSeputarInformasiOne() {
    const [pageSlider, setPageSlider] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(3);
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
    );

    const { data: DataBeritaSlider, isLoading: LoadingBeritaSlider } = useQuery({
        queryKey: ["berita", "sekilas-info", pageSlider],
        queryFn: async () => {
            return await getBeritaByTipe("sekilas-info", pageSlider, pageSize);
        },
    });

    if (LoadingBeritaSlider) {
        return (
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-7xl mx-auto sm:p-2"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {/* Skeleton Loading Placeholder */}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="relative w-full aspect-video">
                                    <Skeleton className="h-full" />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        );
    }

    if (!DataBeritaSlider?.data || DataBeritaSlider?.data?.length === 0) {
        return (
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-7xl mx-auto sm:p-2"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {/* Skeleton Loading Placeholder ketika tidak ada data */}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="relative w-full aspect-video">
                                    <Skeleton className="h-full" />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        );
    }

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-7xl mx-auto sm:p-2"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent>
                {DataBeritaSlider?.data?.map((item: Berita) => (
                    <CarouselItem key={item.id_photos}>
                        <Link href={item.photoUrl} target="_blank">
                            <Card>
                                <CardContent className="relative w-full aspect-video">
                                    <Image
                                        src={item.photoUrl}
                                        alt={item.file}
                                        fill
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
        </Carousel>
    );
}
