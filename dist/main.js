!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-universal-flash"]=t():e["react-universal-flash"]=t()}(global,(()=>(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Flasher:()=>I,default:()=>C,flash:()=>a});const r=require("react");var n=e.n(r);const o=require("prop-types");var i=e.n(o),c=function(){var e,t=new Map;function r(){if(e){var r=[];t.forEach((function(e){r.push({id:e.id,type:e.type,content:e.content})})),e(r)}}function n(e){t.delete(e),r()}return{setUpdateFlashes:function(t){e=t},flash:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3,i=arguments.length>2?arguments[2]:void 0,c=(new Date).getTime(),a=c+"_"+t.size;setTimeout((function(){n(a)}),o),t.set(a,{id:a,content:e,type:i}),r()},deleteflash:n}}(),a=c.flash,l=c.setUpdateFlashes,u=c.deleteflash,s={zIndex:999,position:"fixed",width:"auto",height:"auto",minWidth:"30%"},f={padding:"20px",backgroundColor:"black",color:"white",marginBottom:"15px",textAlign:"center"},p="top_left",b="top_right",y="top_center",d="bottom_left",h="bottom_right",O="bottom_center",m="custom",g=function(e){var t=e.id,r=e.type,o=e.content;return n().createElement("div",{id:"flash-".concat(t),style:f,type:r},o)};g.propTypes={id:i().string,content:i().oneOfType([i().element,i().string]),type:i().oneOfType([i().string,i().object])};const j=g;function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=e.flashes,o=e.child,i=e.style,c=(0,r.useMemo)((function(){return t.map((function(e,t){return n().isValidElement(o)?n().cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({key:e.id,deleteFlash:u.bind(null,e.id)},e)):n().createElement(j,v({key:e.id},e))}))}),[t,o]);return n().createElement(n().Fragment,null,t.length>0&&n().createElement("div",{style:i,id:"flash-box"},c))}S.defaultProps={flashes:[]},S.propTypes={flashes:i().arrayOf(i().object),style:i().object,child:i().element};const E=S;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F=function(e){var t=e.children,o=e.position,i=e.width,c=e.customStyles,a=A((0,r.useState)([]),2),u=a[0],f=a[1],g=A((0,r.useState)(s),2),j=g[0],v=g[1];(0,r.useEffect)((function(){i&&v(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({minWidth:i},j))}),[i]);var w=(0,r.useMemo)((function(){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(e&&e.toLowerCase()||""){case p:return x({top:10,left:10},t);case b:return x({top:10,right:10},t);case y:return x({top:10,left:"50%",transform:"translateX(-50%)"},t);case d:return x({bottom:10,left:10},t);case h:return x({bottom:10,right:10},t);case O:return x({bottom:10,left:"50%",transform:"translateX(-50%)"},t);case m:return x(x({},t),r);default:return x({top:10,right:10},t)}}(o,j,c)}),[o,c,j]);return(0,r.useEffect)((function(){l(f)}),[f]),n().createElement(E,{flashes:u,child:t,style:w})};F.propTypes={position:i().string,width:i().string,children:i().element,customStyles:i().object};const I=F,C=I;return t})()));