(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[89],{462:function(n,t){},558:function(n,t,e){"use strict";e.r(t),e.d(t,"site",(function(){return p}));var r=e(51),i=e(559),o=e(279);e.d(t,"TpaWorkerSymbol",(function(){return o.a}));var a=e(462);for(var u in a)["default","site","TpaWorkerSymbol"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(u);var p=function(n){n(r.a.AppDidMountHandler,o.a).to(i.a)}},559:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(0),i=e(7),o=e(25),a=e(364),u=e(254),p=e(279),c=Object(i.h)([Object(i.f)(o.f,p.b),a.d,a.b,u.e,u.b],(function(n,t,e,i,o){var a=n.tpaWorkers,u=new RegExp("^tpaWorker_([0-9]+)$");return{appDidMount:function(){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(n){return[2,Promise.all(Object.entries(a).map((function(n){var a=Object(r.e)(n,2),u=a[0],p=a[1];return function(n){var a=n.applicationId,u=n.appDefinitionId,p=n.appWorkerUrl,c=n.appDefinitionName;return Object(r.b)(void 0,void 0,Promise,(function(){var n,d;return Object(r.d)(this,(function(r){switch(r.label){case 0:return n="tpaWorker_"+a,o.registerTpasForContext("masterPage",[n]),e.update(((d={})[n]={title:c,src:i.buildSrc(n,"masterPage",{},p,{extraQueryParams:{endpointType:"worker"},appDefinitionId:u})},d)),[4,t.addComponentToDynamicStructure(n,{components:[],componentType:"TPAWorker"})];case 1:return r.sent(),[2,n]}}))}))}(Object(r.a)({applicationId:u},p))})))]}))}))},getAppDefinitionId:function(n){var t,e,r=null===(t=u.exec(n))||void 0===t?void 0:t[1];return(null===(e=a[r])||void 0===e?void 0:e.appDefinitionId)||null},isTpaWorker:function(n){return u.test(n)}}}))}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/tpaWorkerFeature.3f06744d.chunk.min.js.map