"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2606],{

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

/***/ 15721:
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
  title: "\u5728\u65E0RTOS\u7684\u60C5\u51B5\u4E0B\u57FA\u4E8ETouchGFX\u786C\u4EF6\u6A21\u677F\u4E0A\u8FD0\u884C\u9879\u76EE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/running-without-rtos",
  "id": "development/scenarios/running-without-rtos",
  "title": "\u5728\u65E0RTOS\u7684\u60C5\u51B5\u4E0B\u57FA\u4E8ETouchGFX\u786C\u4EF6\u6A21\u677F\u4E0A\u8FD0\u884C\u9879\u76EE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/running-without-rtos",
  "permalink": "/4.20/zh-CN/docs/development/scenarios/running-without-rtos",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "running-without-rtos",
    "title": "\u5728\u65E0RTOS\u7684\u60C5\u51B5\u4E0B\u57FA\u4E8ETouchGFX\u786C\u4EF6\u6A21\u677F\u4E0A\u8FD0\u884C\u9879\u76EE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5916\u90E8\u4E8B\u4EF6\u4F5C\u4E3A\u89E6\u53D1\u5668",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/example-gpio"
  },
  "next": {
    "title": "\u5411STM32CubeMX\u5DE5\u7A0B\u4E2D\u6DFB\u52A0\u6587\u4EF6",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/adding-files-to-stm32cubemx-projet"
  }
};
const assets = {};

const toc = [{
  value: "\u4ECETouchGFX\u786C\u4EF6\u6A21\u677F\u542F\u52A8\u4E00\u4E2A\u9879\u76EE",
  id: "starting-a-project-from-a-touchgfx-board-setup",
  level: 2
}, {
  value: "\u6253\u5F00\u80CC\u5149",
  id: "turning-on-the-backlight",
  level: 3
}, {
  value: "\u6E05\u9664\u4EE3\u7801",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u8282\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u5982\u4F55\u57FA\u4E8ETouchGFX\u786C\u4EF6\u6A21\u677F\uFF08TouchGFX Desginer\u4E2D\u5DF2\u6709\u7684ST\u5F00\u53D1\u5957\u4EF6\u4E4B\u4E00\uFF09\uFF0C\u5728\u6CA1\u6709\u64CD\u4F5C\u7CFB\u7EDF\u7684\u60C5\u51B5\u4E0B\u8FD0\u884CTouchGFX\u9879\u76EE\u3002 \u672C\u6587\u4E0D\u9488\u5BF9\u4ECESTM32CubeMX\u6216STM32CubeIDE\u5F00\u59CB\u7684\u5B9A\u5236\u9879\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "starting-a-project-from-a-touchgfx-board-setup"
  }), `\u4ECETouchGFX\u786C\u4EF6\u6A21\u677F\u542F\u52A8\u4E00\u4E2A\u9879\u76EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u63D0\u4F9B\u7684\u5927\u591A\u6570TouchGFX\u786C\u4EF6\u6A21\u677F\u4E2D\uFF0COS FreeRTOS\u9ED8\u8BA4\u662F\u542F\u7528\u7684\u3002 \u5982\u9700\u5728\u6CA1\u6709\u64CD\u4F5C\u7CFB\u7EDF\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\uFF0C\u5FC5\u987B\u9075\u5FAA\u51E0\u4E2A\u6B65\u9AA4\u3002 \u8FD9\u91CC\u6211\u4EEC\u5C06\u4EE5STM32H7B3-DK\u677F\u7684TouchGFX\u786C\u4EF6\u6A21\u677F\u4E3A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4ECETouchGFX Designer\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF08\u4F7F\u7528STM32H7B3-DK\u786C\u4EF6\u6A21\u677F\uFF09\u5E76\u751F\u6210\u4EE3\u7801\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u7528STM32CubeMX\u6253\u5F00\u63D0\u4F9B\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), `\u6587\u4EF6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5728STM32CubeMX\u754C\u9762\uFF0C\u5BFC\u822A\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201CMiddleware\uFF08\u4E2D\u95F4\u4EF6\uFF09`), `\u201D ->> `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FreeRTOS`), `\u8BBE\u7F6E\uFF0C\u5E76\u7981\u7528FreeRTOS`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",
    mdxType: "Figure"
  }, "STM32CubeMX\u4E2DSTM32H7B3-DK\u677F\u7684FreeRTOS\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "turning-on-the-backlight"
  }), `\u6253\u5F00\u80CC\u5149`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5927\u591A\u6570TouchGFX\u786C\u4EF6\u6A21\u677F\u4E2D\uFF0C\u663E\u793A\u5668\u7684\u80CC\u5149\u6700\u521D\u662F\u5173\u95ED\u7684\u3002 \u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u9632\u6B62\u5728\u5F00\u53D1\u677F\u542F\u52A8\u65F6\u7B2C\u4E00\u4E2Atick\u671F\u95F4\u51FA\u73B0\u6545\u969C\u663E\u793A\u3002 \u5F53\u7B2C\u4E00\u4E2A\u5E27\u7F13\u5B58\u533A\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), `\u51FD\u6570\uFF08\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), `\u6587\u4EF6\u5939\u4E0B\uFF09\u4E2D\u5C31\u7EEA\u65F6\uFF0C\u80CC\u5149\u6253\u5F00\u3002 \u5F53\u5728\u6CA1\u6709\u64CD\u4F5C\u7CFB\u7EDF\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\u65F6\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), `\u51FD\u6570\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u8C03\u7528\uFF0C\u610F\u5473\u7740\u5728\u5E27\u7F13\u5B58\u533A\u4ECD\u7136\u6B63\u786E\u66F4\u65B0\u65F6\uFF0C\u663E\u793A\u5668\u6C38\u8FDC\u4E0D\u4F1A\u6253\u5F00\u3002 \u89E3\u51B3\u65B9\u6848\u662F\u5728\u542F\u52A8\u65F6\u6253\u5F00\u80CC\u5149\uFF0C\u65B9\u6CD5\u662F\u5C06LTDC_HSYNC\u548CVSYNC\u5F15\u811A\u8BBE\u7F6E\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `HIGH`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5BFC\u822A\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u7CFB\u7EDF\u6838\u5FC3`), `\u4E2D>\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `GPIO\u8BBE\u7F6E -> GPIO`), `\u90E8\u5206\u3002 \u67E5\u627E\u8FDE\u63A5\u5230\u663E\u793A\u5668\u80CC\u5149\u7684\u5F15\u811A\uFF0C\u5E76\u5C06GPIO\u8F93\u51FA\u7535\u5E73\u8BBE\u7F6E\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `HIGH`), `\u3002 \u4E0ESTM32H7B3-DK\u5F00\u53D1\u677F\u5BF9\u5E94\u7684\u5F15\u811A\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PA1\uFF08`), `\u7528\u6237\u6807\u7B7E\uFF1ALCD_BL_CTRL\uFF09\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PA2`), `\uFF08\u7528\u6237\u6807\u7B7E\uFF1ALCD_ON/OFF\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/set-pins-high-417.png",
    mdxType: "Figure"
  }, "STM32H7B3-DK\u5F00\u53D1\u677F\u6253\u5F00\u80CC\u5149"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 5
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4ECESTM32CubeMX\u751F\u6210\u4EE3\u7801\uFF0C\u7136\u540E\u4ECETouchGFX Designer\u751F\u6210\u4EE3\u7801\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cleaning-the-code"
  }), `\u6E05\u9664\u4EE3\u7801`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u548CTouchGFX Generator\u4E0D\u80FD\u6E05\u9664\u5BF9RTOS\u51FD\u6570\u7684\u6F5C\u5728\u8C03\u7528\uFF0C\u5982\u679C\u5B83\u4EEC\u4F4D\u4E8E\u201C\u7528\u6237\u4EE3\u7801\u201D\u4E4B\u4E0B\u3002 \u4E8E\u662F\uFF0C\u6709\u5FC5\u8981\u624B\u52A8\u6E05\u9664\u4EE3\u7801\u3002 \u5BF9\u4E8ESTM32H7B3-DK TBS\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u89E6\u6478\u63A7\u5236\u5668\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 6
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6253\u5F00\u5728\u9879\u76EE\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), `\u6587\u4EF6\u5939\u4E0B\u627E\u5230\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32TouchController.cpp`), `\u6587\u4EF6\u3002 \u624B\u52A8\u5220\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#include <cmsis_os.h>`), `<cmsis_os.h>\u548Cif-\u8BED\u53E5\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `configASSERT(0)`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5220\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/src`), `\u6587\u4EF6\u5939\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Freertos.c`), `\u6587\u4EF6\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4ECETouchGFX Designer\u70E7\u5F55\u56FA\u4EF6\u5230\u60A8\u7684\u5F00\u53D1\u677F\u4E0A\uFF0C\u9700\u8981\u901A\u8FC7\u5220\u9664\u6216\u6CE8\u91CA\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u4F9D\u8D56\u9879\u548C\u8DEF\u5F84\u6765\u6E05\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Makefile`), `\uFF08\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc`), `\u6587\u4EF6\u5939\u4E0B\uFF09\u3002 \u8FD8\u9700\u8981\u4E3A\u4F7F\u7528\u7684\u5DE5\u5177\u94FE/IDE\u6E05\u9664\u4E0D\u540C\u9879\u76EE\u4E2D\u6240\u6709\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u4F9D\u8D56\u9879\u548C\u8DEF\u5F84\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u53EF\u4EE5\u5728\u6CA1\u6709\u64CD\u4F5C\u7CFB\u7EDF\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\u4ECETouchGFX\u786C\u4EF6\u6A21\u677F\u542F\u52A8\u7684\u9879\u76EE\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);