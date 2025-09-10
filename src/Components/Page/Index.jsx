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

export default function Index() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whyJoinRef = useRef(null);
  const fleetRef = useRef(null);
  const reviewsRef = useRef(null);
  const sponsorsRef = useRef(null);

  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isReviewHovered, setIsReviewHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Improved scroll-snap animations
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.4, 
        ease: "easeIn"
      },
    },
  };

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    setTimeout(() => {
      setHeroTextVisible(true);
    }, 200);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Auto-scroll for reviews with infinite loop
  useEffect(() => {
    if (!isReviewHovered) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % 4); // 4 reviews total
      }, 10000); // 10 seconds
      return () => clearInterval(interval);
    }
  }, [isReviewHovered]);

  return (
    <main className={`w-full bg-[#101010] ${isMobile ? 'overflow-y-auto' : 'h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'}`}>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        data-section="hero"
        className={`relative w-full flex items-center justify-center bg-[#101010] overflow-hidden ${isMobile ? 'h-[100vh] py-8' : 'h-screen snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        initial={!isMobile ? { opacity: 0, y: 30, scale: 0.98 } : false}
        animate={!isMobile ? { opacity: 1, y: 0, scale: 1 } : false}
        transition={!isMobile ? { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } : {}}
      >
        <TailwindSlideshow />

        <motion.div
          className="absolute text-center text-white z-10"
        initial={!isMobile ? { opacity: 0, y: 50, scale: 0.95 } : false}
        animate={!isMobile ? { opacity: 1, y: 0, scale: 1 } : false}
        transition={!isMobile ? { duration: 1.0, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } : {}}
        >
          <motion.h1
            className={`drop-shadow-lg font-bold italic text-red-600 font-mono mb-4 px-4 ${isMobile ? 'text-xl text-center leading-tight' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'}`}
            initial={!isMobile ? { opacity: 0, y: 30 } : false}
            animate={!isMobile ? { opacity: 1, y: 0 } : false}
            transition={!isMobile ? { duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } : {}}
          >
            Resonance Racing REEV and GOKART
          </motion.h1>
          <motion.h2
            className={`drop-shadow-lg text-white font-mono mb-8 px-4 ${isMobile ? 'text-sm text-center leading-relaxed' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl'}`}
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
      <motion.section
        ref={aboutRef}
        data-section="about"
        className={`w-full bg-[#101010] flex flex-col items-center justify-center ${isMobile ? 'py-8 px-4 gap-4 min-h-auto' : 'min-h-screen lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20 py-12 lg:py-20 snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        variants={!isMobile ? sectionVariants : {}}
        initial={!isMobile ? "hidden" : false}
        whileInView={!isMobile ? "visible" : false}
        viewport={!isMobile ? { once: false, amount: 0.3 } : {}}
        whileHover={!isMobile ? "hovered" : undefined}
      >
        {/* Image Section */}
        <motion.div
          className={`relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer ${isMobile ? 'w-full max-w-sm' : 'flex-1'}`}
          variants={!isMobile ? childVariants : {}}
          whileHover={!isMobile ? { 
            scale: 1.02,
            y: -4,
            transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
          } : false}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 ${isMobile ? '' : 'group-hover:from-black/40'} transition-all duration-500`}></div>
          <img
            alt="About REEV"
            className={`w-full object-cover transition-transform duration-500 ${isMobile ? 'h-48 rounded-2xl' : 'h-80 lg:h-96 group-hover:scale-110'}`}
            loading="lazy"
            src="/banner 2.png"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className={`text-center ${isMobile ? 'w-full' : 'flex-1 lg:text-left'}`}
          variants={!isMobile ? childVariants : {}}
        >
          <h2 className={`font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block ${isMobile ? 'text-2xl' : 'text-5xl'}`}>
            About REEV
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem]"
              style={{
                background: 'linear-gradient(to right, transparent 0%, transparent 10%, #ef4444 20%, #ef4444 40%, #ef4444 60%, #ef4444 80%, transparent 90%, transparent 100%)'
              }}
              initial={!isMobile ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
              variants={!isMobile ? {
                visible: { width: 0, opacity: 0 },
                hovered: { width: "100%", opacity: 1 },
              } : { visible: { width: "100%", opacity: 1 } }}
              transition={!isMobile ? { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.2 }
              } : {}}
            />
          </h2>
          <motion.p 
            className={`leading-relaxed text-gray-300 font-light ${isMobile ? 'text-sm px-2' : 'text-lg lg:text-xl max-w-2xl'}`}
            variants={!isMobile ? childVariants : {}}
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

      {/* Why Join Us Section */}
      <motion.section 
        ref={whyJoinRef}
        data-section="whyJoin"
        className={`w-full bg-[#101010] flex flex-col justify-start ${isMobile ? 'py-8 min-h-auto' : 'min-h-screen pt-24 pb-20 snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        variants={!isMobile ? sectionVariants : {}}
        initial={!isMobile ? "hidden" : false}
        whileInView={!isMobile ? "visible" : false}
        viewport={!isMobile ? { once: false, amount: 0.3 } : {}}
        whileHover={!isMobile ? "hovered" : undefined}
      >
        <motion.div 
          className={`text-center group cursor-pointer ${isMobile ? 'mb-6' : 'mb-16'}`}
          variants={!isMobile ? childVariants : {}}
        >
          <h2 className={`font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block ${isMobile ? 'text-2xl mt-4' : 'text-5xl mt-24'}`}>
            Why Join Us?
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] w-full origin-center"
              style={{
                background: 'linear-gradient(to right, transparent 0%, transparent 10%, #ef4444 20%, #ef4444 40%, #ef4444 60%, #ef4444 80%, transparent 90%, transparent 100%)'
              }}
              initial={!isMobile ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
              variants={!isMobile ? {
                visible: { width: 0, opacity: 0 },
                hovered: { width: "100%", opacity: 1 },
              } : { visible: { width: "100%", opacity: 1 } }}
              transition={!isMobile ? { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.2 }
              } : {}}
            />
          </h2>
        </motion.div>

        <motion.div 
          className={`grid perspective-1000 gap-4 px-4 ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-[3rem] sm:px-6 lg:px-[17rem]'}`}
          variants={!isMobile ? childVariants : {}}
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
              className={`bg-white/5 backdrop-blur-sm col-span-1 rounded-lg border border-red-600/20 group cursor-pointer grid h-auto ${isMobile ? 'p-4 mb-3 min-h-[14rem]' : 'p-4 sm:p-6 mb-6 lg:mb-[3rem] min-h-[18rem] sm:h-[20rem] md:h-[25rem]'}`}
              whileHover={!isMobile ? "hover-card" : false}
              initial={!isMobile ? "rest" : false}
              animate={!isMobile ? "rest" : false}
              variants={!isMobile ? {
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
              } : {}}
            >
              <motion.div className={`justify-self-center grid bg-red-500 items-center justify-items-center rounded-full ${isMobile ? 'w-16 h-16 mt-4' : 'w-20 h-20 mt-[1.5rem]'}`}
               variants={!isMobile ? {
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
               } : {}}
              >
                {React.cloneElement(item.symbol, { 
                  className: isMobile ? "size-8 fill-black" : "size-10 fill-black"
                })}
              </motion.div>
              <h4 className={`font-bold text-red-600 font-mono justify-self-center ${isMobile ? 'text-lg mb-3 mt-3' : 'text-2xl mb-6 mt-[1rem]'}`}>{item.title}</h4>
              <p className={`text-gray-300 ${isMobile ? 'text-sm leading-relaxed' : ''}`}>{item.description}</p>
              {/* Mobile-optimized underline effect */}
              <motion.div
                className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-4"
                initial={!isMobile ? { scaleX: 0 } : { scaleX: 1 }}
                whileHover={!isMobile ? { scaleX: 1 } : false}
                animate={isMobile ? { scaleX: 1 } : undefined}
                transition={!isMobile ? { duration: 0.3, ease: "easeOut" } : {}}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Fleet Showcase Section */}
      <motion.section 
        ref={fleetRef}
        data-section="fleet"
        className={`w-full bg-[#101010] flex flex-col justify-start ${isMobile ? 'py-8 min-h-auto' : 'min-h-screen pt-36 pb-20 snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        variants={!isMobile ? sectionVariants : {}}
        initial={!isMobile ? "hidden" : false}
        whileInView={!isMobile ? "visible" : false}
        viewport={!isMobile ? { once: false, amount: 0.2 } : {}}
        whileHover={!isMobile ? "hovered" : undefined}
      >
        <div className="w-full">
          {/* Section Header */}
          <motion.div 
            className={`text-center group cursor-pointer ${isMobile ? 'mb-6' : 'mb-16'}`}
            variants={!isMobile ? childVariants : {}}
          >
            <h2 className={`font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block ${isMobile ? 'text-2xl' : 'text-5xl'}`}>
              OUR FLEET
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[0.1rem]"
                  style={{
                    background: 'linear-gradient(to right, transparent 0%, transparent 10%, #ef4444 20%, #ef4444 40%, #ef4444 60%, #ef4444 80%, transparent 90%, transparent 100%)'
                  }}
                  initial={!isMobile ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
                  variants={!isMobile ? {
                    visible: { width: 0, opacity: 0 },
                    hovered: { width: "100%", opacity: 1 },
                  } : { visible: { width: "100%", opacity: 1 } }}
                  transition={!isMobile ? { 
                    duration: 0.4, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.2 }
                  } : {}}
                />
            </h2>
          </motion.div>

          {/* Fleet Grid */}
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1 px-4' : 'grid-cols-1 lg:grid-cols-2 lg:gap-0'}`}>
            {/* REEV Racer */}
            <motion.div 
              className={`group cursor-pointer col-span-1 ${isMobile ? 'h-[20rem]' : 'h-[30rem] sm:h-[35rem] lg:h-[40rem]'}`}
              variants={!isMobile ? childVariants : {}}
            >
              <div className={`relative overflow-hidden bg-[#101010] ${isMobile ? 'h-[20rem] rounded-lg' : 'h-[30rem] sm:h-[35rem] lg:h-[40rem]'}`}>
                <motion.img 
                  src="PNG_image-removebg-preview.png"
                  alt="REEV Racer"
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 ${isMobile ? 'p-4' : 'p-8'}`}>
                  <h3 className={`font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 ${isMobile ? 'text-xl group-hover:text-red-600' : 'text-4xl group-hover:text-red-600'}`}>
                    <span className="text-red-600 font-black italic">REEV</span> Racer
                  </h3>
                  <p className={`text-gray-300 mb-4 transition-opacity duration-500 ${isMobile ? 'text-sm opacity-100' : 'text-base opacity-0 group-hover:opacity-100'}`}>
                    High-Performance Electric Racing Vehicle
                  </p>
                  <div className={`flex items-center text-white font-light transition-colors duration-300 ${isMobile ? 'text-xs group-hover:text-red-600' : 'text-sm group-hover:text-red-600'}`}>
                    <span>Discover</span>
                    <svg className={`ml-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* REEV GoCar */}
            <motion.div 
              className={`group cursor-pointer col-span-1 ${isMobile ? 'h-[20rem]' : 'h-[30rem] sm:h-[35rem] lg:h-[40rem]'}`}
              variants={!isMobile ? childVariants : {}}
            >
              <div className={`relative overflow-hidden bg-[#101010] ${isMobile ? 'h-[20rem] rounded-lg' : 'h-[30rem] sm:h-[35rem] lg:h-[40rem]'}`}>
                <motion.img 
                  src="/gokart cad 3d.png"
                  alt="REEV GoCar"
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 ${isMobile ? 'p-4' : 'p-8'}`}>
                  <h3 className={`font-light text-white mb-3 font-mono tracking-wide transition-colors duration-300 ${isMobile ? 'text-xl group-hover:text-red-600' : 'text-4xl group-hover:text-red-600'}`}>
                    <span className="text-red-600 font-black italic">REEV</span> GoCar
                  </h3>
                  <p className={`text-gray-300 mb-4 transition-opacity duration-500 ${isMobile ? 'text-sm opacity-100' : 'text-base opacity-0 group-hover:opacity-100'}`}>
                    Urban Electric Mobility Solution
                  </p>
                  <div className={`flex items-center text-white font-light transition-colors duration-300 ${isMobile ? 'text-xs group-hover:text-red-600' : 'text-sm group-hover:text-red-600'}`}>
                    <span>Discover</span>
                    <svg className={`ml-2 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Review Section */}
      <motion.section 
        ref={reviewsRef}
        data-section="reviews"
        className={`w-full bg-[#101010] flex flex-col justify-start ${isMobile ? 'py-8 min-h-auto' : 'min-h-screen pt-36 pb-20 snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        variants={!isMobile ? sectionVariants : {}}
        initial={!isMobile ? "hidden" : false}
        whileInView={!isMobile ? "visible" : false}
        viewport={!isMobile ? { once: false, amount: 0.2 } : {}}
        whileHover={!isMobile ? "hovered" : undefined}
      >
        <motion.div 
          className={`text-center group cursor-pointer ${isMobile ? 'mb-6' : 'mb-16'}`}
          variants={!isMobile ? childVariants : {}}
        >
          <h2 className={`font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block ${isMobile ? 'text-2xl' : 'text-5xl'}`}>
            Reviews
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem]"
              style={{
                background: 'linear-gradient(to right, transparent 0%, transparent 10%, #ef4444 20%, #ef4444 40%, #ef4444 60%, #ef4444 80%, transparent 90%, transparent 100%)'
              }}
              initial={!isMobile ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
              variants={!isMobile ? {
                visible: { width: 0, opacity: 0 },
                hovered: { width: "100%", opacity: 1 },
              } : { visible: { width: "100%", opacity: 1 } }}
              transition={!isMobile ? { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.2 }
              } : {}}
            />
          </h2>
        </motion.div>

        {/* Review Carousel */}
        <motion.div 
          className={`relative overflow-hidden ${isMobile ? 'h-auto px-4' : 'h-[24rem] sm:h-[26rem] lg:h-[28rem]'}`}
          variants={!isMobile ? childVariants : {}}
          onMouseEnter={!isMobile ? () => setIsReviewHovered(true) : undefined}
          onMouseLeave={!isMobile ? () => setIsReviewHovered(false) : undefined}
        >
          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + 4) % 4)}
              >
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % 4)}
              >
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
            </>
          )}

          {isMobile ? (
            // Simple mobile layout - show one review
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-white/10 rounded-xl p-6 border border-red-600/20">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Dr. Sarah Johnson"
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-red-600"
                  />
                  <h3 className="text-lg font-bold text-white mb-2 font-mono">Dr. Sarah Johnson</h3>
                  <p className="text-red-600 text-sm mb-4 font-medium">Head of Engineering, Tesla</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "REEV's innovative approach to electric vehicle technology is truly remarkable. Their commitment to sustainability and performance sets them apart in the industry."
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full relative">
              {(() => {
                const reviews = [
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
                ];

              // Extended array for rendering
              const extendedReviews = [
                ...reviews.slice(-2),
                ...reviews,
                ...reviews.slice(0, 2),
              ];

              return extendedReviews.map((review, index) => {
                const adjustedIndex = index - 2; // account for prepended
                const position = adjustedIndex - currentReviewIndex;

                // Wrap positions to simulate infinite loop
                let wrappedPos = position;
                if (wrappedPos < -reviews.length / 2) wrappedPos += reviews.length;
                if (wrappedPos > reviews.length / 2) wrappedPos -= reviews.length;

                const isCenter = wrappedPos === 0;
                const isAdjacent = Math.abs(wrappedPos) === 1;
                const isVisible = Math.abs(wrappedPos) <= 2;

                return (
                  <motion.div
                    key={`${index}-${review.name}`}
                    className={`absolute bg-white/10 rounded-xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-700 ${
                      isCenter 
                        ? 'border-red-600 w-[20rem] sm:w-[24rem] lg:w-[28rem] h-80 sm:h-88 lg:h-96 z-30' 
                        : isAdjacent 
                          ? 'border-white/20 w-[20rem] sm:w-[24rem] lg:w-[28rem] h-80 sm:h-88 lg:h-96 z-20'
                          : 'border-white/10 w-[20rem] sm:w-[24rem] lg:w-[28rem] h-80 sm:h-88 lg:h-96 z-10'
                    }`}
                    initial={false}
                    animate={!isMobile ? {
                      x: wrappedPos * 450,
                      scale: isCenter ? 1 : isAdjacent ? 0.9 : 0.8,
                      opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                      filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(0.5px)' : 'blur(1px)',
                      rotateY: wrappedPos * -2,
                    } : {
                      x: wrappedPos * 280,
                      scale: 1,
                      opacity: 1,
                      filter: 'blur(0px)',
                      rotateY: 0,
                    }}
                    transition={!isMobile ? { 
                      duration: 0.8, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.6 }
                    } : { duration: 0 }}
                    style={{ display: isVisible ? "block" : "none" }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.img
                        src={review.image}
                        alt={review.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-red-600"
                        initial={!isMobile ? { scale: 0, y: 20 } : false}
                        animate={!isMobile ? { scale: isCenter ? 1 : 0.8, y: 0 } : false}
                        transition={!isMobile ? { duration: 0.6, delay: isCenter ? 0.1 : 0, ease: [0.34, 1.56, 0.64, 1] } : {}}
                      />
                      <motion.h3
                        className="text-xl font-bold text-white mb-2 font-mono"
                        initial={!isMobile ? { y: 30 } : false}
                        animate={!isMobile ? { y: 0 } : false}
                        transition={!isMobile ? { duration: 0.5, delay: isCenter ? 0.2 : 0, ease: [0.34, 1.56, 0.64, 1] } : {}}
                      >
                        {review.name}
                      </motion.h3>
                      <motion.p
                        className="text-red-600 text-sm mb-4 font-medium"
                        initial={{ y: 30 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: isCenter ? 0.3 : 0, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        {review.position}
                      </motion.p>
                      <motion.p
                        className="text-gray-300 text-sm leading-relaxed"
                        initial={{ y: 30 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: isCenter ? 0.4 : 0, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        "{review.review}"
                      </motion.p>
                    </div>
                  </motion.div>
                );
              });
              })()}
              </div>
            )}
          </motion.div>
      </motion.section>
          
      {/* Sponsors & Footer Section */}
      <motion.section 
        ref={sponsorsRef}
        data-section="sponsors"
        className={`w-full bg-[#101010] flex flex-col ${isMobile ? 'py-8 min-h-auto justify-start' : 'min-h-screen pt-36 justify-between snap-start'}`}
        style={!isMobile ? { scrollSnapAlign: 'start' } : {}}
        variants={!isMobile ? sectionVariants : {}}
        initial={!isMobile ? "hidden" : false}
        whileInView={!isMobile ? "visible" : false}
        viewport={!isMobile ? { once: false, amount: 0.2 } : {}}
        whileHover={!isMobile ? "hovered" : undefined}
      >
        {/* Sponsors Content */}
        <motion.div 
          className={`text-center group cursor-pointer ${isMobile ? 'mb-6' : 'mb-16'}`}
          variants={!isMobile ? childVariants : {}}
        >
          <h2 className={`font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block ${isMobile ? 'text-2xl' : 'text-5xl'}`}>
            Sponsors
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem]"
              style={{
                background: 'linear-gradient(to right, transparent 0%, transparent 10%, #ef4444 20%, #ef4444 40%, #ef4444 60%, #ef4444 80%, transparent 90%, transparent 100%)'
              }}
              initial={!isMobile ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
              variants={!isMobile ? {
                visible: { width: 0, opacity: 0 },
                hovered: { width: "100%", opacity: 1 },
              } : { visible: { width: "100%", opacity: 1 } }}
              transition={!isMobile ? { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.2 }
              } : {}}
            />
          </h2>
        </motion.div>

        {/* Animated Marquee */}
        <motion.div 
          className="marquee-container overflow-hidden"
          variants={!isMobile ? childVariants : {}}
        >
          <div className="marquee-content">
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
    </main>
  );
}