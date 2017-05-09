'use strict';

import Gulp from 'gulp';
import { ASSETS_FILES, BUILD_PATH } from '../config';

export default function CopyAssets() {
  return Gulp.src(ASSETS_FILES).pipe(Gulp.dest(BUILD_PATH));
}
