module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Resolves CSS imports
          "postcss-loader", // Processes CSS with PostCSS
        ],
      },
    ],
  },
};
