(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[55],{400:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e=Symbol.for("PageScrollRegistrar")},447:function(n,t){},530:function(n,t,r){"use strict";r.d(t,"a",(function(){return s}));var e=r(0),o=r(7),u=r(25),i=r(55),c=r(280),a=r(11),f=r.n(a),l=r(257),s=Object(o.h)([Object(o.f)(u.c,c.a),i.b,Object(o.g)(l.b)],(function(n,t,r){var o=[],u=[],i=f.a.throttle((function(n){u.forEach((function(t){return t(n)}))}),100),c=function(n){u.length>0&&function(n){var t,r,e=n.currentTarget,o={x:null!==(t=e.pageXOffset)&&void 0!==t?t:e.scrollLeft,y:null!==(r=e.pageYOffset)&&void 0!==r?r:e.scrollTop};i(o)}(n),o.forEach((function(t){return t(n)}))};return{registerToThrottledScroll:function(n){u.push(n)},registerToScroll:function(n){o.push(n)},pageDidUnmount:function(){return Object(e.b)(this,void 0,void 0,(function(){return Object(e.d)(this,(function(n){return t&&t.removeEventListener("scroll",c),[2]}))}))},pageDidMount:function(n){return Object(e.b)(this,void 0,void 0,(function(){return Object(e.d)(this,(function(e){return r&&r.isPopupPage(n)?r.registerToPopupEvent("popupScroll",c):t&&t.addEventListener("scroll",c),[2]}))}))}}}))},728:function(n,t,r){"use strict";r.r(t),r.d(t,"page",(function(){return f}));var e=r(51),o=r(400);r.d(t,"PageScrollRegistrarSymbol",(function(){return o.a}));var u=r(530),i=r(280);r.d(t,"name",(function(){return i.a}));var c=r(447);for(var a in c)["default","page","name","PageScrollRegistrarSymbol"].indexOf(a)<0&&function(n){r.d(t,n,(function(){return c[n]}))}(a);var f=function(n){n(e.a.PageDidMountHandler,e.a.PageDidUnmountHandler,o.a).to(u.a)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/pageScroll.fa216fc9.chunk.min.js.map