"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,h=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,c=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:c,target:"_blank"},a.createElement("img",{width:n,height:o,src:c})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:c,target:"_blank"},a.createElement("img",{width:n,height:o,src:c})),a.createElement("p",null,e.children))}},19378:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return k}});var a=n(3905),r=n(44035),o=n(22425),c=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&s(e,n,t[n]);return e};const h={id:"font-cache",title:"\ud3f0\ud2b8 \uce90\uc2f1"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/font-cache",id:"development/ui-development/touchgfx-engine-features/font-cache",title:"\ud3f0\ud2b8 \uce90\uc2f1",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/font-cache",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/touchgfx-engine-features/font-cache",draft:!1,tags:[],version:"current",frontMatter:{id:"font-cache",title:"\ud3f0\ud2b8 \uce90\uc2f1"},sidebar:"docs",previous:{title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"},next:{title:"\ubc14\uc774\ub108\ub9ac \ubc88\uc5ed",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"}},v={},k=[{value:"\ud3f0\ud2b8 \uce90\uc2f1",id:"font-caching",level:2},{value:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub85c \ud3f0\ud2b8 \uce90\uc2dc \uc0ac\uc6a9\ud558\uae30",id:"using-the-font-cache-in-application-code",level:2},{value:"\ubb38\uc790 \uce90\uc2f1",id:"caching-letters",level:2},{value:"\ud569\uc790(Ligature) \uce90\uc2f1",id:"caching-ligatures",level:2},{value:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9",id:"memory-usage",level:2},{value:"GSUB \ud14c\uc774\ube14 \uce90\uc2f1",id:"caching-gsub-tables",level:2},{value:"\ud3f0\ud2b8 \ud30c\uc77c \ub9ac\ub354 \uad6c\ud604\ud558\uae30",id:"implementing-the-font-file-reader",level:2}],b={toc:k};function y(e){var t,n=e,{components:c}=n,s=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},b),s),i(t,l({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX\uc5d0\uc11c \ud3f0\ud2b8 \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud574 \uc774\uc9c4 \ud3f0\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba3c\uc800 ",(0,a.kt)("a",f({parentName:"p"},{href:"using-binary-fonts"}),"\uc774\uc9c4 \ud3f0\ud2b8")," \uc139\uc158\uc744 \uc77d\uc5b4\ubcf4\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",f({},{id:"font-caching"}),"\ud3f0\ud2b8 \uce90\uc2f1"),(0,a.kt)("p",null,"\uc55e\uc11c \uc774\uc9c4 \ud3f0\ud2b8\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \ud3f0\ud2b8 \uc804\uccb4\ub97c \uba54\ubaa8\ub9ac\uc5d0 \ub85c\ub4dc\ud574\uc57c \ud55c\ub2e4\uace0 \uc124\uba85\ud588\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud070 \uc911\uad6d\uc5b4 \ud3f0\ud2b8\ucc98\ub7fc \ud3f0\ud2b8\uac00 \ud070 \uacbd\uc6b0\uc5d0\ub294 \ubc14\ub78c\uc9c1\ud55c \ubc29\ubc95\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud3f0\ud2b8 \uce90\uc2f1\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc678\uc7a5 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ubb38\uc790\uc5f4\uc744 \ud45c\uc2dc\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubb38\uc790\ub9cc \ub85c\ub4dc\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4. \uc989, \uc804\uccb4 \ud3f0\ud2b8\ub97c \uc8fc\uc18c \uc9c0\uc815\uc774 \uac00\ub2a5\ud55c \ud50c\ub798\uc2dc\ub098 RAM\uc5d0 \uc800\uc7a5\ud558\uc9c0 \uc54a\uace0 \ub300\uc6a9\ub7c9 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c \ucef4\ud30c\uc77c\ub41c \ud3f0\ud2b8\uc778 Font2\uac00 \ud3f0\ud2b8 \uce90\uc2dc\ub85c \ub300\uccb4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 TouchGFX\uac00 Font2\ub97c \uc0ac\uc6a9\ud558\ub294 \ud14d\uc2a4\ud2b8\ub97c \uadf8\ub824\uc57c\ud560 \ub54c \ud3f0\ud2b8 \ud14c\uc774\ube14\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"CachedFont")," \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\ub97c \ucc3e\uc2b5\ub2c8\ub2e4. \uc774 \ud2b9\uc218 \ud3f0\ud2b8\ub294 FontCache \uac1d\uccb4\uc5d0\uc11c \ud574\ub2f9\ud558\ub294 \ubb38\uc790\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\uce90\uc2f1\ub41c \ud3f0\ud2b8 \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"CachedFont\ub294 \uc5f0\uacb0\ub41c \ud3f0\ud2b8(\uc704\uc758 Font2)\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uc640 \ud568\uaed8 \uc124\uc815\ub429\ub2c8\ub2e4. TouchGFX\uac00 CachedFont\uc5d0\uac8c \ud2b9\uc815 \ubb38\uc790\ub97c \uc694\uccad\ud558\uba74 CachedFont\uac00 \uba3c\uc800 \ub300\uccb4\ud558\ub294 \uc77c\ubc18 \ud3f0\ud2b8(Font2)\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uc774 \ud3f0\ud2b8\ub294 \ube48 \ud3f0\ud2b8\uc77c \uc218 \uc788\uc9c0\ub9cc, \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ubb38\uc790\uac00 \ud3ec\ud568\ub41c \u201c\uc77c\ubc18\u201d \ud3f0\ud2b8\uac00 \ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud3f0\ud2b8\uc5d0 \ud544\uc694\ud55c \ubb38\uc790\uac00 \uc5c6\uc73c\uba74 CachedFont\uac00 FontCache\ub97c \ubcf4\uace0 \ud574\ub2f9 \ubb38\uc790\uac00 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub85c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc77c\ubc18 \ud3f0\ud2b8\uc5d0\uc11c \uc774\ubbf8 \ucc3e\uc544\ub0b8 \ubb38\uc790\ub294 \uce90\uc2f1\ud560 \ud544\uc694\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \uc6d0\ub9ac\ub294 \uce90\uc2f1\ud574\uc57c \ud560 \ubb38\uc790 \uc218\ub97c \ucd5c\uc18c\ud654\ud558\ub294 \ud6a8\uacfc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"using-the-font-cache-in-application-code"}),"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub85c \ud3f0\ud2b8 \uce90\uc2dc \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 CachedFont\ub97c \uc124\uce58\ud558\ub824\uba74 \uba3c\uc800 FontCache, \uba54\ubaa8\ub9ac \ubc84\ud37c, \uadf8\ub9ac\uace0 \ud30c\uc77c \uc2dc\uc2a4\ud15c \ub9ac\ub354 \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb\nFontCache fontCache;\nCachedFont cachedFont;  //Cached Font object\nFileDataReader reader;  //Filesystem reader object\n")),(0,a.kt)("p",null,"FontCache\uac00 \ubc84\ud37c\uc640 \ub9ac\ub354\uc5d0 \uc5f0\uacb0\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//setup the font cache with buffer and size; and file reader object\nfontCache.setMemory(fontdata, 5120);\nfontCache.setReader(&reader);\n")),(0,a.kt)("p",null,"\uc774\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud3f0\ud2b8 \uce90\uc2dc\ub97c \uc124\uc815\ud558\uace0, CachedFont\ub97c \ucd08\uae30\ud654\ud558\uc5ec TouchGFX\ub85c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud3f0\ud2b8 \uce90\uc2dc\uc5d0\uc11c CachedFont \uac1d\uccb4\ub97c \ucd08\uae30\ud654\ud558\ub824\uba74 TextId\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. TextId\ub294 CachedFont\uac00 \uac00\ub9ac\ucf1c\uc57c \ud560 \ud3f0\ud2b8\ub97c \uc870\ud68c\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud3f0\ud2b8\ub97c \uc548\uc2ec\ud558\uace0 \ub300\uccb4\ud558\uc5ec \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//initialize the cachedFont object to the font used by T_SINGLEUSEID1\nTypedText text = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont);\n\n//replace the linked in font in TouchGFX with cachedFont\nTypedTextDatabase::setFont(DEFAULT, &cachedFont);\n")),(0,a.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc5b4\ub514\ub4e0\uc9c0 \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uce90\uc2f1\ub41c \ud3f0\ud2b8\uac00 \ud2b9\uc815 View\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub41c\ub2e4\uba74 \ud574\ub2f9 View\uac00 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud558\uae30\uc5d0 \uc801\ud569\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"caching-letters"}),"\ubb38\uc790 \uce90\uc2f1"),(0,a.kt)("p",null,"\ud3f0\ud2b8 \uce90\uc2dc\uac00 \uc544\uc9c1 \ube48 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ubb38\uc790\ub97c \ud45c\uc2dc\ud558\ub824\uba74 \uba3c\uc800 \ud574\ub2f9 \ubb38\uc790\ub97c \ud3f0\ud2b8 \uce90\uc2dc\uc5d0\uc11c \uc77d\uc5b4\uc640\uc57c \ud569\ub2c8\ub2e4. \uadf8 \ubc29\ubc95\uc740 \uc720\ub2c8\ucf54\ub4dc \ubc30\uc5f4(\ubb38\uc790\uc5f4)\uc744 \ud3f0\ud2b8 \uce90\uc2dc\ub85c \uc804\ub2ec\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\uc5d0\uc11c\ub294 T_SINGLEUSEID1\uc5d0\uc11c \ud14d\uc2a4\ud2b8\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheString(text, str);\n")),(0,a.kt)("p",null,"\ud3f0\ud2b8 \uce90\uc2dc\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," \ubc30\uc5f4\uc5d0\uc11c \ucc3e\uc740 \ubb38\uc790\ub97c \ub9ac\ub354 \uac1d\uccb4\ub97c \ud1b5\ud574 \ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc77d\uc5b4\uc628 \uc720\ub2c8\ucf54\ub4dc\ub294 TextId ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," \uc778\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud3f0\ud2b8\ub85c \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc815\ud655\ud55c \ud30c\uc77c\uc5d0\uc11c \ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \ub9ac\ub354 \uac1d\uccb4\ub97c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",f({},{id:"caching-ligatures"}),"\ud569\uc790(Ligature) \uce90\uc2f1"),(0,a.kt)("p",null,"\ud45c\uc2dc\ud558\uae30 \uc804\uc5d0 \uc5f0\uc18d\ub418\ub294 \uc720\ub2c8\ucf54\ub4dc\ub97c \ub2e4\ub978 \uc720\ub2c8\ucf54\ub4dc\ub85c \ubcc0\ud658\ud558\ub294 \uc5b8\uc5b4(\uc544\ub78d\uc5b4, \ud78c\ub514\uc5b4 \ub4f1)\uc758 \uacbd\uc6b0 \uc704\uc758 \ubc29\ubc95\uc740 \ud6a8\uacfc\uc801\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc6d0\ubcf8 \uc720\ub2c8\ucf54\ub4dc\ub9cc \uce90\uc2f1\ud560 \ubfd0 \ubcc0\ud658 \ud6c4 \ud45c\uc2dc\ub418\ub294 \uc720\ub2c8\ucf54\ub4dc\ub294 \uce90\uc2f1\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc544\ub798 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uba74 \uc9c0\uc815\ub41c \uc720\ub2c8\ucf54\ub4dc\ub97c \ubcc0\ud658\ud55c \ud6c4 \ud544\uc694\ud55c \uc720\ub2c8\ucf54\ub4dc\ub97c \uce90\uc2f1\ud569\ub2c8\ub2e4(\ubcc0\ud658 \ud6c4)."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1 after conversion\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheLigatures(cachedFont, text, str);\n")),(0,a.kt)("h2",f({},{id:"memory-usage"}),"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9"),(0,a.kt)("p",null,"\ud3f0\ud2b8 \uce90\uc2dc\ub294 \ud604\uc7ac \uc0ac\uc6a9\ub41c \uba54\ubaa8\ub9ac \uc6a9\ub7c9\uc744 \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());\n')),(0,a.kt)("h2",f({},{id:"caching-gsub-tables"}),"GSUB \ud14c\uc774\ube14 \uce90\uc2f1"),(0,a.kt)("p",null,'\uc77c\ubd80 \ud3f0\ud2b8\ub294 \ub80c\ub354\ub9c1 \uc2dc GSUB \ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc911\ub3d9 \uc5b8\uc5b4\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc77c\ubd80 \ud3f0\ud2b8(Devanagari \ud3f0\ud2b8 \ub4f1)\uac00 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. GSUB \ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud558\uba74 \ud3f0\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ubb38\uc790 \uc21c\uc11c\ub97c \uc870\uc815\ud558\uc5ec \uc5f0\uc18d\ub418\ub294 \ubb38\uc790\ub97c \ub2e4\ub978 "\uacb0\ud569" \ubb38\uc790\ub85c \ub300\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\ud3f0\ud2b8 \uce90\uc2dc\ub294 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc774 GSUB \ud14c\uc774\ube14\uc744 \ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\ub4dc\ub418\uc9c0 \uc54a\uc73c\uba74 GSUB \ud14c\uc774\ube14\uc744 \ud14d\uc2a4\ud2b8 \ub80c\ub354\ub9c1 \uc2dc\uc2a4\ud15c\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ud3f0\ud2b8\uac00 \uc62c\ubc14\ub974\uac8c \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uce90\uc2f1\ub41c \ud3f0\ud2b8\ub97c \ucd08\uae30\ud654\ud560 \ub54c \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc4\ub3c4\uc758 \uc778\uc218\ub97c \ucd94\uac00\ud558\uba74 GSUB \ud14c\uc774\ube14\uc774 \ub85c\ub4dc\ub429\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"//initialize the cachedFont and load the GSUB table\ntext = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont, true);\n")),(0,a.kt)("h2",f({},{id:"implementing-the-font-file-reader"}),"\ud3f0\ud2b8 \ud30c\uc77c \ub9ac\ub354 \uad6c\ud604\ud558\uae30"),(0,a.kt)("p",null,"\uc704 \uc608\uc81c \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 FileDataReader \ud074\ub798\uc2a4\ub294 \uc0ac\uc6a9\ud558\ub294 \uc6b4\uc601 \uccb4\uc81c\uc5d0 \ub530\ub77c \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 TouchGFX\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,'\ub2e4\uc74c\uc740 \uc77c\ubc18 "stdio" \ud638\ud658 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc744 \uc704\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4.'),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,13-13,17-17,21-21}","{5-5,13-13,17-17,21-21}":!0}),'class FileDataReader : public FontDataReader\n{\npublic:\n    virtual ~FileDataReader() { }\n    virtual void open()\n    {\n        fp = fopen("Font_verdana_20_4bpp.bin", "rb");\n        if (!fp)\n        {\n            touchgfx_printf("Unable to open font file!!!\\n");\n        }\n    }\n    virtual void close()\n    {\n        fclose(fp);\n    }\n    virtual void setPosition(uint32_t position)\n    {\n        fseek(fp, position, SEEK_SET);\n    }\n    virtual void readData(void* out, uint32_t numberOfBytes)\n    {\n        fread(out, numberOfBytes, 1, fp);\n    }\nprivate:\n    FILE* fp;\n};\n')),(0,a.kt)("p",null,"FileDataReader \ud074\ub798\uc2a4\ub294 FontCache.hpp\uc5d0\uc11c FontDataReader \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"FontCache.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{5-8}","{5-8}":!0}),"class FontDataReader\n{\npublic:\n    virtual ~FontDataReader() { }\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual void setPosition(uint32_t position) = 0;\n    virtual void readData(void* out, uint32_t numberOfBytes) = 0;\n};\n")))}y.isMDXComponent=!0}}]);