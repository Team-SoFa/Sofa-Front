const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./sidePanel.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new Dotenv(), // .env 파일 로드
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      services: path.resolve(__dirname, "services"),
      reduxAlias: path.resolve(__dirname, "redux"), // reduxAlias로 로컬 디렉토리를 지정
    },
  },
  devtool: "inline-source-map",
};
