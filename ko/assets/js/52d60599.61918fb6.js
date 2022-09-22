"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9797],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,g=h["".concat(u,".").concat(m)]||h[m]||p[m]||c;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const c=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)}}t.Z=a},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,c=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:c,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:c,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},58890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return T},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),c=n(70814),a=n(82985),i=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&m(e,n,t[n]);return e};const f={id:"updating-to-a-new-touchgfx-version",title:"\uc0c8\ub85c\uc6b4 TouchGFX \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uae30"},d=void 0,v={unversionedId:"miscellaneous/updating-to-a-new-touchgfx-version",id:"miscellaneous/updating-to-a-new-touchgfx-version",title:"\uc0c8\ub85c\uc6b4 TouchGFX \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uae30",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/updating-to-a-new-touchgfx-version",permalink:"/ko/docs/miscellaneous/updating-to-a-new-touchgfx-version",draft:!1,tags:[],version:"current",frontMatter:{id:"updating-to-a-new-touchgfx-version",title:"\uc0c8\ub85c\uc6b4 TouchGFX \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uae30"},sidebar:"docs",previous:{title:"Miscellaneous",permalink:"/ko/docs/category/miscellaneous-1"},next:{title:"\uc9c0\uc6d0 \uc694\uccad",permalink:"/ko/docs/miscellaneous/getting-help"}},b={},y=[{value:"TouchGFX Generator \uc5c5\ub370\uc774\ud2b8",id:"update-touchgfx-generator",level:2}],x={toc:y};function T(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},x),m),u(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud588\uc744 \ub54c \uc0dd\uc131\ub41c .touchgfx \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131 \uc2dc \uc0ac\uc6a9\ub418\ub294 TouchGFX\uc640 \ubc84\uc804\uc774 \uac19\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uace0 \ud5a5\ud6c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \ud574\ub2f9\ud558\ub294 \ud2b9\uc815 \ubc84\uc804\uc758 TouchGFX\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX\ub294 \ud558\uc704 \ud638\ud658\ub418\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uac04\ub2e8\ud55c \uc808\ucc28\ub9cc \ub530\ub974\uba74 \uc774\uc804 \ubc84\uc804\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 TouchGFX\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0c8\ub85c \uc124\uce58\ud55c \ubc84\uc804\uc758 TouchGFX Designer\ub97c \uba3c\uc800 \uc5f4\uace0, \ucd5c\uadfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub610\ub294 Open \ub300\ud654\uc0c1\uc790\ub97c \ud1b5\ud574 \uc774\uc804 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc5f4\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud31d\uc5c5 \ucc3d\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",mdxType:"Figure"},"Update \ud31d\uc5c5 \ucc3d"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\ud31d\uc5c5 \ucc3d\uc5d0\ub3c4 \uba85\uc2dc\ub418\uc5b4 \uc788\ub4ef\uc774 \uc5c5\ub370\uc774\ud130\ub97c \uc2e4\ud589\ud558\uae30 \uc804\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud56d\uc0c1 \ubc31\uc5c5\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"'Yes'\ub97c \ub204\ub974\uba74 \uc5c5\ub370\uc774\ud130\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud130\ub97c \ub9c8\uce58\uba74 TouchGFX Designer\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc5f4\ub9ac\uace0, \uc774\uc81c \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc744 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub4dc\ubb3c\uc9c0\ub9cc \uc0c8\ub85c\uc6b4 TouchGFX \ubc84\uc804\uc73c\ub85c \uc644\uc804\ud558\uac8c \uc5c5\ub370\uc774\ud2b8\ud558\ub824\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc218\ub3d9\uc73c\ub85c \ubcc0\uacbd\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0c8 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uba74\uc11c \ucd94\uac00\uc801\uc778 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uba74 ",(0,r.kt)("a",g({parentName:"p"},{href:"known-issues"}),"\uc54c\ub824\uc9c4 \ubb38\uc81c \uc139\uc158"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",g({},{id:"update-touchgfx-generator"}),"TouchGFX Generator \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("p",null,"X-Cube-TouchGFX-4.17.0\uc744 STM32CubeMX 6.2.1\uc5d0 \uc124\uce58\ud55c \ud6c4, \ud639\uc740 \ub098\uc911\uc5d0 ",(0,r.kt)("a",g({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"}),"TouchGFX Generator\ub97c STM32CubeMX\uc5d0 \uc124\uce58\ud558\uae30"),"\uc5d0 \ub530\ub77c \uc124\uce58\ud55c \ud6c4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc5f4\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Software Packs")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Select Components"),"\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4(\ud639\uc740 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Alt + U\ub97c \ub204\ub985\ub2c8\ub2e4."),")"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",mdxType:"Figure"},"Software Pack Component Selector"),(0,r.kt)("p",null,"Details and warnings \ucc3d\uc5d0\uc11c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud560 \ubc84\uc804\uc744 \uc120\ud0dd\ud558\uace0 Try\ub97c \ub204\ub985\ub2c8\ub2e4. \uadf8\ub7ec\uba74 STM32CubeMX\uac00 \ucd94\uc801 \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc2e4\ud589\ud558\uace0 \uadf8 \uacb0\uacfc\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc774\ub54c \uc77c\ubd80 \ucc38\uc870 \ub9e4\uac1c\ubcc0\uc218(refparameter)\ub294 \uc0c8 \ubc84\uc804\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uc9c0 \ubabb\ud558\uae30 \ub54c\ubb38\uc5d0 null \uac12\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4. Accept\ub97c \uc120\ud0dd\ud558\uc5ec \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc800\uc7a5\ud55c \ub2e4\uc74c OK\ub97c \ub20c\ub7ec Software Pack Component Selector \ucc3d\uc744 \ub2eb\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",mdxType:"Figure"},"Software Pack Component Selector : TouchGFX Generator\uc5d0 \uc0ac\uc6a9\ud560 \ub9e4\uac1c\ubcc0\uc218 \ub9c8\uc774\uadf8\ub808\uc774\uc158"),(0,r.kt)("p",null,"\uc774\uc81c TouchGFX Generator\uac00 \uc0c8 \ubc84\uc804\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ub418\uace0, \ubcc0\uacbd \ub0b4\uc6a9\uc774 .ioc \ud30c\uc77c\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. STM32CubeMX\ub97c \uc0ac\uc6a9\ud574 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uae30 \uc804\uc5d0 \uba3c\uc800 TouchGFX Generator\uc758 \uad6c\uc131\uc744 \uac80\uc99d\ud558\uc2ed\uc2dc\uc624. STM32CubeMX\ub97c \uc0ac\uc6a9\ud574 \ucf54\ub4dc \uc0dd\uc131\uc744 \ub9c8\ucce4\uc73c\uba74 \uc774\uc81c TouchGFX Designer\ub97c \uc5f4\uc5b4\uc11c UI\ub97c \uac80\uc99d\ud558\uace0 \ub098\uc11c TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc740 TouchGFX\ub97c \uc0c8 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 2\ub2e8\uacc4 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 STM32CubeMX\uc640 TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",null,"STM32CubeMX\uc5d0\uc11c Generate Code \ubc84\ud2bc\uc744 \ub204\ub974\uba74 TouchGFX Generator\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 C++ \ucf54\ub4dc\uac00 \ub514\uc2a4\ud06c\uc5d0 \uba3c\uc800 \uc791\uc131\ub429\ub2c8\ub2e4.")))}T.isMDXComponent=!0}}]);