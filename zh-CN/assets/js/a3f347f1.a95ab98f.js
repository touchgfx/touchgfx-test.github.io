"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8223],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,g=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=i},13539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return A},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return v}});var r=n(3905),a=n(44035),l=n(93054),i=n(22425),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&s(e,n,t[n]);return e};const h={id:"04-enable-external-ram",title:"4. \u5916\u90e8RAM",sidebar_label:"4. \u5916\u90e8RAM"},f=void 0,b={unversionedId:"development/board-bring-up/how-to/04-enable-external-ram",id:"development/board-bring-up/how-to/04-enable-external-ram",title:"4. \u5916\u90e8RAM",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/04-enable-external-ram.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/04-enable-external-ram",permalink:"/zh-CN/docs/development/board-bring-up/how-to/04-enable-external-ram",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-enable-external-ram",title:"4. \u5916\u90e8RAM",sidebar_label:"4. \u5916\u90e8RAM"},sidebar:"docs",previous:{title:"3. \u663e\u793a\u5668\u7684\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5185\u90e8RAM\u4e2d",permalink:"/zh-CN/docs/development/board-bring-up/how-to/03-display-internal"},next:{title:"5. \u663e\u793a\u5668\u7684\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5916\u90e8RAM\u4e2d",permalink:"/zh-CN/docs/development/board-bring-up/how-to/05-display-external"}},k={},v=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u8fdb\u4e00\u6b65\u914d\u7f6e",id:"further-configuration",level:3},{value:"\u6d4b\u8bd5 RAM",id:"testing-the-ram",level:3},{value:"\u6d4b\u8bd5RAM\u5728\u8c03\u8bd5\u5668\u4e2d\u53ef\u89c1\u3002",id:"test-ram-is-visible-in-the-debugger",level:4},{value:"RAM\u5728\u6574\u4e2a\u8303\u56f4\u5185\u53ef\u8bfb\u53ef\u5199",id:"ram-is-readable-and-writeable-in-the-whole-range",level:4},{value:"\u6027\u80fd\u7b26\u5408\u9884\u671f",id:"performance-is-as-expected",level:4}],M={toc:v};function A(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},M),s),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",g({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u5728\u8be5\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u80fd\u5916\u90e8SDRAM\u3002 \u56fe\u5f62\u5e94\u7528\u901a\u5e38\u9700\u8981\u5916\u90e8RAM\uff0c\u5728\u8bb8\u591a\u5206\u8fa8\u7387\u4e0b\u6240\u9700\u5e27\u7f13\u5b58\u8f83\u5927\uff0c\u800c\u65e0\u6cd5\u4f7f\u7528\u5185\u90e8RAM\u3002 \u67d0\u4e9b\u5e94\u7528\u53ef\u80fd\u4f7f\u7528\u4e24\u5230\u4e09\u4e2a\u5e27\u7f13\u5b58\uff0c\u56e0\u6b64\u66f4\u52a0\u9700\u8981\u5916\u90e8RAM\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u5982\u679c\u6240\u7528\u5f00\u53d1\u677f\u4e0d\u5916\u6269RAM\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u3002"),(0,r.kt)("p",null,"\u5f53\u5e27\u7f13\u5b58\u8981\u653e\u5728\u5916\u90e8RAM\u65f6\uff0c\u786e\u4fdd\u5916\u90e8RAM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u8bfb\u53ef\u5199\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u4ee5\u6240\u9700\u901f\u5ea6\uff08\u901a\u5e38\u4e3a\u6700\u5927\u901f\u5ea6\uff09\u8fd0\u884c\u3002")),(0,r.kt)("h2",g({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u672c\u8282\u65e8\u5728\u542f\u7528\u5916\u90e8RAM\uff0c\u5e76\u4ece\u4e2d\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u3002"),(0,r.kt)("h3",g({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u8bfb"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u7528\u4e8e\u5e27\u7f13\u51b2\u533a\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u5199"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u53ef\u7528\u4e8e\u5e27\u7f13\u51b2\u533a\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u6027\u80fd"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f7f\u7528\u5916\u90e8RAM\u4f5c\u4e3a\u5e27\u7f13\u5b58\u65f6\uff0c\u56fe\u5f62\u5904\u7406\u6027\u80fd\u53ef\u63a5\u53d7")))),(0,r.kt)("h2",g({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173RAM\u7684\u4fe1\u606f\uff0c\u901a\u5e38\u4e3a\u6570\u636e\u624b\u518c"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173MCU\u4e0e\u5916\u90e8RAM\u4e4b\u95f4\u7684\u8fde\u63a5\u7684\u4fe1\u606f")),(0,r.kt)("h2",g({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0c\u901a\u8fc7\u201cConnectivity\u201d->\u201cFMC\u201d->\u201cSDRAM1\u201d\u6765\u914d\u7f6e\u5916\u90e8SDRAM\u63a7\u5236\u5668\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eSDRAM"),(0,r.kt)("p",null,"AHB\u65f6\u949f(HCLK) \u662fFMC\u5b58\u50a8\u63a7\u5236\u5668\u7684\u53c2\u8003\u65f6\u949f\u3002 \u68c0\u67e5\u201c\u65f6\u949f\u914d\u7f6e\u201d\u4e0b\u7684\u65f6\u949f\u9891\u7387\uff0c\u5e76\u4f7f\u7528\u8be5\u9891\u7387\u8ba1\u7b97\u5404\u79cdSDRAM\u65f6\u949f\u5468\u671f\u3002"),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\u914d\u7f6e\u7528\u4e8eSDRAM\u7684\u6240\u6709GPIO\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eSDRAM GPIO"),(0,r.kt)("h3",g({},{id:"further-configuration"}),"\u8fdb\u4e00\u6b65\u914d\u7f6e"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e9bRAM\u82af\u7247\uff0c\u8fd8\u5fc5\u987b\u8fdb\u884c\u5176\u4ed6\u7279\u5b9a\u7684\u914d\u7f6e\u3002 \u8fd9\u90e8\u5206\u4e0d\u80fd\u5728STM32CubeMX\u4e2d\u914d\u7f6e\uff0c\u800c\u5fc5\u987b\u5728C\u4ee3\u7801\u4e2d\u5b8c\u6210\u3002 STM32Cube HAL\u5305\u542b\u7528\u6237\u5411\u8bbe\u5907\u53d1\u9001\u547d\u4ee4\u7684\u51fd\u6570\u3002 \u4e0b\u9762\u4e3a\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"FMC_SDRAM_CommandTypeDef Command;\n\n/* Step 1: Configure a clock configuration enable command */\nCommand.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;\nCommand.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;\nCommand.AutoRefreshNumber      = 1;\nCommand.ModeRegisterDefinition = 0;\n\n/* Send the command */\nHAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);\n")),(0,r.kt)("h3",g({},{id:"testing-the-ram"}),"\u6d4b\u8bd5 RAM"),(0,r.kt)("p",null,"\u914d\u7f6e\u5916\u90e8RAM\u540e\uff0c\u52a1\u5fc5\u5bf9\u5176\u8fdb\u884c\u6d4b\u8bd5\u3002 \u6211\u4eec\u5e94\u81f3\u5c11\u6d4b\u8bd5\u4ee5\u4e0b\u5185\u5bb9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM\u5728\u8c03\u8bd5\u5668\u4e2d\u53ef\u89c1"),(0,r.kt)("li",{parentName:"ul"},"RAM\u5728\u6574\u4e2a\u8303\u56f4\u5185\u53ef\u8bfb\u53ef\u5199"),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u7b26\u5408\u9884\u671f")),(0,r.kt)("p",null,"\u5b58\u50a8\u63a7\u5236\u5668\u6839\u636e\u5916\u90e8\u5b58\u50a8\u5668\u7684\u7c7b\u578b\u4f7f\u7528\u5176\u56fa\u5b9a\u5730\u5740\u6620\u5c04\u3002 \u68c0\u67e5\u5fae\u63a7\u5236\u5668\u7684\u6570\u636e\u624b\u518c\u4ee5\u786e\u8ba4\u5176\u5730\u5740\u3002 SDRAM\u901a\u5e38\u6620\u5c04\u52300xC0000000(\u5b58\u50a8\u533a\u57df1) \u62160xD0000000(\u5b58\u50a8\u533a\u57df2) \u3002"),(0,r.kt)("h4",g({},{id:"test-ram-is-visible-in-the-debugger"}),"\u6d4b\u8bd5RAM\u5728\u8c03\u8bd5\u5668\u4e2d\u53ef\u89c1\u3002"),(0,r.kt)("p",null,"\u4f7f\u80fdRAM\u540e\u7684\u7b2c\u4e00\u4e2a\u6d4b\u8bd5\u4e3a\u501f\u52a9\u8c03\u8bd5\u5668\u8bbf\u95ee\u5b83\u3002 \u8fd9\u6837\u5c31\u53ef\u4ee5\u8f7b\u677e\u786e\u8ba4\u662f\u5426\u53ef\u4ee5\u8bfb\u5199\u5b58\u50a8\u5668\u3002 \u53ea\u9700\u4f7f\u7528\u5b58\u50a8\u5668\u6d4f\u89c8\u5668\u6253\u5f00\u4ee5\u4e0b\u5730\u5740\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/iar-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u901a\u8fc7\u8c03\u8bd5\u5668\u6d4b\u8bd5\u5b58\u50a8\u533a\u57df2\u4e2d\u4ee50xD0000000\u8d77\u59cb\u7684\u5b58\u50a8\u6bb5"),(0,r.kt)("h4",g({},{id:"ram-is-readable-and-writeable-in-the-whole-range"}),"RAM\u5728\u6574\u4e2a\u8303\u56f4\u5185\u53ef\u8bfb\u53ef\u5199"),(0,r.kt)("p",null,"\u4e0b\u4e00\u4e2a\u6d4b\u8bd5\u4e3a\u7f16\u5199\u5c0f\u7a0b\u5e8f\uff0c\u5c06\u66f4\u591a\u6570\u636e\u5199\u5165\u5916\u90e8\u5b58\u50a8\u5668\u3002 \u6700\u597d\u6d4b\u8bd5\u6574\u4e2a\u5b58\u50a8\u5668\u3002 \u4ee5\u4e0b\u662f\u8d77\u70b9:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = i;\n}\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5728\u8c03\u8bd5\u5668\u4e2d\u518d\u6b21\u68c0\u67e5\u5b58\u50a8\u5668\u3002 \u8fd9\u53ef\u4ee5\u663e\u793a\u67d0\u4e9b\u7c7b\u578b\u7684\u9519\u8bef\uff0c\u4f8b\u5982\uff0c\u67d0\u4e9b\u5730\u5740\u5f15\u811a\u662f\u5426\u672a\u8fde\u63a5\u6216\u672a\u4ea4\u6362\u3002 \u60a8\u8fd8\u5e94\u5c1d\u8bd5\u4e0d\u540c\u5927\u5c0f\u7684\u5199\u5165\u503c\u3002 \u4ec5\u4ec5\u5199\u5165\u5c0f\u6570\u5b57(\u59820\u30011\u30012\u30013) \u5f80\u5f80\u65e0\u6cd5\u63ed\u793a\u67d0\u4e9b\u6570\u636e\u5f15\u811a\u662f\u5426\u6b63\u5e38\u8fde\u63a5\u6216\u635f\u574f\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7a0b\u5e8f\u6765\u8bfb\u53d6\u5b58\u50a8\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//read external RAM\nfor(int i = 0; i < size; i++)\n{\n    ASSERT(externalRAM[i] == i, "external RAM not as expected");\n}\n')),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u6b64\u7c7b\u6d4b\u8bd5\u65e0\u6cd5\u786e\u5b9a\u5730\u5740\u662f\u5426\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u6b32\u6d4b\u8bd5\u6240\u6709\u5b58\u50a8\u5355\u5143\u3002 \u8981\u4e48\u901a\u8fc7\u8fd0\u884c\u66f4\u957f\u7684\u5faa\u73af\uff0c\u8981\u4e48\u968f\u610f\u66f4\u6539\u8d77\u59cb\u5730\u5740\u3002"),(0,r.kt)("h4",g({},{id:"performance-is-as-expected"}),"\u6027\u80fd\u7b26\u5408\u9884\u671f"),(0,r.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u9700\u8981\u6d4b\u8bd5\u5916\u90e8RAM\u7684\u6027\u80fd\u3002 \u5f53\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u65f6\uff0c\u6027\u80fd\u5f88\u91cd\u8981\u3002 \u7f13\u6162\u7684\u5b58\u50a8\u5668\u4f1a\u4f7f\u7cfb\u7edf\u7684\u56fe\u5f62\u5904\u7406\u6027\u80fd\u964d\u4f4e\u3002"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u8bfb\u53d6\u3001\u5199\u5165\u548c\u4fee\u6539RAM\u7684\u901f\u5ea6\u3002 \u901a\u5e38\uff0c\u56fe\u5f62\u5e94\u7528\u4f1a\u5c06\u8bb8\u591a\u6570\u636e\u4ece\u4e00\u4e2a\u5b58\u50a8\u5668\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b58\u50a8\u5668\u3002 \u5728\u7ed8\u56fe\u64cd\u4f5c\u671f\u95f4\u5c06\u5927\u91cf\u5199\u5165\u5e27\u7f13\u51b2\uff0c\u800c\u5728\u4f20\u8f93\u81f3\u663e\u793a\u5668\u65f6\u5c06\u8fdb\u884c\u5927\u91cf\u8bfb\u53d6\u64cd\u4f5c\u3002 \u6211\u4eec\u53ef\u901a\u8fc7\u6d4b\u8bd5\u7a0b\u5e8f\u6765\u6a21\u62df\u8fd9\u4e9b\u64cd\u4f5c:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalRAM = 0xC000000;\nuint32_t sourcedata[10000];\nconst uint32_t size = 10000;\n\nint begin = HAL_GetTick();\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = sourcedata[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"int begin = HAL_GetTick();\n//Read external RAM\nfor(int i = 0; i < size; i++)\n{\n    sourcedata[i] = externalRAM[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\u5f53\u5728\u80cc\u666f\u4e0a\u6df7\u5408\u56fe\u5f62\u65f6\uff0c\u56fe\u5f62\u5904\u7406\u8f6f\u4ef6\u53ef\u5728\u5e27\u7f13\u51b2\u4e2d\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"//Time modifying external RAM\nint begin = HAL_GetTick();\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] += 2;\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\u6839\u636e\u60a8\u7684\u5b58\u50a8\u5668\u901f\u5ea6\u548c\u60f3\u8981\u7684\u7cbe\u5ea6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5faa\u73af\u6d4b\u8bd5100\u6b21\uff0c\u4ee5\u4f7f\u7ed3\u679c\u66f4\u53ef\u9760\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5916\u90e8RAM\u65f6\u949f\u8fc7\u5feb\uff0c\u5219\u53ef\u80fd\u5728\u8bfb\u53d6\u6216\u5199\u5165\u64cd\u4f5c\u671f\u95f4\u5bfc\u81f4\u9519\u8bef\u3002 \u901a\u8fc7\u8fd9\u4e9b\u8f83\u7b80\u5355\u7684\u6d4b\u8bd5\u53ef\u80fd\u5f88\u96be\u770b\u5230\u8fd9\u4e00\u70b9\uff0c\u4f46\u8fd9\u5728\u663e\u793a\u5668\u4e0a\u53ef\u4ee5\u76f4\u89c2\u5730\u611f\u53d7\u5230\u3002"))}A.isMDXComponent=!0}}]);