"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[752],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},93892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return b},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return T}});var r=n(3905),a=n(44035),l=n(37793),o=n(22425),i=n(29415),p=n(39130),u=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&k(e,n,t[n]);return e};const f={id:"touchgfx-architecture",title:"\u62bd\u8c61\u5c42\u67b6\u6784"},y=void 0,N={unversionedId:"development/touchgfx-hal-development/touchgfx-architecture",id:"development/touchgfx-hal-development/touchgfx-architecture",title:"\u62bd\u8c61\u5c42\u67b6\u6784",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-architecture.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-architecture",permalink:"/zh-CN/docs/development/touchgfx-hal-development/touchgfx-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-architecture",title:"\u62bd\u8c61\u5c42\u67b6\u6784"},sidebar:"docs",previous:{title:"TouchGFX\u5f00\u53d1\u7b80\u4ecb",permalink:"/zh-CN/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"},next:{title:"Generator\u7528\u6237\u6307\u5357",permalink:"/zh-CN/docs/development/touchgfx-hal-development/touchgfx-generator"}},v={},T=[{value:"\u62bd\u8c61\u5c42\u7c7b",id:"abstraction-layer-classes",level:3},{value:"\u5c06TouchGFX Engine\u4e3b\u5faa\u73af\u4e0e\u663e\u793a\u5668\u4f20\u8f93\u540c\u6b65",id:"synchronize-touchgfx-engine-main-loop-with-display-transfer",level:2},{value:"\u6e32\u67d3\u5b8c\u6210",id:"rendering-done",level:3},{value:"\u663e\u793a\u5c31\u7eea",id:"display-ready",level:3},{value:"\u62a5\u544a\u89e6\u6478\u4e0e\u7269\u7406\u6309\u94ae\u4e8b\u4ef6",id:"report-touch-and-physical-button-events",level:2},{value:"\u89e6\u6478\u5750\u6807",id:"touch-coordinates",level:3},{value:"\u5176\u4ed6\u5916\u90e8\u4e8b\u4ef6",id:"other-external-events",level:3},{value:"\u540c\u6b65\u5e27\u7f13\u51b2\u8bbf\u95ee",id:"synchronize-framebuffer-access",level:2},{value:"\u62a5\u544a\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u5e27\u7f13\u51b2\u533a",id:"report-the-next-available-framebuffer-area",level:2},{value:"\u6267\u884c\u6e32\u67d3\u64cd\u4f5c",id:"perform-render-operations",level:2},{value:"\u5904\u7406\u5230\u663e\u793a\u5668\u7684\u5e27\u7f13\u51b2\u4f20\u8f93",id:"handle-framebuffer-transfer-to-display",level:2},{value:"\u533a\u57df\u6e32\u67d3\u5b8c\u6210",id:"rendering-of-area-complete",level:3}],C={toc:T};function b(e){var t,n=e,{components:u}=n,k=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},C),k),c(t,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5982\u524d\u4e00\u8282\u6240\u8ff0\uff0cTouchGFX AL\u5177\u6709\u4e00\u5957\u7279\u6b8a\u7684\u804c\u8d23\u3002 \u804c\u8d23\u8981\u4e48\u5728AL (HAL)\u7684\u786c\u4ef6\u90e8\u5206\u5b9e\u73b0\uff0c\u8981\u4e48\u5728\u4e0eTouchGFX Engine\u540c\u6b65\u7684AL\u90e8\u5206\u5b9e\u73b0\uff0c\u5178\u578b\u7684\u505a\u6cd5\u662f\u901a\u8fc7RTOS (OSAL)\u6765\u5b9e\u73b0\u3002 \u4e0b\u8868\u603b\u7ed3\u4e86\u8fd9\u4e9b\u5728\u524d\u4e00\u8282\u4e2d\u6982\u8ff0\u7684\u804c\u8d23\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u804c\u8d23"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u64cd\u4f5c\u7cfb\u7edf\u6216\u786c\u4ef6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#synchronize-touchgfx-engine-main-loop-with-display-transfer"}),"\u5c06TouchGFX Engine\u4e3b\u5faa\u73af\u4e0e\u663e\u793a\u5668\u4f20\u8f93\u540c\u6b65")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u64cd\u4f5c\u7cfb\u7edf\u4e0e\u786c\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#report-touch-and-physical-button-events"}),"\u62a5\u544a\u89e6\u6478\u4e0e\u7269\u7406\u6309\u94ae\u4e8b\u4ef6")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#synchronize-framebuffer-access"}),"\u540c\u6b65\u5e27\u7f13\u51b2\u8bbf\u95ee")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u64cd\u4f5c\u7cfb\u7edf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#report-the-next-available-framebuffer-area"}),"\u62a5\u544a\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u5e27\u7f13\u51b2\u533a")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#perform-render-operations"}),"\u6267\u884c\u6e32\u67d3\u64cd\u4f5c")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"#handle-framebuffer-transfer-to-display"}),"\u5904\u7406\u5230\u663e\u793a\u5668\u7684\u5e27\u7f13\u51b2\u4f20\u8f93 ")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786c\u4ef6")))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6bcf\u4e2a\u5c0f\u8282\u91cd\u70b9\u4ecb\u7ecd\u5c65\u884c\u4e0a\u8ff0\u804c\u8d23\u5e94\u91c7\u53d6\u7684\u63aa\u65bd\u3002 \u5bf9\u4e8e\u5b9a\u5236\u786c\u4ef6\u5e73\u53f0\uff0cSTM32CubeMX\u4e2d\u7684TouchGFX Generator\u53ef\u4ee5\u751f\u6210\u5927\u591a\u6570AL\u548c\u76f8\u5e94\u7684TouchGFX\u9879\u76ee\u3002 AL\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u624b\u52a8\u5b9e\u73b0\u7684\u5176\u4f59\u90e8\u5206\u901a\u8fc7\u4ee3\u7801\u6ce8\u91ca\u63d0\u793a\uff0c\u5e76\u901a\u8fc7TouchGFX Generator\u901a\u77e5\u3002 \u5728\u4e0b\u4e00\u8282\u4e2d",(0,r.kt)("a",g({parentName:"p"},{href:"touchgfx-generator"}),"\u9605\u8bfb"),"\u6709\u5173TouchGFX Generator\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)("h3",g({},{id:"abstraction-layer-classes"}),"\u62bd\u8c61\u5c42\u7c7b"),(0,r.kt)("p",null,"TouchGFX\u5f15\u64ce\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"HAL"),"\u7684\u5177\u4f53\u5b50\u7c7b\u6765\u8bbf\u95eeHAL\u3002 \u8fd9\u4e9b\u5b50\u7c7b\u7531TouchGFX Generator\u751f\u6210\u3002  \u4f5c\u4e3a\u521b\u5efa\u62bd\u8c61\u5c42\u7684__\u4e3b\u8981\u5de5\u5177\uff0cgenerator\u53ef\u751f\u6210\u53cd\u5e94STM32CubeMX\u7684\u914d\u7f6e\u7684HAL\u90e8\u5206\uff0c\u4ee5\u53ca\u9002\u7528\u4e8eCMSIS V1\u548cV2\u7684OSAL\u3002 \u8bf7\u9605\u8bfb",(0,r.kt)("a",g({parentName:"p"},{href:"touchgfx-generator"}),"TouchGFX Generator"),"\u7ae0\u8282\uff0c\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002 \u901a\u5e38\uff0cHAL\u7684\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/code-architecture.png",noShadow:!0,width:"200",mdxType:"Figure"},"\u751f\u6210\u7684\u4ee3\u7801\u7684\u5c42\u6b21\u7ed3\u6784")),(0,r.kt)("h2",g({},{id:"synchronize-touchgfx-engine-main-loop-with-display-transfer"}),"\u5c06TouchGFX Engine\u4e3b\u5faa\u73af\u4e0e\u663e\u793a\u5668\u4f20\u8f93\u540c\u6b65"),(0,r.kt)("p",null,"\u6b64\u6b65\u9aa4\u80cc\u540e\u7684\u4e3b\u8981\u601d\u60f3\u662f\uff0c\u5728\u6e32\u67d3\u5b8c\u6210\u540e\u963b\u585eTouchGFX Engine\u4e3b\u5faa\u73af\uff0c\u4ece\u800c\u786e\u4fdd\u4e0d\u518d\u4ea7\u751f\u5176\u4ed6\u5e27\u3002 \u4e00\u65e6\u663e\u793a\u51c6\u5907\u5c31\u7eea\uff0cOSAL\u5411\u88ab\u963b\u585e\u7684Engine\u4e3b\u5faa\u73af\u53d1\u51fa\u4fe1\u53f7\uff0c\u4ee5\u7ee7\u7eed\u4ea7\u751f\u663e\u793a\u5e27\u3002"),(0,r.kt)("p",null,"In order to fulfill this responsibility the typical way of a TouchGFX AL is to utilize the engine hook ",(0,r.kt)("em",{parentName:"p"},"Rendering done")," and the interrupt ",(0,r.kt)("em",{parentName:"p"},"Display Ready"),", as outlined in the previous section. OSAL\u5b9a\u4e49\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u51fd\u6570\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u901a\u8fc7\u5b83\u53d1\u4fe1\u53f7\u7ed9\u5f15\u64ce\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u53ef\u4ee5\u521b\u5efa\u57fa\u4e8eCMSIS V1\u548cV2\u7684\u5b8c\u6574OSAL\u3002"),(0,r.kt)("h3",g({},{id:"rendering-done"}),"\u6e32\u67d3\u5b8c\u6210"),(0,r.kt)("p",null,"\u6e32\u67d3\u5b8c\u6210\u540e\uff0cTouchGFX Engine\u8c03\u7528",(0,r.kt)("em",{parentName:"p"},"\u6e32\u67d3\u5b8c\u6210"),"\u94a9\u5b50\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5b9e\u73b0\u6b64AL\u65b9\u6cd5\u65f6\uff0cAL\u5fc5\u987b\u963b\u585e\u56fe\u5f62\u5f15\u64ce\uff0c\u76f4\u81f3\u6e32\u67d3\u4e0b\u4e00\u5e27\u3002 The standard method to implement this block is to perform a blocking read from a message queue. \u5982\u679c\u6b64\u65b9\u6cd5\u4e0d\u53ef\u884c\uff0c\u5219HAL\u5f00\u53d1\u4eba\u5458\u53ef\u81ea\u7531\u4f7f\u7528\u4efb\u4f55\u65b9\u6cd5\u6765\u5b9e\u73b0\u8be5\u963b\u585e\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u5982\u679c\u6ca1\u6709\u6b64\u7c7b\u8f6f\u4ef6\uff0cTouchGFX Generator\u4e5f\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u4f7f\u7528\u81ea\u65cb\u9501\u6765\u7b49\u5f85\uff0c\u800c\u975e\u4f7f\u7528RTOS\u57fa\u5143\u7684\u7a7aOSAL\u3002"),(0,r.kt)("p",null,"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u53d1\u51fa\u4fe1\u53f7\u65f6(\u6216\u7528\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"\u7684\u4fe1\u53f7\u91cf/\u961f\u5217\u53d1\u51fa\u4fe1\u53f7\u65f6) \uff0cTouchGFX\u5c06\u5f00\u59cb\u6e32\u67d3\u4e0b\u4e00\u4e2a\u5e94\u7528\u5e27\u3002 The following code based on CMSIS V2 causes the TouchGFX engine to block until an element is added to the queue by another part of the system, typically an interrupt synchronized with the display."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"RTOS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere\n\nvoid OSWrappers::waitForVSync()\n{\n    uint32_t dummyGet;\n    // First make sure the queue is empty, by trying to remove an element with 0 timeout.\n    osMessageQueueGet(vsync_queue, &dummyGet, 0, 0);\n\n    // Then, wait for next VSYNC to occur.\n    osMessageQueueGet(vsync_queue, &dummyGet, 0, osWaitForever);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u672a\u4f7f\u7528RTOS\uff0cTouchGFX Generator\u4f7f\u7528\u6613\u5931\u6027\u53d8\u91cf\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"waitForVSync"),"\u63d0\u4f9b\u4ee5\u4e0b\u5b9e\u73b0\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"NO_OS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::waitForVSync()\n{\n    while(!vsync_sem)\n    {\n        // Perform other work while waiting\n        ...\n    }\n}\n")),(0,r.kt)(l.Z,{mdxType:"Tip"},(0,r.kt)("li",null,(0,r.kt)("b",null,(0,r.kt)("i",null,"\u5728")),"TouchGFX Engine\u7b49\u5f85\u751f\u6210\u4e0b\u4e00\u5e27\u65f6\uff0c\u5176\u4ed6\u4efb\u52a1\u53ef\u4ee5\u6267\u884c\u91cd\u8981\u7684\u5de5\u4f5c\u3002")),(0,r.kt)("h3",g({},{id:"display-ready"}),"\u663e\u793a\u5c31\u7eea"),(0,r.kt)("p",null,"\u7528\u4e8e\u89e3\u9664\u4e3b\u5faa\u73af\u963b\u585e\u7684",(0,r.kt)("em",{parentName:"p"},"\u663e\u793a\u5c31\u7eea"),"\u4fe1\u53f7\u5e94\u6765\u81ea\u663e\u793a\u63a7\u5236\u5668\u3001\u663e\u793a\u5668\u672c\u8eab\u6216\u662f\u786c\u4ef6\u5b9a\u65f6\u5668\u7684\u4e2d\u65ad\u3002 The source of the signal is dependent on the type of display."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u7c7b\u4e3a\u8be5\u4fe1\u53f7\u5b9a\u4e49\u4e86\u4e00\u4e2a\u51fd\u6570\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVsync")," \u8be5\u51fd\u6570\u7684\u5b9e\u73b0\u5fc5\u987b\u901a\u8fc7\u6ee1\u8db3",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::waitForVSync"),"\u4e2d\u4f7f\u7528\u7684\u7b49\u5f85\u6761\u4ef6\u6765\u89e3\u9501\u4e3b\u5faa\u73af\u963b\u585e\u3002"),(0,r.kt)("p",null,"\u7ee7\u7eed\u4e0a\u9762\u7684CMSIS RTOS\u793a\u4f8b\uff0c\u4ee5\u4e0b\u4ee3\u7801\u5c06\u6d88\u606f\u653e\u5165\u961f\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"vsync_queue"),"\u4e2d\uff0c\u6b64\u6d88\u606f\u961f\u5217\u5c06\u89e3\u9664\u5bf9TouchGFX Engine\u7684\u963b\u585e\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"RTOS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void OSWrappers::signalVSync()\n{\n    if (vsync_queue)\n    {\n        osMessagePut(vsync_queue, dummy, 0);\n    }\n}\n")),(0,r.kt)("p",null,"\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync"),"\u65b9\u6cd5\u5fc5\u987b\u5728\u786c\u4ef6\u5c42\u9762\u4e0a\u901a\u8fc7LTDC\u3001\u663e\u793a\u5668\u7684\u5916\u90e8\u4fe1\u53f7\u6216\u786c\u4ef6\u5b9a\u65f6\u5668\u7b49\u7684\u4e2d\u65ad\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528RTOS\uff0c\u5219\u4f7f\u7528\u53d8\u91cf\uff0c\u5e76\u5206\u914d\u4e00\u4e2a\u975e\u96f6\u503c\u4ee5\u6253\u7834while\u5faa\u73af\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"NO_OS_OSWrappers.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n")),(0,r.kt)("h2",g({},{id:"report-touch-and-physical-button-events"}),"\u62a5\u544a\u89e6\u6478\u4e0e\u7269\u7406\u6309\u94ae\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u65b0\u5e27\u4e4b\u524d\uff0cTouchGFX Engine\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"TouchController"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\u63a5\u53e3\u6536\u96c6\u5916\u90e8\u8f93\u5165\u3002"),(0,r.kt)("h3",g({},{id:"touch-coordinates"}),"\u89e6\u6478\u5750\u6807"),(0,r.kt)("p",null,"\u901a\u8fc7\u5f15\u64ce\u5c06\u89e6\u6478\u63a7\u5236\u5668\u7684\u5750\u6807\u8f6c\u6362\u4e3a\u70b9\u51fb\u3001\u62d6\u52a8\u548c\u624b\u52bf\u4e8b\u4ef6\uff0c\u5e76\u4f20\u9012\u81f3\u5e94\u7528\u7a0b\u5e8f\u3002 \u4ee5\u4e0b\u4ee3\u7801\u7531TouchGFX Generator\u751f\u6210\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{1-1,6-6}","{1-1,6-6}":!0}),"static STM32TouchController tc;\nstatic STM32L4DMA dma;\nstatic LCD24bpp display;\nstatic ApplicationFontProvider fontProvider;\nstatic Texts texts;\nstatic TouchGFXHAL hal(dma, display, tc, 390, 390);\n")),(0,r.kt)("p",null,"\u5728TouchGFX Engine\u6e32\u67d3\u5468\u671f\u4e2d\uff0c\u5728\u6536\u96c6\u8f93\u5165\u65f6\uff0c\u5f15\u64ce\u8c03\u7528",(0,r.kt)("em",{parentName:"p"},"tc"),"\u5bf9\u8c61\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"sampleTouch()"),"\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n")),(0,r.kt)("p",null,"AL\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684\u5b9e\u73b0\u51fd\u6570\u5e94\u5c06\u8bfb\u53d6\u7684\u89e6\u6478\u5750\u6807\u503c\u5206\u914d\u7ed9x\u548cy\uff0c\u5e76\u8fd4\u56de\u662f\u5426\u68c0\u6d4b\u5230\u89e6\u6478\uff08\u771f\u6216\u5047\uff09\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u5c06\u751f\u6210\u4e00\u4e2a\u5c06TouchController\u63a5\u53e3\u51fd\u6570\u5b9a\u4e49\u4e3a\u7a7a\u7684\u7c7b\u3002 HAL\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u586b\u5165\u5177\u4f53\u5b9e\u73b0\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u6709\u591a\u79cd\u5b9e\u73b0\u6b64\u51fd\u6570\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u5728sampleTouch() \u4e2d\u8f6e\u8be2")),"\uff1a\u901a\u8fc7\u53d1\u9001\u8bf7\u6c42\u5e76\u8f6e\u8be2\u7ed3\u679c\uff0c\u4ece\u786c\u4ef6\u89e6\u6478\u63a7\u5236\u5668(\u901a\u5e38\u4e3aI2C) \u8bfb\u53d6\u89e6\u6478\u72b6\u6001\u3002 This impacts the overall render time of the application as the I2C round-trip is often up to 1 ms during which the graphics engine is blocked."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u57fa\u4e8e\u4e2d\u65ad")),"\uff1a\u53e6\u4e00\u79cd\u53ef\u80fd\u662f\u4f7f\u7528\u4e2d\u65ad\u3002 I2C\u8bfb\u53d6\u547d\u4ee4\u7531\u5b9a\u65f6\u5668\u5b9a\u671f\u542f\u52a8\uff0c\u6216\u4f5c\u4e3a\u5bf9\u89e6\u6478\u786c\u4ef6\u5916\u90e8\u4e2d\u65ad\u7684\u54cd\u5e94\u800c\u542f\u52a8\u3002 \u6309\u94ae\u63a7\u5236\u5668\u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"li"},"touchgfx::ButtonController"),"\u53ef\u7528\u4e8e\u5c06\u786c\u4ef6\u4fe1\u53f7(\u6309\u94ae\u6216\u5176\u4ed6) \u6620\u5c04\u5230\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6\u3002 \u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),"(\u7531TouchGFX Generator\u521b\u5efa) \u4ee3\u7801\u663e\u793a\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"sampleTouch"),"\u5982\u4f55\u67e5\u627e\u5e26RTOS\u7684\u7cfb\u7edf:")),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"STM32TouchController.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n{\n    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)\n    {\n        x = msg.x;\n        y = msg.y;\n        return true;\n    }\n    return false;\n}\n")),(0,r.kt)("p",null,"\u5c06\u5728TouchGFX Generator\u7684\u4e0b\u4e00\u7ae0\u4e2d\u6982\u8ff0\u6b64\u6587\u4ef6\u7684\u4f4d\u7f6e"),(0,r.kt)("h3",g({},{id:"other-external-events"}),"\u5176\u4ed6\u5916\u90e8\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u6309\u94ae\u63a7\u5236\u5668\u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx::ButtonController"),"\u53ef\u7528\u4e8e\u5c06\u786c\u4ef6\u4fe1\u53f7(\u6309\u94ae\u6216\u5176\u4ed6) \u6620\u5c04\u5230\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6\u3002 \u53ef\u5728TouchGFX Designer\u4e2d\u914d\u7f6e\u5bf9\u8fd9\u4e9b\u4e8b\u4ef6\u7684\u53cd\u5e94\u3002"),(0,r.kt)("p",null,"\u8be5\u63a5\u53e3\u7684\u4f7f\u7528\u4e0e\u4e0a\u8ff0\u89e6\u6478\u63a7\u5236\u5668\u7c7b\u4f3c\uff0c\u53ea\u662f\u5e76\u975e\u5fc5\u987b\u5177\u6709ButtonController\u3002 \u8981\u4f7f\u7528\u8be5\u63a5\u53e3\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\u63a5\u53e3\u7684\u7c7b\u5b9e\u4f53\uff0c\u5e76\u5c06\u53c2\u6570\u4f20\u9012\u81f3HAL\u5b9e\u4f53:"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"MyButtonController.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-6}","{3-6}":!0}),"class MyButtonController : public touchgfx::ButtonController\n{\n  bool sample(uint8_t& key)\n  {\n    ... //Sample IO, set key, return true/false\n  }\n};\n")),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static MyButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("p",null,"\u6bcf\u5e27\u4e4b\u524d\u90fd\u4f1a\u8c03\u7528ButtonController\u7c7b\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"\u6837\u672c"),"\u65b9\u6cd5\u3002 \u5982\u679c\u8fd4\u56de\u771f\u503c\uff0c\u5219\u952e\u503c\u5c06\u88ab\u4f20\u9012\u81f3\u5f53\u524d\u5c4f\u5e55\u7684",(0,r.kt)("em",{parentName:"p"},"handleKeyEvent"),"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5c06\u901a\u8fc7ButtonController\u91c7\u96c6\u7684\u503c\u7528\u4f5c\u8bbe\u8ba1\u5de5\u5177\u4e2d\u7684\u4ea4\u4e92\u89e6\u53d1\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)(p.Z,{to:"../ui-development/designer-user-guide/interactions-view",mdxType:"Link"},"\u4ea4\u4e92"),"\u6587\u7ae0\u3002"),(0,r.kt)("h2",g({},{id:"synchronize-framebuffer-access"}),"\u540c\u6b65\u5e27\u7f13\u51b2\u8bbf\u95ee"),(0,r.kt)("p",null,"\u591a\u4e2a\u6267\u884c\u4f53\u53ef\u80fd\u6d89\u53ca\u5bf9\u5e27\u7f13\u5b58\u533a\u7684\u8bbf\u95ee\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"CPU"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u6e32\u67d3\u671f\u95f4\u8bfb\u53d6\u548c\u5199\u5165\u50cf\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"DMA2D"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u786c\u4ef6\u8f85\u52a9\u6e32\u67d3\u671f\u95f4\u8bfb\u53d6\u548c\u5199\u5165\u50cf\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"LTDC"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u4f20\u8f93\u5230\u5e76\u884cRGB\u663e\u793a\u5668\u671f\u95f4\u8bfb\u53d6\u50cf\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"DMA"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u4f20\u8f93\u5230SPI\u663e\u793a\u5668\u671f\u95f4\u8bfb\u53d6\u50cf\u7d20")))),(0,r.kt)("p",null,"TouchGFX Engine\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u63a5\u53e3\u6765\u540c\u6b65\u5e27\u7f13\u5b58\u8bbf\u95ee\uff0c\u540c\u65f6\u5e0c\u671b\u8bbf\u95ee\u5e27\u7f13\u5b58\u7684\u5916\u8bbe(\u5982DMA2D) \u4e5f\u5fc5\u987b\u6267\u884c\u76f8\u540c\u64cd\u4f5c\u3002 \u5e38\u89c4\u8bbe\u8ba1\u662f\u4f7f\u7528\u4fe1\u53f7\u91cf\u6765\u4fdd\u8bc1\u5bf9\u5e27\u7f13\u51b2\u7684\u8bbf\u95ee\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u540c\u6b65\u673a\u5236\u3002"),(0,r.kt)("p",null,"\u4e0b\u8868\u663e\u793a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u7c7b(OSWrappers.cpp) \u4e2d\u7684\u51fd\u6570\u5217\u8868\uff0c\u8fd9\u4e9b\u51fd\u6570\u53ef\u7531TouchGFX Generator\u751f\u6210\u6216\u7531\u7528\u6237\u624b\u52a8\u751f\u6210\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u65b9\u6cd5"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"takeFrameBufferSemaphore")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u7531\u56fe\u5f62\u5f15\u64ce\u8c03\u7528\uff0c\u4ee5\u83b7\u5f97\u5bf9\u5e27\u7f13\u5b58\u7684\u72ec\u5360\u8bbf\u95ee\u3002 \u8fd9\u5c06\u963b\u585e\u5f15\u64ce\uff0c\u76f4\u81f3DMA2D\u5b8c\u6210\uff08\u5982\u679c\u6b63\u5728\u8fd0\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"tryTakeFrameBufferSemaphore")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786e\u4fdd\u5df2\u9501\u5b9a\u3002 \u8be5\u65b9\u6cd5\u4e0d\u4f1a\u963b\u585e\u5f15\u64ce\uff0c\u4f46\u5bf9takeFrameBufferSemaphore\u7684\u4e0b\u6b21\u8c03\u7528\u5c06\u88ab\u963b\u585e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"giveFrameBufferSemaphore")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u89e3\u9664\u5e27\u7f13\u5b58\u9501\u5b9a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"giveFrameBufferSemaphoreFromISR")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4ece\u4e2d\u65ad\u4e0a\u4e0b\u6587\u89e3\u9664\u5e27\u7f13\u5b58\u9501\u5b9a")))),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u53ef\u751f\u6210\u4f7f\u7528OSWrappers\u63a5\u53e3\u6765\u540c\u6b65\u7684ChromART\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u6839\u636eRTOS\u9009\u62e9\u6765\u6267\u884c\u8be5\u540c\u6b65\u7684\u51fd\u6570\u5b9e\u73b0\u3002"),(0,r.kt)("h2",g({},{id:"report-the-next-available-framebuffer-area"}),"\u62a5\u544a\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u65e0\u8bba\u91c7\u7528\u54ea\u79cd\u6e32\u67d3\u7b56\u7565\uff0cTouchGFX Engine\u90fd\u5fc5\u987b\u77e5\u9053\u5728\u6bcf\u4e2a\u65f6\u95f4\u7247\u4e2d\u5e94\u5c06\u50cf\u7d20\u6e32\u67d3\u5230\u54ea\u4e2a\u5b58\u50a8\u533a\u3002 \u4f7f\u7528\u5355\u5e27\u7f13\u5b58\u6216\u53cc\u5e27\u7f13\u5b58\u6218\u7565\u65f6\uff0cTouchGFX Engine\u5c06\u6839\u636e\u5e27\u7f13\u5b58\u7684\u5168\u5bbd\u3001\u9ad8\u5ea6\u548c\u4f4d\u5bbd\u5c06\u50cf\u7d20\u6570\u636e\u5199\u5165\u5b58\u50a8\u533a\u3002 \u56fe\u5f62\u5f15\u64ce\u8d1f\u8d23\u53cc\u7f13\u5b58\u8bbe\u7f6e\u4e2d\u4e24\u4e2a\u5e27\u7f13\u5b58\u4e4b\u95f4\u7684\u4ea4\u6362\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c06\u5bf9\u5e27\u7f13\u5b58\u7684\u8bbf\u95ee\u9650\u5236\u4e3a\u90e8\u5206\u5e27\u7f13\u5b58\u3002 \u53ef\u5728HAL\u5b50\u7c7b\u4e2d\u91cd\u65b0\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::getTFTCurrentLine()"),"\u65b9\u6cd5\u3002 \u8fd4\u56de\u4e0a\u9762\u7528\u4e8e\u56fe\u5f62\u5f15\u64ce\u7ed8\u5236\u800c\u4fdd\u5b58\u7684\u884c\u53f7\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u90e8\u5206\u5e27\u7f13\u5b58\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49TouchGFX Engine\u5728\u6e32\u67d3\u65f6\u5c06\u4f7f\u7528\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u5b58\u50a8\u5668\u5757\u3002 \u5728",(0,r.kt)("a",g({parentName:"p"},{href:"../scenarios/lowering-memory-usage-with-partial-framebuffer"}),"\u6b64\u5904"),"\u9605\u8bfb\u66f4\u591a\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)(l.Z,{mdxType:"Tip"},"TouchGFX Generator\u652f\u6301\u6240\u6709\u5e27\u7f13\u51b2\u7b56\u7565\u7684\u914d\u7f6e\u3002"),(0,r.kt)("h2",g({},{id:"perform-render-operations"}),"\u6267\u884c\u6e32\u67d3\u64cd\u4f5c"),(0,r.kt)("p",null,"\u6e32\u67d3\u548c\u663e\u793a\u56fe\u5f62\u5f88\u5c11\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u552f\u4e00\u76ee\u7684\u3002 \u5176\u4ed6\u4efb\u52a1\u4e5f\u9700\u8981\u4f7f\u7528CPU\u3002 TouchGFX\u7684\u76ee\u6807\u4e4b\u4e00\u5c3d\u53ef\u80fd\u5c11\u5730\u5360\u7528CPU\u8d44\u6e90\u6765\u7ed8\u5236\u7528\u6237\u754c\u9762\u3002 HAL\u7c7b\u53ef\u5bf9\u8bb8\u591aSTM32\u5fae\u63a7\u5236\u5668(\u6216\u5176\u4ed6\u786c\u4ef6\u529f\u80fd) \u4e0a\u7684DMA2D\u529f\u80fd\u8fdb\u884c\u62bd\u8c61\uff0c\u5e76\u4f7f\u5176\u53ef\u7528\u4e8e\u56fe\u5f62\u5f15\u64ce\u3002"),(0,r.kt)("p",null,"\u5c06\u4f4d\u56fe\u4e4b\u7c7b\u7684\u8d44\u6e90\u6e32\u67d3\u5230\u5e27\u7f13\u51b2\u65f6\uff0cTouchGFX Engine\u68c0\u67e5HAL\u662f\u5426\u5177\u6709\u5c06\u90e8\u5206\u6216\u5168\u90e8\u4f4d\u56fe\u4f20\u8f93\u5230\u5e27\u7f13\u5b58\u7684\u529f\u80fd\u3002 \u5982\u679c\u6709\u6b64\u529f\u80fd\uff0c\u5219\u5c06\u7ed8\u56fe\u64cd\u4f5c\u59d4\u6258\u7ed9HAL\uff0c\u800c\u4e0d\u662f\u7531CPU\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5f15\u64ce\u8c03\u7528\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::getBlitCaps()"),"\uff0c\u4ee5\u83b7\u53d6\u786c\u4ef6\u529f\u80fd\u63cf\u8ff0\u3002 HAL\u5b50\u7c7b\u53ef\u91cd\u65b0\u5b9e\u73b0\u6b64\u8c03\u7528\uff0c\u4ee5\u6dfb\u52a0\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5f15\u64ce\u5728\u7ed8\u5236\u7528\u6237\u754c\u9762\u65f6\u8c03\u7528HAL\u7c7b\u4e0a\u7684\u64cd\u4f5c(",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::blitCopy"),") \uff0c\u5e76\u5bf9DMA\u64cd\u4f5c\u6392\u961f\u3002 \u5982\u679cHAL\u65e0\u6cd5\u62a5\u544a\u6240\u9700\u7684\u529f\u80fd\uff0c\u5219\u56fe\u5f62\u5f15\u64ce\u5c06\u9000\u800c\u4f7f\u7528\u8f6f\u4ef6\u65b9\u5f0f\u6765\u6e32\u67d3\u3002",(0,r.kt)(l.Z,{mdxType:"Tip"}," \u8bb8\u591aSTM32 MCU\u90fd\u5177\u6709ChromART\u82af\u7247\uff0c\u5728\u6267\u884calpha\u50cf\u7d20\u6df7\u5408\u65f6\uff0c\u53ef\u5c06\u6570\u636e\u4ece\u5916\u90e8Flash\u5b58\u50a8\u5668\u7b49\u79fb\u52a8\u5230\u5e27\u7f13\u5b58\u3002 \u5bf9\u4e8e\u8bb8\u591aMCU\uff0cTouchGFX Generator\u53ef\u751f\u6210ChromART\u9a71\u52a8\u7a0b\u5e8f\uff0c\u8be5\u9a71\u52a8\u7a0b\u5e8f\u4f7f\u7528ChromART\u82af\u7247\u6765\u589e\u52a0\u51e0\u4e2a\u201c\u5757\u4f4d\u4f20\u8f93\u201d\u64cd\u4f5c\u529f\u80fd\u3002 ")),(0,r.kt)("h2",g({},{id:"handle-framebuffer-transfer-to-display"}),"\u5904\u7406\u5230\u663e\u793a\u5668\u7684\u5e27\u7f13\u51b2\u4f20\u8f93"),(0,r.kt)("p",null,"\u4e3a\u5c06\u5e27\u7f13\u5b58\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5668\uff0cTouchGFX AL\u7ecf\u5e38\u4f7f\u7528\u201c\u533a\u57df\u6e32\u67d3\u5b8c\u6210\u201d\u94a9\u5b50\u3002 \u4e00\u65e6\u90e8\u5206\u5e27\u7f13\u5b58\u6e32\u67d3\u5b8c\u6210\uff0c\u5f15\u64ce\u5c31\u4f1a\u5411AL\u53d1\u9001\u4fe1\u53f7\u3002 AL\u53ef\u9009\u62e9\u5982\u4f55\u5c06\u6b64\u5e27\u7f13\u5b58\u90e8\u5206\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5668\u3002"),(0,r.kt)("h3",g({},{id:"rendering-of-area-complete"}),"\u533a\u57df\u6e32\u67d3\u5b8c\u6210"),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\uff0c\u6b64\u94a9\u5b50\u4e3a\u865a\u62df\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5e26\u6709LTDC\u63a7\u5236\u5668\u7684STM32\u5fae\u63a7\u5236\u5668\u4e0a\uff0c\u6211\u4eec\u65e0\u9700\u5728\u6bcf\u6b21\u6e32\u67d3\u540e\u6267\u884c\u4efb\u4f55\u7528\u4e8e\u5e27\u7f13\u5b58\u4f20\u8f93\u7684\u64cd\u4f5c\u3002 \u5728LTDC\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u8be5\u4f20\u8f93\u5c06\u4ee5\u7ed9\u5b9a\u7684\u9891\u7387\u8fde\u7eed\u53d1\u751f\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5c06\u6b64\u65b9\u6cd5\u7684\u5b9e\u73b0\u7559\u7a7a\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u663e\u793a\u5668\u7c7b\u578b(\u5982SPI\u62168080) \uff0c\u60a8\u9700\u8981\u624b\u52a8\u5b9e\u73b0\u5e27\u7f13\u5b58\u5185\u5bb9\u4f20\u8f93\u3002"),(0,r.kt)("p",null,"\u6b64\u51fd\u6570\u7684\u5b9e\u73b0\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u53d1\u8d77\u5411\u5e26\u6709GRAM\u7684\u663e\u793a\u5668\u7684\u5e27\u7f13\u51b2\u533a\u57df\u7684\u624b\u52a8\u4f20\u8f93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{9-9}","{9-9}":!0}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)\n{\n    HAL::flushFrameBuffer(rect); //call superclass\n\n    //start transfer if not running already!\n    if (!IsTransmittingData())\n    {\n        const uint8_t* pixels = ...; // Calculate pixel address\n        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n    else\n    {\n       ... // Queue rect for later or wait here\n    }\n}\n")),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u901a\u8bfb\u65b9\u6848\u4ee5\u83b7\u53d6\u6709\u5173\u5982\u4f55\u652f\u6301\u5404\u79cd\u663e\u793a\u63a5\u53e3\u7684\u5177\u4f53\u793a\u4f8b\u3002"))}b.isMDXComponent=!0}}]);