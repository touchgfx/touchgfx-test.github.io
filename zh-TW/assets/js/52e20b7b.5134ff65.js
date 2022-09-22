"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2786],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var r=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children))}},88678:function(e,n,t){var r=t(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=i},31217:function(e,n,t){var r=t(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}n.Z=i},93054:function(e,n,t){var r=t(67294),i=t(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}n.Z=o},37793:function(e,n,t){var r=t(67294),i=t(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}n.Z=o},91657:function(e,n,t){t.r(n),t.d(n,{assets:function(){return N},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return C}});var r=t(3905),i=t(44035),a=t(93054),o=t(37793),l=t(22425),c=t(31217),p=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&h(e,t,n[t]);if(d)for(var t of d(n))g.call(n,t)&&h(e,t,n[t]);return e};const k={id:"code-structure",title:"\u7a0b\u5f0f\u78bc\u7d50\u69cb"},v=void 0,y={unversionedId:"development/ui-development/software-architecture/code-structure",id:"development/ui-development/software-architecture/code-structure",title:"\u7a0b\u5f0f\u78bc\u7d50\u69cb",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/code-structure",permalink:"/zh-TW/docs/development/ui-development/software-architecture/code-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"code-structure",title:"\u7a0b\u5f0f\u78bc\u7d50\u69cb"},sidebar:"docs",previous:{title:"\u87a2\u5e55\u6982\u5ff5",permalink:"/zh-TW/docs/development/ui-development/software-architecture/screen-definition-and-mvp"},next:{title:"Working with TouchGFX",permalink:"/zh-TW/docs/category/working-with-touchgfx"}},N={},C=[{value:"\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc",id:"generated-code-vs-user-code",level:2},{value:"TouchGFX Designer\u751f\u6210\u7684\u6a94\u6848",id:"files-generated-by-touchgfx-designer",level:2},{value:"\u7bc4\u4f8b",id:"example",level:2},{value:"TouchGFX Designer\u8996\u5716",id:"touchgfx-designer-view",level:3},{value:"\u5c64",id:"layers",level:3},{value:"\u7a0b\u5f0f\u78bc",id:"code",level:3}],b={toc:C};function w(e){var n,t=e,{components:p}=t,h=((e,n)=>{var t={};for(var r in e)m.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&d)for(var r of d(e))n.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=f(f({},b),h),u(n,s({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u4ecb\u7d39TouchGFX\u5c08\u6848\u7684\u7d50\u69cb\u2014\u2014\u5f9eTouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u5230\u7528\u6236\u7de8\u5beb\u7684\u64f4\u5145\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("h2",f({},{id:"generated-code-vs-user-code"}),"\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u5c07\u8207\u7528\u6236\u7de8\u5beb\u7684\u7a0b\u5f0f\u78bc\u5b8c\u5168\u5206\u96e2\u3002 \u4e8b\u5be6\u4e0a\uff0c\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"generated/gui_generated"),"\u8cc7\u6599\u593e\u4e2d\uff0c\u800c\u624b\u5beb\u7a0b\u5f0f\u78bc\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"gui"),"\u8cc7\u6599\u593e\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gui_generated"),"\u7a0b\u5f0f\u78bc\u4f5c\u70ba\u7528\u6236\u7a0b\u5f0f\u78bc\u7684\u57fa\u790e\u985e\u5225\u3002 \u57fa\u790e\u985e\u5225\u5305\u542b\u5728TouchGFX Designer\u4e2d\u914d\u7f6e\u7684\u6240\u6709\u8a2d\u7f6e\u7a0b\u5f0f\u78bc\u3002 \u4e0b\u9762\u7684\u985e\u5225\u793a\u610f\u5716\u986f\u793a\u4e86\u985e\u5225\u7684\u95dc\u4fc2\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels.png",mdxType:"Figure"},"\u5f15\u64ce\u985e\u3001\u751f\u6210\u985e\u548c\u4f7f\u7528\u8005\u985e\u7684\u985e\u5c64\u6b21\u7d50\u69cb"),(0,r.kt)("p",null,"\u5982\u4e0a\u5716\u6240\u793a\uff0cTouchGFX Designer\u61c9\u7528\u5305\u542b3\u500b\u4e0d\u540c\u7a0b\u5f0f\u78bc\u5c64\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Engine (\u5f15\u64ce)"),"\uff1a\u9019\u4e9b\u985e\u662fTouchGFX\u63d0\u4f9b\u7684\u6a19\u6e96\u985e\u3002 \u5b83\u5011\u4f5c\u70ba\u751f\u6210\u985e\u7684\u57fa\u790e\u985e\u5225\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generated (\u751f\u6210)"),"\uff1a\u7576TouchGFX Designer\u751f\u6210\u7a0b\u5f0f\u78bc\u6642\uff0c\u5c07\u751f\u6210\u9019\u4e9b\u985e\u548c\u76f8\u61c9\u7684\u6a94\u6848\u3002 \u56e0\u6b64\uff0c\u4e0d\u61c9\u624b\u52d5\u7de8\u8f2f\u9019\u4e9b\u985e\u548c\u6a94\u6848\uff0c\u56e0\u70ba\u4efb\u4f55\u624b\u52d5\u4fee\u6539\u90fd\u6703\u5728\u4e0b\u4e00\u6b21\u904b\u884c\u7a0b\u5f0f\u78bc\u751f\u6210\u5668\u6642\u88ab\u91cd\u5beb\u3002 \u9019\u4e9b\u985e\u662f\u7528\u6236\u985e\u7684\u57fa\u790e\u985e\u5225\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User (\u7528\u6236)"),"\uff1a\u9019\u4e9b\u985e\u5225\u9810\u7559\u7d66\u624b\u5beb\u7a0b\u5f0f\u78bc\u4f7f\u7528\u3002 \u7528\u6236\u53ef\u4ee5\u81ea\u7531\u5730\u5c07\u4efb\u4f55\u7a0b\u5f0f\u78bc\u653e\u5165\u8a72\u5c64\u3002 \u5982\u679c\u6c92\u6709\u7528\u6236\u985e\uff0c\u5c07\u751f\u6210\u7528\u6236\u985e\uff0c\u4e26\u4e14\u6c38\u9060\u4e0d\u6703\u88abTouchGFX Designer\u4fee\u6539\u3002 \u5b83\u5011",(0,r.kt)("em",{parentName:"li"},"\u5c6c\u65bc\u7528\u6236"),"\u3002")),(0,r.kt)(a.Z,{mdxType:"Note"},"TouchGFX Designer\u751f\u6210\u7684\u61c9\u7528\u67b6\u69cb\u662f\u958b\u653e\u5f0f\u7684\uff0c\u5728\u67d0\u7a2e\u610f\u7fa9\u4e0a\uff0c\u5c0d\u60a8\u7684\u5275\u5efa\u5167\u5bb9\u61c9\u7576\u6c92\u6709\u4efb\u4f55\u9650\u5236\u3002 \u5982\u679cTouchGFX Designer\u4e0d\u652f\u63f4\u67d0\u4e9b\u7269\u4ef6\uff08\u5982\u5c0f\u5de5\u5177\u3001\u52d5\u756b\u6216\u6548\u679c\uff09\uff0c\u60a8\u53ef\u4ee5\u5c07\u5b83\u5011\u6dfb\u52a0\u5230\u7528\u6236\u985e\u3002 TouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u5728\u8a2d\u8a08\u4e0a\u4e0d\u5141\u8a31\u5c0d\u88fd\u4f5cTouchGFX\u61c9\u7528\u7684\u65b9\u5f0f\u52a0\u4ee5\u9650\u5236\u3002"),(0,r.kt)("h2",f({},{id:"files-generated-by-touchgfx-designer"}),"TouchGFX Designer\u751f\u6210\u7684\u6a94\u6848"),(0,r.kt)("p",null,"\u6839\u64da\u898f\u5247\uff0cTouchGFX Designer\u5c07",(0,r.kt)("em",{parentName:"p"},"\u53ea"),"\u5728TouchGFX\u5c08\u6848\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"generated"),"\u8cc7\u6599\u593e\u4e2d\u751f\u6210\u6a94\u6848\uff0c\u56e0\u6b64\u4e0d\u5f97\u9032\u884c\u624b\u52d5\u7de8\u8f2f\uff0c\u56e0\u70ba\u6703\u88ab\u8986\u84cb\u3002 \u7136\u800c\uff0cTouchGFX Designer\u4e5f\u53ef\u4ee5\u751f\u6210\u7de8\u8b6f\u6240\u9700\u7684\u7f3a\u5931\u6a94\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"application.config"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"simulator/main.cpp"),"\u3001\u76ae\u819a\u5716\u7247\uff08\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/__designer"),"\u4e2d\uff09\u3001\u4ee5\u53ca\u7bc4\u4f8b\u5f71\u7247\uff08\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos/__designer"),"\u4e2d\uff09\u3002 \u4e8b\u5be6\u4e0a\uff0cTouchGFX Designer\u53ea\u9700\u8981\u4e0b\u5217\u6a94\u6848\u5c31\u80fd\u751f\u6210\u3001\u7de8\u8b6f\u548c\u904b\u884c\u5c08\u6848\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u5c08\u6848\u7684",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"li"},"gui"),"\u8cc7\u6599\u593e\u7684\u7528\u6236\u7a0b\u5f0f\u78bc\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"li"},"assets/images"),"\u8cc7\u6599\u593e\u7684\u4f7f\u7528\u8005\u5716\u50cf\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/texts/texts.xml"),"\u6a94\u4e2d\u7684\u6587\u5b57\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"li"},"assets/fonts"),"\u8cc7\u6599\u593e\u7684\u5b57\u9ad4\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/videos"),"\u8cc7\u6599\u593e\u4e2d\u7684\u5f71\u7247\uff08\u5982\u679c\u6709\uff09")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5728\u4f7f\u7528\u7248\u672c\u63a7\u5236\uff08\u5982Git\uff09\u6642\uff0c\u9019\u610f\u5473\u8457\u5be6\u969b\u4e0a\u53ea\u9700\u8981\u5c07\u4e0a\u9762\u5217\u51fa\u7684\u6a94\u63d0\u4ea4\u5230\u5b58\u5132\u5eab\u3002 \u5176\u9918\u7684\u7531TouchGFX Designer\u81ea\u5df1\u751f\u6210\u3002"),(0,r.kt)("h2",f({},{id:"example"}),"\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u500b\u540c\u6642\u64c1\u6709\u751f\u6210\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc\u61c9\u7528\u7684\u7c21\u55ae\u7bc4\u4f8b\u3002 \u8a72\u7bc4\u4f8b\u61c9\u80fd\u66f4\u8a73\u7d30\u5730\u8aaa\u660e\u4ee5\u4e0a\u60c5\u6cc1\u3002"),(0,r.kt)("h3",f({},{id:"touchgfx-designer-view"}),"TouchGFX Designer\u8996\u5716"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u53ea\u6709\u4e00\u500b\u87a2\u5e55\u3002 \u87a2\u5e55",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreen"),"\u5305\u542b\u4e00\u500b",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u65b9\u6846"),(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\u548c\u4e00\u500b",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/buttons/button"}),"\u6309\u9215"),(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\u3002 \u6211\u5011\u8a2d\u7f6e\u4e86\u5728\u9ede\u64ca",(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\u6642\u547c\u53eb\u865b\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor()"),"\u7684\u4ea4\u4e92\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u61c9\u7528"),(0,r.kt)("p",null,"\u7576\u6309\u4e0b\u6309\u9215\u6642\uff0c\u6211\u5011\u60f3\u8981\u8b93\u80cc\u666f\u6846\u7684\u984f\u8272\u8b8a\u70ba\u65b0\u7684\u96a8\u6a5f\u8272\u3002 \u70ba\u4e86\u6f14\u793a\u5982\u4f55\u7de8\u5beb\u60a8\u81ea\u5df1\u7684\u81ea\u8a02\u7a0b\u5f0f\u78bc\uff0c\u6211\u5011\u5c07\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u5be6\u73fe\u6b64\u884c\u70ba\u3002"),(0,r.kt)("h3",f({},{id:"layers"}),"\u5c64"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u8a72\u7bc4\u4f8b\u4e2d\u6d89\u53ca\u7684\u4e0d\u540c\u985e\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.png",mdxType:"Figure"},"\u985e\u7684\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u770b\u5230\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\u4f4d\u65bc\u751f\u6210\u7a7a\u9593\uff0c\u9019\u4ee3\u8868\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728TouchGFX Designer\u4e2d\u57f7\u884c\u66f4\u6539\u6642\uff0c\u6703\u91cd\u65b0\u751f\u6210\u9019\u4e9b\u985e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6236\u4e0d\u61c9\u624b\u52d5\u7de8\u8f2f\u9019\u4e9b\u985e"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenView"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenPresenter"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplication"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeap"),"\u662f\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u5275\u5efa\u7684\uff0c\u9019\u4ee3\u8868\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728TouchGFX Designer\u4e2d\u57f7\u884c\u66f4\u6539\u6642\uff0c\u4e0d\u6703\u91cd\u65b0\u751f\u6210\u9019\u4e9b\u985e"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6236\u53ef\u4ee5\u5728\u9019\u88e1\u81ea\u7531\u5730\u6dfb\u52a0\u81ea\u8a02\u7a0b\u5f0f\u78bc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"box1"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"button1"),"\u7684\u6240\u6709\u8a2d\u7f6e\u90fd\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u790e\u985e\u5225",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\u4e2d\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u65bc\u87a2\u5e55\u4e4b\u9593\u904e\u6e21\u7684\u6240\u6709\u51fd\u6578\u90fd\u4f4d\u65bc\u751f\u6210\u7684\u61c9\u7528\u57fa\u790e\u985e\u5225",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u65bc\u78ba\u4fdd\u5206\u914d\u4e86\u9069\u91cf\u5b58\u5132\u7a7a\u9593\u7684\u6240\u6709\u8a18\u9304\u5747\u4f4d\u65bc\u751f\u6210\u7684\u5806\u57fa\u790e\u985e\u5225",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\u4e2d\u3002")),(0,r.kt)("p",null,"\u7528\u6236\u53ef\u4ee5\u81ea\u7531\u5730\u7de8\u8f2f\u7528\u6236\u7a0b\u5f0f\u78bc\u985e\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u5c0f\u5de5\u5177\u3002 \u76ee\u524d\uff0c\u6211\u5011\u53ea\u5be6\u73fe",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u51fd\u6578\u4f86\u5be6\u969b\u66f4\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\u7684\u984f\u8272\u3002"),(0,r.kt)("h3",f({},{id:"code"}),"\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u8996\u5716\u57fa\u790e\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u751f\u6210\u7684\u65b9\u6846\u548c\u6309\u9215\u8a2d\u7f6e\u3002 \u6211\u5011\u9084\u770b\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"buttonCallbackHandler"),"\u4e2d\u865b\u64ec\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u7684\u8a2d\u7f6e\u548c\u547c\u53eb\uff0c\u4f46\u6b64\u523b\u8a72\u51fd\u6578\u9084\u6c92\u6709\u4efb\u4f55\u64cd\u4f5c\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{27-37}","{27-37}":!0}),'/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <touchgfx/Color.hpp>\n#include "BitmapDatabase.hpp"\n\nMyScreenViewBase::MyScreenViewBase() :\n    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)\n{\n    box1.setPosition(0, 0, 800, 480);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    button1.setXY(155, 106);\n    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    button1.setAction(buttonCallback);\n\n    add(box1);\n    add(button1);\n}\n\nvoid MyScreenViewBase::setupScreen()\n{\n\n}\n\nvoid MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &button1)\n    {\n        //Interaction1\n        //When button1 clicked call virtual function\n        //Call setRandomColor\n        setRandomColor();\n    }\n}\n')),(0,r.kt)("p",null,"\u5728\u8996\u5716\u57fa\u790e\u985e\u5225\u7684\u6a19\u982d\u6a94\u4e2d\uff0c\u6211\u5011\u770b\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u7684\u5ba3\u544a\u548c\u91cd\u5beb\u4e26\u5be6\u73fe\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u4e2d\u51fd\u6578\u7684\u6307\u4ee4\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MYSCREENVIEWBASE_HPP\n#define MYSCREENVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/Button.hpp>\n\nclass MyScreenViewBase : public touchgfx::View<MyScreenPresenter>\n{\npublic:\n    MyScreenViewBase();\n    virtual ~MyScreenViewBase() {}\n    virtual void setupScreen();\n\n    /*\n     * Virtual Action Handlers\n     */\n    virtual void setRandomColor()\n    {\n        // Override and implement this function in MyScreen\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box box1;\n    touchgfx::Button button1;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void buttonCallbackHandler(const touchgfx::AbstractButton& src);\n\n};\n\n#endif // MYSCREENVIEWBASE_HPP\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u9032\u884c\u5177\u9ad4\u64cd\u4f5c\u3002 \u5c0e\u822a\u5230\u7528\u6236\u7a0b\u5f0f\u78bc\u6a19\u982d\u6a94",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView.hpp"),"\u4e26\u91cd\u5beb\u51fd\u6578\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{14}","{14}":!0}),"#ifndef MYSCREENVIEW_HPP\n#define MYSCREENVIEW_HPP\n\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n\nclass MyScreenView : public MyScreenViewBase\n{\npublic:\n    MyScreenView();\n    virtual ~MyScreenView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void setRandomColor();\nprotected:\n};\n\n#endif // MYSCREENVIEW_HPP\n")),(0,r.kt)("p",null,"\u7136\u5f8c\uff0c\u6211\u5011\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView"),"\u7684cpp\u6a94\u6848\u4e2d\u5be6\u73fe",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u7684\u5be6\u969b\u884c\u70ba\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/gui/src/my_screen/MyScreenView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{19-23}","{19-23}":!0}),"#include <gui/myscreen_screen/MyScreenView.hpp>\n#include <touchgfx/Color.hpp>\n#include <stdlib.h>\n\nMyScreenView::MyScreenView()\n{\n\n}\n\nvoid MyScreenView::setupScreen()\n{\n    MyScreenViewBase::setupScreen();\n}\n\nvoid MyScreenView::tearDownScreen()\n{\n    MyScreenViewBase::tearDownScreen();\n}\n\nvoid MyScreenView::setRandomColor()\n{\n    box1.setColor(touchgfx::Color::getColorFromRGB(rand()&0xff, rand()&0xff, rand()&0xff));\n    box1.invalidate();\n}\n")),(0,r.kt)("p",null,"\u73fe\u5728\u904b\u884c\u6a21\u64ec\u5668\uff0c\u7d50\u679c\u986f\u793a\u6211\u5011\u5df2\u6210\u529f\u5229\u7528\u751f\u6210\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc\u5275\u5efa\u4e86\u4e00\u500b\u7c21\u55ae\u61c9\u7528 - \u73fe\u5728\u6bcf\u6b21\u60a8\u9ede\u64ca\u6309\u9215\u6642\uff0c\u80cc\u666f\u6846\u90fd\u6703\u8b8a\u70ba\u96a8\u6a5f\u8272\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/simulator-random-color.gif",mdxType:"Figure"},"\u5c55\u793a\u61c9\u7528\u7684\u6a21\u64ec\u5668"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u7576\u7136\uff0c\u60a8\u7121\u9700\u4f7f\u7528TouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u7684\u4efb\u4f55\u7279\u6027\uff0c\u4f46\u5b83\u6709\u53ef\u80fd\u7bc0\u7d04\u5f88\u591a\u6642\u9593\u3002 \u53ef\u4ee5\u7528\u50b3\u7d71\u7684\u65b9\u5f0f\u88fd\u4f5cTouchGFX\u61c9\u7528\uff0c\u53ea\u9700\u624b\u52d5\u6dfb\u52a0\u5fc5\u8981\u7684\u6587\u4ef6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u6b64\u5916\uff0c\u9084\u53ef\u4ee5\u9032\u884c\u6df7\u5408\u548c\u5339\u914d\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e26\u975e\u5728TouchGFX Designer\u5c08\u6848\u4e2d\u5b9a\u7fa9\u7684\u87a2\u5e55\u3002 \u60a8\u53ef\u4ee5\u5c07 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"gotoXYZ")," \u51fd\u6578\u6dfb\u52a0\u5230 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendApplication")," \u985e\uff0c\u4e26\u5c07\u60a8\u7684\u87a2\u5e55\u9700\u8981\u7684\u8996\u5716\u3001\u5448\u73fe\u5668\u548c\u8f49\u63db\u6dfb\u52a0\u5230 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendHeap"),"\u3002"))}w.isMDXComponent=!0}}]);