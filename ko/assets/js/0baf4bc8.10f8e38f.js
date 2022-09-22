"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4879],{

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

/***/ 26818:
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
  title: "Generator User Guide"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-generator",
  "id": "development/touchgfx-hal-development/touchgfx-generator",
  "title": "Generator User Guide",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-generator.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-generator",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-generator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-generator",
    "title": "Generator User Guide"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Abstraction Layer Architecture",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-architecture"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/ko/docs/category/scenarios"
  }
};
const assets = {};






const toc = [{
  value: "TouchGFX Generator \uD65C\uC131\uD654",
  id: "enabling-touchgfx-generator",
  level: 2
}, {
  value: "\uC0DD\uC131 \uCF54\uB4DC \uC544\uD0A4\uD14D\uCC98",
  id: "generated-code-architecture",
  level: 2
}, {
  value: "\uAE30\uB2A5 \uAC1C\uC694",
  id: "feature-overview",
  level: 2
}, {
  value: "Display",
  id: "display",
  level: 2
}, {
  value: "Interface and dimensions",
  id: "interface-and-dimensions",
  level: 3
}, {
  value: "\uD504\uB808\uC784 \uBC84\uD37C \uD53D\uC140 \uD615\uC2DD",
  id: "framebuffer-pixel-format",
  level: 3
}, {
  value: "Buffering Strategy",
  id: "buffering-strategies",
  level: 3
}, {
  value: "Driver",
  id: "driver",
  level: 2
}, {
  value: "Application Tick Source",
  id: "application-tick-source",
  level: 3
}, {
  value: "Graphics Accelerator",
  id: "graphics-accelerator",
  level: 3
}, {
  value: "Real-Time Operating System",
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
  value: "\uAE30\uD0C0 CMSIS \uD638\uD658 OS",
  id: "other-cmsis-compliant-os",
  level: 4
}, {
  value: "\uCD94\uAC00 \uAE30\uB2A5",
  id: "additional-features",
  level: 3
}, {
  value: "External Data Reader",
  id: "external-data-reader",
  level: 4
}, {
  value: "8bit LTDC Color Look-up Table",
  id: "8bit-ltdc-color-look-up-table",
  level: 4
}, {
  value: "Video Decoding",
  id: "video-decoding",
  level: 2
}, {
  value: "Type",
  id: "video-decoding-type",
  level: 3
}, {
  value: "Concurrent videos",
  id: "video-decoding-number",
  level: 3
}, {
  value: "Strategy",
  id: "video-decoding-strategy",
  level: 3
}, {
  value: "Decode Format",
  id: "decode-format",
  level: 3
}, {
  value: "\uBC84\uD37C \uD06C\uAE30",
  id: "video-decoding-buffer-size",
  level: 3
}, {
  value: "\uC0DD\uC131\uB41C \uD504\uB85C\uC81D\uD2B8",
  id: "generated-project",
  level: 2
}, {
  value: "TouchGFX Designer \uD504\uB85C\uC81D\uD2B8",
  id: "touchgfx-designer-project",
  level: 2
}, {
  value: "\uC0DD\uC131\uB41C \uB3D9\uC791 \uC218\uC815",
  id: "modifying-generated-behavior",
  level: 2
}, {
  value: "\uD504\uB85C\uC81D\uD2B8 \uC5C5\uADF8\uB808\uC774\uB4DC",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X-CUBE-TOUCHGFX\uC5D0 \uD3EC\uD568\uB41C TouchGFX Generator\uB294 \uAC1C\uBC1C\uC790\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC2E4\uD589\uB418\uB3C4\uB85D TouchGFX\uB97C \uAD6C\uC131\uD558\uB294 \uAC83\uC744 \uB3C4\uC640\uC8FC\uB294 STM32CubeMX \uCD94\uAC00 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C\uC785\uB2C8\uB2E4. TouchGFX Generator\uB294 \uAE30\uC874 STM32CubeMX \uC124\uC815 \uBC0F \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uD1A0\uB300\uB85C \uC791\uB3D9 \uC911\uC778 TouchGFX Application\uC744 \uAD6C\uC131\uD558\uB294 \uB370 \uD544\uC694\uD55C \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. TouchGFX HAL, TouchGFX OSAL \uBC0F TouchGFX Configuration\uC744 \uC704\uD55C \uD30C\uC77C\uC774 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB97C \uD1B5\uD574 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uBA74 UI \uAC1C\uBC1C\uC774 \uC774\uB8E8\uC5B4\uC9C0\uB294 TouchGFX Designer\uB97C \uD1B5\uD574 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Designer\uB294 STM32CubeMX\uC758 \uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 \uAD6C\uC131\uB41C \uB300\uC0C1 IDE \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0DD\uC131\uB41C \uCD94\uAC00 \uCF54\uB4DC \uD30C\uC77C\uC744 \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "enabling-touchgfx-generator"
  }), `TouchGFX Generator \uD65C\uC131\uD654`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790\uB294 "Select Components" \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uC5BB\uC740 \uD6C4 X-CUBE\uC5D0\uC11C \uAE30\uB2A5\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/enable-generator.png",
    mdxType: "Figure"
  }, "STM32CubeMX\uC5D0\uC11C \uCD94\uAC00 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uADF8\uB9BC\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C TouchGFX Generator\uB97C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-v4.17.png",
    width: "580",
    mdxType: "Figure"
  }, "TouchGFX Generator \uD65C\uC131\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB97C \uB4C0\uC5BC \uCF54\uC5B4 MCU\uB85C \uD65C\uC131\uD654\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC62C\uBC14\uB978 \uCEE8\uD14D\uC2A4\uD2B8\uC5D0 \uB9DE\uCDB0\uC11C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. TouchGFX\uB294 \uB2E8\uC77C \uCEE8\uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD574\uC11C\uB9CC \uD65C\uC131\uD654\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.png",
    mdxType: "Figure"
  }, "\uB4C0\uC5BC \uCF54\uC5B4\uC5D0\uC11C TouchGFX Generator \uD65C\uC131\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-architecture"
  }), `\uC0DD\uC131 \uCF54\uB4DC \uC544\uD0A4\uD14D\uCC98`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uC758 \uAE30\uB2A5\uC744 \uC124\uBA85\uD558\uAE30\uC5D0 \uC55E\uC11C, \uC0DD\uC131\uB41C \uCF54\uB4DC\uC758 \uC544\uD0A4\uD14D\uCC98\uC640 \uAC1C\uBC1C\uC790\uAC00 \uC774\uB97C \uC0AC\uC6A9\uD574 \uAD6C\uC131 \uBC0F \uB3D9\uC791\uC744 \uC0AC\uC6A9\uC790 \uC9C0\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C \uD30C\uC77C\uC5D0\uC11C \uC9C1\uC811 \uC791\uC131\uB41C \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB294 STM32CubeMX(C \uCF54\uB4DC)\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC \uC804\uBC18\uC5D0 \uC804\uB7B5\uC801\uC73C\uB85C \uBC30\uCE58\uB41C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC0AC\uC6A9\uC790 \uCF54\uB4DC`), ` \uC139\uC158\uC744 \uC0AC\uC6A9\uD574 \uBCF4\uD638\uAC00 \uB429\uB2C8\uB2E4.\xA0\xA0TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC(C++ \uCF54\uB4DC) \uC5D0\uC11C\uB294 \uC0C1\uC18D\uC744 \uD1B5\uD574 \uC774\uB7EC\uD55C \uC720\uC5F0\uC131\uC774 \uB2EC\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uCD94\uAC00 \uC18C\uD504\uD2B8\uC6E8\uC5B4`), `\uB97C \uD1B5\uD574 \uCD94\uAC00\uB418\uACE0 \uD65C\uC131\uD654\uAC00 \uB418\uBA74 STM32CubeMX\uB294 \uD56D\uC0C1 \uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX`), ` \uD3F4\uB354\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uAD6C\uC131\uC5D0 \uAD00\uACC4 \uC5C6\uC774 \uC774 \uD3F4\uB354\uC5D0\uB294 \uD56D\uC0C1 \uB3D9\uC77C\uD55C \uD30C\uC77C\uB4E4\uC774 \uD3EC\uD568\uB418\uC9C0\uB9CC, \uD30C\uC77C\uC758 \uB0B4\uC6A9\uC740 STM32CubeMX \uBC0F \uC0AC\uC6A9\uC790 \uAD6C\uC131\uC5D0 \uB530\uB77C \uBC14\uB01D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uBAA9\uB85D\uC740 TouchGFX \uAD00\uB828 \uD30C\uC77C\uC5D0 \uC911\uC810\uC744 \uB450\uACE0 TouchGFX Generator\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uD65C\uC131\uD654`), `\uB41C STM32CubeMX \uD504\uB85C\uC81D\uD2B8\uC758 \uB0B4\uC6A9\uC774 \uAC1C\uB7B5\uC801\uC73C\uB85C \uB098\uC640\uC788\uC2B5\uB2C8\uB2E4. \uBAA9\uB85D \uB4A4\uC5D0 \uB098\uC624\uB294 \uD45C\uC5D0\uB294 \uAC00\uC7A5 \uC911\uC694\uD55C \uC5D4\uD2B8\uB9AC\uC758 \uCC45\uC784\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX \uD3F4\uB354"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\uD3F4\uB354`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCC45\uC784`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `STM32CubeMX \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `main.c\xA0`), `\uBC0F \uC2A4\uD0C0\uD2B8\uC5C5 \uCF54\uB4DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Drivers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CMSIS \uBC0F MCU \uC81C\uD488\uAD70 \uB4DC\uB77C\uC774\uBC84`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE \uD504\uB85C\uC81D\uD2B8\uD3F4\uB354 (EWARM, MDK-ARM \uB610\uB294 STM32CubeIDE)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Middlewares`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC/\uD5E4\uB354\uD30C\uC77C\uACFC FreeRTOS \uAC19\uC740 \uD0C0\uC0AC \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ApplicationTemplate.touchgfx.part`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\uAC00 TouchGFX Designer \uD504\uB85C\uC81D\uD2B8\uC640 \uAD00\uB828\uB41C \uC815\uBCF4\uB85C .part \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74 \uD654\uBA74 \uD06C\uAE30 \uBC0F \uBE44\uD2B8 \uD574\uC0C1\uB3C4,`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `App`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\uC5D0 \uB300\uD55C X-CUBE \uC778\uD130\uD398\uC774\uC2A4 \uB4F1\uC774 \uC774\uB7EC\uD55C \uC815\uBCF4\uC5D0 \uD574\uB2F9\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `app_touchgfx.c`), `\uC5D0\uB294 TouchGFX\uB97C \uAC1C\uC2DC\uD558\uACE0 \uBA54\uC778 \uB8E8\uD504\uB97C \uC2DC\uC791\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uD568\uC218\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Process(void)\xA0`), `\uBC0F\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Init(void)`), `\uC5D0 \uB300\uD55C \uC815\uC758\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `target/generated`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uD558\uC704 \uD3F4\uB354\uC5D0\uB294 \uAD6C\uC131\uC774 \uBCC0\uACBD\uB420 \uB54C STM32CubeMX\uC5D0\uC11C \uB36E\uC5B4\uC4F0\uAE30\uB97C \uD558\uB294 \uC77D\uAE30 \uC804\uC6A9 \uD30C\uC77C\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL.cpp`), `\uB294 TouchGFX \uD074\uB798\uC2A4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `HAL`), `\uC758 \uD558\uC704 \uD074\uB798\uC2A4\uB85C, \uD604\uC7AC \uAD6C\uC131\uC744 \uD1A0\uB300\uB85C STM32CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `OSWrappers.cpp\xA0`), ` (OSAL)\uC5D0\uB294 TouchGFX Engine\uACFC\uC758 \uB3D9\uAE30\uD654\uC5D0 \uD544\uC694\uD55C \uD568\uC218\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uACE0, \uB9C8\uC9C0\uB9C9\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXConfiguration.cpp`), `\uC5D0\uB294 HAL\uC744 \uD3EC\uD568\uD558\uC5EC TouchGFX\uB97C \uAD6C\uC131\uD558\uAE30 \uC704\uD55C \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `target`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `HAL\uC758 \uB3D9\uC791\uC744 \uD655\uC7A5\uD558\uAC70\uB098 STM32CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C \uAD6C\uC131\uC744 \uC7AC\uC815\uC758\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uC790\uAC00 \uC218\uC815\uD560 \uC218 \uC788\uB294 \uB300\uB7C9\uC758 \uD30C\uC77C\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `STM32TouchController.cpp`), `\uC5D0\uB294 \uBE48 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL.cpp`), `\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL`), `\uC758 \uD558\uC704 \uD074\uB798\uC2A4\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL`), `\uC744 \uC815\uC758\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXConfiguration.cpp`), `\uC5D0\uB294 HAL\uC744 \uAD6C\uC131\uD558\uB294 \uD568\uC218\uC640 TouchGFX\uC758 \uBA54\uC778 \uB8E8\uD504\uB97C \uC2DC\uC791\uD558\uB294 \uD568\uC218\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uB2E4\uB294 \uC810\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uD3B8\uC9D1\uC774 \uAC00\uB2A5\uD55C \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL`), `\uC5D0\uC11C \uCD94\uAC00 \uAD6C\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. HAL\uC758 \uC77C\uBC18\uC801\uC778 \uC544\uD0A4\uD14D\uCC98\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, "\uC0DD\uC131\uB41C \uCF54\uB4DC\uC758 \uACC4\uCE35 \uAD6C\uC870"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "feature-overview"
  }), `\uAE30\uB2A5 \uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Having enabled TouchGFX Generator, three main groups exist in the user interface. A fourth, "Dependencies", will appear if a problem with the current configuration is detected.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Dependencies`)), ` - \uC774 \uADF8\uB8F9\uC5D0\uB294 \uAD6C\uC131\uC5D0\uC11C\uC758 \uC885\uC18D\uC131, \uACBD\uACE0 \uB610\uB294 \uAD6C\uCCB4\uC801 \uC624\uB958\uC5D0 \uB300\uD574 \uAC1C\uBC1C\uC790\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uC54C\uB9BC\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC5D4\uD2B8\uB9AC\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uADF8\uB8F9\uC774 \uC228\uACA8\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Display`)), `\xA0- \uC774 \uADF8\uB8F9\uC5D0\uB294 \uC778\uD130\uD398\uC774\uC2A4, \uD504\uB808\uC784 \uBC84\uD37C \uBE44\uD2B8 \uC2EC\uB3C4, \uB108\uBE44 \uBC0F \uB192\uC774 \uAC19\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uAD00\uB828\uB41C \uC124\uC815\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC124\uC815\uC740 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uCE94\uBC84\uC2A4 \uD06C\uAE30\uB294 \uBB3C\uB860\uC774\uACE0 \uC790\uC0B0\uC5D0 \uB300\uD574 \uC0DD\uC131\uB41C \uCF54\uB4DC\uC5D0 \uC9C1\uC811\uC801\uC778 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Driver`)), ` - This group allows the user to opt-in for a number of ready-made drivers related to the tick source of the application, graphics acceleration (DMA2D and GPU2D) and RTOS. STM32CubeMX\uC5D0\uC11C\uB294 FreeRTOS(CMSIS RTOS v1 \uBC0F v2) \uAD6C\uC131\uC774 \uC9C0\uC6D0\uB418\uAE30 \uB54C\uBB38\uC5D0 TouchGFX Generator\uB294 \uC774\uB7EC\uD55C \uC635\uC158 \uAC01\uAC01\uC5D0 \uB300\uD55C \uB4DC\uB77C\uC774\uBC84\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Additional Features`)), ` - This group appears if RGB565 is selected, allowing the user to create am application using image- and font-data from non-memory mapped flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Video Decoding`)), ` - \uC774 \uADF8\uB8F9\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uB610\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBE44\uB514\uC624 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uC774 \uC635\uC158\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC77C\uBD80 MCU\uB294 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.png",
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX Generator has three groups: Display, Driver and Video Decoding"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `Display`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display`), `\xA0\uADF8\uB8F9\uC5D0\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uAD00\uB828\uB41C \uAD6C\uC131(\uC608: \uC778\uD130\uD398\uC774\uC2A4, \uD06C\uAE30 \uBC0F \uBC84\uD37C\uB9C1 \uC804\uB7B5) \uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface-and-dimensions"
  }), `Interface and dimensions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD604\uC7AC STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC5EC\uB7EC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBCD1\uB82C RGB(LTDC)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MIPI DSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC \uB610\uB294 FMC\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC5F0\uACB0\uB41C MCU\uC758 \uACBD\uC6B0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\uB294 \uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uB294 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. DSI \uBC0F SPI \uC778\uD130\uD398\uC774\uC2A4\uC758 \uACBD\uC6B0, \uAC1C\uBC1C\uC790\uAC00 \uB4DC\uB77C\uC774\uBC84\uB97C \uC9C1\uC811 \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC11C\uB85C \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uCF54\uB4DC \uC608\uC2DC\uB294 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-ltdc-parallel-rgb",
    mdxType: "Link"
  }, "\uC2DC\uB098\uB9AC\uC624"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-pixel-format"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uD53D\uC140 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758 \uD504\uB808\uC784 \uBC84\uD37C \uD53D\uC140 \uD615\uC2DD\uB4E4\uC774 \uD604\uC7AC TouchGFX Generator\uC5D0\uC11C \uC9C0\uC6D0\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4. "Custom" \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB294 \uBAA8\uB4E0 \uC635\uC158\uC744 \uC774\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC, \uADF8\uB807\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC \uC124\uC815\uC73C\uB85C \uC635\uC158\uC774 \uC81C\uD55C\uB429\uB2C8\uB2E4(\uC608: LTDC \uD504\uB808\uC784 \uBC84\uD37C \uD615\uC2DD\uC744 "RGB565"\uB85C \uAD6C\uC131\uD558\uBA74 TouchGFX Generator\uC5D0\uC11C "RGB565"\uB85C \uC635\uC158\uC774 \uC81C\uD55C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, "\uBA87\uBA87 \uD53D\uC140 \uD615\uC2DD\uB4E4\uC740 ChromART(DMA2D)\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uAC70\uB098 \uBD80\uBD84\uC801\uC73C\uB85C\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "For STM32F7/H7"), ": If the framebuffer is placed in Write Through cached memory (e.g. SRAM) then the DCache is flushed by the generated code prior to DMA2D (if configured in the Generator) accessing it. \uC774\uB7EC\uD55C \uCE90\uC2F1 \uBA54\uCEE4\uB2C8\uC998\uC774 \uC791\uB3D9\uD558\uB824\uBA74 STM32CubeMX\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Cortex M7"), "\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\uC2DC\uC2A4\uD15C \uCF54\uC5B4"), " \uC124\uC815\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "CPU \uCE90\uC2DC"), "\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "CPU \uCE90\uC2F1\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740  ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",
    mdxType: "Link"
  }, "F7 \uBC0F H7\uC758 \uCE90\uC2DC"), " \uD558\uC704 \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buffering-strategies"
  }), `Buffering Strategy`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uD1B5\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Single Buffer `), `(\uB2E8\uC77C \uBC84\uD37C)\xA0- \uC624\uC9C1 \uD558\uB098\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB808\uC784 \uBC84\uD37C\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC131\uB2A5\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC9C0\uB9CC, \uBA54\uBAA8\uB9AC\uB97C \uBE44\uAD50\uC801 \uB35C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. 'Buffer Location' \uAD6C\uC131\uC744 \uC0AC\uC6A9\uD574 \uB0B4\uBD80 RAM\uC5D0 \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD94\uAC00\uC801\uC778 \uCD5C\uC801\uD654\uB97C \uC704\uD574 \uC0AC\uC6A9\uC790\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uD604\uC7AC \uCC98\uB9AC \uC911\uC778 \uB77C\uC778\uC744 \uBC18\uD658\uD558\uB294 \uD568\uC218\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC774 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD604\uC7AC \uD504\uB808\uC784 \uB3D9\uC548 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC774\uBBF8 \uC804\uC1A1\uB41C \uBA54\uBAA8\uB9AC\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Double Buffer `), `(\uC774\uC911 \uBC84\uD37C) - 2\uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uBCF4\uD1B5\uC740 \uBA54\uBAA8\uB9AC\uC758 \uBE44\uC6A9 \uB300\uBE44 \uC131\uB2A5\uC744 \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Partial Buffer `), `(\uBD80\uBD84 \uBC84\uD37C)\xA0- \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uC815\uC758\uD55C 1\uAC1C \uC774\uC0C1\uC758 \uBA54\uBAA8\uB9AC \uC9D1\uD569\uCCB4(chunk) \uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uC804\uB7B5\uC740 \uC678\uBD80 RAM\uC5D0 \uC758\uC874\uD558\uC9C0 \uC54A\uACE0 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uAC00\uC6A9 \uBA54\uBAA8\uB9AC\uB97C \uCD08\uACFC\uD560 \uC218 \uC788\uB3C4\uB85D \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD558\uB294 \uC800\uBE44\uC6A9 \uC194\uB8E8\uC158\uC744 \uB300\uC0C1\uC73C\uB85C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Single Buffer \uBC0F Double Buffer\uC758 \uACBD\uC6B0, \uC0AC\uC6A9\uC790\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC635\uC158\uC744 \uC81C\uACF5\uD558\uB294 "Buffer Location" \uAD6C\uC131\uC744 \uD1B5\uD574 \uC704\uCE58\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `By Allocation`), `\xA0- \uB9C1\uCEE4\uAC00 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0 \uB530\uB77C \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uB97C \uBC30\uCE58\uD560 \uC218 \uC788\uAC8C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uB0B4\uBD80 RAM\uC5D0 \uBC30\uCE58\uB418\uB3C4\uB85D \uAE30\uBCF8 \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `By Address\xA0`), `- \uC0AC\uC6A9\uC790\uAC00 1\uAC1C(Single) \uB610\uB294 2\uAC1C(Double) \uC758 \uD504\uB808\uC784 \uBC84\uD37C \uC8FC\uC18C\uB97C \uC815\uC758\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Partial Buffer\xA0`), `\uC804\uB7B5\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD30C\uB77C\uBBF8\uD130\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBE14\uB85D \uC218(\uB0B4\uBD80 RAM\uC5D0 \uD56D\uC0C1 \uBC30\uCE58)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBE14\uB85D \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBD80\uBD84 \uBC84\uD37C \uC804\uB7B5\uACFC \uAD00\uB828\uB41C \uBA87 \uAC00\uC9C0 \uD575\uC2EC \uAC1C\uB150\uB4E4\uC744 \uC774\uD574\uD558\uB824\uBA74 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC774\uC6A9\uD55C \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D \uAC10\uC18C\uC5D0 \uB300\uD55C\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\uC804\uC6A9 \uBB38\uC11C`), `\uB97C \uC77D\uC5B4\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC774 \uBB38\uC11C\uC5D0\uC11C\uB294 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB2EC\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uAC1C\uB150\uC801\uC73C\uB85C \uBCF4\uC5EC\uC8FC\uBA70, \uC5EC\uAE30 \uB098\uC628 \uCF54\uB4DC\uB294 TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB41C \uAC83\uACFC \uB2E4\uC18C \uCC28\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC804\uB7B5\uC5D0 \uB300\uD574 \uC0DD\uC131\uB41C \uCF54\uB4DC\uC758 \uAD6C\uCCB4\uC801\uC778 \uC608`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scenarios/scenarios-framebuffer-strategies"
  }), `\uB294\xA0\uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5`), `\uC744 \uCC38\uC870\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "driver"
  }), `Driver`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84 \uC139\uC158\uC5D0\uC11C \uAC1C\uBC1C\uC790\uB294 TouchGFX AL\uC758 \uB2E4\uC591\uD55C \uCC45\uC784\uC5D0 \uB9DE\uB294 \uB4DC\uB77C\uC774\uBC84\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-tick-source"
  }), `Application Tick Source`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC704\uD55C application tick source\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uB3D9\uD558\uB294 \uBC29\uBC95\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uC5D0\uAC8C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC635\uC158\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `LTDC`), ` - "Display" \uADF8\uB8F9\uC5D0 \uB300\uD55C \uC778\uD130\uD398\uC774\uC2A4\uB85C LTDC\uB97C \uC120\uD0DD\uD558\uBA74 "LTDC"\uAC00 Application Tick Source\uAC00 \uB429\uB2C8\uB2E4. \uC989, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFX Generator`), `\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\uB97C \uD638\uCD9C\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC9C4\uD589\uC2DC\uD0A4\uB294 TouchGFXGeneratedHAL\xA0\uD074\uB798\uC2A4\uC5D0 \uB4DC\uB77C\uC774\uBC84 \uD568\uC218(LTDC \uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC)\uB97C \uC124\uCE58\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Custom \uBC0F FMC`), ` - \uC774 \uACBD\uC6B0, \uAC1C\uBC1C\uC790\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\uB97C \uBC18\uBCF5\uC801\uC73C\uB85C \uD638\uCD9C\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC9C4\uD589\uC2DC\uD0A4\uB294 \uD578\uB4E4\uB7EC\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphics-accelerator"
  }), `Graphics Accelerator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 \uADF8\uB798\uD53D \uAC00\uC18D\uACFC \uAD00\uB828\uD574 \uC138 \uAC00\uC9C0 \uC635\uC158\uC744 \uAC16\uAC8C \uB429\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, "DMA2D is enabled in the *Multimedia* category in CubeMX, for MCUS that support it."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uC5D0\uC11C \uACF5\uAE09\uB418\uB294 Chrom-ART(DMA2D) \uB4DC\uB77C\uC774\uBC84\uC5D0\uC11C\uB294 \uB450 \uAC00\uC9C0 \uBC29\uC2DD\uC73C\uB85C TransferCompleteInterrupt\uB97C \uC218\uC2E0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32Cube HAL \uB4DC\uB77C\uC774\uBC84\uB97C \uC0AC\uC6A9\uD574 dma2d \uD578\uB4E4\uB7EC\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `hdma2d.XferCpltCallback`), `\uC5D0 \uCF5C\uBC31 \uD568\uC218\uB97C \uB4F1\uB85D\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `DMA2D_IRQHandler()\xA0`), `\uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uC9C1\uC811 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DMA2D IP\uC758 \uACBD\uC6B0, STM32CubeMX\uC758 NVIC \uC124\uC815\uC5D0\uC11C DMA2D \uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uB97C \uD65C\uC131\uD654\uD558\uAC70\uB098 \uBE44\uD65C\uC131\uD654\uD558\uB294 \uBC29\uBC95\uC73C\uB85C \uC774 \uB458 \uAC04\uC744 \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uB97C \uD65C\uC131\uD654\uD558\uBA74 \uC635\uC158 1) \uC5D0 \uB300\uD55C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uACE0, \uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uB97C \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uC635\uC158 2) \uC5D0 \uB300\uD55C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, 'When using global interrupt for DMA2D, ensure that the "IRQ handler" calls the "DMA2D HAL handler". This is default behaviour.'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uAC00 \uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uC5D0\uC11C DMA2D\uC5D0\uC11C 'IRQ handler' \uBC0F 'Call HAL handler'\uB97C \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uB4F1\uB85D\uB41C \uCF5C\uBC31(callback) \uC774 \uC808\uB300\uB85C \uD638\uCD9C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }), `Real-Time Operating System`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 TouchGFX\uC5D0\uC11C \uC5B4\uB5A4 RTOS\uB4E0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(OS\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB3C4). AL(Abstraction Layer) \uC544\uD0A4\uD14D\uCC98\uC5D0 \uC124\uBA85\uB418\uC5B4 \uC788\uB4EF\uC774, TouchGFX Engine\uC740\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers `), `\uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD574 \uBA54\uC778 \uC774\uBCA4\uD2B8 \uB8E8\uD504\uB97C \uBE44\uB86F\uD574 \uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4\uB97C \uC0AC\uC6A9\uC790\uAC00 \uC120\uD0DD\uD55C RTOS\uC640 \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4. When developers choose an operating system in TouchGFX Generator, code will be generated to syncronize internally via primitives for the OS of choice. \uBB34\uC5C7\uBCF4\uB2E4\uB3C4 \uC2A4\uD0DD \uD06C\uAE30\uB97C \uACB0\uC815\uD558\uB824\uBA74 \uC5EC\uC804\uD788 STM32CubeMX\uB97C \uD1B5\uD574 \uC6B4\uC601 \uCCB4\uC81C\uB97C \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS (CMSIS OS V1 and V2) and ThreadX (Native Middleware or Azure RTOS Software Packs) can be configured directly from within STM32CubeMX and TouchGFX Generator providing the user with generated code for both task definitions and TouchGFX RTOS driver. TouchGFX Generator can generate CMSIS V1 and CMSIS V2 compliant RTOS drivers which work with any CMSIS compliant RTOS, a driver for ThreadX, and a driver for running bare metal without an operating system.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "threadx-middleware-os"
  }), `ThreadX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ThreadX can be enabled either by selecting an AZRTOS Software Pack or by enabling the Native ThreadX Middleware from STM32CubeMX, if available for the selected MCU device.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "All new STM32 MCU devices will support, by default, ThreadX Middleware directly available from STM32CubeMX without requiring additional pack downloads. TouchGFX Board Support packs will slowly transition to using either ThreadX middleware, where available, or X-CUBE-AZRTOS software packs."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "X-CUBE-AZRTOS-XX Expansion Packs providing ThreadX support are already available for the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32G0xx, STM32G4xx, STM32L4xx, STM32F4xx, STM32F7xx"), " and the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32H7xx"), " MCU Series.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC5D0\uB294 TouchGFX Generator\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC635\uC158\uB4E4\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/driver-rtos-options-threadx.png",
    mdxType: "Figure"
  }, "RTOS \uB4DC\uB77C\uC774\uBC84 \uC635\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uD568\uC218\uB97C \uD638\uCD9C\uD558\uBA74 TouchGFX \uBA54\uC778 \uB8E8\uD504\uC5D0 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB824\uB294 \uC791\uC5C5\uC5D0 \uB300\uD55C \uC791\uC5C5 \uD578\uB4E4\uB7EC\uC5D0\uC11C \uC774 \uD568\uC218\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DefaultTask`), `\uB77C\uB294 STM32CubeMX\uC5D0\uC11C FeeRTOS \uC791\uC5C5\uC744 \uAD6C\uC131\uD55C \uACBD\uC6B0, \uC544\uB798 \uC608\uC2DC\uB294 \uC791\uC5C5 \uD578\uB4E4\uB7EC\uC758 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC139\uC158\uC5D0\uC11C TouchGFX\uB97C \uC2DC\uC791\uD558\uAE30 \uC704\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process()`), `\uAC00 \uC5B4\uB5BB\uAC8C \uD638\uCD9C\uB418\uB294\uC9C0\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4}",
    "{4}": true
  }), `void StartDefaultTask(void *argument)
{
  /* USER CODE BEGIN 5 */
  MX_TouchGFX_Process();
  /* USER CODE END 5 */ 
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
  }), `\uAE30\uD0C0 CMSIS \uD638\uD658 OS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 \uAC83\uACFC \uB2E4\uB978 CMSIS \uD638\uD658 OS(FreeRTOS \uBC0F ThreadX)\uAC00 \uD544\uC694\uD55C \uAC1C\uBC1C\uC790\uB294 RTOS \uAD6C\uC131 \uBC0F \uC791\uC5C5 \uC815\uC758\uB97C \uC218\uB3D9\uC73C\uB85C \uC218\uD589\uD574\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uB2E4\uC74C\uACFC \uAC19\uC740 \uC218\uB3D9 \uB2E8\uACC4\uB97C \uAC70\uCCD0\uC57C \uD569\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `RTOS \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MX_TouchGFX_Process`), `) \uB97C \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uC791\uC5C5 \uC815\uC758`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC2A4\uCF00\uC904\uB7EC \uC2DC\uC791`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Proces`), `s\uB97C \uD638\uCD9C\uD574 \uC791\uC5C5 \uD578\uB4E4\uB7EC \uB0B4\uBD80\uC758 TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-features"
  }), `\uCD94\uAC00 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "external-data-reader"
  }), `External Data Reader`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RGB565 \uD504\uB808\uC784 \uBC84\uD37C \uD53D\uC140 \uD615\uC2DD\uC5D0\uC11C TouchGFX\uB294 \uC18C\uC704 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Data Reader`), `\uB77C\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uB355\uBD84\uC5D0 \uAC1C\uBC1C\uC790\uB294 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uCD94\uAC00 \uBC84\uD37C\uB85C \uC778\uD55C \uBE44\uC6A9\uC774 \uBC1C\uC0DD\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\uCE90\uC2F1`), ` \uB300\uC2E0, \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uB418\uC9C0 \uC54A\uC740 \uC2DC\uB9AC\uC5BC \uD50C\uB798\uC2DC\uC5D0\uC11C \uC9C1\uC811 \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD50C\uB798\uC2DC \uCE69\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC790\uC0B0\uC744 \uAC80\uC0C9\uD558\uAE30 \uC704\uD574 DataReader\uB97C \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC608\uB294\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/using-serial-flash"
  }), `\uC2DC\uB9AC\uC5BC \uD50C\uB798\uC2DC\xA0`), `\uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Data Reader\xA0`), `\uC635\uC158\uC740 \uBCF4\uD1B5 \uCD94\uAC00 \uBC84\uD37C\uC5D0 \uB300\uD55C \uBA54\uBAA8\uB9AC\uAC00 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC740 \uC800\uAC00 \uC194\uB8E8\uC158(\uC608: STM32G0)\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. DMA2D\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C \uD53D\uC140 \uD615\uC2DD\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `RGB565`), `\uAC00 \uC120\uD0DD\uB418\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Additional Features\xA0`), `\uADF8\uB8F9\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "\uCD94\uAC00 \uAE30\uB2A5: DataReader"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uAD6C\uC131\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `External Data Reader`), `: \uC774 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654 \uB610\uB294 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uD65C\uC131\uD654\uB97C \uD558\uBA74 TouchGFX\uAC00 \uC0DD\uC131\uB41C \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 \uC9C1\uC811 \uC790\uC0B0\uC5D0 \uB300\uD55C \uB370\uC774\uD130\uB97C \uAC80\uC0C9\uD558\uAC8C \uB429\uB2C8\uB2E4. \uBE44\uD65C\uC131\uD654\uB97C \uD558\uBA74 \uAC1C\uBC1C\uC790\uAC00 \uB300\uC2E0 \uBA54\uBAA8\uB9AC\uC758 \uBC84\uD37C\uC5D0 \uC774\uBBF8\uC9C0\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uCE90\uC2F1`), `\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `External Data Reader: Line Buffer Size`), `: \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uC774\uBBF8\uC9C0 \uB610\uB294 \uD14D\uC2A4\uD2B8\uB97C \uD63C\uD569\uD560 \uC218 \uC788\uB3C4\uB85D 2\uAC1C\uC758 \uBC84\uD37C\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. ARGB8888 \uD53D\uC140 \uD615\uC2DD\uC5D0\uC11C \uD480 \uC0AC\uC774\uC988 \uC774\uBBF8\uC9C0\uB97C \uC9C0\uC6D0\uD558\uB3C4\uB85D \uD654\uBA74 \uB108\uBE44* 4\uBC14\uC774\uD2B8\uAC00 \uAE30\uBCF8 \uAC12\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `External Data Reader: Minimum DMA transfer size`), `: DMA \uC804\uC1A1\uC744 \uC2DC\uC791\uD558\uAE30 \uC704\uD574 \uD544\uC694\uD55C \uCD5C\uC18C\uD55C\uC758 \uBC14\uC774\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uB354 \uB9CE\uC740 \uBC14\uC774\uD2B8\uAC00 \uC694\uCCAD\uB41C \uACBD\uC6B0\uC5D0\uB294 DMA\uAC00 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `External Data Reader`), `\uAC00 \uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD55C \uD6C4\uC5D0\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uB418\uC9C0 \uC54A\uC740 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC9C1\uC811 \uC790\uC0B0\uC744 \uAC80\uC0C9\uD560 \uC218 \uC788\uB3C4\uB85D \uB2E4\uC74C\uACFC \uAC19\uC740 \uD30C\uC77C\uC774 \uCD94\uAC00\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `TouchGFX/target/TouchGFXDataReader.hpp`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3C9\uC18C\uCC98\uB7FC TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC\uC758 \uACBD\uC6B0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReade`), `r\uB294 \uC77D\uAE30 \uC804\uC6A9\uC774\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader\xA0`), `\uD074\uB798\uC2A4 \uB0B4\uC5D0\uC11C \uC218\uC815 \uC791\uC5C5\uC744 \uC218\uD589\uD574\uC57C \uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\uC758 \uC720\uD615\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DataReader`), `\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D TouchGFX HAL\uB97C \uAD6C\uC131\uD558\uAE30 \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD30C\uC77C\uC774 \uC218\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, "DataReader \uCD94\uAC00 \uAC00\uB2A5\uC740 DMA2D \uBC0F LTDC\uAC00 \uBE44\uD65C\uC131\uD654\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "8bit-ltdc-color-look-up-table"
  }), `8bit LTDC Color Look-up Table`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8 \uD615\uC2DD\uC73C\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC77D\uB3C4\uB85D LTDC\uAC00 \uAD6C\uC131\uB418\uC5B4 \uC788\uACE0 TouchGFX\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_b_g_r2222"
  }), `ABRG2222`), `,\xA0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_r_g_b2222"
  }), `ARGB222`), `,\xA0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___b_g_r_a2222"
  }), `BGRA2222`), ` \uB610\uB294\xA0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"
  }), `RGBA2222`), `\uC5D0\uC11C \uB80C\uB354\uB9C1\uB418\uBA74 TouchGFX Generator\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::initialize()`), `. \uB3D9\uC548 LTDC\uC5D0 \uB85C\uB4DC\uB418\uB294 CLUT\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. LTDC \uBC0F CLUT \uC0AC\uC6A9\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 STM32 MCU \uCC38\uC870 \uB9E4\uB274\uC5BC\uC744 \uCC38\uC870\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "video-decoding"
  }), `Video Decoding`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video Decoding \uC139\uC158\uC5D0\uC11C\uB294 \uAC1C\uBC1C\uC790\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uB610\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD574 TouchGFX HAL\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video Decoding\uC740 \uC624\uC9C1 RGB565(16bpp) \uBC0F RGB888(24bpp) \uD504\uB808\uC784 \uBC84\uD37C \uD53D\uC140 \uD615\uC2DD\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uB450 \uD615\uC2DD\uC744 \uC120\uD0DD\uD558\uC9C0 \uC54A\uC73C\uBA74 Video Decoding \uC139\uC158\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC77C\uBD80 MCU\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-type"
  }), `Type`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video Decoding\uC5D0\uC11C "Type"\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. STM32CubeMX\uC5D0\uC11C \uD544\uC694\uD55C \uC8FC\uBCC0 \uC7A5\uCE58\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC73C\uBA74 "Software"\uC640 "Hardware" \uBAA8\uB450 \uD68C\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uB54C \uB9C8\uC6B0\uC2A4\uB97C \uD68C\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB41C \uC635\uC158 \uC704\uB85C \uAC00\uC838\uAC00\uBA74 \uC8FC\uBCC0 \uC7A5\uCE58\uAC00 \uD544\uC694\uD558\uB2E4\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.png",
    width: "800",
    mdxType: "Figure"
  }, '"Hardware"\uC5D0 \uB300\uD55C Video Type \uC885\uC18D\uC131\uC744 \uB098\uD0C0\uB0B4\uB294 \uC815\uBCF4 \uC0C1\uC790'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Software`), ` - STM32CubeMX\uC758 Middleware \uC139\uC158\uC5D0\uC11C LIBJPEG\uB97C \uD65C\uC131\uD654\uD558\uBA74 "Software" \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uC5D0 \uB530\uB77C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB354\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774 \uB9D0\uC740 TouchGFX Generator\uAC00 \uC18C\uD504\uD2B8\uC6E8\uC5B4 MJPEG \uB514\uCF54\uB354\uB97C \uC0DD\uC131\uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Hardware`), ` - Multimedia \uC139\uC158\uC5D0\uC11C JPEG\uB97C \uD65C\uC131\uD654\uD558\uACE0, TouchGFX Generator\uC5D0\uC11C CMSIS \uD638\uD658 RTOS\uB97C \uC120\uD0DD\uD558\uBA74 "Hardware" \uC635\uC158\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-options-4-18.png",
    width: "800",
    mdxType: "Figure"
  }, "Video Decoding Type \uC635\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LIBJPEG \uC124\uC815\uC5D0 \uC788\uB294 "RGB scanline format" \uC139\uC158\uC5D0\uC11C RGB \uC21C\uC11C\uB294 \uD6A8\uC728\uC744 \uB192\uC774\uAE30 \uC704\uD574 "RGB"\uAC00 \uC544\uB2CC "BGR"\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uD53D\uC140\uB2F9 \uBC14\uC774\uD2B8 \uC218\uB294 3\uC73C\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/libjpeg-rgb-ordering.png",
    width: "700",
    mdxType: "Figure"
  }, "\uD544\uC694\uD55C LIBJPEG RGB scanline format \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529 \uC791\uC5C5\uC5D0\uC11C\uB294 JPEG \uC124\uC815\uC758 RGB \uD615\uC2DD\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uB3D9\uC77C\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uADF8 \uBC16\uC5D0 \uAC01\uC885 \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uC2DC\uB098\uB9AC\uC624\uC5D0 \uB530\uB978 \uC2E4\uC81C \uCF54\uB4DC \uC608\uC81C\uB97C \uBCF4\uB824\uBA74 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\uC2DC\uB098\uB9AC\uC624"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-number"
  }), `Concurrent videos`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Concurrent Videos" \uC635\uC158\uC740 \uC5B8\uC81C\uB4E0\uC9C0 \uB3D9\uC77C\uD55C GUI \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uB514\uCF54\uB529\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uC6A9\uB7C9\uC758 \uBE44\uB514\uC624\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0 1\uAC1C\uC5D0\uC11C \uBE44\uB514\uC624 1\uAC1C\uB9CC \uB514\uCF54\uB529\uD558\uACE0 \uC2F6\uB2E4\uBA74 "Number of Videos"\uB97C 1\uB85C \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC2DC\uC5D0 \uB514\uCF54\uB529\uD560 \uC218 \uC788\uB294 \uBE44\uB514\uC624 \uC218\uB294 \uCD5C\uB300 4\uAC1C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-strategy"
  }), `Strategy`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uC5D0\uAC8C\uB294 \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uC804\uB7B5\uACFC \uAD00\uB828\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uC138 \uAC00\uC9C0 \uC635\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Direct to Framebuffer`), ` - \uBE44\uB514\uC624\uAC00 UI \uC2A4\uB808\uB4DC\uC5D0 \uB514\uCF54\uB529\uB429\uB2C8\uB2E4. \uC774 \uC635\uC158\uC740 \uB098\uBA38\uC9C0 \uC804\uB7B5\uC5D0 \uBE44\uD574 \uC18D\uB3C4\uAC00 \uB290\uB9BD\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uC791\uC5C5\uC5D0\uC11C\uB294 "Direct to Framebuffer" \uC635\uC158\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Single Buffer`), ` - \uBE44\uB514\uC624\uAC00 \uBCC4\uB3C4\uC758 \uD0DC\uC2A4\uD06C\uC5D0\uC11C \uC804\uC6A9 \uBC84\uD37C\uB85C \uB514\uCF54\uB529\uB429\uB2C8\uB2E4. \uC774 \uBC84\uD37C\uB294 \uB0B4\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uD560\uB2F9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Double Buffer`), ` - \uBE44\uB514\uC624\uAC00 \uBCC4\uB3C4\uC758 \uD0DC\uC2A4\uD06C\uC5D0\uC11C \uC804\uC6A9 \uBC84\uD37C 2\uAC1C\uB85C \uB514\uCF54\uB529\uB418\uAE30 \uB54C\uBB38\uC5D0 \uBA54\uBAA8\uB9AC \uB300\uBE44 \uC131\uB2A5\uC774 \uC6B0\uC218\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8\uC77C \uB610\uB294 \uC774\uC911 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5 \uC791\uC5C5\uC5D0\uC11C\uB294 CMSIS \uD638\uD658 OS\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.png",
    width: "750",
    mdxType: "Figure"
  }, "CMSIS RTOS \uC694\uAD6C \uC0AC\uD56D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uC0C1\uC790"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC774\uC911 \uBC84\uD37C \uC804\uB7B5\uC744 \uC120\uD0DD\uD560 \uB54C\uB294 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC5D0 \uC8FC\uC758\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC704\uD574 FreeRTOS\uB97C \uAD6C\uC131\uD558\uB294 \uC2E4\uC81C \uC608\uC81C\uB97C \uBCF4\uB824\uBA74 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\uC2DC\uB098\uB9AC\uC624"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "decode-format"
  }), `Decode Format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529\uC5D0\uC11C\uB294 \uAC1C\uBC1C\uC790\uAC00 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD53D\uC140 \uD615\uC2DD\uC5D0 \uC0C1\uAD00\uC5C6\uC774 RGB \uBC84\uD37C\uC758 \uD53D\uC140 \uD615\uC2DD\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Generator\uB294 \uD615\uC2DD\uC774 \uB2E4\uB97C \uACBD\uC6B0 ChromART\uC5D0\uC11C \uD53D\uC140 \uD615\uC2DD\uC744 \uBCC0\uD658\uD560 \uC218 \uC788\uB294 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uBC84\uD37C\uB97C RGB565 \uD615\uC2DD\uC73C\uB85C \uC9C0\uC815\uD558\uBA74 \uAC1C\uBC1C\uC790\uAC00 \uBA54\uBAA8\uB9AC \uACF5\uAC04\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-decode-format.png",
    width: "700",
    mdxType: "Figure"
  }, "\uB514\uCF54\uB4DC \uD615\uC2DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-buffer-size"
  }), `\uBC84\uD37C \uD06C\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Buffer Width \uBC0F Buffer Height \uC124\uC815\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uAC00\uC7A5 \uD070 \uBE44\uB514\uC624 \uCE58\uC218\uC640 \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C Width\uB294 32\uC758 \uC57D\uC218\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C RGB888 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\uC5D0\uC11C 480*272 \uBE44\uB514\uC624\uC640 "Single Buffer" \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uC804\uB7B5\uC744 \uC124\uC815\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC740 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `\uC0DD\uC131\uB41C \uD504\uB85C\uC81D\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 STM32CubeMX\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Generate Code`), ` \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD574 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uB54C \uCD5C\uC18C\uD55C \uB2E4\uC74C IDE\uC5D0\uC11C \uC791\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCD5C\uC801\uC758 \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870\uB97C \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uC635\uC158\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD6C\uC870:\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Advanced`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Generate under root\xA0`), `\uBE44\uD65C\uC131\uD654(STM32CubeIDE \uC804\uC6A9)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.png",
    noShadow: false,
    mdxType: "Figure"
  }, "Advanced \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD6C\uC870\uB97C \uC120\uD0DD\uD558\uACE0 \uB8E8\uD2B8 \uC544\uB798 Generate\uC758 \uC120\uD0DD\uC744 \uD574\uC81C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC870\uB97C \uAC00\uC9C4  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX`), ` \uD3F4\uB354\uB3C4 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX \uD3F4\uB354 \uAD6C\uC870"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `App\xA0`), `\uD3F4\uB354\uC5D0\uB294 TouchGFX\uB97C \uAC1C\uC2DC \uBC0F \uC2DC\uC791\uD558\uAE30 \uC704\uD55C \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `target\xA0`), `\uD3F4\uB354\uC5D0\uB294 \uC77D\uAE30 \uC804\uC6A9\uC73C\uB85C \uC0DD\uC131\uB41C \uCF54\uB4DC(generated/ \uB0B4\uBD80\uC758)\uC640 \uC218\uC815 \uAC00\uB2A5\uD55C \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `,\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGPIO.cpp\xA0`), `\uBC0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `\xA0TouchGFXHAL.cpp`), `)\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX \uD5E4\uB354 \uD30C\uC77C \uBC0F \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC644\uC804\uD788 \uAC16\uCD98 \uC804\uCCB4 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB3C4\uB85D TouchGFX Designer\uB97C \uC0AC\uC6A9\uD574`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.part`), `\xA0\uD30C\uC77C\uC744 \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC5D0\uB294 \uD53D\uC140 \uD615\uC2DD\uACFC TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uB54C \uC124\uACC4\uC790\uAC00 \uC0AC\uC6A9\uD558\uB294 \uCE94\uBC84\uC2A4 \uD06C\uAE30 \uAC19\uC774 \uAD00\uB828\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-project"
  }), `TouchGFX Designer \uD504\uB85C\uC81D\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following json structure is an example of the contents of the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `.part`), ` \uD30C\uC77C\uC744 \uC5F4 \uB54C \uAC1C\uBC1C\uC790\uC5D0\uAC8C\uB294 \uAD6C\uCCB4\uC801\uC778 UI\uB97C \uB85C\uB4DC\uD558\uAC70\uB098 \uBE48 \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC2DC\uC791\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "UI \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Generate Code`), `\uB97C \uB204\uB974\uACE0 \uB09C \uC774\uD6C4\uC758 TouchGFX \uD3F4\uB354\uC758 \uAD6C\uC870\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uADF8\uB9BC\uC5D0\uB294 TouchGFX \uD3F4\uB354 \uAD6C\uC870\uC758 \uAD6C\uCCB4\uC801\uC778 \uC608\uAC00 \uB098\uC640 \uC788\uB294\uB370, \uC0DD\uC131 \uC774\uD6C4 \uC0C8\uB85C \uC0DD\uAE34 \uD30C\uC77C\uACFC \uD3F4\uB354\uAC00 \uAC15\uC870 \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\uCF54\uB4DC \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX \uD3F4\uB354 \uAD6C\uC870"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 .ioc STM32CubeMX \uD30C\uC77C(STM32CubeIDE, EWARM, MDK-ARM\uC758 \uACBD\uC6B0)\uC5D0\uC11C \uC120\uD0DD\uD55C IDE\uB97C \uD0D0\uC9C0\uD558\uACE0, \uD654\uBA74 \uC815\uC758, \uC774\uBBF8\uC9C0 \uBC0F \uAE00\uAF34 \uC790\uC0B0\uC5D0 \uB300\uD55C \uD30C\uC77C\uACFC \uAC19\uC774 \uC0C8\uB85C \uC0DD\uC131\uB41C \uD30C\uC77C\uB85C \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB54C \uAC1C\uBC1C\uC790\uB294 STM32CubeMX, TouchGFX Designer \uBC0F \uD234\uCCB4\uC778/IDE\uB97C \uC624\uAC00\uBA70 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\uB294 \uB4DC\uB77C\uC774\uBC84\uB85C IDE \uD504\uB85C\uC81D\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\uB294 \uC124\uACC4\uC790\uAC00 \uC989\uC2DC \uC120\uD0DD\uD55C UI \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D\uC73C\uB85C TouchGFX `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.part`), ` \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\uB294 TouchGFX\uAC00 \uD2B9\uC815 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uB370 \uD544\uC694\uD55C TouchGFX Generator \uAD6C\uC131\uC744 \uD1A0\uB300\uB85C HAL \uCF54\uB4DC(TouchGFX/target/generated/)\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\uB294 \uC0DD\uC131\uB41C \uCF54\uB4DC\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, '\uB4C0\uC5BC \uCF54\uC5B4 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD2B9\uC815 \uCEE8\uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD574 TouchGFX\uB97C \uD65C\uC131\uD654\uD55C \uACBD\uC6B0, TouchGFX \uD504\uB85C\uC81D\uD2B8\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uD574\uB2F9 \uCEE8\uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD55C \uC804\uC6A9 \uD3F4\uB354("CM4/TouchGFX" \uB610\uB294 "CM7/TouchGFX")\uC5D0 \uC704\uCE58\uD558\uAC8C \uB429\uB2C8\uB2E4.'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-generated-behavior"
  }), `\uC0DD\uC131\uB41C \uB3D9\uC791 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL\uC758 \uD074\uB798\uC2A4 \uACC4\uCE35 \uAD6C\uC870 \uB355\uBD84\uC5D0 \uC0AC\uC6A9\uC790\uB294 STM32CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C HAL \uAD6C\uC131 \uB610\uB294 \uB3D9\uC791\uC744 \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uAE30\uC5B5\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C \uAC1C\uBC1C\uC790\uB294 \uCD94\uAC00\uB85C TouchGFX\uB97C \uAD6C\uC131\uD558\uAC70\uB098`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL`), `\uC5D0 \uC124\uC815\uB41C \uAE30\uC874 \uAD6C\uC131\uC744 \uC218\uC815\uD558\uB3C4\uB85D `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `initialize `), `\uD568\uC218\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    // Calling parent implementation of initialize().
    //
    // To overwrite the generated implementation, omit call to parent function
    // and implemented needed functionality here.
    // Please note, HAL::initialize() must be called to initialize the framework.

    TouchGFXGeneratedHAL::initialize();

    //Overriding configurations
    hal.lockDMAToFrontPorch(true);
    hal.setFingerSize(4);
    hal....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "upgrading-projects"
  }), `\uD504\uB85C\uC81D\uD2B8 \uC5C5\uADF8\uB808\uC774\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator \uD30C\uB77C\uBBF8\uD130\uB294 .ioc \uD30C\uC77C(STM32CubeMX \uD504\uB85C\uC81D\uD2B8)\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uBC84\uC804\uC758 TouchGFX Generator\uAC00 \uCD9C\uC2DC\uB418\uBA74 \uC774\uC804 \uBC84\uC804\uC758 \uD30C\uB77C\uBBF8\uD130\uAC00 \uC0C8 \uBC84\uC804\uACFC \uD638\uD658\uC774 \uB418\uC9C0 \uC54A\uC544\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC774 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB294 X-CUBE \uBC84\uC804 \uC0AC\uC774\uC5D0\uC11C \uC5C5\uADF8\uB808\uC774\uB4DC\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Generate Code`), `\uB97C \uB204\uB974\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.touchgfx`), ` \uD30C\uC77C\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PostGenerateTargetCommand`), ` \uC139\uC158\uC5D0 \uC788\uB294 \uB2E4\uC74C \uBA85\uB839\uC5D0 \uB530\uB77C TouchGFX Designer\uC5D0\uC11C \uC5C5\uADF8\uB808\uC774\uB4DC\uAC00 \uC790\uB3D9\uC73C\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, ".touchgfx"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBA85\uB839\uC740`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\xA0.ioc\xA0`), `\uD30C\uC77C\uC744 \uC77D\uACE0 X-CUBE-TOUCHGFX\uC758 \uD604\uC7AC \uBC84\uC804\uC5D0 \uB9DE\uAC8C \uD30C\uB77C\uBBF8\uD130\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC544\uB798\uC5D0\uB294 X-CUBE-TOUCHGFX 4.13.0\uC5D0\uC11C \uC0DD\uC131\uB41C .ioc \uD30C\uC77C\uC5D0\uC11C \uC9C1\uC811 \uC2A4\uD06C\uB9BD\uD2B8(X-CUBE-TOUCHGFX 4.14.0)\uB97C \uC2E4\uD589\uD558\uB294 \uC608\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746 DISCO \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC744 \uC0AC\uC6A9\uD558\uC5EC 4.13.0\uC744 4.14.0\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB294 \uC791\uC5C5 \uC608\uC81C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc
  TouchGFX Generator 4.13.0 found
  Creating backup of ../STM32F746G_DISCO.ioc as ../backup_STM32F746G_DISCO.ioc
  Performing upgrade 4.13.0 -> 4.14.0 ... OK
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB97C \uD1B5\uD574 \uC5C5\uB370\uC774\uD2B8\uB41C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4\uBA74 \uC0AC\uC6A9\uC790\uC5D0\uAC8C .ioc \uD30C\uC77C\uC5D0 \uD45C\uC2DC\uB418\uC5B4 \uC788\uB294 X-CUBE-TOUCHGFX \uBC84\uC804\uC744 \uC124\uCE58\uD558\uB77C\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uB739\uB2C8\uB2E4(\uC544\uC9C1 \uC124\uCE58\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0). `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Download now`), `\uB97C \uD074\uB9AD\uD558\uBA74 X-Cube-TouchGFX-4.14.0\uC774 \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC124\uCE58\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\uCD94\uAC00 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C \uB204\uB77D: TouchGFX Generator 4.14.0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5C5\uADF8\uB808\uC774\uB4DC \uC808\uCC28\uAC00 \uC9C4\uD589\uB418\uB294 \uB3D9\uC548 TouchGFX Generator\uC758 \uBAA8\uB4E0 \uAD6C\uC131\uC774 \uC720\uC9C0\uB418\uACE0, .ioc \uD30C\uC77C\uC758 \uBC31\uC5C5\uC774 \uC55E\uC5D0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\xA0backup_`), `\uC774 \uBD99\uC5B4 \uC788\uB294 \uC6D0\uBCF8\uACFC \uB098\uB780\uD788 \uBC30\uCE58\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Generator\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 STM32CubeMX\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\uCF54\uB4DC \uC0DD\uC131"), "\uC744 \uC218\uD589\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\uAE30\uC874 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C STM32CubeMX\uB97C \uD1B5\uD574 X-CUBE-TOUCHGFX\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC\uD588\uC9C0\uB9CC \uD574\uB2F9 \uC5C5\uADF8\uB808\uC774\uB4DC \uD504\uB85C\uC138\uC2A4\uAC00 TouchGFX Designer\uC5D0\uC11C \uC2E4\uD589\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0, \uB2E4\uB978 \uBC84\uC804\uC5D0 \uC801\uC6A9\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D TouchGFX Generator \uD30C\uB77C\uBBF8\uD130\uAC00 \uAE30\uBCF8\uAC12\uC73C\uB85C \uC7AC\uC124\uC815\uB429\uB2C8\uB2E4."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);