module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(7),_interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(23)),_extends2=_interopRequireDefault(__webpack_require__(10)),_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireDefault(__webpack_require__(1)),_document=_interopRequireWildcard(__webpack_require__(137)),_JssProvider=_interopRequireDefault(__webpack_require__(138)),_server=_interopRequireDefault(__webpack_require__(139)),_getPageContext=_interopRequireDefault(__webpack_require__(89)),_CssBaseline=_interopRequireDefault(__webpack_require__(87)),_styles=__webpack_require__(8),MyDocument=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function b(){var a=this.props.pageContext;return _react.default.createElement("html",{lang:"en",dir:"ltr"},_react.default.createElement(_document.Head,null,_react.default.createElement("title",null,"\u76D7\u706B"),_react.default.createElement("meta",{charSet:"utf-8"}),_react.default.createElement("meta",{name:"viewport",content:"user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"}),_react.default.createElement("link",{href:"/static/main.css",rel:"stylesheet"}),_react.default.createElement("meta",{name:"theme-color",content:a.theme.palette.primary.main}),_react.default.createElement("link",{rel:"stylesheet"}),_react.default.createElement("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}),_react.default.createElement("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),_react.default.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),_react.default.createElement("body",null,_react.default.createElement(_document.Main,null),_react.default.createElement(_document.NextScript,null)),_react.default.createElement("script",{src:"/static/start.js"}))}}]),b}(_document.default);MyDocument.getInitialProps=function(a){var b=(0,_getPageContext.default)(),c=a.renderPage(function(a){return function(c){return _react.default.createElement(_JssProvider.default,{registry:b.sheetsRegistry,generateClassName:b.generateClassName},_react.default.createElement(_styles.MuiThemeProvider,{theme:b.theme,sheetsManager:b.sheetsManager},_react.default.createElement(_CssBaseline.default,null),_react.default.createElement(a,(0,_extends2.default)({pageContext:b},c))))}});return(0,_objectSpread2.default)({},c,{pageContext:b,styles:_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("style",{id:"jss-server-side",dangerouslySetInnerHTML:{__html:b.sheetsRegistry.toString()}}),(0,_server.default)()||null)})};var _default=MyDocument;exports.default=_default;

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getPageContext;var _map=_interopRequireDefault(__webpack_require__(90)),_jss=__webpack_require__(91),_styles=__webpack_require__(8),_theme=_interopRequireDefault(__webpack_require__(92));function createPageContext(){return{theme:_theme.default,sheetsManager:new _map.default,sheetsRegistry:new _jss.SheetsRegistry,generateClassName:(0,_styles.createGenerateClassName)()}}function getPageContext(){return process.browser?(global.__INIT_MATERIAL_UI__||(global.__INIT_MATERIAL_UI__=createPageContext()),global.__INIT_MATERIAL_UI__):createPageContext()}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/map");

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(34)),_styles=__webpack_require__(8),_blue=_interopRequireDefault(__webpack_require__(93)),_red=_interopRequireDefault(__webpack_require__(48)),_color=_interopRequireDefault(__webpack_require__(83)),theme=(0,_styles.createMuiTheme)(),_default=(0,_styles.createMuiTheme)({overrides:{MuiAppBar:{root:{background:"linear-gradient(60deg, ".concat((0,_color.default)("#2196f3").lighten(.1),", ").concat((0,_color.default)("#2196f3").darken(.1),")"),boxShadow:"0 4px 20px 0px ".concat((0,_color.default)("#2196f3").alpha(.3),", 0 7px 10px -5px ").concat((0,_color.default)("#2196f3").alpha(.5))}},MuiInputLabel:{formControl:{color:"#9197a3"}},MuiInput:{underline:{"&::before":{borderBottom:"1px #ddd solid"}}},MuiPaper:{elevation1:{boxShadow:"0 3px 5px 0px rgba(0, 0, 0, 0.05)"},elevation2:(0,_defineProperty2.default)({boxShadow:"0 3px 5px 0px rgba(0, 0, 0, 0.05)",borderRadius:4,marginBottom:2*theme.spacing.unit},theme.breakpoints.down("xs"),{marginBottom:1*theme.spacing.unit,boxShadow:"none"})}},palette:{primary:_blue.default,secondary:_red.default,background:{default:"#f3f4f7"}},nowrap:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},container:(0,_defineProperty2.default)({maxWidth:1110,width:"100%",margin:"auto"},theme.breakpoints.down("xs"),{overflow:"hidden"})});exports.default=_default;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ })

/******/ });