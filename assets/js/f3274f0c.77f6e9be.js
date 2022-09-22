"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8475],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 22425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class CodeHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "code-header"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, this.props.children)));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (CodeHeader);


/***/ }),

/***/ 44035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function Figure(props) {
  const noShadow = props.noShadow || false;
  const width = props.width;
  const height = props.height;
  const imgSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.imageSource);
  if (noShadow) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "figure noshadow"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: imgSrc,
      target: "_blank"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      width,
      height,
      src: imgSrc
    })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: imgSrc,
    target: "_blank"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    width,
    height,
    src: imgSrc
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (Figure);


/***/ }),

/***/ 16070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3905);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44035);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

const frontMatter = {
  id: "rendering",
  title: "Main Loop"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/rendering",
  "id": "basic-concepts/rendering",
  "title": "Main Loop",
  "description": "",
  "source": "@site/docs/basic-concepts/rendering.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/rendering",
  "permalink": "/4.20/docs/basic-concepts/rendering",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "rendering",
    "title": "Main Loop"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Graphics Engine",
    "permalink": "/4.20/docs/basic-concepts/graphics-engine"
  },
  "next": {
    "title": "Performance",
    "permalink": "/4.20/docs/basic-concepts/performance"
  }
};
const assets = {};


const toc = [{
  value: "Collect",
  id: "collect",
  level: 2
}, {
  value: "Update",
  id: "update",
  level: 2
}, {
  value: "Time based updates",
  id: "time-based-updates",
  level: 3
}, {
  value: "Requesting a redraw",
  id: "requesting-a-redraw",
  level: 3
}, {
  value: "Render",
  id: "render",
  level: 2
}, {
  value: "Wait",
  id: "wait",
  level: 2
}, {
  value: "Handling the framebuffers",
  id: "handling-the-framebuffers",
  level: 2
}, {
  value: "Two framebuffers",
  id: "two-framebuffers",
  level: 3
}, {
  value: "One framebuffer",
  id: "one-framebuffer",
  level: 3
}];
const layoutProps = {
  toc
};
const MDXLayout = "wrapper";
function MDXContent(_a) {
  var _b = _a, {
    components
  } = _b, props = __objRest(_b, [
    "components"
  ]);
  return /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this section you will learn more about the workings of the graphics
engine in TouchGFX and in particular the main loop.
Recall that the main task for the graphics engine is to render the
graphics (the ui model) of your application in to the
framebuffer. This process happens over and over again to produce new
frames on the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `collects`), ` external events like display touches or
button presses. These events are filtered and forwarded to the
application. The application can use these events to update the ui
model. E.g. by changing a button to its pressed state when the user
touches the screen over the button, and later changing the button
back to the released state when the user does not touch the screen
anymore.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Finally the graphics engine renders the updated model to the
framebuffer. This process loops forever.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `After rendering a frame, the framebuffer is transferred to the display,
where the user can see the graphics.
The transfer to the display must be synchronized with the display to
avoid disturbing glitches on the display. For some displays the
transfers must happen regularly with a minimum time interval. For
other displays the transfer must happen when a signal is sent from the
display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine implements this synchronization by waiting for a
"go" signal from the hardware abstraction layer. Read more about the
hardware abstraction layer
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `here`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In pseudo code the main loop inside the TouchGFX graphics engine looks
like this:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `while(true) {
    collect();    // Collect events from outside
    update();     // Update the application ui model
    render();     // Render new updated graphics to the framebuffer
    wait();       // Wait for 'go' from display
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The code is more involved in the real implementation, but the pseudo
code above helps in understanding the main parts of the engine.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We will discuss these four stages in more detail below.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "collect"
  }), `Collect`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this phase the graphics engine collects events from the outside
environment. These events are typically touch events and buttons.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX samples and propagates events to the application. The raw
touch events are converted into more specific touch events:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Click:`), `
The user pressed or released his finger from the display`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Drag:`), `
The user moved his finger on the display (while touching the
display).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Gestures:`), `
The user moved his finger fast in a direction and then
released. This is called a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `swipe`), ` and is recognized by the graphics
engine.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The events are forwarded to the ui elements (e.g. widgets) that are
currently active.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The engine also forwards a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tick`), ` event. This event represents the new
frame (or the step in time), and is always send, also if there was no
other external input. This event is used by applications to drive
animations, or other time-based actions like changing to a pause screen
after a specific time has elapsed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update"
  }), `Update`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here the graphics engine works together with the application
to update the ui to reflect the collected events. The graphics engine
knows which Screen is currently active and passes events to
this object.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The basic principle is that the engine informs the application
(i.e. the Screen and Widget objects in the ui model) about the
events. In response, the application requests specific parts of the
display to be redrawn. The application does not draw directly as
response to the events, it changes the properties of Widgets and requests a redraw of the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If for example a Click event occurs, the graphics engine searches the
scene model of the Screen object to find the Widget that should
receive the event (the topmost widget below the touch point). Some
Widgets like Image and TextArea do not wish to receive Click events,
so they are disregarded. They also have an empty event handler.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Other Widgets like Button reacts to a Click event (pressed or
released). The Button widget, for example, changes its state to show
another image when pressed, and changes the state back again when the
touch is released again.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-on-image.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "Image widget in the background with a Button widget in front"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When a Widget like the Button changes its state, it must also be
redrawn in the framebuffer. The Widget is responsible for
communicating this back to the graphics engine as response to the
event. The graphics engine does not on its own redraw any Widgets
based on the collected events.
The Widgets keep track of their own internal state (for a Button, what
image to draw), and instruct the graphics engine to redraw the part (a
rectangle) of the display that is covered by the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The application itself can also react to the events. One of two ways are common:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Configure an
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "strong"
  }, {
    "href": "../development/ui-development/designer-user-guide/interactions-view"
  }), `interaction`), `
for a Widget in TouchGFX Designer`), `
For example, we can configure an interaction to make another Widget
visible when the Button is pressed. This interaction is executed
after the Button has changed its state and requested a redraw of
itself from the graphics engine. If you use the interaction to show
another (invisible) Widget, the application should also request a
redraw from the graphics engine.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `React to events on the Screen`), `
It is also possible to react to events in the Screen itself. The
event handlers are virtual functions on the Screen class (see list below). These
functions can be reimplemented in the Screens in the
application. This can e.g. be used to perform an action whenever the
user touches the screen (no matter where if the touch is on a Widget).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Screen class has the following event handlers. These are called by
the graphics engine when the corresponding external event has been
collected:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "framework/include/touchgfx/Screen.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
virtual void handleClickEvent(const ClickEvent& event);

virtual void handleDragEvent(const DragEvent& event);

virtual void handleGestureEvent(const GestureEvent& event);

virtual void handleTickEvent();

virtual void handleKeyEvent(uint8_t key);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Any C++ code can be inserted in these event handlers. Typically
applications update the state of some Widgets and/or call some
application specific functions (business logic).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "time-based-updates"
  }), `Time based updates`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The handleTickEvent event handler is called in every frame. This
allows the application to perform time based updates of the user
interface. An example could be to fade a Widget away after 10
seconds. Assuming that we have 60 frames in a second (10 seconds is
then 600 ticks), the code could look like:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent()
{
    Screen1ViewBase::handleTickEvent();     // Call superclass eventhandler
    tickCounter += 1;
    if (tickCounter == 600)
    {
        myWidget.startFadeAnimation(0, 20); // Fade to 0 = invisible in 20 frames
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine also calls an event handler on the Model
class. This event handler is typically used to perform repeated
actions like checking message queues or sampling GPIO:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
    bool b = sampleGPIO_Input1(); // Sample polled IO
    if (b)
    {
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The eventhandler on a specific Screen subclass is only called when
that screen is the active screen. The eventhandler on the Model class
is always called (independently of which Screen is active). This makes
the Model eventhandler suitable for "application wide" logic.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "requesting-a-redraw"
  }), `Requesting a redraw`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As we discussed above with the Button example; the Widgets are
responsible for requesting a redraw when their state changes. The
mechanism behind this is called an `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `invalidated area`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When the Button changes state (e.g. from released to pressed) and
needs a redraw, the area covered by the Button Widget is an
invalidated area. The graphics engine keeps a list of these
invalidated areas requested for the frame. All the collected events
(touch, button, tick) may result in one or more invalidated areas, so
there can be many invalidated areas in every frame.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The event handlers on the Screen class can also request a redraw of an
area. Here we change the color of a Box widget, box1, in frame 10 and
request a redraw by calling the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `invalidate`), ` method on the Box:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent()
{
    Screen1ViewBase::handleTickEvent();                          // Call superclass eventhandler
    tickCounter += 1;
    if (tickCounter == 10)
    {
        box1.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00)); // Set color to red
        box1.invalidate();                                       // Request redraw
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this example the graphics engine will call the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleTickEvent`), `
handler in every frame. In the 10th frame, the application code
requests a redraw of the area covered by `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), `. As a response to this
the graphics engine will redraw that area in the framebuffer using the
color saved in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), ` widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the user interface below we have a Button Widget and a Box Widget
on top of a background image. If we insert an interaction on the
Button to change the color of the Box when the Button is clicked we
get two invalidated areas (indicated with red) when the user clicks
the Button:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-and-box.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "Two invalidated areas"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The area of the Box is invalidated to get the new color drawn in the
framebuffer. The Button also invalidates itself to get the released
state drawn again.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "render"
  }), `Render`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As we just discussed, the result of the update phase is a list of
areas to redraw, the invalidated areas. The task for the render phase
is basically to run through this list and draw the Widgets covering
these areas into the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This phase is handled automatically by the graphics engine. The
application has defined the scene model (the Widgets in the ui) and
invalidated some area. The rest is handled by the engine.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine handles the invalidated areas one-by-one. For each
area the engine scans the scene model and collects a list of the
widgets that is covered by the area (partly or in whole).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Given this list of Widgets the graphics engine calls the draw method
on the Widgets. Starting with the widget in the background and ending
with the foremost Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Widget's draw methods use the state of the Widget, e.g. the color,
when drawing to the framebuffer. Any information that is needed to
draw the Widget must be saved to the Widget during the update
phase. Otherwise this information is not available in the rendering
phase.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wait"
  }), `Wait`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The TouchGFX graphics engine waits for a signal before updating and
rendering the next frame. There are two reasons for waiting between
the frames instead of just continuously rendering frames as fast as
possible:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `The rendering is synchronized with the display.
As mentioned above some displays requires that the framebuffer is
transmitted repeatedly. While this transmission is ongoing, it is
not advisable to render arbitrarily to the framebuffer. The
graphics engine therefore waits for a short time after the
transmission is started before starting the rendering.
Other displays send a signal to the microcontroller when the
framebuffer should be transmitted. The graphics engine waits for
that signal.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Frames are rendered at a fixed rate.
It is often beneficial for the application that frames are rendered
at a fixed rate, as this makes it easier to create animations that
lasts a specific time.
For example, if you have a 60 Hz display, a two seconds animation
should be programmed to complete in 120 frames.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The time where the graphics engine is waiting is typically used by
other lower priority processes in the application. In these cases the
time is not wasted, as the lower priority processes should run at some
point in time anyway.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handling-the-framebuffers"
  }), `Handling the framebuffers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Recall from the discussion previously that the graphics engine
synchronizes with the display before the framebuffer is updated. After
the rendering to the framebuffer the engine also needs to make sure
that the display shows the updated framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "two-framebuffers"
  }), `Two framebuffers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the simplest setup we have two framebuffers available. The graphics
engine alternates between the two framebuffers. While drawing a frame
into a framebuffer, the other framebuffer is transferred to (and shown on) the
display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Double framebuffers"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this drawing we assume a parallel RGB display connected to the LTDC
controller. This means that a framebuffer must be transmitted to the
display in every frame. As we have two framebuffers the graphics engine
can draw into one framebuffer while the other framebuffer is being
transmitted. This scheme works very well and is preferred if possible.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As the graphics engine is drawing in every frame we also transmit a
new framebuffer in all frames in the above drawing.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `There will often be frames where the application is not updating
anything. This implies that nothing is rendered. The same framebuffer
is therefore transmitted again in the succeeding frame.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-no-update.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "No update in frame 2"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The application is not drawing anything in frame 2, so the graphics
engine retransmits framebuffer 2 again in frame 3.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The typical parallel RGB display has a refresh rate around 60 Hz. This
update frequency must be maintained by the microcontroller. This
update frequency means that we have 16 ms to render a new frame before
the transmit begins again. In some cases the time to render a new
frame is more than 16 ms. In this case the graphics engine just
retransmit the same frame again (as before):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Long render time"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The rendering of frame 1 takes more than 16 ms, so the frame 0
previously rendered to framebuffer 1 is retransmitted. The new frame
in framebuffer 2 is transmitted in frame 3. When two framebuffers are
available, the rendering time can be very long. The previous frame is
retransmitted until the new frame is available.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `One framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In some systems there is only memory for one framebuffer. If we have a
parallel RGB display we are thus forced to transmit framebuffer 1 in
every frame.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This can be problematic because the graphics engine is forced to draw into
the same framebuffer that we are also transmitting to the display at
the same time. If this is done without care there is a high risk that
the display shows a frame that is a mix of the previous frame and the
new.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `One solution is to hold back the drawing until the transfer is
complete and only draw in the time-slot before the transfer starts
again. This yields little time to draw as the transfer takes up a significant part of the overall frame time. Another drawback is that incomplete frames (tearing) might still occur if the drawing is not complete when the next transfer starts.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A more potential solution is to keep track of how much of the
framebuffer is already transmitted and then limit the rendering to the appropriate part of the framebuffer. As the transfer progresses more and more of the framebuffer is available for the rendering algorithms.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine contains algorithms that help the programmer to
ensure that the drawing is performed correctly.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The application updates and renders the framebuffer in every frame:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "A single framebuffer is retransmitted in every frame"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The framebuffer is retransmitted unchanged if nothing is updated in a frame.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If the rendering time is longer than 16 ms the rendering has not
finished when the retransmission starts again:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Long render time"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this situation the graphics engine must make sure that the part
that is being transmitted is rendered completely. Otherwise the
display will show the unfinished framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the next section we will discuss the rendering time for the
individual Widgets. This will help the programmer to write applications
of high performance.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);