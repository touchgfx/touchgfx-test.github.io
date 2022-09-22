"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8814],{

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

/***/ 55098:
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
  title: "\u81EA\u8A02\u5BB9\u5668"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-containers",
  "id": "development/ui-development/touchgfx-engine-features/custom-containers",
  "title": "\u81EA\u8A02\u5BB9\u5668",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-containers",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-containers",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-containers",
    "title": "\u81EA\u8A02\u5BB9\u5668"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Position and size",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/position-size"
  },
  "next": {
    "title": "\u5FEB\u53D6\u9EDE\u9663\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  }
};
const assets = {};





const toc = [{
  value: "TouchGFX Designer\u4E2D",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "\u8907\u5408\u81EA\u8A02\u5BB9\u5668",
  id: "composite-custom-containers",
  level: 3
}, {
  value: "\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C",
  id: "custom-triggers-and-actions",
  level: 3
}, {
  value: "\u7A0B\u5F0F\u78BC\u4E2D",
  id: "in-code",
  level: 2
}, {
  value: "\u5275\u5EFA\u64F4\u5C55touchgfx::Container\u985E\u7684\u985E",
  id: "create-a-class-that-extends-the-touchgfxcontainer-class",
  level: 3
}, {
  value: "\u5C07\u5BB9\u5668\u7684\u6240\u6709\u5B50\u5BB9\u5668\u5BA3\u544A\u70BA\u6210\u54E1\u8B8A\u6578",
  id: "declaring-all-children-of-the-container-as-member-variables",
  level: 3
}, {
  value: "\u8A2D\u7F6E\u5BB9\u5668\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6",
  id: "setting-the-width-and-height-of-the-container",
  level: 3
}, {
  value: "\u8A2D\u7F6E\u6BCF\u500B\u5B50\u5BB9\u5668",
  id: "setting-up-each-of-the-children",
  level: 3
}, {
  value: "\u6309\u6B63\u78BA\u9806\u5E8F\u5C07\u6BCF\u500B\u5B50\u5BB9\u5668\u6DFB\u52A0\u5230\u5C64\u6B21\u7D50\u69CB\u4E2D",
  id: "adding-each-of-the-children-to-the-hierarchy-in-the-right-order",
  level: 3
}, {
  value: "\u901A\u904Emethods\u548Ccallbacks\u5BE6\u73FE\u9700\u8981\u7684\u884C\u70BA",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u61C9\u7528\u6642\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4E00\u500B\u5728TouchGFX\u7684\u6A19\u6E96\u5C0F\u90E8\u4EF6\u96C6\u5408\u4E2D\u6C92\u6709\u7684\u5C0F\u90E8\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u7A2E\u5275\u5EFA\u81EA\u5DF1\u7684\u5C0F\u90E8\u4EF6\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\u81EA\u8A02\u5BB9\u5668\u3002 \u81EA\u8A02\u5BB9\u5668\u662F\u4E00\u500B\u5305\u542B\u5176\u4ED6\u73FE\u6709\u5C0F\u90E8\u4EF6\u7684\u7269\u4EF6\uFF0C\u5B83\u7D44\u5408\u4E86\u9019\u4E9B\u5C0F\u90E8\u4EF6\u7684\u8996\u89BA\u8868\u73FE\u548C\u884C\u70BA\u3002 \u5B83\u8207\u50B3\u7D71\u7684\u8907\u5408\u8A2D\u8A08\u6A21\u5F0F\u4E26\u7121\u4E0D\u540C\uFF0C\u6211\u5011\u4E5F\u5C07\u5305\u542B\u7684\u5C0F\u90E8\u4EF6\u7A31\u70BA\u5BB9\u5668\u7684\u5B50\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u8A02\u5BB9\u5668\u7684\u7E6A\u88FD\u6027\u80FD\u901A\u5E38\u6703\u5F88\u9AD8\u3002 \u5B83\u6703\u5229\u7528TouchGFX\u7684\u5E95\u5C64\u7E6A\u5716\u6A5F\u5236\uFF0C\u4E26\u78BA\u5B9A\u5BB9\u5668\u7684\u54EA\u4E9B\u90E8\u5206\u548C\u5B50\u5BB9\u5668\u9700\u8981\u81EA\u52D5\u91CD\u65B0\u7E6A\u88FD\u3002 \u9019\u610F\u5473\u8457\u5728\u4F7F\u7528\u5BB9\u5668\u6642\u7121\u9700\u64D4\u5FC3\u7E6A\u5716\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u6709\u6642\u5019\u53EF\u80FD\u9700\u8981\u6E1B\u5C11\u5C0F\u90E8\u4EF6\u7684\u7A7A\u9593\u5360\u7528\u91CF\uFF0C\u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u66F4\u9AD8\u7D1A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-widgets"
  }), `\u81EA\u8A02\u5C0F\u90E8\u4EF6`), `\u65B9\u6CD5\u53EF\u80FD\u66F4\u5408\u9069\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u9700\u8981\u5728TouchGFX Designer\u4E2D\u5275\u5EFA\u548C\u4F7F\u7528\u81EA\u8A02\u5BB9\u5668\uFF0C\u6211\u5011\u5728\u4E0B\u9762\u7684\u5F71\u7247\u4E2D\u63D0\u4F9B\u4E86\u5982\u4F55\u5728\u5C08\u6848\u4E2D\u4F7F\u7528\u5B83\u5011\u7684\u7D9C\u5408\u4ECB\u7D39\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_YouTube__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    url: "https://youtu.be/nX1nCAA4pyA",
    mdxType: "YouTube"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "composite-custom-containers"
  }), `\u8907\u5408\u81EA\u8A02\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5275\u5EFA\u7531\u5176\u4ED6\u81EA\u8A02\u5BB9\u5668\u7D44\u6210\u7684\u81EA\u8A02\u5BB9\u5668\u3002 \u9019\u53EF\u80FD\u662F\u4E00\u7A2E\u7528\u66F4\u5C0F\u7684\u5143\u4EF6\u5275\u5EFA\u5143\u4EF6\u7684\u6709\u6548\u65B9\u5F0F\u3002 \u70BA\u6B64\uFF0C\u60A8\u53EF\u4EE5\u6DFB\u52A0\u5728\u201CWidgets \u201D\u529F\u80FD\u8868\u4E2D\u627E\u5230\u7684\u5DF2\u5B9A\u7FA9\u81EA\u8A02\u5BB9\u5668\u7684\u5BE6\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.png",
    mdxType: "Figure"
  }, "\u63D2\u5165\u81EA\u8A02\u5BB9\u5668\u7684\u5BE6\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0CTouchGFX Designer\u5C07\u5E6B\u52A9\u60A8\u907F\u514D\u63D2\u5165\u6703\u5C0E\u81F4\u8FF4\u5708\u5F15\u7528\u7684\u5BE6\u4F8B\uFF0C\u5982\u5411\u81EA\u8EAB\u5B9A\u7FA9\u6DFB\u52A0\u81EA\u8A02\u5BB9\u5668\u5BE6\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.png",
    mdxType: "Figure"
  }, "\u6F5B\u5728\u8FF4\u5708\u5F15\u7528\u5C0E\u81F4\u7121\u6CD5\u63D2\u5165\u5BE6\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-triggers-and-actions"
  }), `\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u8A02\u5BB9\u5668\u7684\u4E00\u500B\u5F37\u5927\u4E4B\u8655\u662F\u80FD\u5920\u6307\u5B9A\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\uFF08callbacks\uFF09\u548C\u81EA\u8A02\u64CD\u4F5C\uFF08methods\uFF09\u3002 \u9019\u610F\u5473\u8457\u60A8\u53EF\u4EE5\u70BA\u81EA\u8A02\u5BB9\u5668\u5B9A\u7FA9\u6574\u9AD4\u884C\u70BA\uFF0C\u4F7F\u4E4B\u4E0D\u518D\u53EA\u662F\u5C0F\u90E8\u4EF6\u7684\u53EF\u91CD\u8907\u4F7F\u7528\u96C6\u5408\uFF0C\u9084\u53EF\u4EE5\u8207\u61C9\u7528\u7A0B\u5F0F\u7684\u5176\u9918\u90E8\u5206\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "custom-triggers-and-actions",
    mdxType: "Link"
  }, "\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C"), "\u4E00\u7BC0\u4E2D\u95DC\u65BC\u6B64\u529F\u80FD\u7684\u66F4\u591A\u5167\u5BB9\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `\u7A0B\u5F0F\u78BC\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u8A02\u5BB9\u5668\u7684\u4E00\u500B\u5F37\u5927\u4E4B\u8655\u662F\u80FD\u5920\u6307\u5B9A\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\uFF08callbacks\uFF09\u548C\u81EA\u8A02\u64CD\u4F5C\uFF08methods\uFF09\u3002 \u9019\u610F\u5473\u8457\u60A8\u53EF\u4EE5\u70BA\u81EA\u8A02\u5BB9\u5668\u5B9A\u7FA9\u6574\u9AD4\u884C\u70BA\uFF0C\u4F7F\u4E4B\u4E0D\u518D\u53EA\u662F\u5C0F\u90E8\u4EF6\u7684\u53EF\u91CD\u8907\u4F7F\u7528\u96C6\u5408\uFF0C\u9084\u53EF\u4EE5\u8207\u61C9\u7528\u7A0B\u5F0F\u7684\u5176\u9918\u90E8\u5206\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5275\u5EFA\u64F4\u5C55touchgfx::Container\u985E\u7684\u985E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u5BB9\u5668\u7684\u6240\u6709\u5B50\u5BB9\u5668\u5BA3\u544A\u70BA\u6210\u54E1\u8B8A\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u7F6E\u5BB9\u5668\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u7F6E\u6BCF\u500B\u5B50\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309\u6B63\u78BA\u9806\u5E8F\u5C07\u6BCF\u500B\u5B50\u5BB9\u5668\u6DFB\u52A0\u5230\u5C64\u6B21\u7D50\u69CB\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u904Emethods\u548Ccallbacks\u5BE6\u73FE\u9700\u8981\u7684\u884C\u70BA`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5C07\u5F9E\u982D\u958B\u59CB\uFF0C\u57FA\u65BC\u7A0B\u5F0F\u78BC\u9032\u884C\u69CB\u5EFA\uFF0C\u76F4\u81F3\u5F97\u5230\u4E00\u500B\u7C21\u55AE\u7684\u5168\u529F\u80FD\u81EA\u8A02\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "create-a-class-that-extends-the-touchgfxcontainer-class"
  }), `\u5275\u5EFA\u64F4\u5C55touchgfx::Container\u985E\u7684\u985E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5148\u7528\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u5275\u5EFA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.hpp`), `\u6A19\u982D\u6A94\u3002 \u4F7F\u7528C++\u7E7C\u627F\u4F86\u8A2A\u554F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Container`), `\u7684\u65B9\u6CD5\u548C\u6210\u54E1\uFF08\u8ACB\u8A18\u5F97\u5305\u542B\u6A19\u982D\u6A94`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container.hpp`), `\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u5C07\u5BB9\u5668\u7684\u6240\u6709\u5B50\u5BB9\u5668\u5BA3\u544A\u70BA\u6210\u54E1\u8B8A\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6A19\u982D\u6A94\u4E2D\u5BA3\u544A\u81EA\u8A02\u5BB9\u5668\u5C07\u8981\u5305\u542B\u7684\u5C0F\u90E8\u4EF6\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u5C07\u53EA\u6DFB\u52A0\u4E00\u500B\u65B9\u6846`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myBox`), `\u548C\u4E00\u500B\u6309\u9215`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myButton`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u8A2D\u7F6E\u5BB9\u5668\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5275\u5EFAcpp\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.cpp`), `\uFF0C\u5176\u4E2D\u5305\u542B\u6211\u5011\u525B\u525B\u5275\u5EFA\u7684\u6A19\u982D\u6A94\u3002 \u4F7F\u7528\u69CB\u9020\u51FD\u6578\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setWidth()`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setHeight()`), `\u65B9\u6CD5\uFF0C\u70BA\u81EA\u8A02\u5BB9\u5668\u8A2D\u7F6E\u4EFB\u4F55\u5927\u5C0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u8A2D\u7F6E\u6BCF\u500B\u5B50\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u9700\u8981\u5728\u69CB\u9020\u51FD\u6578\u4E2D\u8A2D\u7F6E\u6BCF\u500B\u5C0F\u90E8\u4EF6\u7684\u5C6C\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u6309\u6B63\u78BA\u9806\u5E8F\u5C07\u6BCF\u500B\u5B50\u5BB9\u5668\u6DFB\u52A0\u5230\u5C64\u6B21\u7D50\u69CB\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u69CB\u9020\u51FD\u6578\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `add()`), `\u65B9\u6CD5\uFF0C\u5C07\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u70BA\u81EA\u8A02\u5BB9\u5668\u7684\u5B50\u5BB9\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u901A\u904Emethods\u548Ccallbacks\u5BE6\u73FE\u9700\u8981\u7684\u884C\u70BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u5411\u81EA\u8A02\u5BB9\u5668\u4E2D\u6DFB\u52A0\u4E00\u4E9B\u884C\u70BA\uFF0C\u6211\u5011\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.hpp`), `\u4E2D\u5B9A\u7FA9\u4E00\u4E9Bmethods\u548Ccallbacks\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u5B9A\u7FA9\u4E86\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `doSomething()`), `\uFF0C\u5176\u552F\u4E00\u76EE\u7684\u662F\u767C\u9001callback `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `somethingHappened`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\uFF0C\u70BA\u4E86\u5411method \u548Ccallback\u6DFB\u52A0\u884C\u70BA\uFF0C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.cpp`), `\u6A94\u4E2D\u5BE6\u73FE\u5B83\u5011\u3002 \u5C0D\u65BC\u9019\u500B\u7C21\u55AE\u7684\u8868\u9762\u7D1A\u7BC4\u4F8B\uFF0C\u6211\u5011\u5C07\u53EA\u767C\u9001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `somethingHappened`), `callback\uFF0C\u4F46\u60A8\u53EF\u4EE5\u8996\u9700\u8981\u9032\u884C\u81EA\u8A02\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }, "\u95DC\u65BC\u5982\u4F55\u5275\u5EFA\u548C\u4F7F\u7528\u81EA\u8A02\u5BB9\u5668\u7684\u66F4\u591A\u5177\u9AD4\u7BC4\u4F8B\uFF0C\u8ACB\u53C3\u8003", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../tutorials/tutorial-04",
    mdxType: "Link"
  }, "\u6559\u7A0B4\uFF1A\u5275\u5EFA\u5177\u6709\u81EA\u8A02\u884C\u70BA\u7684\u6EFE\u8F2A"), "\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);