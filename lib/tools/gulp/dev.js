'use strict';

import Gulp from 'gulp';
import { APP_INDEX, JS_FILES, SCSS_FILES, HTML_FILES } from '../config';

export default function Dev() {
  return Gulp.start([ 'copy-html', 'copy-assets' ], () => {
    return Gulp.start([ 'webpack', 'template' ], () => {
      Gulp.watch(APP_INDEX, [ 'copy-html' ]);
      Gulp.watch(HTML_FILES, [ 'template' ]);
      Gulp.watch(JS_FILES, [ 'webpack' ]);
      Gulp.watch(SCSS_FILES, [ 'sass' ]);
    });
  });
}
