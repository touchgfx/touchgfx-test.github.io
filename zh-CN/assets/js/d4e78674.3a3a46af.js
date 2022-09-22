"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8627],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=o},67374:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return _}});var r=n(3905),a=n(44035),l=n(93054),o=n(22425),i=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&m(e,n,t[n]);return e};const f={id:"06-flash-external-addressable",title:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58",sidebar_label:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58"},b=void 0,g={unversionedId:"development/board-bring-up/how-to/06-flash-external-addressable",id:"development/board-bring-up/how-to/06-flash-external-addressable",title:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/06-flash-external-addressable.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/06-flash-external-addressable",permalink:"/zh-CN/docs/development/board-bring-up/how-to/06-flash-external-addressable",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"06-flash-external-addressable",title:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58",sidebar_label:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58"},sidebar:"docs",previous:{title:"5. \u663e\u793a\u5668\u7684\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5916\u90e8RAM\u4e2d",permalink:"/zh-CN/docs/development/board-bring-up/how-to/05-display-external"},next:{title:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58",permalink:"/zh-CN/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"}},v={},_=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u5757\u6a21\u5f0f",id:"block-mode",level:3},{value:"\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f",id:"memory-mapped-mode",level:3}],y={toc:_};function k(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),m),c(t,d({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\uff0c\u6211\u4eec\u5c06\u5728\u5b58\u50a8\u6620\u5c04\u6a21\u5f0f\u4e0b\u4f7f\u80fd\u5916\u90e8\u7684Quad\u6216Octo SPI\u95ea\u5b58\u3002 \u5bf9\u4e8e\u5927\u591a\u6570\u9879\u76ee\uff0c\u5efa\u8bae\u4f7f\u7528\u5916\u90e8\u95ea\u5b58\uff0c\u56e0\u4e3a\u8fd9\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u591a\u4e2a\u5927\u578b\u56fe\u50cf\u3002 \u5373\u4fbf\u6700\u666e\u901a\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5185\u90e8\u95ea\u5b58\u4e5f\u53ef\u80fd\u4f1a\u5f88\u5feb\u88ab\u5360\u7528\u5b8c\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u82e5\u5f00\u53d1\u677f\u4e0d\u652f\u6301\u5916\u90e8\u95ea\u5b58\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u5c06\u6570\u636e\u5b58\u653e\u5728\u5916\u90e8\u95ea\u5b58\uff0c\u4fdd\u8bc1MCU\u53ef\u4ee5\u8bfb\u53d6\u5916\u90e8\u95ea\u5b58\u975e\u5e38\u91cd\u8981\u3002 \u5916\u90e8\u95ea\u5b58\u5e94\u4ee5\u6240\u9700\u901f\u5ea6(\u901a\u5e38\u4e3a\u6700\u5927\u901f\u5ea6) \u8fd0\u884c\uff0c\u4ee5\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,r.kt)("h2",h({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u672c\u8282\u65e8\u5728\u4f7f\u80fd\u5916\u90e8\u95ea\u5b58\uff0c\u5e76\u4f7f\u7528\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\uff0c\u4ece\u4e2d\u8bfb\u53d6\u6570\u636e\u3002 \u7531\u4e8e\u5916\u90e8\u95ea\u5b58\u7684\u8bfb\u53d6\u901f\u5ea6\u5bf9\u56fe\u5f62\u5904\u7406\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\u60a8\u8fd8\u5e94\u8be5\u6d4b\u8bd5\u8bfb\u53d6\u901f\u5ea6\u3002"),(0,r.kt)("h3",h({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8\u95ea\u5b58\u53ef\u8bfb"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8\u95ea\u5b58\u53ef\u7528\u4e8e\u56fe\u50cf\u5b58\u50a8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5916\u90e8\u95ea\u5b58\u6027\u80fd"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u56fe\u5f62\u5904\u7406\u6027\u80fd\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u51b3\u4e8e\u5b58\u50a8\u5668\u6027\u80fd")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173\u95ea\u5b58\u7684\u4fe1\u606f\uff0c\u67e5\u9605\u6570\u636e\u624b\u518c"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173MCU\u548c\u5916\u90e8\u95ea\u5b58\u4e4b\u95f4\u7684\u8fde\u63a5\u7684\u4fe1\u606f")),(0,r.kt)("h2",h({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0cQSPI\u63a7\u5236\u5668\u5728\u201c\u8fde\u63a5\u201d->\u201cQUADSPI\u201d\u4e0b\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/qspi/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eQSPI\u95ea\u5b58"),(0,r.kt)("p",null,"\u5728\u6a21\u5f0f\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u5c06\u95ea\u5b58\u914d\u7f6e\u4e3a\u5355/\u53cc/\u56db\u6570\u636e\u7ebf\u3002 \u56db\u6570\u636e\u7ebf\u6700\u5feb\u3002 \u4e0e\u5916\u90e8RAM\u76f8\u4f3c\uff0c\u8fd9\u91cc\u8fd8\u9700\u9009\u62e9\u548c\u914d\u7f6e\u7528\u4e8e\u6570\u636e\u7ebf\u3001\u7247\u9009\u548c\u65f6\u949f\u4fe1\u53f7\u7684GPIO\u3002"),(0,r.kt)("h3",h({},{id:"block-mode"}),"\u5757\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u80fd\u95ea\u5b58\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ece\u4e2d\u8bfb\u53d6\u6570\u636e\u6765\u5bf9\u5176\u8fdb\u884c\u6d4b\u8bd5\u3002 STM32Cube\u56fa\u4ef6\u5305\u5305\u542b\u6709\u5173\u793a\u4f8b\u3002"),(0,r.kt)("h3",h({},{id:"memory-mapped-mode"}),"\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u80fd\u95ea\u5b58\u7684\u5757\u6a21\u5f0f\u5bf9\u5176\u8fdb\u884c\u6d4b\u8bd5\u540e\uff0c\u5fc5\u987b\u5c06\u5176\u66f4\u6539\u4e3a\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\u3002 \u8fd9\u5c06\u5141\u8bb8CPU\u76f4\u63a5\u4ece\u95ea\u5b58\u4e2d\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("p",null,"STM32 STM32Cube HAL\u5305\u542b\u7528\u4e8e\u66f4\u6539\u4e3a\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\u7684\u51fd\u6570\u3002 \u8fd9\u91cc\u7ed9\u51fa\u4e86\u4e00\u4e2a\u793a\u4f8b\u3002 \u5fc5\u987b\u901a\u8fc7\u67e5\u9605\u6570\u636e\u624b\u518c\u6765\u83b7\u53d6\u914d\u7f6e\u6570\u636e\u3002 MCU\u7684STM32Cube\u56fa\u4ef6\u5305\u5305\u542b\u66f4\u591a\u793a\u4f8b\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"QSPI_CommandTypeDef      s_command;\nQSPI_MemoryMappedTypeDef s_mem_mapped_cfg;\n\n/* Configure the command for the read instruction */\ns_command.InstructionMode   = QSPI_INSTRUCTION_1_LINE;\ns_command.Instruction       = QUAD_INOUT_FAST_READ_CMD;\ns_command.AddressMode       = QSPI_ADDRESS_4_LINES;\ns_command.AddressSize       = QSPI_ADDRESS_24_BITS;\ns_command.AlternateByteMode = QSPI_ALTERNATE_BYTES_NONE;\ns_command.DataMode          = QSPI_DATA_4_LINES;\ns_command.DummyCycles       = N25Q128A_DUMMY_CYCLES_READ_QUAD;\ns_command.DdrMode           = QSPI_DDR_MODE_DISABLE;\ns_command.DdrHoldHalfCycle  = QSPI_DDR_HHC_ANALOG_DELAY;\ns_command.SIOOMode          = QSPI_SIOO_INST_EVERY_CMD;\n\n/* Configure the memory mapped mode */\ns_mem_mapped_cfg.TimeOutActivation = QSPI_TIMEOUT_COUNTER_DISABLE;\n\nif (HAL_QSPI_MemoryMapped(&QSPIHandle, &s_command, &s_mem_mapped_cfg) != HAL_OK)\n{\n  return QSPI_ERROR;\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u4e0eSTM32\u8bc4\u4f30\u5957\u4ef6\u76f8\u540c\u7684\u95ea\u5b58\uff0c\u5219\u8fd9\u4e9b\u677f\u7684BSP\u8f6f\u4ef6\u5305 (\u4e5f\u5728STM32Cube\u56fa\u4ef6\u4e2d) \u4e2d\u5305\u542b\u6709\u4ef7\u503c\u793a\u4f8b\uff0c\u53ef\u7ecf\u8fc7\u4fee\u6539\u540e\u7528\u4e8e\u60a8\u7684\u786c\u4ef6\u4e0a\u3002"),(0,r.kt)("p",null,"\u5f53\u95ea\u5b58\u5904\u4e8e\u5b58\u50a8\u5668\u6620\u5c04\u6a21\u5f0f\u65f6\uff0c\u60a8\u53ef\u4ee5\u50cf\u4f7f\u7528\u5916\u90e8RAM\u4e2d\u7684\u4ee3\u7801\u90a3\u6837\u5bf9\u5916\u90e8\u95ea\u5b58\u7684\u4ee3\u7801\u8fdb\u884c\u6d4b\u8bd5(\u5728MCU\u6570\u636e\u8868\u624b\u518c\u4e2d\u67e5\u627e\u5730\u5740):"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalFlash = 0x90000000;\nconst uint32_t size = 1000;\nvolatile uint32_t result = 0;\n\n//read external Flash\nfor(int i = 0; i < size; i++)\n{\n    result += externalFlash[i];\n}\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u4f7f\u7528\u5148\u524d\u6b65\u9aa4\u6240\u505a\u7684\u5b58\u50a8\u5668\u6027\u80fd\u6d4b\u8bd5\uff0c\u4ee5\u6d4b\u8bd5\u5916\u90e8\u95ea\u5b58\u7684\u6027\u80fd\u3002"))}k.isMDXComponent=!0}}]);