const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-px-to-viewport": {
      viewportWidth: 1280,
      viewportHeight: 720,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false,
    },
    "postcss-media-minmax": {},
  },
};

export default config;
