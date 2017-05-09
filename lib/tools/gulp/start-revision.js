'use strict';

import Gulp from 'gulp';
import GulpRev from 'gulp-rev-all';
import { BUILD_PATH, PUBLIC_JS, PUBLIC_STYLE, PUBLIC_TEMPLATE } from '../config';

export default function StartRevision() {
  let revFiles = Gulp.src([ PUBLIC_TEMPLATE, PUBLIC_JS, PUBLIC_STYLE ]);
  return revFiles
    .pipe(GulpRev.revision())
    .pipe(Gulp.dest(BUILD_PATH))
    .pipe(GulpRev.manifestFile())
    .pipe(Gulp.dest(BUILD_PATH));
}
