!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=require("react/jsx-runtime")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";n.r(t);n(2);var r=n(5),c=n.n(r),i=n(3),o=n.n(i),u=n(1),s=n(0),l=function(){return Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(u.Link,{to:"/red",children:"Red"})}),Object(s.jsx)("li",{children:Object(s.jsx)(u.Link,{to:"/blue",children:"Blue"})})]})},a=function(){return Object(s.jsx)("div",{className:"Red",children:"Red"})},f=function(){return Object(s.jsx)(a,{})},d=function(){return Object(s.jsx)("div",{className:"Blue",children:"Blue"})},j=function(){return Object(s.jsx)(d,{})},p=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(u.Route,{path:"/red",component:f}),Object(s.jsx)(u.Route,{path:"/blue",component:j})]})},b=n(4),x=n.n(b),h=n(6),m=n.n(h),O=JSON.parse(m.a.readFileSync(x.a.resolve("./build/asset-manifest.json"),"utf8")),v=Object.keys(O.files).filter((function(e){return/chunk\/js$/.exec(e)})).map((function(e){return'<script src="'.concat(O.files[e],'"><\/script>')})).join("");var y=o()(),g=o.a.static(x.a.resolve("./build"),{index:!1});y.use(g),y.use((function(e,t,n){var r=Object(s.jsx)(u.StaticRouter,{location:e.url,context:{},children:Object(s.jsx)(p,{})}),i=c.a.renderToString(r);t.send(function(e,t){return'<!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="utf-8" />\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta\n          name="viewport"\n          content="width=device-width,initial-scale=1,shrink-to-fit=no"\n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(O.files["main.css"],'" rel="stylesheet" />\n      </head>\n      <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n          ').concat(e,'\n        </div>\n        <script src="').concat(O.files["runtime-main.js"],'"><\/script>\n        ').concat(v,'\n        <script src="').concat(O.files["main.js"],'"><\/script>\n      </body>\n      </html>\n        ')}(i))})),y.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);