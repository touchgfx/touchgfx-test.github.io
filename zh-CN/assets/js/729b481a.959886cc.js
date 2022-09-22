"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[319],{

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

/***/ 70814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
}));
class Caution extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-caution)",
      header: "Caution",
      type: "caution",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Caution);


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

/***/ 18325:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39130);
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
  id: "touchgfx-generator",
  title: "Generator\u7528\u6237\u6307\u5357"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-generator",
  "id": "development/touchgfx-hal-development/touchgfx-generator",
  "title": "Generator\u7528\u6237\u6307\u5357",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-generator.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-generator",
  "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-generator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-generator",
    "title": "Generator\u7528\u6237\u6307\u5357"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u62BD\u8C61\u5C42\u67B6\u6784",
    "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-architecture"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-CN/docs/category/scenarios"
  }
};
const assets = {};






const toc = [{
  value: "\u4F7F\u80FDTouchGFX Generator",
  id: "enabling-touchgfx-generator",
  level: 2
}, {
  value: "\u751F\u6210\u7684\u4EE3\u7801\u67B6\u6784",
  id: "generated-code-architecture",
  level: 2
}, {
  value: "\u7279\u6027\u6982\u8FF0",
  id: "feature-overview",
  level: 2
}, {
  value: "\u663E\u793A",
  id: "display",
  level: 2
}, {
  value: "\u63A5\u53E3\u4E0E\u5C3A\u5BF8",
  id: "interface-and-dimensions",
  level: 3
}, {
  value: "\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F",
  id: "framebuffer-pixel-format",
  level: 3
}, {
  value: "\u7F13\u51B2\u7B56\u7565",
  id: "buffering-strategies",
  level: 3
}, {
  value: "\u9A71\u52A8\u5668",
  id: "driver",
  level: 2
}, {
  value: "\u5E94\u7528\u6EF4\u7B54\u8BA1\u65F6\u6E90",
  id: "application-tick-source",
  level: 3
}, {
  value: "\u56FE\u5F62\u52A0\u901F\u5668",
  id: "graphics-accelerator",
  level: 3
}, {
  value: "\u5B9E\u65F6\u64CD\u4F5C\u7CFB\u7EDF",
  id: "real-time-operating-system",
  level: 3
}, {
  value: "ThreadX",
  id: "threadx-middleware-os",
  level: 4
}, {
  value: "Enabling and configuring ThreadX from the Middleware list available in STM32CubeMX",
  id: "enabling-and-configuring-threadx-from-the-middleware-list-available-in-stm32cubemx",
  level: 5
}, {
  value: "Enabling and configuring ThreadX from AZRTOS Software Pack",
  id: "enabling-and-configuring-threadx-from-azrtos-software-pack",
  level: 5
}, {
  value: "FreeRTOS",
  id: "freertos-middleware-os",
  level: 4
}, {
  value: "ThreadX Middleware",
  id: "threadx-middleware-os",
  level: 4
}, {
  value: "\u5176\u4ED6\u517C\u5BB9CMSIS\u7684OS",
  id: "other-cmsis-compliant-os",
  level: 4
}, {
  value: "\u5176\u5B83\u529F\u80FD",
  id: "additional-features",
  level: 3
}, {
  value: "\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u5668",
  id: "external-data-reader",
  level: 4
}, {
  value: "8\u4F4DLTDC\u989C\u8272\u67E5\u8BE2\u8868",
  id: "8bit-ltdc-color-look-up-table",
  level: 4
}, {
  value: "\u89C6\u9891\u89E3\u7801",
  id: "video-decoding",
  level: 2
}, {
  value: "\u7C7B\u578B",
  id: "video-decoding-type",
  level: 3
}, {
  value: "\u5E76\u53D1\u89C6\u9891",
  id: "video-decoding-number",
  level: 3
}, {
  value: "\u7B56\u7565",
  id: "video-decoding-strategy",
  level: 3
}, {
  value: "\u89E3\u7801\u683C\u5F0F",
  id: "decode-format",
  level: 3
}, {
  value: "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  id: "video-decoding-buffer-size",
  level: 3
}, {
  value: "\u751F\u6210\u7684\u9879\u76EE",
  id: "generated-project",
  level: 2
}, {
  value: "TouchGFX Designer\u9879\u76EE",
  id: "touchgfx-designer-project",
  level: 2
}, {
  value: "\u4FEE\u6539\u751F\u6210\u6587\u4EF6",
  id: "modifying-generated-behavior",
  level: 2
}, {
  value: "\u5347\u7EA7\u9879\u76EE",
  id: "upgrading-projects",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u662FX-CUBE-TOUCHGFX\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u662FSTM32CubeMX\u9644\u52A0\u8F6F\u4EF6\u7EC4\u4EF6\uFF0C\u53EF\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u914D\u7F6ETouchGFX\u5E76\u8FD0\u884C\u4E8E\u4ED6\u7684\u786C\u4EF6\u5E73\u53F0\u4E0A\u3002 \u6839\u636E\u5DF2\u6709\u7684STM32CubeMX\u8BBE\u7F6E\u548C\u7528\u6237\u8F93\u5165\uFF0CTouchGFX Generator\u5C06\u751F\u6210TouchGFX\u5E94\u7528\u6240\u9700\u7684\u6709\u6548\u914D\u7F6E\u6587\u4EF6 \u8FD9\u5305\u62ECTouchGFX HAL\u3001TouchGFX OSAL\u548CTouchGFX\u914D\u7F6E\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7STM32CubeMX\u751F\u6210\u4EE3\u7801\u540E\uFF0C\u53EF\u901A\u8FC7TouchGFX Designer\u6253\u5F00TouchGFX\u9879\u76EE\uFF0C\u5E76\u8FDB\u884CUI\u5F00\u53D1\u3002 TouchGFX Designer\u4F1A\u81EA\u52A8\u5C06\u4EFB\u4F55\u989D\u5916\u751F\u6210\u7684\u4EE3\u7801\u6587\u4EF6\u6DFB\u52A0\u5230\u901A\u8FC7STM32CubeMX\u6240\u914D\u7F6E\u7684\u76EE\u6807IDE\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "enabling-touchgfx-generator"
  }), `\u4F7F\u80FDTouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u6237\u53EF\u901A\u8FC7\u6309\u201C\u9009\u62E9\u7EC4\u4EF6\u201D\u6309\u94AE\u6765\u8BBF\u95EEX-CUBE\u7684\u9644\u52A0\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/enable-generator.png",
    mdxType: "Figure"
  }, "\u9009\u62E9STM32CubeMX\u4E2D\u7684\u9644\u52A0\u8F6F\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56FE\u663E\u793A\u4E86\u9879\u76EE\u4E2D\u5982\u4F55\u4F7F\u80FDTouchGFX Generator\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-v4.17.png",
    width: "580",
    mdxType: "Figure"
  }, "\u4F7F\u80FDTouchGFX Generator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E3A\u53CC\u6838MCU\u542F\u7528TouchGFX\uFF0C\u8BF7\u786E\u4FDD\u4E3A\u6B63\u786E\u7684\u4E0A\u4E0B\u6587\u542F\u7528\u3002 TouchGFX\u53EA\u80FD\u4E3A\u5355\u4E00\u4E0A\u4E0B\u6587\u542F\u7528\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.png",
    mdxType: "Figure"
  }, "\u5728\u53CC\u6838\u5FC3\u82AF\u7247\u4E0A\u4F7F\u7528TouchGFX Generator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-architecture"
  }), `\u751F\u6210\u7684\u4EE3\u7801\u67B6\u6784`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u63CF\u8FF0TouchGFX Generator\u7684\u529F\u80FD\u4E4B\u524D\uFF0C\u4E86\u89E3\u6240\u751F\u6210\u4EE3\u7801\u7684\u67B6\u6784\u4EE5\u53CA\u5F00\u53D1\u4EBA\u5458\u5982\u4F55\u4F7F\u7528\u8BE5\u67B6\u6784\u6765\u5B9A\u5236\u914D\u7F6E\u548C\u884C\u4E3A\u81F3\u5173\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u751F\u6210\u7684\u4EE3\u7801\uFF08C\u4EE3\u7801\uFF09\u4E2D\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `User Code`), `\u6BB5\u5185\u7684\u7528\u6237\u624B\u5199\u4EE3\u7801\uFF0C\u4F1A\u53D7\u5230STM32CubeMX\u4FDD\u62A4\u3002\xA0\u5728TouchGFX Generator\u751F\u6210\u7684C++\u4EE3\u7801\u4E2D\uFF0C\u901A\u8FC7\u7EE7\u627F\u6765\u5B9E\u73B0\u8FD9\u79CD\u7075\u6D3B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Additional Software`), `\u6DFB\u52A0TouchGFX Generator\u5E76\u4F7F\u80FD\u540E\uFF0CSTM32CubeMX\u603B\u662F\u4F1A\u4E3A\u9879\u76EE\u521B\u5EFA\u4E00\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX`), `\u6587\u4EF6\u5939\u3002 \u65E0\u8BBA\u914D\u7F6E\u5982\u4F55\uFF0C\u8BE5\u6587\u4EF6\u5939\u603B\u662F\u5305\u542B\u76F8\u540C\u7684\u6587\u4EF6\uFF0C\u800C\u6587\u4EF6\u5185\u5BB9\u5219\u56E0STM32CubeMX\u548C\u7528\u6237\u914D\u7F6E\u800C\u5F02\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u5217\u8868\u6982\u8FF0\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F7F\u80FD`), `TouchGFX Generator\u7684STM32CubeMX\u9879\u76EE\u5185\u5BB9\uFF0C\u5E76\u91CD\u70B9\u4ECB\u7ECD\u4E0ETouchGFX\u6709\u5173\u7684\u6587\u4EF6\u3002 \u4E0B\u9762\u6309\u5217\u8868\u6982\u8FF0\u4E86\u6700\u91CD\u8981\u6761\u76EE\u7684\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX Folder"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `\u2502   .mxproject
\u2502   myproject.ioc
\u251C\u2500\u2500\u2500Core
\u251C\u2500\u2500\u2500Drivers
\u251C\u2500\u2500\u2500EWARM
\u251C\u2500\u2500\u2500Middlewares
\u2514\u2500\u2500\u2500TouchGFX
    \u2502   ApplicationTemplate.touchgfx.part
    \u251C\u2500\u2500\u2500App
    \u2502       app_touchgfx.c
    \u2502       app_touchgfx.h
    \u2514\u2500\u2500\u2500target
        \u2502   STM32TouchController.cpp
        \u2502   STM32TouchController.hpp
        \u2502   TouchGFXGPIO.cpp
        \u2502   TouchGFXHAL.cpp
        \u2502   TouchGFXHAL.hpp
        \u2502
        \u2514\u2500\u2500\u2500generated
                OSWrappers.cpp
                TouchGFXConfiguration.cpp
                TouchGFXGeneratedHAL.cpp
                TouchGFXGeneratedHAL.hpp
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6587\u4EF6\u5939`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u804C\u8D23`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `myproject.ioc`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\u9879\u76EE\u6587\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `main.c`), `\u548C\u542F\u52A8\u4EE3\u7801`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A71\u52A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CMSIS\u548CMCU\u7CFB\u5217\u9A71\u52A8\u7A0B\u5E8F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE\u9879\u76EE\u6587\u4EF6\u5939\u3002 \u53EF\u4EE5\u4E3AEWARM\u3001MDK-ARM\u6216STM32CubeIDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E2D\u95F4\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5305\u542BTouchGFX\u5E93/\u5934\u6587\u4EF6\u4EE5\u53CAFreeRTOS\u7B49\u7B2C\u4E09\u65B9\u8F6F\u4EF6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ApplicationTemplate.touchgfx.part`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\u4F7F\u7528\u4E0ETouchGFX Designer\u9879\u76EE\u76F8\u5173\u7684\u4FE1\u606F\uFF08\u5982\u5C4F\u5E55\u5C3A\u5BF8\u548C\u4F4D\u6DF1\uFF09\u6765\u66F4\u65B0.part\u6587\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E94\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\u7684X-CUBE\u63A5\u53E3\u3002 \xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `app_touchgfx.c`), `\u6587\u4EF6\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Process(void)`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Init(void)`), `\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u8FD9\u4E9B\u51FD\u6570\u7528\u4E8E\u521D\u59CB\u5316TouchGFX\u548C\u542F\u52A8\u5176\u4E3B\u5FAA\u73AF\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76EE\u6807/\u751F\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BE5\u5B50\u6587\u4EF6\u5939\u5305\u542B\u53EA\u8BFB\u6587\u4EF6\uFF0C\u5F53\u914D\u7F6E\u66F4\u6539\u65F6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4F1A\u88ABSTM32CubeMX\u8986\u76D6\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL.cpp`), `\u662FTouchGFX\u7C7B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `HAL`), `\u7684\u5B50\u7C7B\uFF0C\u5E76\u5305\u542BSTM32CubeMX\u53EF\u57FA\u4E8E\u5176\u5F53\u524D\u914D\u7F6E\u751F\u6210\u7684\u4EE3\u7801\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `OSWrappers.cpp`), `(OSAL) \u5305\u542B\u4E0ETouchGFX Engine\u540C\u6B65\u6240\u9700\u7684\u529F\u80FD\uFF0C\u6700\u540E\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXConfiguration.cpp`), `\uFF0C\u5176\u5305\u542B\u7528\u4E8E\u6784\u5EFA\u548C\u914D\u7F6ETouchGFX\u7684\u4EE3\u7801\uFF0C\u5305\u62ECHAL\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76EE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5305\u542B\u5927\u91CF\u6587\u4EF6\uFF0C\u7528\u6237\u53EF\u4FEE\u6539\u8FD9\u4E9B\u6587\u4EF6\uFF0C\u4EE5\u6269\u5C55HAL\u884C\u4E3A\uFF0C\u6216\u8986\u76D6STM32CubeMX\u751F\u6210\u7684\u914D\u7F6E\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `STM32TouchController.cpp`), `\u5305\u542B\u89E6\u6478\u63A7\u5236\u5668\u64CD\u4F5C\u7684\u7A7A\u63A5\u53E3\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL.cpp`), `\u5B9A\u4E49`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL`), `\u7684\u5B50\u7C7B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL`), `\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXConfiguration.cpp`), `\u5305\u542B\u4E00\u4E2A\u7528\u4E8E\u6784\u5EFAHAL\u7684\u51FD\u6570\u4EE5\u53CA\u4E00\u4E2A\u7528\u4E8E\u542F\u52A8TouchGFX\u4E3B\u5FAA\u73AF\u7684\u51FD\u6570\u3002 \u53EF\u5728\u53EF\u7F16\u8F91\u7684\u7528\u6237\u7C7B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL`), `\u4E2D\u5B8C\u6210\u5176\u4ED6\u914D\u7F6E\u3002 HAL\u7684\u4E00\u822C\u67B6\u6784\u5982\u4E0B\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, "\u751F\u6210\u7684\u4EE3\u7801\u7684\u5C42\u6B21\u7ED3\u6784"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "feature-overview"
  }), `\u7279\u6027\u6982\u8FF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Having enabled TouchGFX Generator, three main groups exist in the user interface. A fourth, "Dependencies", will appear if a problem with the current configuration is detected.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u4F9D\u8D56\u5173\u7CFB`)), `- \u8BE5\u7EC4\u5305\u542B\u9488\u5BF9\u5F00\u5173\u4EBA\u5458\u7684\u6709\u5173\u914D\u7F6E\u4E2D\u7684\u4F9D\u8D56\u5173\u7CFB\u3001\u8B66\u544A\u6216\u5177\u4F53\u9519\u8BEF\u7684\u901A\u77E5\u3002 \u5982\u679C\u6CA1\u6709\u6761\u76EE\uFF0C\u5219\u8BE5\u7EC4\u5C06\u9690\u85CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u663E\u793A`)), `- \u8BE5\u7EC4\u5305\u542B\u4E0E\u663E\u793A\u6709\u5173\u7684\u8BBE\u7F6E\uFF0C\u5982\u63A5\u53E3\u3001\u5E27\u7F13\u5B58\u7684\u4F4D\u6DF1\u3001\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002 \u8FD9\u4E9B\u8BBE\u7F6E\u76F4\u63A5\u5F71\u54CDTouchGFX\u9879\u76EE\u91CC\u753B\u5E03\u7684\u5927\u5C0F\u4EE5\u53CA\u57FA\u4E8E\u663E\u793A\u90E8\u4EF6\u6240\u751F\u6210\u7684\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Driver`)), ` - This group allows the user to opt-in for a number of ready-made drivers related to the tick source of the application, graphics acceleration (DMA2D and GPU2D) and RTOS. \u7531\u4E8ESTM32CubeMX\u652F\u6301FreeRTOS\uFF08CMSIS RTOS v1\u548Cv2\uFF09\u914D\u7F6E\uFF0CTouchGFX Generator\u4E3A\u6BCF\u4E2A\u9009\u9879\u63D0\u4F9B\u4E86\u9A71\u52A8\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Additional Features`)), ` - This group appears if RGB565 is selected, allowing the user to create am application using image- and font-data from non-memory mapped flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u89C6\u9891\u89E3\u7801`), ` - \u8BE5\u7EC4\u5141\u8BB8\u7528\u6237\u542F\u7528\u786C\u4EF6\u6216\u8F6F\u4EF6\u89C6\u9891\u89E3\u7801\u3002 \u8BE5\u9009\u9879\u5BF9\u4E8E\u89C6\u9891\u63A7\u4EF6\u662F\u5FC5\u8981\u7684\u3002 \u6CE8\u610F\uFF01\u4E0D\u662F\u6240\u6709\u7684MCU\u90FD\u652F\u6301\u89C6\u9891\u89E3\u7801\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.png",
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX Generator has three groups: Display, Driver and Video Decoding"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u663E\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u663E\u793A`), `\u7EC4\u5305\u542B\u4E0E\u663E\u793A\u6709\u5173\u7684\u914D\u7F6E\uFF0C\u5982\u63A5\u53E3\u3001\u5C3A\u5BF8\u548C\u7F13\u51B2\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface-and-dimensions"
  }), `\u63A5\u53E3\u4E0E\u5C3A\u5BF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4ECA\uFF0CSTM32\u5FAE\u63A7\u5236\u5668\u53EF\u4F7F\u7528\u591A\u4E2A\u663E\u793A\u63A5\u53E3\uFF0C\u5982\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E76\u884CRGB\uFF08LTDC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MIPI DSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CMCU\u5E26\u6709\u8FDE\u63A5\u5230LTDC\u6216FMC\u7684\u663E\u793A\u5668\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\u53EF\u751F\u6210\u4EE3\u7801\uFF0C\u4EE5\u5C06\u5E27\u7F13\u51B2\u5668\u4F20\u8F93\u5230\u8FDE\u63A5\u7684\u663E\u793A\u5668\u3002 \u5BF9\u4E8EDSI\u548CSPI\u63A5\u53E3\uFF0C\u9A71\u52A8\u7A0B\u5E8F\u5FC5\u987B\u7531\u5F00\u53D1\u4EBA\u5458\u81EA\u5DF1\u5B9E\u73B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u6709\u5173\u4E0D\u540C\u663E\u793A\u63A5\u53E3\u7684\u4EE3\u7801\u5177\u4F53\u4F8B\u7A0B\uFF0C\u8BF7\u53C2\u89C1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-ltdc-parallel-rgb",
    mdxType: "Link"
  }, "\u65B9\u6848"), "\u7AE0\u8282\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-pixel-format"
  }), `\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F\u3002 \u5F53\u4F7F\u7528\u201CCustom\u201D\u663E\u793A\u63A5\u53E3\u65F6\uFF0C\u6240\u6709\u9009\u9879\u5747\u53EF\u7528\uFF0C\u5426\u5219\u9009\u9879\u88AB\u9650\u5236\u4E3A\u663E\u793A\u63A7\u5236\u5668\u8BBE\u7F6E\uFF08\u4F8B\u5982\uFF0C\u914D\u7F6ELTDC Framebuffer\u683C\u5F0F\u4E3A\u201CRGB565\u201D\u65F6\uFF0C\u4F1A\u5C06TouchGFX Generator\u4E2D\u7684\u914D\u7F6E\u9009\u9879\u9650\u5236\u4E3A\u201CRGB565\u201D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `BW (1bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Grey2 (2bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Grey4 (4bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ABRG2222 (8bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARGB2222 (8bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `BGRA2222 (8bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RGBA2222 (8bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RGB565 (16bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RGB888 (24bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARGB8888 (32bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `XRGB8888 (32bpp)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E00\u4E9B\u50CF\u7D20\u683C\u5F0F\u6CA1\u6709\u6216\u4EC5\u6709\u90E8\u5206ChromART\uFF08DMA2D\uFF09\u652F\u6301\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "For STM32F7/H7"), ": If the framebuffer is placed in Write Through cached memory (e.g. SRAM) then the DCache is flushed by the generated code prior to DMA2D (if configured in the Generator) accessing it. \u8BB0\u4F4F\u8981\u5728STM32CubeMX\u4E2D\u7684", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Cortex M7"), "\u7684", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "System Core"), "\u8BBE\u7F6E\u4E2D\u542F\u7528", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "CPU Cache"), "\uFF0C\u8FD9\u6837\u7F13\u5B58\u673A\u5236\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u9700\u66F4\u591A\u5173\u4E8ECPU\u7F13\u5B58\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",
    mdxType: "Link"
  }, "F7\u548CH7"), "\u4E2D\u7684\u201CCache\uFF08\u7F13\u5B58\uFF09\u201D\u7AE0\u8282\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buffering-strategies"
  }), `\u7F13\u51B2\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u901A\u8FC7TouchGFX Generator\u914D\u7F6E\u4EE5\u4E0B\u5E27\u7F13\u51B2\u7B56\u7565\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5355\u5E27\u7F13\u51B2`), ` - \u4EC5\u4F7F\u7528\u4E00\u4E2A\u5E94\u7528\u5E27\u7F13\u51B2\u533A\u3002 \u53EF\u80FD\u4F1A\u4F7F\u6027\u80FD\u53D7\u9650\uFF0C\u4F46\u5360\u7528\u5185\u5B58\u66F4\u5C11\u3002 \u53EF\u4E0E\u201C\u7F13\u51B2\u4F4D\u7F6E\u201D\u914D\u7F6E\u4E00\u8D77\u4F7F\u7528\uFF0C\u5C06\u5176\u653E\u7F6E\u5728\u5185\u90E8RAM\u4E2D\u3002 \u4E3A\u8FDB\u4E00\u6B65\u4F18\u5316\uFF0C\u7528\u6237\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u663E\u793A\u63A7\u5236\u5668\u6B63\u5728\u5904\u7406\u7684\u5F53\u524D\u884C\u3002 \u8BE5\u65B9\u6CD5\u7528\u4E8E\u6846\u67B6\uFF0C\u4EE5\u5141\u8BB8\u66F4\u65B0\u8BE5\u5E27\u671F\u95F4\u5DF2\u4F20\u8F93\u5230\u663E\u793A\u5C4F\u7684\u5185\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u53CC\u7F13\u51B2`), ` - \u4F7F\u7528\u4E24\u4E2A\u5E27\u7F13\u51B2\u533A\u3002 \u901A\u5E38\u4EE5\u727A\u7272\u5185\u5B58\u4E3A\u4EE3\u4EF7\u6765\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u90E8\u5206\u7F13\u51B2`), `- \u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u7528\u6237\u5B9A\u4E49\u7684\u5185\u5B58\u5757\u4F5C\u4E3A\u5E27\u7F13\u51B2\u533A\u3002 \u8BE5\u7B56\u7565\u9002\u7528\u4E8E\u4F4E\u6210\u672C\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u4E0D\u4F9D\u8D56\u5916\u90E8RAM\u4F46\u53EF\u4EE5\u5B9E\u73B0\u8D85\u51FA\u53EF\u7528\u5185\u5B58\u7684\u5168\u5E27\u7F13\u51B2\u80FD\u529B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5355\u7F13\u51B2\u533A\u548C\u53CC\u7F13\u51B2\u533A\uFF0C\u7528\u6237\u53EF\u901A\u8FC7\u201C\u7F13\u51B2\u5668\u4F4D\u7F6E\u201D\u6765\u914D\u7F6E\u5176\u4F4D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u63D0\u4F9B\u4EE5\u4E0B\u9009\u9879\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6309\u5206\u914D`), `- \u5141\u8BB8\u94FE\u63A5\u5668\u6839\u636E\u94FE\u63A5\u5668\u811A\u672C\u6765\u653E\u7F6E\u5E27\u7F13\u51B2\u5B58\u50A8\u5668\u3002 \u9ED8\u8BA4\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6309\u5730\u5740`), `- \u5141\u8BB8\u7528\u6237\u5B9A\u4E49\u4E00\u4E2A(\u5355) \u6216\u4E24\u4E2A(\u53CC) \u5E27\u7F13\u51B2\u5730\u5740\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u90E8\u5206\u5E27\u7F13\u51B2`), `\u7B56\u7565\u5141\u8BB8\u7528\u6237\u5B9A\u4E49\u4EE5\u4E0B\u53C2\u6570:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5757\u6570\uFF08\u59CB\u7EC8\u653E\u7F6E\u5728\u5185\u90E8RAM\u4E2D\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5757\u5927\u5C0F\uFF08\u5B57\u8282\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4E86\u89E3\u6709\u5173\u90E8\u5206\u7F13\u51B2\u6218\u7565\u7684\u4E00\u4E9B\u6838\u5FC3\u6982\u5FF5\uFF0C\u8BF7\u9605\u8BFB\u4F7F\u7528\u90E8\u5206\u5E27\u7F13\u51B2\u533A\u964D\u4F4E\u5185\u5B58\u8981\u6C42\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\u4E13\u7528\u6587\u7AE0`), `\u3002 \u672C\u6587\u4ECE\u6982\u5FF5\u4E0A\u8BF4\u660E\u4E86\u5982\u4F55\u5B9E\u73B0\u90E8\u5206\u5E27\u7F13\u51B2\uFF0C\u5E76\u4E14\u672C\u6587\u4E2D\u663E\u793A\u7684\u4EE3\u7801\u4E0ETouchGFX Generator\u751F\u6210\u7684\u4EE3\u7801\u7565\u6709\u4E0D\u540C\u3002 \u6709\u5173\u4E3A\u8FD9\u4E9B\u7B56\u7565\u751F\u6210\u7684\u5177\u4F53\u793A\u4F8B\u4EE3\u7801\uFF0C\u8BF7\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scenarios/scenarios-framebuffer-strategies"
  }), `\u5E27\u7F13\u51B2\u7B56\u7565`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "driver"
  }), `\u9A71\u52A8\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A71\u52A8\u5668\u90E8\u5206\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u4E3ATouchGFX AL\u7684\u5404\u79CD\u529F\u80FD\u9009\u62E9\u9A71\u52A8\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-tick-source"
  }), `\u5E94\u7528\u6EF4\u7B54\u8BA1\u65F6\u6E90`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6EF4\u7B54\u8BA1\u65F6\u6E90\u5B9A\u4E49\u4E86\u5982\u4F55\u5C55\u5F00\u9A71\u52A8\u5E94\u7528\u7A0B\u5E8F\u7684\u5F00\u53D1\u3002 \u5F00\u53D1\u4EBA\u5458\u5177\u6709\u4EE5\u4E0B\u9009\u9879\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `LTDC`), `-\u5982\u679C\u5728\u201CDisplay\u201D\u7EC4\u4E2D\u9009\u7528LTDC\u63A5\u53E3\uFF0C\u5219\u5E94\u7528Tick\u6E90\u53EF\u4EE5\u9009\u201CLTDC\u201D\u3002 \u8FD9\u610F\u5473\u7740TouchGFX Generator\u5C06\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGenerated HAL`), `\u7C7B\u4E2D\u5B89\u88C5\u9A71\u52A8\u7A0B\u5E8F\u51FD\u6570(LTDC\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F) \uFF0C\u8BE5\u51FD\u6570\u901A\u8FC7\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\u6765\u5C55\u5F00\u9A71\u52A8\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Custom\u548CFMC`), ` - \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5F00\u53D1\u4EBA\u5458\u9700\u8981\u901A\u8FC7\u5468\u671F\u6027\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\u6765\u9A71\u52A8\u5E94\u7528\u7A0B\u5E8F\u7684\u6267\u884C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphics-accelerator"
  }), `\u56FE\u5F62\u52A0\u901F\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u56FE\u5F62\u52A0\u901F\uFF0C\u5F00\u53D1\u4EBA\u5458\u6709\u4E09\u4E2A\u9009\u9879\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `None`), ` - The application renders using only the CPU.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `DMA2D Accelerator (ChromART)`), ` -\xA0The application uses the ChromART chip when possible to move and blend pixels, freeing up CPU cycles. The driver is generated by TouchGFX Generator and does not require any action from the developer.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.png",
    width: "200",
    mdxType: "Figure"
  }, "DMA2D is enabled in the *Multimedia* category in CubeMX, for MCUS that support it."), "1. \u4F7F\u7528STM32Cube HAL\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u5176\u5C06\u56DE\u8C03\u51FD\u6570\u6CE8\u518C\u5230dma2d\u53E5\u67C4`hdma2d.XferCpltCallback`\u3002 2. \u76F4\u63A5\u4F7F\u7528`DMA2D_IRQHandler()`\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u5728STM32CubeMX\u4E2DDMA2D IP\u7684NVIC\u8BBE\u7F6E\u4E2D\u542F\u7528\u6216\u7981\u7528DMA2D\u5168\u5C40\u4E2D\u65AD\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E24\u8005\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002 \u9009\u98791\uFF09\u542F\u7528\u5168\u5C40\u4E2D\u65AD\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u9009\u98792\uFF09\u7981\u7528\u5168\u5C40\u4E2D\u65AD\u751F\u6210\u7684\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, 'When using global interrupt for DMA2D, ensure that the "IRQ handler" calls the "DMA2D HAL handler". This is default behaviour.'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5982\u679C\u5728\u542F\u7528\u5168\u5C40\u4E2D\u65AD\u7684\u540C\u65F6\u7981\u7528DMA2D\u7684\u201C IRQ\u4E2D\u65AD\u670D\u52A1\u7A0B\u5E8F\u201D\u548C\u201C\u8C03\u7528HAL\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\u201D\uFF0C\u5C06\u5BFC\u81F4\u6C38\u4E0D\u8C03\u7528\u5DF2\u6CE8\u518C\u7684\u56DE\u8C03\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `GPU2D (NeoChrom)`), ` is a graphics accelerator capable of accelerating many of the drawing operations in TouchGFX, including texture mapping. It supports framebuffers in RGB565, RGB888, and ARGB8888 formats.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.png",
    width: "190",
    mdxType: "Figure"
  }, "GPU2D is enabled in the *Multimedia* category in CubeMX, for MCUS that support it."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "The GPU2D option is only visible if GPU2D has been enabled in the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "Multimedia"), " section for your project in CubeMX. It is only available for STM32U599 devices and can only be enabled for use with TouchGFX if the ThreadX RTOS from the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "Middlewares"), " section is also enabled."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "real-time-operating-system"
  }), `\u5B9E\u65F6\u64CD\u4F5C\u7CFB\u7EDF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F00\u53D1\u4EBA\u5458\u53EF\u4F7F\u7528\u4EFB\u4F55\u652F\u6301TouchGFX\u7684RTOS\uFF08\u751A\u81F3\u65E0\u64CD\u4F5C\u7CFB\u7EDF\uFF09\u3002 \u5982\u62BD\u8C61\u5C42\u67B6\u6784\u4E2D\u6240\u8FF0\uFF0CTouchGFX Engine\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u63A5\u53E3\u5C06\u5176\u4E3B\u4E8B\u4EF6\u5FAA\u73AF\u4EE5\u53CA\u5E27\u7F13\u51B2\u8BBF\u95EE\u4E0E\u7528\u6237\u9009\u62E9\u7684RTOS\u540C\u6B65\u3002 When developers choose an operating system in TouchGFX Generator, code will be generated to syncronize internally via primitives for the OS of choice. \u64CD\u4F5C\u7CFB\u7EDF\u4ECD\u7136\u5FC5\u987B\u901A\u8FC7STM32CubeMX\u8FDB\u884C\u914D\u7F6E\uFF0C\u4EE5\u786E\u5B9A\u5806\u6808\u5927\u5C0F\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS (CMSIS OS V1 and V2) and ThreadX (Native Middleware or Azure RTOS Software Packs) can be configured directly from within STM32CubeMX and TouchGFX Generator providing the user with generated code for both task definitions and TouchGFX RTOS driver. TouchGFX Generator can generate CMSIS V1 and CMSIS V2 compliant RTOS drivers which work with any CMSIS compliant RTOS, a driver for ThreadX, and a driver for running bare metal without an operating system.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "threadx-middleware-os"
  }), `ThreadX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ThreadX can be enabled either by selecting an AZRTOS Software Pack or by enabling the Native ThreadX Middleware from STM32CubeMX, if available for the selected MCU device.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "All new STM32 MCU devices will support, by default, ThreadX Middleware directly available from STM32CubeMX without requiring additional pack downloads. TouchGFX Board Support packs will slowly transition to using either ThreadX middleware, where available, or X-CUBE-AZRTOS software packs."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "X-CUBE-AZRTOS-XX Expansion Packs providing ThreadX support are already available for the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32G0xx, STM32G4xx, STM32L4xx, STM32F4xx, STM32F7xx"), " and the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32H7xx"), " MCU Series.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56FE\u663E\u793A\u4E86TouchGFX Generator\u4E2D\u53EF\u7528\u7684\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/driver-rtos-options-threadx.png",
    mdxType: "Figure"
  }, "RTOS\u9A71\u52A8\u7A0B\u5E8F\u9009\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "NoOS")), " option is disabled when ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "ThreadX"), " Middleware is enabled."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "CMSIS_RTOS_V1")), " and ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "CMSIS_RTOS_V2")), " options are disabled when ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "ThreadX"), " Middleware is enabled. CMSIS OS wrapper is not provided by ST, customer has to select ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "Custom")), " option and implement the CMSIS wrapper.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "enabling-and-configuring-threadx-from-the-middleware-list-available-in-stm32cubemx"
  }), `Enabling and configuring ThreadX from the Middleware list available in STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A succesful memory configuration for ThreadX relies on `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, `Memory Pool Allocation`), `. The recommended value is `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, `Static Allocation`), `. Perform the folowing steps in the ThreadX Middleware configuration:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Enable `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `THREADX`), ` Middleware by selecting `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Core`), ` from the Mode list, as seen in the figure below.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TX_TIMER_TICKS_PER_SECOND`), ` to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1000`), ` to get Ticks each one millisecond`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Memory Pool Allocation`), ` to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Use Static Allocation`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.png",
    mdxType: "Figure"
  }, "Enabling and Configuring Native ThreadX Middleware"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Memory Pool Allocation"), " should be set to ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Use Dynamic Allocation"), " when ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Native ThreadX Middleware"), " is enabled"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "When ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Memory Pool Allocation"), " is set to ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Use Dynamic Allocation")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "User will have to add the missing code in the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "USER CODE BEGIN DYNAMIC_MEM_ALLOC"), " section in the generated ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "app_azure_rtos.c")), " file."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "User will need also to update the linker files following the recemmendation described in the generated ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "app_azure_rtos.c")), " file.")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "enabling-and-configuring-threadx-from-azrtos-software-pack"
  }), `Enabling and configuring ThreadX from AZRTOS Software Pack`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Select `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Software Packs -> Select Components`), ` or Press `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Alt-O`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Select `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `STMicroelectonics.X-CUBE-AZRTOS-XX`), `. Download the pack if required.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Select `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `RTOS ThreadX`), ` and check the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Core`), ` check box to enable ThreadX. You can now safely close the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, `Software Packs Component Selector`), `.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.png",
    mdxType: "Figure"
  }, "Enabling ThreadX from an X-CUBE-AZRTOS Software Pack"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Select the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, `Software Packs`), ` group from the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, `Categories`), ` list on the left hand side and select `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `STMicroelectonics.X-CUBE-AZRTOS-XX`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Enable ThreadX by selecting the mode `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `RTOS ThreadX`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Memory Pool Allocation`), ` to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Use Static Allocation`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.png",
    width: "800",
    mdxType: "Figure"
  }, "ThreadX Configuration - X-CUBE-AZRTOS Software Pack"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TX_TIMER_TICKS_PER_SECOND`), ` to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1000`), ` to get ticks once per millisecond.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.png",
    width: "800",
    mdxType: "Figure"
  }, "ThreadX Configuration - X-CUBE-AZRTOS Software Pack"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "freertos-middleware-os"
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8C03\u7528\u4EE5\u4E0B\u51FD\u6570\u65F6\uFF0C\u5C06\u8FDB\u5165TouchGFX\u4E3B\u5FAA\u73AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void\xA0MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F00\u53D1\u4EBA\u5458\u9700\u8981\u5728\u4EFB\u52A1\u5904\u7406\u7A0B\u5E8F\u4E2D\u4E3A\u8981\u5728\u5176\u4E2D\u8FD0\u884CTouchGFX\u5E94\u7528\u7A0B\u5E8F\u7684\u4EFB\u52A1\u8C03\u7528\u6B64\u51FD\u6570\u3002 \u5982\u679C\u7528\u6237\u4ECESTM32CubeMX\u914D\u7F6E\u4E86\u540D\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DefaultTask`), `\u7684FeeRTOS\u4EFB\u52A1\uFF0C\u5219\u4EE5\u4E0B\u793A\u4F8B\u663E\u793A\u4E86\u5982\u4F55\u5728\u7528\u6237\u4EE3\u7801\u4E2D\uFF0C\u901A\u8FC7\u4EFB\u52A1\u5904\u7406\u51FD\u6570\u8C03\u7528 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process() `), `\u51FD\u6570\u6765\u542F\u52A8TouchGFX\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4}",
    "{4}": true
  }), `void\xA0StartDefaultTask(void\xA0*argument)
{
\xA0\xA0/*\xA0USER\xA0CODE\xA0BEGIN\xA05\xA0*/
  MX_TouchGFX_Process();
\xA0\xA0/*\xA0USER\xA0CODE\xA0END\xA05\xA0*/\xA0
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX will also generate a call to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `osKernelStart();`), ` which starts the scheduler.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "threadx-middleware-os"
  }), `ThreadX Middleware`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX is no more responsible of generating the code creating the threads for middlewares and for the user.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` STM32CubeMX will generate the call to the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_PreOSInit()`), ` function which will initialize the TouchGFX framework`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` STM32CubeMX will generate the call to the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_ThreadX_Init()()`), ` function which will initialize and start the ThreadX kernel`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4,9}",
    "{4,9}": true
  }), `int main(void)
{
  /* Call PreOsInit function */
    MX_TouchGFX_PreOSInit();
  /* USER CODE BEGIN 2 */

  /* USER CODE END 2 */

  MX_ThreadX_Init();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator will generate the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_PreOSInit()`), ` function which will simply call the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_init()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7}",
    "{7}": true
  }), `/**
 * PreOS Initialization function
 */
void MX_TouchGFX_PreOSInit(void)
{
  // Calling forward to touchgfx_init in C++ domain
  touchgfx_init();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator will generate the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Init()`), ` function which will create the TouchGFX thread`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{16-23}",
    "{16-23}": true
  }), `/**
 * Create TouchGFX Thread
 */
UINT MX_TouchGFX_Init(VOID *memory_ptr)
{
  UINT ret = TX_SUCCESS;
  CHAR *pointer = 0;

  /* Allocate the stack for TouchGFX Thread.  */
  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,
                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)
  {
    ret = TX_POOL_ERROR;
  }

  /* Create TouchGFX Thread */
  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,
                       pointer, TOUCHGFX_STACK_SIZE,
                       5, 5,
                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)
  {
    ret = TX_THREAD_ERROR;
  }

  return ret;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator will generate the required code which will be inserted by STM32CubeMX into the file `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, `app_azure_rtos.c`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{10,23}",
    "{10,23}": true
  }), `  /**
  * @brief  Define the initial system.
  * @param  first_unused_memory : Pointer to the first unused memory
  * @retval None
  */
VOID tx_application_define(VOID *first_unused_memory)
{
  ...

  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)
  {
    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */

    /* USER CODE END TouchGFX_Byte_Pool_Error */
  }
  else
  {
    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */

    /* USER CODE END TouchGFX_Byte_Pool_Success */

    memory_ptr = (VOID *)&touchgfx_app_byte_pool;
    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)
    {
      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */
      while(1);
      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */
    }
    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */

    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */
  }

  ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tx_application_define()`), ` function is called by the ThreadX kernel at initialization time.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Init()`), ` function is called by `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tx_application_define()`), `.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` The TouchGFX thread will be started later when the ThreadX kernel is started.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32CubeMX generate full code only the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Static Memory Pool Allocation"), " configuration for the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "ThreadX Middlewares"), "."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "Please refer to the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32H7B3I-DK/Applications/AnimatedImages"), " example available inside the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "X-CUBE-TOUCHGFX"), " expansion pack if you want to configure ThreadX with ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Dynamic Memory Allocation"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "other-cmsis-compliant-os"
  }), `\u5176\u4ED6\u517C\u5BB9CMSIS\u7684OS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5F00\u53D1\u4EBA\u5458\u91C7\u7528\u4E0ESTM32CubeMX\u63D0\u4F9B\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF08FreeRTOS\u548CThreadX\uFF09\u4E0D\u540C\u7684\uFF0C\u517C\u5BB9CMSIS\u7684\u5176\u4ED6\u64CD\u4F5C\u7CFB\u7EDF\u65F6\uFF0C\u4ED6\u5FC5\u987B\u624B\u52A8\u5B8C\u6210RTOS\u914D\u7F6E\u548C\u4EFB\u52A1\u5B9A\u4E49\u3002 \u901A\u5E38\uFF0C\u9700\u8981\u6267\u884C\u4EE5\u4E0B\u624B\u52A8\u6B65\u9AA4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u914D\u7F6ERTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5B9A\u4E49\u4EFB\u52A1\u4EE5\u8FD0\u884CTouchGFX (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MX_TouchGFX_Process`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u542F\u52A8\u8C03\u5EA6\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process`), `\uFF0C\u4EE5\u542F\u52A8\u4EFB\u52A1\u5904\u7406\u7A0B\u5E8F\u4E2D\u7684TouchGFX Engine\u4E3B\u5FAA\u73AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void\xA0MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-features"
  }), `\u5176\u5B83\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "external-data-reader"
  }), `\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8ERGB565\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F\uFF0Ctouchgfx\u652F\u6301\u6240\u8C13\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6570\u636E\u8BFB\u53D6\u5668`), `\u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u4F7F\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u76F4\u63A5\u4ECE\u975E\u5B58\u50A8\u5668\u6620\u5C04\u4E32\u884C\u95EA\u5B58\u8BFB\u53D6\u6570\u636E\uFF0C\u800C\u65E0\u9700\u8FDB\u884C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\u7F13\u5B58`), `\uFF0C\u5F53\u7136\u8FD9\u9700\u8981\u589E\u52A0\u989D\u5916\u7684\u7F13\u51B2\u5B58\u50A8\u533A\u3002 \u6709\u5173\u5982\u4F55\u5B9E\u73B0DataReader\uFF0C\u4ECE\u975E\u5B58\u50A8\u6620\u5C04\u95EA\u5B58\u82AF\u7247\u4E2D\u83B7\u53D6\u5E94\u7528\u7A0B\u5E8F\u8D44\u6E90\u7684\u793A\u4F8B\uFF0C\u8BF7\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/using-serial-flash"
  }), `SerialFlash`), `\u6587\u7AE0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6570\u636E\u8BFB\u53D6\u5668`), `\u9009\u9879\u901A\u5E38\u7528\u4E8E\u6CA1\u6709\u8DB3\u591F\u7684\u5185\u5B58\u7528\u4E8E\u989D\u5916\u7F13\u51B2\u533A\u7684\u4F4E\u6210\u672C\u89E3\u51B3\u65B9\u6848(\u5982STM32G0) \u3002 \u5982\u679CDMA2D\u4F7F\u80FD\u4E86\uFF0C\u5219\u65E0\u6CD5\u4F7F\u80FD\u8BE5\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `RGB565`), `\u9009\u4F5C\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F\u540E\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9644\u52A0\u529F\u80FD`), `\u7EC4\u5C06\u53D8\u5F97\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "\u5176\u5B83\u529F\u80FD\uFF1A\u6570\u636E\u8BFB\u53D6\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F00\u53D1\u4EBA\u5458\u53EF\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u5668\uFF1A`), `\u4F7F\u80FD\u6216\u7981\u7528\u529F\u80FD\u3002 \u5982\u679C\u4F7F\u80FD\uFF0CTouchGFX\u5C06\u76F4\u63A5\u901A\u8FC7\u751F\u6210\u7684\u63A5\u53E3\u68C0\u7D22\u5E94\u7528\u8D44\u6E90\u3002 \u5982\u679C\u7981\u7528\uFF0C\u5219\u5F00\u53D1\u4EBA\u5458\u9700\u8981\u5C06\u56FE\u7247\u8D44\u6E90`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u7F13\u5B58`), `\u5230\u5185\u5B58\u7F13\u51B2\u533A\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u5668\uFF1A\u884C\u7F13\u51B2\u533A\u5927\u5C0F\uFF1A`), `\u521B\u5EFA\u4E24\u4E2A\u7F13\u51B2\u533A\uFF0C\u4EE5\u4FBF\u5C06\u56FE\u50CF\u6216\u6587\u672C\u6DF7\u5408\u5230\u5E27\u7F13\u51B2\u4E2D\u3002 \u9ED8\u8BA4\u503C\u4E3A\u4E00\u4E2A\u5C4F\u5E55\u5BBD\u5EA6*4\u5B57\u8282\uFF0C\u4EE5\u652F\u6301ARGB8888\u50CF\u7D20\u683C\u5F0F\u7684\u5168\u5C3A\u5BF8\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u5668\uFF1A\u6700\u5C0FDMA\u4F20\u8F93\u5927\u5C0F\uFF1A`), `\u8BBE\u7F6E\u542F\u52A8DMA\u4F20\u8F93\u6240\u9700\u7684\u6700\u5C0F\u5B57\u8282\u3002 \u5982\u679C\u8BF7\u6C42\u4F20\u8F93\u7684\u5B57\u8282\u66F4\u5C11\uFF0C\u5C06\u4E0D\u4F7F\u7528DMA\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u80FD`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u5668`), `\u7684\u60C5\u51B5\u4E0B\u751F\u6210\u4EE3\u7801\u540E\uFF0C\u5C06\u521B\u5EFA\u4EE5\u4E0B\u9644\u52A0\u6587\u4EF6\uFF0C\u4EE5\u652F\u6301\u76F4\u63A5\u4ECE\u975E\u5B58\u50A8\u5668\u6620\u5C04\u95EA\u5B58\u4E2D\u68C0\u7D22\u56FE\u7247\u8D44\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedDataReader.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/TouchGFXDataReader.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/TouchGFXDataReader.hpp`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u5F80\u5E38\u4E00\u6837\uFF0C\u5BF9\u4E8ETouchGFX Generator\u751F\u6210\u7684\u4EE3\u7801\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u4E3A\u53EA\u8BFB\uFF0C\u7528\u6237\u4FEE\u6539\u5E94\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u7C7B\u4E2D\u8FDB\u884C\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u7684\u7C7B\u578B\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C06TouchGFX HAL\u914D\u7F6E\u4E3A\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DataReader`), `\uFF0C\u5E76\u5BF9\u4EE5\u4E0B\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXConfiguration.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX/target/generated/TouchGFXGeneratedHAL.hpp`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4EC5\u5F53\u7981\u7528DMA2D\u548CLTDC\u65F6\uFF0CDataReader\u9644\u52A0\u529F\u80FD\u624D\u53EF\u7528\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "8bit-ltdc-color-look-up-table"
  }), `8\u4F4DLTDC\u989C\u8272\u67E5\u8BE2\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53LTDC\u88AB\u914D\u7F6E\u4E3A\u8BFB\u53D6L8\u683C\u5F0F\u7684\u5E27\u7F13\u51B2\u5668\u548CTouchGFX\u6E32\u67D3 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_b_g_r2222"
  }), `ABRG2222`), `\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_r_g_b2222"
  }), `ARGB222`), `\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___b_g_r_a2222"
  }), `BGRA2222`), `\u6216 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"
  }), `RGBA2222`), `\u683C\u5F0F\u65F6, TouchGFX Generator\u5C06\u63D0\u4F9B\u4E00\u4E2ACLUT\uFF08\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::initialize()`), `\u6267\u884C\u671F\u95F4\u52A0\u8F7D\u5230LTDC\uFF09\u3002 \u6709\u5173LTDC\u548CCLUT\u7684\u7528\u6CD5\uFF0C\u8BE6\u89C1STM32 MCU\u53C2\u8003\u624B\u518C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "video-decoding"
  }), `\u89C6\u9891\u89E3\u7801`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u2018\u89C6\u9891\u89E3\u7801\u2019\u90E8\u5206\u53EF\u8BA9\u5F00\u53D1\u8005\u901A\u8FC7\u786C\u4EF6\u6216\u8F6F\u4EF6\u89C6\u9891\u89E3\u7801\u80FD\u529B\u589E\u5F3ATouchGFX HAL\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u9891\u89E3\u7801\u4EC5\u652F\u6301RGB565\uFF0816bpp\uFF09\u548CRGB888\uFF0824bpp\uFF09\u683C\u5F0F\u7684\u5E27\u7F13\u51B2\u533A\u3002 \u5982\u679C\u6CA1\u6709\u9009\u62E9\u8FD9\u4E24\u79CD\u683C\u5F0F\uFF0C\u5219\u89C6\u9891\u89E3\u7801\u90E8\u5206\u5C06\u4E0D\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E0D\u662F\u6240\u6709MCU\u90FD\u652F\u6301\u786C\u4EF6\u89C6\u9891\u89E3\u7801\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-type"
  }), `\u7C7B\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u89C6\u9891\u89E3\u7801\u7684\u201D\u7C7B\u578B\u201D\u662F\u7981\u7528\u7684\u3002 \u5982\u679CSTM32CubeMX\u4E2D\u6CA1\u6709\u542F\u7528\u6240\u9700\u7684\u5916\u8BBE\uFF0C\u201C\u8F6F\u4EF6\u89E3\u7801\u201D\u548C\u201C\u786C\u4EF6\u89E3\u7801\u201D\u90FD\u5C06\u663E\u793A\u4E3A\u7070\u8272\u3002 \u5C06\u9F20\u6807\u60AC\u505C\u5728\u7070\u8272\u7684\u9009\u9879\u4E0A\uFF0C\u770B\u770B\u9700\u8981\u54EA\u4E9B\u5916\u8BBE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.png",
    width: "800",
    mdxType: "Figure"
  }, "\u4FE1\u606F\u6846\u663E\u793A\u201C\u786C\u4EF6\u89E3\u7801\u201D\u7684\u89C6\u9891\u7C7B\u578B\u4F9D\u8D56\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8F6F\u4EF6`), ` - \u5982\u679C\u5728STM32CubeMX\u7684\u4E2D\u95F4\u4EF6\u90E8\u5206\u542F\u7528\u4E86LIBJPEG\uFF0C\u5219\u53EF\u4EE5\u9009\u62E9\u201C\u8F6F\u4EF6\u201D\u9009\u9879\uFF0C\u5E76\u751F\u6210\u8F6F\u4EF6\u89E3\u7801\u5668\u3002 \u8FD9\u610F\u5473\u7740TouchGFX Generator\u5C06\u751F\u6210\u4E00\u4E2A\u8F6F\u4EF6MJPEG\u89E3\u7801\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u786C\u4EF6`), ` - \u5982\u679C\u5728\u591A\u5A92\u4F53\u90E8\u5206\u542F\u7528\u4E86JPEG\uFF0C\u5E76\u4E14\u5728TouchGFX Generator\u4E2D\u9009\u62E9\u4E86\u7B26\u5408CMSIS\u8981\u6C42\u7684RTOS\uFF0C\u5219\u53EF\u4EE5\u9009\u62E9\u201C\u786C\u4EF6\u201D\u9009\u9879\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-options-4-18.png",
    width: "800",
    mdxType: "Figure"
  }, "\u89C6\u9891\u89E3\u7801\u7C7B\u578B\u9009\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728LIBJPEG\u8BBE\u7F6E\u4E2D\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u201CRGB\u626B\u63CF\u7EBF\u683C\u5F0F\u201D\u4E2D\u7684RGB\u6392\u5E8F\u5FC5\u987B\u8BBE\u7F6E\u4E3A\u201CBGR\u201D\u800C\u4E0D\u662F\u201CRGB\u201D\u3002 \u6BCF\u4E2A\u50CF\u7D20\u7684\u5B57\u8282\u6570\u5FC5\u987B\u8BBE\u7F6E\u4E3A3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/libjpeg-rgb-ordering.png",
    width: "700",
    mdxType: "Figure"
  }, "\u9700\u8981\u7684LIBJPEG RGB\u626B\u63CF\u7EBF\u683C\u5F0F\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u786C\u4EF6\u89E3\u7801\u65F6\uFF0CJPEG\u8BBE\u7F6E\u4E2D\u7684RGB\u683C\u5F0F\u5FC5\u987B\u4E0E\u663E\u793A\u5C4F\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u6709\u5173\u4E0D\u540C\u89C6\u9891\u89E3\u7801", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\u573A\u666F"), "\u7684\u5177\u4F53\u793A\u4F8B\u4EE3\u7801\uFF0C\u8BF7\u53C2\u89C1\u201C\u573A\u666F\u201D\u90E8\u5206\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-number"
  }), `\u5E76\u53D1\u89C6\u9891`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5E76\u53D1\u89C6\u9891\u201D\u9009\u9879\u53EF\u8BBE\u7F6EGUI\u4E2D\u4EFB\u610F\u7ED9\u5B9A\u65F6\u95F4\u5728\u540C\u4E00\u5C4F\u5E55\u4E0A\u540C\u65F6\u88AB\u89E3\u7801\u7684\u6700\u5927\u6570\u91CF\u89C6\u9891\u3002 \u5982\u679C\u5E0C\u671B\u4E00\u5757\u5C4F\u5E55\u4E0A\u53EA\u89E3\u7801\u4E00\u4E2A\u89C6\u9891\uFF0C\u5219\u53EF\u4EE5\u5C06\u201C\u89C6\u9891\u6570\u91CF\u201D\u8BBE\u7F6E\u4E3A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u591A\u53EF\u4EE5\u540C\u65F6\u89E3\u78014\u4E2A\u89C6\u9891\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-strategy"
  }), `\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5173\u4E8E\u89C6\u9891\u89E3\u7801\u7B56\u7565\uFF0C\u5F00\u53D1\u4EBA\u5458\u6709\u4E09\u79CD\u9009\u62E9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u201C\u76F4\u63A5\u5230\u5E27\u7F13\u5B58\u533A\uFF08Direct to Framebuffer\uFF09\u201D`), ` - \u89C6\u9891\u5728UI\u7EBF\u7A0B\u4E2D\u88AB\u89E3\u7801\u3002 \u89E3\u7801\u901F\u5EA6\u6162\u4E8E\u5176\u4ED6\u7B56\u7565\u3002 \u4F7F\u7528\u786C\u4EF6\u89C6\u9891\u89E3\u7801\u65F6\uFF0C\u201C\u76F4\u63A5\u5230\u5E27\u7F13\u5B58\u533A\uFF08Direct to Framebuffer\uFF09\u201D\u9009\u9879\u4E0D\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5355\u7F13\u51B2\u533A`), ` - \u5728\u4E13\u7528\u7684\u7F13\u51B2\u533A\u4E2D\uFF0C\u4EE5\u5355\u72EC\u7684\u4EFB\u52A1\u8FDB\u884C\u89C6\u9891\u89E3\u7801\u3002 \u8BE5\u7F13\u51B2\u533A\u4F4D\u4E8E\u5185\u90E8\u5B58\u50A8\u5668\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u53CC\u7F13\u51B2\u533A`), ` - \u5728\u4E24\u4E2A\u4E13\u7528\u7F13\u51B2\u533A\u4E2D\uFF0C\u4EE5\u5355\u72EC\u7684\u4EFB\u52A1\u8FDB\u884C\u89C6\u9891\u89E3\u7801\uFF0C\u4EE5\u727A\u7272\u5185\u5B58\u4E3A\u4EE3\u4EF7\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u91C7\u7528\u5355\u6216\u53CC\u5E27\u7F13\u5B58\u533A\u7B56\u7565\u65F6\uFF0C\u5FC5\u987B\u542F\u7528\u7B26\u5408CMSIS\u8981\u6C42\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.png",
    width: "750",
    mdxType: "Figure"
  }, "\u5173\u4E8ECMSIS RTOS\u8981\u6C42\u7684\u4FE1\u606F\u6846"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4F7F\u7528\u53CC\u7F13\u51B2\u533A\u7B56\u7565\u65F6\uFF0C\u8981\u6CE8\u610F\u5185\u5B58\u6D88\u8017\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5173\u4E8E\u914D\u7F6E\u7528\u4E8E\u89C6\u9891\u89E3\u7801\u7684FreeRTOS\u7684\u5177\u4F53\u793A\u4F8B\uFF0C\u8BF7\u53C2\u89C1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\u201C\u573A\u666F\u201D"), "\u90E8\u5206\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "decode-format"
  }), `\u89E3\u7801\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u8F6F\u4EF6\u89E3\u7801\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u9009\u62E9RGB\u7F13\u51B2\u533A\u7684\u50CF\u7D20\u683C\u5F0F\uFF0C\u4E0D\u7BA1\u5E27\u7F13\u5B58\u533A\u7684\u50CF\u7D20\u683C\u5F0F\u662F\u4EC0\u4E48\u3002 TouchGFX Generator\u751F\u6210\u7684\u4EE3\u7801\u5141\u8BB8ChromART\u5728\u4E0D\u540C\u7684\u683C\u5F0F\u4E4B\u95F4\u8FDB\u884C\u50CF\u7D20\u683C\u5F0F\u8F6C\u6362\u3002 \u89C6\u9891\u89E3\u7801\u7F13\u51B2\u533A\u4F7F\u7528RGB565\u683C\u5F0F\u65F6\uFF0C\u4F1A\u4F7F\u5F00\u53D1\u8005\u5360\u7528\u7684\u5185\u5B58\u66F4\u5C11\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-decode-format.png",
    width: "700",
    mdxType: "Figure"
  }, "\u89E3\u7801\u683C\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-buffer-size"
  }), `\u7F13\u5B58\u5927\u5C0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7F13\u51B2\u533A\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u8BBE\u7F6E\u5FC5\u987B\u5BF9\u5E94\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u6700\u5927\u89C6\u9891\u5C3A\u5BF8\u3002 \u5BBD\u5EA6\u503C\u5FC5\u987B\u80FD\u88AB32\u6574\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u4EE3\u7801\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\u4E2D\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u6B64\u5E94\u7528\u4E2D\uFF0C\u4F7F\u7528\u4E86RGB888\u683C\u5F0F\u7684\u663E\u793A\u5C4F\uFF0C\u5E76\u4F7F\u7528480*272\u89C6\u9891\u548C\u201C\u5355\u7F13\u51B2\u533A\u201D\u89C6\u9891\u89E3\u7801\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
#include <DedicatedBufferVideoController.hpp>
#include <SoftwareMJPEGDecoder.hpp>

uint32_t lineBuffer[480];

SoftwareMJPEGDecoder mjpegdecoder1((uint8_t*)lineBuffer);

uint32_t videoRGBBuffer[97920];
DedicatedBufferController<1, 480, 272, 480*3U, Bitmap::RGB888> videoController;

//Singleton Factory
VideoController& VideoController::getInstance()
{
    return videoController;
}

void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();
    registerEventListener(*(Application::getInstance()));
    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf) / (sizeof(uint32_t) * 2)), (void*)0);

    /*
     * Add software decoder to video controller
     */
    videoController.addDecoder(mjpegdecoder1, 0);

    videoController.setRGBBuffer((uint8_t*)videoRGBBuffer, sizeof(videoRGBBuffer));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-project"
  }), `\u751F\u6210\u7684\u9879\u76EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528STM32CubeMX\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u6210\u4EE3\u7801`), `\u6309\u94AE\u751F\u6210\u4EE3\u7801\u65F6\uFF0CTouchGFX\uFF08\u81F3\u5C11\uFF09\u9002\u7528\u4E8E\u4EE5\u4E0BIDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u83B7\u5F97\u6700\u4F18\u9879\u76EE\u7ED3\u6784\uFF0C\u8BF7\u9009\u62E9\u4EE5\u4E0B\u9879\u76EE\u751F\u6210\u9009\u9879\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E94\u7528\u7ED3\u6784\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9AD8\u7EA7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7981\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728\u6839\u4E0B\u751F\u6210`), `(\u4EC5\u9650STM32CubeIDE)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u9009\u62E9\u201C\u9AD8\u7EA7\u5E94\u7528\u7ED3\u6784\u201D\uFF0C\u7136\u540E\u53D6\u6D88\u9009\u62E9\u201C\u5728\u6839\u4E0B\u751F\u6210\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u8FD8\u5C06\u751F\u6210\u5177\u6709\u4EE5\u4E0B\u7ED3\u6784\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX`), `\u6587\u4EF6\u5939:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u6587\u4EF6\u5939\u7ED3\u6784"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5E94\u7528`), `\u6587\u4EF6\u5939\uFF0C\u5305\u542B\u7528\u4E8E\u521D\u59CB\u5316\u548C\u542F\u52A8TouchGFX\u7684\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u76EE\u6807`), `\u6587\u4EF6\u5939\uFF0C\u5305\u542B\u751F\u6210\u7684\u53EA\u8BFB\u4EE3\u7801(\u5728\u5185\u90E8\u751F\u6210) \u548C\u53EF\u66F4\u6539\u7684\u7528\u6237\u7C7B(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGPIO.cpp`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXHAL.cpp`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.part`), `\u6587\u4EF6\uFF0C\u4F7F\u7528TouchGFX Designer\u6765\u6253\u5F00\uFF0C\u4EE5\u4FBF\u521B\u5EFA\u5B8C\u6574\u7684TouchGFX\u9879\u76EE\uFF0C\u5176\u4E2D\u5305\u62ECTouchGFX\u5934\u6587\u4EF6\u548C\u5E93\u3002part\u6587\u4EF6\u5305\u542B\u8BBE\u8BA1\u4EBA\u5458\u5728\u751F\u6210TouchGFX\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u65F6\u4F7F\u7528\u7684\u76F8\u5173\u7A0B\u5E8F\u4FE1\u606F\uFF0C\u5982\u50CF\u7D20\u683C\u5F0F\u548C\u5C4F\u5E55\u5C3A\u5BF8\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-project"
  }), `TouchGFX Designer\u9879\u76EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following json structure is an example of the contents of the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.part`), ` file mentioned in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#generated-code-architecture"
  }), `Generated Code Architecture`), ` section for a project based on STM32U599. The post-generate command in the example below will update the project selected by the user in STM32CubeMX Project Manager tab (e.g. EWARM) with required libraries for TouchGFX and optional components as well as new files created by TouchGFX designer (e.g. new screens and assets).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `{
  "Application": {
    "Name": "STM32U599J-DK",
    "TouchGfxPath": "../Middlewares/ST/touchgfx",
    "AvailableColorDepths": [ 24 ],
    "AvailableLCDs":
    {
      "24": "LCDGPU2D"
    },
    "AvailableResolutions": [
      {
        "Width": 480,
        "Height": 480
      }
    ],
    "PostGenerateTargetCommand": "touchgfx update_project",
    "Family": "STM32U5",
    "SubFamily": "STM32U599/5A9",
    "Platform": "m33",
    "ProjectFile": "../STM32U599J-DK.ioc",
    "OptionalComponentsRoot": "../Middlewares/ST/touchgfx_components",
    "OptionalComponents": [
      "GPU2D"
    ]
  },
  "Version": "4.19.0"
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528TouchGFX Designer\u6253\u5F00`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `.part`), `\u6587\u4EF6\u65F6\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u9009\u62E9\u52A0\u8F7D\u73B0\u5B58UI\u6216\u4ECE\u7A7A\u767D\u6A21\u677F\u5F00\u59CB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u9009\u62E9UI"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0BTouchGFX Designer\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u751F\u6210\u4EE3\u7801`), `\u540E\uFF0CTouchGFX\u6587\u4EF6\u5939\u7684\u7ED3\u6784\u5982\u4E0B\u6240\u793A\u3002 \u4E0B\u56FE\u663E\u793A\u4E86TouchGFX\u6587\u4EF6\u5939\u7ED3\u6784\u7684\u5177\u4F53\u793A\u4F8B\uFF0C\u5E76\u7740\u91CD\u663E\u793A\u4E86\u751F\u6210\u540E\u7684\u65B0\u6587\u4EF6\u53CA\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u751F\u6210\u4EE3\u7801"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u6587\u4EF6\u5939\u7ED3\u6784"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5C06\u4ECE.ioc STM32CubeMX\u6587\u4EF6\uFF08\u9002\u7528\u4E8ESTM32CubeIDE\u3001EWARM\u3001MDK-ARM\uFF09\u4E2D\u68C0\u6D4B\u6240\u9009\u7684IDE\uFF0C\u5E76\u4F7F\u7528\u65B0\u751F\u6210\u7684\u6587\u4EF6\uFF08\u5982\u7528\u4E8E\u5C4F\u5E55\u5B9A\u4E49\u3001\u56FE\u50CF\u548C\u5B57\u4F53\u7684\u6587\u4EF6\uFF09\u6765\u66F4\u65B0\u5DE5\u7A0B\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u65F6\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5207\u6362\u4F7F\u7528STM32CubeMX\u3001TouchGFX Designer\u548C\u5DE5\u5177\u94FE/IDE\uFF0C\u5176\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u53EF\u4EE5\u66F4\u65B0IDE\u9879\u76EE\u4E2D\u7684\u9A71\u52A8\u7A0B\u5E8F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0EUI\u76F8\u5173\u7684\u914D\u7F6E\u4FEE\u6539\u4F1A\u7531STM32CubeMX\u66F4\u65B0\u5230TouchGFX`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\xA0.part`), `\u6587\u4EF6\uFF0CTouchGFX designer\u53EF\u4EE5\u7ACB\u5373\u83B7\u53D6\u8FD9\u4E9B\u66F4\u6539`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u57FA\u4E8ETouchGFX\u5728\u7279\u5B9A\u5E73\u53F0\u6240\u9700\u7684TouchGFX Generator\u914D\u7F6E\u6765\u751F\u6210HAL\u4EE3\u7801\uFF08TouchGFX/target/generated/\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u4F7F\u7528\u751F\u6210\u7684\u4EE3\u7801\u6765\u66F4\u65B0\u9879\u76EE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5BF9\u4E8E\u53CC\u6838\u9879\u76EE\uFF0C\u4E3A\u7279\u5B9A\u4E0A\u4E0B\u6587\u542F\u7528TouchGFX\uFF0C\u5219TouchGFX\u9879\u76EE\u901A\u5E38\u4F1A\u4F4D\u4E8E\u8BE5\u4E0A\u4E0B\u6587\u7684\u4E13\u7528\u6587\u4EF6\u5939\u4E2D\uFF0C\u4F8B\u5982:\u201CCM4 / TouchGFX\u201D\u6216\u201CCM7 / TouchGFX\u201D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-generated-behavior"
  }), `\u4FEE\u6539\u751F\u6210\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7531\u4E8EHAL\u7684\u7C7B\u5C42\u6B21\u7ED3\u6784\uFF0C\u7528\u6237\u53EF\u4EE5\u91CD\u5199STM32CubeMX\u751F\u6210\u7684HAL\u914D\u7F6E\u6216\u64CD\u4F5C\u3002 \u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u4FEE\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u521D\u59CB\u5316`), `\u51FD\u6570\uFF0C\u4EE5\u989D\u5916\u914D\u7F6ETouchGFX\uFF0C\u6216\u4FEE\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL`), `\u4E2D\u73B0\u6709\u7684\u914D\u7F6E\u96C6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    // Calling parent implementation of initialize().
    //
    // \u82E5\u8981\u8986\u5199\u751F\u6210\u7684\u5B9E\u73B0\uFF0C\u8BF7\u5FFD\u7565\u5BF9\u7236\u51FD\u6570\u7684\u8C03\u7528
    // \u5E76\u5728\u6B64\u5904\u5B9E\u73B0\u6240\u9700\u7684\u529F\u80FD\u3002
    // \u8BF7\u6CE8\u610F\uFF1A\u5FC5\u987B\u8C03\u7528HAL::initialize()\u4EE5\u521D\u59CB\u5316\u6846\u67B6\u3002

    TouchGFXGeneratedHAL::initialize();

    //\u8986\u76D6\u914D\u7F6E
    hal.lockDMAToFrontPorch(true);
    hal.setFingerSize(4);
    hal....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "upgrading-projects"
  }), `\u5347\u7EA7\u9879\u76EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u53C2\u6570\u5B58\u50A8\u5728.ioc\u6587\u4EF6\u4E2D\uFF08STM32CubeMX\u9879\u76EE\uFF09\u3002 \u5F53\u53D1\u5E03\u65B0\u7248TouchGFX Generator\u65F6\uFF0C\u65E7\u7248\u7684\u53C2\u6570\u53EF\u80FD\u4E0E\u65B0\u7248\u7684\u53C2\u6570\u4E0D\u517C\u5BB9\uFF0C\u5E76\u53EF\u80FD\u9700\u8981\u79FB\u690D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8ESTM32CubeMX\u4E0D\u652F\u6301X-CUBE\u7248\u672C\u4E4B\u95F4\u7684\u5347\u7EA7\uFF0C\u56E0\u6B64\uFF0CTouchGFX Designer\u5C06\u4F1A\u81EA\u52A8\u6267\u884C\u5347\u7EA7\uFF0C\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.touchgfx`), `\u6587\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PostGenerateTargetCommand`), `\u90E8\u5206\u4E2D\u7684\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u6309\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u751F\u6210\u4EE3\u7801`), `\u65F6\u6765\u5B8C\u6210\u5347\u7EA7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, ".touchgfx"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u547D\u4EE4\u5C06\u8BFB\u53D6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), `\u6587\u4EF6\u5E76\u66F4\u65B0\u53C2\u6570\uFF0C\u4EE5\u9002\u5E94X-CUBE-TOUCHGFX\u7684\u5F53\u524D\u7248\u672C\u3002 \u4EE5\u4E0B\u662F\u901A\u8FC7X-CUBE-TOUCHGFX 4.13.0\u521B\u5EFA\u7684.ioc\u6587\u4EF6\u4E0A\u624B\u52A8\u8FD0\u884C\u811A\u672C\uFF08X-CUBE-TOUCHGFX 4.14.0\uFF09\u7684\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "\u4F7F\u7528STM32F746 DISCO\u5E94\u7528\u6A21\u677F\u4ECE4.13.0\u5347\u7EA7\u52304.14.0\u7684\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc
  TouchGFX Generator 4.13.0 found
  Creating backup of ../STM32F746G_DISCO.ioc as
../backup_STM32F746G_DISCO.ioc
  Performing upgrade 4.13.0 -> 4.14.0 ... OK
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528STM32CubeMX\u6253\u5F00\u66F4\u65B0\u8FC7\u7684\u9879\u76EE\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u63D0\u793A\u7528\u6237\u5B89\u88C5\u7531.ioc\u6587\u4EF6\u63CF\u8FF0\u7684X-CUBE-TOUCHGFX\u7248\u672C\uFF08\u5982\u679C\u5C1A\u672A\u5B89\u88C5\uFF09\u3002 \u70B9\u51FB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7ACB\u5373\u4E0B\u8F7D`), `\u540E\u5C06\u4E0B\u8F7D\u5E76\u5B89\u88C5X-Cube-TouchGFX-4.14.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u7F3A\u5931\u7684\u5176\u4ED6\u8F6F\u4EF6\u7EC4\u4EF6\uFF1ATouchGFX Generator 4.14.0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5347\u7EA7\u671F\u95F4\u5C06\u4FDD\u7559TouchGFX Generator\u4E2D\u7684\u6240\u6709\u914D\u7F6E\uFF0C.ioc\u6587\u4EF6\u7684\u5907\u4EFD\u6587\u4EF6\u5C06\u88AB\u653E\u5728\u539F\u59CB\u6587\u4EF6\u65C1\uFF0C\u5E76\u5E26\u6709\u524D\u7F00`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `backup_`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8981\u4F7F\u7528TouchGFX Generator\u63D0\u4F9B\u7684\u65B0\u529F\u80FD\uFF0C\u5FC5\u987B\u5728STM32CubeMX\u4E2D\u6267\u884C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u751F\u6210\u4EE3\u7801"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u5982\u679C\u901A\u8FC7STM32CubeMX\u4E3A\u73B0\u6709\u7684TouchGFX\u9879\u76EE\u5347\u7EA7X-CUBE-TOUCHGFX\uFF0C\u5E76\u4E14\u5347\u7EA7\u8FC7\u7A0B\u5E76\u975E\u901A\u8FC7TouchGFX Designer\u6765\u8FD0\u884C\uFF0C\u5219TouchGFX Generator\u53C2\u6570\u5C06\u88AB\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C\uFF0C\u4EE5\u9002\u7528\u4E8E\u4E0D\u540C\u7248\u672C\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);