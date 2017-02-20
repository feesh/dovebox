var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry:  [
    './src/'
  ],
  output: {
    path: 'dist',
    publicPath: process.env.NODE_ENV === 'development'
      ? null
      : '/site_media/help/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loaders: ['json-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'css!' +
          'postcss!' +
          'sass?sourceMap'
        )
      },
      {
        test: /\.(png|woff|woff2|otf|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  postcss: function() {
    return [
      autoprefixer({
        browsers: ['ios >= 6']
      })
    ];
  },

  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        process.env.NODE_ENV ==='development'
          ? 'http://localhost:3334/estimate-json'
          : 'THE_ACTUAL_API_URL_HERE'),
    }),
  ],
  devtool: process.env.NODE_ENV === 'development'
    ? 'inline-source-map'
    : 'eval',
  devServer: {
    contentBase: './src',
    port: 3333
  }
};
