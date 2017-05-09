'use strict';

import Gulp from 'gulp';
import { APP_INDEX, BUILD_PATH } from '../config';

export default function CopyHtml() {
  return Gulp.src(APP_INDEX).pipe(Gulp.dest(BUILD_PATH));
}
