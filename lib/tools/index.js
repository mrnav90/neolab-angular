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
