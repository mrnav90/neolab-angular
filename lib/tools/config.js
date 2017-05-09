'use strict';

import Path from 'app-root-path';
import Dotenv from 'dotenv';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development' || true;
const API_URL = process.env.API_URL;
const PUBLIC_PATH = Path.resolve(process.env.PUBLIC_PATH || '/public');
const DIST_PATH = Path.resolve(process.env.DIST_PATH || '/dist');
const APP_JS = Path.resolve(process.env.APP_JS || '/src/index.js');
const APP_INDEX = Path.resolve(process.env.APP_INDEX || '/index.html');
const JS_FILES = Path.resolve(process.env.JS_FILES || '/src/**/*.js');
const SCSS_FILES = Path.resolve(process.env.SCSS_FILES || '/src/**/*.scss');
const HTML_FILES = Path.resolve(process.env.HTML_FILES || '/src/**/*.html');
const ASSETS_FILES = Path.resolve(process.env.ASSETS_FILES || '/assets/**/*');
const BUILD_PATH = DEVELOPMENT ? DIST_PATH : PUBLIC_PATH;
const TEMPLATE_CACHE = process.env.TEMPLATE_CACHE || 'app.templates.js';
const MAIN_JS = process.env.MAIN_JS || 'main.js';
const MAIN_STYLE = process.env.MAIN_STYLE || 'style.css';
const MAIN_HTML = process.env.MAIN_HTML || 'index.html';
const PUBLIC_TEMPLATE = BUILD_PATH + '/' + TEMPLATE_CACHE;
const PUBLIC_JS = BUILD_PATH + '/' + (process.env.MAIN_JS || 'main.js');
const PUBLIC_STYLE = BUILD_PATH + '/' + (process.env.MAIN_STYLE || 'style.css');
const PUBLIC_HTML = BUILD_PATH + '/' + (process.env.MAIN_HTML || 'index.html');
const PUBLIC_MANIFEST = BUILD_PATH + '/rev-manifest.json';

export {
  DEVELOPMENT,
  PUBLIC_PATH,
  DIST_PATH,
  APP_JS,
  APP_INDEX,
  JS_FILES,
  SCSS_FILES,
  HTML_FILES,
  ASSETS_FILES,
  BUILD_PATH,
  TEMPLATE_CACHE,
  PUBLIC_JS,
  PUBLIC_STYLE,
  PUBLIC_HTML,
  PUBLIC_MANIFEST,
  PUBLIC_TEMPLATE,
  MAIN_JS,
  MAIN_STYLE,
  MAIN_HTML,
  API_URL
};
