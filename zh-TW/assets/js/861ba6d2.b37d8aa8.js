"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[974],{

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

/***/ 70814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
}));
class Caution extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-caution)",
      header: "Caution",
      type: "caution",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Caution);


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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 54976:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93054);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22425);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70814);
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
  id: "scenarios-video-decoding",
  title: "\u5F71\u7247\u89E3\u78BC"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "title": "\u5F71\u7247\u89E3\u78BC",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-video-decoding.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-video-decoding",
    "title": "\u5F71\u7247\u89E3\u78BC"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"
  },
  "next": {
    "title": "MIPI-DSI Video Mode",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"
  }
};
const assets = {};







const toc = [{
  value: "\u8EDF\u9AD4\u89E3\u78BC",
  id: "software-decoding",
  level: 2
}, {
  value: "\u652F\u63F4RTOS",
  id: "rtos-support",
  level: 3
}, {
  value: "\u5F71\u7247\u5F71\u7247",
  id: "video-data",
  level: 3
}, {
  value: "\u786C\u9AD4\u89E3\u78BC",
  id: "hardware-decoding",
  level: 2
}, {
  value: "\u652F\u63F4RTOS",
  id: "rtos-support-1",
  level: 3
}, {
  value: "STM32F769-DISCO",
  id: "stm32f769-disco",
  level: 3
}, {
  value: "STM32H750-DK",
  id: "stm32h750-dk",
  level: 3
}, {
  value: "<code>FileReader</code>\u4ECB\u9762",
  id: "filereader-interface",
  level: 2
}, {
  value: "\u9077\u79FBTBS\uFF0C\u4EE5\u5F71\u7247\u89E3\u78BC",
  id: "migrating-tbs-to-support-video-decoding",
  level: 2
}, {
  value: "\u4E00\u822C\u6027\u8B8A\u66F4",
  id: "generel-changes",
  level: 3
}, {
  value: "\u8EDF\u9AD4\u8B8A\u66F4",
  id: "software-changes",
  level: 3
}, {
  value: "\u786C\u9AD4\u8B8A\u66F4",
  id: "hardware-changes",
  level: 3
}, {
  value: "\u5C07\u5F71\u7247\u7DE9\u885D\u5340\u7F6E\u65BC\u5916\u90E8\u8A18\u61B6\u9AD4\u4E2D",
  id: "placing-video-buffer-in-external-memory",
  level: 2
}, {
  value: "EWARM (IAR)",
  id: "ewarm-iar",
  level: 3
}, {
  value: "STM32CubeIDE",
  id: "stm32cubeide",
  level: 3
}, {
  value: "MDK-ARM (Keil)",
  id: "mdk-arm-keil",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C55\u793A\u5982\u4F55\u914D\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator`), `\uFF0C\u4EE5\u751F\u6210\u5177\u6709\u5F71\u50CF\u89E3\u78BC\u529F\u80FD\u7684TouchGFX HAL\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u5C07\u8A73\u7D30\u8AAA\u660E\u4E86\u5982\u4F55\u4F7F\u80FDTouchGFX HAL\uFF0C\u4EE5\u901A\u904E\u8EDF\u9AD4\uFF08LibJPEG\uFF09\u6216\u786C\u9AD4\uFF08JPEG\uFF09\u652F\u63F4\u5F71\u50CF\u89E3\u78BC\u3002 \u5B83\u6DB5\u84CBSTM32F7\u548CSTM32H7\uFF0C\u56E0\u70BA\u652F\u63F4\u786C\u9AD4\uFF08JPEG\uFF09\u89E3\u78BC\u7684STM32CubeMX\u914D\u7F6E\u8207STM32F7\u7565\u6709\u4E0D\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u60C5\u6CC1\u4E0B\uFF0CLibJPEG\u548CJPEG\u914D\u7F6E\u53EF\u4EE5\u5728\u4E2D\u4ECB\u8EDF\u9AD4\u548C\u591A\u5A92\u9AD4\u985E\u5225\u7684STM32CubeMX\u4E2D\u627E\u5230\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/cubemx-jpeg-configuration.png",
    mdxType: "Figure"
  }, "\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4F9D\u4F4D\u5740"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u95B1\u8B80\u672C\u6587\u4E4B\u524D\uFF0C\u8ACB\u95B1\u8B80\u95DC\u65BC\u5728TouchGFX\u4E2D\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/touchgfx-engine-features/video"
  }), `MJPEG\u5F71\u7247`), `\u7684\u6587\u4EF6\u548C\u95DC\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/ui-components/miscellaneous/video"
  }), `\u5F71\u7247\u5C0F\u5DE5\u5177`), `\u7684\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u52D9\u5FC5\u95B1\u8B80\u672C\u6587\u6240\u6709\u90E8\u5206\uFF0C\u7136\u5F8C\u7E7C\u7E8C\u4E0B\u4E00\u6B65\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u6700\u65B0\u7248\u672C\u7684STM32H750-DK\u3001STM32F769-DISCO\u548CSTM32F746G-DISCO TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF08TBS\uFF09\u901A\u904E\u5404\u81EA\u7684STM32CubeMX\u914D\u7F6E\u652F\u63F4\u8EDF\u9AD4\u548CJPEG\u786C\u9AD4\u89E3\u78BC\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "software-decoding"
  }), `\u8EDF\u9AD4\u89E3\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8EDF\u9AD4\u89E3\u78BC\u89E3\u6C7A\u65B9\u6848\u8981\u6C42\u6309\u7167`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357`), `\u4E2D\u6307\u5B9A\u7684\uFF0C\u5F9ESTM32CubeMX\u555F\u7528LibJPEG\u4E2D\u4ECB\u8EDF\u9AD4\u3002 \u8EDF\u9AD4\u89E3\u78BC\u8A2D\u7F6E\u5C0D\u65BC\u6240\u6709\u5177\u5099LibJPEG\u529F\u80FD\u7684MCU\uFF08\u5982STM32F4\u3001STM32F7\u3001STM32H7\uFF09\u90FD\u662F\u76F8\u540C\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u8EDF\u9AD4\u89E3\u78BC\u5668\u671F\u671BLibJPEG\u89E3\u78BC\u7684\u8CC7\u6599\u6309\u7167BGR\u50CF\u7D20\u6392\u5E8F\u3002 \u5982\u679C\u8A72\u8A2D\u7F6E\u4FDD\u7559\u70BARGB\uFF0CR\u548CB\u984F\u8272\u5206\u91CF\u5C07\u5728\u61C9\u7528\u4E2D\u4E92\u63DB\u3002 \u6B64\u5916\uFF0C\u6BCF\u500B\u50CF\u7D20\u7684\u5927\u5C0F\u61C9\u8A72\u662F3\u500B\u4F4D\u5143\u7D44\uFF084\u500B\u4F4D\u5143\u7D44\u610F\u5473\u8457\u5F71\u7247\u4EE5XRGB\u683C\u5F0F\u7DE8\u78BC\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "RGB_ORDERING\u8A2D\u7F6E\u5FC5\u9808\u914D\u7F6E\u70BABGR\uFF0C\u50CF\u7D20\u5927\u5C0F\u5FC5\u9808\u70BA3\uFF0824\u4F4D\uFF09\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/libjpeg-configuration.png",
    width: "700",
    mdxType: "Figure"
  }, "LibJPEG\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357`), `\u4E2D\u6240\u63CF\u8FF0\uFF0C\u4E00\u65E6\u5F9ESTM32CubeMX\u555F\u7528LibJPEG\uFF0C\u73FE\u5728\u53EF\u4EE5\u5F9ETouchGFX Generator\u555F\u7528\u8EDF\u9AD4\u89E3\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/generator-video-decoding-software.png",
    mdxType: "Figure"
  }, "TouchGFX Generator\uFF1A\u5F71\u7247\u89E3\u78BC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rtos-support"
  }), `\u652F\u63F4RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357`), `\u63D0\u5230\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u55AE`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u96D9\u7DE9\u885D\u5340`), `\u89E3\u78BC\u7B56\u7565\u9700\u8981\u7B26\u5408CMSIS\u6A19\u6E96\u7684RTOS\uFF0C\u6BD4\u5982FreeRTOS\u3002 TouchGFX Generator\u751F\u6210\u4E00\u500B\u5FC5\u9808\u8207\u5F71\u7247\u89E3\u78BC\u4EFB\u52D9\u95DC\u806F\u7684\u5165\u53E3\u51FD\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoTaskFunc`), `\u3002 STM32CubeMX\u53EF\u4EE5\u751F\u6210\u6B64\u914D\u7F6E\uFF0C\u65B9\u6CD5\u662F\u5728FreeRTOS\u4E2D\u4ECB\u8EDF\u9AD4\u914D\u7F6E\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4EFB\u52D9\u548C\u4F47\u5217`), `\u9078\u9805\u5361\u4E2D\u5B9A\u7FA9\u4EFB\u52D9\u548C\u5165\u53E3\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u4EFB\u52D9\u7684\u68E7\u5C3A\u5BF8\uFF08\u5728CMSIS V2\u7684\u8A5E\u4E2D\u5B9A\u7FA9\uFF09\u548CRTOS\u5806\u5C3A\u5BF8\u662F\u5169\u500B\u91CD\u8981\u53C3\u6578\uFF0C\u5F8C\u8005\u662F\u56E0\u70BA\u7528\u65BC\u8EDF\u9AD4\u89E3\u78BC\u7684LibJPEG\u4F7F\u7528\u52D5\u614B\u8A18\u61B6\u9AD4\u5206\u914D\u3002 FreeRTOS\u5806\u5C0D\u65BC\u60A8\u7684\u4E00\u822C\u61C9\u7528 +`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` 0xA000`), `\u61C9\u8A72\u8DB3\u5920\u5927\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/freertos-video-task.png",
    mdxType: "Figure"
  }, "FreeRTOS\u4EFB\u52D9\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/freertos-video-decoding-heap-size.png",
    mdxType: "Figure"
  }, "FreeRTOS\u5806\u5C3A\u5BF8\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u65BC\u4EE5\u4E0A\u914D\u7F6E\uFF0CSTM32CubeMX\u751F\u6210\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* Definitions for VideoTask */
osThreadId_t VideoTaskHandle;
const osThreadAttr_t VideoTask_attributes = {
  .name = "VideoTask",
  .stack_size = 1000 * 4,
  .priority = (osPriority_t) osPriorityLow,
};

void main()
{
    ...
    /* creation of VideoTask */
    VideoTaskHandle = osThreadNew(videoTaskFunc, NULL, &VideoTask_attributes);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FreeRTOSConfig.h"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#define configTOTAL_HEAP_SIZE                    ((size_t)75000)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u7E3D\u7D50\u4E86\u7528\u65BC\u8EDF\u9AD4\u89E3\u78BC\u7684TouchGFX HAL\u914D\u7F6E\u3002 \u5F9ESTM32CubeMX\u751F\u6210\u7A0B\u5F0F\u78BC\u5F8C\uFF0C\u5728\u5F9EDesigner\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/ui-components/miscellaneous/video"
  }), `\u5F71\u7247\u5C0F\u5DE5\u5177`), `\u6642\uFF0C\u61C9\u7528\u7A0B\u5F0F\u5C07\u80FD\u5920\u4F7F\u7528LibJPEG\u89E3\u78BC\u5F71\u7247\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-data"
  }), `\u5F71\u7247\u5F71\u7247`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u7576\u524D\u89E3\u78BC\u89E3\u6C7A\u65B9\u6848\uFF08\u4F7F\u7528STM32CubeMX\u3001TouchGFX Generator\u3001\u4EE5\u53CA\u4F86\u81EATouchGFX Designer\u7684\u5F71\u7247\u5C0F\u5DE5\u5177\uFF09\u76EE\u524D\u53EA\u9069\u7528\u65BC\u610F\u6CD5\u534A\u5C0E\u9AD4\u958B\u767C\u677F\uFF0C\u56E0\u70BA\u5F71\u7247\u8CC7\u6599\u93C8\u63A5\u5230\u4F4D\u65BC\u8A18\u61B6\u9AD4\u6620\u5C04\u7684flash\u4E2D\u5DF2\u77E5\u7279\u5B9A\u4F4D\u5740\u7684\u61C9\u7528\u7A0B\u5F0F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u4F86\u81EAEWARM\u5C08\u6848\u7684\u7A0B\u5F0F\u78BC\u7247\u6BB5\u986F\u793A\u4E86\u7531TouchGFX Designer\u5275\u5EFA\u7684\u984D\u5916\u9078\u9805\uFF0C\u4EE5\u53CA\u5B83\u5982\u4F55\u5C07\u8CC7\u6599\u653E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ExtFlashSection`), `\u4E2D\uFF0C\u5F8C\u8005\u662F\u5728\u6240\u6709TouchGFX\u958B\u767C\u5305\u7684\u9023\u7D50\u5668\u8173\u672C\u4E2D\u5B9A\u7FA9\u7684\u3002 \u9019\u4E0D\u9069\u7528\u65BC\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u7684flash\u6216\u672A\u5B9A\u7FA9\u6B64\u90E8\u5206\u7684\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "ewarm_project.ewp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `        <option>
          <name>IlinkExtraOptions</name>
          <state>--image_input $PROJ_DIR$\\..\\TouchGFX\\generated\\videos\\bin\\washerdryer.bin,video_washerdryer_bin_start,ExtFlashSection,4</state>
          <state>--keep video_washerdryer_bin_start</state>
        </option>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u5F71\u7247\u8CC7\u6599\u4F4D\u65BC\u975E\u5B58\u5132\u6620\u5C04\u7684flash\u4E2D\u7684\u5C08\u6848\uFF0C\u8ACB\u95B1\u8B80\u672C\u6587\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FileReader`), `\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-decoding"
  }), `\u786C\u9AD4\u89E3\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357`), `\u63D0\u5230\uFF0CJPEG IP\u5FC5\u9808\u5728STM32CubeMX\u4E2D\u555F\u7528\uFF0C\u4EE5\u652F\u63F4\u786C\u9AD4\u89E3\u78BC\u3002 \u8EDF\u9AD4\u89E3\u78BC\u548C\u786C\u9AD4\u89E3\u78BC\u6709\u591A\u500B\u5171\u540C\u7279\u9EDE\uFF0C\u800C\u672C\u7BC0\u5C07\u6982\u8FF0\u5B83\u5011\u4E4B\u9593\u7684\u4E0D\u540C\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rtos-support-1"
  }), `\u652F\u63F4RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\u68E7\u5C3A\u5BF8\u53EF\u4EE5\u5927\u5927\u4F4E\u65BC\u8EDF\u9AD4\u89E3\u78BC\u7684\u68E7\u5C3A\u5BF8\uFF0C\u56E0\u70BA\u6C92\u6709\u52D5\u614B\u5206\u914D\u8A18\u61B6\u9AD4\u7684\u8EDF\u9AD4\u68E7\u3002 \u4FDD\u6301\u68E7\u5C3A\u5BF8\uFF0C\u4EE5\u4FBF\u80FD\u5920\u5BB9\u7D0D\u5C08\u6848\u4E2D\u7684\u5176\u4ED6\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32f769-disco"
  }), `STM32F769-DISCO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u652F\u63F4JPEG\u529F\u80FD\u7684STM32F7\u7CFB\u5217\uFF08\u4F8B\u5982STM32F769\uFF09\u7684JPEG\u914D\u7F6E\uFF0C\u8207STM32H7\u7CFB\u5217\u7565\u6709\u4E0D\u540C\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `RGB_FORMAT`), `\u5FC5\u9808\u9075\u5B88TouchGFX Framebuffer\u7684\u683C\u5F0F\uFF0C\u5373\u4E0B\u9762\u7BC4\u4F8B\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `JPEG_RGB565`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-configuration.png",
    mdxType: "Figure"
  }, "JPEG\u53C3\u6578\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `DMA\u8A2D\u7F6E`), `\uFF0C\u4F7F\u7528DMA\u5C07\u8CC7\u6599\u50B3\u8F38\u5230JPEG\u5916\u8A2D\uFF08\u8A18\u61B6\u9AD4\u5230\u5916\u8A2D\uFF09\uFF0C\u4EE5\u53CA\u5F9EJPEG\u5916\u8A2D\u63A5\u6536\u8CC7\u6599\uFF08\u5916\u8A2D\u5230\u8A18\u61B6\u9AD4\uFF09\u3002 \u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `IN`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OUT`), `\u5404`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6DFB\u52A0`), `\u4E00\u500BDMA\u8ACB\u6C42\u5C07\u81EA\u52D5\u8A2D\u7F6E\u65B9\u5411\u53C3\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration1.png",
    mdxType: "Figure"
  }, "JPEG DMA\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration2.png",
    mdxType: "Figure"
  }, "JPEG DMA\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u7E3D\u7D50\u4E86\u652F\u63F4JPEG\u529F\u80FD\u7684STM32F7\uFF08\u4F8B\u5982STM32F769\uFF09\u4E0A\u95DC\u65BC\u786C\u9AD4\u89E3\u78BC\u7684TouchGFX HAL\u914D\u7F6E\u3002 \u5F9ESTM32CubeMX\u751F\u6210\u7A0B\u5F0F\u78BC\u5F8C\uFF0C\u5728\u5F9EDesigner\u4F7F\u7528\u5F71\u50CF\u5C0F\u5DE5\u5177\u6642\uFF0C\u61C9\u7528\u7A0B\u5F0F\u5C07\u80FD\u5920\u4F7F\u7528JPEG\u5916\u8A2D\u89E3\u78BC\u5F71\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "JPEG\u5916\u8A2D\u914D\u7F6E\u7684RGB_FORMAT\u5FC5\u9808\u9075\u5B88TouchGFX Framebuffer\u7684\u683C\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32h750-dk"
  }), `STM32H750-DK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u552F\u4E00\u80FD\u5C07\uFF08\u4F8B\u5982\uFF09STM32H750\u548CSTM32F769\u4E0A\u7684\u786C\u9AD4\u89E3\u78BC\uFF08\u652F\u63F4JPEG\uFF09\u52A0\u4EE5\u5340\u5206\u7684\u56E0\u7D20\u662F\u5728STM32CubeMX\u4E2D\u914D\u7F6EDMA\u50B3\u8F38\u7684\u65B9\u5F0F\u3002 \u4E0D\u50C5UI\u4E0D\u540C\uFF0CDMA\u6982\u5FF5\u4E5F\u4E0D\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BCSTM32H750\uFF0CJPEG\u5916\u8A2D\u53EA\u80FD\u914D\u7F6E\u70BA\u4F7F\u7528MDMA\u5916\u8A2D\uFF08\u800C\u4E0D\u662F\u5E38\u898FDMA\u5916\u8A2D\uFF09\u3002 \u70BA\u8F38\u5165\u548C\u8F38\u51FAFIFO\u95BE\u503C\u4FE1\u865F\u6DFB\u52A0MDMA\u914D\u7F6E\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8207DMA1/DMA2\u76F8\u6BD4\uFF0CMDMA\u662F\u6027\u80FD\u9AD8\u5F88\u591A\u7684DMA\u5F15\u64CE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/mdma-input-fifo-threshold.png",
    mdxType: "Figure"
  }, "JPEG DMA\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/mdma-output-fifo-threshold.png",
    mdxType: "Figure"
  }, "JPEG DMA\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u5C0D\u65BCH7\uFF0C\u5FC5\u9808\u6DFB\u52A0 *\u7528\u6236\u7A0B\u5F0F\u78BC*\uFF0C\u4EE5\u6B63\u78BA\u914D\u7F6E\u8CC7\u6599\u8F38\u5165/\u8F38\u51FA\u7684DMA\u8ACB\u6C42\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u5E78\u7684\u662F\uFF0C\u7576\u901A\u904ESTM32CubeMX\u70BA\uFF08\u4F8B\u5982\uFF09STM32H750\u751F\u6210\u7A0B\u5F0F\u78BC\u6642\uFF0C\u5C07\uFF08\u4E0A\u9762\u5B9A\u7FA9\u7684\uFF09MDMA\u914D\u7F6E\u70BAMDMA\u8655\u7406\u5E38\u5F0F\u7684\u7A0B\u5F0F\u78BC\u7F3A\u5931\uFF0C\u958B\u767C\u4EBA\u54E1\u5FC5\u9808\u624B\u52D5\u6DFB\u52A0\u7A81\u51FA\u986F\u793A\u7684\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Core\\Src\\stm32h7xx_hal_msp.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-7}",
    "{6-7}": true
  }), `void HAL_JPEG_MspInit(JPEG_HandleTypeDef* hjpeg)
{
  if(hjpeg->Instance==JPEG)
  {
  /* USER CODE BEGIN JPEG_MspInit 0 */
     hmdma_jpeg_infifo_th.Init.Request = MDMA_REQUEST_JPEG_INFIFO_TH;
     hmdma_jpeg_outfifo_th.Init.Request = MDMA_REQUEST_JPEG_OUTFIFO_TH;
  /* USER CODE END JPEG_MspInit 0 */
   ...

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "filereader-interface"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "h2"
  }, `FileReader`), `\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5728\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u7684\u8A18\u61B6\u9AD4\u4E0A\u5B58\u5132MJPEG\u5F71\u50CF\u6642\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u6307\u5B9A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::VideoDataReader`), `\u7684\u5BE6\u73FE\uFF0CTouchGFX\u5F71\u7247\u63A7\u5236\u5668\u53EF\u4EE5\u4F7F\u7528\u5B83\u5C07\u9700\u8981\u89E3\u78BC\u7684\u8CC7\u6599\u50B3\u8F38\u5230\u914D\u7F6E\u7684\u89E3\u78BC\u5668\uFF08\u8EDF\u9AD4/\u786C\u9AD4\uFF09\u3002 \u4E0B\u9762\u662F\u6B64\u4ECB\u9762\u7684\u7C21\u55AE\u7BC4\u4F8B\uFF0C\u5B83\u5C07\u5F71\u50CF\u8CC7\u6599\u5F9E\u4E00\u500B\u7DE9\u885D\u5340\u8907\u88FD\u5230\u53E6\u4E00\u500B\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "VideoView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class MyReader : public touchgfx::VideoDataReader
{
public:
    MyReader() : position(0) { }
    virtual uint32_t getDataLength() { return video_len; }
    virtual void seek(uint32_t pos) { position = pos; }
    virtual bool readData(void* dst, uint32_t bytes)
    {
        memcpy(dst, &video_data[position], bytes);
        position += bytes;
        return true;
    }
    private:
        uint32_t position;
} myReader;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u914D\u7F6E\u5C0F\u5DE5\u5177\u4EE5\u4F7F\u7528\u8CC7\u6599\u8B80\u53D6\u5668\uFF0C\u800C\u4E0D\u662F\u5C07\u4E00\u500B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u5F71\u50CF`), `\u5C0F\u5DE5\u5177\u6307\u5411\u6620\u5C04\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u958B\u59CB\u90E8\u5206\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "VideoView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `video.setVideoData(myReader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "migrating-tbs-to-support-video-decoding"
  }), `\u9077\u79FBTBS\uFF0C\u4EE5\u5F71\u7247\u89E3\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4F60\u60F3\u8981\u5728\u4E00\u500B\u5C08\u6848\uFF08\u8A72\u5C08\u6848\u662F\u5F9E\u4E00\u500B\u652F\u63F4\u5F71\u7247\u89E3\u78BC\u7684\u958B\u767C\u677F\u7684TBS\u6240\u5275\u5EFA\uFF09\u53EF\u7528\u4E4B\u524D\u5C07\u5176\u9077\u79FB\uFF0C\u800C\u4E14\u5E0C\u671B\u80FD\u5920\u5728TouchGFX Desginer\u4E2D\u5C0D\u8A72\u5C08\u6848\u9032\u884C\u201C\u904B\u884C\u5C08\u6848\u201D\u64CD\u4F5C\uFF0C\u5FC5\u9808\u5C0DGCC Makefile\u9032\u884C\u4E00\u4E9B\u624B\u52D5\u66F4\u6539\u3002 \u4EE5\u4E0B\u90E8\u5206\u5C07\u5217\u51FA\u6240\u9700\u7684\u8B8A\u66F4\u3001\u4EE5\u53CA\u9032\u884C\u8B8A\u66F4\u7684\u539F\u56E0\u3002 \u9019\u4E9B\u66F4\u6539\u662F\u5C0D\u820ATBS\u4E2D\u5DF2\u7D93\u5B58\u5728\u7684GCC Makefile\u7684\u64F4\u5C55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u8FF0\u5834\u666F\u6240\u8FF0\uFF0C\u9664\u4E86\u66F4\u65B0Makefile\uFF0C\u60A8\u9084\u5FC5\u9808\u5728STM32CubeMX\u4E2D\u8A2D\u7F6E\u5F71\u7247\u89E3\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generel-changes"
  }), `\u4E00\u822C\u6027\u8B8A\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9A\u7FA9\u60A8\u5C08\u6848\u4E2D\u7684LIBJPEG\u8DEF\u5F91\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make"
  }), `# LibJPEG path
libjpeg_path := $(cubemx_middlewares_path)/Third_Party/LibJPEG
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\u5FC5\u9808\u5B9A\u7FA9\u5F71\u7247\u8CC7\u7522\u8F38\u5165\u8DEF\u5F91\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{3}",
    "{3}": true
  }), `asset_texts_input  := TouchGFX/assets/texts

asset_videos_input := TouchGFX/assets/videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u8CC7\u7522\u8F38\u51FA\u8DEF\u5F91\u4E5F\u5FC5\u9808\u5B9A\u7FA9\u5728\u5176\u4ED6\u8CC7\u7522\u8F38\u51FA\u8DEF\u5F91\u4E0B\u9762\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4}",
    "{4}": true
  }), `asset_images_output := $(asset_root_path)/images
asset_fonts_output := $(asset_root_path)/fonts
asset_texts_output := $(asset_root_path)/texts
asset_videos_output := $(asset_root_path)/videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u5F71\u7247\u8F38\u51FA\u8CC7\u7522\u6DFB\u52A0\u5230\u5143\u4EF6\u6E05\u55AE\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{6}",
    "{6}": true
  }), `all_components := $(components) \\
    $(asset_fonts_output) \\
    $(asset_images_output) \\
    $(asset_texts_output)
    $(asset_texts_output) \\
    $(asset_videos_output)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u9808\u5B9A\u7FA9\u5F71\u7247\u76EE\u7684\u6A94\u3002 \u5F71\u7247\u76EE\u7684\u6A94\u8207\u5DF2\u7D93\u5B58\u5728\u7684\u7269\u4EF6\u5206\u96E2\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4}",
    "{4}": true
  }), `c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)
source_files += $(board_cpp_files)

video_object_files := $(call find, $(asset_videos_output),*.o)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u9808\u5B9A\u7FA9\u5230\u5F71\u7247\u8F49\u63DB\u5668\u8173\u672C\u7684\u8DEF\u5F91`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{3}",
    "{3}": true
  }), `textconvert_script_path := $(touchgfx_path)/framework/tools/textconvert
textconvert_executable := $(call find, $(textconvert_script_path), *.rb)
videoconvert_script_path := $(touchgfx_path)/framework/tools/videoconvert
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u6DFB\u52A0\u4E00\u500B\u53EF\u9078\u7684Echo\uFF0C\u4EE5\u67E5\u770B\u6240\u6709\u5F71\u7247\u76EE\u7684\u6A94\u3002 \u5F71\u7247\u76EE\u7684\u6A94\u5FC5\u9808\u6DFB\u52A0\u5230\u9023\u7D50\u968E\u6BB5\u3002 \u8A72\u884C\u5C07$(video_object_files) \u548C\u5176\u4ED6\u76EE\u7684\u6A94\u52A0\u5728\u4E00\u8D77\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{2,6}",
    "{2,6}": true
  }), `$(binary_output_path)/$(target_executable): $(object_files) $(object_asm_files)
    @echo Video Objects: $(video_object_files)
    @echo Linking $(@)
    @mkdir -p $(@D)
    @mkdir -p $(object_output_path)
    @$(file >$(build_root_path)/objects.tmp) $(foreach F,$(object_files) $(video_object_files),$(file >>$(build_root_path)/objects.tmp,$F))
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u5F71\u7247\u898F\u5247\u6DFB\u52A0\u5230\u73FE\u6709`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8CC7\u7522`), `\u548C.PHONY\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{1,3}",
    "{1,3}": true
  }), `_assets_: BitmapDatabase TextKeysAndLanguages Videos

.PHONY: BitmapDatabase TextKeysAndLanguages Videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u5F71\u7247\u8F49\u63DB\u5F8C\uFF0C\u63A5\u8457\u6DFB\u52A0\u5F71\u7247\u898F\u5247\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make"
  }), `Videos:
    @ruby $(videoconvert_script_path)/videoconvert.rb $(asset_videos_input) $(asset_videos_output)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u66F4\u65B0\u6E05\u9664\u898F\u5247\uFF0C\u4E5F\u522A\u9664\u8207\u5F71\u7247\u76F8\u95DC\u7684\u8F38\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{8}",
    "{8}": true
  }), `_clean_:
    @echo Cleaning: $(board_name)
    @rm -rf $(build_root_path)
    # Do not remove gui_generated
    @rm -rf $(asset_images_output)
    @rm -rf $(asset_fonts_output)
    @rm -rf $(asset_texts_output)
    @rm -rf $(asset_videos_output)
    # Create directory to avoid error if it does not exist
    @mkdir -p $(asset_root_path)
    # Remove assets folder if it is empty (i.e. no gui_generated folder)
    @rmdir --ignore-fail-on-non-empty $(asset_root_path)
    # Clean bootloader project
    @$(MAKE) -r -f ExtMem_Boot/gcc/Makefile -s $(MFLAGS) clean
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "software-changes"
  }), `\u8EDF\u9AD4\u8B8A\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u6240\u6709LIBJPEG\u8DEF\u5F91\u5230\u5305\u62EC\u8DEF\u5F91\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{9-11}",
    "{9-11}": true
  }), `include_paths := $(library_includes) \\
    $(foreach comp, $(all_components), $(comp)/include) \\
    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\
    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\
    $(framework_includes) \\
    $(cubemx_middlewares_path) \\
    $(touchgfx_middlewares_path) \\
    $(touchgfx_generator_components) \\
    LIBJPEG/Target \\
    $(libjpeg_path)/include \\
    LIBJPEG/App
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u9808\u5B9A\u7FA9LIBJPEG\u6E90\u8DEF\u5F91\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4-5}",
    "{4-5}": true
  }), `c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)
source_files += $(board_cpp_files)

libjpeg_source_path = Middlewares/Third_Party/LibJPEG/source
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A5\u4E0B\u4F86\uFF0C\u6240\u6709LIBJPEG\u539F\u59CB\u6A94\u6848\u5FC5\u9808\u6DFB\u52A0\u5230board_c_files\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{10-37}",
    "{10-37}": true
  }), `board_c_files := \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\
    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\
    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\
    $(libjpeg_source_path)/jaricom.c \\
    $(libjpeg_source_path)/jcomapi.c \\
    $(libjpeg_source_path)/jdapimin.c \\
    $(libjpeg_source_path)/jdapistd.c \\
    $(libjpeg_source_path)/jdarith.c \\
    $(libjpeg_source_path)/jdatasrc.c \\
    $(libjpeg_source_path)/jdcoefct.c \\
    $(libjpeg_source_path)/jdcolor.c \\
    $(libjpeg_source_path)/jddctmgr.c \\
    $(libjpeg_source_path)/jdhuff.c \\
    $(libjpeg_source_path)/jdinput.c \\
    $(libjpeg_source_path)/jdmainct.c \\
    $(libjpeg_source_path)/jdmarker.c \\
    $(libjpeg_source_path)/jdmaster.c \\
    $(libjpeg_source_path)/jdmerge.c \\
    $(libjpeg_source_path)/jdpostct.c \\
    $(libjpeg_source_path)/jdsample.c \\
    $(libjpeg_source_path)/jdtrans.c \\
    $(libjpeg_source_path)/jerror.c \\
    $(libjpeg_source_path)/jidctflt.c \\
    $(libjpeg_source_path)/jidctfst.c \\
    $(libjpeg_source_path)/jidctint.c \\
    $(libjpeg_source_path)/jmemmgr.c \\
    $(libjpeg_source_path)/jmemnobs.c \\
    $(libjpeg_source_path)/jquant1.c \\
    $(libjpeg_source_path)/jquant2.c \\
    $(libjpeg_source_path)/jutils.c \\
    LIBJPEG/App/libjpeg.c
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\u5C07LIBJPEG\u539F\u59CB\u6A94\u6848\u6DFB\u52A0\u5230\u73FE\u6709\u7684\u76EE\u7684\u6A94\u6848\u4E2D\uFF0C\u65B9\u6CD5\u8207\u5176\u4ED6\u4E2D\u4ECB\u8EDF\u9AD4\u539F\u59CB\u6A94\u6848\u76F8\u540C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{6}",
    "{6}": true
  }), `# Start converting paths
object_files := $(object_files:$(touchgfx_path)/%.cpp=$(object_output_path)/touchgfx/%.o)
object_files := $(object_files:%.cpp=$(object_output_path)/%.o)
object_files := $(object_files:$(touchgfx_middlewares_path)/%.c=$(object_output_path)/$(touchgfx_middlewares_path)/%.o)
object_files := $(object_files:$(cubemx_middlewares_path)/%.c=$(object_output_path)/$(cubemx_middlewares_path)/%.o)
object_files := $(object_files:$(libjpeg_source_path)/%.c=$(object_output_path)/$(libjpeg_source_path)/%.o)
object_files := $(object_files:$(Drivers_path)/%.c=$(object_output_path)/Drivers/%.o)
object_files := $(object_files:%.c=$(object_output_path)/%.o)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-changes"
  }), `\u786C\u9AD4\u8B8A\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u6240\u6709JPEG\u8DEF\u5F91\u5230\u5305\u62EC\u8DEF\u5F91\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{9}",
    "{9}": true
  }), `include_paths := $(library_includes) \\
    $(foreach comp, $(all_components), $(comp)/include) \\
    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\
    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\
    $(framework_includes) \\
    $(cubemx_middlewares_path) \\
    $(touchgfx_middlewares_path) \\
    $(touchgfx_generator_components) \\
    Utilities/JPEG
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A5\u4E0B\u4F86\uFF0C\u6240\u6709JPEG\u539F\u59CB\u6A94\u6848\u5FC5\u9808\u6DFB\u52A0\u5230board_c_files\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{10}",
    "{10}": true
  }), `board_c_files := \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\
    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\
    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\
    Utilities/JPEG/jpeg_utils.c
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "placing-video-buffer-in-external-memory"
  }), `\u5C07\u5F71\u7247\u7DE9\u885D\u5340\u7F6E\u65BC\u5916\u90E8\u8A18\u61B6\u9AD4\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u958B\u767C\u4EBA\u54E1\u4F7F\u7528CubeMX\u5275\u5EFA\u65B0\u5C08\u6848\u6642\uFF0C\u8207\u751F\u6210\u7684\u5C08\u6848\u76F8\u95DC\u806F\u7684\u9023\u7D50\u5668\u8173\u672C\u4E0D\u5305\u542BTouchGFX\u4F7F\u7528\u7684\u4EFB\u4F55\u53EF\u80FD\u7684\u5340\u57DF\u3002 \u56E0\u6B64\uFF0C\u7528\u65BC\u89E3\u78BCMJPEG\u5F71\u7247\u7684\u7279\u5B9A\u7DE9\u885D\u5340\u88AB\u9023\u7D50\u5668\u653E\u7F6E\u5728\u5167\u90E8flash\u4E2D\uFF0C\u76F4\u81F3\u958B\u767C\u4EBA\u54E1\u4FEE\u6539\u4ED6\u5011\u7684\u9023\u7D50\u5668\u8173\u672C\uFF0C\u5C07\u7DE9\u885D\u5340\u653E\u7F6E\u5230\u5176\u4ED6\u5730\u65B9\u3002 \u5982\u679C\u6C92\u6709\u9019\u6A23\u7684\u4FEE\u6539\uFF0C\u958B\u767C\u4EBA\u54E1\u5C07\u6703\u9047\u5230\u5927\u91CF\u5167\u90E8\u5B58\u5132\u88AB\u4F7F\u7528\u7684\u60C5\u6CC1\uFF0C\u53EF\u80FD\u7121\u6CD5\u5BB9\u7D0D\u5927\u4E00\u9EDE\u7684\u5F71\u7247\u7DE9\u885D\u5340\uFF0C\u6BD4\u5982\u5168\u87A2\u5E55\u5F71\u7247\u89E3\u78BC\u6240\u9700\u7684\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u4EE5\u4E0BTBS\u662F\u9810\u5148\u914D\u7F6E\u597D\u7684\uFF0C\u53EF\u4EE5\u5F9E\u5916\u90E8\u5B58\u5132\u89E3\u78BC\u5F71\u7247\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32F746-DISCO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32F769-DISCO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32H750-DK"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u555F\u7528\u5F71\u7247\u89E3\u78BC\u4EE5\u5F8C\uFF0CTouchGFX Generator\u751F\u6210\u7528\u65BCJPEG\u89E3\u78BC\u7684RGB\u7DE9\u885D\u5340\u7684\u5B9A\u7FA9\u3002 \u8A72\u5B9A\u7FA9\u662F\u7528\u4E00\u500B\u4F4D\u7F6E\u6307\u793A\u4F86\u5BE6\u73FE\u7684\uFF0C\u5B83\u544A\u8A34\u9023\u7D50\u5668\u61C9\u8A72\u5C07\u7DE9\u885D\u5340\u653E\u5728\u54EA\u500B\u90E8\u5206\u3002 \u5982\u679C\u9023\u7D50\u5668\u5728\u9023\u7D50\u5668\u8173\u672C\u4E2D\u627E\u4E0D\u5230\u8A72\u5B58\u5132\u5340\u57DF\uFF0C\u7DE9\u885D\u5340\u5C07\u88AB\u653E\u5728\u5167\u90E8\u5B58\u5132\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `LOCATION_PRAGMA_NOLOAD("Video_RGB_Buffer")
uint32_t videoRGBBuffer[57600] LOCATION_ATTRIBUTE_NOLOAD("Video_RGB_Buffer");
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7279\u5B9A\u65BC\u7DE8\u8B6F\u5668\u7684\u5B50\u7AE0\u7BC0\u63CF\u8FF0\u4E86\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u9032\u884C\u7684\u4FEE\u6539\uFF0C\u4EE5\u5BE6\u73FE\u5728SDRAM\u4E2D\u653E\u7F6E\u7DE9\u885D\u5340\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u8868\u793A\u7528\u65BC\u5F71\u7247\u89E3\u78BC\u7684\u7DE9\u885D\u5340\u3002 \u9023\u7D50\u5668\u8173\u672C\u7BC4\u4F8B\u5728SDRAM\u4E2D\u70BATouchGFX\u5F71\u50CF\u7DE9\u885D\u5340\u4FDD\u7559\u4E86\u4E00\u4E9B\u7A7A\u9593\uFF08\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `\u958B\u59CB\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator#video-decoding",
    mdxType: "Link"
  }, "TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357"), "\u4E2D\u95DC\u65BC\u914D\u7F6E\u5F71\u7247\u89E3\u78BC\u5C08\u6848\u7684\u5167\u5BB9\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u4F8B\u5B50\u90FD\u5728STM32F746G-DISCO\u677F\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `->`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC00FF000`), `\uFF09\u4E0A\u7684SDRAM\u958B\u59CB\u90E8\u5206\u4FDD\u7559\u4E86\u4E00\u4E9B\u7A7A\u9593\uFF0C\u5141\u8A31\u61C9\u7528\u7A0B\u5F0F\u901A\u904E\u4F4D\u5740\uFF08\u4F8B\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `\uFF09\u5F15\u7528\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u800C\u4E0D\u5B58\u5728\u9023\u7D50\u5668\u8986\u5BEB\u5F71\u50CF\u7DE9\u885D\u5340\u8CC7\u6599\u7684\u98A8\u96AA\u3002 \u6BCF\u500B\u7BC4\u4F8B\u90FD\u5141\u8A31\u9023\u7D50\u5668\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u653E\u5165\u5DF2\u5B9A\u7FA9\u7684SDRAM\u5340\u57DF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5982\u679C\u4F60\u5206\u914DTouchgfx\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u76F4\u63A5\u5B9A\u5740\uFF0C\u90A3\u9EBC\u4F60\u7684\u9023\u7D50\u5668\u8173\u672C\u4E5F\u61C9\u8A72\u5C07", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TouchGFX_Framebuffer"), "\u653E\u5165SDRAM\u4E2D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ewarm-iar"
  }), `EWARM (IAR)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f746xx_flash.icf"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `define symbol __ICFEDIT_region_SDRAM_start__   = 0xC00FF000;
define symbol __ICFEDIT_region_SDRAM_end__     = 0xC0700FFF;

define region SDRAM_region    = mem:[from __ICFEDIT_region_SDRAM_start__ to __ICFEDIT_region_SDRAM_end__];

place in SDRAM_region    { first section Video_RGB_Buffer };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9023\u7D50\u4E4B\u5F8C\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `EWARM\\STM32F746G_DISCO\\List\\STM32F746G_DISCO.map`), `\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u7684\u4EE5\u4E0B\u653E\u7F6E\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Video_RGB_Buffer        zero     0xc00f'f000   0x3'8400  TouchGFXGeneratedHAL.o [2]
                               - 0xc013'7400   0x3'8400
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubeide"
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746NGHX_FLASH.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  ...
  SDRAM      (xrw)    : ORIGIN = 0xC00FF000,   LENGTH = 8M
}

BufferSection (NOLOAD) :
{
  *(Video_RGB_Buffer Video_RGB_Buffer.*)
  *(.gnu.linkonce.r.*)
  . = ALIGN(0x4);
} >SDRAM

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7DE8\u8B6F\u4E4B\u5F8C\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32CubeIDE\\Debug\\STM32F746G_DISCO.map`), ` \u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u7684\u4EE5\u4E0B\u653E\u7F6E\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `BufferSection   0x00000000c00ff000    0x1c200
 *(Video_RGB_Buffer Video_RGB_Buffer.*)
 Video_RGB_Buffer
                0x00000000c00ff000    0x1c200 Application/User/TouchGFX/target/generated/TouchGFXGeneratedHAL.o
                0x00000000c00ff000                videoRGBBuffer
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mdk-arm-keil"
  }), `MDK-ARM (Keil)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.sct"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `LR_IROM1 0x08000000 0x00200000  {    ; load region size_region
  ER_IROM1 0x08000000 0x00200000  {  ; load address = execution address
    *.o (RESET, +First)
    *(InRoot$$Sections)
    .ANY (+RO)
  }
  RW_IRAM1 0x20000000 0x00050000  {  ; RW data
    .ANY (+RW +ZI)
  }
  RW_SDRAM 0xC00FF000 UNINIT 0xC0700FFF  {
    *.o (Video_RGB_Buffer)
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Make sure to include the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `UNINIT`), ` attribute in the section that holds the Video Buffer. This ensures leaving the memory region as uninitialized data. \u9023\u7D50\u4E4B\u5F8C\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MDK-ARM\\STM32F746G_DISCO\\STM32F746G_DISCO.map`), `\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u7684\u4EE5\u4E0B\u653E\u7F6E\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Video_RGB_Buffer                         0xc00ff000   Section    115200  touchgfxgeneratedhal.o(Video_RGB_Buffer)
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);