"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5656],{

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

/***/ 95097:
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
  id: "using-non-memory-mapped-flash",
  title: "\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-non-memory-mapped-flash",
  "id": "development/scenarios/using-non-memory-mapped-flash",
  "title": "\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-non-memory-mapped-flash",
  "permalink": "/4.20/ja/docs/development/scenarios/using-non-memory-mapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-non-memory-mapped-flash",
    "title": "\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u3088\u308B\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u8EFD\u6E1B",
    "permalink": "/4.20/ja/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"
  },
  "next": {
    "title": "\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u7528\u306B\u30B7\u30EA\u30A2\u30EBFlash\u306E\u4F7F\u7528",
    "permalink": "/4.20/ja/docs/development/scenarios/using-serial-flash"
  }
};
const assets = {};


const toc = [{
  value: "Flash\u304B\u3089\u30AD\u30E3\u30C3\u30B7\u30E5\u3078\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u306E\u30B3\u30D4\u30FC",
  id: "copying-bitmap-data-from-flash-to-cache",
  level: 3
}, {
  value: "Bitmap\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB",
  id: "the-bitmapdatabase-table",
  level: 2
}, {
  value: "\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u5909\u66F4",
  id: "linker-script-modifications",
  level: 2
}, {
  value: "BlockCopy\u95A2\u6570\u306E\u5909\u66F4",
  id: "modifying-the-blockcopy-function",
  level: 2
}, {
  value: "\u753B\u50CF\u306ERAM\u3078\u306E\u30EA\u30F3\u30AF",
  id: "linking-images-to-ram",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u5185\u306B\u914D\u7F6E\u53EF\u80FD\u306A\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u3059\u3079\u3066\u306E\u753B\u50CF\u3092\u30EA\u30F3\u30AF\u3055\u305B\u308B\u65B9\u6CD5\u3068\u3001\u5B9F\u884C\u6642\u306B\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3068\u4E00\u7DD2\u306B\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 TouchGFX\u3067\u306F\u3001\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306B\u4FDD\u5B58\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u63CF\u753B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u304C\u3001RAM\u5185\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u305D\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u5229\u7528\u53EF\u80FD\u306B\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u5168\u822C\u7684\u306A\u8AAC\u660E\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `Caching Bitmaps`), `\u306E\u8A18\u4E8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u30E6\u30FC\u30B6\u304C\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u8A2D\u5B9A\u6E08\u307F\u3067\u3042\u308A\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002 \u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306E\u4F8B\u3068\u3057\u3066\u306F\u3001USB\u30B9\u30C8\u30EC\u30FC\u30B8\u3084NAND Flash\u306A\u3069\u304C\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306E\u76EE\u7684\u306F\u3001\u753B\u50CF\u3092\u7279\u5B9A\u306E\u30A2\u30C9\u30EC\u30B9\u306B\u30EA\u30F3\u30AF\u3057\u3001\u305D\u306E\u753B\u50CF\u3092\u30D5\u30A1\u30A4\u30EB\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3001TouchGFX\u304C\u753B\u50CF\u3092\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u30B3\u30D4\u30FC\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "copying-bitmap-data-from-flash-to-cache"
  }), `Flash\u304B\u3089\u30AD\u30E3\u30C3\u30B7\u30E5\u3078\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u306E\u30B3\u30D4\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3068\u304D\u306B\u306F\u3001TouchGFX\u304C\u30D4\u30AF\u30BB\u30EB\u3092\u5143\u306E\u5834\u6240\u304B\u3089\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30D4\u30FC\u306F\u3001HAL\u30AF\u30E9\u30B9\u304B\u3089\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u901A\u5E38\u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306AFlash\uFF08\u5185\u90E8Flash\u3084\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u5916\u90E8Flash\u306A\u3069\uFF09\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u63D0\u4F9B\u3055\u308C\u308B\u901A\u5E38\u306EblockCopy\u95A2\u6570\u304C\u4F7F\u3048\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\u306F\u4F55\u3082\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65B9\u3067\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u3067\u304D\u306A\u3044\u30B9\u30C8\u30EC\u30FC\u30B8\uFF08\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u306A\u3069\uFF09\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u901A\u5E38\u306E\u5B9F\u88C5\u3067\u306F\u4E0D\u5341\u5206\u306A\u306E\u3067\u3001\u7279\u5B9A\u306EFlash\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u8AAD\u307F\u53D6\u308A\u3067\u304D\u308B\u3088\u3046\u66F4\u65B0\u3055\u308C\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u7528\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u304B\u3057\u307E\u305A\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u56FA\u5B9A\u30A2\u30C9\u30EC\u30B9\u306B\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-bitmapdatabase-table"
  }), `Bitmap\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u3001generated/images/src\u30D5\u30A9\u30EB\u30C0\u5185\u306E.cpp\u30D5\u30A1\u30A4\u30EB\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30D0\u30A4\u30C8\u914D\u5217\u3068\u3057\u3066\u8868\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u914D\u5217\u306F\u3001\u4ED6\u306E\u3059\u3079\u3066\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u3068\u540C\u69D8\u306BC++\u30B3\u30F3\u30D1\u30A4\u30E9\u306B\u3088\u3063\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30DC\u30BF\u30F3\u3068\u56DE\u8EE2\u3059\u308B\u30ED\u30B4\u3092\u793A\u3059\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u306B\u3088\u308B\u3001\u7C21\u5358\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u3068\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001Button_Pressed\u3001Button_Released\u3001Logo\u3068\u3044\u30463\u3064\u306E\u753B\u50CF\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u30893\u3064\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F.cpp\u30D5\u30A1\u30A4\u30EB\u306B\u5909\u63DB\u3055\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4E00\u90E8\u3068\u3057\u3066\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u753B\u50CF\u306F\u3001bitmap_database\u3068\u3044\u3046\u540D\u524D\u306E\u30C6\u30FC\u30D6\u30EB\u5185\u3067\u53C2\u7167\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306FBitmapDatabase.cpp\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u3042\u308A\u307E\u3059\u3002 \u4E0A\u306E\u4F8B\u306B\u3088\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\uFF08\u8A73\u7D30\u306E\u4E00\u90E8\u306F\u524A\u9664\u3055\u308C\u3066\u3044\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BitmapDatabase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `extern const unsigned char _blue_buttons_round_edge_small[];
extern const unsigned char _blue_buttons_round_edge_small_pressed[];
extern const unsigned char _blue_logo_touchgfx_logo[];

const touchgfx::Bitmap::BitmapData bitmap_database[] =
{
    { _blue_buttons_round_edge_small, ... },
    { _blue_buttons_round_edge_small_pressed, ... },
    { _blue_logo_touchgfx_logo, ... }
};

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306B\u5BA3\u8A00\u3055\u308C\u305F\u914D\u5217\u306F\u3001\u500B\u3005\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u542B\u3080\u914D\u5217\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u914D\u5217\u306F\u4ED6\u306E.cpp\u30D5\u30A1\u30A4\u30EB\u3067\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u914D\u5217\u306E\u30A2\u30C9\u30EC\u30B9\u306F\u3001bitmap_database\u914D\u5217\u306B\u4FDD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002 TouchGFX\u306F\u3053\u306E\u914D\u5217\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u898B\u3064\u3051\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B0\u30E9\u30DE\u304C\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3088\u3046\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\u3068\u3001TouchGFX\u304CFlash\u5185\uFF08bitmap_database\u914D\u5217\u306E\u4E2D\uFF09\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u898B\u3064\u3051\u3001\u3053\u3053\u304B\u3089\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30F3\u30AB\u306F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u914D\u7F6E\u3055\u308C\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u30D9\u30FC\u30B9\u306B\u3057\u307E\u3059\u3002 TouchGFX\u306E\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `ExtFlashSection`), `\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6A19\u6E96\u306E\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\uFF08\u3053\u3053\u3067\u306FGCC\u7528\uFF09\u306F\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u4ED6\u306E\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30C7\u30FC\u30BF\u3068\u4E00\u7DD2\u306BFlash\u5185\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F8B\u3067\u306F\u3001\u30A2\u30C9\u30EC\u30B9\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `0x24000000`), `\u306EExtFlashSection\u306B\u753B\u50CF\u30C7\u30FC\u30BF\u3092\u914D\u7F6E\u3057\u307E\u3059\u3002 \u4ED6\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u3044\uFF08\u30B3\u30FC\u30C9\u307E\u305F\u306F\u30C7\u30FC\u30BF\u306E\u30A2\u30C9\u30EC\u30B9\u7A7A\u9593\u306E\u4E00\u90E8\u3067\u306A\u3044\uFF09\u4EFB\u610F\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001\u901A\u5E38\u306E\u5185\u90E8Flash\u3068RAM\u306E\u9818\u57DF\u306B\u52A0\u3048\u3066\u3001\u65B0\u3057\u3044\u30E1\u30E2\u30EA\u9818\u57DF\uFF08\u30A2\u30C9\u30EC\u30B9\u304C0x24000000\u306EUSB Flash\uFF09\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K
  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K
  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u3053\u306EUSB\u9818\u57DF\u306BExtFlashSection\u3092\u914D\u7F6E\u3059\u308B\u3088\u3046\u30EA\u30F3\u30AB\u306B\u547D\u4EE4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection :
{
   *(ExtFlashSection ExtFlashSection.*)
} >USB
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30F3\u30AF\u5F8C\u306B\u3001\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\uFF08application.map\uFF09\u3092\u8ABF\u3079\u308B\u3053\u3068\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 \u95A2\u9023\u3059\u308B\u90E8\u5206\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection
                0x24000000    0x23ec0
 *(ExtFlashSection ExtFlashSection.*)
 ExtFlashSection
                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o
                0x24000000                _blue_logo_touchgfx_logo
 ExtFlashSection
                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o
                0x24010000                _blue_buttons_round_edge_small
 ExtFlashSection
                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o
                0x24019f60                _blue_buttons_round_edge_small_pressed
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u753B\u50CF\u306E\u5408\u8A08\u30B5\u30A4\u30BA\u304C0x23ec0 = 147,136\u30D0\u30A4\u30C8\u3067\u3042\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4FDD\u6301\u3059\u308B3\u3064\u306E\u914D\u5217\u306F\u3001\u30A2\u30C9\u30EC\u30B90x24000000\u304B\u3089\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3067\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u3092SD\u30AB\u30FC\u30C9\u306B\u79FB\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30D0\u30A4\u30CA\u30EA\uFF65\u30C7\u30FC\u30BF\u306F\u3001\u5358\u7D14\u306Aobjcopy\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066.elf\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u62BD\u51FA\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf
$ ls -l images.bin
-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u308A\u3001\u753B\u50CF\u306E\u30D0\u30A4\u30C8\u914D\u5217\u306E\u307F\u3092\u542B\u3080\u30D5\u30A1\u30A4\u30EB\uFF08images.bin\uFF09\u3092\u5165\u624B\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306FUSB Flash\u307E\u305F\u306FSD\u30AB\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u305F\u308A\u3001Flash\u30C1\u30C3\u30D7\u306B\u30D7\u30ED\u30B0\u30E9\u30E0\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u884C\u3044\u305F\u3044\u4E8B\u306F\u3001TouchGFX\u304C\u4E0A\u8A18\u306E\u30A2\u30C9\u30EC\u30B90x24000000\u306E\u30C7\u30FC\u30BF\u3092\u6C42\u3081\u305F\u3068\u304D\u306B\u3001SD\u30AB\u30FC\u30C9\u4E0A\u306Eimages.bin\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u308A\u51FA\u3059\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-the-blockcopy-function"
  }), `BlockCopy\u95A2\u6570\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092RAM\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u305F\u3068\u304D\u3001TouchGFX\u306FHAL::BlockCopy\u3092\u547C\u3073\u51FA\u3057\u3066\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3092SD\u30AB\u30FC\u30C9\u4E0A\u306E\u30C7\u30FC\u30BF\u306B\u30EA\u30F3\u30AF\u3055\u305B\u308B\u305F\u3081\u306B\u3001\u7279\u5B9A\u306EHAL\u30AF\u30E9\u30B9\u306B\u65B0\u3057\u3044BlockCopy\u3092\u5B9F\u88C5\u3067\u304D\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u3053\u306E\u30AF\u30E9\u30B9\u306E\u540D\u524D\u3092TouchGFXHAL\uFF08TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u305F\u3081\uFF09\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHal.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TouchGFXHAL : public TouchGFXGeneratedHAL
{
public:
    ...
    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHal.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source
// to the cache.
bool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)
{
  // If requested data is located within the memory block we have assigned for ExtFlashSection,
  // provide an implementation for data copying.
  if (src >= 0x24000000 && src < 0x24100000)
  {
    void* dataOffset = src - 0x24000000;
    // In this example we assume graphics is placed in SD card, and that we have an appropriate function
    // for copying data from there.
    sdcard_read(dest, dataOffset, numBytes);
    return true;
  }
  else
  {
    // For all other addresses, just use the default implementation.
    // This is important, as blockCopy is also used for other things in the core framework.
    return HAL::blockCopy(dest, src, numBytes);
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001SD\u30AB\u30FC\u30C9\u304B\u3089\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u3066\u3044\u306A\u3044\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u63CF\u753B\u3057\u3088\u3046\u3068\u3059\u308B\u5834\u5408\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bitmap_database`), `\u30C6\u30FC\u30D6\u30EB\u3067\u898B\u3064\u304B\u3063\u305F\u30A2\u30C9\u30EC\u30B9\u304B\u3089\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u53D6\u308D\u3046\u3068\u3057\u307E\u3059\u3002 \u3053\u306E\u30A2\u30C9\u30EC\u30B9\u306F\u30010x24000000\uFF5E0x24100000\u306E\u7BC4\u56F2\u5185\u306B\u306A\u308B\u306E\u3067\u3001\u8AAD\u307F\u53D6\u308A\u306B\u3088\u3063\u3066\u4F8B\u5916\u304C\u767A\u751F\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linking-images-to-ram"
  }), `\u753B\u50CF\u306ERAM\u3078\u306E\u30EA\u30F3\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u753B\u50CF\u3092\u4FDD\u6301\u3067\u304D\u308B\u5341\u5206\u306A\u91CF\u306ERAM\uFF08\u4E0A\u306E\u4F8B\u3067\u306F147,136\u30D0\u30A4\u30C8\u8D85\uFF09\u304C\u4F7F\u7528\u53EF\u80FD\u306A\u5834\u5408\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F7F\u7528\u3057\u3066\u753B\u50CF\u3092\u30B3\u30D4\u30FC\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5834\u5408\u306E\u65B9\u7B56\u306F\u3001\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u7528\u306E\u56FA\u5B9A\u30A2\u30C9\u30EC\u30B9\u3068RAM\u306E\u7BC4\u56F2\u3092\u9078\u629E\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067RAM\u9818\u57DF\u304B\u3089\u305D\u306E\u7BC4\u56F2\u3092\u524A\u9664\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9078\u629E\u3057\u305F\u30A2\u30C9\u30EC\u30B9\u3068\u30B5\u30A4\u30BA\u3067\u3001\u65B0\u3057\u3044\u9818\u57DFIMAGES\u3092\u4F5C\u6210\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IMAGES\u9818\u57DF\u306BExtFlashSection\u3092\u914D\u7F6E\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30EA\u30F3\u30AF\u3057\u3001.map\u30D5\u30A1\u30A4\u30EB\u3092\u78BA\u8A8D\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `application.elf\u304B\u3089images.bin\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u3092\u958B\u59CB\u3059\u308B\u524D\u306B\u3001images.bin\u30D5\u30A1\u30A4\u30EB\u5168\u4F53\u3092SD\u30AB\u30FC\u30C9\u304B\u3089RAM\u5185\u306E\u9078\u629E\u3055\u308C\u305F\u30A2\u30C9\u30EC\u30B9\u306B\u30B3\u30D4\u30FC\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u30B7\u30F3\u30D7\u30EB\u3067\u3059\u304C\u3001\u3044\u304F\u3064\u304B\u6B20\u70B9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306E\u753B\u50CF\u3092\u4FDD\u6301\u3067\u304D\u308B\u5341\u5206\u306A\u91CF\u306ERAM\u304C\u4F7F\u7528\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SD\u30AB\u30FC\u30C9\u304B\u3089\u306E\u30B3\u30D4\u30FC\u306A\u306E\u3067\u8D77\u52D5\u306B\u6642\u9593\u304C\u304B\u304B\u308B\uFF08\u6570MB\u306B\u6570\u79D2\u304B\u304B\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\uFF09`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);