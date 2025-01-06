// "use client";
// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { getCroppedImg } from '@/helper/cropImageHelper';
// import Image from 'next/image';
// import { ScrollArea } from '@/components/ui/scroll-area';

// interface ImageCropperProps {
//     onCropComplete?: (croppedImage: Blob | null) => void; // Optional with default handler
// }

// const ImageCropperWithShadcnModal: React.FC<ImageCropperProps> = ({ onCropComplete = () => { } }) => {
//     const [imageSrc, setImageSrc] = useState < string | null > (null);
//     const [crop, setCrop] = useState < { x: number; y: number } > ({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState < number > (1);
//     const [croppedArea, setCroppedArea] = useState < { width: number; height: number; x: number; y: number } | null > (null);
//     const [croppedImageUrl, setCroppedImageUrl] = useState < string | null > (null);
//     const [isModalOpen, setIsModalOpen] = useState < boolean > (false);

//     const onCropChange = (crop: { x: number; y: number }) => setCrop(crop);
//     const onZoomChange = (zoom: number) => setZoom(zoom);

//     const onCropCompleteHandler = useCallback((croppedAreaPercentage: any, croppedAreaPixels: any) => {
//         setCroppedArea(croppedAreaPixels);
//     }, []);

//     const showCroppedImage = useCallback(async () => {
//         if (!imageSrc || !croppedArea) return;

//         try {
//             const croppedImage = await getCroppedImg(imageSrc, croppedArea);

//             if (croppedImage) {
//                 const croppedImageUrl = URL.createObjectURL(croppedImage);
//                 setCroppedImageUrl(croppedImageUrl);
//                 if (typeof onCropComplete === 'function') {
//                     onCropComplete(croppedImage);
//                 } else {
//                     console.error('onCropComplete is not a function');
//                 }
//                 setIsModalOpen(false);
//             }
//         } catch (e) {
//             console.error(e);
//         }
//     }, [croppedArea, imageSrc, onCropComplete]);

//     const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setImageSrc(reader.result as string);
//                 setIsModalOpen(true);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             alert('Silakan pilih file gambar yang valid.');
//         }
//     };

//     return (
//         <div>
//             <input type="file" accept="image/*" onChange={onFileChange} />

//             {croppedImageUrl && (
//                 <div className="mt-4">
//                     <h4>Preview Gambar Ter-crop:</h4>
//                     <Image src={croppedImageUrl} alt="Cropped Image" width={200} height={200} className="rounded-md shadow" />
//                     <button
//                         type="button"
//                         className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600"
//                         onClick={() => setIsModalOpen(true)}
//                     >
//                         Edit Crop
//                     </button>
//                 </div>
//             )}

//             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//                 <DialogContent className="flex flex-col w-screen h-screen max-w-full max-h-full">
//                     <DialogHeader>
//                         <DialogTitle>Crop Gambar</DialogTitle>
//                         <DialogDescription>Crop gambar dengan rasio 16x9 sebelum mengupload.</DialogDescription>
//                     </DialogHeader>

//                     {/* ScrollArea for cropper content */}
//                     <ScrollArea className="flex-1 w-full h-[70vh] overflow-auto">
//                         {imageSrc && (
//                             <div className="relative w-full h-[80vh]">
//                                 <Cropper
//                                     image={imageSrc}
//                                     crop={crop}
//                                     zoom={zoom}
//                                     aspect={16 / 9}
//                                     onCropChange={onCropChange}
//                                     onZoomChange={onZoomChange}
//                                     onCropComplete={onCropCompleteHandler}
//                                 />
//                             </div>
//                         )}
//                     </ScrollArea>

//                     {/* Footer */}
//                     <DialogFooter className="flex justify-end space-x-2 mt-4">
//                         <button
//                             type="button"
//                             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                             onClick={showCroppedImage}
//                         >
//                             Crop & Simpan
//                         </button>
//                         <button
//                             type="button"
//                             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//                             onClick={() => setIsModalOpen(false)}
//                         >
//                             Batal
//                         </button>
//                     </DialogFooter>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// export default ImageCropperWithShadcnModal;



import React from 'react'

export default function pageCropt() {
    return (
        <div>
            crop
        </div>
    )
}
