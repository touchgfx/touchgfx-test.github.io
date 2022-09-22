"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[640],{

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

/***/ 52502:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
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
  id: "compiling-and-flashing",
  title: "Compiling-and-Flashing\uFF08\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "id": "development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "title": "Compiling-and-Flashing\uFF08\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "compiling-and-flashing",
    "title": "Compiling-and-Flashing\uFF08\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/simulator"
  },
  "next": {
    "title": "\u30C7\u30D0\u30C3\u30B0",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/debugging"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30D1\u30A4\u30EB",
  id: "compiling-touchgfx-applications",
  level: 2
}, {
  value: "PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30A4\u30EB",
  id: "compiling-for-pc-simulator",
  level: 3
}, {
  value: "GCC",
  id: "gcc",
  level: 4
}, {
  value: "Visual Studio",
  id: "visual-studio",
  level: 4
}, {
  value: "\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30A4\u30EB",
  id: "compiling-for-target-hardware",
  level: 3
}, {
  value: "STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3078\u306E\u30D5\u30E9\u30C3\u30B7\u30E5",
  id: "flashing-stm32-evaluation-kits",
  level: 2
}, {
  value: "GCC\u3068TouchGFX Designer",
  id: "gcc--touchgfx-designer",
  level: 3
}, {
  value: "STM32CubeIDE",
  id: "stm32cubeide",
  level: 3
}, {
  value: "IAR",
  id: "iar",
  level: 3
}, {
  value: "Keil",
  id: "keil",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30D5\u30E9\u30C3\u30B7\u30E5",
  id: "flashing-custom-hardware",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u5B9F\u884C\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u9032\u3080\u65B9\u6CD5\u3001\u3064\u307E\u308A\u7279\u5B9A\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u304A\u3051\u308B\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\u306E\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "compiling-touchgfx-applications"
  }), `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30D1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u5834\u5408\u306B\u306F2\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u3059\u3002PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-for-pc-simulator"
  }), `PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5411\u3051\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u5834\u5408\u3001GCC\u3068Visual Studio\u306E2\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u3089\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3069\u3061\u3089\u3082TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u306E\u3067\u3001\u5E38\u306B\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "gcc"
  }), `GCC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Makefile\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<touchgfx_application_root_folder>/simulator/gcc/Makefile`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u306FMinGW\u74B0\u5883\u304C\u542B\u307E\u308C\u3066\u304A\u308A\u3001GCC\u30B3\u30F3\u30D1\u30A4\u30E9\u3084GNU Make\u3068\u5171\u306B\u30D7\u30EA\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u751F\u6210\u6E08\u307F\u306EMakefile\u3092PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5411\u3051\u306B\u5BB9\u6613\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Environment\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat`), `\u304B\u3089\u8D77\u52D5\u3059\u308B\u304B\u3001Windows\u30B9\u30BF\u30FC\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u306B\u8FFD\u52A0\u3055\u308C\u305F"TouchGFX x.y.z Environment"\uFF08x\u3001y\u3001z\u306F\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\uFF09\u3068\u3044\u3046\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u304B\u3089\u8D77\u52D5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Environment\u3092\u8D77\u52D5\u3057\u3001TouchGFX Application\u30EB\u30FC\u30C8\uFF65\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u52D5\u3057\u305F\u5F8C\u3001\u6B21\u306B\u793A\u3059\u7C21\u5358\u306A\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066simulator.exe\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f simulator/gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001TouchGFX Environment\u304B\u3089\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u3053\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EB\u3092\u8D77\u52D5\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `./build/bin/simulator.exe
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/main-window#run-simulator"
  }), `Run Simulator`), `\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066TouchGFX Designer\u304B\u3089\u30B3\u30F3\u30D1\u30A4\u30EB\u304A\u3088\u3073\u8D77\u52D5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "visual-studio"
  }), `Visual Studio`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Visual Studio\u3092\u4F7F\u7528\u3057\u3066PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u3001Visual Studio\u3092\u4F7F\u7528\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<touchgfx_application_root_folder>/simulator/msvs/Application.sln`), `\u306B\u3042\u308B\u751F\u6210\u6E08\u307F\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092Visual Studio\u304B\u3089\u76F4\u63A5\u8D77\u52D5\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\u30B3\u30FC\u30C9\u306E\u30C7\u30D0\u30C3\u30B0`), `\u304C\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "GCC\u307E\u305F\u306FVisual Studio\u306B\u3088\u308B\u30B3\u30F3\u30D1\u30A4\u30EB\u3092\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u3042\u3089\u304B\u3058\u3081TouchGFX Designer\u3067", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#generate-code",
    mdxType: "Link"
  }, "Generate"), "\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u304A\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-for-target-hardware"
  }), `\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u5411\u3051\u306E\u30B3\u30F3\u30D1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u5411\u3051\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../introduction/getting-started#application-template--ui-template"
  }), `TouchGFX Board Setup`), `\u30D9\u30FC\u30B9\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5834\u5408\u306F\u6975\u3081\u3066\u7C21\u5358\u3067\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5404\u3005\u306ETouchGFX Board Setup\u306B\u306F\u3001GCC\u3001STM32CubeIDE\u3001IAR\u3001Keil\u5411\u3051\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GCC: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/gcc/MakeFile`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/STM32CubeIDE/.cproject`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/EWARM/Project.eww`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30C4\u30FC\u30EB\uFF65\u30C1\u30A7\u30FC\u30F3\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306FSTM32CubeMX\u304B\u3089STM32CubeIDE\u306B\u5411\u3051\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u3001\u540C\u6642\u306B\u5B58\u5728\u3059\u308B\u308F\u3051\u3067\u306F\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u751F\u6210\u3055\u308C\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u3001STM32CubeMX\u3067\u9078\u629E\u3055\u308C\u308B\u30C4\u30FC\u30EB\uFF65\u30C1\u30A7\u30FC\u30F3\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u306FMinGW\u74B0\u5883\u304C\u542B\u307E\u308C\u3066\u304A\u308A\u3001Arm\u304A\u3088\u3073GNU Make\u7528\u306EGNU Embedded Toolchain\u304C\u30D7\u30EA\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u542B\u307E\u308C\u3066\u3044\u308BMakefile\u3092\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u5411\u3051\u306B\u5BB9\u6613\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Environment\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat`), `\u304B\u3089\u8D77\u52D5\u3059\u308B\u304B\u3001Windows\u30B9\u30BF\u30FC\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u306B\u8FFD\u52A0\u3055\u308C\u305F"TouchGFX x.y.z Environment"\u3068\u3044\u3046\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u304B\u3089\u8D77\u52D5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Environment\u3092\u8D77\u52D5\u3057\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\uFF65\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u52D5\u3057\u305F\u5F8C\u3001\u6B21\u306B\u793A\u3059\u7C21\u5358\u306A\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u5411\u3051\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "GCC\u3001STM32CubeIDE\u3001IAR\u3001\u307E\u305F\u306FKeil\u306B\u3088\u308B\u30B3\u30F3\u30D1\u30A4\u30EB\u3092\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u3042\u3089\u304B\u3058\u3081TouchGFX Designer\u3067", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#generate-code",
    mdxType: "Link"
  }, "Generate"), "\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u304A\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-stm32-evaluation-kits"
  }), `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3078\u306E\u30D5\u30E9\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3078\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\u306F\u3001\u4E8B\u524D\u4F5C\u6210\u3055\u308C\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../introduction/getting-started#application-template--ui-template"
  }), `TouchGFX Board Setup`), `\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u6975\u3081\u3066\u7C21\u5358\u3067\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5404\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u69CB\u7BC9\u6642\u306B\u30D0\u30A4\u30CA\u30EA\u304C\u751F\u6210\u3055\u308C\u3001\u3053\u306E\u30D0\u30A4\u30CA\u30EA\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stsw-link004.html"
  }), `ST Link Utility`), `\u307E\u305F\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer`), `\u306E\u3044\u305A\u308C\u304B\u306B\u3088\u3063\u3066\u30D5\u30E9\u30C3\u30B7\u30E5\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u30D5\u30E9\u30C3\u30B7\u30E5\u3092\u884C\u3046\u306B\u306F\u3053\u308C\u3089\u306E\u30C4\u30FC\u30EB\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30C4\u30FC\u30EB\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5834\u6240\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST Link Utility\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Board Setup\u3067\u306F\u3001IAR\u3001Keil\u3001STM32CubeIDE\u3001\u307E\u305F\u306F\u305D\u306E\u4ED6\u306EIDE\u304B\u3089\u76F4\u63A5\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u305F\u3081\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30ED\u30FC\u30C0\u306F\u63D0\u4F9B\u3055\u308C\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "gcc--touchgfx-designer"
  }), `GCC\u3068TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/gcc/MakeFile`), `\u306B\u3042\u308BTouchGFX Board Setup\u306B\u542B\u307E\u308C\u308BMakefile\u306B\u306F\u3001\u6B21\u306B\u793A\u3059\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30B3\u30DE\u30F3\u30C9\u304C\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001ST Link Utility\u307E\u305F\u306FSTM32CubeProgrammer\uFF08AT\u306B\u3088\u3063\u3066\u7570\u306A\u308B\uFF09\u3092\u4F7F\u7528\u3057\u3066STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u3082\u3061\u308D\u3093\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\uFF65\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001\u30DC\u30FC\u30C9\u3068\u751F\u6210\u3055\u308C\u305F.hex\u30D5\u30A1\u30A4\u30EB\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile flash
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u30D5\u30A1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/TouchGFX/build/bin/target.hex`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8Flash\u306E\u307F\u306B\u66F8\u304D\u8FBC\u307F\u3001\u5916\u90E8Flash\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u5927\u5BB9\u91CF\u306E\u753B\u50CF\u30BB\u30C3\u30C8\u304C\u3042\u308B\u5834\u5408\u3001\u3053\u308C\u306B\u3088\u3063\u3066\u30D5\u30E9\u30C3\u30B7\u30E5\u6642\u9593\u3092\u5927\u5E45\u306B\u77ED\u7E2E\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5916\u90E8Flash\u3078\u306E\u524D\u56DE\u306E\u66F8\u8FBC\u307F\u4EE5\u964D\u306B\u3001\u5916\u90E8Flash\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u5909\u66F4\u304C\u3042\u308A\u3001\u518D\u30D5\u30E9\u30C3\u30B7\u30E5\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u7570\u5E38\u306A\u52D5\u4F5C\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306B\u306F\u3001\u5185\u90E8Flash\u3068\u5916\u90E8Flash\u306E\u4E21\u65B9\u3092\u518D\u30D5\u30E9\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile intflash
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u30D5\u30A1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/TouchGFX/build/bin/intflash.hex`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\u3067\u306F\u3001TouchGFX Designer\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/main-window#run-target"
  }), `Run Target\u30B3\u30DE\u30F3\u30C9`), `\u306B\u3088\u3063\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3067\u304D\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 TouchGFX Designer\u304C\u30D5\u30E9\u30C3\u30B7\u30E5\u306E\u305F\u3081\u306B\u4F7F\u7528\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u306F\u3001TouchGFX Designer\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view"
  }), `Config View`), `\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#build"
  }), `Build\u30BB\u30AF\u30B7\u30E7\u30F3`), `\u306B\u8868\u793A\u3055\u308C\u3001\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubeide"
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\u3067\u306F\u3001STM32CubeIDE\u306B\u3088\u3063\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001STM32CubeProgrammer\u3067\u3001STM32CubeIDE\u304B\u3089\u51FA\u529B\u3055\u308C\u305F.elf\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.elf\u30D5\u30A1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F8B: C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "iar"
  }), `IAR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\u3067\u306F\u3001IAR\u306B\u3088\u3063\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001STM32CubeProgrammer\u3067\u3001IAR\u304B\u3089\u51FA\u529B\u3055\u308C\u305F.hex\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u30D5\u30A1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F8B: C:/TouchGFXProjects/MyApplication/EWARM/STM32F469I-DISCO/STM32F469I-DISCO.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "keil"
  }), `Keil`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\u3067\u306F\u3001Keil\u306B\u3088\u3063\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001STM32CubeProgrammer\u3067\u3001Keil\u304B\u3089\u51FA\u529B\u3055\u308C\u305F.hex\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u30D5\u30A1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F8B: C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-custom-hardware"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30D5\u30E9\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u306A\u3069\u306E\u4E8B\u524D\u5B9A\u7FA9\u3055\u308C\u305F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3067\u306F\u306A\u304F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3067\u3082\u3001STM32CubeProgrammer\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 STM32CubeProgrammer\u306F\u3001\u30E6\u30FC\u30B6\u56FA\u6709\u306E\u5916\u90E8\u30E1\u30E2\u30EA\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30ED\u30FC\u30C9\uFF65\u30E1\u30AB\u30CB\u30BA\u30E0\u304C\u5FC5\u305A\u3057\u3082\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3057\u304B\u3057\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30ED\u30FC\u30C0\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf"
  }), `\u30E6\u30FC\u30B6\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u5916\u90E8\u30E1\u30E2\u30EA\u5411\u3051\u306B\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3055\u308C\u305F\u30ED\u30FC\u30C0\u306E\u958B\u767A\u306B\u95A2\u3059\u308B\u8A18\u8FF0`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);