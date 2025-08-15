import React, { useEffect, useRef, useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";

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
  const reeRef = useRef(null);
  const saeRef = useRef(null);
  const taeRef = useRef(null);

  // New state and ref for the text animation
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [heroTextVisible, setHeroTextVisible] = useState(false);

  // New state and ref for the image animation
  const imageRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeroTextVisible(true);
    }, 200); // Delay for smoother entry
  }, []);

  // Fade-in animation on load
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = "0";
      setTimeout(() => {
        heroRef.current.style.transition = "opacity 1s ease-in-out";
        heroRef.current.style.opacity = "1";
      }, 100);
    }
  }, []);

  // Scroll animation for REEV & SAEINDIA
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (reeRef.current) {
        reeRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (saeRef.current) {
        saeRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (taeRef.current) {
        taeRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for the text slide-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Effect for the new image slide-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  // Text animation in/out
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay text entry so it follows image
          setImageVisible(true);
          setTimeout(() => setAboutVisible(true), 200); // 200ms delay
        } else {
          // Delay text exit so it follows image
          setAboutVisible(false);
          setTimeout(() => setImageVisible(false), 200); // reverse order
        }
      },
      { threshold: 0.01 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  // for gokart

  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const heading = sectionRef.current.querySelector(".learn-more-line");
          const cards = sectionRef.current.querySelectorAll(".vehicle-card");

          if (entry.isIntersecting) {
            heading.classList.add("active");
            cards.forEach((card) => card.classList.add("active"));
          } else {
            heading.classList.remove("active");
            cards.forEach((card) => card.classList.remove("active"));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // sponsors

  


  return (
    <div className="w-full">
      {/* Hero Section */}

      <section
        ref={heroRef}
        className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden hero-section"
        style={{ opacity: 1, transition: "opacity 1s ease-in-out" }}
      >
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
          }}
        ></video>

        <div
          className={`
      absolute text-center text-white transition-all duration-1000 ease-out
      ${
        heroTextVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full"
      }
    `}
        >
          <h1
            ref={reeRef}
            className="text-[60px] md:text-[130px] font-bold italic"
            style={{
              fontFamily: "cursive",
              transition: "transform 0.3s ease",
              color: "red",
            }}
          >
            REEV
          </h1>
          <h2
            ref={saeRef}
            className="text-[40px] md:text-[90px]"
            style={{ fontFamily: "math", transition: "transform 0.3s ease" }}
          >
            SAEINDIA
          </h2>
          <button
            className="absolute"
            ref={taeRef}
            style={{
              fontFamily: "math",
              transition: "transform 0.3s ease",
              color: "red",
            }}
          >
            <a href="#REEV">Scroll </a>
          </button>
        </div>
      </section>

      <br></br>
      <br></br>
      {/* About Section with Splide AutoScroll */}
      <div
        id="REEV"
        className="relative text-center w-full py-[10px] pt-0"
      ></div>

      {/*ADD ANIMATION SECTION*/}
      <div className="home">
        <section className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 pt-0 bg-black ">
          {/* Image Section */}
          <div
            ref={imageRef}
            className={`
            flex-1 relative overflow-hidden rounded-2xl shadow-2xl
            transition-all duration-1000 ease-out
            ${
              imageVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-x-full"
            }
          `}
            style={{
              transitionProperty: "transform, opacity",
              transitionDelay: imageVisible ? "0ms" : "0ms",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500"></div>
            <img
              alt="About REEV"
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
              src={Img}
            />
          </div>

          {/* Text Section */}
          <div
            ref={aboutRef}
            className={`
            flex-1 text-center lg:text-left
            transition-all duration-1000 ease-out
            ${
              aboutVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-full"
            }
          `}
            style={{
              transitionDelay: aboutVisible ? "200ms" : "0ms",
            }}
          >
            <h2 className="about-reev-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-wide font-mono uppercase">
              About REEV
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
              "Globally we are witnessing a technology shift in the automotive
              industry from conventional fuel-powered vehicles to alternative
              fuel-powered vehicles. With the Indian government's initiative
              towards faster adoption of EVs through FAME-II policy, we are
              aligned to take this opportunity to develop indigenous solutions
              for the Indian market."
            </p>
          </div>
        </section>
        <div
          ref={imageRef}
          className={`
              flex-1 relative overflow-hidden rounded-2xl shadow-2xl
              transition-all duration-1000 ease-out
              ${
                imageVisible
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-full"
              }
            `}
        ></div>
        <div
          ref={aboutRef}
          className={`
              flex-1 text-center lg:text-left
              transition-all duration-1000 ease-out
              ${
                aboutVisible
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform -translate-x-full"
              }
            `}
          style={{
            transitionDelay: aboutVisible ? "200ms" : "0ms",
          }}
        ></div>
      </div>

      {/* why join us */}
      <div className="JoinUs">
        <h2 className="learn-more-line">
          <span
            style={{
              fontWeight: "bold",
              lineHeight: "0",
              fontSize: "30px",
            }}
          >
            Why Join Us ?
          </span>
        </h2>

        <p>
          <br></br>
          lmportant to us, and we are always looking for passionate individuals
          to join our team. Whether you are a student, a professional, or simply
          someone who loves cars and technology, there is a place for you in our
          community. We offer various opportunities for learning, collaboration,
          and innovation. Join us in our mission to revolutionize the automotive
          industry with electric vehicles.
        </p>
      </div>

      {/* Work Section */}

      <div className="whyjoin-section" ref={sectionRef}>
        <div className="whyjoin-grid">
          {/* Whyjoin Cards 1 */}
          <div className="whyjoin-cards">
            <div className="cards-image">
              <img
                src={v1}
                alt="GoKart"
              />
            </div>
            <div className="cards-content">
              <div className="cards-headers">
                <h3 className="learn-more-line ">
                  <span
                    style={{
                      fontFamily: "cursive",
                      color: "red",
                    }}
                  >
                    REEV{" "}
                  </span>{" "}
                  Race
                </h3>
                <br />
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                "Globally we are witnessing a technology shift in the automotive
                industry from conventional fuel-powered vehicles to alternative
                fuel-powered vehicles. With the Indian government's initiative
                towards faster adoption of EVs through FAME-II policy, we are
                aligned to take this opportunity to develop indigenous solutions
                for the Indian market."
              </p>
            </div>
          </div>

          {/* Whyjoin Cards 2 */}
          <div className="whyjoin-cards">
            <div className="cards-image">
              <img
                src={v2}
                alt="GoKart"
              />
            </div>
            <div className="cards-content">
              <div className="cards-headers">
                <h3 className="learn-more-line">
                  <span
                    style={{
                      fontFamily: "cursive",
                      color: "red",
                    }}
                  >
                    REEV{" "}
                  </span>{" "}
                  GoCar
                </h3>
                <br />
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                "Globally we are witnessing a technology shift in the automotive
                industry from conventional fuel-powered vehicles to alternative
                fuel-powered vehicles. With the Indian government's initiative
                towards faster adoption of EVs through FAME-II policy, we are
                aligned to take this opportunity to develop indigenous solutions
                for the Indian market."
              </p>
            </div>
          </div>
          {/* Whyjoin Cards 3 */}
          <div className="whyjoin-cards">
            <div className="cards-image">
              <img
                src={v3}
                alt="GoKart"
              />
            </div>
            <div className="cards-content">
              <div className="cards-headers">
                <h3 className="learn-more-line">
                  <span
                    style={{
                      fontFamily: "cursive",
                      color: "red",
                    }}
                  >
                    REEV{" "}
                  </span>{" "}
                  GoCar
                </h3>
                <br />
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                "Globally we are witnessing a technology shift in the automotive
                industry from conventional fuel-powered vehicles to alternative
                fuel-powered vehicles. With the Indian government's initiative
                towards faster adoption of EVs through FAME-II policy, we are
                aligned to take this opportunity to develop indigenous solutions
                for the Indian market."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Section - Autoplay */}
      <div className="Joinme">
        <h2 className="learn-more-line">
          <span
            style={{
              fontWeight: "bold",
              lineHeight: "0",
              fontSize: "30px",
            }}
          >
            OUR FLEET
          </span>
        </h2>
      </div>
      <section className="py-10">
        <Carousel
          slides={[slideImg1, slideImg2, slideImg3]}
          autoplay={true}
          interval={3000}
        />
      </section>

      {/* Gokart */}
      {/* Gokart / OUR FLEET Section */}
      <div className="vehicles-section" ref={sectionRef}>
        <div className="Joinme">
          <h2 className="learn-more-line">
            <span
              style={{
                fontWeight: "bold",
                lineHeight: "0",
                fontSize: "30px",
              }}
            >
              OUR FLEET
            </span>
          </h2>
        </div>

        <div className="vehicles-grid">
          {/* Vehicle Card 1 */}
          <div className="vehicle-card reev-card">
            <div className="header">
              <h3>
                <span
                  style={{
                    fontFamily: "cursive",
                    color: "red",
                  }}
                >
                  REEV{" "}
                </span>
                Racer
              </h3>
            </div>
            <div className="card-content">
              <div className="card-image">
                <img
                  src={ev}
                  alt="REEV"
                />
              </div>
              <div className="card-header">
                <br></br>
                <span className="card-subtitle">Electric Hypercar</span>
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                "Globally we are witnessing a technology shift in the automotive
                industry from conventional fuel-powered vehicles to alternative
                fuel-powered vehicles. With the Indian government's initiative
                towards faster adoption of EVs through FAME-II policy, we are
                aligned to take this opportunity to develop indigenous solutions
                for the Indian market."
              </p>
              <button className="vehicle-cta">
                <span
                  className="about-reev-heading"
                  style={{
                    fontFamily: "cursive",
                    color: "red",
                    fontSize: "19px",
                  }}
                >
                  Learn More{" "}
                </span>{" "}
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Vehicle Card 2 */}
          <div className="vehicle-card reev-card">
            <div className="header">
              <h3>
                <span
                  style={{
                    fontFamily: "cursive",
                    color: "red",
                  }}
                >
                  REEV{" "}
                </span>{" "}
                GoCar
              </h3>
            </div>
            <div className="card-content">
              <div className="card-image">
                <img
                  src={go}
                  alt="GoKart"
                />
              </div>
              <div className="card-header">
                <br></br>
                <span className="card-subtitle">Electric Car</span>
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                "Globally we are witnessing a technology shift in the automotive
                industry from conventional fuel-powered vehicles to alternative
                fuel-powered vehicles. With the Indian government's initiative
                towards faster adoption of EVs through FAME-II policy, we are
                aligned to take this opportunity to develop indigenous solutions
                for the Indian market."
              </p>
              <button className="vehicle-cta">
                <span
                  className="about-reev-heading"
                  style={{
                    fontFamily: "cursive",
                    color: "red",
                    fontSize: "19px",
                  }}
                >
                  Learn More{" "}
                </span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End of Gokart / OUR FLEET Section */}

      {/* End of Gokart */}
      <div className="JoineUs">
        <h2 className="learn-more-line">
          <span
            style={{
              fontWeight: "bold",
              lineHeight: "0",
              fontSize: "30px",
              marginBottom: "20%",
            }}
          >
            Sponsors
          </span>
        </h2>

        {/* Work Section */}

        {/* Footer Section */}
        {/* Footer Section */}
        <div className="marquee-box">
          <marquee behavior="alternate" direction="">
            <div className="marquee-content flex flex-row gap-[200px]">
              <div className="flex items-center gap-3">
                <img src={slideImg1} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl ">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Connectivity{" "}
                    </span>
                  </h2>
                  <p className="text-md">Collaborate with others</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg2} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Graphic Designing{" "}
                    </span>
                  </h2>
                  <p className="text-md">To create effectiveness</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg3} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Readability
                    </span>
                  </h2>
                  <p className="text-md">Proper spacing & font</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg4} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Professional Branding
                    </span>
                  </h2>
                  <p className="text-md">Consistent tone & voice</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg5} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      User-friendliness
                    </span>
                  </h2>
                  <p className="text-md">Quick to get into</p>
                </div>
              </div>
              {/* Repeat for seamless scrolling */}
              <div className="flex items-center gap-3">
                <img src={slideImg1} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Connectivity
                    </span>
                  </h2>
                  <p className="text-md">Collaborate with others</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg2} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Graphic Designing
                    </span>
                  </h2>
                  <p className="text-md">To create effectiveness</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg3} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Readability
                    </span>
                  </h2>
                  <p className="text-md">Proper spacing & font</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg4} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      Professional Branding
                    </span>
                  </h2>
                  <p className="text-md">Consistent tone & voice</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={slideImg5} className="w-20 h-20 invert" alt="" />
                <div>
                  <h2 className="text-4xl">
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      User-friendliness
                    </span>
                  </h2>
                  <p className="text-md">Quick to get into</p>
                </div>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}
