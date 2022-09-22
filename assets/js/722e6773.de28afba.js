"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1629],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),f=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=f(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=f(r),u=n,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return r?a.createElement(h,o(o({ref:t},m),{},{components:r})):a.createElement(h,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var f=2;f<i;f++)o[f]=r[f];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){var a=r(67294),n=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,n.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:r,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:r,height:i,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,r){var a=r(67294),n=r(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(n.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,r){var a=r(67294);class n extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=n},14122:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return k}});var a=r(3905),n=r(44035),i=r(29415),o=r(39130),l=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={id:"framebuffer",title:"Framebuffer"},b=void 0,g={unversionedId:"basic-concepts/framebuffer",id:"basic-concepts/framebuffer",title:"Framebuffer",description:"",source:"@site/docs/basic-concepts/framebuffer.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/framebuffer",permalink:"/docs/basic-concepts/framebuffer",draft:!1,tags:[],version:"current",frontMatter:{id:"framebuffer",title:"Framebuffer"},sidebar:"docs",previous:{title:"Color Formats",permalink:"/docs/basic-concepts/color-formats"},next:{title:"Graphics Engine",permalink:"/docs/basic-concepts/graphics-engine"}},y={},k=[{value:"Colors",id:"colors",level:2},{value:"Display",id:"display",level:2},{value:"Location of framebuffer",id:"location-of-framebuffer",level:2},{value:"Internal RAM",id:"internal-ram",level:3},{value:"External RAM",id:"external-ram",level:3},{value:"Display with embedded RAM",id:"display-with-embedded-ram",level:3},{value:"Amount of framebuffers",id:"amount-of-framebuffers",level:2},{value:"One framebuffer",id:"one-framebuffer",level:3},{value:"More than one framebuffer",id:"more-than-one-framebuffer",level:3},{value:"Less than one framebuffer",id:"less-than-one-framebuffer",level:3},{value:"Memory consumption",id:"memory-consumption",level:2}],v={toc:k};function w(e){var t,r=e,{components:l}=r,u=((e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},v),u),s(t,f({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A framebuffer is a piece of memory that is updated by the graphics engine to\ncontain the next image to be shown on the display."),(0,a.kt)("p",null,"The framebuffer is a contiguous part of RAM of a given size."),(0,a.kt)(n.Z,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",noShadow:"true",mdxType:"Figure"},"Framebuffer memory"),(0,a.kt)("p",null,"A framebuffer has an associated width and height.\nTherefore we typically think of a framebuffer as being a two dimensional part of memory, indexable\nby x, y coordinates."),(0,a.kt)(n.Z,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",noShadow:"true",mdxType:"Figure"},"2D framebuffer memory"),(0,a.kt)("p",null,"A framebuffer has an associated color format.\nEach entry in the framebuffer will be a color in this color format.\nWe will refer to each such entry in the framebuffer as a pixel."),(0,a.kt)("p",null,"We can update the color of a pixel at position x,y in the framebuffer by calculating the memory address\nof the pixel within the framebuffer and updating the stored color."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),(0,a.kt)("p",null,"Similarly we can obtain the color of a pixel in the framebuffer and use this in calculations. For instance darkening the color\nof a pixel in the framebuffer (assuming we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"darken")," function available)."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),(0,a.kt)("p",null,"Often the framebuffer memory is not written and read pixel by pixel as above, but by utilizing the underlying hardware capabilities of the system, e.g. the Chrom-ART DMA."),(0,a.kt)("h2",h({},{id:"colors"}),"Colors"),(0,a.kt)("p",null,"In TouchGFX the pixel color format of a framebuffer can be either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Grayscale")," 1, 2 or 4 bits per pixel (bpp) grayscale, or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"High or true color")," 16, 24 or 32 bpp color")),(0,a.kt)("p",null,"The more bits per pixels used the more distinct colors can be represented by the framebuffer, moreover the more bits per pixels used the more memory will be consumed by the framebuffer."),(0,a.kt)("h2",h({},{id:"display"}),"Display"),(0,a.kt)("p",null,"The contents of the framebuffer is what is ultimately transferred to and seen on the physical display.\nTherefore it is very common to have the same pixel width and height of the framebuffer and the display."),(0,a.kt)(n.Z,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",noShadow:"true",mdxType:"Figure"},"24 bpp framebuffer contents and resulting display"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},"See the section on ",(0,a.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"display technologies")," to learn more on different display types."),(0,a.kt)("h2",h({},{id:"location-of-framebuffer"}),"Location of framebuffer"),(0,a.kt)("p",null,"One oversimplified view of a microcontroller based graphics system is here."),(0,a.kt)(n.Z,{imageSource:"/img/basic-concepts/simplified-graphics-system.png",noShadow:!0,width:"400",mdxType:"Figure"},"Oversimplified view of graphics system"),(0,a.kt)("p",null,"A framebuffer can be placed either internally in the MCU or in external RAM."),(0,a.kt)(n.Z,{imageSource:"/img/basic-concepts/framebuffer-placement.png",noShadow:"true",width:"600",mdxType:"Figure"},"Possible locations of framebuffer"),(0,a.kt)("p",null,"Each possible location has potential benefits and drawbacks."),(0,a.kt)("h3",h({},{id:"internal-ram"}),"Internal RAM"),(0,a.kt)("p",null,"Placing the framebuffer in RAM internal to the MCU makes the read and write access to the framebuffer\nas fast as possible. This means that your TouchGFX application will run as smooth as possible.\nConversely, internal RAM is a very scarce resource and one that is used by many\nparts of a system, therefore occupying a large part of this with a framebuffer might be infeasible."),(0,a.kt)("p",null,"If feasible, having a framebuffer in internal RAM, could reduce the overall cost of the system as\nno additional RAM is needed."),(0,a.kt)("h3",h({},{id:"external-ram"}),"External RAM"),(0,a.kt)("p",null,"If the system has external RAM, placing the framebuffer here is an alternative to placing it in internal RAM.\nThe read and write access to external RAM will typically be slower than to the internal RAM,\nbut the amount of external RAM will typically be much larger. Therefore this is sometimes the only viable solution."),(0,a.kt)("p",null,"The MCU might have capabilities, like caching, that makes access to external RAM faster.\nSee the section on ",(0,a.kt)("a",h({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU")," for details."),(0,a.kt)("h3",h({},{id:"display-with-embedded-ram"}),"Display with embedded RAM"),(0,a.kt)("p",null,'Depending on the type of display in the system there might be memory embedded on the display.\nThis memory holds the contents of the "physical" pixels of the display.\nHaving this pixel memory in the display implies that the MCU can be idle while the display is still alive.'),(0,a.kt)("p",null,"Placing a TouchGFX framebuffer in the RAM of the display is not possible, as the memory of the display is not memory mapped and is not intended nor suitable for random pixel reads or writes.\nInstead TouchGFX places the framebuffer in internal or external RAM and transfers this to the display RAM when appropriate."),(0,a.kt)("h2",h({},{id:"amount-of-framebuffers"}),"Amount of framebuffers"),(0,a.kt)("p",null,"TouchGFX can use one, multiple, or less than one framebuffer in the application.\nThe amount of framebuffers might impact the visual appearance, performance and memory consumption of the application."),(0,a.kt)("h3",h({},{id:"one-framebuffer"}),"One framebuffer"),(0,a.kt)("p",null,"One framebuffer is enough to hold precisely all pixels that are to be transferred to the display.\nOne framebuffer (at least) is needed when the display has no display RAM on board.\nIn this case one framebuffer is ideal when the complexity of the displayed graphics does not induce any visual artifacts."),(0,a.kt)("h3",h({},{id:"more-than-one-framebuffer"}),"More than one framebuffer"),(0,a.kt)("p",null,"In TouchGFX, having multiple framebuffers means having two framebuffers. One framebuffer is used for writing the next resulting image, the other framebuffer is used for transferring to the display.\nThis implies that no visual artifacts, e.g. tearing, will appear."),(0,a.kt)("h3",h({},{id:"less-than-one-framebuffer"}),"Less than one framebuffer"),(0,a.kt)("p",null,"Having less than one framebuffer in general implies that"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"less memory is consumed"),(0,a.kt)("li",{parentName:"ul"},"more drawing operations will be performed"),(0,a.kt)("li",{parentName:"ul"},"more transfers to display needed")),(0,a.kt)("p",null,"In TouchGFX less than one framebuffer is denoted a partial framebuffer. The partial framebuffer scheme is available only for displays with display RAM."),(0,a.kt)("h2",h({},{id:"memory-consumption"}),"Memory consumption"),(0,a.kt)("p",null,"The amount of colors and the number of pixels in the framebuffer determines the memory consumed by the framebuffer."),(0,a.kt)("p",null,"In general the amount of memory used by a framebuffer is\n",(0,a.kt)("strong",{parentName:"p"}," width ","*"," height ","*"," color depth in bits / 8 ")," bytes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:"right"}),"Resolution (pixels)"),(0,a.kt)("th",h({parentName:"tr"},{align:"right"}),"Colors (bpp)"),(0,a.kt)("th",h({parentName:"tr"},{align:"right"}),"Calculation"),(0,a.kt)("th",h({parentName:"tr"},{align:"right"}),"Memory consumed (byte)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"800x480"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"16 bpp"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"800 ","*"," 480 ","*"," 16 / 8"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"768.000 B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"480x272"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"24 bpp"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"480 ","*"," 272 ","*"," 24 / 8"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"391.680 B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"100x100"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"8 bpp"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"100 ","*"," 100 ","*","  8 / 8"),(0,a.kt)("td",h({parentName:"tr"},{align:"right"}),"10.000 B")))),(0,a.kt)("p",null,"When having more than one framebuffer the amount of memory consumed will be correspondingly larger. For example when having a double buffering scheme, using two framebuffers, will consume twice the amount of memory."),(0,a.kt)("p",null,"When having less than one framebuffer the amount of memory is explicitly allocated and controlled by the application. The memory consumption is therefore completely customizable, but be warned that using too little will harm the overall graphics performance."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,"The STM32 ",(0,a.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC")," display controller document has further details on framebuffers")))}w.isMDXComponent=!0}}]);