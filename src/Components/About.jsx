import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image with fade + slide from left */}
      <motion.img
        src="/Gokart.png"
        alt="REEV"
        className="about-img"
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05, filter: "brightness(110%)" }}
      />

      {/* Text with fade + slide from right */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="about-title">
          About Gokart
          {/* underline effect same as in Reev2 */}
          <motion.div
            className="about-underline"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          />
        </h2>
        <p>
          Resonance Racing is a Collegiate Motorsports club of AISSMS COE which
          provides an opportunity for students to pursue their passion for
          automobile engineering. GO KART team is a subsidiary of Resonance
          Racing which was started in 2014 with the aim of competing in National
          level Go Karting Championships. Resonance Racing Go-kart is highly
          backed by college administration, and experienced faculty advisers.
          Team consists of highly technical and non-technical skilled members
          who together in unison manufacture a state-of-the-art Champion
          Go-kart Vehicle.
        </p>
      </motion.div>
    </motion.section>
  );
}
