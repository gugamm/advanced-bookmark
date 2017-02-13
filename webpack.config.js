const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDORS = [
  'react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux',
  'redux', 'redux-form'
];

const config = {
  entry : {
    bundle : './src/index.js',
    vendor : VENDORS
  },
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : '[name].[chunkhash].js'
  },
  module : {
    rules : [
      {
        test    : /\.jsx?$/,
        exclude : /node_modules/,
        use     : 'babel-loader'
      },
      {
        test    : /\.css$/,
        use     : ExtractTextPlugin.extract({
          loader         : 'css-loader',
          fallbackLoader : 'style-loader'
        })
      }
    ]
  },
  devServer : {
    contentBase : path.resolve(__dirname, 'dist'),
    historyApiFallback : true
  },
  plugins : [
    new ExtractTextPlugin("[name].[contenthash].css"),
    new webpack.optimize.CommonsChunkPlugin({
      names : ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template : './src/index.ejs',
      title : 'Advanced Bookmark'
    })
  ]
};

module.exports = config;
