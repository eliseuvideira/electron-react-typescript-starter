/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { required: requiredKeys } = require('dotenv-safe').config();

/** @type {webpack.Configuration} */
const config = {
  entry: join(__dirname, 'index.ts'),
  output: {
    path: join(__dirname, '..', '..', 'build', 'main'),
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
      typescript: { configFile: join(__dirname, 'tsconfig.json') },
    }),
    new webpack.EnvironmentPlugin(requiredKeys),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  performance: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = config;
