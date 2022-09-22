"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1398],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,d=c["".concat(m,".").concat(s)]||c[s]||g[s]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},63282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return G},frontMatter:function(){return h},metadata:function(){return N},toc:function(){return y}});var a=n(3905),r=n(44035),l=n(22425),o=n(29415),i=n(39130),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(g)for(var n of g(t))s.call(t,n)&&d(e,n,t[n]);return e};const h={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc808\uac10"},f=void 0,N={unversionedId:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",title:"L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc808\uac10",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",permalink:"/ko/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",draft:!1,tags:[],version:"current",frontMatter:{id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc808\uac10"},sidebar:"docs",previous:{title:"\ub7f0\ud0c0\uc784\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub85c\ub4dc",permalink:"/ko/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"\ub3d9\uc801 L8 \uc774\ubbf8\uc9c0 \uc0dd\uc131",permalink:"/ko/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},v={},y=[{value:"L8 \uc774\ubbf8\uc9c0 \uc608",id:"example-l8-image",level:2},{value:"TouchGFX Designer\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 L8 \uc774\ubbf8\uc9c0",id:"using--l8-images-in-touchgfx-designer",level:2},{value:"\ud22c\uba85\ud55c \uc774\ubbf8\uc9c0",id:"transparent-images",level:2},{value:"\uc774\ubbf8\uc9c0\ub97c 256\uac00\uc9c0 \uc0c9\uc0c1\uc73c\ub85c \ubcc0\ud658",id:"converting-an-image-to-256-colors",level:2},{value:"Paint.NET",id:"paintnet",level:3},{value:"ImageMagick",id:"imagemagick",level:3},{value:"\ube44\uad50",id:"comparison",level:3},{value:"\uc218\ub3d9 \uad6c\uc131",id:"manual-configuration",level:2}],b={toc:y};function G(e){var t,n=e,{components:m}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},b),d),u(t,p({components:m,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"L8 \ud615\uc2dd\uc758 \uc774\ubbf8\uc9c0\ub294 \ub2e4\ub978 \ud615\uc2dd, \uc774\ub97c\ud14c\uba74 ARGB8888\uc5d0 \ube44\ud574 \ud50c\ub798\uc2dc \uc800\uc7a5 \uacf5\uac04\uc744 \uc801\uac8c \ucc28\uc9c0\ud558\uba70 \uadf8\ub9ac\uae30 \uc791\uc5c5 \uc18d\ub3c4\uac00 \ub354 \ube60\ub985\ub2c8\ub2e4."),(0,a.kt)("p",null,"L8 \ud615\uc2dd\uc758 \uc774\ubbf8\uc9c0\ub294 \uc0c9\uc0c1 \ud314\ub808\ud2b8\uc640 \ud53d\uc140 \ubc30\uc5f4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uc0c9\uc0c1 \ud314\ub808\ud2b8\uc5d0\uc11c\ub294 \ucd5c\ub300 256\uac00\uc9c0\uc758 \uc0c9\uc0c1\uc774 16\ube44\ud2b8 \ud615\uc2dd RGB565, 24\ube44\ud2b8 \ud615\uc2dd RGB888, \ub610\ub294 32\ube44\ud2b8 \ud615\uc2dd ARGB8888\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4. \ud53d\uc140 \ubc30\uc5f4\uc740 \uac01 \ud53d\uc140\ub9c8\ub2e4 1\ubc14\uc774\ud2b8\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uc774 \ubc14\uc774\ud2b8\ub294 \uc0c9\uc0c1 \ud314\ub808\ud2b8(\uc0c9\uc0c1 \ubaa9\ub85d)\uc5d0 \ub300\ud55c \uc778\ub371\uc2a4\ub85c\uc11c \ud53d\uc140 \uc0c9\uc0c1\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\ub294 \ud53d\uc140\uc744 \ud558\ub098\uc529 \uc77d\uace0 \ud314\ub808\ud2b8\uc5d0\uc11c \ud574\ub2f9 \uc0c9\uc0c1\uc744 \ucc3e\uc544 \uc774\ub97c \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \uc791\uc131\ud568\uc73c\ub85c\uc368 L8 \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud55c \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uc774\ub294 \uc790\ub3d9\uc73c\ub85c \uc218\ud589\ub418\uba70, \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc9c0\uc6d0\ud560 \uacbd\uc6b0\uc5d0\ub294 STM32 Chrom-ART \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uae30\ub97c \uc0ac\uc6a9\ud574 \uc18d\ub3c4\ub97c \ub192\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"8bpp(\ud53d\uc140\ub2f9 8\ube44\ud2b8)\ub780, L8 \uc774\ubbf8\uc9c0 1\uac1c\uac00 256\uac00\uc9c0 \uc0c9\uc0c1\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub610 \ub2e4\ub978 L8 \uc774\ubbf8\uc9c0\ub3c4 256\uac00\uc9c0\uc758 \ub2e4\ub978 \uc0c9\uc0c1\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\ub370, \uc774\ub294 \ub450 \uc774\ubbf8\uc9c0\uac00 \uac01\uac01 \uc790\uccb4 \ud314\ub808\ud2b8\ub97c \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",mdxType:"Figure"},"4 x 4 \ud53d\uc140\uacfc 4\uac00\uc9c0 \uc0c9\uc0c1\uc758 \ud314\ub808\ud2b8\ub85c \uad6c\uc131\ub41c L8 \uc774\ubbf8\uc9c0"),(0,a.kt)("p",null,"\ud53d\uc140\uc740 \uac01\uac01 1\ubc14\uc774\ud2b8(8\ube44\ud2b8)\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud53d\uc140\uc758 \ud06c\uae30\ub294 \uac00\ub85c x \uc138\ub85c \ubc14\uc774\ud2b8\ub85c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ud314\ub808\ud2b8 \uc0c9\uc0c1\uc5d0\ub294 16\ube44\ud2b8, 24\ube44\ud2b8 \ub610\ub294 32\ube44\ud2b8 \uc0c9\uc0c1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac01 \uc0c9\uc0c1\ub9c8\ub2e4 2, 3 \ub610\ub294 4\ubc14\uc774\ud2b8\ub97c \ucc28\uc9c0\ud55c\ub2e4\uace0 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Solid images should be stored in L8_RGB888. \uadf8 \ubc16\uc5d0 \uc774\ubbf8\uc9c0\uac00 \ud22c\uba85\ud558\ub2e4\uba74 \ubc18\ub4dc\uc2dc 32\ube44\ud2b8 \ud615\uc2dd(ARGB8888)\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud615\uc2dd")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud504\ub808\uc784\ubc84\ud37c \ud615\uc2dd")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud22c\uba85\ud55c \ud53d\uc140 \uc9c0\uc6d0 \uc5ec\ubd80")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"}," Supported by DMA2D ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"16\ube44\ud2b8 RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\uc544\ub2c8\uc694"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\uc544\ub2c8\uc694")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"24\ube44\ud2b8 RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\uc544\ub2c8\uc694"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\uc608")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\ub458 \ub2e4"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\uc608"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\uc608")))),(0,a.kt)("p",null,"The L8 format with a RGB565 palette is not supported by DMA2D. This means that drawing images in this format is not hardware accelerated. This format should therefore not be used unless you are on a platform without DMA2D (for example the STM32G0 or STM32F410)."),(0,a.kt)("p",null,"If you are using a serial flash (non-memory-mapped) to store the images and a 16-bit framebuffer (format RGB565), then you should use the L8_RGB565 format, because the color format then matches the framebuffer format and is faster to copy to the framebuffer."),(0,a.kt)("p",null,"The table below shows the preferred L8 format:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud504\ub808\uc784\ubc84\ud37c \ud615\uc2dd")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Platform has DMA2D")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"}," Platform without DMA2D ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB565")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888")))),(0,a.kt)("p",null,"Transparent images should always be in L8_ARGB8888."),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,"\ud314\ub808\ud2b8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc5ec\uae30\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624. ",(0,a.kt)(i.Z,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color"))),(0,a.kt)("h2",k({},{id:"example-l8-image"}),"L8 \uc774\ubbf8\uc9c0 \uc608"),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 \uc77c\ubc18\uc801\uc778 \ub85c\uace0 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4. \uc774 \uc774\ubbf8\uc9c0\ub294 16\uac00\uc9c0 \uc0c9\uc0c1\ub9cc \uc0ac\uc6a9\ud55c \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",mdxType:"Figure"},"16\uac00\uc9c0 24\ube44\ud2b8 \uc0c9\uc0c1\uc744 \uc0ac\uc6a9\ud55c 200 x 200 \ud53d\uc140 L8 \uc774\ubbf8\uc9c0"),(0,a.kt)("p",null,"\uc774 \uc774\ubbf8\uc9c0\uc758 \ud50c\ub798\uc2dc \ud06c\uae30\ub294 \ud45c\uc900 24\ube44\ud2b8 \ud615\uc2dd(RGB888)\uc758 \uc6d0\ubcf8 \uc774\ubbf8\uc9c0\ubcf4\ub2e4 \ud6e8\uc52c \uc791\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ud45c\ub294 \uc138 \uac00\uc9c0 \ud314\ub808\ud2b8 \ud615\uc2dd\uacfc L8\uc774 \uc544\ub2cc \ub2e4\ub978 \ud615\uc2dd\uc77c \ub54c \uc774\ubbf8\uc9c0\uc758 \ud50c\ub798\uc2dc \ud06c\uae30\ub97c \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud615\uc2dd")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud53d\uc140 \ud06c\uae30(\ubc14\uc774\ud2b8)")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud314\ub808\ud2b8 \ud06c\uae30(\ubc14\uc774\ud2b8)")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc804\uccb4 \ud06c\uae30(\ubc14\uc774\ud2b8)")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uac10\uc18c\uc728(%)")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"32"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,032"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"48"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,048"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"64"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,064"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"66.6%")))),(0,a.kt)("p",null,"\uc704 \ud45c\uc5d0\uc11c \ud06c\uae30 \uac10\uc18c\uc728\uc774 \ub9e4\uc6b0 \ub192\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc911\uac04 \ud06c\uae30\uc758 \uc774\ubbf8\uc9c0\uc5d0\uc11c\ub294 \ud314\ub808\ud2b8\uc758 \ud06c\uae30\uc5d0 \ubcc4 \ucc28\uc774\uac00 \uc5c6\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",k({},{id:"using--l8-images-in-touchgfx-designer"}),"TouchGFX Designer\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 L8 \uc774\ubbf8\uc9c0"),(0,a.kt)("p",null,"TouchGFX\uc5d0\uc11c\ub294 L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \ub9e4\uc6b0 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ubcc0\ud658 \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\uc131\ud574 \uc774\ubbf8\uc9c0\ub97c PNG\uc5d0\uc11c L8 \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. \ubcc0\ud658\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc774 \uc0c8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c assets/images \ud3f4\ub354\ub85c \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",mdxType:"Figure"},"TouchGFX project\uc758 \uc774\ubbf8\uc9c0 \ud3f4\ub354"),(0,a.kt)("p",null,"\uc774\uc81c TouchGFX Designer\ub85c \uc774\ub3d9\ud558\uc5ec \uc0c1\ub2e8 \ub3c4\uad6c \ubaa8\uc74c\uc5d0 \uc788\ub294 ",(0,a.kt)("a",k({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images \ud0ed"),"\uc744 \ud074\ub9ad\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 \uc774\ubbf8\uc9c0 \ubdf0\uc5d0 \uc788\ub294 \ub85c\uace0"),(0,a.kt)("p",null,"\ucc3d \uc624\ub978\ucabd\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ud615\uc2dd L8_RGB888\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4(\uc704 \uc608\uc5d0\uc11c\ub294 24\ube44\ud2b8 \uc0c9\uc0c1\uc744 \uc2e4\ud589 \uc911\uc785\ub2c8\ub2e4)."),(0,a.kt)("p",null,"\uc774\uc81c \uce94\ubc84\uc2a4\uc5d0 \uc774\ubbf8\uc9c0 \uc704\uc82f\uc744 \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc5ec\uae30\uc11c\ub294 \ubc30\uacbd\uc5d0 Box\ub97c \uc0bd\uc785\ud588\uc2b5\ub2c8\ub2e4)."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 \uce94\ubc84\uc2a4\uc5d0 \uc0bd\uc785\ub41c \uc774\ubbf8\uc9c0 \uc704\uc82f"),(0,a.kt)("p",null,"UI \ucf54\ub4dc\uc5d0\uc11c\ub294 \uc544\ubb34\uac83\ub3c4 \ubcc0\uacbd\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. Images \ud0ed\uc5d0\uc11c \uc124\uc815\ud55c \uad6c\uc131 \ub54c\ubb38\uc5d0 \uc774\ubbf8\uc9c0 \ubcc0\ud658 \ud504\ub85c\uadf8\ub7a8\uc774 PNG \ud30c\uc77c\uc744 \ubcc0\ud658\ud558\uc5ec L8 \ud615\uc2dd\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",k({},{id:"transparent-images"}),"\ud22c\uba85\ud55c \uc774\ubbf8\uc9c0"),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uac83\ucc98\ub7fc \ud22c\uba85\ud55c \uc774\ubbf8\uc9c0\uc5d0\ub3c4 L8 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",mdxType:"Figure"},"32\ube44\ud2b8 ARGB8888 \ud615\uc2dd\uc758 170 x 60 \ud53d\uc140 \ubc84\ud2bc \uc774\ubbf8\uc9c0"),(0,a.kt)("p",null,"\uc704\uc758 \uc774\ubbf8\uc9c0\ub294 108\uac00\uc9c0 \uc0c9\uc0c1(\ub300\ubd80\ubd84 \ud30c\ub780\uc0c9 \uc0c9\uc870)\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc774\ubbf8\uc9c0\ub294 L8_ARGB8888 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ud06c\uae30\uac00 \ub2e4\uc74c\uacfc \uac19\uc774 \ud06c\uac8c \uc904\uc5b4\ub4ed\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud615\uc2dd")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud53d\uc140 \ud06c\uae30(\ubc14\uc774\ud2b8)")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud314\ub808\ud2b8 \ud06c\uae30(\ubc14\uc774\ud2b8)")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc804\uccb4 \ud06c\uae30(\ubc14\uc774\ud2b8)")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uac10\uc18c\uc728(%)")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"10,200"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"432"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"10,632"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"73.9%")))),(0,a.kt)("h2",k({},{id:"converting-an-image-to-256-colors"}),"\uc774\ubbf8\uc9c0\ub97c 256\uac00\uc9c0 \uc0c9\uc0c1\uc73c\ub85c \ubcc0\ud658"),(0,a.kt)("p",null,"\ub2e4\uc218\uc758 \uc774\ubbf8\uc9c0\uac00 256\uac00\uc9c0 \uc774\uc0c1\uc758 \uc0c9\uc0c1\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud2b9\ud788 \uc2e4\uc0ac \uc774\ubbf8\uc9c0\ub098 \uadf8\ub798\ub514\uc5b8\ud2b8\uac00 \uc801\uc6a9\ub41c \uc774\ubbf8\uc9c0\ub77c\uba74 \ub300\ubd80\ubd84\uc774 \uadf8\ub807\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ubbf8\uc9c0\ub294 \uc0c9\uc0c1\uc774 \ub108\ubb34 \ub9ce\uae30 \ub54c\ubb38\uc5d0 TouchGFX Designer\uc5d0\uc11c L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc73c\ub85c \ubc14\ub85c \ubcc0\ud658\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \ub300\uccb4\ub85c \ud2b9\uc815 \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ub41c \uc0c9\uc0c1\uc758 \uc218\ub97c \uc904\uc774\ub294 \uac83\uc740 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uadf8\ub798\ud53d \uc544\ud2f0\uc2a4\ud2b8\uac00 256\uac00\uc9c0 \uc0c9\uc0c1\uc73c\ub85c \uc774\ubbf8\uc9c0\ub97c \ubcc0\ud658\ud558\uac70\ub098 \uc81c\uacf5\ud55c\ub2e4\uba74 \ub354\ud560 \ub098\uc704 \uc5c6\uaca0\uc9c0\ub9cc \uc774\ubbf8\uc9c0 \uc870\uc791 \ub3c4\uad6c \uc5ed\uc2dc \uc774\ubbf8\uc9c0 \ud488\uc9c8\uc744 \ucd5c\ub300\ud55c \uc720\uc9c0\ud558\uba74\uc11c \uc774\ubbf8\uc9c0\ub97c \ubcc0\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",k({},{id:"paintnet"}),"Paint.NET"),(0,a.kt)("p",null,"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 Paint.NET\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc6d0\ubcf8 \uc774\ubbf8\uc9c0\ub97c \uc5f4\uace0 Save As\ub97c \uc0ac\uc6a9\ud574 \uc774\ubbf8\uc9c0\ub97c \ub2e4\ub978 \ud30c\uc77c\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4. Save Configuration \ub300\ud654 \uc0c1\uc790\uc5d0\uc11c \ud53d\uc140 \uc2ec\ub3c4\ub85c 8\ube44\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",mdxType:"Figure"},"Paint.NET\uc5d0\uc11c 8\ube44\ud2b8 \ud615\uc2dd\uc73c\ub85c \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud558\ub294 \ubaa8\uc2b5"),(0,a.kt)("p",null,"\uc774\uc81c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0c8 PNG\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub54c TouchGFX Designer\uc758 ",(0,a.kt)("a",k({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images \ud0ed"),'\uc5d0\uc11c L8_ARGB8888 \ud615\uc2dd\uc744 \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub9bc\uc790 \ucc98\ub9ac\uac00 \uadf8\ub2e4\uc9c0 \ud6a8\uacfc\uc801\uc774\uc9c0\ub294 \uc54a\uc9c0\ub9cc, \ub300\uccb4\ub85c \uac00\uc7a5\uc790\ub9ac\uac00 \ud22c\uba85\ud55c \uc544\uc774\ucf58\uc774 \ub69c\ub837\ud558\uac8c \ubcf4\uc785\ub2c8\ub2e4. \uacbd\uc6b0\uc5d0 \ub530\ub77c\uc11c\ub294 "Transparency threshold" \uac12\uc744 \uc870\uc815\ud558\uc5ec \uacb0\uacfc\ub97c \uac1c\uc120\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("h3",k({},{id:"imagemagick"}),"ImageMagick"),(0,a.kt)("p",null,"\ub54c\uc5d0 \ub530\ub77c L8 \uc774\ubbf8\uc9c0\uc758 \ud488\uc9c8\uc774 \uc88b\uc544\uc9c0\ub294 \ubcc0\ud658 \ub3c4\uad6c\uac00 \uc788\ub294\ub370, \ubc14\ub85c ImageMagick(",(0,a.kt)("a",k({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc)\uc785\ub2c8\ub2e4. \uc774 \ub3c4\uad6c\ub294 \uba85\ub839\uc904\uc5d0\uc11c\ub3c4 \uc774\ubbf8\uc9c0\ub97c \ubcc0\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc0ac\uc6a9\ud558\uae30 \uc801\ud569\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 clock_bg.png\ub97c \ucd5c\ub300 256\uac00\uc9c0 \uc0c9\uc0c1\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\ubbf8\uc9c0\ub85c \ubcc0\ud658\ud55c\ub2e4\uace0 \uac00\uc815\ud560 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc774 \uba85\ub839\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),(0,a.kt)("p",null,"ImageMagick \uc5ed\uc2dc \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc0c9\uc0c1\uc758 \uc218\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba85\ub839\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),(0,a.kt)("h3",k({},{id:"comparison"}),"\ube44\uad50"),(0,a.kt)("p",null,"\ube44\uad50\ub97c \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc774 \uc138 \uac00\uc9c0 \uc774\ubbf8\uc9c0(\uc6d0\ubcf8, Paint.NET\uc744 \uc0ac\uc6a9\ud55c L8, ImageMagick\uc744 \uc0ac\uc6a9\ud55c L8)\ub97c \uc900\ube44\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",mdxType:"Figure"},"\uc2dc\uacc4 \uc774\ubbf8\uc9c0 \ube44\uad50, \uc67c\ucabd\uc5d0\uc11c \uc624\ub978\ucabd\uc73c\ub85c: \uc6d0\ubcf8, Paint.NET, ImageMagick"),(0,a.kt)("p",null,"\uac00\uc6b4\ub370 \uc774\ubbf8\uc9c0\ub294 \uacbd\uacc4 \uadf8\ub9bc\uc790\uc5d0\uc11c \uc120\uba85\ub3c4\uac00 \ub5a8\uc5b4\uc9d1\ub2c8\ub2e4. In both cases the central part of the clock background looks usable."),(0,a.kt)("h2",k({},{id:"manual-configuration"}),"\uc218\ub3d9 \uad6c\uc131"),(0,a.kt)("p",null,"TouchGFX Designer\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc740 \ud504\ub85c\uc81d\ud2b8 \ub8e8\ud2b8\uc5d0 \uc788\ub294 application.config \ud30c\uc77c\uc5d0 \uba85\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-json"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),(0,a.kt)("p",null,'"image_configuration" \uc544\ub798 "images\u201d \uc139\uc158\uc5d0\uc11c \uac01 \uc774\ubbf8\uc9c0\uc758 \ud615\uc2dd\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uc774\ubbf8\uc9c0\uac00 \uae30\ubcf8 \ud615\uc2dd(opaque_image_format \ub610\ub294 nonopaque_image_format)\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\uac00\ub2a5\ud558\ub2e4\uba74 TouchGFX Designer\ub97c \uc0ac\uc6a9\ud574 \uc774\ubbf8\uc9c0\ub97c \uad6c\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."))}G.isMDXComponent=!0}}]);