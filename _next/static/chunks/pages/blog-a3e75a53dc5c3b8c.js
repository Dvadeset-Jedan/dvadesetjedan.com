(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{3500:function(e,r,t){"use strict";t.d(r,{$:function(){return m}});var n=t(5675),a=t.n(n),s=t(1664),i=t.n(s),l=t(1163),o=t(7801),c=t(1563),u=t(3474),d=t(5893);function m(e){var r=e.title,t=e.author,n=e.authorURL,s=e.translator,m=e.translatorURL,p=e.slug,x=e.meta,h=e.img,g=e.flag,v=(0,l.useRouter)();return(0,d.jsxs)("article",{className:"flex flex-col",children:[(0,d.jsx)("div",{children:(0,d.jsx)(a(),{src:o.W[h]||o.W.blogPreview,className:"cursor-pointer rounded-2xl",width:"320",height:"200",layout:"responsive",alt:"",priority:!0,onClick:function(){return v.push(c._.blogArticle(p))}})}),(0,d.jsxs)("div",{className:"mt-6",children:[(0,d.jsx)("h1",{className:"text-2xl font-medium cursor-pointer md:text-2xl",onClick:function(){return v.push(c._.blogArticle(p))},children:r}),(0,d.jsxs)("p",{className:"mt-4 text-lg md:text-md text-gray",children:["Autor"," ",(0,d.jsx)("a",{className:"text-purple",href:n,children:t}),", Prevod"," ",(0,d.jsx)("a",{className:"mr-1 text-purple",href:m,children:s}),(0,d.jsx)(u.W,{country:g})]}),(0,d.jsx)("p",{className:"mt-6 mb-4 text-xl md:text-xl text-gray",children:x}),(0,d.jsx)(i(),{href:c._.blogArticle(p),children:(0,d.jsx)("a",{className:"text-lg md:text-sm text-purple",children:"Pro\u010ditaj vi\u0161e..."})})]})]})}},3474:function(e,r,t){"use strict";t.d(r,{W:function(){return a}});var n=t(5893);function a(e){switch(e.country){case"serbia":return(0,n.jsx)("span",{children:"\ud83c\uddf7\ud83c\uddf8"});case"croatia":return(0,n.jsx)("span",{children:"\ud83c\udded\ud83c\uddf7"});case"bosnia":return(0,n.jsx)("span",{children:"\ud83c\udde7\ud83c\udde6"});case"montenegro":return(0,n.jsx)("span",{children:"\ud83c\uddf2\ud83c\uddea"});case"macedonia":return(0,n.jsx)("span",{children:"\ud83c\uddf2\ud83c\uddf0"});case"slovenia":return(0,n.jsx)("span",{children:"\ud83c\uddf8\ud83c\uddee"})}}},1365:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return m},default:function(){return p}});var n=t(9499),a=t(3500),s=t(1163),i=t(3474),l=t(4184),o=t.n(l),c=t(5893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var d=[{label:"Svi prevodi",value:"all"},{label:"Srpski",value:"serbia"},{label:"Hrvatski",value:"croatia"},{label:"Makedonski",value:"macedonia"},{label:"Slovena\u010dki",value:"slovenia"},{label:"Crnogorski",value:"montenegro"},{label:"Bosanski",value:"bosnia"}],m=!0;function p(e){var r,t=e.posts,l=(0,s.useRouter)(),m=l.query.lang,p=null===t||void 0===t?void 0:t.filter((function(e){return!m||"all"===m||e.frontmatter.flag===m}));return(0,c.jsxs)("main",{className:"bg-dark",children:[(0,c.jsxs)("div",{className:"flex w-[90%] md:w-auto flex-col items-center justify-center mx-auto py-20 text-center bg-dark brightness-110",children:[(0,c.jsx)("h1",{className:"text-3xl font-semibold md:text-4xl",children:"DvadesetJedan Blog"}),(0,c.jsx)("p",{className:"mt-4 mt-6 text-lg md:text-lg text-gray",children:"Na\u0161 blog je najbolji resurs za u\u010denje o bitcoin-u. Pro\u010ditaj tekstove koje smo sami kreirali, ali i prevode popularnih sadr\u017eaja \u0161irom ekosistema."}),(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsx)("select",{name:"select",onChange:function(e){l.push({query:{lang:e.target.value}},void 0,{shallow:!0})},value:null===(r=d.find((function(e){return e.value===m})))||void 0===r?void 0:r.value,defaultValue:"all",className:o()("px-5 pr-10 py-1 pb-1.5 text-md mt-4 rounded-full border border-purple bg-transparent cursor-pointer focus:outline-none text-purple relative z-10"),children:d.map((function(e){var r=e.value,t=e.label;return(0,c.jsx)("option",{value:r,children:"all"===r?t:(0,c.jsx)(i.W,{country:r})},r)}))}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 absolute top-1/2 right-3 text-purple",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]})]}),(0,c.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,c.jsx)("div",{className:"w-[90%] min-h-[30rem] mx-auto",children:(0,c.jsx)("div",{className:"py-20 grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-3 gap-x-[1.875rem] gap-y-16",children:p.map((function(e,r){var t=e.frontmatter;return(0,c.jsx)(a.$,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t),r)}))})})})]})}},7801:function(e,r,t){"use strict";t.d(r,{W:function(){return n}});var n={bitcoinIsland:"/images/bitcoin-island.webp",blogPreview:"/images/blog-preview.webp",dogma:"/images/dogma.webp",dvadesetJedan:"/images/dvadeset-jedan.webp",magicInternetMoney:"/images/magic-internet-money.webp",meetupCover:"/images/meetup-cover.webp",meetup:"/images/meetup.webp",player:"/images/player.webp",dearFamilyDearFriends:"/images/content/dear-family.jpeg",hero1:"/images/hero_1.webp",hero2:"/images/hero_2.webp",hero3:"/images/hero_3.webp",hero4:"/images/hero_4.webp",hero5:"/images/hero_5.webp"}},2537:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(1365)}])}},function(e){e.O(0,[675,774,888,179],(function(){return r=2537,e(e.s=r);var r}));var r=e.O();_N_E=r}]);