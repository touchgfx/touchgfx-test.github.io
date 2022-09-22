"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4216],{

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

/***/ 90862:
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
  title: "\u4F4E\u786C\u9AD4\u6210\u672C\u4E0A\u7684TouchGFX"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/touchgfx-on-lowcost-hardware",
  "id": "development/scenarios/touchgfx-on-lowcost-hardware",
  "title": "\u4F4E\u786C\u9AD4\u6210\u672C\u4E0A\u7684TouchGFX",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/touchgfx-on-lowcost-hardware",
  "permalink": "/4.20/zh-TW/docs/development/scenarios/touchgfx-on-lowcost-hardware",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-on-lowcost-hardware",
    "title": "\u4F4E\u786C\u9AD4\u6210\u672C\u4E0A\u7684TouchGFX"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-TW/docs/category/scenarios-2"
  },
  "next": {
    "title": "TouchGFX on NeoChrom",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/touchgfx-on-gpu2d"
  }
};
const assets = {};



const toc = [{
  value: "\u786C\u9AD4\u6982\u8FF0",
  id: "hardware-overview",
  level: 2
}, {
  value: "GPIO\u914D\u7F6E",
  id: "gpio-allocation",
  level: 3
}, {
  value: "\u555F\u52D5\u5C08\u6848",
  id: "starting-a-project",
  level: 3
}, {
  value: "\u986F\u793A\u5668\u66F4\u65B0",
  id: "display-updates",
  level: 2
}, {
  value: "\u7E6A\u88FD\u901F\u5EA6",
  id: "drawing-speed",
  level: 3
}, {
  value: "\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u6642TouchGFX\u7684\u9650\u5236",
  id: "touchgfx-limitations-with-serial-flash",
  level: 2
}, {
  value: "\u7D0B\u7406\u6620\u5C04\u5668",
  id: "texture-mapper",
  level: 3
}, {
  value: "\u9EDE\u9663\u5716\u7E6A\u88FD\u5668",
  id: "bitmap-painter",
  level: 3
}, {
  value: "L8\u8ABF\u8272\u677F",
  id: "l8-palette",
  level: 3
}, {
  value: "\u9A45\u52D5\u7A0B\u5F0F",
  id: "drivers",
  level: 2
}, {
  value: "\u986F\u793A\u5668",
  id: "display",
  level: 3
}, {
  value: "Initialization",
  id: "initialization",
  level: 4
}, {
  value: "\u6495\u88C2\u6548\u61C9",
  id: "tearing-effect",
  level: 4
}, {
  value: "\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4",
  id: "external-flash",
  level: 3
}, {
  value: "\u9023\u7D50\u5668\u8173\u672C",
  id: "linker-script",
  level: 4
}, {
  value: "\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E0B\u8F09",
  id: "flash-loader",
  level: 4
}, {
  value: "\u6309\u9215",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This section discusses how to use TouchGFX on low cost hardware with limited amount of RAM and flash, no acceleration and "slow" SPI connection to external flash and display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5C07\u63D0\u4F9B\u4E00\u4E9B\u95DC\u65BC\u70BA\u6307\u5B9A\u786C\u9AD4\u7DE8\u5BEB\u6700\u4F73\u61C9\u7528\u7A0B\u5F0F\u7684\u5EFA\u8B70\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Throughout this section we will use the TouchGFX board setup for the STM32G071 Nucleo board with the X-Nucleo-GFX01M1 expansion board as example hardware. The expansion board features a 16-bit display and a serial flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",
    mdxType: "Figure"
  }, "Nucleo-G071RB\u548CX-Nucleo-GFX01M1\u64F4\u5C55\u677F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-overview"
  }), `\u786C\u9AD4\u6982\u8FF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u5957\u4EF6\u4E2D\u7684\u786C\u9AD4\u8A2D\u5B9A\u5305\u62ECSTM32G071 MCU\u3001SPI NOR flash\u3001SPI\u986F\u793A\u5668\u548C\u6416\u6746\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5143\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `STM32G071RB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32 Kb`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `128 Kb`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `Displaytech DT022CTFT`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5668\u89E3\u6790\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `240 x 320`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Display format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `16-bit RGB565`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5668\u63A7\u5236\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `ILI9341V`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5668\u9023\u63A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5668\u9023\u7DDA\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32 MHz`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `NOR Flash\u5927\u5C0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `64 Mbit`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR Flash\u9023\u7DDA\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32 MHz`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u9023\u63A5\u5230SPI1\u5916\u8A2D\uFF0C\u800C\u5FEB\u9583\u8A18\u61B6\u9AD4\u9023\u63A5\u5230SPI2\u5916\u8A2D\u3002 \u56E0\u6B64\uFF0CMCU\u80FD\u5920\u5728\u5411\u986F\u793A\u5668\u767C\u9001\u8CC7\u6599\u7684\u540C\u6642\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u8B80\u53D6\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.png",
    width: "500px",
    mdxType: "Figure"
  }, "\u5177\u6709X-Nucleo-GFX01M1\u67B6\u69CB\u7684Nucleo-G071RB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "gpio-allocation"
  }), `GPIO\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u4FE1\u865F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `GPIO\u5F15\u8173`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793ACS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793ADCX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793ASCK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793AMOSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793ATE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `PC2`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8868\u5217\u51FA\u4E86\u5FEB\u9583\u8A18\u61B6\u9AD4\u548C\u986F\u793A\u5668\u4FE1\u865F\u7684GPIO\u5206\u914D\u3002 \u9019\u4E9B\u4FE1\u865F\u53EF\u901A\u904E\u793A\u6CE2\u5668\u6216\u908F\u8F2F\u5206\u6790\u5100\u9032\u884C\u76E3\u6E2C\u3002 This is very useful during debugging of e.g. performance problems.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-project"
  }), `\u555F\u52D5\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u4EE5\u8F15\u9B06\u5730\u70BASTM32G071RB Nucleo\u8A55\u4F30\u5957\u4EF6\u555F\u52D5\u4E00\u500B\u5C08\u6848\u3002 \u9EDE\u64CA"Create New"\uFF0C\u7136\u5F8C\u9078\u64C7STM32G071 Nucleo\u3002  \u6B64\u7BC4\u672C\u5C08\u70BANucleo-G071RB\u5957\u4EF6\u548CX-Nucleo-GFX01M1\u986F\u793A\u677F\u800C\u958B\u767C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.png",
    mdxType: "Figure"
  }, "Nucleo-G071RB\u7684\u65B0\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u7BC4\u672C\u652F\u63F4NOR flash\u3001\u986F\u793A\u5668\u548C\u6309\u9215\u3002 The display can be used both in portrait and horizontal mode.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5728TouchGFX Designer\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Config  -> Display`), `\u90E8\u5206\u4FEE\u6539\u986F\u793A\u5668\u65B9\u5411\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.png",
    mdxType: "Figure"
  }, "\u9078\u64C7\u8C4E\u5C4F\u6216\u6A6B\u5C4F\u986F\u793A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The display on the X-Nucleo-GFX01M1 shield is natively portrait oriented (higher than wide), but it can easily be used with horizontal orientation.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-updates"
  }), `\u986F\u793A\u5668\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u986F\u793A\u5668\u89E3\u6790\u5EA6\u70BA240 x 320\u50CF\u7D20\u3002 \u7E3D\u517176,800\u50CF\u7D20\u6216153,600\u4F4D\u5143\u7D44\u3002 MCU\u8207\u986F\u793A\u5668\u4E4B\u9593\u7684SPI\u9023\u63A5\u7684\u904B\u884C\u983B\u7387\u70BA32 MHz\u3002 \u56E0\u6B64\uFF0C\u50B3\u9001\u901F\u7387\u53EF\u4EE5\u9054\u52304 MB/s\u62162M\u50CF\u7D20/s\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u7684\u5237\u65B0\u983B\u7387\u70BA76.1 Hz\uFF0C\u56E0\u6B64\u6BCF\u5E40\u70BA13.14 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.png",
    mdxType: "Figure"
  }, "\u986F\u793A\u5668\u7684\u6495\u88C2\u6548\u61C9\u4FE1\u865F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u610F\u5473\u8457\u6709\u6700\u591A13 ms\u7684\u6642\u9593\u4F86\u767C\u9001\u4E0B\u4E00\u5E40\u7684\u8CC7\u6599\u3002 In that time we can send 2.000.000 pixels/s / 76 fps = 26.280 pixels / frame or 34% of a full screen. In practice we cannot sustain that transfer speed on the SPI bus because of the protocol overhead so we cannot expect to send more than approximately 30% of a full frame.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u61C9\u7528\u66F4\u65B0\u7684\u50CF\u7D20\u6578\u8D85\u904E\u6B64\u503C\uFF0C\u786C\u9AD4\u5C07\u7121\u6CD5\u5728\u6BCF\u5E40\u7684\u6642\u9593\u4EE5\u5167\u5B8C\u6210\u767C\u9001\u3002 \u7D50\u679C\u662F\u986F\u793A\u5668\u5C07\u5728\u5168\u90E8\u66F4\u65B0\u7D50\u675F\u524D\u958B\u59CB\u986F\u793A\u66F4\u65B0\u7684\u5E40\u3002 \u56E0\u6B64\uFF0C\u7528\u6236\u6709\u6642\u6703\u770B\u5230\u539F\u4F86\u7684\u5E40\u8207\u65B0\u7684\u5E40\u6DF7\u5408\u5728\u4E00\u8D77\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u4E00\u4E9B\u52D5\u756B\u800C\u8A00\uFF0C\u7528\u6236\u6CE8\u610F\u4E0D\u5230\u9019\u4E00\u9EDE\uFF0C\u4F46\u5728\u5176\u4ED6\u60C5\u6CC1\u4E0B\u53EF\u80FD\u7121\u6CD5\u63A5\u53D7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u6211\u5011\u5EFA\u8B70\u5C07\u66F4\u65B0\u7387\u7DAD\u6301\u572830%\u4EE5\u4E0B\u3002 \u5982 \u901A\u904E\u6F38\u9032\u5F0F\u5730\u5206\u6B65\u66F4\u65B0\u5E40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u4E00\u822C\u4F86\u8AAA\u6700\u597D\u5728\u87A2\u5E55\u4E0A\u64F4\u5C55\u7269\u4EF6\uFF0C\u800C\u4E0D\u662F\u79FB\u52D5\u7269\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/star.png",
    width: "400",
    mdxType: "Figure"
  }, "\u986F\u793A\u5668\u7684\u6495\u88C2\u6548\u61C9\u4FE1\u865F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u661F\u5F62\u79FB\u52D5\u5230\u53F3\u5074\u6642\uFF0C\u5FC5\u9808\u66F4\u65B0\u661F\u5F62\u8986\u84CB\u7684\u6240\u6709\u50CF\u7D20\u3002 \u5982\u679C\u53EA\u64F4\u5C55\u661F\u5F62\uFF0C\u5247\u53EA\u9700\u66F4\u65B0\u65B0\u50CF\u7D20\u3002 \u5728\u4E0A\u4E00\u5E40\u66F4\u65B0\u7684\u50CF\u7D20\u4FDD\u6301\u4E0D\u8B8A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "drawing-speed"
  }), `\u7E6A\u88FD\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5411\u986F\u793A\u5668\u767C\u9001\u8CC7\u6599\u7684\u983B\u7387\u70BA\u6700\u9AD832 MHz\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u80FD\u4EE5\u8207\u986F\u793A\u5668\u767C\u9001\u76F8\u540C\u7684\u901F\u5EA6\u904B\u884C\u3002 \u9019\u610F\u5473\u8457\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u901F\u5EA6\u8DB3\u5920\u5FEB\uFF0C\u80FD\u4EE5\u6700\u9AD8\u901F\u5EA6\u5411\u986F\u793A\u5668\u4F9B\u61C9\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u53EA\u6709\u5728\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u4F4D\u5143\u683C\u5F0F\u70BARGB565\u6642\u624D\u80FD\u5BE6\u73FE\u3002 In this case is two bytes read from the flash equal to 1 pixel, which is also two bytes on the display. If the pixel format in the flash is ARGB8888, we need to read double the amount of data from the flash to produce a pixel on the display, and the serial flash will not be able to keep up with the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When this happens we are not sending data to the display continuously and it will not be possible to update all 30% of the display in a frame. \u6709\u4E00\u7A2E\u53EF\u80FD\u7684\u8FA6\u6CD5\u662F\u5C07\u5F71\u50CF\u79FB\u52D5\u5230\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u53E6\u4E00\u7A2E\u8FA6\u6CD5\u662F\u66F4\u6539\u50CF\u7D20\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u4ED6\u7684\u5DE5\u5177\u4E0D\u53D7\u5FEB\u9583\u8A18\u61B6\u9AD4\u901F\u5EA6\u7684\u9650\u5236\u3002 \u5982 \u65B9\u6846\u5C0F\u5DE5\u5177\uFF0C\u7528\u65BC\u7E6A\u88FD\u5F69\u8272\u77E9\u5F62\u3002 \u6B64\u5DE5\u5177\u901F\u5EA6\u5F88\u5FEB\uFF0C\u6BD4\u986F\u793A\u5668\u8CC7\u6599\u767C\u9001\u901F\u5EA6\u8981\u5FEB\u8A31\u591A\u3002 \u5176\u4ED6\u5C0F\u5DE5\u5177\uFF08\u5982\u76F4\u7DDA\u548C\u5713\uFF09\u9700\u8981\u4F7F\u7528\u66F4\u591ACPU\u8CC7\u6E90\u3002 \u9019\u4E9B\u5C0F\u5DE5\u5177\u7121\u6CD5\u4EE5\u767C\u9001\u5230\u986F\u793A\u5668\u7684\u901F\u5EA6\u4F86\u751F\u6210\u50CF\u7D20\u3002 \u5C0D\u65BC\u4F7F\u7528\u9019\u4E9B\u5C0F\u5DE5\u5177\u7684\u61C9\u7528\uFF0C\u4E0D\u80FD\u671F\u671B\u80FD\u5920\u66F4\u65B0\u986F\u793A\u5668\u4E0A\u6BCF\u5E40\u768430%\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"
  }), `\u9019\u88E1`), `\u77AD\u89E3\u50CF\u7D20\u6E32\u67D3\u7684\u8907\u96DC\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-limitations-with-serial-flash"
  }), `\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u6642TouchGFX\u7684\u9650\u5236`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u7A0B\u5F0F\u64B0\u5BEB\u8005\u5FC5\u9808\u8A8D\u8B58\u5230\uFF0C\u5728\u5177\u6709\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684STM32G0\u4E0A\u4F7F\u7528TouchGFX\u6642\u7684\u5E7E\u9EDE\u9650\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "texture-mapper"
  }), `\u7D0B\u7406\u6620\u5C04\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D0B\u7406\u6620\u5C04\u5668\u5C0F\u5DE5\u5177\uFF08TextureMapper\u3001AnimationTextureMapper\u548C ScalableImage\uFF09\u4E0D\u80FD\u7E6A\u88FD\u5B58\u5132\u5728\u5916\u90E8SPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u5716\u50CF\u3002 \u539F\u56E0\u5728\u65BC\uFF0C\u7528\u5B58\u5132\u5728\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u7121\u6CD5\u7372\u5F97\u53EF\u63A5\u53D7\u7684\u6027\u80FD\uFF0C\u5982\u5716\u50CF\u65CB\u8F49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u901A\u904E\u7D0B\u7406\u6620\u5C04\u5668\u4F7F\u7528\u5716\u50CF\uFF0C\u5FC5\u9808\u5C07\u5716\u50CF\u4FDD\u5B58\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u6216RAM\u4E2D\u3002 \u901A\u904E\u5728TouchGFX Designer\u4E2D\u4FEE\u6539\u5716\u50CF\u914D\u7F6E\uFF0C\u53EF\u4EE5\u8F15\u9B06\u5730\u5C07\u5716\u50CF\u4FDD\u5B58\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F49\u81F3\u201CImages \u201D\u9078\u9805\u5361\u4E26\u9078\u4E2D\u5716\u50CF\u3002 \u5728\u8996\u7A97\u7684\u53F3\u5074\uFF0C\u5C07\u201CSection\u201D\u5C6C\u6027\u66F4\u6539\u70BA\u201CIntFlashSection\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.png",
    mdxType: "Figure"
  }, "\u5C07\u5716\u50CF\u653E\u5165\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D0B\u7406\u6620\u5C04\u5668\u7684\u7A0B\u5F0F\u78BC\u91CF\u904E\u5927\uFF0C\u4E0D\u80FD\u5305\u542B\u5728\u6240\u6709\u5C08\u6848\u4E2D\u3002 \u56E0\u6B64\uFF0C\u5C0D\u65BCSTM32G0\u5C08\u6848\uFF0C\u9ED8\u8A8D\u7981\u7528\u7D0B\u7406\u6620\u5C04\u5668\u3002 \u9019\u610F\u5473\u8457\u60A8\u5FC5\u9808\u5148\u555F\u7528\u7D0B\u7406\u6620\u5C04\u5668\uFF0C\u7136\u5F8C\u624D\u80FD\u5728STM32G0\u5C08\u6848\u4E2D\u4F7F\u7528\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F49\u81F3\u201CConfig\u201D\u9078\u9805\u5361\uFF0C\u9078\u64C7\u201CFramework Features\u201D\uFF0C\u4E26\u9EDE\u64CA\u76F8\u95DC\u7684\u7D0B\u7406\u6620\u5C04\u5668\u6216\u4E00\u7D44\u7D0B\u7406\u6620\u5C04\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.png",
    mdxType: "Figure"
  }, "\u70BA\u7279\u5B9A\u5716\u50CF\u683C\u5F0F\u555F\u7528\u7D0B\u7406\u6620\u5C04\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9084\u53EF\u4EE5\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\u9EDE\u9663\u5716\u7DE9\u5B58`), `\u5C07\u5716\u50CF\u66AB\u6642\u79FB\u52D5\u5230RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bitmap-painter"
  }), `\u9EDE\u9663\u5716\u7E6A\u88FD\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u901A\u904E\u5716\u50CF\u70BA\u76F4\u7DDA\u3001\u5713\u548CDynamicGraph\u4E0A\u8272\u3002 \u9019\u4E0D\u9069\u7528\u65BC\u5B58\u5132\u5728SPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u5716\u50CF\u3002 \u4F7F\u7528\u9019\u4E9B\u5C0F\u5DE5\u5177\u7684\u5716\u50CF\u5FC5\u9808\u653E\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u6216RAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "l8-palette"
  }), `L8\u8ABF\u8272\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8\u683C\u5F0F\u7684\u5716\u50CF\u53EF\u4EE5\u7528\u5728\u5177\u6709\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u786C\u9AD4\u4E0A\u3002 \u9650\u5236\u689D\u4EF6\u662F\u8ABF\u8272\u677F\u8CC7\u6599\u5FC5\u9808\u653E\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\uFF08\u4E5F\u662F\u51FA\u65BC\u6027\u80FD\u8003\u91CF\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u5728TouchGFX Designer\u4E2D\u5C07\u201CExtra Section\u201D\u4FEE\u6539\u70BA\u201CIntFlashSection\u201D\uFF0C\u53EF\u4EE5\u5C07\u8ABF\u8272\u677F\u79FB\u52D5\u5230\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "drivers"
  }), `\u9A45\u52D5\u7A0B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u7BC4\u672C\u662F\u4F7F\u7528TouchGFX Generator\u5275\u5EFA\u7684\u3002 \u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator"
  }), `\u6B64\u8655`), `\u95B1\u8B80TouchGFX Generator\u7684\u66F4\u591A\u76F8\u95DC\u5167\u5BB9\u3002 TouchGFX Generator\u751F\u6210HAL\u5C64\uFF0C\u5B83\u9023\u63A5TouchGFX\u6846\u67B6\u8207\u4E00\u7D44\u5E95\u5C64\u9A45\u52D5\u5668\uFF08\u5DF2\u5728\u8A72\u61C9\u7528\u7BC4\u672C\u4E2D\u5BE6\u73FE\uFF09\u3002 \u8A72\u61C9\u7528\u7BC4\u672C\u7684\u5E95\u5C64\u9A45\u52D5\u4F4D\u65BC\u5C08\u6848\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/Src`), `\u8CC7\u6599\u593E\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A45\u52D5\u5668\u4F4D\u65BC3\u500B\u6A94\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9A45\u52D5\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u6A94\u6848`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u6309\u9215`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BButtonController.cpp`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u4F7F\u7528\u6A19\u6E96SPI\u5354\u5B9A\u3002 A number of registers is the display can be written to configure the display. \u5728\u8CC7\u6599\u767C\u9001\u5230\u986F\u793A\u5668\u6642\u9396\u5B9A\u9078\u64C7\u7684\u6676\u7247\u3002 \u4F7F\u7528\u984D\u5916\u7684GPIO\uFF08DCX\uFF09\u5C07\u6307\u4EE4\u4F4D\u5143\u7D44\u8207\u8CC7\u6599\u4F4D\u5143\u7D44\u5340\u5206\u958B\u4F86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A45\u52D5\u7A0B\u5F0F\u4F7F\u7528DMA\u901A\u9053\u767C\u9001\u986F\u793A\u5668\u50CF\u7D20\u8CC7\u6599\u3002 \u9019\u6A23\u5C31\u53EF\u4EE5\u5728MCU\u8A08\u7B97\u50CF\u7D20\u7684\u540C\u6642\u9032\u884C\u767C\u9001\u3002 DMA\u5B8C\u6210\u4E2D\u65B7\u88AB\u7528\u4F86\u91CB\u653E\u5DF2\u767C\u9001\u8CC7\u6599\u7684\u5B58\u5132\u7A7A\u9593\u4EE5\u4FBF\u5728\u5C07\u4F86\u7E6A\u88FD\u6642\u91CD\u8907\u4F7F\u7528\uFF0C\u4EE5\u53CA\u5728\u6709\u65B0\u8CC7\u6599\u53EF\u7528\u6642\u91CD\u65B0\u958B\u59CB\u767C\u9001\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Configuration data is not send with DMA, because the CS and CDX pins must be toggled between and in the small configuration packages according to the protocol of this display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u767C\u9001\u914D\u7F6E\u8CC7\u6599\u6642\uFF0C\u9A45\u52D5\u7A0B\u5F0F\u4F7F\u75288\u4F4D\u5143\u6A21\u5F0F\u7684SPI\uFF0C\u4F46\u5728\u767C\u9001\u50CF\u7D20\u8CC7\u6599\u6642\u6539\u70BA16\u4F4D\u5143\u6A21\u5F0F\u3002 \u5176\u4E2D\u7684\u539F\u56E0\u5728\u65BC\uFF0CMCU\u8A18\u61B6\u9AD4\u4EE5\u5C0F\u7AEF\u6A21\u5F0F\u8B80\u53D6\u3002 RGB565\u683C\u5F0F\u7684\u50CF\u7D20\u5B58\u5132\u5728RAM\u4E2D\uFF0C\u9996\u5148\u662F\u4F4E\u4F4D\u5143\u7D44\uFF08G\u548CB\uFF09\uFF0C\u7136\u5F8C\u662F\u9AD8\u4F4D\u5143\u7D44\uFF08R\u548CG\uFF09\u3002 \u75768\u4F4DSPI\u70BA\u9032\u884C\u767C\u9001\u800C\u8B80\u53D6\u8A18\u61B6\u9AD4\u6642\uFF0C\u7DAD\u6301\u6B64\u9806\u5E8F\u4E0D\u8B8A\u3002 \u7576SPI\u70BA16\u4F4D\u5143\u6A21\u5F0F\u6642\uFF0C\u630916\u4F4D\u5143RGB565\u5F9E\u8A18\u61B6\u9AD4\u8B80\u53D6\u8CC7\u6599\uFF0C\u4E26\u6309\u986F\u793A\u5668\u7684\u6B63\u78BA\u9806\u5E8F\u767C\u9001\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u4E0D\u4F7F\u752816\u4F4DDMA\u7684\u9A45\u52D5\uFF0C\u5FC5\u9808\u5728\u767C\u9001\u524D\u4EA4\u63DB\u50CF\u7D20\u4E2D\u7684\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "initialization"
  }), `Initialization`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The display initialization is found in the function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MB1642BDisplayDriver_DisplayInit(void)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A45\u52D5\u7A0B\u5F0F\u6309\u7167\u5EFA\u8B70\u7684\u4E0A\u96FB\u9806\u5E8F\u5411\u986F\u793A\u5668\u767C\u90016\u500B\u6307\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u9000\u51FA\u7761\u7720\u6A21\u5F0F\uFF0811h\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u9032\u5165\u6B63\u5E38\u6A21\u5F0F\uFF0813h\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5229\u7528MX\u548CBGR\u4F4D\u7F6E\u8A2D\u5B9A\u8A18\u61B6\u9AD4\u5B58\u53D6\u63A7\u5236\uFF0836h\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8A2D\u7F6E\u50CF\u7D20\u683C\u5F0F\uFF083Ah\uFF09\u70BA16\u4F4D\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6495\u88C2\u6548\u61C9\u7DDA\u958B\u555F\uFF0835h\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8A2D\u7F6E\u6495\u88C2\u6383\u63CF\u7DDA\uFF0844h\uFF09\u4F7F\u5176 = 0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A45\u52D5\u6703\u5728\u9019\u4E9B\u6307\u4EE4\u4E4B\u9593\u4F11\u7720100 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "tearing-effect"
  }), `\u6495\u88C2\u6548\u61C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F86\u81EA\u986F\u793A\u5668\u7684\u6495\u88C2\u6548\u61C9\uFF08TE\uFF09\u4FE1\u865F\u975E\u5E38\u91CD\u8981\u3002 It allows the application to synchronize the update of the display memory correctly with the display refresh rate. This helps the application to avoid tearing on the display. The display asserts the signal whenever it starts an update cycle. The MCU uses this signal to start sending data to the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TE\u4FE1\u865F\u9023\u63A5\u5230MCU\u7684\u5916\u90E8\u4E2D\u65B7\u8F38\u5165\u3002 CubeMx\u751F\u6210\u4E26\u914D\u7F6E\u8A72\u5F15\u8173\u4E0A\u7684\u4E2D\u65B7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A45\u52D5\u4E2D\u7684callback \u6307\u793ATouchGFX\u958B\u59CB\u7E6A\u88FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
  }), `\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u677F\u5361\u4E0A\u7684SPI NOR flash\u662F\u6A19\u6E96SPI flash\u3002 \u8A72\u9A45\u52D5\u6BD4\u986F\u793A\u5668\u9A45\u52D5\u7C21\u55AE\u3002 No special initialization is required to read data from the flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The driver can read data using polled SPI (busy waiting for all the bytes) or use DMA. The time to start a DMA reception is similar to the time it takes to read 20 bytes in polled mode, so it is often slower for short reads. On the other hand, the DMA continues to run during interrupts (e.g. sysTick or application interrupts) and can run in the background when the MCU is busy rendering pixels. For this reason both methods are used.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The flash driver is using another DMA channel than the display driver, so both reception of new data and transmission of already drawn pixels can run concurrently.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-script"
  }), `\u9023\u7D50\u5668\u8173\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9023\u7D50\u5668\u63A7\u5236\u61C9\u7528\u4E2D\u5404\u7A2E\u8CC7\u6599\u6240\u5728\u7684\u4F4D\u7F6E\u3002 \u9019\u662F\u5728\u9023\u7D50\u5668\u8173\u672C\u4E2D\u6307\u5B9A\u7684\u3002 \u4E0B\u9762\u662Fgcc\u7DE8\u8B6F\u5668\u7684\u9023\u7D50\u5668\u8173\u672C\u7684\u7B2C\u4E00\u90E8\u5206\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K
  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K
  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `It declares the NOR flash as starting from the address 0x90000000. The flash driver in the target application reads data in the 0x90000000 addresses from the SPI flash (using the lower 24-bits as address in the flash).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The External Flash Loader used in STM32CubeProgrammer can flash data in this range to the SPI flash (see below).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u90E8\u5206\u5C07\u5716\u50CF\uFF08ExtFlashSection\uFF09\u548C\u5B57\u9AD4\uFF08FontFlashSection\uFF09\u8CC7\u6599\u653E\u5728SPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u5411\u9023\u7D50\u5668\u8173\u672C\u4E2D\u6DFB\u52A0\u76F8\u4F3C\u5206\u5340\uFF0C\u53EF\u5C07\u5176\u4ED6\u8CC7\u6599\u653E\u5165SPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "flash-loader"
  }), `\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E0B\u8F09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `G071 TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u5305\u542BSTM32CubeProgrammer\u7684\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u3002 \u6B64\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u53EF\u5C07\u8CC7\u6599\u5BEB\u5165SPI NOR flash\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u4F4D\u65BC\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc/S25FL032P_STM32G071B-NUCLEO.stldr`), `\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A STM32CubeIDE project can be flashed directly from the CubeIDE, but an IAR or Keil application must be flashed from STM32CubeProgrammer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The flash loader is not available in STM32CubeProgrammer initially, so it must be installed by copying the stldr file to the installation:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.png",
    mdxType: "Figure"
  }, "\u5C07\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u8907\u88FD\u5230STM32CubeProgrammer\u5B89\u88DD\u8CC7\u6599\u593E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Now the flash loader can be selected in STM32CubeProgrammer as normal:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.png",
    mdxType: "Figure"
  }, "\u5C07\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u8907\u88FD\u5230STM32CubeProgrammer\u5B89\u88DD\u8CC7\u6599\u593E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u5728Nucleo-G071RB\u958B\u767C\u677F\u4E0A\u50C5\u80FD\u4F7F\u7528\u7279\u5B9A\u7684GPIO\u914D\u7F6E  \u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5728\u81EA\u8A02\u786C\u9AD4\u4E0A\u5C0D\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u4F7F\u7528\u5176\u4ED6GPIO\u914D\u7F6E\uFF0C\u5247\u5FC5\u9808\u76F8\u61C9\u5730\u4FEE\u6539\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buttons"
  }), `\u6309\u9215`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u9215\u9A45\u52D5\u5341\u5206\u7C21\u55AE\u3002 \u5B83\u5C0DMB1642B\u4E0A\u7684\u6416\u6746\u548CNucleo\u677F\u4E0A\u7684\u85CD\u8272\u6309\u9215\u4F7F\u7528\u76845\u500BGPIO\u7684\u72C0\u614B\u9032\u884C\u63A1\u6A23\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u6309\u9215\u9A45\u52D5\u4F5C\u70BABottonController\u5B89\u88DD\u5728TouchGFX\u4E2D\u3002 \u9019\u610F\u5473\u8457\u53EF\u4EE5\u76F4\u63A5\u5728TouchGFX Designer\u4E2D\u9EDE\u64CA\u6309\u9215\u4EE5\u4FBF\u4F7F\u7528\u3002 \u9084\u53EF\u4EE5\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u5B83\u5011\uFF0C\u4F8B\u5982\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u7684\u9375\u78BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9375`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u7A0B\u5F0F\u78BC`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5DE6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'4'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'6'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'8'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'2'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'5'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u85CD\u8272\u6309\u9215`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'0'`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `These keys are also usable when you run the Simulator (hit `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `F5`), ` in the TouchGFX Designer) by using the keyboard numpad.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);