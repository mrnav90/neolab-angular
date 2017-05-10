'use strict';

import Webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { DIST_PATH, MAIN_JS, API_URL } from '../config';

module.exports = {
  output: {
    path: DIST_PATH,
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
        test: /\.json$/,
        loader: require.resolve('json-loader')
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: require.resolve('url-loader')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]'
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
    new ExtractTextPlugin('style.css'),
    new Webpack.DefinePlugin({
      'API_URL': JSON.stringify(API_URL)
    })
  ]
};
