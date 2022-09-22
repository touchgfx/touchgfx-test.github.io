"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5788],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,h=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},1115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return w},default:function(){return O},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(29415),o=n(37793),i=n(31217),p=n(39130),d=n(22425),c=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&k(e,n,t[n]);return e};const v={id:"modal-window",title:"\u5f37\u5236\u56de\u61c9\u8996\u7a97"},w=void 0,b={unversionedId:"development/ui-development/ui-components/containers/modal-window",id:"development/ui-development/ui-components/containers/modal-window",title:"\u5f37\u5236\u56de\u61c9\u8996\u7a97",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/modal-window.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/modal-window",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/ui-components/containers/modal-window",draft:!1,tags:[],version:"current",frontMatter:{id:"modal-window",title:"\u5f37\u5236\u56de\u61c9\u8996\u7a97"},sidebar:"docs",previous:{title:"\u5217\u8868\u4f48\u5c40",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/ui-components/containers/list-layout"},next:{title:"\u6efe\u52d5\u5217\u8868",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/ui-components/containers/scroll-list"}},N={},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],x={toc:y};function O(e){var t,n=e,{components:c}=n,k=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},x),k),m(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5f37\u5236\u56de\u61c9(Modal Window)\u8996\u7a97\u662f",(0,r.kt)("a",f({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\u985e\u578b\u7684\u5c0f\u90e8\u4ef6\uff0c\u7528\u65bc\u986f\u793a\u8996\u7a97\uff0c\u4e26\u7981\u6b62\u5c0d\u4e0b\u5c64\u8996\u5716\u548c\u5c0f\u90e8\u4ef6\u7684\u89f8\u6478\u4e8b\u4ef6\u3002 \u5f37\u5236\u56de\u61c9\u8996\u7a97\u7531\u80cc\u666f",(0,r.kt)("a",f({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u548c",(0,r.kt)("a",f({parentName:"p"},{href:"../shapes/box"}),"\u908a\u6846"),"\u69cb\u6210\uff0c\u908a\u6846\u5145\u7576\u8986\u84cb\u4e0b\u5c64\u8996\u5716\u548c\u5c0f\u90e8\u4ef6\u7684\u9670\u5f71\uff0c\u5176Alpha\u503c\u53ef\u8abf\u6574\u3002 \u5f37\u5236\u56de\u61c9\u8996\u7a97\u5c07\u586b\u5145\u6574\u500b\u87a2\u5e55\uff0c\u4e26\u61c9\u4f5c\u70ba\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u6dfb\u52a0\uff0c\u4ee5\u4f7f\u5176\u59cb\u7d42\u4f4d\u65bc\u5176\u4ed6\u6240\u6709\u5143\u7d20\u7684\u9802\u90e8\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u5f37\u5236\u56de\u61c9\u8996\u7a97"),(0,r.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u5f37\u5236\u56de\u61c9\u8996\u7a97\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Containers\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5f37\u5236\u56de\u61c9\u8996\u7a97"),(0,r.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u5f37\u5236\u56de\u61c9\u8996\u7a97\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Modal Image Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5716\u50cf\u5de6\u4e0a\u89d2\u5728\u5f37\u5236\u56de\u61c9\u8996\u7a97\u4e2d\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5bb9\u5668\u5728\u5f37\u5236\u56de\u61c9\u8996\u7a97\u4e2d\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5bb9\u5668\u5728\u5f37\u5236\u56de\u61c9\u8996\u7a97\u4e2d\u7684\u5927\u5c0f\u662f\u5f9e\u95dc\u806f\u5716\u50cf\u7684\u5927\u5c0f\u7372\u53d6\u7684\uff0c\u5176\u5927\u5c0f\u7121\u6cd5\u66f4\u6539\uff08\u9664\u975e\u66f4\u6539\u5716\u50cf\uff09\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c07\u5c0f\u90e8\u4ef6\u6a19\u8a18\u70ba\u4e0d\u53ef\u898b\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u8996\u7a97\u5716\u50cf")," \u6307\u5b9a\u5f37\u5236\u56de\u61c9\u8996\u7a97\u61c9\u4f7f\u7528\u7684\u5716\u50cf\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9670\u5f71\u984f\u8272")," \u6307\u5b9a\u758a\u52a0\u9670\u5f71\u7684\u984f\u8272\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Shade Alpha")," \u6307\u5b9a\u758a\u52a0\u9670\u5f71\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6Alpha\u503c\u7684\u7bc4\u570d\u662f0\u5230255\u3002 0\u70ba\u5b8c\u5168\u900f\u660e\uff0c255\u70ba\u5be6\u5fc3\u3002"))))),(0,r.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u5f37\u5236\u56de\u61c9\u8996\u7a97\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",f({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u5f37\u5236\u56de\u61c9\u8996\u7a97\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u5f37\u5236\u56de\u61c9\u8996\u7a97\u5c6c\u65bc",(0,r.kt)("a",f({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\u985e\u578b\uff0c\u7531",(0,r.kt)("a",f({parentName:"p"},{href:"../shapes/box"}),"\u908a\u6846"),"\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\u548c",(0,r.kt)("a",f({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u7d44\u6210\u3002 \u5f37\u5236\u56de\u61c9\u8996\u7a97\u9810\u8a2d\u60c5\u6cc1\u4e0b\u4e0d\u6703\u51fa\u73fe\u5728\u7e6a\u5716\u93c8\u4e2d\u3002 \u56e0\u6b64\uff0c\u6027\u80fd\u4e3b\u8981\u53d6\u6c7a\u65bc\u5b50\u90e8\u4ef6\u7684\u7e6a\u5716\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u95dc\u65bc\u7e6a\u5716\u6027\u80fd\u7684\u5e38\u898f\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u898fUI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u5275\u5efa\u5f37\u5236\u56de\u61c9\u8996\u7a97\u7684\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase() :\n    buttonCallback(this, &mainViewBase::buttonCallbackHandler)\n{\n    modalWindow.setBackground(touchgfx::BitmapId(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_320X240PX_ID), 80, 16);\n    modalWindow.setShadeColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\n    modalWindow.setShadeAlpha(150);\n    modalWindow.hide();\n\n    add(modalWindow);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528ModalWindow\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u4fee\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8a18\u5f97\u547c\u53eb ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"modalWindow.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u5f37\u5236\u56de\u61c9\u8996\u7a97\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u7684\u5176\u4e2d\u4e00\u500b\u4ee5\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/modal-window-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5f37\u5236\u56de\u61c9\u8996\u7a97UI\u7bc4\u672c"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_modal_window",mdxType:"Link"},"ModalWindow\u985e\u7684API\u53c3\u8003"))))}O.isMDXComponent=!0}}]);