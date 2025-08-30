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
  const aboutRef = useRef(null);
  const whyJoinRef = useRef(null);
  const fleetRef = useRef(null);
  const reviewsRef = useRef(null);
  const sponsorsRef = useRef(null);

  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isReviewHovered, setIsReviewHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [scrollAttempts, setScrollAttempts] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sectionScrollPositions, setSectionScrollPositions] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    about: false,
    whyJoin: false,
    fleet: false,
    reviews: false,
    sponsors: false,
  });

  const sectionRefs = [heroRef, aboutRef, whyJoinRef, fleetRef, reviewsRef, sponsorsRef];
  const sectionNames = ['hero', 'about', 'whyJoin', 'fleet', 'reviews', 'sponsors'];

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

  // Apple-like scroll behavior with section pinning (desktop only)
  useEffect(() => {
    // Skip Apple-like scroll behavior on mobile
    if (isMobile) {
      // On mobile, enable all sections immediately for normal scrolling
      setVisibleSections({
        hero: true,
        about: true,
        whyJoin: true,
        fleet: true,
        reviews: true,
        sponsors: true,
      });
      return;
    }

    let scrollTimeout;
    let lastScrollTime = 0;
    const scrollDelay = 150;
    const requiredScrollAttempts = 3; // Number of scroll attempts needed to move to next section

    const canScrollInSection = (direction) => {
      const currentSection = sectionRefs[currentSectionIndex]?.current;
      if (!currentSection) return false;

      const sectionRect = currentSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // If section fits in viewport, no internal scrolling needed
      if (sectionRect.height <= viewportHeight) return false;

      const currentScrollTop = window.pageYOffset;
      const sectionTop = currentSection.offsetTop;
      const sectionBottom = sectionTop + sectionRect.height;
      const viewportTop = currentScrollTop;
      const viewportBottom = currentScrollTop + viewportHeight;

      if (direction > 0) {
        // Scrolling down - check if we can scroll more within the section
        return viewportBottom < sectionBottom - 50; // 50px buffer
      } else {
        // Scrolling up - check if we can scroll more within the section  
        return viewportTop > sectionTop + 50; // 50px buffer
      }
    };

    const handleWheel = (e) => {
      const currentTime = Date.now();
      
      // Prevent rapid scrolling
      if (currentTime - lastScrollTime < scrollDelay) {
        e.preventDefault();
        return;
      }
      
      lastScrollTime = currentTime;

      // If currently transitioning, ignore scroll
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const direction = delta > 0 ? 1 : -1;

      // Check if we can scroll within the current section
      if (canScrollInSection(direction)) {
        // Allow normal scrolling within the section
        return;
      }

      // Prevent default only when we're at section boundaries
      e.preventDefault();

      const nextIndex = currentSectionIndex + direction;

      // Check if we can move to next/previous section
      if (nextIndex >= 0 && nextIndex < sectionRefs.length) {
        setScrollAttempts(prev => prev + 1);

        // If enough scroll attempts, transition to next section
        if (scrollAttempts >= requiredScrollAttempts - 1) {
          setIsTransitioning(true);
          setScrollAttempts(0);

          // Start exit animation for current section
          setVisibleSections(prev => ({
            ...prev,
            [sectionNames[currentSectionIndex]]: false
          }));

          // After exit animation, scroll to next section
          setTimeout(() => {
            setCurrentSectionIndex(nextIndex);
            
            // Always scroll to the top of the entering section
            const targetSection = sectionRefs[nextIndex].current;
            if (targetSection) {
              const sectionTop = targetSection.offsetTop;
              window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
              });
            }

            // Start entrance animation for new section
            setTimeout(() => {
              setVisibleSections(prev => ({
                hero: nextIndex === 0,
                about: nextIndex === 1,
                whyJoin: nextIndex === 2,
                fleet: nextIndex === 3,
                reviews: nextIndex === 4,
                sponsors: nextIndex === 5,
              }));

              // Release transition lock
              setTimeout(() => {
                setIsTransitioning(false);
              }, 1500);
            }, 600);
          }, 1000);
        }
      } else {
        // Reset scroll attempts if trying to go beyond bounds
        setScrollAttempts(0);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        // For keyboard navigation, ensure we're at section boundary before triggering transition
        const nextIndex = currentSectionIndex + 1;
        if (nextIndex < sectionRefs.length) {
          if (!canScrollInSection(1)) {
            handleWheel({ deltaY: 1, preventDefault: () => {} });
          }
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        // For keyboard navigation, ensure we're at section boundary before triggering transition
        const prevIndex = currentSectionIndex - 1;
        if (prevIndex >= 0) {
          if (!canScrollInSection(-1)) {
            handleWheel({ deltaY: -1, preventDefault: () => {} });
          }
        }
      }
    };

    // Reset scroll attempts after inactivity
    const resetScrollAttempts = () => {
      setScrollAttempts(0);
    };

    let resetTimeout;
    const handleScrollReset = () => {
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(resetScrollAttempts, 2000); // Reset after 2 seconds of no scrolling
    };

    // Track scroll position to update current section
    const handleScroll = () => {
      if (isTransitioning) return;

      const scrollTop = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollTop + viewportHeight / 2;

      // Find which section is currently in the center of the viewport
      let newSectionIndex = currentSectionIndex;
      
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          const sectionCenter = sectionTop + sectionHeight / 2;
          
          if (Math.abs(viewportCenter - sectionCenter) < sectionHeight / 2) {
            newSectionIndex = index;
          }
        }
      });

      // Update current section if it changed
      if (newSectionIndex !== currentSectionIndex) {
        setCurrentSectionIndex(newSectionIndex);
        setScrollAttempts(0); // Reset scroll attempts when section changes naturally
        
        // Update visible sections
        setVisibleSections({
          hero: newSectionIndex === 0,
          about: newSectionIndex === 1,
          whyJoin: newSectionIndex === 2,
          fleet: newSectionIndex === 3,
          reviews: newSectionIndex === 4,
          sponsors: newSectionIndex === 5,
        });
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleScrollReset, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleScrollReset);
      document.removeEventListener('scroll', handleScroll);
      clearTimeout(resetTimeout);
    };
  }, [currentSectionIndex, scrollAttempts, isTransitioning, isMobile]);





  // sponsors

  


  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
       <motion.section
        ref={heroRef}
         data-section="hero"
         className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden"
         initial={{ opacity: 0, scale: 0.8, y: 100 }}
         animate={{ 
           opacity: isMobile ? 1 : (visibleSections.hero ? 1 : 0),
           scale: isMobile ? 1 : (visibleSections.hero ? 1 : 0.8),
           y: isMobile ? 0 : (visibleSections.hero ? 0 : (currentSectionIndex > 0 ? -100 : 100))
         }}
         transition={{ 
           duration: 1.5, 
           ease: "easeInOut",
           staggerChildren: 0.3
         }}
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
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ 
             opacity: isMobile ? 1 : (visibleSections.hero ? 1 : 0), 
             y: isMobile ? 0 : (visibleSections.hero ? 0 : 50),
             scale: isMobile ? 1 : (visibleSections.hero ? 1 : 0.9)
           }}
           transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
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
         className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 py-20 bg-black min-h-screen"
         initial={{ opacity: 0, y: 100, scale: 0.8 }}
         animate={{ 
           opacity: isMobile ? 1 : (visibleSections.about ? 1 : 0),
           y: isMobile ? 0 : (visibleSections.about ? 0 : (currentSectionIndex > 1 ? -100 : 100)),
           scale: isMobile ? 1 : (visibleSections.about ? 1 : 0.8)
         }}
         transition={{ duration: 1.4, ease: "easeInOut", staggerChildren: 0.2 }}
         whileHover="hovered"
       >
          {/* Image Section */}
                 <motion.div
           className="flex-1 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
           initial={{ x: -120, opacity: 0, scale: 0.9 }}
           animate={{ 
             x: isMobile ? 0 : (visibleSections.about ? 0 : -120), 
             opacity: isMobile ? 1 : (visibleSections.about ? 1 : 0),
             scale: isMobile ? 1 : (visibleSections.about ? 1 : 0.9)
           }}
           transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
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
           initial={{ x: 120, opacity: 0, scale: 0.9 }}
           animate={{ 
             x: isMobile ? 0 : (visibleSections.about ? 0 : 120), 
             opacity: isMobile ? 1 : (visibleSections.about ? 1 : 0),
             scale: isMobile ? 1 : (visibleSections.about ? 1 : 0.9)
           }}
           transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
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
         ref={whyJoinRef}
         data-section="whyJoin"
         className="py-20 bg-black min-h-screen"
         initial={{ opacity: 0, y: 120, scale: 0.8 }}
         animate={{ 
           opacity: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0),
           y: isMobile ? 0 : (visibleSections.whyJoin ? 0 : (currentSectionIndex > 2 ? -120 : 120)),
           scale: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0.8)
         }}
         transition={{ duration: 1.4, ease: "easeInOut", staggerChildren: 0.15 }}
         whileHover="hovered"
       >
            <motion.div 
          className="text-center mb-16 group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0),
            y: isMobile ? 0 : (visibleSections.whyJoin ? 0 : 50)
          }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Why Join Us?
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

          <motion.div 
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[3rem] px-6 lg:px-[17rem]"
           initial={{ y: 80, opacity: 0, scale: 0.9 }}
           animate={{ 
             y: isMobile ? 0 : (visibleSections.whyJoin ? 0 : 80), 
             opacity: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0),
             scale: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0.9)
           }}
           transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
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
               initial={{ y: 60, opacity: 0, scale: 0.8 }}
               animate={{ 
                 y: isMobile ? 0 : (visibleSections.whyJoin ? 0 : 60), 
                 opacity: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0),
                 scale: isMobile ? 1 : (visibleSections.whyJoin ? 1 : 0.8)
               }}
               transition={{ 
                 duration: 0.8, 
                 delay: visibleSections.whyJoin ? 0.6 + (index * 0.15) : 0,
                 ease: "easeOut"
               }}
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
         className="bg-black py-20 min-h-screen"
         initial={{ opacity: 0, y: 120, scale: 0.8 }}
         animate={{ 
           opacity: isMobile ? 1 : (visibleSections.fleet ? 1 : 0),
           y: isMobile ? 0 : (visibleSections.fleet ? 0 : (currentSectionIndex > 3 ? -120 : 120)),
           scale: isMobile ? 1 : (visibleSections.fleet ? 1 : 0.8)
         }}
         transition={{ duration: 1.4, ease: "easeInOut", staggerChildren: 0.2 }}
         whileHover="hovered"
       >
        <div className="w-full ">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 group cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: visibleSections.fleet ? 0 : 50, 
              opacity: visibleSections.fleet ? 1 : 0 
            }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
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
          </motion.div>

          {/* Fleet Grid */}
                     <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* REEV Racer */}
            <motion.div 
              className="group cursor-pointer col-span-1 h-[40rem]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: visibleSections.fleet ? 0 : -100, 
                opacity: visibleSections.fleet ? 1 : 0 
              }}
              transition={{ duration: 0.7, delay: 0.4 }}
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
              animate={{ 
                x: visibleSections.fleet ? 0 : 100, 
                opacity: visibleSections.fleet ? 1 : 0 
              }}
              transition={{ duration: 0.7, delay: 0.6 }}
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

      {/* Review Section */}
             <motion.section 
         ref={reviewsRef}
         data-section="reviews"
         className="py-20 bg-black min-h-screen"
         initial={{ opacity: 0, y: 120, scale: 0.8 }}
         animate={{ 
           opacity: isMobile ? 1 : (visibleSections.reviews ? 1 : 0),
           y: isMobile ? 0 : (visibleSections.reviews ? 0 : (currentSectionIndex > 4 ? -120 : 120)),
           scale: isMobile ? 1 : (visibleSections.reviews ? 1 : 0.8)
         }}
         transition={{ duration: 1.4, ease: "easeInOut" }}
         whileHover="hovered"
       >
        <motion.div 
          className="text-center mb-16 group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: visibleSections.reviews ? 1 : 0,
            y: visibleSections.reviews ? 0 : 50
          }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block">
            Reviews
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

        {/* Review Carousel */}
        <div 
          className="relative h-[28rem] overflow-hidden"
          onMouseEnter={() => setIsReviewHovered(true)}
                      style={{
            cursor: 'none'
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cursor = document.getElementById('custom-cursor');
            if (cursor) {
              cursor.style.left = `${x}px`;
              cursor.style.top = `${y}px`;
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

               // Create extended array for infinite loop effect
               const extendedReviews = [
                 ...reviews.slice(-2), // Last 2 items at the beginning
                 ...reviews,           // Original items
                 ...reviews.slice(0, 2) // First 2 items at the end
               ];

               return extendedReviews.map((review, index) => {
                 // Adjust position calculation for infinite loop
                 const adjustedIndex = index - 2; // Account for prepended items
                 const position = adjustedIndex - currentReviewIndex;
                 const isCenter = position === 0;
                 const isAdjacent = Math.abs(position) === 1;
                 const isVisible = Math.abs(position) <= 2; // Show more cards for infinite effect

                 return (
                   <motion.div
                     key={`${index}-${review.name}`}
                     className={`absolute bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-700 ${
                       isCenter 
                         ? 'border-red-600 w-[28rem] h-96 z-30' 
                         : isAdjacent 
                           ? 'border-white/20 w-72 h-56 z-20'
                           : 'border-white/10 w-64 h-48 z-10'
                     }`}
                     initial={false}
                     animate={{
                       x: position * 380, // Increased spacing for better infinite effect
                       scale: isCenter ? 1 : isAdjacent ? 0.8 : 0.6,
                       opacity: isVisible ? (isCenter ? 1 : isAdjacent ? 0.5 : 0.2) : 0,
                       filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(1px)' : 'blur(3px)',
                     }}
                     transition={{ duration: 0.7, ease: "easeInOut" }}
                      style={{
                       display: isVisible ? 'block' : 'none'
                     }}
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

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex ? 'bg-red-600' : 'bg-white/30'
                }`}
                onClick={() => setCurrentReviewIndex(index)}
              />
            ))}
                </div>
              </div>
      </motion.section>
          
      {/* Sponsors & Footer Section */}
             <motion.section 
         ref={sponsorsRef}
         data-section="sponsors"
         className="py-20 bg-black min-h-screen"
         initial={{ opacity: 0, y: 120, scale: 0.8 }}
         animate={{ 
           opacity: isMobile ? 1 : (visibleSections.sponsors ? 1 : 0),
           y: isMobile ? 0 : (visibleSections.sponsors ? 0 : (currentSectionIndex > 5 ? -120 : 120)),
           scale: isMobile ? 1 : (visibleSections.sponsors ? 1 : 0.8)
         }}
         transition={{ duration: 1.4, ease: "easeInOut" }}
         whileHover="hovered"
       >
        {/* Sponsors Content */}
        <motion.div 
          className="text-center mb-16 group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: visibleSections.sponsors ? 1 : 0,
            y: visibleSections.sponsors ? 0 : 50
          }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
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
        </motion.div>

        {/* Animated Marquee */}
        <motion.div 
          className="relative w-full overflow-hidden py-8 backdrop-blur-sm mb-16"
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

        {/* Footer Content Integrated */}
        <footer className="bg-black border-t border-red-600 text-white px-[8%] lg:px-[12%] pt-8 font-mono">
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
        </footer>
      </motion.section>
    </div>
  );
}
