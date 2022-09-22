"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2859],{

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

/***/ 88765:
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
  id: "languages-and-characters",
  title: "\u8A00\u8A9E\u3068\u6587\u5B57"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "id": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "title": "\u8A00\u8A9E\u3068\u6587\u5B57",
  "description": "TouchGFX\u3067\u306F\u3001\u56FD\u969B\u5316\u304A\u3088\u3073\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "languages-and-characters",
    "title": "\u8A00\u8A9E\u3068\u6587\u5B57"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  },
  "next": {
    "title": "MJPEG\u30D3\u30C7\u30AA",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/video"
  }
};
const assets = {};
const toc = [{
  value: "\u8A00\u8A9E",
  id: "languages",
  level: 2
}, {
  value: "\u6587\u5B57",
  id: "characters",
  level: 2
}, {
  value: "\u66F8\u5B57\u65B9\u5411",
  id: "writing-direction",
  level: 2
}, {
  value: "\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30E0",
  id: "contextual-shaping",
  level: 2
}, {
  value: "\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u8A00\u8A9E\u306E\u30EA\u30B9\u30C8",
  id: "list-of-supported-languages",
  level: 2
}, {
  value: "\u5DE6\u304B\u3089\u53F3\uFF08LTR\uFF09\u306E\u8A00\u8A9E",
  id: "left-to-right-languages",
  level: 3
}, {
  value: "\u53F3\u304B\u3089\u5DE6\uFF08RTL\uFF09\u306E\u8A00\u8A9E",
  id: "right-to-left-languages",
  level: 3
}, {
  value: "\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044\u8A00\u8A9E",
  id: "unsupported-languages",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u56FD\u969B\u5316\u304A\u3088\u3073\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u305F\u3081\u306BTouchGFX\u306F\u3001\u5E45\u5E83\u3044\u8A00\u8A9E\u3068\u6587\u5B57\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\uFF08\u66F8\u5B57\u65B9\u5411\u3084\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30E0\u306A\u3069\uFF09\u3092\u5224\u5225\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "languages"
  }), `\u8A00\u8A9E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u8A00\u8A9E\u306F\u3001Unicode\u306E\u57FA\u672C\u591A\u8A00\u8A9E\u6C34\u6E96\u306E\u8A00\u8A9E\u3067\u3001\u5DE6\u304B\u3089\u53F3\u307E\u305F\u306F\u53F3\u304B\u3089\u5DE6\u3078\u306E\u66F8\u5B57\u30B7\u30B9\u30C6\u30E0\u3092\u63A1\u7528\u3057\u3066\u3044\u308B\u8A00\u8A9E\u306B\u5236\u9650\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u30A2\u30E9\u30D3\u30A2\u8A9E\u3001\u4E2D\u56FD\u8A9E\u3001\u82F1\u8A9E\u306A\u3069\u591A\u304F\u306E\u8A00\u8A9E\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3001\u304A\u305D\u3089\u304F\u5236\u9650\u3055\u308C\u305F\u8A00\u8A9E\u306F\u308F\u305A\u304B\u3067\u3059\u3002 \u73FE\u5728\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u8A00\u8A9E\u306E\u4F8B\u3068\u3057\u3066\u3001\u30A6\u30EB\u30C9\u30A5\u30FC\u8A9E\u3068\u30DF\u30E3\u30F3\u30DE\u30FC\u8A9E\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "characters"
  }), `\u6587\u5B57`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u306E\u30A8\u30F3\u30B3\u30FC\u30C9\u306FUnicode\u6A19\u6E96\u306B\u57FA\u3065\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u300116\u30D3\u30C3\u30C8Unicode\u306A\u3069\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u73FE\u5728\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u8A00\u8A9E\u306E\u4F8B\u3068\u3057\u3066\u3001\u30A6\u30EB\u30C9\u30A5\u30FC\u8A9E\u3068\u30DF\u30E3\u30F3\u30DE\u30FC\u8A9E\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002 \u4E00\u90E8\u306E\u8A00\u8A9E\u3067\u306F\u3001\u6240\u5B9A\u306E\u30D5\u30A9\u30F3\u30C8\u306E\u7279\u6B8A\u6587\u5B57\u7528\u306B0xE000\uFF5E0xE3FF\u306E\u79C1\u7528\u9818\u57DF\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\uFF08\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\u306A\u3069\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "writing-direction"
  }), `\u66F8\u5B57\u65B9\u5411`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u5DE6\u304B\u3089\u53F3\uFF08LTR\uFF09\u304A\u3088\u3073\u53F3\u304B\u3089\u5DE6\uFF08RTL\uFF09\u306E\u66F8\u5B57\u30B7\u30B9\u30C6\u30E0\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 \u4E0A\u304B\u3089\u4E0B\uFF08Top-to-Bottom\uFF09\u306E\u66F8\u5B57\u30B7\u30B9\u30C6\u30E0\u306E\u30B5\u30DD\u30FC\u30C8\u306F\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTL\u3068\u306F\u30C6\u30AD\u30B9\u30C8\u304C\uFF08LTR\u3068\u306E\u5BFE\u6BD4\u3067\uFF09\u5F8C\u308D\u5411\u304D\u306B\u66F8\u5B57\u3055\u308C\u308B\u3068\u3044\u3046\u610F\u5473\u3067\u306F\u306A\u3044\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u5358\u8A9E\u304C\u53F3\u304B\u3089\u5DE6\u306B\u5411\u304B\u3063\u3066\u66F8\u304D\u8FBC\u307E\u308C\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002 \u30A2\u30E9\u30D3\u30A2\u8A9E\u3084\u30D8\u30D6\u30E9\u30A4\u8A9E\u3067\u306F\u3001\u3053\u308C\u304C\u6B63\u3057\u3044\u8A2D\u5B9A\u3067\u3059\u3002 \u3064\u307E\u308A\u3001"TouchGFX"\u304C"XFGhcuoT"\u3068\u66F8\u5B57\u3055\u308C\u308B\u306E\u3067\u306F\u306A\u304F\u3001RTL/LTR\u8A2D\u5B9A\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u5358\u8A9E\u306E\u5411\u304D\uFF08\u307E\u305F\u306F\u5358\u8A9E\u306E\u96C6\u5408\uFF09\u3092\u5236\u5FA1\u3067\u304D\u308B\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306ELTR\u304A\u3088\u3073RTL\u306E\u66F8\u5B57\u51E6\u7406\u306F\u3001\u3053\u306E2\u3064\u3092\u6DF7\u5408\u3057\u305F\u3082\u306E\u3092\u3042\u308B\u7A0B\u5EA6\u307E\u3067\u8A31\u5BB9\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u53CC\u65B9\u5411\u30B9\u30AF\u30EA\u30D7\u30C8\uFF65\u30B5\u30DD\u30FC\u30C8\u3068\u547C\u3070\u308C\u307E\u3059\u3002 \u53CC\u65B9\u5411\u306E\u66F8\u5B57\u306E\u516C\u5F0F\u898F\u5247\u306E\u30B5\u30D6\u30BB\u30C3\u30C8\u304C\u3001TouchGFX\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u305F\u3068\u3048\u3070"10:45"\u3001"3.14159"\u3001"STMicroelectronics TouchGFX"\u306A\u3069\u306F\u3001\u305F\u3068\u3048RTL\u30C6\u30AD\u30B9\u30C8\u306E\u4E2D\u3067\u3042\u3063\u3066\u3082\u3001LTR\u3067\u5B8C\u5168\u306B\u8A8D\u8B58\u3055\u308C\u66F8\u5B57\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTL\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u4E00\u90E8\u3092LTR\u3067\u66F8\u5B57\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u691C\u7D22\u3055\u308C\u9078\u308A\u5206\u3051\u3089\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u975ERTL\u6587\u5B57\u5217\u306E\u3059\u3079\u3066\u306E\u6587\u5B57\u304C\u9078\u308A\u5206\u3051\u3089\u308C\u307E\u3059\u3002 \u30B3\u30ED\u30F3\uFF08:\uFF09\u3001\u30C9\u30C3\u30C8\uFF08.\uFF09\u3001\u30B3\u30F3\u30DE\uFF08,\uFF09\u3001\u30B9\u30DA\u30FC\u30B9\uFF08`, `\xA0`, `\uFF09\u306A\u3069\u306E\u6587\u5B57\u306F\u30012\u3064\u306E\u9023\u7D9A\u3059\u308BLTR\u30D1\u30FC\u30C4\u3092\u300C\u7D50\u3073\u4ED8\u3051\u308B\u300D\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001"10:45"\u306F\u5358\u4E00\u306ELTR\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068\u3057\u3066\u51E6\u7406\u3055\u308C\u307E\u3059\u304C\u3001"Mark:"\uFF08\u672B\u5C3E\u304C\u30B3\u30ED\u30F3\uFF09\u306E\u30B3\u30ED\u30F3\u306F\u5DE6\u7AEF\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002\u30A2\u30E9\u30D3\u30A2\u8A9E\u3084\u30D8\u30D6\u30E9\u30A4\u8A9E\u3092\u4F7F\u7528\u3059\u308B\u56FD\u3067\u306F\u3001"`, `<`, `\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u30E1\u30C3\u30BB\u30FC\u30B8`, `>`, ` :Mark"\u3068\u306A\u308B\u3053\u3068\u304C\u671F\u5F85\u3055\u308C\u3001\u30B3\u30ED\u30F3\u304CRTL\u30C6\u30AD\u30B9\u30C8\u306E\u5DE6\u5074\u306B\u6765\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E9\u30C6\u30F3\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u4F7F\u7528\u3055\u308C\u308B\u6570\u5B57\uFF080\uFF5E9\uFF09\u3068\u30A2\u30E9\u30D3\u30A2\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u4F7F\u7528\u3055\u308C\u308B\u6570\u5B57\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u6570\u5B57\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u3001\u3059\u3079\u3066LTR\u6587\u5B57\u3068\u3057\u3066\u51E6\u7F6E\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTR\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068RTL\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u6DF7\u5728\u3057\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3001\u66F8\u5B57\u65B9\u5411\u304C\u975E\u5E38\u306B\u91CD\u8981\u3067\u3042\u308B\u3053\u3068\u306B\u3082\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u307E\u305F\u3001\u30C6\u30AD\u30B9\u30C8\u304CRTL\u306A\u306E\u304BLTR\u306A\u306E\u304B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5185\u306E\u6587\u5B57\u3092\u8ABF\u3079\u3066\u3082\u308F\u304B\u308A\u307E\u305B\u3093\u3002 \u6700\u521D\u306B\u30D8\u30D6\u30E9\u30A4\u8A9E\u306E\u5358\u8A9E\uFF08RTL\uFF09\u3001\u6B21\u306B\u82F1\u8A9E\u306E\u5358\u8A9E\uFF08LTR\uFF09\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u306E\u5834\u5408\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E\u51FA\u529B\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u66F8\u5B57\u65B9\u5411\u306B\u5DE6\u53F3\u3055\u308C\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u304CRTL\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u51FA\u529B\u306F"English werbeH"\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u5168\u4F53\u304CRTL\u306A\u306E\u3067\u3001\u6700\u521D\u306E\u5358\u8A9E\u304C\u53F3\u5074\u306B\u66F8\u5B57\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002\u3057\u304B\u3057\u30C6\u30AD\u30B9\u30C8\u304CLTR\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u51FA\u529B\u306F"werbeH English"\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u521D\u306E\u5358\u8A9E\u3092\u5DE6\u7AEF\u304B\u3089\u958B\u59CB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002 RTL\u3068LTR\u306E\u8A2D\u5B9A\u306F\u81EA\u52D5\u7684\u306B\u306F\u6C7A\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002\u82F1\u8A9E\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u30D8\u30D6\u30E9\u30A4\u8A9E\u306E\u5358\u8A9E\u304C\u542B\u307E\u308C\u308B\u3053\u3068\u3082\u3042\u308C\u3070\u3001\u30D8\u30D6\u30E9\u30A4\u8A9E\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u82F1\u8A9E\u306E\u5358\u8A9E\u304C\u542B\u307E\u308C\u308B\u3053\u3068\u3082\u3042\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTL\u30C6\u30AD\u30B9\u30C8\u306B\u95A2\u3059\u308B\u3082\u30461\u3064\u306E\u91CD\u8981\u4E8B\u9805\u306F\u3001\u62EC\u5F27\u6587\u5B57\u306E\u81EA\u52D5\u30B9\u30EF\u30C3\u30D4\u30F3\u30B0\u3067\u3059\u3002 \u62EC\u5F27\u6587\u5B57\u3068\u306F\u3001(\u3000)\u3000{\u3000}\u3000`, `[\u3000]`, `\u3000`, `<`, `\u3000`, `>`, ` \u306E\u3053\u3068\u3067\u3059\u3002 \u3053\u308C\u3089\u306F\u3059\u3079\u3066\u3001\u30C6\u30AD\u30B9\u30C8\u304C\u6B63\u3057\u304F\u898B\u3048\u308B\u3088\u3046\u306B\u53CD\u5BFE\u5074\u306E\u6587\u5B57\u3068\u81EA\u52D5\u7684\u306B\u30B9\u30EF\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002 \u30E9\u30C6\u30F3\u6587\u5B57\u304B\u3089\u30A2\u30E9\u30D3\u30A2\u6587\u5B57\u3078\u306E\u6570\u5B57\u306E\u81EA\u52D5\u5909\u63DB\u306F\u3001\u884C\u308F\u308C\u306A\u3044\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u5FC5\u8981\u306A\u5834\u5408\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3059\u308B\u524D\u306B\u30E6\u30FC\u30B6\u304C\u5909\u63DB\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "contextual-shaping"
  }), `\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u306E\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u306F\u3001\u6587\u5B57\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u5FDC\u3058\u3066\u3001\u7570\u306A\u308B\u5F62\u5F0F\u306E1\u3064\u4EE5\u4E0A\u306E\u6587\u5B57 / \u30B0\u30EA\u30D5\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002 \u4F8B\u3068\u3057\u3066\u3001\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306B\u306F\u3001\u5358\u8A9E\u5185\u306E\u6587\u5B57\u306E\u4F4D\u7F6E\u306B\u5FDC\u3058\u3066\u3001\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u5185\u306E\u6587\u5B57\u306B\u3055\u307E\u3056\u307E\u306A\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30E0\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX\u3067\u306F\u3001\u5408\u6210\u6587\u5B57\u306E\u7C21\u7565\u5316\u3055\u308C\u305F\u898F\u5247\u30BB\u30C3\u30C8\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3067\u3001\u8A00\u8A9E\u306E\u3053\u3046\u3057\u305F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30E0\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 \u3055\u3089\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30ED\u30B8\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3044\u304F\u3064\u304B\u306E\u767A\u97F3\u533A\u5225\u7B26\u53F7\u304C\u914D\u7F6E\u3055\u308C\u3001\u7E26\u4F4D\u7F6E\u304C\u6C7A\u5B9A\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u30A2\u30E9\u30D3\u30A2\u8A9E\u3001\u30BF\u30A4\u8A9E\u3001\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "list-of-supported-languages"
  }), `\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u8A00\u8A9E\u306E\u30EA\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u8A00\u8A9E\u3092\u7DB2\u7F85\u3059\u308B\u5B8C\u5168\u306A\u30EA\u30B9\u30C8\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u306F\u56F0\u96E3\u3067\u3059\u3002 \u4E00\u822C\u7684\u306B\u3001\u7279\u5225\u306A\u4E26\u3079\u66FF\u3048\u3084\u914D\u7F6E\u898F\u5247\u3092\u6301\u305F\u306A\u3044\u6A19\u6E96\u306E\u30B0\u30EA\u30D5\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\uFF08\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\uFF09\u3084\u30A2\u30E9\u30D3\u30A2\u8A9E\u306A\u3069\u306E\u3001\u7279\u5225\u306A\u898F\u5247\u3092\u6301\u3064\u4E00\u90E8\u306E\u8A00\u8A9E\u3082\u3001TouchGFX\u306B\u306F\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "left-to-right-languages"
  }), `\u5DE6\u304B\u3089\u53F3\uFF08LTR\uFF09\u306E\u8A00\u8A9E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30E9\u30C6\u30F3\u6587\u5B57\u3092\u4F7F\u7528\u3059\u308B\u5358\u7D14\u306A\u8A00\u8A9E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306B\u3001\u7279\u5225\u306A\u4E26\u3079\u66FF\u3048\u3084\u914D\u7F6E\u3092\u5FC5\u8981\u3068\u3057\u306A\u3044\u6587\u5B57\u3084\u30B0\u30EA\u30D5\u3092\u4F7F\u7528\u3059\u308B\u5358\u7D14\u306A\u8A00\u8A9E\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u8A00\u8A9E\u306B\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\uFF08\u305F\u3060\u3057\u4EE5\u4E0B\u306B\u9650\u5B9A\u3055\u308C\u307E\u305B\u3093\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DC\u30B9\u30CB\u30A2\u8A9E\u3001\u30D6\u30EB\u30AC\u30EA\u30A2\u8A9E\u3001\u30AF\u30ED\u30A2\u30C1\u30A2\u8A9E\u3001\u30C1\u30A7\u30B3\u8A9E\u3001\u30C7\u30F3\u30DE\u30FC\u30AF\u8A9E\u3001\u30AA\u30E9\u30F3\u30C0\u8A9E\u3001\u82F1\u8A9E\u3001\u30A8\u30B9\u30C8\u30CB\u30A2\u8A9E\u3001\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u8A9E\u3001\u30D5\u30E9\u30F3\u30B9\u8A9E\u3001\u30C9\u30A4\u30C4\u8A9E\u3001\u30CF\u30F3\u30AC\u30EA\u30FC\u8A9E\u3001\u30A4\u30BF\u30EA\u30A2\u8A9E\u3001\u30E9\u30C8\u30D3\u30A2\u8A9E\u3001\u30EA\u30C8\u30A2\u30CB\u30A2\u8A9E\u3001\u30CE\u30EB\u30A6\u30A7\u30FC\u8A9E\u3001\u30DD\u30FC\u30E9\u30F3\u30C9\u8A9E\u3001\u30DD\u30EB\u30C8\u30AC\u30EB\u8A9E\u3001\u30EB\u30FC\u30DE\u30CB\u30A2\u8A9E\u3001\u30BB\u30EB\u30D3\u30A2\u8A9E\u3001\u30B9\u30ED\u30D9\u30CB\u30A2\u8A9E\u3001\u30B9\u30ED\u30D0\u30AD\u30A2\u8A9E\u3001\u30B9\u30DA\u30A4\u30F3\u8A9E\u3001\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u8A9E\u3001\u30C8\u30EB\u30B3\u8A9E\u3001\u30A6\u30AF\u30E9\u30A4\u30CA\u8A9E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u305D\u306E\u4ED6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3044\u304F\u3064\u304B\u306E\u8A00\u8A9E\u3067\u306F\u3001\u5358\u7D14\u306A\u914D\u7F6E\u898F\u5247\u306B\u5F93\u3046\u3082\u306E\u306E\u3001\u7570\u306A\u308B\u6587\u5B57\u3068\u30B0\u30EA\u30D5\u306E\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u3053\u3046\u3057\u305F\u8A00\u8A9E\u3082\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u542B\u307E\u308C\u307E\u3059\uFF08\u305F\u3060\u3057\u4EE5\u4E0B\u306B\u9650\u5B9A\u3055\u308C\u307E\u305B\u3093\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E2D\u56FD\u8A9E\u3001\u30AE\u30EA\u30B7\u30E3\u8A9E\u3001\u65E5\u672C\u8A9E\u3001\u30ED\u30B7\u30A2\u8A9E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u305D\u306E\u4ED6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u8A9E\u306F\u9650\u5B9A\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u58F0\u8ABF\u8A18\u53F7\u306FTouchGFX\u306E\u898F\u5247\u3092\u4F7F\u7528\u3057\u3066\uFF08\u7E26\u306B\uFF09\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\uFF08\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\uFF09\u3082\u9650\u5B9A\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u4E00\u90E8\u306E\u6587\u5B57\u306E\u914D\u7F6E\u306B\u5C11\u3057\u8AA4\u308A\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001\u30C6\u30AD\u30B9\u30C8\u304C\u8AAD\u3081\u306A\u3044\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "right-to-left-languages"
  }), `\u53F3\u304B\u3089\u5DE6\uFF08RTL\uFF09\u306E\u8A00\u8A9E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u305D\u306E\u4ED6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D8\u30D6\u30E9\u30A4\u8A9E\u3001\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u8A9E\u3001\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3\u8A9E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u3055\u307E\u3056\u307E\u306A\u5F62\u5F0F\uFF08\u5358\u72EC\u5F62\u3001\u982D\u5B57\u3001\u4E2D\u5B57\u3001\u5C3E\u5B57\uFF09\u306E\u3055\u307E\u3056\u307E\u306A\u30EA\u30AC\u30C1\u30E3\u304C\u3042\u308B\u8A00\u8A9E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30E9\u30D3\u30A2\u8A9E\uFF084\u6587\u5B57\u3092\u8D85\u3048\u308B\u30B7\u30FC\u30B1\u30F3\u30B9\u306F\u8A8D\u8B58\u3055\u308C\u305A\u30011\u3064\u306E\u30EA\u30AC\u30C1\u30E3\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002 Sallallahou Alayhe Wasallam\u3001Jallajalalouhou\u3001Rial Sign\u304C\u8A72\u5F53\u3057\u307E\u3059\uFF09\u3002 \u4E00\u90E8\u306E\u767A\u97F3\u533A\u5225\u7B26\u53F7\u306E\u914D\u7F6E\u306B\u5C11\u3057\u8AA4\u308A\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DA\u30EB\u30B7\u30A2\u8A9E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30EC\u30FC\u8A9E\uFF08\u5358\u72EC\u5F62\u3067\u306F\u3001\u0762 "Keheh with dot above"\u306E\u307F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "unsupported-languages"
  }), `\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044\u8A00\u8A9E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u8A00\u8A9E\u306F\u3001\u30EA\u30AC\u30C1\u30E3\u3001\u4E8C\u91CD\u5B57\u3001\u7E26\u4F4D\u7F6E\u306E\u591A\u7528\u306B\u4F9D\u5B58\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30EB\u30C9\u30A5\u30FC\u8A9E\u3001\u30DF\u30E3\u30F3\u30DE\u30FC\u8A9E`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);