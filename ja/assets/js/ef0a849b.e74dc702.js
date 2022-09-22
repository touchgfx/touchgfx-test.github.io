"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8183],{

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

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


/***/ }),

/***/ 85905:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65407);
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
  id: "examples",
  title: "Examples\uFF08\u4F8B\uFF09\u3068Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/examples",
  "id": "development/ui-development/working-with-touchgfx/examples",
  "title": "Examples\uFF08\u4F8B\uFF09\u3068Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/examples",
  "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/examples",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "examples",
    "title": "Examples\uFF08\u4F8B\uFF09\u3068Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C7\u30D0\u30C3\u30B0",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/debugging"
  },
  "next": {
    "title": "Keyboard Shortcuts\uFF08\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"
  }
};
const assets = {};



const toc = [{
  value: "Examples\uFF08\u4F8B\uFF09\u3068Demos\uFF08\u30C7\u30E2\uFF09",
  id: "ui-templates",
  level: 2
}, {
  value: "Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09",
  id: "online-applications",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u6A5F\u80FD\u3068\u53EF\u80FD\u6027\u3092\u8A73\u3057\u304F\u63A2\u7D22\u3059\u308B\u305F\u3081\u306B\u3001\u30E6\u30FC\u30B6\u306B\u306F\u4E8B\u524D\u306B\u4F5C\u6210\u3055\u308C\u305F\u8907\u6570\u306EExamples\u3068Demos\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306EExamples\u3068Demos\u306B\u306FTouchGFX Designer\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/startup-window"
  }), `Lobby`), `\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u3001\u3059\u3079\u3066\u306B\u7121\u6599\u4F7F\u7528\u3067\u304D\u308B\u753B\u50CF\u3084\u30B3\u30FC\u30C9\u306A\u3069\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\u304C\u72EC\u81EA\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u69CB\u7BC9\u3059\u308B\u3068\u304D\u306E\u30D9\u30FC\u30B9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 Examples\u3068Demos\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../development-introduction#application-templates-ats"
  }), `TouchGFX Board Setup`), `\u3068\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002 TouchGFX\u3092\u521D\u3081\u3066\u3054\u4F7F\u7528\u306B\u306A\u308B\u5834\u5408\u3001\u3053\u308C\u306FTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6A5F\u80FD\u306B\u95A2\u3059\u308B\u3072\u3089\u3081\u304D\u3084\u77E5\u8B58\u306E\u6700\u521D\u306E\u4E00\u6B69\u3068\u3057\u3066\u304A\u304A\u3044\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306EExamples\u3068Demos\u306F\u5358\u4E00\u306E\u6A5F\u80FD\u306B\u7126\u70B9\u3092\u7D5E\u308A\u3001\u305D\u308C\u4EE5\u5916\u306FTouchGFX\u306B\u3042\u308B\u3044\u304F\u3064\u304B\u306E\u7570\u306A\u308B\u6A5F\u80FD\u3092\u5B9F\u88C5\u3057\u3066\u3044\u307E\u3059\u3002 Demos\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#ui-templates"
  }), `Demo`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#online-applications"
  }), `Board Specific Demo`), `\u3068\u3044\u30462\u3064\u306E\u7570\u306A\u308B\u30BF\u30A4\u30D7\u306B\u5206\u5272\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-templates"
  }), `Examples\uFF08\u4F8B\uFF09\u3068Demos\uFF08\u30C7\u30E2\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Examples\u306F\u4E00\u822C\u7684\u306B\u5C0F\u578B\u3067\u81EA\u5DF1\u5B8C\u7D50\u578B\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3001\u4E3B\u306B\u3001\u5404\u7A2E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306A\u3069\u306E\u7279\u5B9A\u306E\u6A5F\u80FD\u306B\u7126\u70B9\u304C\u7D5E\u3089\u308C\u3066\u3044\u307E\u3059\u3002 Examples\u306F\u5404\u7A2ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u304A\u3088\u3073PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u5B9F\u884C\u53EF\u80FD\u3067\u3059\u304C\u3001\u6700\u9069\u306A\u4F53\u9A13\u3092\u5F97\u308B\u306B\u306F\u3001\u305D\u306EExample\u306E\u89E3\u50CF\u5EA6\u304C\u4F7F\u7528\u3059\u308B\u30DC\u30FC\u30C9\u306E\u89E3\u50CF\u5EA6\u306B\u9069\u5408\u3059\u308B\u3088\u3046\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002 \u4E00\u90E8\u306EExamples\u306F\u7279\u5B9A\u306E\u8272\u6DF1\u5EA6\u3067\u4F5C\u6210\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u306B\u3082\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8272\u6DF1\u5EA6\u306E\u4F4E\u3044\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u4E0A\u624B\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Demos\u306B\u306F\u3001TouchGFX\u30C1\u30FC\u30E0\u304C\u4F5C\u6210\u3057\u305F\u8907\u6570\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u542B\u307E\u308C\u3066\u304A\u308A\u3001\u3053\u308C\u3089\u306F\u9AD8\u54C1\u8CEA\u306EUI\u8A2D\u8A08\u3092\u4F7F\u7528\u3057\u305F\u3088\u308A\u591A\u304F\u306E\u6A5F\u80FD\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 TouchGFX\u306E\u6A5F\u80FD\u306B\u5BFE\u3059\u308B\u611F\u899A\u3092\u3064\u304B\u3080\u305F\u3081\u306E\u6700\u9069\u306A\u51FA\u767A\u70B9\u306B\u306A\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Example\u307E\u305F\u306FDemo\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u307E\u305ALobby\u306E\u5DE6\u4E0A\u306B\u3042\u308B"Examples"\u307E\u305F\u306F"Demos"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3057\u3001\u3054\u5E0C\u671B\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u304B\u3089\u4ED6\u306E\u89E3\u50CF\u5EA6\u3068\u8272\u6DF1\u5EA6\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u4E0A\u90E8\u306E"Select Hardware"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u76EE\u7684\u306E\u30DC\u30FC\u30C9\u3092\u9078\u629E\u3057\u3066"Select"\u3092\u62BC\u3057\u307E\u3059\u3002 \u6700\u5F8C\u306B\u3001'Create'\u3092\u62BC\u3057\u3066\u3001\u9078\u629E\u3057\u305FTouchGFX Board Setup\u3068Example\u307E\u305F\u306FDemo\u304B\u3089\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u5B9F\u884C\u3057\u3066\u3044\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001'Run Simulator'\u307E\u305F\u306F'Run Target'\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u624B\u9806\u3092\u793A\u3059\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u6B21\u306B\u8868\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",
    mdxType: "LoopVideo"
  }, "Example\u3092\u4F7F\u7528\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "online-applications"
  }), `Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Board Specific Demos\u306F\u3001\u7279\u5B9A\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u5411\u3051\u306E\u65E2\u88FD\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306A\u306E\u3067\u3001\u4F5C\u6210\u5BFE\u8C61\u4EE5\u5916\u306ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\uFF08PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306F\u5225\uFF09\u3002 \u3053\u308C\u3089\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u4E00\u822C\u7684\u306B\u975E\u5E38\u306B\u5927\u304D\u304F\u3001TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u8907\u6570\u306E\u7570\u306A\u308B\u6A5F\u80FD\u3092\u63A2\u7D22\u3057\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3068\u30B5\u30F3\u30D7\u30EB\u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Board Specific Demo\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u307E\u305ALobby\u306E\u5DE6\u4E0A\u306B\u3042\u308B'Demos'\u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30F3\u30C9\u30A6\u4E0A\u90E8\u306B\u3042\u308B"Board Specific Demo"\u30E9\u30D9\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002 \u3054\u5E0C\u671B\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001'Create'\u3092\u62BC\u3057\u3066\u5B8C\u4E86\u3057\u307E\u3059\u3002 \u5B9F\u884C\u3057\u3066\u3044\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001'Run Simulator'\u307E\u305F\u306F'Run Target'\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u624B\u9806\u3092\u793A\u3059\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u6B21\u306B\u8868\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",
    mdxType: "LoopVideo"
  }, "Board Specific Demo\u3092\u4F7F\u7528\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "Examples\u307E\u305F\u306FDemos\u3092\u4F7F\u7528\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u65B9\u6CD5\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    to: "../designer-user-guide/startup-window",
    mdxType: "Link"
  }, "Lobby\u306E\u30BB\u30AF\u30B7\u30E7\u30F3"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);