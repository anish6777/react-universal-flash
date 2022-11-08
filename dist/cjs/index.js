"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}var a={top_left:"ruv-top ruv-left",top_right:"ruv-top ruv-right",top_center:"ruv-top ruv-center",bottom_right:"ruv-bottom ruv-right",bottom_left:"ruv-bottom ruv-left",bottom_center:"ruv-bottom ruv-center",TOP_LEFT:"ruv-top ruv-left",TOP_RIGHT:"ruv-top ruv-right",TOP_CENTER:"ruv-top ruv-center",BOTTOM_RIGHT:"ruv-bottom ruv-right",BOTTOM_LEFT:"ruv-bottom ruv-left",BOTTOM_CENTER:"ruv-bottom ruv-center","":"ruv-bottom ruv-center"};function i(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}i(".ruv {\n  z-index: 999;\n  position: fixed;\n  width: auto;\n  height: auto;\n  min-width: 30%;\n}\n\n.ruv-top {\n  top: 10;\n}\n\n.ruv-bottom {\n  bottom: 10;\n}\n\n.ruv-left {\n  left: 10;\n}\n\n.ruv-center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n");var c=function(t){var i=t.as,c=t.flashes,s=t.children,u=t.style,l=t.position,f=t.className,p=o(t,["as","flashes","children","style","position","className"]),d=i||"div",y=e.useMemo((function(){return c.map((function(e){return r.default.isValidElement(s)?r.default.cloneElement(s,n({key:e.id},e)):(console.error("Please provide a valid component as Flasher's child"),r.default.createElement(r.default.Fragment,null))}))}),[c,s]);return r.default.createElement(r.default.Fragment,null,r.default.createElement(d,n({style:u,className:"ruv ".concat(a[l||""]," ").concat(f),id:"flash-box"},p),y))};c.defaultProps={flashes:[],position:"",className:""};var s=function(){var e,t=new Map;function r(){if(e){var r=[];t.forEach((function(e){r.push(n(n({},e),{deleteFlash:e.deleteFlash.bind(e)}))})),e(r)}}var o={deleteFlash:function(){t.delete(this.id),r()}};return{setUpdateFlashes:function(t){e=t},flash:function(e){void 0===e&&(e=6e3);for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];var i=(new Date).getTime(),c=i+"_"+t.size,s=Object.create(o);s.id=c,s.data=n,setTimeout((function(){s.deleteFlash()}),e),t.set(c,s),r()},deleteAllFlashes:function(){t.clear(),r()}}}(),u=s.flash,l=s.setUpdateFlashes,f=s.deleteAllFlashes,p=function(t){var r=t.children,n=e.useState([]),o=n[0],a=n[1];return e.useEffect((function(){return l(a),function(){f()}}),[a]),r(o)},d=e.createContext({}),y=d.Provider;function m(t,r,n){var o=e.useContext(d),a=o.data,i=o.id,c=o.deleteFlash;return e.useMemo((function(){var e={dataProps:{}};return void 0!==t&&a&&(e.dataChild=a[t]),void 0!==r&&n&&a&&void 0!==a[r]&&(e.dataProps[n]=a[r]),{dataChild:e.dataChild,dataProps:e.dataProps,data:a,id:i,deleteFlash:c}}),[a,t,n,r])}var v={success:"ruv-message-green",error:"ruv-message-red",warning:"ruv-message-amber",info:"ruv-message-blue",red:"ruv-message-red",green:"ruv-message-green",amber:"ruv-message-amber",blue:"ruv-message-blue",SUCCESS:"ruv-message-green",ERROR:"ruv-message-red",WARNING:"ruv-message-amber",INFO:"ruv-message-blue",RED:"ruv-message-red",GREEN:"ruv-message-green",AMBER:"ruv-message-amber",BLUE:"ruv-message-blue"},b={success:"✅",error:"❌",warning:"⚠",info:"ⓘ",close:"☒",SUCCESS:"✅",ERROR:"❌",WARNING:"⚠",INFO:"ⓘ"},h=function(e){var t,a=e.as,i=e.children,c=e.className,s=e.childIndex,u=e.propIndex,l=e.propName,f=o(e,["as","children","className","childIndex","propIndex","propName"]),p=a||"span",d=m(s,u,l),y=d.dataChild,v=d.dataProps;return i&&(t=r.default.isValidElement(i)?r.default.cloneElement(i,n(n({dataChild:y},v),f)):i),r.default.createElement(p,n({className:c||"ruv-left-icon"},v,f),t||b[y]||y||"")};h.defaultProps={className:""};var g=function(e){var t,a=e.as,i=e.children,c=e.childIndex,s=e.propIndex,u=e.propName,l=o(e,["as","children","childIndex","propIndex","propName"]),f=a||"span",p=m(c,s,u),d=p.dataChild,y=p.dataProps;return i&&(t=r.default.isValidElement(i)?r.default.cloneElement(i,n(n({dataChild:d},y),l)):i),r.default.createElement(f,n({},y,l),d||t||"")};g.defaultProps={className:"",as:"span"};var x,E={exports:{}},O={exports:{}},S={};var w,N,T,P,I,j,C,$,_,R,F,k,M,A,V={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function D(){return N||(N=1,e=O,"production"===process.env.NODE_ENV?e.exports=function(){if(x)return S;x=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:switch(e=e.type){case s:case u:case n:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case c:case l:case y:case d:case i:return e;default:return p}}case r:return p}}}function E(e){return g(e)===u}return S.AsyncMode=s,S.ConcurrentMode=u,S.ContextConsumer=c,S.ContextProvider=i,S.Element=t,S.ForwardRef=l,S.Fragment=n,S.Lazy=y,S.Memo=d,S.Portal=r,S.Profiler=a,S.StrictMode=o,S.Suspense=f,S.isAsyncMode=function(e){return E(e)||g(e)===s},S.isConcurrentMode=E,S.isContextConsumer=function(e){return g(e)===c},S.isContextProvider=function(e){return g(e)===i},S.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},S.isForwardRef=function(e){return g(e)===l},S.isFragment=function(e){return g(e)===n},S.isLazy=function(e){return g(e)===y},S.isMemo=function(e){return g(e)===d},S.isPortal=function(e){return g(e)===r},S.isProfiler=function(e){return g(e)===a},S.isStrictMode=function(e){return g(e)===o},S.isSuspense=function(e){return g(e)===f},S.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===i||e.$$typeof===c||e.$$typeof===l||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h||e.$$typeof===m)},S.typeOf=g,S}():e.exports=(w||(w=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var m=e.type;switch(m){case s:case u:case n:case a:case o:case f:return m;default:var v=m&&m.$$typeof;switch(v){case c:case l:case y:case d:case i:return v;default:return p}}case r:return p}}}var x=s,E=u,O=c,S=i,w=t,N=l,T=n,P=y,I=d,j=r,C=a,$=o,_=f,R=!1;function F(e){return g(e)===u}V.AsyncMode=x,V.ConcurrentMode=E,V.ContextConsumer=O,V.ContextProvider=S,V.Element=w,V.ForwardRef=N,V.Fragment=T,V.Lazy=P,V.Memo=I,V.Portal=j,V.Profiler=C,V.StrictMode=$,V.Suspense=_,V.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),F(e)||g(e)===s},V.isConcurrentMode=F,V.isContextConsumer=function(e){return g(e)===c},V.isContextProvider=function(e){return g(e)===i},V.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},V.isForwardRef=function(e){return g(e)===l},V.isFragment=function(e){return g(e)===n},V.isLazy=function(e){return g(e)===y},V.isMemo=function(e){return g(e)===d},V.isPortal=function(e){return g(e)===r},V.isProfiler=function(e){return g(e)===a},V.isStrictMode=function(e){return g(e)===o},V.isSuspense=function(e){return g(e)===f},V.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===i||e.$$typeof===c||e.$$typeof===l||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h||e.$$typeof===m)},V.typeOf=g}()),V)),O.exports;var e}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function z(){if(j)return I;j=1;return I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function L(){return $?C:($=1,C=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var W=D();E.exports=function(){if(k)return F;k=1;var e=D(),t=function(){if(P)return T;P=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return T=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(o,a){for(var i,c,s=n(o),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))t.call(i,l)&&(s[l]=i[l]);if(e){c=e(i);for(var f=0;f<c.length;f++)r.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s},T}(),r=z(),n=L(),o=function(){if(R)return _;R=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=z(),r={},n=L();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,a,i,c,s){if("production"!==process.env.NODE_ENV)for(var u in o)if(n(o,u)){var l;try{if("function"!=typeof o[u]){var f=Error((c||"React class")+": "+i+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=o[u](a,u,c,i,null,t)}catch(e){l=e}if(!l||l instanceof Error||e((c||"React class")+": type specification of "+i+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in r)){r[l.message]=!0;var p=s?s():"";e("Failed "+i+" type: "+l.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},_=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),F=function(c,s){var u="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(i),arrayOf:function(e){return y((function(t,n,o,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new d("Invalid "+a+" `"+i+"` of type `"+h(c)+"` supplied to `"+o+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,o,a,i+"["+s+"]",r);if(u instanceof Error)return u}return null}))},element:y((function(e,t,r,n,o){var a=e[t];return c(a)?null:new d("Invalid "+n+" `"+o+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(t,r,n,o,a){var i=t[r];return e.isValidElementType(i)?null:new d("Invalid "+o+" `"+a+"` of type `"+h(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||l;return new d("Invalid "+o+" `"+a+"` of type `"+((c=t[r]).constructor&&c.constructor.name?c.constructor.name:l)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:y((function(e,t,r,n,o){return b(e[t])?null:new d("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,o,a,i,c){if("function"!=typeof e)return new d("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var s=t[o],u=h(s);if("object"!==u)return new d("Invalid "+i+" `"+c+"` of type `"+u+"` supplied to `"+a+"`, expected an object.");for(var l in s)if(n(s,l)){var f=e(s,l,a,i,c+"."+l,r);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i;function t(t,r,n,o,a){for(var i=t[r],c=0;c<e.length;c++)if(p(i,e[c]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new d("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+s+".")}return y(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),i}return y((function(t,o,a,i,c){for(var s=[],u=0;u<e.length;u++){var l=(0,e[u])(t,o,a,i,c,r);if(null==l)return null;l.data&&n(l.data,"expectedType")&&s.push(l.data.expectedType)}return new d("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,n,o,a,i){var c=t[n],s=h(c);if("object"!==s)return new d("Invalid "+a+" `"+i+"` of type `"+s+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var l=e[u];if("function"!=typeof l)return v(o,a,i,u,g(l));var f=l(c,u,o,a,i+"."+u,r);if(f)return f}return null}))},exact:function(e){return y((function(o,a,i,c,s){var u=o[a],l=h(u);if("object"!==l)return new d("Invalid "+c+" `"+s+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");var f=t({},o[a],e);for(var p in f){var y=e[p];if(n(e,p)&&"function"!=typeof y)return v(i,c,s,p,g(y));if(!y)return new d("Invalid "+c+" `"+s+"` key `"+p+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(u,p,i,c,s+"."+p,r);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function y(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,i,c,u,f,p,y){if(u=u||l,p=p||c,y!==r){if(s){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var v=u+":"+c;!t[v]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[v]=!0,n++)}}return null==i[c]?o?null===i[c]?new d("The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`."):new d("The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,c,u,f,p)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return y((function(t,r,n,o,a,i){var c=t[r];return h(c)!==e?new d("Invalid "+o+" `"+a+"` of type `"+g(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,r,n,o){return new d((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||c(e))return!0;var t=function(e){var t=e&&(u&&e[u]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,f.checkPropTypes=o,f.resetWarningCache=o.resetWarningCache,f.PropTypes=f,f},F}()(W.isElement,!0)}else E.exports=function(){if(A)return M;A=1;var e=z();function t(){}function r(){}return r.resetWarningCache=t,M=function(){function n(t,r,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return a.PropTypes=a,a}}()();var B=function(e){var t,a=e.as,i=e.children,c=e.childIndex,s=e.propIndex,u=e.propName,l=e.className,f=o(e,["as","children","childIndex","propIndex","propName","className"]),p=a||"span",d=m(c,s,u),y=d.deleteFlash,v=d.dataChild,h=d.dataProps;return i&&(t=r.default.isValidElement(i)?r.default.cloneElement(i,n({deleteFlash:y},f)):i),r.default.createElement(p,n({className:l||"ruv-close-icon"},h,f,{onClick:function(){y()}}),t||v||b.close)};B.defaultProps={className:""},B.propTypes={as:E.exports.string,childIndex:E.exports.number,propIndex:E.exports.number,propName:E.exports.string,className:E.exports.string,children:E.exports.oneOfType([E.exports.arrayOf(E.exports.node),E.exports.node])};i(".ruv-message {\n  padding: 20px;\n  background-color: black;\n  color: white;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-green {\n  padding: 20px;\n  background-color: #dff0d8;\n  color: #3c763d;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-blue {\n  padding: 20px;\n  background-color: #d9edf7;\n  color: #31708f;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-amber {\n  padding: 20px;\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-red {\n  padding: 20px;\n  background-color: #f2dede;\n  color: #a94442;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-left-icon {\n  float: left;\n  position: relative;\n  font-size: 25px;\n}\n\n.ruv-close-icon {\n  float: right;\n  position: relative;\n  font-size: 25px;\n  cursor: pointer;\n}\n");var U=function(t){var a=t.id,i=t.deleteFlash,c=t.children,s=t.as,u=t.data,l=t.contentIndex,f=t.typeIndex,p=t.className,d=o(t,["id","deleteFlash","children","as","data","contentIndex","typeIndex","className"]),m=s||"div",b=e.useMemo((function(){return{id:a,data:u,deleteFlash:i}}),[a,u,i]);return r.default.createElement(m,n({id:"ruv-message-".concat(a),className:"ruv-message ".concat(void 0!==f&&u&&u[f]&&v[u[f]]||""," ").concat(p)},d),r.default.createElement(y,{value:b},c||void 0!==l&&u&&u[l]||""))};U.defaultProps={className:"",data:[]},U.Any=g,U.Text=function(e){var t,a=e.as,i=e.children,c=e.childIndex,s=e.propIndex,u=e.propName,l=o(e,["as","children","childIndex","propIndex","propName"]),f=a||"span",p=m(c,s,u),d=p.dataChild,y=p.dataProps;return i&&(t=r.default.isValidElement(i)?r.default.cloneElement(i,n(n({dataChild:d},y),l)):i),r.default.createElement(f,n({},y,l),d||t||"")},U.LeftIcon=h,U.CloseIcon=B,exports.Flasher=function(e){return r.default.createElement(p,null,(function(t){return r.default.createElement(c,n({flashes:t},e))}))},exports.Message=U,exports.RenderFlash=p,exports.deleteAllFlashes=f,exports.flash=u;
//# sourceMappingURL=index.js.map
