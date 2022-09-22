"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5232],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,d=c["".concat(o,".").concat(g)]||c[g]||s[g]||l;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children))}},43470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return f}});var r=n(3905),i=n(44035),l=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&s(e,n,t[n]);return e};const g={id:"images-view",title:"\u56fe\u50cf\u89c6\u56fe"},d=void 0,k={unversionedId:"development/ui-development/designer-user-guide/images-view",id:"development/ui-development/designer-user-guide/images-view",title:"\u56fe\u50cf\u89c6\u56fe",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/images-view",permalink:"/zh-CN/docs/development/ui-development/designer-user-guide/images-view",draft:!1,tags:[],version:"current",frontMatter:{id:"images-view",title:"\u56fe\u50cf\u89c6\u56fe"},sidebar:"docs",previous:{title:"\u753b\u5e03\u89c6\u56fe",permalink:"/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view"},next:{title:"\u6587\u672c\u89c6\u56fe",permalink:"/zh-CN/docs/development/ui-development/designer-user-guide/texts-view"}},v={},f=[{value:"\u6811\u89c6\u56fe",id:"tree-view",level:2},{value:"\u8868\u89c6\u56fe",id:"table-view",level:2}],b={toc:f};function w(e){var t,n=e,{components:l}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),s),a(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u201c\u56fe\u50cf\u89c6\u56fe\u201d\u7528\u4e8e\u7ba1\u7406TouchGFX\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u56fe\u50cf (\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"assets\\images")," \u6587\u4ef6\u5939)\u3002 \u5b83\u5305\u542b2\u90e8\u5206\uff1a",(0,r.kt)("a",c({parentName:"p"},{href:"#tree-view"}),"\u6811\u89c6\u56fe"),"\uff08\u5de6\u4fa7\uff09\u3001",(0,r.kt)("a",c({parentName:"p"},{href:"#table-view"}),"\u8868\u89c6\u56fe"),"\uff08\u53f3\u4fa7\uff09\u3002"),(0,r.kt)("p",null,"\u56fe\u50cf\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u503c\u53ef\u4ee5\u5728",(0,r.kt)("a",c({parentName:"p"},{href:"config-view"}),"\u914d\u7f6e\u89c6\u56fe"),"\u4e2d\u7684",(0,r.kt)("a",c({parentName:"p"},{href:"config-view#default-image-configuration"}),"\u9ed8\u8ba4\u56fe\u50cf\u8bbe\u7f6e"),"\u4e2d\u4fee\u6539\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u56fe\u50cf\u89c6\u56fe"),(0,r.kt)("h2",c({},{id:"tree-view"}),"\u6811\u89c6\u56fe"),(0,r.kt)("p",null,"\u6811\u89c6\u56fe\u63d0\u4f9b\u5e94\u7528\u4e2d\u7684\u56fe\u50cf\u53ca\u76f8\u5173\u6587\u4ef6\u5939\u7684\u603b\u89c8\u3002 \u53ef\u901a\u8fc7\u62d6\u653e\u7f51\u683c\u5206\u5272\u6761\u6765\u4fee\u6539\u6811\u89c6\u56fe\u7684\u5bbd\u5ea6\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",mdxType:"Figure"},"\u56fe\u50cf\u89c6\u56fe\u4e2d\u7684\u6811\u89c6\u56fe"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u6dfb\u52a0\u56fe\u50cf\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"assets\\images")," \u6587\u4ef6\u5939\uff0c\u65b9\u6cd5\u662f\u70b9\u51fb\u5e26\u201c+\u201d\u7684\u84dd\u8272\u6309\u94ae\uff0c\u6216\u8005\u5c06\u56fe\u50cf\u4ece\u6587\u4ef6\u7ba1\u7406\u5668\u76f4\u63a5\u62d6\u653e\u5230\u6811\u89c6\u56fe\u4e2d\u3002 \u52a0\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"assets\\images")," \u6587\u4ef6\u5939\u4e2d\u56fe\u50cf\u5c06\u4f1a\u81ea\u52a8\u663e\u793a\u5728\u56fe\u50cf\u7ba1\u7406\u5668\u4e2d\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u6587\u4ef6\u5939\u8282\u70b9\uff0c\u8be5\u6587\u4ef6\u5939\u4e2d\u7684\u56fe\u50cf\uff08\u70b9\u51fb\u6839\u6587\u4ef6\u5939\u201cimages\u201d\u5c06\u663e\u793a\u5e94\u7528\u4e2d\u7684\u6240\u6709\u56fe\u50cf\uff0c\u5305\u62ec\u5b50\u6587\u4ef6\u5939\u4e2d\u7684\u56fe\u50cf\uff09\u5c06\u663e\u793a\u5728\u8868\u89c6\u56fe\u4e2d\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u56fe\u50cf\u8282\u70b9\u8fd8\u5c06\u5728\u8868\u89c6\u56fe\u4e2d\u663e\u793a\u540c\u4e00\u6587\u4ef6\u5939\u4e0b\u7684\u5176\u4ed6\u56fe\u50cf\uff0c\u9009\u4e2d\u5b83\u53ef\u5728\u53f3\u4fa7\u5c5e\u6027\u89c6\u56fe\u4e2d\u4fee\u6539\u5176\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u6587\u4ef6\u5939\u65c1\u8fb9\u7684>/V\u5f62\u6807\u8bb0\u5c06\u5c55\u5f00/\u6298\u53e0\u6587\u4ef6\u5939\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u6811\u89c6\u56fe\u8fb9\u7ebf\u7684>/<\u5f62\u6807\u8bb0\u5c06\u5c55\u5f00/\u6298\u53e0\u6811\u89c6\u56fe\u3002"),(0,r.kt)("h2",c({},{id:"table-view"}),"\u8868\u89c6\u56fe"),(0,r.kt)("p",null,"\u8868\u89c6\u56fe\u663e\u793a\u5f53\u524d\u9009\u4e2d\u7684\u6587\u4ef6\u5939\u4e2d\u7684\u56fe\u50cf\u5217\u8868\uff0c\u5176\u4e2d\u4e0d\u540c\u5217\u5bf9\u5e94\u56fe\u50cf\u7684\u76f8\u5e94\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u9009\u4e2d\u56fe\u50cf\u884c\u7b2c\u4e00\u5217\u4e2d\u7684\u590d\u9009\u6846\uff0c\u53ef\u9009\u4e2d\u4e00\u884c\u6216\u591a\u884c\u56fe\u50cf\u3002 \u5c5e\u6027\u4fee\u6539\u5c06\u5e94\u7528\u4e8e\u6240\u6709\u9009\u4e2d\u56fe\u50cf\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5355\u5143\u683c\u7684\u503c\u53d8\u4e3a\u7070\u8272\u65f6\uff0c\u8868\u793a\u4f7f\u7528\u4e86\u9ed8\u8ba4\u503c\u3002 \u5982\u679c\u56fe\u50cf\u8bbe\u7f6e\u4e86\u660e\u786e\u7684\u5c5e\u6027\u503c\uff0c\u4f8b\u5982\u5c06\u9ed8\u8ba4\u56fe\u50cf\u683c\u5f0f\u503c\u4fee\u6539\u4e3aARGB8888\uff0c\u5355\u5143\u683c\u5c06\u53d8\u6697\u3002 \u9ed8\u8ba4\u503c\u53ef\u5728",(0,r.kt)("a",c({parentName:"p"},{href:"config-view"}),"\u201c\u914d\u7f6e\u89c6\u56fe\u201d"),"\u4e2d\u8bbe\u7f6e\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",mdxType:"Figure"},"\u56fe\u50cf\u89c6\u56fe\u4e2d\u7684\u8868\u89c6\u56fe"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56fe\u50cf\uff1a"),(0,r.kt)("br",null),"\u56fe\u50cf\u9884\u89c8\u3002 \u5c06\u9f20\u6807\u60ac\u505c\u5728\u56fe\u50cf\u9884\u89c8\u4e0a\u5c06\u663e\u793a\u5168\u5c3a\u5bf8\u9884\u89c8\u3002 \u70b9\u51fb\u9884\u89c8\u5c06\u5728.png\u56fe\u50cf\u5173\u8054\u7684\u9ed8\u8ba4\u5e94\u7528\uff08\u5982paint.net\uff09\u4e2d\u6253\u5f00\u56fe\u50cf\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540d\u79f0\uff1a"),(0,r.kt)("br",null),"\u6587\u4ef6\u5939\u4e2d\u56fe\u50cf\u7684\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6b21\u6570\uff1a"),(0,r.kt)("br",null),"\u56fe\u50cf\u7684\u4f7f\u7528\u6b21\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c3a\u5bf8\uff1a"),(0,r.kt)("br",null),"\u56fe\u50cf\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56fe\u50cf\u683c\u5f0f\uff1a"),(0,r.kt)("br",null),"\u56fe\u50cf\u7684\u683c\u5f0f\u3002 \u53ef\u7528\u9009\u9879\u968f\u786c\u4ef6\u662f\u5426\u652f\u6301\u800c\u53d8\u5316\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6296\u8272\u7b97\u6cd5\uff1a"),(0,r.kt)("br",null),"\u7528\u4ee5\u8bbe\u7f6e\u5bf9\u9009\u4e2d\u56fe\u50cf\u4f7f\u7528\u7684\u6296\u8272\u7b97\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 - \u4e0d\u6296\u8272: ",(0,r.kt)("em",{parentName:"li"},"\u5bf9\u56fe\u50cf\u4e0d\u4f7f\u7528\u6296\u8272\u7b97\u6cd5\u3002 \u7531\u4e8e\u4e0d\u4f7f\u7528\u56fe\u50cf\u5904\u7406\uff0c\u6240\u4ee5\u8be5\u8bbe\u7f6e\u6027\u80fd\u6700\u9ad8\u3002 \u7136\u800c\uff0c\u5f53\u8272\u6df1\u8f83\u4f4e\u65f6\u53ef\u80fd\u4f1a\u770b\u5230\u56fe\u50cf\u8d28\u91cf\u4e0b\u964d\uff0c\u8fd9\u5177\u4f53\u53d6\u51b3\u4e8e\u56fe\u50cf\u672c\u8eab\u3002")),(0,r.kt)("li",{parentName:"ul"},"1 - \u5f17\u6d1b\u4f0a\u5fb7-\u65af\u5766\u4f2f\u683c\u7b97\u6cd5: ",(0,r.kt)("em",{parentName:"li"},"\u5c06\u8bef\u5dee\u6269\u6563\u4e8e\u76f8\u90bb\u50cf\u7d20\uff0c\u7ec6\u7c92\u5ea6\u6296\u8272\uff0c\u4f46\u4f1a\u727a\u7272\u6e05\u6670\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ul"},"2 - \u8d3e\u7ef4\u65af, \u6731\u8fea\u65af\u548c\u5c3c\u514b\u7b97\u6cd5\uff1a ",(0,r.kt)("em",{parentName:"li"},"\u4e0e\u5f17\u6d1b\u4f0a\u5fb7-\u65af\u5766\u4f2f\u683c\u7b97\u6cd5\u76f8\u6bd4\uff0c\u4f1a\u5c06\u8bef\u5dee\u8fdb\u4e00\u6b65\u6269\u6563\u5230\u66f4\u8fdc\u50cf\u7d20\uff0c\u56e0\u6b64\u6296\u8272\u66f4\u7c97\u7cd9\uff0c\u4f46\u56fe\u50cf\u66f4\u6e05\u6670\u3002 \u662f3\u79cd\u8bef\u5dee\u6269\u6563\u6296\u8272\u7b97\u6cd5\u4e2d\u6700\u6162\u7684\u4e00\u79cd\u3002")),(0,r.kt)("li",{parentName:"ul"},"3 - \u65af\u5854\u57fa\u7b97\u6cd5\uff1a",(0,r.kt)("em",{parentName:"li"},"\u57fa\u4e8e\u6700\u5c0f\u5e73\u5747\u8bef\u5dee\u6296\u8272\uff0c\u4f46\u66f4\u5feb\u66f4\u6e05\u6670\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u963f\u5c14\u6cd5\u6296\u8272\uff1a"),(0,r.kt)("br",null),"\u8bbe\u7f6e\u662f\u5426\u7528\u963f\u5c14\u6cd5\u901a\u9053\u4f7f\u7528\u6296\u8272\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e03\u5c40\u65cb\u8f6c\uff1a"),(0,r.kt)("br",null),"\u56fe\u50cf\u4f7f\u7528\u7684\u6296\u8272\u7b97\u6cd5\u3002 \u53ef\u7528\u9009\u9879\u968f\u5de5\u7a0b\u9009\u5b9a\u7684\u8272\u6df1\u800c\u53d8\u5316\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u533a\uff1a"),(0,r.kt)("br",null),"\u56fe\u50cf\u5728\u76ee\u6807\u786c\u4ef6\u4e0a\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002 \u53ef\u7528\u533a\u57df\u53d6\u51b3\u4e8e\u521b\u5efa\u5de5\u7a0b\u65f6\u4f7f\u7528\u7684TouchGFX\u677f\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u989d\u5916\u5b58\u50a8\u533a\uff1a"),(0,r.kt)("br",null),"\u5728\u4f7f\u7528L8\u56fe\u50cf\u683c\u5f0f\u65f6\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5c06\u989c\u8272\u8868\u5b58\u50a8\u5728\u53e6\u4e00\u4e2a\u5b58\u50a8\u4f4d\u7f6e\u3002 \u53ef\u7528\u533a\u57df\u53d6\u51b3\u4e8e\u521b\u5efa\u5de5\u7a0b\u65f6\u4f7f\u7528\u7684TouchGFX\u677f\u8bbe\u7f6e\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",mdxType:"Figure"},"\u56fe\u50cf\u89c6\u56fe\u4e2d\u8868\u89c6\u56fe\u91cc\u7b2c\u4e00\u4e2a\u5355\u5143\u683c\u4e2d\u7684\u4e0b\u62c9\u83dc\u5355"),(0,r.kt)("p",null,"\u4f7f\u7528\u8868\u89c6\u56fe\u5de6\u4fa7\u7b2c\u4e00\u4e2a\u5355\u5143\u683c\u4e2d\u7684\u590d\u9009\u6846\u53ef\u9009\u4e2d\u591a\u884c\u56fe\u50cf\u3002 \u8be5\u5355\u5143\u683c\u8fd8\u5305\u542b\u4e00\u4e2a\u4e0b\u62c9\u83dc\u5355\uff0c\u5176\u4e2d\u6709\u56db\u4e2a\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u590d\u5236\u56fe\u50cfID"),(0,r.kt)("br",null),"\u590d\u5236\u53ef\u5728\u4ee3\u7801\u4e2d\u5f15\u7528\u7684\u56fe\u50cf\u7684ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5220\u9664"),(0,r.kt)("br",null),"\u5220\u9664\u76f8\u5173\u6587\u4ef6\u5939\u4e2d\u7684\u56fe\u50cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6253\u5f00"),(0,r.kt)("br",null),"\u5728.png\u56fe\u50cf\u5173\u8054\u7684\u9ed8\u8ba4\u5e94\u7528\u4e2d\u6253\u5f00\u56fe\u50cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6253\u5f00\u6587\u4ef6\u5939"),(0,r.kt)("br",null),"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5305\u542b\u56fe\u50cf\u7684\u6587\u4ef6\u5939")),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u56fe\u50cf\u76f8\u5e94\u884c\uff0c\u4e5f\u53ef\u4ee5\u6253\u5f00\u6b64\u4e0b\u62c9\u83dc\u5355\u3002"))}w.isMDXComponent=!0}}]);