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
/******/ 	return __webpack_require__(__webpack_require__.s = 183);
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

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(7),_interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_Grid=_interopRequireDefault(__webpack_require__(14)),_list=_interopRequireDefault(__webpack_require__(185)),_layout=_interopRequireDefault(__webpack_require__(33)),News=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function a(){return _react.default.createElement(_layout.default,null,_react.default.createElement(_Grid.default,{container:!0,spacing:16},_react.default.createElement(_Grid.default,{item:!0,xs:12,sm:12,md:12},_react.default.createElement(_list.default,null))))}}]),b}(_react.PureComponent);exports.default=News;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(1)),_reactApollo=__webpack_require__(11),_Grid=_interopRequireDefault(__webpack_require__(14)),_reactWaypoint=_interopRequireDefault(__webpack_require__(78)),_masonry=_interopRequireDefault(__webpack_require__(186)),_item=_interopRequireDefault(__webpack_require__(188)),_bxgif=__webpack_require__(95),_graphql=__webpack_require__(55),_button=_interopRequireDefault(__webpack_require__(189));function PostList(a){var b=a.data,c=b.loading,d=b.error,e=b.list,f=a.loadMore;return c?"Loading...":d?"Error! ".concat(d.message):_react.default.createElement("div",{style:{margin:"0px"}},_react.default.createElement(_masonry.default,{style:{margin:"8px -8px"}},e.map(function(a){return _react.default.createElement(_Grid.default,{key:a._id,style:{padding:"8px",width:"100%",display:"block"},item:!0,xs:6,sm:4,lg:3},_react.default.createElement(_item.default,a))})),_react.default.createElement(_button.default,{onClick:function a(){return f()}},"\u52A0\u8F7D\u66F4\u591A"))}var _default=(0,_reactApollo.graphql)(_bxgif.BXGIF_LIST,{options:{variables:{skip:0}},props:function c(a){var b=a.data;return{data:b,loadMore:function a(){return b.fetchMore({variables:{skip:b.list.length},updateQuery:_graphql.updateQuery})}}}})(PostList);exports.default=_default;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(7),_interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(32)),_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_reactMasonryComponent=_interopRequireDefault(__webpack_require__(187)),MyMasonry=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function d(){var a=this.props,b=a.children,c=(0,_objectWithoutProperties2.default)(a,["children"]);return"undefined"==typeof window?null:_react.default.createElement(_reactMasonryComponent.default,c,b)}}]),b}(_react.Component);exports.default=MyMasonry;

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(9)),_react=_interopRequireDefault(__webpack_require__(1)),_propTypes=_interopRequireDefault(__webpack_require__(25)),_link=_interopRequireDefault(__webpack_require__(26)),_styles=__webpack_require__(8),_Card=_interopRequireDefault(__webpack_require__(15)),_CardHeader=_interopRequireDefault(__webpack_require__(22)),_CardContent=_interopRequireDefault(__webpack_require__(19)),_CardMedia=_interopRequireDefault(__webpack_require__(20)),_Typography=_interopRequireDefault(__webpack_require__(21)),styles=function(){return{cover:{width:"100%",minHeight:100,display:"block"},title:{},meta:{marginTop:4,display:"flex",justifyContent:"space-between"},content:{padding:16}}},RecipeReviewCard=function(a){function b(){var a,c,d;(0,_classCallCheck2.default)(this,b);for(var e=arguments.length,f=Array(e),g=0;g<e;g++)f[g]=arguments[g];return(0,_possibleConstructorReturn2.default)(d,(c=d=(0,_possibleConstructorReturn2.default)(this,(a=b.__proto__||(0,_getPrototypeOf.default)(b)).call.apply(a,[this].concat(f))),Object.defineProperty((0,_assertThisInitialized2.default)(d),"state",{configurable:!0,enumerable:!0,writable:!0,value:{expanded:!1}}),Object.defineProperty((0,_assertThisInitialized2.default)(d),"handleExpandClick",{configurable:!0,enumerable:!0,writable:!0,value:function a(){d.setState({expanded:!d.state.expanded})}}),c))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function h(){var a=this.props,b=a.classes,c=a.title,d=a.cover,e=a.createdAt,f=a.total,g=a._id;return _react.default.createElement("div",null,_react.default.createElement(_Card.default,{className:b.card},_react.default.createElement(_link.default,{key:g,href:"/bxgif/detail?id=".concat(g)},_react.default.createElement("a",null,_react.default.createElement("div",null,_react.default.createElement("img",{src:d,alt:"",className:b.cover}),_react.default.createElement("div",{className:b.content},_react.default.createElement(_Typography.default,{className:b.title,component:"p"},c.substring(15,c.length)),_react.default.createElement(_Typography.default,{className:b.meta,color:"textSecondary"},_react.default.createElement("span",null,"".concat(f)),_react.default.createElement("span",null,e))))))))}}]),b}(_react.default.Component),_default=(0,_styles.withStyles)(styles)(RecipeReviewCard);exports.default=_default;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0),_interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _dec,_class,_extends2=_interopRequireDefault(__webpack_require__(10)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(32)),_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_styles=__webpack_require__(8),_Button=_interopRequireDefault(__webpack_require__(16)),_CircularProgress=_interopRequireDefault(__webpack_require__(39)),styles={root:{width:"100%",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:0,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .30)",marginBottom:16},label:{textTransform:"capitalize"},progress:{marginRight:16}},_default=(_dec=(0,_styles.withStyles)(styles),_dec(_class=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function g(){var a=this.props,b=a.classes,c=a.disabled,d=a.loading,e=a.children,f=(0,_objectWithoutProperties2.default)(a,["classes","disabled","loading","children"]);return _react.default.createElement(_Button.default,(0,_extends2.default)({variant:"raised",classes:{root:b.root,label:b.label}},f),d&&_react.default.createElement(_CircularProgress.default,{size:18,className:b.progress,color:"inherit"}),e)}}]),b}(_react.PureComponent))||_class);exports.default=_default;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0),_interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _dec,_class,_getPrototypeOf=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_createClass2=_interopRequireDefault(__webpack_require__(4)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(5)),_inherits2=_interopRequireDefault(__webpack_require__(6)),_react=_interopRequireWildcard(__webpack_require__(1)),_styles=__webpack_require__(8),styles=function(a){return{root:a.container}},News=(_dec=(0,_styles.withStyles)(styles),_dec(_class=function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(b.__proto__||(0,_getPrototypeOf.default)(b)).apply(this,arguments))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"render",value:function d(){var a=this.props,b=a.classes,c=a.children;return _react.default.createElement("div",{className:b.root},c)}}]),b}(_react.PureComponent))||_class);exports.default=News;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateQuery=exports.fetchMore=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(24)),_objectSpread2=_interopRequireDefault(__webpack_require__(23)),fetchMore=function(a){return a.fetchMore({variables:{skip:a.list.length},updateQuery:function(a,b){var c=b.fetchMoreResult;return c?(0,_objectSpread2.default)({},c,{list:(0,_toConsumableArray2.default)(a.list).concat((0,_toConsumableArray2.default)(c.list))}):a}})};exports.fetchMore=fetchMore;var updateQuery=function(a,b){var c=b.fetchMoreResult;return c?(0,_objectSpread2.default)({},c,{list:(0,_toConsumableArray2.default)(a.list).concat((0,_toConsumableArray2.default)(c.list))}):a};exports.updateQuery=updateQuery;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.BXGIF_LIST=exports.BXGIF_DETAIL=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(12)),_graphqlTag=_interopRequireDefault(__webpack_require__(13)),_templateObject=(0,_taggedTemplateLiteral2.default)(["\n  query bxgifDetail($_id: String!) {\n    detail: bxgifDetail(_id: $_id) {\n      __typename\n      _id\n      title\n      list {\n        url\n        title\n        width\n        height\n      }\n    }\n  }\n"]),_templateObject2=(0,_taggedTemplateLiteral2.default)(["\n  query bxgifList($skip: Int!) {\n    list: bxgifList(skip: $skip) {\n      __typename\n      _id\n      title\n      cover\n      comment\n      createdAt\n      total\n    }\n  }\n"]),BXGIF_DETAIL=(0,_graphqlTag.default)(_templateObject);exports.BXGIF_DETAIL=BXGIF_DETAIL;var BXGIF_LIST=(0,_graphqlTag.default)(_templateObject2);exports.BXGIF_LIST=BXGIF_LIST;

/***/ })

/******/ });