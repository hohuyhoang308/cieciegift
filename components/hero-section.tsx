"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const NUMBER_OF_IMAGES = 9;
const producImages = Array.from({ length: NUMBER_OF_IMAGES }, (_, i) => `/images/products/doanhnghiep/product_${i + 1}.png`);

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function HeroSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle images on component mount
    setShuffledImages(shuffleArray([...producImages]));
  }, []);

  useEffect(() => {
    const handleAutoScroll = () => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        let newPosition = scrollPosition + 1;

        if (newPosition > maxScroll) {
          newPosition = 0; // Reset to the start for continuous effect
        }

        carouselRef.current.scrollTo({
          left: newPosition,
          behavior: "auto",
        });

        setScrollPosition(newPosition);
      }
    };

    const intervalId = setInterval(handleAutoScroll, 50);
    return () => clearInterval(intervalId);
  }, [scrollPosition]);

  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="relative min-h-[calc(50vh-3rem)]">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/home.png"
              alt="Gift boxes with red ribbons"
              fill
              className="object-cover object-left"
              priority
              sizes="100vw"
            />
            {/* Thêm lớp overlay tối */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-secondary tracking-wide leading-tight">
              GIẢI PHÁP QUÀ TẶNG<br className="hidden sm:block" /> DOANH NGHIỆP
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium tracking-wide leading-relaxed">
              MẪU MÃ ĐA DẠNG, GIÁ CẢ HỢP LÝ, CHẤT LƯỢNG CAO
            </p>
            
            <div className="h-0.5 w-24 md:w-32 bg-secondary/50 mx-auto"></div>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium tracking-wide">
              CHỈ CẦN CHO NGÂN SÁCH, ĐỐI TƯỢNG CẦN TẶNG
            </p>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary tracking-wide leading-tight">
              CHÚNG TÔI SẼ ĐƯA RA<br className="hidden sm:block" /> GIẢI PHÁP PHÙ HỢP
            </h2>
          </div>

          <div className="relative mt-8">
            <div ref={carouselRef} className="flex items-center overflow-x-hidden space-x-4 product-showcase">
              {shuffledImages.concat(shuffledImages).map((imagePath, index) => (
                <div key={index} className="flex-shrink-0 w-40 flex items-center">
                  <Image
                    src={imagePath || "/placeholder.svg"}
                    alt={`Gift basket ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg transform transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}