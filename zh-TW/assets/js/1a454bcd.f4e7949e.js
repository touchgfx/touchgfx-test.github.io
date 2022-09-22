"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7182],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),o=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(n),k=a,s=d["".concat(m,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(s,p(p({ref:t},u),{},{components:n})):r.createElement(s,p({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,p=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=p},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=p},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=p},2902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return T},frontMatter:function(){return x},metadata:function(){return b},toc:function(){return w}});var r=n(3905),a=n(44035),l=n(29415),p=n(93054),i=n(37793),m=n(39130),o=n(31217),u=n(22425),c=Object.defineProperty,d=Object.defineProperties,k=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&N(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&N(e,n,t[n]);return e};const x={id:"texture-mapper",title:"\u7d0b\u7406\u6620\u5c04\u5668"},f=void 0,b={unversionedId:"development/ui-development/ui-components/images/texture-mapper",id:"development/ui-development/ui-components/images/texture-mapper",title:"\u7d0b\u7406\u6620\u5c04\u5668",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/texture-mapper.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/texture-mapper",permalink:"/zh-TW/docs/development/ui-development/ui-components/images/texture-mapper",draft:!1,tags:[],version:"current",frontMatter:{id:"texture-mapper",title:"\u7d0b\u7406\u6620\u5c04\u5668"},sidebar:"docs",previous:{title:"\u52d5\u756b\u5716\u50cf",permalink:"/zh-TW/docs/development/ui-development/ui-components/images/animated-image"},next:{title:"Containers",permalink:"/zh-TW/docs/category/containers"}},y={},w=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u539f\u9ede\u8207\u76f8\u6a5f",id:"origo--camera",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],M={toc:w};function T(e){var t,n=e,{components:c}=n,N=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},M),N),d(t,k({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668(Texture Mapper)\u662f\u4e00\u7a2e\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u7e6a\u88fd\u8f49\u63db\u5f8c\u7684\u5716\u50cf\uff0c\u53ef\u4ee5\u81ea\u7531\u7e2e\u653e\u4e26\u570d\u7e5e\u53ef\u8abf\u539f\u9ede\u65cb\u8f49\u3002 \u8996\u89d2\u5370\u8c61\u4e5f\u53ef\u901a\u904e\u61c9\u7528\u865b\u64ec\u76f8\u6a5f\u4f86\u5be6\u73fe\uff0c\u5176\u4e2d\u8996\u89d2\u7684\u6578\u91cf\u662f\u53ef\u8abf\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"Note"},(0,r.kt)("li",null,"\u8a72\u5c0f\u90e8\u4ef6\u5c0dMCU\u8ca0\u8f09\u6709\u5f88\u5927\u5f71\u97ff\u3002"),(0,r.kt)("li",null,"\u8a72\u5c0f\u90e8\u4ef6\u4e0d\u652f\u63f4\u6bcf\u50cf\u7d201\u4f4d\u5143\u7684\u8272\u6df1\u3002")),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Images\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("h2",v({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7d0b\u7406\u6620\u5c04\u5668\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c07\u5c0f\u90e8\u4ef6\u6a19\u8a18\u70ba\u4e0d\u53ef\u898b\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u52d5\u756b\u7d0b\u7406\u6620\u5c04\u5668"),"\u6307\u5b9a\u7d0b\u7406\u6620\u5c04\u5668\u662f\u5426\u61c9\u8a72\u751f\u6210\u70ba\u52d5\u756b\u7d0b\u7406\u6620\u5c04\u5668\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6a23\u5f0f")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u5716\u50cf"),"\u6307\u5b9a\u8981\u8f49\u63db\u7684\u5716\u50cf\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a\u5716\u50cf\u5230\u4e2d\u5fc3")," \u6307\u5b9a\u5716\u50cf\u4f4d\u7f6e\u662f\u5426\u61c9\u9396\u5b9a\u5728\u5c0f\u90e8\u4ef6\u7684\u4e2d\u5fc3\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u7d0b\u7406\u6620\u5c04\u5668\u5728\u904b\u884c\u6642\u8abf\u6574\u5927\u5c0f\uff0c\u8a72\u9078\u9805\u4e0d\u6703\u70ba\u5716\u50cf\u4fdd\u6301\u5c45\u4e2d\u4f4d\u7f6e\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u8981\u8f49\u63db\u7684\u5716\u50cf\u5de6\u4e0a\u89d2\u5728\u5c0f\u90e8\u4ef6\u4e2d\u7684\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Angle & Scale")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X\u8ef8\u89d2"),"\u3001",(0,r.kt)("em",{parentName:"td"},"Y\u8ef8\u89d2"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Z\u8ef8\u89d2"),"\u6307\u5b9a\u5716\u50cf\u5728\u5c0f\u90e8\u4ef6\u5167\u7684\u65cb\u8f49\u8b8a\u63db\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u89d2\u5ea6\u7684\u55ae\u4f4d\u662f\u5f27\u5ea6\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u7e2e\u653e"),"\u6307\u5b9a\u5716\u50cf\u5728\u5c0f\u90e8\u4ef6\u5167\u7684\u7e2e\u653e\u8b8a\u63db\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Origo")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a\u539f\u9ede\u5230\u4e2d\u5fc3"),"\u6307\u5b9a\u5716\u50cf\u7684\u65cb\u8f49\u9ede\u662f\u5426\u61c9\u9396\u5b9a\u5728\u5c0f\u90e8\u4ef6\u7684\u4e2d\u5fc3\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u7d0b\u7406\u6620\u5c04\u5668\u5728\u904b\u884c\u6642\u8abf\u6574\u5927\u5c0f\uff0c\u8a72\u9078\u9805\u4e0d\u6703\u4fdd\u6301\u5c45\u4e2d\u7684\u539f\u9ede\u4f4d\u7f6e\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"X\u8ef8\u539f\u9ede"),", ",(0,r.kt)("em",{parentName:"td"},"Y\u8ef8\u539f\u9ede"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Z\u8ef8\u539f\u9ede"),"\u6307\u5b9a\u4e00\u500b\u9ede\uff0c\u8b93\u5c0f\u90e8\u4ef6\u5167\u7684\u5716\u50cf\u570d\u7e5e\u5176\u9032\u884c\u65cb\u8f49\u548c\u7e2e\u653e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u5982\u9700\u77ad\u89e3\u66f4\u591a\u7d30\u7bc0\uff0c\u8acb\u53c3\u95b1",(0,r.kt)("a",v({parentName:"td"},{href:"#origo--camera"}),"\u539f\u9ede & \u76f8\u6a5f\u4e00\u7bc0"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Camera")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u76f8\u6a5f\u8ddd\u96e2"),"\u6307\u5b9a\u865b\u64ec\u76f8\u6a5f\u7684\u8ddd\u96e2\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u7576\u5716\u50cf\u65cb\u8f49\u6642\uff0c\u9019\u5c07\u6539\u8b8a\u8996\u89d2\u6578\u91cf\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6e32\u67d3\u6f14\u7b97\u6cd5")," \u6307\u5b9a\u7528\u65bc\u5728\u5c0f\u90e8\u4ef6\u5167\u6e32\u67d3\u5716\u50cf\u7684\u6f14\u7b97\u6cd5\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9078\u9805\u6709\u201c\u6700\u8fd1\u9130\u63d2\u503c\u201d\u548c\u201c\u96d9\u7dda\u6027\u63d2\u503c\u201d\u3002"),"\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6Alpha\u503c\u7684\u7bc4\u570d\u662f0\u5230255\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h3",v({},{id:"origo--camera"}),"\u539f\u9ede\u8207\u76f8\u6a5f"),(0,r.kt)("p",null,"\u539f\u9ede\u6c7a\u5b9a\u6240\u9078\u5716\u50cf\u61c9\u8a72\u570d\u7e5e\u54ea\u500b\u9ede\u9032\u884c\u8b8a\u63db\u3002 \u5ea7\u6a19\u5c6c\u6027",(0,r.kt)("em",{parentName:"p"},"X\u8ef8\u539f\u9ede"),"\u548c",(0,r.kt)("em",{parentName:"p"},"Y\u8ef8\u539f\u9ede"),"\u8207\u7d0b\u7406\u6620\u5c04\u5668\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u6709\u95dc\uff0c\u800c\u8207\u6240\u9078\u5716\u50cf\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u7121\u95dc\u3002"),(0,r.kt)("p",null,"\u5ea7\u6a19\u5c6c\u6027",(0,r.kt)("em",{parentName:"p"},"Z\u8ef8\u539f\u9ede"),"\u8207",(0,r.kt)("em",{parentName:"p"},"\u76f8\u6a5f\u8ddd\u96e2"),"\u6709\u95dc\u3002 \u5982\u679c",(0,r.kt)("em",{parentName:"p"},"\u76f8\u6a5f\u8ddd\u96e2"),"\u8a2d\u70ba1000\uff0c\u4e14\u5716\u50cf\u61c9\u8a72\u570d\u7e5e\u81ea\u5df1\u7684\u8ef8\u65cb\u8f49\uff0c",(0,r.kt)("em",{parentName:"p"},"Z\u8ef8\u539f\u9ede"),"\u4e5f\u61c9\u8a2d\u70ba1000\u3002"),(0,r.kt)("p",null,"\u5982\u8981\u5c07\u8b8a\u63db\u4f4d\u7f6e\u9396\u5b9a\u5728\u7d0b\u7406\u6620\u5c04\u5668\u7684\u4e2d\u5fc3\uff0c\u8acb\u52fe\u9078\u201c",(0,r.kt)("em",{parentName:"p"},"\u9396\u5b9a\u539f\u9ede\u5230\u4e2d\u5fc3"),"\u201d\u7684\u6838\u53d6\u65b9\u584a\u3002 \u9019\u5c07\u9396\u5b9a",(0,r.kt)("em",{parentName:"p"},"X\u8ef8\u539f\u9ede"),"\u548c",(0,r.kt)("em",{parentName:"p"},"Y\u8ef8\u539f\u9ede"),"\u5c6c\u6027\u5230\u7d0b\u7406\u6620\u5c04\u7684\u4e2d\u5fc3\uff0c\u4e26\u5c07",(0,r.kt)("em",{parentName:"p"},"Z\u8ef8\u539f\u9ede"),"\u9396\u5b9a\u5230",(0,r.kt)("em",{parentName:"p"},"\u76f8\u6a5f\u8ddd\u96e2"),"\u503c\u3002"),(0,r.kt)("p",null,"\u7576\u5716\u50cf\u65cb\u8f49\u6642\uff0c",(0,r.kt)("em",{parentName:"p"},"\u76f8\u6a5f\u8ddd\u96e2"),"\u6539\u8b8a\u986f\u793a\u7684\u8996\u89d2\u6578\u91cf\u3002 ",(0,r.kt)("em",{parentName:"p"},"\u76f8\u6a5f\u8ddd\u96e2"),"\u8d8a\u9760\u8fd1\uff0c\u8996\u91ce\uff08FOV\uff09\u8b8a\u5f97\u8d8a\u5927\uff0c\u56e0\u6b64\u611f\u77e5\u5230\u7684\u8996\u89d2\u6578\u91cf\u5c31\u6703\u589e\u52a0\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.png",noShadow:!0,mdxType:"Figure"},"\u5728\u7d0b\u7406\u6620\u5c04\u5668\u4e2d\u7528\u65bc\u539f\u9ede\u548c\u76f8\u6a5f\u8ddd\u96e2\u7684\u5750\u6a19\u7cfb\u7d71"),(0,r.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u7d0b\u7406\u6620\u5c04\u5668\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)(p.Z,{mdxType:"Note"},"\u5982\u679c\u4e00\u500b\u65cb\u8f49\u6216\u7e2e\u653e\u4ea4\u4e92\u88ab\u61c9\u7528\u5230\u4e00\u500b\u7d0b\u7406\u6620\u5c04\u5668\uff0c\u5b83\u7684\u6301\u7e8c\u6642\u9593\u6216\u5ef6\u9072\u5927\u65bc\u96f6\uff0c\u5b83\u5c07\u88ab\u751f\u6210\u70baAnimationTexture\u6620\u5c04\u5668\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Rotate Texture Mapper")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u5c07\u7d0b\u7406\u6620\u5c04\u5668\u570d\u7e5e\u5176X\u8ef8\u3001Y\u8ef8\u548cZ\u8ef8",(0,r.kt)("em",{parentName:"td"},"\u539f\u9ede"),"\uff0c\u76f8\u5c0d\u65bc\u5176\u7576\u524d\u65b9\u5411\u6216\u76f8\u5c0d\u65bc\u7279\u5b9a\u89d2\u5ea6\u9032\u884c\u65cb\u8f49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Scale Texture Mapper")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u7e2e\u653e\u7d0b\u7406\u6620\u5c04\u5668\uff08\u76f8\u5c0d\u65bc\u5176\u7576\u524d\u5c3a\u5bf8\u6216\u76f8\u5c0d\u65bc\u7279\u5b9a\u5c3a\u5bf8\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u8abf\u6574\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u56b4\u91cd\u4f9d\u8cf4\u65bcMCU\u5c0d\u5716\u50cf\u9032\u884c\u7e2e\u653e\u548c\u65cb\u8f49\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u7d0b\u7406\u6620\u5c04\u5668\u8996\u70ba\u9ad8\u6548\u80fd\u9700\u6c42\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    interaction1Counter(0)\n{\n    textureMapper.setXY(150, 46);\n    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    textureMapper.setWidth(180);\n    textureMapper.setHeight(180);\n    textureMapper.setBitmapPosition(26.000f, 26.000f);\n    textureMapper.setScale(1.000f);\n    textureMapper.setCameraDistance(1000.000f);\n    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);\n    textureMapper.setCamera(90.000f, 90.000f);\n    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);\n    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n\n    add(textureMapper);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528TextureMapper\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textureMapper.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",v({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5982\u679c\u7d0b\u7406\u6620\u5c04\u5668\u88ab\u8a2d\u7f6e\u70ba\u52d5\u756b\u7d0b\u7406\u6620\u5c04\u5668\uff0c\u53ef\u4ee5\u8a2d\u7f6e\u5169\u500bCallback\u51fd\u6578\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u7576\u524d\u52d5\u756b\u57f7\u884c\u4e00\u500b\u6b65\u9a5f\u6642\uff0c\u90fd\u6703\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationStepAction"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7576\u6240\u6709\u52d5\u756b\u7d50\u675f\u6642\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationEndedAction"),"\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u5169\u6bb5\u7a0b\u5f0f\u78bc\u6f14\u793a\u4e86\u5982\u4f55\u8a2d\u7f6e\u9019\u5169\u500bCallback\u51fd\u6578\uff1a"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Screen1View\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n};\n")),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View() :\n  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),\n  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)\n{\n  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);\n  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);\n  add(textureMapper);\n}\n\nvoid Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper steps\n    }\n}\n\nvoid Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper ends\n    }\n}\n")),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u7d0b\u7406\u6620\u5c04\u5668\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/texture-mapper-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u7d0b\u7406\u6620\u5c04\u5668UI\u7bc4\u672c"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/animation-texture-mapper-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u52d5\u756b\u7d0b\u7406\u6620\u5c04\u5668UI\u7bc4\u672c"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_texture_mapper",mdxType:"Link"},"TextureMapper\u985e\u7684API\u53c3\u8003")),(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",mdxType:"Link"},"AnimationTextureMapper\u985e\u7684API\u53c3\u8003"))))}T.isMDXComponent=!0}}]);