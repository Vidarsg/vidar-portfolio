// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // slate-900
        text: "#e5e7eb",       // gray-200
        subtext: "#94a3b8",    // slate-400
        accent: "#38bdf8",     // sky-400
        white: "#fff",
        black: "#000",
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },

  plugins: [],
};
