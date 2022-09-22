"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6207],{

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

/***/ 71954:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44035);
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
  id: "color-formats",
  title: "\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/color-formats",
  "id": "basic-concepts/color-formats",
  "title": "\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/color-formats.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/color-formats",
  "permalink": "/4.20/ja/docs/basic-concepts/color-formats",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "color-formats",
    "title": "\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9",
    "permalink": "/4.20/ja/docs/basic-concepts/embedded-graphics"
  },
  "next": {
    "title": "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1",
    "permalink": "/4.20/ja/docs/basic-concepts/framebuffer"
  }
};
const assets = {};



const toc = [{
  value: "\u8272",
  id: "color",
  level: 2
}, {
  value: "\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB",
  id: "grayscale",
  level: 3
}, {
  value: "\u4E0D\u900F\u660E\u5EA6",
  id: "opacity",
  level: 3
}, {
  value: "\u8272\u6DF1\u5EA6",
  id: "color-depth",
  level: 2
}, {
  value: "\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "formats",
  level: 2
}, {
  value: "\u30D4\u30AF\u30BB\u30EB\uFF65\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "pixel-color-formats",
  level: 3
}, {
  value: "RGB888",
  id: "rgb888",
  level: 4
}, {
  value: "RGB565",
  id: "rgb565",
  level: 4
}, {
  value: "RGBx2222\u3001xRGB2222\u3001BGRx2222\u3001xBGR2222",
  id: "rgbx2222-xrgb2222-bgrx2222-xbgr2222",
  level: 4
}, {
  value: "GRAY4\u3001GRAY2\u3001BW",
  id: "gray4-gray2-bw",
  level: 4
}, {
  value: "\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "image-formats",
  level: 3
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "framebuffer-formats",
  level: 3
}, {
  value: "\u30D0\u30A4\u30C8\u3068\u30D4\u30AF\u30BB\u30EB\u306E\u9806\u5E8F",
  id: "byte-and-pixel-order",
  level: 4
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "text-formats",
  level: 3
}, {
  value: "\u8996\u899A\u54C1\u8CEA",
  id: "visual-quality",
  level: 2
}, {
  value: "\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0",
  id: "dithering",
  level: 3
}, {
  value: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
  id: "performance",
  level: 2
}, {
  value: "\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0",
  id: "alpha-blending",
  level: 3
}, {
  value: "\u305D\u306E\u4ED6\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "other-image-formats",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E\u30D4\u30AF\u30BB\u30EB\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u8868\u793A\u3055\u308C\u308B\u8272\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1`), `\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5024\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002 \u5143\u3088\u308A\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u63CF\u5199\u3001\u4F7F\u7528\u3001\u8868\u793A\u3067\u304D\u308B\u8272\u306E\u6570\u306F\u9650\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u3053\u3068\u306FTouchGFX\u304A\u3088\u3073TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3082\u5F53\u3066\u306F\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30D4\u30AF\u30BB\u30EB\u306E\u30AB\u30E9\u30FC\u306E\u6570\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u591A\u304F\u306E\u90E8\u5206\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002 \u305D\u308C\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3055\u308C\u308B\u898B\u6804\u3048\u304B\u3089\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u3057\u3066\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u30B5\u30A4\u30BA\u3084\u5168\u4F53\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u307E\u3067\u591A\u5C90\u306B\u308F\u305F\u308A\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u306B\u304A\u3051\u308B\u8272\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u8AAC\u660E\u3057\u3001TouchGFX\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u53D6\u308A\u4E0A\u3052\u3066\u3001\u305D\u306E\u5229\u70B9\u3068\u6B20\u70B9\u306B\u30B9\u30DD\u30C3\u30C8\u3092\u5F53\u3066\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color"
  }), `\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u304A\u3051\u308B\u8272\u306F\u3001\u8D64\u3001\u7DD1\u3001\u9752\u306E3\u3064\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u3001\u3053\u308C\u306FRGB\u30AB\u30E9\u30FC\u3068\u547C\u3070\u308C\u3066\u3044\u307E\u3059\u3002 \u8272\u306E\u5404\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u7BC4\u56F2\u306F0\uFF5E255\u3067\u3059\u3002 0\u306F\u305D\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u30AA\u30D5\u3001255\u306F\u305D\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u6700\u5927\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B8C\u5168\u306A\u9ED2\u8272\u306FRGB\u30AB\u30E9\u30FC(0,0,0)\u3067\u8868\u3055\u308C\u3001\u5B8C\u5168\u306A\u767D\u8272\u306F(255,255,255)\u3067\u3059\u3002  \u660E\u308B\u3044\u7DD1\u8272\u306F(0,255,0)\u3001\u3084\u3084\u660E\u308B\u3044\u8D64\u8272\u306F(128,0,0)\u3001\u9ED2\u305A\u3093\u3060\u7D2B\u8272\u306F(64,0,64)\u3068\u3044\u3046\u3075\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb-colors.svg",
    noShadow: "true",
    height: "70",
    mdxType: "Figure"
  }, "\u3044\u304F\u3064\u304B\u306ERGB\u30AB\u30E9\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "grayscale"
  }), `\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u8272\u304C\u9ED2\u304B\u3089\u767D\u307E\u3067\u306E\u7BC4\u56F2\u306E\u30B0\u30EC\u30FC\u306A\u306E\u3067\u3001RGB\u30AB\u30E9\u30FC\u3067\u306F\u306A\u304F\u30B0\u30EC\u30FC\u6FC3\u5EA6\u3067\u8868\u73FE\u3055\u308C\u307E\u3059\u3002 \u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u306F\u3001R = G = B\u306ERGB\u30AB\u30E9\u30FC\u3060\u3068\u8003\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "opacity"
  }), `\u4E0D\u900F\u660E\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u72B6\u6CC1\u306B\u3088\u3063\u3066\u306F\u3001\u305D\u306E\u8272\u306E\u4E0D\u900F\u660E\u5EA6\u3092\u793A\u3059\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8272\u306B\u542B\u3081\u305F\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u4E0D\u900F\u660E\u5EA6\u306E\u7BC4\u56F2\u306F0\uFF5E255\u3067\u3001\u8272\u306E\u4ED6\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u540C\u3058\u3067\u3059\u3002 \u4E0D\u900F\u660E\u5EA6\u306E\u3042\u308B\u8272\u306F\u3001RGBA\u30AB\u30E9\u30FC\u3068\u547C\u3070\u308C\u307E\u3059\u3002 A\u306Falpha\uFF08\u30A2\u30EB\u30D5\u30A1\uFF09\u3092\u8868\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u4E0D\u900F\u660E\u5EA6\u306E\u30EC\u30D9\u30EB\u3092\u8868\u3059\u306E\u306B\u4F7F\u7528\u3055\u308C\u308B\u5F93\u6765\u304B\u3089\u306E\u540D\u79F0\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5834\u5408\u3001\u5B8C\u5168\u306B\u4E0D\u900F\u660E\u306A\u9ED2\u8272\u306F(0,0,0,255)\u3001\u5E7E\u5206\u900F\u660E\u306A\u8D64\u8272\u306F(255,0,0,128)\u3068\u3044\u3046\u3075\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgba-colors.svg",
    noShadow: "true",
    height: "70",
    mdxType: "Figure"
  }, "\u767D\u8272\u3068\u30B0\u30EC\u30FC\u306E\u4E0A\u306E\u3044\u304F\u3064\u304B\u306ERGBA\u30AB\u30E9\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u304C\u5B8C\u5168\u306B\u4E0D\u900F\u660E\u3067\u306A\u3044\u5834\u5408\u306F\u3001\u3059\u3067\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u8272\u3068\u6DF7\u305C\u5408\u308F\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u8272\u306E\u6DF7\u5408\u306F\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3068\u547C\u3070\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\u8272\u6DF1\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u6DF1\u5EA6\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5404\u8272\u3092\u63CF\u5199\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D3\u30C3\u30C8\u6570\u3067\u3059\u3002 \u3053\u306E\u6570\u5024\u306F\u3001\u30D4\u30AF\u30BB\u30EB\u5F53\u305F\u308A\u306E\u30D3\u30C3\u30C8\u6570\uFF08bpp\uFF09\u3067\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3059\u308B\u30D3\u30C3\u30C8\u6570\u304C\u591A\u3044\u307B\u3069\u3001\u63CF\u5199\u3067\u304D\u308B\u8272\u304C\u5897\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3088\u304F\u4F7F\u7528\u3055\u308C\u308B\u8272\u6DF1\u5EA6\u306F24 bpp\u3067\u3059\u3002 \u5404\u30D3\u30C3\u30C8\u3092\u30AA\u30F3 / \u30AA\u30D5\u306B\u3067\u304D\u308B\u306E\u3067\u30012`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `24`), ` = 16777216\u306E\u7570\u306A\u308B\u8272\u3092\u8868\u73FE\u3067\u304D\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u308C\u3088\u308A\u5C11\u3057\u3060\u3051\u4F7F\u7528\u983B\u5EA6\u306E\u4F4E\u3044\u8272\u6DF1\u5EA6\u304C1 bpp\u3067\u3059\u3002 \u3053\u306E\u8272\u6DF1\u5EA6\u306F\u767D\u9ED2\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u9069\u7528\u3055\u308C\u3001\u8868\u73FE\u3067\u304D\u308B\u306E\u306F2`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `1`), ` = 2\u306E\u7570\u306A\u308B\u8272\u306E\u307F\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u8272\u6DF1\u5EA6\u304C\u7D44\u8FBC\u307F\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `32 bpp - 16777216\u8272\u3068\u305D\u308C\u306B\u5BFE\u5FDC\u3059\u308B\u4E0D\u900F\u660E\u5EA6\u306E\u5024`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24 bpp - 16777216\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16 bpp - 65536\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6/8 bpp - 64\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4 bpp - 16\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2 bpp - 4\u3064\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1 bpp - 2\u3064\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u8272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u7BC4\u56F2\u306B\u3064\u3044\u3066\u306F\u3001\u6B21\u306E\u70B9\u306B\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002 24 bpp\u672A\u6E80\u306E\u8272\u6DF1\u5EA6\u3092\u64CD\u4F5C\u3059\u308B\u5834\u5408\u3001\u8D64\u3001\u7DD1\u3001\u9752\u306E\u5404\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u76F4\u63A50\uFF5E255\u306E\u7BC4\u56F2\u3092\u6301\u3064\u3053\u3068\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u3046\u3057\u305F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u306F\u3001\u305F\u3068\u3048\u307016 bpp\u306E\u8D64\u8272\u3067\u3042\u308C\u3070\u30010\uFF5E31\u306E\u7BC4\u56F2\u306B\u306A\u308A\u307E\u3059\u3002 31\u3068\u3044\u3046\u5024\u306F16 bpp\u3067\u8868\u73FE\u3067\u304D\u308B\u6700\u3082\u8D64\u3044\u8272\u3092\u8868\u3059\u3068\u8003\u3048\u3089\u308C\u300124 bpp\u306B\u304A\u3051\u308B255\u306B\u8A72\u5F53\u3057\u307E\u3059\u3002 16 bpp\u306E\u6DF1\u5EA6\u306E\u8272\u306F\u300124 bpp\u3067\u8868\u73FE\u53EF\u80FD\u306A\u8272\u306E\u30B5\u30D6\u30BB\u30C3\u30C8\u306E\u307F\u3092\u8868\u73FE\u3067\u304D\u308B\u3068\u8003\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `6/8 bpp\u306E\u8272\u6DF1\u5EA6\u3067\u306F\u3001\u5404\u30D4\u30AF\u30BB\u30EB\u3067\u30AB\u30E9\u30FC\u60C5\u5831\u7528\u306B6\u30D3\u30C3\u30C8\u4F7F\u7528\u3055\u308C\u307E\u3059\uFF08\u8D64\u3001\u7DD1\u3001\u9752\u306B\u305D\u308C\u305E\u308C2\u30D3\u30C3\u30C8\uFF09\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u7C21\u7D20\u5316\u3059\u308B\u305F\u3081\u3001\u5404\u30D4\u30AF\u30BB\u30EB\u304C6\u30D3\u30C3\u30C8\u304B\u30898\u30D3\u30C3\u30C8\uFF081\u30D0\u30A4\u30C8\uFF09\u306B\u5897\u3084\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u8FFD\u52A0\u5206\u306E2\u30D3\u30C3\u30C8\u306F\u4F7F\u7528\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "formats"
  }), `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u3092\u8868\u73FE\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u30D3\u30C3\u30C8\u6570\u3092\u6C7A\u3081\u305F\u3089\u3001\u6B21\u306F\u30D3\u30C3\u30C8\u306E\u5185\u5BB9\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u8ABF\u3079\u3066\u307F\u307E\u3059\u3002 1\u3064\u306E\u8272\u306B\u306F\u8D64\u8272\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u793A\u3059\u30D3\u30C3\u30C8\u3001\u7DD1\u8272\u3092\u793A\u3059\u30D3\u30C3\u30C8\u3001\u9752\u8272\u3092\u793A\u3059\u30D3\u30C3\u30C8\u304C\u305D\u308C\u305E\u308C\u3044\u304F\u3089\u304B\u542B\u307E\u308C\u307E\u3059\u304C\u3001\u8272\u6DF1\u5EA6\u3060\u3051\u3067\u306F\u30D4\u30AF\u30BB\u30EB\u5185\u306E\u30D3\u30C3\u30C8\u306E\u9806\u5E8F\uFF08\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF09\u3092\u6307\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002 \u305F\u3068\u3048\u3070\u3001 \u9752\u8272\u304C\u6700\u521D\u3067\u3001\u7DD1\u8272\u3001\u8D64\u8272\u306E\u9806\u5E8F\u3001\u307E\u305F\u306F\u9006\u306E\u9806\u5E8F\u306E\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-color-formats"
  }), `\u30D4\u30AF\u30BB\u30EB\uFF65\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8272\u6DF1\u5EA6\u306B\u5FDC\u3058\u3066\u3001\u3044\u304F\u3064\u304B\u7279\u5B9A\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgb888"
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u8272\u6DF1\u5EA6\u304C24 bpp\u306E\u8272\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306FRGB888\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u8D64\u3001\u7DD1\u3001\u9752\u306E\u5404\u30AB\u30E9\u30FC\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B8\u30D3\u30C3\u30C8\u305A\u3064\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3046\u3057\u305F\u8272\u3092\u30B3\u30FC\u30C9\u3067\u8868\u3059\u306B\u306F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u7D44\u307F\u7ACB\u3066\u3066\u8272\u306E\u5024\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u6B21\u306E\u4F8B\u306F\u660E\u308B\u3044\u7D2B\u8272\u3067\u3042\u308Brgb(255,0,255)\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001\u8D64\u304C\u6700\u3082\u9AD8\u30448\u30D3\u30C3\u30C8\u3001\u6B21\u306B\u7DD1\u3001\u9752\u306F\u4F4E\u30448\u30D3\u30C3\u30C8\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgb565"
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `16 bpp\u306E\u8272\u306E\u5834\u5408\u3001TouchGFX\u3067\u306FRGB565\u3068\u3044\u3046\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u8D64\u306B5\u30D3\u30C3\u30C8\u3001\u7DD1\u306B6\u30D3\u30C3\u30C8\u3001\u9752\u306B5\u30D3\u30C3\u30C8\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002 \u8D64\u306B5\u30D3\u30C3\u30C8\u4F7F\u7528\u3057\u3001\u30D5\u30EB\u70B9\u706F\u306F31\u306A\u306E\u3067\u3001\u660E\u308B\u3044\u7D2B\u8272\u306E\u30B3\u30FC\u30C9\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 31 << 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgbx2222-xrgb2222-bgrx2222-xbgr2222"
  }), `RGBx2222\u3001xRGB2222\u3001BGRx2222\u3001xBGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `6 bpp\u306E\u8272\u306B\u5BFE\u3057\u3066\u3001TouchGFX\u3067\u306FRGBx2222\u3001xRGB2222\u3001BGRx2222\u3001xBGR222\u3068\u3044\u30464\u3064\u306E\u7570\u306A\u308B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 6\u30D3\u30C3\u30C8\u306E\u8272\u306F\u30D0\u30A4\u30C8\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u3053\u308C\u3089\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u306Fx\u304C\u4ED8\u3044\u3066\u3044\u307E\u3059\u3002 \u8272\u306F2\u30D3\u30C3\u30C8\u3067\u57CB\u3081\u3089\u308C\u30011\u30D0\u30A4\u30C8\u306B\u306A\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 RGB\u3068BGR\u304C\u4E21\u65B9\u3042\u308B\u306E\u306F\u3001\u4E00\u90E8\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u5FC5\u8981\u306B\u306A\u308B\u305F\u3081\u3067\u3001\u305D\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u9001\u4FE1\u3059\u308B\u524D\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u5909\u63DB\u3057\u305F\u304F\u306A\u3044\u304B\u3089\u3067\u3059\u3002 RGBx2222\u306E\u660E\u308B\u3044\u9EC4\u8272\u3092\u30B3\u30FC\u30C9\u3067\u8868\u3059\u3068\u3001\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "gray4-gray2-bw"
  }), `GRAY4\u3001GRAY2\u3001BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u306E\u8272\u6DF1\u5EA6\u3054\u3068\u306B\u3001TouchGFX\u3067\u306F\u5BFE\u5FDC\u3059\u308B\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u30921\u3064\u305A\u3064\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 4 bpp\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306FGRAY4\u30012 bpp\u3067\u306FGRAY2\u30011 bpp\u3067\u306FBW\uFF08\u9ED2\u3068\u767D\u3092\u8868\u3059\uFF09\u3068\u793A\u3055\u308C\u307E\u3059\u3002 4 bpp\u306E\u5B8C\u5168\u306A\u767D\u8272\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t whiteGRAY4 = 15;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u306F\u3001\u6B63\u3057\u3044\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u8272\u306E\u6B63\u3057\u3044\u8868\u73FE\u3092\u8FD4\u3059\u30D8\u30EB\u30D1\u95A2\u6570\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
...
aColor = Color::getColorFromRGB(255,0,128);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-formats"
  }), `\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u306F\u307B\u3068\u3093\u3069\u306EUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3068\u3063\u3066\u91CD\u8981\u306A\u90E8\u5206\u3067\u3042\u308A\u3001\u8272\u3067\u5857\u308A\u3064\u3076\u3055\u308C\u3066\u3044\u307E\u3059\u3002 TouchGFX\u306E\u753B\u50CF\u306F\u30E1\u30E2\u30EA\u5185\u306B\u4FDD\u5B58\u3055\u308C\u3001\u7279\u5B9A\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u8272\u3067\u5857\u308A\u3064\u3076\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u591A\u304F\u306E\u5834\u5408\u3001\u753B\u50CF\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#pixel-color-formats"
  }), `\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305F\u30D4\u30AF\u30BB\u30EB\uFF65\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), `\u306E1\u3064\u3092\u4F7F\u7528\u3057\u307E\u3059\u304C\u3001\u305D\u306E\u4ED6\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u7279\u5B9A\u306E\u753B\u50CF\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u753B\u50CF\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u306F\u3001\u63CF\u753B\u306E\u524D\u306B\u9069\u5207\u306A\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u753B\u50CF\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B8\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001ARGB8888\u30D1\u30EC\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B8\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001RGB888\u30D1\u30EC\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB666`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B6\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u30D3\u30C3\u30C8\u30015\u30D3\u30C3\u30C8\u8D64\u30016\u30D3\u30C3\u30C8\u7DD1\u30015\u30D3\u30C3\u30C8\u9752`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001RGB565\u30D1\u30EC\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW_RLE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u3067\u30E9\u30F3\u30EC\u30F3\u30B0\u30B9\u7B26\u53F7\u5316`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4E00\u90E8\uFF08L8\u3067\u793A\u3055\u308C\u308B\u3082\u306E\uFF09\u306F\u3001\u5F53\u8A72\u306E\u753B\u50CF\u3092\u8272\u306E\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7\uFF65\u30C6\u30FC\u30D6\u30EB\uFF08CLUT\u3068\u547C\u3070\u308C\u308B\uFF09\u3068\u3001\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u5185\u3078\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u3088\u3063\u3066\u753B\u50CF\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306EL8\u753B\u50CF\u3067\u53EF\u80FD\u306A\u8272\u306E\u6700\u5927\u6570\u306F2`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `8`), ` = 256\u3067\u3059\u3002 L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u975EL8\u306E\u540C\u7B49\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3088\u308A\u3082\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u9818\u57DF\u304C\u5C11\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u4F8B\u3092\u6319\u3052\u308B\u3068\u3001200\u306E\u7570\u306A\u308B\u8272\u306B\u3088\u308B100x100\u306E\u753B\u50CF\u306E\u5834\u5408\u3001ARGB8888\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u4FDD\u5B58\u3059\u308B\u3068100 x 100 x 32\u30D3\u30C3\u30C8= 40000\u30D0\u30A4\u30C8\u3092\u5360\u6709\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u3001L8_ARGB8888\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u4FDD\u5B58\u3059\u308B\u3068100 x 100 x 8\u30D3\u30C3\u30C8+ 200 x 32\u30D3\u30C3\u30C8= 10800\u30D0\u30A4\u30C8\u306E\u307F\u3067\u6E08\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `BW_RLE\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u306F\u3001\u5358\u4E00\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30AB\u30E9\u30FC\u3067\u306F\u306A\u304F\u3001\u9ED2\u3068\u767D\u306E\u9023\u7D9A\u8272\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u591A\u304F\u306E\u5834\u5408\u3001\u3053\u306E\u65B9\u304C\u30B9\u30DA\u30FC\u30B9\u52B9\u7387\u3082\u9AD8\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B8B\u308A\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u4E0A\u8A18\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u540C\u3058\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-formats"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 L8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001TouchGFX\u3067\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u30672\u3064\u306E\u753B\u50CF\u306B\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\u306E\u306F\u73FE\u5B9F\u7684\u3067\u306F\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "byte-and-pixel-order"
  }), `\u30D0\u30A4\u30C8\u3068\u30D4\u30AF\u30BB\u30EB\u306E\u9806\u5E8F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `24\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8RGB888\u306832\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8ARGB888\u306B\u306F\u3001\u30D0\u30A4\u30C8\uFF65\u30DD\u30A4\u30F3\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u305D\u306E\u5834\u5408\u3001\u30D4\u30AF\u30BB\u30EB\u306F\u30EA\u30C8\u30EB\uFF65\u30A8\u30F3\u30C7\u30A3\u30A2\u30F3\u9806\u3067\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u3068\u7406\u89E3\u3057\u3066\u304A\u304F\u3053\u3068\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u3068\u3057\u3066\u300132\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC0xFFFF7700\uFF08\u30A2\u30EB\u30D5\u30A1= 0xFF\u3001\u8D64= 0xFF\u3001\u7DD1= 0x77\u3001\u9752= 0x00\uFF09\u306B\u3064\u3044\u3066\u8003\u3048\u3066\u307F\u307E\u3059\u3002 \u8272\u304C32\u30D3\u30C3\u30C8\u306E\u5909\u6570\u307E\u305F\u306F\u30EC\u30B8\u30B9\u30BF\u306B\u3042\u308B\u5834\u5408\u3001\u5024\u306F0xFFFF7700\u306B\u306A\u308A\u307E\u3059\u3002 \u8272\u304C\u30E1\u30E2\u30EA\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D0\u30A4\u30C8\u306F{ 0x00, 0x77, 0xFF, 0xFF }\u3067\u3059\u3002 \u3053\u308C\u306FBGRA\u3068\u3044\u3046\u9806\u5E8F\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u69D8\u306B\u300116\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8RGB565\u306F\u5E38\u306B16\u30D3\u30C3\u30C8\uFF65\u30DD\u30A4\u30F3\u30C8\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u308B\u306E\u3067\u3001\u30D0\u30A4\u30C8\u306E\u9806\u5E8F\u306F\u95A2\u4FC2\u306A\u304F\u3001\u30E1\u30E2\u30EA\u5185\u3067\u30B9\u30EF\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `8\u30D3\u30C3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08ARGB2222\u306A\u3069\uFF09\u3067\u306F\u8272\u304C\u30D0\u30A4\u30C8\u306B\u9069\u5408\u3057\uFF08\u30A2\u30EB\u30D5\u30A1\u304C2\u3064\u306E\u6700\u9AD8\u30D3\u30C3\u30C8\u306B\u3042\u308B\uFF09\u3001\u5909\u66F4\u306A\u3057\u3067\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u3063\u3068\u5C0F\u3055\u3044\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306EGRAY4\u3001GRAY2\u3001BW\u306F\u30012\u3064\u306E\u9806\u5E8F\u3067\u4FDD\u5B58\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4F4E\u3044\u30D3\u30C3\u30C8\u304C\u5DE6\u7AEF\u306E\u30D4\u30AF\u30BB\u30EB\u307E\u305F\u306F\u53F3\u7AEF\u306E\u30D4\u30AF\u30BB\u30EB\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4F4E\u3044\u30D3\u30C3\u30C8\u304C\u5DE6\u7AEF\u306B\u3042\u308B\u5834\u5408\u306FLSB\u30E2\u30FC\u30C9\u3068\u547C\u3070\u308C\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306FMSB\u30E2\u30FC\u30C9\u3068\u547C\u3070\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9806\u5E8F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B8\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `XRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B8\u30D3\u30C3\u30C8\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30D0\u30A4\u30C8\u306F\u7121\u8996\u3055\u308C\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B8\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u30D3\u30C3\u30C8\u30015\u30D3\u30C3\u30C8\u8D64\u30016\u30D3\u30C3\u30C8\u7DD1\u30015\u30D3\u30C3\u30C8\u9752`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3054\u3068\u306B2\u30D3\u30C3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u30D3\u30C3\u30C8\u306E\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-formats"
  }), `\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF08\u6B63\u78BA\u306B\u8A00\u3046\u3068\u30B0\u30EA\u30D5\uFF09\u3082\u3001\u7279\u5B9A\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30E1\u30E2\u30EA\u5185\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 TouchGFX\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30C6\u30AD\u30B9\u30C8\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C6\u30AD\u30B9\u30C8\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u30D3\u30C3\u30C8\u3001\u4E0D\u900F\u660E\u306E\u307F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u30D3\u30C3\u30C8\u3001\u4E0D\u900F\u660E\u306E\u307F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\u30D3\u30C3\u30C8\u3001\u4E0D\u900F\u660E\u306E\u307F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u30D3\u30C3\u30C8\u3001\u4E0D\u900F\u660E\u306E\u307F`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30EA\u30D5\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u5C0F\u3055\u3044\u753B\u50CF\u306B\u76F8\u5F53\u3057\u3001\u3053\u3053\u3067\u306F\u5404\u30AB\u30E9\u30FC\uFF65\u30A8\u30F3\u30C8\u30EA\u304C\u5404\u30D4\u30AF\u30BB\u30EB\u306E\u4E0D\u900F\u660E\u5EA6\u3092\u4FDD\u6301\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u5B9F\u969B\u306E\u8272\uFF08\u8D64\u3001\u7DD1\u3001\u9752\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09\u3092\u5F8C\u3067\u9069\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001\u4FDD\u5B58\u3055\u308C\u305F\u30B0\u30EA\u30D5'A'\u3092\u9752\u8272\u30D0\u30FC\u30B8\u30E7\u30F3\u3068\u8D64\u8272\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u4E21\u65B9\u3067\u63CF\u753B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5404\u30B0\u30EA\u30D5\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D3\u30C3\u30C8\u6570\u304C\u5897\u3048\u308B\u307B\u3069\u3001\u901A\u5E38\u306F\u8868\u793A\u304C\u30B9\u30E0\u30FC\u30BA\u306B\u306A\u308A\u898B\u6804\u3048\u304C\u3088\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "visual-quality"
  }), `\u8996\u899A\u54C1\u8CEA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u4F5C\u6210\u6642\u306B\u306F\u3001\u6700\u9AD8\u306E\u8996\u899A\u54C1\u8CEA\u3092\u6C42\u3081\u307E\u3059\u304C\u3001\u540C\u6642\u306B\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306B\u3082\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u305F\u3081\u3001\u30EA\u30C3\u30C1\u306ARGB888\u3067\u306F\u306A\u304F\u3001RGB565\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9078\u629E\u3059\u308B\u65B9\u304C\u671B\u307E\u3057\u3044\u5834\u5408\u304C\u591A\u304F\u306A\u308A\u307E\u3059\u3002\u4E00\u822C\u7684\u306B\u306F\u3001\u30E1\u30E2\u30EA\u8981\u4EF6\u3092\u91CD\u8996\u3057\u306A\u304C\u3089\u3001\u6700\u9AD8\u306E\u8996\u899A\u54C1\u8CEA\u3092\u5B9F\u73FE\u3067\u304D\u308B\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6C7A\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dithering"
  }), `\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u753B\u50CF\u3092\u8868\u73FE\u3059\u308B\u3068\u304D\u306E\u8996\u899A\u54C1\u8CEA\u3092\u9AD8\u3081\u308B\u305F\u3081\u306B\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u3068\u547C\u3070\u308C\u308B\u624B\u6CD5\u3092\u63A1\u7528\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306F\u3001\u5B9F\u969B\u306B\u8868\u73FE\u3057\u3066\u3044\u308B\u3088\u308A\u3082\u591A\u304F\u306E\u8272\u3067\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u3088\u304F\u7528\u3044\u3089\u308C\u308B\u624B\u6CD5\u3067\u3059\u3002 \u753B\u50CF\u306E\u8272\u306B\u308F\u305A\u304B\u306A\u30CE\u30A4\u30BA\u3092\u52A0\u3048\u308B\u3053\u3068\u3067\u3001\u3053\u308C\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4F8B\u3092\u6319\u3052\u308B\u3068\u3001RGB888\u306E\u753B\u50CF\u3092RGB565\u306E\u753B\u50CF\u306B\u5909\u63DB\u3059\u308B\u5834\u5408\u3001\u5404\u30AB\u30E9\u30FC\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4E0B\u4F4D\u30D3\u30C3\u30C8\u3092\u524A\u308B\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u5909\u63DB\u30D7\u30ED\u30BB\u30B9\u3067\u3001\u7D50\u679C\u306E\u5404\u8272\u306B\u3044\u304F\u3089\u304B\u306E\u30CE\u30A4\u30BA\u3092\u52A0\u3048\u307E\u3059\u3002\u7D50\u679C\u3068\u3057\u3066\u5909\u63DB\u5F8C\u306E\u753B\u50CF\u306F\u3088\u308A\u30EA\u30C3\u30C1\u306A\u8868\u793A\u306B\u306A\u308A\u3001\u5143\u306ERGB888\u3068\u905C\u8272\u304C\u306A\u3044\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A00\u8449\u3067\u306F\u306A\u304F\u5B9F\u969B\u306E\u753B\u50CF\u3067\u8AAC\u660E\u3059\u308B\u305F\u3081\u3001\u5143\u306ERGB888\u306E\u753B\u50CF\u3068\u3044\u304F\u3064\u304B\u306E\u5909\u63DB\u5F8C\u306E\u753B\u50CF\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002 \u5909\u63DB\u5F8C\u306E\u753B\u50CF\u306F\u3001RGB565\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\u3001xRGB2222\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\u3001GRAY4\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb888.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u5143\u306ERGB888\u306E\u753B\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb565.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u5909\u63DB\u5F8C\u306ERGB565\u306E\u753B\u50CF\uFF08\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/xrgb2222.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u5909\u63DB\u5F8C\u306ExRGB2222\u306E\u753B\u50CF\uFF08\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/gray4.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u5909\u63DB\u5F8C\u306EGRAY4\u306E\u753B\u50CF\uFF08\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u308F\u304B\u308B\u3088\u3046\u306B\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306B\u3088\u308B\u753B\u50CF\u306E\u54C1\u8CEA\u5411\u4E0A\u306F\u307B\u3093\u306E\u308F\u305A\u304B\u3057\u304B\u8A8D\u8B58\u3067\u304D\u307E\u305B\u3093\u3002 RGB565\u306E\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\u3092\u9593\u8FD1\u3067\u3088\u304F\u898B\u3066\u307F\u308B\u3068\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709\u308A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306F\u5143\u306E\u753B\u50CF\u3068\u307B\u3068\u3093\u3069\u540C\u3058\u306B\u898B\u3048\u307E\u3059\u304C\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u7121\u3057\u306E\u65B9\u306B\u306F\u30AB\u30E9\u30FC\uFF65\u30D0\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u660E\u3089\u304B\u306A\u9818\u57DF\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u591A\u304F\u306E\u5834\u5408\u306B16\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u304C\u898B\u6804\u3048\u306E\u3088\u3044\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u5341\u4E8C\u5206\u306B\u8868\u73FE\u3059\u308B\u3053\u3068\u3092\u793A\u3059\u3088\u3044\u4F8B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30BB\u30C3\u30C8\u306B\u5927\u304D\u306A\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u3057\u305F\u753B\u50CF\u3067\u3082\u30AB\u30E9\u30FC\uFF65\u30D0\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u6B21\u306B2\u3064\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002 1\u3064\u76EE\u306F\u3001RGB888 (64,190,222)\u304B\u3089\u9ED2\u8272\u307E\u3067\u306E\u7BC4\u56F2\u306E\u9752\u307F\u304C\u304B\u3063\u305F\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3068\u3001\u5909\u63DB\u5F8C\u306ERGB565\u306E\u753B\u50CF\u306E\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709\u308A\u3068\u7121\u3057\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/bluish.png",
    noShadow: "true",
    width: "800",
    mdxType: "Figure"
  }, "\u5143\u306ERGB888\u306E\u753B\u50CF\u3068\u3001\u5909\u63DB\u5F8C\u306ERGB565\u306E\u753B\u50CF\uFF08\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306F\u3001(255,0,0)\u304B\u3089\u9ED2\u8272\u307E\u3067\u306E\u7BC4\u56F2\u306E\u8D64\u8272\u306E\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/red.png",
    noShadow: "true",
    width: "800",
    mdxType: "Figure"
  }, "\u5143\u306ERGB888\u306E\u753B\u50CF\u3068\u3001\u5909\u63DB\u5F8C\u306ERGB565\u306E\u753B\u50CF\uFF08\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709 / \u7121\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3088\u304F\u898B\u308B\u3068\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u6709\u308A\u3068\u7121\u3057\u306E\u4E21\u65B9\u306ERGB565\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3001\u30AB\u30E9\u30FC\uFF65\u30D0\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u78BA\u8A8D\u3055\u308C\u307E\u3059\u3002 \u8D64\u8272\u306E\u753B\u50CF\u306E\u65B9\u304C\u7E1E\u6A21\u69D8\u304C\u76EE\u7ACB\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5909\u63DB\u5F8C\u306E\u753B\u50CF\u3068\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u306F\u5E38\u306B\u7D30\u5FC3\u306E\u6CE8\u610F\u3092\u6255\u3044\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u5143\u306E\u753B\u50CF\u3092\u5909\u66F4\u3057\u305F\u308A\u3001\u5225\u306E\u30AB\u30E9\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9078\u629E\u3057\u305F\u308A\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u8AAC\u660E\u3057\u305F\u3059\u3079\u3066\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u63CF\u753B\u306E\u300C\u5BB9\u6613\u3055\u300D\u306B\u95A2\u3057\u3066\u6700\u9069\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u3053\u308C\u3089\u306E\u753B\u50CF\u306F\u5927\u304D\u306A\u5909\u63DB\u3092\u884C\u308F\u306A\u304F\u3066\u3082\u3001\u591A\u304B\u308C\u5C11\u306A\u304B\u308C\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3067\u304D\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306F\u610F\u56F3\u3057\u305F\u3082\u306E\u3067\u3042\u308A\u3001TouchGFX\u304C\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u4E0A\u3067\u5186\u6ED1\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u9054\u6210\u3067\u304D\u308B\u7406\u7531\u306E1\u3064\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067UI\u3092\u8A2D\u8A08\u3059\u308B\u969B\u306B\u306F\u3001\u30E6\u30FC\u30B6\u306F.png\u753B\u50CF\u3092\u4F7F\u7528\u3057\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u3053\u308C\u3089\u306E\u5404\u753B\u50CF\u304C\u3001\u4E0A\u3067\u8AAC\u660E\u3057\u305F\u52B9\u7387\u7684\u306A\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u3044\u305A\u308C\u304B\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "alpha-blending"
  }), `\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u884C\u6642\u306B\u306F\u3001\u901A\u5E38\u306ECPU\u3067\u306E\u30B3\u30D4\u30FC\u64CD\u4F5C\u306B\u3088\u308A\u3001\u3042\u308B\u3044\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u6A5F\u80FD\u3092\u4F7F\u7528\u3057\u3066\u3001\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u30B3\u30D4\u30FC\u304C\u884C\u308F\u308C\u307E\u3059\u3002 \u5B8C\u5168\u306B\u900F\u660E / \u4E0D\u900F\u660E\u3067\u306A\u3044\u30D4\u30AF\u30BB\u30EB\u304C\u753B\u50CF\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u4E0A\u306B\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4E00\u90E8\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u3001\u3053\u306E\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "other-image-formats"
  }), `\u305D\u306E\u4ED6\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u884C\u6642\u306B\u4ED6\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF08\u305F\u3068\u3048\u3070.jpg\u3084.png\u306A\u3069\u306E\u5727\u7E2E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306A\u3069\uFF09\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001TouchGFX\u306B\u3088\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7`), `\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://en.wikipedia.org/wiki/Color_depth",
    mdxType: "Link"
  }, "\u8272\u6DF1\u5EA6"), "\u306B\u95A2\u3059\u308BWikipedia\u306E\u8A18\u4E8B\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);