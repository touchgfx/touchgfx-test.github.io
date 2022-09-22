"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9456],{

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

/***/ 38637:
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
  title: "\u5728STM32G071 Nucleo\u4E0A\u904B\u884C\u7684\u7BC4\u4F8B\u61C9\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/running-without-rtos",
  "id": "development/scenarios/running-without-rtos",
  "title": "\u5728STM32G071 Nucleo\u4E0A\u904B\u884C\u7684\u7BC4\u4F8B\u61C9\u7528",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/running-without-rtos",
  "permalink": "/4.20/zh-TW/docs/development/scenarios/running-without-rtos",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "running-without-rtos",
    "title": "\u5728STM32G071 Nucleo\u4E0A\u904B\u884C\u7684\u7BC4\u4F8B\u61C9\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5916\u90E8\u4E8B\u4EF6\u4F5C\u70BA\u89F8\u767C\u5668",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/example-gpio"
  },
  "next": {
    "title": "\u5728STM32CubeMX\u5C08\u6848\u4E2D\u6DFB\u52A0\u6A94",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/adding-files-to-stm32cubemx-projet"
  }
};
const assets = {};

const toc = [{
  value: "\u5F9ETouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u958B\u555F\u4E00\u500B\u5C08\u6848",
  id: "starting-a-project-from-a-touchgfx-board-setup",
  level: 2
}, {
  value: "\u6253\u958B\u80CC\u5149",
  id: "turning-on-the-backlight",
  level: 3
}, {
  value: "\u6E05\u9664\u7A0B\u5F0F\u78BC",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u7BC0\uFF0C\u6211\u5011\u5C07\u8A0E\u8AD6\u5982\u4F55\u57FA\u65BCTouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF08TouchGFX Designer\u4E2D\u63D0\u4F9B\u7684ST\u958B\u767C\u5957\u4EF6\u4E4B\u4E00\uFF09\uFF0C\u5728\u6C92\u6709\u4F5C\u696D\u7CFB\u7D71\u7684\u60C5\u6CC1\u4E0B\u904B\u884CTouchGFX\u5C08\u6848\u3002 \u672C\u6587\u4E0D\u91DD\u5C0D\u5F9ESTM32CubeMX\u6216STM32CubeIDE\u958B\u59CB\u7684\u5BA2\u88FD\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "starting-a-project-from-a-touchgfx-board-setup"
  }), `\u5F9ETouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u958B\u555F\u4E00\u500B\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u63D0\u4F9B\u7684\u5927\u591A\u6578TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u4E2D\uFF0COS FreeRTOS\u9ED8\u8A8D\u662F\u555F\u7528\u7684\u3002 \u5982\u9700\u5728\u6C92\u6709\u4F5C\u696D\u7CFB\u7D71\u7684\u60C5\u6CC1\u4E0B\u904B\u884C\uFF0C\u5FC5\u9808\u9075\u5FAA\u5E7E\u500B\u6B65\u9A5F\u3002 \u9019\u88E1\u6211\u5011\u5C07\u4EE5STM32H7B3-DK\u677F\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u70BA\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F9ETouchGFX Designer\u5275\u5EFA\u4E00\u500B\u5C08\u6848\uFF08\u63A1\u7528STM32H7B3-DK\u677F\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF09\u4E26\u751F\u6210\u7A0B\u5F0F\u78BC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u7528STM32CubeMX\u6253\u958B\u63D0\u4F9B\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), `\u6587\u4EF6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5728STM32CubeMX\u4ECB\u9762\uFF0C\u5C0E\u822A\u5230\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Middleware\uFF08\u4E2D\u4ECB\u8EDF\u9AD4\uFF09`), `\u201D ->`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FreeRTOS`), `\u8A2D\u7F6E\uFF0C\u4E26\u7981\u7528FreeRTOS`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",
    mdxType: "Figure"
  }, "STM32CubeMX\u4E2DSTM32H7B3-DK\u7684FreeRTOS\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "turning-on-the-backlight"
  }), `\u6253\u958B\u80CC\u5149`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5927\u591A\u6578TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u4E2D\uFF0C\u986F\u793A\u5668\u7684\u80CC\u5149\u6700\u521D\u662F\u95DC\u9589\u7684\u3002 \u9019\u6A23\u505A\u662F\u70BA\u4E86\u9632\u6B62\u5728\u7B2C\u4E00\u500Btick\u671F\u9593\u555F\u52D5\u958B\u767C\u677F\u6642\u51FA\u73FE\u6545\u969C\u986F\u793A\u3002 \u7576\u7B2C\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), `\u51FD\u6578\uFF08\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), `\u8CC7\u6599\u593E\u4E0B\uFF09\u4E2D\u5C31\u7DD2\u6642\uFF0C\u80CC\u5149\u6253\u958B\u3002 \u7576\u5728\u6C92\u6709\u4F5C\u696D\u7CFB\u7D71\u7684\u60C5\u6CC1\u4E0B\u904B\u884C\u6642\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), `\u51FD\u6578\u6C38\u9060\u4E0D\u6703\u88AB\u547C\u53EB\uFF0C\u610F\u5473\u8457\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4ECD\u7136\u6B63\u78BA\u66F4\u65B0\u6642\uFF0C\u986F\u793A\u5668\u6C38\u9060\u4E0D\u6703\u6253\u958B\u3002 \u89E3\u6C7A\u65B9\u6848\u662F\u5728\u555F\u52D5\u6642\u6253\u958B\u80CC\u5149\uFF0C\u65B9\u6CD5\u662F\u5C07LTDC_HSYNC\u548CVSYNC\u5F15\u8173\u8A2D\u7F6E\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `HIGH`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C0E\u822A\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `System Core`), `\u4E2D\u7684GPIO\u8A2D\u7F6E ->`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `GPIO`), `\u90E8\u5206\u3002 \u67E5\u627E\u9023\u63A5\u5230\u986F\u793A\u5668\u80CC\u5149\u7684\u5F15\u8173\uFF0C\u4E26\u5C07GPIO\u8F38\u51FA\u96FB\u5E73\u8A2D\u7F6E\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `HIGH`), `\u3002 \u8207STM32H7B3-DK\u958B\u767C\u677F\u5C0D\u61C9\u7684\u5F15\u8173\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PA1`), `\uFF08\u7528\u6236\u6A19\u7C64\uFF1ALCD_BL_CTRL\uFF09\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PA2`), `\uFF08\u7528\u6236\u6A19\u7C64\uFF1ALCD_ON/OFF\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/set-pins-high-417.png",
    mdxType: "Figure"
  }, "\u70BASTM32H7B3-DK\u800C\u6253\u958B\u80CC\u5149"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 5
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5F9ESTM32CubeMX\u751F\u6210\u7A0B\u5F0F\u78BC\uFF0C\u7136\u5F8C\u5F9ETouchGFX Designer\u751F\u6210\u7A0B\u5F0F\u78BC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cleaning-the-code"
  }), `\u6E05\u9664\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u548CTouchGFX Generator\u4E0D\u80FD\u6E05\u9664\u4F4D\u65BC\u201CUSER CODE\u201D\u4E4B\u4E0B\u5C0DRTOS\u51FD\u6578\u7684\u6F5B\u5728\u547C\u53EB\u3002 \u56E0\u6B64\u6709\u5FC5\u8981\u624B\u52D5\u6E05\u9664\u7A0B\u5F0F\u78BC\u3002 \u5C0D\u65BCSTM32H7B3-DK TBS\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u89F8\u63A7\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 6
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6253\u958B\u5728\u5C08\u6848\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), `\u8CC7\u6599\u593E\u4E0B\u627E\u5230\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32TouchController.cpp`), `\u6587\u4EF6\u3002 \u624B\u52D5\u522A\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#include <cmsis_os.h>`), `\u548Cif-\u8A9E\u53E5\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `configASSERT(0)`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u522A\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/src`), `\u8CC7\u6599\u593E\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Freertos.c`), `\u6587\u4EF6\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u5F9ETouchGFX\u8A2D\u8A08\u5668\u5C07\u5C08\u6848\u71D2\u9304\u5230\u60A8\u7684\u958B\u767C\u677F\u4E0A\uFF0C\u9700\u8981\u901A\u904E\u522A\u9664\u6216\u8A3B\u89E3\u8207\u4F5C\u696D\u7CFB\u7D71\u76F8\u95DC\u7684\u8CC7\u6E90\u548C\u8DEF\u5F91\u4F86\u6E05\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Makefile`), `\uFF08\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc`), `\u8CC7\u6599\u593E\u4E0B\uFF09\u3002 \u9084\u9700\u8981\u70BA\u4F7F\u7528\u7684\u5DE5\u5177\u93C8/IDE\u6E05\u9664\u4E0D\u540C\u5C08\u6848\u4E2D\u6240\u6709\u8207\u4F5C\u696D\u7CFB\u7D71\u76F8\u95DC\u7684\u8CC7\u6E90\u548C\u8DEF\u5F91\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u53EF\u4EE5\u5728\u6C92\u6709\u4F5C\u696D\u7CFB\u7D71\u7684\u60C5\u6CC1\u4E0B\u904B\u884CTouchGFX\u958B\u767C\u677F\u7684\u5C08\u6848\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);