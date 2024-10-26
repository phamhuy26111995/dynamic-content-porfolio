import{c as q,r as j,a3 as pt}from"./index-B7A4dO-E.js";var m={},pe={},B={},W={},Ue="Expected a function",Se=NaN,vt="[object Symbol]",ht=/^\s+|\s+$/g,mt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,_t=parseInt,bt=typeof q=="object"&&q&&q.Object===Object&&q,Ot=typeof self=="object"&&self&&self.Object===Object&&self,Et=bt||Ot||Function("return this")(),wt=Object.prototype,St=wt.toString,Tt=Math.max,Pt=Math.min,ie=function(){return Et.Date.now()};function kt(t,e,n){var r,a,u,i,o,l,s=0,f=!1,c=!1,y=!0;if(typeof t!="function")throw new TypeError(Ue);e=Te(e)||0,Z(n)&&(f=!!n.leading,c="maxWait"in n,u=c?Tt(Te(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y);function _(p){var b=r,M=a;return r=a=void 0,s=p,i=t.apply(M,b),i}function T(p){return s=p,o=setTimeout(g,e),f?_(p):i}function P(p){var b=p-l,M=p-s,D=e-b;return c?Pt(D,u-M):D}function w(p){var b=p-l,M=p-s;return l===void 0||b>=e||b<0||c&&M>=u}function g(){var p=ie();if(w(p))return I(p);o=setTimeout(g,P(p))}function I(p){return o=void 0,y&&r?_(p):(r=a=void 0,i)}function C(){o!==void 0&&clearTimeout(o),s=0,r=l=a=o=void 0}function S(){return o===void 0?i:I(ie())}function k(){var p=ie(),b=w(p);if(r=arguments,a=this,l=p,b){if(o===void 0)return T(l);if(c)return o=setTimeout(g,e),_(l)}return o===void 0&&(o=setTimeout(g,e)),i}return k.cancel=C,k.flush=S,k}function Ht(t,e,n){var r=!0,a=!0;if(typeof t!="function")throw new TypeError(Ue);return Z(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),kt(t,e,{leading:r,maxWait:e,trailing:a})}function Z(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function $t(t){return!!t&&typeof t=="object"}function Mt(t){return typeof t=="symbol"||$t(t)&&St.call(t)==vt}function Te(t){if(typeof t=="number")return t;if(Mt(t))return Se;if(Z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ht,"");var n=yt.test(t);return n||gt.test(t)?_t(t.slice(2),n?2:8):mt.test(t)?Se:+t}var Lt=Ht,A={};Object.defineProperty(A,"__esModule",{value:!0});A.addPassiveEventListener=function(e,n,r){var a=r.name;a||(a=n,console.warn("Listener must be a named function.")),K.has(n)||K.set(n,new Set);var u=K.get(n);if(!u.has(a)){var i=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();e.addEventListener(n,r,i?{passive:!0}:!1),u.add(a)}};A.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),K.get(n).delete(r.name||n)};var K=new Map;Object.defineProperty(W,"__esModule",{value:!0});var It=Lt,Ct=Rt(It),jt=A;function Rt(t){return t&&t.__esModule?t:{default:t}}var Dt=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Ct.default)(e,n)},v={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=Dt(function(a){v.scrollHandler(e)},n);v.scrollSpyContainers.push(e),(0,jt.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return v.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=v.scrollSpyContainers[v.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(v.currentPositionX(e),v.currentPositionY(e))})},addStateHandler:function(e){v.spySetState.push(e)},addSpyHandler:function(e,n){var r=v.scrollSpyContainers[v.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(v.currentPositionX(n),v.currentPositionY(n))},updateStates:function(){v.spySetState.forEach(function(e){return e()})},unmount:function(e,n){v.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),v.spySetState&&v.spySetState.length&&v.spySetState.indexOf(e)>-1&&v.spySetState.splice(v.spySetState.indexOf(e),1),document.removeEventListener("scroll",v.scrollHandler)},update:function(){return v.scrollSpyContainers.forEach(function(e){return v.scrollHandler(e)})}};W.default=v;var R={},z={};Object.defineProperty(z,"__esModule",{value:!0});var Bt=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,a=r?"#"+r:"",u=window&&window.location,i=a?u.pathname+u.search+a:u.pathname+u.search;n?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},Wt=function(){return window.location.hash.replace(/^#/,"")},At=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},zt=function(e){return getComputedStyle(e).position!=="static"},le=function(e,n){for(var r=e.offsetTop,a=e.offsetParent;a&&!n(a);)r+=a.offsetTop,a=a.offsetParent;return{offsetTop:r,offsetParent:a}},Nt=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(zt(e)){if(n.offsetParent!==e){var a=function(f){return f===e||f===document},u=le(n,a),i=u.offsetTop,o=u.offsetParent;if(o!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(f){return f===document};return le(n,l).offsetTop-le(e,l).offsetTop};z.default={updateHash:Bt,getHash:Wt,filterElementInContainer:At,scrollOffset:Nt};var x={},ve={};Object.defineProperty(ve,"__esModule",{value:!0});ve.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var he={};Object.defineProperty(he,"__esModule",{value:!0});var Ft=A,Qt=["mousedown","mousewheel","touchmove","keydown"];he.default={subscribe:function(e){return typeof document<"u"&&Qt.forEach(function(n){return(0,Ft.addPassiveEventListener)(document,n,e)})}};var N={};Object.defineProperty(N,"__esModule",{value:!0});var ce={registered:{},scrollEvent:{register:function(e,n){ce.registered[e]=n},remove:function(e){ce.registered[e]=null}}};N.default=ce;Object.defineProperty(x,"__esModule",{value:!0});var Ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qt=z;ee(qt);var Xt=ve,Pe=ee(Xt),Yt=he,Gt=ee(Yt),Vt=N,O=ee(Vt);function ee(t){return t&&t.__esModule?t:{default:t}}var qe=function(e){return Pe.default[e.smooth]||Pe.default.defaultEasing},Jt=function(e){return typeof e=="function"?e:function(){return e}},Kt=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},de=function(){return Kt()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Xe=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Ye=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft},Ge=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop},Zt=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,a=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)},xt=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,a=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)},en=function t(e,n,r){var a=n.data;if(!n.ignoreCancelEvents&&a.cancel){O.default.registered.end&&O.default.registered.end(a.to,a.target,a.currentPositionY);return}if(a.delta=Math.round(a.targetPosition-a.startPosition),a.start===null&&(a.start=r),a.progress=r-a.start,a.percent=a.progress>=a.duration?1:e(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var u=t.bind(null,e,n);de.call(window,u);return}O.default.registered.end&&O.default.registered.end(a.to,a.target,a.currentPosition)},me=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},F=function(e,n,r,a){n.data=n.data||Xe(),window.clearTimeout(n.data.delayTimeout);var u=function(){n.data.cancel=!0};if(Gt.default.subscribe(u),me(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Ye(n):Ge(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){O.default.registered.end&&O.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Jt(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=a;var i=qe(n),o=en.bind(null,i,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){O.default.registered.begin&&O.default.registered.begin(n.data.to,n.data.target),de.call(window,o)},n.delay);return}O.default.registered.begin&&O.default.registered.begin(n.data.to,n.data.target),de.call(window,o)},te=function(e){return e=Ut({},e),e.data=e.data||Xe(),e.absolute=!0,e},tn=function(e){F(0,te(e))},nn=function(e,n){F(e,te(n))},rn=function(e){e=te(e),me(e),F(e.horizontal?Zt(e):xt(e),e)},an=function(e,n){n=te(n),me(n);var r=n.horizontal?Ye(n):Ge(n);F(e+r,n)};x.default={animateTopScroll:F,getAnimationType:qe,scrollToTop:tn,scrollToBottom:rn,scrollTo:nn,scrollMore:an};Object.defineProperty(R,"__esModule",{value:!0});var on=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ln=z,un=ye(ln),sn=x,fn=ye(sn),cn=N,X=ye(cn);function ye(t){return t&&t.__esModule?t:{default:t}}var Y={},ke=void 0;R.default={unmount:function(){Y={}},register:function(e,n){Y[e]=n},unregister:function(e){delete Y[e]},get:function(e){return Y[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return ke=e},getActiveLink:function(){return ke},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=on({},n,{absolute:!1});var a=n.containerId,u=n.container,i=void 0;a?i=document.getElementById(a):u&&u.nodeType?i=u:i=document,n.absolute=!0;var o=n.horizontal,l=un.default.scrollOffset(i,r,o)+(n.offset||0);if(!n.smooth){X.default.registered.begin&&X.default.registered.begin(e,r),i===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):i.scrollTop=l,X.default.registered.end&&X.default.registered.end(e,r);return}fn.default.animateTopScroll(l,n,e,r)}};var Ve={exports:{}},dn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pn=dn,vn=pn;function Je(){}function Ke(){}Ke.resetWarningCache=Je;var hn=function(){function t(r,a,u,i,o,l){if(l!==vn){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ke,resetWarningCache:Je};return n.PropTypes=n,n};Ve.exports=hn();var ne=Ve.exports,re={};Object.defineProperty(re,"__esModule",{value:!0});var mn=z,ue=yn(mn);function yn(t){return t&&t.__esModule?t:{default:t}}var gn={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,a=r.get(e);if(a&&(n||e!==r.getActiveLink())){var u=this.containers[e]||document;r.scrollTo(e,{container:u})}},getHash:function(){return ue.default.getHash()},changeHash:function(e,n){this.isInitialized()&&ue.default.getHash()!==e&&ue.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};re.default=gn;Object.defineProperty(B,"__esModule",{value:!0});var G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_n=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),bn=j,He=Q(bn),On=W,V=Q(On),En=R,wn=Q(En),Sn=ne,d=Q(Sn),Tn=re,H=Q(Tn);function Q(t){return t&&t.__esModule?t:{default:t}}function Pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Hn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var $e={to:d.default.string.isRequired,containerId:d.default.string,container:d.default.object,activeClass:d.default.string,activeStyle:d.default.object,spy:d.default.bool,horizontal:d.default.bool,smooth:d.default.oneOfType([d.default.bool,d.default.string]),offset:d.default.number,delay:d.default.number,isDynamic:d.default.bool,onClick:d.default.func,duration:d.default.oneOfType([d.default.number,d.default.func]),absolute:d.default.bool,onSetActive:d.default.func,onSetInactive:d.default.func,ignoreCancelEvents:d.default.bool,hashSpy:d.default.bool,saveHashHistory:d.default.bool,spyThrottle:d.default.number};B.default=function(t,e){var n=e||wn.default,r=function(u){Hn(i,u);function i(o){Pn(this,i);var l=kn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.call(l),l.state={active:!1},l}return _n(i,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,s=this.props.container;return l&&!s?document.getElementById(l):s&&s.nodeType?s:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();V.default.isMounted(l)||V.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(H.default.isMounted()||H.default.mount(n),H.default.mapContainer(this.props.to,l)),V.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){V.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var s={};this.state&&this.state.active?s=G({},this.props.style,this.props.activeStyle):s=G({},this.props.style);var f=G({},this.props);for(var c in $e)f.hasOwnProperty(c)&&delete f[c];return f.className=l,f.style=s,f.onClick=this.handleClick,He.default.createElement(t,f)}}]),i}(He.default.PureComponent),a=function(){var i=this;this.scrollTo=function(o,l){n.scrollTo(o,G({},i.state,l))},this.handleClick=function(o){i.props.onClick&&i.props.onClick(o),o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault(),i.scrollTo(i.props.to,i.props)},this.spyHandler=function(o,l){var s=i.getScrollSpyContainer();if(!(H.default.isMounted()&&!H.default.isInitialized())){var f=i.props.horizontal,c=i.props.to,y=null,_=void 0,T=void 0;if(f){var P=0,w=0,g=0;if(s.getBoundingClientRect){var I=s.getBoundingClientRect();g=I.left}if(!y||i.props.isDynamic){if(y=n.get(c),!y)return;var C=y.getBoundingClientRect();P=C.left-g+o,w=P+C.width}var S=o-i.props.offset;_=S>=Math.floor(P)&&S<Math.floor(w),T=S<Math.floor(P)||S>=Math.floor(w)}else{var k=0,p=0,b=0;if(s.getBoundingClientRect){var M=s.getBoundingClientRect();b=M.top}if(!y||i.props.isDynamic){if(y=n.get(c),!y)return;var D=y.getBoundingClientRect();k=D.top-b+l,p=k+D.height}var U=l-i.props.offset;_=U>=Math.floor(k)&&U<Math.floor(p),T=U<Math.floor(k)||U>=Math.floor(p)}var Oe=n.getActiveLink();if(T){if(c===Oe&&n.setActiveLink(void 0),i.props.hashSpy&&H.default.getHash()===c){var Ee=i.props.saveHashHistory,ct=Ee===void 0?!1:Ee;H.default.changeHash("",ct)}i.props.spy&&i.state.active&&(i.setState({active:!1}),i.props.onSetInactive&&i.props.onSetInactive(c,y))}if(_&&(Oe!==c||i.state.active===!1)){n.setActiveLink(c);var we=i.props.saveHashHistory,dt=we===void 0?!1:we;i.props.hashSpy&&H.default.changeHash(c,dt),i.props.spy&&(i.setState({active:!0}),i.props.onSetActive&&i.props.onSetActive(c,y))}}}};return r.propTypes=$e,r.defaultProps={offset:0},r};Object.defineProperty(pe,"__esModule",{value:!0});var $n=j,Me=Ze($n),Mn=B,Ln=Ze(Mn);function Ze(t){return t&&t.__esModule?t:{default:t}}function In(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Le(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Cn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var jn=function(t){Cn(e,t);function e(){var n,r,a,u;In(this,e);for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];return u=(r=(a=Le(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),a),a.render=function(){return Me.default.createElement("a",a.props,a.props.children)},r),Le(a,u)}return e}(Me.default.Component);pe.default=(0,Ln.default)(jn);var ge={};Object.defineProperty(ge,"__esModule",{value:!0});var Rn=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Dn=j,Ie=xe(Dn),Bn=B,Wn=xe(Bn);function xe(t){return t&&t.__esModule?t:{default:t}}function An(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Nn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Fn=function(t){Nn(e,t);function e(){return An(this,e),zn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Rn(e,[{key:"render",value:function(){return Ie.default.createElement("button",this.props,this.props.children)}}]),e}(Ie.default.Component);ge.default=(0,Wn.default)(Fn);var _e={},ae={};Object.defineProperty(ae,"__esModule",{value:!0});var Qn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Un=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),qn=j,Ce=oe(qn),Xn=pt;oe(Xn);var Yn=R,je=oe(Yn),Gn=ne,Re=oe(Gn);function oe(t){return t&&t.__esModule?t:{default:t}}function Vn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Kn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}ae.default=function(t){var e=function(n){Kn(r,n);function r(a){Vn(this,r);var u=Jn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,a));return u.childBindings={domNode:null},u}return Un(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(u){this.props.name!==u.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;je.default.unregister(this.props.name)}},{key:"registerElems",value:function(u){je.default.register(u,this.childBindings.domNode)}},{key:"render",value:function(){return Ce.default.createElement(t,Qn({},this.props,{parentBindings:this.childBindings}))}}]),r}(Ce.default.Component);return e.propTypes={name:Re.default.string,id:Re.default.string},e};Object.defineProperty(_e,"__esModule",{value:!0});var De=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zn=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),xn=j,Be=be(xn),er=ae,tr=be(er),nr=ne,We=be(nr);function be(t){return t&&t.__esModule?t:{default:t}}function rr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ar(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function or(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var et=function(t){or(e,t);function e(){return rr(this,e),ar(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Zn(e,[{key:"render",value:function(){var r=this,a=De({},this.props);return delete a.name,a.parentBindings&&delete a.parentBindings,Be.default.createElement("div",De({},a,{ref:function(i){r.props.parentBindings.domNode=i}}),this.props.children)}}]),e}(Be.default.Component);et.propTypes={name:We.default.string,id:We.default.string};_e.default=(0,tr.default)(et);var se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function ze(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ne(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Fe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var J=j,L=W,fe=R,h=ne,$=re,Qe={to:h.string.isRequired,containerId:h.string,container:h.object,activeClass:h.string,spy:h.bool,smooth:h.oneOfType([h.bool,h.string]),offset:h.number,delay:h.number,isDynamic:h.bool,onClick:h.func,duration:h.oneOfType([h.number,h.func]),absolute:h.bool,onSetActive:h.func,onSetInactive:h.func,ignoreCancelEvents:h.bool,hashSpy:h.bool,spyThrottle:h.number},ir={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||fe,a=function(i){Fe(o,i);function o(l){ze(this,o);var s=Ne(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,l));return u.call(s),s.state={active:!1},s}return Ae(o,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,f=this.props.container;return s?document.getElementById(s):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();L.isMounted(s)||L.mount(s,this.props.spyThrottle),this.props.hashSpy&&($.isMounted()||$.mount(r),$.mapContainer(this.props.to,s)),this.props.spy&&L.addStateHandler(this.stateHandler),L.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){L.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var f=se({},this.props);for(var c in Qe)f.hasOwnProperty(c)&&delete f[c];return f.className=s,f.onClick=this.handleClick,J.createElement(e,f)}}]),o}(J.Component),u=function(){var o=this;this.scrollTo=function(l,s){r.scrollTo(l,se({},o.state,s))},this.handleClick=function(l){o.props.onClick&&o.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),o.scrollTo(o.props.to,o.props)},this.stateHandler=function(){r.getActiveLink()!==o.props.to&&(o.state!==null&&o.state.active&&o.props.onSetInactive&&o.props.onSetInactive(),o.setState({active:!1}))},this.spyHandler=function(l){var s=o.getScrollSpyContainer();if(!($.isMounted()&&!$.isInitialized())){var f=o.props.to,c=null,y=0,_=0,T=0;if(s.getBoundingClientRect){var P=s.getBoundingClientRect();T=P.top}if(!c||o.props.isDynamic){if(c=r.get(f),!c)return;var w=c.getBoundingClientRect();y=w.top-T+l,_=y+w.height}var g=l-o.props.offset,I=g>=Math.floor(y)&&g<Math.floor(_),C=g<Math.floor(y)||g>=Math.floor(_),S=r.getActiveLink();if(C)return f===S&&r.setActiveLink(void 0),o.props.hashSpy&&$.getHash()===f&&$.changeHash(),o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive()),L.updateStates();if(I&&S!==f)return r.setActiveLink(f),o.props.hashSpy&&$.changeHash(f),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(f)),L.updateStates()}}};return a.propTypes=Qe,a.defaultProps={offset:0},a},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Fe(a,r);function a(u){ze(this,a);var i=Ne(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,u));return i.childBindings={domNode:null},i}return Ae(a,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;fe.unregister(this.props.name)}},{key:"registerElems",value:function(i){fe.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return J.createElement(e,se({},this.props,{parentBindings:this.childBindings}))}}]),a}(J.Component);return n.propTypes={name:h.string,id:h.string},n}},lr=ir;Object.defineProperty(m,"__esModule",{value:!0});m.Helpers=m.ScrollElement=m.ScrollLink=m.animateScroll=m.scrollSpy=m.Events=m.scroller=m.Element=m.Button=gr=m.Link=void 0;var ur=pe,tt=E(ur),sr=ge,nt=E(sr),fr=_e,rt=E(fr),cr=R,at=E(cr),dr=N,ot=E(dr),pr=W,it=E(pr),vr=x,lt=E(vr),hr=B,ut=E(hr),mr=ae,st=E(mr),yr=lr,ft=E(yr);function E(t){return t&&t.__esModule?t:{default:t}}var gr=m.Link=tt.default;m.Button=nt.default;m.Element=rt.default;m.scroller=at.default;m.Events=ot.default;m.scrollSpy=it.default;m.animateScroll=lt.default;m.ScrollLink=ut.default;m.ScrollElement=st.default;m.Helpers=ft.default;m.default={Link:tt.default,Button:nt.default,Element:rt.default,scroller:at.default,Events:ot.default,scrollSpy:it.default,animateScroll:lt.default,ScrollLink:ut.default,ScrollElement:st.default,Helpers:ft.default};export{gr as L};
