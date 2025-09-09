import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

// Images
import img1 from "/season1.jpg";
import img2 from "/season 2.jpg";
import img3 from "/season3.png";
import img4 from "/Picture11.jpg";

export default function MultiCarousel() {
  const slides = [
    { img: img1, text: "Car 1" },
    { img: img2, text: "Car 2" },
    { img: img3, text: "Car 3" },
    { img: img4, text: "Car 4" },
  ];

  return (
  <Swiper
  slidesPerView={1}      // default for mobile
  spaceBetween={0}       // no gap on mobile
  loop={true}
  autoplay={{ delay: 2000 }}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}
  breakpoints={{
    640: { slidesPerView: 1, spaceBetween: 0 },   // mobile
    768: { slidesPerView: 2, spaceBetween: 10 },  // tablet/iPad
    1024: { slidesPerView: 3, spaceBetween: 20 }, // desktop
  }}
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <img
        src={slide.img}
        alt={slide.text}
        className="slide-img"
        style={{
          width: "100%",
          height: "100%",       // fill slide height
          objectFit: "contain", // keep full image visible
        }}
      />
    </SwiperSlide>
  ))}
</Swiper>


  );
}
