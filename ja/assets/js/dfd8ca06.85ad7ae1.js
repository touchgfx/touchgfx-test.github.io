"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7004],{

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

/***/ 62124:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "touchgfx-on-lowcost-hardware",
  title: "\u4F4E\u30B3\u30B9\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u306ETouchGFX"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/touchgfx-on-lowcost-hardware",
  "id": "development/scenarios/touchgfx-on-lowcost-hardware",
  "title": "\u4F4E\u30B3\u30B9\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u306ETouchGFX",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/touchgfx-on-lowcost-hardware",
  "permalink": "/4.20/ja/docs/development/scenarios/touchgfx-on-lowcost-hardware",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-on-lowcost-hardware",
    "title": "\u4F4E\u30B3\u30B9\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u306ETouchGFX"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/ja/docs/category/scenarios-2"
  },
  "next": {
    "title": "TouchGFX on NeoChrom",
    "permalink": "/4.20/ja/docs/development/scenarios/touchgfx-on-gpu2d"
  }
};
const assets = {};



const toc = [{
  value: "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u6982\u8981",
  id: "hardware-overview",
  level: 2
}, {
  value: "GPIO\u5272\u308A\u5F53\u3066",
  id: "gpio-allocation",
  level: 3
}, {
  value: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB",
  id: "starting-a-project",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u66F4\u65B0",
  id: "display-updates",
  level: 2
}, {
  value: "\u63CF\u753B\u901F\u5EA6",
  id: "drawing-speed",
  level: 3
}, {
  value: "\u30B7\u30EA\u30A2\u30EBFlash\u642D\u8F09\u306ETouchGFX\u306E\u5236\u9650\u4E8B\u9805",
  id: "touchgfx-limitations-with-serial-flash",
  level: 2
}, {
  value: "\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC",
  id: "texture-mapper",
  level: 3
}, {
  value: "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30DA\u30A4\u30F3\u30BF",
  id: "bitmap-painter",
  level: 3
}, {
  value: "L8\u30D1\u30EC\u30C3\u30C8",
  id: "l8-palette",
  level: 3
}, {
  value: "\u30C9\u30E9\u30A4\u30D0",
  id: "drivers",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "display",
  level: 3
}, {
  value: "\u521D\u671F\u5316",
  id: "initialization",
  level: 4
}, {
  value: "\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C",
  id: "tearing-effect",
  level: 4
}, {
  value: "\u5916\u90E8Flash",
  id: "external-flash",
  level: 3
}, {
  value: "\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8",
  id: "linker-script",
  level: 4
}, {
  value: "Flash\u30ED\u30FC\u30C0",
  id: "flash-loader",
  level: 4
}, {
  value: "\u30DC\u30BF\u30F3",
  id: "buttons",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001RAM\u3084Flash\u306E\u642D\u8F09\u91CF\u304C\u5236\u9650\u3055\u308C\u3001\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u6A5F\u80FD\u304C\u306A\u304F\u3001\u5916\u90E8Flash\u3084\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306ESPI\u63A5\u7D9A\u304C\u4F4E\u901F\u3067\u3042\u308B\u4F4E\u30B3\u30B9\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067TouchGFX\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305F\u3001\u4E0E\u3048\u3089\u308C\u305F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067\u6700\u9069\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u3001\u3044\u304F\u3064\u304B\u30A2\u30C9\u30D0\u30A4\u30B9\u3092\u63D0\u793A\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u901A\u3057\u3066\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4F8B\u3068\u3057\u3066\u3001X-Nucleo-GFX01M1\u62E1\u5F35\u30DC\u30FC\u30C9\u4ED8\u304DSTM32G071 Nucleo\u30DC\u30FC\u30C9\u5411\u3051\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u62E1\u5F35\u30DC\u30FC\u30C9\u306B\u306F16\u30D3\u30C3\u30C8\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u30B7\u30EA\u30A2\u30EBFlash\u304C\u642D\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",
    mdxType: "Figure"
  }, "X-Nucleo-GFX01M1\u62E1\u5F35\u30DC\u30FC\u30C9\u4ED8\u304D\u306ENucleo-G071RB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-overview"
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30AD\u30C3\u30C8\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u69CB\u6210\u306F\u3001STM32G071\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3001SPI NOR Flash\u3001SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3001\u30B8\u30E7\u30A4\u30B9\u30C6\u30A3\u30C3\u30AF\uFF65\u30DC\u30BF\u30F3\u304B\u3089\u6210\u308A\u7ACB\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\xA0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `STM32G071RB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u8535RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u8535Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `128KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `Displaytech DT022CTFT`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u89E3\u50CF\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `240x320`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `16\u30D3\u30C3\u30C8RGB565`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `ILI9341V`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u63A5\u7D9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u63A5\u7D9A\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32MHz`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `Macronix MX25L6433F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR Flash\u30B5\u30A4\u30BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `64Mbit`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR Flash\u63A5\u7D9A\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32MHz`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306FSPI1\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u3001Flash\u306FSPI2\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u30C7\u30FC\u30BF\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u4E2D\u306B\u3001Flash\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.png",
    width: "500px",
    mdxType: "Figure"
  }, "X-Nucleo-GFX01M1\u3092\u63A5\u7D9A\u3057\u305FNucleo-G071RB\u306E\u69CB\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "gpio-allocation"
  }), `GPIO\u5272\u308A\u5F53\u3066`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u4FE1\u53F7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `GPIO\u30D4\u30F3`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4CS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4DCX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4SCK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4MOSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4TE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Flash CS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Flash SCK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB13`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Flash MOSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PC3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Flash MISO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PC2`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u3001Flash\u304A\u3088\u3073\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u4FE1\u53F7\u306EGPIO\u5272\u308A\u5F53\u3066\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u4FE1\u53F7\u306F\u3001\u30AA\u30B7\u30ED\u30B9\u30B3\u30FC\u30D7\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\uFF65\u30A2\u30CA\u30E9\u30A4\u30B6\u3092\u4F7F\u7528\u3057\u3066\u30E2\u30CB\u30BF\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u95A2\u3059\u308B\u554F\u984C\u306A\u3069\u306E\u30C7\u30D0\u30C3\u30B0\u6642\u306B\u975E\u5E38\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-project"
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32G071RB Nucleo\u8A55\u4FA1\u30AD\u30C3\u30C8\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001TouchGFX Designer\u3067\u7C21\u5358\u306B\u958B\u59CB\u3067\u304D\u307E\u3059\u3002 "Create New"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001STM32G071 Nucleo\u3092\u691C\u7D22\u3057\u307E\u3059\u3002  \u3053\u306E\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306F\u3001X-Nucleo-GFX01M1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B7\u30FC\u30EB\u30C9\u4ED8\u304D\u306ENucleo-G071RB\u30AD\u30C3\u30C8\u7528\u306B\u7279\u306B\u958B\u767A\u3055\u308C\u305F\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.png",
    mdxType: "Figure"
  }, "Nucleo-G071RB\u306E\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306F\u3001NOR Flash\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3001\u30DC\u30BF\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u7E26\u5411\u304D\u3068\u6A2A\u5411\u304D\u306E\u4E21\u65B9\u306E\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5411\u304D\u306F\u3001TouchGFX Designer\u306EConfig -> Display\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.png",
    mdxType: "Figure"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5411\u304D\u3092\u7E26\u307E\u305F\u306F\u6A2A\u306B\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X-Nucleo-GFX01M1\u30B7\u30FC\u30EB\u30C9\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u5143\u3005\u306F\u7E26\u5411\u304D\uFF08\u5E45\u3088\u308A\u9AD8\u3055\u306E\u65B9\u304C\u9577\u3044\uFF09\u3067\u3059\u304C\u3001\u6A2A\u5411\u304D\u3067\u3082\u7C21\u5358\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-updates"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306B\u793A\u3057\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u89E3\u50CF\u5EA6\u306F240x320\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002 \u5408\u8A08\u306776,800\u30D4\u30AF\u30BB\u30EB\uFF08153,600\u30D0\u30A4\u30C8\uFF09\u3067\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u9593\u306E\u63A5\u7D9A\u306FSPI\u300132MHz\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30014MB/\u79D2\uFF082M\u30D4\u30AF\u30BB\u30EB/\u79D2\uFF09\u306E\u8EE2\u9001\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u306F76.1Hz\u3067\u3001\u3053\u308C\u306B\u3088\u308A1\u30D5\u30EC\u30FC\u30E0\u3042\u305F\u308A13.14ms\u306E\u30D5\u30EC\u30FC\u30E0\u6642\u9593\u3068\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.png",
    mdxType: "Figure"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3089\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\u4FE1\u53F7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3064\u307E\u308A\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u7528\u306E\u30C7\u30FC\u30BF\u8EE2\u9001\u306B\u304B\u3051\u3089\u308C\u308B\u6642\u9593\u306F\u3001\u9577\u304F\u306613ms\u7A0B\u5EA6\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u6642\u9593\u5185\u3067\u3001200\u4E07\u30D4\u30AF\u30BB\u30EB/\u79D2 / 76 fps = 26,280\u30D4\u30AF\u30BB\u30EB/\u30D5\u30EC\u30FC\u30E0\uFF08\u307E\u305F\u306F\u3001\u30D5\u30EB\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E34%\uFF09\u3092\u8EE2\u9001\u3067\u304D\u307E\u3059\u3002 \u5B9F\u969B\u306B\u306F\u3001\u30D7\u30ED\u30C8\u30B3\u30EB\uFF65\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u306E\u305F\u3081\u306B\u3001SPI\u30D0\u30B9\u4E0A\u3067\u3053\u306E\u8EE2\u9001\u901F\u5EA6\u3092\u7DAD\u6301\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u306A\u3044\u306E\u3067\u3001\u30D5\u30EC\u30FC\u30E0\u5168\u4F53\u306E\u7D0430%\u4EE5\u4E0A\u3092\u9001\u4FE1\u3059\u308B\u3053\u3068\u306F\u671F\u5F85\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u66F4\u65B0\u304C\u3053\u306E\u30D4\u30AF\u30BB\u30EB\u91CF\u3092\u8D85\u3048\u308B\u5834\u5408\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306F\u30D5\u30EC\u30FC\u30E0\u6642\u9593\u5185\u306B\u8EE2\u9001\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3002 \u305D\u306E\u7D50\u679C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u306F\u66F4\u65B0\u5168\u4F53\u304C\u5B8C\u4E86\u3059\u308B\u524D\u306B\u3001\u66F4\u65B0\u4E2D\u306E\u30D5\u30EC\u30FC\u30E0\u304C\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u53E4\u3044\u30D5\u30EC\u30FC\u30E0\u3068\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u304C\u6DF7\u3058\u3063\u305F\u72B6\u614B\u3067\u8868\u793A\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u73FE\u8C61\u306F\u3001\u4E00\u90E8\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u30E6\u30FC\u30B6\u306B\u3068\u3063\u3066\u76EE\u7ACB\u3064\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u7279\u5B9A\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u53D7\u3051\u5165\u308C\u304C\u305F\u3044\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u305F\u3081ST\u3067\u306F\u3001\u66F4\u65B0\u306E\u30EC\u30D9\u30EB\u309230%\u672A\u6E80\u306B\u6291\u3048\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u3066\u3044\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001 \u30D5\u30EC\u30FC\u30E0\u306E\u66F4\u65B0\u3092\u5C11\u3057\u305A\u3064\u884C\u3046\u65B9\u6CD5\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u3053\u3068\u304B\u3089\u3001\u4E00\u822C\u7684\u306B\u306F\u30A2\u30A4\u30C6\u30E0\u306E\u79FB\u52D5\u3088\u308A\u3082\u753B\u9762\u4E0A\u3067\u30A2\u30A4\u30C6\u30E0\u3092\u5C55\u958B\u3059\u308B\u65B9\u304C\u3046\u307E\u304F\u3044\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/star.png",
    width: "400",
    mdxType: "Figure"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3089\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\u4FE1\u53F7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u661F\u3092\u53F3\u5074\u306B\u79FB\u52D5\u3059\u308B\u5834\u5408\u306F\u3001\u305D\u306E\u661F\u306B\u3088\u3063\u3066\u30AB\u30D0\u30FC\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u661F\u3092\u5C55\u958B\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u65B0\u3057\u3044\u30D4\u30AF\u30BB\u30EB\u306E\u307F\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u524D\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u66F4\u65B0\u3055\u308C\u305F\u30D4\u30AF\u30BB\u30EB\u306F\u5909\u66F4\u3055\u308C\u305A\u306B\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "drawing-speed"
  }), `\u63CF\u753B\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u306F\u3001\u6700\u592732MHz\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EBFlash\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u540C\u3058\u8EE2\u9001\u901F\u5EA6\u3067\u52D5\u4F5C\u3067\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30B7\u30EA\u30A2\u30EBFlash\u306B\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u6700\u5927\u901F\u5EA6\u3067\u30D3\u30C3\u30C8\u3092\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u5341\u5206\u306A\u901F\u5EA6\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306F\u3001Flash\u5185\u306E\u753B\u50CF\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304CRGB565\u3067\u3042\u308B\u5834\u5408\u306B\u306E\u307F\u6210\u308A\u7ACB\u3061\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306F\u3001Flash\u304B\u3089\u306E2\u30D0\u30A4\u30C8\u306E\u8AAD\u307F\u53D6\u308A\u304C1\u30D4\u30AF\u30BB\u30EB\u306B\u76F8\u5F53\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u3067\u30822\u30D0\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059\u3002 Flash\u5185\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304CARGB8888\u306E\u5834\u5408\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u30671\u30D4\u30AF\u30BB\u30EB\u3092\u751F\u6210\u3059\u308B\u306B\u306FFlash\u304B\u30892\u500D\u306E\u91CF\u306E\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u30B7\u30EA\u30A2\u30EBFlash\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8FFD\u3044\u3064\u3051\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5834\u5408\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30C7\u30FC\u30BF\u304C\u9023\u7D9A\u7684\u306B\u8EE2\u9001\u3055\u308C\u306A\u304F\u306A\u308A\u30011\u30D5\u30EC\u30FC\u30E0\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E30%\u3092\u5B8C\u5168\u306B\u66F4\u65B0\u3059\u308B\u3053\u3068\u304C\u4E0D\u53EF\u80FD\u3068\u306A\u308A\u307E\u3059\u3002 \u53EF\u80FD\u306A\u89E3\u6C7A\u6CD5\u306E1\u3064\u306F\u3001\u753B\u50CF\u3092\u5185\u8535Flash\u306B\u79FB\u52D5\u3059\u308B\u3053\u3068\u3067\u3001\u3082\u30461\u3064\u306F\u5F53\u7136\u306A\u304C\u3089\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306FFlash\u306E\u901F\u5EA6\u306B\u7E1B\u3089\u308C\u307E\u305B\u3093\u3002 \u305F\u3068\u3048\u3070\u3001 \u8272\u306E\u4ED8\u3044\u305F\u9577\u65B9\u5F62\u3092\u63CF\u753B\u3059\u308B\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3042\u308A\u307E\u3059\u3002 \u3082\u3061\u308D\u3093\u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u975E\u5E38\u306B\u9AD8\u901F\u3067\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8EE2\u9001\u901F\u5EA6\u3092\u5927\u304D\u304F\u4E0A\u56DE\u3063\u3066\u3044\u307E\u3059\u3002 \u30E9\u30A4\u30F3\u3084\u30B5\u30FC\u30AF\u30EB\u306A\u3069\u306E\u305D\u306E\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001CPU\u30EA\u30BD\u30FC\u30B9\u3092\u975E\u5E38\u306B\u591A\u304F\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u53EF\u80FD\u306A\u901F\u5EA6\u3067\u30D4\u30AF\u30BB\u30EB\u3092\u751F\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E30%\u3092\u66F4\u65B0\u3059\u308B\u3053\u3068\u3092\u671F\u5F85\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u8907\u96D1\u3055\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"
  }), `\u3053\u3061\u3089`), `\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-limitations-with-serial-flash"
  }), `\u30B7\u30EA\u30A2\u30EBFlash\u642D\u8F09\u306ETouchGFX\u306E\u5236\u9650\u4E8B\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EBFlash\u3092\u642D\u8F09\u3057\u305FSTM32G0\u4E0A\u306ETouchGFX\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D7\u30ED\u30B0\u30E9\u30DE\u304C\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u306E\u3042\u308B\u3044\u304F\u3064\u304B\u306E\u5236\u9650\u4E8B\u9805\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "texture-mapper"
  }), `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF08Texture Mapper\u3001Animation Texture Mapper\u3001Scalable Image\uFF09\u3067\u306F\u3001\u5916\u90E8SPI Flash\u306B\u4FDD\u5B58\u3055\u308C\u308B\u753B\u50CF\u3092\u63CF\u753B\u3067\u304D\u307E\u305B\u3093\u3002 \u30B7\u30EA\u30A2\u30EBFlash\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u753B\u50CF\u3092\u4F7F\u7528\u3057\u305F\u753B\u50CF\u56DE\u8EE2\u306A\u3069\u3067\u306F\u3001\u8A31\u5BB9\u53EF\u80FD\u306A\u6027\u80FD\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u3067\u753B\u50CF\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u305D\u306E\u753B\u50CF\u3092\u5185\u8535Flash\u307E\u305F\u306FRAM\u306B\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX Designer\u3067\u753B\u50CF\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308C\u3070\u3001\u7C21\u5358\u306B\u753B\u50CF\u3092\u5185\u90E8Flash\u306B\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Images\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u753B\u50CF\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u53F3\u5074\u3067\u3001"Section"\u5C5E\u6027\u3092"IntFlashSection"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.png",
    mdxType: "Figure"
  }, "\u753B\u50CF\u3092\u5185\u8535Flash\u306B\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\uFF65\u30B3\u30FC\u30C9\u306F\u5927\u304D\u3059\u304E\u308B\u306E\u3067\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001STM32G0\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u3092STM32G0\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u4F7F\u7528\u524D\u306B\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Config"\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001"Framework Features"\u3092\u9078\u629E\u3057\u3001\u95A2\u9023\u3059\u308B\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u307E\u305F\u306F\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u306E\u30B0\u30EB\u30FC\u30D7\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.png",
    mdxType: "Figure"
  }, "\u7279\u5B9A\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5BFE\u3057\u3066\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u3092\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `Bitmap Cache`), `\u3092\u4F7F\u7528\u3057\u3066\u3001\u753B\u50CF\u3092\u4E00\u6642\u7684\u306BRAM\u306B\u79FB\u52D5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bitmap-painter"
  }), `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30DA\u30A4\u30F3\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E9\u30A4\u30F3\u3001\u30B5\u30FC\u30AF\u30EB\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306F\u3001\u753B\u50CF\u306B\u8272\u4ED8\u3051\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057\u3001SPI Flash\u306B\u3042\u308B\u753B\u50CF\u3067\u306F\u3053\u308C\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306F\u3001\u5185\u8535Flash\u307E\u305F\u306FRAM\u306B\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "l8-palette"
  }), `L8\u30D1\u30EC\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u753B\u50CF\u3092\u30B7\u30EA\u30A2\u30EBFlash\u642D\u8F09\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30D1\u30EC\u30C3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u5185\u8535Flash\u306B\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u5236\u9650\u304C\u3042\u308A\u307E\u3059\uFF08\u3053\u308C\u3082\u6027\u80FD\u4E0A\u306E\u7406\u7531\u3067\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30EC\u30C3\u30C8\u3092\u5185\u8535Flash\u306B\u79FB\u52D5\u3059\u308B\u306B\u306F\u3001TouchGFX Designer\u3067"Extra Section"\u3092"IntFlashSection"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "drivers"
  }), `\u30C9\u30E9\u30A4\u30D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306FTouchGFX Generator\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3057\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-generator"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 TouchGFX Generator\u306FHAL\u30EC\u30A4\u30E4\u3092\u751F\u6210\u3057\u307E\u3059\u3002HAL\u30EC\u30A4\u30E4\u306F\u3001TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u4E00\u9023\u306E\u30ED\u30FC\u30EC\u30D9\u30EB\uFF65\u30C9\u30E9\u30A4\u30D0\uFF08\u3053\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3067\u3059\u3067\u306B\u5B9F\u88C5\u6E08\u307F\uFF09\u3068\u30EA\u30F3\u30AF\u3055\u305B\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u30ED\u30FC\u30EC\u30D9\u30EB\uFF65\u30C9\u30E9\u30A4\u30D0\u306F\u3001\u30E6\u30FC\u30B6\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/Src`), `\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u306F\u3001\u6B21\u306E3\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30C9\u30E9\u30A4\u30D0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D5\u30A1\u30A4\u30EB`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BDisplayDriver.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BDataReader.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DC\u30BF\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BButtonController.cpp`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u3054\u304F\u6A19\u6E96\u7684\u306ASPI\u30D7\u30ED\u30C8\u30B3\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3044\u304F\u3064\u304B\u306E\u30EC\u30B8\u30B9\u30BF\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002 \u30C7\u30FC\u30BF\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u3068\u304D\u306B\u3001\u30C1\u30C3\u30D7\uFF65\u30BB\u30EC\u30AF\u30C8\u304C\u30A2\u30B5\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u4ED6\u306EGPIO\u3084DCX\u306F\u3001\u30B3\u30DE\u30F3\u30C9\uFF65\u30D0\u30A4\u30C8\u3068\u30C7\u30FC\u30BF\uFF65\u30D0\u30A4\u30C8\u3092\u533A\u5225\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u306FDMA\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u8EE2\u9001\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30D4\u30AF\u30BB\u30EB\u3092\u8A08\u7B97\u4E2D\u3067\u3082\u3001\u30C7\u30FC\u30BF\u3092\u8EE2\u9001\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 DMA\u5B8C\u4E86\u306E\u5272\u8FBC\u307F\u3092\u4F7F\u7528\u3057\u3066\u3001\u4ECA\u5F8C\u306E\u63CF\u753B\u3067\u306E\u518D\u5229\u7528\u306E\u305F\u3081\u306B\u4F1D\u9001\u6E08\u307F\u306E\u30E1\u30E2\u30EA\u3092\u958B\u653E\u3057\u305F\u308A\u3001\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u304C\u3059\u3067\u306B\u7528\u610F\u3055\u308C\u3066\u3044\u308C\u3070\u8EE2\u9001\u3092\u518D\u958B\u3057\u305F\u308A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u5B9A\u30C7\u30FC\u30BF\u306FDMA\u3067\u306F\u9001\u3089\u308C\u307E\u305B\u3093\u3002\u3053\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u5FDC\u3058\u3066\u3001\u5C0F\u578B\u30D1\u30C3\u30B1\u30FC\u30B8\u9593\uFF08\u307E\u305F\u306F\u30D1\u30C3\u30B1\u30FC\u30B8\u5185\uFF09\u3067CS\u30D4\u30F3\u3068CDX\u30D4\u30F3\u3092\u5207\u308A\u66FF\u3048\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u306F\u8A2D\u5B9A\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u306F8bit\u30E2\u30FC\u30C9\u3067SPI\u3092\u4F7F\u7528\u3057\u307E\u3059\u304C\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u306E\u8EE2\u9001\u6642\u306B\u306F16bit\u30E2\u30FC\u30C9\u306B\u5909\u66F4\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30E1\u30E2\u30EA\u304C\u30EA\u30C8\u30EB\uFF65\u30A8\u30F3\u30C7\u30A3\u30A2\u30F3\uFF65\u30E2\u30FC\u30C9\u3067\u8AAD\u307F\u51FA\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002 RGB565\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30D4\u30AF\u30BB\u30EB\u306F\u3001\u6700\u521D\u306B\u4E0B\u4F4D\u30D0\u30A4\u30C8\uFF08G\u304A\u3088\u3073B\uFF09\u304C\u30012\u756A\u76EE\u306B\u4E0A\u4F4D\u30D0\u30A4\u30C8\uFF08R\u304A\u3088\u3073G\uFF09\u304CRAM\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u9806\u5E8F\u306F\u30018bit SPI\u304C\u8EE2\u9001\u306E\u305F\u3081\u306B\u30E1\u30E2\u30EA\u3092\u8AAD\u307F\u53D6\u308B\u3068\u304D\u306B\u3082\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002 SPI\u304C16bit\u30E2\u30FC\u30C9\u306E\u5834\u5408\u3001\u30C7\u30FC\u30BF\u306F\u30E1\u30E2\u30EA\u304B\u308916bit RGB565\u3068\u3057\u3066\u8AAD\u307F\u53D6\u3089\u308C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3068\u3063\u3066\u6B63\u3057\u3044\u9806\u5E8F\u3067\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `16bit DMA\u3092\u4F7F\u7528\u3057\u306A\u3044\u30C9\u30E9\u30A4\u30D0\u306F\u3001\u8EE2\u9001\u524D\u306B\u30D4\u30AF\u30BB\u30EB\u5185\u306E\u30D0\u30A4\u30C8\u3092\u30B9\u30EF\u30C3\u30D7\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "initialization"
  }), `\u521D\u671F\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u521D\u671F\u5316\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MB1642BDisplayDriver_DisplayInit(void)`), `\u3068\u3044\u3046\u95A2\u6570\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u306F6\u3064\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u9001\u4FE1\u3057\u307E\u3059\u304C\u3001\u3053\u308C\u306F\u63A8\u5968\u3055\u308C\u308B\u30D1\u30EF\u30FC\uFF65\u30AA\u30F3\uFF65\u30B7\u30FC\u30B1\u30F3\u30B9\u306B\u5F93\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Sleep Mode\uFF0811h\uFF09\u3092\u7D42\u4E86\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Normal Mode\uFF0813h\uFF09\u306B\u5165\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MX\u304A\u3088\u3073BGR\u30D3\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001Memory Access Control\uFF0836h\uFF09\u3092\u8A2D\u5B9A\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `16bit\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3001Pixel Format\uFF083Ah\uFF09\u3092\u8A2D\u5B9A\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Tearing Effect Line On\uFF0835h\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30E9\u30A4\u30F3 = 0\u3067\u3001Tear Scanline\uFF0844h\uFF09\u3092\u8A2D\u5B9A\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u9593\u306B\u3001\u30C9\u30E9\u30A4\u30D0\u306F100ms\u30B9\u30EA\u30FC\u30D7\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "tearing-effect"
  }), `\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3089\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\uFF08TE\uFF09\u4FE1\u53F7\u306F\u975E\u5E38\u306B\u91CD\u8981\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30E1\u30E2\u30EA\u306E\u66F4\u65B0\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u3068\u6B63\u78BA\u306B\u540C\u671F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u3092\u9632\u6B62\u3059\u308B\u306E\u306B\u3082\u5F79\u7ACB\u3061\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u66F4\u65B0\u30B5\u30A4\u30AF\u30EB\u3092\u958B\u59CB\u3059\u308B\u3068\u3001\u5FC5\u305A\u3053\u306E\u4FE1\u53F7\u3092\u30A2\u30B5\u30FC\u30C8\u3057\u307E\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3053\u306E\u4FE1\u53F7\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30C7\u30FC\u30BF\u8EE2\u9001\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TE\u4FE1\u53F7\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u5916\u90E8\u5272\u8FBC\u307F\u5165\u529B\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 CubeMx\u306F\u3001\u3053\u306E\u30D4\u30F3\u4E0A\u306B\u5272\u8FBC\u307F\u3092\u751F\u6210\u3057\u3066\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u5185\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u3001TouchGFX\u306B\u63CF\u753B\u958B\u59CB\u306E\u4FE1\u53F7\u3092\u9001\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)
{
  ...
  touchgfxSignalVSync();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-flash"
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B7\u30FC\u30EB\u30C9\u4E0A\u306ESPI NOR Flash\u306F\u3001\u6A19\u6E96\u306ESPI Flash\u3067\u3059\u3002 \u3053\u306E\u30C9\u30E9\u30A4\u30D0\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u3088\u308A\u30B7\u30F3\u30D7\u30EB\u3067\u3059\u3002 Flash\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u305F\u3081\u306B\u3001\u7279\u5225\u306A\u521D\u671F\u5316\u306E\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u306F\u30DD\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u305FSPI\uFF08\u5168\u30D0\u30A4\u30C8\u3067\u30D3\u30B8\u30FC\uFF65\u30A6\u30A7\u30A4\u30C8\uFF09\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u304B\u3001DMA\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 DMA\u3067\u30C7\u30FC\u30BF\u53D7\u4FE1\u306E\u958B\u59CB\u307E\u3067\u306E\u6642\u9593\u306F\u3001\u30DD\u30FC\u30EA\u30F3\u30B0\uFF65\u30E2\u30FC\u30C9\u306720\u30D0\u30A4\u30C8\u3092\u8AAD\u307F\u53D6\u308B\u305F\u3081\u306B\u304B\u304B\u308B\u6642\u9593\u3068\u307B\u307C\u540C\u3058\u306A\u306E\u3067\u3001\u77ED\u3044\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u53D6\u308A\u3067\u306F\u30DD\u30FC\u30EA\u30F3\u30B0\u3088\u308A\u9045\u304F\u306A\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u4E00\u65B9\u3001DMA\u306F\u5272\u8FBC\u307F\u4E2D\uFF08sysTick\u307E\u305F\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5272\u8FBC\u307F\u306A\u3069\uFF09\u3067\u3082\u5B9F\u884C\u3092\u7D9A\u3051\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30D4\u30AF\u30BB\u30EB\u306E\u63CF\u753B\u3067\u30D3\u30B8\u30FC\u72B6\u614B\u306B\u3042\u308B\u3068\u304D\u3067\u3082\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3067\u5B9F\u884C\u53EF\u80FD\u3067\u3059\u3002 \u3053\u3046\u3057\u305F\u7406\u7531\u304B\u3089\u4E21\u65B9\u306E\u65B9\u6CD5\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u30C9\u30E9\u30A4\u30D0\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u3068\u306F\u5225\u306EDMA\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u306E\u53D7\u4FE1\u3068\u3059\u3067\u306B\u63CF\u753B\u6E08\u307F\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8EE2\u9001\u3092\u540C\u6642\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-script"
  }), `\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30F3\u30AB\u306B\u3088\u3063\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u3055\u307E\u3056\u307E\u306A\u30C7\u30FC\u30BF\u306E\u914D\u7F6E\u5834\u6240\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 gcc\u30B3\u30F3\u30D1\u30A4\u30E9\u7528\u306E\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u6700\u521D\u306E\u90E8\u5206\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K
  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K
  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001NOR Flash\u306E\u30A2\u30C9\u30EC\u30B9\u304C0x90000000\u304B\u3089\u59CB\u307E\u308B\u3068\u5BA3\u8A00\u3057\u3066\u3044\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306EFlash\u30C9\u30E9\u30A4\u30D0\u306F\u3001SPI Flash\u304B\u30890x90000000\u30A2\u30C9\u30EC\u30B9\u306B\u3042\u308B\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u51FA\u3057\u307E\u3059\uFF08\u4E0B\u4F4D24\u30D3\u30C3\u30C8\u3092Flash\u5185\u306E\u30A2\u30C9\u30EC\u30B9\u3068\u3057\u3066\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeProgrammer\u3067\u4F7F\u7528\u3055\u308C\u308B\u5916\u90E8Flash\u30ED\u30FC\u30C0\u306F\u3001\u3053\u306E\u7BC4\u56F2\u306E\u30C7\u30FC\u30BF\u3092SPI Flash\u306B\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF08\u4E0B\u8A18\u3092\u53C2\u7167\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6B21\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001SPI Flash\u306B\u753B\u50CF\uFF08ExtFlashSection\uFF09\u30C7\u30FC\u30BF\u3068\u30D5\u30A9\u30F3\u30C8\uFF08FontFlashSection\uFF09\u30C7\u30FC\u30BF\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `  ExtFlashSection :
  {
    *(ExtFlashSection ExtFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH

  FontFlashSection :
  {
    *(FontFlashSection FontFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306B\u540C\u69D8\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u4ED6\u306E\u30C7\u30FC\u30BF\u3082SPI Flash\u306B\u914D\u7F6E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "flash-loader"
  }), `Flash\u30ED\u30FC\u30C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `G071 TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u306F\u3001STM32CubeProgrammer\u7528\u306EFlash\u30ED\u30FC\u30C0\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 Flash\u30ED\u30FC\u30C0\u306F\u3001SPI NOR Flash\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306EFlash\u30ED\u30FC\u30C0\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc/S25FL032P_STM32G071B-NUCLEO.stldr`), `\u3068\u3044\u3046\u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeIDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306FCubeIDE\u304B\u3089\u76F4\u63A5\u66F8\u304D\u8FBC\u3081\u307E\u3059\u304C\u3001IAR\u307E\u305F\u306FKeil\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306FSTM32CubeProgrammer\u3092\u4F7F\u7528\u3057\u3066\u66F8\u304D\u8FBC\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u30ED\u30FC\u30C0\u306FSTM32CubeProgrammer\u3067\u6700\u521D\u304B\u3089\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u305A\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240\u306Bstldr\u30D5\u30A1\u30A4\u30EB\u3092\u30B3\u30D4\u30FC\u3059\u308B\u3053\u3068\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.png",
    mdxType: "Figure"
  }, "STM32CubeProgrammer\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240\u3078\u306EFlash\u30ED\u30FC\u30C0\u306E\u30B3\u30D4\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u901A\u5E38\u3069\u304A\u308A\u306B\u3001STM32CubeProgrammer\u3067Flash\u30ED\u30FC\u30C0\u3092\u9078\u629E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.png",
    mdxType: "Figure"
  }, "STM32CubeProgrammer\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240\u3078\u306EFlash\u30ED\u30FC\u30C0\u306E\u30B3\u30D4\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u3053\u306EFlash\u30ED\u30FC\u30C0\u306F\u3001Nucleo-G071RB\u30DC\u30FC\u30C9\u3067\u4F7F\u7528\u3055\u308C\u308B\u7279\u5B9A\u306EGPIO\u8A2D\u5B9A\u3067\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EBFlash\u7528\u306E\u5225\u306EGPIO\u8A2D\u5B9A\u304C\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001Flash\u30ED\u30FC\u30C0\u3092\u540C\u3058\u3088\u3046\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buttons"
  }), `\u30DC\u30BF\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30BF\u30F3\uFF65\u30C9\u30E9\u30A4\u30D0\u306F\u975E\u5E38\u306B\u30B7\u30F3\u30D7\u30EB\u3067\u3059\u3002 \u3053\u3053\u3067\u306F\u3001MB1642B\u4E0A\u3067\u30B8\u30E7\u30A4\u30B9\u30C6\u30A3\u30C3\u30AF\u7528\u306B\u4F7F\u7528\u3055\u308C\u308B5\u3064\u306EGPIO\u3068\u3001Nucleo\u30DC\u30FC\u30C9\u4E0A\u306E\u9752\u8272\u306E\u30E6\u30FC\u30B6\uFF65\u30DC\u30BF\u30F3\u306E\u72B6\u614B\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30DC\u30BF\u30F3\uFF65\u30C9\u30E9\u30A4\u30D0\u306F\u3001TouchGFX\u3067BottonController\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30DC\u30BF\u30F3\u306E\u62BC\u4E0B\u306FTouchGFX Designer\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u76F4\u63A5\u5229\u7528\u53EF\u80FD\u3060\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u4EE5\u4E0B\u306E\u3088\u3046\u306B\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u5185\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::handleKeyEvent(uint8_t key)
{
    if (key == '6')
    {
        application().gotoScreen2Screen();
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3055\u308C\u308B\u30AD\u30FC\uFF65\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30AD\u30FC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30B3\u30FC\u30C9`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5DE6\uFF08Left\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'4'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53F3\uFF08Right\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'6'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0A\uFF08Up\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'8'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0B\uFF08Down\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'2'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E2D\u592E\uFF08Center\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'5'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9752\u8272\u306E\u30E6\u30FC\u30B6\uFF65\u30DC\u30BF\u30F3\uFF08Blue User Button\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'0'`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30AD\u30FC\u306F\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30C6\u30F3\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3059\u308B\uFF08TouchGFX Designer\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `F5`), `\u30AD\u30FC\u3092\u62BC\u3059\uFF09\u5834\u5408\u306B\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);