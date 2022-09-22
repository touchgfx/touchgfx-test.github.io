"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5487],{

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

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 1263:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
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
  id: "simulator",
  title: "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/simulator",
  "id": "development/ui-development/working-with-touchgfx/simulator",
  "title": "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/simulator",
  "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/simulator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "simulator",
    "title": "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  },
  "next": {
    "title": "Compiling-and-Flashing\uFF08\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }
};
const assets = {};



const toc = [{
  value: "\u5B9F\u884C\u65B9\u6CD5",
  id: "how-to-run",
  level: 2
}, {
  value: "TouchGFX Designer\u306E\u4F7F\u7528",
  id: "using-touchgfx-designer",
  level: 3
}, {
  value: "TouchGFX\u74B0\u5883\u306E\u4F7F\u7528",
  id: "using-touchgfx-environment",
  level: 3
}, {
  value: "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u6A5F\u80FD",
  id: "simulator-features",
  level: 2
}, {
  value: "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u307F\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9",
  id: "simulator-only-user-code",
  level: 2
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u3068\u30ED\u30C3\u30AF\u89E3\u9664",
  id: "locking-and-unlocking-the-framebuffer",
  level: 2
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF",
  id: "locking-the-framebuffer",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u89E3\u9664",
  id: "unlocking-the-framebuffer",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u89E3\u9664\u3092\u5FD8\u308C\u305F\u5834\u5408",
  id: "forgetting-to-unlock-the-framebuffer",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u7570\u306A\u308B\u30B5\u30A4\u30BA\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3",
  id: "simulating-hardware-framebuffer-with-a-different-size-than-the-display",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX UI\u306E\u4F5C\u6210\u3067\u306F\u3001UI\u306E\u4ED5\u69D8\u306B\u5408\u81F4\u3055\u305B\u308B\u305F\u3081\u306B\u3001\u591A\u304F\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8A73\u7D30\u90E8\u306E\u5FAE\u8ABF\u6574\u304C\u5FC5\u8981\u306B\u306A\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u30D7\u30ED\u30BB\u30B9\u3092\u30B9\u30D4\u30FC\u30C9\u30A2\u30C3\u30D7\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C6\u30B9\u30C8\u3068\u30C7\u30D0\u30C3\u30B0\u306E\u30BF\u30FC\u30F3\u30A2\u30E9\u30A6\u30F3\u30C9\uFF65\u30BF\u30A4\u30E0\u3092\u77ED\u7E2E\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u30DC\u30FC\u30C9\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u66F8\u304D\u63DB\u3048\u306B\u306F\u9577\u3044\u6642\u9593\u304C\u304B\u304B\u308B\u3053\u3068\u304C\u591A\u3044\u306E\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u308F\u305A\u304B\u306A\u5909\u66F4\u306E\u305F\u3073\u306B\u3053\u308C\u3092\u884C\u3046\u3068\u3001\u958B\u767A\u901F\u5EA6\u304C\u78BA\u5B9F\u306B\u4F4E\u4E0B\u3057\u307E\u3059\u3002 \u3053\u308C\u3092\u7DE9\u548C\u3059\u308B\u305F\u3081\u306B\u3001TouchGFX PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306F\u304A\u4F7F\u3044\u306E\u958B\u767A\u30C4\u30FC\u30EB\u3078\u306E\u512A\u308C\u305F\u8FFD\u52A0\u6A5F\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306F\u4F7F\u7528\u3059\u308BPC\u5411\u3051\u306B\u5358\u7D14\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u3001\u305D\u3053\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u30DC\u30FC\u30C9\u3067\u306F\u306A\u304FPC\u7528\u306B\u4F5C\u6210\u3055\u308C\u305F\u8A55\u4FA1\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30B3\u30FC\u30C9\u304A\u3088\u3073\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u3092\u9664\u3044\u3066\u3001\u5B9F\u884C\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3068\u307E\u3063\u305F\u304F\u540C\u3058\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u914D\u7F6E\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3001\u30B9\u30C6\u30FC\u30C8\uFF65\u30DE\u30B7\u30F3\u306A\u3069\u3092\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3068\u307E\u3063\u305F\u304F\u540C\u3058\u304F\u3089\u3044\u6B63\u78BA\u306B\u30C6\u30B9\u30C8\u3067\u304D\u308B\u306E\u3067\u3059\u3002 \u5FC5\u8981\u306A\u5834\u5408\u306F\u3001Visual Studio\u306A\u3069\u306EIDE\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30FC\u30C9\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\u30C7\u30D0\u30C3\u30B0`), `\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u5F53\u7136\u306A\u304C\u3089\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u89E3\u6790\u3084\u5B9F\u969B\u306E\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\uFF65\u30B7\u30B9\u30C6\u30E0\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306A\u3069\u306F\u3001\u30E6\u30FC\u30B6\u306E\u30DC\u30FC\u30C9\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",
    mdxType: "LoopVideo"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "how-to-run"
  }), `\u5B9F\u884C\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-designer"
  }), `TouchGFX Designer\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u304B\u3089\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u8D77\u52D5\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u53F3\u4E0A\u9685\u306E"Run Simulator"\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u304B\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u4E0A\u306E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5`), ` \u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u304B\u3089\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u8D77\u52D5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-environment"
  }), `TouchGFX\u74B0\u5883\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u74B0\u5883\u3092\u4F7F\u7528\u3057\u3066\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u8D77\u52D5\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u624B\u9806\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u74B0\u5883\u3092\u958B\u304F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5834\u6240\u306B\u79FB\u52D5\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u307F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F8B: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F8B: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1/TouchGFX/`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `make -f simulator/gcc/Makefile -j6`), `\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `./build/bin/simulator.exe`), `\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u8D77\u52D5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u624B\u9806\u306E3\u30684\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3057\u305F\u3089\u5FC5\u305A\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-features"
  }), `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A6\u30B9\u5165\u529B\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u306E\u4ED6\u306B\u3082\u3001TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306B\u306F\u4EE5\u4E0B\u306B\u793A\u3059\u3088\u3046\u306A\u4FBF\u5229\u306A\u6A5F\u80FD\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\u6A5F\u80FD")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30DD\u30A4\u30F3\u30BF\u5EA7\u6A19\u3068\u305D\u306E\u5EA7\u6A19\u306E\u30D4\u30AF\u30BB\u30EB\u306ERGB\u30AB\u30E9\u30FC\u306E\u8868\u793A\uFF0816\u9032\u6570\uFF09\u3092\u6709\u52B9\u5316 / \u7121\u52B9\u5316\u3057\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7121\u52B9\u5316\u9818\u57DF\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3092\u6709\u52B9\u5316 / \u7121\u52B9\u5316\u3057\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3092\u64AE\u308A\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots"), "\u30D5\u30A9\u30EB\u30C0\u306B\u305D\u306E\u753B\u50CF\u3092\u7F6E\u304D\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u6B21\u306E50\u30D5\u30EC\u30FC\u30E0\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3092\u64AE\u308A\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots"), "\u30D5\u30A9\u30EB\u30C0\u306B\u305D\u306E\u753B\u50CF\u3092\u7F6E\u304D\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Shift + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3092\u64AE\u308A\u3001\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u305D\u306E\u753B\u50CF\u3092\u7F6E\u304D\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30B9\u30AD\u30F3\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30B9\u30AD\u30F3\u3092\u6709\u52B9\u5316 / \u7121\u52B9\u5316\u3057\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30B9\u30AD\u30F3\u304C\u4F7F\u7528\u3055\u308C\u3066", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u3044\u306A\u3044"), "\u5834\u5408\u306F\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u5883\u754C\u3092\u6709\u52B9\u5316 / \u7121\u52B9\u5316\u3057\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F5")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "FrontendApplication::changeToStartScreen()\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u753B\u9762\u306B\u76F4\u63A5\u623B\u3057\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F9")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30C6\u30A3\u30C3\u30AF\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u9001\u4FE1\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u3067\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4E00\u6642\u505C\u6B62\u3057\u307E\u3059\u3002 F9\u30AD\u30FC\u3092\u3082\u3046\u4E00\u5EA6\u62BC\u3059\u3068\u3001\u901A\u5E38\u306E\u5B9F\u884C\u304C\u518D\u958B\u3055\u308C\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F10")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, '\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4E00\u6642\u505C\u6B62\u4E2D\uFF08F9\u30AD\u30FC\u306E\u62BC\u4E0B\u5F8C\uFF09\u3001F10\u30AD\u30FC\u3092\u62BC\u3059\u3053\u3068\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B1\u30C6\u30A3\u30C3\u30AF\u3060\u3051\u9001\u4FE1\u3057\u3001\u305D\u308C\u306B\u3088\u3063\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092"1\u30B9\u30C6\u30C3\u30D7"\u9032\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002')), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "ESC")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u9589\u3058\u307E\u3059\u3002"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-only-user-code"
  }), `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u307F\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4F7F\u7528\u6642\u306B\u306E\u307F\u5B9F\u884C\u304C\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u304C\u3042\u308B\u5834\u5408\u306F\u3001C++\u30B3\u30FC\u30C9\u5185\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), `\u3092\u6B21\u306E\u3088\u3046\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
  // Your simulator specific user code here
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D0\u30C3\u30B0\uFF65\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u51FA\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `\u95A2\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306Fprintf\u3068\u4F3C\u305F\u95A2\u6570\u3067\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30B3\u30FC\u30C9\u306E\u4F5C\u6210\u6642\u306B\u542B\u307E\u308C\u308B\u3060\u3051\u306A\u306E\u3067\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u5B9F\u884C\u6642\u306B\u5E72\u6E09\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E\u5834\u5408\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), `\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int i = 0;
touchgfx_printf("Application is running through simulator! \\n");
touchgfx_printf("Print our value for integer i = %i \\n", i);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "locking-and-unlocking-the-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u3068\u30ED\u30C3\u30AF\u89E3\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u76F4\u63A5\u64CD\u4F5C\u3059\u308B\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u66F8\u304D\u8FBC\u3080\u524D\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u304C\u5FC5\u8981\u3067\u3059\u3002\u3055\u3089\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u66F8\u8FBC\u307F\u5B8C\u4E86\u5F8C\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u89E3\u9664\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "locking-the-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30ED\u30C3\u30AF\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u30B3\u30FC\u30C9\uFF65\u30B9\u30CB\u30DA\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u623B\u308A\u5024\u306F16\u30D3\u30C3\u30C8\u306E\u30DD\u30A4\u30F3\u30BF\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u9069\u5207\u306A\u30DD\u30A4\u30F3\u30BF\uFF65\u30BF\u30A4\u30D7\u306B\u30AD\u30E3\u30B9\u30C8\u3057\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3084\u3059\u304F\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unlocking-the-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u89E3\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u5F8C\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30ED\u30C3\u30AF\u89E3\u9664\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL::getInstance()->unlockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "forgetting-to-unlock-the-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u89E3\u9664\u3092\u5FD8\u308C\u305F\u5834\u5408`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u89E3\u9664\u3092\u5FD8\u308C\u308B\u3068\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304C\u30D5\u30EA\u30FC\u30BA\u3057\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308B\u307E\u3067\u6C38\u9060\u306B\u5F85\u3061\u7D9A\u3051\u307E\u3059\u3002 \u3053\u306E\u72B6\u6CC1\u3092\u691C\u51FA\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u3001\u30D5\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304CTouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u9593\u306B\u30ED\u30C3\u30AF\u3055\u308C\u308B\u3088\u3046\u306B\u8981\u6C42\u3055\u308C\u305F\u5834\u5408\u3001\u8B66\u544A\u306E\u901A\u77E5\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 Microsoft Visual Studio\u304B\u3089\u8868\u793A\u3055\u308C\u308B\u30A8\u30E9\u30FC\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306EWindows\u30C0\u30A4\u30A2\u30ED\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30BD\u30FC\u30EB\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u5834\u5408\u3001\u30A8\u30E9\u30FC\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306E\u30B3\u30F3\u30BD\u30FC\u30EB\u51FA\u529B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "simulating-hardware-framebuffer-with-a-different-size-than-the-display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u7570\u306A\u308B\u30B5\u30A4\u30BA\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u306F\u3001\u5B9F\u969B\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3088\u308A\u3082\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B5\u30A4\u30BA\u304C\u5C0F\u3055\u304F\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3067\u3082\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306B\u3088\u308B\u51E6\u7406\u304C\u53EF\u80FD\u3067\u3001\u3053\u308C\u306F\u3001simulator/main.cpp\u30D5\u30A1\u30A4\u30EB\u5185\u3067touchgfx_generic_init()\u306E\u547C\u3073\u51FA\u3057\u306E\u76F4\u5F8C\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `touchgfx_generic_init()\u306B\u6E21\u3055\u308C\u308B\u5E45\u3068\u9AD8\u3055\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B5\u30A4\u30BA\u3068\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u304C\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u304C\u7570\u306A\u308B\u5834\u5408\u306F\u3001\u5358\u7D14\u306B\u3001touchgfx_generic_init()\u306E\u547C\u3073\u51FA\u3057\u306E\u5F8C\u306BsetFrameBufferSize()\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u5B9F\u969B\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001\u4EE5\u4E0B\u3067\u3042\u308C\u3070\u3001SIM_WIDTH=800\u3001SIM_HEIGHT=480\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);
hal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);