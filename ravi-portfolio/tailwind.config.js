/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional font
      },
      colors: {
        primary: '#3B82F6', // Blue for trust/tech
        secondary: '#10B981', // Green for success/growth
        dark: '#0F172A', // Slate 900
        darker: '#020617', // Slate 950
        card: '#1E293B', // Slate 800
      }
    },
  },
  plugins: [],
}
