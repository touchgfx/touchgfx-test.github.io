"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4863],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=o,h=m["".concat(u,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=l},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},98042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return C}});var r=n(3905),o=n(44035),a=n(29415),l=n(39130),i=n(22425),u=n(70814),c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&g(e,n,t[n]);return e};const k={id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},v=void 0,f={unversionedId:"development/board-bring-up/how-to/01-create-project",id:"development/board-bring-up/how-to/01-create-project",title:"1. Create Project",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/01-create-project",permalink:"/ko/docs/development/board-bring-up/how-to/01-create-project",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},sidebar:"docs",previous:{title:"\uac1c\ubc1c \uc18c\uac1c",permalink:"/ko/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU Running",permalink:"/ko/docs/development/board-bring-up/how-to/02-cpu-running"}},M={},C=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc120\ud0dd",id:"user-code-sections",level:3},{value:"\ucd94\uac00 \uc790\ub8cc",id:"further-reading",level:2}],y={toc:C};function w(e){var t,n=e,{components:c}=n,g=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},y),g),p(t,d({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",b({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 STM32CubeMX\ub97c \uc0ac\uc6a9\ud574 \ud2b9\uc815 MCU\uc5d0 \ub300\ud55c \uc791\uc5c5 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\ub294 \uc774 \uc785\ubb38 \uac00\uc774\ub4dc\uc5d0 \ub098\uc640 \uc788\ub294 \ub098\uba38\uc9c0 \ub2e8\uacc4\ub4e4\uc758 \ud1a0\ub300\uac00 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud5a5\ud6c4 \ub2e8\uacc4\uc5d0\uc11c\ub294 STM32CubeMX\ub97c \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uac1c\uc120\ud558\uace0, \ud544\uc694\ud55c \ubaa8\ub4e0 \uc8fc\ubcc0 \uc7a5\uce58\uac00 \uc791\ub3d9\ud558\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc791\uc131 \ubc0f \ud1b5\ud569\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \ud504\ub85c\uc81d\ud2b8\ub294 \uc7a5\uae30\uac04 \uc9c0\uc18d \ubc0f \uc720\uc9c0\ub420 \uac83\uc785\ub2c8\ub2e4. \uc774\uc804 \ub2e8\uacc4\ub85c \ub3cc\uc544\uac00\uc11c \ub2e4\uc2dc \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc11c\ub85c \ub2e4\ub978 \ubc84\uc804\uc758 \uac00\uc6a9\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud55c \uc804\ub7b5\uc744 \uc774 \ub2e8\uacc4\uc5d0\uc11c \uacb0\uc815\ud574\uc57c\ud569\ub2c8\ub2e4.  \uc0c8 \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc6a9\uc774\ub098 \ud558\ub4dc\uc6e8\uc5b4 \uc7ac\uc810\uac80 \uc911 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc18c\uaddc\ubaa8 \ud14c\uc2a4\ud2b8 \ud504\ub85c\uadf8\ub7a8\uc774 \ub2e4\uc218 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc774 \ud504\ub85c\uc81d\ud2b8\uac00 \uc88b\uc740 \uc2dc\uc791\uc810\uc774 \ub418\uc5b4 \uc904 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",b({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\ubcf4\ub4dc\uc5d0 \ud50c\ub798\uc2f1\ud574\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c  STM32CubeMX\uc5d0 \uc0dd\uc131\ud558\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4. \ub514\ubc84\uac70 \uae30\ub2a5\uc744 \uac16\ucd98 IDE(\uc608: STM32CubeIDE \ub610\ub294 IAR Embedded Workbench)\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 MCU\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \ub514\ubc84\uae45 \ubc0f \uc2a4\ud15d \ub514\ubc84\uae45\uc744 \ud560 \uc218 \uc788\ub294\uc9c0\ub3c4 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub514\ubc84\uac70\uac00 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uac01\uc885 \uc704\uce58\uc5d0\uc11c \ub514\ubc84\uae45 \uba85\ub839\ubb38\uc744 \ucd9c\ub825\ud560 \ubc29\ubc95\uc744 \ucc3e\uc544\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74  \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub97c \ud1b5\ud574 \ucd9c\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",b({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",b({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\uac00 IDE\uc5d0\uc11c \uc5f4\ub9bc"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uac00 \uc62c\ubc14\ub974\uac8c \uc0dd\uc131\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \ucd94\uac00\uc801\uc778 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \uac1c\ubc1c\uc744 \uc704\ud55c \uc2dc\uc791\uc810\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8 \ucef4\ud30c\uc77c"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\ub294 \ub4dc\ub77c\uc774\ubc84\uc5d0\uc11c \uc62c\ubc14\ub974\uac8c \uc124\uc815\uc774 \ub418\uc5c8\uc73c\uba70 \uacbd\ub85c\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ub97c \ucd94\uac00\ub85c \uc791\uc131\ud558\uace0 \ud504\ub85c\uc81d\ud2b8\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \uc7ac\ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\uc911\ub2e8\uc810\uc5d0 \ub3c4\ub2ec\ud588\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\ub294 \ub514\ubc84\uae45\uc774 \uac00\ub2a5\ud558\uba70, \uc911\ub2e8\uc810\uc5d0\uc11c \uba48\ucd94\uac8c \ub429\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8 \uc0c1\ud0dc\ub97c \uac80\ud1a0\ud558\uc5ec \uc624\ub958\ub97c \uc870\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",b({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32 \uae30\ubc18 \ubcf4\ub4dc"),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub798\ubc0d/\ub514\ubc84\uae45 \uc778\ud130\ud398\uc774\uc2a4(ST-LINK, JLINK \ub4f1)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX \uc124\uce58"),(0,r.kt)("li",{parentName:"ul"},"IDE \uc124\uce58(STM32CubeIDE, IAR Embedded Workbench, Keil uVision \ub4f1)")),(0,r.kt)("h2",b({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"\uc774\uc81c STM32CubeMX\uc5d0\uc11c \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ub2e8\uacc4\ub4e4\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 STM32F429 MCU\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubb3c\ub860 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c MCU\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,'STM32CubeMX\uc758 "Start My Project from MCU"\uc5d0\uc11c  "ACCESS TO MCU SELECTOR"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,r.kt)("p",null,"STM32 \ud3c9\uac00 \ud0a4\ud2b8(\uc608: STM32F429 Discovey \ubcf4\ub4dc)\ub97c \uae30\ubc18\uc73c\ub85c \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\ub4dc\uc6e8\uc5b4\uac00 \ud3c9\uac00 \ud0a4\ud2b8 \uc911 \ud558\ub098\ub97c \uae30\ubc18\uc73c\ub85c \uc124\uacc4\ub41c \uacbd\uc6b0\uc5d0\ub294 \uc774\uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ud574\ub2f9 MCU\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 STM32F429ZIT6U\ub97c \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx02.png",noShadow:!1,width:"600",mdxType:"Figure"},"MCU \uc120\ud0dd"),(0,r.kt)("p",null,'"Project Manager" \ud0ed\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc774\ub984\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ubb3c\ub860 \uc0c8 \ud504\ub85c\uc81d\ud2b8\uc758 \uc704\uce58\ub3c4 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "Application Structure"\ub85c \uac00\uc11c "Advanced"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 "Toolchain / IDE"\ub85c \uac00\uc11c IDE\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 IAR\uc744 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4:'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx03.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984 \ubc0f IDE \uc124\uc815"),(0,r.kt)("p",null,'\uc624\ub978\ucabd \uc0c1\ub2e8 \ubaa8\uc11c\ub9ac\uc758 "Generate Code" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc120\ud0dd\ud55c MCU \uc81c\ud488\uad70(F4/F7/H7)\uc5d0\uc11c\uc758 \uccab \ubc88\uc9f8 \ud504\ub85c\uc81d\ud2b8\uc778 \uacbd\uc6b0, STM32CubeMX\ub294 \ud574\ub2f9\ub418\ub294 STM32Cube \ud38c\uc6e8\uc5b4 \ud328\ud0a4\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uac83\uc73c\ub85c \uc790\ub3d9\uc73c\ub85c \uc81c\uc548\ud569\ub2c8\ub2e4. \ucd94\ud6c4 \uc0ac\uc6a9\uc744 \uc704\ud574 \ucd5c\uc2e0 \ubc84\uc804\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub3c4\ub85d \uc774\ub97c \uc218\ub77d\ud558\uc2ed\uc2dc\uc624.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx04.png",noShadow:!1,width:"600",mdxType:"Figure"},"STM32CubeMX\ub294 STM32Cube \ud38c\uc6e8\uc5b4\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,'"Open Project"\ub97c \ud074\ub9ad\ud558\uc5ec IDE\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc5fd\ub2c8\ub2e4:'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx05.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ub428"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx06.png",noShadow:!1,width:"600",mdxType:"Figure"},"IAR Embedded Workbench\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uc5f4\uae30"),(0,r.kt)("p",null,"STM32CubeMX\uc5d0\uc11c \uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 MCU \uace0\uc720\uc758 \uc2a4\ud0c0\ud2b8\uc5c5 \ucf54\ub4dc, \uc778\ud130\ub7fd\ud2b8 \ud14c\uc774\ube14, \uc2dc\uc2a4\ud15c \ucd08\uae30\ud654 \ucf54\ub4dc, MCU\uc758 \ubaa8\ub4e0 \uc8fc\ubcc0 \uc7a5\uce58\uc5d0 \ub300\ud55c HAL \ub4dc\ub77c\uc774\ubc84\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c IDE\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c \ubc0f \ub514\ubc84\uae45\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. IAR\uc5d0\uc11c Project->Make\ub97c \ud074\ub9ad\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c\ud558\uace0, Project->Download and Debug\ub97c \ud074\ub9ad\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \ub514\ubc84\uae45\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",noShadow:!1,width:"600",mdxType:"Figure"},"IAR Embedded Workbench\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \ub514\ubc84\uae45"),(0,r.kt)("p",null,"IAR \ud504\ub85c\uc81d\ud2b8\ub294 STLink \ub514\ubc84\uac70\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ub429\ub2c8\ub2e4. \ub2e4\ub978 \uac83\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 IDE\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c Debugger \uc18d\uc131\uc744 \ubcc0\uacbd\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx08.png",noShadow:!1,width:"600",mdxType:"Figure"},"\uba54\uc778 \ub8e8\ud504\uac00 \uc5f0\uc18d\uc801\uc73c\ub85c \uc2e4\ud589 \uc911"),(0,r.kt)("p",null,"While \uba54\uc778 \ub8e8\ud504\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 \uc2e4\ud589 \uc911\uc778 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc911\ub2e8\uc810\uc744 \uc124\uc815\ud558\uc5ec \ub3c4\ub2ec \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uace0 \ub8e8\ud504\uc5d0 \ucf54\ub4dc\ub97c \uc77c\ubd80 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"IDE\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0b4\ud3b4\ubcf4\uba74\uc11c \uad6c\uc870\ub97c \uc775\ud788\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 SystemInit\uc5d0\uc11c \uba54\uc778 \ub8e8\ud504\uae4c\uc9c0 \uc0b4\ud3b4\ubcf4\uc2ed\uc2dc\uc624."),(0,r.kt)("h3",b({},{id:"user-code-sections"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc120\ud0dd"),(0,r.kt)("p",null,'\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \ud3b8\uc9d1\uc744 \uc2dc\uc791\ud558\uae30 \uc55e\uc11c STM32CubeMX\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 "User Code \uc139\uc158"\uc758 \uac1c\ub150\uc744 \uc774\ud574\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc758 Core/Src \ud3f4\ub354\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc18c\uc2a4 \ud30c\uc77c\uc740 STM32CubeMX\uc5d0\uc11c \uc0dd\uc131\ub41c \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 UART \ud65c\uc131\ud654\ub97c \uc704\ud574 \ub098\uc911\uc5d0 STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uad6c\uc131\uc744 \ubcc0\uacbd\ud560 \ub54c \uc774\ub7ec\ud55c \ud30c\uc77c \uc911 \uc77c\ubd80\uac00 \ub2e4\uc2dc \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\ub4e4 \uc911 \uc77c\ubd80 \ud30c\uc77c\uc5d0\ub294 \uc0bd\uc785\ub41c \ucf54\ub4dc\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8\uc77c \uaddc\uce59\uc744 \ub530\ub974\uc9c0 \uc54a\ub294 \ud55c, STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uac00 \ub2e4\uc2dc \uc0dd\uc131\ub420 \ub54c \ucf54\ub4dc\uac00 \uc190\uc2e4\ub429\ub2c8\ub2e4.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Code \uc139\uc158\uc5d0\uc11c\ub9cc \ucf54\ub4dc \uc791\uc131"))),(0,r.kt)("p",null,"User Code \uc139\uc158 \ubc16\uc5d0\uc11c \uc791\uc131\ud558\ub294 \ubaa8\ub4e0 \ucf54\ub4dc\ub294 STM32CubeMX\uc5d0 \uc758\ud574 \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud55c \uc608\ub85c Core/Src/main.c\uc758 \uccab \ud589\uc744 \uba87 \uc904 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),(0,r.kt)("p",null,"\uba54\uc778 \ud568\uc218\uac00 \uc2dc\uc791\ub420 \ub54c \uc5ec\uae30\uc5d0 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0\ub294 USER CODE BEGIN 1\uacfc USER CODE END 1 \uc0ac\uc774\uc5d0 \ubc30\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \ube14\ub85d \ubc16\uc5d0 \ucf54\ub4dc\ub97c \ubc30\uce58\ud558\uba74 STM32CubeMX\uc5d0 \uc758\ud574 \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,r.kt)(u.Z,{mdxType:"Caution"},"User Code \uc139\uc158 \ubc16\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc791\uc131\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucf54\ub4dc\ub294 STM32CubeMX\uc5d0\uc11c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub420 \ub54c \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",b({},{id:"further-reading"}),"\ucd94\uac00 \uc790\ub8cc"),(0,r.kt)("p",null,"\uc5ec\uae30\uc5d0 \ub9c1\ud06c\ub41c \ubb38\uc11c\ub4e4\uc5d0\ub294 CubeMX\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX \uc0ac\uc6a9\uc790 \ub9e4\ub274\uc5bc")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE \uad00\ub828 \uc790\ub8cc")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"STM32CubeMX\uc640 STM32Cube\uc5d0 \uad00\ud55c \ub300\uaddc\ubaa8 \uacf5\uac1c \uc628\ub77c\uc778 \uac15\uc88c")))))}w.isMDXComponent=!0}}]);