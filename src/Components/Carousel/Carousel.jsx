import React, { useEffect, useRef } from "react";
import "./styles.css";

const movies = [
  {
    name: "AWS certificate",
    image:
      "https://c4.wallpaperflare.com/wallpaper/646/182/375/blue-background-mercedes-benz-mercedes-wallpaper-preview.jpg",
  },
  {
    name: "Accenture certificate",
    image:
      "https://c4.wallpaperflare.com/wallpaper/646/182/375/blue-background-mercedes-benz-mercedes-wallpaper-preview.jpg",
  },
  {
    name: "Tata certificate",
    image:
      "https://c4.wallpaperflare.com/wallpaper/646/182/375/blue-background-mercedes-benz-mercedes-wallpaper-preview.jpg",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const sliders = useRef([]);
  const slideIndex = useRef(0);

  const createSlide = () => {
    if (slideIndex.current >= movies.length) slideIndex.current = 0;
    const { image } = movies[slideIndex.current];

    const slide = document.createElement("div");
    const img = document.createElement("img");

    img.src = image;
    img.className = "slider-img";

    slide.className = "slider";
    slide.appendChild(img);

    carouselRef.current.appendChild(slide);
    sliders.current.push(slide);

    // Shift slides left
    if (sliders.current.length > 1) {
      const offset = sliders.current.length - 2;
      sliders.current[0].style.marginLeft = `calc(-${100 * offset}% - ${
        30 * offset
      }px)`;
    }

    slideIndex.current++;
  };

  useEffect(() => {
    // Create initial slides
    for (let i = 0; i < 3; i++) createSlide();

    const interval = setInterval(createSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const heading = sectionRef.current.querySelector(".learns-more-line");
          if (entry.isIntersecting) {
            heading.classList.add("active");
          } else {
            heading.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="carousel-container" ref={sectionRef}>
      <div className="Jointus">
        <h2 className="learns-more-line">
          <span
            style={{ fontWeight: "bold", lineHeight: "1.5", fontSize: "30px" }}
          >
            Why Join Us ?
          </span>
        </h2>
        <br />
      </div>
      <div className="carousel" ref={carouselRef}></div>
    </div>
  );
};

export default Carousel;
