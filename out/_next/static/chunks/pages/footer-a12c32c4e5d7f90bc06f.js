_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},IP2g:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("7O5W"),o=n("17x9"),i=n.n(o),a=n("q1tI"),c=n.n(a);function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),o=y(e.slice(0,r)),i=e.slice(r+1).trim();return o.startsWith("webkit")?t[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:t[o]=i,t}),{})}var O=!1;try{O=!0}catch(w){}function m(t){return r.c.icon?r.c.icon(t):null===t?null:"object"===u(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function h(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?f({},t,e):{}}function v(t){var e=t.forwardedRef,n=p(t,["forwardedRef"]),o=n.icon,i=n.mask,a=n.symbol,c=n.className,u=n.title,s=n.titleId,y=m(o),d=h("classes",[].concat(b(function(t){var e,n=t.spin,r=t.pulse,o=t.fixedWidth,i=t.inverse,a=t.border,c=t.listItem,u=t.flip,s=t.size,l=t.rotation,p=t.pull,b=(f(e={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(s),"undefined"!==typeof s&&null!==s),f(e,"fa-rotate-".concat(l),"undefined"!==typeof l&&null!==l&&0!==l),f(e,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),f(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map((function(t){return b[t]?t:null})).filter((function(t){return t}))}(n)),b(c.split(" ")))),w=h("transform","string"===typeof n.transform?r.c.transform(n.transform):n.transform),g=h("mask",m(i)),x=Object(r.a)(y,l({},d,{},w,{},g,{symbol:a,title:u,titleId:s}));if(!x)return function(){var t;!O&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var P=x.abstract,_={ref:e};return Object.keys(n).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(_[t]=n[t])})),j(P[0],_)}v.displayName="FontAwesomeIcon",v.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([0,90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return t(e,n)})),i=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=d(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[y(e)]=r}return t}),{attrs:{}}),a=r.style,c=void 0===a?{}:a,u=p(r,["style"]);return i.attrs.style=l({},i.attrs.style,{},c),e.apply(void 0,[n.tag,l({},i.attrs,{},u)].concat(b(o)))}.bind(null,c.a.createElement)},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},nI4o:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/footer",function(){return n("yYy+")}])},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},"yYy+":function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),o=n("1OyB"),i=n("vuIU"),a=n("Ji7U"),c=n("md7G"),u=n("foSv"),f=n("q1tI"),s=n.n(f),l=n("IP2g");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var b=function(t){Object(a.a)(n,t);var e=p(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{id:"footer-div",children:Object(r.jsxs)("div",{id:"footer-social",children:[Object(r.jsx)("button",{id:"social-button",onClick:function(t){t.preventDefault(),window.location.href="https://www.linkedin.com/in/adison-heathcott-13958119b/"},children:Object(r.jsx)(l.a,{id:"social-icon",icon:["fab","linkedin"],size:"2x"})}),Object(r.jsx)("button",{id:"social-button",onClick:function(t){t.preventDefault(),window.location.href="https://github.com/adisonyheathcott"},children:Object(r.jsx)(l.a,{id:"social-icon",icon:["fab","github"],size:"2x"})})]})})}}]),n}(s.a.Component);e.default=b}},[["nI4o",0,1,3]]]);