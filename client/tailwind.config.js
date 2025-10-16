const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monaSans: ["var(--font-mona-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
