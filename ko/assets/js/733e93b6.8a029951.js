"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2649],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=i},97868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(93054),i=n(22425),o=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&s(e,n,t[n]);return e};const g={id:"03-display-internal",title:"3. \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294\ub514\uc2a4\ud50c\ub808\uc774",sidebar_label:"3. \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294\ub514\uc2a4\ud50c\ub808\uc774"},b=void 0,h={unversionedId:"development/board-bring-up/how-to/03-display-internal",id:"development/board-bring-up/how-to/03-display-internal",title:"3. \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294\ub514\uc2a4\ud50c\ub808\uc774",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/03-display-internal",permalink:"/ko/docs/development/board-bring-up/how-to/03-display-internal",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-display-internal",title:"3. \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294\ub514\uc2a4\ud50c\ub808\uc774",sidebar_label:"3. \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294\ub514\uc2a4\ud50c\ub808\uc774"},sidebar:"docs",previous:{title:"2. CPU Running",permalink:"/ko/docs/development/board-bring-up/how-to/02-cpu-running"},next:{title:"4. External RAM",permalink:"/ko/docs/development/board-bring-up/how-to/04-enable-external-ram"}},f={},y=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"\ubcd1\ub82c RGB \ub514\uc2a4\ud50c\ub808\uc774",id:"parallel-rgb-displays",level:3},{value:"\ub514\uc2a4\ud50c\ub808\uc774 GPIO",id:"display-gpio",level:4},{value:"LTDC \uad6c\uc131",id:"ltdc-configuration",level:4},{value:"\ud074\ub85d \uad6c\uc131",id:"clock-configuration",level:4},{value:"\ud504\ub808\uc784 \ubc84\ud37c \uc8fc\uc18c \uc124\uc815",id:"setting-the-framebuffer-address",level:4},{value:"Enabling LTDC interrupt",id:"enabling-ltdc-interrupt",level:4},{value:"\ud504\ub808\uc784\ub960 \ud655\uc778",id:"check-the-framerate",level:4},{value:"SPI \ub514\uc2a4\ud50c\ub808\uc774",id:"spi-display",level:3},{value:"SPI \uad6c\uc131",id:"spi-configuration",level:4},{value:"\ub514\uc2a4\ud50c\ub808\uc774 \uc0c9\uc0c1 \ud655\uc778",id:"checking-the-display-colors",level:2}],v={toc:y};function N(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},v),s),p(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",k({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub0b4\ubd80 RAM\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \ud53d\uc140 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud568\uc73c\ub85c\uc368 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uad6c\ub3d9\uc2dc\ucf1c\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ud560 \uc218 \uc788\uace0, \ub514\uc2a4\ud50c\ub808\uc774 \ub0b4\uc6a9\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ud558\ub294 \uac83 \uc678\uc5d0\ub3c4 \uc5b4\ub5a4 \uc624\ub958\ub3c4 \uc5c6\uc774 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc0c8 \ub370\uc774\ud130\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uc804\uc1a1\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uac83\uc785\ub2c8\ub2e4. \ub610\ud55c \uc804\uc1a1 \uc18d\ub3c4\uac00 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ud655\ubcf4\ud560 \uc218 \uc788\ub294 \ud504\ub808\uc784\ub960\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ubbc0\ub85c \uc804\uc1a1 \uc18d\ub3c4\ub3c4 \ud568\uaed8 \uce21\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc804 \uc139\uc158\uc5d0\uc11c \uc54c\uc544\ubcf4\uc558\ub4ef\uc774 \ub0b4\ubd80 RAM\uc740 \uc77d\uae30\uc640 \uc4f0\uae30\uac00 \ubaa8\ub450 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\uc5d0\uc11c \ub0b4\ubd80 RAM\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ubc30\uce58\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ubc18\ubcf5 \uc804\uc1a1\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"\ud504\ub808\uc784 \ubc84\ud37c"),"\uc758 \ud06c\uae30\ub294 \uc544\ub798 \uacf5\uc2dd\uc5d0 \ub530\ub77c \uacc4\uc0b0\ub41c\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud558\uc138\uc694:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\ub108\ube44 x \ub192\uc774 x bpp")),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \ud574\uc0c1\ub3c4\uac00 480 x 272\uc778 \uc77c\ubc18\uc801\uc778 16\ube44\ud2b8 \ub514\uc2a4\ud50c\ub808\uc774\ub294 480x272x16/8 \ubc14\uc774\ud2b8, \uc989, 261120 \ubc14\uc774\ud2b8\uc758 \uacf5\uac04\uc744 \ucc28\uc9c0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774 \ud06c\uae30\ub85c \ubbf8\ub8e8\uc5b4 \ubcfc \ub54c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ud558\uae30\uc5d0 \uadf8 \ud06c\uae30\uac00 \ub108\ubb34 \ud070 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uba74 \uc548 \ub429\ub2c8\ub2e4. \ub300\uc2e0\uc5d0 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uc77c\ubd80\ub9cc \uc5c5\ub370\uc774\ud2b8\ud558\ub3c4\ub85d \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec\ub97c \uad6c\uc131\ud558\uc2ed\uc2dc\uc624. \uc774\ub807\uac8c \ud558\uba74 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ud544\uc694\ud55c RAM\uc758 \uc6a9\ub7c9\uc744 \uc870\uc815\ud558\uace0 \uc774\ub97c \ub0b4\ubd80 RAM\uc5d0 \ub9de\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc720\ud615\uc740 \ud504\ub808\uc784 \ubc84\ud37c \uc804\uc1a1\uc5d0 \ud544\uc694\ud55c \uc124\uc815\uacfc \ucf54\ub4dc\uc5d0 \uc0c1\ub2f9\ud55c \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uccab \ubc88\uc9f8 \ub300\uc0c1\uc73c\ub85c LTDC\uc5d0 \uc5f0\uacb0\ub41c \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 SPI \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 \ucf54\ub4dc\uac00 \uc804\ud600 \ub2e4\ub97c \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc791\uc5c5\uacfc \ubaa9\ud45c\ub294 \ub611\uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",k({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc758 \ubaa9\ud45c\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc804\uc1a1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub610\ud55c \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ub0b4\uc6a9\uc744 \uc218\uc815\ud574\uc11c \uacc4\uc18d\ud574\uc11c \uc7ac\uc804\uc1a1\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\ub3c4 \ud655\uc778\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",k({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud45c\uc2dc \uc5ec\ubd80"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec \ub610\ub294 SPI\uc758 \uad6c\uc131 \ubc0f \ub3d9\uc791 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\uc5c5\ub370\uc774\ud2b8\ub41c \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud45c\uc2dc \uc5ec\ubd80"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uace0 \uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\uc0c9\uc0c1\uc774 \uc62c\ubc14\ub978\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"GPIO\uac00 \uc815\ud655\ud55c\uc9c0 \uc5ec\ubd80(LTDC)\uc640 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ub370\uc774\ud130 \ud615\uc2dd\uc774 \ud504\ub808\uc784 \ubc84\ud37c\uc640 \uc77c\uce58\ud558\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud504\ub808\uc784\ub960\uc774 \uc62c\ubc14\ub978\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud53d\uc140 \ud074\ub85d\uacfc \ud3ec\uce58(porch)\uac00 \ud544\uc694\ud55c \ud504\ub808\uc784\ub960\uc744 \ud655\ubcf4\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \uc5ec\ubd80")))),(0,r.kt)("h2",k({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud50c\ub808\uc774 \uc815\ubcf4(\uc77c\ubc18\uc801\uc73c\ub85c \uc81c\uc870\uc0ac \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4)"),(0,r.kt)("li",{parentName:"ul"},"MCU\uc640 \ub514\uc2a4\ud50c\ub808\uc774 \uac04 \uc5f0\uacb0 \uc815\ubcf4")),(0,r.kt)("h2",k({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774 \uc720\ud615\uc5d0 \ub530\ub77c \ud544\uc694\ud55c \uc124\uc815\uc774 \ub2e4\ub985\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc5b4\ub5a4 \uc720\ud615\uc774\ub4e0\uc9c0 \ub0b4\ubd80 RAM\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc62c\ubc14\ub978 \ud06c\uae30\ub85c \uc804\uc5ed \ubc30\uc5f4\uc744 \uc120\uc5b8\ud558\uae30\ub9cc \ud558\uba74 \uac04\ub2e8\ud558\uac8c \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"/* USER CODE BEGIN PV */\nuint16_t framebuffer[480*272];  //16 bpp framebuffer\n/* USER CODE END PV */\n")),(0,r.kt)("p",null,"\ub0b4\ubd80 RAM\uc758 \ud06c\uae30\uac00 \ubc30\uc5f4\uc744 \uc218\uc6a9\ud558\uae30\uc5d0 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc73c\uba74 480x200\uacfc \uac19\uc774 \ud574\uc0c1\ub3c4\ub97c \ub0ae\ucdb0\uc11c \ubc30\uc5f4\uc744 \uc120\uc5b8\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud55c \uba54\uc11c\ub4dc\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \uc720\ud615\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \uadf8\ub7fc \uc5b4\ub5bb\uac8c \ub2e4\ub978\uc9c0 \uc9c0\uae08\ubd80\ud130 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",k({},{id:"parallel-rgb-displays"}),"\ubcd1\ub82c RGB \ub514\uc2a4\ud50c\ub808\uc774"),(0,r.kt)("p",null,"MCU\uc5d0\uc11c LTDC \ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc5f0\uacb0\ub41c \ubcd1\ub82c RGB \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud574 \uba3c\uc800 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc640 \uac19\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c \uad6c\uc131 \uc791\uc5c5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c GPIO \uc5f0\uacb0 \uad6c\uc131"),(0,r.kt)("li",{parentName:"ul"},"LTDC \ucee8\ud2b8\ub864\ub7ec \uad6c\uc131"),(0,r.kt)("li",{parentName:"ul"},"LTDC \ud53d\uc140 \ud074\ub85d \uad6c\uc131"),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784 \ubc84\ud37c \uc8fc\uc18c \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\ub960 \ud655\uc778")),(0,r.kt)("p",null,"\uc124\uba85 \uc608\uc81c\uc5d0\uc11c\uc640 \uac19\uc774 STM32F746Discovery \ud3c9\uac00 \ud0a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \ubcf4\ub4dc\uc5d0\ub294 480*272 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \uc7a5\ucc29\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",k({},{id:"display-gpio"}),"\ub514\uc2a4\ud50c\ub808\uc774 GPIO"),(0,r.kt)("p",null,"\uc774 \ub514\uc2a4\ud50c\ub808\uc774\ub294 24 BPP \ubaa8\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\ubbc0\ub85c LTDC\uc640 \ub514\uc2a4\ud50c\ub808\uc774 \uac04\uc758 \uc5f0\uacb0\uc744 \uc704\ud574 24\uac1c\uc758 GPIO\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4. STM32CubeMX\uc5d0 Multimedia -> LTDC -> GPIO Settings \uc544\ub798\uc5d0\uc11c \uac00\uc7a5 \uc190\uc27d\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ub514\uc2a4\ud50c\ub808\uc774 GPIO \uad6c\uc131"),(0,r.kt)("p",null,"\ud53d\uc140 \uc804\uc1a1(\uc608: LTDC_B0)\uc744 \uc704\ud55c 24\uac1c\uc758 GPIO \uc678\uc5d0 4\uac1c\uc758 \ub514\uc2a4\ud50c\ub808\uc774 \uc81c\uc5b4 \uc2e0\ud638\ub97c \ud568\uaed8 \uad6c\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\uc2e0\ud638"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\ud568\uc218"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_CLK"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud53d\uc140 \ud074\ub85d. 24\uac1c \ub77c\uc778\uc5d0\uc11c \ud53d\uc140\uc744 \uc0d8\ud50c\ub9c1\ud574\uc57c \ud560 \ud0c0\uc774\ubc0d\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc2e0\ud638\ub97c \uc804\uc1a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_DE"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ub370\uc774\ud130 \ud65c\uc131\ud654 \ud65c\uc131\ud654\ub418\uba74 \ud53d\uc140\uc774 \uc804\uc1a1\ub428")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_HSYNC"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\uc218\ud3c9 \ub3d9\uae30\ud654 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ud53d\uc140 \ub77c\uc778 \uc2dc\uc791\uc810\uc744 \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud568")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_VSYNC"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\uc218\uc9c1 \ub3d9\uae30\ud654 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ud504\ub808\uc784 \uc2dc\uc791\uc810\uc744 \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud568")))),(0,r.kt)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uacc4\ub97c \ud655\uc778\ud558\uace0 \ud574\ub2f9\ud558\ub294 \uad6c\uc131 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h4",k({},{id:"ltdc-configuration"}),"LTDC \uad6c\uc131"),(0,r.kt)("p",null,"LTDC \uad6c\uc131\uc740  STM32CubeMX\uc5d0 Multimedia -> LTDC -> Parameter Settings \uc544\ub798\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"LTDC \ud30c\ub77c\ubbf8\ud130 \uad6c\uc131"),(0,r.kt)("p",null,"\ud65c\uc131 \ub108\ube44\uc640 \ub192\uc774\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \ud574\uc0c1\ub3c4\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4. \ub3d9\uae30\ud654 \ud384\uc2a4 \ub108\ube44\uc640 \ud3ec\uce58 \ub108\ube44\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \ub610\ud55c \uc2e0\ud638 \uadf9\uc131\ub3c4 \ud568\uaed8 \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \uadf8\ub808\uc774\ub85c \ud45c\uc2dc\ub41c \uac12\ub4e4\uc740 \ub2e4\ub978 \uac12\uc5d0\uc11c \uacc4\uc0b0\ub429\ub2c8\ub2e4. \uc774\ub4e4 \uac12\uc740 LTDC \ub808\uc9c0\uc2a4\ud130\uc5d0 \uae30\ub85d\ub418\ubbc0\ub85c \ucf54\ub4dc\uc5d0\uc11c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c Multimedia -> LTDC -> Layer Settings \uc544\ub798 LTDC \uacc4\uce35 \uad6c\uc131\uc73c\ub85c \uc774\ub3d9\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"LTDC \uacc4\uce35 \ud30c\ub77c\ubbf8\ud130 \uad6c\uc131"),(0,r.kt)("p",null,"\uc774 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 TouchGFX\uc5d0\uc11c\ub294 \ubcf4\ud1b5 1\uac1c\uc758 \uacc4\uce35\ub9cc \uc0ac\uc6a9\ud569\ub2c8\ub2e4. Layer 0\uc758 \ud574\uc0c1\ub3c4\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud06c\uae30\uc5d0 \ub9de\uc544\uc57c \ud569\ub2c8\ub2e4. \ud504\ub808\uc784 \ubc84\ud37c \uc8fc\uc18c\ub294 \ub098\uc911\uc5d0 \uc124\uc815\ud574\uc57c \ud558\ubbc0\ub85c \uc5ec\uae30\uc11c\ub294 \uc8fc\uc18c\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uace0 \uadf8\ub300\ub85c \ub450\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c \ubc30\uc5f4\uc744 \ub514\uc2a4\ud50c\ub808\uc774 \ud574\uc0c1\ub3c4\ubcf4\ub2e4 \uc791\uac8c \uc120\uc5b8\ud55c \uacbd\uc6b0\uc5d0\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud06c\uae30\uc5d0 \ub9de\uac8c \uacc4\uce35 \ud06c\uae30\ub97c \uc870\uc815\ud569\ub2c8\ub2e4. LTDC\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \ud53d\uc140\uc5d0 \ub300\ud55c \ubc30\uacbd \uc0c9\uc0c1\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4. \ubc30\uacbd \uc0c9\uc0c1\uc740 \ube68\uac04\uc0c9\ucc98\ub7fc \ub208\uc5d0 \uc798 \ub744\ub294 \uc0c9\uc73c\ub85c \uc124\uc815\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4(\ud30c\ub780\uc0c9: 0x00, \ub179\uc0c9: 0x00, \ube68\uac04\uc0c9: 0xFF)."),(0,r.kt)("h4",k({},{id:"clock-configuration"}),"\ud074\ub85d \uad6c\uc131"),(0,r.kt)("p",null,"\ud074\ub85d \uad6c\uc131 \uc5ed\uc2dc \uc911\uc694\ud569\ub2c8\ub2e4. \ud074\ub85d\uc740 \ubaa8\ub4e0 GPIO\uc640 LTDC\uc5d0\uc11c \ud65c\uc131\ud654\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud53d\uc140 \ud074\ub85d\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ud5c8\uc6a9\ub418\ub294 \ubc94\uc704\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-04.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ud074\ub85d \uad6c\uc131"),(0,r.kt)("p",null,"LTDC\ub294 HCLK, PCLK2, LCD_CLK \ub4f1 3\uac1c\uc758 \ud074\ub85d\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",k({},{id:"setting-the-framebuffer-address"}),"\ud504\ub808\uc784 \ubc84\ud37c \uc8fc\uc18c \uc124\uc815"),(0,r.kt)("p",null,"STM32CubeMX\uc5d0\uc11c \uacc4\uce35 0\uc758 \ud504\ub808\uc784 \ubc84\ud37c \uc8fc\uc18c\ub97c 0xC0000000\ub85c \uad6c\uc131\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uc8fc\uc18c\ub97c \ub0b4\ubd80 RAM\uc758 \ubc30\uc5f4 \uc8fc\uc18c\ub85c \ubcc0\uacbd\ud574\uc57c \ud569\ub2c8\ub2e4. STM32Cube \ud38c\uc6e8\uc5b4 HAL \ud568\uc218 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud558\uba74 \uc27d\uac8c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,r.kt)("p",null,"HAL \ud568\uc218\uc5d0\uc11c\ub294 \uacc4\uce35\uc5d0 1, 2\ub77c\uace0 \ubc88\ud638\uac00 \ubd99\uc9c0\ub9cc, STM32CubeMX\uc5d0\uc11c\ub294 0, 1\uc774\ub77c\uace0 \ubd99\uc2b5\ub2c8\ub2e4. \uc544\ub2c8\uba74 ",(0,r.kt)("em",{parentName:"p"},"MX_LTDC_Init(void)")," \ud568\uc218\uc5d0\uc11c STM32CubeMX\uac00 \uc0dd\uc131\ud55c \ucf54\ub4dc\uc5d0 \ub530\ub77c LTDC\uac00 \uc644\uc804\ud788 \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"LTDC \ucee8\ud2b8\ub864\ub7ec\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ubc18\ubcf5 \uc804\uc1a1\ud569\ub2c8\ub2e4. \ud45c\uc2dc\ub418\ub294 \uc774\ubbf8\uc9c0\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uac12\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ub2e4\ub978 \uac12 \ub610\ub294 \ud328\ud134\uc744 \uc804\uc1a1\ud574\ubcf4\uc2ed\uc2dc\uc624. \uc608\ub97c \ub4e4\uc5b4 memset\uc744 \uc0ac\uc6a9\ud558\uba74 \ud504\ub808\uc784 \ubc84\ud37c\ub97c 0xFF\ub85c \ud074\ub9ac\uc5b4\ud574\uc11c \ud770\uc0c9 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"Note"},"\uc77c\ubd80 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c\ub294 \ubc31\ub77c\uc774\ud2b8\ub97c \ucf1c\uc11c \ud504\ub808\uc784\uc774 \ub208\uc5d0 \ubcf4\uc774\uac8c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h4",k({},{id:"enabling-ltdc-interrupt"}),"Enabling LTDC interrupt"),(0,r.kt)("p",null,"The LTDC controller raises an interrupt for each frame, this interrupt must be enabled in the NVIC (core interrupt controller) to be able to handle the interrupt in your application."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-ltdc-interrupt-config.png",noShadow:!1,width:"600",mdxType:"Figure"},"LTDC interrupt configuration"),(0,r.kt)("p",null,"In the interrupt handler you must reenable the interrupt after each time it fires."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32f7xx_it.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{7}","{7}":!0}),"void LTDC_IRQHandler(void)\n{\n  /* USER CODE BEGIN LTDC_IRQn 0 */\n  /* USER CODE END LTDC_IRQn 0 */\n  HAL_LTDC_IRQHandler(&hltdc);\n  /* USER CODE BEGIN LTDC_IRQn 1 */\n  HAL_LTDC_ProgramLineEvent(&hltdc,0);\n  /* USER CODE END LTDC_IRQn 1 */\n}\n")),(0,r.kt)("h4",k({},{id:"check-the-framerate"}),"\ud504\ub808\uc784\ub960 \ud655\uc778"),(0,r.kt)("p",null,"The LTDC interrupt will be used to drive the application forward. \ub514\ubc84\uac70\ub97c \uc0ac\uc6a9\ud574 \uc774 \uc778\ud130\ub7fd\ud2b8\uac00 \ubc1c\uc0dd\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc778\ud130\ub7fd\ud2b8 \uac04\uc5d0 \uc18c\uc694\ub41c \uc2dc\uac04\uc740 \ubaa8\ub4e0 \ud53d\uc140 \ubc0f \ud3ec\uce58\uc5d0 \ub300\ud55c \ud074\ub85d \uc0dd\uc131 \uc2dc\uac04\uc744 \ud569\uc0b0\ud55c \uac83\uc785\ub2c8\ub2e4. \ud3ec\uce58\ub97c \uc870\uc815\ud574\uc11c \ud504\ub808\uc784\ub960\uc744 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud3ec\uce58\ub294 LTDC \uad6c\uc131\uc758 \uc77c\ubd80\uc600\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uc9c0\uc815\uc744 \ud1b5\ud574 Vfp(Vertical Front Porch) \ub97c \uac1c\uc120\ud558\uc5ec \ud504\ub808\uc784\ub960\uc744 \ub0ae\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\uc11c HAL_GetTick() \uc744 \uc0ac\uc6a9\ud558\uba74 \uc190\uc27d\uac8c \ud504\ub808\uc784\ub960\uc744 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32f7xx_it.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{6-8}","{6-8}":!0}),"volatile int last = 0;\nvolatile int diff = 0;\nvoid LTDC_IRQHandler(void)\n{\n  /* USER CODE BEGIN LTDC_IRQn 0 */\n  int now = HAL_GetTick();\n  diff = now - last;\n  last = now;\n  /* USER CODE END LTDC_IRQn 0 */\n  HAL_LTDC_IRQHandler(&hltdc);\n  ...\n")),(0,r.kt)("p",null,"\ucd08\ub2f9 60\uac1c \ud504\ub808\uc784\uc5d0\uc11c\ub294 \uac01 \ud504\ub808\uc784 \uac04\uc5d0 1000ms/60 = 16ms\uc758 \uc2dc\uac04\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h3",k({},{id:"spi-display"}),"SPI \ub514\uc2a4\ud50c\ub808\uc774"),(0,r.kt)("p",null,"\uc9c0\uae08\ubd80\ud130\ub294 SPI \ubc84\uc2a4\uc5d0 \uc5f0\uacb0\ub41c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc640 \uac19\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c \uad6c\uc131 \uc791\uc5c5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SPI \uc8fc\ubcc0 \uc7a5\uce58 \ubc0f GPIO \uad6c\uc131"),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub85d \ud655\uc778"),(0,r.kt)("li",{parentName:"ul"},"\ud544\uc694\ud55c \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc \uc791\uc131 \ub610\ub294 \uac80\uc0c9")),(0,r.kt)("h4",k({},{id:"spi-configuration"}),"SPI \uad6c\uc131"),(0,r.kt)("p",null,"STM32CubeMX\ub97c \uc2dc\uc791\ud558\uace0 SPI\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc740 STM32G081 \ud504\ub85c\uc81d\ud2b8\uc758 \uc608\uc785\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-05.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI \uad6c\uc131"),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774 \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 SPI \ud615\uc2dd(\ub370\uc774\ud130 \ud06c\uae30 \ubc0f \ube44\ud2b8 \uc21c\uc11c) \uc744 \ud655\uc778\ud558\uc2ed\uc2dc\uc624. 16\ube44\ud2b8 \uc6cc\ub4dc\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ub9ac\ud2c0 \uc5d4\ub514\uc5b8(Little-endian) \ubc14\uc774\ud2b8 \uc21c\uc11c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc774 \ud615\uc2dd\uc744 \uc218\ub77d\ud558\ub3c4\ub85d \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624. If not, then you have to convert data during transmission. Also pay attention to the clock polarity and clock phase. \uc774\ub4e4\uc740 \ub514\uc2a4\ud50c\ub808\uc774 \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0 \uc9c0\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"SPI \ud074\ub85d(\ube44\ud2b8 \uc804\uc1a1\ub960) \uc740 FCLK\uc5d0 \ub300\ud55c \ubd84\ubc30\uae30(divider) \ub85c \uc81c\uc5b4\ub429\ub2c8\ub2e4. \ucd5c\uc18c \uc81c\uc0b0\uae30\ub294 2\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 MCU\uac00 64MHz\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 \uacbd\uc6b0 SPI \ucd5c\ub300 \ube44\ud2b8 \uc804\uc1a1\ub960\uc740 32MBit/s\uac00 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"GPIO \ud0ed\uc5d0\uc11c SPI \uc8fc\ubcc0 \uc7a5\uce58\uc5d0 \ub300\ud574 \uc120\ud0dd\ud55c GPIO\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-06.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO \uad6c\uc131"),(0,r.kt)("p",null,"\uc624\ub978\ucabd\uc758 Pinout \ubcf4\uae30\uc5d0\uc11c GPIO\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-07.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO \uc120\ud0dd"),(0,r.kt)("p",null,"\uc774\uc81c \ub0a8\uc740 \uc791\uc5c5\uc740 SPI \ucc44\ub110\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uad6c\uc131\ud558\uace0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc804\uc1a1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. STM32CubeMX cannot generate this code for you, as it depends heavily on the display. For many displays it is necessary to send a sequence of commands and follow a specific power up sequence. \uadf8\ub7f0 \ub2e4\uc74c\uc5d0\ub294 \ubcf4\ud1b5 \uc0c9\uc0c1 \ubaa8\ub4dc\ub97c \uc124\uc815\ud558\uace0 \ub514\uc2a4\ud50c\ub808\uc774\ub97c ON\uc73c\ub85c \uc804\ud658\ud569\ub2c8\ub2e4. \uc774 \ubaa8\ub4e0 \uc124\uc815\uc740 \uacf5\uae09\uc5c5\uccb4\uac00 \uc81c\uacf5\ud558\ub294 \ub370\uc774\ud130 \uc2dc\ud2b8 \ub610\ub294 \uc608\uc81c\uc5d0 \uc9c0\uc815\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32Cube \ud38c\uc6e8\uc5b4\uc5d0\ub294 SPI \ud1b5\uc2e0\uc744 \uc0ac\uc6a9\ud558\ub294 \uc608\uc81c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. STM32Cube HAL\uc5d0\ub294 \ub2e4\uc591\ud55c \ud5ec\ud37c \ud568\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud55c \uae30\ubcf8 \ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32g0xx_hal_spi.h"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);\n")),(0,r.kt)("p",null,"\ud1b5\uc2e0\uc774 \uc548\uc815\uc801\uc73c\ub85c \uc218\ud589\ub420 \ub54c\uae4c\uc9c0 \uc774\ub7ec\ud55c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ucd94\ud6c4\uc5d0 \uc804\uc6a9 \ud568\uc218\ub97c \uc791\uc131\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc131\ub2a5\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"SPI\ub97c \uc778\uc2dd\ud558\ub294 \uc624\uc2e4\ub85c\uc2a4\ucf54\ud504\ub098 SPI to USB logger\ub294 SPI \ub514\uc2a4\ud50c\ub808\uc774 \ub4dc\ub77c\uc774\ubc84\ub97c \uc791\uc131\ud558\ub294 \ub370 \ub9e4\uc6b0 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"Note"},"SPI\uc5d0\uc11c \ub0ae\uc740 \uc8fc\ud30c\uc218\ubd80\ud130 \uc2dc\uc791\ud558\uba74 \ub178\uc774\uc988 \ubb38\uc81c\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",k({},{id:"checking-the-display-colors"}),"\ub514\uc2a4\ud50c\ub808\uc774 \uc0c9\uc0c1 \ud655\uc778"),(0,r.kt)("p",null,"At this point where you can transmit a framebuffer to the display, it is advisable to thoroughly check the display colors."),(0,r.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \uc0c9\uc0c1\uc744 \uae30\ub85d\ud558\uace0 \uc721\uc548 \uac80\uc0ac\ub97c \ud1b5\ud574 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc544\ub798\uc5d0 \uba87 \uac00\uc9c0 \uc608\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\ud14c\uc2a4\ud2b8"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ube68\uac04\uc0c9"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ube68\uac04\uc0c9\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\ub3c4 \ube68\uac04\uc0c9\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ub179\uc0c9"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ub179\uc0c9\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\ub3c4 \ub179\uc0c9\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud30c\ub780\uc0c9"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ud30c\ub780\uc0c9\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\ub3c4 \ud30c\ub780\uc0c9\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\uc554\uc0c9"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"50% \ube68\uac04\uc0c9\uc5d0 \ub300\ud55c \uc554\uc0c9(\uc608: 0x8000)\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc5b4\ub461\uac8c \ubcf4\uc5ec\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\uc0c9\uc0c1 \ubcc0\uacbd"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\ub9e4\ucd08\ub9c8\ub2e4 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ubcc0\uacbd\ud558\uc5ec \ub514\uc2a4\ud50c\ub808\uc774\uac00 \ud568\uaed8 \uc5c5\ub370\uc774\ud2b8\uac00 \ub418\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"RGB565 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uccb4\uacc4\uc5d0 \ub530\ub77c \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red\nuint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565\n// Put colors into the framebuffer\nfor(int i = 0; i < W*H; i++)\n{\n  framebuffer[i] = col;\n}\n")),(0,r.kt)("p",null,"24BPP \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uacbd\uc6b0, \ubc14\uc774\ud2b8 \ud3ec\uc778\ud130\ub97c \uc0ac\uc6a9\ud574 \ucf54\ub4dc\ub97c \ubcf4\ub2e4 \uc815\ud655\ud558\uac8c \uacf5\uc2dd\ud654\ud588\uc2b5\ub2c8\ub2e4(\uc0c9\uc0c1\uc740 BGR \uc21c\uc73c\ub85c \uc800\uc7a5)."),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"uint8_t* framebuffer[480*272*3];  //24 bit framebuffer\n...\nuint8_t *fb = framebuffer;\nwhile(fb < (uint8_t*)(framebuffer + (480*272*3)))\n{\n  *fb++ = 0x00; // Write blue color and increment pointer by one byte\n  *fb++ = 0x00; // Write green color\n  *fb++ = 0xFF; // Write red color\n}\n")),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/red-display-test.png",noShadow:!0,width:"600",mdxType:"Figure"},"\uc0c9\uc0c1\uc73c\ub85c \ud504\ub808\uc784 \ubc84\ud37c \ud45c\uc2dc"),(0,r.kt)("p",null,"Changing the framebuffer every second by using the LTDC line event callback:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"/* USER CODE BEGIN 4 */\nuint8_t r = 0x00, g = 0x00, b = 0x00;\nuint16_t col = 0;\nuint8_t color = 1;\nvoid HAL_LTDC_LineEventCallback(LTDC_HandleTypeDef* hltdc)\n{\n  static int count = 0;\n  count++;\n  if (count >= 60)\n  {\n    count = 0;\n      switch (color)\n      {\n      case 1:\n        r = 0xFF; g = 0x00; b = 0x00;\n        color = 2;\n        break;\n      case 2:\n        r = 0x00; g = 0xFF; b = 0x00;\n        color = 3;\n        break;\n      case 3:\n        r = 0x00; g = 0x00; b = 0xFF;\n        color = 1;\n        break;\n      default:\n        break;\n    }\n    col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565\n    // Put colors into the framebuffer\n    for(int i = 0; i < W*H; i++)\n    {\n      framebuffer[i] = col;\n    }\n  }\n}\n/* USER CODE END 4 */\n")))}N.isMDXComponent=!0}}]);