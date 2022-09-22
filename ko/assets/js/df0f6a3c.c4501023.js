"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9641],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=a},88678:function(e,t,n){var i=n(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var i=n(67294),a=n(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=o},56239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return v}});var i=n(3905),a=n(39130),r=n(93054),o=n(22425),l=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&u(e,n,t[n]);return e};const h={id:"loading-images-at-runtime",title:"\ub7f0\ud0c0\uc784\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub85c\ub4dc"},g=void 0,b={unversionedId:"development/ui-development/scenarios/loading-images-at-runtime",id:"development/ui-development/scenarios/loading-images-at-runtime",title:"\ub7f0\ud0c0\uc784\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub85c\ub4dc",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/loading-images-at-runtime",permalink:"/ko/docs/development/ui-development/scenarios/loading-images-at-runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"loading-images-at-runtime",title:"\ub7f0\ud0c0\uc784\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub85c\ub4dc"},sidebar:"docs",previous:{title:"\uce90\uc2dc(Cacheable) \ucee8\ud14c\uc774\ub108\ub97c \ud1b5\ud55c \uc131\ub2a5 \uac1c\uc120",permalink:"/ko/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"},next:{title:"L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc808\uac10",permalink:"/ko/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}},y={},v=[{value:"BMP \ud30c\uc77c \ub85c\ub529 \uc608",id:"loading-bmp-file-example",level:2},{value:"BMP \ub85c\ub354",id:"the-bmp-loader",level:3},{value:"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc5d0 \uc801\ud569\ud55c \uba54\ubaa8\ub9ac \uad6c\uc131",id:"configure-memory-for-dynamic-bitmaps",level:2},{value:"JPEG \ud30c\uc77c \ub85c\ub4dc",id:"loading-jpeg-files",level:2}],x={toc:v};function k(e){var t,l=e,{components:u}=l,h=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&m.call(e,i)&&(n[i]=e[i]);return n})(l,["components"]);return(0,i.kt)("wrapper",(t=f(f({},x),h),d(t,p({components:u,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"In this section we will discuss a method for loading images from a file in your TouchGFX application."),(0,i.kt)("p",null,"The standard procedure for using bitmaps in TouchGFX application is to include the bitmaps in the application. The PNG files are converted to binary data in .cpp files and compiled, and linked into the application. This is an easy way of making the bitmaps available for the application at runtime."),(0,i.kt)("p",null,"In some application this is not possible or practical. For example when the images are not available at compile-time (maybe they are downloaded through an internet connection later), or when you simply have too many bitmaps to fit in your application flash space."),(0,i.kt)("p",null,"The Dynamic bitmaps (see link below) is a RAM-based solution to this problem. The Dynamic bitmaps are created at runtime, and the application can freely decide the number of bitmaps, the format, and the width and height."),(0,i.kt)("p",null,"As the dynamic bitmaps are stored in RAM (inside the bitmap cache), the application must copy pixels values from a source into the dynamic bitmap after creating the dynamic bitmaps. After creation, the dynamic bitmap contains uninitialized pixels."),(0,i.kt)("p",null,"This section describes how dynamic bitmaps can be used to create applications where some of the graphic content is read from BMP files. A simple use-case is an application that shows BMP files from an SD-card."),(0,i.kt)(r.Z,{mdxType:"Note"},"\uba3c\uc800 ",(0,i.kt)(a.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\ub3d9\uc801 \ube44\ud2b8\ub9f5"),"\uc5d0 \ub300\ud574 \uc77d\uc5b4\ubcf4\uc2ed\uc2dc\uc624."),(0,i.kt)("p",null,"\uba3c\uc800 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub418\ub294 \uac83\uc740 \ud45c\uc900 \ube44\ud2b8\ub9f5\uc774\uae30 \ub54c\ubb38\uc5d0 \ucef4\ud30c\uc77c\ud560 \ub54c\ub294 \ud45c\uc900 \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub3d9\uc801 \ube44\ud2b8\ub9f5 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uba74 \ub7f0\ud0c0\uc784 \uc2dc \ud30c\uc77c\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \uc77d\uc5b4\uc62c \uc218 \uc788\uc73c\uba70, \uc778\ud130\ub137 \uc5f0\uacb0\uc744 \ud1b5\ud574 \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",f({},{id:"loading-bmp-file-example"}),"BMP \ud30c\uc77c \ub85c\ub529 \uc608"),(0,i.kt)("p",null,"\uc5ec\uae30\uc11c\ub294 BMP \ub85c\ub354\ub97c \uc0ac\uc6a9\ud574 Windows BMP \ud30c\uc77c\uc5d0\uc11c \ud53d\uc140\uc744 \ub85c\ub4dc\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub85c\ub354 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uae00 \ud6c4\ubc18\ubd80\uc5d0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba3c\uc800 \ubdf0\uc5d0 \uc774\ubbf8\uc9c0 \uc704\uc82f\uc744 \uc0bd\uc785\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc774 \uc704\uc82f\uc5d0\uc11c BMP\uac00 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,i.kt)("p",null,"setupScreen\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \ub85c\ub4dc\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{7-8,13-14}","{7-8,13-14}":!0}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    //Get the image dimensions from the BMP file\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of same dimension\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load pixels from BMP file to dynamic bitmap\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //Make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),(0,i.kt)("h3",f({},{id:"the-bmp-loader"}),"BMP \ub85c\ub354"),(0,i.kt)("p",null,"\ub2e4\uc74c\uc740 \ub2e8\uc21c\ud55c BMP \ud30c\uc77c \ub85c\ub354\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ucf54\ub4dc\ub85c, 24bpp BMP \ud30c\uc77c\ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4.  \ub530\ub77c\uc11c \uc0ac\uc6a9 \uc911\uc778 \uc2dc\uc2a4\ud15c\uc5d0 \ub9de\uac8c \ud30c\uc77c \uc2dc\uc2a4\ud15c \ud638\ucd9c\uc744 \uc870\uc815\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/Types.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nusing namespace touchgfx;\n\nclass BMPFileLoader\n{\npublic:\n    typedef void* FileHdl;\n\n    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);\n    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);\nprivate:\n    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);\n    static void seekFile(FileHdl hdl, uint32_t offset);\n};\n")),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui/common/BMPFileLoader.hpp>\n#include <platform/driver/lcd/LCD16bpp.hpp>\n#include <touchgfx/Color.hpp>\n\nint BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)\n{\n    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);\n    if (r != length)\n    {\n        return 1;\n    }\n    return 0;\n}\n\nvoid BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)\n{\n    fseek((FILE*)hdl, offset, SEEK_SET);\n}\n\nvoid BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n}\n\nvoid BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);\n    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n\n    readFile(fileHandle, data, offset - 26); //read rest of header.\n\n    //get dynamic bitmap boundaries\n    const uint32_t buffer_width = bitmap.getWidth();\n    const uint32_t buffer_height = bitmap.getHeight();\n\n    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;\n\n    const Bitmap::BitmapFormat format = bitmap.getFormat();\n    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());\n    uint16_t* const buffer16 = (uint16_t*)buffer8;\n\n    for (uint32_t y = 0; y < height; y++)\n    {\n        for (uint32_t x = 0; x < width; x++)\n        {\n            if (x % 10 == 0) //read data every 10 pixels = 30 bytes\n            {\n                if (x + 10 <= width) //read 10\n                {\n                    readFile(fileHandle, data, 10 * 3); //10 pixels\n                }\n                else\n                {\n                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line\n                }\n            }\n            //insert pixel, if within dynamic bitmap boundaries\n            if (x < buffer_width && ((height - y - 1) < buffer_height))\n            {\n                switch (format)\n                {\n                case Bitmap::RGB565:\n                    buffer16[x + (height - y - 1) * buffer_width] =\n                        LCD16bpp::getNativeColorFromRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);\n                    break;\n                case Bitmap::RGB888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        break;\n                    }\n                case Bitmap::ARGB8888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        buffer8[inx + 3] = 255; //solid\n                        break;\n                    }\n                default:\n                    assert(!"Unsupported bitmap format in BMPFileLoader!");\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\uc704 \ucf54\ub4dc\ub294 \uc124\uba85\uc744 \uc704\ud55c \uc608\uc2dc\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c RGB888\uc5d0 \ub354\uc6b1 \ucd5c\uc801\ud654\ub41c \ub9ac\ub354\ub77c\uba74 \ud30c\uc77c\uc5d0\uc11c \ub3d9\uc801 \ube44\ud2b8\ub9f5 \uba54\ubaa8\ub9ac\ub85c \uc9c1\uc811 \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4(\ub2e8, \uc774 \uacbd\uc6b0 row padding\uc744 \uac74\ub108\ub6f0\uc5b4\uc57c \ud569\ub2c8\ub2e4). \uc704\uc758 \ub9ac\ub354\ub294 BMP \ud30c\uc77c\uc5d0\uc11c \uc784\uc2dc \ubc84\ud37c\ub85c 10\uac1c\uc758 \ud53d\uc140\uc744 \uc77d\uc5b4\uc635\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ud53d\uc140\uc774 \uc62c\ubc14\ub978 \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ub418\uba74\uc11c \ube44\ud2b8\ub9f5\uc73c\ub85c \ubcf5\uc0ac\ub429\ub2c8\ub2e4."),(0,i.kt)("h2",f({},{id:"configure-memory-for-dynamic-bitmaps"}),"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc5d0 \uc801\ud569\ud55c \uba54\ubaa8\ub9ac \uad6c\uc131"),(0,i.kt)("p",null,"\ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud558\ub824\uba74 \uba3c\uc800 TouchGFX\ub97c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc804\uc81c \uc870\uac74\uc73c\ub85c, \ubc84\ud37c 1\uac1c\uc640 \ucd5c\ub300\ud55c \ub9ce\uc740 \ub3d9\uc801 \ube44\ud2b8\ub9f5(\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\ub3c4 \uc0ac\uc6a9\ud574\uc57c \ud568)\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub2e4\uc74c\uc740 STM32F7xx \uc608\uc81c\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc678\ubd80 RAM\uc5d0\uc11c \ubc84\ud37c\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4. \ub610\ud55c 320x240 \ud06c\uae30\uc758 24\ube44\ud2b8 \ube44\ud2b8\ub9f5\uc744 \ub85c\ub4dc\ud558\uc5ec \ud45c\uc2dc\ud560 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\ud55c \uba54\ubaa8\ub9ac \uc694\uac74\uc740 320x240x3 = 230400\uc785\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub3c4 \uae30\ub85d\uc744 \uc704\ud574 \uc57d\uac04\uc758 \uacf5\uac04\uc774 \ud544\uc694\ud558\ubbc0\ub85c \ubc84\ud37c\uc5d0 232000\ubc14\uc774\ud2b8\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-8}","{2-2,8-8}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\n    Bitmap::setCache((uint16_t*)bmpCache, 232000, 1);\n}\n")),(0,i.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c, \ub3d9\uc801 \ube44\ud2b8\ub9f5\uc744 \ucd5c\ub300\ud55c \ub9ce\uc774 \uc785\ub825\ud574\uc57c \ud558\ubbc0\ub85c \uc694\uac74\uc5d0 \ub530\ub77c \uc870\uc815\ud569\ub2c8\ub2e4. \ub2e8, \ud504\ub808\uc784\ubc84\ud37c\ub294 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc678\ubd80 RAM\uc5d0\ub3c4 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uc911\ubcf5\ub418\ub294 \uba54\ubaa8\ub9ac \uc601\uc5ed\uc5d0 \uc800\uc7a5\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)(r.Z,{mdxType:"Note"},"\uba54\ubaa8\ub9ac\uac00 \ubd80\uc871\ud55c \uacbd\uc6b0 dynamicBitmapCreate\uc5d0\uc11c \ubc18\ud658\ub418\ub294 BitmapId\ub294 BITMAP_INVALID\ub85c \ucc98\ub9ac\ub429\ub2c8\ub2e4."),(0,i.kt)("h2",f({},{id:"loading-jpeg-files"}),"JPEG \ud30c\uc77c \ub85c\ub4dc"),(0,i.kt)("p",null,"LibJPEG\uc5d0\uc11c JPEG \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\ub294 JPEG \ud30c\uc77c \ub85c\ub354 \uc608\uc81c\ub294 ",(0,i.kt)("a",{target:"_blank",href:n(8727).Z},"\uc5ec\uae30\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"),". \uc774 \ub85c\ub354\ub294 \uc704\uc758 BMPFileLoader\uc640 \uc720\uc0ac\ud55c JPEGLoader \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))}k.isMDXComponent=!0},8727:function(e,t,n){t.Z=n.p+"assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip"}}]);