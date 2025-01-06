'use client';

import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import {
    slider,
    beritafoto,
    beritavideo,
    kegiatan,
    sekilasinfo,
    banner,
    seputarinformasi,
} from '@/lib/image';

const beritaData = [
    {
        id: 1,
        title: 'Tampilan Slider Berita',
        image: slider,
        link: '/management-berita/all/slider',
    },
    {
        id: 2,
        title: 'Tampilan Berita Foto',
        image: beritafoto,
        link: '/management-berita/all/berita-foto',
    },
    {
        id: 3,
        title: 'Tampilan Berita Video',
        image: beritavideo,
        link: '/management-berita/all/berita-video',
    },
    {
        id: 4,
        title: 'Tampilan Kegiatan',
        image: kegiatan,
        link: '/management-berita/all/kegiatan',
    },
    {
        id: 5,
        title: 'Sekilas Info',
        image: sekilasinfo,
        link: '/management-berita/all/sekilas-info',
    },
    {
        id: 6,
        title: 'Tampilan Banner',
        image: banner,
        link: '/management-berita/all/banner',
    },
    {
        id: 7,
        title: 'Seputar Informasi',
        image: seputarinformasi,
        link: '/management-berita/all/seputar-informasi',
    },
];

export default function BeritaPage() {
    const [selectedImage, setSelectedImage] = useState < string | null > (null);

    const handleOpen = (image: string) => setSelectedImage(image);
    const handleClose = () => setSelectedImage(null);

    return (
        <div>
            <section className="w-full">
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-2 text-sm">
                    {beritaData.map((berita) => (
                        <div key={berita.id} className="w-[450px] text-center mb-4 border border-gray-300 rounded-md">
                            <AspectRatio ratio={16 / 9} className="relative group">
                                <Image
                                    src={berita.image}
                                    alt={berita.title}
                                    className="rounded-md object-cover group-hover:opacity-50 transition duration-300"
                                />
                                {/* Hover Preview */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <Button
                                        variant="secondary"
                                        className="bg-black bg-opacity-50 text-white"
                                        onClick={() => handleOpen(berita.image.src)}
                                    >
                                        Preview
                                    </Button>
                                </div>
                            </AspectRatio>
                            {/* Judul dan Tombol */}
                            <h1 className="mt-2">{berita.title}</h1>
                            <Link href={berita.link}>
                                <Button className="w-full h-6 text-white mt-2">
                                    Lihat Detail<ChevronRight className='ml-2' />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popup Modal */}
            {selectedImage && (

                <Dialog open={true} onOpenChange={handleClose} >
                    {/* <DialogOverlay className="bg-black bg-opacity-50" /> */}
                    <DialogContent className="w-full h-full max-w-none max-h-none">
                        <div className="w-full h-full bg-white rounded-md shadow-lg p-4">
                            <Image
                                src={selectedImage}
                                alt="Preview Image"
                                className="rounded-md object-contain w-full h-full "
                                width={700}
                                height={400}
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
