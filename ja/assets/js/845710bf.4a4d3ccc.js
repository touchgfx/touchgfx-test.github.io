"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[571],{

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

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 29206:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29415);
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
  id: "touchgfx-architecture",
  title: "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-architecture",
  "id": "development/touchgfx-hal-development/touchgfx-architecture",
  "title": "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-architecture.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-architecture",
  "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-architecture",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-architecture",
    "title": "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
  },
  "next": {
    "title": "Generator\u30E6\u30FC\u30B6\uFF65\u30AC\u30A4\u30C9",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-generator"
  }
};
const assets = {};





const toc = [{
  value: "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u30AF\u30E9\u30B9",
  id: "abstraction-layer-classes",
  level: 3
}, {
  value: "TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u8EE2\u9001\u306E\u540C\u671F",
  id: "synchronize-touchgfx-engine-main-loop-with-display-transfer",
  level: 2
}, {
  value: "\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u7D42\u4E86",
  id: "rendering-done",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30EC\u30C7\u30A3",
  id: "display-ready",
  level: 3
}, {
  value: "\u30BF\u30C3\u30C1\u304A\u3088\u3073\u7269\u7406\u30DC\u30BF\u30F3\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u30EC\u30DD\u30FC\u30C8",
  id: "report-touch-and-physical-button-events",
  level: 2
}, {
  value: "\u30BF\u30C3\u30C1\u5EA7\u6A19",
  id: "touch-coordinates",
  level: 3
}, {
  value: "\u305D\u306E\u4ED6\u306E\u5916\u90E8\u30A4\u30D9\u30F3\u30C8",
  id: "other-external-events",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306E\u540C\u671F",
  id: "synchronize-framebuffer-access",
  level: 2
}, {
  value: "\u6B21\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u9818\u57DF\u306E\u30EC\u30DD\u30FC\u30C8",
  id: "report-the-next-available-framebuffer-area",
  level: 2
}, {
  value: "\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u64CD\u4F5C\u306E\u5B9F\u884C",
  id: "perform-render-operations",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u51E6\u7406",
  id: "handle-framebuffer-transfer-to-display",
  level: 2
}, {
  value: "\u9818\u57DF\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u5B8C\u4E86",
  id: "rendering-of-area-complete",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001TouchGFX AL\u306B\u306F\u4E00\u9023\u306E\u7279\u5B9A\u306E\u5F79\u5272\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u5F79\u5272\u306F\u3001AL\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u90E8\u5206(HAL) \u304B\u3001\u901A\u5E38\u306FRTOS(OSAL) \u3092\u4ECB\u3057\u3066TouchGFX\u30A8\u30F3\u30B8\u30F3\u3068\u540C\u671F\u3059\u308BAL\u306E\u4E00\u90E8\u306E\u3044\u305A\u308C\u304B\u306B\u5B9F\u88C5\u3055\u308C\u307E\u3059\u3002 \u6B21\u306E\u8868\u306F\u3001\u524D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u6982\u8AAC\u3057\u305F\u3053\u308C\u3089\u306E\u5F79\u5272\u3092\u307E\u3068\u3081\u305F\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F79\u5272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AA\u30DA\u30EC\u30FC\u30B7\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0 / \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u8EE2\u9001\u306E\u540C\u671F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AA\u30DA\u30EC\u30FC\u30B7\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3068\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-touch-and-physical-button-events"
  }), `\u30BF\u30C3\u30C1\u304A\u3088\u3073\u7269\u7406\u30DC\u30BF\u30F3\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u30EC\u30DD\u30FC\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-framebuffer-access"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306E\u540C\u671F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-the-next-available-framebuffer-area"
  }), `\u6B21\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u9818\u57DF\u306E\u30EC\u30DD\u30FC\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#perform-render-operations"
  }), `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u64CD\u4F5C\u306E\u5B9F\u884C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#handle-framebuffer-transfer-to-display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u51E6\u7406 `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u964D\u306E\u5404\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u4E0A\u8A18\u306E\u5F79\u5272\u3092\u679C\u305F\u3059\u305F\u3081\u306B\u5FC5\u8981\u306A\u4E8B\u9805\u306B\u7126\u70B9\u3092\u5F53\u3066\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001STM32CubeMX\u5185\u306ETouchGFX Generator\u304C\u307B\u3068\u3093\u3069\u306EAL\u3068\u305D\u308C\u306B\u4ED8\u968F\u3059\u308BTouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002 \u6B8B\u308A\u306E\u90E8\u5206\u306FAL\u958B\u767A\u8005\u304C\u624B\u52D5\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u305D\u308C\u3089\u306FTouchGFX Generator\u304B\u3089\u306E\u30B3\u30FC\u30C9\uFF65\u30B3\u30E1\u30F3\u30C8\u3084\u901A\u77E5\u306B\u3088\u3063\u3066\u6307\u793A\u3055\u308C\u307E\u3059\u3002 TouchGFX Generator\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u6B21\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-classes"
  }), `\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u30AF\u30E9\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL\u306B\u306F\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL`), `\u306E\u5177\u4F53\u7684\u306A\u30B5\u30D6\u30AF\u30E9\u30B9\u3092\u901A\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u306FTouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002  \u3053\u306EGenerator\u306F\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u4F5C\u6210\u306E\u4E3B\u8981\u306A\u30C4\u30FC\u30EB\u3067\u3059\u304C\u3001\u3053\u308C\u306B\u3088\u3063\u3066\u3001STM32CubeMX\u304B\u3089\u306E\u8A2D\u5B9A\u3092\u53CD\u6620\u3059\u308BHAL\u306E\u90E8\u5206\u3068\u3001CMSIS V1\u304A\u3088\u3073V2\u5411\u3051\u306EOSAL\u306E\u4E21\u65B9\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `TouchGFX Generator`), `\u306B\u95A2\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4E00\u822C\u7684\u306B\u3001HAL\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306F\u6B21\u306E\u56F3\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, `\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u968E\u5C64`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u8EE2\u9001\u306E\u540C\u671F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u4E3B\u65E8\u306F\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u7D42\u4E86\u6642\u306BTouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3001\u305D\u308C\u4EE5\u4E0A\u30D5\u30EC\u30FC\u30E0\u304C\u751F\u6210\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u6E96\u5099\u304C\u3067\u304D\u305F\u3089\u3001\u30D5\u30EC\u30FC\u30E0\u306E\u751F\u6210\u3092\u7D9A\u884C\u3059\u308B\u3088\u3046\u306B\u3001OSAL\u304B\u3089\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306B\u4FE1\u53F7\u304C\u9001\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u6982\u8AAC\u3057\u305F\u3088\u3046\u306B\u3001TouchGFX AL\u306F\u3053\u306E\u5F79\u5272\u3092\u679C\u305F\u3059\u305F\u3081\u306B\u3001\u901A\u5E38\u306F\u30A8\u30F3\u30B8\u30F3\u306E\u63CF\u753B\u7D42\u4E86\u30D5\u30C3\u30AF\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30EC\u30C7\u30A3\u5272\u8FBC\u307F\u3092\u5229\u7528\u3057\u307E\u3059\u3002 OSAL\u306F\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002\u958B\u767A\u8005\u306F\u3053\u306E\u95A2\u6570\u3067\u3001\u30A8\u30F3\u30B8\u30F3\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u3092\u547C\u3073\u51FA\u3059\u3068\u304D\u306B\u5F85\u6A5F\u3059\u308B\u30BB\u30DE\u30D5\u30A9\u3092\u9001\u51FA\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u3067\u306F\u3001CMSIS V1\u304A\u3088\u3073V2\u5411\u3051\u306E\u5B8C\u5168\u306AOSAL\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-done"
  }), `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u7D42\u4E86`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u7D42\u4E86`), `\u30D5\u30C3\u30AF\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u306F\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u5B8C\u4E86\u5F8C\u306BTouchGFX\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306EAL\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5\u6642\u306B\u306F\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u6642\u304C\u6765\u308B\u307E\u3067\u3001AL\u304C\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u5B9F\u88C5\u3059\u308B\u6A19\u6E96\u7684\u306A\u65B9\u6CD5\u306F\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u304B\u3089\u306E\u8AAD\u51FA\u3057\u306E\u30D6\u30ED\u30C3\u30AD\u30F3\u30B0\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u304C\u5B9F\u73FE\u53EF\u80FD\u3067\u306A\u3044\u5834\u5408\u3001HAL\u958B\u767A\u8005\u306F\u30D6\u30ED\u30C3\u30AF\u3092\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306E\u4EFB\u610F\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u3067\u306F\u3001RTOS\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u3067\u306F\u306A\u304F\u3001\u30B9\u30D4\u30F3\u30ED\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u5F85\u6A5F\u3059\u308B\u7A7A\u306EOSAL\u3092\u751F\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059(\u3053\u3046\u3057\u305F\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u304C\u4F7F\u7528\u3067\u304D\u306A\u3044\u5834\u5408)\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), ` \uFF08\u307E\u305F\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), ` \u3067\u4F7F\u7528\u3055\u308C\u308B\u30BB\u30DE\u30D5\u30A9 / \u30AD\u30E5\u30FC\uFF09\u304C\u9001\u51FA\u3055\u308C\u308B\u3068\u3001TouchGFX\u306F\u6B21\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002 CMSIS V2\u306B\u57FA\u3065\u304F\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u5225\u306E\u90E8\u5206\uFF08\u901A\u5E38\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u540C\u671F\u3057\u305F\u5272\u8FBC\u307F\uFF09\u306B\u3088\u3063\u3066\u8981\u7D20\u304C\u30AD\u30E5\u30FC\u306B\u8FFD\u52A0\u3055\u308C\u308B\u307E\u3067TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u30D6\u30ED\u30C3\u30AF\u3092\u884C\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere

void OSWrappers::waitForVSync()
{
    uint32_t dummyGet;
    // First make sure the queue is empty, by trying to remove an element with 0 timeout.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, 0);

    // Then, wait for next VSYNC to occur.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, osWaitForever);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3001TouchGFX Generator\u3067\u306F\u3001volatile\u5909\u6570\u3092\u4F7F\u7528\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `waitForVSync`), ` \u306B\u5BFE\u3059\u308B\u4EE5\u4E0B\u306E\u5B9F\u88C5\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::waitForVSync()
{
    while(!vsync_sem)
    {
        // Perform other work while waiting
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "TouchGFX\u30A8\u30F3\u30B8\u30F3\u304C\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u751F\u6210\u3092\u5F85\u6A5F\u3057\u3066\u3044\u308B\u9593(", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "While")), " \u3067\u6307\u5B9A) \u306B\u3001\u4ED6\u306E\u30BF\u30B9\u30AF\u304C\u91CD\u8981\u306A\u4F5C\u696D\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-ready"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30EC\u30C7\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u30D6\u30ED\u30C3\u30AF\u89E3\u9664\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30EC\u30C7\u30A3`), `\u4FE1\u53F7\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304B\u3089\u306E\u5272\u8FBC\u307F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u305D\u306E\u3082\u306E\u3001\u307E\u305F\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BF\u30A4\u30DE\u304B\u3089\u9001\u51FA\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4FE1\u53F7\u306E\u9001\u51FA\u5143\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30BF\u30A4\u30D7\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), ` \u30AF\u30E9\u30B9\u306F\u3001\u3053\u306E\u4FE1\u53F7\u306E\u95A2\u6570\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVsync`), `. \u3053\u306E\u95A2\u6570\u306E\u5B9F\u88C5\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u3067\u4F7F\u7528\u3055\u308C\u308B\u5F85\u6A5F\u6761\u4EF6\u3092\u6E80\u305F\u3059\u3053\u3068\u3067\u3001\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u30D6\u30ED\u30C3\u30AF\u89E3\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u8FF0\u306ECMSIS RTOS\u306E\u4F8B\u304B\u3089\u306E\u7D9A\u304D\u3067\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u3092\u30D6\u30ED\u30C3\u30AF\u89E3\u9664\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `vsync_queue`), ` \u306B\u5165\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    if (vsync_queue)
    {
        osMessagePut(vsync_queue, dummy, 0);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u30E1\u30BD\u30C3\u30C9\u306F\u3001LTDC\u306A\u3069\u306E\u5272\u8FBC\u307F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3089\u306E\u5916\u90E8\u4FE1\u53F7\u3001\u307E\u305F\u306F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BF\u30A4\u30DE\u304B\u3089\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30EC\u30D9\u30EB\u3067\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u5909\u6570\u3092\u4F7F\u7528\u3057\u3001\u30BC\u30ED\u3067\u306A\u3044\u5024\u3092\u5272\u308A\u5F53\u3066\u3066while\u30EB\u30FC\u30D7\u304B\u3089\u629C\u3051\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-touch-and-physical-button-events"
  }), `\u30BF\u30C3\u30C1\u304A\u3088\u3073\u7269\u7406\u30DC\u30BF\u30F3\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u30EC\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u3092\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u524D\u306B\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchController`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u5916\u90E8\u5165\u529B\u3092\u53CE\u96C6\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch-coordinates"
  }), `\u30BF\u30C3\u30C1\u5EA7\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304B\u3089\u306E\u5EA7\u6A19\u306F\u3001\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u30AF\u30EA\u30C3\u30AF\uFF65\u30A4\u30D9\u30F3\u30C8\u3001\u30C9\u30E9\u30C3\u30B0\uFF65\u30A4\u30D9\u30F3\u30C8\u3001\u30B8\u30A7\u30B9\u30C1\u30E3\uFF65\u30A4\u30D9\u30F3\u30C8\u306B\u5909\u63DB\u3055\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6E21\u3055\u308C\u307E\u3059\u3002 TouchGFX Generator\u306B\u3088\u3063\u3066\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1-1,6-6}",
    "{1-1,6-6}": true
  }), `static STM32TouchController tc;
static STM32L4DMA dma;
static LCD24bpp display;
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 390, 390);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF65\u30B5\u30A4\u30AF\u30EB\u306E\u9593\u3001\u5165\u529B\u306E\u53CE\u96C6\u6642\u306B\u3001\u30A8\u30F3\u30B8\u30F3\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tc`), ` \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `sampleTouch()`), `\u95A2\u6570\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL\u958B\u767A\u8005\u306B\u3088\u3063\u3066\u884C\u308F\u308C\u308B\u5B9F\u88C5\u3067\u306F\u3001\u8AAD\u51FA\u3057\u30BF\u30C3\u30C1\u5EA7\u6A19\u5024\u3092x\u304A\u3088\u3073y\u306B\u5272\u308A\u5F53\u3066\u3001\u30BF\u30C3\u30C1\u304C\u691C\u51FA\u3055\u308C\u305F\u304B\u3069\u3046\u304B(true\u307E\u305F\u306Ffalse) \u3092\u8FD4\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u304C\u751F\u6210\u3059\u308B\u30AF\u30E9\u30B9\u3067\u306F\u3001TouchController\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u95A2\u6570\u304C\u7A7A\u306B\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 HAL\u958B\u767A\u8005\u306F\u5B9F\u88C5\u3067\u3053\u308C\u3092\u57CB\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u95A2\u6570\u306E\u5B9F\u88C5\u65B9\u6CD5\u306F\u8907\u6570\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `sampleTouch() \u3067\u306E\u30DD\u30FC\u30EA\u30F3\u30B0`), `: \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u3001\u7D50\u679C\u306E\u30DD\u30FC\u30EA\u30F3\u30B0\u3092\u3059\u308B\u3053\u3068\u3067\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9(\u901A\u5E38\u306FI2C) \u304B\u3089\u30BF\u30C3\u30C1\uFF65\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8AAD\u307F\u51FA\u3057\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u3067\u306F\u3001I2C\u306E\u30E9\u30A6\u30F3\u30C9\u30C8\u30EA\u30C3\u30D7\u306B\u6700\u5927\u30671 ms\u304B\u304B\u308A\u3001\u305D\u306E\u9593\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A8\u30F3\u30B8\u30F3\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u308B\u305F\u3081\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5168\u4F53\u7684\u306A\u63CF\u753B\u6642\u9593\u306B\u5F71\u97FF\u304C\u751F\u3058\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5272\u8FBC\u307F\u30D9\u30FC\u30B9`), `\u3082\u30461\u3064\u306E\u65B9\u6CD5\u306F\u3001\u5272\u8FBC\u307F\u306E\u4F7F\u7528\u3067\u3059\u3002 I2C\u306E\u8AAD\u51FA\u3057\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30BF\u30A4\u30DE\u306B\u3088\u3063\u3066\u5B9A\u671F\u7684\u306B\u958B\u59CB\u3055\u308C\u308B\u304B\u3001\u30BF\u30C3\u30C1\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304B\u3089\u306E\u5916\u90E8\u5272\u8FBC\u307F\u3078\u306E\u5FDC\u7B54\u3068\u3057\u3066\u958B\u59CB\u3055\u308C\u307E\u3059\u3002 I2C\u30C7\u30FC\u30BF\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308B\u3068(\u5225\u306E\u5272\u8FBC\u307F)\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u307E\u305F\u306F\u30B0\u30ED\u30FC\u30D0\u30EB\u5909\u6570\u3092\u4ECB\u3057\u3066\u305D\u306E\u30C7\u30FC\u30BF\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController`), ` \u3067\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `(TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210)\u304B\u3089\u306E\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `sampleTouch`), `\u3067RTOS\u642D\u8F09\u306E\u30B7\u30B9\u30C6\u30E0\u3092\u691C\u7D22\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32TouchController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
{
    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)
    {
        x = msg.x;
        y = msg.y;
        return true;
    }
    return false;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u306F\u3001TouchGFX Generator\u306B\u95A2\u3059\u308B\u6B21\u306E\u7AE0\u3067\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "other-external-events"
  }), `\u305D\u306E\u4ED6\u306E\u5916\u90E8\u30A4\u30D9\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30BF\u30F3\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::ButtonController`), `\u3092\u4F7F\u7528\u3057\u3066\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4FE1\u53F7(\u30DC\u30BF\u30F3\u306A\u3069)\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u3078\u306E\u5BFE\u5FDC\u306F\u3001TouchGFX Designer\u5185\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u4F7F\u7528\u65B9\u6CD5\u306F\u524D\u8FF0\u306E\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u3088\u304F\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001ButtonController\u304C\u5FC5\u9808\u3067\u306F\u306A\u3044\u70B9\u304C\u7570\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), ` \u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5B9F\u88C5\u3059\u308B\u30AF\u30E9\u30B9\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3078\u306E\u53C2\u7167\u3092HAL\u306B\u6E21\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyButtonController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-6}",
    "{3-6}": true
  }), `class MyButtonController : public touchgfx::ButtonController
{
  bool sample(uint8_t& key)
  {
    ... //Sample IO, set key, return true/false
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static MyButtonController bc;
void touchgfx_init()
{
  ...
  hal.initialize();
  hal.setButtonController(&bc);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ButtonController\u30AF\u30E9\u30B9\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30B5\u30F3\u30D7\u30EB`), `\uFF65\u30E1\u30BD\u30C3\u30C9\u306F\u5404\u30D5\u30EC\u30FC\u30E0\u306E\u524D\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 True\u3092\u8FD4\u3059\u3068\u3001\u73FE\u5728\u306E\u753B\u9762\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleKeyEvent`), ` \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30E9\u306B\u30AD\u30FC\u5024\u304C\u6E21\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "ButtonController\u3092\u4ECB\u3057\u3066\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3055\u308C\u305F\u5024\u3092Designer\u5185\u306E\u76F8\u4E92\u4F5C\u7528\u306E\u30C8\u30EA\u30AC\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../ui-development/designer-user-guide/interactions-view",
    mdxType: "Link"
  }, "\u76F8\u4E92\u4F5C\u7528"), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-framebuffer-access"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306E\u540C\u671F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8907\u6570\u306E\u30A2\u30AF\u30BF\u30FC\u304C\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306B\u95A2\u308F\u3063\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CPU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u66F8\u304D\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `*`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u652F\u63F4\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u66F8\u304D\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D1\u30E9\u30EC\u30EBRGB\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u6642\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u51FA\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u6642\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8AAD\u307F\u51FA\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), ` \u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4ECB\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u540C\u671F\u3059\u308B\u306E\u3067\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3088\u3046\u3068\u3059\u308B\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB(DMA2D\u306A\u3069)\u3082\u540C\u3058\u3053\u3068\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u901A\u5E38\u306E\u8A2D\u8A08\u3067\u306F\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u30AC\u30FC\u30C9\u3057\u307E\u3059\u304C\u3001\u305D\u306E\u4ED6\u306E\u540C\u671F\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), ` \u30AF\u30E9\u30B9(OSWrappers.cpp)\u5185\u306E\u95A2\u6570\u306E\u4E00\u89A7\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30AF\u30E9\u30B9\u306FTouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3059\u308B\u304B\u3001\u30E6\u30FC\u30B6\u304C\u624B\u52D5\u3067\u751F\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E1\u30BD\u30C3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAC\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `takeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u6392\u4ED6\u7684\u30A2\u30AF\u30BB\u30B9\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 DMA2D\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067(\u5B9F\u884C\u4E2D\u306E\u5834\u5408) \u30A8\u30F3\u30B8\u30F3\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `tryTakeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30ED\u30C3\u30AF\u306E\u5B9F\u884C\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30D6\u30ED\u30C3\u30AF\u3092\u884C\u3044\u307E\u305B\u3093\u304C\u3001takeFrameBufferSemaphore\u3078\u306E\u6B21\u306E\u547C\u3073\u51FA\u3057\u306B\u3088\u3063\u3066\u3001\u305D\u306E\u547C\u3073\u51FA\u3057\u5143\u304C\u78BA\u5B9F\u306B\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphoreFromISR`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5272\u8FBC\u307F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u306F\u3001OSWrappers\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3001RTOS\u306E\u9078\u629E\u306B\u5FDC\u3058\u3066\u3053\u306E\u540C\u671F\u3092\u5B9F\u884C\u3059\u308B\u95A2\u6570\u306E\u5B9F\u88C5\u3092\u4F7F\u7528\u3057\u3066\u540C\u671F\u3092\u884C\u3046ChromART\u30C9\u30E9\u30A4\u30D0\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-the-next-available-framebuffer-area"
  }), `\u6B21\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u9818\u57DF\u306E\u30EC\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6226\u7565\u306B\u95A2\u4FC2\u306A\u304F\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u30D4\u30AF\u30BB\u30EB\u3092\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u30E1\u30E2\u30EA\u9818\u57DF\u3092\u30C6\u30A3\u30C3\u30AF\u3054\u3068\u306B\u628A\u63E1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30B7\u30F3\u30B0\u30EB\u307E\u305F\u306F\u30C0\u30D6\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u6226\u7565\u3092\u4F7F\u7528\u3057\u3066\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5168\u5E45\u3001\u9AD8\u3055\u3001\u30D3\u30C3\u30C8\u6DF1\u5EA6\u306B\u5F93\u3063\u3066\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u30E1\u30E2\u30EA\u9818\u57DF\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002 \u30C0\u30D6\u30EB\u30FB\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A\u3067\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u304C2\u3064\u306E\u30D0\u30C3\u30D5\u30A1\u9593\u306E\u30B9\u30EF\u30C3\u30D4\u30F3\u30B0\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u4E00\u90E8\u5206\u306B\u5236\u9650\u3067\u304D\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getTFTCurrentLine()`), ` \u30E1\u30BD\u30C3\u30C9\u3092HAL\u30B5\u30D6\u30AF\u30E9\u30B9\u5185\u306B\u518D\u5B9F\u88C5\u3067\u304D\u307E\u3059\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306E\u63CF\u753B\u7528\u306B\u4FDD\u5B58\u3055\u308C\u308B\u6700\u5F8C\u306E\u30E9\u30A4\u30F3\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u90E8\u5206\u7684\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u6226\u7565\u3092\u4F7F\u7528\u3057\u3066\u3001\u958B\u767A\u8005\u306F\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u304C\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u306B\u4F7F\u7528\u3059\u308B1\u3064\u4EE5\u4E0A\u306E\u30E1\u30E2\u30EA\uFF65\u30D6\u30ED\u30C3\u30AF\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u3067\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6226\u7565\u306E\u8A2D\u5B9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "perform-render-operations"
  }), `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u64CD\u4F5C\u306E\u5B9F\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3068\u8868\u793A\u3060\u3051\u3092\u76EE\u7684\u3068\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u307B\u3068\u3093\u3069\u3042\u308A\u307E\u305B\u3093\u3002 \u305D\u306E\u4ED6\u306E\u30BF\u30B9\u30AF\u3082CPU\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX\u306E1\u3064\u306E\u76EE\u6A19\u306F\u3001\u3067\u304D\u308B\u9650\u308A\u5C11\u306A\u3044CPU\u30B5\u30A4\u30AF\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u63CF\u753B\u3059\u308B\u3053\u3068\u3067\u3059\u3002 HAL\u30AF\u30E9\u30B9\u306F\u3001\u591A\u304F\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9(\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u6A5F\u80FD) \u306B\u3042\u308BDMA2D\u3092\u62BD\u8C61\u5316\u3057\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u3067\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306A\u3069\u306E\u30A2\u30BB\u30C3\u30C8\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u3068\u304D\u306B\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u3001HAL\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4E00\u90E8\u307E\u305F\u306F\u5168\u90E8\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u300Cblit\u300D(\u8EE2\u9001) \u3059\u308B\u6A5F\u80FD\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u305D\u306E\u6A5F\u80FD\u304C\u3042\u308B\u5834\u5408\u3001\u63CF\u753B\u64CD\u4F5C\u306FCPU\u304C\u51E6\u7406\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001HAL\u306B\u59D4\u8B72\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A8\u30F3\u30B8\u30F3\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getBlitCaps()`), ` \u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u6A5F\u80FD\u306E\u8AAC\u660E\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002 HAL\u30B5\u30D6\u30AF\u30E9\u30B9\u306F\u3053\u308C\u3092\u518D\u5B9F\u88C5\u3057\u3066\u305D\u306E\u6A5F\u80FD\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A8\u30F3\u30B8\u30F3\u306F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306B\u3001HAL\u30AF\u30E9\u30B9\u306B\u5BFE\u3059\u308B\u64CD\u4F5C\uFF08DMA\u306E\u64CD\u4F5C\u3092\u30AD\u30E5\u30FC\u306B\u5165\u308C\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::blitCopy`), `,\u306A\u3069\uFF09\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 HAL\u304C\u5FC5\u8981\u306A\u6A5F\u80FD\u3092\u30EC\u30DD\u30FC\u30C8\u3057\u306A\u3044\u5834\u5408\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF65\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, ` \u591A\u304F\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306FChromART\u30C1\u30C3\u30D7\u304C\u642D\u8F09\u3055\u308C\u3066\u304A\u308A\u3001\u3053\u308C\u306F\u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30EB\u30D5\u30A1\uFF65\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u6642\u306B\u5916\u90E8Flash\u30E1\u30E2\u30EA\u306A\u3069\u306E\u30C7\u30FC\u30BF\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u79FB\u52D5\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u591A\u304F\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u3001TouchGFX Generator\u3067ChromART\u30C9\u30E9\u30A4\u30D0\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001ChromART\u30C1\u30C3\u30D7\u3092\u4F7F\u7528\u3057\u3066\u8907\u6570\u306E\u300Cblit\u300D\u64CD\u4F5C\u306E\u6A5F\u80FD\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handle-framebuffer-transfer-to-display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u51E6\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u305F\u3081\u3001TouchGFX AL\u3067\u306F\u300C\u9818\u57DF\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u5B8C\u4E86\u300D\u30D5\u30C3\u30AF\u304C\u3088\u304F\u5229\u7528\u3055\u308C\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4E00\u90E8\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u30A8\u30F3\u30B8\u30F3\u304CAL\u306B\u4FE1\u53F7\u3092\u9001\u308A\u307E\u3059\u3002 AL\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u3053\u306E\u90E8\u5206\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u65B9\u6CD5\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-of-area-complete"
  }), `\u9818\u57DF\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u5B8C\u4E86`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30FC\u30C9\u3067\u306F\u3001\u3053\u306E\u30D5\u30C3\u30AF\u306F\u4EEE\u60F3\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), `\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u4ED8\u304D\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u3001\u6BCE\u56DE\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u5F8C\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u306E\u305F\u3081\u306B\u884C\u3046\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u8EE2\u9001\u306F\u3001LTDC\u306E\u521D\u671F\u5316\u5F8C\u306B\u4E00\u5B9A\u306E\u5468\u671F\u3067\u7D99\u7D9A\u7684\u306B\u5B9F\u884C\u3055\u308C\u308B\u306E\u3067\u3001\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5\u306F\u7A7A\u306E\u307E\u307E\u306B\u3057\u3066\u304A\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u4ED6\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30BF\u30A4\u30D7\uFF08SPI\u30848080\u306A\u3069\uFF09\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u624B\u52D5\u3067\u8EE2\u9001\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u95A2\u6570\u306E\u5B9F\u88C5\u306B\u3088\u3063\u3066\u3001\u958B\u767A\u8005\u306FGRAM\u642D\u8F09\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u5F53\u8A72\u9818\u57DF\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u624B\u52D5\u306B\u3088\u308B\u8EE2\u9001\u3092\u958B\u59CB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-9}",
    "{9-9}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)
{
    HAL::flushFrameBuffer(rect); //call superclass

    //start transfer if not running already!
    if (!IsTransmittingData())
    {
        const uint8_t* pixels = ...; // Calculate pixel address
        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
    else
    {
       ... // Queue rect for later or wait here
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u3055\u307E\u3056\u307E\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30B5\u30DD\u30FC\u30C8\u65B9\u6CD5\u306E\u5177\u4F53\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001\u30B7\u30CA\u30EA\u30AA\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);