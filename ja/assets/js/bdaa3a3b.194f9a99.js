"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6046],{

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

/***/ 15461:
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
  id: "using-binary-fonts",
  title: "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "title": "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-fonts",
    "title": "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  },
  "next": {
    "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/font-cache"
  }
};
const assets = {};


const toc = [{
  value: "\u30D5\u30A9\u30F3\u30C8\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u306E\u30B7\u30B9\u30C6\u30E0\uFF65\u30AF\u30E9\u30B9",
  id: "the-font-and-text-system-classes",
  level: 2
}, {
  value: "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528",
  id: "using-binary-fonts",
  level: 2
}, {
  value: "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u751F\u6210\u306E\u305F\u3081\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u8A2D\u5B9A",
  id: "configuring-the-font-converter-to-generate-binary-fonts",
  level: 3
}, {
  value: "\u624B\u52D5\u306B\u3088\u308B\u8A2D\u5B9A",
  id: "manual-configuration",
  level: 3
}, {
  value: "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  id: "installing-the-binary-font",
  level: 3
}, {
  value: "\u30D5\u30A9\u30F3\u30C8\u306E\u30EA\u30BB\u30C3\u30C8",
  id: "resetting-a-font",
  level: 3
}, {
  value: "\u5225\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306E\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u751F\u6210",
  id: "generating-binary-fonts-in-another-project",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u3067\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u306E\u30D5\u30A9\u30F3\u30C8\u3068\u30C6\u30AD\u30B9\u30C8\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306A\u60C5\u5831\u3092\u3044\u304F\u3064\u304B\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002\u3053\u308C\u306F\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u64CD\u4F5C\u3059\u308B\u969B\u306E\u7406\u89E3\u306B\u5F79\u7ACB\u3064\u3082\u306E\u3067\u3059\u3002 2\u756A\u76EE\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D5\u30A9\u30F3\u30C8\u60C5\u5831\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u304A\u3088\u3073\u30EA\u30F3\u30AF\u3059\u308B\u5F93\u6765\u306E\u65B9\u6CD5\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/src`), `\u306E.cpp\u30D5\u30A1\u30A4\u30EB\uFF09\u306B\u4EE3\u308F\u308B\u3082\u306E\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u4E3B\u306A\u5229\u70B9\u306F\u3001\u3088\u308A\u5C0F\u3055\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30A4\u30CA\u30EA\u304C\u5F97\u3089\u308C\u3001\u7570\u306A\u308B\u30D5\u30A9\u30F3\u30C8\uFF65\u30BB\u30C3\u30C8\u3092\u30E6\u30FC\u30B6\u30FC\u306E\u30C7\u30D0\u30A4\u30B9\u306B\u63D0\u4F9B\u3059\u308B\u969B\u306B\u67D4\u8EDF\u6027\u304C\u5F97\u3089\u308C\u308B\u3053\u3068\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u4E2D\u56FD\u5411\u3051\u306E\u30C7\u30D0\u30A4\u30B9\u306B\u306F\u4E2D\u56FD\u8A9E\u30D5\u30A9\u30F3\u30C8\u3001\u65E5\u672C\u5411\u3051\u306E\u30C7\u30D0\u30A4\u30B9\u306B\u306F\u65E5\u672C\u8A9E\u30D5\u30A9\u30F3\u30C8\u3092\u540C\u68B1\u3067\u304D\u307E\u3059\u3002  \u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u6B20\u70B9\u306F\u3001\u30D0\u30A4\u30CA\u30EA\u5168\u4F53\u3092RAM\uFF08\u307E\u305F\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\uFF09\u306B\u8AAD\u307F\u8FBC\u3080\u5FC5\u8981\u304C\u3042\u308A\u3001\u30D5\u30A9\u30F3\u30C8\u306E\u5BB9\u91CF\u304C\u5927\u304D\u3044\u5834\u5408\u306B\u554F\u984C\u304C\u8D77\u3053\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u305B\u308B\u901A\u5E38\u306E\u65B9\u6CD5\u306E\u4E3B\u306A\u5229\u70B9\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u305D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u3059\u308B\u6700\u65B0\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u5E38\u306B\u81EA\u52D5\u7684\u306B\u542B\u307E\u308C\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u308C\u306F\u975E\u5E38\u306B\u7C21\u5358\u304B\u3064\u5B89\u5168\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u6B20\u70B9\u306F\u3001\u30D5\u30A9\u30F3\u30C8\u306B\u3088\u3063\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u80A5\u5927\u5316\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-font-and-text-system-classes"
  }), `\u30D5\u30A9\u30F3\u30C8\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u306E\u30B7\u30B9\u30C6\u30E0\uFF65\u30AF\u30E9\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3067\u306F\u3001TouchGFX\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u4F7F\u7528\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u30D5\u30A9\u30F3\u30C8\u7528\u306E.cpp\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u3001\u751F\u6210\u3055\u308C\u305FUI\u304A\u3088\u3073\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3068\u5171\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306A\u3069\u3092\u4F7F\u7528\u3057\u3066\uFF09\u8868\u793A\u3059\u308B\u5834\u5408\u306F\u3001TypedTextId\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u53C2\u7167\u3057\u307E\u3059\u3002 \u3053\u306ETypedTextId\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u5B9F\u969B\u306E\u6587\u5B57\u3092\u898B\u3064\u3051\u308B\u305F\u3081\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `framework/include/touchgfx/Texts.hpp`), `\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx::Texts`), `\u30AF\u30E9\u30B9\u3092\u901A\u3058\u3066\u30C6\u30AD\u30B9\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text\u30AF\u30E9\u30B9\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u5404\u8A00\u8A9E\u306E\u7FFB\u8A33\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u5099\u3048\u305F\u3001\u30DD\u30A4\u30F3\u30BF\u914D\u5217\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u539F\u5247\u3068\u3057\u3066\u3001\u7FFB\u8A33\u30C6\u30FC\u30D6\u30EB\u3068\u306F\u305D\u306E\u8A00\u8A9E\u3067\u4F7F\u7528\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u6587\u5B57\u5217\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u7279\u5B9A\u8A00\u8A9E\u3078\u306E\u30DE\u30C3\u30D4\u30F3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u3088\u308A\u3001TouchGFX\u306F\u9078\u629E\u3057\u305F\u8A00\u8A9E\u5185\u3067\u7279\u5B9A\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u691C\u7D22\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u304CTouchGFX Designer\u3067\u3001\u307E\u305F\u306F\u76F4\u63A5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `texts.xml`), `\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u751F\u6210\u3059\u308B\u3068\u3001\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u5E38\u306B\u518D\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B\u3059\u308B\u524D\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30F3\u30C8\u3092\u628A\u63E1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u9593\u306E\u3053\u306E\u30DE\u30C3\u30D4\u30F3\u30B0\u306F\u3001TypedTextDatabase\u30AF\u30E9\u30B9\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/texts/include/texts/TypedTextDatabase.hpp`), `\uFF09\u306B\u3088\u3063\u3066\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306Etexts\u30BF\u30D6\u3067\u306F\u3001\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3001\u66F8\u5B57\u9806\u5E8F\uFF08\u201D\u5DE6\u304B\u3089\u53F3\u201D\uFF08LTR\uFF09\u307E\u305F\u306F\u201D\u53F3\u304B\u3089\u5DE6\u201D\uFF08RTL\uFF09\uFF09\u3001\u5404\u30C6\u30AD\u30B9\u30C8\u306E\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8\uFF08\u5DE6\u3001\u53F3\u3001\u4E2D\u592E\uFF09\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3001\u9806\u5E8F\u3001\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u7FFB\u8A33\u8A00\u8A9E\u3054\u3068\u306B\u7570\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u60C5\u5831\u306F\u5404\u8A00\u8A9E\u56FA\u6709\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308ATouchGFX\u306F\u3001\u7279\u5B9A\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30F3\u30C8\u3001\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8\u65B9\u6CD5\u3001\u66F8\u5B57\u306E\u9806\u5E8F\u3092\u5BB9\u6613\u306B\u898B\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u60C5\u5831\u306F\u8A00\u8A9E\u306B\u56FA\u6709"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u56F3\u3067\u306F\u3001TypedTextData\u30C6\u30FC\u30D6\u30EB\u306B3\u3064\u306E\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u8A00\u8A9E\u3054\u3068\u306B1\u3064\u305A\u3064\u3067\u3059\u3002 \u5404\u914D\u5217\u306B3\u3064\u306E\u8981\u7D20\u304C\u3042\u308A\u3001\u3053\u308C\u306F\u30B7\u30B9\u30C6\u30E0\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3054\u3068\u306B1\u3064\u305A\u3064\u3067\u3059\u3002 \u5404\u8981\u7D20\u306F\u30D5\u30A9\u30F3\u30C8\u3001\u8AAD\u53D6\u308A\u9806\u5E8F\u3001\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8\u3092\u8A18\u8FF0\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u304C3\u3064\u306E\u8A00\u8A9E\u3067\u540C\u3058\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u3082\u306E\u306E\u3001\u30C6\u30AD\u30B9\u30C8\u306F\u7570\u306A\u308B\u30D5\u30A9\u30F3\u30C8\uFF08F1\u307E\u305F\u306FF2\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 Fonts\u30C6\u30FC\u30D6\u30EB\u306B\u306F2\u3064\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F2\u3064\u306E\u30D5\u30A9\u30F3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B\u3057\u3088\u3046\u3068\u3059\u308B\u969B\u306B\u3001\u305D\u306E\u7279\u5B9A\u306E\u30C6\u30AD\u30B9\u30C8\u306ETypedTextData\u3092\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\u3057\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u306B\u306F\u3001TouchGFX Designer\u307E\u305F\u306Fxml\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30F3\u30C8\uFF65\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3001\u6587\u5B57\u306E\u9806\u5E8F\uFF08LTR/RTL\uFF09\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u6C34\u5E73\u65B9\u5411\u306E\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8\uFF08\u5DE6\u3001\u53F3\u3001\u4E2D\u592E\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002 TouchGFX\u306FTypedTextData\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\uFF08F1\u307E\u305F\u306FF2\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3059\u308B\u6B63\u3057\u3044\u30D5\u30A9\u30F3\u30C8\u3092\u898B\u3064\u3051\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306F\u3059\u3079\u3066\u3001\u30D5\u30A9\u30F3\u30C8\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308B\u3068\u304D\u306B\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-binary-fonts"
  }), `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u591A\u6570\u306E\u6587\u5B57\u3092\u591A\u304F\u306E\u7570\u306A\u308B\u30D5\u30A9\u30F3\u30C8\u3067\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B5\u30A4\u30BA\u306F\u5927\u5E45\u306B\u5897\u5927\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u554F\u984C\u3092\u7DE9\u548C\u3059\u308B\u305F\u3081\u3001TouchGFX\u3067\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D5\u30A9\u30F3\u30C8\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u306F\u5207\u308A\u96E2\u3055\u308C\u3066\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u5B9F\u884C\u6642\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u8AAD\u307F\u8FBC\u307F\u3001TouchGFX\u306B\u63D0\u4F9B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001SD\u30AB\u30FC\u30C9\u306A\u3069\u306E\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u304B\u3089\u30D5\u30A9\u30F3\u30C8\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u3089\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30B7\u30B9\u30C6\u30E0\u306B\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3088\u3046TouchGFX\u306B\u8981\u6C42\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C6\u30FC\u30D6\u30EB\u306B\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u5099\u3048\u4ED8\u3051\u306EFont2\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u4EE5\u964D\u3001TouchGFX\u3067\u306FFont2\u3078\u306E\u30EA\u30F3\u30AF\u304C\u4F7F\u7528\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30C6\u30FC\u30D6\u30EB\u306F\u4F55\u3082\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4F9D\u7136\u3068\u3057\u3066\u540C\u3058\u30D5\u30A9\u30F3\u30C8\uFF08F1\u3068F2\uFF09\u3092\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u3088\u3063\u3066\u53C2\u7167\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-font-converter-to-generate-binary-fonts"
  }), `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u751F\u6210\u306E\u305F\u3081\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306B\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306FTouchGFX Designer\u3067\u7C21\u5358\u306B\u3067\u304D\u307E\u3059\u3002 Config\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001"Text Configuration"\u3092\u9078\u629E\u3057\u3001"Binary font files"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",
    mdxType: "Figure"
  }, "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30FC\u30C9\u3092\u518D\u751F\u6210\u3059\u308B\u3068\u3001TouchGFX\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/bin/`), `\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u751F\u6210\u3057\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/src/`), `\u306E\u901A\u5E38\u306E\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u7A7A\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306B\u3088\u308A\u3001TouchGFX\u304C\u7A7A\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u5B9F\u884C\u6642\u306B\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "manual-configuration"
  }), `\u624B\u52D5\u306B\u3088\u308B\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3092\u4F7F\u7528\u3057\u306A\u304F\u3066\u3082\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306Eapplication.config\u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308Btext_configuration\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3001"binary_fonts"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092"yes"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.config"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `  "text_configuration": {
    "remap": "yes",
    "a4": "yes",
    "binary_translations": "no",
    "binary_fonts": "yes",
    "framebuffer_bpp": "16"
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u56DE\u30A2\u30BB\u30C3\u30C8\u3092\u751F\u6210\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/bin`), `\u30D5\u30A9\u30EB\u30C0\u306B\u5B58\u5728\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-the-binary-font"
  }), `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001RAM\u3084QSPI Flash\u306A\u3069\u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u5185\u306B\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u7528\u610F\u3059\u308B\uFF08\u30DD\u30A4\u30F3\u30BF\u7D4C\u7531\u3067\u76F4\u63A5\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\uFF09\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u901A\u5E38\u3001\u3053\u306E\u305F\u3081\u306B\u306F\u3001eMMC Flash\u306A\u3069\u306E\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F\u30D6\u30ED\u30C3\u30AF\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u4E8B\u524D\u306B\u6307\u5B9A\u3055\u308C\u305F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u306E\u30A2\u30C9\u30EC\u30B9\u306B\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u304C\u66F8\u8FBC\u307E\u308C\u308B\u91CF\u7523\u4E2D\u306B\u3082\u8D77\u3053\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30E1\u30E2\u30EA\u306B\u8AAD\u307F\u8FBC\u3093\u3060\u6642\u70B9\u3067\uFF08\u307E\u3060\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u3063\u3066\u3044\u306A\u3044\u5834\u5408\uFF09\u3001TouchGFX\u3067\u30C7\u30FC\u30BF\u3092\u53C2\u7167\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BinaryFont`), `\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001TouchGFX\u3067\u306F\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u3067\u306F\u306A\u304F\u3001\u305D\u306E\u30D5\u30A9\u30F3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306F\u3001\u305D\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u53C2\u7167\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u306B\u4F7F\u7528\u3059\u308B\u524D\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u30D6\u30FC\u30C8\u5F8C\u3059\u3050\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30D5\u30A9\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FrontApplication.cpp`), `\u306B\u3042\u308BFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u306F\u3001\u4F55\u304B\u63CF\u753B\u3092\u884C\u3046\u524D\u306B\u4E00\u5EA6\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u30E1\u30BD\u30C3\u30C9\u3067\u3082\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306F\u7279\u5B9A\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u307F\u3067\u4F7F\u7528\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u3092\u6301\u3063\u3066\u3044\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002 \u4F7F\u7528\u5F8C\u3001\u30D5\u30A9\u30F3\u30C8\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen()`), `\u3067\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u5185\u90E8RAM\u306B\u8AAD\u307F\u8FBC\u3080\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,19-19,22-22}",
    "{5-5,19-19,22-22}": true
  }), `//read the file into this array in internal RAM
uint8_t fontdata[10000];

//binary font object using the data
BinaryFont bf;

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    //read the binary font from a file
    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");
    if (font)
    {
        //read data from the file
        fread(fontdata, 1, 10000, font);
        fclose(font);

        //initialize BinaryFont object in bf using placement new
        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);

        //replace application font 'DEFAULT' with the binary font
        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u3001\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\u305F\u3081\u306E\u6B63\u78BA\u306A\u30B3\u30FC\u30C9\u306F\u3001\u30E6\u30FC\u30B6\u306E\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u3084\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u57FA\u672C\u7684\u306A\u624B\u9806\u306F\u3001\u30E1\u30E2\u30EA\u5185\u3067\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u53EF\u80FD\u306B\u3057\u3066\u3001\u305D\u306E\u30C7\u30FC\u30BF\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u4F7F\u7528\u3057\u3066BinaryFont\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u521D\u671F\u5316\u3057\u3001\u6700\u5F8C\u306BBinaryFont\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092TouchGFX\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedTextDatabase`), `\u306B\u6E21\u3059\u3068\u3044\u3046\u6D41\u308C\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `setFont\u306E\u547C\u3073\u51FA\u3057\u306E\u5F8C\u3001TouchGFX\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\uFF09\u3067\u306F\u306A\u304F\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "resetting-a-font"
  }), `\u30D5\u30A9\u30F3\u30C8\u306E\u30EA\u30BB\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528\u5F8C\u306B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u5143\u306E\u30D5\u30A9\u30F3\u30C8\u306B\u623B\u3059\u5FC5\u8981\u304C\u751F\u3058\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u8A00\u8A9E\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306A\u3069\u3067\u3059\u3002 TypedTextDatabase\u306B\u3042\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `resetFont()`), `\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30A9\u30F3\u30C8\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u7D44\u8FBC\u307F\u30D5\u30A9\u30F3\u30C8\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//reset to original font
TypedTextDatabase::resetFont(DEFAULT);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u547C\u3073\u51FA\u3057\u306E\u5F8C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306B\u3088\u3063\u3066\u5360\u6709\u3055\u308C\u3066\u3044\u305F\u30E1\u30E2\u30EA\u3092\u518D\u5229\u7528\u3057\u3066\u3001\u65B0\u3057\u3044\u30D5\u30A9\u30F3\u30C8\u307E\u305F\u306F\u5225\u306E\u76EE\u7684\u7528\u306B\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generating-binary-fonts-in-another-project"
  }), `\u5225\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306E\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u751F\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3001\u901A\u5E38\u30D5\u30A9\u30F3\u30C8\u3068\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u5171\u5B58\u3055\u305B\u305F\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u82F1\u8A9E\u306E\u6587\u5B57\u306F\u901A\u5E38\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u3067\u6240\u6709\u3057\u3001\u4E2D\u56FD\u8A9E\u3068\u65E5\u672C\u8A9E\u306E\u6587\u5B57\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u30C7\u30D0\u30A4\u30B9\u306B\u5185\u8535\u3067\u304D\u308B\u3088\u3046\u306B\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306B\u3057\u305F\u3044\u5834\u5408\u304C\u8003\u3048\u3089\u308C\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306F\u3001TouchGFX Designer\u3067\u306F\u8A2D\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5834\u5408\u306F\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30922\u3064\u4F5C\u6210\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002 1\u3064\u76EE\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF08\u901A\u5E38\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF09\u306B\u306F\u3001\u3059\u3079\u3066\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3068\u901A\u5E38\u30D5\u30A9\u30F3\u30C8\u306EUI\u3092\u542B\u3081\u307E\u3059\u3002 2\u3064\u76EE\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306B\u5341\u5206\u306A\u30C6\u30AD\u30B9\u30C8\uFF08\u307E\u305F\u306F\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u6587\u5B57\uFF09\u306E\u307F\u3092\u542B\u3081\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u76EE\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F"Binary font files"\u306E\u9078\u629E\u3092\u89E3\u9664\u3057\u307E\u3059\u3002 2\u3064\u76EE\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F"Binary font files"\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306ETouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u3068\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\uFF08\u81EA\u5206\u306E\u5229\u7528\u3057\u3084\u3059\u3044\u30D5\u30A9\u30EB\u30C0\u306B\u53CE\u3081\u305F\uFF091\u3064\u76EE\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3001\u4E0A\u306B\u793A\u3057\u305F\u30B3\u30FC\u30C9\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);