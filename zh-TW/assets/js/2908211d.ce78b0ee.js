"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9716],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},29415:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},31217:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=l},12809:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return y},default:function(){return C},frontMatter:function(){return T},metadata:function(){return I},toc:function(){return x}});var r=n(3905),l=n(39130),a=n(29415),o=n(67294);class i extends o.Component{render(){return o.createElement("i",null,this.props.children)}}var p=i,u=n(31217),s=n(22425),d=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(k)for(var n of k(t))h.call(t,n)&&g(e,n,t[n]);return e};const T={id:"backend-communication",title:"\u5f8c\u7aef\u901a\u4fe1"},y=void 0,I={unversionedId:"development/ui-development/touchgfx-engine-features/backend-communication",id:"development/ui-development/touchgfx-engine-features/backend-communication",title:"\u5f8c\u7aef\u901a\u4fe1",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/backend-communication",permalink:"/zh-TW/docs/development/ui-development/touchgfx-engine-features/backend-communication",draft:!1,tags:[],version:"current",frontMatter:{id:"backend-communication",title:"\u5f8c\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u4e8c\u9032\u4f4d\u7ffb\u8b6f",permalink:"/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"},next:{title:"Mixins",permalink:"/zh-TW/docs/development/ui-development/touchgfx-engine-features/mixins"}},M={},x=[{value:"Model\u985e",id:"the-model-class",level:2},{value:"\u7cfb\u7d71\u4ecb\u9762",id:"system-interfacing",level:2},{value:"\u5f9eGUI\u4efb\u52d9\u63a1\u6a23",id:"sampling-from-gui-task",level:3},{value:"\u5f9e\u4e8c\u7d1a\u4efb\u52d9\u63a1\u6a23",id:"sampling-from-secondary-task",level:3},{value:"\u5411UI\u50b3\u64ad\u8cc7\u6599",id:"propagating-data-to-ui",level:2},{value:"\u5f9eUI\u5411\u5468\u570d\u7cfb\u7d71\u767c\u9001\u8cc7\u6599",id:"transmitting-data-from-ui-to-surrounding-system",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u4f86\u81eaGUI\u4efb\u52d9",id:"from-gui-task",level:3},{value:"\u4f86\u81ea\u5176\u4ed6\u4efb\u52d9",id:"from-other-task",level:3},{value:"\u4f86\u81ea\u591a\u500b\u4efb\u52d9",id:"from-multiple-tasks",level:3},{value:"\u4f86\u81ea\u4efb\u52d9\u548c\u5916\u90e8\u4e2d\u65b7\u7dda\u8def",id:"from-task-and-external-interrupt-line",level:3}],b={toc:x};function C(e){var t,n=e,{components:o}=n,i=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},b),i),c(t,m({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u5927\u591a\u6578\u61c9\u7528\u4e2d\uff0cUI\u9700\u4ee5\u67d0\u7a2e\u65b9\u5f0f\u9023\u63a5\u5230\u7cfb\u7d71\u7684\u5176\u9918\u90e8\u5206\uff0c\u4e26\u767c\u9001\u548c\u63a5\u6536\u8cc7\u6599\u3002 \u9019\u53ef\u80fd\u6703\u9023\u63a5\u786c\u9ad4\u5916\u8a2d\uff08\u611f\u6e2c\u5668\u8cc7\u6599\u3001\u985e\u6bd4/\u6578\u4f4d\u8f49\u63db\u548c\u4e32\u5217\u901a\u4fe1\u7b49\uff09\u6216\u5176\u4ed6\u8edf\u9ad4\u6a21\u7d44\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u5c07\u4ecb\u7d39\u5be6\u73fe\u6b64\u985e\u9023\u63a5\u7684\u63a8\u85a6\u89e3\u6c7a\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u7a2e\u65b9\u6cd5\u662f\u4e00\u7a2e",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"\u201c\u5feb\u800c\u4e0d\u7cbe\u201d"),"\u7684\u65b9\u6cd5\uff0c\u4e3b\u8981\u7528\u65bc\u539f\u578b\u958b\u767c\uff0c\u800c",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"\u7b2c\u4e8c\u7a2e\u65b9\u6cd5"),"\u662f\u4e00\u7a2e\u5728\u67b6\u69cb\u4e0a\u8f03\u5b8c\u5584\u7684\u65b9\u6cd5\uff0c\u53ef\u6b63\u78ba\u5730\u9023\u63a5UI\u8207\u73fe\u5be6\u4e16\u754c\u4e2d\u7684\u5269\u9918\u5143\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u6587\u672b\uff0c\u6211\u5011\u5c07\u9023\u7d50\u4f7f\u7528\u5169\u7a2e\u65b9\u6cd5\u7684\u7bc4\u4f8b\u3002"),(0,r.kt)("h2",v({},{id:"the-model-class"}),"Model\u985e"),(0,r.kt)("p",null,"\u6240\u6709TouchGFX\u61c9\u7528\u90fd\u6709Model\u985e\uff0c\u9664\u4e86\u5b58\u5132UI\u72c0\u614b\u8cc7\u8a0a\uff0c\u9084\u7528\u4f5c\u9762\u5411\u5468\u570d\u7cfb\u7d71\u7684\u4ecb\u9762\u3002 \u9019\u88e1\u6211\u5011\u6307\u7684\u662f\u5169\u7a2e\u786c\u9ad4\u5916\u8a2d\uff0c\u4f46\u4e5f\u8207\u7cfb\u7d71\u4e2d\u7684\u5176\u4ed6OS\u4efb\u52d9\u9032\u884c\u901a\u4fe1\u3002 \u597d\u7684\u8a2d\u8a08\u901a\u5e38\u4e0d\u6703\u5728\u5404\u81ea\u7684View\u985e\u4e2d\u8a2a\u554f\u5176\u4ed6\u8edf\u9ad4\u6a21\u7d44\u6216\u786c\u9ad4\u3002"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},"\u5982\u9700\u77ad\u89e3\u66f4\u591a\u95dc\u65bcModel\u7684\u77e5\u8b58\uff0c\u8acb\u53c3\u8003\uff1a",(0,r.kt)(l.Z,{to:"../software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP\u6a21\u5f0f")),(0,r.kt)("p",null,"Model\u985e\u975e\u5e38\u9069\u5408\u653e\u7f6e\u4efb\u4f55\u6b64\u985e\u4ecb\u9762\u7a0b\u5f0f\u78bc\uff0c\u539f\u56e0\u5728\u65bc\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Model\u985e\u6709 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"tick()")," \u51fd\u6578\uff0c\u6703\u5728\u6bcf\u4e00\u5e40\u81ea\u52d5\u547c\u53eb\uff0c\u4e26\u4e14\u53ef\u5be6\u73fe\u7528\u65bc\u67e5\u627e\u4f86\u81ea\u5176\u4ed6\u5b50\u6a21\u7d44\u7684\u4e8b\u4ef6\u6216\u5c0d\u4e8b\u4ef6\u4f5c\u51fa\u53cd\u61c9\u3002"),(0,r.kt)("li",{parentName:"ol"},"Model\u985e\u5177\u6709\u6307\u5411\u7576\u524d\u6d3b\u52d5Presenter\u7684\u6307\u6a19\uff0c\u70ba\u7684\u662f\u80fd\u5920\u5c07\u50b3\u5165\u4e8b\u4ef6\u901a\u77e5UI\u3002")),(0,r.kt)("h2",v({},{id:"system-interfacing"}),"\u7cfb\u7d71\u4ecb\u9762"),(0,r.kt)("p",null,"\u8207\u5468\u570d\u7cfb\u7d71\u9023\u63a5\u7684\u65b9\u5f0f\u6709\u5169\u7a2e\uff1a\u4e00\u7a2e\u662f\u5f9eGUI\u4efb\u52d9\u76f4\u63a5\u63a1\u6a23\uff0c\u53e6\u4e00\u7a2e\u662f\u5f9e\u4e8c\u7d1a\u4efb\u52d9\u63a1\u6a23"),(0,r.kt)("h3",v({},{id:"sampling-from-gui-task"}),"\u5f9eGUI\u4efb\u52d9\u63a1\u6a23"),(0,r.kt)("p",null,"\u9023\u63a5\u5468\u570d\u7cfb\u7d71\u7684\u6700\u4f73\u65b9\u5f0f\u53d6\u6c7a\u65bc\u60a8\u9700\u8981\u7684\u63a1\u6a23\u983b\u7387\u3001\u6642\u9593\u6d88\u8017\u548c\u6642\u9593\u56b4\u683c\u6027\u7684\u8981\u6c42\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9019\u4e9b\u65b9\u9762\u7684\u8981\u6c42\u4e26\u4e0d\u56b4\u683c\uff0c\u90a3\u9ebc\u6700\u7c21\u55ae\u7684\u65b9\u6cd5\u5c31\u662f\u5728 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \u51fd\u6578\u4e2d\u76f4\u63a5\u5c0d\u5468\u570d\u7cfb\u7d71\u9032\u884c\u63a1\u6a23\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u63a1\u6a23\u983b\u7387\u4f4e\u65bc\u5e40\u7387\uff08\u901a\u5e38\u7d04\u70ba60Hz\uff09\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u8a08\u6578\u5668\uff0c\u4e26\u4e14\u53ea\u5728\u6bcf\u6b21\u7684\u7b2cN\u500b\u8a08\u6578\u9ede\u63a1\u6a23\u3002 \u5982\u679c\u9019\u6a23\u505a\uff0c\u5247\u63a1\u6a23\u64cd\u4f5c\u5fc5\u9808\u7a0d\u5fae\u5feb\u4e00\u4e9b\uff08\u901a\u5e38\u70ba1ms\u6216\u66f4\u77ed\uff09\uff0c\u5426\u5247\u6703\u5f71\u97ff\u5e40\u7387\uff0c\u56e0\u70ba\u63a1\u6a23\u662f\u5728GUI\u4efb\u52d9\u7684\u80cc\u666f\u4e0b\u57f7\u884c\u7684\u4e26\u4e14\u6703\u5ef6\u9072\u5e40\u7e6a\u88fd\u3002"),(0,r.kt)("h3",v({},{id:"sampling-from-secondary-task"}),"\u5f9e\u4e8c\u7d1a\u4efb\u52d9\u63a1\u6a23"),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u4e0d\u65b9\u4fbf\u5c07\u8207\u5468\u570d\u7cfb\u7d71\u7684\u4ea4\u4e92\u76f4\u63a5\u653e\u5728GUI\u4efb\u52d9\u7684\u80cc\u666f\u4e0b\uff0c\u53ef\u4ee5\u65b0\u5efa\u8ca0\u8cac\u57f7\u884c\u63a1\u6a23\u7684OS\u4efb\u52d9\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u6839\u64da\u7279\u5b9a\u5834\u666f\u7684\u9700\u8981\uff0c\u5c07\u8a72\u4efb\u52d9\u914d\u7f6e\u70ba\u4ee5\u6e96\u78ba\u7684\u6642\u9593\u9593\u9694\u904b\u884c\u3002 \u6b64\u5916\uff0c\u6839\u64da\u60a8\u7684\u9700\u6c42\uff0c\u6b64\u65b0\u4efb\u52d9\u7684\u512a\u5148\u9806\u5e8f\u53ef\u4ee5\u4f4e\u65bc\u6216\u9ad8\u65bcGUI\u4efb\u52d9\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u512a\u5148\u9806\u5e8f\u66f4\u9ad8\uff0c\u5247\u53ef\u4ee5\u78ba\u4fdd\u5b83\u6703\u6e96\u78ba\u5730\u5728\u6307\u5b9a\u6642\u9593\u904b\u884c\uff0c\u7121\u8ad6GUI\u4efb\u52d9\u5728\u57f7\u884c\u4ec0\u9ebc\u64cd\u4f5c\u3002 \u6709\u4e00\u500b\u7f3a\u9ede\u662f\uff0c\u5982\u679c\u662fCPU\u5360\u7528\u91cf\u5927\u7684\u9032\u7a0b\uff0c\u53ef\u80fd\u6703\u5f71\u97ffUI\u7684\u5e40\u7387\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u63a1\u6a23\u5c0d\u6642\u9593\u7684\u8981\u6c42\u4e0d\u56b4\u683c\uff0c\u5247\u53ef\u4ee5\u5206\u914d\u4f4e\u65bcGUI\u4efb\u52d9\u7684\u512a\u5148\u9806\u5e8f\uff0c\u9019\u6a23UI\u5e40\u7387\u5c07\u6c38\u9060\u4e0d\u53d7\u5468\u570d\u7cfb\u7d71\u63a1\u6a23\u7684\u5f71\u97ff\u3002 \u5728\u6e32\u67d3\u6642\uff0cGUI\u4efb\u52d9\u5c07\u4f11\u7720\u5f88\u9577\u6642\u9593\uff08\u5982\u5728\u7b49\u5f85\u57fa\u65bcDMA\u7684\u50cf\u7d20\u50b3\u8f38\u5b8c\u6210\u6642\uff09\uff0c\u5141\u8a31\u512a\u5148\u9806\u5e8f\u8f03\u4f4e\u7684\u4efb\u52d9\u983b\u7e41\u904b\u884c\uff0c\u9019\u5c0d\u7d55\u5927\u591a\u6578\u61c9\u7528\u800c\u8a00\u8db3\u5920\u4e86\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u4e8c\u7d1a\u4efb\u52d9\u6cd5\uff0c\u5efa\u8b70\u60a8\u4f7f\u7528RTOS\u63d0\u4f9b\u7684\u4efb\u52d9\u9593\u6d88\u606f\u50b3\u9001\u7cfb\u7d71\u3002 \u5927\u591a\u6578\uff08\u5982\u679c\u4e0d\u662f\u5168\u90e8\uff09RTOSes\u5177\u6709\u4f47\u5217/\u90f5\u4ef6\u6a5f\u5236\uff0c\u53ef\u5f9e\u4e00\u500b\u4efb\u52d9\u5411\u53e6\u4e00\u500b\u4efb\u52d9\u767c\u9001\u8cc7\u6599\uff08\u901a\u5e38\u70ba\u4f7f\u7528\u8005\u5b9a\u7fa9\u7684C\u8a9e\u8a00\u7d50\u69cb\u9ad4\u3001\u4f4d\u5143\u7d44\u9663\u5217\u6216\u7c21\u55ae\u7684\u6574\u6578\uff09\u3002 \u70ba\u4e86\u5c07\u65b0\u8cc7\u6599\u50b3\u905e\u7d66GUI\u4efb\u52d9\uff0c\u70baUI\u4efb\u52d9\u8a2d\u7f6e\u90f5\u7bb1\u6216\u8a0a\u606f\u4f47\u5217\uff0c\u4e26\u4f7f\u7528\u6b64\u6d88\u606f\u50b3\u9001\u7cfb\u7d71\u5c07\u8cc7\u6599\u767c\u9001\u7d66GUI\u4efb\u52d9\u3002 \u7136\u5f8c\u53ef\u4ee5 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \u8f2a\u8a62GUI\u4efb\u52d9\u7684\u90f5\u7bb1\uff0c\u67e5\u770b\u662f\u5426\u6709\u4efb\u4f55\u65b0\u8cc7\u6599\u5230\u9054\u3002 \u5982\u679c\u6709\uff0c\u8b80\u53d6\u8cc7\u6599\u4e26\u76f8\u61c9\u5730\u66f4\u65b0UI\u3002"),(0,r.kt)("h2",v({},{id:"propagating-data-to-ui"}),"\u5411UI\u50b3\u64ad\u8cc7\u6599"),(0,r.kt)("p",null,"\u7121\u8ad6\u60a8\u4f7f\u7528",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"\u5f9eGUI\u4efb\u52d9\u63a1\u6a23"),"\u9084\u662f",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"\u5f9e\u4e8c\u7d1a\u4efb\u52d9\u63a1\u6a23"),"\uff0c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \u51fd\u6578\u90fd\u662fGUI\u4efb\u52d9\u767c\u73fe\u8981\u5728UI\u4e2d\u986f\u793a\u7684\u65b0\u8cc7\u6599\u7684\u5730\u65b9\u3002 \u9664\u4e86\u5145\u7576\u5468\u570d\u7cfb\u7d71\u7684\u4ecb\u9762\uff0cModel\u985e\u9084\u8ca0\u8cac\u4fdd\u5b58\u72c0\u614b\u8cc7\u6599\uff08\u5982\u524d\u6587\u6240\u8ff0\uff09\uff0c\u56e0\u6b64\u53ef\u80fd\u6709\u4e9b\u72c0\u614b\u8b8a\u6578\u4e5f\u9700\u8981\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u4f86\u8003\u616e\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff1a\u6eab\u5ea6\u611f\u6e2c\u5668\u9023\u63a5\u5230\u7cfb\u7d71\uff0c\u7576\u524d\u6eab\u5ea6\u5c07\u986f\u793a\u5728UI\u4e0a\u3002 \u5728\u6e96\u5099\u4e2d\uff0c\u6211\u5011\u5c07\u589e\u52a0Model\u985e\u4ee5\u4fbf\u652f\u63f4\uff1a"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u60c5\u6cc1\u4e0b\uff0c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Presenter")," \u80fd\u5920\u8a62\u554fModel\u7576\u524d\u6eab\u5ea6\uff0c\u4ee5\u4fbf\u5728\u9032\u5165\u986f\u793a\u6eab\u5ea6\u7684\u87a2\u5e55\u6642Presenter\u5728UI\uff08View\uff09\u4e2d\u8a2d\u7f6e\u6b64\u503c\u3002 \u73fe\u5728\uff0c\u9700\u8981\u80fd\u5920\u5728\u63a5\u6536\u5230\u65b0\u7684\u6eab\u5ea6\u8cc7\u8a0a\u6642\u518d\u6b21\u66f4\u65b0UI\u3002 \u70ba\u6b64\uff0c\u6211\u5011\u5229\u7528Model\u6709\u6307\u5411\u7576\u524d\u6d3b\u52d5Presenter\u6307\u6a19\u7684\u7279\u6027\u3002 \u8a72\u6307\u6a19\u7684\u985e\u578b\u662f\u4ecb\u9762\uff08",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"ModelListener"),"\uff09\uff0c\u70ba\u4e86\u53cd\u6620\u5408\u9069\u7684\u61c9\u7528\u7279\u5b9a\u7684\u4e8b\u4ef6\uff0c\u60a8\u53ef\u4ee5\u9032\u884c\u4fee\u6539\uff1a"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"ModelListener.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u6211\u5011\u5df2\u7d93\u9023\u63a5\u4e86\u6b64\u4ecb\u9762\uff0c\u5269\u9918\u7684\u5de5\u4f5c\u662f\u57f7\u884c\u50b3\u5165\u201c",(0,r.kt)(p,{mdxType:"InlineNote"},"\u65b0\u6eab\u5ea6"),"\u201d\u4e8b\u4ef6\u7684\u5be6\u969b\u63a1\u6a23 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u65b9\u6cd5\u53ef\u78ba\u4fdd\u5169\u9ede\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(u.Z,{mdxType:"InlineCode"},"currentTemperature")," \u8b8a\u6578\u7e3d\u662f\u6700\u65b0\u503c\uff0c\u56e0\u6b64Presenter\u53ef\u96a8\u6642\u7372\u53d6\u7576\u524d\u6eab\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Presenter")," \u7acb\u5373\u901a\u77e5\u6eab\u5ea6\u8b8a\u5316\uff0c\u4e26\u80fd\u63a1\u53d6\u5408\u9069\u63aa\u65bd\u3002")),(0,r.kt)("p",null,"MVP\u6a21\u5f0f\u7684\u4e00\u5927\u512a\u52e2\u662f\u6839\u64da\u7576\u524d\u6240\u5728\u87a2\u5e55\u5be6\u73fe\u55ae\u7368\u7684\u901a\u77e5\u8655\u7406\u3002 \u4f8b\u5982\uff0c\u5047\u8a2d\u5728\u986f\u793a\u67d0\u985e\u8a2d\u7f6e\u529f\u80fd\u8868 ",(0,r.kt)(p,{mdxType:"InlineNote"},"\uff08\u5982MainMenuPresenter/MainMenuView\u70ba\u555f\u52d5\u72c0\u614b\uff09")," \u6642\u767c\u751f\u4e86\u6eab\u5ea6\u8b8a\u5316\u4e8b\u4ef6\uff0c\u6b64\u6642\u7576\u524d\u6eab\u5ea6\u7121\u95dc\u7dca\u8981\u3002"),(0,r.kt)("p",null,"\u7531\u65bc ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," \u51fd\u6578\u5177\u6709\u9810\u8a2d\u7684\u7a7a\u57f7\u884c\uff0c\u6b64\u901a\u77e5\u50c5\u6703\u88ab ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"MainMenuPresenter\u5ffd\u7565\u3002"),". \u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u6709 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"TemperatureControlPresenter")," \uff0c\u60a8\u53ef\u4ee5\u5728\u8a72Presenter\u4e2d\u91cd\u5beb ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," \u51fd\u6578\uff0c\u4e26\u901a\u77e5View\u5b83\u61c9\u986f\u793a\u66f4\u65b0\u5f8c\u7684\u6eab\u5ea6\uff1a"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),(0,r.kt)("p",null,"\u7576\u7136\uff0cView\u985e ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"TemperatureControlView"),"\u5fc5\u9808\u5be6\u73fe ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"setTemp")," \u65b9\u6cd5\u3002"),(0,r.kt)("h2",v({},{id:"transmitting-data-from-ui-to-surrounding-system"}),"\u5f9eUI\u5411\u5468\u570d\u7cfb\u7d71\u767c\u9001\u8cc7\u6599"),(0,r.kt)("p",null,"\u53cd\u65b9\u5411\u5f9eUI\u5411\u5468\u570d\u7cfb\u7d71\u50b3\u8f38\u8cc7\u6599/\u4e8b\u4ef6\u6642\uff0c\u5c07\u901a\u904eModel\u4ee5\u5927\u81f4\u4e0a\u76f8\u540c\u7684\u65b9\u5f0f\u4f86\u57f7\u884c\u3002 \u7e7c\u7e8c\u524d\u9762\u7684\u4f8b\u5b50\uff0c\u5982\u679c\u6211\u5011\u9700\u8981\u589e\u52a0\u914d\u7f6e\u65b0\u7684\u76ee\u6a19\u6eab\u5ea6\u7684\u80fd\u529b\uff0c\u6211\u5011\u5c07\u5411Model\u6dfb\u52a0\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u8005\u5728UI\u4e2d\u8a2d\u7f6e\u65b0\u7684\u76ee\u6a19\u6eab\u5ea6\uff0cView\u53ef\u901a\u77e5\u4fdd\u6709\u6307\u5411Model\u7269\u4ef6\u6307\u6a19\u7684Presenter\uff0c\u5f9e\u800c\u80fd\u5920\u547c\u53eb ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"setNewTargetTemperature")," \u51fd\u6578\u4e2d\u76f4\u63a5\u5c0d\u5468\u570d\u7cfb\u7d71\u9032\u884c\u63a1\u6a23\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u662f\u70ba\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\uff08BSD\uff09\uff0c\u4f46\u6f14\u793a\u7684\u8a31\u591a\u7a0b\u5f0f\u78bc\u53ef\u91cd\u8907\u7528\u65bc\u5176\u4ed6\u6f14\u793a\u677f\u548c\u81ea\u8a02\u786c\u9ad4\u3002 \u5c0d\u65bc\u9019\u4e9b\u7bc4\u4f8b\uff0c\u6211\u5011\u5728STM32CubeMX\u4e2d\u5275\u5efa\u4efb\u52d9\u548c\u4f47\u5217\u3002 \u6211\u5011\u7136\u5f8c\u586b\u5145\u751f\u6210\u7684\u4efb\u52d9\uff0c\u4e26\u5728 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"main_user.c\u4e2d\u5be6\u73fe\u7bc4\u4f8b\u7528\u6236\u7a0b\u5f0f\u78bc\u3002"),". \u7bc4\u4f8b\u4f7f\u7528STM32CubeMX BSP\u5eab\u4f86\u63a7\u5236STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u7684LED\u3001\u4f7f\u7528\u8005\u6309\u9215\u3001\u4ee5\u53ca\u5176\u4ed6\u5916\u8a2d\u3002"),(0,r.kt)("h3",v({},{id:"from-gui-task"}),"\u4f86\u81eaGUI\u4efb\u52d9"),(0,r.kt)("p",null,"\u4e00\u500b\u7bc4\u4f8b\u61c9\u7528\u3001\u4e00\u500bBSD\uff0c\u4f4d\u65bc\u6700\u65b0\u7248\u672c\u7684TouchGFX Designer\u4e0b\uff0c\u5177\u9ad4\u8def\u5f91\uff1a\u6f14\u793a-> \u958b\u767c\u677f\u7279\u5b9a\u6f14\u793a-> STM32F46G\u63a2\u7d22\u5957\u4ef6\u63a7\u5236LED\uff08\u5f9eGUI\uff09\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u6f14\u793a\u5982\u4f55\u5c0d\u6309\u9215\u9032\u884c\u63a1\u6a23\u548c\u63a7\u5236LED\u3002 Model\u985e\u5c0d\u6309\u9215\u63a1\u6a23\uff0c\u4e26\u66f4\u65b0LED\u4ee5\u8207\u61c9\u7528\u72c0\u614b\u76f8\u5339\u914d\u3002"),(0,r.kt)("h3",v({},{id:"from-other-task"}),"\u4f86\u81ea\u5176\u4ed6\u4efb\u52d9"),(0,r.kt)("p",null,"\u4e00\u500b\u7bc4\u4f8b\u61c9\u7528\u3001\u4e00\u500bBSD\uff0c\u4f4d\u65bc\u6700\u65b0\u7248\u672c\u7684TouchGFX Designer\u4e0b\uff0c\u5177\u9ad4\u8def\u5f91\uff1a\u6f14\u793a-> \u958b\u767c\u677f\u7279\u5b9a\u6f14\u793a-> STM32H7B3I\u8a55\u4f30\u677f\u6a21\u64ec\u63a1\u6a23\u5668\u4efb\u52d9\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u6f14\u793a\u5982\u4f55\u5728\u55ae\u7368\u7684\u57f7\u884c\u7dd2\u4e2d\u5c0d\u6a21\u64ec\u8f38\u5165\u9032\u884c\u63a1\u7528\u3002 \u8a72\u7bc4\u4f8b\u4f7f\u7528MVP\u67b6\u69cb\u5c07\u6a21\u64ec\u503c\u50b3\u8f38\u5230View\u3002"),(0,r.kt)("p",null,"\u4e00\u500b\u7bc4\u4f8b\u61c9\u7528\u3001\u4e00\u500bBSD\uff0c\u4f4d\u65bc\u6700\u65b0\u7248\u672c\u7684TouchGFX Designer\u4e0b\uff0c\u5177\u9ad4\u8def\u5f91\uff1a\u6f14\u793a-> \u958b\u767c\u677f\u7279\u5b9a\u6f14\u793a-> STM32F46G\u63a2\u7d22\u5957\u4ef6\u4efb\u52d9\u9593\u901a\u4fe1\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u6f14\u793a\u4e86\u4efb\u52d9\u9593\u901a\u4fe1\uff0c\u4ee5\u53ca\u8207UI\u4e4b\u9593\u7684\u50b3\u64ad\u3002 \u5728\u60a8\u81ea\u5df1\u9032\u884c\u8a2d\u7f6e\u6642\uff0c\u5b83\u4e5f\u8a31\u80fd\u6fc0\u767c\u60a8\u7684\u9748\u611f\u3002 \u8a72\u7bc4\u4f8b\u5728\u7528C\u7a0b\u5f0f\u78bc\u5be6\u73fe\u7684\u5f8c\u7aef\u7cfb\u7d71\u8207C++ TouchGFX GUI\u4e4b\u9593\u9032\u884c\u901a\u4fe1\u3002 \u8a72\u7bc4\u4f8b\u5728FreeRTOS\u4e4b\u4e0a\u7684STM32F746G-DISCO\u677f\u4e0a\u904b\u884c\u3002"),(0,r.kt)("h3",v({},{id:"from-multiple-tasks"}),"\u4f86\u81ea\u591a\u500b\u4efb\u52d9"),(0,r.kt)("p",null,"\u4e00\u500b\u7bc4\u4f8b\u61c9\u7528\u3001\u4e00\u500bBSD\uff0c\u4f4d\u65bc\u6700\u65b0\u7248\u672c\u7684TouchGFX Designer\u4e0b\uff0c\u5177\u9ad4\u8def\u5f91\uff1a\u6f14\u793a-> \u958b\u767c\u677f\u7279\u5b9a\u6f14\u793a-> STM32F769I\u63a2\u7d22\u5957\u4ef6\u591a\u5de5\u901a\u4fe1\u6f14\u793a\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u5c0d\u6309\u9215\u72c0\u614b\u9032\u884c\u63a1\u6a23\uff0c\u4e26\u5728\u6309\u4e0b\u6309\u9215\u6642\u901a\u904eGUI\u8a0a\u606f\u4f47\u5217\u50b3\u905e\u6d88\u606f\u3002 \u56e0\u6b64\uff0c\u6211\u5011\u53ef\u4ee5\u901a\u904e\u6309\u4f4f\u6309\u9215\u4f86\u63a8\u9032\u61c9\u7528\u4e2d\u7684\u52d5\u756b\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u4f7f\u7528\u4e09\u500bFreeRTOS\u4efb\u52d9\u3002 \u4e00\u500b\u7528\u65bcGUI\uff0c\u53e6\u5916\u5169\u500b\u5206\u5225\u7528\u65bc\u5169\u500b\u5916\u8a2d\uff08LED\u548c\u4f7f\u7528\u8005\u6309\u9215\uff09\u3002"),(0,r.kt)("h3",v({},{id:"from-task-and-external-interrupt-line"}),"\u4f86\u81ea\u4efb\u52d9\u548c\u5916\u90e8\u4e2d\u65b7\u7dda\u8def"),(0,r.kt)("p",null,"\u4e00\u500b\u7bc4\u4f8b\u61c9\u7528\u3001\u4e00\u500bBSD\uff0c\u4f4d\u65bc\u6700\u65b0\u7248\u672c\u7684TouchGFX Designer\u4e0b\uff0c\u5177\u9ad4\u8def\u5f91\uff1a\u6f14\u793a-> \u958b\u767c\u677f\u7279\u5b9a\u6f14\u793a-> STM32F769I\u63a2\u7d22\u5957\u4ef6\u5916\u90e8\u4e2d\u65b7\u7dda\u8def\u6f14\u793a\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u5c08\u70baSTM32F769I-DISCO\u958b\u767c\u677f\u800c\u8a2d\u8a08\uff0c\u5b83\u8207LED\u548c\u4f7f\u7528\u8005\u6309\u9215\u4ea4\u4e92\uff0c\u4ee5\u4fbf\u5c55\u793a\u5982\u4f55\u5c07C\u7a0b\u5f0f\u78bc\u548c\u786c\u9ad4\u5916\u8a2d\u96c6\u6210\u5230TouchGFX\u61c9\u7528\u4e2d\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u4ee5EXTI\u6a21\u5f0f\u914d\u7f6e\u6309\u9215\uff08\u5916\u90e8\u4e2d\u65b7\u7dda\u8def0\uff09\u3002 \u5176\u884c\u70ba\u662f\u5728\u6309\u4e0b\u6309\u9215\u6642\u63a5\u6536\u4e2d\u65b7\uff0c\u6b64\u5f8c\u4e2d\u65b7\u6e05\u96f6\u3002 \u9019\u4e0d\u5141\u8a31\u51fa\u73fe\u8207GPIO\u6a21\u5f0f\u4e0b\u76f8\u540c\u7684\u884c\u70ba\uff0c\u800c\u6703\u662f\u55ae\u6b65\u52d5\u756b\uff0c\u539f\u56e0\u5728\u65bc\u53ea\u5728\u63a5\u6536\u5230\u4e2d\u65b7\u6642\u901a\u904eGUI\u8a0a\u606f\u4f47\u5217\u767c\u9001\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u4f7f\u7528\u5169\u500bFreeRTOS\u4efb\u52d9\u3002 \u4e00\u500b\u7528\u65bcGUI\uff0c\u4e00\u500b\u7528\u65bcLED\u3002 \uff08",(0,r.kt)("a",v({parentName:"p"},{href:"#from-multiple-tasks"}),"\u591a\u5de5\u6f14\u793a"),"\u4e2d\u7684Button\u4efb\u52d9\u5728\u8a72\u61c9\u7528\u4e2d\u4ecd\u8655\u65bc\u6d3b\u52d5\u72c0\u614b\uff0c\u7528\u65bc\u8209\u4f8b\u8aaa\u660e\u5916\u8a2d\u4ea4\u4e92\u7a0b\u5f0f\u78bc\u5df2\u79fb\u81f3\u4e2d\u65b7\u8655\u7406\u51fd\u6578\u4e2d\uff09\u3002"))}C.isMDXComponent=!0}}]);