"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9763],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},78977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return x}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"custom-container-import-export",title:"Custom Container Import & Export"},g=void 0,h={unversionedId:"development/ui-development/designer-user-guide/import-export/custom-container-import-export",id:"development/ui-development/designer-user-guide/import-export/custom-container-import-export",title:"Custom Container Import & Export",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/import-export/custom-container-import-export.mdx",sourceDirName:"development/ui-development/designer-user-guide/import-export",slug:"/development/ui-development/designer-user-guide/import-export/custom-container-import-export",permalink:"/ja/docs/development/ui-development/designer-user-guide/import-export/custom-container-import-export",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-container-import-export",title:"Custom Container Import & Export"},sidebar:"docs",previous:{title:"Import & Export",permalink:"/ja/docs/category/import--export"},next:{title:"TouchGFX Engine Features",permalink:"/ja/docs/category/touchgfx-engine-features"}},f={},x=[{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2}],k={toc:x};function v(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),u),a(t,p({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer enables the import and export of custom containers. This makes it possible to share and reuse functionality between projects."),(0,r.kt)("p",null,"One motivating example is a custom made Alarm custom container. This envisioned alarm component might be created with one particular application in mind, but be generally useful in a lot of applications. The alarm component has a visual appearance consisting of some images and texts and functionality that blinks the texts periodically. Sharing the alarm component between applications therefore means sharing both code files and assets. Care must be taken to ensure that conflicts do not arise when naming components, assets, etc. Longer descriptive names, such as ",(0,r.kt)("em",{parentName:"p"},"alarmBackground"),", ",(0,r.kt)("em",{parentName:"p"},"alarmHeaderText")," should be preferred over shorter generic names, such as ",(0,r.kt)("em",{parentName:"p"},"background"),", ",(0,r.kt)("em",{parentName:"p"},"headerText"),"."),(0,r.kt)("h2",m({},{id:"export"}),"Export"),(0,r.kt)("p",null,"From the Canvas View of TouchGFX Designer it is possible to export Custom Containers."),(0,r.kt)("p",null,"Right clicking a custom container, brings up the context menu, selecting ",(0,r.kt)("strong",{parentName:"p"},"Export")," displays the export dialog."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/export.png",mdxType:"Figure"},"The Custom Container context dialog"),(0,r.kt)("p",null,"When opening the export dialog a scan of all files related to the custom container is performed. This scan finds all necessary dependencies and includes these in the exported package."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/export-custom-container.png",mdxType:"Figure"},"The Custom Container export dialog"),(0,r.kt)("p",null,"The dependencies include"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom Containers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Texts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fonts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Videos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Typographies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Languages"))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Name")," and ",(0,r.kt)("strong",{parentName:"p"},"Output path")," of the exported package can be changed in the export dialog."),(0,r.kt)("p",null,"The contents of the package can be customized by altering the ",(0,r.kt)("strong",{parentName:"p"},"Export Configuration"),". This configuration is based on XML and is considered self explanatory. Add more entries to include more files and dependencies. Remove entries to reduce what is included in the package. In most cases it is not necessary to change the configuration."),(0,r.kt)("p",null,"The exported package file has the file extension ",(0,r.kt)("em",{parentName:"p"},".tpkg"),"."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/export-file.png",mdxType:"Figure"},"The exported file"),(0,r.kt)("h2",m({},{id:"import"}),"Import"),(0,r.kt)("p",null,"A custom container can be imported into an application."),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Import")," > ",(0,r.kt)("strong",{parentName:"p"},"Custom Container")," from the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," menu."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/import.png",mdxType:"Figure"},"The Custom Container import menu entry"),(0,r.kt)("p",null,"This brings up the Custom Container import dialog. This dialog describes what is to be imported into the application. Any conflicts that might arise will be highlighted, such that they can be handled and the import performed again."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/import-custom-container.png",mdxType:"Figure"},"The Custom Container import dialog"),(0,r.kt)("p",null,"If texts and languages are present in the application and the custom container to be imported, the language mapping tab gives the ability to map each of the languages in the application to one of the languages in the custom container."),(0,r.kt)("p",null,"As an example the following application has one language named English. The imported custom container does not have a language named English, but does have one named GB, which is in fact english. The language mapping tab enables using the texts from the container in the application, without introducing a new language named GB."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/import-custom-container-language-mapping.png",mdxType:"Figure"},"The language mapping tab"),(0,r.kt)("p",null,"Once the import is done, the custom container is part of the application."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/import-export/custom-container/import-done.png",mdxType:"Figure"},"The imported custom container"))}v.isMDXComponent=!0}}]);