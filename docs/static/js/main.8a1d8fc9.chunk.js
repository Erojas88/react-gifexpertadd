(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),i=n.n(c),r=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})},j=n(11),d=n(6),l=n.n(d),m=n(9),b=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=5sTg6dsl86iiMlI77RZJfWNUkw8jLaP6"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},p=(n(7),function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,i=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__bounce animate__fadeIn",children:t}),i&&Object(u.jsx)("p",{className:"animate__animated animate__bounce animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid animate__animated animate__bounce animate__fadeIn",children:c.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))})]})}),O=function(){var e=Object(a.useState)(["One Punch"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))},7:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.8a1d8fc9.chunk.js.map