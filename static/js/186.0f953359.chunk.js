"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{713:function(n,e,t){t.d(e,{AR:function(){return f},Hx:function(){return p},Wg:function(){return l},bI:function(){return h},xc:function(){return d}});var r=t(861),c=t(757),a=t.n(c),u="https://api.themoviedb.org/3",o="77b65a1040336b1047e785f5b6149d20";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var e,t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return i("".concat(u,"/trending/movie/day?api_key=").concat(o))}function h(n){return i("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}function l(n){return i("".concat(u,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function d(n){return i("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function p(n){return i("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},186:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(885),c=t(791),a=t(871),u=t(713),o=t(184);function i(){var n=(0,a.UO)().movieId,e=(0,c.useState)([]),t=(0,r.Z)(e,2),i=t[0],s=t[1];(0,c.useEffect)((function(){(0,u.Hx)(n).then((function(n){return s(n.results)}))}),[n]);var f=i.map((function(n){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author:",n.author]}),(0,o.jsx)("p",{children:n.content})]},n.author_details.username)}));return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{children:(null===i||void 0===i?void 0:i.length)>0?(0,o.jsx)("ul",{children:i&&f}):(0,o.jsx)("p",{children:"Nobody has written a review yet."})})})}}}]);
//# sourceMappingURL=186.0f953359.chunk.js.map