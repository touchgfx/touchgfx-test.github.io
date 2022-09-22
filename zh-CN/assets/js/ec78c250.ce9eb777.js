"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4760],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),a=null!=(t=e.width)?t:"100%",c=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:c},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},43041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(65407),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"getting-started",title:"\u5165\u95e8"},h=void 0,g={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"\u5165\u95e8",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/zh-CN/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"\u5165\u95e8"},sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/zh-CN/docs/introduction/installation"},next:{title:"Basic Concepts",permalink:"/zh-CN/docs/category/basic-concepts"}},v={},y=[{value:"TouchGFX Designer\u5feb\u901f\u5165\u95e8",id:"touchgfx-designer-quick-start",level:2},{value:"TouchGFX \u677f\u7ea7\u8bbe\u7f6e + \u793a\u4f8b \u53ca Demos",id:"application-template--ui-template",level:3},{value:"\u7279\u5b9a\u5355\u677f\u7684Demos",id:"online-applications",level:3},{value:"\u4e0b\u4e00\u6b65",id:"whats-next",level:2}],b={toc:y};function k(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),d),c(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4f7f\u7528TouchGFX\u524d\uff0c\u9700\u8981\u5b89\u88c5\u6700\u65b0\u7248\u7684TouchGFX\uff0c\u8fd9\u5c06\u5728",(0,r.kt)("a",m({parentName:"p"},{href:"installation"}),"\u5b89\u88c5"),"\u90e8\u5206\u4e2d\u4ecb\u7ecd\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/introduction/getting-started/computer-2-screens.png",noShadow:!0,mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u5b8c\u6210\u8be5\u64cd\u4f5c\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u5f00\u59cb\u7b2c\u4e00\u4e2aTouchGFX\u9879\u76ee\u3002 \u5f3a\u70c8\u5efa\u8bae\u60a8\u9605\u8bfb\u672c\u6587\u7684\u5173\u952e\u7ae0\u8282\uff0c\u4ee5\u719f\u6089\u6700\u57fa\u672c\u7684TouchGFX\u6982\u5ff5\u3002 \u6700\u57fa\u672c\u7684\u7ae0\u8282\u4e3a",(0,r.kt)("a",m({parentName:"p"},{href:"../development/development-introduction"}),"\u5f00\u53d1\u7b80\u4ecb"),"\uff0c\u6b64\u90e8\u5206\u5c06\u4e3a\u60a8\u4ecb\u7ecd\u5b8c\u6574\u7684TouchGFX\u9879\u76ee\u6240\u9700\u7684\u8f6f\u786c\u4ef6\u7ec4\u4ef6\uff0c\u4ee5\u53ca\u521b\u5efa\u5b83\u4eec\u6240\u9700\u7684\u64cd\u4f5c\u53ca\u5de5\u5177\u3002 \u8be5\u7ae0\u8282\u8fd8\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u9884\u5236\u7ec4\u4ef6\u5f00\u59cb\u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u3002"),(0,r.kt)("h2",m({},{id:"touchgfx-designer-quick-start"}),"TouchGFX Designer\u5feb\u901f\u5165\u95e8"),(0,r.kt)("h3",m({},{id:"application-template--ui-template"}),"TouchGFX \u677f\u7ea7\u8bbe\u7f6e + \u793a\u4f8b \u53ca Demos"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6e34\u671b\u5f00\u59cb\u4f53\u9a8cTouchGFX\uff0c\u8bf7\u5c1d\u8bd5\u4e00\u4e2aUI\u793a\u4f8b\u9879\u76ee\uff0c\u5e76\u5728STM32\u8bc4\u4f30\u5957\u4ef6\u4e0a\u8fd0\u884c\u8be5\u9879\u76ee\uff0c\u751a\u81f3\u53ef\u4ee5\u542f\u52a8TouchGFX Designer\u3002"),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"\u57fa\u4e8eTouchGFX\u677f\u7ea7\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a\u5e94\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728TouchGFX\u4e3b\u754c\u9762\uff0c\u6709\u5927\u91cf\u7684\u793a\u4f8b\u548cDEMO\u53ef\u4f9b\u9009\u62e9. \u60a8\u751a\u81f3\u53ef\u4ee5\u5c06\u8be5\u793a\u4f8b\u4e0e\u4e00\u7cfb\u5217STM32\u8bc4\u4f30\u5957\u4ef6\u7684\u677f\u7279\u5b9a\u4ee3\u7801\u76f8\u7ed3\u5408\uff0c\u4ee5\u4fbf\u7acb\u5373\u5728\u786c\u4ef6\u4e0a\u5c1d\u8bd5\u8be5\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709STM32\u8bc4\u4f30\u5957\u4ef6\uff0c\u60a8\u53ea\u9700\u5728PC\u4e0a\u8fd0\u884cTouchGFX\u5e94\u7528\u7a0b\u5e8f\u3002 \u5982\u679c\u60a8\u5e0c\u671b\u6839\u636e\u64cd\u4f5c\u6307\u5357\u5b8c\u6210\u7b2c\u4e00\u6b65\uff0c\u5219\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",m({parentName:"p"},{href:"../tutorials/tutorial-01"}),"\u6559\u7a0b"),"\u7ae0\u8282\u3002 \u8fd9\u91cc\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u542f\u52a8\u5e76\u8fd0\u884c\u9879\u76ee\uff0c\u6700\u7ec8\u5b8c\u6210\u4e00\u4e2a\u76f8\u5f53\u590d\u6742\u7684UI\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",m({},{id:"online-applications"}),"\u7279\u5b9a\u5355\u677f\u7684Demos"),(0,r.kt)("p",null,"\u9664\u4e86\u80fd\u591f\u5c06\u5e94\u7528\u7a0b\u5e8f\u6a21\u677f\u4e0eUI\u6a21\u677f\u76f8\u7ed3\u5408\u4ee5\u5916\uff0cTouchGFX Designer\u8fd8\u5305\u62ec\u4e00\u4e9b\u9488\u5bf9\u7279\u5b9aSTM32\u8bc4\u4f30\u5957\u4ef6\u7684\u73b0\u6210\u6f14\u793a\u3002 \u8fd9\u4e9b\u4f4d\u4e8e\u7279\u5b9a\u5355\u677f\u7684Demos\u7ae0\u8282."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u7279\u5b9a\u677f\u7ea7Demo\u7684\u5e94\u7528"),(0,r.kt)("h2",m({},{id:"whats-next"}),"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u5efa\u8bae\u60a8\u6d4f\u89c8\u6587\u6863\u5e76\u9605\u8bfb\u76f8\u5173\u7ae0\u8282\u3002 \u8fd9\u5c06\u4f7f\u60a8\u5bf9\u6587\u6863\u6709\u4e00\u4e2a\u5927\u81f4\u7684\u4e86\u89e3\uff0c\u4ece\u800c\u8ba9\u60a8\u77e5\u9053\u4ece\u54ea\u91cc\u67e5\u627e\u66f4\u591a\u4fe1\u606f\uff0c\u5e76\u4e86\u89e3TouchGFX\u5173\u952e\u6982\u5ff5\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u7ae0\u8282\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"\u57fa\u672c\u6982\u5ff5"),": \u672c\u7ae0\u4e3a\u672c\u6587\u6863\u7684\u5176\u4f59\u7ae0\u8282\u63d0\u4f9b\u80cc\u666f\u77e5\u8bc6\u3002 \u5176\u4e2d\u5c06\u4ecb\u7ecd\u7a0d\u540e\u8981\u5f15\u7528\u7684\u6240\u6709\u5173\u952e\u56fe\u5f62\u6982\u5ff5\u3002 \u6839\u636e\u60a8\u5f53\u524d\u7684\u77e5\u8bc6\u4ee5\u53ca\u60a8\u5c06\u8fdb\u884c\u7684TouchGFX\u5f00\u53d1\u64cd\u4f5c\uff0c\u60a8\u53ef\u80fd\u60f3\u5148\u8df3\u8fc7\u67d0\u4e9b\u7ae0\u8282\uff0c\u5e76\u5728\u4ee5\u540e\u4e0d\u4e86\u89e3\u67d0\u4e9b\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u56de\u8fc7\u5934\u6765\u67e5\u770b\u8fd9\u4e9b\u7ae0\u8282\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"../development/development-introduction"}),"\u7814\u53d1"),": \u672c\u7ae0\u4e3a\u672c\u6587\u6863\u7684\u4e3b\u8981\u7ae0\u8282\u3002 \u5b83\u89e3\u91ca\u4e86TouchGFX\u9879\u76ee\u7684\u7ed3\u6784\u4ee5\u53ca\u6574\u4e2a\u9879\u76ee\u5f00\u53d1\u5468\u671f\u4e2d\u6d89\u53ca\u7684\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u5177\u3002 \u5de5\u4f5c\u6d41\u7a0b\u4e2d\u7684\u6bcf\u4e2a\u6b65\u9aa4\u90fd\u6709\u81ea\u5df1\u7684\u7ae0\u8282\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u4e86\u8be6\u7ec6\u63cf\u8ff0\u3002 \u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u627e\u5230\u6709\u5173\u5982\u4f55\u4f7f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u786c\u4ef6\u4e0a\u8fd0\u884c\uff0c\u4ee5\u53ca\u5982\u4f55\u8fdb\u884cUI\u5f00\u53d1\u7684\u5168\u90e8\u6240\u9700\u77e5\u8bc6\uff0c\u5305\u62ec\u5bf9TouchGFX Framework\u4e2d\u7684\u6240\u6709\u529f\u80fd\u548c\u7ec4\u4ef6\u7684\u63cf\u8ff0\u3002")))}k.isMDXComponent=!0}}]);