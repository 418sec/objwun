/*
objwun v. 0.0.5
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~4KB on 20/8/2020
*/
(function(fn) {
    /* istanbul ignore next */
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = fn();
	} else if (typeof define === "function" && define.amd) {
		define([], fn);
	} else {
		if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (typeof self !== "undefined") {
			root = self;
		} else {
			root = this;
		}
		root.objwun = fn.call(root);
	}
})(function _(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){var i={};t=t||[];for(var e in n)n.hasOwnProperty(e)&&r(t.indexOf(e))&&(i[e]=n[e]);return i}}function t(r,n){var t={};for(var i in r)r.hasOwnProperty(i)&&(t[i]=n(r[i],i));return t}function i(r,n){var t=[],i=0,e=r.length;for(null;i<e;i++)t[i]=n(r[i],i);return t}function e(r){var n=String(r)!==r,t=r===Object(r),i="function"!=typeof r,e={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&i&&!(!e||!e.length)}function o(r){if(Array.isArray&&Array.isArray(r))return!0;var n=String(r)!==r,t={}.toString.call(r).match(/\[object\sArray\]/);return n&&!(!t||!t.length)}function u(r){return o(r)||e(r)}function f(r){return void 0===r}function c(){var r=R.ut.args2arr(arguments).filter(R.in.isObj),n={};if(r.length){for(var t,i=0,e=r.length;i<e;i++)for(t in r[i])r[i].hasOwnProperty(t)&&(n[t]=r[i][t]);return n}return n}function a(r,n){for(var t=[],i=0,e=r.length;i<e;i++)n(r[i],i)&&t.push(r[i]);return t}function s(r,n){if(!R.in.isObjOrArr(r))throw new Error(R.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);n=n||function(r,n){return r};var t;return R.in.isObj(r)&&(t=R.ut.objLoop(r,n)),R.in.isArr(r)&&(t=R.ut.arrLoop(r,n)),t}function E(r,n,t){if(!R.in.isObj(r)&&!R.in.isArr(r))throw new Error(R.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);if(void 0===n)throw new Error(R.errors.MISSING_EXPECTED_ARGUMENT);if(A(r)||A(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=n.split("."),e=r,o=0,u=i.length;for(null;o<u;o++){if(!(i[o]in e))return t||null;e=e[i[o]]}return e}function l(r,n){if(!R.in.isArr(r))throw new Error(R.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);if(void 0===n)throw new Error(R.errors.MISSING_EXPECTED_ARGUMENT);for(var t=0,i=r.length;t<i;t++)if(r[t]===n)return!0;return!1}function A(r){return""===r||null===r||R.in.isUndefined(r)||R.in.isArr(r)&&0===r.length||R.in.isObj(r)&&("function"==typeof Object.keys&&0===Object.keys(r).length&&r.constructor===Object||function(){for(var n in r)if(r.hasOwnProperty(n))return!1}())}function _(r,n){if(!R.in.isObjOrArr(r))throw new Error(R.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);return n=n||function(r){return r},R.in.isObj(r)?R.ut.objLoop(r,n):R.ut.arrLoop(r,n)}function O(r,n,t){var i=R.in.isObj(r),e=R.in.isArr(r),o=t||(i?{}:[]);if(i)for(var u in r)o=n(o,r[u],u,r);if(e)for(var f=0,c=r.length;f<c;f++)o=n(o,r[f],f,r);return o}function h(r,n){for(var t=!1,i=0,e=r.length;i<e&&!t;i++)n(r[i],i)&&(t=!0);return t}function p(r,n,t){return t=t||1,"function"==typeof n?r.sort(function(r,i){return n(r)<n(i)?-t:t}):r.sort(function(r,i){return r[n]<i[n]?-t:t})}function v(r,n,t){r=r||0,t=t||null;var i=[],e=0;for(null;e<r;e++)i[e]=n.call(t,e);return i}function g(r){var n={},t=0,i=r.length,e=[];for(null;t<i;t++)n[r[t]]=r[t];for(var o in n)e.push(n[o]);return e}var R={};return R.errors={INVALID_ARGUMENT_ARRAY_EXPECTED:"Invalid argument, array expected",INVALID_ARGUMENT_OBJECT_EXPECTED:"Invalid argument, object expected",INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED:"Invalid argument, object or array expected",MISSING_EXPECTED_ARGUMENT:"Missing expected argument"},R.ut={args2arr:r,arrLoop:i,objLoop:t,pick_omit:n},R.in={isArr:o,isUndefined:f,isObj:e,isObjOrArr:u},{assign:c,filter:a,forEach:s,get:E,id:new function(){var r=0,n=this;this.prefix="id_",this.toString=function(){return r+=1,n.prefix+r}},includes:l,isEmpty:A,map:_,omit:R.ut.pick_omit(function(r){return r<0}),pick:R.ut.pick_omit(function(r){return r>=0}),reduce:O,some:h,sortBy:p,times:v,uniq:g}});