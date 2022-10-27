module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ], // remove unused styles in production
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 0 60px -15px rgba(255, 255, 255, 0.9)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
