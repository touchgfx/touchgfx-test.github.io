"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2379],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return p}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(o),p=i,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return o?n.createElement(m,r(r({ref:t},s),{},{components:o})):n.createElement(m,r({ref:t},s))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},44035:function(e,t,o){var n=o(67294),i=o(25026);t.Z=function(e){const t=e.noShadow||!1,o=e.width,a=e.height,r=(0,i.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:r,target:"_blank"},n.createElement("img",{width:o,height:a,src:r})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:r,target:"_blank"},n.createElement("img",{width:o,height:a,src:r})),n.createElement("p",null,e.children))}},84541:function(e,t,o){o.d(t,{Z:function(){return g}});var n=o(67294),i=o(86010),a=o(99492),r=o(39130),l=o(35096),c=o(33084),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function h({href:e,children:t}){return n.createElement(r.Z,{href:e,className:(0,i.Z)("card padding--lg",u)},t)}function p({href:e,icon:t,title:o,description:a}){return n.createElement(h,{href:e},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},t," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:a},a))}function m({item:e}){const t=(0,a.Wl)(e);return t?n.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t;const o=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:o,title:e.label,description:null==i?void 0:i.description})}function y({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g({items:e,className:t}){return n.createElement("section",{className:(0,i.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},51912:function(e,t,o){o.r(t),o.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return T},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return w}});var n=o(3905),i=o(44035),a=o(84541),r=o(99492),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))d.call(t,o)&&p(e,o,t[o]);if(s)for(var o of s(t))h.call(t,o)&&p(e,o,t[o]);return e};const f={id:"development-introduction",title:"Development Introduction"},y=void 0,g={unversionedId:"development/development-introduction",id:"development/development-introduction",title:"Development Introduction",description:"",source:"@site/docs/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/docs/development/development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"development-introduction",title:"Development Introduction"},sidebar:"docs",previous:{title:"Memory Usage",permalink:"/docs/basic-concepts/memory-usage"},next:{title:"Hardware Selection Introduction",permalink:"/docs/development/hardware-selection/hardware-selection-introduction"}},v={},w=[{value:"Main Activities",id:"main-activities",level:2},{value:"Main Components",id:"main-components",level:2},{value:"Hardware Selection",id:"hardware-selection",level:2},{value:"Prototyping",id:"prototyping",level:3},{value:"Custom Hardware",id:"custom-hardware",level:3},{value:"Board Bring Up",id:"board-bring-up",level:2},{value:"STM32CubeMX",id:"stm32cubemx",level:3},{value:"TouchGFX Board Setups (TBSs)",id:"application-templates-ats",level:3},{value:"TouchGFX AL Development",id:"touchgfx-al-development",level:2},{value:"TouchGFX Generator",id:"touchgfx-generator",level:3},{value:"UI Development",id:"ui-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"TouchGFX Board Setups",id:"application-templates",level:3},{value:"Demos and Examples",id:"ui-templates",level:3},{value:"Custom Hardware",id:"custom-hardware-1",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Generated Code and User Code",id:"generated-code-and-user-code",level:3},{value:"Change of Compiler/IDE",id:"change-of-compileride",level:3}],b={toc:w};function T(e){var t,o=e,{components:l}=o,p=((e,t)=>{var o={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&h.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),p),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section contains information on how to develop a TouchGFX application including, structure, workflow and tools."),(0,n.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,n.kt)("h2",m({},{id:"main-activities"}),"Main Activities"),(0,n.kt)("p",null,"A TouchGFX project involves a set of activities that you will be addressing during the development phase. The effort in each of them are dependent on what the goal of your project is. If you are doing a UI prototype you can use premade code for major parts of the application and thus speed up your project development by skipping most of these activities. If you are doing a full project based on a custom made board, you will be addressing each of these activities in your project."),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.png",noShadow:!0,width:"600",mdxType:"Figure"},"A TouchGFX projects main activities"),(0,n.kt)("h2",m({},{id:"main-components"}),"Main Components"),(0,n.kt)("p",null,"Your TouchGFX project is made up of five main software and hardware components. Each of the activities will generate one of the main component for your TouchGFX project. The TouchGFX Engine is not an output of any main activity, this is the starting point for your TouchGFX project and is available when you have downloaded and installed."),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/tgfx-components.png",noShadow:!0,width:"600",mdxType:"Figure"},"A TouchGFX projects main components"),(0,n.kt)("p",null,"The following sections will give an overview of each of the activities and components. Each of the activities are further described in full details in this chapters remaining sections."),(0,n.kt)("h2",m({},{id:"hardware-selection"}),"Hardware Selection"),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"This activity is the initial activity in your TouchGFX project. Selecting the hardware on which  your application will run. Deciding on which hardware components you need and what influences these have on your TouchGFX application. When you are done with this step you have a Display Board available for your TouchGFX project."),(0,n.kt)("h3",m({},{id:"prototyping"}),"Prototyping"),(0,n.kt)("p",null,"If you are doing a UI prototype an STM32 Evaluation Kit will be the perfect choice to get up and running quickly. Here there are no considerations to be done about the hardware components, how to connect to the board or similar issues. In this case the Hardware Selection activity is only a matter of selecting an available STM32 Evaluation kit, which is the best match with your final product in terms of MCU performance, memory setup and display size."),(0,n.kt)("h3",m({},{id:"custom-hardware"}),"Custom Hardware"),(0,n.kt)("p",null,"If you are creating your own hardware solution there are a lot of choices to be made and issues to consider. The section ",(0,n.kt)("a",m({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"Hardware Selection")," will help you in this task, answering a lot of questions and describe how your choices influence a TouchGFX application."),(0,n.kt)("p",null,"Often in your project you will not have the final hardware ready before late in the project. In this case it is very common to select an STM32 Evaluation Kit that resembles your final board and use this in the first steps of UI Development. If you do not have such board, you can also start out by just using the TouchGFX Simulator that runs on your PC."),(0,n.kt)("p",null,"A full description of this step can be found in the ",(0,n.kt)("a",m({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"Hardware Selection")," section."),(0,n.kt)("h2",m({},{id:"board-bring-up"}),"Board Bring Up"),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"This activity is a central task to enable TouchGFX to be executed on your board. The output component is called Board Initialization Code which is a general initialization code that setup your MCU and all peripherals, preparing it for application execution. This initialization code is independent of TouchGFX, it is only handling pure hardware setup."),(0,n.kt)("h3",m({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,n.kt)("p",null,"The main tool for this activity is STM32CubeMX. It helps you configuring the MCU and generate general startup code. For peripherals, such as external RAM and Display, you will add initialization code and specific peripheral drivers yourself. It is also possible to do the entire Board Initialization Code without use of STM32CubeMX, but is not recommended unless you have expert knowledge on STM32 and board bring up."),(0,n.kt)("h3",m({},{id:"application-templates-ats"}),"TouchGFX Board Setups (TBSs)"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. These include all the Board Initialization Code needed. The TBSs are based on a STM32CubeMX configuration, so it is possible for you to modify the configuration if you want to experiment or add access to more peripherals."),(0,n.kt)("p",null,"A full description of this step can be found in the ",(0,n.kt)("a",m({parentName:"p"},{href:"board-bring-up/board-introduction"}),"Board Bring Up")," section."),(0,n.kt)("h2",m({},{id:"touchgfx-al-development"}),"TouchGFX AL Development"),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"This activity is key in making the TouchGFX Engine run on top of your fully initialized Display Board (Display Board + Board Initialization Code). The output component is called TouchGFX Abstraction Layer (AL) and is a software layer that is an abstraction of your hardware and enables the TouchGFX Engine to run on your board."),(0,n.kt)("h3",m({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,n.kt)("p",null,"The main tool in this activity is TouchGFX Generator which is a STM32CubeMX plugin that allows you to configure and generate most of the TouchGFX AL code. You will most probably also write some part of the TouchGFX AL in code by yourself. The TouchGFX Generator will assist you in this step by creating empty functions for you to implement."),(0,n.kt)("p",null,"It is important to notice that for your TouchGFX AL to work it is important that your Board Initialization Code is done correctly and that the MCU, External RAM, Display and so on is configured correctly."),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. This includes all the TouchGFX AL code you need. The TBSs are based on a CubeMX and TouchGFX Generator configuration, so it is possible for you to modify the configuration if you want to experiment later on."),(0,n.kt)("p",null,"A full description of this step can be found in the ",(0,n.kt)("a",m({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development")," section."),(0,n.kt)("h2",m({},{id:"ui-development"}),"UI Development"),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"This activity is where you probably will spend most of your project development time. Here you will create the User Interface code that will make up the visible part of your TouchGFX project, the component which is called the TouchGFX UI Application."),(0,n.kt)("h3",m({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,n.kt)("p",null,"The main tools in this activity are TouchGFX Designer and your favorite IDE or text editor. In TouchGFX Designer you will setup, design and create the screens in your application and generate main parts of the UI Application as C++ code. For the application logic (handling events, communicating with the non-UI part of the system) you will use an IDE or text editor to write C++ code, that coexists and interacts with the generated code from TouchGFX Designer."),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.png",noShadow:!0,width:"300",mdxType:"Figure"}),(0,n.kt)("h3",m({},{id:"application-templates"}),"TouchGFX Board Setups"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX and do not want to spend time doing the other activities, you can either base your application on the PC based TouchGFX Simulator or you can use one of the existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits. In any case you are ready to start developing your UI Application right away."),(0,n.kt)("h3",m({},{id:"ui-templates"}),"Demos and Examples"),(0,n.kt)("p",null,"If you just want something to run or want to be inspired you can select one of the TouchGFX demos or examples which can be found when creating a new project in TouchGFX Designer. IF you do so, nothing has to be done, just compile, flash and run."),(0,n.kt)("h3",m({},{id:"custom-hardware-1"}),"Custom Hardware"),(0,n.kt)("p",null,"If you have already done all the other activities and thus have a running board ready for a TouchGFX Application you can either start from scratch or select one of the examples or demo. If the resolutions of your custom board and the example match then they should run on your custom board as well."),(0,n.kt)("p",null,"A full description of this step can be found in the ",(0,n.kt)("a",m({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI Development")," section."),(0,n.kt)("h2",m({},{id:"workflow"}),"Workflow"),(0,n.kt)("p",null,"As you can see TouchGFX development involves a lot of activites and tools. It is, however, important to notice that you do not need to do them all at once, and you do not necessarily need your Display Board, Board Initialization Code and TouchGFX AL before starting your UI development. This can be done using STM32 Evaluation Kits or the TouchGFX Simulator."),(0,n.kt)(i.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFX Designer workflow"),(0,n.kt)("h3",m({},{id:"generated-code-and-user-code"}),"Generated Code and User Code"),(0,n.kt)("p",null,"In each of the three software activities, Board Bring Up, TouchGFX AL Development and UI Development, you will use tools that generate code for you. Common for these tools is that they do not generate all the code you need, you will be adding user written code to the project as well. For all three tools you can go back and forth between using the tool and writing code. The generated code and the user code are independent and can be updated separately."),(0,n.kt)("p",null,"Sometimes you will also be switching back and forth between the activities and thus using different tools. This is often the case when doing TouchGFX AL Development, where you have a very simple TouchGFX UI to test your TouchGFX AL. There is, however, no problem shifting between activities, as the tools, the generate code and your user code coexists and can be updated without any problem."),(0,n.kt)("h3",m({},{id:"change-of-compileride"}),"Change of Compiler/IDE"),(0,n.kt)("p",null,"During the activities you will have to compile your code for your target board. The compilers supported by TouchGFX are IAR, ARMCC, ARMCLANG and GCC(STM32CubeIDE). The toolchain selected for your TouchGFX project is configured in STM32CubeMX, so if you want to change it you should open the TouchGFX project .ioc file in STM32CubeMX and change the toolchain setting.\nWhen selecting an TouchGFX Board Setup (TBS) in TouchGFX Designer it will have one toolchain preselected, so you will only find a project file for one of the toolchains. As the AT comes with an .ioc as well, you can open it and change the toolchain to match your needs."))}T.isMDXComponent=!0}}]);