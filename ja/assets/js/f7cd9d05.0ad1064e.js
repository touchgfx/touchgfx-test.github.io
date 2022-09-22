"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6925],{

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

/***/ 9926:
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
  id: "model-view-presenter-design-pattern",
  title: "\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF\uFF08MVP: Model-View-Presenter\uFF09\u306E\u8A2D\u8A08\u30D1\u30BF\u30FC\u30F3"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "id": "development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "title": "\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF\uFF08MVP: Model-View-Presenter\uFF09\u306E\u8A2D\u8A08\u30D1\u30BF\u30FC\u30F3",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "model-view-presenter-design-pattern",
    "title": "\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF\uFF08MVP: Model-View-Presenter\uFF09\u306E\u8A2D\u8A08\u30D1\u30BF\u30FC\u30F3"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Software Architecture",
    "permalink": "/4.20/ja/docs/category/software-architecture"
  },
  "next": {
    "title": "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6982\u5FF5",
    "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/screen-definition-and-mvp"
  }
};
const assets = {};

const toc = [];
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u3001\u30E2\u30C7\u30EB-\u30D3\u30E5\u30FC-\u30D7\u30EC\u30BC\u30F3\u30BF\uFF08MVP\uFF09\u3068\u3057\u3066\u77E5\u3089\u308C\u3066\u3044\u308B\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\uFF65\u30D1\u30BF\u30FC\u30F3\u306B\u5F93\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306F\u30E2\u30C7\u30EB-\u30D3\u30E5\u30FC-\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF08MVC: Model-View-Controller\uFF09\u30D1\u30BF\u30FC\u30F3\u304B\u3089\u6D3E\u751F\u3057\u305F\u3082\u306E\u3067\u3059\u3002 \u3069\u3061\u3089\u306E\u30D1\u30BF\u30FC\u30F3\u3082\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u7BC9\u306B\u5E83\u304F\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP\u30D1\u30BF\u30FC\u30F3\u306E\u4E3B\u306A\u5229\u70B9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u95A2\u9023\u306E\u5206\u96E2`), `: \u30B3\u30FC\u30C9\u3092\u3070\u3089\u3070\u3089\u306E\u30D1\u30FC\u30C4\u306B\u5206\u5272\u3057\u3066\u3001\u305D\u308C\u305E\u308C\u72EC\u81EA\u306B\u8CAC\u4EFB\u3092\u6301\u305F\u305B\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30B3\u30FC\u30C9\u304C\u5358\u7D14\u5316\u3055\u308C\u3001\u518D\u5229\u7528\u3084\u7DAD\u6301\u304C\u5BB9\u6613\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5358\u4F53\u30C6\u30B9\u30C8`), `: UI\u306E\u30ED\u30B8\u30C3\u30AF\uFF08\u30D7\u30EC\u30BC\u30F3\u30BF\uFF09\u304C\u8996\u899A\u30EC\u30A4\u30E4\uFF08\u30D3\u30E5\u30FC\uFF09\u304B\u3089\u5207\u308A\u96E2\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u3053\u308C\u3089\u306E\u30D1\u30FC\u30C4\u3092\u5206\u96E2\u3055\u305B\u3066\u5BB9\u6613\u306B\u30C6\u30B9\u30C8\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B3\u3064\u306E\u30AF\u30E9\u30B9\u304C\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u30E2\u30C7\u30EB`), `\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u8868\u793A\u3055\u308C\u308B\u3001\u3042\u308B\u3044\u306F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u5185\u3067\u4F5C\u7528\u3059\u308B\u30C7\u30FC\u30BF\u3092\u5B9A\u7FA9\u3059\u308B\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u30D3\u30E5\u30FC`), `\u306F\u3001\uFF08\u30E2\u30C7\u30EB\u304B\u3089\u306E\uFF09\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3057\u3001\u305D\u306E\u30C7\u30FC\u30BF\u306B\u4F5C\u7528\u3055\u305B\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30DE\u30F3\u30C9\uFF08\u30A4\u30D9\u30F3\u30C8\uFF09\u3092\u30D7\u30EC\u30BC\u30F3\u30BF\u306B\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3059\u308B\u30D1\u30C3\u30B7\u30D6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u30D7\u30EC\u30BC\u30F3\u30BF`), `\u306F\u3001\u30E2\u30C7\u30EB\u304A\u3088\u3073\u30D3\u30E5\u30FC\u306B\u4F5C\u7528\u3057\u307E\u3059\u3002 \u30EA\u30DD\u30B8\u30C8\u30EA\uFF08\u30E2\u30C7\u30EB\uFF09\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u3001\u30D3\u30E5\u30FC\u306B\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u66F8\u5F0F\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/software-architecture-mvp/mvp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u30E2\u30C7\u30EB\uFF65\u30D3\u30E5\u30FC\uFF65\u30D7\u30EC\u30BC\u30F3\u30BF\uFF08MVP: Model-View-Presenter\uFF09\u306E\u8A2D\u8A08\u30D1\u30BF\u30FC\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u975EUI\u90E8\u5206\uFF08\u3053\u3053\u3067\u306F\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\uFF65\u30B7\u30B9\u30C6\u30E0\u3068\u547C\u3073\u307E\u3059\uFF09\u3068\u306E\u901A\u4FE1\u306F\u3001\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u304B\u3089\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\uFF65\u30B7\u30B9\u30C6\u30E0\u306F\u3001UI\u304B\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u53D6\u5F97\u3068\u3001\u30A4\u30D9\u30F3\u30C8\uFF08\u30BB\u30F3\u30B5\u304B\u3089\u306E\u65B0\u3057\u3044\u6E2C\u5B9A\u5024\u306A\u3069\uFF09\u306EUI\u3078\u306E\u4F9B\u7D66\u3092\u4E21\u65B9\u3092\u884C\u3046\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u3059\u3002 \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\uFF65\u30B7\u30B9\u30C6\u30E0\u306F\u540C\u3058\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u4E0A\u3001\u3042\u308B\u3044\u306F\u5225\u306E\u30D7\u30ED\u30BB\u30C3\u30B5\u3001\u30AF\u30E9\u30A6\u30C9\uFF65\u30E2\u30B8\u30E5\u30FC\u30EB\u3001\u305D\u306E\u4ED6\u306B\u304A\u3044\u3066\u3001\u5225\u306E\u30BF\u30B9\u30AF\u3068\u3057\u3066\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 TouchGFX\u304B\u3089\u898B\u308C\u3070\u3001\u305D\u308C\u304C\u901A\u4FE1\u53EF\u80FD\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u3042\u308B\u9650\u308A\u3001\u5B9F\u969B\u306B\u306F\u554F\u984C\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3055\u308C\u308B\u7279\u5B9A\u306E\u901A\u4FE1\u30D7\u30ED\u30C8\u30B3\u30EB\u306F\u3001TouchGFX\u3067\u306F\u7BA1\u7406\u3057\u307E\u305B\u3093\u3002 \u5358\u306B\u3001TouchGFX\u306E\u5404\u30C6\u30A3\u30C3\u30AF\u306E\u5F8C\u306B\u547C\u3073\u51FA\u3055\u308C\u308B\u95A2\u6570\u3092\u4F9B\u7D66\u3059\u308B\u3060\u3051\u3067\u3059\u3002\u3053\u308C\u3067\u5FC5\u8981\u306A\u901A\u4FE1\u306F\u51E6\u7406\u3067\u304D\u308B\u304B\u3089\u3067\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/backend-communication"
  }), `\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/software-architecture-mvp/mvp-2.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u30E2\u30C7\u30EB-\u30D3\u30E5\u30FC-\u30D7\u30EC\u30BC\u30F3\u30BF\u3068\u5916\u90E8\u901A\u4FE1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP\u3092\u5B9F\u88C5\u3057\u3066TouchGFX\u306EUI\u958B\u767A\u3067\u4F7F\u7528\u3059\u308B\u5177\u4F53\u7684\u306A\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "code-structure"
  }), `\u30B3\u30FC\u30C9\u69CB\u9020`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);