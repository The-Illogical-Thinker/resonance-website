import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black border-t border-red-600 text-white px-[8%] lg:px-[12%] pt-8 py-[5%] font-mono">
        {/* Navigation Links */}
        <div className="mx-auto flex flex-wrap justify-center items-center gap-4 text-base py-6 mt-10">
          {["Home", "Achievements", "Team", "Go-Kart", "Reev", "Join Us"].map(
            (link, i) => (
              <React.Fragment key={i}>
                <a
                  href="#"
                  className="hover:text-red-600 transition-colors mx-3 text-white"
                >
                  {link}
                </a>
              </React.Fragment>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          {[
            { icon: "ri-instagram-line", url: "#" },
            { icon: "ri-facebook-circle-fill", url: "#" },
            { icon: "ri-linkedin-fill", url: "#" },
            { icon: "ri-youtube-fill ", url: "#" },
          ].map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center text-white hover:text-red-600 transition-all duration-300 border border-red-600/20 rounded-lg hover:border-red-600"
            >
              <i className={`${icon} text-3xl`}></i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2025 <span className="text-red-600 font-bold">REEV</span> Racing Club. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
