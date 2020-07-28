/* eslint-disable */
const webpack = require("webpack");
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {webpack.Configuration} */
const config = {
  entry: join(__dirname, "app", "renderer", "index.tsx"),
  output: {
    path: join(__dirname, "build"),
    filename: "bundle.js",
  },
  target: "electron-renderer",
  devtool:
    process.env.NODE_ENV === "development" ? "inline-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: require.resolve("./tsconfig.renderer.json"),
            },
          },
        ],
        exclude: [/node_modules/, /app\/main/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public", "index.html"),
      favicon: join(__dirname, "public", "favicon.ico"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  performance: false,
};

module.exports = config;
