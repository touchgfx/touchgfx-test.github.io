"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5293],{

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

/***/ 37866:
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
  title: "FMC\u8207SPI\u986F\u793A\u4ECB\u9762"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "title": "FMC\u8207SPI\u986F\u793A\u4ECB\u9762",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-fmc",
    "title": "FMC\u8207SPI\u986F\u793A\u4ECB\u9762"
  },
  "sidebar": "docs",
  "previous": {
    "title": "LTDC/\u4E26\u5217RGB",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"
  },
  "next": {
    "title": "\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"
  }
};
const assets = {};




const toc = [{
  value: "\u50B3\u8F38\u5F71\u50CF\u7DE9\u885D\u5340\u5167\u5BB9",
  id: "transferring-the-framebuffer",
  level: 2
}, {
  value: "FMC",
  id: "fmc",
  level: 3
}, {
  value: "\u5F9EHAL::flushFrameBuffer\uFF08\uFF09\u56DE\u50B3",
  id: "returning-from-halflushframebuffer",
  level: 2
}, {
  value: "TouchGFX\u9A45\u52D5\u7A0B\u5F0F/\u6495\u88C2\u6548\u679C\u4FE1\u865F",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u5834\u666F\uFF08\u901A\u5E38\uFF09\u986F\u793A\u5C07\u50CF\u7D20\u8F49\u79FB\u5230\u9023\u63A5\u5230FMC\u6216\u901A\u904ESPI\u9023\u63A5\u7684LCD\u7684\u6B65\u9A5F\uFF1B\u5169\u500B\u65B9\u6CD5\u5171\u7528\u4E00\u4E9B\u5143\u7D20\u3002 \u672C\u7BC0\u63CF\u8FF0\u7684\u65B9\u6848\u4EE5ST7789H2LCD\u63A7\u5236\u5668\u70BA\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6\u6839\u64DASTM32CubeMX\u4E2D\u7684\u958B\u767C\u4EF6\u898F\u7BC4\u914D\u7F6EFMC\u6216SPI\uFF0CTouchGFX Generator\u53EF\u4EE5\u7528\u65BC\u751F\u6210TouchGFX HAL\uFF0C\u5141\u8A31\u958B\u767C\u4EBA\u54E1\u7DE8\u5BEB\u7A0B\u5F0F\u78BC\uFF0C\u5C07\u61C9\u7528\u7A0B\u5F0F\u5F71\u50CF\u7DE9\u885D\u5668\u7684\u66F4\u65B0\u90E8\u5206\u50B3\u8F38\u5230\u9023\u63A5\u7684\u986F\u793A\u7D42\u7AEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u986F\u793A\u4E86\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BA2\u88FD\u5316`), `\u986F\u793A\u4ECB\u9762\u6642\u7684TouchGFXGenerator\u8A2D\u5B9A\u3002 \u8A72\u914D\u7F6E\u6703\u5411TouchGFXGenerator\u6307\u793A\uFF0C\u958B\u767C\u4EBA\u54E1\u5E0C\u671B\u5B8C\u6210\u76F8\u95DC\u986F\u793A\u914D\u7F6E\u5F8C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u624B\u52D5`), `\u5C07\u50CF\u7D20\u5F9E\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u4E26\u751F\u6210\u7528\u65BC\u5B8C\u6210\u8A72\u64CD\u4F5C\u7684\u8655\u7406\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/custom-interface.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFXGenerator\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5C0D\u65BC\u901A\u904ESPI\u9023\u63A5\u7684\u986F\u793A\u5668\uFF0C\u5FC5\u9808\u9078\u64C7\u81EA\u8A02\u986F\u793A\u4ECB\u9762"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\uFF0C\u5C0D\u65BC\u5167\u5D4CGRAM\u7684\u986F\u793A\u5668\uFF0C\u7528\u6236\u5728\u751F\u6210\u7684TouchGFX HAL\u4E2D\u7DE8\u5BEB\u7684\u7A0B\u5F0F\u78BC\u61C9\u8A72\u57F7\u884C\u4EE5\u4E0B\u6B65\u9A5F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6839\u64DA\u8981\u91CD\u7E6A\u7684\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u5C07\u300C\u986F\u793A\u6E38\u6A19\u300D\u548C\u300C\u6D3B\u52D5\u8996\u7A97\u300D\u79FB\u52D5\u5230GRAM\u4E2D\u8207\u6B64\u5340\u57DF\u5C0D\u61C9\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6E96\u5099\u5C07\u50B3\u5165\u7684\u50CF\u7D20\u8CC7\u6599\u5BEB\u5165GRAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u50B3\u9001\u50CF\u7D20\u8CC7\u6599\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transferring-the-framebuffer"
  }), `\u50B3\u8F38\u5F71\u50CF\u7DE9\u885D\u5340\u5167\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u5167\u5BB9\u88AB\u66F4\u65B0\u5F8C\uFF0CTouchGFXEngine\u6703\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer\uFF08Rectr\uFF09`), `\u3002 \u7576\u958B\u767C\u4EBA\u54E1\u5FC5\u9808\u5BE6\u73FE\u7A0B\u5F0F\u78BC\u4EE5\u624B\u52D5\u5C07\u50CF\u7D20\u8F49\u79FB\u5230\u986F\u793A\u5668\uFF08\u4F8B\u5982\uFF0C\u7528\u5230SPI\u548CFMC\uFF09\u6642\uFF0C\u8A72\u51FD\u6578\u53EF\u4EE5\u88AB\u8986\u5BEB\u3002 \u6211\u5011\u5C07\u770B\u5230\uFF0C\u901A\u904EFMC\u5B58\u5132\u584A\u50B3\u905E\u50CF\u7D20\u7684\u51FD\u6578\u662F\u7531TouchGFX Generator\u751F\u6210\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u672C\u7BC0\u4E2D\u986F\u793A\u7684ST7789H2\u9A45\u52D5\u7A0B\u5F0F\u78BC\u5C07\u5728\u958B\u767C\u677F\u642D\u5EFA\u968E\u6BB5\u6642\u958B\u767C\uFF0C\u4E00\u65E6\u9A45\u52D5\u6210\u529F\u5DE5\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u901A\u904ETouchGFXGenerator\u8907\u88FD\u5230HAL\u985E\u5225\u4E2D\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9A45\u52D5\u7A0B\u5F0F\u5FC5\u9808\u80FD\u5920\u5C07\u50CF\u7D20\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u4E26\u53EF\u4EE5\u63A7\u5236\u986F\u793A\u5668\u7684\u8A18\u61B6\u9AD4\u5BEB\u5165\u4F4D\u7F6E\u3002 \u5982\u9700\u9032\u4E00\u6B65\u7684\u8A73\u7D30\u8CC7\u8A0A\uFF0C\u8ACB\u67E5\u770B\u986F\u793A\u5668\u7684\u8CC7\u6599\u624B\u518A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ST7789H2_SetDisplayWindow`), `\u51FD\u6578\u7528\u4EE5\u5BEB\u5165\u7279\u5B9A\u66AB\u5B58\u5668\u4F86\u8A2D\u5B9AGRAM\u4E2D\u865B\u64EC\u300C\u6E38\u6A19\u300D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `x`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `y`), `\u5EA7\u6A19\uFF0C\u5C0D\u65BC\u4F7F\u7528GRAM\u4F86\u8AAA\u9019\u5F88\u5E38\u898B\u7684\u7528\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u4EE5\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::copyFrameBufferBlockToLCD`), `\u51FD\u6578\u662F\u4E00\u500B\u79C1\u6709\u51FD\u6578\uFF0C\u8A72\u51FD\u6578\u4E00\u6B21\u767C\u9001\u4E00\u884C\u66F4\u65B0\u5340\u57DF\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `\uFF09\uFF0C\u4EE5\u78BA\u4FDD\u76F8\u61C9\u5730\u63A8\u9032\u5F71\u50CF\u7DE9\u885D\u5668\u6307\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFXGenerator\u5C07\u7522\u751F\u4E00\u500B\u51FD\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `advanceFrameBufferToRect`), `\uFF0C\u4E26\u6839\u64DA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u7684\u4F4D\u7F6E\u4F86\u66F4\u65B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ptr`), `\u6307\u6A19\uFF0C\u800C\u4E0D\u7528\u624B\u52D5\u66F4\u65B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ptr`), `\u6307\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u4E5F\u652F\u63F4FMC\u986F\u793A\u4ECB\u9762\uFF0C\u5982\u679C\u81F3\u5C11\u4E00\u500BFMC Bank\u914D\u7F6E\u6B63\u78BA\u3002 \u672C\u4F8B\u4E2D\uFF0CTouchGFX Generator\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u8207`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u81EA\u8A02`), `\u986F\u793A\u4ECB\u9762\u7684\u7A0B\u5F0F\u78BC\u985E\u4F3C\uFF0C\u9664\u4E86\u751F\u6210\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD_IO_WriteMultipleData`), `\u51FD\u6578\uFF0C\u8207\u9023\u63A5\u5230\u986F\u793A\u5668\u4E0A\u7684FMC\u5B58\u5132\u584A\u9032\u884C\u4EA4\u4E92\u3002 \u91CD\u65B0\u67E5\u770B\u524D\u9762\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `copyFrameBufferBlockToLCD`), `\u51FD\u6578\u63D0\u4F9B\u7684\u7A0B\u5F0F\u78BC\uFF0C\u60A8\u5C07\u770B\u5230\u5B83\u4F7F\u7528\u4E86\u751F\u6210\u7684\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5C0D\u65BCSPI\u548CFMC\u986F\u793A\u4ECB\u9762\uFF0C\u958B\u767C\u4EBA\u54E1\u5C07\u4FEE\u6539flushFrameBuffer() \u51FD\u6578\u70BA\uFF1A1) \u8A2D\u7F6E\u6E38\u6A19 2) \u6E96\u5099\u5BEB\u5165GRAM 3) \u901A\u904E\u81EA\u8A02SPI\u986F\u793A\u9A45\u52D5\u6216\u901A\u904E\u751F\u6210\u7684FMC Bank\u51FD\u6578\u50B3\u8F38\u50CF\u7D20\u3002 "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u986F\u793A\u4E86\u4E00\u500B\u6709\u6548\u768416\u4F4D\uFF08\u5FC5\u9700\u7684\uFF09FMC\u5B58\u5132\u584A2\u7684\u914D\u7F6E\uFF08\u5169\u8005\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.png",
    width: "600",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC Bank\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65E6\u5BE6\u73FE\u4E86\u6709\u6548\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728TouchGFX Generator\u4E2D\u9078\u64C7\u8A72\u5B58\u5132\u584A\u3002 \u9A57\u8B49\u60A8\u7684MCU\u7684FMC\u5B58\u5132\u584A\u66AB\u5B58\u5668\u7684\u8D77\u59CB\u4F4D\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.png",
    width: "500",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC\u4ECB\u9762\u9078\u64C7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u9A57\u8B49FMC\u5B58\u5132\u584A\u7684\u914D\u7F6E\uFF0C\u4E26\u5831\u544A\u5B83\u53EF\u80FD\u767C\u73FE\u7684\u4EFB\u4F55\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.png",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC Configuration\u932F\u8AA4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "returning-from-halflushframebuffer"
  }), `\u5F9EHAL::flushFrameBuffer\uFF08\uFF09\u56DE\u50B3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u51FD\u6578\u8FD4\u56DE\u5F8C\uFF0CTouchGFXEngine\u7E7C\u7E8C\u7E6A\u88FD\u5269\u9918\u7684\u5167\u5BB9\u3002 \u5982\u679C\u958B\u767C\u4EBA\u54E1\u5E0C\u671B\u4F7F\u7528DMA\u5C07\u50CF\u7D20\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u4ED6\u5011\u5FC5\u9808\u900F\u904E\u7B49\u5F85`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `DMA\u5B8C\u6210`), `\u4E2D\u65B7\u6240\u767C\u51FA\u7684semaphore\u8A0A\u865F\u4F86\u78BA\u4FDD`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), `\u4E0D\u6703\u7ACB\u5373\u50B3\u56DE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u7684\u507D\u7A0B\u5F0F\u7BC4\u4F8B\u793A\u7BC4\u4E86\u5728\u4F7F\u7528DMA\u7684\u60C5\u6CC1\u4E0B\u5982\u4F55\u5EFA\u69CB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer()`), `\u3002 \u6B64\u7A0B\u5F0F\u78BC\u4F7F\u7528\u4E86FreeRTOS\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `screen_frame_buffer_sem`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\u7531TouchGFX Generator\u751F\u6210\u7684FMC\u7A0B\u5F0F\u78BC\u4E0D\u4F7F\u7528DMA\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--tearing-effect-signal"
  }), `TouchGFX\u9A45\u52D5\u7A0B\u5F0F/\u6495\u88C2\u6548\u679C\u4FE1\u865F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F9E\u4E0A\u9762\u7684TouchGFXGenerator\u914D\u7F6E\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u61C9\u7528\u4E2D\u7684\u300C\u6EF4\u7B54\u8A08\u6642\u6E90\u300D\u4E5F\u88AB\u8A2D\u70BA\u300C\u5BA2\u5236\u300D\uFF0C\u5C0D\u65BC\u4E0D\u5167\u7F6ETFT\u63A7\u5236\u5668\u7684MCU\u4F86\u8AAA\uFF0C\u9019\u4E5F\u7B97\u662F\u5E38\u898B\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u62BD\u8C61\u5C64\u67B6\u69CB\u90E8\u5206\u6240\u8FF0\uFF0C\u901A\u5E38\u5728\u767C\u51FA\u986F\u793A\u8A0A\u865F\u6642\uFF0C\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync\uFF08\uFF09`), `\u4F86\u89E3\u9664TouchGFXEngine\u4E3B\u8FF4\u5708\u963B\u585E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u6709\u4E32\u5217\u62168080\u986F\u793A\u4ECB\u9762\u7684\u986F\u793A\u5668\uFF0C\u5167\u5EFA\u986F\u793A\u63A7\u5236\u5668\u901A\u5E38\u6703\u7522\u751F\u4E00\u500B\u9031\u671F\u6027\u6495\u88C2\u6548\u679C\uFF08TE\uFF09\u4FE1\u865F\uFF0C\u8A72\u8A0A\u865F\u53EF\u4EE5\u9023\u63A5\u5230MCU\u4E0A\u7684GPIO\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u901A\u5E38\u5C07MCU\u914D\u7F6E\u70BA\u7576GPIO\u6536\u5230\u8A72\u4FE1\u865F\u6642\u89F8\u767C\u4E2D\u65B7\u3002 \u7136\u5F8C\uFF0C\u8A72\u300C\u6495\u88C2\u6548\u679C\u300D\u4E2D\u65B7\u5C07\u89E3\u9664\u5C0DTouchGFXEngine\u4E3B\u5FAA\u74B0\u7684\u963B\u585E\uFF0C\u4EE5\u4FBF\u6E32\u67D3\u4E0B\u4E00\u5E40\u3002 \u8ACB\u8A18\u4F4F\u5C07GPIO\u914D\u7F6E\u70BA\u8F38\u5165\uFF0C\u4E26\u5728STM32CubeMX\u4E2D\u4F7F\u80FD\u8A72\u8173\u7684\u5916\u90E8\u4E2D\u65B7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u7D50\u8AD6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u900F\u904ETouchGFXGenerator\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BA2\u88FD\u5316`), `\u986F\u793A\u4ECB\u9762\uFF0C\u4E26\u81EA\u884C\u7DE8\u5BEB\u7A0B\u5F0F\u78BC\u5BE6\u73FE\u5C07\u50CF\u7D20\u5F9E\u61C9\u7528\u7A0B\u5F0F\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u986F\u793A\u5668\u4E4B\u76EE\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFXGenerator\u5C07\u7522\u751Ffunction`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::flushFrameBuffer\uFF08Rect& rect\uFF09`), `\u51FD\u6578\uFF0C\u7576\u6E32\u67D3\u5B8C\u6210\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u4E00\u584A\u5340\u57DF\u5F8C\uFF0CTouchGFX\u6703\u81EA\u52D5\u547C\u53EB\u8A72\u51FD\u6578\uFF0C\u540C\u6642\uFF0C\u958B\u767C\u4EBA\u54E1\u5C07\u66F4\u65B0\u904E\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u8CC7\u6599\u900F\u904EFMC\u3001SPI\u6216\u5176\u4ED6\u9014\u5F91\u50B3\u9001\u5230\u986F\u793A\u5668\u3002 Regardless, the following steps must be completed in both cases:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6839\u64DA\u8981\u91CD\u7E6A\u7684\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u5C07\u300C\u986F\u793A\u6E38\u6A19\u300D\u548C\u300C\u6D3B\u52D5\u8996\u7A97\u300D\u79FB\u52D5\u5230GRAM\u4E2D\u8207\u6B64\u5340\u57DF\u5C0D\u61C9\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6E96\u5099\u5C07\u50B3\u5165\u7684\u50CF\u7D20\u8CC7\u6599\u5BEB\u5165GRAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u50B3\u9001\u50CF\u7D20\u8CC7\u6599\u3002 \u5982\u679C\u662FFMC\u986F\u793A\u4ECB\u9762\uFF0C\u8A72\u51FD\u6578\u5C31\u662F\u70BA\u60A8\u751F\u6210\u7684\uFF0C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `flushFrameBuffer\uFF08rect & rect\uFF09`), `\u4E2D\u4F7F\u7528\uFF08(\u53C3\u898B\u672C\u6587\u524D\u9762\u7684\u5167\u5BB9\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BA2\u88FD\u5316`), `\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FMC`), `\u986F\u793A\u4ECB\u9762\u4E5F\u9700\u8981\u958B\u767C\u4EBA\u54E1\u5BE6\u73FE\u5BA2\u88FD\u7684TouchGFX\u6EF4\u7B54\u8A08\u6642\u9A45\u52D5\uFF0C\u8A72\u9A45\u52D5\u7A0B\u5F0F\u767C\u51FA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync\uFF08\uFF09`), `\u4FE1\u865F\uFF0C\u4EE5\u89E3\u9664\u5C0DTouchGFXEngine\u4E3B\u8FF4\u5708\u7684\u963B\u585E\u3002 \u901A\u5E38\uFF0C\u8207\u4E0D\u5E36TFT\u63A7\u5236\u5668\u7684MCU\u4E00\u8D77\u4F7F\u7528\u7684\u986F\u793A\u5668\u6703\u63D0\u4F9B\u9023\u63A5\u81F3MCU\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6495\u88C2\u6548\u679C`), `\u4FE1\u865F\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);