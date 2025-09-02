/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-33.333%)' },
           },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        Jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      
    
  },
  
  
  },
  plugins: [],
};
