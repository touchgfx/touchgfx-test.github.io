"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4111],{

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

/***/ 83211:
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
  id: "memory-usage",
  title: "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/memory-usage",
  "id": "basic-concepts/memory-usage",
  "title": "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/memory-usage",
  "permalink": "/4.20/ja/docs/basic-concepts/memory-usage",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "memory-usage",
    "title": "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0",
    "permalink": "/4.20/ja/docs/basic-concepts/operating-system"
  },
  "next": {
    "title": "\u958B\u767A\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/development-introduction"
  }
};
const assets = {};

const toc = [{
  value: "\u6982\u8981",
  id: "introduction",
  level: 2
}, {
  value: "\u9759\u7684\u306A\u30E1\u30E2\u30EA\u5272\u308A\u5F53\u3066",
  id: "static-memory-allocation",
  level: 2
}, {
  value: "\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
  id: "screens-and-widgets",
  level: 3
}, {
  value: "\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9",
  id: "application-code",
  level: 3
}, {
  value: "\u30A2\u30BB\u30C3\u30C8",
  id: "assets",
  level: 3
}, {
  value: "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u30C1\u30A7\u30C3\u30AF",
  id: "checking-memory-usage",
  level: 2
}, {
  value: "\u5185\u90E8RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "\u5185\u90E8Flash",
  id: "internal-flash",
  level: 3
}, {
  value: "\u5916\u90E8Flash",
  id: "external-flash",
  level: 3
}, {
  value: "\u30B5\u30DE\u30EA",
  id: "summary",
  level: 3
}, {
  value: "\u30C7\u30E21",
  id: "demo-1",
  level: 2
}, {
  value: "\u30B5\u30DE\u30EA",
  id: "summary-1",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "introduction"
  }), `\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u4E00\u822C\u7684\u306ATouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F4\u30BF\u30A4\u30D7\u306E\u30E1\u30E2\u30EA\u3092\u4F7F\u7528\u3057\u307E\u3059\u304C\u3001\u3053\u308C\u306F\u4F7F\u7528\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E1\u30E2\u30EA\uFF65\u30BF\u30A4\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528\u6CD5`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8RAM\u306F\u3001\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5EA7\u6A19\u3084\u8272\u306A\u3069\u306E\u8A2D\u5B9A\u30C7\u30FC\u30BF\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u3053\u306B\u306F\u73FE\u5728\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u3044\u304F\u3064\u304B\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `UI\u30BF\u30B9\u30AF\u306E\u5B9F\u884C\u6642\u30B9\u30BF\u30C3\u30AF\u3092\u542B\u3080\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306E\u30E1\u30E2\u30EA\u3082\u5185\u90E8RAM\u306B\u3042\u308A\u307E\u3059\u3002 \u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u3084\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u306A\u3069\u3001\u4ED6\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u3082\u3059\u3079\u3066\u5185\u90E8RAM\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8Flash\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u3001\u4F7F\u7528\u3055\u308C\u308B\u305D\u306E\u4ED6\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\uFF65\u30B3\u30FC\u30C9\u7528\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u306F\u3001\u901A\u5E38\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u7528\u306B\u4F7F\u7528\u3055\u308C\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash\u306F\u3001\u753B\u50CF\u3001\u30D5\u30A9\u30F3\u30C8\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u4FDD\u5B58\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "static-memory-allocation"
  }), `\u9759\u7684\u306A\u30E1\u30E2\u30EA\u5272\u308A\u5F53\u3066`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u9759\u7684\u306A\u30E1\u30E2\u30EA\u5272\u308A\u5F53\u3066\u306E\u307F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u3059\u3079\u3066\u306E\u30E1\u30E2\u30EA\u306F\u4E8B\u524D\u306B\u5272\u308A\u5F53\u3066\u6E08\u307F\u3067\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 TouchGFX\u306B\u3088\u3063\u3066\u5B9F\u884C\u6642\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u30E1\u30E2\u30EA\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001\u958B\u59CB\u6642\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30E1\u30E2\u30EA\u306E\u30B5\u30A4\u30BA\u306B\u9069\u5408\u3057\u3066\u3044\u308C\u3070\u3001\u30E1\u30E2\u30EA\u4E0D\u8DB3\u306B\u9665\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens-and-widgets"
  }), `\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u3001\u591A\u6570\u306EC++\u30AF\u30E9\u30B9\u3092\u958B\u767A\u3059\u308B\u3053\u3068\u3067\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30AF\u30E9\u30B9\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u8A2D\u8A08\u6642\u306BTouchGFX Designer\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 TouchGFX Designer\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u8A2D\u8A08\u3059\u308B\u305F\u3073\u306B\u3001\u30E6\u30FC\u30B6\u306B\u306F\u591A\u6570\u306E\u30AF\u30E9\u30B9\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/model-view-presenter-design-pattern"
  }), `MVP`), `\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\uFF09\u304C\u81EA\u52D5\u7684\u306B\u3082\u305F\u3089\u3055\u308C\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306B\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u8868\u793A\u3059\u308B\u3068\u3001TouchGFX\u306B\u3088\u3063\u3066\u30AF\u30E9\u30B9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5185\u90E8RAM\u306B\u81EA\u52D5\u7684\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30EA\u30FC\u30F3\u304B\u3089\u5225\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5909\u66F4\u3059\u308B\u3068\u3001\u524D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4F7F\u7528\u3055\u308C\u306A\u304F\u306A\u308A\u3001\u65B0\u3057\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u65B0\u3057\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u524D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u305F\u5185\u90E8RAM\u306E\u5834\u6240\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\uFF08\u524D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\uFF09\u3002 \u5185\u90E8RAM\u306F\u4E00\u5EA6\u306B1\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9A\u7FA9\u3055\u308C\u305F\u30AF\u30E9\u30B9\u306B\u57FA\u3065\u3044\u3066\u3001C++\u30B3\u30F3\u30D1\u30A4\u30E9\u306F\u6700\u3082\u5927\u304D\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AF\u30E9\u30B9\u306E\u30B5\u30A4\u30BA\u3092\u8A08\u7B97\u3057\u3001\u305D\u308C\u3089\u306E\u30AF\u30E9\u30B9\u7528\u306B\u30E1\u30E2\u30EA\u3092\u4E88\u7D04\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3064\u307E\u308A\u3001\u5185\u90E8RAM\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6570\u306B\u3088\u3063\u3066\u6C7A\u307E\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u6700\u3082\u5927\u304D\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30B5\u30A4\u30BA\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u7528\u306B\u78BA\u4FDD\u3055\u308C\u308B\u30E1\u30E2\u30EA\u306F\u3001FrontendHeap\u3068\u547C\u3070\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-code"
  }), `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u306F\u901A\u5E38\u306F\u5185\u90E8Flash\u5185\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u306F\u3001\u30E6\u30FC\u30B6\u8A18\u8FF0\u306E\u30B3\u30FC\u30C9\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u30E6\u30FC\u30B6\u304C\u4F7F\u7528\u3059\u308B\u4ED6\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u304B\u3089\u306E\u30B3\u30FC\u30C9\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u304C\u591A\u304F\u306E\u30B3\u30FC\u30C9\u3092\u8A18\u8FF0\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u591A\u304F\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u8FFD\u52A0\u3059\u308C\u3070\u3001\u5F53\u7136\u306A\u304C\u3089\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u306E\u91CF\u3082\u5897\u5927\u3057\u307E\u3059\u3002 \u30E9\u30A4\u30D6\u30E9\u30EA\u304B\u3089\u53D6\u5F97\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u91CF\u306F\u3001\u6A5F\u80FD\u3092\u6700\u521D\u306B\u4F7F\u7528\u3059\u308B\u6642\u70B9\u3067\u5897\u5927\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u6700\u521D\u306B\u3042\u308BButton\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3059\u308B\u3068\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u306EButton\u30B3\u30FC\u30C9\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u542B\u3081\u3089\u308C\u3001\u30B3\u30FC\u30C9\u91CF\u304C\u5897\u5927\u3057\u307E\u3059\u3002 2\u56DE\u76EE\u306BButton\u3092\u540C\u3058\uFF08\u307E\u305F\u306F\u5225\u306E\uFF09\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3059\u308B\u3068\u304D\u306B\u306F\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u304B\u3089\u8FFD\u52A0\u306E\u30B3\u30FC\u30C9\u306F\u53D6\u5F97\u3055\u308C\u306A\u3044\u306E\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u91CF\u306F\u3001\u30E6\u30FC\u30B6\u304C\u8A18\u8FF0\u3057\u305F\u30B3\u30FC\u30C9\u5206\u304BTouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u5206\u3057\u304B\u5897\u5927\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "assets"
  }), `\u30A2\u30BB\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u30D5\u30A9\u30F3\u30C8\u306A\u3069\u306E\u30A2\u30BB\u30C3\u30C8\u306F\u3001c++\u30D5\u30A1\u30A4\u30EB\u306B\u5909\u63DB\u3055\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002 \u30A2\u30BB\u30C3\u30C8\u306E\u30C7\u30FC\u30BF\u306F\u3001\u901A\u5E38\u306F\u5916\u90E8Flash\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u304C\u3001\u5185\u90E8Flash\u306B\u3082\u914D\u7F6E\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u753B\u50CF\u306E\u30B5\u30A4\u30BA\u306B\u6BD4\u4F8B\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B5\u30A4\u30BA\u304C\u5897\u5927\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30C6\u30AD\u30B9\u30C8\u306E1\u6587\u5B57\u306B\u3064\u304D2\u30D0\u30A4\u30C8\u305A\u3064\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5897\u5927\u3057\u307E\u3059\u3002 \u540C\u3058\u6587\u5B57\u5217\u30922\u56DE\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u542B\u3081\u3089\u308C\u308B\u306E\u306F1\u56DE\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u306E\u307F\u304C\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5927\u6587\u5B57\u306EA\u304B\u3089Z\u306E\u307F\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u5C0F\u6587\u5B57\u306Ea\u304B\u3089z\u306E\u30D5\u30A9\u30F3\u30C8\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u542B\u3081\u3089\u308C\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u5C0F\u6587\u5B57\u3092\u4F7F\u7528\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u5F8C\u3067\u8FFD\u52A0\u3057\u305F\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u306E\u30B5\u30A4\u30BA\u304C\u5897\u5927\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u5185\u306E\u6587\u5B57\u306E\u30B5\u30A4\u30BA\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3092\u5897\u3084\u3059\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B5\u30A4\u30BA\u3082\u5897\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-memory-usage"
  }), `\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u30C1\u30A7\u30C3\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306F\u3001\u30EA\u30F3\u30AB\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u8ABF\u3079\u308B\u3068\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001IAR Embedded Workbench\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u8ABF\u3079\u3066\u307F\u307E\u3059\u3002 \u4ED6\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\u3067\u3082\u540C\u3058\u3088\u3046\u306A\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306B\u3001TouchGFX Designer\u3067\u3001STM32F746Discovery\u8A55\u4FA1\u30AD\u30C3\u30C8\u7528\u306E\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/create-project-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Box\u3068Button\u3092\u542B\u3080STM32F746\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092IAR\u3067\u958B\u3044\u305F\u5F8C\u3001IAR\u306B\u3088\u3063\u3066.MAP\u30D5\u30A1\u30A4\u30EB\u304C\u751F\u6210\u3055\u308C\u305F\u3053\u3068\u3092\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/enable-map-file.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30EA\u30F3\u30AB\uFF65\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR\u3067\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u5F8C\u3001\u30EA\u30F3\u30AB\uFF65\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EBSTM32F746G_DISCO.map\u304C\u3001EWARM/STM32F746G_DISCO/List\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR\u306E\u30EA\u30F3\u30AB\uFF65\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u3001\u308F\u304B\u308A\u3084\u3059\u3044\u30B5\u30DE\u30EA\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 MODULE SUMMARY\u3092\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `*******************************************************************************
*** MODULE SUMMARY
***

    Module                                   ro code  ro data  rw data
    ------                                   -------  -------  -------
command line/config:
    ------------------------------------------------------------------
    Total:

C:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]
    ApplicationFontProvider.o                              20
    BitmapDatabase.o                              12       40
    Blue_Buttons_Round_Edge_small.o                    40'800
    Blue_Buttons_Round_Edge_small_pressed.o            40'800
    Font_verdana_10_4bpp_0.o                               24
    Font_verdana_20_4bpp_0.o                               72
    Font_verdana_40_4bpp_0.o                              280
    FrontendApplication.o                         46       60
    FrontendApplicationBase.o                    706      816
    GeneratedFont.o                               84       84
    Kerning_verdana_10_4bpp.o                               4
    Kerning_verdana_20_4bpp.o                               4
    Kerning_verdana_40_4bpp.o                               4
    Model.o                                       10
    OSWrappers.o                                 156        1        9
    STM32DMA.o                                   898      176
    STM32TouchController.o                       162       24        4
...
    heap_4.o                                     444            32'792
...
touchgfx_core.a: [7]
    AbstractButton.o                             136
    AbstractPartition.o                            8
    Application.o                              2'218      290       28
    Bitmap.o                                   1'064      604       36
    Box.o                                        108      104
    Button.o                                     276      308
    ConstFont.o                                   62
    Container.o                                  510      396
    DMA.o                                        558      252
    DisplayTransformation.o                      192
    Drawable.o                                   418
    FontManager.o                                 12                 4
    Gestures.o                                   364       60
    HAL.o                                      1'758      544       18
    LCD24bpp.o                                 2'732    1'604       80
    Screen.o                                   1'924      124
    TouchCalibration.o                           252                76
    TypedText.o                                                     14
    ------------------------------------------------------------------
    Total:                                    12'728    4'286      256

    Gaps                                                    4        3
    Linker created                                         36    2'560
----------------------------------------------------------------------
    Grand Total:                              38'676   88'973   42'731
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F3\u5217\u306E\u6570\u5024\u304C\u3042\u308A\u307E\u3059\u3002 ro code\u3068ro data\u306F\u8AAD\u53D6\u308A\u5C02\u7528\u3067\u3001Flash\u5185\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002 rw data\u306F\u975E\u5B9A\u6570\u306E\u8AAD\u307F\u66F8\u304D\u5909\u6570\u3067\u3001RAM\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30FC\u30D6\u30EB\u5185\u306E\u884C\u306F\u30017\u30D6\u30ED\u30C3\u30AF\u306B\u5206\u5272\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u6700\u521D\u306E\u30D6\u30ED\u30C3\u30AF\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u3059\u3079\u3066\u306E.cpp\u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002 \u6B21\u306E6\u30D6\u30ED\u30C3\u30AF\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3055\u308C\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u3059\uFF08.a\u30D5\u30A1\u30A4\u30EB\uFF09\u3002 \u6700\u5F8C\u306E1\u3064\u304CTouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u304B\u3089\u306F\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\uFF08"touchgfx_core.a: `, `[7]`, `"\u30BB\u30AF\u30B7\u30E7\u30F3\uFF09\u306B\u3088\u3063\u306612,728\u30D0\u30A4\u30C8\u306E\u30B3\u30FC\u30C9\uFF08\u304A\u3088\u30734,286\u30D0\u30A4\u30C8\u306E\u5B9A\u6570\u30C7\u30FC\u30BF\uFF09\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8RAM\u306E\u5408\u8A08\u4F7F\u7528\u91CF\u3092\u898B\u3064\u3051\u308B\u306B\u306F\u3001Module Summary\u30C6\u30FC\u30D6\u30EB\u306E\u4E00\u756A\u4E0B\u306EGrand Total\u884C\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 3\u3064\u76EE\u306E\u5217\u304C\u5185\u90E8RAM\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F42,731\u30D0\u30A4\u30C8\u306E\u5185\u90E8RAM\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002 TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u5408\u8A08\u3092\u898B\u308B\u3068\u3001TouchGFX\u30E9\u30A4\u30D6\u30E9\u30EA`, `[7]`, `\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u306E\u306F256\u30D0\u30A4\u30C8\u3067\u3042\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 32,792\u30D0\u30A4\u30C8\u304Cheap_4.o\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306FFREERTOS\u7528\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30E1\u30E2\u30EA\uFF65\u30D2\u30FC\u30D7\u3067\u3059\u3002 32 KB\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3067\u3059\u304C\u3001\u3053\u306E\u30D2\u30FC\u30D7\uFF65\u30B5\u30A4\u30BA\u306FSTM32CubeMX\u3067\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\u3002 \u901A\u5E38\u306ETouchGFX\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u306F\u3001\u4E3B\u306B\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30BF\u30B9\u30AF\u7528\u306E\u30B9\u30BF\u30C3\u30AF\u3092\u5272\u308A\u5F53\u3066\u308B\u305F\u3081\u306B\u3001\u3053\u306E\u30D2\u30FC\u30D7\u304B\u3089\u6570Kb\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FrontendHeap\u3092\u691C\u7D22\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FrontendHeap::getInstance()::instance
                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u5FC5\u8981\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30010x240\u30D0\u30A4\u30C8= 576\u30D0\u30A4\u30C8\u3092\u5360\u3081\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-flash"
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Grand Total\u884C\u304B\u3089\u3001\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C38,676\u30D0\u30A4\u30C8\u306E\u30B3\u30FC\u30C9\u306888,973\u30D0\u30A4\u30C8\u306E\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 \u3053\u306E\u3046\u3061\u5185\u90E8Flash\u306F\u4E00\u90E8\u306E\u307F\u3067\u3059\u3002 \u5C11\u306A\u304F\u3068\u3082Button\u306E2\u3064\u306E\u753B\u50CF\u306F\u5916\u90E8Flash\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8Flash\u306B\u53CE\u3081\u3089\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30C7\u30FC\u30BF\u306E\u91CF\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u3001\u6700\u521D\u306BPLACEMENT SUMMARY\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u307F\u307E\u3059\uFF08\u3044\u304F\u3064\u304B\u306E\u8A73\u7D30\u90E8\u5206\u306F\u524A\u9664\u3057\u3066\u3042\u308A\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `*******************************************************************************
*** PLACEMENT SUMMARY
***

"A0":  place at address 0x800'0000 { ro section .intvec };
"P1":  place in [from 0x800'0000 to 0x80f'ffff] { ro };
"P2":  place in [from 0x2000'0000 to 0x2004'ffff] { rw };
"P3":  place in [from 0x9000'0000 to 0x90ff'ffff] {
          section ExtFlashSection, section FontFlashSection,
          section TextFlashSection };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8Flash\u306F\u3001\u30A2\u30C9\u30EC\u30B90x08000000\u304B\u3089\u59CB\u307E\u308B\u90E8\u5206\u3067\u3059\u3002 "A0"\u3068"P1"\u3068\u3044\u30462\u3064\u306E\u9818\u57DF\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u5C11\u3057\u8A73\u3057\u304F\u898B\u3066\u307F\u308B\u3068\u3001\u3053\u308C\u3089\u306E\u9818\u57DF\u306B\u4F55\u304C\u914D\u7F6E\u3055\u308C\u3066\u3044\u308B\u306E\u304B\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,15-15}",
    "{5-5,15-15}": true
  }), `  Section                Kind         Address      Size  Object
  -------                ----         -------      ----  ------
"A0":                                             0x1c8
  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]
                                 - 0x800'01c8     0x1c8

"P1":                                             0xb05d
  .text                   ro code   0x800'01c8     0x9b8  main.o [1]
  .text                   ro code   0x800'0b80      0x14  memset.o [5]
...
  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]
  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]
  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]
  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]
  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>
                                  - 0x800'b225    0xb05d
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u306B\u306F\u30010x1c8\u30D0\u30A4\u30C8= 456\u30D0\u30A4\u30C8\u304C"A0"\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u30010xb05d\u30D0\u30A4\u30C8= 45,149\u30D0\u30A4\u30C8\u304C"P1"\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u5185\u90E8Flash\u306E\u5408\u8A08\u4F7F\u7528\u91CF\u306F45,605\u30D0\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-flash"
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8Flash\u306F\u3001"P3"\u9818\u57DF\uFF08\u30A2\u30C9\u30EC\u30B90x90000000\u304B\u3089\u958B\u59CB\uFF09\u3067\u3059\u3002 \u3053\u306E\u9818\u57DF\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-14}",
    "{14-14}": true
  }), `"P3":                                          0x1'4076
  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]
  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]
  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]
  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]
  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]
  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]
  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]
  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]
  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]
  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]
  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]
  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]
                                - 0x9001'4076  0x1'4076
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8Flash\u306E\u5408\u8A08\u4F7F\u7528\u91CF\u306F\u30010x14076\u30D0\u30A4\u30C8= 82,038\u30D0\u30A4\u30C8\u3067\u3042\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 \u3053\u306E\u5927\u90E8\u5206\u306F\u3001Button\u306E2\u3064\u306E\u753B\u50CF\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\uFF080x9f60\u30D0\u30A4\u30C8\u306E2\u500D= 40,800\u30D0\u30A4\u30C8\uFF09\u3002 \u6B8B\u308A\u306E\u30C7\u30FC\u30BF\u306F3\u3064\u306E\u30D5\u30A9\u30F3\u30C8\u7528\u3067\u3059\u3002 \u3053\u306E\u4F8B\u306B\u306F'?'\u3068\u3044\u3046\u6587\u5B57\u3057\u304B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u3055\u307B\u3069\u591A\u304F\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u305B\u3093\u3002\u3053\u306E\u4F8B\u3067\u306F\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary"
  }), `\u30B5\u30DE\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8RAM\u306B\u914D\u7F6E\u3055\u308C\u308B\u306E\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u307F\u3067\u3059\u3002 \u3053\u308C\u3089\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u5909\u6570\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u898B\u3064\u3051\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u89E3\u50CF\u5EA6\u306F\u3001480x272\u30D4\u30AF\u30BB\u30EB\u300124\u30D3\u30C3\u30C8\u3067\u3059\u3002 \u3053\u3053\u3067\u306F2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u3042\u308B\u306E\u3067\u3001\u5408\u8A08\u4F7F\u7528\u91CF\u306F480 x 272 x 3 x 2 = 786,360\u30D0\u30A4\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E1\u30E2\u30EA\uFF65\u30BF\u30A4\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528\u6CD5`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42,731\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `576\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `45,605\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `12,728\u30D0\u30A4\u30C8\u306E\u30B3\u30FC\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `786,360\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `82,028\u30D0\u30A4\u30C8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demo-1"
  }), `\u30C7\u30E21`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5225\u306E\u4F8B\u3068\u3057\u3066\u3001\u3053\u3053\u3067\u306FTouchGFX Designer\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u3001TouchGFX\u30C7\u30E21\u306E\u6570\u5024\u3092\u793A\u3057\u307E\u3059\u3002 \u3053\u3053\u306B\u306F5\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u3001100\u3092\u8D85\u3048\u308B\u753B\u50CF\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/demo1.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "STM32F746\u30C7\u30E21"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary-1"
  }), `\u30B5\u30DE\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E1\u30E2\u30EA\uFF65\u30BF\u30A4\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528\u6CD5`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `51,387\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,772\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `187,768\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `85,174\u30D0\u30A4\u30C8\u306E\u30B3\u30FC\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `786,360\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5,281,812\u30D0\u30A4\u30C8`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);