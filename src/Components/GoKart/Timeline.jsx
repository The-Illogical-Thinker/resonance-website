import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

export default function Timeline() {
  const events = [
    {
      season: "2018-2019",
      details: "Launched REEV with innovative electric vehicle projects.",
      image: "/season1.jpg",
    },
    {
      season: "2019-2020",
      details: "Mukul Wadhokar (Captain)",
      image: "/season 2.jpg",
    },
    {
      season: "2022-2023",
      details: "Shubham Landage (CAPTAIN), Samarjeet Aherrao (VICE CAPTAIN)",
      image: "/season3.png",
    },
    {
      season: "2023-2024",
      details: "Kaushal More (CAPTAIN)",
      image: "/season4.png",
    },
    {
      season: "2024-2025",
      details: "Ketan sonawane (CAPTAIN)",
      image: "/season5.jpg",
    },
  ];

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / docHeight) * 100;
      setScrollPercent(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section className="timeline relative">
      <div className="timeline-header">
        <h2>2014 Club inauguration</h2>
      </div>

      {/* Moving Ball */}
      <motion.div
        className="moving-ball"
        style={{ top: `${scrollPercent}%` }}
      ></motion.div>

      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        const isRed = event.season; // highlight 2023-24 in red

        return (
          <motion.div
            key={index}
            className={`timeline-item ${isEven ? "left" : "right"}`}
            initial={{ opacity: 0, y: 80, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Section */}
            <motion.div
              className="content"
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 style={{ color: isRed ? "red" : "white" }}>{event.season}</h3>
            <p>{event.details}</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="image-box"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }} // desktop hover
              whileTap={{ scale: 1.05 }}   // mobile tap
            >
              <motion.img
                src={event.image}
                alt={event.season}
                className="timeline-img"
                initial={{ filter: "brightness(50%)" }}
                whileHover={{ filter: "brightness(110%)" }} // desktop
                whileTap={{ filter: "brightness(110%)" }}   // mobile tap
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
    <Footer />
    </>
  );
}
