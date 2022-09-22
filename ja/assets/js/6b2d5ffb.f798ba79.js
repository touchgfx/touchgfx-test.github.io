"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7299],{

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

/***/ 3523:
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
  title: "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-mcu",
  "id": "development/hardware-selection/hardware-components/hardware-selection-mcu",
  "title": "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-mcu",
    "title": "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Hardware Components",
    "permalink": "/4.20/ja/docs/category/hardware-components"
  },
  "next": {
    "title": "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  }
};
const assets = {};




const toc = [{
  value: "\u5468\u6CE2\u6570",
  id: "frequency",
  level: 2
}, {
  value: "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u5468\u6CE2\u6570",
  id: "graphic-subsystem-frequency",
  level: 3
}, {
  value: "\u4F8B",
  id: "example",
  level: 3
}, {
  value: "\u7D44\u8FBC\u307F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u6A5F\u80FD",
  id: "embedded-hardware-acceleration-features",
  level: 2
}, {
  value: "Chrom-ART",
  id: "chrom-art",
  level: 3
}, {
  value: "JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF",
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
  value: "LCD\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
  id: "lcd-controller",
  level: 2
}, {
  value: "\u30D1\u30C3\u30B1\u30FC\u30B8\u3068I/O",
  id: "packages--io",
  level: 2
}, {
  value: "\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "memory-interfacing",
  level: 2
}, {
  value: "\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08FMC\uFF09\u3068\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\uFF65\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08FSMC\uFF09",
  id: "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",
  level: 3
}, {
  value: "\u30B7\u30EA\u30A2\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "serial-memory-interface",
  level: 3
}, {
  value: "STM32\u30D0\u30EA\u30E5\u30FC\uFF65\u30E9\u30A4\u30F3\u88FD\u54C1",
  id: "stm32-value-line-products",
  level: 3
}, {
  value: "Cortex\xAE-M\u30B3\u30A2",
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
  value: "\u6A5F\u80FD\u306E\u6982\u8981",
  id: "feature-overview",
  level: 3
}, {
  value: "\u30EC\u30D9\u30EB1\u30AD\u30E3\u30C3\u30B7\u30E5:",
  id: "level-1-cache",
  level: 3
}, {
  value: "\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2",
  id: "dual-core",
  level: 3
}, {
  value: "\u30D0\u30B9\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
  id: "bus-architecture",
  level: 2
}, {
  value: "\u4FA1\u683C",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30E6\u30CB\u30C3\u30C8\uFF08MCU\uFF09\u306F\u3059\u3079\u3066\u306E\u7D44\u8FBC\u307F\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30A2\u3068\u306A\u308B\u3082\u306E\u3067\u3001\u30B3\u30B9\u30C8\u3068\u6A5F\u80FD\u306E\u4E21\u9762\u3067\u5E45\u5E83\u3044\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u7528\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u9078\u629E\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u3001\u30B5\u30A4\u30BA\u3001\u9054\u6210\u53EF\u80FD\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u6027\u80FD\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u9054\u6210\u53EF\u80FD\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u6027\u80FD\u306F\u4EE5\u4E0B\u306E2\u3064\u306E\u4E3B\u8981\u30DD\u30A4\u30F3\u30C8\u306B\u5DE6\u53F3\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u753B\u50CF\u5408\u6210`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u5185\u8535\u3055\u308C\u305F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306E\u53EF\u7528\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30B9\u30C6\u30E0\u5185\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\u306E\u53EF\u7528\u6027`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30E1\u30E2\u30EA\uFF65\u30A2\u30AF\u30BB\u30B9\u3068\u5E2F\u57DF\u5E45`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AF\u30ED\u30C3\u30AF\u5468\u6CE2\u6570\u3068\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u306E\u30D0\u30B9\u5468\u6CE2\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u8535\u306EFlash\u30E1\u30E2\u30EA\u304A\u3088\u3073RAM\u30E1\u30E2\u30EA\u3078\u306E\u30A2\u30AF\u30BB\u30B9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u4EE5\u5916\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6C42\u3081\u3089\u308C\u308B\u6A5F\u80FD\uFF08\u30E2\u30FC\u30BF\u5236\u5FA1\u3001\u30EF\u30A4\u30E4\u30EC\u30B9\u306A\u3069\uFF09\u3092\u8003\u616E\u3059\u308B\u3053\u3068\u3082\u91CD\u8981\u3067\u3059\u3002 \u3053\u308C\u3089\u3082\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u9078\u5B9A\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3001GUI\u99C6\u52D5\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u7528\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u6C7A\u5B9A\u3059\u308B\u969B\u306B\u8003\u616E\u3059\u3079\u304D\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u88FD\u54C1\u30E9\u30A4\u30F3\u3001\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3001\u4FA1\u683C\u306A\u3069\u3092\u7DB2\u7F85\u3057\u305F\u6982\u8981\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/st-mcu-finder.html",
    mdxType: "Link"
  }, "\u3053\u3053\u304B\u3089ST MCU Finder\u306B\u30A2\u30AF\u30BB\u30B9"), "\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frequency"
  }), `\u5468\u6CE2\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30A2\u5468\u6CE2\u6570\u306F\u3001\u753B\u9762\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3001\u753B\u9762\u3084\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6ED1\u3089\u304B\u306A\u8868\u793A\u306E\u9762\u3067\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6027\u80FD\u306B\u5927\u304D\u304F\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306F\u3001\u5185\u90E8\u307E\u305F\u306F\u5916\u90E8\u306E\u30E1\u30E2\u30EA\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u8EE2\u9001\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u91CF\u306B\u5F71\u97FF\u3057\u3001\u8A08\u7B97\u51E6\u7406\u3084\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6027\u80FD\u306B\u3082\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5468\u6CE2\u6570\u304C\u9AD8\u3044\u307B\u3069\u3001\u7279\u5B9A\u306E\u6642\u9593\u67A0\u5185\u3067\u8EE2\u9001\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u91CF\u304C\u5897\u3048\u3001\u3088\u308A\u8907\u96D1\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u88FD\u54C1\u306E\u6700\u5927\u30B3\u30A2\u5468\u6CE2\u6570\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480MHz`), `\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5468\u6CE2\u6570\u304C\u9AD8\u3044\u307B\u3069\u6D88\u8CBB\u96FB\u529B\u3082\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphic-subsystem-frequency"
  }), `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u5468\u6CE2\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30A2CPU\u5468\u6CE2\u6570\u3068\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u5468\u6CE2\u6570\u3092\u533A\u5225\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u5468\u6CE2\u6570\u306B\u306F\u3001\u5185\u90E8\u30D0\u30B9\u306E\u5468\u6CE2\u6570\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306E\u5468\u6CE2\u6570\u3001\u306A\u3089\u3073\u306B\u5185\u90E8\u304A\u3088\u3073\u5916\u90E8\u30E1\u30E2\u30EA\u306E\u30A2\u30AF\u30BB\u30B9\uFF65\u30B9\u30D4\u30FC\u30C9\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u5468\u6CE2\u6570\u306F\u3001\u5168\u4F53\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u6027\u80FD\u306B\u3082\u5927\u304D\u304F\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "example"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u4F8B\u3067\u306F\u3001STM32H7\u3067\u5185\u90E8RAM\u304B\u3089\u5B9F\u884C\u3059\u308B\u5834\u5408\u306E\u30B3\u30A2\u3068\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u306E\u7406\u8AD6\u4E0A\u306E\u6027\u80FD\u3092\u8A55\u4FA1\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CPU\u30B3\u30A2\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `480MHz`), `\u3067\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `64bit AXI\u30D0\u30B9\u306E\u5468\u6CE2\u6570\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `240MHz`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD-TFT\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08LTDC\uFF09\u306F64bit AXI\u30D0\u30B9\u3092\u4F7F\u7528\u3057\u3066\u304A\u308A\u300110\u30B5\u30A4\u30AF\u30EB\u30678\u56DE\u306E\u8EE2\u9001\u3092\u5B9F\u884C\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8RAM\u306B\u5927\u304D\u306A\u9045\u5EF6\u306F\u767A\u751F\u305B\u305A\u3001\u30BC\u30ED\uFF65\u30A6\u30A7\u30A4\u30C8\uFF65\u30B9\u30C6\u30FC\u30C8\u3067\u52D5\u4F5C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001LTDC\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304C\u30A2\u30AF\u30BB\u30B9\u3057\u305F\u3068\u304D\u306E\u5185\u90E8RAM\u306E\u5E2F\u57DF\u5E45\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E2F\u57DF\u5E45 = 240MHz x 8/10 x 8 bytes = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1.536MB/s`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5E2F\u57DF\u5E45\u3067\u306F\u3001\u5185\u90E8RAM\u306F\u8272\u6DF1\u5EA632bpp\u3001\u89E3\u50CF\u5EA6800x480\u3067\u30011000 frames/sec\uFF08fps\uFF09\u306E\u30C7\u30FC\u30BF\u8EE2\u9001\u304C\u53EF\u80FD\u3068\u306A\u308A\u307E\u3059\u3002 \u901A\u5E38\u306F\uFF08\u30D4\u30AF\u30BB\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\u3084\u30DD\u30FC\u30C1\u306A\u3069\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u3067\uFF09\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u309260fps\u306B\u5236\u9650\u3059\u308B\u3068\u3001LTDC\u304A\u3088\u3073\u5185\u90E8RAM\u306E\u5E2F\u57DF\u5E45\u306F\u30DC\u30C8\u30EB\u30CD\u30C3\u30AF\u306B\u306A\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "embedded-hardware-acceleration-features"
  }), `\u7D44\u8FBC\u307F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u308C\u305E\u308C\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u591A\u69D8\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u6A5F\u80FD\u304C\u5185\u8535\u3055\u308C\u3066\u304A\u308A\u3001\u9AD8\u6027\u80FD\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u73FE\u3092\u53EF\u80FD\u306B\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-art"
  }), `Chrom-ART`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u51E6\u7406\u306E\u5B9F\u884C\u3092\u652F\u63F4\u3059\u308B\u9AD8\u5EA6\u306ADMA\u3067\u3059\u3002 DMA2D\u3068\u3082\u547C\u3070\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306F\u3001\u591A\u304F\u306ESTM32\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u5185\u8535\u3055\u308C\u3066\u304A\u308A\u3001CPU\u306B\u8CA0\u8377\u3092\u304B\u3051\u308B\u3053\u3068\u306A\u304F\u753B\u50CF\u306E\u51E6\u7406\u3084\u8EE2\u9001\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u8272\u306E\u5857\u308A\u3064\u3076\u3057\u3001\u753B\u50CF\u30B3\u30D4\u30FC\u3001\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5909\u63DB\u306A\u3069\u3001\u4E3B\u8981\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u51E6\u7406\u3092\u52A0\u901F\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306F\u30012\u3064\u306E\u30EC\u30A4\u30E4\u3092\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3057\u3001\u5143\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u76EE\u7684\u306E\u51FA\u529B\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3057\u3001\u7D50\u679C\u3092\u4FDD\u5B58\u5148\u30E1\u30E2\u30EA\u306B\u8EE2\u9001\u3059\u308B\u3068\u3044\u3046\u64CD\u4F5C\u3092\u3001\u308F\u305A\u304B1\u56DE\u306E\u64CD\u4F5C\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306F\u3001\u30AB\u30E9\u30FC\uFF65\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\uFF65\u30C6\u30FC\u30D6\u30EB\uFF08CLUT\uFF09\u306B\u3088\u308B\u30AB\u30E9\u30FC\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3082\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30E1\u30E2\u30EA\u3092\u7BC0\u7D04\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F496-EVAL`), `\u30DC\u30FC\u30C9\u4E0A\u3067\u5B9F\u884C\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F8B\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001Chrom-ART\u3092\u6709\u52B9\u306B\u3059\u308B\u3068CPU\u8CA0\u8377\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `82%`), `\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4%`), `\u306B\u6E1B\u5C11\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/birdeatcoin.gif",
    mdxType: "Figure"
  }, "Bird-Eat-Coin\u3067\u306EChrom-ART\u306E\u4F7F\u7528\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305F\u3001STM32H7\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `YCbCr`), `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `RGB`), `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3078\u306E\u5909\u63DB\u6A5F\u80FD\u3082Chrom-ART\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u3092JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF\u3068\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3001JPEG\u753B\u50CF\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u304A\u3088\u3073\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u6642\u306ECPU\u306E\u8CA0\u8377\u3092\u8EFD\u6E1B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/chrom-art-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "YCbCr\u304B\u3089RGB\u3078\u306E\u5909\u63DB\u306B\u3088\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u6027\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306F\u3001\u4E0A\u8A18\u306E\u6A5F\u80FD\u306B\u3088\u3063\u3066\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u591A\u5927\u306A\u5229\u70B9\u3092\u3082\u305F\u3089\u3057\u307E\u3059\u3002 \u9078\u629E\u3057\u305F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306BChrom-ART\u304C\u5185\u8535\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001TouchGFX\u304C\u3059\u3079\u3066\u306EChrom-ART\u6A5F\u80FD\u3092\u64CD\u4F5C\u3057\u3001\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u63CF\u753B\u64CD\u4F5C\u3092\uFF08CPU\u3067\u306F\u306A\u304F\uFF09Chrom-ART\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306F\u3001\u9AD8\u6027\u80FDSTM32\u30D5\u30A1\u30DF\u30EA\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30CE\u30FC\u30C8AN4943\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",
    mdxType: "Link"
  }, "Chrom-ART Hardware acceleration"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "jpeg-hardware-codec"
  }), `JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32H7`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F7`), `\u30B7\u30EA\u30FC\u30BA\u306B\u306F\u3001\u753B\u50CF\u3084\u30D3\u30C7\u30AA\u3092\u30A8\u30F3\u30B3\u30FC\u30C9\u304A\u3088\u3073\u30C7\u30B3\u30FC\u30C9\u3059\u308B\u305F\u3081\u306BJPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF\u304C\u5099\u308F\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6A5F\u80FD\u306F\u3001UI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u518D\u751F\u3057\u305F\u308AJPEG\u753B\u50CF\u3092\u8868\u793A\u3057\u305F\u308A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306B\u3001\u91CD\u8981\u306A\u5F79\u5272\u3092\u679C\u305F\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306BJPEG\u753B\u50CF\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306F\u5927\u304D\u304F\u3042\u308A\u307E\u305B\u3093\u3002 JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF\u3067\u306F\u3001CPU\u306E\u904E\u8CA0\u8377\u3092\u62DB\u304F\u3053\u3068\u306A\u304F\u5B9F\u884C\u6642\u306B\u753B\u50CF\u3092\u30C7\u30B3\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306ETouchGFX\u30C7\u30E2\u3067\u306F\u3001JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF\u3092\u5229\u7528\u3057\u3066\u3001MJPEG\u30D3\u30C7\u30AA\u518D\u751F\u4E2D\u306ECPU\u8CA0\u8377\u3092\u8EFD\u6E1B\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "JPEG\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30FC\u30C7\u30C3\u30AF\u306E\u6027\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30CE\u30FC\u30C8AN4996\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",
    mdxType: "Link"
  }, "Hardware JPEG codec"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-grc"
  }), `Chrom-GRC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 Chrom-GRC\u2122\uFF08GFXMMU\uFF09\u306F\u3001\u3044\u304F\u3064\u304B\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u542B\u307E\u308C\u308B\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3067\u3042\u308A\u3001\u6700\u8FD1\u306E\u975E\u9577\u65B9\u5F62\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30C8\u30EC\u30F3\u30C9\u3092\u52B9\u7387\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-GRC\u2122\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u3088\u308A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u975E\u9577\u65B9\u5F62\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u5BFE\u3059\u308B\u30C7\u30FC\u30BF\u51E6\u7406\u6642\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306ARAM\u306E\u91CF\u3092\u6E1B\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5186\u5F62\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5834\u5408\u3001\u3053\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u3088\u3063\u3066\u30E1\u30E2\u30EA\u5FC5\u8981\u91CF\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `20%`), `\u524A\u6E1B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u56DB\u89D2\u5F62\u306E\u753B\u9762\u3092\u5236\u5FA1\u3059\u308B\u5834\u5408\u306BChrom-GRC\u2122\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306F\u5FC5\u9808\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "Chrom-GRC\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u3088\u308B\u30E1\u30E2\u30EA\u6700\u9069\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30CE\u30FC\u30C8AN5051\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",
    mdxType: "Link"
  }, "Graphic memory optimization"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-flash"
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30EA\u30BD\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u4E0D\u63EE\u767A\u6027\u30E1\u30E2\u30EA\u304C\u5FC5\u8981\u3067\u3059\u3002 \u5185\u90E8Flash\u304B\u3089\u306E\u5B9F\u884C\u3084\u5185\u90E8Flash\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3001\u5916\u90E8Flash\u306B\u5BFE\u3059\u308B\u3088\u308A\u3082\u6700\u5927\u30672\u500D\u9AD8\u901F\u306B\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8Flash\u306F\u30B5\u30A4\u30BA\u306B\u5236\u9650\u304C\u3042\u308B\u306E\u3067\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u306FTouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3001\u753B\u9762\u5B9A\u7FA9\u3001UI\u30ED\u30B8\u30C3\u30AF\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u306F\u5916\u90E8Flash\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F7F\u7528\u3055\u308C\u308BSTM32\u88FD\u54C1\u306E\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6570KB`), `\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6570MB`), `\u306E\u7BC4\u56F2\u306E\u5185\u90E8Flash\u30E1\u30E2\u30EA\u304C\u642D\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u91CF\u304C\u5185\u90E8Flash\u5185\u306B\u53CE\u307E\u308A\u304D\u3089\u306A\u3044\u5834\u5408\u306F\u3001\u5916\u90E8Flash\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u30E1\u30E2\u30EA"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306EFlash\u30E1\u30E2\u30EA\u306E\u5FC5\u8981\u91CF\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF:                       `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `60KB`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u9762\u5B9A\u7FA9\u304A\u3088\u3073GUI\u30ED\u30B8\u30C3\u30AF: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1KB`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100KB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u6570\u5024\u306F\u3001\u4F7F\u7528\u3059\u308B\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u6A5F\u80FD\u3068\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B5\u30A4\u30BA\u3084\u8907\u96D1\u3055\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8RAM\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4FDD\u5B58\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u304C\u3001\u305D\u308C\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u304C\u4F7F\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u5185\u306B\u53CE\u307E\u308B\u5834\u5408\u3067\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F\u3001\u5916\u90E8\u30E1\u30E2\u30EA\u3092\u8FFD\u52A0\u3057\u3066\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u306E\u8A08\u7B97\u306F\u3001\u5E45\u3001\u9AD8\u3055\u3001\u8272\u6DF1\u5EA6\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001HVGA\u89E3\u50CF\u5EA6\uFF08480x320\uFF09\u306716bit\u30AB\u30E9\u30FC\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5834\u5408\u30011\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u306F\u6B21\u306E\u3088\u3046\u306B\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480 x 320 x 2`), ` =  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `307.200 bytes`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F7F\u7528\u3055\u308C\u308BSTM32\u88FD\u54C1\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6570KB`), `\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6570MB`), `\u306E\u7BC4\u56F2\u306E\u5185\u90E8RAM\u304C\u642D\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5916\u90E8\u30E1\u30E2\u30EA\u5185\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u5916\u90E8\u30E1\u30E2\u30EA"), "\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306ERAM\u5FC5\u8981\u91CF\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF:          `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `10KB`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `30KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8:            `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1KB`), `\uFF5E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `15KB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30E2\u30EA\u8981\u4EF6\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3054\u3068\u306B\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "lcd-controller"
  }), `LCD\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u9078\u629E\u306F\u3001\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3084\u89E3\u50CF\u5EA6\u306B\u3082\u4F9D\u5B58\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u89E3\u50CF\u5EA6800x480\u306F\u3001\u30C7\u30FC\u30BF\u8EE2\u9001\u901F\u5EA6\u306E\u70B9\u3067\u52B9\u7387\u7684\u306A\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u306A\u3044\u3068\u9054\u6210\u3067\u304D\u307E\u305B\u3093\u3002 \u9AD8\u89E3\u50CF\u5EA6\u7528\u306B\u306FRGB-TFT\u304A\u3088\u3073MPI-DSI\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u3088\u304F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u591A\u304F\u306E\u5834\u5408\u306B\u3001SPI\u307E\u305F\u306F\u30D1\u30E9\u30EC\u30EB8080/6800\u3088\u308A\u3082\u9AD8\u5E2F\u57DF\u5E45\u3060\u304B\u3089\u3067\u3059\u3002 \u89E3\u50CF\u5EA6\u306E\u4F4E\u3044\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u591A\u304F\u306F\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3084GRAM\u3092\u5185\u8535\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u30B7\u30F3\u30D7\u30EB\u306ASPI\u307E\u305F\u306F8080/6800\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4ECB\u3057\u3066\u63A5\u7D9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9AD8\u89E3\u50CF\u5EA6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF08WQVGA\u4EE5\u4E0A\uFF09\u306E\u591A\u304F\u306F\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3084GRAM\u3092\u5185\u8535\u3057\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5074\u306B\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 RGB-TFT\u304A\u3088\u3073MIPI DSI\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u642D\u8F09\u3057\u305FSTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001\u3053\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u5099\u3048\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/display-interfaces.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u3053\u306E\u56F3\u306F\u3001GRAM\u304A\u3088\u3073\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u3042\u308B\u5834\u5408\uFF08\u307E\u305F\u306F\u306A\u3044\u5834\u5408\uFF09\u306E\u7570\u306A\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E4\u3064\u306E\u4F8B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-display",
    mdxType: "Link"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), "\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "packages--io"
  }), `\u30D1\u30C3\u30B1\u30FC\u30B8\u3068I/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u8981\u306AI/O\u306E\u6570\u306F\u3001\u9078\u629E\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3084\u5916\u90E8\u30E1\u30E2\u30EA\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u30D1\u30E9\u30EC\u30EBRAM/Flash\u3092\u4F7F\u7528\u3057\u3066\u30D1\u30E9\u30EC\u30EB\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u591A\u6570\u306EI/O\u304C\u5FC5\u8981\u306B\u306A\u308A\u3001\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-interfacing"
  }), `\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u5185\u90E8Flash\u3068\u5185\u90E8RAM\u306E\u5BB9\u91CF\u304C\u5341\u5206\u3067\u306A\u3044\u5834\u5408\u3001\u6700\u9069\u306A\u5916\u90E8\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u642D\u8F09\u3057\u305F\u9069\u5207\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u306B\u306A\u308A\u307E\u3059\u3002 STM32\u88FD\u54C1\u306F\u3001NOR\u3001NAND\u3001SRAM\u3001SDRAM\u3001LPSDR SDRAM\u3001\u304A\u3088\u3073PSRAM\u30E1\u30E2\u30EA\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u305F\u3081\u306B\u3001\u3055\u307E\u3056\u307E\u306A\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"
  }), `\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08FMC\uFF09\u3068\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\uFF65\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08FSMC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFRAM\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u52A0\u3048\u3066\u3001FMC\u3067\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFRAM\uFF08SDRAM\uFF09\u306E\u30B5\u30DD\u30FC\u30C8\u304CFSMC\u306B\u52A0\u308F\u308A\u307E\u3059\u3002 \u5916\u90E8\u30A2\u30AF\u30BB\u30B9\uFF65\u30B9\u30D4\u30FC\u30C9\u304C\u901F\u304F\u30018bit\u300116bit\u3001\u7279\u306B32bit\u30C7\u30FC\u30BF\uFF65\u30D0\u30B9\u3092\u5099\u3048\u305F\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08FMC\uFF09\u3067\u306F\u3001\u5916\u90E8RAM\u3068\u306E\u9593\u3067\u9AD8\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u304C\u53EF\u80FD\u306B\u306A\u308A\u3001\u9AD8\u89E3\u50CF\u5EA6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u9069\u5207\u306B\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 FMC\u306B\u306F\u30E1\u30E2\u30EA\uFF65\u30D0\u30F3\u30AF\u3054\u3068\u306B\u72EC\u7ACB\u3057\u305F\u30C1\u30C3\u30D7\u9078\u629E\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u3002 FMC\u3067\u306F\u3001\u30C7\u30FC\u30BF\u7528\u306E\u5916\u90E8Flash\u30E1\u30E2\u30EA\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u7528\u306E\u5916\u90E8RAM\u30E1\u30E2\u30EA\u3001\u304A\u3088\u3073\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B9\u30BF\u30C3\u30AF\u7528\u306E\u30D2\u30FC\u30D7\u62E1\u5F35\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "serial-memory-interface"
  }), `\u30B7\u30EA\u30A2\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u88FD\u54C1\u306B\u3088\u3063\u3066\u306F\u3001\u30B7\u30EA\u30A2\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u5185\u8535\u3055\u308C\u3066\u304A\u308A\u3001QSPI\u3001PSRAM\u3001OPI PSRAM\u3001\u304A\u3088\u3073Hyper RAM\u3068\u540C\u6642\u306B\u3001\u30B7\u30F3\u30B0\u30EB\u3001\u30C0\u30D6\u30EB\u3001\u30AF\u30EF\u30C3\u30C9\u3001\u30AA\u30AF\u30C8\u3001\u304A\u3088\u3073HyperBus Flash\u30E1\u30E2\u30EA\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u53EF\u80FD\u306B\u306A\u3063\u3066\u3044\u308B\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002 \u30B7\u30EA\u30A2\u30EB\u306E\u9AD8\u901F\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u3001\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u3067\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `256MB`), `\u3001\u30A4\u30F3\u30C0\u30A4\u30EC\u30AF\u30C8\uFF65\u30E2\u30FC\u30C9\u3067\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4GB`), `\u307E\u3067\u30C7\u30FC\u30BF\u8EE2\u9001\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30E9\u30EC\u30EB\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u6BD4\u8F03\u3057\u3066\u3001\u30B7\u30EA\u30A2\u30EB\uFF65\u30E1\u30E2\u30EA\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u306F\u4F4E\u30B3\u30B9\u30C8\u306E\u5916\u90E8Flash\u30E1\u30E2\u30EA\u3068\u306E\u63A5\u7D9A\u304C\u53EF\u80FD\u3068\u306A\u308B\u306E\u3067\u3001\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u5C0F\u578B\u5316\u3057\u3001\u4F7F\u7528\u3059\u308B\u30D4\u30F3\u6570\u304C\u5C11\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30CE\u30FC\u30C8AN4760\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",
    mdxType: "Link"
  }, "Quad-SPI interface on STM32 microcontrollers"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32-value-line-products"
  }), `STM32\u30D0\u30EA\u30E5\u30FC\uFF65\u30E9\u30A4\u30F3\u88FD\u54C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4FA1\u683C\u3092\u6700\u9069\u5316\u3059\u308B\u305F\u3081\u306B\u3001STM32H7\u304A\u3088\u3073STM32F7\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001\u5185\u90E8Flash\u306E\u30B5\u30A4\u30BA\u304C\u9650\u5B9A\u3055\u308C\u305F\u30D0\u30EA\u30E5\u30FC\uFF65\u30E9\u30A4\u30F3\u88FD\u54C1\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u88FD\u54C1\u3067\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30EA\u30BD\u30FC\u30B9\u306F\u5916\u90E8Flash\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cortex-m-cores"
  }), `Cortex\xAE-M\u30B3\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001\u3055\u307E\u3056\u307E\u306AArm\xAE Cortex\xAE-M\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 STM32\u3067\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u306B\u3001\u6700\u3082\u3088\u304F\u4F7F\u7528\u3055\u308C\u308B\u30B3\u30A2\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m0"
  }), `Cortex\xAE-M0+`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M0+`), `\u306F\u30B7\u30F3\u30D7\u30EB\u306A\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u4F4E\u4FA1\u683C\u3092\u7279\u5FB4\u3068\u3057\u3066\u3044\u307E\u3059\u3002 \u5C0F\u898F\u6A21\u306E\u9759\u7684\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F4E\u89E3\u50CF\u5EA6\u3067\u5B9F\u884C\u3059\u308B\u5834\u5408\u306B\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m4"
  }), `Cortex\xAE-M4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M4`), `\u306B\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `M0+`), `\u3088\u308A\u3082\u591A\u304F\u306E\u6A5F\u80FD\u304C\u542B\u307E\u308C\u3066\u304A\u308A\u3001\u8A08\u7B97\u901F\u5EA6\u3082\u4E0A\u304C\u308A\u307E\u3059\u3002 DSP\u547D\u4EE4\u30BB\u30C3\u30C8\u3068\u5358\u7CBE\u5EA6\u306E\u6D6E\u52D5\u5C0F\u6570\u70B9\u30E6\u30CB\u30C3\u30C8\uFF08FPU\uFF09\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u547D\u4EE4\u306FCPU\u306E\u8CA0\u8377\u3092\u8EFD\u6E1B\u3057\u3001\u8A08\u7B97\u901F\u5EA6\u3092\u5411\u4E0A\u3055\u305B\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m7"
  }), `Cortex\xAE-M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M7`), `\u306B\u306F\u3055\u3089\u306B\u8907\u96D1\u306A\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068DSP\u547D\u4EE4\u30BB\u30C3\u30C8\u304C\u542B\u307E\u308C\u3066\u304A\u308A\u3001\u500D\u7CBE\u5EA6\u306E\u9AD8\u52B9\u7387\u306AFPU\u3068\u3001\u30C7\u30FC\u30BF\u304A\u3088\u3073\u547D\u4EE4\u7528\u306E\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16KB`), `\u306E\u30EC\u30D9\u30EB1\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\u304C\u642D\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30E1\u30E2\u30EA\u306B\u3088\u308A\u3001\u30C7\u30FC\u30BF\u3084\u547D\u4EE4\u30B3\u30FC\u30C9\u3092\u8A08\u7B97\u30E6\u30CB\u30C3\u30C8\u306E\u8FD1\u304F\u306B\u914D\u7F6E\u3057\u3066\u30D5\u30A7\u30C3\u30C1\u6642\u9593\u3092\u6700\u9069\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "feature-overview"
  }), `\u6A5F\u80FD\u306E\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `DMIPS/MHz\u306E\u7BC4\u56F2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.95\uFF5E1.36`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1.25\uFF5E1.95`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.14\uFF5E3.23`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u30C7\u30B8\u30BF\u30EB\u4FE1\u53F7\u51E6\u7406\uFF08DSP\uFF09\u62E1\u5F35`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6D6E\u52D5\u5C0F\u6570\u70B9\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A\uFF08SP\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A\uFF08SP + DP\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u8535\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A\uFF08\u30AA\u30D7\u30B7\u30E7\u30F34KB\uFF5E64KB\uFF09I-Cache D-Cache`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D0\u30B9\uFF65\u30D7\u30ED\u30C8\u30B3\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite\u3001\u9AD8\u901FI/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite\u3001APB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AXI4\u3001AHB Lite\u3001APB\u3001TCM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2\uFF65\u30ED\u30C3\u30AF\u30B9\u30C6\u30C3\u30D7\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u306A\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3042\u308A`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "level-1-cache"
  }), `\u30EC\u30D9\u30EB1\u30AD\u30E3\u30C3\u30B7\u30E5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\u304A\u3088\u3073STM32F7\u30B7\u30EA\u30FC\u30BA\u306B\u306F\u3001\u547D\u4EE4\u304A\u3088\u3073\u30C7\u30FC\u30BF\u7528\u306E\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16KB`), `\u306EL1\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 L1\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u3001\u30C7\u30FC\u30BF\u307E\u305F\u306F\u547D\u4EE4\u306E\u30BB\u30C3\u30C8\u3092CPU\u306E\u8FD1\u304F\u306B\u4FDD\u5B58\u3059\u308B\u306E\u3067\u3001CPU\u306F\u7E70\u308A\u8FD4\u3057\u4F7F\u7528\u3059\u308B\u540C\u3058\u30C7\u30FC\u30BF\u3092\u30D5\u30A7\u30C3\u30C1\u3057\u7D9A\u3051\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30CE\u30FC\u30C8AN4839\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "Level 1 Cache"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dual-core"
  }), `\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\u30B7\u30EA\u30FC\u30BA\u306B\u306F\u4EE5\u4E0B\u306E\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2\uFF65\u30E9\u30A4\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Arm\xAE Cortex\xAE-M7\u30B3\u30A2\uFF08\u6700\u5927480MHz\uFF09\u3068Cortex\xAE-M4\u30B3\u30A2\uFF08\u6700\u5927240MHz\uFF09\u306B\u3088\u3063\u3066\u3001\u6975\u3081\u3066\u512A\u308C\u305F\u51E6\u7406\u6027\u80FD\u304A\u3088\u3073\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D1\u30FC\u30C6\u30A3\u30B7\u30E7\u30CB\u30F3\u30B0\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002 \u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2\u306ESTM32H7\u88FD\u54C1\u30E9\u30A4\u30F3\u306B\u306FSMPS\u304C\u5185\u8535\u3055\u308C\u3066\u304A\u308A\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D1\u30EF\u30FC\u52B9\u7387\u304C\u5411\u4E0A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306ECortex\xAE-M4\u306B\u3088\u3063\u3066\u8A08\u7B97\u8CA0\u8377\u3092\u8EFD\u6E1B\u3067\u304D\u308B\u306E\u3067\u3001M7\u30B3\u30A2\u3092\u63CF\u753B\u3084\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u51E6\u7406\u7528\u306B\u958B\u653E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30C7\u30E5\u30A2\u30EB\uFF65\u30B3\u30A2\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u3001\u7279\u5B9A\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067TouchGFX Generator\u3092\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 1\u3064\u306E\u30B3\u30F3\u30AB\u30EC\u30F3\u30C8\uFF65\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306E\u307F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator",
    mdxType: "Link"
  }, "TouchGFX Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "bus-architecture"
  }), `\u30D0\u30B9\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001\u3059\u3079\u3066\u306E\u30DE\u30B9\u30BF\uFF08CPU\u3001DMA\u306A\u3069\uFF09\u3068\u30B9\u30EC\u30FC\u30D6\uFF08Flash\u30E1\u30E2\u30EA\u3001RAM\u3001FSMC\u3001AHB\u304A\u3088\u3073APB\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\uFF09\u3092\u76F8\u4E92\u63A5\u7D9A\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `32bit\u30DE\u30EB\u30C1AHB`), `\u30D0\u30B9\uFF65\u30DE\u30C8\u30EA\u30C3\u30AF\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u8907\u6570\u306E\u9AD8\u901F\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304C\u540C\u6642\u52D5\u4F5C\u3059\u308B\u5834\u5408\u3067\u3082\u3001\u30B7\u30FC\u30E0\u30EC\u30B9\u3067\u52B9\u7387\u7684\u306A\u52D5\u4F5C\u304C\u78BA\u4FDD\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30EB\u30C1AHB\u306E\u76F8\u4E92\u63A5\u7D9A\u306B\u52A0\u3048\u3066\u3001\u4E00\u90E8\u306ESTM32\uFF08Cortex\xAE-M7\uFF09\u88FD\u54C1\u306F\u5E2F\u57DF\u5E45\u3092\u5E83\u3052\u308B\u305F\u3081\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `64bit`), ` AXI\u3092\u5185\u8535\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u6027\u80FD\u3068\u6D88\u8CBB\u96FB\u529B\u306E\u6700\u9069\u306A\u30D0\u30E9\u30F3\u30B9\u304C\u5F97\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "price"
  }), `\u4FA1\u683C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8Flash\u3084\u5185\u90E8RAM\u306E\u5BB9\u91CF\u3084\u30D1\u30C3\u30B1\u30FC\u30B8\u5185\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30D4\u30F3\u6570\u304C\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u4FA1\u683C\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002 \u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001\u89E3\u50CF\u5EA6\u3001\u6027\u80FD\u306A\u3069\u306E\u8981\u4EF6\u3092\u691C\u8A0E\u3057\u3066\u3001\u6700\u7D42\u7684\u306B\u306F\u6700\u9069\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u9078\u629E\u3057\u3001\u4FA1\u683C\u3092\u898B\u7A4D\u3082\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    mdxType: "Link"
  }, "STM32 32-bit Arm Cortex MCUs"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);