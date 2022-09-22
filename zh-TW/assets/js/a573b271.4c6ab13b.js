"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4131],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


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

/***/ 69306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./components/Figure.js
var Figure = __webpack_require__(44035);
// EXTERNAL MODULE: ./components/Caution.js
var Caution = __webpack_require__(70814);
// EXTERNAL MODULE: ./components/Tip.js
var Tip = __webpack_require__(37793);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/Highlight.js
var Highlight = __webpack_require__(88678);
;// CONCATENATED MODULE: ./components/Try.js


const icon = /* @__PURE__ */ react.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  viewBox: "0 0 14 16"
}, /* @__PURE__ */ react.createElement("path", {
  fillRule: "evenodd",
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class Try extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement(Highlight/* default */.Z, {
      color: "var(--highlight-color-try)",
      header: "Things to try",
      type: "try",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ var components_Try = (Try);

// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx
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
  id: "custom-widgets",
  title: "\u81EA\u8A02\u5C0F\u90E8\u4EF6"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "id": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "title": "\u81EA\u8A02\u5C0F\u90E8\u4EF6",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-widgets",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-widgets",
    "title": "\u81EA\u8A02\u5C0F\u90E8\u4EF6"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5FEB\u53D6\u9EDE\u9663\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  },
  "next": {
    "title": "Canvas Widgets",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  }
};
const assets = {};








const toc = [{
  value: "\u81EA\u8A02\u5C0F\u90E8\u4EF6\u6CD5\u7684\u4F7F\u7528\u5834\u5408",
  id: "when-to-use-the-custom-widget-approach",
  level: 2
}, {
  value: "TouchGFX Designer\u4E2D",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "\u7A0B\u5F0F\u78BC\u4E2D",
  id: "in-code",
  level: 2
}, {
  value: "\u60A8\u81EA\u5DF1\u7684\u81EA\u8A02\u5C0F\u90E8\u4EF6",
  id: "your-own-custom-widget",
  level: 3
}, {
  value: "\u90E8\u5206\u7E6A\u88FD",
  id: "partial-drawing",
  level: 3
}, {
  value: "\u5BE6\u5FC3\u5340\u57DF",
  id: "solid-area",
  level: 3
}, {
  value: "\u7BC4\u4F8B\u539F\u59CB\u7A0B\u5F0F\u78BC",
  id: "example-source-code",
  level: 3
}, {
  value: "\u4FEE\u6539\u6A19\u6E96\u5C0F\u90E8\u4EF6/\u5BB9\u5668",
  id: "modifying-standard-widgetscontainers",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u5275\u5EFA\u61C9\u7528\u6642\uFF0C\u60A8\u53EF\u80FD\u9700\u8981TouchGFX\u4E2D\u672A\u5305\u542B\u7684\u5C0F\u90E8\u4EF6\u3002 TouchGFX\u63D0\u4F9B\u4E86\u5E7E\u7A2E\u53EF\u4EE5\u7528\u4F86\u5275\u5EFA\u5716\u5F62\u5143\u7D20\u7684\u65B9\u5F0F\u3002 \u6700\u7C21\u55AE\u7684\u65B9\u5F0F\u662F\u4F7F\u7528`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-containers"
  }), `\u81EA\u8A02\u5BB9\u5668\u6CD5`), `\uFF0C\u60A8\u53EF\u4EE5\u5C07\u73FE\u6709\u7684\u5C0F\u90E8\u4EF6\u7D44\u5408\u6210\u60A8\u81EA\u5DF1\u7684\u5C0F\u90E8\u4EF6\u3002 \u4F46\u662F\uFF0C\u672C\u6587\u5C07\u4ECB\u7D39\u4E00\u7A2E\u66F4\u597D\u7684\u65B9\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u7528\u5B83\u771F\u6B63\u5730\u5275\u5EFA\u4E00\u500B\u53EF\u5168\u9762\u63A7\u5236\u5F71\u50CF\u7DE9\u885D\u7684\u5C0F\u90E8\u4EF6\uFF0C\u5F9E\u800C\u80FD\u5920\u7CBE\u78BA\u5730\u7E6A\u88FD\u60A8\u60F3\u8981\u7684\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "when-to-use-the-custom-widget-approach"
  }), `\u81EA\u8A02\u5C0F\u90E8\u4EF6\u6CD5\u7684\u4F7F\u7528\u5834\u5408`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5275\u5EFA\u81EA\u8A02\u5C0F\u90E8\u4EF6\u4E0D\u662F\u5275\u5EFA\u5C0F\u90E8\u4EF6\u7684\u6700\u5178\u578B\u65B9\u6CD5\u3002 \u5982\u679C\u7B26\u5408\u60A8\u7684\u9700\u6C42\uFF0C\u6700\u597D\u9078\u64C7\u81EA\u8A02\u5BB9\u5668\u6CD5\uFF0C\u4F46\u6709\u6642\u6B64\u6CD5\u4E26\u4E0D\u5920\u7528\u3002 \u7576\u60A8\u9700\u8981\u5168\u9762\u63A7\u5236\u5F71\u50CF\u7DE9\u885D\u6642\uFF0C\u60A8\u9700\u8981\u4F7F\u7528\u81EA\u8A02\u5C0F\u90E8\u4EF6\u6CD5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0B\u9762\u662F\u5E7E\u500B\u53EF\u4EE5\u4F7F\u7528\u81EA\u8A02\u5C0F\u90E8\u4EF6\u6CD5\u5275\u5EFA\u7684\u5C0F\u90E8\u4EF6\u7684\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u8910\u8272\u6FFE\u93E1`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u66FC\u5FB7\u52C3\u7F85\u5206\u5F62\u5C0F\u90E8\u4EF6`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u986F\u793A\u6A94\u4E2D\u8CC7\u6599\u7684\u5C0F\u90E8\u4EF6\uFF0C\u5982gif\u52D5\u756B\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\u4E2D`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX Designer\u76EE\u524D\u4E0D\u652F\u63F4\u81EA\u8A02\u5C0F\u90E8\u4EF6\u7684\u5275\u5EFA\u3002 \u56E0\u6B64\uFF0C\u60A8\u5C07\u9700\u8981\u624B\u52D5\u5BEB\u5165\u81EA\u8A02\u5C0F\u90E8\u4EF6\u7684\u7A0B\u5F0F\u78BC\uFF08\u8ACB\u53C3\u8003\u672C\u6587\u7684\u5269\u9918\u90E8\u5206\u4EE5\u77AD\u89E3\u505A\u6CD5\uFF09\uFF0C\u7136\u5F8C\u5728\u8996\u5716\u7684\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u90E8\u5206\u63D2\u5165\u5C0F\u90E8\u4EF6\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `\u7A0B\u5F0F\u78BC\u4E2D`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u901A\u904E\u64F4\u5C55`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `\u5C0F\u90E8\u4EF6`), `\u985E\u5275\u5EFA\u81EA\u5DF1\u7684\u81EA\u8A02\u5C0F\u90E8\u4EF6\u3002 \u9019\u6A23\u505A\u6703\u52A0\u5927\u7528\u6236\u7684\u5DE5\u4F5C\u91CF\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u5168\u9762\u63A7\u5236\u5C0F\u90E8\u4EF6\u7E6A\u88FD\u7684\u6240\u6709\u50CF\u7D20\u3002 \u60A8\u7684\u81EA\u8A02\u5C0F\u90E8\u4EF6\u4E0D\u4E00\u5B9A\u8981\u5229\u7528\u4EFB\u4F55\u73FE\u6709\u5C0F\u90E8\u4EF6\uFF0C\u800C\u662F\u53EF\u4EE5\u901A\u904E\u6307\u5B9A\u50CF\u7D20\u984F\u8272\u4F86\u5B9A\u7FA9\u61C9\u5982\u4F55\u7E6A\u88FD\u3002 \u81EA\u8A02\u5C0F\u90E8\u4EF6\u6CD5\u7684\u5B58\u5132\u7A7A\u9593\u5360\u7528\u91CF\u901A\u5E38\u8F03\u5C0F\uFF0C\u9019\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\u975E\u5E38\u91CD\u8981\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u81EA\u8A02\u5C0F\u90E8\u4EF6\u7684\u4E00\u500B\u7BC4\u4F8B\u662F\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u3002 \u9019\u500B\u7279\u6B8A\u7684\u5C0F\u90E8\u4EF6\u662F\u500B\u5F88\u597D\u7684\u4F8B\u5B50\uFF0C\u6211\u5011\u5C07\u5728\u4E0B\u9762\u4E00\u7BC0\u4E2D\u8A73\u7D30\u4ECB\u7D39\u5982\u4F55\u5275\u5EFA\u5B83\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u662F\u9ED1\u767D\u50CF\u7D20\u7684NxN\u77E9\u9663\u3002 \u5C0F\u90E8\u4EF6\u7684\u5927\u5C0F\u548C\u6BCF\u500B\u50CF\u7D20\u7684\u984F\u8272\u5C07\u5728\u57F7\u884C\u6642\u9593\u78BA\u5B9A\uFF0C\u4E26\u53D6\u6C7A\u65BC\u4E8C\u7DAD\u78BC\u8CC7\u6599\u7269\u4EF6\u4E2D\u7684\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0B\u9762\u662F\u5169\u500B\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u53EF\u80FD\u5916\u89C0\u7684\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-examples.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u7BC4\u4F8B"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u53EF\u4EE5\u7528\u81EA\u8A02\u5BB9\u5668\u6CD5\u5275\u5EFA\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\uFF0C\u4F7F\u5BB9\u5668\u6709n*n\u500B\u9ED1\u6216\u767D\u65B9\u584A\u4F5C\u70BA\u5B50\u5BB9\u5668\u3002 \u4F46\u662F\uFF0C\u9019\u6703\u4F54\u7528\u8A31\u591A\u5B58\u5132\u7A7A\u9593\uFF0C\u4E26\u4E14\u5F88\u53EF\u80FD\u4E0D\u5920\u9AD8\u6548\u6216\u9748\u6D3B\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "\u5275\u5EFA\u6A19\u6E96 ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "touchgfx::Button"), " \uFF08\u96A8\u6846\u67B6\u63D0\u4F9B\uFF09\u4F5C\u70BA\u81EA\u8A02\u5C0F\u90E8\u4EF6\uFF0C\u800C\u4E0D\u662F\u81EA\u8A02\u5BB9\u5668\u3002 \u9019\u6A23\u53EF\u4EE5\u7BC0\u7701\u87A2\u5E55\u4E0A\u6BCF\u500B\u6309\u9215\u7684\u5B58\u5132\u7A7A\u9593\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "your-own-custom-widget"
  }), `\u60A8\u81EA\u5DF1\u7684\u81EA\u8A02\u5C0F\u90E8\u4EF6`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u70BA\u4E86\u5275\u5EFA\u64F4\u5C55`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `\u5C0F\u90E8\u4EF6`), `\u985E\u7684\u5C0F\u90E8\u4EF6\uFF0C\u60A8\u9700\u8981\u5BA3\u544A\u5169\u9EDE\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u5C0F\u90E8\u4EF6\u7684\u7E6A\u88FD\u65B9\u5F0F`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u5C0F\u90E8\u4EF6\u7684\u5BE6\u5FC3\u90E8\u5206`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "partial-drawing"
  }), `\u90E8\u5206\u7E6A\u88FD`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4EFB\u4F55\u5C0F\u90E8\u4EF6\u548C\u81EA\u8A02\u5C0F\u90E8\u4EF6\u90FD\u9700\u8981\u652F\u63F4\u90E8\u5206\u7E6A\u88FD\u3002 \u9019\u610F\u5473\u8457\u5C0F\u90E8\u4EF6\u61C9\u80FD\u53EA\u7E6A\u88FD\u81EA\u8EAB\u7684\u4E00\u90E8\u5206\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5176\u4E2D\u7684\u539F\u56E0\u6709\u5169\u9EDE\u3002 \u901A\u5E38\u4E0D\u4E00\u5B9A\u8981\u91CD\u65B0\u7E6A\u88FD\u6574\u500B\u87A2\u5E55\uFF0C\u800C\u662F\u53EA\u9700\u7E6A\u88FD\u4E00\u90E8\u5206\u3002 TouchGFX\u7684\u6F14\u7B97\u6CD5\u53EF\u4EE5\u5C07\u5168\u5C4F\u7E6A\u88FD\u5206\u5272\u6210\u591A\u500B\u90E8\u5206\u7E6A\u88FD\uFF0C\u4EE5\u4F7F\u7E6A\u88FD\u50CF\u7D20\u7684\u7E3D\u6578\u6700\u5C0F\u5316\u3002 \u7136\u5F8C\uFF0C\u87A2\u5E55\u7684\u90E8\u5206\u7E6A\u88FD\u53EF\u80FD\u8981\u6C42\u5C0F\u90E8\u4EF6\u53EA\u7E6A\u88FD\u81EA\u8EAB\u7684\u4E00\u90E8\u5206\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4F8B\u5982\uFF0C\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u9700\u80FD\u5920\u652F\u6301\u53EA\u7E6A\u88FD\u81EA\u8EAB\u7684highlighted \u90E8\u5206\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u90E8\u5206\u7E6A\u88FD"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u7A0B\u5F0F\u78BC\u4E2D\u5BE6\u73FE\u9019\u4E00\u9EDE\u7684\u65B9\u6CD5\u662F\u91CD\u5BEB`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), `\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual void draw(const touchgfx::Rect& invalidatedArea) const
{
    //run through the pixels of the invalidated area
    //draw a black pixel if the qr data object has a value at this position
    //draw a white pixel otherwise
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `invalidatedArea`), `\u662F\u5C0F\u90E8\u4EF6\u4E2D\u9700\u8981\u66F4\u65B0\u7684\u90A3\u90E8\u5206\u3002 \u5728\u6211\u5011\u7684\u4E8C\u7DAD\u78BC\u7BC4\u4F8B\u4E2D\uFF0C\u7121\u6548\u5340\u57DF\u662Fhighlighted \u5340\u3002 \u8A72\u5340\u57DF\u8868\u793A\u70BA\u76F8\u5C0D\u4E8E\u5C0F\u90E8\u4EF6\u5DE6\u4E0A\u89D2\u7684\u5EA7\u6A19\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u5C0F\u90E8\u4EF6\u7684\u8CAC\u4EFB\u662F\u5728\u7121\u6548\u5340\u57DF\u5167\u7E6A\u88FD\u3002 \u5982\u679C\u5728\u7121\u6548\u5340\u57DF\u5916\u7E6A\u88FD\uFF0C\u87A2\u5E55\u7684\u884C\u70BA\u5C07\u6703\u51FA\u73FE\u932F\u8AA4\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "\u7E6A\u88FD ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "\u65B9\u6CD5"), " \u662F ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const"), " \uFF0C\u56E0\u70BA\u6700\u512A\u7E6A\u88FD\u6F14\u7B97\u6CD5\u53EF\u4EE5\u5C07\u5C0F\u90E8\u4EF6\u7684\u7E6A\u88FD\u5206\u5272\u6210\u591A\u500B\u547C\u53EB\u9032\u884C\u7E6A\u88FD\u3002 \u7E6A\u88FD ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const"), " \u78BA\u4FDD\u5C0F\u90E8\u4EF6\u5728\u591A\u6B21\u7E6A\u88FD\u57F7\u884C\u4E4B\u9593\u4E0D\u767C\u751F ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "\u65B9\u6CD5"), " \u66F4\u65B0\u7B49\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "solid-area"
  }), `\u5BE6\u5FC3\u5340\u57DF`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6B64\u5916\uFF0C\u5C0F\u90E8\u4EF6\u9700\u80FD\u5920\u5831\u544A\u81EA\u8EAB\u591A\u5927\u4E00\u90E8\u5206\u662F\u5BE6\u5FC3\u7684\u3002 \u5BE6\u5FC3\u610F\u5473\u8457\u60A8\u4E0D\u80FD\u5728\u87A2\u5E55\u4E0A\u770B\u5230\u5B83\u5F8C\u65B9\u7684\u5167\u5BB9\u3002 \u4F8B\u5982\uFF0C\u6A19\u6E96\u7D05\u8272\u65B9\u584A\u662F\u5B8C\u5168\u5BE6\u5FC3\u7684\uFF0C\u800C\u4E00\u5E45alpha \u503C\u70BA50%\u7684\u5716\u50CF\u5247\u5B8C\u5168\u975E\u5BE6\u5FC3\uFF1B\u60A8\u53EF\u4EE5\u770B\u5230\u5B83\u5F8C\u65B9\u7684\u4E00\u5207\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5BE6\u5FC3\u5C0F\u90E8\u4EF6\u80FD\u4F7FTouchGFX\u52A0\u5FEB\u7E6A\u88FD\u9032\u5EA6\u3002 \u7531\u65BC\u6211\u5011\u7121\u9700\u5728\u5BE6\u5FC3\u5C0F\u90E8\u4EF6\u4E0B\u65B9\u7E6A\u88FD\u5C0F\u90E8\u4EF6\uFF0C\u56E0\u6B64\u8981\u7E6A\u88FD\u7684\u50CF\u7D20\u8F03\u5C11\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u70BA\u4E86\u5831\u544A\u7A0B\u5F0F\u78BC\u4E2D\u7684\u5BE6\u5FC3\u5340\u57DF\uFF0C\u91CD\u5BEB`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), `\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const;
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5F97\u5230\u7684\u4E8C\u7DAD\u78BC\u5C07\u662F\u5B8C\u5168\u5BE6\u5FC3\u7684\u3002 \u60A8\u5C07\u4E0D\u80FD\u770B\u5230\u9ED1\u767D\u50CF\u7D20\u5F8C\u7684\u4EFB\u4F55\u5167\u5BB9\u3002 \u56E0\u6B64\uFF0C\u6211\u5011\u8B93\u8A72\u65B9\u6CD5\u8FD4\u56DE\u4E00\u500B\u77E9\u5F62\uFF0C\u5176\u5927\u5C0F\u7B49\u65BC\u5C0F\u90E8\u4EF6\u7684\u5B8C\u6574\u5C3A\u5BF8\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "example-source-code"
  }), `\u7BC4\u4F8B\u539F\u59CB\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6211\u5011\u6700\u7D42\u5F97\u5230\u4E00\u500B\u61C9\u7528\u548C\u4E00\u500B\u9019\u6A23\u7684\u5C0F\u90E8\u4EF6 - \u5177\u9AD4\u53D6\u6C7A\u65BC\u63D0\u4F9B\u7684\u8CC7\u6599\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\u87A2\u5E55\u622A\u5716"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5C0F\u90E8\u4EF6\u7684\u5B8C\u6574\u7A0B\u5F0F\u78BC\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "gui/include/gui/common/QRCodeWidget.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
#ifndef QR_CODE_WIDGET_HPP
#define QR_CODE_WIDGET_HPP

#include <touchgfx/widgets/Widget.hpp>

class QRCodeWidget : public touchgfx::Widget
{
public:
    QRCodeWidget();

    virtual void draw(const touchgfx::Rect& invalidatedArea) const;
    virtual touchgfx::Rect getSolidRect() const;

    void setQRCodeData(QRCodeData* data);
    void setScale(uint8_t s);

private:
    void updateSize();

    QRCodeData* data;
    uint8_t scale;
};
#endif
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u6A19\u982D\u6A94\u4E2D\uFF0C\u5C07\u5C0F\u90E8\u4EF6\u5B9A\u7FA9\u70BA`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Widget`), `\u985E\u7684\u64F4\u5C55\u3002 \u91CD\u5BEB`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), `\u548C`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), `\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u5B9A\u7FA9\u5982\u4F55\u7E6A\u88FD\u5C0F\u90E8\u4EF6\u3002 \u5BA3\u544A\u8A2D\u7F6E\u4E8C\u7DAD\u78BC\u8CC7\u6599\u548C\u8A2D\u7F6E\u4E8C\u7DAD\u78BC\u6BD4\u4F8B\u56E0\u6578\u7684\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "gui/src/common/QRCodeWidget.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/QRCodeWidget.hpp>

QRCodeWidget::QRCodeWidget() :
    data(0),
    scale(1)
{
}

void QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const
{
    if (!data)
    {
        return;
    }

    touchgfx::Rect absolute = getAbsoluteRect();

    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();

    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)
    {
        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)
        {
            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =
              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;
        }
    }

    touchgfx::HAL::getInstance()->unlockFrameBuffer();
}

touchgfx::Rect QRCodeWidget::getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}

void QRCodeWidget::setQRCodeData(QRCodeData* qrCode)
{
    data = qrCode;
    updateSize();
}

void QRCodeWidget::setScale(uint8_t s)
{
    scale = s;
    updateSize();
}

void QRCodeWidget::updateSize()
{
    if (data)
    {
        setWidth(data->getSize() * scale);
        setHeight(data->getSize() * scale);
    }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u539F\u59CB\u6A94\u6848\u5B9A\u7FA9\u4E86`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), `\u65B9\u6CD5\u3002 \u6B64\u65B9\u6CD5\u904D\u6B77\u7121\u6548\u5340\u57DF\u4E2D\u7684\u6BCF\u500B\u50CF\u7D20\uFF0C\u4E26\u57FA\u65BC\u8CC7\u6599\u7269\u4EF6\u7684\u5167\u5BB9\u548C\u6BD4\u4F8B\u56E0\u6578\u78BA\u5B9A\u5F71\u50CF\u7DE9\u885D\u7684\u984F\u8272\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), `\u65B9\u6CD5\u5831\u544A\u5C0F\u90E8\u4EF6\u70BA\u5B8C\u5168\u5BE6\u5FC3\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u8ACB\u6CE8\u610F\uFF0C\u6211\u5011\u5C07\u5F71\u50CF\u7DE9\u885D\u4F5C\u70BA ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "\u65B9\u6CD5"), " \u65B9\u6CD5\u7684\u4E00\u90E8\u5206\u9032\u884C\u9396\u5B9A\u548C\u89E3\u9396\u3002 \u9019\u6A23\u505A\u7684\u76EE\u7684\u662F\u5728\u6211\u5011\u958B\u59CB\u7E6A\u88FD\u6642\u78BA\u4FDDDMA\u5B8C\u6210\u4E86\u7E6A\u88FD\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u7A0B\u5F0F\u78BC\u9084\u4F7F\u7528\u5C0F\u985E/\u4ECB\u9762\u5B58\u53D6\u4E8C\u7DAD\u78BC\u8CC7\u6599\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class QRCodeData
{
public:
    uint8_t getSize();
    bool at(uint8_t x, uint8_t y);
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "\u4E0B\u8F09\u4E26\u67E5\u770B", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/qr-code.zip",
    target: "_blank",
    mdxType: "Link"
  }, "QRCode"), "\u548C", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/lens.zip",
    target: "_blank",
    mdxType: "Link"
  }, "Lens"), "\u5C0F\u90E8\u4EF6\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_Try, {
    mdxType: "Try"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\u4FEE\u6539\u4E8C\u7DAD\u78BC\u5C0F\u90E8\u4EF6\uFF0C\u4F7F\u767D\u8272\u50CF\u7D20\u5B8C\u5168\u900F\u660E\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\u5275\u5EFA\u986F\u793A\u8910\u8272\u6FFE\u93E1\u3001\u66FC\u5FB7\u52C3\u7F85\u5206\u5F62\u3001gif\u5716\u50CF\u6216\u5176\u4ED6\u5167\u5BB9\u7684\u81EA\u8A02\u5C0F\u90E8\u4EF6\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\u601D\u8003\u4F7F\u7528\u81EA\u8A02\u5BB9\u5668\u6700\u5BB9\u6613\u5BE6\u73FE\u54EA\u4E9B\u5C0F\u90E8\u4EF6\uFF0C\u4EE5\u53CA\u4F7F\u7528\u81EA\u8A02\u5C0F\u90E8\u4EF6\u6CD5\u6700\u5BB9\u6613\u5BE6\u73FE\u54EA\u4E9B\u5C0F\u90E8\u4EF6\u3002")), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "modifying-standard-widgetscontainers"
  }), `\u4FEE\u6539\u6A19\u6E96\u5C0F\u90E8\u4EF6/\u5BB9\u5668`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u5B89\u88DDTouchGFX\u6642\uFF0C\u5305\u542B\u4E86\u6A19\u6E96\u5C0F\u90E8\u4EF6\u7684\u539F\u59CB\u7A0B\u5F0F\u78BC\u3002 \u70BA\u4E86\u9069\u61C9\u61C9\u7528\u9700\u6C42\uFF0C\u9019\u4E9B\u4E5F\u90FD\u53EF\u4EE5\u9032\u884C\u4FEE\u6539\u3002 \u6A19\u6E96\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668\u7684\u539F\u59CB\u7A0B\u5F0F\u78BC\u4F4D\u65BC\u4EE5\u4E0B\u8CC7\u6599\u593E\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u70BA\u4E86\u7DAD\u6301\u5411\u5F8C\u76F8\u5BB9\uFF0C\u6838\u5FC3\u5EAB\u5305\u542B\u6A19\u6E96\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668\u7684\u5DF2\u7DE8\u8B6F\u7248\u672C\u3002 \u56E0\u6B64\uFF0C\u4E26\u975E\u5FC5\u9808\u5728\u5C08\u6848\u4E2D\u7DE8\u8B6F\u9019\u4E9B\u6A94\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u4E0D\u5EFA\u8B70\u76F4\u63A5\u4FEE\u6539\u6A19\u6E96\u5C0F\u90E8\u4EF6/\u5BB9\u5668"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u539F\u59CB\u7A0B\u5F0F\u78BC\u4E3B\u8981\u7528\u4F5C\u9748\u611F\u4F86\u6E90\uFF0C\u4EE5\u53CA\u4E00\u7A2E\u5B78\u7FD2TouchGFX\u5C0F\u90E8\u4EF6\u5167\u90E8\u5DE5\u4F5C\u6A5F\u5236\u7684\u65B9\u5F0F\u3002 \u5982\u9700\u4E00\u4E9B\u4E0D\u540C\u65BC\u6A19\u6E96\u5BE6\u73FE\u7684\u884C\u70BA\uFF0C\u53EF\u901A\u904E\u5B50\u985E\u5316\u6216\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668\u4F86\u5BE6\u73FE\uFF0C\u9019\u4E5F\u662F\u63A8\u85A6\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u63A8\u85A6\u539F\u56E0\u6709\u5169\u500B\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u9996\u5148\uFF0C\u7531\u65BC\u5FC5\u9808\u624B\u52D5\u5408\u4F75\u6240\u505A\u7684\u4EFB\u4F55\u4FEE\u6539\uFF0C\u56E0\u6B64\u6703\u66F4\u52A0\u96E3\u4EE5\u5347\u7D1A\u5230\u66F4\u65B0\u7684TouchGFX\u7248\u672C\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u5176\u6B21\uFF0C\u5B58\u5728\u7834\u58DE\u4F9D\u8CF4\u4E8E\u7279\u5B9A\u884C\u70BA\u7684\u6A19\u6E96\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668\u7684\u98A8\u96AA\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u56E0\u6B64\uFF0C\u5982\u679C\u5FC5\u9808\u4FEE\u6539\u6A19\u6E96\u5C0F\u90E8\u4EF6/\u5BB9\u5668\uFF0C\u6211\u5011\u5EFA\u8B70\u60A8\u8907\u88FD\u5B83\u3001\u91CD\u65B0\u547D\u540D\u7136\u5F8C\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u539F\u59CB\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E5F\u5C31\u662F\u8AAA\uFF0C\u60A8\u53EF\u4EE5\u81EA\u7531\u5730\u505A\u4EFB\u4F55\u60A8\u8A8D\u70BA\u5C0D\u7684\u4E8B\u60C5\u3002 \u5982\u679C\u5C07\u6A19\u6E96\u5C0F\u90E8\u4EF6\u7684\u539F\u59CB\u7A0B\u5F0F\u78BC\u6DFB\u52A0\u5230\u5C08\u6848\u4E2D\uFF0C\u9023\u7D50\u5668\u6703\u9078\u64C7\u6B64\u7248\u672C\u800C\u4E0D\u662F\u6838\u5FC3\u5EAB\u4E2D\u7684\u7248\u672C\u3002 \u56E0\u6B64\uFF0C\u901A\u904E\u5C07\u539F\u59CB\u7A0B\u5F0F\u78BC\u6DFB\u52A0\u5230\u61C9\u7528\uFF0C\u53EF\u4EE5\u4FEE\u6539\u6A19\u6E96\u5C0F\u90E8\u4EF6\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);