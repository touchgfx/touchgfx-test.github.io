"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9695],{

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

/***/ 31619:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93054);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22425);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70814);
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
  id: "scenarios-video-decoding",
  title: "\uBE44\uB514\uC624 \uB514\uCF54\uB529"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "title": "\uBE44\uB514\uC624 \uB514\uCF54\uB529",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-video-decoding.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-video-decoding",
    "title": "\uBE44\uB514\uC624 \uB514\uCF54\uB529"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Framebuffer Strategies",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"
  },
  "next": {
    "title": "MIPI-DSI Video Mode",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"
  }
};
const assets = {};







const toc = [{
  value: "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529",
  id: "software-decoding",
  level: 2
}, {
  value: "RTOS \uC9C0\uC6D0",
  id: "rtos-support",
  level: 3
}, {
  value: "\uBE44\uB514\uC624 \uB370\uC774\uD130",
  id: "video-data",
  level: 3
}, {
  value: "\uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529",
  id: "hardware-decoding",
  level: 2
}, {
  value: "RTOS \uC9C0\uC6D0",
  id: "rtos-support-1",
  level: 3
}, {
  value: "STM32F769-DISCO",
  id: "stm32f769-disco",
  level: 3
}, {
  value: "STM32H750-DK",
  id: "stm32h750-dk",
  level: 3
}, {
  value: "<code>FileReader</code> \uC778\uD130\uD398\uC774\uC2A4",
  id: "filereader-interface",
  level: 2
}, {
  value: "TBS \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uD1B5\uD55C \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uC9C0\uC6D0",
  id: "migrating-tbs-to-support-video-decoding",
  level: 2
}, {
  value: "\uC77C\uBC18 \uBCC0\uACBD \uC0AC\uD56D",
  id: "generel-changes",
  level: 3
}, {
  value: "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBCC0\uACBD \uC0AC\uD56D",
  id: "software-changes",
  level: 3
}, {
  value: "\uD558\uB4DC\uC6E8\uC5B4 \uBCC0\uACBD \uC0AC\uD56D",
  id: "hardware-changes",
  level: 3
}, {
  value: "\uBE44\uB514\uC624 \uBC84\uD37C\uB97C \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uD558\uAE30",
  id: "placing-video-buffer-in-external-memory",
  level: 2
}, {
  value: "EWARM (IAR)",
  id: "ewarm-iar",
  level: 3
}, {
  value: "STM32CubeIDE",
  id: "stm32cubeide",
  level: 3
}, {
  value: "MDK-ARM (Keil)",
  id: "mdk-arm-keil",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD558\uB294 TouchGFX HAL\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uB3C4\uB85D `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator`), `\uB97C \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uC2DC\uB098\uB9AC\uC624\uB294 TouchGFX HAL\uC744 \uD65C\uC131\uD654\uD558\uC5EC \uC18C\uD504\uD2B8\uC6E8\uC5B4(LibJPEG)\uB098 \uD558\uB4DC\uC6E8\uC5B4(JPEG)\uB97C \uD1B5\uD574 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC9C0\uC6D0\uD558\uB294 \uBC29\uBC95\uC744 \uC790\uC138\uD788 \uC124\uBA85\uD55C \uAC83\uC785\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4(JPEG) \uB514\uCF54\uB529\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD55C STM32CubeMX \uAD6C\uC131\uC740 STM32F7\uACFC \uB2E4\uC18C \uB2E4\uB974\uAE30 \uB54C\uBB38\uC5D0 \uC5EC\uAE30\uC11C\uB294 STM32F7\uACFC STM32H7\uC744 \uBAA8\uB450 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C LibJPEG \uAD6C\uC131\uACFC JPEG \uAD6C\uC131\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 Middleware \uCE74\uD14C\uACE0\uB9AC\uC640 Multimedia \uCE74\uD14C\uACE0\uB9AC\uC758 STM32CubeMX\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/cubemx-jpeg-configuration.png",
    mdxType: "Figure"
  }, "\uB2E8\uC77C \uD504\uB808\uC784 \uBC84\uD37C(\uC8FC\uC18C \uAE30\uC900)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC2DC\uB098\uB9AC\uC624\uB97C \uC77D\uAE30 \uC804\uC5D0 \uBA3C\uC800 TouchGFX\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/touchgfx-engine-features/video"
  }), `MJPEG \uBE44\uB514\uC624`), ` \uC0AC\uC6A9\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/ui-components/miscellaneous/video"
  }), `\uBE44\uB514\uC624 \uC704\uC82F`), `\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C\uB97C \uC77D\uC5B4\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC2DC\uB098\uB9AC\uC624\uC758 \uC139\uC158\uC744 \uBAA8\uB450 \uC77D\uACE0 \uB098\uC11C \uB2E4\uC74C \uB2E8\uACC4\uB85C \uC9C4\uD589\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uCD5C\uC2E0 \uBC84\uC804\uC758 STM32H750-DK, STM32F769-DISCO \uBC0F STM32F746G-DISCO TouchGFX Board Setup(TBS)\uC740 STM32CubeMX \uAD6C\uC131\uC744 \uD1B5\uD574 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529\uACFC JPEG \uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529\uC744 \uBAA8\uB450 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "software-decoding"
  }), `\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529 \uC194\uB8E8\uC158\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 STM32CubeMX\uC5D0\uC11C LibJPEG \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD558\uB294\uB370, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator User Guide`), `\uC5D0 \uADF8 \uBC29\uBC95\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4. \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529 \uC124\uC815\uC740 LibJPEG\uB97C \uC9C0\uC6D0\uD558\uB294 MCU(\uC608: STM32F4, STM32F7, STM32H7)\uC5D0\uC11C \uBAA8\uB450 \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB354\uB294 LibJPEG\uC5D0\uC11C \uB514\uCF54\uB529\uB418\uB294 \uB370\uC774\uD130\uB97C BGR \uD53D\uC140 \uC21C\uC11C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4. \uC774 \uC124\uC815\uC774 RGB\uB85C \uB0A8\uC544 \uC788\uB2E4\uBA74 R \uC0C9\uC0C1 \uC131\uBD84\uACFC B \uC0C9\uC0C1 \uC131\uBD84\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC11C\uB85C \uC790\uB9AC\uB97C \uBC14\uAFC9\uB2C8\uB2E4. \uB610\uD55C \uAC01 \uD53D\uC140\uC758 \uD06C\uAE30\uB294 3\uBC14\uC774\uD2B8\uAC00 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4(4\uBC14\uC774\uD2B8\uB294 \uBE44\uB514\uC624\uAC00 XRGB \uD615\uC2DD\uC73C\uB85C \uC778\uCF54\uB529\uB418\uB294 \uAC83\uC744 \uC758\uBBF8\uD568).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\uB530\uB77C\uC11C RGB_ORDERING \uC124\uC815\uC740 BGR\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD558\uACE0, \uD53D\uC140 \uD06C\uAE30\uB294 3(24\uBE44\uD2B8)\uC774 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/libjpeg-configuration.png",
    width: "700",
    mdxType: "Figure"
  }, "LibJPEG \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C LibJPEG\uC774 \uD65C\uC131\uD654\uB418\uC5C8\uB2E4\uBA74 \uC774\uC81C TouchGFX Generator\uC5D0\uC11C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uB294\uB370, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator User Guide`), `\uC5D0 \uADF8 \uBC29\uBC95\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/generator-video-decoding-software.png",
    mdxType: "Figure"
  }, "TouchGFX Generator: \uBE44\uB514\uC624 \uB514\uCF54\uB529"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rtos-support"
  }), `RTOS \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator User Guide`), `\uB97C \uBCF4\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Single-`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Double buffer`), ` \uB514\uCF54\uB529 \uC804\uB7B5\uC5D0\uC11C\uB294 FreeRTOS\uC640 \uAC19\uC740 CMSIS \uD638\uD658 RTOS\uAC00 \uD544\uC694\uD558\uB2E4\uACE0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Generator\uB294 \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uD574\uC57C \uD558\uB294 \uC9C4\uC785\uC810 \uD568\uC218\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoTaskFunc`), `\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. STM32CubeMX\uB294 FreeRTOS Middleware \uAD6C\uC131 \uC2DC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Tasks and queues`), `\uD0ED\uC5D0\uC11C \uD0DC\uC2A4\uD06C\uC640 \uC9C4\uC785\uC810 \uD568\uC218\uB97C \uC815\uC758\uD558\uC5EC \uC774\uB7EC\uD55C \uAD6C\uC131\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C \uBE44\uB514\uC624 \uD0DC\uC2A4\uD06C \uC2A4\uD0DD \uD06C\uAE30(CMSIS V2\uC758 \uACBD\uC6B0 \uC6CC\uB4DC\uB85C \uC815\uC758)\uC640 RTOS \uD799 \uD06C\uAE30\uB294 \uB450 \uAC00\uC9C0 \uC911\uC694\uD55C \uC694\uC18C\uC778\uB370, RTOS \uD2B9\uD788 \uD799 \uD06C\uAE30\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529\uC744 \uC704\uD55C LibJPEG\uAC00 \uB3D9\uC801 \uBA54\uBAA8\uB9AC \uD560\uB2F9\uC744 \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC911\uC694\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C FreeRTOS \uD799\uC740 \uC77C\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 + `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xA000`), `\uC5D0 \uCDA9\uBD84\uD560 \uC815\uB3C4\uB85C \uCEE4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/freertos-video-task.png",
    mdxType: "Figure"
  }, "FreeRTOS \uD0DC\uC2A4\uD06C \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/freertos-video-decoding-heap-size.png",
    mdxType: "Figure"
  }, "FreeRTOS \uD799 \uD06C\uAE30 \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB294 \uC704 \uAD6C\uC131\uC744 \uD1A0\uB300\uB85C \uB2E4\uC74C\uACFC \uAC19\uC740 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* Definitions for VideoTask */
osThreadId_t VideoTaskHandle;
const osThreadAttr_t VideoTask_attributes = {
  .name = "VideoTask",
  .stack_size = 1000 * 4,
  .priority = (osPriority_t) osPriorityLow,
};

void main()
{
    ...
    /* creation of VideoTask */
    VideoTaskHandle = osThreadNew(videoTaskFunc, NULL, &VideoTask_attributes);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FreeRTOSConfig.h"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#define configTOTAL_HEAP_SIZE                    ((size_t)75000)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC73C\uB85C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529\uC744 \uC704\uD55C TouchGFX HAL \uAD6C\uC131\uC774 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4. STM32CubeMX\uC5D0\uC11C \uCF54\uB4DC \uC0DD\uC131\uC744 \uB9C8\uCE58\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 Designer\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../ui-development/ui-components/miscellaneous/video"
  }), `\uBE44\uB514\uC624 \uC704\uC82F`), `\uC744 \uC0AC\uC6A9\uD560 \uB54C LibJPEG\uB85C \uBE44\uB514\uC624\uB97C \uB514\uCF54\uB529\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-data"
  }), `\uBE44\uB514\uC624 \uB370\uC774\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\uD604\uC7AC STM32CubeMX\uC640 TouchGFX Generator, \uADF8\uB9AC\uACE0 TouchGFX Designer\uC758 \uBE44\uB514\uC624 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uB294 \uB514\uCF54\uB529 \uC194\uB8E8\uC158\uC740 ST \uBCF4\uB4DC\uC5D0\uC11C\uB9CC \uC720\uD6A8\uD55C\uB370, \uADF8 \uC774\uC720\uB294 \uBE44\uB514\uC624 \uB370\uC774\uD130\uAC00 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC774\uBBF8 \uC54C\uB824\uC9C4 \uD2B9\uC815 \uC8FC\uC18C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 EWARM \uD504\uB85C\uC81D\uD2B8\uC758 \uC2A4\uB2C8\uD3AB\uC740 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uCD94\uAC00 \uC635\uC158\uC744 \uBE44\uB86F\uD574 \uBAA8\uB4E0 TouchGFX \uBCF4\uB4DC \uD328\uD0A4\uC9C0\uC758 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC815\uC758\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ExtFlashSection`), `\uC5D0 \uB370\uC774\uD130\uB97C \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC744 \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4. \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uB418\uC9C0 \uC54A\uB294 \uD50C\uB798\uC2DC \uB610\uB294 \uC774 \uC139\uC158\uC744 \uC815\uC758\uD558\uC9C0 \uC54A\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uC544\uB798 \uC2A4\uB2C8\uD3AB\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "ewarm_project.ewp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `        <option>
          <name>IlinkExtraOptions</name>
          <state>--image_input $PROJ_DIR$\\..\\TouchGFX\\generated\\videos\\bin\\washerdryer.bin,video_washerdryer_bin_start,ExtFlashSection,4</state>
          <state>--keep video_washerdryer_bin_start</state>
        </option>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uB418\uC9C0 \uC54A\uB294 \uBA54\uBAA8\uB9AC\uC5D0 \uBE44\uB514\uC624 \uB370\uC774\uD130\uB97C \uCD94\uAC00\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uC124\uBA85\uC11C\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FileReader`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-decoding"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator#video-decoding"
  }), `TouchGFX Generator User Guide`), `\uC5D0\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 STM32CubeMX\uC5D0\uC11C JPEG IP\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD55C\uB2E4\uACE0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4. \uC18C\uD504\uD2B8\uC6E8\uC5B4/\uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529\uC740 \uBA87 \uAC00\uC9C0 \uACF5\uD1B5\uB41C \uD2B9\uC131\uC774 \uC788\uC9C0\uB9CC \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uCC28\uC774\uC810\uC744 \uAC04\uB7B5\uD558\uAC8C \uC18C\uAC1C\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rtos-support-1"
  }), `RTOS \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS \uC2A4\uD0DD \uD06C\uAE30\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB514\uCF54\uB529\uC5D0 \uBE44\uD574 \uD06C\uAC8C \uC904\uC5B4\uB4E4 \uC218 \uC788\uB294\uB370, \uADF8 \uC774\uC720\uB294 \uBA54\uBAA8\uB9AC\uB97C \uB3D9\uC801\uC73C\uB85C \uD560\uB2F9\uD558\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC2A4\uD0DD\uC774 \uC5C6\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC2A4\uD0DD \uD06C\uAE30\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uB2E4\uB978 \uD0DC\uC2A4\uD06C\uB97C \uC218\uC6A9\uD560 \uC218 \uC788\uC744 \uB9CC\uD07C \uCD5C\uB300\uD55C \uAC00\uAE5D\uAC8C \uC720\uC9C0\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32f769-disco"
  }), `STM32F769-DISCO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\uB97C \uC9C0\uC6D0\uD558\uB294 STM32F7 \uC2DC\uB9AC\uC988(\uC608: STM32F769)\uC5D0\uC11C\uB294 JPEG \uAD6C\uC131\uC774 STM32H7 \uB77C\uC778\uACFC \uB2E4\uC18C \uB2E4\uB985\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `RGB_FORMAT`), `\uC740 TouchGFX \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD615\uC2DD\uC744 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4. \uC544\uB798 \uC608\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `JPEG_RGB565`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-configuration.png",
    mdxType: "Figure"
  }, "JPEG \uB9E4\uAC1C\uBCC0\uC218 \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DMA\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `DMA Settings`), `\uB97C \uD1B5\uD574 \uB370\uC774\uD130\uB97C JPEG \uC8FC\uBCC0 \uC7A5\uCE58\uB85C(\uBA54\uBAA8\uB9AC-\uC8FC\uBCC0 \uC7A5\uCE58), \uB610\uB294 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0\uC11C(\uC8FC\uBCC0 \uC7A5\uCE58-\uBA54\uBAA8\uB9AC) \uC804\uC1A1\uD569\uB2C8\uB2E4. DMA \uC694\uCCAD\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `IN`), `\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uCD94\uAC00\uD558\uBA74`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OUT`), ` \uC694\uCCAD\uC774 \uBC29\uD5A5 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration1.png",
    mdxType: "Figure"
  }, "JPEG DMA \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration2.png",
    mdxType: "Figure"
  }, "JPEG DMA \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC73C\uB85C JPEG\uC744 \uC9C0\uC6D0\uD558\uB294 STM32F7(\uC608: STM32F769)\uC5D0\uC11C \uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529\uC744 \uC704\uD55C TouchGFX HAL \uAD6C\uC131\uC774 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4. STM32CubeMX\uC5D0\uC11C \uCF54\uB4DC \uC0DD\uC131\uC744 \uB9C8\uCE58\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 Designer\uC5D0\uC11C \uBE44\uB514\uC624 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD560 \uB54C JPEG \uC8FC\uBCC0 \uC7A5\uCE58\uB85C \uBE44\uB514\uC624\uB97C \uB514\uCF54\uB529\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "JPEG \uC8FC\uBCC0 \uC7A5\uCE58 \uAD6C\uC131\uC5D0\uC11C RGB_FORMAT\uC740 TouchGFX \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD615\uC2DD\uC744 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32h750-dk"
  }), `STM32H750-DK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 STM32H750\uC77C \uB54C \uD558\uB4DC\uC6E8\uC5B4 \uB514\uCF54\uB529(JPEG \uC9C0\uC6D0)\uC774 STM32F769\uACFC \uC720\uC77C\uD558\uAC8C \uB2E4\uB978 \uC810\uC740 STM32CubeMX\uC5D0\uC11C DMA \uC804\uC1A1\uC744 \uAD6C\uC131\uD558\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4. UI\uB294 \uBB3C\uB860\uC774\uACE0 DMA \uAC1C\uB150\uB3C4 \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H750\uC758 \uACBD\uC6B0\uC5D0\uB294 JPEG \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uC77C\uBC18 DMA \uC8FC\uBCC0 \uC7A5\uCE58\uAC00 \uC544\uB2CC MDMA \uC8FC\uBCC0 \uC7A5\uCE58\uB9CC \uC0AC\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 input/output FIFO threshold \uC2E0\uD638\uC5D0 MDMA \uAD6C\uC131\uC744 \uCD94\uAC00\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "MDMA\uB294 DMA1/DMA2\uC5D0 \uBE44\uD574 \uC131\uB2A5\uC774 \uD6E8\uC52C \uB6F0\uC5B4\uB09C DMA \uC5D4\uC9C4\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/mdma-input-fifo-threshold.png",
    mdxType: "Figure"
  }, "JPEG DMA \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/mdma-output-fifo-threshold.png",
    mdxType: "Figure"
  }, "JPEG DMA \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "H7\uC758 \uACBD\uC6B0, \uB370\uC774\uD130 \uC785/\uCD9C\uB825\uC744 \uC704\uD55C DMA \uC694\uCCAD\uC744 \uC62C\uBC14\uB974\uAC8C \uAD6C\uC131\uD558\uB824\uBA74 *User Code*\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C \uC608\uB97C \uB4E4\uC5B4 STM32H750\uC5D0 \uC0AC\uC6A9\uD560 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uACBD\uC6B0 \uC544\uC27D\uC9C0\uB9CC \uC704\uC5D0\uC11C \uC815\uC758\uD55C MDMA\uB97C MDMA \uD578\uB4E4\uB7EC\uC5D0 \uAD6C\uC131\uD558\uB294 \uCF54\uB4DC\uAC00 \uB204\uB77D\uB418\uAE30 \uB54C\uBB38\uC5D0 \uAC1C\uBC1C\uC790\uAC00 \uC544\uB798 \uAC15\uC870 \uD45C\uC2DC\uB41C \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uC9C1\uC811 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Core\\Src\\stm32h7xx_hal_msp.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-7}",
    "{6-7}": true
  }), `void HAL_JPEG_MspInit(JPEG_HandleTypeDef* hjpeg)
{
  if(hjpeg->Instance==JPEG)
  {
  /* USER CODE BEGIN JPEG_MspInit 0 */
     hmdma_jpeg_infifo_th.Init.Request = MDMA_REQUEST_JPEG_INFIFO_TH;
     hmdma_jpeg_outfifo_th.Init.Request = MDMA_REQUEST_JPEG_OUTFIFO_TH;
  /* USER CODE END JPEG_MspInit 0 */
   ...

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "filereader-interface"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "h2"
  }, `FileReader`), ` \uC778\uD130\uD398\uC774\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uAC00 MJPEG \uBE44\uB514\uC624\uB97C \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uB418\uC9C0 \uC54A\uB294 \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 TouchGFX \uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uB514\uCF54\uB529\uD560 \uB370\uC774\uD130\uB97C \uAD6C\uC131\uB41C \uB514\uCF54\uB354(\uC18C\uD504\uD2B8\uC6E8\uC5B4/\uD558\uB4DC\uC6E8\uC5B4)\uB85C \uC804\uB2EC\uD560 \uB54C \uC0AC\uC6A9\uD560 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::VideoDataReader`), ` \uAD6C\uD604\uCCB4\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uB294 \uBE44\uB514\uC624 \uB370\uC774\uD130\uB97C \uBC84\uD37C\uC5D0\uC11C \uB2E4\uB978 \uBC84\uD37C\uB85C \uBCF5\uC0AC\uD558\uB294 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC608\uC2DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "VideoView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class MyReader : public touchgfx::VideoDataReader
{
public:
    MyReader() : position(0) { }
    virtual uint32_t getDataLength() { return video_len; }
    virtual void seek(uint32_t pos) { position = pos; }
    virtual bool readData(void* dst, uint32_t bytes)
    {
        memcpy(dst, &video_data[position], bytes);
        position += bytes;
        return true;
    }
    private:
        uint32_t position;
} myReader;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video`), ` \uC704\uC82F\uC5D0\uAC8C \uB9E4\uD551 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uBE44\uB514\uC624 \uC2DC\uC791 \uBC29\uD5A5\uC73C\uB85C \uD5A5\uD558\uB294 \uB300\uC2E0, \uB370\uC774\uD130 \uB9AC\uB354\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "VideoView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `video.setVideoData(myReader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "migrating-tbs-to-support-video-decoding"
  }), `TBS \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uD1B5\uD55C \uBE44\uB514\uC624 \uB514\uCF54\uB529 \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804\uC5D0 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC9C0\uC6D0\uD558\uB294 \uBCF4\uB4DC \uC911 \uD558\uB098\uC758 TBS\uC5D0\uC11C \uC0DD\uC131\uB418\uC5C8\uB358 \uD504\uB85C\uC81D\uD2B8\uB97C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uC5EC TouchGFX Desginer\uC758 'Run Target'\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uB2E4\uBA74 GCC Makefile\uC5D0\uC11C \uC77C\uBD80\uB97C \uC9C1\uC811 \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uD544\uC694\uD55C \uBCC0\uACBD \uC0AC\uD56D\uACFC \uADF8 \uC774\uC720\uC5D0 \uB300\uD574\uC11C\uB294 \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uC804 TBS\uC5D0\uC11C \uC774\uBBF8 \uC874\uC7AC\uD558\uB294 GCC Makefile\uB85C \uD655\uC7A5\uD558\uB294 \uBCC0\uACBD\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Makefile\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 \uC704\uC758 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC124\uBA85\uD55C \uAC83\uCC98\uB7FC STM32CubeMX\uC5D0\uC11C \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generel-changes"
  }), `\uC77C\uBC18 \uBCC0\uACBD \uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C LIBJPEG \uACBD\uB85C\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make"
  }), `# LibJPEG path
libjpeg_path := $(cubemx_middlewares_path)/Third_Party/LibJPEG
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uBE44\uB514\uC624 \uC560\uC14B \uC785\uB825 \uACBD\uB85C\uB97C \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{3}",
    "{3}": true
  }), `asset_texts_input  := TouchGFX/assets/texts

asset_videos_input := TouchGFX/assets/videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uC560\uC14B \uCD9C\uB825 \uACBD\uB85C\uB3C4 \uB098\uBA38\uC9C0 \uC560\uC14B \uCD9C\uB825 \uACBD\uB85C \uC544\uB798\uC5D0 \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4}",
    "{4}": true
  }), `asset_images_output := $(asset_root_path)/images
asset_fonts_output := $(asset_root_path)/fonts
asset_texts_output := $(asset_root_path)/texts
asset_videos_output := $(asset_root_path)/videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uCD9C\uB825 \uC560\uC14B\uC744 \uAD6C\uC131\uC694\uC18C \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{6}",
    "{6}": true
  }), `all_components := $(components) \\
    $(asset_fonts_output) \\
    $(asset_images_output) \\
    $(asset_texts_output)
    $(asset_texts_output) \\
    $(asset_videos_output)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uAC1D\uCCB4 \uD30C\uC77C\uC744 \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uBE44\uB514\uC624 \uAC1D\uCCB4 \uD30C\uC77C\uC774 \uAE30\uC874 \uAC1D\uCCB4\uC5D0\uC11C \uBD84\uB9AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4}",
    "{4}": true
  }), `c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)
source_files += $(board_cpp_files)

video_object_files := $(call find, $(asset_videos_output),*.o)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uBCC0\uD658 \uB3C4\uAD6C \uC2A4\uD06C\uB9BD\uD2B8\uC5D0 \uB300\uD55C \uACBD\uB85C\uB97C \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{3}",
    "{3}": true
  }), `textconvert_script_path := $(touchgfx_path)/framework/tools/textconvert
textconvert_executable := $(call find, $(textconvert_script_path), *.rb)
videoconvert_script_path := $(touchgfx_path)/framework/tools/videoconvert
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC120\uD0DD \uC0AC\uD56D\uC73C\uB85C \uC5D0\uCF54\uB97C \uCD94\uAC00\uD558\uC5EC \uBE44\uB514\uC624 \uAC1D\uCCB4 \uD30C\uC77C\uC744 \uBAA8\uB450 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uBE44\uB514\uC624 \uAC1D\uCCB4 \uD30C\uC77C\uC744 \uC5F0\uACB0 \uB2E8\uACC4\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uD589\uC5D0\uB294 \uB098\uBA38\uC9C0 \uAC1D\uCCB4 \uD30C\uC77C\uACFC \uD568\uAED8 $(video_object_files)\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{2,6}",
    "{2,6}": true
  }), `$(binary_output_path)/$(target_executable): $(object_files) $(object_asm_files)
    @echo Video Objects: $(video_object_files)
    @echo Linking $(@)
    @mkdir -p $(@D)
    @mkdir -p $(object_output_path)
    @$(file >$(build_root_path)/objects.tmp) $(foreach F,$(object_files) $(video_object_files),$(file >>$(build_root_path)/objects.tmp,$F))
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uADDC\uCE59\uC744 \uAE30\uC874 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC560\uC14B`), `\uACFC .PHONY\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{1,3}",
    "{1,3}": true
  }), `_assets_: BitmapDatabase TextKeysAndLanguages Videos

.PHONY: BitmapDatabase TextKeysAndLanguages Videos
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uADDC\uCE59\uC774 \uBE44\uB514\uC624 \uBCC0\uD658 \uCD94\uAC00\uC640 \uD568\uAED8 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make"
  }), `Videos:
    @ruby $(videoconvert_script_path)/videoconvert.rb $(asset_videos_input) $(asset_videos_output)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBE44\uB514\uC624 \uAD00\uB828 \uCD9C\uB825\uB3C4 \uC0AD\uC81C\uD560 \uC218 \uC788\uB3C4\uB85D \uC0AD\uC81C \uADDC\uCE59\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{8}",
    "{8}": true
  }), `_clean_:
    @echo Cleaning: $(board_name)
    @rm -rf $(build_root_path)
    # Do not remove gui_generated
    @rm -rf $(asset_images_output)
    @rm -rf $(asset_fonts_output)
    @rm -rf $(asset_texts_output)
    @rm -rf $(asset_videos_output)
    # Create directory to avoid error if it does not exist
    @mkdir -p $(asset_root_path)
    # Remove assets folder if it is empty (i.e. no gui_generated folder)
    @rmdir --ignore-fail-on-non-empty $(asset_root_path)
    # Clean bootloader project
    @$(MAKE) -r -f ExtMem_Boot/gcc/Makefile -s $(MFLAGS) clean
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "software-changes"
  }), `\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBCC0\uACBD \uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 LIBJPEG \uACBD\uB85C\uB97C include \uACBD\uB85C\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{9-11}",
    "{9-11}": true
  }), `include_paths := $(library_includes) \\
    $(foreach comp, $(all_components), $(comp)/include) \\
    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\
    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\
    $(framework_includes) \\
    $(cubemx_middlewares_path) \\
    $(touchgfx_middlewares_path) \\
    $(touchgfx_generator_components) \\
    LIBJPEG/Target \\
    $(libjpeg_path)/include \\
    LIBJPEG/App
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LIBJPEG \uC18C\uC2A4 \uACBD\uB85C\uB97C \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{4-5}",
    "{4-5}": true
  }), `c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)
source_files += $(board_cpp_files)

libjpeg_source_path = Middlewares/Third_Party/LibJPEG/source
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uBAA8\uB4E0 LIBJPEG \uC18C\uC2A4 \uD30C\uC77C\uC744 board_c_files\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{10-37}",
    "{10-37}": true
  }), `board_c_files := \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\
    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\
    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\
    $(libjpeg_source_path)/jaricom.c \\
    $(libjpeg_source_path)/jcomapi.c \\
    $(libjpeg_source_path)/jdapimin.c \\
    $(libjpeg_source_path)/jdapistd.c \\
    $(libjpeg_source_path)/jdarith.c \\
    $(libjpeg_source_path)/jdatasrc.c \\
    $(libjpeg_source_path)/jdcoefct.c \\
    $(libjpeg_source_path)/jdcolor.c \\
    $(libjpeg_source_path)/jddctmgr.c \\
    $(libjpeg_source_path)/jdhuff.c \\
    $(libjpeg_source_path)/jdinput.c \\
    $(libjpeg_source_path)/jdmainct.c \\
    $(libjpeg_source_path)/jdmarker.c \\
    $(libjpeg_source_path)/jdmaster.c \\
    $(libjpeg_source_path)/jdmerge.c \\
    $(libjpeg_source_path)/jdpostct.c \\
    $(libjpeg_source_path)/jdsample.c \\
    $(libjpeg_source_path)/jdtrans.c \\
    $(libjpeg_source_path)/jerror.c \\
    $(libjpeg_source_path)/jidctflt.c \\
    $(libjpeg_source_path)/jidctfst.c \\
    $(libjpeg_source_path)/jidctint.c \\
    $(libjpeg_source_path)/jmemmgr.c \\
    $(libjpeg_source_path)/jmemnobs.c \\
    $(libjpeg_source_path)/jquant1.c \\
    $(libjpeg_source_path)/jquant2.c \\
    $(libjpeg_source_path)/jutils.c \\
    LIBJPEG/App/libjpeg.c
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7EC\uBA74 LIBJPEG \uC18C\uC2A4 \uD30C\uC77C\uC774 \uB098\uBA38\uC9C0 \uBBF8\uB4E4\uC6E8\uC5B4 \uC18C\uC2A4 \uD30C\uC77C\uACFC \uB3D9\uC77C\uD55C \uBC29\uC2DD\uC73C\uB85C \uAE30\uC874 \uAC1D\uCCB4 \uD30C\uC77C\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{6}",
    "{6}": true
  }), `# Start converting paths
object_files := $(object_files:$(touchgfx_path)/%.cpp=$(object_output_path)/touchgfx/%.o)
object_files := $(object_files:%.cpp=$(object_output_path)/%.o)
object_files := $(object_files:$(touchgfx_middlewares_path)/%.c=$(object_output_path)/$(touchgfx_middlewares_path)/%.o)
object_files := $(object_files:$(cubemx_middlewares_path)/%.c=$(object_output_path)/$(cubemx_middlewares_path)/%.o)
object_files := $(object_files:$(libjpeg_source_path)/%.c=$(object_output_path)/$(libjpeg_source_path)/%.o)
object_files := $(object_files:$(Drivers_path)/%.c=$(object_output_path)/Drivers/%.o)
object_files := $(object_files:%.c=$(object_output_path)/%.o)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-changes"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uBCC0\uACBD \uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 JPEG \uACBD\uB85C\uB97C include \uACBD\uB85C\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{9}",
    "{9}": true
  }), `include_paths := $(library_includes) \\
    $(foreach comp, $(all_components), $(comp)/include) \\
    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\
    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\
    $(framework_includes) \\
    $(cubemx_middlewares_path) \\
    $(touchgfx_middlewares_path) \\
    $(touchgfx_generator_components) \\
    Utilities/JPEG
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uBAA8\uB4E0 JPEG \uC18C\uC2A4 \uD30C\uC77C\uC744 board_c_files\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-make",
    "metastring": "{10}",
    "{10}": true
  }), `board_c_files := \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\
    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\
    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\
    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\
    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\
    Utilities/JPEG/jpeg_utils.c
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "placing-video-buffer-in-external-memory"
  }), `\uBE44\uB514\uC624 \uBC84\uD37C\uB97C \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uAC00 CubeMX\uB97C \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uACBD\uC6B0 TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC601\uC5ED\uC740 \uC0DD\uC131\uB41C \uD504\uB85C\uC81D\uD2B8\uC640 \uC5F0\uACB0\uB41C \uB9C1\uD06C \uC2A4\uD06C\uB9BD\uD2B8\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 MJPEG \uBE44\uB514\uC624\uB97C \uB514\uCF54\uB529\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uBC84\uD37C\uB294 \uAC1C\uBC1C\uC790\uAC00 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC218\uC815\uD558\uC5EC \uB2E4\uB978 \uACF3\uC5D0 \uC800\uC7A5\uD560 \uB54C\uAE4C\uC9C0 \uB9C1\uCEE4\uB97C \uD1B5\uD574 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uAC00 \uC774\uB807\uAC8C \uC218\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uBD80 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC774 \uD06C\uAC8C \uC99D\uAC00\uD558\uC5EC \uC804\uCCB4 \uD654\uBA74 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uACFC \uAC19\uC740 \uB300\uC6A9\uB7C9\uC758 \uBE44\uB514\uC624 \uBC84\uD37C\uB97C \uC800\uC7A5\uD558\uC9C0 \uBABB\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uB2E4\uC74C\uC740 \uC0AC\uC804 \uAD6C\uC131\uB418\uC5B4 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uC788\uB294 \uBE44\uB514\uC624\uB97C \uC5B8\uC81C\uB4E0\uC9C0 \uB514\uCF54\uB529\uD560 \uC218 \uC788\uB294 TBS\uC785\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32F746-DISCO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32F769-DISCO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32H750-DK"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uD65C\uC131\uD654\uD558\uBA74 JPEG \uB514\uCF54\uB529 \uC804\uC6A9 RGB \uBC84\uD37C\uC5D0 \uB300\uD55C \uC815\uC758\uAC00 TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC815\uC758\uB294 \uB9C1\uCEE4\uC5D0\uAC8C \uBC84\uD37C\uB97C \uC800\uC7A5\uD560 \uC139\uC158\uC744 \uC54C\uB824\uC8FC\uB294 location pragma\uB85C \uACC4\uCE21\uB429\uB2C8\uB2E4. \uB9C1\uCEE4\uAC00 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC774 \uBA54\uBAA8\uB9AC \uC601\uC5ED\uC744 \uCC3E\uC9C0 \uBABB\uD558\uBA74 \uBC84\uD37C\uAC00 \uB0B4\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `LOCATION_PRAGMA_NOLOAD("Video_RGB_Buffer")
uint32_t videoRGBBuffer[57600] LOCATION_ATTRIBUTE_NOLOAD("Video_RGB_Buffer");
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uCEF4\uD30C\uC77C\uB7EC\uBCC4 \uD558\uC704 \uC139\uC158\uC740 \uAC1C\uBC1C\uC790\uAC00 \uBC84\uD37C\uB97C SDRAM\uC5D0 \uC800\uC7A5\uD558\uB824\uACE0 \uD560 \uB54C \uC218\uC815\uD560 \uC218 \uC788\uB294 \uB0B4\uC6A9\uC744 \uC124\uBA85\uD55C \uAC83\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\uB294 \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBC84\uD37C\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8 \uC608\uC81C\uC5D0\uC11C\uB294 TouchGFX \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC704\uD574 SDRAM\uC5D0 \uC77C\uBD80 \uACF5\uAC04(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `\uC5D0\uC11C \uC2DC\uC791)\uC744 \uB0A8\uACA8\uB450\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uBE44\uB514\uC624 \uB514\uCF54\uB529\uC744 \uC704\uD55C \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131 \uBC29\uBC95\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator#video-decoding",
    mdxType: "Link"
  }, "TouchGFX Generator User Guide"), "\uC5D0\uC11C \uD574\uB2F9 \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC608\uC81C\uB294 \uBAA8\uB450 STM32F746G-DISCO \uBCF4\uB4DC\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC8FC\uC18C(\uC608: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `)\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uCC38\uC870\uD560 \uC218 \uC788\uB3C4\uB85D SDRAM \uC2DC\uC791 \uC704\uCE58\uC5D0 \uC77C\uBD80 \uACF5\uAC04(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC0000000`), `->`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `0xC00FF000`), `)\uC744 \uB0A8\uACA8\uB450\uC5B4 \uB9C1\uCEE4\uAC00 \uD504\uB808\uC784 \uBC84\uD37C \uB370\uC774\uD130\uB97C \uB36E\uC5B4\uC4F8 \uC704\uD5D8\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uAC01 \uC608\uC81C\uB9C8\uB2E4 \uB9C1\uCEE4\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), `\uB97C \uC815\uC758\uB41C SDRAM \uC601\uC5ED\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uC9C1\uC811 \uC8FC\uC18C\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 Touchgfx \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD560\uB2F9\uD55C\uB2E4\uBA74 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TouchGFX_Framebuffer"), "\uB3C4 SDRAM\uC5D0 \uC800\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ewarm-iar"
  }), `EWARM (IAR)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f746xx_flash.icf"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `define symbol __ICFEDIT_region_SDRAM_start__   = 0xC00FF000;
define symbol __ICFEDIT_region_SDRAM_end__     = 0xC0700FFF;

define region SDRAM_region    = mem:[from __ICFEDIT_region_SDRAM_start__ to __ICFEDIT_region_SDRAM_end__];

place in SDRAM_region    { first section Video_RGB_Buffer };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5F0\uACB0\uC744 \uB9C8\uCE58\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `EWARM\\STM32F746G_DISCO\\List\\STM32F746G_DISCO.map`), `\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), ` \uC800\uC7A5 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Video_RGB_Buffer        zero     0xc00f'f000   0x3'8400  TouchGFXGeneratedHAL.o [2]
                               - 0xc013'7400   0x3'8400
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubeide"
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746NGHX_FLASH.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  ...
  SDRAM      (xrw)    : ORIGIN = 0xC00FF000,   LENGTH = 8M
}

BufferSection (NOLOAD) :
{
  *(Video_RGB_Buffer Video_RGB_Buffer.*)
  *(.gnu.linkonce.r.*)
  . = ALIGN(0x4);
} >SDRAM

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEF4\uD30C\uC77C\uC744 \uB9C8\uCE58\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32CubeIDE\\Debug\\STM32F746G_DISCO.map`), `\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), ` \uC800\uC7A5 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `BufferSection   0x00000000c00ff000    0x1c200
 *(Video_RGB_Buffer Video_RGB_Buffer.*)
 Video_RGB_Buffer
                0x00000000c00ff000    0x1c200 Application/User/TouchGFX/target/generated/TouchGFXGeneratedHAL.o
                0x00000000c00ff000                videoRGBBuffer
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mdk-arm-keil"
  }), `MDK-ARM (Keil)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.sct"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `LR_IROM1 0x08000000 0x00200000  {    ; load region size_region
  ER_IROM1 0x08000000 0x00200000  {  ; load address = execution address
    *.o (RESET, +First)
    *(InRoot$$Sections)
    .ANY (+RO)
  }
  RW_IRAM1 0x20000000 0x00050000  {  ; RW data
    .ANY (+RW +ZI)
  }
  RW_SDRAM 0xC00FF000 UNINIT 0xC0700FFF  {
    *.o (Video_RGB_Buffer)
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Make sure to include the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `UNINIT`), ` attribute in the section that holds the Video Buffer. This ensures leaving the memory region as uninitialized data. \uC5F0\uACB0\uC744 \uB9C8\uCE58\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MDK-ARM\\STM32F746G_DISCO\\STM32F746G_DISCO.map`), `\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Video_RGB_Buffer`), ` \uC800\uC7A5 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746G_DISCO.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Video_RGB_Buffer                         0xc00ff000   Section    115200  touchgfxgeneratedhal.o(Video_RGB_Buffer)
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);