"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4139],{

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

/***/ 34871:
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
  title: "LTDC/\u4E26\u5217RGB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "title": "LTDC/\u4E26\u5217RGB",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-ltdc-parallel-rgb",
    "title": "LTDC/\u4E26\u5217RGB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-TW/docs/category/scenarios"
  },
  "next": {
    "title": "FMC\u8207SPI\u986F\u793A\u4ECB\u9762",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"
  }
};
const assets = {};



const toc = [{
  value: "\u986F\u793A\u4ECB\u9762",
  id: "display-interface",
  level: 3
}, {
  value: "\u5F9ESTM32CubeMX\u8B80\u53D6\u8A2D\u5B9A",
  id: "reading-settings-from-stm32cubemx",
  level: 2
}, {
  value: "TouchGFX\u9A45\u52D5\u7A0B\u5F0F/VSYNC\u4FE1\u865F",
  id: "touchgfx-driver--vsync-signal",
  level: 2
}, {
  value: "LTDC Frame Buffer configuration",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u5E36\u6709TFT\u63A7\u5236\u5668\u7684MCU\uFF08\u5982STM32F429\uFF0CSTM32F746\uFF0CSTM32H7\uFF09\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\u53EF\u7522\u751F\u90E8\u5206HAL\u7A0B\u5F0F\u78BC\u4F86\u8A2D\u5B9ALTDC\u5C07\u5F71\u50CF\u7531\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u4E00\u65E6LTDC\u7522\u751FVSYNC\u4E2D\u65B7\uFF0C\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u5C07\u555F\u52D5\u6B63\u78BA\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u50B3\u8F38\uFF0C\u540C\u6642\u85C9\u7531\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\u4F86\u89E3\u9664\uFF08unblock\uFF09TouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\uFF08main loop\uFF09\u7684\u963B\u585E\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-interface"
  }), `\u986F\u793A\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8207\u958B\u767C\u4EBA\u54E1\u5FC5\u9808\u81EA\u884C\u5BE6\u4F5C\u6574\u500B\u9A45\u52D5\u7A0B\u5F0F\u7684\u300C\u5BA2\u88FD\u5316\u300D\u986F\u793A\u4ECB\u9762\u76F8\u53CD\uFF0C\u5C0DLTDC\u4F86\u8AAATouchGFX Generator\u53EF\u7522\u751F\u652F\u63F4LTDC\u8A2D\u5B9A\u6240\u9700\u7684\u6240\u6709TouchGFX HAL\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u7684\u5206\u985E\uFF08Categories\uFF09\u6E05\u55AE\u7684\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Multimedia`), `\u300D\u8A2D\u5B9A\u7FA4\u7D44\u7576\u4E2D\u5FC5\u9808\u9EDE\u9078\u555F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\u4E4B\u5F8C\u624D\u80FD\u5728TouchGFX Generator\u7576\u4E2D\u770B\u5230\u300CParallel RGB (LTDC)\u300D\u5448\u73FE\u53EF\u9078\u53D6\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6\u555F\u7528LTDC\u4E4B\u5F8C\uFF0C\u5728TouchGFX Generator\u7684\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display`), `\u300D\u5C55\u958B\u9805\u9078\u7576\u4E2D\u5373\u53EF\u770B\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4E26\u5217RGB \uFF08LTDC\uFF09`), `\u7684\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u900F\u904ESTM32CubeMX\u555F\u7528\u4E86LTDC\u4E4B\u5F8C\u9084\u9700\u8981\u5B8C\u6210\u4EE5\u4E0B\u7684\u5DE5\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8A2D\u5B9ALTDC\uFF08GPIO\u8207\u76F8\u95DC\u6642\u9593\u53C3\u6578\uFF09\u4EE5\u7B26\u5408\u9023\u63A5\u7684\u986F\u793A\u5668\u898F\u683C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8A2D\u5B9ALTDC\u4EE5\u7B26\u5408\u6240\u9700\u7684TouchGFX\u61C9\u7528\u7A0B\u5F0F\u9700\u6C42\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u53EF\u7531STM32CubeMX\u7576\u4E2D\u8B80\u53D6\u5404\u9805\u914D\u7F6E\uFF0C\u4E26\u63D0\u4F9B\u5305\u542B\u4E86\u8B66\u793A\u3001\u5EFA\u8B70\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u76F8\u4F9D\u95DC\u4FC2`), `\u7684\u6E05\u55AE\u3002 \u4E0B\u5716\u986F\u793A\u4E86\u6700\u521D\u5728CubeMX\u4E2D\u70BA\u4EFB\u4F55MCU\u555F\u7528LTDC\u6642\u5B58\u5728\u7684\u76F8\u4F9D\u95DC\u4FC2\u6E05\u55AE\uFF08\u5728\u672C\u7BC4\u4F8B\u4E2D\uFF0C\u6211\u5011\u4F7F\u7528F429\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5728STM32CubeMX\u555F\u7528\u4E86LTDC\u4E4B\u5F8C\u4FBF\u53EF\u5728TouchGFX Generator\u7684\u4ECB\u9762\u4E2D\u770B\u5230LTDC\u76F8\u95DC\u7684\u5EFA\u8B70\u3001\u8B66\u793A\u548C\u932F\u8AA4\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76F8\u4F9D\u95DC\u4FC2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63CF\u8FF0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C64\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u53EA\u80FD\u5229\u7528\u55AE\u4E00\u5F71\u50CF\u5C64\u3002 \u5118\u7BA1TouchGFX\u61C9\u7528\u7A0B\u5F0F\u53EF\u5728\u555F\u7528\u5169\u500B\u5F71\u50CF\u5C64\u7684\u60C5\u6CC1\u4E0B\u904B\u4F5C\uFF0C\u9019\u500B\u8B66\u793A\u662F\u63D0\u9192\u4F7F\u7528\u8005\u9700\u8981\u6CE8\u610FLTDC\u7684\u914D\u7F6E\u53EF\u80FD\u6709\u8AA4\u3002 \u8B8A\u66F4LTDC\u8A2D\u5B9A\u9078\u9805\u7576\u4E2D\u7684\u5F71\u50CF\u5C64\u6578\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8996\u7A97\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9810\u8A2D\u60C5\u6CC1\u4E0B\uFF0CLTDC\u5C64\u7684\u6C34\u5E73\u548C\u5782\u76F4\u8996\u7A97\u4F4D\u7F6E\u70BA0\u3002 \u8996\u7A97\u7684\u6C34\u5E73\u548C\u5782\u76F4\u505C\u6B62\u5FC5\u9808\u8A2D\u7F6E\u70BA\u8A9E\u986F\u793A\u76F8\u7B49\u5C3A\u5BF8\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Alpha\u5E38\u6578\u70BA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC\u5F71\u50CF\u5C64\u7684Alpha\u5E38\u6578\u9810\u8A2D\u70BA0\u3002 \u6B64\u8A2D\u5B9A\u9700\u5927\u65BC0\uFF0C\u6700\u597D\u662F255\uFF0C\u9664\u975E\u5728\u61C9\u7528\u7576\u4E2D\u9700\u5177\u6709\u4E00\u500B\u6C38\u4E45\u53EF\u5F97\u7684\u5168\u57DFAlpha\u8A2D\u5B9A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u300CMultimedia\u300D\u8A2D\u5B9A\u7FA4\u7D44\u7576\u4E2D\u555F\u7528\u4E86LTDC\u9031\u908A\u4E4B\u5F8C\uFF0C\u9084\u9700\u8981\u9078\u53D6\u4E26\u5217RGB \uFF08LTDC\uFF09\u986F\u793A\u4ECB\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u53EF\u770B\u5230\u5728\u6EFF\u8DB3\u8B66\u793A\u8B66\u606F\u7684LTDC\u8A2D\u5B9A\u4E4B\u5F8C\uFF0C\u76F8\u4F9D\u95DC\u4FC2\u7FA4\u7D44\u4FBF\u5F9ETouchGFX Generator\u4ECB\u9762\u4E2D\u6D88\u5931\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "reading-settings-from-stm32cubemx"
  }), `\u5F9ESTM32CubeMX\u8B80\u53D6\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Generator\u7576\u4E2D\u9078\u53D6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u300CParallel RGB (LTDC)\u300D`), `\u4F5C\u70BA\u986F\u793A\u4ECB\u9762\u4E4B\u5F8C\uFF0C\u5F71\u50CF\u7DE9\u885D\u5340\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BEC\u5EA6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9AD8\u5EA6`), `\u4FBF\u7E7C\u627F\u81EALTDC\u8A2D\u5B9A\u7576\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6C34\u5E73\u8D77\u9EDE/\u7D42\u9EDE`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5782\u76F4\u8D77\u9EDE/\u7D42\u9EDE`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u986F\u793A\u548C\u61C9\u7528\u7A0B\u5F0F\u5C3A\u5BF8\u5B9A\u7FA9\u7B2C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `0`), `\u5C64\u7684\u5C3A\u5BF8\u5F8C\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u76F8\u4F9D\u95DC\u4FC2`), `\u8996\u7A97\u4E2D\u5C07\u986F\u793A\u4E00\u500B\u65B0\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u9700\u8981\u78BA\u4FDD\u5F71\u50CF\u7DE9\u885D\u5340\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5716\u7247\u5BEC\u5EA6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5716\u7247\u9AD8\u5EA6`), `\u7B26\u5408\u8996\u7A97\u5C3A\u5BF8\uFF0C\u4EE5\u6EFF\u8DB3\u8B66\u793A\u8981\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u82E5\u555F\u7528LTDC\uFF0CTouchGFX Generator\u5C07\u7E7C\u627FLTDC\u6240\u914D\u7F6E\u7684", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u5BEC\u5EA6"), "\u548C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u9AD8\u5EA6"), "\u503C\u3002 \u4F46\u6211\u5011\u4ECD\u53EF\u4EE5\u5F9ETouchGFX Generator\u4ECB\u9762\u4F86\u4FEE\u6539", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u5BEC\u5EA6"), "\u548C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "\u9AD8\u5EA6"), "\u3002 \u5982\u679C\u4FEE\u6539\u7684\u503C\u6C92\u6709\u9075\u5FAA\u8996\u7A97LTDC\u5F71\u50CF\u5C64\uFF08Window LTDC Layer\uFF09\u7684\u914D\u7F6E\u6703\u5C0E\u81F4\u914D\u7F6E\u7684\u4E0D\u5339\u914D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--vsync-signal"
  }), `TouchGFX\u9A45\u52D5\u7A0B\u5F0F/VSYNC\u4FE1\u865F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4E26\u5217RGB \uFF08LTDC\uFF09`), `\u88AB\u9078\u53D6\u70BA\u986F\u793A\u4ECB\u9762\uFF0C\u958B\u767C\u4EBA\u54E1\u5C31\u53EF\u4EE5\u9078\u53D6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\u4F5C\u70BA\u61C9\u7528\u6642\u6A19\u9A45\u52D5\u7A0B\u5F0F\uFF08Application Tick Driver\uFF09\u6216TouchGFX\u9A45\u52D5\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.png",
    width: "500",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u662F\u6839\u64DALTDC\u7684\u914D\u7F6E\u800C\u7522\u751F\u7684LTDC\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\uFF08STM32F7\uFF09\u3002 \u7522\u751F\u7684\u4E2D\u65B7\u8655\u7406\u51FD\u5F0F\u6703\u81EA\u52D5\u89E3\u9664TouchGFX\u5F15\u64CE\u7684\u4E3B\u8FF4\u5708\uFF08main loop\uFF09\u7684\u963B\u585E\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\u70BA\u4F7FLTDC\u9A45\u52D5\u7A0B\u5F0F\u80FD\u5920\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4F7F\u7528\u8005\u5FC5\u9808\u900F\u904ELTDC NVIC\u7684\u8A2D\u5B9A\u6216\u900F\u904EGlobal NVIC\u7684\u8A2D\u5B9A\u4F86\u555F\u7528LTDC\u5168\u57DF\u4E2D\u65B7\uFF08global interrupt\uFF09\uFF0C\u540C\u6642\u958B\u555F\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\u78BC\u7684\u7522\u751F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ltdc-frame-buffer-configuration"
  }), `LTDC Frame Buffer configuration`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7D50\u8AD6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531TouchGFX Generator\u555F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4E26\u5217RGB \uFF08LTDC\uFF09`), `\u986F\u793A\u4ECB\u9762\u53EF\u7522\u751F\u6240\u9700\u7684\u6240\u6709HAL\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6839\u64DASTM32CubeMX LTDC\u7684\u914D\u7F6E\u4F86\u8A2D\u5B9ATouchGFX\u61C9\u7528\u7A0B\u5F0F\u7684\u5BEC\u5EA6\u3001\u9AD8\u5EA6\u548C\u50CF\u7D20\u683C\u5F0F\u3002 LTDC\u5F71\u50CF\u5C64\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5BEC\u5EA6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u9AD8\u5EA6`), `\u6703\u5F71\u97FFTouchGFX Designer\u4E2D\u7684\u756B\u5E03\u5927\u5C0F\uFF0CLTDC\u50CF\u7D20\u683C\u5F0F\u6703\u5F71\u97FF\u6240\u9700\u7684TouchGFX\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u9A45\u52D5\u7A0B\u5F0F\u4EE5\u53CA\u6240\u751F\u6210\u5716\u8CC7\uFF08asset\uFF09\u7684\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u85C9\u7531\u9078\u53D6LTDC\u4F5C\u70BA\u61C9\u7528\u6642\u6A19\uFF08application tick\uFF09\u7684\u4F86\u6E90\u4EE5\u7522\u751F\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\u78BC\u4F86\u9A45\u52D5TouchGFX\u5F15\u64CE\u7684\u4E3B\u8FF4\u5708\uFF08main loop\uFF09\u3002 \u901A\u5E38\u85C9\u7531LTDC\u7684\u914D\u7F6E\u958B\u767C\u4EBA\u54E1\u5373\u53EF\u4E00\u76F4\u4F7F\u7528LTDC\u914D\u7F6E\u63D0\u4F9B\u7684\u61C9\u7528\u6642\u6A19\u9A45\u52D5\u7A0B\u5F0F\uFF08Application Tick Driver\uFF09\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);