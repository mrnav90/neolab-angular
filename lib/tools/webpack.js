'use strict';

import Path from 'path';
import Dotenv from 'dotenv';
import Webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development';

let webpackOutput = {
  path: Path.join(__dirname, DEVELOPMENT ? 'dist' : 'public'),
  filename: 'main.js'
};

let webpackModules = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
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
      loader: 'json-loader'
    },
    {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader'
    },
    {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]'
      ]
    }
  ]
};

let webpackPlugins = [
  new Webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
  new ExtractTextPlugin('style.css'),
  new Webpack.DefinePlugin({
    'API_URL': JSON.stringify(process.env.API_URL)
  })
];

if (!DEVELOPMENT) {
  webpackModules.loaders[webpackModules.loaders.length - 1]
    .loaders
    .push('image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false');
  webpackPlugins.push(
    new ExtractTextPlugin('style.css'),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      test: /\.(js|jsx)$/,
      compress: {
        conditionals: false,
        unused: false
      },
      output: { comments: false }
    })
  );
}

module.exports = {
  entry: Path.join(__dirname, 'src/index.js'),
  output: webpackOutput,
  stats: { children: false },
  module: webpackModules,
  plugins: webpackPlugins
};
