"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// import design1 from "../../../../";
// import design2 from "@/../public/branding2.webp";
// import design3 from "@/../public/branding3.webp";
// import design4 from "@/../public/branding4.webp";
// import design5 from "@/../public/branding5.webp";
// import design6 from "@/../public/branding6.webp";


export function DesignCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay:2000, stopOnInteraction: false })
  );

  // List of images from public folder
  const designImages = [
    "/branding1webp.webp",
    "/branding2.webp",
    "/branding3.webp",
    "/branding4.webp",
    "/branding5.webp",
    "/branding6.webp",
  ]
   

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="horizontal"
      plugins={[autoplay.current]}
      className="w-full" // adjust width for your design
    >
      <CarouselContent className="w-80 h-[250px]">
        {designImages.map((src, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="shadow-lg rounded-xl overflow-hidden">
                <CardContent className="flex items-center justify-center p-0">
                  <Image
                    src={src}
                    alt={`Design ${index + 1}`}
                    width={400}
                    height={500}
                    className="object-cover w-full h-[200px] hover:scale-105 transition-transform duration-300"
                    priority={index < 2} // preloads first 2 images for performance
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
