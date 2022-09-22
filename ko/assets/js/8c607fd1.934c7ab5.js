"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4035],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class o extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var a=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,o.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children))}},61396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return b}});var a=n(3905),o=n(44035),i=n(22425),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&f(e,n,t[n]);return e};const h={id:"using-binary-fonts",title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8"},sidebar:"docs",previous:{title:"\ub3d9\uc801 \ube44\ud2b8\ub9f5",permalink:"/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"\ud3f0\ud2b8 \uce90\uc2f1",permalink:"/ko/docs/development/ui-development/touchgfx-engine-features/font-cache"}},y={},b=[{value:"\ud3f0\ud2b8 \ubc0f \ud14d\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4",id:"the-font-and-text-system-classes",level:2},{value:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc0ac\uc6a9",id:"using-binary-fonts",level:2},{value:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud3f0\ud2b8 \ubcc0\ud658 \ub3c4\uad6c \uad6c\uc131\ud558\uae30",id:"configuring-the-font-converter-to-generate-binary-fonts",level:3},{value:"\uc218\ub3d9 \uad6c\uc131",id:"manual-configuration",level:3},{value:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc124\uce58",id:"installing-the-binary-font",level:3},{value:"\ud3f0\ud2b8 \ub9ac\uc14b\ud558\uae30",id:"resetting-a-font",level:3},{value:"Generating binary fonts in another project",id:"generating-binary-fonts-in-another-project",level:2}],v={toc:b};function k(e){var t,n=e,{components:r}=n,f=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},v),f),l(t,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. The first section contains some in-depth information about the font and text system in TouchGFX that can be beneficial to understand when working with binary fonts. The second section explains how to use binary fonts."),(0,a.kt)("p",null,"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub294 \ud3f0\ud2b8 \uc815\ubcf4\ub97c \ucef4\ud30c\uc77c\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158(",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),"\uc758 .cpp \ud30c\uc77c)\uc5d0 \uc5f0\uacb0\ud558\ub294 \uae30\uc874 \ubc29\uc2dd\uc744 \ub300\uccb4\ud560 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. The main advantages of this approach is to get a smaller application binary and get flexibility in form of providing different sets of fonts with your devices. For example you can pack the Chinese font with devices going to China, and the Japanese font with devices going there.  The drawback of this approach is that the whole binary font needs to be loaded to RAM (or memory-mapped flash) which can be a problem if the font is large."),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ud3f0\ud2b8\ub97c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ud588\uc744 \ub54c\uc758 \uac00\uc7a5 \ud070 \uc774\uc810\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud14d\uc2a4\ud2b8\uc640 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc744 \ub54c \ud56d\uc0c1 \uc790\ub3d9\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucd94\uac00\ub41c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc0ac\uc6a9\ubc95\uc774 \ub9e4\uc6b0 \uc27d\uace0 \uc548\uc804\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud3f0\ud2b8\ub85c \uc778\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \ucee4\uc9c8 \uc218 \uc788\ub2e4\ub294 \uac83\uc774 \ub2e8\uc810\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",d({},{id:"the-font-and-text-system-classes"}),"\ud3f0\ud2b8 \ubc0f \ud14d\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4"),(0,a.kt)("p",null,"TouchGFX\ub294 \uae30\ubcf8 \uad6c\uc131\uc77c \ub54c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub4e0 \ud14d\uc2a4\ud2b8\uc640 \ud3f0\ud2b8\uc5d0 .cpp \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\ub4e4\uc740 \ucef4\ud30c\uc77c\ub41c \ud6c4, \uc0dd\uc131\ub41c UI \ubc0f \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"When you show a text on the UI with e.g. a TextArea, you reference the text with a TypedTextId. This TypedTextId is used by the Widgets to find the actual letters in the text. The Widgets will access the texts through the ",(0,a.kt)("em",{parentName:"p"},"touchgfx::Texts")," class in ",(0,a.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"."),(0,a.kt)("p",null,"\ud14d\uc2a4\ud2b8 \ud074\ub798\uc2a4\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac01 \uc5b8\uc5b4\uc758 \ubc88\uc5ed \ud14c\uc774\ube14\uc744 \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \ubc30\uc5f4\ub41c \ud3ec\uc778\ud130 \ubc30\uc5f4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubc88\uc5ed \ud14c\uc774\ube14\uc774\ub780 \uc6d0\uce59\uc801\uc73c\ub85c \ud574\ub2f9 \uc5b8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc744 \ubaa8\uc544 \ub193\uc740 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"\ud14d\uc2a4\ud2b8\ub97c \ud2b9\uc815 \uc5b8\uc5b4\ub85c \ub9e4\ud551\ud558\uae30"),(0,a.kt)("p",null,"TouchGFX\ub294 \uc774 \ud14c\uc774\ube14\uc744 \ud1b5\ud574 \uc120\ud0dd\ud55c \uc5b8\uc5b4\uc5d0\uc11c \uc9c0\uc815\ub41c \ud14d\uc2a4\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"The tables are regenerated whenever you change a text in TouchGFX Designer or directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"texts.xml")," file and generate your application."),(0,a.kt)("p",null,"Before we can draw the text on the screen we need to know which font to use for the text. This mapping between texts and fonts is controlled by the TypedTextDatabase class found in (",(0,a.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),")."),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Texts \ud0ed\uc5d0\uc11c \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c, \uc791\uc131 \ubc29\ud5a5(Left-to-right \ub610\ub294 Right-to-left), \uac01 \ud14d\uc2a4\ud2b8 \uc815\ub82c(Left, Right, Center)\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uc640 \uc21c\uc11c \ubc0f \uc815\ub82c\uc740 \uac01 \ud14d\uc2a4\ud2b8 \ubc88\uc5ed\ub9c8\ub2e4 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \uc124\uc815\ud55c \uc815\ubcf4\ub294 \uac01 \uc5b8\uc5b4\ubcc4 \ud14c\uc774\ube14\uc5d0 \ucef4\ud30c\uc77c\ub429\ub2c8\ub2e4. This makes it easy for TouchGFX to find out what font to use for a given text, how to align it, and in what order to  write the letters."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",noShadow:"true",width:"600",mdxType:"Figure"},"\uc5b8\uc5b4\ubcc4 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c \uc815\ubcf4"),(0,a.kt)("p",null,"\uc704 \uadf8\ub9bc\uc5d0\uc11c TypedTextData \ud14c\uc774\ube14\uc5d0\ub294 \uc138 \uac1c\uc758 \ubc30\uc5f4\uc744 \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \uc788\ub294\ub370, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac01 \uc5b8\uc5b4\ub9c8\ub2e4 \ud558\ub098\uc529 \ucd1d \uc138 \uac1c\uc785\ub2c8\ub2e4. Each of the arrays have 3 elements, one for each text in the system. Each element describes a font, a reading order, and the alignment. We see that in this example the texts use the same font in the three languages, but the texts use different fonts (F1 or F2). The Fonts table has two pointers because two fonts are used in the application."),(0,a.kt)("p",null,"TouchGFX\uac00 \uc2a4\ud06c\ub9b0\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \uadf8\ub9ac\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 TypedTextData\uc5d0\uc11c \uc9c0\uc815\ub41c \ud14d\uc2a4\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4. This data contains the font index, letter order (LTR/RTL), and the horizontal alignment (Left, Right, Center) of the text as specified in the TouchGFX Designer or the xml document. TouchGFX\ub294 TypedTextData(F1 \ub610\ub294 F2)\uc758 \ud3f0\ud2b8 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc62c\ubc14\ub978 \ud14d\uc2a4\ud2b8 \ud3f0\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud3f0\ud2b8\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub418\uba74 \uc774 \ubaa8\ub4e0 \uacfc\uc815\uc774 \uc790\ub3d9\uc73c\ub85c \uc77c\uc5b4\ub0a9\ub2c8\ub2e4."),(0,a.kt)("h2",d({},{id:"using-binary-fonts"}),"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc0ac\uc6a9"),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud3f0\ud2b8\uc640 \ubb38\uc790\uac00 \ub9ce\uace0 \ub2e4\uc591\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \uc5c4\uccad\ub098\uac8c \ucee4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX\ub294 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \uc904\uc774\uae30 \uc704\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc9c0\ub9cc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ubcc4\ub3c4\ub85c \ud30c\uc77c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4. These files can be loaded and provided to TouchGFX by the application at runtime. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc608\ub97c \ub4e4\uc5b4 SD \uce74\ub4dc \uac19\uc740 \uc678\uc7a5 \uc800\uc7a5 \uc7a5\uce58\uc5d0\uc11c \ud3f0\ud2b8\ub97c \ub85c\ub4dc\ud558\uac70\ub098, \uc778\ud130\ub137\uc5d0\uc11c \ud3f0\ud2b8\ub97c  \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud3f0\ud2b8\ub97c \ub85c\ub4dc\ud558\uba74 TouchGFX\uc5d0\uac8c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \ud3f0\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0 \uc124\uce58\ud560\uc9c0 \uc5ec\ubd80\ub97c \ubb3c\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\ud3f0\ud2b8 \ud14c\uc774\ube14\uc5d0 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc124\uce58\ud558\uae30"),(0,a.kt)("p",null,"Here the built-in Font2 is replaced by the binary font loaded by the application. \ub530\ub77c\uc11c \uc5f0\uacb0\ub41c Font2\ub294 \uc774\uc81c TouchGFX\uc5d0\uc11c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"Note that nothing changed in the text tables. These still refer to the same fonts (F1 and F2) by index."),(0,a.kt)("h3",d({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud3f0\ud2b8 \ubcc0\ud658 \ub3c4\uad6c \uad6c\uc131\ud558\uae30"),(0,a.kt)("p",null,'\ud3f0\ud2b8 \ubcc0\ud658 \ub3c4\uad6c\ub294 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \uad6c\uc131\ud574\uc57c \ud558\ub294\ub370, TouchGFX Designer\uc5d0\uc11c \uc774\ub97c \uc27d\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc774 Config \ud0ed\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec "Text Configuration"\uc744 \uc120\ud0dd\ud55c \ub2e4\uc74c "Binary font files"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",mdxType:"Figure"},"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc120\ud0dd\ud558\uae30"),(0,a.kt)("p",null,"When you regenerate the code, TouchGFX will generate binary fonts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/")," folder, and empty fonts in the normal files in ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"."),(0,a.kt)("p",null,"The generated code will configure TouchGFX to use the empty font. The application is required to install the binary font at runtime."),(0,a.kt)("h3",d({},{id:"manual-configuration"}),"\uc218\ub3d9 \uad6c\uc131"),(0,a.kt)("p",null,"TouchGFX Designer\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,a.kt)("em",{parentName:"p"},"application.config"),' \ud30c\uc77c\uc758 text_configuration \uad6c\uac04\uc5d0 \uc788\ub294 "binary_fonts"\ub97c \u201cyes\u201d\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.'),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,a.kt)("p",null,"\uc774\uc81c \ub2e4\uc74c \ubc88\uc5d0 \uc790\uc0b0\uc744 \uc0dd\uc131\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin")," \ud3f4\ub354\uc5d0 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",d({},{id:"installing-the-binary-font"}),"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc124\uce58"),(0,a.kt)("p",null,"Before TouchGFX can use a binary font the font data must be made available in addressable memory like RAM or QSPI flash (where it can be directly accessed through a pointer). Typically this involves copying the data from a file or block storage like emmc flash. This can also happen during production where the binary font is flashed to a predefined address in a memory-mapped flash."),(0,a.kt)("p",null,"When the application has loaded the binary font to memory (if not available already), the application must create and install a ",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryFont")," object referring the data in TouchGFX. After this, TouchGFX will use that font and not the compiled in font."),(0,a.kt)("p",null,"The binary font needs to be installed before it is used to draw the text that refers to the font, but it does not need to be installed immediately after booting. The ",(0,a.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)")," constructor in ",(0,a.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp")," can be used to install fonts. This constructor is executed once before anything is drawn."),(0,a.kt)("p",null,"Fonts can also be installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," methods. This is useful if you have a font that is only used in a specific screen. The font can then be un-installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDownScreen()")),(0,a.kt)("p",null,"Here is an example of loading a binary font from a file-system to internal RAM:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,a.kt)("p",null,"\ud30c\uc77c\uc744 \uc5f4\uace0 \ub370\uc774\ud130\ub97c \uc77d\ub294 \ucf54\ub4dc\ub294 \uc0ac\uc6a9\ud558\ub294 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uacfc \uc6b4\uc601 \uccb4\uc81c\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. The basic steps are to make the font data available in memory, initialize a BinaryFont object with a pointer to the data, and finally pass the BinaryFont object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedTextDatabase")," of TouchGFX."),(0,a.kt)("p",null,"After the call to ",(0,a.kt)("em",{parentName:"p"},"setFont")," TouchGFX will use the binary font to draw text on the screen instead of the compiled in font (DEFAULT)."),(0,a.kt)("h3",d({},{id:"resetting-a-font"}),"\ud3f0\ud2b8 \ub9ac\uc14b\ud558\uae30"),(0,a.kt)("p",null,"\uac04\ud639 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub2e4\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub41c \uc6d0\ubcf8 \ud3f0\ud2b8\ub85c \ub3cc\uc544\uac00\uc57c \ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\ub294\ub370, \uc608\ub97c \ub4e4\uba74 \uc5b8\uc5b4\ub97c \ubcc0\uacbd\ud558\uba74\uc11c \uae30\ubcf8 \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c\uac00 \uadf8\ub807\uc2b5\ub2c8\ub2e4. \uc774\ub54c\ub294 TypedTextDatabase\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"resetFont()")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud3f0\ud2b8 \ud3ec\uc778\ud130\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ub418\ub294 \ud3f0\ud2b8\ub97c \uac00\ub9ac\ud0a4\ub3c4\ub85d \ub9ac\uc14b\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,a.kt)("p",null,"\uc704 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0c8 \ud3f0\ud2b8\ub97c \ud560\ub2f9\ud558\uac70\ub098, \uadf8 \ubc16\uc5d0 \ub2e4\ub978 \ubaa9\uc801\uc73c\ub85c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uc5d0\uc11c \ucc28\uc9c0\ud558\uace0 \uc788\ub294 \uba54\ubaa8\ub9ac\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("h2",d({},{id:"generating-binary-fonts-in-another-project"}),"Generating binary fonts in another project"),(0,a.kt)("p",null,"In some cases you want to have both normal fonts and binary fonts in a project. For example you want to have English letters in a normal compiled-in font, but Chinese and Japanese characters in binary fonts for optional inclusion in the device. This setup is not configurable in TouchGFX Designer."),(0,a.kt)("p",null,"In this case it is advised to create two TouchGFX projects. In the first project (your normal application) you have all your application code and UI with normal fonts. In the second project you have only enough texts (or wildcard characters) to generate the binary fonts."),(0,a.kt)("p",null,'In the first project, you deselect "Binary font files". In the second project you select "Binary font files".'),(0,a.kt)("p",null,"When you generate code in the second TouchGFX project the binary fonts are generated. The binary fonts can then be copied to the first project (in a folder of your convenience), and be used in the code as shown above."))}k.isMDXComponent=!0}}]);