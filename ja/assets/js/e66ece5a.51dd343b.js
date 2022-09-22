"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9410],{

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

/***/ 39370:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39130);
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
  id: "touchgfx-generator",
  title: "Generator\u30E6\u30FC\u30B6\uFF65\u30AC\u30A4\u30C9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-generator",
  "id": "development/touchgfx-hal-development/touchgfx-generator",
  "title": "Generator\u30E6\u30FC\u30B6\uFF65\u30AC\u30A4\u30C9",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-generator.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-generator",
  "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-generator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-generator",
    "title": "Generator\u30E6\u30FC\u30B6\uFF65\u30AC\u30A4\u30C9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-architecture"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/ja/docs/category/scenarios"
  }
};
const assets = {};






const toc = [{
  value: "TouchGFX Generator\u306E\u6709\u52B9\u5316",
  id: "enabling-touchgfx-generator",
  level: 2
}, {
  value: "\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
  id: "generated-code-architecture",
  level: 2
}, {
  value: "\u6A5F\u80FD\u306E\u6982\u8981",
  id: "feature-overview",
  level: 2
}, {
  value: "Display",
  id: "display",
  level: 2
}, {
  value: "\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u5BF8\u6CD5",
  id: "interface-and-dimensions",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "framebuffer-pixel-format",
  level: 3
}, {
  value: "Buffering Strategies",
  id: "buffering-strategies",
  level: 3
}, {
  value: "Driver",
  id: "driver",
  level: 2
}, {
  value: "Application Tick Source",
  id: "application-tick-source",
  level: 3
}, {
  value: "Graphics Accelerator",
  id: "graphics-accelerator",
  level: 3
}, {
  value: "Real-Time Operating System",
  id: "real-time-operating-system",
  level: 3
}, {
  value: "ThreadX",
  id: "threadx-middleware-os",
  level: 4
}, {
  value: "STM32CubeMX\u304C\u63D0\u4F9B\u3059\u308B\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\uFF65\u30EA\u30B9\u30C8\u304B\u3089ThreadX\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B",
  id: "stm32cubemx\u304C\u63D0\u4F9B\u3059\u308B\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u30EA\u30B9\u30C8\u304B\u3089threadx\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B",
  level: 5
}, {
  value: "AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\u304B\u3089ThreadX\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B",
  id: "azrtos\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30D1\u30C3\u30AF\u304B\u3089threadx\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B",
  level: 5
}, {
  value: "FreeRTOS",
  id: "freertos-middleware-os",
  level: 4
}, {
  value: "ThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2",
  id: "threadx-middleware-os",
  level: 4
}, {
  value: "\u305D\u306E\u4ED6\u306ECMSIS\u6E96\u62E0OS",
  id: "other-cmsis-compliant-os",
  level: 4
}, {
  value: "Additional features",
  id: "additional-features",
  level: 3
}, {
  value: "External Data Reader",
  id: "external-data-reader",
  level: 4
}, {
  value: "8bitLTDC\u30AB\u30E9\u30FC\uFF65\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\uFF65\u30C6\u30FC\u30D6\u30EB",
  id: "8bit-ltdc-color-look-up-table",
  level: 4
}, {
  value: "Video Decoding",
  id: "video-decoding",
  level: 2
}, {
  value: "Type",
  id: "video-decoding-type",
  level: 3
}, {
  value: "Concurrent videos",
  id: "video-decoding-number",
  level: 3
}, {
  value: "Strategy",
  id: "video-decoding-strategy",
  level: 3
}, {
  value: "Decode Format",
  id: "decode-format",
  level: 3
}, {
  value: "Buffer size",
  id: "video-decoding-buffer-size",
  level: 3
}, {
  value: "\u751F\u6210\u3055\u308C\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  id: "generated-project",
  level: 2
}, {
  value: "TouchGFX Designer\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  id: "touchgfx-designer-project",
  level: 2
}, {
  value: "\u751F\u6210\u3055\u308C\u305F\u52D5\u4F5C\u306E\u5909\u66F4",
  id: "modifying-generated-behavior",
  level: 2
}, {
  value: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9",
  id: "upgrading-projects",
  level: 2
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X-CUBE-TOUCHGFX\u306E\u4E00\u90E8\u3067\u3042\u308BTouchGFX Generator\u306F\u3001STM32CubeMX\u306E\u8FFD\u52A0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u3001\u958B\u767A\u8005\u304C\u81EA\u524D\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067TouchGFX\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\u3092\u884C\u3046\u306E\u3092\u652F\u63F4\u3059\u308B\u3082\u306E\u3067\u3059\u3002 \u65E2\u5B58\u306ESTM32CubeMX\u306E\u8A2D\u5B9A\u3068\u30E6\u30FC\u30B6\u5165\u529B\u306B\u57FA\u3065\u3044\u3066\u3001TouchGFX Generator\u306F\u6A5F\u80FD\u3059\u308BTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A2D\u5B9A\u306B\u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u3053\u306B\u306F\u3001TouchGFX HAL\u3001TouchGFX OSAL\u3001\u304A\u3088\u3073TouchGFX\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3092\u4ECB\u3057\u3066\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u3068\u3001TouchGFX Designer\u304B\u3089TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u3051\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u3053\u3053\u3067UI\u3092\u958B\u767A\u3067\u304D\u307E\u3059\u3002 TouchGFX Designer\u306F\u3001\u8FFD\u52A0\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u3001STM32CubeMX\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7528\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u306EIDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u81EA\u52D5\u7684\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "enabling-touchgfx-generator"
  }), `TouchGFX Generator\u306E\u6709\u52B9\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306F\u3001X-CUBE\u304B\u3089\uFF3BSelect Components\uFF3D\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3053\u3068\u3067\u3001\u8FFD\u52A0\u6A5F\u80FD\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/enable-generator.png",
    mdxType: "Figure"
  }, "STM32CubeMX\u3067\uFF3BAdditional Software\uFF3D\u3092\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u56F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066TouchGFX Generator\u3092\u6709\u52B9\u5316\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-v4.17.png",
    width: "580",
    mdxType: "Figure"
  }, "TouchGFX Generator\u306E\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u5BFE\u3057\u3066TouchGFX\u3092\u6709\u52B9\u5316\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u6B63\u3057\u3044\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u6709\u52B9\u5316\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 TouchGFX\u306F\u5358\u4E00\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306E\u307F\u6709\u52B9\u5316\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.png",
    mdxType: "Figure"
  }, "\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2\u306B\u5BFE\u3059\u308BTouchGFX Generator\u306E\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-architecture"
  }), `\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306E\u6A5F\u80FD\u306E\u8AAC\u660E\u306E\u524D\u306B\u3001\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u3001\u958B\u767A\u8005\u304C\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3084\u52D5\u4F5C\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u7406\u89E3\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u751F\u6210\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u30E6\u30FC\u30B6\u8A18\u8FF0\u306E\u30B3\u30FC\u30C9\u306F\u3001STM32CubeMX\uFF08C\u30B3\u30FC\u30C9\uFF09\u3067\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u5168\u4F53\u306B\u660E\u793A\u7684\u306B\u914D\u7F6E\u3055\u308C\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `User Code`), `\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u4FDD\u8B77\u3055\u308C\u307E\u3059\u3002\xA0TouchGFX Generator\uFF08C++\u30B3\u30FC\u30C9\uFF09\u3067\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3067\u306F\u3001\u3053\u306E\u67D4\u8EDF\u6027\u304C\u4FDD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BAdditional Software\uFF3D\u3067TouchGFX Generator\u3092\u8FFD\u52A0\u3057\u3001\u6709\u52B9\u5316\u3059\u308B\u3068\u3001STM32CubeMX\u306F\u5E38\u306B\u305D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306BTouchGFX\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u306F\u8A2D\u5B9A\u306B\u95A2\u308F\u3089\u305A\u5E38\u306B\u540C\u3058\u30D5\u30A1\u30A4\u30EB\u304C\u542B\u307E\u308C\u307E\u3059\u304C\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u306FSTM32CubeMX\u304A\u3088\u3073\u30E6\u30FC\u30B6\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u5909\u308F\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30EA\u30B9\u30C8\u306F\u3001TouchGFX Generator\u304C\u6709\u52B9\u5316\u3055\u308C\u305FSTM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5185\u5BB9\u306E\u6982\u8981\u3092\u793A\u3057\u3066\u304A\u308A\u3001\u7279\u306BTouchGFX\u95A2\u9023\u30D5\u30A1\u30A4\u30EB\u304C\u5F37\u8ABF\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30EA\u30B9\u30C8\u306E\u5F8C\u306E\u8868\u306F\u3001\u6700\u3082\u91CD\u8981\u306A\u30A8\u30F3\u30C8\u30EA\u306E\u5F79\u5272\u3092\u6982\u8AAC\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX \u30D5\u30A9\u30EB\u30C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `\u2502   .mxproject
\u2502   myproject.ioc
\u251C\u2500\u2500\u2500Core
\u251C\u2500\u2500\u2500Drivers
\u251C\u2500\u2500\u2500EWARM
\u251C\u2500\u2500\u2500Middlewares
\u2514\u2500\u2500\u2500TouchGFX
    \u2502   ApplicationTemplate.touchgfx.part
    \u251C\u2500\u2500\u2500App
    \u2502       app_touchgfx.c
    \u2502       app_touchgfx.h
    \u2514\u2500\u2500\u2500target
        \u2502   STM32TouchController.cpp
        \u2502   STM32TouchController.hpp
        \u2502   TouchGFXGPIO.cpp
        \u2502   TouchGFXHAL.cpp
        \u2502   TouchGFXHAL.hpp
        \u2502
        \u2514\u2500\u2500\u2500generated
                OSWrappers.cpp
                TouchGFXConfiguration.cpp
                TouchGFXGeneratedHAL.cpp
                TouchGFXGeneratedHAL.hpp
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30A9\u30EB\u30C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F79\u5272`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `myproject.ioc`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `main.c`), ` \u3068\u8D77\u52D5\u30B3\u30FC\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Drivers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CMSIS\u3068\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D5\u30A1\u30DF\u30EA\u306E\u30C9\u30E9\u30A4\u30D0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A9\u30EB\u30C0\u3002 EWARM\u3001MDK-ARM\u3001STM32CubeIDE\u306E\u3044\u305A\u308C\u304B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Middlewares`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA / \u30D8\u30C3\u30C0\u30D5\u30A1\u30A4\u30EB\u3068\u3001\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\uFF65\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF08FreeRTOS\u306A\u3069\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ApplicationTemplate.touchgfx.part`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `.part\u30D5\u30A1\u30A4\u30EB\u306FSTM32CubeMX\u306B\u3088\u3063\u3066\u3001TouchGFX Designer\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u95A2\u9023\u3059\u308B\u60C5\u5831\uFF08\u753B\u9762\u306E\u5BF8\u6CD5\u3084\u30D3\u30C3\u30C8\u6DF1\u5EA6\u306A\u3069\uFF09\u3067\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `App`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `X-CUBE\u306ESTM32CubeMX\u306B\u5BFE\u3059\u308B\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `app_touchgfx.c`), ` \u306B\u306F\u3001\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Process(void)`), `\u304A\u3088\u3073 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Init(void)`), ` \u306E\u5B9A\u7FA9\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u95A2\u6570\u306FTouchGFX\u3092\u521D\u671F\u5316\u3057\u3066\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `target/generated`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u306B\u306F\u3001\u8A2D\u5B9A\u5909\u66F4\u6642\u306BSTM32CubeMX\u306B\u3088\u3063\u3066\u4E0A\u66F8\u304D\u3055\u308C\u308B\u8AAD\u51FA\u3057\u5C02\u7528\u30D5\u30A1\u30A4\u30EB\u304C\u542B\u307E\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL.cpp`), `\u306FTouchGFX\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `HAL`), `\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u3067\u3001STM32CubeMX\u304C\u73FE\u5728\u306E\u8A2D\u5B9A\u306B\u57FA\u3065\u3044\u3066\u751F\u6210\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30B3\u30FC\u30C9\u304C\u542B\u307E\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `OSWrappers.cpp`), `OSAL\uFF09\u306B\u306FTouchGFX\u30A8\u30F3\u30B8\u30F3\u3068\u306E\u540C\u671F\u306B\u5FC5\u8981\u306A\u95A2\u6570\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u6700\u5F8C\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXConfiguration.cpp`), ` \u306B\u306F\u3001TouchGFX\u306E\u69CB\u7BC9\u304A\u3088\u3073\u8A2D\u5B9A\u306E\u305F\u3081\u306E\u30B3\u30FC\u30C9\u304C\u542B\u307E\u308C\u307E\u3059\uFF08HAL\u3092\u542B\u3080\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `target`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `HAL\u306E\u52D5\u4F5C\u3092\u62E1\u5F35\u3057\u305F\u308ASTM32CubeMX\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u8A2D\u5B9A\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u305F\u308A\u3059\u308B\u305F\u3081\u306B\u30E6\u30FC\u30B6\u304C\u5909\u66F4\u3067\u304D\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u5927\u90E8\u5206\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `STM32TouchController.cpp`), `\u306B\u306F\u3001\u7A7A\u306E\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u542B\u307E\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL.cpp`), ` \u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL`), `\u306E\u30B5\u30D6\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL`), `,\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXConfiguration.cpp`), `\u306B\u306FHAL\u3092\u69CB\u7BC9\u3059\u308B\u95A2\u6570\u3068TouchGFX\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3059\u308B\u95A2\u6570\u304C\u542B\u307E\u308C\u308B\u3053\u3068\u3092\u628A\u63E1\u3057\u3066\u304A\u304F\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u8FFD\u52A0\u8A2D\u5B9A\u306F\u3001\u7DE8\u96C6\u53EF\u80FD\u306A\u30E6\u30FC\u30B6\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL`), `\u306B\u3066\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 HAL\u306E\u4E00\u822C\u7684\u306A\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, "\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u968E\u5C64"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "feature-overview"
  }), `\u6A5F\u80FD\u306E\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u306F\u6B21\u306E3\u3064\u306E\u4E3B\u306A\u30B0\u30EB\u30FC\u30D7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 4\u3064\u76EE\u306E\uFF3BDependencies\uFF3D\u306F\u3001\u73FE\u5728\u306E\u8A2D\u5B9A\u3067\u554F\u984C\u304C\u691C\u51FA\u3055\u308C\u305F\u5834\u5408\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Dependencies`), ` - \u3053\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u306F\u4F9D\u5B58\u95A2\u4FC2\u3001\u8B66\u544A\u3001\u307E\u305F\u306F\u8A2D\u5B9A\u5185\u306E\u5177\u4F53\u7684\u306A\u30A8\u30E9\u30FC\u306B\u95A2\u3059\u308B\u958B\u767A\u8005\u3078\u306E\u901A\u77E5\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u30A8\u30F3\u30C8\u30EA\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u3053\u306E\u30B0\u30EB\u30FC\u30D7\u306F\u975E\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Display`), ` - \u3053\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u95A2\u9023\u3059\u308B\u8A2D\u5B9A\uFF08\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D3\u30C3\u30C8\u6DF1\u5EA6\u3001\u5E45\u3001\u9AD8\u3055\u306A\u3069\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u8A2D\u5B9A\u306F\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u30B5\u30A4\u30BA\u3084\u3001\u30A2\u30BB\u30C3\u30C8\u7528\u306B\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306B\u76F4\u63A5\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Driver`), ` - \u3053\u306E\u30B0\u30EB\u30FC\u30D7\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\uFF08DMA2D\u304A\u3088\u3073GPU2D\uFF09\u3001RTOS\u306E\u30C6\u30A3\u30C3\u30AF\uFF65\u30BD\u30FC\u30B9\u306B\u95A2\u9023\u3059\u308B\u591A\u304F\u306E\u65E2\u88FD\u306E\u30C9\u30E9\u30A4\u30D0\u306B\u5BFE\u3057\u3066\u30E6\u30FC\u30B6\u304C\u30AA\u30D7\u30C8\u30A4\u30F3\u3067\u304D\u307E\u3059\u3002 STM32CubeMX\u306FFreeRTOS\uFF08CMSIS RTOS v1\u304A\u3088\u3073v2\uFF09\u306E\u8A2D\u5B9A\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u308B\u305F\u3081\u3001TouchGFX Generator\u306F\u3053\u308C\u3089\u306E\u5404\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u30C9\u30E9\u30A4\u30D0\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Additional Features`), ` - \u3053\u306E\u30B0\u30EB\u30FC\u30D7\u306FRGB565\u304C\u9078\u629E\u3055\u308C\u305F\u5834\u5408\u306B\u8868\u793A\u3055\u308C\u308B\u3082\u306E\u3067\u3001\u30E6\u30FC\u30B6\u306F\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u304B\u3089\u753B\u50CF\u307E\u305F\u306F\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Video Decoding`)), ` - \u3053\u306E\u30B0\u30EB\u30FC\u30D7\u3067\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u307E\u305F\u306F\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u30E6\u30FC\u30B6\u304C\u6709\u52B9\u5316\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30D3\u30C7\u30AA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u4F75\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u306A\u304A\u3001\u3059\u3079\u3066\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.png",
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX Generator\u306B\u306F3\u3064\u306E\u30B0\u30EB\u30FC\u30D7\u3001Display\u3001Driver\u3001Video Decoding\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `Display`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Display\u30B0\u30EB\u30FC\u30D7\u306B\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u95A2\u9023\u3059\u308B\u8A2D\u5B9A\uFF08\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001\u5BF8\u6CD5\u3001\u30D0\u30C3\u30D5\u30A1\u30EA\u30F3\u30B0\u6226\u7565\u306A\u3069\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface-and-dimensions"
  }), `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u5BF8\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u3001STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u3001\u6B21\u306B\u793A\u3059\u3088\u3046\u306A\u8907\u6570\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30E9\u30EC\u30EBRGB\uFF08LTDC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MIPI DSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304CLTDC\u307E\u305F\u306FFMC\u306B\u63A5\u7D9A\u3055\u308C\u305F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u5834\u5408\u3001TouchGFX Generator\u306F\u3001\u63A5\u7D9A\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002 DSI\u304A\u3088\u3073SPI\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30C9\u30E9\u30A4\u30D0\u306F\u3001\u958B\u767A\u8005\u81EA\u8EAB\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u3055\u307E\u3056\u307E\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30B3\u30FC\u30C9\u306E\u5177\u4F53\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-ltdc-parallel-rgb",
    mdxType: "Link"
  }, "\u30B7\u30CA\u30EA\u30AA"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-pixel-format"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306B\u3088\u3063\u3066\u73FE\u5728\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u4EE5\u4E0B\u3067\u3059\u3002 Custom\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3059\u3079\u3066\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A2D\u5B9A\u306B\u5236\u9650\u3055\u308C\u307E\u3059\uFF08\u305F\u3068\u3048\u3070\u3001LTDC\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5F62\u5F0F\u3092\u300CRGB565\u300D\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001TouchGFX Generator\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u300CRGB565\u300D\u306B\u5236\u9650\u3055\u308C\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `BW\uFF081bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Grey2\uFF082bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Grey4\uFF084bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ABRG2222\uFF088bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARGB2222\uFF088bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `BGRA2222\uFF088bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RGBA2222\uFF088bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RGB565\uFF0816bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RGB888\uFF0824bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARGB8888\uFF0832bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `XRGB8888\uFF0832bpp\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E00\u90E8\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001ChromART\uFF08DMA2D\uFF09\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u306A\u3044\u304B\u3001\u4E00\u90E8\u306E\u307F\u306B\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "STM32F7/H7\u306E\u5834\u5408"), "\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30E9\u30A4\u30C8\u30B9\u30EB\u30FC\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\uFF08SRAM\u306A\u3069\uFF09\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u308C\u3070\u3001DMA2D\uFF08Generator\u3067\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\uFF09\u304C\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u524D\u306B\u3001\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066DCache\u304C\u30AF\u30EA\u30A2\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u6A5F\u80FD\u3055\u305B\u308B\u306B\u306F\u3001STM32CubeMX\u3067", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\uFF3BCortex M7\uFF3D"), "\u306E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\uFF3BSystem Core\uFF3D"), "\u8A2D\u5B9A\u306B\u3042\u308B", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\uFF3BCPU Cache\uFF3D"), "\u3092\u5FC5\u305A\u6709\u52B9\u5316\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "CPU\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",
    mdxType: "Link"
  }, "F7\u304A\u3088\u3073H7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5"), "\u300D\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buffering-strategies"
  }), `Buffering Strategies`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3092\u4ECB\u3057\u3066\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6226\u7565\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Single Buffer`), ` - \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u30921\u3064\u3060\u3051\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5236\u9650\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u30E1\u30E2\u30EA\u306E\u4F7F\u7528\u91CF\u306F\u5C11\u306A\u304F\u3066\u6E08\u307F\u307E\u3059\u3002 \uFF3BBuffer Location\uFF3D\u8A2D\u5B9A\u3067\u4F7F\u7528\u3057\u3066\u3001\u5185\u90E8RAM\u306B\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002 \u3055\u3089\u306B\u6700\u9069\u5316\u3059\u308B\u306B\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u3063\u3066\u73FE\u5728\u51E6\u7406\u3055\u308C\u3066\u3044\u308B\u30E9\u30A4\u30F3\u3092\u8FD4\u3059\u95A2\u6570\u3092\u30E6\u30FC\u30B6\u304C\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306F\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u3001\u3053\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u3059\u3067\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u6E08\u307F\u306E\u30E1\u30E2\u30EA\u3078\u306E\u66F4\u65B0\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Double Buffer`), ` - 2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u901A\u5E38\u3001\u591A\u304F\u306E\u30E1\u30E2\u30EA\u3092\u5FC5\u8981\u3068\u3057\u307E\u3059\u304C\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Partial Buffer`), ` - 1\u3064\u4EE5\u4E0A\u306E\u30E6\u30FC\u30B6\u5B9A\u7FA9\u306E\u30E1\u30E2\u30EA\u9818\u57DF\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u6226\u7565\u306F\u5916\u90E8RAM\u306B\u983C\u3089\u306A\u3044\u304C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5168\u4F53\u3067\u306F\u4F7F\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u91CF\u3092\u8D85\u3048\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u5834\u5408\u306E\u4F4E\u30B3\u30B9\u30C8\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u3057\u3066\u3044\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30F3\u30B0\u30EB\u30FB\u30D0\u30C3\u30D5\u30A1\u3068\u30C0\u30D6\u30EB\u30FB\u30D0\u30C3\u30D5\u30A1\u306E\u5834\u5408\u3001\u30E6\u30FC\u30B6\u306F\uFF3BBuffer Location\uFF3D\u8A2D\u5B9A\u3067\u6B21\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u5834\u6240\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `By Allocation`), ` - \u30EA\u30F3\u30AB\u304C\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306B\u5F93\u3063\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30E1\u30E2\u30EA\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u5185\u90E8RAM\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `By Address`), ` - \u30E6\u30FC\u30B6\u304C1\u3064\uFF08\u30B7\u30F3\u30B0\u30EB\uFF09\u307E\u305F\u306F2\u3064\uFF08\u30C0\u30D6\u30EB\uFF09\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30A2\u30C9\u30EC\u30B9\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30D1\u30FC\u30B7\u30E3\u30EB\u30FB\u30D0\u30C3\u30D5\u30A1`), `\u6226\u7565\u3067\u306F\u3001\u30E6\u30FC\u30B6\u306F\u4EE5\u4E0B\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D6\u30ED\u30C3\u30AF\u6570\uFF08\u5E38\u306B\u5185\u90E8RAM\u306B\u914D\u7F6E\u3055\u308C\u308B\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D6\u30ED\u30C3\u30AF\uFF65\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u6226\u7565\u306B\u95A2\u3059\u308B\u4E2D\u5FC3\u7684\u306A\u6982\u5FF5\u3092\u7406\u89E3\u3059\u308B\u306B\u306F\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3057\u3066\u30E1\u30E2\u30EA\u8981\u4EF6\u3092\u8EFD\u6E1B\u3059\u308B\u65B9\u6CD5\u306B\u95A2\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\u5C02\u9580\u306E\u8A18\u4E8B`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u306E\u8A18\u4E8B\u306F\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5B9F\u73FE\u3059\u308B\u65B9\u6CD5\u3092\u6982\u5FF5\u7684\u306B\u793A\u3057\u305F\u3082\u306E\u306A\u306E\u3067\u3001\u3053\u306E\u8A18\u4E8B\u306B\u793A\u3059\u30B3\u30FC\u30C9\u306FTouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u5C11\u3057\u7570\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u6226\u7565\u3067\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u5177\u4F53\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scenarios/scenarios-framebuffer-strategies"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6226\u7565`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "driver"
  }), `Driver`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BDriver\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX AL\u306E\u3055\u307E\u3056\u307E\u306A\u5F79\u5272\u306B\u5BFE\u5FDC\u3059\u308B\u30C9\u30E9\u30A4\u30D0\u3092\u958B\u767A\u8005\u304C\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-tick-source"
  }), `Application Tick Source`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C6\u30A3\u30C3\u30AF\uFF65\u30BD\u30FC\u30B9\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u524D\u9032\u3055\u305B\u308B\u65B9\u6CD5\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u958B\u767A\u8005\u306F\u4EE5\u4E0B\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `LTDC`), ` - \uFF3BDisplay\uFF3D\u30B0\u30EB\u30FC\u30D7\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066\uFF3BLTDC\uFF3D\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u3001\uFF3BApplication Tick Source\uFF3D\u3092\uFF3BLTDC\uFF3D\u306B\u3067\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001TouchGFX Generator\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGeneratedHAL`), ` \u30AF\u30E9\u30B9\u306B\u30C9\u30E9\u30A4\u30D0\u95A2\u6570\uFF08LTDC\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9\uFF09\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3001\u305D\u308C\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `.\u3092\u547C\u3073\u51FA\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u524D\u9032\u3055\u305B\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Custom and FMC`), ` - \u3053\u306E\u5834\u5408\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\u3092\u7E70\u308A\u8FD4\u3057\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u524D\u9032\u3055\u305B\u308B\u30CF\u30F3\u30C9\u30E9\u3092\u3001\u958B\u767A\u8005\u304C\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphics-accelerator"
  }), `Graphics Accelerator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u95A2\u3057\u3066\u3001\u958B\u767A\u8005\u306B\u306F\u6B21\u306E3\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `None`), ` - \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306FCPU\u306E\u307F\u3092\u4F7F\u7528\u3057\u3066\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `DMA2D Accelerator (ChromART)`), ` - \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u53EF\u80FD\u3067\u3042\u308C\u3070ChromART\u30C1\u30C3\u30D7\u3092\u4F7F\u7528\u3057\u3066\u30D4\u30AF\u30BB\u30EB\u306E\u79FB\u52D5\u3084\u30D6\u30EC\u30F3\u30C9\u3092\u884C\u3044\u3001CPU\u30B5\u30A4\u30AF\u30EB\u3092\u89E3\u653E\u3057\u307E\u3059\u3002 TouchGFX Generator\u306B\u3088\u3063\u3066\u30C9\u30E9\u30A4\u30D0\u304C\u751F\u6210\u3055\u308C\u308B\u306E\u3067\u3001\u958B\u767A\u8005\u306B\u3088\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.png",
    width: "200",
    mdxType: "Figure"
  }, "DMA2D\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5834\u5408\u3001CubeMX\u306E\u300CMultimedia\u300D\u30AB\u30C6\u30B4\u30EA\u3067\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u304B\u3089\u63D0\u4F9B\u3055\u308C\u308BChrom-ART\uFF08DMA2D\uFF09\u30C9\u30E9\u30A4\u30D0\u306F\u3001TransferCompleteInterrupt\u306E\u53D7\u4FE1\u65B9\u6CD5\u3068\u3057\u3066\u6B21\u306E2\u3064\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TM32Cube HAL\u30C9\u30E9\u30A4\u30D0\u3092\u4F7F\u7528\u3057\u3066\u3001dma2d\u30CF\u30F3\u30C9\u30E9\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `hdma2d.XferCpltCallback`), `\u3092\u767B\u9332\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `DMA2D_IRQHandler()`), `\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9\u3092\u76F4\u63A5\u4F7F\u7528\u3059\u308B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E2\u3064\u306E\u65B9\u6CD5\u3092\u5207\u308A\u66FF\u3048\u308B\u306B\u306F\u3001DMA2D IP\u7528\u306ESTM32CubeMX\u306ENVIC\u8A2D\u5B9A\u3067\u3001DMA2D\u30B0\u30ED\u30FC\u30D0\u30EB\u5272\u8FBC\u307F\u3092\u6709\u52B9\u5316 / \u7121\u52B9\u5316\u3057\u307E\u3059\u3002 \u30B0\u30ED\u30FC\u30D0\u30EB\u5272\u8FBC\u307F\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u30AA\u30D7\u30B7\u30E7\u30F31\u306E\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u5272\u8FBC\u307F\u3092\u7121\u52B9\u5316\u3059\u308B\u3068\u30AA\u30D7\u30B7\u30E7\u30F32\u306E\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "DMA2D\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u5272\u8FBC\u307F\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u300CIRQ\u30CF\u30F3\u30C9\u30E9\u300D\u304C\u300CDMA2D HAL\u30CF\u30F3\u30C9\u30E9\u300D\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u52D5\u4F5C\u3067\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30B0\u30ED\u30FC\u30D0\u30EB\u5272\u8FBC\u307F\u304C\u6709\u52B9\u3067\u300CIRQ\u30CF\u30F3\u30C9\u30E9\u300D\u3068DMA2D\u306E\u300CHAL\u30CF\u30F3\u30C9\u30E9\u306E\u547C\u3073\u51FA\u3057\u300D\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u3001\u767B\u9332\u3055\u308C\u305F\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u305B\u3093\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `GPU2D\uFF08NeoChrom\uFF09`), `\u306F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u3067\u3001TouchGFX\u306B\u304A\u3044\u3066\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u542B\u3080\u591A\u304F\u306E\u63CF\u753B\u64CD\u4F5C\u3092\u52A0\u901F\u3055\u305B\u307E\u3059\u3002 \u3053\u308C\u306F\u3001RGB565\u3001RGB888\u3001ARGB8888\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.png",
    width: "190",
    mdxType: "Figure"
  }, "GPU2D\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5834\u5408\u3001CubeMX\u306E\u300CMultimedia\u300D\u30AB\u30C6\u30B4\u30EA\u3067\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "GPU2D\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001CubeMX\u3067\u3001\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306EMultimedia\u30BB\u30AF\u30B7\u30E7\u30F3\u3067GPU2D\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u8868\u793A\u3055\u308C\u307E\u3059\u3002 STM32U599\u30C7\u30D0\u30A4\u30B9\u3067\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3001Middlewares\u30BB\u30AF\u30B7\u30E7\u30F3\u3067ThreadX RTOS\u3082\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u3001TouchGFX\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "real-time-operating-system"
  }), `Real-Time Operating System`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u8005\u306FTouchGFX\u3067\u4EFB\u610F\u306ERTOS\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\uFF08OS\u7121\u3057\u3082\u542B\u3080\uFF09\u3002 \u300C\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u300D\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E6\u30FC\u30B6\u304C\u9078\u629E\u3057\u305FRTOS\u3068\u3001\u30E1\u30A4\u30F3\uFF65\u30A4\u30D9\u30F3\u30C8\uFF65\u30EB\u30FC\u30D7\u304A\u3088\u3073\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u540C\u671F\u3055\u305B\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), ` \u958B\u767A\u8005\u304CTouchGFX Generator\u3067\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u3001\u9078\u629E\u3057\u305FOS\u306E\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u3092\u4ECB\u3057\u3066\u5185\u90E8\u540C\u671F\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u305D\u308C\u3067\u3082\u3001\u7279\u306B\u30B9\u30BF\u30C3\u30AF\uFF65\u30B5\u30A4\u30BA\u3092\u6C7A\u5B9A\u3059\u308B\u305F\u3081\u306B\u3001STM32CubeMX\u3092\u4ECB\u3057\u3066\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\uFF08CMSIS OS V1\u304A\u3088\u3073V2\uFF09\u304A\u3088\u3073ThreadX\uFF08\u30CD\u30A4\u30C6\u30A3\u30D6\uFF65\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u307E\u305F\u306FAzure RTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\uFF09\u306F\u3001STM32CubeMX\u304A\u3088\u3073TouchGFX Generator\u5185\u304B\u3089\u76F4\u63A5\u8A2D\u5B9A\u53EF\u80FD\u3067\u3001\u30BF\u30B9\u30AF\u5B9A\u7FA9\u3068TouchGFX RTOS\u30C9\u30E9\u30A4\u30D0\u306E\u4E21\u65B9\u306E\u30E6\u30FC\u30B6\u751F\u6210\u306E\u30B3\u30FC\u30C9\u3092\u30E6\u30FC\u30B6\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002 TouchGFX Generator\u306F\u3001CMSIS V1\u304A\u3088\u3073CMSIS V2\u6E96\u62E0\u306ERTOS\u30C9\u30E9\u30A4\u30D0\u3092\u751F\u6210\u53EF\u80FD\u3067\u3001\u3053\u308C\u3089\u306F\u4EFB\u610F\u306ECMSIS\u6E96\u62E0\u306ERTOS\u3001ThreadX\u306E\u30C9\u30E9\u30A4\u30D0\u3001\u304A\u3088\u3073\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306A\u3057\u3067\u30D9\u30A2\uFF65\u30E1\u30BF\u30EB\u3067\u5B9F\u884C\u3059\u308B\u30C9\u30E9\u30A4\u30D0\u3068\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u6A5F\u80FD\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "threadx-middleware-os"
  }), `ThreadX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ThreadX\u3092\u6709\u52B9\u306B\u3059\u308B\u306B\u306F\u3001AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\u3092\u9078\u629E\u3059\u308B\u304B\u3001\u30CD\u30A4\u30C6\u30A3\u30D6\u306EThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092STM32CubeMX\u304B\u3089\u6709\u52B9\u306B\u3057\u307E\u3059\uFF08\u9078\u629E\u3057\u305F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30C7\u30D0\u30A4\u30B9\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u5834\u5408\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u3059\u3079\u3066\u306E\u65B0\u3057\u3044STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30C7\u30D0\u30A4\u30B9\u306F\u3001\u8FFD\u52A0\u306E\u30D1\u30C3\u30AF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u306A\u304F\u3066\u3082STM32CubeMX\u304B\u3089\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u308BThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 TouchGFX Board Support\u30D1\u30C3\u30AF\u306F\u3001\u53EF\u80FD\u306A\u5834\u5408\u306FThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001X-CUBE-AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\u3092\u4F7F\u7528\u3059\u308B\u65B9\u5411\u306B\u5F90\u3005\u306B\u79FB\u884C\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "ThreadX\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3059\u308BX-CUBE-AZRTOS-XX\u62E1\u5F35\u30D1\u30C3\u30AF\u306F\u3001STM32G0xx\u3001STM32G4xx\u3001STM32L4xx\u3001STM32F4xx\u3001STM32F7xx\u3001STM32H7xx\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30B7\u30EA\u30FC\u30BA\u3067\u3059\u3067\u306B\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u56F3\u306F\u3001TouchGFX Generator\u3092\u901A\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/driver-rtos-options-threadx.png",
    mdxType: "Figure"
  }, "RTOS\u30C9\u30E9\u30A4\u30D0\u306E\u30AA\u30D7\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "NoOS"), "\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "ThreadX"), "\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u304C\u6709\u52B9\u306A\u5834\u5408\u306F\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "CMSIS_RTOS_V1"), "\u304A\u3088\u3073", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "CMSIS_RTOS_V2"), "\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "ThreadX"), "\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u304C\u6709\u52B9\u306A\u5834\u5408\u306F\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002 ST\u306FCMSIS OS\u30E9\u30C3\u30D1\u30FC\u3092\u63D0\u4F9B\u3057\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u30E6\u30FC\u30B6\u304C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Custom"), "\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u3066CMSIS\u30E9\u30C3\u30D1\u30FC\u3092\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "stm32cubemx\u304C\u63D0\u4F9B\u3059\u308B\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u30EA\u30B9\u30C8\u304B\u3089threadx\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B"
  }), `STM32CubeMX\u304C\u63D0\u4F9B\u3059\u308B\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\uFF65\u30EA\u30B9\u30C8\u304B\u3089ThreadX\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ThreadX\u306B\u9069\u3057\u305F\u30E1\u30E2\u30EA\u8A2D\u5B9A\u306FMemory Pool Allocation\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002 \u63A8\u5968\u3055\u308C\u308B\u5024\u306F\u3001Static Allocation\u3067\u3059\u3002 ThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u306E\u8A2D\u5B9A\u3067\u3001\u6B21\u306E\u624B\u9806\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0B\u306E\u56F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001Mode\u30EA\u30B9\u30C8\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Core`), `\u3092\u9078\u629E\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `THREADX`), `\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TX_TIMER_TICKS_PER_SECOND`), `\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1000`), `\u306B\u8A2D\u5B9A\u3057\u3066\u30011\u30DF\u30EA\u79D2\u3054\u3068\u306B\u30C6\u30A3\u30C3\u30AF\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Memory Pool Allocation`), `\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Use Static Allocation`), `\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.png",
    mdxType: "Figure"
  }, "\u30CD\u30A4\u30C6\u30A3\u30D6\u306EThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Native ThreadX Middleware"), "\u304C\u6709\u52B9\u306A\u5834\u5408\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Memory Pool Allocation"), "\u3092", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Use Dynamic Allocation"), "\u306B\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Memory Pool Allocation"), "\u3092", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Use Dynamic Allocation"), "\u306B\u8A2D\u5B9A\u3057\u305F\u5834\u5408"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30E6\u30FC\u30B6\u306F\u3001\u751F\u6210\u3055\u308C\u305F", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "app_azure_rtos.c"), "\u30D5\u30A1\u30A4\u30EB\u306EUSER CODE BEGIN DYNAMIC_MEM_ALLOC\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u3001\u4E0D\u8DB3\u3057\u305F\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u3055\u3089\u306B\u30E6\u30FC\u30B6\u306F\u3001\u751F\u6210\u3055\u308C\u305F", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "app_azure_rtos.c"), "\u30D5\u30A1\u30A4\u30EB\u306B\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u63A8\u5968\u4E8B\u9805\u306B\u5F93\u3063\u3066\u3001\u30EA\u30F3\u30AB\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "azrtos\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30D1\u30C3\u30AF\u304B\u3089threadx\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B"
  }), `AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\u304B\u3089ThreadX\u3092\u6709\u52B9\u306B\u3057\u3066\u8A2D\u5B9A\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Software Packs -> Select Components`), `\u3092\u9078\u629E\u3059\u308B\u304B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Alt-O`), `\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `STMicroelectonics.X-CUBE-AZRTOS-XX`), `\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u5FC5\u8981\u306B\u5FDC\u3058\u3066\u30D1\u30C3\u30AF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `RTOS ThreadX`), `\u3092\u9078\u629E\u3057\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Core`), `\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AA\u30F3\u306B\u3057\u3066ThreadX\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002 \u3053\u308C\u3067Software Packs Component Selector\u3092\u5B89\u5168\u306B\u9589\u3058\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.png",
    mdxType: "Figure"
  }, "X-CUBE-AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\u304B\u3089ThreadX\u3092\u6709\u52B9\u306B\u3059\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5DE6\u5074\u306ECategories\u30EA\u30B9\u30C8\u304B\u3089Software Packs\u30B0\u30EB\u30FC\u30D7\u3092\u9078\u629E\u3057\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `STMicroelectonics.X-CUBE-AZRTOS-XX`), `\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `RTOS ThreadX`), `\u30E2\u30FC\u30C9\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3067\u3001ThreadX\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Memory Pool Allocation`), `\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Use Static Allocation`), `\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.png",
    width: "800",
    mdxType: "Figure"
  }, "ThreadX\u306E\u8A2D\u5B9A - X-CUBE-AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TX_TIMER_TICKS_PER_SECOND`), `\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1000`), `\u306B\u8A2D\u5B9A\u3057\u3066\u30011\u30DF\u30EA\u79D2\u3054\u3068\u306B\u30C6\u30A3\u30C3\u30AF\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.png",
    width: "800",
    mdxType: "Figure"
  }, "ThreadX\u306E\u8A2D\u5B9A - X-CUBE-AZRTOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "freertos-middleware-os"
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u3068\u3001TouchGFX\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306B\u5165\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void\xA0MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u8005\u306FTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u305F\u3044\u30BF\u30B9\u30AF\u306E\u30BF\u30B9\u30AF\uFF65\u30CF\u30F3\u30C9\u30E9\u5185\u3067\u3001\u3053\u306E\u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6B21\u306E\u4F8B\u306F\u3001\u30E6\u30FC\u30B6\u304CSTM32CubeMX\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DefaultTask`), `\u3068\u3044\u3046\u540D\u524D\u306EFreeRTOS\u30BF\u30B9\u30AF\u3092\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u306B\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process()`), `\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u3053\u306E\u30BF\u30B9\u30AF\uFF65\u30CF\u30F3\u30C9\u30E9\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u3067TouchGFX\u3092\u958B\u59CB\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4}",
    "{4}": true
  }), `void\xA0StartDefaultTask(void\xA0*argument)
{
\xA0\xA0/*\xA0USER\xA0CODE\xA0BEGIN\xA05\xA0*/
  MX_TouchGFX_Process();
\xA0\xA0/*\xA0USER\xA0CODE\xA0END\xA05\xA0*/\xA0
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u306F\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u3092\u8D77\u52D5\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `osKernelStart();`), `\u306E\u547C\u3073\u51FA\u3057\u3082\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "threadx-middleware-os"
  }), `ThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u306F\u3001\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u304A\u3088\u3073\u30E6\u30FC\u30B6\u7528\u306E\u30B9\u30EC\u30C3\u30C9\u3092\u4F5C\u6210\u3059\u308B\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` STM32CubeMX\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_PreOSInit()`), `\u95A2\u6570\u3078\u306E\u547C\u3073\u51FA\u3057\u3092\u751F\u6210\u3057\u3001\u3053\u306E\u95A2\u6570\u304CTouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u521D\u671F\u5316\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` STM32CubeMX\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_ThreadX_Init()()`), `\u95A2\u6570\u3078\u306E\u547C\u3073\u51FA\u3057\u3092\u751F\u6210\u3057\u3001\u3053\u306E\u95A2\u6570\u304CThreadX\u30AB\u30FC\u30CD\u30EB\u3092\u521D\u671F\u5316\u3057\u3066\u8D77\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4,9}",
    "{4,9}": true
  }), `int main(void)
{
  /* Call PreOsInit function */
    MX_TouchGFX_PreOSInit();
  /* USER CODE BEGIN 2 */

  /* USER CODE END 2 */

  MX_ThreadX_Init();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_PreOSInit()`), `\u95A2\u6570\u3092\u751F\u6210\u3057\u3001\u3053\u306E\u95A2\u6570\u304C\u5358\u7D14\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_init()`), `\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7}",
    "{7}": true
  }), `/**
 * PreOS Initialization function
 */
void MX_TouchGFX_PreOSInit(void)
{
  // Calling forward to touchgfx_init in C++ domain
  touchgfx_init();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Init()`), `\u95A2\u6570\u3092\u751F\u6210\u3057\u3001\u3053\u306E\u95A2\u6570\u304CTouchGFX\u30B9\u30EC\u30C3\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{16-23}",
    "{16-23}": true
  }), `/**
 * Create TouchGFX Thread
 */
UINT MX_TouchGFX_Init(VOID *memory_ptr)
{
  UINT ret = TX_SUCCESS;
  CHAR *pointer = 0;

  /* Allocate the stack for TouchGFX Thread.  */
  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,
                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)
  {
    ret = TX_POOL_ERROR;
  }

  /* Create TouchGFX Thread */
  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,
                       pointer, TOUCHGFX_STACK_SIZE,
                       5, 5,
                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)
  {
    ret = TX_THREAD_ERROR;
  }

  return ret;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u304C\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u3001\u305D\u306E\u30B3\u30FC\u30C9\u304CSTM32CubeMX\u306B\u3088\u3063\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, `app_azure_rtos.c`), `\u30D5\u30A1\u30A4\u30EB\u306B\u633F\u5165\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{10,23}",
    "{10,23}": true
  }), `  /**
  * @brief  Define the initial system.
  * @param  first_unused_memory : Pointer to the first unused memory
  * @retval None
  */
VOID tx_application_define(VOID *first_unused_memory)
{
  ...

  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)
  {
    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */

    /* USER CODE END TouchGFX_Byte_Pool_Error */
  }
  else
  {
    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */

    /* USER CODE END TouchGFX_Byte_Pool_Success */

    memory_ptr = (VOID *)&touchgfx_app_byte_pool;
    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)
    {
      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */
      while(1);
      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */
    }
    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */

    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */
  }

  ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tx_application_define()`), `\u95A2\u6570\u306F\u521D\u671F\u5316\u6642\u306BThreadX\u30AB\u30FC\u30CD\u30EB\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Init()`), `\u95A2\u6570\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tx_application_define()`), `\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TouchGFX\u30B9\u30EC\u30C3\u30C9\u306F\u5F8C\u3067\u3001ThreadX\u30AB\u30FC\u30CD\u30EB\u306E\u8D77\u52D5\u6642\u306B\u8D77\u52D5\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32CubeMX\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "ThreadX\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2"), "\u306E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Static Memory Pool Allocation"), "\u8A2D\u5B9A\u306E\u5B8C\u5168\u306A\u30B3\u30FC\u30C9\u306E\u307F\u3092\u751F\u6210\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "ThreadX\u3092", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Dynamic Memory Allocation"), "\u3067\u8A2D\u5B9A\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "X-CUBE-TOUCHGFX"), "\u62E1\u5F35\u30D1\u30C3\u30AF\u5185\u3067\u63D0\u4F9B\u3055\u308C\u308BSTM32H7B3I-DK/Applications/AnimatedImages\u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "other-cmsis-compliant-os"
  }), `\u305D\u306E\u4ED6\u306ECMSIS\u6E96\u62E0OS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u304C\u63D0\u4F9B\u53EF\u80FD\u306AOS\uFF08FreeRTOS\u304A\u3088\u3073ThreadX\uFF09\u4EE5\u5916\u306ECMSIS\u6E96\u62E0OS\u3092\u5FC5\u8981\u3068\u3059\u308B\u958B\u767A\u8005\u306F\u3001RTOS\u306E\u8A2D\u5B9A\u3068\u30BF\u30B9\u30AF\u5B9A\u7FA9\u3092\u624B\u52D5\u3067\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4E00\u822C\u7684\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u624B\u52D5\u30B9\u30C6\u30C3\u30D7\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RTOS\u3092\u8A2D\u5B9A\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u30BF\u30B9\u30AF\u3092\u5B9A\u7FA9\u3059\u308B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MX_TouchGFX_Process`), `\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u3092\u8D77\u52D5\u3059\u308B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process`), ` \u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u30BF\u30B9\u30AF\uFF65\u30CF\u30F3\u30C9\u30E9\u5185\u3067 TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void\xA0MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-features"
  }), `Additional features`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "external-data-reader"
  }), `External Data Reader`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RGB565\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001touchgfx\u306F\u3001\u3044\u308F\u3086\u308B\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u958B\u767A\u8005\u306F\u3001\u30E1\u30E2\u30EA\u5185\u3067\u8FFD\u52A0\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u3068\u306A\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5`), `\u3092\u884C\u3046\u306E\u3067\u306F\u306A\u304F\u3001\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u3055\u308C\u306A\u3044\u30B7\u30EA\u30A2\u30EBFlash\u304B\u3089\u76F4\u63A5\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u51FA\u305B\u307E\u3059\u3002 \u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0\u3092\u5B9F\u88C5\u3057\u3066\u3001\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u3055\u308C\u306A\u3044Flash\u30C1\u30C3\u30D7\u304B\u3089\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30A2\u30BB\u30C3\u30C8\u3092\u53D6\u5F97\u3059\u308B\u65B9\u6CD5\u306E\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/using-serial-flash"
  }), `\u30B7\u30EA\u30A2\u30EBFlash`), `\u306E\u8A18\u4E8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u8FFD\u52A0\u30D0\u30C3\u30D5\u30A1\u7528\u306B\u5341\u5206\u306A\u30E1\u30E2\u30EA\u3092\u5099\u3048\u3066\u3044\u306A\u3044\u4F4E\u30B3\u30B9\u30C8\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\uFF08STM32G0\u306A\u3069\uFF09\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 DMA2D\u304C\u6709\u52B9\u3067\u3042\u308B\u5834\u5408\u3001\u3053\u308C\u306F\u6709\u52B9\u5316\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u3057\u3066RGB565\u3092\u9078\u629E\u3059\u308B\u3068\u3001\uFF3BAdditional Features\uFF3D\u30B0\u30EB\u30FC\u30D7\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "\uFF3BAdditional Features\uFF3D\u306E\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u8005\u306F\u4EE5\u4E0B\u306E\u8A2D\u5B9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `External Data Reader`), `: \u3053\u306E\u6A5F\u80FD\u3092\u6709\u52B9\u5316\u307E\u305F\u306F\u7121\u52B9\u5316\u3057\u307E\u3059\u3002 \u6709\u52B9\u5316\u3059\u308B\u3068\u3001TouchGFX\u306F\u751F\u6210\u6E08\u307F\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4ECB\u3057\u3066\u30A2\u30BB\u30C3\u30C8\u306E\u30C7\u30FC\u30BF\u3092\u76F4\u63A5\u53D6\u5F97\u3057\u307E\u3059\u3002 \u7121\u52B9\u5316\u3057\u305F\u5834\u5408\u306F\u3001\u958B\u767A\u8005\u304C\u30E1\u30E2\u30EA\u5185\u306E\u30D0\u30C3\u30D5\u30A1\u306B\u753B\u50CF\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `External Data Reader: Line Buffer Size`), `: \u753B\u50CF\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30D6\u30EC\u30F3\u30C9\u3059\u308B\u305F\u3081\u306E2\u3064\u306E\u30D0\u30C3\u30D5\u30A1\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 ARGB8888\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30D5\u30EB\uFF65\u30B5\u30A4\u30BA\u306E\u753B\u50CF\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F\u3001\u4E00\u753B\u9762\u306E\u5E45 x 4\u30D0\u30A4\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `External Data Reader: Minimum DMA transfer size`), `: DMA\u8EE2\u9001\u3092\u958B\u59CB\u3059\u308B\u305F\u3081\u306E\u6700\u5C0F\u9650\u5FC5\u8981\u306A\u30D0\u30A4\u30C8\u6570\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u308C\u3088\u308A\u5C11\u306A\u3044\u30D0\u30A4\u30C8\u6570\u304C\u8981\u6C42\u3055\u308C\u305F\u5834\u5408\u3001DMA\u306F\u4F7F\u7528\u3055\u308C\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BExternal Data Reader\uFF3D\u3092\u6709\u52B9\u306B\u3057\u3066\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u3068\u3001\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u3055\u308C\u306A\u3044Flash\u304B\u3089\u30A2\u30BB\u30C3\u30C8\u3092\u76F4\u63A5\u53D6\u5F97\u3067\u304D\u308B\u3088\u3046\u306B\u4EE5\u4E0B\u306E\u8FFD\u52A0\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedDataReader.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/TouchGFXDataReader.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/TouchGFXDataReader.hpp`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u901A\u308A\u3001TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306B\u5BFE\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), ` \u306F\u8AAD\u51FA\u3057\u5C02\u7528\u3067\u3042\u308A\u3001\u30E6\u30FC\u30B6\u306E\u5909\u66F4\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u30AF\u30E9\u30B9\u5185\u3067\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u306E\u30BF\u30A4\u30D7\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader`), `.\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u5909\u66F4\u3055\u308C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DataReader`), `\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306BTouchGFX HAL\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXConfiguration.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedHAL.hpp`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0\u306E\uFF3BAdditional Feature\uFF3D\u306F\u3001DMA2D\u3068LTDC\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "8bit-ltdc-color-look-up-table"
  }), `8bitLTDC\u30AB\u30E9\u30FC\uFF65\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\uFF65\u30C6\u30FC\u30D6\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u8AAD\u307F\u51FA\u3059\u3088\u3046\u306BLTDC\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u304A\u308A\u3001TouchGFX\u304C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_b_g_r2222"
  }), `ABRG2222`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_r_g_b2222"
  }), `ARGB222`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___b_g_r_a2222"
  }), `BGRA2222`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"
  }), `RGBA2222`), `\u306E\u3044\u305A\u308C\u304B\u3067\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u5834\u5408\u3001TouchGFX Generator\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::initialize()`), `\u306E\u5B9F\u884C\u6642\u306BLTDC\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308BCLUT\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 LTDC\u304A\u3088\u3073CLUT\u306E\u4F7F\u7528\u65B9\u6CD5\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\uFF65\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "video-decoding"
  }), `Video Decoding`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BVideo Decoding\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u958B\u767A\u8005\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u307E\u305F\u306F\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u3044\u305A\u308C\u304B\u306E\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u6A5F\u80FD\u3092\u4F7F\u7528\u3057\u3066TouchGFX HAL\u3092\u5F37\u5316\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BVideo Decoding\uFF3D\u306FRGB565\uFF0816bpp\uFF09\u304A\u3088\u3073RGB888\uFF0824bpp\uFF09\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u3069\u3061\u3089\u3082\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\uFF3BVideo Decoding\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u3059\u3079\u3066\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-type"
  }), `Type`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\uFF3BVideo Decoding\uFF3D\u306E\uFF3BType\uFF3D\u306F\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u5FC5\u8981\u306A\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304CSTM32CubeMX\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\uFF3BSoftware\uFF3D\u3068\uFF3BHardware\uFF3D\u306E\u4E21\u65B9\u304C\u30B0\u30EC\u30FC\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002 \u30DE\u30A6\u30B9\u3092\u30B0\u30EC\u30FC\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5408\u308F\u305B\u3001\u5FC5\u8981\u306A\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.png",
    width: "800",
    mdxType: "Figure"
  }, "\uFF3BHardware\uFF3D\u306E\u30D3\u30C7\u30AA\uFF65\u30BF\u30A4\u30D7\u306E\u4F9D\u5B58\u95A2\u4FC2\u3092\u793A\u3059\u60C5\u5831\u30DC\u30C3\u30AF\u30B9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Software`), ` - STM32CubeMX\u306E\uFF3BMiddleware\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067LIBJPEG\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306F\u3001\uFF3BSotware\uFF3D\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C0\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u3064\u307E\u308A\u3001ToughGFX Generator\u306B\u3088\u3063\u3066\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2MJPEG\u30C7\u30B3\u30FC\u30C0\u304C\u751F\u6210\u3055\u308C\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Hardware`), ` - JPEG\u304C\uFF3BMultimedia\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u6709\u52B9\u306B\u306A\u3063\u3066\u304A\u308A\u3001CMSIS\u6E96\u62E0\u306ERTOS\u304CTouchGFX Generator\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\uFF3BHardware\uFF3D\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-options-4-18.png",
    width: "800",
    mdxType: "Figure"
  }, "Video Decoding\u30BF\u30A4\u30D7\u306E\u30AA\u30D7\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LIBJPEG\u8A2D\u5B9A\u3067\u306F\u3001\u52B9\u7387\u5316\u306E\u305F\u3081\u306B\u3001\uFF3BRGB scanline format\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067RGB\u9806\u5E8F\u3092\u300CRGB\u300D\u3067\u306F\u306A\u304F\u300CBGR\u300D\u306B\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\u5F53\u305F\u308A\u306E\u30D0\u30A4\u30C8\u6570\u306F3\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/libjpeg-rgb-ordering.png",
    width: "700",
    mdxType: "Figure"
  }, "LIBJPEG\u306E\u5FC5\u8981\u306A\uFF3BRGB scanline format\uFF3D\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001JPEG\u8A2D\u5B9A\u306ERGB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u540C\u3058\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5404\u7A2E\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\uFF65\u30B7\u30CA\u30EA\u30AA\u306E\u5177\u4F53\u7684\u306A\u30B3\u30FC\u30C9\uFF65\u30B5\u30F3\u30D7\u30EB\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\u30B7\u30CA\u30EA\u30AA"), "\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-number"
  }), `Concurrent videos`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BConcurrent Videos\uFF3D\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u4EFB\u610F\u306E\u6642\u70B9\u3067GUI\u306E\u540C\u3058\u753B\u9762\u3067\u540C\u6642\u306B\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u308B\u30D3\u30C7\u30AA\u306E\u6700\u5927\u91CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u753B\u9762\u4E0A\u30671\u3064\u306E\u30D3\u30C7\u30AA\u3092\u30C7\u30B3\u30FC\u30C9\u3059\u308B\u5834\u5408\u306B\u306E\u307F\u3001\uFF3BNumber of Videos\uFF3D\u30921\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5927\u30674\u3064\u306E\u30D3\u30C7\u30AA\u3092\u540C\u6642\u306B\u30C7\u30B3\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-strategy"
  }), `Strategy`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u65B9\u5F0F\u306B\u95A2\u3057\u3066\u3001\u958B\u767A\u8005\u306B\u306F\u6B21\u306E3\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Direct to Framebuffer`), ` - \u30D3\u30C7\u30AA\u306FUI\u30B9\u30EC\u30C3\u30C9\u3067\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u4ED6\u306E\u65B9\u5F0F\u3088\u308A\u3082\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002 \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\uFF3BDirect to Framebuffer\uFF3D\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Single Buffer`), ` - \u30D3\u30C7\u30AA\u306F1\u3064\u306E\u5C02\u7528\u30D0\u30C3\u30D5\u30A1\u3068\uFF11\u3064\u306E\u5C02\u7528\u30BF\u30B9\u30AF\u3067\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D0\u30C3\u30D5\u30A1\u306F\u5185\u90E8\u30E1\u30E2\u30EA\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Double Buffer`), ` - \u30D3\u30C7\u30AA\u306F2\u3064\u306E\u5C02\u7528\u30D0\u30C3\u30D5\u30A1\u3068\uFF11\u3064\u306E\u5C02\u7528\u30BF\u30B9\u30AF\u3067\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u591A\u304F\u306E\u30E1\u30E2\u30EA\u3092\u5FC5\u8981\u3068\u3057\u307E\u3059\u304C\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306F\u5411\u4E0A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30F3\u30B0\u30EB\u307E\u305F\u306F\u30C0\u30D6\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u65B9\u5F0F\u3092\u63A1\u7528\u3059\u308B\u5834\u5408\u3001CMSIS\u6E96\u62E0\u306EOS\u3092\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.png",
    width: "750",
    mdxType: "Figure"
  }, "CMSIS RTOS\u8981\u4EF6\u306B\u95A2\u3059\u308B\u60C5\u5831\u30DC\u30C3\u30AF\u30B9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30C0\u30D6\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u65B9\u5F0F\u3092\u63A1\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u30E1\u30E2\u30EA\u6D88\u8CBB\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306EFreeRTOS\u8A2D\u5B9A\u306E\u5177\u4F53\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\u30B7\u30CA\u30EA\u30AA"), "\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "decode-format"
  }), `Decode Format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u5834\u5408\u3001\u958B\u767A\u8005\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u95A2\u4FC2\u306A\u304F\u3001RGB\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 TouchGFX Generator\u306F\u3001\u3053\u308C\u3089\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u7570\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306B\u3001ChromART\u3067\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5909\u63DB\u3092\u5B9F\u884C\u3067\u304D\u308B\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\uFF65\u30D0\u30C3\u30D5\u30A1\u3092RGB565\u306B\u3059\u308B\u3068\u3001\u958B\u767A\u8005\u306F\u30E1\u30E2\u30EA\uFF65\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u3092\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-decode-format.png",
    width: "700",
    mdxType: "Figure"
  }, "\u30C7\u30B3\u30FC\u30C9\u5F62\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-buffer-size"
  }), `Buffer size`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30C3\u30D5\u30A1\u306E\u5E45\u3068\u9AD8\u3055\u306E\u8A2D\u5B9A\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u5927\u30D3\u30C7\u30AA\u5BF8\u6CD5\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u5E45\u306F32\u3067\u5272\u308A\u5207\u308C\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u3001480x272\u3001RGB888\u30D3\u30C7\u30AA\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u300C\u30B7\u30F3\u30B0\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u300D\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u65B9\u5F0F\u3092\u4F7F\u7528\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5411\u3051\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\u306B\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
#include <DedicatedBufferVideoController.hpp>
#include <SoftwareMJPEGDecoder.hpp>

uint32_t lineBuffer[480];

SoftwareMJPEGDecoder mjpegdecoder1((uint8_t*)lineBuffer);

uint32_t videoRGBBuffer[97920];
DedicatedBufferController<1, 480, 272, 480*3U, Bitmap::RGB888> videoController;

//Singleton Factory
VideoController& VideoController::getInstance()
{
    return videoController;
}

void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();
    registerEventListener(*(Application::getInstance()));
    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf) / (sizeof(uint32_t) * 2)), (void*)0);

    /*
     * Add software decoder to video controller
     */
    videoController.addDecoder(mjpegdecoder1, 0);

    videoController.setRGBBuffer((uint8_t*)videoRGBBuffer, sizeof(videoRGBBuffer));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-project"
  }), `\u751F\u6210\u3055\u308C\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Generate Code`), `\u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u5834\u5408\u3001TouchGFX\u306F\uFF08\u5C11\u306A\u304F\u3068\u3082\uFF09\u4EE5\u4E0B\u306EIDE\u3067\u52D5\u4F5C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u9069\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u69CB\u9020\u3092\u5F97\u308B\u305F\u3081\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u751F\u6210\u3067\u306F\u4EE5\u4E0B\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uFF3BApplication structure\uFF3D:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uFF3BAdvanced\uFF3D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uFF3BGenerate under root\uFF3D`), `\u7121\u52B9\u5316(STM32CubeIDE\u306E\u307F)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\uFF3BAdvanced\uFF3D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u69CB\u9020\u3092\u9078\u629E\u3057\u3001\uFF3BGenerate under root\uFF3D\u3092\u30AA\u30D5\u306B\u3059\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u306F\u4EE5\u4E0B\u306E\u69CB\u9020\u3092\u6301\u3064TouchGFX\u30D5\u30A9\u30EB\u30C0\u3082\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u30D5\u30A9\u30EB\u30C0\u306E\u69CB\u9020"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `App\u30D5\u30A9\u30EB\u30C0\u306B\u306F\u3001TouchGFX\u3092\u521D\u671F\u5316\u3057\u3001\u8D77\u52D5\u3059\u308B\u30B3\u30FC\u30C9\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `target\u30D5\u30A9\u30EB\u30C0\u306B\u306F\u3001\u8AAD\u51FA\u3057\u5C02\u7528\u306E\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9\uFF08generated/\u5185\uFF09\u3068\u3001\u5909\u66F4\u53EF\u80FD\u306A\u30E6\u30FC\u30B6\uFF65\u30AF\u30E9\u30B9(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGPIO.cpp`), ` \u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXHAL.cpp`), `\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.part\u30D5\u30A1\u30A4\u30EB\u306F\u3001TouchGFX\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3068\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u5B8C\u5099\u3057\u305F\u5B8C\u5168\u306ATouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u3001TouchGFX Designer\u3092\u4F7F\u7528\u3057\u3066\u958B\u304B\u308C\u307E\u3059\u3002part\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3084Designer\u304CTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u3068\u304D\u306B\u4F7F\u7528\u3059\u308B\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u5BF8\u6CD5\u306A\u3069\u306E\u95A2\u9023\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u60C5\u5831\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-project"
  }), `TouchGFX Designer\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306Ejson\u69CB\u9020\u306F\u3001STM32U599\u306B\u57FA\u3065\u304F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E \u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#generated-code-architecture"
  }), `\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.part`), `\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u4F8B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u4E0B\u306E\u4F8B\u306E\u751F\u6210\u5F8C\u30B3\u30DE\u30F3\u30C9\u306F\u3001\uFF3BSTM32CubeMX Project Manager\uFF3D\u30BF\u30D6\u3067\u30E6\u30FC\u30B6\u304C\u9078\u629E\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF08EWARM\u306A\u3069\uFF09\u3092\u3001TouchGFX\u3067\u5FC5\u8981\u306A\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001\u306A\u3089\u3073\u306BTouchGFX Designer\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\uFF08\u65B0\u3057\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u3084\u30A2\u30BB\u30C3\u30C8\u306A\u3069\uFF09\u3067\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `{
  "Application": {
    "Name": "STM32U599J-DK",
    "TouchGfxPath": "../Middlewares/ST/touchgfx",
    "AvailableColorDepths": [ 24 ],
    "AvailableLCDs":
    {
      "24": "LCDGPU2D"
    },
    "AvailableResolutions": [
      {
        "Width": 480,
        "Height": 480
      }
    ],
    "PostGenerateTargetCommand": "touchgfx update_project",
    "Family": "STM32U5",
    "SubFamily": "STM32U599/5A9",
    "Platform": "m33",
    "ProjectFile": "../STM32U599J-DK.ioc",
    "OptionalComponentsRoot": "../Middlewares/ST/touchgfx_components",
    "OptionalComponents": [
      "GPU2D"
    ]
  },
  "Version": "4.19.0"
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067.part\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3068\u3001\u958B\u767A\u8005\u306B\u306F\u3001\u5177\u4F53\u7684\u306AUI\u3092\u30ED\u30FC\u30C9\u3059\u308B\u306E\u304B\u3001\u7A7A\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304B\u3089\u958B\u59CB\u3059\u308B\u306E\u304B\u3092\u9078\u629E\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "UI\u306E\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\uFF3BGenerate Code\uFF3D\u3092\u62BC\u3059\u3068\u3001TouchGFX\u30D5\u30A9\u30EB\u30C0\u306E\u69CB\u9020\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306FTouchGFX\u30D5\u30A9\u30EB\u30C0\u69CB\u9020\u306E\u5177\u4F53\u4F8B\u3092\u793A\u3057\u3066\u304A\u308A\u3001\u751F\u6210\u5F8C\u306E\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\uFF3BGenerate Code\uFF3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u30D5\u30A9\u30EB\u30C0\u306E\u69CB\u9020"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001STM32CubeMX\u306E.ioc\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u9078\u629E\u3055\u308C\u305FIDE\u3092\u691C\u51FA\u3057\uFF08STM32CubeIDE\u3001EWARM\u3001MDK-ARM\u306E\u5834\u5408\uFF09\u3001\u753B\u9762\u306E\u5B9A\u7FA9\u3084\u753B\u50CF\u304A\u3088\u3073\u30D5\u30A9\u30F3\u30C8\uFF65\u30A2\u30BB\u30C3\u30C8\u306A\u3069\u306E\u65B0\u3057\u304F\u751F\u6210\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6642\u70B9\u3067\u958B\u767A\u8005\u306F\u3001STM32CubeMX\u3001TouchGFX Designer\u3001\u304A\u3088\u3073\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3 / IDE\u3067\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u4EA4\u4E92\u306B\u4F5C\u696D\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u3067IDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30C9\u30E9\u30A4\u30D0\u3092\u66F4\u65B0\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u306FDesigner\u3067\u5373\u5EA7\u306B\u9078\u629E\u3057\u305FUI\u95A2\u9023\u306E\u5909\u66F4\u3067\u3001TouchGFX\u306E.part\u30D5\u30A1\u30A4\u30EB\u3092\u66F4\u65B0\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u306FTouchGFX\u304C\u7279\u5B9A\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u52D5\u4F5C\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306ATouchGFX Generator\u306E\u8A2D\u5B9A\u306B\u57FA\u3065\u3044\u3066\u3001HAL\u30B3\u30FC\u30C9\uFF08TouchGFX/target/generated/\uFF09\u3092\u751F\u6210\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u306F\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u66F4\u65B0\u3059\u308B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30C7\u30E5\u30A2\u30EB\u30B3\u30A2\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001TouchGFX\u304C\u7279\u5B9A\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u3068\u3001\u901A\u5E38\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u305D\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5C02\u7528\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\uFF08\u300CCM4/TouchGFX\u300D\u307E\u305F\u306F\u300CCM7/TouchGFX\u300D\u306A\u3069\uFF09\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-generated-behavior"
  }), `\u751F\u6210\u3055\u308C\u305F\u52D5\u4F5C\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL\u306F\u30AF\u30E9\u30B9\u968E\u5C64\u3092\u6301\u3064\u306E\u3067\u3001STM32CubeMX\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305FHAL\u306E\u8A2D\u5B9A\u3084\u52D5\u4F5C\u3092\u30E6\u30FC\u30B6\u304C\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3067\u304D\u308B\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001\u958B\u767A\u8005\u304C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `initialize`), ` \u95A2\u6570\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3001TouchGFX\u306E\u8FFD\u52A0\u8A2D\u5B9A\u3084\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL`), ` \u306E\u65E2\u5B58\u306E\u8A2D\u5B9A\u306E\u5909\u66F4\u304C\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    // Calling parent implementation of initialize().
    //
    // To overwrite the generated implementation, omit call to parent function
    // and implemented needed functionality here.
    // Please note, HAL::initialize() must be called to initialize the framework.

    TouchGFXGeneratedHAL::initialize();

    //Overriding configurations
    hal.lockDMAToFrontPorch(true);
    hal.setFingerSize(4);
    hal....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "upgrading-projects"
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F.ioc\u30D5\u30A1\u30A4\u30EB\uFF08STM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF09\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 TouchGFX Generator\u306E\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u308B\u3068\u3001\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u304C\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u3068\u4E92\u63DB\u6027\u3092\u6301\u305F\u306A\u3044\u305F\u3081\u306B\u79FB\u884C\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u306FX-CUBE\u30D0\u30FC\u30B8\u30E7\u30F3\u9593\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u306A\u3044\u305F\u3081\u3001\uFF3B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Generate Code`), `\uFF3D\u304C\u62BC\u3055\u308C\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.touchgfx`), `\u30D5\u30A1\u30A4\u30EB\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PostGenerateTargetCommand`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066TouchGFX Designer\u3067\u81EA\u52D5\u7684\u306B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, ".touchgfx"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), ` \u30D5\u30A1\u30A4\u30EB\u304C\u8AAD\u307F\u51FA\u3055\u308C\u3001\u73FE\u5728\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306EX-CUBE-TOUCHGFX\u306B\u5408\u3046\u3088\u3046\u306B\u30D1\u30E9\u30E1\u30FC\u30BF\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002 \u6B21\u306E\u4F8B\u306F\u3001X-CUBE-TOUCHGFX 4.13.0\u3067\u4F5C\u6210\u3055\u308C\u305F.ioc\u30D5\u30A1\u30A4\u30EB\u3067\u3001\u30B9\u30AF\u30EA\u30D7\u30C8\uFF08X-CUBE-TOUCHGFX 4.14.0\uFF09\u3092\u624B\u52D5\u3067\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746 DISCO\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u305F4.13.0\u304B\u30894.14.0\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc
  TouchGFX Generator 4.13.0 found
  Creating backup of ../STM32F746G_DISCO.ioc as ../backup_STM32F746G_DISCO.ioc
  Performing upgrade 4.13.0 -> 4.14.0 ... OK
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u66F4\u65B0\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092STM32CubeMX\u3067\u958B\u304F\u3068\u3001.ioc\u30D5\u30A1\u30A4\u30EB\u3067\u793A\u3055\u308C\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u306EX-CUBE-TOUCHGFX\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3088\u3046\u306B\u6C42\u3081\u3089\u308C\u307E\u3059\uFF08\u307E\u3060\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u3044\u306A\u3044\u5834\u5408\uFF09\u3002 \uFF3BDownload now\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001X-Cube-TouchGFX-4.14.0\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3068\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u884C\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u8FFD\u52A0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408:"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\uFF65\u30D7\u30ED\u30BB\u30B9\u306E\u5B9F\u884C\u6642\u3001TouchGFX Generator\u306E\u8A2D\u5B9A\u306F\u3059\u3079\u3066\u4FDD\u6301\u3055\u308C\u3001.ioc\u30D5\u30A1\u30A4\u30EB\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306F\u5148\u982D\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `backup_`), `\u304C\u4ED8\u3044\u305F\u72B6\u614B\u3067\u3001\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u5834\u6240\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Generator\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u65B0\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001STM32CubeMX\u3067\uFF3BGenerate Code\uFF3D\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u65E2\u5B58\u306ETouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7528\u306BSTM32CubeMX\u3092\u4ECB\u3057\u3066X-CUBE-TOUCHGFX\u3092\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3059\u308B\u3068\u304D\u306B\u3001\u305D\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\uFF65\u30D7\u30ED\u30BB\u30B9\u304CTouchGFX Designer\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u306A\u3044\u5834\u5408\u3001TouchGFX Generator\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u5225\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u9069\u7528\u3055\u308C\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u3042\u308B\u305F\u3081\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);