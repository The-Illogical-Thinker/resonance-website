import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import "../../Components/Team2018-2019/Team1.css"
import Team1c from "./Team1c.jsx";
import Team1cm from "./Team1cm.jsx";
import Team1dm from "./Team1dm.jsx";
// Assets
import v1 from "../../assets/v1.jpg";

import v2 from "../../assets/v1.jpg";
import v3 from "../../assets/v1.jpg";
import v4 from "../../assets/v1.jpg";
import v5 from "../../assets/v1.jpg";
import v6 from "../../assets/v1.jpg";
import MoviesCarousel from "../MoviesCarousel/MoviesCarousel.jsx";
import Footer from "../Footer/Footer.jsx";

const Team1 = () => {
  const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      setAnimate(true);
    }, []);
  
    return (
      <main className="w-full bg-[#101010] min-h-screen pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
        {/* container 1 */}
        <section className="relative z-10">
          <div className=" mx-auto px-4 pt-[20%] sm:pt-[15%] md:pt-[10%] pb-[12%] md:pb-[5%]">
            <div className="text-center relative">
              <div className="Jointe">
                <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
                  <span className="section-heading">Team Member</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
  
        <hr className="bg-black border-b border-red-500" />
  
        {/* container 2 */}
        <div className="mt-10 mb-16">
          <h2 className="section-heading"></h2>
          <div>
            <div className="w-full flex justify-center">
              <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
                <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                  Team 2018-2019
                </span>
              </h2>
              
            </div>
            <div>
              <Carousel />
            </div>
          </div>
          {/* Year 2019-2020 */}
          <div>
            <div className="w-full flex justify-center">
              <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
                <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                  Team 2019-2020
                </span>
              </h2>
              
            </div>
            <div>
              <Carousel />
            </div>
          </div>
          {/* Year 2022-2023 */}
          <div>
            <div className="w-full flex justify-center">
              <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
                <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                  Team 2022-2023
                </span>
              </h2>
              
            </div>
            <div>
              <Carousel />
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center">
              <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
                <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                  Team 2023-2024
                </span>
              </h2>
              
            </div>
            <div>
              <Carousel />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  };

export default Team1;