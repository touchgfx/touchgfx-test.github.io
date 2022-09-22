"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2883],{

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

/***/ 3419:
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
  id: "font-cache",
  title: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/font-cache",
  "id": "development/ui-development/touchgfx-engine-features/font-cache",
  "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/font-cache",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/font-cache",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "font-cache",
    "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  },
  "next": {
    "title": "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  }
};
const assets = {};


const toc = [{
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5",
  id: "font-caching",
  level: 2
}, {
  value: "\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4F7F\u7528",
  id: "using-the-font-cache-in-application-code",
  level: 2
}, {
  value: "\u6587\u5B57\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
  id: "caching-letters",
  level: 2
}, {
  value: "\u30EA\u30AC\u30C1\u30E3\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
  id: "caching-ligatures",
  level: 2
}, {
  value: "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF",
  id: "memory-usage",
  level: 2
}, {
  value: "GSUB\u30C6\u30FC\u30D6\u30EB\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
  id: "caching-gsub-tables",
  level: 2
}, {
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\uFF65\u30EA\u30FC\u30C0\u306E\u5B9F\u88C5",
  id: "implementing-the-font-file-reader",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F7F\u7528\u3057\u3066TouchGFX\u3067\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u51E6\u7406\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u306E\u524D\u306B\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-binary-fonts"
  }), `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8`), `\u300D\u3092\u304A\u8AAD\u307F\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-caching"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3067\u306F\u30D5\u30A9\u30F3\u30C8\u5168\u4F53\u3092\u30E1\u30E2\u30EA\u306B\u8AAD\u307F\u8FBC\u3080\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u5927\u898F\u6A21\u306A\u4E2D\u56FD\u8A9E\u30D5\u30A9\u30F3\u30C8\u306A\u3069\u3001\u30D5\u30A9\u30F3\u30C8\u306E\u5BB9\u91CF\u304C\u5927\u304D\u3044\u5834\u5408\u3001\u3053\u308C\u306F\u671B\u307E\u3057\u304F\u306A\u3044\u72B6\u614B\u3092\u751F\u3080\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u6587\u5B57\u5217\u306E\u8868\u793A\u306B\u5FC5\u8981\u306A\u6587\u5B57\u306E\u307F\u3092\u5916\u90E8\u30E1\u30E2\u30EA\u304B\u3089\u8AAD\u307F\u8FBC\u3081\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306AFlash\u307E\u305F\u306FRAM\u306B\u30D5\u30A9\u30F3\u30C8\u5168\u4F53\u3092\u5E38\u99D0\u3055\u305B\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u308A\u3001\u3082\u3063\u3068\u5927\u304D\u306A\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u306B\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u56F3\u3067\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u306EFont2\u304C\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3088\u3063\u3066\u7F6E\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002 TouchGFX\u306F\u3001Font2\u3092\u4F7F\u7528\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306B\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30C6\u30FC\u30D6\u30EB\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CachedFont`), `\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u691C\u7D22\u3057\u307E\u3059\u3002 \u3053\u306E\u7279\u6B8A\u30D5\u30A9\u30F3\u30C8\u306FFontCache\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u6587\u5B57\u3092\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CachedFont\u306F\u3001\u30EA\u30F3\u30AF\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\uFF08\u4E0A\u306EFont2\uFF09\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 TouchGFX\u304CCachedFont\u306B\u7279\u5B9A\u306E\u6587\u5B57\u3092\u8981\u6C42\u3059\u308B\u3068\u3001cachedFont\u306F\u307E\u305A\u3001\u7F6E\u304D\u63DB\u3048\u5BFE\u8C61\u3068\u3057\u3066\u901A\u5E38\u30D5\u30A9\u30F3\u30C8\uFF08Font2\uFF09\u3092\u691C\u7D22\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30F3\u30C8\u306F\u7A7A\u306E\u30D5\u30A9\u30F3\u30C8\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3088\u304F\u4F7F\u7528\u3055\u308C\u308B\u3044\u304F\u3064\u304B\u306E\u6587\u5B57\u306E\u9078\u629E\u80A2\u3092\u542B\u3080\u300C\u901A\u5E38\u300D\u30D5\u30A9\u30F3\u30C8\u3067\u3042\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002 \u30D5\u30A9\u30F3\u30C8\u306B\u5FC5\u8981\u306A\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001CachedFont\u306FFontCache\u3092\u8ABF\u3079\u3066\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u6587\u5B57\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u306A\u3044\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u65B9\u5F0F\u3067\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u5FC5\u8981\u304C\u3042\u308B\u6587\u5B57\u306E\u91CF\u304C\u5236\u9650\u3055\u308C\u307E\u3059\u3002\u901A\u5E38\u30D5\u30A9\u30F3\u30C8\u306B\u3059\u3067\u306B\u3042\u308B\u6587\u5B57\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3059\u308B\u5FC5\u8981\u306F\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-the-font-cache-in-application-code"
  }), `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067CachedFont\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001FontCache\u3001\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u3001\u304A\u3088\u3073\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\uFF65\u30EA\u30FC\u30C0\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3042\u3089\u304B\u3058\u3081\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb
FontCache fontCache;
CachedFont cachedFont;  //Cached Font object
FileDataReader reader;  //Filesystem reader object
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FontCache\u3092\u30D0\u30C3\u30D5\u30A1\u304A\u3088\u3073\u30EA\u30FC\u30C0\u306B\u30EA\u30F3\u30AF\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//setup the font cache with buffer and size; and file reader object
fontCache.setMemory(fontdata, 5120);
fontCache.setReader(&reader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u8A2D\u5B9A\u3057\u3001CachedFont\u3092\u521D\u671F\u5316\u3057\u3066TouchGFX\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3067\u306F\u3001CachedFont\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u521D\u671F\u5316\u3059\u308B\u305F\u3081\u306BTextId\u304C\u5FC5\u8981\u3067\u3059\u3002 TextId\u3092\u4F7F\u7528\u3057\u3066\u3001CachedFont\u304C\u30DD\u30A4\u30F3\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u30D5\u30A9\u30F3\u30C8\u3092\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30E6\u30FC\u30B6\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306B\u3042\u308B\u30C6\u30AD\u30B9\u30C8\u3067\u4F7F\u7528\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u3092\u78BA\u5B9F\u306B\u7F6E\u304D\u63DB\u3048\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//initialize the cachedFont object to the font used by T_SINGLEUSEID1
TypedText text = TypedText(T_SINGLEUSEID1);
fontCache.initializeCachedFont(text, &cachedFont);

//replace the linked in font in TouchGFX with cachedFont
TypedTextDatabase::setFont(DEFAULT, &cachedFont);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30B3\u30FC\u30C9\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4EFB\u610F\u306E\u5834\u6240\u306B\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002 \u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u304C\u7279\u5B9A\u306E\u30D3\u30E5\u30FC\u306E\u307F\u3067\u4F7F\u7528\u3055\u308C\u308B\u5834\u5408\u3001\u305D\u306E\u30D3\u30E5\u30FC\u304C\u30B3\u30FC\u30C9\u3092\u633F\u5165\u3059\u308B\u306E\u306B\u9069\u3057\u305F\u5834\u6240\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-letters"
  }), `\u6587\u5B57\u306E\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u307E\u3060\u7A7A\u306E\u72B6\u614B\u3067\u3059\u3002 \u4F55\u304B\u6587\u5B57\u3092\u8868\u793A\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u307E\u305A\u6587\u5B57\u3092\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u8AAD\u307F\u53D6\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001Unicode\u306E\u914D\u5217\uFF08\u6587\u5B57\u5217\uFF09\u3092\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u6E21\u3057\u307E\u3059\u3002 \u6B21\u306E\u4F8B\u3067\u306F\u3001T_SINGLEUSEID1\u304B\u3089\u5358\u7D14\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u6E21\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheString(text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `str`), `\u914D\u5217\u3067\u898B\u3064\u304B\u3063\u305F\u6587\u5B57\u3092\u30EA\u30FC\u30C0\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4ECB\u3057\u3066\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002 \u8AAD\u307F\u53D6\u3089\u308C\u305FUnicode\u306F\u3001TextId\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `text`), `\u5F15\u6570\u3067\u4F7F\u7528\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5F79\u76EE\u306F\u3001\u30EA\u30FC\u30C0\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6B63\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8AAD\u307F\u8FBC\u3080\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-ligatures"
  }), `\u30EA\u30AC\u30C1\u30E3\u306E\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8868\u793A\u3059\u308B\u524D\u306B\u3001Unicode\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u3092\u4ED6\u306EUnicode\u306B\u5909\u63DB\u3059\u308B\u8A00\u8A9E\uFF08\u30A2\u30E9\u30D3\u30A2\u8A9E\u3084\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\u306A\u3069\uFF09\u306B\u306F\u3001\u4E0A\u8A18\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u9069\u3057\u307E\u305B\u3093\u3002 \u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u308B\u306E\u306F\u5143\u306EUnicode\u3067\u3001\u5909\u63DB\u5F8C\u306B\u8868\u793A\u3055\u308C\u308BUnicode\u3067\u306F\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u3001\u6240\u5B9A\u306EUnicode\u3092\u5909\u63DB\u3057\u3001\uFF08\u5909\u63DB\u5F8C\u306B\uFF09\u5FC5\u8981\u306AUnicode\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1 after conversion
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheLigatures(cachedFont, text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-usage"
  }), `\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3067\u306F\u3001\u73FE\u5728\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u3092\u8A08\u7B97\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-gsub-tables"
  }), `GSUB\u30C6\u30FC\u30D6\u30EB\u306E\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306E\u30D5\u30A9\u30F3\u30C8\u3067\u306F\u3001\u63CF\u753B\u6642\u306BGSUB\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u305F\u3060\u305D\u308C\u306F\u3001\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\uFF65\u30D5\u30A9\u30F3\u30C8\u306A\u3069\u5C11\u6570\u306E\u6771\u65B9\u8A00\u8A9E\u306E\u30D5\u30A9\u30F3\u30C8\u306E\u307F\u3067\u3059\u3002 GSUB\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30B7\u30B9\u30C6\u30E0\u306F\u4ED6\u306E\u300C\u7D44\u307F\u5408\u308F\u305B\u300D\u6587\u5B57\u7528\u306B\u3001\u6587\u5B57\u3092\u4E26\u3079\u66FF\u3048\u305F\u308A\u3001\u6587\u5B57\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u3092\u53D6\u308A\u63DB\u3048\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u3053\u306EGSUB\u30C6\u30FC\u30D6\u30EB\u3092\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u306A\u3044\u5834\u5408\u3001\u30C6\u30AD\u30B9\u30C8\u63CF\u753B\u30B7\u30B9\u30C6\u30E0\u3067GSUB\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3067\u304D\u306A\u304F\u306A\u308B\u306E\u3067\u3001\u30D5\u30A9\u30F3\u30C8\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GSUB\u30C6\u30FC\u30D6\u30EB\u3092\u8AAD\u307F\u8FBC\u3080\u306B\u306F\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u3092\u521D\u671F\u5316\u3059\u308B\u3068\u304D\u306B\u8FFD\u52A0\u306E\u5F15\u6570\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `//initialize the cachedFont and load the GSUB table
text = TypedText(T_SINGLEUSEID1);
fontCache.initializeCachedFont(text, &cachedFont, true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "implementing-the-font-file-reader"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\uFF65\u30EA\u30FC\u30C0\u306E\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30B5\u30F3\u30D7\u30EB\uFF65\u30B3\u30FC\u30C9\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308BFileDataReader\u30AF\u30E9\u30B9\u306F\u3001TouchGFX\u306B\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u30E6\u30FC\u30B6\u306E\u4F7F\u7528\u3059\u308B\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306B\u4F9D\u5B58\u3059\u308B\u3082\u306E\u3060\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u901A\u5E38\u306E"stdio"\u4E92\u63DB\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,13-13,17-17,21-21}",
    "{5-5,13-13,17-17,21-21}": true
  }), `class FileDataReader : public FontDataReader
{
public:
    virtual ~FileDataReader() { }
    virtual void open()
    {
        fp = fopen("Font_verdana_20_4bpp.bin", "rb");
        if (!fp)
        {
            touchgfx_printf("Unable to open font file!!!\\n");
        }
    }
    virtual void close()
    {
        fclose(fp);
    }
    virtual void setPosition(uint32_t position)
    {
        fseek(fp, position, SEEK_SET);
    }
    virtual void readData(void* out, uint32_t numberOfBytes)
    {
        fread(out, numberOfBytes, 1, fp);
    }
private:
    FILE* fp;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FileDataReader\u30AF\u30E9\u30B9\u306F\u3001FontCache.hpp\u306B\u3042\u308BFontDataReader\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5B9F\u88C5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FontCache.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-8}",
    "{5-8}": true
  }), `class FontDataReader
{
public:
    virtual ~FontDataReader() { }
    virtual void open() = 0;
    virtual void close() = 0;
    virtual void setPosition(uint32_t position) = 0;
    virtual void readData(void* out, uint32_t numberOfBytes) = 0;
};
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);