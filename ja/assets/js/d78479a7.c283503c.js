"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7771],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 78715:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37793);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31217);
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
  id: "general-ui-component-performance",
  title: "\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/general-ui-component-performance",
  "id": "development/ui-development/ui-components/general-ui-component-performance",
  "title": "\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/general-ui-component-performance.mdx",
  "sourceDirName": "development/ui-development/ui-components",
  "slug": "/development/ui-development/ui-components/general-ui-component-performance",
  "permalink": "/4.20/ja/docs/development/ui-development/ui-components/general-ui-component-performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "general-ui-component-performance",
    "title": "\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Video\uFF08\u30D3\u30C7\u30AA\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/video"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/ja/docs/category/scenarios-1"
  }
};
const assets = {};


const toc = [{
  value: "\u753B\u50CF\u63CF\u753B",
  id: "image-drawing",
  level: 2
}, {
  value: "\u30C7\u30FC\u30BF\uFF65\u30B3\u30D4\u30FC\u3078\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B5\u30DD\u30FC\u30C8",
  id: "hardware-support-for-data-copy",
  level: 3
}, {
  value: "\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "image-format",
  level: 3
}, {
  value: "\u753B\u50CF\u30C7\u30FC\u30BF\u3078\u306E\u30A2\u30AF\u30BB\u30B9",
  id: "access-to-the-image-data",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9",
  id: "access-to-the-framebuffer",
  level: 3
}, {
  value: "\u753B\u50CF\u89E3\u50CF\u5EA6",
  id: "image-resolution",
  level: 3
}, {
  value: "\u900F\u660E\u5EA6",
  id: "transparency",
  level: 3
}, {
  value: "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u63CF\u753B",
  id: "mcu-drawing",
  level: 2
}, {
  value: "Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09",
  id: "canvas-widgets",
  level: 2
}, {
  value: "\u30C6\u30AD\u30B9\u30C8",
  id: "texts",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u5927\u90E8\u5206\u306EUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u4F7F\u7528\u3059\u308BTouchGFX\u306E\u4E00\u822C\u7684\u306A\u63CF\u753B\u64CD\u4F5C\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "image-drawing"
  }), `\u753B\u50CF\u63CF\u753B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u307C\u3059\u3079\u3066\u306EUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\u3001\u307B\u307C1\u3064\u4EE5\u4E0A\u306E\u753B\u50CF\u306E\u63CF\u753B\u306B\u4F9D\u5B58\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u753B\u50CF\u63CF\u753B\u306FTouchGFX\u306B\u304A\u3051\u308B\u6700\u3082\u91CD\u8981\u306A\u63CF\u753B\u64CD\u4F5C\u306E1\u3064\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30B7\u30B9\u30C6\u30E0\u304C\u753B\u50CF\u3092\u9AD8\u901F\u304B\u3064\u52B9\u679C\u7684\u306A\u65B9\u6CD5\u3067\u63CF\u753B\u3067\u304D\u308B\u3053\u3068\u306F\u3001\u591A\u304F\u306E\u5834\u5408\u306B\u6975\u3081\u3066\u91CD\u8981\u3067\u3059\u3002 \u753B\u50CF\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u3059\u308B\u8981\u56E0\u306F\u6570\u591A\u304F\u3042\u308A\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u307B\u307C\u3059\u3079\u3066\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u8A2D\u5B9A\u306B\u304A\u3044\u3066\u3001TouchGFX\u3067\u306E\u753B\u50CF\u63CF\u753B\u306F\u4ED6\u306E\u63CF\u753B\u64CD\u4F5C\u306B\u6BD4\u3079\u3066\u9AD8\u901F\u3067\u3042\u308B\u3068\u8003\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-data-copy"
  }), `\u30C7\u30FC\u30BF\uFF65\u30B3\u30D4\u30FC\u3078\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u975E\u5727\u7E2E\u306E\u753B\u50CF\u30C7\u30FC\u30BF\u3092\u3001\u9078\u629E\u3057\u305F\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08RGB565\u3001L8\u3001ARGB8888\u306A\u3069\uFF09\u3067\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u975E\u5727\u7E2E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5229\u70B9\u306F\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u306BTouchGFX\u304C\u753B\u50CF\u3092\u76F4\u63A5\u4F7F\u7528\u3057\u3001\u5909\u63DB\u306A\u3057\u3067\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u8EE2\u9001\u3067\u304D\u308B\u3053\u3068\u3067\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306BDMA\u304C\u642D\u8F09\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30E1\u30E2\u30EA\u306E\u30B3\u30D4\u30FC\u306B\u306F\u3053\u306E\u6A5F\u80FD\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u8EE2\u9001\u901F\u5EA6\u304C\u30A2\u30C3\u30D7\u3057\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8CA0\u8377\u304C\u6700\u5C0F\u5316\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306B\u5BFE\u3059\u308B\u5236\u9650\u306E1\u3064\u306F\u3001\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3067\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D4\u30AF\u30BB\u30EB\u306B\u3088\u3063\u3066\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u305F\u3081\u3001\u901A\u5E38\u306EDMA\u8EE2\u9001\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002 \u305F\u3060\u3057\u3001Chrom-ART / DMA2D\u306A\u3069\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u642D\u8F09\u306ESTM32\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u3053\u308C\u3089\u306E\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u306B\u3082DMA\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306F\u3001DMA\u304C\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u5B9F\u969B\u306B\u306F\u30B3\u30D4\u30FC\u3068\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u64CD\u4F5C\u3092\u4E00\u6C17\u306B\u5B9F\u884C\u3059\u308B\u306E\u3067\u3001\u901F\u5EA6\u304C\u5411\u4E0A\u3057\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8CA0\u8377\u3082\u5927\u5E45\u306B\u8EFD\u6E1B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-format"
  }), `\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u69CB\u6210\u306B\u3088\u3063\u3066\u306F\u3001\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3082\u753B\u50CF\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002 \u5927\u307E\u304B\u306B\u8A00\u3046\u3068\u3001\u8EE2\u9001\u3059\u308B\u30C7\u30FC\u30BF\u306E\u91CF\u304C\u5C11\u306A\u3044\u307B\u3069\u3001\u3088\u308A\u65E9\u304F\u8EE2\u9001\u3067\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001RGB565\u753B\u50CF\u306E\u8EE2\u9001\u306F\u540C\u7B49\u306ERGB888\u306B\u6BD4\u3079\u3066\u65E9\u304F\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001RGB565\u753B\u50CF\u306F\u540C\u7B49\u306ERGB888\u753B\u50CF\u306E3\u5206\u306E2\u306E\u30B5\u30A4\u30BA\u3067\u3042\u308B\u305F\u3081\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "access-to-the-image-data"
  }), `\u753B\u50CF\u30C7\u30FC\u30BF\u3078\u306E\u30A2\u30AF\u30BB\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u30C7\u30FC\u30BF\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306B\u5FC5\u8981\u306A\u6642\u9593\u306F\u975E\u5E38\u306B\u91CD\u8981\u3067\u3059\u3002\u753B\u50CF\u3092\u63CF\u753B\u3059\u308B\u305F\u3073\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002 TouchGFX\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u753B\u50CF\u30C7\u30FC\u30BF\u3092\u3001\u30A2\u30AF\u30BB\u30B9\u6642\u9593\u306E\u7570\u306A\u308B\u3055\u307E\u3056\u307E\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u4FDD\u5B58\u5834\u6240`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\u5916\u90E8Flash`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash\u306E\u5229\u70B9\u306F\u4F4E\u30B3\u30B9\u30C8\u3067\u3042\u308B\u3053\u3068\u3068\u30B5\u30A4\u30BA\u3067\u3059\uFF08\u5927\u5BB9\u91CF\u3067\u3042\u308B\u3053\u3068\u304C\u591A\u3044\uFF09\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u591A\u304F\u306E\u753B\u50CF\u3092\u53D6\u308A\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30A2\u30AF\u30BB\u30B9\u6642\u9593\u304C\u5927\u304D\u304F\u7570\u306A\u308A\u307E\u3059\u3002\u3057\u304B\u3057QSPI\u3084\u305D\u308C\u3068\u540C\u7B49\u306E\u3082\u306E\u3092\u9078\u629E\u3059\u308C\u3070\u3001\u9AD8\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u304C\u5F97\u3089\u308C\u3001\u753B\u50CF\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5927\u304D\u304F\u5411\u4E0A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\u5916\u90E8RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u753B\u50CF\u3092\u5916\u90E8RAM\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 TouchGFX\u3067\u3001\u753B\u50CF\u63CF\u753B\u306B\u76F4\u63A5\u4F7F\u7528\u3067\u304D\u306A\u3044\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\uFF08NAND\u3084EMMC\u306A\u3069\uFF09\u3092\u4F7F\u7528\u305B\u3056\u308B\u3092\u5F97\u306A\u3044\u30B1\u30FC\u30B9\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u5916\u90E8RAM\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306E\u753B\u50CF\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u3068\u3063\u3066\u5FC5\u9808\u306E\u8981\u56E0\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\u5185\u90E8Flash`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8Flash\u306E\u5BB9\u91CF\u306F\u975E\u5E38\u306B\u5236\u9650\u3055\u308C\u3066\u306F\u3044\u307E\u3059\u304C\u3001\u753B\u50CF\u306E\u4E00\u90E8\u307E\u305F\u306F\u3059\u3079\u3066\u3092\u5185\u90E8Flash\u306B\u4FDD\u5B58\u3059\u308B\u30B1\u30FC\u30B9\u3082\u3042\u308A\u307E\u3059\u3002 \u30A2\u30AF\u30BB\u30B9\u306F\u975E\u5E38\u306B\u9AD8\u901F\u306A\u306E\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u4E0D\u53EF\u6B20\u306A\u753B\u50CF\u304C\u3044\u304F\u3064\u304B\u3042\u308A\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u554F\u984C\u306B\u306A\u308B\u5834\u5408\uFF08\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u3067\u4F7F\u7528\u3055\u308C\u308B\u5834\u5408\u306A\u3069\uFF09\u306F\u3001\u53EF\u80FD\u3067\u3042\u308C\u3070\u5185\u90E8Flash\u3078\u306E\u4FDD\u5B58\u3092\u8A66\u3057\u3066\u307F\u308B\u4FA1\u5024\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\u5185\u90E8RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u975E\u5E38\u306B\u7A00\u3067\u3059\u304C\u3001\u5185\u90E8RAM\u304B\u3089\u753B\u50CF\u3092\u63CF\u753B\u3059\u308B\u30B1\u30FC\u30B9\u304C\u3042\u308A\u307E\u3059\u3002 \u30B9\u30C8\u30EC\u30FC\u30B8\u5BB9\u91CF\u306F\u975E\u5E38\u306B\u5236\u9650\u3055\u308C\u307E\u3059\u304C\u3001\u30A2\u30AF\u30BB\u30B9\u6642\u9593\u306F\u975E\u5E38\u306B\u901F\u3044\u306E\u3067\u3001\uFF08TouchGFX Image Caching\u3092\u4F7F\u7528\u3057\u3066\uFF09\u3053\u3053\u306B\u4FDD\u5B58\u3055\u308C\u305F\u753B\u50CF\u306F\u975E\u5E38\u306B\u9AD8\u901F\u3067\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "access-to-the-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u3092\u63CF\u753B\u3059\u308B\u3068\u5FC5\u305A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002 \u753B\u50CF\u306B\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u5B9F\u969B\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\u305F\u3081\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306B\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u3060\u3051\u3067\u306A\u304F\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u306E\u8AAD\u53D6\u308A\u3082\u884C\u3044\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4FDD\u5B58\u7528\u306B\u4F7F\u7528\u3057\u3066\u3044\u308BRAM\u3078\u306E\u8AAD\u53D6\u308A / \u66F8\u8FBC\u307F\u30A2\u30AF\u30BB\u30B9\u6642\u9593\u306F\u3001\u512A\u308C\u305F\u753B\u50CF\u63CF\u753B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5F97\u308B\u305F\u3081\u306E\u9375\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-resolution"
  }), `\u753B\u50CF\u89E3\u50CF\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8EE2\u9001\u304C\u5FC5\u8981\u306A\u30C7\u30FC\u30BF\u91CF\u306F\u753B\u50CF\u306E\u89E3\u50CF\u5EA6\u306B\u6BD4\u4F8B\u3059\u308B\u305F\u3081\u3001\u5FC5\u7136\u7684\u306B\u753B\u50CF\u89E3\u50CF\u5EA6\u306F\u753B\u50CF\u63CF\u753B\u64CD\u4F5C\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transparency"
  }), `\u900F\u660E\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u306E\u4E0D\u900F\u660E\u5EA6\u306F\u3001\u753B\u50CF\u306E\u63CF\u753B\u6642\u9593\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002 \u30A2\u30EB\u30D5\u30A1\u5024\u306E\u3042\u308B\u753B\u50CF\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u306E\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u5FC5\u8981\u306B\u306A\u308B\u306E\u3067\u3001\u306A\u3044\u753B\u50CF\u3088\u308A\u3082\u63CF\u753B\u6642\u9593\u304C\u9577\u304F\u306A\u308A\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u64CD\u4F5C\u3067\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u306E\u8AAD\u53D6\u308A\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u5857\u308A\u3064\u3076\u3057\u753B\u50CF\u306E\u5834\u5408\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u30C7\u30FC\u30BF\u3092\u5358\u7D14\u306B\u4E0A\u66F8\u304D\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u88C5\u3057\u3066\u3044\u308B\u5834\u5408\u3067\u3082\u540C\u3058\u3067\u3059\u3002 \u305F\u3060\u3057\u3001\u5857\u308A\u3064\u3076\u3057\u753B\u50CF\u3068\u534A\u900F\u660E\u306E\u753B\u50CF\u306E\u63CF\u753B\u306E\u6BD4\u7387\u306F\u3001\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3054\u3068\u306B\u7570\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mcu-drawing"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u63CF\u753B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u76F4\u63A5\u64CD\u4F5C\u306B\u4F9D\u5B58\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u306F\u3001\u7121\u52B9\u306A\u9818\u57DF\u3067\u30D4\u30AF\u30BB\u30EB\u3054\u3068\u306B1\u56DE\u4EE5\u4E0A\u306E\u8A08\u7B97\u3092\u5B9F\u884C\u3057\u3066\u304B\u3089\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u305D\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u304B\u306A\u308A\u6642\u9593\u304C\u304B\u304B\u308B\u64CD\u4F5C\u3067\u3001\u5404\u30D4\u30AF\u30BB\u30EB\u306E\u8A08\u7B97\u304C\u8907\u96D1\u306A\u5834\u5408\u306F\u7279\u306B\u4F4E\u901F\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u63CF\u753B\u3067\u591A\u304F\u306E\u8A08\u7B97\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u51E6\u7406\u80FD\u529B\u304C\u4E0D\u53EF\u6B20\u3067\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\uFF08\u5185\u90E8\u307E\u305F\u306F\u5916\u90E8RAM\u3078\u306E\u30A2\u30AF\u30BB\u30B9\uFF09\u3082\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30C7\u30FC\u30BF\u306E\u66F8\u8FBC\u307F\uFF08\u304A\u3088\u3073\u8AAD\u53D6\u308A\u3082\uFF09\u304C\u3001\u7121\u52B9\u306A\u9818\u57DF\u5185\u3067\u30D4\u30AF\u30BB\u30EB\u3054\u3068\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas-widgets"
  }), `Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/canvas-widgets"
  }), `Canvas Widget`), `\u306F\u3001\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B9\u3055\u308C\u305F\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092\u63CF\u753B\u3059\u308B\u3001\u7279\u6B8A\u306A\u30BF\u30A4\u30D7\u306ETouchGFX\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3059\u3002 \u901A\u5E38\u306F\u6975\u3081\u3066\u8907\u96D1\u306A\u306E\u3067\u3001\u63CF\u753B\u3082\u304B\u306A\u308A\u4F4E\u901F\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u306F\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u306E\u7121\u52B9\u306A\u90E8\u5206\u306E\u30B5\u30A4\u30BA\u3068\u76F4\u7DDA\u7684\u306B\u6BD4\u4F8B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget\u306B\u306F\u3001\u8A08\u7B97\u306E\u4E2D\u9593\u7D50\u679C\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306E\u30E1\u30E2\u30EA\uFF65\u30D6\u30ED\u30C3\u30AF\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u306E\u30D6\u30ED\u30C3\u30AF\u306E\u30B5\u30A4\u30BA\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3078\u306E\u5F71\u97FF\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/canvas-widgets"
  }), `Canvas Widget\u306E\u30BB\u30AF\u30B7\u30E7\u30F3`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u6A19\u6E96\u306ETouchGFX Canvas Widget\uFF08Circle\u306A\u3069\uFF09\u306E\u307B\u3068\u3093\u3069\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5909\u66F4\u90E8\u5206\u306E\u307F\u3092\u7121\u52B9\u5316\u3059\u308B\u66F4\u65B0\u65B9\u6CD5\u3092\u7528\u3044\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u305F\u3068\u3048\u3070Circle\u3092\u66F4\u65B0\u3059\u308B\u5834\u5408\u306F\u3001 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "circle::updateArc(...)\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"), "\u3053\u306E\u65B9\u6CD5\u3067\u306F\u30B5\u30FC\u30AF\u30EB\u5168\u4F53\u3092\u7121\u52B9\u5316\u305B\u305A\u306B\u3001\u5909\u66F4\u90E8\u5206\u306E\u307F\u3092\u7121\u52B9\u5316\u3057\u307E\u3059\u3002 \u6700\u9069\u306A\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5F97\u308B\u305F\u3081\u306B\u306F\u3001\u3053\u306E\u7A2E\u306E\u64CD\u4F5C\u3092\u5FC5\u305A\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts"
  }), `\u30C6\u30AD\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u306F\u753B\u50CF\u3092\u63CF\u753B\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002\u3064\u307E\u308A\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/texts-and-fonts"
  }), `\u30C6\u30AD\u30B9\u30C8\u306E\u30BB\u30AF\u30B7\u30E7\u30F3`), `\u3067\u793A\u3057\u305F\u3088\u3046\u306B\u3001\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u306F\u3059\u3079\u3066\u753B\u50CF\u306B\u5909\u63DB\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002 \u3053\u306E\u753B\u50CF\u306FA4\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3001\u57FA\u672C\u7684\u306B\u753B\u50CF\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u3054\u3068\u306B4\u30D3\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002 \u3053\u306E\u30D1\u30BF\u30FC\u30F3\u306B\u8272\u3092\u9069\u7528\u3059\u308B\u3068\u3001\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B9\u51E6\u7406\u3055\u308C\u305F\u6587\u5B57\u306E\u753B\u50CF\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u3067\u306F1\u6587\u5B57\u3054\u3068\u306B\u4E00\u9023\u306E\u753B\u50CF\u63CF\u753B\u64CD\u4F5C\u304C\u884C\u308F\u308C\u308B\u306E\u3067\u3001\u753B\u50CF\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u7279\u6027\u304C\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u306B\u3082\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u306B\u306F\u3001Chrom-ART / DMA2D\u306A\u3069\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u305F\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A\u3082\u542B\u307E\u308C\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);