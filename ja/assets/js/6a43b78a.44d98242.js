"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8101],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(n),c=i,m=g["".concat(o,".").concat(c)]||g[c]||d[c]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},86988:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return c},metadata:function(){return v},toc:function(){return f}});var r=n(3905),i=n(44035),a=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&d(e,n,t[n]);return e};const c={id:"texts-view",title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09"},m=void 0,v={unversionedId:"development/ui-development/designer-user-guide/texts-view",id:"development/ui-development/designer-user-guide/texts-view",title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/texts-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/texts-view",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/designer-user-guide/texts-view",draft:!1,tags:[],version:"current",frontMatter:{id:"texts-view",title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Images View\uff08\u753b\u50cf\u30d3\u30e5\u30fc\uff09",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/designer-user-guide/images-view"},next:{title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09",permalink:"/touchgfx-test.github.io/ja/docs/development/ui-development/designer-user-guide/config-view"}},k={},f=[{value:"Texts\uff08\u30c6\u30ad\u30b9\u30c8\uff09",id:"texts",level:2},{value:"\u81ea\u52d5\u751f\u6210\u306eID",id:"auto-generated-id",level:3},{value:"\u5b9a\u7fa9\u3055\u308c\u305fID",id:"defined-id",level:3},{value:"Texts\u30bf\u30d6\u306e\u6a5f\u80fd",id:"texts-tab-features",level:3},{value:"Translations\uff08\u7ffb\u8a33\uff09",id:"translations",level:3},{value:"Translations Specifics\uff08\u7ffb\u8a33\u56fa\u6709\u306e\u8a2d\u5b9a\uff09",id:"translations-specifics",level:3},{value:"Adding languages\uff08\u8a00\u8a9e\u306e\u8ffd\u52a0\uff09",id:"adding-languages",level:3},{value:"Typographies\uff08\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\uff09",id:"typographies",level:2},{value:"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8ffd\u52a0",id:"add-new-typography",level:3},{value:"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u524a\u9664",id:"delete-typography",level:3}],y={toc:f};function h(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),d),l(t,p({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\u306eTexts View\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3001\u7ffb\u8a33\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 \u3053\u306e\u30d3\u30e5\u30fc\u306f\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"#texts"}),"Texts"),"\u3068",(0,r.kt)("a",g({parentName:"p"},{href:"#typographies"}),"Typographies"),"\u3068\u3044\u30462\u3064\u306e\u30bf\u30d6\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",g({},{id:"texts"}),"Texts\uff08\u30c6\u30ad\u30b9\u30c8\uff09"),(0,r.kt)("p",null,"Texts\u30bf\u30d6\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u30c6\u30ad\u30b9\u30c8\u8981\u7d20\u306e\u6982\u8981\u304c\u793a\u3055\u308c\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u8981\u7d20\u306b\u306f\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"#auto-generated-id"}),"\u81ea\u52d5\u751f\u6210\u306eID"),"\u307e\u305f\u306f",(0,r.kt)("a",g({parentName:"p"},{href:"#defined-id"}),"\u5b9a\u7fa9\u3055\u308c\u305fID"),"\u304c\u542b\u307e\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view.png",mdxType:"Figure"},"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09"),(0,r.kt)("h3",g({},{id:"auto-generated-id"}),"\u81ea\u52d5\u751f\u6210\u306eID"),(0,r.kt)("p",null,"\u81ea\u52d5\u751f\u6210\u306eID\u3092\u6301\u3064\u30c6\u30ad\u30b9\u30c8\uff08\u30b7\u30f3\u30b0\u30eb\uff65\u30e6\u30fc\u30b9\uff65\u30c6\u30ad\u30b9\u30c8\u3068\u3082\u547c\u3070\u308c\u308b\uff09\u306f\u4e00\u5ea6\u3060\u3051\u4f7f\u7528\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u3067\u3001\u4e00\u5ea6\u306b\u8907\u6570\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u307e\u305f\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u3053\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u307e\u305f\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u3068\u304d\u306b\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u3055\u308c\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u307e\u305f\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u524a\u9664\u6642\u306b\u81ea\u52d5\u7684\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,'\u81ea\u52d5\u751f\u6210\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u6700\u521d\u306b\u4f5c\u6210\u3055\u308c\u305f\u3068\u304d\u306b\u3001"Unsorted"\u3068\u3044\u3046\u540d\u524d\u306e\u30c6\u30ad\u30b9\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30b0\u30eb\u30fc\u30d7\u304c\u5b58\u5728\u3057\u306a\u3051\u308c\u3070\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002'),(0,r.kt)("p",null,"\u81ea\u52d5\u751f\u6210\u306eID\u306f\u7c21\u5358\u306b\u540d\u524d\u3092\u5909\u66f4\u3067\u304d\u308b\u306e\u3067\u3001\u305d\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304a\u3088\u3073\u30a2\u30af\u30b7\u30e7\u30f3\u3067\u4f55\u5ea6\u3067\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-auto-generated.png",mdxType:"Figure"},"Texts View\u306e\u81ea\u52d5\u751f\u6210\u306e\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("h3",g({},{id:"defined-id"}),"\u5b9a\u7fa9\u3055\u308c\u305fID"),(0,r.kt)("p",null,"\u5b9a\u7fa9\u3055\u308c\u305fID\u3092\u6301\u3064\u30c6\u30ad\u30b9\u30c8\uff08\u30ea\u30bd\u30fc\u30b9\u3068\u3082\u547c\u3070\u308c\u308b\uff09\u306f\u3001TouchGFX Designer\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304a\u3088\u3073\u30a2\u30af\u30b7\u30e7\u30f3\u3067\u4f55\u5ea6\u3067\u3082\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002 \u5b9a\u7fa9\u3055\u308c\u305fID\u3092\u6301\u3064\u65b0\u3057\u3044\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001Texts\u30bf\u30d6\u306e\uff3bADD NEW TEXT\uff3d\u3068\u3044\u3046\u30e9\u30d9\u30eb\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u81ea\u52d5\u751f\u6210\u306eID\u3092\u6301\u3064\u30c6\u30ad\u30b9\u30c8\u306e\u540d\u524d\u3092\u5909\u66f4\u3057\u307e\u3059\u3002 \u5b9a\u7fa9\u3055\u308c\u305fID\u3092\u6301\u30641\u3064\u4ee5\u4e0a\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001Texts\u30bf\u30d6\u3067\u30b0\u30ea\u30c3\u30c9\u307e\u305f\u306f\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u3092\u9078\u629e\u3057\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304f\u304b\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\uff65\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",g({},{id:"texts-tab-features"}),"Texts\u30bf\u30d6\u306e\u6a5f\u80fd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u691c\u7d22:"),(0,r.kt)("br",null)," \u691c\u7d22\u30d0\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u306e\u30c6\u30ad\u30b9\u30c8\u8981\u7d20\u307e\u305f\u306f\u7ffb\u8a33\u3092\u898b\u3064\u3051\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u5217\u306e\u4f7f\u7528\u53ef\u80fd\u306a\u5165\u529b\u304c\u3059\u3079\u3066\u691c\u7d22\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc:"),(0,r.kt)("br",null)," Texts\u30bf\u30d6\u306b\u306f\u3001\u30b0\u30eb\u30fc\u30d7\u3068\u30c6\u30ad\u30b9\u30c8\u8981\u7d20\u306e\u6982\u8981\u3092\u793a\u3059\u30c4\u30ea\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30b0\u30eb\u30fc\u30d7:"),(0,r.kt)("br",null)," \u30c4\u30ea\u30fc\u306e\u5404\u30b0\u30eb\u30fc\u30d7\u306b\u306f1\u3064\u4ee5\u4e0a\u306e\u30c6\u30ad\u30b9\u30c8\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30b0\u30eb\u30fc\u30d7\u540d\u306e\u6a2a\u306e\u30b7\u30a7\u30d6\u30ed\u30f3\uff08\u5c71\u5f62\u306e\u77e2\u5370\uff09\u3092\u62bc\u3059\u3068\u30b0\u30eb\u30fc\u30d7\u3092\u6298\u308a\u305f\u305f\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30b0\u30eb\u30fc\u30d7\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u3067\u30c6\u30ad\u30b9\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u304b\u3001\u30b0\u30ea\u30c3\u30c9\u5185\u3067\u30c6\u30ad\u30b9\u30c8\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u65b0\u3057\u3044\u30b0\u30eb\u30fc\u30d7\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u306e\u8ffd\u52a0\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-groups.png",mdxType:"Figure"},"\u30c6\u30ad\u30b9\u30c8\u306e\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30d8\u30c3\u30c0\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff65\u30e1\u30cb\u30e5\u30fc:"),(0,r.kt)("br",null)," \u30b0\u30ea\u30c3\u30c9\u5185\u306e\u30d8\u30c3\u30c0\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30d8\u30c3\u30c0\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u3053\u3053\u304b\u3089\u5217\u306e\u975e\u8868\u793a\u3001\u7de8\u96c6\u3001\u524a\u9664\u3001\u8868\u793a\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\uff08\u3059\u3079\u3066\u306e\u5217\u3067\u3059\u3079\u3066\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u4f7f\u7528\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff09\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-header-context-menu.png",mdxType:"Figure"},"\u30d8\u30c3\u30c0\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff65\u30e1\u30cb\u30e5\u30fc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30b0\u30ea\u30c3\u30c9\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff65\u30e1\u30cb\u30e5\u30fc:"),(0,r.kt)("br",null)," \u30b0\u30ea\u30c3\u30c9\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u3053\u3053\u304b\u3089\u30c6\u30ad\u30b9\u30c8\u306e\u524a\u9664\u3001\u30b3\u30d4\u30fc\u3001\u8cbc\u308a\u4ed8\u3051\u3001\u5225\u306e\u30b0\u30eb\u30fc\u30d7\u3078\u306e\u79fb\u52d5\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-text-context-menu.png",mdxType:"Figure"},"\u30c6\u30ad\u30b9\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff65\u30e1\u30cb\u30e5\u30fc"),(0,r.kt)("h3",g({},{id:"translations"}),"Translations\uff08\u7ffb\u8a33\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typography:"),(0,r.kt)("br",null)," \u30c6\u30ad\u30b9\u30c8\u3068\u305d\u306e\u3059\u3079\u3066\u306e\u7ffb\u8a33\u304c\u4f7f\u7528\u3059\u308b\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306f",(0,r.kt)("a",g({parentName:"p"},{href:"#typographies"}),"Typographies"),"\u30bf\u30d6\u3067\u8ffd\u52a0\u304a\u3088\u3073\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alignment:"),(0,r.kt)("br",null)," \u30c6\u30ad\u30b9\u30c8\u3068\u305d\u306e\u3059\u3079\u3066\u306e\u7ffb\u8a33\u304c\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u6c34\u5e73\u65b9\u5411\u306e\u4f4d\u7f6e\u5408\u305b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4f7f\u7528\u3067\u304d\u308b\u4f4d\u7f6e\u5408\u305b\u306f\u3001Left\uff08\u5de6\u63c3\u3048\uff09\u3001Right\uff08\u53f3\u63c3\u3048\uff09\u3001Center\uff08\u4e2d\u592e\u63c3\u3048\uff09\u3067\u3059\u3002"),(0,r.kt)("h3",g({},{id:"translations-specifics"}),"Translations Specifics\uff08\u7ffb\u8a33\u56fa\u6709\u306e\u8a2d\u5b9a\uff09"),(0,r.kt)("p",null,"\u5404\u7ffb\u8a33\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a2\u30e9\u30a4\u30e1\u30f3\u30c8\u3092\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u8868\u793a\u3059\u308b\u306b\u306f\u3001\u7ffb\u8a33\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u7ffb\u8a33\u56fa\u6709\u306e\u30a2\u30e9\u30a4\u30e1\u30f3\u30c8\u306e\u8a2d\u5b9a\u306f\u3001\u4e0b\u306e\u56f3\u306b\u793a\u3059\u3088\u3046\u306b\u30a4\u30f3\u30e9\u30a4\u30f3\u306eAlignment\u30bb\u30ec\u30af\u30bf\u3067\u7c21\u5358\u306b\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-edit-language-specific-text-alignment.png",mdxType:"Figure"},"Translation Specific Alignment\u306e\u8a2d\u5b9a"),(0,r.kt)("h3",g({},{id:"adding-languages"}),"Adding languages\uff08\u8a00\u8a9e\u306e\u8ffd\u52a0\uff09"),(0,r.kt)("p",null,"\u65b0\u3057\u3044\u8a00\u8a9e\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u30d8\u30c3\u30c0\uff65\u30e1\u30cb\u30e5\u30fc\u306e\u8ffd\u52a0\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002 \u4e0b\u306e\u56f3\u306b\u793a\u3059\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u3001\u3053\u3053\u3067\u8a00\u8a9e\u306e\u540d\u524d\u3068\u3001\u5225\u306e\u8a00\u8a9e\u304b\u3089\u306e\u7ffb\u8a33\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-add-language.png",mdxType:"Figure"},"Add New Language\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7"),(0,r.kt)("h2",g({},{id:"typographies"}),"Typographies\uff08\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\uff09"),(0,r.kt)("p",null,"Typographies\u30bf\u30d6\u306b\u306f\u3001\u4e0b\u306e\u56f3\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u6982\u8981\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view.png",mdxType:"Figure"},"Typographies\u30d3\u30e5\u30fc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typography ID:")," \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u540d\u524d\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Language Settings:"),(0,r.kt)("br",null)," \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8a00\u8a9e\u8a2d\u5b9a\u304c\u542b\u307e\u308c\u307e\u3059\u3002 \u672a\u6307\u5b9a\u306e\u8a00\u8a9e\u306b\u306f\u3059\u3079\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u7279\u5b9a\u306e\u8a00\u8a9e\u306e\u8a2d\u5b9a\u3092\u6307\u5b9a\u3059\u308b\u306b\u306f\u3001\u8ffd\u52a0\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u5fc5\u8981\u306a\u8a00\u8a9e\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-language-setting.png",mdxType:"Figure"},"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306b\u8a00\u8a9e\u8a2d\u5b9a\u3092\u8ffd\u52a0"),(0,r.kt)("p",null,"\u8a00\u8a9e\u8a2d\u5b9a\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001\u5bfe\u8c61\u306e\u8a00\u8a9e\u8a2d\u5b9a\u30bf\u30d6\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-language-setting.png",mdxType:"Figure"},"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8a00\u8a9e\u8a2d\u5b9a\u3092\u524a\u9664"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Font:"),(0,r.kt)("br",null)," \u6240\u5b9a\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d5\u30a9\u30f3\u30c8\u306e\u540d\u524d\u3067\u3059\u3002",(0,r.kt)("br",null)," Windows\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d5\u30a9\u30f3\u30c8\u304b\u3089\u9078\u629e\u3059\u308b\u304b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"assets / fonts"),"\u30d5\u30a9\u30eb\u30c0\u306b\u72ec\u81ea\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002  ",(0,r.kt)("em",{parentName:"p"},"\u3053\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u30d5\u30a9\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u3001\u305d\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306bTouchGFX Designer\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Size:"),(0,r.kt)("br",null)," \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bpp:"),(0,r.kt)("br",null)," Bits per pixel\u306e\u7565\u3067\u3059\u3002 \u30d5\u30a9\u30f3\u30c8\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u306e\u30d3\u30c3\u30c8\u6570\u3067\u3059\u3002 \u9069\u5207\u306a\u5024\u306f1\u30012\u30014\u30018\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Direction:"),(0,r.kt)("br",null)," \u30c6\u30ad\u30b9\u30c8\u304c\u4f7f\u7528\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u5411\u304d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4f7f\u7528\u3067\u304d\u308b\u5411\u304d\u306f\u3001LTR\uff08\u5de6\u304b\u3089\u53f3\uff09\u3068RTL\uff08\u53f3\u304b\u3089\u5de6\uff09\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306fLTR\u3067\u3059\u3002 RTL\u306f\u4e3b\u306b\u30a2\u30e9\u30d3\u30a2\u8a9e\u3084\u30d8\u30d6\u30e9\u30a4\u8a9e\u306a\u3069\u3001\u53f3\u304b\u3089\u5de6\u306b\u8a18\u8ff0\u3059\u308b\u8a00\u8a9e\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fallback Character:"),(0,r.kt)("br",null)," TouchGFX\u3067\u6587\u5b57\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u306b\u3001\u30b0\u30ea\u30d5\u304c\u4f7f\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u5217\u3067\u6307\u5b9a\u3055\u308c\u305f\u5024\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u5024\u3068\u3057\u3066\u306f\u30011\u3064\u306e\u6587\u5b57\u3001Unicode\u5024\uff0810\u9032\u6570\u307e\u305f\u306f16\u9032\u6570\u30010xABCD\u306a\u3069\uff09\u3001\u307e\u305f\u306f\u7279\u5225\u306a\u30ad\u30fc\u30ef\u30fc\u30c9skip\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u5358\u7d14\u306b\u7a7a\u767d\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcard Characters:"),(0,r.kt)("br",null),' TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3001\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306a\u6587\u5b57\u3067\u3059\u3002 \u30c0\u30df\u30fc\uff65\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3088\u308a\u3082\u3053\u3061\u3089\u306e\u65b9\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002 \u30c0\u30df\u30fc\uff65\u30c6\u30ad\u30b9\u30c8\u3067\u306f\u3059\u3079\u3066\u306e\u30b0\u30ea\u30d5\u3060\u3051\u3067\u306a\u304f\u3001\u5b9f\u969b\u306e\u6587\u5b57\u5217\uff08"0123456789-"\u306a\u3069\uff09\u3082\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u5217\u306b"0123456789-"\u3068\u5165\u529b\u3059\u308b\u3068\u3001\u30b0\u30ea\u30d5\u306f\u751f\u6210\u3055\u308c\u307e\u3059\u304c\u6587\u5b57\u5217\u306f\u751f\u6210\u3055\u308c\u307e\u305b\u3093\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget Wildcard Characters:"),(0,r.kt)("br",null)," \u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u5fc5\u8981\u3068\u3059\u308b\u4e00\u90e8\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u8ffd\u52a0\u3055\u308c\u308b\u6587\u5b57\u5217\u3067\u3059\u3002 \u4f8b\u306b\u793a\u3059\u3088\u3046\u306b\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"../ui-components/miscellaneous/digital-clock"}),"\u30c7\u30b8\u30bf\u30eb\u6642\u8a08"),'\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u306f\u3001\u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b"0123456789 :APM"\u3068\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u8aad\u51fa\u3057\u5c02\u7528\u3067\u3059\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcard Ranges:"),(0,r.kt)("br",null),' Wildcard Characters\u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u7bc4\u56f2\u3092\u7c21\u5358\u306b\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001"0-9,A-F"\u306f\u3001Wildcard Characters\u5217\u3067"0123456789ABCDEF"\u3068\u6307\u5b9a\u3059\u308b\u306e\u3068\u540c\u3058\u306b\u306a\u308a\u307e\u3059\u3002 \u7bc4\u56f2\u306f\u6570\u5024\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001"0-9"\u306f\u3001"48-57"\u307e\u305f\u306f"0x30-0x39"\u3068\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u5f15\u7528\u7b26\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u306e\u3067\u3001\u5165\u529b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ellipsis Character:"),(0,r.kt)("br",null)," \u3053\u306e\u6587\u5b57\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u9818\u57df\u5185\u3067\u9577\u3044\u30c6\u30ad\u30b9\u30c8\u3092\u5207\u308a\u8a70\u3081\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",g({},{id:"add-new-typography"}),"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,"\u65b0\u3057\u3044\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u306e\u8ffd\u52a0\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3092\u542b\u3080\u65b0\u3057\u3044\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u304c\u30ea\u30b9\u30c8\u306e\u4e00\u756a\u4e0b\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-typography.png",mdxType:"Figure"},"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u8ffd\u52a0"),(0,r.kt)("h3",g({},{id:"delete-typography"}),"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u524a\u9664"),(0,r.kt)("p",null,"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u3067\u5bfe\u8c61\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304f\u304b\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\uff65\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-typography.png",mdxType:"Figure"},"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u524a\u9664"))}h.isMDXComponent=!0}}]);