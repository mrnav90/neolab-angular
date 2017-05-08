'use strict';

import Gulp from 'gulp';
import Dotenv from 'dotenv';
import Path from 'path';
import WebpackStream from 'webpack-stream';
import WebpackConfig from './webpack.js';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development' || true;
const BUILD_SRC = Path.join(__dirname, JSON.stringify(process.env.BUILD_SRC)) || Path.join(__dirname, 'public');
const DIST_SRC = Path.join(__dirname, JSON.stringify(process.env.BUILD_SRC)) || Path.join(__dirname, 'dist');
const SOURCE_APP = Path.join(__dirname, JSON.stringify(process.env.SOURCE_APP)) || Path.join(__dirname, 'src/index.js');
const SOURCE_JS = Path.join(__dirname, JSON.stringify(process.env.SOURCE_JS)) || Path.join(__dirname, 'src/**/*.js');
const SOURCE_CSS = Path.join(__dirname, JSON.stringify(process.env.SOURCE_CSS)) || Path.join(__dirname, 'src/**/*.scss');
const SOURCE_TEMPLATE = Path.join(__dirname, JSON.stringify(process.env.SOURCE_TEMPLATE)) || Path.join(__dirname, 'src/**/*.html');
const SOURCE_ICONS = Path.join(__dirname, JSON.stringify(process.env.SOURCE_ICONS)) || Path.join(__dirname, 'assets/icons/*');
const SOURCE_IMAGES = Path.join(__dirname, JSON.stringify(process.env.SOURCE_IMAGES)) || Path.join(__dirname, 'assets/images/*');
const BUILD_PATH = DEVELOPMENT ? DIST_SRC : BUILD_SRC;

exports.gulpCSS = () => {
  Gulp.src(SOURCE_APP)
   .pipe(WebpackStream(WebpackConfig))
   .pipe(Gulp.dest(BUILD_PATH));
};

exports.copyImages = () => {
  Gulp.src([ SOURCE_ICONS, SOURCE_IMAGES ])
      .pipe(Gulp.dest(BUILD_PATH));
};
