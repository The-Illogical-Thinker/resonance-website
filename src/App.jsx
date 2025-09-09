import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/Index";
import Footer from "./Components/Footer/Footer";
import Achievements from "./Components/Achievements/Achievements";
import logo from "./assets/logo.png";
import applogo from "./assets/gears-138199.gif";
import About from "./Components/About";
import Carousl from "./Components/Carousl";
import Timeline from "./Components/Timeline";
import Reev from "./Reev";



function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Custom cursor logic - works on all routes
  useEffect(() => {
    // Don't initialize cursor during loading
    if (loading) return;

    // Detect mobile device
    const isMobileDevice = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Only add custom cursor on desktop
    if (isMobileDevice) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

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

    document.addEventListener('mousemove', moveCursor);
    
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
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      observer.disconnect();
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <img src={logo} alt="Resonance Racing" className="w-64 mb-6" />
        <img src={applogo} alt="Loading animation" className="h-30 w-[120px]" />
      </div>
    );
  }


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/achievements" element={<Achievements />} />
         <Route
          path="/gokart"
          element={
            <>
              <About />
              <Carousl />
              <Timeline />
            </>
          }
        />
          <Route path="/reev" element={<Reev />} />
      </Routes>
    </>
  );
}

export default App;
