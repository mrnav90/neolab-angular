'use strict';

import Gulp from 'gulp';
import AngularTemplateCache from 'gulp-angular-templatecache';
import Rename from 'gulp-rename';
import Gzip from 'gulp-gzip';
import Uglify from 'gulp-uglify';
import HtmlMin from 'gulp-htmlmin';
import { HTML_FILES, DEVELOPMENT, PUBLIC_PATH, DIST_PATH, TEMPLATE_CACHE } from '../config';

export default function TemplateCache() {
  let templates = Gulp.src(HTML_FILES);
  templates.pipe(HtmlMin({ collapseWhitespace: true }));
  templates.pipe(AngularTemplateCache({ standalone: true }));
  templates.pipe(Uglify());
  templates.pipe(Rename(TEMPLATE_CACHE));
  return DEVELOPMENT ?
    templates.pipe(Gulp.dest(DIST_PATH)) :
    templates.pipe(Gzip({ append: false })).pipe(Gulp.dest(PUBLIC_PATH));
}
