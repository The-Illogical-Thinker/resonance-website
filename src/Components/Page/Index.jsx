import React, { useEffect, useRef, useState, Fragment } from "react";
import { GiStumpRegrowth } from "react-icons/gi";
import { BsFillPeopleFill, BsFillLaptopFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { FaTools, FaHandsHelping } from "react-icons/fa";
import { motion } from "motion/react"
import TailwindSlideshow from "./Slideshow";
import Footer from "../../Components/Footer/Footer.jsx";

// Assets
import slideImg1  from "../../assets/Asset_13_img.png";
import slideImg2 from "../../assets/Dynamic_Lazer_img.png";
import slideImg3 from "../../assets/Poweron .png";
import slideImg4 from "../../assets/Rafftar logo.jpg";
import slideImg5 from "../../assets/ansys_img.png";
import slideImg6 from "../../assets/Kapres_Automation_img.png";

// Splide imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Index() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whyJoinRef = useRef(null);
  const fleetRef = useRef(null);
  const reviewsRef = useRef(null);
  const sponsorsRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hovered: {scale: 1}
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);


  return (
    <main className={`w-full bg-[#101010] ${isMobile ? 'min-h-screen' : 'h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'}`}>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        data-section="hero"
        className={`relative w-full flex items-center justify-center bg-[#101010] overflow-hidden ${isMobile ? 'min-h-[80vh] py-8' : 'h-screen snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        initial={!isMobile ? { opacity: 0, y: 30, scale: 0.98 } : false}
        animate={!isMobile ? { opacity: 1, y: 0, scale: 1 } : false}
        transition={!isMobile ? { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } : {}}
      >
        <TailwindSlideshow />

        <motion.div
        className={`absolute text-center text-white z-10 ${isMobile ? 'inset-0 flex flex-col justify-center items-center px-4' : ''}`}
        initial={!isMobile ? { opacity: 0, y: 50, scale: 0.95 } : false}
        animate={!isMobile ? { opacity: 1, y: 0, scale: 1 } : false}
        transition={!isMobile ? { duration: 1.0, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } : {}}
        >
          <motion.h1
            className={`drop-shadow-lg font-bold italic text-red-600 font-mono mb-4 ${isMobile ? 'text-xl text-center leading-tight max-w-sm' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4'}`}
            initial={!isMobile ? { opacity: 0, y: 30 } : false}
            animate={!isMobile ? { opacity: 1, y: 0 } : false}
            transition={!isMobile ? { duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } : {}}
          >
            Resonance Racing REEV and GOKART
          </motion.h1>
          <motion.h2
            className={`drop-shadow-lg text-white font-mono mb-8 ${isMobile ? 'text-sm text-center leading-relaxed max-w-xs' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl px-4'}`}
            initial={!isMobile ? { y: 30 } : false}
            animate={!isMobile ? { y: 0 } : false}
            transition={!isMobile ? { duration: 1.0, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] } : {}}
          >
            Transforming Will Power into Horsepower
          </motion.h2>
          {!isMobile && (
            <motion.a
              href="#about"
              className="text-red-600 font-mono text-lg hover:text-white transition-all duration-300 hover:scale-105"
              initial={{ y: 30 }}
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: [0.34, 1.56, 0.64, 1] },
                initial: { duration: 1.0, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }
              }}
            >
              Scroll Down
            </motion.a>
          )}
        </motion.div>
      </motion.section>

      {/* Spacer - removed to allow proper center snapping */}
      <div id="about" className={`${isMobile ? 'h-8' : 'h-0'}`}></div>

      {/* About Section */}
      {isMobile ? (
        <section
          ref={aboutRef}
          data-section="about"
          className="w-full mt-24 bg-[#101010] flex flex-col items-center justify-center py-8 px-4 gap-4"
        >
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 transition-all duration-500"></div>
            <img
              alt="About REEV"
              className="w-full h-48 rounded-2xl object-cover transition-transform duration-500"
              loading="lazy"
              src="/banner 2.png"
            />
          </div>

          {/* Text Section */}
          <div className="text-center w-full">
            <h2 className="font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block text-2xl">
              About REEV
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
            <p className="leading-relaxed text-gray-300 font-light text-sm px-2">
              "Globally we are witnessing a technology shift in the automotive
              industry from conventional fuel-powered vehicles to alternative
              fuel-powered vehicles. With the Indian government's initiative
              towards faster adoption of EVs through FAME-II policy, we are
              aligned to take this opportunity to develop indigenous solutions
              for the Indian market."
            </p>
          </div>
        </section>
      ) : (
        <motion.section
          ref={aboutRef}
          data-section="about"
          className="w-full bg-[#101010] flex flex-col items-center justify-center min-h-screen lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20 py-12 lg:py-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover="hovered"
        >
          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer flex-1"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              y: -4,
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500"></div>
            <img
              alt="About REEV"
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              src="/banner 2.png"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex-1 lg:text-left text-center"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block text-5xl">
              About REEV
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </h2>
            <motion.p
              className="leading-relaxed text-gray-300 font-light text-lg lg:text-xl max-w-2xl"
              variants={fadeInUp}
            >
              "Globally we are witnessing a technology shift in the automotive
              industry from conventional fuel-powered vehicles to alternative
              fuel-powered vehicles. With the Indian government's initiative
              towards faster adoption of EVs through FAME-II policy, we are
              aligned to take this opportunity to develop indigenous solutions
              for the Indian market."
            </motion.p>
          </motion.div>
        </motion.section>
      )}

      {/* Why Join Us Section */}
      {isMobile ? (
        <section
          ref={whyJoinRef}
          data-section="whyJoin"
          className="w-full bg-[#101010] mt-24 flex flex-col justify-start py-8"
        >
          <div className="text-center group cursor-pointer mb-6">
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl mt-4">
              Why Join Us?
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
          </div>

          <div className="grid gap-4 px-4">
            {[
              {
                title: "Innovation",
                description: "Work on cutting-edge electric vehicle technology and sustainable transportation solutions.",
                symbol: <TbBulbFilled className="size-8 fill-black"/>
              },
              {
                title: "Skill Development",
                description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
                symbol: <FaTools className="size-8 fill-black"/>
              },
              {
                title: "Hands-On Experience",
                description: "Get hands-on experience in automotive technology, motorsports, and sustainable engineering.",
                symbol: <FaHandsHelping className="size-8 fill-black"/>
              },
              {
                title: "Learn New Softwares",
                description: "Learn new softwares and tools to enhance your skills.",
                symbol: <BsFillLaptopFill className="size-8 fill-black"/>
              },
              {
                title: "Collaboration", 
                description: "Join a passionate team of engineers and developers working towards a greener future.",
                symbol: <BsFillPeopleFill className="size-8 fill-black"/>
              },
              {
                title: "Growth",
                description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
                symbol: <GiStumpRegrowth className="size-8 fill-black"/>
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm col-span-1 rounded-lg border border-red-600/20 group cursor-pointer grid h-auto p-4 mb-3 min-h-[14rem]"
              >
                <div className="justify-self-center grid bg-red-500 items-center justify-items-center rounded-full w-16 h-16 mt-4">
                  {item.symbol}
                </div>
                <h4 className="font-bold text-red-600 font-mono justify-self-center text-lg mb-3 mt-3">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <motion.section 
          ref={whyJoinRef}
          data-section="whyJoin"
          className="w-full bg-[#101010] flex flex-col justify-start min-h-screen pt-24 pb-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          whileHover="hovered"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="text-center group cursor-pointer mb-16"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl mt-24">
              Why Join Us?
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          <motion.div 
            className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-[3rem] sm:px-6 lg:px-[17rem]"
            variants={fadeInUp}
          >
          {[
            {
              title: "Innovation",
              description: "Work on cutting-edge electric vehicle technology and sustainable transportation solutions.",
              symbol: <TbBulbFilled className="size-10 fill-black"/>
            },
            {
              title: "Skill Development",
              description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
              symbol: <FaTools className="size-10 fill-black"/>
            },
            {
              title: "Hands-On Experience",
              description: "Get hands-on experience in automotive technology, motorsports, and sustainable engineering.",
              symbol: <FaHandsHelping className="size-10 fill-black"/>
            },
            {
              title: "Learn New Softwares",
              description: "Learn new softwares and tools to enhance your skills.",
              symbol: <BsFillLaptopFill className="size-10 fill-black"/>
            },
            {
              title: "Collaboration", 
              description: "Join a passionate team of engineers and developers working towards a greener future.",
              symbol: <BsFillPeopleFill className="size-10 fill-black"/>
            },
            {
              title: "Growth",
              description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
              symbol: <GiStumpRegrowth className="size-10 fill-black"/>
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm col-span-1 rounded-lg border border-red-600/20 group cursor-pointer grid h-auto p-4 sm:p-6 mb-6 lg:mb-[3rem] min-h-[18rem] sm:h-[20rem] md:h-[25rem]"
              whileHover="hover-card"
              initial="rest"
              animate="rest"
              variants={{
                "hover-card": {
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)",
                  borderColor: "rgba(220, 38, 38, 0.4)",
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                },
                rest: {
                  scale: 1,
                  y: 0,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(220, 38, 38, 0.2)",
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
            >
              <motion.div className="justify-self-center grid bg-red-500 items-center justify-items-center rounded-full w-20 h-20 mt-[1.5rem]"
               variants={{
                rest: {
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                },
                "hover-card": {
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
               }}
              >
                {React.cloneElement(item.symbol, { 
                  className: "size-10 fill-black"
                })}
              </motion.div>
              <h4 className="font-bold text-red-600 font-mono justify-self-center text-2xl mb-6 mt-[1rem]">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
          </motion.div>
        </motion.section>
      )}

      {/* Fleet Showcase Section */}
      {isMobile ? (
        <section
          ref={fleetRef}
          data-section="fleet"
          className="w-full bg-[#101010] mt-24 flex flex-col justify-start py-8"
        >
          <div className="w-full">
            {/* Section Header */}
            <div className="text-center group cursor-pointer mb-6">
              <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl">
                OUR FLEET
                <div
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{
                    background: 'linear-gradient(to right, transparent, red, transparent)'
                  }}
                />
              </h2>
            </div>

            {/* Fleet Grid */}
            <div className="mt-32 grid gap-4 grid-cols-1 px-4">
              {/* REEV Racer */}
              <div className="group cursor-pointer col-span-1 h-[20rem]">
                <div className="relative overflow-hidden bg-[#101010] h-[20rem] rounded-lg">
                  <img 
                    src="PNG_image-removebg-preview.png"
                    alt="REEV Racer"
                    className="w-full h-full object-cover brightness-90 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 text-xl group-hover:text-red-600">
                      <span className="text-red-600 font-black italic">REEV</span> Racer
                    </h3>
                    <p className="text-gray-300 mb-4 transition-opacity duration-500 text-sm opacity-100">
                      High-Performance Electric Racing Vehicle
                    </p>
                    <div className="flex items-center text-white font-light transition-colors duration-300 text-xs group-hover:text-red-600">
                      <span>Discover</span>
                      <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* REEV GoCar */}
              <div className="group cursor-pointer col-span-1 h-[20rem]">
                <div className="relative overflow-hidden bg-[#101010] h-[20rem] rounded-lg">
                  <img 
                    src="/gokart cad 3d.png"
                    alt="REEV GoCar"
                    className="w-full h-full object-cover brightness-90 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 text-xl group-hover:text-red-600">
                      <span className="text-red-600 font-black italic">REEV</span> GoCar
                    </h3>
                    <p className="text-gray-300 mb-4 transition-opacity duration-500 text-sm opacity-100">
                      Urban Electric Mobility Solution
                    </p>
                    <div className="flex items-center text-white font-light transition-colors duration-300 text-xs group-hover:text-red-600">
                      <span>Discover</span>
                      <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <motion.section 
          ref={fleetRef}
          data-section="fleet"
          className="w-full bg-[#101010] flex flex-col justify-start min-h-screen pt-36 pb-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          animate={undefined}
          whileHover="hovered"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full">
            {/* Section Header */}
            <motion.div 
              className="text-center group cursor-pointer mb-16"
              variants={fadeInUp}
            >
              <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl">
                OUR FLEET
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{
                    background: 'linear-gradient(to right, transparent, red, transparent)'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1 }}
                  variants={{
                    visible: { scaleX: 0 },
                    hovered: { scaleX: 1 },
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut"
                  }}
                />
              </h2>
            </motion.div>

            {/* Fleet Grid */}
            <div className="mt-32 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:gap-0">
              {/* REEV Racer */}
              <motion.div 
                className="group cursor-pointer col-span-1 h-[25rem] sm:h-[25rem] lg:h-[30rem]"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden bg-[#101010] h-[25rem] sm:h-[25rem] lg:h-[30rem]">
                  <motion.img 
                    src="PNG_image-removebg-preview.png"
                    alt="REEV Racer"
                    className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 text-4xl group-hover:text-red-600">
                      <span className="text-red-600 font-black italic">REEV</span> Racer
                    </h3>
                    <p className="text-gray-300 mb-4 transition-opacity duration-500 text-base opacity-0 group-hover:opacity-100">
                      High-Performance Electric Racing Vehicle
                    </p>
                    <div className="flex items-center text-white font-light transition-colors duration-300 text-sm group-hover:text-red-600">
                      <span>Discover</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* REEV GoCar */}
              <motion.div 
                className="group cursor-pointer col-span-1 h-[25rem] sm:h-[25rem] lg:h-[30rem]"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden bg-[#101010] h-[25rem] sm:h-[25rem] lg:h-[30rem]">
                  <motion.img 
                    src="/gokart cad 3d.png"
                    alt="REEV GoCar"
                    className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 text-4xl group-hover:text-red-600">
                      <span className="text-red-600 font-black italic">REEV</span> GoCar
                    </h3>
                    <p className="text-gray-300 mb-4 transition-opacity duration-500 text-base opacity-0 group-hover:opacity-100">
                      Urban Electric Mobility Solution
                    </p>
                    <div className="flex items-center text-white font-light transition-colors duration-300 text-sm group-hover:text-red-600">
                      <span>Discover</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Review Section */}
      {isMobile ? (
        <section
          ref={reviewsRef}
          data-section="reviews"
          className="w-full bg-[#101010] mt-24 flex flex-col justify-start py-8"
        >
          <div className="text-center group cursor-pointer mb-6">
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl">
              Reviews
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
          </div>

          {/* Review Carousel */}
          <div className="w-full px-4">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/30',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600',
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              className="review-swiper !pb-12"
            >
              {[
                {
                  name: "Dr. Sarah Johnson",
                  position: "Head of Engineering, Tesla",
                  review: "REEV's innovative approach to electric vehicle technology is truly remarkable. Their commitment to sustainability and performance sets them apart in the industry.",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Michael Chen",
                  position: "Racing Engineer, Formula E",
                  review: "Working with REEV has been an incredible experience. Their attention to detail and passion for electric motorsports is unmatched.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Emily Rodriguez",
                  position: "Automotive Journalist",
                  review: "REEV represents the future of automotive technology. Their vehicles combine cutting-edge innovation with environmental responsibility.",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "Professor David Kim",
                  position: "MIT Energy Systems Lab",
                  review: "The research collaboration with REEV has yielded breakthrough results in battery efficiency and electric motor optimization.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                }
              ].map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="bg-white/10 rounded-xl p-8 border-2 border-red-600/20 hover:border-red-600 transition-colors duration-300 w-full max-w-2xl">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-red-600"
                        />
                        <h3 className="text-xl font-bold text-white mb-2 font-mono">
                          {review.name}
                        </h3>
                        <p className="text-red-600 text-sm mb-6 font-medium">
                          {review.position}
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                          "{review.review}"
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
              <div className="swiper-button-next !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
            </Swiper>
          </div>
        </section>
      ) : (
        <motion.section 
          ref={reviewsRef}
          data-section="reviews"
          className="w-full bg-[#101010] flex flex-col justify-start min-h-screen pt-36 pb-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          animate={undefined}
          whileInView="visible"
          whileHover="hovered"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="text-center group cursor-pointer mb-16"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl">
              Reviews
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          {/* Review Carousel */}
          <motion.div 
            className="w-full px-8"
            variants={fadeInUp}
          >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loopedSlides={4}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="review-swiper !pb-12"
          >
            {[
              {
                name: "Dr. Sarah Johnson",
                position: "Head of Engineering, Tesla",
                review: "REEV's innovative approach to electric vehicle technology is truly remarkable. Their commitment to sustainability and performance sets them apart in the industry.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Michael Chen",
                position: "Racing Engineer, Formula E",
                review: "Working with REEV has been an incredible experience. Their attention to detail and passion for electric motorsports is unmatched.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Emily Rodriguez",
                position: "Automotive Journalist",
                review: "REEV represents the future of automotive technology. Their vehicles combine cutting-edge innovation with environmental responsibility.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Professor David Kim",
                position: "MIT Energy Systems Lab",
                review: "The research collaboration with REEV has yielded breakthrough results in battery efficiency and electric motor optimization.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Professor David Kim",
                position: "MIT Energy Systems Lab",
                review: "The research collaboration with REEV has yielded breakthrough results in battery efficiency and electric motor optimization.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Professor David Kim",
                position: "MIT Energy Systems Lab",
                review: "The research collaboration with REEV has yielded breakthrough results in battery efficiency and electric motor optimization.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Professor David Kim",
                position: "MIT Energy Systems Lab",
                review: "The research collaboration with REEV has yielded breakthrough results in battery efficiency and electric motor optimization.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <div className="bg-white/10 rounded-xl w-[27rem] h-[24rem] p-8 border-2 border-red-600/20 hover:border-red-600 transition-colors duration-300">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-red-600"
                      />
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">
                        {review.name}
                      </h3>
                      <p className="text-red-600 text-sm mb-6 font-medium">
                        {review.position}
                      </p>
                      <p className="text-gray-300 text-base leading-relaxed">
                        "{review.review}"
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
            <div className="swiper-button-next !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
            </Swiper>
          </motion.div>
        </motion.section>
      )}
          
      {/* Sponsors & Footer Section */}
      {isMobile ? (
        <section
          ref={sponsorsRef}
          data-section="sponsors"
          className="w-full bg-[#101010] mt-24 flex flex-col p-0 justify-start"
        >
          {/* Sponsors Content */}
          <div className="text-center group cursor-pointer mb-6">
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl">
              Sponsors
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
          </div>

          {/* Animated Marquee */}
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-marquee">
            {/* First set of sponsors */}
            {[
              { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
              { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
              { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
            ].map((item, index) => (
              <img
                key={index}
                src={item.Icon}
                alt={item.name}
                draggable="false"
                className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
              />
            ))}

            {/* Second set for seamless loop - exact duplicate */}
            {[
              { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
              { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
              { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
            ].map((item, index) => (
              <img
                key={`dup-${index}`}
                src={item.Icon}
                alt={item.name}
                draggable="false"
                className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
              />
            ))}

            {/* Third set for extra smoothness */}
            {[
              { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
              { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
              { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
              { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
            ].map((item, index) => (
              <img
                key={`third-${index}`}
                src={item.Icon}
                alt={item.name}
                draggable="false"
                className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
              />
            ))}
            </div>
          </div>
        </section>
      ) : (
        <motion.section 
          ref={sponsorsRef}
          data-section="sponsors"
          className="w-full bg-[#101010] flex flex-col min-h-screen pt-36 justify-between snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          animate={undefined}
          whileInView="visible"
          whileHover="hovered"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Sponsors Content */}
          <motion.div 
            className="text-center group cursor-pointer mb-16"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl">
              Sponsors
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          {/* Animated Marquee */}
          <motion.div 
            className="w-full overflow-hidden"
            variants={fadeInUp}
          >
            <div className="flex w-max animate-marquee">
              {/* First set of sponsors */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={index}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}

              {/* Second set for seamless loop - exact duplicate */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={`dup-${index}`}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}

              {/* Third set for extra smoothness */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={`third-${index}`}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}
            </div>
          </motion.div>

          {/* Footer Content Integrated */}
          <motion.footer 
            className="bg-black w-full text-white px-[8%] lg:px-[12%] pt-1 mt-auto grid items-center py-[1rem] font-mono"
          >
            <Footer />
          </motion.footer>
        </motion.section>
      )}

      {isMobile && (
          <Footer />
      )}
    </main>
  );
}