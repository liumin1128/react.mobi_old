module.exports=__NEXT_REGISTER_PAGE("/article/detail",function(){var e=webpackJsonp([19],{1185:function(e,t,n){e.exports=n(1186)},1186:function(e,t,n){"use strict";var a=n(6),r=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u,l=a(n(66)),d=a(n(67)),o=a(n(17)),c=a(n(15)),s=a(n(16)),f=a(n(18)),m=a(n(19)),p=r(n(2)),_=n(25),v=a(n(87)),E=a(n(1187)),y=function(e){return{root:{flexGrow:1,maxWidth:1110,margin:"auto",marginTop:3*e.spacing.unit},body:{maxWidth:760,width:"100%",margin:"0 auto"},container:{boxSizing:"border-box",margin:0,width:"100%","@media (max-width: 960px)":{margin:0}}}},A=(i=(0,_.withStyles)(y),i(u=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function e(){var t=this.props,n=t.classes,a=t.query;return p.default.createElement("div",{className:n.root},p.default.createElement("div",{className:n.root},p.default.createElement(v.default,{className:n.container,container:!0,spacing:16},p.default.createElement(v.default,{item:!0,xs:12,sm:12,md:8},p.default.createElement("div",{className:n.body},p.default.createElement(E.default,{query:a}))),p.default.createElement(v.default,{item:!0,xs:12,sm:12,md:4},p.default.createElement("div",{className:n.body},p.default.createElement("h1",null,"777"))))))}}],[{key:"getInitialProps",value:function(){var e=(0,d.default)(l.default.mark(function e(t){var n;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.abrupt("return",{query:n});case 2:case"end":return e.stop()}},e,this)}));return function t(){return e.apply(this,arguments)}}()}]),t}(p.PureComponent))||u);t.default=A},1187:function(e,t,n){"use strict";var a=n(22),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(17)),u=r(n(15)),l=r(n(16)),d=r(n(18)),o=r(n(19)),c=a(n(2)),s=n(47),f=n(483),m=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function e(){var t=this.props.query.id;return c.default.createElement(s.Query,{query:f.ARTICLE_DETAIL,variables:{_id:t}},function(e){var t=e.loading,n=e.error,a=e.data,r=void 0===a?{}:a,i=r.article,u=void 0===i?{}:i;return t?"Loading...":n?"Error! ".concat(n.message):c.default.createElement("div",null,u.content)})}}]),t}(c.PureComponent);t.default=m},483:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.CREATE_ARTICLE=t.ARTICLE_LIST=t.ARTICLE_DETAIL=void 0;var r=a(n(57)),i=a(n(49)),u=(0,r.default)(["\n  query ArticleDetail($_id: String!) {\n    article: article(_id: $_id) {\n      __typename\n      _id\n      title\n      cover\n      content\n      createdAt\n      user {\n        nickname\n        avatarUrl\n      }\n    }\n  }\n"]),l=(0,r.default)(["\n  query ArticleList($first: Int!, $skip: Int!) {\n    list: articles(first: $first, skip: $skip) {\n      __typename\n      _id\n      title\n      cover\n      content\n      createdAt\n      user {\n        nickname\n        avatarUrl\n      }\n    }\n    meta: _articlesMeta {\n      count\n    }\n  }\n"]),d=(0,r.default)(["\n  mutation ($input: ArticleInput) {\n    item: createArticle(input: $input) {\n      __typename\n      _id\n      title\n      cover\n      content\n      createdAt\n      user {\n        nickname\n        avatarUrl\n      }\n    }\n  }\n"]),o=(0,i.default)(u);t.ARTICLE_DETAIL=o;var c=(0,i.default)(l);t.ARTICLE_LIST=c;var s=(0,i.default)(d);t.CREATE_ARTICLE=s}},[1185]);return{page:e.default}});