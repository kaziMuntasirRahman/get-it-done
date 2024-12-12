/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      formTitle: 'text-2xl md:text-3xl  mt-16 mb-8'
    },
  },
  plugins: [require("daisyui")],
themes: ["light", "dark", "cupcake"],
}

