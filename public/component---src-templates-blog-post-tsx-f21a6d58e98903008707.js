(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IP2g:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r("7O5W"),a=r("17x9"),o=r.n(a),l=r("q1tI"),i=r.n(l);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function b(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),a=y(e.slice(0,n)),o=e.slice(n+1).trim();return a.startsWith("webkit")?t[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:t[a]=o,t}),{})}var d=!1;try{d=!0}catch(w){}function v(t){return null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function O(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function g(t){var e=t.forwardedRef,r=p(t,["forwardedRef"]),a=r.icon,o=r.mask,l=r.symbol,i=r.className,s=r.title,u=v(a),y=O("classes",[].concat(m(function(t){var e,r=t.spin,n=t.pulse,a=t.fixedWidth,o=t.inverse,l=t.border,i=t.listItem,s=t.flip,u=t.size,f=t.rotation,p=t.pull,m=(c(e={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),null!=u),c(e,"fa-rotate-".concat(f),null!=f&&0!==f),c(e,"fa-pull-".concat(p),null!=p),c(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(m).map((function(t){return m[t]?t:null})).filter((function(t){return t}))}(r)),m(i.split(" ")))),b=O("transform","string"==typeof r.transform?n.c.transform(r.transform):r.transform),w=O("mask",v(o)),x=Object(n.b)(u,f({},y,{},b,{},w,{symbol:l,title:s}));if(!x)return function(){var t;!d&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",u),null;var j=x.abstract,E={ref:e};return Object.keys(r).forEach((function(t){g.defaultProps.hasOwnProperty(t)||(E[t]=r[t])})),h(j[0],E)}g.displayName="FontAwesomeIcon",g.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return t(e,r)})),o=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=b(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[y(e)]=n}return t}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,s=p(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},i),e.apply(void 0,[r.tag,f({},o.attrs,{},s)].concat(m(a)))}.bind(null,i.a.createElement)},cZrw:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return u}));var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),l=r("IP2g"),i=r("wHSu"),s=r("Th6I"),c=r("H8eV");e.default=function(t){var e,r,n,u,f,p,m,y,b,d,v=t.data,O=t.pageContext,g=v.markdownRemark,h=(null===(e=v.site)||void 0===e||null===(r=e.siteMetadata)||void 0===r||r.title,O.previous),w=O.next;return a.a.createElement(s.a,{title:null==g||null===(n=g.frontmatter)||void 0===n?void 0:n.title,date:null==g||null===(u=g.frontmatter)||void 0===u?void 0:u.date},a.a.createElement(c.a,{title:null==g||null===(f=g.frontmatter)||void 0===f?void 0:f.title,description:(null==g||null===(p=g.frontmatter)||void 0===p?void 0:p.description)||(null==g?void 0:g.excerpt)}),a.a.createElement("article",{className:"max-w-screen-sm mx-auto blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.a.createElement("section",{dangerouslySetInnerHTML:{__html:null==g?void 0:g.html},itemProp:"articleBody"})),a.a.createElement("nav",{className:"paginate"},a.a.createElement("ul",{className:"paginate-list"},a.a.createElement("li",null,h&&a.a.createElement(o.Link,{to:null==h||null===(m=h.fields)||void 0===m?void 0:m.slug,rel:"prev"},a.a.createElement(l.a,{icon:i.a}),a.a.createElement("span",{style:{marginLeft:"0.5em"}},null==h||null===(y=h.frontmatter)||void 0===y?void 0:y.title))),a.a.createElement("li",null,w&&a.a.createElement(o.Link,{to:null==w||null===(b=w.fields)||void 0===b?void 0:b.slug,rel:"next"},a.a.createElement("span",{style:{marginRight:"0.5em"}},null==w||null===(d=w.frontmatter)||void 0===d?void 0:d.title),a.a.createElement(l.a,{icon:i.b}))))))};var u="10472337"}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-f21a6d58e98903008707.js.map