"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2499],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=u(n),c=a,g=k["".concat(i,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:a,o[1]=d;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},82985:function(t,e,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}e.Z=a},13493:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var r=n(3905),a=n(82985),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&m(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&m(t,n,e[n]);return t};const c={id:"keyboard-shortcuts",title:"\u9375\u76e4\u5feb\u901f\u9375"},g=void 0,s={unversionedId:"development/ui-development/working-with-touchgfx/keyboard-shortcuts",id:"development/ui-development/working-with-touchgfx/keyboard-shortcuts",title:"\u9375\u76e4\u5feb\u901f\u9375",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/keyboard-shortcuts.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/keyboard-shortcuts",permalink:"/zh-TW/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts",draft:!1,tags:[],version:"current",frontMatter:{id:"keyboard-shortcuts",title:"\u9375\u76e4\u5feb\u901f\u9375"},sidebar:"docs",previous:{title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a",permalink:"/zh-TW/docs/development/ui-development/working-with-touchgfx/examples"},next:{title:"Designer User Guide",permalink:"/zh-TW/docs/category/designer-user-guide"}},N={},h=[{value:"TouchGFX Designer\u529f\u80fd",id:"touchgfx-designer-features",level:2},{value:"File Management",id:"file-management",level:3},{value:"Widget Menu",id:"widget-menu",level:3},{value:"Canvas",id:"canvas",level:3},{value:"Debugging",id:"debugging",level:3},{value:"TouchGFX Simulator\u529f\u80fd",id:"touchgfx-simulator-features",level:2},{value:"Simulator",id:"simulator",level:3}],y={toc:h};function b(t){var e,n=t,{components:l}=n,m=((t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=k(k({},y),m),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u7684\u662fTouchGFX\u652f\u63f4\u7684\u9375\u76e4\u5feb\u901f\u9375\u5b8c\u6574\u6e05\u55ae\uff0c\u4ee5\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002"),(0,r.kt)("h2",k({},{id:"touchgfx-designer-features"}),"TouchGFX Designer\u529f\u80fd"),(0,r.kt)("div",{class:"table-with-anchor-header shortcut-table"},(0,r.kt)("h3",k({},{id:"file-management"}),"File Management"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + N")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Show lobby")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + O")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Open project from File Explorer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + S")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Save current project")))),(0,r.kt)("h3",k({},{id:"widget-menu"}),"Widget Menu"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"A")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Show widget menu (focus search textbox if already open)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"ENTER")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Insert currently highlighted widget and close widget menu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Close widget menu")))),(0,r.kt)("h3",k({},{id:"canvas"}),"Canvas"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Change name of widget")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"DEL")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Delete selected widget(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + C")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + V")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Paste")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Z")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Undo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Y")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Redo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + F")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Bring selected widget(s) forward")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + B")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Send selected widget(s) backward")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + A")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Select all widgets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"\u2190 / \u2191 / \u2192 / \u2193")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Move selected widget(s) 1 pixel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + \u2190 / \u2191 / \u2192 / \u2193")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Move selected widget(s) 10 pixel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"MOUSE WHEEL")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Scroll up / scroll down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"SHIFT + MOUSE WHEEL")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Scroll left / scroll right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + MOUSE WHEEL UP / '+'")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Zoom in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + MOUSE WHEEL DOWN / '-'")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Zoom out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 1")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Zoom to 25%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 2")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Zoom to 50%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 3")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Zoom to 75%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 4")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Zoom to 100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 0")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Reset zoom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"MOUSE DRAG")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Select widgets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + MOUSE DRAG")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Pan canvas")))),(0,r.kt)("h3",k({},{id:"debugging"}),"Debugging"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Generate Code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Run Simulator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F6")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Run Target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + L")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u986f\u793a/\u96b1\u85cf\u8a73\u7d30\u65e5\u8a8c\u8a18\u9304"))))),(0,r.kt)("h2",k({},{id:"touchgfx-simulator-features"}),"TouchGFX Simulator\u529f\u80fd"),(0,r.kt)("div",{class:"table-with-anchor-header shortcut-table"},(0,r.kt)("h3",k({},{id:"simulator"}),"Simulator"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F1")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u555f\u7528/\u7981\u7528\u6307\u6a19\u5ea7\u6a19\u7684\u986f\u793a\u4ee5\u53ca\u8a72\u5ea7\u6a19\u4e0a\u50cf\u7d20\u7684RGB\u984f\u8272\uff08\u5341\u516d\u9032\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Enables/disables highlighting invalidated area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F3")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Takes a screenshot and places the image under the ",(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")," folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + F3")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Takes screenshots of the next 50 frames and places the images under the ",(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")," folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"SHIFT + F3")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Takes a screenshot and places it in your clipboard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"If a simulator skin is used - enables/disables the simulator skin",(0,r.kt)("br",null),"If a simulator skin is ",(0,r.kt)("i",null,"not")," used - enables/disables window border")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Sends the application straight back to the startup screen by calling FrontendApplication::changeToStartScreen().")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F9")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u901a\u904e\u963b\u6b62\u5411\u61c9\u7528\u7a0b\u5f0f\u767c\u9001\u6642\u9418\u4fe1\u865f\u4f86\u66ab\u505c\u6a21\u64ec\u5668\u3002 \u518d\u6b21\u6309\u4e0bF9\u53ef\u6062\u5fa9\u6b63\u5e38\u57f7\u884c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F10")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u7576\uff08\u6309\u4e0bF9\uff09\u6a21\u64ec\u5668\u66ab\u505c\u5f8c\uff0c\u53ef\u4ee5\u901a\u904e\u6309\u4e0bF10\u767c\u9001\u4e00\u500b\u6642\u9418\u4fe1\u865f\u5230\u61c9\u7528\u7a0b\u5f0f\uff0c\u5f9e\u800c\u5c0d\u61c9\u7528\u7a0b\u5f0f\u9032\u884c\u201c\u55ae\u6b65\u4f5c\u696d\u201d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u95dc\u9589\u6a21\u64ec\u5668"))))))}b.isMDXComponent=!0}}]);