/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const { required: requiredKeys } = require('dotenv-safe').config();

/** @returns {webpack.Configuration} */
const getConfig = () => {
  if (isDev) {
    return {
      entry: join(__dirname, 'index.tsx'),
      output: {
        path: join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
      },
      target: 'electron-renderer',
      devServer: {
        historyApiFallback: true,
        port: 8080,
      },
      devtool: 'eval-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                cacheDirectory: true,
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
                plugins: ['react-hot-loader/babel'],
              },
            },
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
          },
        ],
      },
      performance: false,
      plugins: [
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            configFile: join(__dirname, 'tsconfig.json'),
          },
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.EnvironmentPlugin(requiredKeys),
        new HtmlWebpackPlugin({
          template: join(__dirname, 'public', 'index.html'),
          favicon: join(__dirname, 'public', 'favicon.ico'),
        }),
      ],
      resolve: {
        modules: ['node_modules'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    };
  }
  return {
    entry: join(__dirname, 'index.tsx'),
    output: {
      path: join(__dirname, '..', '..', 'build', 'renderer'),
      filename: 'bundle.js',
    },
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: true,
              presets: [
                ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
                '@babel/preset-react',
              ],
            },
          },
          exclude: [/node_modules/, /app\/main/],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    performance: false,
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: { configFile: join(__dirname, 'tsconfig.json') },
      }),
      new HtmlWebpackPlugin({
        template: join(__dirname, 'public', 'index.html'),
        favicon: join(__dirname, 'public', 'favicon.ico'),
      }),
      new webpack.EnvironmentPlugin(requiredKeys),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};

/** @type {webpack.Configuration} */
const config = getConfig();

module.exports = config;
