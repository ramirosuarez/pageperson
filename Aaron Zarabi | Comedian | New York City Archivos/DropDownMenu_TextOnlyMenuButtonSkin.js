(("undefined"!=typeof self?self:this).webpackJsonp_thunderbolt_elements=("undefined"!=typeof self?self:this).webpackJsonp_thunderbolt_elements||[]).push([[115],{1055:function(e,t,n){e.exports={wrapper:"_2cbNh",navContainer:"zmzdJ",itemsContainerWrapper:"_1lx0g",itemsContainer:"_3ryjj",menuItem:"_3vxeZ",dropdownButton:"_1Xzw5",dropWrapper:"GQcif",moreContainer:"_3u_t0",showMore:"_322RQ",moreButton:"_2LjR0",utility:"_1QReQ",TextOnlyMenuButtonSkin:"_13c26",textOnlyMenuButtonSkin:"_13c26"}},259:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n(170),o=n(604),a=n(792),s=n(1055),u=n.n(s);t.default=function(e){return i.createElement(o.a,Object(r.a)({},e,{styles:u.a,Button:a.a}))}},602:function(e,t,n){"use strict";var r=n(3),i=n(170);t.a=function(e){var t=e.label,n=e.direction,o=void 0===n?"ltr":n,a=e.positionInList,s=e.parentId,u=e.dataId,l=e.isContainer,c=e.isSelected,d=e.isHovered,p=e.link,m=e.tagName,v=void 0===m?"div":m,f=e.id,h=e.className,b=e.onClick,g=e.onMouseEnter,k=e.onMouseLeave,y=e.index,w=e.children,_=e.isDropDownButton,I=e.isTouchDevice,M={"data-direction":o,"data-listposition":a,"data-parent-id":s,"data-data-id":u,"data-state":[l?"drop":"menu",c&&"selected",d&&"over",p&&(p.hasOwnProperty("href")||p.hasOwnProperty("target")||p.hasOwnProperty("rel")||p.hasOwnProperty("linkPopupId"))?"link":"header"].join(" "),"data-index":y,"data-dropdown":_};return i.createElement(v,Object(r.a)({id:f},M,{className:h,onClick:I?b:void 0,onMouseEnter:I?void 0:g,onMouseLeave:I?void 0:k,onFocus:I?void 0:g,onBlur:I?void 0:k}),w(t?t.trim():"\xa0"))}},603:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(170),i=n.n(r),o=n(597),a=n.n(o),s=function(e){var t=e.dir,n=e.textAlign,r=e.className,o=e.children,a=e.tagName,s=void 0===a?"p":a,u=e.id;return i.a.createElement(s,{className:r,style:{textAlign:n},dir:t,id:u+"label"},o)};t.b=function(e){var t=e.wrapperProps,n=t.dir,r=t.textAlign,o=t.id,u=e.classNames,l=e.children;return i.a.createElement("div",{className:a()(u.bg),style:{textAlign:r}},i.a.createElement(s,{dir:n,textAlign:r,className:u.label,id:o},l))}},604:function(e,t,n){"use strict";var r=n(3),i=n(170),o=n(597),a=n.n(o),s=new Set(["PointerMenuButtonHorizontalMenuAdaptationSkin","PointerMenuButtonSkin","VerticalRibbonsMenuButtonSkin","RibbonsMenuButtonSkin"]),u="data-dropdown-shown",l=function(e,t,n,i){void 0===e&&(e=[]),void 0===t&&(t=""),void 0===n&&(n={}),void 0===i&&(i="");var o=function(e,t){var n=t.compId||t.dataId,r=new Set;return n&&(r=new Set(e.filter((function(e){return function(e,t){return e.link&&(e.link.anchorCompId&&e.link.anchorCompId===t.compId||e.link.anchorDataId&&e.link.anchorDataId===t.dataId)}(e,t)})))),r}(e,n),a=function(e,t){return e.filter((function(e){return e.link&&e.link.linkPopupId&&e.link.linkPopupId===t}))}(e,i),s=new Set(Object(r.f)(Array.from(o),Array.from(a))),u=s.size>0;return e.forEach((function(e){var r=e.items&&e.items.length?l(e.items,t,n):new Set;(function(e,t,n){return!n&&!function(e){return e.link&&(e.link.anchorDataId||e.link.anchorCompId)}(e)&&e.link&&e.link.href===t}(e,t,u)||e.link&&Object.keys(e.link).length>0&&r.size>0)&&s.add(e),r.forEach((function(e){return s.add(e)}))})),s};var c=function(e){var t=i.useMemo((function(){return l(e.items,e.currentPrimaryPageHref,e.activeAnchor,e.currentPopupId)}),[e.items,e.currentPrimaryPageHref,e.activeAnchor,e.currentPopupId]),n=function(e,t){var n=e.Button,o={onMouseEnter:e.onItemMouseEnter,onMouseLeave:e.onItemMouseLeave,onClick:e.onItemClick,textAlign:e.alignText,isTouchDevice:e.isTouchDevice},a=Object(r.a)(Object(r.a)({},o),t);return i.createElement(n,Object(r.a)({},a))};function o(e,t,n,r,i,o){return e===t-1?1===t?"dropLonely":n?"bottom":o||"right"===i?r?"left":"right":"center":0===e?n?"top":o||"left"===i?r?"right":"left":"center":n?"dropCenter":"center"}var c=function(e,t){for(var n=e,r=0;t[n]&&r<100;)n+=t[n]++,r++;return t[n]=(t[n]||0)+1,n},d=function(e,r){var i=r.items,a=void 0===i?[]:i,s=r.className,u=r.dropdown,l=r.rtl,d=r.buttonAlign,p=r.stretch,m={};return a.map((function(r,i){var v,f,h=(u?"moreContainer":"")+i,b={isContainer:u,isSelected:t.has(r),positionInList:r.positionInList||o(i,a.length,u,l,d,p),id:_(h),index:i,refInParent:h,isDropDownButton:u,"aria-haspopup":r.hasPopup||(null!==(f=null===(v=null==r?void 0:r.items)||void 0===v?void 0:v.length)&&void 0!==f?f:0)>0,tagName:"li",direction:l?"rtl":"ltr",parentId:r.parent,dataId:r.id,label:r.label,link:r.link,className:s,key:c(r.label,m)};return n(e,b)}))};function p(e){var t=e.styles,r=e.items,i=e.rtl,o=e.stretchButtonsToMenuWidth,a=e.alignButtons,s=d(e,{items:r,className:t.menuItem,rtl:i,buttonAlign:a,stretch:o}),u=function(e){var t=e.rtl,r=e.styles,i=e.stretchButtonsToMenuWidth,o=e.alignButtons,a=e.moreButtonLabel,s=e.onItemMouseEnter,u=e.onItemMouseLeave,l=e.onSubMenuKeyDown,c=t?"left":"right";i||"right"===o||(c="center");var d={label:a||"",isSelected:!1,positionInList:c,id:_("__more__"),index:"__more__",refInParent:"__more__",key:"__more__",onFocus:s,onBlur:u,"aria-haspopup":!0,tagName:"li",onKeyDown:l,isDropDownButton:!1,className:r.moreButton,isMoreButton:!0};return n(e,d)}(e);return u&&s.push(u),s}function m(e){var t=e.items,n=e.rtl,i=e.alignButtons,o=e.stretchButtonsToMenuWidth,a=e.hover,s=e.styles,u=null,l=[];if(t&&a){var c=parseInt(a,10);Number.isInteger(c)&&t[c]?u=t[c].items:"__more__"===a&&(u=function(e){return e.reduce((function(e,t){var n=[];return t.items&&(n=t.items.map((function(e){return Object(r.a)(Object(r.a)({},e),{parent:t.id})}))),Object(r.f)(e,[t],n)}),[])}(t))}return u&&(l=d(e,{items:u,className:s.dropdownButton,dropdown:!0,rtl:n,buttonAlign:i,stretch:o})),l}var v,f,h,b,g,k,y,w,_=function(t){return""+e.id+t};return f=(v=e).translate,h=v.styles,b=function(e){var t=e.styles,n=e.skin,r=e.alignButtons,o=e.marginAllChildren,s=e.onMenuKeyDown,u=p(e),l=_("itemsContainer"),c=i.createElement("ul",{className:a()(t.itemsContainer,t[""+r]),id:l,style:{textAlign:r},"data-marginallchildren":o,onKeyDown:s},u);if(function(){switch(n){case"IndentedMenuButtonSkin":case"ShinyMenuIIButtonSkin":case"SloppyBorderMenuButtonSkin":return!0;default:return!1}}()){var d=_("wrapper");c=i.createElement("div",{className:a()(t.itemsContainerWrapper),id:d},c)}return c}(v),g=function(e){var t=e.skin,n=e.styles,r=null;return s.has(t)&&(r=i.createElement("div",{className:n.utility})),r}(v),k=function(e){var t,n,o,s=e.alignButtons,l=e.onSubMenuKeyDown,c=e.hover,d=e.styles,p=m(e),v=_("moreContainer"),f=_("dropWrapper"),h=(null!==(o=null==p?void 0:p.length)&&void 0!==o?o:0)>0,b=a()(d.dropWrapper,((t={})[d.showMore]=h,t)),g=h,k=function(e){var t=e.hover,n=e.hoverListPosition;return t?n:null}(e);return i.createElement("div",Object(r.a)({className:b,id:f,"data-drophposition":k,"data-dropalign":s},((n={})[u]=g,n)),i.createElement("ul",{className:d.moreContainer,"data-hover":c,id:v,onKeyDown:l},p))}(v),y=f("ariaLabels","dropDownMenu_AriaLabel_TopLevel_SiteNavigation","Site"),w=_("navContainer"),i.createElement("nav",{className:a()(h.navContainer),id:w,"aria-label":y,onMouseEnter:v.onMouseEnter,onMouseLeave:v.onMouseLeave},g,b,k)},d={hover:null,hoverListPosition:null},p=function(e){var t,n,o,s,u,l,p,m,v=i.useState(d),f=v[0],h=v[1],b=i.useRef(),g=function(n){var r,i=f.hover,o=e.id,a=n.currentTarget,s=a.getAttribute("data-listposition"),u=a.getAttribute("data-index")||"-1",l=parseInt(u,10);clearTimeout(t),(null===(r=null==a?void 0:a.parentNode)||void 0===r?void 0:r.id)!==o+"moreContainer"&&(Number.isInteger(l)&&-1!==l||u.startsWith("__"))&&u!==i&&h({hover:u,hoverListPosition:s})},k=function(){t=setTimeout((function(){h({hover:null,hoverListPosition:null})}),1e3)},y=function(t){var n=f.hover,r=e.items,i=t.currentTarget,o=i.getAttribute("data-index")||"-1",a="true"===i.getAttribute("data-dropdown"),s=parseInt(o,10),u=r?r[s]:null,l="__more__"===o||u&&u.items;a?k():n?(k(),l&&n!==o&&(t.preventDefault(),t.stopPropagation(),g(t))):l&&(g(t),t.preventDefault(),t.stopPropagation())},w=function(e,t){var n;if(void 0===t&&(t=!1),b.current){for(var r=b.current.querySelector("li:nth-child("+(e+1)+")");r&&"true"===r.getAttribute("aria-hidden");)r=t?r.previousSibling:r.nextSibling;if(r){var i=null===(n=r.childNodes)||void 0===n?void 0:n[0];i&&i.focus()}}},_=function(t){var n=f.hover,r=e.items,i=t.key,o=t.shiftKey;if("Tab"===i&&null!==n){var a=n?parseInt(n,10):-1,s=!1;if(!o&&r){var u=r[a];u&&u.items&&(s=!0,function(t){var n=e.id;if(b.current){var r=b.current.querySelector("#"+n+"moreContainer li:nth-child("+(t+1)+") a");r&&r.focus()}}(0))}s&&(t.stopPropagation(),t.preventDefault())}},I=function(t){var n=f.hover,r=e.items,i=t.shiftKey,o=t.key,a=t.target,s=a;if(a!==t.currentTarget&&"li"!==a.tagName.toLowerCase()&&(s=a.closest("li")),s){var u=s.getAttribute("data-index")||"",l=!1;if(n&&"Tab"===o){var c=parseInt(n,10)||-1,d=parseInt(u,10);if(c>=0)if(i)0===d&&(l=!0,w(c,i));else if(r&&r[c]){var p=r[c];p&&p.items&&p.items.length===d+1&&(l=!0,w(c+1))}}l&&(t.stopPropagation(),t.preventDefault())}};return o=f,s=(n=e).id,u=n.skin,l=n.rtl,p=n.styles,m=Object(r.a)({id:s,class:a()(p[u],p.wrapper,"hidden-during-prewarmup"),ref:b,dir:l?"rtl":"ltr"},function(e,t){var n=t.hover,r=t.hoverListPosition,i=e.stretchButtonsToMenuWidth,o=e.sameWidthButtons,a=e.skinExports,s=e.alignButtons,u=e.items;return{"data-stretch-buttons-to-menu-width":i,"data-same-width-buttons":o,"data-num-items":null==u?void 0:u.length,"data-menuborder-y":a.menuBorderY,"data-menubtn-border":a.menuBtnBorder,"data-ribbon-els":a.ribbonEls,"data-label-pad":a.labelPad,"data-ribbon-extra":a.ribbonExtra,"data-drophposition":r,"data-dropalign":s,"data-hovered-item":n}}(n,o)),i.createElement("wix-dropdown-menu",Object(r.a)({},m),i.createElement(c,Object(r.a)({},n,o,{onItemMouseEnter:g,onItemMouseLeave:k,onItemClick:y,onMenuKeyDown:_,onSubMenuKeyDown:I})))};p.defaultProps={alignButtons:"center"};t.a=p},606:function(e,t,n){"use strict";var r=n(3),i=n(170),o=n.n(i),a=n(599);t.a=function(e){var t=e.wrapperProps,n=t.ariaHasPopup,i=t.isMoreButton,s=e.className,u=e.children,l=e.link;return o.a.createElement(a.a,Object(r.a)({},l,{"aria-haspopup":!!n,tabIndex:!i&&l&&l.href?void 0:0,className:s}),u)}},643:function(e,t,n){"use strict";var r=n(3),i=n(170),o=n(597),a=n.n(o),s=n(606),u=n(603),l=n(602);t.a=function(e){var t=e.id,n=e.isDropDownButton,o=e["aria-haspopup"],c=e.isMoreButton,d=e.dir,p=e.textAlign,m=e.positionInList,v=e.link,f=e.skinsStyle,h=e.skin;return i.createElement(l.a,Object(r.a)({},e,{className:a()(e.className,f[h])}),(function(e){return i.createElement(s.a,{wrapperProps:{positionInList:m,ariaHasPopup:n&&o,isMoreButton:c},link:v,className:f.linkElement},i.createElement("div",{className:f.wrapper},i.createElement(u.b,{wrapperProps:{dir:d,textAlign:p,id:t},classNames:{bg:f.bg,label:f.label}},e)))}))}},792:function(e,t,n){"use strict";var r=n(3),i=n(170),o=n(643),a=n(793),s=n.n(a);t.a=function(e){return i.createElement(o.a,Object(r.a)({},e,{skinsStyle:s.a,skin:"TextOnlyMenuButtonNSkin"}))}},793:function(e,t,n){e.exports={root:"_2Kt7m",TextOnlyMenuButtonNSkin:"_2TFvc",textOnlyMenuButtonNSkin:"_2TFvc",linkElement:"_25Cim",wrapper:"_3zfdd",label:"_3YCIf"}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/DropDownMenu_TextOnlyMenuButtonSkin.56d07fb9.chunk.min.js.map