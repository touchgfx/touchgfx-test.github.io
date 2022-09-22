"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},26312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return v}});var r=n(3905),a=n(44035),i=n(22425),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e};const g={id:"performance",title:"\u6027\u80fd"},h=void 0,k={unversionedId:"basic-concepts/performance",id:"basic-concepts/performance",title:"\u6027\u80fd",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/performance.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/performance",permalink:"/zh-CN/docs/basic-concepts/performance",draft:!1,tags:[],version:"current",frontMatter:{id:"performance",title:"\u6027\u80fd"},sidebar:"docs",previous:{title:"\u4e3b\u5faa\u73af",permalink:"/zh-CN/docs/basic-concepts/rendering"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh-CN/docs/basic-concepts/operating-system"}},f={},v=[{value:"\u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4",id:"measuring-the-rendering-time",level:2},{value:"\u4e22\u5e27\u8ba1\u6570",id:"counting-the-lost-frames",level:2},{value:"\u4e22\u5e27\u8865\u507f",id:"compensating-for-lost-frames",level:3},{value:"\u5f71\u54cd\u6e32\u67d3\u65f6\u95f4\u7684\u56e0\u7d20\u6709\u54ea\u4e9b\uff1f",id:"what-affects-the-rendering-time",level:2},{value:"\u754c\u9762\u66f4\u65b0\u4e86\u591a\u5c11\uff1f",id:"how-much-of-the-screen-is-updated",level:3},{value:"\u56fe\u5f62\u4e2d\u7684\u5c42\u6570",id:"the-number-of-layers-in-the-graphics",level:3},{value:"\u6e32\u67d3\u50cf\u7d20\u7684\u590d\u6742\u5ea6",id:"the-complexity-of-rendering-the-pixels",level:3},{value:"\u6e32\u67d3\u7684\u786c\u4ef6\u652f\u6301",id:"hardware-support-for-rendering",level:3},{value:"\u4f55\u65f6\u5e94\u8003\u8651\u6e32\u67d3\u65f6\u95f4",id:"when-should-you-consider-rendering-time",level:2},{value:"Optimize Performance by Invalidating Content",id:"optimize-performance-by-invalidating-content",level:2},{value:"Example using TextArea::invalidateContent()",id:"example-using-textareainvalidatecontent",level:3},{value:"\u83b7\u5f97\u826f\u597d\u6027\u80fd\u7684\u5efa\u8bae",id:"tips-to-get-good-performance",level:2}],b={toc:v};function y(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),d),o(t,p({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u8282\u5c06\u8ba8\u8bba\u5d4c\u5165\u5f0f\u56fe\u5f62\u7528\u6237\u754c\u9762\u7684\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u9ad8\u6027\u80fd\u662f\u6307\u5728\u83b7\u5f97\u6240\u9700\u56fe\u5f62\u6548\u679c\u548c\u52a8\u753b\u65f6\u5b9e\u73b0\u9ad8\u5e27\u7387\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u4e0a\u4e00\u8282\u4e2d\u5173\u4e8e\u4e3b\u5faa\u73af\u5982\u4f55\u5f71\u54cd\u7528\u6237\u754c\u9762\u5e27\u7387\u7684\u5185\u5bb9\u3002 \u518d\u6b21\u5047\u8bbe\u6709\u4e00\u53f0\u8fde\u63a5\u5230LTDC\u7684\u5e76\u884cRGB\u663e\u793a\u5668\u548c\u4e24\u4e2a\u5e27\u7f13\u51b2\u3002 \u57fa\u672c\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",noShadow:"true",mdxType:"Figure"},"\u53cc\u5e27\u7f13\u51b2"),(0,r.kt)("p",null,"\u5047\u8bbe\u663e\u793a\u5668\u6bcf\u79d2\u5237\u65b060\u6b21\uff0c\u5219\u6bcf\u6b21\u5237\u65b0\u4e4b\u95f4\u7684\u95f4\u9694\u7ea616 ms\u3002 \u8ba1\u7b97\u8fc7\u7a0b\u5982\u4e0b\uff1a1 s / 60 = 0.01667 s = 16.67 ms\u3002"),(0,r.kt)("p",null,"\u57281\u53f7\u5e27\u7f13\u51b2\u7684\u4f20\u8f93\u5f00\u59cb\u65f6\uff0cTouchGFX\u5f00\u59cb\u5c061\u53f7\u5e27\u7ed8\u5236\u52302\u53f7\u5e27\u7f13\u51b2\u3002 \u5982\u679c1\u53f7\u5e27\u7684\u6e32\u67d3\u5728\u4e0b\u4e00\u6b21\u4f20\u8f93\u5f00\u59cb\u524d\u5b8c\u6210\uff0c\u5219\u53ef\u4ee5\u4f20\u8f932\u53f7\u5e27\u7f13\u51b2\u3002 \u5982\u679c\u6ca1\u6709\u572816.67 ms\u5185\u5b8c\u6210\uff0c\u5219\u518d\u6b21\u4f20\u8f931\u53f7\u5e27\u7f13\u51b2\uff0c\u5e76\u4e14\u663e\u793a\u5668\u7684\u663e\u793a\u5185\u5bb9\u4e0d\u53d8\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",noShadow:"true",mdxType:"Figure"},"\u4e3b\u5faa\u73af\u65f6\u95f4\u8d85\u8fc716.67 ms"),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u610f\u5473\u7740\u4e22\u5e27\u3002"),(0,r.kt)("p",null,"\u91c7\u96c6\u548c\u66f4\u65b0\u9636\u6bb5\u7684\u65f6\u95f4\u901a\u5e38\u662f\u6781\u77ed\u7684\uff0c\u5982\u5c11\u4e8e1 ms\uff0c\u5728\u8003\u8651\u4e3b\u5faa\u73af\u6d88\u8017\u7684\u603b\u65f6\u95f4\u65f6\uff0c\u591a\u5c11\u6709\u4e9b\u5fae\u4e0d\u8db3\u9053\u3002 \u56e0\u6b64\uff0c\u5728\u4e0b\u6587\u548c\u5168\u6587\u4e2d\uff0c\u5728\u8003\u8651\u6e32\u67d3\u65f6\u95f4\u65f6\uff0c\u5176\u4e2d\u5305\u62ec\u91c7\u96c6\u548c\u66f4\u65b0\u9636\u6bb5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8bb8\u591a\u5e27\u7684\u6e32\u67d3\u65f6\u95f4\u8d85\u8fc716.67 ms\u7684\u65f6\u9650\uff0c\u663e\u793a\u5668\u4e0a\u7684\u5e27\u7387\u5c06\u662f30\u5e27\u6bcf\u79d2\uff08fps\uff09\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6e32\u67d3\u65f6\u95f4\u5927\u4f53\u4e0a\u77ed\u4e8e16.67 ms\uff0c\u4f46\u6709\u4e00\u4e9b\u5e27\u8d85\u8fc716.67 ms\uff0c\u5219\u5e73\u5747\u5e27\u7387\u53ef\u80fd\u63a5\u8fd160 fps\uff0c\u4f46\u5728\u7528\u6237\u770b\u6765\u52a8\u753b\u53ef\u80fd\u4e0d\u6d41\u7545\u3002 \u52a8\u753b\u4e2d\u7684\u67d0\u4e9b\u6b65\u9aa4\u53ef\u80fd\u770b\u8d77\u6765\u8fc7\u5feb\u800c\u67d0\u4e9b\u53c8\u8fc7\u6162\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5e94\u7528\u3002 \u8fd9\u4e0d\u7b26\u5408\u6211\u4eec\u7684\u671f\u671b\u3002"),(0,r.kt)("p",null,"\u6e32\u67d3\u65f6\u95f4\u8fd8\u53ef\u80fd\u66f4\u957f\u3002 \u5982\u679c\u521a\u597d\u8d85\u8fc733 ms\uff0c\u7531\u4e8e\u6bcf\u4e09\u6b21\u4f20\u8f93\u53ea\u6709\u4e00\u4e2a\u65b0\u5e27\u5c31\u7eea\uff0c\u5e27\u7387\u5c06\u964d\u81f320 fps\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"FPS(\u5e27\u7387)"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u6700\u957f\u6e32\u67d3\u65f6\u95f4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"60"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"16.67 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"30"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"33.34 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"20"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"50.00 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"15"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"66.67 ms")))),(0,r.kt)("p",null,"\u6b64\u8868\u663e\u793a\u4e86\u7ed9\u5b9a\u5e27\u7387\u53ef\u83b7\u5f97\u7684\u6700\u957f\u6e32\u67d3\u65f6\u95f4\uff08\u5305\u62ec\u91c7\u96c6\u548c\u66f4\u65b0\u9636\u6bb5\uff09\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u826f\u597d\u7684\u7528\u6237\u754c\u9762\u6027\u80fd\uff0c\u6700\u597d\u5b9a\u671f\u68c0\u67e5\u548c\u76d1\u6d4b\u5e27\u7387\u3002 \u53ef\u4f7f\u7528\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u4e22\u5e27\u8ba1\u6570")),(0,r.kt)("h2",m({},{id:"measuring-the-rendering-time"}),"\u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4"),(0,r.kt)("p",null,"\u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4\u7684\u7b2c\u4e00\u79cd\u65b9\u6cd5\u63d0\u4f9b\u4e86\u6700\u8be6\u7ec6\u7684\u4fe1\u606f\u3002 \u5176\u7406\u5ff5\u5b9e\u9645\u4e0a\u662f\u6d4b\u91cf\u4ece\u5e27\u4f20\u8f93\u5230\u6e32\u67d3\u9636\u6bb5\u7ed3\u675f\u4e4b\u95f4\u7684\u65f6\u95f4\u3002 \u56fe\u5f62\u5f15\u64ce\u5728\u91c7\u96c6\u9636\u6bb5\u5f00\u59cb\u65f6\u8c03\u7528GPIO\u7c7b\u7684\u51fd\u6570\uff0c\u5e76\u5728\u6e32\u67d3\u9636\u6bb5\u7ed3\u675f\u65f6\u518d\u6b21\u8c03\u7528\u3002 The application defines these function and can hook into them to perform measurements."),(0,r.kt)("p",null,"\u6d4b\u91cf\u53ef\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u6765\u6267\u884c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5916\u90e8\u8ba1\u65f6\u8bbe\u5907\uff0c\u5982\u793a\u6ce2\u5668\uff1a\u4e3a\u4e86\u4f7f\u7528\u793a\u6ce2\u5668\u8fdb\u884c\u6d4b\u91cf\uff0c\u5e94\u7528\u5e94\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"GPIO"),"\u63a5\u53e3\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"li"},"set(GPIO_ID)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"clear(GPIO_ID)"),"\u65b9\u6cd5\u3002 \u7136\u540e\uff0c\u793a\u6ce2\u5668\u53ef\u4ee5\u6d4b\u91cf\u8f93\u51fa\u4e3a\u9ad8\u7535\u5e73\u7684\u6301\u7eed\u65f6\u95f4\uff0c\u4ee5\u6b64\u4f5c\u4e3a\u6e32\u67d3\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5185\u90e8\u8ba1\u65f6\u5668\uff1a\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u5185\u90e8\u8ba1\u65f6\u5668\uff0c\u5982sysTick\u8ba1\u65f6\u5668\u3002 \u5728\u8c03\u7528GPIO::set(RENDER_TIME)\uff0c\u5e94\u7528\u53ef\u5c06\u8ba1\u65f6\u5668\u7684\u503c\u4fdd\u5b58\u5728\u53d8\u91cf\u4e2d\u3002 \u5728\u8fdb\u884c\u6e05\u96f6\u8c03\u7528\u65f6\uff0c\u5e94\u7528\u53ef\u518d\u6b21\u8bfb\u53d6\u8ba1\u65f6\u5668\u5e76\u51cf\u53bb\u524d\u503c\uff0c\u4ece\u800c\u83b7\u5f97\u6e32\u67d3\u65f6\u95f4\u3002 \u8ba1\u65f6\u5668\u7684\u901f\u5ea6\u5c06\u51b3\u5b9a\u6d4b\u91cf\u7cbe\u5ea6\u3002 \u5e94\u7528\u5fc5\u987b\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4f7f\u6e32\u67d3\u65f6\u95f4\u53ef\u89c1\u3002 \u4e00\u79cd\u65b9\u5f0f\u662f\u5c06\u503c\u4fdd\u5b58\u5728\u5168\u5c40\u53d8\u91cf\u4e2d\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u754c\u9762\u4e0a\u7684TextArea\u4e2d\u663e\u793a\u503c\u3002 \u4e5f\u53ef\u4f7f\u7528\u8c03\u8bd5\u5668\u68c0\u67e5\u503c\u3002")),(0,r.kt)("h2",m({},{id:"counting-the-lost-frames"}),"\u4e22\u5e27\u8ba1\u6570"),(0,r.kt)("p",null,"The graphics engine counts the number of transfers that has occurred during the last collect-update-rendering phase. \u5e94\u7528\u53ef\u8f7b\u677e\u5730\u68c0\u67e5\u6b64\u503c\uff0c\u4ee5\u4fbf\u4e86\u89e3\u662f\u5426\u4e22\u5e27\u4ee5\u53ca\u5e27\u7387\u662f\u5426\u4e0b\u964d\u3002"),(0,r.kt)("p",null,"\u8ba1\u6570\u5728",(0,r.kt)("em",{parentName:"p"},"HAL"),"\u7c7b\u4e2d\u63d0\u4f9b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (HAL::getInstance()->getLCDRefreshCount() > 1) {\n    //Alert programmer somehow\n    ...\n  }\n}\n")),(0,r.kt)("h3",m({},{id:"compensating-for-lost-frames"}),"\u4e22\u5e27\u8865\u507f"),(0,r.kt)("p",null,"\u5982\u679c\u4e22\u5e27\u4e14\u67d0\u4e2a\u52a8\u753b\u7684\u5e27\u7387\u56e0\u6b64\u4e0b\u964d\uff0c\u53ef\u8fdb\u884c\u4e00\u5b9a\u7a0b\u5ea6\u7684\u8865\u507f\u3002 \u6211\u4eec\u53ef\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b49\u5f85\u5176\u7ed3\u675f - \u8ba9\u52a8\u753b\u7ee7\u7eed\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u52a8\u753b\u6301\u7eed\u65f6\u95f4\u53d8\u957f\uff0c\u5e76\u4e14\u52a8\u753b\u53ef\u80fd\u4e0d\u6d41\u7545\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8df3\u8fc7\u4e00\u4e9b\u5e27 - \u901a\u8fc7\u8df3\u5e27\u786e\u4fdd\u6574\u4e2a\u52a8\u753b\u7684\u6301\u7eed\u65f6\u95f4\u4e0d\u4f1a\u8d85\u8fc7\u9884\u5b9a\u65f6\u95f4\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4e22\u5e27\uff0c\u53ef\u6307\u793aTouchGFX\u81ea\u52a8\u8df3\u8fc7\u4e00\u4e9b\u5e27\u3002 \u53ef\u901a\u8fc7\u5728\u6bcf\u4e2a\u5b9e\u9645\u5e27\u5c06\u52a8\u753btick\u4e00\u6b21\u4ee5\u4e0a\u6765\u5b9e\u73b0\u3002 \u5f53\u6e32\u67d3\u65f6\u95f4\u4e0d\u7a33\u5b9a\u65f6\uff0c\u8fd9\u6709\u52a9\u4e8e\u8ba9\u52a8\u753b\u66f4\u6d41\u7545\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void setFrameRateCompensation(bool enabled)\n")),(0,r.kt)("h2",m({},{id:"what-affects-the-rendering-time"}),"\u5f71\u54cd\u6e32\u67d3\u65f6\u95f4\u7684\u56e0\u7d20\u6709\u54ea\u4e9b\uff1f"),(0,r.kt)("p",null,"\u5f71\u54cd\u6e32\u67d3\u65f6\u95f4\u7684\u56e0\u7d20\u6709\u8bb8\u591a\uff1a\u66f4\u65b0\u90e8\u5206\u7684\u5927\u5c0f\u3001\u5206\u5c42\u7684\u4f7f\u7528\u3001\u63a7\u4ef6\u7684\u590d\u6742\u5ea6\u548c\u6e32\u67d3\u53ef\u4f7f\u7528\u7684\u786c\u4ef6\u652f\u6301\u3002"),(0,r.kt)("h3",m({},{id:"how-much-of-the-screen-is-updated"}),"\u754c\u9762\u66f4\u65b0\u4e86\u591a\u5c11\uff1f"),(0,r.kt)("p",null,"\u6e32\u67d3\u65f6\u95f4\u901a\u5e38\u4e0e\u5fc5\u987b\u66f4\u65b0\u7684\u50cf\u7d20\u6570\u6210\u6b63\u6bd4\u3002 \u5982\u679c\u52a8\u753b\u9700\u8981\u7684\u6e32\u67d3\u65f6\u95f4\u8fc7\u957f\uff0c\u4e00\u79cd\u53ef\u80fd\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u7f29\u5c0f\u52a8\u753b\u9762\u79ef\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u6709\u4e00\u5f20\u65cb\u8f6c\u56fe\u50cf\u800c\u6027\u80fd\u4e0d\u591f\u597d\uff0c\u5219\u53ef\u901a\u8fc7\u7f29\u5c0f\u56fe\u50cf\u5c3a\u5bf8\u6765\u6539\u5584\u6027\u80fd\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/reducing-image-size.png",noShadow:"true",mdxType:"Figure"},"\u901a\u8fc7\u7f29\u5c0f\u56fe\u50cf\u5c3a\u5bf8\u7f29\u77ed\u6e32\u67d3\u65f6\u95f4"),(0,r.kt)("p",null,"\u8bb0\u4f4f\uff0c\u56fe\u5f62\u5f15\u64ce\u4f1a\u91cd\u7ed8\u5e94\u7528\u4f7f\u4e4b\u65e0\u6548\u7684\u533a\u57df\u3002 \u8fd9\u610f\u5473\u7740\u5fc5\u987b\u53ea\u4f7f\u5b9e\u9645\u9700\u8981\u5237\u65b0\u7684\u533a\u57df\u65e0\u6548\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u65e0\u6548\u533a\u57df\u8d8a\u5927\uff0c\u6e32\u67d3\u65f6\u95f4\u8d8a\u957f\u3002")),(0,r.kt)("h3",m({},{id:"the-number-of-layers-in-the-graphics"}),"\u56fe\u5f62\u4e2d\u7684\u5c42\u6570"),(0,r.kt)("p",null,"\u5728\u5178\u578b\u5e94\u7528\u4e2d\uff0c\u56fe\u5f62\u5c06\u5305\u542b\u5f7c\u6b64\u5806\u53e0\u7684\u4e0d\u540c\u5143\u7d20\u3002 \u5982\u679c\u66f4\u65b0\u4e86\u5143\u7d20\u4e2d\u7684\u4e00\u4e2a\uff0c\u901a\u5e38\u5fc5\u987b\u91cd\u7ed8\u6240\u6709\u5143\u7d20\u3002"),(0,r.kt)("p",null,"\u5178\u578b\u7684\u4f8b\u5b50\u662f\u80cc\u666f\u56fe\u50cf\u3001\u5e27\u548c\u4e00\u4e9b\u6587\u672c\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/text-in-a-frame.png",noShadow:"true",mdxType:"Figure"},"\u5206\u5c42\u56fe\u5f62\u5143\u7d20"),(0,r.kt)("p",null,"\u6b64\u7528\u6237\u754c\u9762\u7684\u521b\u5efa\u65b9\u6cd5\u662f\u5c06TextArea\u63a7\u4ef6\u653e\u5728\u663e\u793a\u4e86\u4e00\u4e2a\u900f\u660e\u5e27\u7684Image\u63a7\u4ef6\u4e0a\u65b9\u3002 \u4e8c\u8005\u90fd\u5728\u80cc\u666f\u56fe\u50cf\u4e0a\u5c42\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/text-in-a-frame-designer-4.17.png",noShadow:"true",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5206\u5c42\u56fe\u5f62\u5143\u7d20"),(0,r.kt)("p",null,"\u6b64\u89e3\u51b3\u65b9\u6848\u5728\u5e94\u7528\u4e2d\u7ecf\u5e38\u7528\u5230\u3002 \u8fd9\u662f\u4e00\u79cd\u5341\u5206\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5177\u6709\u9ad8\u5ea6\u7684\u7075\u6d3b\u6027\uff0c\u4f8b\u5982\uff0c\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u95f4\u66f4\u6539\u5e27\u6216\u5728\u80cc\u666f\u4e0a\u79fb\u52a8\u5e27\u548c\u6587\u672c\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u6e32\u67d3\u65f6\u95f4\u7684\u95ee\u9898\u662f\u5982\u679c\u5728\u8fd0\u884c\u65f6\u95f4\u66f4\u65b0\u4e86\u6587\u672c\u4e14\u9700\u8981\u91cd\u7ed8\uff0c\u56fe\u5f62\u5f15\u64ce\u8fd8\u9700\u8981\u91cd\u7ed8\u80cc\u666f\u548c\u5e27\uff0c\u7136\u540e\u662f\u65b0\u7684\u6587\u672c\u3002 \u8fd9\u4f1a\u663e\u8457\u589e\u52a0\u6587\u672c\u7684\u6e32\u67d3\u65f6\u95f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u65e0\u6548\u533a\u57df\u7684\u5c42\u6570\u8d8a\u591a\uff0c\u6e32\u67d3\u65f6\u95f4\u5c31\u8d8a\u957f\u3002")),(0,r.kt)("h3",m({},{id:"the-complexity-of-rendering-the-pixels"}),"\u6e32\u67d3\u50cf\u7d20\u7684\u590d\u6742\u5ea6"),(0,r.kt)("p",null,"\u5c06\u6bcf\u4e2a\u50cf\u7d20\u6e32\u67d3\u5230\u5e27\u7f13\u51b2\u7684\u96be\u5ea6\u5e76\u4e0d\u4e00\u81f4\u3002 \u5728\u6240\u6709\u7c7b\u578b\u7684\u6e32\u67d3\u4e2d\uff0c\u56fe\u5f62\u5f15\u64ce\u5fc5\u987b\u5c06\u6700\u7ec8\u7684\u50cf\u7d20\u5199\u5165\u5e27\u7f13\u51b2\u3002 \u4f46\u662f\uff0c\u8981\u5199\u5165\u50cf\u7d20\u7684\u8ba1\u7b97\u9700\u8981\u7684\u6d88\u8017\u5e76\u4e0d\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u56fa\u5b9a\u8272\u5f69\uff08\u5982Box Widget\u4e2d\u4f7f\u7528\u7684\u8272\u5f69\uff09\u7684\u6d88\u8017\u6700\u4f4e\uff0c\u53ea\u9700\u8ba1\u7b97\u4e00\u4e2a\u50cf\u7d20\u5e76\u5c06\u7ed3\u679c\u91cd\u590d\u7528\u4e8e\u6240\u6709\u50cf\u7d20\u3002 \u8fd9\u610f\u5473\u7740\u4f7f\u7528\u8bb8\u591aBox\u53ef\u83b7\u5f97\u975e\u5e38\u9ad8\u7684\u6027\u80fd\u3002 \u7531\u4e8e\u8fd9\u4f1a\u5bfc\u81f4\u7528\u6237\u754c\u9762\u8d28\u91cf\u4e0d\u9ad8\uff0c\u56e0\u6b64\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4f4e\u7684\u662f\u56fe\u50cf\u7684\u50cf\u7d20\u8ba1\u7b97\u6d88\u8017\uff0c\u8fd9\u662f\u56e0\u4e3a\u50cf\u7d20\u5747\u4ee5\u53ef\u76f4\u63a5\u4f7f\u7528\u7684\u683c\u5f0f\u5b58\u50a8\u5728\u4f4d\u56fe\u4e2d\u3002 \u8ba1\u7b97\u8981\u5199\u5165\u5e27\u7f13\u51b2\u7684\u50cf\u7d20\u5173\u7cfb\u5230\u4ece\u4f4d\u56fe\u4e2d\u7684\u6b63\u786e\u4f4d\u7f6e\u52a0\u8f7d\u8272\u5f69\u503c\u3002"),(0,r.kt)("p",null,"\u6587\u672c\u7684\u6d88\u8017\u4e0e\u56fe\u50cf\u76f8\u5f53\uff0c\u6bcf\u4e2a\u5b57\u6bcd\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u5e45\u5c0f\u56fe\u50cf\u3002 \u4e8b\u5b9e\u4e0a\uff0c\u7531\u4e8e\u5927\u91cf\u5c0f\u56fe\u50cf\u5bfc\u81f4\u4e86\u76f8\u5f53\u9ad8\u7684\u201c\u5f00\u59cb-\u505c\u6b62\u201d\u6d88\u8017\uff0c\u56e0\u6b64\u6587\u672c\u7684\u6d88\u8017\u66f4\u9ad8\u3002 \u4f8b\u5982\uff0c\u6bcf\u4e2a\u5b57\u6bcd\u7684\u4f4d\u7f6e\u8ba1\u7b97\u3002 \u4e3a\u4e86\u8ba9\u6587\u672c\u770b\u8d77\u6765\u5c3d\u53ef\u80fd\u7f8e\u89c2\uff0c\u4f1a\u5c06\u6587\u672c\u663e\u793a\u4e3a\u5177\u6709\u900f\u660e\u5ea6\u7684\u5c0f\u56fe\u50cf\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\u5173\u4e8e\u900f\u660e\u7684\u6ce8\u91ca\u3002"),(0,r.kt)("p",null,"\u65cb\u8f6c\u6216\u7f29\u653e\u540e\u7684\u56fe\u50cf\u6d88\u8017\u66f4\u9ad8\u3002 \u4efb\u52a1\u540c\u6837\u662f\u4ece\u4f4d\u56fe\u52a0\u8f7d\u50cf\u7d20\u503c\uff0c\u4f46\u7531\u4e8e\u56fe\u5f62\u5f15\u64ce\u5fc5\u987b\u5305\u542b\u7f29\u653e\u548c\u65cb\u8f6c\uff0c\u56e0\u6b64\u8fd9\u65f6\u7684\u8ba1\u7b97\u66f4\u8017\u65f6\u3002"),(0,r.kt)("p",null,"\u51e0\u4f55\u5143\u7d20\uff08\u5982\u5706\uff09\u7684\u6d88\u8017\u6bd4\u4e4b\u66f4\u9ad8\u3002 \u8fd9\u65f6\u6211\u4eec\u4e0d\u80fd\u4ece\u4f4d\u56fe\u52a0\u8f7d\u50cf\u7d20\u8272\u5f69\uff0c\u800c\u662f\u5fc5\u987b\u8ba1\u7b97\u5706\u7684\u5f62\u72b6\u548c\u5706\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u7684\u8272\u5f69\u3002"),(0,r.kt)("p",null,"\u900f\u660e\u5ea6\u589e\u52a0\u4e86\u5143\u7d20\u7684\u7ed8\u5236\u6d88\u8017\u3002 \u5982\u679c\u4e00\u4e9b\u50cf\u7d20\u4e0d\u662f\u5b9e\u5fc3\u7684\uff0c\u90a3\u4e48\u5143\u7d20\u662f\u900f\u660e\u7684\u3002 \u56fe\u5f62\u5f15\u64ce\u9996\u5148\u5fc5\u987b\u7ed8\u5236\u900f\u660e\u5143\u7d20\u540e\u65b9\u7684\u5143\u7d20\uff08\u5982\u201c\u5e27\u4e2d\u7684\u6587\u672c\u201d\u90e8\u5206\u6240\u8ff0\uff09\uff0c\u8fd9\u4f1a\u589e\u52a0\u7ed8\u5236\u7684\u6d88\u8017\u3002 \u5176\u6b21\uff0c\u56fe\u5f62\u5f15\u64ce\u968f\u540e\u5fc5\u987b\u5c06\u80cc\u666f\u50cf\u7d20\u4e0e\u900f\u660e\u5143\u7d20\u7684\u50cf\u7d20\u8fdb\u884c\u7ec4\u5408\uff0c\u5e76\u5c06\u7ed3\u679c\u5199\u5165\u5e27\u7f13\u51b2\u3002 \u6b64\u7c7b\u8ba1\u7b97\u7684\u8017\u65f6\u663e\u8457\u591a\u4e8e\u53ea\u5199\u5165\u8ba1\u7b97\u8fc7\u7684\u50cf\u7d20\u7684\u573a\u666f\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/box-image-texture-circle.png",noShadow:"true",mdxType:"Figure"},"Box\u3001Image\u3001\u65cb\u8f6cImage\u548c\u5706\u3002 \u5b9e\u5fc3\u5143\u7d20\u4f4d\u4e8e\u7b2c\u4e00\u884c\u3002 \u900f\u660e\u5143\u7d20\u5728\u4e0b\u65b9\u3002"),(0,r.kt)("p",null,"\u900f\u660e\u603b\u662f\u9700\u8981\u591a\u51fa\u4e00\u5c42\u3002 \u4f46\u662f\uff0c\u5c06\u5b9e\u5fc3\u50cf\u7d20\u653e\u5728\u5176\u4ed6\u5b9e\u5fc3\u50cf\u7d20\u7684\u4e0a\u65b9\u5e76\u4e0d\u4e00\u5b9a\u4f1a\u589e\u52a0\u5c42\u6570\u3002 \u56fe\u5f62\u5f15\u64ce\u5c3d\u91cf\u4e0d\u7ed8\u5236\u88ab\u5176\u4ed6\u5b9e\u5fc3\u50cf\u7d20\u8986\u76d6\u7684\u50cf\u7d20\uff0c\u56e0\u4e3a\u8fd9\u662f\u5728\u6d6a\u8d39\u5b9d\u8d35\u7684\u65f6\u95f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u65e0\u6548\u533a\u57df\u4e2d\u5143\u7d20\u7684\u590d\u6742\u5ea6\u8d8a\u9ad8\uff0c\u6e32\u67d3\u65f6\u95f4\u5c31\u8d8a\u957f\u3002")),(0,r.kt)("p",null,"\u8bb0\u4f4f\uff0c\u53ea\u6709\u65e0\u6548\u533a\u57df\u4e2d\u7684\u5143\u7d20\u624d\u4f1a\u589e\u52a0\u6e32\u67d3\u65f6\u95f4\u3002 \u65e0\u6548\u533a\u57df\u4e4b\u5916\u7684\u5143\u7d20\u5bf9\u6e32\u67d3\u65f6\u95f4\u65e0\u5f71\u54cd\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb",(0,r.kt)("a",m({parentName:"p"},{href:"../development/ui-development/ui-components/general-ui-component-performance"}),"\u6b64\u5904"),"\u9605\u8bfb\u5173\u4e8eUI\u7ec4\u4ef6\u548c\u6027\u80fd\u7684\u66f4\u591a\u5185\u5bb9\u3002"),(0,r.kt)("h3",m({},{id:"hardware-support-for-rendering"}),"\u6e32\u67d3\u7684\u786c\u4ef6\u652f\u6301"),(0,r.kt)("p",null,"\u4e00\u4e9bSTM32\u5fae\u63a7\u5236\u5668\u5305\u542b\u56fe\u5f62\u52a0\u901f\u5668Chrom-ART\uff08\u6216DMA2D\uff09\u3002 \u6b64\u52a0\u901f\u5668\u53ef\u7f29\u77ed\u6e32\u67d3\u65f6\u95f4\u3002 \u7531\u4e8e\u52a0\u901f\u5668\u4e0e\u5fae\u63a7\u5236\u5668\u6838\u5fc3\u5e76\u884c\u8fd0\u884c\uff0c\u5fae\u63a7\u5236\u5668\u53ef\u4ee5\u5728\u52a0\u901f\u5668\u6e32\u67d3\u56fe\u5f62\u65f6\u81ea\u7531\u5730\u8fd0\u884c\u5176\u4ed6\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"Chrom-ART\u4e3b\u8981\u7528\u4e8e\u56fe\u50cf\u548c\u6587\u672c\u3002 \u5982\u679c\u6709\uff0c\u56fe\u5f62\u5f15\u64ce\u4f1a\u81ea\u52a8\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("h2",m({},{id:"when-should-you-consider-rendering-time"}),"\u4f55\u65f6\u5e94\u8003\u8651\u6e32\u67d3\u65f6\u95f4"),(0,r.kt)("p",null,"\u6e32\u67d3\u65f6\u95f4\u5e76\u975e\u603b\u662f\u90a3\u4e48\u91cd\u8981\u3002 \u5f53\u4f4e\u5e27\u7387\u53ef\u88ab\u7528\u6237\u89c2\u5bdf\u5230\u65f6\uff0c\u5e94\u6ce8\u610f\u6e32\u67d3\u65f6\u95f4\u3002 \u5f53\u52a8\u753b\u5728\u5c4f\u5e55\u7684\u4e00\u90e8\u5206\u4e0a\u8fd0\u884c\uff08\u5982\u65cb\u8f6c\u7684\u56fe\u6807\uff09\u6216\u60a8\u5728\u754c\u9762\u4e0a\u79fb\u52a8\u6216\u6ed1\u52a8\u67d0\u5143\u7d20\u65f6\uff0c\u901a\u5e38\u5c31\u5c5e\u4e8e\u8fd9\u79cd\u60c5\u51b5\u3002 \u5982\u679c\u66f4\u65b0\u9891\u7387\u4f4e\uff0c\u90a3\u4e48\u5728\u7528\u6237\u770b\u6765\uff0c\u52a8\u753b\u5c06\u5448\u73b0\u51fa\u5206\u6b65\u663e\u793a\u800c\u975e\u6d41\u7545\u7684\u72b6\u6001\u3002 \u5982\u679c\u662f\u8fd9\u6837\uff0c\u5e94\u68c0\u67e5\u6e32\u67d3\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u7528\u65b0\u754c\u9762\u66ff\u4ee3\u6574\u4e2a\u754c\u9762\uff0c\u5f53\u66f4\u6362\u671f\u95f4\u5e27\u7387\u663e\u8457\u4e0b\u964d\u65f6\uff0c\u7528\u6237\u901a\u5e38\u6ce8\u610f\u4e0d\u5230\u3002 \u8fd9\u662f\u56e0\u4e3a\u7528\u6237\u770b\u4e0d\u5230\u6e32\u67d3\u4f55\u65f6\u5f00\u59cb\uff0c\u53ea\u80fd\u770b\u5230\u5b83\u4f55\u65f6\u7ed3\u675f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e24\u6761\u89c4\u5219\u610f\u5473\u7740\u5bf9\u4e8e\u52a8\u753b\u5143\u7d20\uff08\u5982\u79fb\u52a8\u5143\u7d20\uff09\u800c\u8a00\uff0c\u5e94\u4f7f\u7528\u8f83\u5c11\u7684\u5c42\u6570\uff0c\u907f\u514d\u4f7f\u7528\u590d\u6742\u5143\u7d20\u548c\u8bb8\u591a\u5c42\u6570\u3002 \u5bf9\u4e8e\u754c\u9762\u7684\u5176\u4f59\u90e8\u5206\uff0c\u8fd9\u4e9b\u4e0d\u662f\u95ee\u9898\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/clock-and-scrolllist.png",noShadow:"true",mdxType:"Figure"},"\u6a21\u62df\u65f6\u949f\u548c\u6eda\u52a8\u5217\u8868"),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u5de6\u4fa7\u6709\u4e00\u4e2a\u6a21\u62df\u65f6\u949f\u3002 \u901a\u8fc7\u65cb\u8f6c\u4e09\u5e45\u7ec6\u957f\u7684\u56fe\u50cf\u6e32\u67d3\u4e09\u6839\u6307\u9488\u3002 \u8fd9\u901a\u5e38\u4e0d\u96be\u5b9e\u73b0\uff0c\u56e0\u4e3a\u6307\u9488\u5e76\u975e\u603b\u662f\u5728\u79fb\u52a8\u3002 \u4f46\u5982\u679c\u6211\u4eec\u8981\u8ba9\u65f6\u949f\u5728\u754c\u9762\u4e0a\u5230\u5904\u79fb\u52a8\uff0c\u5c06\u4f1a\u5728\u6bcf\u4e00\u5e27\u4e2d\u91cd\u7ed8\u6307\u9488\uff0c\u7531\u4e8e\u7ed8\u5236\u65cb\u8f6c\u56fe\u50cf\u901a\u5e38\u6bd4\u8f83\u8017\u65f6\uff0c\u56e0\u6b64\u4f1a\u6bd4\u8f83\u590d\u6742\u3002"),(0,r.kt)("p",null,"\u53f3\u4fa7\u662f\u4e00\u4e2a\u6eda\u52a8\u5217\u8868\u3002 \u7528\u6237\u53ef\u4ee5\u4e0a\u4e0b\u79fb\u52a8\u6b64\u6570\u5b57\u5217\u8868\uff0c\u4e3a\u4e86\u8ba9\u7528\u6237\u754c\u9762\u663e\u793a\u51fa\u9ad8\u54cd\u5e94\u6027\uff0c\u9700\u8981\u9ad8\u5e27\u7387\u3002 \u56e0\u6b64\uff0c\u5fc5\u987b\u8003\u8651\u6eda\u52a8\u5217\u8868\u4e2d\u5143\u7d20\u7684\u6e32\u67d3\u65f6\u95f4\uff0c\u6216\u8005\u7f29\u5c0f\u6eda\u52a8\u5217\u8868\u7684\u5c3a\u5bf8\u3002"),(0,r.kt)("h2",m({},{id:"optimize-performance-by-invalidating-content"}),"Optimize Performance by Invalidating Content"),(0,r.kt)("p",null,"Normally the entire widget is invalidated, but the graphics engine has the ability to only invalidate the content of a widget, instead of the entire widget. By reducing the area to invalidate, the render time will often be noticeably shorter. The improvement in render time depends on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The size of the area covered by the widget content relative to the size of the entire widget."),(0,r.kt)("li",{parentName:"ul"},"The background widget(s) partly or fully covered by the widget.")),(0,r.kt)("p",null,"The following figures illustrates the concept of invalidating content, by using the TextArea widget as example. Figure 1 shows the entire area of the widget. Figure 2 shows the invalidated area when using ",(0,r.kt)("inlineCode",{parentName:"p"},"TextArea::invalidate()"),". Figure 3 shows the invalidated area when using ",(0,r.kt)("inlineCode",{parentName:"p"},"TextArea::invalidateContent()"),"."),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/text-area-expanded-across-screen.png",noShadow:"true",mdxType:"Figure"},"Figure 1. TextArea spanning across the entire screen width"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/invalidate-example.png",noShadow:"true",mdxType:"Figure"},"Figure 2. Invalidated area (red) when using TextArea::invalidate()"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/invalidate-content-example.png",noShadow:"true",mdxType:"Figure"},"Figure 3. Invalidated area (green) when using TextArea::invalidateContent()"),(0,r.kt)("h3",m({},{id:"example-using-textareainvalidatecontent"}),"Example using TextArea::invalidateContent()"),(0,r.kt)("p",null,"In cases where the widget is overlapping other widgets, these other widgets will need to be redrawn when the entire TextArea is invalidated using ",(0,r.kt)("inlineCode",{parentName:"p"},"TextArea::invalidate()"),". By using ",(0,r.kt)("inlineCode",{parentName:"p"},"TextArea::invalidateContent()")," instead, we minimize the risk of unnecessary invalidating and redrawing widgets. This is especially true for expensive widgets, e.g. Circle, Gauge, etc."),(0,r.kt)("p",null,"The figure below illustrates how we avoid invalidating a background widget (Image - ST logo) using ",(0,r.kt)("inlineCode",{parentName:"p"},"TextArea::invalidateContent()"),". The background widget would have been invalidated and redrawn if we used ",(0,r.kt)("inlineCode",{parentName:"p"},"TextArea::invalidate()"),"."),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/performance/invalidate-content-improvement-example.png",noShadow:"true",mdxType:"Figure"},"Example using TextArea::invalidateContent()"),(0,r.kt)("h2",m({},{id:"tips-to-get-good-performance"}),"\u83b7\u5f97\u826f\u597d\u6027\u80fd\u7684\u5efa\u8bae"),(0,r.kt)("p",null,"\u6211\u4eec\u603b\u7ed3\u4e86\u83b7\u5f97\u826f\u597d\u6027\u80fd\u7684\u5efa\u8bae\uff0c\u4ee5\u7ed3\u675f\u672c\u8282\u5185\u5bb9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not redraw unchanged things")," Make sure that you do not accidentally invalidate unnecessary parts of the display. This reduces the performance without any benefit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5728\u8d28\u91cf\u4e0e\u901f\u5ea6\u4e4b\u95f4\u5bfb\u6c42\u5e73\u8861")," \u964d\u4f4e\u5143\u7d20\u7684\u590d\u6742\u5ea6\u6709\u52a9\u4e8e\u63d0\u9ad8\u6027\u80fd\u3002 \u590d\u6742\u5ea6\u4e0e\u6027\u80fd\u4e4b\u95f4\u7684\u826f\u597d\u5e73\u8861\u901a\u5e38\u6781\u4e3a\u5173\u952e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5229\u7528\u786c\u4ef6\u80fd\u529b")," \u5177\u6709\u786c\u4ef6\u52a0\u901f\uff08Chrom-ART\uff09\u7684\u5fae\u63a7\u5236\u5668\u7684\u80fd\u529b\u901a\u5e38\u9ad8\u4e8e\u6ca1\u6709\u786c\u4ef6\u52a0\u901f\u7684\u5fae\u63a7\u5236\u5668\u3002 \u8003\u8651\u4f7f\u7528\u5177\u6709Chrom-ART\u7684\u5fae\u63a7\u5236\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7528\u56fe\u50cf\u66ff\u4ee3\u8ba1\u7b97\u56fe\u5f62")," \u8ba1\u7b97\u5f97\u5230\u7684\u5706\u6bd4\u5706\u56fe\u50cf\u6162\u3002 \u4e00\u822c\u800c\u8a00\uff0c\u56fe\u50cf\u53ef\u66ff\u4ee3\u8bb8\u591a\u9759\u6001\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8c03\u6574\u663e\u793a\u5668\u5237\u65b0\u7387")," \u5982\u672c\u8282\u5f00\u5934\u6240\u8ff0\uff0c\u5237\u65b0\u7387\u662f\u6e32\u67d3\u65f6\u95f4\u7684\u786c\u6027\u9650\u5236\u3002 \u5982\u679c\u6e32\u67d3\u65f6\u95f4\u8d85\u8fc7\u5237\u65b0\u7387\uff0c\u5e27\u7387\u5c06\u4e0b\u964d\u3002 \u5982\u679c\u6e32\u67d3\u65f6\u95f4\u53ea\u8d85\u8fc7\u5237\u65b0\u7387\u4e00\u70b9\u70b9\uff0c\u4e5f\u8bb8\u80fd\u591f\u5c06\u663e\u793a\u5668\u7684\u5237\u65b0\u7387\u964d\u81f3\u598255 Hz\uff08\u76f8\u5f53\u4e8e18.2 ms\uff09\u8fd9\u6837\u7684\u6c34\u5e73\uff0c\u5e76\u7ef4\u6301\u9ad8\u5e27\u7387\u3002")))}y.isMDXComponent=!0}}]);