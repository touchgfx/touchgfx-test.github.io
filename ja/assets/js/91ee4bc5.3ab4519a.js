"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3815],{

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

/***/ 67381:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70814);
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
  id: "scenarios-ltdc-parallel-rgb",
  title: "LTDC / \u30D1\u30E9\u30EC\u30EBRGB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "title": "LTDC / \u30D1\u30E9\u30EC\u30EBRGB",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-ltdc-parallel-rgb",
    "title": "LTDC / \u30D1\u30E9\u30EC\u30EBRGB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/ja/docs/category/scenarios"
  },
  "next": {
    "title": "FMC & SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"
  }
};
const assets = {};



const toc = [{
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "display-interface",
  level: 3
}, {
  value: "STM32CubeMX\u304B\u3089\u306E\u8A2D\u5B9A\u306E\u8AAD\u51FA\u3057",
  id: "reading-settings-from-stm32cubemx",
  level: 2
}, {
  value: "TouchGFX\u30C9\u30E9\u30A4\u30D0 / VSYNC\u4FE1\u53F7",
  id: "touchgfx-driver--vsync-signal",
  level: 2
}, {
  value: "LTDC\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A2D\u5B9A",
  id: "ltdc-frame-buffer-configuration",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u5099\u3048\u305F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9(STM32F429\u3001STM32F746\u3001STM32H7\u306A\u3069)\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30D4\u30AF\u30BB\u30EB\u3092\u8EE2\u9001\u3059\u308B\u3088\u3046\u306BLTDC\u3092\u8A2D\u5B9A\u3059\u308BHAL\u306E\u4E00\u90E8\u5206\u3092 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\u306B\u3088\u3063\u3066\u751F\u6210\u3067\u304D\u307E\u3059\u3002 LTDC\u306B\u3088\u3063\u3066VSYNC\u5272\u8FBC\u307F\u304C\u751F\u6210\u3055\u308C\u308B\u3068\u3001\u3053\u306E\u30B3\u30FC\u30C9\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\u3092\u547C\u3073\u51FA\u3057\u3001\u9069\u5207\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u3092\u958B\u59CB\u3059\u308B\u3068\u3068\u3082\u306B\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-interface"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u8005\u304C\u30C9\u30E9\u30A4\u30D0\u5168\u4F53\u3092\u624B\u52D5\u3067\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\uFF3BCustom\uFF3D\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u306F\u7570\u306A\u308A\u3001LTDC\u306E\u5834\u5408\u306F\u3001TouchGFX HAL\u304CLTDC\u306E\u8A2D\u5B9A\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u3092\u3001TouchGFX Generator\u304C\u3059\u3079\u3066\u751F\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3067\uFF3BParallel RGB (LTDC)\uFF3D\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u306B\u306F\u3001STM32CubeMX\u30AB\u30C6\u30B4\u30EA\uFF65\u30EA\u30B9\u30C8\u306EMultimedia\u30B0\u30EB\u30FC\u30D7\u3067\u3001LTDC\u3092\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001TouchGFX Generator\u306EDisplay\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3001 Parallel RGB (LTDC)\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067LTDC\u3092\u6709\u52B9\u5316\u3057\u3066\u3082\u3001\u4EE5\u4E0B\u3092\u884C\u3046\u306B\u306F\u3044\u304F\u3064\u304B\u306E\u4F5C\u696D\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u63A5\u7D9A\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4ED5\u69D8\u306B\u5408\u308F\u305B\u305FLTDC\u306E\u8A2D\u5B9A(GPIO\u3068\u30BF\u30A4\u30DF\u30F3\u30B0)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u76EE\u7684\u3068\u3059\u308BTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4ED5\u69D8\u306B\u5408\u308F\u305B\u305FLTDC\u306E\u8A2D\u5B9A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u306F\u3001STM32CubeMX\u304B\u3089\u5404\u7A2E\u8A2D\u5B9A\u3092\u8AAD\u307F\u51FA\u3057\u3001\u4F9D\u5B58\u95A2\u4FC2\u3068\u547C\u3070\u308C\u308B\u3001\u8B66\u544A\u3001\u63A8\u5968\u4E8B\u9805\u3001\u307E\u305F\u306F\u30A8\u30E9\u30FC\u306E\u30EA\u30B9\u30C8\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4E0B\u56F3\u306F\u3001CubeMX\u3067\u3001\u4EFB\u610F\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9(\u3053\u306E\u4F8B\u3067\u306FSTM32F429) \u306B\u3064\u3044\u3066\u3001LTDC\u3092\u6700\u521D\u306B\u6709\u52B9\u5316\u3057\u305F\u3068\u304D\u306B\u8868\u793A\u3055\u308C\u308B\u4F9D\u5B58\u95A2\u4FC2\u306E\u30EA\u30B9\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "STM32CubeMX\u3067LTDC\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3059\u3050\u306B\u3001TouchGFX Generator\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u3001LTDC\u306B\u95A2\u3059\u308B\u63A8\u5968\u4E8B\u9805\u3001\u8B66\u544A\u3001\u304A\u3088\u3073\u30A8\u30E9\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F9D\u5B58\u95A2\u4FC2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `\u30EC\u30A4\u30E4\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u306B\u306F\u3001\u5358\u4E00\u30EC\u30A4\u30E4\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002 TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30012\u3064\u306E\u30EC\u30A4\u30E4\u3092\u6709\u52B9\u5316\u3057\u3066\u3082\u52D5\u4F5C\u3057\u307E\u3059\u304C\u3001\u3053\u306E\u8B66\u544A\u306FLTDC\u306E\u8A2D\u5B9A\u30DF\u30B9\u306E\u53EF\u80FD\u6027\u3092\u6307\u6458\u3057\u3066\u3044\u307E\u3059\u3002 LTDC\u30D6\u30ED\u30C3\u30AF\u3067\u30EC\u30A4\u30E4\u6570\u3092\u5909\u66F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30F3\u30C9\u30A6\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001LTDC\u30EC\u30A4\u30E4\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u6C34\u5E73\u4F4D\u7F6E\u304A\u3088\u3073\u5782\u76F4\u4F4D\u7F6E\u306F0\u3067\u3059\u3002 \u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u6C34\u5E73\u505C\u6B62\u4F4D\u7F6E\u3068\u5782\u76F4\u505C\u6B62\u4F4D\u7F6E\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5BF8\u6CD5\u3068\u540C\u3058\u306B\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A2\u30EB\u30D5\u30A1\u5B9A\u6570\u306F0\u3067\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001LTDC\u30EC\u30A4\u30E4\u306E\u30A2\u30EB\u30D5\u30A1\u5B9A\u6570\u306F0\u3067\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30B0\u30ED\u30FC\u30D0\u30EB\uFF65\u30A2\u30EB\u30D5\u30A1\u3092\u5E38\u6642\u4F7F\u7528\u3057\u306A\u3044\u304B\u304E\u308A\u3001\u3053\u306E\u5024\u306F0\u3088\u308A\u5927\u304D\u304F\u3001\u53EF\u80FD\u306A\u3089\u3070255\u3068\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BMultimedia\uFF3D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067LTDC\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u6709\u52B9\u5316\u3057\u305F\u5F8C\u306B\u3001\u5B9F\u969B\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066\uFF3BParallel RGB (LTDC)\uFF3D\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u56F3\u306F\u3001\u8B66\u544A\u3092\u89E3\u6D88\u3059\u308B\u3088\u3046\u306BLTDC\u3092\u8A2D\u5B9A\u3057\u3001TouchGFX Generator\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\uFF3BDependencies\uFF3D\u30B0\u30EB\u30FC\u30D7\u304C\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u3063\u305F\u72B6\u614B\u3092\u793A\u3057\u3066\u3044\u307E\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "reading-settings-from-stm32cubemx"
  }), `STM32CubeMX\u304B\u3089\u306E\u8A2D\u5B9A\u306E\u8AAD\u51FA\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Parallel RGB (LTDC)`), ` \u3092\u9078\u629E\u3059\u308B\u3068\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5E45`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9AD8\u3055`), `\u304C\u3001LTDC\u8A2D\u5B9A\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6C34\u5E73\u958B\u59CB / \u505C\u6B62\u4F4D\u7F6E`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5782\u76F4\u958B\u59CB / \u505C\u6B62\u4F4D\u7F6E`), `\u304B\u3089\u7D99\u627F\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5BF8\u6CD5\u306B\u5FDC\u3058\u3066\u30EC\u30A4\u30E4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `0`), `\u306E\u5BF8\u6CD5\u3092\u5B9A\u7FA9\u3059\u308B\u3068\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Dependency`), ` \u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u65B0\u3057\u3044\u30A8\u30F3\u30C8\u30EA\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u753B\u50CF\u306E\u5E45`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u753B\u50CF\u306E\u9AD8\u3055`), `\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u306B\u4E00\u81F4\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002\u901A\u5E38\u306F\u3001\u3053\u308C\u3089\u3092\u4E00\u81F4\u3055\u305B\u308B\u3053\u3068\u304C\u671B\u307E\u3057\u304F\u3001\u305D\u308C\u306B\u3088\u3063\u3066\u8B66\u544A\u306F\u89E3\u6D88\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "TouchGFX Generator\u306F\u3001LTDC\u304C\u6709\u52B9\u306A\u5834\u5408\u3001LTDC\u8A2D\u5B9A\u306E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u5E45"), "\u3068", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u9AD8\u3055"), "\u306E\u5024\u3092\u7D99\u627F\u3057\u307E\u3059\u3002 \u305F\u3060\u3057\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u5E45"), "\u3068", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u9AD8\u3055"), "\u306F\u3001TouchGFX Generator\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u3092\u30A6\u30A3\u30F3\u30C9\u30A6\u306ELTDC\u30EC\u30A4\u30E4\u8A2D\u5B9A\u3068\u7570\u306A\u308B\u5024\u306B\u5909\u66F4\u3059\u308B\u3068\u3001\u8A2D\u5B9A\u306E\u4E0D\u4E00\u81F4\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--vsync-signal"
  }), `TouchGFX\u30C9\u30E9\u30A4\u30D0 / VSYNC\u4FE1\u53F7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Parallel RGB (LTDC)`), `\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u958B\u767A\u8005\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30A3\u30C3\u30AF\uFF65\u30C9\u30E9\u30A4\u30D0\u307E\u305F\u306FTouchGFX\u30C9\u30E9\u30A4\u30D0\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.png",
    width: "500",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u3001LTDC\u306E\u8A2D\u5B9A\u306B\u5F93\u3063\u3066\u751F\u6210\u3055\u308C\u308BLTDC\u5272\u8FBC\u307F\u3092\u51E6\u7406\u3059\u308B\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9(STM32F7) \u3067\u3059\u3002 \u751F\u6210\u3055\u308C\u308B\u30CF\u30F3\u30C9\u30E9\u306F\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u81EA\u52D5\u7684\u306B\u89E3\u9664\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `extern "C"
irq void LTDC_IRQHandler(void)
{
    if (LTDC->ISR & 1)
    {
        LTDC->ICR = 1;
        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)
        {
            //entering active area
            OSWrappers::signalVSync();
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "LTDC\u30C9\u30E9\u30A4\u30D0\u3092\u6A5F\u80FD\u3055\u305B\u308B\u306B\u306F\u3001LTDC NVIC\u8A2D\u5B9A\u307E\u305F\u306F\u30B0\u30ED\u30FC\u30D0\u30EBNVIC\u8A2D\u5B9A\u3067\u3001LTDC\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u5272\u8FBC\u307F\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3068\u3082\u306B\u3001\u30CF\u30F3\u30C9\u30E9\uFF65\u30B3\u30FC\u30C9\u306E\u751F\u6210\u3082\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ltdc-frame-buffer-configuration"
  }), `LTDC\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u751F\u6210\u3055\u308C\u305FTouchGFX HAL\u304C\u5B9F\u884C\u6642\u306BLTDC\u306E\u30EC\u30A4\u30E4\uFF65\u30AB\u30E9\u30FC\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u958B\u59CB\u30A2\u30C9\u30EC\u30B9\u3092\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3059\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\u304CLTDC\u8A2D\u5B9A\u3067\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7D50\u8AD6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066Parallel RGB (LTDC)\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u5FC5\u8981\u306AHAL\u30B3\u30FC\u30C9\u304C\u3059\u3079\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u306ELTDC\u8A2D\u5B9A\u306B\u5F93\u3044\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5E45\u3001\u9AD8\u3055\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 LTDC\u30EC\u30A4\u30E4\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5E45`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u9AD8\u3055`), `\u306F\u3001TouchGFX Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30B5\u30A4\u30BA\u306B\u3001LTDC\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u5FC5\u8981\u306ATouchGFX\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30C9\u30E9\u30A4\u30D0\u304A\u3088\u3073\u751F\u6210\u3055\u308C\u308B\u30A2\u30BB\u30C3\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30A3\u30C3\u30AF\uFF65\u30BD\u30FC\u30B9\u306BLTDC\u3092\u9078\u629E\u3067\u304D\u3001\u3053\u308C\u306B\u3088\u308ATouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u99C6\u52D5\u3059\u308B\u30CF\u30F3\u30C9\u30E9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 LTDC\u8A2D\u5B9A\u306E\u5834\u5408\u3001\u901A\u5E38\u3001\u958B\u767A\u8005\u306F\u5E38\u306B\u63D0\u4F9B\u3055\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30A3\u30C3\u30AF\uFF65\u30C9\u30E9\u30A4\u30D0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);