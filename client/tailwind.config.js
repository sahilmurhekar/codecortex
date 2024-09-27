/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to your source files
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
      },
      colors: {
        start: "#4872A7",
        end: "#00214A",
        cardbg: "#0A0A0A",
        phcolor: "#59A3FF",
      },
      backgroundImage: {
        gridbg: "url('C:Users/visha/tam_landingpagesrcimages/bluegrid.png')",
      },
    },
  },
  plugins: [],
};
