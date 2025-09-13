import React, { useState, useEffect } from "react";

const TailwindSlideshow = () => {
  const images = [
    "/banner 1.jpg",
    "/banner 2.png",
    "/banner 4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full h-full opacity-40 flex-shrink-0 object-cover sm:object-cover object-center"
          />
        ))}
      </div>

      {/* Navigation Buttons - Hidden on mobile for better UX */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white w-14 h-14 items-center justify-center text-3xl rounded-full hidden sm:flex hover:bg-black/70 transition-colors duration-300"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white w-14 h-14 items-center justify-center text-3xl rounded-full hidden sm:flex hover:bg-black/70 transition-colors duration-300"
      >
        ›
      </button>
      
      {/* Mobile-friendly dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === current ? 'bg-red-600' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TailwindSlideshow;
