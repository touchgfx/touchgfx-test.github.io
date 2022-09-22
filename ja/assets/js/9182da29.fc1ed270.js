"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8728],{

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

/***/ 70814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
}));
class Caution extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-caution)",
      header: "Caution",
      type: "caution",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Caution);


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

/***/ 24483:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70814);
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
  id: "scenarios-fmc",
  title: "FMC & SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "title": "FMC & SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-fmc",
    "title": "FMC & SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "LTDC / \u30D1\u30E9\u30EC\u30EBRGB",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"
  },
  "next": {
    "title": "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"
  }
};
const assets = {};




const toc = [{
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001",
  id: "transferring-the-framebuffer",
  level: 2
}, {
  value: "FMC",
  id: "fmc",
  level: 3
}, {
  value: "HAL::flushFrameBuffer()\u304B\u3089\u623B\u308B",
  id: "returning-from-halflushframebuffer",
  level: 2
}, {
  value: "TouchGFX\u30C9\u30E9\u30A4\u30D0 / \u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\u4FE1\u53F7",
  id: "touchgfx-driver--tearing-effect-signal",
  level: 2
}, {
  value: "\u7D50\u8AD6",
  id: "conclusion",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B7\u30CA\u30EA\u30AA\u306F\u3001FMC\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u3001\u307E\u305F\u306FSPI\u7D4C\u7531\u3067\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308BLCD\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8EE2\u9001\u3059\u308B\u969B\u306E\u624B\u9806\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u3082\u306E\u3067\u3059\u3002\u3053\u306E2\u3064\u306E\u65B9\u6CD5\u306F\u3044\u304F\u3064\u304B\u306E\u8981\u7D20\u3092\u5171\u6709\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3059\u308B\u30B7\u30CA\u30EA\u30AA\u306F\u3001\u4F8B\u3068\u3057\u3066ST7789H2 LCD\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u3001\u30DC\u30FC\u30C9\u4ED5\u69D8\u306B\u6CBF\u3063\u305FFMC\u307E\u305F\u306FSPI\u306E\u8A2D\u5B9A\u304C\u5B8C\u4E86\u3059\u308C\u3070\u3001TouchGFX Generator\u3092\u4F7F\u7528\u3057\u3066TouchGFX HAL\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u958B\u767A\u8005\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u66F4\u65B0\u3055\u308C\u305F\u90E8\u5206\u3092\u63A5\u7D9A\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56F3\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066Custom\u304C\u9078\u629E\u3055\u308C\u305F\u3001TouchGFX Generator\u306E\u8A2D\u5B9A\u3067\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306F\u3001TouchGFX Generator\u306B\u5BFE\u3057\u3066\u3001\u958B\u767A\u8005\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u624B\u52D5\u3067`), `\u8A2D\u5B9A\u3057\u3066\u30D4\u30AF\u30BB\u30EB\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u77E5\u3089\u305B\u308B\u3068\u3068\u3082\u306B\u3001\u305D\u308C\u3092\u5B9F\u73FE\u3059\u308B\u305F\u3081\u306E\u30CF\u30F3\u30C9\u30E9\u3092\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/custom-interface.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX Generator\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "SPI\u7D4C\u7531\u3067\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u306F\u3001Custom\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306B\u3001GRAM\u3092\u5185\u8535\u3057\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5834\u5408\u3001\u751F\u6210\u3055\u308C\u305FTouchGFX HAL\u3067\u30E6\u30FC\u30B6\u304C\u8A18\u8FF0\u3059\u308B\u30B3\u30FC\u30C9\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u624B\u9806\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u518D\u63CF\u753B\u3055\u308C\u308B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u9818\u57DF\u306B\u57FA\u3065\u3044\u3066\u3001\u3053\u306E\u9818\u57DF\u306B\u5BFE\u5FDC\u3059\u308BGRAM\u5185\u306E\u5834\u6240\u306B\u3001\u300C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30AB\u30FC\u30BD\u30EB\u300D\u304A\u3088\u3073\u300C\u30A2\u30AF\u30C6\u30A3\u30D6\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u300D\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u9001\u3089\u308C\u3066\u304F\u308B\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092GRAM\u306B\u66F8\u304D\u8FBC\u3080\u6E96\u5099\u3092\u6574\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transferring-the-framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u9818\u57DF\u304C\u66F4\u65B0\u3055\u308C\u308B\u3068\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect r)`), `\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306F\u3001SPI\u3084FMC\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306E\u3088\u3046\u306B\u3001\u958B\u767A\u8005\u304C\u30D4\u30AF\u30BB\u30EB\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u3092\u624B\u52D5\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u304D\u306B\u306F\u30AA\u30FC\u30D0\u30E9\u30A4\u30C9\u3067\u304D\u307E\u3059\u3002 \u5F8C\u8FF0\u3059\u308B\u3088\u3046\u306B\u3001FMC\u30D0\u30F3\u30AF\u7D4C\u7531\u3067\u30D4\u30AF\u30BB\u30EB\u3092\u8EE2\u9001\u3059\u308B\u95A2\u6570\u306F\u3001TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u793A\u3057\u305FST7789H2\u7528\u306E\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u306F\u3001\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30D5\u30A7\u30FC\u30BA\u3067\u958B\u767A\u3055\u308C\u305F\u3082\u306E\u3067\u3042\u308A\u3001\u6A5F\u80FD\u3059\u308C\u3070\u3001\u591A\u304B\u308C\u5C11\u306A\u304B\u308CTouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308BHAL\u30AF\u30E9\u30B9\u306B\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C9\u30E9\u30A4\u30D0\u306F\u3001\u30D4\u30AF\u30BB\u30EB\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30E1\u30E2\u30EA\u66F8\u8FBC\u307F\u4F4D\u7F6E\u3092\u5236\u5FA1\u3067\u304D\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)
{
    /* Set Cursor */
    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);

    /* Prepare to write to LCD RAM */
    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);

    /* Send Pixels - User defined function */
    this->copyFrameBufferBlockToLCD(rect);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ST7789H2_SetDisplayWindow`), `\u306F\u3001GRAM\u5185\u306E\u4EEE\u60F3\u300C\u30AB\u30FC\u30BD\u30EB\u300D\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `x`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `y`), `\u5EA7\u6A19\u3092\u3001\u7279\u5B9A\u306E\u30EC\u30B8\u30B9\u30BF\u306B\u66F8\u304D\u8FBC\u3093\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u306FGRAM\u3092\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u4E00\u822C\u7684\u306A\u65B9\u6CD5\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-c"
  }), `extern "C"
void ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)
{
    uint8_t   parameter[4];

    /* CASET: Column Address Set */
    parameter[0] = 0x00;
    parameter[1] = Xpos;
    parameter[2] = 0x00;
    parameter[3] = Xpos + Width - 1;
    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);

    /* RASET: Row Address Set */
    parameter[0] = 0x00;
    parameter[1] = Ypos;
    parameter[2] = 0x00;
    parameter[3] = Ypos + Height - 1;
    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F8B\u3067\u306F\u3001\u6B21\u306B\u793A\u3059\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::copyFrameBufferBlockToLCD`), `\u306F\u3001\u66F4\u65B0\u3055\u308C\u305F\u9818\u57DF\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `\uFF09\u3092\u4E00\u5EA6\u306B1\u30E9\u30A4\u30F3\u305A\u3064\u9001\u4FE1\u3057\u3001\u305D\u308C\u306B\u5FDC\u3058\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u9032\u3093\u3067\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u30E6\u30FC\u30B6\u5B9A\u7FA9\u306E\u95A2\u6570\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)
{
    __IO uint16_t* ptr;
    uint32_t height;

    // This can be accelerated using regular DMA hardware
    for (height = 0; height < rect.height ; height++)
    {
        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;
        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ptr`), ` \u3092\u624B\u52D5\u3067\u9032\u3081\u308B\u306E\u3067\u306F\u306A\u304F\u3001TouchGFX Generator\u304C\u751F\u6210\u3059\u308B\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `advanceFrameBufferToRect`), `\u304C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `\u306E\u4F4D\u7F6E\u306B\u5F93\u3063\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ptr`), ` \u3092\u9032\u3081\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const
{
    //       Advance vertically                   Advance horizontally
    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;
    return fbPtr;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "fmc"
  }), `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C11\u306A\u304F\u3068\u30821\u3064\u306EFMC\u30D0\u30F3\u30AF\u304C\u6B63\u3057\u304F\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308C\u3070\u3001TouchGFX Generator\u306FFMC\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3082\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306FCustom\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30B3\u30FC\u30C9\u3068\u3088\u304F\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308BFMC\u30D0\u30F3\u30AF\u3068\u3084\u308A\u53D6\u308A\u3059\u308B\u305F\u3081\u306B\u3001\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD_IO_WriteMultipleData`), `\u304C\u751F\u6210\u3055\u308C\u308B\u70B9\u304C\u7570\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `copyFrameBufferBlockToLCD`), `\u7528\u306B\u524D\u306B\u63D0\u793A\u3057\u305F\u30B3\u30FC\u30C9\u3092\u3082\u3046\u4E00\u5EA6\u898B\u76F4\u3057\u3066\u307F\u308B\u3068\u3001\u3053\u306E\u751F\u6210\u3055\u308C\u305F\u95A2\u6570\u306E\u4F7F\u7528\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "SPI\u304A\u3088\u3073FMC\u306E\u3069\u3061\u3089\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u3082\u3001\u958B\u767A\u8005\u306F\u30011\uFF09\u30AB\u30FC\u30BD\u30EB\u3092\u8A2D\u5B9A\u3057\u30012\uFF09GRAM\u306B\u66F8\u304D\u8FBC\u3080\u6E96\u5099\u3092\u3057\u3066\u30013\uFF09\u30AB\u30B9\u30BF\u30E0\u306ESPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u304B\u751F\u6210\u3055\u308C\u305FFMC\u30D0\u30F3\u30AF\u95A2\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u7D4C\u7531\u3057\u3066\u30D4\u30AF\u30BB\u30EB\u3092\u8EE2\u9001\u3059\u308B\u305F\u3081\u306B\u3001flushFrameBuffer()\u95A2\u6570\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-c"
  }), `    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)
    {
        uint32_t  i;

        for (i = 0; i < Size; i++)
        {
            FMC_BANK1_WriteData(pData[i]);
        }
    }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u56F3\u306F\u3001FMC\u30D0\u30F3\u30AF2\u306E\u6709\u52B9\u306A16\u30D3\u30C3\u30C8\u306E\uFF08\u5FC5\u9808\uFF09\u8A2D\u5B9A\u3092\u793A\u3057\u3066\u3044\u307E\u3059\uFF08\u3069\u3061\u3089\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.png",
    width: "600",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC\u30D0\u30F3\u30AF\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u52B9\u306A\u8A2D\u5B9A\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001TouchGFX Generator\u3067\u3053\u306E\u30D0\u30F3\u30AF\u3092\u9078\u629E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u4F7F\u7528\u3059\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306EFMC\u30D0\u30F3\u30AF\uFF65\u30EC\u30B8\u30B9\u30BF\u306E\u958B\u59CB\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.png",
    width: "500",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306FFMC\u30D0\u30F3\u30AF\u306E\u8A2D\u5B9A\u3092\u691C\u8A3C\u3057\u3001\u554F\u984C\u304C\u898B\u3064\u304B\u308C\u3070\u305D\u308C\u3092\u5831\u544A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.png",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC\u306E\u8A2D\u5B9A\u30A8\u30E9\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "returning-from-halflushframebuffer"
  }), `HAL::flushFrameBuffer()\u304B\u3089\u623B\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u95A2\u6570\u304B\u3089\u623B\u308B\u3068\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u30D5\u30EC\u30FC\u30E0\u306E\u6B8B\u308A\u306E\u90E8\u5206\u306E\u63CF\u753B\u3092\u7D9A\u3051\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8EE2\u9001\u306BDMA\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u958B\u767A\u8005\u306FDMA\u5B8C\u4E86\u5272\u8FBC\u307F\u4FE1\u53F7\u306B\u3088\u308B\u30BB\u30DE\u30D5\u30A9\u3092\u5F85\u6A5F\u3059\u308B\u306A\u3069\u3057\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), ` \u3059\u3050\u306B\u623B\u3089\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u64EC\u4F3C\u30B3\u30FC\u30C9\u306F\u3001DMA\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer()`), ` \u306E\u69CB\u6210\u4F8B\u3092\u793A\u3057\u305F\u3082\u306E\u3067\u3059\u3002 \u3053\u306E\u30B3\u30FC\u30C9\u306F\u3001FreeRTOS\u306E\u30BB\u30DE\u30D5\u30A9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `screen_frame_buffer_sem`), `\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    uint16_t* fb = HAL::lockFrameBuffer();

    //Prepare display: Set cursor, write to display gram as described previously in this scenario

    //Try to take a display semaphore - Always free at this point
    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);

    //Set up DMA
    screenDMAEnable();

    // Wait for the DMA transfer to complete
    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);

    //Unlock framebuffer and give semaphore back
    HAL::unlockFrameBuffer();
    xSemaphoreGive(screen_frame_buffer_sem);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305FFMC\u30B3\u30FC\u30C9\u3067\u306FDMA\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--tearing-effect-signal"
  }), `TouchGFX\u30C9\u30E9\u30A4\u30D0 / \u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\u4FE1\u53F7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18TouchGFX Generator\u306E\u8A2D\u5B9A\u3067\u306F\u3001\uFF3BApplication Tick Source\uFF3D\u3082\uFF3BCustom\uFF3D\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306F\u3001TFT\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u5185\u8535\u3057\u3066\u3044\u306A\u3044\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u4E00\u822C\u7684\u306A\u8A2D\u5B9A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u300C\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8FF0\u3079\u305F\u3088\u3046\u306B\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306F\u3001\u901A\u5E38\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3089\u4FE1\u53F7\u304C\u9001\u3089\u308C\u305F\u6642\u70B9\u3067\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u30D6\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30EA\u30A2\u30EB\u307E\u305F\u306F8080\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5099\u3048\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5834\u5408\u3001\u901A\u5E38\u306F\u5185\u8535\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C(TE) \u306E\u4FE1\u53F7\u3092\u5468\u671F\u7684\u306B\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u4FE1\u53F7\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306EGPIO\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002 \u305D\u306E\u5834\u5408\u3001\u901A\u5E38\u306F\u3001GPIO\u306B\u4FE1\u53F7\u304C\u9001\u3089\u308C\u308B\u3068\u5272\u8FBC\u307F\u304C\u767A\u751F\u3059\u308B\u3088\u3046\u306B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u300C\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\u300D\u5272\u8FBC\u307F\u306B\u3088\u308A\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306E\u30D6\u30ED\u30C3\u30AF\u304C\u89E3\u9664\u3055\u308C\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u304C\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 STM32CubeMX\u3067\u3001\u5FC5\u305A\u3053\u306EGPIO\u3092\u5165\u529B\u306B\u8A2D\u5B9A\u3057\u3001\u305D\u306E\u30D4\u30F3\u306E\u5916\u90E8\u5272\u8FBC\u307F\u3092\u6709\u52B9\u5316\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C"
void TE_Handler(void)
{
    ...
    /* Unblock TouchGFX Engine Main Loop to render next frame */
    OSWrappers::signalVSync();
    ...
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7D50\u8AD6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3067Custom\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8EE2\u9001\u3059\u308B\u30B3\u30FC\u30C9\u3092\u3001\u958B\u767A\u8005\u304C\u624B\u52D5\u3067\u4F5C\u6210\u3059\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306F\u3001\u95A2\u6570 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::flushFrameBuffer(Rect& rect)`), `\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u95A2\u6570\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u9818\u57DF\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u304C\u5B8C\u4E86\u3059\u308B\u3068TouchGFX\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u3001\u958B\u767A\u8005\u306F\u3001\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u3001\u5F71\u97FF\u3092\u53D7\u3051\u308B\u30D4\u30AF\u30BB\u30EB\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3001SPI\u3001FMC\u306A\u3069\u306B\u8EE2\u9001\u3067\u304D\u307E\u3059\u3002 \u3044\u305A\u308C\u306E\u5834\u5408\u3067\u3082\u3001\u4EE5\u4E0B\u306E\u624B\u9806\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u518D\u63CF\u753B\u3055\u308C\u308B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u9818\u57DF\u306B\u57FA\u3065\u3044\u3066\u3001\u3053\u306E\u9818\u57DF\u306B\u5BFE\u5FDC\u3059\u308BGRAM\u5185\u306E\u5834\u6240\u306B\u3001\u300C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30AB\u30FC\u30BD\u30EB\u300D\u304A\u3088\u3073\u300C\u30A2\u30AF\u30C6\u30A3\u30D6\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u300D\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u9001\u3089\u308C\u3066\u304F\u308B\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092GRAM\u306B\u66F8\u304D\u8FBC\u3080\u6E96\u5099\u3092\u6574\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002 FMC\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u5834\u5408\u306F\u3001\u3053\u306E\u95A2\u6570\u304C\u751F\u6210\u3055\u308C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `flushFrameBuffer(Rect& rect)`), `\u306E\u5185\u90E8\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF08\u3053\u306E\u8A18\u4E8B\u306E\u524D\u534A\u90E8\u3092\u53C2\u7167\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066Custom\u307E\u305F\u306FFMC\u3092\u9078\u629E\u3059\u308B\u5834\u5408\u3001TouchGFX Engine\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\u306E\u4FE1\u53F7\u3092\u751F\u6210\u3059\u308B\u30AB\u30B9\u30BF\u30E0\u306ETouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30A3\u30C3\u30AF\uFF65\u30C9\u30E9\u30A4\u30D0\u306E\u5B9F\u88C5\u3082\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u901A\u5E38\u3001TFT\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u642D\u8F09\u3057\u3066\u3044\u306A\u3044\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u3068\u3082\u306B\u4F7F\u7528\u3055\u308C\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u63A5\u7D9A\u3055\u308C\u308B\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u52B9\u679C\u4FE1\u53F7\u3092\u51FA\u529B\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);