/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight
  },
  plugins: [],
}