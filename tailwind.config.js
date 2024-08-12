/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3C3C3C",
          "primary-content": "#F5F5F5",
          secondary: "#FF5A5F",
          "secondary-content": "#1F1F1F",
          "base-100": "#F5F5F5",
          neutral: "#3C3C3C",
          "neutral-content": "#F5F5F5",
        },
      },
    ],
  },
};
