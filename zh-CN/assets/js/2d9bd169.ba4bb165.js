"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2825],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=l},38419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return b}});var r=n(3905),l=n(22425),i=n(44035),a=n(82985),o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))s.call(t,n)&&m(e,n,t[n]);return e};const g={id:"video",title:"MJPEG\u89c6\u9891"},v=void 0,k={unversionedId:"development/ui-development/touchgfx-engine-features/video",id:"development/ui-development/touchgfx-engine-features/video",title:"MJPEG\u89c6\u9891",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/video.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/video",permalink:"/zh-CN/docs/development/ui-development/touchgfx-engine-features/video",draft:!1,tags:[],version:"current",frontMatter:{id:"video",title:"MJPEG\u89c6\u9891"},sidebar:"docs",previous:{title:"\u8bed\u8a00\u548c\u5b57\u7b26",permalink:"/zh-CN/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"},next:{title:"UI Components",permalink:"/zh-CN/docs/category/ui-components"}},h={},b=[{value:"MJPEG\u89c6\u9891",id:"mjpeg-video",level:2},{value:"\u901a\u8fc7TouchGFX\u4f7f\u7528\u89c6\u9891",id:"using-video-with-touchgfx",level:2},{value:"TouchGFX\u9879\u76ee\u4e2d\u7684\u89c6\u9891\u6587\u4ef6",id:"video-files-in-a-touchgfx-project",level:3},{value:"\u4ece\u7528\u6237\u4ee3\u7801\u4f7f\u7528\u89c6\u9891\u6587\u4ef6",id:"using-video-files-from-user-code",level:3},{value:"\u652f\u6301\u89c6\u9891\u529f\u80fd\u7684\u5f00\u53d1\u5957\u4ef6\u5217\u8868",id:"list-of-video-enabled-development-kits",level:2},{value:"\u521b\u5efaMJPEG AVI\u6587\u4ef6",id:"creating-mjpeg-avi-files",level:2},{value:"\u4f7f\u7528FFMPEG",id:"using-ffmpeg",level:3},{value:"\u89e3\u7801\u7b56\u7565",id:"decoding-strategies",level:2},{value:"\u76f4\u63a5\u89e3\u7801\u5e27\u5230\u7f13\u51b2\u533a",id:"direct-to-frame-buffer",level:3},{value:"\u4e13\u7528\u7f13\u51b2\u533a",id:"dedicated-buffer",level:3},{value:"\u53cc\u7f13\u51b2\u533a",id:"double-buffer",level:3},{value:"\u89c6\u9891\u5e27\u901f\u7387\u548c\u7528\u6237\u754c\u9762\u5e27\u901f\u7387",id:"video-frame-rate-and-user-interface-frame-rate",level:3},{value:"\u76f8\u5173\u6587\u7ae0",id:"related-articles",level:2}],N={toc:b};function y(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},N),m),u(t,p({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u4ece4.18\u7248\u672c\u5f00\u59cb\uff0cTouchGFX\u652f\u6301\u4f7f\u7528MJPEG\u89c6\u9891\u3002 \u89c6\u9891\u53ef\u4ee5\u7528\u4e8e\u521b\u5efa\u66f4\u751f\u52a8\u7684\u7528\u6237\u754c\u9762\u6216\u663e\u793a\u7b80\u77ed\u8bf4\u660e\u6216\u7528\u6237\u6307\u5357\u3002"),(0,r.kt)("p",null,"\u89c6\u9891\u901a\u8fc7\u201c\u89c6\u9891\uff08Video\uff09\u201d\u63a7\u4ef6\u5305\u542b\u5728\u7528\u6237\u754c\u9762\u4e2d\u3002 \u8be5\u63a7\u4ef6\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u53ef\u7528\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4efb\u610f\u5176\u4ed6\u63a7\u4ef6\u6dfb\u52a0\u5230\u7528\u6237\u754c\u9762\u3002"),(0,r.kt)(i.Z,{width:"60%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",mdxType:"Figure"},"\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u4f7f\u7528\u201c\u89c6\u9891\uff08Video\uff09\u201d\u63a7\u4ef6"),(0,r.kt)("p",null,"\u5728STM32\u5fae\u63a7\u5236\u5668\u4e0a\u89e3\u7801\u89c6\u9891\u9700\u8981\u989d\u5916\u7684\u652f\u6301\u8f6f\u4ef6\u5305\u3002 \u8be5\u8f6f\u4ef6\u901a\u8fc7\u5728TouchGFX Generator\u4e2d\u542f\u7528\u89c6\u9891\u652f\u6301\uff0c\u4ece\u800c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5305\u542b\u5728\u9879\u76ee\u4e2d\u3002 \u5728\u5df2\u4f7f\u80fdvideo\u529f\u80fd\u7684TouchGFX\u5de5\u7a0b\u5f00\u53d1\u677f\u4e0a\uff08\u89c1\u4e0b\u9762\u7684\u5217\u8868\uff09\uff0c\u53ef\u4ee5\u8f7b\u677e\u8fd0\u884c\u89c6\u9891\uff0c",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"\u65b9\u6cd5"),"\u662f\u50cf\u5e73\u5e38\u4e00\u6837\u6309\u4e0b\u201c\u8fd0\u884c\u76ee\u6807\uff08F6\uff09\u201d\u3002"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",mdxType:"Figure"},"\u901a\u8fc7STM32F746Discovery\u4f7f\u7528\u201c\u89c6\u9891\uff08Video\uff09\u201d\u63a7\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u76ee\u6807\u4ee3\u7801\u4e2d\u6ca1\u6709\u89c6\u9891\u652f\u6301\uff0c\u4f1a\u5f97\u5230\u7f16\u8bd1\u6216\u94fe\u63a5\u9519\u8bef\u3002"),(0,r.kt)("h2",f({},{id:"mjpeg-video"}),"MJPEG\u89c6\u9891"),(0,r.kt)("p",null,"MJPEG\u89c6\u9891\u7531\u6253\u5305\u5728\u5bb9\u5668\u6587\u4ef6(.avi)\u4e2d\u7684\u5927\u91cfJPEG\u56fe\u50cf\uff08\u5e27\uff09\u7ec4\u6210\u3002 \u538b\u7f29\u540e\u7684JPEG\u5e27\u4e0d\u80fd\u76f4\u63a5\u590d\u5236\u5230\u5e27\u7f13\u5b58\u533a\u3002 \u6bcf\u4e00\u5e27\u5fc5\u987b\u88ab\u89e3\u538b\u4e3aRGB\u683c\u5f0f\uff0816\u621624\u4f4d\uff09\uff0c\u7136\u540e\u624d\u80fd\u5728\u663e\u793a\u5668\u4e0a\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u4e0e\u4f7f\u7528RGB\u4f4d\u56fe\u76f8\u6bd4\uff0c\u8fd9\u79cd\u89e3\u538b\u7f29\u65b9\u5f0f\u7684\u8ba1\u7b97\u6210\u672c\u8f83\u9ad8\uff0c\u5e76\u4e14\u5927\u5927\u964d\u4f4e\u4e86\u6027\u80fd\uff08\u5373\u6bcf\u79d2\u5e27\u6570\uff09\u3002"),(0,r.kt)("p",null,"JPEG\u538b\u7f29\u7684\u4f18\u70b9\u662f\u5927\u5927\u51cf\u5c11\u4e86\u6570\u636e\u5c3a\u5bf8\u3002"),(0,r.kt)("p",null,"\u4e0a\u9762\u622a\u56fe\u4e2d\u4f7f\u7528\u7684\u89c6\u9891\u50cf\u7d20\u4e3a240 x 135\u3002 \u8fd9\u610f\u5473\u7740\u6bcf\u4e2a16\u4f4dRGB\u683c\u5f0f\u7684\u5e27\u5c06\u5360\u7528240 x 135 x 2\u5b57\u8282= 64,800\u5b57\u8282\u3002 \u8be5\u89c6\u9891\u542b\u6709178\u5e27\uff08\u65f6\u957f\u5927\u7ea67\u79d2\uff09 \u56e0\u6b64\uff0c\u4ee5\u4f4d\u56fe\u683c\u5f0f\u5b58\u50a8\u7684\u89c6\u9891\u603b\u5927\u5c0f\u4e3a178 x 64,800\u5b57\u8282= 11,534,400\u5b57\u8282\u3002 MJPEG AVI\u6587\u4ef6\u53ea\u67091,242,282\u5b57\u8282\uff0c\u4e3a\u4f4d\u56fe\u5927\u5c0f\u768410.7%\u3002"),(0,r.kt)("p",null,"\u5c3a\u5bf8\u7684\u7f29\u51cf\u4f7f\u5f97MJPEG\u89c6\u9891\u6587\u4ef6\u5bf9\u4e8e\u5c0f\u6bb5\u89c6\u9891\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("p",null,"\u5c3a\u5bf8\u7684\u7f29\u51cf\u4f1a\u4f34\u968f\u4e00\u4e9b\u538b\u7f29\u4f2a\u5f71\uff08\u5dee\u9519\uff09\u3002 \u8fd9\u4e9b\u5bf9\u4e8e\u771f\u5b9e\u753b\u9762\u901a\u5e38\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u4f46\u5bf9\u4e8e\u9ad8\u5bf9\u6bd4\u5ea6\u56fe\u5f62\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\u3002"),(0,r.kt)("p",null,"\u90e8\u5206STM32\u5fae\u63a7\u5236\u5668\uff08\u5982STM32F769\u6216STM32H750\uff09\u652f\u6301JPEG\u56fe\u50cf\u7684\u786c\u4ef6\u52a0\u901f\u89e3\u7801\u3002 \u8fd9\u52a0\u5feb\u4e86JPEG\u89e3\u7801\uff0c\u5e76\u63d0\u9ad8\u4e86\u89c6\u9891\u7684\u53ef\u80fd\u5e27\u901f\u7387\u3002"),(0,r.kt)("p",null,"JPEG\u5e27\u7684\u89e3\u7801\u5f88\u5bb9\u6613\u5360\u752816ms\u4ee5\u4e0a\u7684\u65f6\u95f4\uff08\u53d6\u51b3\u4e8eMCU\u7684\u901f\u5ea6\u548c\u89c6\u9891\u5206\u8fa8\u7387\uff09\u3002 \u8fd9\u610f\u5473\u7740\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cMJPEG\u89c6\u9891\u7684\u89e3\u7801\u901f\u7387\u4f4e\u4e8e\u7528\u6237\u754c\u9762\u7684\u6b63\u5e38\u5e27\u901f\u7387\u3002 \u5bf9\u4e8e\u67d0\u4e9b\u5e94\u7528\uff0c\u5c06\u6574\u4f53\u5e27\u901f\u7387\u964d\u4f4e\u5230\u89e3\u7801\u901f\u7387\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\u3002 \u5bf9\u4e8e\u5176\u4ed6\u5e94\u7528\uff0c\u5373\u4f7f\u89c6\u9891\u4ee520 fps\u7684\u901f\u7387\u8fd0\u884c\uff0c\u4e5f\u9700\u8981\u4fdd\u6301\u7528\u6237\u754c\u976260 fps\u7684\u5e27\u7387\u3002 \u6709\u4e00\u4e2a\u5e94\u7528\u53ef\u4f5c\u4e3a\u793a\u4f8b\uff1a\u5728\u89c6\u9891\u65c1\u8fb9\u6709\u4e00\u4e2a\u5177\u6709\u52a8\u753b\u6548\u679c\u7684\u8fdb\u5ea6\u5706\u73af\u3002 60 fps\u7684\u52a8\u753b\u901f\u7387\u8ba9\u8fdb\u5ea6\u5706\u73af\u7684\u6548\u679c\u8fbe\u5230\u6700\u4f73\uff0c\u5373\u4f7f\u89c6\u9891\u53ea\u663e\u793a20 fps\u5e27\u7387\u7684\u65b0\u5e27\u3002"),(0,r.kt)("p",null,"\u4e0a\u9762\u5173\u4e8eSTM32F746\u7684\u793a\u4f8b\u5728\u89e3\u7801\u5355\u4e2aJPEG\u5e27\u65f6\u8017\u8d3918-20 ms\u3002"),(0,r.kt)("h2",f({},{id:"using-video-with-touchgfx"}),"\u901a\u8fc7TouchGFX\u4f7f\u7528\u89c6\u9891"),(0,r.kt)("p",null,"\u6709\u4e86TouchGFX\uff0c\u53ef\u4ee5\u8f7b\u677e\u5c06\u89c6\u9891\u53d8\u4e3a\u60a8\u7528\u6237\u754c\u9762\u7684\u4e00\u90e8\u5206\u3002 \u9700\u8981\u4e09\u6837\u4e1c\u897f\uff1a\u4e00\u4e2a\u89c6\u9891\u63a7\u4ef6\u3001\u4e00\u4e2a\u89c6\u9891\u63a7\u5236\u5668\u3001\u5f53\u7136\u8fd8\u6709MJPEG\u89c6\u9891\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u89c6\u9891\u63a7\u4ef6\u5728\u7528\u6237\u754c\u9762\u4e2d\u4f7f\u7528\uff0c\u4e0e\u6240\u6709\u5176\u4ed6\u63a7\u4ef6\u4e00\u6837\u3002 \u89c6\u9891\u63a7\u5236\u5668\u662f\u6784\u6210\u5b8c\u6574TouchGFX\u73af\u5883\uff08HAL\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u9a71\u52a8\u7a0b\u5e8f\u7b49\uff09\u7684\u5e95\u5c42\u8f6f\u4ef6\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",mdxType:"Figure"},"\u89c6\u9891\u63a7\u4ef6\u548c\u89c6\u9891\u63a7\u5236\u5668"),(0,r.kt)("p",null,"\u89c6\u9891\u63a7\u5236\u5668\u7531\u63a7\u5236MJPEG\u6587\u4ef6\u89e3\u7801\u548c\u7f13\u51b2\u533a\u7ba1\u7406\u7684\u8f6f\u4ef6\u7ec4\u6210\u3002"),(0,r.kt)("p",null,"TouchGFX\u8bbe\u8ba1\u5668\u81ea\u52a8\u5c06\u89c6\u9891\u63a7\u5236\u5668\u5305\u542b\u5230\u6240\u6709\u6a21\u62df\u5668\u9879\u76ee\u4e2d\u3002 \u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u6a21\u62df\u5668\u539f\u578b\u4e2d\u8f7b\u677e\u4f7f\u7528\u89c6\u9891\uff1a\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u89c6\u9891\u63a7\u4ef6\uff0c\u9009\u62e9\u4e00\u4e2a\u89c6\u9891\u6587\u4ef6\uff0c\u7136\u540e\u6309\u4e0b \u201cRun Simulator\uff08\u8fd0\u884c\u6a21\u62df\u5668\uff09\u201d\uff08",(0,r.kt)(a.Z,{mdxType:"Shortcut"}," F5"),")."),(0,r.kt)("p",null,"\u5982\u8981\u5728\u786c\u4ef6\u4e0a\u4f7f\u7528\u89c6\u9891\uff0c\u8fd8\u9700\u76ee\u6807\u9879\u76ee\uff08IAR\u3001Keil\u3001arm-gcc\u3001CubeIDE\uff09\u4e2d\u6709\u89c6\u9891\u63a7\u5236\u5668\u3002 \u8fd9\u5df2\u7ecf\u6dfb\u52a0\u5230\u4e00\u4e9bTouchGFX\u677f\u4ef6\u89c4\u8303\u5305\uff08\u89c1\u4e0b\u9762\u7684\u5217\u8868\uff09\uff0c\u4f46\u60a8\u53ef\u4ee5\u901a\u8fc7TouchGFX Generator\u5411\u4efb\u610f\u9879\u76ee\u6dfb\u52a0\u89c6\u9891\u652f\u6301\u3002 \u53c2\u89c1",(0,r.kt)("a",f({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"\u7528\u6237\u6307\u5357"),"\u3002"),(0,r.kt)("p",null,"\u5f53\u60a8\u62e5\u6709\u652f\u6301\u89c6\u9891\u7684\u5e73\u53f0\u65f6\uff0c\u53ef\u4ee5\u8f7b\u677e\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u6dfb\u52a0\u548c\u914d\u7f6e\u89c6\u9891\u63a7\u4ef6\u3002 ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"\u6b64\u5904"),"\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u4f7f\u7528\u89c6\u9891\u63a7\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"video-files-in-a-touchgfx-project"}),"TouchGFX\u9879\u76ee\u4e2d\u7684\u89c6\u9891\u6587\u4ef6"),(0,r.kt)("p",null,"\u5f53\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u5305\u542b\u89c6\u9891\u6587\u4ef6\u540e\uff0c\u5b83\u5c06.avi\u6587\u4ef6\u590d\u5236\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"assets/vidoes"),"\u6587\u4ef6\u5939\u3002 \u5728\u4ee3\u7801\u751f\u6210\u671f\u95f4\uff0c\u89c6\u9891\u4ee5.bin\u6587\u4ef6\u683c\u5f0f\u88ab\u590d\u5236\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"generated/videos/bin"),"\uff0c\u4ee5.o\u6587\u4ef6\u683c\u5f0f\u88ab\u590d\u5236\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"generated/videos/obj"),"\u3002 .O\u548c.bin\u6587\u4ef6\u5305\u542b\u76f8\u540c\u7684\u6570\u636e\uff0c\u4f46\u662f.O\u6587\u4ef6\u662fELF\u683c\u5f0f\uff08\u8fd9\u662f\u4e00\u4e9b\u7f16\u8bd1\u5668\u548cIDE\u7684\u9996\u9009\u683c\u5f0f\uff09\u3002"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u4ee3\u7801\u65f6\u6267\u884c\u7684\u9879\u76ee\u66f4\u65b0\u7a0b\u5e8f\u5c06\u89c6\u9891\u6587\u4ef6\u5305\u542b\u5728\u76ee\u6807\u9879\u76ee\u4e2d\u3002 \u8fd9\u610f\u5473\u7740\u89c6\u9891\u6587\u4ef6\u88ab\u94fe\u63a5\u5230\u53ef\u6267\u884c\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u53ef\u7528\u3002"),(0,r.kt)("p",null,"\u5e94\u7528\u7f16\u7a0b\u5668\u53ef\u4ee5\u6dfb\u52a0\u5176\u4ed6\u89c6\u9891\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\u6587\u4ef6\u5939\u3002 \u8fd9\u4e9b\u4e5f\u5c06\u5305\u62ec\u5728\u9879\u76ee\u4e2d\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"generated/videos/include/videos/VideoDatabase.hpp"),"\u5305\u542b\u4e0e\u7f16\u8bd1\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u89c6\u9891\u6709\u5173\u7684\u7b26\u53f7\u6027\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_SampleVideo1_240x135_bin_start;\n#else\nextern const uint8_t video_SampleVideo1_240x135_bin_start[];\n#endif\n")),(0,r.kt)("p",null,"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u901a\u8fc7\u8fd9\u4e9b\u58f0\u660e\u5c06\u89c6\u9891\u5206\u914d\u7ed9\u89c6\u9891\u63a7\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"using-video-files-from-user-code"}),"\u4ece\u7528\u6237\u4ee3\u7801\u4f7f\u7528\u89c6\u9891\u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u9879\u76ee\u4e2d\uff0c\u4ec5\u4eceTouchGFX\u8bbe\u8ba1\u5668\u4e2d\u9009\u62e9\u4e00\u4e2a\u89c6\u9891\u662f\u4e0d\u591f\u7684\u3002 \u4f8b\u5982\uff0c \u60a8\u60f3\u5728\u542f\u52a8\u65f6\u9009\u62e9\u4e0d\u540c\u7684\u89c6\u9891\u3002 \u9996\u5148\uff0c\u5fc5\u987b\u6dfb\u52a0\u89c6\u9891\u6587\u4ef6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\uff1a"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.png",mdxType:"Figure"},"\u6dfb\u52a0\u89c6\u9891\u5230assets/videos"),(0,r.kt)("p",null,"\u751f\u6210\u4ee3\u7801\uff08\u6216\u8fd0\u884cmake assets\uff09\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\u6587\u4ef6\u5939\u4e2d\u7684\u89c6\u9891\u6587\u4ef6\u5c06\u5305\u542b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"VideoDatabase.hpp"),"\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"const uint32_t video_myVideo_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_myVideo_bin_start;\n#else\nextern const uint8_t video_myVideo_bin_start[];\n#endif\n")),(0,r.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u58f0\u660e\uff0c\u8ba9\u89c6\u9891\u63a7\u4ef6\u64ad\u653e\u6211\u4eec\u7684\u7535\u5f71\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,12-14}","{2-2,12-14}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <videos/VideoDatabase.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    video.setVideoData(video_myVideo_bin_start, video_myVideo_bin_length);\n    video.setWidthHeight(240, 136);\n    video.play();\n}\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff01\u89c6\u9891\u6570\u636e\u73b0\u5728\u94fe\u63a5\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002 \u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u65b9\u6cd5\u662f\u4e0d\u5c06\u4efb\u4f55\u89c6\u9891\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\u4e2d\uff0c\u4e14\u624b\u52a8\u5c06\u89c6\u9891\u5237\u5199\u5230\u5916\u90e8flash\u5b58\u50a8\u7684\u4e13\u7528\u533a\u57df\u3002 \u7136\u540e\u4f7f\u7528flash\u5730\u5740\u4f20\u9012\u5730\u5740\u548c\u957f\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::setupScreen()\n{\n   ...\n   video.setVideoData((const uint8_t*)0xA0200000, 1242282);\n   ...\n}\n")),(0,r.kt)("h2",f({},{id:"list-of-video-enabled-development-kits"}),"\u652f\u6301\u89c6\u9891\u529f\u80fd\u7684\u5f00\u53d1\u5957\u4ef6\u5217\u8868"),(0,r.kt)("p",null,"TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u7684TouchGFX\u677f\u4ef6\u8bbe\u7f6e\u5305\u9ed8\u8ba4\u4e3a\u8fd9\u4e9b\u5f00\u53d1\u5957\u4ef6\u542f\u7528\u4e86\u89c6\u9891\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32F769Discovery\uff08\u786c\u4ef6\u52a0\u901f\u89e3\u7801\uff09"),(0,r.kt)("li",{parentName:"ul"},"STM32H750BDiscovery\uff08\u786c\u4ef6\u52a0\u901f\u89e3\u7801\uff09"),(0,r.kt)("li",{parentName:"ul"},"STM32F746Discovery\uff08\u57fa\u4e8e\u8f6f\u4ef6\u7684\u89e3\u7801\uff09")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u5957\u4ef6\u6216\u5b9a\u5236\u786c\u4ef6\uff0c\u8bf7\u8bb0\u4f4f\u5728TouchGFX Generator\u4e2d\u542f\u7528\u89c6\u9891\u652f\u6301\u3002"),(0,r.kt)("h2",f({},{id:"creating-mjpeg-avi-files"}),"\u521b\u5efaMJPEG AVI\u6587\u4ef6"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u89c6\u9891\u4e0d\u4ee5MJPEG AVI\u6587\u4ef6\u683c\u5f0f\u5b58\u50a8\uff0c\u56e0\u4e3a\u8fd9\u4e0d\u662f\u5e38\u89c1\u7684\u89c6\u9891\u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u5728TouchGFX\u9879\u76ee\u4e2d\u4f7f\u7528\u89c6\u9891\u6587\u4ef6\u4e4b\u524d\uff0c\u901a\u5e38\u9700\u8981\u5c06\u5176\u8f6c\u6362\u4e3aMJPEG\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5b8c\u6210\u8f6c\u6362\uff0c\u4f8b\u5982\u4f7f\u7528",(0,r.kt)("a",f({parentName:"p"},{href:"https://en.wikipedia.org/wiki/FFmpeg"}),"FFMPEG"),"\u3002 \u8fd8\u63d0\u4f9b\u5176\u4ed6\u5e94\u7528\u548c\u5728\u7ebf\u670d\u52a1\u3002"),(0,r.kt)("h3",f({},{id:"using-ffmpeg"}),"\u4f7f\u7528FFMPEG"),(0,r.kt)("p",null,(0,r.kt)("a",f({parentName:"p"},{href:"https://www.gyan.dev/ffmpeg/builds/"}),"\u6b64\u5904"),"\u53ef\u4ee5\u627e\u5230\u7528\u4e8eFFMPEG\u7684Windows\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8981\u5c06\u89c6\u9891\u6587\u4ef6input.mov\u8f6c\u6362\u4e3aMJPEG\u683c\u5f0f\uff0c\u53ef\u4f7f\u7528\u8be5\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,r.kt)("p",null,"MJPEG\u89c6\u9891\u5728output.avi\u6587\u4ef6\u4e2d\u3002 \u8be5\u6587\u4ef6\u53ef\u4ee5\u590d\u5236\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\u4e2d\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89c6\u9891\u80fd\u4fdd\u6301\u6b63\u786e\u7684\u957f\u5bbd\u6bd4\uff0c\u53ef\u4ee5\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u6307\u5b9a\u5bbd\u5ea6\uff08\u8fd9\u91cc\u662f480\uff09\uff0c\u9ad8\u5ea6\u201c-1\u201d\uff08-1\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u526a\u5207\u89c6\u9891\uff1a\u4f7f\u7528-ss\u6307\u5b9a\u5f00\u59cb\u65f6\u95f4\uff0c\u4f7f\u7528-t\u6216-to\u6307\u5b9a\u6301\u7eed\u65f6\u95f4\u6216\u505c\u6b62\u65f6\u95f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,r.kt)("p",null,"\u6216\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -to 5 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u9009\u9879"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-s"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u8f93\u51fa\u89c6\u9891\u5206\u8fa8\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-qscale"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u8d28\u91cf\u7b49\u7ea7\u8303\u56f41 - 31\uff08\u4ece\u4f18\u5230\u5dee\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-an"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u53bb\u9664\u97f3\u9891")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-vf"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8fc7\u6ee4\u5668\u56fe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-ss"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5f00\u59cb\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u6301\u7eed\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"-to"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u505c\u6b62\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")))),(0,r.kt)("h2",f({},{id:"decoding-strategies"}),"\u89e3\u7801\u7b56\u7565"),(0,r.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0cTouchGFX\u9700\u8981\u5c06\u5355\u72ec\u7684MJPEG\u5e27\u4eceJPEG\u8f6c\u6362\u4e3aRGB\uff0c\u7136\u540e\u624d\u5728\u5e27\u7f13\u5b58\u533a\u663e\u793a\u3002 \u8fd9\u79cd\u89e3\u7801\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u5b9e\u65f6\u5b8c\u6210\uff0c\u4e5f\u53ef\u4ee5\u5f02\u6b65\u5b8c\u6210 - \u63d0\u524d\u5c06\u4e0b\u4e00\u5e27\u89e3\u7801\u5230\u89c6\u9891\u7f13\u51b2\u533a\u3002"),(0,r.kt)("p",null,"\u5f02\u6b65\u89e3\u7801\u662f\u7531\u7b2c\u4e8c\u4e2a\u4efb\u52a1\uff08\u800c\u4e0d\u662fUI\u4efb\u52a1\uff09\u5b8c\u6210\u7684\u3002 \u8fd9\u610f\u5473\u7740\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u89e3\u7801\u53ef\u4ee5\u4e0eUI\u4efb\u52a1\u7684\u7ed8\u5236\u5e76\u884c\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"TouchGFX\u67093\u79cd\u7b56\u7565\uff0c\u6bcf\u79cd\u7b56\u7565\u90fd\u6709\u4f18\u70b9\u548c\u7f3a\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u7b56\u7565"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u76f4\u63a5\u89e3\u7801\u5e27\u5230\u7f13\u51b2\u533a"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5728\u9700\u8981\u65f6\uff0c\u5c06\u5f53\u524d\u89c6\u9891\u5e27\u76f4\u63a5\u89e3\u7801\u5230\u5e27\u7f13\u5b58\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4e13\u7528\u7f13\u51b2\u533a"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5c06\u4e0b\u4e00\u4e2a\u89c6\u9891\u5e27\u89e3\u7801\u5230\u89c6\u9891\u7f13\u51b2\u533a\uff0c \u4ece\u89c6\u9891\u7f13\u51b2\u533a\u590d\u5236\u5230\u5e27\u7f13\u5b58\u533a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u53cc\u7f13\u51b2\u533a"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5c06\u4e0b\u4e00\u4e2a\u89c6\u9891\u5e27\u89e3\u7801\u5230\u7b2c\u4e8c\u89c6\u9891\u7f13\u51b2\u533a\uff0c \u89e3\u7801\u5b8c\u6210\u540e\uff0c\u4ea4\u6362\u89c6\u9891\u7f13\u51b2\u533a\u3002")))),(0,r.kt)("p",null,"Designer\u603b\u662f\u4e3a\u6a21\u62df\u5668\u9879\u76ee\u9009\u62e9\u201c\u76f4\u63a5\u89e3\u7801\u5230\u5e27\u7f13\u5b58\u533a\u201d\u7b56\u7565\u3002 \u53ef\u4ee5\u5728",(0,r.kt)("a",f({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator"),"\u4e2d\u914d\u7f6e\u5bf9\u76ee\u6807\u4f7f\u7528\u4ec0\u4e48\u6837\u7684\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u4e0b\u6587\u5c06\u8be6\u7ec6\u8bb2\u89e3\u8fd9\u4e9b\u7b56\u7565\u3002"),(0,r.kt)("h3",f({},{id:"direct-to-frame-buffer"}),"\u76f4\u63a5\u89e3\u7801\u5e27\u5230\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u201c\u76f4\u63a5\u89e3\u7801\u5230\u5e27\u7f13\u5b58\u533a\u201d\u7b56\u7565\u5728TouchGFX\u5f15\u64ce\u7684\u6e32\u67d3\u9636\u6bb5\u89e3\u7801JPEG\u5e27\uff08\u53c2\u89c1",(0,r.kt)("a",f({parentName:"p"},{href:"../../../basic-concepts/rendering#render"}),"\u2018\u6e32\u67d3\u2019"),"\u7ae0\u8282\uff09"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",mdxType:"Figure"},"\u76f4\u63a5\u89e3\u7801\u5230\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u5728\u66f4\u65b0\u9636\u6bb5\uff08\u53c2\u89c1",(0,r.kt)("a",f({parentName:"p"},{href:"../../../basic-concepts/rendering#update"}),"\u2018\u66f4\u65b0\u2019"),"\u7ae0\u8282\uff09\uff0c\u89c6\u9891\u63a7\u4ef6\u51b3\u5b9a\u662f\u5426\u5e94\u8be5\u5c06\u7535\u5f71\u63d0\u524d\u5230\u4e0b\u4e00\u5e27\u3002 \u5728\u63a5\u4e0b\u6765\u7684\u6e32\u67d3\u9636\u6bb5\uff0cJPEG\u5e27\u88ab\u9010\u884c\u89e3\u7801\u5230\u4e00\u4e2a\u201c\u884c\u7f13\u51b2\u533a\u201d\u3002 \u7136\u540e\u5bf9\u50cf\u7d20\u8fdb\u884c\u8f6c\u6362\u4ee5\u5339\u914d\u5e27\u7f13\u5b58\u533a\u683c\u5f0f\uff0c\u5e76\u590d\u5236\u5230\u5e27\u7f13\u5b58\u533a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u89c6\u9891\u63a7\u4ef6\u88ab\u5176\u4ed6\u63a7\u4ef6\u8986\u76d6\uff0c\u5b83\u4f1a\u88ab\u91cd\u7ed8\u6210\u591a\u4e2a\u5757\uff08\u53ef\u89c1\u90e8\u5206\u88ab\u5206\u5272\u6210\u77e9\u5f62\uff09\u3002 \u7ed8\u5236\u6bcf\u4e00\u4e2a\u8fd9\u6837\u7684\u5757\u9700\u8981\u53cd\u590d\u8fdb\u884c\u89e3\u538b\u7f29\u5de5\u4f5c\u3002 \u8fd9\u4f7f\u5f97\u8be5\u7b56\u7565\u4e0d\u9002\u5408\u7528\u6237\u754c\u9762\uff0c\u56e0\u4e3a\u968f\u7740\u89e3\u7801\u65f6\u95f4\u7684\u589e\u52a0\uff0c\u90a3\u91cc\u7684\u5176\u4ed6UI\u5143\u7d20\uff08\u5982\u6309\u94ae\uff09\u4f1a\u88ab\u7f6e\u4e8e\u89c6\u9891\u7684\u9876\u90e8\u3002"),(0,r.kt)("p",null,"\u8be5\u89e3\u51b3\u65b9\u6848\u7684\u4f18\u70b9\u662f\u53ea\u4f7f\u7528\u4e86\u5f88\u5c11\u989d\u5916\u5185\u5b58\u3002"),(0,r.kt)("h3",f({},{id:"dedicated-buffer"}),"\u4e13\u7528\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u4e13\u7528\u6216\u5355\u7f13\u51b2\u533a\u89e3\u7801\u7b56\u7565\u9996\u5148\u5c06JPEG\u5e27\u89e3\u7801\u5230\u4e13\u7528RGB\u7f13\u51b2\u533a\uff0c\u7136\u540e\u518d\u4ece\u8be5\u7f13\u51b2\u533a\u590d\u5236\u5230\u5e27\u7f13\u5b58\u533a\u3002"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",mdxType:"Figure"},"\u89e3\u7801\u5230\u5355\u72ec\u7684\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u4e0e\u76f4\u63a5\u7b56\u7565\u76f8\u53cd\uff0c\u73b0\u5728\u89e3\u7801\u5de5\u4f5c\u5728\u4e00\u4e2a\u5355\u72ec\u4efb\u52a1\uff08\u800c\u4e0d\u662f\u901a\u5e38\u7684TouchGFX\u4efb\u52a1\uff09\u4e2d\u8fd0\u884c\u3002 \u89c6\u9891\u63a7\u4ef6\u8ba1\u7b97\u4e00\u4e2a\u65b0\u7684\u7535\u5f71\u5e27\u662f\u5426\u5e94\u8be5\u5728\u4e0b\u4e00\u4e2a\u7528\u6237\u754c\u9762tick\u4e2d\u663e\u793a\uff0c\u5e76\u901a\u8fc7\u4fe1\u53f7\u544a\u77e5\u89e3\u7801\u4efb\u52a1\u5f00\u59cb\u89e3\u7801\u4e0b\u4e00\u5e27\u3002 \u5728\u89e3\u7801\u8fc7\u7a0b\u4e2d\uff0c\u89c6\u9891\u7f13\u51b2\u533a\u4e0d\u80fd\u88ab\u7ed8\u5236\u5230\u5e27\u7f13\u5b58\u533a\uff08\u5b83\u88ab\u90e8\u5206\u66f4\u65b0\uff09\u3002 \u5f53\u89e3\u7801\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u7528\u6237\u754c\u9762\u4e0d\u5f97\u91cd\u7ed8\u89c6\u9891\u63a7\u4ef6\u3002 \u7ed8\u5236\u5b8c\u6210\u540e\uff0c\u5b83\u5c06\u7ee7\u7eed\u3002 \u5982\u679c\u7528\u6237\u754c\u9762\u4e0d\u9700\u8981\u91cd\u7ed8\u89c6\u9891\uff0c\u5219\u7528\u6237\u754c\u9762\u53ef\u4ee5\u7167\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"\u65b0\u89c6\u9891\u88ab\u5b8c\u5168\u89e3\u7801\u540e\uff0c\u5c06\u89c6\u9891\u6e32\u67d3\u5230\u5e27\u7f13\u5b58\u533a\u7684\u6210\u672c\u4e0e\u7ed8\u5236\u4f4d\u56fe\u7684\u6210\u672c\uff08\u4f4e\uff09\u76f8\u540c\u3002 \u901a\u8fc7\u8be5\u7b56\u7565\uff0c\u5728\u89c6\u9891\u4e0a\u653e\u7f6e\u6309\u94ae\u6216\u6587\u672c\u4e0d\u6210\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8be5\u7b56\u7565\u7684\u7f3a\u70b9\u662f\u4efb\u52a1\u548c\u89c6\u9891\u7f13\u51b2\u533a\u5360\u7528\u5185\u5b58\u3002"),(0,r.kt)("h3",f({},{id:"double-buffer"}),"\u53cc\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u53cc\u7f13\u51b2\u533a\u89e3\u7801\u7b56\u7565\u4f7f\u7528\u4e24\u4e2aRGB\u7f13\u51b2\u533a\u3002 \u89e3\u7801\u5728\u8fd9\u4e24\u4e2a\u7f13\u51b2\u533a\u4e2d\u5b8c\u6210\uff0c\u800c\u6e32\u67d3\u5230\u5e27\u7f13\u5b58\u533a\u5219\u53d1\u751f\u4e8e\u53e6\u4e00\u4e2aRGB\u7f13\u51b2\u533a\u4e2d\u3002"),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",mdxType:"Figure"},"\u89e3\u7801\u5230\u4e24\u4e2a\u89c6\u9891\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u5e27\u88ab\u89e3\u7801\u540e\uff0c\u89e3\u7801\u4efb\u52a1\u7b49\u5f85UI\u663e\u793a\u8be5\u89c6\u9891\u7f13\u51b2\u533a\u5e76\u91ca\u653e\u524d\u4e00\u4e2a\u7f13\u51b2\u533a\u3002 \u4e00\u65e6\u7528\u6237\u754c\u9762\u6539\u53d8\u4e86\u7f13\u51b2\u533a\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u89e3\u7801\u4e0b\u4e00\u5e27\u3002"),(0,r.kt)("p",null,"\u8be5\u7b56\u7565\u7684\u4e00\u4e2a\u660e\u663e\u7f3a\u70b9\u662f\u5185\u5b58\u4f7f\u7528\u662f\u524d\u4e00\u79cd\u7b56\u7565\u7684\u4e24\u500d\u3002"),(0,r.kt)("h3",f({},{id:"video-frame-rate-and-user-interface-frame-rate"}),"\u89c6\u9891\u5e27\u901f\u7387\u548c\u7528\u6237\u754c\u9762\u5e27\u901f\u7387"),(0,r.kt)("p",null,"\u4e0d\u540c\u7684\u89e3\u7801\u7b56\u7565\u5bf9\u7528\u6237\u754c\u9762\u5e27\u901f\u7387\u7684\u5f71\u54cd\u4e5f\u4e0d\u540c\u3002 \u7528\u6237\u754c\u9762\u5e27\u901f\u7387\u662f\u6bcf\u79d2\u5728\u5e27\u7f13\u5b58\u533a\u4e2d\u4ea7\u751f\u7684\uff08\u4e0d\u540c\uff09\u5e27\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u91c7\u7528\u201c\u76f4\u63a5\u89e3\u7801\u5230\u5e27\u7f13\u5b58\u533a\u201d\u7b56\u7565\uff0c\u89c6\u9891\u89e3\u7801\u901f\u5ea6\u5bb9\u6613\u5f71\u54cd\u7528\u6237\u754c\u9762\u7684\u6709\u6548\u5e27\u901f\u7387\u3002 \u5047\u8bbe\u89e3\u7801\u4e00\u4e2aJPEG\u5e27\u9700\u898128 ms\uff0c\u5e76\u4e14\u6211\u4eec\u5e0c\u671b\u6bcf\u79d2\u663e\u793a20\u5e27\u89c6\u9891\uff0820 fps\uff09\u3002 \u8fd9\u662f\u6bd4\u8f83\u5b9e\u9645\u7684\uff0c\u56e0\u4e3a\u603b\u89e3\u7801\u65f6\u95f4\u662f\uff1a28 ms x 20/s = 560 ms/s\u3002  20 fps\u5bf9\u5e94\u4e8e\u6bcf3\u5e27\uff0860 fps\uff09\u6709\u4e00\u4e2a\u65b0\u89c6\u9891\u5e27\u3002 \u6240\u4ee5\u5728\u6bcf\u4e09\u4e2aUI\u5e27\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b0\u7684\u89c6\u9891\u5e27\uff0c\u4f46\u662f\u7531\u4e8e\u89e3\u7801\u65f6\u95f4\u662f\u6e32\u67d3\u9636\u6bb5\u7684\u4e00\u90e8\u5206\uff0c\u6e32\u67d3\u4e00\u5e27\u9700\u898128 ms\uff0c\u52a0\u4e0a\u6e32\u67d3\u7528\u6237\u754c\u9762\u7684\u5176\u4ed6\u90e8\u5206\u9700\u8981\uff08\u6bd4\u5982\uff092 ms\u3002 \u603b\u7684\u5e27\u6e32\u67d3\u65f6\u95f4\u662f30 ms\uff0c\u6211\u4eec\u5931\u53bb\u4e86\u4e00\u4e2atick\uff0c\u4f46\u6211\u4eec\u51c6\u5907\u4e3a\u4e0b\u4e00\u4e2atick\u751f\u6210\u4e00\u4e2a\u65b0\u5e27\u3002 \u5728\u4e0b\u4e00\u5e27\u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u89e3\u7801\u89c6\u9891\uff0c\u6240\u4ee5\u6e32\u67d3\u65f6\u95f4\u4f4e\u4e8e16 ms\uff0c\u7b26\u5408\u9650\u5236\u8981\u6c42\u3002 \u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7b2c\u56db\u4e2atick\u4e2d\u5f00\u59cb\u89e3\u7801\u7b2c\u4e8c\u4e2a\u89c6\u9891\u5e27\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.png",mdxType:"Figure"},"20 fps\u89c6\u9891"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u89c6\u9891\u5e27\u901f\u7387\u662f20 fps\uff0c\u7528\u6237\u754c\u9762\u5e27\u901f\u7387\u662f40 fps\uff08\u5171\u8ba160 fps\uff09\u3002"),(0,r.kt)("p",null,"\u7ed3\u679c\u662f\u6211\u4eec\u4e0d\u80fd\u8ba9UI\u7684\u5176\u4ed6\u5143\u7d20\u5177\u670960 fps\u7684\u52a8\u753b\u6548\u679c\uff0c\u56e0\u4e3a\u89c6\u9891\u89e3\u7801\u9650\u5236\u4e86\u5e27\u901f\u7387\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u91c7\u7528\u201c\u53cc\u7f13\u51b2\u533a\u201d\u7b56\u7565\uff0c\u8fd9\u79cd\u95ee\u9898\u5f97\u5230\u7f13\u89e3\u3002 \u7528\u6237\u754c\u9762\u603b\u662f\u6709\u4e00\u4e2a\u53ef\u7528\u7684\u89c6\u9891\u7f13\u51b2\u533a\u7528\u4e8e\u6700\u65b0\u7684\u5e27\u3002 \u89e3\u7801\u4efb\u52a1\u53ef\u4ee5\u5c06\u8be5\u7f13\u51b2\u533a\u4e0e\u53e6\u4e00\u4e2a\u7f13\u51b2\u533a\uff08\u5305\u542b\u4e0b\u4e00\u5e27\uff09\u4ea4\u6362\uff08\u5f53\u5b83\u53ef\u7528\u65f6\uff09\uff0c\u800c\u6e32\u67d3\u7ebf\u7a0b\u6ca1\u6709\u4e3b\u52a8\u7ed8\u5236\u3002 \u4ea4\u6362\u4e4b\u540e\uff0c\u89e3\u7801\u4efb\u52a1\u53ef\u4ee5\u7acb\u5373\u5f00\u59cb\u89e3\u7801\u4e0b\u4e00\u5e27\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.png",mdxType:"Figure"},"20 fps\u89c6\u9891"),(0,r.kt)("p",null,"\u5728UI\u5e271\u548cUI\u5e272\u4e2d\uff0cUI\u663e\u793a\u7684\u662f\u7b2c\u4e00\u4e2a\u89e3\u7801\u7684\u89c6\u9891\u5e27\u3002 \u540c\u65f6\uff0c\u89e3\u7801\u5668\u5728\u751f\u6210\u5e272\u3002 \u5728UI\u5e273\u4e2d\uff0c\u8be5\u5e27\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\u5e76\u5c06\u88ab\u4f7f\u7528\u3002 \u89e3\u7801\u5668\u5904\u4e8e\u7a7a\u95f2\u72b6\u6001\uff0c\u53ef\u4ee5\u5f00\u59cb\u89e3\u7801\u4e0b\u4e00\u5e27\uff08\u56fe\u4e2d\u6ca1\u6709\u663e\u793a\uff09\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5373\u4f7f\u89c6\u9891\u89e3\u7801\u53ea\u80fd\u6bcf2\u4e2aticks\u4e2d\u751f\u6210\u4e00\u4e2a\u65b0\u5e27\uff0c\u4e5f\u53ef\u4ee5\u5728\u6bcf\u5e27\u4e2d\u66f4\u65b0\u7528\u6237\u754c\u9762\u7684\u5176\u4ed6\u5143\u7d20\u3002"),(0,r.kt)("h2",f({},{id:"related-articles"}),"\u76f8\u5173\u6587\u7ae0"),(0,r.kt)("p",null,"As mentioned above the video support for target project is configured in the TouchGFX Generator. See the ",(0,r.kt)("a",f({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator User Guide")," for instructions."),(0,r.kt)("p",null,"\u89c6\u9891\u63a7\u4ef6\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u53ef\u7528\u3002 ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"\u6b64\u5904"),"\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u4f7f\u7528\u89c6\u9891\u63a7\u4ef6\u3002"))}y.isMDXComponent=!0}}]);