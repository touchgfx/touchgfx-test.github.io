"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7356],{

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

/***/ 6771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Video extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
      controls: true
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
      src: this.props.url,
      type: "video/mp4"
    }))));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Video);


/***/ }),

/***/ 9304:
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
/* harmony import */ var _site_components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6771);
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
  id: "lowering-memory-usage-with-partial-framebuffer",
  title: "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u3088\u308B\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u8EFD\u6E1B"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "id": "development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "title": "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u3088\u308B\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u8EFD\u6E1B",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/lowering-memory-usage-with-partial-framebuffer.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "permalink": "/4.20/ja/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "lowering-memory-usage-with-partial-framebuffer",
    "title": "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u3088\u308B\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u8EFD\u6E1B"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX on NeoChrom",
    "permalink": "/4.20/ja/docs/development/scenarios/touchgfx-on-gpu2d"
  },
  "next": {
    "title": "\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528",
    "permalink": "/4.20/ja/docs/development/scenarios/using-non-memory-mapped-flash"
  }
};
const assets = {};



const toc = [{
  value: "\u30D5\u30EB\u30B5\u30A4\u30BA\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA",
  id: "full-size-frame-buffer-memory",
  level: 2
}, {
  value: "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA",
  id: "partial-frame-buffer-memory",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0",
  id: "display-tearing",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u66F4\u65B0\u4F8B",
  id: "display-update-example",
  level: 2
}, {
  value: "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A2D\u5B9A",
  id: "configuring-partial-frame-buffers",
  level: 2
}, {
  value: "\u753B\u9762\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001",
  id: "transferring-frame-buffers-to-the-screen",
  level: 2
}, {
  value: "X-NUCLEO-GFX01M1 SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001",
  id: "transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display",
  level: 3
}, {
  value: "DSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001",
  id: "transferring-frame-buffers-on-dsi-display",
  level: 3
}, {
  value: "SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001",
  id: "transferring-frame-buffers-on-spi-display",
  level: 3
}, {
  value: "\u307E\u3068\u3081",
  id: "conclusion",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u6642\u8A08\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F8B\u306B\u53D6\u308A\u4E0A\u3052\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u8A2D\u5B9A\u304A\u3088\u3073\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\uFF08\u4E00\u90E8\u306E\u6027\u80FD\u3092\u72A0\u7272\u306B\u3057\u306A\u304C\u3089\u3082\uFF09\u30E1\u30E2\u30EA\u8981\u4EF6\u3092\u8EFD\u6E1B\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32L4R9Discovery\u8A55\u4FA1\u30AD\u30C3\u30C8\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u95A2\u3059\u308B\u30D3\u30C7\u30AA\u3092\u4EE5\u4E0B\u304B\u3089\u3054\u89A7\u306B\u306A\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Partial%20framebuffer/Partial%20framebuffer.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "full-size-frame-buffer-memory"
  }), `\u30D5\u30EB\u30B5\u30A4\u30BA\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u4FDD\u6301\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u30E1\u30E2\u30EA\u3092\u5099\u3048\u305F\u5927\u898F\u6A21\u306A\u30E1\u30E2\u30EA\uFF65\u30A2\u30EC\u30A4\u306B\u306A\u308A\u307E\u3059\u3002 \u89E3\u50CF\u5EA6480x272\u306E24bit\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30D5\u30EB\u30B5\u30A4\u30BA\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F480 x 272 x 3\u30D0\u30A4\u30C8 = 391,680\u30D0\u30A4\u30C8\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u6301\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u306F\u30012\u3064\uFF08\u30C0\u30D6\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u30EA\u30F3\u30B0\uFF09\u307E\u305F\u306F3\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306E\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u5BB9\u91CF\u306E\u5408\u8A08\u306F\u3001783,360\u30D0\u30A4\u30C8\u304A\u3088\u30731,175,040\u30D0\u30A4\u30C8\u306B\u306A\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001UI\u306E\u3069\u306E\u90E8\u5206\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306B\u3082\u30D4\u30AF\u30BB\u30EB\u306E\u30C7\u30FC\u30BF\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u63CF\u753B\u51E6\u7406\u304C\u5B8C\u4E86\u3057\u305F\u5F8C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002 \u901A\u5E38\u3001UI\u306E\u4E00\u90E8\u306E\u307F\u304C\u66F4\u65B0\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5168\u4F53\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002 \u4E00\u822C\u7684\u306B\u3001\u591A\u304F\u306E\u5C0F\u3055\u3044\u30D6\u30ED\u30C3\u30AF\u306B\u5206\u3051\u3066\u66F4\u65B0\u3055\u308C\u305F\u5F8C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u66F4\u65B01, \u66F4\u65B02, \u66F4\u65B03, ..., \u66F4\u65B0N\u306E\u3088\u3046\u306B\u66F4\u65B0\u3057\u305F\u5F8C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u8EE2\u9001`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306E\u30B1\u30FC\u30B9\u3067\u306F\u3001\u7279\u306B\u5916\u90E8RAM\u3092\u4F7F\u7528\u3057\u306A\u3044\u4F4E\u30B3\u30B9\u30C8\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5FC5\u8981\u3068\u3059\u308B\u30E1\u30E2\u30EA\u5BB9\u91CF\u304C\u3001\u5185\u90E8RAM\u306B\u53CE\u307E\u308B\u3088\u3046\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u3092\u5341\u5206\u5C0F\u3055\u304F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5F79\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "partial-frame-buffer-memory"
  }), `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30EB\u30B5\u30A4\u30BA\u3088\u308A\u3082\u5C0F\u3055\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u4E0A\u3067\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u53EF\u80FD\u3067\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u6570\u3068\u30B5\u30A4\u30BA\u306F\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\u3002 \u3053\u306E\u624B\u6CD5\u306B\u3088\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30E1\u30E2\u30EA\u8981\u4EF6\u3092\u304B\u306A\u308A\u306E\u91CF\u524A\u6E1B\u3067\u304D\u307E\u3059\u304C\u3001\u3044\u304F\u3064\u304B\u5236\u9650\u4E8B\u9805\u3082\u767A\u751F\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u30E1\u30E2\u30EA\u304C\u5185\u8535\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u901A\u5E38\u306FDSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3001\u30D1\u30E9\u30EC\u30EB\uFF65\u30D0\u30B9\u63A5\u7D9A\uFF08DBI\u30BF\u30A4\u30D7A/B\u30018080/6800\uFF09\u307E\u305F\u306FSPI\u30D0\u30B9\u63A5\u7D9A\u3092\u5099\u3048\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8907\u96D1\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u306E\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u8868\u3059\u306E\u3068\u306F\u7570\u306A\u308A\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u901A\u5E38\u306F\u5C0F\u3055\u306A\u90E8\u5206\u3092\u5BFE\u8C61\u3068\u3057\u307E\u3059\u3002 \u3053\u306E\u8A18\u4E8B\u3067\u4F7F\u7528\u3059\u308B\u6642\u8A08\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F8B\u3067\u306F\u3001\u305D\u308C\u305E\u308C11,700\u30D0\u30A4\u30C8\u306E3\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u7D50\u679C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u91CF\u306F35,100\u30D0\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067UI\u306E\u4E00\u90E8\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3001\u5FC5\u305ATouchGFX\u306F\u8A2D\u5B9A\u6E08\u307F\u306E\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u3044\u305A\u308C\u304B\u3092\u9078\u629E\u3057\u3001\u305D\u306E\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u3067\u63CF\u753B\u51E6\u7406\u3092\u5B8C\u4E86\u3055\u305B\u3001\u305D\u306E\u90E8\u5206\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3057\u307E\u3059\u3002 \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u5FC5\u8981\u304C\u3042\u308BUI\u306E\u3059\u3079\u3066\u306E\u30A8\u30EA\u30A2\u306B\u5BFE\u3057\u3066\u3053\u306E\u64CD\u4F5C\u304C\u7E70\u308A\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u63CF\u753B\u30C7\u30FC\u30BF\u306E\u66F4\u65B0\u3068\u8EE2\u9001\u306E\u5F0F\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u66F4\u65B01, \u8EE2\u90011, \u66F4\u65B02, \u8EE2\u90012, \u66F4\u65B03, \u8EE2\u90013, ..., \u66F4\u65B0N, \u8EE2\u9001N`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u30011\u3064\u306E\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u3092\u3001\u6B21\u306E\u30D0\u30C3\u30D5\u30A1\u306E\u66F4\u65B0\u4E2D\u306B\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-tearing"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EB\u30B5\u30A4\u30BA\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4F7F\u7528\u3068\u306F\u5BFE\u7167\u7684\u306B\u3001TouchGFX\u3067\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B\u306F\u3001UI\u306E\u5404\u90E8\u5206\u304C\u66F4\u65B0\u5F8C\u3059\u3050\u306B\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u753B\u9762\u4E0A\u306B\u306F\u3001\u53D7\u4FE1\u3057\u305F\u66F4\u65B0\u304C\u6700\u5927\u3067\u308216ms\u5F8C\uFF0860fps\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5834\u5408\uFF09\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u5B9A\u671F\u7684\u306B\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u3059\u3079\u3066\u306E\u66F4\u65B0\u304C\u8EE2\u9001\u3055\u308C\u308B\u524D\u306B\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u6700\u521D\u306E\u66F4\u65B0\u304C\u8868\u793A\u3055\u308C\u3001\u30E6\u30FC\u30B6\u304C\u6C17\u3065\u304F\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u51E6\u7406\u3068\u8EE2\u9001\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u5168\u4F53\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308B\uFF08> 16ms\uFF09\u5834\u5408\u3001\u30E6\u30FC\u30B6\u306B\u306F\u524D\u306E\u30D5\u30EC\u30FC\u30E0\u3068\u65B0\u3057\u3044\u66F4\u65B0\u306E\u4E00\u90E8\u304C\u6DF7\u5728\u3057\u3066\u8868\u793A\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u9AD8\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u3068\u547C\u3070\u308C\u308B\u73FE\u8C61\u3067\u3001\u671B\u307E\u3057\u3044\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306B\u6642\u9593\u306E\u304B\u304B\u308B\u8907\u96D1\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u306F\u9069\u3055\u306A\u3044\u3068\u3044\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-update-example"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u66F4\u65B0\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u8A2D\u5B9A\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u524D\u306B\u3001\u79D2\u3092\u8868\u3059\u5186\u5F27\u304C\u79FB\u52D5\u3059\u308B\u30C7\u30B8\u30BF\u30EB\u6642\u8A08\u306E\u5177\u4F53\u4F8B\u3092\u898B\u3066\u307F\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002 \u3053\u306E\u7DD1\u8272\u306E\u5186\u5F27\u306F\u6BCE\u79D26\u5EA6\u305A\u3064\u79FB\u52D5\u3057\u3066\u304A\u308A\u30011\u5206\u30671\u5468\u3057\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001UI\u306F\u6B21\u306E4\u3064\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304B\u3089\u69CB\u7BC9\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/line"
  }), `\u76F4\u7DDA`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/circle"
  }), `\u5186`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/miscellaneous/digital-clock"
  }), `\u30C7\u30B8\u30BF\u30EB\u6642\u8A08`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/box"
  }), `\u56DB\u89D2`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/touchgfx-designer-with-widgets-4.17.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30B8\u30BF\u30EB\u6642\u8A08\u3068\u5186\u5F27\u3092\u66F4\u65B0\u3059\u308B\u30B3\u30FC\u30C9\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{21-25}",
    "{21-25}": true
  }), `void MainView::handleTickEvent()
{
  ticks++;
  if (ticks == 10)
  {
      ticks = 0;
      secs += 1;
      if (secs == 60)  //increment minutes
      {
        secs = 0;
        min += 1;
        if (min == 60) //increment hours
        {
          min = 0;
          hour += 1;
          if (hour == 24)
          {
            hour = 0;
          }
        }
        //Only update digital clock when minutes or hours change
        digitalClock.setTime24Hour(hour, min, secs);
      }
    //Always update seconds
    circleSeconds.updateArc(secs*6 - 20, secs*6);
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u753B\u50CF\u306F\u3001\u5186\u5F27\u304C\u4E00\u756A\u4E0A\u306B\u5230\u9054\u3057\u3001\u30C7\u30B8\u30BF\u30EB\u6642\u8A08\u304C\u66F4\u65B0\u3055\u308C\u305F\u6642\u70B9\u3067\u3001\u6700\u521D\u306E\u6570\u79D2\u9593\u306B\u66F4\u65B0\u3055\u308C\u308B\u9818\u57DF\u3092\u793A\u3057\u3066\u3044\u307E\u3059\uFF08\u7070\u8272\u306E\u9577\u65B9\u5F62\uFF09\u3002 \u6700\u521D\u306E2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u306F\u3001\u79D2\u306E\u307F\u304C\u5909\u5316\u3057\u3066\u3044\u307E\u3059\uFF0858\u79D2\u306859\u79D2\uFF09\u3002 3\u3064\u76EE\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u306F60\u79D2\u306B\u5230\u9054\u3057\u3001\u6642\u9593\u3068\u5206\u306E\u30C6\u30AD\u30B9\u30C8\u304C\u66F4\u65B0\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-1.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-2.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-3.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-4.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E3\u3064\u76EE\u306E\u753B\u50CF\u3067\u66F4\u65B0\u3055\u308C\u305F\u9577\u65B9\u5F62\u306F\u3001154x60\u30D4\u30AF\u30BB\u30EB\u300120x12\u30D4\u30AF\u30BB\u30EB\u300133x8\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002 \u6A19\u6E96\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u3053\u306E3\u3064\u306E\u9577\u65B9\u5F62\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5168\u4F53\u306B\u63CF\u753B\uFF08\u4EE5\u524D\u306E\u30D4\u30AF\u30BB\u30EB\u306B\u4E0A\u66F8\u304D\uFF09\u3055\u308C\u3001\u5F8C\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u3053\u306E3\u3064\u306E\u9577\u65B9\u5F62\u306F\u305D\u308C\u305E\u308C\u72EC\u81EA\u306E\u5C0F\u3055\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u63CF\u753B\u3055\u308C\u3001\u66F4\u65B0\u3055\u308C\u308B\u3068\u5373\u5EA7\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configuring-partial-frame-buffers"
  }), `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u624B\u9806\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u3092\u542B\u3080\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30A2\u30ED\u30B1\u30FC\u30BF\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u305D\u306E\u30A2\u30ED\u30B1\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306ETouchGFX HAL\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30C6\u30C3\u30D71\u30682\u306F\u3001TouchGFX Generator\u306B\u3088\u3063\u3066STM32CubeMX\u3092\u4ECB\u3057\u3066\u81EA\u52D5\u751F\u6210\u3055\u308C\u307E\u3059\u304C\u3001\u30B9\u30C6\u30C3\u30D73\u306F\u30D4\u30AF\u30BB\u30EB\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u72EC\u81EA\u306E\u30C9\u30E9\u30A4\u30D0\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/partial-strategy.png",
    width: "450",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306B\u793A\u3059\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `// Block Allocator for Partial Framebuffer strategy
static ManyBlockAllocator<1920, /* block size */
                          3,    /* number of blocks */
                          2     /* bytes per pixel */
                          > blockAllocator;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30A2\u30ED\u30B1\u30FC\u30BF\u306F\u3001\u305D\u308C\u305E\u308C1,920\u30D0\u30A4\u30C8\u306E3\u3064\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002 TouchGFX HAL\u306F\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6226\u7565\u304A\u3088\u3073\u30D6\u30ED\u30C3\u30AF\uFF65\u30A2\u30ED\u30B1\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u3001\u81EA\u52D5\u7684\u306B\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-10}",
    "{8-10}": true
  }), `void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    registerEventListener(*(Application::getInstance()));
    enableLCDControllerInterrupt();
    enableInterrupts();
    // Partial framebuffer strategy
    setFrameBufferAllocator(&blockAllocator);
    setFrameRefreshStrategy(HAL::REFRESH_STRATEGY_PARTIAL_FRAMEBUFFER);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A2D\u5B9A\u3067\u306F\u3001TouchGFX\u304C\u5C0F\u3055\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5272\u308A\u5F53\u3066\u3001\u305D\u3053\u306BUI\u3092\u63CF\u753B\u3057\u307E\u3059\u3002 \u6700\u5F8C\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u305D\u306E\u5C0F\u3055\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u306F\u3001\u5C0F\u3055\u3044\u5186\u306E\u66F4\u65B0\u3092\u63CF\u753B\u3059\u308B\uFF08\u4E0A\u306E2\u3064\u76EE\u306E\u753B\u50CF\uFF09\u305F\u3081\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA\u3092\u78BA\u8A8D\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9577\u65B9\u5F62`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `x`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `y`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5E45`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9AD8\u3055`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D4\u30AF\u30BB\u30EB`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9577\u65B9\u5F621`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `112`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `56`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `22`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `14`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `308\u30D4\u30AF\u30BB\u30EB = 924\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9577\u65B9\u5F622`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `153`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `29`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `319\u30D4\u30AF\u30BB\u30EB = 957\u30D0\u30A4\u30C8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3069\u3061\u3089\u306E\u9577\u65B9\u5F62\u3082\u975E\u5E38\u306B\u5C0F\u3055\u3044\u306E\u3067\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30A2\u30ED\u30B1\u30FC\u30BF\u306B\u3088\u3063\u3066\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u306B\u53CE\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E3\u3064\u76EE\u306E\u753B\u50CF\u3067\u306F\u30013\u3064\u306E\u9577\u65B9\u5F62\u304C\u66F4\u65B0\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u5186\u3078\u306E\u66F4\u65B0\u306F\u5C11\u306A\u304F\u3001\u5927\u304D\u306A\u9577\u65B9\u5F62\u304C\u30C6\u30AD\u30B9\u30C8\u3092\u8986\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9577\u65B9\u5F62`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `x`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `y`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5E45`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9AD8\u3055`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D4\u30AF\u30BB\u30EB`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9577\u65B9\u5F621`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `126`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `51`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `20`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `12`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `240\u30D4\u30AF\u30BB\u30EB = 720\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9577\u65B9\u5F622`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `264\u30D4\u30AF\u30BB\u30EB = 792\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9577\u65B9\u5F623`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `118`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `154`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `60`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `9,240\u30D4\u30AF\u30BB\u30EB = 27,720\u30D0\u30A4\u30C8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7E70\u308A\u8FD4\u3057\u307E\u3059\u304C\u3001\u9577\u65B9\u5F621\u30682\u306F\u975E\u5E38\u306B\u5C0F\u3055\u3044\u306E\u3067\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30A2\u30ED\u30B1\u30FC\u30BF\u306B\u3088\u3063\u3066\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u306B\u53CE\u307E\u308A\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A13\u306F\u5927\u304D\u3059\u304E\u307E\u3059\u3002 \u3053\u306E\u9577\u65B9\u5F623\u306F\u5927\u304D\u3059\u304E\u308B\u306E\u3067\u3001\u305D\u308C\u305E\u308C\u304C\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF0811,700\u30D0\u30A4\u30C8\uFF09\u306B\u53CE\u307E\u308B\u8907\u6570\u306E\u9577\u65B9\u5F62\u306B\u5206\u5272\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u30013\u3064\u306E\u9577\u65B9\u5F62\u3092\u66F4\u65B0\u3057\u307E\u3059\u304C\u3001\u30A2\u30ED\u30B1\u30FC\u30BF\u306B\u306F2\u3064\u306E\u30D6\u30ED\u30C3\u30AF\u3057\u304B\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u3046\u3057\u305F\u72B6\u6CC1\u3067\u306F\u3001TouchGFX\u306F\u6700\u521D\u306E\u30D6\u30ED\u30C3\u30AF\u304C\u8EE2\u9001\u3055\u308C\u308B\u306E\u3092\u5F85\u3063\u3066\u304B\u3089\u3001\u30D6\u30ED\u30C3\u30AF\u3092\u518D\u5229\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transferring-frame-buffers-to-the-screen"
  }), `\u753B\u9762\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u9577\u65B9\u5F62\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306B\u3001FrameBufferAllocator\u304B\u3089\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002 \u30D0\u30C3\u30D5\u30A1\u3078\u306E\u63CF\u753B\u306E\u5F8C\u3001TouchGFX\u306F\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void HAL::flushFrameBuffer(const Rect& rect);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u95A2\u6570\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u753B\u9762\u306B\u8EE2\u9001\u3059\u308B\u305F\u3081\u306B\u3001HAL\u30B5\u30D6\u30AF\u30E9\u30B9\u5185\u3067\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6A5F\u80FD\u3055\u305B\u308B\u305F\u3081\u306B\u3001\u3053\u306E\u7279\u6B8A\u306A\u51E6\u7406\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u642D\u8F09\u306ESTM32G071\u8A55\u4FA1\u30AD\u30C3\u30C8\u3068\u3001DSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u642D\u8F09\u306ESTM32L4R9Discovery\u8A55\u4FA1\u30AD\u30C3\u30C8\u5411\u3051\u306B\u3001\u3053\u306E\u8A2D\u5B9A\u3092\u884C\u3046\u65B9\u6CD5\u306E\u5B9F\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display"
  }), `X-NUCLEO-GFX01M1 SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001X-Nucleo-GFX01M1\u62E1\u5F35\u30DC\u30FC\u30C9\u4ED8\u304DSTM32G071 Nucleo\u30DC\u30FC\u30C9\u5411\u3051\u306E\u3001TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u62E1\u5F35\u30DC\u30FC\u30C9MB1642B\u306B\u306F\u30012.2\u30A4\u30F3\u30C1\u306E240x320 SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306864Mbit SPI NOR Flash\u304C\u5B9F\u88C5\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",
    width: "400px",
    mdxType: "Figure"
  }, "X-Nucleo-GFX01M1\u62E1\u5F35\u30DC\u30FC\u30C9\u4ED8\u304D\u306ENucleo-G071RB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3067\u306F\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D6\u30ED\u30C3\u30AF\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306B\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306EC++\u30AF\u30E9\u30B9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308ATouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u30B3\u30FC\u30C9\u304C\u5C11\u3057\u3060\u3051\u77ED\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306FTouchGFX Generator\u3092\u4F7F\u7528\u3057\u3066\u69CB\u7BC9\u3057\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-hal-development/touchgfx-generator#display"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u3082\u91CD\u8981\u306A\u90E8\u5206\u306F\u3001\u6B21\u306B\u793A\u3059flushFrameBuffer\u95A2\u6570\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    // Try transmitting a block
    PartialFrameBufferManager::tryTransmitBlock();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001PartialFrameBufferManager\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\uFF65\u30AF\u30E9\u30B9\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u30D6\u30ED\u30C3\u30AF\u3092\u8EE2\u9001\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFXGeneratedHAL::endFrame\u95A2\u6570\u3067\u306F\u3001PartialFrameBufferManager\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u6B8B\u308A\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D6\u30ED\u30C3\u30AF\u3082\u8EE2\u9001\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void TouchGFXGeneratedHAL::endFrame()
{
    // We must guard the next frame until we're done transferring all blocks over our display interface
    // through either a semaphore if user is running an OS or a simple variable if not
    PartialFrameBufferManager::transmitRemainingBlocks();

    HAL::endFrame();
    touchgfx::OSWrappers::signalRenderingDone();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PartialFrameBufferManager\u306F\u30013\u3064\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u3092\u64CD\u4F5C\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306FTouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-4,12-12,20-20}",
    "{4-4,12-12,20-20}": true
  }), `/**
 * Check if a Frame Buffer Block is beeing transmitted.
 */
__weak int transmitActive()
{
    return touchgfxDisplayDriverTransmitActive();
}

/**
 * Check if a Frame Buffer Block ending at bottom may be sent.
 */
__weak int shouldTransferBlock(uint16_t bottom)
{
    return touchgfxDisplayDriverShouldTransferBlock(bottom);
}

/**
 * Transmit a Frame Buffer Block.
 */
__weak void transmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)
{
    touchgfxDisplayDriverTransmitBlock(pixels, x, y, w, h);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30B3\u30FC\u30C9\u3067\u306F\u3001MB1642B\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u306EC\u95A2\u6570\u306B\u547C\u3073\u51FA\u3057\u3092\u9001\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int touchgfxDisplayDriverTransmitActive(void)
{
  return IsTransmittingBlock_;
}

void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)
{
  Display_Bitmap((uint16_t*)pixels, x, y, w, h);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u306E\u5B9F\u88C5\u306F\u3001\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3088\u3063\u3066\u5927\u304D\u304F\u7570\u306A\u308A\u307E\u3059\u3002 MB1642B\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u306F\u3001SPI\u30C1\u30C3\u30D7\u306E\u9078\u629E\u3068\u30C7\u30FC\u30BF / \u30B3\u30DE\u30F3\u30C9\uFF65\u30E2\u30FC\u30C9\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3059\u308B\u305F\u3081\u306B\u30012\u3064\u306EGPIO\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8EE2\u9001\u72B6\u614B\u306F\u3001volatile uint8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `t\u306E\u5909\u6570IsTransmittingBlock`), `\u3092\u4F7F\u7528\u3057\u3066\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u3053\u306E\u5909\u6570\u306F\u3001\u8EE2\u9001\u958B\u59CB\u6642\u306B1\u306B\u8A2D\u5B9A\u3055\u308C\u3001DMA\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3067\u306F0\uFF08\u30BC\u30ED\uFF09\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void MB1642BDisplayDriver_DMACallback(void)
{
  /* Transfer Complete Interrupt management ***********************************/
  if ((0U != (DMA1->ISR & (DMA_FLAG_TC1))) && (0U != (hdma_spi1_tx.Instance->CCR & DMA_IT_TC)))
  {
    /* Disable the transfer complete and error interrupt */
    __HAL_DMA_DISABLE_IT(&hdma_spi1_tx, DMA_IT_TE | DMA_IT_TC);

    /* Clear the transfer complete flag */
    __HAL_DMA_CLEAR_FLAG(&hdma_spi1_tx, DMA_FLAG_TC1);

    IsTransmittingBlock_ = 0;

    ...

    // Signal Transfer Complete to TouchGFX
    DisplayDriver_TransferCompleteCallback();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306B\u793A\u3059\u3088\u3046\u306B\u3001DMA\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3067\u306F\u8EE2\u9001\u5B8C\u4E86\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3082\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306F\u3001\u751F\u6210\u3055\u308C\u305FHAL\u3067\u5B9F\u88C5\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C"
void DisplayDriver_TransferCompleteCallback()
{
    // After completed transmission start new transfer if blocks are ready.
    PartialFrameBufferManager::tryTransmitBlockFromIRQ();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306EPartialFrameBufferManager\u3078\u306E\u547C\u3073\u51FA\u3057\u306B\u3088\u308A\u3001\u53EF\u80FD\u306A\u5834\u5408\u306F\u65B0\u305F\u306A\u8EE2\u9001\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-on-dsi-display"
  }), `DSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32L4R9Discovery\u8A55\u4FA1\u30AD\u30C3\u30C8\u306FDSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u901A\u5E38\u306EHAL\u30AF\u30E9\u30B9\u306F\u3001STM32HAL_DSI\uFF08STM32HAL_DSI.cpp\u5185\u306B\u914D\u7F6E\uFF09\u3067\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306FHAL::flushFrameBuffer\u30E1\u30BD\u30C3\u30C9\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u3066\u3001\u30D6\u30ED\u30C3\u30AF\u304C\u63CF\u753B\u6E08\u307F\u3067\u3042\u308B\u3053\u3068\u3092FrameBufferAllocator\u306B\u901A\u77E5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const Rect& rect)
{
    frameBufferAllocator->markBlockReadyForTransfer();
    HAL::flushFrameBuffer(rect); //call normal implementation
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D6\u30ED\u30C3\u30AF\u306E\u8EE2\u9001\u6E96\u5099\u304C\u3067\u304D\u305F\u3089\u3001 FrameBufferAllocator\u30B5\u30D6\u30AF\u30E9\u30B9\u306EManyBlockAllocator\u304C\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u95A2\u6570FrameBufferAllocatorSignalBlockDrawn()\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306FBSP\u30EC\u30A4\u30E4\u5185\u306B\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void FrameBufferAllocatorSignalBlockDrawn()
  {
    if (!dsiIsTransferring)
    {
      sendBlock();
    }
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DSI\u4E0A\u3067\u8EE2\u9001\u304C\u3059\u3067\u306B\u9032\u884C\u4E2D\u3067\u306A\u3051\u308C\u3070\u3001\u3053\u306E\u95A2\u6570\u304CsendBlock\u95A2\u6570\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 TouchGFX\u306B\u3088\u3063\u3066\u63CF\u753B\u3055\u308C\u305F\u6700\u521D\u306E\u30D6\u30ED\u30C3\u30AF\u306B\u3064\u3044\u3066\u306F\u3001\u8EE2\u9001\u4E2D\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u8EE2\u9001\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002 DSI\u8EE2\u9001\u304C\u307E\u3060\u5B9F\u884C\u4E2D\u306A\u306E\u306B\u5225\u306E\u30D6\u30ED\u30C3\u30AF\u306E\u63CF\u753B\u304C\u5B8C\u4E86\u3057\u305F\u5834\u5408\u306F\u3001\u305D\u306E\u30D6\u30ED\u30C3\u30AF\u306F"ready to transfer state"\u306E\u307E\u307E\u306B\u306A\u308A\u3001\u63CF\u753B\u306F\u5225\u306E\u7A7A\u304D\u30D6\u30ED\u30C3\u30AF\u304C\u5B58\u5728\u3059\u308C\u3070\u7D9A\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DSI\u8EE2\u9001\u304C\u5B8C\u4E86\u3057\u305F\u3089\u3001\u307E\u305A\u8EE2\u9001\u6E08\u307F\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u958B\u653E\u3057\u3066\u3001\u5225\u306E\u9577\u65B9\u5F62\u7528\u306B\u518D\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3055\u3089\u306B\u3001\u6B21\u306E\u30D6\u30ED\u30C3\u30AF\u306E\u8EE2\u9001\u6E96\u5099\u304C\u3067\u304D\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3059\u3079\u3066ER\u30A4\u30F3\u30BF\u30E9\u30D7\u30C8\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-8,11-11}",
    "{8-8,11-11}": true
  }), `__irq void DSI_IRQHandler(void) {
  if (__HAL_DSI_GET_FLAG(&hdsi, DSI_IT_ER))
  {
    // End-of-refresh interrupt. Meaning last DSI transfer is complete
    __HAL_DSI_CLEAR_FLAG(&hdsi, DSI_IT_ER);
    if (dsiIsTransferring)
    {
      HAL::getInstance()->getFrameBufferAllocator()->freeBlockAfterTransfer();
      dsiIsTransferring = 0;
    }
    sendBlock(); //transfer next block if availble
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95A2\u6570sendBlock\u306F\u3082\u3063\u3068\u8907\u96D1\u3067\u3059\u3002 \u3053\u3053\u3067\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u8EE2\u9001\u3059\u308B\u305F\u3081\u306BLTDC\u304A\u3088\u3073DSI\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3055\u3089\u306B\u3001\u8EE2\u9001\u3055\u308C\u305F\u30C7\u30FC\u30BF\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30E1\u30E2\u30EA\u5185\u306B\u6B63\u3057\u304F\u914D\u7F6E\u3059\u308B\u305F\u3081\u306B\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A2D\u5B9A\u3082\u884C\u3044\u307E\u3059\u3002 \u3053\u306E\u90E8\u5206\u306E\u30B3\u30FC\u30C9\u306F\u3001\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3067\u30B3\u30DE\u30F3\u30C9\u4ED5\u69D8\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{18-18,40-40,51-51}",
    "{18-18,40-40,51-51}": true
  }), `static void sendBlock()
{
    FrameBufferAllocator* fbAllocator = HAL::getInstance()->getFrameBufferAllocator();

    //Is a block ready for transfer?
    if (fbAllocator->hasBlockReadyForTransfer())
    {
        Rect transfer_rect;
        const uint8_t* src = fbAllocator->getBlockForTransfer(transfer_rect);
        dsiIsTransferring = 1;

        //1. Setup LTDC and layer address and dimension
        //2. Configure display active area
        //3. Start DSI

        __HAL_DSI_WRAPPER_DISABLE(&hdsi);

        //1: Setup LTDC
        LTDC_Layer1->CFBAR = (uint32_t)src;

        const uint32_t width = transfer_rect.width;
        const uint32_t height = transfer_rect.height;

        LTDC->AWCR = ((width + 1) << 16) | (height + 1);
        LTDC->TWCR = ((width + 1 + 1) << 16) | (height + 1 + 1);

        const uint16_t layer_x0 = 2 + 0;
        const uint16_t layer_x1 = 2 + width - 1;
        LTDC_Layer1->WHPCR = (layer_x1 << 16) | layer_x0;

        const uint16_t layer_y0 = 2 + 0;
        const uint16_t layer_y1 = 2 + height - 1;
        LTDC_Layer1->WVPCR = (layer_y1 << 16) | layer_y0;

        LTDC_Layer1->CFBLR = ((width * 3) << 16) | (width * 3 + 3);
        LTDC_Layer1->CFBLNR = height;

        LTDC->SRCR = (uint32_t)LTDC_SRCR_IMR;

        //2: Configure display
        const int16_t x = transfer_rect.x + 4;
        const int16_t x2 = transfer_rect.x + 4 + width - 1;
        uint8_t InitParam1[4] = { (uint8_t)(x >> 8), (uint8_t)(x & 0xFF), (uint8_t)(x2 >> 8), (uint8_t)(x2 & 0xFF)};
        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_COLUMN_ADDRESS, InitParam1);

        const int16_t y = transfer_rect.y;
        const int16_t y2 = transfer_rect.y + height - 1;
        uint8_t InitParam2[4] = { (uint8_t)(y >> 8), (uint8_t)(y & 0xFF), (uint8_t)(y2 >> 8), (uint8_t)(y2 & 0xFF) };
        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_PAGE_ADDRESS, InitParam2);

        //3: Start DSI transfer
        __HAL_DSI_WRAPPER_ENABLE(&hdsi);
        HAL_DSI_Refresh(&hdsi);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-on-spi-display"
  }), `SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u9577\u65B9\u5F62\u306E\u8EE2\u9001\u65B9\u6CD5\u306F\u3001\u539F\u5247\u7684\u306BDSI\u306E\u5834\u5408\u3068\u540C\u3058\u3067\u3059\u304C\u3001\u4E00\u90E8\u306E\u8A73\u7D30\u304C\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001\u9577\u65B9\u5F62\u304C\u63CF\u753B\u3055\u308C\u305F\u3089\u3001\u3059\u3067\u306B\u9032\u884C\u4E2D\u306E\u3082\u306E\u304C\u4F55\u3082\u306A\u3051\u308C\u3070\u8EE2\u9001\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-4,10-10}",
    "{4-4,10-10}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    frameBufferAllocator->markBlockReadyForTransfer();
    //start transfer if not running already!
    if (!LCDManager_IsTransmittingData())
    {
        touchgfx::Rect r;
        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);
        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95A2\u6570LCDManager_SendFrameBufferBlockWithPosition\u306F\u3001DMA\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306ESPI\u8EE2\u9001\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8EE2\u9001\u304C\u5B8C\u4E86\u3057\u305F\u3089\u3001SPI\u8EE2\u9001\u306E\u5B8C\u4E86\u30CF\u30F3\u30C9\u30E9\u304C\u95A2\u6570\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-11}",
    "{11-11}": true
  }), `void HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *hspi)
{
    UNUSED(hspi);
    LCD_CS_HIGH();
    isTransmittingData = 0;

    //Change to SPI datasize to 8 bit from 16 bit
    heval_Spi.Instance->CR2 &= ~(SPI_DATASIZE_16BIT - SPI_DATASIZE_8BIT);

    //signal transfer complete
    LCDManager_TransferComplete();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCDManager_TransferComplete\u95A2\u6570\u304C\u65B0\u3057\u3044\u8EE2\u9001\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3,16-16}",
    "{3-3,16-16}": true
  }), `void LCDManager_TransferComplete()
{
    touchgfx::startNewTransfer();
}

void startNewTransfer()
{
    FrameBufferAllocator* fba = HAL::getInstance()->getFrameBufferAllocator();
    fba->freeBlockAfterTransfer();
    blockIsTransferred = true;

    if (fba->hasBlockReadyForTransfer())
    {
        touchgfx::Rect r;
        const uint8_t* pixels = fba->getBlockForTransfer(r);
        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u307E\u3068\u3081`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6226\u7565\u306B\u3088\u3063\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u304C\u5185\u8535\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u5B9F\u88C5\u3057\u305F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30E1\u30E2\u30EA\u8981\u4EF6\u3092\u3001\u8EFD\u6E1B\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u69CB\u6210\u304A\u3088\u3073\u8A2D\u5B9A\u65B9\u6CD5\u306F\u3001\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u540C\u3058\u3067\u3059\u304C\u3001\u30D6\u30ED\u30C3\u30AF\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u65B9\u6CD5\u306F\u3055\u307E\u3056\u307E\u3067\u3059\u3002 \u3053\u3053\u3067\u8AAC\u660E\u3057\u305F\u65B9\u6CD5\u306B\u3088\u308B\u3068\u3001LTDC/DSI\u30D9\u30FC\u30B9\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\uFF08STM32L4R9-DISCO\uFF09\u3067\u306F\u3001DSI\u3078\u306E\u8EE2\u9001\u6E96\u5099\u304C\u3067\u304D\u305F\u6B21\u306E\u30D6\u30ED\u30C3\u30AF\u306B\u5408\u3046\u3088\u3046\u306BLTDC\u30EC\u30A4\u30E4\u3092\u518D\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001LCD\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08STM32G071\uFF09\u306E\u306A\u3044\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001SPI\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30D6\u30ED\u30C3\u30AF\u3092\u8EE2\u9001\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);