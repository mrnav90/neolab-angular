'use strict';

import Webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { PUBLIC_PATH, MAIN_JS, API_URL } from '../config';

module.exports = {
  output: {
    path: PUBLIC_PATH,
    filename: MAIN_JS
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: require.resolve('url-loader')
      },
      {
        test: /\.json$/,
        loader: require.resolve('json-loader')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new Webpack.DefinePlugin({
      'API_URL': JSON.stringify(API_URL)
    }),
    new ExtractTextPlugin('style.css'),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      test: /\.(js|jsx)$/,
      compress: {
        dead_code: false,
        conditionals: false,
        unused: false
      },
      output: { comments: false }
    })
  ]
};
