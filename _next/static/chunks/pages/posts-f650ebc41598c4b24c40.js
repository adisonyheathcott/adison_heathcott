_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,c=void 0!==i&&i;return n||o&&c}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),a=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var f=l[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var d=o.props[f],p=r[f]||new Set;"name"===f&&c||!p.has(d)?(p.add(d),r[f]=p):i=!1}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var b=h;e.default=b},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},JuWx:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("atmB")}])},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),a=n("a1gu"),u=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),d=function(t){c(n,t);var e=s(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=d},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},atmB:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return O}));var r=n("nKUr"),o=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),a=n("md7G"),u=n("foSv"),s=n("q1tI"),f=n.n(s),d=n("g4pe"),l=n.n(d),p=n("YFqc"),h=n.n(p),b=n("hb5E"),y=n.n(b),v=n("IP2g");function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var m=function(t){Object(c.a)(n,t);var e=j(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"Description",content:this.props.description}),Object(r.jsx)("title",{children:this.props.title})]}),Object(r.jsxs)("div",{id:"posts-div",children:[Object(r.jsxs)("div",{id:"posts-div-top",children:[Object(r.jsx)(h.a,{href:"/adison_heathcott/",children:Object(r.jsx)("button",{children:Object(r.jsx)(v.a,{id:"home-icon",icon:["fas","home"],size:"2x"})})}),Object(r.jsx)("h3",{children:"POSTS"})]}),Object(r.jsx)("div",{id:"post-categories-div",children:Object(r.jsx)("ul",{children:this.props.cats.map((function(e,n){return Object(r.jsxs)("li",{id:"cat-li",children:[Object(r.jsxs)("button",{id:"cat-li-button",children:[Object(r.jsx)("p",{children:e}),Object(r.jsx)(v.a,{id:"down-icon",icon:["fas","caret-down"],size:"2x"})]}),Object(r.jsx)("ul",{id:"cat-ul",children:t.props.files[n].map((function(t,e){return Object(r.jsx)("li",{id:"cat-li-li",children:Object(r.jsx)(h.a,{href:"/".concat(y()(t).data.slug),children:Object(r.jsx)("button",{id:"cat-li-li-button",children:y()(t).data.title})})},e)}))})]},n)}))})})]})]})}}]),n}(f.a.Component),O=!0;e.default=m},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},g4pe:function(t,e,n){t.exports=n("8Kt/")},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["JuWx",0,1,5,2,3,4,6]]]);