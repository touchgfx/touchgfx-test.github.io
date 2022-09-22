"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8346],{3905:function(t,a,e){e.d(a,{Zo:function(){return m},kt:function(){return s}});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var d=r.createContext({}),p=function(t){var a=r.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},m=function(t){var a=p(t.components);return r.createElement(d.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(e),s=n,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||i;return e?r.createElement(k,o(o({ref:a},m),{},{components:e})):r.createElement(k,o({ref:a},m))}));function s(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,o=new Array(i);o[0]=u;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},43861:function(t,a,e){var r=e(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=n},37497:function(t,a,e){e.r(a),e.d(a,{assets:function(){return g},contentTitle:function(){return _},default:function(){return N},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return b}});var r=e(3905),n=e(39130),i=e(43861),o=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,a,e)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))m.call(a,e)&&u(t,e,a[e]);if(p)for(var e of p(a))c.call(a,e)&&u(t,e,a[e]);return t};const k={title:"BitmapData"},_=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",title:"BitmapData",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",permalink:"/zh-CN/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",draft:!1,tags:[],version:"current",frontMatter:{title:"BitmapData"},sidebar:"docs",previous:{title:"Bitmap",permalink:"/zh-CN/docs/api/classes/classtouchgfx_1_1_bitmap"},next:{title:"BlitOp",permalink:"/zh-CN/docs/api/classes/structtouchgfx_1_1_blit_op"}},g={},b=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"getFormat",id:"getformat",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"data",id:"data",level:3},{value:"extraData",id:"extradata",level:3},{value:"format_hi",id:"format_hi",level:3},{value:"format_lo",id:"format_lo",level:3},{value:"height",id:"height",level:3},{value:"solidRect_height",id:"solidrect_height",level:3},{value:"solidRect_width",id:"solidrect_width",level:3},{value:"solidRect_x",id:"solidrect_x",level:3},{value:"solidRect_y",id:"solidrect_y",level:3},{value:"width",id:"width",level:3}],f={toc:b};function N(t){var a,e=t,{components:o}=e,u=((t,a)=>{var e={};for(var r in t)m.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&p)for(var r of p(t))a.indexOf(r)<0&&c.call(t,r)&&(e[r]=t[r]);return e})(e,["components"]);return(0,r.kt)("wrapper",(a=s(s({},f),u),l(a,d({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Data of a bitmap. "),(0,r.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap#enum-bitmapformat"}),"BitmapFormat")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"Link"},"getFormat")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Gets the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," format by combining the high and low parts (format_hi ","<","<"," 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint8_t *const"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-data",mdxType:"Link"},"data")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The data of this ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint8_t *const"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-extradata",mdxType:"Link"},"extraData")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The data of either the alpha channel (if present) or clut data in case of indexed color bitmap. 0 if not used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_hi",mdxType:"Link"},"format_hi")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data (high 3 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_lo",mdxType:"Link"},"format_lo")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data (low 3 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-height",mdxType:"Link"},"height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_height",mdxType:"Link"},"solidRect_height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_width",mdxType:"Link"},"solidRect_width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_x",mdxType:"Link"},"solidRect_x")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The x coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_y",mdxType:"Link"},"solidRect_y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The y coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-width",mdxType:"Link"},"width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"getformat"}),"getFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"BitmapFormat","\xa0",(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"Link"},"getFormat")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," format by combining the high and low parts (format_hi ","<","<"," 3) | format_lo. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The BitmapFormat ")))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-data",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"data"}),"data"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t *const data ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The data of this ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-extradata",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"extradata"}),"extraData"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t *const extraData ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The data of either the alpha channel (if present) or clut data in case of indexed color bitmap. 0 if not used. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_hi",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format_hi"}),"format_hi"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t format_hi ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data (high 3 bits) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_lo",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format_lo"}),"format_lo"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t format_lo ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data (low 3 bits) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"height"}),"height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_height"}),"solidRect_height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_width"}),"solidRect_width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_x"}),"solidRect_x"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_x ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The x coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_y"}),"solidRect_y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The y coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"width"}),"width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))))}N.isMDXComponent=!0}}]);