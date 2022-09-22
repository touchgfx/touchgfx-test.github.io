"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7972],{

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

/***/ 13385:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70814);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44035);
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
  id: "known-issues",
  title: "\u65E2\u77E5\u306E\u554F\u984C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/known-issues",
  "id": "miscellaneous/known-issues",
  "title": "\u65E2\u77E5\u306E\u554F\u984C",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/miscellaneous/known-issues.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/known-issues",
  "permalink": "/4.20/ja/docs/miscellaneous/known-issues",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "known-issues",
    "title": "\u65E2\u77E5\u306E\u554F\u984C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D8\u30EB\u30D7\u60C5\u5831",
    "permalink": "/4.20/ja/docs/miscellaneous/getting-help"
  },
  "next": {
    "title": "\u66F4\u65B0\u5C65\u6B74",
    "permalink": "/4.20/ja/docs/miscellaneous/changelog"
  }
};
const assets = {};




const toc = [{
  value: "TouchGFX 4.20.0",
  id: "touchgfx-4-20-0",
  level: 2
}, {
  value: "Painter interface changed",
  id: "painter-interface-changed",
  level: 3
}, {
  value: "Painter implementation moved to generated files",
  id: "painter-implementation-moved-to-generated-files",
  level: 3
}, {
  value: "Instructions",
  id: "instructions",
  level: 4
}, {
  value: "Linker errors",
  id: "linker-errors",
  level: 4
}, {
  value: "Debugging STM32G0 with Keil",
  id: "debugging-stm32g0-with-keil",
  level: 3
}, {
  value: "Compiling STM32U5 and STM32L5 projects with Keil",
  id: "compiling-stm32u5-and-stm32l5-projects-with-keil",
  level: 3
}, {
  value: "LOGONSERVER environment variable",
  id: "logonserver-environment-variable",
  level: 3
}, {
  value: "TouchGFX 4.19.0",
  id: "touchgfx-4-19-0",
  level: 2
}, {
  value: "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u65B0\u3057\u3044\u64CD\u4F5C\u65B9\u6CD5",
  id: "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u65B0\u3057\u3044\u64CD\u4F5C\u65B9\u6CD5",
  level: 3
}, {
  value: "\u4F8B: \u81EA\u52D5\u751F\u6210\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8ID",
  id: "\u4F8B-\u81EA\u52D5\u751F\u6210\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8id",
  level: 4
}, {
  value: "4.19.0\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6642\u306B\u81EA\u52D5\u751F\u6210\u3055\u308C\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3",
  id: "4190\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6642\u306B\u81EA\u52D5\u751F\u6210\u3055\u308C\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3",
  level: 4
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30F3\u30C8ID\u306E\u53C2\u7167",
  id: "\u30E6\u30FC\u30B6\u30B3\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30F3\u30C8id\u306E\u53C2\u7167",
  level: 4
}, {
  value: "ARMCLANG\u306B\u3088\u308BLibJPEG\u306E\u4F7F\u7528",
  id: "armclang\u306B\u3088\u308Blibjpeg\u306E\u4F7F\u7528",
  level: 3
}, {
  value: "H750B Discovery\u4E0A\u306EMJPEG\u30D3\u30C7\u30AA",
  id: "h750b-discovery\u4E0A\u306Emjpeg\u30D3\u30C7\u30AA",
  level: 3
}, {
  value: "ThreadX\u30A2\u30BB\u30F3\u30D6\u30E9\uFF65\u30D5\u30A1\u30A4\u30EB",
  id: "threadx\u30A2\u30BB\u30F3\u30D6\u30E9\u30D5\u30A1\u30A4\u30EB",
  level: 3
}, {
  value: "TouchGFX 4.18.0",
  id: "touchgfx-4-18-0",
  level: 2
}, {
  value: "CubeMX 6.1.0\u304A\u3088\u3073CubeProgrammer 2.6\u306B\u3088\u308B\u554F\u984C",
  id: "issues-with-cubemx-610-and-cubeprogrammer-26",
  level: 3
}, {
  value: "\u65B0\u3057\u3044.touchgfx\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "new-touchgfx-format",
  level: 3
}, {
  value: "\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u304C.touchgfx\u306B\u66F8\u304D\u8FBC\u307E\u308C\u306A\u3044",
  id: "default-values-are-not-written-to-touchgfx",
  level: 4
}, {
  value: "TextEntries\u30D6\u30ED\u30C3\u30AF\u306E\u524A\u9664",
  id: "removed-textentries-block",
  level: 4
}, {
  value: "LCD16bpp::fillRect\u3068LCD16bpp::drawGlyph",
  id: "lcd16bpp-fillrect-and-lcd16bpp-drawglyph",
  level: 3
}, {
  value: "Makefile\u3068xlsx",
  id: "makefile-and-xlsx",
  level: 3
}, {
  value: "texts.xsd\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u306E\u5236\u9650",
  id: "textsxsd\u306E\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u306E\u5236\u9650",
  level: 3
}, {
  value: "Linux\u3067\u306ESDL2\u30EA\u30F3\u30AB\uFF65\u30A8\u30E9\u30FC",
  id: "sdl2-linker-error-on-linux",
  level: 3
}, {
  value: "TouchGFX 4.17.0",
  id: "touchgfx-4-17-0",
  level: 2
}, {
  value: "Painter\u3067\u306FsetAlpha()\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044",
  id: "painters-no-longer-support-setalpha",
  level: 3
}, {
  value: "HAL\u30AF\u30E9\u30B9\u306E\u4F7F\u7528",
  id: "using-the-hal-class",
  level: 3
}, {
  value: "TouchGFX Generator\u306EFMC\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "fmc-display-interface-in-touchgfx-generator",
  level: 3
}, {
  value: "16bpp\u300124bpp\u300132bpp\u69CB\u6210\u306EL8\u753B\u50CF",
  id: "l8-images-in-16-24-or-32bpp-configurations",
  level: 3
}, {
  value: "TouchGFX 4.15.0",
  id: "touchgfx-4150",
  level: 2
}, {
  value: "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30B5\u30DD\u30FC\u30C8",
  id: "mcu-support",
  level: 3
}, {
  value: "TouchGFX 4.14.0",
  id: "touchgfx-4140",
  level: 2
}, {
  value: "ARMCLANG\u306E\u30B5\u30DD\u30FC\u30C8",
  id: "armclang-support",
  level: 3
}, {
  value: "\u30EF\u30FC\u30AF\u30FB\u30D5\u30ED\u30FC",
  id: "workflow",
  level: 4
}, {
  value: "TouchGFX 4.13.0",
  id: "touchgfx-4130",
  level: 2
}, {
  value: "\u30D0\u30B0",
  id: "bugs",
  level: 3
}, {
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF",
  id: "font-converter",
  level: 4
}, {
  value: "\u8FFD\u52A0\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B5\u30DD\u30FC\u30C8",
  id: "additional-compiler-support",
  level: 3
}, {
  value: "\u5F8C\u65B9\u4E92\u63DB\u6027",
  id: "backwards-compatibility",
  level: 3
}, {
  value: "\u975E\u63A8\u5968\u306B\u306A\u3063\u305F\u6A5F\u80FD",
  id: "deprecated-features",
  level: 4
}, {
  value: "TextureMapper\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7121\u52B9\u306B",
  id: "texturemapper-is-disabled-by-default",
  level: 4
}, {
  value: "HAL SDL1\u3068\u306E\u975E\u4E92\u63DB",
  id: "hal-sdl1-incompatible",
  level: 4
}, {
  value: "TouchGFX 4.12.3",
  id: "touchgfx-4123",
  level: 2
}, {
  value: "\u5F8C\u65B9\u4E92\u63DB\u6027",
  id: "backwards-compatibility-1",
  level: 3
}, {
  value: "\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB",
  id: "screen-transitions",
  level: 4
}, {
  value: "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8",
  id: "binary-fonts",
  level: 4
}, {
  value: "TouchGFX 4.11.0",
  id: "touchgfx-4110",
  level: 2
}, {
  value: "\u5F8C\u65B9\u4E92\u63DB\u6027",
  id: "backwards-compatibility-2",
  level: 3
}, {
  value: "TouchGFX 4.10.0",
  id: "touchgfx-4100",
  level: 2
}, {
  value: "4.9.x\u304B\u3089\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9",
  id: "upgrading-from-49x",
  level: 3
}, {
  value: "\u5F8C\u65B9\u4E92\u63DB\u6027",
  id: "backwards-compatibility-3",
  level: 3
}, {
  value: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u306E\u554F\u984C",
  id: "project-updater-issue",
  level: 3
}, {
  value: "TextArea\u304A\u3088\u3073ChromART\uFF08DMA2D\uFF09",
  id: "textarea-and-chromart-dma2d",
  level: 3
}, {
  value: "TouchGFX 4.9.0",
  id: "touchgfx-490",
  level: 2
}, {
  value: "4.8.0\u304B\u3089\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9",
  id: "upgrading-from-480",
  level: 3
}, {
  value: "\u65B9\u6CD51: \u5143\u306E\u30D5\u30A1\u30A4\u30EB\u69CB\u9020\u3092\u7DAD\u6301",
  id: "method-1-retain-original-file-structure",
  level: 3
}, {
  value: "\u65B9\u6CD52: \u65B0\u3057\u3044\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3078\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",
  id: "method-2-import-into-new-template",
  level: 3
}, {
  value: "\u65B9\u6CD53: Designer\u3092\u4F7F\u7528\u305B\u305A\u306B\u624B\u52D5\u3067\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9",
  id: "method-3-manual-upgrade-without-designer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u3059\u3079\u3066\u306ETouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u304A\u3051\u308B\u65E2\u77E5\u306E\u554F\u984C\u3068\u8003\u3048\u3089\u308C\u308B\u5BFE\u5FDC\u7B56\u3092\u793A\u3057\u307E\u3059\u3002 TouchGFX\u3092\u7279\u5B9A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3059\u308B\u305F\u3081\u306B\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\uFF65\u30B9\u30C6\u30C3\u30D7\u304C\u3042\u308C\u3070\u3001\u305D\u306E\u8AAC\u660E\u3082\u884C\u3044\u307E\u3059\u3002 \u4F7F\u7528\u3057\u3066\u3044\u308B\u73FE\u5728\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u8907\u6570\u306E\u30EA\u30EA\u30FC\u30B9\u3088\u308A\u3082\u53E4\u3044\u5834\u5408\u306F\u3001\u6700\u65B0\u306E\u30EA\u30EA\u30FC\u30B9\u306B\u9054\u3059\u308B\u307E\u3067\u3059\u3079\u3066\u306E\u30EA\u30EA\u30FC\u30B9\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\uFF65\u30B9\u30C6\u30C3\u30D7\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-20-0"
  }), `TouchGFX 4.20.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painter-interface-changed"
  }), `Painter interface changed`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The method AbstractPainter::render() has been replaced by `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../api/classes/classtouchgfx_1_1_abstract_painter#function-paint"
  }), `AbstractPainter::paint`), ` for performance reasons.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `If you have implemented your own painter classes you need to adapt to this new interface. Read more in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/canvas-widgets"
  }), `article`), ` on Canvas Widgets.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painter-implementation-moved-to-generated-files"
  }), `Painter implementation moved to generated files`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In TouchGFX 4.20 the software routines that paint circles, lines, and other shapes have been moved from the framework code to the code generated by CubeMX. This means that you have to regenerate code in CubeMX after upgrading a project from TouchGFX 4.19.1 (or earlier) to TouchGFX 4.20. The reason for this change is to be able to use the graphics accelerator, DMA2D, when drawing circles and lines.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "instructions"
  }), `Instructions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Find and open the .ioc file in the project root folder:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/project-root-ioc.png",
    mdxType: "Figure"
  }, "Project IOC file"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Select TouchGFX 4.20 in the Software Packs Component Selector (alt-O):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/xcube-tgfx-420-selected.png",
    mdxType: "Figure"
  }, "Selecting TouchGFX 4.20"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Close this dialog and press "Generate Code" in upper right corner. Now go to the TouchGFX Designer and regenerate code (F4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-errors"
  }), `Linker errors`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you don't regenerate the code you will get linker errors if your project uses e.g. the Circle widget. The errors looks like this (here for 16bpp):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Linking TouchGFX/build/bin/target.elf
Middlewares/ST/touchgfx/lib/core/cortex_m7/gcc\\libtouchgfx.a(PainterRGB565.o): In function \`touchgfx::PainterRGB565::paint(unsigned char*, short, short, short, short, unsigned char) const':
(.text._ZNK8touchgfx13PainterRGB5655paintEPhssssh+0x1a): undefined reference to \`touchgfx::paint::rgb565::lineFromColor(unsigned short*, unsigned int, unsigned long, unsigned char, unsigned long)'
Middlewares/ST/touchgfx/lib/core/cortex_m7/gcc\\libtouchgfx.a(PainterRGB565.o): In function \`touchgfx::PainterRGB565::tearDown() const':
(.text._ZNK8touchgfx13PainterRGB5658tearDownEv+0x0): undefined reference to \`touchgfx::paint::rgb565::tearDown()'
collect2.exe: error: ld returned 1 exit status
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For 24bpp:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Linking TouchGFX/build/bin/target.elf
        Middlewares/ST/touchgfx/lib/core/cortex_m7/gcc\\libtouchgfx.a(PainterRGB888.o): In function \`touchgfx::PainterRGB888::paint(unsigned char*, short, short, short, short, unsigned char) const':
        (.text._ZNK8touchgfx13PainterRGB8885paintEPhssssh+0x18): undefined reference to \`touchgfx::paint::rgb888::lineFromColor(unsigned char*, unsigned int, unsigned long, unsigned char)'
        Middlewares/ST/touchgfx/lib/core/cortex_m7/gcc\\libtouchgfx.a(PainterRGB888.o): In function \`touchgfx::PainterRGB888::tearDown() const':
        (.text._ZNK8touchgfx13PainterRGB8888tearDownEv+0x0): undefined reference to \`touchgfx::paint::rgb888::tearDown()'
        collect2.exe: error: ld returned 1 exit status
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The missing functions are generated into `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target/generated/STM32DMA.cpp`), `, when you regenerate code in CubeMX.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If your controller does not have DMA2D (or it is not enabled), CubeMX will include the software routines that was used in TouchGFX 4.19.1 and previous versions.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you for some reason cannot regenerate code in CubeMX, you can manually add the missing functions by inserting the following includes in a .cpp file in your application:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `#include <touchgfx/hal/Paint.hpp>
#include <touchgfx/hal/PaintRGB565Impl.hpp> // 16bpp painting routines
#include <touchgfx/hal/PaintRGB888Impl.hpp> // 24bpp painting routines
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "debugging-stm32g0-with-keil"
  }), `Debugging STM32G0 with Keil`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX projects for STM32G0 boards with the X-NUCLEO-GFX01M1/2 display modules uses the address range from 0x90000000 for data in the external SPI flash. This breaks the Keil debugger as it tries to access these addresses when starting a debug session. Keil gives the error "Cannot access target. Shutting down debug session."`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/stm32g0-debugging-keil.png",
    mdxType: "Figure"
  }, "Starting a debug session in Keil"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The solution is to create a init script for the debugger, with the text:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `load STM32G071_NUCLEO\\STM32G071_NUCLEO.axf NOCODE
g,main
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The NOCODE option tells Keil to not load the code. This removes the access problem.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/debug-ini.png",
    mdxType: "Figure"
  }, "Debug initialization script for Keil"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `And select the file in the debug configuration dialogue:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-debug-dialog.png",
    mdxType: "Figure"
  }, "Debug configuration for Keil"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-stm32u5-and-stm32l5-projects-with-keil"
  }), `Compiling STM32U5 and STM32L5 projects with Keil`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Keil projects created with CubeMx are missing the DSP extension tag in the project file. This gives linker error when linking with the TouchGFX library, which has the DSP extension tag set. The linker errors will be like:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `STM32U575ZI_NUCLEO\\STM32U575ZI_NUCLEO.axf: Error: L6366E: abstractpartition.o attributes are not compatible with the provided attributes.
Object abstractpartition.o contains Build Attributes that are incompatible with the provided attributes.
Tag_DSP_extension = This code was permitted to use Thumb DSP functions as an optional architecture extension above the base architecture as indicated by Tag_CPU_arch (=1)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The solution is to add the DSP tag in your .uvprojx project file (in the /Project/Targets/Target/TargetOption/TargetCommonOption/Cpu XML-element):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-14}",
    "{14-14}": true
  }), `<Targets>
    <Target>
      <TargetName>STM32U575ZI_NUCLEO</TargetName>
      <ToolsetNumber>0x4</ToolsetNumber>
      <ToolsetName>ARM-ADS</ToolsetName>
      <pCCUsed>6120000::V6.12::.\\ARMCLANG</pCCUsed>
      <uAC6>1</uAC6>
      <TargetOption>
        <TargetCommonOption>
          <Device>STM32U575ZITx</Device>
          <Vendor>STMicroelectronics</Vendor>
          <PackID>Keil.STM32U5xx_DFP.2.0.0</PackID>
          <PackURL>https://www.keil.com/pack/</PackURL>
          <Cpu>IRAM(0x20000000-0x200BFFFF) IROM(0x08000000-0x81FFFFF) CLOCK(8000000) FPU3(SFPU) CPUTYPE("Cortex-M33") ELITTLE TZ DSP</Cpu>
          <FlashUtilSpec></FlashUtilSpec>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "logonserver-environment-variable"
  }), `LOGONSERVER environment variable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We have observed on a few computers that the TouchGFX is very slow (e.g. "Run simulator" does nothing for 30 seconds). It may help to set the environment variable LOGONSERVER to an empty value.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In bash, the command is:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `export LOGONSERVER=
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-19-0"
  }), `TouchGFX 4.19.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u65B0\u3057\u3044\u64CD\u4F5C\u65B9\u6CD5"
  }), `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u65B0\u3057\u3044\u64CD\u4F5C\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX 4.18.1\u304B\u3089TouchGFX 4.19.0\u306B\u5411\u3051\u3066\u3001\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u4F7F\u7528\u65B9\u6CD5\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u304C\u8A2D\u3051\u3089\u308C\u3001\u30BC\u30ED\u500B\u4EE5\u4E0A\u306E\u8A00\u8A9E\u56FA\u6709\u306E\u8A2D\u5B9A\u304C\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5185\u5BB9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/ja/docs/development/ui-development/designer-user-guide/texts-view"
  }), `Designer\u306E\u30AC\u30A4\u30C9`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u56FA\u6709\u306E\u5411\u304D\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u306A\u308A\u3001\u3053\u308C\u3089\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u65B0\u3057\u3044\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u8A00\u8A9E\u56FA\u6709\u306E\u8A2D\u5B9A\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002 \u3053\u306E\u65B0\u3057\u3044\u6A5F\u80FD\u306B\u3088\u308A\u3001\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u7528\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9\u304C\u5F71\u97FF\u3092\u53D7\u3051\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u7528\u306E\u30D5\u30A9\u30F3\u30C8ID\u3068\u3001\u5404\u8A00\u8A9E\u56FA\u6709\u306E\u8A2D\u5B9A\u3054\u3068\u306B\u30D5\u30A9\u30F3\u30C8ID\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u8A00\u8A9E\u56FA\u6709\u306E\u8A2D\u5B9A\u304B\u3089\u751F\u6210\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8ID\u306F\u3001\u4E0B\u306E\u4F8B\u306B\u793A\u3059\u3088\u3046\u306B\u81EA\u52D5\u7684\u306B\u547D\u540D\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/text-specific-direction.png",
    mdxType: "Figure"
  }, "TouchGFX 4.18\u306B\u304A\u3051\u308B\u3001\u56FA\u6709\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u5411\u304D\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "\u4F8B-\u81EA\u52D5\u751F\u6210\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8id"
  }), `\u4F8B: \u81EA\u52D5\u751F\u6210\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8ID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3ID: HEADLINE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A00\u8A9E\u56FA\u6709\u306E\u8A2D\u5B9A: JPN`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u3063\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/include/fonts/ApplicationFontProvider.hpp`), `\u30672\u3064\u306E\u30D5\u30A9\u30F3\u30C8ID\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `struct TypographyFontIndex
{
    static const touchgfx::FontId HEADLINE = 0;
    static const touchgfx::FontId HEADLINE_AUTO_GENERATED_FOR_JPN = 1;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "4190\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6642\u306B\u81EA\u52D5\u751F\u6210\u3055\u308C\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3"
  }), `4.19.0\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6642\u306B\u81EA\u52D5\u751F\u6210\u3055\u308C\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u8FF0\u3057\u305F\u3088\u3046\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u56FA\u6709\u306E\u5411\u304D\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u306E\u6A5F\u80FD\u5909\u66F4\u306E\u7D50\u679C\u3001\u53E4\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u304B\u3089\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6642\u306B\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3068\u8A00\u8A9E\u56FA\u6709\u306E\u8A2D\u5B9A\u306B\u3088\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u751F\u6210\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u81EA\u52D5\u751F\u6210\u3055\u308C\u305F\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306F\u3001\u305D\u308C\u305E\u308C\u306EID\u306B\u3088\u3063\u3066\u8B58\u5225\u3067\u304D\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u306E\u5411\u304D\u306F\u3001\u63A5\u5C3E\u6587\u5B57\u307E\u305F\u306FA\uFF5EZ\u306E\u7BC4\u56F2\u306E\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Headline_LTR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PosterText_RTL`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Title_A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonText_B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "\u30E6\u30FC\u30B6\u30B3\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30F3\u30C8id\u306E\u53C2\u7167"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30F3\u30C8ID\u306E\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u30D5\u30A9\u30F3\u30C8ID\u3092\u53C2\u7167\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30D5\u30A9\u30F3\u30C8ID\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002 \u30D5\u30A9\u30F3\u30C8ID\u304C\u30B7\u30F3\u30DC\u30EB\u3067\u306F\u306A\u304F\u5024\u306B\u3088\u3063\u3066\u53C2\u7167\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6642\u306B\u30D5\u30A9\u30F3\u30C8ID\u304C\u5909\u66F4\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u305F\u3081\u3001\u30A8\u30E9\u30FC\u306E\u30EA\u30B9\u30AF\u304C\u751F\u3058\u308B\u304B\u3089\u3067\u3059\u3002 \u30D5\u30A9\u30F3\u30C8ID\u306F\u3001\u5E38\u306B\u30B7\u30F3\u30DC\u30EB\u306B\u3088\u3063\u3066\u53C2\u7167\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0`), `\u3067\u306F\u306A\u304F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypographyFontIndex::HEADLINE`), `\u3092\u4F7F\u7528\u3059\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "armclang\u306B\u3088\u308Blibjpeg\u306E\u4F7F\u7528"
  }), `ARMCLANG\u306B\u3088\u308BLibJPEG\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX\u3067LibJPEG\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001ARMCLANG\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3002 LibJPEG\u306Flibc\u30D5\u30A1\u30A4\u30EB\u95A2\u6570\uFF08fopen\u306A\u3069\uFF09\u3092\u53C2\u7167\u3059\u308B\u306E\u3067\u3001ARMCLANG\u306F\u30BB\u30DF\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `\u30BB\u30DF\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u304C\u6709\u52B9\u306B\u306A\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u8D77\u52D5\u6642\u306B\u3001\u30BB\u30DF\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u3092\u8A8D\u8B58\u3059\u308B\u30C7\u30D0\u30C3\u30AC\u3078\u306E\u63A5\u7D9A\u3092\u5F85\u6A5F\u3055\u305B\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `\u3053\u306E\u554F\u984C\u3092\u89E3\u6D88\u3059\u308B1\u3064\u306E\u65B9\u6CD5\u306F\u3001LibJPEG\u5185\u306Efopen\u3078\u306E\u53C2\u7167\u3092\u524A\u9664\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LibJPEG/source/jdatasrc.c`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LibJPEG/source/jdatadst.c`), `\u3068\u3044\u30462\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u3067\u3001JFILE\u3092\u672A\u5B9A\u7FA9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "LibJPEG/source/jdatasrc.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `#include "jerror.h"

#undef JFILE

/* Expanded data source object for stdio input */
#ifdef JFILE 
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "LibJPEG/source/jdatadst.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `#include "jerror.h"

#undef JFILE

#ifndef HAVE_STDLIB_H       /* <stdlib.h> should declare malloc(),free() */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "h750b-discovery\u4E0A\u306Emjpeg\u30D3\u30C7\u30AA"
  }), `H750B Discovery\u4E0A\u306EMJPEG\u30D3\u30C7\u30AA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `H750B Discovery\u30DC\u30FC\u30C9\u306F\u3001YCbCr\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30DC\u30FC\u30C9\u306B\u5BFE\u3057\u3066TouchGFX\u304B\u3089\u63D0\u4F9B\u3055\u308C\u308B\u30B3\u30FC\u30C9\u5185\u306E\u30D0\u30B0\u306B\u3088\u308A\u3001\u4E00\u90E8\u306E\u30D3\u30C7\u30AA\u3067\u306F\u8996\u899A\u7684\u306A\u4E71\u308C\u304C\u767A\u751F\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `\u3053\u308C\u3092\u89E3\u6D88\u3059\u308B\u306B\u306F\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30C7\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u5909\u66F4\u3057\u307E\u3059\u3002 \u4E00\u90E8\u306E\u30B1\u30FC\u30B9\u3067\u306F\u3001\u30D3\u30C7\u30AA\u306E\u5E45\u3092\u6570\u30D4\u30AF\u30BB\u30EB\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u554F\u984C\u3092\u89E3\u6D88\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "threadx\u30A2\u30BB\u30F3\u30D6\u30E9\u30D5\u30A1\u30A4\u30EB"
  }), `ThreadX\u30A2\u30BB\u30F3\u30D6\u30E9\uFF65\u30D5\u30A1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Keil IDE\u7528\u306EThreadX\u30A2\u30BB\u30F3\u30D6\u30E9\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u65B0\u3057\u3044ARMCLANG V6\u30A2\u30BB\u30F3\u30D6\u30E9\u69CB\u6587\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u4E00\u90E8\u306E\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30AF\u3067\u63D0\u4F9B\u3055\u308C\u308Bstartup.s\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u53E4\u3044ARMCC\u30A2\u30BB\u30F3\u30D6\u30E9\u306E\u69CB\u6587\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002  \u3064\u307E\u308A\u3001\u901A\u5E38\u3001ARMCLANG V6\u30A2\u30BB\u30F3\u30D6\u30E9\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8A2D\u5B9A\u3057\u3001\u3053\u308C\u3092startup_stm32xxx.s\u3067\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-assembler.png",
    mdxType: "Figure"
  }, "startup.s\u306B\u5BFE\u3059\u308BARMCLANG V6\u30A2\u30BB\u30F3\u30D6\u30E9\u306E\u9078\u629E\u89E3\u9664"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-18-0"
  }), `TouchGFX 4.18.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "issues-with-cubemx-610-and-cubeprogrammer-26"
  }), `CubeMX 6.1.0\u304A\u3088\u3073CubeProgrammer 2.6\u306B\u3088\u308B\u554F\u984C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX 6.1.0\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306F\u73FE\u5728\u3001CubeMX\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308BEWARM\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304CX-CUBE-TOUCHGFX\u3067\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u3001"C/C++ Compiler" / "Language"\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3001"Auto"\u3092"C++"\u306B\u5909\u66F4\u3059\u308B\u3068\u3044\u3046\u9593\u9055\u3044\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u304A\u308A\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u304B\u3089\u3067\u3059\u3002 \u3053\u306E\u554F\u984C\u306FCubeMX 6.1.1\u3067\u4FEE\u6B63\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059\u3002 \u305D\u308C\u307E\u3067\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u624B\u52D5\u3067"Auto"\u306B\u623B\u3059\u3068\u30B3\u30F3\u30D1\u30A4\u30EB\u306E\u554F\u984C\u306F\u89E3\u6C7A\u3057\u307E\u3059\u3002\u305F\u3060\u3057\u3001CubeMX\u304B\u3089\u306E\u30B3\u30FC\u30C9\u751F\u6210\u306B\u623B\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8\u30ED\u30FC\u30C0\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.stldr`), `\uFF09\u306E\u53C2\u7167\u65B9\u6CD5\u306B\u95A2\u9023\u3059\u308BCubeProgrammer 2.6\u306E\u30D0\u30B0\u306B\u3088\u308A\u3001\u65E2\u5B58\u306E\u3059\u3079\u3066\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF08AT\uFF09\u306EMakefile\u304C\u58CA\u308C\u3001TouchGFX Designer\u306E"Run Target"\u6A5F\u80FD\u3082\u6B63\u3057\u304F\u6A5F\u80FD\u3057\u307E\u305B\u3093\u3002 \u3053\u306E\u554F\u984C\u306F\u3001AT\u306E\u73FE\u5728\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30D9\u30FC\u30B9\u306B\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3082\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306F\u3001\u3053\u306E\u30D0\u30B0\u3092\u4FEE\u6B63\u3059\u308B\u305F\u3081\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u9069\u7528\u3057\u3001CubeProgrammer 2.5\u304A\u3088\u30732.6\u306E\u4E21\u65B9\u3067\u6A5F\u80FD\u3059\u308B\u3088\u3046\u306B\u306A\u308B\u4E88\u5B9A\u3067\u3059\u3002 CubeProgrammer 2.6\u3067\u6A5F\u80FD\u3057\u306A\u3044AT\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308B\u5834\u5408\u306F\u3001\u4EE5\u4E0B\u306E\u5909\u66F4\u3092\u884C\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u306F\u5916\u90E8\u30ED\u30FC\u30C0\u3078\u306E\u53C2\u7167\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bin`), `\u30D5\u30A9\u30EB\u30C0\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32CubeProgrammer_CLI.exe`), `\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4E00\u822C\u7684\u306B\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30D5\u30A9\u30EB\u30C0\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `bin`), `\u30D5\u30A9\u30EB\u30C0\u3078\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `cd`), `\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.stldr`), `\u30D5\u30A1\u30A4\u30EB\u3078\u306Erelative\u53C2\u7167\u3092\u4F7F\u7528\u3057\u3066\u3001\u63A5\u7D9A\u3055\u308C\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u3092\u30D7\u30ED\u30B0\u30E9\u30E0\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `@cd "$(st_stm32cube_programmer_bin_path)" && ./$(stm_stm32cube_programmer_exe) -c port=SWD -d $(application_path)/$(binary_output_path)/target.hex -el $(stm32cubeLoader_relative_path) -hardRst
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "CubeProgrammer\u306E\u30D0\u30B0\u306F\u3001\u30D0\u30FC\u30B8\u30E7\u30F32.10\u3067\u89E3\u6C7A\u3055\u308C\u307E\u3057\u305F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "new-touchgfx-format"
  }), `\u65B0\u3057\u3044.touchgfx\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX 4.17.0\u304B\u3089TouchGFX 4.18.0\u306B\u5411\u3051\u3066\u3001.touchfgx\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u304C2\u3064\u306E\u4E3B\u8981\u9818\u57DF\u306B\u304A\u3044\u3066\u5927\u5E45\u306B\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u305F\u3081\u3001TouchGFX Designer\u3092\u4F7F\u7528\u3057\u3066.touchgfx\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u3044\u3066\u4FDD\u5B58\u3059\u308B\u3060\u3051\u3067\u3001.touchfgx\u30D5\u30A1\u30A4\u30EB\u304C\u5927\u304D\u304F\u66F4\u65B0\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4E3B\u8981\u306A\u5909\u66F4\u304C\u884C\u308F\u308C\u305F\u306E\u306F\u4EE5\u4E0B\u306E\u9818\u57DF\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "default-values-are-not-written-to-touchgfx"
  }), `\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u304C.touchgfx\u306B\u66F8\u304D\u8FBC\u307E\u308C\u306A\u3044`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u307E\u3067\u306F\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30AA\u30D5\u30BB\u30C3\u30C8\uFF08X=0, Y=0\uFF09\u3084\u9ED2\u8272\uFF08red=0, green=0, blue=0\uFF09\u306A\u3069\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u304C\u8A2D\u5B9A\u3055\u308C\u305F\u72B6\u614B\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30D1\u30E9\u30E1\u30FC\u30BF\u304C.touchgfx\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u8FBC\u307E\u308C\u3066\u3044\u307E\u3057\u305F\u304C\u3001TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F34.18.0\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u5024\u304C\u66F8\u304D\u8FBC\u307E\u308C\u307E\u305B\u3093\u3002 \u3053\u308C\u306B\u3088\u308A\u3001.touchgfx\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA\u304C\u5C11\u3057\u5C0F\u3055\u304F\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "removed-textentries-block"
  }), `TextEntries\u30D6\u30ED\u30C3\u30AF\u306E\u524A\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SingleUseId\u306E\u540D\u524D\u304C\u5909\u66F4\u3055\u308C\u3001\u9023\u7D9A\u756A\u53F7\u3067\u306F\u306A\u304F\u30E9\u30F3\u30C0\u30E0\u306A\u756A\u53F7\u3068\u6587\u5B57\u304C\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3068\u8907\u6570\u306E\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u958B\u767A\u8005\u3068\u306E\u30DE\u30FC\u30B8\u304C\u5BB9\u6613\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u65B0\u3057\u3044\u30B7\u30F3\u30B0\u30EB\uFF65\u30E6\u30FC\u30B9\u306E\u30C6\u30AD\u30B9\u30C8ID\u304C\u540C\u3058ID\u3092\u53D6\u5F97\u3057\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u3055\u3089\u306B\u3001.touchgfx\u5185\u306E"TextEntries"\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u305F\u305F\u3081\u3001.touchgfx\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA\u304C\u5927\u5E45\u306B\u7E2E\u5C0F\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd16bpp-fillrect-and-lcd16bpp-drawglyph"
  }), `LCD16bpp::fillRect\u3068LCD16bpp::drawGlyph`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCD16bpp\u306EfillRect\u304A\u3088\u3073drawGlyph\u95A2\u6570\u304C\u3001\u8EFD\u6E1B\u3055\u308C\u305F16\u30D3\u30C3\u30C8\uFF08RGB565\uFF09\u30AB\u30E9\u30FC\u3067\u306F\u306A\u304F\u3001\u5B8C\u5168\u306A24\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u3092DMA\u306B\u6E21\u3059\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u306E\u305F\u3081\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u306F\u306A\u304F\uFF09\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u306F\u8AA4\u3063\u305F\u8272\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001CubeMX\u304B\u3089DMA\u30AF\u30E9\u30B9\u3092\u518D\u751F\u6210\u3059\u308B\u3053\u3068\u3067\u4FEE\u6B63\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "makefile-and-xlsx"
  }), `Makefile\u3068xlsx`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX 4.18.0\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3068\u7FFB\u8A33\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u3001\u4EE5\u524D\u4F7F\u7528\u3055\u308C\u3066\u3044\u305F\u53E4\u3044.xlsx\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u306A\u304F\u3001\u65B0\u3057\u3044.xml\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001Makefile\u3068Visual Studio\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E"texts.xlsx"\u3078\u306E\u3059\u3079\u3066\u306E\u53C2\u7167\u3092"texts.xml"\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u53E4\u3044texts.xlsx\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u3066\u3044\u3066texts.xml\u304C\u5B58\u5728\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3067\u3082\u3001TextConvert\u30C4\u30FC\u30EB\u306F\u3053\u308C\u3092\u8A8D\u8B58\u3057\u3066\u3001\u5C06\u6765\u306E\u4F7F\u7528\u306E\u305F\u3081\u306Btexts.xlsx\u3092texts.xml\u306B\u5909\u63DB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u52D5\u4F5C\u4E2D\u306EMakefile\u3092\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001TouchGFX Designer\u3092\u4F7F\u7528\u3057\u3066\u3001\u5358\u7D14\u306B\u65B0\u3057\u3044\uFF08\u7A7A\u306E\uFF09\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001generated/simulator/gcc/Makefile\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u3042\u308B\u751F\u6210\u6E08\u307F\u306EMakefile\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "textsxsd\u306E\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u306E\u5236\u9650"
  }), `texts.xsd\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u306E\u5236\u9650`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\u3067texts.xml\u3092\u6709\u52B9\u5316\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308Btexts.xsd\u3067\u306F\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u304C255\u306B\u5236\u9650\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u304C255\u3092\u4E0A\u56DE\u308B\u5834\u5408\u3001Designer\u306B\u306F\u6B21\u306E\u3088\u3046\u306A\u30A8\u30E9\u30FC\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/font-size-limit-xsd.png",
    mdxType: "Figure"
  }, "Error message - Font size limit"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u56DE\u907F\u7B56\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u9589\u3058\u3001texts.xsd\u5185\u3067\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30B5\u30A4\u30BA\u306E\u5C5E\u6027\u3092xs:unsignedByte\u304B\u3089xs:unsignedInt\u306B\u5909\u66F4\u3057\u3066\u304B\u3089\u3001\u518D\u5EA6\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sdl2-linker-error-on-linux"
  }), `Linux\u3067\u306ESDL2\u30EA\u30F3\u30AB\uFF65\u30A8\u30E9\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u304C\u4F7F\u7528\u3059\u308BSDL2\u30E9\u30A4\u30D6\u30E9\u30EA\u306F\u3001Windows\u30E6\u30FC\u30B6\u5411\u3051\u306E\u307F\u306B\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 Linux\u30E6\u30FC\u30B6\u306FSDL2\u30E9\u30A4\u30D6\u30E9\u30EA\u305D\u306E\u3082\u306E\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30BF\u30B9\u30AF\u306E\u5B9F\u884C\u306F1\u56DE\u9650\u308A\u3067\u3001ubuntu\u7528\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo apt install libsdl2-dev libsdl2-image-dev
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u308A\u3001\u958B\u767A\u7528\u306B\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u542B\u3080libsdl2\u304A\u3088\u3073libsdl2-image\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-17-0"
  }), `TouchGFX 4.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-no-longer-support-setalpha"
  }), `Painter\u3067\u306FsetAlpha()\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4E0A\u306E\u7406\u7531\u3067\u3001Canvas Widget Renderer\uFF08CWR\uFF09\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u308BPainter\u3067\u306F\u3001\u30A2\u30EB\u30D5\u30A1\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 Painter\u306E\u5B58\u5728\u3059\u308BCanvas Widget\u4E0A\u3067\u30A2\u30EB\u30D5\u30A1\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u52B9\u679C\u3092\u307E\u3060\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4E00\u822C\u7684\u306A\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u524D:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
painter.setAlpha(128);
circle.setPainter(painter);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5909\u66F4\u5F8C:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
circle.setPainter(painter);
circle.setAlpha(128);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u307E\u3067\u306BPainter\u3068Canvas Widget\u306E\u4E21\u65B9\u306B\u30A2\u30EB\u30D5\u30A1\u3092\u9069\u7528\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u3053\u308C\u30892\u3064\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u3092\u4E57\u7B97\u3057\u3001\u3055\u3089\u306B255\u3067\u9664\u7B97\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
painter.setAlpha(painterAlpha);
circle.setPainter(painter);
circle.setAlpha(circleAlpha);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` \u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
circle.setPainter(painter);
circle.setAlpha((painterAlpha * circleAlpha) / 255);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305F\u306F\u3001255\u3067\u9664\u7B97\u3059\u308B\u4EE3\u308F\u308A\u306B\u3001LCD::div255()\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-the-hal-class"
  }), `HAL\u30AF\u30E9\u30B9\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30FC\u30B8\u30E7\u30F34.17.0\u3088\u308A\u524D\u306F\u3001HAL\u3092\u307E\u3063\u305F\u304F\u4F7F\u7528\u3057\u306A\u3044TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u5185\u306E\u8907\u6570\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u3001\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EBtouchgfx/hal/HAL.hpp\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3057\u305F\u3002 \u3053\u308C\u3089\u306E\u4E0D\u8981\u306A\u53C2\u7167\u304C\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u3055\u308C\u305F\u3053\u3068\u3067\u3001\u30B3\u30F3\u30D1\u30A4\u30E9\u304CHAL\u3092\u8A8D\u77E5\u3057\u306A\u3044\u305F\u3081\u306B\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304C\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u306A\u3044\u53EF\u80FD\u6027\u304C\u51FA\u3066\u304D\u307E\u3057\u305F\u3002 \u3053\u308C\u3092\u4FEE\u6B63\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306BHAL\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u5358\u7D14\u306B\u52A0\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/hal/HAL.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3042\u308B\u3044\u306F\u3001Screen\u30AF\u30E9\u30B9\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306EgetScreenWidth()\u3068getScreenHeight()\u3068\u3044\u30462\u3064\u306E\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30B5\u30A4\u30BA\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u63A8\u5968\u3055\u308C\u308B\u65B9\u6CD5\u3067\u3001Screen\u306E\u4EFB\u610F\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u304B\u3089\u76F4\u63A5\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF08Screen1View.cpp\u306A\u3069\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "fmc-display-interface-in-touchgfx-generator"
  }), `TouchGFX Generator\u306EFMC\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3067\u65B0\u3057\u3044FMC\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001CubeMX 6.2.1\u3067\u751F\u6210\u3059\u308B\u3068\u304D\u306B\u3001FMC\u30D0\u30F3\u30AF\u306E\u30E1\u30E2\u30EA\uFF65\u30AA\u30D5\u30BB\u30C3\u30C8\u304C\u6B63\u3057\u304F\uFF08\u30BC\u30ED\u306B\uFF09\u8A2D\u5B9A\u3055\u308C\u307E\u305B\u3093\u3002 \u3053\u308C\u306FCubeMX 6.3.0\u3067\u4FEE\u6B63\u4E88\u5B9A\u3067\u3001\u30EA\u30EA\u30FC\u30B9\u6642\u70B9\u3067X-CUBE-TouchGFX\u306E\u6700\u4F4E\u9650\u5FC5\u8981\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u73FE\u5728\u306E6.2.1\u304B\u30896.3.0\u306B\u5F15\u304D\u4E0A\u3052\u3089\u308C\u308B\u4E88\u5B9A\u3067\u3059\u3002 \u305D\u308C\u307E\u3067\u306F\u3001\u30E6\u30FC\u30B6\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\u5185\u306B\u6B63\u3057\u3044FMC BANK\u30E1\u30E2\u30EA\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u307E\u3059\uFF08\u518D\u751F\u6210\u6642\u306B\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\uFF09\u3002 \u305F\u3068\u3048\u3070\u3001\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#define FMC_BANK1_REG ((uint16_t *) 0x60000000)
#define FMC_BANK1_MEM ((uint16_t *) 0x60000002)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `\u3067\u3053\u308C\u3089\u5168\u4F53\u3092\u518D\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "l8-images-in-16-24-or-32bpp-configurations"
  }), `16bpp\u300124bpp\u300132bpp\u69CB\u6210\u306EL8\u753B\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8\u753B\u50CF\u306ECLUT\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::taskYield()`), `\u304CSTM32DMA\u30AF\u30E9\u30B9\u306B\u8AA4\u3063\u3066\u5C0E\u5165\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3092\u4FEE\u6B63\u3059\u308B\u305F\u3081\u306B\u3001\u30E6\u30FC\u30B6\u306F\u4EE5\u4E0B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Users/<user name>/STM32Cube/Repository/Packs/STMicroelectronics/X-CUBE-TOUCHGFX/4.17.0/CubeMX/templates/Target`), `\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u52D5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D3\u30C3\u30C8\u6DF1\u5EA6\u306B\u57FA\u3065\u3044\u3066\u3001\u9069\u5207\u306A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `dma_Xbpp_implementation_tmp.ftl`), `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `while ((READ_REG(DMA2D->FGPFCCR) & DMA2D_FGPFCCR_START) != 0U)`), `\u30EB\u30FC\u30D7\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::taskYield()`), `\u306E\u547C\u3073\u51FA\u3057\u3092\u524A\u9664\u307E\u305F\u306F\u30B3\u30E1\u30F3\u30C8\u5316\u3057\u3001STM32CubeMX\u304B\u3089\u30B3\u30FC\u30C9\u3092\u518D\u751F\u6210\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u5909\u66F4\u5F8C\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `while ((READ_REG(DMA2D->FGPFCCR) & DMA2D_FGPFCCR_START) != 0U)
{
    // OSWrappers::taskYield();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4150"
  }), `TouchGFX 4.15.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mcu-support"
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Cortex-M33\u306FTouchGFX\u306B\u3088\u3063\u3066\u5B8C\u5168\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001CubeMX\u306B\u30B5\u30DD\u30FC\u30C8\u3092\u8FFD\u52A0\u3057\u306A\u3044\u9650\u308A\u3001\u73FE\u5728\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306ECubeMX\uFF08v6.0.1\uFF09\u3067\u306F\u3001\u30DE\u30EB\u30C1\u30FB\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u5BFE\u3057\u3066"Software Packs"\uFF08\u7279\u306BTouchGFX Generator\uFF09\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u305B\u3093\u3002 Cortex-M33\u30D9\u30FC\u30B9\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E"Trust Zone"\u3092\u7121\u52B9\u5316\u3059\u308B\u3053\u3068\u3067\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u5358\u4E00\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u5236\u9650\u3059\u308C\u3070\u3001TouchGFX Generator\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002 TrustZone\u306F\u3001User Code\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u624B\u52D5\u3067\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4140"
  }), `TouchGFX 4.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "armclang-support"
  }), `ARMCLANG\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001Cortex-M0\u3001Cortex-M4f\u3001Cortex-M7\u3001Cortex-M33\u306B\u5BFE\u3057\u3066\u3001ARMCLANG\uFF08ARM Compiler v6.x\uFF09\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u63D0\u4F9B\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u3057\u304B\u3057\u3001CubeMX\u3067\u306F\u3001ARMCLANG\u30B3\u30F3\u30D1\u30A4\u30E9\uFF08ARM Compiler v6.x\uFF09\u3092\u6709\u52B9\u5316\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u751F\u6210\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u3053\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\u3092\u4F7F\u7528\u3057\u305F\u3044\u30E6\u30FC\u30B6\u306F\u3001Keil uVision\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3\u304B\u3089\u624B\u52D5\u3067\u30B3\u30F3\u30D1\u30A4\u30E9\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX\u304B\u3089FreeRTOS\u30DF\u30C9\u30EB\u30A6\u30A7\u30A2\u3092\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001ARMCC\uFF08ARM Compiler v5.x\uFF09\u3092\u4F7F\u7528\u3059\u308B\u751F\u6210\u6E08\u307F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001ARMCLANG\u3068\u4E92\u63DB\u6027\u3092\u6301\u305F\u306A\u3044FreeRTOS portable\u30D5\u30A1\u30A4\u30EB\u3092\u6301\u3064\u3053\u3068\u306B\u306A\u308B\u305F\u3081\u3001\u3053\u308C\u3089\u3092\u624B\u52D5\u3067\u7F6E\u304D\u63DB\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 CubeMX\u304B\u3089"Generate code"\u3092\u5B9F\u884C\u3059\u308B\u3068\u5E38\u306B\u3059\u3079\u3066\u306E\u624B\u52D5\u5909\u66F4\u304C\u4E0A\u66F8\u304D\u3055\u308C\u308B\u306E\u3067\u3001\u3053\u308C\u3089\u306E\u7279\u5B9A\u306E\u5909\u66F4\u3092\u5143\u306B\u623B\u305B\u308B\u3088\u3046\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406\u4E0B\uFF08git\u306A\u3069\uFF09\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u6301\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u7D04\u3059\u308B\u3068\u3001 CubeMX\u3067\u751F\u6210\u3067\u304D\u308B\u306E\u306FARM Compiler v5.x\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u307F\u306A\u306E\u3067\u3001\u30E6\u30FC\u30B6\u306F\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406\u4E0B\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u6301\u3057\u3066\u3044\u306A\u3044\u9650\u308A\u3001CubeMX\u304B\u3089\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u305F\u3073\u306B\u4EE5\u4E0B\u306E\u5909\u66F4\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3\u3067ARM Compiler v6.x\u3092\u9078\u629E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARMCC\u30E9\u30A4\u30D6\u30E9\u30EA\uFF08CubeMX\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u3082\u306E\uFF09\u3067\u306F\u306A\u304F\u3001ARMCLANG\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u30EA\u30F3\u30AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `CubeMX\u304B\u3089FreeRTOS\u3092\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001ARM Compiler v6.x\u3068\u4E92\u63DB\u6027\u3092\u6301\u305F\u305B\u308B\u305F\u3081\u306B\u3001FreeRTOS portable\u30D5\u30A1\u30A4\u30EB\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/RVDS`), `\u30D5\u30A9\u30EB\u30C0\uFF08ARM Compiler v5.x\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\uFF09\u3067\u306F\u306A\u304F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/GCC`), `\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u53D6\u5F97\u3059\u308B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "workflow"
  }), `\u30EF\u30FC\u30AF\u30FB\u30D5\u30ED\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306F\u3001CubeMX\u3067\u751F\u6210\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3068TouchGFX ARMCLANG\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u3044\u3001Keil uVision\u306B\u3042\u308Bv6.x ARM Compiler\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Keil uVision\u3067ARMCLANG\uFF08v. 6.x\uFF09\u3092\u9078\u629E\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/armclang-support.png",
    noShadow: true,
    width: "650",
    mdxType: "Figure"
  }, "ARMCLANG\u306E\u30B5\u30DD\u30FC\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 2
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `CubeMX\u304B\u3089FreeRTOS\u3092\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u3001CubeMX\u306F\u8AA4\u3063\u305Fportable \u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u3001\u305D\u308C\u3089\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u308B\u3002 \u30E6\u30FC\u30B6\u306F\u3053\u308C\u3089\u3092\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC"
  }), `https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC`), ` (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `port.c`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portmacro.h`), `\uFF09\uFF09\u306B\u3042\u308B\u3082\u306E\u306B\u7F6E\u304D\u63DB\u3048\u308B\u304B\u3001FreeRTOS\u30EA\u30EA\u30FC\u30B9\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u305D\u306E\u4E2D\u304B\u3089\u30D5\u30A1\u30A4\u30EB\u3092\u898B\u3064\u3051\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `port.c`), `\u3092\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-port-c.png",
    noShadow: true,
    width: "250",
    mdxType: "Figure"
  }, `port.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portable/GCC`), `\u30D5\u30A9\u30EB\u30C0\uFF08\u3053\u306E\u5834\u5408\u306FCortex-M7\uFF09\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portmacro.h`), `\u3092\u542B\u3080\u3088\u3046\u306B\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-port-include.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, `Portable \u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `"Generate Code"\u5B9F\u884C\u6642\u306ETouchGFX Designer\u751F\u6210\u5F8C\u30B9\u30C6\u30C3\u30D7\u3067\u3001\u30E6\u30FC\u30B6\u304C\u9078\u629E\u3057\u305F\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u57FA\u3065\u3044\u3066\u6B63\u3057\u3044\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u81EA\u52D5\u7684\u306B\u633F\u5165\u3055\u308C\u308B\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4130"
  }), `TouchGFX 4.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bugs"
  }), `\u30D0\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "font-converter"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FontConverter\u30C4\u30FC\u30EB\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u969B\u306E\u30C6\u30AD\u30B9\u30C8\u3067\u305D\u306E\u30B0\u30EA\u30D5\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u306B\u95A2\u308F\u3089\u305A\u3001\u30D5\u30A9\u30F3\u30C8\u306E\u30EB\u30FC\u30EB\u306E\u4E00\u90E8\u3067\u3042\u308BUnicode\u7528\u306E\u30B0\u30EA\u30D5\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u304C\u751F\u6210\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u6570\u30E1\u30AC\u30D0\u30A4\u30C8\u306E\u30B0\u30EA\u30D5\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u304C\u3001\u8FFD\u52A0\u3067\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u65B0\u3057\u3044FontConverter\u30C4\u30FC\u30EB\uFF08Windows\u304A\u3088\u3073Linux\uFF09\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u3044\u30B0\u30EA\u30D5\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u306F\u751F\u6210\u3055\u308C\u306A\u304F\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u65B0\u3057\u3044\u30C4\u30FC\u30EB\u306B\u306F\u6B21\u306E\u30EA\u30F3\u30AF\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/fontconvert_fix.zip"
  }), `fontconvert_fix.zip`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u304A\u4F7F\u3044\u306E4.13.0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u30EB\u30FC\u30C8\u306B\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u5C55\u958B\u3059\u308B\u3068\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u30D0\u30A4\u30CA\u30EA\u304C\u4EE5\u4E0B\u306E\u5185\u90E8\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx\\framework\\tools`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-compiler-support"
  }), `\u8FFD\u52A0\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ARMCLANG\u30B3\u30F3\u30D1\u30A4\u30E9\uFF08v6.12\uFF09\u3067\u69CB\u7BC9\u3055\u308C\u305F\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u306F\u3001\u6B21\u306E\u30EA\u30F3\u30AF\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/touchgfx_core_clang.zip"
  }), `touchgfx_core_clang.zip`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u304A\u4F7F\u3044\u306E4.13.0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u30EB\u30FC\u30C8\u306B\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u5C55\u958B\u3059\u308B\u3068\u3001\u30E9\u30A4\u30D6\u30E9\u30EA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_core_clang.lib`), `\u304C\u4EE5\u4E0B\u306E\u5185\u90E8\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx\\lib\\core\\cortex_m7\\Keil`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility"
  }), `\u5F8C\u65B9\u4E92\u63DB\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "deprecated-features"
  }), `\u975E\u63A8\u5968\u306B\u306A\u3063\u305F\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u793A\u3059\u975E\u63A8\u5968\u306E\u6A5F\u80FD\u306F\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u30B3\u30FC\u30C9\u5185\u3067\u3053\u308C\u3089\u3092\u53C2\u7167\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A72\u5F53\u90E8\u5206\u3092\u66F8\u304D\u63DB\u3048\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u975E\u63A8\u5968\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TRANSPARENT_COL`), `\u306E\u5B9A\u7FA9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Drawable::getType()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `HAL::blitSetTransparencyKey()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `HAL::registerTextCache()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `HAL::cacheTextString()`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "texturemapper-is-disabled-by-default"
  }), `TextureMapper\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7121\u52B9\u306B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u4F7F\u7528\u3059\u308B\u30B3\u30FC\u30C9\u9818\u57DF\u3092\u524A\u6E1B\u3059\u308B\u305F\u3081\u306B\u3001TextureMapper\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 TouchGFX Designer\u306F\u3001\u3059\u3079\u3066\u306E\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3001\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u3092\u633F\u5165\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E4\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304B\u3089TouchGFX 4.13\u306B\u79FB\u884C\u3057\u3066\u304A\u308A\u3001TouchGFX 4.13\u306B\u66F4\u65B0\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u3053\u308C\u306FTouchGFX Designer\u306B\u3088\u3063\u3066\u51E6\u7406\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u304C\u624B\u52D5\u3067\u66F4\u65B0\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001TextureMapper\u3092\u6709\u52B9\u5316\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u3092\u633F\u5165\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305D\u3046\u3057\u306A\u3044\u5834\u5408\u3001TextureMapper\u306F\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u63CF\u753B\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/designer-user-guide/config-view#framework-features"
  }), `TouchGFX\u306E\u6A5F\u80FD\u306E\u8A2D\u5B9A`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "hal-sdl1-incompatible"
  }), `HAL SDL1\u3068\u306E\u975E\u4E92\u63DB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u306E\u95A2\u6570\u304C\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\uFF65\u30B3\u30FC\u30C9\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL2.cpp`), `\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001Windows\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306EHAL\u3068\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL2.cpp`), `\u3092\u4F7F\u7528\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u306F\u4F55\u306E\u5F71\u97FF\u3082\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u53E4\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF08TouchGFX 4.8.0\u3088\u308A\u524D\uFF09\u306E\u5834\u5408\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306F\u304A\u305D\u3089\u304FHALSDL\uFF08HALSDL2\u3067\u306F\u306A\u3044\uFF09\u3092\u4F7F\u7528\u3057\u3066\u307E\u3059\u3002 \u3053\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306EHAL\u306F\u3001TouchGFX\u306B\u306F\u542B\u307E\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 HALSDL\u306B\u306F\u3001\u4EE5\u524DTouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u542B\u307E\u308C\u3066\u3044\u305F2\u3064\u306E\u95A2\u6570\u304C\u6B20\u843D\u3057\u3066\u3044\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u306F\u3053\u308C\u3089\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL.cpp`), `\u306B\u624B\u52D5\u3067\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HALSDL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void simulator_enable_stdio();
void simulator_enable_stdio()
{
    HWND consoleHwnd = GetConsoleWindow(); // Get handle of console window
    if (!consoleHwnd)                      // No console window yet?
    {
        HWND activeHwnd = GetActiveWindow(); // Remember which window is active

        AllocConsole();                   // Allocate a new console
        consoleHwnd = GetConsoleWindow(); // Get handle of console window

        FILE* dummy;
        freopen_s(&dummy, "CONIN$", "r", stdin); // Redirect stdin/stdout/stderr to the new console
        freopen_s(&dummy, "CONOUT$", "w", stdout);
        freopen_s(&dummy, "CONOUT$", "w", stderr);

        SwitchToThisWindow(activeHwnd, true); // Switch back to the originally active window
    }
    if (consoleHwnd)
    {
        ShowWindow(consoleHwnd, SW_SHOW); // Show/hide it!
    }
}
void simulator_printf(const char* format, va_list pArg);
void simulator_printf(const char* format, va_list pArg)
{
    // Create a console window, if window is visible.
    simulator_enable_stdio();
    if (GetConsoleWindow()) // Only print if we have a console window
    {
        vprintf(format, pArg);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4123"
  }), `TouchGFX 4.12.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility-1"
  }), `\u5F8C\u65B9\u4E92\u63DB\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "screen-transitions"
  }), `\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB\u306E\u5B8C\u4E86\u5F8C\u306B\u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u3092\u518D\u63CF\u753B\u3057\u3066\u3044\u307E\u3057\u305F\u3002\xA0\u3053\u306E\u8FFD\u52A0\u306E\u518D\u63CF\u753B\u306B\u3088\u308A\u3001\u4E00\u90E8\u306E\u4F4E\u901F\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u554F\u984C\u304C\u767A\u751F\u3057\u3066\u3044\u307E\u3057\u305F\u3002 \u4F55\u3089\u304B\u306E\u7406\u7531\u3067\u518D\u63CF\u753B\u306E\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u95A2\u9023\u90E8\u5206\u3092\u7121\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001\u9077\u79FB\u5148\u30B9\u30AF\u30EA\u30FC\u30F3\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen::afterTransition()`), `\u4EEE\u60F3\u95A2\u6570\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container.invalidate()`), `\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "binary-fonts"
  }), `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30FC\u30CB\u30F3\u30B0\uFF65\u30C7\u30FC\u30BF\u3082\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306B\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u305F\u3081\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002 \u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u518D\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u53E4\u3044\u30D5\u30A1\u30A4\u30EB\u306F\u6B63\u3057\u304F\u6A5F\u80FD\u3057\u306A\u3044\u305F\u3081\u3067\u3059\u3002 Makefile\u306E\u8A2D\u5B9A\u65B9\u6CD5\u306B\u3088\u3063\u3066\u306F\u3001\u3053\u308C\u306F\u901A\u5E38\u3059\u3079\u3066\u306E\u30A2\u30BB\u30C3\u30C8\u3092\u518D\u751F\u6210\u3059\u308B\u3053\u3068\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `make -f simulator/gcc/Makefile clean assets`), `\u306A\u3069\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4110"
  }), `TouchGFX 4.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility-2"
  }), `\u5F8C\u65B9\u4E92\u63DB\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/include/touchgfx/lcd/LCD.hpp`), `\u3067\u306F\u3001\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u8AA4\u3063\u3066\u633F\u5165\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/hal/HAL.hpp`), `\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u305F\u3081\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD.hpp`), `\u3092\u542B\u3093\u3067\u3044\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL.hpp`), `\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3082\u4F7F\u7528\u3057\u3066\u3044\u308B\u30D5\u30A1\u30A4\u30EB\u3067\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u89E3\u6C7A\u7B56\u3068\u3057\u3066\u3001\u30D5\u30A1\u30A4\u30EB\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/include/touchgfx/hal/HAL.hpp`), `\u3082\u542B\u3081\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4100"
  }), `TouchGFX 4.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "upgrading-from-49x"
  }), `4.9.x\u304B\u3089\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30FC\u30B8\u30E7\u30F34.10.0\u304B\u3089\u3001TouchGFX\u306FSTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u307F\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E4\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u66F4\u65B0\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u4EE5\u4E0B\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u3067\u3001\u4EE5\u4E0B\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3057\u3066\u3001STM32\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u5B9F\u884C\u4E2D\u3067\u3042\u308B\u3053\u3068\u3092TouchGFX\u306B\u8A8D\u77E5\u3055\u305B\u307E\u3059\u3002 \u6700\u9069\u306A\u5834\u6240\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BoardConfiguration.cpp`), `\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `hw_init()`), `\u95A2\u6570\u306E\u672B\u5C3E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BoardConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void hw_init() {
    ...
    //Enable CRC engine for STM32 Lock check
    __HAL_RCC_CRC_CLK_ENABLE();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility-3"
  }), `\u5F8C\u65B9\u4E92\u63DB\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3055\u308C\u306A\u3044\u30D5\u30A1\u30A4\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\\touchgfx\\framework\\include\\touchgfx\\canvas_widget_renderer\\RGBA8.hpp`), `\u304C\u3001\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "project-updater-issue"
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u306E\u554F\u984C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u308BIAR\u304A\u3088\u3073Keil\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u3067\u3001\u5BFE\u5FDC\u3059\u308BIDE\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30D5\u30A1\u30A4\u30EB\uFF65\u30EC\u30D9\u30EB\u306E\u6700\u9069\u5316\u304C\u7121\u8996\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "textarea-and-chromart-dma2d"
  }), `TextArea\u304A\u3088\u3073ChromART\uFF08DMA2D\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ChromART\u3092\u542B\u3080TextAreas\u306E\u63CF\u753B\uFF08TextArea\u304C\u6700\u4E0A\u4F4D\u306E\u8981\u7D20 / \u6700\u5F8C\u306B\u63CF\u753B\u3055\u308C\u308B\u5834\u5408\uFF09\u306B\u3088\u3063\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u65E9\u3059\u304E\u308B\u30ED\u30C3\u30AF\u89E3\u9664\u304C\u767A\u751F\u3057\u3001\u7D9A\u3044\u3066\u73FE\u5728\u306E\u8868\u793A\u30D5\u30EC\u30FC\u30E0\u3078\u4E0D\u5B8C\u5168\u306A\u72B6\u614B\u3067\u306E\u5B8C\u4E86 / \u8EE2\u9001\u304C\u767A\u751F\u3057\u307E\u3059\u3002 TouchGFX\u306B\u3088\u3063\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3089\u3001\u3059\u3079\u3066\u306E\u63CF\u753B\u64CD\u4F5C\uFF08DMA\u64CD\u4F5C\u3092\u542B\u3080\uFF09\u306F\u3059\u3067\u306B\u5B8C\u4E86\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3068\u3053\u308D\u304C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u9069\u5207\u306A\u4FDD\u8B77\u65B9\u6CD5\u306B\u304A\u3044\u3066TextArea\u306B\u3088\u308B\u53D6\u308A\u6C7A\u3081\u9055\u53CD\u304C\u3042\u308B\u305F\u3081\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u304C\u8FD4\u3055\u308C\u305F\u5F8C\u3082DMA\u64CD\u4F5C\u3092\u7D9A\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u53D6\u308A\u6C7A\u3081\u4E8B\u9805\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30ED\u30C3\u30AF\uFF08\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u4F55\u304B\u3092\u63CF\u753B\u3002\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30ED\u30C3\u30AF\u89E3\u9664\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305F\u306F\u3001DMA\u64CD\u4F5C\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u3001\u3053\u306E\u5834\u5408\u306B\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u540C\u671F\u304C\u81EA\u52D5\u7684\u306B\u51E6\u7406\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `4.10.0\u306ETextArea\u3067\u306F\u3053\u306E2\u3064\u306E\u624B\u9806\u304C\u6DF7\u3056\u3063\u3066\u3044\u308B\u306E\u3067\u3001TextArea\u304C\u73FE\u5728\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6700\u4E0A\u4F4D\u8981\u7D20\uFF08\u6700\u5F8C\u306B\u63CF\u753B\u3055\u308C\u308B\u3082\u306E\uFF09\u3067\u3042\u308B\u5834\u5408\u3001\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3059\u3002 \u3053\u306E\u30D0\u30B0\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u3092\u624B\u52D5\u3067\u30AC\u30FC\u30C9\u3059\u308B\u3053\u3068\u3067\u4FEE\u6B63\u3067\u304D\u307E\u3059\uFF08F4 HAL\u306B\u57FA\u3065\u304F\uFF09\u3002 \u3053\u308C\u306B\u3088\u308A\u3001ChromART\u64CD\u4F5C\u304C\u307E\u3060\u51E6\u7406\u4E2D\u3067\u3042\u308C\u3070\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u306F\u8FD4\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002\xA0\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void STM32F4HAL::endFrame()
{
    if (dma.isDMARunning())
    {
        OSWrappers::tryTakeFrameBufferSemaphore();
    }
    HAL::endFrame();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-490"
  }), `TouchGFX 4.9.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "upgrading-from-480"
  }), `4.8.0\u304B\u3089\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u5C0E\u5165\u306B\u3088\u308A\u3001\u30DC\u30FC\u30C9\uFF65\u30B5\u30DD\u30FC\u30C8\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u30B3\u30A2\uFF65\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u304B\u3089\u672C\u8CEA\u7684\u306B\u5206\u96E2\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u306E\u3067\u30014.9.0\u3067\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx`), `\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u591A\u6570\u306E\u4F4E\u30EC\u30D9\u30EB\uFF65\u30C9\u30E9\u30A4\u30D0\u3084\u305D\u306E\u4ED6\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u4EE3\u308F\u308A\u306B\u3001\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304B\u3089\u63D0\u4F9B\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u305F\u3060\u3057\u3053\u308C\u306F\u3001touchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u7F6E\u304D\u63DB\u3048\u308B\u3060\u3051\u3067\u306F4.9.0\u306B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3067\u304D\u306A\u3044\u3053\u3068\u3082\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002\u3044\u304F\u3064\u304B\u306EBSP\u30D5\u30A1\u30A4\u30EB\u304C\u6B20\u843D\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002 \u4EE3\u308F\u308A\u306B\u3001TouchGFX Designer\u304C\u81EA\u52D5\u7684\u306B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306F2\u3064\u306E\u7570\u306A\u308B\u65B9\u6CD5\u3067\u5B9F\u884C\u53EF\u80FD\u306A\u306E\u3067\u3001\u30E6\u30FC\u30B6\u306F\u81EA\u5206\u306B\u6700\u9069\u306A\u65B9\u6CD5\u3092\u6C7A\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306E\u524D\u306B\u306F\u3001\u5FC5\u305A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u53D6\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-1-retain-original-file-structure"
  }), `\u65B9\u6CD51: \u5143\u306E\u30D5\u30A1\u30A4\u30EB\u69CB\u9020\u3092\u7DAD\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u65B9\u6CD5\u306F\u3001\u5358\u7D14\u306B\u65B0\u3057\u30444.9.0 Designer\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u3053\u3068\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 TouchGFX Designer\u304B\u3089\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3092\u884C\u3046\u304B\u3069\u3046\u304B\u5C0B\u306D\u3089\u308C\u308B\u306E\u3067\u3001OK\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001TouchGFX Designer\u304C\u5FC5\u8981\u306A\u5909\u66F4\u3092\u9069\u7528\u3057\u307E\u3059\u3002 TouchGFX Designer\u306F\u4EE5\u4E0B\u306E\u64CD\u4F5C\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5727\u7E2E\u3055\u308C\u305F\u65B0\u3057\u3044touchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30A2\u30F3\u30D1\u30C3\u30AF\u3057\u3001\u3053\u308C\u3068\u4E00\u81F4\u3059\u308B\u3088\u3046\u306BTouchGFX\u306E\u30D1\u30B9\u3092\u5909\u66F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `touchgfx\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u524A\u9664\u3057\u305F\u3059\u3079\u3066\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u30A2\u30F3\u30D1\u30C3\u30AF\u3057\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u5F15\u304D\u7D9A\u304D\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u306F\u3001\u307B\u307C\u3059\u3079\u3066\u304C\u4EE5\u524D\u3068\u540C\u3058\u72B6\u614B\u306B\u306A\u308B\u306E\u3067\u3001\u4EE5\u524D\u306E\u30D5\u30A1\u30A4\u30EB\u69CB\u9020\u304C\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u9069\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u6700\u3082\u7C21\u5358\u306A\u9078\u629E\u306B\u306A\u308A\u307E\u3059\u3002 \u4E3B\u306A\u6B20\u70B9\u306F\u3001\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u901F\u5EA6\u30A2\u30C3\u30D7\u306E\u6069\u6075\u3092\u53D7\u3051\u3089\u308C\u306A\u3044\u3053\u3068\u3067\u3059\u3002\u3053\u308C\u306F\u3001\u500B\u3005\u306E\u30D5\u30A1\u30A4\u30EB\u3067\u306F\u306A\u304F\u3001\u753B\u50CF\u30D5\u30A9\u30EB\u30C0\u306B\u5BFE\u3057\u3066\u4F5C\u696D\u3059\u308B\u305F\u3081\u3067\u3059\u3002 \u305F\u3060\u3057\u3001makefile\u3092\u624B\u52D5\u3067\u5909\u66F4\u3057\u3066\u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-2-import-into-new-template"
  }), `\u65B9\u6CD52: \u65B0\u3057\u3044\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3078\u306E\u30A4\u30F3\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u65B0\u3057\u3044\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF65\u30D9\u30FC\u30B9\u306E\u30D5\u30A1\u30A4\u30EB\u7DE8\u6210\u306B\u79FB\u884C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u307E\u305A\u4E0A\u8A18\u306E\u65B9\u6CD51\u3092\u4F7F\u7528\u3057\u3066\u3001Designer\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3057\u307E\u3059\u3002 \u6B21\u306B\u3001\u9069\u5207\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3001\u307E\u305F\u306F\u4F7F\u7528\u3059\u308B\u8A55\u4FA1\u30DC\u30FC\u30C9\u3068\u5408\u81F4\u3059\u308B\u3082\u306E\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 Designer\u3067\u3053\u306E\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u3044\u3066\u3001\u30C8\u30C3\u30D7\uFF65\u30E1\u30CB\u30E5\u30FC\u306B\u79FB\u52D5\u3057\u3001"Edit -> Import GUI"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u30C0\u30A4\u30A2\u30ED\u30B0\uFF65\u30DC\u30C3\u30AF\u30B9\u3067\u3001\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E.touchgfx\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u3053\u308C\u3067\u3001Designer\u304C\u3059\u3079\u3066\u306EUI\u30D5\u30A1\u30A4\u30EB\uFF08\u30A2\u30BB\u30C3\u30C8\u3092\u542B\u3080\uFF09\u3092\u3001\u65B0\u3057\u304F\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u81EA\u52D5\u7684\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 GUI\u30D5\u30A9\u30EB\u30C0\u4EE5\u5916\u306B\u8FFD\u52A0\u3057\u305F\u30B3\u30FC\u30C9\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u305D\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u624B\u52D5\u3067\u30B3\u30D4\u30FC\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-3-manual-upgrade-without-designer"
  }), `\u65B9\u6CD53: Designer\u3092\u4F7F\u7528\u305B\u305A\u306B\u624B\u52D5\u3067\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308Btouchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u30014.9.0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306B\u3042\u308B\u3082\u306E\u3068\u7F6E\u304D\u63DB\u3048\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://ftp.draupnergraphics.com/TouchGFX/Evaluation/4.9.0/Qll3iKK54AnJer7XRNm2/fw_delta_4.8.0_4.9.0.zip"
  }), `\u3053\u306Ezip\u30D5\u30A1\u30A4\u30EB`), `\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3001touchgfx\u30D5\u30A9\u30EB\u30C0\u306B\u30A2\u30F3\u30D1\u30C3\u30AF\u3057\u3001\u524A\u9664\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3092\u5FA9\u5143\u3059\u308B\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);