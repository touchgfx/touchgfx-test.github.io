"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3033],{

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

/***/ 5121:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx
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
  title: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "id": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-widgets",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-widgets",
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  },
  "next": {
    "title": "Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  }
};
const assets = {};








const toc = [{
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3059\u3079\u304D\u5834\u5408",
  id: "when-to-use-the-custom-widget-approach",
  level: 2
}, {
  value: "TouchGFX Designer\u3067\u306E\u64CD\u4F5C",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "\u30B3\u30FC\u30C9\u3067\u306E\u64CD\u4F5C",
  id: "in-code",
  level: 2
}, {
  value: "\u72EC\u81EA\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
  id: "your-own-custom-widget",
  level: 3
}, {
  value: "\u90E8\u5206\u63CF\u753B",
  id: "partial-drawing",
  level: 3
}, {
  value: "\u5857\u308A\u3064\u3076\u3057\u9818\u57DF",
  id: "solid-area",
  level: 3
}, {
  value: "\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306E\u4F8B",
  id: "example-source-code",
  level: 3
}, {
  value: "\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8 / \u30B3\u30F3\u30C6\u30CA\u306E\u5909\u66F4",
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
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u6642\u306B\u306F\u3001TouchGFX\u914D\u5E03\u306B\u306F\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5FC5\u8981\u306B\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX\u3067\u306F\u3001\u30E6\u30FC\u30B6\u304C\u72EC\u81EA\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8981\u7D20\u3092\u4F5C\u6210\u3067\u304D\u308B\u65B9\u6CD5\u304C\u3044\u304F\u3064\u304B\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u6700\u3082\u5358\u7D14\u306A\u306E\u306F`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-containers"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1`), `\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u3067\u3001\u65E2\u5B58\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u72EC\u81EA\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u7D50\u5408\u3059\u308B\u3082\u306E\u3067\u3059\u3002 \u3057\u304B\u3057\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u672C\u8CEA\u7684\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5B8C\u5168\u5236\u5FA1\u3057\u3066\u671B\u3080\u3082\u306E\u3092\u6B63\u78BA\u306B\u63CF\u753B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3001\u3082\u3063\u3068\u9AD8\u5EA6\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u8A73\u3057\u304F\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "when-to-use-the-custom-widget-approach"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3059\u3079\u304D\u5834\u5408`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F5C\u6210\u306F\u3001\u72EC\u81EA\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u6700\u3082\u4E00\u822C\u7684\u306A\u65B9\u6CD5\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30E6\u30FC\u30B6\u306E\u30CB\u30FC\u30BA\u306B\u5408\u3063\u3066\u3044\u308C\u3070\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u65B9\u304C\u512A\u5148\u3055\u308C\u307E\u3059\u304C\u3001\u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u306F\u5341\u5206\u3067\u306A\u3044\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5B8C\u5168\u5236\u5FA1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3067\u304D\u308B\uFF08\u3042\u308B\u3044\u306F\u4F5C\u6210\u3059\u3079\u304D\uFF09\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F8B\u3092\u6B21\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u30BB\u30D4\u30A2\uFF65\u30D5\u30A3\u30EB\u30BF`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30F3\u30C7\u30EB\u30D6\u30ED\uFF65\u30D5\u30E9\u30AF\u30BF\u30EB\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u306E\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF08gif\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306A\u3069\uFF09`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\u3067\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX Designer\u306F\u3001\u73FE\u6642\u70B9\u3067\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F5C\u6210\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u7528\u306E\u30B3\u30FC\u30C9\u3092\u624B\u52D5\u3067\u4F5C\u6210\u3057\uFF08\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3053\u306E\u8A18\u4E8B\u306E\u6B8B\u308A\u306E\u90E8\u5206\u3092\u53C2\u7167\uFF09\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30D3\u30E5\u30FC\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u90E8\u5206\u306B\u633F\u5165\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `\u30B3\u30FC\u30C9\u3067\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u72EC\u81EA\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `Widget`), `\u30AF\u30E9\u30B9\u3092\u62E1\u5F35\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u30E6\u30FC\u30B6\u5074\u306E\u4F5C\u696D\u304C\u3084\u3084\u591A\u304F\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u3088\u3063\u3066\u63CF\u753B\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u5B8C\u5168\u306B\u5236\u5FA1\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u5FC5\u305A\u3057\u3082\u65E2\u5B58\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u6D3B\u7528\u3059\u308B\u308F\u3051\u3067\u306F\u306A\u304F\u3001\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u63CF\u753B\u65B9\u6CD5\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u4E00\u822C\u7684\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u30E1\u30E2\u30EA\uFF65\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u3082\u5C0F\u3055\u304F\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3001\u3053\u306E\u3053\u3068\u304C\u6975\u3081\u3066\u91CD\u8981\u306A\u30DD\u30A4\u30F3\u30C8\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E00\u4F8B\u3068\u3057\u3066\u3001QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002 \u3053\u306E\u7279\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u308F\u304B\u308A\u3084\u3059\u3044\u4F8B\u306B\u306A\u308B\u306E\u3067\u3001\u4EE5\u4E0B\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3053\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u3001QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u767D\u9ED2\u306E\u30D4\u30AF\u30BB\u30EB\u306EN x N\u306E\u30DE\u30C8\u30EA\u30C3\u30AF\u30B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3068\u5404\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u306F\u5B9F\u884C\u6642\u306B\u6C7A\u5B9A\u3055\u308C\u3001QR\u30B3\u30FC\u30C9\uFF65\u30C7\u30FC\u30BF\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u60C5\u5831\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6B21\u306B\u3001QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u898B\u3048\u65B9\u306E2\u3064\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-examples.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F8B"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "n x n\u306E\u9ED2\u307E\u305F\u306F\u767D\u306E\u30DC\u30C3\u30AF\u30B9\u3092\u30B3\u30F3\u30C6\u30CA\u306E\u5B50\u3068\u3057\u3066\u6301\u3064\u3053\u3068\u3067\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u3067QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002 \u305F\u3060\u3057\u3001\u3053\u306E\u65B9\u6CD5\u306F\u5927\u91CF\u306E\u30E1\u30E2\u30EA\u3092\u4F7F\u7528\u3057\u3001\u304A\u305D\u3089\u304F\u52B9\u7387\u6027\u3084\u67D4\u8EDF\u6027\u304C\u4F4E\u304F\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "\u6A19\u6E96\u306E ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "touchgfx::Button"), " \uFF08\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u63D0\u4F9B\u3055\u308C\u308B\uFF09\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3067\u306F\u306A\u304F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u3057\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u30DC\u30BF\u30F3\u3054\u3068\u306E\u30E1\u30E2\u30EA\u304C\u7BC0\u7D04\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "your-own-custom-widget"
  }), `\u72EC\u81EA\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `Widget`), `\u30AF\u30E9\u30B9\u3092\u62E1\u5F35\u3059\u308B\u3001\u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E2\u3064\u3092\u8A18\u8FF0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u63CF\u753B\u65B9\u6CD5`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5857\u308A\u3064\u3076\u3057\u90E8\u5206`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "partial-drawing"
  }), `\u90E8\u5206\u63CF\u753B`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3069\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3082\uFF08\u3057\u305F\u304C\u3063\u3066\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3082\uFF09\u90E8\u5206\u63CF\u753B\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u305D\u306E\u4E00\u90E8\u306E\u307F\u3092\u63CF\u753B\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u305D\u306E\u7406\u7531\u306F2\u70B9\u3042\u308A\u307E\u3059\u3002 \u591A\u304F\u306E\u5834\u5408\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u306F\u306A\u304F\u3001\u4E00\u90E8\u306E\u307F\u3092\u518D\u63CF\u753B\u3057\u307E\u3059\u3002 TouchGFX\u306E\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3067\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u63CF\u753B\u3092\u8907\u6570\u306E\u90E8\u5206\u63CF\u753B\u306B\u5206\u5272\u3057\u3066\u3001\u63CF\u753B\u3055\u308C\u308B\u30D4\u30AF\u30BB\u30EB\u306E\u5168\u4F53\u6570\u3092\u6700\u5C0F\u5316\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u90E8\u5206\u63CF\u753B\u306B\u3088\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u305D\u306E\u4E00\u90E8\u306E\u307F\u3092\u63CF\u753B\u3059\u308B\u3088\u3046\u306B\u6C42\u3081\u3089\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4F8B\u3068\u3057\u3066\u3001\u3053\u306EQR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306F\u3001\u305D\u308C\u81EA\u8EAB\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u90E8\u5206\u306E\u307F\u3092\u63CF\u753B\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u90E8\u5206\u63CF\u753B"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30B3\u30FC\u30C9\u5185\u3067\u3053\u308C\u3092\u884C\u3046\u306B\u306F\u3001`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), `\u30E1\u30BD\u30C3\u30C9\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
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
  }, `invalidatedArea`), `\u304C\u3001\u66F4\u65B0\u306E\u5FC5\u8981\u304C\u3042\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u90E8\u5206\u3067\u3059\u3002 \u3053\u306EQR\u30B3\u30FC\u30C9\u306E\u4F8B\u3067\u306F\u3001\u7121\u52B9\u5316\u9818\u57DF\u306F\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3055\u308C\u305F\u9818\u57DF\u3067\u3059\u3002 \u9818\u57DF\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5DE6\u4E0A\u9685\u3092\u57FA\u6E96\u3068\u3059\u308B\u5EA7\u6A19\u3067\u8868\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5F79\u76EE\u306F\u3001\u7121\u52B9\u5316\u9818\u57DF\u306E\u5185\u90E8\u3092\u63CF\u753B\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u7121\u52B9\u5316\u9818\u57DF\u4EE5\u5916\u3092\u63CF\u753B\u3057\u305F\u5834\u5408\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u3067\u6B63\u3057\u3044\u52D5\u4F5C\u304C\u5F97\u3089\u308C\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "**\u5206\u7BC0\u4E0D\u5099** ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " \u30E1\u30BD\u30C3\u30C9\u306F ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const"), " \u3067\u3059\u3002\u6700\u9069\u5316\u3055\u308C\u305F\u63CF\u753B\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u63CF\u753B\u3092\u8907\u6570\u306E\u63CF\u753B\u547C\u3073\u51FA\u3057\u306B\u5206\u5272\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002 **\u5206\u7BC0\u4E0D\u5099** ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const"), " \u306B\u3088\u3063\u3066\u3001\u3053\u308C\u3089\u306E\u8907\u6570\u306E ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " \u5B9F\u884C\u306E\u9593\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u79FB\u52D5\u3057\u305F\u308A\u3001\u66F4\u65B0\u3055\u308C\u305F\u308A\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "solid-area"
  }), `\u5857\u308A\u3064\u3076\u3057\u9818\u57DF`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3055\u3089\u306B\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3001\u305D\u308C\u81EA\u8EAB\u306E\u5857\u308A\u3064\u3076\u3057\u90E8\u5206\u306E\u5927\u304D\u3055\u3092\u30EC\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u5857\u308A\u3064\u3076\u3057\u3068\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u305D\u306E\u80CC\u5F8C\u306B\u3042\u308B\u3082\u306E\u304C\u898B\u3048\u306A\u3044\u72B6\u614B\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u6A19\u6E96\u306E\u8D64\u8272\u306E\u30DC\u30C3\u30AF\u30B9\u306F\u5B8C\u5168\u306A\u5857\u308A\u3064\u3076\u3057\u3067\u3059\u304C\u3001\u30A2\u30EB\u30D5\u30A1\u5024\u304C50%\u306E\u753B\u50CF\u306F\u5B8C\u5168\u306A\u975E\u5857\u308A\u3064\u3076\u3057\u3067\u3059\u3002\u305D\u306E\u80CC\u5F8C\u306E\u3082\u306E\u304C\u3059\u3079\u3066\u898B\u3048\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5857\u308A\u3064\u3076\u3057\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u3088\u3063\u3066TouchGFX\u306F\u63CF\u753B\u51E6\u7406\u306E\u901F\u5EA6\u3092\u4E0A\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5857\u308A\u3064\u3076\u3057\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E0B\u306B\u3042\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u306E\u3067\u3001\u63CF\u753B\u306E\u5FC5\u8981\u304C\u3042\u308B\u30D4\u30AF\u30BB\u30EB\u6570\u304C\u5C11\u306A\u304F\u306A\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30B3\u30FC\u30C9\u5185\u3067\u5857\u308A\u3064\u3076\u3057\u9818\u57DF\u3092\u30EC\u30DD\u30FC\u30C8\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), `\u30E1\u30BD\u30C3\u30C9\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const;
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u4F8B\u306EQR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u5B8C\u5168\u306A\u5857\u308A\u3064\u3076\u3057\u306B\u306A\u308A\u307E\u3059\u3002 \u9ED2\u8272\u3068\u767D\u8272\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u80CC\u5F8C\u306F\u4F55\u3082\u898B\u3048\u306A\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30E1\u30BD\u30C3\u30C9\u304C\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D5\u30EB\uFF65\u30B5\u30A4\u30BA\u306E\u9577\u65B9\u5F62\u3092\u8FD4\u3059\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "example-source-code"
  }), `\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306E\u4F8B`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3059\u308B\u3068\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\uFF08\u63D0\u4F9B\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5B8C\u5168\u306A\u30B3\u30FC\u30C9\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u3001`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Widget`), `\u30AF\u30E9\u30B9\u306E\u62E1\u5F35\u3068\u3057\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), `\u30E1\u30BD\u30C3\u30C9\u3068`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), `\u30E1\u30BD\u30C3\u30C9\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u3066\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u63CF\u753B\u65B9\u6CD5\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 QR\u30B3\u30FC\u30C9\u306E\u30C7\u30FC\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3068\u3001QR\u30B3\u30FC\u30C9\u306E\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\uFF65\u30D5\u30A1\u30AF\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3092\u5BA3\u8A00\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u306F`, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), `\u30E1\u30BD\u30C3\u30C9\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u7121\u52B9\u5316\u9818\u57DF\u5185\u306E\u30D4\u30AF\u30BB\u30EB\u3054\u3068\u306B\u51E6\u7406\u3092\u9032\u3081\u3001\u30C7\u30FC\u30BF\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\uFF65\u30D5\u30A1\u30AF\u30BF\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306B\u57FA\u3065\u3044\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8272\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), `\u30E1\u30BD\u30C3\u30C9\u306F\u5B8C\u5168\u306A\u5857\u308A\u3064\u3076\u3057\u3068\u3057\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30EC\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u3053\u3053\u3067\u306F ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " \u30E1\u30BD\u30C3\u30C9\u306E\u4E00\u90E8\u3068\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30ED\u30C3\u30AF\u304A\u3088\u3073\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u307E\u3057\u305F\u3002 \u3053\u308C\u306F\u3001\u63CF\u753B\u306E\u958B\u59CB\u6642\u306B\u78BA\u5B9F\u306BDMA\u304C\u63CF\u753B\u3092\u7D42\u3048\u3066\u3044\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u3067\u3059\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30B3\u30FC\u30C9\u3067\u306F\u5C0F\u3055\u3044\u30AF\u30E9\u30B9 / \u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3001QR\u30B3\u30FC\u30C9\u306E\u30C7\u30FC\u30BF\u306B\u3082\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
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
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/qr-code.zip",
    target: "_blank",
    mdxType: "Link"
  }, "QRCode"), "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/lens.zip",
    target: "_blank",
    mdxType: "Link"
  }, "Lens"), "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_Try, {
    mdxType: "Try"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\u767D\u8272\u306E\u30D4\u30AF\u30BB\u30EB\u304C\u5B8C\u5168\u306B\u900F\u660E\u306B\u306A\u308B\u3088\u3046\u306BQR\u30B3\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\u30BB\u30D4\u30A2\uFF65\u30D5\u30A3\u30EB\u30BF\u3001\u30DE\u30F3\u30C7\u30EB\u30D6\u30ED\uFF65\u30D5\u30E9\u30AF\u30BF\u30EB\u3001gif\u753B\u50CF\u3001\u305D\u306E\u4ED6\u3092\u8868\u793A\u3059\u308B\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F7F\u7528\u3057\u3066\u6700\u3082\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3084\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3057\u3066\u6700\u3082\u7C21\u5358\u306B\u5B9F\u73FE\u3067\u304D\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u3064\u3044\u3066\u691C\u8A0E\u3057\u307E\u3059\u3002")), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "modifying-standard-widgetscontainers"
  }), `\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8 / \u30B3\u30F3\u30C6\u30CA\u306E\u5909\u66F4`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306F\u3001TouchGFX\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6642\u306B\u542B\u307E\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304A\u3088\u3073\u30B3\u30F3\u30C6\u30CA\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306F\u6B21\u306E\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5F8C\u65B9\u4E92\u63DB\u6027\u3092\u7DAD\u6301\u3059\u308B\u305F\u3081\u306B\u3001\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u306F\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304A\u3088\u3073\u30B3\u30F3\u30C6\u30CA\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8 / \u30B3\u30F3\u30C6\u30CA\u3092\u76F4\u63A5\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306F\u3001TouchGFX\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5185\u90E8\u52D5\u4F5C\u3092\u76F4\u611F\u7684\u306B\u7406\u89E3\u3057\u7FD2\u5F97\u3059\u308B\u3053\u3068\u3092\u4E3B\u306A\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059\u3002 \u4F55\u304B\u6A19\u6E96\u5B9F\u88C5\u3068\u306F\u7570\u306A\u308B\u52D5\u4F5C\u304C\u5FC5\u8981\u306A\u5834\u5408\u306B\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u30B5\u30D6\u30AF\u30E9\u30B9\u5316\u307E\u305F\u306F\u4F5C\u6210\u3059\u308B\u3053\u3068\u3067\u9054\u6210\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306F\u63A8\u5968\u3055\u308C\u308B\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u63A8\u5968\u306E\u7406\u7531\u306F\u6B21\u306E2\u3064\u306E\u8981\u7D20\u306B\u3088\u308B\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `1\u3064\u76EE\u306F\u3001\u3053\u308C\u307E\u3067\u306B\u884C\u3063\u305F\u5909\u66F4\u3092\u624B\u52D5\u3067\u30DE\u30FC\u30B8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u305F\u3081\u306B\u3001TouchGFX\u306E\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u304C\u56F0\u96E3\u306B\u306A\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `2\u3064\u76EE\u306F\u3001\u7279\u5B9A\u306E\u52D5\u4F5C\u306B\u4F9D\u5B58\u3059\u308B\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304A\u3088\u3073\u30B3\u30F3\u30C6\u30CA\u3092\u58CA\u3059\u5371\u967A\u304C\u751F\u3058\u308B\u3053\u3068\u3067\u3059\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8 / \u30B3\u30F3\u30C6\u30CA\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u3092\u76F4\u63A5\u5909\u66F4\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3057\u3001\u540D\u524D\u3092\u5909\u66F4\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3068\u306F\u8A00\u3046\u3082\u306E\u306E\u3001\u958B\u767A\u8005\u304C\u9069\u5207\u3060\u3068\u5224\u65AD\u3057\u305F\u3053\u3068\u3092\u5B9F\u884C\u3059\u308B\u306E\u306F\u81EA\u7531\u3067\u3059\u3002 \u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30EA\u30F3\u30AB\u306F\uFF08\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u3042\u308B\u3082\u306E\u3067\u306F\u306A\u304F\uFF09\u305D\u3061\u3089\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u3053\u306E\u7D50\u679C\u3001\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u3092\u81EA\u5206\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5909\u66F4\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);