import React, { useRef, useState, useEffect } from "react";
import "./Team1c.css";

// Assets
import M3 from "../../assets/Boy.jpg";
import M4 from "../../assets/Dri.jpg";
import M5 from "../../assets/Mem1.jpg";

const movies = [
  {
    name: "Pooshan Raul",
    des: "Design",
    img: M5,
    link: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
  },
  {
    name: "Ashish Thakur",
    des: "Design",
    img: M5,
    link: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
  },
  {
    name: "Siddhesh Borse",
    des: "Design",
    img: M5,
    link: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
  },
  {
    name: "Samarjeet Aherrao",
    des: "Design",
    img: M5,
    link: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
  },
  {
    name: "Akshat Arage",
    des: "Design",
    img: M5,
    link: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
  },
  {
    name: "Heramb Khandve",
    des: "Design",
    img: M5,
    link: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
  },
    
];

const MoviesCarousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const scroll = (index) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  // Auto-scroll
  const startAutoScroll = () => {
    if (intervalRef.current) return; // prevent duplicate intervals
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % movies.length;
        scroll(newIndex);
        return newIndex;
      });
    }, 2500); // 2.5s interval
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <div
      className="movies-list"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      onTouchStart={stopAutoScroll}
      onTouchEnd={startAutoScroll}
    >
      <div className="card-container" ref={containerRef}>
        {movies.map((m, idx) => (
          <div className="card" key={idx}>
            <div className="card-img-blur-wrapper">
              <img src={m.img} alt={m.name} className="card-img" />
            </div>
            <div className="card-body">
              <h2 className="name">{m.name}</h2>
              <br />
              <h6 className="des">{m.des}</h6>

              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-btn"
                >
                  View LinkedIn
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
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Circle Indicators */}
      <div className="indicator-container">
        {movies.map((_, idx) => (
          <div
            key={idx}
            className={`indicator ${idx === currentIndex ? "active" : ""}`}
            onClick={() => scroll(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCarousel;