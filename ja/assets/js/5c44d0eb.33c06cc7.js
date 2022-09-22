"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9612],{

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

/***/ 47239:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "loading-images-at-runtime",
  title: "\u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/loading-images-at-runtime",
  "id": "development/ui-development/scenarios/loading-images-at-runtime",
  "title": "\u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/loading-images-at-runtime",
  "permalink": "/4.20/ja/docs/development/ui-development/scenarios/loading-images-at-runtime",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "loading-images-at-runtime",
    "title": "\u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A",
    "permalink": "/4.20/ja/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"
  },
  "next": {
    "title": "L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306E\u524A\u6E1B",
    "permalink": "/4.20/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"
  }
};
const assets = {};



const toc = [{
  value: "BMP\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u8FBC\u307F\u4F8B",
  id: "loading-bmp-file-example",
  level: 2
}, {
  value: "BMP\u30ED\u30FC\u30C0",
  id: "the-bmp-loader",
  level: 3
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u7528\u306E\u30E1\u30E2\u30EA\u8A2D\u5B9A",
  id: "configure-memory-for-dynamic-bitmaps",
  level: 2
}, {
  value: "JPEG\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u8FBC\u307F",
  id: "loading-jpeg-files",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3080\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306E\u6A19\u6E96\u7684\u306A\u624B\u9806\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u542B\u3081\u308B\u3053\u3068\u3067\u3059\u3002 PNG\u30D5\u30A1\u30A4\u30EB\u306F.cpp\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u30D0\u30A4\u30CA\u30EA\uFF65\u30C7\u30FC\u30BF\u306B\u5909\u63DB\u3055\u308C\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u304C\u3001\u5B9F\u884C\u6642\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306E\u7C21\u5358\u306A\u65B9\u6CD5\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u306F\u3053\u306E\u65B9\u6CD5\u304C\u53EF\u80FD\u3067\u306A\u3044\u3001\u3082\u3057\u304F\u306F\u5B9F\u7528\u7684\u3067\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u753B\u50CF\u304C\u4F7F\u7528\u53EF\u80FD\u3067\u306A\u3044\u5834\u5408\uFF08\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u306B\u3088\u3063\u3066\u5F8C\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u3088\u3046\u306A\u5834\u5408\uFF09\u3084\u3001\u5358\u7D14\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u591A\u3059\u304E\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306EFlash\u9818\u57DF\u306B\u53CE\u307E\u3089\u306A\u3044\u5834\u5408\u306A\u3069\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF08\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u53C2\u7167\uFF09\u306F\u3001\u3053\u306E\u554F\u984C\u306B\u5BFE\u3059\u308BRAM\u30D9\u30FC\u30B9\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002 \u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u5B9F\u884C\u6642\u306B\u4F5C\u6210\u3055\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u6570\u3001\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001\u5E45\u3068\u9AD8\u3055\u3092\u81EA\u7531\u306B\u6C7A\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306FRAM\uFF08\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\uFF09\u306B\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F5C\u6210\u5F8C\u306B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30BD\u30FC\u30B9\u306E\u30D4\u30AF\u30BB\u30EB\u5024\u3092\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306B\u30B3\u30D4\u30FC\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4F5C\u6210\u5F8C\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u306F\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u30D4\u30AF\u30BB\u30EB\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u4E00\u90E8\u3092BMP\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8AAD\u307F\u53D6\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u5358\u7D14\u306A\u30E6\u30FC\u30B9\uFF65\u30B1\u30FC\u30B9\u306B\u306F\u3001SD\u30AB\u30FC\u30C9\u306B\u3042\u308BBMP\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u6700\u521D\u306B\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6A19\u6E96\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308B\u306E\u3067\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u4F7F\u7528\u53EF\u80FD\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u6A5F\u80FD\u306B\u3088\u308A\u3001\u5B9F\u884C\u6642\u306B\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u753B\u50CF\u3092\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u4ECB\u3057\u3066\u753B\u50CF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "loading-bmp-file-example"
  }), `BMP\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u8FBC\u307F\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001BMP\u30ED\u30FC\u30C0\u3092\u4F7F\u7528\u3057\u3066Windows BMP\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u8FBC\u3080\u65B9\u6CD5\u306B\u3064\u3044\u3066\u898B\u3066\u3044\u304D\u307E\u3059\u3002 \u30ED\u30FC\u30C0\u7528\u306E\u30B3\u30FC\u30C9\u306F\u8A18\u4E8B\u306E\u5F8C\u534A\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u753B\u50CF\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30D3\u30E5\u30FC\u306B\u633F\u5165\u3057\u307E\u3059\u3002 \u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CBMP\u3092\u8868\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemplateView : public View
{
private:
    Image image;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u306E\u65E5\u4ED8\u3092setupScreen\u306B\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7-8,13-14}",
    "{7-8,13-14}": true
  }), `void TemplateView::setupScreen()
{
    FILE* f = fopen("image.jpg", "rb");
    uint16_t width, height;

    //Get the image dimensions from the BMP file
    BMPFileLoader::getBMP24Dimensions(f, width, height);
    BitmapId bmpId;

    //Create (16bit) dynamic bitmap of same dimension
    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);

    //Load pixels from BMP file to dynamic bitmap
    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);

    //Make Image show the loaded bitmap
    image.setBitmap(Bitmap(bmpId));

    //Position image and add to View
    image.setXY(20, 20);
    add(image);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-bmp-loader"
  }), `BMP\u30ED\u30FC\u30C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u5358\u7D14\u306ABMP\u30D5\u30A1\u30A4\u30EB\uFF65\u30ED\u30FC\u30C0\u306E\u30B3\u30FC\u30C9\u3092\u793A\u3057\u307E\u3059\u3002 \u3053\u308C\u306F24bpp\u306EBMP\u30D5\u30A1\u30A4\u30EB\u306E\u307F\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002  \u304A\u4F7F\u3044\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u5408\u308F\u305B\u3066\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u306E\u547C\u3073\u51FA\u3057\u306E\u8ABF\u6574\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BMPFileLoader.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/hal/Types.hpp>
#include <touchgfx/Bitmap.hpp>

using namespace touchgfx;

class BMPFileLoader
{
public:
    typedef void* FileHdl;

    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);
    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);
private:
    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);
    static void seekFile(FileHdl hdl, uint32_t offset);
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BMPFileLoader.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/BMPFileLoader.hpp>
#include <platform/driver/lcd/LCD16bpp.hpp>
#include <touchgfx/Color.hpp>

int BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)
{
    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);
    if (r != length)
    {
        return 1;
    }
    return 0;
}

void BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)
{
    fseek((FILE*)hdl, offset, SEEK_SET);
}

void BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)
{
    uint8_t data[50];
    seekFile(fileHandle, 0);
    readFile(fileHandle, data, 26); //read first part of header.

    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);
    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);
}

void BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)
{
    uint8_t data[50];
    seekFile(fileHandle, 0);
    readFile(fileHandle, data, 26); //read first part of header.

    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);
    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);
    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);

    readFile(fileHandle, data, offset - 26); //read rest of header.

    //get dynamic bitmap boundaries
    const uint32_t buffer_width = bitmap.getWidth();
    const uint32_t buffer_height = bitmap.getHeight();

    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;

    const Bitmap::BitmapFormat format = bitmap.getFormat();
    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());
    uint16_t* const buffer16 = (uint16_t*)buffer8;

    for (uint32_t y = 0; y < height; y++)
    {
        for (uint32_t x = 0; x < width; x++)
        {
            if (x % 10 == 0) //read data every 10 pixels = 30 bytes
            {
                if (x + 10 <= width) //read 10
                {
                    readFile(fileHandle, data, 10 * 3); //10 pixels
                }
                else
                {
                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line
                }
            }
            //insert pixel, if within dynamic bitmap boundaries
            if (x < buffer_width && ((height - y - 1) < buffer_height))
            {
                switch (format)
                {
                case Bitmap::RGB565:
                    buffer16[x + (height - y - 1) * buffer_width] =
                        LCD16bpp::getNativeColorFromRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);
                    break;
                case Bitmap::RGB888:
                    {
                        //24 bit framebuffer
                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);
                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];
                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];
                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];
                        break;
                    }
                case Bitmap::ARGB8888:
                    {
                        //24 bit framebuffer
                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);
                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];
                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];
                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];
                        buffer8[inx + 3] = 255; //solid
                        break;
                    }
                default:
                    assert(!"Unsupported bitmap format in BMPFileLoader!");
                }
            }
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30FC\u30C9\u306F\u5B9F\u4F8B\u3092\u793A\u3059\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059\u3002 RGB888\u306E\u3082\u3063\u3068\u6700\u9069\u306A\u30EA\u30FC\u30C0\u3067\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30E1\u30E2\u30EA\u306B\u76F4\u63A5\u8AAD\u307F\u53D6\u308A\u3067\u304D\u307E\u3059\uFF08\u884C\u306E\u30D1\u30C7\u30A3\u30F3\u30B0\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF09\u3002 \u4E0A\u8A18\u306E\u30EA\u30FC\u30C0\u306F\u3001BMP\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u4E00\u6642\u7684\u306A\u30D0\u30C3\u30D5\u30A1\u306B10\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u53D6\u308A\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D4\u30AF\u30BB\u30EB\u306F\u3001\u6B63\u3057\u3044\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3055\u308C\u306A\u304C\u3089\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configure-memory-for-dynamic-bitmaps"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u7528\u306E\u30E1\u30E2\u30EA\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3057\u3066\u4F7F\u7528\u3059\u308B\u524D\u306B\u3001TouchGFX\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u307E\u305A\u3001\u30D0\u30C3\u30D5\u30A1\u3068\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u6700\u5927\u6570\u3092\u3001\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u7528\u306B\u3082\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u793A\u3059STM32F7xx\u306E\u4F8B\u3067\u306F\u3001\u5916\u90E8RAM\u306B\u30D0\u30C3\u30D5\u30A1\u3092\u5272\u308A\u5F53\u3066\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001\u30B5\u30A4\u30BA\u304C320x240\u306E24\u30D3\u30C3\u30C8\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u8868\u793A\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u306F320x240x3 = 230,400\u30D0\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059\u3002 \u3055\u3089\u306B\u30D6\u30C3\u30AF\u30AD\u30FC\u30D4\u30F3\u30B0\u7528\u306E\u5C0F\u3055\u3044\u9818\u57DF\u3082\u5FC5\u8981\u306A\u306E\u3067\u3001\u30D0\u30C3\u30D5\u30A1\u7528\u306B232,000\u30D0\u30A4\u30C8\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,8-8}",
    "{2-2,8-8}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM
    Bitmap::setCache((uint16_t*)bmpCache, 232000, 1);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306E\u5F15\u6570\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u6700\u5927\u6570\u306A\u306E\u3067\u3001\u5404\u81EA\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u3053\u308C\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002 \u591A\u304F\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3082\u5916\u90E8RAM\u306B\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u91CD\u8907\u3059\u308B\u30E1\u30E2\u30EA\u9818\u57DF\u306B\u914D\u7F6E\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30E1\u30E2\u30EA\u91CF\u304C\u5341\u5206\u3067\u306A\u3044\u5834\u5408\u3001dynamicBitmapCreate\u304B\u3089\u8FD4\u3055\u308C\u308BBitmapId\u304C\u3001BITMAP_INVALID\u306B\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "loading-jpeg-files"
  }), `JPEG\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u8FBC\u307F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u30D5\u30A1\u30A4\u30EB\uFF65\u30ED\u30FC\u30C0\u306E\u4F8B\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(8727)/* ["default"] */ .Z)
  }, "\u3053\u3061\u3089"), `\u306B\u3042\u308A\u307E\u3059\u3002\u3053\u3053\u306B\u306F\u3001LibJPEG\u3092\u4F7F\u7528\u3057\u3066JPEG\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u304C\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u4E0A\u8A18\u306EBMPFileLoader\u3068\u540C\u3058\u3088\u3046\u306B\u3001JPEGLoader\u30AF\u30E9\u30B9\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 8727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip");

/***/ })

}]);