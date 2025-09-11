import React, { useEffect, useState, useRef } from "react";
import "./Achievements.css";
import { Link } from "react-router-dom";
import Team1 from "../../Components/Team2018-2019/Team1.jsx";



// Assets

import v1 from "../../assets/Picture3.jpg";
import v2 from "../../assets/1.jpg";
import v3 from "../../assets/Picture4.jpg";
import v4 from "../../assets/Picture6.jpg";
import v5 from "../../assets/Picture5.jpg";
import v6 from "../../assets/Picture255.jpg";
import Footer from "../Footer/Footer.jsx";

const Achievements = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="w-full bg-[#101010] min-h-screen pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
      {/* container 1 */}
      <section className="relative z-10">
        <div className="max-w-screen-lg mx-auto px-4 pt-[20%] sm:pt-[15%] md:pt-[10%] pb-[12%] md:pb-[5%]">
          <div className="text-center relative">
            <div className="Jointe">
              <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
                <span className="section-heading">Gokart ACHIEVEMENTS</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <hr className="bg-black border-b border-red-500" />

      {/* container 2 */}
      <div className="mt-10 mb-16">
        <h2 className="section-heading"></h2>
        {/* Year 2018-2019 */}
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                Year 2018-2019
              </span>
            </h2>
          </div>
          <div className="mt-10 mb-16 px-4 max-w-screen-lg mx-auto">
            {/* Image Cards */}
            <div
              className="grid gap-6 sm:grid-cols-2 items-start"
              ref={sectionRef}
            >
              {/* Card 1 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v1}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v2}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Text + Button Below */}
            <div className="flex flex-col items-center justify-center space-y-4 bg-[#212121] rounded-lg p-6 shadow-md text-center mt-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-light max-w-2xl">
                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >
                  Zeal Drag 2.0{" "}
                </span></b><br />
                •	Best Design<br />
                •	Drag Race Winner<br />
                •	2nd In Skidpad<br /><br />

                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >Indian Karting Championship 2</span></b><br />
                •	OVERALL 4TH<br />
                •	2ND IN SKID PAD<br /><br />

                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >National Super karting Championship</span></b><br />
                •	Overall, Runner Up<br />
                •	1st In Skidpad<br />
                •	1st In Build Quality<br />
                •	1st In Design<br />
                •	2nd In Traction<br />
                •	2nd In Acceleration Best Prototype<br />
                •	Design Award. <br /><br />

              </p>

{/*               <Link
                to="/team1"
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 inline-block"
              >
                View Team
              </Link> */}



            </div>
          </div>
        </div>
        {/* Year 2019-2020 */}
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-[8%] mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block">
                YEAR  2019-2020
              </span>
            </h2>
          </div>
          <div className="mt-10 mb-16 px-4 max-w-screen-lg mx-auto">
            {/* Image Cards */}
            <div
              className="grid gap-6 sm:grid-cols-2 items-start"
              ref={sectionRef}
            >
              {/* Card 1 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v3}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v4}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Text + Button Below */}
            <div className="flex flex-col items-center justify-center space-y-4 bg-[#212121] rounded-lg p-6 shadow-md text-center mt-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-light max-w-2xl">
                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >
                  Zealdrag 3.0 (2019) -Zeal College, Pune{" "}
                </span></b><br />
                •	Best Design Award<br />
                •	Overall Rank – 4<br />
                <br /><br />

                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >Indian Karting Championship 4 (2020)
                </span></b><br />
                •	Best Design Award<br />
                •	Overall Rank – 4<br /><br />


              </p>

{/*               <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                View Team
              </button> */}
            </div>
          </div>
        </div>
        {/* Year 2022-2023 */}
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-[8%] mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block">
                YEAR  2022-2023
              </span>
            </h2>
          </div>
          <div className="mt-10 mb-16 px-4 max-w-screen-lg mx-auto">
            {/* Image Cards */}
            <div
              className="grid gap-6 sm:grid-cols-2 items-start"
              ref={sectionRef}
            >
              {/* Card 1 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v5}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v6}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Text + Button Below */}
            <div className="flex flex-col items-center justify-center space-y-4 bg-[#212121] rounded-lg p-6 shadow-md text-center mt-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-light max-w-2xl">
                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >
                  Zealdrag 3.0 (2019) -Zeal College, Pune{" "}
                </span></b><br />
                •	Overall Rank In IKC 5: AIR 3<br />
                •	Acceleration: AIR 2<br />
                •	Skidpad: AIR 1<br />
                •	Autocross: AIR 2<br />
                •	Time trial: AIR 3<br />
                •	Qualification: AIR 1<br />
                •	Endurance: AIR 4<br />
                •	Best Sportsmanship: AIR 1<br />
                •	Best CAE: AIR 1<br />
                •	Virtuals: AIR 5

                <br /><br />

                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >Indian Karting Championship 4 (2020)
                </span></b><br />
                •	Best Design Award<br />
                •	Overall Rank – 4<br /><br />


              </p>

{/*               <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                View Team
              </button> */}
            </div>
          </div>
        </div>
        {/* Year 2023-2024 */}
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-[8%] mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block">
                YEAR  2023-2024
              </span>
            </h2>
          </div>
          <div className="mt-10 mb-16 px-4 max-w-screen-lg mx-auto">
            {/* Image Cards */}
            <div
              className="grid gap-6 sm:grid-cols-2 items-start"
              ref={sectionRef}
            >
              {/* Card 1 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v5}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={v6}
                  alt="GoKart"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Text + Button Below */}
            <div className="flex flex-col items-center justify-center space-y-4 bg-[#212121] rounded-lg p-6 shadow-md text-center mt-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-light max-w-2xl">
                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >
                  Zealdrag 3.0 (2019) -Zeal College, Pune{" "}
                </span></b><br />
                •	Overall Rank In IKC 5: AIR 3<br />
                •	Acceleration: AIR 2<br />
                •	Skidpad: AIR 1<br />
                •	Autocross: AIR 2<br />
                •	Time trial: AIR 3<br />
                •	Qualification: AIR 1<br />
                •	Endurance: AIR 4<br />
                •	Best Sportsmanship: AIR 1<br />
                •	Best CAE: AIR 1<br />
                •	Virtuals: AIR 5

                <br /><br />

                ⮚<b><span
                  style={{
                    fontFamily: "sans-serif",
                    color: "Red",
                  }}
                >Indian Karting Championship 4 (2020)
                </span></b><br />
                •	Best Design Award<br />
                •	Overall Rank – 4<br /><br />


              </p>

{/*               <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                View Team
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Achievements;