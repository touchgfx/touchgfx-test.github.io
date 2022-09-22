"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5052],{

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

/***/ 22951:
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
  title: "\u5C06IDE\u4E0ETouchGFX\u7EC4\u5408\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "id": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "title": "\u5C06IDE\u4E0ETouchGFX\u7EC4\u5408\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-ides-with-touchgfx",
    "title": "\u5C06IDE\u4E0ETouchGFX\u7EC4\u5408\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/zh-CN/docs/category/working-with-touchgfx"
  },
  "next": {
    "title": "\u63A7\u4EF6\u548C\u5BB9\u5668",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  }
};
const assets = {};





const toc = [{
  value: "\u5148\u51B3\u6761\u4EF6\uFF1AGCC\u7248\u672C",
  id: "prerequisite-gcc-version",
  level: 2
}, {
  value: "\u4ECEIDE\u8C03\u7528TouchGFX Makefile",
  id: "invoke-touchgfx-makefile-from-ide",
  level: 2
}, {
  value: "\u5C06TouchGFX\u4EE3\u7801\u6587\u4EF6\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u9879\u76EE\u4E2D",
  id: "add-touchgfx-code-files-to-your-own-project",
  level: 2
}, {
  value: "\u6240\u9700\u7684\u6587\u4EF6",
  id: "required-files",
  level: 3
}, {
  value: "\u5305\u542B\u8DEF\u5F84",
  id: "include-paths",
  level: 3
}, {
  value: "\u7F16\u8BD1\u5668\u5F00\u5173",
  id: "compiler-switches",
  level: 3
}, {
  value: "Cortex-M0\u5185\u6838",
  id: "cortex-m0-cores",
  level: 4
}, {
  value: "Cortex-M4f\u5185\u6838",
  id: "cortex-m4f-cores",
  level: 4
}, {
  value: "Cortex-M7\u5185\u6838",
  id: "cortex-m7-cores",
  level: 4
}, {
  value: "Cortex-M33 \u5185\u6838",
  id: "cortex-m33-cores",
  level: 4
}, {
  value: "\u94FE\u63A5\u5668",
  id: "linker",
  level: 3
}, {
  value: "\u6838\u5FC3\u5E93",
  id: "core-library",
  level: 4
}, {
  value: "\u94FE\u63A5\u5668\u9009\u9879",
  id: "linker-options",
  level: 4
}, {
  value: "\u8D44\u6E90\u751F\u6210",
  id: "asset-generation",
  level: 2
}, {
  value: "\u70E7\u5F55\u548C\u8C03\u8BD5",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u521B\u5EFA\u65B0\u7684TouchGFX\u9879\u76EE\u65F6\uFF0C\u65E0\u8BBA\u662F\u901A\u8FC7TouchGFX Designer\u8FD8\u662FSTM32CubeMX\uFF0C\u63D0\u4F9B\u4EE5\u4E0B\u9879\u76EE\u6587\u4EF6\u548C\u5E93\u4EE5\u4FBF\u4F7F\u7528\u4E13\u6709\u7684IDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil uVision`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u4EC5\u76EE\u6807\u677F\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR Embedded Workbench`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u4EC5\u76EE\u6807\u677F\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u4EC5\u76EE\u6807\u677F\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `(\u4EC5\u6A21\u62DF\u5668)`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF01\u5E76\u975E\u6240\u6709\u9879\u76EE\u6587\u4EF6\u90FD\u540C\u65F6\u51FA\u73B0\u5728\u9879\u76EE\u4E2D\u3002 \u5728STM32CubeMX\u4E2D\u9009\u62E9\u7684\u5DE5\u5177\u94FE\u5C31\u662F\u5C06\u8981\u751F\u6210\u7684\u5DE5\u5177\u94FE\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u9009\u62E9STM32CubeIDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u4F55\u66F4\u6539\u5DE5\u5177\u94FE\u5728", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../board-bring-up/how-to/01-create-project",
    mdxType: "Link"
  }, "\u6B64\u5904"), "\u4ECB\u7ECD\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u751F\u6210\u6587\u4EF6\u548C\u5E93\uFF08\u7528\u4E8E\u57FA\u4E8Eshell\u7684\u7F16\u8BD1\uFF09\u548CGCC\u4EA4\u53C9\u7F16\u8BD1\u5668\uFF08\u7528\u4E8EARM\u76EE\u6807\uFF09\u3002 \u672C\u6587\u5C06\u5E2E\u52A9\u60A8\u914D\u7F6E\u7528\u4E8ETouchGFX\u5E94\u7528\u5F00\u53D1\u7684\u57FA\u4E8EGCC\u7684\u7B2C\u4E09\u65B9IDE\u3002 \u57FA\u672C\u4E0A\uFF0C\u4EFB\u4F55\u80FD\u591F\u8C03\u7528GCC\u4EA4\u53C9\u7F16\u8BD1\u5668\u7684IDE\u90FD\u662F\u53EF\u7528\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8BF7\u6CE8\u610F\uFF0C\u672C\u6587\u53EA\u662F\u6982\u8FF0\u8BBE\u7F6E\u8FC7\u7A0B\uFF08\u65E0\u6CD5\u63D0\u4F9B\u5BF9\u6240\u6709\u5404\u79CDIDE\u7684\u652F\u6301\uFF09\uFF0C\u4F46\u5E0C\u671B\u6B64\u5904\u63D0\u4F9B\u7684\u4FE1\u606F\u8DB3\u4EE5\u8BA9\u60A8\u5728\u6700\u559C\u6B22\u7684IDE\u4E2D\u4F7F\u7528TouchGFX\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u5C06\u63CF\u8FF0\u4E24\u79CD\u5C06TouchGFX\u4E0E\u5176\u4ED6IDE\u7EC4\u5408\u4F7F\u7528\u7684\u65B9\u6CD5\u3002 \u4E00\u79CD\u65B9\u6CD5\u662F\u4ECEIDE\u5185\u90E8\u8C03\u7528TouchGFX Makefile\u3002 \u8FD9\u53EF\u80FD\u662F\u6700\u7B80\u5355\u7684\u65B9\u6CD5\uFF0C\u4F46\u5982\u679C\u60A8\u60F3\u66F4\u597D\u5730\u63A7\u5236\u7F16\u8BD1\u8FC7\u7A0B\u548C\u6587\u4EF6\u4F4D\u7F6E\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u5E76\u975E\u603B\u662F\u5408\u9002\u7684\u9009\u62E9\u3002 \u6216\u8005\uFF0C\u53EF\u4EE5\u624B\u52A8\u5C06\u5FC5\u8981\u7684TouchGFX\u6587\u4EF6\u548C\u914D\u7F6E\u9009\u9879\u6DFB\u52A0\u5230\u73B0\u6709\u9879\u76EE\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisite-gcc-version"
  }), `\u5148\u51B3\u6761\u4EF6\uFF1AGCC\u7248\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u5047\u8BBE\u60A8\u5C06\u4F7F\u7528\u901A\u8FC7TouchGFX\u73AF\u5883shell\u5206\u53D1\u7684GCC\u4EA4\u53C9\u7F16\u8BD1\u5668\u5DE5\u5177\u94FE\uFF0C\u6216\u8005\u4F7F\u7528\u60A8\u81EA\u5DF1\u7279\u6709\u7684GCC\u5DE5\u5177\u94FE\uFF08\u80FD\u591F\u94FE\u63A5\u4F7F\u7528\u73AF\u5883shell\u5DE5\u5177\u94FE\u7F16\u8BD1\u7684TouchGFX\u6838\u5FC3\u5E93\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u7684GCC\u7F16\u8BD1\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-gcc.exe -v
Target: arm-none-eabi
Thread model: single
gcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u7F16\u8BD1\u5668\u53EF\u4EE5\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://launchpad.net/gcc-arm-embedded"
  }), `https://launchpad.net/gcc-arm-embedded`), `\u83B7\u5F97\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "invoke-touchgfx-makefile-from-ide"
  }), `\u4ECEIDE\u8C03\u7528TouchGFX Makefile`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728IDE\u4E2D\u7F16\u8BD1TouchGFX\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u79CD\u5FEB\u901F\u800C\u7C97\u7565\u7684\u65B9\u6CD5\u662F\u76F4\u63A5\u8C03\u7528TouchGFX Designer\u6240\u521B\u5EFA\u7684\u9879\u76EE\u4E2D\u5305\u542B\u7684Makefile\u3002 \u8981\u4F7F\u7528TouchGFX\u73AF\u5883shell\u7F16\u8BD1\u9762\u5411\u76EE\u6807\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5FC5\u987B\u5BFC\u822A\u5230TouchGFX\u5E94\u7528\u7A0B\u5E8F\u6839\u76EE\u5F55\u5E76\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u9664\u4E86\u4ECETouchGFX\u73AF\u5883shell\u8C03\u7528make\u547D\u4EE4\uFF0C\u8FD8\u53EF\u4EE5\u4ECEIDE\u4E2D\u8C03\u7528\u3002 Shell\u4F7F\u7528\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF08make, arm-none-eabi-gcc\uFF0C ..\uFF09\u5B9E\u9645\u4E0A\u662F\u666E\u901A\u7684Windows x86\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u6240\u4EE5make\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u901A\u8FC7\u666E\u901A\u7684\u547D\u4EE4\u63D0\u793A\u7B26\u6267\u884C\uFF0C\u524D\u63D0\u662F\u5DF2\u7ECF\u914D\u7F6E\u4E86\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BBE\u7F6E\u4E86\u6240\u9700\u7684Windows\u73AF\u5883\u53D8\u91CF\u4E4B\u540E\uFF0C\u73B0\u5728\u53EF\u4EE5\u76F4\u63A5\u4ECEIDE\u4E2D\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `make`), `\u547D\u4EE4\u4F5C\u7528\u4E8E\u9002\u5F53\u7684TouchGFX\u751F\u6210\u6587\u4EF6\u3002 \u60A8\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4\u4E0E\u4ECEshell\u7F16\u8BD1\u65F6\u76F8\u540C\uFF0C\u5373\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8BF7\u6CE8\u610F\uFF0C\u5F53\u524D\u76EE\u5F55\u5FC5\u987B\u662F\u8981\u7F16\u8BD1\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u6839\u76EE\u5F55\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "add-touchgfx-code-files-to-your-own-project"
  }), `\u5C06TouchGFX\u4EE3\u7801\u6587\u4EF6\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u9879\u76EE\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u60F3\u66F4\u597D\u5730\u63A7\u5236\u7F16\u8BD1\u8FC7\u7A0B\u548C\u6587\u4EF6\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u5C06\u76F8\u5173\u7684TouchGFX\u4EE3\u7801\u6587\u4EF6\u96C6\u6210\u5230\u81EA\u5DF1\u7684\u73B0\u6709\u9879\u76EE\u4E2D\uFF0C\u5E76\u6DFB\u52A0\u5FC5\u8981\u7684\u5305\u542B\u8DEF\u5F84\u548C\u7F16\u8BD1\u5668\u5F00\u5173\u4EE5\u4F7F\u5176\u80FD\u591F\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "required-files"
  }), `\u6240\u9700\u7684\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u672C\u4E0A\uFF0C\u60A8\u9700\u8981\u5411IDE\u9879\u76EE\u6DFB\u52A0\u7684\u7684TouchGFX\u6587\u4EF6\u4E0E\u4F7F\u7528make\u547D\u4EE4\u4ECETouchGFX\u73AF\u5883shell\u7F16\u8BD1\u65F6\u76F8\u540C\u3002 \u5177\u4F53\u5305\u542B\u54EA\u4E9B\u6587\u4EF6\u53D6\u51B3\u4E8E\u60A8\u7684\u76EE\u6807\u677F\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u677F\u7684\u5E95\u5C42\u9A71\u52A8\u7A0B\u5E8F\u4E0D\u540C\u3002 \u4E3A\u4E86\u786E\u5B9A\u60A8\u9700\u8981\u54EA\u4E9B\u6587\u4EF6\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528TouchGFX\u73AF\u5883shell\u7F16\u8BD1\u9762\u5411\u9002\u5F53\u677F\u5361\u7684\u5E94\u7528\u7A0B\u5E8F\u3002 \u7F16\u8BD1\u8FC7\u7A0B\u4F1A\u63D0\u5230\u6B63\u5728\u7F16\u8BD1\u7684\u6BCF\u4E2A\u6587\u4EF6\uFF0C\u4ECE\u800C\u5217\u51FA\u60A8\u9700\u8981\u6DFB\u52A0\u7684\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "include-paths"
  }), `\u5305\u542B\u8DEF\u5F84`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5C06\u9700\u8981\u5411\u7F16\u8BD1\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5305\u542B\u8DEF\u5F84\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\u9664\u4E86\u4E0A\u9762\u7684\u5305\u542B\u8DEF\u5F84\uFF0C\u60A8\u8FD8\u9700\u8981\u4E3A\u7279\u5B9A\u4E8E\u677F\u5361\u7684\u4EE3\u7801\u6DFB\u52A0\u5305\u542B\u8DEF\u5F84\u3002 \u53EF\u4EE5\u5728 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gcc/Makefile"), " \u4E2D\u4E86\u89E3\u76F8\u5173\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiler-switches"
  }), `\u7F16\u8BD1\u5668\u5F00\u5173`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E\u5305\u542B\u8DEF\u5F84\u4E00\u6837\uFF0C\u6709\u4E00\u4E9B\u5FC5\u987B\u542F\u7528\u7684\u901A\u7528\u7F16\u8BD1\u5668\u5F00\u5173\uFF0C\u8FD8\u6709\u4E00\u4E9B\u7279\u5B9A\u4E8E\u5904\u7406\u5668\u5185\u6838\u548C\u5177\u4F53\u677F\u4EF6\u7684\u7F16\u8BD1\u5668\u5F00\u5173\u3002 \u4E0B\u9762\u9488\u5BF9\u6BCF\u79CD\u5185\u6838\u5217\u51FA\u4E86\u7528\u4E8E\u7F16\u8BD1TouchGFX\u6838\u5FC3\u5E93\u7684\u7F16\u8BD1\u5668\u5F00\u5173\u3002 \u4E3A\u4E86\u8BA9\u94FE\u63A5\u5668\u5DE5\u4F5C\uFF0C\u5176\u4E2D\u4E00\u4E9B\u9009\u9879\u4E2D\u5BF9\u4E8E\u4EE3\u7801\u7F16\u8BD1\u4E5F\u662F\u5F3A\u5236\u6027\u7684\uFF0C\u800C\u6709\u4E9B\u9009\u9879\u662F\u53EF\u9009\u7684\u3002 \u90A3\u4E9B\u5DF2\u77E5\u7684\u5F3A\u5236\u6027\u9009\u9879\u4EE5\u7C97\u4F53\u663E\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m0-cores"
  }), `Cortex-M0\u5185\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m4f-cores"
  }), `Cortex-M4f\u5185\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m7-cores"
  }), `Cortex-M7\u5185\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m33-cores"
  }), `Cortex-M33 \u5185\u6838`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker"
  }), `\u94FE\u63A5\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "core-library"
  }), `\u6838\u5FC3\u5E93`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5FC5\u987B\u94FE\u63A5TouchGFX\u6838\u5FC3\u5E93\u3002 \u8FD9\u5E94\u8BE5\u662F\u4E8C\u8005\u9009\u4E00\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u60A8\u7684MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `.../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-options"
  }), `\u94FE\u63A5\u5668\u9009\u9879`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u60A8\u8FD8\u9700\u8981\u4E00\u4E9B\u94FE\u63A5\u5668\u9009\u9879\u3002 \u4EE5\u4E0B\u662FTouchGFX\u4F7F\u7528\u7684\u9009\u9879\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
Cortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "asset-generation"
  }), `\u8D44\u6E90\u751F\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u7F16\u8BD1\u9879\u76EE\uFF0C\u8FD8\u5FC5\u987B\u751F\u6210\u8D44\u6E90\u3002 \u4E5F\u53EF\u4EE5\u4F7F\u7528\u2018assets\u2019\u9009\u9879\u8C03\u7528\u751F\u6210\u7684Makefile\u5B8C\u6210\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f TouchGFX/simulator/gcc/Makefile assets
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u79CD\u751F\u6210\u8D44\u6E90\u7684\u65B9\u6CD5\u662F\u76F4\u63A5\u4F7F\u7528\u56FE\u50CF\u8F6C\u6362\u5668\u3001\u6587\u672C/\u5B57\u4F53\u8F6C\u6362\u5668\u3001\u4EE5\u53CA\u89C6\u9891\u8F6C\u6362\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Imageconverter `), `Imageconverter\u53EF\u4EE5\u4F4D\u4E8E\u60A8\u7684\u9879\u76EEtouchgfx\u6587\u4EF6\u5939 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/imageconvert/build`), `\uFF08\u4E3ALinux\u548CWindows\u64CD\u4F5C\u7CFB\u7EDF\u800C\u6784\u5EFA\uFF09\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u8C03\u7528imageconvert.out\u53EF\u6267\u884C\u6587\u4EF6\u65F6\uFF0C\u5B83\u5C06\u5728\u8C03\u7528\u5B83\u7684\u6587\u4EF6\u5939\u4E2D\u5BFB\u627E\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Textconverter`), ` textconverter\u4F5C\u4E3Aruby\u6587\u4EF6\u4F4D\u4E8E\u9879\u76EEtouchfx\u6587\u4EF6\u5939`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/textconvert\u4E2D`), `\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `main.rb`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Textconverter`), ` textconverter\u4F5C\u4E3Aruby\u6587\u4EF6\u4F4D\u4E8E\u9879\u76EEtouchfx\u6587\u4EF6\u5939`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/videoconvert`), `\u4E2D\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoconvert.rb`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-and-debugging"
  }), `\u70E7\u5F55\u548C\u8C03\u8BD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5F88\u53EF\u80FD\u8F93\u51FA\u4E00\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.elf`), `\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.hex`), `\u6587\u4EF6\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u60A8\u7684\u94FE\u63A5\u5668\u8BBE\u7F6E\u3002 \u53EF\u4EE5\u4ECE\u5927\u591A\u6570IDE\u4E2D\u90E8\u7F72\u548C\u8C03\u8BD5TouchGFX\u5E94\u7528\u7A0B\u5E8F\uFF0C\u901A\u5E38\u4F7F\u7528GDB\u670D\u52A1\u5668\u6216IDE\u63D0\u4F9B\u7684\u4EFB\u4F55\u5176\u4ED6\u65B9\u6CD5\u3002 \u672C\u6587\u4E0D\u80FD\u4E3A\u6BCF\u4E2A\u53EF\u7528\u7684IDE\u63D0\u4F9B\u5177\u4F53\u7684\u6307\u5F15\uFF0C\u4F46\u60A8\u4E5F\u8BB8\u80FD\u4ECE\u6587\u7AE0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "compiling-and-flashing"
  }), `\u7F16\u8BD1& \u70E7\u5F55`), `\u4E2D\u627E\u5230\u7075\u611F\uFF0C\u8BE5\u6587\u7AE0\u8BB2\u89E3\u5982\u4F55\u8FD0\u7528GCC\u751F\u6210\u7684ELF/HEX\u6587\u4EF6\u70E7\u5F55\u677F\u5361\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);