"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9443],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,s=u["".concat(o,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(s,l(l({ref:t},d),{},{components:n})):a.createElement(s,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},2694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return y}});var a=n(3905),r=n(44035),i=n(29415),l=n(31217),m=n(37793),o=n(39130),p=n(22425),d=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&h(e,n,t[n]);return e};const N={id:"animated-image",title:"Animated Image"},f=void 0,b={unversionedId:"development/ui-development/ui-components/images/animated-image",id:"development/ui-development/ui-components/images/animated-image",title:"Animated Image",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/animated-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/animated-image",permalink:"/ko/docs/development/ui-development/ui-components/images/animated-image",draft:!1,tags:[],version:"current",frontMatter:{id:"animated-image",title:"Animated Image"},sidebar:"docs",previous:{title:"Tiled Image",permalink:"/ko/docs/development/ui-development/ui-components/images/tiled-image"},next:{title:"Texture Mapper",permalink:"/ko/docs/development/ui-development/ui-components/images/texture-mapper"}},w={},y=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],I={toc:y};function x(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},I),h),c(t,u({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Animated Image\ub294 \uacf5\ud1b5 \uc2dd\ubcc4\uc790\ub97c \uacf5\uc720\ud558\ub294 \uc5ec\ub7ec \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud574 \ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8\uc77c \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uace0, \ud639\uc740 \uc815\uc9c0\ud558\uac70\ub098 \uc77c\uc2dc\uc801\uc73c\ub85c \uba48\ucd9c \ub54c\uae4c\uc9c0 \uc560\ub2c8\uba54\uc774\uc158\uc744 \ubc18\ubcf5 \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-appearance.gif",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Animated Image"),(0,a.kt)("h2",v({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,a.kt)("p",null,"Animated Image\ub294 TouchGFX Designer\uc758 Images \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Animated Image"),(0,a.kt)("h2",v({},{id:"properties"}),"\uc18d\uc131"),(0,a.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Animated Image\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"}," \ubc84\ud2bc\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4.")," ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"First Image"),"\uc640 ",(0,a.kt)("em",{parentName:"td"},"Last Image"),"\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uc774\ubbf8\uc9c0 \ubc94\uc704 \ub0b4\uc5d0\uc11c \uccab \ubc88\uc9f8 \uc774\ubbf8\uc9c0\uc640 \ub9c8\uc9c0\ub9c9 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"}," \uc5ec\uae30\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\ubbf8\uc9c0\ub294 \ubaa8\ub450 \uc2dd\ubcc4\uc790(img_01.png, img_02.png, img_03.png, img_04.png, img_05.png, img_06.png, img_07.png, \ub4f1)\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Start on load"),"\ub294 \uc2a4\ud06c\ub9b0 \ub85c\ub4dc \uc2dc \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc989\uc2dc \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Reverse Animation"),"\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\ubbf8\uc9c0\uc758 \uc5ed\uc21c \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Loop Animation"),"\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc5f0\uc18d \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Update Interval"),"\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc5d0\uc11c \uac01 \uc774\ubbf8\uc9c0 \uc0ac\uc774\uc758 \uc2dc\uac04 \uac04\uaca9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"\uc54c\ud30c ")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h2",v({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,a.kt)("p",null,"Animated Image\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",v({},{id:"actions"}),"\uc561\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,a.kt)("h3",v({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud2b8\ub9ac\uac70")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation is done")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Animated Image\uac00 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("h2",v({},{id:"performance"}),"\uc131\ub2a5"),(0,a.kt)("p",null,"Animated Image\ub294 \uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30\uc5d0 \ub530\ub77c \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc18d\ub3c4\uac00 \ube60\ub978 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",null)," Animated Image\ub294 ",(0,a.kt)("em",{parentName:"p"},"\uc18d\uc131\uc5d0 \ub530\ub77c \uc774\ubbf8\uc9c0\ub97c \uadf8\ub9bd\ub2c8\ub2e4"),". \ub530\ub77c\uc11c ",(0,a.kt)("em",{parentName:"p"},"Update Interval")," \uac12\uc774 \uc791\uc744\uc218\ub85d \uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30\uac00 \ub298\uc5b4\ub0a9\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",v({},{id:"examples"}),"\uc608\uc81c"),(0,a.kt)("h3",v({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,a.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Animated Image\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    image.setXY(0, 0);\n    image.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_TEXTURE_480X272PX_ID));\n\n    animatedImage.setXY(0, -104);\n    animatedImage.setBitmaps(BITMAP_BUTTERFLY_01_ID, BITMAP_BUTTERFLY_72_ID);\n    animatedImage.setUpdateTicksInterval(2);\n    animatedImage.startAnimation(false, true, true);\n\n    add(image);\n    add(animatedImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(m.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 AnimatedImage \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"animatedImage.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",v({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,a.kt)("p",null,"\ub2e4\uc74c \ucf54\ub4dc \uc608\uc81c\ub294 \uc560\ub2c8\uba54\uc774\uc158 \uc644\ub8cc \uc2dc Animated Image\uc758 \ucf5c\ubc31 \uc124\uc815 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::AnimatedImage&> animatedImageAnimationDoneCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src);\n};\n\n#endif // MAINVIEW_HPP\n")),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    animatedImageAnimationDoneCallback(this, &mainView::animatedImageAnimationDoneCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    animatedImage.setDoneAction(animatedImageAnimationDoneCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src)\n{\n    if (&src == &animatedImage)\n    {\n        //execute code whenever the animation of animatedImage stops\n    }\n}\n")),(0,a.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,a.kt)("p",null,"Animated Image\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/animated-image-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 Animated Image Example UI \ud15c\ud50c\ub9bf"),(0,a.kt)("h2",v({},{id:"api-reference"}),"API \ucc38\uc870"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animated_image",mdxType:"Link"},"AnimatedImage \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}x.isMDXComponent=!0}}]);