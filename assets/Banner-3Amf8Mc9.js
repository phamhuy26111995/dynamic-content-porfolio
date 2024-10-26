import{j as C,r as xt,c as _t,a as wt,R as jt}from"./index-B7A4dO-E.js";import{b as Et,c as Ot,d as Tt}from"./index-BkeaT-19.js";import{m as V,f as B}from"./variants-DyKvhlc0.js";import{L as St}from"./index-CbaGw2vi.js";import{c as At}from"./selectors-BjqCRDvI.js";import{u as Nt}from"./useTranslation-CaWpHnLf.js";import"./iconBase-Clvt-5vs.js";function Ct({image:G}){return C.jsxs("svg",{className:"lg:w-full lg:h-auto",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",children:[C.jsx("path",{fill:"#FF56F6",d:"M61.5,-49.1C75.9,-31.1,81,-5.7,76,17.9C71.1,41.6,56.1,63.5,36.2,71.7C16.4,79.9,-8.4,74.3,-28.6,63.2C-48.8,52,-64.5,35.1,-71.4,13.7C-78.4,-7.7,-76.5,-33.6,-63.2,-51.4C-49.8,-69.2,-24.9,-78.8,-0.7,-78.2C23.6,-77.7,47.2,-67.1,61.5,-49.1Z",transform:"translate(100 100)"}),C.jsx("foreignObject",{x:"40",y:"25",width:"130",height:"130",children:C.jsx("div",{className:"image-container",style:{width:"100%",height:"100%"},children:C.jsx("img",{src:G,style:{maxWidth:"100%",maxHeight:"100%",width:"100%",height:"100%",objectFit:"cover"},alt:"blob"})})})]})}var pt={exports:{}};(function(G,J){(function(X,W){G.exports=W(xt)})(typeof self<"u"?self:_t,X=>(()=>{var W={7403:(e,o,t)=>{t.d(o,{default:()=>H});var n=t(4087),i=t.n(n);const a=function(w){return new RegExp(/<[a-z][\s\S]*>/i).test(w)},r=function(w,h){return Math.floor(Math.random()*(h-w+1))+w};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",d="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",x="CHANGE_CURSOR",E="PASTE_STRING",S="HTML_TAG";function O(w){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(w)}function y(w,h){var T=Object.keys(w);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(w);h&&(j=j.filter(function(z){return Object.getOwnPropertyDescriptor(w,z).enumerable})),T.push.apply(T,j)}return T}function _(w){for(var h=1;h<arguments.length;h++){var T=arguments[h]!=null?arguments[h]:{};h%2?y(Object(T),!0).forEach(function(j){A(w,j,T[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(T)):y(Object(T)).forEach(function(j){Object.defineProperty(w,j,Object.getOwnPropertyDescriptor(T,j))})}return w}function N(w){return function(h){if(Array.isArray(h))return P(h)}(w)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(w)||function(h,T){if(h){if(typeof h=="string")return P(h,T);var j=Object.prototype.toString.call(h).slice(8,-1);return j==="Object"&&h.constructor&&(j=h.constructor.name),j==="Map"||j==="Set"?Array.from(h):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?P(h,T):void 0}}(w)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function P(w,h){(h==null||h>w.length)&&(h=w.length);for(var T=0,j=new Array(h);T<h;T++)j[T]=w[T];return j}function k(w,h){for(var T=0;T<h.length;T++){var j=h[T];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(w,Q(j.key),j)}}function A(w,h,T){return(h=Q(h))in w?Object.defineProperty(w,h,{value:T,enumerable:!0,configurable:!0,writable:!0}):w[h]=T,w}function Q(w){var h=function(T,j){if(O(T)!=="object"||T===null)return T;var z=T[Symbol.toPrimitive];if(z!==void 0){var s=z.call(T,"string");if(O(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(w);return O(h)==="symbol"?h:String(h)}const H=function(){function w(j,z){var s=this;if(function(g,L){if(!(g instanceof L))throw new TypeError("Cannot call a class as a function")}(this,w),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),A(this,"setupWrapperElement",function(){s.state.elements.container&&(s.state.elements.wrapper.className=s.options.wrapperClassName,s.state.elements.cursor.className=s.options.cursorClassName,s.state.elements.cursor.innerHTML=s.options.cursor,s.state.elements.container.innerHTML="",s.state.elements.container.appendChild(s.state.elements.wrapper),s.state.elements.container.appendChild(s.state.elements.cursor))}),A(this,"start",function(){return s.state.eventLoopPaused=!1,s.runEventLoop(),s}),A(this,"pause",function(){return s.state.eventLoopPaused=!0,s}),A(this,"stop",function(){return s.state.eventLoop&&((0,n.cancel)(s.state.eventLoop),s.state.eventLoop=null),s}),A(this,"pauseFor",function(g){return s.addEventToQueue(p,{ms:g}),s}),A(this,"typeOutAllStrings",function(){return typeof s.options.strings=="string"?(s.typeString(s.options.strings).pauseFor(s.options.pauseFor),s):(s.options.strings.forEach(function(g){s.typeString(g).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)}),s)}),A(this,"typeString",function(g){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(g))return s.typeOutHTMLString(g,L);if(g){var R=(s.options||{}).stringSplitter,F=typeof R=="function"?R(g):g.split("");s.typeCharacters(F,L)}return s}),A(this,"pasteString",function(g){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(g)?s.typeOutHTMLString(g,L,!0):(g&&s.addEventToQueue(E,{character:g,node:L}),s)}),A(this,"typeOutHTMLString",function(g){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,R=arguments.length>2?arguments[2]:void 0,F=function($){var Y=document.createElement("div");return Y.innerHTML=$,Y.childNodes}(g);if(F.length>0)for(var D=0;D<F.length;D++){var I=F[D],U=I.innerHTML;I&&I.nodeType!==3?(I.innerHTML="",s.addEventToQueue(m,{node:I,parentNode:L}),R?s.pasteString(U,I):s.typeString(U,I)):I.textContent&&(R?s.pasteString(I.textContent,L):s.typeString(I.textContent,L))}return s}),A(this,"deleteAll",function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return s.addEventToQueue(l,{speed:g}),s}),A(this,"changeDeleteSpeed",function(g){if(!g)throw new Error("Must provide new delete speed");return s.addEventToQueue(v,{speed:g}),s}),A(this,"changeDelay",function(g){if(!g)throw new Error("Must provide new delay");return s.addEventToQueue(b,{delay:g}),s}),A(this,"changeCursor",function(g){if(!g)throw new Error("Must provide new cursor");return s.addEventToQueue(x,{cursor:g}),s}),A(this,"deleteChars",function(g){if(!g)throw new Error("Must provide amount of characters to delete");for(var L=0;L<g;L++)s.addEventToQueue(c);return s}),A(this,"callFunction",function(g,L){if(!g||typeof g!="function")throw new Error("Callback must be a function");return s.addEventToQueue(d,{cb:g,thisArg:L}),s}),A(this,"typeCharacters",function(g){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!g||!Array.isArray(g))throw new Error("Characters must be an array");return g.forEach(function(R){s.addEventToQueue(u,{character:R,node:L})}),s}),A(this,"removeCharacters",function(g){if(!g||!Array.isArray(g))throw new Error("Characters must be an array");return g.forEach(function(){s.addEventToQueue(c)}),s}),A(this,"addEventToQueue",function(g,L){var R=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.addEventToStateProperty(g,L,R,"eventQueue")}),A(this,"addReverseCalledEvent",function(g,L){var R=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.options.loop?s.addEventToStateProperty(g,L,R,"reverseCalledEvents"):s}),A(this,"addEventToStateProperty",function(g,L){var R=arguments.length>2&&arguments[2]!==void 0&&arguments[2],F=arguments.length>3?arguments[3]:void 0,D={eventName:g,eventArgs:L||{}};return s.state[F]=R?[D].concat(N(s.state[F])):[].concat(N(s.state[F]),[D]),s}),A(this,"runEventLoop",function(){s.state.lastFrameTime||(s.state.lastFrameTime=Date.now());var g=Date.now(),L=g-s.state.lastFrameTime;if(!s.state.eventQueue.length){if(!s.options.loop)return;s.state.eventQueue=N(s.state.calledEvents),s.state.calledEvents=[],s.options=_({},s.state.initialOptions)}if(s.state.eventLoop=i()(s.runEventLoop),!s.state.eventLoopPaused){if(s.state.pauseUntil){if(g<s.state.pauseUntil)return;s.state.pauseUntil=null}var R,F=N(s.state.eventQueue),D=F.shift();if(!(L<=(R=D.eventName===f||D.eventName===c?s.options.deleteSpeed==="natural"?r(40,80):s.options.deleteSpeed:s.options.delay==="natural"?r(120,160):s.options.delay))){var I=D.eventName,U=D.eventArgs;switch(s.logInDevMode({currentEvent:D,state:s.state,delay:R}),I){case E:case u:var $=U.character,Y=U.node,st=document.createTextNode($),q=st;s.options.onCreateTextNode&&typeof s.options.onCreateTextNode=="function"&&(q=s.options.onCreateTextNode($,st)),q&&(Y?Y.appendChild(q):s.state.elements.wrapper.appendChild(q)),s.state.visibleNodes=[].concat(N(s.state.visibleNodes),[{type:"TEXT_NODE",character:$,node:q}]);break;case c:F.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case p:var ft=D.eventArgs.ms;s.state.pauseUntil=Date.now()+parseInt(ft);break;case d:var ut=D.eventArgs,dt=ut.cb,vt=ut.thisArg;dt.call(vt,{elements:s.state.elements});break;case m:var ct=D.eventArgs,nt=ct.node,rt=ct.parentNode;rt?rt.appendChild(nt):s.state.elements.wrapper.appendChild(nt),s.state.visibleNodes=[].concat(N(s.state.visibleNodes),[{type:S,node:nt,parentNode:rt||s.state.elements.wrapper}]);break;case l:var ht=s.state.visibleNodes,ot=U.speed,tt=[];ot&&tt.push({eventName:v,eventArgs:{speed:ot,temp:!0}});for(var lt=0,mt=ht.length;lt<mt;lt++)tt.push({eventName:f,eventArgs:{removingCharacterNode:!1}});ot&&tt.push({eventName:v,eventArgs:{speed:s.options.deleteSpeed,temp:!0}}),F.unshift.apply(F,tt);break;case f:var yt=D.eventArgs.removingCharacterNode;if(s.state.visibleNodes.length){var at=s.state.visibleNodes.pop(),gt=at.type,et=at.node,bt=at.character;s.options.onRemoveNode&&typeof s.options.onRemoveNode=="function"&&s.options.onRemoveNode({node:et,character:bt}),et&&et.parentNode.removeChild(et),gt===S&&yt&&F.unshift({eventName:f,eventArgs:{}})}break;case v:s.options.deleteSpeed=D.eventArgs.speed;break;case b:s.options.delay=D.eventArgs.delay;break;case x:s.options.cursor=D.eventArgs.cursor,s.state.elements.cursor.innerHTML=D.eventArgs.cursor}s.options.loop&&(D.eventName===f||D.eventArgs&&D.eventArgs.temp||(s.state.calledEvents=[].concat(N(s.state.calledEvents),[D]))),s.state.eventQueue=F,s.state.lastFrameTime=g}}}),j)if(typeof j=="string"){var it=document.querySelector(j);if(!it)throw new Error("Could not find container element");this.state.elements.container=it}else this.state.elements.container=j;z&&(this.options=_(_({},this.options),z)),this.state.initialOptions=_({},this.options),this.init()}var h,T;return h=w,(T=[{key:"init",value:function(){var j,z;this.setupWrapperElement(),this.addEventToQueue(x,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(z=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(z),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&k(h.prototype,T),Object.defineProperty(h,"prototype",{writable:!1}),w}()},8552:(e,o,t)=>{var n=t(852)(t(5639),"DataView");e.exports=n},1989:(e,o,t)=>{var n=t(1789),i=t(401),a=t(7667),r=t(1327),u=t(1866);function c(l){var f=-1,p=l==null?0:l.length;for(this.clear();++f<p;){var d=l[f];this.set(d[0],d[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var n=t(7040),i=t(4125),a=t(2117),r=t(7518),u=t(4705);function c(l){var f=-1,p=l==null?0:l.length;for(this.clear();++f<p;){var d=l[f];this.set(d[0],d[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var n=t(852)(t(5639),"Map");e.exports=n},3369:(e,o,t)=>{var n=t(4785),i=t(1285),a=t(6e3),r=t(9916),u=t(5265);function c(l){var f=-1,p=l==null?0:l.length;for(this.clear();++f<p;){var d=l[f];this.set(d[0],d[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var n=t(852)(t(5639),"Promise");e.exports=n},8525:(e,o,t)=>{var n=t(852)(t(5639),"Set");e.exports=n},8668:(e,o,t)=>{var n=t(3369),i=t(619),a=t(2385);function r(u){var c=-1,l=u==null?0:u.length;for(this.__data__=new n;++c<l;)this.add(u[c])}r.prototype.add=r.prototype.push=i,r.prototype.has=a,e.exports=r},6384:(e,o,t)=>{var n=t(8407),i=t(7465),a=t(3779),r=t(7599),u=t(4758),c=t(4309);function l(f){var p=this.__data__=new n(f);this.size=p.size}l.prototype.clear=i,l.prototype.delete=a,l.prototype.get=r,l.prototype.has=u,l.prototype.set=c,e.exports=l},2705:(e,o,t)=>{var n=t(5639).Symbol;e.exports=n},1149:(e,o,t)=>{var n=t(5639).Uint8Array;e.exports=n},577:(e,o,t)=>{var n=t(852)(t(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(o,t){for(var n=-1,i=o==null?0:o.length,a=0,r=[];++n<i;){var u=o[n];t(u,n,o)&&(r[a++]=u)}return r}},4636:(e,o,t)=>{var n=t(2545),i=t(5694),a=t(1469),r=t(4144),u=t(5776),c=t(6719),l=Object.prototype.hasOwnProperty;e.exports=function(f,p){var d=a(f),m=!d&&i(f),v=!d&&!m&&r(f),b=!d&&!m&&!v&&c(f),x=d||m||v||b,E=x?n(f.length,String):[],S=E.length;for(var O in f)!p&&!l.call(f,O)||x&&(O=="length"||v&&(O=="offset"||O=="parent")||b&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||u(O,S))||E.push(O);return E}},2488:e=>{e.exports=function(o,t){for(var n=-1,i=t.length,a=o.length;++n<i;)o[a+n]=t[n];return o}},2908:e=>{e.exports=function(o,t){for(var n=-1,i=o==null?0:o.length;++n<i;)if(t(o[n],n,o))return!0;return!1}},8470:(e,o,t)=>{var n=t(7813);e.exports=function(i,a){for(var r=i.length;r--;)if(n(i[r][0],a))return r;return-1}},8866:(e,o,t)=>{var n=t(2488),i=t(1469);e.exports=function(a,r,u){var c=r(a);return i(a)?c:n(c,u(a))}},4239:(e,o,t)=>{var n=t(2705),i=t(9607),a=t(2333),r=n?n.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":r&&r in Object(u)?i(u):a(u)}},9454:(e,o,t)=>{var n=t(4239),i=t(7005);e.exports=function(a){return i(a)&&n(a)=="[object Arguments]"}},939:(e,o,t)=>{var n=t(2492),i=t(7005);e.exports=function a(r,u,c,l,f){return r===u||(r==null||u==null||!i(r)&&!i(u)?r!=r&&u!=u:n(r,u,c,l,a,f))}},2492:(e,o,t)=>{var n=t(6384),i=t(7114),a=t(8351),r=t(6096),u=t(4160),c=t(1469),l=t(4144),f=t(6719),p="[object Arguments]",d="[object Array]",m="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(b,x,E,S,O,y){var _=c(b),N=c(x),P=_?d:u(b),k=N?d:u(x),A=(P=P==p?m:P)==m,Q=(k=k==p?m:k)==m,H=P==k;if(H&&l(b)){if(!l(x))return!1;_=!0,A=!1}if(H&&!A)return y||(y=new n),_||f(b)?i(b,x,E,S,O,y):a(b,x,P,E,S,O,y);if(!(1&E)){var w=A&&v.call(b,"__wrapped__"),h=Q&&v.call(x,"__wrapped__");if(w||h){var T=w?b.value():b,j=h?x.value():x;return y||(y=new n),O(T,j,E,S,y)}}return!!H&&(y||(y=new n),r(b,x,E,S,O,y))}},8458:(e,o,t)=>{var n=t(3560),i=t(5346),a=t(3218),r=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,f=c.toString,p=l.hasOwnProperty,d=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(m){return!(!a(m)||i(m))&&(n(m)?d:u).test(r(m))}},8749:(e,o,t)=>{var n=t(4239),i=t(1780),a=t(7005),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&i(u.length)&&!!r[n(u)]}},280:(e,o,t)=>{var n=t(5726),i=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(r){if(!n(r))return i(r);var u=[];for(var c in Object(r))a.call(r,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var n=-1,i=Array(o);++n<o;)i[n]=t(n);return i}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var n=t(5639)["__core-js_shared__"];e.exports=n},7114:(e,o,t)=>{var n=t(8668),i=t(2908),a=t(4757);e.exports=function(r,u,c,l,f,p){var d=1&c,m=r.length,v=u.length;if(m!=v&&!(d&&v>m))return!1;var b=p.get(r),x=p.get(u);if(b&&x)return b==u&&x==r;var E=-1,S=!0,O=2&c?new n:void 0;for(p.set(r,u),p.set(u,r);++E<m;){var y=r[E],_=u[E];if(l)var N=d?l(_,y,E,u,r,p):l(y,_,E,r,u,p);if(N!==void 0){if(N)continue;S=!1;break}if(O){if(!i(u,function(P,k){if(!a(O,k)&&(y===P||f(y,P,c,l,p)))return O.push(k)})){S=!1;break}}else if(y!==_&&!f(y,_,c,l,p)){S=!1;break}}return p.delete(r),p.delete(u),S}},8351:(e,o,t)=>{var n=t(2705),i=t(1149),a=t(7813),r=t(7114),u=t(8776),c=t(1814),l=n?n.prototype:void 0,f=l?l.valueOf:void 0;e.exports=function(p,d,m,v,b,x,E){switch(m){case"[object DataView]":if(p.byteLength!=d.byteLength||p.byteOffset!=d.byteOffset)return!1;p=p.buffer,d=d.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=d.byteLength||!x(new i(p),new i(d)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+p,+d);case"[object Error]":return p.name==d.name&&p.message==d.message;case"[object RegExp]":case"[object String]":return p==d+"";case"[object Map]":var S=u;case"[object Set]":var O=1&v;if(S||(S=c),p.size!=d.size&&!O)return!1;var y=E.get(p);if(y)return y==d;v|=2,E.set(p,d);var _=r(S(p),S(d),v,b,x,E);return E.delete(p),_;case"[object Symbol]":if(f)return f.call(p)==f.call(d)}return!1}},6096:(e,o,t)=>{var n=t(8234),i=Object.prototype.hasOwnProperty;e.exports=function(a,r,u,c,l,f){var p=1&u,d=n(a),m=d.length;if(m!=n(r).length&&!p)return!1;for(var v=m;v--;){var b=d[v];if(!(p?b in r:i.call(r,b)))return!1}var x=f.get(a),E=f.get(r);if(x&&E)return x==r&&E==a;var S=!0;f.set(a,r),f.set(r,a);for(var O=p;++v<m;){var y=a[b=d[v]],_=r[b];if(c)var N=p?c(_,y,b,r,a,f):c(y,_,b,a,r,f);if(!(N===void 0?y===_||l(y,_,u,c,f):N)){S=!1;break}O||(O=b=="constructor")}if(S&&!O){var P=a.constructor,k=r.constructor;P==k||!("constructor"in a)||!("constructor"in r)||typeof P=="function"&&P instanceof P&&typeof k=="function"&&k instanceof k||(S=!1)}return f.delete(a),f.delete(r),S}},1957:(e,o,t)=>{var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=n},8234:(e,o,t)=>{var n=t(8866),i=t(9551),a=t(3674);e.exports=function(r){return n(r,a,i)}},5050:(e,o,t)=>{var n=t(7019);e.exports=function(i,a){var r=i.__data__;return n(a)?r[typeof a=="string"?"string":"hash"]:r.map}},852:(e,o,t)=>{var n=t(8458),i=t(7801);e.exports=function(a,r){var u=i(a,r);return n(u)?u:void 0}},9607:(e,o,t)=>{var n=t(2705),i=Object.prototype,a=i.hasOwnProperty,r=i.toString,u=n?n.toStringTag:void 0;e.exports=function(c){var l=a.call(c,u),f=c[u];try{c[u]=void 0;var p=!0}catch{}var d=r.call(c);return p&&(l?c[u]=f:delete c[u]),d}},9551:(e,o,t)=>{var n=t(4963),i=t(479),a=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,u=r?function(c){return c==null?[]:(c=Object(c),n(r(c),function(l){return a.call(c,l)}))}:i;e.exports=u},4160:(e,o,t)=>{var n=t(8552),i=t(7071),a=t(3818),r=t(8525),u=t(577),c=t(4239),l=t(346),f="[object Map]",p="[object Promise]",d="[object Set]",m="[object WeakMap]",v="[object DataView]",b=l(n),x=l(i),E=l(a),S=l(r),O=l(u),y=c;(n&&y(new n(new ArrayBuffer(1)))!=v||i&&y(new i)!=f||a&&y(a.resolve())!=p||r&&y(new r)!=d||u&&y(new u)!=m)&&(y=function(_){var N=c(_),P=N=="[object Object]"?_.constructor:void 0,k=P?l(P):"";if(k)switch(k){case b:return v;case x:return f;case E:return p;case S:return d;case O:return m}return N}),e.exports=y},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var n=t(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var n=t(4536),i=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;if(n){var u=r[a];return u==="__lodash_hash_undefined__"?void 0:u}return i.call(r,a)?r[a]:void 0}},1327:(e,o,t)=>{var n=t(4536),i=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;return n?r[a]!==void 0:i.call(r,a)}},1866:(e,o,t)=>{var n=t(4536);e.exports=function(i,a){var r=this.__data__;return this.size+=this.has(i)?0:1,r[i]=n&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,n){var i=typeof t;return!!(n=n??9007199254740991)&&(i=="number"||i!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<n}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var n,i=t(4429),a=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(r){return!!a&&a in r}},5726:e=>{var o=Object.prototype;e.exports=function(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var n=t(8470),i=Array.prototype.splice;e.exports=function(a){var r=this.__data__,u=n(r,a);return!(u<0||(u==r.length-1?r.pop():i.call(r,u,1),--this.size,0))}},2117:(e,o,t)=>{var n=t(8470);e.exports=function(i){var a=this.__data__,r=n(a,i);return r<0?void 0:a[r][1]}},7518:(e,o,t)=>{var n=t(8470);e.exports=function(i){return n(this.__data__,i)>-1}},4705:(e,o,t)=>{var n=t(8470);e.exports=function(i,a){var r=this.__data__,u=n(r,i);return u<0?(++this.size,r.push([i,a])):r[u][1]=a,this}},4785:(e,o,t)=>{var n=t(1989),i=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||i),string:new n}}},1285:(e,o,t)=>{var n=t(5050);e.exports=function(i){var a=n(this,i).delete(i);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var n=t(5050);e.exports=function(i){return n(this,i).get(i)}},9916:(e,o,t)=>{var n=t(5050);e.exports=function(i){return n(this,i).has(i)}},5265:(e,o,t)=>{var n=t(5050);e.exports=function(i,a){var r=n(this,i),u=r.size;return r.set(i,a),this.size+=r.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(i,a){n[++t]=[a,i]}),n}},4536:(e,o,t)=>{var n=t(852)(Object,"create");e.exports=n},6916:(e,o,t)=>{var n=t(5569)(Object.keys,Object);e.exports=n},1167:(e,o,t)=>{e=t.nmd(e);var n=t(1957),i=o&&!o.nodeType&&o,a=i&&e&&!e.nodeType&&e,r=a&&a.exports===i&&n.process,u=function(){try{return a&&a.require&&a.require("util").types||r&&r.binding&&r.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(n){return o(t(n))}}},5639:(e,o,t)=>{var n=t(1957),i=typeof self=="object"&&self&&self.Object===Object&&self,a=n||i||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(i){n[++t]=i}),n}},7465:(e,o,t)=>{var n=t(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,n=t.delete(o);return this.size=t.size,n}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var n=t(8407),i=t(7071),a=t(3369);e.exports=function(r,u){var c=this.__data__;if(c instanceof n){var l=c.__data__;if(!i||l.length<199)return l.push([r,u]),this.size=++c.size,this;c=this.__data__=new a(l)}return c.set(r,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var n=t(9454),i=t(7005),a=Object.prototype,r=a.hasOwnProperty,u=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(l){return i(l)&&r.call(l,"callee")&&!u.call(l,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var n=t(3560),i=t(1780);e.exports=function(a){return a!=null&&i(a.length)&&!n(a)}},4144:(e,o,t)=>{e=t.nmd(e);var n=t(5639),i=t(5062),a=o&&!o.nodeType&&o,r=a&&e&&!e.nodeType&&e,u=r&&r.exports===a?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||i;e.exports=c},8446:(e,o,t)=>{var n=t(939);e.exports=function(i,a){return n(i,a)}},3560:(e,o,t)=>{var n=t(4239),i=t(3218);e.exports=function(a){if(!i(a))return!1;var r=n(a);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var n=t(8749),i=t(1717),a=t(1167),r=a&&a.isTypedArray,u=r?i(r):n;e.exports=u},3674:(e,o,t)=>{var n=t(4636),i=t(280),a=t(8612);e.exports=function(r){return a(r)?n(r):i(r)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,n,i,a,r;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,i=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),r=1e9*process.uptime(),a=i-r):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var n=t(75),i=typeof window>"u"?t.g:window,a=["moz","webkit"],r="AnimationFrame",u=i["request"+r],c=i["cancel"+r]||i["cancelRequest"+r],l=0;!u&&l<a.length;l++)u=i[a[l]+"Request"+r],c=i[a[l]+"Cancel"+r]||i[a[l]+"CancelRequest"+r];if(!u||!c){var f=0,p=0,d=[];u=function(m){if(d.length===0){var v=n(),b=Math.max(0,16.666666666666668-(v-f));f=b+v,setTimeout(function(){var x=d.slice(0);d.length=0;for(var E=0;E<x.length;E++)if(!x[E].cancelled)try{x[E].callback(f)}catch(S){setTimeout(function(){throw S},0)}},Math.round(b))}return d.push({handle:++p,callback:m,cancelled:!1}),p},c=function(m){for(var v=0;v<d.length;v++)d[v].handle===m&&(d[v].cancelled=!0)}}e.exports=function(m){return u.call(i,m)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(m){m||(m=i),m.requestAnimationFrame=u,m.cancelAnimationFrame=c}},8156:e=>{e.exports=X}},Z={};function M(e){var o=Z[e];if(o!==void 0)return o.exports;var t=Z[e]={id:e,loaded:!1,exports:{}};return W[e].call(t.exports,t,t.exports,M),t.loaded=!0,t.exports}M.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return M.d(o,{a:o}),o},M.d=(e,o)=>{for(var t in o)M.o(o,t)&&!M.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},M.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),M.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),M.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var K={};return(()=>{M.d(K,{default:()=>d});var e=M(8156),o=M.n(e),t=M(7403),n=M(8446),i=M.n(n);function a(m){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},a(m)}function r(m,v){for(var b=0;b<v.length;b++){var x=v[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(m,f(x.key),x)}}function u(m,v){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,x){return b.__proto__=x,b},u(m,v)}function c(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function l(m){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},l(m)}function f(m){var v=function(b,x){if(a(b)!=="object"||b===null)return b;var E=b[Symbol.toPrimitive];if(E!==void 0){var S=E.call(b,"string");if(a(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(m);return a(v)==="symbol"?v:String(v)}var p=function(m){(function(y,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(_&&_.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),_&&u(y,_)})(O,m);var v,b,x,E,S=(x=O,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,_=l(x);if(E){var N=l(this).constructor;y=Reflect.construct(_,arguments,N)}else y=_.apply(this,arguments);return function(P,k){if(k&&(a(k)==="object"||typeof k=="function"))return k;if(k!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(P)}(this,y)});function O(){var y,_,N,P;(function(H,w){if(!(H instanceof w))throw new TypeError("Cannot call a class as a function")})(this,O);for(var k=arguments.length,A=new Array(k),Q=0;Q<k;Q++)A[Q]=arguments[Q];return _=c(y=S.call.apply(S,[this].concat(A))),P={instance:null},(N=f(N="state"))in _?Object.defineProperty(_,N,{value:P,enumerable:!0,configurable:!0,writable:!0}):_[N]=P,y}return v=O,(b=[{key:"componentDidMount",value:function(){var y=this,_=new t.default(this.typewriter,this.props.options);this.setState({instance:_},function(){var N=y.props.onInit;N&&N(_)})}},{key:"componentDidUpdate",value:function(y){i()(this.props.options,y.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var y=this,_=this.props.component;return o().createElement(_,{ref:function(N){return y.typewriter=N},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(v.prototype,b),Object.defineProperty(v,"prototype",{writable:!1}),O}(e.Component);p.defaultProps={component:"div"};const d=p})(),K.default})())})(pt);var Pt=pt.exports;const kt=wt(Pt),Qt=()=>{const G=jt(At),{t:J,i18n:X}=Nt(),W=X.language,{content:{surname:Z,firstname:M,introduce:K,role:e,githubLink:o,linkedinLink:t,facebookLink:n,cvUrl:i},image:a}=G;return C.jsx("section",{className:"min-h-[85vh] lg:min-h-[78] flex items-center",id:"home",children:C.jsx("div",{className:"container mx-auto",children:C.jsxs("div",{className:"flex flex-col justify-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12",children:[C.jsxs("div",{className:"flex-1 text-center font-secondary lg:text-left",children:[C.jsxs(V.h1,{variants:B("up",.3),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"text-[55px] font-bold leading-[0.8] lg:text-[110px]",children:[Z," ",C.jsx("span",{children:M})]}),C.jsxs(V.div,{variants:B("up",.3),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]",children:[C.jsxs("span",{className:"text-white text-2xl",children:[J("aboutMeDescription")," "]}),C.jsx("div",{className:"inline-block",children:C.jsx(kt,{style:{display:"inline-block"},options:{wrapperClassName:"text-2xl text-gradient inline-block",strings:e,autoStart:!0,loop:!0,cursorClassName:"lg:text-[30px]"}})})]}),C.jsx(V.p,{variants:B("up",.5),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"mb-8 max-w-lg mx-auto lg:mx-0",children:K[W]}),C.jsxs(V.div,{variants:B("up",.6),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0",children:[C.jsx(St,{smooth:"true",spy:"true",to:"contact",children:C.jsx("button",{className:"btn btn-lg",children:J("contact")})}),C.jsx("a",{href:i,className:"text-gradient btn-link",download:!0,children:J("downloadCV")})]}),C.jsxs(V.div,{variants:B("up",.7),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0",children:[C.jsx("a",{href:t,target:"_blank",children:C.jsx(Et,{})}),C.jsx("a",{href:o,target:"_blank",children:C.jsx(Ot,{})}),C.jsx("a",{href:n,target:"_blank",children:C.jsx(Tt,{})})]})]}),C.jsx(V.div,{className:"hidden lg:flex flex-1 lg:max-w-[1000px]",variants:B("down",.6),initial:"hidden",whileInView:"show",children:C.jsx(Ct,{image:a})})]})})})};export{Qt as default};
