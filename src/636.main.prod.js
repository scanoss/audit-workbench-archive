(()=>{var t={96429:(t,r,e)=>{const n=e(76417);process.platform;function o(t){return t<48||t>122?0:t<=57||t>=97?t:t>=65&&t<=90?t+32:0}function f(t){let r="ffffffff";for(let e=0;e<t.length;e++)t[e]<r&&(r=t[e]);return r}function c(t){const r=[];for(;t.length>=2;)r.push(parseInt(t.substring(0,2),16)),t=t.substring(2,t.length);return r}function s(t){return t.charAt(6)+t.charAt(7)+t.charAt(4)+t.charAt(5)+t.charAt(2)+t.charAt(3)+t.charAt(0)+t.charAt(1)}let u=[];function l(){let t;const r=[];for(let e=0;e<256;e++){t=e;for(let r=0;r<8;r++)t=1&t?2197175160^t>>>1:t>>>1;r[e]=t}return r}function i(t){return function(t){0==u.length&&(u=l());let r=-1;for(let e=0;e<t.length;e++)r=r>>>8^u[255&(r^t[e])];return(-1^r)>>>0}(t).toString(16).padStart(8,"0")}function h(t){return function(t){0==u.length&&(u=l());let r=-1;for(let e=0;e<t.length;e++)r=r>>>8^u[255&(r^t.charCodeAt(e))];return(-1^r)>>>0}(t).toString(16).padStart(8,"0")}t.exports={wfp_for_content:function(t,r){let e=`file=${n.createHash("md5").update(t).digest("hex")},${t.length},${r}\n`;return e+=function(t){let r="";const e=[];let n=0,u=1,l="ffffffff",a="ffffffff",g=0,p="",d=0,x="";for(let A=0;A<t.length;A++){const $=t[A];if(10==$?(u+=1,n=0):n=o($),n&&(r+=String.fromCharCode(n),r.length>=30)){if(d=h(r),e.push(d),e.length>=64){if(l=f(e),l!==a){const t=i(c(s(l)));g!=u?(p.length>0&&(x+=`${p}\n`),p=`${u}=${t}`):p+=`,${t}`,g=u,a=l}e.shift()}r=r.slice(1)}}p.length>0&&(x+=`${p}\n`);return x}(t),e}}},76417:t=>{"use strict";t.exports=require("crypto")},65013:t=>{"use strict";t.exports=require("worker_threads")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var f=r[n]={exports:{}};return t[n](f,f.exports,e),f.exports}(()=>{const{parentPort:t}=e(65013),r=e(96429);t.on("message",(async e=>{const n=r.wfp_for_content(e.content,e.contentSource);t.postMessage(n)}))})(),module.exports={}})();