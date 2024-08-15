import Image from "next/image";
import { logoFull } from "@/lib/image";

export default function PageLanding() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-contain bg-no-repeat">
            <Image
              className="animate-pulse w-full self-start mb-2"
              src={logoFull}
              alt="logo"
              width={300}
              height={300}
              quality={100}
            />
            <h1 className="text-center text-4xl font-bold bg-gradie bg-gradient-to-r from-sky-500 via-rose-500 to-yellow-600 bg-clip-text text-transparent animate-bounce">
              B A K E U D A P G K
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
