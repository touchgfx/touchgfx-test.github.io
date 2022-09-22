"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4053],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},31217:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=l},37793:function(e,t,n){var r=n(67294),l=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},84351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return S},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return w}});var r=n(3905),l=n(44035),i=n(29415),a=n(37793),o=n(31217),c=n(39130),s=n(22425),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))k.call(t,n)&&h(e,n,t[n]);return e};const f={id:"scroll-list",title:"Scroll List\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30ea\u30b9\u30c8\uff09"},b=void 0,N={unversionedId:"development/ui-development/ui-components/containers/scroll-list",id:"development/ui-development/ui-components/containers/scroll-list",title:"Scroll List\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30ea\u30b9\u30c8\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-list.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-list",permalink:"/ja/docs/development/ui-development/ui-components/containers/scroll-list",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-list",title:"Scroll List\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30ea\u30b9\u30c8\uff09"},sidebar:"docs",previous:{title:"Modal Window\uff08\u30e2\u30fc\u30c0\u30eb\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\uff09",permalink:"/ja/docs/development/ui-development/ui-components/containers/modal-window"},next:{title:"Scroll Wheel\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30db\u30a4\u30fc\u30eb\uff09",permalink:"/ja/docs/development/ui-development/ui-components/containers/scroll-wheel"}},S={},w=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",id:"item-templates",level:3},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],L={toc:w};function y(e){var t,n=e,{components:p}=n,h=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},L),h),u(t,d({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Scroll List\u306f\u3001\u591a\u304f\u306e\u30a2\u30a4\u30c6\u30e0\u3068\u591a\u304f\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u69cb\u6210\u3055\u308c\u308b\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u30e1\u30cb\u30e5\u30fc\u3067\u3001\u30a2\u30a4\u30c6\u30e0\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30b9\u30af\u30ed\u30fc\u30eb\u306b\u3088\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u3068\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 Scroll List\u3067\u306f\u3001Scroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306e\u3068\u304d\u306b\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-appearance.gif",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bScroll List"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"Scroll List\u306f\u3001TouchGFX Designer\u306eContainers\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eScroll List"),(0,r.kt)("h2",v({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"TouchGFX Designer\u306eScroll List\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Type\u306f\u3001Scroll List\u3092\u7e26\u5411\u304d\u306b\u3059\u308b\u306e\u304b\u3001\u6a2a\u5411\u304d\u306b\u3059\u308b\u306e\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Item Template")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Item Template\u306f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308bCustomContainer\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Number of Items\u306f\u3001Scroll List\u306b\u5b58\u5728\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"List Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Circular\u306f\u3001Scroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u304c\u6700\u5f8c\u307e\u3067\u5230\u9054\u3057\u305f\u3068\u304d\u306b\u30eb\u30fc\u30d7\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Items Snap\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u3092\u30b9\u30ca\u30c3\u30d7\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30b9\u30ca\u30c3\u30d7\u304cFalse\u306e\u5834\u5408\u3001\u81ea\u7531\u306b\u52d5\u304d\u307e\u3059\u3002 \u30b9\u30ca\u30c3\u30d7\u304cTrue\u306e\u5834\u5408\u3001\u30a2\u30a4\u30c6\u30e0\u306f\u5e38\u306b\u9078\u629e\u3055\u308c\u305f\u5834\u6240\u306b\u3042\u308b\u3088\u3046\u6240\u5b9a\u306e\u4f4d\u7f6e\u306b\u30b9\u30ca\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Item Margin\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u9593\u306e\u9593\u9694\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Padding Before\u304a\u3088\u3073Padding After\u306f\u3001Scroll List\u5185\u306e\u8868\u793a\u63cf\u753b\u306e\u524d\u5f8c\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u8ddd\u96e2\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Easing\u304a\u3088\u3073Easing Option\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30fc\u30b8\u30f3\u30b0\u5f0f\uff08\u52d5\u304d\u306b\u7de9\u6025\u3092\u3064\u3051\u308b\uff09\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Swipe Acc. \u304a\u3088\u3073Drag Acc. \u306f\u3001\u30b9\u30af\u30ed\u30fc\u30eb\u6642\u306e\u52a0\u901f\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,r.kt)("h3",v({},{id:"item-templates"}),"\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("p",null,"Scroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8981\u7d20\u306e\u30d9\u30fc\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b",(0,r.kt)("a",v({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\u3067\u3042\u308b\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002 Scroll List\u3092\u4f5c\u6210\u3059\u308b\u524d\u306b\u3001Scroll List\u306e\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u7528\u610f\u3059\u308b\u305f\u3081\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Scroll List\u306e\u4f5c\u6210\u5f8c\u3001CustomContainer\u3092ItemTemplate\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u9078\u629e\u3067\u304d\u307e\u3059\u3002 Item Template\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u9078\u629e\u3055\u308c\u305f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u65b9\u5411\u3067\u306f\u306a\u3044\u65b9\uff08\u7e26\u5411\u304d\u306eScroll List\u306a\u3089\u5e45\u3001\u6a2a\u5411\u304d\u306eScroll List\u306a\u3089\u9ad8\u3055\uff09\u306e\u30b5\u30a4\u30ba\uff65\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5408\u3046\u3088\u3046\u306b\u3001Scroll List\u306e\u30b5\u30a4\u30ba\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 \u3082\u3046\u4e00\u65b9\u306e\u30b5\u30a4\u30ba\uff65\u30d7\u30ed\u30d1\u30c6\u30a3\uff08\u7e26\u5411\u304d\u306a\u3089\u9ad8\u3055\u3001\u6a2a\u5411\u304d\u306a\u3089\u5e45\uff09\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u6570\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",v({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Scroll List\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,r.kt)("p",null,"Scroll List\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"Scroll List\u306f",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"Container"),"\u30bf\u30a4\u30d7\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u63cf\u753b\u30c1\u30a7\u30fc\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u4e3b\u306b\u5b50\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bScroll List\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollList.setPosition(140, 10, 200, 252);\n    scrollList.setHorizontal(false);\n    scrollList.setCircular(false);\n    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);\n    scrollList.setSwipeAcceleration(10);\n    scrollList.setDragAcceleration(10);\n    scrollList.setNumberOfItems(20);\n    scrollList.setPadding(0, 0);\n    scrollList.setSnapping(false);\n    scrollList.setDrawableSize(50, 2);\n    scrollList.setDrawables(scrollListListItems, updateItemCallback);\n\n    add(scrollList);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollList.initialize();\n    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)\n    {\n        scrollListListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollListListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollListUpdateItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(a.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001ScrollList\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"scrollList.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",v({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"Scroll List\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8981\u7d20\u3068\u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3057\u3066Scroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase"),"\u30af\u30e9\u30b9\u306e\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"ScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"class ScreenViewBase : public touchgfx::View\n{\npublic:\n    ScreenViewBase();\n    virtual ~ScreenViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen\n    }\n\nprotected:\n    FrontendApplication& application() {\n         return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n    touchgfx::BoxWithBorder boxWithBorder;\n    touchgfx::ScrollList scrollList;\n    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n};\n")),(0,r.kt)("p",null,"TouchGFX Designer\u304cScroll List\u306e\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3068\u3001\u4e0a\u8a18\u3067\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),"\u304c\u4f5c\u6210\u3055\u308c\u3001\u30e6\u30fc\u30b6\u304cScroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u304a\u3088\u3073\u66f4\u65b0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306fScroll List\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u308b\u305f\u3073\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u306e\u3067\u3001\u30a2\u30a4\u30c6\u30e0\u306f\u5fc5\u305a\u8868\u793a\u3055\u308c\u308b\u524d\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),"\u306b\u306f2\u3064\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u3042\u308a\u3001\u3053\u308c\u3089\u306f\u66f4\u65b0\u5bfe\u8c61\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8b58\u5225\u3057\u3001\u305d\u308c\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u306b\u306f\u30a2\u30a4\u30c6\u30e0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u5024\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u306f\u66f4\u65b0\u5bfe\u8c61\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"\u306f\u3001Scroll List\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u3067\u3042\u308bCustomContainer\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u53c2\u7167\u3067\u3059\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u66f4\u65b0\u3059\u308b\u3068\u3001Scroll List\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u63cf\u753b\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),"\u306e\u7d71\u5408\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/ScreenPresenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HP\n")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n{\n    item.setValue(itemIndex);\n}\n")),(0,r.kt)("p",null,"\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),"\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),"\u95a2\u6570\u304c\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\u3067\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u306e\u76ee\u7684\u306f\u3001",(0,r.kt)("a",v({parentName:"p"},{href:"scroll-list"}),"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u5192\u982d"),"\u3067\u793a\u3057\u305f\u4f8b\u306e\u3088\u3046\u306b\u3001\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u8868\u793a\u3055\u308c\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u5024\u3067\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306fCustomContainer\u306b\u57fa\u3065\u3044\u3066\u3044\u308b\u306e\u3067\u3001CustomContainer\u7528\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"setValue"),"\u95a2\u6570\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 setValue\u95a2\u6570\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001\u30a2\u30a4\u30c6\u30e0\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30a2\u30a4\u30c6\u30e0\u306b\u5bfe\u3057\u3066setValue\u3092\u547c\u3073\u51fa\u3059\u3068\u3001\u30a2\u30a4\u30c6\u30e0\u306e\u5916\u89b3\u304c\u66f4\u65b0\u3055\u308c\u3001\u305d\u308c\u3089\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u5024\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,r.kt)("p",null,"Scroll List\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306eScroll Wheel and List Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u7167"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_list",mdxType:"Link"},"ScrollList\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}y.isMDXComponent=!0}}]);