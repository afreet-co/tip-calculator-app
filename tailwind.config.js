module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Space Mono"', "system-ui"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        "cyan-dark": "#00494d",
        cyan: "#26c0ab",
        "gray-cyan": {
          300: "#f4fafa",
          500: "#c5e4e7",
          700: "#7f9c9f",
          900: "#5e7a7d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
