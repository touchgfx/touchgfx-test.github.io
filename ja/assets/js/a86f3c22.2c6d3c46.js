"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3176],{

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

/***/ 66475:
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
  title: "\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "title": "\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-video-decoding.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-video-decoding",
    "title": "\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"
  },
  "next": {
    "title": "MIPI-DSI\u30D3\u30C7\u30AA\uFF65\u30E2\u30FC\u30C9",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"
  }
};
const assets = {};







const toc = [{
  value: "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0",
  id: "software-decoding",
  level: 2
}, {
  value: "RTOS\u306E\u30B5\u30DD\u30FC\u30C8",
  id: "rtos-support",
  level: 3
}, {
  value: "\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF",
  id: "video-data",
  level: 3
}, {
  value: "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0",
  id: "hardware-decoding",
  level: 2
}, {
  value: "RTOS\u306E\u30B5\u30DD\u30FC\u30C8",
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
  value: "<code>FileReader</code>\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "filereader-interface",
  level: 2
}, {
  value: "TBS\u3092\u79FB\u884C\u3057\u3066\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC",
  id: "migrating-tbs-to-support-video-decoding",
  level: 2
}, {
  value: "\u4E00\u822C\u7684\u306A\u5909\u66F4",
  id: "generel-changes",
  level: 3
}, {
  value: "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u5909\u66F4",
  id: "software-changes",
  level: 3
}, {
  value: "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u5909\u66F4",
  id: "hardware-changes",
  level: 3
}, {
  value: "\u5916\u90E8\u30E1\u30E2\u30EA\u3078\u306E\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306E\u914D\u7F6E",
  id: "placing-video-buffer-in-external-memory",
  level: 2
}, {
  value: "EWARM\uFF08IAR\uFF09",
  id: "ewarm-iar",
  level: 3
}, {
  value: "STM32CubeIDE",
  id: "stm32cubeide",
  level: 3
}, {
  value: "MDK-ARM\uFF08Keil\uFF09",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u6A5F\u80FD\u3092\u5099\u3048\u305FTouchGFX HAL\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator`), `\u306E\u8A2D\u5B9A\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30B7\u30CA\u30EA\u30AA\u3067\u306F\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF08LibJPEG\uFF09\u307E\u305F\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF08JPEG\uFF09\u306E\u3044\u305A\u308C\u304B\u3092\u4F7F\u7528\u3057\u3066TouchGFX HAL\u3067\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u30B7\u30CA\u30EA\u30AA\u3067\u306F\u3001STM32F7\u3068STM32H7\u306E\u4E21\u65B9\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF08JPEG\uFF09\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306ESTM32CubeMX\u306E\u8A2D\u5B9A\u304CSTM32F7\u3067\u306F\u82E5\u5E72\u7570\u306A\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001LibJPEG\u8A2D\u5B9A\u3068JPEG\u8A2D\u5B9A\u306F\u3001STM32CubeMX\u306E\uFF3BMiddleware\uFF3D\u304A\u3088\u3073\uFF3BMultimedia\uFF3D\u30AB\u30C6\u30B4\u30EA\u306B\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/cubemx-jpeg-configuration.png",
    mdxType: "Figure"
  }, "\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF08\u30A2\u30C9\u30EC\u30B9\u306B\u3088\u308B\u6307\u5B9A\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B7\u30CA\u30EA\u30AA\u3092\u8AAD\u3080\u524D\u306B\u3001TouchGFX\u3067\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/touchgfx-engine-features/video"
  }), `MJPEG\u30D3\u30C7\u30AA`), `\u306E\u4F7F\u7528\u306B\u95A2\u3059\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/ui-components/miscellaneous/video"
  }), `\u30D3\u30C7\u30AA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), `\u81EA\u4F53\u306B\u95A2\u3059\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u76EE\u3092\u901A\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u306E\u3059\u3079\u3066\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u3093\u3067\u304B\u3089\u3001\u6B21\u306B\u9032\u3093\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "STM32H750-DK\u3001STM32F769-DISCO\u304A\u3088\u3073STM32F746G-DISCO TouchGFX Board Setup\uFF08TBS\uFF09\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306F\u3001STM32CubeMX\u8A2D\u5B9A\u306B\u3088\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3068JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u4E21\u65B9\u306E\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "software-decoding"
  }), `\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9`), `\u3067\u5B9A\u3081\u3089\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001LibJPEG\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092STM32CubeMX\u304B\u3089\u6709\u52B9\u5316\u3067\u304D\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u8A2D\u5B9A\u306F\u3001\u3059\u3079\u3066\u306ELibJPEG\u5BFE\u5FDC\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08STM32F4\u3001STM32F7\u3001STM32H7\uFF09\u3067\u540C\u3058\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Software Decoder\u3067\u306F\u3001LibJPEG\u3067\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306E\u30D4\u30AF\u30BB\u30EB\u9806\u5E8F\u3092BGR\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u304CRGB\u306E\u307E\u307E\u306E\u5834\u5408\u306F\u3001R\u8272\u6210\u5206\u3068B\u8272\u6210\u5206\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u30B9\u30EF\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002 \u3055\u3089\u306B\u3001\u5404\u30D4\u30AF\u30BB\u30EB\u306E\u30B5\u30A4\u30BA\u306F3\u30D0\u30A4\u30C8\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF084\u30D0\u30A4\u30C8\u306E\u5834\u5408\u306F\u3001\u30D3\u30C7\u30AA\u304CXRGB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "RGB_ORDERING\u306E\u8A2D\u5B9A\u3092BGR\u306B\u8A2D\u5B9A\u3057\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30B5\u30A4\u30BA\u30923\uFF0824\u30D3\u30C3\u30C8\uFF09\u306B\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/libjpeg-configuration.png",
    width: "700",
    mdxType: "Figure"
  }, "LibJPEG\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u304B\u3089LibJPEG\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9`), `\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092TouchGFX Generator\u304B\u3089\u6709\u52B9\u306B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/generator-video-decoding-software.png",
    mdxType: "Figure"
  }, "TouchGFX Generator: \u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rtos-support"
  }), `RTOS\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9`), `\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001\u30B7\u30F3\u30B0\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u304A\u3088\u3073\u30C0\u30D6\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u6226\u7565\u306B\u306F\u3001FreeRTOS\u306A\u3069\u306ECMSIS\u6E96\u62E0\u306ERTOS\u304C\u5FC5\u8981\u3067\u3059\u3002 TouchGFX Generator\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoTaskFunc`), `\u30A8\u30F3\u30C8\u30EA\uFF65\u30DD\u30A4\u30F3\u30C8\u95A2\u6570\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u95A2\u6570\u306F\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\uFF65\u30BF\u30B9\u30AF\u3068\u95A2\u9023\u4ED8\u3051\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 STM32CubeMX\u3067\u306F\u3001FreeRTOS\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u8A2D\u5B9A\u306E\uFF3BTasks and queues\uFF3D\u30BF\u30D6\u3067\u30BF\u30B9\u30AF\u3068\u30A8\u30F3\u30C8\u30EA\uFF65\u30DD\u30A4\u30F3\u30C8\u95A2\u6570\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u3053\u306E\u8A2D\u5B9A\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30BF\u30B9\u30AF\uFF65\u30B9\u30BF\u30C3\u30AF\uFF65\u30B5\u30A4\u30BA\uFF08CMSIS V2\u306E\u5834\u5408\u306F\u30EF\u30FC\u30C9\u6570\u3067\u5B9A\u7FA9\uFF09\u3068RTOS\u30D2\u30FC\u30D7\uFF65\u30B5\u30A4\u30BA\u306F2\u3064\u306E\u91CD\u8981\u306A\u8981\u7D20\u3067\u3059\u3002LibJPEG\u3067\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3059\u308B\u305F\u3081\u306B\u3001RTOS\u30D2\u30FC\u30D7\uFF65\u30B5\u30A4\u30BA\u306F\u52D5\u7684\u306A\u30E1\u30E2\u30EA\u5272\u308A\u5F53\u3066\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 FreeRTOS\u30D2\u30FC\u30D7\u306F\u6C4E\u7528\u7684\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 + `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xA000`), `\u306B\u5BFE\u3057\u3066\u5341\u5206\u306A\u5927\u304D\u3055\u304C\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/freertos-video-task.png",
    mdxType: "Figure"
  }, "FreeRTOS\u30BF\u30B9\u30AF\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/freertos-video-decoding-heap-size.png",
    mdxType: "Figure"
  }, "FreeRTOS\u30D2\u30FC\u30D7\uFF65\u30B5\u30A4\u30BA\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E\u8A2D\u5B9A\u306B\u57FA\u3065\u3044\u3066\u3001STM32CubeMX\u306F\u6B21\u306E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u7528\u306ETouchGFX HAL\u306E\u8A2D\u5B9A\u306F\u7D42\u4E86\u3067\u3059\u3002 STM32CubeMX\u304B\u3089\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u305F\u5F8C\u3001Designer\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/ui-components/miscellaneous/video"
  }), `\u30D3\u30C7\u30AA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), `\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067LibJPEG\u3092\u4F7F\u7528\u3057\u3066\u30D3\u30C7\u30AA\u3092\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-data"
  }), `\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "STM32CubeMX\u3001TouchGFX Generator\u304A\u3088\u3073TouchGFX Designer\u306E\u30D3\u30C7\u30AA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u73FE\u5728\u306E\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u73FE\u6642\u70B9\u3067\u306FST\u30DC\u30FC\u30C9\u306B\u5BFE\u3057\u3066\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF\u306F\u65E2\u77E5\u306E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306B\u3042\u308B\u7279\u5B9A\u306E\u30A2\u30C9\u30EC\u30B9\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `EWARM\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u8FFD\u52A0\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3001\u3059\u3079\u3066\u306ETouchGFX Board Package\u306B\u3064\u3044\u3066\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u5185\u90E8\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ExtFlashSection`), `\u306B\u30C7\u30FC\u30BF\u304C\u914D\u7F6E\u3055\u308C\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3084\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3057\u306A\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u6A5F\u80FD\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "ewarm_project.ewp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `        <option>
          <name>IlinkExtraOptions</name>
          <state>--image_input $PROJ_DIR$\\..\\TouchGFX\\generated\\videos\\bin\\washerdryer.bin,video_washerdryer_bin_start,ExtFlashSection,4</state>
          <state>--keep video_washerdryer_bin_start</state>
        </option>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E1\u30E2\u30EA\u306B\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u306E\u8A18\u4E8B\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FileReader`), `\u306B\u95A2\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-decoding"
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9`), `\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u53EF\u80FD\u306B\u3059\u308B\u305F\u3081\u306B\u3001JPEG IP\u3092STM32CubeMX\u3067\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3068\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306F\u3044\u304F\u3064\u304B\u306E\u7279\u5FB4\u3092\u5171\u6709\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u9055\u3044\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rtos-support-1"
  }), `RTOS\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30E2\u30EA\u3092\u52D5\u7684\u306B\u5272\u308A\u5F53\u3066\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30B9\u30BF\u30C3\u30AF\u304C\u306A\u3044\u305F\u3081\u3001FreeRTOS\u30B9\u30BF\u30C3\u30AF\uFF65\u30B5\u30A4\u30BA\u306F\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u5834\u5408\u3088\u308A\u3082\u5927\u5E45\u306B\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u305D\u306E\u4ED6\u306E\u30BF\u30B9\u30AF\u306B\u5BFE\u5FDC\u3067\u304D\u308B\u307B\u3069\u306E\u30B5\u30A4\u30BA\u3092\u7DAD\u6301\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32f769-disco"
  }), `STM32F769-DISCO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32F769\u306A\u3069\u306EJPEG\u5BFE\u5FDCSTM32F7\u30B7\u30EA\u30FC\u30BA\u306EJPEG\u306E\u8A2D\u5B9A\u306F\u3001STM32H7\u30B7\u30EA\u30FC\u30BA\u3068\u306F\u82E5\u5E72\u7570\u306A\u308A\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `RGB_FORMAT`), `\u306FTouchGFX\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `JPEG_RGB565`), `\uFF09\u306B\u5F93\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-configuration.png",
    mdxType: "Figure"
  }, "JPEG\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BDMA Settings\uFF3D\u304B\u3089\u3001DMA\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u3092JPEG\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\uFF08\u30E1\u30E2\u30EA\u304B\u3089\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\uFF09\u307E\u305F\u306FJPEG\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304B\u3089\uFF08\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304B\u3089\u30E1\u30E2\u30EA\uFF09\u9001\u4FE1\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `IN`), `\u3084`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OUT`), `\u306B\u5BFE\u3059\u308BDMA\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u65B9\u5411\u30D1\u30E9\u30E1\u30FC\u30BF\u304C\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration1.png",
    mdxType: "Figure"
  }, "JPEG DMA\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration2.png",
    mdxType: "Figure"
  }, "JPEG DMA\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067JPEG\u5BFE\u5FDCSTM32F7\uFF08STM32F769\u306A\u3069\uFF09\u306B\u5BFE\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u7528\u306ETouchGFX HAL\u306E\u8A2D\u5B9A\u306F\u7D42\u4E86\u3067\u3059\u3002 STM32CubeMX\u304B\u3089\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u305F\u5F8C\u3001Designer\u306E\u30D3\u30C7\u30AA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067JPEG\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30D3\u30C7\u30AA\u3092\u30C7\u30B3\u30FC\u30C9\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "JPEG\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306ERGB_FORMAT\u306E\u8A2D\u5B9A\u306F\u3001TouchGFX\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5F93\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32h750-dk"
  }), `STM32H750-DK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3068\u3048\u3070\u3001STM32H750\u3068STM32F769\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\uFF08JPEG\u5BFE\u5FDC\uFF09\u306E\u9055\u3044\u306F\u3001STM32CubeMX\u3067\u306EDMA\u8EE2\u9001\u306E\u8A2D\u5B9A\u65B9\u6CD5\u3060\u3051\u3067\u3059\u3002 UI\u3060\u3051\u3067\u306A\u304F\u3001DMA\u30B3\u30F3\u30BB\u30D7\u30C8\u3082\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H750\u306E\u5834\u5408\u3001JPEG\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306F\u3001\u901A\u5E38\u306EDMA\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3067\u306F\u306A\u304FMDMA\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u306E\u307F\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u5165\u51FA\u529B\u4E21\u65B9\u306EFIFO\u3057\u304D\u3044\u5024\u4FE1\u53F7\u306EMDMA\u8A2D\u5B9A\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "MDMA\u306F\u3001DMA1/DMA2\u3068\u6BD4\u3079\u3066\u306F\u308B\u304B\u306B\u9AD8\u6027\u80FD\u306EDMA\u30A8\u30F3\u30B8\u30F3\u3067\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/mdma-input-fifo-threshold.png",
    mdxType: "Figure"
  }, "JPEG DMA\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/mdma-output-fifo-threshold.png",
    mdxType: "Figure"
  }, "JPEG DMA\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "H7\u306B\u3064\u3044\u3066\u306F\u3001*\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9*\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30C7\u30FC\u30BF\u9001\u53D7\u4FE1\u306B\u5BFE\u3059\u308BDMA\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9069\u5207\u306B\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u304B\u3089STM32H750\u306A\u3069\u306E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u5834\u5408\u306F\u3001\u6B8B\u5FF5\u306A\u304C\u3089\u3001MDMA\u30CF\u30F3\u30C9\u30E9\u306BMDMA\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\uFF08\u4E0A\u8A18\u3067\u5B9A\u7FA9\uFF09\u304C\u6B20\u843D\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u958B\u767A\u8005\u306F\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u624B\u52D5\u3067\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
  }, `FileReader`), `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u30D3\u30C7\u30AA\u3092\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E1\u30E2\u30EA\u306B\u683C\u7D0D\u3059\u308B\u3068\u3001\u958B\u767A\u8005\u306F\u3001\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u7528\u306B\u30C7\u30FC\u30BF\u3092\u8A2D\u5B9A\u6E08\u307F\u306E\u30C7\u30B3\u30FC\u30C0\uFF08\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2 / \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF09\u306B\u6E21\u3059\u305F\u3081\u306BTouchGFX\u30D3\u30C7\u30AA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u4F7F\u7528\u3067\u304D\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::VideoDataReader`), `\u306E\u5B9F\u88C5\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306B\u3001\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF\u30921\u3064\u306E\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u5225\u306E\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3059\u308B\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306A\u3069\u306E\u7C21\u5358\u306A\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video`), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u30DE\u30C3\u30D7\u30C9\uFF65\u30E1\u30E2\u30EA\u5185\u306E\u30D3\u30C7\u30AA\u306E\u958B\u59CB\u4F4D\u7F6E\u3092\u30DD\u30A4\u30F3\u30C8\u3059\u308B\u304B\u308F\u308A\u306B\u3001\u958B\u767A\u8005\u306F\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "VideoView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `video.setVideoData(myReader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "migrating-tbs-to-support-video-decoding"
  }), `TBS\u3092\u79FB\u884C\u3057\u3066\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5229\u7528\u53EF\u80FD\u306B\u306A\u308B\u524D\u306B\u3001\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC\u3057\u305F\u30DC\u30FC\u30C9\u306E1\u3064\u306ETBS\u304B\u3089\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u79FB\u884C\u3057\u3001\u305D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067TouchGFX Designer\u306E\uFF3BRun Target\uFF3D\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u5834\u5408\u306F\u3001GCC Makefile\u306B\u3044\u304F\u3064\u304B\u306E\u5909\u66F4\u3092\u624B\u52D5\u3067\u52A0\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u5FC5\u8981\u306A\u5909\u66F4\u306E\u6982\u8981\u304A\u3088\u3073\u305D\u306E\u5909\u66F4\u304C\u5FC5\u8981\u306A\u7406\u7531\u306B\u3064\u3044\u3066\u306F\u3001\u5F8C\u7D9A\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u307E\u3059\u3002 \u5909\u66F4\u306B\u3088\u308A\u3001\u4EE5\u524D\u306ETBS\u304B\u3089\u4F5C\u6210\u3055\u308C\u305F\u65E2\u5B58\u306EGCC Makefile\u304C\u62E1\u5F35\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Makefile\u306E\u66F4\u65B0\u4EE5\u5916\u306B\u3082\u3001\u4E0A\u8A18\u306E\u30B7\u30CA\u30EA\u30AA\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001STM32CubeMX\u3067\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generel-changes"
  }), `\u4E00\u822C\u7684\u306A\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LIBJPEG\u30D1\u30B9\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make"
  }), `# LibJPEG path
libjpeg_path := $(cubemx_middlewares_path)/Third_Party/LibJPEG
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30D3\u30C7\u30AA\uFF65\u30A2\u30BB\u30C3\u30C8\u5165\u529B\u30D1\u30B9\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{3}",
    "{3}": true
  }), `asset_texts_input  := TouchGFX/assets/texts

asset_videos_input := TouchGFX/assets/videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30A2\u30BB\u30C3\u30C8\u51FA\u529B\u30D1\u30B9\u3082\u3001\u305D\u306E\u4ED6\u306E\u30A2\u30BB\u30C3\u30C8\u51FA\u529B\u30D1\u30B9\u306E\u4E0B\u306B\u5B9A\u7FA9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4}",
    "{4}": true
  }), `asset_images_output := $(asset_root_path)/images
asset_fonts_output := $(asset_root_path)/fonts
asset_texts_output := $(asset_root_path)/texts
asset_videos_output := $(asset_root_path)/videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\u51FA\u529B\u30A2\u30BB\u30C3\u30C8\u3092\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF65\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u30D3\u30C7\u30AA\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u65E2\u5B58\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304B\u3089\u533A\u5225\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4}",
    "{4}": true
  }), `c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)
source_files += $(board_cpp_files)

video_object_files := $(call find, $(asset_videos_output),*.o)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3078\u306E\u30D1\u30B9\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{3}",
    "{3}": true
  }), `textconvert_script_path := $(touchgfx_path)/framework/tools/textconvert
textconvert_executable := $(call find, $(textconvert_script_path), *.rb)
videoconvert_script_path := $(touchgfx_path)/framework/tools/videoconvert
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AA\u30D7\u30B7\u30E7\u30F3\u3067Echo\u3092\u8FFD\u52A0\u3057\u3066\u3001\u3059\u3079\u3066\u306E\u30D3\u30C7\u30AA\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002 \u30D3\u30C7\u30AA\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u30EA\u30F3\u30AF\u8A2D\u5B9A\u30B9\u30C6\u30FC\u30B8\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u3053\u306E\u884C\u306B\u306F\u4ED6\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3068\u3068\u3082\u306B\u8FFD\u52A0\u3055\u308C\u308B$(video_object_files)\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30EB\u30FC\u30EB\u3092\u65E2\u5B58\u306Eassets\u3068.PHONY\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{1,3}",
    "{1,3}": true
  }), `_assets_: BitmapDatabase TextKeysAndLanguages Videos

.PHONY: BitmapDatabase TextKeysAndLanguages Videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30EB\u30FC\u30EB\u3092\u30D3\u30C7\u30AA\u5909\u63DB\u3068\u3068\u3082\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make"
  }), `Videos:
    @ruby $(videoconvert_script_path)/videoconvert.rb $(asset_videos_input) $(asset_videos_output)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306B\u3001\u30AF\u30EA\u30FC\u30F3\u306A\u30EB\u30FC\u30EB\u3092\u66F4\u65B0\u3057\u3066\u3001\u30D3\u30C7\u30AA\u95A2\u9023\u306E\u51FA\u529B\u3082\u9664\u53BB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306ELIBJPEG\u30D1\u30B9\u3092\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LIBJPEG\u30BD\u30FC\u30B9\uFF65\u30D1\u30B9\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4-5}",
    "{4-5}": true
  }), `c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)
source_files += $(board_cpp_files)

libjpeg_source_path = Middlewares/Third_Party/LibJPEG/source

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u3059\u3079\u3066\u306ELIBJPEG\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092board_c_files\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{10-37}",
    "{10-37}": true
  }), `oard_c_files := \\
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001\u305D\u306E\u4ED6\u306E\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\uFF65\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u65B9\u6CD5\u3067\u3001LIBJPEG\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u65E2\u5B58\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306EJPEG\u30D1\u30B9\u3092\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u3059\u3079\u3066\u306EJPEG\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092board_c_files\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u5916\u90E8\u30E1\u30E2\u30EA\u3078\u306E\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306E\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u8005\u304CCubeMX\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u305F\u5834\u5408\u3001\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306B\u306F\u3001TouchGFX\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u9818\u57DF\u306F\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002 \u305D\u306E\u305F\u3081\u3001\u958B\u767A\u8005\u304C\u5225\u306E\u5834\u6240\u306B\u30D0\u30C3\u30D5\u30A1\u3092\u914D\u7F6E\u3059\u308B\u3088\u3046\u306B\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u5909\u66F4\u3059\u308B\u307E\u3067\u3001MJPEG\u30D3\u30C7\u30AA\u306E\u30C7\u30B3\u30FC\u30C9\u306B\u4F7F\u7528\u3055\u308C\u308B\u7279\u5B9A\u306E\u30D0\u30C3\u30D5\u30A1\u306F\u30EA\u30F3\u30AB\u306B\u3088\u3063\u3066\u5185\u90E8Flash\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u5909\u66F4\u3092\u884C\u308F\u306A\u3044\u3068\u3001\u958B\u767A\u8005\u306F\u5185\u90E8\u30E1\u30E2\u30EA\u306E\u4F7F\u7528\u91CF\u5897\u5927\u3084\u3001\u3053\u3068\u306B\u3088\u308B\u3068\u3001\u30D5\u30EB\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306A\u3069\u3001\u5927\u304D\u306A\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u5BFE\u5FDC\u304C\u4E0D\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u6B21\u306E\u8A2D\u5B9A\u6E08\u307F\u306ETBS\u306F\u3001\u5916\u90E8\u30E1\u30E2\u30EA\u304B\u3089\u306E\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32F746-DISCO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32F769-DISCO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32H750-DK"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u5C02\u7528\u306ERGB\u30D0\u30C3\u30D5\u30A1\u306E\u5B9A\u7FA9\u306F\u3001\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u306B\u3001TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5B9A\u7FA9\u306B\u306F\u3001\u30D0\u30C3\u30D5\u30A1\u3092\u914D\u7F6E\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u30EA\u30F3\u30AB\u306B\u901A\u77E5\u3059\u308B\u30ED\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D7\u30E9\u30B0\u30DE\u304C\u4ED8\u968F\u3057\u3066\u3044\u307E\u3059\u3002 \u30EA\u30F3\u30AB\u304C\u3053\u306E\u30E1\u30E2\u30EA\u9818\u57DF\u3092\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u691C\u51FA\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u30D0\u30C3\u30D5\u30A1\u306F\u5185\u90E8\u30E1\u30E2\u30EA\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `LOCATION_PRAGMA_NOLOAD("Video_RGB_Buffer")
uint32_t videoRGBBuffer[57600] LOCATION_ATTRIBUTE_NOLOAD("Video_RGB_Buffer");
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\u56FA\u6709\u306E\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001SDRAM\u3078\u306E\u30D0\u30C3\u30D5\u30A1\u306E\u914D\u7F6E\u3092\u5B9F\u73FE\u3059\u308B\u305F\u3081\u306B\u958B\u767A\u8005\u304C\u5B9F\u884C\u3067\u304D\u308B\u5909\u66F4\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u306F\u3001\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D0\u30C3\u30D5\u30A1\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002 \u30B5\u30F3\u30D7\u30EB\u306E\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u306F\u3001TouchGFX\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u7528\u306BSDRAM\u306E\u3044\u304F\u3089\u304B\u306E\u30B9\u30DA\u30FC\u30B9\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `\u304B\u3089\u958B\u59CB\uFF09\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator#video-decoding",
    mdxType: "Link"
  }, "TouchGFX Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9"), "\u306E\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u7528\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u3059\u3079\u3066\u306E\u4F8B\u3067\u306F\u3001STM32F746G-DISCO\u30DC\u30FC\u30C9\u306ESDRAM\u306E\u958B\u59CB\u30A2\u30C9\u30EC\u30B9\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `->`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC00FF000`), `\uFF09\u304B\u3089\u30B9\u30DA\u30FC\u30B9\u3092\u78BA\u4FDD\u3057\u3001\u30EA\u30F3\u30AB\u304C\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30C7\u30FC\u30BF\u3092\u4E0A\u66F8\u304D\u3059\u308B\u30EA\u30B9\u30AF\u306A\u3057\u306B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30A2\u30C9\u30EC\u30B9\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `\u306A\u3069\uFF09\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u53C2\u7167\u3067\u304D\u307E\u3059\u3002 \u5404\u4F8B\u3067\u3001\u30EA\u30F3\u30AB\u306F\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308BSDRAM\u9818\u57DF\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u76F4\u63A5\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001TouchGFX\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5272\u308A\u5F53\u3066\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TouchGFX_Framebuffer"), "\u3082SDRAM\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ewarm-iar"
  }), `EWARM\uFF08IAR\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f746xx_flash.icf"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `define symbol __ICFEDIT_region_SDRAM_start__   = 0xC00FF000;
define symbol __ICFEDIT_region_SDRAM_end__     = 0xC0700FFF;

define region SDRAM_region    = mem:[from __ICFEDIT_region_SDRAM_start__ to __ICFEDIT_region_SDRAM_end__];

place in SDRAM_region    { first section Video_RGB_Buffer };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30F3\u30AF\u8A2D\u5B9A\u3059\u308B\u3068\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `EWARM\\STM32F746G_DISCO\\List\\STM32F746G_DISCO.map`), `\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u306B\u95A2\u3059\u308B\u6B21\u306E\u914D\u7F6E\u60C5\u5831\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32CubeIDE\\Debug\\STM32F746G_DISCO.map`), `\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u306B\u95A2\u3059\u308B\u6B21\u306E\u914D\u7F6E\u60C5\u5831\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
  }), `MDK-ARM\uFF08Keil\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
  }, `UNINIT`), ` attribute in the section that holds the Video Buffer. This ensures leaving the memory region as uninitialized data. \u30EA\u30F3\u30AF\u8A2D\u5B9A\u3059\u308B\u3068\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MDK-ARM\\STM32F746G_DISCO\\STM32F746G_DISCO.map`), `\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\u306B\u95A2\u3059\u308B\u6B21\u306E\u914D\u7F6E\u60C5\u5831\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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