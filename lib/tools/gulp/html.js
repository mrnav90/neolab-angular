'use strict';

import Gulp from 'gulp';
import { APP_INDEX, BUILD_PATH } from '../config';

export default function Html() {
  return Gulp.src(APP_INDEX).pipe(Gulp.dest(BUILD_PATH));
}
