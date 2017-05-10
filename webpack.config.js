'use strict';

var Webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  stats: { children: false },
  externals: [ /^(?!\.|\/).+/i ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.json$/,
        loader: require.resolve('json-loader')
      }
    ]
  },
  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.IgnorePlugin(/vertx/)
  ]
};
