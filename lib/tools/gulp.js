'use strict';

import Gulp from 'gulp';
import Dotenv from 'dotenv';
import WebpackStream from 'webpack-stream';
import WebpackConfig from './webpack.js';
import AppRootPath from 'app-root-path';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development' || true;
const BUILD_SRC = AppRootPath + '/public';
const DIST_SRC = AppRootPath + '/dist';
const SOURCE_APP = AppRootPath + '/src/index.js';
const SOURCE_JS = AppRootPath + '/src/**/*.js';
const SOURCE_CSS = AppRootPath + '/src/**/*.scss';
const SOURCE_TEMPLATE = AppRootPath + '/src/**/*.html';
const SOURCE_ICONS = AppRootPath + '/assets/icons/*';
const SOURCE_IMAGES = AppRootPath + '/assets/images/*';
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
