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
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
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

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.WECHAT_LIST=exports.WECHAT_DETAIL=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(12)),_graphqlTag=_interopRequireDefault(__webpack_require__(13)),_templateObject=(0,_taggedTemplateLiteral2.default)(["\n  query wechatDetail($_id: String!) {\n    detail: wechatDetail(_id: $_id) {\n      __typename\n      _id\n      content\n    }\n  }\n"]),_templateObject2=(0,_taggedTemplateLiteral2.default)(["\n  query wechat($name: String) {\n    list: wechat(name: $name) {\n      __typename\n      _id\n      createdAt\n      title\n      cover\n      digest\n    }\n  }\n"]),WECHAT_DETAIL=(0,_graphqlTag.default)(_templateObject);exports.WECHAT_DETAIL=WECHAT_DETAIL;var WECHAT_LIST=(0,_graphqlTag.default)(_templateObject2);exports.WECHAT_LIST=WECHAT_LIST;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0),_interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _dec,_class,_regenerator=_interopRequireDefault(__webpack_require__(17)),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(18)),_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_styles=__webpack_require__(8),_Grid=_interopRequireDefault(__webpack_require__(14)),_detail=_interopRequireDefault(__webpack_require__(225)),styles=function(a){return{root:{flexGrow:1,maxWidth:1110,margin:"auto",marginTop:3*a.spacing.unit},body:{maxWidth:760,width:"100%",margin:"0 auto"},container:{boxSizing:"border-box",margin:0,width:"100%","@media (max-width: 960px)":{margin:0}}}},News=(_dec=(0,_styles.withStyles)(styles),_dec(_class=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function d(){var a=this.props,b=a.classes,c=a.query;return _react.default.createElement("div",{className:b.root},_react.default.createElement("div",{className:b.root},_react.default.createElement(_Grid.default,{className:b.container,container:!0,spacing:16},_react.default.createElement(_Grid.default,{item:!0,xs:12,sm:12,md:12},_react.default.createElement("div",{className:b.body},_react.default.createElement(_detail.default,{query:c}))))))}}],[{key:"getInitialProps",value:function(){var a=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function a(b){var c;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.query,a.abrupt("return",{query:c});case 2:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()}]),b}(_react.PureComponent))||_class);exports.default=News;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0),_interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _dec,_class,_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_reactApollo=__webpack_require__(11),_styles=__webpack_require__(8),_wechat=__webpack_require__(103),styles=function(a){return{root:{"& > img":{width:"100%",marginBottom:3*a.spacing.unit}}}},MeizituDetail=(_dec=(0,_styles.withStyles)(styles),_dec(_class=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function c(){var a=this.props.query.id,b=this.props.classes;return _react.default.createElement(_reactApollo.Query,{query:_wechat.WECHAT_DETAIL,variables:{_id:a}},function(a){var c=a.loading,d=a.error,e=a.data,f=void 0===e?{}:e,g=f.detail,h=void 0===g?{}:g;return c?"Loading...":d?"Error! ".concat(d.message):_react.default.createElement("div",{className:b.root},_react.default.createElement("div",{dangerouslySetInnerHTML:{__html:h.content}}))})}}]),b}(_react.PureComponent))||_class);exports.default=MeizituDetail;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

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

/***/ })

/******/ });