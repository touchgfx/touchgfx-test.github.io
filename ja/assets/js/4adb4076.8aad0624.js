"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9363],{

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

/***/ 82221:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "preliminary-considerations",
  title: "\u4E88\u5099\u8003\u5BDF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/preliminary-considerations",
  "id": "development/hardware-selection/preliminary-considerations",
  "title": "\u4E88\u5099\u8003\u5BDF",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/hardware-selection/preliminary-considerations.mdx",
  "sourceDirName": "development/hardware-selection",
  "slug": "/development/hardware-selection/preliminary-considerations",
  "permalink": "/4.20/ja/docs/development/hardware-selection/preliminary-considerations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "preliminary-considerations",
    "title": "\u4E88\u5099\u8003\u5BDF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u9078\u629E\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-selection-introduction"
  },
  "next": {
    "title": "Hardware Components",
    "permalink": "/4.20/ja/docs/category/hardware-components"
  }
};
const assets = {};



const toc = [{
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u89E3\u50CF\u5EA6",
  id: "display-resolution",
  level: 2
}, {
  value: "\u8272\u6DF1\u5EA6",
  id: "color-depth",
  level: 2
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u306E\u8A08\u7B97",
  id: "framebuffer-size-calculation",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "display",
  level: 2
}, {
  value: "\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "interface",
  level: 3
}, {
  value: "\u30B5\u30A4\u30BA",
  id: "size",
  level: 3
}, {
  value: "\u30BF\u30C3\u30C1",
  id: "touch",
  level: 3
}, {
  value: "\u9759\u96FB\u5BB9\u91CF\u5F0F",
  id: "capacitive",
  level: 4
}, {
  value: "\u62B5\u6297\u819C\u5F0F",
  id: "resistive",
  level: 4
}, {
  value: "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3",
  id: "animations",
  level: 2
}, {
  value: "\u6A5F\u68B0\u8A2D\u8A08\u306E\u8981\u4EF6",
  id: "mechanical-design-requirements",
  level: 2
}, {
  value: "1\u79D2\u5F53\u305F\u308A\u306E\u30D5\u30EC\u30FC\u30E0\u6570\uFF08FPS\uFF09",
  id: "frames-per-second",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u95A2\u3059\u308B\u6C7A\u5B9A\u3092\u884C\u3046\u524D\u306B\u8003\u616E\u3059\u3079\u304D\u4E8B\u9805\u3078\u306E\u6307\u91DD\u3092\u793A\u3059\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059\u3002 \u88FD\u54C1\u306F\u305D\u308C\u305E\u308C\u7570\u306A\u3063\u3066\u304A\u308A\u57FA\u6E96\u3084\u8981\u4EF6\u3082\u7570\u306A\u308A\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3053\u3053\u3067\u306F\u3001\u6C7A\u5B9A\u3092\u4E0B\u3059\u524D\u306B\u3069\u306E\u3088\u3046\u306A\u3053\u3068\u3092\u8003\u616E\u3059\u3079\u304D\u304B\u3001\u3044\u304F\u3064\u304B\u30D2\u30F3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/hardware-selection.png",
    noShadow: true,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u53D6\u308A\u4E0A\u3052\u308B\u30C8\u30D4\u30C3\u30AF\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8868\u793A\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u30E1\u30E2\u30EA\u8981\u4EF6\u3001UI\u306B\u5FC5\u8981\u306A\u6027\u80FD\u3001\u88FD\u54C1\u306E\u7269\u7406\u7684\u8A2D\u8A08\u3092\u30AB\u30D0\u30FC\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-resolution"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u89E3\u50CF\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u89E3\u50CF\u5EA6\u3068\u30A2\u30B9\u30DA\u30AF\u30C8\u6BD4\u306F\u5B9F\u306B\u3055\u307E\u3056\u307E\u3067\u3059\u3002 \u4E00\u822C\u7684\u306B\u3001TouchGFX\u306F\u3053\u308C\u3089\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u306F\u4F9D\u5B58\u3057\u307E\u305B\u3093\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u89E3\u50CF\u5EA6\u306F\u9069\u5207\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u9078\u629E\u3059\u308B\u969B\u306E\u5927\u304D\u306A\u8981\u56E0\u306E1\u3064\u3067\u3042\u308A\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u89E3\u50CF\u5EA6\u304C\u9AD8\u3044\u307B\u3069\u30D4\u30AF\u30BB\u30EB\u6570\u304C\u5927\u304D\u304F\u306A\u308A\u3001\u63CF\u753B\u304A\u3088\u3073\u8EE2\u9001\u3059\u308B\u30C7\u30FC\u30BF\u91CF\u3082\u5897\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u300116/24bpp\uFF08bits per pixel\uFF09\u3067XGA\uFF081024x768\uFF09\u307E\u3067\u306E\u89E3\u50CF\u5EA6\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u304A\u308A\u3001\u30EF\u30A4\u30C9\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3084\u30E9\u30A6\u30F3\u30C9\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306A\u3069\u306E\u975E\u6A19\u6E96\u306E\u89E3\u50CF\u5EA6\u3082\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 XGA\u3092\u8D85\u3048\u308B\u89E3\u50CF\u5EA6\u306E\u5834\u5408\u3001\u901A\u5E38\u306F\u8272\u6DF1\u5EA6\u30841\u79D2\u3042\u305F\u308A\u306E\u30D5\u30EC\u30FC\u30E0\u6570\u306A\u3069\u306B\u5236\u9650\u304C\u751F\u3058\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u6A19\u6E96\u7684\u306A\u89E3\u50CF\u5EA6\u306E3\u3064\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/display-resolution.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u89E3\u50CF\u5EA6\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u3082\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B5\u30A4\u30BA\u304C\u5927\u304D\u3044\u307B\u3069\u753B\u50CF\u304C\u9BAE\u660E\u306B\u306A\u308A\u9AD8\u3044\u89E3\u50CF\u5EA6\u306E\u5229\u70B9\u304C\u8A8D\u8B58\u3055\u308C\u307E\u3059\u304C\u3001\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306E\u5897\u5927\u306F\u30B3\u30B9\u30C8\u306E\u5897\u5927\u3092\u62DB\u304F\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5408\u3063\u305F\u89E3\u50CF\u5EA6\u3092\u9078\u629E\u3059\u308B\u3068\u304D\u306B\u3001\u8003\u616E\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u306B\u306F\u6B21\u306E\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30A8\u30F3\u30C9\u30E6\u30FC\u30B6\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30BB\u30B0\u30E1\u30F3\u30C8\u306F\u3069\u306E\u3042\u305F\u308A\u304B`), `\u30E6\u30FC\u30B6\u306E\u591A\u304F\u306F\u9AD8\u3044\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u3092\u6C42\u3081\u308B\u306E\u3067\u3059\u304C\u3001\u3044\u304F\u3064\u304B\u306E\u7523\u696D\u7528\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u30B3\u30B9\u30C8\u8EFD\u6E1B\u3084\u5B9F\u88C5\u306E\u5BB9\u6613\u3055\u306E\u305F\u3081\u306B\u3001\u9AD8\u3044\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u3092\u6C42\u3081\u306A\u3044\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u5C0F\u3055\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u305F\u304F\u3055\u3093\u4F7F\u7528\u3057\u3066\u3044\u308B\u304B`), `\u5C0F\u3055\u3044\u30C6\u30AD\u30B9\u30C8\u306E\u5927\u304D\u306A\u30D6\u30ED\u30C3\u30AF\u304C\u3042\u308B\u3068\u3001\u901A\u5E38\u306F\u9AD8\u89E3\u50CF\u5EA6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u65B9\u304C\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u304C\u9AD8\u304F\u306A\u308B\u306E\u3067\u3001\u306F\u308B\u304B\u306B\u8AAD\u307F\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u901A\u5E38\u3001\u591A\u304F\u306E\u7570\u306A\u308B\u9805\u76EE\u3092\u4E00\u5EA6\u306B1\u3064\u306E\u753B\u9762\u306B\u8868\u793A\u3059\u308B\u306E\u304B`), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u5927\u304D\u3044\u307B\u3069\u8868\u793A\u30A8\u30EA\u30A2\u304C\u5E83\u304F\u306A\u308B\u306E\u3067\u3001\u8868\u793A\u3067\u304D\u308B\u9805\u76EE\u306E\u6570\u3082\u5897\u3048\u307E\u3059\u3057\u3001\u7279\u5B9A\u306E\u9805\u76EE\u3092\u3088\u308A\u30AF\u30EA\u30A2\u306B\u8868\u793A\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\u8272\u6DF1\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306E\u5927\u304D\u306A\u8981\u56E0\u306F\u8272\u6DF1\u5EA6\uFF08\u30D4\u30AF\u30BB\u30EB\u3042\u305F\u308A\u306E\u30D3\u30C3\u30C8\u6570\uFF09\u3067\u3001\u3053\u308C\u306F\u753B\u50CF\u5185\u30671\u3064\u306E\u30D4\u30AF\u30BB\u30EB\u304C\u4FDD\u6301\u3067\u304D\u308B\u60C5\u5831\u306E\u91CF\u3092\u793A\u3059\u3082\u306E\u3067\u3059\u3002\u3064\u307E\u308A\u30011\u3064\u306E\u30D4\u30AF\u30BB\u30EB\u306B\u7570\u306A\u308B\u8272\u3092\u4F55\u8272\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u306E\u304B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "1bpp\u304A\u3088\u307324bpp\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3055\u307E\u3056\u307E\u306A\u8272\u6DF1\u5EA6\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u304A\u308A\u300116bpp GUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u309224bpp\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\u306F\u53EF\u80FD\u3067\u3059\u304C\u3001\u9006\u306B\u300116bit\u30AB\u30E9\u30FC\u306E\u8868\u793A\u80FD\u529B\u3057\u304B\u306A\u3044\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306724bpp\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u554F\u984C\u304C\u751F\u3058\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u5FAE\u5999\u306A\u8272\u5408\u3044\u3092\u6301\u3064\u8907\u96D1\u306A\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u3001\u5143\u306E\u753B\u50CF\u306B\u3067\u304D\u308B\u3060\u3051\u8FD1\u3065\u3051\u308B\u305F\u3081\u306B\u306F\u3001\u3088\u308A\u9AD8\u3044\u8272\u6DF1\u5EA6\u304C\u6C42\u3081\u3089\u308C\u307E\u3059\u3002 \u9078\u629E\u3059\u308B\u8272\u6DF1\u5EA6\u306F\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u91CF\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3088\u308A\u4F4E\u3044\u8272\u6DF1\u5EA6\u3067\u8868\u73FE\u3067\u304D\u308B\u3053\u3068\u3092\u904E\u5C0F\u8A55\u4FA1\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u6700\u65B0\u306E\u591A\u304F\u306EUI\u8A2D\u8A08\u601D\u60F3\u306F\u3001\u5358\u8ABF\u5316\u3055\u308C\u305F\u8272\u96C6\u7D04\u5EA6\u306E\u4F4E\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4E2D\u5FC3\u306B\u5C55\u958B\u3055\u308C\u3066\u3044\u308B\u304B\u3089\u3067\u3059\uFF08Google\u306E\u30DE\u30C6\u30EA\u30A2\u30EB\uFF65\u30C7\u30B6\u30A4\u30F3\u306A\u3069\uFF09\u3002 TouchGFX\u3067\u306F\u3001\u4E00\u9023\u306E\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u4E00\u3064\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u4F4E\u3044\u8272\u6DF1\u5EA6\u3067\u8907\u96D1\u306A\u753B\u50CF\u3092\u8868\u73FE\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002 \u6B21\u306B\u3001\u4F4E\u3044\u8272\u6DF1\u5EA6\u3067\u3082\u5B9F\u73FE\u53EF\u80FD\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F8B\u3092\u3044\u304F\u3064\u304B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/low-color.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }, "\u4F4E\u3044\u8272\u6DF1\u5EA6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u8272\u6DF1\u5EA6\u3092\u9078\u629E\u3059\u308B\u3068\u304D\u306B\u3001\u8003\u616E\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u306B\u306F\u6B21\u306E\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30EA\u30A2\u30EB\u306A\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u306E\u304B`), `\u30EA\u30A2\u30EB\u306A\u753B\u50CF\u307E\u305F\u306F\u30DE\u30EB\u30C1\u30EC\u30A4\u30E4\u306E\u753B\u50CF\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4E21\u65B9\u306B24bpp\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u300216bpp\u3067\u306F\u3001\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E\u8272\u304C\u5341\u5206\u306B\u8868\u793A\u3055\u308C\u306A\u3044\u5834\u5408\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002 \u305F\u3060\u3057\u591A\u304F\u306E\u5834\u5408\u306F16bpp\u3067\u5341\u5206\u3067\u3042\u308A\u3001\u3053\u308C\u304C\u4ECA\u3067\u3082\u696D\u754C\u6A19\u6E96\u306E1\u3064\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5FC5\u8981\u3068\u3059\u308B\u5185\u5BB9\u3092\u4F1D\u3048\u308B\u305F\u3081\u306B\u672C\u5F53\u306B\u5FC5\u8981\u306A\u306E\u306F\u3001\u5B9F\u306F\u30B0\u30EC\u30FC\uFF65\u30B9\u30B1\u30FC\u30EB\uFF65\u30AB\u30E9\u30FC\u307E\u305F\u306F\u5358\u7D14\u306A6/8bpp\u3060\u3051\u3067\u306F\u306A\u3044\u306E\u304B`), `\u304A\u305D\u3089\u304F\u3001\u3053\u306E\u3088\u3046\u306A\u30B1\u30FC\u30B9\u3067\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6A5F\u80FD\u3092\u9069\u5207\u306B\u4F1D\u3048\u308B\u305F\u3081\u306B\u8272\u3092\u30B9\u30D7\u30ED\u30FC\u30EB\u3055\u305B\u308B\u5FC5\u8981\u306F\u306A\u3044\u306E\u3067\u3001\u3053\u306E\u3088\u3046\u306A\u4F4E\u3044\u8272\u6DF1\u5EA6\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306F\u53EF\u80FD\u3067\u3059\u3002 \u305D\u3046\u3059\u308B\u3053\u3068\u3067\u5FC5\u8981\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u304C\u6E1B\u308A\u3001RAM\u306E\u30B5\u30A4\u30BA\u3082\u6E1B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `RAM\u3084\u30D5\u30E9\u30C3\u30B7\u30E5\u306B\u5236\u9650\u306F\u3042\u308B\u306E\u304B`), `\u8272\u6DF1\u5EA6\u3092\u5236\u9650\u3059\u308B\u3068\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3068\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF08RAM\uFF09\u306E\u4E21\u65B9\u306E\u5FC5\u8981\u30B5\u30A4\u30BA\u304C\u6E1B\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framebuffer-size-calculation"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u306E\u8A08\u7B97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F1\u30D5\u30EC\u30FC\u30E0\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3057\u3001\u63CF\u753B\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u30E1\u30E2\u30EA\u3067\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\u91CF\u3068\u8272\u6DF1\u5EA6\u304C\u5927\u304D\u304F\u306A\u308B\u307B\u3069\u3001RAM\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u9593\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u9AD8\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u304C\u6C42\u3081\u3089\u308C\u308B\u305F\u3081\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u306F\u91CD\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\uFF08\u30D0\u30A4\u30C8\u6570\uFF09\u306F\u6B21\u306E\u3088\u3046\u306B\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5E45 x \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u9AD8\u3055 x \uFF08bpp / 8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3068\u3048\u3070\u3001800x480\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u8272\u6DF1\u5EA6\u304C16bpp\u306E\u5834\u5408\u30011\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u306F\u4EE5\u4E0B\u306E\u30B5\u30A4\u30BA\u3092\u5272\u308A\u5F53\u3066\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `800 x 480 x (16 / 8) = 768,000\u30D0\u30A4\u30C8\uFF08768,000/1024 = 750KB\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u89E3\u50CF\u5EA6\u3068\u8272\u6DF1\u5EA6\u3092\u6C7A\u5B9A\u3059\u308B\u969B\u306B\u306F\u3001\u305D\u308C\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5341\u5206\u306A\u91CF\u306ERAM\u304C\u78BA\u4FDD\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u306F2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u306B\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u3001\u4E0A\u306E\u4F8B\u3067\u8003\u3048\u308B\u3068\u3001750KB x 2 = 1500KB\u306ERAM\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A08\u7B97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u306E\u91CF\u3082\u3001\u9078\u629E\u3057\u305F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A2D\u8A08\uFF08\u30B7\u30F3\u30B0\u30EB\u3001\u30C0\u30D6\u30EB\u3001\u30D1\u30FC\u30B7\u30E3\u30EB\uFF08\u90E8\u5206\uFF09\uFF09\u306B\u5927\u304D\u304F\u4F9D\u5B58\u3059\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../basic-concepts/framebuffer",
    mdxType: "Link"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6226\u7565"), "\u306E\u8A18\u4E8B\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002 \u4E00\u90E8\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001\u975E\u5E38\u306B\u8CBB\u7528\u5BFE\u52B9\u679C\u304C\u9AD8\u3044\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3068\u3057\u3066\u3001\u5185\u90E8RAM\u306E\u307F\u306E\u4F7F\u7528\u3067HVGA\u307E\u3067\u306E\u89E3\u50CF\u5EA6\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface"
  }), `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u7570\u306A\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF08SPI\u3001LTDC\u3001MIPI-DSI\u306A\u3069\uFF09\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306F\u3001\u5FC5\u8981\u306A\u30D4\u30F3\u306E\u6570\u3001\u5E2F\u57DF\u5E45\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u89E3\u50CF\u5EA6\u3001\u5FC5\u8981\u306A\u5916\u90E8RAM\u306E\u91CF\u306B\u5BFE\u3057\u3066\u3055\u307E\u3056\u307E\u306A\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u5F71\u97FF\u3084\u5404\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u9078\u629E\u306E\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u300D\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "size"
  }), `\u30B5\u30A4\u30BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u7269\u7406\u7684\u306A\u30B5\u30A4\u30BA\u3082\u91CD\u8981\u306A\u8003\u616E\u4E8B\u9805\u3067\u3059\u3002 \u4E00\u822C\u7684\u306B\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B5\u30A4\u30BA\u304C\u5927\u304D\u3051\u308C\u3070\u64CD\u4F5C\u304C\u5BB9\u6613\u306B\u306A\u308A\u3001\u30BF\u30C3\u30C1\uFF65\u30B3\u30DE\u30F3\u30C9\u3092\u6B63\u78BA\u306B\u6307\u793A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u76EE\u306B\u512A\u3057\u3044\u8868\u793A\u306B\u3059\u308B\u306B\u306F\u89E3\u50CF\u5EA6\u3092\u9AD8\u304F\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u3001\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u3084\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E\u60C5\u5831\u30921\uFF5E2\u30E1\u30FC\u30C8\u30EB\u96E2\u308C\u305F\u5834\u6240\u304B\u3089\u898B\u308B\u3088\u3046\u306A\u5834\u5408\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3084\u30A2\u30A4\u30B3\u30F3\u306A\u3069\u3092\u5341\u5206\u306B\u5927\u304D\u304F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch"
  }), `\u30BF\u30C3\u30C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u306F\u4E3B\u306B\u6B21\u306E2\u3064\u306E\u30BF\u30A4\u30D7\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive"
  }), `\u9759\u96FB\u5BB9\u91CF\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9759\u96FB\u5BB9\u91CF\u5F0F\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u30BF\u30C3\u30C1\u611F\u5EA6\u304C\u975E\u5E38\u306B\u9AD8\u304F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3088\u308A\u9AD8\u5EA6\u306A\u30BF\u30C3\u30C1\u64CD\u4F5C\uFF08\u30C9\u30E9\u30C3\u30B0\u3084\u30B9\u30EF\u30A4\u30D7\u306A\u3069\uFF09\u3092\u5FC5\u8981\u3068\u3059\u308B\u5834\u5408\u3001\u3053\u308C\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u306E\u305F\u3081\u6700\u65B0\u6A5F\u5668\u3067\u306F\u3053\u306E\u30BF\u30A4\u30D7\u304C\u6700\u3082\u591A\u304F\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u3053\u306E\u30BF\u30A4\u30D7\u306F\u3088\u308A\u9AD8\u4FA1\u3067\u3001\u624B\u888B\u3092\u306F\u3081\u3066\u3044\u308B\u3068\u64CD\u4F5C\u3067\u304D\u306A\u3044\u3053\u3068\u3082\u3088\u304F\u3042\u308A\u307E\u3059\u3002\u3082\u3057\u3053\u306E\u3053\u3068\u304C\u91CD\u8981\u306A\u5834\u5408\u306F\u3001\u304A\u305D\u3089\u304F\u62B5\u6297\u819C\u5F0F\u306E\u65B9\u304C\u9069\u3057\u3066\u3044\u308B\u3068\u8A00\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive"
  }), `\u62B5\u6297\u819C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5B89\u4FA1\u306A\u4EE3\u66FF\u65B9\u5F0F\u306F\u611F\u5EA6\u304C\u304B\u306A\u308A\u4F4E\u304F\u3001\u592A\u967D\u5149\u306E\u4E0B\u3067\u306F\u898B\u3048\u306B\u304F\u304F\u306A\u308A\u307E\u3059\u304C\u3001\u610F\u56F3\u3057\u306A\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u5BFE\u3059\u308B\u611F\u5EA6\u304C\u4F4E\u3044\u306E\u3067\u624B\u888B\u306E\u307E\u307E\u3067\u3082\u64CD\u4F5C\u53EF\u80FD\u3067\u3001\u4E00\u822C\u7684\u306B\u8010\u4E45\u6027\u3082\u9AD8\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u30BF\u30C3\u30C1\u64CD\u4F5C\u306E\u3059\u3079\u3066\u304C\u5358\u7D14\u306A\u30DC\u30BF\u30F3\u62BC\u4E0B\u306E\u307F\u3067\u6210\u308A\u7ACB\u3064\u5834\u5408\u3001\u62B5\u6297\u819C\u5F0F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u5341\u5206\u3060\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002 STM32F429-DISCO\u30DC\u30FC\u30C9\u306F\u3001\u62B5\u6297\u819C\u5F0F\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "animations"
  }), `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8907\u96D1\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\uFF08\u5168\u753B\u9762\u9077\u79FB\u3001\u56DE\u8EE2\u3001\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u306A\u3069\uFF09\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u304A\u3088\u3073\u8A08\u7B97\u80FD\u529B\u304C\u5341\u5206\u3067\u306A\u3044\u5834\u5408\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u91CD\u5927\u306A\u5F71\u97FF\u3092\u53CA\u307C\u3059\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30EC\u30D9\u30EB\u3092\u6C7A\u5B9A\u3059\u308B\u3068\u304D\u306B\u3001\u8003\u616E\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u306B\u306F\u6B21\u306E\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9AD8\u901F\u306E\u5168\u753B\u9762\u9077\u79FB\u304C\u5FC5\u8981\u304B`), `\u5168\u753B\u9762\u9077\u79FB\u3067\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5168\u4F53\u3092\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u305F\u3081\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u5341\u5206\u306A\u30B5\u30A4\u30AF\u30EB\u6570\u3084\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u306E\u30A2\u30AF\u30BB\u30B9\u3084\u8EE2\u9001\u3092\u884C\u3046\u306E\u306B\u5341\u5206\u306A\u901F\u5EA6\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u5FC5\u8981\u306A\u30B7\u30B9\u30C6\u30E0\u6027\u80FD\u306F\u89E3\u50CF\u5EA6\u3084\u8272\u6DF1\u5EA6\u306B\u3088\u3063\u3066\u3082\u7570\u306A\u308A\u307E\u3059\u3002 \u9AD8\u89E3\u50CF\u5EA6\u306E\u5168\u753B\u9762\u9077\u79FB\u306E\u7528\u9014\u306B\u306F\u3001STM32\u306E\u30CF\u30A4\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u88FD\u54C1\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002 \u4E00\u90E8\u306E\u5168\u753B\u9762\u9077\u79FB\u3067\u306F\u8FFD\u52A0\u306E\u30B9\u30C8\u30EC\u30FC\u30B8\u304C\u5FC5\u8981\u306B\u306A\u308B\u306E\u3067\u3001\u3055\u3089\u306B\u5927\u91CF\u306E\u30E1\u30E2\u30EA\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u56DE\u8EE2\u3084\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u306E\u3088\u3046\u306A\u8907\u96D1\u306A\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D4\u30F3\u30B0\uFF65\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u5FC5\u8981\u304B`), `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D4\u30F3\u30B0\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u8A08\u7B97\u3084\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u8EE2\u9001\u306E\u70B9\u3067\u975E\u5E38\u306B\u9AD8\u3044\u30B7\u30B9\u30C6\u30E0\u306E\u51E6\u7406\u80FD\u529B\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u306E\u3067\u3001\u901A\u5E38\u306F\u9AD8\u3044\u52D5\u4F5C\u5468\u6CE2\u6570\u3068\u9AD8\u3044\u30E1\u30E2\u30EA\uFF65\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u3092\u5FC5\u8981\u3068\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/animations.gif",
    width: "480",
    mdxType: "Figure"
  }, "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mechanical-design-requirements"
  }), `\u6A5F\u68B0\u8A2D\u8A08\u306E\u8981\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u88FD\u54C1\u306E\u7269\u7406\u7684\u306A\u7B50\u4F53\u306E\u8981\u4EF6\u306F\u591A\u7A2E\u591A\u69D8\u3067\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u9078\u629E\u306B\u5F71\u97FF\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u751F\u6D3B\u5BB6\u96FB\u306B\u306F\u6709\u5BB3\u7523\u696D\u7528\u9014\u3068\u306F\u5225\u306E\u8981\u4EF6\u304C\u767A\u751F\u3059\u308B\u306E\u3067\u3001\u7269\u7406\u7684\u306A\u5236\u9650\u3092\u660E\u3089\u304B\u306B\u3059\u308B\u3068\u304D\u306B\u8003\u616E\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u306B\u306F\u6B21\u306E\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `<\u975E\u5E38\u306B\u5C0F\u578B\u306E\u88FD\u54C1\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B`), `\u4F8B\u3068\u3057\u3066\u3001\u30B9\u30DE\u30FC\u30C8\uFF65\u30A6\u30A9\u30C3\u30C1\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u7B50\u4F53\u306E\u30B5\u30A4\u30BA\u306B\u5236\u9650\u304C\u3042\u308A\u3001PCB\u306E\u30B5\u30A4\u30BA\u304C\u5236\u9650\u3055\u308C\u308B\u306E\u3067\u3001\u9069\u5207\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u9078\u629E\u304C\u91CD\u8981\u3067\u3059\u3002 STM32\u306F\u3001WLCSP\u30D1\u30C3\u30B1\u30FC\u30B8\u306A\u3069\u3001\u5E45\u5E83\u3044\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6975\u7AEF\u306A\u6E29\u5EA6\u6761\u4EF6\u306B\u3055\u3089\u3055\u308C\u308B\u88FD\u54C1\u304B`), `\u9759\u96FB\u5BB9\u91CF\u5F0F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u6975\u5EA6\u306A\u9AD8\u6E29\u307E\u305F\u306F\u6975\u5EA6\u306A\u4F4E\u6E29\u306E\u74B0\u5883\u4E0B\u3067\u6027\u80FD\u304C\u843D\u3061\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u51B7\u8535\u8CAF\u8535\u5EAB\u306A\u3069\u306B\u88FD\u54C1\u3092\u8A2D\u7F6E\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u62B5\u6297\u819C\u5F0F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u65B9\u304C\u512A\u308C\u305F\u6A5F\u80FD\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002 STM32\u306E\u88FD\u54C1\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3067\u306F\u3001\u6700\u9AD8\u5468\u56F2\u6E29\u5EA6\u304C85\u2103\u3001105\u2103\u3001125\u2103\u3067\u52D5\u4F5C\u3059\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6C34\u3084\u307B\u3053\u308A\u306A\u3069\u306E\u5C4B\u5916\u74B0\u5883\u8981\u56E0\u306B\u975E\u5E38\u306B\u9AD8\u3044\u8010\u6027\u3092\u6301\u3064\u88FD\u54C1\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B`), `\u591A\u69D8\u306A\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u304C\u305D\u308C\u305E\u308C\u7570\u306A\u308B\u54C1\u8CEA\u3084\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u4FDD\u8B77\u76EE\u7684\u3067\u30EC\u30F3\u30BA\u30AB\u30D0\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u30821\u3064\u306E\u9078\u629E\u80A2\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5F37\u3044\u592A\u967D\u5149\u306E\u4E0B\u3067\u306E\u898B\u3048\u3084\u3059\u3055\u306F\u91CD\u8981\u304B\u3002`), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30AB\u30F3\u30C7\u30E9\u3084\u30EB\u30FC\u30E1\u30F3\u306F\u3055\u307E\u3056\u307E\u3067\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30AB\u30F3\u30C7\u30E9\u3084\u30EB\u30FC\u30E1\u30F3\u304C\u9AD8\u3044\u307B\u3069\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8AAD\u307F\u3084\u3059\u3055\u306F\u5411\u4E0A\u3057\u307E\u3059\u3002 \u7279\u6B8A\u306A\u30EC\u30F3\u30BA\u30AB\u30D0\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u308C\u3082\u6539\u5584\u3067\u304D\u307E\u3059\u3002 \u3042\u308B\u3044\u306F\u3001\u53CD\u5C04\u6A5F\u80FD\u3082\u63D0\u4F9B\u3059\u308B\u3088\u3046\u306A\u5225\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frames-per-second"
  }), `1\u79D2\u5F53\u305F\u308A\u306E\u30D5\u30EC\u30FC\u30E0\u6570\uFF08FPS\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u5834\u5408\u306F\u30011\u79D2\u5F53\u305F\u308A\u306E\u30D5\u30EC\u30FC\u30E0\u6570\uFF08FPS\uFF09\u304C\u5927\u304D\u304F\u3066\u5B89\u5B9A\u3057\u3066\u3044\u308B\u307B\u3069\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3088\u308A\u30B9\u30E0\u30FC\u30BA\u306B\u898B\u3048\u308B\u306E\u3067\u671B\u307E\u3057\u3044\u3068\u8A00\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001FPS\u304C\u3042\u307E\u308A\u91CD\u8981\u3067\u306A\u3044\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u8868\u793A\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u66F4\u65B0\u304C\u6700\u5C0F\u9650\u306E\u9759\u7684\u306AGUI\u306A\u3069\u3067\u3059\u3002 \u3053\u3046\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u4F4E\u30B3\u30B9\u30C8\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u65B9\u304C\u9069\u3057\u3066\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u304B\u3057\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u3068\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30BB\u30B0\u30E1\u30F3\u30C8\u306B\u3088\u3063\u3066\u306F\u3001\u591A\u304F\u306E\u6D3E\u624B\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u542B\u3080\u304D\u308C\u3044\u3067\u30B9\u30E0\u30FC\u30BA\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u6301\u3064\u3053\u3068\u304C\u3001\u3068\u3066\u3082\u5927\u304D\u306A\u30BB\u30FC\u30EB\u30B9\uFF65\u30DD\u30A4\u30F3\u30C8\u306B\u306A\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u9078\u629E\u306B\u95A2\u3057\u3066\u306F\u3069\u306E\u3088\u3046\u306A\u5834\u5408\u3067\u3082\u3001\u30A8\u30F3\u30C9\u30E6\u30FC\u30B6\u306E\u671F\u5F85\u306B\u6CBF\u3063\u3066\u3001\u512A\u308C\u305F\u30E6\u30FC\u30B6\u4F53\u9A13\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u304C\u3059\u3079\u3066\u306A\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u5168\u4F53\u306E\u6027\u80FD\u306F\u30B7\u30B9\u30C6\u30E0\uFF65\u30EC\u30D9\u30EB\u306E\u6027\u80FD\u306B\u884C\u304D\u7740\u304D\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3001RAM\u3001Flash\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306A\u3069\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30B9\u30EB\u30FC\u30D7\u30C3\u30C8\u3001\u3055\u3089\u306B\u306FSTM32 Chrom-ART\u306E\u3088\u3046\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u6A5F\u80FD\u306B\u3088\u308A\u6C7A\u307E\u308B\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u56F3\u306F\u3001\u3044\u304F\u3064\u304B\u306E\u7570\u306A\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u5F71\u97FF\u3092\u4E00\u822C\u5316\u3057\u305F\u3082\u306E\u3067\u3059\u3002 \u9069\u5207\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u9078\u5B9A\u3059\u308B\u306B\u306F\u3001\u3053\u308C\u3089\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u307E\u305F\u3001STM32 Chrom-ART\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8CA0\u62C5\u3092\u8EFD\u6E1B\u3059\u308B\u306E\u3067\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u9AD8\u5468\u6CE2\u6570\u3067\u52D5\u4F5C\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u306A\u304F\u306A\u308B\u3053\u3068\u3082\u8003\u616E\u306B\u5165\u308C\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/fps-figures.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u3055\u307E\u3056\u307E\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\uFF08FPS\uFF09\u3078\u306E\u5F71\u97FF"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);