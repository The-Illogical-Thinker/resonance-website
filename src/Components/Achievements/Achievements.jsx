import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "motion/react";
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";

const Achievements = () => {
  return (
    <div className="bg-black min-h-screen">
      <motion.div
        id="ACHIEVEMENTS"
        className="relative text-center w-full py-20 pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Splide
          options={{
            type: "loop",
            drag: false,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          className="w-full"
          aria-label="Smooth Scrolling Work Slider"
        >
          <SplideSlide>
            <div className="text-6xl md:text-9xl font-bold text-gray-800 font-mono select-none pointer-events-none overflow-hidden opacity-20">
              ACHIEVEMENTS
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-6xl md:text-9xl font-bold text-gray-800 font-mono select-none pointer-events-none overflow-hidden opacity-20">
              ACHIEVEMENTS
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-6xl md:text-9xl font-bold text-gray-800 font-mono select-none pointer-events-none overflow-hidden opacity-20">
              ACHIEVEMENTS
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-6xl md:text-9xl font-bold text-gray-800 font-mono select-none pointer-events-none overflow-hidden opacity-20">
              ACHIEVEMENTS
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="text-6xl md:text-9xl font-bold text-gray-800 font-mono select-none pointer-events-none overflow-hidden opacity-20">
              ACHIEVEMENTS
            </div>
          </SplideSlide>
        </Splide>
      </motion.div>

      <motion.section 
        className="py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <MoviesCarousel autoplay={true} interval={2500} />
      </motion.section>
    </div>
  );
};

export default Achievements;
