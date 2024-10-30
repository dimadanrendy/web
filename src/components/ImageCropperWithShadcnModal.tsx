"use client";
import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { getCroppedImg } from '@/helper/cropImageHelper'; // Pastikan ini adalah named import
import Image from 'next/image';

interface ImageCropperProps {
    onCropComplete: (croppedImage: any) => void; // Tipe prop
}

const ImageCropperWithShadcnModal: React.FC<ImageCropperProps> = ({ onCropComplete }) => {
    const [imageSrc, setImageSrc] = useState < string | null > (null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState < any > (null); // Ubah menjadi any jika perlu
    const [croppedImageUrl, setCroppedImageUrl] = useState < string | null > (null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onCropChange = (crop: any) => setCrop(crop);
    const onZoomChange = (zoom: number) => setZoom(zoom);

    const onCropCompleteHandler = useCallback((croppedAreaPercentage: any, croppedAreaPixels: any) => {
        setCroppedArea(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(imageSrc, croppedArea);
            const croppedImageUrl = URL.createObjectURL(croppedImage);
            setCroppedImageUrl(croppedImageUrl);

            // Panggil fungsi onCropComplete yang diterima dari prop
            onCropComplete(croppedImage);
            setIsModalOpen(false); // Tutup modal setelah crop
        } catch (e) {
            console.error(e);
        }
    }, [croppedArea, imageSrc, onCropComplete]);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string);
                setIsModalOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={onFileChange} />

            {croppedImageUrl && (
                <div className="mt-4">
                    <h4>Preview Gambar Ter-crop:</h4>
                    <Image src={croppedImageUrl} alt="Cropped Image" width={200} height={200} className="rounded-md shadow" />
                    <button
                        type="button"
                        className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Edit Crop
                    </button>
                </div>
            )}

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                    {/* Trigger untuk membuka modal */}
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Crop Gambar</DialogTitle>
                        <DialogDescription>Crop gambar dengan rasio 3x4 sebelum mengupload.</DialogDescription>
                    </DialogHeader>

                    {imageSrc && (
                        <div className="relative w-full h-64 mt-4">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={3 / 4} // Rasio 3x4
                                onCropChange={onCropChange}
                                onZoomChange={onZoomChange}
                                onCropComplete={onCropCompleteHandler}
                            />
                        </div>
                    )}

                    <DialogFooter>
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={showCroppedImage}
                        >
                            Crop & Simpan
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Batal
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ImageCropperWithShadcnModal;
