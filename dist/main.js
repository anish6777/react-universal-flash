!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-universal-flash"]=t():e["react-universal-flash"]=t()}(global,(()=>(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Flasher:()=>U,default:()=>W,flash:()=>s});const r=require("react");var n=e.n(r);const o=require("prop-types");var i=e.n(o);function c(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t,r){this.content=t,this.id=e,this.type=r}var l,f=[];function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3,r=arguments.length>2?arguments[2]:void 0,n=c(f),o=(new Date).getTime(),i=o+"_"+n.length;window.setTimeout((function(){b(i)}),t);var a=new u(i,e,r);n.push(a),p(n)}function p(e){f=c(e),l&&l()}function b(e){var t=c(f);t.find((function(t){return t.id===e}))&&p(t.filter((function(t){return t.id!==e})))}function y(e){l=e}var d={zIndex:999,position:"fixed",width:"auto",height:"auto",minWidth:"30%"},m={padding:"20px",backgroundColor:"black",color:"white",marginBottom:"15px",textAlign:"center"},O="top_left",h="top_right",g="top_center",v="bottom_left",j="bottom_right",w="bottom_center",P="custom";const S=function(e){var t=e.id,r=e.type,o=e.content;return n().createElement("div",{id:"flash-".concat(t),style:m,type:r},o)};function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){var t=e.flashes,o=e.child,i=e.style,c=(0,r.useMemo)((function(){return t.map((function(e,t){return n().isValidElement(o)?n().cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({key:e.id,deleteFlash:b.bind(null,e.id)},e)):n().createElement(S,E({key:e.id},e))}))}),[t,o]);return n().createElement(n().Fragment,null,t.length>0&&n().createElement("div",{style:i,id:"flash-box"},c))}x.defaultProps={flashes:[]},x.propTypes={flashes:i().arrayOf(i().object)};const _=x;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const U=function(e){var t=e.children,o=e.position,i=e.width,c=e.customStyles,a=F((0,r.useReducer)((function(e){return e+1}),0),2),u=(a[0],a[1]),l=F((0,r.useState)(d),2),s=l[0],p=l[1];(0,r.useEffect)((function(){i&&p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({minWidth:i},s))}),[i]);var b=(0,r.useMemo)((function(){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(e&&e.toLowerCase()||""){case O:return I({top:10,left:10},t);case h:return I({top:10,right:10},t);case g:return I({top:10,left:"50%",transform:"translateX(-50%)"},t);case v:return I({bottom:10,left:10},t);case j:return I({bottom:10,right:10},t);case w:return I({bottom:10,left:"50%",transform:"translateX(-50%)"},t);case P:return I(I({},t),r);default:return I({top:10,right:10},t)}}(o,s,c)}),[o,c,s]);return(0,r.useEffect)((function(){y(u)}),[u]),n().createElement(_,{flashes:f,child:t,style:b})},W=U;return t})()));