"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1657],{

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

/***/ 60902:
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
  title: "\u52D5\u614B\u9EDE\u9663\u5716"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "id": "development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "title": "\u52D5\u614B\u9EDE\u9663\u5716",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "dynamic-bitmaps",
    "title": "\u52D5\u614B\u9EDE\u9663\u5716"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Canvas Widgets",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  },
  "next": {
    "title": "\u4E8C\u9032\u4F4D\u5B57\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  }
};
const assets = {};


const toc = [{
  value: "\u52D5\u614B\u9EDE\u9663\u5716\u914D\u7F6E",
  id: "dynamic-bitmap-configuration",
  level: 2
}, {
  value: "\u4F7F\u7528\u52D5\u614B\u9EDE\u9663\u5716\u7BC4\u4F8B",
  id: "using-a-dynamic-bitmap-example",
  level: 2
}, {
  value: "\u52D5\u614B\u9EDE\u9663\u5716\u64CD\u4F5C",
  id: "dynamic-bitmap-operations",
  level: 2
}, {
  value: "\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716",
  id: "creating-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u522A\u9664\u52D5\u614B\u9EDE\u9663\u5716",
  id: "deleting-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u7372\u53D6\u52D5\u614B\u9EDE\u9663\u5716\u4E2D\u50CF\u7D20\u7684\u4F4D\u5740",
  id: "get-the-address-of-the-pixels-in-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u8A2D\u7F6E\u52D5\u614B\u9EDE\u9663\u5716\u7684\u5BE6\u5FC3\u5340\u57DF",
  id: "set-the-solid-area-of-a-dynamic-bitmap",
  level: 3
}, {
  value: "\u8C4E\u5C4F\u6A21\u5F0F\u7684\u52D5\u614B\u9EDE\u9663\u5716",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u4ECB\u7D39\u5982\u4F55\u4F7F\u7528\u52D5\u614B\u9EDE\u9663\u5716\u3002 \u6CE8\u610F\uFF0C\u6A19\u6E96\u9EDE\u9663\u5716\u6703\u88AB\u7DE8\u8B6F\u5230\u61C9\u7528\u4E2D\uFF0C\u56E0\u6B64\u5FC5\u9808\u5728\u7DE8\u8B6F\u6642\u63D0\u4F9B\u3002 \u9EDE\u9663\u5716\u5F9EPNG\u7B49\u683C\u5F0F\u7684\u6A94\u6848\u8F49\u63DB\u800C\u4F86\uFF0C\u8207\u5927\u5C0F\u548C\u683C\u5F0F\u8CC7\u8A0A\u4E00\u8D77\u4EE5\u5167\u90E8\u683C\u5F0F\u4FDD\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u9084\u53EF\u4EE5\u5728\u57F7\u884C\u6642\u9593\u5728RAM\u4E2D\u5275\u5EFA\u9EDE\u9663\u5716\u3002 \u9019\u88AB\u7A31\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u52D5\u614B\u9EDE\u9663\u5716`), `\u3002 \u52D5\u614B\u9EDE\u9663\u5716\u7684\u4F7F\u7528\u8207\u7DE8\u8B6F\u5230\u61C9\u7528\u4E2D\u7684\u975C\u614B\u9EDE\u9663\u5716\u76F8\u540C\u3002 \u9019\u610F\u5473\u8457\u60A8\u53EF\u4EE5\u901A\u904E\u5716\u50CF\u548C\u6309\u9215\u7B49\u5C0F\u90E8\u4EF6\u4F7F\u7528\u52D5\u614B\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-configuration"
  }), `\u52D5\u614B\u9EDE\u9663\u5716\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716\u6642\uFF0C\u5F9E\u9EDE\u9663\u5716\u5FEB\u53D6\u5206\u914D\u50CF\u7D20\u5B58\u5132\u7A7A\u9593\u3002 \u56E0\u6B64\uFF0C\u60A8\u5FC5\u9808\u5148\u914D\u7F6E\u9EDE\u9663\u5716\u5FEB\u53D6\uFF0C\u7136\u5F8C\u624D\u80FD\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716\u3002 \u9019\u662F\u4E00\u500B\u4E0D\u80FD\u5728TouchGFX Designer\u6216Generator\u4E2D\u57F7\u884C\u7684\u624B\u52D5\u904E\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53C3\u898B\u95DC\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "caching-bitmaps"
  }), `\u9EDE\u9663\u5716\u5FEB\u53D6`), `\u7684\u6587\u7AE0\u7372\u53D6\u914D\u7F6E\u8AAA\u660E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u9808\u5B9A\u7FA9\u61C9\u7528\u4E2D\u4F7F\u7528\u7684\u52D5\u614B\u9EDE\u9663\u5716\u7684\u6700\u5927\u6578\u91CF\u3002 \u8A72\u6700\u5927\u503C\u8207\u9EDE\u9663\u5716\u5FEB\u53D6\u4F4D\u5740\u548C\u5927\u5C0F\u4E00\u8D77\u50B3\u905E\u5230TouchGFX\u3002 \u9019\u88E1\u6211\u5011\u914D\u7F6E\u7684\u662F\u5177\u6709\u6700\u591A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4`), `\u5F35\u52D5\u614B\u9EDE\u9663\u5716\u7684\u9EDE\u9663\u5716\u5FEB\u53D6\u3002 \u60A8\u53EF\u4EE5\u5728\u61C9\u7528\u4E2D\u7684\u4EFB\u4F55\u6A94\u4E2D\u57F7\u884C\u3002 \u5982\u9700\u53EA\u57F7\u884C\u4E00\u6B21\uFF0C\u6A94FrontendApplication.cpp\u662F\u500B\u4E0D\u932F\u7684\u9078\u64C7\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u4F7F\u7528Windows\u6A21\u64EC\u5668\uFF0C\u5247\u9084\u5FC5\u9808\u5728\u6B64\u5275\u5EFA\u9EDE\u9663\u5716\u5FEB\u53D6\u3002 \u5728Windows\u4E0A\uFF0C\u53EF\u4EE5\u5BB9\u6613\u5730\u5BA3\u544A\u5927\u9663\u5217\u6216\u4F7F\u7528malloc\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u4F7F\u7528\u52D5\u614B\u9EDE\u9663\u5716\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u4F7F\u7528\u52D5\u614B\u9EDE\u9663\u5716\uFF0C\u6211\u5011\u9700\u8981\u4E00\u500B\u5C0F\u90E8\u4EF6\u4F86\u986F\u793A\u5B83\u3002 \u70BA\u6B64\uFF0C\u5728\u8996\u5716\uFF08\u5728\u7A0B\u5F0F\u78BC\u4E2D\u6216Designer\u4E2D\uFF09\u4E2D\u63D2\u5165\u4E00\u500B\u5716\u50CF\u5C0F\u90E8\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5C0F\u90E8\u4EF6\u548C\u52D5\u614B\u9EDE\u9663\u5716\u7684\u4F7F\u7528\u904E\u7A0B\u5206\u70BA\u4E09\u6B65\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5728\u9EDE\u9663\u5716\u5FEB\u53D6\u4E2D\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6E05\u7A7A\u52D5\u614B\u9EDE\u9663\u5716\u4F7F\u7528\u7684\u5B58\u5132\u7A7A\u9593`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C07\u9EDE\u9663\u5716\u5206\u914D\u7D66\u5C0F\u90E8\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728setupScreen\u4E2D\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716\u3002 \u9019\u88E1\u6211\u5011\u4F7F\u752816bpp\u683C\u5F0FRGB565\u3002 \u5982\u679C\u5F71\u50CF\u7DE9\u885D\u70BA24\u4F4D\uFF0C\u5247\u4F7F\u7528RGB888\u3002 \u5982\u9700\u5275\u5EFA\u900F\u660E\u9EDE\u9663\u5716\uFF0C\u4F7F\u7528\u683C\u5F0FARGB8888\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904EdynamicBitmapGetAddress\u51FD\u6578\u8FD4\u56DE\u52D5\u614B\u9EDE\u9663\u5716\u4E2D\u50CF\u7D20\u7684\u4F4D\u5740\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5F9E\u9EDE\u9663\u5716\u5FEB\u53D6\u7372\u5F97\u7684\u50CF\u7D20\u5B58\u5132\u7A7A\u9593\u672A\u6E05\u7A7A\uFF0C\u5EFA\u8B70\u7ACB\u5373\u5C07\u5176\u6E05\u7A7A\u6216\u91CD\u5BEB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u5F9E\u6A94\u6848\u8F09\u5165\u5716\u50CF\uFF0C\u53EF\u4EE5\u7528\u8F09\u5165\u5668\u7A0B\u5F0F\u78BC\u66FF\u4EE3\u5C0Dmemset\u7684\u547C\u53EB\u3002 \u53C3\u898B\u6587\u7AE0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/loading-images-at-runtime"
  }), `\u5728\u57F7\u884C\u6642\u9593\u8F09\u5165\u5716\u50CF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-operations"
  }), `\u52D5\u614B\u9EDE\u9663\u5716\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u52D5\u614B\u9EDE\u9663\u5716\u64CD\u4F5C\u5168\u90E8\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../api/classes/classtouchgfx_1_1_bitmap"
  }), `Bitmap`), `\u985E\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-dynamic-bitmap"
  }), `\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u65B9\u6CD5\u7528\u6307\u5B9A\u7684\u5BEC\u5EA6\u3001\u9AD8\u5EA6\u548C\u9EDE\u9663\u5716\u683C\u5F0F\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716\u3002 \u50C5\u7576\u6709\u8DB3\u5920\u5927\u7684\u672A\u4F7F\u7528\u5B58\u5132\u7A7A\u9593\u6642\uFF0C\u624D\u80FD\u5275\u5EFA\u9EDE\u9663\u5716\u3002 \u5982\u679C\u672A\u5275\u5EFA\u9EDE\u9663\u5716\uFF0C\u8A72\u65B9\u6CD5\u8FD4\u56DEBITMAP_INVALID\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "deleting-a-dynamic-bitmap"
  }), `\u522A\u9664\u52D5\u614B\u9EDE\u9663\u5716`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u65B9\u6CD5\u522A\u9664\u52D5\u614B\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static bool Bitmap::dynamicBitmapDelete(BitmapId id)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "get-the-address-of-the-pixels-in-a-dynamic-bitmap"
  }), `\u7372\u53D6\u52D5\u614B\u9EDE\u9663\u5716\u4E2D\u50CF\u7D20\u7684\u4F4D\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u65B9\u6CD5\u8FD4\u56DE\u52D5\u614B\u9EDE\u9663\u5716\u7684\u4F4D\u5740\u3002 \u6A94\u6848\u8F09\u5165\u5668\u4F7F\u7528\u6B64\u65B9\u6CD5\u5C07\u5716\u50CF\u8CC7\u6599\u8907\u88FD\u5230\u9EDE\u9663\u5716\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static uint8_t* dynamicBitmapGetAddress(BitmapId id)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "set-the-solid-area-of-a-dynamic-bitmap"
  }), `\u8A2D\u7F6E\u52D5\u614B\u9EDE\u9663\u5716\u7684\u5BE6\u5FC3\u5340\u57DF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u65B9\u6CD5\u8A2D\u7F6E\u52D5\u614B\u9EDE\u9663\u5716\u7684\u5BE6\u5FC3\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u95B1\u8B80`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-widgets#solid-area"
  }), `Custom Widget`), `\u4E00\u7BC0\u4E2D\u95DC\u65BC\u201C\u5BE6\u5FC3\u5340\u57DF\u201D\u6982\u5FF5\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u50CFRGB565\u548CRGB888\u9019\u6A23\u7684\u975E\u900F\u660E\u683C\u5F0F\uFF0C\u5C07\u5BE6\u5FC3\u5340\u57DF\u9810\u8A2D\u8A2D\u7F6E\u70BA\u6574\u500B\u9EDE\u9663\u5716\u3002 \u5C0D\u65BC\u50CFARGB8888\u9019\u6A23\u7684\u900F\u660E\u683C\u5F0F\uFF0C\u5C07\u5BE6\u5FC3\u5340\u57DF\u8A2D\u7F6E\u70BA\u7A7A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-in-portrait-mode"
  }), `\u8C4E\u5C4F\u6A21\u5F0F\u7684\u52D5\u614B\u9EDE\u9663\u5716`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u80FD\u4EE5\u8C4E\u5C4F\u6A21\u5F0F\u904B\u884C\u3002 \u9019\u9069\u7528\u65BC\u986F\u793A\u5668\u81EA\u5176\u539F\u59CB\u65B9\u5411\u65CB\u8F4990\u5EA6\u5F8C\u5B89\u88DD\u7684\u60C5\u6CC1\u3002 \u5728\u8A72\u6A21\u5F0F\u4E0B\u4F7F\u7528\u52D5\u614B\u9EDE\u9663\u5716\u6642\uFF0C\u9700\u8981\u683C\u5916\u5C0F\u5FC3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662FSTM32F746\u7684\u5C08\u6848\u7BC4\u4F8B\u3002 \u5B83\u7684\u986F\u793A\u5668\u5BEC\u5EA6\u70BA480\u50CF\u7D20\uFF0C\u9AD8\u5EA6\u70BA272\u50CF\u7D20\u3002 \u5F71\u50CF\u7DE9\u885D\u5177\u6709\u76F8\u540C\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u8C4E\u5C4F\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6C92\u6709\u70BAimage1\u5716\u50CF\u5C0F\u90E8\u4EF6\u5206\u914D\u9EDE\u9663\u5716\u3002 \u6211\u5011\u5C07\u4F7F\u7528\u5B83\u986F\u793A\u52D5\u614B\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528\u8C4E\u5C4F\u6A21\u5F0F\u6642\uFF0C\u5750\u6A19\u7CFB\u7D71\u6CBF\u9006\u6642\u91DD\u65B9\u5411\u65CB\u8F4990\u5EA6\u3002 (0, 0) \u5EA7\u6A19\u4F4D\u65BC\u201CD\u201D\u9644\u8FD1\u7684\u5DE6\u4E0A\u89D2\u3002 \u5F71\u50CF\u7DE9\u885D\u7684\u7B2C\u4E00\u500B\u4F4D\u5143\u7D44\uFF08\u5C07\u87A2\u5E55\u4E0A\u7B2C\u4E00\u500B\u50CF\u7D20\u8457\u8272\uFF09\uFF0C\u4F4D\u65BC\u53F3\u4E0A\u89D2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u7576\u4EE5\u8C4E\u5C4F\u6A21\u5F0F\u904B\u884C\u6642\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4E0D`), `\u65CB\u8F49\u5F71\u50CF\u7DE9\u885D\u3002 This is also true for dynamic bitmaps. But the pixels we want to be shown on first line on the display (as mounted) must be drawn on the left edge in the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u51FD\u6578\u4E2D\u5275\u5EFA\u52D5\u614B\u9EDE\u9663\u5716\uFF0C\u4F7F\u4E0A\u9762\u4E00\u884C\u70BA\u7DA0\u8272\u4E14\u53F3\u908A\u7DE3\u70BA\u7D05\u8272\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u986F\u793A\u52D5\u614B\u9EDE\u9663\u5716\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",
    noShadow: "true",
    width: "272",
    mdxType: "Figure"
  }, "\u8C4E\u5C4F\u5C08\u6848\u5F71\u50CF\u7DE9\u885D\u5167\u5BB9"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);