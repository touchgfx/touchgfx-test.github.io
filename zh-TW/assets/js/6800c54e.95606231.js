"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3317],{

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

/***/ 47428:
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
  title: "Generator\u4F7F\u7528\u8005\u6307\u5357"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-generator",
  "id": "development/touchgfx-hal-development/touchgfx-generator",
  "title": "Generator\u4F7F\u7528\u8005\u6307\u5357",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-generator.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-generator",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-generator",
    "title": "Generator\u4F7F\u7528\u8005\u6307\u5357"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u62BD\u8C61\u5C64\u67B6\u69CB",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-architecture"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-TW/docs/category/scenarios"
  }
};
const assets = {};






const toc = [{
  value: "\u555F\u7528TouchGFX Generator",
  id: "enabling-touchgfx-generator",
  level: 2
}, {
  value: "\u7522\u751F\u7A0B\u5F0F\u78BC\u7684\u67B6\u69CB",
  id: "generated-code-architecture",
  level: 2
}, {
  value: "\u7279\u6027\u6982\u8FF0",
  id: "feature-overview",
  level: 2
}, {
  value: "\u986F\u793A\uFF08Display\uFF09",
  id: "display",
  level: 2
}, {
  value: "\u4ECB\u9762\u8207\u5C3A\u5BF8",
  id: "interface-and-dimensions",
  level: 3
}, {
  value: "\u5F71\u50CF\u7DE9\u885D\u5340\u50CF\u7D20\u683C\u5F0F",
  id: "framebuffer-pixel-format",
  level: 3
}, {
  value: "\u7DE9\u885D\u5340\u7B56\u7565",
  id: "buffering-strategies",
  level: 3
}, {
  value: "\u9A45\u52D5\u7A0B\u5F0F",
  id: "driver",
  level: 2
}, {
  value: "\u61C9\u7528\u6642\u6A19\u6E90\uFF08Application Tick Source\uFF09",
  id: "application-tick-source",
  level: 3
}, {
  value: "\u5716\u5F62\u52A0\u901F\u5668",
  id: "graphics-accelerator",
  level: 3
}, {
  value: "\u5373\u6642\u4F5C\u696D\u7CFB\u7D71",
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
  value: "\u5176\u4ED6CMSIS\u76F8\u5BB9\u7684OS",
  id: "other-cmsis-compliant-os",
  level: 4
}, {
  value: "\u984D\u5916\u529F\u80FD",
  id: "additional-features",
  level: 3
}, {
  value: "\u5916\u90E8\u8CC7\u6599\u8B80\u53D6\u5668",
  id: "external-data-reader",
  level: 4
}, {
  value: "8\u4F4D\u5143 LTDC\u984F\u8272\u67E5\u627E\u8868\uFF08Look-up Table\uFF09",
  id: "8bit-ltdc-color-look-up-table",
  level: 4
}, {
  value: "\u5F71\u7247\u89E3\u78BC",
  id: "video-decoding",
  level: 2
}, {
  value: "\u985E\u578B",
  id: "video-decoding-type",
  level: 3
}, {
  value: "\u4F75\u767C\u5F71\u7247",
  id: "video-decoding-number",
  level: 3
}, {
  value: "\u7B56\u7565",
  id: "video-decoding-strategy",
  level: 3
}, {
  value: "\u89E3\u78BC\u683C\u5F0F",
  id: "decode-format",
  level: 3
}, {
  value: "\u7DE9\u885D\u5340\u5927\u5C0F\uFF1A",
  id: "video-decoding-buffer-size",
  level: 3
}, {
  value: "\u7522\u751F\u7684\u5C08\u6848",
  id: "generated-project",
  level: 2
}, {
  value: "TouchGFX Designer\u5C08\u6848",
  id: "touchgfx-designer-project",
  level: 2
}, {
  value: "\u4FEE\u6539\u6240\u7522\u751F\u7684\u884C\u70BA",
  id: "modifying-generated-behavior",
  level: 2
}, {
  value: "\u5347\u7D1A\u5C08\u6848",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u662FX-CUBE-TOUCHGFX\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u662FSTM32CubeMX\u9644\u52A0\u8EDF\u9AD4\u5143\u4EF6\uFF0C\u53EF\u5E6B\u52A9\u958B\u767C\u4EBA\u54E1\u914D\u7F6ETouchGFX\u8B93\u61C9\u7528\u53EF\u5728\u958B\u767C\u8005\u7684\u786C\u9AD4\u5E73\u53F0\u4E0A\u57F7\u884C\u3002 \u6839\u64DA\u73FE\u6709\u7684STM32CubeMX\u8A2D\u5B9A\u8207\u4F7F\u7528\u8005\u7684\u8F38\u5165\uFF0CTouchGFX Generator\u5C07\u7522\u751F\u7528\u4EE5\u914D\u7F6E\u4E00\u500B\u53EF\u904B\u4F5C\u7684TouchGFX\u61C9\u7528\u6240\u9700\u7684\u6240\u6709\u6A94\u6848\uFF0C \u5305\u542B\u4E86TouchGFX HAL\u3001TouchGFX OSAL\u548CTouchGFX\u914D\u7F6E\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5STM32CubeMX\u7522\u751F\u7A0B\u5F0F\u78BC\u5F8C\uFF0C\u53EF\u900F\u904E\u7528\u4F86\u958B\u767CUI\u7684TouchGFX Designer\u4F86\u6253\u958BTouchGFX\u5C08\u6848\u3002 TouchGFX Designer\u6703\u81EA\u52D5\u5C07\u6240\u6709\u984D\u5916\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u6A94\u6848\u52A0\u5165STM32CubeMX\u6240\u6307\u5B9A\u7684\u76EE\u6A19IDE\u7576\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "enabling-touchgfx-generator"
  }), `\u555F\u7528TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u8005\u53EF\u900F\u904E\u6309\u300C\u9078\u64C7\u5143\u4EF6\uFF08Select Components\uFF09\u300D\u6309\u9215\u4F86\u5B58\u53D6X-CUBE\u4EE5\u65B0\u589E\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/enable-generator.png",
    mdxType: "Figure"
  }, "\u5728STM32CubeMX\u4E2D\u9078\u64C7\u9644\u52A0\u8EDF\u9AD4\uFF08Additional Software\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u5C55\u793A\u5728\u5C08\u6848\u4E2D\u5982\u4F55\u555F\u7528TouchGFX Generator\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-v4.17.png",
    width: "580",
    mdxType: "Figure"
  }, "\u555F\u7528TouchGFX Generator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u70BA\u96D9\u6838MCU\u555F\u7528TouchGFX\uFF0C\u8ACB\u78BA\u4FDD\u555F\u7528\u6B63\u78BA\u7684\u5167\u5BB9\u3002 TouchGFX\u53EA\u80FD\u70BA\u55AE\u4E00\u5167\u6587\u555F\u7528\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.png",
    mdxType: "Figure"
  }, "\u555F\u7528\u9069\u7528\u65BC\u96D9\u6838\u5FC3\u7684TouchGFX Generator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-architecture"
  }), `\u7522\u751F\u7A0B\u5F0F\u78BC\u7684\u67B6\u69CB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u63CF\u8FF0TouchGFX Generator\u7684\u529F\u80FD\u4E4B\u524D\uFF0C\u5148\u4E86\u89E3\u6240\u7522\u751F\u7A0B\u5F0F\u78BC\u7684\u67B6\u69CB\u4EE5\u53CA\u958B\u767C\u4EBA\u54E1\u5982\u4F55\u4F7F\u7528\u8A72\u67B6\u69CB\u4F86\u5BA2\u88FD\u5316\u914D\u7F6E\u548C\u884C\u70BA\u81F3\u95DC\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4FDD\u8B77\u7531STM32CubeMX\u6240\u7522\u751F\u7684C\u7A0B\u5F0F\u78BC\u4E2D\u6240\u52A0\u5165\u7684\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\uFF0C\u5C31\u5FC5\u9700\u5C07\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u7F6E\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u300C\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\uFF08User Code\uFF09\u300D\u7A0B\u5F0F\u78BC\u5340\u6BB5`), `\u7576\u4E2D\u3002\xA0\u5728TouchGFX Generator\u6240\u7522\u751F\u7684C++\u7A0B\u5F0F\u78BC\u4E2D\uFF0C\u9019\u6A23\u7684\u9748\u6D3B\u6027\u662F\u900F\u904E\u7269\u4EF6\u7E7C\u627F\u7684\u65B9\u5F0F\u4F86\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9644\u52A0\u8EDF\u9AD4\uFF08Additional Software\uFF09`), `\u65B0\u589E\u4E26\u555F\u7528TouchGFX Generator\u4E4B\u5F8C\uFF0CSTM32CubeMX\u6703\u4E00\u76F4\u70BA\u5C08\u6848\u5EFA\u7ACB\u4E00\u500B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX`), `\u8CC7\u6599\u593E\u3002 \u7121\u8AD6\u914D\u7F6E\u5982\u4F55\uFF0C\u8A72\u8CC7\u6599\u593E\u7E3D\u662F\u5305\u542B\u76F8\u540C\u7684\u6A94\u6848\u6210\u54E1\uFF0C\u800C\u6A94\u6848\u5167\u5BB9\u5247\u56E0STM32CubeMX\u548C\u4F7F\u7528\u8005\u914D\u7F6E\u800C\u7570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4EE5\u4E0B\u7684\u6E05\u55AE\u53EF\u770B\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u555F\u7528`), `TouchGFX Generator\u4E4B\u5F8C\u7684STM32CubeMX\u5C08\u6848\u5167\u5BB9\uFF0C\u4E26\u5217\u51FA\u8207TouchGFX\u76F8\u95DC\u8F03\u5B8C\u6574\u7684\u6A94\u6848\u6210\u54E1\u3002 \u5728\u6E05\u55AE\u4E4B\u5F8C\u7684\u8868\u683C\u5247\u5217\u51FA\u4E86\u6700\u91CD\u8981\u5C08\u6848\u7684\u8077\u8CAC\uFF08responsibility\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX \u8CC7\u6599\u593E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u8CC7\u6599\u593E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8077\u8CAC\uFF08Responsibility\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `STM32CubeMX\u5C08\u6848\u6A94`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6838\u5FC3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `main.c`), `\u8207\u555F\u52D5\u7A0B\u5F0F\u78BC\uFF08startup code\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A45\u52D5\u7A0B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CMSIS\u8207MCU\u7CFB\u5217\u9A45\u52D5\u7A0B\u5F0F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE\u5C08\u6848\u8CC7\u6599\u593E\u3002 \u53EF\u4EE5\u70BAEWARM\uFF0CMDK-ARM\u6216STM32CubeIDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E2D\u4ECB\u8EDF\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5305\u542BTouchGFX\u51FD\u5F0F\u5EAB/\u6A19\u982D\u6A94\u4EE5\u53CAFreeRTOS\u7B49\u7B2C\u4E09\u65B9\u8EDF\u9AD4\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ApplicationTemplate.touchgfx.part`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\u4F7F\u7528\u8207TouchGFX Designer\u5C08\u6848\u76F8\u95DC\u7684\u8CC7\u8A0A\uFF08\u5982\u87A2\u5E55\u5C3A\u5BF8\u548C\u4F4D\u5143\u6DF1\u5EA6\uFF09\u4F86\u66F4\u65B0.part\u6A94\u6848`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u61C9\u7528\u7A0B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u70BAX-CUBE\u548CSTM32CubeMX\u7684\u4ECB\u9762\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `app_touchgfx.c`), `\u5305\u542B\u4E86\u7528\u65BC\u521D\u59CB\u5316TouchGFX\u4E26\u555F\u52D5\u5176\u4E3B\u8FF4\u5708\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Process (void)`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MX_TouchGFX_Init (void) `), `\u4E8C\u500B\u51FD\u5F0F\u7684\u5B9A\u7FA9\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76EE\u6A19/\u751F\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A72\u5B50\u8CC7\u6599\u593E\u5305\u542B\u552F\u8B80\u6A94\uFF0C\u7576\u914D\u7F6E\u66F4\u6539\u6642\uFF0C\u9019\u4E9B\u552F\u8B80\u6A94\u6703\u88ABSTM32CubeMX\u6240\u8986\u84CB\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL.cpp`), `\u662FTouchGFX\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `HAL`), `\u7269\u4EF6\u985E\u5225\u7684\u5B50\u985E\u5225\uFF0C\u5305\u542B\u4E86STM32CubeMX\u6839\u64DA\u76EE\u524D\u7684\u8A2D\u5B9A\u6240\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `OSWrappers.cpp`), `\uFF08OSAL\uFF09\u5305\u542B\u8207TouchGFX\u5F15\u64CE\u540C\u6B65\u6240\u9700\u7684\u51FD\u5F0F\u3002\u6700\u5F8C\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXConfiguration.cpp`), `\uFF0C\u5305\u542B\u4E86\u7528\u4F86\u5EFA\u69CB\u548C\u8A2D\u5B9ATouchGFX\uFF08\u5305\u62ECHAL\uFF09\u7684\u7A0B\u5F0F\u78BC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5305\u542B\u5927\u91CF\u7684\u6A94\u6848\uFF0C\u4F7F\u7528\u8005\u53EF\u4FEE\u6539\u9019\u4E9B\u6A94\u6848\u4EE5\u64F4\u5C55HAL\u884C\u70BA\uFF0C\u6216\u8005\u4FEE\u6539\u6A94\u6848\u4EE5\u8986\u84CB\u7531STM32CubeMX\u7522\u751F\u7684\u914D\u7F6E\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `STM32TouchController.cpp`), `\u5305\u542B\u4E86\u89F8\u63A7\u63A7\u5236\u5668\u64CD\u4F5C\u7684\u7A7A\u4ECB\u9762\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL.cpp`), `\u5B9A\u7FA9\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXGeneratedHAL`), `\u7684\u7269\u4EF6\u5B50\u985E\u5225`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `TouchGFXHAL`), `\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u6CE8\u610F\u7684\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXConfiguration.cpp`), `\u5305\u542B\u4E86\u4E00\u500B\u7528\u4F86\u5EFA\u69CBHAL\u7684\u51FD\u5F0F\uFF0C \u4EE5\u53CA\u4E00\u500B\u7528\u65BC\u555F\u52D5TouchGFX\u4E3B\u8FF4\u5708\u7684\u51FD\u5F0F\u3002 \u5728\u53EF\u7DE8\u8F2F\u7684\u4F7F\u7528\u8005\u985E\u5225`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL`), `\u7576\u4E2D\u53EF\u4EE5\u65B0\u589E\u9644\u52A0\u7684\u914D\u7F6E\u3002 HAL\u7684\u4E00\u822C\u67B6\u69CB\u5982\u4E0B\u6240\u793A \uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, "\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u4E4B\u968E\u5C64\u7D50\u69CB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "feature-overview"
  }), `\u7279\u6027\u6982\u8FF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Having enabled TouchGFX Generator, three main groups exist in the user interface. A fourth, "Dependencies", will appear if a problem with the current configuration is detected.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u76F8\u4F9D\u95DC\u4FC2\uFF08Dependencies\uFF09`)), ` - \u6B64\u8A2D\u5B9A\u5C08\u6848\u7FA4\u7D44\u7528\u4F86\u901A\u77E5\u958B\u767C\u4EBA\u54E1\u5305\u542B\u914D\u7F6E\u4E2D\u7684\u76F8\u4F9D\u95DC\u4FC2\u3001\u8B66\u544A\u6216\u5177\u9AD4\u932F\u8AA4\u7684\u8A0A\u606F\u3002 \u82E5\u6C92\u6709\u689D\u76EE\u5247\u8A72\u5C08\u6848\u7FA4\u7D44\u5C07\u96B1\u85CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u986F\u793A\uFF08Display\uFF09`)), ` - \u6B64\u8A2D\u5B9A\u5C08\u6848\u7FA4\u7D44\u5305\u542B\u8207\u986F\u793A\u6709\u95DC\u7684\u914D\u7F6E\u5982\u4ECB\u9762\u3001\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u4F4D\u5143\u6DF1\u5EA6\u3001\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002 \u9019\u4E9B\u914D\u7F6E\u6703\u76F4\u63A5\u5F71\u97FFTouchGFX\u5C08\u6848\u88E1\u756B\u5E03\uFF08canvas\uFF09\u7684\u5927\u5C0F\u4EE5\u53CA\u6839\u64DA\u5716\u6E90\u8CC7\u7522\uFF08asset\uFF09\u6240\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `Driver`)), ` - This group allows the user to opt-in for a number of ready-made drivers related to the tick source of the application, graphics acceleration (DMA2D and GPU2D) and RTOS. \u7531\u65BCSTM32CubeMX\u652F\u63F4FreeRTOS\uFF08CMSIS RTOS v1\u8207v2\uFF09\u7684\u914D\u7F6E\u8A2D\u5B9A\uFF0CTouchGFX Generator\u53EF\u70BA\u6BCF\u500B\u9078\u9805\u63D0\u4F9B\u9A45\u52D5\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `\u5F71\u7247\u89E3\u78BC`)), ` - \u8A72\u7D44\u5141\u8A31\u4F7F\u7528\u8005\u555F\u7528\u786C\u9AD4\u6216\u8EDF\u9AD4\u5F71\u7247\u89E3\u78BC\u3002 \u8A72\u9078\u9805\u5C0D\u65BC\u5F71\u7247\u63A7\u5236\u662F\u5FC5\u8981\u7684\u3002 \u6CE8\u610F\uFF01\u4E0D\u662F\u6240\u6709\u7684MCU\u90FD\u652F\u63F4\u5F71\u7247\u89E3\u78BC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.png",
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX Generator has three groups: Display, Driver and Video Decoding"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u986F\u793A\uFF08Display\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u986F\u793A\uFF08Display\uFF09`), `\u8A2D\u5B9A\u5C08\u6848\u7FA4\u7D44\u7FA4\u7D44\u5305\u542B\u8207\u986F\u793A\u6709\u95DC\u7684\u914D\u7F6E\uFF0C\u5982\u4ECB\u9762\u3001\u5C3A\u5BF8\u548C\u7DE9\u885D\u5340\u4F7F\u7528\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface-and-dimensions"
  }), `\u4ECB\u9762\u8207\u5C3A\u5BF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524DSTM32\u5FAE\u63A7\u5236\u5668\u53EF\u4F7F\u7528\u591A\u7A2E\u986F\u793A\u4ECB\u9762\uFF0C\u5982\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E73\u884CRGB\uFF08LTDC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MIPI DSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CMCU\u5E36\u6709\u9023\u63A5\u5230LTDC\u6216FMC\u7684\u986F\u793A\u5668\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\u53EF\u751F\u6210\u7A0B\u5F0F\u78BC\uFF0C\u4EE5\u5C07\u5F71\u50CF\u7DE9\u885D\u5668\u50B3\u8F38\u5230\u9023\u63A5\u7684\u986F\u793A\u5668\u3002 \u800C\u5C0D\u65BCDSI\u548CSPI\u4ECB\u9762\u4F86\u8AAA\uFF0C\u9A45\u52D5\u7A0B\u5F0F\u5FC5\u9808\u7531\u958B\u767C\u4EBA\u54E1\u81EA\u884C\u5BE6\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u6709\u95DC\u4E0D\u540C\u986F\u793A\u4ECB\u9762\u7684\u7A0B\u5F0F\u78BC\u7A0B\u5F0F\u7684\u5177\u9AD4\u7BC4\u4F8B\u8ACB\u53C3\u95B1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-ltdc-parallel-rgb",
    mdxType: "Link"
  }, "\u4F7F\u7528\u60C5\u5883\uFF08Scenarios\uFF09"), "\u7AE0\u7BC0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-pixel-format"
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u50CF\u7D20\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u76EE\u524D\u652F\u63F4\u4EE5\u4E0B\u5F71\u50CF\u7DE9\u885D\u50CF\u7D20\u683C\u5F0F\u3002 \u7576\u4F7F\u7528\u201C\u81EA\u8A02\u201D\u986F\u793A\u4ECB\u9762\u6642\uFF0C\u6240\u6709\u9078\u9805\u5747\u53EF\u7528\uFF0C\u5426\u5247\u9078\u9805\u88AB\u9650\u5236\u70BA\u986F\u793A\u63A7\u5236\u5668\u8A2D\u7F6E\uFF08\u4F8B\u5982\uFF0C\u5728TouchGFX Generator\u4E2D\u914D\u7F6ELTDC Framebuffer\u683C\u5F0F\u70BA\u201CRGB565\u201D\u5C07\u9078\u9805\u9650\u5236\u70BA\u201CRGB565\u201D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, "\u4E00\u4E9B\u50CF\u7D20\u683C\u5F0F\u6C92\u6709\u6216\u50C5\u6709\u90E8\u5206ChromART\uFF08DMA2D\uFF09\u652F\u63F4\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "For STM32F7/H7"), ": If the framebuffer is placed in Write Through cached memory (e.g. SRAM) then the DCache is flushed by the generated code prior to DMA2D (if configured in the Generator) accessing it. \u8A18\u4F4F\u8981\u5728STM32CubeMX\u4E2D\u7684", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Cortex M7"), "\u7684", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u7CFB\u7D71\u6838\u5FC3"), "\u8A2D\u7F6E\u4E2D\u555F\u7528", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "CPU\u5FEB\u53D6"), "\uFF0C\u9019\u6A23\u5FEB\u9583\u6A5F\u5236\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u9700\u95DC\u65BCCPU\u5FEB\u53D6\u7684\u8A73\u7D30\u8CC7\u8A0A\uFF0C\u8ACB\u53C3\u95B1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",
    mdxType: "Link"
  }, "F7\u548CH7\u5C0F\u7BC0\u4E2D\u7684\u201CCache\uFF08\u5FEB\u53D6\uFF09\u201D"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buffering-strategies"
  }), `\u7DE9\u885D\u5340\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u900F\u904ETouchGFX Generator\u8A2D\u5B9A\u4EE5\u4E0B\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340`), ` - \u50C5\u4F7F\u7528\u4E00\u500B\u61C9\u7528\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u6027\u80FD\u53EF\u80FD\u6703\u53D7\u9650\uFF0C\u4F46\u8A18\u61B6\u9AD4\u7528\u91CF\u8F03\u5C11\u3002 \u53EF\u8207\u300C\u7DE9\u885D\u5340\u4F4D\u7F6E\uFF08Buffer Location\uFF09\u300D\u7684\u914D\u7F6E\u4E00\u8D77\u4F7F\u7528\u4EE5\u5C07\u5176\u653E\u7F6E\u5728\u5167\u90E8RAM\u7576\u4E2D\u3002 \u82E5\u9700\u66F4\u9032\u4E00\u6B65\u7684\u6700\u4F73\u5316\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u5B9A\u7FA9\u4E00\u500B\u51FD\u5F0F\u4F86\u56DE\u50B3\u986F\u793A\u63A7\u5236\u5668\u7576\u524D\u6B63\u5728\u8655\u7406\u7684\u300C\u884C\uFF08current line\uFF09\u300D\u3002 \u6846\u67B6\u53EF\u4F7F\u7528\u8A72\u65B9\u6CD5\u5728\u8A72\u5716\u6846\u7576\u4E2D\u5C0D\u5167\u5BB9\u5DF2\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\u7684\u8A18\u61B6\u9AD4\u4F5C\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u96D9\u5F71\u50CF\u7DE9\u885D\u5340`), ` - \u4F7F\u7528\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u901A\u5E38\u662F\u6307\u4EE5\u66F4\u5927\u7684\u8A18\u61B6\u9AD4\u7528\u91CF\u70BA\u4EE3\u50F9\u4F86\u63DB\u53D6\u66F4\u597D\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5C40\u90E8\u7DE9\u885D\u5340`), ` - \u5C07\u4E00\u500B\u6216\u591A\u500B\u7531\u4F7F\u7528\u8005\u5B9A\u7FA9\u7684\u8A18\u61B6\u9AD4\u5340\u584A\u4F5C\u70BA\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u6B64\u7B56\u7565\u9069\u7528\u65BC\u4E0D\u4F9D\u8CF4\u5916\u90E8RAM\u4F46\u6240\u4F7F\u7528\u9023\u63A5\u7684\u986F\u793A\u5668\u5176\u5168\u90E8\u5B8C\u6574\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u537B\u8D85\u904E\u5167\u90E8\u53EF\u7528\u8A18\u61B6\u9AD4\u9019\u985E\u578B\u4F4E\u6210\u672C\u7684\u65B9\u6848\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u55AE\u4E00\u7DE9\u885D\u5340\u8207\u96D9\u7DE9\u885D\u5340\u4F86\u8AAA\uFF0C\u4F7F\u7528\u8005\u53EF\u900F\u904E\u300C\u7DE9\u885D\u5668\u4F4D\u7F6E\uFF08Buffer Location\uFF09\u300D\u4F86\u8A2D\u5B9A\u5176\u8A18\u61B6\u9AD4\u4F4D\u7F6E\uFF0C\u6B64\u8A2D\u5B9A\u63D0\u4F9B\u4EE5\u4E0B\u9078\u9805\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4F9D\u914D\u7F6E\uFF08By Allocation\uFF09`), ` - \u5141\u8A31\u9023\u7D50\u5668\u6839\u64DA\u9023\u7D50\u5668\u8A2D\u5B9A\u6A94\u4F86\u653E\u7F6E\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4\u3002 \u9810\u8A2D\u9078\u9805\u70BA\u7F6E\u65BC\u5167\u90E8RAM\uFF08internal RAM\uFF09\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4F9D\u4F4D\u5740\uFF08By Address\uFF09`), ` - \u5141\u8A31\u4F7F\u7528\u8005\u5B9A\u7FA9\u4E00\u500B\uFF08\u55AE\uFF09\u6216\u5169\u500B\uFF08\u96D9\uFF09\u5F71\u50CF\u7DE9\u885D\u5340\u4F4D\u5740\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5C40\u90E8\u7DE9\u885D\u5340`), `\u7B56\u7565\u5141\u8A31\u4F7F\u7528\u8005\u5B9A\u7FA9\u4EE5\u4E0B\u53C3\u6578\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5340\u584A\u6578\u91CF\uFF08\u59CB\u7D42\u653E\u7F6E\u5728\u5167\u90E8RAM\u4E2D\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5340\u584A\u5927\u5C0F\uFF08\u4F4D\u5143\u7D44\u6578\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4E86\u89E3\u6709\u95DC\u5C40\u90E8\u7DE9\u885D\u7B56\u7565\u7684\u4E00\u4E9B\u6838\u5FC3\u6982\u5FF5\uFF0C\u8ACB\u95B1\u8B80\u95DC\u65BC\u300C\u4F7F\u7528\u5C40\u90E8\u5F71\u50CF\u7DE9\u885D\u5340\u4EE5\u964D\u4F4E\u8A18\u61B6\u9AD4\u7528\u91CF\u300D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\u5C08\u6587`), ` \u6B64\u5C08\u6587\u5F9E\u6982\u5FF5\u4E0A\u8AAA\u660E\u4E86\u5982\u4F55\u5BE6\u73FE\u5C40\u90E8\u7DE9\u885D\u5340\uFF0C\u800C\u8981\u7A0D\u5FAE\u7559\u610F\u7684\u662F\u5728\u5C08\u6587\u4E2D\u6240\u5C55\u793A\u7684\u7A0B\u5F0F\u78BC\u6703\u8207TouchGFX Generator\u6240\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u7565\u6709\u4E0D\u540C\u3002 \u6709\u95DC\u70BA\u9019\u4E9B\u7B56\u7565\u800C\u7522\u751F\u7684\u5177\u9AD4\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\uFF0C\u8ACB\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scenarios/scenarios-framebuffer-strategies"
  }), `\u5F71\u50CF\u7DE9\u885D\u7B56\u7565`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "driver"
  }), `\u9A45\u52D5\u7A0B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u500B\u9A45\u52D5\u7A0B\u5F0F\u7684\u8A2D\u5B9A\u5C08\u6848\u7FA4\u7D44\u8B93\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u70BATouchGFX AL\u7684\u5404\u7A2E\u529F\u80FD\u9078\u64C7\u9A45\u52D5\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-tick-source"
  }), `\u61C9\u7528\u6642\u6A19\u6E90\uFF08Application Tick Source\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u6642\u6A19\u6E90\u5B9A\u7FA9\u4E86\u61C9\u7528\u7A0B\u5F0F\u7684\u904B\u4F5C\u9032\u884C\u65B9\u5F0F\u3002 \u958B\u767C\u4EBA\u54E1\u6709\u4EE5\u4E0B\u7684\u9078\u9805\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `LTDC`), ` - \u5982\u679C\u5728\u300C\u986F\u793A\uFF08Display\uFF09\u300D\u7684\u8A2D\u5B9A\u5C08\u6848\u7FA4\u7D44\u7576\u4E2D\u5C07\u4ECB\u9762\uFF08Interface\uFF09\u8A2D\u70BA\u300CLTDC\u300D\uFF0C\u5247\u61C9\u7528\u6642\u6A19\u6E90\u5373\u53EF\u8A2D\u5B9A\u70BA\u300CLTDC\u300D\u3002 \u9019\u8868\u793ATouchGFX Generator\u5C07\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGeneratedHAL`), `\u7269\u4EF6\u985E\u5225\u7576\u4E2D\u7F6E\u5165\u9A45\u52D5\u51FD\u5F0F\uFF08LTDC\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\uFF09\u4E26\u5728\u6B64\u9A45\u52D5\u51FD\u5F0F\u7576\u4E2D\u900F\u904E\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\u4F86\u9A45\u4F7F\u61C9\u7528\u7A0B\u5F0F\u7684\u904B\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5BA2\u88FD\u5316\u548CFMC`), ` > - \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u958B\u767C\u4EBA\u54E1\u9700\u8981\u81EA\u884C\u5BE6\u4F5C\u4E00\u500B\u8655\u7406\u51FD\u5F0F\uFF08handler\uFF09\u4EE5\u4FBF\u900F\u904E\u91CD\u8907\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `OSWrappers::signalVSync()`), `\u4F86\u9A45\u4F7F\u61C9\u7528\u7A0B\u5F0F\u7684\u904B\u4F5C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphics-accelerator"
  }), `\u5716\u5F62\u52A0\u901F\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u5716\u5F62\u52A0\u901F\u958B\u767C\u4EBA\u54E1\u6709\u4E09\u500B\u9078\u9805\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, "DMA2D is enabled in the *Multimedia* category in CubeMX, for MCUS that support it."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u63D0\u4F9B\u7684Chrom-ART \uFF08DMA2D\uFF09 \u9A45\u52D5\u7A0B\u5F0F\u652F\u63F4\u5169\u7A2ETransferCompleteInterrupt\u7684\u8655\u7406\u65B9\u5F0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4F7F\u7528STM32Cube HAL\u9A45\u52D5\u7A0B\u5F0F\uFF0C\u5176\u4E2D\u56DE\u547C\u51FD\u5F0F\uFF08callback function\uFF09\u8A3B\u518A\u5230dma2d\u7684\u63A7\u5236\u7A0B\u5F0F\u78BC\uFF08handle\uFF09`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `hdma2d. XferCpltCallback`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u76F4\u63A5\u4F7F\u7528\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `DMA2D_IRQHandler ()`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u85C9\u7531\u958B\u555F\u6216\u95DC\u9589DMA2D IP\u914D\u7F6ENVIC Setting\u5206\u9801\u88E1\u7684DMA2D\u5168\u57DF\u4E2D\u65B7\uFF0C\u4FBF\u53EF\u4EE5\u5728\u9019\u5169\u7A2E\u65B9\u5F0F\u4E4B\u9593\u4F5C\u5207\u63DB\u3002 \u958B\u555F\u5168\u57DF\u4E2D\u65B7\u53EF\u4EE5\u7522\u751F\u9078\u98051\u7684\u7A0B\u5F0F\u78BC\uFF0C\u95DC\u9589\u5168\u57DF\u4E2D\u65B7\u53EF\u4EE5\u7522\u751F\u9078\u98052\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, 'When using global interrupt for DMA2D, ensure that the "IRQ handler" calls the "DMA2D HAL handler". This is default behaviour.'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5982\u679C\u5728\u555F\u7528\u5168\u57DF\u4E2D\u65B7\u7684\u540C\u6642\u9589\u9589DMA2D\u7684\u300CIRQ\u8655\u7406\u51FD\u5F0F\u300D\u548C\u300CHAL\u8655\u7406\u51FD\u5F0F\u7684\u547C\u53EB\u300D\u5C07\u5C0E\u81F4\u8A3B\u518A\u7684\u56DE\u547C\u51FD\u5F0F\u6C38\u9060\u4E0D\u6703\u88AB\u547C\u53EB\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }), `\u5373\u6642\u4F5C\u696D\u7CFB\u7D71`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767C\u4EBA\u54E1\u53EF\u5728TouchGFX\u4F7F\u7528\u4EFB\u4F55\u7684RTOS\uFF08\u751A\u81F3\u4E0D\u4F7F\u7528\u4F5C\u696D\u7CFB\u7D71\uFF09\u3002 \u5982\u300C\u62BD\u8C61\u5C64\u67B6\u69CB\uFF08Abstration Layer Architecture\uFF09\u300D\u4E2D\u6240\u8FF0\uFF0C\u4F9D\u64DA\u4F7F\u7528\u8005\u6240\u9078\u7684RTOS\uFF0CTouchGFX\u5F15\u64CE\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u4ECB\u9762\u4F86\u540C\u6B65TouchGFX\u5F15\u64CE\u7684\u4E3B\u8981\u4E8B\u4EF6\u8FF4\u5708\u548C\u5F71\u50CF\u7DE9\u885D\u5340\u4E4B\u9593\u7684\u5B58\u53D6\u3002 When developers choose an operating system in TouchGFX Generator, code will be generated to syncronize internally via primitives for the OS of choice. \u4F5C\u696D\u7CFB\u7D71\u4ECD\u7136\u5FC5\u9808\u901A\u904ESTM32CubeMX\u9032\u884C\u914D\u7F6E\uFF0C\u4EE5\u78BA\u5B9A\u5806\u758A\u5927\u5C0F\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS (CMSIS OS V1 and V2) and ThreadX (Native Middleware or Azure RTOS Software Packs) can be configured directly from within STM32CubeMX and TouchGFX Generator providing the user with generated code for both task definitions and TouchGFX RTOS driver. TouchGFX Generator can generate CMSIS V1 and CMSIS V2 compliant RTOS drivers which work with any CMSIS compliant RTOS, a driver for ThreadX, and a driver for running bare metal without an operating system.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "threadx-middleware-os"
  }), `ThreadX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ThreadX can be enabled either by selecting an AZRTOS Software Pack or by enabling the Native ThreadX Middleware from STM32CubeMX, if available for the selected MCU device.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "All new STM32 MCU devices will support, by default, ThreadX Middleware directly available from STM32CubeMX without requiring additional pack downloads. TouchGFX Board Support packs will slowly transition to using either ThreadX middleware, where available, or X-CUBE-AZRTOS software packs."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "X-CUBE-AZRTOS-XX Expansion Packs providing ThreadX support are already available for the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32G0xx, STM32G4xx, STM32L4xx, STM32F4xx, STM32F7xx"), " and the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "STM32H7xx"), " MCU Series.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u986F\u793A\u4E86\u900F\u904ETouchGFX Generator\u53EF\u7528\u7684\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/driver-rtos-options-threadx.png",
    mdxType: "Figure"
  }, "RTOS\u9A45\u52D5\u7A0B\u5F0F\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u547C\u53EB\u4EE5\u4E0B\u51FD\u5F0F\u5373\u9032\u5165TouchGFX\u4E3B\u8FF4\u5708\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void\xA0MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767C\u8005\u9700\u8981\u5728\u57F7\u884CTouchGFX\u4EFB\u52D9\u7684\u8655\u7406\u51FD\u5F0F\uFF08task handler\uFF09\u7576\u4E2D\u547C\u53EB\u6B64\u51FD\u5F0F\u3002 \u5982\u679C\u4F7F\u7528\u8005\u5F9ESTM32CubeMX\u914D\u7F6E\u4E86\u540D\u70BA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DefaultTask `), `\u7684FeeRTOS\u4EFB\u52D9\uFF0C\u5247\u4EE5\u4E0B\u7BC4\u4F8B\u986F\u793A\u4E86\u5982\u4F55\u547C\u53EB `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process() `), `\uFF0C\u4EE5\u555F\u52D5\u5176\u4EFB\u52D9\u8655\u7406\u51FD\u5F0F\u7684\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u90E8\u5206\u4E2D\u7684TouchGFX\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u5176\u4ED6CMSIS\u76F8\u5BB9\u7684OS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u958B\u767C\u4EBA\u54E1\u4E0D\u4F7F\u7528STM32CubeMX \u6240\u63D0\u4F9B\u7684FreeRTOS\u548CThreadX\u800C\u8981\u63A1\u7528\u5176\u4ED6CMSIS\u76F8\u5BB9\u7684\u5373\u6642\u4F5C\u696D\u7CFB\u7D71\u6642\u5C31\u5FC5\u9808\u81EA\u884C\u624B\u52D5\u5B8C\u6210RTOS\u914D\u7F6E\u548C\u4EFB\u52D9\u5B9A\u7FA9\u3002 \u901A\u5E38\u9700\u8981\u4EE5\u4E0B\u6B65\u9A5F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8A2D\u5B9ARTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5B9A\u7FA9\u7528\u4F86\u57F7\u884CTouchGFX\u7684\u4EFB\u52D9\uFF08\u4EE5\u4FBF\u5728\u5176\u4E2D\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MX_TouchGFX_Process`), `\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u555F\u52D5\u6392\u7A0B\u5668\uFF08scheduler\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65BC\u4EFB\u52D9\u8655\u7406\u51FD\u5F0F\u7576\u4E2D\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MX_TouchGFX_Process`), `\u4EE5\u555F\u52D5TouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void\xA0MX_TouchGFX_Process(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-features"
  }), `\u984D\u5916\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "external-data-reader"
  }), `\u5916\u90E8\u8CC7\u6599\u8B80\u53D6\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BCRGB565\u5F71\u50CF\u7DE9\u885D\u50CF\u7D20\u683C\u5F0F\uFF0CTouchGFX\u652F\u63F4\u6240\u8B02\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8CC7\u6599\u8B80\u53D6\u5668\uFF08Data Reader\uFF09`), `\u4ECB\u9762\uFF0C\u8B93\u958B\u767C\u8005\u80FD\u5920\u76F4\u63A5\u5F9E\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\uFF08non-memory-mapped\uFF09\u7684\u5E8F\u5217\u5F0F\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF08serial flash\uFF09\u8B80\u53D6\u8CC7\u6599\uFF0C\u800C\u7121\u9700\u9032\u884C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\u66AB\u5B58\uFF08caching\uFF09`), `\uFF0C\u7576\u7136\u9019\u9700\u8981\u589E\u52A0\u984D\u5916\u7684\u7DE9\u885D\u5132\u5B58\u5340\u3002 \u6709\u95DC\u5982\u4F55\u5BE6\u4F5CDataReader\u4EE5\u4FBF\u7531\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\uFF08non-memory-mapped\uFF09\u7684\u5FEB\u9583\u8A18\u61B6\u9AD4\u7576\u4E2D\u7372\u53D6\u61C9\u7528\u7A0B\u5F0F\u5716\u8CC7\uFF08asset\uFF09\u7684\u7BC4\u4F8B\u8ACB\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/using-serial-flash"
  }), `Serial Flash`), `\u6587\u7AE0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8CC7\u6599\u8B80\u53D6\u5668\uFF08Data Reader\uFF09`), `\u9078\u9805\u901A\u5E38\u9069\u7528\u5728\u5982STM32G0\u9019\u4E00\u985E\u6C92\u6709\u8DB3\u5920\u7684\u8A18\u61B6\u9AD4\u7528\u65BC\u984D\u5916\u7DE9\u885D\u5340\u7684\u4F4E\u6210\u672C\u89E3\u6C7A\u65B9\u6848\u3002 \u5728\u555F\u7528DMA2D\u4E4B\u5F8C\u4FBF\u7121\u6CD5\u555F\u7528\u9019\u500B\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u5F71\u50CF\u7DE9\u885D\u50CF\u7D20\u683C\u5F0F\uFF08Framebuffer Pixel Format\uFF09\u8A2D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `RGB565`), `\u4E4B\u5F8C\u4FBF\u53EF\u770B\u5230\u65B0\u589E\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9644\u52A0\u529F\u80FD\uFF08Additional Features\uFF09`), `\u8A2D\u5B9A\u9805\u7FA4\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "\u984D\u5916\u529F\u80FD: \u8CC7\u6599\u8B80\u53D6\u5668\uFF08Data Reader\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767C\u4EBA\u54E1\u53EF\u9032\u884C\u4EE5\u4E0B\u8A2D\u5B9A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5916\u90E8\u8CC7\u6599\u8B80\u53D6\u5668`), `\uFF1A\u4EE5\u4F86\u555F\u7528\u6216\u95DC\u9589\u529F\u80FD\u3002 \u5982\u679C\u555F\u7528\uFF0CTouchGFX\u6703\u76F4\u63A5\u900F\u904E\u6240\u7522\u751F\u7684\u4ECB\u9762\u7372\u53D6\u5716\u8CC7\uFF08assets\uFF09\u3002 \u5982\u679C\u529F\u80FD\u95DC\u9589\uFF0C\u5247\u958B\u767C\u8005\u9700\u8981\u5C07\u5F71\u50CF`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u66AB\u5B58\uFF08cache\uFF09`), `\u5230\u8A18\u61B6\u9AD4\u7DE9\u885D\u5340\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5916\u90E8\u8CC7\u6599\u8B80\u53D6\u5668`), `\uFF1A\u5EFA\u7ACB\u5169\u500B\u7DE9\u885D\u5340\u4EE5\u4FBF\u5C07\u5F71\u50CF\u6216\u6587\u5B57\u6DF7\u5408\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u7576\u4E2D\u3002 \u9810\u8A2D\u503C\u70BA\u4E00\u500B\u87A2\u5E55\u5BEC\u5EA6\u4E58\u4E0A4\u4F4D\u5143\u7D44\u4EE5\u652F\u63F4ARGB8888\u50CF\u7D20\u683C\u5F0F\u7684\u5168\u5C3A\u5BF8\u5F71\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6700\u5C0FDMA\u50B3\u8F38\u91CF`), `\uFF1A\u8A2D\u5B9A\u555F\u52D5DMA\u50B3\u8F38\u6240\u9700\u7684\u6700\u5C0F\u4F4D\u5143\u7D44\u3002 \u5982\u679C\u8ACB\u6C42\u7684\u50B3\u8F38\u91CF\u5C11\u65BC\u6700\u5C0F\u4F4D\u5143\u7D44\u4FBF\u4E0D\u6703\u7528\u5230DMA\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u555F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5916\u90E8\u8CC7\u6599\u8B80\u53D6\u5668\uFF08External Data Reader\uFF09`), `\u7684\u60C5\u6CC1\u4E0B\u7522\u751F\u7A0B\u5F0F\u78BC\u6703\u5EFA\u7ACB\u5982\u4E0B\u7684\u9644\u52A0\u6A94\u6848\u4EE5\u5229\u76F4\u63A5\u5F9E\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\uFF08non-memory-mapped\uFF09\u7684\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7372\u53D6\u5716\u8CC7\uFF08asset\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `TouchGFX/target/TouchGFXDataReader.hpp`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u5F80\u5E38\u4E00\u6A23\uFF0CTouchGFX Generator\u7522\u751F\u7684\u7A0B\u5F0F\u78BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u70BA\u552F\u8B80\uFF0C\u4F7F\u7528\u8005\u7684\u4FEE\u6539\u61C9\u8A72\u8981\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u7269\u4EF6\u985E\u5225\u4E2D\u9032\u884C\u3002 \u800C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u7E7C\u627F\u81EA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader `), `\u7269\u4EF6\u985E\u5225 \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u6703\u4FEE\u6539\u4EE5\u4E0B\u6A94\u6848\u4F86\u914D\u7F6ETouchGFX HAL\u4EE5\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `DataReader`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, "\u53EA\u6709\u5728\u540C\u6642\u95DC\u9589DMA2D\u8207LTDC\u7684\u60C5\u6CC1\u4E4B\u4E0B\u624D\u53EF\u4F7F\u7528DataReader\u9644\u52A0\u529F\u80FD\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "8bit-ltdc-color-look-up-table"
  }), `8\u4F4D\u5143 LTDC\u984F\u8272\u67E5\u627E\u8868\uFF08Look-up Table\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576LTDC\u8A2D\u5B9A\u70BA\u4EE5L8\u7684\u683C\u5F0F\u8B80\u53D6\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4E26\u4E14TouchGFX\u4EE5`, `[ABRG2222]`, `(.. /.. /api/classes/classtouchgfx_1_1_l_c_d8bpp`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `a_b_g_r2222), `, `[ARGB222]`, `(.. /.. /api/classes/classtouchgfx_1_1_l_c_d8bpp`)), `a_r_g_b2222), `, `[BGRA2222]`, `(.. /.. /api/classes/classtouchgfx_1_1_l_c_d8bpp`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `b_g_r_a2222)\uFF0C \u6216`, `[RGBA2222]`, `(.. /.. /api/classes/classtouchgfx_1_1_l_c_d8bpp`)), `r_g_b_a2222)\u7684\u65B9\u5F0F\u4F5C\u6E32\u67D3\u7B97\u5716\u6642\uFF0CTouchGFX Generator\u5C07\u63D0\u4F9BCLUT\uFF0C\u4E26\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::initialize()`), `\u671F\u9593\u5C07\u8A72CLUT\u8F09\u5165\u5230LTDC\u4E2D\u3002 \u6709\u95DCLTDC\u548CCLUT\u7684\u7528\u6CD5\uFF0C\u8A73\u898BSTM32 MCU\u53C3\u8003\u624B\u518A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "video-decoding"
  }), `\u5F71\u7247\u89E3\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u2018\u5F71\u7247\u89E3\u78BC\u2019\u90E8\u5206\u5141\u8A31\u958B\u767C\u4EBA\u54E1\u901A\u904E\u786C\u9AD4\u6216\u8EDF\u9AD4\u5F71\u7247\u89E3\u78BC\u80FD\u529B\u589E\u5F37TouchGFX HAL\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u89E3\u78BC\u50C5\u652F\u63F4RGB565\uFF0816bpp\uFF09\u548CRGB888\uFF0824bpp\uFF09\u5F71\u50CF\u7DE9\u885D\u50CF\u7D20\u683C\u5F0F\u3002 \u5982\u679C\u6C92\u6709\u9078\u64C7\u9019\u5169\u7A2E\u683C\u5F0F\uFF0C\u5247\u5F71\u7247\u89E3\u78BC\u90E8\u5206\u5C07\u4E0D\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E0D\u662F\u6240\u6709MCU\u90FD\u652F\u63F4\u786C\u9AD4\u5F71\u7247\u89E3\u78BC\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-type"
  }), `\u985E\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9810\u8A2D\u60C5\u6CC1\u4E0B\uFF0C\u5F71\u7247\u89E3\u78BC\u7684\u201D\u985E\u578B\u201D\u662F\u7981\u7528\u7684\u3002 \u5982\u679CSTM32CubeMX\u4E2D\u6C92\u6709\u555F\u7528\u6240\u9700\u7684\u5916\u8A2D\uFF0C\u201C\u8EDF\u9AD4\u201D\u548C\u201C\u786C\u9AD4\u201D\u90FD\u5C07\u986F\u793A\u70BA\u7070\u8272\u3002 \u5C07\u6ED1\u9F20\u61F8\u505C\u5728\u7070\u8272\u7684\u9078\u9805\u4E0A\uFF0C\u770B\u770B\u9700\u8981\u54EA\u4E9B\u5916\u8A2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.png",
    width: "800",
    mdxType: "Figure"
  }, "\u8CC7\u8A0A\u6846\u986F\u793A\u201C\u786C\u9AD4\u201D\u7684\u5F71\u7247\u985E\u578B\u4F9D\u8CF4\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8EDF\u9AD4`), ` - \u5982\u679C\u5728STM32CubeMX\u7684\u4E2D\u4ECB\u8EDF\u9AD4\u90E8\u5206\u555F\u7528\u4E86LIBJPEG\uFF0C\u5247\u53EF\u4EE5\u9078\u64C7\u201C\u8EDF\u9AD4\u201D\u9078\u9805\uFF0C\u4E26\u751F\u6210\u8EDF\u9AD4\u89E3\u78BC\u5668\u3002 \u9019\u610F\u5473\u8457TouchGFX Generator\u5C07\u751F\u6210\u4E00\u500B\u8EDF\u9AD4MJPEG\u89E3\u78BC\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u786C\u9AD4`), ` - \u5982\u679C\u5728\u591A\u5A92\u9AD4\u90E8\u5206\u555F\u7528\u4E86JPEG\uFF0C\u4E26\u4E14\u5728TouchGFX Generator\u4E2D\u9078\u64C7\u4E86\u7B26\u5408CMSIS\u8981\u6C42\u7684RTOS\uFF0C\u5247\u53EF\u4EE5\u9078\u64C7\u201C\u786C\u9AD4\u201D\u9078\u9805\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-options-4-18.png",
    width: "800",
    mdxType: "Figure"
  }, "\u5F71\u7247\u89E3\u78BC\u985E\u578B\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728LIBJPEG\u8A2D\u7F6E\u4E2D\uFF0C\u70BA\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u201CRGB\u6383\u63CF\u7DDA\u683C\u5F0F\u201D\u4E2D\u7684RGB\u6392\u5E8F\u5FC5\u9808\u8A2D\u7F6E\u70BA\u201CBGR\u201D\u800C\u4E0D\u662F\u201CRGB\u201D\u3002 \u6BCF\u500B\u50CF\u7D20\u7684\u4F4D\u5143\u7D44\u6578\u5FC5\u9808\u8A2D\u7F6E\u70BA3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/libjpeg-rgb-ordering.png",
    width: "700",
    mdxType: "Figure"
  }, "\u9700\u8981\u7684LIBJPEG RGB\u6383\u63CF\u7DDA\u683C\u5F0F\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u786C\u9AD4\u89E3\u78BC\u6642\uFF0CJPEG\u8A2D\u7F6E\u4E2D\u7684RGB\u683C\u5F0F\u5FC5\u9808\u8207\u986F\u793A\u5668\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u6709\u95DC\u4E0D\u540C\u5F71\u7247\u89E3\u78BC\u7684\u5177\u9AD4\u7BC4\u4F8B\u8ACB\u53C3\u95B1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\u4F7F\u7528\u60C5\u5883\uFF08Scenarios\uFF09"), "\u7AE0\u7BC0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-number"
  }), `\u4F75\u767C\u5F71\u7247`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u4F75\u767C\u5F71\u7247\u201D\u9078\u9805\u53EF\u8A2D\u7F6EGUI\u4E2D\u4EFB\u610F\u7D66\u5B9A\u6642\u9593\u5728\u540C\u4E00\u87A2\u5E55\u4E0A\u540C\u6642\u88AB\u89E3\u78BC\u7684\u6700\u5927\u6578\u91CF\u5F71\u7247\u3002 \u5982\u679C\u5E0C\u671B\u4E00\u584A\u87A2\u5E55\u4E0A\u53EA\u89E3\u78BC\u4E00\u500B\u5F71\u7247\uFF0C\u5247\u53EF\u4EE5\u5C07\u201C\u5F71\u7247\u6578\u91CF\u201D\u8A2D\u7F6E\u70BA1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u591A\u53EF\u4EE5\u540C\u6642\u89E3\u78BC4\u500B\u5F71\u7247\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-strategy"
  }), `\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u5F71\u7247\u89E3\u78BC\u7B56\u7565\uFF0C\u958B\u767C\u4EBA\u54E1\u6709\u4E09\u7A2E\u9078\u64C7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u76F4\u63A5\u5230\u5F71\u50CF\u7DE9\u885D\u5340\uFF08Direct to Framebuffer\uFF09`), `\u201D - \u5F71\u7247\u5728UI\u57F7\u884C\u7DD2\u4E2D\u88AB\u89E3\u78BC\u3002 \u89E3\u78BC\u901F\u5EA6\u6162\u65BC\u5176\u4ED6\u7B56\u7565\u3002 \u4F7F\u7528\u786C\u9AD4\u5F71\u7247\u89E3\u78BC\u6642\uFF0C\u201C\u76F4\u63A5\u5230\u5F71\u50CF\u7DE9\u885D\u5340\uFF08Direct to Framebuffer\uFF09\u9078\u9805\u4E0D\u53EF\u88AB\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u55AE\u7DE9\u885D\u5340`), ` - \u5728\u5C08\u7528\u7684\u7DE9\u885D\u5340\u4E2D\uFF0C\u4EE5\u55AE\u7368\u7684\u4EFB\u52D9\u9032\u884C\u5F71\u7247\u89E3\u78BC\u3002 \u8A72\u7DE9\u885D\u5340\u4F4D\u65BC\u5167\u90E8\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u96D9\u7DE9\u885D\u5340`), ` - \u5728\u5169\u500B\u5C08\u7528\u7DE9\u885D\u5340\u4E2D\uFF0C\u4EE5\u55AE\u7368\u7684\u4EFB\u52D9\u9032\u884C\u5F71\u7247\u89E3\u78BC\uFF0C\u4EE5\u72A7\u7272\u8A18\u61B6\u9AD4\u70BA\u4EE3\u50F9\u7372\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A1\u7528\u55AE\u6216\u96D9\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565\u6642\uFF0C\u5FC5\u9808\u555F\u7528\u7B26\u5408CMSIS\u8981\u6C42\u7684\u4F5C\u696D\u7CFB\u7D71\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.png",
    width: "750",
    mdxType: "Figure"
  }, "\u95DC\u65BCCMSIS RTOS\u8981\u6C42\u7684\u8CC7\u8A0A\u6846"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4F7F\u7528\u96D9\u7DE9\u885D\u5340\u7B56\u7565\u6642\uFF0C\u8981\u6CE8\u610F\u8A18\u61B6\u9AD4\u6D88\u8017\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u95DC\u65BC\u914D\u7F6E\u7528\u65BC\u5F71\u7247\u89E3\u78BC\u7684FreeRTOS\u7684\u5177\u9AD4\u7BC4\u4F8B\uFF0C\u8ACB\u53C3\u898B\u201C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "scenarios/scenarios-video-decoding",
    mdxType: "Link"
  }, "\u5834\u666F"), "\u201D\u90E8\u5206\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "decode-format"
  }), `\u89E3\u78BC\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u8EDF\u9AD4\u89E3\u78BC\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u9078\u64C7RGB\u7DE9\u885D\u5340\u7684\u50CF\u7D20\u683C\u5F0F\uFF0C\u4E0D\u7BA1\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u50CF\u7D20\u683C\u5F0F\u662F\u4EC0\u9EBC\u3002 TouchGFX Generator\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u5141\u8A31ChromART\u5728\u4E0D\u540C\u7684\u683C\u5F0F\u4E4B\u9593\u9032\u884C\u50CF\u7D20\u683C\u5F0F\u8F49\u63DB\u3002 \u5728RGB565\u4E2D\u64C1\u6709\u5F71\u7247\u89E3\u78BC\u7DE9\u885D\u5340\u5141\u8A31\u958B\u767C\u4EBA\u54E1\u4F54\u7528\u66F4\u5C0F\u7684\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding-decode-format.png",
    width: "700",
    mdxType: "Figure"
  }, "\u89E3\u78BC\u683C\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-decoding-buffer-size"
  }), `\u7DE9\u885D\u5340\u5927\u5C0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7DE9\u885D\u5340\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u8A2D\u7F6E\u5FC5\u9808\u5C0D\u61C9\u61C9\u7528\u7A0B\u5F0F\u4E2D\u7684\u6700\u5927\u5F71\u7247\u5C3A\u5BF8\u3002 \u5BEC\u5EA6\u503C\u5FC5\u9808\u80FD\u88AB32\u6574\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL.cpp`), `\u4E2D\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\uFF0C\u5176\u9762\u5411\u7684\u61C9\u7528\u7A0B\u5F0F\u4F7F\u7528RGB888\u986F\u793A\u5668 - \u63A1\u7528480*272\u5F71\u7247\u548C\u201C\u55AE\u7DE9\u885D\u5340\u201D\u5F71\u7247\u89E3\u78BC\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `\u7522\u751F\u7684\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528STM32CubeMX\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7522\u751F\u7A0B\u5F0F\u78BC\uFF08Generate Code\uFF09`), `\u6309\u9215\u7522\u751F\u7A0B\u5F0F\u78BC\u6642\u53EF\u7522\u751F\u4EE5\u4E0BIDE\u7684TouchGFX\u5C08\u6848\u6A94\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `EWARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `MDK-ARM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeIDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u85C9\u7531\u9078\u53D6\u4EE5\u4E0B\u8207\u5C08\u6848\u7522\u751F\u76F8\u95DC\u7684\u9078\u9805\u53EF\u4EE5\u5F97\u5230\u8F03\u4F73\u7684\u5C08\u6848\u76EE\u9304\u7D50\u69CB\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u61C9\u7528\u7D50\u69CB\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9032\u968E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u95DC\u9589 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Generate under root`), `\uFF08\u50C5\u9069\u7528\u65BCSTM32CubeIDE\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u9078\u53D6\u300C\u9032\u968E\u7684\u61C9\u7528\u7A0B\u5F0F\u7D50\u69CB\uFF08Advanced application structure\uFF09\u300D\u4E26\u53D6\u6D88\u9078\u53D6\u300CGenerate under root\u300D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u9084\u6703\u7522\u751F\u5177\u6709\u4EE5\u4E0B\u76EE\u9304\u7D50\u69CB\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX`), `\u8CC7\u6599\u593E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u8CC7\u6599\u593E\u7D50\u69CB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u61C9\u7528`), `\u8CC7\u6599\u593E\u5305\u542B\u7528\u65BC\u521D\u59CB\u5316\u548C\u555F\u52D5TouchGFX\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `target`), `\u8CC7\u6599\u593E\u5305\u542B\u7522\u751F\u7684\u552F\u8B80\u7A0B\u5F0F\u6A94\uFF08\u7F6E\u65BCgenerated/\u76EE\u9304\u4E2D\uFF09\u548C\u53EF\u4FEE\u6539\u7684\u4F7F\u7528\u8005\u7269\u4EF6\u985E\u5225\u6A94\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), ` \uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXGPIO.cpp`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `TouchGFXHAL.cpp`), `\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.part`), `\u6A94\u6848\uFF0C\u4F7F\u7528TouchGFX Designer\u4F86\u958B\u555F\u4EE5\u5EFA\u7ACB\u5B8C\u6574\u7684TouchGFX\u5C08\u6848\uFF08\u5305\u62ECTouchFX\u7684\u6A19\u982D\u6A94\u548C\u51FD\u5F0F\u5EAB\uFF09\u3002part\u6A94\u6848\u5305\u542B\u70BA\u4E86\u7522\u751FTouchGFX\u61C9\u7528\u7A0B\u5F0F\u78BC\u8A2D\u8A08\u4EBA\u54E1\u9700\u4F7F\u7528\u7684\u76F8\u95DC\u7A0B\u5F0F\u8CC7\u8A0A\uFF08\u5982\u50CF\u7D20\u683C\u5F0F\u8207\u756B\u5E03\u5C3A\u5BF8\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-project"
  }), `TouchGFX Designer\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following json structure is an example of the contents of the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528TouchGFX Designer\u958B\u555F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `.part`), `\u6A94\u6848\u6642\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u9078\u64C7\u8F09\u5165\u5177\u9AD4\u5BE6\u969B\u7684UI\u6216\u5F9E\u7A7A\u767D\u7BC4\u672C\u958B\u59CB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u9078\u64C7UI"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0BTouchGFX Designer\u7576\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7522\u751F\u7A0B\u5F0F\u78BC\uFF08Generate Code\uFF09`), `\u4E4B\u5F8C\u53EF\u5F97\u5230\u5982\u4E0B\u7684TouchGFX\u8CC7\u6599\u593E\u7D50\u69CB\u3002 \u7531\u4E0B\u5716\u53EF\u770B\u5230TouchGFX\u8CC7\u6599\u593E\u7D50\u69CB\u7684\u5177\u9AD4\u7BC4\u4F8B\uFF0C\u7576\u4E2D\u4EE5\u9AD8\u4EAE\u5EA6\u5F37\u8ABF\u4E86\u7522\u751F\u5F8C\u7684\u65B0\u6A94\u6848\u53CA\u8CC7\u6599\u593E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u7522\u751F\u7A0B\u5F0F\u78BC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u8CC7\u6599\u593E\u7D50\u69CB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5C07\u5F9ESTM32CubeMX\u7684.ioc\u6A94\u7576\u4E2D\u5075\u6E2C\u6240\u9078\u53D6\u7684IDE\uFF08STM32CubeIDE\uFF0CEWARM\uFF0CMDK-ARM\uFF09\uFF0C\u4E26\u4F7F\u7528\u65B0\u751F\u6210\u7684\u6A94\u6848\uFF08\u5982\u7528\u65BC\u87A2\u5E55\u5B9A\u7FA9\u3001\u5716\u50CF\u548C\u5B57\u578B\u7684\u5716\u8CC7\uFF09\u4F86\u66F4\u65B0\u5C08\u6848\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u6642\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u4EA4\u4E92\u4F7F\u7528STM32CubeMX\uFF0CTouchGFX Designer\u548C\u5DE5\u5177\u93C8/IDE\uFF0C\u5176\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u53EF\u4EE5\u66F4\u65B0IDE\u5C08\u6848\u4E2D\u7684\u9A45\u52D5\u7A0B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u6839\u64DAUI\u76F8\u95DC\u8B8A\u66F4\u4F86\u66F4\u65B0TouchGFX `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.part`), `\u6A94\u6848\uFF0C\u800C\u8A2D\u8A08\u5DE5\u5177\uFF08designer\uFF09\u53EF\u540C\u6642\u7ACB\u5373\u53D6\u5F97\u9019\u4E9B\u8B8A\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u6839\u64DATouchGFX\u8207\u5E73\u53F0\u76F8\u95DC\u7684TouchGFX Generator\u914D\u7F6E\u4F86\u7522\u751FHAL\u7A0B\u5F0F\u78BC\uFF08TouchGFX/target/generated/\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u4F7F\u7528\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u4F86\u66F4\u65B0\u5C08\u6848\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5C0D\u65BC\u96D9\u6838\u5C08\u6848\uFF08\u70BA\u7279\u5B9A\u5167\u6587\u555F\u7528TouchGFX\uFF09\uFF0CTouchGFX\u5C08\u6848\u901A\u5E38\u6703\u4F4D\u65BC\u8A72\u5167\u6587\u7684\u5C08\u7528\u8CC7\u6599\u593E\u4E2D\uFF0C\u4F8B\u5982:\u201CCM4 / TouchGFX\u201D\u6216\u201CCM7 / TouchGFX\u201D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-generated-behavior"
  }), `\u4FEE\u6539\u6240\u7522\u751F\u7684\u884C\u70BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CHAL\u7684\u7269\u4EF6\u985E\u5225\u968E\u5C64\u7D50\u69CB\u8B93\u4F7F\u7528\u8005\u53EF\u4EE5\u8986\u5BEB\uFF08override\uFF09STM32CubeMX\u6240\u7522\u751F\u7684HAL\u914D\u7F6E\u6216\u884C\u70BA\uFF08behavior\uFF09\u3002 \u5728\u4EE5\u4E0B\u7BC4\u4F8B\u4E2D\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u4FEE\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `initialize`), `\u51FD\u5F0F\u5C0DTouchGFX\u4F5C\u984D\u5916\u7684\u914D\u7F6E\uFF0C\u6216\u4FEE\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL`), `\u7576\u4E2D\u73FE\u6709\u7684\u914D\u7F6E\u96C6\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    // Calling parent implementation of initialize().
    //
    // \u82E5\u8981\u8986\u5BEB\u751F\u6210\u7684\u5BE6\u73FE\uFF0C\u8ACB\u5FFD\u7565\u5C0D\u7236\u51FD\u6578\u7684\u547C\u53EB
    // \u4E26\u5728\u6B64\u8655\u5BE6\u73FE\u6240\u9700\u7684\u529F\u80FD\u3002
    // \u8ACB\u6CE8\u610F\uFF1A\u5FC5\u9808\u547C\u53EBHAL::initialize()\u4EE5\u521D\u59CB\u5316\u6846\u67B6\u3002

    TouchGFXGeneratedHAL::initialize();

    //\u8986\u84CB\u914D\u7F6E
    hal.lockDMAToFrontPorch(true);
    hal.setFingerSize(4);
    hal....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "upgrading-projects"
  }), `\u5347\u7D1A\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u7684\u76F8\u95DC\u53C3\u6578\u5132\u5B58\u5728STM32CubeMX\u5C08\u6848\u6A94.ioc\u7576\u4E2D\u3002 \u7576\u767C\u4F48\u65B0\u7248TouchGFX Generator\u6642\uFF0C\u820A\u7248\u7684\u53C3\u6578\u53EF\u80FD\u8207\u65B0\u7248\u7684\u53C3\u6578\u4E0D\u76F8\u5BB9\uFF0C\u6B64\u6642\u4FBF\u9700\u8981\u9032\u884C\u8F49\u79FB\uFF08migration\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u4E0D\u652F\u63F4X-CUBE\u7248\u672C\u4E4B\u9593\u7684\u5347\u7D1A\u3002\u800C\u7531\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.touchgfx`), `\u6A94\u6848\u5167`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PostGenerateTargetCommand`), `\u7576\u4E2D\u7684\u6307\u4EE4\uFF08\u5982\u4E0B\u6240\u793A\uFF09\uFF0C\u56E0\u6B64\u5728\u6309\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Generate Code`), `\u6642TouchGFX Designer\u6703\u81EA\u52D5\u57F7\u884C\u5347\u7D1A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, ".touchgfx"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u9053\u6307\u4EE4\u5C07\u8B80\u53D6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), `\u6A94\u4E26\u66F4\u65B0\u53C3\u6578\u4EE5\u9069\u61C9X-CUBE-TOUCHGFX\u76EE\u524D\u7684\u7248\u672C\u3002 \u7531\u4EE5\u4E0B\u7BC4\u4F8B\u53EF\u4EE5\u770B\u5230\u5982\u4F55\u900F\u904E\u624B\u52D5\u57F7\u884CX-CUBE-TOUCHGFX 4.14.0\u7684\u8173\u672C\uFF08script\uFF09\u6307\u4EE4\u5C0DX-CUBE-TOUCHGFX 4.13.0\u6240\u5EFA\u7ACB\u7684.ioc\u6A94\u6848\u9032\u884C\u5347\u7D1A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "\u4F7F\u7528STM32F746 DISCO\u61C9\u7528\u7BC4\u672C\u5F9E4.13.0\u5347\u7D1A\u52304.14.0\u7684\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc
  TouchGFX Generator 4.13.0 found
  Creating backup of ../STM32F746G_DISCO.ioc as ../backup_STM32F746G_DISCO.ioc
  Performing upgrade 4.13.0 -> 4.14.0 ... OK
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5STM32CubeMX\u958B\u555F\u5347\u7D1A\u904E\u7684\u5C08\u6848\u6642CubeMX\u6703\u63D0\u793A\u4F7F\u7528\u8005\u8981\u5B89\u88DD.ioc\u6A94\u6240\u6307\u5B9A\u7684X-CUBE-TOUCHGFX\u7248\u672C\uFF08\u82E5\u6307\u5B9A\u7248\u672C\u5C1A\u672A\u5B89\u88DD\u7684\u60C5\u6CC1\u4E0B\uFF09\u3002 \u9EDE\u9078`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7ACB\u5373\u4E0B\u8F09\uFF08Download now\uFF09`), `\u5F8C\u5C07\u4E0B\u8F09\u4E26\u5B89\u88DDX-Cube-TouchGFX-4.14.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.png",
    noShadow: false,
    mdxType: "Figure"
  }, "\u907A\u6F0F\u9644\u52A0\u8EDF\u9AD4\uFF1ATouchGFX Generator 4.14.0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5347\u7D1A\u671F\u9593\u6703\u4FDD\u7559TouchGFX Generator\u4E2D\u7684\u6240\u6709\u8A2D\u5B9A\uFF0C.ioc\u6A94\u7684\u5099\u4EFD\u6A94\u6703\u4EE5\u524D\u7F6E\u6A94\u540D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `backup_`), `\u7684\u65B9\u5F0F\u653E\u6210\u539F\u59CB\u6A94\u65C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8981\u4F7F\u7528TouchGFX Generator\u6240\u63D0\u4F9B\u7684\u65B0\u529F\u80FD\u5FC5\u9808\u5728STM32CubeMX\u4E2D\u518D\u57F7\u884C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u7522\u751F\u7A0B\u5F0F\u78BC\uFF08Generate Code\uFF09"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u5982\u679C\u900F\u904ESTM32CubeMX\uFF08\u800C\u4E0D\u662F\u900F\u904ETouchGFX Designer\uFF09\u4F86\u57F7\u884C\u70BA\u73FE\u6709\u7684TouchGFX\u5C08\u6848\u5347\u7D1AX-CUBE-TOUCHGFX\uFF0CTouchGFX Generator\u53C3\u6578\u5C07\u88AB\u91CD\u7F6E\u70BA\u9810\u8A2D\u503C\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);