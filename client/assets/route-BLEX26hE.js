import{r as T,b as He,j as g}from"./jsx-runtime-DexIYAB0.js";import{D as Ie}from"./decoder-text-Bx6WN5AC.js";import{D as Ue}from"./divider-Do7S2aiH.js";import{b as Ne,S as Le,F as Fe}from"./meta-D8rZH9sX.js";import{b as qe,H as ze,I as ee,m as te,a as $e,n as re,t as L}from"./heading-Bchrs-MV.js";import{i as D,w as X,x as Ve,r as Xe,y as Be,m as Je,z as Ke,U as z,E as We,B as Ye,C as Ge,F as Qe,s as Ze,G as et}from"./components-D1Eb6D8q.js";import"./visually-hidden-B0faV1x6.js";import"./use-spring-2Oanwiqv.js";import"./index-BTBq8lDE.js";import"./config-DAW0LLOt.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var tt=at,rt=ot,nt=Object.prototype.toString,O=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function at(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=n.decode||it,o=0;o<e.length;){var i=e.indexOf("=",o);if(i===-1)break;var s=e.indexOf(";",o);if(s===-1)s=e.length;else if(s<i){o=e.lastIndexOf(";",i-1)+1;continue}var l=e.slice(o,i).trim();if(r[l]===void 0){var u=e.slice(i+1,s).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),r[l]=ut(u,a)}o=s+1}return r}function ot(e,t,r){var n=r||{},a=n.encode||st;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!O.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!O.test(o))throw new TypeError("argument val is invalid");var i=e+"="+o;if(n.maxAge!=null){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!O.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!O.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){var l=n.expires;if(!lt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.partitioned&&(i+="; Partitioned"),n.priority){var u=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(u){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var c=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(c){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function it(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function st(e){return encodeURIComponent(e)}function lt(e){return nt.call(e)==="[object Date]"||e instanceof Date}function ut(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ne={};function ge(e,t){!e&&!ne[t]&&(ne[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ct=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:a=[],...o}={path:"/",sameSite:"lax",...n};return yt(r,o.expires),{get name(){return r},get isSigned(){return a.length>0},get expires(){return typeof o.maxAge<"u"?new Date(Date.now()+o.maxAge*1e3):o.expires},async parse(i,s){if(!i)return null;let l=tt(i,{...o,...s});return r in l?l[r]===""?"":await ft(t,l[r],a):null},async serialize(i,s){return rt(r,i===""?"":await dt(e,i,a),{...o,...s})}}},B=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function dt(e,t,r){let n=ht(t);return r.length>0&&(n=await e(n,r[0])),n}async function ft(e,t,r){if(r.length>0){for(let n of r){let a=await e(t,n);if(a!==!1)return ae(a)}return null}return ae(t)}function ht(e){return btoa(pt(encodeURIComponent(JSON.stringify(e))))}function ae(e){try{return JSON.parse(decodeURIComponent(mt(atob(e))))}catch{return{}}}function mt(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(o=a.charCodeAt(0),o<256?r+="%"+oe(o,2):r+="%u"+oe(o,4).toUpperCase());return r}function oe(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function pt(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(o=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=5;continue}}else if(o=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=2;continue}}r+=a}return r}function yt(e,t){ge(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function A(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(r,n)=>t.charCodeAt(n))}function gt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function j(...e){const t=new Uint8Array(e.reduce((n,a)=>n+a.length,0));let r=0;for(const n of e)t.set(n,r),r+=n.length;return t}function wt(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function ie(e){return e instanceof Uint8Array?t=>e[t]:e}function F(e,t,r,n,a){const o=ie(e),i=ie(r);for(let s=0;s<a;++s)if(o(t+s)!==i(n+s))return!1;return!0}function vt(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t}const w=Symbol("Match");class J{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=A(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=vt(t)}feed(t){let r=0,n;const a=[];for(;r!==t.length;)[r,...n]=this._feed(t,r),a.push(...n);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,r){const n=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const o=this._charAt(t,a+this._needle.length-1);if(o===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&n.push(this._lookbehind.slice(0,this._lookbehind.length+a)),n.push(w),this._lookbehind=new Uint8Array,[a+this._needle.length,...n];a+=this._occ[o]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)n.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const o=this._lookbehind.length+a;return o>0&&(n.push(this._lookbehind.slice(0,o)),this._lookbehind=this._lookbehind.slice(o)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(i,s)=>this._charAt(t,s-this._lookbehind.length)),[t.length,...n]}}for(a+=r;a<=t.length-this._needle.length;){const o=t[a+this._needle.length-1];if(o===this._lastChar&&t[a]===this._needle[0]&&F(this._needle,0,t,a,this._needle.length-1))return a>r&&n.push(t.slice(r,a)),n.push(w),[a+this._needle.length,...n];a+=this._occ[o]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!F(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&n.push(t.slice(r,a<t.length?a:t.length)),[t.length,...n]}_charAt(t,r){return r<0?this._lookbehind[this._lookbehind.length+r]:t[r]}_memcmp(t,r,n){return F(this._charAt.bind(this,t),r,this._needle,0,n)}}class _t{constructor(t,r){this._readableStream=r,this._search=new J(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const n=await t.read();if(n.done)break;yield*this._search.feed(n.value)}const r=this._search.end();r.length&&(yield r)}finally{t.releaseLock()}}}const bt=Function.prototype.apply.bind(j,void 0),we=A("--"),C=A(`\r
`);function St(e){const t=e.split(";").map(n=>n.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const r={};for(const n of t){const a=n.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+n+" in `"+e+"`");const[o,i]=a;if(i[0]==='"'&&i[i.length-1]==='"')r[o]=i.slice(1,-1).replace(/\\"/g,'"');else if(i[0]!=='"'&&i[i.length-1]!=='"')r[o]=i;else if(i[0]==='"'&&i[i.length-1]!=='"'||i[0]!=='"'&&i[i.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!r.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return r}function xt(e){const t=[];let r=!1,n;for(;typeof(n=e.shift())<"u";){const a=n.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const o=n.slice(0,a).trim().toLowerCase(),i=n.slice(a+1).trim();switch(o){case"content-disposition":r=!0,t.push(...Object.entries(St(i)));break;case"content-type":t.push(["contentType",i])}}if(!r)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function kt(e,t){let r=!0,n=!1;const a=[[]],o=new J(C);for(;;){const i=await e.next();if(i.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(r&&i.value!==w&&wt(i.value.slice(0,2),we))return[void 0,new Uint8Array];let s;if(i.value!==w)s=i.value;else if(!n)s=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!s.length)continue;r&&(r=!1);const l=o.feed(s);for(const[u,c]of l.entries()){const d=c===w;if(!(!d&&!c.length)){if(n&&d)return l.push(o.end()),[a.filter(m=>m.length).map(bt).map(gt),j(...l.slice(u+1).map(m=>m===w?C:m))];(n=d)?a.push([]):a[a.length-1].push(c)}}}}async function*Et(e,t){const r=j(we,A(t)),n=new _t(r,e)[Symbol.asyncIterator]();for(;;){const o=await n.next();if(o.done)return;if(o.value===w)break}const a=new J(C);for(;;){let u=function(f){const h=[];for(const y of a.feed(f))l&&h.push(C),(l=y===w)||h.push(y);return j(...h)};const[o,i]=await kt(n,r);if(!o)return;async function s(){const f=await n.next();if(f.done)throw new Error("malformed multipart-form data: unexpected end of stream");return f}let l=!1,c=!1;async function d(){const f=await s();let h;if(f.value!==w)h=f.value;else if(!l)h=C;else return c=!0,{value:a.end()};return{value:u(h)}}const m=[{value:u(i)}];for(yield{...xt(o),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const f=m.shift();if(!f)break;if(f.value.length>0)return f}for(;;){if(c)return{done:c,value:void 0};const f=await d();if(f.value.length>0)return f}}}};!c;)m.push(await d())}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rt(...e){return async t=>{for(let r of e){let n=await r(t);if(typeof n<"u"&&n!==null)return n}}}async function Ct(e,t){let r=e.headers.get("Content-Type")||"",[n,a]=r.split(/\s*;\s*boundary=/);if(!e.body||!a||n!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let o=new FormData,i=Et(e.body,a);for await(let s of i){if(s.done)break;typeof s.filename=="string"&&(s.filename=s.filename.split(/[/\\]/).pop());let l=await t(s);typeof l<"u"&&l!==null&&o.append(s.name,l)}return o}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let v=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function Dt(e){return e===v.Development||e===v.Production||e===v.Test}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function K(e,t){if(e instanceof Error&&t!==v.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function se(e,t){return Object.entries(e).reduce((r,[n,a])=>Object.assign(r,{[n]:K(a,t)}),{})}function M(e,t){let r=K(e,t);return{message:r.message,stack:r.stack}}function le(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[a,o]of r)if(D(o))n[a]={...o,__type:"RouteErrorResponse"};else if(o instanceof Error){let i=K(o,t);n[a]={message:i.message,stack:i.stack,__type:"Error",...i.name!=="Error"?{__subType:i.name}:{}}}else n[a]=o;return n}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const W=(e,t={})=>X(e,t),Ot=(e,t={})=>Ve(e,t),ve=(e,t=302)=>Xe(e,t),Tt=(e,t=302)=>Be(e,t);function jt(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function b(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}const At=new Set([301,302,303,307,308]);function _e(e){return At.has(e)}function Mt(e){return _e(e.status)}function Pt(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}const Ht="__deferred_promise:";function It(e,t,r){let n=new TextEncoder;return new ReadableStream({async start(o){let i={},s=[];for(let[u,c]of Object.entries(e.data))Pt(c)?(i[u]=`${Ht}${u}`,(typeof c._data<"u"||typeof c._error<"u")&&s.push(u)):i[u]=c;o.enqueue(n.encode(JSON.stringify(i)+`

`));for(let u of s)ue(o,n,u,e.data[u],r);let l=e.subscribe((u,c)=>{c&&ue(o,n,c,e.data[c],r)});await e.resolveData(t),l(),o.close()}})}function ue(e,t,r,n,a){"_error"in n?e.enqueue(t.encode("error:"+JSON.stringify({[r]:n._error instanceof Error?M(n._error,a):n._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:n._data??null})+`

`))}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ut(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var P={exports:{}},k={decodeValues:!0,map:!1,silent:!1};function $(e){return typeof e=="string"&&!!e.trim()}function V(e,t){var r=e.split(";").filter($),n=r.shift(),a=Nt(n),o=a.name,i=a.value;t=t?Object.assign({},k,t):k;try{i=t.decodeValues?decodeURIComponent(i):i}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+i+"'. Set options.decodeValues to false to disable this feature.",l)}var s={name:o,value:i};return r.forEach(function(l){var u=l.split("="),c=u.shift().trimLeft().toLowerCase(),d=u.join("=");c==="expires"?s.expires=new Date(d):c==="max-age"?s.maxAge=parseInt(d,10):c==="secure"?s.secure=!0:c==="httponly"?s.httpOnly=!0:c==="samesite"?s.sameSite=d:s[c]=d}),s}function Nt(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function be(e,t){if(t=t?Object.assign({},k,t):k,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(a){return a.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},k,t):k,t.map){var n={};return e.filter($).reduce(function(a,o){var i=V(o,t);return a[i.name]=i,a},n)}else return e.filter($).map(function(a){return V(a,t)})}function Lt(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,a,o,i,s;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function u(){return a=e.charAt(r),a!=="="&&a!==";"&&a!==","}for(;r<e.length;){for(n=r,s=!1;l();)if(a=e.charAt(r),a===","){for(o=r,r+=1,l(),i=r;r<e.length&&u();)r+=1;r<e.length&&e.charAt(r)==="="?(s=!0,r=i,t.push(e.substring(n,o)),n=r):r=o+1}else r+=1;(!s||r>=e.length)&&t.push(e.substring(n,e.length))}return t}P.exports=be;P.exports.parse=be;P.exports.parseString=V;var Ft=P.exports.splitCookiesString=Lt;/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qt(e,t){let r=t.errors?t.matches.findIndex(o=>t.errors[o.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:o,actionData:i,loaderHeaders:s,loaderData:l}=t;t.matches.slice(r).some(u=>{let c=u.route.id;return o[c]&&(!i||i[c]===void 0)?a=o[c]:s[c]&&l[c]===void 0&&(a=s[c]),a!=null})}return n.reduce((o,i,s)=>{let{id:l}=i.route,u=e.routes[l].module,c=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,m=a!=null&&s===n.length-1,f=m&&a!==c&&a!==d;if(u.headers==null){let y=new Headers(o);return f&&_(a,y),_(d,y),_(c,y),y}let h=new Headers(u.headers?typeof u.headers=="function"?u.headers({loaderHeaders:c,parentHeaders:o,actionHeaders:d,errorHeaders:m?a:void 0}):u.headers:void 0);return f&&_(a,h),_(d,h),_(c,h),_(o,h),h},new Headers)}function _(e,t){let r=e.get("Set-Cookie");r&&Ft(r).forEach(a=>{t.append("Set-Cookie",a)})}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ce(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zt(e,t,r){let n=Je(e,t,r);return n?n.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function $t({loadContext:e,action:t,params:r,request:n,routeId:a}){let o=await t({request:xe(Se(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return b(o)?o:W(o)}async function Vt({loadContext:e,loader:t,params:r,request:n,routeId:a}){let o=await t({request:xe(Se(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return jt(o)?o.init&&_e(o.init.status||200)?ve(new Headers(o.init.headers).get("Location"),o.init):o:b(o)?o:W(o)}function Se(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let o of r)o&&n.push(o);for(let o of n)t.searchParams.append("index",o);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function xe(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ke(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function Ee(e,t="",r=ke(e)){return(r[t]||[]).map(n=>({...n,children:Ee(e,n.id,r)}))}function Re(e,t,r="",n=ke(e)){return(n[r]||[]).map(a=>{let o={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?i=>Vt({request:i.request,params:i.params,loadContext:i.context,loader:a.module.loader,routeId:a.id}):void 0,action:a.module.action?i=>$t({request:i.request,params:i.params,loadContext:i.context,action:a.module.action,routeId:a.id}):void 0,handle:a.module.handle};return a.index?{index:!0,...o}:{caseSensitive:a.caseSensitive,children:Re(e,t,a.id,n),...o}})}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Bt=/[&><\u2028\u2029]/g;function Jt(e){return e.replace(Bt,t=>Xt[t])}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(e){return Jt(JSON.stringify(e))}var Kt={};/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function Wt(e,t){if(t??(t=Kt.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let r=new URL(t);r.pathname="ping";let n=await fetch(r.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${r}`),a});if(!n.ok)throw console.error(`Could not reach Remix dev server at ${r} (${n.status})`),Error(await n.text())}function Yt(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Ce="__remix_devServerHooks";function Gt(e){globalThis[Ce]=e}function fe(){return globalThis[Ce]}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(e,t){var r,n;let a=Ee(e.routes),o=Re(e.routes,e.future),i=Dt(t)?t:v.Production,s=Ge(o,{basename:e.basename,future:{v7_relativeSplatPath:((r=e.future)===null||r===void 0?void 0:r.v3_relativeSplatPath)===!0,v7_throwAbortReason:((n=e.future)===null||n===void 0?void 0:n.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((u,{request:c})=>{i!==v.Test&&!c.signal.aborted&&console.error(D(u)&&u.error?u.error:u)});return{routes:a,dataRoutes:o,serverMode:i,staticHandler:s,errorHandler:l}}const Qt=(e,t)=>{let r,n,a,o,i;return async function(l,u={}){if(r=typeof e=="function"?await e():e,t??(t=r.mode),typeof e=="function"){let p=he(r,t);n=p.routes,a=p.serverMode,o=p.staticHandler,i=p.errorHandler}else if(!n||!a||!o||!i){let p=he(r,t);n=p.routes,a=p.serverMode,o=p.staticHandler,i=p.errorHandler}let c=new URL(l.url),d=zt(n,c.pathname,r.basename),m=p=>{if(t===v.Development){var x,N;(x=fe())===null||x===void 0||(N=x.processRequestError)===null||N===void 0||N.call(x,p)}i(p,{context:u,params:d&&d.length>0?d[0].params:{},request:l})},f;if(c.searchParams.has("_data")){let p=c.searchParams.get("_data");if(f=await Zt(a,r,o,p,l,u,m),r.entry.module.handleDataRequest){var h;f=await r.entry.module.handleDataRequest(f,{context:u,params:(d==null||(h=d.find(x=>x.route.id==p))===null||h===void 0?void 0:h.params)||{},request:l})}}else if(d&&d[d.length-1].route.module.default==null&&d[d.length-1].route.module.ErrorBoundary==null)f=await tr(a,o,d.slice(-1)[0].route.id,l,u,m);else{var y,U;let p=t===v.Development?await((y=fe())===null||y===void 0||(U=y.getCriticalCss)===null||U===void 0?void 0:U.call(y,r,c.pathname)):void 0;f=await er(a,r,o,l,u,m,p)}return l.method==="HEAD"?new Response(null,{headers:f.headers,status:f.status,statusText:f.statusText}):f}};async function Zt(e,t,r,n,a,o,i){try{let s=await r.queryRoute(a,{routeId:n,requestContext:o});if(Mt(s)){let l=new Headers(s.headers),u=l.get("Location");return l.set("X-Remix-Redirect",t.basename&&Ke(u,t.basename)||u),l.set("X-Remix-Status",s.status),l.delete("Location"),s.headers.get("Set-Cookie")!==null&&l.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:l})}if(z in s){let l=s[z],u=It(l,a.signal,e),c=l.init||{},d=new Headers(c.headers);return d.set("Content-Type","text/remix-deferred"),d.set("X-Remix-Response","yes"),c.headers=d,new Response(u,c)}return s.headers.set("X-Remix-Response","yes"),s}catch(s){if(b(s))return s.headers.set("X-Remix-Catch","yes"),s;if(D(s))return s&&i(s),De(s,e);let l=s instanceof Error||s instanceof DOMException?s:new Error("Unexpected Server Error");return i(l),X(M(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function er(e,t,r,n,a,o,i){let s;try{s=await r.query(n,{requestContext:a})}catch(d){return o(d),new Response(null,{status:500})}if(b(s))return s;s.errors&&(Object.values(s.errors).forEach(d=>{(!D(d)||d.error)&&o(d)}),s.errors=se(s.errors,e));let l=qt(t,s),u={manifest:t.assets,routeModules:Ut(t.routes),staticHandlerContext:s,criticalCss:i,serverHandoffString:de({url:s.location.pathname,basename:t.basename,criticalCss:i,state:{loaderData:s.loaderData,actionData:s.actionData,errors:le(s.errors,e)},future:t.future,isSpaMode:t.isSpaMode}),future:t.future,isSpaMode:t.isSpaMode,serializeError:d=>M(d,e)},c=t.entry.module.default;try{return await c(n,s.statusCode,l,u,a)}catch(d){o(d);let m=d;if(b(d)){let f;try{let h=d.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?d.body==null?f=null:f=await d.json():f=await d.text(),m=new We(d.status,d.statusText,f)}catch{}}s=Ye(r.dataRoutes,s,m),s.errors&&(s.errors=se(s.errors,e)),u={...u,staticHandlerContext:s,serverHandoffString:de({url:s.location.pathname,basename:t.basename,state:{loaderData:s.loaderData,actionData:s.actionData,errors:le(s.errors,e)},future:t.future,isSpaMode:t.isSpaMode})};try{return await c(n,s.statusCode,l,u,a)}catch(f){return o(f),Oe(f,e)}}}async function tr(e,t,r,n,a,o){try{let i=await t.queryRoute(n,{routeId:r,requestContext:a});return ce(!(z in i),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),ce(b(i),"Expected a Response to be returned from queryRoute"),i}catch(i){return b(i)?(i.headers.set("X-Remix-Catch","yes"),i):D(i)?(i&&o(i),De(i,e)):(o(i),Oe(i,e))}}function De(e,t){return X(M(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Oe(e,t){let r="Unexpected Server Error";return t!==v.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(e){return`__flash_${e}__`}const Y=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(q(n))},get(n){if(r.has(n))return r.get(n);let a=q(n);if(r.has(a)){let o=r.get(a);return r.delete(a),o}},set(n,a){r.set(n,a)},flash(n,a){r.set(q(n),a)},unset(n){r.delete(n)}}},rr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",nr=e=>({cookie:t,createData:r,readData:n,updateData:a,deleteData:o})=>{let i=B(t)?t:e((t==null?void 0:t.name)||"__session",t);return Te(i),{async getSession(s,l){let u=s&&await i.parse(s,l),c=u&&await n(u);return Y(c||{},u||"")},async commitSession(s,l){let{id:u,data:c}=s,d=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:i.expires;return u?await a(u,c,d):u=await r(c,d),i.serialize(u,l)},async destroySession(s,l){return await o(s.id),i.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function Te(e){ge(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ar=e=>({cookie:t}={})=>{let r=B(t)?t:e((t==null?void 0:t.name)||"__session",t);return Te(r),{async getSession(n,a){return Y(n&&await r.parse(n,a)||{})},async commitSession(n,a){let o=await r.serialize(n.data,a);if(o.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+o.length);return o},async destroySession(n,a){return r.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const or=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,a){let o=Math.random().toString(36).substring(2,10);return r.set(o,{data:n,expires:a}),o},async readData(n){if(r.has(n)){let{data:a,expires:o}=r.get(n);if(!o||o>new Date)return a;o&&r.delete(n)}return null},async updateData(n,a,o){r.set(n,{data:a,expires:o})},async deleteData(n){r.delete(n)}})};/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class je extends Error{constructor(t,r){super(`Field "${t}" exceeded upload size of ${r} bytes.`),this.field=t,this.maxBytes=r}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir({filter:e,maxPartSize:t=3e6}={}){return async({filename:r,contentType:n,name:a,data:o})=>{if(e&&!await e({filename:r,contentType:n,name:a}))return;let i=0,s=[];for await(let l of o){if(i+=l.byteLength,i>t)throw new je(a,t);s.push(l)}return typeof r=="string"?new File(s,r,{type:n}):await new Blob(s,{type:n}).text()}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sr=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:je,broadcastDevReady:Wt,createCookieFactory:ct,createCookieSessionStorageFactory:ar,createMemorySessionStorageFactory:or,createRequestHandler:Qt,createSession:Y,createSessionStorageFactory:nr,defer:Ot,isCookie:B,isSession:rr,json:W,logDevReady:Yt,redirect:ve,redirectDocument:Tt,unstable_composeUploadHandlers:Rt,unstable_createMemoryUploadHandler:ir,unstable_parseMultipartFormData:Ct,unstable_setDevServerHooks:Gt},Symbol.toStringTag,{value:"Module"}));function me(e=""){const[t,r]=T.useState(e),[n,a]=T.useState(),[o,i]=T.useState(!1);return{value:t,error:n,onChange:c=>{r(c.target.value),i(!0),n&&c.target.checkValidity()&&a(null)},onBlur:c=>{o&&c.target.checkValidity()},onInvalid:c=>{c.preventDefault(),a(c.target.validationMessage)}}}var lr={},G={},S={};const Ae=He(sr);var H={};/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(H,"__esModule",{value:!0});const Q=new TextEncoder,ur=async(e,t)=>{let r=await Me(t,["sign"]),n=Q.encode(e),a=await crypto.subtle.sign("HMAC",r,n),o=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+o},cr=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),o=await Me(t,["verify"]),i=Q.encode(n),s=dr(atob(a));return await crypto.subtle.verify("HMAC",o,s,i)?n:!1};async function Me(e,t){return await crypto.subtle.importKey("raw",Q.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function dr(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}H.sign=ur;H.unsign=cr;/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(S,"__esModule",{value:!0});var I=Ae,pe=H;const Z=I.createCookieFactory({sign:pe.sign,unsign:pe.unsign}),fr=I.createCookieSessionStorageFactory(Z),Pe=I.createSessionStorageFactory(Z),hr=I.createMemorySessionStorageFactory(Pe);S.createCookie=Z;S.createCookieSessionStorage=fr;S.createMemorySessionStorage=hr;S.createSessionStorage=Pe;/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(G,"__esModule",{value:!0});var mr=S;function pr({cookie:e,kv:t}){return mr.createSessionStorage({cookie:e,async createData(r,n){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let o=[...a].map(i=>i.toString(16).padStart(2,"0")).join("");if(!await t.get(o,"json"))return await t.put(o,JSON.stringify(r),{expiration:n?Math.round(n.getTime()/1e3):void 0}),o}},async readData(r){let n=await t.get(r);return n?JSON.parse(n):null},async updateData(r,n,a){await t.put(r,JSON.stringify(n),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(r){await t.delete(r)}})}G.createWorkersKVSessionStorage=pr;/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=G,r=S,n=Ae;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=r.createCookie,e.createCookieSessionStorage=r.createCookieSessionStorage,e.createMemorySessionStorage=r.createMemorySessionStorage,e.createSessionStorage=r.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return n.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return n.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return n.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return n.createSession}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return n.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return n.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return n.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return n.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return n.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return n.redirectDocument}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return n.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return n.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return n.unstable_parseMultipartFormData}})})(lr);const yr="_contact_xvg9q_1",gr="_form_xvg9q_18",wr="_title_xvg9q_30",vr="_divider_xvg9q_60",_r="_input_xvg9q_98",br="_botkiller_xvg9q_140",Sr="_button_xvg9q_144",xr="_complete_xvg9q_204",kr="_completeTitle_xvg9q_215",Er="_completeText_xvg9q_234",Rr="_completeButton_xvg9q_253",Cr="_formError_xvg9q_279",Dr="_formErrorContent_xvg9q_291",Or="_formErrorMessage_xvg9q_295",Tr="_formErrorIcon_xvg9q_303",jr="_footer_xvg9q_308",E={contact:yr,form:gr,title:wr,divider:vr,input:_r,botkiller:br,button:Sr,complete:xr,completeTitle:kr,completeText:Er,completeButton:Rr,formError:Cr,formErrorContent:Dr,formErrorMessage:Or,formErrorIcon:Tr,footer:jr},Ar="_navIcons_esovg_3",Mr="_navIconLink_esovg_30",Pr="_navIcon_esovg_3",Hr="_mobileNav_esovg_52",R={navIcons:Ar,navIconLink:Mr,navIcon:Pr,mobileNav:Hr},Br=()=>Ne({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),Jr=()=>{T.useRef(),me(""),me("");const e=L.base.durationS,t=Qe();return Ze(),g.jsxs(Le,{className:E.contact,children:[g.jsx(qe,{unmount:!0,in:!(t!=null&&t.success),timeout:1600,children:({status:r,nodeRef:n})=>g.jsxs(et,{unstable_viewTransition:!0,className:E.form,method:"post",ref:n,children:[g.jsx(ze,{className:E.title,"data-status":r,level:3,as:"h1",style:ye(L.base.durationXS,e,.3),children:g.jsx(Ie,{text:"Chào hãy kết nối với tôi qua các liên kết",start:r!=="exited",delay:300})}),g.jsx(Ue,{className:E.divider,"data-status":r,style:ye(L.base.durationXS,e,.4)}),g.jsxs("div",{className:R.navIcons,children:[g.jsx("a",{className:R.navIconLink,"aria-label":"facebook",href:"https://www.facebook.com/namnguyendno",target:"_blank",rel:"noopener noreferrer",children:g.jsx(ee,{className:R.navIcon,icon:"facebook",size:48})},"facebook"),g.jsx("a",{className:R.navIconLink,"aria-label":"messenger",href:"https://www.facebook.com/messages/t/namnguyendno",target:"_blank",rel:"noopener noreferrer",children:g.jsx(ee,{className:R.navIcon,icon:"messenger",size:48})},"messenger")]})]})}),g.jsx(Fe,{className:E.footer})]})};function ye(e,t=re(0),r=1){const n=te(e)*r;return $e({delay:re((te(t)+n).toFixed(0))})}export{Jr as default,Br as meta};
