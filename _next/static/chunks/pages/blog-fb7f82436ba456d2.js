(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7835:function(e,t,n){"use strict";n.d(t,{c:function(){return x},$:function(){return h}});var r=n(4184),s=n.n(r),a=n(5675),i=n.n(a),c=n(1664),l=n.n(c),o=n(7801),d=n(1563),m=n(7294),u={sm:"(min-width: 640px)",md:"(min-width: 768px)",lg:"(min-width: 1024px)",xl:"(min-width: 1280px)","2xl":"(min-width: 1536px)"};var p=n(5893);function x(e){var t=e.title,n=e.author,r=e.translator,s=e.meta,a=e.slug;return(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)(i(),{src:o.W.blogPreview,className:"rounded-2xl",width:497,height:314,layout:"responsive",alt:""}),(0,p.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-[rgba(122,62,89,0.3)]"})]}),(0,p.jsxs)("div",{className:"px-10 pt-12 pb-14 bg-dark brightness-110",children:[(0,p.jsx)("h1",{className:"text-[2rem] text-white font-medium",children:t}),(0,p.jsxs)("p",{className:"mt-4 text-lg text-gray",children:["Written by ",(0,p.jsx)("span",{className:"text-purple",children:n}),", translated by"," ",(0,p.jsx)("span",{className:"text-purple",children:r})]}),(0,p.jsx)("div",{className:"mx-auto mt-8 mb-8 text-lg text-gray",children:s}),(0,p.jsx)(l(),{href:d._.blogArticle(a),children:(0,p.jsx)("a",{className:"text-lg leading-[1.875rem] text-purple",children:"Continue..."})})]})]})}function h(e){var t=e.title,n=e.author,r=e.translator,a=e.slug,c=function(e){var t=u[e],n=function(e){return window.matchMedia(e).matches},r=(0,m.useState)(n(t)),s=r[0],a=r[1];function i(){a(n(t))}return(0,m.useEffect)((function(){var e=window.matchMedia(t);return i(),e.addListener?e.addListener(i):e.addEventListener("change",i),function(){e.removeListener?e.removeListener(i):e.removeEventListener("change",i)}}),[t]),s}("sm"),x=c?{width:320,height:200}:{width:600,height:350};return(0,p.jsxs)("div",{className:s()("flex flex-col",c?"w-[300px]":"w-[600px]"),children:[(0,p.jsx)(i(),{src:o.W.blogPreview,className:"rounded-2xl",width:x.width,height:x.height,layout:"fixed",alt:""}),(0,p.jsxs)("div",{className:"mt-6",children:[(0,p.jsx)("h1",{className:"font-medium text-21",children:t}),(0,p.jsxs)("p",{className:"mt-4 text-sm text-gray",children:["Written by ",(0,p.jsx)("span",{className:"text-purple",children:n}),", translated by"," ",(0,p.jsx)("span",{className:"text-purple",children:r})]}),(0,p.jsx)("p",{className:"mt-6 mb-4 text-md text-gray",children:"It can\u2019t be said often enough: Bitcoin is confusing. However, it\u2019s not complicated like a Rube Goldberg machine is complicated."}),(0,p.jsx)(l(),{href:d._.blogArticle(a),children:(0,p.jsx)("a",{className:"text-sm text-purple",children:"Continue..."})})]})]})}},410:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return l}});var r=n(9499),s=n(7835),a=n(5893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=!0;function l(e){var t=e.posts;return(0,a.jsxs)("main",{className:"bg-dark",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center py-20 text-center bg-dark brightness-110",children:[(0,a.jsx)("h1",{className:"text-[2.5rem]",children:"DvadesetJedan Blog"}),(0,a.jsx)("p",{className:"mt-4 mt-6 text-lg text-gray",children:"Original resources and translations of popular content from the Bitcoin community."}),(0,a.jsx)("p",{className:"mt-6 text-sm text-gray",children:"Get notified when we translate a new resource:"}),(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsx)("input",{type:"text",placeholder:"Email",className:"pl-6 py-4 bg-[#292A37] w-[480px]"}),(0,a.jsx)("button",{className:"px-8 py-4 ml-4 bg-gradient-to-r from-purpleGradient to-lightOrangeGradient",children:"Notify me"})]})]}),(0,a.jsx)("div",{className:"px-10 py-20 sm:px-28 xl:px-28 grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-3 gap-x-[1.875rem] gap-y-16",children:t.map((function(e,t){var n=e.frontmatter;return(0,a.jsx)(s.$,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),t)}))})]})}},2221:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var r=n(3454).env.NEXT_PUBLIC_IS_DEVELOPMENT?"":"/dvadesetjedan.com"},7801:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var r=n(2221),s={bitcoinIsland:"".concat(r.t,"/images/bitcoin-island.webp"),blogPreview:"".concat(r.t,"/images/blog-preview.webp"),dogma:"".concat(r.t,"/images/dogma.webp"),dvadesetJedan:"".concat(r.t,"/images/dvadeset-jedan.webp"),magicInternetMoney:"".concat(r.t,"/images/magic-internet-money.webp"),meetupCover:"".concat(r.t,"/images/meetup-cover.webp"),meetup:"".concat(r.t,"/images/meetup.webp"),player:"".concat(r.t,"/images/player.webp")}},3402:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(410)}])}},function(e){e.O(0,[359,774,888,179],(function(){return t=3402,e(e.s=t);var t}));var t=e.O();_N_E=t}]);