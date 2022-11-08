import e,{useMemo as n,useState as r,useEffect as t,createContext as o,useContext as a}from"react";var i=function(){return i=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};function c(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r}var s={top_left:"ruv-top ruv-left",top_right:"ruv-top ruv-right",top_center:"ruv-top ruv-center",bottom_right:"ruv-bottom ruv-right",bottom_left:"ruv-bottom ruv-left",bottom_center:"ruv-bottom ruv-center",TOP_LEFT:"ruv-top ruv-left",TOP_RIGHT:"ruv-top ruv-right",TOP_CENTER:"ruv-top ruv-center",BOTTOM_RIGHT:"ruv-bottom ruv-right",BOTTOM_LEFT:"ruv-bottom ruv-left",BOTTOM_CENTER:"ruv-bottom ruv-center","":"ruv-bottom ruv-center"};function u(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}u(".ruv {\n  z-index: 999;\n  position: fixed;\n  width: auto;\n  height: auto;\n  min-width: 30%;\n}\n\n.ruv-top {\n  top: 10;\n}\n\n.ruv-bottom {\n  bottom: 10;\n}\n\n.ruv-left {\n  left: 10;\n}\n\n.ruv-center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n");var l=function(r){var t=r.as,o=r.flashes,a=r.children,u=r.style,l=r.position,f=r.className,p=c(r,["as","flashes","children","style","position","className"]),d=t||"div",y=n((function(){return o.map((function(n){return e.isValidElement(a)?e.cloneElement(a,i({key:n.id},n)):(console.error("Please provide a valid component as Flasher's child"),e.createElement(e.Fragment,null))}))}),[o,a]);return e.createElement(e.Fragment,null,e.createElement(d,i({style:u,className:"ruv ".concat(s[l||""]," ").concat(f),id:"flash-box"},p),y))};l.defaultProps={flashes:[],position:"",className:""};var f=function(){var e,n=new Map;function r(){if(e){var r=[];n.forEach((function(e){r.push(i(i({},e),{deleteFlash:e.deleteFlash.bind(e)}))})),e(r)}}var t={deleteFlash:function(){n.delete(this.id),r()}};return{setUpdateFlashes:function(n){e=n},flash:function(e){void 0===e&&(e=6e3);for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];var i=(new Date).getTime(),c=i+"_"+n.size,s=Object.create(t);s.id=c,s.data=o,setTimeout((function(){s.deleteFlash()}),e),n.set(c,s),r()},deleteAllFlashes:function(){n.clear(),r()}}}(),p=f.flash,d=f.setUpdateFlashes,y=f.deleteAllFlashes,m=function(e){var n=e.children,o=r([]),a=o[0],i=o[1];return t((function(){return d(i),function(){y()}}),[i]),n(a)},v=function(n){return e.createElement(m,null,(function(r){return e.createElement(l,i({flashes:r},n))}))},b=o({}),h=b.Provider;function g(e,r,t){var o=a(b),i=o.data,c=o.id,s=o.deleteFlash;return n((function(){var n={dataProps:{}};return void 0!==e&&i&&(n.dataChild=i[e]),void 0!==r&&t&&i&&void 0!==i[r]&&(n.dataProps[t]=i[r]),{dataChild:n.dataChild,dataProps:n.dataProps,data:i,id:c,deleteFlash:s}}),[i,e,t,r])}var x={success:"ruv-message-green",error:"ruv-message-red",warning:"ruv-message-amber",info:"ruv-message-blue",red:"ruv-message-red",green:"ruv-message-green",amber:"ruv-message-amber",blue:"ruv-message-blue",SUCCESS:"ruv-message-green",ERROR:"ruv-message-red",WARNING:"ruv-message-amber",INFO:"ruv-message-blue",RED:"ruv-message-red",GREEN:"ruv-message-green",AMBER:"ruv-message-amber",BLUE:"ruv-message-blue"},E={success:"✅",error:"❌",warning:"⚠",info:"ⓘ",close:"☒",SUCCESS:"✅",ERROR:"❌",WARNING:"⚠",INFO:"ⓘ"},O=function(n){var r,t=n.as,o=n.children,a=n.className,s=n.childIndex,u=n.propIndex,l=n.propName,f=c(n,["as","children","className","childIndex","propIndex","propName"]),p=t||"span",d=g(s,u,l),y=d.dataChild,m=d.dataProps;return o&&(r=e.isValidElement(o)?e.cloneElement(o,i(i({dataChild:y},m),f)):o),e.createElement(p,i({className:a||"ruv-left-icon"},m,f),r||E[y]||y||"")};O.defaultProps={className:""};var S=function(n){var r,t=n.as,o=n.children,a=n.childIndex,s=n.propIndex,u=n.propName,l=c(n,["as","children","childIndex","propIndex","propName"]),f=t||"span",p=g(a,s,u),d=p.dataChild,y=p.dataProps;return o&&(r=e.isValidElement(o)?e.cloneElement(o,i(i({dataChild:d},y),l)):o),e.createElement(f,i({},y,l),d||r||"")};S.defaultProps={className:"",as:"span"};var w,N={exports:{}},T={exports:{}},P={};var I,j,C,$,_,R,k,F,A,M,V,D,z,L,W={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function B(){return j||(j=1,e=T,"production"===process.env.NODE_ENV?e.exports=function(){if(w)return P;w=1;var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case n:switch(e=e.type){case s:case u:case t:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case c:case l:case y:case d:case i:return e;default:return p}}case r:return p}}}function x(e){return g(e)===u}return P.AsyncMode=s,P.ConcurrentMode=u,P.ContextConsumer=c,P.ContextProvider=i,P.Element=n,P.ForwardRef=l,P.Fragment=t,P.Lazy=y,P.Memo=d,P.Portal=r,P.Profiler=a,P.StrictMode=o,P.Suspense=f,P.isAsyncMode=function(e){return x(e)||g(e)===s},P.isConcurrentMode=x,P.isContextConsumer=function(e){return g(e)===c},P.isContextProvider=function(e){return g(e)===i},P.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},P.isForwardRef=function(e){return g(e)===l},P.isFragment=function(e){return g(e)===t},P.isLazy=function(e){return g(e)===y},P.isMemo=function(e){return g(e)===d},P.isPortal=function(e){return g(e)===r},P.isProfiler=function(e){return g(e)===a},P.isStrictMode=function(e){return g(e)===o},P.isSuspense=function(e){return g(e)===f},P.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===t||e===u||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===i||e.$$typeof===c||e.$$typeof===l||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h||e.$$typeof===m)},P.typeOf=g,P}():e.exports=(I||(I=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case n:var m=e.type;switch(m){case s:case u:case t:case a:case o:case f:return m;default:var v=m&&m.$$typeof;switch(v){case c:case l:case y:case d:case i:return v;default:return p}}case r:return p}}}var x=s,E=u,O=c,S=i,w=n,N=l,T=t,P=y,I=d,j=r,C=a,$=o,_=f,R=!1;function k(e){return g(e)===u}W.AsyncMode=x,W.ConcurrentMode=E,W.ContextConsumer=O,W.ContextProvider=S,W.Element=w,W.ForwardRef=N,W.Fragment=T,W.Lazy=P,W.Memo=I,W.Portal=j,W.Profiler=C,W.StrictMode=$,W.Suspense=_,W.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),k(e)||g(e)===s},W.isConcurrentMode=k,W.isContextConsumer=function(e){return g(e)===c},W.isContextProvider=function(e){return g(e)===i},W.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},W.isForwardRef=function(e){return g(e)===l},W.isFragment=function(e){return g(e)===t},W.isLazy=function(e){return g(e)===y},W.isMemo=function(e){return g(e)===d},W.isPortal=function(e){return g(e)===r},W.isProfiler=function(e){return g(e)===a},W.isStrictMode=function(e){return g(e)===o},W.isSuspense=function(e){return g(e)===f},W.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===t||e===u||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===i||e.$$typeof===c||e.$$typeof===l||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h||e.$$typeof===m)},W.typeOf=g}()),W)),T.exports;var e}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function U(){if(R)return _;R=1;return _="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function q(){return F?k:(F=1,k=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var G=B();N.exports=function(){if(D)return V;D=1;var e=B(),n=function(){if($)return C;$=1;var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function t(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return C=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(o,a){for(var i,c,s=t(o),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(s[l]=i[l]);if(e){c=e(i);for(var f=0;f<c.length;f++)r.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s},C}(),r=U(),t=q(),o=function(){if(M)return A;M=1;var e=function(){};if("production"!==process.env.NODE_ENV){var n=U(),r={},t=q();e=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function o(o,a,i,c,s){if("production"!==process.env.NODE_ENV)for(var u in o)if(t(o,u)){var l;try{if("function"!=typeof o[u]){var f=Error((c||"React class")+": "+i+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=o[u](a,u,c,i,null,n)}catch(e){l=e}if(!l||l instanceof Error||e((c||"React class")+": type specification of "+i+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in r)){r[l.message]=!0;var p=s?s():"";e("Failed "+i+" type: "+l.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},A=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),V=function(c,s){var u="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(i),arrayOf:function(e){return y((function(n,t,o,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=n[t];if(!Array.isArray(c))return new d("Invalid "+a+" `"+i+"` of type `"+h(c)+"` supplied to `"+o+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,o,a,i+"["+s+"]",r);if(u instanceof Error)return u}return null}))},element:y((function(e,n,r,t,o){var a=e[n];return c(a)?null:new d("Invalid "+t+" `"+o+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(n,r,t,o,a){var i=n[r];return e.isValidElementType(i)?null:new d("Invalid "+o+" `"+a+"` of type `"+h(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(n,r,t,o,a){if(!(n[r]instanceof e)){var i=e.name||l;return new d("Invalid "+o+" `"+a+"` of type `"+((c=n[r]).constructor&&c.constructor.name?c.constructor.name:l)+"` supplied to `"+t+"`, expected instance of `"+i+"`.")}var c;return null}))},node:y((function(e,n,r,t,o){return b(e[n])?null:new d("Invalid "+t+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(n,o,a,i,c){if("function"!=typeof e)return new d("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var s=n[o],u=h(s);if("object"!==u)return new d("Invalid "+i+" `"+c+"` of type `"+u+"` supplied to `"+a+"`, expected an object.");for(var l in s)if(t(s,l)){var f=e(s,l,a,i,c+"."+l,r);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i;function n(n,r,t,o,a){for(var i=n[r],c=0;c<e.length;c++)if(p(i,e[c]))return null;var s=JSON.stringify(e,(function(e,n){return"symbol"===g(n)?String(n):n}));return new d("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+t+"`, expected one of "+s+".")}return y(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+n+"."),i}return y((function(n,o,a,i,c){for(var s=[],u=0;u<e.length;u++){var l=(0,e[u])(n,o,a,i,c,r);if(null==l)return null;l.data&&t(l.data,"expectedType")&&s.push(l.data.expectedType)}return new d("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(n,t,o,a,i){var c=n[t],s=h(c);if("object"!==s)return new d("Invalid "+a+" `"+i+"` of type `"+s+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var l=e[u];if("function"!=typeof l)return v(o,a,i,u,g(l));var f=l(c,u,o,a,i+"."+u,r);if(f)return f}return null}))},exact:function(e){return y((function(o,a,i,c,s){var u=o[a],l=h(u);if("object"!==l)return new d("Invalid "+c+" `"+s+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");var f=n({},o[a],e);for(var p in f){var y=e[p];if(t(e,p)&&"function"!=typeof y)return v(i,c,s,p,g(y));if(!y)return new d("Invalid "+c+" `"+s+"` key `"+p+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(u,p,i,c,s+"."+p,r);if(m)return m}return null}))}};function p(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function d(e,n){this.message=e,this.data=n&&"object"==typeof n?n:{},this.stack=""}function y(e){if("production"!==process.env.NODE_ENV)var n={},t=0;function o(o,i,c,u,f,p,y){if(u=u||l,p=p||c,y!==r){if(s){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var v=u+":"+c;!n[v]&&t<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,t++)}}return null==i[c]?o?null===i[c]?new d("The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`."):new d("The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,c,u,f,p)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return y((function(n,r,t,o,a,i){var c=n[r];return h(c)!==e?new d("Invalid "+o+" `"+a+"` of type `"+g(c)+"` supplied to `"+t+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,n,r,t,o){return new d((e||"React class")+": "+n+" type `"+r+"."+t+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||c(e))return!0;var n=function(e){var n=e&&(u&&e[u]||e["@@iterator"]);if("function"==typeof n)return n}(e);if(!n)return!1;var r,t=n.call(e);if(n!==e.entries){for(;!(r=t.next()).done;)if(!b(r.value))return!1}else for(;!(r=t.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function h(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function g(e){if(null==e)return""+e;var n=h(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function x(e){var n=g(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return d.prototype=Error.prototype,f.checkPropTypes=o,f.resetWarningCache=o.resetWarningCache,f.PropTypes=f,f},V}()(G.isElement,!0)}else N.exports=function(){if(L)return z;L=1;var e=U();function n(){}function r(){}return r.resetWarningCache=n,z=function(){function t(n,r,t,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}}()();var Y=function(n){var r,t=n.as,o=n.children,a=n.childIndex,s=n.propIndex,u=n.propName,l=n.className,f=c(n,["as","children","childIndex","propIndex","propName","className"]),p=t||"span",d=g(a,s,u),y=d.deleteFlash,m=d.dataChild,v=d.dataProps;return o&&(r=e.isValidElement(o)?e.cloneElement(o,i({deleteFlash:y},f)):o),e.createElement(p,i({className:l||"ruv-close-icon"},v,f,{onClick:function(){y()}}),r||m||E.close)};Y.defaultProps={className:""},Y.propTypes={as:N.exports.string,childIndex:N.exports.number,propIndex:N.exports.number,propName:N.exports.string,className:N.exports.string,children:N.exports.oneOfType([N.exports.arrayOf(N.exports.node),N.exports.node])};u(".ruv-message {\n  padding: 20px;\n  background-color: black;\n  color: white;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-green {\n  padding: 20px;\n  background-color: #dff0d8;\n  color: #3c763d;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-blue {\n  padding: 20px;\n  background-color: #d9edf7;\n  color: #31708f;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-amber {\n  padding: 20px;\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-message-red {\n  padding: 20px;\n  background-color: #f2dede;\n  color: #a94442;\n  margin-bottom: 15px;\n  text-align: center;\n}\n\n.ruv-left-icon {\n  float: left;\n  position: relative;\n  font-size: 25px;\n}\n\n.ruv-close-icon {\n  float: right;\n  position: relative;\n  font-size: 25px;\n  cursor: pointer;\n}\n");var H=function(r){var t=r.id,o=r.deleteFlash,a=r.children,s=r.as,u=r.data,l=r.contentIndex,f=r.typeIndex,p=r.className,d=c(r,["id","deleteFlash","children","as","data","contentIndex","typeIndex","className"]),y=s||"div",m=n((function(){return{id:t,data:u,deleteFlash:o}}),[t,u,o]);return e.createElement(y,i({id:"ruv-message-".concat(t),className:"ruv-message ".concat(void 0!==f&&u&&u[f]&&x[u[f]]||""," ").concat(p)},d),e.createElement(h,{value:m},a||void 0!==l&&u&&u[l]||""))};H.defaultProps={className:"",data:[]},H.Any=S,H.Text=function(n){var r,t=n.as,o=n.children,a=n.childIndex,s=n.propIndex,u=n.propName,l=c(n,["as","children","childIndex","propIndex","propName"]),f=t||"span",p=g(a,s,u),d=p.dataChild,y=p.dataProps;return o&&(r=e.isValidElement(o)?e.cloneElement(o,i(i({dataChild:d},y),l)):o),e.createElement(f,i({},y,l),d||r||"")},H.LeftIcon=O,H.CloseIcon=Y;export{v as Flasher,H as Message,m as RenderFlash,y as deleteAllFlashes,p as flash};
//# sourceMappingURL=index.js.map
