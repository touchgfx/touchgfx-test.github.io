"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[567],{3905:function(t,a,e){e.d(a,{Zo:function(){return p},kt:function(){return m}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=n.createContext({}),s=function(t){var a=n.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},p=function(t){var a=s(t.components);return n.createElement(o.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),c=s(e),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return e?n.createElement(k,i(i({ref:a},p),{},{components:e})):n.createElement(k,i({ref:a},p))}));function m(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=c;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var s=2;s<l;s++)i[s]=e[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},43861:function(t,a,e){var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},57609:function(t,a,e){e.r(a),e.d(a,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return N}});var n=e(3905),r=e(39130),l=e(43861),i=Object.defineProperty,d=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,a,e)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,m=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&c(t,e,a[e]);if(s)for(var e of s(a))u.call(a,e)&&c(t,e,a[e]);return t};const k={title:"FlashDataReader"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_flash_data_reader",id:"api/classes/classtouchgfx_1_1_flash_data_reader",title:"FlashDataReader",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_flash_data_reader.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_flash_data_reader",permalink:"/docs/api/classes/classtouchgfx_1_1_flash_data_reader",draft:!1,tags:[],version:"current",frontMatter:{title:"FlashDataReader"},sidebar:"docs",previous:{title:"FadeAnimator",permalink:"/docs/api/classes/classtouchgfx_1_1_fade_animator"},next:{title:"Font",permalink:"/docs/api/classes/classtouchgfx_1_1_font"}},f={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"addressIsAddressable",id:"addressisaddressable",level:3},{value:"copyData",id:"copydata",level:3},{value:"startFlashLineRead",id:"startflashlineread",level:3},{value:"waitFlashReadComplete",id:"waitflashreadcomplete",level:3},{value:"~FlashDataReader",id:"flashdatareader",level:3}],b={toc:N};function y(t){var a,e=t,{components:i}=e,c=((t,a)=>{var e={};for(var n in t)p.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&s)for(var n of s(t))a.indexOf(n)<0&&u.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=m(m({},b),c),d(a,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This class is an abstract interface for a class reading data from a flash.\nThe flash can be any type, but is mostly used for flashes that are not memory mapped. Applications must implement access to the flash through this interface. "),(0,n.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-addressisaddressable",mdxType:"Link"},"addressIsAddressable")),"(const void * address) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Compute if an address is directly addressable by the MCU.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-copydata",mdxType:"Link"},"copyData")),"(const void ",(0,n.kt)("em",{parentName:"td"}," src, void ")," dst, uint32_t bytes) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Copy data from flash to a buffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-startflashlineread",mdxType:"Link"},"startFlashLineRead")),"(const void * src, uint32_t bytes) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Initiate a read operation from flash to a buffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-waitflashreadcomplete",mdxType:"Link"},"waitFlashReadComplete")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Waits until the previous startFlashLineRead operation is complete.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-~flashdatareader",mdxType:"Link"},"~FlashDataReader")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_flash_data_reader"}),"FlashDataReader")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_flash_data_reader#function-addressisaddressable",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"addressisaddressable"}),"addressIsAddressable"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-addressisaddressable",mdxType:"Link"},"addressIsAddressable")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const void *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"address"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Compute if an address is directly addressable by the MCU. "),(0,n.kt)("p",null,"Compute if an address is directly addressable by the MCU. The data is addressable it should be read direct through a pointer and not through this interface."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"address"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The address in the flash."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if the address is addressable by the MCU. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_flash_data_reader#function-copydata",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"copydata"}),"copyData"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-copydata",mdxType:"Link"},"copyData")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const void *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"src ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"void *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"dst ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Copy data from flash to a buffer. "),(0,n.kt)("p",null,"This must be a synchrony method that does not return until the copy is done."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"src"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Address of source data in the flash.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"dst"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Address of destination buffer in RAM.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Number of bytes to copy."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_flash_data_reader#function-startflashlineread",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"startflashlineread"}),"startFlashLineRead"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-startflashlineread",mdxType:"Link"},"startFlashLineRead")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const void *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"src ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initiate a read operation from flash to a buffer. "),(0,n.kt)("p",null,"This can be an asynchrony operation that is still running after this function returns. Buffers must be handled by the subclass. ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d16bpp_serial_flash"}),"LCD16bppSerialFlash")," will at most copy 4 bytes times the width of the display."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"src"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Address of source data in the flash.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Number of bytes to copy."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_flash_data_reader#function-waitflashreadcomplete",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"waitflashreadcomplete"}),"waitFlashReadComplete"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-waitflashreadcomplete",mdxType:"Link"},"waitFlashReadComplete")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Waits until the previous startFlashLineRead operation is complete. "),(0,n.kt)("p",null,"Waits until the previous startFlashLineRead operation is complete. If the startFlashLineRead method is asynchrony, this method must wait until the previous operation has completed."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The address of a buffer containing the read data. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_flash_data_reader#function-~flashdatareader",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"flashdatareader"}),"~FlashDataReader"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_flash_data_reader#function-~flashdatareader",mdxType:"Link"},"~FlashDataReader")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_flash_data_reader"}),"FlashDataReader")," class. "))))}y.isMDXComponent=!0}}]);