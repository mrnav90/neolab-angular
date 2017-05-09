'use strict';

import CopyAssets from './gulp/assets';
import CopyHtml from './gulp/html';
import Sass from './gulp/sass';
import Template from './gulp/template';
import StartRevision from './gulp/start-revision';
import FinishRevision from './gulp/finish-revision';
import Webpack from './gulp/webpack';
import Dev from './gulp/dev';
import Build from './gulp/build';

export {
  CopyAssets,
  CopyHtml,
  Sass,
  Template,
  StartRevision,
  FinishRevision,
  Webpack,
  Dev,
  Build
};
