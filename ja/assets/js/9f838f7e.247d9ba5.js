"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3256],{

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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 34555:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
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
  id: "hardware-selection-display",
  title: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-display",
  "id": "development/hardware-selection/hardware-components/hardware-selection-display",
  "title": "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-display",
  "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-display",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-display",
    "title": "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"
  },
  "next": {
    "title": "\u5916\u90E8\u30E1\u30E2\u30EA",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  }
};
const assets = {};




const toc = [{
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4F8B",
  id: "examples-of-displays",
  level: 2
}, {
  value: "LCD-TFT",
  id: "lcd-tft",
  level: 3
}, {
  value: "MIP",
  id: "mip",
  level: 3
}, {
  value: "ePaper / eInk",
  id: "epapereink",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u6982\u8981",
  id: "display-interface-overview",
  level: 2
}, {
  value: "\u8F1D\u5EA6\u3068\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8",
  id: "brightness-and-backlight",
  level: 3
}, {
  value: "\u8996\u899A\u4F4D\u7F6E\u3068\u8272\u306E\u53CD\u8EE2",
  id: "viewing-position-and-color-inversion",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5BFF\u547D",
  id: "display-lifetime",
  level: 3
}, {
  value: "\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6",
  id: "pixel-density",
  level: 3
}, {
  value: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30AB\u30E9\u30FC\uFF65\u30EC\u30F3\u30B8",
  id: "dynamic-color-range",
  level: 4
}, {
  value: "\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0",
  id: "anti-aliasing",
  level: 4
}, {
  value: "\u74B0\u5883",
  id: "environment",
  level: 3
}, {
  value: "\u30BF\u30C3\u30C1 / \u975E\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "touch--non-touch-displays",
  level: 3
}, {
  value: "\u9759\u96FB\u5BB9\u91CF\u5F0F\u30BF\u30C3\u30C1",
  id: "capacitive-touch",
  level: 4
}, {
  value: "\u62B5\u6297\u819C\u5F0F\u30BF\u30C3\u30C1",
  id: "resistive-touch",
  level: 4
}, {
  value: "\u975E\u30BF\u30C3\u30C1\u5F0F",
  id: "non-touch",
  level: 4
}, {
  value: "RAM\u642D\u8F09\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "displays-with-ram",
  level: 3
}, {
  value: "\u975E\u6B63\u65B9\u5F62\u306E\u30D4\u30AF\u30BB\u30EB / \u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30B9\u30DA\u30AF\u30C8\u6BD4",
  id: "non-square-pixels--pixel-aspect-ratio",
  level: 3
}, {
  value: "\u30AB\u30D0\u30FC\uFF65\u30EC\u30F3\u30BA",
  id: "cover-lense",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u306E\u5F37\u5316\u3001\u65B0\u3057\u3044\u5927\u578B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u7D44\u8FBC\u307F\u3001\u30ED\u30FC\u30AB\u30E9\u30FC\u304A\u3088\u3073\u30CF\u30A4\u30AB\u30E9\u30FC\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3088\u308B\u65E7\u578B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u7F6E\u63DB\u3048\u306B\u3088\u308A\u3001\u5404\u88FD\u54C1\u306F\u6A5F\u80FD\u304C\u5411\u4E0A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u7AE0\u3067\u306F\u3001\u7D44\u8FBC\u307F\u306EGUI\u88FD\u54C1\u306B\u5BFE\u3057\u3066\u9069\u5207\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u9078\u629E\u3059\u308B\u3068\u304D\u306B\u8003\u616E\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u3092\u91CD\u70B9\u7684\u306B\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/displays.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u3055\u307E\u3056\u307E\u306A\u30BF\u30A4\u30D7\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E00\u822C\u7684\u306B\u3001TouchGFX\u306F\u3042\u3089\u3086\u308B\u30BF\u30A4\u30D7\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u52D5\u4F5C\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u3001\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001\u8996\u91CE\u89D2\u3001\u8F1D\u5EA6\u306A\u3069\u306B\u306F\u4F9D\u5B58\u3057\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples-of-displays"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30BF\u30A4\u30D7\u306B\u3088\u3063\u3066\u91CD\u8981\u306A\u8981\u7D20\u304C\u7570\u306A\u308B\u305F\u3081\u3001\u9069\u5207\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u306E\u9078\u629E\u306F\u8907\u96D1\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u7AE0\u3067\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u6280\u8853\u306E\u5927\u307E\u304B\u306A\u6982\u8981\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3001\u8AAD\u8005\u3092\u9069\u5207\u306A\u65B9\u5411\u306B\u5C0E\u304D\u305F\u3044\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3069\u306E\u30BF\u30A4\u30D7\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3082\u30D4\u30AF\u30BB\u30EB\u306E\u884C\u3068\u5217\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3055\u307E\u3056\u307E\u306A\u65B9\u6CD5\u3067\u99C6\u52D5\u3055\u308C\u3001\u5185\u8535\u307E\u305F\u306F\u5916\u90E8\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u7528\u306ERAM\u3092\u5099\u3048\u3066\u3044\u307E\u3059\u3002 \u4E00\u90E8\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u3067\u306F\u3001\u4ED6\u306E\u65B9\u5F0F\u3068\u6BD4\u3079\u3066\u5404\u30D4\u30AF\u30BB\u30EB\u3092\u983B\u7E41\u306B\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3067\u306F\u3001GUI\u3067\u4F55\u304B\u5909\u66F4\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306E\u307F\u66F4\u65B0\u3092\u884C\u3048\u3070\u3001\u983B\u7E41\u306A\u66F4\u65B0\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u306B\u306F\u975E\u5E38\u306B\u591A\u304F\u306E\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059\u3002 \u4EE5\u4E0B\u3067\u306F\u3001\u6700\u3082\u3088\u304F\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u3092\u3044\u304F\u3064\u304B\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd-tft"
  }), `LCD-TFT`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT\u306Fthin-film-transistor\uFF08\u8584\u819C\u30C8\u30E9\u30F3\u30B8\u30B9\u30BF\uFF09\u306E\u7565\u3067\u3001\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30DE\u30C8\u30EA\u30C3\u30AF\u30B9\u3092\u6301\u3064LCD\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4E00\u7A2E\u3067\u3059\u3002 LCD-TFT\u306F\u3001\u591A\u69D8\u306A\u89E3\u50CF\u5EA6\u3001\u30B5\u30A4\u30BA\u3001\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001\u4FA1\u683C\u7BC4\u56F2\u306A\u3069\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u7D44\u8FBC\u307F\u88FD\u54C1\u3067\u5E83\u304F\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT-LCD\u306E\u7A2E\u985E\u3068\u3057\u3066TN\u30D1\u30CD\u30EB\u3068IPS\u30D1\u30CD\u30EB\u304C\u3042\u308A\u307E\u3059\u3002 IPS TFT-LCD\u306E\u4F8B\u3068\u3057\u3066\u306F\u3001STM32F769 DISCO\u3068STM32H747 DISCO\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002\u3069\u3061\u3089\u3082800x480 MIPI-DSI TFT IPS LCD\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 TFT-LCD TN\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4F8B\u306B\u306F\u3001STM32F746G DISCO\u3068STM32H7B3I-DK\u304C\u3042\u308A\u307E\u3059\u3002 \u3069\u3061\u3089\u306E\u6280\u8853\u3082\u54C1\u8CEA\u306B\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002\u3044\u304F\u3064\u304B\u306E\u9055\u3044\u3068\u3057\u3066\u8272\u5F69\u8868\u793A\u3084\u8996\u91CE\u89D2\u304C\u3042\u308A\u3001\u591A\u304F\u306FIPS\u30D1\u30CD\u30EB\u306E\u65B9\u304C\u512A\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/display-layers.png",
    noShadow: true,
    mdxType: "Figure"
  }, "LCD-TFT\u30EC\u30A4\u30E4\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mip"
  }), `MIP`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MIP\u3068\u306F\u30D4\u30AF\u30BB\u30EB\u5185\u306B\u30E1\u30E2\u30EA\u304C\u3042\u308B\u3068\u3044\u3046\u610F\u5473\u3067\u3001\u753B\u9762\u4E0A\u3067\u4F55\u304B\u5909\u66F4\u304C\u751F\u3058\u305F\u5834\u5408\u306E\u307F\u96FB\u529B / \u30C7\u30FC\u30BF\u3092\u5FC5\u8981\u3068\u3059\u308B\u30D4\u30AF\u30BB\u30EB\u6280\u8853\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 MIP\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u4F4E\u6D88\u8CBB\u96FB\u529B\u3067\u3001\u30D5\u30EB\u30AB\u30E9\u30FCGUI\u3082\u4F4E\u96FB\u529B\u3067\u52D5\u4F5C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "epapereink"
  }), `ePaper / eInk`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eInk\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u30ED\u30FC\u30AB\u30E9\u30FC\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u3001\u4F4E\u6D88\u8CBB\u96FB\u529B\u3001\u8996\u91CE\u89D2\u306E\u5E83\u3055\u3001\u8AAD\u307F\u3084\u3059\u3055\u304C\u6C42\u3081\u3089\u308C\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6700\u9069\u3067\u3059\u3002 TouchGFX Implementer SDATAWAY\u306F\u3001STM32F412\u4E0A\u3067TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308BeInk\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5B9F\u4F8B\u3067\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.touchgfx.com/cases/e-ink/%E3%82%92%E3%81%94%E8%A6%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://www.touchgfx.com/cases/e-ink/\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/e-ink.png",
    noShadow: true,
    mdxType: "Figure"
  }, "E-Ink"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-interface-overview"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3055\u307E\u3056\u307E\u306A\u30BF\u30A4\u30D7\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4ECB\u3057\u3066\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u63A5\u7D9A\u3055\u308C\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u3088\u3063\u3066\u3055\u307E\u3056\u307E\u306B\u7570\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u5FC5\u8981\u306A\u30D4\u30F3\u6570\u3001\u3055\u307E\u3056\u307E\u306A\u89E3\u50CF\u5EA6\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u6700\u5927\u5E2F\u57DF\u5E45\u306A\u3069\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u95A2\u9023\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u3064\u3044\u3066\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3055\u307E\u3056\u307E\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001Motorola 6800\u3001Intel 8080\u3001SPI\u3001RGB-TFT\u3001\u304A\u3088\u3073MIPI-DSI\u306B\u63A5\u7D9A\u3059\u308B\u5E45\u5E83\u3044\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D4\u30F3\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30BF\u30FC\u30B2\u30C3\u30C8\u89E3\u50CF\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u5927\u5E2F\u57DF\u5E45`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5229\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B20\u70B9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `SPI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u5927480x272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16MHz`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B7\u30F3\u30D7\u30EB\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3001I2C\u3088\u308A\u9AD8\u901F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D1\u30E9\u30EC\u30EB8080/6800\uFF08FMC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8/16*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u5927480x272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB-TFT\uFF08LTDC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8/18/24*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u59271280x800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9AD8\u6027\u80FD\u3001\u4F4E\u30B3\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D4\u30F3\u6570\u304C\u591A\u3044\u3001\u30D1\u30E9\u30EC\u30EB\u901A\u4FE1\u306B\u3088\u3063\u3066EMC\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u3001\u9AD8\u3044\u30AF\u30ED\u30C3\u30AF\u5468\u6CE2\u6570\u304C\u5FC5\u8981\u306A\u53EF\u80FD\u6027`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MIPI-DSI\uFF08LTDC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4/10`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u59271280x800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `80Mbps\uFF5E1.5Gbps`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9AD8\u6027\u80FD\u3001\u5C11\u306A\u3044\u30D4\u30F3\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8907\u96D1\u306A\u30D7\u30ED\u30C8\u30B3\u30EB\u3068\u30C9\u30E9\u30A4\u30D0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LVDS**`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1366x768`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F4E\u3044EMC / \u5E72\u6E09\u3001\u9AD8\u901F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D6\u30EA\u30C3\u30B8\u304C\u5FC5\u8981`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `*\u30BF\u30C3\u30C1\u30B9\u30AF\u30EA\u30FC\u30F3\u3001\u96FB\u6E90\u3001\u5236\u5FA1\u4FE1\u53F7\u306A\u3069\u306E\u305F\u3081\u306B\u8FFD\u52A0\u306E\u30D4\u30F3\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `** LVDS\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u7528\u306B\u30D6\u30EA\u30C3\u30B8\u304C\u5FC5\u8981\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "brightness-and-backlight"
  }), `\u8F1D\u5EA6\u3068\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F1D\u5EA6\u306F\u591A\u304F\u306E\u5834\u5408\u3001\u30AB\u30F3\u30C7\u30E9/m\xB2\u3067\u6E2C\u5B9A\u3055\u308C\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u6700\u3082\u96FB\u529B\u3092\u6D88\u8CBB\u3059\u308B\u90E8\u54C1\u3067\u3059\u3002 \u592A\u967D\u5149\u306E\u4E0B\u3067\u306F\u3001\u304A\u3088\u305D600\u30AB\u30F3\u30C7\u30E9/m\xB2\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u901A\u5E38\u306F\u8F1D\u5EA6\u3092\u4E0A\u3052\u308B\u3068\u6E29\u5EA6\u304C\u4E0A\u6607\u3057\u3001LED\u306E\u5BFF\u547D\u304C\u77ED\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "viewing-position-and-color-inversion"
  }), `\u8996\u899A\u4F4D\u7F6E\u3068\u8272\u306E\u53CD\u8EE2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u88FD\u54C1\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u7D44\u307F\u8FBC\u3080\u5834\u5408\u3001\u30E6\u30FC\u30B6\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u898B\u308B\u4F4D\u7F6E\u3092\u60F3\u5B9A\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3088\u3063\u3066\u306F\u3001\u7279\u5B9A\u306E\u4F4D\u7F6E\u304B\u3089\u898B\u308B\u3068\u8272\u304C\u53CD\u8EE2\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u9069\u5207\u306A\u4F4D\u7F6E\u306B\u8A2D\u7F6E\u3057\u3066\u3001\u30E6\u30FC\u30B6\u304C\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30C7\u30B6\u30A4\u30CA\u30FC\u306E\u610F\u56F3\u3057\u305F\u6B63\u3057\u3044\u8272\u3092\u898B\u306A\u304C\u3089GUI\u3092\u64CD\u4F5C\u4F53\u9A13\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306E\u306F\u3001\u610F\u5916\u3068\u56F0\u96E3\u306A\u3053\u3068\u306A\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u306E\u53CD\u8EE2\u306FTN\u30D1\u30CD\u30EB\u3067\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 SWV\u30D5\u30A3\u30EB\u30E0\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8996\u91CE\u89D2\u3092\u5E83\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/viewing-position.png",
    mdxType: "Figure"
  }, "\u3055\u307E\u3056\u307E\u306A\u8996\u899A\u4F4D\u7F6E\u3067\u8868\u793A\u3055\u308C\u308B\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-lifetime"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5BFF\u547D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5BFF\u547D\u306F\u300125\u2103\u3067\u534A\u5206\u306E\u8F1D\u5EA6\u306B\u9054\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 \u88FD\u54C1\u306E\u30E9\u30A4\u30D5\uFF65\u30B5\u30A4\u30AF\u30EB\u304C\u9577\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-density"
  }), `\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306F\u30011\u30A4\u30F3\u30C1\u307E\u305F\u306F1\u5E73\u65B9\u30A4\u30F3\u30C1\u3042\u305F\u308A\u306B\u8868\u793A\u3055\u308C\u308B\u30D4\u30AF\u30BB\u30EB\u6570\u3067\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 \u9069\u5207\u306A\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306F\u3001\u30A8\u30F3\u30C9\u30E6\u30FC\u30B6\u3001\u74B0\u5883\u3001\u8A2D\u8A08\u30CB\u30FC\u30BA\u306A\u3069\u304B\u3089\u671F\u5F85\u3055\u308C\u308B\u30EC\u30D9\u30EB\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u5927\u307E\u304B\u306B\u8A00\u3046\u3068\u30016.1\u30A4\u30F3\u30C1\u3001\u89E3\u50CF\u5EA62340x1080\u306E\u30CF\u30A4\u30A8\u30F3\u30C9\u306E\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u306F\u30011\u5E73\u65B9\u30A4\u30F3\u30C1\u3042\u305F\u308A178,500\u306E\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u3067\u3001800x480\u306E\u4E00\u822C\u7684\u306A5\u30A4\u30F3\u30C1\u306ETFT\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u30011\u5E73\u65B9\u30A4\u30F3\u30C1\u3042\u305F\u308A34.816\u306E\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-density.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4F4E\u3001\u4E2D\u3001\u9AD8\u306E\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3044\u304F\u3064\u304B\u306E\u6A19\u6E96\u89E3\u50CF\u5EA6\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B5\u30A4\u30BA\u30011\u5E73\u65B9\u30A4\u30F3\u30C1\u3042\u305F\u308A\u306E\u30D4\u30AF\u30BB\u30EB\u6570\uFF08PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\uFF09\u3067\u8A08\u6E2C\u3055\u308C\u308B\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306E\u4F8B\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `QVGA 320x240`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.4\u201D (27,777 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.5\u201D (13,061 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `WQVGA 480x272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4.3\u201D (16,462 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5\u201D (12,175 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `HVGA 480x320`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.5\u201D (27,167 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `VGA 640x480`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5.7\u201D (19,698 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `6.4 (15,625 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `WVGA 800x480`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u201D (54,400 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5\u201D (34,816 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `WSVGA 1024x600`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `7\u201D (28,746 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10.1\u201D (13,808 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u975E\u5E38\u306B\u8FD1\u3065\u3044\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u898B\u306A\u3044\u3068\u9055\u3044\u304C\u308F\u304B\u3089\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306E\u4F8B\u3068\u3057\u3066\u306F\u3001STM32F476DISCO\u306716,462 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\u3001STM32F769DISCO\u306754,400 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E\u3055\u307E\u3056\u307E\u306A\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u306E\u4F8B\u306E\u4E2D\u306B\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30AB\u30E9\u30FC\uFF65\u30EC\u30F3\u30B8\u3068\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0\u306B\u5F71\u97FF\u3059\u308B\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "dynamic-color-range"
  }), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30AB\u30E9\u30FC\uFF65\u30EC\u30F3\u30B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30AB\u30E9\u30FC\uFF65\u30EC\u30F3\u30B8\u3068\u306F\u3001\u9ED2\u3068\u767D\u306A\u30692\u3064\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u8272\u306E\u9593\u306E\u6BD4\u7387\u306E\u3053\u3068\u3067\u3059\u3002 \u4E0A\u306E\u4F8B\u3067\u306F\u3001\u9752\u8272\u3068\u767D\u8272\u306B\u306F\u7570\u306A\u308B\u30EC\u30D9\u30EB\u306E\u767D\u3068\u9752\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u5DE6\u5074\u306E\u753B\u50CF\u306E\u65B9\u304C\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u304C\u4F4E\u304F\u3001\u53F3\u5074\u306E\u753B\u50CF\u306F\u591A\u304F\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001\u8868\u73FE\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u8272\u3092\u8868\u793A\u3057\u3001\u7570\u306A\u308B\u8272\u3084\u30A8\u30C3\u30B8\u9593\u3067\u30B9\u30E0\u30FC\u30BA\u306A\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u73FE\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "anti-aliasing"
  }), `\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u304C\u4F4E\u3059\u304E\u308B\u3068\u3001\u968E\u6BB5\u52B9\u679C\u304C\u73FE\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u753B\u50CF\u5185\u306B\u3042\u308B\u968E\u6BB5\u72B6\u306E\u30A8\u30C3\u30B8\u3092\u5E73\u6ED1\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u6700\u521D\u306E2\u3064\u306E\u9752\u3044\u5186\u3092\u898B\u308B\u3068\u968E\u6BB5\u52B9\u679C\u304C\u73FE\u308C\u3066\u3044\u307E\u3059\u3002\u30D4\u30AF\u30BB\u30EB\u5BC6\u5EA6\u304C\u5341\u5206\u3067\u306A\u3044\u305F\u3081\u306B\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u5341\u5206\u306A\u9AD8\u30AB\u30E9\u30FC\uFF65\u30EC\u30F3\u30B8\u3092\u4FDD\u6301\u3059\u308B\u305F\u3081\u306B\u5341\u5206\u306A\u6570\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u8868\u793A\u3067\u304D\u306A\u304F\u3001\u3088\u3063\u3066\u5341\u5206\u306A\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0\u3092\u5B9F\u73FE\u3067\u304D\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/anti-aliasing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "environment"
  }), `\u74B0\u5883`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u9078\u5B9A\u3059\u308B\u5834\u5408\u3001\u74B0\u5883\u306F\u6975\u3081\u3066\u91CD\u8981\u306A\u8003\u616E\u30DD\u30A4\u30F3\u30C8\u306B\u306A\u308A\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u3088\u3046\u306A\u70B9\u3092\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u76F4\u5C04\u65E5\u5149\u304C\u5F53\u305F\u308B\u304B\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8010\u885D\u6483\u6027\u3092\u5FC5\u8981\u3068\u3059\u308B\u82DB\u9177\u306A\u74B0\u5883\u3067\u4F7F\u7528\u3059\u308B\u304B\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u624B\u888B\u3092\u306F\u3081\u3066\u64CD\u4F5C\u3059\u308B\u304B\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30D0\u30F3\u30C0\u30EB\uFF65\u30D7\u30EB\u30FC\u30D5\uFF08\u9632\u72AF\u8010\u885D\u6483\u6027\uFF09\u306F\u5FC5\u8981\u304B\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6A5F\u68B0\u7684\u306A\u30DC\u30BF\u30F3\u306E\u307F\u3067\u64CD\u4F5C\u3059\u308B\u304B\uFF1F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u8CEA\u554F\u306B\u7B54\u3048\u308B\u3053\u3068\u3067\u3001\u3069\u306E\u3088\u3046\u306A\u30BF\u30C3\u30C1\uFF65\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3092\u9078\u629E\u3059\u308B\u306E\u304B\u3001\u3042\u308B\u3044\u306F\u30BF\u30C3\u30C1\u304C\u5FC5\u8981\u306A\u306E\u304B\u306B\u3064\u3044\u3066\u3088\u304F\u7406\u89E3\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX\u306F\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u975E\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4E21\u65B9\u3067\u52D5\u4F5C\u3057\u3001TouchGFX GUI\u306F\u30DC\u30BF\u30F3\u3001\u624B\u3001\u97F3\u58F0\u30B8\u30A7\u30B9\u30C1\u30E3\u3067\u3082\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch--non-touch-displays"
  }), `\u30BF\u30C3\u30C1 / \u975E\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u3067\u306F\u3001\u62B5\u6297\u819C\u5F0F\u3001\u9759\u96FB\u5BB9\u91CF\u5F0F\uFF08\u8868\u9762\u578B\u3001\u6295\u5F71\u578B\uFF09\u3001SAW\u30BF\u30C3\u30C1\u3001\u8D64\u5916\u7DDA\u578B\u30BF\u30C3\u30C1\u306A\u3069\u3001\u3055\u307E\u3056\u307E\u306A\u30BF\u30C3\u30C1\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u6280\u8853\u304C\u5E02\u5834\u3067\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u6280\u8853\u306E\u307B\u3093\u306E\u4E00\u90E8\u3092\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive-touch"
  }), `\u9759\u96FB\u5BB9\u91CF\u5F0F\u30BF\u30C3\u30C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u3082\u666E\u53CA\u3057\u3066\u3044\u308B\u30BF\u30C3\u30C1\u6280\u8853\u306E1\u3064\u3067\u3059\u3002 \u6B21\u306E2\u3064\u306E\u30BB\u30F3\u30B7\u30F3\u30B0\u6280\u8853\u306B\u5206\u3051\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u81EA\u5DF1\u5BB9\u91CF\u65B9\u5F0F\u306F1\u672C\u6307\u306E\u30BF\u30C3\u30C1\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u4E92\u5BB9\u91CF\u65B9\u5F0F\u3067\u306F\u30DE\u30EB\u30C1\u30BF\u30C3\u30C1\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u6C34\u3084\u6E7F\u6C17\u306B\u5F31\u3044\u3068\u3044\u3046\u554F\u984C\u304C\u3042\u308A\u307E\u3059\uFF08TouchGFX\u306F\u30DE\u30EB\u30C1\u30BF\u30C3\u30C1\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306ESTM32 DISCO\u30DC\u30FC\u30C9\u306F\u9759\u96FB\u5BB9\u91CF\u5F0F\u30BF\u30C3\u30C1\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\u4F8B\u3068\u3057\u3066\u3001STM32H7B3I DISCO\u3001STM32H750 DISCO\u3001STM32F746G DISCO\u306A\u3069\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive-touch"
  }), `\u62B5\u6297\u819C\u5F0F\u30BF\u30C3\u30C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u62B5\u6297\u819C\u5F0F\u30BF\u30C3\u30C1\u306F\u6A5F\u68B0\u7684\u5727\u529B\u306B\u3088\u3063\u3066\u4F5C\u7528\u3059\u308B\u5358\u7D14\u306A\u6280\u8853\u3067\u3001ADC\u307E\u305F\u306F\u7C21\u5358\u306A\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u307F\u304C\u5FC5\u8981\u3067\u3059\u3002 \u6210\u719F\u3057\u305F\u6280\u8853\u306A\u306E\u3067\u591A\u304F\u306F\u4F4E\u4FA1\u683C\u3067\u3059\u3002 \u8868\u9762\u306E\u5F15\u3063\u304B\u304D\u50B7\u3084\u5F15\u88C2\u304D\u306B\u5BFE\u3059\u308B\u4FDD\u8B77\u306F\u512A\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u30D0\u30F3\u30C0\u30EB\uFF65\u30D7\u30EB\u30FC\u30D5\u306F\u56F0\u96E3\u3067\u3059\u3002 \u307E\u305F\u3001\u592A\u967D\u5149\u306E\u4E0B\u3067\u306F\u8AAD\u307F\u306B\u304F\u304F\u306A\u308A\u307E\u3059\u3002 STM32F429 DISCO\u30DC\u30FC\u30C9\u306F\u62B5\u6297\u819C\u5F0F\u30BF\u30C3\u30C1\u3092\u4F7F\u7528\u3057\u3066\u304A\u308A\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "non-touch"
  }), `\u975E\u30BF\u30C3\u30C1\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GUI\u304C\u30DC\u30BF\u30F3\u5236\u5FA1\u306E\u5834\u5408\u3001\u753B\u50CF / \u30D3\u30C7\u30AA\u3092\u8868\u793A\u3059\u308B\u3060\u3051\u306E\u5834\u5408\u3084\u3001\u5225\u306E\u30C7\u30D0\u30A4\u30B9\u304B\u3089\u5916\u90E8\u5236\u5FA1\u3055\u308C\u308B\u3088\u3046\u306A\u5834\u5408\u306E\u591A\u304F\u306F\u3001\u88FD\u54C1\u306B\u30BF\u30C3\u30C1\u6A5F\u80FD\u3092\u8FFD\u52A0\u3057\u3066\u3082\u4FA1\u5024\u304C\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30BF\u30C3\u30C1\uFF65\u30EC\u30A4\u30E4\u3092\u8FFD\u52A0\u3057\u306A\u3051\u308C\u3070\u3001\u4FA1\u683C\u3082\u6291\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "displays-with-ram"
  }), `RAM\u642D\u8F09\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001Motorola 6800\u3001Intel 8080\u3001SPI\u3001\u307E\u305F\u306FMIPI-DSI\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u642D\u8F09\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u30011\u30D5\u30EB\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u306ERAM\uFF08GRAM\uFF09\u3092\u5185\u8535\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30BF\u30A4\u30D7\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001SPI\u3001FMC\u3001\u307E\u305F\u306FDSI\u30DB\u30B9\u30C8\uFF08LTDC\uFF09\u3092\u4ECB\u3057\u3066\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002 2\u3064\u76EE\u306ERAM\uFF08\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF09\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4RAM\u306E\u5916\u90E8\u306B\u8A2D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u3084\u5916\u90E8RAM\u5185\u306B\u8A2D\u7F6E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-mipi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "MIPI-DSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u4FDD\u5B58\u306E\u305F\u3081\u306B\u5FC5\u8981\u306A\u5916\u90E8RAM\uFF08\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u5916\u90E8\uFF09\u304C\u5B58\u5728\u3057\u306A\u3044\u305F\u3081\u306B\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u306E\u4F7F\u7528\u53EF\u80FD\u306A\u5185\u90E8RAM\u304C\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306ERAM\u304C1\u30D5\u30EB\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u3092\u4E0B\u56DE\u308B\u5834\u5408\u306F\u3001TouchGFX\u306E\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u3092\u975E\u5E38\u306B\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../../scenarios/lowering-memory-usage-with-partial-framebuffer",
    mdxType: "Link"
  }, "\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-spi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "non-square-pixels--pixel-aspect-ratio"
  }), `\u975E\u6B63\u65B9\u5F62\u306E\u30D4\u30AF\u30BB\u30EB / \u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30B9\u30DA\u30AF\u30C8\u6BD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u3082\u4E00\u822C\u7684\u306A\u30D4\u30AF\u30BB\u30EB\u306E\u5F62\u72B6\u306F\u6B63\u65B9\u5F62\u3067\u3059\u304C\u3001\u4E00\u90E8\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u975E\u6B63\u65B9\u5F62\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\u6BD4\u3068\u306F\u30D4\u30AF\u30BB\u30EB\u306E\u5E45\u3068\u9AD8\u3055\u306E\u6BD4\u7387\u306E\u3053\u3068\u3067\u3059\u3002 \u5E45\u304C100\u3067\u9AD8\u3055\u304C100\u306E\u6B63\u65B9\u5F62\u30D4\u30AF\u30BB\u30EB\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u306E\u3001\u30A2\u30B9\u30DA\u30AF\u30C8\u6BD4\u306F1/1\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u975E\u6B63\u65B9\u5F62\u306E\u30D4\u30AF\u30BB\u30EB\u3067\u306F\u30D4\u30AF\u30BB\u30EB\u306E\u30A2\u30B9\u30DA\u30AF\u30C8\u6BD4\u304C\u7570\u306A\u308A\u307E\u3059\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30C7\u30B6\u30A4\u30CA\u30FC\u304C\u3053\u306E\u3053\u3068\u3092\u8003\u616E\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u8868\u793A\u304C\u4E0B\u306E\u4F8B\u306E\u3088\u3046\u306B\u5F15\u304D\u4F38\u3070\u3055\u308C\u305F\u72B6\u614B\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-aspect.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u5F15\u304D\u4F38\u3070\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cover-lense"
  }), `\u30AB\u30D0\u30FC\uFF65\u30EC\u30F3\u30BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u7D44\u8FBC\u307F\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u88FD\u54C1\u306E\u9854\u306B\u306A\u308B\u90E8\u5206\u3067\u3001\u30AB\u30D0\u30FC\uFF65\u30EC\u30F3\u30BA\u3092\u8FFD\u52A0\u3059\u308B\u3068\u898B\u6620\u3048\u304C\u3088\u304F\u306A\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 \u30AB\u30D0\u30FC\uFF65\u30EC\u30F3\u30BA\u306B\u3088\u3063\u3066\u30C7\u30B6\u30A4\u30F3\u3001\u5F15\u3063\u304B\u304D\u50B7\u306B\u5BFE\u3059\u308B\u8010\u6027\u3001\u885D\u6483\u306B\u5BFE\u3059\u308B\u5F37\u5EA6\u3001\u8272\u306E\u8868\u793A\u306A\u3069\u3092\u5411\u4E0A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);