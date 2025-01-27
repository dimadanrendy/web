// "use client";
// import { useState, useRef } from "react";

// export default function FullscreenExample() {
//     const [isFullscreen, setIsFullscreen] = useState(false);
//     const containerRef = useRef < HTMLDivElement > (null);

//     const toggleFullscreen = () => {
//         const element = containerRef.current;

//         if (!document.fullscreenElement && element) {
//             // Masuk ke mode fullscreen
//             element.requestFullscreen().then(() => {
//                 setIsFullscreen(true);
//             }).catch((err) => {
//                 console.error("Gagal masuk ke mode fullscreen:", err);
//             });
//         } else if (document.fullscreenElement) {
//             // Keluar dari mode fullscreen
//             document.exitFullscreen().then(() => {
//                 setIsFullscreen(false);
//             }).catch((err) => {
//                 console.error("Gagal keluar dari mode fullscreen:", err);
//             });
//         }
//     };

//     return (
//         <div ref={containerRef} className="flex items-center justify-center h-screen bg-gray-900 text-white">
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold mb-4">Fullscreen Example</h1>
//                 <button
//                     onClick={toggleFullscreen}
//                     className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition"
//                 >
//                     {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
//                 </button>
//             </div>
//         </div>
//     );
// }


import React from 'react'

export default function page() {
    return (
        <div>

        </div>
    )
}
