"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[407],{3905:function(t,n,a){a.d(n,{Zo:function(){return m},kt:function(){return c}});var e=a(67294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=e.createContext({}),u=function(t){var n=e.useContext(o),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},m=function(t){var n=u(t.components);return e.createElement(o.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},k=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),c=l,g=k["".concat(o,".").concat(c)]||k[c]||d[c]||r;return a?e.createElement(g,i(i({ref:n},m),{},{components:a})):e.createElement(g,i({ref:n},m))}));function c(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,n,a){var e=a(67294);class l extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=l},2225:function(t,n,a){a.r(n),a.d(n,{assets:function(){return b},contentTitle:function(){return N},default:function(){return y},frontMatter:function(){return g},metadata:function(){return s},toc:function(){return h}});var e=a(3905),l=a(39130),r=a(43861),i=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(t,n,a)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,c=(t,n)=>{for(var a in n||(n={}))m.call(n,a)&&k(t,a,n[a]);if(u)for(var a of u(n))d.call(n,a)&&k(t,a,n[a]);return t};const g={title:"Globals"},N=void 0,s={unversionedId:"api/namespacetouchgfx_1_1paint_1_1rgb888",id:"api/namespacetouchgfx_1_1paint_1_1rgb888",title:"Globals",description:"",source:"@site/docs/api/namespacetouchgfx_1_1paint_1_1rgb888.mdx",sourceDirName:"api",slug:"/api/namespacetouchgfx_1_1paint_1_1rgb888",permalink:"/ja/docs/api/namespacetouchgfx_1_1paint_1_1rgb888",draft:!1,tags:[],version:"current",frontMatter:{title:"Globals"}},b={},h=[{value:"Functions",id:"functions",level:2},{value:"lineFromARGB8888",id:"linefromargb8888",level:3},{value:"lineFromColor",id:"linefromcolor",level:3},{value:"lineFromL8ARGB8888",id:"linefroml8argb8888",level:3},{value:"lineFromL8RGB888",id:"linefroml8rgb888",level:3},{value:"lineFromRGB888",id:"linefromrgb888",level:3},{value:"setL8Pallette",id:"setl8pallette",level:3},{value:"tearDown",id:"teardown",level:3},{value:"Variables",id:"variables",level:2},{value:"blendL8CLUT",id:"blendl8clut",level:3}],f={toc:h};function y(t){var n,a=t,{components:i}=a,k=((t,n)=>{var a={};for(var e in t)m.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(null!=t&&u)for(var e of u(t))n.indexOf(e)<0&&d.call(t,e)&&(a[e]=t[e]);return a})(a,["components"]);return(0,e.kt)("wrapper",(n=c(c({},f),k),p(n,o({components:i,mdxType:"MDXLayout"}))),(0,e.kt)("p",null,"The global touchgfx namespace.",(0,e.kt)("br",null),"\nAll TouchGFX framework enums, Type definitions, global functions and global variables are placed in this namespace."),(0,e.kt)("h2",c({},{id:"functions"}),"Functions"),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefromargb8888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"linefromargb8888"}),"lineFromARGB8888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefromargb8888",mdxType:"Link"},"lineFromARGB8888")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint32_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefromcolor",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"linefromcolor"}),"lineFromColor"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefromcolor",mdxType:"Link"},"lineFromColor")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint32_t"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"color ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefroml8argb8888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"linefroml8argb8888"}),"lineFromL8ARGB8888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefroml8argb8888",mdxType:"Link"},"lineFromL8ARGB8888")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefroml8rgb888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"linefroml8rgb888"}),"lineFromL8RGB888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefroml8rgb888",mdxType:"Link"},"lineFromL8RGB888")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefromrgb888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"linefromrgb888"}),"lineFromRGB888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-linefromrgb888",mdxType:"Link"},"lineFromRGB888")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-setl8pallette",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"setl8pallette"}),"setL8Pallette"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-setl8pallette",mdxType:"Link"},"setL8Pallette")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"const uint8_t *const"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"data"),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#function-teardown",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"teardown"}),"tearDown"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})),(0,e.kt)("th",c({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb888#function-teardown",mdxType:"Link"},"tearDown")),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",c({parentName:"tr"},{align:null}),"void"),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",c({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})),(0,e.kt)("td",c({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))),(0,e.kt)("h2",c({},{id:"variables"}),"Variables"),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb888#variable-blendl8clut",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",c({},{id:"blendl8clut"}),"blendL8CLUT"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"const uint8_t * blendL8CLUT  = 0")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB888Impl.hpp")))))}y.isMDXComponent=!0}}]);