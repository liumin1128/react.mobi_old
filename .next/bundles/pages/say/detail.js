module.exports=__NEXT_REGISTER_PAGE("/say/detail",function(){var e=webpackJsonp([18],{1349:function(e,t,a){e.exports=a(1350)},1350:function(e,t,a){"use strict";var n=a(6),r=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,d=n(a(66)),l=n(a(67)),o=n(a(17)),s=n(a(15)),f=n(a(16)),c=n(a(18)),m=n(a(19)),p=r(a(2)),_=a(25),v=n(a(87)),y=n(a(1351)),E=function(e){return{root:{flexGrow:1,maxWidth:1110,margin:"auto",marginTop:3*e.spacing.unit},body:{maxWidth:760,width:"100%",margin:"0 auto"},container:{boxSizing:"border-box",margin:0,width:"100%","@media (max-width: 960px)":{margin:0}}}},h=(u=(0,_.withStyles)(E),u(i=function(e){function t(){return(0,s.default)(this,t),(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function e(){var t=this.props,a=t.classes,n=t.query;return p.default.createElement("div",{className:a.root},p.default.createElement("div",{className:a.root},p.default.createElement(v.default,{className:a.container,container:!0,spacing:16},p.default.createElement(v.default,{item:!0,xs:12,sm:12,md:8},p.default.createElement("div",{className:a.body},p.default.createElement(y.default,{query:n}))),p.default.createElement(v.default,{item:!0,xs:12,sm:12,md:4},p.default.createElement("div",{className:a.body},p.default.createElement("h1",null,"777"))))))}}],[{key:"getInitialProps",value:function(){var e=(0,l.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,e.abrupt("return",{query:a});case 2:case"end":return e.stop()}},e,this)}));return function t(){return e.apply(this,arguments)}}()}]),t}(p.PureComponent))||i);t.default=h},1351:function(e,t,a){"use strict";var n=a(22),r=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(a(17)),i=r(a(15)),d=r(a(16)),l=r(a(18)),o=r(a(19)),s=n(a(2)),f=a(47),c=a(448),m=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,d.default)(t,[{key:"render",value:function e(){var t=this.props.query.id;return s.default.createElement(f.Query,{query:c.SAY_DETAIL,variables:{_id:t}},function(e){var t=e.loading,a=e.error,n=e.data,r=void 0===n?{}:n,u=r.say,i=void 0===u?{}:u;return t?"Loading...":a?"Error! ".concat(a.message):s.default.createElement("div",null,i.content)})}}]),t}(s.PureComponent);t.default=m},448:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.SAY_LIST=t.SAY_DETAIL=void 0;var r=n(a(57)),u=n(a(49)),i=(0,r.default)(["\n  query SayDetail($_id: String!) {\n    say: say(_id: $_id) {\n      __typename\n      _id\n      content\n      createdAt\n      user {\n        nickname\n        avatarUrl\n      }\n    }\n  }\n"]),d=(0,r.default)(["\n  query SayList($first: Int!, $skip: Int!) {\n    list: says(first: $first, skip: $skip) {\n      __typename\n      _id\n      content\n      createdAt\n      user {\n        nickname\n        avatarUrl\n      }\n    }\n    meta: _saysMeta {\n      count\n    }\n  }\n"]),l=(0,u.default)(i);t.SAY_DETAIL=l;var o=(0,u.default)(d);t.SAY_LIST=o}},[1349]);return{page:e.default}});