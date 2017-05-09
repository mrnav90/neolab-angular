'use strict';

import Gulp from 'gulp';

export default function Build() {
  return Gulp.start([ 'copy-html', 'copy-assets' ], () => {
    return Gulp.start([ 'webpack', 'template' ], () => {
      Gulp.emit('end');
    });
  });
}
