webpackJsonp([0],[function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,l,a=B;for(l=arguments.length;l-- >2;)j.push(arguments[l]);for(t&&null!=t.children&&(j.length||j.push(t.children),delete t.children);j.length;)if((o=j.pop())&&void 0!==o.pop)for(l=o.length;l--;)j.push(o[l]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?a[a.length-1]+=o:a===B?a=[o]:a.push(o),n=i;var u=new r;return u.nodeName=e,u.children=a,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==O.vnode&&O.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==V.push(e)&&(O.debounceRendering||W)(u)}function u(){var e,t=V;for(V=[];e=t.pop();)e._dirty&&U(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===D.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,m,l):e.removeEventListener(t,m,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)_(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function _(e,t,n){try{e[t]=n}catch(e){}}function m(e){return this._listeners[e.type](O.event&&O.event(e)||e)}function h(){for(var e;e=A.pop();)O.afterMount&&O.afterMount(e),e.componentDidMount&&e.componentDidMount()}function y(e,t,n,r,o,i){I++||(H=null!=o&&void 0!==o.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var l=b(e,t,n,r,i);return o&&l.parentNode!==o&&o.appendChild(l),--I||(R=!1,i||h()),l}function b(e,t,n,r,o){var i=e,l=H;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),g(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return M(e,t,n,r);if(H="svg"===a||"foreignObject"!==a&&H,a=String(a),(!e||!s(e,a))&&(i=f(a,H),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),g(e,!0)}var u=i.firstChild,c=i.__preactattr_,p=t.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,v=d.length;v--;)c[d[v].name]=d[v].value}return!R&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&C(i,p,n,r,R||null!=c.dangerouslySetInnerHTML),w(i,t.attributes,c),H=l,i}function C(e,t,n,r,o){var i,l,a,u,s,p=e.childNodes,f=[],v={},_=0,m=0,h=p.length,y=0,C=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var w=p[x],k=w.__preactattr_,N=C&&k?w._component?w._component.__key:k.key:null;null!=N?(_++,v[N]=w):(k||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(f[y++]=w)}if(0!==C)for(var x=0;x<C;x++){u=t[x],s=null;var N=u.key;if(null!=N)_&&void 0!==v[N]&&(s=v[N],v[N]=void 0,_--);else if(!s&&m<y)for(i=m;i<y;i++)if(void 0!==f[i]&&c(l=f[i],u,o)){s=l,f[i]=void 0,i===y-1&&y--,i===m&&m++;break}s=b(s,u,n,r),a=p[x],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?d(a):e.insertBefore(s,a))}if(_)for(var x in v)void 0!==v[x]&&g(v[x],!1);for(;m<=y;)void 0!==(s=f[y--])&&g(s,!1)}function g(e,t){var n=e._component;n?T(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;g(e,!0),e=t}}function w(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,H);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],H)}function k(e){var t=e.constructor.name;(z[t]||(z[t]=[])).push(e)}function N(e,t,n){var r,o=z[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),E.call(r,t,n)):(r=new E(t,n),r.constructor=e,r.render=S),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function S(e,t,n){return this.constructor(e,n)}function P(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===O.syncComponentUpdates&&e.base?a(e):U(e,1,o)),e.__ref&&e.__ref(e))}function U(e,t,n,r){if(!e._disable){var o,l,a,u=e.props,c=e.state,s=e.context,f=e.prevProps||u,d=e.prevState||c,v=e.prevContext||s,_=e.base,m=e.nextBase,b=_||m,C=e._component,x=!1;if(_&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,s)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,s),e.props=u,e.state=c,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){o=e.render(u,c,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()));var w,k,S=o&&o.nodeName;if("function"==typeof S){var M=p(o);l=C,l&&l.constructor===S&&M.key==l.__key?P(l,M,1,s,!1):(w=l,e._component=l=N(S,M,s),l.nextBase=l.nextBase||m,l._parentComponent=e,P(l,M,0,s,!1),U(l,1,n,!0)),k=l.base}else a=b,w=C,w&&(a=e._component=null),(b||1===t)&&(a&&(a._component=null),k=y(a,o,s,n||!_,b&&b.parentNode,!0));if(b&&k!==b&&l!==C){var E=b.parentNode;E&&k!==E&&(E.replaceChild(k,b),w||(b._component=null,g(b,!1)))}if(w&&T(w),e.base=k,k&&!r){for(var L=e,j=e;j=j._parentComponent;)(L=j).base=k;k._component=L,k._componentConstructor=L.constructor}}if(!_||n?A.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),O.afterUpdate&&O.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);I||r||h()}}function M(e,t,n,r){for(var o=e&&e._component,i=o,l=e,a=o&&e._componentConstructor===t.nodeName,u=a,c=p(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(P(o,c,3,n,r),e=o.base):(i&&!a&&(T(i),e=l=null),o=N(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,l=null),P(o,c,1,n,r),e=o.base,l&&e!==l&&(l._component=null,g(l,!1))),e}function T(e){O.beforeUnmount&&O.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?T(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),k(e),x(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function L(e,t,n){return y(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return o}),n.d(t,"createElement",function(){return o}),n.d(t,"cloneElement",function(){return l}),n.d(t,"Component",function(){return E}),n.d(t,"render",function(){return L}),n.d(t,"rerender",function(){return u}),n.d(t,"options",function(){return O});var O={},j=[],B=[],W="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,D=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[],A=[],I=0,H=!1,R=!1,z={};i(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),U(this,2)},render:function(){}});var $={h:o,createElement:o,cloneElement:l,Component:E,render:L,rerender:u,options:O};t.default=$},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);r.render(r.h(o.Clock,null),document.getElementById("preact-clock"))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={time:Date.now()},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.setState({time:Date.now()})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(e,t){var n=t.time;return n=new Date(n).toLocaleTimeString(),a.h("span",null,n)}}]),t}(a.Component);t.Clock=u}],[1]);