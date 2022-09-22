"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[149],{

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

/***/ 81325:
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
  id: "getting-help",
  title: "\u30D8\u30EB\u30D7\u60C5\u5831"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/getting-help",
  "id": "miscellaneous/getting-help",
  "title": "\u30D8\u30EB\u30D7\u60C5\u5831",
  "description": "\u884C\u304D\u8A70\u307E\u3063\u305F\u308A\u3001\u7279\u5B9A\u306E\u9818\u57DF\u3067\u8A73\u7D30\u306A\u60C5\u5831\u304C\u5FC5\u8981\u306B\u306A\u3063\u305F\u308A\u3057\u305F\u5834\u5408\u306B\u306F\u3001TouchGFX\u95A2\u9023\u306E\u554F\u984C\u306B\u5BFE\u3059\u308B\u30D8\u30EB\u30D7\u3092\u63A2\u3059\u305F\u3081\u3001\u591A\u304F\u306E\u65B9\u6CD5\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u307E\u305A\u306F\u3001\u3053\u306ETouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u76EE\u3092\u901A\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u672C\u66F8\u306FTouchGFX\u95A2\u9023\u306E\u554F\u984C\u306B\u5BFE\u3059\u308B\u6700\u5927\u306E\u60C5\u5831\u6E90\u3067\u3042\u308A\u3001\u591A\u304F\u306E\u9818\u57DF\u3092\u30AB\u30D0\u30FC\u3057\u3066\u3044\u307E\u3059\u3002 \u305D\u308C\u3067\u3082\u554F\u984C\u3078\u306E\u7B54\u3048\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30EA\u30BD\u30FC\u30B9\u3067\u8A73\u7D30\u306A\u60C5\u5831\u3092\u63A2\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/miscellaneous/getting-help.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/getting-help",
  "permalink": "/4.20/ja/docs/miscellaneous/getting-help",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-help",
    "title": "\u30D8\u30EB\u30D7\u60C5\u5831"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u65B0\u3057\u3044TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u3078\u306E\u66F4\u65B0",
    "permalink": "/4.20/ja/docs/miscellaneous/updating-to-a-new-touchgfx-version"
  },
  "next": {
    "title": "\u65E2\u77E5\u306E\u554F\u984C",
    "permalink": "/4.20/ja/docs/miscellaneous/known-issues"
  }
};
const assets = {};
const toc = [];
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u884C\u304D\u8A70\u307E\u3063\u305F\u308A\u3001\u7279\u5B9A\u306E\u9818\u57DF\u3067\u8A73\u7D30\u306A\u60C5\u5831\u304C\u5FC5\u8981\u306B\u306A\u3063\u305F\u308A\u3057\u305F\u5834\u5408\u306B\u306F\u3001TouchGFX\u95A2\u9023\u306E\u554F\u984C\u306B\u5BFE\u3059\u308B\u30D8\u30EB\u30D7\u3092\u63A2\u3059\u305F\u3081\u3001\u591A\u304F\u306E\u65B9\u6CD5\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u307E\u305A\u306F\u3001\u3053\u306ETouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u76EE\u3092\u901A\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u672C\u66F8\u306FTouchGFX\u95A2\u9023\u306E\u554F\u984C\u306B\u5BFE\u3059\u308B\u6700\u5927\u306E\u60C5\u5831\u6E90\u3067\u3042\u308A\u3001\u591A\u304F\u306E\u9818\u57DF\u3092\u30AB\u30D0\u30FC\u3057\u3066\u3044\u307E\u3059\u3002 \u305D\u308C\u3067\u3082\u554F\u984C\u3078\u306E\u7B54\u3048\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30EA\u30BD\u30FC\u30B9\u3067\u8A73\u7D30\u306A\u60C5\u5831\u3092\u63A2\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Community`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `ST Community\u306E\u30D1\u30D6\u30EA\u30C3\u30AF\uFF65`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"
  }), `\u30D5\u30A9\u30FC\u30E9\u30E0`), `\u306E\u30B5\u30A4\u30C8\u3067\u3001GUI\u304A\u3088\u3073TouchGFX\u95A2\u9023\u306E\u30C8\u30D4\u30C3\u30AF\u3092\u5C02\u9580\u306B\u53D6\u308A\u4E0A\u3052\u3066\u3044\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u958B\u767A\u306B\u95A2\u3059\u308B\u69D8\u3005\u306A\u554F\u984C\u3092\u30AB\u30D0\u30FC\u3059\u308B\u591A\u6570\u306E\u8CEA\u554F\u3068\u56DE\u7B54\u3001\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3084\u30D3\u30C7\u30AA\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3055\u3089\u306B\u3001myST\u30A2\u30AB\u30A6\u30F3\u30C8\uFF08\u7C21\u5358\u306B\u7121\u6599\u767B\u9332\u3067\u304D\u307E\u3059\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u7279\u5B9A\u306E\u5C02\u9580\u6280\u8853\u306B\u95A2\u3059\u308B\u8CEA\u554F\u3092\u884C\u3044\u56DE\u7B54\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30A6\u30A7\u30D3\u30CA\u30FC\u3068\u30D3\u30C7\u30AA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnHPh5mWtYkSLntmhvtZ4GyU"
  }), `MOOC TouchGFX\u30A6\u30A7\u30D3\u30CA\u30FC`), `\uFF08\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\uFF65\u30D3\u30C7\u30AA\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.touchgfx.com/resources/demo-videos/webinar-videos/"
  }), `\u305D\u306E\u4ED6\u306ETouchGFX\u30A6\u30A7\u30D3\u30CA\u30FC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnGoZA9veTEC4rFSE7xRAGgZ"
  }), `ST Youtube\u30C1\u30E3\u30F3\u30CD\u30EB`), `\uFF08TouchGFX\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30AA\u30F3\u30E9\u30A4\u30F3\uFF65\u30B5\u30DD\u30FC\u30C8`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/onlinesupport"
  }), `\u30AA\u30F3\u30E9\u30A4\u30F3\uFF65\u30B5\u30DD\u30FC\u30C8\uFF65\u30B5\u30A4\u30C8`), `\u3067\u306F\u3001Web\u30D5\u30A9\u30FC\u30E0\u7D4C\u7531\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5BFE\u3059\u308B\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3084TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u3001\u4F55\u3082\u60C5\u5831\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30ED\u30FC\u30AB\u30EB\u306EST\u30B5\u30DD\u30FC\u30C8\uFF65\u30C1\u30E3\u30CD\u30EB`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u304A\u5BA2\u69D8\u306E\u30ED\u30FC\u30AB\u30EB\u306EST\u62C5\u5F53\u8005\u304C\u76F4\u63A5\u652F\u63F4\u3057\u305F\u308A\u3001\u5FC5\u8981\u306A\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\uFF65\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX\u30A4\u30F3\u30D7\u30EA\u30E1\u30F3\u30BF\uFF08ST\u30D1\u30FC\u30C8\u30CA\u30FC\uFF09`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` UI\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3042\u3089\u3086\u308B\u6BB5\u968E\u3067\u3001\u9AD8\u5EA6\u306A\u30B9\u30AD\u30EB\u3092\u5099\u3048\u305FST\u5C02\u4EFB\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `TouchGFX\u30A4\u30F3\u30D7\u30EA\u30E1\u30F3\u30BF`), `\u304B\u3089\u652F\u63F4\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF08Web\u30DA\u30FC\u30B8\u3092\u4E0B\u3078\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B\u3068\u3001\u30A4\u30F3\u30D7\u30EA\u30E1\u30F3\u30BF\u306E\u30EA\u30B9\u30C8\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\uFF09\u3002 \u304A\u5BA2\u69D8\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3059\u3050\u306B\u7D44\u307F\u8FBC\u3081\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3084\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8A2D\u8A08\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u958B\u767A\u3068\u751F\u7523\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u306B\u304A\u3051\u308B\u30B5\u30FC\u30D3\u30B9\u3092\u30AB\u30D0\u30FC\u3057\u3066\u3044\u307E\u3059\u3002 \u5404\u793E\u3068\u3082\u3001TouchGFX\u304A\u3088\u3073STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u95A2\u3059\u308B\u9769\u65B0\u7684\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3084\u5E83\u7BC4\u306A\u77E5\u8B58\u3092\u5099\u3048\u3066\u304A\u308A\u3001\u304A\u5BA2\u69D8\u304C\u6B21\u306B\u7D44\u307F\u8FBC\u3080\u88FD\u54C1\u3067\u7406\u60F3\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u306B\u306A\u308B\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u81EA\u5206\u306E\u30A4\u30F3\u30D7\u30EA\u30E1\u30F3\u30BF\u3092\u898B\u3064\u3051\u3066\u3001\u30A2\u30A4\u30C7\u30A2\u304B\u3089\u6700\u7D42\u88FD\u54C1\u307E\u3067\u306E\u958B\u767A\u30D7\u30ED\u30BB\u30B9\u3092\u8FC5\u901F\u304B\u3064\u7C21\u5358\u306B\u9032\u3081\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `ST\u30D6\u30ED\u30B0`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` STM32\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3068TouchGFX\u306B\u95A2\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://blog.st.com/?s=touchgfx&submit="
  }), `\u30C6\u30AF\u30CB\u30AB\u30EB\uFF65\u30CB\u30E5\u30FC\u30B9`), `\u3092\u304A\u4F1D\u3048\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `ST\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9Web\u30B5\u30A4\u30C8`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` ST\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u30AB\u30D0\u30FC\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `Web\u30B5\u30A4\u30C8`), `\u3067\u3059\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);