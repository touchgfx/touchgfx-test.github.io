"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5987],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},46206:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return k}});var r=n(3905),o=n(44035),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={id:"running-without-rtos",title:"TouchGFX Board Setup \uae30\ubc18\uc5d0\uc11c RTOS \uc5c6\uc774 \uc2e4\ud589\ud558\uae30"},f=void 0,g={unversionedId:"development/scenarios/running-without-rtos",id:"development/scenarios/running-without-rtos",title:"TouchGFX Board Setup \uae30\ubc18\uc5d0\uc11c RTOS \uc5c6\uc774 \uc2e4\ud589\ud558\uae30",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/running-without-rtos",permalink:"/ko/docs/development/scenarios/running-without-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"running-without-rtos",title:"TouchGFX Board Setup \uae30\ubc18\uc5d0\uc11c RTOS \uc5c6\uc774 \uc2e4\ud589\ud558\uae30"},sidebar:"docs",previous:{title:"\ud2b8\ub9ac\uac70 \uc5ed\ud560\uc744 \ud558\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8",permalink:"/ko/docs/development/scenarios/example-gpio"},next:{title:"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud30c\uc77c \ucd94\uac00",permalink:"/ko/docs/development/scenarios/adding-files-to-stm32cubemx-projet"}},h={},k=[{value:"TouchGFX Board Setup\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\ud558\uae30",id:"starting-a-project-from-a-touchgfx-board-setup",level:2},{value:"\ubc31\ub77c\uc774\ud2b8 \ucf1c\uae30",id:"turning-on-the-backlight",level:3},{value:"\ucf54\ub4dc \uc0ad\uc81c\ud558\uae30",id:"cleaning-the-code",level:3}],T={toc:k};function b(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},T),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX Designer\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ST \uac1c\ubc1c \ud0a4\ud2b8 \uc911 \ud558\ub098\uc5d0\uc11c TouchGFX Board Setup \uae30\ubc18\uc5d0\uc11c \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. STM32CubeMX\ub098 STM32CubeIDE\uc5d0\uc11c \uc2dc\uc791\ud558\ub294 \ucee4\uc2a4\ud140 \ud504\ub85c\uc81d\ud2b8\ub294 \uc774 \uc139\uc158\uc5d0\uc11c \ub2e4\ub8e8\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"starting-a-project-from-a-touchgfx-board-setup"}),"TouchGFX Board Setup\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\ud558\uae30"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub300\ubd80\ubd84\uc758 TouchGFX Board Setup\uc5d0\uc11c\ub294 OS FreeRTOS\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\uc6d0\ub429\ub2c8\ub2e4. \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 \uc2e4\ud589\ud558\ub824\uba74 \uba87 \ub2e8\uacc4\ub97c \ub530\ub77c\uc57c \ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 STM32H7B3-DK \ubcf4\ub4dc\uc5d0 TouchGFX Board Setup\uc744 \uc0ac\uc6a9\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"STM32H7B3-DK \ubcf4\ub4dc\uc5d0 TouchGFX Board Setup\uc744 \uc0ac\uc6a9\ud574 TouchGFX Designer \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uace0 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"STM32CubeMX\ub97c \uc0ac\uc6a9\ud574 \uc81c\uacf5\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},".ioc")," \ud30c\uc77c\uc744 \uc5fd\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"STM32CubeMX \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c ",(0,r.kt)("em",{parentName:"p"},"Middleware")," -> ",(0,r.kt)("em",{parentName:"p"},"FreeRTOS")," \uc124\uc815\uc73c\ub85c \uc774\ub3d9\ud55c \ud6c4 FreeRTOS\ub97c \ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4."))),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",mdxType:"Figure"},"STM32H7B3-DK\uc5d0 \ub300\ud55c STM32CubeMX\uc758 FreeRTOS \uc124\uc815"),(0,r.kt)("h3",m({},{id:"turning-on-the-backlight"}),"\ubc31\ub77c\uc774\ud2b8 \ucf1c\uae30"),(0,r.kt)("p",null,"TouchGFX Board Setup\uc5d0\uc11c\ub294 \ub300\uccb4\ub85c \ub514\uc2a4\ud50c\ub808\uc774 \ubc31\ub77c\uc774\ud2b8\uac00 \ucc98\uc74c\ubd80\ud130 \uaebc\uc838 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc720\ub294 \ubcf4\ub4dc\ub97c \ucc98\uc74c \uc2e4\ud589\ud558\uc5ec \ubd80\ud305\ud560 \ub54c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uae00\ub9ac\uce58\uac00 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574\uc11c\uc600\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target")," \ud3f4\ub354 \uc544\ub798)\uc5d0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()")," \ud568\uc218\uc5d0\uc11c \uccab \ubc88\uc9f8 \ud504\ub808\uc784 \ubc84\ud37c\uac00 \uc900\ube44 \ub418\uba74 \ubc31\ub77c\uc774\ud2b8\uac00 \ucf1c\uc9d1\ub2c8\ub2e4. \ud558\uc9c0\ub9cc OS \uc5c6\uc774 \uc2e4\ud589\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()")," \ud568\uc218\uac00 \ud638\ucd9c\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\ub354\ub77c\ub3c4 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \ucf1c\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub54c\ub294 LTDC_HSYNC \ud540\uacfc VSYNC \ud540\uc744 ",(0,r.kt)("em",{parentName:"p"},"HIGH"),"\ub85c \uc124\uc815\ud558\uba74 \uc2dc\uc791\ud560 \ub54c \ubc31\ub77c\uc774\ud2b8\uac00 \ucf1c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("ol",m({},{start:4}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"System Core")," -> ",(0,r.kt)("em",{parentName:"li"},"GPIO")," \uc139\uc158\uc5d0 \uc788\ub294 GPIO \uc124\uc815\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774 \ubc31\ub77c\uc774\ud2b8\uc5d0 \uc5f0\uacb0\ub41c \ud540\uc744 \ucc3e\uc544 GPIO \ucd9c\ub825 \ub808\ubca8\uc744 ",(0,r.kt)("em",{parentName:"li"},"HIGH"),"\ub85c \uc124\uc815\ud569\ub2c8\ub2e4. STM32H7B3-DK \ubcf4\ub4dc\uc5d0\uc11c\ub294 ",(0,r.kt)("em",{parentName:"li"},"PA1"),"(User label: LCD_BL_CTRL)\uacfc ",(0,r.kt)("em",{parentName:"li"},"PA2"),"(User label: LCD_ON/OFF)\uac00 \ud540\uc785\ub2c8\ub2e4.")),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/set-pins-high-417.png",mdxType:"Figure"},"STM32H7B3-DK\uc5d0\uc11c \ubc31\ub77c\uc774\ud2b8 \ucf1c\uae30"),(0,r.kt)("ol",m({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"STM32CubeMX\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud55c \ub2e4\uc74c TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",m({},{id:"cleaning-the-code"}),"\ucf54\ub4dc \uc0ad\uc81c\ud558\uae30"),(0,r.kt)("p",null,'STM32CubeMX\uc640 TouchGFX Generator\ub294 "USER CODE" \uc139\uc158\uc5d0 \uc788\uc744 \uacbd\uc6b0 RTOS \ud568\uc218\uc758 \uc7a0\uc7ac\uc801 \ud638\ucd9c \ucf54\ub4dc\ub97c \uc0ad\uc81c\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \uc774\ub54c\ub294 \ucf54\ub4dc\ub97c \uc218\ub3d9\uc73c\ub85c \uc0ad\uc81c\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\ub9cc, STM32H7B3-DK TBS\uc5d0 \ud55c\ud574\uc11c \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\ub97c \uc218\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.'),(0,r.kt)("ol",m({},{start:6}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud504\ub85c\uc81d\ud2b8\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target")," \ud3f4\ub354\uc5d0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"STM32TouchController.cpp")," \ud30c\uc77c\uc744 \uc5fd\ub2c8\ub2e4. if \ubb38\uc5d0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <cmsis_os.h>"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"configASSERT(0)"),"\ub97c \uc9c1\uc811 \uc0ad\uc81c\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Core/src")," \ud3f4\ub354\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Freertos.c")," \ud30c\uc77c\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4."))),(0,r.kt)("p",null,"TouchGFX Designer\uc758 \ubcf4\ub4dc\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \ud50c\ub798\uc2f1\ud558\ub824\uba74 \uba3c\uc800 OS \uad00\ub828 \uc885\uc18d\uc131\uacfc \uacbd\ub85c\ub97c \uc0ad\uc81c\ud558\uac70\ub098 \uc8fc\uc11d \ucc98\ub9ac\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc")," \ud3f4\ub354\uc5d0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile"),"\uc744 \uc0ad\uc81c\ud574\uc57c \ud569\ub2c8\ub2e4. \ub610\ud55c \ub3c4\uad6c \uccb4\uc778/IDE\ub97c \uc0ac\uc6a9\ud55c \uacbd\uc6b0\uc5d0\ub294 \ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\uc758 OS \uad00\ub828 \uc885\uc18d \uad00\uacc4\uc640 \uacbd\ub85c\uae4c\uc9c0 \ubaa8\ub450 \uc0ad\uc81c\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c TouchGFX Board Setup\uc5d0\uc11c \uc2dc\uc791\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub3c4 OS \uc5c6\uc774 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);