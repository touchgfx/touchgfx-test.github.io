"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2086],{

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

/***/ 68024:
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
  id: "caching-bitmaps",
  title: "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "id": "development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "title": "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/caching-bitmaps.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "caching-bitmaps",
    "title": "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-containers"
  },
  "next": {
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-widgets"
  }
};
const assets = {};


const toc = [{
  value: "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8A2D\u5B9A",
  id: "setup-the-bitmap-cache",
  level: 2
}, {
  value: "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u8A2D\u5B9A",
  id: "bitmap-cache-configuration",
  level: 3
}, {
  value: "TouchGFX Generator\u306B\u3088\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u6709\u52B9\u5316",
  id: "enabling-bitmap-cache-with-touchgfx-generator",
  level: 4
}, {
  value: "BlockCopy\u3067\u3001Flash\u304B\u3089\u30AD\u30E3\u30C3\u30B7\u30E5\u3078\u306E\u30C7\u30FC\u30BF\uFF65\u30B3\u30D4\u30FC",
  id: "blockcopy-copies-data-from-flash-to-the-cache",
  level: 3
}, {
  value: "\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u64CD\u4F5C",
  id: "cache-operations",
  level: 2
}, {
  value: "\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u6226\u7565",
  id: "cache-strategies",
  level: 2
}, {
  value: "\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30D9\u30FC\u30B9\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5",
  id: "cache-bitmap-on-a-screen-basis",
  level: 3
}, {
  value: "\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u7F6E\u63DB",
  id: "replace-the-background-bitmaps-in-the-cache",
  level: 3
}, {
  value: "\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\u306E\u7BA1\u7406",
  id: "cache-memory-management",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3068\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4FDD\u5B58\uFF08\u3064\u307E\u308A\u30AD\u30E3\u30C3\u30B7\u30E5\uFF09\u3067\u304D\u308B\u5C02\u7528\u306ERAM\u30D0\u30C3\u30D5\u30A1\u306E\u3053\u3068\u3067\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u308B\u3068\u3001TouchGFX\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30BD\u30FC\u30B9\u3068\u3057\u3066\u3001\u305D\u306ERAM\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u81EA\u52D5\u7684\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u3001\u591A\u304F\u306E\u5834\u5408\u306B\u6709\u76CA\u3067\u3059\u3002 RAM\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u65B9\u304CFlash\u304B\u3089\u8AAD\u307F\u53D6\u308B\u3088\u308A\u3082\u9AD8\u901F\u3067\u3042\u308B\u3053\u3068\u304C\u591A\u3044\uFF08\u7279\u306B\u3001\u975E\u30EA\u30CB\u30A2\u306A\u30E1\u30E2\u30EA\uFF65\u30A2\u30AF\u30BB\u30B9\u3092\u4F7F\u7528\u3059\u308BTexturemapper\u306E\u4F7F\u7528\u6642\uFF09\u306E\u3067\u3001RAM\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066UI\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5185\u90E8Flash\u304B\u3089\u5916\u90E8RAM\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u4F4E\u4E0B\u3059\u308B\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 RAM\u3078\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3088\u3063\u3066\u3001UI\u3092\u8868\u793A\u3059\u308B\u3068\u304D\u306E\u30ED\u30B0\uFF65\u30D5\u30A1\u30A4\u30EB\u306A\u3069\u3001Flash\u3092\u5225\u306E\u76EE\u7684\u3067\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3082\u306A\u308A\u307E\u3059\u3002\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304CRAM\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u308B\u304B\u3089\u3067\u3059\uFF08\u4E00\u90E8\u306E\u30B1\u30FC\u30B9\u3067\u306F\u3001Flash\u306B\u66F8\u304D\u8FBC\u3080\u305F\u3081\u306BFlash\u3092\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF09\u3002  \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u304D\u306B\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u5909\u66F4\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u5185\u306B\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u306E\u3067\u3001\u3053\u306E\u65B9\u6CD5\u306F\u6709\u76CA\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001TouchGFX\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30C7\u30FC\u30BF\u3092\u5916\u90E8Flash\u306B\u914D\u7F6E\u3057\u3066\u3001\u30C9\u30E9\u30A4\u30D0\uFF65\u30EC\u30A4\u30E4\u3092\u4ECB\u3055\u305A\u306B\uFF08\u30DD\u30A4\u30F3\u30BF\u3092\u901A\u3057\u3066\uFF09\u76F4\u63A5\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3064\u307E\u308A\u3001TouchGFX\u3067\u306F\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u306EFlash\uFF08SD\u30AB\u30FC\u30C9\u306A\u3069\uFF09\u304B\u3089\u76F4\u63A5\u63CF\u753B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u306A\u3044\u306E\u3067\u3059\u3002 \u3053\u306E\u5236\u9650\u3092\u89E3\u6C7A\u3059\u308B\u305F\u3081\u306B\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u3001\u96FB\u6E90\u7ACB\u3061\u4E0A\u3052\u6642\u306B\u4E00\u90E8\u307E\u305F\u306F\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u3092RAM\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092USB\u30C7\u30A3\u30B9\u30AF\u3084SD\u30AB\u30FC\u30C9\u306A\u3069\u306E\u4F4E\u901F\u306E\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306B\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5F79\u7ACB\u3064\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "setup-the-bitmap-cache"
  }), `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u307E\u305ATouchGFX\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u6A5F\u80FD\u3092\u8A2D\u5B9A\u3057\u3001\u6B21\u306B\uFF08\u5834\u5408\u306B\u3088\u3063\u3066\u306F\uFF09\u3001\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u305F\u3081\u306B\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u56FA\u6709\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BlockCopy`), `\u95A2\u6570\u3092\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bitmap-cache-configuration"
  }), `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u8A2D\u5B9A\u306F\u3001\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3068\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u304B\u3089\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u30892\u3064\u306E\u5024\u3092\u3001Bitmap::setCache\u3078\u306E\u547C\u3073\u51FA\u3057\u5185\u3067TouchGFX\u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u547C\u3073\u51FA\u3057\u306F\u3001\u901A\u5E38\u306FFrontendApplication.cpp\u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u4F8B\u3067\u306F\u3001\u5916\u90E8\u30E1\u30E2\u30EA\u306B\u3042\u308B3MB\u306E\u30D0\u30C3\u30D5\u30A1\u304C\u3001TouchGFX\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3068\u3057\u3066\u6E21\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30A2\u30C9\u30EC\u30B9\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D7\u30ED\u30B0\u30E9\u30DE\u304C\u9078\u629E\u3057\u307E\u3059\u3002 \u6B21\u306E\u4F8B\u3067\u306F\u3001\u914D\u5217\u3092\u5BA3\u8A00\u3057\u3001\u914D\u5217\u306E\u30A2\u30C9\u30EC\u30B9\u3068\u30B5\u30A4\u30BA\u3092\u6E21\u3057\u3066\u3044\u307E\u3059\u3002 \u914D\u5217\u306E\u7279\u5B9A\u306E\u5834\u6240\u306F\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306F\u3001\u5185\u90E8RAM\u306B\uFF08\u5C0F\u898F\u6A21\u306E\uFF09\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B\u3088\u304F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

// Define an array for the bitmap cache
uint16_t cache[128*1024]; //256 KB cache

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    Bitmap::setCache(cache, sizeof(cache));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "enabling-bitmap-cache-with-touchgfx-generator"
  }), `TouchGFX Generator\u306B\u3088\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u6709\u52B9\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX\u3068TouchGFX Generator\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u6709\u52B9\u5316\u3068\u8A2D\u5B9A\u3082TouchGFXHAL.cpp\u3067\u306A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    /* Initialize TouchGFX Engine */
    TouchGFXGeneratedHAL::initialize();

    uint16_t* cacheStartAddr = (uint16_t*)0xC0008000;
    uint32_t cacheSize = 0x300000; //3 MB, as example

    touchgfx::Bitmap::setCache(cache, sizeof(cache));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u518D\u5229\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u65B0\u3057\u3044\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u8A2D\u5B9A\u3059\u308B\u524D\u306B\u4EE5\u524D\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u524A\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Bitmap::removeCache()`), `\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8A2D\u5B9A\u304C\u4E00\u5EA6\u304D\u308A\u306E\u5834\u5408\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u524A\u9664\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3001\u5F53\u7136\u306A\u304C\u3089\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30B5\u30A4\u30BA\u306F\u3001\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u3092\u683C\u7D0D\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u5927\u304D\u3055\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6CE8\u610F: \u30D6\u30C3\u30AF\u30AD\u30FC\u30D4\u30F3\u30B0\u306B\u5C11\u91CF\u306E\u30E1\u30E2\u30EA\uFF088\u30D0\u30A4\u30C8 x \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u6570\uFF09\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u3001\u5B9F\u969B\u306B\u672A\u52A0\u5DE5\uFF08raw\uFF09\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u7528\u306B\u5FC5\u8981\u306A\u5206\u3088\u308A\u3082\u3001\u308F\u305A\u304B\u306B\u5927\u304D\u3044\u30E1\u30E2\u30EA\u3092\u5272\u308A\u5F53\u3066\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5206\u91CF\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u6570\u306B\u5FDC\u3058\u3066\u7570\u306A\u308A\u307E\u3059\u304C\u3001\u901A\u5E38\u306F\u6570\u30AD\u30ED\u30D0\u30A4\u30C8\u306E\u8FFD\u52A0\u30E1\u30E2\u30EA\u3067\u5341\u5206\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "blockcopy-copies-data-from-flash-to-the-cache"
  }), `BlockCopy\u3067\u3001Flash\u304B\u3089\u30AD\u30E3\u30C3\u30B7\u30E5\u3078\u306E\u30C7\u30FC\u30BF\uFF65\u30B3\u30D4\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u969B\u3001TouchGFX\u3067\u306F\u3001HAL\u30AF\u30E9\u30B9\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BlockCopy`), `\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D4\u30AF\u30BB\u30EB\u304C\u5143\u306E\u5834\u6240\u304B\u3089\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u901A\u5E38\u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306AFlash\uFF08\u5185\u90E8Flash\u3084\u3001QSPI Flash\u306E\u3088\u3046\u306A\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u306E\u5916\u90E8Flash\u306A\u3069\uFF09\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30E6\u30FC\u30B6\u306F\u4F55\u3082\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002 \u7D44\u8FBC\u307F\u306E\u5B9F\u88C5\u6A5F\u80FD\u304C\u81EA\u52D5\u3067\u884C\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65B9\u3067\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u3067\u304D\u306A\u3044Flash\uFF08\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u3084\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306A\u3069\uFF09\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u6A19\u6E96\u306E\u30B3\u30D4\u30FC\u65B9\u6CD5\u3067\u306F\u4E0D\u5341\u5206\u306A\u306E\u3067\u3001\u7279\u5B9A\u306EFlash\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u8AAD\u307F\u53D6\u308A\u3067\u304D\u308B\u3088\u3046\u66F4\u65B0\u3055\u308C\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u7528\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../scenarios/using-non-memory-mapped-flash"
  }), `\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-operations"
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u64CD\u4F5C\u306F\u3001\u3059\u3079\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Bitmap`), `\u30AF\u30E9\u30B9\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "strong"
  }, `Bitmap`), `\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30E1\u30BD\u30C3\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cache(BitmapId id)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u5341\u5206\u306A\u91CF\u306E\u672A\u4F7F\u7528\u306E\u30E1\u30E2\u30EA\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u5834\u5408\u306E\u307F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u3089true\u3092\u8FD4\u3057\u307E\u3059\u3002 \u3059\u3067\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u3066\u3044\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u3088\u3046\u3068\u3057\u305F\u5834\u5408\u3001\u4F55\u3082\u3057\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cacheReplaceBitmap(BitmapId out, BitmapId in)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u5916\u306B\u51FA\u3057\u3066\u3001\u5225\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\uFF08\u4E2D\u306B\u5165\u308C\u307E\u3059\uFF09\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u6210\u529F\u3059\u308B\u306E\u306F\u3001\u7F6E\u304D\u63DB\u3048\u3089\u308C\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u3059\u3067\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u6E08\u307F\u3067\u3001\u53CC\u65B9\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u540C\u3058\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\u6570\uFF09\u306E\u5834\u5408\u306E\u307F\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cacheRemoveBitmap(BitmapId id)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F1\u3064\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002 \u305D\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u4F7F\u7528\u3057\u3066\u3044\u305F\u30E1\u30E2\u30EA\u306F\u3001\u5F8C\u3067\u5225\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `void Bitmap::clearCache()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `void Bitmap::cacheAll()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\uFF08\u4F7F\u7528\u53EF\u80FD\u306A\uFF09RAM\u306E\u91CF\u304C\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5408\u8A08\u30B5\u30A4\u30BA\u3088\u308A\u3082\u5C0F\u3055\u3044\u5834\u5408\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-strategies"
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u6226\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u306E\u3067\u304D\u308BRAM\u306E\u91CF\u304C\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5408\u8A08\u30B5\u30A4\u30BA\u3088\u308A\u3082\u5C0F\u3055\u3044\u5834\u5408\u3001\u8D77\u52D5\u6642\u306B\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u306E\u5834\u5408\u306F\u3001\u6700\u521D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5FC5\u8981\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u307F\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u306A\u3069\u306E\u65B9\u6CD5\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u9593\u3092\u79FB\u884C\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4E00\u90E8\u307E\u305F\u306F\u3059\u3079\u3066\u3092\u524A\u9664\u3057\u3001\u6B21\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5FC5\u8981\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u6B21\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3053\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cache-bitmap-on-a-screen-basis"
  }), `\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30D9\u30FC\u30B9\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u3001\u4E00\u9023\u306E\u30D3\u30E5\u30FC\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 \u304A\u305D\u3089\u304F\u3059\u3079\u3066\u306E\u30D3\u30E5\u30FC\u304C\u3044\u304F\u3089\u304B\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002  \u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u5358\u7D14\u306A\u65B9\u6CD5\u306F\u30011\u3064\u306E\u30D3\u30E5\u30FC\u3067\u4F7F\u7528\u3059\u308B\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::setupScreen`), `\u30E1\u30BD\u30C3\u30C9\u3067\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u3001\u305D\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::tearDownScreen`), `\u30E1\u30BD\u30C3\u30C9\u3067\u30AF\u30EA\u30A2\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::setupScreen()
{
    //ensure background is cached
    Bitmap::cache(BITMAP_SCREEN2_ID);
    //cache some icons
    Bitmap::cache(BITMAP_ICON10_ID);
    Bitmap::cache(BITMAP_ICON11_ID);
    Bitmap::cache(BITMAP_ICON12_ID);
}

void Screen1View::tearDownScreen()
{
    //Remove all bitmaps from the cache
    Bitmap::clearCache();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30E1\u30E2\u30EA\u8981\u4EF6\u306F\u3001\u4E00\u756A\u5927\u304D\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30B5\u30A4\u30BA\u3067\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306E\u6B20\u70B9\u306F\u30012\u3064\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View`), `\u304C\u3069\u3061\u3089\u3082\u540C\u30581\u3064\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u6700\u521D\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View`), `\u306E\u7D42\u4E86\u6642\u306B\u305D\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u6D88\u53BB\u3055\u308C\u30012\u3064\u76EE\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View`), `\u306E\u30A8\u30F3\u30C8\u30EA\u6642\u306B\u518D\u3073\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Bitmap::cacheRemoveBitmap\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u9078\u629E\u7684\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u524A\u9664\u3057\u3001\u3053\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u3092\u524A\u6E1B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 cacheRemoveBitmap\u306E\u6B20\u70B9\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\u304C\u65AD\u7247\u5316\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u3082\u30461\u3064\u306E\u4E00\u822C\u7684\u306A\u6B20\u70B9\u306F\u3001\u30DC\u30BF\u30F3\u306E\u8FFD\u52A0\u306A\u3069UI\u3092\u5909\u66F4\u3059\u308B\u3068\u304D\u306B\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3057\u3066\u65B0\u3057\u3044\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u751F\u3058\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "replace-the-background-bitmaps-in-the-cache"
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u7F6E\u63DB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u9023\u306E\u5C0F\u3055\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF08\u30A2\u30A4\u30B3\u30F3\u306A\u3069\uFF09\u3068\u3044\u304F\u3064\u304B\u306E\u5927\u304D\u306A\u30D5\u30EB\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u300C\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u300D\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u6301\u3064\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5834\u5408\u306F\u3001\u5225\u306E\u6226\u7565\u3092\u304A\u52E7\u3081\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5165\u308B\u524D\u306B\u3001\u5C0F\u3055\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u3059\u3079\u3066\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u3053\u306E\u5B9F\u884C\u306B\u9069\u3057\u305F\u5834\u6240\u306F\u3001FrontendApplication\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u3067\u3059\u3002 \u3055\u3089\u306B\u3001\u6700\u521D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3082\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : touchgfx::MVPApplication(),
      transitionCallback(),
      frontendHeap(heap),
      model(m)
{
    //cache some icons
    Bitmap::cache(BITMAP_ICON10_ID);
    Bitmap::cache(BITMAP_ICON11_ID);
    Bitmap::cache(BITMAP_ICON12_ID);

    //cache first background
    Bitmap::cache(BITMAP_SCREEN1_ID);
    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember ID in a variable
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::setupScreen`), `\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u3066\u3044\u308B\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u3001\u5FC5\u8981\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Screen1View::setupScreen()
{
    //ensure background is cached
    Bitmap::cacheReplaceBitmap(backgroundBitmapCached, BITMAP_SCREEN1_ID);
    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember new ID of cached bitmap
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::tearDownScreen()
{
    //nothing cache related
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6226\u7565\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30E1\u30E2\u30EA\u8981\u4EF6\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u3066\u3044\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30B5\u30A4\u30BA\u30681\u3064\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30B5\u30A4\u30BA\u306E\u5408\u8A08\u3067\u3059\u3002 \u524D\u306E\u30E1\u30BD\u30C3\u30C9\u3068\u6BD4\u3079\u3066\u3001\u30D3\u30E5\u30FC\u306B\u4F7F\u7528\u3059\u308B\u30B3\u30FC\u30C9\u304C\u5C11\u306A\u3044\u306E\u3067\u3001\u30B3\u30FC\u30C9\u306E\u7DAD\u6301\u304C\u7C21\u5358\u306B\u306A\u308A\u307E\u3059\u3002 \u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u51FA\u5165\u308A\u3059\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u5C11\u306A\u3044\u306E\u3067\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3082\u5411\u4E0A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30E2\u30EA\u304C\u65AD\u7247\u5316\u3057\u306A\u3044\u306E\u3067\u3001cacheReplaceBitmap\u306E\u64CD\u4F5C\u306E\u65B9\u304CcacheRemoveBitmap\u30E1\u30BD\u30C3\u30C9\u3088\u308A\u671B\u307E\u3057\u3044\u3068\u8A00\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-memory-management"
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\u306E\u7BA1\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u5B8C\u5168\u306A\u52B9\u679C\u3092\u5F97\u308B\u306B\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u5185\u90E8\u52D5\u4F5C\u3092\u7406\u89E3\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u30B9\u30BF\u30C3\u30AF\u3068\u3057\u3066\u5B9F\u88C5\u3055\u308C\u307E\u3059\u3002 \u65B0\u3057\u3044\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u3001\u524D\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5F8C\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u305F\u30E1\u30E2\u30EA\u306F\u3001\u305D\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u524A\u9664\u3055\u308C\u308B\u3068\u300C\u89E3\u653E\uFF08free\uFF09\u300D\u3068\u30DE\u30FC\u30AF\u3055\u308C\u307E\u3059\u304C\u3001\u524A\u9664\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30B9\u30BF\u30C3\u30AF\u306E\u5148\u982D\u306B\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30E1\u30E2\u30EA\u306F\u3059\u3050\u306B\u4F7F\u7528\u53EF\u80FD\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002 \u305D\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u300C\u4E2D\u307B\u3069\u300D\u306B\u3042\u3063\u305F\u5834\u5408\u3001\u6B21\u306BBitmap::cache\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u3001\u30E1\u30E2\u30EA\u3092\u56DE\u53CE\u3059\u308B\u305F\u3081\u306E\u30B3\u30F3\u30D1\u30AF\u30C8\uFF08\u5727\u7E2E\uFF09\u64CD\u4F5C\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u300C\u30B3\u30B9\u30C8\u9AD8\u306A\u300D\u65B9\u6CD5\u306F\u3001\u300C\u7A74\u300D\u306E\u3042\u308B\u30AD\u30E3\u30C3\u30B7\u30E5\u3067Bitmap::cache\u3092\u547C\u3073\u51FA\u3055\u306A\u3051\u308C\u3070\u56DE\u907F\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u56F3\u306F\u3001\u3053\u306E\u539F\u7406\u3092\u308F\u304B\u308A\u3084\u3059\u304F\u793A\u3059\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4EE5\u524D\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4E0A\u306B\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-cache.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\u30E1\u30E2\u30EA\u5185\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5272\u308A\u5F53\u3066\u9806\u5E8F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 2
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u524A\u9664\u3055\u308C\u305F\u30E1\u30E2\u30EA\u306F\u672A\u4F7F\u7528\u3068\u30DE\u30FC\u30AF\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u524A\u9664\u5F8C\u306E\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306E\u672A\u4F7F\u7528\u306E\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 3
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6B21\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u5272\u308A\u5F53\u3066\u308B\u3068\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u30B3\u30F3\u30D1\u30AF\u30C8\u5316\u3055\u308C\u3001\u4E00\u756A\u4E0A\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-compact.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u524D\u306B\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u672A\u4F7F\u7528\u306E\u30E1\u30E2\u30EA\u3092\u56DE\u53CE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4E00\u756A\u4E0A\u306E\uFF08\u6700\u5F8C\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\uFF09\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u524A\u9664\u3059\u308B\u3068\u3001\u305D\u306E\u3059\u3050\u4E0B\u306E\u89E3\u653E\u6E08\u307F\u306E\u30E1\u30E2\u30EA\u3068\u5171\u306B\u30E1\u30E2\u30EA\u304C\u3059\u3050\u306B\u89E3\u653E\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache-top.png",
    noShadow: "true",
    width: "700",
    mdxType: "Figure"
  }, "\u4E00\u756A\u4E0A\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u524A\u9664"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5834\u5408\u3001\u6B21\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u64CD\u4F5C\u3067\u306F\u30B3\u30F3\u30D1\u30AF\u30C8\u5316\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u6B21\u306E\u30B3\u30FC\u30C9\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u5168\u4F53\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Bitmap::cache(BITMAP_BITMAP1_ID);
Bitmap::cache(BITMAP_BITMAP2_ID);
Bitmap::cache(BITMAP_BITMAP3_ID);
...
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP2_ID);
...
Bitmap::cache(BITMAP_BITMAP4_ID);
...
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP3_ID);
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP4_ID);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "600",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-bitmap-animation.gif",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3068\u30AD\u30E3\u30C3\u30B7\u30E5\u524A\u9664"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);