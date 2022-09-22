"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5847],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


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

/***/ 32475:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29415);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31217);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
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
  id: "using-ides-with-touchgfx",
  title: "\u5C07IDE\u8207TouchGFX\u7D44\u5408\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "id": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "title": "\u5C07IDE\u8207TouchGFX\u7D44\u5408\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-ides-with-touchgfx",
    "title": "\u5C07IDE\u8207TouchGFX\u7D44\u5408\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/zh-TW/docs/category/working-with-touchgfx"
  },
  "next": {
    "title": "\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  }
};
const assets = {};





const toc = [{
  value: "\u5148\u6C7A\u689D\u4EF6\uFF1AGCC\u7248",
  id: "prerequisite-gcc-version",
  level: 2
}, {
  value: "\u5F9EIDE\u547C\u53EBTouchGFX Makefile",
  id: "invoke-touchgfx-makefile-from-ide",
  level: 2
}, {
  value: "\u5C07TouchGFX\u7A0B\u5F0F\u78BC\u6A94\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u5C08\u6848\u4E2D",
  id: "add-touchgfx-code-files-to-your-own-project",
  level: 2
}, {
  value: "\u6240\u9700\u7684\u6587\u4EF6",
  id: "required-files",
  level: 3
}, {
  value: "\u5305\u542B\u8DEF\u5F91",
  id: "include-paths",
  level: 3
}, {
  value: "\u7DE8\u8B6F\u5668\u958B\u95DC",
  id: "compiler-switches",
  level: 3
}, {
  value: "Cortex-M0\u5167\u6838",
  id: "cortex-m0-cores",
  level: 4
}, {
  value: "Cortex-M4f\u5167\u6838",
  id: "cortex-m4f-cores",
  level: 4
}, {
  value: "Cortex-M7\u5167\u6838",
  id: "cortex-m7-cores",
  level: 4
}, {
  value: "Cortex-M33\u5167\u6838",
  id: "cortex-m33-cores",
  level: 4
}, {
  value: "\u9023\u7D50\u5668",
  id: "linker",
  level: 3
}, {
  value: "\u6838\u5FC3\u5EAB",
  id: "core-library",
  level: 4
}, {
  value: "\u9023\u7D50\u5668\u9078\u9805",
  id: "linker-options",
  level: 4
}, {
  value: "\u8CC7\u7522\u751F\u6210",
  id: "asset-generation",
  level: 2
}, {
  value: "\u71D2\u9304\u548C\u9664\u932F",
  id: "flashing-and-debugging",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5275\u5EFA\u65B0\u7684TouchGFX\u5C08\u6848\u6642\uFF0C\u7121\u8AD6\u662F\u901A\u904ETouchGFX Designer\u9084\u662FSTM32CubeMX\uFF0C\u63D0\u4F9B\u4EE5\u4E0B\u5C08\u6848\u6A94\u6848\u548C\u5EAB\u4EE5\u4FBF\u4F7F\u7528\u5C08\u6709\u7684IDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil uVision`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u50C5\u76EE\u6A19\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR Embedded Workbench`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u50C5\u76EE\u6A19\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u50C5\u76EE\u6A19\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, ` (\u50C5\u6A21\u64EC\u5668)`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF01\u4E26\u975E\u6240\u6709\u5C08\u6848\u6A94\u6848\u90FD\u540C\u6642\u51FA\u73FE\u5728\u5C08\u6848\u4E2D\u3002 \u5728STM32CubeMX\u4E2D\u9078\u64C7\u7684\u5DE5\u5177\u93C8\u5C31\u662F\u5C07\u8981\u751F\u6210\u7684\u5DE5\u5177\u93C8\uFF0C\u9810\u8A2D\u60C5\u6CC1\u4E0B\u9078\u64C7STM32CubeIDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u4F55\u66F4\u6539\u5DE5\u5177\u93C8\u5728", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../board-bring-up/how-to/01-create-project",
    mdxType: "Link"
  }, "\u6B64\u8655"), "\u4ECB\u7D39\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u9084\u63D0\u4F9B\u751F\u6210\u6A94\u548C\u5EAB\uFF08\u7528\u65BC\u57FA\u65BCshell\u7684\u7DE8\u8B6F\uFF09\u548CGCC\u4EA4\u53C9\u7DE8\u8B6F\u5668\uFF08\u7528\u65BCARM\u76EE\u6A19\uFF09\u3002 \u672C\u6587\u5C07\u8AAA\u660E\u60A8\u914D\u7F6E\u7528\u65BCTouchGFX\u61C9\u7528\u958B\u767C\u7684\u7684\u7B2C\u4E09\u65B9\u5EE0\u5546\u7684GCC-based IDE\u3002 \u57FA\u672C\u4E0A\uFF0C\u4EFB\u4F55\u80FD\u5920\u547C\u53EBGCC\u4EA4\u53C9\u7DE8\u8B6F\u5668\u7684IDE\u90FD\u662F\u53EF\u7528\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8ACB\u6CE8\u610F\uFF0C\u672C\u6587\u53EA\u662F\u6982\u8FF0\u8A2D\u7F6E\u904E\u7A0B\uFF08\u7121\u6CD5\u63D0\u4F9B\u5C0D\u6240\u6709\u5404\u7A2EIDE\u7684\u652F\u63F4\uFF09\uFF0C\u4F46\u5E0C\u671B\u6B64\u8655\u63D0\u4F9B\u7684\u8CC7\u8A0A\u8DB3\u4EE5\u8B93\u60A8\u5728\u6700\u559C\u6B61\u7684IDE\u4E2D\u4F7F\u7528TouchGFX\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u5C07\u63CF\u8FF0\u5169\u7A2E\u5C07TouchGFX\u8207\u5176\u4ED6IDE\u7D44\u5408\u4F7F\u7528\u7684\u65B9\u6CD5\u3002 \u4E00\u7A2E\u65B9\u6CD5\u662F\u5F9EIDE\u5167\u90E8\u8ABF\u547C\u53EBTouchGFX Makefile\u3002 \u9019\u53EF\u80FD\u662F\u6700\u7C21\u55AE\u7684\u65B9\u6CD5\uFF0C\u4F46\u5982\u679C\u60A8\u60F3\u66F4\u597D\u5730\u63A7\u5236\u7DE8\u8B6F\u904E\u7A0B\u548C\u6A94\u6848\u4F4D\u7F6E\uFF0C\u9019\u7A2E\u65B9\u6CD5\u4E26\u975E\u7E3D\u662F\u9069\u7576\u7684\u9078\u64C7\u3002 \u6216\u8005\uFF0C\u53EF\u4EE5\u624B\u52D5\u5C07\u5FC5\u8981\u7684TouchGFX\u6A94\u6848\u548C\u914D\u7F6E\u9078\u9805\u6DFB\u52A0\u5230\u73FE\u6709\u5C08\u6848\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisite-gcc-version"
  }), `\u5148\u6C7A\u689D\u4EF6\uFF1AGCC\u7248`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u5047\u8A2D\u60A8\u5C07\u4F7F\u7528\u901A\u904ETouchGFX\u74B0\u5883shell\u5206\u767C\u7684GCC\u4EA4\u53C9\u7DE8\u8B6F\u5668\u5DE5\u5177\u93C8\uFF0C\u6216\u8005\u4F7F\u7528\u60A8\u81EA\u5DF1\u7279\u6709\u7684GCC\u5DE5\u5177\u93C8\uFF08\u80FD\u5920\u9023\u7D50\u4F7F\u7528\u74B0\u5883shell\u5DE5\u5177\u93C8\u7DE8\u8B6F\u7684TouchGFX\u6838\u5FC3\u5EAB\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u7684GCC\u7DE8\u8B6F\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-gcc.exe -v
Target: arm-none-eabi
Thread model: single
gcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u7DE8\u8B6F\u5668\u53EF\u4EE5\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://launchpad.net/gcc-arm-embedded"
  }), `https://launchpad.net/gcc-arm-embedded`), `\u7372\u5F97\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "invoke-touchgfx-makefile-from-ide"
  }), `\u5F9EIDE\u547C\u53EBTouchGFX Makefile`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728IDE\u4E2D\u7DE8\u8B6FTouchGFX\u61C9\u7528\u7A0B\u5F0F\u7684\u4E00\u7A2E\u5FEB\u901F\u800C\u7C97\u7565\u7684\u65B9\u6CD5\u662F\u76F4\u63A5\u547C\u53EBTouchGFX Designer\u6240\u5275\u5EFA\u7684\u5C08\u6848\u4E2D\u5305\u542B\u7684Makefile\u3002 \u8981\u4F7F\u7528TouchGFX\u74B0\u5883shell\u7DE8\u8B6F\u9762\u5411\u76EE\u6A19\u7684\u61C9\u7528\u7A0B\u5F0F\uFF0C\u5FC5\u9808\u5C0E\u822A\u5230TouchGFX\u61C9\u7528\u7A0B\u5F0F\u6839\u76EE\u9304\u4E26\u57F7\u884C\u4EE5\u4E0B\u6307\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u9664\u4E86\u5F9ETouchGFX\u74B0\u5883shell\u547C\u53EBmake\u6307\u4EE4\uFF0C\u9084\u53EF\u4EE5\u5F9EIDE\u4E2D\u547C\u53EB\u3002 Shell\u4F7F\u7528\u7684\u53EF\u57F7\u884C\u6A94\uFF08make, arm-none-eabi-gcc\uFF0C ..\uFF09\u5BE6\u969B\u4E0A\u662F\u666E\u901A\u7684Windows x86\u53EF\u57F7\u884C\u6A94\uFF0C\u6240\u4EE5make\u61C9\u7528\u7A0B\u5F0F\u53EF\u4EE5\u901A\u904E\u666E\u901A\u7684\u6307\u4EE4\u63D0\u793A\u7B26\u57F7\u884C\uFF0C\u524D\u63D0\u662F\u5DF2\u7D93\u914D\u7F6E\u4E86\u4EE5\u4E0B\u74B0\u5883\u8B8A\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A2D\u7F6E\u4E86\u6240\u9700\u7684Windows\u74B0\u5883\u8B8A\u6578\u4E4B\u5F8C\uFF0C\u73FE\u5728\u53EF\u4EE5\u76F4\u63A5\u5F9EIDE\u4E2D\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `make`), `\u6307\u4EE4\u4F5C\u7528\u65BC\u9069\u7576\u7684TouchGFX\u751F\u6210\u6587\u4EF6\u3002 \u60A8\u9700\u8981\u57F7\u884C\u7684\u6307\u4EE4\u8207\u5F9Eshell\u7DE8\u8B6F\u6642\u76F8\u540C\uFF0C\u5373\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8ACB\u6CE8\u610F\uFF0C\u76EE\u524D\u7684\u76EE\u9304\u5FC5\u9808\u662F\u8981\u7DE8\u8B6F\u7684\u61C9\u7528\u7A0B\u5F0F\u7684\u6839\u76EE\u9304\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "add-touchgfx-code-files-to-your-own-project"
  }), `\u5C07TouchGFX\u7A0B\u5F0F\u78BC\u6A94\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u5C08\u6848\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u60F3\u66F4\u597D\u5730\u63A7\u5236\u7DE8\u8B6F\u904E\u7A0B\u548C\u6A94\u6848\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u5C07\u76F8\u95DC\u7684TouchGFX\u7A0B\u5F0F\u78BC\u6A94\u96C6\u6210\u5230\u81EA\u5DF1\u7684\u73FE\u6709\u5C08\u6848\u4E2D\uFF0C\u4E26\u6DFB\u52A0\u5FC5\u8981\u7684\u5305\u542B\u8DEF\u5F91\u548C\u7DE8\u8B6F\u5668\u958B\u95DC\u4EE5\u4F7F\u5176\u80FD\u5920\u7DE8\u8B6F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "required-files"
  }), `\u6240\u9700\u7684\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u672C\u4E0A\uFF0C\u60A8\u9700\u8981\u5411IDE\u5C08\u6848\u6DFB\u52A0\u7684TouchGFX\u6A94\u8207\u4F7F\u7528make\u6307\u4EE4\u5F9ETouchGFX\u74B0\u5883shell\u7DE8\u8B6F\u6642\u76F8\u540C\u3002 \u5177\u9AD4\u5305\u542B\u54EA\u4E9B\u6A94\u53D6\u6C7A\u65BC\u60A8\u7684\u76EE\u6A19\u958B\u767C\u677F\uFF0C\u56E0\u70BA\u6BCF\u500B\u958B\u767C\u677F\u7684\u5E95\u5C64\u9A45\u52D5\u7A0B\u5F0F\u4E0D\u540C\u3002 \u70BA\u4E86\u78BA\u5B9A\u60A8\u9700\u8981\u54EA\u4E9B\u6A94\u6848\uFF0C\u5EFA\u8B70\u76F4\u63A5\u4F7F\u7528TouchGFX\u74B0\u5883shell\u7DE8\u8B6F\u5C0D\u9069\u7576\u958B\u767C\u677F\u7684\u61C9\u7528\u7A0B\u5F0F\u3002 \u7DE8\u8B6F\u904E\u7A0B\u6703\u63D0\u5230\u6B63\u5728\u7DE8\u8B6F\u7684\u6BCF\u500B\u6A94\uFF0C\u5F9E\u800C\u5217\u51FA\u60A8\u9700\u8981\u6DFB\u52A0\u7684\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "include-paths"
  }), `\u5305\u542B\u8DEF\u5F91`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5C07\u9700\u8981\u5411\u7DE8\u8B6F\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5305\u542B\u8DEF\u5F91\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `.../TouchGFX/gui/include
.../TouchGFX/generated/gui_generated/include
.../TouchGFX/platform/os
.../TouchGFX/generated/fonts/include
.../TouchGFX/generated/images/include
.../TouchGFX/generated/texts/include
.../TouchGFX/generated/videos/include
.../Middlewares/ST/touchgfx/framework/include
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u9664\u4E86\u4E0A\u9762\u7684\u5305\u542B\u8DEF\u5F91\uFF0C\u60A8\u9084\u9700\u8981\u70BA\u7279\u5B9A\u958B\u767C\u677F\u7684\u7A0B\u5F0F\u78BC\u6DFB\u52A0\u5305\u542B\u8DEF\u5F91\u3002 \u53EF\u4EE5\u5728 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gcc/Makefile"), " \u4E2D\u77AD\u89E3\u76F8\u95DC\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiler-switches"
  }), `\u7DE8\u8B6F\u5668\u958B\u95DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8207\u5305\u542B\u8DEF\u5F91\u4E00\u6A23\uFF0C\u6709\u4E00\u4E9B\u5FC5\u9808\u555F\u7528\u7684\u901A\u7528\u7DE8\u8B6F\u5668\u958B\u95DC\uFF0C\u9084\u6709\u4E00\u4E9B\u7279\u5B9A\u65BC\u8655\u7406\u5668\u5167\u6838\u548C\u5177\u9AD4\u958B\u767C\u677F\u7684\u7DE8\u8B6F\u5668\u958B\u95DC\u3002 \u4E0B\u9762\u91DD\u5C0D\u6BCF\u7A2E\u5167\u6838\u5217\u51FA\u4E86\u7528\u65BC\u7DE8\u8B6FTouchGFX\u6838\u5FC3\u5EAB\u7684\u7DE8\u8B6F\u5668\u958B\u95DC\u3002 \u70BA\u4E86\u8B93\u9023\u7D50\u5668\u5DE5\u4F5C\uFF0C\u5176\u4E2D\u4E00\u4E9B\u9078\u9805\u4E2D\u5C0D\u65BC\u7A0B\u5F0F\u78BC\u7DE8\u8B6F\u4E5F\u662F\u5F37\u5236\u6027\u7684\uFF0C\u800C\u6709\u4E9B\u9078\u9805\u662F\u53EF\u9078\u7684\u3002 \u90A3\u4E9B\u5DF2\u77E5\u7684\u5F37\u5236\u6027\u9078\u9805\u4EE5\u7C97\u9AD4\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m0-cores"
  }), `Cortex-M0\u5167\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m4f-cores"
  }), `Cortex-M4f\u5167\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m7-cores"
  }), `Cortex-M7\u5167\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m33-cores"
  }), `Cortex-M33\u5167\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker"
  }), `\u9023\u7D50\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "core-library"
  }), `\u6838\u5FC3\u5EAB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5FC5\u9808\u9023\u7D50TouchGFX\u6838\u5FC3\u5EAB\u3002 \u9019\u61C9\u8A72\u662F\u4E8C\u8005\u9078\u4E00\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u60A8\u7684MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `.../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-options"
  }), `\u9023\u7D50\u5668\u9078\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u60A8\u9084\u9700\u8981\u4E00\u4E9B\u9023\u7D50\u5668\u9078\u9805\u3002 \u4EE5\u4E0B\u662FTouchGFX\u4F7F\u7528\u7684\u9078\u9805\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
Cortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "asset-generation"
  }), `\u8CC7\u7522\u751F\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u7DE8\u8B6F\u5C08\u6848\uFF0C\u9084\u5FC5\u9808\u751F\u6210\u8CC7\u7522\u3002 \u53EF\u4EE5\u4F7F\u7528\u2018assets\u2019\u9078\u64C7\u547C\u53EB\u751F\u6210\u7684Makefile\u4EE5\u5BE6\u73FE\u8A72\u76EE\u6A19\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f TouchGFX/simulator/gcc/Makefile assets
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u7A2E\u751F\u6210\u8CC7\u7522\u7684\u65B9\u6CD5\u662F\u76F4\u63A5\u4F7F\u7528\u5716\u50CF\u8F49\u63DB\u5668\u3001\u6587\u5B57/\u5B57\u9AD4\u8F49\u63DB\u5668\u3001\u4EE5\u53CA\u5F71\u7247\u8F49\u63DB\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Imageconverter`), `Imageconverter\u53EF\u4EE5\u4F4D\u65BC\u60A8\u7684\u5C08\u6848touchgfx\u8CC7\u6599\u593E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/imageconvert/build`), `\uFF08\u70BALinux\u548CWindows\u4F5C\u696D\u7CFB\u7D71\u800C\u69CB\u5EFA\uFF09\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u547C\u53EBimageconvert.out\u53EF\u57F7\u884C\u6A94\u6642\uFF0C\u5B83\u5C07\u5728\u547C\u53EB\u5B83\u7684\u8CC7\u6599\u593E\u4E2D\u5C0B\u627E\u4E00\u500B\u8A2D\u5B9A\u6A94(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Textconverter`), ` textconverter\u4F5C\u70BAruby\u6A94\u4F4D\u65BC\u5C08\u6848touchfx\u8CC7\u6599\u593E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/textconvert`), `\u4E2D\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `main.rb`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Textconverter`), ` textconverter\u4F5C\u70BAruby\u6A94\u4F4D\u65BC\u5C08\u6848touchfx\u8CC7\u6599\u593E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/videoconvert`), `\u4E2D\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoconvert.rb`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-and-debugging"
  }), `\u71D2\u9304\u548C\u9664\u932F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5F88\u53EF\u80FD\u8F38\u51FA\u4E00\u500B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.elf`), `\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.hex`), ` \uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u60A8\u7684\u9023\u7D50\u5668\u8A2D\u7F6E\u3002 \u53EF\u4EE5\u5F9E\u5927\u591A\u6578IDE\u4E2D\u914D\u7F6E\u548C\u9664\u932FTouchGFX\u61C9\u7528\u7A0B\u5F0F\uFF0C\u901A\u5E38\u4F7F\u7528GDB\u4F3A\u670D\u5668\u6216IDE\u63D0\u4F9B\u7684\u4EFB\u4F55\u5176\u4ED6\u65B9\u6CD5\u3002 \u7121\u6CD5\u70BA\u6BCF\u500B\u53EF\u7528\u7684IDE\u63D0\u4F9B\u5177\u9AD4\u6307\u91DD\uFF0C\u4F46\u60A8\u53EF\u80FD\u80FD\u5728 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "compiling-and-flashing"
  }), `\u7DE8\u8B6F & \u71D2\u9304`), ` \u4E2D\u627E\u5230\u9748\u611F\uFF0C\u8A72\u6587\u89E3\u91CB\u5982\u4F55\u4F7F\u7528 GCC \u751F\u6210\u7684 ELF/HEX \u6A94\u9032\u884C\u71D2\u9304\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);