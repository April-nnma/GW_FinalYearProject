/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      // spacing: {
      //   2: "2px",
      //   4: "4px",
      //   6: "6px",
      //   8: "8px",
      //   10: "10px",
      // },
      // borderRadius: {
      //   6: "6px",
      //   10: "10px",
      //   16: "16px",
      // },
    },
  },
  plugins: [],
};
