"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8261],{

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

/***/ 94001:
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
  id: "embedded-graphics",
  title: "\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/embedded-graphics",
  "id": "basic-concepts/embedded-graphics",
  "title": "\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/embedded-graphics",
  "permalink": "/4.20/ja/docs/basic-concepts/embedded-graphics",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "embedded-graphics",
    "title": "\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Basic Concepts",
    "permalink": "/4.20/ja/docs/category/basic-concepts"
  },
  "next": {
    "title": "\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
    "permalink": "/4.20/ja/docs/basic-concepts/color-formats"
  }
};
const assets = {};



const toc = [{
  value: "4\u3064\u306E\u4E3B\u8981\u90E8\u5206",
  id: "the-four-main-parts",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u3044\u3046\u7528\u8A9E\u306F\u591A\u304F\u306E\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001\u7D44\u8FBC\u307F\u3068\u3044\u3046\u7528\u8A9E\u306F\u3001\u4EBA\u306B\u3088\u3063\u3066\u3055\u307E\u3056\u307E\u306A\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u4E00\u90E8\u306E\u4EBA\u306B\u3068\u3063\u3066\u3001\u7D44\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u306F\u975E\u5E38\u306B\u4FE1\u983C\u3067\u304D\u308B\u65E7\u578B\u306E8\u30D3\u30C3\u30C8\uFF65\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u304C\u306A\u304F\u3001\u4E8B\u5B9F\u4E0ARAM\u3001ROM\u3001\u307E\u305F\u306FGPIO\u3082\u642D\u8F09\u3057\u3066\u3044\u306A\u3044\u3082\u306E\u3067\u3059\u3002 \u4ED6\u306E\u4EBA\u306B\u3068\u3063\u3066\u306F\u3001\u3059\u3079\u3066\u3092\u30AE\u30AC\u30D0\u30A4\u30C8\u3067\u642D\u8F09\u3059\u308B\u6700\u65B0\u306E\u30B9\u30DE\u30FC\u30C8\uFF65\u30D5\u30A9\u30F3\u3092\u610F\u5473\u3059\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3068\u3044\u3046\u7528\u8A9E\u306F\u3055\u307E\u3056\u307E\u306B\u89E3\u91C8\u3067\u304D\u307E\u3059\u3002 \u4E00\u90E8\u306E\u4EBA\u306B\u3068\u3063\u3066\u306F\u3001\u304A\u6C17\u306B\u5165\u308A\u306E\u30DA\u30A4\u30F3\u30C6\u30A3\u30F3\u30B0\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u81EA\u5206\u72EC\u81EA\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u63CF\u753B\u3059\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u3053\u308C\u3082\u5225\u306E\u4EBA\u306B\u3068\u3063\u3066\u306F\u3001\u81EA\u5206\u306E\u30B2\u30FC\u30E0\u6A5F\u3067\u5B9F\u884C\u3055\u308C\u308B3D\u63CF\u753B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u304A\u3044\u3066\u3001\u7D44\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u306FSTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u30B7\u30B9\u30C6\u30E0\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u3055\u3089\u306B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306F\u3001\u6BCE\u79D260\u30D5\u30EC\u30FC\u30E0\u3067\u5B9F\u884C\u3055\u308C\u308B\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-four-main-parts"
  }), `4\u3064\u306E\u4E3B\u8981\u90E8\u5206`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u3088\u3046\u306A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u3001\u76F4\u63A5\u95A2\u4FC2\u3059\u308B4\u3064\u306E\u4E3B\u8981\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u691C\u8A0E\u3057\u307E\u3059\u3002 \u5F53\u7136\u3001\u7D44\u307F\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u306B\u306F\u3055\u3089\u306B\u591A\u304F\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u5B58\u5728\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u308C\u3089\u306F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u8868\u793A\u3068\u306F\u3042\u307E\u308A\u95A2\u4FC2\u304C\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/embedded-graphics-primer/4-main-parts.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3001RAM\u3001Flash\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u624B\u77ED\u306B\u8A00\u3048\u3070\u3001TouchGFX\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u4F7F\u7528\u3057\u3066\u3001Flash\u30E1\u30E2\u30EA\u306B\u3042\u308B\u30D1\u30FC\u30C4\u3092\u7D44\u307F\u7ACB\u3066\u308B\u3053\u3068\u3067\u3001RAM\u5185\u306B\u753B\u50CF\u3092\u4F5C\u6210\u304A\u3088\u3073\u66F4\u65B0\u3057\u307E\u3059\u3002 \u4F5C\u6210\u3055\u308C\u305F\u753B\u50CF\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u3001\u53EF\u80FD\u304B\u3064\u5FC5\u8981\u306A\u3060\u3051\u7E70\u308A\u8FD4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mcu"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u56F0\u96E3\u306A\u90E8\u5206\u3092\u3059\u3079\u3066\u62C5\u3044\u307E\u3059\u3002 Flash\u5185\u306E\u753B\u50CF\u3092\u8AAD\u307F\u53D6\u308A\u3001RAM\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002 \u534A\u900F\u660E\u306E\u8D64\u8272\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u753B\u50CF\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3068\u304D\u306B\u7D50\u679C\u306E\u8272\u3092\u8A08\u7B97\u3057\u3001\u3053\u308C\u3089\u3092RAM\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u5186\u306E\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u63CF\u753B\u3057\u3066RAM\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u753B\u50CF\u3092RAM\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/mcu-internal.svg",
    noShadow: "true",
    width: 240,
    mdxType: "Figure"
  }, "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306FCPU\u3001\u5185\u90E8Flash\u3001\u5185\u90E8RAM\u306A\u3069\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001LTDC\u3001Chrom-ART\u3001Chrom-GRC\u306A\u3069\u306E\u56FA\u6709\u306E\u6A5F\u80FD\u304C\u3042\u308A\u3001\u3053\u308C\u3089\u306F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u5B9F\u73FE\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-mcu",
    mdxType: "Link"
  }, "\u9069\u5207\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u9078\u629E\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3068\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/02-cpu-running",
    mdxType: "Link"
  }, "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ram"
  }), `RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u306B\u306F\u8A08\u7B97\u5F8C\u306E\u7D50\u679C\u306E\u753B\u50CF\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1`), `\uFF09\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u66F4\u65B0\u6642\u306B\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306FRAM\u306B\u5BFE\u3057\u3066\u8AAD\u53D6\u308A / \u66F8\u8FBC\u307F\u3092\u884C\u3044\u307E\u3059\u3002 \u3055\u3089\u306B\u3001\u7D50\u679C\u306E\u753B\u50CF\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u3068\u304D\u306B\u3001\u518D\u5EA6\u8AAD\u307F\u53D6\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u5834\u5408\u3001\u7D50\u679C\u306E\u753B\u50CF\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u90E8\u306ERAM\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u7D50\u679C\u306E\u30A4\u30E1\u30FC\u30B8\u3092\u5185\u90E8RAM\u306B\u542B\u3081\u308B\u3053\u3068\u304C\u4E0D\u53EF\u80FD\u306A\u5834\u5408\u306F\u3001\u5916\u90E8RAM\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u9069\u5207\u306ARAM\u306E\u9078\u629E\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3068\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/04-enable-external-ram",
    mdxType: "Link"
  }, "\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u306ERAM\u306E\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash"
  }), `Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u306B\u306F\u3059\u3079\u3066\u306E\u9759\u7684\u30C7\u30FC\u30BF\u304C\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u753B\u50CF\u3001\u30D5\u30A9\u30F3\u30C8\u3001\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u3067\u3059\u3002 Flash\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u3063\u3066\u8AAD\u307F\u53D6\u3089\u308C\u3001\u305D\u306E\u5185\u5BB9\u304CRAM\u306B\u66F8\u304D\u8FBC\u307E\u308C\u305F\u308A\u7D50\u5408\u3055\u308C\u305F\u308A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u5916\u90E8Flash\u304C\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30BB\u30C3\u30C8\u3092\u4FDD\u6301\u3067\u304D\u308B\u307B\u3069\u306E\u5BB9\u91CF\u3092\u3001\u5185\u90E8Flash\u304C\u5099\u3048\u3066\u3044\u308B\u3053\u3068\u306F\u307B\u3068\u3093\u3069\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u305F\u3060\u3057\u3001\u975E\u5E38\u306B\u30B7\u30F3\u30D7\u30EB\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3042\u308C\u3070\u3001\u5185\u90E8Flash\u3067\u5341\u5206\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7406\u8AD6\u4E0A\u3001Flash\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u306A\u306E\u3067\u3001\u30D4\u30AF\u30BB\u30EB\u3092Flash\u304B\u3089\u76F4\u63A5\u8AAD\u307F\u53D6\u308A\u3001RAM\u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4E00\u65B9\u3001Flash\u304C\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u3001Flash\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092RAM\u306B\u8EE2\u9001\u3057\u3001\u305D\u3053\u304B\u3089\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u9069\u5207\u306AFlash\u306E\u9078\u629E\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3068\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/06-flash-external-addressable",
    mdxType: "Link"
  }, "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306EFlash\u306E\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u753B\u50CF\u304C\u4EBA\u306E\u76EE\u306E\u524D\u306B\u5B9F\u969B\u306B\u8868\u793A\u3055\u308C\u308B\u5834\u6240\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u8A08\u7B97\u3055\u308C\u305F\u753B\u50CF\uFF08\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF09\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u308A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u4E00\u5B9A\u9593\u9694\u3067\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u9069\u5207\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u9078\u629E\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3068\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/03-display-internal",
    mdxType: "Link"
  }, "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u9078\u629E\u53EF\u80FD\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-selection-introduction",
    mdxType: "Link"
  }, "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u9078\u629E"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30DC\u30FC\u30C9\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8A2D\u5B9A\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/board-introduction",
    mdxType: "Link"
  }, "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);