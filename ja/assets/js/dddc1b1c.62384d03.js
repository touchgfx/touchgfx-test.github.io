"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4328],{

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

/***/ 61783:
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
  id: "creating-dynamic-l8-images",
  title: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F5C\u6210"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/creating-dynamic-l8-images",
  "id": "development/ui-development/scenarios/creating-dynamic-l8-images",
  "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F5C\u6210",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/creating-dynamic-l8-images",
  "permalink": "/4.20/ja/docs/development/ui-development/scenarios/creating-dynamic-l8-images",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "creating-dynamic-l8-images",
    "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F5C\u6210"
  },
  "sidebar": "docs",
  "previous": {
    "title": "L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306E\u524A\u6E1B",
    "permalink": "/4.20/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/ja/docs/category/scenarios-2"
  }
};
const assets = {};


const toc = [{
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF",
  id: "dynamic-l8-images",
  level: 2
}, {
  value: "24\u30D3\u30C3\u30C8\uFF65\u30D1\u30EC\u30C3\u30C8\u306B\u3088\u308B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F5C\u6210",
  id: "creating-a-dynamic-l8-image-with-24-bit-palette",
  level: 3
}, {
  value: "\u30D1\u30EC\u30C3\u30C8\u3078\u306E\u30A2\u30AF\u30BB\u30B9",
  id: "accessing-the-palette",
  level: 3
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F8B",
  id: "dynamic-l8-bitmap-example",
  level: 2
}, {
  value: "\u30D1\u30EC\u30C3\u30C8\u306E\u64CD\u4F5C",
  id: "manipulating-the-palette",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F7F\u7528\u65B9\u6CD5\u3001\u7279\u306B\u30D1\u30EC\u30C3\u30C8\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/dynamic-bitmaps"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u6982\u8981\u306B\u3064\u3044\u3066\u306F\u3053\u3061\u3089`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-the-l8-image-format-to-reduce-memory-consumption"
  }), `L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u6982\u8981\u306B\u3064\u3044\u3066\u306F\u3053\u3061\u3089`), `\u3092\u304A\u8AAD\u307F\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-l8-images"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306F\u3001\u4ED6\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3068\u540C\u3058\u3088\u3046\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u304C\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u7528\u306B\u4F5C\u6210\u3059\u308B\u30D1\u30EC\u30C3\u30C8\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u70B9\u304C\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u4EE5\u4E0B\u306E3\u3064\u306E\u30BF\u30A4\u30D7\u306E\u30D1\u30EC\u30C3\u30C8\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D1\u30EC\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u30D3\u30C3\u30C8\u3001\u8D64\u8272\u3001\u7DD1\u8272\u3001\u9752\u8272\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30A2\u30EB\u30D5\u30A1\u30C1\u30E3\u30F3\u30CD\u30EB\u305D\u308C\u305E\u308C\u306B8\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u30D3\u30C3\u30C8\u3001\u8D64\u8272\u3001\u7DD1\u8272\u3001\u9752\u8272\u305D\u308C\u305E\u308C\u306B8\u30D3\u30C3\u30C8\u3067\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30A2\u30EB\u30D5\u30A1\u30C1\u30E3\u30F3\u30CD\u30EB\u306A\u3057`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u30D3\u30C3\u30C8\u3001\u8D64\u8272\u306B\u306F5\u30D3\u30C3\u30C8\u3001\u7DD1\u8272\u306B\u306F6\u30D3\u30C3\u30C8\u3001\u9752\u8272\u306B\u306F5\u30D3\u30C3\u30C8\u3067\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30A2\u30EB\u30D5\u30A1\u30C1\u30E3\u30F3\u30CD\u30EB\u306A\u3057`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-dynamic-l8-image-with-24-bit-palette"
  }), `24\u30D3\u30C3\u30C8\uFF65\u30D1\u30EC\u30C3\u30C8\u306B\u3088\u308B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u753B\u50CF\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u300124\u30D3\u30C3\u30C8\uFF65\u30D1\u30EC\u30C3\u30C8\u3067100x100\u30D4\u30AF\u30BB\u30EB\u306EL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u547C\u3073\u51FA\u3057\u3067\u3001100x100 L8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306824\u30D3\u30C3\u30C8\uFF65\u30D1\u30EC\u30C3\u30C8\u304C\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3057\u305F\u3002 \u30D1\u30EC\u30C3\u30C8\u306B\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u7528\u306B256\u8272\u304C\u4FDD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u3053\u306E\u8272\u6570\u306F\u30E1\u30E2\u30EA\u6D88\u8CBB\u3092\u6291\u3048\u308B\u305F\u3081\u306B\u76EE\u7684\u306E\u30B5\u30A4\u30BA\u306B\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "accessing-the-palette"
  }), `\u30D1\u30EC\u30C3\u30C8\u3078\u306E\u30A2\u30AF\u30BB\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF08\u6700\u521D\u306E32\u30D3\u30C3\u30C8\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30A2\u30C9\u30EC\u30B9\u306E\uFF09\u30D4\u30AF\u30BB\u30EB\u306E\u3059\u3050\u5F8C\u306E2\u30D0\u30A4\u30C8\u306B\u306F\u3001L8\u30D1\u30EC\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\uFF08\u30EA\u30C8\u30EB\uFF65\u30A8\u30F3\u30C7\u30A3\u30A2\u30F3\u3067\uFF09\u683C\u7D0D\u3055\u308C\u3001\u305D\u306E\u5F8C\u306E2\u30D0\u30A4\u30C8\u306B\u306F\u3001\u30D1\u30EC\u30C3\u30C8\u5185\u306E\u30A8\u30F3\u30C8\u30EA\u6570\u304C\uFF08\u30EA\u30C8\u30EB\uFF65\u30A8\u30F3\u30C7\u30A3\u30A2\u30F3\u3067\uFF09\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u5F8C\u306B\u306F\u5B9F\u969B\u306E\u30D1\u30EC\u30C3\u30C8\u306E\u8272\u304C\u7D9A\u304D\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30D1\u30EC\u30C3\u30C8\u306E\u8272\u306F\u30D4\u30AF\u30BB\u30EB\uFF0832\u30D3\u30C3\u30C8\u5272\u5F53\u3066\uFF09\u306E4\u30D0\u30A4\u30C8\u5F8C\u308D\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30EC\u30C3\u30C8\u306E\u30DD\u30A4\u30F3\u30BF\uFF08\u73FE\u6642\u70B9\u3067\u672A\u521D\u671F\u5316\uFF09\u306F\u6B21\u306E\u3088\u3046\u306B\u3057\u3066\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Get a pointer to the bitmap data (pixels and palette)
uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);

//1 byte pr pixel, round up to 32-bit
uint32_t byteSize = 100*100;
byteSize = ((byteSize + 3) & ~3);

//Palette size is saved in byte 2 and 3
int palSize = (data[3] << 8) | data[2];

//Palette starts four bytes after the pixels
uint8_t* pal = (data + byteSize + 4);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-l8-bitmap-example"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u304B\u3089\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F5C\u6210\u65B9\u6CD5\u3068\u30D1\u30EC\u30C3\u30C8\u306E\u64CD\u4F5C\u65B9\u6CD5\u306B\u3064\u3044\u3066\u3001\u4F8B\u3092\u901A\u3057\u3066\u898B\u3066\u3044\u304D\u307E\u3059\u3002 \u30D1\u30EC\u30C3\u30C8\u306E\u64CD\u4F5C\u306F\u3001\u4E00\u822C\u7684\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u901A\u5E38\u306F\u884C\u3044\u307E\u305B\u3093\u3002 \u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30D1\u30EC\u30C3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u751F\u6210\u3059\u308B\u65B9\u6CD5\u306E\u5B9F\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001TouchGFX Designer\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u4F5C\u6210\u3057\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u767D\u3044\u30DC\u30C3\u30AF\u30B9\u3092\u633F\u5165\u3057\u3001\u305F\u3068\u3048\u3070x=140, y=8\u306E\u4F4D\u7F6E\u306B\u753B\u50CF\u3092\u633F\u5165\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.png",
    mdxType: "Figure"
  }, "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u3066\u3001Screen1View.cpp\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u521D\u671F\u5316\u3057\u3066\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u3092\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `setupScreen`), `\u306B\u633F\u5165\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `200x256\u30D4\u30AF\u30BB\u30EB\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 L8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306E\u5404\u30D4\u30AF\u30BB\u30EB\u306F1\u30D0\u30A4\u30C8\u3067\u3042\u308B\u3053\u3068\u3092\u899A\u3048\u3066\u304A\u3044\u3066\u304F\u3060\u3055\u3044\u3002 \u753B\u50CF\u306E\u5404\u884C\u306B\u7570\u306A\u308B\u8272\u3092\u4ED8\u3051\u307E\u3059\u3002 \u6700\u521D\u306E\u884C\u306F\u30AB\u30E9\u30FC0\u3001\u6700\u5F8C\u306E\u884C\u306F\u30AB\u30E9\u30FC255\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u30D1\u30EC\u30C3\u30C8\u5185\u306E\u8272\u3092\u521D\u671F\u5316\u3057\u307E\u3059\u3002 \u30D1\u30EC\u30C3\u30C8\u306E\u958B\u59CB\u30A2\u30C9\u30EC\u30B9\u3092\u8A08\u7B97\u3057\u3001256\u8272\u306ERGB\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u7DD1\u8272\u304B\u3089\u8D64\u8272\u3078\u79FB\u308A\u3001\u518D\u3073\u7DD1\u8272\u306B\u623B\u308B\u8272\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
uint32_t cacheBuffer[320*1024/4]; //simulate PSRAM
uint16_t* psram = (uint16_t*)cacheBuffer;
#else
uint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers
#endif

Screen1View::Screen1View()
{
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();

    //Create one dynamic bitmap
    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache
    const uint16_t palSize = 256;
    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);
    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));

    if (dynamicBitmap1 == BITMAP_INVALID)
    {
        touchgfx_printf("Unable to create dynamic bitmap\\n");
    }
    else
    {
        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);

        uint8_t* pixel = data;
        //make colored rows
        for (int y = 0; y<256; y++)
        {
            for (int x = 0; x<200; x++)
            {
                *pixel++ = y;
            }
        }

        uint32_t byteSize = 200*256;
        byteSize = ((byteSize + 3) & ~3);

        //Palette starts four bytes after the pixels
        uint8_t* pal = (data + byteSize + 4);

        //Make palette with 256 colors from green to red to green
        for (int i = 0; i < palSize; i++)
        {
            //BGR
            pal[i * 3 + 0] = 0x00;
            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));
            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u3063\u3066\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u6B21\u306E\u3088\u3046\u306A\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",
    mdxType: "Figure"
  }, "L8\u753B\u50CF\u306E\u8868\u793A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "manipulating-the-palette"
  }), `\u30D1\u30EC\u30C3\u30C8\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u4F7F\u7528\u3059\u308B\u30D1\u30EC\u30C3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308C\u3070\u3001\u7C21\u5358\u306B\u30D1\u30EC\u30C3\u30C8\u3092\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u30011\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u305A\u3064\u4E0B\u306B\u8272\u3092\u5FAA\u74B0\u3055\u305B\u3001\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u753B\u50CF\u3092\u5F37\u5236\u7684\u306B\u518D\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
void Screen1View::handleTickEvent()
{
    //get palette address
    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());
    uint32_t byteSize = 200*256;
    byteSize = ((byteSize + 3) & ~3);
    const int palSize = (data[3] << 8) | data[2];
    uint8_t* pal = (data + byteSize + 4);

    //Cycle palette, copy color 0
    int8_t blue = pal[0], green = pal[1], red = pal[2];

    //Move palette down, 1->0, 2->1, ...
    for (int i = 3; i < palSize * 3; i++)
    {
        pal[i - 3] = pal[i];
    }

    //Insert color 0 as color 255
    pal[(palSize - 1) * 3 + 0] = blue;
    pal[(palSize - 1) * 3 + 1] = green;
    pal[(palSize - 1) * 3 + 2] = red;

    //Force redraw by invalidating
    imageDynamic.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u3063\u3066\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306E\u8272\u304C\u300C\u4E0A\u65B9\u306B\u300D\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "200",
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",
    mdxType: "Figure"
  }, "L8\u30D1\u30EC\u30C3\u30C8\u306E\u5FAA\u74B0"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);