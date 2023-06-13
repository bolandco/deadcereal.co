const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        // pebbleRed:       "#FF5757",
        // pebbleOffRed:    "#D93C3C",

        // pebbleOrange:    "#FAAE0F",
        // pebbleOffOrange: "#D98E04",

        // pebbleYellow:    "#FFEE33",
        // pebbleOffYellow: "#D9C22E",

        // pebbleGreen:     "#CBDC49",
        // pebbleOffGreen:  "#A1B82D",

        // pebbleBlue:      "#02B7ED",
        // pebbleOffBlue:   "#0077B6",

        // pebblePurple:    "#E26298",
        // pebbleOffPurple: "#B23A6C"

        cerealLightBlue:    "#A5D8DD",
        cerealBlue:         "#2998B5",
        cerealDarkBlue:     "#0077B6",

        cerealLightOrange:  "#FFD25A",
        cerealOrange:       "#FFAF57",
        cerealDarkOrange:   "#D98E04",

        cerealLightYellow:  "#FFF8B3",
        cerealYellow:       "#FFEE33",
        cerealDarkYellow:   "#D9C22E",

        cerealLightRed:     "#FFA69E",
        cerealRed:          "#D9564D",
        cerealDarkRed:      "#D93C3C",

        cerealLightSage:    "#D1E8E2",
        cerealSage:         "#A5B171",
        cerealDarkSage:     "#A1B82D",

        cerealLightGreen:   "#B5EAD7",
        cerealGreen:        "#3E9D8F",
        cerealDarkGreen:    "#2D6A4F",

        cerealLightPink:    "#F9C1E1",
        cerealPink:         "#F2B9FE",
        cerealDarkPink:     "#E26298",

        cerealLightPurple:  "#D9C2FF",
        cerealPurple:       "#9B94E6",
        cerealDarkPurple:   "#6C63FF",

        cerealLightBrown:   "#E2C4A6",
        cerealBrown:        "#A67C52",
        cerealDarkBrown:    "#6C4B1A",

        cerealLightGray:    "#E2E2E2",
        cerealGray:         "#A5A5A5",
        cerealBlack:        "#2D2D2D",

        cerealLightWhite:   "#F9F9F9",
        cerealWhite:        "#F2F2F2",
        cerealDarkWhite:    "#E2E2E2"
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
