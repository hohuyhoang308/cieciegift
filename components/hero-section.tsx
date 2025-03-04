"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const NUMBER_OF_IMAGES = 9;
const producImages = Array.from({ length: NUMBER_OF_IMAGES }, (_, i) => `/images/producs/produc_${i + 1}.png`);

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
              sizes="1300vw"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">GIẢI PHÁP QUÀ TẶNG DOANH NGHIỆP</h1>
            <p className="text-xl text-white/90">MẪU MÃ ĐA DẠNG, GIÁ CẢ HỢP LÝ, CHẤT LƯỢNG CAO</p>
            <p className="text-lg text-white/80">CHỈ CẦN CHO NGÂN SÁCH, ĐỐI TƯỢNG CẦN TẶNG</p>
            <h2 className="text-2xl font-bold text-secondary">CHÚNG TÔI SẼ ĐƯA RA GIẢI PHÁP PHÙ HỢP</h2>
          </div>

          <div className="relative">
            <div ref={carouselRef} className="flex items-center overflow-x-hidden space-x-4 product-showcase">
              {shuffledImages.concat(shuffledImages).map((imagePath, index) => ( // Duplicate items for continuous effect
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