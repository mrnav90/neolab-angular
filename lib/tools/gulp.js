'use strict';

import Gulp from 'gulp';
import Dotenv from 'dotenv';
import Path from 'path';
import WebpackStream from 'webpack-stream';
import WebpackConfig from './webpack.js';
import AppRootPath from 'app-root-path';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development' || true;
const BUILD_SRC = Path.join(AppRootPath, 'public');
const DIST_SRC = Path.join(AppRootPath, 'dist');
const SOURCE_APP = Path.join(AppRootPath, 'src/index.js');
const SOURCE_JS = Path.join(AppRootPath, 'src/**/*.js');
const SOURCE_CSS = Path.join(AppRootPath, 'src/**/*.scss');
const SOURCE_TEMPLATE = Path.join(AppRootPath, 'src/**/*.html');
const SOURCE_ICONS = Path.join(AppRootPath, 'assets/icons/*');
const SOURCE_IMAGES = Path.join(AppRootPath, 'assets/images/*');
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
