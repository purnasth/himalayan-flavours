/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "coffee-900": "#41140c",
        "coffee-800": "#5E3023",
        "coffee-700": "#895737",
        "coffee-600": "#C08552",
        "coffee-500": "#DAB49D",
        "coffee-400": "#FFE9D2",
        // "coffee-clr": "#3E2723",
        // "light-coffee-clr": "#FFE9D2",
        // "yellow-clr": "#FFDE59",
        dark: "#111111",
        light: "#fffbf3",
      },
      fontFamily: {
        title: ['"Cotta"', "Georgia", "Cambria", "serif"],
        body: ['"Mulish"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        inherit: "inherit",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
        "2xl": "1600px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1380px",
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [],
};
