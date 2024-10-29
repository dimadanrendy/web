// "use client";
// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { getCroppedImg } from '@/helper/cropImageHelper'; // Named import
// import Image from 'next/image';

// interface ImageCropperProps {
//     onCropComplete: (croppedImage) => void; // Tipe untuk prop
// }

// const ImageCropperWithShadcnModal: React.FC<ImageCropperProps> = ({ onCropComplete }) => {
//     const [imageSrc, setImageSrc] = useState < string | null > (null);
//     const [crop, setCrop] = useState({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);
//     const [croppedArea, setCroppedArea] = useState(null);
//     const [croppedImageUrl, setCroppedImageUrl] = useState < string | null > (null); // State untuk hasil crop
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const onCropChange = (crop) => setCrop(crop);
//     const onZoomChange = (zoom) => setZoom(zoom);

//     const onCropCompleteHandler = useCallback((croppedAreaPercentage, croppedAreaPixels) => {
//         setCroppedArea(croppedAreaPixels);
//     }, []);

//     const showCroppedImage = useCallback(async () => {
//         try {
//             const croppedImage = await getCroppedImg(imageSrc, croppedArea);

//             // Mengubah blob hasil crop menjadi URL untuk ditampilkan di preview
//             const croppedImageUrl = URL.createObjectURL(croppedImage);
//             setCroppedImageUrl(croppedImageUrl);

//             // Berikan hasil crop ke fungsi onCropComplete jika diperlukan
//             onCropComplete(croppedImage);

//             // Tutup modal setelah crop selesai
//             setIsModalOpen(false);
//         } catch (e) {
//             console.error(e);
//         }
//     }, [croppedArea, imageSrc, onCropComplete]);

//     const onFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setImageSrc(reader.result as string);
//                 setIsModalOpen(true); // Open modal after selecting image
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div>
//             <input type="file" accept="image/*" onChange={onFileChange} />

//             {/* Preview gambar yang telah di-crop */}
//             {croppedImageUrl && (
//                 <div className="mt-4">
//                     <h4>Preview Gambar Ter-crop:</h4>
//                     <Image src={croppedImageUrl} alt="Cropped Image" width={200} height={200} className="rounded-md shadow" />

//                     {/* Tombol untuk edit crop */}
//                     <button
//                         type="button"
//                         className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600"
//                         onClick={() => setIsModalOpen(true)} // Buka modal untuk edit
//                     >
//                         Edit Crop
//                     </button>
//                 </div>
//             )}

//             {/* Modal untuk crop */}
//             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//                 <DialogTrigger asChild>
//                     {/* Trigger untuk membuka modal */}
//                 </DialogTrigger>

//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Crop Gambar</DialogTitle>
//                         <DialogDescription>Crop gambar dengan rasio 3x4 sebelum mengupload.</DialogDescription>
//                     </DialogHeader>

//                     {imageSrc && (
//                         <div className="relative w-full h-64 mt-4">
//                             <Cropper
//                                 image={imageSrc}
//                                 crop={crop}
//                                 zoom={zoom}
//                                 aspect={3 / 4}  // Rasio 3x4
//                                 onCropChange={onCropChange}
//                                 onZoomChange={onZoomChange}
//                                 onCropComplete={onCropCompleteHandler}
//                             />
//                         </div>
//                     )}

//                     <DialogFooter>
//                         <button
//                             type="button"
//                             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                             onClick={showCroppedImage}
//                         >
//                             Crop & Simpan
//                         </button>
//                         <button
//                             type="button"
//                             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
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
