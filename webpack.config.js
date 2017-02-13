const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  module : {
    rules : [
      {
        test    : /\.jsx?$/,
        exclude : /node_modules/,
        use     : 'babel-loader'
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './src/index.ejs',
      title : 'Advanced Bookmark'
    })
  ]
};

module.exports = config;
