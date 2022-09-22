"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3746],{

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

/***/ 24169:
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
  id: "screen-definition-and-mvp",
  title: "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6982\u5FF5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "id": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "title": "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6982\u5FF5",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/screen-definition-and-mvp",
  "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/screen-definition-and-mvp",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "screen-definition-and-mvp",
    "title": "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6982\u5FF5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF\uFF08MVP: Model-View-Presenter\uFF09\u306E\u8A2D\u8A08\u30D1\u30BF\u30FC\u30F3",
    "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"
  },
  "next": {
    "title": "\u30B3\u30FC\u30C9\u69CB\u9020",
    "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/code-structure"
  }
};
const assets = {};

const toc = [{
  value: "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5B9A\u7FA9",
  id: "defining-screens",
  level: 3
}, {
  value: "\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30B9\u30AF\u30EA\u30FC\u30F3",
  id: "currently-active-screen",
  level: 3
}, {
  value: "TouchGFX\u306E\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF",
  id: "model-view-presenter-in-touchgfx",
  level: 2
}, {
  value: "\u30E2\u30C7\u30EB",
  id: "model",
  level: 3
}, {
  value: "\u30D3\u30E5\u30FC",
  id: "view",
  level: 3
}, {
  value: "\u30D7\u30EC\u30BC\u30F3\u30BF",
  id: "presenter",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u4EFB\u610F\u306E\u6570\u306E\u300C\u30B9\u30AF\u30EA\u30FC\u30F3\u300D\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\uFF082\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3088\u308B\u4E0B\u306E\u4F8B\u3092\u53C2\u7167\uFF09\u3002 TouchGFX\u306B\u304A\u3051\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u306F\u3001UI\u8981\u7D20\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09\u3068\u305D\u308C\u305E\u308C\u306B\u95A2\u9023\u3059\u308B\u30D3\u30B8\u30CD\u30B9\uFF65\u30ED\u30B8\u30C3\u30AF\u306B\u3088\u308B\u8AD6\u7406\u30B0\u30EB\u30FC\u30D7\u306E\u3053\u3068\u3067\u3059\u3002 1\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306F2\u3064\u306E\u30AF\u30E9\u30B9\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8868\u793A\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u542B\u3080\u30D3\u30E5\u30FC\uFF65\u30AF\u30E9\u30B9\u3068\u3001\u305D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D3\u30B8\u30CD\u30B9\uFF65\u30ED\u30B8\u30C3\u30AF\u3092\u542B\u3080\u30D7\u30EC\u30BC\u30F3\u30BF\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.png",
    mdxType: "Figure"
  }, "\u30E1\u30A4\u30F3\uFF65\u30D3\u30E5\u30FC\uFF08\u30B9\u30AF\u30EA\u30FC\u30F31\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.png",
    mdxType: "Figure"
  }, "\u8A2D\u5B9A\u30D3\u30E5\u30FC\uFF08\u30B9\u30AF\u30EA\u30FC\u30F32\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5185\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u3092\u5B9F\u88C5\u3059\u308B\uFF08\u3064\u307E\u308A1\u3064\u306E\u30D3\u30E5\u30FC\u30681\u3064\u306E\u30D7\u30EC\u30BC\u30F3\u30BF\u306E\u307F\u3092\u6301\u3064\uFF09\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u304C\u3001UI\u306E\u7121\u95A2\u4FC2\u306A\u30D1\u30FC\u30C4\u3092\u5225\u3005\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5206\u5272\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u305D\u306E\u7406\u7531\u306F\u6B21\u306E2\u3064\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u306B\u306F\u3001\u6700\u3082RAM\u3092\u6D88\u8CBB\u3059\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u5FC5\u8981\u3068\u3055\u308C\u308BRAM\u3092\u3001\u81EA\u52D5\u7684\u306B\u5272\u308A\u5F53\u3066\u308B\u30E1\u30E2\u30EA\u5272\u5F53\u3066\u30B9\u30AD\u30FC\u30E0\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u91CF\u306E\u307F\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3001\u3053\u306ERAM\u306E\u30D6\u30ED\u30C3\u30AF\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u3059\u3079\u3066\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u9593\u3067\u518D\u5229\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8907\u6570\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u6301\u3064\u3053\u3068\u3067\u3001UI\u30B3\u30FC\u30C9\u306E\u7DAD\u6301\u7BA1\u7406\u304C\u975E\u5E38\u306B\u5BB9\u6613\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "defining-screens"
  }), `\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5B9A\u7FA9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8907\u6570\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5206\u5272\u3059\u308B\u65B9\u6CD5\u306B\u95A2\u3059\u308B\u53B3\u683C\u306A\u30EB\u30FC\u30EB\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3057\u304B\u3057\u3001\u7279\u5B9A\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u69CB\u6210\u3059\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u6C7A\u5B9A\u3059\u308B\u305F\u3081\u306E\u624B\u52A9\u3051\u3068\u306A\u308B\u3001\u4E00\u5B9A\u306E\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u304C\u3042\u308A\u307E\u3059\u3002 \u8996\u899A\u7684\u304A\u3088\u3073\u6A5F\u80FD\u7684\u306B\u7121\u95A2\u4FC2\u306AUI\u306E\u30A8\u30EA\u30A2\u306F\u3001\u7570\u306A\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5206\u3051\u308B\u3079\u304D\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E2C\u5B9A\u6E29\u5EA6\u3092\u8868\u793A\u3059\u308B\u30E1\u30A4\u30F3\u753B\u9762\u3068\u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3067\u69CB\u6210\u3055\u308C\u308B\u975E\u5E38\u306B\u30B7\u30F3\u30D7\u30EB\u306A\u30B5\u30FC\u30E2\u30B9\u30BF\u30C3\u30C8\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8003\u3048\u305F\u5834\u5408\u3001\u6E2C\u5B9A\u6E29\u5EA6\u8868\u793A\u7528\u306E\u300C\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u300D\u3068\u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3059\u308B\u300C\u8A2D\u5B9A\u30B9\u30AF\u30EA\u30FC\u30F3\u300D\u3092\u4F5C\u6210\u3059\u308B\u306E\u304C\u826F\u3044\u3068\u601D\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D3\u30E5\u30FC\u306B\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3001\u6E29\u5EA6\u3092\u8868\u793A\u3059\u308B\u3044\u304F\u3064\u304B\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3001\u304A\u3088\u3073\u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3078\u306E\u5207\u308A\u66FF\u3048\u30DC\u30BF\u30F3\u306E\u305F\u3081\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u4E00\u65B9\u3001\u8A2D\u5B9A\u306E\u30D3\u30E5\u30FC\u306B\u306F\u3001\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30EA\u30B9\u30C8\u3084\u5225\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002 \u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3067\u591A\u69D8\u306A\u8A2D\u5B9A\uFF08\u65E5\u4ED8\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u5165\u529B\u306E\u540D\u524D\u3001\u6E29\u5EA6\u3001\u5358\u4F4D\u306A\u3069\uFF09\u3092\u7DE8\u96C6\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u8907\u96D1\u306A\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D3\u30E5\u30FC\u306B\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3001\u6E29\u5EA6\u3092\u8868\u793A\u3059\u308B\u3044\u304F\u3064\u304B\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3001\u304A\u3088\u3073\u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3078\u306E\u5207\u308A\u66FF\u3048\u30DC\u30BF\u30F3\u306E\u305F\u3081\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u4E00\u65B9\u3001\u8A2D\u5B9A\u306E\u30D3\u30E5\u30FC\u306B\u306F\u3001\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30EA\u30B9\u30C8\u3084\u5225\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "currently-active-screen"
  }), `\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30B9\u30AF\u30EA\u30FC\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u5834\u5408\u306F\u3001\u30E1\u30CB\u30E5\u30FC\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3\u5168\u4F53\u306E\u30C4\u30EA\u30FC\u3092\u8868\u793A\u3059\u308B1\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u3001\u7279\u5B9A\u306E\u5024\u3092\u7DE8\u96C6\u3059\u308B\u305F\u3081\u306E\u3082\u30461\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3001\u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3092\u3055\u3089\u306B\u5206\u5272\u3059\u308B\u3068\u6709\u76CA\u306B\u306A\u308B\u3067\u3057\u3087\u3046\u3002 \u3068\u3082\u304B\u304F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u9032\u3081\u306A\u304C\u3089\u3053\u3046\u3057\u305F\u3053\u3068\u3092\u5B66\u3093\u3067\u3044\u304D\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u300C\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u300D\uFF08\u30B5\u30FC\u30E2\u30B9\u30BF\u30C3\u30C8\u306E\u5B9F\u969B\u306E\u6A5F\u80FD\u3092\u5B9F\u884C\u3059\u308B\u3059\u3079\u3066\u306E\u975EUI\u30B3\u30FC\u30C9\uFF09\u307E\u305F\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304B\u3089\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u4FE1\u3057\u305F\u5834\u5408\u3001\u3053\u308C\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u59D4\u8B72\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30D9\u30F3\u30C8\u306E\u4E2D\u306B\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u7279\u5B9A\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u307F\u3092\u5BFE\u8C61\u3068\u3059\u308B\u3082\u306E\u304C\u3042\u308B\u306E\u3067\u3001\u30A4\u30D9\u30F3\u30C8\u306E\u51E6\u7406\u306E\u65B9\u6CD5\u3092\u3046\u307E\u304F\u5207\u308A\u5206\u3051\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u53D7\u4FE1\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u304C\u73FE\u5728\u306E\u6E29\u5EA6\u306E\u5909\u5316\u3092\u901A\u77E5\u3059\u308B\u3082\u306E\u3067\u3042\u308C\u3070\u3001\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u307F\u3067\u51E6\u7406\u3067\u304D\u307E\u3059\uFF08\u73FE\u5728\u306E\u6E29\u5EA6\u3092\u793A\u3059\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3092\u66F4\u65B0\u3059\u308B\uFF09\u3002\u4E00\u65B9\u3001\u8A2D\u5B9A\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u306F\u73FE\u5728\u306E\u6E29\u5EA6\u306F\u8A2D\u5B9A\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u306F\u8868\u793A\u3055\u308C\u305A\u95A2\u4FC2\u306A\u3044\u306E\u3067\u3001\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u5358\u7D14\u306B\u7834\u68C4\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "model-view-presenter-in-touchgfx"
  }), `TouchGFX\u306E\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30D9\u30F3\u30C8\u306E\u4E2D\u306B\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u7279\u5B9A\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u307F\u3092\u5BFE\u8C61\u3068\u3059\u308B\u3082\u306E\u304C\u3042\u308B\u306E\u3067\u3001\u30A4\u30D9\u30F3\u30C8\u306E\u51E6\u7406\u306E\u65B9\u6CD5\u3092\u3046\u307E\u304F\u5207\u308A\u5206\u3051\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u53D7\u4FE1\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u304C\u73FE\u5728\u306E\u6E29\u5EA6\u306E\u5909\u5316\u3092\u901A\u77E5\u3059\u308B\u3082\u306E\u3067\u3042\u308C\u3070\u3001\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u307F\u3067\u51E6\u7406\u3067\u304D\u307E\u3059\uFF08\u73FE\u5728\u306E\u6E29\u5EA6\u3092\u793A\u3059\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3092\u66F4\u65B0\u3059\u308B\uFF09\u3002\u4E00\u65B9\u3001\u8A2D\u5B9A\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u306F\u73FE\u5728\u306E\u6E29\u5EA6\u306F\u8A2D\u5B9A\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u306F\u8868\u793A\u3055\u308C\u305A\u95A2\u4FC2\u306A\u3044\u306E\u3067\u3001\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u5358\u7D14\u306B\u7834\u68C4\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001TouchGFX Designer\u3067\u65B0\u3057\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u8FFD\u52A0\u3059\u308B\u3068\u3001\u305D\u306E\u7279\u5B9A\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u8868\u3059\u305F\u3081\u306B\u3001\u7279\u5B9A\u306E\u30D3\u30E5\u30FC\uFF65\u30AF\u30E9\u30B9\u3068\u30D7\u30EC\u30BC\u30F3\u30BF\uFF65\u30AF\u30E9\u30B9\u306E\u4E21\u65B9\u304C\u65B0\u3057\u304F\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u3001MVP\u30AF\u30E9\u30B9\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3068\u305D\u306E\u5F79\u76EE\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "model"
  }), `\u30E2\u30C7\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u3001MVP\u30AF\u30E9\u30B9\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3068\u305D\u306E\u5F79\u76EE\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `UI\u306E\u72B6\u614B\u3092\u793A\u3059\u60C5\u5831\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u5207\u308A\u66FF\u3048\u308B\u3068\u3001\u30D3\u30E5\u30FC\u3068\u30D7\u30EC\u30BC\u30F3\u30BF\u3078\u306E\u30E1\u30E2\u30EA\u306E\u5272\u308A\u5F53\u3066\u304C\u89E3\u9664\u3055\u308C\u308B\u306E\u3067\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB\u306E\u9593\u306B\u7DAD\u6301\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u60C5\u5831\u3092\u3001\u3053\u308C\u3089\u3092\u4F7F\u7528\u3057\u3066\u4FDD\u5B58\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30E2\u30C7\u30EB\u3092\u4EE3\u308F\u308A\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\uFF65\u30B7\u30B9\u30C6\u30E0\u306B\u5BFE\u3059\u308B\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066\u6A5F\u80FD\u3057\u3001\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u306E\u9593\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u30EA\u30EC\u30FC\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306F\u3001\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30D7\u30EC\u30BC\u30F3\u30BF\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u6301\u3064\u3088\u3046\u306B\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u30E2\u30C7\u30EB\u306B\u5909\u66F4\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u3001\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30D7\u30EC\u30BC\u30F3\u30BF\u306B\u305D\u306E\u5909\u66F4\u304C\u901A\u77E5\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3042\u308BModelListener\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u5185\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u304CUI\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u81EA\u52D5\u7684\u306B\u6E96\u5099\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "view"
  }), `\u30D3\u30E5\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\uFF65\u30AF\u30E9\u30B9\uFF08\u5177\u4F53\u7684\u306B\u8A00\u3046\u3068\u3001TouchGFX\u30D3\u30E5\u30FC\uFF65\u30AF\u30E9\u30B9\u304B\u3089\u6D3E\u751F\u3057\u305F\u30AF\u30E9\u30B9\uFF09\u306B\u306F\u3001\u305D\u306E\u30D3\u30E5\u30FC\u306B\u30E1\u30F3\u30D0\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u307E\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen`), `\u95A2\u6570\u3082\u542B\u307E\u308C\u3001\u3053\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u304C\u51FA\u5165\u308A\u3059\u308B\u3068\u304D\u306B\u81EA\u52D5\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 \u901A\u5E38\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), `\u95A2\u6570\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306B\u306F\u3001\u95A2\u9023\u3059\u308B\u30D7\u30EC\u30BC\u30F3\u30BF\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3082\u542B\u307E\u308C\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u306F\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u4F7F\u7528\u3057\u3066\u3001\u30DC\u30BF\u30F3\uFF65\u30AF\u30EA\u30C3\u30AF\u306A\u3069\u306EUI\u30A4\u30D9\u30F3\u30C8\u3092\u30D7\u30EC\u30BC\u30F3\u30BF\u306B\u4F1D\u9054\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "presenter"
  }), `\u30D7\u30EC\u30BC\u30F3\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306B\u306F\u3001\u95A2\u9023\u3059\u308B\u30D7\u30EC\u30BC\u30F3\u30BF\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3082\u542B\u307E\u308C\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u306F\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u4F7F\u7528\u3057\u3066\u3001\u30DC\u30BF\u30F3\uFF65\u30AF\u30EA\u30C3\u30AF\u306A\u3069\u306EUI\u30A4\u30D9\u30F3\u30C8\u3092\u30D7\u30EC\u30BC\u30F3\u30BF\u306B\u4F1D\u9054\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);