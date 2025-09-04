import React, { useEffect, useRef, useState, Fragment } from "react";
import { GiStumpRegrowth } from "react-icons/gi";
import { BsFillPeopleFill, BsFillLaptopFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { FaTools, FaHandsHelping } from "react-icons/fa";
import { motion } from "motion/react"

import Img from "../../assets/why.jpg";

// Video
import videoFile from "../../assets/video.mp4";

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

  // Animation variants
  const sectionVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        ease: "easeOut",
        staggerChildren: 0.6, // increased stagger delay between children
        delayChildren: 0.3, // delay before first child starts
      },
    },
    hovered: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
    exit: {
      y: -150,
      opacity: 0,
      transition: {
        duration: 1.0,
        ease: "easeIn",
        staggerChildren: 0.4, // reverse stagger when exiting
        staggerDirection: -1, // reverse direction
      },
    },
  };

  const childVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0, ease: "easeOut" },
    },
    hovered: {
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      y: -80,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
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
    <div className="w-full bg-[#101010] overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        data-section="hero"
        className="relative w-full h-screen flex items-center justify-center bg-[#101010] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-bold italic text-red-600 font-mono mb-4"
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            REEV
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-7xl text-white font-mono mb-8"
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
        ref={aboutRef}
        data-section="about"
        className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 py-20 bg-[#101010] min-h-screen"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hovered"
        exit="exit"
        viewport={{ once: false, amount: 0.15 }}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
          variants={childVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500"></div>
          <img
            alt="About REEV"
            className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            src={Img}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={childVariants}
        >
          <h2 className="text-5xl font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block">
            About REEV
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                visible: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
          </h2>
          <motion.p 
            className="text-lg lg:text-xl leading-relaxed text-gray-300 font-light max-w-2xl"
            variants={childVariants}
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
        className="py-20 bg-[#101010] min-h-screen"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hovered"
        exit="exit"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-16 group cursor-pointer"
          variants={childVariants}
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Why Join Us?
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                visible: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[3rem] px-6 lg:px-[17rem]"
          variants={childVariants}
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
              className="bg-white/5 backdrop-blur-sm col-span-1 rounded-lg p-6 mb-[3rem] border border-red-600/20 group cursor-pointer grid h-[20rem] md:h-[25rem]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
              }}
            >
              <div className="justify-self-center grid bg-red-500 w-20 items-center justify-items-center h-20 rounded-full mt-[1.5rem]">
                {item.symbol}
              </div>
              <h4 className="text-2xl font-bold text-red-600 mb-6 font-mono justify-self-center mt-[1rem]">{item.title}</h4>
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

      {/* Fleet Showcase Section */}
      <motion.section 
        ref={fleetRef}
        data-section="fleet"
        className="bg-[#101010] py-20 min-h-screen"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hovered"
        exit="exit"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="w-full">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 group cursor-pointer"
            variants={childVariants}
          >
            <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
              OUR FLEET
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
                initial={{ width: 0 }}
                variants={{
                  visible: { width: 0 },
                  hovered: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </h2>
          </motion.div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* REEV Racer */}
            <motion.div 
              className="group cursor-pointer col-span-1 h-[40rem]"
            >
              <div className="relative overflow-hidden bg-[#101010] h-[40rem]">
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
            >
              <div className="relative overflow-hidden bg-[#101010] h-[40rem]">
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

      {/* Review Section */}
      <motion.section 
        ref={reviewsRef}
        data-section="reviews"
        className="py-20 bg-[#101010] min-h-screen"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hovered"
        exit="exit"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-16 group cursor-pointer"
          variants={childVariants}
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Reviews
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                visible: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
          </h2>
        </motion.div>

        {/* Review Carousel */}
        <motion.div 
          className="relative h-[28rem] overflow-hidden"
          variants={childVariants}
          onMouseEnter={() => setIsReviewHovered(true)}
          style={{ cursor: 'none' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cursor = document.getElementById('custom-cursor');
            if (cursor) {
              cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
              cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
              cursor.style.display = 'block';
              
              // Change cursor based on position
              const isLeftSide = x < rect.width / 2;
              cursor.innerHTML = isLeftSide 
                ? '<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>'
                : '<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>';
            }
          }}
          onMouseLeave={() => {
            setIsReviewHovered(false)
            const cursor = document.getElementById('custom-cursor');
            if (cursor) cursor.style.display = 'none';
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const isLeftSide = x < rect.width / 2;
            
            if (isLeftSide) {
              setCurrentReviewIndex((prev) => (prev - 1 + 4) % 4);
            } else {
              setCurrentReviewIndex((prev) => (prev + 1) % 4);
            }
          }}
        >
          {/* Custom Cursor */}
          <div
            id="custom-cursor"
            className="absolute w-12 h-12 bg-red-600 rounded-full flex items-center justify-center pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-60"
            style={{ display: 'none' }}
          ></div>

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
                    className={`absolute bg-white/10 rounded-xl p-8 border-2 transition-all duration-700 ${
                      isCenter 
                        ? 'border-red-600 w-[28rem] h-96 z-30' 
                        : isAdjacent 
                          ? 'border-white/20 w-[28rem] h-96 z-20'
                          : 'border-white/10 w-[28rem] h-96 z-10'
                    }`}
                    initial={false}
                    animate={{
                      x: wrappedPos * 450,
                      scale: isCenter ? 1 : isAdjacent ? 0.8 : 0.6,
                      opacity: isVisible ? (isCenter ? 1 : isAdjacent ? 0.5 : 0.2) : 0,
                      filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(1px)' : 'blur(3px)',
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{ display: isVisible ? "block" : "none" }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.img
                        src={review.image}
                        alt={review.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-red-600"
                        initial={{ scale: 0 }}
                        animate={{ scale: isCenter ? 1 : 0.8 }}
                        transition={{ duration: 0.5, delay: isCenter ? 0.2 : 0 }}
                      />
                      <motion.h3
                        className="text-xl font-bold text-white mb-2 font-mono"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: isCenter ? 1 : 0.8 }}
                        transition={{ duration: 0.5, delay: isCenter ? 0.3 : 0 }}
                      >
                        {review.name}
                      </motion.h3>
                      <motion.p
                        className="text-red-600 text-sm mb-4 font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: isCenter ? 1 : 0.8 }}
                        transition={{ duration: 0.5, delay: isCenter ? 0.4 : 0 }}
                      >
                        {review.position}
                      </motion.p>
                      <motion.p
                        className="text-gray-300 text-sm leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: isCenter ? 1 : 0.6 }}
                        transition={{ duration: 0.5, delay: isCenter ? 0.5 : 0 }}
                      >
                        "{review.review}"
                      </motion.p>
                    </div>
                  </motion.div>
                );
              });
            })()}
          </div>
        </motion.div>
      </motion.section>
          
      {/* Sponsors & Footer Section */}
      <motion.section 
        ref={sponsorsRef}
        data-section="sponsors"
        className="pt-20 bg-[#101010]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hovered"
        exit="exit"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Sponsors Content */}
        <motion.div 
          className="text-center mb-16 group cursor-pointer"
          variants={childVariants}
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Sponsors
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[0.1rem] bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ width: 0 }}
              variants={{
                visible: { width: 0 },
                hovered: { width: "100%" },
              }}
              transition={{ duration: 0.3 }}
            />
          </h2>
        </motion.div>

        {/* Animated Marquee */}
        <motion.div 
          className="marquee-container"
          variants={childVariants}
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
          className="bg-black w-full border-t border-red-600 text-white px-[8%] lg:px-[12%] pt-8 mt-20 grid items-center py-[5rem] font-mono"
          variants={childVariants}
        >
          {/* Navigation Links */}
          <div className="mx-auto flex flex-wrap justify-center items-center gap-4 text-base py-6">
            {["Home", "Achievements", "Team", "Go-Kart", "Reev", "Join Us"].map(
              (link, i) => (
                <Fragment key={i}>
                  <a
                    href="#"
                    className="hover:text-red-600 transition-colors mx-3 text-white"
                  >
                    {link}
                  </a>
                </Fragment>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-4">
            {[
              { icon: "ri-instagram-line", url: "#" },
              { icon: "ri-facebook-circle-fill", url: "#" },
              { icon: "ri-linkedin-fill", url: "#" },
              { icon: "ri-youtube-fill ", url: "#" },
            ].map(({ icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 flex items-center justify-center text-white hover:text-red-600 transition-all duration-300"
              >
                <i className={`${icon} text-3xl`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm pb-8">
            © 2025 <span className="text-red-600 font-bold">REEV</span> Racing Club. All rights reserved.
          </div>
        </motion.footer>
      </motion.section>
    </div>
  );
}
