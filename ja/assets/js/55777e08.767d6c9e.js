"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8506],{

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

/***/ 10240:
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
  id: "using-binary-translations",
  title: "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "title": "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-translations",
    "title": "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/font-cache"
  },
  "next": {
    "title": "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  }
};
const assets = {};

const toc = [{
  value: "Translations\uFF08\u7FFB\u8A33\uFF09",
  id: "translations",
  level: 3
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u8A2D\u5B9A",
  id: "configuring-the-text-converter",
  level: 3
}, {
  value: "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  id: "installing-a-binary-translation",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u3067\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u901A\u5E38\u3001\u30C6\u30AD\u30B9\u30C8\u7FFB\u8A33\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306F\u52B9\u7387\u7684\u3067\u4F7F\u3044\u3084\u3059\u3044\u3082\u306E\u3067\u3059\u3002 \u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u7FFB\u8A33\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5916\u306B\u4FDD\u6301\u3057\u307E\u3059\u3002 \u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u306F\u72EC\u7ACB\u3057\u305F\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u751F\u6210\u3055\u308C\u3001Flash\u306B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3059\u308B\u304B\u3001SD\u30AB\u30FC\u30C9\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002  \u3053\u308C\u306B\u3088\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005\u304C\u591A\u6570\u306E\u7FFB\u8A33\u3092\u51E6\u7406\u3059\u308B\u3068\u304D\u306B\u5927\u304D\u306A\u67D4\u8EDF\u6027\u304C\u3082\u305F\u3089\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `Translations\uFF08\u7FFB\u8A33\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306EText\u30AF\u30E9\u30B9\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u5404\u8A00\u8A9E\u306E\u7FFB\u8A33\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u5099\u3048\u305F\u3001\u30DD\u30A4\u30F3\u30BF\u914D\u5217\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u539F\u5247\u3068\u3057\u3066\u3001\u7FFB\u8A33\u30C6\u30FC\u30D6\u30EB\u3068\u306F\u305D\u306E\u8A00\u8A9E\u3067\u4F7F\u7528\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u6587\u5B57\u5217\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u7279\u5B9A\u8A00\u8A9E\u3078\u306E\u30DE\u30C3\u30D4\u30F3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u3088\u308A\u3001TouchGFX\u306F\u9078\u629E\u3057\u305F\u8A00\u8A9E\u5185\u3067\u7279\u5B9A\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u691C\u7D22\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3078\u306E\u30DE\u30C3\u30D4\u30F3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u884C\u6642\u306B\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u7D44\u307F\u8FBC\u307E\u308C\u305F\u7FFB\u8A33\u304B\u3089\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 \u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3092\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\uFF08Flash\u307E\u305F\u306FRAM\uFF09\u3067\u4F7F\u7528\u53EF\u80FD\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30C7\u30A3\u30B9\u30AF\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u751F\u6210\u6642\u306BFlash\u306B\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-text-converter"
  }), `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3092\u751F\u6210\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306FTouchGFX Designer 4.13\u3067\u7C21\u5358\u306B\u3067\u304D\u307E\u3059\u3002 Config\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001"Text Configuration"\u3092\u9078\u629E\u3057\u3001"Binary translation files"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.png",
    noShadow: "true",
    width: "900",
    mdxType: "Figure"
  }, "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u306E\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u56DE\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u304Cgenerated/texts/binary\u30D5\u30A9\u30EB\u30C0\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u304C\u751F\u6210\u3055\u308C\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u7FFB\u8A33\u8A00\u8A9E\u306F\u7A7A\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3092\u8AAD\u307F\u8FBC\u3080\u307E\u3067\u30C6\u30AD\u30B9\u30C8\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-a-binary-translation"
  }), `\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u3092\u30E1\u30E2\u30EA\u306B\u8AAD\u307F\u8FBC\u3093\u3060\u3089\u3001TouchGFX\u306B\u3053\u308C\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002 \u3053\u308C\u3067TouchGFX\u304C\u305D\u306E\u7FFB\u8A33\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u306F\u3001\u3053\u306E\u51E6\u7406\u3092\u5225\u306E\u5834\u6240\u3084\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u5B9F\u884C\u3057\u307E\u3059\uFF08\u305F\u3068\u3048\u3070\u3001gui/src/common/FrontApplication.cpp\u306B\u3042\u308BFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u3092\u4F7F\u7528\u3057\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u793A\u3059\u4F8B\u3067\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u82F1\u8A9E\u306E\u7FFB\u8A33\u3092\u8AAD\u307F\u8FBC\u307F\u3001\u305D\u308C\u3092"GB"\u3068\u3044\u3046\u8A00\u8A9E\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-11,15-15,19-19}",
    "{11-11,15-15,19-19}": true
  }), `//read the translation into this global array
uint8_t translation[10000];
...

//read the translation from a file, or change array to a pointer that points
//to the translation data in internal or addressable external flash
FILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");
if (file)
{
    //read data from file
    fread(translation, 1, 10000, file);
    fclose(file);

    //replace empty translation with the binary data
    Texts::setTranslation(GB, translation);

    //always change language to get TouchGFX changed from the
    //empty translation compiled in to the binary translation
    Texts::setLanguage(GB);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7FFB\u8A33\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5F8C\u306B\u3001\u8A00\u8A9E\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u305D\u3046\u3057\u306A\u3044\u3068\u3001TouchGFX\u306F\u4EE5\u524D\u306E\u7FFB\u8A33\u8A00\u8A9E\u3092\u4F7F\u3044\u7D9A\u3051\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u8A00\u8A9E\u306E\u5909\u66F4\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-and-fonts#switching-language"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u73FE\u5728\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u5F37\u5236\u7684\u306B\u518D\u63CF\u753B\u3059\u308B\u304B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\uFF08\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u3067\u4F7F\u7528\u3059\u308B\u8A00\u8A9E\u306E\u7FFB\u8A33\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u308B\u5834\u5408\uFF09\u3002 TouchGFX\u304C\u4F55\u304B\u3092\u81EA\u52D5\u7684\u306B\u518D\u63CF\u753B\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u3001\u30EB\u30FC\u30C8\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u7121\u52B9\u5316\u3059\u308B\u3053\u3068\u3067\u518D\u63CF\u753B\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u308A\u5F37\u5236\u7684\u306B\u518D\u63CF\u753B\u3055\u308C\u307E\u3059\u3002 \u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u5909\u66F4\u3057\u3066\u3059\u3079\u3066\u6700\u521D\u304B\u3089\u518D\u8A2D\u5B9A\u3057\u305F\u65B9\u304C\u3044\u3044\u3053\u3068\u3082\u3042\u308A\u307E\u3059\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u518D\u8A08\u7B97\u3059\u308B\u5834\u5408\u306A\u3069\uFF09\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001TouchGFX Designer\u3067"Change Screen"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u3061\u3089\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u8A18\u4E8B`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);