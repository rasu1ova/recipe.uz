/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "opacity-half-color": "var(--opacity-half-color)",
        "opacity-full-color": "var(--opacity-full-color)",
        "grey":"var(--grey)",
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },
    minHeight: {
      '50vh': '51vh',
    }
  },
  plugins: [],
};
