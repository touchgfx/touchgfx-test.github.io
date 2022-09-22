"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8927],{

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

/***/ 24611:
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
  id: "dynamic-bitmaps",
  title: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "id": "development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "dynamic-bitmaps",
    "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  },
  "next": {
    "title": "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  }
};
const assets = {};


const toc = [{
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u8A2D\u5B9A",
  id: "dynamic-bitmap-configuration",
  level: 2
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F7F\u7528\u4F8B",
  id: "using-a-dynamic-bitmap-example",
  level: 2
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u64CD\u4F5C",
  id: "dynamic-bitmap-operations",
  level: 2
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F5C\u6210",
  id: "creating-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u524A\u9664",
  id: "deleting-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u53D6\u5F97",
  id: "get-the-address-of-the-pixels-in-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5857\u308A\u3064\u3076\u3057\u9818\u57DF\u3092\u8A2D\u5B9A",
  id: "set-the-solid-area-of-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u7E26\u5411\u304D\u30E2\u30FC\u30C9\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7",
  id: "dynamic-bitmap-in-portrait-mode",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u6A19\u6E96\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308B\u306E\u3067\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u4F7F\u7528\u53EF\u80FD\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306FPNG\u30D5\u30A1\u30A4\u30EB\u306A\u3069\u304B\u3089\u5909\u63DB\u3055\u308C\u3001\u30B5\u30A4\u30BA\u304A\u3088\u3073\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u60C5\u5831\u3068\u5171\u306B\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u884C\u6642\u306BRAM\u5185\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002 \u3053\u308C\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7`), `\u3068\u547C\u3070\u308C\u307E\u3059\u3002 \u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308B\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3068\u540C\u3058\u3088\u3046\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u753B\u50CF\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3084\u30DC\u30BF\u30F3\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306A\u3069\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-configuration"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F5C\u6210\u6642\u306B\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u30D4\u30AF\u30BB\u30EB\uFF65\u30E1\u30E2\u30EA\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u524D\u306B\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u624B\u52D5\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u3001TouchGFX Designer\u3084Generator\u3067\u306F\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u5B9A\u624B\u9806\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "caching-bitmaps"
  }), `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u4F7F\u7528\u3055\u308C\u308B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u6700\u5927\u6570\u3092\u5B9A\u7FA9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u6700\u5927\u6570\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30A2\u30C9\u30EC\u30B9\u3084\u30B5\u30A4\u30BA\u3068\u5171\u306BTouchGFX\u306B\u6E21\u3055\u308C\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4`), `\u3064\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u6301\u3064\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u4EFB\u610F\u306E\u30D5\u30A1\u30A4\u30EB\u3067\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u8A2D\u5B9A\u3092\u4E00\u5EA6\u3060\u3051\u884C\u3046\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001FrontendApplication.cpp\u304C\u3088\u3044\u3067\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,10-10}",
    "{2-2,10-10}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize, 4);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Windows\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u3053\u3053\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3082\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 Windows\u3067\u5927\u304D\u306A\u914D\u5217\u3092\u5BA3\u8A00\u3057\u305F\u308A\u3001malloc\u3092\u4F7F\u7528\u3057\u305F\u308A\u3059\u308B\u306E\u306F\u7C21\u5358\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-10}",
    "{9-10}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
#ifdef SIMULATOR
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);
    Bitmap::setCache(cacheStartAddr, cacheSize, 4);
#else
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize, 4);
#endif
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-a-dynamic-bitmap-example"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F7F\u7528\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u305D\u308C\u3092\u8868\u793A\u3059\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5FC5\u8981\u3067\u3059\u3002 \u305D\u3053\u3067\u3001\u753B\u50CF\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30D3\u30E5\u30FC\u306B\u633F\u5165\u3057\u307E\u3059\uFF08\u30B3\u30FC\u30C9\u307E\u305F\u306FDesigner\u3092\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-6}",
    "{6-6}": true
  }), `#include <touchgfx/widgets/Image.hpp>
using namespace touchgfx;
class TemplateView : public View
{
private:
    Image image;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3067\u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u6B21\u306E3\u3064\u306E\u624B\u9806\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u4F7F\u7528\u3059\u308B\u30E1\u30E2\u30EA\u3092\u30AF\u30EA\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5272\u5F53\u3066`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306FsetupScreen\u3067\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u300116bpp\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8RGB565\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C24\u30D3\u30C3\u30C8\u306E\u5834\u5408\u306FRGB888\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u900F\u660E\u306A\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8ARGB8888\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30C9\u30EC\u30B9\u306F\u3001dynamicBitmapGetAddress\u95A2\u6570\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-9,14-14}",
    "{9-9,14-14}": true
  }), `#include <touchgfx/Bitmap.hpp>
void TemplateView::setupScreen()
{
    BitmapId bmpId;

    //Create (16bit) dynamic bitmap of size 100x150
    const int width = 100;
    const int height = 150;
    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);

    //set all pixels white
    if (bmpId != BITMAP_INVALID)
    {
       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);
    }

    //Make Image widget show the dynamic bitmap
    image.setBitmap(Bitmap(bmpId));

    //Position image and add to View
    image.setXY(20, 20);
    add(image);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u53D6\u5F97\u3059\u308B\u30D4\u30AF\u30BB\u30EB\uFF65\u30E1\u30E2\u30EA\u306F\u30AF\u30EA\u30A2\u3055\u308C\u306A\u3044\u306E\u3067\u3001\u3053\u308C\u3092\u3059\u3050\u306B\u30AF\u30EA\u30A2\u307E\u305F\u306F\u4E0A\u66F8\u304D\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3080\u5834\u5408\u306B\u306F\u3001memset\u3078\u306E\u547C\u3073\u51FA\u3057\u3092\u30ED\u30FC\u30C0\u306E\u30B3\u30FC\u30C9\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/loading-images-at-runtime"
  }), `\u5B9F\u884C\u6642\u306E\u753B\u50CF\u306E\u8AAD\u8FBC\u307F`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-operations"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u64CD\u4F5C\u306F\u3059\u3079\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../api/classes/classtouchgfx_1_1_bitmap"
  }), `Bitmap`), `\u30AF\u30E9\u30B9\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-dynamic-bitmap"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u3001\u6307\u5B9A\u3055\u308C\u305F\u5E45\u3001\u9AD8\u3055\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5F62\u5F0F\u3067\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u4F5C\u6210\u3055\u308C\u308B\u306E\u306F\u3001\u5341\u5206\u306A\u91CF\u306E\u672A\u4F7F\u7528\u306E\u30E1\u30E2\u30EA\u304C\u4F7F\u7528\u53EF\u80FD\u306A\u5834\u5408\u306E\u307F\u3067\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u4F5C\u6210\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306FBITMAP_INVALID\u3092\u8FD4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "deleting-a-dynamic-bitmap"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u524A\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u524A\u9664\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static bool Bitmap::dynamicBitmapDelete(BitmapId id)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "get-the-address-of-the-pixels-in-a-dynamic-bitmap"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u53D6\u5F97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30ED\u30FC\u30C0\u304C\u753B\u50CF\u30C7\u30FC\u30BF\u3092\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u30B3\u30D4\u30FC\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static uint8_t* dynamicBitmapGetAddress(BitmapId id)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "set-the-solid-area-of-a-dynamic-bitmap"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5857\u308A\u3064\u3076\u3057\u9818\u57DF\u3092\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u9577\u65B9\u5F62\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u300C\u5857\u308A\u3064\u3076\u3057\u9818\u57DF\u300D\u306E\u6982\u5FF5\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-widgets#solid-area"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001RGB565\u3084RGB888\u306A\u3069\u306E\u4E0D\u900F\u660E\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001\u5857\u308A\u3064\u3076\u3057\u9818\u57DF\u304C\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5168\u4F53\u306B\u306A\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 ARGB8888\u306A\u3069\u306E\u900F\u660E\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u7A7A\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-in-portrait-mode"
  }), `\u7E26\u5411\u304D\u30E2\u30FC\u30C9\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u7E26\u5411\u304D\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u672C\u6765\u306E\u65B9\u5411\u304B\u308990\u5EA6\u56DE\u8EE2\u3057\u305F\u72B6\u614B\u3067\u30DE\u30A6\u30F3\u30C8\u3055\u308C\u3066\u3044\u308B\u72B6\u6CC1\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u3067\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u5C11\u3057\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u793A\u3059\u306E\u306FSTM32F746\u5411\u3051\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F8B\u3067\u3059\u3002 \u3053\u3053\u3067\u306F\u5E45\u304C480\u30D4\u30AF\u30BB\u30EB\u3001\u9AD8\u3055\u304C272\u30D4\u30AF\u30BB\u30EB\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u540C\u3058\u5BF8\u6CD5\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u7E26\u5411\u304D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `image1\u306E\u753B\u50CF\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u307E\u305B\u3093\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u8868\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7E26\u5411\u304D\u30E2\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u5EA7\u6A19\u7CFB\u304C\u53CD\u6642\u8A08\u56DE\u308A\u306B90\u5EA6\u56DE\u8EE2\u3057\u307E\u3059\u3002 \u5EA7\u6A19(0, 0)\u306F\u3001\u5DE6\u4E0A\u9685\u306E'D'\u306E\u8FD1\u304F\u306B\u306A\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u6700\u521D\u306E\u30D0\u30A4\u30C8\uFF08\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u6700\u521D\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u6307\u5B9A\uFF09\u306F\u3001\u53F3\u4E0A\u9685\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u7E26\u5411\u304D\u3067\u5B9F\u884C\u3055\u308C\u308B\u3068\u304D\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u56DE\u8EE2\u3057\u307E\u305B\u3093`), `\u3002 \u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u3082\u540C\u3058\u3053\u3068\u304C\u8A00\u3048\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\uFF08\u30DE\u30A6\u30F3\u30C8\u3059\u308B\uFF09\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u6700\u521D\u306E\u30E9\u30A4\u30F3\u306B\u8868\u793A\u3055\u305B\u308B\u30D4\u30AF\u30BB\u30EB\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5DE6\u306E\u30A8\u30C3\u30B8\u306B\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u95A2\u6570\u3067\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3057\u3001\u4E0A\u306E\u884C\u3092\u7DD1\u8272\u3001\u53F3\u306E\u30A8\u30C3\u30B8\u3092\u8D64\u8272\u306B\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-14,16-21}",
    "{13-14,16-21}": true
  }), `void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
    BitmapId bmpId;
    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);

    if (bmpId != BITMAP_INVALID)
    {
        //set all pixels white
        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);
        memset(bitmapPixels, 0xFF, 100*100*2);

        //first 200 pixels red, => two column on the right on display
        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;

        //first two pixels in all rows green in bitmap => top two rows on display
        for (int i = 0; i<100; i++)
        {
            bitmapPixels[i*100]     = 0x07E0;
            bitmapPixels[i*100 + 1] = 0x07E0;
        }
    }

    image1.setBitmap(bmpId);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",
    noShadow: "true",
    width: "272",
    mdxType: "Figure"
  }, "\u7E26\u5411\u304D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B3\u30F3\u30C6\u30F3\u30C4"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);