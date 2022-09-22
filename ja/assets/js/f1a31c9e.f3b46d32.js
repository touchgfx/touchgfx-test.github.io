"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9350],{

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

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


/***/ }),

/***/ 90442:
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
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65407);
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
  id: "getting-started",
  title: "\u4F7F\u7528\u65B9\u6CD5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/getting-started",
  "id": "introduction/getting-started",
  "title": "\u4F7F\u7528\u65B9\u6CD5",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/getting-started",
  "permalink": "/4.20/ja/docs/introduction/getting-started",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-started",
    "title": "\u4F7F\u7528\u65B9\u6CD5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
    "permalink": "/4.20/ja/docs/introduction/installation"
  },
  "next": {
    "title": "Basic Concepts",
    "permalink": "/4.20/ja/docs/category/basic-concepts"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX Designer\u306E\u30AF\u30A4\u30C3\u30AF\uFF65\u30B9\u30BF\u30FC\u30C8",
  id: "touchgfx-designer-quick-start",
  level: 2
}, {
  value: "TouchGFX Board Setup + \u30B5\u30F3\u30D7\u30EB\u304A\u3088\u3073\u30C7\u30E2",
  id: "application-template--ui-template",
  level: 3
}, {
  value: "Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09",
  id: "online-applications",
  level: 3
}, {
  value: "\u6B21\u306E\u5185\u5BB9",
  id: "whats-next",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u696D\u3092\u958B\u59CB\u3059\u308B\u305F\u3081\u306E\u524D\u63D0\u6761\u4EF6\u306F\u3001TouchGFX\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u3059\u3002\u3053\u308C\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "installation"
  }), `\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/getting-started/computer-2-screens.png",
    noShadow: true,
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u6700\u521D\u306ETouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3059\u308B\u6E96\u5099\u304C\u6574\u3044\u307E\u3059\u3002 \u672C\u66F8\u306E\u4E3B\u8981\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u3054\u78BA\u8A8D\u3044\u305F\u3060\u304D\u3001TouchGFX\u306E\u57FA\u672C\u6982\u5FF5\u3092\u628A\u63E1\u3092\u63A8\u5968\u3057\u307E\u3059\u3002 \u6700\u3082\u91CD\u8981\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/development-introduction"
  }), `\u958B\u767A\u306E\u6982\u8981`), `\u300D\u3067\u3059\u3002\u3053\u3053\u3067\u306F\u3001\u5B8C\u5168\u306ATouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u305F\u3081\u306B\u5FC5\u8981\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u304A\u3088\u3073\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u3001\u305D\u308C\u3089\u306E\u4F5C\u6210\u306B\u5FC5\u8981\u306A\u4F5C\u696D\u3084\u30C4\u30FC\u30EB\u306B\u3064\u3044\u3066\u7D39\u4ECB\u3057\u3066\u3044\u307E\u3059\u3002 \u65E2\u88FD\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u7C21\u5358\u306A\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u4F5C\u6210\u3092\u958B\u59CB\u3059\u308B\u65B9\u6CD5\u3082\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-quick-start"
  }), `TouchGFX Designer\u306E\u30AF\u30A4\u30C3\u30AF\uFF65\u30B9\u30BF\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-template--ui-template"
  }), `TouchGFX Board Setup + \u30B5\u30F3\u30D7\u30EB\u304A\u3088\u3073\u30C7\u30E2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u3001\u30B5\u30F3\u30D7\u30EB\u306EUI\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8A66\u3057\u3001STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u5148\u3078\u9032\u3093\u3067TouchGFX Designer\u3092\u958B\u59CB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Board Setup\u3067\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u3068\u30B5\u30F3\u30D7\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306E\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u306F\u3001\u5E83\u7BC4\u56F2\u306EUI\u30B5\u30F3\u30D7\u30EB\u304B\u3089\u9078\u629E\u3057\u3001\u3053\u3053\u304B\u3089\u958B\u59CB\u3067\u304D\u307E\u3059\u3002 \u3053\u306EUI\u30B5\u30F3\u30D7\u30EB\u306F\u3001\u5E83\u7BC4\u306ASTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u306E\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30B3\u30FC\u30C9\u3068\u7D44\u307F\u5408\u308F\u305B\u3089\u308C\u308B\u306E\u3067\u3001\u7D44\u8FBC\u307F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u30B5\u30F3\u30D7\u30EB\u3092\u3059\u3050\u306B\u8A66\u305B\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u304A\u4F7F\u3044\u306EPC\u4E0A\u3067TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u521D\u671F\u30B9\u30C6\u30C3\u30D7\u306E\u30AC\u30A4\u30C0\u30F3\u30B9\u304C\u5FC5\u8981\u306A\u5834\u5408\u306B\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../tutorials/tutorial-01"
  }), `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB`), `\u300D\u306E\u7AE0\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002 \u3053\u306E\u7AE0\u3067\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7ACB\u3061\u4E0A\u3052\u3066\u5B9F\u884C\u3057\u3001\u6700\u7D42\u7684\u306B\u3084\u3084\u8907\u96D1\u306AUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3068\u3053\u308D\u307E\u3067\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "online-applications"
  }), `Board Specific Demos\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3068UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u304C\u53EF\u80FD\u306A\u307B\u304B\u3001TouchGFX Designer\u306B\u306F\u3001\u7279\u5B9A\u306ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u5411\u3051\u306E\u3059\u3050\u306B\u4F7F\u7528\u3067\u304D\u308B\u30C7\u30E2\u3082\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u3001Board Specific Demo\u306E\u4E0B\u306E\u30C7\u30E2\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",
    mdxType: "LoopVideo"
  }, "Board Specific Demo\u3067\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "whats-next"
  }), `\u6B21\u306E\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6642\u70B9\u3067\u3001\u672C\u66F8\u5168\u4F53\u3092\u3054\u89A7\u3044\u305F\u3060\u304D\u3001\u5FC5\u8981\u3068\u601D\u308F\u308C\u308B\u7AE0\u3092\u304A\u8AAD\u307F\u306B\u306A\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002 \u3053\u308C\u3067\u672C\u66F8\u306E\u6982\u8981\u3092\u628A\u63E1\u3067\u304D\u308C\u3070\u3001\u8A73\u7D30\u60C5\u5831\u3092\u5165\u624B\u3067\u304D\u308B\u5834\u6240\u304C\u308F\u304B\u308A\u3001TouchGFX\u306E\u4E3B\u8981\u6982\u5FF5\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u306A\u7AE0\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../basic-concepts/embedded-graphics"
  }), `\u57FA\u672C\u6982\u5FF5`), `\uFF1A\u3053\u306E\u7AE0\u3067\u306F\u3001\u672C\u66F8\u306E\u305D\u306E\u4ED6\u306E\u90E8\u5206\u306E\u80CC\u666F\u60C5\u5831\u306B\u3064\u3044\u3066\u8A18\u8F09\u3057\u3066\u3044\u307E\u3059\u3002 \u5F8C\u3067\u53C2\u7167\u3059\u308B\u4E3B\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u6982\u5FF5\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002 \u73FE\u6642\u70B9\u3067\u306E\u77E5\u8B58\u3084\u7406\u89E3\u5EA6\u3068\u3001\u5B9F\u884C\u4E88\u5B9A\u306ETouchGFX\u958B\u767A\u4F5C\u696D\u306B\u3088\u3063\u3066\u306F\u3001\u4E00\u90E8\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u3001\u8A73\u7D30\u304C\u4E0D\u660E\u306A\u5834\u5408\u306B\u5F8C\u304B\u3089\u95B2\u89A7\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/development-introduction"
  }), `\u958B\u767A`), `\uFF1A\u3053\u306E\u7AE0\u306F\u672C\u66F8\u306E\u4E2D\u5FC3\u3068\u306A\u308B\u7AE0\u3067\u3059\u3002 TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u69CB\u9020\u3084\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u767A\u30B5\u30A4\u30AF\u30EB\u5168\u4F53\u3067\u95A2\u4E0E\u3059\u308B\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3068\u30C4\u30FC\u30EB\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306E\u5404\u30B9\u30C6\u30C3\u30D7\u306B\u306F\u72EC\u81EA\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u3042\u308A\u3001\u8A73\u3057\u304F\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002 \u307E\u305F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\u3084UI\u958B\u767A\u306E\u65B9\u6CD5\u306B\u3064\u3044\u3066\u3001\u77E5\u3063\u3066\u304A\u304F\u3079\u304D\u5185\u5BB9\u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u3059\u3079\u3066\u306E\u6A5F\u80FD\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAC\u660E\u306A\u3069\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);