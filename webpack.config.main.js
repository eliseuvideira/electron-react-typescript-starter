/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { required: requiredKeys } = require('dotenv-safe').config();

/** @type {webpack.Configuration} */
const config = {
  entry: join(__dirname, 'app', 'main', 'index.ts'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  target: 'electron-main',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: ['@babel/preset-typescript'],
            plugins: ['react-hot-loader/babel'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: join(__dirname, 'tsconfig.main.json') },
    }),
    new webpack.EnvironmentPlugin(requiredKeys),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  performance: false,
};

module.exports = config;
