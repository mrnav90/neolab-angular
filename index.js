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
	exports.copyImages = exports.gulpCSS = undefined;

	var _gulp = __webpack_require__(2);

	exports.gulpCSS = _gulp.gulpCSS;
	exports.copyImages = _gulp.copyImages;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("dotenv");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _gulp = __webpack_require__(6);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _dotenv = __webpack_require__(1);

	var _dotenv2 = _interopRequireDefault(_dotenv);

	var _webpackStream = __webpack_require__(9);

	var _webpackStream2 = _interopRequireDefault(_webpackStream);

	var _webpack = __webpack_require__(3);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _appRootPath = __webpack_require__(4);

	var _appRootPath2 = _interopRequireDefault(_appRootPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_dotenv2.default.load();

	var DEVELOPMENT = process.env.NODE_ENV === 'development' || true;
	var PUBLIC_PATH = _appRootPath2.default.resolve(process.env.PUBLIC_PATH || '/public');
	var DIST_PATH = _appRootPath2.default.resolve(process.env.DIST_PATH || '/dist');
	var APP_JS = _appRootPath2.default.resolve(process.env.APP_JS || '/src/index.js');
	var JS_FILES = _appRootPath2.default.resolve(process.env.JS_FILES || '/src/**/*.js');
	var SCSS_FILES = _appRootPath2.default.resolve(process.env.SCSS_FILES || '/src/**/*.scss');
	var HTML_FILES = _appRootPath2.default.resolve(process.env.HTML_FILES || '/src/**/*.html');
	var ASSETS_FILES = _appRootPath2.default.resolve(process.env.ASSETS_FILES || '/assets/**/*');
	var BUILD_PATH = DEVELOPMENT ? DIST_PATH : PUBLIC_PATH;

	exports.gulpCSS = function () {
	  _gulp2.default.src(APP_JS).pipe((0, _webpackStream2.default)(_webpack2.default)).pipe(_gulp2.default.dest(BUILD_PATH));
	};

	exports.copyImages = function () {
	  _gulp2.default.src(ASSETS_FILES).pipe(_gulp2.default.dest(BUILD_PATH));
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _path = __webpack_require__(7);

	var _path2 = _interopRequireDefault(_path);

	var _dotenv = __webpack_require__(1);

	var _dotenv2 = _interopRequireDefault(_dotenv);

	var _webpack = __webpack_require__(8);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _extractTextWebpackPlugin = __webpack_require__(5);

	var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_dotenv2.default.load();

	var DEVELOPMENT = process.env.NODE_ENV === 'development';

	var webpackOutput = {
	  path: _path2.default.join(__dirname, DEVELOPMENT ? 'dist' : 'public'),
	  filename: 'main.js'
	};

	var webpackModules = {
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
	};

	var webpackPlugins = [new _webpack2.default.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery',
	  'window.jQuery': 'jquery'
	}), new _extractTextWebpackPlugin2.default('style.css'), new _webpack2.default.DefinePlugin({
	  'API_URL': JSON.stringify(process.env.API_URL)
	})];

	if (!DEVELOPMENT) {
	  webpackModules.loaders[webpackModules.loaders.length - 1].loaders.push('image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false');
	  webpackPlugins.push(new _extractTextWebpackPlugin2.default('style.css'), new _webpack2.default.optimize.UglifyJsPlugin({
	    sourceMap: false,
	    mangle: false,
	    test: /\.(js|jsx)$/,
	    compress: {
	      conditionals: false,
	      unused: false
	    },
	    output: { comments: false }
	  }));
	}

	module.exports = {
	  entry: _path2.default.join(__dirname, 'src/index.js'),
	  output: webpackOutput,
	  stats: { children: false },
	  module: webpackModules,
	  plugins: webpackPlugins
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("app-root-path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("gulp");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("webpack");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("webpack-stream");

/***/ })
/******/ ])));