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
    <div className="relative w-screen h-screen mx-auto overflow-hidden">
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
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white w-14 h-14 flex items-center justify-center text-3xl rounded-full"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white w-14 h-14 flex items-center justify-center text-3xl rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default TailwindSlideshow;
