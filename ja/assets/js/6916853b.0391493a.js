"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[15],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),h=o,m=s["".concat(c,".").concat(h)]||s[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},35588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),a=n(93054),l=n(22425),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&h(e,n,t[n]);return e};const f={id:"09-touch-controller",title:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",sidebar_label:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"},g=void 0,v={unversionedId:"development/board-bring-up/how-to/09-touch-controller",id:"development/board-bring-up/how-to/09-touch-controller",title:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/09-touch-controller.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/09-touch-controller",permalink:"/touchgfx-test.github.io/ja/docs/development/board-bring-up/how-to/09-touch-controller",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-touch-controller",title:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",sidebar_label:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"},sidebar:"docs",previous:{title:"8. \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf",permalink:"/touchgfx-test.github.io/ja/docs/development/board-bring-up/how-to/08-hardware-acceleration"},next:{title:"10. \u7269\u7406\u30dc\u30bf\u30f3",permalink:"/touchgfx-test.github.io/ja/docs/development/board-bring-up/how-to/10-physical-buttons"}},b={},y=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u691c\u8a3c",id:"verification",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",level:2},{value:"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068",id:"performance-is-as-expected",level:3}],k={toc:y};function w(e){var t,n=e,{components:i}=n,h=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),h),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u64cd\u4f5c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304b\u3089\u30bf\u30c3\u30c1\u5ea7\u6a19\u3092\u8aad\u307f\u51fa\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u958b\u767a\u3059\u308b\u30b3\u30fc\u30c9\u306f\u3001\u3053\u306e\u5f8c\u306eTouchGFX\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u958b\u767a\u3067\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306b\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u95a2\u4fc2\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",m({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u76ee\u6a19\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304b\u3089\u30bf\u30c3\u30c1\u5ea7\u6a19\u3092\u8aad\u307f\u51fa\u305b\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h3",m({},{id:"verification"}),"\u691c\u8a3c"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u3001I2C\u306a\u3069\u3092\u4ecb\u3057\u3066\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u8aad\u307f\u51fa\u305b\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30ec\u30b8\u30b9\u30bf\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TouchGFX\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u304c\u3053\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304b\u3089\u30bf\u30c3\u30c1\u5ea7\u6a19\u3092\u53d6\u5f97\u3067\u304d\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u671f\u5f85\u3055\u308c\u308b\u8aad\u51fa\u3057\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30dd\u30fc\u30ea\u30f3\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306b\u542b\u307e\u308c\u307e\u3059\u3002 \u30dd\u30fc\u30ea\u30f3\u30b0\u306b\u9577\u6642\u9593\u3092\u8981\u3059\u308b\u5834\u5408\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30dd\u30fc\u30ea\u30f3\u30b0\u3092\u5225\u306e\u30b9\u30ec\u30c3\u30c9\u306b\u79fb\u52d5\u3059\u308b\u304b\u3001\u5272\u8fbc\u307f\u306b\u57fa\u3065\u304f\u52d5\u4f5c\u306b\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u642d\u8f09\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304b\u3089\u8aad\u307f\u51fa\u3059\u30c9\u30e9\u30a4\u30d0")),(0,r.kt)("h2",m({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a2d\u5b9a\u3068\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u306e\u4f5c\u6210\u306e2\u3064\u306e\u8981\u7d20\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3001I2C\u30d0\u30b9\u306b\u63a5\u7d9a\u3055\u308c\u307e\u3059\u3002 I2C\u901a\u4fe1\u306f\u3001STM32CubeMX\u306e\uff3bConnectivity\uff3d>\uff3bI2C1\uff3d\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/touch/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"I2C\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u591a\u304f\u306fI2C\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u8907\u6570\u5099\u3048\u3066\u3044\u308b\u305f\u3081\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u95a2\u9023\u3059\u308bGPIO\u3082\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u3059\u308b\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u81ea\u5206\u3067\u30bc\u30ed\u304b\u3089\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eSTM32Cube\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u306f\u3001I2C\u901a\u4fe1\u306e\u30b5\u30f3\u30d7\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u305d\u308c\u3089\u304b\u3089\u958b\u59cb\u3067\u304d\u307e\u3059\u3002 \u30bf\u30c3\u30c1\u5ea7\u6a19\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u8aad\u307f\u51fa\u3059\u30ec\u30b8\u30b9\u30bf\u306b\u3064\u3044\u3066\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u6700\u521d\u306b\u78ba\u8a8d\u3059\u308b\u306e\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eI2C\u30a2\u30c9\u30ec\u30b9\u3067\u3059\u3002\u7d9a\u3044\u3066\u30c6\u30b9\u30c8\u306e\u305f\u3081\u306b\u30c7\u30d0\u30a4\u30b9ID\u306e\u30ec\u30b8\u30b9\u30bf\u3092\u8aad\u307f\u51fa\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"I2C\u306e\u57fa\u672c\u52d5\u4f5c\u3092\u78ba\u8a8d\u3057\u305f\u3089\u3001\u5f8c\u3067TouchGFX\u306b\u7d44\u307f\u8fbc\u3080\u3068\u304d\u306b\u5fc5\u8981\u3068\u306a\u308b\u30c9\u30e9\u30a4\u30d0\u95a2\u6570\u3092\u958b\u767a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306f\u3001\u30bf\u30c3\u30c1\u3092\u691c\u51fa\u3057\u305f\u3068\u304d\u306bTrue\u3001\u691c\u51fa\u3057\u3066\u3044\u306a\u3044\u3068\u304d\u306bFalse\u3092\u8fd4\u3057\u3001\u30bf\u30c3\u30c1\u5ea7\u6a19\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u3053\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u306e\u4f8b\u3067\u3001\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u306f\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"myTouchController_GetState"),"\u306b\u3088\u3063\u3066\u62bd\u8c61\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    uint16_t x;\n    uint16_t y;\n\n    TouchControllerState state;\n    if (myTouchController_GetState(&state))\n    {\n        x = state.touchY;\n        y = state.touchX;\n        //break point here\n    }\n")),(0,r.kt)("p",null,"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304b\u3089x\u3068y\u306e\u6b63\u78ba\u306a\u5024\u304c\u53d7\u4fe1\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u3001\u30c7\u30d0\u30c3\u30ac\u3067\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u4e2d\u306b\u306f\u8907\u6570\u306e\u30bf\u30c3\u30c1\uff65\u30dd\u30a4\u30f3\u30c8\u3092\u30ec\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002 TouchGFX\u3067\u306f\u3053\u306e\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u7121\u8996\u3057\u3066\u69cb\u3044\u307e\u305b\u3093\u3002 \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u6700\u521d\u306e\u30bf\u30c3\u30c1\uff65\u30dd\u30a4\u30f3\u30c8\u3092\u9078\u629e\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u300cTouchGFX AL\u306e\u958b\u767a\u300d\u306e",(0,r.kt)("a",m({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-architecture"}),"\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),"\u300d\u3067\u3001\u3053\u308c\u3089\u306e\u5024\u3092TouchGFX\u306b\u9001\u4fe1\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"performance-is-as-expected"}),"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068"),(0,r.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u30b9\u30ec\u30c3\u30c9\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u30011ms\u4ee5\u5185\u306b\u30bf\u30c3\u30c1\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u901f\u5ea6\u304c\u4e0d\u8db3\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u5f8c\u306e\u6bb5\u968e\u3067\u3001\u30b3\u30fc\u30c9\u3092\u72ec\u7acb\u3057\u305f\u30bf\u30b9\u30af\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}w.isMDXComponent=!0}}]);