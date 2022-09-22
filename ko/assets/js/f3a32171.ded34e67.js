"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7731],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},18735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return N},default:function(){return y},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return S}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),c=n(39130),s=n(22425),p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&h(e,n,t[n]);return e};const f={id:"scroll-list",title:"Scroll List"},N=void 0,b={unversionedId:"development/ui-development/ui-components/containers/scroll-list",id:"development/ui-development/ui-components/containers/scroll-list",title:"Scroll List",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-list.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-list",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/ui-components/containers/scroll-list",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-list",title:"Scroll List"},sidebar:"docs",previous:{title:"Modal Window",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/ui-components/containers/modal-window"},next:{title:"Scroll Wheel",permalink:"/touchgfx-test.github.io/ko/docs/development/ui-development/ui-components/containers/scroll-wheel"}},w={},S=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"Item Templates",id:"item-templates",level:3},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],x={toc:S};function y(e){var t,n=e,{components:p}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},x),h),m(t,d({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Scroll List\ub780 \ub2e4\uc218\uc758 \ud56d\ubaa9\uacfc \uc704\uc82f\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc2a4\ud06c\ub864\uc774 \uac00\ub2a5\ud55c \uba54\ub274\ub97c \ub9d0\ud558\uba70, \uc774\ub7ec\ud55c \ud56d\ubaa9\uacfc \uc704\uc82f\uc740 view\ub85c \uc2a4\ud06c\ub864\ud560 \ub54c\ub9c8\ub2e4 \ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4. \ub610\ud55c \uad6c\uc131\ub41c \uac01 \ud56d\ubaa9\uacfc \uc0c1\ud638\uc791\uc6a9\ud560 \ub54c \ucf5c\ubc31\uc744 \ud638\ucd9c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-appearance.gif",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Scroll List"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Scroll List\ub294 TouchGFX Designer\uc5d0\uc11c Containers \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 \uc2a4\ud06c\ub864 \ub9ac\uc2a4\ud2b8"),(0,r.kt)("h2",v({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \uc2a4\ud06c\ub864 \ub9ac\uc2a4\ud2b8\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Type\uc740 ")," Scroll List\uc758 \uc138\ub85c \ub610\ub294 \uac00\ub85c \ubc29\ud5a5\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y\ub294")," \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H\ub294 ")," \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock\uc740 ")," \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible\uc740 ")," \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc0c1\ud638\uc791\uc6a9\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Item Template")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Item Template\uc740 ")," \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud560 CustomContainer\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Number of Items\ub294")," Scroll List\uc5d0 \ud3ec\ud568\ub418\ub294 \ud56d\ubaa9\uc758 \uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"List Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Circular\ub294 ")," \uc2a4\ud06c\ub864\uc774 \ub05d\uc5d0 \ub3c4\ub2ec\ud588\uc744 \ub54c \uc2a4\ud06c\ub864 \ub9ac\uc2a4\ud2b8 \ud56d\ubaa9\uc758 \uc21c\ud658 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Items Snap\uc740 ")," \ud56d\ubaa9\uc758 \uc2a4\ub0c5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"snapping\uc774 false\ub85c \uc124\uc815\ub418\uba74 \ud56d\ubaa9\uc774 \ub9c9\ud798 \uc5c6\uc774 \uc774\ub3d9\ud569\ub2c8\ub2e4. Snapping\uc774 true\ub85c \uc124\uc815\ub418\uba74 \ud56d\ubaa9\uc774 \ub9c8\uce58 \ub04a\uae30\ub4ef \uc81c\uc790\ub9ac\ub85c \uc774\ub3d9\ud558\uc5ec \ud56d\uc0c1 \uc120\ud0dd\ub41c \uc9c0\uc810\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Item Margin\uc740")," \ud56d\ubaa9 \uac04 \uac04\uaca9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Padding Before"),"\uc640 ",(0,r.kt)("em",{parentName:"td"},"Padding After\ub294 ")," Scroll List\uc5d0\uc11c \ud45c\uc2dc\ud558\ub294 \uadf8\ub9b4 \uc218 \uc788\ub294 \uac83\ub4e4 \uc55e\ub4a4\uc758 \uac70\ub9ac \uc624\ud504\uc14b\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Easing")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Easing Option\uc740 ")," \uc560\ub2c8\uba54\uc774\uc158\uc5d0 \uc0ac\uc6a9\ud560 \uc644\ud654 \ubc29\uc815\uc2dd(easing euation) \uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Swipe Acc.")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Drag Acc. \ub294")," \uc2a4\ud06c\ub864 \uc2dc \uac00\uc18d\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable\uc740")," \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener\ub294 ")," \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator\ub294 "),"\uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",v({},{id:"item-templates"}),"Item Templates"),(0,r.kt)("p",null,"Scroll List\uc758 \ud56d\ubaa9\uc740 ",(0,r.kt)("em",{parentName:"p"},"Item Template")," \uac1c\ub150\uc744 \ub530\ub985\ub2c8\ub2e4. Item Template\uc774\ub780 Scroll List\uc758 \ud56d\ubaa9\uc5d0\uac8c \uadf8\ub798\ud53d \uc694\uc18c\ub97c \uc704\ud55c \uae30\ucd08 \uc5ed\ud560\uc744 \ud558\ub294 ",(0,r.kt)("a",v({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\ub97c \ub9d0\ud569\ub2c8\ub2e4. Scroll List\ub97c \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \uc2a4\ud06c\ub864 \ub9ac\uc2a4\ud2b8\uc5d0 \uc0ac\uc6a9\ud560 \ud56d\ubaa9 \ud15c\ud50c\ub9bf\uc744 \ucd94\uac00\ud560 \uc218 \uc788\ub294 Custom container\ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"Scroll List\ub97c \uc0dd\uc131\ud588\ub2e4\uba74 ",(0,r.kt)("em",{parentName:"p"},"Item Template")," \uc18d\uc131\uc5d0\uc11c CustomContainer\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,r.kt)("em",{parentName:"p"},"Item Template")," \uc18d\uc131\uc744 \uc9c0\uc815\ud558\uba74 Scroll List\uc758 \ud06c\uae30\ub97c \uc870\uc815\ud558\uc5ec \uc120\ud0dd\ud55c Custom Container\uc5d0\uc11c \uc2a4\ud06c\ub864\uc774 \uac00\ub2a5\ud55c \ubc29\ud5a5(\uc218\uc9c1 \uc2a4\ud06c\ub864 \ub9ac\uc2a4\ud2b8\uc758 \uacbd\uc6b0 \uac00\ub85c \uae38\uc774, \uc218\ud3c9 Scroll List\uc758 \uacbd\uc6b0 \uc138\ub85c \uae38\uc774) \uacfc \ub2e4\ub978 \ud06c\uae30 \uc18d\uc131\uc5d0 \ub9de\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud06c\uae30 \uc18d\uc131(\uc218\uc9c1\uc758 \uacbd\uc6b0 \uc138\ub85c \uae38\uc774, \uc218\ud3c9\uc758 \uacbd\uc6b0 \uac00\ub85c \uae38\uc774)\uae4c\uc9c0 \ubcc0\uacbd\ud558\uba74 \uac00\uc2dc \ud56d\ubaa9\uc758 \uc218\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"Scroll List\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"\uc2a4\ud06c\ub864 \ub9ac\uc2a4\ud2b8\ub294 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Scroll List\ub294 ",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"Container")," \uc720\ud615\uc73c\ub85c \uae30\ubcf8\uc801\uc73c\ub85c \ub4dc\ub85c\uc6b0 \uccb4\uc778\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc131\ub2a5\uc740 \uc804\uc801\uc73c\ub85c \ud558\uc704 \uc704\uc82f\uc758 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",v({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Scroll List\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollList.setPosition(140, 10, 200, 252);\n    scrollList.setHorizontal(false);\n    scrollList.setCircular(false);\n    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);\n    scrollList.setSwipeAcceleration(10);\n    scrollList.setDragAcceleration(10);\n    scrollList.setNumberOfItems(20);\n    scrollList.setPadding(0, 0);\n    scrollList.setSnapping(false);\n    scrollList.setDrawableSize(50, 2);\n    scrollList.setDrawables(scrollListListItems, updateItemCallback);\n\n    add(scrollList);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollList.initialize();\n    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)\n    {\n        scrollListListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollListListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollListUpdateItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 ScrollList \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"scrollList.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,r.kt)("p",null,"Scroll List\uc758 \uadf8\ub798\ud53d \uc694\uc18c\uc640 \uc18d\uc131\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \ub9c8\ucce4\ub2e4\uba74 \uc774\uc81c \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec Scroll List\uc758 \ud56d\ubaa9\ub4e4\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase")," \ud074\ub798\uc2a4\uc758 \ud5e4\ub354 \ud30c\uc77c\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"ScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"class ScreenViewBase : public touchgfx::View\n{\npublic:\n    ScreenViewBase();\n    virtual ~ScreenViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen\n    }\n\nprotected:\n    FrontendApplication& application() {\n         return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n    touchgfx::BoxWithBorder boxWithBorder;\n    touchgfx::ScrollList scrollList;\n    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n};\n")),(0,r.kt)("p",null,"TouchGFX Designer\uac00 Scroll List \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uba74 \uc704\uc5d0\uc11c \uac15\uc870 \ud45c\uc2dc\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \ud568\uc218\uac00 \uc0dd\uc131\ub418\uc5b4 \uc0ac\uc6a9\uc790\uac00 Scroll List\uc758 \ud56d\ubaa9\ub4e4\uc744 \uc7ac\uc815\uc758\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Scroll List\uc5d0\uc11c \ud56d\ubaa9 \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud560 \ub54c\ub9c8\ub2e4 \ud568\uc218\uac00 \ud638\ucd9c\ub418\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c\ub85c \ud45c\uc2dc\ub418\uae30 \uc804\uc5d0 \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \ud568\uc218\uc5d0 \uc788\ub294 \ub450 \uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218\ub294 \uc5c5\ub370\uc774\ud2b8 \uc911\uc778 \ud56d\ubaa9\uc744 \uc2dd\ubcc4\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud558\ub098\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \ub9e4\uac1c\ubcc0\uc218\ub85c\uc11c, \ud56d\ubaa9\uc758 \uc778\ub371\uc2a4 \uac12\uc774 \ud3ec\ud568\ub418\uc5b4 \uc5c5\ub370\uc774\ud2b8 \uc911\uc778 \ud56d\ubaa9\uc744 \uc2dd\ubcc4\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub2e4\ub978 \ud558\ub098\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \ub9e4\uac1c\ubcc0\uc218\ub85c\uc11c, Scroll List\uc5d0 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc778 CustomContainer \uac1d\uccb4\uc5d0 \ub300\ud55c \ucc38\uc870\uc785\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub530\ub77c \uadf8\ub798\ud53d\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uba74 Scroll List\uc5d0 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc5d0 \ub300\ud55c \ub80c\ub354\ub9c1\uc774 \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \ud1b5\ud569 \uc608\uc81c\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/ScreenPresenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HP\n")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n{\n    item.setValue(itemIndex);\n}\n")),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," \ud5e4\ub354 \ud30c\uc77c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," \ud568\uc218\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," \ud30c\uc77c\uc5d0\uc11c \uc7ac\uc815\uc758\ub41c \ud6c4 \uad6c\ud604\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc758 \ubaa9\uc801\uc740 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc758 \uc778\ub371\uc2a4 \uac12\uc744 \uc774\uc6a9\ud574 Item Template\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud55c \uac83\uc73c\ub85c, ",(0,r.kt)("a",v({parentName:"p"},{href:"scroll-list"}),"\uc774 \uc139\uc158\uc758 \ucd08\ubc18"),"\uc5d0 \uc81c\uc2dc\ub41c \uc608\uc81c\uc640 \ube44\uc2b7\ud569\ub2c8\ub2e4. Item Template\uc740 CustomContainer\ub97c \uae30\ubc18\uc73c\ub85c \ud558\ubbc0\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue")," \ud568\uc218\ub3c4 CustomContainer\ub97c \uc704\ud574 \uc0dd\uc131\ub429\ub2c8\ub2e4. setValue \ud568\uc218\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \ub9e4\uac1c\ubcc0\uc218\ub97c \ud1b5\ud574 item template\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c item \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub9de\ucdb0 setValue \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ud56d\ubaa9\uc758 \ubaa8\uc2b5\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5b4 \uc778\ub371\uc2a4 \uac12\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Scroll List\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Scroll Wheel and List Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_list",mdxType:"Link"},"ScrollList \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}y.isMDXComponent=!0}}]);