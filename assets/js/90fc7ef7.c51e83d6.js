"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[123],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(a),d=r,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88678:function(e,t,a){var n=a(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},93054:function(e,t,a){var n=a(67294),r=a(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},84225:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=a(3905),r=a(93054),o=a(39130),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(h)for(var a of h(t))u.call(t,a)&&p(e,a,t[a]);return e};const f={id:"11-flash-loader",title:"11. Flash Loader",sidebar_label:"11. Flash Loader"},m=void 0,b={unversionedId:"development/board-bring-up/how-to/11-flash-loader",id:"development/board-bring-up/how-to/11-flash-loader",title:"11. Flash Loader",description:"",source:"@site/docs/development/board-bring-up/how-to/11-flash-loader.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/11-flash-loader",permalink:"/touchgfx-test.github.io/docs/development/board-bring-up/how-to/11-flash-loader",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"11-flash-loader",title:"11. Flash Loader",sidebar_label:"11. Flash Loader"},sidebar:"docs",previous:{title:"10. Physical Buttons",permalink:"/touchgfx-test.github.io/docs/development/board-bring-up/how-to/10-physical-buttons"},next:{title:"TouchGFX AL Development Introduction",permalink:"/touchgfx-test.github.io/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"}},g={},y=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"Flash loader for STM32CubeProgrammer",id:"flash-loader-for-stm32cubeprogrammer",level:3},{value:"Proprietary application-based solution",id:"proprietary-application-based-solution",level:3},{value:"Testing",id:"testing",level:3}],v={toc:y};function k(e){var t,a=e,{components:i}=a,p=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),p),l(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",d({},{id:"motivation"}),"Motivation"),(0,n.kt)("p",null,"In this step we will discuss loading data to the external flash. The\ncompiler will compile the text, fonts, and images in your project and\nproduce a binary or hex file with this data. This data is typically\nput into the external flash. The internal flash is then reserved for\ncode."),(0,n.kt)("p",null,"During development we need a way to write data to the external flash,\nbut this is not necessary during runtime where we only read from the\nflash."),(0,n.kt)("p",null,"Two ways are common for writing data to the external flash:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Write a flashloader for STM32CubeProgrammer"),(0,n.kt)("li",{parentName:"ul"},"Use a proprietary application-based solution")),(0,n.kt)(r.Z,{mdxType:"Note"},"Skip this step if external flash is not present"),(0,n.kt)("h2",d({},{id:"goal"}),"Goal"),(0,n.kt)("p",null,"The goal in this section is to select and develop a mechanism for loading data to\nthe external flash."),(0,n.kt)("h3",d({},{id:"verification"}),"Verification"),(0,n.kt)("p",null,"Here are the verification points for this section:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Verification Point"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Rationale"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Data can be flashed"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"External flash can be used for image storage")))),(0,n.kt)("h2",d({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"The following are the prerequisites for this step:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Information about the flash, typically a datasheet"),(0,n.kt)("li",{parentName:"ul"},"Information about the connections between the MCU and the external flash")),(0,n.kt)("h2",d({},{id:"do"}),"Do"),(0,n.kt)("h3",d({},{id:"flash-loader-for-stm32cubeprogrammer"}),"Flash loader for STM32CubeProgrammer"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer")," comes with flash loaders for the various STM32\nEvaluation kits. The flash loaders are small programs that are loaded\nto the RAM of the MCU and facilitate the programming of the flash."),(0,n.kt)("p",null,"The flash loader consists of two parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuration of the GPIOs and flash interface that are required to communicate with the flash"),(0,n.kt)("li",{parentName:"ul"},"The flashing algorithm that knows the sequence of commands required to write in the flash")),(0,n.kt)("p",null,"These parts can often be based on an existing flash loader. If you can\nfind a flash loader for the same flash that you are using, take that\nas starting point and modify the GPIO part. If you design your\nhardware by copying the flash circuit from an evaluation kit, then you\ncan use the flash loader for that kit directly. This is the way."),(0,n.kt)("p",null,"The flash loader projects provided with ",(0,n.kt)("em",{parentName:"p"},"STM32CubeProgrammer")," are found\nin the installation folder, typically here:\n",(0,n.kt)("em",{parentName:"p"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader")),(0,n.kt)("p",null,"Flash loader projects can also be found on github:"),(0,n.kt)(o.Z,{to:"https://github.com/STMicroelectronics/stm32-external-loader",mdxType:"Link"},"STM32 External Flashloaders on GitHub"),(0,n.kt)("h3",d({},{id:"proprietary-application-based-solution"}),"Proprietary application-based solution"),(0,n.kt)("p",null,"Another solution is to include flash loading into the application\nitself. The idea is that you already have the flash configuration\ninside your application (to be able to load from it), and maybe you\nknow how to write a block to the flash from your previous testing. You\nthen just need a way of transferring the new flash data to your\napplication. One way is through a UART. The application receives\nthe data stream, and writes the data to the flash, block by block."),(0,n.kt)("p",null,"The flash cannot be in memory mapped mode while this is running, so\nthe application must typically be put in a special mode."),(0,n.kt)("p",null,"Open source solutions for the transmission of bytes can be found on\nthe Internet. The Y-modem protocol for example provides 16-bit CRC on the data."),(0,n.kt)("h3",d({},{id:"testing"}),"Testing"),(0,n.kt)("p",null,"After the data has been written to the flash, test that it can be read\ncorrectly. Use the small test programs developed in the previous\nsections."),(0,n.kt)("p",null,"It is advised to test the whole flash thoroughly now, to find any bugs\nearly."))}k.isMDXComponent=!0}}]);