_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,c=void 0!==i&&i;return n||o&&c}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),a=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var f=l[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var d=o.props[f],p=r[f]||new Set;"name"===f&&c||!p.has(d)?(p.add(d),r[f]=p):i=!1}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var b=h;e.default=b},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Juyh:function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),o=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),a=n("md7G"),u=n("foSv"),s=n("q1tI");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var d=function(t){Object(c.a)(n,t);var e=f(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:"about-display",children:[Object(r.jsx)("h3",{children:"ABOUT"}),Object(r.jsxs)("p",{id:"about-tags",children:[Object(r.jsx)("b",{children:"Education: "}),"Bachelors in Computer Engineering - Tennessee Tech University"]}),Object(r.jsxs)("p",{id:"about-tags",children:[Object(r.jsx)("b",{children:"Programming Languages: "}),"C, C++, Assembly, Java, C#, Lua, Javascript."]}),Object(r.jsxs)("p",{id:"about-tags",children:[Object(r.jsx)("b",{children:"Job: "}),"Student"]}),Object(r.jsxs)("p",{id:"about-tags",children:[Object(r.jsx)("b",{children:"Email: "}),"ayheathcott@outlook.com"]}),Object(r.jsxs)("p",{id:"about-text",children:["Adison Heathcott is student at Tennessee Tech University seeking a Bachelors in Computer Engineering. After completing his degree he plans to continue his education by pursuing a masters degree in Quantum Computing.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"While pursuing his degree Adison spends his spare time programming. During his projects he has gained skills in C, C++, Assembly, Java, C#, Lua, HTML, CSS, Javascript, and more. Some of his projects have been in Operating System Development, Game Engine Development with Vulkan and OpenGL, WPF, React Native, React based Websites, VS Code addons, and many more."]})]})}}]),n}(n.n(s).a.Component);e.default=d},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return g})),n.d(e,"default",(function(){return x}));var r=n("nKUr"),o=n("1OyB"),i=n("vuIU"),c=n("JX7q"),a=n("Ji7U"),u=n("md7G"),s=n("foSv"),f=n("rePB"),d=n("q1tI"),l=n.n(d),p=n("g4pe"),h=n.n(p),b=n("YFqc"),v=n.n(b),j=n("IP2g"),y=n("Juyh"),m=n("yYy+");function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var g=!0,x=function(t){Object(a.a)(n,t);var e=O(n);function n(t){var r;return Object(o.a)(this,n),r=e.call(this,t),Object(f.a)(Object(c.a)(r),"showNavBar",(function(){r.setState({showNavBar:!r.state.showNavBar})})),r.state={showNavBar:!1},r}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(h.a,{children:[Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width: device-width"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"Description",content:this.props.description}),Object(r.jsx)("title",{children:this.props.title})]}),Object(r.jsxs)("div",{id:"homepage-div",children:[Object(r.jsxs)("div",{id:"top-display",children:[Object(r.jsx)("div",{id:"buffer-div"}),Object(r.jsxs)("div",{id:"tinted-display",children:[Object(r.jsx)("h1",{id:"name-text",children:"Adison Heathcott"}),Object(r.jsx)("p",{children:"| Computer Engineering | Software |"})]}),Object(r.jsxs)("div",{id:"social-div",children:[Object(r.jsxs)("div",{id:"social-tinted",children:[Object(r.jsx)("button",{id:"navbar-button",onClick:this.showNavBar,children:Object(r.jsx)(j.a,{id:"social-icon",icon:["fas","bars"],size:"3x",style:{transform:this.state.showNavBar?"rotate(-90deg)":"rotate(0deg)"}})}),Object(r.jsx)("button",{id:"social-button",onClick:function(t){t.preventDefault(),window.location.href="https://www.linkedin.com/in/adison-heathcott-13958119b/"},children:Object(r.jsx)(j.a,{id:"social-icon",icon:["fab","linkedin"],size:"3x"})}),Object(r.jsx)("button",{id:"social-button",onClick:function(t){t.preventDefault(),window.location.href="https://github.com/adisonyheathcott"},children:Object(r.jsx)(j.a,{id:"social-icon",icon:["fab","github"],size:"3x"})})]}),Object(r.jsx)("div",{id:"nav-menu",style:{display:this.state.showNavBar?"inline-flex":"none"},children:Object(r.jsx)(v.a,{href:"/posts",as:"/adison_heathcott/posts",children:Object(r.jsx)("button",{id:"nav-button",children:"Posts"})})})]})]}),Object(r.jsx)(y.default,{}),Object(r.jsx)(m.default,{})]})]})}}]),n}(l.a.Component)},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),a=n("a1gu"),u=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),d=function(t){c(n,t);var e=s(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=d},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},g4pe:function(t,e,n){t.exports=n("8Kt/")},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},"yYy+":function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),o=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),a=n("md7G"),u=n("foSv"),s=n("q1tI"),f=n.n(s),d=n("IP2g");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var p=function(t){Object(c.a)(n,t);var e=l(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{id:"footer-div",children:Object(r.jsxs)("div",{id:"footer-social",children:[Object(r.jsx)("button",{id:"social-button",onClick:function(t){t.preventDefault(),window.location.href="https://www.linkedin.com/in/adison-heathcott-13958119b/"},children:Object(r.jsx)(d.a,{id:"social-icon",icon:["fab","linkedin"],size:"2x"})}),Object(r.jsx)("button",{id:"social-button",onClick:function(t){t.preventDefault(),window.location.href="https://github.com/adisonyheathcott"},children:Object(r.jsx)(d.a,{id:"social-icon",icon:["fab","github"],size:"2x"})})]})})}}]),n}(f.a.Component);e.default=p}},[["vlRD",0,1,2,3,4]]]);