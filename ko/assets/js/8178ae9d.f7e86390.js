"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5423],{

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

/***/ 97531:
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
  title: "TouchGFX\uC5D0\uC11C IDE \uC0AC\uC6A9\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "id": "development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "title": "TouchGFX\uC5D0\uC11C IDE \uC0AC\uC6A9\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-ides-with-touchgfx",
    "title": "TouchGFX\uC5D0\uC11C IDE \uC0AC\uC6A9\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/ko/docs/category/working-with-touchgfx"
  },
  "next": {
    "title": "\uC704\uC82F \uBC0F \uCEE8\uD14C\uC774\uB108",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  }
};
const assets = {};





const toc = [{
  value: "\uC804\uC81C \uC870\uAC74: GCC \uBC84\uC804",
  id: "prerequisite-gcc-version",
  level: 2
}, {
  value: "IDE\uC5D0\uC11C TouchGFX Makefile \uD638\uCD9C\uD558\uAE30",
  id: "invoke-touchgfx-makefile-from-ide",
  level: 2
}, {
  value: "TouchGFX \uCF54\uB4DC \uD30C\uC77C\uC744 \uC790\uCCB4 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uAE30",
  id: "add-touchgfx-code-files-to-your-own-project",
  level: 2
}, {
  value: "\uD544\uC694\uD55C \uD30C\uC77C",
  id: "required-files",
  level: 3
}, {
  value: "Include \uACBD\uB85C",
  id: "include-paths",
  level: 3
}, {
  value: "\uCEF4\uD30C\uC77C\uB7EC \uC2A4\uC704\uCE58",
  id: "compiler-switches",
  level: 3
}, {
  value: "Cortex-M0 cores",
  id: "cortex-m0-cores",
  level: 4
}, {
  value: "Cortex-M4f cores",
  id: "cortex-m4f-cores",
  level: 4
}, {
  value: "Cortex-M7 cores",
  id: "cortex-m7-cores",
  level: 4
}, {
  value: "Cortex-M33 cores",
  id: "cortex-m33-cores",
  level: 4
}, {
  value: "\uB9C1\uCEE4",
  id: "linker",
  level: 3
}, {
  value: "\uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC",
  id: "core-library",
  level: 4
}, {
  value: "\uB9C1\uCEE4 \uC635\uC158",
  id: "linker-options",
  level: 4
}, {
  value: "\uC560\uC14B \uC0DD\uC131",
  id: "asset-generation",
  level: 2
}, {
  value: "\uD50C\uB798\uC2F1 \uBC0F \uB514\uBC84\uAE45",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer \uB610\uB294 STM32CubeMX\uB97C \uD1B5\uD574 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC0C8\uB85C \uC0DD\uC131\uD560 \uB54C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC804\uC6A9 IDE\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uACFC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil uVision `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `(\uD0C0\uAC9F \uC804\uC6A9)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR Embedded Workbench `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `(\uD0C0\uAC9F \uC804\uC6A9)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `(\uD0C0\uAC9F \uC804\uC6A9)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `(\uC2DC\uBBAC\uB808\uC774\uD130 \uC804\uC6A9)`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8, \uC77C\uBD80 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD55C \uBC88\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. STM32CubeMX\uC5D0\uC11C \uC120\uD0DD\uB41C \uB3C4\uAD6C \uCCB4\uC778\uC774 \uC0DD\uC131\uB418\uBA70, \uAE30\uBCF8\uC801\uC73C\uB85C STM32CubeIDE\uAC00 \uC120\uD0DD\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uB3C4\uAD6C \uCCB4\uC778 \uBCC0\uACBD \uBC29\uBC95\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../board-bring-up/how-to/01-create-project",
    mdxType: "Link"
  }, "\uC5EC\uAE30"), "\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C ARM \uD0C0\uAC9F\uC6A9 GCC \uD06C\uB85C\uC2A4 \uCEF4\uD30C\uC77C\uB7EC\uB97C \uD1B5\uD55C \uC258 \uAE30\uBC18 \uCEF4\uD30C\uC77C\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 makefile\uACFC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB3C4 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC774 \uC139\uC158\uC740 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC5D0 \uC788\uC5B4 \uD0C0\uC0AC GCC \uAE30\uBC18 IDE\uB97C \uAD6C\uC131\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C GCC \uD06C\uB85C\uC2A4 \uCEF4\uD30C\uC77C\uB7EC\uB97C \uD638\uCD9C\uD560 \uC218 \uC788\uB294 IDE\uB77C\uBA74 \uBB34\uC5C7\uC774\uB4E0 \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC77C\uBC18 \uC6A9\uC5B4\uB97C \uC0AC\uC6A9\uD574 \uC124\uC815 \uC808\uCC28\uB97C \uC124\uBA85\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 IDE\uB97C \uC9C0\uC6D0\uD558\uC9C0\uB294 \uC54A\uC9C0\uB9CC \uC5EC\uAE30\uC11C \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uAC00 \uC990\uACA8 \uC0AC\uC6A9\uD558\uB294 IDE\uC640 \uD568\uAED8 TouchGFX\uB97C \uC0AC\uC6A9\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX\uC5D0\uC11C \uB2E4\uB978 IDE\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB450 \uAC00\uC9C0 \uC811\uADFC \uBC29\uC2DD\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. \uD55C \uAC00\uC9C0\uB294 IDE\uC5D0\uC11C TouchGFX Makefile\uC744 \uD638\uCD9C\uD558\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4. \uC5B4\uCA4C\uBA74 \uAC00\uC7A5 \uC26C\uC6B4 \uBC29\uC2DD\uC77C \uC218 \uC788\uC9C0\uB9CC, \uCEF4\uD30C\uC77C \uD504\uB85C\uC138\uC2A4\uC640 \uD30C\uC77C \uC704\uCE58\uB97C \uC880 \uB354 \uD655\uC2E4\uD558\uAC8C \uC81C\uC5B4\uD558\uACE0\uC790 \uD560 \uACBD\uC6B0\uC5D0\uB294 \uBC14\uB78C\uC9C1\uD55C \uBC29\uBC95\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC544\uB2C8\uBA74 \uD544\uC694\uD55C TouchGFX \uD30C\uC77C\uACFC \uAD6C\uC131 \uC635\uC158\uC744 \uAE30\uC874 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC9C1\uC811 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisite-gcc-version"
  }), `\uC804\uC81C \uC870\uAC74: GCC \uBC84\uC804`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC740 TouchGFX \uD658\uACBD \uC258\uC5D0\uC11C \uBC30\uD3EC\uB418\uB294 GCC \uD06C\uB85C\uC2A4 \uCEF4\uD30C\uC77C\uB7EC \uB3C4\uAD6C \uCCB4\uC778\uC744 \uC0AC\uC6A9\uD558\uAC70\uB098, \uD639\uC740 \uD658\uACBD \uC258 \uB3C4\uAD6C \uCCB4\uC778\uC744 \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uB41C TouchGFX \uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uC5F0\uACB0\uB418\uB294 GCC \uB3C4\uAD6C \uCCB4\uC778\uC744 \uC120\uD0DD\uD558\uC5EC \uC0AC\uC6A9\uD558\uB294 \uAC83\uC73C\uB85C \uAC00\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uB418\uB294 GCC \uCEF4\uD30C\uC77C\uB7EC:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-gcc.exe -v
Target: arm-none-eabi
Thread model: single
gcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uCEF4\uD30C\uC77C\uB7EC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://launchpad.net/gcc-arm-embedded"
  }), `https://launchpad.net/gcc-arm-embedded`), `\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "invoke-touchgfx-makefile-from-ide"
  }), `IDE\uC5D0\uC11C TouchGFX Makefile \uD638\uCD9C\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uD55C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD3EC\uD568\uB41C Makefile\uC744 \uD638\uCD9C\uD558\uAE30\uB9CC \uD558\uBA74 IDE\uC5D0\uC11C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBE60\uB974\uACE0 \uAC04\uD3B8\uD558\uAC8C \uCEF4\uD30C\uC77C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX \uD658\uACBD \uC258\uC744 \uC0AC\uC6A9\uD574 \uD0C0\uAC9F\uC6A9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCEF4\uD30C\uC77C\uD558\uB824\uBA74 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB8E8\uD2B8 \uB514\uB809\uD130\uB9AC\uB85C \uC774\uB3D9\uD558\uC5EC \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC774\uC81C\uB294 TouchGFX \uD658\uACBD \uC258\uC5D0\uC11C make \uBA85\uB839\uC744 \uD638\uCD9C\uD558\uC9C0 \uC54A\uACE0 IDE\uC5D0\uC11C \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC258(make, arm-none-eabi-gcc, ..)\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uC2E4\uD589 \uD30C\uC77C\uC740 \uC77C\uBC18\uC801\uC778 Windows x86 \uC2E4\uD589 \uD30C\uC77C\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC77C\uBC18\uC801\uC778 \uBA85\uB839 \uD504\uB86C\uD504\uD2B8\uB85C\uB3C4 make \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uC544\uB798\uC640 \uAC19\uC774 \uD658\uACBD \uBCC0\uC218\uAC00 \uAD6C\uC131\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin
C:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD544\uC694\uD55C Windows \uD658\uACBD \uBCC0\uC218\uB97C \uC124\uC815\uD588\uB2E4\uBA74 \uC774\uC81C IDE\uC5D0\uC11C \uD574\uB2F9\uD558\uB294 TouchGFX Makefile\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `make`), ` \uBA85\uB839\uC744 \uBC14\uB85C \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2E4\uD589\uD574\uC57C \uD560 \uC815\uD655\uD55C \uBA85\uB839\uC740 \uC258\uC5D0\uC11C \uCEF4\uD30C\uC77C\uD560 \uB54C\uC640 \uB3D9\uC77C\uD558\uBA70, \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC774\uB54C \uD604\uC7AC \uB514\uB809\uD130\uB9AC\uAC00 \uCEF4\uD30C\uC77C\uD560 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB8E8\uD2B8 \uB514\uB809\uD130\uB9AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "add-touchgfx-code-files-to-your-own-project"
  }), `TouchGFX \uCF54\uB4DC \uD30C\uC77C\uC744 \uC790\uCCB4 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB807\uC9C0 \uC54A\uACE0 \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4\uC640 \uD30C\uC77C \uC704\uCE58\uC5D0 \uB300\uD55C \uC81C\uC5B4\uB97C \uAC15\uD654\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uAD00\uB828 TouchGFX \uCF54\uB4DC \uD30C\uC77C\uC744 \uAE30\uC874 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uD569\uD55C \uD6C4 \uCEF4\uD30C\uC77C\uC5D0 \uD544\uC694\uD55C include \uACBD\uB85C\uC640 \uCEF4\uD30C\uC77C\uB7EC \uC2A4\uC704\uCE58\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "required-files"
  }), `\uD544\uC694\uD55C \uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE30\uBCF8\uC801\uC73C\uB85C IDE \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uB294 TouchGFX \uD30C\uC77C\uC740 TouchGFX \uD658\uACBD \uC258\uC5D0\uC11C make\uB97C \uC0AC\uC6A9\uD574 \uBE4C\uB4DC\uD560 \uB54C \uCEF4\uD30C\uC77C\uD558\uB294 \uD30C\uC77C\uACFC \uB3D9\uC77C\uD574\uC57C \uD569\uB2C8\uB2E4. \uCD94\uAC00\uB418\uB294 \uD30C\uC77C\uC740 \uB300\uC0C1 \uBCF4\uB4DC\uC5D0 \uB530\uB77C \uB2E4\uB978\uB370, \uC774\uB294 \uAC01 \uBCF4\uB4DC\uB9C8\uB2E4 \uD558\uC704 \uB808\uBCA8(low-level) \uB4DC\uB77C\uC774\uBC84\uAC00 \uB2E4\uB974\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uD544\uC694\uD55C \uD30C\uC77C\uC744 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 \uD574\uB2F9\uD558\uB294 \uBCF4\uB4DC\uC5D0 TouchGFX \uD658\uACBD \uC258\uC744 \uC0AC\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCEF4\uD30C\uC77C\uD574\uBCF4\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uCEF4\uD30C\uC77C \uD504\uB85C\uC138\uC2A4\uC5D0\uC11C \uCEF4\uD30C\uC77C\uB418\uB294 \uD30C\uC77C\uC744 \uBAA8\uB450 \uC54C\uB824\uC8FC\uAE30 \uB54C\uBB38\uC5D0 \uCD94\uAC00\uD574\uC57C \uD560 \uD30C\uC77C \uBAA9\uB85D\uC744 \uC815\uD655\uD788 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "include-paths"
  }), `Include \uACBD\uB85C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C include \uACBD\uB85C\uB97C \uCEF4\uD30C\uC77C\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\uC704\uC758 include \uACBD\uB85C \uC678\uC5D0 \uBCF4\uB4DC \uC804\uC6A9 \uCF54\uB4DC\uC5D0\uB3C4 include \uACBD\uB85C\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uAD00\uB828 \uC815\uBCF4\uB294 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gcc/Makefile"), " \uD30C\uC77C\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiler-switches"
  }), `\uCEF4\uD30C\uC77C\uB7EC \uC2A4\uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `include \uACBD\uB85C\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uD65C\uC131\uD654\uD574\uC57C \uD558\uB294 \uC77C\uBC18 \uCEF4\uD30C\uC77C\uB7EC \uC2A4\uC704\uCE58\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uD504\uB85C\uC138\uC11C \uCF54\uC5B4 \uBC0F \uC2E4\uC81C \uBCF4\uB4DC \uC804\uC6A9 \uCEF4\uD30C\uC77C\uB7EC \uC2A4\uC704\uCE58\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX \uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uCEF4\uD30C\uC77C\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uCEF4\uD30C\uC77C\uB7EC \uC2A4\uC704\uCE58\uB294 \uAC01 \uCF54\uC5B4\uBCC4\uB85C \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4. \uC774\uB4E4 \uC635\uC158 \uC911\uC5D0\uB294 \uCF54\uB4DC\uB97C \uCEF4\uD30C\uC77C\uD560 \uB54C \uB9C1\uCEE4\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB418\uAC8C \uD558\uB294 \uD544\uC218 \uC635\uC158\uACFC \uC120\uD0DD \uC0AC\uD56D\uC778 \uC635\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uAC83\uC73C\uB85C \uC54C\uB824\uC9C4 \uC635\uC158\uC740 \uAD75\uAC8C \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m0-cores"
  }), `Cortex-M0 cores`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m4f-cores"
  }), `Cortex-M4f cores`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m7-cores"
  }), `Cortex-M7 cores`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "cortex-m33-cores"
  }), `Cortex-M33 cores`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""`), ` -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker"
  }), `\uB9C1\uCEE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "core-library"
  }), `\uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uC5F0\uACB0\uD574\uC57C \uD569\uB2C8\uB2E4. MCU\uC5D0 \uB530\uB77C \uB2E4\uB974\uC9C0\uB9CC \uB2E4\uC74C \uC911 \uD558\uB098\uB97C \uC5F0\uACB0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `.../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a
.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-options"
  }), `\uB9C1\uCEE4 \uC635\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC77C\uBD80 \uB9C1\uCEE4 \uC635\uC158\uB3C4 \uD544\uC694\uD569\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC635\uC158\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp
Cortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
Cortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "asset-generation"
  }), `\uC560\uC14B \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uC81D\uD2B8\uB97C \uCEF4\uD30C\uC77C\uD558\uB824\uBA74 \uC560\uC14B(asset)\uB3C4 \uBC18\uB4DC\uC2DC \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC740 \uC544\uB798\uC640 \uAC19\uC774 'assets\u2019 \uC635\uC158\uC744 \uC0AC\uC6A9\uD574 \uC0DD\uC131\uB41C Makefile\uC744 \uD638\uCD9C\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f TouchGFX/simulator/gcc/Makefile assets
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610 \uB2E4\uB978 \uBC29\uBC95\uC740 \uC544\uB798\uC640 \uAC19\uC774 \uC774\uBBF8\uC9C0, \uD14D\uC2A4\uD2B8/\uD3F0\uD2B8 \uBC0F \uBE44\uB514\uC624 \uBCC0\uD658 \uB3C4\uAD6C\uB97C \uBC14\uB85C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Imageconverter`), ` Imageconverter\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C Linux\uC640 Windows\uC6A9\uC73C\uB85C \uBE4C\uB4DC\uB41C touchgfx \uD3F4\uB354\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/imageconvert/build`), `\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Imageconvert.out \uC2E4\uD589 \uD30C\uC77C\uC744 \uD638\uCD9C\uD558\uBA74 imageconverter\uAC00 \uD638\uCD9C\uB41C \uD3F4\uB354\uC5D0\uC11C configfile(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `) \uD30C\uC77C\uC744 \uCC3E\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Textconverter`), ` Textconverter\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 touchgfx \uD3F4\uB354\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/textconvert`), `\uC5D0\uC11C ruby \uD30C\uC77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `main.rb`), `\uB85C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Videoconverter`), ` Videoconverter\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 touchgfx \uD3F4\uB354\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Middlewares/ST/touchgfx/framework/tools/videoconvert`), `\uC5D0\uC11C ruby \uD30C\uC77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `videoconvert.rb`), `\uB85C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-and-debugging"
  }), `\uD50C\uB798\uC2F1 \uBC0F \uB514\uBC84\uAE45`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C1\uCEE4 \uC124\uC815\uC5D0 \uB530\uB77C \uB2E4\uB974\uC9C0\uB9CC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.elf`), ` \uB610\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.hex`), ` \uD30C\uC77C\uC774 \uC0DD\uC131\uB420 \uAC00\uB2A5\uC131\uC774 \uB9E4\uC6B0 \uB192\uC2B5\uB2C8\uB2E4. TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uB300\uBD80\uBD84 IDE\uC5D0\uC11C \uBC30\uD3EC\uD558\uC5EC \uB514\uBC84\uAE45\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC77C\uBC18\uC801\uC73C\uB85C GDB \uC11C\uBC84\uAC00 \uB514\uBC84\uAE45\uC5D0 \uC0AC\uC6A9\uB418\uC9C0\uB9CC \uADF8 \uBC16\uC5D0 IDE\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uBC29\uC2DD\uC774 \uC0AC\uC6A9\uB418\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uB418\uB294 IDE\uB9C8\uB2E4 \uC77C\uC77C\uC774 \uD3EC\uC778\uD130\uB97C \uAD6C\uCCB4\uC801\uC73C\uB85C \uC5B8\uAE09\uD560 \uC218\uB294 \uC5C6\uC9C0\uB9CC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "compiling-and-flashing"
  }), `\uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1`), ` \uC139\uC158\uC5D0\uC11C \uC88B\uC740 \uBC29\uBC95\uC744 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 GCC\uC5D0\uC11C \uC0DD\uC131\uB41C ELF/HEX \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD574 \uBCF4\uB4DC\uB97C \uD50C\uB798\uC2F1\uD558\uB294 \uBC29\uBC95\uC774 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);