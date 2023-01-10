var Ut=Object.defineProperty;var Gt=(t,n,e)=>n in t?Ut(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var E=(t,n,e)=>(Gt(t,typeof n!="symbol"?n+"":n,e),e);/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.2
*/const vt=Object.freeze({left:0,top:0,width:16,height:16}),L=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),_=Object.freeze({...vt,...L}),G=Object.freeze({..._,body:"",hidden:!1}),Jt=Object.freeze({width:null,height:null}),kt=Object.freeze({...Jt,...L});function Kt(t,n=0){const e=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(e===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(e!==t){let o=0;switch(e){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-e.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return n}const Wt=/[\s,]+/;function Xt(t,n){n.split(Wt).forEach(e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const At={...kt,preserveAspectRatio:""};function ct(t){const n={...At},e=(r,o)=>t.getAttribute(r)||o;return n.width=e("width",null),n.height=e("height",null),n.rotate=Kt(e("rotate","")),Xt(n,e("flip","")),n.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),n}function Yt(t,n){for(const e in At)if(t[e]!==n[e])return!0;return!1}const v=/^[a-z0-9]+(-[a-z0-9]+)*$/,j=(t,n,e,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const u=o.pop(),c=o.pop(),l={provider:o.length>0?o[0]:r,prefix:c,name:u};return n&&!N(l)?null:l}const i=o[0],s=i.split("-");if(s.length>1){const u={provider:r,prefix:s.shift(),name:s.join("-")};return n&&!N(u)?null:u}if(e&&r===""){const u={provider:r,prefix:"",name:i};return n&&!N(u,e)?null:u}return null},N=(t,n)=>t?!!((t.provider===""||t.provider.match(v))&&(n&&t.prefix===""||t.prefix.match(v))&&t.name.match(v)):!1;function Zt(t,n){const e={};!t.hFlip!=!n.hFlip&&(e.hFlip=!0),!t.vFlip!=!n.vFlip&&(e.vFlip=!0);const r=((t.rotate||0)+(n.rotate||0))%4;return r&&(e.rotate=r),e}function ut(t,n){const e=Zt(t,n);for(const r in G)r in L?r in t&&!(r in e)&&(e[r]=L[r]):r in n?e[r]=n[r]:r in t&&(e[r]=t[r]);return e}function te(t,n){const e=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(e[s])return o[s]=[];if(!(s in o)){o[s]=null;const u=r[s]&&r[s].parent,c=u&&i(u);c&&(o[s]=[u].concat(c))}return o[s]}return(n||Object.keys(e).concat(Object.keys(r))).forEach(i),o}function ee(t,n,e){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(u){i=ut(r[u]||o[u],i)}return s(n),e.forEach(s),ut(t,i)}function Pt(t,n){const e=[];if(typeof t!="object"||typeof t.icons!="object")return e;t.not_found instanceof Array&&t.not_found.forEach(o=>{n(o,null),e.push(o)});const r=te(t);for(const o in r){const i=r[o];i&&(n(o,ee(t,o,i)),e.push(o))}return e}const ne={provider:"",aliases:{},not_found:{},...vt};function V(t,n){for(const e in n)if(e in t&&typeof t[e]!=typeof n[e])return!1;return!0}function _t(t){if(typeof t!="object"||t===null)return null;const n=t;if(typeof n.prefix!="string"||!t.icons||typeof t.icons!="object"||!V(t,ne))return null;const e=n.icons;for(const o in e){const i=e[o];if(!o.match(v)||typeof i.body!="string"||!V(i,G))return null}const r=n.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(v)||typeof s!="string"||!e[s]&&!r[s]||!V(i,G))return null}return n}const R=Object.create(null);function oe(t,n){return{provider:t,prefix:n,icons:Object.create(null),missing:new Set}}function w(t,n){const e=R[t]||(R[t]=Object.create(null));return e[n]||(e[n]=oe(t,n))}function et(t,n){return _t(n)?Pt(n,(e,r)=>{r?t.icons[e]=r:t.missing.add(e)}):[]}function re(t,n,e){try{if(typeof e.body=="string")return t.icons[n]={...e},!0}catch{}return!1}function ie(t,n){let e=[];return(typeof t=="string"?[t]:Object.keys(R)).forEach(o=>{(typeof o=="string"&&typeof n=="string"?[n]:Object.keys(R[o]||{})).forEach(s=>{const u=w(o,s);e=e.concat(Object.keys(u.icons).map(c=>(o!==""?"@"+o+":":"")+s+":"+c))})}),e}let k=!1;function jt(t){return typeof t=="boolean"&&(k=t),k}function A(t){const n=typeof t=="string"?j(t,!0,k):t;if(n){const e=w(n.provider,n.prefix),r=n.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Ot(t,n){const e=j(t,!0,k);if(!e)return!1;const r=w(e.provider,e.prefix);return re(r,e.name,n)}function lt(t,n){if(typeof t!="object")return!1;if(typeof n!="string"&&(n=t.provider||""),k&&!n&&!t.prefix){let o=!1;return _t(t)&&(t.prefix="",Pt(t,(i,s)=>{s&&Ot(i,s)&&(o=!0)})),o}const e=t.prefix;if(!N({provider:n,prefix:e,name:"a"}))return!1;const r=w(n,e);return!!et(r,t)}function se(t){return!!A(t)}function ce(t){const n=A(t);return n?{..._,...n}:null}function ue(t){const n={loaded:[],missing:[],pending:[]},e=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,u=o.name,c=e[i]||(e[i]=Object.create(null)),l=c[s]||(c[s]=w(i,s));let a;u in l.icons?a=n.loaded:s===""||l.missing.has(u)?a=n.missing:a=n.pending;const f={provider:i,prefix:s,name:u};a.push(f)}),n}function Tt(t,n){t.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(o=>o.id!==n))})}function le(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const n=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!n.length)return;let e=!1;const r=t.provider,o=t.prefix;n.forEach(i=>{const s=i.icons,u=s.pending.length;s.pending=s.pending.filter(c=>{if(c.prefix!==o)return!0;const l=c.name;if(t.icons[l])s.loaded.push({provider:r,prefix:o,name:l});else if(t.missing.has(l))s.missing.push({provider:r,prefix:o,name:l});else return e=!0,!0;return!1}),s.pending.length!==u&&(e||Tt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let ae=0;function fe(t,n,e){const r=ae++,o=Tt.bind(null,e,r);if(!n.pending.length)return o;const i={id:r,icons:n,callback:t,abort:o};return e.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}const J=Object.create(null);function at(t,n){J[t]=n}function K(t){return J[t]||J[""]}function de(t,n=!0,e=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?j(o,n,e):o;i&&r.push(i)}),r}var he={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function pe(t,n,e,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let d=t.resources.slice(0);for(s=[];d.length>1;){const y=Math.floor(Math.random()*d.length);s.push(d[y]),d=d.slice(0,y).concat(d.slice(y+1))}s=s.concat(d)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const u=Date.now();let c="pending",l=0,a,f=null,h=[],g=[];typeof r=="function"&&g.push(r);function p(){f&&(clearTimeout(f),f=null)}function B(){c==="pending"&&(c="aborted"),p(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function O(d,y){y&&(g=[]),typeof d=="function"&&g.push(d)}function b(){return{startTime:u,payload:n,status:c,queriesSent:l,queriesPending:h.length,subscribe:O,abort:B}}function m(){c="failed",g.forEach(d=>{d(void 0,a)})}function st(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function Ht(d,y,S){const T=y!=="success";switch(h=h.filter(I=>I!==d),c){case"pending":break;case"failed":if(T||!t.dataAfterTimeout)return;break;default:return}if(y==="abort"){a=S,m();return}if(T){a=S,h.length||(s.length?q():m());return}if(p(),st(),!t.random){const I=t.resources.indexOf(d.resource);I!==-1&&I!==t.index&&(t.index=I)}c="completed",g.forEach(I=>{I(S)})}function q(){if(c!=="pending")return;p();const d=s.shift();if(d===void 0){if(h.length){f=setTimeout(()=>{p(),c==="pending"&&(st(),m())},t.timeout);return}m();return}const y={status:"pending",resource:d,callback:(S,T)=>{Ht(y,S,T)}};h.push(y),l++,f=setTimeout(q,t.rotate),e(d,n,y.callback)}return setTimeout(q),b}function Et(t){const n={...he,...t};let e=[];function r(){e=e.filter(u=>u().status==="pending")}function o(u,c,l){const a=pe(n,u,c,(f,h)=>{r(),l&&l(f,h)});return e.push(a),a}function i(u){return e.find(c=>u(c))||null}return{query:o,find:i,setIndex:u=>{n.index=u},getIndex:()=>n.index,cleanup:r}}function nt(t){let n;if(typeof t.resources=="string")n=[t.resources];else if(n=t.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const D=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;C.length>0;)C.length===1||Math.random()>.5?F.push(C.shift()):F.push(C.pop());D[""]=nt({resources:["https://api.iconify.design"].concat(F)});function ft(t,n){const e=nt(n);return e===null?!1:(D[t]=e,!0)}function $(t){return D[t]}function ge(){return Object.keys(D)}function dt(){}const z=Object.create(null);function me(t){if(!z[t]){const n=$(t);if(!n)return;const e=Et(n),r={config:n,redundancy:e};z[t]=r}return z[t]}function Mt(t,n,e){let r,o;if(typeof t=="string"){const i=K(t);if(!i)return e(void 0,424),dt;o=i.send;const s=me(t);s&&(r=s.redundancy)}else{const i=nt(t);if(i){r=Et(i);const s=t.resources?t.resources[0]:"",u=K(s);u&&(o=u.send)}}return!r||!o?(e(void 0,424),dt):r.query(n,o,e)().abort}const ht="iconify2",P="iconify",Nt=P+"-count",pt=P+"-version",Ft=36e5,ye=168;function W(t,n){try{return t.getItem(n)}catch{}}function ot(t,n,e){try{return t.setItem(n,e),!0}catch{}}function gt(t,n){try{t.removeItem(n)}catch{}}function X(t,n){return ot(t,Nt,n.toString())}function Y(t){return parseInt(W(t,Nt))||0}const x={local:!0,session:!0},Lt={local:new Set,session:new Set};let rt=!1;function be(t){rt=t}let M=typeof window>"u"?{}:window;function Rt(t){const n=t+"Storage";try{if(M&&M[n]&&typeof M[n].length=="number")return M[n]}catch{}x[t]=!1}function Qt(t,n){const e=Rt(t);if(!e)return;const r=W(e,pt);if(r!==ht){if(r){const u=Y(e);for(let c=0;c<u;c++)gt(e,P+c.toString())}ot(e,pt,ht),X(e,0);return}const o=Math.floor(Date.now()/Ft)-ye,i=u=>{const c=P+u.toString(),l=W(e,c);if(typeof l=="string"){try{const a=JSON.parse(l);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&n(a,u))return!0}catch{}gt(e,c)}};let s=Y(e);for(let u=s-1;u>=0;u--)i(u)||(u===s-1?(s--,X(e,s)):Lt[t].add(u))}function Dt(){if(!rt){be(!0);for(const t in x)Qt(t,n=>{const e=n.data,r=n.provider,o=e.prefix,i=w(r,o);if(!et(i,e).length)return!1;const s=e.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function we(t,n){const e=t.lastModifiedCached;if(e&&e>=n)return e===n;if(t.lastModifiedCached=n,e)for(const r in x)Qt(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===n});return!0}function Ie(t,n){rt||Dt();function e(r){let o;if(!x[r]||!(o=Rt(r)))return;const i=Lt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Y(o),!X(o,s+1))return;const u={cached:Math.floor(Date.now()/Ft),provider:t.provider,data:n};return ot(o,P+s.toString(),JSON.stringify(u))}n.lastModified&&!we(t,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),e("local")||e("session"))}function mt(){}function xe(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,le(t)}))}function Se(t,n){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(n).sort():t.iconsToLoad=n,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=K(e)))return;i.prepare(e,r,o).forEach(u=>{Mt(e,u,c=>{if(typeof c!="object")u.icons.forEach(l=>{t.missing.add(l)});else try{const l=et(t,c);if(!l.length)return;const a=t.pendingIcons;a&&l.forEach(f=>{a.delete(f)}),Ie(t,c)}catch(l){console.error(l)}xe(t)})})}))}const it=(t,n)=>{const e=de(t,!0,jt()),r=ue(e);if(!r.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(r.loaded,r.missing,r.pending,mt)}),()=>{c=!1}}const o=Object.create(null),i=[];let s,u;return r.pending.forEach(c=>{const{provider:l,prefix:a}=c;if(a===u&&l===s)return;s=l,u=a,i.push(w(l,a));const f=o[l]||(o[l]=Object.create(null));f[a]||(f[a]=[])}),r.pending.forEach(c=>{const{provider:l,prefix:a,name:f}=c,h=w(l,a),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(f)||(g.add(f),o[l][a].push(f))}),i.forEach(c=>{const{provider:l,prefix:a}=c;o[l][a].length&&Se(c,o[l][a])}),n?fe(n,r,i):mt},Ce=t=>new Promise((n,e)=>{const r=typeof t=="string"?j(t,!0):t;if(!r){e(t);return}it([r||t],o=>{if(o.length&&r){const i=A(r);if(i){n({..._,...i});return}}e(t)})});function ve(t){try{const n=typeof t=="string"?JSON.parse(t):t;if(typeof n.body=="string")return{...n}}catch{}}function ke(t,n){const e=typeof t=="string"?j(t,!0,!0):null;if(!e){const i=ve(t);return{value:t,data:i}}const r=A(e);if(r!==void 0||!e.prefix)return{value:t,name:e,data:r};const o=it([e],()=>n(t,e,A(e)));return{value:t,name:e,loading:o}}function H(t){return t.hasAttribute("inline")}let $t=!1;try{$t=navigator.vendor.indexOf("Apple")===0}catch{}function Ae(t,n){switch(n){case"svg":case"bg":case"mask":return n}return n!=="style"&&($t||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const Pe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,_e=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Z(t,n,e){if(n===1)return t;if(e=e||100,typeof t=="number")return Math.ceil(t*n*e)/e;if(typeof t!="string")return t;const r=t.split(Pe);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=_e.test(i);for(;;){if(s){const u=parseFloat(i);isNaN(u)?o.push(i):o.push(Math.ceil(u*n*e)/e)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}function Bt(t,n){const e={..._,...t},r={...kt,...n},o={left:e.left,top:e.top,width:e.width,height:e.height};let i=e.body;[e,r].forEach(g=>{const p=[],B=g.hFlip,O=g.vFlip;let b=g.rotate;B?O?b+=2:(p.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),p.push("scale(-1 1)"),o.top=o.left=0):O&&(p.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),p.push("scale(1 -1)"),o.top=o.left=0);let m;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:m=o.height/2+o.top,p.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:p.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:m=o.width/2+o.left,p.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}b%2===1&&(o.left!==o.top&&(m=o.left,o.left=o.top,o.top=m),o.width!==o.height&&(m=o.width,o.width=o.height,o.height=m)),p.length&&(i='<g transform="'+p.join(" ")+'">'+i+"</g>")});const s=r.width,u=r.height,c=o.width,l=o.height;let a,f;return s===null?(f=u===null?"1em":u==="auto"?l:u,a=Z(f,c/l)):(a=s==="auto"?c:s,f=u===null?Z(a,l/c):u==="auto"?l:u),{attributes:{width:a.toString(),height:f.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+l.toString()},body:i}}const je=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Q=je();function Oe(t){Q=t}function Te(){return Q}function Ee(t,n){const e=$(t);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let o=0;e.resources.forEach(s=>{o=Math.max(o,s.length)});const i=n+".json?icons=";r=e.maxURL-o-e.path.length-i.length}return r}function Me(t){return t===404}const Ne=(t,n,e)=>{const r=[],o=Ee(t,n),i="icons";let s={type:i,provider:t,prefix:n,icons:[]},u=0;return e.forEach((c,l)=>{u+=c.length+1,u>=o&&l>0&&(r.push(s),s={type:i,provider:t,prefix:n,icons:[]},u=c.length),s.icons.push(c)}),r.push(s),r};function Fe(t){if(typeof t=="string"){const n=$(t);if(n)return n.path}return"/"}const Le=(t,n,e)=>{if(!Q){e("abort",424);return}let r=Fe(n.provider);switch(n.type){case"icons":{const i=n.prefix,u=n.icons.join(","),c=new URLSearchParams({icons:u});r+=i+".json?"+c.toString();break}case"custom":{const i=n.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:e("abort",400);return}let o=503;Q(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{e(Me(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?e("abort",i):e("next",o)});return}setTimeout(()=>{e("success",i)})}).catch(()=>{e("next",o)})},Re={prepare:Ne,send:Le};function yt(t,n){switch(t){case"local":case"session":x[t]=n;break;case"all":for(const e in x)x[e]=n;break}}function qt(){at("",Re),jt(!0);let t;try{t=window}catch{}if(t){if(Dt(),t.IconifyPreload!==void 0){const e=t.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!lt(o))&&console.error(r)}catch{console.error(r)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const r in e){const o="IconifyProviders["+r+"] is invalid.";try{const i=e[r];if(typeof i!="object"||!i||i.resources===void 0)continue;ft(r,i)||console.error(o)}catch{console.error(o)}}}}return{enableCache:e=>yt(e,!0),disableCache:e=>yt(e,!1),iconExists:se,getIcon:ce,listIcons:ie,addIcon:Ot,addCollection:lt,calculateSize:Z,buildIcon:Bt,loadIcons:it,loadIcon:Ce,addAPIProvider:ft,_api:{getAPIConfig:$,setAPIModule:at,sendAPIQuery:Mt,setFetch:Oe,getFetch:Te,listAPIProviders:ge}}}function Vt(t,n){let e=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in n)e+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+t+"</svg>"}function Qe(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function De(t){return'url("data:image/svg+xml,'+Qe(t)+'")'}const tt={"background-color":"currentColor"},zt={"background-color":"transparent"},bt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},wt={"-webkit-mask":tt,mask:tt,background:zt};for(const t in wt){const n=wt[t];for(const e in bt)n[t+"-"+e]=bt[e]}function It(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function $e(t,n,e){const r=document.createElement("span");let o=t.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const i=t.attributes,s=Vt(o,{...i,width:n.width+"",height:n.height+""}),u=De(s),c=r.style,l={"--svg":u,width:It(i.width),height:It(i.height),...e?tt:zt};for(const a in l)c.setProperty(a,l[a]);return r}function Be(t){const n=document.createElement("span");return n.innerHTML=Vt(t.body,t.attributes),n.firstChild}function xt(t,n){const e=n.icon.data,r=n.customisations,o=Bt(e,r);r.preserveAspectRatio&&(o.attributes.preserveAspectRatio=r.preserveAspectRatio);const i=n.renderedMode;let s;switch(i){case"svg":s=Be(o);break;default:s=$e(o,{..._,...e},i==="mask")}const u=Array.from(t.childNodes).find(c=>{const l=c.tagName&&c.tagName.toUpperCase();return l==="SPAN"||l==="SVG"});u?s.tagName==="SPAN"&&u.tagName===s.tagName?u.setAttribute("style",s.getAttribute("style")):t.replaceChild(s,u):t.appendChild(s)}const U="data-style";function St(t,n){let e=Array.from(t.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(U));e||(e=document.createElement("style"),e.setAttribute(U,U),t.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(n?"-0.125em":"0")+"}span,svg{display:block}"}function Ct(t,n,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:n,icon:t,lastRender:r}}function qe(t="iconify-icon"){let n,e;try{n=window.customElements,e=window.HTMLElement}catch{return}if(!n||!e)return;const r=n.get(t);if(r)return r;const o=["icon","mode","inline","width","height","rotate","flip"],i=class extends e{constructor(){super();E(this,"_shadowRoot");E(this,"_state");E(this,"_checkQueued",!1);const c=this._shadowRoot=this.attachShadow({mode:"open"}),l=H(this);St(c,l),this._state=Ct({value:""},l),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(c){if(c==="inline"){const l=H(this),a=this._state;l!==a.inline&&(a.inline=l,St(this._shadowRoot,l))}else this._queueCheck()}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return H(this)}set inline(c){this.setAttribute("inline",c?"true":null)}restartAnimation(){const c=this._state;if(c.rendered){const l=this._shadowRoot;if(c.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}xt(l,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,l=this.getAttribute("icon");if(l!==c.icon.value){this._iconChanged(l);return}if(!c.rendered)return;const a=this.getAttribute("mode"),f=ct(this);(c.attrMode!==a||Yt(c.customisations,f))&&this._renderIcon(c.icon,f,a)}_iconChanged(c){const l=ke(c,(a,f,h)=>{const g=this._state;if(g.rendered||this.getAttribute("icon")!==a)return;const p={value:a,name:f,data:h};p.data?this._gotIconData(p):g.icon=p});l.data?this._gotIconData(l):this._state=Ct(l,this._state.inline,this._state)}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,ct(this),this.getAttribute("mode"))}_renderIcon(c,l,a){const f=Ae(c.data.body,a),h=this._state.inline;xt(this._shadowRoot,this._state={rendered:!0,icon:c,inline:h,customisations:l,attrMode:a,renderedMode:f})}};o.forEach(u=>{u in i.prototype||Object.defineProperty(i.prototype,u,{get:function(){return this.getAttribute(u)},set:function(c){this.setAttribute(u,c)}})});const s=qt();for(const u in s)i[u]=i.prototype[u]=s[u];return n.define(t,i),i}qe()||qt();