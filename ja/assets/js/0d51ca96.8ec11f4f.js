"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5522],{

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

/***/ 29415:
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
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class FurtherReading extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-further-reading)",
      header: "Further reading",
      type: "further-reading",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (FurtherReading);


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

/***/ 95613:
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
/* harmony import */ var _site_components_YouTube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45135);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44035);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
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
  id: "custom-containers",
  title: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-containers",
  "id": "development/ui-development/touchgfx-engine-features/custom-containers",
  "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-containers",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-containers",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-containers",
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/position-size"
  },
  "next": {
    "title": "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  }
};
const assets = {};





const toc = [{
  value: "TouchGFX Designer\u3067\u306E\u64CD\u4F5C",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "\u8907\u5408\u7684\u306A\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA",
  id: "composite-custom-containers",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3",
  id: "custom-triggers-and-actions",
  level: 3
}, {
  value: "\u30B3\u30FC\u30C9\u3067\u306E\u64CD\u4F5C",
  id: "in-code",
  level: 2
}, {
  value: "touchgfx::Container\u30AF\u30E9\u30B9\u3092\u62E1\u5F35\u3059\u308B\u30AF\u30E9\u30B9\u3092\u4F5C\u6210",
  id: "create-a-class-that-extends-the-touchgfxcontainer-class",
  level: 3
}, {
  value: "\u30B3\u30F3\u30C6\u30CA\u306E\u3059\u3079\u3066\u306E\u5B50\u3092\u30E1\u30F3\u30D0\u30FC\u5909\u6570\u3068\u3057\u3066\u5BA3\u8A00",
  id: "declaring-all-children-of-the-container-as-member-variables",
  level: 3
}, {
  value: "\u30B3\u30F3\u30C6\u30CA\u306E\u5E45\u3068\u9AD8\u3055\u3092\u8A2D\u5B9A",
  id: "setting-the-width-and-height-of-the-container",
  level: 3
}, {
  value: "\u5B50\u3092\u305D\u308C\u305E\u308C\u8A2D\u5B9A",
  id: "setting-up-each-of-the-children",
  level: 3
}, {
  value: "\u5B50\u3092\u305D\u308C\u305E\u308C\u9069\u5207\u306A\u9806\u5E8F\u3067\u968E\u5C64\u306B\u8FFD\u52A0",
  id: "adding-each-of-the-children-to-the-hierarchy-in-the-right-order",
  level: 3
}, {
  value: "\u30E1\u30BD\u30C3\u30C9\u3068\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3001\u76EE\u7684\u306E\u52D5\u4F5C\u3092\u5B9F\u88C5",
  id: "implementing-the-desired-behaviour-via-methods-and-callbacks",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u6642\u306B\u306F\u3001TouchGFX\u306B\u542B\u307E\u308C\u308B\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30BB\u30C3\u30C8\u306B\u306F\u306A\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5FC5\u8981\u306B\u306A\u308B\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u72EC\u81EA\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B1\u3064\u306E\u65B9\u6CD5\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306F\u3001\u4ED6\u306E\u65E2\u5B58\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u542B\u307F\u3001\u305D\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5916\u89B3\u3084\u52D5\u4F5C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 \u3053\u308C\u306F\u3001\u5F93\u6765\u306E\u8907\u5408\u30C7\u30B6\u30A4\u30F3\u30D1\u30BF\u30FC\u30F3\u3068\u540C\u3058\u3067\u3042\u308A\u3001\u542B\u307E\u308C\u3066\u3044\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B3\u30F3\u30C6\u30CA\u30FC\u306E\u5B50\u3068\u3082\u547C\u3073\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u63CF\u753B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306F\u3001\u4E00\u822C\u7684\u306B\u975E\u5E38\u306B\u9AD8\u304F\u306A\u308A\u307E\u3059\u3002 TouchGFX\u306E\u57FA\u76E4\u3068\u306A\u308B\u63CF\u753B\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u6D3B\u7528\u3057\u3001\u518D\u63CF\u753B\u306E\u5FC5\u8981\u304C\u3042\u308B\u30B3\u30F3\u30C6\u30CA\u306E\u30D1\u30FC\u30C4\u3068\u5B50\u3092\u81EA\u52D5\u7684\u306B\u6C7A\u5B9A\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30B3\u30F3\u30C6\u30CA\u306E\u4F7F\u7528\u6642\u306B\u63CF\u753B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5FC3\u914D\u3059\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u308B\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u3092\u7E2E\u5C0F\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u308B\u3053\u3068\u304C\u3042\u308A\u3001\u305D\u3046\u3044\u3063\u305F\u30B7\u30CA\u30EA\u30AA\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-widgets"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), `\u3068\u547C\u3070\u308C\u308B\u9AD8\u5EA6\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u65B9\u304C\u9069\u3057\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\u3067\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3057\u3066\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u306E\u4E00\u822C\u7684\u306A\u4F7F\u7528\u624B\u9806\u3092\u793A\u3057\u305F\u6B21\u306E\u30D3\u30C7\u30AA\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_YouTube__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    url: "https://youtu.be/nX1nCAA4pyA",
    mdxType: "YouTube"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "composite-custom-containers"
  }), `\u8907\u5408\u7684\u306A\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ED6\u306E\u30AB\u30B9\u30BF\u30E0\u30B3\u30F3\u30C6\u30CA\u3067\u69CB\u6210\u3055\u308C\u308B\u30AB\u30B9\u30BF\u30E0\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u5C0F\u3055\u3044\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u69CB\u6210\u3055\u308C\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u69CB\u7BC9\u3059\u308B\u305F\u3081\u306E\u5F37\u529B\u306A\u65B9\u6CD5\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u306B\u3042\u308B\u4E8B\u524D\u5B9A\u7FA9\u6E08\u307F\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u633F\u5165"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u633F\u5165\u304C\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u305D\u308C\u81EA\u8EAB\u306E\u5B9A\u7FA9\u306B\u8FFD\u52A0\u3059\u308B\u306A\u3069\u306E\u5FAA\u74B0\u53C2\u7167\u306B\u9665\u308B\u3053\u3068\u3092\u9632\u6B62\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.png",
    mdxType: "Figure"
  }, "\u5FAA\u74B0\u53C2\u7167\u306E\u53EF\u80FD\u6027\u304C\u3042\u308B\u305F\u3081\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u633F\u5165\u6A5F\u80FD\u304C\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-triggers-and-actions"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u5F37\u529B\u306A\u7279\u5FB4\u306E1\u3064\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\uFF08\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\uFF09\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30E1\u30BD\u30C3\u30C9\uFF09\u3092\u5B9A\u7FA9\u3067\u304D\u308B\u3053\u3068\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u7D71\u5408\u52D5\u4F5C\u3092\u5B9A\u7FA9\u3067\u304D\u308B\u306E\u3067\u3001\u5358\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u518D\u5229\u7528\u53EF\u80FD\u306A\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3042\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u3084\u308A\u53D6\u308A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u3053\u306E\u6A5F\u80FD\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "custom-triggers-and-actions",
    mdxType: "Link"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3"), "\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `\u30B3\u30FC\u30C9\u3067\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u5F37\u529B\u306A\u7279\u5FB4\u306E1\u3064\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\uFF08\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\uFF09\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30E1\u30BD\u30C3\u30C9\uFF09\u3092\u5B9A\u7FA9\u3067\u304D\u308B\u3053\u3068\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u7D71\u5408\u52D5\u4F5C\u3092\u5B9A\u7FA9\u3067\u304D\u308B\u306E\u3067\u3001\u5358\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u518D\u5229\u7528\u53EF\u80FD\u306A\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3042\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u3084\u308A\u53D6\u308A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::Container\u30AF\u30E9\u30B9\u3092\u62E1\u5F35\u3059\u308B\u30AF\u30E9\u30B9\u3092\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u306E\u3059\u3079\u3066\u306E\u5B50\u3092\u30E1\u30F3\u30D0\u30FC\u5909\u6570\u3068\u3057\u3066\u5BA3\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u306E\u5E45\u3068\u9AD8\u3055\u3092\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B50\u3092\u305D\u308C\u305E\u308C\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B50\u3092\u305D\u308C\u305E\u308C\u9069\u5207\u306A\u9806\u5E8F\u3067\u968E\u5C64\u306B\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E1\u30BD\u30C3\u30C9\u3068\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3001\u76EE\u7684\u306E\u52D5\u4F5C\u3092\u5B9F\u88C5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u30B3\u30FC\u30C9\u306E\u69CB\u7BC9\u3092\u30BC\u30ED\u304B\u3089\u30B9\u30BF\u30FC\u30C8\u3057\u3066\u3001\u6700\u7D42\u7684\u306B\u306F\u30B7\u30F3\u30D7\u30EB\u304B\u3064\u5B8C\u5168\u6A5F\u80FD\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "create-a-class-that-extends-the-touchgfxcontainer-class"
  }), `touchgfx::Container\u30AF\u30E9\u30B9\u3092\u62E1\u5F35\u3059\u308B\u30AF\u30E9\u30B9\u3092\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.hpp`), `\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 C++\u306E\u7D99\u627F\u3092\u4F7F\u7528\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Container`), `\u306E\u30E1\u30BD\u30C3\u30C9\u3068\u30E1\u30F3\u30D0\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u53D6\u5F97\u3057\u307E\u3059\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container.hpp`), `\u306E\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u542B\u3081\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2,4}",
    "{2,4}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/containers/Container.hpp>

class MyCustomContainer : public touchgfx::Container
{
public:
    MyCustomContainer();
    virtual ~MyCustomContainer() {}
    virtual void initialize();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "declaring-all-children-of-the-container-as-member-variables"
  }), `\u30B3\u30F3\u30C6\u30CA\u306E\u3059\u3079\u3066\u306E\u5B50\u3092\u30E1\u30F3\u30D0\u30FC\u5909\u6570\u3068\u3057\u3066\u5BA3\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u69CB\u6210\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u3001\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u5BA3\u8A00\u3057\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u30DC\u30C3\u30AF\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myBox`), `\u3068\u30DC\u30BF\u30F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myButton`), `\u3092\u8FFD\u52A0\u3059\u308B\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{19-20}",
    "{19-20}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/containers/Container.hpp>

class MyCustomContainer : public touchgfx::Container
{
public:
    MyCustomContainer();
    virtual ~MyCustomContainer() {}
    virtual void initialize();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Member Declarations
     */
    touchgfx::Box myBox;
    touchgfx::Button myButton;

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-width-and-height-of-the-container"
  }), `\u30B3\u30F3\u30C6\u30CA\u306E\u5E45\u3068\u9AD8\u3055\u3092\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u3067\u4F5C\u6210\u3057\u305F\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u542B\u3080cpp\u30D5\u30A1\u30A4\u30EB\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.cpp`), `\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u5185\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setWidth()`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setHeight()`), `\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1,5-6}",
    "{1,5-6}": true
  }), `#include <gui/include/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);
}

void MyCustomContainer::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-up-each-of-the-children"
  }), `\u5B50\u3092\u305D\u308C\u305E\u308C\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u5404\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u5185\u3067\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-12}",
    "{8-12}": true
  }), `#include <gui/include/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);

    myBox.setPosition(0, 0, 250, 250);
    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    myButton.setXY(40, 95);
    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));
}

void MyCustomContainer::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-each-of-the-children-to-the-hierarchy-in-the-right-order"
  }), `\u5B50\u3092\u305D\u308C\u305E\u308C\u9069\u5207\u306A\u9806\u5E8F\u3067\u968E\u5C64\u306B\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u5185\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `add()`), `\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u5B50\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-15}",
    "{14-15}": true
  }), `#include <gui/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);

    myBox.setPosition(0, 0, 250, 250);
    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    myButton.setXY(40, 95);
    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));

    add(myBox);
    add(myButton);
}

void MyCustomContainer::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "implementing-the-desired-behaviour-via-methods-and-callbacks"
  }), `\u30E1\u30BD\u30C3\u30C9\u3068\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3001\u76EE\u7684\u306E\u52D5\u4F5C\u3092\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0\u3059\u308B\u305F\u3081\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.hpp`), `\u3067\u30E1\u30BD\u30C3\u30C9\u3068\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u3044\u304F\u3064\u304B\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `doSomething()`), `\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `somethingHappened`), `\u3092\u767A\u884C\u3059\u308B\u3053\u3068\u306E\u307F\u3092\u76EE\u7684\u3068\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-17,22,32-38,51}",
    "{14-17,22,32-38,51}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/containers/Container.hpp>

class MyCustomContainer : public touchgfx::Container
{
public:
    MyCustomContainerBase();
    virtual ~MyCustomContainerBase() {}
    virtual void initialize();

    /*
     * Callback Setters
     */
    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)
    {
        somethingHappenedCallback = &callback;
    }

    /*
     * Methods
     */
    virtual void doSomething();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Callback Emitters
     */
    virtual void emitSomethingHappenedCallback()
    {
        if (somethingHappenedCallback && somethingHappenedCallback->isValid())
        {
            somethingHappenedCallback->execute();
        }
    }

    /*
     * Member Declarations
     */
    touchgfx::Box myBox;
    touchgfx::Button myButton;

private:

    /*
     * Callback Declarations
     */
    touchgfx::GenericCallback<>* somethingHappenedCallback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u4E0A\u8A18\u306E\u30E1\u30BD\u30C3\u30C9\u304A\u3088\u3073\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0\u3059\u308B\u305F\u3081\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.cpp`), `\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u5B9A\u7FA9\u3092\u884C\u3044\u307E\u3059\u3002 \u3053\u306E\u30B7\u30F3\u30D7\u30EB\u306A\u8868\u9762\u7684\u306A\u4F8B\u3067\u306F\u3001\u5358\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `somethingHappened`), `\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u767A\u884C\u3059\u308B\u306E\u307F\u3067\u3059\u304C\u3001\u76EE\u7684\u306B\u5408\u308F\u305B\u3066\u3053\u308C\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{23-26}",
    "{23-26}": true
  }), `#include <gui/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);

    myBox.setPosition(0, 0, 250, 250);
    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    myButton.setXY(40, 95);
    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));

    add(myBox);
    add(myButton);
}

void MyCustomContainer::initialize()
{

}

void MyCustomContainer::doSomething()
{
    MyCustomContainer::emitSomethingHappenedCallback();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4F5C\u6210\u304A\u3088\u3073\u4F7F\u7528\u65B9\u6CD5\u306E\u8A73\u7D30\u306A\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../tutorials/tutorial-04",
    mdxType: "Link"
  }, "Tutorial 4: Creating a Scroll Wheel with custom behavior"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);