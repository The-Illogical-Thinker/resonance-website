import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "./Reev2.css";
import Footer from "../Footer/Footer";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Reev2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sections data
  const sections = [
    {
      title: "About SAEIndia Reev",
      text: (
        <>
          Globally we are witnessing a technology shift in Automotive Propulsion towards electrification and Students in the Engineering community have to be the front runners in this change. SAEINDIA Bangalore has initiated REEV (Range Extended Electric Vehicle) in the 4 wheeler Urban Mobility space.

REEV is a competition that has primary focus on range and fuel efficiency. The competition is going to drive the new age technologies in automotive industry, hybridization, light weighting, optimization, range extension, fuel awareness etc.
        </>
      ),
      img: "second image.jpg",
    },
  ];

  // Carousel slides
  const slides = [
    { img: "/3 image.jpg", text: "Car 1" },
    { img: "/2 image.jpg", text: "Car 2" },
    { img: "/second image.jpg", text: "Car 3" },
    { img: "/bg image.png", text: "Car 4" },
  ];

  return (
    <main className="w-full bg-[#101010] min-h-screen overflow-y-scroll pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
      <div className="reev-container">
        <div className="reev-sections">
        {sections.map((section, index) => (
          <Section
            key={section.title}
            title={section.title}
            text={section.text}
            img={section.img}
            index={index}
            isMobile={isMobile}
          />
        ))}

        {/* Carousel Inline Code */}
<div className="carousel-container">
  <Swiper
    slidesPerView={1}           // default for mobile
    spaceBetween={0}            // no gap on mobile
    loop={true}
    autoplay={{ delay: 2000 }}
    pagination={{ clickable: true }}
    modules={[Pagination, Autoplay]}
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 0 },   // mobile
      768: { slidesPerView: 2, spaceBetween: 10 },  // tablet/iPad
      1024: { slidesPerView: 3, spaceBetween: 20 }, // desktop
    }}
    style={{ padding: "20px 0" }}
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img
          src={slide.img}
          alt={slide.text}
          className="slide-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",  // ensures full image is visible
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </div>
      </div>
      <Footer />
    </main>
  );
}

// Section Component
function Section({ title, text, img, index, isMobile }) {
  const isEven = index % 2 === 0;
  const sectionRef = useRef(null);

  return (
    <motion.div
      ref={sectionRef}
      className="section-container"
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3, margin: "-100px" }}
    >
      <motion.div
        className="section-inner"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div
          className={`section-flex ${
            isEven ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Image */}
          <motion.div
            className="section-image-wrapper"
            initial={{
              opacity: isMobile ? 1 : 0,
              x: isMobile ? 0 : isEven ? -100 : 100,
              scale: isMobile ? 1 : 0.9,
            }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            <div className="section-image-overlay">
              <motion.img
                src={img}
                alt={title}
                className="section-image"
                variants={{
                  rest: {
                    filter: isMobile
                      ? "brightness(100%)"
                      : "brightness(50%)",
                    scale: 1,
                  },
                  hover: { filter: "brightness(120%)", scale: 1.05 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="section-text"
            initial={{
              opacity: isMobile ? 1 : 0,
              x: isMobile ? 0 : isEven ? 100 : -100,
              y: isMobile ? 0 : 30,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            <h2 className="section-title">
              {title}
              <motion.div
                className="section-title-underline"
                variants={{
                  rest: { opacity: isMobile ? 1 : 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </h2>
            <div className="section-text-content">{text}</div>
          </motion.div>
        </div>
        
      </motion.div>
    </motion.div>
  );
}
