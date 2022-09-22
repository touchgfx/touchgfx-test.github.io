"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[442],{

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

/***/ 56550:
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
  id: "framebuffer",
  title: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/framebuffer",
  "id": "basic-concepts/framebuffer",
  "title": "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/framebuffer",
  "permalink": "/4.20/ja/docs/basic-concepts/framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "framebuffer",
    "title": "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
    "permalink": "/4.20/ja/docs/basic-concepts/color-formats"
  },
  "next": {
    "title": "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3",
    "permalink": "/4.20/ja/docs/basic-concepts/graphics-engine"
  }
};
const assets = {};



const toc = [{
  value: "\u8272",
  id: "colors",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "display",
  level: 2
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5834\u6240",
  id: "location-of-framebuffer",
  level: 2
}, {
  value: "\u5185\u90E8RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "\u5916\u90E8RAM",
  id: "external-ram",
  level: 3
}, {
  value: "RAM\u5185\u8535\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "display-with-embedded-ram",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA",
  id: "amount-of-framebuffers",
  level: 2
}, {
  value: "1\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1",
  id: "one-framebuffer",
  level: 3
}, {
  value: "\u8907\u6570\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1",
  id: "more-than-one-framebuffer",
  level: 3
}, {
  value: "1\u3064\u672A\u6E80\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1",
  id: "less-than-one-framebuffer",
  level: 3
}, {
  value: "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF",
  id: "memory-consumption",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F1\u307E\u3068\u307E\u308A\u306E\u30E1\u30E2\u30EA\u3067\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u6B21\u306B\u8868\u793A\u3059\u308B\u753B\u50CF\u3092\u683C\u7D0D\u3059\u308B\u305F\u3081\u306B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u3001\u6240\u5B9A\u306E\u30B5\u30A4\u30BA\u306E\u9023\u7D9A\u3057\u305FRAM\u306E\u9818\u57DF\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-contiguous-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u306F\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u5E45\u3068\u9AD8\u3055\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u901A\u5E38\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u3001XY\u5EA7\u6A19\u306B\u3088\u3063\u3066\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u3051\u53EF\u80FD\u306A2\u6B21\u5143\u3067\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u30E1\u30E2\u30EA\u3067\u3042\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-2d-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "2D\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u306F\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u3042\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5404\u30A8\u30F3\u30C8\u30EA\u306F\u3001\u3053\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u8272\u306B\u306A\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u3053\u3046\u3057\u305F\u30A8\u30F3\u30C8\u30EA\u306E\u3053\u3068\u3092\u3001\u30D4\u30AF\u30BB\u30EB\u3068\u547C\u3073\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\uFF08X\u3001Y\uFF09\u4F4D\u7F6E\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u66F4\u65B0\u3059\u308B\u306B\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u30E1\u30E2\u30EA\uFF65\u30A2\u30C9\u30EC\u30B9\u3092\u8A08\u7B97\u3057\u3001\u305D\u3053\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u8272\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = newColor;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u69D8\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u53D6\u5F97\u3057\u3001\u3053\u308C\u3092\u8A08\u7B97\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u6697\u304F\u3059\u308B\u5834\u5408\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `darken`), `\u95A2\u6570\u304C\u4F7F\u7528\u53EF\u80FD\u3060\u3068\u3057\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u5834\u5408\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u306F\u3001\u4E0A\u8A18\u306E\u3088\u3046\u306B\u30D4\u30AF\u30BB\u30EB\u3054\u3068\u306B\u8AAD\u307F\u66F8\u304D\u3055\u308C\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u57FA\u76E4\u3068\u306A\u308B\u30B7\u30B9\u30C6\u30E0\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u6A5F\u80FD\uFF08Chrom-ART DMA\u306A\u3069\uFF09\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u3067\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "colors"
  }), `\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u6B21\u306E\u3044\u305A\u308C\u304B\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`), `: 1\u30012\u3001\u307E\u305F\u306F4 bpp\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30CF\u30A4\u30AB\u30E9\u30FC\u307E\u305F\u306F\u30C8\u30A5\u30EB\u30FC\u30AB\u30E9\u30FC`), `: 16\u300124\u3001\u307E\u305F\u306F32 bpp\u30AB\u30E9\u30FC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3059\u308Bbpp\u306E\u5024\u304C\u5927\u304D\u3044\u307B\u3069\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u8868\u3059\u3053\u3068\u306E\u3067\u304D\u308B\u8272\u304C\u660E\u77AD\u306B\u306A\u308A\u307E\u3059\u3002\u3055\u3089\u306B\u3001\u4F7F\u7528\u3059\u308Bbpp\u306E\u5024\u304C\u5927\u304D\u3044\u307B\u3069\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u30B5\u30A4\u30BA\u3082\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306F\u6700\u7D42\u7684\u306B\u306F\u7269\u7406\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u3001\u305D\u3053\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u901A\u5E38\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u5E45\u3068\u9AD8\u3055\u306F\u540C\u3058\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/display-and-framebuffer.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "24 bpp\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u7D50\u679C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u3055\u307E\u3056\u307E\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30BF\u30A4\u30D7\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C6\u30AF\u30CE\u30ED\u30B8"), "\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "location-of-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5834\u6240`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D9\u30FC\u30B9\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u975E\u5E38\u306B\u7C21\u7565\u5316\u3057\u305F\u56F3\u3092\u3001\u6B21\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/simplified-graphics-system.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u975E\u5E38\u306B\u7C21\u7565\u5316\u3057\u305F\u56F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u90E8\u3001\u307E\u305F\u306F\u5916\u90E8RAM\u306B\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-placement.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u914D\u7F6E\u53EF\u80FD\u306A\u5834\u6240"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u914D\u7F6E\u53EF\u80FD\u306A\u5834\u6240\u305D\u308C\u305E\u308C\u306B\u3001\u5229\u70B9\u3068\u6B20\u70B9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u90E8\u306ERAM\u306B\u914D\u7F6E\u3059\u308B\u3068\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8AAD\u307F\u66F8\u304D\u30A2\u30AF\u30BB\u30B9\u304C\u6700\u5927\u9650\u306B\u9AD8\u901F\u5316\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u53EF\u80FD\u306A\u9650\u308A\u30B9\u30E0\u30FC\u30BA\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u53CD\u9762\u3001\u5185\u90E8RAM\u306F\u975E\u5E38\u306B\u5C11\u91CF\u306E\u30EA\u30BD\u30FC\u30B9\u3067\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u591A\u304F\u306E\u90E8\u5206\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u308B\u305F\u3081\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u3053\u306E\u5927\u90E8\u5206\u3092\u5360\u6709\u3059\u308B\u3053\u3068\u306F\u73FE\u5B9F\u7684\u3067\u306F\u306A\u3044\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5185\u90E8RAM\u306B\u914D\u7F6E\u3059\u308B\u3068\u3053\u3068\u304C\u53EF\u80FD\u3067\u3042\u308C\u3070\u3001\u8FFD\u52A0\u306ERAM\u304C\u5FC5\u8981\u306A\u304F\u306A\u308B\u306E\u3067\u3001\u30B7\u30B9\u30C6\u30E0\u5168\u4F53\u306E\u30B3\u30B9\u30C8\u3092\u524A\u6E1B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-ram"
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30B9\u30C6\u30E0\u306B\u5916\u90E8RAM\u304C\u3042\u308B\u5834\u5408\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5185\u90E8RAM\u306E\u4EE3\u308F\u308A\u306B\u3053\u306E\u5916\u90E8RAM\u306B\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002 \u4E00\u822C\u7684\u306B\u3001\u5916\u90E8RAM\u306B\u5BFE\u3059\u308B\u8AAD\u307F\u66F8\u304D\u30A2\u30AF\u30BB\u30B9\u306F\u5185\u90E8RAM\u3088\u308A\u4F4E\u901F\u3067\u3059\u304C\u3001\u5916\u90E8RAM\u306E\u5BB9\u91CF\u306E\u65B9\u304C\u901A\u5E38\u306F\u975E\u5E38\u306B\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3053\u308C\u304C\u552F\u4E00\u306E\u89E3\u6C7A\u7B56\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001\u5916\u90E8RAM\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u9AD8\u901F\u5316\u3055\u305B\u308B\u6A5F\u80FD\uFF08\u30AD\u30E3\u30C3\u30B7\u30E5\u306A\u3069\uFF09\u304C\u5099\u308F\u3063\u3066\u3044\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/hardware-selection/hardware-components/hardware-selection-mcu"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), `\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-with-embedded-ram"
  }), `RAM\u5185\u8535\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30B9\u30C6\u30E0\u5185\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30BF\u30A4\u30D7\u306B\u3088\u3063\u3066\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30E1\u30E2\u30EA\u304C\u5185\u8535\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30E1\u30E2\u30EA\u306B\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u300C\u7269\u7406\u7684\u306A\u300D\u30D4\u30AF\u30BB\u30EB\u306E\u5185\u5BB9\u304C\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3053\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30E1\u30E2\u30EA\u304C\u3042\u308B\u3068\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30A2\u30A4\u30C9\u30EB\u72B6\u614B\u3067\u3082\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u52D5\u4F5C\u3092\u7D9A\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5185\u306ERAM\u306B\u914D\u7F6E\u3059\u308B\u3053\u3068\u306F\u4E0D\u53EF\u80FD\u3067\u3059\u3002\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30E1\u30E2\u30EA\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u3067\u306F\u306A\u304F\u3001\u30E9\u30F3\u30C0\u30E0\u306A\u30D4\u30AF\u30BB\u30EB\u306E\u8AAD\u307F\u66F8\u304D\u306B\u9069\u3059\u308B\u3088\u3046\u306B\u3067\u304D\u3066\u3044\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u4EE3\u308F\u308A\u306B\u3001TouchGFX\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5185\u90E8\u307E\u305F\u306F\u5916\u90E8RAM\u306B\u914D\u7F6E\u3057\u3001\u3053\u308C\u3092\u9069\u5207\u306A\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306ERAM\u306B\u8EE2\u9001\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "amount-of-framebuffers"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30671\u3064\u3001\u8907\u6570\u3001\u307E\u305F\u306F1\u3064\u672A\u6E80\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5916\u89B3\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3001\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `1\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u6B63\u78BA\u306B\u4FDD\u6301\u3059\u308B\u306B\u306F\u30011\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u5341\u5206\u3067\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4RAM\u304C\u642D\u8F09\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\uFF08\u5C11\u306A\u304F\u3068\u3082\uFF091\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u3067\u3059 \u3053\u306E\u5834\u5408\u3001\u8868\u793A\u3055\u308C\u308B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u8907\u96D1\u3055\u306B\u3088\u3063\u3066\u8996\u899A\u7684\u306A\u4E71\u308C\u304C\u767A\u751F\u3057\u306A\u3044\u5834\u5408\u306F\u30011\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u7406\u60F3\u7684\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "more-than-one-framebuffer"
  }), `\u8907\u6570\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u8907\u6570\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6301\u3064\u3053\u3068\u306F\u30012\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6301\u3064\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 1\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u6B21\u306E\u753B\u50CF\u306E\u8A08\u7B97\u7D50\u679C\u306E\u66F8\u304D\u8FBC\u307F\u306B\u4F7F\u7528\u3055\u308C\u3001\u3082\u3046\u4E00\u65B9\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u306A\u3069\u306E\u8996\u899A\u7684\u306A\u4E71\u308C\u306F\u73FE\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "less-than-one-framebuffer"
  }), `1\u3064\u672A\u6E80\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u672A\u6E80\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u306F\u3001\u4E00\u822C\u7684\u306B\u4EE5\u4E0B\u306E\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u5C11\u306A\u304F\u306A\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3088\u308A\u591A\u304F\u306E\u63CF\u753B\u64CD\u4F5C\u304C\u5B9F\u884C\u3055\u308C\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8EE2\u9001\u56DE\u6570\u3092\u5897\u3084\u3059\u5FC5\u8981\u304C\u3042\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u30011\u3064\u672A\u6E80\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u547C\u3070\u308C\u307E\u3059\u3002 \u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u65B9\u5F0F\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4RAM\u306E\u3042\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-consumption"
  }), `\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8272\u306E\u91CF\u3084\u30D4\u30AF\u30BB\u30EB\u6570\u306B\u3088\u3063\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u3068\u3059\u308B\u30E1\u30E2\u30EA\u30B5\u30A4\u30BA\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u4F7F\u7528\u3055\u308C\u308B\u30E1\u30E2\u30EA\u306E\u91CF\u306F\u3001\u5E45x\u9AD8\u3055x\u8272\u6DF1\u5EA6\uFF08\u30D3\u30C3\u30C8\uFF09/ 8 \u30D0\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u89E3\u50CF\u5EA6\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u8272\uFF08bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u8A08\u7B97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\uFF08\u30D0\u30A4\u30C8\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `800x480`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `16 bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `800 x 480 x 16 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `768,000 B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `480x272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `24 bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `480 x 272 x 24 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `391,680 B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `100x100`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `8 bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `100 x 100 x 8 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `10,000 B`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8907\u6570\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6301\u3064\u3068\u3001\u305D\u308C\u306B\u5FDC\u3058\u3066\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u3082\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u30012\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u30C0\u30D6\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u30EA\u30F3\u30B0\u65B9\u5F0F\u3067\u306F\u3001\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306F2\u500D\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u672A\u6E80\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6301\u3064\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u30E1\u30E2\u30EA\u306E\u91CF\u304C\u660E\u793A\u7684\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u3001\u5236\u5FA1\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306F\u5B8C\u5168\u306B\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u4F7F\u7528\u91CF\u304C\u5C11\u306A\u3059\u304E\u308B\u3068\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u5168\u4F53\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u60AA\u5F71\u97FF\u3092\u53CA\u307C\u3059\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001STM32 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",
    mdxType: "Link"
  }, "LTDC"), "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);