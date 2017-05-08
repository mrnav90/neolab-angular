var Webpack = require('webpack');
var Path = require('path');

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: Path.join(__dirname),
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
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
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
