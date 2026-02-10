/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00CCE5',    // The primary cyan color
          dark: '#1E1E1E',    // Sidebar and Modal dark background
          bg: '#F8F9FB',      // Main dashboard light gray background
        },
        status: {
          success: '#22C55E', // Green for Positive pills
          error: '#F43F5E',   // Red for Negative pills
        }
      },
      borderRadius: {
        '3xl': '1.5rem',      // Used for main content cards
      }
    },
  },
  plugins: [],
}