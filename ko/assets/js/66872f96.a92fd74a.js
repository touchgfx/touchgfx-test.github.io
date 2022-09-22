"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7369],{

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

/***/ 26676:
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
  title: "\uC54C\uB824\uC9C4 \uBB38\uC81C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/known-issues",
  "id": "miscellaneous/known-issues",
  "title": "\uC54C\uB824\uC9C4 \uBB38\uC81C",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/miscellaneous/known-issues.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/known-issues",
  "permalink": "/4.20/ko/docs/miscellaneous/known-issues",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "known-issues",
    "title": "\uC54C\uB824\uC9C4 \uBB38\uC81C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC9C0\uC6D0 \uC694\uCCAD",
    "permalink": "/4.20/ko/docs/miscellaneous/getting-help"
  },
  "next": {
    "title": "\uBCC0\uACBD \uB85C\uADF8",
    "permalink": "/4.20/ko/docs/miscellaneous/changelog"
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
  value: "CubeMX 6.1.0 \uBC0F CubeProgrammer 2.6\uC5D0\uC11C \uC54C\uB824\uC9C4 \uBB38\uC81C",
  id: "issues-with-cubemx-610-and-cubeprogrammer-26",
  level: 3
}, {
  value: "\uC0C8\uB85C\uC6B4 .touchgfx \uD615\uC2DD",
  id: "new-touchgfx-format",
  level: 3
}, {
  value: "\uAE30\uBCF8 \uAC12\uC774 .touchgfx\uC5D0 \uC791\uC131\uB418\uC9C0 \uC54A\uC74C",
  id: "default-values-are-not-written-to-touchgfx",
  level: 4
}, {
  value: "TextEntries \uBE14\uB85D \uC0AD\uC81C",
  id: "removed-textentries-block",
  level: 4
}, {
  value: "LCD16bpp::fillRect \uBC0F LCD16bpp::drawGlyph",
  id: "lcd16bpp-fillrect-and-lcd16bpp-drawglyph",
  level: 3
}, {
  value: "Makefile \uBC0F xlsx",
  id: "makefile-and-xlsx",
  level: 3
}, {
  value: "Font size limit in texts.xsd",
  id: "font-size-limit-in-textsxsd",
  level: 3
}, {
  value: "Linux\uC758 SDL2 \uB9C1\uCEE4 \uC624\uB958",
  id: "sdl2-linker-error-on-linux",
  level: 3
}, {
  value: "TouchGFX 4.17.0",
  id: "touchgfx-4-17-0",
  level: 2
}, {
  value: "\uD398\uC778\uD130\uAC00 \uB354 \uC774\uC0C1 setAlpha()\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
  id: "painters-no-longer-support-setalpha",
  level: 3
}, {
  value: "HAL \uD074\uB798\uC2A4 \uC0AC\uC6A9",
  id: "using-the-hal-class",
  level: 3
}, {
  value: "TouchGFX Generator\uC758 FMC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4",
  id: "fmc-display-interface-in-touchgfx-generator",
  level: 3
}, {
  value: "16- 24- \uB610\uB294 32bpp \uAD6C\uC131\uC5D0\uC11C\uC758 L8 \uC774\uBBF8\uC9C0",
  id: "l8-images-in-16-24-or-32bpp-configurations",
  level: 3
}, {
  value: "TouchGFX 4.15.0",
  id: "touchgfx-4150",
  level: 2
}, {
  value: "MCU \uC9C0\uC6D0",
  id: "mcu-support",
  level: 3
}, {
  value: "TouchGFX 4.14.0",
  id: "touchgfx-4140",
  level: 2
}, {
  value: "ARMCLANG Support",
  id: "armclang-support",
  level: 3
}, {
  value: "\uC6CC\uD06C\uD50C\uB85C",
  id: "workflow",
  level: 4
}, {
  value: "TouchGFX 4.13.0",
  id: "touchgfx-4130",
  level: 2
}, {
  value: "\uBC84\uADF8",
  id: "bugs",
  level: 3
}, {
  value: "\uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C",
  id: "font-converter",
  level: 4
}, {
  value: "\uCD94\uAC00 \uCEF4\uD30C\uC77C\uB7EC \uC9C0\uC6D0",
  id: "additional-compiler-support",
  level: 3
}, {
  value: "\uD558\uC704 \uD638\uD658\uC131",
  id: "backwards-compatibility",
  level: 3
}, {
  value: "\uC9C0\uC6D0 \uC885\uB8CC \uAE30\uB2A5",
  id: "deprecated-features",
  level: 4
}, {
  value: "TextureMapper\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
  id: "texturemapper-is-disabled-by-default",
  level: 4
}, {
  value: "\uD638\uD658\uB418\uC9C0 \uC54A\uB294 HAL SDL1",
  id: "hal-sdl1-incompatible",
  level: 4
}, {
  value: "TouchGFX 4.12.3",
  id: "touchgfx-4123",
  level: 2
}, {
  value: "\uD558\uC704 \uD638\uD658\uC131",
  id: "backwards-compatibility-1",
  level: 3
}, {
  value: "\uC2A4\uD06C\uB9B0 \uC804\uD658",
  id: "screen-transitions",
  level: 4
}, {
  value: "\uC774\uC9C4 \uAE00\uAF34",
  id: "binary-fonts",
  level: 4
}, {
  value: "TouchGFX 4.11.0",
  id: "touchgfx-4110",
  level: 2
}, {
  value: "\uD558\uC704 \uD638\uD658\uC131",
  id: "backwards-compatibility-2",
  level: 3
}, {
  value: "TouchGFX 4.10.0",
  id: "touchgfx-4100",
  level: 2
}, {
  value: "4.9.x\uC5D0\uC11C \uC5C5\uADF8\uB808\uC774\uB4DC",
  id: "upgrading-from-49x",
  level: 3
}, {
  value: "\uD558\uC704 \uD638\uD658\uC131",
  id: "backwards-compatibility-3",
  level: 3
}, {
  value: "\uD504\uB85C\uC81D\uD2B8 \uC5C5\uB370\uC774\uD130 \uBB38\uC81C",
  id: "project-updater-issue",
  level: 3
}, {
  value: "TextArea \uBC0F ChromART(DMA2D)",
  id: "textarea-and-chromart-dma2d",
  level: 3
}, {
  value: "TouchGFX 4.9.0",
  id: "touchgfx-490",
  level: 2
}, {
  value: "4.8.0\uC5D0\uC11C \uC5C5\uADF8\uB808\uC774\uB4DC",
  id: "upgrading-from-480",
  level: 3
}, {
  value: "\uBC29\uBC95 1: \uC774\uC804 \uD30C\uC77C \uAD6C\uC870 \uC720\uC9C0",
  id: "method-1-retain-original-file-structure",
  level: 3
}, {
  value: "\uBC29\uBC95 2: \uC0C8 \uD15C\uD50C\uB9BF\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  id: "method-2-import-into-new-template",
  level: 3
}, {
  value: "\uBC29\uBC95 3: Designer\uAC00 \uC5C6\uB294 \uC218\uB3D9 \uC5C5\uADF8\uB808\uC774\uB4DC",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uBAA8\uB4E0 TouchGFX \uBC84\uC804\uC5D0 \uC874\uC7AC\uD558\uB294 \uAC83\uC73C\uB85C \uC54C\uB824\uC9C4 \uBB38\uC81C\uC640 \uAC00\uB2A5\uD55C \uD574\uACB0\uCC45\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB610\uD55C TouchGFX\uB97C \uD2B9\uC815 \uBC84\uC804\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uB370 \uD544\uC694\uD55C \uB2E8\uACC4\uAC00 \uC788\uB2E4\uBA74 \uD568\uAED8 \uC54C\uB824\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD604\uC7AC \uC0AC\uC6A9 \uC911\uC778 \uBC84\uC804\uC774 \uC774\uC804 \uB9B4\uB9AC\uC2A4\uB77C\uBA74 \uCD5C\uC2E0 \uB9B4\uB9AC\uC2A4 \uBC84\uC804\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uB2E8\uACC4\uB97C \uC218\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
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
    "href": "/4.20/ko/docs/development/ui-development/designer-user-guide/texts-view"
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
  }), `CubeMX 6.1.0 \uBC0F CubeProgrammer 2.6\uC5D0\uC11C \uC54C\uB824\uC9C4 \uBB38\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uC804 CubeMX 6.1.0\uBD80\uD130 CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C EWARM \uD504\uB85C\uC81D\uD2B8\uB294 X-CUBE-TOUCHGFX\uC640 \uD638\uD658\uB418\uC9C0 \uC54A\uB294\uB370, \uC774\uB294 "C/C++ Compiler" / "Language" \uC635\uC158\uC774 "Auto"\uC5D0\uC11C "C++"\uB85C \uBCC0\uACBD\uB418\uC5B4 \uC798\uBABB \uC124\uC815\uB418\uB294 \uBC14\uB78C\uC5D0 \uCEF4\uD30C\uC77C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB294 CubeMX 6.1.1\uC5D0\uC11C \uD574\uACB0\uB420 \uC608\uC815\uC785\uB2C8\uB2E4. \uD55C\uD3B8, \uC635\uC158\uC744 \uC218\uB3D9\uC73C\uB85C \uB2E4\uC2DC "Auto"\uB85C \uBCC0\uACBD\uD558\uBA74 \uCEF4\uD30C\uC77C \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC9C0\uB9CC CubeMX\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uBA74 \uC6D0\uB798 \uC124\uC815\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeProgrammer 2.6\uC5D0\uC11C\uB294 \uC678\uBD80 \uB85C\uB354(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.stldr`), `)\uC758 \uCC38\uC870 \uBC29\uC2DD\uACFC \uAD00\uB828\uB41C \uBC84\uADF8\uAC00 \uAE30\uC874 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF(AT)\uC5D0 \uC0AC\uC6A9\uB418\uB294 Makefile\uC744 \uC190\uC0C1\uC2DC\uD0AC \uBFD0\uB9CC \uC544\uB2C8\uB77C TouchGFX Designer\uC5D0\uC11C "Run Target\u201D \uAE30\uB2A5\uC758 \uC815\uC0C1\uC801\uC778 \uC791\uB3D9\uC744 \uBC29\uD574\uD569\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB294 \uD604\uC7AC AT \uBC84\uC804\uC744 \uAE30\uC900\uC73C\uB85C \uC0AC\uC6A9\uC790 \uD504\uB85C\uC81D\uD2B8\uC5D0\uB3C4 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uC774 \uBC84\uADF8\uC5D0 \uB300\uD55C \uBCF4\uC0C1\uC744 \uBAA9\uC801\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC5D0 \uB300\uD55C \uC5C5\uB370\uC774\uD2B8\uAC00 \uC608\uC815\uB418\uC5B4 \uC788\uC73C\uBA70, CubeProgrammer 2.5\uC640 2.6\uC5D0 \uBAA8\uB450 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB9CC\uC57D CubeProgrammer 2.6\uACFC \uD638\uD658\uB418\uC9C0 \uC54A\uB294 AT\uB97C \uAE30\uBC18\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD588\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uC815\uD558\uC5EC \uC9C0\uC6D0\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC678\uBD80 \uB85C\uB354\uB97C \uCC38\uC870\uD560 \uB54C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bin`), ` \uD3F4\uB354\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32CubeProgrammer_CLI.exe`), `\uB97C \uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C,`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer \uC124\uCE58 \uD3F4\uB354\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `bin`), ` \uD3F4\uB354\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `cd`), ` \uBA85\uB839\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uB798\uC640 \uAC19\uC774 \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.stldr`), ` \uD30C\uC77C\uC5D0 \uB300\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC0C1\uB300`), ` \uCC38\uC870\uB97C \uC774\uC6A9\uD574 \uC5F0\uACB0\uB41C \uB300\uC0C1\uC744 \uD504\uB85C\uADF8\uB798\uBC0D\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `@cd "$(st_stm32cube_programmer_bin_path)" && ./$(stm_stm32cube_programmer_exe) -c port=SWD -d $(application_path)/$(binary_output_path)/target.hex -el $(stm32cubeLoader_relative_path) -hardRst
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "The CubeProgrammer bug is solved in version 2.10."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "new-touchgfx-format"
  }), `\uC0C8\uB85C\uC6B4 .touchgfx \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX 4.17.0\uC5D0\uC11C TouchGFX 4.18.0\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uBA74\uC11C .touchfgx \uD30C\uC77C\uC758 \uB0B4\uC6A9\uC774 \uB450 \uAC00\uC9C0 \uC8FC\uC694 \uC601\uC5ED\uC5D0\uC11C \uD06C\uAC8C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C TouchGFX Designer\uB97C \uC0AC\uC6A9\uD574 .touchgfx \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 \uC5F4\uACE0 \uC800\uC7A5\uD558\uB294 \uAC83\uB9CC\uC73C\uB85C\uB3C4 .touchfgx \uD30C\uC77C\uC774 \uB300\uD3ED \uC5C5\uB370\uC774\uD2B8\uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC8FC\uC694 \uBCC0\uD654\uAC00 \uC77C\uC5B4\uB09C \uC601\uC5ED\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "default-values-are-not-written-to-touchgfx"
  }), `\uAE30\uBCF8 \uAC12\uC774 .touchgfx\uC5D0 \uC791\uC131\uB418\uC9C0 \uC54A\uC74C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC15\uC2A4 \uC624\uD504\uC14B X=0, Y=0 \uB610\uB294 \uAC80\uC740\uC0C9(\uBE68\uAC04\uC0C9=0, \uB179\uC0C9=0, \uD30C\uB780\uC0C9=0) \uAC19\uC740 \uAE30\uBCF8\uAC12\uC774 \uC788\uB294 \uC704\uC82F \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC774\uC804\uC5D0\uB294 .touchgfx \uD30C\uC77C\uC5D0 \uC791\uC131\uB418\uC5C8\uC9C0\uB9CC TouchGFX version 4.18.0\uBD80\uD130\uB294 \uC774\uB7EC\uD55C \uAE30\uBCF8\uAC12\uC774 \uC791\uC131\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C .touchgfx \uD30C\uC77C\uC758 \uC6A9\uB7C9\uC774 \uB2E4\uC18C \uC904\uC5B4\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "removed-textentries-block"
  }), `TextEntries \uBE14\uB85D \uC0AD\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8\uB85C\uC6B4 Single Use \uD14D\uC2A4\uD2B8\uAC00 \uB3D9\uC77C\uD55C id\uB97C \uAC16\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC77C\uBD80 \uAC1C\uBC1C\uC790\uC640 \uD504\uB85C\uC81D\uD2B8 \uBCD1\uD569\uC744 \uC6A9\uC774\uD558\uAC8C \uCD94\uC9C4\uD558\uAE30 \uC704\uD574 SingleUseId\uC758 \uC774\uB984\uC774 \uC2DC\uD000\uC2A4 \uBC88\uD638\uAC00 \uC544\uB2CC \uB09C\uC218\uC640 \uC784\uC758 \uBB38\uC790\uB97C \uD3EC\uD568\uD558\uB3C4\uB85D \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uB610\uD55C .touchgfx \uD30C\uC77C\uC5D0\uC11C "TextEntries\u201D \uC139\uC158\uC774 \uC0AD\uC81C\uB418\uC5B4 .touchgfx \uD30C\uC77C \uD06C\uAE30\uAC00 \uD06C\uAC8C \uC904\uC5B4\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd16bpp-fillrect-and-lcd16bpp-drawglyph"
  }), `LCD16bpp::fillRect \uBC0F LCD16bpp::drawGlyph`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCD16bpp\uC5D0\uC11C fillRect \uD568\uC218\uC640 drawGlyph \uD568\uC218\uAC00 \uC774\uC81C \uC904\uC5B4\uB4E0 16\uBE44\uD2B8(RGB565) \uC0C9\uC0C1\uC774 \uC544\uB2CC 24\uBE44\uD2B8 \uC0C9\uC0C1\uC744 DMA\uC5D0\uAC8C \uC804\uB2EC\uD569\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 \uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uC544\uB2CC \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC798\uBABB\uB41C \uC0C9\uC0C1\uC774 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC9C0\uB9CC CubeMX\uC5D0\uC11C DMA \uD074\uB798\uC2A4\uB97C \uB2E4\uC2DC \uC0DD\uC131\uD558\uBA74 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "makefile-and-xlsx"
  }), `Makefile \uBC0F xlsx`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX 4.18.0\uC740 \uC774\uC804\uC5D0 \uC0AC\uC6A9\uD588\uB358 .xlsx \uD615\uC2DD\uC774 \uC544\uB2CC \uC0C8\uB85C\uC6B4 .xml \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD574 \uD14D\uC2A4\uD2B8\uC640 \uBC88\uC5ED\uC744 \uC800\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB294 Makefile\uC640 Visual Studio \uD504\uB85C\uC81D\uD2B8\uC758 \uCC38\uC870 \uD30C\uC77C\uC778 "texts.xlsx"\uAC00 \uBAA8\uB450 "texts.xml"\uB85C \uBC14\uB00C\uC5B4\uC57C \uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. TextConvert \uB3C4\uAD6C\uB294 \uC774\uB7EC\uD55C \uBCC0\uD654\uB97C \uC778\uC2DD\uD558\uC5EC texts.xlsx \uD30C\uC77C\uC774 \uC874\uC7AC\uD558\uACE0, texts.xml \uD30C\uC77C\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB354\uB77C\uB3C4 \uC774\uD6C4\uC5D0 \uC0AC\uC6A9\uD560 \uB54C\uB9C8\uB2E4 texts.xlsx\uB97C texts.xml\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8\uB85C\uC6B4 \uC720\uD6A8 Makefile\uC744 \uBCF4\uACE0 \uC2F6\uB2E4\uBA74 TouchGFX Designer\uB97C \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4(\uBE44\uC5B4\uC788\uB294) \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD55C \uB2E4\uC74C generated/simulator/gcc/Makefile \uD3F4\uB354\uC5D0 \uB9CC\uB4E4\uC5B4\uC9C4 Makefile\uC744 \uCC3E\uC544\uBCF4\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "font-size-limit-in-textsxsd"
  }), `Font size limit in texts.xsd`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The texts.xsd which is used by the designer to validate the texts.xml has a limit on the font size of 255. If you have font sizes greater than 255, you will see an error message in the designer like this:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/font-size-limit-xsd.png",
    mdxType: "Figure"
  }, "Error message - Font size limit"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The workaround is to close the project, change the Typographies Size attribute from xs:unsignedByte to xs:unsignedInt in the texts.xsd and reopen the project.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sdl2-linker-error-on-linux"
  }), `Linux\uC758 SDL2 \uB9C1\uCEE4 \uC624\uB958`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 SDL2 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uC774\uC81C Windows \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB9CC \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. Linux \uC0AC\uC6A9\uC790\uB294 SDL2 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC9C1\uC811 \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. \uC124\uCE58 \uC791\uC5C5\uC740 \uD55C \uBC88\uC5D0 \uC644\uB8CC\uD558\uBA70, ubuntu\uC758 \uACBD\uC6B0 \uBA85\uB839\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo apt install libsdl2-dev libsdl2-image-dev
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7EC\uBA74 \uAC1C\uBC1C\uC6A9 \uD5E4\uB354 \uD30C\uC77C\uC744 \uD3EC\uD568\uD574 libsdl2\uC640 libsdl2-image\uAC00 \uC124\uCE58\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4-17-0"
  }), `TouchGFX 4.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-no-longer-support-setalpha"
  }), `\uD398\uC778\uD130\uAC00 \uB354 \uC774\uC0C1 setAlpha()\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F \uB80C\uB354\uB7EC(CWR)\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD398\uC778\uD130\uB294 \uC131\uB2A5 \uBB38\uC81C\uB85C \uC54C\uD30C\uB97C \uB354\uB294 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD398\uC778\uD130\uAC00 \uD3EC\uD568\uB41C \uCE94\uBC84\uC2A4 \uC704\uC82F\uC5D0\uC11C \uC54C\uD30C\uB97C \uC124\uC815\uD558\uBA74 \uC54C\uD30C \uD6A8\uACFC\uAC00 \uC9C0\uC18D\uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uCF54\uB4DC\uB97C \uB2E4\uC74C\uACFC \uAC19\uC740 \uBAA8\uC2B5\uC5D0\uC11C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
painter.setAlpha(128);
circle.setPainter(painter);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uACFC \uAC19\uC740 \uBAA8\uC2B5\uC73C\uB85C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
circle.setPainter(painter);
circle.setAlpha(128);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804\uC5D0 \uD398\uC778\uD130\uC640 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC5D0 \uC54C\uD30C\uB97C \uC801\uC6A9\uD588\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB450 \uC54C\uD30C \uAC12\uC744 \uACF1\uC148\uD55C \uD6C4 255\uB85C \uB098\uB204\uBA74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
painter.setAlpha(painterAlpha);
circle.setPainter(painter);
circle.setAlpha(circleAlpha);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` \uB2E4\uC74C\uACFC \uAC19\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));
circle.setPainter(painter);
circle.setAlpha((painterAlpha * circleAlpha) / 255);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 255\uB85C \uB098\uB204\uC9C0 \uC54A\uACE0 LCD::div255()\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-the-hal-class"
  }), `HAL \uD074\uB798\uC2A4 \uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uC804 4.17.0 \uC774\uC804\uC5D0\uB294 \uD5E4\uB354 \uD30C\uC77C touchgfx/hal/HAL.hpp\uAC00 HAL\uC744 \uC804\uD600 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC77C\uBD80 \uD30C\uC77C\uC5D0 \uD3EC\uD568\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uBD88\uD544\uC694\uD55C \uCC38\uC870\uB294 \uC0AD\uC81C\uB418\uC5C8\uC9C0\uB9CC \uACB0\uACFC\uC801\uC73C\uB85C \uCEF4\uD30C\uC77C\uB7EC\uAC00 HAL\uC744 \uC778\uC2DD\uD558\uC9C0 \uBABB\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uCEF4\uD30C\uC77C\uD558\uC9C0 \uBABB\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBB38\uC81C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 HAL \uD5E4\uB354 \uD30C\uC77C\uC744 \uCD94\uAC00\uD558\uC5EC \uAC04\uB2E8\uD558\uAC8C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/hal/HAL.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C Screen \uD074\uB798\uC2A4\uC5D0 \uC2A4\uD06C\uB9B0 \uD06C\uAE30\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uB294 getScreenWidth() \uD568\uC218\uC640 getScreenHeight() \uD568\uC218\uAC00 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB450 \uD568\uC218\uB294 \uC2A4\uD06C\uB9B0 \uD06C\uAE30\uB97C \uC9C0\uC815\uD558\uB294 \uB370 \uC720\uC6A9\uD55C \uBC29\uBC95\uC73C\uB85C Screen1View.cpp \uAC19\uC740 \uC2A4\uD06C\uB9B0 \uC11C\uBE0C \uD074\uB798\uC2A4\uC5D0\uC11C \uC9C1\uC811 \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "fmc-display-interface-in-touchgfx-generator"
  }), `TouchGFX Generator\uC758 FMC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uC5D0\uC11C \uC0C8\uB85C\uC6B4 FMC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0 CubeMX 6.2.1\uC5D0\uC11C \uC0DD\uC131\uD558\uBA74 FMC \uBC45\uD06C\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uBA54\uBAA8\uB9AC \uC624\uD504\uC14B`), `\uC774 \uC815\uD655\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(0). \uC774 \uBB38\uC81C\uB294 CubeMX 6.3.0\uC5D0\uC11C \uD574\uACB0\uB420 \uC608\uC815\uC774\uBA70, \uB9B4\uB9AC\uC2A4\uB418\uBA74 X-CUBE-TouchGFX\uC758 \uCD5C\uC18C \uD544\uC694 \uBC84\uC804\uB3C4 6.2.1\uC774 \uC544\uB2CC 6.3.0\uC73C\uB85C \uC0C1\uD5A5\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB420 \uB54C\uAE4C\uC9C0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\uC5D0\uC11C FMC \uBC45\uD06C \uBA54\uBAA8\uB9AC \uC8FC\uC18C\uB97C \uC815\uD655\uD558\uAC8C \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC7AC\uC0DD\uC131 \uC2DC \uB36E\uC5B4\uC4F0\uAC8C \uB429\uB2C8\uB2E4). \uC608\uB97C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#define FMC_BANK1_REG ((uint16_t *) 0x60000000)
#define FMC_BANK1_MEM ((uint16_t *) 0x60000002)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0\uB3C4 \uC0AC\uC6A9\uC790\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `\uC5D0\uC11C \uC644\uC804\uD788 \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "l8-images-in-16-24-or-32bpp-configurations"
  }), `16- 24- \uB610\uB294 32bpp \uAD6C\uC131\uC5D0\uC11C\uC758 L8 \uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Cortex-M33\uC740 \uD604\uC7AC TouchGFX\uC5D0\uC11C \uC644\uBCBD\uD558\uAC8C \uC9C0\uC6D0\uB418\uC9C0\uB9CC \uD604\uC7AC CubeMX \uBC84\uC804(v6.0.1)\uC5D0\uC11C\uB294 CubeMX\uC5D0 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB420 \uB54C\uAE4C\uC9C0 "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uD329"(\uD2B9\uD788 TouchGFX Generator)\uC744 \uBA40\uD2F0 \uCEE8\uD14D\uC2A4\uD2B8 MCU\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC Cortex-M33 \uAE30\uBC18 MCU\uC5D0\uC11C "Trust Zone\u201D\uC744 \uBE44\uD65C\uC131\uD654\uD558\uBA74 MCU\uAC00 \uB2E8\uC77C \uCEE8\uD14D\uC2A4\uD2B8\uB85C \uC81C\uD55C\uB418\uC5B4 TouchGFX Generator\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB85C\uC81D\uD2B8 \uC635\uC158\uC5D0\uC11C ARM Compiler v6.x\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARMCC \uB77C\uC774\uBE0C\uB7EC\uB9AC(CubeMX\uC5D0\uC11C \uAD6C\uC131)\uAC00 \uC544\uB2CC ARMCLANG \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uC5F0\uACB0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `CubeMX\uC5D0\uC11C FreeRTOS\uB97C \uAD6C\uC131\uD55C \uACBD\uC6B0 FreeRTOS \uC774\uC2DD \uAC00\uB2A5 \uD30C\uC77C\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/RVDS`), ` \uD3F4\uB354(ARM Compiler v5.x\uC758 \uAE30\uBCF8 \uD3F4\uB354)\uAC00 \uC544\uB2CC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/GCC`), ` \uD3F4\uB354\uC5D0\uC11C \uAC00\uC838\uC640\uC57C ARM Compiler v6.x\uC640 \uD638\uD658\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `MCU \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX\uAC00 ARMCLANG(ARM \uCEF4\uD30C\uC77C\uB7EC v6.x) \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M0`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M4f`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M7`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cortex-M33`), `\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uB54C\uBB38\uC5D0 CubeMX\uAC00 ARMCLANG \uCEF4\uD30C\uC77C\uB7EC(ARM \uCEF4\uD30C\uC77C\uB7EC v6.x)\uB97C \uC2E4\uD589\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCEF4\uD30C\uC77C\uB7EC\uB97C \uC0AC\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uC0AC\uC6A9\uC790\uB294 Keil uVision\uC758 \uD504\uB85C\uC81D\uD2B8 \uC635\uC158\uC5D0\uC11C \uCEF4\uD30C\uC77C\uB7EC\uB97C \uC218\uB3D9\uC73C\uB85C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uB2E8, TrustZone\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC139\uC158\uC5D0\uC11C \uC218\uB3D9\uC73C\uB85C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4140"
  }), `TouchGFX 4.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "armclang-support"
  }), `ARMCLANG Support`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX\uC5D0\uC11C FreeRTOS \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uAD6C\uC131\uD55C \uACBD\uC6B0 ARMCC(ARM Compiler v5.x)\uB97C \uC0AC\uC6A9\uD574 \uC0DD\uC131\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0 FreeRTOS `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC774\uC2DD \uAC00\uB2A5`), ` \uD30C\uC77C\uC774 \uB9CC\uB4E4\uC5B4\uC9C0\uC9C0\uB9CC ARMCLANG\uACFC \uD638\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC218\uB3D9\uC73C\uB85C \uAD50\uCCB4\uD574\uC57C \uD569\uB2C8\uB2E4. \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uD55C \uB0B4\uC6A9\uC740 CubeMX\uC5D0\uC11C "Generate code"\uB97C \uC2E4\uD589\uD560 \uB54C\uB9C8\uB2E4 \uB36E\uC5B4\uC4F0\uAC8C \uB418\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uC9C0\uC18D\uC801\uC73C\uB85C \uAD00\uB9AC(git \uB4F1)\uD558\uC5EC \uD2B9\uC815 \uBCC0\uACBD \uB0B4\uC6A9\uC744 \uC2E4\uD589 \uCDE8\uC18C\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC694\uC57D\uD558\uC790\uBA74, CubeMX\uB294 \uC624\uC9C1 ARM Compiler v5.x \uCEF4\uD30C\uC77C\uB7EC \uD504\uB85C\uC81D\uD2B8\uB9CC \uC0DD\uC131\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uC9C0\uC18D\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uC9C0 \uC54A\uB294 \uD55C CubeMX\uC5D0\uC11C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB420 \uB54C\uB9C8\uB2E4 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC694\uC57D\uD558\uC790\uBA74, CubeMX\uB294 \uC624\uC9C1 ARM Compiler v5.x \uCEF4\uD30C\uC77C\uB7EC \uD504\uB85C\uC81D\uD2B8\uB9CC \uC0DD\uC131\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uC9C0\uC18D\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uC9C0 \uC54A\uB294 \uD55C CubeMX\uC5D0\uC11C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB420 \uB54C\uB9C8\uB2E4 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Keil uVision\uC5D0\uC11C ARMCLANG(v. 6.x)\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `ARMCC \uB77C\uC774\uBE0C\uB7EC\uB9AC(CubeMX\uC5D0\uC11C \uAD6C\uC131)\uAC00 \uC544\uB2CC ARMCLANG \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uC5F0\uACB0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `CubeMX\uC5D0\uC11C FreeRTOS\uB97C \uAD6C\uC131\uD55C \uACBD\uC6B0 FreeRTOS \uC774\uC2DD \uAC00\uB2A5 \uD30C\uC77C\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/RVDS`), ` \uD3F4\uB354(ARM Compiler v5.x\uC758 \uAE30\uBCF8 \uD3F4\uB354)\uAC00 \uC544\uB2CC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `portable/GCC`), ` \uD3F4\uB354\uC5D0\uC11C \uAC00\uC838\uC640\uC57C ARM Compiler v6.x\uC640 \uD638\uD658\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "workflow"
  }), `\uC6CC\uD06C\uD50C\uB85C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC6CC\uD06C\uD50C\uB85C\uB294 Keil uVision\uC5D0\uC11C ARM Compiler v6.x\uB97C \uAD6C\uC131\uD558\uC5EC CubeMX \uC0DD\uC131 \uD504\uB85C\uC81D\uD2B8 \uBC0F TouchGFX ARMCLANG \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD55C \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Keil uVision\uC5D0\uC11C ARMCLANG(v. 6.x)\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/armclang-support.png",
    noShadow: true,
    width: "650",
    mdxType: "Figure"
  }, "ARMCLANG Support"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 2
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `CubeMX\uC5D0\uC11C FreeRTOS\uB97C \uAD6C\uC131\uD558\uBA74 CubeMX\uAC00 \uC798\uBABB\uB41C \uC774\uC2DD \uAC00\uB2A5 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC798\uBABB\uB41C \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uB4E4\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `port.c`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portmacro.h`), ` \uD30C\uC77C(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC)%EB%A1%9C"
  }), `https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC)\uB85C`), ` \uC218\uB3D9\uC73C\uB85C \uAD50\uCCB4\uD558\uAC70\uB098, \uD639\uC740 FreeRTOS \uB9B4\uB9AC\uC2A4\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uD574\uB2F9 \uD30C\uC77C\uC744 \uC9C1\uC811 \uCC3E\uC544\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC544\uB798\uC640 \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `port.c`), `\uB97C \uAD50\uCCB4\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-port-c.png",
    noShadow: true,
    width: "250",
    mdxType: "Figure"
  }, `port.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `include \uACBD\uB85C \uC124\uC815\uC744 \uBCC0\uACBD\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portable/GCC`), ` \uD3F4\uB354\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `portmacro.h`), ` \uD30C\uC77C\uC774 \uD3EC\uD568\uB418\uB3C4\uB85D \uC124\uC815\uD569\uB2C8\uB2E4(\uC5EC\uAE30\uC5D0\uC11C\uB294 Cortex-M7). `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/known-issues/keil-port-include.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, `Portable include \uACBD\uB85C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uB294 "Generate Code\u201D\uC758 Post-Generate \uB2E8\uACC4\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD55C \uCEF4\uD30C\uC77C\uB7EC \uBC84\uC804\uC5D0 \uB530\uB77C \uC815\uD655\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC790\uB3D9\uC73C\uB85C \uC0BD\uC785\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4130"
  }), `TouchGFX 4.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bugs"
  }), `\uBC84\uADF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "font-converter"
  }), `\uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804\uC5D0\uB294 \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uAC00 \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD14D\uC2A4\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAE00\uB9AC\uD504\uC640 \uC0C1\uAD00\uC5C6\uC774 \uAE00\uAF34 \uADDC\uCE59\uC5D0 \uD3EC\uD568\uB41C \uC720\uB2C8\uCF54\uB4DC\uC5D0 \uB9DE\uCDB0 \uAE00\uB9AC\uD504 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 \uAE00\uB9AC\uD504 \uD53D\uC140 \uB370\uC774\uD130\uAC00 \uCD94\uAC00\uB85C \uBA87 \uBA54\uAC00\uBC14\uC774\uD2B8 \uB298\uC5B4\uB0A0 \uAC00\uB2A5\uC131\uC774 \uB192\uC558\uC2B5\uB2C8\uB2E4. \uC774\uC81C\uB294 \uC0C8\uB85C\uC6B4 \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C(Windows \uBC0F Linux)\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uAE00\uB9AC\uD504 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uB354 \uC774\uC0C1 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uC5EC\uAE30\uC5D0\uC11C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/fontconvert_fix.zip"
  }), `fontconvert_fix.zip`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `4.13.0\uC774 \uC124\uCE58\uB41C \uB8E8\uD2B8 \uACBD\uB85C\uC5D0\uC11C \uC774 \uD30C\uC77C\uC758 \uC555\uCD95\uC744 \uD480\uBA74 \uB0B4\uBD80\uC5D0\uC11C \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C \uBC14\uC774\uB108\uB9AC\uAC00 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx\\framework\\tools`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-compiler-support"
  }), `\uCD94\uAC00 \uCEF4\uD30C\uC77C\uB7EC \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `4.13.0\uC774 \uC124\uCE58\uB41C \uB8E8\uD2B8 \uACBD\uB85C\uC5D0\uC11C \uC774 \uD30C\uC77C\uC758 \uC555\uCD95\uC744 \uD480\uBA74 \uB0B4\uBD80\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_core_clang.lib`), ` \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/touchgfx_core_clang.zip"
  }), `touchgfx_core_clang.zip`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `4.13.0\uC774 \uC124\uCE58\uB41C \uB8E8\uD2B8 \uACBD\uB85C\uC5D0\uC11C \uC774 \uD30C\uC77C\uC758 \uC555\uCD95\uC744 \uD480\uBA74 \uB0B4\uBD80\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_core_clang.lib`), ` \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx\\lib\\core\\cortex_m7\\Keil`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility"
  }), `\uD558\uC704 \uD638\uD658\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "deprecated-features"
  }), `\uC9C0\uC6D0 \uC885\uB8CC \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextureMapper\uB294 TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uCF54\uB4DC \uACF5\uAC04\uC744 \uC904\uC774\uAE30 \uC704\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4. TouchGFX Designer\uAC00 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uC5EC TextureMapper\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC6D0 \uC885\uB8CC\uB41C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TRANSPARENT_COL`), `\uC758 \uC815\uC758`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }), `TextureMapper\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextureMapper\uB294 TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uCF54\uB4DC \uACF5\uAC04\uC744 \uC904\uC774\uAE30 \uC704\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4. TouchGFX Designer\uAC00 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uC5EC TextureMapper\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804 \uD504\uB85C\uC81D\uD2B8\uB97C TouchGFX 4.13\uC73C\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uACE0, TouchGFX 4.13\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 \uC774\uB7EC\uD55C \uACFC\uC815\uC744 TouchGFX Designer\uC5D0\uC11C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB807\uC9C0 \uC54A\uACE0 \uC218\uB3D9\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uC5EC TextureMapper\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 TextureMapper\uAC00 \uC2A4\uD06C\uB9B0\uC5D0 \uB4DC\uB85C\uC789\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/designer-user-guide/config-view#framework-features"
  }), `TouchGFX \uAE30\uB2A5 \uAD6C\uC131`), `\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "hal-sdl1-incompatible"
  }), `\uD638\uD658\uB418\uC9C0 \uC54A\uB294 HAL SDL1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC TouchGFX 4.8.0 \uC774\uC804 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774\uB77C\uBA74 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C HALSDL(2 \uC544\uB2D8)\uC744 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC2DC\uBBAC\uB808\uC774\uD130 HAL\uC740 TouchGFX\uC5D0 \uB354\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC TouchGFX 4.8.0 \uC774\uC804 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774\uB77C\uBA74 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C HALSDL(2 \uC544\uB2D8)\uC744 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC2DC\uBBAC\uB808\uC774\uD130 HAL\uC740 TouchGFX\uC5D0 \uB354\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. HALSDL\uC5D0\uB294 \uC774\uC804\uC5D0 TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uD3EC\uD568\uB418\uC5C8\uB358 \uB450 \uD568\uC218\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB450 \uD568\uC218\uB97C \uC218\uB3D9\uC73C\uB85C \uC544\uB798\uC640 \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HALSDL.cpp`), `\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\uD558\uC704 \uD638\uD658\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "screen-transitions"
  }), `\uC2A4\uD06C\uB9B0 \uC804\uD658`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCD08\uAE30 \uBC84\uC804\uC5D0\uC11C\uB294 \uC2A4\uD06C\uB9B0 \uC804\uD658\uC774 \uC644\uB8CC\uB41C \uD6C4\uC5D0 \uC804\uCCB4 \uD654\uBA74\uC744 \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4.\xA0\uC774\uC804\uC5D0\uB294 \uC774\uB807\uAC8C \uCD94\uAC00\uB85C \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD558\uC5EC \uC77C\uBD80 \uB290\uB9B0 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC131\uB2A5 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC5B4\uB5A4 \uC774\uC720\uB4E0\uC9C0 \uC774\uB807\uAC8C \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD574\uC57C \uD55C\uB2E4\uBA74 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uAD00\uB828 \uC601\uC5ED\uC744 \uBB34\uD6A8\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC804\uD658\uD560 \uC2A4\uD06C\uB9B0\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen::afterTransition()`), ` \uAC00\uC0C1 \uD568\uC218\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container.invalidate()`), `\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "binary-fonts"
  }), `\uC774\uC9C4 \uAE00\uAF34`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC774\uC9C4 \uAE00\uAF34\uC5D0 \uCEE4\uB2DD \uB370\uC774\uD130\uB3C4 \uD3EC\uD568\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC774\uC9C4 \uAE00\uAF34\uC758 \uD615\uC2DD\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uC774\uC9C4 \uAE00\uAF34 \uD30C\uC77C\uC744 \uB2E4\uC2DC \uC0DD\uC131\uD574\uC57C \uD558\uBA70, \uC774\uC804 \uD30C\uC77C\uC740 \uC62C\uBC14\uB974\uAC8C \uC2E4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Makefile \uC124\uC815 \uBC29\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uB974\uC9C0\uB9CC \uC77C\uBC18\uC801\uC73C\uB85C \uBAA8\uB4E0 \uC560\uC14B\uC744 \uB2E4\uC2DC \uC0DD\uC131\uD558\uC5EC \uC2E4\uD589\uB429\uB2C8\uB2E4(\uC608: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `make -f simulator/gcc/Makefile clean assets`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4110"
  }), `TouchGFX 4.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "backwards-compatibility-2"
  }), `\uD558\uC704 \uD638\uD658\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/include/touchgfx/lcd/LCD.hpp`), `\uC5D0\uC11C \uCD08\uAE30 \uBC84\uC804\uC5D0 \uC2E4\uC218\uB85C \uC0BD\uC785\uB418\uC5C8\uB358 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/hal/HAL.hpp`), ` \uD30C\uC77C\uC758 include\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD.hpp`), `\uAC00 \uD3EC\uD568\uB41C \uD30C\uC77C\uC5D0\uC11C \uCEF4\uD30C\uC77C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL.hpp`), ` \uB0B4\uC6A9\uC744 \uC774\uC6A9\uD558\uAC8C \uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBB38\uC81C \uC5ED\uC2DC \uD30C\uC77C\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/include/touchgfx/hal/HAL.hpp`), `\uB97C \uCD94\uAC00\uD558\uBA74 \uD574\uACB0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-4100"
  }), `TouchGFX 4.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "upgrading-from-49x"
  }), `4.9.x\uC5D0\uC11C \uC5C5\uADF8\uB808\uC774\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uBC84\uC804 4.10.0\uBD80\uD130 STM32 MCU\uC5D0\uC11C\uB9CC \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uC774\uC804 \uD504\uB85C\uC81D\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2DC\uC791 \uB2E8\uACC4\uC5D0\uC11C \uC544\uB798 \uAC15\uC870 \uD45C\uC2DC\uB41C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uC5EC TouchGFX\uC5D0\uAC8C STM32 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC2E4\uD589\uD55C\uB2E4\uB294 \uAC83\uC744 \uC54C\uB9BD\uB2C8\uB2E4. \uCD94\uAC00\uD560 \uC704\uCE58\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BoardConfiguration.cpp`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `hw_init()`), ` \uD568\uC218\uC758 \uB9C8\uC9C0\uB9C9 \uBD80\uBD84\uC774 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\uD558\uC704 \uD638\uD658\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\\touchgfx\\framework\\include\\touchgfx\\canvas_widget_renderer\\RGBA8.hpp`), `\uB294 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "project-updater-issue"
  }), `\uD504\uB85C\uC81D\uD2B8 \uC5C5\uB370\uC774\uD130 \uBB38\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uD638\uCD9C\uB418\uB294 IAR \uBC0F Keil \uD504\uB85C\uC81D\uD2B8 \uC5C5\uB370\uC774\uD130\uB294 \uAC01 IDE\uC5D0 \uC124\uC815\uB41C \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uD30C\uC77C \uB808\uBCA8 \uCD5C\uC801\uD654\uB97C \uACE0\uB824\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "textarea-and-chromart-dma2d"
  }), `TextArea \uBC0F ChromART(DMA2D)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ChromART\uB97C \uC0AC\uC6A9\uD574 TextArea\uB97C \uB80C\uB354\uB9C1\uD558\uBA74(TextArea\uAC00 \uD56D\uC0C1 \uC704\uC5D0 \uC788\uB294 \uC694\uC18C\uC774\uAE30 \uB54C\uBB38\uC5D0 \uB9C8\uC9C0\uB9C9\uC5D0 \uB4DC\uB85C\uC789\uB418\uB294 \uACBD\uC6B0) \uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08\uC744 \uC870\uAE30\uC5D0 \uD574\uC81C\uD558\uAE30 \uB54C\uBB38\uC5D0 \uACB0\uACFC\uC801\uC73C\uB85C \uB108\uBB34 \uC774\uB978 \uC2DC\uAE30\uC5D0 \uC644\uB8CC\uB418\uC5B4 \uD604\uC7AC \uD504\uB808\uC784\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC77C\uB2E8 TouchGFX\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\uC774 \uD638\uCD9C\uB418\uBA74 DMA \uC5F0\uC0B0\uC744 \uD3EC\uD568\uD574 \uBAA8\uB4E0 \uB4DC\uB85C\uC789 \uC5F0\uC0B0\uC774 \uC644\uB8CC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC TextArea\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uBCF4\uD638\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC808\uCC28\uB97C \uC704\uBC18\uD558\uC5EC DMA \uC5F0\uC0B0\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\uC5D0\uC11C \uAC12\uC774 \uBC18\uD658\uB41C \uD6C4\uC5D0\uB3C4 \uACC4\uC18D \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC758 \uC808\uCC28\uB294 \uB2E4\uC74C \uC911 \uD55C \uAC00\uC9C0\uB97C \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAE09\uB2C8\uB2E4(\uD3EC\uC778\uD130\uB97C \uD504\uB808\uC784\uBC84\uD37C\uB85C \uBC18\uD658).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB808\uC784\uBC84\uD37C \uB0B4\uC5D0\uC11C \uC694\uC18C\uB97C \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4.\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uC7A0\uAE08\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD639\uC740 DMA \uC5F0\uC0B0\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 \uD504\uB808\uC784\uBC84\uD37C \uB3D9\uAE30\uD654\uAC00 \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `4.10.0\uC5D0\uC11C\uB294 TextArea\uAC00 \uC704\uC758 \uB450 \uC808\uCC28\uB97C \uD63C\uD569\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD604\uC7AC \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB9E8 \uC704\uC5D0 \uC788\uB294 \uC694\uC18C(\uB9C8\uC9C0\uB9C9\uC5D0 \uB4DC\uB85C\uC789)\uC778 \uACBD\uC6B0\uC5D0\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uAE00\uB9AC\uCE58\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBC84\uADF8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\uC744 \uC7AC\uC815\uC758\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\uC744 \uC218\uB3D9\uC73C\uB85C \uBCF4\uD638\uD558\uBA74 \uD574\uACB0\uB429\uB2C8\uB2E4(F4 HAL \uAE30\uC900). \uADF8\uB7EC\uBA74 ChromART \uC5F0\uC0B0\uC744 \uC544\uC9C1 \uCC98\uB9AC \uC911\uC77C \uACBD\uC6B0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `endFrame()`), `\uC774 \uBC18\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\xA0\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `4.8.0\uC5D0\uC11C \uC5C5\uADF8\uB808\uC774\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC758 \uB3C4\uC785\uC73C\uB85C \uBCF4\uB4DC \uC9C0\uC6D0 \uD328\uD0A4\uC9C0\uAC00 \uCF54\uC5B4 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uBD84\uB9AC\uB418\uBA74\uC11C 4.9.0\uC5D0\uC11C\uB294 \uC218\uB9CE\uC740 \uC800\uB808\uBCA8 \uB4DC\uB77C\uC774\uBC84\uB97C \uBE44\uB86F\uD55C \uAE30\uD0C0 \uD30C\uC77C\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx`), ` \uD3F4\uB354\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC0AD\uC81C\uB41C \uD30C\uC77C\uB4E4\uC740 \uC774\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB2E8\uC21C\uD788 touchgfx \uD3F4\uB354\uB9CC \uBCC0\uACBD\uD55C\uB2E4\uACE0 \uD574\uC11C 4.9.0\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uB418\uB294 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC77C\uBD80 BSP \uD30C\uC77C\uC774 \uB204\uB77D\uB420 \uAC00\uB2A5\uC131\uC774 \uB192\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC624\uD788\uB824 TouchGFX Designer\uAC00 \uC5C5\uADF8\uB808\uC774\uB4DC\uB97C \uC790\uB3D9 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5C5\uADF8\uB808\uC774\uB4DC\uC5D0\uB294 \uB450 \uAC00\uC9C0 \uBC29\uC2DD\uC774 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC790\uC2E0\uC5D0\uAC8C \uAC00\uC7A5 \uC801\uD569\uD55C \uBC29\uC2DD\uC744 \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\uC5C5\uADF8\uB808\uC774\uB4DC \uC804\uC5D0 \uBC18\uB4DC\uC2DC \uD504\uB85C\uC81D\uD2B8\uB97C \uBC31\uC5C5\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-1-retain-original-file-structure"
  }), `\uBC29\uBC95 1: \uC774\uC804 \uD30C\uC77C \uAD6C\uC870 \uC720\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBC29\uBC95\uC740 \uC0C8 Designer 4.9.0\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4\uAE30\uB9CC \uD558\uBA74 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 TouchGFX Designer\uAC00 \uC5C5\uADF8\uB808\uC774\uB4DC \uC5EC\uBD80\uB97C \uBB3B\uACE0, \uC5EC\uAE30\uC11C OK\uB97C \uD074\uB9AD\uD558\uBA74 TouchGFX Designer\uAC00 \uD544\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB54C TouchGFX Designer\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC904\uC5B4\uB4E0 \uC0C8 touchgfx \uD3F4\uB354\uC758 \uC555\uCD95\uC744 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD480\uACE0 TouchGFX \uACBD\uB85C\uB97C \uC5EC\uAE30\uC5D0 \uB9DE\uAC8C \uC218\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB85C\uC81D\uD2B8\uAC00 \uACC4\uC18D \uCEF4\uD30C\uC77C\uD560 \uC218 \uC788\uB3C4\uB85D touchgfx \uD3F4\uB354\uC5D0\uC11C \uC0AD\uC81C\uB41C \uD30C\uC77C\uC744 \uBAA8\uB450 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uC555\uCD95\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBC29\uBC95\uC740 \uAC70\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uADF8\uB300\uB85C \uC720\uC9C0\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC774\uC804 \uD30C\uC77C \uAD6C\uC870\uAC00 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC801\uD569\uD55C \uACBD\uC6B0\uC5D0\uB294 \uAC00\uC7A5 \uBB34\uB09C\uD558\uAC8C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC758 \uBE60\uB978 \uC18D\uB3C4\uAC00 \uC8FC\uB294 \uC774\uC810(\uAC01 \uD30C\uC77C\uC774 \uC544\uB2CC \uC774\uBBF8\uC9C0 \uD3F4\uB354\uC5D0\uC11C \uC791\uC5C5)\uC744 \uC774\uC6A9\uD558\uC9C0 \uBABB\uD558\uB294 \uAC83\uC774 \uAC00\uC7A5 \uD070 \uB2E8\uC810\uC785\uB2C8\uB2E4. \uADF8\uB807\uC9C0\uB9CC Makefile\uC744 \uC218\uC815\uD558\uBA74 \uC774 \uBC29\uBC95\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-2-import-into-new-template"
  }), `\uBC29\uBC95 2: \uC0C8 \uD15C\uD50C\uB9BF\uC73C\uB85C \uAC00\uC838\uC624\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0C8\uB85C\uC6B4 \uD15C\uD50C\uB9BF \uAE30\uBC18 \uD30C\uC77C \uAD6C\uC870\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uB824\uBA74 \uBA3C\uC800 Designer\uC5D0\uC11C \uC704\uC758 \uBC29\uBC95 1\uC744 \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uD574\uB2F9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF(\uC2DC\uBBAC\uB808\uC774\uD130 \uB610\uB294 \uD3C9\uAC00 \uBCF4\uB4DC\uC5D0 \uC801\uD569\uD55C \uD15C\uD50C\uB9BF)\uC744 \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC0C8\uB85C \uC0DD\uC131\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C Designer\uC5D0\uC11C \uC5F4\uACE0 \uC0C1\uB2E8 \uBA54\uB274\uC5D0\uC11C "Edit -> Import GUI"\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4. \uB300\uD654\uC0C1\uC790\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uC758 .touchgfx \uD30C\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 Designer\uAC00 \uC560\uC14B\uC744 \uD3EC\uD568\uD55C \uBAA8\uB4E0 UI \uD30C\uC77C\uC744 \uC0C8\uB85C \uC0DD\uC131\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC790\uB3D9\uC73C\uB85C \uAC00\uC838\uC635\uB2C8\uB2E4. \uB9CC\uC57D\uC5D0 gui \uD3F4\uB354 \uC678\uBD80\uC5D0\uC11C \uB2E4\uB978 \uCF54\uB4DC\uB97C \uCD94\uAC00\uD588\uB2E4\uBA74 \uD574\uB2F9\uD558\uB294 \uD30C\uC77C\uB4E4\uC744 \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC9C1\uC811 \uBCF5\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "method-3-manual-upgrade-without-designer"
  }), `\uBC29\uBC95 3: Designer\uAC00 \uC5C6\uB294 \uC218\uB3D9 \uC5C5\uADF8\uB808\uC774\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 touchgfx \uD3F4\uB354\uB97C 4.9.0\uC774 \uC124\uCE58\uB41C \uD3F4\uB354\uB85C \uAD50\uCCB4\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "http://ftp.draupnergraphics.com/TouchGFX/Evaluation/4.9.0/Qll3iKK54AnJer7XRNm2/fw_delta_4.8.0_4.9.0.zip"
  }), `\uC774 zip \uD30C\uC77C`), `\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC touchgfx \uD3F4\uB354\uB85C \uC555\uCD95\uC744 \uD47C \uB2E4\uC74C \uC0AD\uC81C\uB41C \uD30C\uC77C\uB4E4\uC744 \uBCF5\uAD6C\uD569\uB2C8\uB2E4.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);