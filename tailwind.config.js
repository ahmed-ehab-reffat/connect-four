/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7945FF",
        "dark-purple": "#5C2DD5",
        red: "#FD6687",
        "dark-red": "#FD4D73",
        yellow: "#FFCE67",
        "dark-yellow": "#FFBE34",
      },
      backgroundImage: {
        "icon-check": "url('./src/assets/images/icon-check.svg')",
        "icon-check-hover": "url('./src/assets/images/icon-check-hover.svg')",
        "board-black": "url('./src/assets/images/board-layer-black-large.svg')",
        "board-white": "url('./src/assets/images/board-layer-white-large.svg')",
        "player-one": "url('./src/assets/images/player-one.svg')",
        "player-two": "url('./src/assets/images/player-two.svg')",
        cpu: "url('./src/assets/images/cpu.svg')",
        "counter-red": "url('./src/assets/images/counter-red-large.svg')",
        "counter-yellow": "url('./src/assets/images/counter-yellow-large.svg')",
        "marker-red": "url('./src/assets/images/marker-red.svg')",
        "marker-yellow": "url('./src/assets/images/marker-yellow.svg')",
        "turn-red": "url('./src/assets/images/turn-background-red.svg')",
        "turn-yellow": "url('./src/assets/images/turn-background-yellow.svg')",
      },
    },
  },
  plugins: [],
};
