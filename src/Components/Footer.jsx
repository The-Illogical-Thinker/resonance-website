import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#home">Home</a>
        <span>|</span>
        <a href="#achievements">Achievements</a>
        <span>|</span>
        <a href="#team">Team</a>
        <span>|</span>
        <a href="#gokart">Go-Kart</a>
        <span>|</span>
        <a href="#reev">Reev</a>
        <span>|</span>
        <a href="#join">Join Us</a>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <p>© 2025 Reev and Gokart Racing Club. All rights reserved.</p>
    </footer>
  );
}
