/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#E6F2FF", // Lightest blue
          100: "#B3DDFF", // Light blue
          200: "#6AB0FF", // Soft medium blue
          300: "#3A8EFF", // Medium blue
          400: "#1E5EFF", // Dark blue
          500: "#0D47A1", // Darkest blue
          white: "#FFFFFF",
        },
      },
      screens: {
        xs: "350px",
        slg: "900px",
      },
      dropShadow: {
        green: "10px 35px 35px rgba(79, 159, 118, 0.8)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontFamily: {
        Poppins: ["var(--font-poppins)"],
        Manrope: ["var(--font-manrope)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        1500: "1500ms",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        ping: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "image-float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "image-float-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in-left": "fade-in-left 0.7s ease-out",
        "fade-in": "fade-in 0.7s ease-out",
        "image-float": "image-float 3s ease-in-out infinite",
        "image-float-slow": "image-float-slow 4s ease-in-out infinite",
      },
	  boxShadow: {
        'brand-soft': '0 4px 6px -1px rgba(30, 94, 255, 0.1), 0 2px 4px -1px rgba(30, 94, 255, 0.06)',
        'brand-medium': '0 10px 15px -3px rgba(30, 94, 255, 0.2), 0 4px 6px -2px rgba(30, 94, 255, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
