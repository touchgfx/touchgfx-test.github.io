"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7876],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,s=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(s,l(l({ref:t},p),{},{components:r})):n.createElement(s,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=l},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},37793:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},76056:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return k},default:function(){return T},frontMatter:function(){return b},metadata:function(){return C},toc:function(){return y}});var n=r(3905),a=r(22425),o=r(44035),l=r(29415),i=r(39130),c=r(93054),d=r(37793),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(h)for(var r of h(t))g.call(t,r)&&f(e,r,t[r]);return e};const b={id:"08-hardware-acceleration",title:"8. Hardware acceleration",sidebar_label:"8. Hardware acceleration"},k=void 0,C={unversionedId:"development/board-bring-up/how-to/08-hardware-acceleration",id:"development/board-bring-up/how-to/08-hardware-acceleration",title:"8. Hardware acceleration",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/08-hardware-acceleration",permalink:"/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"08-hardware-acceleration",title:"8. Hardware acceleration",sidebar_label:"8. Hardware acceleration"},sidebar:"docs",previous:{title:"7. External flash in block mode",permalink:"/ko/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"},next:{title:"9. Touch Controller",permalink:"/ko/docs/development/board-bring-up/how-to/09-touch-controller"}},w={},y=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"\ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac\uc5d0 \uc4f0\uae30",id:"write-to-framebuffer-memory",level:3},{value:"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80",id:"performance-is-as-expected",level:3}],M={toc:y};function T(e){var t,r=e,{components:p}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},M),f),m(t,u({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h2",v({},{id:"motivation"}),"\uac1c\uc694"),(0,n.kt)("p",null,"Chrom-ART(DMA2D) \uadf8\ub798\ud53d \uac00\uc18d\uae30\ub294 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\uc758 \ubd80\ubd84\uc744 \uc804\uc1a1\ud558\uace0 \uc774\uac83\uc744 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \uadf8\ub9ac\uac70\ub098 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Chrom-ART\ub294 \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \uc4f0\uae30\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uadf8\ub798\ud53d\uc744 \uc218\ud589\ud560 \ub54c \ud65c\uc6a9\uc774 \uac00\ub2a5\ud558\uba70, \uadf8\ub798\ud53d \uc131\ub2a5\uc744 \ud68d\uae30\uc801\uc73c\ub85c \uac1c\uc120\ud558\ub294 \ub3d9\uc2dc\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 MCU \uc0ac\uc6a9\ub7c9\uc744 \ub300\ud3ed \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubaa8\ub4e0 \uc81c\ud488\uc740 \uc544\ub2c8\uc9c0\ub9cc \ub300\ubd80\ubd84\uc758 STM32 \ucee8\ud2b8\ub864\ub7ec\uc5d0\ub294 Chrom-ART \uac00\uc18d\uae30\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130 \uc2dc\ud2b8\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624. DMA2D\ub294 \ucf54\ub4dc\uc640 \uc124\uba85\uc11c\uc5d0 \uc0ac\uc6a9\ub418\ub294 Chrom-ART\uc758 \ucf54\ub4dc \uc774\ub984\uc785\ub2c8\ub2e4."),(0,n.kt)(c.Z,{mdxType:"Note"},"Chrom-ART\ub97c \uc0ac\uc6a9\ud558\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc774 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",v({},{id:"goal"}),"\ubaa9\ud45c"),(0,n.kt)("p",null,"\uc774 \ub2e8\uacc4\uc758 \ubaa9\ud45c\ub294 Chrom-ART\ub97c \ud65c\uc131\ud654\ud558\uc5ec \uc774\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130 \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc218\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ubaa9\ud45c\ub294 Chrom-ART \uce69\uc758 \uae30\ub2a5\uc744 \uac80\ud1a0\ud558\ub294 \uac83\uc774 ",(0,n.kt)("strong",{parentName:"p"},"\uc544\ub2c8\ub77c"),", Chrom-ART \uce21\uba74\uc5d0\uc11c \uba54\ubaa8\ub9ac \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc81c \uae30\ub2a5\uc744 \ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",v({},{id:"verification"}),"\ud655\uc778"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\uc758 \uad6c\uc131 \uc5ec\ubd80"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"\uc6d0\ud558\ub294 \uadf8\ub798\ud53d\uc744 \uadf8\ub9ac\ub294 \ub370 Chrom-ART\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\uc5d0\uc11c \uba54\ubaa8\ub9ac \uc77d\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d(M2M)\uc744 \uadf8\ub9ac\ub294 \ub370 Chrom-ART\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\uc5d0\uc11c \uba54\ubaa8\ub9ac \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d(M2M \ubc0f R2M)\uc744 \uadf8\ub9ac\ub294 \ub370 Chrom-ART\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART \uc131\ub2a5"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Chrom-ART\uac00 \uc6d0\ud558\ub294 \uadf8\ub798\ud53d \uc131\ub2a5\uc744 \ubc1c\ud718\ud558\ub294\uc9c0 \uc5ec\ubd80")))),(0,n.kt)("h2",v({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrom-ART\ub97c \uc7a5\ucc29\ud55c MCU")),(0,n.kt)("h2",v({},{id:"do"}),"\uc2e4\ud589"),(0,n.kt)("p",null,"Chrom-ART\ub294 STM32CubeMX\uc5d0 ",(0,n.kt)("em",{parentName:"p"}," Multimedia -> DMA2D\xa0"),"\ubc94\uc8fc \uc544\ub798\uc5d0\uc11c \uad6c\uc131\ub429\ub2c8\ub2e4. DMA2D\ub97c \ud65c\uc131\ud654\ud558\uace0 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub530\ub77c ",(0,n.kt)("em",{parentName:"p"},"\uc804\uc1a1")," \ubaa8\ub4dc\uc640\xa0",(0,n.kt)("em",{parentName:"p"},"\uc0c9\uc0c1")," \ubaa8\ub4dc\ub97c \uad6c\uc131\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c\ub294 DMA2D\uac00 \uba54\ubaa8\ub9ac\uac04 \uc804\uc1a1 \ubaa8\ub4dc \ubc0f RGB565 \uc0c9\uc0c1 \ubaa8\ub4dc\ub97c \uc704\ud574 \ud65c\uc131\ud654 \ubc0f \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub9de\ub294 \uc0c9\uc0c1 \ubaa8\ub4dc\ub97c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART \uad6c\uc131"),(0,n.kt)("p",null,"DMA2D \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c \uc561\uc138\uc2a4\ub97c \ub3d9\uae30\ud654\ud558\ub294 \ub370 \uc911\uc694\ud569\ub2c8\ub2e4. \uc544\ub798\uc640 \uac19\uc774 STM32CubeMX NVIC \uc124\uc815\uc5d0\uc11c \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\uc758 \ud65c\uc131\ud654(NVIC \ud0ed) \uc5ec\ubd80\uc640 \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc704\ud55c \ucf54\ub4dc \uc0dd\uc131\uc758 \ud65c\uc131\ud654(Code Generation \ud0ed) \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \uc774 \ub2e8\uacc4\uc5d0\uc11c \uc6b0\uc120\uc21c\uc704\ub294 \uc911\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART \uc778\ud130\ub7fd\ud2b8 \ud65c\uc131\ud654"),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec \ucf54\ub4dc \uc0dd\uc131 \ud65c\uc131\ud654"),(0,n.kt)("h3",v({},{id:"write-to-framebuffer-memory"}),"\ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac\uc5d0 \uc4f0\uae30"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \ub300\uc0c1 \uba54\ubaa8\ub9ac(\ub808\uc9c0\uc2a4\ud130\uc5d0\uc11c \uba54\ubaa8\ub9ac\ub85c)\uc758 \uc0ac\uac01\ud615\uc5d0 \ud2b9\uc815 \uc0c9\uc0c1\uc744 \ucc44\uc6b0\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uac1c\uc694\uc785\ub2c8\ub2e4. MCU\uc5d0\uc11c \uad6c\uccb4\uc801\uc778 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c STM32Cube \ud38c\uc6e8\uc5b4 \ud329\uc744 \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include "stm32f7xx_hal.h"\n#include "stm32f7xx_hal_dma2d.h"\n...\n\nuint32_t color = 0xF800; //Red in RGB565\n\nhdma2d.Init.Mode = DMA2D_R2M;\nhdma2d.Init.ColorMode = DMA2D_RGB565;\n\nMODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);\nMODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);\nMODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);\n\nhdma2d.LayerCfg[1].InputColorMode = CM_RGB565;\nhdma2d.LayerCfg[1].InputOffset = 0;\n\nHAL_DMA2D_ConfigLayer(&hdma2d, 1);\n\nHAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);\n\n')),(0,n.kt)("p",null,"STM32CubeMX\uc5d0 Transfer Completed \uc124\uc815\uc774 \uc62c\ubc14\ub974\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba74 \uc774 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ud578\ub4e4\ub7ec\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;\n")),(0,n.kt)("p",null,"\ub610\ud55c \ud578\ub4e4\ub7ec\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud558\uc5ec Transfer Completed \uc778\ud130\ub7fd\ud2b8 \uad6c\uc131\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'extern "C" {\n    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)\n    {\n        //Ensure that you this callback is called\n    }\n}\n')),(0,n.kt)("p",null,"More examples of using ChromART can be found in the CubeFW examples. Link to examples for the STM32F429 Discovery board is given below."),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(i.Z,{to:"https://github.com/STMicroelectronics/STM32CubeF4/tree/master/Projects/STM32F429I-Discovery/Examples/DMA2D",mdxType:"Link"},"STM32F429I-Discovery Examples for DMA2D on GitHub"))),(0,n.kt)("h3",v({},{id:"performance-is-as-expected"}),"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,n.kt)("p",null,"Chrom-ART\uc758 \uc131\ub2a5\uc744 \uba54\ubaa8\ub9ac \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc218\ud589\ud55c \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ub098\uc628 \uc131\ub2a5 \uacb0\uacfc\uc640 \ube44\uad50\ud558\uc2ed\uc2dc\uc624. Chrom-ART\ub97c \ud65c\uc6a9\ud558\ub294 \ucf54\ub4dc\ub294 \uc774\uc804\uc758 CPU \uc77d\uae30/\uc4f0\uae30 \uc791\uc5c5\ubcf4\ub2e4 \uc131\ub2a5\uc774 \ub6f0\uc5b4\ub0a0 \uac83\uc73c\ub85c \uae30\ub300\ub429\ub2c8\ub2e4."),(0,n.kt)(d.Z,{mdxType:"Tip"},"\ubc00\ub9ac\ucd08\ub85c \uce74\uc6b4\ud305\ud558\ub294 sysTick\ubcf4\ub2e4 \uc815\ud655\ud558\uac8c \uc911\ub2e8\uc810 \uac04\uc5d0 \uc18c\uc694\ub41c \ud074\ub85d \uc0ac\uc774\ud074\uc744 \uce21\uc815\ud558\ub824\uba74 `CCSTEP` \ud074\ub85d \uc0ac\uc774\ud074 \ub808\uc9c0\uc2a4\ud130\uc758 \uac12\uc744 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624."))}T.isMDXComponent=!0}}]);