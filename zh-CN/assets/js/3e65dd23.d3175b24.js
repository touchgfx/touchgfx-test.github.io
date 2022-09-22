"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4667],{

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

/***/ 59596:
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
  id: "caching-bitmaps",
  title: "\u7F13\u5B58\u4F4D\u56FE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "id": "development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "title": "\u7F13\u5B58\u4F4D\u56FE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/caching-bitmaps.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "caching-bitmaps",
    "title": "\u7F13\u5B58\u4F4D\u56FE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u81EA\u5B9A\u4E49\u5BB9\u5668",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-containers"
  },
  "next": {
    "title": "\u81EA\u5B9A\u4E49\u63A7\u4EF6",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-widgets"
  }
};
const assets = {};


const toc = [{
  value: "\u8BBE\u7F6E\u4F4D\u56FE\u7F13\u5B58",
  id: "setup-the-bitmap-cache",
  level: 2
}, {
  value: "\u4F4D\u56FE\u7F13\u5B58\u914D\u7F6E",
  id: "bitmap-cache-configuration",
  level: 3
}, {
  value: "\u4F7F\u7528TouchGFX Generator\u65F6\u542F\u7528\u4F4D\u56FE\u7F13\u5B58",
  id: "enabling-bitmap-cache-with-touchgfx-generator",
  level: 4
}, {
  value: "BlockCopy\u5C06\u6570\u636E\u4ECE\u95EA\u5B58\u590D\u5236\u5230\u7F13\u5B58",
  id: "blockcopy-copies-data-from-flash-to-the-cache",
  level: 3
}, {
  value: "\u7F13\u5B58\u64CD\u4F5C",
  id: "cache-operations",
  level: 2
}, {
  value: "\u7F13\u5B58\u7B56\u7565",
  id: "cache-strategies",
  level: 2
}, {
  value: "\u6309\u5C4F\u5E55\u7F13\u5B58\u4F4D\u56FE",
  id: "cache-bitmap-on-a-screen-basis",
  level: 3
}, {
  value: "\u66FF\u6362\u7F13\u5B58\u4E2D\u7684\u80CC\u666F\u4F4D\u56FE",
  id: "replace-the-background-bitmaps-in-the-cache",
  level: 3
}, {
  value: "\u7F13\u5B58\u5B58\u50A8\u7A7A\u95F4\u7BA1\u7406",
  id: "cache-memory-management",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBATouchGFX\u4E2D\u7684\u4F4D\u56FE\u7F13\u5B58\u3002 \u4F4D\u56FE\u7F13\u5B58\u662F\u4E13\u7528RAM\u7F13\u51B2\u533A\uFF0C\u5E94\u7528\u53EF\u5C06\u4F4D\u56FE\u4FDD\u5B58\uFF08\u6216\u7F13\u5B58\uFF09\u5728\u5176\u4E2D\u3002 \u5982\u679C\u7F13\u5B58\u4E86\u4F4D\u56FE\uFF0C\u5728\u7ED8\u5236\u4F4D\u56FE\u65F6\uFF0CTouchGFX\u5C06\u81EA\u52A8\u4F7F\u7528RAM\u7F13\u5B58\u4F5C\u4E3A\u50CF\u7D20\u6765\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F4D\u56FE\u7F13\u5B58\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\u5341\u5206\u6709\u7528\u3002 \u4ECERAM\u8BFB\u53D6\u6570\u636E\u901A\u5E38\u6BD4\u4ECE\u95EA\u5B58\u8BFB\u53D6\u8981\u5FEB\uFF08\u7279\u522B\u662F\u5728\u4F7F\u7528\u7EB9\u7406\u6620\u5C04\u5668\u65F6\uFF0C\u539F\u56E0\u662F\u5B83\u4F7F\u7528\u975E\u7EBF\u6027\u5B58\u50A8\u5668\u5B58\u53D6\uFF09\uFF0C\u56E0\u6B64\uFF0C\u7F13\u5B58\u5230RAM\u53EF\u63D0\u5347UI\u6027\u80FD\u3002 \u6CE8\u610F\uFF0C\u4ECE\u5185\u90E8\u95EA\u5B58\u7F13\u5B58\u5230\u5916\u90E8RAM\u53EF\u80FD\u4F1A\u964D\u4F4E\u6027\u80FD\u3002 \u5982\u679C\u7F13\u5B58\u5230RAM\uFF0C\u7531\u4E8E\u5C06\u4ECERAM\u8BFB\u53D6\u4F4D\u56FE\uFF08\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5199\u5165\u95EA\u5B58\u8981\u6C42\u662F\u975E\u5B58\u50A8\u5668\u6620\u5C04\u95EA\u5B58\uFF09\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5728\u663E\u793AUI\u7684\u540C\u65F6\u5C06\u95EA\u5B58\u7528\u4E8E\u5176\u4ED6\u76EE\u7684\uFF08\u5982\u65E5\u5FD7\u6587\u4EF6\uFF09\u3002  \u5F53\u60A8\u9700\u8981\u4FEE\u6539\u4F4D\u56FE\u50CF\u7D20\u65F6\uFF0C\u4F4D\u56FE\u9700\u4F4D\u4E8E\u53EF\u4FEE\u6539\u7684\u5B58\u50A8\u5668\u4E2D\uFF0C\u56E0\u6B64\u8FD9\u4E00\u70B9\u4E5F\u5F88\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51FA\u4E8E\u6027\u80FD\u65B9\u9762\u7684\u8003\u8651\uFF0CTouchGFX\u8981\u6C42\u5B58\u50A8\u5728\u5916\u90E8\u95EA\u5B58\u4E2D\u7684\u6240\u6709\u56FE\u5F62\u6570\u636E\u90FD\u80FD\u76F4\u63A5\u8BBF\u95EE\uFF08\u901A\u8FC7\u6307\u9488\uFF09\uFF0C\u65E0\u9700\u901A\u8FC7\u9A71\u52A8\u5C42\u3002 \u8FD9\u610F\u5473\u7740TouchGFX\u4E0D\u80FD\u4ECE\u975E\u5B58\u50A8\u5668\u6620\u5C04\u95EA\u5B58\uFF08\u5982SD\u5361\uFF09\u76F4\u63A5\u6E32\u67D3\u3002 \u4E3A\u4E86\u6253\u7834\u8FD9\u4E00\u9650\u5236\uFF0C\u4F4D\u56FE\u7F13\u5B58\u63D0\u4F9B\u4E86\u4E00\u79CD\u5728\u4E0A\u7535\u671F\u95F4\u7F13\u5B58RAM\u4E2D\u7684\u4E00\u4E9B\u6216\u5168\u90E8\u4F4D\u56FE\u6570\u636E\u7684\u673A\u5236\u3002 \u56E0\u6B64\uFF0C\u5F53\u60A8\u9700\u8981\u5C06\u4F4D\u56FE\u4FDD\u5B58\u5728\u6162\u901F\u5916\u90E8\u5B58\u50A8\u5668\uFF08\u5982U\u76D8\u6216SD\u5361\uFF09\u4E0A\u65F6\uFF0C\u4F4D\u56FE\u7F13\u5B58\u5C06\u5341\u5206\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "setup-the-bitmap-cache"
  }), `\u8BBE\u7F6E\u4F4D\u56FE\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u4F7F\u7528\u4F4D\u56FE\u7F13\u5B58\u7279\u6027\uFF0C\u60A8\u9996\u5148\u9700\u8981\u5411TouchGFX\u63D0\u4F9B\u4F4D\u56FE\u7F13\u5B58\u914D\u7F6E\uFF0C\u7136\u540E\uFF08\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF09\u63D0\u4F9B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BlockCopy`), `\u51FD\u6570\u7684\u786C\u4EF6\u7279\u5B9A\u7684\u5B9E\u73B0\uFF0C\u4EE5\u4FBF\u4ECE\u5916\u90E8\u5B58\u50A8\u5668\u8BFB\u53D6\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bitmap-cache-configuration"
  }), `\u4F4D\u56FE\u7F13\u5B58\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F4D\u56FE\u7F13\u5B58\u914D\u7F6E\u5305\u62EC\u6307\u5411\u7F13\u51B2\u533A\u7684\u6307\u9488\u548C\u7F13\u51B2\u533A\u5927\u5C0F\u3002 \u5728\u8C03\u7528Bitmap::setCache\u65F6\uFF0C\u5FC5\u987B\u5411TouchGFX\u63D0\u4F9B\u8FD9\u4E24\u4E2A\u503C\u3002 \u6B64\u8C03\u7528\u901A\u5E38\u4F4D\u4E8EFrontendApplication.cpp\u6587\u4EF6\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u5916\u90E8\u5B58\u50A8\u5668\u4E2D\u76843 MB\u7F13\u51B2\u4F5C\u4E3A\u4F4D\u56FE\u7F13\u5B58\u88AB\u4F20\u9012\u5230TouchGFX\u3002 \u5730\u5740\u7531\u5E94\u7528\u7A0B\u5E8F\u5458\u9009\u62E9\u3002 \u5728\u4E0B\u4E00\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u53EA\u58F0\u660E\u4E00\u4E2A\u9635\u5217\uFF0C\u5E76\u4E14\u53EA\u4F20\u9012\u9635\u5217\u7684\u5730\u5740\u548C\u5927\u5C0F\u3002 \u9635\u5217\u7684\u5177\u4F53\u4F4D\u7F6E\u5C06\u53D6\u51B3\u4E8E\u94FE\u63A5\u5668\u811A\u672C\u3002 \u5728\u5185\u90E8RAM\u4E2D\u521B\u5EFA\uFF08\u5C0F\uFF09\u4F4D\u56FE\u7F13\u5B58\u65F6\u6700\u5E38\u4F7F\u7528\u6B64\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

// Define an array for the bitmap cache
uint16_t cache[128*1024]; //256 KB cache

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    Bitmap::setCache(cache, sizeof(cache));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "enabling-bitmap-cache-with-touchgfx-generator"
  }), `\u4F7F\u7528TouchGFX Generator\u65F6\u542F\u7528\u4F4D\u56FE\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u4F7F\u7528CubeMX\u548CTouchGFX Generator\uFF0C\u5219\u4E5F\u53EF\u4EE5\u5728TouchGFXHAL.cpp\u4E2D\u542F\u7528\u548C\u914D\u7F6E\u4F4D\u56FE\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    /* Initialize TouchGFX Engine */
    TouchGFXGeneratedHAL::initialize();

    uint16_t* cacheStartAddr = (uint16_t*)0xC0008000;
    uint32_t cacheSize = 0x300000; //3 MB, as example

    touchgfx::Bitmap::setCache(cache, sizeof(cache));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60F3\u91CD\u7528\u7F13\u5B58\uFF0C\u5728\u8BBE\u7F6E\u65B0\u7684\u7F13\u5B58\u4E4B\u524D\u5FC5\u987B\u5220\u9664\u4E4B\u524D\u7684\u7F13\u5B58\uFF0C\u65B9\u6CD5\u662F\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Bitmap::removeCache()`), `\u3002 \u5982\u679C\u4EC5\u5728\u5E94\u7528\u4E2D\u8BBE\u7F6E\u4E00\u6B21\uFF0C\u5219\u65E0\u9700\u5220\u9664\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u7F13\u5B58\u6240\u6709\u4F4D\u56FE\uFF0C\u5219\u7F13\u5B58\u5927\u5C0F\u5FC5\u987B\u8DB3\u591F\u5927\uFF0C\u624D\u80FD\u5305\u542B\u6240\u6709\u4F4D\u56FE\u6570\u636E\u3002 \u6CE8\u610F\uFF1A\u4F1A\u6709\u5C11\u91CF\u5B58\u50A8\u7A7A\u95F4\u7528\u4E8E\u8BB0\u8D26\uFF088\u4E2A\u5B57\u8282 x \u5E94\u7528\u4E2D\u7684\u4F4D\u56FE\u6570\u91CF\uFF09\uFF0C\u56E0\u6B64\u5FC5\u987B\u5206\u914D\u6BD4\u539F\u59CB\u50CF\u7D20\u6570\u636E\u7684\u5B9E\u9645\u9700\u6C42\u7A0D\u5927\u7684\u5B58\u50A8\u7A7A\u95F4\u3002 \u8BE5\u503C\u53D6\u51B3\u4E8E\u5E94\u7528\u4E2D\u7684\u4F4D\u56FE\u6570\u91CF\uFF0C\u4F46\u989D\u5916\u591A\u51E0\u5343\u5B57\u8282\u901A\u5E38\u5373\u5DF2\u8DB3\u591F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "blockcopy-copies-data-from-flash-to-the-cache"
  }), `BlockCopy\u5C06\u6570\u636E\u4ECE\u95EA\u5B58\u590D\u5236\u5230\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7F13\u5B58\u4F4D\u56FE\u65F6\uFF0CTouchGFX\u4F1A\u4F7F\u7528HAL\u7C7B\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BlockCopy`), `\u51FD\u6570\u5C06\u50CF\u7D20\u4ECE\u539F\u59CB\u4F4D\u7F6E\u590D\u5236\u5230\u4F4D\u56FE\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4F4D\u56FE\u5B58\u50A8\u5728\u666E\u901A\u53EF\u5BFB\u5740\u95EA\u5B58\uFF08\u5982\u5185\u90E8\u95EA\u5B58\u6216\u5B58\u50A8\u5668\u6620\u5C04\u5916\u90E8\u95EA\u5B58\uFF08\u5982QSPI\u95EA\u5B58\uFF09\uFF09\u4E2D\uFF0C\u5219\u60A8\u65E0\u9700\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002 \u5185\u7F6E\u5B9E\u73B0\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u4F4D\u56FE\u5B58\u50A8\u5728\u4E0D\u53EF\u5BFB\u5740\u7684\u95EA\u5B58\uFF08\u5982\u6587\u4EF6\u7CFB\u7EDF\u6216\u975E\u5B58\u50A8\u5668\u6620\u5C04\u95EA\u5B58\uFF09\u4E2D\uFF0C\u5219\u6807\u51C6\u590D\u5236\u6CD5\u662F\u4E0D\u591F\u7684\uFF0C\u60A8\u9700\u8981\u63D0\u4F9B\u80FD\u591F\u4ECE\u7279\u5B9A\u95EA\u5B58\u8BFB\u53D6\u7684\u66F4\u65B0\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9605\u8BFB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../scenarios/using-non-memory-mapped-flash"
  }), `\u4F7F\u7528\u975E\u5B58\u50A8\u5668\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u56FE\u50CF`), `\u4E00\u8282\u4E2D\u5173\u4E8E\u8BE5\u4E3B\u9898\u7684\u66F4\u591A\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-operations"
  }), `\u7F13\u5B58\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F4D\u56FE\u7F13\u5B58\u64CD\u4F5C\u5168\u90E8\u653E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Bitmap`), `\u7C7B\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "strong"
  }, `\u4F4D\u56FE`), `\u7F13\u5B58\u65B9\u6CD5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8BF4\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cache(BitmapId id)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B64\u65B9\u6CD5\u7F13\u5B58\u4E00\u4E2A\u4F4D\u56FE\u3002 \u4EC5\u5F53\u7F13\u5B58\u4E2D\u6709\u8DB3\u591F\u5927\u7684\u672A\u4F7F\u7528\u5B58\u50A8\u7A7A\u95F4\u65F6\uFF0C\u624D\u7F13\u5B58\u4F4D\u56FE\u3002 \u5982\u679C\u4F4D\u56FE\u88AB\u7F13\u5B58\uFF0C\u8FD4\u56DEtrue\u3002 \u7F13\u5B58\u5DF2\u7F13\u5B58\u7684\u4F4D\u56FE\u4E0D\u4F1A\u6709\u4EFB\u4F55\u64CD\u4F5C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cacheReplaceBitmap(BitmapId out, BitmapId in)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B64\u65B9\u6CD5\u7528\u53E6\u4E00\u4E2A\u4F4D\u56FE\uFF08\u5165\uFF09\u66FF\u6362\u7F13\u5B58\u4E2D\u7684\u4F4D\u56FE\uFF08\u51FA\uFF09\u3002 \u4EC5\u5F53\u8981\u66FF\u6362\u7684\u4F4D\u56FE\u5DF2\u7F13\u5B58\u4E14\u4F4D\u56FE\u5927\u5C0F\uFF08\u5B57\u8282\u6570\uFF09\u76F8\u540C\u65F6\uFF0C\u6B64\u65B9\u6CD5\u624D\u80FD\u6210\u529F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cacheRemoveBitmap(BitmapId id)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B64\u65B9\u6CD5\u5220\u9664\u7F13\u5B58\u4E2D\u7684\u4F4D\u56FE\u3002 \u4F4D\u56FE\u4F7F\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u6B64\u540E\u53EF\u7528\u4E8E\u7F13\u5B58\u53E6\u4E00\u4E2A\u4F4D\u56FE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `void Bitmap::clearCache()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B64\u65B9\u6CD5\u5220\u9664\u7F13\u5B58\u4E2D\u7684\u6240\u6709\u5DF2\u7F13\u5B58\u4F4D\u56FE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `void Bitmap::cacheAll()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B64\u65B9\u6CD5\u7F13\u5B58\u6240\u6709\u4F4D\u56FE\u3002 \u5982\u679C\u5206\u914D\u7528\u4E8E\u7F13\u5B58\u7684RAM\u7A7A\u95F4\uFF08\u6216\u53EF\u7528\u7A7A\u95F4\uFF09\u5C0F\u4E8E\u4F4D\u56FE\u7684\u603B\u5927\u5C0F\uFF0C\u5219\u4E0D\u80FD\u4F7F\u7528\u6B64\u65B9\u6CD5\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-strategies"
  }), `\u7F13\u5B58\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u53EF\u5206\u914D\u7528\u4E8E\u4F4D\u56FE\u7F13\u5B58\u7684RAM\u7A7A\u95F4\u5C0F\u4E8E\u4F4D\u56FE\u7684\u603B\u5927\u5C0F\uFF0C\u5219\u542F\u52A8\u8FC7\u7A0B\u4E2D\u4E0D\u80FD\u7F13\u5B58\u6240\u6709\u4F4D\u56FE\u3002 \u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u53EA\u7F13\u5B58\u7B2C\u4E00\u4E2A\u5C4F\u5E55\u9700\u8981\u7684\u4F4D\u56FE\u3002 \u5728\u5C4F\u5E55\u4E4B\u95F4\u5207\u6362\u65F6\uFF0C\u60A8\u53EF\u4EE5\u5220\u9664\u4E00\u4E9B\u6216\u5168\u90E8\u5DF2\u7F13\u5B58\u4F4D\u56FE\uFF0C\u5E76\u7F13\u5B58\u4E0B\u4E00\u4E2A\u5C4F\u5E55\u6240\u9700\u7684\u4F4D\u56FE\u3002 \u4E0B\u4E00\u8282\u5BF9\u6B64\u8FDB\u884C\u4E86\u4E3E\u4F8B\u8BF4\u660E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cache-bitmap-on-a-screen-basis"
  }), `\u6309\u5C4F\u5E55\u7F13\u5B58\u4F4D\u56FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u7528\u7528\u6237\u754C\u9762\u7531\u4E00\u7EC4\u89C6\u56FE\u7EC4\u6210\u3002 \u89C6\u56FE\u51E0\u4E4E\u90FD\u4F1A\u4F7F\u7528\u4E00\u4E9B\u4F4D\u56FE\u3002  \u4E00\u79CD\u7B80\u5355\u7684\u7F13\u5B58\u7B56\u7565\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::setupScreen`), `\u4E2D\u7F13\u5B58\u6240\u6709\u4F4D\u56FE\uFF0C\u5E76\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::tearDownScreen`), `\u4E2D\u6E05\u9664\u7F13\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::setupScreen()
{
    //ensure background is cached
    Bitmap::cache(BITMAP_SCREEN2_ID);
    //cache some icons
    Bitmap::cache(BITMAP_ICON10_ID);
    Bitmap::cache(BITMAP_ICON11_ID);
    Bitmap::cache(BITMAP_ICON12_ID);
}

void Screen1View::tearDownScreen()
{
    //Remove all bitmaps from the cache
    Bitmap::clearCache();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7F13\u5B58\u7684\u5B58\u50A8\u7A7A\u95F4\u8981\u6C42\u662F\u4F4D\u56FE\u4F7F\u7528\u91CF\u6700\u591A\u7684\u5C4F\u5E55\u4F7F\u7528\u7684\u4F4D\u56FE\u5927\u5C0F\u3002 \u6B64\u65B9\u6CD5\u7684\u7F3A\u70B9\u662F\u5982\u679C\u4E24\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u89C6\u56FE`), `\u90FD\u4F7F\u7528\u4E00\u4E2A\u4F4D\u56FE\uFF0C\u4ECE\u7B2C\u4E00\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u89C6\u56FE`), `\u9000\u51FA\u65F6\u7F13\u5B58\u4E2D\u7684\u4F4D\u56FE\u4F1A\u88AB\u64E6\u9664\uFF0C\u5E76\u5728\u8FDB\u5165\u7B2C\u4E8C\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u89C6\u56FE`), `\u65F6\u518D\u6B21\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5BF9Bitmap::cacheRemoveBitmap\u4F7F\u7528\u9009\u62E9\u6027\u672A\u7F13\u5B58\u4F4D\u56FE\uFF0C\u4ECE\u800C\u51CF\u5C11\u6B64\u5F00\u9500\u3002 cacheRemoveBitmap\u7684\u7F3A\u70B9\u662F\u7F13\u5B58\u5B58\u50A8\u7A7A\u95F4\u788E\u7247\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7F13\u5B58\u7684\u53E6\u4E00\u4E2A\u666E\u904D\u7F3A\u70B9\u662F\u5728\u66F4\u6539UI\uFF08\u5982\u6DFB\u52A0\u6309\u94AE\uFF09\u65F6\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u7F13\u5B58\u4EE3\u7801\u6765\u5305\u542B\u65B0\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "replace-the-background-bitmaps-in-the-cache"
  }), `\u66FF\u6362\u7F13\u5B58\u4E2D\u7684\u80CC\u666F\u4F4D\u56FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5E94\u7528\u6709\u4E00\u7EC4\u5C0F\u4F4D\u56FE\uFF08\u5982\u56FE\u6807\uFF09\u548C\u4E00\u4E9B\u5927\u5168\u5C4F\u201C\u80CC\u666F\u201D\u4F4D\u56FE\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u53E6\u4E00\u79CD\u7B56\u7565\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FDB\u5165\u7B2C\u4E00\u4E2A\u5C4F\u5E55\u4E4B\u524D\u7F13\u5B58\u6240\u6709\u5C0F\u4F4D\u56FE\u3002 FrontendApplication\u6784\u9020\u51FD\u6570\u662F\u6267\u884C\u7F13\u5B58\u7684\u597D\u4F4D\u7F6E\u3002 \u53E6\u5916\uFF0C\u7F13\u5B58\u7B2C\u4E00\u4E2A\u5C4F\u5E55\u7684\u80CC\u666F\u4F4D\u56FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : touchgfx::MVPApplication(),
      transitionCallback(),
      frontendHeap(heap),
      model(m)
{
    //cache some icons
    Bitmap::cache(BITMAP_ICON10_ID);
    Bitmap::cache(BITMAP_ICON11_ID);
    Bitmap::cache(BITMAP_ICON12_ID);

    //cache first background
    Bitmap::cache(BITMAP_SCREEN1_ID);
    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember ID in a variable
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::setupScreen`), `\u65B9\u6CD5\u4E2D\uFF0C\u7528\u6240\u9700\u7684\u4F4D\u56FE\u66FF\u6362\u7F13\u5B58\u7684\u80CC\u666F\u4F4D\u56FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Screen1View::setupScreen()
{
    //ensure background is cached
    Bitmap::cacheReplaceBitmap(backgroundBitmapCached, BITMAP_SCREEN1_ID);
    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember new ID of cached bitmap
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::tearDownScreen()
{
    //nothing cache related
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u7B56\u7565\u7684\u7F13\u5B58\u5B58\u50A8\u7A7A\u95F4\u8981\u6C42\u662F\u7F13\u5B58\u7684\u4F4D\u56FE\u548C\u4E00\u5F20\u80CC\u666F\u4F4D\u56FE\u7684\u603B\u5927\u5C0F\u3002 \u76F8\u6BD4\u4E8E\u524D\u4E00\u79CD\u65B9\u6CD5\uFF0C\u6B64\u65B9\u6CD5\u7531\u4E8E\u89C6\u56FE\u4EE3\u7801\u8F83\u5C11\uFF0C\u5176\u4EE3\u7801\u66F4\u6613\u4E8E\u7EF4\u62A4\u3002 \u7531\u4E8E\u79FB\u5165\u548C\u79FB\u51FA\u7F13\u5B58\u7684\u4F4D\u56FE\u8F83\u5C11\uFF0C\u56E0\u6B64\u6027\u80FD\u66F4\u4F18\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u5B58\u50A8\u7A7A\u95F4\u4E0D\u4F1A\u788E\u7247\u5316\uFF0CcacheReplaceBitmap\u64CD\u4F5C\u6BD4 cacheRemoveBitmap\u65B9\u6CD5\u66F4\u597D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-memory-management"
  }), `\u7F13\u5B58\u5B58\u50A8\u7A7A\u95F4\u7BA1\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u83B7\u5F97\u4F4D\u56FE\u7F13\u5B58\u7684\u5B8C\u6574\u6548\u679C\uFF0C\u5FC5\u987B\u7406\u89E3\u7F13\u5B58\u7684\u5185\u90E8\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7F13\u5B58\u4EE5\u6808\u7684\u5F62\u5F0F\u5B9E\u73B0\u3002 \u5728\u4E4B\u524D\u7F13\u5B58\u7684\u4F4D\u56FE\u4E4B\u540E\u7F13\u5B58\u65B0\u4F4D\u56FE\u3002 \u5F53\u4F4D\u56FE\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u65F6\uFF0C\u4F4D\u56FE\u4F7F\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u4F1A\u88AB\u6807\u8BB0\u4E3A\u201C\u7A7A\u95F2\u201D\uFF0C\u4F46\u4E0D\u80FD\u7ACB\u5373\u4F7F\u7528\u8BE5\u5B58\u50A8\u7A7A\u95F4\uFF0C\u9664\u975E\u5220\u9664\u7684\u4F4D\u56FE\u4F4D\u4E8E\u6808\u9876\u90E8\u3002 \u5982\u679C\u4F4D\u56FE\u4F4D\u4E8E\u7F13\u5B58\u7684\u201C\u4E2D\u95F4\u201D\uFF0C\u5C06\u5728\u4E0B\u4E00\u6B21\u8C03\u7528Bitmap::cache\u65F6\u6267\u884C\u538B\u7F29\u64CD\u4F5C\uFF0C\u4EE5\u4FBF\u53D6\u56DE\u5B58\u50A8\u7A7A\u95F4\u3002 \u5982\u679C\u4E0D\u5728\u7F13\u5B58\u4E2D\u6709\u201C\u7A7A\u6D1E\u201D\u7684\u60C5\u51B5\u4E0B\u8C03\u7528Bitmap::cache\uFF0C\u5219\u53EF\u4EE5\u907F\u514D\u8FD9\u79CD\u201C\u9AD8\u6210\u672C\u201D\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56FE\u63CF\u8FF0\u4E86\u539F\u7406\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5728\u4E0A\u4E00\u4E2A\u5DF2\u5206\u914D\u4F4D\u56FE\u4E4B\u4E0A\u5206\u914D\u7F13\u5B58\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-cache.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\u5B58\u50A8\u7A7A\u95F4\u4E2D\u4F4D\u56FE\u7684\u5206\u914D\u987A\u5E8F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 2
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5220\u9664\u540E\u6807\u8BB0\u672A\u4F7F\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\u5220\u9664\u5DF2\u7F13\u5B58\u4F4D\u56FE\u540E\u7F13\u5B58\u4E2D\u7684\u672A\u4F7F\u7528\u5B58\u50A8\u7A7A\u95F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 3
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5206\u914D\u4E0B\u4E00\u5F20\u4F4D\u56FE\u65F6\uFF0C\u4F1A\u538B\u7F29\u7F13\u5B58\u5E76\u5728\u9876\u90E8\u8FDB\u884C\u5206\u914D\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-compact.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\u5728\u7F13\u5B58\u4F4D\u56FE\u4E4B\u524D\uFF0C\u7F13\u5B58\u53D6\u56DE\u672A\u4F7F\u7528\u7684\u5B58\u50A8\u7A7A\u95F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5728\u5220\u9664\u6700\u9876\u7AEF\uFF08\u4E0A\u4E00\u6B21\u5206\u914D\uFF09\u7684\u4F4D\u56FE\u65F6\uFF0C\u4F1A\u7ACB\u5373\u91CA\u653E\u5B58\u50A8\u7A7A\u95F4\u53CA\u5176\u4E0B\u65B9\u7684\u4EFB\u4F55\u7A7A\u95F2\u5B58\u50A8\u7A7A\u95F4\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache-top.png",
    noShadow: "true",
    width: "700",
    mdxType: "Figure"
  }, "\u5220\u9664\u6700\u9876\u7AEF\u4F4D\u56FE\u7F13\u5B58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u4E00\u6B21\u7F13\u5B58\u64CD\u4F5C\u5C06\u4E0D\u5305\u62EC\u538B\u7F29\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u52A8\u753B\u5C55\u793A\u4E86\u6B64\u4EE3\u7801\u7684\u5B8C\u6574\u987A\u5E8F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Bitmap::cache(BITMAP_BITMAP1_ID);
Bitmap::cache(BITMAP_BITMAP2_ID);
Bitmap::cache(BITMAP_BITMAP3_ID);
...
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP2_ID);
...
Bitmap::cache(BITMAP_BITMAP4_ID);
...
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP3_ID);
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP4_ID);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "600",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-bitmap-animation.gif",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u7F13\u5B58\u548C\u672A\u7F13\u5B58\u4F4D\u56FE"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);