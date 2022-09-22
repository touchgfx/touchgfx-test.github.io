"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4861],{

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

/***/ 29415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  viewBox: "0 0 14 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class FurtherReading extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-further-reading)",
      header: "Further reading",
      type: "further-reading",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (FurtherReading);


/***/ }),

/***/ 88678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Highlight extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const className = `highlight highlight-${this.props.type}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-heading"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-icon"
    }, this.props.icon), this.props.header)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-content"
    }, this.props.children));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Highlight);


/***/ }),

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 22797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/InlineNote.js

class InlineNote extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement("i", null, this.props.children);
  }
}
/* harmony default export */ var components_InlineNote = (InlineNote);

// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./docs/development/ui-development/touchgfx-engine-features/backend-communication.mdx
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
  id: "backend-communication",
  title: "Backend Communication"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/backend-communication",
  "id": "development/ui-development/touchgfx-engine-features/backend-communication",
  "title": "Backend Communication",
  "description": "",
  "source": "@site/docs/development/ui-development/touchgfx-engine-features/backend-communication.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/backend-communication",
  "permalink": "/4.20/docs/development/ui-development/touchgfx-engine-features/backend-communication",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "backend-communication",
    "title": "Backend Communication"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Binary Translations",
    "permalink": "/4.20/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  },
  "next": {
    "title": "Mixins",
    "permalink": "/4.20/docs/development/ui-development/touchgfx-engine-features/mixins"
  }
};
const assets = {};





const toc = [{
  value: "The Model Class",
  id: "the-model-class",
  level: 2
}, {
  value: "System Interfacing",
  id: "system-interfacing",
  level: 2
}, {
  value: "Sampling from GUI Task",
  id: "sampling-from-gui-task",
  level: 3
}, {
  value: "Sampling from Secondary Task",
  id: "sampling-from-secondary-task",
  level: 3
}, {
  value: "Propagating Data to UI",
  id: "propagating-data-to-ui",
  level: 2
}, {
  value: "Transmitting Data from UI to Surrounding System",
  id: "transmitting-data-from-ui-to-surrounding-system",
  level: 2
}, {
  value: "Examples",
  id: "examples",
  level: 2
}, {
  value: "From GUI Task",
  id: "from-gui-task",
  level: 3
}, {
  value: "From Other Task",
  id: "from-other-task",
  level: 3
}, {
  value: "From Multiple tasks",
  id: "from-multiple-tasks",
  level: 3
}, {
  value: "From Task and External Interrupt Line",
  id: "from-task-and-external-interrupt-line",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In most applications, the UI needs to be connected to the rest of your system somehow, and send and receive data. This could be interfacing with hardware peripherals (sensor data, A/D conversions, serial communication, ...) or interfacing with other software modules.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `This article describes the recommended solutions for implementing this connection.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The first method is a `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `"quick-and-dirty"`), ` approach, primarily intended for prototyping, whereas the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `second method`), ` is an architecturally sound way of properly connecting the UI with the remaining components in a real world application.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In the end of this article, we link to examples of using both methods.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "the-model-class"
  }), `The Model Class`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `All TouchGFX applications have a Model class, which apart from storing UI state information is also intended to function as the interface to your surrounding system. By this we are referring to both hardware peripherals but also communicating with other OS tasks in your system. It is normally not a good design to access other software modules or hardware in the individual View classes.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "To learn more about the Model: ", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "../software-architecture/model-view-presenter-design-pattern",
    mdxType: "Link"
  }, "MVP pattern")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The Model class is well suited for placing any such interface code because:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `The Model class has a `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `tick()`), ` function which is automatically called every frame and can be implemented to look for and react to events from other sub-modules.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `The Model class has a pointer to your currently active Presenter, in order to be able to notify the UI of incoming events.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "system-interfacing"
  }), `System Interfacing`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `There are two ways of interfacing with the surrounding system, either by sampling directly from the GUI Task, or by sampling from a Secondary Task`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-gui-task"
  }), `Sampling from GUI Task`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The best way of interfacing with surrounding system depends on how frequently you need to sample, how time consuming it is and how time critical it is.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `If your requirements in those regards are lenient, the simplest approach is to just sample the surrounding system directly in the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` function.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `If the sampling occurs less frequently than your frame rate (typically around 60Hz), you can just add a counter and only do the sampling every Nth tick. When done this way, your sampling operation must be somewhat fast (typically 1ms or less), otherwise your frame rate will begin to suffer, since the sampling is done in the context of the GUI task and will delay drawing the frame.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-secondary-task"
  }), `Sampling from Secondary Task`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Alternatively, if it is not desirable to place the interaction with the surrounding system directly within the context of the GUI task, you can create a new OS task responsible for doing the sampling.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `You can configure this task to run at the exact time intervals you need for your specific scenario. Also depending on your needs this new task can have a lower or higher priority than the GUI task.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `If it has a higher priority, then you are guaranteed that it runs at exactly the times you have specified, regardless of what the GUI task is doing. This has the drawback that if it is a CPU consuming process it might impact the frame rate of the UI.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `If on the other hand the sampling is not time critical, you can assign the task a lower priority than the GUI task, such that the UI frame rate is never affected by the sampling of the surrounding system. The GUI task will sleep a lot while rendering (e.g. when waiting for a DMA-based pixel transfer to complete) so lower priority tasks will be allowed to run quite frequently and this is therefore sufficient for the vast majority of applications.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `If you use the secondary task approach, we recommend that you take advantage of the inter-task messaging system that is provided by your RTOS. Most, if not all, RTOSes have a queue/mail mechanism which allows you to send data (typically user-defined C structs, byte arrays or simple integers) from one task to another. In order to communicate new data to the GUI task, set up a mailbox or message queue for the UI task, and send the data to the GUI task using this messaging system. You can then `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` poll the mailbox of the GUI task to check if any new data has arrived. In case, read the data and update the UI accordingly.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "propagating-data-to-ui"
  }), `Propagating Data to UI`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Regardless of whether you use `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `Sampling from GUI Task`), ` or `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `Sampling from Secondary Task`), `, the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` function is the place where the GUI Task becomes aware of the new data to be shown in the UI. Apart from acting as an interface to your surrounding system, recall from earlier that the Model class is also responsible for holding state data, so there might be some state variables that need to be updated too.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Let us consider a simple example where a temperature sensor is attached to the system, and that the current temperature is to be shown in the UI. In preparation, we will augment the Model class to support this:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Model
{
public:
  // Function that allow your Presenters to read current temperature.
  int getCurrentTemperature() const { return currentTemperature; }

  // Called automatically by framework every tick.
  void tick();
  ...
private:
  // Variable storing last received temperature;
  int currentTemperature;
  ...
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `With the above, your `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenters`), ` are able to ask the model about the current temperature, allowing a Presenter to set this value in the UI (the View) when entering a screen that displays the temperature. What we need to do now is to be able to update the UI again when new temperature information is received. To do this we take advantage of the fact that the Model has a pointer to your currently active Presenter. The type of this pointer is an interface (`, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `ModelListener`), `) which you can modify to reflect the application-specific events that are appropriate:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "ModelListener.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class ModelListener
{
public:
  // Call this function to notify that temperature has changed.
  // Per default, use an empty implementation so that only those
  // Presenters interested in this specific event need to
  // override this function.
  virtual void notifyTemperatureChanged(int newTemperature) {}
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Now that we have this interface hooked up, the remaining this is to do the actual sampling of incoming "`, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `new temperature`), `" events `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
  // Pseudo-code for sampling data
  if (OS_Poll(GuiTaskMBox))
  {
    // Here we assume that you have defined a "Message" struct containing type and data,
    // along with some event definitions.
    struct Message msg = OS_Read(GuiTaskMBox);
    if (msg.eventType == EVT_TEMP_CHANGED)
    {
       // We received information that temperature has changed.
       // First, update Model state variable
       currentTemperature = msg.data;

      // Second, notify the currently active Presenter that temperature has changed.
      // The modelListener pointer points to the currently active Presenter.
      if (modelListener != 0)
      {
        modelListener->notifyTemperatureChanged(currentTemperature);
      }
    }
  }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The approach above ensures two things:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `The `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `currentTemperature`), ` variable is always up-to-date so that your Presenter can at any time obtain the current temperature.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `The `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenter`), ` is immediately notified of temperature changes and can take appropriate action.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `One advantage of the MVP pattern is that you achieve a separated handling of notifications depending on what screen you are currently on. Assume for instance that a temperature changed event occurs while displaying some kind of settings menu `, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `(e.g. MainMenuPresenter/MainMenuView is active)`), ` where the current temperature is of no relevance.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Since the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` function has a default empty implementation, this notification is simply disregarded by the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `MainMenuPresenter`), `. On the other hand, if you have a `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlPresenter`), ` you can in this Presenter override the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` function and inform the View that it should display an updated temperature:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "TemperatureControlPresenter.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemperatureControlPresenter : public ModelListener
{
public:
  // override the empty function.
  virtual void notifyTemperatureChanged(int newTemperature) {
    view.setTemp(newTemperature);
  }
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The View class `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlView`), `, must of course implement the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setTemp`), ` method.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "transmitting-data-from-ui-to-surrounding-system"
  }), `Transmitting Data from UI to Surrounding System`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The reverse direction where data/events are transferred from the UI to the surrounding system, is done through the Model in much the same way. Continuing the example from before if we need to add the ability to configure a new target temperature, we would add the following to the Model:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setNewTargetTemperature(int newTargetTemp)
{
  // Pseudo-code for sending an event to a task responsible for controlling temperature.
  struct Message msg;
  msg.eventType = EVT_SET_TARGET_TEMP;
  msg.data = newTargetTemp;
  OS_Send(SystemTaskMBox, &msg);
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In case the user sets a new target temperature in the UI, the View can inform the Presenter which holds a pointer to the Model object and is therefore able to call the `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setNewTargetTemperature`), ` function.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `Examples`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The following examples are Board Specific Demos (BSD), however much of the code demonstrated can be reused for other demo boards and custom hardware. For these examples we create the Tasks and Queues in STM32CubeMX. We then populate the generated Tasks and implements example user code in `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `main_user.c`), `. The examples use STM32CubeMX BSP librarie to control the LEDs, user buttons and other peripherals on the STM32 evaliation kits.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-gui-task"
  }), `From GUI Task`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F46G Discovery kit Control LED from GUI.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application demonstrates how to sample a button and control a LED. The Model class samples a button and updates the LED to match the state of the application.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-other-task"
  }), `From Other Task`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32H7B3I Evaluation Board Analog Sampler Task.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application demonstrates how to sample an analog input in separate thread. The example uses the MVP architecture to transfer the analog value to the View.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F46G Discovery kit Intertask Communication.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application demonstrates intertask communication and propagation to and from the UI. Use this as inspiration for your own setup. The example communicates between the backend system implemented in C code and the C++ TouchGFX GUI. The example runs on the STM32F746G-DISCO board on top of FreeRTOS.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-multiple-tasks"
  }), `From Multiple tasks`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F769I Discovery Multitast Communication Demo.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application samples the state of the button, passes a message through the GUI message queue if the button is pressed down. This allows us to advance the animation in the application by keeping the button pressed.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application uses three FreeRTOS tasks. One for the GUI, one for each peripheral (LED and USER Button).`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-task-and-external-interrupt-line"
  }), `From Task and External Interrupt Line`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F769I Discovery External Interrup Line Demo.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application was designed for the STM32F769I-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `This application configures the button in EXTI mode (external interrupt line 0). Behavior is to receive an interrupt when the button is pressed down after which the interrupt is cleared. This does not allow the same behavior as in GPIO, but instead we'll be single stepping the animation because a message is only sent through the gui message queue whenever an interrupt is received.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The application uses two FreeRTOS tasks. One for the GUI, one for the LED. (The Button task from `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#from-multiple-tasks"
  }), `Multiple tasks demo`), ` remains active in this application to exemplify that the peripheral interaction code has been moved into an interrupt handler).`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);