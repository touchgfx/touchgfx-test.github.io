"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8215],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),i=n(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class i extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var a=n(67294),i=n(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=l},62186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return N},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return w}});var a=n(3905),i=n(44035),r=n(93054),l=n(29415),o=n(39130),s=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&m(e,n,t[n]);return e};const f={id:"hardware-selection-display",title:"Display"},y=void 0,k={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-display",id:"development/hardware-selection/hardware-components/hardware-selection-display",title:"Display",description:"",source:"@site/docs/development/hardware-selection/hardware-components/hardware-selection-display.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-display",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-display",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-display",title:"Display"},sidebar:"docs",previous:{title:"MCU",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"},next:{title:"External Memories",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"}},v={},w=[{value:"Examples of Displays",id:"examples-of-displays",level:2},{value:"LCD-TFT",id:"lcd-tft",level:3},{value:"MIP",id:"mip",level:3},{value:"ePaper/eInk",id:"epapereink",level:3},{value:"Display Interface Overview",id:"display-interface-overview",level:2},{value:"Brightness and Backlight",id:"brightness-and-backlight",level:3},{value:"Viewing Position and Color Inversion",id:"viewing-position-and-color-inversion",level:3},{value:"Display Lifetime",id:"display-lifetime",level:3},{value:"Pixel density",id:"pixel-density",level:3},{value:"Dynamic color range",id:"dynamic-color-range",level:4},{value:"Anti-aliasing",id:"anti-aliasing",level:4},{value:"Environment",id:"environment",level:3},{value:"Touch / Non-touch displays",id:"touch--non-touch-displays",level:3},{value:"Capacitive Touch",id:"capacitive-touch",level:4},{value:"Resistive Touch",id:"resistive-touch",level:4},{value:"Non-touch",id:"non-touch",level:4},{value:"Displays with RAM",id:"displays-with-ram",level:3},{value:"Non-square pixels / Pixel aspect ratio",id:"non-square-pixels--pixel-aspect-ratio",level:3},{value:"Cover lense",id:"cover-lense",level:3}],b={toc:w};function N(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},b),m),d(t,p({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Products are getting richer with enhanced user experiences, embedding newer larger displays, and replacing older segment displays with low and high color displays."),(0,a.kt)("p",null,"This chapter focuses on some considerations that should be included when selecting the right display for your embedded GUI product."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/displays.png",noShadow:!0,mdxType:"Figure"},"Different types of displays"),(0,a.kt)(r.Z,{mdxType:"Note"},"Generally, TouchGFX runs on any kind of display, and is not dependent on display technologies, interfaces, viewing angles, brightness etc."),(0,a.kt)("h2",g({},{id:"examples-of-displays"}),"Examples of Displays"),(0,a.kt)("p",null,"Selecting the right display technology can be complicated as key factors in each display are different. The following chapter is high-level addressing the different technologies, and can hopefully help you in the right direction."),(0,a.kt)("p",null,"Each kind of display consists of rows and columns of pixels, which can be driven in different ways, having internal and/or external display controller and RAM for framebuffers. In some technologies, each pixel needs to be updated frequently compared to other technologies where this is not necessary, as updates only happens when something changes in the GUI."),(0,a.kt)("p",null,"There is a vast amount of different display technologies. Some of the most used display technologies are described in the following."),(0,a.kt)("h3",g({},{id:"lcd-tft"}),"LCD-TFT"),(0,a.kt)("p",null,"TFT stands for thin-film-transistor and is a variant of LCD displays with an active matrix. LCD-TFTs are widely used in embedded products as they are available in many different resolutions, sizes, interfaces, price ranges, etc."),(0,a.kt)("p",null,"Some variants of TFT-LCDs are TN and IPS panels. Examples of IPS TFT-LCDs, is the STM32F769 DISCO and STM32H747 DISCO, both running a 800*480 MIPI-DSI TFT IPS LCD display.\nExamples of TFT-LCD TN displays are the STM32F746G DISCO and STM32H7B3I-DK.\nBoth technologies come in different qualities, but some differences can be the color presentation and viewing angles, where IPS panels often are the best."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/display-layers.png",noShadow:!0,mdxType:"Figure"},"LCD-TFT layers example"),(0,a.kt)("h3",g({},{id:"mip"}),"MIP"),(0,a.kt)("p",null,"MIP means memory in pixels, which uses a pixel technology which only needs power/data when something changes on the screen. MIP displays are low power and runs low to full color GUIs."),(0,a.kt)("h3",g({},{id:"epapereink"}),"ePaper/eInk"),(0,a.kt)("p",null,"eInk displays are low color displays, ideal for applications with low power consumption needs, wide viewing angles, and easy readability. TouchGFX Implementer SDATAWAY demonstrates an eInk display running an TouchGFX application on a STM32F412 here: ",(0,a.kt)("a",g({parentName:"p"},{href:"https://www.touchgfx.com/cases/e-ink/"}),"https://www.touchgfx.com/cases/e-ink/")),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/e-ink.png",noShadow:!0,mdxType:"Figure"},"E-Ink"),(0,a.kt)("h2",g({},{id:"display-interface-overview"}),"Display Interface Overview"),(0,a.kt)("p",null,"The display is connected to the MCU via different types of interfaces. The display interfaces vary on different parameters, and the  section below addresses the graphics related parameters like number of pins needed, max bandwidth supporting different resolutions."),(0,a.kt)("p",null,"TouchGFX can use any display interface, and STM32 microcontrollers offer a wide range of display interfaces connecting to Motorola 6800, Intel 8080, SPI, RGB-TFT, and MIPI-DSI."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Interface"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"# of pins"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Target resolutions"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Max bandwidth"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Benefits"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Disadvantages"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"SPI"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"4*"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Up to 480*272"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"16 MHz"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Simple hardware interface, faster than I2C,"),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Parallel 8080/6800 (FMC)"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"8/16*"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Up to 480*272"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"RGB-TFT (LTDC)"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"8/18/24*"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Up to 1280*800"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"High performance, low cost"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"High pin count, parallel communication can cause EMC issues, can require higher clock freq")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"MIPI-DSI (LTDC)"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"4/10"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Up to 1280*800"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"80Mbps-1.5Gbps"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"High performance, low pin count,"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Complex protocols and drivers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"LVDS**"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"1366*768"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Low EMC/interference, high speed"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Bridge needed")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"*Additional pins can be needed for: touch, power, controls signals etc."),(0,a.kt)("li",{parentName:"ul"},"** a bridge is needed for interfacing with a LVDS display.")),(0,a.kt)("h3",g({},{id:"brightness-and-backlight"}),"Brightness and Backlight"),(0,a.kt)("p",null,"Brightness is often measured in candela/m\xb2. Backlights can be the most power consuming part of the display. In sunlight one would need around 600 cd/M2. Often higher brightness increases the temperature, minimizing the lifetime of the LEDs."),(0,a.kt)("h3",g({},{id:"viewing-position-and-color-inversion"}),"Viewing Position and Color Inversion"),(0,a.kt)("p",null,"When embedding a display into a product, it is important to anticipate and know which viewing positions the user can have. In some displays from certain viewing positions, a color inversion can happen. This means that installing the display in the right position, allowing the user to operate and experience the GUI while seeing the right colors designed by the graphics designer, can be tricky."),(0,a.kt)("p",null,"The color inversion can happen on TN panels. Adding a SWV film can help increasing viewing angles."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/viewing-position.png",mdxType:"Figure"},"Resulting colors from different viewing position"),(0,a.kt)("h3",g({},{id:"display-lifetime"}),"Display Lifetime"),(0,a.kt)("p",null,"The lifetime is defined as the time until the display reaches half brightness at 25 degrees. If your product has a long life cycle, then this parameter must be taken into consideration."),(0,a.kt)("h3",g({},{id:"pixel-density"}),"Pixel density"),(0,a.kt)("p",null,"Pixel density defines how many pixels are shown per inch or square inch. Choosing the right pixel density can depend on the expectations from the end user, environment, design needs etc. Putting this into perspective, a high-end mobile phone runs a 6.1\u201d 2340x1080 with a pixel density per square inch of 178,500, while a commonly used 5\u201d TFT display running 800x480 has 34.816 Pixels per square inch."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/pixel-density.png",noShadow:!0,mdxType:"Figure"},"Low, medium and high pixel density"),(0,a.kt)("p",null,"Some standard resolutions, display sizes and pixel densities measured in pixels per square inch (PPI",(0,a.kt)("sup",null,"2"),"):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"QVGA 320*240")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"2.4\u201d (27,777 PPI",(0,a.kt)("sup",null,"2"),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"3.5\u201d (13,061 PPI",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"WQVGA 480*272")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"4,3\u201d (16,462 PPI",(0,a.kt)("sup",null,"2"),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"5\u201d (12,175 PPI",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"HVGA 480*320")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"3.5\u201d (27,167 PPI",(0,a.kt)("sup",null,"2"),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"VGA 640*480")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"5,7\u201d (19,698 PPI",(0,a.kt)("sup",null,"2"),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"6.4 (15,625 PPI",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"WVGA 800*480")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"4\u201d (54,400 PPI",(0,a.kt)("sup",null,"2"),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"5\u201d (34,816 PPI",(0,a.kt)("sup",null,"2"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"WSVGA 1024*600")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"7\u201d (28,746 PPI",(0,a.kt)("sup",null,"2"),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"10,1\u201d (13,808 PPI",(0,a.kt)("sup",null,"2"),")")))),(0,a.kt)("p",null,"For some applications it can be difficult seeing any difference, unless the display is being looked at very closely. Examples of pixels densities are: STM32F476DISCO with 16,462 PPI",(0,a.kt)("sup",null,"2")," and STM32F769DISCO with 54,400 PPI",(0,a.kt)("sup",null,"2"),"."),(0,a.kt)("p",null,"The example above of different pixel densities can in some cases impact the dynamic color range and anti-aliasing:"),(0,a.kt)("h4",g({},{id:"dynamic-color-range"}),"Dynamic color range"),(0,a.kt)("p",null,"The dynamic color range is the ratio between two contrasting colors, like black and white. In the example above, the blue and white contains different levels of white and blue. The image on the left has lower pixel density, and the picture on the right has more pixels to show all the colors represented, creating a smoother transition between different colors and edges."),(0,a.kt)("h4",g({},{id:"anti-aliasing"}),"Anti-aliasing"),(0,a.kt)("p",null,"When the pixel density is too low, a staircase effect can appear. Using anti-aliasing in the application can smooth out these staircase edges in an image. When looking at the first two blue circles, the staircase effect appears, as the pixel density does not allow the display to represent enough pixels to have a high enough color range enabling high enough anti-aliasing."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/anti-aliasing.png",noShadow:!0,mdxType:"Figure"},"Anti-aliasing"),(0,a.kt)("h3",g({},{id:"environment"}),"Environment"),(0,a.kt)("p",null,"When deciding which display to use, the environment is a vital part to consider.\nSome questions to ask yourself are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is the display in direct sunlight?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is it being used in rugged environments where it needs to be impact resistent?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is it being handled by one wearing gloves?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Does it need vandal proofing?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is it being operated with physical buttons only?"))),(0,a.kt)("p",null,"Answering these questions will give you an better idea of which touch technology to select or even if touch is required."),(0,a.kt)(r.Z,{mdxType:"Note"},"TouchGFX runs on both touch and non-touch displays, and the TouchGFX GUI can be controlled by buttons, hand and voice gestures also."),(0,a.kt)("h3",g({},{id:"touch--non-touch-displays"}),"Touch / Non-touch displays"),(0,a.kt)("p",null,"There are different touch technologies available in the market today and some examples are: resistive, capacitive (surface, projected), SAW touch, infrared touch. This section will only address some of these technologies:"),(0,a.kt)("h4",g({},{id:"capacitive-touch"}),"Capacitive Touch"),(0,a.kt)("p",null,"This is one of the most popular touch technologies. It comes in two sensing technologies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Self capacitance is for single finger touch"),(0,a.kt)("li",{parentName:"ul"},"Mutual capacitance allowing multi touch but more challenged when exposed to water/moist (TouchGFX does not support multi touch).")),(0,a.kt)("p",null,"Most STM32 DISCO boards are using capacitive touch, some examples are the STM32H7B3I DISCO, STM32H750 DISCO, STM32F746G DISCO."),(0,a.kt)("h4",g({},{id:"resistive-touch"}),"Resistive Touch"),(0,a.kt)("p",null,"Resistive touch is a simple technology activated by mechanical pressure, and only requires ADC - or a simple touch controller. It is often low price due to maturity. The surface is more protected to scratches and tearing, so more difficult to vandal proof. It also has lower sunlight readability.\nThe STM32F429 DISCO board uses resistive touch, available with a TouchGFX application."),(0,a.kt)("h4",g({},{id:"non-touch"}),"Non-touch"),(0,a.kt)("p",null,"Often if the GUI is being controlled by buttons, just displaying images/video or controlled externally by another device, then adding touch to the product might not even be relevant. By not adding a touch layer to the display, this will decrease the price."),(0,a.kt)("h3",g({},{id:"displays-with-ram"}),"Displays with RAM"),(0,a.kt)("p",null,"Displays with either Motorla 6800, Intel 8080, SPI, or MIPI-DSI interfaces usually embed RAM (GRAM), which has the size of 1 full framebuffer. These types of displays can connect to the MCU via SPI, FMC or DSI-host(LTDC). A second RAM (framebuffer) is required externally to the display RAM and this can be in the MCU or in external RAM."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/gram-mipi.png",noShadow:!0,mdxType:"Figure"},"MIPI-DSI display"),(0,a.kt)("p",null,"In some cases the need of external RAM (external to the MCU) for storing the framebuffer is not needed, and thereby the available internal RAM in the MCU is used. If the MCU RAM is lower than 1 full framebuffer size, using the TouchGFX partial framebuffer feature is an option, allowing a very small framebuffer footprint."),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},"Read more in the ",(0,a.kt)(o.Z,{to:"../../scenarios/lowering-memory-usage-with-partial-framebuffer",mdxType:"Link"},"Partial Framebuffer section")),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/gram-spi.png",noShadow:!0,mdxType:"Figure"},"SPI display"),(0,a.kt)("h3",g({},{id:"non-square-pixels--pixel-aspect-ratio"}),"Non-square pixels / Pixel aspect ratio"),(0,a.kt)("p",null,"The most common pixel shape is square, but some displays use non-square pixels. Pixel ratio is the ratio between the width of a pixel and the height of a pixel. The aspect ratio using a square pixel with 100 pixel width and 100 pixel height is therefore 1/1. But non-square pixels result in a different pixel aspect ratio.\nIf a graphics designer does not take this into account, the displayed bitmaps may be stretched like the example below."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/display/pixel-aspect.png",noShadow:!0,mdxType:"Figure"},"Stretched bitmaps"),(0,a.kt)("h3",g({},{id:"cover-lense"}),"Cover lense"),(0,a.kt)("p",null,"As the display is the face of your embedded graphical user interface product, adding a cover lens could improve the look and feel. The cover lense can improve the design, scratch resistance, impact strength, colors, etc."))}N.isMDXComponent=!0}}]);