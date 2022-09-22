"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5986],{

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

/***/ 87542:
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
  id: "running-without-rtos",
  title: "TouchGFX Board Setup\u3067RTOS\u3092\u4F7F\u7528\u305B\u305A\u306B\u5B9F\u884C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/running-without-rtos",
  "id": "development/scenarios/running-without-rtos",
  "title": "TouchGFX Board Setup\u3067RTOS\u3092\u4F7F\u7528\u305B\u305A\u306B\u5B9F\u884C",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/running-without-rtos",
  "permalink": "/4.20/ja/docs/development/scenarios/running-without-rtos",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "running-without-rtos",
    "title": "TouchGFX Board Setup\u3067RTOS\u3092\u4F7F\u7528\u305B\u305A\u306B\u5B9F\u884C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C8\u30EA\u30AC\u3068\u3057\u3066\u306E\u5916\u90E8\u30A4\u30D9\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/development/scenarios/example-gpio"
  },
  "next": {
    "title": "STM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u8FFD\u52A0",
    "permalink": "/4.20/ja/docs/development/scenarios/adding-files-to-stm32cubemx-projet"
  }
};
const assets = {};

const toc = [{
  value: "TouchGFX Board Setup\u304B\u3089\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB",
  id: "starting-a-project-from-a-touchgfx-board-setup",
  level: 2
}, {
  value: "\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306E\u70B9\u706F",
  id: "turning-on-the-backlight",
  level: 3
}, {
  value: "\u30B3\u30FC\u30C9\u306E\u6D88\u53BB",
  id: "cleaning-the-code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX Designer\u3067\u4F7F\u7528\u3067\u304D\u308BST\u30DE\u30A4\u30AF\u30ED\u30A8\u30EC\u30AF\u30C8\u30ED\u30CB\u30AF\u30B9\uFF08NYSE\uFF1ASTM\u3001\u4EE5\u4E0BST\uFF09\u306E\u3044\u305A\u308C\u304B\u306E\u958B\u767A\u30AD\u30C3\u30C8\u5411\u3051\u306ETouchGFX Board Setup\u306B\u57FA\u3065\u3044\u3066\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u305B\u305A\u306BTouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u8A18\u4E8B\u306F\u3001STM32CubeMX\u3084STM32CubeIDE\u304B\u3089\u958B\u59CB\u3057\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "starting-a-project-from-a-touchgfx-board-setup"
  }), `TouchGFX Board Setup\u304B\u3089\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u5229\u7528\u3067\u304D\u308B\u307B\u3068\u3093\u3069\u306ETouchGFX Board Setup\u3067\u306F\u3001FreeRTOS\u3068\u3044\u3046OS\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u305B\u305A\u306B\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u3044\u304F\u3064\u304B\u306E\u624B\u9806\u306B\u5F93\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001STM32H7B3-DK\u30DC\u30FC\u30C9\u5411\u3051\u306ETouchGFX Board Setup\u3092\u4F8B\u3068\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `STM32H7B3-DK\u30DC\u30FC\u30C9\u5411\u3051TouchGFX Board Setup\u3092\u4F7F\u7528\u3057\u3066TouchGFX Designer\u304B\u3089\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), `\u30D5\u30A1\u30A4\u30EB\u3092STM32CubeMX\u3067\u958B\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `STM32CubeMX\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u3001Middleware -> FreeRTOS\u8A2D\u5B9A\u306B\u79FB\u52D5\u3057\u3001FreeRTOS\u3092\u7121\u52B9\u5316\u3057\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",
    mdxType: "Figure"
  }, "STM32H7B3-DK\u5411\u3051STM32CubeMX\u3067\u306EFreeRTOS\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "turning-on-the-backlight"
  }), `\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306E\u70B9\u706F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306ETouchGFX Board Setup\u3067\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306F\u3082\u3068\u3082\u3068\u30AA\u30D5\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30DC\u30FC\u30C9\u3092\u521D\u3081\u3066\u8D77\u52D5\u3057\u305F\u77AC\u9593\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4E0D\u5177\u5408\u304C\u8D77\u3053\u308B\u306E\u3092\u9632\u3050\u305F\u3081\u3067\u3059\u3002 \u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306F\u3001\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), `\u30D5\u30A9\u30EB\u30C0\u5185\u306E\uFF09`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `\u306B\u8A18\u8F09\u3055\u308C\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), `\u95A2\u6570\u306B\u3042\u308B\u6700\u521D\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u6E96\u5099\u304C\u6574\u3046\u3068\u30AA\u30F3\u306B\u306A\u308A\u307E\u3059\u3002 OS\u3092\u4F7F\u7528\u305B\u305A\u306B\u5B9F\u884C\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), `\u95A2\u6570\u306F\u4E00\u5EA6\u3082\u547C\u3073\u51FA\u3055\u308C\u306A\u3044\u305F\u3081\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u6B63\u3057\u304F\u66F4\u65B0\u3055\u308C\u3066\u3044\u308B\u9593\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u6C7A\u3057\u3066\u30AA\u30F3\u306B\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u308C\u3092\u89E3\u6C7A\u3059\u308B\u305F\u3081\u3001LTDC_HSYNC\u30D4\u30F3\u3068VSYNC\u30D4\u30F3\u3092HIGH\u306B\u8A2D\u5B9A\u3057\u3066\u3001\u8D77\u52D5\u6642\u306E\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u3092\u30AA\u30F3\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `System Core -> GPIO\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u3042\u308BGPIO\u8A2D\u5B9A\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306B\u30EA\u30F3\u30AF\u3055\u308C\u305FPIN\u3092\u63A2\u3057\u3001GPIO\u51FA\u529B\u30EC\u30D9\u30EB\u3092HIGH\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002 STM32H7B3-DK\u30DC\u30FC\u30C9\u306E\u5834\u5408\u3001\u3053\u306E\u30D4\u30F3\u306FPA1\uFF08\u30E6\u30FC\u30B6\uFF65\u30E9\u30D9\u30EB: LCD_BL_CTRL\uFF09\u3068PA2\uFF08\u30E6\u30FC\u30B6\uFF65\u30E9\u30D9\u30EB: LCD_ON/OFF\uFF09\u3068\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/set-pins-high-417.png",
    mdxType: "Figure"
  }, "STM32H7B3-DK\u5411\u3051\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306E\u70B9\u706F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 5
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeMX\u304B\u3089\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u3001\u305D\u306E\u5F8C\u3001TouchGFX Designer\u304B\u3089\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cleaning-the-code"
  }), `\u30B3\u30FC\u30C9\u306E\u6D88\u53BB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u304A\u3088\u3073TouchGFX Generator\u306F\u3001RTOS\u95A2\u6570\u304C\u300CUSER CODE\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u3042\u308B\u5834\u5408\u3001\u3053\u306E\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057\u3092\u89E3\u9664\u3067\u304D\u307E\u305B\u3093\u3002 \u305D\u306E\u305F\u3081\u3001\u30B3\u30FC\u30C9\u3092\u624B\u52D5\u3067\u6D88\u53BB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 STM32H7B3-DK TBS\u306E\u5834\u5408\u306E\u307F\u3001\u30BF\u30C3\u30C1\u30FB\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 6
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), `\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32TouchController.cpp`), `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u307E\u3059\u3002 if\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u5185\u306B\u3042\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#include <cmsis_os.h>`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `configASSERT(0)`), `\u3092\u624B\u52D5\u3067\u524A\u9664\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/src`), `\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Freertos.c`), `\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u304B\u3089\u30DC\u30FC\u30C9\u4E0A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001OS\u306B\u95A2\u9023\u3059\u308B\u4F9D\u5B58\u95A2\u4FC2\u3068\u30D1\u30B9\u3092\u524A\u9664\u307E\u305F\u306F\u30B3\u30E1\u30F3\u30C8\u30A2\u30A6\u30C8\u3057\u3066\u3001\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc`), `\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B\uFF09 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Makefile`), `\u3092\u6D88\u53BB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u307E\u305F\u3001\u4F7F\u7528\u3057\u3066\u3044\u308B\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3/IDE\u306E\u305D\u306E\u4ED6\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u3042\u308B\u3059\u3079\u3066\u306EOS\u306B\u95A2\u9023\u3059\u308B\u4F9D\u5B58\u95A2\u4FC2\u3068\u30D1\u30B9\u3092\u6D88\u53BB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001TouchGFX Board Setup\u304B\u3089\u958B\u59CB\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4E0A\u3067OS\u3092\u4F7F\u7528\u305B\u305A\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);