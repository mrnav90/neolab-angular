'use strict';

import Gulp from 'gulp';
import Dotenv from 'dotenv';
import WebpackStream from 'webpack-stream';
import WebpackConfig from './webpack.js';
import AppRootPath from 'app-root-path';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development' || true;
const PUBLIC_PATH = AppRootPath.resolve(process.env.PUBLIC_PATH || '/public');
const DIST_PATH = AppRootPath.resolve(process.env.DIST_PATH || '/dist');
const APP_JS = AppRootPath.resolve(process.env.APP_JS || '/src/index.js');
const JS_FILES = AppRootPath.resolve(process.env.JS_FILES || '/src/**/*.js');
const SCSS_FILES = AppRootPath.resolve(process.env.SCSS_FILES || '/src/**/*.scss');
const HTML_FILES = AppRootPath.resolve(process.env.HTML_FILES || '/src/**/*.html');
const ASSETS_FILES = AppRootPath.resolve(process.env.ASSETS_FILES || '/assets/**/*');
const BUILD_PATH = DEVELOPMENT ? DIST_PATH : PUBLIC_PATH;

exports.gulpCSS = () => {
  Gulp.src(APP_JS)
   .pipe(WebpackStream(WebpackConfig))
   .pipe(Gulp.dest(BUILD_PATH));
};

exports.copyImages = () => {
  Gulp.src(ASSETS_FILES)
    .pipe(Gulp.dest(BUILD_PATH));
};
