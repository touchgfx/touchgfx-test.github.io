"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5135],{

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

/***/ 61743:
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
  title: "\u5D4C\u5165\u5F0F\u7ED8\u56FE\u7CFB\u7EDF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/embedded-graphics",
  "id": "basic-concepts/embedded-graphics",
  "title": "\u5D4C\u5165\u5F0F\u7ED8\u56FE\u7CFB\u7EDF",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/embedded-graphics",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/embedded-graphics",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "embedded-graphics",
    "title": "\u5D4C\u5165\u5F0F\u7ED8\u56FE\u7CFB\u7EDF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Basic Concepts",
    "permalink": "/4.20/zh-CN/docs/category/basic-concepts"
  },
  "next": {
    "title": "\u8272\u5F69\u683C\u5F0F",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/color-formats"
  }
};
const assets = {};



const toc = [{
  value: "\u56DB\u4E2A\u4E3B\u8981\u7EC4\u6210\u90E8\u5206",
  id: "the-four-main-parts",
  level: 2
}, {
  value: "MCU",
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
  value: "\u663E\u793A",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5D4C\u5165\u5F0F\u7ED8\u56FE\u7CFB\u7EDF\u201D\u4E00\u8BCD\u6709\u8BB8\u591A\u79CD\u542B\u4E49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u4E0D\u540C\u7684\u4EBA\u5BF9\u201C\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u201D\u4E00\u8BCD\u6709\u4E0D\u540C\u7684\u7406\u89E3\u3002 \u5BF9\u67D0\u4E9B\u4EBA\u6765\u8BF4\uFF0C\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u610F\u5473\u7740\u5341\u5206\u53EF\u9760\u7684\u4F20\u7EDF8\u4F4D\u5FAE\u63A7\u5236\u5668\uFF0C\u65E0\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5B9E\u9645\u4E0A\u4E5F\u65E0RAM\u3001ROM\u6216GPIO\u3002 \u5BF9\u5176\u4ED6\u4EBA\u6765\u8BF4\uFF0C\u5B83\u53EF\u80FD\u610F\u5473\u7740\u529F\u80FD\u5F3A\u5927\u7684\u73B0\u4EE3\u667A\u80FD\u624B\u673A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u6B21\uFF0C\u201C\u7ED8\u56FE\u7CFB\u7EDF\u201D\u4E00\u8BCD\u6709\u8BB8\u591A\u79CD\u89E3\u91CA\u3002 \u5BF9\u67D0\u4E9B\u4EBA\u6765\u8BF4\uFF0C\u5B83\u8868\u793A\u5728\u559C\u6B22\u7684\u7ED8\u753B\u7A0B\u5E8F\u4E2D\u7ED8\u5236\u50CF\u7D20\u3002 \u5BF9\u5176\u4ED6\u4EBA\u6765\u8BF4\uFF0C\u5B83\u8868\u793A\u6E38\u620F\u673A\u4E0A\u8FD0\u884C\u76843D\u6E32\u67D3\u8F6F\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9TouchGFX\u800C\u8A00\uFF0C\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u8868\u793ASTM32\u5FAE\u63A7\u5236\u5668\u4E0A\u7684\u4EFB\u610F\u7CFB\u7EDF\u3002 \u7ED8\u56FE\u7CFB\u7EDF\u8868\u793A\u6709\u7528\u6237\u754C\u9762\u7684\u8FD0\u884C\u9891\u7387\u4E3A60\u5E27\u6BCF\u79D2\u7684\u4EA4\u4E92\u5F0F\u5E94\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-four-main-parts"
  }), `\u56DB\u4E2A\u4E3B\u8981\u7EC4\u6210\u90E8\u5206`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u5728\u6B64\u7C7B\u5E73\u53F0\u4E0A\u5B9E\u73B0\u7ED8\u56FE\u5E94\u7528\uFF0C\u6211\u4EEC\u8003\u8651\u56DB\u4E2A\u76F4\u63A5\u76F8\u5173\u7684\u4E3B\u8981\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u53EF\u80FD\u5305\u542B\u8BB8\u591A\u5176\u4ED6\u7EC4\u4EF6\uFF0C\u4F46\u5176\u4ED6\u7EC4\u4EF6\u4E0E\u56FE\u5F62\u663E\u793A\u7684\u76F8\u5173\u6027\u8F83\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/embedded-graphics-primer/4-main-parts.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "MCU\u3001RAM\u3001\u95EA\u5B58\u548C\u663E\u793A\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B80\u800C\u8A00\u4E4B\uFF0CTouchGFX\u4F7F\u7528MCU\uFF0C\u901A\u8FC7\u5BF9\u95EA\u5B58\u4E2D\u7684\u5404\u4E2A\u90E8\u5206\u8FDB\u884C\u7EC4\u5408\uFF0C\u521B\u5EFA\u548C\u66F4\u65B0RAM\u4E2D\u7684\u56FE\u50CF\u3002 \u7EC4\u5408\u56FE\u50CF\u4F1A\u88AB\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002 \u7CFB\u7EDF\u4F1A\u89C6\u9700\u8981\u5C3D\u53EF\u80FD\u591A\u5730\u91CD\u590D\u6B64\u8FC7\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mcu"
  }), `MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0CMCU\u627F\u62C5\u4E86\u6240\u6709\u91CD\u8981\u4EFB\u52A1\u3002 \u5B83\u8BFB\u53D6\u95EA\u5B58\u4E2D\u7684\u56FE\u50CF\uFF0C\u5E76\u5C06\u5B83\u4EEC\u5199\u5165RAM\u3002 \u5728\u5C06\u534A\u900F\u660E\u7EA2\u8272\u6587\u672C\u878D\u5408\u5230\u56FE\u50CF\u4E0A\u65F6\uFF0C\u5B83\u8BA1\u7B97\u5F97\u5230\u7684\u8272\u5F69\u5E76\u5C06\u5176\u5B58\u50A8\u5230RAM\u3002 \u5B83\u5BF9\u5706\u7684\u6240\u6709\u50CF\u7D20\u8FDB\u884C\u6E32\u67D3\u5E76\u5B58\u50A8\u5230RAM\u3002 \u5B83\u5C06\u56FE\u50CF\u4ECERAM\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/mcu-internal.svg",
    noShadow: "true",
    width: 240,
    mdxType: "Figure"
  }, "MCU\u63D0\u4F9BCPU\u3001\u5185\u90E8\u95EA\u5B58\u548C\u5185\u90E8RAM\u7B49"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\u5177\u6709\u7279\u5B9A\u529F\u80FD\uFF0C\u5982LTDC\u3001Chrom-ART\u3001Chrom-GRC\u7B49\uFF0C\u4E3A\u7ED8\u56FE\u7CFB\u7EDF\u7684\u5B9E\u73B0\u63D0\u4F9B\u5E2E\u52A9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C2\u89C1\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-mcu",
    mdxType: "Link"
  }, "\u5982\u4F55\u9009\u62E9\u5408\u9002MCU"), "\u7684\u6307\u5357\uFF0C\u4EE5\u53CA", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/02-cpu-running",
    mdxType: "Link"
  }, "\u677F\u542F\u52A8\u642D\u5EFA\u6307\u5357\u4E2D\u5173\u4E8E\u8BBE\u7F6EMCU"), "\u7684\u5185\u5BB9\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ram"
  }), `RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6240\u5F97\u8BA1\u7B97\u56FE\u50CF\uFF08\u5E27\u7F13\u51B2\uFF09\u5B58\u50A8\u5728RAM\u4E2D\u3002 \u5728\u66F4\u65B0\u56FE\u5F62\u65F6\uFF0CMCU\u5BF9RAM\u6267\u884C\u8BFB\u548C\u5199\u64CD\u4F5C\u3002 \u5728\u5C06\u6240\u5F97\u56FE\u50CF\u4F20\u8F93\u7ED9\u663E\u793A\u5668\u65F6\uFF0C\u518D\u6B21\u6267\u884C\u8BFB\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u6240\u5F97\u56FE\u50CF\u88AB\u5B58\u50A8\u5728MCU\u5185\u90E8\u7684RAM\u4E2D\u3002 \u5982\u679C\u5C06\u6240\u5F97\u56FE\u50CF\u5B58\u50A8\u5728\u5185\u90E8RAM\u4E2D\u7684\u65B9\u6CD5\u4E0D\u53EF\u884C\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5916\u90E8RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C2\u89C1\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5982\u4F55\u9009\u62E9\u5408\u9002RAM"), "\u7684\u6307\u5357\uFF0C\u4EE5\u53CA", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/04-enable-external-ram",
    mdxType: "Link"
  }, "\u677F\u542F\u52A8\u642D\u5EFA\u6307\u5357\u4E2D\u5173\u4E8E\u8BBE\u7F6ERAM\u7684\u5185\u5BB9"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash"
  }), `Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6240\u6709\u9759\u6001\u6570\u636E\u5747\u5B58\u50A8\u5728\u95EA\u5B58\u4E2D\u3002 \u56FE\u50CF\u3001\u5B57\u4F53\u548C\u6587\u672C\u3002 \u95EA\u5B58\u7531MCU\u8BFB\u53D6\uFF0C\u5176\u5185\u5BB9\u88AB\u5199\u5165RAM\u6216\u4E0ERAM\u5185\u5BB9\u8FDB\u884C\u7EC4\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u7531\u4E8E\u5185\u90E8\u95EA\u5B58\u5F88\u5C11\u80FD\u591F\u5BB9\u7EB3\u4E0B\u6240\u6709\u56FE\u50CF\u8D44\u6E90\uFF0C\u56E0\u6B64\u8BBE\u7F6E\u4E2D\u4F1A\u589E\u52A0\u5916\u90E8\u95EA\u5B58\u3002 \u5BF9\u4E8E\u5341\u5206\u7B80\u5355\u7684\u5E94\u7528\uFF0C\u6709\u5185\u90E8\u95EA\u5B58\u5373\u5DF2\u8DB3\u591F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7406\u60F3\u7684\u505A\u6CD5\u662F\u5BF9\u95EA\u5B58\u8FDB\u884C\u5B58\u50A8\u5668\u6620\u5C04\uFF0C\u4EE5\u4FBF\u4ECE\u95EA\u5B58\u76F4\u63A5\u8BFB\u53D6\u50CF\u7D20\u5E76\u5199\u5165RAM\u3002 \u6216\u8005\uFF0C\u5982\u679C\u4E0D\u5BF9\u95EA\u5B58\u8FDB\u884C\u5B58\u50A8\u5668\u6620\u5C04\uFF0C\u53EF\u5C06\u95EA\u5B58\u5185\u5BB9\u4F20\u8F93\u5230RAM\uFF0C\u7136\u540E\u518D\u4ECERAM\u8BFB\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C2\u89C1\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5982\u4F55\u9009\u62E9\u5408\u9002\u95EA\u5B58"), "\u7684\u6307\u5357\uFF0C\u4EE5\u53CA", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/06-flash-external-addressable",
    mdxType: "Link"
  }, "\u677F\u542F\u52A8\u642D\u5EFA\u6307\u5357\u4E2D\u5173\u4E8E\u8BBE\u7F6E\u95EA\u5B58"), "\u7684\u5185\u5BB9\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\u663E\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5668\u5C06\u56FE\u50CF\u5B9E\u9645\u663E\u793A\u7ED9\u4EBA\u773C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u4E2D\u5B58\u50A8\u7684\u8BA1\u7B97\u540E\u7684\u56FE\u50CF\uFF08\u5E27\u7F13\u51B2\uFF09\u7531MCU\u6309\u56FA\u5B9A\u65F6\u95F4\u95F4\u9694\u53D1\u9001\u5230\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C2\u89C1\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u5982\u4F55\u9009\u62E9\u5408\u9002\u663E\u793A\u5668\u7684\u6307\u5357"), "\uFF0C\u4EE5\u53CA", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/03-display-internal",
    mdxType: "Link"
  }, "\u677F\u542F\u52A8\u642D\u5EFA\u6307\u5357\u4E2D\u5173\u4E8E\u8BBE\u7F6E\u663E\u793A\u5668\u7684\u5185\u5BB9"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u53C2\u89C1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-selection-introduction",
    mdxType: "Link"
  }, "\u786C\u4EF6\u9009\u578B"), "\u6307\u5357\u4E86\u89E3\u5173\u4E8E\u53EF\u80FD\u7684\u786C\u4EF6\u9009\u62E9\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u53C2\u89C1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/board-introduction",
    mdxType: "Link"
  }, "\u677F\u542F\u52A8\u642D\u5EFA\u6307\u5357\u4E86\u89E3\u5173\u4E8E\u8BBE\u7F6E\u677F\u548C\u7EC4\u4EF6"), "\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);