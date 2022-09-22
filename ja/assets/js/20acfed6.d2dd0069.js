"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3628],{

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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 43267:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
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
  id: "hardware-selection-external-memories",
  title: "\u5916\u90E8\u30E1\u30E2\u30EA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "id": "development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "title": "\u5916\u90E8\u30E1\u30E2\u30EA",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-external-memories",
    "title": "\u5916\u90E8\u30E1\u30E2\u30EA"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  },
  "next": {
    "title": "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/board-bring-up/board-introduction"
  }
};
const assets = {};


const toc = [{
  value: "\u4E0D\u63EE\u767A\u6027\u30E1\u30E2\u30EA",
  id: "non-volatile-memories",
  level: 2
}, {
  value: "NOR Flash",
  id: "nor-flash",
  level: 3
}, {
  value: "\u30B7\u30EA\u30A2\u30EBNOR Flash\u30E1\u30E2\u30EA",
  id: "serial-nor-flash-memories",
  level: 4
}, {
  value: "NOR\u30B7\u30F3\u30B0\u30EB\u3001\u30C7\u30E5\u30A2\u30EB\u3001\u30AF\u30EF\u30C3\u30C9\u3001\u30AA\u30AF\u30C8Flash\u30E1\u30E2\u30EA",
  id: "nor-single-dual-quad-octo-flash-memories",
  level: 5
}, {
  value: "\u30D1\u30E9\u30EC\u30EBNOR Flash\u30E1\u30E2\u30EA",
  id: "parallel-nor-flash-memories",
  level: 4
}, {
  value: "NAND Flash \u30E1\u30E2\u30EA",
  id: "nand-flash-memories",
  level: 3
}, {
  value: "eMMC\u30E1\u30E2\u30EA",
  id: "emmc-memories",
  level: 3
}, {
  value: "\u63EE\u767A\u6027\u30E1\u30E2\u30EA",
  id: "volatile-memories",
  level: 2
}, {
  value: "SRAM",
  id: "sram",
  level: 3
}, {
  value: "SDRAM",
  id: "sdram",
  level: 3
}, {
  value: "PSRAM",
  id: "psram",
  level: 3
}, {
  value: "\u305D\u306E\u4ED6\u306E\u30E1\u30E2\u30EA",
  id: "additional-memories",
  level: 3
}, {
  value: "\u5916\u90E8RAM\u5BB9\u91CF\u5BC6\u5EA6\u306E\u9078\u629E",
  id: "selection-of-external-ram-density",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u7AE0\u3067\u306F\u3001\u7D44\u8FBC\u307F\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u7528\u306E\u5916\u90E8\u30E1\u30E2\u30EA\u306E\u9078\u629E\u306B\u5F79\u7ACB\u3064\u60C5\u5831\u3092\u4E2D\u5FC3\u306B\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u7AE0\u3092\u8AAD\u3080\u524D\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../preliminary-considerations"
  }), `\u4E88\u5099\u8003\u5BDF`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection-mcu"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), `\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u3001\u9069\u5207\u306A\u5916\u90E8\u30E1\u30E2\u30EA\u3092\u9078\u629E\u3059\u308B\u969B\u306B\u91CD\u8981\u306B\u306A\u308B\u4F9D\u5B58\u95A2\u4FC2\u3092\u7406\u89E3\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX GUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u6642\u306B\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3001\u30D5\u30A9\u30F3\u30C8\u3001\u5909\u63DB\u5185\u5BB9\u306A\u3069\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u5916\u90E8\u30E1\u30E2\u30EA\u304C\u5FC5\u8981\u306B\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX GUI\u306E\u5B9F\u884C\u306B\u304A\u3044\u3066\u5916\u90E8\u30E1\u30E2\u30EA\u306B\u4F9D\u5B58\u3059\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4FDD\u5B58\u7528\u306E\u5185\u90E8RAM\uFF08\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\uFF09\u307E\u305F\u306F\u5916\u90E8RAM\u306E\u3044\u305A\u308C\u304B\u3001\u30C7\u30FC\u30BF\u4FDD\u5B58\u7528\u306E\u5185\u90E8 \u304A\u3088\u3073/\u307E\u305F\u306F \u5916\u90E8Flash\u306E\u3044\u305A\u308C\u304B\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u6982\u8981\u3067\u306F\u3001STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u4F7F\u7528\u3067\u304D\u308B\u3044\u304F\u3064\u304B\u306E\u5916\u90E8\u30E1\u30E2\u30EA\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3055\u307E\u3056\u307E\u306A\u30E1\u30E2\u30EA\u4F8B\u306E\u3044\u304F\u3064\u304B\u306F\u3001\u30B7\u30EA\u30A2\u30EB\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u30D1\u30E9\u30EC\u30EB\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u4E21\u65B9\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u30E1\u30E2\u30EA\u306E\u6982\u8981"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u307E\u3056\u307E\u306ASTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u591A\u69D8\u306A\u5916\u90E8\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u591A\u69D8\u306A\u5916\u90E8\u30E1\u30E2\u30EA\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "non-volatile-memories"
  }), `\u4E0D\u63EE\u767A\u6027\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3001\u30D5\u30A9\u30F3\u30C8\u3001\u5909\u63DB\u5185\u5BB9\u3001\u304A\u3088\u3073TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u306A\u3069\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30C7\u30FC\u30BF\uFF65\u30A2\u30BB\u30C3\u30C8\u306E\u4E00\u90E8\u307E\u305F\u306F\u3059\u3079\u3066\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u3001\u4E3B\u306B\u4E0D\u63EE\u767A\u6027\u30B9\u30C8\u30EC\u30FC\u30B8\uFF08Flash\uFF09\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u4E0D\u63EE\u767A\u6027\u30E1\u30E2\u30EA\u306FSTM32\u88FD\u54C1\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u304A\u308A\u3001\u30D1\u30E9\u30EC\u30EB\u307E\u305F\u306F\u30B7\u30EA\u30A2\u30EB\uFF65\u30E1\u30E2\u30EA\u306E\u3044\u305A\u308C\u304B\u3092\u4F7F\u7528\u3057\u3066\u3055\u307E\u3056\u307E\u306A\u69CB\u6210\u3067\u3001\u591A\u69D8\u306A\u30BF\u30A4\u30D7\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4E0D\u63EE\u767A\u6027\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u63EE\u767A\u6027\u30B9\u30C8\u30EC\u30FC\u30B8\u306F\u3001\u4EE5\u4E0B\u306B\u3088\u3063\u3066\u9078\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30BF\u30A4\u30D7\uFF08\u30D1\u30E9\u30EC\u30EB / \u30B7\u30EA\u30A2\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u90E8\u54C1\u70B9\u6570`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "nor-flash"
  }), `NOR Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u306F\u4E0D\u63EE\u767A\u6027\u30E1\u30E2\u30EA\u306E\u4E00\u3064\u3067\u3001\u30E1\u30E2\u30EA\u5185\u306E\u3042\u3089\u3086\u308B\u9818\u57DF\u3078\u306E\u30E9\u30F3\u30C0\u30E0\uFF65\u30A2\u30AF\u30BB\u30B9\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u306ENOR Flash\u306E\u5BB9\u91CF\u7BC4\u56F2\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `128Mbit`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `2Gbit`), `\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3068\u3048\u3070\u3001\u89E3\u50CF\u5EA6\u304C480x320\u3067\u8272\u6DF1\u5EA6\u304C16bpp\u306E\u5834\u5408\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u306F\u5168\u753B\u9762\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u7528\u306B\u6700\u5927300KB\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u30DC\u30BF\u30F3\u3001\u30B9\u30E9\u30A4\u30C0\u30FC\u3001\u30A2\u30A4\u30B3\u30F3\u3001\u4F7F\u7528\u30D5\u30A9\u30F3\u30C8\u3001\u8A00\u8A9E\u6570\u306A\u3069\u306B\u5FC5\u8981\u306A\u8FFD\u52A0\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u8003\u616E\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002 256Mbit\uFF0832MB\uFF09\u306ENOR Flash\u306B\u306F\u6700\u5927100\u500B\u306E\u56FA\u6709\u306E\u5168\u753B\u9762\u753B\u50CF\u3092\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5FC5\u8981\u306A\u6B8B\u308A\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30A2\u30BB\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408\u306F\u3082\u3063\u3068\u5C11\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9`), `\uFF65\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u8AAD\u307F\u51FA\u3057\u64CD\u4F5C\u3067\u5916\u90E8Flash\u304C\u5185\u90E8\u30E1\u30E2\u30EA\u3068\u3057\u3066\u8A8D\u8B58\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u3001CPU\u304C\u505C\u6B62\u3057\u305F\u4F4E\u96FB\u529B\u30E2\u30FC\u30C9\u3067\u3082\u30B7\u30B9\u30C6\u30E0\uFF65\u30DE\u30B9\u30BF\uFF08DMA\u3001LTDC\u3001DMA2D\u3001GFXMMU\u3001\u307E\u305F\u306FSDMMC\uFF09\u304C\u30E1\u30E2\u30EA\u306B\u81EA\u5F8B\u7684\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u306E\u3067\u3001\u30E2\u30D0\u30A4\u30EB\u304A\u3088\u3073\u30A6\u30A7\u30A2\u30E9\u30D6\u30EB\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6700\u9069\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u30E1\u30E2\u30EA\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u3055\u307E\u3056\u307E\u306A\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30E9\u30EC\u30EBNOR Flash\uFF08x8\u307E\u305F\u306Fx16\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30EA\u30A2\u30EBNOR Flash\uFF08\u30B7\u30EA\u30A2\u30EB\uFF65\u30E1\u30E2\u30EA\u7528\u306E\u30B7\u30F3\u30B0\u30EB\u3001\u30C7\u30E5\u30A2\u30EB\u3001\u30AF\u30EF\u30C3\u30C9\u3001\u30AA\u30AF\u30C8\u306E\u30C7\u30FC\u30BF\u30E9\u30A4\u30F3\u8A2D\u5B9A\u3001HyperBus Flash\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "serial-nor-flash-memories"
  }), `\u30B7\u30EA\u30A2\u30EBNOR Flash\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EBNOR Flash\u30E1\u30E2\u30EA\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30EC\u30FC\u30B8\u3068\u3057\u3066\u5E83\u304F\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30E1\u30E2\u30EA\uFF65\u30BF\u30A4\u30D7\u306B\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5229\u70B9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9AD8\u3044\u5468\u6CE2\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30EA\u30F3\u30C8\u56DE\u8DEF\u57FA\u677F\uFF08PCB\uFF09\u306E\u914D\u7DDA\u306E\u7C21\u7D20\u5316\u3068\u57FA\u677F\u30B5\u30A4\u30BA\u306E\u524A\u6E1B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30C9\u30EC\u30B9\u53EF\u80FD\u9818\u57DF\u304C\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `256MB`), `\u306E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5FC5\u8981\u306A\u30D4\u30F3\u6570\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `4`), `\u30D4\u30F3\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `12`), `\u30D4\u30F3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "nor-single-dual-quad-octo-flash-memories"
  }), `NOR\u30B7\u30F3\u30B0\u30EB\u3001\u30C7\u30E5\u30A2\u30EB\u3001\u30AF\u30EF\u30C3\u30C9\u3001\u30AA\u30AF\u30C8Flash\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u30E1\u30E2\u30EA\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u30C7\u30FC\u30BF\u30E9\u30A4\u30F3\u69CB\u6210\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30F3\u30B0\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30E5\u30A2\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AF\u30EF\u30C3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AA\u30AF\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30FC\u30BF\u30E9\u30A4\u30F3\u306E\u591A\u3044\u30B7\u30EA\u30A2\u30EBNOR Flash\u30E1\u30E2\u30EA\u306B\u5207\u308A\u66FF\u3048\u308B\u3068\u3001\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u6027\u80FD\u3068\u5E2F\u57DF\u5E45\u304C\u5F37\u5316\u3055\u308C\u307E\u3059\u304C\u3001STM32\u88FD\u54C1\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u305F\u3081\u306B\u5FC5\u8981\u306A\u30D4\u30F3\u6570\u304C\u5897\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30FC\u30BF\u30E9\u30A4\u30F3\u306E\u6570\u306B\u5FDC\u3058\u305F\u3001\u3055\u307E\u3056\u307E\u306ASPI\u30E1\u30E2\u30EA\u306E\u6982\u8981\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/serial-modes.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u30B7\u30EA\u30A2\u30EB\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u6982\u8981"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "parallel-nor-flash-memories"
  }), `\u30D1\u30E9\u30EC\u30EBNOR Flash\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30E9\u30EC\u30EBNOR Flash\u30E1\u30E2\u30EA\u306B\u306F\u3001\u6027\u80FD\u3084\u69CB\u6210\u306E\u70B9\u3067\u30B7\u30EA\u30A2\u30EBFlash\u30E1\u30E2\u30EA\u3068\u540C\u3058\u5229\u70B9\u304C\u3042\u308A\u307E\u3059\u3002 \u30D1\u30E9\u30EC\u30EBNOR Flash\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u306B\u69CB\u6210\u53EF\u80FD\u3067\u3001\u5185\u90E8\u30E1\u30E2\u30EA\u3067\u3042\u308B\u304B\u306E\u3088\u3046\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30D1\u30E9\u30EC\u30EB\u304A\u3088\u3073\u30B7\u30EA\u30A2\u30EBNOR Flash\u306E\u9055\u3044\u306F\u3001\u30D4\u30F3\u306E\u6570\u3068\u30D7\u30EA\u30F3\u30C8\u56DE\u8DEF\u57FA\u677F\uFF08PCB\uFF09\u306E\u8907\u96D1\u3055\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u30E1\u30E2\u30EA\u306B\u306F\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `47\u30D4\u30F3`), `\u304C\u5FC5\u8981\u3067\u3001\u3053\u306E\u3046\u3061\u30A2\u30C9\u30EC\u30B9\u7528\u306B\u6700\u592724\u30D4\u30F3\u3001\u30C7\u30FC\u30BF\u7528\u306B\u6700\u592716\u30D4\u30F3\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "nand-flash-memories"
  }), `NAND Flash \u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND Flash\u30E1\u30E2\u30EA\u306F\u3001\u5927\u5BB9\u91CF\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30A2\u30BB\u30C3\u30C8\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9AD8\u901F\u306E\u66F8\u304D\u8FBC\u307F\u3068\u6D88\u53BB\u64CD\u4F5C`), `\u3092\u5FC5\u8981\u3068\u3059\u308B\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6700\u9069\u3067\u3059\u3002 NAND Flash\u30E1\u30E2\u30EA\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u3067\u69CB\u6210\u3067\u304D\u306A\u3044\u305F\u3081\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u306B\u306F\u304A\u52E7\u3081\u3067\u304D\u307E\u305B\u3093`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND Flash\u306E\u5BB9\u91CF\u7BC4\u56F2\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `1 Gbit`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `512 Gbit`), `\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND Flash\u306E\u4F7F\u7528\u6642\u306B\u306F\u3001RAM\u5185\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u73FE\u5728\u4F7F\u7528\u3057\u3066\u3044\u308B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30BB\u30C3\u30C8\u3092RAM\u306B\u79FB\u52D5\u3057\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u63CF\u753B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/nand-flash.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "NOR Flash\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emmc-memories"
  }), `eMMC\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MMC Association\u306B\u3088\u3063\u3066\u7B56\u5B9A\u3055\u308C\u305FeMMC\uFF08Embedded Multi Media Card\uFF09\u306F\u3001NAND Flash\u3068\u540C\u7B49\u306B\u6A5F\u80FD\u3057\u3001\u30DE\u30B9\u30BF\u7D71\u5408\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002 eMMC\u306E\u660E\u3089\u304B\u306A\u5229\u70B9\u306E\u4E00\u3064\u306F\u3001\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u7D71\u5408\u3055\u308C\u3066\u304A\u308A\u3001\u6A19\u6E96\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068Flash\u30E1\u30E2\u30EA\u306E\u7BA1\u7406\u6A5F\u80FD\u3092\u5099\u3048\u3066\u3044\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u88FD\u9020\u30E1\u30FC\u30AB\u30FC\u306F\u88FD\u54C1\u958B\u767A\u306E\u4ED6\u306E\u90E8\u5206\u306B\u96C6\u4E2D\u3057\u3001\u958B\u767A\u671F\u9593\u3092\u77ED\u7E2E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC Flash\u306E\u5BB9\u91CF\u7BC4\u56F2\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `2Gbit`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `128Gbit`), `\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC\u306FNAND\u3084NOR Flash\u3068\u6BD4\u8F03\u3059\u308B\u3068\u30E9\u30F3\u30C0\u30E0\u8AAD\u307F\u51FA\u3057\u6027\u80FD\u304C\u4F4E\u304F\u306A\u308A\u307E\u3059\u3002 eMMC\u3067\u306F\u3001\u30E9\u30F3\u30C0\u30E0\u8AAD\u307F\u51FA\u3057\u901F\u5EA6\u306E\u4F4E\u3055\u3092\u514B\u670D\u3059\u308B\u305F\u3081\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8FFD\u52A0\u304C\u5FC5\u8981\u306B\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC Flash\u30E1\u30E2\u30EA\u306B\u306F\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `10\u30D4\u30F3`), `\u304C\u5FC5\u8981\u3067\u3001\u3053\u306E\u3046\u3061\u6700\u59278\u30D4\u30F3\u304C\u30C7\u30FC\u30BF\u7528\u30012\u30D4\u30F3\u304C\u5236\u5FA1\u7528\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/emmc-flash.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "eMMC\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "volatile-memories"
  }), `\u63EE\u767A\u6027\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8\u306E\u63EE\u767A\u6027\u30E1\u30E2\u30EA\u306F\u4E3B\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u90E8\u306ERAM\u306E\u5BB9\u91CF\u304C\u4E0D\u5341\u5206\u306A\u5834\u5408\u3084\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u304B\u3089\u30A2\u30BB\u30C3\u30C8\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001GUI\u3092\u5B9F\u884C\u3059\u308B\u7D44\u8FBC\u307F\u30B7\u30B9\u30C6\u30E0\u3067\u3088\u304F\u4F7F\u7528\u3055\u308C\u308BSRAM\u3001SDRAM\u3001PSRAM\u306B\u3064\u3044\u3066\u91CD\u70B9\u7684\u306B\u8AAC\u660E\u3057\u307E\u3059\u3002  \u305F\u3060\u3057\u3001\u3053\u308C\u4EE5\u5916\u306B\u3082\u8272\u3005\u306A\u5909\u7A2E\u304C\u63D0\u4F9B\u3055\u308C\u3066\u304A\u308A\u3001\u30E1\u30E2\u30EA\u88FD\u9020\u30E1\u30FC\u30AB\u30FC\u306F\u300CHyper RAM\u300D\u3001\u300CIoT RAM\u300D\u3001\u300COctal RAM\u300D\u306A\u3069\u3001\u305D\u308C\u305E\u308C\u306E\u30E1\u30E2\u30EA\u306B\u7570\u306A\u308B\u547D\u540D\u30B9\u30AD\u30FC\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u5927\u90E8\u5206\u306B\u5171\u901A\u3057\u3066\u3044\u308B\u306E\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3059\u308BSTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u70B9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/volatile-memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u63EE\u767A\u6027\u30E1\u30E2\u30EA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9069\u5207\u306A\u5916\u90E8RAM\u3092\u9078\u5B9A\u3059\u308B\u305F\u3081\u306B\u3001\u4EE5\u4E0B\u306E\u70B9\u306B\u7559\u610F\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6D88\u8CBB\u96FB\u529B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9 \u3001\u30D4\u30F3\u306E\u30B5\u30A4\u30BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../../../basic-concepts/framebuffer#amount-of-framebuffers"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A2D\u8A08`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sram"
  }), `SRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SRAM\u3068\u306F\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30E9\u30F3\u30C0\u30E0\u30A2\u30AF\u30BB\u30B9\uFF65\u30E1\u30E2\u30EA\u306E\u3053\u3068\u3067\u3001\u96FB\u6E90\u304C\u4F9B\u7D66\u3055\u308C\u3066\u3044\u308B\u9650\u308A\u30D3\u30C3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002 \u4E00\u822C\u7684\u306BSRAM\u3067\u306F\u3001DRAM\u3088\u308A\u3082\u9AD8\u901F\u30A2\u30AF\u30BB\u30B9\u304C\u53EF\u80FD\u3067\u3059\u304C\u3001\u30B3\u30B9\u30C8\u9AD8\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u3001\u5BC6\u5EA6\u3082\u4F4E\u304F\u306A\u308A\u307E\u3059\u3002 SRAM\u306F\u901A\u5E38\u306FDRAM\u3068\u6BD4\u8F03\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u6642\u9593\u304C\u77ED\u3044\uFF08\u9AD8\u901F\u3067\u3042\u308B\uFF09\u306E\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3001\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3001\u56DE\u8EE2\u306A\u3069\u3092\u591A\u7528\u3059\u308BGUI\u306B\u3088\u308A\u9069\u3057\u3066\u3044\u307E\u3059\u3002 SRAM\u306B\u306F\u540C\u671F\u30E2\u30FC\u30C9\u3068\u975E\u540C\u671F\u30E2\u30FC\u30C9\u306E\u4E21\u65B9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3001\u540C\u671F\u30E2\u30FC\u30C9\u306E\u65B9\u304C\u9AD8\u3044\u5E2F\u57DF\u5E45\u3092\u63D0\u4F9B\u3057\u307E\u3059\u304C\u3001\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u8907\u96D1\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u975E\u63EE\u767A\u6027\u30E9\u30F3\u30C0\u30E0\u30A2\u30AF\u30BB\u30B9\uFF65\u30E1\u30E2\u30EA\uFF08nvSRAM\u3068\u547C\u3070\u308C\u308B\uFF09\u3068\u3057\u3066\u5229\u7528\u3067\u304D\u3001\u3053\u308C\u306B\u306F\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u304A\u3088\u3073\u518D\u547C\u3073\u51FA\u3057\u3059\u308B\u6A5F\u80FD\u3082\u4ED8\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sdram"
  }), `SDRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SDRAM\u3068\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30E9\u30F3\u30C0\u30E0\u30A2\u30AF\u30BB\u30B9\uFF65\u30E1\u30E2\u30EA\u306E\u3053\u3068\u3067\u3001\u30C7\u30FC\u30BF\u306E\u5404\u30D3\u30C3\u30C8\u3092\u30AD\u30E3\u30D1\u30B7\u30BF\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u540C\u3058\u91CF\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u7269\u7406\u7684\u30B9\u30DA\u30FC\u30B9\u306FSRAM\u3068\u6BD4\u8F03\u3057\u3066\u5C11\u306A\u304F\u306A\u308A\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3092\u7DAD\u6301\u3059\u308B\u305F\u3081\u306B\u5B9A\u671F\u7684\u306A\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u304C\u5FC5\u8981\u306A\u306E\u3067\u3001SRAM\u3088\u308A\u3082\u5927\u304D\u306A\u96FB\u529B\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001SDRAM\u306E\u5BB9\u91CF\u5BC6\u5EA6\u306F16Mbit\u304B\u3089\u6700\u5927512Mbit\u306E\u7BC4\u56F2\u3067\u30018bit\u300116bit\u300132bit\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u4F7F\u7528\u3067\u304D\u3001100MHz\uFF5E200MHz\u306E\u5468\u6CE2\u6570\u3067\u52D5\u4F5C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `24bpp 800x480\u306E\u89E3\u50CF\u5EA6\u3067\u5B9F\u884C\u3055\u308C\u308B2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4FDD\u5B58\u3059\u308B\u306E\u306B\u9069\u3057\u305FSDRAM\u306F\u300132Mbit\u306ESDRAM\u3060\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002 \u30C0\u30D6\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8A2D\u8A08\u3067\u306F\u6700\u592718Mbit\u306ERAM\u304C\u5FC5\u8981\u306B\u306A\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "psram"
  }), `PSRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PSRAM\u3068\u306F\u7591\u4F3C\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30E9\u30F3\u30C0\u30E0\u30A2\u30AF\u30BB\u30B9\uFF65\u30E1\u30E2\u30EA\u306E\u3053\u3068\u3067\u3001DRAM\u306E\u5185\u90E8\u69CB\u9020\uFF08\u5236\u5FA1\u30ED\u30B8\u30C3\u30AF\uFF09\u3068SRAM\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002 \u901A\u5E38\u306F\u30018Mbit\uFF5E256Mbit\u306E\u7BC4\u56F2\u306E\u5BB9\u91CF\u5BC6\u5EA6\u3067\u3059\u3002 \u5F93\u6765\u306ESDRAM\u3084SRAM\u3068\u6BD4\u8F03\u3057\u3066\u3001PSRAM\u306F\u9AD8\u901F\u3067\u4F4E\u6D88\u8CBB\u96FB\u529B\u3068\u3044\u3046\u5229\u70B9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-memories"
  }), `\u305D\u306E\u4ED6\u306E\u30E1\u30E2\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044Octal RAM\u304A\u3088\u3073Hyper RAM\u30E1\u30E2\u30EA\u306F\u3001\u30B7\u30EA\u30A2\u30EB\u306E8bit\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u30B7\u30F3\u30B0\u30EB\u304A\u3088\u3073\u30C7\u30E5\u30A2\u30EB\uFF65\u30C7\u30FC\u30BF\u30EC\u30FC\u30C8\uFF65\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3057\u3066\u304A\u308A\u3001\u9AD8\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u3068\u512A\u308C\u305F\u96C6\u7A4D\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selection-of-external-ram-density"
  }), `\u5916\u90E8RAM\u5BB9\u91CF\u5BC6\u5EA6\u306E\u9078\u629E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u914D\u7F6E\u3059\u308B\u65B9\u91DD\u3092\u304A\u6301\u3061\u306E\u5834\u5408\u306F\u3001\u6B21\u306E\u8868\u306B\u5E02\u8CA9\u306E\u3055\u307E\u3056\u307E\u306A\u5BB9\u91CF\u5BC6\u5EA6\u306ERAM\u306E\u6982\u8981\u304C\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u306B\u306F\u30011\u30012\u30014\u30018\u300116\u300124bit/pixel\u306E\u30C0\u30D6\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u69CB\u6210\u3067\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306ARAM\u306E\u6982\u8981\u3082\u793A\u3055\u308C\u3066\u3044\u307E\u3059\uFF08\u3053\u308C\u3089\u306E\u6570\u5024\u30922\u3067\u5272\u308C\u3070\u3001\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u5FC5\u8981\u306A\u5BB9\u91CF\u5BC6\u5EA6\u304C\u308F\u304B\u308A\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u69CB\u6210\u3067\u5341\u5206\u3067\u3059\u3057\u3001\u4E00\u90E8\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u914D\u7F6E\u3059\u308B\u306E\u306B\u5341\u5206\u306ARAM\u304C\u5185\u8535\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SDRAM\u304A\u3088\u3073OctoSPI\u306E\u5BB9\u91CF\u5BC6\u5EA6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u30C0\u30D6\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u69CB\u6210\u306B\u5FC5\u8981\u306ARAM"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);