"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2730],{

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

/***/ 37551:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
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
  id: "using-the-l8-image-format-to-reduce-memory-consumption",
  title: "L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306E\u524A\u6E1B"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "id": "development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "title": "L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306E\u524A\u6E1B",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "permalink": "/4.20/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-the-l8-image-format-to-reduce-memory-consumption",
    "title": "L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306E\u524A\u6E1B"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F",
    "permalink": "/4.20/ja/docs/development/ui-development/scenarios/loading-images-at-runtime"
  },
  "next": {
    "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F5C\u6210",
    "permalink": "/4.20/ja/docs/development/ui-development/scenarios/creating-dynamic-l8-images"
  }
};
const assets = {};




const toc = [{
  value: "L8\u753B\u50CF\u306E\u4F8B",
  id: "example-l8-image",
  level: 2
}, {
  value: "TouchGFX Designer\u3067\u306EL8\u753B\u50CF\u306E\u4F7F\u7528",
  id: "using--l8-images-in-touchgfx-designer",
  level: 2
}, {
  value: "\u900F\u660E\u5EA6\u306E\u3042\u308B\u753B\u50CF",
  id: "transparent-images",
  level: 2
}, {
  value: "256\u8272\u3078\u306E\u753B\u50CF\u5909\u63DB",
  id: "converting-an-image-to-256-colors",
  level: 2
}, {
  value: "Paint.NET",
  id: "paintnet",
  level: 3
}, {
  value: "ImageMagick",
  id: "imagemagick",
  level: 3
}, {
  value: "\u6BD4\u8F03",
  id: "comparison",
  level: 3
}, {
  value: "\u624B\u52D5\u306B\u3088\u308B\u8A2D\u5B9A",
  id: "manual-configuration",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u753B\u50CF\u306F\u3001ARGB8888\u306A\u3069\u3088\u308A\u3082Flash\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u4F7F\u7528\u91CF\u304C\u5C11\u306A\u304F\u3001\u9AD8\u901F\u3067\u63CF\u753B\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u753B\u50CF\u306F\u30AB\u30E9\u30FC\uFF65\u30D1\u30EC\u30C3\u30C8\u3068\u30D4\u30AF\u30BB\u30EB\uFF65\u30A2\u30EC\u30A4\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002\u30AB\u30E9\u30FC\uFF65\u30D1\u30EC\u30C3\u30C8\u306B\u306F256\u306E\u7570\u306A\u308B\u8272\u304C\u3001\u305D\u308C\u305E\u308C16\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8RGB565\u300124\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8RGB888\u3001\u307E\u305F\u306F32\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8ARGB8888\u3067\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\uFF65\u30A2\u30EC\u30A4\u306F\u5404\u30D4\u30AF\u30BB\u30EB\u304C1\u30D0\u30A4\u30C8\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30D0\u30A4\u30C8\u306F\u3001\u30AB\u30E9\u30FC\uFF65\u30D1\u30EC\u30C3\u30C8\uFF08\u8272\u306E\u30EA\u30B9\u30C8\uFF09\u3078\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3067\u3001\u305D\u306E\u30D4\u30AF\u30BB\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u8272\u3092\u6307\u3057\u3066\u3044\u307E\u3059\u3002 TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306F\u3001\u30D4\u30AF\u30BB\u30EB\u30921\u3064\u305A\u3064\u8AAD\u307F\u53D6\u308A\u3001\u30D1\u30EC\u30C3\u30C8\u5185\u3067\u5BFE\u5FDC\u3059\u308B\u8272\u3092\u898B\u3064\u3051\u3001\u305D\u308C\u3089\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u3067\u3001L8\u753B\u50CF\u3092\u63CF\u753B\u3057\u307E\u3059\u3002 \u3053\u306E\u64CD\u4F5C\u306F\u81EA\u52D5\u7684\u306B\u884C\u308F\u308C\u3001STM32 Chrom-ART\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306B\u3088\u3063\u3066\u52A0\u901F\u5316\u3055\u308C\u307E\u3059\uFF08\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u5834\u5408\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u3042\u305F\u308A8\u30D3\u30C3\u30C8\u3068\u3044\u3046\u306E\u306F\u30011\u3064\u306EL8\u753B\u50CF\u304C256\u306E\u7570\u306A\u308B\u8272\u3092\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u5225\u306EL8\u753B\u50CF\u3082\u5225\u306E256\u8272\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3064\u307E\u308A\u30012\u3064\u306E\u753B\u50CF\u306B\u306F\u305D\u308C\u305E\u308C\u72EC\u81EA\u306E\u30D1\u30EC\u30C3\u30C8\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",
    mdxType: "Figure"
  }, "4x4\u30D4\u30AF\u30BB\u30EB\u306EL8\u753B\u50CF\u30684\u8272\u306E\u30D1\u30EC\u30C3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u306F\u305D\u308C\u305E\u308C1\u30D0\u30A4\u30C8\uFF088\u30D3\u30C3\u30C8\uFF09\u3067\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30D4\u30AF\u30BB\u30EB\u306E\u30B5\u30A4\u30BA\u306F\u5E45 x \u9AD8\u3055\u306E\u30D0\u30A4\u30C8\u6570\u306B\u306A\u308A\u307E\u3059\u3002 \u30D1\u30EC\u30C3\u30C8\u306E\u8272\u306F16\u30D3\u30C3\u30C8\u300124\u30D3\u30C3\u30C8\u3001\u307E\u305F\u306F32\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u306B\u3067\u304D\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u305D\u308C\u305E\u308C\u306E\u8272\u306E\u5B9A\u7FA9\u306B2\u30D0\u30A4\u30C8\u30013\u30D0\u30A4\u30C8\u3001\u307E\u305F\u306F4\u30D0\u30A4\u30C8\u3092\u5FC5\u8981\u3068\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5857\u308A\u3064\u3076\u3057\u753B\u50CF\u306F\u3001L8_RGB888\u3067\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u753B\u50CF\u304C\u900F\u660E\u306A\u5834\u5408\u306F\u300132\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08ARGB8888\uFF09\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5F62\u5F0F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u900F\u660E\u306A\u30D4\u30AF\u30BB\u30EB\u306E\u30B5\u30DD\u30FC\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, ` DMA2D\u306B\u3088\u308B\u30B5\u30DD\u30FC\u30C8 `)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u30D3\u30C3\u30C8RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u30D3\u30C3\u30C8RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E21\u65B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RGB565\u30D1\u30EC\u30C3\u30C8\u306B\u3088\u308BL8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306FDMA2D\u3067\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u305B\u3093\u3002 \u3064\u307E\u308A\u3001\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306E\u753B\u50CF\u63CF\u753B\u3067\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u884C\u308F\u308C\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001DMA2D\u3092\u4F7F\u7528\u3057\u306A\u3044\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\uFF08STM32G0\u3084STM32F410\u306A\u3069\uFF09\u3067\u306A\u3051\u308C\u3070\u3001\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EBFlash\uFF08\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF09\u3092\u4F7F\u7528\u3057\u3066\u753B\u50CF\u308416\u30D3\u30C3\u30C8\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF08RGB565\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF09\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408\u306F\u3001L8_RGB565\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30AB\u30E9\u30FC\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u4E00\u81F4\u3057\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30B3\u30D4\u30FC\u304C\u9AD8\u901F\u5316\u3059\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306B\u3001\u63A8\u5968\u3055\u308C\u308BL8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5F62\u5F0F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `DMA2D\u3042\u308A\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, ` DMA2D\u306A\u3057\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0 `)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u306A\u753B\u50CF\u306F\u3001\u5E38\u306BL8_ARGB8888\u306B\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30D1\u30EC\u30C3\u30C8\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "https://en.wikipedia.org/wiki/Indexed_color",
    mdxType: "Link"
  }, "https://en.wikipedia.org/wiki/Indexed_color\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example-l8-image"
  }), `L8\u753B\u50CF\u306E\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u793A\u3059\u306E\u306F\u4E00\u822C\u7684\u306A\u30ED\u30B4\u753B\u50CF\u3067\u3059\u3002 \u3053\u306E\u753B\u50CF\u3067\u306F16\u8272\u306E\u307F\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",
    mdxType: "Figure"
  }, "16\u8272\u306E24\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u3092\u4F7F\u7528\u3057\u305F200x200\u30D4\u30AF\u30BB\u30EB\u306EL8\u753B\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u753B\u50CF\u306EFlash\u5185\u306E\u30B5\u30A4\u30BA\u306F\u3001\u6A19\u6E96\u306E24\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08RGB888\uFF09\u306E\u5143\u306E\u753B\u50CF\u3088\u308A\u3082\u5927\u5E45\u306B\u5C0F\u3055\u304F\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u6B21\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u3001\u3053\u306E\u5177\u4F53\u7684\u306A\u753B\u50CF\u306B\u3064\u3044\u3066\u30013\u3064\u306E\u7570\u306A\u308B\u30D1\u30EC\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u975EL8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5834\u5408\u306E\u3001Flash\u4F7F\u7528\u91CF\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D4\u30AF\u30BB\u30EB\u306E\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D1\u30EC\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5168\u4F53\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u524A\u6E1B\u7387\uFF08%\uFF09`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `120,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `120,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,032`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.6%`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `48`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,048`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.6%`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `64`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,064`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.6%`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B5\u30A4\u30BA\u306E\u524A\u6E1B\u7387\u306F\u975E\u5E38\u306B\u5927\u304D\u304F\u3001\u30D1\u30EC\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u306F\u4E2D\u898F\u6A21\u30B5\u30A4\u30BA\u306E\u753B\u50CF\u306B\u3068\u3063\u3066\u4E9B\u7D30\u306A\u3082\u306E\u3067\u3042\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using--l8-images-in-touchgfx-designer"
  }), `TouchGFX Designer\u3067\u306EL8\u753B\u50CF\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u306E\u306F\u3068\u3066\u3082\u7C21\u5358\u3067\u3059\u3002 \u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u3092\u3001PNG\u304B\u3089L8\u5F62\u5F0F\u306B\u753B\u50CF\u3092\u5909\u63DB\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u3060\u3051\u3067\u3059\u3002 \u6B21\u306B\u3001\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u5168\u4F53\u3092\u7C21\u5358\u306B\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3057\u307E\u3059\u3002 \u81EA\u5206\u306E\u753B\u50CF\u3092\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306Eassets/images\u30D5\u30A9\u30EB\u30C0\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",
    mdxType: "Figure"
  }, "TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306EImages\u30D5\u30A9\u30EB\u30C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001TouchGFX Designer\u306B\u79FB\u52D5\u3057\u3001\u4E0A\u90E8\u306E\u30D0\u30FC\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/images-view"
  }), `Images\u30BF\u30D6`), `\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u753B\u50CF\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u753B\u50CF\u30D3\u30E5\u30FC\u5185\u306E\u30ED\u30B4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u53F3\u5074\u3067\u3001\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8L8_RGB888\u3092\u9078\u629E\u3057\u307E\u3059\uFF08\u3053\u306E\u4F8B\u3067\u306F\u300124\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u633F\u5165\u3055\u308C\u307E\u3059\uFF08\u3053\u306E\u4F8B\u3067\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u30DC\u30C3\u30AF\u30B9\u3092\u633F\u5165\u3057\u3066\u3044\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u306E\u753B\u50CF\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u30B3\u30FC\u30C9\u3067\u306F\u3001\u4F55\u3082\u5909\u66F4\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u304CPNG\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u63DB\u3057\u3001L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u753B\u50CF\u3092\u751F\u6210\u3057\u307E\u3059\u3002Images\u30BF\u30D6\u3067\u3059\u3067\u306B\u8A2D\u5B9A\u6E08\u307F\u3060\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transparent-images"
  }), `\u900F\u660E\u5EA6\u306E\u3042\u308B\u753B\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u8FF0\u3057\u305F\u3088\u3046\u306B\u3001\u900F\u660E\u5EA6\u306E\u3042\u308B\u753B\u50CF\u306BL8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",
    mdxType: "Figure"
  }, "32\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8ARGB8888\u306E170x60\u30D4\u30AF\u30BB\u30EB\u306E\u30DC\u30BF\u30F3\u753B\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u753B\u50CF\u306F108\u8272\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\uFF08\u591A\u6570\u306E\u6FC3\u6DE1\u306E\u9752\u8272\uFF09\u3002 \u3053\u306E\u753B\u50CF\u3067\u306F\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8L8_ARGB8888\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30B5\u30A4\u30BA\u306F\u5927\u5E45\u306B\u524A\u6E1B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D4\u30AF\u30BB\u30EB\u306E\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D1\u30EC\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5168\u4F53\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u524A\u6E1B\u7387\uFF08%\uFF09`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,200`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `432`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,632`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `73.9%`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "converting-an-image-to-256-colors"
  }), `256\u8272\u3078\u306E\u753B\u50CF\u5909\u63DB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u753B\u50CF\u306F256\u8272\u3088\u308A\u591A\u304F\u306E\u8272\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u30D5\u30A9\u30C8\u30EA\u30A2\u30EA\u30B9\u30C6\u30A3\u30C3\u30AF\u306A\u753B\u50CF\u3084\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u306E\u3042\u308B\u753B\u50CF\u3067\u306F\u5F53\u305F\u308A\u524D\u306E\u3053\u3068\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u753B\u50CF\u306F\u591A\u304F\u306E\u8272\u3092\u542B\u3093\u3067\u3044\u308B\u305F\u3081\u3001TouchGFX Designer\u3067\u306FL8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u76F4\u63A5\u5909\u63DB\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u591A\u304F\u306E\u5834\u5408\u3001\u7279\u5B9A\u306E\u753B\u50CF\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u8272\u306E\u6570\u3092\u6E1B\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7406\u60F3\u7684\u306B\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u304C256\u8272\u306B\u753B\u50CF\u3092\u5909\u63DB\u3057\u3066\u63D0\u4F9B\u3059\u308B\u306E\u304C\u671B\u307E\u3057\u3044\u306E\u3067\u3059\u304C\u3001\u753B\u50CF\u64CD\u4F5C\u30C4\u30FC\u30EB\u3067\u3082\u753B\u50CF\u54C1\u8CEA\u3092\u5931\u3044\u3059\u304E\u308B\u3053\u3068\u306A\u304F\u5909\u63DB\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "paintnet"
  }), `Paint.NET`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u3082\u7C21\u5358\u306A\u65B9\u6CD5\u306FPaint.NET\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u5143\u306E\u753B\u50CF\u3092\u958B\u304D\u3001Save As\u3092\u4F7F\u7528\u3057\u3066\u753B\u50CF\u3092\u5225\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 Save Configuration\u30C0\u30A4\u30A2\u30ED\u30B0\u3067\u3001\u30D4\u30AF\u30BB\u30EB\u6DF1\u5EA6\u306B8\u30D3\u30C3\u30C8\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",
    mdxType: "Figure"
  }, "Paint.NET\u3067\u753B\u50CF\u30928\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u4FDD\u5B58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u65B0\u3057\u3044PNG\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 TouchGFX Designer\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/images-view"
  }), `Images\u30BF\u30D6`), `\u3067\u306F\u3001\u5FC5\u305AL8_ARGB8888\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30B7\u30E3\u30C9\u30A6\u30A4\u30F3\u30B0\u306F\u5341\u5206\u306B\u51E6\u7406\u3055\u308C\u307E\u305B\u3093\u304C\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u900F\u660E\u306A\u30A8\u30C3\u30B8\u306E\u30A2\u30A4\u30B3\u30F3\u306F\u3046\u307E\u304F\u8868\u793A\u3055\u308C\u307E\u3059\u3002 "Transparency threshold"\u5024\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u3001\u305D\u308C\u306B\u3088\u3063\u3066\u7D50\u679C\u304C\u5411\u4E0A\u3059\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "imagemagick"
  }), `ImageMagick`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9069\u3057\u305F\u3082\u30461\u3064\u306E\u30C4\u30FC\u30EB\u306F\u3001ImageMagick\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://imagemagick.org/"
  }), `www.imagemagick.org`), `\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\uFF09\u3067\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3055\u3089\u306B\u512A\u308C\u305FL8\u753B\u50CF\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30C4\u30FC\u30EB\u3067\u306F\u30B3\u30DE\u30F3\u30C9\uFF65\u30E9\u30A4\u30F3\u304B\u3089\u753B\u50CF\u5909\u63DB\u304C\u3067\u304D\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u306E\u4F7F\u7528\u304C\u9069\u3057\u3066\u3044\u307E\u3059\u3002 clock_bg.png\u3092\u6700\u5927\u3067256\u8272\u3092\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306B\u5909\u63DB\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `magick convert clock_bg.png -colors 256 clock_bg_l8_256.png
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ImageMagick\u3067\u306F\u3001\u753B\u50CF\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u8272\u306E\u6570\u3092\u77E5\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }), `magick identify -format %k Blue_Buttons_Round_Edge_small.png
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "comparison"
  }), `\u6BD4\u8F03`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BD4\u8F03\u306E\u305F\u3081\u306E3\u3064\u306E\u753B\u50CF\uFF08\u30AA\u30EA\u30B8\u30CA\u30EB\u3001Paint.NET\u4F7F\u7528\u306EL8\u3001ImageMagick\u4F7F\u7528\u306EL8\uFF09\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",
    mdxType: "Figure"
  }, "\u6642\u8A08\u306E\u753B\u50CF\u306E\u6BD4\u8F03: \u5DE6\u304B\u3089\u3001\u30AA\u30EA\u30B8\u30CA\u30EB\u3001Paint.NET\u3001ImageMagick"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u771F\u3093\u4E2D\u306E\u6642\u8A08\u3067\u306F\u3001\u5883\u754C\u306E\u5F71\u306E\u8A73\u7D30\u304C\u5931\u308F\u308C\u3066\u3044\u307E\u3059\u3002 \u3069\u3061\u3089\u306E\u5909\u63DB\u3082\u3001\u6642\u8A08\u306E\u80CC\u666F\u306E\u4E2D\u5FC3\u90E8\u306F\u554F\u984C\u306A\u3044\u3088\u3046\u306B\u898B\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "manual-configuration"
  }), `\u624B\u52D5\u306B\u3088\u308B\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3092\u4F7F\u7528\u305B\u305A\u306B\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u306B\u3042\u308Bapplication.config\u30D5\u30A1\u30A4\u30EB\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.config"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `{
  "image_configuration": {
    images": {
      "Blue_Buttons_Round_Edge_small.png": {
        "format": "L8_ARGB8888"
      }
    },
    "dither_algorithm": "2",
    "alpha_dither": "yes",
    "layout_rotation": "0",
    "opaque_image_format": "RGB888",
    "nonopaque_image_format": "ARGB8888",
    "section": "ExtFlashSection",
    "extra_section": "ExtFlashSection"
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"image_configuration"\u306E\u4E0B\u306E"images"\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u500B\u3005\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3055\u308C\u306A\u3044\u753B\u50CF\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08opaque_image_format\u307E\u305F\u306Fnonopaque_image_format\uFF09\u3067\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u306E\u8A2D\u5B9A\u3067\u306F\u3001\u53EF\u80FD\u306A\u9650\u308ATouchGFX Designer\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);