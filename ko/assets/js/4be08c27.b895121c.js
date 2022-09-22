"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7889],{3905:function(t,a,e){e.d(a,{Zo:function(){return u},kt:function(){return k}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=n.createContext({}),m=function(t){var a=n.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},u=function(t){var a=m(t.components);return n.createElement(c.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=m(e),k=r,d=p["".concat(c,".").concat(k)]||p[k]||s[k]||i;return e?n.createElement(d,l(l({ref:a},u),{},{components:e})):n.createElement(d,l({ref:a},u))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=p;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=e[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},43861:function(t,a,e){var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},61518:function(t,a,e){e.r(a),e.d(a,{assets:function(){return b},contentTitle:function(){return f},default:function(){return _},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return h}});var n=e(3905),r=e(39130),i=e(43861),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,a,e)=>a in t?l(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,k=(t,a)=>{for(var e in a||(a={}))u.call(a,e)&&p(t,e,a[e]);if(m)for(var e of m(a))s.call(a,e)&&p(t,e,a[e]);return t};const d={title:"PartialFrameBufferManager"},f=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",id:"api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",title:"PartialFrameBufferManager",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",permalink:"/touchgfx-test.github.io/ko/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",draft:!1,tags:[],version:"current",frontMatter:{title:"PartialFrameBufferManager"},sidebar:"docs",previous:{title:"Pair",permalink:"/touchgfx-test.github.io/ko/docs/api/classes/structtouchgfx_1_1_pair"},next:{title:"Partition",permalink:"/touchgfx-test.github.io/ko/docs/api/classes/classtouchgfx_1_1_partition"}},b={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"transmitRemainingBlocks",id:"transmitremainingblocks",level:3},{value:"tryTransmitBlock",id:"trytransmitblock",level:3},{value:"tryTransmitBlockFromIRQ",id:"trytransmitblockfromirq",level:3}],y={toc:h};function _(t){var a,e=t,{components:l}=e,p=((t,a)=>{var e={};for(var n in t)u.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&m)for(var n of m(t))a.indexOf(n)<0&&s.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=k(k({},y),p),o(a,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This class specifies strategies for transmitting block to the display using Partial Frame Buffer. "),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"Link"},"transmitRemainingBlocks")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Transmit all remaining drawn Framebuffer blocks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"Link"},"tryTransmitBlock")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Tries to transmit a drawn block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"Link"},"tryTransmitBlockFromIRQ")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Tries to transmit a drawn block in interrupt context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"transmitremainingblocks"}),"transmitRemainingBlocks"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"Link"},"transmitRemainingBlocks")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transmit all remaining drawn Framebuffer blocks. "),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function does not return before all blocks have been transmitted. ")))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"trytransmitblock"}),"tryTransmitBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"Link"},"tryTransmitBlock")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Tries to transmit a drawn block. "),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"Will return immediately if already transmitting. ")))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"trytransmitblockfromirq"}),"tryTransmitBlockFromIRQ"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"Link"},"tryTransmitBlockFromIRQ")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Tries to transmit a drawn block in interrupt context. "),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"Will transmit next block immediately if drawn. ")))))}_.isMDXComponent=!0}}]);