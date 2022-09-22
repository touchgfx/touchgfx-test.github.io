"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},39487:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.width,r=e.height,a=e.points||[],l=(0,o.Z)(e.imageSource);return n.createElement("div",{style:{position:"relative"}},n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:t,height:r,src:l})),a.map((function(e,t){return n.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},n.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},n.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),n.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),n.createElement("p",null,e.children)))}},82985:function(e,t,r){var n=r(67294);class o extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},4637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return b}});var n=r(3905),o=r(44035),a=r(39487),l=r(82985),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&d(e,r,t[r]);return e};const k={id:"tutorial-05",title:"\u6559\u7a0b5\uff1a\u5275\u5efa\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c"},h=void 0,f={unversionedId:"tutorials/tutorial-05",id:"tutorials/tutorial-05",title:"\u6559\u7a0b5\uff1a\u5275\u5efa\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-05",permalink:"/zh-TW/docs/tutorials/tutorial-05",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-05",title:"\u6559\u7a0b5\uff1a\u5275\u5efa\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c"},sidebar:"docs",previous:{title:"\u6559\u7a0b4\uff1a\u5275\u5efa\u5177\u6709\u81ea\u8a02\u884c\u70ba\u7684\u6efe\u8f2a\u3002",permalink:"/zh-TW/docs/tutorials/tutorial-04"},next:{title:"AbstractButton",permalink:"/zh-TW/docs/api/classes/classtouchgfx_1_1_abstract_button"}},y={},b=[{value:"\u5c07\u81ea\u8a02\u64cd\u4f5c\u6dfb\u52a0\u5230\u87a2\u5e55",id:"adding-a-custom-action-to-a-screen",level:2},{value:"\u5c07\u503c\u50b3\u905e\u7d66\u81ea\u8a02\u64cd\u4f5c",id:"passing-a-value-to-a-custom-action",level:2},{value:"\u5728\u81ea\u8a02\u5bb9\u5668\u4e2d\u4f7f\u7528\u81ea\u8a02\u89f8\u767c\u689d\u4ef6",id:"using-custom-triggers-in-custom-containers",level:2}],C={toc:b};function v(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},C),d),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u901a\u904eTouchGFX Designer\uff0c\u53ef\u4ee5\u5b9a\u7fa9\u5177\u6709\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c\u7684\u4ea4\u4e92\u5143\u4ef6\u3002 \u61c9\u7528\u4e2d\u7684\u6bcf\u500b\u87a2\u5e55\u90fd\u53ef\u80fd\u5305\u542b\u64cd\u4f5c\u96c6\u5408",(0,n.kt)("em",{parentName:"p"},"\uff08\u9019\u4e9b\u662fC++\u4e2d\u7684\u7c21\u55aevoid\u65b9\u6cd5\uff09"),"\uff0c\u60a8\u53ef\u4ee5\u5f9eTouchGFX Designer\u5167\u90e8\u548c\u7a0b\u5f0f\u78bc\u4e2d\u547c\u53eb\u9019\u4e9b\u64cd\u4f5c\uff0c\u800c\u81ea\u8a02\u5bb9\u5668\u4e5f\u53ef\u80fd\u6709\u60a8\u7684\u61c9\u7528\u53ef\u80fd\u56de\u61c9\u7684\u89f8\u767c\u689d\u4ef6",(0,n.kt)("em",{parentName:"p"},"\uff08\u76f8\u7576\u65bcC++\u4e2d\u7684callback "),"\u96c6\u5408\u3002"),(0,n.kt)("p",null,"\u5728\u8a72\u6559\u7a0b\u4e2d\uff0c\u6211\u5011\u5c07\u8a73\u7d30\u4ecb\u7d39\u6b64\u529f\u80fd\uff0c\u4ee5\u63a2\u7d22\u4f7f\u7528\u5b83\u5275\u5efa\u66f4\u7c21\u6f54\u3001\u52d5\u614b\u7684TouchGFX\u61c9\u7528\u7684\u53ef\u80fd\u6027\u3002"),(0,n.kt)("p",null,"\u672c\u6559\u7a0b\u4e0d\u9069\u5408TouchGFX\u7684\u65b0\u4f7f\u7528\u8005\u3002 \u5efa\u8b70\u4ee5\u5f8c\u518d\u5b78\u7fd2\u672c\u6559\u7a0b\u3002"),(0,n.kt)("h2",g({},{id:"adding-a-custom-action-to-a-screen"}),"\u5c07\u81ea\u8a02\u64cd\u4f5c\u6dfb\u52a0\u5230\u87a2\u5e55"),(0,n.kt)("p",null,"\u5728\u9019\u4e00\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u500b\u5305\u542b\u80cc\u666f\u65b9\u584a\u548c\u6309\u9215\u7684\u61c9\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5c07\u81ea\u8a02\u64cd\u4f5c\u6dfb\u52a0\u5230\u61c9\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6309\u9215\u88ab\u6309\u4e0b\u6642\u4f7f\u7528\u81ea\u8a02\u64cd\u4f5c\u4fee\u6539\u80cc\u666f\u8272")),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u7528\u5c3a\u5bf8\u70ba480x272\u7684\u5716\u50cf\uff08\u9069\u7528\u65bcSTM32F746\u6216\u6a21\u64ec\u5668\u7b49\uff09\u65b0\u5efa\u4e00\u500b\u7a7a\u767d\u61c9\u7528\uff0c\u4e26\u63d2\u5165\u4e00\u500b\u7528\u4f5c\u80cc\u666f\u7684\u65b9\u584a\uff08\u5c07\u5176\u547d\u540d\u70ba\u201cbackground\u201d\uff09\u548c\u4e00\u500b\u6309\u9215\uff08\u5c07\u5176\u547d\u540d\u70ba\u201cbutton\u201d\uff09\u3002 \u7d50\u679c\u61c9\u985e\u4f3c\u65bc\u4e0b\u5716\uff1a"),(0,n.kt)(a.Z,{points:[[420,85]],imageSource:"/img/tutorials/tutorial-05/white-background-and-button-4-17.png",mdxType:"FigureWithPoints"},"\u6dfb\u52a0\u4e00\u500b\u767d\u8272\u80cc\u666f\u65b9\u584a\u548c\u4e00\u500b\u6309\u9215"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u5c07\u4e00\u500b\u81ea\u8a02\u64cd\u4f5c\u6dfb\u52a0\u5230\u87a2\u5e55\u3002 \u60a8\u53ef\u4ee5\u5f9e\u87a2\u5e55\u7684\u201c\u5c6c\u6027\u201d\u9078\u9805\u5361\u5b8c\u6210\u6b64\u64cd\u4f5c\uff0c\u65b9\u6cd5\u662f\u9078\u64c7\u201cScreen\u201d\u4e26\u6309\u4e0b\u201cActions\u201d\u7d44\u4e2d\u7684\u201c+\u201d\u6309\u9215\uff08\u4e0a\u9762\u7684\u57161\uff09\u3002 \u5c07\u64cd\u4f5c\u547d\u540d\u70ba\u201csetBackgroundColor\u201d\uff0c\u63d0\u4f9b\u8af8\u5982\u201c\u8a2d\u7f6e\u80cc\u666f\u8272\u201d\u4e4b\u985e\u7684\u63cf\u8ff0\u3002 \u4e0d\u8981\u8a2d\u7f6e\u6b64\u64cd\u4f5c\u7684\u985e\u578b\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.png",mdxType:"Figure"},"\u5c07\u65b0\u7684\u81ea\u8a02\u64cd\u4f5c\u6dfb\u52a0\u5230\u87a2\u5e55"),(0,n.kt)("p",null,"\u6309\u4e0b ",(0,n.kt)(l.Z,{mdxType:"Shortcut"},"F4")," \u9375\u751f\u6210\u5c08\u6848\u7a0b\u5f0f\u78bc\u3002 \u9019\u5c07\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp"),"\u4e2d\u751f\u6210\u4e00\u500b\u540d\u70ba",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor()"),"\u7684\u865b\u64ec\u65b9\u6cd5\uff0c\u5b83\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp"),"\u4e2d\u6709\u4e00\u500b\u7a7a\u5be6\u73fe\u3002"),(0,n.kt)("p",null,"You can add functionality to this method by overriding it in user code in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," file or by creating interactions through TouchGFX Designer. Let's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked."),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.png",mdxType:"Figure"},"\u5728\u9ede\u64ca\u6309\u9215\u6642\u547c\u53ebsetBackgroundColor"),(0,n.kt)("p",null,"\u73fe\u5728\uff0c\u6211\u5011\u5fc5\u9808\u6307\u5b9a\u5728\u547c\u53eb",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u6642\u5be6\u969b\u767c\u751f\u7684\u64cd\u4f5c\u3002 \u70ba\u6b64\uff0c\u5728\u53e6\u4e00\u500b\u4ea4\u4e92\u4e2d\u4f7f\u7528\u65b0\u7684\u81ea\u8a02\u64cd\u4f5c (1) \u4f5c\u70ba\u89f8\u767c\u689d\u4ef6\u3002 \u9996\u5148\uff0c\u5728\u89f8\u767c\u689d\u4ef6",(0,n.kt)("em",{parentName:"p"},"\u201c\u547c\u53ebsetBackgroundColor\u201d"),"\u767c\u751f\u6642\uff0c\u4f7f\u7528\u64cd\u4f5c",(0,n.kt)("em",{parentName:"p"},"\u201cChange box color\u201d"),"(2) \u5c07\u80cc\u666f\u65b9\u584a\u7684\u8272\u5f69\u7c21\u55ae\u5730\u8a2d\u7f6e\u70ba\u9ed1\u8272\u3002"),(0,n.kt)(a.Z,{points:[[355,60],[410,76]],imageSource:"/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.png",mdxType:"FigureWithPoints"},"\u5be6\u73fe\u81ea\u8a02\u64cd\u4f5csetBackgroundColor\u7684\u529f\u80fd"),(0,n.kt)("p",null,"\u73fe\u5728\uff0c\u904b\u884c\u6a21\u64ec\u5668\u4e26\u6309\u4e0b\u6309\u9215\uff1b\u80cc\u666f\u61c9\u8b8a\u70ba\u9ed1\u8272\u3002 \u60a8\u5df2\u6210\u529f\u5275\u5efa\u7b2c\u4e00\u500b\u81ea\u8a02\u64cd\u4f5c\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/black-color-result-4-17.png",mdxType:"Figure"},"\u6309\u4e0b\u6309\u9215\u5c07\u80cc\u666f\u8b8a\u70ba\u9ed1\u8272"),(0,n.kt)("h2",g({},{id:"passing-a-value-to-a-custom-action"}),"\u5c07\u503c\u50b3\u905e\u7d66\u81ea\u8a02\u64cd\u4f5c"),(0,n.kt)("p",null,"\u672c\u7bc0\u5c07\u5728\u525b\u5275\u5efa\u7684\u61c9\u7528\u7684\u57fa\u790e\u4e0a\uff0c\u57fa\u65bc\u81ea\u8a02\u64cd\u4f5c\u7684\u6982\u5ff5\u9032\u884c\u5982\u4e0b\u62d3\u5c55\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c07\u53c3\u6578\u6dfb\u52a0\u5230setBackgroundColor\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u5c07\u96a8\u6a5f\u8272\u50b3\u905e\u5230setBackgroundColor"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6309\u4e0b\u6309\u9215\u6642\u5c07\u80cc\u666f\u4fee\u6539\u70ba\u96a8\u6a5f\u8272")),(0,n.kt)("p",null,"\u70ba\u4e86\u8b93\u8a72\u61c9\u7528\u66f4\u6709\u8da3\uff0c\u6211\u5011\u5c07\u4e00\u500b\u503c\u50b3\u905e\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," \u81ea\u8a02\u64cd\u4f5c\uff0c\u4f7f\u4e4b\u8b8a\u5f97\u66f4\u52d5\u614b\u3002"),(0,n.kt)("p",null,"\u8f49\u81f3\u87a2\u5e55\u7684\u201cinteractions\u201d\u9078\u9805\u5361\uff0c\u70ba\u64cd\u4f5c\u6309\u4e0bx\u6309\u9215\u522a\u9664\u5169\u500b\u7576\u524d\u64cd\u4f5c\uff0c\u7136\u5f8c\u6211\u5011\u5c07\u8a2d\u7f6e\u65b0\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u8f49\u81f3\u87a2\u5e55\u7684\u201c\u5c6c\u6027\u201d\u9078\u9805\u5361\uff0c\u627e\u5230\u81ea\u8a02\u64cd\u4f5c",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," \uff0c\u53d6\u6d88\u9078\u4e2d\u985e\u578b\u6838\u53d6\u65b9\u584a\u4e26\u8f38\u5165\u201ccolortype\u201d\uff0c\u9019\u5c07\u662f\u6211\u5011\u8981\u50b3\u905e\u7d66\u64cd\u4f5c\u7684\u53c3\u6578\u985e\u578b\uff08colortype\u662f\u7528\u65bc\u63cf\u8ff0\u8272\u5f69\u7684\u81ea\u5e36TouchGFX\u985e\u578b\uff09\u3002 \u4e0d\u80fd\u547d\u540d\u53c3\u6578\uff0c\u5b83\u7684\u540d\u7a31\u5c07\u662f",(0,n.kt)("em",{parentName:"p"},'"value"'),"\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/adding-type-to-action-4-17.png",mdxType:"Figure"},"\u70ba\u81ea\u8a02\u64cd\u4f5c\u8a2d\u7f6e\u53c3\u6578"),(0,n.kt)("p",null,"\u4e0b\u9762\u4f86\u8a2d\u7f6e\u4ea4\u4e92\uff0c\u5b83\u4f7f\u7528\u6211\u5011\u65b0\u6dfb\u52a0\u7684\u53c3\u6578\u503c\u3002 \u6211\u5011\u4f7f\u7528\u89f8\u767c\u689d\u4ef6\u201csetBackgroundColor is called\u201d\u548c\u64cd\u4f5c\u201cExecute C++ code\u201d\u9032\u884c\u8a2d\u7f6e\u3002 \u6211\u5011\u8981\u7528\u65b0\u53c3\u6578\u8a2d\u7f6e\u80cc\u666f\u65b9\u584a\u7684\u8272\u5f69\uff0c\u56e0\u6b64\u8981\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\u61c9\u662f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"background.setColor(value);\nbackground.invalidate();\n")),(0,n.kt)("p",null,"\u7b2c\u4e8c\u884c\u5f37\u5236\u7528\u65b0\u8272\u5f69\u91cd\u7e6a\u80cc\u666f\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/set-color-execute-code-4-17.png",mdxType:"Figure"},"\u4f7f\u7528\u50b3\u905e\u7684\u503c\u4fee\u6539\u80cc\u666f\u8272\u5f69"),(0,n.kt)("p",null,"\u8acb\u6ce8\u610f\uff0c\u89f8\u767c\u689d\u4ef6\u986f\u793a\u4e86\u53c3\u6578\u7684\u540d\u7a31\u548c\u985e\u578b\u201cvalue : colortype\u201d\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u5011\u5c07\u8a2d\u7f6e\u5728\u9ede\u64ca\u6309\u9215\u6642\u5be6\u969b\u547c\u53ebsetBackgroundColor\u7684\u4ea4\u4e92\u3002 \u6dfb\u52a0\u53e6\u4e00\u500b\u5177\u6709\u89f8\u767c\u689d\u4ef6\u201cButton is clicked\u201d\u548c\u64cd\u4f5c\u201cCall Screen1 setBackgroundColor\u201d\u7684\u4ea4\u4e92\uff0c\u8acb\u6ce8\u610f\uff0c\u503c\u7684\u5c6c\u6027\u4e5f\u986f\u793a\u4e86\u5b83\u7684\u9810\u671f\u985e\u578b\u3002 \u6211\u5011\u5c07\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u4e2d\u5229\u7528\u96a8\u6a5f\u5316\u65b9\u6cd5",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),"\u5c07\u96a8\u6a5f\u8272\u50b3\u905e\u7d66setBackgroundColor\uff0c\u4ee5\u4fbf\u7372\u53d6\u4e09\u500b0\u81f3255\u4e4b\u9593\u7684\u4e82\u6578\u4e26\u7528\u5b83\u5011\u6307\u5b9a\u8272\u5f69\u3002 \u70ba\u4e86\u5b58\u53d6",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),"\uff0c\u6211\u5011\u9700\u8981\u5c07\u5176\u5305\u542b\u5728\u61c9\u7528\u4e2d\u3002 \u9084\u53ef\u4ee5\u5f9eTouchGFX Designer\u5167\u90e8\u70ba\u87a2\u5e55\u548c\u81ea\u8a02\u5bb9\u5668\u63d0\u4f9b\u60a8\u81ea\u5df1\u7684includes\u51fd\u6578\uff0c\u5728\u672c\u4f8b\u4e2d\u6211\u5011\u9700\u8981\u9019\u6a23\u505a\u3002 \u8f49\u81f3\u87a2\u5e55\u7684\u201c\u5c6c\u6027\u201d\u9078\u9805\u5361\uff0c\u5728\u201cINCLUDES\u201d\u7d44\u4e0b\u9762\u8f38\u5165\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n")),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/include-stdlib-4-17.png",mdxType:"Figure"},"\u5305\u542bstdlib\u4ee5\u4fbf\u5b58\u53d6rand()"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u5c0d\u65bc\u503c\u5c6c\u6027\uff0c\u6211\u5011\u5c07\u8f38\u5165 (1)\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(a.Z,{points:[[355,110]],imageSource:"/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.png",mdxType:"FigureWithPoints"},"\u5728\u9ede\u64ca\u6309\u9215\u6642\u50b3\u905e\u96a8\u6a5f\u8272\u5f69\u503c"),(0,n.kt)("p",null,"\u73fe\u5728\uff0c\u904b\u884c\u6a21\u64ec\u5668\u4e26\u5617\u8a66\u591a\u6b21\u6309\u4e0b\u6309\u9215\u3002 \u60a8\u61c9\u770b\u5230\u80cc\u666f\u8b8a\u70ba\u96a8\u6a5f\u8272\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-initial-4-17.png",mdxType:"Figure"},"\u9ede\u64ca\u6309\u9215\u6642\u5f97\u5230\u7684\u96a8\u6a5f\u8272"),(0,n.kt)("h2",g({},{id:"using-custom-triggers-in-custom-containers"}),"\u5728\u81ea\u8a02\u5bb9\u5668\u4e2d\u4f7f\u7528\u81ea\u8a02\u89f8\u767c\u689d\u4ef6"),(0,n.kt)("p",null,"\u6700\u5f8c\uff0c\u81ea\u8a02\u5bb9\u5668\u9084\u53ef\u4ee5\u5b9a\u7fa9\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u96c6\uff0c\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u57fa\u65bc\u61c9\u7528\u9032\u884c\u5982\u4e0b\u62d3\u5c55\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5275\u5efa\u65b0\u7684\u540d\u70baColorEmitter\u7684\u81ea\u8a02\u5bb9\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u5c07\u540d\u70ba\u201ccolorChanged\u201d\u7684\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u6dfb\u52a0\u5230ColorEmitter"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6309\u4e0b\u6309\u9215\u6642\u7528\u89f8\u767c\u689d\u4ef6colorChanged\u5c07\u96a8\u6a5f\u8272\u50b3\u905e\u7d66\u61c9\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u87a2\u5e55\u4e2d\u8a2d\u7f6e\u4ea4\u4e92\u4ee5\u76e3\u6e2c\u89f8\u767c\u689d\u4ef6colorChanged"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528ColorEmitter\u767c\u9001\u7684\u4efb\u4f55\u8272\u5f69\u8a2d\u7f6e\u80cc\u666f\u65b9\u584a\u7684\u8272\u5f69")),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u5011\u5617\u8a66\u7528\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u4f86\u6307\u793a\u61c9\u7528\u4e2d\u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002 \u6211\u5011\u4e0d\u4f7f\u7528\u5c07\u96a8\u6a5f\u8272\u50b3\u905e\u7d66",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),"\u7684\u6309\u9215\u4ea4\u4e92\uff0c\u800c\u662f\u5617\u8a66\u8b93\u81ea\u8a02\u5bb9\u5668\u5c07\u96a8\u6a5f\u8272\u767c\u9001\u5230\u87a2\u5e55\uff0c\u7136\u5f8c\u8b93\u87a2\u5e55\u4f7f\u7528\u81ea\u8a02\u5bb9\u5668\u50b3\u905e\u7684\u4efb\u4f55\u503c\u3002 \u9019\u6703\u662f\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff0c\u61c9\u7528\u4e2d\u7684\u4e0d\u540cUI\u5143\u4ef6\u76f8\u4e92\u901a\u4fe1\uff0c\u4f7f\u61c9\u7528\u5177\u6709\u66f4\u5c0f\u7684\u9ad4\u7a4d\u548c\u66f4\u9ad8\u7684\u53ef\u8907\u7528\u6027\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u65b0\u5efa\u4e00\u500b\u81ea\u8a02\u5bb9\u5668\u4e26\u5c07\u5176\u547d\u540d\u70ba\u201cColorEmitter\u201d\u3002 \u63d2\u5165\u4e00\u500b\u6309\u9215\u4e26\u5c07\u5176\u547d\u540d\u70ba\u201cbutton\u201d\u3002 \u7d50\u679c\u61c9\u985e\u4f3c\u65bc\u4e0b\u5716\uff1a"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.png",mdxType:"Figure"},"\u81ea\u8a02\u5bb9\u5668ColorEmitter"),(0,n.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u5011\u8981\u8b93ColorEmitter\u5728\u6309\u9215\u88ab\u9ede\u64ca\u6642\u767c\u9001\u96a8\u6a5f\u8272\u3002 \u7136\u5f8c\uff0c\u4efb\u4f55\u7269\u4ef6\u90fd\u53ef\u4ee5\u6c7a\u5b9a\u76e3\u6e2c\u6b64\u985e\u767c\u9001\u4e26\u4f7f\u7528\u6b64\u8272\u5f69\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u5011\u53ea\u6a21\u4eff\u4e4b\u524d\u7684\u884c\u70ba\uff0c\u4f7f\u7528\u6b64\u8272\u5f69\u8a2d\u7f6e\u80cc\u666f\u8272\u3002"),(0,n.kt)("p",null,"\u70ba\u4e86\u8b93\u81ea\u8a02\u5bb9\u5668\u767c\u9001\u984f\u8272\uff0c\u9996\u5148\u9700\u8981\u5275\u5efa\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u3002 \u8f49\u81f3\u81ea\u8a02\u5bb9\u5668\u7684\u201c\u5c6c\u6027\u201d\u9078\u9805\u5361\uff0c\u6309\u4e0b\u201cTriggers\u201d\u7d44\u4e2d\u7684\u201c+\u201d\u6309\u9215 (1)\u3002 \u5c07\u89f8\u767c\u689d\u4ef6\u547d\u540d\u70ba\u201ccolorChanged\u201d\uff0c\u8f38\u5165\u8aaa\u660e\u201cThe color has changed\u201d\uff0c\u4e26\u5c07\u985e\u578b\u8a2d\u7f6e\u70ba\u201ccolortype\u201d\u3002"),(0,n.kt)(a.Z,{points:[[420,78]],imageSource:"/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.png",mdxType:"FigureWithPoints"},"\u5c07\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u6dfb\u52a0\u5230\u81ea\u8a02\u5bb9\u5668"),(0,n.kt)("p",null,"\u7136\u5f8c\uff0c\u8f49\u81f3\u81ea\u8a02\u5bb9\u5668\u7684\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361\u4e26\u65b0\u5efa\u4e00\u500b\u4ea4\u4e92\u3002 \u4f7f\u7528\u89f8\u767c\u689d\u4ef6\u201cButton is clicked\u201d\u548c\u64cd\u4f5c\u201cEmit colorChanged\u201d\u3002 \u73fe\u5728\u6211\u5011\u8981\u767c\u9001\u96a8\u6a5f\u8272\uff0c\u5c0d\u503c\u5c6c\u6027\u4f7f\u7528\u8207\u4e4b\u524d\u76f8\u540c\u7684\u7a0b\u5f0f\u78bc\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/emitting-color-changed-4-17.png",mdxType:"Figure"},"\u767c\u9001\u81ea\u8a02\u89f8\u767c\u689d\u4ef6"),(0,n.kt)("p",null,"\u4f46\u662f\uff0c\u7531\u65bc\u81ea\u8a02\u5bb9\u5668\u4e2d\u672a\u81ea\u52d5\u5305\u542b",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::Color"),"\u547d\u540d\u7a7a\u9593\uff0c\u56e0\u6b64\u6700\u521d\u4e26\u4e0d\u8d77\u4f5c\u7528\u3002 \u8207\u4ee5\u524d\u4e00\u6a23\uff0c\u6211\u5011\u5c07\u70ba\u81ea\u8a02\u5bb9\u5668\u63d0\u4f9b\u81ea\u5df1\u7684include\u51fd\u6578\u3002 \u8f49\u81f3\u81ea\u8a02\u5bb9\u5668\u7684\u201cproperties\u201d\u9078\u9805\u5361\uff0c\u5728\u201cIncludes\u201d\u7d44(1) \u4e0b\u9762\u8f38\u5165\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n")),(0,n.kt)(a.Z,{points:[[420,115]],imageSource:"/img/tutorials/tutorial-05/extra-includes-4-17.png",mdxType:"FigureWithPoints"},"\u63d0\u4f9b\u984d\u5916\u7684includes\u51fd\u6578"),(0,n.kt)("p",null,"\u73fe\u5728\uff0c\u6211\u5011\u8981\u7528\u65b0\u5efa\u7684\u81ea\u8a02\u5bb9\u5668ColorEmitter\u66ff\u4ee3\u820a\u6309\u9215\u3002 \u9078\u64c7Screen1\u4e26\u522a\u9664\u9019\u88e1\u7684\u6309\u9215\u3002 \u9019\u61c9\u7576\u6703\u5728\u4f7f\u7528\u6b64\u6309\u9215\u7684\u4ea4\u4e92\u4e2d\u751f\u6210\u932f\u8aa4\uff0c\u56e0\u6b64\u9084\u9700\u8981\u522a\u9664\u6b64\u4ea4\u4e92\uff0c\u6211\u5011\u5c07\u70baColorEmitter\u5275\u5efa\u65b0\u7684\u4ea4\u4e92\u3002 \u73fe\u5728\uff0c\u5728Screen1\u4e0a\u63d2\u5165ColorEmitter\u5be6\u4f8b\uff0c\u7136\u5f8c\u5728Screen1\u4e0a\u65b0\u5efa\u4e00\u500b\u4ea4\u4e92\u3002 \u5c0d\u65bc\u89f8\u767c\u689d\u4ef6\uff0c\u60a8\u61c9\u7576\u6703\u770b\u5230\u4e00\u500b\u540d\u70ba\u201cColorEmitter colorChanged happens\u201d\u7684\u9078\u9805\u3002 \u9078\u64c7\u8a72\u9078\u9805\uff0c\u4e26\u70ba\u64cd\u4f5c\u9078\u64c7\u201cCall Screen1 setBackgroundColor\u201d\u3002 \u73fe\u5728\uff0c\u6211\u5011\u9700\u4f7f\u7528colorChanged\u767c\u9001\u7684\u503c\uff0c\u5176\u540d\u7a31\u59cb\u7d42\u70ba\u201cvalue\u201d\uff08\u5982\u4e0a\u6587\u6240\u8ff0\uff09\u3002 \u56e0\u6b64\uff0c\u5728\u503c\u5c6c\u6027\u4e2d\u8f38\u5165\u201cvalue\u201d\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.png",mdxType:"Figure"},"\u8a2d\u7f6e\u4ea4\u4e92\u4ee5\u76e3\u6e2ccolorChanged\u81ea\u8a02\u89f8\u767c\u689d\u4ef6"),(0,n.kt)("p",null,"\u73fe\u5728\uff0c\u904b\u884c\u6a21\u64ec\u5668\u4e26\u518d\u6b21\u5617\u8a66\u6309\u4e0b\u6309\u9215\u3002 \u61c9\u7528\u61c9\u986f\u793a\u76f8\u540c\u884c\u70ba\uff0c\u80cc\u666f\u8b8a\u70ba\u96a8\u6a5f\u8272\u3002 \u73fe\u5728\uff0c\u6211\u5011\u4e0d\u50c5\u5728\u87a2\u5e55\u4e0a\u5be6\u73fe\u4e86\u6240\u6709\u529f\u80fd\uff0c\u9084\u6210\u529f\u5730\u5728\u87a2\u5e55\u8207\u5b83\u7684\u4e00\u4e9b\u8f03\u5c0f\u7684\u53ef\u8907\u7528\u5143\u4ef6\uff08\u5373\u7c21\u55ae\u7684ColorEmitter\uff09\u4e4b\u9593\u5efa\u7acb\u4e86\u901a\u4fe1\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-final-4-17.png",mdxType:"Figure"},"\u9ede\u64ca\u6309\u9215\u6642\u5f97\u5230\u7684\u96a8\u6a5f\u8272"))}v.isMDXComponent=!0}}]);