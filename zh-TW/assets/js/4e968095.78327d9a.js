"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6952],{

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

/***/ 4661:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93054);
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
  id: "hardware-selection-mcu",
  title: "MCU"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-mcu",
  "id": "development/hardware-selection/hardware-components/hardware-selection-mcu",
  "title": "MCU",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-mcu",
    "title": "MCU"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Hardware Components",
    "permalink": "/4.20/zh-TW/docs/category/hardware-components"
  },
  "next": {
    "title": "\u986F\u793A\u5668",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  }
};
const assets = {};




const toc = [{
  value: "\u983B\u7387",
  id: "frequency",
  level: 2
}, {
  value: "\u5716\u5F62\u5B50\u7CFB\u7D71\u983B\u7387",
  id: "graphic-subsystem-frequency",
  level: 3
}, {
  value: "\u7BC4\u4F8B",
  id: "example",
  level: 3
}, {
  value: "\u5D4C\u5165\u5F0F\u786C\u9AD4\u52A0\u901F\u529F\u80FD",
  id: "embedded-hardware-acceleration-features",
  level: 2
}, {
  value: "Chrom-ART",
  id: "chrom-art",
  level: 3
}, {
  value: "JPEG\u786C\u9AD4\u8F49\u78BC\u5668",
  id: "jpeg-hardware-codec",
  level: 3
}, {
  value: "Chrom-GRC",
  id: "chrom-grc",
  level: 3
}, {
  value: "\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4",
  id: "internal-flash",
  level: 2
}, {
  value: "\u5167\u90E8RAM",
  id: "internal-ram",
  level: 2
}, {
  value: "LCD\u63A7\u5236\u5668",
  id: "lcd-controller",
  level: 2
}, {
  value: "\u5C01\u88DD\u548CI/O",
  id: "packages--io",
  level: 2
}, {
  value: "\u8A18\u61B6\u9AD4\u4ECB\u9762",
  id: "memory-interfacing",
  level: 2
}, {
  value: "\u53EF\u8B8A\u5B58\u5132\u63A7\u5236\u5668 &amp; \u53EF\u8B8A\u975C\u614B\u5B58\u5132\u63A7\u5236\u5668\uFF08FMC/FSMC\uFF09",
  id: "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",
  level: 3
}, {
  value: "\u4E32\u5217\u8A18\u61B6\u9AD4\u4ECB\u9762",
  id: "serial-memory-interface",
  level: 3
}, {
  value: "STM32\u8D85\u503C\u7CFB\u5217\u7522\u54C1",
  id: "stm32-value-line-products",
  level: 3
}, {
  value: "Cortex\xAE-M Cores",
  id: "cortex-m-cores",
  level: 2
}, {
  value: "Cortex\xAE-M0+",
  id: "cortex-m0",
  level: 3
}, {
  value: "Cortex\xAE-M4",
  id: "cortex-m4",
  level: 3
}, {
  value: "Cortex\xAE-M7",
  id: "cortex-m7",
  level: 3
}, {
  value: "\u7279\u6027\u6982\u8FF0",
  id: "feature-overview",
  level: 3
}, {
  value: "\u4E00\u7D1A\u7DE9\u5B58\uFF1A",
  id: "level-1-cache",
  level: 3
}, {
  value: "\u96D9\u6838",
  id: "dual-core",
  level: 3
}, {
  value: "\u532F\u6D41\u6392\u67B6\u69CB",
  id: "bus-architecture",
  level: 2
}, {
  value: "\u50F9\u683C",
  id: "price",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FAE\u63A7\u5236\u5668\u55AE\u5143\uFF08MCU\uFF09\u662F\u6240\u6709\u5D4C\u5165\u5F0F\u89E3\u6C7A\u65B9\u6848\u7684\u6838\u5FC3\u6240\u5728\uFF0C\u5728\u6210\u672C\u548C\u7279\u6027\u65B9\u9762\u6709\u8A31\u591A\u4E0D\u540C\u7684\u9078\u64C7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9078\u64C7\u5716\u5F62\u7528MCU\u6642\uFF0C\u61C9\u8003\u616E\u652F\u63F4\u7684\u986F\u793A\u5668\u4ECB\u9762\u3001MCU\u5C01\u88DD\u3001\u5C3A\u5BF8\u548C\u53EF\u7372\u5F97\u7684\u5716\u5F62\u6027\u80FD\uFF0C\u6700\u5F8C\u4E00\u9EDE\u53D6\u6C7A\u65BC\u5169\u500B\u4E3B\u8981\u56E0\u7D20\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5716\u50CF\u5408\u6210`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MCU\u4E2D\u96C6\u6210\u7684\u5716\u5F62\u52A0\u901F\u5668\u7684\u53EF\u7528\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7CFB\u7D71\u4E2D\u7DE9\u5B58\u8A18\u61B6\u9AD4\u7684\u53EF\u7528\u6027\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8A18\u61B6\u9AD4\u5B58\u53D6\u548C\u983B\u5BEC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6642\u8108\u983B\u7387\u548C\u5B50\u7CFB\u7D71\u532F\u6D41\u6392\u983B\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0D\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u548CRAM\u8A18\u61B6\u9AD4\u7684\u5B58\u53D6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u5716\u5F62\u5916\uFF0C\u9084\u5FC5\u9808\u8003\u616E\u61C9\u7528\u4E0A\u7684\u5176\u4ED6\u65B9\u9762\uFF08\u99AC\u9054\u63A7\u5236\u548C\u7121\u7DDA\u6280\u8853\u7B49\uFF09\u3002 \u9019\u4E9B\u56E0\u7D20\u90FD\u53EF\u80FD\u5F71\u97FFMCU\u7684\u9078\u64C7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u9801\u5C07\u9010\u4E00\u4ECB\u7D39\u4E0D\u540CMCU\u9078\u9805\uFF0C\u4EE5\u53CA\u6C7A\u5B9A\u70BAGUI\u61C9\u7528\u9078\u64C7\u54EA\u7A2ESTM32 MCU\u6642\u61C9\u8003\u616E\u7684\u53C3\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "STM32 MCU"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u95DC\u65BC\u6240\u6709\u7522\u54C1\u7CFB\u5217\u3001\u5916\u8A2D\u548C\u50F9\u683C\u7B49\u8CC7\u8A0A\u7684\u66F4\u5B8C\u6574\u8CC7\u8A0A\uFF0C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/st-mcu-finder.html",
    mdxType: "Link"
  }, "\u53EF\u901A\u904EST MCU Finder\u7372\u53D6"), "\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frequency"
  }), `\u983B\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6838\u5FC3\u983B\u7387\u6703\u5287\u70C8\u5F71\u97FF\u5716\u5F62\u61C9\u7528\u5728\u87A2\u5E55\u5237\u65B0\u4EE5\u53CA\u87A2\u5E55\u548C\u52D5\u756B\u7684\u6D41\u66A2\u6027\u65B9\u9762\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B83\u6703\u5F71\u97FF\u5F9E\u5167\u90E8\u6216\u5916\u90E8\u8A18\u61B6\u9AD4\u50B3\u8F38\u5230\u986F\u793A\u5668\u5F71\u50CF\u7DE9\u885D\u7684\u5927\u91CF\u8CC7\u6599\uFF0C\u9084\u53EF\u80FD\u5F71\u97FF\u8A08\u7B97\u548C\u52D5\u756B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u983B\u7387\u8D8A\u9AD8\uFF0C\u5728\u7279\u5B9A\u6642\u9593\u7BC4\u570D\u5167\u80FD\u5920\u50B3\u8F38\u7684\u8CC7\u6599\u5C31\u8D8A\u591A\uFF0C\u5C31\u80FD\u5BE6\u73FE\u66F4\u8907\u96DC\u7684\u52D5\u756B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u7522\u54C1\u7684\u6838\u5FC3\u983B\u7387\u6700\u9AD8\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u983B\u7387\u8D8A\u9AD8\uFF0C\u529F\u8017\u8D8A\u5927\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphic-subsystem-frequency"
  }), `\u5716\u5F62\u5B50\u7CFB\u7D71\u983B\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u9808\u5C07\u6838\u5FC3CPU\u983B\u7387\u8207\u5716\u5F62\u5B50\u7CFB\u7D71\u983B\u7387\u5340\u5225\u958B\u4F86\u3002 \u5716\u5F62\u5B50\u7CFB\u7D71\u983B\u7387\u5305\u62EC\u5167\u90E8\u532F\u6D41\u6392\u983B\u7387\u548C\u5716\u5F62\u52A0\u901F\u5668\u983B\u7387\uFF0C\u4EE5\u53CA\u5167\u90E8\u548C\u5916\u90E8\u8A18\u61B6\u9AD4\u7684\u5B58\u53D6\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5B50\u7CFB\u7D71\u983B\u7387\u9084\u6703\u5287\u70C8\u5730\u5F71\u97FF\u6574\u9AD4\u5716\u5F62\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "example"
  }), `\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u5F9ESTM32H7\u4E0A\u7684\u5167\u90E8RAM\u904B\u884C\u6642\uFF0C\u5F9E\u7406\u8AD6\u4E0A\u8A55\u4F30\u6838\u5FC3\u548C\u5B50\u7CFB\u7D71\u6027\u80FD\u7684\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CPU\u6838\u5FC3\u7684\u904B\u884C\u983B\u7387\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `480MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `64\u4F4D\u5143AXI\u532F\u6D41\u6392\u983B\u7387\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `240MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD-TFT\u986F\u793A\u5668\u63A7\u5236\u5668\uFF08LTDC\uFF09\u4F7F\u752864\u4F4D\u5143AXI\u532F\u6D41\u6392\uFF0C\u572810\u500B\u9031\u671F\u5167\u57F7\u884C8\u6B21\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5167\u90E8RAM\u4E0D\u6703\u5C0E\u81F4\u660E\u986F\u5EF6\u9072\uFF0C\u53730\u7B49\u5019\u72C0\u614B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0CLTDC\u7576\u5916\u8A2D\u8A2A\u554F\u6642\u5167\u90E8RAM\u7684\u983B\u5BEC\u70BA\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u983B\u5BEC= 240 MHz x 8/10 x 8 \u4F4D\u5143\u7D44 = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1.536MB/s`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E86\u9019\u6A23\u7684\u983B\u5BEC\uFF0C\u7576\u89E3\u6790\u5EA6\u70BA800x480\u4E14\u8272\u6DF1\u70BA32bpp\u6642\uFF0C\u5167\u90E8RAM\u53EF\u78BA\u4FDD1000\u5E40/\u79D2\uFF08fps\uFF09\u7684\u5237\u65B0\u7387\u3002 \u901A\u5E38\u6703\u5C07\u5C0D\u986F\u793A\u5668\u7684\u50B3\u8F38\u9650\u5236\u5728\u6BCF\u79D260\u5E40\uFF08\u901A\u904E\u8ABF\u6574\u50CF\u7D20\u6642\u8108\u3001\u6CBF\u7B49\uFF09\uFF0C\u4EE5\u514DLTDC\u548C\u5167\u90E8RAM\u7684\u983B\u5BEC\u6210\u70BA\u74F6\u9838\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "embedded-hardware-acceleration-features"
  }), `\u5D4C\u5165\u5F0F\u786C\u9AD4\u52A0\u901F\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u7684STM32 MCU\u5177\u6709\u4E0D\u540C\u7684\u5167\u7F6E\u786C\u9AD4\u52A0\u901F\u529F\u80FD\uFF0C\u6709\u52A9\u65BC\u7372\u5F97\u9AD8\u6027\u80FD\u7684\u5716\u5F62\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-art"
  }), `Chrom-ART`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u662F\u4E00\u7A2E\u5148\u9032\u7684DMA\uFF0C\u53EF\u4EE5\u70BA\u57F7\u884C\u5716\u5F62\u64CD\u4F5C\u63D0\u4F9B\u8F14\u52A9\u3002 \u5B83\u4E5F\u88AB\u7A31\u70BADMA2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A31\u591ASTM32\u5E73\u81FA\u4E2D\u96C6\u6210\u4E86Chrom-ART\u52A0\u901F\u5668\uFF0C\u5B83\u80FD\u5920\u63A7\u5236\u548C\u50B3\u8F38\u5716\u50CF\uFF0C\u800C\u4E0D\u6703\u589E\u52A0CPU\u8CA0\u8F09\u3002 \u5B83\u80FD\u5920\u52A0\u5FEB\u5927\u591A\u6578\u5716\u5F62\u64CD\u4F5C\u7684\u901F\u5EA6\uFF0C\u5982\u984F\u8272\u586B\u5145\u3001\u5716\u50CF\u8907\u88FD\u3001\u6DF7\u5408\u548C\u50CF\u7D20\u683C\u5F0F\u8F49\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u52A0\u901F\u5668\u80FD\u5920\u5728\u4E00\u9805\u64CD\u4F5C\u4E2D\u57F7\u884C\u5169\u500B\u5716\u5C64\u7684\u6DF7\u5408\uFF0C\u4E26\u5C07\u521D\u59CB\u50CF\u7D20\u683C\u5F0F\u8F49\u63DB\u70BA\u9700\u8981\u7684\u8F38\u51FA\u50CF\u7D20\u683C\u5F0F\uFF0C\u4E26\u5C07\u7D50\u679C\u50B3\u8F38\u5230\u8A18\u61B6\u9AD4\u76EE\u6A19\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u52A0\u901F\u5668\u9084\u652F\u63F4\u6709\u984F\u8272\u67E5\u95B1\u8CC7\u6599\u8868\uFF08CLUT\uFF09\u7684\u984F\u8272\u6A21\u5F0F\u3002 \u9019\u6709\u52A9\u65BC\u7BC0\u7701\u5B58\u5132\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u5728 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F496-EVAL`), ` \u677F\u4E0A\u904B\u884C\u7684\u61C9\u7528\u70BA\u4F8B\uFF0C\u7576\u555F\u7528Chrom-ART\u6642\uFF0CCPU\u8CA0\u8F09\u5F9E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `82%`), `\u964D\u81F3 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4%`), ` \uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/birdeatcoin.gif",
    mdxType: "Figure"
  }, "Bird-Eat-Coin Chrom-ART\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0CSTM32H7\u7522\u54C1\u70BAChrom-ART\u5916\u8A2D\u589E\u52A0\u4E86\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `YCbCr`), ` \u6A21\u5F0F\u8F49\u63DB\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `RGB`), `\u6A21\u5F0F\u7684\u80FD\u529B\u3002 \u6B64\u7279\u6027\u7D50\u5408JPEG\u786C\u9AD4\u8F49\u78BC\u5668\uFF0C\u53EF\u6E1B\u8F15JPEG\u5716\u50CF\u7DE8\u78BC\u548C\u89E3\u78BC\u6642\u7684CPU\u8CA0\u8F09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/chrom-art-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "YCbCr\u8F49RGB\u786C\u9AD4\u6027\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u6709\u4E0A\u8FF0\u7279\u6027\u7684Chrom-ART\u52A0\u901F\u5668\u70BA\u5716\u5F62\u61C9\u7528\u63D0\u4F9B\u4E86\u5DE8\u5927\u512A\u52E2\u3002 TouchGFX\uFF08\u82E5\u9078\u64C7\u7684MCU\u4E2D\u6709\u63D0\u4F9B\uFF09\u8655\u7406\u6240\u6709Chrom-ART\u7279\u6027\uFF0C\u4E26\u5C07\u6240\u6709\u53EF\u80FD\u7684\u7E6A\u5716\u64CD\u4F5C\u91CD\u5B9A\u5411\u81F3Chrom-ART\u5916\u8A2D\u800C\u975ECPU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u9AD8\u6027\u80FDSTM32\u7CFB\u5217\u63D0\u4F9B\u4E86Chrom-ART\u5916\u8A2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8ACB\u53C3\u8003AN4943\u61C9\u7528\u8AAA\u660E\u7372\u53D6\u66F4\u591A\u8CC7\u8A0A\uFF1A\uFF0C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",
    mdxType: "Link"
  }, "Chrom-ART\u786C\u9AD4\u52A0\u901F"), ".")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "jpeg-hardware-codec"
  }), `JPEG\u786C\u9AD4\u8F49\u78BC\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32H7`), ` \u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F7`), ` \u7CFB\u5217\u63D0\u4F9B\u786C\u9AD4JPEG\u8F49\u78BC\u5668\uFF0C\u7528\u65BC\u5716\u50CF\u548C\u5F71\u7247\u7684\u7DE8\u78BC\u548C\u89E3\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CUI\u61C9\u7528\u9700\u8981\u64AD\u653E\u5F71\u7247\u6A94\u6216\u986F\u793AJPEG\u5716\u50CF\uFF0C\u5247\u6B64\u7279\u6027\u5341\u5206\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u5716\u50CF\u4F54\u7528\u7684\u5B58\u5132\u7A7A\u9593\u901A\u5E38\u8F03\u5C0F\u3002 JPEG\u786C\u9AD4\u8F49\u78BC\u5668\u78BA\u4FDD\u5728\u57F7\u884C\u6642\u9593\u89E3\u78BC\u5716\u50CF\uFF0C\u800C\u4E0D\u6703\u767C\u751FCPU\u8D85\u8F09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9BTouchGFX\u6F14\u793A\u5229\u7528JPEG\u786C\u9AD4\u8F49\u78BC\u5668\uFF0C\u6E1B\u8F15\u64AD\u653EMJPEG\u5F71\u7247\u6642\u7684CPU\u8CA0\u8F09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "\u786C\u9AD4JPEG\u8F49\u78BC\u5668\u6027\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8ACB\u53C3\u8003AN4996\u61C9\u7528\u8AAA\u660E\u7372\u53D6\u66F4\u591A\u8CC7\u8A0A\uFF1A ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",
    mdxType: "Link"
  }, "\u786C\u9AD4JPEG\u8F49\u78BC\u5668"), "\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-grc"
  }), `Chrom-GRC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E00\u4E9BSTM32\u5FAE\u63A7\u5236\u5668\u4E2D\uFF0C\u5916\u8A2DSTM32 Chrom-GRC\u2122\uFF08GFXMMU\uFF09\u65E8\u5728\u70BA\u5411\u975E\u77E9\u5F62\u986F\u793A\u5668\u767C\u5C55\u7684\u65B0\u8DA8\u52E2\u63D0\u4F9B\u9AD8\u6548\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5B9A\u5740\u975E\u77E9\u5F62\u986F\u793A\u5668\u6642\uFF0CChrom-GRC\u2122\u5916\u8A2D\u53EF\u6E1B\u5C11\u5B58\u5132\u5F71\u50CF\u7DE9\u885D\u6240\u9700\u7684RAM\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u5713\u5F62\u986F\u793A\u5668\uFF0C\u5916\u8A2D\u53EF\u5C07\u5B58\u5132\u7A7A\u9593\u8981\u6C42\u964D\u4F4E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `20%`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u63A7\u5236\u975E\u65B9\u5F62\u87A2\u5E55\u6642\uFF0C\u5EFA\u8B70\u4F46\u4E0D\u5F37\u5236\u4F7F\u7528Chrom-GRC\u2122\u5916\u8A2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u901A\u904EChrom-GRC\u5916\u8A2D\u512A\u5316\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8ACB\u53C3\u8003AN5051\u61C9\u7528\u8AAA\u660E\u7372\u53D6\u66F4\u591A\u8CC7\u8A0A\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",
    mdxType: "Link"
  }, "\u5716\u5F62\u8A18\u61B6\u9AD4\u512A\u5316"), "\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-flash"
  }), `\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u9EDE\u9663\u5716\u8CC7\u6E90\u7684\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u61C9\u7528\u9700\u8981\u4F7F\u7528\u975E\u63EE\u767C\u6027\u8A18\u61B6\u9AD4\u4F86\u5B58\u5132\u8CC7\u6599\u3002 \u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u5F9E\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u57F7\u884C\u548C\u8A2A\u554F\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u6703\u6BD4\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u5FEB\u6700\u591A\u5169\u500D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u5927\u5C0F\u6709\u9650\uFF0C\u5F88\u591A\u6642\u5019\u6703\u7528\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4F86\u5B58\u5132TouchGFX\u6846\u67B6\u3001\u87A2\u5E55\u5B9A\u7FA9\u548CUI\u908F\u8F2F\uFF0C\u800C\u9EDE\u9663\u5716\u8CC7\u6599\u5247\u5B58\u5132\u5728\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u5716\u5F62\u61C9\u7528\u4F7F\u7528\u7684STM32\u7522\u54C1\u7D44\u5408\u7684\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u5927\u5C0F\u4ECB\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E7EKB`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E7EMB`), `\u4E4B\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u9EDE\u9663\u5716\u8CC7\u6599\u91CF\u8207\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E0D\u5339\u914D\u6642\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u5916\u90E8\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u53C3\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u8A18\u61B6\u9AD4"), " \u77AD\u89E3\u66F4\u591A\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5FEB\u9583\u8A18\u61B6\u9AD4\u8981\u6C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6846\u67B6\uFF1A                      `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `60 KB`), ` \u81F3 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100 KB`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u87A2\u5E55\u5B9A\u7FA9\u548CGUI\u908F\u8F2F\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1`), `\u81F3 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100KB`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u4E9B\u6578\u4F4D\u53D6\u6C7A\u65BC\u4F7F\u7528\u7684\u6846\u67B6\u7279\u6027\uFF0C\u4EE5\u53CA\u61C9\u7528\u7684\u5927\u5C0F\u548C\u8907\u96DC\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5167\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5167\u90E8RAM\u53EF\u7528\u65BC\u5B58\u5132\u5F71\u50CF\u7DE9\u885D\u7684\u524D\u63D0\u662F\u5132\u5F71\u7DE9\u885D\u7684\u5927\u5C0F\u80FD\u5920\u653E\u5165\u53EF\u7528\u8A18\u61B6\u9AD4\u3002 \u6216\u8005\uFF0C\u4E5F\u53EF\u4EE5\u70BA\u8A2D\u7F6E\u589E\u52A0\u5916\u90E8\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u5BEC\u5EA6\u3001\u9AD8\u5EA6\u548C\u8272\u6DF1\u8A08\u7B97\u5F71\u50CF\u7DE9\u885D\u7684\u5927\u5C0F\u3002 \u4F8B\u5982\uFF0C\u5C0D\u65BC\u5177\u6709HVGA\u89E3\u6790\u5EA6\uFF08480x320\uFF09\u548C16\u4F4D\u8272\u7684\u986F\u793A\u5668\uFF0C\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u6240\u9700\u7684\u5B58\u5132\u7A7A\u9593\u70BA\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u500B\u5F71\u50CF\u7DE9\u885D\u7684\u5927\u5C0F= `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480 x 320 x 2`), ` =  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `307.200 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u5716\u5F62\u61C9\u7528\u4F7F\u7528\u7684STM32\u7522\u54C1\u7684\u5167\u90E8RAM\u5927\u5C0F\u4ECB\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E7EKB`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E7EMB`), `\u4E4B\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u53C3\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u8A18\u61B6\u9AD4"), " \u4E00\u7BC0\uFF0C\u77AD\u89E3\u95DC\u65BC\u5916\u90E8\u8A18\u61B6\u9AD4\u4E2D\u5F71\u50CF\u7DE9\u885D\u7684\u66F4\u591A\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX RAM\u8981\u6C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6846\u67B6\uFF1A          `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `10 KB`), `\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `30 KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0F\u90E8\u4EF6\uFF1A            `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1 KB`), ` \u81F3 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `15 KB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u61C9\u7528\u7684\u5B58\u5132\u7A7A\u9593\u8981\u6C42\u53EF\u80FD\u4E0D\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "lcd-controller"
  }), `LCD\u63A7\u5236\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\u7684\u9078\u64C7\u9084\u53D6\u6C7A\u65BC\u8981\u4F7F\u7528\u7684\u986F\u793A\u5668\u4ECB\u9762\u548C\u89E3\u6790\u5EA6\u3002 \u4EE5800x480\u7684\u89E3\u6790\u5EA6\u70BA\u4F8B\uFF0C\u53EA\u80FD\u901A\u904E\u9AD8\u6548\u7684\u8CC7\u6599\u50B3\u8F38\u8DB3\u5920\u4ECB\u9762\u4F86\u5BE6\u73FE\u3002 RGB-TFT\u548CMPI-DSI\u4ECB\u9762\u901A\u5E38\u7528\u65BC\u66F4\u9AD8\u89E3\u6790\u5EA6\uFF0C\u539F\u56E0\u662F\u5728\u8A31\u591A\u60C5\u6CC1\u4E0B\uFF0C\u983B\u5BEC\u9AD8\u65BCSPI\u6216\u5E73\u884C8080/6800\u3002 \u4F4E\u89E3\u6790\u5EA6\u986F\u793A\u5668\u901A\u5E38\u5167\u7F6E\u63A7\u5236\u5668\u548CGRAM\uFF0C\u53EF\u901A\u904E\u7C21\u55AE\u7684SPI\u62168080/6800\u4ECB\u9762\u9032\u884C\u9023\u63A5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9AD8\u89E3\u6790\u5EA6\u986F\u793A\u5668\uFF08WQVGA\u53CA\u4EE5\u4E0A\uFF09\u901A\u5E38\u6C92\u6709\u5167\u7F6E\u63A7\u5236\u5668\u548CGRAM\uFF0C\u56E0\u6B64\u63A7\u5236\u5668\u9700\u4F4D\u65BC\u5FAE\u63A7\u5236\u5668\u5074\u3002 \u5167\u7F6ERGB-TFT\u548CMIPI DSI\u4ECB\u9762\u7684STM32 MCU\u4E0A\u6709\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/display-interfaces.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u5716\u4E2D\u986F\u793A\u4E86\u6709/\u6C92\u6709GRAM\u548C\u986F\u793A\u5668\u63A7\u5236\u5668\u7684\u4E0D\u540C\u986F\u793A\u5668\u4ECB\u9762\u76844\u500B\u7BC4\u4F8B\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u53C3\u8003 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-display",
    mdxType: "Link"
  }, "\u986F\u793A\u5668"), " \u4E00\u7BC0\u77AD\u89E3\u66F4\u591A\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "packages--io"
  }), `\u5C01\u88DD\u548CI/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u7684I/O\u6578\u91CF\u53D6\u6C7A\u65BC\u9078\u64C7\u7684\u986F\u793A\u5668\u548C\u5916\u90E8\u8A18\u61B6\u9AD4\u3002 \u904B\u884C\u5177\u6709\u5E73\u884CRAM\u548C\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u5E73\u884C\u986F\u793A\u5668\u53EF\u80FD\u9700\u8981\u5927\u91CFI/O\uFF0C\u5C0E\u81F4\u5C01\u88DD\u5C3A\u5BF8\u8B8A\u5927\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-interfacing"
  }), `\u8A18\u61B6\u9AD4\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5FAE\u63A7\u5236\u5668\u4E2D\u7684\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u548CRAM\u4E0D\u5920\u7528\u6642\uFF0C\u9078\u64C7\u5177\u6709\u6700\u5408\u9069\u5916\u90E8\u8A18\u61B6\u9AD4\u4ECB\u9762\u7684\u5408\u9069MCU\u5C31\u8B8A\u5F97\u5341\u5206\u91CD\u8981\u3002 STM32\u7522\u54C1\u63D0\u4F9B\u4E86\u4E0D\u540C\u7684\u8A18\u61B6\u9AD4\u63A7\u5236\u5668\u5916\u8A2D\uFF0C\u7528\u65BC\u9023\u63A5NOR\u3001NAND\u3001SRAM\u3001SDRAM\u3001LPSDR SDRAM\u548CPSRAM\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"
  }), `\u53EF\u8B8A\u5B58\u5132\u63A7\u5236\u5668 & \u53EF\u8B8A\u975C\u614B\u5B58\u5132\u63A7\u5236\u5668\uFF08FMC/FSMC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u652F\u63F4\u975C\u614BRAM\uFF0CFMC\u9084\u70BAFSMC\u589E\u52A0\u4E86\u52D5\u614BRAM\u652F\u63F4\uFF08SDRAM\uFF09\u3002 \u53EF\u8B8A\u5B58\u5132\u63A7\u5236\u5668\uFF08FMC\uFF09\u5177\u6709\u5F88\u9AD8\u7684\u5916\u90E8\u5B58\u53D6\u901F\u7387\u548C8\u300116\u7279\u5225\u662F32\u4F4D\u5143\u8CC7\u6599\u532F\u6D41\u6392\uFF0C\u53EF\u5BE6\u73FE\u8207\u5916\u90E8RAM\u4E4B\u9593\u7684\u66F4\u9AD8\u541E\u5410\u7387\uFF0C\u5F9E\u800C\u66F4\u597D\u5730\u652F\u6301\u66F4\u9AD8\u89E3\u6790\u5EA6\u3002 FMC\u7684\u6BCF\u500B\u5B58\u5132\u5340\u6709\u7368\u7ACB\u7684\u6676\u7247\u9078\u64C7\u3002 FMC\u53EF\u4EE5\u63A7\u5236\u7528\u65BC\u8CC7\u6599\u7684\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3001\u7528\u65BC\u5E40\u7DE9\u885D\u7684\u5916\u90E8RAM\u8A18\u61B6\u9AD4\u548C\u7528\u65BC\u5716\u5F62\u68E7\u7684\u5806\u64F4\u5C55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "serial-memory-interface"
  }), `\u4E32\u5217\u8A18\u61B6\u9AD4\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u9078\u64C7\u7684STM32\u7522\u54C1\uFF0C\u53EF\u80FD\u6709\u5167\u7F6E\u4E32\u5217\u8A18\u61B6\u9AD4\u4ECB\u9762\uFF0C\u9664\u4E86QSPI\u3001PSRAM\u3001OPI PSRAM\u548CHyper RAM\u8A18\u61B6\u9AD4\uFF0C\u9084\u53EF\u4EE5\u9023\u63A5\u55AE\u7DDA\u3001\u96D9\u7DDA\u3001\u56DB\u7DDA\u3001\u516B\u7DDA\u548ChyperBus\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002 \u4E32\u5217\u9AD8\u901F\u8A18\u61B6\u9AD4\u4ECB\u9762\u5728\u8655\u65BC\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\u6642\u53EF\u63A7\u5236\u6700\u5927 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `256 MB`), ` \u7684\u8A18\u61B6\u9AD4\uFF1B\u7576\u8655\u65BC\u76F4\u63A5\u6A21\u5F0F\u6642\u70BA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4 GB`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76F8\u6BD4\u65BC\u5E73\u884C\u4ECB\u9762\uFF0C\u4E32\u5217\u8A18\u61B6\u9AD4\u4ECB\u9762\u53EF\u5C07\u6210\u672C\u8F03\u4F4E\u7684\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u9023\u63A5\u5230\u5C0F\u578B\u5C01\u88DD\uFF0C\u540C\u6642\u6E1B\u5C11\u4F7F\u7528\u7684\u5F15\u8173\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u53C3\u8003AN4760\u61C9\u7528\u8AAA\u660E\u7372\u53D6\u66F4\u591A\u8CC7\u8A0A\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",
    mdxType: "Link"
  }, "STM32\u5FAE\u63A7\u5236\u5668\u4E0A\u7684\u56DB\u7DDASPI\u4ECB\u9762"), "."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32-value-line-products"
  }), `STM32\u8D85\u503C\u7CFB\u5217\u7522\u54C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u512A\u5316\u50F9\u683C\uFF0CSTM32H7\u548CSTM32F7\u5E73\u81FA\u63D0\u4F9B\u4E86\u5177\u6709\u6709\u9650\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u8D85\u503C\u7CFB\u5217\u7522\u54C1\u3002 \u4F7F\u7528\u9019\u4E9B\u7522\u54C1\u6642\uFF0C\u5716\u5F62\u8CC7\u6E90\u5C07\u4FDD\u5B58\u5728\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cortex-m-cores"
  }), `Cortex\xAE-M Cores`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\u63A1\u7528\u4E0D\u540C\u7684ARC Cortex\xAE-M\u67B6\u69CB\u3002 \u4E0B\u9762\u662FSTM32\u4E0A\u904B\u884C\u5716\u5F62\u6642\u6700\u5E38\u7528\u7684\u5167\u6838\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m0"
  }), `Cortex\xAE-M0+`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M0+`), `\u7684\u7279\u9EDE\u5728\u65BC\u5B83\u67B6\u69CB\u7C21\u55AE\u4E14\u50F9\u683C\u4F4E\u5EC9\u3002 \u5EFA\u8B70\u5C07\u5176\u61C9\u7528\u65BC\u4EE5\u8F03\u4F4E\u89E3\u6790\u5EA6\u904B\u884C\u7684\u8F03\u5C0F\u7684\u975C\u614B\u5716\u5F62\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m4"
  }), `Cortex\xAE-M4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8207`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M4`), `\u76F8\u6BD4\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `M0+`), `\u5305\u542B\u66F4\u591A\u529F\u80FD\uFF0C\u4E26\u52A0\u5FEB\u4E86\u8A08\u7B97\u901F\u5EA6\u3002 \u5B83\u5305\u542BDSP\u6307\u4EE4\u96C6\u548C\u55AE\u7CBE\u78BA\u5EA6FPU\u55AE\u5143\u3002 \u9019\u4E9B\u6307\u4EE4\u53EF\u6E1B\u8F15CPU\u8CA0\u8F09\u4E26\u63D0\u9AD8\u8A08\u7B97\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m7"
  }), `Cortex\xAE-M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M7`), `\u5305\u542B\u66F4\u8907\u96DC\u7684\u67B6\u69CB\uFF0C\u4E5F\u5305\u542BDSP\u6307\u4EE4\u96C6\uFF0C\u4E26\u5177\u6709\u66F4\u9AD8\u6548\u7684\u96D9\u7CBE\u5EA6FPU\u55AE\u5143\uFF0C\u4EE5\u53CA\u53EF\u5BB9\u7D0D\u6700\u591A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16KB`), `\u7684\u8CC7\u6599\u548C\u6307\u4EE4\u7684\u4E00\u7D1A\u7DE9\u885D\u8A18\u61B6\u9AD4\u3002 \u7DE9\u885D\u8A18\u61B6\u9AD4\u63D0\u4F9B\u4E86\u4F7F\u8CC7\u6599\u548C\u6307\u4EE4\u7DCA\u9130\u8A08\u7B97\u55AE\u5143\u4EE5\u4FBF\u512A\u5316\u63D0\u53D6\u6642\u9593\u7684\u53EF\u80FD\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "feature-overview"
  }), `\u7279\u6027\u6982\u8FF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7279\u5FB5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Cortex-M0+`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Cortex-M4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Cortex-M7`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMIPS/MHz\u7BC4\u570D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.95-1.36`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1.25-1.95`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.14-3.23`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core Mark\xAE/MHz`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.46`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5.01`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6578\u4F4D\u4FE1\u865F\u8655\u7406\uFF08DSP\uFF09\u64F4\u5C55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6D6E\u9EDE\u6578\u786C\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709\uFF08SP\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709\uFF08SP + DP\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u7F6E\u7DE9\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709\uFF08\u53EF\u90784-64KB\uFF09\uFF0CI-Cachen D-Cache`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u532F\u6D41\u6392\u5354\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite\uFF0CFast I/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite\uFF0C APB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AXI4\uFF0CAHB Lite\uFF0CAPB\uFF0CTCM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u96D9\u6838\u9396\u6B65\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "level-1-cache"
  }), `\u4E00\u7D1A\u7DE9\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\u548CSTM32F7\u7CFB\u5217\u5305\u542B\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16 KB`), `\u7684\u4E00\u7D1A\u7DE9\u5B58\uFF0C\u7528\u65BC\u6307\u4EE4\u548C\u8CC7\u6599\u7DE9\u5B58\u3002 \u4E00\u7D1A\u7DE9\u5B58\u5728CPU\u9644\u8FD1\u4FDD\u5B58\u4E86\u8CC7\u6599\u6216\u6307\u4EE4\u96C6\uFF0C\u56E0\u6B64CPU\u7121\u9700\u4E0D\u65B7\u5730\u63D0\u53D6\u91CD\u8907\u4F7F\u7528\u7684\u540C\u4E00\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u53C3\u8003AN4839\u61C9\u7528\u8AAA\u660E\u7372\u53D6\u66F4\u591A\u8CC7\u8A0A\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "\u4E00\u7D1A\u7DE9\u5B58"), "."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dual-core"
  }), `\u96D9\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\u7CFB\u5217\u5305\u542B\u96D9\u6838\u7CFB\u5217\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Arm\xAE Cortex\xAE-M7\u548CCortex\xAE-M4\u5167\u6838\u7684\u904B\u884C\u983B\u7387\u5206\u5225\u53EF\u9054\u5230480 MHz\u548C240 MHz\uFF0C\u53EF\u4EE5\u652F\u63F4\u66F4\u591A\u7684\u8655\u7406\u548C\u61C9\u7528\u7A0B\u5F0F\u5206\u5340\u3002 \u96D9\u6838STM32H7\u7522\u54C1\u7CFB\u5217\u53EF\u8207\u5D4C\u5165\u5F0FSMPS\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u63D0\u9AD8\u52D5\u614B\u96FB\u6E90\u6548\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u500BCortex\xAE-M4\u53EF\u4EE5\u6E1B\u8F15\u8A08\u7B97\u91CF\uFF0C\u4EE5\u4FBF\u958B\u653EM7\u5167\u6838\u7528\u65BC\u7E6A\u5716/\u5716\u5F62\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5C0D\u65BC\u96D9\u6838MCU\uFF0C\u5FC5\u9808\u91DD\u5C0D\u7279\u5B9A\u74B0\u5883\u555F\u7528TouchGFX Generator\u3002 Only a single concurrent context is supported. \u8ACB\u53C3\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator",
    mdxType: "Link"
  }, "TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357"), " \u7372\u53D6\u66F4\u591A\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "bus-architecture"
  }), `\u532F\u6D41\u6392\u67B6\u69CB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u591A\u6578STM32\u5FAE\u63A7\u5236\u5668\u63D0\u4F9B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `32\u4F4D\u5143\u591AAHB`), ` \u532F\u6D41\u6392\u77E9\u9663\uFF0C\u7528\u65BC\u4E92\u9023\u6240\u6709\u4E3B\u8A2D\u5099\uFF08CPU\u3001DMA\u7B49\uFF09\u548C\u5F9E\u8A2D\u5099\uFF08\u5FEB\u9583\u8A18\u61B6\u9AD4\u3001RAM\u3001FSMC\u3001AHB\u548CAPB\u5916\u8A2D\uFF09\u3002 \u9019\u6A23\u4E00\u4F86\uFF0C\u5373\u4F7F\u591A\u500B\u9AD8\u901F\u5916\u8A2D\u540C\u6642\u5DE5\u4F5C\uFF0C\u4E5F\u80FD\u78BA\u4FDD\u7121\u7E2B\u3001\u9AD8\u6548\u7684\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u591AAHB\u4E92\u9023\uFF0C\u4E00\u4E9BSTM32\uFF08Cortex\xAE-M7\uFF09\u7522\u54C1\u9084\u5167\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `64\u4F4D`), `AXI\uFF0C\u7528\u65BC\u64F4\u5C55\u983B\u5BEC\u3002 \u56E0\u6B64\uFF0C\u5728\u6027\u80FD\u548C\u529F\u8017\u4E4B\u9593\u5BE6\u73FE\u4E86\u6700\u4F73\u5E73\u8861\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "price"
  }), `\u50F9\u683C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u548C\u5167\u90E8RAM\u7684\u5927\u5C0F\u4EE5\u53CA\u5C01\u88DD\u4E2D\u7684\u53EF\u7528\u5F15\u8173\u6578\u90FD\u6703\u5F71\u97FFMCU\u7684\u50F9\u683C\u3002 \u4F7F\u7528\u8005\u53EF\u4EE5\u6839\u64DA\u4ECB\u9762\u3001\u89E3\u6790\u5EA6\u548C\u6027\u80FD\u7B49\u65B9\u9762\u7684\u8981\u6C42\uFF0C\u6700\u7D42\u627E\u5230\u5408\u9069\u7684MCU\u548C\u4F30\u50F9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8ACB\u53C3\u8003 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    mdxType: "Link"
  }, "STM32 32\u4F4DArm Cortex MCUs"), " \u77AD\u89E3\u53EF\u7528\u7684STM32\u5FAE\u63A7\u5236\u5668\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);