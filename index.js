(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GulpBuild = exports.GulpDev = exports.Gulp = exports.Webpack = exports.FinishRevision = exports.StartRevision = exports.Template = exports.Sass = exports.CopyHtml = exports.CopyAssets = undefined;

	var _tools = __webpack_require__(17);

	exports.CopyAssets = _tools.CopyAssets;
	exports.CopyHtml = _tools.CopyHtml;
	exports.Sass = _tools.Sass;
	exports.Template = _tools.Template;
	exports.StartRevision = _tools.StartRevision;
	exports.FinishRevision = _tools.FinishRevision;
	exports.Webpack = _tools.Webpack;
	exports.Gulp = _tools.Gulp;
	exports.GulpDev = _tools.GulpDev;
	exports.GulpBuild = _tools.GulpBuild;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = exports.MAIN_HTML = exports.MAIN_STYLE = exports.MAIN_JS = exports.PUBLIC_TEMPLATE = exports.PUBLIC_MANIFEST = exports.PUBLIC_HTML = exports.PUBLIC_STYLE = exports.PUBLIC_JS = exports.TEMPLATE_CACHE = exports.BUILD_PATH = exports.ASSETS_FILES = exports.HTML_FILES = exports.SCSS_FILES = exports.JS_FILES = exports.APP_INDEX = exports.APP_JS = exports.DIST_PATH = exports.PUBLIC_PATH = exports.DEVELOPMENT = undefined;

	var _appRootPath = __webpack_require__(20);

	var _appRootPath2 = _interopRequireDefault(_appRootPath);

	var _dotenv = __webpack_require__(21);

	var _dotenv2 = _interopRequireDefault(_dotenv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_dotenv2.default.load();

	var DEVELOPMENT = process.env.NODE_ENV === 'development';
	var API_URL = process.env.API_URL;
	var PUBLIC_PATH = _appRootPath2.default.resolve(process.env.PUBLIC_PATH || '/public');
	var DIST_PATH = _appRootPath2.default.resolve(process.env.DIST_PATH || '/dist');
	var APP_JS = _appRootPath2.default.resolve(process.env.APP_JS || '/src/index.js');
	var APP_INDEX = _appRootPath2.default.resolve(process.env.APP_INDEX || '/index.html');
	var JS_FILES = _appRootPath2.default.resolve(process.env.JS_FILES || '/src/**/*.js');
	var SCSS_FILES = _appRootPath2.default.resolve(process.env.SCSS_FILES || '/src/**/*.scss');
	var HTML_FILES = _appRootPath2.default.resolve(process.env.HTML_FILES || '/src/**/*.html');
	var ASSETS_FILES = _appRootPath2.default.resolve(process.env.ASSETS_FILES || '/assets/**/*');
	var BUILD_PATH = DEVELOPMENT ? DIST_PATH : PUBLIC_PATH;
	var TEMPLATE_CACHE = process.env.TEMPLATE_CACHE || 'app.templates.js';
	var MAIN_JS = process.env.MAIN_JS || 'main.js';
	var MAIN_STYLE = process.env.MAIN_STYLE || 'style.css';
	var MAIN_HTML = process.env.MAIN_HTML || 'index.html';
	var PUBLIC_TEMPLATE = BUILD_PATH + '/' + TEMPLATE_CACHE;
	var PUBLIC_JS = BUILD_PATH + '/' + (process.env.MAIN_JS || 'main.js');
	var PUBLIC_STYLE = BUILD_PATH + '/' + (process.env.MAIN_STYLE || 'style.css');
	var PUBLIC_HTML = BUILD_PATH + '/' + (process.env.MAIN_HTML || 'index.html');
	var PUBLIC_MANIFEST = BUILD_PATH + '/rev-manifest.json';

	exports.DEVELOPMENT = DEVELOPMENT;
	exports.PUBLIC_PATH = PUBLIC_PATH;
	exports.DIST_PATH = DIST_PATH;
	exports.APP_JS = APP_JS;
	exports.APP_INDEX = APP_INDEX;
	exports.JS_FILES = JS_FILES;
	exports.SCSS_FILES = SCSS_FILES;
	exports.HTML_FILES = HTML_FILES;
	exports.ASSETS_FILES = ASSETS_FILES;
	exports.BUILD_PATH = BUILD_PATH;
	exports.TEMPLATE_CACHE = TEMPLATE_CACHE;
	exports.PUBLIC_JS = PUBLIC_JS;
	exports.PUBLIC_STYLE = PUBLIC_STYLE;
	exports.PUBLIC_HTML = PUBLIC_HTML;
	exports.PUBLIC_MANIFEST = PUBLIC_MANIFEST;
	exports.PUBLIC_TEMPLATE = PUBLIC_TEMPLATE;
	exports.MAIN_JS = MAIN_JS;
	exports.MAIN_STYLE = MAIN_STYLE;
	exports.MAIN_HTML = MAIN_HTML;
	exports.API_URL = API_URL;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("gulp");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _production = __webpack_require__(19);

	var _production2 = _interopRequireDefault(_production);

	var _dev = __webpack_require__(18);

	var _dev2 = _interopRequireDefault(_dev);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  context: __dirname,
	  entry: _config.APP_JS,
	  output: _config.DEVELOPMENT ? _dev2.default.output : _production2.default.output,
	  stats: { children: false },
	  module: _config.DEVELOPMENT ? _dev2.default.module : _production2.default.module,
	  plugins: _config.DEVELOPMENT ? _dev2.default.plugins : _production2.default.plugins
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("gulp-htmlmin");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("webpack");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("webpack-stream");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = CopyAssets;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CopyAssets() {
	  return _gulp2.default.src(_config.ASSETS_FILES).pipe(_gulp2.default.dest(_config.BUILD_PATH));
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Build;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Build() {
	  return _gulp2.default.start(['copy-html', 'copy-assets'], function () {
	    return _gulp2.default.start(['webpack', 'template'], function () {
	      _gulp2.default.emit('end');
	    });
	  });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dev;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Dev() {
	  return _gulp2.default.start(['copy-html', 'copy-assets'], function () {
	    return _gulp2.default.start(['webpack', 'template'], function () {
	      _gulp2.default.watch(_config.APP_INDEX, ['copy-html']);
	      _gulp2.default.watch(_config.HTML_FILES, ['template']);
	      _gulp2.default.watch(_config.JS_FILES, ['webpack']);
	      _gulp2.default.watch(_config.SCSS_FILES, ['sass']);
	    });
	  });
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FinishRevision;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _gulpHtmlmin = __webpack_require__(5);

	var _gulpHtmlmin2 = _interopRequireDefault(_gulpHtmlmin);

	var _gulpRevReplace = __webpack_require__(26);

	var _gulpRevReplace2 = _interopRequireDefault(_gulpRevReplace);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function FinishRevision() {
	  var manifest = _gulp2.default.src(_config.PUBLIC_MANIFEST);
	  return _gulp2.default.src(_config.PUBLIC_HTML).pipe((0, _gulpHtmlmin2.default)({ collapseWhitespace: true })).pipe((0, _gulpRevReplace2.default)({ manifest: manifest })).pipe(_gulp2.default.dest(_config.BUILD_PATH));
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = CopyHtml;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CopyHtml() {
	  return _gulp2.default.src(_config.APP_INDEX).pipe(_gulp2.default.dest(_config.BUILD_PATH));
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Sass;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _webpackStream = __webpack_require__(7);

	var _webpackStream2 = _interopRequireDefault(_webpackStream);

	var _webpack = __webpack_require__(3);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Sass() {
	  return _gulp2.default.src(_config.APP_JS).pipe((0, _webpackStream2.default)(_webpack2.default)).pipe(_gulp2.default.dest(_config.BUILD_PATH));
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = StartRevision;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _gulpRevAll = __webpack_require__(25);

	var _gulpRevAll2 = _interopRequireDefault(_gulpRevAll);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function StartRevision() {
	  var revFiles = _gulp2.default.src([_config.PUBLIC_TEMPLATE, _config.PUBLIC_JS, _config.PUBLIC_STYLE]);
	  return revFiles.pipe(_gulpRevAll2.default.revision()).pipe(_gulp2.default.dest(_config.BUILD_PATH)).pipe(_gulpRevAll2.default.manifestFile()).pipe(_gulp2.default.dest(_config.BUILD_PATH));
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TemplateCache;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _gulpAngularTemplatecache = __webpack_require__(22);

	var _gulpAngularTemplatecache2 = _interopRequireDefault(_gulpAngularTemplatecache);

	var _gulpRename = __webpack_require__(24);

	var _gulpRename2 = _interopRequireDefault(_gulpRename);

	var _gulpGzip = __webpack_require__(23);

	var _gulpGzip2 = _interopRequireDefault(_gulpGzip);

	var _gulpUglify = __webpack_require__(27);

	var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

	var _gulpHtmlmin = __webpack_require__(5);

	var _gulpHtmlmin2 = _interopRequireDefault(_gulpHtmlmin);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TemplateCache() {
	  var templates = _gulp2.default.src(_config.HTML_FILES).pipe((0, _gulpHtmlmin2.default)({ collapseWhitespace: true })).pipe((0, _gulpAngularTemplatecache2.default)({ standalone: true })).pipe((0, _gulpUglify2.default)()).pipe((0, _gulpRename2.default)(_config.TEMPLATE_CACHE));
	  return _config.DEVELOPMENT ? templates.pipe(_gulp2.default.dest(_config.DIST_PATH)) : templates.pipe((0, _gulpGzip2.default)({ append: false })).pipe(_gulp2.default.dest(_config.PUBLIC_PATH));
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Webpack;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _webpackStream = __webpack_require__(7);

	var _webpackStream2 = _interopRequireDefault(_webpackStream);

	var _webpack = __webpack_require__(3);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Webpack() {
	  return _gulp2.default.src(_config.APP_JS).pipe((0, _webpackStream2.default)(_webpack2.default)).pipe(_gulp2.default.dest(_config.BUILD_PATH));
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GulpBuild = exports.GulpDev = exports.Gulp = exports.Webpack = exports.FinishRevision = exports.StartRevision = exports.Template = exports.Sass = exports.CopyHtml = exports.CopyAssets = undefined;

	var _gulp = __webpack_require__(2);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _assets = __webpack_require__(8);

	var _assets2 = _interopRequireDefault(_assets);

	var _html = __webpack_require__(12);

	var _html2 = _interopRequireDefault(_html);

	var _sass = __webpack_require__(13);

	var _sass2 = _interopRequireDefault(_sass);

	var _template = __webpack_require__(15);

	var _template2 = _interopRequireDefault(_template);

	var _startRevision = __webpack_require__(14);

	var _startRevision2 = _interopRequireDefault(_startRevision);

	var _finishRevision = __webpack_require__(11);

	var _finishRevision2 = _interopRequireDefault(_finishRevision);

	var _webpack = __webpack_require__(16);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _dev = __webpack_require__(10);

	var _dev2 = _interopRequireDefault(_dev);

	var _build = __webpack_require__(9);

	var _build2 = _interopRequireDefault(_build);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_gulp2.default.task('copy-assets', _assets2.default);
	_gulp2.default.task('copy-html', _html2.default);
	_gulp2.default.task('sass', _sass2.default);
	_gulp2.default.task('template', _template2.default);
	_gulp2.default.task('start-revision', _startRevision2.default);
	_gulp2.default.task('finish-revision', _finishRevision2.default);
	_gulp2.default.task('webpack', _webpack2.default);

	exports.CopyAssets = _assets2.default;
	exports.CopyHtml = _html2.default;
	exports.Sass = _sass2.default;
	exports.Template = _template2.default;
	exports.StartRevision = _startRevision2.default;
	exports.FinishRevision = _finishRevision2.default;
	exports.Webpack = _webpack2.default;
	exports.Gulp = _gulp2.default;
	exports.GulpDev = _dev2.default;
	exports.GulpBuild = _build2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _extractTextWebpackPlugin = __webpack_require__(4);

	var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  output: {
	    path: _config.DIST_PATH,
	    filename: _config.MAIN_JS
	  },
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader'
	    }, {
	      test: /\.css$/,
	      loader: _extractTextWebpackPlugin2.default.extract('style', 'css!')
	    }, {
	      test: /\.scss$/,
	      loader: _extractTextWebpackPlugin2.default.extract('style', 'css!sass!')
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }, {
	      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
	      loader: 'url-loader'
	    }, {
	      test: /\.(jpe?g|png|gif)$/i,
	      loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]']
	    }]
	  },
	  plugins: [new _webpack2.default.ProvidePlugin({
	    $: 'jquery',
	    jQuery: 'jquery',
	    'window.jQuery': 'jquery'
	  }), new _extractTextWebpackPlugin2.default('style.css'), new _webpack2.default.DefinePlugin({
	    'API_URL': JSON.stringify(_config.API_URL)
	  })]
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _extractTextWebpackPlugin = __webpack_require__(4);

	var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

	var _config = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  output: {
	    path: _config.PUBLIC_PATH,
	    filename: _config.MAIN_JS
	  },
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader'
	    }, {
	      test: /\.css$/,
	      loader: _extractTextWebpackPlugin2.default.extract('style', 'css!')
	    }, {
	      test: /\.scss$/,
	      loader: _extractTextWebpackPlugin2.default.extract('style', 'css!sass!')
	    }, {
	      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
	      loader: 'url-loader'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }, {
	      test: /\.(jpe?g|png|gif)$/i,
	      loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
	    }]
	  },
	  plugins: [new _webpack2.default.ProvidePlugin({
	    $: 'jquery',
	    jQuery: 'jquery',
	    'window.jQuery': 'jquery'
	  }), new _webpack2.default.DefinePlugin({
	    'API_URL': JSON.stringify(_config.API_URL)
	  }), new _extractTextWebpackPlugin2.default('style.css'), new _webpack2.default.optimize.UglifyJsPlugin({
	    sourceMap: false,
	    mangle: false,
	    test: /\.(js|jsx)$/,
	    compress: {
	      dead_code: false,
	      conditionals: false,
	      unused: false
	    },
	    output: { comments: false }
	  })]
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("app-root-path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("dotenv");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("gulp-angular-templatecache");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = require("gulp-gzip");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = require("gulp-rename");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("gulp-rev-all");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("gulp-rev-replace");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = require("gulp-uglify");

/***/ })
/******/ ])));