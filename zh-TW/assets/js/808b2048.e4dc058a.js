"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3889],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var i=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children))}},93338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var i=n(3905),a=n(22425),r=n(44035),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"position-size",title:"Position and size"},g=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/position-size",id:"development/ui-development/touchgfx-engine-features/position-size",title:"Position and size",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/position-size.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/position-size",permalink:"/zh-TW/docs/development/ui-development/touchgfx-engine-features/position-size",draft:!1,tags:[],version:"current",frontMatter:{id:"position-size",title:"Position and size"},sidebar:"docs",previous:{title:"\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u884c\u70ba",permalink:"/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"},next:{title:"\u81ea\u8a02\u5bb9\u5668",permalink:"/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},v={},y=[{value:"Adding Widgets",id:"adding-widgets",level:2},{value:"Setting size and position",id:"setting-size-position",level:2},{value:"Helper methods",id:"helper-methods",level:2},{value:"Expanding",id:"expanding",level:3},{value:"Centering",id:"centering",level:3},{value:"Invalidation",id:"invalidation",level:3},{value:"Moving",id:"moving",level:3}],w={toc:y};function b(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=h(h({},w),u),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Large parts of the UI setup of common TouchGFX application can be created with the TouchGFX Designer, but typically you also need to write a bit by hand. For example to do more animations or create a dynamic setup of Widgets that depends on user events or configuration data."),(0,i.kt)("p",null,"When you start that task it can be an advantage to know a few of the methods in the classes that can help."),(0,i.kt)("p",null,"All Widgets in the TouchGFX framework are subclasses of the Drawable class. This class contains the general methods for controlling size and position."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/widgets1.png",noShadow:"true",mdxType:"Figure"},"Widget hierarchy (partial)"),(0,i.kt)("p",null,"You build up your user interface of many instances of Widget objects. These objects are added as members to a View subclass. The View class is subclass of the Screen class."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/screen1.png",noShadow:"true",mdxType:"Figure"},"Screen hierarchy"),(0,i.kt)("p",null,"The Screen class containes a Container member. This is called the root container. The root container is initialized to start in (0,0) and fill the entire display area (width = HAL::DISPLAY_WIDTH, height = HAL::DISPLAY_HEIGHT)."),(0,i.kt)("h2",h({},{id:"adding-widgets"}),"Adding Widgets"),(0,i.kt)("p",null,"Widgets are added to a View by creating members in the View class. Here we add a Box called myBox:"),(0,i.kt)(a.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,13-13}","{3-3,13-13}":!0}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    Box myBox;\n};\n")),(0,i.kt)("p",null,"To use the Box in your code, you must include Box.hpp unless it was already included in the base class header file."),(0,i.kt)("p",null,"To get the Box Widget drawn you must add it to the scene graph (a tree of the Widgets in the Screen)."),(0,i.kt)(r.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"A tree of Widgets"),(0,i.kt)("p",null,"This is done with the add function. Typically in setupScreen:"),(0,i.kt)(a.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{10-10}","{10-10}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    add(myBox);\n}\n")),(0,i.kt)("p",null,"The add method on Screen calls add on the root container:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void add(Drawable& d)\n{\n    container.add(d);\n}\n")),(0,i.kt)("p",null,"If you have another Container in your Screen you can add widgets to that by calling add on the Container:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"void Screen1View::setupScreen()\n{\n    ...\n    myContainer.add(myBox);\n}\n")),(0,i.kt)("h2",h({},{id:"setting-size-position"}),"Setting size and position"),(0,i.kt)("p",null,"Most Widgets have a default position of (0,0), and width and height zero. This means that it is almost always required to set the size and position of a Widget."),(0,i.kt)("p",null,"The basic method to set the position is the setXY method:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"   myBox.setXY(10, 10); // Put myBox in x=10, y=10\n")),(0,i.kt)("p",null,"The width and height can be set with the setWidthHeight method. Or the setWidth, setHeight methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"   myBox.setWidthHeight(200, 100); // Give myBox a width of 200, height 100\n")),(0,i.kt)("p",null,"The two can be combined with the setPosition method:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"   myBox.setPosition(10, 10, 200, 100); // Put myBox in x=10, y=10, with a width of 200, height 100\n")),(0,i.kt)("h2",h({},{id:"helper-methods"}),"Helper methods"),(0,i.kt)("p",null,"The class drawable has helper methods that can assist in setting up drawables:"),(0,i.kt)("p",null,(0,i.kt)("a",h({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_drawable"}),"API reference for the Drawable class")),(0,i.kt)("h3",h({},{id:"expanding"}),"Expanding"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::expand()")," method makes a Widget (a Drawable) the same size as its parent. You can set a margin. The Widget is put in the upper left corner (plus margin):"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"   myBox.expand(10); // Put myBox in x=10, y=10, same size as parent except for margin of 10 pix\n")),(0,i.kt)("h3",h({},{id:"centering"}),"Centering"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::centerX())"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::centerY())"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::center()")," methods centers a Widget inside its parent (horizontally, vertically, and both):"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"   myBox.centerX(); // Center myBox horizontally in its parent\n")),(0,i.kt)("h3",h({},{id:"invalidation"}),"Invalidation"),(0,i.kt)("p",null,"When you change the size of a Widget you must invalidate the parts of the screen that needs to be redrawn. If you are making a widget bigger, you can just invalidate the new size. If you are making a Widget smaller, you should invalidate it before changing the size:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"   // Expand the Box, invalidate after to get the new size redrawn\n   myBox.expand(10);\n   myBox.invalidate();\n   ...\n   // Reduce the Box to small size, invalidate before, to get background redrawn\n   myBox.invalidate();\n   myBox.myBox.setPosition(10, 10, 200, 100);\n")),(0,i.kt)("p",null,"Remember that when you invalidate a Widget, the area on the screen that is occupied by the Widget (at that time) is redrawn in the next draw phase. This means if you invalidate a Widget, and then make it smaller, the parts of other widgets (behind) that are now visible, will be redrawn, not only the Widget that you invalidate."),(0,i.kt)("h3",h({},{id:"moving"}),"Moving"),(0,i.kt)("p",null,"The Drawable class has a method ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)")," to move a Widget on the screen from one position to another. This can be used as part of an animation or just to rearrange parts of the user interface."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)")," calls invalidate, so we don't have to do that:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"    myBox.moveRelative(1, 0); // Move 1 pixel to the right\n")),(0,i.kt)("p",null,"Another method is ",(0,i.kt)("inlineCode",{parentName:"p"},"Drawable::moveTo(int16_t x, int16_t y)")," which moves the Widget to the specified position:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{}),"    myBox.moveTo(100, 100); // Move to 100, 100 from current position\n")),(0,i.kt)("p",null,"This method also calls invalidate."))}b.isMDXComponent=!0}}]);