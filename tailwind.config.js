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
      background: "#18181b",   // neutral-900 (very dark, not pitch black)
      text: "#f3f4f6",         // gray-100
      accent: "#3b82f6",       // blue-500 (solid blue)
      subtext: "#6b7280",      // gray-500
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      current: "currentColor",
    },
  },
  },

  plugins: [],
};
