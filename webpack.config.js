const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const babel = require("@babel");

const bundleObj = {
  mode: 'production',
  entry: './client/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'client'),
      publicPath: '/',
    },
  },
};

module.exports = bundleObj;