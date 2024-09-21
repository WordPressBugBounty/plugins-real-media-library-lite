var devowlWp_utils;(()=>{"use strict";var t,e={768:(t,e,n)=>{n.r(e),n.d(e,{AbstractCategory:()=>at,AbstractCategoryCollection:()=>it,AbstractPost:()=>st,AbstractPostCollection:()=>rt,BATCH_MAX_CHUNK_SIZE:()=>P,BaseOptions:()=>o,ClientCollection:()=>nt,ClientModel:()=>ot,RouteHttpVerb:()=>J,SuspenseChunkTranslation:()=>ut,addCorruptRestApi:()=>q,addCorruptRestApiLog:()=>L,applyQueryString:()=>v,batchRequest:()=>_,commonRequest:()=>H,commonUrlBuilder:()=>b,createContextFactory:()=>h,createLocalizationFactory:()=>Y,createRequestFactory:()=>B,createRoot:()=>i,handleCorrupRestApi:()=>I,handleCorruptRestApi:()=>$,locationRestKeyValueMapPatch:()=>ct,locationRestPluginGet:()=>Z,nonceDeprecationPool:()=>x,obfuscatePath:()=>f,parseResult:()=>G,qs:()=>y,removeCorruptRestApi:()=>D,simpleHash:()=>d,simpleObfuscate:()=>p,sprintf:()=>K,trailingslashit:()=>a,untrailingslashit:()=>r,useChunkTranslation:()=>lt,waitForValidLogin:()=>S});class o{static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t,e){return void 0===e&&(e=!1),e?o.slugCamelCase(t):t}}var s=n(578);const r=t=>t.endsWith("/")||t.endsWith("\\")?r(t.slice(0,-1)):t,a=t=>`${r(t)}/`;function i(t){try{return(0,s.H)(t)}catch(e){return{render:e=>{var n,o;return null==(o=window.ReactDOM)||null==(n=o.render)?void 0:n.call(o,e,t)},unmount:()=>{var e,n;return null==(n=window.ReactDOM)||null==(e=n.unmountComponentAtNode)?void 0:e.call(n,t)}}}}const c=ReactJSXRuntime;var l,u=n(594);function h(t){const e=(0,u.createContext)(t);return{StoreContext:e,StoreProvider:n=>{let{children:o}=n;return(0,c.jsx)(e.Provider,{value:t,children:o})},useStores:()=>(0,u.useContext)(e)}}function d(t){let e=0;for(const n of t)e=(e<<5>>>0)-e+n.charCodeAt(0),e&=2147483647;return e}function p(t,e,n){const o=e.length;if(!/^[a-z0-9]+$/i.test(e))return"";let s="",r=0;const a=t.length;for(let i=0;i<a;i++)if(/[a-z]/i.test(t[i])){const a=t[i]===t[i].toUpperCase()?"A".charCodeAt(0):"a".charCodeAt(0),c=e[(i-r)%o];let l;l=isNaN(parseInt(c,10))?(c.toLowerCase().charCodeAt(0)-a)%26:parseInt(c,10),l=n?l:-l,s+=String.fromCharCode(((t.charCodeAt(i)+l-a)%26+26)%26+a)}else s+=t[i],r++;return s}function f(t,e,n){void 0===n&&(n="keep-last-part");const o=e.split("/").map(((e,o,s)=>"keep-last-part"===n&&o===s.length-1?e:p(e,t,!0)));return o.splice(o.length-1,0,`${"full"===n?1:0}${t.toString()}`),o.join("/")}!function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE"}(l||(l={}));var m=n(976),w=n.n(m),y=n(423),g=n(177);function v(t,e,n){return t.search=y.stringify(n?w().all([y.parse(t.search),...e]):e,!0),t}function b(t){let{location:e,params:n={},nonce:o=!0,options:s,cookieValueAsParam:i}=t;const{obfuscatePath:c}=e,{href:u}=window.location,{restPathObfuscateOffset:h}=s,p=new URL(s.restRoot,u),m=y.parse(p.search),w=m.rest_route||p.pathname,b=[];let P=e.path.replace(/:([A-Za-z0-9-_]+)/g,((t,e)=>(b.push(e),n[e])));const C={};for(const t of Object.keys(n))-1===b.indexOf(t)&&(C[t]=n[t]);i&&(C._httpCookieInvalidate=d(JSON.stringify(i.map(g.A.get))));const{search:O,pathname:T}=new URL(e.path,u);if(O){const t=y.parse(O);for(const e in t)C[e]=t[e];P=T}p.protocol=window.location.protocol;const k=a(w);let _=r(e.namespace||s.restNamespace)+P;h&&c&&(_=f(h,_,c));const E=`${k}${_}`;return m.rest_route?m.rest_route=E:p.pathname=E,o&&s.restNonce&&(m._wpnonce=s.restNonce),v(p,m),["wp-json/","rest_route="].filter((t=>p.toString().indexOf(t)>-1)).length>0&&e.method&&e.method!==l.GET&&v(p,[{_method:e.method}],!0),v(p,[s.restQuery,C],!0),p.toString()}const P=25;let C,O=[];const T=Promise.resolve();async function k(){O=O.filter((t=>{let{options:{signal:e,onQueueItemFinished:n,waitForPromise:o=T},reject:s}=t;return!(null==e?void 0:e.aborted)||(null==n||n(!1),o.then((()=>s(e.reason))),!1)}));const t=O.splice(0,P);if(0!==t.length){try{const[{options:e}]=t,{signal:n,onQueueItemFinished:o,waitForPromise:s=T}=e,{responses:r}=await H({location:{path:"/",method:l.POST,namespace:"batch/v1"},options:e,request:{requests:t.map((t=>{let{request:e}=t;return e}))},settings:{signal:n}});for(let e=0;e<r.length;e++){const{resolve:n,reject:a}=t[e],{body:i,status:c}=r[e],l=c>=200&&c<400;null==o||o(l),s.then((()=>{l?n(i):a({responseJSON:i})}))}}catch(e){for(const{reject:n,options:{onQueueItemFinished:o,waitForPromise:s=T}}of t)null==o||o(!1),s.then((()=>n(e)))}O.length>0&&k()}}function _(t,e){return new Promise(((n,o)=>{O.push({resolve:n,reject:o,request:t,options:e}),clearTimeout(C),C=setTimeout(k,100)}))}let E=!1;function S(){var t;const e=window.jQuery;return(null==(t=window.wp)?void 0:t.heartbeat)&&e?(e(document).trigger("heartbeat-tick",[{"wp-auth-check":!1},"error",null]),E||(E=!0,e(document).ajaxSend(((t,n,o)=>{let{url:s,data:r}=o;(null==s?void 0:s.endsWith("/admin-ajax.php"))&&(null==r?void 0:r.indexOf("action=heartbeat"))>-1&&e("#wp-auth-check:visible").length>0&&n.abort()}))),new Promise((t=>{const n=setInterval((()=>{0===e("#wp-auth-check:visible").length&&(clearInterval(n),t())}),100)}))):new Promise((()=>{}))}const R={},A={};async function x(t,e){if(void 0!==e){const n=A[t]||new Promise((async(n,o)=>{try{const s=await window.fetch(e,{method:"POST"});if(s.ok){const e=await s.text();t===e?o():(R[t]=e,n(e))}else o()}catch(t){o()}}));return A[t]=n,n.finally((()=>{delete A[t]})),n}{if(void 0===t)return;await Promise.all(Object.values(A));let e=t;for(;R[e]&&(e=R[e],R[e]!==t););return Promise.resolve(e)}}const j="notice-corrupt-rest-api",F="data-namespace";async function N(t,e){void 0===e&&(e=async()=>{});const n=document.getElementById(j);if(n&&window.navigator.onLine){if(n.querySelector(`li[${F}="${t}"]`))return;try{await e()}catch(e){n.style.display="block";const o=document.createElement("li");o.setAttribute(F,t),o.innerHTML=`<code>${t}</code>`,n.childNodes[1].appendChild(o),n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}async function D(t){const e=document.getElementById(j);if(e){const n=e.querySelector(`li[${F}="${t}"]`);if(null==n||n.remove(),!e.childNodes[1].childNodes.length){e.style.display="none";const t=e.querySelector("textarea");t&&(t.value="")}}}function q(t,e){let{method:n}=t;n===l.GET&&(e?N(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(j))))}function L(t){let{route:e,method:n,ms:o,response:s}=t;const r=document.querySelector(`#${j} textarea`);if(r){const t=r.value.split("\n").slice(0,9);t.unshift(`[${(new Date).toLocaleTimeString()}] [${n||"GET"}] [${o}ms] ${e}; ${null==s?void 0:s.substr(0,999)}`),r.value=t.join("\n")}}function $(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(t=>{let{persisted:e}=t;const n=document.getElementById(j);n&&e&&0===window.detectCorruptRestApiFailed&&(n.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))N(e,t[e])};let n;const o=()=>{clearTimeout(n),n=setTimeout(e,1e3)};o(),window.addEventListener(j,o)}const I=$;async function G(t,e,n){if(204===e.status)return{};const o=e.clone();try{return await e.json()}catch(e){const s=await o.text();if(""===s&&[l.DELETE,l.PUT].indexOf(n)>-1)return;let r;console.warn(`The response of ${t} contains unexpected JSON, try to resolve the JSON line by line...`,{body:s});for(const t of s.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){r=t}throw r}}var M=n(919),U=n.n(M);const z="application/json;charset=utf-8";async function H(t){let{location:e,options:n,request:o,params:s,settings:r={},cookieValueAsParam:a,multipart:i=!1,sendRestNonce:c=!0,sendReferer:u,replayReason:h,allowBatchRequest:d}=t;const{href:p}=window.location,f=e.namespace||n.restNamespace,m=b({location:e,params:s,nonce:!1,options:n,cookieValueAsParam:a});["wp-json/","rest_route="].filter((t=>m.indexOf(t)>-1)).length>0&&e.method&&e.method!==l.GET?r.method=l.POST:r.method=e.method||l.GET;const y=new URL(m,p),g=-1===["HEAD","GET"].indexOf(r.method);u&&(g?Object.assign(o,{_wp_http_referer:p}):(y.searchParams.set("_wp_http_referer",p.split("?")[0]),y.searchParams.set("_wp_http_referer_b64",`${btoa(p)}-`))),!g&&o&&v(y,[o],!0);const P=y.toString();let C;g&&(i?(C=U()(o,"boolean"==typeof i?{}:i),Array.from(C.values()).filter((t=>t instanceof File)).length>0||(C=JSON.stringify(o))):C=JSON.stringify(o));const O=await x(n.restNonce),T=void 0!==O,k=w().all([r,{headers:{..."string"==typeof C?{"Content-Type":z}:{},...T&&c?{"X-WP-Nonce":O}:{},Accept:"application/json, */*;q=0.1"}}],{isMergeableObject:t=>"[object Object]"===Object.prototype.toString.call(t)});if(k.body=C,d&&e.method!==l.GET&&!(C instanceof FormData))return _({method:e.method,path:b({location:e,params:s,nonce:!1,options:{...n,restRoot:"https://a.de/wp-json"},cookieValueAsParam:a}).substring(20),body:o},{...n,signal:r.signal,..."boolean"==typeof d?{}:d});let E,R=!1;const A=()=>{R=!0};window.addEventListener("pagehide",A),window.addEventListener("beforeunload",A);const j=(new Date).getTime();let F;try{E=await window.fetch(P,k),F=(new Date).getTime()-j,D(f)}catch(t){throw F=(new Date).getTime()-j,R||(L({method:e.method,route:y.pathname,ms:F,response:`${t}`}),q(r,f)),console.error(t),t}finally{window.removeEventListener("pagehide",A),window.removeEventListener("beforeunload",A)}if(!E.ok){let t,a,l=!1;try{if(t=await G(P,E,e.method),"private_site"===t.code&&403===E.status&&T&&!c&&(l=!0,a=1),"rest_cookie_invalid_nonce"===t.code&&T){const{restRecreateNonceEndpoint:t}=n;try{l=!0,2===h?(a=4,await S()):a=2,await x(O,t)}catch(t){}}const o=E.headers.get("retry-after");o.match(/^\d+$/)&&(l=1e3*+o,a=3)}catch(t){}if(l){const t={location:e,options:n,multipart:i,params:s,request:o,sendRestNonce:!0,settings:r,replayReason:a};return"number"==typeof l?new Promise((e=>setTimeout((()=>H(t).then(e)),l))):await H(t)}L({method:e.method,route:y.pathname,ms:F,response:JSON.stringify(t)}),q(r);const u=E;throw u.responseJSON=t,u}return G(P,E,e.method)}function B(t){return{urlBuilder:e=>b({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restPathObfuscateOffset:t.restPathObfuscateOffset}}),request:e=>H({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint,restPathObfuscateOffset:t.restPathObfuscateOffset}})}}const J=l;var Q=n(88);const W=wp.i18n,V=wp;var X=n.n(V);function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return W.sprintf(t,...n)}function Y(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&X()&&X().i18n)for(const n of e[t])X().i18n.setLocaleData(n,t);return{_n:function(e,n,o){for(var s=arguments.length,r=new Array(s>3?s-3:0),a=3;a<s;a++)r[a-3]=arguments[a];return K(W._n(e,n,o,t),...r)},_nx:function(e,n,o,s){for(var r=arguments.length,a=new Array(r>4?r-4:0),i=4;i<r;i++)a[i-4]=arguments[i];return K(W._nx(e,n,s,o,t),...a)},_x:function(e,n){for(var o=arguments.length,s=new Array(o>2?o-2:0),r=2;r<o;r++)s[r-2]=arguments[r];return K(W._x(e,n,t),...s)},__:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return K(W.__(e,t),...o)},_i:function(t,e){return(0,Q.A)({mixedString:t,components:e})}}}const Z={path:"/plugin",method:l.GET};var tt=n(670);const et=mobx;class nt{constructor(){this.entries=new Map,this.busy=!1,this.get=(0,et.flow)((function*(t){const{request:e,params:n,clear:o=!1}=t||{};this.busy=!0;try{const{path:t,namespace:s}=this.annotated,r=yield this.annotated.request({location:{path:t,method:l.GET,namespace:s},request:e,params:n});o&&this.entries.clear();for(const t of r){const e=this.instance(t),n=this.entries.get(e.key);n?n.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,et.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:n}=t||{};this.busy=!0;try{const{singlePath:t,namespace:o}=this.annotated,s=yield this.annotated.request({location:{path:t,method:l.GET,namespace:o},request:e,params:n}),r=this.instance(s);this.entries.set(r.key,r)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}static#t=this.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}}}(0,tt.Cg)([et.observable],nt.prototype,"entries",void 0),(0,tt.Cg)([et.observable],nt.prototype,"busy",void 0);class ot{get key(){var t;return null==(t=this.data)?void 0:t[this.annotated.keyId]}constructor(t,e={}){this.data={},this.busy=!1,this.persist=(0,et.flow)((function*(t,e){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:n,method:o},namespace:s}=this.annotated,r=yield this.annotated.request({location:{path:n,method:o||l.POST,namespace:s},request:this.transformDataForPersist(),params:t||{},...e||{}});this.fromResponse(r),(null==e?void 0:e.allowBatchRequest)||(this.collection.entries.set(this.key,this),this.afterPersist())}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,et.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:n},namespace:o}=this.annotated,s=yield this.annotated.request({location:{path:e,method:n||l.PATCH,namespace:o},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(s),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,et.flow)((function*(t,e){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:n,method:o},namespace:s}=this.annotated,r=yield this.annotated.request({location:{path:n,method:o||l.DELETE,namespace:s},params:{[this.annotated.keyId]:this.key,...t||{}},...e||{}});return(null==e?void 0:e.allowBatchRequest)||(this.collection.entries.delete(this.key),this.afterDelete()),r}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,et.runInAction)((()=>{this.collection=t,this.data=e}))}static#t=this.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}};fromResponse(t){return(0,et.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}}(0,tt.Cg)([et.observable,(0,tt.Sn)("design:type",Object)],ot.prototype,"data",void 0),(0,tt.Cg)([et.observable,(0,tt.Sn)("design:type",Object)],ot.prototype,"collection",void 0),(0,tt.Cg)([et.observable],ot.prototype,"busy",void 0),(0,tt.Cg)([et.computed,(0,tt.Sn)("design:type",Function),(0,tt.Sn)("design:paramtypes",[]),(0,tt.Sn)("design:returntype",Object)],ot.prototype,"key",null);class st extends ot{transformDataForPersist(){var t,e;const n={...super.transformDataForPersist()};return n.title=null==(t=n.title)?void 0:t.rendered,n.content=null==(e=n.content)?void 0:e.rendered,delete n._links,delete n.link,n}transformDataForPatch(){return this.transformDataForPersist()}}class rt extends nt{}class at extends ot{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class it extends nt{}const ct={path:"/key-value-map/:name/:key",method:l.PATCH};function lt(t,e){let{chunks:n,chunksLanguageFolder:o,textDomain:s,version:r}=e;const a=n[t.split("?")[0]],i=!!a,[c,l]=(0,u.useState)(!1),h=(0,u.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:n}=e.wpi18nLazy,a=`${o}/${s}-${t}.json`;if(i&&-1===n.indexOf(a)){n.push(a);try{const t=await window.fetch(`${a}?ver=${r}`),{locale_data:{messages:e}}=await t.json();X().i18n.setLocaleData(e,s)}catch{}}}),[o,s]);return(0,u.useEffect)((()=>{i?Promise.all(a.map(h)).then((()=>{l(!0)})):l(!0)}),[i,h]),c}const ut=t=>{let{children:e,chunkFile:n,fallback:o,options:s}=t;const r=lt(n,s());return(0,c.jsx)(c.Fragment,{children:r?e:o})}},594:t=>{t.exports=React},206:t=>{t.exports=ReactDOM}},n={};function o(t){var s=n[t];if(void 0!==s)return s.exports;var r=n[t]={exports:{}};return e[t].call(r.exports,r,r.exports,o),r.exports}o.m=e,t=[],o.O=(e,n,s,r)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,s,r]=t[u],i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((t=>o.O[t](n[c])))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,s,r]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={57:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var s,r,[a,i,c]=n,l=0;if(a.some((e=>0!==t[e]))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(c)var u=c(o)}for(e&&e(n);l<a.length;l++)r=a[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var s=o.O(void 0,[26],(()=>o(768)));s=o.O(s),devowlWp_utils=s})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-media-library/4.22.22/7fb3525df77989b9b6c43b872c4619b9/index.js.map
