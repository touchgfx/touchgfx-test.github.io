"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4610],{

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

/***/ 30588:
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
  title: "\u901A\u7528UI\u7EC4\u4EF6\u6027\u80FD"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/general-ui-component-performance",
  "id": "development/ui-development/ui-components/general-ui-component-performance",
  "title": "\u901A\u7528UI\u7EC4\u4EF6\u6027\u80FD",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/general-ui-component-performance.mdx",
  "sourceDirName": "development/ui-development/ui-components",
  "slug": "/development/ui-development/ui-components/general-ui-component-performance",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/ui-components/general-ui-component-performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "general-ui-component-performance",
    "title": "\u901A\u7528UI\u7EC4\u4EF6\u6027\u80FD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u89C6\u9891",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/ui-components/miscellaneous/video"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-CN/docs/category/scenarios-1"
  }
};
const assets = {};


const toc = [{
  value: "\u56FE\u50CF\u7ED8\u5236",
  id: "image-drawing",
  level: 2
}, {
  value: "\u6570\u636E\u62F7\u8D1D\u7684\u786C\u4EF6\u652F\u6301",
  id: "hardware-support-for-data-copy",
  level: 3
}, {
  value: "\u56FE\u50CF\u683C\u5F0F",
  id: "image-format",
  level: 3
}, {
  value: "\u8BBF\u95EE\u56FE\u50CF\u6570\u636E",
  id: "access-to-the-image-data",
  level: 3
}, {
  value: "\u8BBF\u95EE\u5E27\u7F13\u51B2\u533A",
  id: "access-to-the-framebuffer",
  level: 3
}, {
  value: "\u56FE\u50CF\u5206\u8FA8\u7387",
  id: "image-resolution",
  level: 3
}, {
  value: "\u900F\u660E\u5EA6",
  id: "transparency",
  level: 3
}, {
  value: "MCU\u7ED8\u56FE",
  id: "mcu-drawing",
  level: 2
}, {
  value: "\u753B\u5E03\u63A7\u4EF6",
  id: "canvas-widgets",
  level: 2
}, {
  value: "\u6587\u672C",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u63CF\u8FF0\u5927\u591A\u6570UI\u7EC4\u4EF6\u4F7F\u7528\u7684\u4E00\u822CTouchGFX\u6E32\u67D3\u64CD\u4F5C\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "image-drawing"
  }), `\u56FE\u50CF\u7ED8\u5236`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u7ED8\u5236\u662FTouchGFX\u4E2D\u6700\u57FA\u672C\u7684\u7ED8\u5236\u64CD\u4F5C\u4E4B\u4E00\uFF0C\u56E0\u4E3A\u51E0\u4E4E\u6240\u6709UI\u7EC4\u4EF6\u5728\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u90FD\u4F9D\u8D56\u4E8E\u7ED8\u5236\u4E00\u5E45\u6216\u591A\u5E45\u56FE\u5F62\u3002 \u56E0\u6B64\uFF0C\u7CFB\u7EDF\u5177\u6709\u5FEB\u901F\u6709\u6548\u5730\u7ED8\u5236\u56FE\u50CF\u7684\u80FD\u529B\u901A\u5E38\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002 \u5F71\u54CD\u56FE\u50CF\u7ED8\u5236\u6027\u80FD\u7684\u56E0\u7D20\u6709\u5F88\u591A\u3002 \u7136\u800C\uFF0C\u5728\u51E0\u4E4E\u6240\u6709\u786C\u4EF6\u8BBE\u7F6E\u4E2D\uFF0C\u4E0E\u5176\u4ED6\u7ED8\u5236\u64CD\u4F5C\u76F8\u6BD4\uFF0CTouchGFX\u56FE\u50CF\u7ED8\u5236\u88AB\u8BA4\u4E3A\u662F\u4E00\u79CD\u5FEB\u901F\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-data-copy"
  }), `\u6570\u636E\u62F7\u8D1D\u7684\u786C\u4EF6\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4EE5\u9009\u5B9A\u7684\u56FE\u50CF\u683C\u5F0F\uFF08\u5982RGB565\u3001L8\u3001ARGB8888\uFF09\u5B58\u50A8\u672A\u538B\u7F29\u7684\u56FE\u50CF\u6570\u636E\u3002 \u672A\u538B\u7F29\u683C\u5F0F\u7684\u4F18\u70B9\u662F\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5B83\u5141\u8BB8TouchGFX\u76F4\u63A5\u4F7F\u7528\u56FE\u50CF\uFF0C\u5E76\u4E14\u4E0D\u52A0\u4FEE\u6539\u5730\u5C06\u5176\u4F20\u8F93\u5230\u5E27\u7F13\u51B2\u533A\u3002 \u5982\u679CMCU\u6709DMA\uFF0C\u5219\u53EF\u4EE5\u5E76\u4E14\u5E94\u8BE5\u5C06\u5176\u7528\u4E8E\u5185\u5B58\u62F7\u8D1D\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u4EE5\u52A0\u5FEB\u4F20\u8F93\u901F\u5EA6\u5E76\u4F7FMCU\u8D1F\u8F7D\u964D\u81F3\u6700\u4F4E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u65B9\u6CD5\u7684\u4E00\u4E2A\u9650\u5236\u662F\u56FE\u50CF\u683C\u5F0F\u662F\u5426\u5305\u542Balpha\u901A\u9053\u3002 \u6B64\u65F6\u4E0D\u80FD\u4F7F\u7528\u6B63\u5E38\u7684DMA\u4F20\u8F93\uFF0C\u56E0\u4E3AMCU\u9700\u8981\u5C06\u56FE\u50CF\u6570\u636E\u4E0E\u5E27\u7F13\u51B2\u5668\u50CF\u7D20\u8FDB\u884C\u50CF\u7D20\u6DF7\u5408\u3002 \u7136\u800C\uFF0C\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u5E26\u56FE\u5F62\u52A0\u901F\u529F\u80FD\uFF08\u5982Chrom-ART / DMA2D\uFF09\u7684STM32\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8FD9\u4E9B\u7C7B\u578B\u7684\u56FE\u50CF\u4F7F\u7528DMA\u3002 \u6B64\u65F6\uFF0CDMA\u4E0D\u4EC5\u80FD\u591F\u590D\u5236\u6570\u636E\uFF0C\u800C\u4E14\u53EF\u4EE5\u4E00\u6B21\u6027\u5B8C\u6210\u590D\u5236\u548C\u6DF7\u5408\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5927\u5927\u63D0\u9AD8\u901F\u5EA6\u5E76\u964D\u4F4EMCU\u8D1F\u8F7D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-format"
  }), `\u56FE\u50CF\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u50CF\u683C\u5F0F\u5BF9\u56FE\u50CF\u7ED8\u5236\u6027\u80FD\u4E5F\u6709\u5F71\u54CD\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u60A8\u62E5\u6709\u7684\u786C\u4EF6\u652F\u6301\u3002 \u4E00\u4E2A\u7ECF\u9A8C\u6CD5\u5219\u662F\uFF0C\u60A8\u8981\u4F20\u8F93\u7684\u6570\u636E\u8D8A\u5C11\uFF0C\u4F20\u8F93\u901F\u5EA6\u5C31\u8D8A\u5FEB\u3002 \u56E0\u6B64\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0CRGB565\u56FE\u50CF\u7684\u4F20\u8F93\u901F\u5EA6\u5E94\u5FEB\u4E8E\u7C7B\u4F3C\u7684RGB888\u56FE\u50CF\uFF0C\u56E0\u4E3ARGB565\u56FE\u50CF\u7684\u5927\u5C0F\u662F\u5BF9\u7B49RGB888\u56FE\u50CF\u7684\u4E09\u5206\u4E4B\u4E8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "access-to-the-image-data"
  }), `\u8BBF\u95EE\u56FE\u50CF\u6570\u636E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BBF\u95EE\u56FE\u50CF\u6570\u636E\u6240\u9700\u7684\u65F6\u95F4\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u6E32\u67D3\u56FE\u50CF\u65F6\u90FD\u4F1A\u8BBF\u95EE\u56FE\u50CF\u6570\u636E\u3002 \u5728TouchGFX\u5E94\u7528\u4E2D\uFF0C\u56FE\u50CF\u6570\u636E\u53EF\u4EE5\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u786C\u4EF6\u4F4D\u7F6E\uFF08\u8BBF\u95EE\u65F6\u95F4\u4E5F\u4E0D\u540C\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u56FE\u50CF\u6570\u636E\u4F4D\u7F6E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\u5916\u90E8Flash`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash\u7684\u4F18\u70B9\u5728\u4E8E\u4F4E\u6210\u672C\u548C\u5BB9\u91CF\u4F18\u52BF\uFF08\u901A\u5E38\u76F8\u5F53\u5927\uFF09\uFF0C\u5141\u8BB8\u60A8\u5728\u5E94\u7528\u4E2D\u6709\u5F88\u591A\u56FE\u50CF\u3002 \u7136\u800C\uFF0C\u8BBF\u95EE\u65F6\u95F4\u5DEE\u522B\u5F88\u5927\uFF0C\u4F46\u9009\u62E9QSPI\u6216\u7C7B\u4F3C\u7684\u66FF\u4EE3\u65B9\u6848\u53EF\u4EE5\u5B9E\u73B0\u9AD8\u541E\u5410\u7387\uFF0C\u4ECE\u800C\u663E\u8457\u63D0\u9AD8\u56FE\u50CF\u7ED8\u5236\u6027\u80FD\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u5728\u5916\u90E8RAM\u4E2D\u7F13\u5B58\u60A8\u7684\u56FE\u50CF\u3002 \u5F53\u4F60\u88AB\u8FEB\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04Flash\uFF08\u4F8B\u5982NAND\u3001EMMC\uFF09\u65F6\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5C31\u4F1A\u7ECF\u5E38\u53D1\u751F\uFF0C\u56E0\u4E3A\u8FD9\u4E9BFlash\u4E0D\u80FD\u76F4\u63A5\u7528\u4E8E\u5728TouchGFX\u4E2D\u8FDB\u884C\u56FE\u50CF\u6E32\u67D3\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u5916\u90E8RAM\u7684\u8BBF\u95EE\u5BF9\u4E8E\u60A8\u5E94\u7528\u4E2D\u7684\u56FE\u50CF\u7ED8\u5236\u6027\u80FD\u81F3\u5173\u91CD\u8981\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5185\u90E8flash\u4E2D\u5B58\u50A8\u90E8\u5206\u6216\u5168\u90E8\u56FE\u50CF\uFF0C\u5373\u4F7F\u8FD9\u91CC\u7684\u5B58\u50A8\u7A7A\u95F4\u975E\u5E38\u6709\u9650\u3002 \u8BBF\u95EE\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6240\u4EE5\u5982\u679C\u60A8\u6709\u4E00\u4E9B\u5BF9\u4E8E\u52A8\u753B\u6765\u8BF4\u5FC5\u4E0D\u53EF\u5C11\u7684\u56FE\u50CF\u5E76\u4E14\u6027\u80FD\u662F\u4E00\u4E2A\u95EE\u9898\uFF08\u4F8B\u5982\uFF0C\u5982\u679C\u56FE\u50CF\u88AB\u7EB9\u7406\u6620\u5C04\u5668\u4F7F\u7528\uFF09\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5C06\u5176\u5B58\u50A8\u5728\u5185\u90E8flash\u4E2D\uFF08\u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u5728\u975E\u5E38\u7F55\u89C1\u7684\u60C5\u51B5\u4E0B\uFF0C\u60A8\u5C06\u4ECE\u5185\u90E8RAM\u6E32\u67D3\u56FE\u50CF\u3002 \u5B58\u50A8\u7A7A\u95F4\u975E\u5E38\u6709\u9650\uFF0C\u4F46\u8BBF\u95EE\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6240\u4EE5\u5B58\u50A8\u5728\u8FD9\u91CC\uFF08\u4F7F\u7528TouchGFX\u56FE\u50CF\u7F13\u5B58\uFF09\u7684\u56FE\u50CF\u5C06\u88AB\u975E\u5E38\u5FEB\u901F\u5730\u6E32\u67D3\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "access-to-the-framebuffer"
  }), `\u8BBF\u95EE\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u56FE\u50CF\u603B\u662F\u4F1A\u5728\u5BF9\u5E27\u7F13\u51B2\u533A\u7684\u66F4\u65B0\u540E\u7ED3\u675F\u3002 \u5982\u679C\u56FE\u50CF\u5305\u542Balpha\u901A\u9053\uFF0C\u5219\u4E0D\u4EC5\u8981\u5728\u5E27\u7F13\u51B2\u533A\u4E2D\u5199\u5165\u50CF\u7D20\u6570\u636E\uFF0C\u8FD8\u8981\u8BFB\u53D6\u50CF\u7D20\u6570\u636E\u4EE5\u6267\u884C\u5B9E\u9645\u6DF7\u5408\u3002 \u56E0\u6B64\uFF0C\u5BF9\u7528\u4E8E\u5B58\u50A8\u5E27\u7F13\u51B2\u533A\u7684RAM\u7684\u8BFB/\u5199\u8BBF\u95EE\u65F6\u95F4\u662F\u83B7\u5F97\u826F\u597D\u7684\u56FE\u50CF\u7ED8\u5236\u6027\u80FD\u7684\u5173\u952E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-resolution"
  }), `\u56FE\u50CF\u5206\u8FA8\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u9700\u8981\u4F20\u8F93\u7684\u6570\u636E\u4E0E\u56FE\u50CF\u5206\u8FA8\u7387\u6210\u6B63\u6BD4\uFF0C\u56FE\u50CF\u5206\u8FA8\u7387\u81EA\u7136\u4F1A\u5BF9\u56FE\u50CF\u7ED8\u5236\u64CD\u4F5C\u4EA7\u751F\u5F71\u54CD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transparency"
  }), `\u900F\u660E\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u50CF\u7684\u4E0D\u900F\u660E\u5EA6\u4F1A\u5F71\u54CD\u56FE\u50CF\u7684\u6E32\u67D3\u65F6\u95F4\u3002 \u5E26\u6709alpha\u901A\u9053\u7684\u56FE\u50CF\u7684\u6E32\u67D3\u65F6\u95F4\u6BD4\u4E0D\u5E26alpha\u901A\u9053\u7684\u56FE\u50CF\u957F\uFF0C\u56E0\u4E3A\u5B83\u5FC5\u987B\u4E0E\u5E27\u7F13\u51B2\u533A\u6DF7\u5408\u3002 \u56E0\u6B64\uFF0C\u6DF7\u5408\u64CD\u4F5C\u5FC5\u987B\u4ECE\u5E27\u7F13\u51B2\u533A\u8BFB\u53D6\u6570\u636E\uFF0C\u800C\u5B9E\u4F53\u56FE\u50CF\u53EA\u9700\u8981\u8986\u76D6\u5E27\u7F13\u51B2\u533A\u4E2D\u7684\u6570\u636E\u3002 \u5373\u4F7F\u6709\u786C\u4EF6\u52A0\u901F\uFF0C\u60C5\u51B5\u4E5F\u662F\u5982\u6B64\u3002 \u7136\u800C\uFF0C\u6E32\u67D3\u5B9E\u4F53\u548C\u534A\u900F\u660E\u56FE\u50CF\u4E4B\u95F4\u7684\u6BD4\u7387\u53EF\u80FD\u4F1A\u56E0\u8BBE\u7F6E\u7684\u4E0D\u540C\u800C\u53D8\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mcu-drawing"
  }), `MCU\u7ED8\u56FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u63A7\u4EF6\u4F9D\u8D56\u4E8E\u76F4\u63A5\u7684\u5E27\u7F13\u51B2\u533A\u64CD\u4F5C\u3002 \u8FD9\u79CD\u65B9\u6CD5\u5BF9\u5931\u6548\u533A\u57DF\u4E2D\u7684\u6BCF\u4E2A\u50CF\u7D20\u6267\u884C\u4E00\u6B21\u6216\u591A\u6B21\u8BA1\u7B97\uFF0C\u7136\u540E\u66F4\u65B0\u5E27\u7F13\u51B2\u533A\u4E2D\u7684\u50CF\u7D20\u3002 \u8FD9\u662F\u4E00\u4E2A\u76F8\u5F53\u7F13\u6162\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u5BF9\u6BCF\u4E2A\u50CF\u7D20\u8FDB\u884C\u7684\u8BA1\u7B97\u6BD4\u8F83\u590D\u6742\u65F6\uFF0C\u901F\u5EA6\u66F4\u662F\u7F13\u6162\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CMCU\u7ED8\u56FE\u8981\u6267\u884C\u5927\u91CF\u8BA1\u7B97\uFF0C\u90A3\u4E48MCU\u7684\u5904\u7406\u80FD\u529B\u5FC5\u4E0D\u53EF\u5C11\u3002 \u5BF9\u5E27\u7F13\u51B2\u533A\u7684\u8BBF\u95EE\uFF08\u5BF9\u5185\u90E8\u6216\u5916\u90E8RAM\u7684\u8BBF\u95EE\uFF09\u4E5F\u4F1A\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3A\u5BF9\u5E27\u7F13\u51B2\u533A\u7684\u6570\u636E\u5199\u5165\uFF08\u4E5F\u53EF\u80FD\u662F\u8BFB\u53D6\uFF09\u662F\u9488\u5BF9\u5931\u6548\u533A\u57DF\u7684\u6BCF\u4E2A\u50CF\u7D20\u8FDB\u884C\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas-widgets"
  }), `\u753B\u5E03\u63A7\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/canvas-widgets"
  }), `\u753B\u5E03\u63A7\u4EF6`), `\u662F\u4E00\u79CD\u7279\u6B8A\u7684TouchGFX\u63A7\u4EF6\uFF0C\u7528\u4E8E\u7ED8\u5236\u6297\u952F\u9F7F\u7684\u51E0\u4F55\u5F62\u72B6\u3002 \u5B83\u4EEC\u901A\u5E38\u662F\u76F8\u5F53\u590D\u6742\u7684\uFF0C\u56E0\u6B64\u6E32\u67D3\u901F\u5EA6\u53EF\u80FD\u975E\u5E38\u7F13\u6162\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u65F6\u95F4\u4E0E\u51E0\u4F55\u5F62\u72B6\u7684\u5931\u6548\u90E8\u5206\u7684\u5927\u5C0F\u6210\u7EBF\u6027\u5173\u7CFB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u63A7\u4EF6\u9700\u8981\u4E00\u4E2A\u5B58\u50A8\u533A\u6765\u5B58\u50A8\u4E2D\u95F4\u8BA1\u7B97\u7ED3\u679C\u3002 \u5176\u5927\u5C0F\u548C\u6027\u80FD\u5F71\u54CD\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/canvas-widgets"
  }), `\u753B\u5E03\u63A7\u4EF6`), `\u4E00\u8282\u4E2D\u4ECB\u7ECD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5927\u591A\u6570\u6807\u51C6TouchGFX\u753B\u5E03\u63A7\u4EF6\uFF08\u5982Circle\uFF09\u90FD\u6709\u66F4\u65B0\u65B9\u6CD5\uFF0C\u53EA\u4F1A\u8BA9\u63A7\u4EF6\u4E2D\u5DF2\u66F4\u6539\u7684\u90E8\u5206\u65E0\u6548\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u8981\u66F4\u65B0\u201C\u5706\u201D\uFF0C\u8BF7\u4F7F\u7528circle::updateArc(...) ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "\uFF0C"), "\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u4F7F\u6574\u4E2A\u5706\u5931\u6548\uFF0C\u53EA\u4F1A\u4F7F\u5DF2\u66F4\u6539\u7684\u90E8\u5206\u5931\u6548\u3002 \u786E\u4FDD\u4F7F\u7528\u8FD9\u4E9B\u7C7B\u578B\u7684\u64CD\u4F5C\u4EE5\u83B7\u5F97\u6700\u4F73\u6027\u80FD\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts"
  }), `\u6587\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u672C\u6E32\u67D3\u4F9D\u8D56\u4E8E\u56FE\u50CF\u7ED8\u5236\uFF0C\u56E0\u4E3A\u6240\u6709\u4F7F\u7528\u7684\u5B57\u7B26\u90FD\u88AB\u8F6C\u6362\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/texts-and-fonts"
  }), `\u201C\u6587\u672C\u201D\u4E00\u8282`), `\u6240\u63CF\u8FF0\u7684\u56FE\u50CF\u3002 \u8FD9\u4E9B\u56FE\u50CF\u91C7\u7528A4\u683C\u5F0F\uFF0C\u57FA\u672C\u4E0A\u662F\u56FE\u50CF\u4E2D\u7684\u6BCF\u4E2A\u50CF\u7D20\u62E5\u6709\u4E00\u4E2A4\u4F4Dalpha\u503C\u3002 \u5982\u679C\u5728\u8BE5\u56FE\u6848\u4E0A\u5E94\u7528\u4E00\u79CD\u989C\u8272\uFF0C\u4F1A\u5F97\u5230\u5305\u542B\u4E00\u4E2A\u5B57\u7B26\u7684\u6297\u952F\u9F7F\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u6587\u672C\u6E32\u67D3\u662F\u4E00\u7EC4\u56FE\u50CF\u7ED8\u5236\u64CD\u4F5C\uFF08\u6BCF\u4E2A\u5B57\u7B26\u4E00\u6B21\u64CD\u4F5C\uFF09\uFF0C\u56FE\u50CF\u7ED8\u5236\u7684\u6027\u80FD\u7279\u5F81\u4E5F\u9002\u7528\u4E8E\u6587\u672C\u6E32\u67D3\uFF0C\u5305\u62EC\u4F7F\u7528\u786C\u4EF6\u52A0\u901F\uFF08\u5982Chrom-ART / DMA2D\uFF09\u8FDB\u884C\u6027\u80FD\u6539\u8FDB\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);