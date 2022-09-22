"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5222],{

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

/***/ 6167:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
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
  id: "using-serial-flash",
  title: "\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u7528\u306B\u30B7\u30EA\u30A2\u30EBFlash\u306E\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-serial-flash",
  "id": "development/scenarios/using-serial-flash",
  "title": "\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u7528\u306B\u30B7\u30EA\u30A2\u30EBFlash\u306E\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-serial-flash",
  "permalink": "/4.20/ja/docs/development/scenarios/using-serial-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-serial-flash",
    "title": "\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u7528\u306B\u30B7\u30EA\u30A2\u30EBFlash\u306E\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528",
    "permalink": "/4.20/ja/docs/development/scenarios/using-non-memory-mapped-flash"
  },
  "next": {
    "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u7528\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528",
    "permalink": "/4.20/ja/docs/development/scenarios/fonts-in-unmapped-flash"
  }
};
const assets = {};


const toc = [{
  value: "\u8A2D\u5B9A",
  id: "configuration",
  level: 2
}, {
  value: "\u5B9F\u88C5",
  id: "implementation",
  level: 2
}, {
  value: "\u753B\u50CF",
  id: "images",
  level: 2
}, {
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF",
  id: "font-data",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30B7\u30EA\u30A2\u30EBFlash\uFF08\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF09\u3092\u4F7F\u7528\u3057\u3066\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u3092\u4FDD\u5B58\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u8AAC\u660E\u3059\u308B\u624B\u6CD5\u306F\u3001STM32G0\u3084\u3001\u305D\u306E\u4ED6\u306ERAM\u642D\u8F09\u91CF\u304C\u6975\u3081\u3066\u5C11\u306A\u3044\u30C7\u30D0\u30A4\u30B9\u3067\u7279\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EBFlash\u3068\u4E00\u7DD2\u306B\u3088\u304F\u4F7F\u7528\u3055\u308C\u308B\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u6982\u8981\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "lowering-memory-usage-with-partial-framebuffer"
  }), `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u3088\u308B\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u8EFD\u6E1B`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u307E\u305F\u3001\u975E\u30DE\u30C3\u30D7\u30C9Flash\u304B\u3089RAM\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u65B9\u6CD5\u306E\u6982\u8981\u306B\u3064\u3044\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-non-memory-mapped-flash"
  }), `\u753B\u50CF\u4FDD\u5B58\u306E\u305F\u3081\u306E\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306E\u4F7F\u7528`), `\u3082\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configuration"
  }), `\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30B7\u30EA\u30A2\u30EBFlash\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001TouchGFX Generator\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u3001"Additional Features"\u306E\u4E2D\u306B\u3042\u308B"External Data Reader"\u3092\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "Additional Features\u306EData Reader"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6A5F\u80FD\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001TouchGFX Generator\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u3055\u308C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), ` LCD\u30AF\u30E9\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u3055\u3089\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader`), `\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u3082\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,8-9}",
    "{2-2,8-9}": true
  }), `static TouchGFXDataReader dataReader;
static LCD16bppSerialFlash display(dataReader);
static ApplicationFontProvider fontProvider;
...
void touchgfx_init()
{
    ...
    hal.setDataReader(&dataReader);
    fontProvider.setFlashReader(&dataReader);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u30AF\u30E9\u30B9\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u4F5C\u6210\u3055\u308C\u3001\u305D\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304Cdisplay\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001HAL\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001ApplicationFontProvider\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u6E21\u3055\u308C\u307E\u3059\u3002 \u3053\u306E3\u3064\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001dataReader\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B7\u30EA\u30A2\u30EBFlash\u5185\u306E\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002 \u305D\u306E\u30C7\u30FC\u30BF\u306F\u753B\u50CF\u307E\u305F\u306F\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30B9\u30C6\u30E0\uFF65\u30D7\u30ED\u30B0\u30E9\u30DE\u306F\u3001\u5B9F\u969B\u306BFlash\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u305F\u3081\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u30AF\u30E9\u30B9\u306E\u5B9F\u88C5\u3092\u5B8C\u4E86\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "implementation"
  }), `\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFXDataReader\u30AF\u30E9\u30B9\u306F\u3001touchgfx::FlashDataReader\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5B9F\u88C5\u3057\u307E\u3059\u3002 \u3053\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u306F\u6B21\u306E4\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u3042\u308A\u3001\u305D\u308C\u305E\u308C\u3092\u7279\u5B9A\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "include/touchgfx/hal/FlashDataReader.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    bool addressIsAddressable(const void* address)
    void copyData(const void* src, void* dst, uint32_t bytes)
    void startFlashLineRead(const void* src, uint32_t bytes)
    const uint8_t* waitFlashReadComplete()
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `addressIsAddressable`), `\u30E1\u30BD\u30C3\u30C9\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\u30AF\u30E9\u30B9\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u3001\u30C7\u30FC\u30BF\u3092\u76F4\u63A5\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u306E\u304B\uFF08\u3059\u306A\u308F\u3061\u3001\u5185\u90E8RAM\u307E\u305F\u306F\u5185\u90E8Flash\u5185\u306B\u3042\u308B\u306E\u304B\uFF09\u3001\u3042\u308B\u3044\u306FdataReader\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u7D4C\u7531\u3067\u8AAD\u307F\u53D6\u308B\u5FC5\u8981\u304C\u3042\u308B\u306E\u304B\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `copyData`), `*\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30C7\u30FC\u30BF\u3092Flash\u304B\u3089RAM\u3078\u540C\u671F\u7684\u306B\u30B3\u30D4\u30FC\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306F\u4E00\u822C\u7684\u306B\u3001\u305D\u308C\u4EE5\u4E0A\u306E\u30C7\u30FC\u30BF\u51E6\u7406\u3092\u884C\u308F\u306A\u3044\u5834\u5408\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001 \u5857\u308A\u3064\u3076\u3057\u753B\u50CF\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3059\u308B\u5834\u5408\u306A\u3069\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFlashLineRead`), `\u30E1\u30BD\u30C3\u30C9\u306F\u3001Flash\u304B\u3089\u8907\u6570\u884C\u306E\u30C7\u30FC\u30BF\u3092\u5FC5\u8981\u3068\u3059\u308B\u5834\u5408\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFlashLineRead`), `\u30E1\u30BD\u30C3\u30C9\u306F\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u53D6\u308A\u3092\u59CB\u52D5\u3057\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u975E\u540C\u671F\u7684\u306A\u8AAD\u307F\u53D6\u308A\u3092\u59CB\u52D5\u3057\u3001\u8AAD\u307F\u53D6\u308A\u958B\u59CB\u5F8C\u306B\u3059\u3050\u306B\u623B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 waitFlashReadComplete\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u8AAD\u307F\u53D6\u308A\u306E\u7D42\u4E86\u3092\u5F85\u3061\u3001\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u30D0\u30C3\u30D5\u30A1\u306B\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\u306F\u3001\uFF08\u4E00\u90E8\u306E\u72B6\u6CC1\u3067\uFF09\u524D\u306B\u8AAD\u307F\u53D6\u3063\u305F\u30C7\u30FC\u30BF\u306E\u51E6\u7406\u4E2D\u306B\u30011\u3064\u306EFlash\u8AAD\u307F\u53D6\u308A\u547D\u4EE4\u3092\u767A\u884C\u3067\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u5B8C\u5168\u306A\u540C\u6642\u51E6\u7406\u3092\u884C\u3046\u306B\u306F\u3001dataReader\u5185\u306B\u5C11\u306A\u304F\u3068\u30822\u3064\u306E\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FlashDataReader`), `\u3092\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u306E2\u3064\u306E\u30AF\u30E9\u30B9\u306B\u751F\u6210\u3057\u307E\u3059\u3002 2\u3064\u306E\u3046\u3061`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u306E\u65B9\u304C\u30B9\u30FC\u30D1\u30FC\u30AF\u30E9\u30B9\u3067\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u5B9F\u88C5\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u5B9F\u88C5\u304C\u9069\u3055\u306A\u3044\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D7\u30ED\u30B0\u30E9\u30DE\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u30AF\u30E9\u30B9\u5185\u3067\u4EEE\u60F3\u95A2\u6570\u306E\u5B9F\u88C5\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u304C\u5B9F\u88C5\u3055\u308C\u308B\u3068\u3001\u305D\u308C\u304C\u52D5\u4F5C\u3059\u308B\u305F\u3081\u306BC\u95A2\u6570\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30B7\u30B9\u30C6\u30E0\uFF65\u30D7\u30ED\u30B0\u30E9\u30DE\u304C\u5B9F\u88C5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C" __weak void DataReader_WaitForReceiveDone();
extern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);
extern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);

void TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)
{
    /* Start transfer using DMA */
    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5B9F\u88C5\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MB1642BDataReader.c`), `\u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Core/Src/MB1642BDataReader.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)
{
    readDataDMA(address24, buffer, length);
}

void readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)
{
    // Pull Flash CS pin low
    isReceivingData = 1;
    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;

    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;

    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5B9F\u88C5\u306F\u3001Flash\u3067\u4F7F\u7528\u3055\u308C\u308B\u30D7\u30ED\u30C8\u30B3\u30EB\u3068\u3001SPI\u3084CS\u7528\u306B\u4F7F\u7528\u3055\u308C\u308BGPIO\u306B\u7279\u5316\u3057\u305F\u3082\u306E\u3067\u3059\u3002 \u6A5F\u80FD\u3055\u305B\u308B\u305F\u3081\u306B\u306F\u30013\u3064\u306EC\u95A2\u6570\u306E\u3059\u3079\u3066\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u30AF\u30E9\u30B9\u5411\u3051\u306B\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "images"
  }), `\u753B\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6982\u8981\u3067\u89E6\u308C\u305F\u3088\u3046\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\u30AF\u30E9\u30B9\u306F\u3001dataReader\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u7D4C\u7531\u3067\u753B\u50CF\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3092\u6A5F\u80FD\u3055\u305B\u308B\u306B\u306F\u3001\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u5909\u66F4\u3057\u3066\u3001\u5185\u90E8Flash\u7BC4\u56F2\u5916\u306E\u30A2\u30C9\u30EC\u30B9\u7BC4\u56F2\u306B\u753B\u50CF\u3092\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32G071\u3067\u306F\u3001\u30B7\u30EA\u30A2\u30EBFlash\u306E\u958B\u59CB\u30A2\u30C9\u30EC\u30B9\u3068\u3057\u3066\u30010x90000000\u3068\u3044\u3046\u30A2\u30C9\u30EC\u30B9\u3092\u9078\u629E\u6E08\u307F\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gcc/STM32G071RBTX_FLASH.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K
  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K
  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M
}

/* Sections */
SECTIONS
{
  ...

  ExtFlashSection :
  {
    *(ExtFlashSection ExtFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH

  FontFlashSection :
  {
    *(FontFlashSection FontFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u308A\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ExtFlashSection`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FontFlashSection`), `\u304C\u30010x90000000\u30A2\u30C9\u30EC\u30B9\u7BC4\u56F2\u5185\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B8B\u3063\u3066\u3044\u308B\u30BF\u30B9\u30AF\u306F\u3001\u30D5\u30E9\u30C3\u30B7\u30E3\uFF65\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8Flash\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeProgrammer\u7528\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30ED\u30FC\u30C0\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u6B21\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30BB\u30AF\u30B7\u30E7\u30F32.3.3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"
  }), `UM2237 STMCubeProgrammer\u30E6\u30FC\u30B6\u30DE\u30CB\u30E5\u30A2\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-data"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u306F\u3001\u30D5\u30A9\u30F3\u30C8\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3068\u30D5\u30A9\u30F3\u30C8\u30FB\u30AD\u30E3\u30E9\u30AF\u30BF\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\uFF08\u5E45\u3068\u9AD8\u3055\uFF09\u304C\u5916\u90E8Flash\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\uFF08\u3069\u3061\u3089\u306E\u30BF\u30A4\u30D7\u306E\u30C7\u30FC\u30BF\u3082FontFlashSection\u5185\u306B\u3042\u308A\u307E\u3059\uFF09\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u3082\u3001\u753B\u9762\u4E0A\u306B\u6587\u5B57\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306BdataReader\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u7D4C\u7531\u3067\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Unmapped Storage Format"\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `include/touchgfx/hal/Config.hpp`), `\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3057\u3066\u3001\u30D5\u30A9\u30F3\u30C8\u30FB\u30AD\u30E3\u30E9\u30AF\u30BF\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u5185\u90E8Flash\u306B\u79FB\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "fonts-in-unmapped-flash"
  }), `\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\u5185\u306E\u30D5\u30A9\u30F3\u30C8`), `\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);