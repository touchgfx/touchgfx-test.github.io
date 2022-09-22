"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3488],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),g=m(n),c=r,k=g["".concat(u,".").concat(c)]||g[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},9522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return E}});var a=n(3905),r=n(44035),l=n(29415),i=n(37793),p=n(31217),u=n(39130),m=n(22425),o=Object.defineProperty,d=Object.defineProperties,g=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&N(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&N(e,n,t[n]);return e};const v={id:"gauge",title:"\u5100\u9336"},b=void 0,f={unversionedId:"development/ui-development/ui-components/miscellaneous/gauge",id:"development/ui-development/ui-components/miscellaneous/gauge",title:"\u5100\u9336",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/gauge.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/gauge",permalink:"/zh-TW/docs/development/ui-development/ui-components/miscellaneous/gauge",draft:!1,tags:[],version:"current",frontMatter:{id:"gauge",title:"\u5100\u9336"},sidebar:"docs",previous:{title:"\u52d5\u614b\u5716\u5f62",permalink:"/zh-TW/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"},next:{title:"\u5f71\u7247",permalink:"/zh-TW/docs/development/ui-development/ui-components/miscellaneous/video"}},y={},E=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],w={toc:E};function x(e){var t,n=e,{components:o}=n,N=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},w),N),d(t,g({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5100\u9336(Gauge )\u662f\u4e00\u7a2e\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u7e6a\u88fd\u6307\u6a19\u548c\u5f27\u5f62\uff0c\u7528\u65bc\u6307\u793a\u6307\u5b9a\u7bc4\u570d\u5167\u7684\u7d66\u5b9a\u503c\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u5100\u9336"),(0,a.kt)("h2",h({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,a.kt)("p",null,"\u5100\u9336\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5100\u9336"),(0,a.kt)("h2",h({},{id:"properties"}),"\u5c6c\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u5100\u9336\u7684\u5c6c\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u90e8\u4ef6\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u90e8\u4ef6\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6a23\u5f0f")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Background")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u5716\u50cf"),"\u6307\u5b9a\u7528\u4f5c\u80cc\u666f\u7684\u5716\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u80cc\u666f\u504f\u79fb"),"\u6307\u5b9a\u6240\u9078\u80cc\u666f\u5716\u50cf\u7684x\u8ef8\u548cy\u8ef8\u504f\u79fb\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5100\u9336")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u65cb\u8f49\u4e2d\u5fc3"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u4e2d\u6307\u6a19\u548c\u5f27\u7dda\u61c9\u8a72\u7e5e\u5176\u65cb\u8f49\u7684x\u8ef8\u548cy\u8ef8\u9ede\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u8d77\u6b62\u89d2"),"\u6307\u5b9a\u6307\u91dd\u548c\u5f27\u7dda\u7684\u8d77\u59cb\u548c\u7d50\u675f\u89d2\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u503c\u7bc4\u570d"),"\u6307\u5b9a\u6307\u793a\u5668\u7684\u6700\u5c0f\u548c\u6700\u5927\u6574\u6578\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u521d\u59cb\u503c"),"\u6307\u5b9a\u5100\u9336\u7684\u521d\u59cb\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u52d5\u756b\u52d5\u4f5c"),"\u6307\u5b9a\u662f\u5426\u555f\u7528\u6307\u91dd\u548c\u5f27\u7dda\u7684\u52d5\u756b\u6548\u679c\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7de9\u52d5"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u7de9\u52d5\u9078\u9805"),"\u6307\u5b9a\u4f7f\u7528\u7684\u7de9\u52d5\u65b9\u7a0b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Needle")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6307\u6a19\u5716\u50cf"),"\u6307\u5b9a\u7528\u4f5c\u80cc\u666f\u7684\u5716\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6307\u6a19\u65cb\u8f49\u4e2d\u5fc3"),"\u6307\u5b9a\u6307\u6a19\u5716\u50cf\u4e2d\u6307\u6a19\u5c07\u7e5e\u8457\u65cb\u8f49\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u79fb\u52d5\u6e32\u67d3\u6f14\u7b97\u6cd5"),"\u6307\u5b9a\u5728\u79fb\u52d5\u5230\u65b0\u503c\u6642\u7e6a\u88fd\u6307\u6a19\u5716\u50cf\u6240\u7528\u7684\u6f14\u7b97\u6cd5\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u56fa\u5b9a\u6e32\u67d3\u6f14\u7b97\u6cd5"),"\u6307\u5b9a\u5728\u6307\u6a19\u975c\u6b62\u6642\u7528\u65bc\u7e6a\u88fd\u6307\u6a19\u5716\u50cf\u7684\u6f14\u7b97\u6cd5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Arc")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u4f7f\u7528\u5f27\u7dda"),"\u6307\u5b9a\u662f\u5426\u4f7f\u7528\u5f27\u7dda\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5716\u50cf/\u984f\u8272"),"\u6307\u5b9a\u7528\u65bc\u586b\u5145\u5f27\u7dda\u7684\u984f\u8272\u6216\u5716\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u8a2d\u5b9a\u5f27\u7dda\u4f4d\u7f6e"),"\u6307\u5b9a\u662f\u5426\u8986\u84cb\u9ed8\u8a8d\u7684\u5f27\u7dda\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5f27\u7dda\u7684\u4f4d\u7f6e\u70ba\uff080,0\uff09\uff0c\u4e26\u4e14\u8207\u5100\u9336\u672c\u8eab\u7684\u5927\u5c0f\u76f8\u540c\u3002 \u7576\u60a8\u60f3\u4f7f\u7528\u5716\u50cf\u4f5c\u70ba\u5f27\u7dda\u7e6a\u88fd\u5668\uff0c\u4f46\u662f\u5f27\u7dda\uff08\u5716\u50cf\uff09\u7684\u5c3a\u5bf8\u5c0f\u65bc\u5100\u9336\u7684\u5c3a\u5bf8\u6642\uff0c\u8986\u84cb\u9ed8\u8a8d\u8a2d\u7f6e\u662f\u6709\u7528\u7684\u3002 \u56e0\u6b64\uff0c\u53ef\u4ee5\u5c07\u5716\u50cf\u4fee\u526a\u70ba\u6240\u9700\u7684\u5c3a\u5bf8\u4e26\u5c07\u5f27\u7dda\u7f6e\u65bc\u7279\u5b9a\u7684\u4f4d\u7f6e\uff0c\u800c\u4e0d\u662f\u63a1\u7528\u4e00\u5e45\u5927\u578b\u5716\u50cf\uff08\u5c3a\u5bf8\u8207\u5100\u9336\u76f8\u540c\uff0c\u5e36\u8a31\u591a\u900f\u660e\u7684\u7dda\u689d\uff09\u3002 \u5f27\u7dda\u5c07\u6cbf\u7528\u76f8\u540c\u7684\u65cb\u8f49\u4e2d\u5fc3\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7dda\u7684X\u8ef8\u548cY\u8ef8\u4f4d\u7f6e"),"\u6307\u5b9a\u5f27\u7dda\u7684X\u8ef8\u548cY\u8ef8\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5f27\u7dda\u5bec\u5ea6\u548c\u9ad8\u5ea6"),"\u6307\u5b9a\u5f27\u7dda\u7684\u5c3a\u5bf8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u534a\u5f91"),"\u6307\u5b9a\u5f27\u7dda\u7684\u534a\u5f91\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7dda\u689d\u5bec\u5ea6"),"\u6307\u5b9a\u5f27\u7dda\u7684\u7dda\u689d\u5bec\u5ea6\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u8a72\u503c\u70ba0\uff0c\u5247\u5f27\u7dda\u8207\u534a\u5f91\u4e00\u6a23\u5927\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7aef\u9ede\u6a23\u5f0f"),"\u6307\u5b9a\u5f27\u7dda\u7684\u7aef\u9ede\u6a23\u5f0f\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u8a72\u503c\u70ba0\uff0c\u5247\u5f27\u7dda\u8207\u534a\u5f91\u4e00\u6a23\u5927\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7aef\u9ede\u6a23\u5f0f"),"\u6307\u5b9a\u5f27\u7dda\u7684\u7aef\u9ede\u6a23\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u4ecb\u65bc0\u548c255\u4e4b\u9593\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,a.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,a.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5f27\u7dda\u7684\u4f4d\u7f6e\u70ba\uff080,0\uff09\uff0c\u4e26\u4e14\u8207\u5100\u9336\u672c\u8eab\u7684\u5927\u5c0f\u76f8\u540c\u3002 \u7576\u60a8\u60f3\u4f7f\u7528\u5716\u50cf\u4f5c\u70ba\u5f27\u7dda\u7e6a\u88fd\u5668\uff0c\u4f46\u662f\u5f27\u7dda\uff08\u5716\u50cf\uff09\u7684\u5c3a\u5bf8\u5c0f\u65bc\u5100\u9336\u7684\u5c3a\u5bf8\u6642\uff0c\u8986\u84cb\u9ed8\u8a8d\u8a2d\u7f6e\u662f\u6709\u7528\u7684\u3002 \u56e0\u6b64\uff0c\u53ef\u4ee5\u5c07\u5716\u50cf\u4fee\u526a\u70ba\u6240\u9700\u7684\u5c3a\u5bf8\u4e26\u5c07\u5f27\u7dda\u7f6e\u65bc\u7279\u5b9a\u7684\u4f4d\u7f6e\uff0c\u800c\u4e0d\u662f\u63a1\u7528\u4e00\u5e45\u5927\u578b\u5716\u50cf\uff08\u5c3a\u5bf8\u8207\u5100\u9336\u76f8\u540c\uff0c\u5e36\u8a31\u591a\u900f\u660e\u7684\u7dda\u689d\uff09\u3002 \u5f27\u7dda\u5c07\u6cbf\u7528\u76f8\u540c\u7684\u65cb\u8f49\u4e2d\u5fc3\u3002"),(0,a.kt)("h2",h({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u7684\u5100\u9336\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h3",h({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Set value")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u8a2d\u5b9a\u5100\u9336\u7684\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Update value")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6301\u7e8c\u6642\u9593\u66f4\u65b0\u5100\u9336\u7684\u503c\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,a.kt)("h3",h({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u89f8\u767c\u689d\u4ef6")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value set")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u5728\u66f4\u65b0\u52d5\u756b\u671f\u9593\uff0c\u5c07\u70ba\u5373\u6642\u66f4\u65b0\u548c\u4e2d\u9593\u6b65\u9a5f\u800c\u89f8\u767c\u3002 \u53ea\u6709\u5728\u65b0\u503c\u8207\u7576\u524d\u503c\u4e0d\u540c\u6642\u624d\u89f8\u767c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value updated")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u5c07\u5728\u66f4\u65b0\u52d5\u756b\u5b8c\u6210\u6642\u89f8\u767c\u3002 \u5982\u679c\u66f4\u65b0\u7684\u6301\u7e8c\u6642\u9593\u70ba0\uff0c\u66f4\u65b0\u5c07\u7acb\u5373\u767c\u751f\uff0c\u4f46\u4ecd\u7136\u6703\u89f8\u767c\u6b64\u4e8b\u4ef6\u3002")))),(0,a.kt)("h2",h({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u5100\u9336\u5305\u62ec",(0,a.kt)("a",h({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u3001",(0,a.kt)("a",h({parentName:"p"},{href:"../shapes/circle"}),"\u5713"),"\u3001\u4ee5\u53ca",(0,a.kt)("a",h({parentName:"p"},{href:"../images/texture-mapper"}),"\u7d0b\u7406\u6620\u5c04\u5668"),"\u3002"),(0,a.kt)("p",null,"\u5713\u548c\u7d0b\u7406\u6620\u5c04\u5668\u5143\u4ef6\u662fMCU\u8cc7\u6e90\u5bc6\u96c6\u578b\u5143\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u5100\u9336\u8996\u70ba\u8981\u6c42\u9ad8\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,a.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,a.kt)("a",h({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,a.kt)("h2",h({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("h3",h({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bDesigner\u662f\u5982\u4f55\u5275\u5efa\u5100\u9336\u7684\u3002"),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"MainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    gauge.setBackground(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_BACKGROUND_STYLE_01_ID));\n    gauge.setPosition(115, 11, 251, 251);\n    gauge.setCenter(125, 125);\n    gauge.setStartEndAngle(-85, 85);\n    gauge.setRange(0, 100);\n    gauge.setValue(0);\n    gauge.setEasingEquation(touchgfx::EasingEquations::elasticEaseOut);\n    gauge.setNeedle(BITMAP_BLUE_NEEDLES_ORIGINAL_GAUGE_NEEDLE_STYLE_01_ID, 11, 55);\n    gauge.setMovingNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setSteadyNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setArcVisible();\n    gaugePainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_FILL_STYLE_01_ID));\n    gauge.getArc().setPainter(gaugePainter);\n    gauge.getArc().setRadius(94);\n    gauge.getArc().setLineWidth(14);\n    gauge.getArc().setCapPrecision(180);\n    gauge.setArcPosition(28, 30, 196, 88);\n\n    add(gauge);\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Gauge\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"gauge.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,a.kt)("h3",h({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5982\u8981\u8a2d\u7f6e\u5100\u9336\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)"),"\u5c07\u7acb\u5373\u79fb\u52d5\u6307\u6a19\u548c\u5f27\u5230\u65b0\u503c\uff0c\u4f46\u6c92\u6709\u52d5\u756b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)"),"\u6307\u91dd\u548c\u5f27\u5728\u5b9a\u7fa9\u7684\u6301\u7e8c\u6642\u9593\u5167\u4ee5\u52d5\u756b\u65b9\u5f0f\u6ef4\u7b54\u3001\u6ef4\u7b54\u5730\u79fb\u52d5\u5230\u65b0\u503c\u3002 \u5982\u679c\u6301\u7e8c\u6642\u9593\u70ba0\uff0c\u66f4\u65b0\u5c07\u7acb\u5373\u9032\u884c\u3002 \u6240\u7528\u7684\u52d5\u756b\u5c07\u662f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setEasingEquation(EasingEquation easingEquation)"),"\u5728\u5100\u9336\u4e0a\u5b9a\u7fa9\u7684"),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n    tickCounter = 0;\n}\n\nvoid MainView::handleTickEvent()\n{\n    tickCounter++;\n\n    // Change value every 120 tick.\n    if (tickCounter % 120 == 0)\n    {\n      // Insert data point\n      gauge.updateValue(/* new integer value */, 30); // animates needle and arc to new value with a duration of 30 ticks\n    }\n}\n")),(0,a.kt)("h3",h({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u5100\u9336\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/gauge-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5100\u9336UI\u7bc4\u672c"),(0,a.kt)("h2",h({},{id:"api-reference"}),"API\u53c3\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(u.Z,{to:"../../../../api/classes/classtouchgfx_1_1_gauge",mdxType:"Link"},"\u5100\u9336\u985e\u7684API\u53c3\u8003"))))}x.isMDXComponent=!0}}]);