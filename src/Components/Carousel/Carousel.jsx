import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Images
import slide_image_1 from "../../assets/Boy.jpg";
import slide_image_2 from "../../assets/Boy.jpg";
import slide_image_3 from "../../assets/Boy.jpg";
import slide_image_4 from "../../assets/Boy.jpg";
import slide_image_5 from "../../assets/Boy.jpg";
import slide_image_6 from "../../assets/Boy.jpg";
import slide_image_7 from "../../assets/Boy.jpg";
import slide_image_8 from "../../assets/Boy.jpg";
// import slide_image_1 from "../../assets/img_1.jpg";
// import slide_image_2 from "../../assets/img_2.jpg";
// import slide_image_3 from "../../assets/img_3.jpg";
// import slide_image_4 from "../../assets/img_4.jpg";
// import slide_image_5 from "../../assets/img_5.jpg";
// import slide_image_6 from "../../assets/img_6.jpg";
// import slide_image_7 from "../../assets/img_7.jpg";
// import slide_image_8 from "../../assets/img_8.jpg";

function App() {
  const swiperRef = useRef(null);

  const slidesData = [
    { img: slide_image_1, text: "Slide 1" ,dis: "fsbvbddkdd vnkdnvjdbjd"},
    { img: slide_image_2, text: "Slide 2" ,dis: "fsbvbddkdd vnkdnvjdbjd"},
    { img: slide_image_3, text: "Slide 3" ,dis: "fsbvbddkd dvnkdnvjdbjd"},
    { img: slide_image_4, text: "Slide 4" ,dis: "fsbvbddkdd  vnkdnvjdbjd"},
    { img: slide_image_5, text: "Slide 5" ,dis: "fsbvbd dkddvnkdnvj dbjd"},
    { img: slide_image_6, text: "Slide 6" ,dis: "fsbv bddkddvn kdnvjdbjd"},
    { img: slide_image_7, text: "Slide 7" ,dis: "fsbvbd dkddvnkdnvjdbjd"},
    { img: slide_image_8, text: "Slide 8" ,dis: "fsbvbd dkddvnk dnvjdbjd"},
  ];

  const slides = [...slidesData, ...slidesData]; 

  return (
    <div className="carce mt-[2%] mb-[10%]">
      <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={2}        
  spaceBetween={30}        
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  speed={800}
  breakpoints={{
    600: { slidesPerView: 2, spaceBetween: 30 }, 
    1024: { slidesPerView: 4, spaceBetween: 30 } 
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
  className="swiper_container"
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>

        {slides.map((slide, index) => (
          <SwiperSlide
  key={index}
  className="w-[500px] h-[300px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[400px]"
  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay.start()}
>

            <div className="relative w-full h-full group overflow-hidden rounded-xl">
              <img
                src={slide.img}
                alt={`slide_${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-xl font-semibold text-white mb-3">
                  {slide.text}
                </div>
                
                <div className="text-xl tracking-wide text-[0.9rem] opacity-70 mb-3">
  {slide.dis}
</div>


                
              
             <a
  href="https://www.linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-3 right-3 bg-red-600 text-white px-3 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
      2.761 2.239 5 5 5h14c2.762 0 
      5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
      19h-3v-10h3v10zm-1.5-11.268c-.966 
      0-1.75-.79-1.75-1.764s.784-1.764 
      1.75-1.764 1.75.79 
      1.75 1.764-.784 1.764-1.75 
      1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.062-1.867-3.062-1.868 
      0-2.155 1.46-2.155 2.969v5.697h-3v-10h2.879v1.367h.041c.401-.761 
      1.379-1.562 2.839-1.562 3.037 0 
      3.604 2.001 3.604 4.604v5.591z" />
  </svg>
  <span className="hidden sm:inline">LinkedIn</span>
</a>

    </div>
            </div>
          </SwiperSlide>
        ))}
      
      </Swiper>
    </div>
  );
}

export default App;