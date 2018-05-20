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
/******/ 	return __webpack_require__(__webpack_require__.s = 198);
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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.MEIZITU_LIST=exports.MEIZITU_DETAIL=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(12)),_graphqlTag=_interopRequireDefault(__webpack_require__(13)),_templateObject=(0,_taggedTemplateLiteral2.default)(["\n  query meizituPictures($_id: String!) {\n    detail: meizituPictures(_id: $_id) {\n      __typename\n      _id\n      title\n      pictures\n    }\n  }\n"]),_templateObject2=(0,_taggedTemplateLiteral2.default)(["\n  query meizituList($page: Int!) {\n    list: meizituList(page: $page) {\n      __typename\n      _id\n      title\n      cover\n      url\n    }\n  }\n"]),MEIZITU_DETAIL=(0,_graphqlTag.default)(_templateObject);exports.MEIZITU_DETAIL=MEIZITU_DETAIL;var MEIZITU_LIST=(0,_graphqlTag.default)(_templateObject2);exports.MEIZITU_LIST=MEIZITU_LIST;

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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(199);


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0),_interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _dec,_class,_regenerator=_interopRequireDefault(__webpack_require__(17)),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(18)),_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_styles=__webpack_require__(8),_Grid=_interopRequireDefault(__webpack_require__(14)),_list=_interopRequireDefault(__webpack_require__(200)),styles=function(a){return{root:{flexGrow:1,maxWidth:1110,margin:"auto",marginTop:3*a.spacing.unit},body:{maxWidth:760,width:"100%",margin:"0 auto"},container:{boxSizing:"border-box",margin:0,width:"100%","@media (max-width: 960px)":{margin:0}}}},News=(_dec=(0,_styles.withStyles)(styles),_dec(_class=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function b(){var a=this.props.classes;return _react.default.createElement("div",{className:a.root},_react.default.createElement("div",{className:a.root},_react.default.createElement(_Grid.default,{className:a.container,container:!0,spacing:16},_react.default.createElement(_Grid.default,{item:!0,xs:12,sm:12,md:12},_react.default.createElement("div",{className:a.body},_react.default.createElement(_list.default,null))))))}}],[{key:"getInitialProps",value:function(){var a=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function a(b){var c;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.query,a.abrupt("return",{query:c});case 2:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()}]),b}(_react.PureComponent))||_class);exports.default=News;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.params=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(24)),_objectSpread2=_interopRequireDefault(__webpack_require__(23)),_extends2=_interopRequireDefault(__webpack_require__(10)),_react=_interopRequireDefault(__webpack_require__(1)),_reactApollo=__webpack_require__(11),_item=_interopRequireDefault(__webpack_require__(201)),_meizitu=__webpack_require__(100);function PostList(a){var b=a.data,c=b.loading,d=b.error,e=b.list,f=a.loadMore;return c?"Loading...":d?"Error! ".concat(d.message):_react.default.createElement("div",null,e.map(function(a){return _react.default.createElement(_item.default,(0,_extends2.default)({key:a._id},a))}),_react.default.createElement("button",{onClick:function a(){return f()}},c?"Loading...":"Show More"))}var params={page:1};exports.params=params;var _default=(0,_reactApollo.graphql)(_meizitu.MEIZITU_LIST,{options:{variables:params},props:function c(a){var b=a.data;return{data:b,loadMore:function a(){return b.fetchMore({variables:{page:Math.floor(b.list.length/39)+1},updateQuery:function d(a,b){var c=b.fetchMoreResult;return c?(0,_objectSpread2.default)({},c,{list:(0,_toConsumableArray2.default)(a.list).concat((0,_toConsumableArray2.default)(c.list))}):a}})}}}})(PostList);exports.default=_default;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(9)),_react=_interopRequireDefault(__webpack_require__(1)),_propTypes=_interopRequireDefault(__webpack_require__(25)),_link=_interopRequireDefault(__webpack_require__(26)),_styles=__webpack_require__(8),_Card=_interopRequireDefault(__webpack_require__(15)),_CardHeader=_interopRequireDefault(__webpack_require__(22)),_CardContent=_interopRequireDefault(__webpack_require__(19)),_CardMedia=_interopRequireDefault(__webpack_require__(20)),_Avatar=_interopRequireDefault(__webpack_require__(28)),_IconButton=_interopRequireDefault(__webpack_require__(27)),_Typography=_interopRequireDefault(__webpack_require__(21)),_red=_interopRequireDefault(__webpack_require__(48)),_MoreVert=_interopRequireDefault(__webpack_require__(56)),_timeago=_interopRequireDefault(__webpack_require__(57)),styles=function(a){return{card:{flexGrow:1,marginBottom:3*a.spacing.unit,boxShadow:"0 10px 28px 0 rgba(137,157,197,.05)"},media:{height:500,"@media (max-width: 700px)":{height:300}},expand:{transform:"rotate(0deg)",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:_red.default[500]},flexGrow:{flex:"1 1 auto"},title:{fontSize:16}}},RecipeReviewCard=function(a){function b(){var a,c,d;(0,_classCallCheck2.default)(this,b);for(var e=arguments.length,f=Array(e),g=0;g<e;g++)f[g]=arguments[g];return(0,_possibleConstructorReturn2.default)(d,(c=d=(0,_possibleConstructorReturn2.default)(this,(a=b.__proto__||(0,_getPrototypeOf.default)(b)).call.apply(a,[this].concat(f))),Object.defineProperty((0,_assertThisInitialized2.default)(d),"state",{configurable:!0,enumerable:!0,writable:!0,value:{expanded:!1}}),Object.defineProperty((0,_assertThisInitialized2.default)(d),"handleExpandClick",{configurable:!0,enumerable:!0,writable:!0,value:function a(){d.setState({expanded:!d.state.expanded})}}),c))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function f(){var a=this.props,b=a.classes,c=a.title,d=a.cover,e=a._id;return _react.default.createElement("div",null,_react.default.createElement(_Card.default,{className:b.card},_react.default.createElement(_link.default,{key:e,href:"/meizitu/detail?id=".concat(e)},_react.default.createElement("a",null,_react.default.createElement(_CardMedia.default,{className:b.media,image:d,title:c}),_react.default.createElement(_CardContent.default,null,_react.default.createElement(_Typography.default,{className:b.title,variant:"headline",component:"h2"},c))))))}}]),b}(_react.default.Component),_default=(0,_styles.withStyles)(styles)(RecipeReviewCard);exports.default=_default;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

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

/***/ 56:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _timeago=_interopRequireDefault(__webpack_require__(58)),_default=function(a){return(0,_timeago.default)().format(a,"zh_CN")};exports.default=_default;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = require("timeago.js");

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

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ })

/******/ });