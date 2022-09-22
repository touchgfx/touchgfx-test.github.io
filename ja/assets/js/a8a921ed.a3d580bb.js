"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1408],{

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

/***/ 3716:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6771);
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
  id: "achieving-better-performance-with-cacheable-container",
  title: "\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "id": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "title": "\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "permalink": "/4.20/ja/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "achieving-better-performance-with-cacheable-container",
    "title": "\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/ja/docs/category/scenarios-1"
  },
  "next": {
    "title": "\u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F",
    "permalink": "/4.20/ja/docs/development/ui-development/scenarios/loading-images-at-runtime"
  }
};
const assets = {};





const toc = [{
  value: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3078\u306E\u5F71\u97FF",
  id: "performance-impact",
  level: 2
}, {
  value: "\u30C6\u30B9\u30C8\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3",
  id: "test-application",
  level: 2
}, {
  value: "\u8907\u96D1\u306A\u30B3\u30F3\u30C6\u30CA\u306E\u518D\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
  id: "performance-of-redrawing-complex-containers",
  level: 2
}, {
  value: "\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A",
  id: "improving-performance-through-caching",
  level: 2
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3044\u304F\u3064\u304B\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B7\u30CA\u30EA\u30AA\u306B\u304A\u3044\u3066\u3001RAM\u3092\u4F7F\u7528\u3057\u3066\u4E00\u90E8\u306E\u518D\u5229\u7528\u53EF\u80FD\u306A\u63CF\u753B\u3092\u4FDD\u5B58\u3059\u308B\u3053\u3068\u3067\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A\u3092\u9054\u6210\u3059\u308B\u65B9\u6CD5\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30C3\u30B0\u307E\u305F\u306F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF08\u753B\u50CF\u3084\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306A\u3069\uFF09\u3092\u79FB\u52D5\u3059\u308B\u5834\u5408\u3001TouchGFX\u3067\u306F\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u65B0\u3057\u3044\u4F4D\u7F6E\u306B\u3053\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u305D\u308C\u307E\u3067\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AB\u30D0\u30FC\u3057\u3066\u3044\u305F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u90E8\u5206\u3067\u3042\u3063\u3066\u3082\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3001\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3001\u30B7\u30A7\u30FC\u30D7\u3001\u307E\u305F\u306F\u5927\u304D\u306A\u900F\u904E\u753B\u50CF\u306A\u3069\u3001\u8907\u96D1\u306A\u8A08\u7B97\u3092\u8981\u3059\u308B\u3082\u306E\u3067\u3042\u308B\u5834\u5408\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u52B9\u7387\u7684\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u306E\u306F\u56F0\u96E3\u3067\u3059\u3002\u3053\u308C\u3089\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u305B\u305A\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002 \u3053\u306E\u7D50\u679C\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u518D\u63CF\u753B\u306B\u4F55\u30DF\u30EA\u79D2\u3082\u304B\u304B\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u3082\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u3092\u4F7F\u7528\u3057\u3066\u3001\u6642\u9593\u306E\u304B\u304B\u308B\u518D\u63CF\u753B\u3092\u907F\u3051\u308B\u3053\u3068\u3067\u3001\u8A08\u7B97\u304C\u8907\u96D1\u306A\u8981\u7D20\u3092\u542B\u3080\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u901F\u5EA6\u3092\u4E0A\u3052\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002  \u3053\u306E\u8A18\u4E8B\u3067\u306E\u6E2C\u5B9A\u306FSTM32F429Discovery\u30DC\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u884C\u308F\u308C\u307E\u3057\u305F\u304C\u3001\u4E00\u822C\u7684\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306B\u3088\u308B\u624B\u6CD5\u306F\u3001\u305D\u306E\u4ED6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002 \u63D0\u4F9B\u3055\u308C\u3066\u3044\u308BRAM\u306E\u4E00\u90E8\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4F5C\u6210\u306E\u305F\u3081\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7"), "\u300D\u3082\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-impact"
  }), `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3078\u306E\u5F71\u97FF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306E\u8A08\u7B97\u306B\u6642\u9593\u306E\u304B\u304B\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u79FB\u52D5\u306F\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u3092\u53CA\u307C\u3059\u306E\u3067\u3001\u591A\u304F\u306E\u5C0F\u3055\u3044\u30B9\u30C6\u30C3\u30D7\u3092\u5C55\u958B\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u4F4E\u901F\u304B\u3064\u920D\u3044\u52D5\u4F5C\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30D5\u30EC\u30FC\u30E0\u3054\u3068\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u304B\u3089\u3067\u3059\u3002 \u9AD8\u901F\u3067\uFF08\u6642\u9593\u5185\u306B\uFF09\u5B8C\u4E86\u3059\u308B\u3088\u3046\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3059\u308B\u3068\u3001\u500B\u3005\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u5927\u304D\u304F\u306A\u308A\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u30B9\u30E0\u30FC\u30BA\u306B\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u793A\u3059\u306E\u306FSTM32F429-DISCO\u30DC\u30FC\u30C9\uFF08240x320\uFF09\u306E\u5B9F\u884C\u4F8B\u3067\u3001\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30B3\u30F3\u30C6\u30CA\u304C\u5782\u76F4\u306B\u4E0A\u5411\u304D\u306B\u79FB\u52D5\u3059\u308B\u3068\u540C\u6642\u306B\u3001\u540C\u69D8\u306E\u30B3\u30F3\u30C6\u30CA\u304C\u4E0B\u304B\u3089\u79FB\u52D5\u3057\u3066\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u30D3\u30C7\u30AA\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/toggle-button"
  }), `ToggleButton`), `\u30B9\u30A4\u30C3\u30C1\u3067\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306E\u30AA\u30F3/\u30AA\u30D5\u3092\u5207\u308A\u66FF\u3048\u3066\u3044\u307E\u3059\u3002 \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u9055\u3044\u304C\u306F\u3063\u304D\u308A\u3068\u898B\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u79FB\u52D5\u3059\u308B2\u3064\u306E\u30B3\u30F3\u30C6\u30CA\u306F\u305D\u308C\u305E\u308C\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u30DC\u30C3\u30AF\u30B9`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC`), `\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 \u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u306F\u3001\u53CC\u7DDA\u5F62\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3068\u30B0\u30ED\u30FC\u30D0\u30EB\uFF65\u30A2\u30EB\u30D5\u30A1174\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u304A\u308A\u3001\u63CF\u753B\u306B\u975E\u5E38\u306B\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306B\u304B\u304B\u308B\u6642\u9593\u306F\u3001STM32F429-DISCO\u30DC\u30FC\u30C9\u4E0A\u3067\u304A\u3088\u305D100ms\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-application"
  }), `\u30C6\u30B9\u30C8\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76F8\u4E92\u306B\u95A2\u9023\u3059\u308B2\u3064\u306E\u8981\u7D20\u3092\u79FB\u52D5\u3055\u305B\u308B\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u3068\u3044\u3046\u540D\u524D\u306E\u89AA\u30B3\u30F3\u30C6\u30CA\u5185\u306B\u3053\u308C\u3089\u3092\u914D\u7F6E\u3057\u307E\u3059\u3002\u3053\u306E\u89AA\u30B3\u30F3\u30C6\u30CA\u306F\u3044\u305A\u308C\u304B\u306E\u5B50\u30B3\u30F3\u30C6\u30CA\u306E2\u500D\u306E\u9AD8\u3055\u306B\u6307\u5B9A\u3059\u308B\u306E\u3067\u3001\u3053\u3053\u3067\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `240x640\uFF082*320\uFF09`), `\u306E\u9AD8\u3055\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 TouchGFX Designer\u3067\u30B3\u30F3\u30C6\u30CA\u3092\u79FB\u52D5\u30A2\u30CB\u30E1\u30FC\u30BF\u3068\u3057\u3066\u5BA3\u8A00\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u30B3\u30F3\u30C6\u30CA\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30A3\u30C3\u30AF\u3092\u53D7\u3051\u53D6\u308A\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u6E2C\u5B9A\u4E2D\u306B\u6642\u9593\u306E\u7D4C\u904E\u3068\u3068\u3082\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.png",
    mdxType: "Figure"
  }, "\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u306E\u30C6\u30B9\u30C8\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6982\u8981"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u3068\u3044\u3046\u540D\u524D\u306E\u4E0A\u65B9\u306E\u30B3\u30F3\u30C6\u30CA\u306F\u3001x=0, y=0\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u3068\u3044\u3046\u540D\u524D\u306E\u4E0B\u65B9\u306E\u30B3\u30F3\u30C6\u30CA\u306F\u3001\u89AA\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u5185\u3067container1\u306E\u771F\u4E0B\u306E\u3001x=0, y=320\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u5185\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u3092\u79FB\u52D5\u3059\u308B\u3068\u3001\u3053\u306E2\u3064\u306E\u8981\u7D20\u3082\u4E00\u7DD2\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u3092x=0, y=-320\u306E\u4F4D\u7F6E\u306B\u79FB\u52D5\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u306F\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u304C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u306F\u5B8C\u5168\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u30892\u3064\u306E\u72B6\u614B\u9593\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u3001TouchGFX Designer\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u30B3\u30FC\u30C9\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u3092\u3001\u4E0B\u306B\u3042\u308B\u5834\u5408\u306F\u4E0A\u306B\u3001\u3059\u3067\u306B\u4E0A\u306B\u3042\u308B\u5834\u5408\u306F\u4E0B\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002 \u5206\u304B\u308A\u3084\u3059\u304F\u3059\u308B\u305F\u3081\u306B\u3001\u3053\u306E\u30B3\u30FC\u30C9\u306F\u30D3\u30E5\u30FC\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleClickEvent`), `\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30E9\u306B\u633F\u5165\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\uFF08ToggleButton\u306E\u4E0B\u306E\uFF09\u3069\u3053\u304B\u3092\u30BF\u30C3\u30C1\u3059\u308B\u3068\u5E38\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-12}",
    "{9-12}": true
  }), `void Screen1View::handleClickEvent(const ClickEvent& evt)
{
    //Forward event to base View (for the ToggleButton to work)
    View::handleClickEvent(evt);
    //If touch is released and y > 50 (below the ToggleButton), move masterContainer
    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)
    {
        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;
        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,
                            20 /* ticks */,
                            EasingEquations::cubicEaseInOut,
                            EasingEquations::cubicEaseInOut);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-of-redrawing-complex-containers"
  }), `\u8907\u96D1\u306A\u30B3\u30F3\u30C6\u30CA\u306E\u518D\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306B\u8FF0\u3079\u305F\u3088\u3046\u306B\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5C0F\u3055\u306A\u5404\u30B9\u30C6\u30C3\u30D7\u3054\u3068\u306B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u6642\u9593\u304C\u304B\u304B\u308B\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u30011\u30D5\u30EC\u30FC\u30E0\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306F\u304A\u3088\u305D100ms\u306B\u306A\u308A\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u6BCE\u79D210\u30D5\u30EC\u30FC\u30E0\uFF0810fps\uFF09\u3067\u3059\u3002 \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u306720\u30D5\u30EC\u30FC\u30E0\u306A\u306E\u3067\u3001\u304A\u3088\u305D2\u79D2\u304B\u304B\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32F429-DISCO\u8A55\u4FA1\u30AD\u30C3\u30C8\u4E0A\u3067\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306FGPIO G14\u306E\u30C7\u30B8\u30BF\u30EB\u4FE1\u53F7\u3068\u3057\u3066\u5F97\u3089\u308C\u307E\u3059\u3002 VSYNC\u4FE1\u53F7\u306FG13\u3067\u5F97\u3089\u308C\u307E\u3059\u3002 GPIO\u306E\u8A2D\u5B9A\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `GPIO.cpp`), `\u30D5\u30A1\u30A4\u30EB\u3067\u884C\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u753B\u50CF\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u3092\u4E0A\u5411\u304D\u306B\u79FB\u52D5\u3055\u305B\u305F\u3068\u304D\u306E\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306EVSYNC\u3068RENDER_TIME\u306E\u6E2C\u5B9A\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",
    mdxType: "Figure"
  }, "vsync\u3068\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306E\u6E2C\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306F\u6700\u521D\u306E\u4FE1\u53F7\uFF08\u30A2\u30AF\u30C6\u30A3\u30D6\uFF65\u30ED\u30FC\uFF09\u3067\u3059\u3002 \u79FB\u52D5\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u521D\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306F\u300199.29ms\u3067\u3042\u308B\u3053\u3068\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u4FE1\u53F7\u306FVSYNC\u3067\u3001\u30D4\u30AF\u30BB\u30EB\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30AF\u30ED\u30C3\u30AF\u51FA\u529B\u3055\u308C\u308B\u3068\u304D\u306B\u3001\u5404\u30D5\u30EC\u30FC\u30E0\u3067\u30CF\u30A4\uFF08\u9AD8\uFF09\u304B\u3089\u30ED\u30FC\uFF08\u4F4E\uFF09\u306B\u9077\u79FB\u3057\u307E\u3059\u3002 \u4E0A\u306E\u6E2C\u5B9A\u3067\u306F\u30011\u30D5\u30EC\u30FC\u30E0\u306E\u63CF\u753B\u6642\u9593\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E7\u30D5\u30EC\u30FC\u30E0\u5206\u306E\u6642\u9593\u306B\u76F8\u5F53\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 8\u756A\u76EE\u306EVSYNC\u4FE1\u53F7\u3067\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002 \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u4E2D\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u306F\uFF08\u5225\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\uFF09\u305D\u308C\u307E\u3067\u306B\u63CF\u753B\u3055\u308C\u305F\u30D5\u30EC\u30FC\u30E0\u304C\u7E70\u308A\u8FD4\u3057\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "improving-performance-through-caching"
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306B\u793A\u3057\u305F\u79FB\u52D5\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30B3\u30F3\u30C6\u30CA\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3092\u30E1\u30E2\u30EA\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u3067\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5411\u4E0A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u305F\u5F8C\u306F\u3001\u305D\u306E\u30E1\u30E2\u30EA\u5185\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u308B\u30D4\u30AF\u30BB\u30EB\u3092\uFF08DMA\u3092\u4F7F\u7528\u3057\u3066\uFF09\u5358\u7D14\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u4F7F\u7528\u3057\u3066\u8907\u96D1\u306A\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u307F\u306E\u4F7F\u7528\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u6BCE\u79D260\u30D5\u30EC\u30FC\u30E0\uFF0860fps\uFF09\u3092\u9054\u6210\u53EF\u80FD\u3067\u3042\u3063\u3066\u3082\u3001\u540C\u3058\u8A08\u7B97\u3092\u7E70\u308A\u8FD4\u3057\u884C\u3046\u3053\u3068\u3067\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30D3\u30B8\u30FC\u72B6\u614B\uFF08\u304A\u305D\u3089\u304F\u8CA0\u8377100%\uFF09\u306B\u306A\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u304F\u3001\u3088\u308A\u91CD\u8981\u306A\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30C6\u30CA\u306E\u3053\u306E\u300C\u30A4\u30F3\u30E1\u30E2\u30EA\uFF65\u30A4\u30E1\u30FC\u30B8\u300D\u3092\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u3055\u307E\u3056\u307E\u306A\u5834\u6240\u306B\u8868\u793A\u3067\u304D\u307E\u3059\u3002\u30B3\u30F3\u30C6\u30CA\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306B\u884C\u3046\u306E\u306F\u3001TouchGFX Designer\u3067\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002Cacheable\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u306E2\u3064\u306E\u30B3\u30F3\u30C6\u30CA\u4E0A\u3067\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.png",
    mdxType: "Figure"
  }, "\u30B3\u30F3\u30C6\u30CA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u624B\u9806\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30F3\u30C6\u30CA\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u5148\u3068\u3057\u3066\u3001RAM\u5185\u306B2\u3064\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u914D\u7F6E\u3059\u308BRAM\u5185\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002 \u3053\u3053\u306B\u6319\u3052\u308B\u7279\u5B9A\u306E\u4F8B\u3067\u306F\u3001SDRAM\uFF08STM32F429\u3067\u306F\u30A2\u30C9\u30EC\u30B90xd0000000\u304B\u3089\u59CB\u307E\u308B\uFF09\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u76F4\u5F8C\u306B\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Windows\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u30B0\u30ED\u30FC\u30D0\u30EB\u5909\u6570\u5185\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
    uint32_t sdramBuffer[8*1024*1024/4];
    uint16_t* sdram = (uint16_t*)sdramBuffer;
#else
    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u521D\u671F\u5316\u3057\u3066\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u7528\u306B2\u3064\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2}",
    "{2-2}": true
  }), `//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb
Bitmap::setCache(sdram, 320*1024, 2); //320Kb cache
dynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);
dynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30B3\u30F3\u30C6\u30CA\u306B\u5272\u308A\u5F53\u3066\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E2\u30FC\u30C9\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Assign the bitmaps to the Cacheable Containers
container1.setCacheBitmap(dynamicBitmap1);
container2.setCacheBitmap(dynamicBitmap2);

//Enable caching
container1.enableCachedMode(true);
container2.enableCachedMode(true);

//Finally update the cached bitmaps
container1.updateCache();
container2.updateCache();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container::updateCache()`), `\u3092\u547C\u3073\u51FA\u3059\u3068\u30012\u3064\u306E\u30B3\u30F3\u30C6\u30CA\u304C\u305D\u308C\u305E\u308C\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 \u30B3\u30F3\u30C6\u30CA\u306E\u5185\u5BB9\u3092\u66F4\u65B0\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5E38\u306B\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u958B\u767A\u8005\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3067\u51E6\u7406\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u306B\u5BFE\u3057\u3066\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u6E2C\u5B9A\u3067\u306F\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u304C99ms\u304B\u30895ms\u3078\u306820\u500D\u306E\u77ED\u7E2E\u3092\u793A\u3059\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u3064\u307E\u308A\u300160fps\u3067\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3092\u5B9F\u73FE\u53EF\u80FD\u3067\u300120\u30D5\u30EC\u30FC\u30E0\u304B\u3089\u306A\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u3092\u3088\u308A\u77ED\u6642\u9593\u3067\u51E6\u7406\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",
    mdxType: "Figure"
  }, "vsync\u3068\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306E\u6E2C\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u307E\u3068\u3081`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF08\u79FB\u52D5\u983B\u5EA6\u306E\u9AD8\u3044\uFF09\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u6642\u306B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u3088\u308B\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u8A08\u7B97\u304C\u8907\u96D1\u306A\u5BFE\u8C61\u306E\u5834\u5408\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u3092\u5927\u304D\u304F\u5411\u4E0A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u5909\u66F4\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\uFF08\u6642\u9593\u66F4\u65B0\u6642\u306E\u6642\u8A08\u306E\u6587\u5B57\u76E4\u306A\u3069\uFF09\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u5236\u5FA1\u3055\u308C\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u6642\u306E\u7279\u5B9A\u306E\u30DD\u30A4\u30F3\u30C8\u3067\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u518D\u8A08\u7B97\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "loading-images-at-runtime",
    mdxType: "Link"
  }, "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7: \u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);