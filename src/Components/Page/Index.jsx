import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
import Carousel from "../../Components/Carousel/Carousel";

import Img from "../../assets/why.jpg";
import go from "../../assets/goc.jpg";
import ev from "../../assets/eve.jpg";


import v1 from "../../assets/v1.jpg";
import v2 from "../../assets/v2.jpg";
import v3 from "../../assets/v3.jpg";



// Video
import videoFile from "../../assets/video.mp4";

// Assets
import slideImg1 from "../../assets/slide-icon-1.svg";
import slideImg2 from "../../assets/slide-icon-2.svg";
import slideImg3 from "../../assets/slide-icon-3.svg";

import slideImg4 from "../../assets/slide-icon-4.svg";
import slideImg5 from "../../assets/slide-icon-5.svg";

// Splide imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";



export default function Index() {
  const heroRef = useRef(null);
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeroTextVisible(true);
    }, 200);
  }, []);





  // sponsors

  


  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <motion.div
          className="absolute text-center text-white z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: heroTextVisible ? 1 : 0, x: heroTextVisible ? 0 : -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-bold italic text-red-600 font-mono mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            REEV
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-7xl text-white font-mono mb-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            SAEINDIA
          </motion.h2>
          <motion.a
            href="#about"
            className="text-red-600 font-mono text-lg hover:text-white transition-colors duration-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll Down
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Spacer */}
      <div id="about" className="h-20"></div>

      {/* About Section */}
      <motion.section 
        className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover="hovered"
      >
          {/* Image Section */}
        <motion.div
          className="flex-1 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500"></div>
            <img
              alt="About REEV"
            className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              src={Img}
            />
          {/* Hover underline effect */}
          
        </motion.div>

          {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block">
              About REEV
            <motion.div
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
            initial={{ width: 0 }}
            variants={{
              rest: { width: 0 },
              hovered: { width: "100%" },
            }}
            transition={{ duration: 0.3 }}
          />
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300 font-light max-w-2xl">
              "Globally we are witnessing a technology shift in the automotive
              industry from conventional fuel-powered vehicles to alternative
              fuel-powered vehicles. With the Indian government's initiative
              towards faster adoption of EVs through FAME-II policy, we are
              aligned to take this opportunity to develop indigenous solutions
              for the Indian market."
            </p>
        </motion.div>
      </motion.section>

      {/* Why Join Us Section */}
      <motion.section 
        className="py-20 bg-black"
            initial="rest"
            whileInView="rest"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover="hovered"
          >
            <div 
          className="text-center mb-16 group cursor-pointer"
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Why Join Us ?
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                rest: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
          </h2>
        </div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-[3rem] px-6 lg:px-[17rem]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {[
            {
              title: "Innovation",
              description: "Work on cutting-edge electric vehicle technology and sustainable transportation solutions."
            },
            {
              title: "Collaboration", 
              description: "Join a passionate team of engineers and developers working towards a greener future."
            },
            {
              title: "Growth",
              description: "Develop your skills in automotive technology, motorsports, and sustainable engineering."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-red-600/20 group cursor-pointer grid h-[20rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
              }}
            >
              <h4 className="text-2xl font-bold text-red-600 mb-6 font-mono justify-self-center mt-[3rem]">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
              {/* Hover underline effect */}
              <motion.div
                className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-4"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          </motion.div>
      </motion.section>
      {/* Carousel Section */}
      <motion.section 
        className="py-20 bg-black"
        whileInView="rest"
        initial="rest"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover="hovered"
      >
        <div 
          className="text-center mb-16 group cursor-pointer"
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            OUR FLEET
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                rest: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
        </h2>
        </div>
        <div className="py-10">
        <Carousel
          slides={[slideImg1, slideImg2, slideImg3]}
          autoplay={true}
          interval={3000}
        />
        </div>
      </motion.section>

      {/* Fleet Showcase Section */}
      <motion.section 
        className="bg-black py-20"
        whileInView="rest"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover="hovered"
        initial="rest"  
      >
        <div className="w-full ">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 group cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
                Our Fleet
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
                initial={{ width: 0 }}
                variants={{
                  rest: { width: 0 },
                  hovered: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </h2>
          </motion.div>

          {/* Fleet Grid */}
          <div className="grid lg:grid-cols-2">
            {/* REEV Racer */}
            <motion.div 
              className="group cursor-pointer col-span-1 h-[40rem]"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative overflow-hidden bg-black h-[40rem]">
                <motion.img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="REEV Racer"
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-light text-white mb-3 font-mono tracking-wide group-hover:text-red-600 transition-colors duration-300">
                      <span className="text-red-600 font-black italic">REEV</span> Racer
                    </h3>
                    <p className="text-gray-300 text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      High-Performance Electric Racing Vehicle
                    </p>
                    <div className="flex items-center text-white text-sm font-light group-hover:text-red-600 transition-colors duration-300">
                      <span>Discover</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                </div>
              </div>
            </motion.div>

            {/* REEV GoCar */}
            <motion.div 
              className="group cursor-pointer col-span-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover="hovered"
            >
              <div className="relative overflow-hidden bg-black h-[40rem]">
                <motion.img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="REEV GoCar"
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-light text-white mb-3 font-mono tracking-wide group-hover:text-red-600 transition-colors duration-300">
                      <span className="text-red-600 font-black italic">REEV</span> GoCar
                    </h3>
                    <p className="text-gray-300 text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Urban Electric Mobility Solution
                    </p>
                    <div className="flex items-center text-white text-sm font-light group-hover:text-red-600 transition-colors duration-300">
                      <span>Discover</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sponsors Section */}
      <motion.section 
        className="py-20 bg-black"
        whileInView="rest"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover="hovered"
        initial="rest"  
      >
        <div 
          className="text-center mb-16 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Sponsors
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                rest: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
        </h2>
        </div>

        {/* Animated Marquee */}
        <motion.div 
          className="relative w-full overflow-hidden py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex gap-32 whitespace-nowrap"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[
              { img: slideImg1, title: "Connectivity", desc: "Collaborate with others" },
              { img: slideImg2, title: "Graphic Designing", desc: "To create effectiveness" },
              { img: slideImg3, title: "Readability", desc: "Proper spacing & font" },
              { img: slideImg4, title: "Professional Branding", desc: "Consistent tone & voice" },
              { img: slideImg5, title: "User-friendliness", desc: "Quick to get into" },
              { img: slideImg1, title: "Connectivity", desc: "Collaborate with others" },
              { img: slideImg2, title: "Graphic Designing", desc: "To create effectiveness" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.img} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl font-mono text-red-600">
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
