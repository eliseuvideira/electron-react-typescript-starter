/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');

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
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: require.resolve('./tsconfig.main.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.EnvironmentPlugin(requiredKeys)],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  performance: false,
};

module.exports = config;
