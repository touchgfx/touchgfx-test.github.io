"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8572],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children))}},84541:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),o=n(86010),i=n(99492),c=n(39130),a=n(35096),l=n(33084),u="cardContainer_fWXF",p="cardTitle_rnsV",s="cardDescription_PWke";function m({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u)},t)}function d({href:e,icon:t,title:n,description:i}){return r.createElement(m,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",p),title:n},t," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",s),title:i},i))}function f({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function v({item:e}){var t;const n=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(d,{href:e.href,icon:n,title:e.label,description:null==o?void 0:o.description})}function h({item:e}){switch(e.type){case"link":return r.createElement(v,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g({items:e,className:t}){return r.createElement("section",{className:(0,o.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},83079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return v},metadata:function(){return g},toc:function(){return b}});var r=n(3905),o=n(44035),i=n(84541),c=n(99492),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&d(e,n,t[n]);return e};const v={id:"ui-development-introduction",title:"UI Development Introduction"},h=void 0,g={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",title:"UI Development Introduction",description:"",source:"@site/docs/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/touchgfx-test.github.io/docs/development/ui-development/ui-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI Development Introduction"},sidebar:"docs",previous:{title:"Performance Measurement",permalink:"/touchgfx-test.github.io/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"},next:{title:"Software Architecture",permalink:"/touchgfx-test.github.io/docs/category/software-architecture"}},y={},b=[],O={toc:b};function w(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},O),d),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.png",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"Developing a functional UI is an integral part to having a successful embedded graphics product and as such, TouchGFX aims to not only provide fast performance but also a smooth development experience."),(0,r.kt)("p",null,"The UI Development chapter focuses on the ins and outs of how a TouchGFX application is developed:"),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);