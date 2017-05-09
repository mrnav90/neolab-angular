'use strict';

import Gulp from 'gulp';
import HtmlMin from 'gulp-htmlmin';
import GulpRevReplace from 'gulp-rev-replace';
import { BUILD_PATH, PUBLIC_HTML, PUBLIC_MANIFEST } from '../config';

export default function FinishRevision() {
  let manifest = Gulp.src(PUBLIC_MANIFEST);
  return Gulp.src(PUBLIC_HTML)
    .pipe(HtmlMin({ collapseWhitespace: true }))
    .pipe(GulpRevReplace({ manifest: manifest }))
    .pipe(Gulp.dest(BUILD_PATH));
}
