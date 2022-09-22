"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7368],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},89477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return C},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return T}});var r=n(3905),a=n(44035),l=n(37793),o=n(22425),i=n(29415),p=n(39130),u=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&k(e,n,t[n]);return e};const f={id:"touchgfx-architecture",title:"\u62bd\u8c61\u5c64\u67b6\u69cb"},y=void 0,N={unversionedId:"development/touchgfx-hal-development/touchgfx-architecture",id:"development/touchgfx-hal-development/touchgfx-architecture",title:"\u62bd\u8c61\u5c64\u67b6\u69cb",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-architecture.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-architecture",permalink:"/zh-TW/docs/development/touchgfx-hal-development/touchgfx-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-architecture",title:"\u62bd\u8c61\u5c64\u67b6\u69cb"},sidebar:"docs",previous:{title:"TouchGFX AL \u958b\u767c\u7c21\u4ecb",permalink:"/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"},next:{title:"Generator\u4f7f\u7528\u8005\u6307\u5357",permalink:"/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator"}},v={},T=[{value:"\u62bd\u8c61\u5c64\u7269\u4ef6\u985e\u5225",id:"abstraction-layer-classes",level:3},{value:"\u5c07TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u8207\u986f\u793a\u5668\u7684\u50b3\u8f38\u4f5c\u540c\u6b65",id:"synchronize-touchgfx-engine-main-loop-with-display-transfer",level:2},{value:"\u6e32\u67d3\u7b97\u5716\u5b8c\u6210",id:"rendering-done",level:3},{value:"\u986f\u793a\u5c31\u7dd2",id:"display-ready",level:3},{value:"\u56de\u5831\u89f8\u6478\u9280\u5e55\u8207\u5be6\u9ad4\u6309\u9215\u4e8b\u4ef6",id:"report-touch-and-physical-button-events",level:2},{value:"\u9280\u5e55\u89f8\u63a7\u5ea7\u6a19",id:"touch-coordinates",level:3},{value:"\u5176\u4ed6\u7684\u5916\u90e8\u4e8b\u4ef6",id:"other-external-events",level:3},{value:"\u540c\u6b65\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6",id:"synchronize-framebuffer-access",level:2},{value:"\u56de\u5831\u4e0b\u4e00\u500b\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340",id:"report-the-next-available-framebuffer-area",level:2},{value:"\u57f7\u884c\u6e32\u67d3\u7b97\u5716",id:"perform-render-operations",level:2},{value:"\u5f71\u50cf\u7de9\u885d\u5340\u5230\u5f71\u793a\u5668\u7684\u50b3\u8f38\u8655\u7406",id:"handle-framebuffer-transfer-to-display",level:2},{value:"\u5340\u57df\u6e32\u67d3\u5b8c\u7562",id:"rendering-of-area-complete",level:3}],b={toc:T};function C(e){var t,n=e,{components:u}=n,k=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},b),k),c(t,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5982\u524d\u4e00\u7bc0\u6240\u8ff0\uff0cTouchGFX AL\u5177\u6709\u4e00\u5957\u7279\u5b9a\u7684\u8077\u8cac\u3002 \u9019\u5957\u8077\u8cac\u4e00\u822c\u662f\u900f\u904eRTOS \uff08OSAL\uff09\u4f86\u5be6\u73fe\uff0c\u53ef\u4ee5\u5728AL \uff08HAL\uff09\u7684\u786c\u9ad4\u90e8\u5206\u5be6\u73fe\uff0c\u4e5f\u53ef\u5728\u8207TouchGFX\u5f15\u64ce\u540c\u6b65\u7684AL\u90e8\u5206\u5be6\u73fe\u3002 \u4e0b\u8868\u7e3d\u7d50\u4e86\u9019\u4e9b\u5728\u524d\u4e00\u7bc0\u4e2d\u6982\u8ff0\u7684\u8077\u8cac\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u8077\u8cac\uff08Responsibility\uff09"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u4f5c\u696d\u7cfb\u7d71\u6216\u786c\u9ad4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#synchronize-touchgfx-engine-main-loop-with-display-transfer"}),"\u5c07TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u8207\u986f\u793a\u5668\u7684\u50b3\u8f38\u4f5c\u540c\u6b65")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f5c\u696d\u7cfb\u7d71\u8207\u786c\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#report-touch-and-physical-button-events"}),"\u56de\u5831\u89f8\u6478\u9280\u5e55\u8207\u5be6\u9ad4\u6309\u9215\u4e8b\u4ef6")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#synchronize-framebuffer-access"}),"\u540c\u6b65\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f5c\u696d\u7cfb\u7d71")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#report-the-next-available-framebuffer-area"}),"\u56de\u5831\u4e0b\u4e00\u500b\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#perform-render-operations"}),"\u57f7\u884c\u6e32\u67d3\u7b97\u5716\u64cd\u4f5c")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#handle-framebuffer-transfer-to-display"}),"\u5f71\u50cf\u7de9\u885d\u5340\u5230\u5f71\u793a\u5668\u7684\u50b3\u8f38\u8655\u7406 ")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u9ad4")))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6bcf\u500b\u5c0f\u7bc0\u5c0d\u70ba\u5be6\u73fe\u4e0a\u8ff0\u8077\u8cac\u61c9\u6240\u63a1\u53d6\u7684\u63aa\u65bd\u4f5c\u91cd\u9ede\u4ecb\u7d39\u3002 \u5c0d\u65bc\u5ba2\u88fd\u5316\u7684\u786c\u9ad4\u5e73\u53f0\uff0cSTM32CubeMX\u4e2d\u7684TouchGFX Generator\u53ef\u4ee5\u7522\u751f\u5927\u591a\u6578\u7684AL\u7a0b\u5f0f\u78bc\u548c\u8207\u5176\u5c0d\u61c9\u7684TouchGFX\u5c08\u6848\u3002 \u5176\u9918\u90e8\u5206\u5c31\u5fc5\u9808\u7531AL\u7684\u958b\u767c\u4eba\u54e1\u4f9d\u64da\u7a0b\u5f0f\u78bc\u7684\u8a3b\u91cb\u6216\u8005\u662f\u4f9d\u64daTouchGFX Generator\u7684\u901a\u77e5\u6307\u793a\u4f86\u81ea\u884c\u624b\u52d5\u5be6\u4f5c\u3002 \u5728\u4e0b\u4e00\u7bc0\u4e2d",(0,r.kt)("a",g({parentName:"p"},{href:"touchgfx-generator"}),"\u95b1\u8b80\u66f4\u591a"),"\u6709\u95dcTouchGFX Generator\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("h3",g({},{id:"abstraction-layer-classes"}),"\u62bd\u8c61\u5c64\u7269\u4ef6\u985e\u5225"),(0,r.kt)("p",null,"TouchGFX\u5f15\u64ce\u900f\u904e",(0,r.kt)("inlineCode",{parentName:"p"},"HAL"),"\u7684\u5177\u9ad4\u7269\u4ef6\u5b50\u985e\u5225\u4f86\u5b58\u53d6HAL\u3002 \u9019\u4e9b\u7269\u4ef6\u5b50\u985e\u5225\u7531TouchGFX Generator\u7522\u751f\u3002  \u4f5c\u70ba\u7522\u751f\u62bd\u8c61\u5c64\u7a0b\u5f0f\u78bc\u7684\u4e3b\u8981\u5de5\u5177\uff0cTouchGFX Generator\u53ef\u540c\u6642\u7522\u751f\u53cd\u6620STM32CubeMX\u8a2d\u5b9a\u7684HAL\u7a0b\u5f0f\u78bc\u548cCMSIS V1\u548cV2\u7684OSAL\u7a0b\u5f0f\u78bc\u3002 \u8acb\u95b1\u8b80",(0,r.kt)("a",g({parentName:"p"},{href:"touchgfx-generator"}),"TouchGFX Generator"),"\u7ae0\u7bc0\uff0c\u4ee5\u53d6\u5f97\u66f4\u591a\u8a73\u7d30\u8cc7\u8a0a\u3002 \u901a\u5e38\uff0cHAL\u7684\u67b6\u69cb\u5982\u4e0b\u5716\u6240\u793a\u3002",(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/code-architecture.png",noShadow:!0,width:"200",mdxType:"Figure"},"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u4e4b\u968e\u5c64\u7d50\u69cb")),(0,r.kt)("h2",g({},{id:"synchronize-touchgfx-engine-main-loop-with-display-transfer"}),"\u5c07TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u8207\u986f\u793a\u5668\u7684\u50b3\u8f38\u4f5c\u540c\u6b65"),(0,r.kt)("p",null,"\u9019\u4e00\u6b65\u9a5f\u80cc\u5f8c\u7684\u4e3b\u8981\u60f3\u6cd5\u662f\u5728\u6e32\u67d3\u7b97\u5716\u5b8c\u6210\u4e4b\u5f8c\u963b\u585e\u64f1\u7f6eTouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u4ee5\u78ba\u4fdd\u4e0d\u518d\u7522\u751f\u5176\u4ed6\u5716\u6846\uff08frame\uff09\u3002 \u4e00\u65e6\u986f\u793a\u6e96\u5099\u5c31\u7dd2\uff0cOSAL\u5411\u88ab\u963b\u585e\u64f1\u7f6e\u7684\u5f15\u64ce\u4e3b\u8ff4\u5708\u767c\u51fa\u4fe1\u865f\u4ee5\u7e7c\u7e8c\u7522\u751f\u986f\u793a\u5716\u6846\uff08frame\uff09\u3002"),(0,r.kt)("p",null,"In order to fulfill this responsibility the typical way of a TouchGFX AL is to utilize the engine hook ",(0,r.kt)("em",{parentName:"p"},"Rendering done")," and the interrupt ",(0,r.kt)("em",{parentName:"p"},"Display Ready"),", as outlined in the previous section. OSAL\u5b9a\u7fa9\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u51fd\u5f0f\uff0c\u958b\u767c\u4eba\u54e1\u53ef\u900f\u904e\u5b83\u767c\u9001\u65d7\u865f\uff08semaphore\uff09\u7d66\u5148\u524d\u5df2\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync")," \u800c\u7b49\u5f85\u6b64\u65d7\u865f\u7684\u5f15\u64ce\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u53ef\u4ee5\u7522\u751f\u57fa\u65bcCMSIS V1\u548cV2\u7684\u5b8c\u6574OSAL\u3002"),(0,r.kt)("h3",g({},{id:"rendering-done"}),"\u6e32\u67d3\u7b97\u5716\u5b8c\u6210"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u7b97\u5716\u5b8c\u6210\u4e4b\u5f8c\uff0c TouchGFX Engine\u6703\u547c\u53eb",(0,r.kt)("em",{parentName:"p"},"\u6e32\u67d3\u7b97\u5716\u5b8c\u6210"),"\u7684\u9264\u5b50",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5be6\u4f5c\u6b64AL\u7269\u4ef6\u65b9\u6cd5\u6642\uff0cAL\u5fc5\u9808\u963b\u585e\u64f1\u7f6e\uff08block\uff09\u5716\u5f62\u5f15\u64ce\u76f4\u81f3\u8a72\u6e32\u67d3\u4e0b\u4e00\u500b\u5716\u6846\u7684\u6642\u9593\u3002 The standard method to implement this block is to perform a blocking read from a message queue. \u5982\u679c\u6b64\u65b9\u6cd5\u4e0d\u53ef\u884c\uff0c\u5247HAL\u958b\u767c\u4eba\u54e1\u53ef\u81ea\u7531\u4f7f\u7528\u4efb\u4f55\u65b9\u6cd5\u4f86\u5be6\u4f5c\u8a72\u963b\u585e\u64f1\u7f6e\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u5982\u679c\u6c92\u6709RTOS\uff0cTouchGFX Generator\u4e5f\u53ef\u4ee5\u7522\u751f\u4e00\u500b\u4f7f\u7528\u81ea\u65cb\u9396\uff08spinlock\uff09\u4f5c\u7b49\u5f85\u7684\u7a7a\u767dOSAL\u800c\u4e0d\u4f7f\u7528RTOS\u7269\u4ef6\uff08primitive\uff09\u3002"),(0,r.kt)("p",null,"\u7576",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u767c\u51fa\u4fe1\u865f\u6642\uff08\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"\u6240\u7528\u7684\u65d7\u865f/\u4f47\u5217\u767c\u51fa\u4fe1\u865f\u6642\uff09\uff0cTouchGFX\u5373\u958b\u59cb\u6e32\u67d3\u4e0b\u4e00\u500b\u61c9\u7528\u5716\u6846\uff08application frame\uff09\u3002 The following code based on CMSIS V2 causes the TouchGFX engine to block until an element is added to the queue by another part of the system, typically an interrupt synchronized with the display."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"RTOS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere\n\nvoid OSWrappers::waitForVSync()\n{\n    uint32_t dummyGet;\n    // First make sure the queue is empty, by trying to remove an element with 0 timeout.\n    osMessageQueueGet(vsync_queue, &dummyGet, 0, 0);\n\n    // Then, wait for next VSYNC to occur.\n    osMessageQueueGet(vsync_queue, &dummyGet, 0, osWaitForever);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528RTOS\uff0cTouchGFX Generator\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"waitForVSync"),"\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4f7f\u7528\u63ee\u767c\u6027\u6613\u5931\u8b8a\u6578\uff08volatile variable\uff09\u65b9\u5f0f\u7684\u5be6\u4f5c\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"NO_OS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::waitForVSync()\n{\n    while(!vsync_sem)\n    {\n        // Perform other work while waiting\n        ...\n    }\n}\n")),(0,r.kt)(l.Z,{mdxType:"Tip"},(0,r.kt)("li",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"\u5728")),"TouchGFX \u5f15\u64ce\u7b49\u5f85\u7522\u751f\u4e0b\u4e00\u500b\u5716\u6846\u6642\uff0c\u5176\u4ed6\u4efb\u52d9\u53ef\u4ee5\u57f7\u884c\u91cd\u8981\u7684\u5de5\u4f5c\u3002")),(0,r.kt)("h3",g({},{id:"display-ready"}),"\u986f\u793a\u5c31\u7dd2"),(0,r.kt)("p",null,"\u7528\u65bc\u89e3\u9664\u4e3b\u8ff4\u5708\u963b\u585e\u64f1\u7f6e\u7684",(0,r.kt)("em",{parentName:"p"},"\u986f\u793a\u5c31\u7dd2"),"\u4fe1\u865f\u61c9\u8a72\u4f86\u81ea\u986f\u793a\u63a7\u5236\u5668\u7684\u4e2d\u65b7\u3001\u986f\u793a\u5668\u672c\u8eab\u7684\u4e2d\u65b7\u6216\u662f\u786c\u9ad4\u5b9a\u6642\u5668\u7684\u4e2d\u65b7\u3002 The source of the signal is dependent on the type of display."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u7269\u4ef6\u985e\u5225\u70ba\u6b64\u4fe1\u865f\u5b9a\u7fa9\u4e86\u4e00\u500b\u51fd\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVsync"),"\u3002 \u8a72\u51fd\u5f0f\u7684\u5be6\u4f5c\u5fc5\u9808\u900f\u904e\u6eff\u8db3",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"\u4e2d\u6240\u4f7f\u7528\u7684\u7b49\u5f85\u689d\u4ef6\u4f86\u89e3\u9664\u4e3b\u8ff4\u5708\u7684\u963b\u585e\u64f1\u7f6e\u3002"),(0,r.kt)("p",null,"\u63a5\u7e7c\u4e0a\u9762\u7684CMSIS RTOS\u7bc4\u4f8b\uff0c\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u5c07\u8a0a\u606f\u653e\u5165\u8a0a\u606f\u4f47\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"vsync_queue"),"\u4e2d\u4ee5\u89e3\u9664TouchGFX\u5f15\u64ce\u7684\u963b\u585e\u64f1\u7f6e\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"RTOS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void OSWrappers::signalVSync()\n{\n    if (vsync_queue)\n    {\n        osMessagePut(vsync_queue, dummy, 0);\n    }\n}\n")),(0,r.kt)("p",null,"\u9019\u500b",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u7269\u4ef6\u65b9\u6cd5\u5fc5\u9808\u5728\u786c\u9ad4\u5c64\u9762\u4e0a\u900f\u904eLTDC\u4e2d\u65b7\uff0c\u986f\u793a\u5668\u7684\u5916\u90e8\u4e2d\u65b7\u6216\u786c\u9ad4\u8a08\u6642\u5668\u4e2d\u65b7\u4f86\u547c\u53eb\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528RTOS\uff0c\u5247\u4f7f\u7528\u8b8a\u6578\uff0c\u4e26\u5206\u914d\u4e00\u500b\u975e\u96f6\u503c\u4ee5\u6253\u7834while\u5faa\u74b0\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"NO_OS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n")),(0,r.kt)("h2",g({},{id:"report-touch-and-physical-button-events"}),"\u56de\u5831\u89f8\u6478\u9280\u5e55\u8207\u5be6\u9ad4\u6309\u9215\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u8a08\u7b97\uff08render\uff09\u65b0\u7684\u756b\u9762\u5716\u6846\uff08frame\uff09\u4e4b\u524d\uff0cTouchGFX\u5f15\u64ce\u5f9e",(0,r.kt)("inlineCode",{parentName:"p"},"TouchController"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\u4ecb\u9762\u6536\u96c6\u5916\u90e8\u8f38\u5165\u3002"),(0,r.kt)("h3",g({},{id:"touch-coordinates"}),"\u9280\u5e55\u89f8\u63a7\u5ea7\u6a19"),(0,r.kt)("p",null,"\u5f15\u64ce\u5c07\u89f8\u63a7\u63a7\u5236\u5668\u7684\u5ea7\u6a19\u8f49\u63db\u70ba\u300c\u9ede\u6309\uff08click\uff09\u300d\u3001\u300c\u62d6\u66f3\uff08drag\uff09\u300d\u548c\u300c\u624b\u52e2\uff08gesture\uff09\u300d\u4e8b\u4ef6\uff0c\u4e26\u5c07\u5176\u50b3\u905e\u81f3\u61c9\u7528\u7a0b\u5f0f\u3002 \u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7531TouchGFX Generator\u7522\u751f\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{1-1,6-6}","{1-1,6-6}":!0}),"static STM32TouchController tc;\nstatic STM32L4DMA dma;\nstatic LCD24bpp display;\nstatic ApplicationFontProvider fontProvider;\nstatic Texts texts;\nstatic TouchGFXHAL hal(dma, display, tc, 390, 390);\n")),(0,r.kt)("p",null,"\u5728TouchGFX Engine\u6e32\u67d3\u7b97\u5716\uff08render\uff09\u7684\u904e\u7a0b\u4e2d\uff0c\u5f15\u64ce\u547c\u53eb",(0,r.kt)("em",{parentName:"p"},"tc"),"\u7269\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"sampleTouch()"),"\u51fd\u5f0f\u4f86\u6536\u96c6\u8f38\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n")),(0,r.kt)("p",null,"AL\u958b\u767c\u4eba\u54e1\u63d0\u4f9b\u7684\u5be6\u4f5c\u61c9\u8a72\u8b80\u53d6\u9280\u5e55\u89f8\u63a7\u5ea7\u6a19\u7684x\u548cy\u503c\uff0c\u4e26\u56de\u50b3\u662f\u5426\u5075\u6e2c\u5230\u9280\u5e55\u89f8\u63a7\uff08\u771f\u6216\u507d\uff09\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u5c07\u7522\u751f\u4e00\u500b\u7269\u4ef6\u985e\u5225\uff0c\u6b64\u7269\u4ef6\u985e\u5225\u5c07TouchController\u4ecb\u9762\u5b9a\u7fa9\u70ba\u7a7a\u51fd\u5f0f\u3002 HAL\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u5728\u6b64\u7a7a\u51fd\u5f0f\u4e2d\u586b\u5165\u5177\u9ad4\u7684\u5be6\u4f5c\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("p",null,"\u6709\u591a\u7a2e\u5be6\u4f5c\u6b64\u51fd\u5f0f\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u5728sampleTouch() \u4e2d\u8f2a\u8a62\uff08polling\uff09")),"\uff1a\u900f\u904e\u767c\u9001\u8acb\u6c42\u4e26\u7b49\u5f85\u8f2a\u8a62\u7d50\u679c\uff0c\u53ef\u5f9e\u786c\u9ad4\u89f8\u63a7\u63a7\u5236\u5668\uff08\u901a\u5e38\u70baI2C\uff09\u8b80\u53d6\u87a2\u5e55\u89f8\u6478\u72c0\u614b\u3002 This impacts the overall render time of the application as the I2C round-trip is often up to 1 ms during which the graphics engine is blocked."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u4f7f\u7528\u4e2d\u65b7")),"\uff1a\u53e6\u4e00\u7a2e\u53ef\u80fd\u662f\u4f7f\u7528\u4e2d\u65b7\u3002 I2C\u8b80\u53d6\u7684\u6307\u4ee4\u7531\u5b9a\u6642\u5668\u5b9a\u671f\u555f\u52d5\uff0c\u6216\u8005\u4ee5\u56de\u61c9\u89f8\u63a7\u786c\u9ad4\u63a7\u5236\u5668\u7684\u5916\u90e8\u4e2d\u65b7\u4f86\u555f\u52d5\u3002 \u7576I2C\u8cc7\u6599\u5c31\u7dd2\u6642\uff08\u53ef\u8996\u70ba\u53e6\u4e00\u500b\u4e2d\u65b7\uff09\uff0c\u6b64\u8cc7\u6599\u53ef\u900f\u904e\u8a0a\u606f\u4f47\u5217\uff08message queue\uff09\u6216\u5168\u57df\u8b8a\u6578\u5c07\u8cc7\u6599\u63d0\u4f9b\u7d66",(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController"),"\u3002 \u4ee5\u4e0b\u5c55\u793a\u4e86\u7531TouchGFX Generator\u6240\u7522\u751f\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),"\u7a0b\u5f0f\u78bc",(0,r.kt)("inlineCode",{parentName:"li"},"sampleTouch"),"\u5728RTOS\u7cfb\u7d71\u4e2d\u7684\u53ef\u80fd\u6a23\u8c8c\uff1a")),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"STM32TouchController.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n{\n    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)\n    {\n        x = msg.x;\n        y = msg.y;\n        return true;\n    }\n    return false;\n}\n")),(0,r.kt)("p",null,"\u6b64\u6a94\u6848\u7684\u4f4d\u7f6e\u5c07\u5728\u4e0b\u4e00\u7ae0\u7684TouchGFX Generator\u4e2d\u8aaa\u660e"),(0,r.kt)("h3",g({},{id:"other-external-events"}),"\u5176\u4ed6\u7684\u5916\u90e8\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u6309\u9215\u63a7\u5236\u5668\u4ecb\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx::ButtonController"),"\u53ef\u7528\u65bc\u5c07\u786c\u9ad4\u8a0a\u865f\uff08\u6309\u9215\u6216\u5176\u4ed6\uff09\u6620\u5c04\u5230\u61c9\u7528\u7a0b\u5f0f\u4e8b\u4ef6\u3002 \u53ef\u5728TouchGFX Designer\u4e2d\u8a2d\u5b9a\u5c0d\u9019\u4e9b\u4e8b\u4ef6\u7684\u53cd\u61c9\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u8a72\u4ecb\u9762\u7684\u4f7f\u7528\u8207\u4e0a\u8ff0\u89f8\u63a7\u63a7\u5236\u5668\u985e\u4f3c\uff0c\u53ea\u662f\u4e26\u4e0d\u4e00\u5b9a\u8981\u5177\u6709ButtonController\u3002 \u8981\u4f7f\u7528\u6b64\u4ecb\u9762\uff0c\u8acb\u5efa\u7acb\u4e00\u500b\u5177\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\u4ecb\u9762\u5be6\u4f5c\u7684\u5be6\u9ad4\u7269\u4ef6\uff0c\u4e26\u5c07\u6307\u5411\u6b64\u5be6\u9ad4\u7269\u4ef6\u7684\u53c3\u7167\uff08reference\uff09\u50b3\u905e\u81f3HAL"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"MyButtonController.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-6}","{3-6}":!0}),"class MyButtonController : public touchgfx::ButtonController\n{\n  bool sample(uint8_t& key)\n  {\n    ... //Sample IO, set key, return true/false\n  }\n};\n")),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static MyButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("p",null,"\u5728\u6bcf\u500b\u5716\u6846\u4e4b\u524d\u90fd\u6703\u547c\u53eb\u4e0a\u8ff0ButtonController\u7269\u4ef6\u985e\u5225\u7576\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"\u6a23\u672c"),"\u65b9\u6cd5\u3002 \u7576\u56de\u50b3\u771f\u503c\u6642\uff0c\u9375\u503c\uff08key value\uff09\u5c07\u88ab\u50b3\u905e\u81f3\u76ee\u524d\u87a2\u5e55\uff08screen\uff09\u7684",(0,r.kt)("em",{parentName:"p"},"handleKeyEvent"),"\u4e8b\u4ef6\u8655\u7406\u7a0b\u5f0f\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u95dc\u65bc\u5982\u4f55\u4ee5ButtonController\u53d6\u6a23\u800c\u5f97\u5230\u7684\u6578\u503c\u4f5c\u70ba\u8a2d\u8a08\u5de5\u5177\u4e2d\u4e92\u52d5\u884c\u70ba\u7684\u89f8\u767c\u6e90\uff0c\u8acb\u53c3\u898b",(0,r.kt)(p.Z,{to:"../ui-development/designer-user-guide/interactions-view",mdxType:"Link"},"\u4e92\u52d5"),"\u6587\u7ae0\u3002"),(0,r.kt)("h2",g({},{id:"synchronize-framebuffer-access"}),"\u540c\u6b65\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6"),(0,r.kt)("p",null,"\u591a\u500b\u57f7\u884c\u55ae\u5143\uff08actors\uff09\u53ef\u80fd\u90fd\u6703\u5c0d\u5f71\u50cf\u7de9\u885d\u5340\u9032\u884c\u5b58\u53d6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"CPU"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u6e32\u67d3\u7b97\u5716\u671f\u9593\u8b80\u53d6\u548c\u5beb\u5165\u50cf\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"DMA2D",(0,r.kt)("strong",{parentName:"td"},"*")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u786c\u9ad4\u8f14\u52a9\u7684\u6e32\u67d3\u7b97\u5716\u671f\u9593\u8b80\u53d6\u548c\u5beb\u5165\u50cf\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"LTDC"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u50b3\u8f38\u5230\u4e26\u5217RGB\u986f\u793a\u5668\u671f\u9593\u8b80\u53d6\u50cf\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"DMA"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u50b3\u8f38\u5230SPI\u986f\u793a\u5668\u671f\u9593\u8b80\u53d6\u50cf\u7d20")))),(0,r.kt)("p",null,"TouchGFX\u5f15\u64ce\u900f\u904e",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u4ecb\u9762\u4f86\u540c\u6b65\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6\uff0c\u800c\u5c0d\u65bc\u540c\u6642\u4e5f\u5e0c\u671b\u5b58\u53d6\u5f71\u50cf\u7de9\u885d\u5340\u7684\u9031\u908a\uff08\u5982DMA2D\uff09\u4e5f\u5fc5\u9808\u57f7\u884c\u76f8\u540c\u64cd\u4f5c\uff08\u900f\u904eOSWrapper\u5c0d\u5f71\u50cf\u7de9\u885d\u5340\u9032\u884c\u5b58\u53d6\uff09\u3002 \u5e38\u898b\u7684\u8a2d\u8a08\u662f\u4f7f\u7528\u65d7\u865f\uff08semaphore\uff09\u4f86\u78ba\u4fdd\uff08guard\uff09\u5c0d\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u5b83\u7684\u540c\u6b65\u6a5f\u5236\u3002"),(0,r.kt)("p",null,"\u4e0b\u8868\u986f\u793a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u7269\u4ef6\u985e\u5225\uff08OSWrappers.cpp\uff09\u4e2d\u7684\u51fd\u5f0f\u5217\u8868\uff0c\u5305\u542b\u4e86\u7531TouchGFX Generator\u7522\u751f\u7684\u51fd\u5f0f\u6216\u7531\u4f7f\u7528\u8005\u624b\u52d5\u751f\u6210\u7684\u51fd\u5f0f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u7269\u4ef6\u65b9\u6cd5"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"takeFrameBufferSemaphore")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u7531\u5716\u5f62\u5f15\u64ce\u547c\u53eb\u4ee5\u7372\u53d6\u5c0d\u5f71\u50cf\u7de9\u885d\u5340\u7684\u7368\u4f54\u5b58\u53d6\u3002 \u9019\u5c07\u963b\u585e\u64f1\u7f6e\u5f15\u64ce\u76f4\u5230DMA2D\u5b8c\u6210\uff08\u82e5\u6b63\u5728\u57f7\u884c\u7684\u8a71\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"tryTakeFrameBufferSemaphore")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u78ba\u4fdd\u5df2\u53d6\u5f97\u65d7\u865f\u9396\u5b9a\uff08lock\uff09\u3002 \u6b64\u65b9\u6cd5\u4e0d\u6703\u963b\u585e\u64f1\u7f6e\uff0c\u4f46\u4e0b\u4e00\u6b21\u547c\u53ebtakeFrameBufferSemaphore\u6642\u6703\u963b\u585e\u64f1\u7f6e\u547c\u53eb\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"giveFrameBufferSemaphore")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u91cb\u653e\u5f71\u50cf\u7de9\u885d\u5340\u7684\u65d7\u865f\u9396\u5b9a\uff08lock\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"giveFrameBufferSemaphoreFromISR")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u4e2d\u65b7\u7a0b\u5f0f\u7576\u4e2d\u91cb\u653e\u5f71\u50cf\u7de9\u885d\u5340\u7684\u65d7\u865f\u9396\u5b9a\uff08lock\uff09")))),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u53ef\u7522\u751f\u4f7f\u7528OSWrappers\u4ecb\u9762\u4f86\u4f5c\u540c\u6b65\u7684ChromART\u9a45\u52d5\u7a0b\u5f0f\uff0c\u4ee5\u53ca\u7522\u751f\u8207\u6240\u9078\u7684RTOS\u5c0d\u61c9\u4e4b\u540c\u6b65\u529f\u80fd\u7684\u51fd\u5f0f\u5be6\u4f5c\u3002"),(0,r.kt)("h2",g({},{id:"report-the-next-available-framebuffer-area"}),"\u56de\u5831\u4e0b\u4e00\u500b\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340"),(0,r.kt)("p",null,"\u7121\u8ad6\u63a1\u7528\u54ea\u7a2e\u6e32\u67d3\u7b97\u5716\u7684\u7b56\u7565\uff0cTouchGFX\u5f15\u64ce\u5728\u6bcf\u500b\u6642\u6a19\uff08tick\uff09\u90fd\u5fc5\u9808\u77e5\u9053\u61c9\u5c07\u50cf\u7d20\u6e32\u67d3\u5230\u54ea\u500b\u8a18\u61b6\u9ad4\u5340\u57df\u3002 \u4f7f\u7528\u55ae\u4e00\u5f71\u50cf\u7de9\u885d\u6216\u96d9\u5f71\u50cf\u7de9\u885d\u7b56\u7565\u6642\uff0cTouchGFX\u5f15\u64ce\u5c07\u6839\u64da\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5bec\u5ea6\u3001\u9ad8\u5ea6\u548c\u4f4d\u5143\u6df1\u5ea6\uff08bit depth\uff09\u5c07\u50cf\u7d20\u8cc7\u6599\u5beb\u5165\u8a18\u61b6\u9ad4\u5340\u57df\u3002 \u5716\u5f62\u5f15\u64ce\u8ca0\u8cac\u96d9\u5f71\u50cf\u7de9\u885d\u5340\u914d\u7f6e\u7576\u4e2d\u5169\u500b\u5f71\u50cf\u7de9\u885d\u5340\u4e4b\u9593\u7684\u4ea4\u63db\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6\u5c40\u9650\u5728\u90e8\u5206\u7684\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u53ef\u5728HAL\u7269\u4ef6\u5b50\u985e\u5225\u4e2d\u91cd\u65b0\u5be6\u4f5c",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::getTFTCurrentLine()"),"\u7269\u4ef6\u65b9\u6cd5\uff08method\uff09\u3002 \u56de\u50b3\u4e0a\u9762\u7528\u65bc\u5716\u5f62\u5f15\u64ce\u7e6a\u88fd\u800c\u4fdd\u5b58\u7684\u884c\u865f\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u5c40\u90e8\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565\u6642\uff0c\u958b\u767c\u4eba\u54e1\u9700\u5b9a\u7fa9TouchGFX\u5f15\u64ce\u5728\u6e32\u67d3\u7b97\u5716\u6642\u4f7f\u7528\u7684\u8a18\u61b6\u9ad4\u5340\u584a\uff08\u4e00\u500b\u6216\u591a\u500b\uff09\u3002 ",(0,r.kt)("a",g({parentName:"p"},{href:"../scenarios/lowering-memory-usage-with-partial-framebuffer"}),"\u7531\u6b64"),"\u95b1\u8b80\u66f4\u591a\u76f8\u95dc\u8cc7\u8a0a\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u70ba\u6240\u6709\u652f\u63f4\u7684\u5f71\u50cf\u7de9\u885d\u7b56\u7565\u63d0\u4f9b\u914d\u7f6e\u3002"),(0,r.kt)("h2",g({},{id:"perform-render-operations"}),"\u57f7\u884c\u6e32\u67d3\u7b97\u5716"),(0,r.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u4e0d\u662f\u53ea\u9700\u8981\u4f5c\u6e32\u67d3\u7b97\u5716\u6216\u662f\u53ea\u4f5c\u5716\u50cf\u986f\u793a\u3002 \u9084\u6709\u5176\u4ed6\u5de5\u4f5c\u4e5f\u9700\u8981\u4f7f\u7528CPU\u3002 TouchGFX\u7684\u76ee\u6a19\u4e4b\u4e00\u662f\u76e1\u53ef\u80fd\u964d\u4f4eCPU\u8cc7\u6e90\u7684\u4f7f\u7528\u4f86\u7e6a\u88fd\u4f7f\u7528\u8005\u4ecb\u9762\u3002 HAL\u7269\u4ef6\u985e\u5225\u5c0d\u8a31\u591aSTM32\u5fae\u63a7\u5236\u5668\uff08\u6216\u5176\u4ed6\u786c\u9ad4\u529f\u80fd\uff09\u4e0a\u7684DMA2D\u529f\u80fd\u9032\u884c\u62bd\u8c61\u5316\u4ee5\u5229\u5716\u5f62\u5f15\u64ce\u7684\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5c07\u5716\u8cc7\uff08\u5982\u9ede\u9663\u5716\uff09\u6e32\u67d3\u6f14\u7b97\u81f3\u5f71\u50cf\u7de9\u885d\u5340\u6642\uff0cTouchGFX\u5f15\u64ce\u6aa2\u67e5HAL\u662f\u5426\u6709\u80fd\u529b\u5c0d\u5c40\u90e8\u6216\u8005\u5168\u90e8\u7684\u9ede\u9663\u5716\u9032\u884c\u9ede\u9663\u758a\u5716\uff08blit\uff09\u81f3\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u5982\u679c\u6709\u6b64\u529f\u80fd\uff0c\u5247\u5c07\u7e6a\u5716\u64cd\u4f5c\u59d4\u8a17\u7d66HAL\u800c\u4e0d\u662f\u7531CPU\u76f4\u63a5\u8655\u7406\u3002"),(0,r.kt)("p",null,"\u5f15\u64ce\u547c\u53eb\u7269\u4ef6\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::getBlitCaps()"),"\u4ee5\u53d6\u5f97\u786c\u9ad4\u80fd\u529b\u7684\u63cf\u8ff0\u3002 \u53ef\u5728HAL\u7269\u4ef6\u5b50\u985e\u5225\u7576\u4e2d\u91cd\u65b0\u5be6\u4f5c\u6b64\u547c\u53eb\u4ee5\u6dfb\u52a0\u786c\u9ad4\u80fd\u529b\u7684\u63cf\u8ff0\u3002"),(0,r.kt)("p",null,"\u5f15\u64ce\u5728\u7e6a\u88fd\u4f7f\u7528\u8005\u4ecb\u9762\u6642\u547c\u53ebHAL\u7269\u4ef6\u985e\u5225\u4e0a\u7684\u64cd\u4f5c\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::blitCopy"),"\uff09\u5c07\u5176\u6392\u5165DMA\u64cd\u4f5c\u4f47\u5217\u3002 \u5982\u679cHAL\u56de\u5831\u4e0d\u5177\u5099\u6240\u9700\u7684\u80fd\u529b\uff0c\u5247\u5716\u5f62\u5f15\u64ce\u5c07\u9000\u800c\u4f7f\u7528\u8edf\u9ad4\u65b9\u5f0f\u4f86\u6e32\u67d3\u7b97\u5716\u3002",(0,r.kt)(l.Z,{mdxType:"Tip"}," \u8a31\u591aSTM32 MCU\u5177\u6709ChromART\uff0c\u56e0\u6b64\u5728\u5c0d\u50cf\u7d20\u9032\u884cAlpha\u50cf\u7d20\u6df7\u5408\uff08Alpha blending\uff09\u7684\u540c\u6642\u5c07\u8cc7\u6599\u7531\u5916\u90e8Flash\u8a18\u61b6\u9ad4\u642c\u79fb\u81f3\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u5c0d\u65bc\u8a31\u591aMCU\u4f86\u8aaa\uff0cTouchGFX Generator\u53ef\u7522\u751fChromART\u9a45\u52d5\u7a0b\u5f0f\u4ee5\u4f7f\u7528ChromART\u4f86\u589e\u52a0\u591a\u500b\u9ede\u9663\u758a\u5716\uff08blit\uff09\u64cd\u4f5c\u3002 ")),(0,r.kt)("h2",g({},{id:"handle-framebuffer-transfer-to-display"}),"\u5f71\u50cf\u7de9\u885d\u5340\u5230\u5f71\u793a\u5668\u7684\u50b3\u8f38\u8655\u7406"),(0,r.kt)("p",null,"\u70ba\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5167\u5bb9\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0cTouchGFX AL\u7d93\u5e38\u4f7f\u7528\u300c\u5340\u57df\u6e32\u67d3\u5b8c\u7562\uff08Rendering of area complete\uff09\u300d\u7684\u639b\u9264\u3002 \u4e00\u65e6\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u5340\u7684\u6e32\u67d3\u7b97\u5716\u5b8c\u6210\u5f8c\uff0c\u5f15\u64ce\u5c31\u6703\u5411AL\u767c\u9001\u4fe1\u865f\u3002 AL\u53ef\u9078\u64c7\u5982\u4f55\u5c07\u6b64\u5f71\u50cf\u7de9\u885d\u5340\u9019\u90e8\u5206\u7684\u5167\u5bb9\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002"),(0,r.kt)("h3",g({},{id:"rendering-of-area-complete"}),"\u5340\u57df\u6e32\u67d3\u5b8c\u7562"),(0,r.kt)("p",null,"\u5728\u7a0b\u5f0f\u78bc\u7576\u4e2d\u7684\u639b\u9264\uff08hook\uff09\u70ba\u865b\u64ec\u51fd\u5f0f",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5e36\u6709LTDC\u63a7\u5236\u5668\u7684STM32\u5fae\u63a7\u5236\u5668\u4e0a\u6211\u5011\u4e0d\u9700\u8981\u5728\u6bcf\u6b21\u6e32\u67d3\u7b97\u5716\u4e4b\u5f8c\u57f7\u884c\u4efb\u4f55\u7528\u65bc\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u7684\u64cd\u4f5c\u3002 \u5728\u5b8c\u6210LTDC\u521d\u59cb\u5316\u4e4b\u5f8c\uff0c\u8a72\u50b3\u8f38\u5c07\u4ee5\u7d66\u5b9a\u7684\u983b\u7387\u9023\u7e8c\u57f7\u884c\uff0c\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u5728\u6b64\u7269\u4ef6\u65b9\u6cd5\u7684\u5be6\u4f5c\u7559\u767d\u4e0d\u4f5c\u4efb\u4f55\u8655\u7406\u3002"),(0,r.kt)("p",null,"\u4f46\u5c0d\u65bc\u5176\u4ed6\u985e\u578b\u7684\u986f\u793a\u5668\uff08\u5982SPI\u62168080\uff09\u4f86\u8aaa\u5c31\u9700\u8981\u81ea\u884c\u624b\u52d5\u4f86\u5be6\u4f5c\u5f71\u50cf\u7de9\u885d\u5340\u7684\u50b3\u8f38\u3002"),(0,r.kt)("p",null,"\u9019\u51fd\u5f0f\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u767c\u8d77\u8a72\u5f71\u50cf\u7de9\u885d\u5340\u57df\u5411\u986f\u793a\u5668GRAM\u7684\u624b\u52d5\u50b3\u8f38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{9-9}","{9-9}":!0}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)\n{\n    HAL::flushFrameBuffer(rect); //call superclass\n\n    //start transfer if not running already!\n    if (!IsTransmittingData())\n    {\n        const uint8_t* pixels = ...; // Calculate pixel address\n        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n    else\n    {\n       ... // Queue rect for later or wait here\n    }\n}\n")),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u900f\u904e\u95b1\u8b80\u4f7f\u7528\u60c5\u5883\uff08Scenarios\uff09\u7ae0\u7bc0\u4ee5\u7372\u53d6\u5982\u4f55\u652f\u63f4\u5404\u7a2e\u986f\u793a\u4ecb\u9762\u7684\u5177\u9ad4\u7bc4\u4f8b\u3002"))}C.isMDXComponent=!0}}]);