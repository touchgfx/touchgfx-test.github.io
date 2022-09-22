"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3570],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22425:function(e,n,t){var a=t(67294);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var a=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return n?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:t,height:o,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:t,height:o,src:l})),a.createElement("p",null,e.children))}},29415:function(e,n,t){var a=t(67294),i=t(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}n.Z=l},88678:function(e,n,t){var a=t(67294);class i extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=i},93054:function(e,n,t){var a=t(67294),i=t(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}n.Z=l},14037:function(e,n,t){t.r(n),t.d(n,{assets:function(){return x},contentTitle:function(){return k},default:function(){return E},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return w}});var a=t(3905),i=t(39130),o=t(44035),l=t(29415),r=t(22425),s=t(93054),c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&g(e,t,n[t]);if(p)for(var t of p(n))u.call(n,t)&&g(e,t,n[t]);return e};const f={id:"mixins",title:"Mixins"},k=void 0,v={unversionedId:"development/ui-development/touchgfx-engine-features/mixins",id:"development/ui-development/touchgfx-engine-features/mixins",title:"Mixins",description:"",source:"@site/docs/development/ui-development/touchgfx-engine-features/mixins.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/mixins",permalink:"/docs/development/ui-development/touchgfx-engine-features/mixins",draft:!1,tags:[],version:"current",frontMatter:{id:"mixins",title:"Mixins"},sidebar:"docs",previous:{title:"Backend Communication",permalink:"/docs/development/ui-development/touchgfx-engine-features/backend-communication"},next:{title:"Texts and Fonts",permalink:"/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"}},x={},w=[{value:"Move Animator",id:"move-animator",level:2},{value:"Using Move Animator in User Code",id:"using-move-animator-in-user-code",level:3},{value:"Callback Implementation in User Code",id:"callback-implementation-in-user-code",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Fade Animator",id:"fade-animator",level:2},{value:"Using Fade Animator in User Code",id:"using-fade-animator-in-user-code",level:3},{value:"Callback Implementation in User Code",id:"callback-implementation-in-user-code-1",level:3},{value:"API reference",id:"api-reference-1",level:3},{value:"ClickListener",id:"clicklistener",level:2},{value:"Callback Implementation in User Code",id:"callback-implementation-in-user-code-2",level:3},{value:"API reference",id:"api-reference-2",level:3},{value:"Draggable",id:"draggable",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Easing Equations",id:"easing-equations",level:2},{value:"Cubic movement",id:"easing-cubic",level:3}],y={toc:w};function E(e){var n,t=e,{components:c}=t,g=((e,n)=>{var t={};for(var a in e)m.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=b(b({},y),g),d(n,h({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Mixin is a class that extends the functionality of a widget to, for example, be able to animate movement or a change in their alpha value. The Move Animator and Fade Animator mixins are the basis of TouchGFX Designer Interactions being able to generate code that animates movement and alpha change. These mixins can be added to a widget either through TouchGFX Designer or manually in User Code."),(0,a.kt)("p",null,"The Move and Fade Animators optionally uses easing equations to detail\nthe progression of the animation. Read more about easing equations in\nthe end of this ",(0,a.kt)("a",b({parentName:"p"},{href:"#easing-equations"}),"section"),"."),(0,a.kt)("h2",b({},{id:"move-animator"}),"Move Animator"),(0,a.kt)("p",null,"The Move Animator mixin makes the widget capable of animating a movement from its current position to a specified end position. The movement in both the X and Y direction can\nbe described by supplying EasingEquations."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)("p",null,"The Move Animator mixin will automatically be applied to a widget if an ",(0,a.kt)("a",b({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"Interaction")," that moves the widget has been created."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.png",mdxType:"Figure"},"Move Animator mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Move Animator mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Move Animator mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::MoveAnimator< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"using-move-animator-in-user-code"}),"Using Move Animator in User Code"),(0,a.kt)("p",null,"When a widget has had the Move Animator mixin applied to it, the widget now has the capability of animating its movement from one position to another. In this section a demonstration of how to use this new functionality is shown."),(0,a.kt)("p",null,"After enabling the Move Animator mixin in TouchGFX Designer on a Box widget, the method ",(0,a.kt)("inlineCode",{parentName:"p"},"startMoveAnimation")," becomes available for use.\nThis methods takes five arguments in the following order"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endX: the X position relative to its parent that the widget should move to."),(0,a.kt)("li",{parentName:"ul"},"endY: the Y position relative to its parent that the widget should move to."),(0,a.kt)("li",{parentName:"ul"},"duration: the time in ticks the movement in the X and Y axis should take."),(0,a.kt)("li",{parentName:"ul"},"xProgressionEquation: the EasingEquation that should be used for the movement in the X axis."),(0,a.kt)("li",{parentName:"ul"},"yProgressionEquation: the EasingEquation that should be used for the movement in the Y axis.")),(0,a.kt)("p",null,"Below an example of a movement to the coordinates X: 0, X: 0 over a duration of 40 ticks, using a linear EasingEquation in both X and Y axis."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);\n")),(0,a.kt)("h3",b({},{id:"callback-implementation-in-user-code"}),"Callback Implementation in User Code"),(0,a.kt)("p",null,"When a Move Animator mixin has completed an animation, a callback is emitted. In this section a demonstration of how to implement this callback is shown."),(0,a.kt)("p",null,"After enabling the Move Animator mixin in TouchGFX Designer on a Box widget, the next step is to add declarations for a callback and a function to handle the event in the Screen header class file that inherits from the base class where the Box widget is located."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for move animation ended on a Box\n    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of MoveAnimator<Box>\n    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;\n};\n")),(0,a.kt)("p",null,"Then the callback declaration and function to handle the event need to be bound to the view object."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }\n")),(0,a.kt)("p",null,"Next step is to tell the Box widget which callback to use when its move animation has ended, this is done in ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);\n}\n")),(0,a.kt)("p",null,"Last step is to implement the function, ",(0,a.kt)("inlineCode",{parentName:"p"},"boxMoveAnimationEndedHandler"),", that handles the callback. For good practice we check that the Box which move animation has ended is actually the 'box'"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when move animation on 'box' has ended here.\n    }\n}\n")),(0,a.kt)("h3",b({},{id:"api-reference"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_move_animator",mdxType:"Link"},"API reference for the MoveAnimator class"))),(0,a.kt)("h2",b({},{id:"fade-animator"}),"Fade Animator"),(0,a.kt)("p",null,"The Fade Animator mixin makes the widget capable of animating its alpha value to fade from its current alpha value to a specified end alpha value. The rate of fading can be\ndescribed by supplying an EasingEquation."),(0,a.kt)(s.Z,{mdxType:"Note"},"Only widgets that implement an alpha value support the Fade Animator mixin. This means all the widgets that can contain other widgets, like the ",(0,a.kt)(i.Z,{to:"../ui-components/containers/container",mdxType:"Link"},"Container"),", do not support the Fade Animator mixin."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)("p",null,"The Fade Animator mixin will also automatically be applied to a widget if an ",(0,a.kt)("a",b({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"Interaction")," that fades the widget over a duration larger than zero has been added."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.png",mdxType:"Figure"},"Fade Animator mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Fade Animator mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Fade Animator mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::FadeAnimator< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"using-fade-animator-in-user-code"}),"Using Fade Animator in User Code"),(0,a.kt)("p",null,"When a widget has had the Fade Animator mixin applied to it, the widget now has the capability of animating its alpha value from one setting to another. In this section a demonstration of how to use this new functionality is shown."),(0,a.kt)("p",null,"After enabling the Fade Animator mixin in TouchGFX Designer on a Box widget, the method ",(0,a.kt)("inlineCode",{parentName:"p"},"startFadeAnimation")," becomes available for use.\nThis method takes three arguments in the following order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endAlpha: the alpha value the widget should be when animation is completed."),(0,a.kt)("li",{parentName:"ul"},"duration: the time in ticks the animation to the new alpha value setting should take."),(0,a.kt)("li",{parentName:"ul"},"alphaProgressionEquation: the EasingEquation that should be used for the rate of change to the alpha value.")),(0,a.kt)("p",null,"Below an example of an alpha value change to 0 over a duration of 40 ticks, using a linear EasingEquation."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"    box.startFadeAnimation(0, 40, EasingEquations::linearEaseNone);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"linearEaseNone")," easing equation is the default, so you don't have to\nsupply that as argument."),(0,a.kt)("h3",b({},{id:"callback-implementation-in-user-code-1"}),"Callback Implementation in User Code"),(0,a.kt)("p",null,"When a Fade Animator mixin has completed an animation, a callback is emitted. In this section a demonstration of how to implement this callback is shown."),(0,a.kt)("p",null,"After enabling the Fade Animator mixin in TouchGFX Designer on a Box widget, the next step is to add declarations for a callback and a function to handle the event in the Screen header class file that inherits from the base class where the Box widget is located."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for fade animation ended on a Box\n    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of FadeAnimator<Box>\n    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;\n};\n")),(0,a.kt)("p",null,"Then the callback declaration and function to handle the event need to be bound to the view object."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }\n")),(0,a.kt)("p",null,"Next step is to tell the Box widget which callback to use when its move animation has ended, this is done in ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);\n}\n")),(0,a.kt)("p",null,"Last step is to implement the function, ",(0,a.kt)("inlineCode",{parentName:"p"},"boxFadeAnimationEndedHandler"),", that handles the callback. For good practice we check that the Box which fade animation has ended is actually the 'box'"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when fade animation on 'box' has ended here.\n    }\n}\n")),(0,a.kt)("h3",b({},{id:"api-reference-1"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_fade_animator",mdxType:"Link"},"API reference for the FadeAnimator class"))),(0,a.kt)("h2",b({},{id:"clicklistener"}),"ClickListener"),(0,a.kt)("p",null,"The Click Listener mixin makes the widget capable of responding to touch input by extending the widget with a callback."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.png",mdxType:"Figure"},"Click Listener mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Click Listener mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Click Listener mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::ClickListener< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"callback-implementation-in-user-code-2"}),"Callback Implementation in User Code"),(0,a.kt)("p",null,"When a Click Listener mixin receives a touch event, a callback is emitted. In this section a demonstration of how to implement this callback is shown."),(0,a.kt)("p",null,"After enabling the Click Listener mixin in TouchGFX Designer on a Box widget, the next step is to add declarations for a callback and a function to handle the event in the Screen header class file that inherits from the base class where the Box widget is located."),(0,a.kt)("p",null,"The callback should declare three things: which class type to bind to, which widget the callback originates from and the type of event that occurs. In this example it is ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen1View"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"const Box&")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const ClickEvent&")),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for Box\n    void boxClickHandler(const Box& b, const ClickEvent& e);\n\nprotected:\n    // Declaring callback type of box and clickEvent\n    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;\n};\n")),(0,a.kt)("p",null,"Then the callback declaration and function to handle the event need to be bound to the view object."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n    // In constructor for callback, bind to this view object and bind which function to handle the event.\n    boxClickedCallback(this, &Screen1View::boxClickHandler) { }\n")),(0,a.kt)("p",null,"Next step is to tell the Box widget which callback to use when it is touched, this is done in ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n    // Add the callback to box\n    box.setClickAction(boxClickedCallback);\n}\n")),(0,a.kt)("p",null,"Last step is to implement the function, ",(0,a.kt)("inlineCode",{parentName:"p"},"boxClickHandler"),", that handles the callback. For good practice we check that the Box which initiated the callback is actually the 'box'"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when 'box' is touched/clicked here.\n    }\n}\n")),(0,a.kt)("h3",b({},{id:"api-reference-2"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_click_listener",mdxType:"Link"},"API reference for the ClickListener class"))),(0,a.kt)("h2",b({},{id:"draggable"}),"Draggable"),(0,a.kt)("p",null,"The Draggable mixin makes the widget capable of being dragged around via touch input."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.png",mdxType:"Figure"},"Draggable mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Draggable mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Click Listener mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Draggable< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"api-reference-3"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_draggable",mdxType:"Link"},"API reference for the Draggable class"))),(0,a.kt)("h2",b({},{id:"easing-equations"}),"Easing Equations"),(0,a.kt)("p",null,"By default the Move and Fade animations uses a linear progression\nbetween two values. For example, if we change an alpha value from 0 to\n100 in 50 steps, the alpha value will go through the steps 0, 2, 4, 6,\n8, ..., 98, 100. The rate of change will be the same in all steps."),(0,a.kt)("p",null,"The linear progression can look a bit simple or unnatural, and the UI\ncan often be improved by using another algorithm. TouchGFX comes with\n30 algorithms each with different characteristics. The list of all the\neasing equations can be found in the API reference (see link at the end\nof this section)."),(0,a.kt)("p",null,"The easing equations are implemented as static functions in the\nEasingEquations class. These functions can easily be passed to the\nMoveAnimator when you start an animation:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::cubicEaseIn, EasingEquations::cubicEaseIn);\n")),(0,a.kt)("p",null,"The first easing argument is the easing equation used for the movement\nin x (horizontal), the second for the movement in y. Be aware, if you\nonly pass one function it will be used for the x movement and the\nlinear progression will be used for the y movement."),(0,a.kt)("h3",b({},{id:"easing-cubic"}),"Cubic movement"),(0,a.kt)("p",null,"The Cubic easing equations are popular in user interfaces. It is\navailable in three editions in TouchGFX. It is important to use the\ncorrect. The images below shows the three variants. In all cases we\nhave time on the horizontal axis (0-400) and the value of the easing\nequation upwards (0-200):"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-in.png",mdxType:"Figure"},"The cubicEaseIn easing equation. Moving slowly in the beginning, ending fast."),(0,a.kt)("p",null,"The cubicEaseIn is very good when you animate something that is\nalready visible on the display out of the screen. The slow start looks\nvery natural. It gains speed and get out of the display within a short\ntime."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-out.png",mdxType:"Figure"},"The cubicEaseOut easing equation. Moving fast in the beginning, ending slow."),(0,a.kt)("p",null,"The cubicEaseOut is very good when you animate something in to the\nscreen. It slows down as it approaches the final position, but has a\nhigh initial off-screen speed."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-inout.png",mdxType:"Figure"},"The cubicEaseInOut easing equation. Moving slowly in the beginning, also ending slow."),(0,a.kt)("p",null,"The cubicEaseInOut is a combination of the cubicEaseIn and\ncubicEaseOut. It starts slow and ends slow. This is a natural choice\nwhen moving elements on the screen."),(0,a.kt)("p",null,"For some short quick movements on screen (like a toggle button), the\nlinear movement can look better because of the simplicity."),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"API Reference for the available EasingEquations")),(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"https://easings.net/",mdxType:"Link"},"Graphical demonstrations of EasingEquations"))))}E.isMDXComponent=!0}}]);