'use strict';

import Gulp from 'gulp';
import CopyAssets from './gulp/assets';
import CopyHtml from './gulp/html';
import Sass from './gulp/sass';
import Template from './gulp/template';
import StartRevision from './gulp/start-revision';
import FinishRevision from './gulp/finish-revision';
import Webpack from './gulp/webpack';
import GulpDev from './gulp/dev';
import GulpBuild from './gulp/build';

Gulp.task('copy-assets', CopyAssets);
Gulp.task('copy-html', CopyHtml);
Gulp.task('sass', Sass);
Gulp.task('template', Template);
Gulp.task('start-revision', StartRevision);
Gulp.task('finish-revision', FinishRevision);
Gulp.task('webpack', Webpack);

export {
  CopyAssets,
  CopyHtml,
  Sass,
  Template,
  StartRevision,
  FinishRevision,
  Webpack,
  Gulp,
  GulpDev,
  GulpBuild
};
