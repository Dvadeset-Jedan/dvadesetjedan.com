(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4569)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,i=n(7273).Z,o=l(n(7294)),s=n(6273),a=n(2725),f=n(3462),u=n(1018),c=n(7190),d=n(1210),C=n(8684),h="undefined"!==typeof o.default.useTransition,p={};function x(e,t,n,r){if(e&&s.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(l?"%"+l:"")]=!0}}var j=o.default.forwardRef((function(e,t){var n,l=e.href,j=e.as,m=e.children,v=e.prefetch,H=e.passHref,g=e.replace,w=e.shallow,y=e.scroll,V=e.locale,M=e.onClick,_=e.onMouseEnter,b=e.onTouchStart,Z=e.legacyBehavior,L=void 0===Z?!0!==Boolean(!1):Z,O=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!L||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var N=!1!==v,E=r(h?o.default.useTransition():[],2)[1],P=o.default.useContext(f.RouterContext),k=o.default.useContext(u.AppRouterContext);k&&(P=k);var R,S=o.default.useMemo((function(){var e=r(s.resolveHref(P,l,!0),2),t=e[0],n=e[1];return{href:t,as:j?s.resolveHref(P,j):n||t}}),[P,l,j]),B=S.href,U=S.as,T=o.default.useRef(B),F=o.default.useRef(U);L&&(R=o.default.Children.only(n));var A=L?R&&"object"===typeof R&&R.ref:t,D=r(c.useIntersection({rootMargin:"200px"}),3),I=D[0],G=D[1],K=D[2],X=o.default.useCallback((function(e){F.current===U&&T.current===B||(K(),F.current=U,T.current=B),I(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[U,A,B,K,I]);o.default.useEffect((function(){var e=G&&N&&s.isLocalURL(B),t="undefined"!==typeof V?V:P&&P.locale,n=p[B+"%"+U+(t?"%"+t:"")];e&&!n&&x(P,B,U,{locale:t})}),[U,B,G,V,N,P]);var q={ref:X,onClick:function(e){L||"function"!==typeof M||M(e),L&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,l,i,o,a,f,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n)){e.preventDefault();var c=function(){"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:a,scroll:o}):t[l?"replace":"push"](n,{forceOptimisticNavigation:!u})};f?f(c):c()}}(e,P,B,U,g,w,y,V,k?E:void 0,N)},onMouseEnter:function(e){L||"function"!==typeof _||_(e),L&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),!N&&k||s.isLocalURL(B)&&x(P,B,U,{priority:!0})},onTouchStart:function(e){L||"function"!==typeof b||b(e),L&&R.props&&"function"===typeof R.props.onTouchStart&&R.props.onTouchStart(e),!N&&k||s.isLocalURL(B)&&x(P,B,U,{priority:!0})}};if(!L||H||"a"===R.type&&!("href"in R.props)){var z="undefined"!==typeof V?V:P&&P.locale,J=P&&P.isLocaleDomain&&d.getDomainLocale(U,z,P.locales,P.domainLocales);q.href=J||C.addBasePath(a.addLocale(U,z,P&&P.defaultLocale))}return L?o.default.cloneElement(R,q):o.default.createElement("a",Object.assign({},O,q),n)}));t.default=j,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!o,u=r(l.useState(!1),2),c=u[0],d=u[1],C=r(l.useState(null),2),h=C[0],p=C[1];l.useEffect((function(){if(o){if(f||c)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=s.get(r)))return t;var l=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:l},a.push(n),s.set(n,t),t}(n),l=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(l);var t=a.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));t>-1&&a.splice(t,1)}}}(h,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){var r=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[h,f,n,t,c]);var x=l.useCallback((function(){d(!1)}),[]);return[p,c,x]};var l=n(7294),i=n(9311),o="function"===typeof IntersectionObserver,s=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),l=r.default.createContext(null);t.AppRouterContext=l;var i=r.default.createContext(null);t.LayoutRouterContext=i;var o=r.default.createContext(null);t.GlobalLayoutRouterContext=o},4569:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return Z}});var i=n(5893),o=(n(906),n(1664)),s=n.n(o),a="https://discord.gg/HjmfXq5Z",f="https://www.youtube.com/channel/UCYXly5XM_SO07vLHh2yPlCw",u="https://open.spotify.com/show/0K4Ak2oNQdCU3Tsr3Tajkx?si=34af43f494d3487b",c="https://github.com/Dvadeset-Jedan",d="https://t.me/dvadesetjedan21";function C(){return(0,i.jsxs)("svg",{width:"66",height:"25",viewBox:"0 0 66 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M0 24.9569V0H1.26899V24.9569H0ZM2.53799 24.9569V0H3.80698V24.9569H2.53799ZM5.07597 24.9569V0H8.88295V24.9569H5.07597ZM13.9589 24.9569V0H15.2279V24.9569H13.9589ZM16.4969 24.9569V0H20.3039V24.9569H16.4969Z",fill:"url(#paint0_linear_156_539)"}),(0,i.jsx)("path",{d:"M21.563 24.9569V0H22.832V24.9569H21.563ZM27.9079 24.9569V0H29.1769V24.9569H27.9079ZM30.4459 24.9569V0H31.7149V24.9569H30.4459ZM36.7909 24.9569V0H38.0599V24.9569H36.7909ZM43.1358 24.9569V0H44.4048V24.9569H43.1358ZM45.6738 24.9569V0H46.9428V24.9569H45.6738ZM52.0188 24.9569V0H55.8258V24.9569H52.0188ZM57.0948 24.9569V0H58.3638V24.9569H57.0948ZM59.6327 24.9569V0H60.9017V24.9569H59.6327ZM62.1707 24.9569V0H65.9777V24.9569H62.1707Z",fill:"url(#paint1_linear_156_539)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_156_539",x1:"-1.22893e-07",y1:"12.4784",x2:"65.9777",y2:"12.4784",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#9068FE"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#FEB068"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_156_539",x1:"-1.22893e-07",y1:"12.4784",x2:"65.9777",y2:"12.4784",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#9068FE"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#FEB068"})]})]})]})}function h(){return(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#5865F2"}),(0,i.jsx)("path",{d:"M29.7032 10.8237C27.9186 9.97958 26.0048 9.35768 24.0039 9.00149C23.9674 8.99462 23.931 9.0118 23.9123 9.04616C23.6661 9.4974 23.3935 10.0861 23.2026 10.5488C21.0505 10.2167 18.9094 10.2167 16.8014 10.5488C16.6104 10.0758 16.3279 9.4974 16.0807 9.04616C16.0619 9.01295 16.0255 8.99577 15.9891 9.00149C13.9892 9.35654 12.0755 9.97844 10.2898 10.8237C10.2743 10.8306 10.261 10.842 10.2523 10.8569C6.62229 16.4471 5.62789 21.9 6.11571 27.2852C6.11792 27.3116 6.13226 27.3368 6.15213 27.3528C8.54708 29.1658 10.867 30.2664 13.1438 30.996C13.1803 31.0075 13.2189 30.9937 13.2421 30.9628C13.7806 30.2046 14.2607 29.4052 14.6724 28.5645C14.6967 28.5153 14.6735 28.4569 14.6238 28.4374C13.8623 28.1396 13.1372 27.7765 12.4397 27.3642C12.3845 27.331 12.3801 27.2497 12.4309 27.2107C12.5776 27.0974 12.7245 26.9794 12.8646 26.8603C12.89 26.8385 12.9253 26.8339 12.9551 26.8477C17.5375 29.0043 22.4985 29.0043 27.0268 26.8477C27.0566 26.8328 27.0919 26.8374 27.1184 26.8591C27.2586 26.9783 27.4054 27.0974 27.5533 27.2107C27.604 27.2497 27.6007 27.331 27.5455 27.3642C26.848 27.7845 26.1229 28.1396 25.3603 28.4362C25.3106 28.4557 25.2885 28.5153 25.3128 28.5645C25.7333 29.404 26.2134 30.2034 26.742 30.9616C26.7641 30.9937 26.8038 31.0075 26.8403 30.996C29.1282 30.2664 31.4481 29.1658 33.843 27.3528C33.864 27.3368 33.8772 27.3127 33.8794 27.2864C34.4633 21.0604 32.9016 15.6523 29.7396 10.858C29.7319 10.842 29.7186 10.8306 29.7032 10.8237ZM15.3567 24.0062C13.9771 24.0062 12.8403 22.7005 12.8403 21.0971C12.8403 19.4937 13.955 18.188 15.3567 18.188C16.7694 18.188 17.8951 19.5051 17.873 21.0971C17.873 22.7005 16.7583 24.0062 15.3567 24.0062ZM24.6605 24.0062C23.281 24.0062 22.1442 22.7005 22.1442 21.0971C22.1442 19.4937 23.2589 18.188 24.6605 18.188C26.0732 18.188 27.199 19.5051 27.1769 21.0971C27.1769 22.7005 26.0732 24.0062 24.6605 24.0062Z",fill:"white"})]})}function p(){return(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#252735"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.9961 7C16.7465 7.00169 13.6034 8.15263 11.129 10.247C8.65447 12.3414 7.00991 15.2427 6.48934 18.4321C5.96877 21.6215 6.60613 24.8911 8.28746 27.6561C9.9688 30.4211 12.5845 32.5013 15.6667 33.5248C16.3468 33.651 16.6029 33.2295 16.6029 32.8712C16.6029 32.5128 16.5893 31.4738 16.5848 30.3379C12.7767 31.1606 11.9721 28.731 11.9721 28.731C11.351 27.1533 10.4534 26.7386 10.4534 26.7386C9.21126 25.8957 10.5463 25.9115 10.5463 25.9115C11.9222 26.0084 12.6453 27.3156 12.6453 27.3156C13.8648 29.3958 15.8481 28.7941 16.6278 28.4425C16.7502 27.5613 17.1061 26.9618 17.4982 26.6214C14.4563 26.2789 11.2603 25.1114 11.2603 19.8961C11.2415 18.5436 11.7463 17.2356 12.6702 16.2428C12.5297 15.9002 12.0605 14.5164 12.8039 12.6367C12.8039 12.6367 13.9532 12.2716 16.5689 14.0318C18.8125 13.4217 21.1797 13.4217 23.4233 14.0318C26.0368 12.2716 27.1837 12.6367 27.1837 12.6367C27.9295 14.5119 27.4603 15.8957 27.3197 16.2428C28.2466 17.2358 28.7524 18.546 28.7319 19.9007C28.7319 25.1272 25.5291 26.2789 22.4826 26.6147C22.9722 27.0384 23.4097 27.8655 23.4097 29.1367C23.4097 30.9577 23.3939 32.4227 23.3939 32.8712C23.3939 33.234 23.6409 33.6577 24.3345 33.5248C27.4172 32.5012 30.0331 30.4206 31.7144 27.6551C33.3957 24.8896 34.0327 21.6196 33.5116 18.4299C32.9904 15.2402 31.345 12.3389 28.8697 10.2449C26.3944 8.15081 23.2506 7.00062 20.0006 7H19.9961Z",fill:"white"}),(0,i.jsx)("path",{d:"M11.4919 26.5425C11.4625 26.6101 11.3537 26.6304 11.2653 26.5831C11.1769 26.5358 11.1111 26.4479 11.1429 26.378C11.1746 26.3081 11.2811 26.2901 11.3695 26.3374C11.4579 26.3847 11.5259 26.4749 11.4919 26.5425Z",fill:"white"}),(0,i.jsx)("path",{d:"M12.0464 27.1577C11.9995 27.1812 11.9458 27.1878 11.8945 27.1763C11.8433 27.1648 11.7976 27.1359 11.7654 27.0946C11.677 26.9999 11.6588 26.8692 11.7268 26.8106C11.7948 26.752 11.9173 26.7791 12.0057 26.8737C12.0941 26.9684 12.1144 27.0991 12.0464 27.1577Z",fill:"white"}),(0,i.jsx)("path",{d:"M12.5863 27.9399C12.5024 27.9985 12.3596 27.9399 12.2803 27.8227C12.2584 27.8017 12.2409 27.7764 12.229 27.7486C12.2171 27.7207 12.2109 27.6907 12.2109 27.6604C12.2109 27.6301 12.2171 27.6001 12.229 27.5722C12.2409 27.5444 12.2584 27.5192 12.2803 27.4981C12.3642 27.4418 12.507 27.4981 12.5863 27.6131C12.6656 27.728 12.6679 27.8813 12.5863 27.9399Z",fill:"white"}),(0,i.jsx)("path",{d:"M13.319 28.697C13.2442 28.7804 13.0923 28.7579 12.9677 28.6452C12.843 28.5325 12.8135 28.3793 12.8883 28.2981C12.9631 28.217 13.115 28.2395 13.2442 28.35C13.3734 28.4604 13.3983 28.6159 13.319 28.697Z",fill:"white"}),(0,i.jsx)("path",{d:"M14.3455 29.1388C14.3115 29.2448 14.1574 29.2921 14.0032 29.247C13.8491 29.2019 13.7471 29.0757 13.7766 28.9676C13.806 28.8594 13.9624 28.8098 14.1188 28.8594C14.2752 28.909 14.375 29.0284 14.3455 29.1388Z",fill:"white"}),(0,i.jsx)("path",{d:"M15.464 29.2155C15.464 29.3259 15.3371 29.4206 15.1739 29.4228C15.0107 29.4251 14.877 29.3349 14.877 29.2245C14.877 29.114 15.0039 29.0194 15.1671 29.0171C15.3303 29.0149 15.464 29.1028 15.464 29.2155Z",fill:"white"}),(0,i.jsx)("path",{d:"M16.5067 29.0421C16.5271 29.1525 16.4138 29.2674 16.2506 29.2945C16.0874 29.3215 15.9446 29.2562 15.9242 29.148C15.9038 29.0398 16.0216 28.9226 16.1803 28.8933C16.339 28.864 16.4863 28.9316 16.5067 29.0421Z",fill:"white"})]})}function x(){return(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#1ED760"}),(0,i.jsx)("path",{d:"M20 7C12.8205 7 7 12.8199 7 20C7 27.1801 12.8205 33 20 33C27.1795 33 33 27.1801 33 20C33 12.8199 27.1795 7 20 7ZM26.3424 25.7403C26.1336 26.11 25.7496 26.318 25.3536 26.318C25.1685 26.318 24.9774 26.2717 24.8021 26.1742C23.1791 25.2642 21.4103 24.7068 19.5411 24.5175C17.6679 24.3298 15.8183 24.5199 14.0417 25.0871C13.4488 25.2764 12.8106 24.9489 12.6215 24.355C12.4305 23.7602 12.7594 23.1241 13.3542 22.9339C15.4264 22.2718 17.5871 22.0467 19.7695 22.2685C21.948 22.4903 24.0123 23.1403 25.9071 24.2024C26.4527 24.5061 26.6477 25.1951 26.3424 25.7403ZM27.8985 21.7916C27.6976 22.1783 27.3036 22.4001 26.8959 22.4001C26.7186 22.4001 26.5414 22.3595 26.3739 22.2718C24.3786 21.2326 22.2238 20.5891 19.9645 20.3599C17.6876 20.1268 15.4323 20.3299 13.2577 20.9571C12.657 21.1277 12.0306 20.7841 11.8593 20.1836C11.6859 19.584 12.0326 18.9576 12.6314 18.7845C15.0856 18.0768 17.6305 17.8501 20.193 18.1101C22.7379 18.3693 25.1685 19.0941 27.4199 20.2673C27.9714 20.5558 28.188 21.2382 27.8985 21.7916ZM28.4618 18.5066C28.2924 18.5066 28.1211 18.4684 27.9576 18.388C25.59 17.2074 23.0432 16.4721 20.3861 16.2024C17.725 15.9302 15.0777 16.1406 12.5152 16.8249C11.9124 16.9848 11.2939 16.6273 11.1324 16.0236C10.9709 15.4207 11.3294 14.8008 11.9341 14.6399C14.7606 13.8851 17.6836 13.6552 20.6165 13.9534C23.5455 14.2499 26.3542 15.0616 28.9661 16.3641C29.5255 16.6427 29.752 17.322 29.4742 17.8802C29.2773 18.2775 28.8774 18.5066 28.4618 18.5066Z",fill:"white"})]})}function j(){return(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"url(#paint0_linear_156_544)"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05368 19.7889C14.8841 17.2487 18.7719 15.574 20.7172 14.7649C26.2715 12.4547 27.4256 12.0534 28.1778 12.0402C28.3433 12.0373 28.7132 12.0783 28.9528 12.2727C29.1551 12.4369 29.2108 12.6587 29.2375 12.8143C29.2641 12.97 29.2973 13.3246 29.2709 13.6017C28.9699 16.7641 27.6676 24.4386 27.005 27.9806C26.7246 29.4794 26.1726 29.9819 25.6382 30.0311C24.4767 30.138 23.5948 29.2635 22.4699 28.5261C20.7096 27.3723 19.7152 26.654 18.0066 25.528C16.0319 24.2268 17.312 23.5116 18.4373 22.3428C18.7318 22.0369 23.8492 17.3823 23.9482 16.96C23.9606 16.9072 23.9721 16.7104 23.8551 16.6065C23.7382 16.5025 23.5656 16.5381 23.4411 16.5663C23.2645 16.6064 20.4525 18.465 15.0049 22.1423C14.2067 22.6904 13.4838 22.9574 12.836 22.9434C12.1219 22.928 10.7483 22.5397 9.72709 22.2077C8.47459 21.8006 7.47913 21.5853 7.56581 20.8939C7.61096 20.5337 8.10692 20.1654 9.05368 19.7889Z",fill:"white"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"paint0_linear_156_544",x1:"20",y1:"0",x2:"20",y2:"39.7033",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#2AABEE"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#229ED9"})]})})]})}function m(){return(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#FF0000"}),(0,i.jsx)("path",{d:"M33.6984 13.1304C33.3689 11.9065 32.4039 10.9415 31.1799 10.612C28.9439 10 19.9999 10 19.9999 10C19.9999 10 11.0558 10 8.81978 10.5884C7.61939 10.9179 6.63083 11.9065 6.30132 13.1304C5.71289 15.3664 5.71289 20.0032 5.71289 20.0032C5.71289 20.0032 5.71289 24.6636 6.30132 26.876C6.63083 28.1 7.59585 29.065 8.81978 29.3945C11.0793 30.0065 19.9999 30.0065 19.9999 30.0065C19.9999 30.0065 28.9439 30.0065 31.1799 29.418C32.4039 29.0885 33.3689 28.1235 33.6984 26.8996C34.2868 24.6636 34.2868 20.0268 34.2868 20.0268C34.2868 20.0268 34.3104 15.3664 33.6984 13.1304Z",fill:"white"}),(0,i.jsx)("path",{d:"M17.1523 24.287L24.59 20.0032L17.1523 15.7195V24.287Z",fill:"#FF0000"})]})}function v(){return(0,i.jsxs)("footer",{className:"flex flex-col justify-between pb-16 px-36 md:px-10 md:flex-row pt-11 bg-dark brightness-110",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("span",{className:"hidden lg:block",children:(0,i.jsx)(C,{})}),(0,i.jsxs)("ul",{className:"flex justify-between w-full ml-0 text-sm lg:justify-start lg:w-auto lg:ml-8 text-gray",children:[(0,i.jsx)("li",{children:"Copyright \xa9 2022"}),(0,i.jsx)("li",{className:"ml-4 lg:ml-6",children:"Some link"}),(0,i.jsx)("li",{className:"ml-4 lg:ml-6",children:"Terms of Service"}),(0,i.jsx)("li",{className:"ml-4 lg:ml-6",children:"Privacy Policy"})]})]}),(0,i.jsxs)("ul",{className:"flex items-center mt-10 justify-evenly lg:justify-start md:mt-0",children:[(0,i.jsx)("li",{className:"h-min",children:(0,i.jsx)(s(),{href:"https://youtube.com/",children:(0,i.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(h,{})})})}),(0,i.jsx)("li",{className:"block ml-3 lg:ml-6 h-min",children:(0,i.jsx)(s(),{href:"https://youtube.com/",children:(0,i.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(m,{})})})}),(0,i.jsx)("li",{className:"ml-3 lg:ml-6 h-min",children:(0,i.jsx)("a",{href:u,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(x,{})})}),(0,i.jsx)("li",{className:"ml-3 lg:ml-6 h-min",children:(0,i.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(p,{})})}),(0,i.jsx)("li",{className:"ml-3 lg:ml-6 h-min",children:(0,i.jsx)("a",{href:d,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(j,{})})})]})]})}var H=n(4184),g=n.n(H),w=n(1163),y={home:"/dvadesetjedan.com/",blog:"/dvadesetjedan.com/blog",community:"/dvadesetjedan.com/community",podcast:"/dvadesetjedan.com/podcast"};function V(){return(0,i.jsxs)("svg",{width:"91",height:"35",viewBox:"0 0 91 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M0 34.3704V0.0546875H1.74487V34.3704H0ZM3.48973 34.3704V0.0546875H5.2346V34.3704H3.48973ZM6.97946 34.3704V0.0546875H12.2141V34.3704H6.97946ZM19.1935 34.3704V0.0546875H20.9384V34.3704H19.1935ZM22.6833 34.3704V0.0546875H27.9179V34.3704H22.6833Z",fill:"url(#paint0_linear_72_27176)"}),(0,i.jsx)("path",{d:"M29.6491 34.3704V0.0546875H31.394V34.3704H29.6491ZM38.3734 34.3704V0.0546875H40.1183V34.3704H38.3734ZM41.8632 34.3704V0.0546875H43.608V34.3704H41.8632ZM50.5875 34.3704V0.0546875H52.3323V34.3704H50.5875ZM59.3118 34.3704V0.0546875H61.0567V34.3704H59.3118ZM62.8015 34.3704V0.0546875H64.5464V34.3704H62.8015ZM71.5259 34.3704V0.0546875H76.7605V34.3704H71.5259ZM78.5053 34.3704V0.0546875H80.2502V34.3704H78.5053ZM81.9951 34.3704V0.0546875H83.7399V34.3704H81.9951ZM85.4848 34.3704V0.0546875H90.7194V34.3704H85.4848Z",fill:"url(#paint1_linear_72_27176)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_72_27176",x1:"-1.68978e-07",y1:"17.2126",x2:"90.7194",y2:"17.2126",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#9068FE"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#FEB068"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_72_27176",x1:"-1.68978e-07",y1:"17.2126",x2:"90.7194",y2:"17.2126",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#9068FE"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#FEB068"})]})]})]})}function M(){return(0,i.jsxs)("svg",{width:"359",height:"35",viewBox:"0 0 359 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M0.0253906 34.3705H11.0574C14.3896 34.3705 17.2864 33.6801 19.748 32.2992C22.2096 30.9183 24.1158 28.967 25.4667 26.4454C26.8175 23.9238 27.493 20.9669 27.493 17.5748C27.493 14.1526 26.8175 11.1957 25.4667 8.70408C24.1158 6.18246 22.2096 4.24622 19.748 2.89536C17.2864 1.51448 14.3896 0.824035 11.0574 0.824035H0.0253906V34.3705ZM3.6277 30.9933V4.2012H11.0574C13.6091 4.2012 15.8305 4.75655 17.7217 5.86726C19.6129 6.94796 21.0839 8.49395 22.1345 10.5052C23.1852 12.4865 23.7105 14.843 23.7105 17.5748C23.7105 20.3065 23.1852 22.678 22.1345 24.6893C21.1139 26.7006 19.6579 28.2616 17.7667 29.3723C15.8755 30.453 13.6391 30.9933 11.0574 30.9933H3.6277Z",fill:"white"}),(0,i.jsx)("path",{d:"M41.3914 34.3705H45.1738L57.4667 0.824035H53.6842L43.2826 30.1378L32.8359 0.824035H29.0985L41.3914 34.3705Z",fill:"white"}),(0,i.jsx)("path",{d:"M55.7904 34.3705H59.5728L62.4997 26.1753H77.4943L80.3761 34.3705H84.1585L71.9107 0.824035H68.0382L55.7904 34.3705ZM63.6704 22.7981L69.9745 5.05675L76.2335 22.7981H63.6704Z",fill:"white"}),(0,i.jsx)("path",{d:"M88.6319 34.3705H99.6639C102.996 34.3705 105.893 33.6801 108.354 32.2992C110.816 30.9183 112.722 28.967 114.073 26.4454C115.424 23.9238 116.099 20.9669 116.099 17.5748C116.099 14.1526 115.424 11.1957 114.073 8.70408C112.722 6.18246 110.816 4.24622 108.354 2.89536C105.893 1.51448 102.996 0.824035 99.6639 0.824035H88.6319V34.3705ZM92.2342 30.9933V4.2012H99.6639C102.216 4.2012 104.437 4.75655 106.328 5.86726C108.219 6.94796 109.69 8.49395 110.741 10.5052C111.792 12.4865 112.317 14.843 112.317 17.5748C112.317 20.3065 111.792 22.678 110.741 24.6893C109.72 26.7006 108.264 28.2616 106.373 29.3723C104.482 30.453 102.246 30.9933 99.6639 30.9933H92.2342Z",fill:"white"}),(0,i.jsx)("path",{d:"M122.052 34.3705H143.666V30.9933H125.654V19.2408H142.765V15.8637H125.654V4.2012H143.666V0.824035H122.052V34.3705Z",fill:"white"}),(0,i.jsx)("path",{d:"M160.925 34.9108C163.057 34.9108 164.933 34.5206 166.554 33.7401C168.205 32.9596 169.481 31.8939 170.381 30.5431C171.312 29.1622 171.777 27.5711 171.777 25.77C171.777 23.5486 171.102 21.7024 169.751 20.2315C168.4 18.7605 166.404 17.6348 163.762 16.8543L158.449 15.2783C156.648 14.7379 155.312 13.9274 154.441 12.8467C153.571 11.736 153.135 10.4902 153.135 9.10934C153.135 7.39824 153.736 6.04738 154.936 5.05675C156.137 4.03609 157.698 3.52576 159.619 3.52576C161.661 3.52576 163.432 4.03609 164.933 5.05675C166.464 6.0774 167.59 7.57836 168.31 9.55963L171.462 8.29882C170.982 6.82788 170.186 5.49202 169.075 4.29125C167.965 3.09049 166.599 2.12987 164.978 1.40941C163.387 0.658931 161.586 0.283691 159.574 0.283691C157.653 0.283691 155.927 0.673941 154.396 1.45444C152.895 2.23494 151.709 3.31563 150.839 4.69651C149.968 6.04738 149.533 7.60838 149.533 9.37951C149.533 11.4508 150.163 13.297 151.424 14.9181C152.715 16.5391 154.546 17.6948 156.918 18.3853L162.952 20.1864C164.633 20.6667 165.923 21.3572 166.824 22.2577C167.725 23.1583 168.175 24.4341 168.175 26.0852C168.175 27.7663 167.499 29.1171 166.149 30.1378C164.828 31.1584 163.087 31.6688 160.925 31.6688C158.644 31.6688 156.678 31.0834 155.026 29.9126C153.375 28.7119 152.16 26.9708 151.379 24.6893L148.137 25.9051C148.647 27.5561 149.503 29.0721 150.704 30.453C151.904 31.8039 153.375 32.8845 155.117 33.6951C156.858 34.5056 158.794 34.9108 160.925 34.9108Z",fill:"white"}),(0,i.jsx)("path",{d:"M178.733 34.3705H200.347V30.9933H182.336V19.2408H199.447V15.8637H182.336V4.2012H200.347V0.824035H178.733V34.3705Z",fill:"white"}),(0,i.jsx)("path",{d:"M212.114 34.3705H215.716V4.2012H224.902V0.824035H202.838V4.2012H212.114V34.3705Z",fill:"white"}),(0,i.jsx)("path",{d:"M226.058 34.3705H227.859C230.621 34.3705 232.812 33.545 234.433 31.8939C236.054 30.2128 236.865 27.9614 236.865 25.1396V0.824035H233.263V25.1396C233.263 26.8807 232.782 28.2616 231.822 29.2822C230.861 30.2729 229.54 30.7682 227.859 30.7682H226.058V34.3705Z",fill:"white"}),(0,i.jsx)("path",{d:"M244.782 34.3705H266.395V30.9933H248.384V19.2408H265.495V15.8637H248.384V4.2012H266.395V0.824035H244.782V34.3705Z",fill:"white"}),(0,i.jsx)("path",{d:"M272.353 34.3705H283.385C286.717 34.3705 289.614 33.6801 292.076 32.2992C294.537 30.9183 296.443 28.967 297.794 26.4454C299.145 23.9238 299.82 20.9669 299.82 17.5748C299.82 14.1526 299.145 11.1957 297.794 8.70408C296.443 6.18246 294.537 4.24622 292.076 2.89536C289.614 1.51448 286.717 0.824035 283.385 0.824035H272.353V34.3705ZM275.955 30.9933V4.2012H283.385C285.937 4.2012 288.158 4.75655 290.049 5.86726C291.94 6.94796 293.411 8.49395 294.462 10.5052C295.513 12.4865 296.038 14.843 296.038 17.5748C296.038 20.3065 295.513 22.678 294.462 24.6893C293.441 26.7006 291.985 28.2616 290.094 29.3723C288.203 30.453 285.967 30.9933 283.385 30.9933H275.955Z",fill:"white"}),(0,i.jsx)("path",{d:"M300.942 34.3705H304.725L307.652 26.1753H322.646L325.528 34.3705H329.31L317.063 0.824035H313.19L300.942 34.3705ZM308.822 22.7981L315.126 5.05675L321.385 22.7981H308.822Z",fill:"white"}),(0,i.jsx)("path",{d:"M333.784 34.3705H337.386V7.71345L355.848 34.3705H359V0.824035H355.398V27.301L336.936 0.824035H333.784V34.3705Z",fill:"white"})]})}function _(){var e=(0,w.useRouter)();return(0,i.jsxs)("header",{className:"flex flex-col items-center justify-between w-full px-8 py-8 sm:px-5 md:flex-row lg:px-12 md:py-14 bg-dark",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(V,{}),(0,i.jsx)(s(),{href:y.home,children:(0,i.jsx)("a",{className:"ml-3",children:(0,i.jsx)(M,{})})})]}),(0,i.jsxs)("ul",{className:"flex mt-8 ml-8 md:mt-0",children:[(0,i.jsx)("li",{className:"mr-8 font-medium text-right sm:mr-3 text-19 lg:mr-12 xl:mr-20",children:(0,i.jsx)(s(),{href:"#",children:(0,i.jsx)("a",{className:g()("hover:text-purple",{"text-purple":e.asPath===y.podcast}),children:"01. Podcast"})})}),(0,i.jsx)("li",{className:"mr-8 font-medium text-right sm:mr-3 text-19 lg:mr-12 xl:mr-20",children:(0,i.jsx)(s(),{href:y.blog,children:(0,i.jsx)("a",{className:g()("hover:text-purple",{"text-purple":e.asPath===y.blog}),children:"02. Blog"})})}),(0,i.jsx)("li",{className:"font-medium text-right text-19",children:(0,i.jsx)(s(),{href:y.community,children:(0,i.jsx)("a",{className:g()("hover:text-purple",{"text-purple":e.asPath===y.community}),children:"03. Community"})})})]})]})}function b(e){var t=e.children;return(0,i.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,i.jsx)(_,{}),t,(0,i.jsx)(v,{})]})}var Z=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(b,{children:(0,i.jsx)(t,l({},n))})}},906:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);