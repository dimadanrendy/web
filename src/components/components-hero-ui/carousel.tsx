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

export default function PageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-7xl mx-auto sm:p-2 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <Link href={"/"}>
              <Card>
                <CardContent className="flex bg-slate-500 aspect-[21/9] items-center justify-center">
                  <Image
                    src={fotoBakeuda}
                    alt="placeholder"
                    quality={100}
                    fill
                  />
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 " />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
