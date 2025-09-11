import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/Index";
import Achievements from "./Components/Achievements/Achievements";
import logo from "./assets/logo.png";
import applogo from "./assets/gears-138199.gif";
import About from "./Components/GoKart/About";
import Carousl from "./Components/GoKart/Carousl";
import Timeline from "./Components/GoKart/Timeline";
import Reev from "./Components/Reev/Reev";
import Team1 from "./Components/Team2018-2019/Team1";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";



function App() {

  // Custom cursor logic - works on all routes
  useEffect(() => {

    // Detect mobile device
    const isMobileDevice = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Only add custom cursor on desktop
    if (isMobileDevice) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addHoverEffect = () => {
      cursor.classList.add('hover');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('hover');
    };

    const hideCursor = () => {
      cursor.style.opacity = '0';
    };

    const showCursor = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    // Re-query interactive elements when route changes
    const observer = new MutationObserver(() => {
      const newInteractiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      newInteractiveElements.forEach(el => {
        el.addEventListener('mouseenter', addHoverEffect);
        el.addEventListener('mouseleave', removeHoverEffect);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      observer.disconnect();
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route
          path="/gokart"
          element={
             <main className="w-full bg-[#101010] min-h-screen pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
              <About />
              <Carousl />
              <Timeline />
            </main>
          }
        />
        <Route path="/team1" element={<Team1 />} />
        <Route path="/reev" element={<Reev />} />
      </Routes>
    </>
  );
}

export default App;
