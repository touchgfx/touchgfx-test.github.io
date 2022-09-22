"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8675],{

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

/***/ 81609:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44035);
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
  id: "engine-architecture",
  title: "\u30A8\u30F3\u30B8\u30F3\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/engine-architecture",
  "id": "basic-concepts/engine-architecture",
  "title": "\u30A8\u30F3\u30B8\u30F3\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/engine-architecture.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/engine-architecture",
  "permalink": "/4.20/ja/docs/basic-concepts/engine-architecture",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "engine-architecture",
    "title": "\u30A8\u30F3\u30B8\u30F3\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3"
  }
};
const assets = {};



const toc = [{
  value: "4\u3064\u306E\u4E3B\u8981\u90E8\u5206",
  id: "the-four-parts",
  level: 2
}, {
  value: "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
  id: "mcu",
  level: 3
}, {
  value: "RAM",
  id: "ram",
  level: 3
}, {
  value: "Flash",
  id: "flash",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "display",
  level: 3
}, {
  value: "\u6027\u80FD",
  id: "performance",
  level: 2
}, {
  value: "\u5168\u822C\u7684\u306A\u6226\u7565",
  id: "general-strategy",
  level: 3
}, {
  value: "\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u56FA\u6709\u306E\u6226\u7565",
  id: "setup-specific-strategy",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u306F\u3001\u8A70\u307E\u308B\u3068\u3053\u308D\u7269\u7406\u7684\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306B\u4F55\u304B\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002 \u91CD\u8981\u306A\u306E\u306F\u9AD8\u901F\u3067\u3042\u308B\u3053\u3068\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u3044\u3046\u7528\u8A9E\u306F\u591A\u304F\u306E\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001\u7D44\u8FBC\u307F\u3068\u3044\u3046\u7528\u8A9E\u306F\u3001\u4EBA\u306B\u3088\u3063\u3066\u3055\u307E\u3056\u307E\u306A\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u4E00\u90E8\u306E\u4EBA\u306B\u3068\u3063\u3066\u3001\u7D44\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u306F\u975E\u5E38\u306B\u4FE1\u983C\u3067\u304D\u308B\u65E7\u578B\u306E8\u30D3\u30C3\u30C8\uFF65\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u304C\u306A\u304F\u3001\u4E8B\u5B9F\u4E0ARAM\u3001ROM\u3001\u307E\u305F\u306FGPIO\u3082\u642D\u8F09\u3057\u3066\u3044\u306A\u3044\u3082\u306E\u3067\u3059\u3002 \u4ED6\u306E\u4EBA\u306B\u3068\u3063\u3066\u306F\u3001\u3059\u3079\u3066\u3092\u30AE\u30AC\u30D0\u30A4\u30C8\u3067\u642D\u8F09\u3059\u308B\u6700\u65B0\u306E\u30B9\u30DE\u30FC\u30C8\uFF65\u30D5\u30A9\u30F3\u3092\u610F\u5473\u3059\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u3044\u3046\u7528\u8A9E\u306F\u3055\u307E\u3056\u307E\u306B\u89E3\u91C8\u3067\u304D\u307E\u3059\u3002 \u4E00\u90E8\u306E\u4EBA\u306B\u3068\u3063\u3066\u306F\u3001\u304A\u6C17\u306B\u5165\u308A\u306E\u30DA\u30A4\u30F3\u30C6\u30A3\u30F3\u30B0\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u81EA\u5206\u72EC\u81EA\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u63CF\u753B\u3059\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u3053\u308C\u3082\u5225\u306E\u4EBA\u306B\u3068\u3063\u3066\u306F\u3001\u81EA\u5206\u306E\u30B2\u30FC\u30E0\u6A5F\u3067\u5B9F\u884C\u3055\u308C\u308B3D\u63CF\u753B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u304A\u3044\u3066\u3001\u7D44\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u306FSTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u30B7\u30B9\u30C6\u30E0\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u3055\u3089\u306B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306F\u3001\u6BCE\u79D260\u30D5\u30EC\u30FC\u30E0\u3067\u5B9F\u884C\u3055\u308C\u308B\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-four-parts"
  }), `4\u3064\u306E\u4E3B\u8981\u90E8\u5206`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3046\u3057\u305F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E4\u3064\u306E\u4E3B\u8981\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u76F4\u63A5\u7684\u306B\u95A2\u4E0E\u3059\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002 \u3082\u3061\u308D\u3093\u7D44\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u306B\u306F\u3001\u3082\u3063\u3068\u591A\u304F\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u5B58\u5728\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u8868\u793A\u3068\u306E\u95A2\u4FC2\u6027\u306F\u4F4E\u3044\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/four-parts.svg",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3001RAM\u3001Flash\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u624B\u77ED\u306B\u8A00\u3048\u3070\u3001TouchGFX\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u4F7F\u7528\u3057\u3066\u3001Flash\u30E1\u30E2\u30EA\u306B\u3042\u308B\u30D1\u30FC\u30C4\u3092\u7D44\u307F\u7ACB\u3066\u308B\u3053\u3068\u3067\u3001RAM\u5185\u306B\u753B\u50CF\u3092\u4F5C\u6210\u304A\u3088\u3073\u66F4\u65B0\u3057\u307E\u3059\u3002 \u7D44\u307F\u7ACB\u3066\u3089\u308C\u305F\u753B\u50CF\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u3001\u53EF\u80FD\u304B\u3064\u5FC5\u8981\u306A\u3060\u3051\u7E70\u308A\u8FD4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mcu"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u56F0\u96E3\u306A\u90E8\u5206\u3092\u3059\u3079\u3066\u62C5\u3044\u307E\u3059\u3002 Flash\u5185\u306E\u753B\u50CF\u3092\u8AAD\u307F\u53D6\u308A\u3001RAM\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002 \u534A\u900F\u660E\u306E\u8D64\u8272\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u753B\u50CF\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3068\u304D\u306B\u7D50\u679C\u306E\u8272\u3092\u8A08\u7B97\u3057\u3001\u3053\u308C\u3089\u3092RAM\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u5186\u306E\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u63CF\u753B\u3057\u3066RAM\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u4EE5\u4E0B\u540C\u69D8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u5B9F\u73FE\u306B\u5F79\u7ACB\u3064\u56FA\u6709\u306E\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u3002 \u3055\u307E\u3056\u307E\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/hardware-selection/hardware-components/hardware-selection-mcu"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ram"
  }), `RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u306B\u306F\u8A08\u7B97\u5F8C\u306E\u753B\u50CF\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306FRAM\u306B\u5BFE\u3057\u3066\u8AAD\u53D6\u308A / \u66F8\u8FBC\u307F\u3092\u884C\u3044\u307E\u3059\u3002 \u3055\u3089\u306B\u3001\u7D50\u679C\u306E\u753B\u50CF\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u3068\u304D\u306B\u3001\u518D\u5EA6\u8AAD\u307F\u53D6\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u5834\u5408\u3001RAM\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u90E8\u306B\u3042\u308A\u307E\u3059\u3002 \u7D50\u679C\u306E\u753B\u50CF\u3092\u5185\u90E8RAM\u306B\u4FDD\u6301\u3059\u308B\u3053\u3068\u304C\u96E3\u3057\u3044\u5834\u5408\u306B\u306F\u3001\u5916\u90E8RAM\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash"
  }), `Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u306B\u306F\u3059\u3079\u3066\u306E\u9759\u7684\u30C7\u30FC\u30BF\u304C\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u753B\u50CF\u3001\u30D5\u30A9\u30F3\u30C8\u3001\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u3067\u3059\u3002 Flash\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u3063\u3066\u8AAD\u307F\u53D6\u3089\u308C\u3001\u305D\u306E\u5185\u5BB9\u304CRAM\u306B\u66F8\u304D\u8FBC\u307E\u308C\u305F\u308A\u7D50\u5408\u3055\u308C\u305F\u308A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u5916\u90E8Flash\u304C\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30BB\u30C3\u30C8\u3092\u4FDD\u6301\u3067\u304D\u308B\u307B\u3069\u306E\u5BB9\u91CF\u3092\u3001\u5185\u90E8Flash\u304C\u5099\u3048\u3066\u3044\u308B\u3053\u3068\u306F\u307B\u3068\u3093\u3069\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7406\u8AD6\u4E0A\u3001Flash\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u306A\u306E\u3067\u3001\u30D4\u30AF\u30BB\u30EB\u3092Flash\u304B\u3089\u76F4\u63A5\u8AAD\u307F\u53D6\u308A\u3001RAM\u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u3001Flash\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092RAM\u306B\u30D0\u30C3\u30D5\u30A1\u30EA\u30F3\u30B0\u3057\u3001\u305D\u3053\u304B\u3089\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u753B\u50CF\u304C\u4EBA\u306E\u76EE\u306E\u524D\u306B\u5B9F\u969B\u306B\u8868\u793A\u3055\u308C\u308B\u5834\u6240\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u8A08\u7B97\u3055\u308C\u305F\u753B\u50CF\uFF08\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF09\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u308A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u4E00\u5B9A\u9593\u9694\u3067\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3067\u3001\u6700\u7D42\u7684\u306B\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u3067\u30B9\u30E0\u30FC\u30BA\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u73FE\u3059\u308B\u306B\u306F\u3001\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u5B9F\u884C\u6642\u306B\u3044\u304F\u3064\u304B\u6CE8\u610F\u3059\u3079\u304D\u70B9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "general-strategy"
  }), `\u5168\u822C\u7684\u306A\u6226\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E38\u306B\u8003\u616E\u3059\u3079\u304D\u3044\u304F\u3064\u304B\u306E\u4E00\u822C\u7684\u306A\u6CE8\u610F\u70B9\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5909\u66F4\u306E\u306A\u3044\u5BFE\u8C61\u306E\u63CF\u753B\u306B\u6642\u9593\u3092\u304B\u3051\u306A\u3044\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash\u304B\u3089RAM\u3078\u306E\u8EE2\u9001\u91CF\u3092\u3067\u304D\u308B\u9650\u308A\u5C11\u306A\u304F\u3059\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u91CF\u3092\u3067\u304D\u308B\u9650\u308A\u5C11\u306A\u304F\u3059\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u54C1\u8CEA\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u901F\u5EA6\u306E\u9069\u5207\u306A\u30D0\u30E9\u30F3\u30B9\u3092\u898B\u3064\u3051\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u6A5F\u80FD\u3092\u6D3B\u7528\u3059\u308B\u3053\u3068`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A8\u30F3\u30B8\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u3053\u3046\u3057\u305F\u70B9\u306B\u3059\u3079\u3066\u5BFE\u51E6\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u305D\u308C\u3067\u3082\u958B\u767A\u8005\u306F\u6CE8\u610F\u3092\u6255\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setup-specific-strategy"
  }), `\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u56FA\u6709\u306E\u6226\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81A8\u5927\u306A\u6570\u306E\u7D44\u8FBC\u307F\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u304C\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068\u306F\u3001\u5B9F\u73FE\u53EF\u80FD\u306A\u5185\u5BB9\u304C\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u3088\u3063\u3066\u5927\u304D\u304F\u7570\u306A\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u80FD\u306A\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306E\u5927\u307E\u304B\u306A\u6982\u8981\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AF\u30ED\u30C3\u30AF\uFF65\u30EC\u30FC\u30C8: 50 MHz\uFF5E500 MHz`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u80FD\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u95A2\u9023IP\u306E\u7BC4\u56F2: Chrom-ART\u3001Chrom-GRC\u3001JPEG\u30B3\u30FC\u30C7\u30C3\u30AF\u306A\u3069`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8: 0\uFF5E1 MB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5916\u90E8: 0\uFF5E100 MB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8: 0\uFF5E1 MB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5916\u90E8: 0\uFF5E1 GB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1\uFF5E24\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `100x100\uFF5E1000x1000\u30D4\u30AF\u30BB\u30EB`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u306E\u53EF\u80FD\u306A\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u4E0A\u3067\u5B9F\u73FE\u53EF\u80FD\u306AUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3001\u5225\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u4E0A\u3067\u5B9F\u73FE\u53EF\u80FD\u306A\u3082\u306E\u3068\u307E\u3063\u305F\u304F\u7570\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u306E\u306F\u660E\u3089\u304B\u3067\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u76EE\u7684\u306EUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u969B\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u5272\u308A\u5F53\u3066\u308B\u969B\u306B\u306F\u3001\u7D30\u5FC3\u306E\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3053\u308C\u3089\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u5411\u3051\u306B\u57FA\u790E\u304B\u3089\u5B8C\u5168\u306B\u8A2D\u8A08\u3055\u308C\u3066\u304A\u308A\u3001STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u6A5F\u80FD\u3092\u6700\u5927\u9650\u306B\u5F15\u304D\u51FA\u3057\u3001\u5FC5\u8981\u306ARAM\u3068Flash\u306E\u91CF\u3092\u6700\u5C0F\u9650\u306B\u6291\u3048\u308B\u3053\u3068\u306B\u91CD\u70B9\u3092\u7F6E\u3044\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    mdxType: "Link"
  }, "STM32 32-bit Arm Cortex MCUs"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u9078\u629E\u53EF\u80FD\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u9078\u629E\u53EF\u80FD\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-mcu",
    mdxType: "Link"
  }, "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u9078\u629E\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u30E1\u30E2\u30EA"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);