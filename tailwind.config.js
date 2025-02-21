/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        // Background hero menggunakan gambar di public/images
        'hero-pattern': "url('/images/hero-bg.jpeg')"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" }
        }
      },
      animation: {
        shimmer: "shimmer 2s linear infinite"
      }
    }
  },
  plugins: []
}
