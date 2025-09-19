import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white px-[8%] lg:px-[12%] pt-8 py-[5%] font-mono">
        {/* Navigation Links */}
        <div className="mx-auto flex flex-wrap justify-center items-center gap-4 text-base py-6 mt-10">
          {[
          {name:"Home", href: "/"},
          {name:"Achievements", href: "/achievements"},
          {name:"Team", href: "/team1"},
          {name:"Go-Kart", href: "/gokart"},
          {name:"Reev", href: "/reev"},
          {name:"Join Us", href: "/joinus"}].map(
            (link, i) => (
              <React.Fragment key={i}>
                <a
                  href={link.href}
                  className="hover:text-red-600 transition-colors mx-3 text-white"
                >
                  {link.name}
                </a>
              </React.Fragment>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          {[
            { icon: "ri-instagram-line", url: "https://www.instagram.com/reev.racingclub/ " },
            { icon: "ri-facebook-circle-fill", url: "https://www.facebook.com/reev.racingclub/" },
            { icon: "ri-linkedin-fill", url: "https://www.linkedin.com/company/reev-racing-club/" },
            { icon: "ri-youtube-fill ", url: "https://www.youtube.com/channel/UCG1X_g89zOZb30nZS7gIk6Q" },
          ].map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center text-white hover:text-red-600 transition-all duration-300"
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
