"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[757],{

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

/***/ 65127:
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
  title: "TouchGFX\u306B\u304A\u3051\u308BIDE\u306E\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "id": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "title": "TouchGFX\u306B\u304A\u3051\u308BIDE\u306E\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-ides-with-touchgfx",
    "title": "TouchGFX\u306B\u304A\u3051\u308BIDE\u306E\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/ja/docs/category/working-with-touchgfx"
  },
  "next": {
    "title": "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  }
};
const assets = {};





const toc = [{
  value: "\u524D\u63D0\u6761\u4EF6: GCC\u30D0\u30FC\u30B8\u30E7\u30F3",
  id: "prerequisite-gcc-version",
  level: 2
}, {
  value: "IDE\u304B\u3089\u306ETouchGFX Makefile\u306E\u547C\u3073\u51FA\u3057",
  id: "invoke-touchgfx-makefile-from-ide",
  level: 2
}, {
  value: "TouchGFX\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0",
  id: "add-touchgfx-code-files-to-your-own-project",
  level: 2
}, {
  value: "\u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB",
  id: "required-files",
  level: 3
}, {
  value: "\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9",
  id: "include-paths",
  level: 3
}, {
  value: "\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B9\u30A4\u30C3\u30C1",
  id: "compiler-switches",
  level: 3
}, {
  value: "Cortex-M0\u30B3\u30A2",
  id: "cortex-m0-cores",
  level: 4
}, {
  value: "Cortex-M4f\u30B3\u30A2",
  id: "cortex-m4f-cores",
  level: 4
}, {
  value: "Cortex-M7\u30B3\u30A2",
  id: "cortex-m7-cores",
  level: 4
}, {
  value: "Cortex-M33\u30B3\u30A2",
  id: "cortex-m33-cores",
  level: 4
}, {
  value: "\u30EA\u30F3\u30AB",
  id: "linker",
  level: 3
}, {
  value: "\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA",
  id: "core-library",
  level: 4
}, {
  value: "\u30EA\u30F3\u30AB\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3",
  id: "linker-options",
  level: 4
}, {
  value: "\u30A2\u30BB\u30C3\u30C8\u751F\u6210",
  id: "asset-generation",
  level: 2
}, {
  value: "\u30D5\u30E9\u30C3\u30B7\u30E5\u3068\u30C7\u30D0\u30C3\u30B0",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u307E\u305F\u306FSTM32CubeMX\u3092\u4ECB\u3057\u3066\u3001\u65B0\u3057\u3044TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u72EC\u81EA\u306EIDE\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3068\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil uVision `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u307F\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR Embedded Workbench `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u307F\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u307F\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u307F\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u3001\u540C\u6642\u306B\u5B58\u5728\u3059\u308B\u308F\u3051\u3067\u306F\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 STM32CubeMX\u3067\u9078\u629E\u3055\u308C\u305F\u30C4\u30FC\u30EB\uFF65\u30C1\u30A7\u30FC\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306FSTM32CubeIDE\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30C4\u30FC\u30EB\uFF65\u30C1\u30A7\u30FC\u30F3\u306E\u5909\u66F4\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../board-bring-up/how-to/01-create-project",
    mdxType: "Link"
  }, "\u3053\u3061\u3089"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001ARM\u30BF\u30FC\u30B2\u30C3\u30C8\u5411\u3051\u306B\u3001GCC\u30AF\u30ED\u30B9\u30B3\u30F3\u30D1\u30A4\u30E9\u306B\u3088\u308B\u30B7\u30A7\u30EB\u30D9\u30FC\u30B9\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u7528\u306EMakefile\u3068\u30E9\u30A4\u30D6\u30E9\u30EA\u3082\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u8A18\u4E8B\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u7528\u306B\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u306EGCC\u30D9\u30FC\u30B9\u306EIDE\u3092\u8A2D\u5B9A\u3059\u308B\u306E\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002 \u57FA\u672C\u7684\u306B\u306F\u3001GCC\u30AF\u30ED\u30B9\u30B3\u30F3\u30D1\u30A4\u30E9\u3092\u8D77\u52D5\u3067\u304D\u308B\u3059\u3079\u3066\u306EIDE\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u4E00\u822C\u7684\u306A\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u624B\u9806\u306E\u307F\u3092\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002\u591A\u69D8\u306AIDE\u3092\u3059\u3079\u3066\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u306E\u306F\u4E0D\u53EF\u80FD\u3067\u3059\u304C\u3001\u3088\u304F\u4F7F\u7528\u3055\u308C\u308BIDE\u3067TouchGFX\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u304A\u305D\u3089\u304F\u3053\u3053\u306B\u793A\u3059\u60C5\u5831\u3067\u5341\u5206\u3067\u3057\u3087\u3046\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001TouchGFX\u3067\u4ED6\u306EIDE\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306E\u7570\u306A\u308B2\u3064\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002 1\u3064\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001IDE\u304B\u3089TouchGFX Makefile\u3092\u547C\u3073\u51FA\u3059\u65B9\u6CD5\u3067\u3059\u3002 \u304A\u305D\u3089\u304F\u3053\u308C\u304C\u6700\u3082\u7C21\u5358\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u3059\u304C\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30D7\u30ED\u30BB\u30B9\u3084\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u3092\u8A73\u7D30\u306B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3001\u5FC5\u305A\u3057\u3082\u671B\u307E\u3057\u3044\u30A2\u30D7\u30ED\u30FC\u30C1\u3068\u306F\u8A00\u3048\u307E\u305B\u3093\u3002 \u4EE3\u66FF\u65B9\u6CD5\u3068\u3057\u3066\u3001\u5FC5\u8981\u306ATouchGFX\u30D5\u30A1\u30A4\u30EB\u3084\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u65E2\u5B58\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u624B\u52D5\u3067\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisite-gcc-version"
  }), `\u524D\u63D0\u6761\u4EF6: GCC\u30D0\u30FC\u30B8\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u30E6\u30FC\u30B6\u304C\u3001TouchGFX\u74B0\u5883\u30B7\u30A7\u30EB\u3068\u5171\u306B\u914D\u5E03\u3055\u308C\u308BGCC\u30AF\u30ED\u30B9\u30B3\u30F3\u30D1\u30A4\u30E9\u306E\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u74B0\u5883\u30B7\u30A7\u30EB\uFF65\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305FTouchGFX\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u30EA\u30F3\u30AF\u53EF\u80FD\u306A\u30BF\u30A4\u30D7\u306E\u72EC\u81EA\u306EGCC\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3055\u308C\u308BGCC\u30B3\u30F3\u30D1\u30A4\u30E9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-gcc.exe -v
Target: arm-none-eabi
Thread model: single
gcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://launchpad.net/gcc-arm-embedded"
  }), `https://launchpad.net/gcc-arm-embedded`), `\u304B\u3089\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "invoke-touchgfx-makefile-from-ide"
  }), `IDE\u304B\u3089\u306ETouchGFX Makefile\u306E\u547C\u3073\u51FA\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u304A\u305D\u3089\u304F\u3001IDE\u304B\u3089TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7C21\u5358\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u65B9\u6CD5\u306F\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u542B\u307E\u308C\u308BMakefile\u3092\u3068\u308A\u3042\u3048\u305A\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3059\u3002 TouchGFX\u74B0\u5883\u30B7\u30A7\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30BF\u30FC\u30B2\u30C3\u30C8\u5411\u3051\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u306B\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30EB\u30FC\u30C8\uFF65\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u79FB\u52D5\u3057\u3066\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001TouchGFX\u74B0\u5883\u30B7\u30A7\u30EB\u304B\u3089make\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u306E\u3067\u306F\u306A\u304F\u3001\u30E6\u30FC\u30B6\u306EIDE\u304B\u3089\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30B7\u30A7\u30EB\u304C\u4F7F\u7528\u3059\u308B\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EB\uFF08make\u3001arm-none-eabi-gcc\u306A\u3069\uFF09\u306F\u3001\u5B9F\u969B\u306B\u306F\u901A\u5E38\u306EWindows x86\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EB\u306A\u306E\u3067\u3001\u4EE5\u4E0B\u306E\u74B0\u5883\u5909\u6570\u304C\u8A2D\u5B9A\u6E08\u307F\u3067\u3042\u308C\u3070\u3001make\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u901A\u5E38\u306E\u30B3\u30DE\u30F3\u30C9\uFF65\u30D7\u30ED\u30F3\u30D7\u30C8\u304B\u3089\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u8981\u306AWindows\u74B0\u5883\u5909\u6570\u3092\u8A2D\u5B9A\u3057\u305F\u5F8C\u3001\u9069\u5207\u306ATouchGFX Makefile\u306B\u5BFE\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `make`), `\u30B3\u30DE\u30F3\u30C9\u3092\u81EA\u5206\u306EIDE\u304B\u3089\u76F4\u63A5\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u307E\u3055\u306B\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B7\u30A7\u30EB\u304B\u3089\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u3068\u540C\u3058\u306A\u306E\u3067\u3001\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u73FE\u5728\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30EB\u30FC\u30C8\uFF65\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "add-touchgfx-code-files-to-your-own-project"
  }), `TouchGFX\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u5206\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30EB\u30C9\uFF65\u30D7\u30ED\u30BB\u30B9\u3084\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u3092\u3082\u3063\u3068\u8A73\u7D30\u306B\u5236\u5FA1\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u95A2\u9023\u3059\u308BTouchGFX\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u5206\u306E\u65E2\u5B58\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u7D71\u5408\u3057\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u306E\u305F\u3081\u306B\u3001\u5FC5\u8981\u306A\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u3068\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B9\u30A4\u30C3\u30C1\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "required-files"
  }), `\u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u672C\u7684\u306B\u306F\u3001TouchGFX\u74B0\u5883\u30B7\u30A7\u30EB\u304B\u3089make\u306B\u3088\u3063\u3066\u69CB\u7BC9\u3059\u308B\u3068\u304D\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u3082\u306E\u3068\u540C\u3058TouchGFX\u30D5\u30A1\u30A4\u30EB\u3092\u3001IDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u542B\u3081\u308B\u3079\u304D\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u6B63\u78BA\u306B\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30DC\u30FC\u30C9\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002\u4F4E\u30EC\u30D9\u30EB\u306E\u30C9\u30E9\u30A4\u30D0\u306F\u30DC\u30FC\u30C9\u3054\u3068\u306B\u7570\u306A\u308B\u304B\u3089\u3067\u3059\u3002 \u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u6C7A\u5B9A\u3059\u308B\u305F\u3081\u306B\u63A8\u5968\u3055\u308C\u308B\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001\u9069\u5207\u306A\u30DC\u30FC\u30C9\u7528\u306ETouchGFX\u74B0\u5883\u30B7\u30A7\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001\u5358\u7D14\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3092\u8A66\u307F\u308B\u3053\u3068\u3067\u3059\u3002 \u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30D7\u30ED\u30BB\u30B9\u3067\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304C1\u3064\u305A\u3064\u793A\u3055\u308C\u308B\u306E\u3067\u3001\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u306E\u3042\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u6B63\u78BA\u306A\u30EA\u30B9\u30C8\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "include-paths"
  }), `\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\u4E0A\u8A18\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u306B\u52A0\u3048\u3066\u3001\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30B3\u30FC\u30C9\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u3082\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u95A2\u3057\u3066\u306F\u3001 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gcc/Makefile"), " \u3092\u78BA\u8A8D\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiler-switches"
  }), `\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B9\u30A4\u30C3\u30C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30D1\u30B9\u3068\u540C\u69D8\u306B\u3001\u3044\u304F\u3064\u304B\u6C4E\u7528\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B9\u30A4\u30C3\u30C1\u3092\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u30D7\u30ED\u30BB\u30C3\u30B5\uFF65\u30B3\u30A2\u3084\u5177\u4F53\u7684\u306A\u30DC\u30FC\u30C9\u306B\u56FA\u6709\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B9\u30A4\u30C3\u30C1\u3082\u3042\u308A\u307E\u3059\u3002 TouchGFX\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u306B\u4F7F\u7528\u3055\u308C\u308B\u30B3\u30F3\u30D1\u30A4\u30E9\uFF65\u30B9\u30A4\u30C3\u30C1\u3092\u3001\u30B3\u30A2\u3054\u3068\u306B\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u4E00\u90E8\u306F\u3001\u30EA\u30F3\u30AB\u304C\u6A5F\u80FD\u3059\u308B\u305F\u3081\u306B\u3082\u30B3\u30FC\u30C9\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u306B\u5FC5\u9808\u3067\u3001\u307E\u305F\u4E00\u90E8\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3059\u3002 \u5FC5\u9808\u3067\u3042\u308B\u3082\u306E\u306F\u592A\u5B57\u3067\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m0-cores"
  }), `Cortex-M0\u30B3\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m4f-cores"
  }), `Cortex-M4f\u30B3\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m7-cores"
  }), `Cortex-M7\u30B3\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m33-cores"
  }), `Cortex-M33\u30B3\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker"
  }), `\u30EA\u30F3\u30AB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "core-library"
  }), `\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30EA\u30F3\u30AF\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u5FDC\u3058\u3066\u3001\u6B21\u306E\u3044\u305A\u308C\u304B\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `.../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-options"
  }), `\u30EA\u30F3\u30AB\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001\u3044\u304F\u3064\u304B\u306E\u30EA\u30F3\u30AB\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3\u3082\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 TouchGFX\u3067\u4F7F\u7528\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
Cortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "asset-generation"
  }), `\u30A2\u30BB\u30C3\u30C8\u751F\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u306B\u306F\u3001\u30A2\u30BB\u30C3\u30C8\u3082\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306E1\u3064\u306E\u65B9\u6CD5\u306F\u3001\u751F\u6210\u6E08\u307F\u306EMakefile\u3092'assets'\u30AA\u30D7\u30B7\u30E7\u30F3\u4ED8\u304D\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f TouchGFX/simulator/gcc/Makefile assets
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30BB\u30C3\u30C8\u3092\u751F\u6210\u3059\u308B\u3082\u30461\u3064\u306E\u65B9\u6CD5\u306F\u3001image-\u3001text/font-\u3001video-converter\u3092\u76F4\u63A5\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Imageconverter`), ` imageconverter\u306F\u3001Linux\u304A\u3088\u3073Windows\u7528\u306B\u4F5C\u6210\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306Etouchgfx\u30D5\u30A9\u30EB\u30C0\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/imageconvert/build`), `\uFF09\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EBimageconvert.out\u3092\u547C\u3073\u51FA\u3059\u3068\u304D\u306B\u3001\u547C\u3073\u51FA\u3057\u5143\u306E\u30D5\u30A9\u30EB\u30C0\u5185\u3067configfile\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `\uFF09\u30D5\u30A1\u30A4\u30EB\u3092\u691C\u7D22\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Textconverter`), ` textconverter\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306Etouchgfx\u30D5\u30A9\u30EB\u30C0\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/textconvert`), `\uFF09\u306Bruby\u30D5\u30A1\u30A4\u30EB\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `main.rb`), `\uFF09\u3068\u3057\u3066\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Videoconverter`), ` videoconverter\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306Etouchgfx\u30D5\u30A9\u30EB\u30C0\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/videoconvert`), `\uFF09\u306Bruby\u30D5\u30A1\u30A4\u30EB\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoconvert.rb`), `\uFF09\u3068\u3057\u3066\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-and-debugging"
  }), `\u30D5\u30E9\u30C3\u30B7\u30E5\u3068\u30C7\u30D0\u30C3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30F3\u30AB\u306E\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.elf`), `\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.hex`), `\u30D5\u30A1\u30A4\u30EB\u304C\u51FA\u529B\u3068\u3057\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u307B\u3068\u3093\u3069\u306EIDE\u304B\u3089TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u914D\u7F6E\u3057\u3066\u30C7\u30D0\u30C3\u30B0\u3067\u304D\u307E\u3059\u3002\u901A\u5E38\u306F\u3001GDB\u30B5\u30FC\u30D0\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u4F7F\u7528\u3059\u308BIDE\u304C\u63D0\u4F9B\u3059\u308B\u4ED6\u306E\u4F55\u3089\u304B\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u4F7F\u7528\u53EF\u80FD\u306AIDE\u3054\u3068\u306E\u5177\u4F53\u7684\u306A\u30DD\u30A4\u30F3\u30BF\u306F\u63D0\u4F9B\u3067\u304D\u307E\u305B\u3093\u304C\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "compiling-and-flashing"
  }), `\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5`), `\u300D\u306E\u8A18\u4E8B\u304B\u3089\u30D2\u30F3\u30C8\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u305D\u306E\u8A18\u4E8B\u3067\u306F\u3001GCC\u3067\u751F\u6210\u3055\u308C\u305FELF / HEX\u30D5\u30A1\u30A4\u30EB\u306B\u3088\u3063\u3066\u30DC\u30FC\u30C9\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);