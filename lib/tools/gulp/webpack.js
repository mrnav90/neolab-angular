'use strict';

import Gulp from 'gulp';
import WebpackStream from 'webpack-stream';
import WebpackConfig from '../webpack';
import { BUILD_PATH, APP_JS } from '../config';

export default function Webpack() {
  return Gulp.src(APP_JS).pipe(WebpackStream(WebpackConfig)).pipe(Gulp.dest(BUILD_PATH));
}
