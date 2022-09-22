"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5719],{

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

/***/ 6461:
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
  title: "\u5DF2\u77E5\u95EE\u9898"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/known-issues",
  "id": "miscellaneous/known-issues",
  "title": "\u5DF2\u77E5\u95EE\u9898",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/known-issues.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/known-issues",
  "permalink": "/4.20/zh-CN/docs/miscellaneous/known-issues",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "known-issues",
    "title": "\u5DF2\u77E5\u95EE\u9898"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u83B7\u53D6\u5E2E\u52A9",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/getting-help"
  },
  "next": {
    "title": "\u4FEE\u8BA2\u65E5\u5FD7",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/changelog"
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
  value: "New way of working with typographies",
  id: "new-way-of-working-with-typographies",
  level: 3
}, {
  value: "Example: Auto generated font ids",
  id: "example-auto-generated-font-ids",
  level: 4
}, {
  value: "Auto generated typographies when upgrading to 4.19.0",
  id: "auto-generated-typographies-when-upgrading-to-4190",
  level: 4
}, {
  value: "Referencing font ids in user code",
  id: "referencing-font-ids-in-user-code",
  level: 4
}, {
  value: "Using LibJPEG with ARMCLANG",
  id: "using-libjpeg-with-armclang",
  level: 3
}, {
  value: "MJPEG Video on H750B Discovery",
  id: "mjpeg-video-on-h750b-discovery",
  level: 3
}, {
  value: "ThreadX assembler files",
  id: "threadx-assembler-files",
  level: 3
}, {
  value: "TouchGFX 4.18.0",
  id: "touchgfx-4-18-0",
  level: 2
}, {
  value: "CubeMX 6.1.0\u548CCubeProgrammer 2.6\u7684\u95EE\u9898",
  id: "issues-with-cubemx-610-and-cubeprogrammer-26",
  level: 3
}, {
  value: "\u65B0\u7684.touchgfx\u683C\u5F0F",
  id: "new-touchgfx-format",
  level: 3
}, {
  value: "\u9ED8\u8BA4\u503C\u4E0D\u518D\u5199\u5165 .touchgfx\u6587\u4EF6",
  id: "default-values-are-not-written-to-touchgfx",
  level: 4
}, {
  value: "\u5220\u9664\u4E86TextEntries\u5757",
  id: "removed-textentries-block",
  level: 4
}, {
  value: "LCD16bpp::fillRect\u4E0ELCD16bpp::drawGlyph",
  id: "lcd16bpp-fillrect-and-lcd16bpp-drawglyph",
  level: 3
}, {
  value: "Makefile\u548Cxlsx",
  id: "makefile-and-xlsx",
  level: 3
}, {
  value: "Font size limit in texts.xsd",
  id: "font-size-limit-in-textsxsd",
  level: 3
}, {
  value: "Linux\u4E0A\u7684SDL2\u94FE\u63A5\u5668\u9519\u8BEF",
  id: "sdl2-linker-error-on-linux",
  level: 3
}, {
  value: "TouchGFX 4.17.0",
  id: "touchgfx-4-17-0",
  level: 2
}, {
  value: "\u7ED8\u56FE\u5DE5\u5177\u4E0D\u518D\u652F\u6301setAlpha()",
  id: "painters-no-longer-support-setalpha",
  level: 3
}, {
  value: "\u4F7F\u7528HAL\u7C7B",
  id: "using-the-hal-class",
  level: 3
}, {
  value: "TouchGFX Generator\u4E2D\u7684FMC\u663E\u793A\u63A5\u53E3",
  id: "fmc-display-interface-in-touchgfx-generator",
  level: 3
}, {
  value: "16-24\u621632bpp\u914D\u7F6E\u7684L8\u56FE\u50CF",
  id: "l8-images-in-16-24-or-32bpp-configurations",
  level: 3
}, {
  value: "TouchGFX 4.15.0",
  id: "touchgfx-4150",
  level: 2
}, {
  value: "\u652F\u6301\u7684MCU",
  id: "mcu-support",
  level: 3
}, {
  value: "TouchGFX 4.14.0",
  id: "touchgfx-4140",
  level: 2
}, {
  value: "ARMCLANG\u652F\u6301",
  id: "armclang-support",
  level: 3
}, {
  value: "\u5DE5\u4F5C\u6D41\u7A0B",
  id: "workflow",
  level: 4
}, {
  value: "TouchGFX 4.13.0",
  id: "touchgfx-4130",
  level: 2
}, {
  value: "\u9519\u8BEF",
  id: "bugs",
  level: 3
}, {
  value: "\u5B57\u4F53\u8F6C\u6362\u5668",
  id: "font-converter",
  level: 4
}, {
  value: "\u989D\u5916\u7F16\u8BD1\u5668\u652F\u6301",
  id: "additional-compiler-support",
  level: 3
}, {
  value: "\u5411\u540E\u517C\u5BB9",
  id: "backwards-compatibility",
  level: 3
}, {
  value: "\u5DF2\u5F03\u7528\u7684\u529F\u80FD",
  id: "deprecated-features",
  level: 4
}, {
  value: "\u9ED8\u8BA4\u7981\u7528TextureMapper",
  id: "texturemapper-is-disabled-by-default",
  level: 4
}, {
  value: "\u4E0D\u517C\u5BB9HAL SDL1",
  id: "hal-sdl1-incompatible",
  level: 4
}, {
  value: "TouchGFX 4.12.3",
  id: "touchgfx-4123",
  level: 2
}, {
  value: "\u5411\u540E\u517C\u5BB9",
  id: "backwards-compatibility-1",
  level: 3
}, {
  value: "\u5C4F\u5E55\u5207\u6362",
  id: "screen-transitions",
  level: 4
}, {
  value: "\u4E8C\u8FDB\u5236\u5B57\u4F53",
  id: "binary-fonts",
  level: 4
}, {
  value: "TouchGFX 4.11.0",
  id: "touchgfx-4110",
  level: 2
}, {
  value: "\u5411\u540E\u517C\u5BB9",
  id: "backwards-compatibility-2",
  level: 3
}, {
  value: "TouchGFX 4.10.0",
  id: "touchgfx-4100",
  level: 2
}, {
  value: "\u4ECE4.9.x\u5347\u7EA7",
  id: "upgrading-from-49x",
  level: 3
}, {
  value: "\u5411\u540E\u517C\u5BB9",
  id: "backwards-compatibility-3",
  level: 3
}, {
  value: "\u5DE5\u7A0B\u66F4\u65B0\u5668\u7684\u95EE\u9898",
  id: "project-updater-issue",
  level: 3
}, {
  value: "TextArea\u548CChromART\uFF08DMA2D\uFF09",
  id: "textarea-and-chromart-dma2d",
  level: 3
}, {
  value: "TouchGFX 4.9.0",
  id: "touchgfx-490",
  level: 2
}, {
  value: "\u4ECE4.8.0\u5347\u7EA7",
  id: "upgrading-from-480",
  level: 3
}, {
  value: "\u65B9\u6CD51\uFF1A\u4FDD\u7559\u539F\u59CB\u6587\u4EF6\u7ED3\u6784",
  id: "method-1-retain-original-file-structure",
  level: 3
}, {
  value: "\u65B9\u6CD52\uFF1A\u5BFC\u5165\u5230\u65B0\u7684\u6A21\u677F",
  id: "method-2-import-into-new-template",
  level: 3
}, {
  value: "\u65B9\u6CD53\uFF1A\u624B\u5DE5\u5347\u7EA7\uFF08\u65E0TouchGFX Designer\uFF09",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u5217\u51FA\u4E86\u6240\u6709TouchGFX\u7248\u672C\u4E2D\u5DF2\u77E5\u5B58\u5728\u7684\u95EE\u9898\u4EE5\u53CA\u6F5C\u5728\u7684\u6743\u5B9C\u63AA\u65BD\u3002 \u6B64\u5916\uFF0C\u5982\u679C\u60A8\u9700\u8981\u6267\u884C\u4EFB\u4F55\u7279\u5B9A\u7684\u5347\u7EA7\u6B65\u9AA4\u624D\u80FD\u5C06TouchGFX\u5347\u7EA7\u81F3\u7279\u5B9A\u7248\u672C\uFF0C\u6587\u4E2D\u5C06\u4F1A\u63D0\u5230\u3002 \u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u5F53\u524D\u7248\u672C\u4E0E\u6700\u65B0\u7248\u672C\u4E4B\u95F4\u9694\u4E86\u51E0\u4E2A\u7248\u672C\uFF0C\u60A8\u9700\u8981\u6267\u884C\u6240\u6709\u7248\u672C\u7684\u5347\u7EA7\u6B65\u9AA4\uFF0C\u76F4\u81F3\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
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
    "id": "new-way-of-working-with-typographies"
  }), `New way of working with typographies`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `From TouchGFX 4.18.1 to TouchGFX 4.19.0 the use of typographies has changed. A typography now has a default setting and zero or more language specific settings.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Read more about this in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/texts-view"
  }), `Designer Guide`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text specific direction and typography is no longer an option, these options are moved to the new default and language specific settings. This new functionality affects the generated code in projects that used this feature. The Text Converter will generate a font id for the default setting and one for each language specific setting. A font id generated from a language specific setting will be named automatically, see example below.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/text-specific-direction.png",
    mdxType: "Figure"
  }, "Setting direction and typography for a specific text in TouchGFX 4.18"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "example-auto-generated-font-ids"
  }), `Example: Auto generated font ids`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Default typography id: HEADLINE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Language specific setting: JPN`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This will generate two font ids in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/include/fonts/ApplicationFontProvider.hpp`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `struct TypographyFontIndex
{
    static const touchgfx::FontId HEADLINE = 0;
    static const touchgfx::FontId HEADLINE_AUTO_GENERATED_FOR_JPN = 1;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "auto-generated-typographies-when-upgrading-to-4190"
  }), `Auto generated typographies when upgrading to 4.19.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As mentioned, the text specific direction and typography is no longer an option. As a result of this change in functionality, new typographies with default and language specific settings might be generated, when upgrading older versions. You can identify these auto generated typographies by their id. Either the text direction is used as suffix or a letter in the range A-Z:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Headline_LTR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PosterText_RTL`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Title_A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonText_B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "referencing-font-ids-in-user-code"
  }), `Referencing font ids in user code`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are referencing font ids in the user code, these might need to be updated. In cases where font ids are not referenced by symbol but by value, there is a risk of errors, as the font ids can change during an upgrade. It is recommended to always reference font ids by symbol, i.e. use `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypographyFontIndex::HEADLINE`), ` instead of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-libjpeg-with-armclang"
  }), `Using LibJPEG with ARMCLANG`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ARMCLANG projects where the LibJPEG middlewares is selected in CubeMX cannot run. ARMCLANG enables semi-hosting because LibJPEG refers to the libc file functions (e.g. fopen).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `Semi-hosting makes the application wait for a connection to a semi-hosting-aware debugger during startup.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `One way to resolve this issue is to remove references to fopen in LibJPEG by undefining JFILE in two files: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LibJPEG/source/jdatasrc.c`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LibJPEG/source/jdatadst.c`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    "id": "mjpeg-video-on-h750b-discovery"
  }), `MJPEG Video on H750B Discovery`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The H750B Discovery board uses hardware decoding of YCbCr video data. A bug in the code supplied with TouchGFX for this board causes visible artifacts for some videos.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `A solution is to change to software decoding. In some cases it is also possible to remove the problem by changing the width of the video a few pixels.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "threadx-assembler-files"
  }), `ThreadX assembler files`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The ThreadX assembler files for Keil IDE is using the new ARMCLANG V6 assembler syntax. The startup.s files supplied in some firmware packs is using the syntax of the older ARMCC assembler.  This means that you have to generally set your project to use the ARMCLANG V6 assembler, and then override this for the startup_stm32xxx.s:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-assembler.png",
    mdxType: "Figure"
  }, "Deselecting ARMCLANG V6 assembler for startup.s"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-18-0"
  }), `TouchGFX 4.18.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "issues-with-cubemx-610-and-cubeprogrammer-26"
  }), `CubeMX 6.1.0\u548CCubeProgrammer 2.6\u7684\u95EE\u9898`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u201CC/C++\u7F16\u8BD1\u5668\u201D / \u201C\u8BED\u8A00\u201D\u9009\u9879\u7684\u9519\u8BEF\u8BBE\u7F6E\uFF08\u4ECE\u201C\u81EA\u52A8\u201D\u66F4\u6539\u4E3A\u201CC++\u201D\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF\uFF09\uFF0CCubeMX\u751F\u6210\u7684CubeMX \u7248\u672C6.1.0 EWARM\u5DE5\u7A0B\u4E0D\u80FD\u4E0EX-CUBE-TOUCHGFX\u4E00\u8D77\u4F7F\u7528\u3002 \u6B64\u95EE\u9898\u5C06\u5728CubeMX 6.1.1\u4E2D\u8FDB\u884C\u4FEE\u6B63\u3002 \u5728\u6B64\u671F\u95F4\uFF0C\u5C06\u9009\u9879\u624B\u52A8\u6539\u56DE\u201C\u81EA\u52A8\u201D\u5C06\u89E3\u51B3\u7F16\u8BD1\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u5728CubeMX\u751F\u6210\u4EE3\u7801\u65F6\u8FD8\u539F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeProgrammer 2.6\u4E2D\u4E0E\u5916\u90E8\u52A0\u8F7D\u5668 (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.stldr`), `)\u5F15\u7528\u65B9\u5F0F\u76F8\u5173\u7684\u95EE\u9898\u4F1A\u635F\u574F\u6240\u6709\u73B0\u6709\u5E94\u7528\u6A21\u677F\uFF08AT\uFF09\u7684Makefile\uFF0C\u8FD8\u4F1A\u59A8\u788DTouchGFX Designer\u4E2D\u201C\u8FD0\u884C\u76EE\u6807\u201D\u529F\u80FD\u7684\u6B63\u5E38\u5DE5\u4F5C\u3002 \u6B64\u95EE\u9898\u8FD8\u6269\u5C55\u5230\u4E86\u57FA\u4E8E\u6700\u65B0AT\u7248\u672C\u7684\u7528\u6237\u5DE5\u7A0B\u3002 \u5E94\u7528\u7A0B\u5E8F\u6A21\u677F\u5C06\u66F4\u65B0\u4EE5\u4FEE\u8865\u8BE5\u95EE\u9898\uFF0C\u5E76\u5C06\u9002\u7528\u4E8ECubeProgrammer 2.5\u548C2.6\u3002 \u5982\u679C\u60A8\u5DF2\u6709\u4E0D\u80FD\u4E0ECubeProgrammer 2.6\u4E00\u8D77\u4F7F\u7528\u7684\u57FA\u4E8EAT\u7684\u5DE5\u7A0B\uFF0C\u60A8\u53EF\u4EE5\u8FDB\u884C\u4E0B\u5217\u4FEE\u6539\u4EE5\u6DFB\u52A0\u652F\u6301\u3002 \u5728\u5F15\u7528\u5916\u90E8\u6587\u4EF6\u5939\u65F6\uFF0C\u7528\u6237\u5FC5\u987B\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bin`), `\u6587\u4EF6\u5939\u6267\u884C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32CubeProgrammer_CLI.exe`), `\u3002 \u4E00\u822C\u800C\u8A00\uFF0C\u6307\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `cd`), `\u8FDB\u5165STM32CubeProgrammer\u5B89\u88C5\u6587\u4EF6\u5939\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `bin`), `\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6267\u884C\u547D\u4EE4\uFF0C\u901A\u8FC7\u5BF9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.stldr`), `\u6587\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u76F8\u5BF9`), `\u5F15\u7528\u5BF9\u8FDE\u63A5\u7684\u76EE\u6807\u786C\u4EF6\u8FDB\u884C\u70E7\u5F55\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `@cd "$(st_stm32cube_programmer_bin_path)" && ./$(stm_stm32cube_programmer_exe) -c port=SWD -d $(application_path)/$(binary_output_path)/target.hex -el $(stm32cubeLoader_relative_path) -hardRst
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "The CubeProgrammer bug is solved in version 2.10."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "new-touchgfx-format"
  }), `\u65B0\u7684.touchgfx\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECETouchGFX 4.17.0\u5230TouchGFX 4.18.0\uFF0C.touchfgx\u6587\u4EF6\u7684\u5185\u5BB9\u4E3B\u8981\u5728\u4E24\u4E2A\u65B9\u9762\u505A\u4E86\u91CD\u5927\u6539\u53D8\u3002 \u5176\u540E\u679C\u4F1A\u5168\u9762\u66F4\u65B0.touchfgx\u6587\u4EF6\uFF0C\u53EA\u9700\u4F7F\u7528TouchGFX Designer\u6253\u5F00TouchGFX\u5DE5\u7A0B\u6587\u4EF6\uFF0C\u7136\u540E\u4FDD\u5B58\u5373\u53EF\u3002 \u4E3B\u8981\u53D8\u5316\u5728\u4EE5\u4E0B\u9886\u57DF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "default-values-are-not-written-to-touchgfx"
  }), `\u9ED8\u8BA4\u503C\u4E0D\u518D\u5199\u5165 .touchgfx\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u6709\u9ED8\u8BA4\u503C\uFF08\u4F8B\u5982\u6846\u4F53\u504F\u79FB\u91CFX=0\uFF0CY=0 \u6216\u9ED1\u8272\uFF08red=0\uFF0Cgreen=0\uFF0Cblue=0\uFF09\uFF09\u7684\u63A7\u4EF6\u53C2\u6570\u4E4B\u524D\u88AB\u5199\u5165.touchfgx\u6587\u4EF6\uFF1B\u4F46\u5728TouchGFX\u7248\u672C4.18.0\u4E2D\uFF0C\u8FD9\u4E9B\u503C\u4E0D\u518D\u5199\u5165\u3002 \u5176\u7ED3\u679C\u4F1A\u5BFC\u81F4\u7A0D\u5C0F\u4E9B\u7684.touchgfx\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "removed-textentries-block"
  }), `\u5220\u9664\u4E86TextEntries\u5757`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u91CD\u547D\u540D\u4E86SingleUseId\uFF0C\u5176\u540D\u79F0\u73B0\u5305\u542B\u968F\u673A\u6570\u5B57\u548C\u5B57\u6BCD\uFF08\u800C\u4E0D\u662F\u8FDE\u7EED\u7684\u6570\u5B57\uFF09\uFF0C\u8FD9\u4F1A\u7B80\u5316\u5408\u5E76\u51E0\u4E2A\u6D3B\u8DC3\u7684\u5F00\u53D1\u4EBA\u5458\u5171\u540C\u5F00\u53D1\u7684\u540C\u4E00\u5DE5\u7A0B\u7684\u5DE5\u4F5C\uFF0C\u56E0\u4E3A\u65B0\u7684\u4E00\u6B21\u6027\u4F7F\u7528\u6587\u672Cid\u4E0D\u4F1A\u83B7\u5F97\u91CD\u590D\u7684id\u3002 \u53E6\u5916\uFF0C.touchgfx\u4E2D\u7684\u201CTextEntries\u201D\u90E8\u5206\u5DF2\u88AB\u5220\u9664\uFF0C\u8FD9\u5E26\u6765.touchgfx\u6587\u4EF6\u5C3A\u5BF8\u5927\u5927\u51CF\u5C11\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd16bpp-fillrect-and-lcd16bpp-drawglyph"
  }), `LCD16bpp::fillRect\u4E0ELCD16bpp::drawGlyph`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCD16bpp\u4E2D\u7684fillRect\u548CdrawGlyph\u51FD\u6570\u73B0\u5728\u7528\u5B8C\u6574\u768424\u4F4D\u989C\u8272\uFF08\u800C\u975E\u7F29\u51CF\u540E\u768416\u4F4D\uFF08RGB565\uFF09\u989C\u8272\uFF09\u4F20\u9012\u7ED9DMA\u3002 \u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u786C\u4EF6\uFF08\u975E\u6A21\u62DF\u5668\uFF09\u4E0A\u51FA\u73B0\u9519\u8BEF\u7684\u989C\u8272\uFF0C\u53EF\u4EE5\u901A\u8FC7CubeMX\u91CD\u65B0\u751F\u6210DMA\u7C7B\u6765\u4FEE\u590D\u8BE5\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "makefile-and-xlsx"
  }), `Makefile\u548Cxlsx`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX 4.18.0\u4F7F\u7528\u65B0\u7684.xml\u683C\u5F0F\uFF08\u800C\u4E0D\u662F\u4EE5\u524D\u4F7F\u7528\u7684\u65E7\u7684.xlsx\u683C\u5F0F\uFF09\u6765\u5B58\u50A8\u6587\u672C\u548C\u8BD1\u6587\u3002 \u8FD9\u610F\u5473\u7740Makefiles\u548Cvisual studio\u9879\u76EE\u4E2D\u6240\u6709\u5BF9"text .xlsx"\u7684\u5F15\u7528\u90FD\u5E94\u8BE5\u6539\u4E3A"text .xml"\u3002 TextConvert\u5DE5\u5177\u53EF\u4EE5\u81EA\u52A8\u8BC6\u522B\uFF0C\u5373\u4F7F\u65E7\u7684texts.xlsx\u6587\u4EF6\u5B58\u5728\u800Ctexts.xml\u4E0D\u5B58\u5728\uFF0C\u5176\u4F1A\u5C06texts.xlsx\u8F6C\u6362\u4E3Atexts.xml\uFF0C\u4EE5\u9002\u5E94\u6240\u6709\u672A\u6765\u7684\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u67E5\u770B\u80FD\u6B63\u5E38\u5DE5\u4F5C\u7684\u65B0Makefile\uFF0C\u53EA\u9700\u4F7F\u7528TouchGFX Designer\u65B0\u5EFA\u4E00\u4E2A\uFF08\u7A7A\u767D\uFF09\u9879\u76EE\uFF0C\u6587\u4EF6\u4F4D\u4E8E\u6587\u4EF6\u5939generated/simulator/gcc/Makefile\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "font-size-limit-in-textsxsd"
  }), `Font size limit in texts.xsd`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The texts.xsd which is used by the designer to validate the texts.xml has a limit on the font size of 255. If you have font sizes greater than 255, you will see an error message in the designer like this:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/font-size-limit-xsd.png",
    mdxType: "Figure"
  }, "Error message - Font size limit"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The workaround is to close the project, change the Typographies Size attribute from xs:unsignedByte to xs:unsignedInt in the texts.xsd and reopen the project.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sdl2-linker-error-on-linux"
  }), `Linux\u4E0A\u7684SDL2\u94FE\u63A5\u5668\u9519\u8BEF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u53EA\u4E3AWindows\u7528\u6237\u63D0\u4F9B\u4EFF\u771F\u5668\u4F7F\u7528\u7684SDL2\u5E93\u3002 Linux\u7528\u6237\u9700\u8981\u81EA\u5DF1\u5B89\u88C5SDL2\u5E93\u3002 \u4EC5\u9700\u8981\u6267\u884C\u4E00\u6B21\u7684\u547D\u4EE4\uFF0C\u5BF9\u4E8Eubuntu\uFF0C\u547D\u4EE4\u662F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo apt install libsdl2-dev libsdl2-image-dev
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5373\u53EF\u5B89\u88C5libsdl2\u548Clibsdl2-image\uFF0C\u5305\u542B\u5F00\u53D1\u6240\u7528\u7684\u5934\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-17-0"
  }), `TouchGFX 4.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-no-longer-support-setalpha"
  }), `\u7ED8\u56FE\u5DE5\u5177\u4E0D\u518D\u652F\u6301setAlpha()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51FA\u4E8E\u6027\u80FD\u65B9\u9762\u7684\u8003\u8651\uFF0CCanvas Widget Renderer\uFF08CWR\uFF09\u4F7F\u7528\u7684\u7ED8\u56FE\u63A7\u4EF6\u4E0D\u518D\u652F\u6301alpha\u3002 \u901A\u8FC7\u5728\u6709\u7ED8\u56FE\u63A7\u4EF6\u7684\u753B\u5E03\u63A7\u4EF6\u4E0A\u8BBE\u7F6Ealpha\uFF0C\u4ECD\u7136\u53EF\u4EE5\u8FBE\u5230\u6548\u679C\u3002 \u4E00\u822C\u800C\u8A00\uFF0C\u53EF\u4EE5\u5C06\u4E0B\u9762\u8FD9\u6837\u7684\u4EE3\u7801\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
painter.setAlpha(128);
circle.setPainter(painter);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4FEE\u6539\u6210\u8FD9\u6837\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
circle.setPainter(painter);
circle.setAlpha(128);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E4B\u524D\u5C06alpha\u5E94\u7528\u4E8E\u7ED8\u56FE\u63A7\u4EF6\u548C\u753B\u5E03\u63A7\u4EF6\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E24\u4E2Aalpha\u503C\u76F8\u4E58\uFF0C\u7136\u540E\u9664\u4EE5255\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
painter.setAlpha(painterAlpha);
circle.setPainter(painter);
circle.setAlpha(circleAlpha);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` \u53D8\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
circle.setPainter(painter);
circle.setAlpha((painterAlpha * circleAlpha) / 255);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6216\u8005\u4F7F\u7528LCD::div255()\u66FF\u4EE3\u9664\u4EE5255\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-the-hal-class"
  }), `\u4F7F\u7528HAL\u7C7B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7248\u672C4.17.0\u4E4B\u524D\uFF0C\u5B8C\u5168\u4E0D\u4F7F\u7528HAL\u7684TouchGFX\u6846\u67B6\u4E2D\u7684\u591A\u4E2A\u6587\u4EF6\u5305\u542B\u5934\u6587\u4EF6touchgfx/hal/HAL.hpp\u3002 \u8FD9\u53EF\u80FD\u5BFC\u81F4\u7528\u6237\u4EE3\u7801\u7531\u4E8E\u7F16\u8BD1\u5668\u4E0D\u77E5\u9053HAL\u800C\u4E0D\u8FDB\u884C\u7F16\u8BD1\u3002\u8FD9\u4E9B\u4E0D\u5FC5\u8981\u7684\u5F15\u7528\u73B0\u5DF2\u6E05\u7406\u3002 \u4E3A\u4E86\u4FEE\u6B63\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EA\u9700\u5305\u542BHAL\u5934\u6587\u4EF6\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/hal/HAL.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u5916\uFF0CScreen\u7C7B\u6709\u4E24\u4E2A\u65B0\u51FD\u6570getScreenWidth() \u548CgetScreenHeight()\uFF0C\u7528\u4E8E\u7ED9\u51FA\u5C4F\u5E55\u5C3A\u5BF8\u3002 \u63A8\u8350\u8BE5\u65B9\u6CD5\u7528\u6765\u83B7\u5F97\u5C4F\u5E55\u5C3A\u5BF8\uFF0C\u53EF\u4ECEScreen\u7684\u4EFB\u610F\u5B50\u7C7B\uFF08\u5982Screen1View.cpp\uFF09\u76F4\u63A5\u8C03\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "fmc-display-interface-in-touchgfx-generator"
  }), `TouchGFX Generator\u4E2D\u7684FMC\u663E\u793A\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u4F7F\u7528TouchGFX Generator\u4E2D\u65B0\u7684FMC\u663E\u793A\u63A5\u53E3\u65F6\uFF0C\u7528CubeMX 6.2.1\u751F\u6210\u65F6FMC\u5B58\u50A8\u533A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5185\u5B58\u504F\u79FB`), `\u662F\u4E0D\u6B63\u786E\u7684\uFF08\u96F6\uFF09\u3002 \u8FD9\u4F1A\u5728CubeMX 6.3.0\u4E2D\u4FEE\u6B63\uFF0C\u5728\u53D1\u5E03\u65F6\uFF0CX-CUBE-TouchGFX\u9700\u8981\u7684\u6700\u4F4E\u7248\u672C\u5C06\u8DF3\u81F36.3.0\u800C\u4E0D\u662F\u76EE\u524D\u76846.2.1\u3002 \u5230\u90A3\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\u4E2D\u8F93\u5165\u6B63\u786E\u7684FMC BANK\u5B58\u50A8\u5730\u5740\uFF08\u5C06\u5728\u91CD\u65B0\u751F\u6210\u65F6\u88AB\u8986\u76D6\uFF09\u3002 \u5982`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#define FMC_BANK1_REG ((uint16_t *) 0x60000000)
#define FMC_BANK1_MEM ((uint16_t *) 0x60000002)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u6237\u8FD8\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `\u4E2D\u5168\u90E8\u91CD\u65B0\u5B9A\u4E49\u5B83\u4EEC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "l8-images-in-16-24-or-32bpp-configurations"
  }), `16-24\u621632bpp\u914D\u7F6E\u7684L8\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u52A0\u8F7DL8\u56FE\u50CF\u7684CLUT\u65F6\uFF0C\u5BF9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::taskYield()`), ` \u7684\u8C03\u7528\u88AB\u9519\u8BEF\u5730\u5F15\u5165\u4E86STM32DMA\u7C7B\u3002 \u8981\u89E3\u51B3\u6B64\u95EE\u9898\uFF0C\u7528\u6237\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5BFC\u822A\u5230\u60A8\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Users/<user name>/STM32Cube/Repository/Packs/STMicroelectronics/X-CUBE-TOUCHGFX/4.17.0/CubeMX/templates/Target`), `\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6839\u636E\u60A8\u7684\u4F4D\u6DF1\u6253\u5F00\u76F8\u5E94\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `dma\\u Xbpp\\u implementation\\u tmp.ftl`), `\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5220\u9664\u6216\u6CE8\u91CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `while ((READ_REG(DMA2D->FGPFCCR) & DMA2D_FGPFCCR_START) != 0U)`), `\u5FAA\u73AF\u4E2D\u5BF9 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::taskYield()`), `\u7684\u8C03\u7528\uFF0C\u5E76\u4ECESTM32CubeMX\u91CD\u65B0\u751F\u6210\u4EE3\u7801\uFF0C\u4EE5\u4F7F\u7528\u6B64\u4FEE\u6539\u7684\u6A21\u677F\u751F\u6210\u4EE3\u7801\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u652F\u6301\u7684MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u867D\u7136TouchGFX\u5B8C\u5168\u652F\u6301Cortex-M33\uFF0C\u4F46\u5728CubeMX\u4E2D\u6DFB\u52A0\u652F\u6301\u524D\uFF0C\u5F53\u524DCubeMX\uFF08v6.0.1\uFF09\u7248\u672C\u4E2D\u4E0D\u80FD\u542F\u7528\u591A\u4E0A\u4E0B\u6587MCU\u7684\u201C\u8F6F\u4EF6\u5305\u201D\uFF08\u5305\u62ECTouchGFX Generator\uFF09\u3002 \u5BF9\u57FA\u4E8ECortex-M33\u7684MCU\u7981\u7528\u201CTrust Zone\u201D\uFF0C\u4ECE\u800C\u5C06MCU\u9650\u5236\u5728\u5355\u4E0A\u4E0B\u6587\uFF0C\u5C06\u5141\u8BB8\u60A8\u542F\u7528TouchGFX Generator\u3002 \u5E94\u5728\u201C\u7528\u6237\u4EE3\u7801\u201D\u533A\u624B\u52A8\u4F7F\u80FDTrustZone\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4140"
  }), `TouchGFX 4.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "armclang-support"
  }), `ARMCLANG\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u867D\u7136TouchGFX\u73B0\u5728\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M0`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M4f`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M7`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M33`), `\u63D0\u4F9BARMCLANG\uFF08ARM\u7F16\u8BD1\u5668v6.x\uFF09\u5E93\uFF0CCubeMX\u5374\u4E0D\u80FD\u751F\u6210\u542F\u7528ARMCLANG\u7F16\u8BD1\u5668\uFF08ARM\u7F16\u8BD1\u5668v6.x\uFF09\u7684\u5DE5\u7A0B\u3002 \u60F3\u5728\u5176\u5DE5\u7A0B\u4E2D\u4F7F\u7528\u8BE5\u7F16\u8BD1\u5668\u7684\u7528\u6237\u9700\u8981\u5728Keil uVision\u4E2D\u7684\u5DE5\u7A0B\u9009\u9879\u4E2D\u624B\u52A8\u9009\u62E9\u7F16\u8BD1\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5728CubeMX\u5185\u914D\u7F6EFreeRTOS\u4E2D\u95F4\u4EF6\uFF0C\u751F\u6210\u7684\u4EFB\u4F55\u4F7F\u7528ARMCC\uFF08ARM\u7F16\u8BD1\u5668v5.x\uFF09\u7684\u5DE5\u7A0B\u90FD\u90FD\u4F1A\u5305\u542BFreeRTOS`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u53EF\u79FB\u690D`), `\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4E0EARMCLANG\u662F\u4E0D\u517C\u5BB9\u7684\uFF1B\u5FC5\u987B\u624B\u5DE5\u66FF\u6362\u8FD9\u4E9B\u6587\u4EF6\u3002 \u6BCF\u5F53\u4ECECubeMX\u5185\u90E8\u8FD0\u884C\u201C\u751F\u6210\u4EE3\u7801\u201D\u65F6\uFF0C\u4EFB\u4F55\u624B\u5DE5\u4FEE\u6539\u90FD\u4F1A\u88AB\u8986\u76D6\uFF0C\u6700\u597D\u5728\u7248\u672C\u63A7\u5236\uFF08git\u7B49\uFF09\u4E0B\u7EF4\u62A4\u5DE5\u7A0B\uFF0C\u4EE5\u4FBF\u64A4\u9500\u8FD9\u4E9B\u7279\u5B9A\u4FEE\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u603B\u4E4B\uFF0C \u7531\u4E8ECubeMX\u53EA\u80FD\u751F\u6210\u4F7F\u7528ARM Compiler v5.x\u7F16\u8BD1\u5668\u7684\u5DE5\u7A0B\uFF0C\u56E0\u6B64\u7528\u6237\u6BCF\u6B21\u4ECECubeMX\u751F\u6210\u4EE3\u7801\u65F6\u5FC5\u987B\u4FEE\u6539\u4E0B\u5217\u5185\u5BB9\uFF0C\u5728\u7248\u672C\u63A7\u5236\u4E0B\u7EF4\u62A4\u9879\u76EE\u9664\u5916\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5728\u5DE5\u7A0B\u9009\u9879\u4E2D\u9009\u62E9ARM Compiler v6.x\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u94FE\u63A5ARMCLANG\u5E93\u800C\u4E0D\u662FARMCC\u5E93\uFF08\u901A\u8FC7CubeMX\u914D\u7F6E\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5982\u679C\u5728CubeMX\u5185\u914D\u7F6EFreeRTOS\uFF0C\u4E3A\u4E86\u517C\u5BB9ARM Compiler v6.x\uFF0C\u5E94\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/GCC`), `\u6587\u4EF6\u5939\u83B7\u53D6FreeRTOS\u53EF\u79FB\u690D\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/RVDS`), `\u6587\u4EF6\u5939\uFF08ARM Compiler v5.x\u7684\u9ED8\u8BA4\u9009\u62E9\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "workflow"
  }), `\u5DE5\u4F5C\u6D41\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5217\u6D41\u7A0B\u63CF\u8FF0\u4E86\u5982\u4F55\u5728Keil uVision\u4E2D\u5BF9CubeMX\u751F\u6210\u7684\u5DE5\u7A0B\u4F7F\u7528v6.x ARM \u7F16\u8BD1\u5668\u548CTouchGFX ARMCLANG\u5E93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5728Keil uVision\u4E2D\u9009\u62E9ARMCLANG\uFF08v. 6.x\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/armclang-support.png",
    noShadow: true,
    width: "650",
    mdxType: "Figure"
  }, "ARMCLANG\u652F\u6301"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 2
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5982\u679C\u60A8\u5728CubeMX\u4E2D\u914D\u7F6E\u4E86FreeRTOS\uFF0CCubeMX\u5C06\u751F\u6210\u9519\u8BEF\u7684\u53EF\u79FB\u690D\u6587\u4EF6\uFF0C\u5E76\u5C06\u60A8\u7684\u5DE5\u7A0B\u914D\u7F6E\u4E3A\u4F7F\u7528\u8FD9\u4E9B\u6587\u4EF6\u3002 \u60A8\u5FC5\u987B\u4F7F\u7528\u6765\u81EA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%88%60port.c%60%E5%92%8C%60portmacro.h%60%EF%BC%89%E6%88%96%E4%B8%8B%E8%BD%BD%E4%B8%80%E4%B8%AAFreeRTOS%E7%89%88%E6%9C%AC%E5%B9%B6%E4%BB%8E%E4%B8%AD%E6%89%BE%E5%88%B0%E7%9B%B8%E5%BA%94%E6%96%87%E4%BB%B6%E6%9D%A5%E6%89%8B%E5%B7%A5%E6%9B%BF%E6%8D%A2%E3%80%82"
  }), `https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC\u7684\u6587\u4EF6\uFF08\`port.c\`\u548C\`portmacro.h\`\uFF09\u6216\u4E0B\u8F7D\u4E00\u4E2AFreeRTOS\u7248\u672C\u5E76\u4ECE\u4E2D\u627E\u5230\u76F8\u5E94\u6587\u4EF6\u6765\u624B\u5DE5\u66FF\u6362\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66FF\u6362`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `port.c`), `\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-port-c.png",
    noShadow: true,
    width: "250",
    mdxType: "Figure"
  }, `port.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5C06include\u8DEF\u5F84\u8BBE\u7F6E\u4FEE\u6539\u4E3A\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portable/GCC`), `\u6587\u4EF6\u5939\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portmacro.h`), `\uFF08\u672C\u4F8B\u4E2D\u4EE5Cortex-M7\u4E3A\u4F8B\uFF09\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-port-include.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, `\u53EF\u79FB\u690D\u6587\u4EF6\u5305\u542B\u8DEF\u5F84`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u201C\u751F\u6210\u4EE3\u7801\u201D\u671F\u95F4\u4E2D\uFF0CTouchGFX Designer\u751F\u6210\u540E\u6B65\u9AA4\u4F1A\u6839\u636E\u60A8\u9009\u62E9\u7684\u7F16\u8BD1\u5668\u7248\u672C\u81EA\u52A8\u63D2\u5165\u6B63\u786E\u7684\u5E93\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4130"
  }), `TouchGFX 4.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bugs"
  }), `\u9519\u8BEF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "font-converter"
  }), `\u5B57\u4F53\u8F6C\u6362\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FontConverter\u5DE5\u5177\u4F1A\u4E3Aunicodes\u7801\u751F\u6210\u5B57\u5F62\u50CF\u7D20\u6570\u636E\uFF0C\u8FD9\u662F\u5B57\u4F53\u89C4\u5219\u7684\u4E00\u90E8\u5206\uFF0C\u800C\u65E0\u8BBA\u8BE5\u5B57\u5F62\u662F\u5426\u5728\u5E94\u7528\u4E2D\u5B9E\u9645\u6587\u672C\u4E2D\u7528\u5230\u3002 \u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u5146\u5B57\u8282\u7684\u989D\u5916\u5B57\u5F62\u50CF\u7D20\u6570\u636E\u3002 \u8FD9\u91CC\u53EF\u4EE5\u627E\u5230\u4E0D\u4F1A\u4E3A\u5E94\u7528\u4E2D\u672A\u4F7F\u7528\u7684\u5B57\u5F62\u751F\u6210\u50CF\u7D20\u6570\u636E\u7684FontConverter\u65B0\u5DE5\u5177\uFF08Windows\u548CLinux\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/fontconvert_fix.zip"
  }), `fontconvert_fix.zip`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57284.13.0\u5B89\u88C5\u7684\u6839\u76EE\u5F55\u4E0B\u63D0\u53D6\u8BE5\u538B\u7F29\u6587\u4EF6\u5C06\u66F4\u65B0touchgfx\\framework\\tools\u5185\u90E8\u7684fontconverter\u5E93`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx\\framework\\tools`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-compiler-support"
  }), `\u989D\u5916\u7F16\u8BD1\u5668\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528ARMCLANG\u7F16\u8BD1\u5668\uFF08v6.12\uFF09\u6784\u5EFA\u7684\u5E93\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/touchgfx_core_clang.zip"
  }), `touchgfx_core_clang.zip`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57284.13.0\u5B89\u88C5\u7684\u6839\u76EE\u5F55\u63D0\u53D6\u6B64\u6587\u4EF6\u53EF\u5C06\u5E93`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_core_clang.lib`), `\u7F6E\u5165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx\\lib\\core\\cortex_m7\\Keil`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility"
  }), `\u5411\u540E\u517C\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "deprecated-features"
  }), `\u5DF2\u5F03\u7528\u7684\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5217\u5F03\u7528\u7684\u529F\u80FD\u5DF2\u7ECF\u88AB\u79FB\u9664\u4E86\u3002 \u5982\u679C\u60A8\u5728\u4EE3\u7801\u4E2D\u5F15\u7528\u4E86\u5B83\u4EEC\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u7F16\u5199\u5E94\u7528\u4E2D\u7684\u8FD9\u90E8\u5206\u5185\u5BB9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5DF2\u5F03\u7528\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TRANSPARENT_COL`), `\u5B9A\u4E49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }), `\u9ED8\u8BA4\u7981\u7528TextureMapper`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9ED8\u8BA4\u7981\u7528TextureMapper\uFF0C\u4EE5\u6D88\u51CFTouchGFX\u4F7F\u7528\u7684\u4EE3\u7801\u7A7A\u95F4\u3002 TouchGFX designer\u4F1A\u5728\u6240\u6709\u65B0\u5DE5\u7A0B\u4E2D\u63D2\u5165\u4EE3\u7801\uFF0C\u4EE5\u542F\u7528\u7EB9\u7406\u6620\u5C04\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5C06\u65E7\u5DE5\u7A0B\u79FB\u690D\u5230TouchGFX 4.13\uFF0C\u5E76\u66F4\u65B0\u81F3TouchGFX 4.13\uFF0C\u5C06\u7531TouchGFX Designer\u5904\u7406\u8FD9\u4E9B\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u662F\u624B\u5DE5\u66F4\u65B0\uFF0C\u5219\u9700\u8981\u63D2\u5165\u4EE3\u7801\u6765\u542F\u7528TextureMapper\u3002 \u5426\u5219\uFF0C\u5C06\u4E0D\u4F1A\u5728\u5C4F\u5E55\u4E0A\u7ED8\u5236\u4EFB\u4F55TextureMapper\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9605\u8BFB\u66F4\u591A\u5185\u5BB9\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/designer-user-guide/config-view#framework-features"
  }), `\u914D\u7F6ETouchGFX\u7279\u6027`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "hal-sdl1-incompatible"
  }), `\u4E0D\u517C\u5BB9HAL SDL1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E24\u4E2A\u51FD\u6570\u4ECETouchGFX\u5E93\u4EE3\u7801\u79FB\u5230\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL2.cpp`), `\u3002 \u8FD9\u5BF9\u5C06`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL2.cpp`), `\u7528\u5728Windows\u6A21\u62DF\u5668\u7684HAL\u5E94\u7528\u800C\u8A00\u6CA1\u6709\u5206\u522B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6709\u4E00\u4E2A\u8001\u5E94\u7528\uFF08\u65E9\u4E8ETouchGFX 4.8.0\uFF09\uFF0C\u5219\u60A8\u7684\u6A21\u62DF\u5668\u53EF\u80FD\u662F\u5728\u4F7F\u7528HALSDL\uFF08\u975E2\uFF09\u3002 \u6B64\u6A21\u62DF\u5668HAL\u4E0D\u518D\u5305\u542B\u5728TouchGFX\u4E2D\u3002 HALSDL\u7F3A\u5931\u4E86\u4E4B\u524D\u5305\u542B\u5728TouchGFX\u5E93\u4E2D\u7684\u4E24\u4E2A\u51FD\u6570\u3002 \u60A8\u9700\u8981\u5C06\u5B83\u4EEC\u624B\u52A8\u6DFB\u52A0\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL.cpp`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u5411\u540E\u517C\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "screen-transitions"
  }), `\u5C4F\u5E55\u5207\u6362`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u66F4\u65E9\u7684\u7248\u672C\u5728\u5B8C\u6210\u5C4F\u5E55\u5207\u6362\u540E\u91CD\u7ED8\u6574\u4E2A\u5C4F\u5E55\u3002\xA0\u989D\u5916\u7684\u91CD\u7ED8\u5728\u4E00\u4E9B\u8F83\u6162\u7684\u5E73\u53F0\u4E0A\u4F1A\u5BFC\u81F4\u4E86\u6027\u80FD\u95EE\u9898\u3002 \u5982\u679C\u60A8\u51FA\u4E8E\u67D0\u4E9B\u539F\u56E0\u9700\u8981\u6B64\u7C7B\u91CD\u7ED8\uFF0C\u5219\u9700\u8981\u4F7F\u5C4F\u5E55\u7684\u76F8\u5173\u90E8\u5206\u5931\u6548\uFF0C\u4F8B\u5982\uFF0C\u5728\u5207\u6362\u5230\u7684\u5C4F\u5E55\u7684\u865A\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen::afterTransition()`), `\u4E2D\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container.invalidate()`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "binary-fonts"
  }), `\u4E8C\u8FDB\u5236\u5B57\u4F53`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u5B57\u8DDD\u8C03\u6574\u6570\u636E\u73B0\u5DF2\u5305\u542B\u5728\u4E8C\u8FDB\u5236\u5B57\u4F53\u4E2D\uFF0C\u56E0\u800C\u4FEE\u6539\u4E86\u4E8C\u8FDB\u5236\u5B57\u4F53\u7684\u683C\u5F0F\u3002 \u9700\u8981\u91CD\u65B0\u751F\u6210\u4E8C\u8FDB\u5236\u5B57\u4F53\u6587\u4EF6\uFF0C\u539F\u6709\u7684\u8001\u6587\u4EF6\u4F1A\u5DE5\u4F5C\u4E0D\u6B63\u5E38\u3002 \u6839\u636EMakefiles\u7684\u8BBE\u7F6E\u65B9\u5F0F\uFF0C\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u91CD\u65B0\u751F\u6210\u6240\u6709\u8D44\u6E90\u6765\u5B8C\u6210\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u201Cmake -f simulator/gcc/Makefile clean assets\u201D`), `\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4110"
  }), `TouchGFX 4.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility-2"
  }), `\u5411\u540E\u517C\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/include/touchgfx/lcd/LCD.hpp`), `\u4E2D\uFF0C\u6211\u4EEC\u5220\u9664\u4E86\u5934\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/hal/HAL.hpp`), `\uFF0C\u8FD9\u4E2A\u662F\u5728\u65E9\u671F\u7248\u672C\u4E2D\u8BEF\u63D2\u5165\u7684\u3002 \u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD.hpp`), `\u5E76\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL.hpp`), `\u5185\u5BB9\u7684\u6587\u4EF6\u53D1\u751F\u7F16\u8BD1\u9519\u8BEF\u3002 \u89E3\u51B3\u65B9\u6848\u662F\u5728\u60A8\u7684\u6587\u4EF6\u4E2D\u4E5F\u5305\u542B\u8FDB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/include/touchgfx/hal/HAL.hpp`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4100"
  }), `TouchGFX 4.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "upgrading-from-49x"
  }), `\u4ECE4.9.x\u5347\u7EA7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECE\u7248\u672C4.10.0\u5F00\u59CB\uFF0CTouchGFX\u53EA\u5728STM32 MCU\u4E0A\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u66F4\u65B0\u8001\u9879\u76EE\uFF0C\u60A8\u9700\u8981\u6267\u884C\u4E0B\u5217\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5E94\u7528\u542F\u52A8\u65F6\u6DFB\u52A0\u4E0B\u9762\u7A81\u51FA\u663E\u793A\u7684\u4EE3\u7801\uFF0C\u4EE5\u901A\u77E5TouchGFX\u6B63\u5728STM32\u786C\u4EF6\u4E0A\u8FD0\u884C\u3002 \u5408\u9002\u7684\u6DFB\u52A0\u4F4D\u7F6E\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BoardConfiguration.cpp`), `\u4E2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `hw_init()`), `\u51FD\u6570\u7684\u7ED3\u5C3E\u5904\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u5411\u540E\u517C\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5220\u9664\u4E86\u672A\u4F7F\u7528\u7684\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\\touchgfx\\framework\\include\\touchgfx\\canvas_widget_renderer\\RGBA8.hpp`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "project-updater-issue"
  }), `\u5DE5\u7A0B\u66F4\u65B0\u5668\u7684\u95EE\u9898`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECETouchGFX Designer\u8C03\u7528\u7684IAR\u548CKeil\u5DE5\u7A0B\u66F4\u65B0\u5668\u4E0D\u9075\u5FAA\u5728\u76F8\u5E94IDE\u4E2D\u8BBE\u7F6E\u7684\u81EA\u5B9A\u4E49\u6587\u4EF6\u7EA7\u522B\u4F18\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "textarea-and-chromart-dma2d"
  }), `TextArea\u548CChromART\uFF08DMA2D\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528ChromART\u6E32\u67D3TextAreas\uFF08\u5F53TextArea\u662F\u6700\u9876\u7AEF\u7684\u5143\u7D20/\u6700\u540E\u8FDB\u884C\u7ED8\u5236\u65F6\uFF09\u5BFC\u81F4\u5E27\u7F13\u51B2\u533A\u63D0\u524D\u89E3\u9501\uFF0C\u7EE7\u800C\u5BFC\u81F4\u5F53\u524D\u5E27\u63D0\u524D\u5B8C\u6210/\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002 \u5728TouchGFX\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u540E\uFF0C\u6240\u6709\u7ED8\u5236\u64CD\u4F5C\uFF08\u5305\u62ECDMA\u64CD\u4F5C\uFF09\u5E94\u5DF2\u5B8C\u6210\u3002 \u7531\u4E8ETextArea\u5728\u5982\u4F55\u6070\u5F53\u5730\u4FDD\u62A4\u5E27\u7F13\u51B2\u533A\u65B9\u9762\u8FDD\u53CD\u8BE5\u7EA6\u5B9A\uFF0C\u5373\u4F7F\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u8FD4\u56DE\u540E\uFF0C\u4ECD\u7136\u5141\u8BB8DMA\u64CD\u4F5C\u7EE7\u7EED\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A7\u4EF6\u7684\u7EA6\u5B9A\u4E3A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u9501\u5B9A\u5E27\u7F13\u51B2\uFF08\u8FD4\u56DE\u6307\u5411\u5E27\u7F13\u51B2\u7684\u6307\u9488\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5728\u5E27\u7F13\u51B2\u4E2D\u7ED8\u5236\u4E00\u4E9B\u5185\u5BB9\u3002\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u89E3\u9501\u5E27\u7F13\u51B2\u533A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6216\u8005\uFF0C\u4F7F\u7528DMA\u64CD\u4F5C\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5C06\u81EA\u52A8\u5904\u7406\u5E27\u7F13\u51B2\u7684\u540C\u6B65\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7248\u672C4.10.0\u4E2D\uFF0C\u5982\u679C\u662F\u5F53\u524D\u5C4F\u5E55\u6700\u9876\u7AEF\u7684\u5143\u7D20\uFF08\u6700\u540E\u8FDB\u884C\u7ED8\u5236\uFF09\uFF0CTextArea\u5C06\u4E24\u4E2A\u6D41\u7A0B\u6DF7\u5408\u53EF\u80FD\u5BFC\u81F4\u77ED\u65F6\u95F4\u7684\u6545\u969C\u3002 \u8BE5\u95EE\u9898\u53EF\u901A\u8FC7\u7528\u4E0B\u5217`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u91CD\u5199\u624B\u5DE5\u4FDD\u62A4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u6765\u4FEE\u6B63\uFF08\u57FA\u4E8EF4 HAL\uFF09\u3002 \u6B64\u4E3E\u786E\u4FDD\u5982\u679CChromART\u64CD\u4F5C\u4ECD\u5728\u8FDB\u884C\u65F6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\u4E0D\u8FD4\u56DE\u3002\xA0\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u4ECE4.8.0\u5347\u7EA7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u968F\u7740\u5E94\u7528\u6A21\u677F\uFF08\u4ECE\u5B9E\u8D28\u4E0A\u5C06\u677F\u652F\u6301\u5305\u4E0E\u6838\u5FC3\u6846\u67B6\u5206\u79BB\u5F00\u6765\uFF09\u7684\u5F15\u5165\uFF0C\u6211\u4EEC\u5728\u7248\u672C4.9.0\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx`), `\u6587\u4EF6\u5939\u4E2D\u5220\u9664\u4E86\u8BB8\u591A\u5E95\u5C42\u9A71\u52A8\u548C\u5176\u4ED6\u6587\u4EF6\u3002 \u8FD9\u4E9B\u6587\u4EF6\u73B0\u5728\u7531\u5E94\u7528\u6A21\u677F\u63D0\u4F9B\u3002 \u4F46\u662F\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u60A8\u4E0D\u80FD\u901A\u8FC7\u4EC5\u4EC5\u66FF\u6362touchgfx\u6587\u4EF6\u5939\u6765\u5347\u7EA7\u52304.9.0\uFF0C\u90A3\u6837\u505A\u4F1A\u5BFC\u81F4\u4E00\u4E9BBSP\u6587\u4EF6\u7F3A\u5931\u3002 \u53CD\u4E4B\uFF0CTouchGFX Designer\u80FD\u591F\u81EA\u52A8\u6267\u884C\u5347\u7EA7\u3002 \u53EF\u901A\u8FC7\u4E24\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u5347\u7EA7\uFF0C\u60A8\u9700\u8981\u786E\u5B9A\u54EA\u79CD\u65B9\u5F0F\u662F\u9002\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u8BF7\u786E\u4FDD\u5347\u7EA7\u524D\u8FDB\u884C\u4E86\u5DE5\u7A0B\u5907\u4EFD\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-1-retain-original-file-structure"
  }), `\u65B9\u6CD51\uFF1A\u4FDD\u7559\u539F\u59CB\u6587\u4EF6\u7ED3\u6784`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u8BE5\u65B9\u6CD5\uFF0C\u53EA\u9700\u5728\u65B0\u7684TouchGFX Designer 4.9.0\u4E2D\u6253\u5F00\u5DE5\u7A0B\u3002 TouchGFX Designer\u5C06\u63D0\u793A\u60A8\u662F\u5426\u8981\u5347\u7EA7\uFF0C\u5728\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u540E\uFF0CTouchGFX Designer\u5C06\u8FDB\u884C\u5FC5\u8981\u7684\u4FEE\u6539\u3002 TouchGFX Designer\u5C06\u6267\u884C\u4E0B\u5217\u64CD\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C06\u65B0\u7684\u538B\u7F29\u8FC7\u7684touchgfx\u6587\u4EF6\u5939\u89E3\u538B\u5230\u5E94\u7528\u4E2D\uFF0C\u5E76\u4FEE\u6539TouchGFX\u8DEF\u5F84\u4EE5\u4E0E\u4E4B\u5339\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4E0B\u8F7D\u5E76\u89E3\u538B\u6240\u6709\u5DF2\u4ECEtouchgfx\u6587\u4EF6\u5939\u4E2D\u5220\u9664\u7684\u6587\u4EF6\uFF0C\u56E0\u6B64\u60A8\u7684\u5DE5\u7A0B\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u65B9\u6CD5\u51E0\u4E4E\u4F1A\u8BA9\u4E00\u5207\u4FDD\u6301\u539F\u6837\uFF0C\u5982\u679C\u539F\u6709\u6587\u4EF6\u7ED3\u6784\u9002\u5408\u60A8\u7684\u5DE5\u7A0B\uFF0C\u5219\u8FD9\u662F\u6700\u8F7B\u677E\u7684\u9009\u62E9\u3002 \u6B64\u65B9\u6CD5\u7684\u4E3B\u8981\u7F3A\u70B9\u662F\u4E0D\u4F1A\u6709\u56FE\u50CF\u8F6C\u6362\u5668\u52A0\u901F\uFF08\u901A\u8FC7\u64CD\u4F5C\u56FE\u50CF\u6587\u4EF6\u5939\u800C\u4E0D\u662F\u5355\u4E2A\u6587\u4EF6\uFF09\u3002 \u4F46\u662F\uFF0C\u60A8\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539makefile\uFF0C\u4EE5\u4FBF\u4F7F\u7528\u6B64\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-2-import-into-new-template"
  }), `\u65B9\u6CD52\uFF1A\u5BFC\u5165\u5230\u65B0\u7684\u6A21\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u4F7F\u7528\u6B64\u65B9\u6CD5\u5C06\u5DE5\u7A0B\u8F6C\u6362\u5230\u57FA\u4E8E\u65B0\u6A21\u677F\u7684\u6587\u4EF6\u7ED3\u6784\u4E2D\u3002 \u4E3A\u6B64\uFF0C\u60A8\u5FC5\u987B\u9996\u5148\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u6CD51\u8BA9Designer\u5347\u7EA7\u5DE5\u7A0B\u3002 \u7136\u540E\uFF0C\u4F7F\u7528\u5408\u9002\u7684\u5E94\u7528\u6A21\u677F\uFF08\u6A21\u62DF\u5668\u6216\u4E0E\u60A8\u7684\u8BC4\u4F30\u677F\u5339\u914D\u7684\u5E94\u7528\u6A21\u677F\uFF09\u65B0\u5EFA\u5DE5\u7A0B\u3002 \u5728Designer\u4E2D\u6253\u5F00\u6B64\u65B0\u5DE5\u7A0B\u540E\uFF0C\u8F6C\u81F3\u9876\u90E8\u83DC\u5355\u5E76\u70B9\u51FB\u201C\u7F16\u8F91->\u5BFC\u5165GUI\u201D\u3002 \u5728\u5BF9\u8BDD\u6846\u4E2D\u6307\u5B9A\u5DE5\u7A0B\u7684.touchgfx\u6587\u4EF6\u3002 Designer\u4F1A\u81EA\u52A8\u5C06\u6240\u6709UI\u6587\u4EF6\uFF08\u5305\u62EC\u8D44\u6E90\uFF09\u5BFC\u5165\u65B0\u5EFA\u7684\u5DE5\u7A0B\u3002 \u5982\u679C\u60A8\u5728gui\u6587\u4EF6\u5939\u4E4B\u5916\u589E\u52A0\u4E86\u989D\u5916\u7684\u4EE3\u7801\uFF0C\u60A8\u9700\u8981\u5C06\u8FD9\u4E9B\u6587\u4EF6\u624B\u52A8\u590D\u5236\u5230\u65B0\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-3-manual-upgrade-without-designer"
  }), `\u65B9\u6CD53\uFF1A\u624B\u5DE5\u5347\u7EA7\uFF08\u65E0TouchGFX Designer\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E0D\u4F7F\u7528TouchGFX Designer\uFF0C\u60A8\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u5F0F\u8FDB\u884C\u5347\u7EA7\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u7528\u7248\u672C4.9.0\u7684\u5B89\u88C5\u6587\u4EF6\u5939\u4E2D\u7684touchgfx\u6587\u4EF6\u5939\u66FF\u6362\u60A8\u5DE5\u7A0B\u4E2D\u4F7F\u7528\u7684touchgfx\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4E0B\u8F7D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://ftp.draupnergraphics.com/TouchGFX/Evaluation/4.9.0/Qll3iKK54AnJer7XRNm2/fw_delta_4.8.0_4.9.0.zip"
  }), `\u672Czip`), `\u6587\u4EF6\u5E76\u5C06\u5176\u89E3\u538B\u5230touchgfx\u6587\u4EF6\u5939\uFF0C\u6062\u590D\u5220\u9664\u7684\u6587\u4EF6\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);