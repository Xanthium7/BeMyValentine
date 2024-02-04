/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        poof: {
          "0%": {
            transform: "scale(1) rotate(0deg)",
          },
          "100%": {
            transform: "scale(0.25) rotate(360deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.35s ease-in-out infinite",
        poof: "poof 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
