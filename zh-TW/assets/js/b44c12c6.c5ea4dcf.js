"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5674],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(n),s=i,g=d["".concat(c,".").concat(s)]||d[s]||u[s]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children))}},56398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return h}});var a=n(3905),i=n(44035),r=n(22425),l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&d(e,n,t[n]);return e};const g={id:"creating-dynamic-l8-images",title:"\u5275\u5efa\u52d5\u614bL8\u5716\u50cf"},f=void 0,y={unversionedId:"development/ui-development/scenarios/creating-dynamic-l8-images",id:"development/ui-development/scenarios/creating-dynamic-l8-images",title:"\u5275\u5efa\u52d5\u614bL8\u5716\u50cf",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/creating-dynamic-l8-images",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/scenarios/creating-dynamic-l8-images",draft:!1,tags:[],version:"current",frontMatter:{id:"creating-dynamic-l8-images",title:"\u5275\u5efa\u52d5\u614bL8\u5716\u50cf"},sidebar:"docs",previous:{title:"\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u6d88\u8017",permalink:"/touchgfx-test.github.io/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"},next:{title:"Scenarios",permalink:"/touchgfx-test.github.io/zh-TW/docs/category/scenarios-2"}},b={},h=[{value:"\u52d5\u614bL8\u5716\u50cf",id:"dynamic-l8-images",level:2},{value:"\u752824\u4f4d\u5143\u8abf\u8272\u677f\u5275\u5efa\u52d5\u614bL8\u5716\u50cf",id:"creating-a-dynamic-l8-image-with-24-bit-palette",level:3},{value:"\u5b58\u53d6\u8abf\u8272\u677f",id:"accessing-the-palette",level:3},{value:"\u52d5\u614bL8\u9ede\u9663\u5716\u7bc4\u4f8b",id:"dynamic-l8-bitmap-example",level:2},{value:"\u64cd\u4f5c\u8abf\u8272\u677f",id:"manipulating-the-palette",level:3}],v={toc:h};function k(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},v),d),p(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u7bc0\u4ecb\u7d39\u52d5\u614bL8\u5716\u50cf\u7684\u4f7f\u7528\uff0c\u7279\u5225\u662f\u5982\u4f55\u5275\u5efa\u8abf\u8272\u677f\u3002"),(0,a.kt)("p",null,"\u95b1\u8b80\u6b64\u8655\u7684",(0,a.kt)("a",s({parentName:"p"},{href:"../touchgfx-engine-features/dynamic-bitmaps"}),"\u52d5\u614b\u9ede\u9663\u5716"),"\u548c",(0,a.kt)("a",s({parentName:"p"},{href:"using-the-l8-image-format-to-reduce-memory-consumption"}),"L8\u5716\u50cf\u683c\u5f0f"),"\u3002"),(0,a.kt)("h2",s({},{id:"dynamic-l8-images"}),"\u52d5\u614bL8\u5716\u50cf"),(0,a.kt)("p",null,"\u52d5\u614bL8\u5716\u50cf\u7684\u5275\u5efa\u8207\u4efb\u4f55\u5176\u4ed6\u52d5\u614b\u9ede\u9663\u5716\u4e00\u6a23\uff0c\u5340\u5225\u5728\u65bc\u9084\u5fc5\u9808\u6307\u5b9a\u8981\u70ba\u9ede\u9663\u5716\u5275\u5efa\u7684\u8abf\u8272\u677f\u985e\u578b\u3002"),(0,a.kt)("p",null,"TouchGFX\u652f\u63013\u7a2e\u8abf\u8272\u677f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8abf\u8272\u677f")),(0,a.kt)("th",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_ARGB8888"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"32\u4f4d\u5143\uff0c\u7d05\u3001\u7da0\u3001\u85cd\u8272\u548c\u50cf\u7d20\u963f\u723e\u6cd5\u901a\u9053\u54048\u4f4d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB888"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u7d05\u3001\u7da0\u548c\u85cd\u8272\u54048\u4f4d\u5143\uff0c\u50cf\u7d20\u963f\u723e\u6cd5\u901a\u90530\u4f4d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB565"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"16\u4f4d\uff0c\u7d05\u3001\u7da0\u548c\u85cd\u8272\u5206\u5225\u70ba5\u4f4d\u30016\u4f4d\u5143\u548c5\u4f4d\u5143\uff0c\u50cf\u7d20\u963f\u723e\u6cd5\u901a\u90530\u4f4d")))),(0,a.kt)("h3",s({},{id:"creating-a-dynamic-l8-image-with-24-bit-palette"}),"\u752824\u4f4d\u5143\u8abf\u8272\u677f\u5275\u5efa\u52d5\u614bL8\u5716\u50cf"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u752824\u4f4d\u8abf\u8272\u677f\u5275\u5efa\u4e00\u5e45100x100\u50cf\u7d20L8\u9ede\u9663\u5716\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);\n")),(0,a.kt)("p",null,"\u6b64\u547c\u53eb\u5728\u9ede\u9663\u5716\u7de9\u5b58\u4e2d\u5206\u914d\u4e86100x100\u50cf\u7d20\u7684L8\u9ede\u9663\u5716\u548c24\u4f4d\u8abf\u8272\u677f\u3002 \u8abf\u8272\u677f\u5305\u542b\u52d5\u614b\u9ede\u9663\u5716\u7684256\u7a2e\u984f\u8272\uff0c\u4f46\u70ba\u4e86\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u7684\u6d6a\u8cbb\uff0c\u53ef\u4ee5\u8abf\u6574\u70ba\u9700\u8981\u7684\u6578\u91cf\u3002"),(0,a.kt)("h3",s({},{id:"accessing-the-palette"}),"\u5b58\u53d6\u8abf\u8272\u677f"),(0,a.kt)("p",null,"\u50cf\u7d20\uff08\u524d32\u4f4d\u5143\u5c0d\u9f4a\u4f4d\u5740\uff09\u5f8c\u9762\u4f9d\u6b21\u662f\u5305\u542bL8\u8abf\u8272\u677f\u683c\u5f0f\uff08\u4ee5\u5c0f\u7aef\u6a21\u5f0f\u4fdd\u5b58\uff09\u76842\u500b\u4f4d\u5143\u7d44\u3001\u5305\u542b\u8abf\u8272\u677f\u4e2d\u5c08\u6848\u6578\u91cf\u76842\u500b\u4f4d\u5143\u7d44\uff08\u4ee5 little endian \u4fdd\u5b58\uff09\u548c\u5be6\u969b\u8abf\u8272\u677f\u984f\u8272\u3002 \u9019\u610f\u5473\u8457\u8abf\u8272\u677f\u984f\u8272\u4f4d\u65bc\u50cf\u7d20\u5f8c\u97624\u500b\u4f4d\u5143\u7d44\u4e4b\u5f8c\uff0832\u4f4d\u5143\u5c0d\u9f4a\uff09\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u6307\u5411\uff08\u76ee\u524d\u70ba\u6b62\u672a\u521d\u59cb\u5316\uff09\u8abf\u8272\u677f\u7684\u6307\u6a19\uff0c\u5982\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"//Get a pointer to the bitmap data (pixels and palette)\nuint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n//1 byte pr pixel, round up to 32-bit\nuint32_t byteSize = 100*100;\nbyteSize = ((byteSize + 3) & ~3);\n\n//Palette size is saved in byte 2 and 3\nint palSize = (data[3] << 8) | data[2];\n\n//Palette starts four bytes after the pixels\nuint8_t* pal = (data + byteSize + 4);\n")),(0,a.kt)("h2",s({},{id:"dynamic-l8-bitmap-example"}),"\u52d5\u614bL8\u9ede\u9663\u5716\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u4f86\u770b\u4e00\u500b\u5275\u5efa\u52d5\u614bL8\u9ede\u9663\u5716\u548c\u64cd\u4f5c\u8abf\u8272\u677f\u7684\u5b8c\u6574\u7bc4\u4f8b\u3002 \u901a\u5e38\u4e0d\u6703\u5c0d\u4e00\u822c\u61c9\u7528\u9032\u884c\u8abf\u8272\u677f\u64cd\u4f5c\u3002 \u8a72\u7bc4\u4f8b\u7684\u76ee\u7684\u70ba\u63cf\u8ff0\u5982\u4f55\u5b58\u53d6\u548c\u751f\u6210\u8abf\u8272\u677f\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u4e00\u500b\u87a2\u5e55\uff0c\u5728\u80cc\u666f\u4e0a\u63d2\u5165\u4e00\u500b\u767d\u8272\u65b9\u6846\uff0c\u4e26\u63d2\u5165\u4e00\u5e45\u5716\u50cf\uff0c\u4f8b\u5982\u5728\u4f4d\u7f6e(x=140, y=8)\uff1a"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.png",mdxType:"Figure"},"\u5275\u5efa\u87a2\u5e55"),(0,a.kt)("p",null,"\u73fe\u5728\u751f\u6210\u7a0b\u5f0f\u78bc\u4e26\u6253\u958bScreen1View.cpp\u6587\u4ef6\u3002 \u6211\u5011\u5fc5\u9808\u5728",(0,a.kt)("em",{parentName:"p"},"setupScreen"),"\u4e2d\u63d2\u5165\u7a0b\u5f0f\u78bc\uff0c\u4ee5\u4fbf\u521d\u59cb\u5316\u9ede\u9663\u5716\u7de9\u5b58\u4e26\u5275\u5efa\u52d5\u614b\u9ede\u9663\u5716\u3002"),(0,a.kt)("p",null,"\u5275\u5efa\u4e00\u5e45200*256\u50cf\u7d20\u7684\u9ede\u9663\u5716\u3002 \u8a18\u4f4f\uff0cL8\u9ede\u9663\u5716\u4e2d\u7684\u6bcf\u500b\u50cf\u7d20\u70ba\u4e00\u500b\u4f4d\u5143\u7d44\u3002 \u6211\u5011\u5c0d\u5716\u50cf\u7684\u6bcf\u4e00\u884c\u4f7f\u7528\u4e0d\u540c\u984f\u8272\u3002 \u7b2c\u4e00\u884c\u70ba0\u865f\u8272\uff0c\u6700\u5f8c\u4e00\u884c\u70ba255\u865f\u8272\u3002"),(0,a.kt)("p",null,"\u7136\u5f8c\uff0c\u5c07\u8abf\u8272\u677f\u4e2d\u7684\u984f\u8272\u521d\u59cb\u5316\u3002 \u8a08\u7b97\u8abf\u8272\u677f\u7684\u8d77\u59cb\u4f4d\u5740\uff0c\u4e26\u8a2d\u7f6e256\u7a2e\u984f\u8272\u7684RGB\u503c\u3002 \u5728\u9019\u88e1\uff0c\u6211\u5011\u5275\u5efa\u7684\u984f\u8272\u5f9e\u7da0\u8272\u8b8a\u70ba\u7d05\u8272\u4e26\u518d\u6b21\u8b8a\u56de\u7da0\u8272\u3002"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#ifdef SIMULATOR\nuint32_t cacheBuffer[320*1024/4]; //simulate PSRAM\nuint16_t* psram = (uint16_t*)cacheBuffer;\n#else\nuint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers\n#endif\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    //Create one dynamic bitmap\n    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache\n    const uint16_t palSize = 256;\n    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);\n    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));\n\n    if (dynamicBitmap1 == BITMAP_INVALID)\n    {\n        touchgfx_printf("Unable to create dynamic bitmap\\n");\n    }\n    else\n    {\n        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n        uint8_t* pixel = data;\n        //make colored rows\n        for (int y = 0; y<256; y++)\n        {\n            for (int x = 0; x<200; x++)\n            {\n                *pixel++ = y;\n            }\n        }\n\n        uint32_t byteSize = 200*256;\n        byteSize = ((byteSize + 3) & ~3);\n\n        //Palette starts four bytes after the pixels\n        uint8_t* pal = (data + byteSize + 4);\n\n        //Make palette with 256 colors from green to red to green\n        for (int i = 0; i < palSize; i++)\n        {\n            //BGR\n            pal[i * 3 + 0] = 0x00;\n            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));\n            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u6211\u5011\u5f97\u5230\u4e86\u4e00\u500b\u9019\u6a23\u7684\u87a2\u5e55\uff1a"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",mdxType:"Figure"},"\u986f\u793aL8\u5716\u50cf"),(0,a.kt)("h3",s({},{id:"manipulating-the-palette"}),"\u64cd\u4f5c\u8abf\u8272\u677f"),(0,a.kt)("p",null,"\u7531\u65bc\u6211\u5011\u53ef\u4ee5\u5b58\u53d6\u52d5\u614bL8\u9ede\u9663\u5716\u4f7f\u7528\u7684\u8abf\u8272\u677f\uff0c\u56e0\u6b64\u53ef\u4ee5\u8f15\u9b06\u5730\u64cd\u4f5c\u5b83\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u5c07\u984f\u8272\u5411\u4e0b\u8ff4\u5708\u4e00\u500b\u50cf\u7d20\uff0c\u5f37\u5236\u5728\u6bcf\u4e00\u5e40\u91cd\u65b0\u7e6a\u88fd\u5716\u50cf\uff1a"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"...\nvoid Screen1View::handleTickEvent()\n{\n    //get palette address\n    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());\n    uint32_t byteSize = 200*256;\n    byteSize = ((byteSize + 3) & ~3);\n    const int palSize = (data[3] << 8) | data[2];\n    uint8_t* pal = (data + byteSize + 4);\n\n    //Cycle palette, copy color 0\n    int8_t blue = pal[0], green = pal[1], red = pal[2];\n\n    //Move palette down, 1->0, 2->1, ...\n    for (int i = 3; i < palSize * 3; i++)\n    {\n        pal[i - 3] = pal[i];\n    }\n\n    //Insert color 0 as color 255\n    pal[(palSize - 1) * 3 + 0] = blue;\n    pal[(palSize - 1) * 3 + 1] = green;\n    pal[(palSize - 1) * 3 + 2] = red;\n\n    //Force redraw by invalidating\n    imageDynamic.invalidate();\n}\n")),(0,a.kt)("p",null,"\u9019\u5c07\u79fb\u52d5\u52d5\u614b\u9ede\u9663\u5716\u201cupwards\u201d\u4e2d\u7684\u984f\u8272\uff1a"),(0,a.kt)(i.Z,{width:"200",imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",mdxType:"Figure"},"L8\u8abf\u8272\u677f\u8ff4\u5708"))}k.isMDXComponent=!0}}]);