"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4395],{

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

/***/ 45135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class YouTube extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const id = GetIdFromUrl(this.props.url);
    var embedUrl = `https://www.youtube.com/embed/${id}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
      src: embedUrl,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }));
  }
}
function GetIdFromUrl(url) {
  const regex1 = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;
  if (regex1.test(url)) {
    return regex1.exec(url)[1];
  }
  const regex2 = /https:\/\/youtu\.be\/(\w+)/;
  if (regex2.test(url)) {
    return regex2.exec(url)[1];
  }
  return url;
}
/* harmony default export */ __webpack_exports__["Z"] = (YouTube);


/***/ }),

/***/ 90229:
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
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45135);
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
  id: "welcome",
  title: "TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
  sidebar_label: "Welcome",
  description: "TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\xB7\u30B5\u30A4\u30C8 - \u7D44\u8FBC\u307F\u30BF\u30C3\u30C1\xB7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u308B\u3001\u4F7F\u3044\u3084\u3059\u3044\u30B0\u30E9\u30D5\u30A3\u30AB\u30EBC++\u30C4\u30FC\u30EB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/welcome",
  "id": "introduction/welcome",
  "title": "TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
  "description": "TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\xB7\u30B5\u30A4\u30C8 - \u7D44\u8FBC\u307F\u30BF\u30C3\u30C1\xB7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u308B\u3001\u4F7F\u3044\u3084\u3059\u3044\u30B0\u30E9\u30D5\u30A3\u30AB\u30EBC++\u30C4\u30FC\u30EB",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/welcome",
  "permalink": "/4.20/ja/docs/introduction/welcome",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "welcome",
    "title": "TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
    "sidebar_label": "Welcome",
    "description": "TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\xB7\u30B5\u30A4\u30C8 - \u7D44\u8FBC\u307F\u30BF\u30C3\u30C1\xB7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u308B\u3001\u4F7F\u3044\u3084\u3059\u3044\u30B0\u30E9\u30D5\u30A3\u30AB\u30EBC++\u30C4\u30FC\u30EB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Introduction",
    "permalink": "/4.20/ja/docs/category/introduction"
  },
  "next": {
    "title": "TouchGFX\u3068\u306F",
    "permalink": "/4.20/ja/docs/introduction/what-is-touchgfx"
  }
};
const assets = {};



const toc = [{
  value: "\u672C\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u3064\u3044\u3066",
  id: "about-this-documentation",
  level: 2
}, {
  value: "\u5BFE\u8C61\u30E6\u30FC\u30B6",
  id: "target-user",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u30B5\u30A4\u30C8\u3067\u306F\u3001TouchGFX\u30C4\u30FC\u30EB\u304A\u3088\u3073\u4F7F\u7528\u65B9\u6CD5\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_YouTube__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "https://youtu.be/t0SlRZnERms",
    mdxType: "YouTube"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3092\u521D\u3081\u3066\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u672C\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u4E8B\u524D\u306B\u3054\u78BA\u8A8D\u3044\u305F\u3060\u304D\u6982\u8981\u3092\u628A\u63E1\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002 \u5DE6\u30B5\u30A4\u30C9\u306E\u76EE\u6B21\u3092\u4F7F\u7528\u3057\u3066\u3001\u3054\u95A2\u5FC3\u306E\u3042\u308B\u30C8\u30D4\u30C3\u30AF\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u7C21\u5358\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002 \u53F3\u4E0A\u9685\u306B\u3042\u308B\u691C\u7D22\u6A5F\u80FD\u3082\u3054\u4F7F\u7528\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "about-this-documentation"
  }), `\u672C\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u3064\u3044\u3066`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u30B5\u30A4\u30C8\u306F\u6B21\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "what-is-touchgfx"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\u306F\u3058\u3081\u306B`)), `\uFF1ATouchGFX\u3068\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30AC\u30A4\u30C9\u306E\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../basic-concepts/embedded-graphics"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\u57FA\u672C\u6982\u5FF5`)), `\uFF1A\u4E3B\u8981\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u6982\u5FF5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/development-introduction"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\u958B\u767A`)), `\uFF1A\u69CB\u9020\u3084\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3001\u30C4\u30FC\u30EB\u3092\u542B\u3080TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../tutorials/tutorial-01"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB`)), `\uFF1ATouchGFX\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/welcome/frontpage-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "target-user"
  }), `\u5BFE\u8C61\u30E6\u30FC\u30B6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u3001C++\u304A\u3088\u3073STM32\u4E0A\u306E\u7D44\u8FBC\u307FGUI\u958B\u767A\u306B\u95A2\u3059\u308B\u57FA\u672C\u7684\u306A\u6280\u80FD\u3092\u6301\u3064\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u8005\u3092\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u3059\u3002 \u7D44\u8FBC\u307FGUI\u958B\u767A\u306E\u521D\u5FC3\u8005\u306E\u65B9\u5411\u3051\u306B\u3001\u300C\u57FA\u672C\u6982\u5FF5\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001TouchGFX\u306E\u958B\u767A\u306B\u304A\u3044\u3066\u8AB0\u3082\u304C\u5186\u6ED1\u306B\u5B66\u7FD2\u3067\u304D\u308B\u3088\u3046\u306B\u3001\u6BB5\u968E\u3092\u8FFD\u3063\u305F\u30AC\u30A4\u30C9\u3084\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3088\u308A\u826F\u3044\u958B\u767A\u30C4\u30FC\u30EB\u3084\u30B5\u30FC\u30D3\u30B9\u3092\u3054\u63D0\u4F9B\u3067\u304D\u308B\u3088\u3046\u306B\u3001\u5F0A\u793E\u3067\u306F\u672C\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u6539\u5584\u3092\u5B9F\u65BD\u3057\u3066\u3044\u307E\u3059\u3002 \u7406\u89E3\u3067\u304D\u306A\u3044\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u63A2\u3057\u3066\u3044\u308B\u5185\u5BB9\u304C\u672C\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",
    target: "_blank",
    mdxType: "Link"
  }, `\u30D5\u30A9\u30FC\u30E9\u30E0`), `\u3067\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044\u3002\u672C\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u6539\u5584\u306B\u7E4B\u3052\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);