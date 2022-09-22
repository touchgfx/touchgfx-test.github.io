"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2574],{

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

/***/ 78472:
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
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",
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
    "permalink": "/4.20/zh-CN/docs/category/hardware-components"
  },
  "next": {
    "title": "\u663E\u793A\u5C4F",
    "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  }
};
const assets = {};




const toc = [{
  value: "\u9891\u7387",
  id: "frequency",
  level: 2
}, {
  value: "\u56FE\u5F62\u5B50\u7CFB\u7EDF\u9891\u7387",
  id: "graphic-subsystem-frequency",
  level: 3
}, {
  value: "\u793A\u4F8B",
  id: "example",
  level: 3
}, {
  value: "\u5D4C\u5165\u5F0F\u786C\u4EF6\u52A0\u901F\u529F\u80FD",
  id: "embedded-hardware-acceleration-features",
  level: 2
}, {
  value: "Chrom-ART",
  id: "chrom-art",
  level: 3
}, {
  value: "JPEG\u786C\u4EF6\u7F16\u89E3\u7801\u5668",
  id: "jpeg-hardware-codec",
  level: 3
}, {
  value: "Chrom-GRC",
  id: "chrom-grc",
  level: 3
}, {
  value: "\u5185\u90E8Flash",
  id: "internal-flash",
  level: 2
}, {
  value: "\u5185\u90E8RAM",
  id: "internal-ram",
  level: 2
}, {
  value: "LCD\u63A7\u5236\u5668",
  id: "lcd-controller",
  level: 2
}, {
  value: "\u5C01\u88C5&amp; I/O",
  id: "packages--io",
  level: 2
}, {
  value: "\u5B58\u50A8\u5668\u63A5\u53E3",
  id: "memory-interfacing",
  level: 2
}, {
  value: "\u53EF\u53D8\u5B58\u50A8\u63A7\u5236\u5668&amp; \u53EF\u53D8\u9759\u6001\u5B58\u50A8\u63A7\u5236\u5668\uFF08FMC/FSMC\uFF09",
  id: "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",
  level: 3
}, {
  value: "\u4E32\u884C\u5B58\u50A8\u5668\u63A5\u53E3",
  id: "serial-memory-interface",
  level: 3
}, {
  value: "STM32\u8D85\u503C\u7CFB\u5217\u4EA7\u54C1",
  id: "stm32-value-line-products",
  level: 3
}, {
  value: "Cortex\xAE-M Core",
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
  value: "\u4E00\u7EA7\u7F13\u5B58\uFF1A",
  id: "level-1-cache",
  level: 3
}, {
  value: "\u53CC\u6838",
  id: "dual-core",
  level: 3
}, {
  value: "\u603B\u7EBF\u67B6\u6784",
  id: "bus-architecture",
  level: 2
}, {
  value: "\u4EF7\u683C",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FAE\u63A7\u5236\u5668\u5355\u5143\uFF08MCU\uFF09\u662F\u6240\u6709\u5D4C\u5165\u5F0F\u89E3\u51B3\u65B9\u6848\u7684\u6838\u5FC3\u6240\u5728\uFF0C\u5728\u6210\u672C\u548C\u7279\u6027\u65B9\u9762\u6709\u8BB8\u591A\u4E0D\u540C\u7684\u9009\u62E9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9009\u62E9\u56FE\u5F62\u7528MCU\u65F6\uFF0C\u5E94\u8003\u8651\u652F\u6301\u7684\u663E\u793A\u5668\u63A5\u53E3\u3001MCU\u5C01\u88C5\u3001\u5C3A\u5BF8\u548C\u53EF\u83B7\u5F97\u7684\u56FE\u5F62\u6027\u80FD\uFF0C\u6700\u540E\u4E00\u70B9\u53D6\u51B3\u4E8E\u4E24\u4E2A\u4E3B\u8981\u56E0\u7D20\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u56FE\u50CF\u5408\u6210`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MCU\u4E2D\u96C6\u6210\u7684\u56FE\u5F62\u52A0\u901F\u5668\u7684\u53EF\u7528\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7CFB\u7EDF\u4E2D\u7F13\u5B58\u5B58\u50A8\u5668\u7684\u53EF\u7528\u6027\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5B58\u50A8\u5668\u5B58\u53D6\u548C\u5E26\u5BBD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65F6\u949F\u9891\u7387\u548C\u5B50\u7CFB\u7EDF\u603B\u7EBF\u9891\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BF9\u5185\u90E8Flash\u548CRAM\u5B58\u50A8\u5668\u7684\u5B58\u53D6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u56FE\u5F62\uFF0C\u8FD8\u5FC5\u987B\u8003\u8651\u5E94\u7528\u8FD0\u884C\u7684\u5176\u4ED6\u65B9\u9762\uFF08\u7535\u673A\u63A7\u5236\u548C\u65E0\u7EBF\u6280\u672F\u7B49\uFF09\u3002 \u8FD9\u4E9B\u56E0\u7D20\u90FD\u53EF\u80FD\u5F71\u54CDMCU\u7684\u9009\u62E9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u9875\u5C06\u9010\u4E00\u4ECB\u7ECD\u4E0D\u540CMCU\u9009\u9879\uFF0C\u4EE5\u53CA\u5728\u51B3\u5B9A\u5E94\u4E3AGUI\u9A71\u52A8\u7684\u5E94\u7528\u9009\u62E9\u54EA\u79CDSTM32 MCU\u65F6\u5E94\u8003\u8651\u7684\u53C2\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "STM32 MCU"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5173\u4E8E\u6240\u6709\u4EA7\u54C1\u7CFB\u5217\u3001\u5916\u8BBE\u548C\u4EF7\u683C\u7B49\u4FE1\u606F\u7684\u66F4\u5B8C\u6574\u6982\u8FF0\uFF0C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/st-mcu-finder.html",
    mdxType: "Link"
  }, "\u53EF\u901A\u8FC7ST MCU Finder\u83B7\u53D6"), "\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frequency"
  }), `\u9891\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u6838\u9891\u7387\u4F1A\u6781\u5927\u5730\u5F71\u54CD\u56FE\u5F62\u5E94\u7528\u5728\u5C4F\u5E55\u5237\u65B0\u4EE5\u53CA\u5C4F\u5E55\u548C\u52A8\u753B\u7684\u6D41\u7545\u6027\u65B9\u9762\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B83\u4F1A\u5F71\u54CD\u53EF\u4ECE\u5185\u90E8\u6216\u5916\u90E8\u5B58\u50A8\u5668\u4F20\u8F93\u5230\u663E\u793A\u5C4F\u5E27\u7F13\u51B2\u7684\u5927\u91CF\u6570\u636E\uFF0C\u8FD8\u53EF\u80FD\u5F71\u54CD\u8BA1\u7B97\u548C\u52A8\u753B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9891\u7387\u8D8A\u9AD8\uFF0C\u5728\u7ED9\u5B9A\u65F6\u95F4\u8303\u56F4\u5185\u80FD\u591F\u4F20\u8F93\u7684\u6570\u636E\u5C31\u8D8A\u591A\uFF0C\u5C31\u80FD\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u52A8\u753B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u4EA7\u54C1\u7684\u5185\u6838\u9891\u7387\u6700\u9AD8\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u9891\u7387\u8D8A\u9AD8\uFF0C\u529F\u8017\u8D8A\u5927\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphic-subsystem-frequency"
  }), `\u56FE\u5F62\u5B50\u7CFB\u7EDF\u9891\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u987B\u5C06\u5185\u6838CPU\u9891\u7387\u4E0E\u56FE\u5F62\u5B50\u7CFB\u7EDF\u9891\u7387\u533A\u522B\u5F00\u6765\u3002 \u56FE\u5F62\u5B50\u7CFB\u7EDF\u9891\u7387\u5305\u62EC\u5185\u90E8\u603B\u7EBF\u9891\u7387\u548C\u56FE\u5F62\u8BA1\u6570\u5668\u9891\u7387\uFF0C\u4EE5\u53CA\u5185\u90E8\u548C\u5916\u90E8\u5B58\u50A8\u5668\u7684\u5B58\u53D6\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5B50\u7CFB\u7EDF\u9891\u7387\u8FD8\u4F1A\u6781\u5927\u5730\u5F71\u54CD\u6574\u4F53\u56FE\u5F62\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "example"
  }), `\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4ECESTM32H7\u4E0A\u7684\u5185\u90E8RAM\u8FD0\u884C\u65F6\uFF0C\u4ECE\u7406\u8BBA\u4E0A\u8BC4\u4F30\u5185\u6838\u548C\u5B50\u7CFB\u7EDF\u6027\u80FD\u7684\u793A\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CPU\u5185\u6838\u7684\u8FD0\u884C\u9891\u7387\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `480MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `64\u4F4DAXI\u603B\u7EBF\u9891\u7387\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `240MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD-TFT\u663E\u793A\u5668\u63A7\u5236\u5668\uFF08LTDC\uFF09\u4F7F\u752864\u4F4DAXI\u603B\u7EBF\uFF0C\u572810\u4E2A\u5468\u671F\u5185\u6267\u884C8\u6B21\u4F20\u8F93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8RAM\u4E0D\u4F1A\u5BFC\u81F4\u660E\u663E\u5EF6\u8FDF\uFF0C\u53730\u7B49\u5F85\u72B6\u6001\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0CLTDC\u5916\u8BBE\u8BBF\u95EE\u65F6\u5185\u90E8RAM\u7684\u5E26\u5BBD\u4E3A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E26\u5BBD = 240 MHz x 8/10 x 8 \u5B57\u8282 = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1,536 MB/s`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E86\u8FD9\u6837\u7684\u5E26\u5BBD\uFF0C\u5F53\u5206\u8FA8\u7387\u4E3A800x480\u4E14\u8272\u6DF1\u4E3A32bpp\u65F6\uFF0C\u5185\u90E8RAM\u53EF\u786E\u4FDD1000\u5E27/\u79D2\uFF08fps\uFF09\u7684\u5237\u65B0\u7387\u3002 \u901A\u5E38\u4F1A\u5C06\u5BF9\u663E\u793A\u5668\u7684\u4F20\u8F93\u9650\u5236\u5728\u6BCF\u79D260\u5E27\uFF08\u901A\u8FC7\u8C03\u6574\u50CF\u7D20\u65F6\u949F\u3001\u8FB9\u6CBF\u7B49\uFF09\uFF0C\u4EE5\u514DLTDC\u548C\u5185\u90E8RAM\u7684\u5E26\u5BBD\u6210\u4E3A\u74F6\u9888\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "embedded-hardware-acceleration-features"
  }), `\u5D4C\u5165\u5F0F\u786C\u4EF6\u52A0\u901F\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u7684STM32 MCU\u5177\u6709\u4E0D\u540C\u7684\u5185\u7F6E\u786C\u4EF6\u52A0\u901F\u529F\u80FD\uFF0C\u6709\u52A9\u4E8E\u83B7\u5F97\u9AD8\u6027\u80FD\u7684\u56FE\u5F62\u5E94\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-art"
  }), `Chrom-ART`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u662F\u4E00\u79CD\u5148\u8FDB\u7684DMA\uFF0C\u53EF\u4EE5\u4E3A\u6267\u884C\u56FE\u5F62\u64CD\u4F5C\u63D0\u4F9B\u8F85\u52A9\u3002 \u5B83\u4E5F\u88AB\u79F0\u4E3ADMA2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BB8\u591ASTM32\u5E73\u53F0\u4E2D\u96C6\u6210\u4E86Chrom-ART\u52A0\u901F\u5668\uFF0C\u5B83\u80FD\u591F\u63A7\u5236\u548C\u4F20\u8F93\u56FE\u50CF\uFF0C\u800C\u4E0D\u4F1A\u589E\u52A0CPU\u8D1F\u8F7D\u3002 \u5B83\u80FD\u591F\u52A0\u5FEB\u5927\u591A\u6570\u56FE\u5F62\u64CD\u4F5C\u7684\u901F\u5EA6\uFF0C\u5982\u989C\u8272\u586B\u5145\u3001\u56FE\u50CF\u590D\u5236\u3001\u6DF7\u5408\u548C\u50CF\u7D20\u683C\u5F0F\u8F6C\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u52A0\u901F\u5668\u80FD\u591F\u5728\u4E00\u9879\u64CD\u4F5C\u4E2D\u6267\u884C\u4E24\u4E2A\u56FE\u5C42\u7684\u6DF7\u5408\uFF0C\u5C06\u521D\u59CB\u50CF\u7D20\u683C\u5F0F\u8F6C\u6362\u4E3A\u9700\u8981\u7684\u8F93\u51FA\u50CF\u7D20\u683C\u5F0F\uFF0C\u5E76\u5C06\u7ED3\u679C\u4F20\u8F93\u5230\u5B58\u50A8\u5668\u76EE\u6807\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u52A0\u901F\u5668\u8FD8\u652F\u6301\u6709\u989C\u8272\u67E5\u627E\u8868\uFF08CLUT\uFF09\u7684\u989C\u8272\u6A21\u5F0F\u3002 \u8FD9\u6709\u52A9\u4E8E\u8282\u7701\u5B58\u50A8\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F496-EVAL`), `\u677F\u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u4E3A\u4F8B\uFF0C\u5F53\u542F\u7528Chrom-ART\u65F6\uFF0CCPU\u8D1F\u8F7D\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `82%`), `\u964D\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4%`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/birdeatcoin.gif",
    mdxType: "Figure"
  }, "Bird-Eat-Coin Chrom-ART\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0CSTM32H7\u4EA7\u54C1\u4E3AChrom-ART\u5916\u8BBE\u589E\u52A0\u4E86\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `YCbCr`), `\u6A21\u5F0F\u8F6C\u6362\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `RGB`), `\u6A21\u5F0F\u7684\u80FD\u529B\u3002 \u6B64\u7279\u6027\u7ED3\u5408JPEG\u786C\u4EF6\u7F16\u89E3\u7801\u5668\uFF0C\u53EF\u51CF\u8F7BJPEG\u56FE\u50CF\u7F16\u7801\u548C\u89E3\u7801\u65F6\u7684CPU\u8D1F\u8F7D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/chrom-art-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "YCbCr\u8F6CRGB\u786C\u4EF6\u6027\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u6709\u4E0A\u8FF0\u7279\u6027\u7684Chrom-ART\u52A0\u901F\u5668\u4E3A\u56FE\u5F62\u5E94\u7528\u63D0\u4F9B\u4E86\u5DE8\u5927\u4F18\u52BF\u3002 TouchGFX\uFF08\u82E5\u9009\u62E9\u7684MCU\u4E2D\u6709\u63D0\u4F9B\uFF09\u5904\u7406\u6240\u6709Chrom-ART\u7279\u6027\uFF0C\u5E76\u5C06\u6240\u6709\u53EF\u80FD\u7684\u7ED8\u56FE\u64CD\u4F5C\u91CD\u5B9A\u5411\u81F3Chrom-ART\u5916\u8BBE\u800C\u975ECPU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u9AD8\u6027\u80FDSTM32\u7CFB\u5217\u63D0\u4F9B\u4E86Chrom-ART\u5916\u8BBE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8BF7\u53C2\u8003AN4943\u5E94\u7528\u7B14\u8BB0\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",
    mdxType: "Link"
  }, "Chrom-ART\u786C\u4EF6\u52A0\u901F"), "\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "jpeg-hardware-codec"
  }), `JPEG\u786C\u4EF6\u7F16\u89E3\u7801\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32H7`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F7`), `\u7CFB\u5217\u63D0\u4F9B\u786C\u4EF6JPEG\u7F16\u89E3\u7801\u5668\uFF0C\u7528\u4E8E\u56FE\u50CF\u548C\u89C6\u9891\u7684\u7F16\u7801\u548C\u89E3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CUI\u5E94\u7528\u9700\u8981\u64AD\u653E\u89C6\u9891\u6587\u4EF6\u6216\u663E\u793AJPEG\u56FE\u50CF\uFF0C\u5219\u6B64\u7279\u6027\u5341\u5206\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u56FE\u50CF\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u901A\u5E38\u8F83\u5C0F\u3002 JPEG\u786C\u4EF6\u7F16\u89E3\u7801\u5668\u786E\u4FDD\u5728\u8FD0\u884C\u65F6\u95F4\u89E3\u7801\u56FE\u50CF\uFF0C\u800C\u4E0D\u4F1A\u53D1\u751FCPU\u8D85\u8D1F\u8F7D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9BTouchGFX\u6F14\u793A\u5229\u7528JPEG\u786C\u4EF6\u7F16\u89E3\u7801\u5668\uFF0C\u51CF\u8F7B\u64AD\u653EMJPEG\u89C6\u9891\u65F6\u7684CPU\u8D1F\u8F7D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "\u786C\u4EF6JPEG\u7F16\u89E3\u7801\u5668\u6027\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8BF7\u53C2\u8003AN4996\u5E94\u7528\u7B14\u8BB0\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",
    mdxType: "Link"
  }, "\u786C\u4EF6JPEG\u7F16\u89E3\u7801\u5668"), "\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-grc"
  }), `Chrom-GRC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E00\u4E9BSTM32\u5FAE\u63A7\u5236\u5668\u4E2D\uFF0C\u5916\u8BBESTM32 Chrom-GRC\u2122\uFF08GFXMMU\uFF09\u65E8\u5728\u4E3A\u5411\u975E\u77E9\u5F62\u663E\u793A\u5668\u53D1\u5C55\u7684\u65B0\u8D8B\u52BF\u63D0\u4F9B\u9AD8\u6548\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5BFB\u5740\u975E\u77E9\u5F62\u663E\u793A\u5668\u65F6\uFF0CChrom-GRC\u2122\u5916\u8BBE\u53EF\u5E2E\u52A9\u5E94\u7528\u51CF\u5C11\u5B58\u50A8\u5E27\u7F13\u51B2\u6240\u9700\u7684RAM\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5706\u5F62\u663E\u793A\u5668\uFF0C\u5916\u8BBE\u53EF\u5C06\u5B58\u50A8\u7A7A\u95F4\u8981\u6C42\u964D\u4F4E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `20%`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u63A7\u5236\u975E\u65B9\u5F62\u5C4F\u5E55\u65F6\uFF0C\u5EFA\u8BAE\u4F46\u4E0D\u5F3A\u5236\u4F7F\u7528Chrom-GRC\u2122\u5916\u8BBE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u901A\u8FC7Chrom-GRC\u5916\u8BBE\u4F18\u5316\u5B58\u50A8\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8BF7\u53C2\u8003AN5051\u5E94\u7528\u7B14\u8BB0\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",
    mdxType: "Link"
  }, " \u56FE\u5F62\u5B58\u50A8\u5668\u4F18\u5316"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-flash"
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u4F4D\u56FE\u8D44\u6E90\u7684\u56FE\u5F62\u7528\u6237\u754C\u9762\u5E94\u7528\u9700\u8981\u4F7F\u7528\u975E\u6613\u5931\u6027\u5B58\u50A8\u5668\u6765\u5B58\u50A8\u6570\u636E\u3002 \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4ECE\u5185\u90E8\u95EA\u5B58\u6267\u884C\u548C\u8BBF\u95EE\u5185\u90E8Flash\u4F1A\u6BD4\u5916\u90E8Flash\u5FEB\u6700\u591A\u4E24\u500D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u5185\u90E8Flash\u7684\u5927\u5C0F\u6709\u9650\uFF0C\u5F88\u591A\u65F6\u5019\u4F1A\u7528\u5185\u90E8Flash\u6765\u5B58\u50A8TouchGFX\u6846\u67B6\u3001\u5C4F\u5E55\u5B9A\u4E49\u548CUI\u903B\u8F91\uFF0C\u800C\u4F4D\u56FE\u6570\u636E\u5219\u5B58\u50A8\u5728\u5916\u90E8Flash\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u56FE\u5F62\u5E94\u7528\u4F7F\u7528\u7684STM32\u4EA7\u54C1\u7EC4\u5408\u7684\u5185\u90E8Flash\u5927\u5C0F\u4ECB\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u51E0KB`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u51E0MB`), `\u4E4B\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u4F4D\u56FE\u6570\u636E\u91CF\u4E0E\u5185\u90E8Flash\u4E0D\u5339\u914D\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u5916\u90E8\u5B58\u50A8\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u53C2\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u5B58\u50A8\u5668"), "\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u95EA\u5B58\u8981\u6C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6846\u67B6\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `60 KB`), `\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100 KB`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C4F\u5E55\u5B9A\u4E49\u548CGUI\u903B\u8F91\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1`), `\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100 KB`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E9B\u6570\u5B57\u53D6\u51B3\u4E8E\u4F7F\u7528\u7684\u6846\u67B6\u7279\u6027\uFF0C\u4EE5\u53CA\u5E94\u7528\u7684\u5927\u5C0F\u548C\u590D\u6742\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8RAM\u53EF\u7528\u4E8E\u5B58\u50A8\u5E27\u7F13\u51B2\u7684\u524D\u63D0\u662F\u5E27\u7F13\u51B2\u7684\u5927\u5C0F\u4F7F\u4E4B\u80FD\u591F\u653E\u5165\u53EF\u7528\u5B58\u50A8\u5668\u3002 \u6216\u8005\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8BBE\u7F6E\u589E\u52A0\u5916\u90E8\u5B58\u50A8\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u548C\u8272\u6DF1\u8BA1\u7B97\u5E27\u7F13\u51B2\u7684\u5927\u5C0F\u3002 \u4F8B\u5982\uFF0C\u5BF9\u4E8E\u5177\u6709HVGA\u5206\u8FA8\u7387\uFF08480x320\uFF09\u548C16\u4F4D\u8272\u7684\u663E\u793A\u5668\uFF0C\u4E00\u4E2A\u5E27\u7F13\u51B2\u6240\u9700\u7684\u5B58\u50A8\u7A7A\u95F4\u4E3A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u4E2A\u5E27\u7F13\u51B2\u7684\u5927\u5C0F = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480 x 320 x 2`), ` =  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `307.200\u5B57\u8282`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u56FE\u5F62\u5E94\u7528\u4F7F\u7528\u7684STM32\u4EA7\u54C1\u7684\u5185\u90E8RAM\u5927\u5C0F\u4ECB\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u51E0KB`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u51E0MB`), `\u4E4B\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u53C2\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u5B58\u50A8\u5668"), "\u4E00\u8282\uFF0C\u4E86\u89E3\u5173\u4E8E\u5916\u90E8\u5B58\u50A8\u5668\u4E2D\u5E27\u7F13\u51B2\u7684\u66F4\u591A\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX RAM\u8981\u6C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6846\u67B6\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `10 KB`), `\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `30 KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63A7\u4EF6\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1 KB`), `\u81F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `15 KB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u5E94\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u8981\u6C42\u53EF\u80FD\u4E0D\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "lcd-controller"
  }), `LCD\u63A7\u5236\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\u7684\u9009\u62E9\u8FD8\u53D6\u51B3\u4E8E\u8981\u4F7F\u7528\u7684\u663E\u793A\u5668\u63A5\u53E3\u548C\u5206\u8FA8\u7387\u3002 \u4EE5800x480\u7684\u5206\u8FA8\u7387\u4E3A\u4F8B\uFF0C\u53EA\u80FD\u901A\u8FC7\u6570\u636E\u4F20\u8F93\u8DB3\u591F\u9AD8\u6548\u7684\u63A5\u53E3\u6765\u5B9E\u73B0\u3002 RGB-TFT\u548CMPI-DSI\u63A5\u53E3\u901A\u5E38\u7528\u4E8E\u66F4\u9AD8\u5206\u8FA8\u7387\uFF0C\u539F\u56E0\u662F\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u5E26\u5BBD\u9AD8\u4E8ESPI\u6216\u5E76\u884C8080/6800\u3002 \u4F4E\u5206\u8FA8\u7387\u663E\u793A\u5668\u901A\u5E38\u5185\u7F6E\u63A7\u5236\u5668\u548CGRAM\uFF0C\u53EF\u901A\u8FC7\u7B80\u5355\u7684SPI\u62168080/6800\u63A5\u53E3\u8FDB\u884C\u8FDE\u63A5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9AD8\u5206\u8FA8\u7387\u663E\u793A\u5668\uFF08WQVGA\u53CA\u4EE5\u4E0A\uFF09\u901A\u5E38\u6CA1\u6709\u5185\u7F6E\u63A7\u5236\u5668\u548CGRAM\uFF0C\u56E0\u6B64\u63A7\u5236\u5668\u9700\u4F4D\u4E8E\u5FAE\u63A7\u5236\u5668\u4FA7\u3002 STM32 MCU\u5185\u7F6E\u4E86RGB-TFT\u548CMIPI DSI\u63A5\u53E3\u7684\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/display-interfaces.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u56FE\u4E2D\u663E\u793A\u4E86\u6709/\u6CA1\u6709GRAM\u548C\u663E\u793A\u5668\u63A7\u5236\u5668\u7684\u4E0D\u540C\u663E\u793A\u5668\u63A5\u53E3\u76844\u4E2A\u793A\u4F8B\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u53C2\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-display",
    mdxType: "Link"
  }, "\u663E\u793A\u5668"), "\u4E00\u8282\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "packages--io"
  }), `\u5C01\u88C5& I/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u7684I/O\u6570\u91CF\u53D6\u51B3\u4E8E\u9009\u62E9\u7684\u663E\u793A\u5668\u548C\u5916\u90E8\u5B58\u50A8\u5668\u3002 \u8FD0\u884C\u5177\u6709\u5E76\u884CRAM/Flash\u7684\u5E76\u884C\u663E\u793A\u5668\u53EF\u80FD\u9700\u8981\u5927\u91CFI/O\uFF0C\u5BFC\u81F4\u5C01\u88C5\u5C3A\u5BF8\u53D8\u5927\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-interfacing"
  }), `\u5B58\u50A8\u5668\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5FAE\u63A7\u5236\u5668\u4E2D\u7684\u5185\u90E8\u95EA\u5B58\u548CRAM\u4E0D\u591F\u7528\u65F6\uFF0C\u9009\u62E9\u5177\u6709\u6700\u5408\u9002\u5916\u90E8\u5B58\u50A8\u5668\u63A5\u53E3\u7684\u5408\u9002MCU\u5C31\u53D8\u5F97\u5341\u5206\u91CD\u8981\u3002 STM32\u4EA7\u54C1\u63D0\u4F9B\u4E86\u4E0D\u540C\u7684\u5B58\u50A8\u5668\u63A7\u5236\u5668\u5916\u8BBE\uFF0C\u7528\u4E8E\u8FDE\u63A5NOR\u3001NAND\u3001SRAM\u3001SDRAM\u3001LPSDR SDRAM\u548CPSRAM\u5B58\u50A8\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"
  }), `\u53EF\u53D8\u5B58\u50A8\u63A7\u5236\u5668& \u53EF\u53D8\u9759\u6001\u5B58\u50A8\u63A7\u5236\u5668\uFF08FMC/FSMC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u652F\u6301\u9759\u6001RAM\uFF0CFMC\u8FD8\u4E3AFSMC\u589E\u52A0\u4E86\u52A8\u6001RAM\u652F\u6301\uFF08SDRAM\uFF09\u3002 \u53EF\u53D8\u5B58\u50A8\u63A7\u5236\u5668\uFF08FMC\uFF09\u5177\u6709\u5F88\u9AD8\u7684\u5916\u90E8\u5B58\u53D6\u901F\u7387\u548C8\u300116\u7279\u522B\u662F32\u4F4D\u6570\u636E\u603B\u7EBF\uFF0C\u53EF\u5B9E\u73B0\u4E0E\u5916\u90E8RAM\u4E4B\u95F4\u7684\u66F4\u9AD8\u541E\u5410\u7387\uFF0C\u4ECE\u800C\u66F4\u597D\u5730\u652F\u6301\u66F4\u9AD8\u5206\u8FA8\u7387\u3002 FMC\u7684\u6BCF\u4E2A\u5B58\u50A8\u533A\u6709\u72EC\u7ACB\u7684\u82AF\u7247\u9009\u62E9\u3002 FMC\u53EF\u4EE5\u63A7\u5236\u7528\u4E8E\u6570\u636E\u7684\u5916\u90E8Flash\u3001\u7528\u4E8E\u5E27\u7F13\u51B2\u7684\u5916\u90E8RAM\u5B58\u50A8\u5668\u548C\u7528\u4E8E\u56FE\u5F62\u6808\u7684\u5806\u6269\u5C55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "serial-memory-interface"
  }), `\u4E32\u884C\u5B58\u50A8\u5668\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u9009\u62E9\u7684STM32\u4EA7\u54C1\uFF0C\u53EF\u80FD\u6709\u5185\u7F6E\u4E32\u884C\u5B58\u50A8\u5668\u63A5\u53E3\uFF0C\u9664\u4E86QSPI\u3001PSRAM\u3001OPI PSRAM\u548CHyper RAM\u5B58\u50A8\u5668\uFF0C\u8FD8\u53EF\u4EE5\u8FDE\u63A5\u5355\u7EBF\u3001\u53CC\u7EBF\u3001\u56DB\u7EBF\u3001\u516B\u7EBF\u548ChyperBus\u95EA\u5B58\u3002 \u5F53\u5904\u4E8E\u5B58\u50A8\u5668\u6620\u5C04\u6A21\u5F0F\u65F6\uFF0C\u4E32\u884C\u9AD8\u901F\u5B58\u50A8\u5668\u63A5\u53E3\u53EF\u63A7\u5236\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `256 MB`), `\u7684\u5B58\u50A8\u5668\uFF1B\u5F53\u5904\u4E8E\u95F4\u63A5\u6A21\u5F0F\u65F6\uFF0C\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4 GB`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76F8\u6BD4\u4E8E\u5E76\u884C\u63A5\u53E3\uFF0C\u4E32\u884C\u5B58\u50A8\u5668\u63A5\u53E3\u53EF\u5C06\u6210\u672C\u8F83\u4F4E\u7684\u5916\u90E8\u95EA\u5B58\u8FDE\u63A5\u5230\u5C0F\u578B\u5C01\u88C5\uFF0C\u540C\u65F6\u51CF\u5C11\u4F7F\u7528\u7684\u5F15\u811A\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u53C2\u8003AN4760\u5E94\u7528\u7B14\u8BB0\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",
    mdxType: "Link"
  }, "STM32\u5FAE\u63A7\u5236\u5668\u4E0A\u7684\u56DB\u7EBFSPI\u63A5\u53E3"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32-value-line-products"
  }), `STM32\u8D85\u503C\u7CFB\u5217\u4EA7\u54C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u4F18\u5316\u4EF7\u683C\uFF0CSTM32H7\u548CSTM32F7\u5E73\u53F0\u63D0\u4F9B\u4E86\u5177\u6709\u6709\u9650\u5185\u90E8Flash\u7684\u8D85\u503C\u7CFB\u5217\u4EA7\u54C1\u3002 \u4F7F\u7528\u8FD9\u4E9B\u4EA7\u54C1\u65F6\uFF0C\u56FE\u5F62\u8D44\u6E90\u5C06\u4FDD\u5B58\u5728\u5916\u90E8Flash\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cortex-m-cores"
  }), `Cortex\xAE-M Core`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\u91C7\u7528\u4E0D\u540C\u7684ARC Cortex\xAE-M\u67B6\u6784\u3002 \u4E0B\u9762\u662FSTM32\u4E0A\u8FD0\u884C\u56FE\u5F62\u65F6\u6700\u5E38\u7528\u7684\u5185\u6838\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m0"
  }), `Cortex\xAE-M0+`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M0+`), `\u7684\u7279\u70B9\u5728\u4E8E\u5B83\u67B6\u6784\u7B80\u5355\u4E14\u4EF7\u683C\u4F4E\u5EC9\u3002 \u5EFA\u8BAE\u5C06\u5176\u5E94\u7528\u4E8E\u4EE5\u8F83\u4F4E\u5206\u8FA8\u7387\u8FD0\u884C\u7684\u8F83\u5C0F\u7684\u9759\u6001\u56FE\u5F62\u5E94\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m4"
  }), `Cortex\xAE-M4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `M0+`), `\u76F8\u6BD4\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M4`), `\u5305\u542B\u66F4\u591A\u529F\u80FD\uFF0C\u5E76\u52A0\u5FEB\u4E86\u8BA1\u7B97\u901F\u5EA6\u3002 \u5B83\u5305\u542BDSP\u6307\u4EE4\u96C6\u548C\u5355\u7CBE\u5EA6FPU\u5355\u5143\u3002 \u8FD9\u4E9B\u6307\u4EE4\u53EF\u51CF\u8F7BCPU\u8D1F\u8F7D\u5E76\u63D0\u9AD8\u8BA1\u7B97\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m7"
  }), `Cortex\xAE-M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M7`), `\u5305\u542B\u66F4\u590D\u6742\u7684\u67B6\u6784\uFF0C\u4E5F\u5305\u542BDSP\u6307\u4EE4\u96C6\uFF0C\u5E76\u5177\u6709\u66F4\u9AD8\u6548\u7684\u53CC\u7CBE\u5EA6FPU\u5355\u5143\uFF0C\u4EE5\u53CA\u53EF\u5BB9\u7EB3\u6700\u591A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16KB`), `\u7684\u6570\u636E\u548C\u6307\u4EE4\u7684\u4E00\u7EA7\u7F13\u51B2\u5B58\u50A8\u5668\u3002 \u7F13\u51B2\u5B58\u50A8\u5668\u63D0\u4F9B\u4E86\u4F7F\u6570\u636E\u548C\u6307\u4EE4\u7D27\u90BB\u8BA1\u7B97\u5355\u5143\u4EE5\u4FBF\u4F18\u5316\u63D0\u53D6\u65F6\u95F4\u7684\u53EF\u80FD\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "feature-overview"
  }), `\u7279\u6027\u6982\u8FF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `DMIPS/MHz\u8303\u56F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u6570\u5B57\u4FE1\u53F7\u5904\u7406\uFF08DSP\uFF09\u6269\u5C55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u6D6E\u70B9\u786C\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u5185\u7F6E\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709\uFF08\u53EF\u90094-64KB\uFF09\uFF0CI-Cachen D-Cache`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u603B\u7EBF\u534F\u8BAE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite\uFF0CFast I/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite\uFF0CAPB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AXI4\uFF0CAHB Lite\uFF0CAPB\uFF0CTCM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53CC\u6838\u9501\u6B65\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6709`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "level-1-cache"
  }), `\u4E00\u7EA7\u7F13\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\u548CSTM32F7\u7CFB\u5217\u5305\u542B\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16 KB`), `\u7684\u4E00\u7EA7\u7F13\u5B58\uFF0C\u7528\u4E8E\u6307\u4EE4\u548C\u6570\u636E\u7F13\u5B58\u3002 \u4E00\u7EA7\u7F13\u5B58\u5728CPU\u9644\u8FD1\u4FDD\u5B58\u4E86\u6570\u636E\u6216\u6307\u4EE4\u96C6\uFF0C\u56E0\u6B64CPU\u65E0\u9700\u4E0D\u65AD\u5730\u63D0\u53D6\u91CD\u590D\u4F7F\u7528\u7684\u540C\u4E00\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u53C2\u8003AN4839\u5E94\u7528\u7B14\u8BB0\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "\u4E00\u7EA7\u7F13\u5B58"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dual-core"
  }), `\u53CC\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\u7CFB\u5217\u5305\u542B\u53CC\u6838\u7CFB\u5217\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Arm\xAE Cortex\xAE-M7\u548CCortex\xAE-M4\u5185\u6838\u7684\u8FD0\u884C\u9891\u7387\u5206\u522B\u53EF\u8FBE\u5230480 MHz\u548C240 MHz\uFF0C\u53EF\u4EE5\u652F\u6301\u66F4\u591A\u7684\u5904\u7406\u548C\u5E94\u7528\u7A0B\u5E8F\u5206\u533A\u3002 \u53CC\u6838STM32H7\u4EA7\u54C1\u7CFB\u5217\u53EF\u4E0E\u5D4C\u5165\u5F0FSMPS\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u63D0\u9AD8\u52A8\u6001\u7535\u6E90\u6548\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u4E2ACortex\xAE-M4\u53EF\u4EE5\u51CF\u8F7B\u8BA1\u7B97\u91CF\uFF0C\u4EE5\u4FBF\u5F00\u653EM7\u5185\u6838\u7528\u4E8E\u7ED8\u56FE/\u56FE\u5F62\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5BF9\u4E8E\u53CC\u6838MCU\uFF0C\u5FC5\u987B\u9488\u5BF9\u7279\u5B9A\u4E0A\u4E0B\u6587\u542F\u7528TouchGFX Generator\u3002 \u53EA\u652F\u6301\u4E00\u4E2A\u5E76\u53D1\u4E0A\u4E0B\u6587\u3002 \u8BF7\u53C2\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator",
    mdxType: "Link"
  }, "TouchGFX Generator\u7528\u6237\u6307\u5357"), "\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "bus-architecture"
  }), `\u603B\u7EBF\u67B6\u6784`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u591A\u6570STM32\u5FAE\u63A7\u5236\u5668\u63D0\u4F9B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `32\u4F4D\u591AAHB`), `\u603B\u7EBF\u77E9\u9635\uFF0C\u7528\u4E8E\u4E92\u8FDE\u6240\u6709\u4E3B\u8BBE\u5907\uFF08CPU\u3001DMA\u7B49\uFF09\u548C\u4ECE\u8BBE\u5907\uFF08Flash\u3001RAM\u3001FSMC\u3001AHB\u548CAPB\u5916\u8BBE\uFF09\u3002 \u8FD9\u6837\u4E00\u6765\uFF0C\u5373\u4F7F\u591A\u4E2A\u9AD8\u901F\u5916\u8BBE\u540C\u65F6\u5DE5\u4F5C\uFF0C\u4E5F\u80FD\u786E\u4FDD\u65E0\u7F1D\u3001\u9AD8\u6548\u7684\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u591AAHB\u4E92\u8FDE\uFF0C\u4E00\u4E9BSTM32\uFF08Cortex\xAE-M7\uFF09\u4EA7\u54C1\u8FD8\u5185\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `64\u4F4D`), `AXI\uFF0C\u7528\u4E8E\u6269\u5C55\u5E26\u5BBD\u3002 \u56E0\u6B64\uFF0C\u5728\u6027\u80FD\u548C\u529F\u8017\u4E4B\u95F4\u5B9E\u73B0\u4E86\u6700\u4F73\u5E73\u8861\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "price"
  }), `\u4EF7\u683C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8Flash\u548C\u5185\u90E8RAM\u7684\u5927\u5C0F\u4EE5\u53CA\u5C01\u88C5\u4E2D\u7684\u53EF\u7528\u5F15\u811A\u6570\u90FD\u4F1A\u5F71\u54CDMCU\u7684\u4EF7\u683C\u3002 \u7528\u6237\u53EF\u4EE5\u6839\u636E\u63A5\u53E3\u3001\u5206\u8FA8\u7387\u548C\u6027\u80FD\u7B49\u65B9\u9762\u7684\u8981\u6C42\uFF0C\u6700\u7EC8\u627E\u5230\u5408\u9002\u7684MCU\u548C\u4F30\u4EF7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8BF7\u53C2\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    mdxType: "Link"
  }, "STM32 32\u4F4DArm Cortex MCU"), "\u4E86\u89E3\u53EF\u7528\u7684STM32\u5FAE\u63A7\u5236\u5668\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);