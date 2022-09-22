"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4153],{

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

/***/ 62331:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93054);
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
  id: "debugging",
  title: "\u30C7\u30D0\u30C3\u30B0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/debugging",
  "id": "development/ui-development/working-with-touchgfx/debugging",
  "title": "\u30C7\u30D0\u30C3\u30B0",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/debugging.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/debugging",
  "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/debugging",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "debugging",
    "title": "\u30C7\u30D0\u30C3\u30B0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Compiling-and-Flashing\uFF08\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"
  },
  "next": {
    "title": "Examples\uFF08\u4F8B\uFF09\u3068Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/examples"
  }
};
const assets = {};



const toc = [{
  value: "\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30C7\u30D0\u30C3\u30B0",
  id: "target-debugging",
  level: 2
}, {
  value: "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u30C7\u30D0\u30C3\u30B0",
  id: "simulator-debugging",
  level: 2
}, {
  value: "DebugPrinter\u306E\u4F7F\u7528",
  id: "using-the-debugprinter",
  level: 2
}, {
  value: "DebugPrinter\u30AF\u30E9\u30B9",
  id: "debugprinter-classes",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001TouchGFX Designer\u3084TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u3001\u958B\u767A\u8005\u306B\u3088\u3063\u3066\u8A18\u8FF0\u3055\u308C\u308BC++\u30D5\u30A1\u30A4\u30EB\u306E\u30BB\u30C3\u30C8\u306A\u306E\u3067\u3001\u4ED6\u306EC++\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u540C\u3058\u3088\u3046\u306B\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "target-debugging"
  }), `\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30C7\u30D0\u30C3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR Workbench\u3001Keil uVision\u3001\u307E\u305F\u306FSTM32CubeIDE\u306A\u3069\u306EIDE\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067\u306E\u30C7\u30D0\u30C3\u30B0\u306F\u3001\u305D\u306EIDE\u306E\u4F7F\u7528\u53EF\u80FD\u306A\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u4F7F\u7528\u3057\u3066\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u3001\u3042\u308B\u3044\u306FTouchGFX Board Setup\u304B\u3089\u76F4\u63A5\u751F\u6210\u3055\u308C\u305FTouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u9078\u629E\u3057\u305F\u30C4\u30FC\u30EB\uFF65\u30C1\u30A7\u30FC\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3059\u3050\u306B\u30C7\u30D0\u30C3\u30B0\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A55\u4FA1\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30B3\u30FC\u30C9\u3068TouchGFX AL\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30DC\u30FC\u30C9\u4E0A\u3067\u306E\u307F\u5B9F\u884C\u3055\u308C\u308B\u306E\u3067\u3001\u305D\u3053\u3067\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306EUI\u90E8\u5206\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067\u3001\u307E\u305F\u306F\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30D0\u30C3\u30B0\u3067\u304D\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067\u306F\u3001\u901A\u5E38\u306F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u901F\u5EA6\u3001\u66F4\u65B0\u983B\u5EA6\u3001\u5FDC\u7B54\u6027\u306A\u3069\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u554F\u984C\u306E\u3088\u3046\u306A\u5185\u5BB9\u3092\u30C7\u30D0\u30C3\u30B0\u3057\u307E\u3059\u3002 \u4ED6\u306EUI\u56FA\u6709\u306E\u554F\u984C\u3082\u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067\u30C7\u30D0\u30C3\u30B0\u3067\u304D\u307E\u3059\u304C\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u305F\u30C7\u30D0\u30C3\u30B0\u306E\u65B9\u304C\u9AD8\u901F\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-debugging"
  }), `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u30C7\u30D0\u30C3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u52D5\u304D\u3001\u9077\u79FB\u3001\u8981\u7D20\u306E\u66F4\u65B0\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\uFF65\u30ED\u30B8\u30C3\u30AF\u3068\u3044\u3063\u305FUI\u95A2\u9023\u306E\u554F\u984C\u306E\u30C7\u30D0\u30C3\u30B0\u306F\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u6BCE\u56DE\u30DC\u30FC\u30C9\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30C6\u30B9\u30C8\u304A\u3088\u3073\u30C7\u30D0\u30C3\u30B0\u3057\u305F\u65B9\u304C\u52B9\u7387\u7684\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306FVisual Studio\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u304A\u308A\u3001\u3053\u306E\u305F\u3081\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u7DAD\u6301\u3057\u3066\u3044\u307E\u3059\u3002 Visual Studio\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u30C7\u30D0\u30C3\u30B0\uFF65\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3057\u3001IDE\u306E\u3059\u3079\u3066\u306E\u30C7\u30D0\u30C3\u30B0\u6A5F\u80FD\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u5834\u5408\u3001Visual Studio\u306B\u5236\u9650\u3055\u308C\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306FGCC\u3067\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u304D\u308B\u306E\u3067\u3001\u5225\u306EIDE\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u306E\u306A\u3089\u3001\u305D\u306EIDE\u3092\u3001GCC\u3067\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u305F\u3081\u306B\u8A2D\u5B9A\u3059\u308B\u53EF\u80FD\u6027\u304C\u6700\u3082\u9AD8\u3044\u3067\u3057\u3087\u3046\u3002 \u305F\u3060\u3057\u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30E6\u30FC\u30B6\u81EA\u8EAB\u3067IDE\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.png",
    width: "640",
    mdxType: "Figure"
  }, "Visual Studio\u3067\u306E\u30C7\u30D0\u30C3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-the-debugprinter"
  }), `DebugPrinter\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DebugPrinter\u30AF\u30E9\u30B9\u306F\u753B\u9762\u4E0A\u306B\u30C7\u30D0\u30C3\u30B0\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7C21\u5358\u306B\u51FA\u529B\u3059\u308B\u65B9\u6CD5\u3067\u3001TextArea\u3084\u305D\u306E\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002 \u305F\u3068\u3048\u3070\u3001\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u304B\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u3001\u3042\u308B\u3044\u306FFPS\u3084\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306A\u3069\u306E\u6E2C\u5B9A\u5024\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DebugPrinter\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u5272\u5F53\u3066\u3066\u3001Application\u30AF\u30E9\u30B9\u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001FrontendApplication\u306E\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u306A\u3069\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D0\u30C3\u30B0\uFF65\u30D7\u30EA\u30F3\u30BF\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u4E92\u63DB\u6027\u3092\u6301\u3064\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6B21\u306E\u8868\u306B\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30AF\u30E9\u30B9\u540D\u3092\u793A\u3057\u307E\u3059\u3002 \u6B21\u306E\u4F8B\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui/src/common/FrontendApplication.cpp`), `\u306B\uFF08LCD16bpp\u3068\u4E92\u63DB\u6027\u304C\u3042\u308B\uFF0916 bpp\u306E\u30C7\u30D0\u30C3\u30B0\uFF65\u30D7\u30EA\u30F3\u30BF\u3092\u8FFD\u52A0\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/lcd/LCD16DebugPrinter.hpp>

LCD16DebugPrinter lcd16DebugPrinter; // Global object

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
  : FrontendApplicationBase(m, heap)
{
  lcd16DebugPrinter.setPosition(0, 0, 240, 40);
  lcd16DebugPrinter.setScale(2);
  lcd16DebugPrinter.setColor(0x00); //black
  Application::setDebugPrinter(&lcd16DebugPrinter);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u5DE6\u4E0A\u306E240 x 40\u30D4\u30AF\u30BB\u30EB\u306BDebugPrinter\u3092\u66F8\u304D\u8FBC\u3080\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002 \u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u4EE5\u4E0B\u3092\u4F7F\u7528\u3057\u3066\u6587\u5B57\u5217\u3092\u51FA\u529B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <stdio.h>

char debugStringBuffer[30];
void updateDebugString()
{
  static int count = 0;
  count++;
  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);
  Application::getDebugPrinter()->setString(debugStringBuffer);
  Application::invalidateDebugRegion();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DebugPrinter::setString\u30E1\u30BD\u30C3\u30C9\u3092\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F55\u5EA6\u3082\u547C\u3073\u51FA\u3059\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u305F\u3060\u3057\u3001\u30D0\u30C3\u30D5\u30A1\u306E\u5185\u5BB9\u3092\u5909\u66F4\u3057\u305F\u5834\u5408\u306B\u306F\u3001invalidateDebugRegion\u3092\u547C\u3073\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u308C\u306B\u3088\u308A\u3001DebugPrinter\u304C\u65B0\u3057\u3044\u5185\u5BB9\u3092\u63CF\u753B\u3057\u307E\u3059\u3002 DebugPrinter\u304C\u30AB\u30D0\u30FC\u3059\u308B\u9818\u57DF\u5185\u306E\u901A\u5E38\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u518D\u63CF\u753B\u3055\u308C\u305F\u5834\u5408\u306B\u3082\u3001DebugPrinter\u306F\u518D\u63CF\u753B\u3092\u884C\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "ASCII 32\uFF08\u30B9\u30DA\u30FC\u30B9\uFF09\u304B\u3089ASCII 126\uFF08~\uFF09\u307E\u3067\u306E\u6587\u5B57\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/debugging/debugprinter.png",
    mdxType: "Figure"
  }, "DebugPrinter\u306E\u4F7F\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "debugprinter-classes"
  }), `DebugPrinter\u30AF\u30E9\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DebugPrinter\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306F\u3001\u4F7F\u7528\u3059\u308BLCD\u30AF\u30E9\u30B9\u3068\u4E92\u63DB\u6027\u3092\u6301\u3064\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6B21\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u3001DebugPrinter\u30AF\u30E9\u30B9\u540D\u304C\u30EA\u30B9\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD\u30AF\u30E9\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DebugPrinter\u30AF\u30E9\u30B9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD1bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD1DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD2bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD2DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD4bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD4DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8ARGB2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8ABGR2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8RGBA2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8BGRA2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16bppSerialFlash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD24bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD24DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD32bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD32DebugPrinter`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3059\u308BLCD\u30AF\u30E9\u30B9\u3068\u4E00\u81F4\u3059\u308BDebugPrinter\u30AF\u30E9\u30B9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001generated/simulator/src/mainBase.cpp\u5185\u306BLCD\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001\u3053\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306FTouchGFX/target/generated/TouchGFXConfiguration.cpp\u5185\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/target/generated/TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `...
static LCD16bpp display;
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u3001LCD\u30AF\u30E9\u30B9\u540D\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);