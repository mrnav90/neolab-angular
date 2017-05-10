'use strict';

import WebpackConfig from './production';
import WebpackDevConfig from './dev';
import { DEVELOPMENT, APP_JS } from '../config';

module.exports = {
  context: __dirname,
  entry: APP_JS,
  output: DEVELOPMENT ? WebpackDevConfig.output : WebpackConfig.output,
  stats: { children: false },
  module: DEVELOPMENT ? WebpackDevConfig.module : WebpackConfig.module,
  plugins: DEVELOPMENT ? WebpackDevConfig.plugins : WebpackConfig.plugins
};
