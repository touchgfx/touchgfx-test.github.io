"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2532],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},75564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return E}});var r=n(3905),a=n(44035),l=n(29415),o=n(37793),i=n(31217),p=n(39130),m=n(22425),d=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&h(e,n,t[n]);return e};const b={id:"radio-button",title:"\u5355\u9009\u6309\u94ae"},v=void 0,f={unversionedId:"development/ui-development/ui-components/buttons/radio-button",id:"development/ui-development/ui-components/buttons/radio-button",title:"\u5355\u9009\u6309\u94ae",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/radio-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/radio-button",permalink:"/zh-CN/docs/development/ui-development/ui-components/buttons/radio-button",draft:!1,tags:[],version:"current",frontMatter:{id:"radio-button",title:"\u5355\u9009\u6309\u94ae"},sidebar:"docs",previous:{title:"\u5f00\u5173\u6309\u94ae",permalink:"/zh-CN/docs/development/ui-development/ui-components/buttons/toggle-button"},next:{title:"\u91cd\u590d\u6309\u94ae",permalink:"/zh-CN/docs/development/ui-development/ui-components/buttons/repeat-button"}},y={},E=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:2},{value:"API\u53c2\u8003",id:"api-reference",level:2}],w={toc:E};function x(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=N(N({},w),h),u(t,c({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u5355\u9009\u6309\u94ae\u662f\u4e00\u79cd\u611f\u5e94\u89e6\u63a7\u4e8b\u4ef6\u7684\u63a7\u4ef6\uff0c\u80fd\u591f\u5728\u5355\u9009\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u53d1\u9001\u56de\u8c03\u3002 \u5355\u9009\u6309\u94ae\u5305\u542b\u56db\u5e45\u56fe\u50cf\uff0c\u5bf9\u5e94\u4e8e\u6309\u4e0b\u6216\u91ca\u653e\u72b6\u6001\u4e0b\u7684\u9009\u4e2d\u6216\u672a\u9009\u4e2d\u6309\u94ae\u3002 \u53ef\u4ee5\u5c06\u5355\u9009\u6309\u94ae\u6dfb\u52a0\u5230\u5355\u9009\u6309\u94ae\u7ec4\uff0c\u540e\u8005\u5728\u4f5c\u51fa\u65b0\u9009\u62e9\u65f6\u5904\u7406\u5355\u9009\u6309\u94ae\u7684\u9009\u62e9\u3002"),(0,r.kt)("p",null,"\u5355\u9009\u6309\u94ae\u53ef\u901a\u8fc7",(0,r.kt)("a",N({parentName:"p"},{href:"flex-button"}),"\u7075\u6d3b\u6309\u94ae"),"\u8fdb\u884c\u590d\u5236\u3002 \u7075\u6d3b\u6309\u94ae\u662f\u4e00\u79cd\u53ef\u914d\u7f6e\u6027\u66f4\u9ad8\u7684\u6309\u94ae\uff0c\u4e3a\u4e86\u83b7\u5f97\u7075\u6d3b\u6027\u800c\u9700\u8981\u591a\u5360\u7528\u4e00\u4e9bRAM\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-appearance.png",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u5355\u9009\u6309\u94ae"),(0,r.kt)("h2",N({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u5355\u9009\u6309\u94ae\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684\u201c\u6309\u94ae\u201d\u63a7\u4ef6\u7ec4\u4e2d\u627e\u5230\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5355\u9009\u6309\u94ae"),(0,r.kt)("h2",N({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"\u4e0b\u9762\u51e0\u8282\u5c06\u63cf\u8ff0\u5355\u9009\u6309\u94ae\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5355\u9009\u6309\u94ae\u7684\u5c3a\u5bf8\u53d6\u51b3\u4e8e\u6240\u9009\u56fe\u50cf\u7684\u5c3a\u5bf8\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9009\u62e9")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u9009\u4e2d")," \u6307\u5b9a\u6309\u94ae\u7684\u521d\u59cb\u9009\u62e9\u72b6\u6001\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u53ef\u53d6\u6d88\u9009\u4e2d")," \u6307\u5b9a\u5728\u9009\u4e2d\u72b6\u6001\u4e0b\u901a\u8fc7\u70b9\u51fb\u6309\u94ae\u53d6\u6d88\u9009\u4e2d\u6309\u94ae\u7684\u80fd\u529b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7ec4")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7ec4\u522b"),"\u6307\u5b9a\u8be5\u6309\u94ae\u4f1a\u88ab\u5206\u914d\u5230\u7684\u7ec4\u7684\u540d\u79f0\u3002 \u9009\u4e2d\u548c\u53d6\u6d88\u9009\u4e2d\u884c\u4e3a\u5305\u542b\u5728\u8fd9\u4e9b\u5355\u9009\u6309\u94ae\u7ec4\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6837\u5f0f")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6837\u5f0f"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u56fe\u50cf")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u91ca\u653e\u56fe\u50cf")," \u548c ",(0,r.kt)("em",{parentName:"td"},"\u6309\u4f4f\u56fe\u50cf")," \u6307\u5b9a\u5206\u914d\u7ed9\u6309\u4e0b\u548c\u91ca\u653e\u72b6\u6001\u7684\u6765\u81eaDesigner\u76ae\u80a4\u5e93\u6216Project\u6587\u4ef6\u5939\u7684\u56fe\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u63a7\u4ef6Alpha\u503c\u7684\u8303\u56f4\u662f0\u5230255\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u51e0\u8282\u5c06\u63cf\u8ff0\u5355\u9009\u6309\u94ae\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",N({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6(\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1(\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue).")))),(0,r.kt)("h3",N({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u89e6\u53d1\u6761\u4ef6")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5355\u9009\u6309\u94ae\u88ab\u9009\u4e2d")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u5355\u9009\u6309\u94ae\u5df2\u88ab\u53d6\u6d88\u9009\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5355\u9009\u6309\u94ae\u88ab\u53d6\u6d88\u9009\u4e2d")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u5355\u9009\u6309\u94ae\u5df2\u88ab\u9009\u4e2d\u3002")))),(0,r.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u5355\u9009\u6309\u94ae\u5305\u542b\u56db\u5e45\u56fe\u50cf\u5e76\u4f9d\u8d56\u4e8e\u56fe\u50cf\u7ed8\u5236\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u591a\u6570\u5e73\u53f0\u4e0a\uff0c\u5355\u9009\u6309\u94ae\u90fd\u88ab\u89c6\u4e3a\u5feb\u901f\u6267\u884c\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u4e00\u8282\u3002"),(0,r.kt)("h2",N({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u4e3aView\u57fa\u7c7b\u751f\u6210\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8bbe\u7f6e\u5355\u9009\u6309\u94ae\u3002"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\ncreen1ViewBase::Screen1ViewBase() :\n    radioButtonSelectedCallback(this, &Screen1ViewBase::radioButtonSelectedCallbackHandler)\n{\n    radioButtonName.setXY(136, 114);\n    radioButtonName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_INACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_PRESSED_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_ACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_NORMAL_ID));\n    radioButtonName.setSelected(false);\n    radioButtonName.setDeselectionEnabled(true);\n\n    add(radioButtonName);\n    radioButtonGroupName.add(radioButtonName);\n\n    radioButtonGroupName.setRadioButtonSelectedHandler(radioButtonSelectedCallback);\n}\n\nvoid Screen1ViewBase::radioButtonSelectedCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &radioButtonName)\n    {\n        //InteractionName\n        //When buttonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528RadioButton\u7c7b\u4e2d\u7684\u8fd9\u4e9b\u51fd\u6570\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6570\u3002 \u5982\u679c\u4fee\u6539\u4e86\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bb0\u5f97\u8c03\u7528 ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"radioButtonName.invalidate()")," \u4ee5\u5f3a\u5236\u91cd\u7ed8\u3002"),(0,r.kt)("h2",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u63a2\u7d22\u5355\u9009\u6309\u94ae\uff0c\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u7528\u4ee5\u4e0bUI\u6a21\u677f\u65b0\u5efa\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/radio-button-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5355\u9009\u6309\u94ae\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",N({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_radio_button",mdxType:"Link"},"RadioButton\u7c7b\u7684API\u53c2\u8003"))))}x.isMDXComponent=!0}}]);