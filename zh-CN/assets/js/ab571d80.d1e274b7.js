"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8270],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,h=u["".concat(c,".").concat(s)]||u[s]||d[s]||l;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},10878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return N},default:function(){return x},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return w}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),c=n(39130),p=n(22425),m=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&k(e,n,t[n]);return e};const f={id:"container",title:"\u5bb9\u5668"},N=void 0,b={unversionedId:"development/ui-development/ui-components/containers/container",id:"development/ui-development/ui-components/containers/container",title:"\u5bb9\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/container",permalink:"/zh-CN/docs/development/ui-development/ui-components/containers/container",draft:!1,tags:[],version:"current",frontMatter:{id:"container",title:"\u5bb9\u5668"},sidebar:"docs",previous:{title:"Containers",permalink:"/zh-CN/docs/category/containers"},next:{title:"\u53ef\u6eda\u52a8\u5bb9\u5668",permalink:"/zh-CN/docs/development/ui-development/ui-components/containers/scrollable-container"}},y={},w=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],C={toc:w};function x(e){var t,n=e,{components:m}=n,k=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},C),k),d(t,u({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5bb9\u5668\u662fTouchGFX\u4e2d\u7684\u7ec4\u4ef6\uff0c\u53ef\u5305\u542b\u5b50\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5bb9\u5668\u6982\u5ff5\u57fa\u672c\u6027\u8d28\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",v({parentName:"p"},{href:"../../working-with-touchgfx/widgets-and-containers#containers"}),"\u63a7\u4ef6\u548c\u5bb9\u5668\u9875\u9762"),"\u3002"),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u751f\u6210CachableContainer\u5f62\u5f0f\u7684\u5bb9\u5668\u3002 CacheableContainer\u53ef\u5c06\u5176\u5185\u5bb9\u6e32\u67d3\u5230\u52a8\u6001\u4f4d\u56fe\u3002 \u76f8\u5173\u5185\u5bb9\u5c06\u5728",(0,r.kt)("a",v({parentName:"p"},{href:"../../scenarios/achieving-better-performance-with-cacheable-container"}),"\u901a\u8fc7CacheableContainer\u63d0\u9ad8\u6027\u80fd"),"\u9875\u9762\u4e2d\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/container/widget-appearance.png",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u5bb9\u5668\u63a7\u4ef6"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u5bb9\u5668\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/container/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u63a7\u4ef6"),(0,r.kt)("h2",v({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u5bb9\u5668\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u4f7f\u63a7\u4ef6\u4e0d\u53ef\u89c1\u8fd8\u5c06\u7981\u7528\u4e0e\u63a7\u4ef6\u4e4b\u95f4\u901a\u8fc7\u5c4f\u5e55\u8fdb\u884c\u7684\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7f13\u5b58")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6307\u5b9a\u5bb9\u5668"),"\u662f\u5426\u5e94\u751f\u6210\u4e3aCachableContainer\u5f62\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u8c03\u6574\u63a7\u4ef6\u7684\u5c3a\u5bf8")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u8c03\u6574\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u5bb9\u5668\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u5bb9\u5668\u81ea\u8eab\u5bf9\u6027\u80fd\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\uff0c\u5b8c\u5168\u4f9d\u8d56\u4e8e\u5176\u5b50\u5bb9\u5668\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u5bb9\u5668\u89c6\u4e3a\u975e\u5e38\u5feb\u901f\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528CachableContainer\u5728\u52a8\u6001\u4f4d\u56fe\u4e2d\u7f13\u5b58UI\u5143\u7d20\u53ef\u663e\u8457\u63d0\u9ad8\u6574\u4e2a\u5e94\u7528\u7684\u6027\u80fd\u3002 \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",v({parentName:"p"},{href:"../../scenarios/achieving-better-performance-with-cacheable-container"}),"\u901a\u8fc7CacheableContainer\u63d0\u9ad8\u6027\u80fd"),"\u4e00\u6587\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u5e38\u89c4\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u89c4UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u5bb9\u5668\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    container1.setPosition(67, 11, 347, 250);\n\n    image1.setXY(109, 61);\n    image1.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    container1.add(image1);\n\n    add(container1);\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caContainer\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u4fee\u6539\u4e86\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bb0\u5f97\u8c03\u7528 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"container1.invalidate()")," or",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"container1.invalidateContent()")," \u4ee5\u5f3a\u5236\u91cd\u7ed8\u3002 When using ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"container1.invalidateContent()"),", you must call",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"container1.invalidateContent()")," before and after you change the appearance of the widget. Note: ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"container1.invalidateContent()"),"will call ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"invalidateContent()")," on all children of the container."),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_container",mdxType:"Link"},"\u5bb9\u5668\u7c7b\u7684API\u53c2\u8003")),(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_cacheable_container",mdxType:"Link"},"CachableContainer\u7c7b\u7684API\u53c2\u8003"))))}x.isMDXComponent=!0}}]);