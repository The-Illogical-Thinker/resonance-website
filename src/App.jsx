import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/Index";
import Footer from "./Components/Footer/Footer";
import Achievements from "./Components/Achievements/Achievements";
import logo from "./assets/logo.png";
import applogo from "./assets/gears-138199.gif";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
