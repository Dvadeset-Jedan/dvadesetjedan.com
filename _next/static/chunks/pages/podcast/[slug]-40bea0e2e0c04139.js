(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{8987:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(5675),s=n.n(r),i=n(1664),a=n.n(i),c=n(7801),o=n(5893);function l(e){var t=e.title,n=e.description,r=e.href;return(0,o.jsx)(a(),{href:r,children:(0,o.jsxs)("a",{className:"flex items-center py-6 cursor-pointer bg-dark focus:brightness-110 hover:brightness-110 rounded-2xl",children:[(0,o.jsx)("div",{className:"hidden w-40 h-40 md:visible",children:(0,o.jsx)(s(),{src:c.W.dvadesetJedan,className:"rounded-2xl",width:160,height:160,layout:"fixed",alt:""})}),(0,o.jsxs)("div",{className:"overflow-x-hidden text-left xl:ml-6",children:[(0,o.jsx)("p",{className:"text-xl font-semibold truncate md:text-xl",children:t}),(0,o.jsx)("p",{className:"mt-2 text-lg font-medium md:text-sm text-gray",children:n})]})]})})}},6964:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return u}});var r=n(116),s=n(1163),i=n(7294),a=n(8987),c=n(1563),o=n(5893),l=!0;function u(e){var t=e.episodes,n=(0,s.useRouter)(),l=(0,i.useState)(!1),u=l[0],d=l[1];if((0,i.useEffect)((function(){return d(!0)}),[]),!u)return null;var m=t.find((function(e){return e.slug===n.query.slug}));return(0,o.jsxs)("main",{className:"text-center bg-dark",children:[(0,o.jsxs)("div",{className:"py-10 lg:py-20 bg-dark brightness-110",children:[(0,o.jsxs)("div",{className:"w-[90%] m-auto xl:w-3/5",children:[(0,o.jsx)("h1",{className:"text-2xl font-semibold",children:null===m||void 0===m?void 0:m.title}),(0,o.jsx)("p",{className:"mt-3 text-xl md:text-xl text-gray",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor ultrices pulvinar eu sem enim dolor tellus. Ante aenean varius cras ac ante feugiat."})]}),(0,o.jsx)("div",{className:"w-[90%] m-auto mt-20 lg:w-3/5",children:m&&(0,o.jsx)("iframe",{src:"https://anchor.fm/dvadesetjedan/embed/episodes/".concat(m.slug),scrolling:"no",className:"w-full h-[8rem] lg:h-[10.6rem]"})})]}),(0,o.jsxs)("div",{className:"w-[90%] m-auto mb-20 lg:w-3/5",children:[(0,o.jsxs)("div",{className:"h-[400px]",children:[(0,o.jsx)("h2",{className:"text-2xl md:text-[2.5rem] font-bold mb-14 mt-20",children:"Show notes"}),(0,o.jsx)("p",{className:"text-lg italic text-gray",children:"\u23f3 Coming soon..."})]}),(0,o.jsx)("h2",{className:"text-2xl md:text-[2.5rem] font-bold mb-14 mt-32",children:"Episodes you might enjoy"}),(0,r.Z)(t).splice(0,3).map((function(e){var t=e.slug,n=e.title,r=e.descriptionPreview;return(0,o.jsx)(a.b,{title:"".concat(n.slice(0,40),"..."),description:"".concat(r.slice(0,125),"..."),href:c._.podcastEpisode(t)},t)}))]})]})}},2221:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var r=n(3454).env.NEXT_PUBLIC_IS_DEVELOPMENT?"":"/dvadesetjedan.com"},7801:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var r=n(2221),s={bitcoinIsland:"".concat(r.t,"/images/bitcoin-island.webp"),blogPreview:"".concat(r.t,"/images/blog-preview.webp"),dogma:"".concat(r.t,"/images/dogma.webp"),dvadesetJedan:"".concat(r.t,"/images/dvadeset-jedan.webp"),magicInternetMoney:"".concat(r.t,"/images/magic-internet-money.webp"),meetupCover:"".concat(r.t,"/images/meetup-cover.webp"),meetup:"".concat(r.t,"/images/meetup.webp"),player:"".concat(r.t,"/images/player.webp")}},5318:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcast/[slug]",function(){return n(6964)}])},2587:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},8811:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},116:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2587);var s=n(8811),i=n(2937);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,s.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2587);function s(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[729,774,888,179],(function(){return t=5318,e(e.s=t);var t}));var t=e.O();_N_E=t}]);