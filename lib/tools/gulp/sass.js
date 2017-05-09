'use strict';

import Gulp from 'gulp';
import WebpackStream from 'webpack-stream';
import WebpackConfig from '../webpack';
import { APP_JS, BUILD_PATH } from '../config';

export default function Sass() {
  return Gulp.src(APP_JS).pipe(WebpackStream(WebpackConfig)).pipe(Gulp.dest(BUILD_PATH));
}
