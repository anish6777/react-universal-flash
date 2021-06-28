const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
