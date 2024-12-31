'use client';
import { useState, useEffect } from "react";

export default function AutoPlayCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://static.yximgs.com/kos/nlav10378/kling-banner/banner-partner-en.jpg",
    "https://static.yximgs.com/kos/nlav10378/kling-banner/banner-dual-challenges.jpg",
    "https://static.yximgs.com/kos/nlav10378/kling-banner/banner-c.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full">
      {/* Carousel Images */}
      <div className="overflow-hidden relative rounded-xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index
                ? "bg-white"
                : "bg-gray-400 opacity-70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
