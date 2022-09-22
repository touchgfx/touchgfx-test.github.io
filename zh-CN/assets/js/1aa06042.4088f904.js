"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[752],{

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

/***/ 22425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class CodeHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "code-header"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, this.props.children)));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (CodeHeader);


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

/***/ 93892:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
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
  id: "touchgfx-architecture",
  title: "\u62BD\u8C61\u5C42\u67B6\u6784"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-architecture",
  "id": "development/touchgfx-hal-development/touchgfx-architecture",
  "title": "\u62BD\u8C61\u5C42\u67B6\u6784",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-architecture.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-architecture",
  "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-architecture",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-architecture",
    "title": "\u62BD\u8C61\u5C42\u67B6\u6784"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX\u5F00\u53D1\u7B80\u4ECB",
    "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
  },
  "next": {
    "title": "Generator\u7528\u6237\u6307\u5357",
    "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-generator"
  }
};
const assets = {};





const toc = [{
  value: "\u62BD\u8C61\u5C42\u7C7B",
  id: "abstraction-layer-classes",
  level: 3
}, {
  value: "\u5C06TouchGFX Engine\u4E3B\u5FAA\u73AF\u4E0E\u663E\u793A\u5668\u4F20\u8F93\u540C\u6B65",
  id: "synchronize-touchgfx-engine-main-loop-with-display-transfer",
  level: 2
}, {
  value: "\u6E32\u67D3\u5B8C\u6210",
  id: "rendering-done",
  level: 3
}, {
  value: "\u663E\u793A\u5C31\u7EEA",
  id: "display-ready",
  level: 3
}, {
  value: "\u62A5\u544A\u89E6\u6478\u4E0E\u7269\u7406\u6309\u94AE\u4E8B\u4EF6",
  id: "report-touch-and-physical-button-events",
  level: 2
}, {
  value: "\u89E6\u6478\u5750\u6807",
  id: "touch-coordinates",
  level: 3
}, {
  value: "\u5176\u4ED6\u5916\u90E8\u4E8B\u4EF6",
  id: "other-external-events",
  level: 3
}, {
  value: "\u540C\u6B65\u5E27\u7F13\u51B2\u8BBF\u95EE",
  id: "synchronize-framebuffer-access",
  level: 2
}, {
  value: "\u62A5\u544A\u4E0B\u4E00\u4E2A\u53EF\u7528\u7684\u5E27\u7F13\u51B2\u533A",
  id: "report-the-next-available-framebuffer-area",
  level: 2
}, {
  value: "\u6267\u884C\u6E32\u67D3\u64CD\u4F5C",
  id: "perform-render-operations",
  level: 2
}, {
  value: "\u5904\u7406\u5230\u663E\u793A\u5668\u7684\u5E27\u7F13\u51B2\u4F20\u8F93",
  id: "handle-framebuffer-transfer-to-display",
  level: 2
}, {
  value: "\u533A\u57DF\u6E32\u67D3\u5B8C\u6210",
  id: "rendering-of-area-complete",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u4E00\u8282\u6240\u8FF0\uFF0CTouchGFX AL\u5177\u6709\u4E00\u5957\u7279\u6B8A\u7684\u804C\u8D23\u3002 \u804C\u8D23\u8981\u4E48\u5728AL (HAL)\u7684\u786C\u4EF6\u90E8\u5206\u5B9E\u73B0\uFF0C\u8981\u4E48\u5728\u4E0ETouchGFX Engine\u540C\u6B65\u7684AL\u90E8\u5206\u5B9E\u73B0\uFF0C\u5178\u578B\u7684\u505A\u6CD5\u662F\u901A\u8FC7RTOS (OSAL)\u6765\u5B9E\u73B0\u3002 \u4E0B\u8868\u603B\u7ED3\u4E86\u8FD9\u4E9B\u5728\u524D\u4E00\u8282\u4E2D\u6982\u8FF0\u7684\u804C\u8D23\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u804C\u8D23`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u64CD\u4F5C\u7CFB\u7EDF\u6216\u786C\u4EF6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `\u5C06TouchGFX Engine\u4E3B\u5FAA\u73AF\u4E0E\u663E\u793A\u5668\u4F20\u8F93\u540C\u6B65`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u786C\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-touch-and-physical-button-events"
  }), `\u62A5\u544A\u89E6\u6478\u4E0E\u7269\u7406\u6309\u94AE\u4E8B\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-framebuffer-access"
  }), `\u540C\u6B65\u5E27\u7F13\u51B2\u8BBF\u95EE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u64CD\u4F5C\u7CFB\u7EDF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-the-next-available-framebuffer-area"
  }), `\u62A5\u544A\u4E0B\u4E00\u4E2A\u53EF\u7528\u7684\u5E27\u7F13\u51B2\u533A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#perform-render-operations"
  }), `\u6267\u884C\u6E32\u67D3\u64CD\u4F5C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#handle-framebuffer-transfer-to-display"
  }), `\u5904\u7406\u5230\u663E\u793A\u5668\u7684\u5E27\u7F13\u51B2\u4F20\u8F93 `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u4EF6`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u6BCF\u4E2A\u5C0F\u8282\u91CD\u70B9\u4ECB\u7ECD\u5C65\u884C\u4E0A\u8FF0\u804C\u8D23\u5E94\u91C7\u53D6\u7684\u63AA\u65BD\u3002 \u5BF9\u4E8E\u5B9A\u5236\u786C\u4EF6\u5E73\u53F0\uFF0CSTM32CubeMX\u4E2D\u7684TouchGFX Generator\u53EF\u4EE5\u751F\u6210\u5927\u591A\u6570AL\u548C\u76F8\u5E94\u7684TouchGFX\u9879\u76EE\u3002 AL\u5F00\u53D1\u4EBA\u5458\u5FC5\u987B\u624B\u52A8\u5B9E\u73B0\u7684\u5176\u4F59\u90E8\u5206\u901A\u8FC7\u4EE3\u7801\u6CE8\u91CA\u63D0\u793A\uFF0C\u5E76\u901A\u8FC7TouchGFX Generator\u901A\u77E5\u3002 \u5728\u4E0B\u4E00\u8282\u4E2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `\u9605\u8BFB`), `\u6709\u5173TouchGFX Generator\u7684\u66F4\u591A\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-classes"
  }), `\u62BD\u8C61\u5C42\u7C7B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5F15\u64CE\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL`), `\u7684\u5177\u4F53\u5B50\u7C7B\u6765\u8BBF\u95EEHAL\u3002 \u8FD9\u4E9B\u5B50\u7C7B\u7531TouchGFX Generator\u751F\u6210\u3002  \u4F5C\u4E3A\u521B\u5EFA\u62BD\u8C61\u5C42\u7684__\u4E3B\u8981\u5DE5\u5177\uFF0Cgenerator\u53EF\u751F\u6210\u53CD\u5E94STM32CubeMX\u7684\u914D\u7F6E\u7684HAL\u90E8\u5206\uFF0C\u4EE5\u53CA\u9002\u7528\u4E8ECMSIS V1\u548CV2\u7684OSAL\u3002 \u8BF7\u9605\u8BFB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `TouchGFX Generator`), `\u7AE0\u8282\uFF0C\u4EE5\u83B7\u53D6\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u3002 \u901A\u5E38\uFF0CHAL\u7684\u67B6\u6784\u5982\u4E0B\u56FE\u6240\u793A\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, `\u751F\u6210\u7684\u4EE3\u7801\u7684\u5C42\u6B21\u7ED3\u6784`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `\u5C06TouchGFX Engine\u4E3B\u5FAA\u73AF\u4E0E\u663E\u793A\u5668\u4F20\u8F93\u540C\u6B65`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u6B65\u9AA4\u80CC\u540E\u7684\u4E3B\u8981\u601D\u60F3\u662F\uFF0C\u5728\u6E32\u67D3\u5B8C\u6210\u540E\u963B\u585ETouchGFX Engine\u4E3B\u5FAA\u73AF\uFF0C\u4ECE\u800C\u786E\u4FDD\u4E0D\u518D\u4EA7\u751F\u5176\u4ED6\u5E27\u3002 \u4E00\u65E6\u663E\u793A\u51C6\u5907\u5C31\u7EEA\uFF0COSAL\u5411\u88AB\u963B\u585E\u7684Engine\u4E3B\u5FAA\u73AF\u53D1\u51FA\u4FE1\u53F7\uFF0C\u4EE5\u7EE7\u7EED\u4EA7\u751F\u663E\u793A\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to fulfill this responsibility the typical way of a TouchGFX AL is to utilize the engine hook `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Rendering done`), ` and the interrupt `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display Ready`), `, as outlined in the previous section. OSAL\u5B9A\u4E49\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u51FD\u6570\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u901A\u8FC7\u5B83\u53D1\u4FE1\u53F7\u7ED9\u5F15\u64CE\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u53EF\u4EE5\u521B\u5EFA\u57FA\u4E8ECMSIS V1\u548CV2\u7684\u5B8C\u6574OSAL\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-done"
  }), `\u6E32\u67D3\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u5B8C\u6210\u540E\uFF0CTouchGFX Engine\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6E32\u67D3\u5B8C\u6210`), `\u94A9\u5B50\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5B9E\u73B0\u6B64AL\u65B9\u6CD5\u65F6\uFF0CAL\u5FC5\u987B\u963B\u585E\u56FE\u5F62\u5F15\u64CE\uFF0C\u76F4\u81F3\u6E32\u67D3\u4E0B\u4E00\u5E27\u3002 The standard method to implement this block is to perform a blocking read from a message queue. \u5982\u679C\u6B64\u65B9\u6CD5\u4E0D\u53EF\u884C\uFF0C\u5219HAL\u5F00\u53D1\u4EBA\u5458\u53EF\u81EA\u7531\u4F7F\u7528\u4EFB\u4F55\u65B9\u6CD5\u6765\u5B9E\u73B0\u8BE5\u963B\u585E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5982\u679C\u6CA1\u6709\u6B64\u7C7B\u8F6F\u4EF6\uFF0CTouchGFX Generator\u4E5F\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A\u4F7F\u7528\u81EA\u65CB\u9501\u6765\u7B49\u5F85\uFF0C\u800C\u975E\u4F7F\u7528RTOS\u57FA\u5143\u7684\u7A7AOSAL\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u53D1\u51FA\u4FE1\u53F7\u65F6(\u6216\u7528\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u7684\u4FE1\u53F7\u91CF/\u961F\u5217\u53D1\u51FA\u4FE1\u53F7\u65F6) \uFF0CTouchGFX\u5C06\u5F00\u59CB\u6E32\u67D3\u4E0B\u4E00\u4E2A\u5E94\u7528\u5E27\u3002 The following code based on CMSIS V2 causes the TouchGFX engine to block until an element is added to the queue by another part of the system, typically an interrupt synchronized with the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere

void OSWrappers::waitForVSync()
{
    uint32_t dummyGet;
    // First make sure the queue is empty, by trying to remove an element with 0 timeout.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, 0);

    // Then, wait for next VSYNC to occur.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, osWaitForever);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u672A\u4F7F\u7528RTOS\uFF0CTouchGFX Generator\u4F7F\u7528\u6613\u5931\u6027\u53D8\u91CF\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `waitForVSync`), `\u63D0\u4F9B\u4EE5\u4E0B\u5B9E\u73B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::waitForVSync()
{
    while(!vsync_sem)
    {
        // Perform other work while waiting
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u5728")), "TouchGFX Engine\u7B49\u5F85\u751F\u6210\u4E0B\u4E00\u5E27\u65F6\uFF0C\u5176\u4ED6\u4EFB\u52A1\u53EF\u4EE5\u6267\u884C\u91CD\u8981\u7684\u5DE5\u4F5C\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-ready"
  }), `\u663E\u793A\u5C31\u7EEA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u4E8E\u89E3\u9664\u4E3B\u5FAA\u73AF\u963B\u585E\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u663E\u793A\u5C31\u7EEA`), `\u4FE1\u53F7\u5E94\u6765\u81EA\u663E\u793A\u63A7\u5236\u5668\u3001\u663E\u793A\u5668\u672C\u8EAB\u6216\u662F\u786C\u4EF6\u5B9A\u65F6\u5668\u7684\u4E2D\u65AD\u3002 The source of the signal is dependent on the type of display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u7C7B\u4E3A\u8BE5\u4FE1\u53F7\u5B9A\u4E49\u4E86\u4E00\u4E2A\u51FD\u6570\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVsync`), ` \u8BE5\u51FD\u6570\u7684\u5B9E\u73B0\u5FC5\u987B\u901A\u8FC7\u6EE1\u8DB3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u4E2D\u4F7F\u7528\u7684\u7B49\u5F85\u6761\u4EF6\u6765\u89E3\u9501\u4E3B\u5FAA\u73AF\u963B\u585E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7EE7\u7EED\u4E0A\u9762\u7684CMSIS RTOS\u793A\u4F8B\uFF0C\u4EE5\u4E0B\u4EE3\u7801\u5C06\u6D88\u606F\u653E\u5165\u961F\u5217`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `vsync_queue`), `\u4E2D\uFF0C\u6B64\u6D88\u606F\u961F\u5217\u5C06\u89E3\u9664\u5BF9TouchGFX Engine\u7684\u963B\u585E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    if (vsync_queue)
    {
        osMessagePut(vsync_queue, dummy, 0);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u65B9\u6CD5\u5FC5\u987B\u5728\u786C\u4EF6\u5C42\u9762\u4E0A\u901A\u8FC7LTDC\u3001\u663E\u793A\u5668\u7684\u5916\u90E8\u4FE1\u53F7\u6216\u786C\u4EF6\u5B9A\u65F6\u5668\u7B49\u7684\u4E2D\u65AD\u8C03\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E0D\u4F7F\u7528RTOS\uFF0C\u5219\u4F7F\u7528\u53D8\u91CF\uFF0C\u5E76\u5206\u914D\u4E00\u4E2A\u975E\u96F6\u503C\u4EE5\u6253\u7834while\u5FAA\u73AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-touch-and-physical-button-events"
  }), `\u62A5\u544A\u89E6\u6478\u4E0E\u7269\u7406\u6309\u94AE\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u65B0\u5E27\u4E4B\u524D\uFF0CTouchGFX Engine\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchController`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), `\u63A5\u53E3\u6536\u96C6\u5916\u90E8\u8F93\u5165\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch-coordinates"
  }), `\u89E6\u6478\u5750\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u5F15\u64CE\u5C06\u89E6\u6478\u63A7\u5236\u5668\u7684\u5750\u6807\u8F6C\u6362\u4E3A\u70B9\u51FB\u3001\u62D6\u52A8\u548C\u624B\u52BF\u4E8B\u4EF6\uFF0C\u5E76\u4F20\u9012\u81F3\u5E94\u7528\u7A0B\u5E8F\u3002 \u4EE5\u4E0B\u4EE3\u7801\u7531TouchGFX Generator\u751F\u6210\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1-1,6-6}",
    "{1-1,6-6}": true
  }), `static STM32TouchController tc;
static STM32L4DMA dma;
static LCD24bpp display;
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 390, 390);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Engine\u6E32\u67D3\u5468\u671F\u4E2D\uFF0C\u5728\u6536\u96C6\u8F93\u5165\u65F6\uFF0C\u5F15\u64CE\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tc`), `\u5BF9\u8C61\u4E0A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `sampleTouch()`), `\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL\u5F00\u53D1\u4EBA\u5458\u63D0\u4F9B\u7684\u5B9E\u73B0\u51FD\u6570\u5E94\u5C06\u8BFB\u53D6\u7684\u89E6\u6478\u5750\u6807\u503C\u5206\u914D\u7ED9x\u548Cy\uFF0C\u5E76\u8FD4\u56DE\u662F\u5426\u68C0\u6D4B\u5230\u89E6\u6478\uFF08\u771F\u6216\u5047\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u5C06\u751F\u6210\u4E00\u4E2A\u5C06TouchController\u63A5\u53E3\u51FD\u6570\u5B9A\u4E49\u4E3A\u7A7A\u7684\u7C7B\u3002 HAL\u5F00\u53D1\u4EBA\u5458\u5FC5\u987B\u586B\u5165\u5177\u4F53\u5B9E\u73B0\u4EE3\u7801\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u591A\u79CD\u5B9E\u73B0\u6B64\u51FD\u6570\u7684\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u5728sampleTouch() \u4E2D\u8F6E\u8BE2`)), `\uFF1A\u901A\u8FC7\u53D1\u9001\u8BF7\u6C42\u5E76\u8F6E\u8BE2\u7ED3\u679C\uFF0C\u4ECE\u786C\u4EF6\u89E6\u6478\u63A7\u5236\u5668(\u901A\u5E38\u4E3AI2C) \u8BFB\u53D6\u89E6\u6478\u72B6\u6001\u3002 This impacts the overall render time of the application as the I2C round-trip is often up to 1 ms during which the graphics engine is blocked.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u57FA\u4E8E\u4E2D\u65AD`)), `\uFF1A\u53E6\u4E00\u79CD\u53EF\u80FD\u662F\u4F7F\u7528\u4E2D\u65AD\u3002 I2C\u8BFB\u53D6\u547D\u4EE4\u7531\u5B9A\u65F6\u5668\u5B9A\u671F\u542F\u52A8\uFF0C\u6216\u4F5C\u4E3A\u5BF9\u89E6\u6478\u786C\u4EF6\u5916\u90E8\u4E2D\u65AD\u7684\u54CD\u5E94\u800C\u542F\u52A8\u3002 \u6309\u94AE\u63A7\u5236\u5668\u63A5\u53E3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `touchgfx::ButtonController`), `\u53EF\u7528\u4E8E\u5C06\u786C\u4EF6\u4FE1\u53F7(\u6309\u94AE\u6216\u5176\u4ED6) \u6620\u5C04\u5230\u5E94\u7528\u7A0B\u5E8F\u4E8B\u4EF6\u3002 \u4EE5\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `(\u7531TouchGFX Generator\u521B\u5EFA) \u4EE3\u7801\u663E\u793A\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `sampleTouch`), `\u5982\u4F55\u67E5\u627E\u5E26RTOS\u7684\u7CFB\u7EDF:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32TouchController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
{
    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)
    {
        x = msg.x;
        y = msg.y;
        return true;
    }
    return false;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C06\u5728TouchGFX Generator\u7684\u4E0B\u4E00\u7AE0\u4E2D\u6982\u8FF0\u6B64\u6587\u4EF6\u7684\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "other-external-events"
  }), `\u5176\u4ED6\u5916\u90E8\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u94AE\u63A7\u5236\u5668\u63A5\u53E3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::ButtonController`), `\u53EF\u7528\u4E8E\u5C06\u786C\u4EF6\u4FE1\u53F7(\u6309\u94AE\u6216\u5176\u4ED6) \u6620\u5C04\u5230\u5E94\u7528\u7A0B\u5E8F\u4E8B\u4EF6\u3002 \u53EF\u5728TouchGFX Designer\u4E2D\u914D\u7F6E\u5BF9\u8FD9\u4E9B\u4E8B\u4EF6\u7684\u53CD\u5E94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u63A5\u53E3\u7684\u4F7F\u7528\u4E0E\u4E0A\u8FF0\u89E6\u6478\u63A7\u5236\u5668\u7C7B\u4F3C\uFF0C\u53EA\u662F\u5E76\u975E\u5FC5\u987B\u5177\u6709ButtonController\u3002 \u8981\u4F7F\u7528\u8BE5\u63A5\u53E3\uFF0C\u8BF7\u521B\u5EFA\u4E00\u4E2A\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), `\u63A5\u53E3\u7684\u7C7B\u5B9E\u4F53\uFF0C\u5E76\u5C06\u53C2\u6570\u4F20\u9012\u81F3HAL\u5B9E\u4F53:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyButtonController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-6}",
    "{3-6}": true
  }), `class MyButtonController : public touchgfx::ButtonController
{
  bool sample(uint8_t& key)
  {
    ... //Sample IO, set key, return true/false
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static MyButtonController bc;
void touchgfx_init()
{
  ...
  hal.initialize();
  hal.setButtonController(&bc);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u5E27\u4E4B\u524D\u90FD\u4F1A\u8C03\u7528ButtonController\u7C7B\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6837\u672C`), `\u65B9\u6CD5\u3002 \u5982\u679C\u8FD4\u56DE\u771F\u503C\uFF0C\u5219\u952E\u503C\u5C06\u88AB\u4F20\u9012\u81F3\u5F53\u524D\u5C4F\u5E55\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleKeyEvent`), `\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u6709\u5173\u5982\u4F55\u5C06\u901A\u8FC7ButtonController\u91C7\u96C6\u7684\u503C\u7528\u4F5C\u8BBE\u8BA1\u5DE5\u5177\u4E2D\u7684\u4EA4\u4E92\u89E6\u53D1\u5668\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../ui-development/designer-user-guide/interactions-view",
    mdxType: "Link"
  }, "\u4EA4\u4E92"), "\u6587\u7AE0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-framebuffer-access"
  }), `\u540C\u6B65\u5E27\u7F13\u51B2\u8BBF\u95EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u4E2A\u6267\u884C\u4F53\u53EF\u80FD\u6D89\u53CA\u5BF9\u5E27\u7F13\u5B58\u533A\u7684\u8BBF\u95EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CPU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u6E32\u67D3\u671F\u95F4\u8BFB\u53D6\u548C\u5199\u5165\u50CF\u7D20`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u786C\u4EF6\u8F85\u52A9\u6E32\u67D3\u671F\u95F4\u8BFB\u53D6\u548C\u5199\u5165\u50CF\u7D20`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u4F20\u8F93\u5230\u5E76\u884CRGB\u663E\u793A\u5668\u671F\u95F4\u8BFB\u53D6\u50CF\u7D20`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u4F20\u8F93\u5230SPI\u663E\u793A\u5668\u671F\u95F4\u8BFB\u53D6\u50CF\u7D20`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u63A5\u53E3\u6765\u540C\u6B65\u5E27\u7F13\u5B58\u8BBF\u95EE\uFF0C\u540C\u65F6\u5E0C\u671B\u8BBF\u95EE\u5E27\u7F13\u5B58\u7684\u5916\u8BBE(\u5982DMA2D) \u4E5F\u5FC5\u987B\u6267\u884C\u76F8\u540C\u64CD\u4F5C\u3002 \u5E38\u89C4\u8BBE\u8BA1\u662F\u4F7F\u7528\u4FE1\u53F7\u91CF\u6765\u4FDD\u8BC1\u5BF9\u5E27\u7F13\u51B2\u7684\u8BBF\u95EE\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u540C\u6B65\u673A\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u8868\u663E\u793A\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u7C7B(OSWrappers.cpp) \u4E2D\u7684\u51FD\u6570\u5217\u8868\uFF0C\u8FD9\u4E9B\u51FD\u6570\u53EF\u7531TouchGFX Generator\u751F\u6210\u6216\u7531\u7528\u6237\u624B\u52A8\u751F\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `takeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7531\u56FE\u5F62\u5F15\u64CE\u8C03\u7528\uFF0C\u4EE5\u83B7\u5F97\u5BF9\u5E27\u7F13\u5B58\u7684\u72EC\u5360\u8BBF\u95EE\u3002 \u8FD9\u5C06\u963B\u585E\u5F15\u64CE\uFF0C\u76F4\u81F3DMA2D\u5B8C\u6210\uFF08\u5982\u679C\u6B63\u5728\u8FD0\u884C\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `tryTakeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786E\u4FDD\u5DF2\u9501\u5B9A\u3002 \u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u963B\u585E\u5F15\u64CE\uFF0C\u4F46\u5BF9takeFrameBufferSemaphore\u7684\u4E0B\u6B21\u8C03\u7528\u5C06\u88AB\u963B\u585E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u89E3\u9664\u5E27\u7F13\u5B58\u9501\u5B9A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphoreFromISR`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4ECE\u4E2D\u65AD\u4E0A\u4E0B\u6587\u89E3\u9664\u5E27\u7F13\u5B58\u9501\u5B9A`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u53EF\u751F\u6210\u4F7F\u7528OSWrappers\u63A5\u53E3\u6765\u540C\u6B65\u7684ChromART\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u4EE5\u53CA\u6839\u636ERTOS\u9009\u62E9\u6765\u6267\u884C\u8BE5\u540C\u6B65\u7684\u51FD\u6570\u5B9E\u73B0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-the-next-available-framebuffer-area"
  }), `\u62A5\u544A\u4E0B\u4E00\u4E2A\u53EF\u7528\u7684\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65E0\u8BBA\u91C7\u7528\u54EA\u79CD\u6E32\u67D3\u7B56\u7565\uFF0CTouchGFX Engine\u90FD\u5FC5\u987B\u77E5\u9053\u5728\u6BCF\u4E2A\u65F6\u95F4\u7247\u4E2D\u5E94\u5C06\u50CF\u7D20\u6E32\u67D3\u5230\u54EA\u4E2A\u5B58\u50A8\u533A\u3002 \u4F7F\u7528\u5355\u5E27\u7F13\u5B58\u6216\u53CC\u5E27\u7F13\u5B58\u6218\u7565\u65F6\uFF0CTouchGFX Engine\u5C06\u6839\u636E\u5E27\u7F13\u5B58\u7684\u5168\u5BBD\u3001\u9AD8\u5EA6\u548C\u4F4D\u5BBD\u5C06\u50CF\u7D20\u6570\u636E\u5199\u5165\u5B58\u50A8\u533A\u3002 \u56FE\u5F62\u5F15\u64CE\u8D1F\u8D23\u53CC\u7F13\u5B58\u8BBE\u7F6E\u4E2D\u4E24\u4E2A\u5E27\u7F13\u5B58\u4E4B\u95F4\u7684\u4EA4\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5C06\u5BF9\u5E27\u7F13\u5B58\u7684\u8BBF\u95EE\u9650\u5236\u4E3A\u90E8\u5206\u5E27\u7F13\u5B58\u3002 \u53EF\u5728HAL\u5B50\u7C7B\u4E2D\u91CD\u65B0\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getTFTCurrentLine()`), `\u65B9\u6CD5\u3002 \u8FD4\u56DE\u4E0A\u9762\u7528\u4E8E\u56FE\u5F62\u5F15\u64CE\u7ED8\u5236\u800C\u4FDD\u5B58\u7684\u884C\u53F7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u90E8\u5206\u5E27\u7F13\u5B58\u65F6\uFF0C\u5F00\u53D1\u4EBA\u5458\u5B9A\u4E49TouchGFX Engine\u5728\u6E32\u67D3\u65F6\u5C06\u4F7F\u7528\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5B58\u50A8\u5668\u5757\u3002 \u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\u6B64\u5904`), `\u9605\u8BFB\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u652F\u6301\u6240\u6709\u5E27\u7F13\u51B2\u7B56\u7565\u7684\u914D\u7F6E\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "perform-render-operations"
  }), `\u6267\u884C\u6E32\u67D3\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u548C\u663E\u793A\u56FE\u5F62\u5F88\u5C11\u662F\u5E94\u7528\u7A0B\u5E8F\u7684\u552F\u4E00\u76EE\u7684\u3002 \u5176\u4ED6\u4EFB\u52A1\u4E5F\u9700\u8981\u4F7F\u7528CPU\u3002 TouchGFX\u7684\u76EE\u6807\u4E4B\u4E00\u5C3D\u53EF\u80FD\u5C11\u5730\u5360\u7528CPU\u8D44\u6E90\u6765\u7ED8\u5236\u7528\u6237\u754C\u9762\u3002 HAL\u7C7B\u53EF\u5BF9\u8BB8\u591ASTM32\u5FAE\u63A7\u5236\u5668(\u6216\u5176\u4ED6\u786C\u4EF6\u529F\u80FD) \u4E0A\u7684DMA2D\u529F\u80FD\u8FDB\u884C\u62BD\u8C61\uFF0C\u5E76\u4F7F\u5176\u53EF\u7528\u4E8E\u56FE\u5F62\u5F15\u64CE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C06\u4F4D\u56FE\u4E4B\u7C7B\u7684\u8D44\u6E90\u6E32\u67D3\u5230\u5E27\u7F13\u51B2\u65F6\uFF0CTouchGFX Engine\u68C0\u67E5HAL\u662F\u5426\u5177\u6709\u5C06\u90E8\u5206\u6216\u5168\u90E8\u4F4D\u56FE\u4F20\u8F93\u5230\u5E27\u7F13\u5B58\u7684\u529F\u80FD\u3002 \u5982\u679C\u6709\u6B64\u529F\u80FD\uFF0C\u5219\u5C06\u7ED8\u56FE\u64CD\u4F5C\u59D4\u6258\u7ED9HAL\uFF0C\u800C\u4E0D\u662F\u7531CPU\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u8C03\u7528\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getBlitCaps()`), `\uFF0C\u4EE5\u83B7\u53D6\u786C\u4EF6\u529F\u80FD\u63CF\u8FF0\u3002 HAL\u5B50\u7C7B\u53EF\u91CD\u65B0\u5B9E\u73B0\u6B64\u8C03\u7528\uFF0C\u4EE5\u6DFB\u52A0\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u5728\u7ED8\u5236\u7528\u6237\u754C\u9762\u65F6\u8C03\u7528HAL\u7C7B\u4E0A\u7684\u64CD\u4F5C(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::blitCopy`), `) \uFF0C\u5E76\u5BF9DMA\u64CD\u4F5C\u6392\u961F\u3002 \u5982\u679CHAL\u65E0\u6CD5\u62A5\u544A\u6240\u9700\u7684\u529F\u80FD\uFF0C\u5219\u56FE\u5F62\u5F15\u64CE\u5C06\u9000\u800C\u4F7F\u7528\u8F6F\u4EF6\u65B9\u5F0F\u6765\u6E32\u67D3\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, ` \u8BB8\u591ASTM32 MCU\u90FD\u5177\u6709ChromART\u82AF\u7247\uFF0C\u5728\u6267\u884Calpha\u50CF\u7D20\u6DF7\u5408\u65F6\uFF0C\u53EF\u5C06\u6570\u636E\u4ECE\u5916\u90E8Flash\u5B58\u50A8\u5668\u7B49\u79FB\u52A8\u5230\u5E27\u7F13\u5B58\u3002 \u5BF9\u4E8E\u8BB8\u591AMCU\uFF0CTouchGFX Generator\u53EF\u751F\u6210ChromART\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u8BE5\u9A71\u52A8\u7A0B\u5E8F\u4F7F\u7528ChromART\u82AF\u7247\u6765\u589E\u52A0\u51E0\u4E2A\u201C\u5757\u4F4D\u4F20\u8F93\u201D\u64CD\u4F5C\u529F\u80FD\u3002 `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handle-framebuffer-transfer-to-display"
  }), `\u5904\u7406\u5230\u663E\u793A\u5668\u7684\u5E27\u7F13\u51B2\u4F20\u8F93`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u5C06\u5E27\u7F13\u5B58\u5185\u5BB9\u4F20\u8F93\u5230\u663E\u793A\u5668\uFF0CTouchGFX AL\u7ECF\u5E38\u4F7F\u7528\u201C\u533A\u57DF\u6E32\u67D3\u5B8C\u6210\u201D\u94A9\u5B50\u3002 \u4E00\u65E6\u90E8\u5206\u5E27\u7F13\u5B58\u6E32\u67D3\u5B8C\u6210\uFF0C\u5F15\u64CE\u5C31\u4F1A\u5411AL\u53D1\u9001\u4FE1\u53F7\u3002 AL\u53EF\u9009\u62E9\u5982\u4F55\u5C06\u6B64\u5E27\u7F13\u5B58\u90E8\u5206\u5185\u5BB9\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-of-area-complete"
  }), `\u533A\u57DF\u6E32\u67D3\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4EE3\u7801\u4E2D\uFF0C\u6B64\u94A9\u5B50\u4E3A\u865A\u62DF\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5E26\u6709LTDC\u63A7\u5236\u5668\u7684STM32\u5FAE\u63A7\u5236\u5668\u4E0A\uFF0C\u6211\u4EEC\u65E0\u9700\u5728\u6BCF\u6B21\u6E32\u67D3\u540E\u6267\u884C\u4EFB\u4F55\u7528\u4E8E\u5E27\u7F13\u5B58\u4F20\u8F93\u7684\u64CD\u4F5C\u3002 \u5728LTDC\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u8BE5\u4F20\u8F93\u5C06\u4EE5\u7ED9\u5B9A\u7684\u9891\u7387\u8FDE\u7EED\u53D1\u751F\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5C06\u6B64\u65B9\u6CD5\u7684\u5B9E\u73B0\u7559\u7A7A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5176\u4ED6\u663E\u793A\u5668\u7C7B\u578B(\u5982SPI\u62168080) \uFF0C\u60A8\u9700\u8981\u624B\u52A8\u5B9E\u73B0\u5E27\u7F13\u5B58\u5185\u5BB9\u4F20\u8F93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u51FD\u6570\u7684\u5B9E\u73B0\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u53D1\u8D77\u5411\u5E26\u6709GRAM\u7684\u663E\u793A\u5668\u7684\u5E27\u7F13\u51B2\u533A\u57DF\u7684\u624B\u52A8\u4F20\u8F93\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-9}",
    "{9-9}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)
{
    HAL::flushFrameBuffer(rect); //call superclass

    //start transfer if not running already!
    if (!IsTransmittingData())
    {
        const uint8_t* pixels = ...; // Calculate pixel address
        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
    else
    {
       ... // Queue rect for later or wait here
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u901A\u8BFB\u65B9\u6848\u4EE5\u83B7\u53D6\u6709\u5173\u5982\u4F55\u652F\u6301\u5404\u79CD\u663E\u793A\u63A5\u53E3\u7684\u5177\u4F53\u793A\u4F8B\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);