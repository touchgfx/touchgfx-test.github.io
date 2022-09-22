"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2606],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},15721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return k}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={id:"running-without-rtos",title:"\u5728\u65e0RTOS\u7684\u60c5\u51b5\u4e0b\u57fa\u4e8eTouchGFX\u786c\u4ef6\u6a21\u677f\u4e0a\u8fd0\u884c\u9879\u76ee"},f=void 0,h={unversionedId:"development/scenarios/running-without-rtos",id:"development/scenarios/running-without-rtos",title:"\u5728\u65e0RTOS\u7684\u60c5\u51b5\u4e0b\u57fa\u4e8eTouchGFX\u786c\u4ef6\u6a21\u677f\u4e0a\u8fd0\u884c\u9879\u76ee",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/running-without-rtos",permalink:"/zh-CN/docs/development/scenarios/running-without-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"running-without-rtos",title:"\u5728\u65e0RTOS\u7684\u60c5\u51b5\u4e0b\u57fa\u4e8eTouchGFX\u786c\u4ef6\u6a21\u677f\u4e0a\u8fd0\u884c\u9879\u76ee"},sidebar:"docs",previous:{title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u4e3a\u89e6\u53d1\u5668",permalink:"/zh-CN/docs/development/scenarios/example-gpio"},next:{title:"\u5411STM32CubeMX\u5de5\u7a0b\u4e2d\u6dfb\u52a0\u6587\u4ef6",permalink:"/zh-CN/docs/development/scenarios/adding-files-to-stm32cubemx-projet"}},g={},k=[{value:"\u4eceTouchGFX\u786c\u4ef6\u6a21\u677f\u542f\u52a8\u4e00\u4e2a\u9879\u76ee",id:"starting-a-project-from-a-touchgfx-board-setup",level:2},{value:"\u6253\u5f00\u80cc\u5149",id:"turning-on-the-backlight",level:3},{value:"\u6e05\u9664\u4ee3\u7801",id:"cleaning-the-code",level:3}],T={toc:k};function b(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},T),s),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u672c\u8282\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u57fa\u4e8eTouchGFX\u786c\u4ef6\u6a21\u677f\uff08TouchGFX Desginer\u4e2d\u5df2\u6709\u7684ST\u5f00\u53d1\u5957\u4ef6\u4e4b\u4e00\uff09\uff0c\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884cTouchGFX\u9879\u76ee\u3002 \u672c\u6587\u4e0d\u9488\u5bf9\u4eceSTM32CubeMX\u6216STM32CubeIDE\u5f00\u59cb\u7684\u5b9a\u5236\u9879\u76ee\u3002"),(0,r.kt)("h2",m({},{id:"starting-a-project-from-a-touchgfx-board-setup"}),"\u4eceTouchGFX\u786c\u4ef6\u6a21\u677f\u542f\u52a8\u4e00\u4e2a\u9879\u76ee"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u63d0\u4f9b\u7684\u5927\u591a\u6570TouchGFX\u786c\u4ef6\u6a21\u677f\u4e2d\uff0cOS FreeRTOS\u9ed8\u8ba4\u662f\u542f\u7528\u7684\u3002 \u5982\u9700\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0c\u5fc5\u987b\u9075\u5faa\u51e0\u4e2a\u6b65\u9aa4\u3002 \u8fd9\u91cc\u6211\u4eec\u5c06\u4ee5STM32H7B3-DK\u677f\u7684TouchGFX\u786c\u4ef6\u6a21\u677f\u4e3a\u4f8b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4eceTouchGFX Designer\u521b\u5efa\u4e00\u4e2a\u9879\u76ee\uff08\u4f7f\u7528STM32H7B3-DK\u786c\u4ef6\u6a21\u677f\uff09\u5e76\u751f\u6210\u4ee3\u7801\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528STM32CubeMX\u6253\u5f00\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".ioc"),"\u6587\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728STM32CubeMX\u754c\u9762\uff0c\u5bfc\u822a\u5230",(0,r.kt)("em",{parentName:"p"},"\u201cMiddleware\uff08\u4e2d\u95f4\u4ef6\uff09"),"\u201d ->> ",(0,r.kt)("em",{parentName:"p"},"FreeRTOS"),"\u8bbe\u7f6e\uff0c\u5e76\u7981\u7528FreeRTOS"))),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",mdxType:"Figure"},"STM32CubeMX\u4e2dSTM32H7B3-DK\u677f\u7684FreeRTOS\u8bbe\u7f6e"),(0,r.kt)("h3",m({},{id:"turning-on-the-backlight"}),"\u6253\u5f00\u80cc\u5149"),(0,r.kt)("p",null,"\u5728\u5927\u591a\u6570TouchGFX\u786c\u4ef6\u6a21\u677f\u4e2d\uff0c\u663e\u793a\u5668\u7684\u80cc\u5149\u6700\u521d\u662f\u5173\u95ed\u7684\u3002 \u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u9632\u6b62\u5728\u5f00\u53d1\u677f\u542f\u52a8\u65f6\u7b2c\u4e00\u4e2atick\u671f\u95f4\u51fa\u73b0\u6545\u969c\u663e\u793a\u3002 \u5f53\u7b2c\u4e00\u4e2a\u5e27\u7f13\u5b58\u533a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()"),"\u51fd\u6570\uff08\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target"),"\u6587\u4ef6\u5939\u4e0b\uff09\u4e2d\u5c31\u7eea\u65f6\uff0c\u80cc\u5149\u6253\u5f00\u3002 \u5f53\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()"),"\u51fd\u6570\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u8c03\u7528\uff0c\u610f\u5473\u7740\u5728\u5e27\u7f13\u5b58\u533a\u4ecd\u7136\u6b63\u786e\u66f4\u65b0\u65f6\uff0c\u663e\u793a\u5668\u6c38\u8fdc\u4e0d\u4f1a\u6253\u5f00\u3002 \u89e3\u51b3\u65b9\u6848\u662f\u5728\u542f\u52a8\u65f6\u6253\u5f00\u80cc\u5149\uff0c\u65b9\u6cd5\u662f\u5c06LTDC_HSYNC\u548cVSYNC\u5f15\u811a\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"p"},"HIGH"),"\u3002"),(0,r.kt)("ol",m({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230",(0,r.kt)("em",{parentName:"li"},"\u7cfb\u7edf\u6838\u5fc3"),"\u4e2d>\u7684",(0,r.kt)("em",{parentName:"li"},"GPIO\u8bbe\u7f6e -> GPIO"),"\u90e8\u5206\u3002 \u67e5\u627e\u8fde\u63a5\u5230\u663e\u793a\u5668\u80cc\u5149\u7684\u5f15\u811a\uff0c\u5e76\u5c06GPIO\u8f93\u51fa\u7535\u5e73\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"HIGH"),"\u3002 \u4e0eSTM32H7B3-DK\u5f00\u53d1\u677f\u5bf9\u5e94\u7684\u5f15\u811a\u662f",(0,r.kt)("em",{parentName:"li"},"PA1\uff08"),"\u7528\u6237\u6807\u7b7e\uff1aLCD_BL_CTRL\uff09\u548c",(0,r.kt)("em",{parentName:"li"},"PA2"),"\uff08\u7528\u6237\u6807\u7b7e\uff1aLCD_ON/OFF\uff09\u3002")),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/set-pins-high-417.png",mdxType:"Figure"},"STM32H7B3-DK\u5f00\u53d1\u677f\u6253\u5f00\u80cc\u5149"),(0,r.kt)("ol",m({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"\u4eceSTM32CubeMX\u751f\u6210\u4ee3\u7801\uff0c\u7136\u540e\u4eceTouchGFX Designer\u751f\u6210\u4ee3\u7801\u3002")),(0,r.kt)("h3",m({},{id:"cleaning-the-code"}),"\u6e05\u9664\u4ee3\u7801"),(0,r.kt)("p",null,"STM32CubeMX\u548cTouchGFX Generator\u4e0d\u80fd\u6e05\u9664\u5bf9RTOS\u51fd\u6570\u7684\u6f5c\u5728\u8c03\u7528\uff0c\u5982\u679c\u5b83\u4eec\u4f4d\u4e8e\u201c\u7528\u6237\u4ee3\u7801\u201d\u4e4b\u4e0b\u3002 \u4e8e\u662f\uff0c\u6709\u5fc5\u8981\u624b\u52a8\u6e05\u9664\u4ee3\u7801\u3002 \u5bf9\u4e8eSTM32H7B3-DK TBS\uff0c\u53ea\u9700\u8981\u4fee\u6539\u89e6\u6478\u63a7\u5236\u5668\u4ee3\u7801\u3002"),(0,r.kt)("ol",m({},{start:6}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00\u5728\u9879\u76ee\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target"),"\u6587\u4ef6\u5939\u4e0b\u627e\u5230\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"STM32TouchController.cpp"),"\u6587\u4ef6\u3002 \u624b\u52a8\u5220\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"#include <cmsis_os.h>"),"<cmsis_os.h>\u548cif-\u8bed\u53e5\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"configASSERT(0)"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"Core/src"),"\u6587\u4ef6\u5939\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Freertos.c"),"\u6587\u4ef6\u3002"))),(0,r.kt)("p",null,"\u8981\u4eceTouchGFX Designer\u70e7\u5f55\u56fa\u4ef6\u5230\u60a8\u7684\u5f00\u53d1\u677f\u4e0a\uff0c\u9700\u8981\u901a\u8fc7\u5220\u9664\u6216\u6ce8\u91ca\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u4f9d\u8d56\u9879\u548c\u8def\u5f84\u6765\u6e05\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile"),"\uff08\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),"\u6587\u4ef6\u5939\u4e0b\uff09\u3002 \u8fd8\u9700\u8981\u4e3a\u4f7f\u7528\u7684\u5de5\u5177\u94fe/IDE\u6e05\u9664\u4e0d\u540c\u9879\u76ee\u4e2d\u6240\u6709\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u4f9d\u8d56\u9879\u548c\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u4eceTouchGFX\u786c\u4ef6\u6a21\u677f\u542f\u52a8\u7684\u9879\u76ee\u3002"))}b.isMDXComponent=!0}}]);