"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7881],{

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

/***/ 73004:
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
  title: "LTDC/\u5E76\u884CRGB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "title": "LTDC/\u5E76\u884CRGB",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-ltdc-parallel-rgb",
    "title": "LTDC/\u5E76\u884CRGB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-CN/docs/category/scenarios"
  },
  "next": {
    "title": "FMC\u548CSPI\u663E\u793A\u63A5\u53E3",
    "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"
  }
};
const assets = {};



const toc = [{
  value: "\u663E\u793A\u63A5\u53E3",
  id: "display-interface",
  level: 3
}, {
  value: "\u8BFB\u53D6STM32CubeMX\u7684\u8BBE\u7F6E",
  id: "reading-settings-from-stm32cubemx",
  level: 2
}, {
  value: "TouchGFX\u9A71\u52A8\u7A0B\u5E8F/VSYNC\u4FE1\u53F7",
  id: "touchgfx-driver--vsync-signal",
  level: 2
}, {
  value: "LTDC Frame Buffer configuration",
  id: "ltdc-frame-buffer-configuration",
  level: 2
}, {
  value: "\u7ED3\u8BBA",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5E26\u6709TFT\u63A7\u5236\u5668\u7684MCU(\u5982STM32F429\u3001STM32F746\u3001STM32H7) \uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\u53EF\u751F\u6210\u7528\u6765\u914D\u7F6ELTDC\uFF0C\u4EE5\u53CA\u5C06\u50CF\u7D20\u4ECE\u5E27\u7F13\u5B58\u4F20\u8F93\u5230\u663E\u793A\u5668\u7684HAL\u90E8\u5206\u4EE3\u7801\u3002 \u4E00\u65E6LTDC\u89E6\u53D1VSYNC\u4E2D\u65AD\uFF0C\u751F\u6210\u7684\u4EE3\u7801\u5C06\u542F\u52A8\u6B63\u786E\u7684\u5E27\u7F13\u5B58\u4F20\u8F93\uFF0C\u5E76\u901A\u8FC7\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\u6765\u89E3\u9664TouchGFX Engine\u4E3B\u5FAA\u73AF\u963B\u585E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-interface"
  }), `\u663E\u793A\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E\u5F00\u53D1\u4EBA\u5458\u5FC5\u987B\u624B\u52A8\u5B9E\u73B0\u6574\u4E2A\u9A71\u52A8\u7A0B\u5E8F\u7684\u201C\u5B9A\u5236\u201D\u663E\u793A\u63A5\u53E3\u76F8\u53CD\uFF0C\u5BF9\u4E8ELTDC\uFF0CTouchGFX Generator\u53EF\u751F\u6210\u652F\u6301LTDC\u914D\u7F6E\u6240\u9700\u7684\u6240\u6709TouchGFX HAL\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u82E5\u8981\u901A\u8FC7TouchGFX Generator\u5C06\u201C\u5E76\u884CRGB (LTDC)\u201D\u4F5C\u4E3A\u53EF\u9009\u9879\uFF0C\u5FC5\u987B\u5728STM32CubeMX\u7C7B\u522B\u5217\u8868\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Multimedia`), `\u7EC4\u4F7F\u80FD`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6\u4F7F\u80FDLTDC\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5E76\u884CRGB (LTDC)`), ` \u9009\u9879\u5C06\u5728TouchGFX Generator\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u663E\u793A`), `\u90E8\u5206\u53D8\u5F97\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5373\u4F7F\u901A\u8FC7STM32CubeMX\u4F7F\u80FD\u4E86LTDC\uFF0C\u8FD8\u4ECD\u9700\u8981\u505A\u4E00\u4E9B\u5DE5\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u914D\u7F6ELTDC\uFF08GPIO\u4E0E\u76F8\u5173\u65F6\u5E8F\u53C2\u6570\uFF09\uFF0C\u4EE5\u4FBF\u4E0E\u8FDE\u63A5\u7684\u663E\u793A\u5668\u89C4\u683C\u76F8\u5339\u914D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u914D\u7F6ELTDC\uFF0C\u4EE5\u4FBF\u4E0E\u6240\u9700\u7684TouchGFX\u5E94\u7528\u7A0B\u5E8F\u9700\u6C42\u76F8\u5339\u914D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u53EF\u4ECESTM32CubeMX\u8BFB\u53D6\u5404\u79CD\u914D\u7F6E\uFF0C\u5E76\u63D0\u4F9B\u88AB\u79F0\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F9D\u8D56\u5173\u7CFB`), `\u7684\u8B66\u544A\u3001\u5EFA\u8BAE\u6216\u9519\u8BEF\u7684\u5217\u8868\u3002 \u4E0B\u56FE\u663E\u793A\u4E86\u6700\u521D\u5728CubeMX\u4E2D\u4E3A\u4EFB\u4F55MCU\u542F\u7528LTDC\u65F6\u5B58\u5728\u7684\u4F9D\u8D56\u5173\u7CFB\u5217\u8868\uFF08\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528F429\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u901A\u8FC7STM32CubeMX\u4F7F\u80FDLTDC\u540E\uFF0CTouchGFX Generator\u754C\u9762\u4E2D\u5C06\u7ACB\u5373\u663E\u793ALTDC\u5EFA\u8BAE\u3001\u8B66\u544A\u548C\u9519\u8BEF\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F9D\u8D56\u5173\u7CFB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C42\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u53EA\u80FD\u5229\u7528\u5355\u5C42\u3002 \u5C3D\u7BA1TouchGFX\u5E94\u7528\u7A0B\u5E8F\u53EF\u5728\u4F7F\u80FD\u4E24\u4E2A\u5C42\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\uFF0C\u4F46\u7528\u6237\u9700\u8981\u6CE8\u610F\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4LTDC\u914D\u7F6E\u9519\u8BEF\u3002 \u66F4\u6539LTDC\u5757\u4E2D\u7684\u5C42\u6570\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7A97\u53E3\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CLTDC\u5C42\u7684\u6C34\u5E73\u548C\u5782\u76F4\u7A97\u53E3\u4F4D\u7F6E\u4E3A0\u3002 \u7A97\u53E3\u7684\u6C34\u5E73\u548C\u5782\u76F4\u505C\u6B62\u4F4D\u7F6E\u5FC5\u987B\u8BBE\u7F6E\u4E3A\u4E0E\u663E\u793A\u5668\u5C3A\u5BF8\u76F8\u7B49\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Alpha\u5E38\u6570\u4E3A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CLTDC\u5C42\u7684alpha\u5E38\u6570\u4E3A0\u3002 \u9664\u975E\u59CB\u7EC8\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5177\u6709\u5168\u5C40alpha\uFF0C\u5426\u5219\u8BE5\u5E38\u6570\u5E94\u5927\u4E8E> 0\uFF0C\u6700\u597D\u4E3A255\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u591A\u5A92\u4F53\u90E8\u5206\u4F7F\u80FDLTDC\u5916\u8BBE\u540E\uFF0C\u8BB0\u4F4F\u5207\u5B9E\u9009\u62E9\u5E76\u884CRGB (LTDC) \u663E\u793A\u63A5\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56FE\u663E\u793A\u4E86\u6EE1\u8DB3\u8B66\u544A\u6761\u4EF6\u7684LTDC\u914D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u4F1A\u4F7F\u4F9D\u8D56\u5173\u7CFB\u7EC4\u4ECETouchGFX Generator\u754C\u9762\u4E2D\u6D88\u5931\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "reading-settings-from-stm32cubemx"
  }), `\u8BFB\u53D6STM32CubeMX\u7684\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7TouchGFX Generator\u5C06`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, ` \u5E76\u884CRGB (LTDC)`), `\u9009\u4F5C\u663E\u793A\u63A5\u53E3\uFF0C\u5C06\u4ECELTDC\u914D\u7F6E\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6C34\u5E73\u542F\u52A8/\u505C\u6B62`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5782\u76F4\u542F\u52A8/\u505C\u6B62`), `\u7EE7\u627F\u5E27\u7F13\u51B2\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BBD\u5EA6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9AD8\u5EA6`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u663E\u793A\u548C\u5E94\u7528\u7A0B\u5E8F\u5C3A\u5BF8\u5B9A\u4E49\u7B2C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `0`), `\u5C42\u7684\u5C3A\u5BF8\u540E\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F9D\u8D56\u5173\u7CFB`), `\u7A97\u53E3\u4E2D\u5C06\u663E\u793A\u4E00\u4E2A\u65B0\u6761\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u9700\u8981\u786E\u4FDD\u5E27\u7F13\u5B58`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u56FE\u50CF\u5BBD\u5EA6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u56FE\u50CF\u9AD8\u5EA6`), `\u4E0E\u7A97\u53E3\u5C3A\u5BF8\u5339\u914D\uFF0C\u4EE5\u6EE1\u8DB3\u8B66\u793A\u8981\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u5982\u679C\u4F7F\u80FDLTDC\u914D\u7F6E\uFF0CTouchGFX Generator\u5C06\u4ECELTDC\u914D\u7F6E\u7EE7\u627F", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u5BBD\u5EA6"), "\u548C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u9AD8\u5EA6"), "\u503C\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4ECD\u53EF\u4EE5\u4ECETouchGFX Generator\u754C\u9762\u4FEE\u6539", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u5BBD\u5EA6"), "\u548C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u9AD8\u5EA6"), "\u3002 \u5982\u679C\u672A\u9075\u5FAALTDC\u7A97\u53E3\u5C42\u914D\u7F6E\uFF0C\u66F4\u6539\u8FD9\u4E9B\u503C\u53EF\u80FD\u5BFC\u81F4\u914D\u7F6E\u4E0D\u5339\u914D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--vsync-signal"
  }), `TouchGFX\u9A71\u52A8\u7A0B\u5E8F/VSYNC\u4FE1\u53F7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5E76\u884CRGB (LTDC)`), `\u88AB\u9009\u4F5C\u663E\u793A\u63A5\u53E3\uFF0C\u5F00\u53D1\u4EBA\u5458\u5C31\u53EF\u4EE5\u8BBF\u95EE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\u5E94\u7528\u6EF4\u7B54\u8BA1\u65F6\u9A71\u52A8\u7A0B\u5E8F\u6216TouchGFX\u9A71\u52A8\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.png",
    width: "500",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u4EE3\u7801\u662F\u6839\u636ELTDC\u914D\u7F6E\u800C\u751F\u6210\u7684LTDC\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\uFF08STM32F7\uFF09\u3002 \u751F\u6210\u7684\u5904\u7406\u7A0B\u5E8F\u5C06\u81EA\u52A8\u89E3\u9664\u5BF9TouchGFX Engine\u4E3B\u5FAA\u73AF\u7684\u963B\u585E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\u4E3A\u4F7FLTDC\u9A71\u52A8\u7A0B\u5E8F\u80FD\u591F\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u7528\u6237\u5FC5\u987B\u901A\u8FC7LTDC NVIC\u6216\u901A\u8FC7Global NVIC\u8BBE\u7F6E\u6765\u4F7F\u80FDLTDC\u5168\u5C40\u4E2D\u65AD\uFF0C\u540C\u65F6\u4F7F\u80FD\u4E2D\u65AD\u5904\u7406\u4EE3\u7801\u7684\u751F\u6210\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ltdc-frame-buffer-configuration"
  }), `LTDC Frame Buffer configuration`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7ED3\u8BBA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u4F7F\u7528TouchGFX Generator\u4F7F\u80FD`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5E76\u884CRGB (LTDC)`), `\u663E\u793A\u63A5\u53E3\uFF0C\u53EF\u751F\u6210\u5168\u90E8\u6240\u9700\u7684HAL\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6839\u636ESTM32CubeMX LTDC\u914D\u7F6E\uFF0C\u8BBE\u7F6ETouchGFX\u5E94\u7528\u7A0B\u5E8F\u91CC\u56FE\u5F62\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u548C\u50CF\u7D20\u683C\u5F0F\u3002 LTDC\u5C42\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5BBD\u5EA6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u9AD8\u5EA6`), `\u4F1A\u5F71\u54CDTouchGFX Designer\u4E2D\u7684\u753B\u5E03\u5927\u5C0F\uFF0CLTDC\u50CF\u7D20\u683C\u5F0F\u4F1A\u5F71\u54CD\u6240\u9700\u7684TouchGFX\u5E27\u7F13\u51B2\u9A71\u52A8\u4EE5\u53CA\u6240\u751F\u6210\u56FE\u5F62\u8D44\u6E90\u7684\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57FA\u4E8E\u6240\u9009\u62E9\u7684LTDC\u6EF4\u7B54\u8BA1\u65F6\u6E90\uFF0C\u53EF\u751F\u6210\u7528\u4E8E\u9A71\u52A8TouchGFX Engine\u4E3B\u5FAA\u73AF\u7684\u5904\u7406\u7A0B\u5E8F\u3002 \u901A\u5E38\uFF0C\u5BF9\u4E8ELTDC\u914D\u7F6E\uFF0C\u5F00\u53D1\u4EBA\u5458\u5C06\u59CB\u7EC8\u4F7F\u7528\u73B0\u6709\u7684\u6EF4\u7B54\u8BA1\u65F6\u9A71\u52A8\u7A0B\u5E8F\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);