"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5933],{

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

/***/ 75073:
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
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/InlineNote.js

class InlineNote extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement("i", null, this.props.children);
  }
}
/* harmony default export */ var components_InlineNote = (InlineNote);

// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx
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
  id: "backend-communication",
  title: "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/backend-communication",
  "id": "development/ui-development/touchgfx-engine-features/backend-communication",
  "title": "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/backend-communication",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/backend-communication",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "backend-communication",
    "title": "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  },
  "next": {
    "title": "\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/mixins"
  }
};
const assets = {};





const toc = [{
  value: "\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9",
  id: "the-model-class",
  level: 2
}, {
  value: "\u30B7\u30B9\u30C6\u30E0\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9",
  id: "system-interfacing",
  level: 2
}, {
  value: "GUI\u30BF\u30B9\u30AF\u304B\u3089\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0",
  id: "sampling-from-gui-task",
  level: 3
}, {
  value: "\u30BB\u30AB\u30F3\u30C0\u30EA\uFF65\u30BF\u30B9\u30AF\u304B\u3089\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0",
  id: "sampling-from-secondary-task",
  level: 3
}, {
  value: "UI\u3078\u306E\u30C7\u30FC\u30BF\u306E\u4F1D\u64AD",
  id: "propagating-data-to-ui",
  level: 2
}, {
  value: "UI\u304B\u3089\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3078\u306E\u30C7\u30FC\u30BF\u306E\u4F1D\u9001",
  id: "transmitting-data-from-ui-to-surrounding-system",
  level: 2
}, {
  value: "\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "GUI\u30BF\u30B9\u30AF\u304B\u3089",
  id: "from-gui-task",
  level: 3
}, {
  value: "\u4ED6\u306E\u30BF\u30B9\u30AF\u304B\u3089",
  id: "from-other-task",
  level: 3
}, {
  value: "\u8907\u6570\u30BF\u30B9\u30AF\u304B\u3089",
  id: "from-multiple-tasks",
  level: 3
}, {
  value: "\u30BF\u30B9\u30AF\u304A\u3088\u3073\u5916\u90E8\u306E\u5272\u8FBC\u307F\u30E9\u30A4\u30F3\u304B\u3089",
  id: "from-task-and-external-interrupt-line",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u307B\u3068\u3093\u3069\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001UI\u3092\u4F55\u3089\u304B\u306E\u65B9\u6CD5\u3067\u30B7\u30B9\u30C6\u30E0\u306E\u305D\u306E\u4ED6\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u63A5\u7D9A\u3057\u3001\u30C7\u30FC\u30BF\u3092\u9001\u53D7\u4FE1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\uFF08\u30BB\u30F3\u30B5\uFF65\u30C7\u30FC\u30BF\u3001A/D\u5909\u63DB\u3001\u30B7\u30EA\u30A2\u30EB\u901A\u4FE1\u306A\u3069\uFF09\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3084\u3001\u4ED6\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30E2\u30B8\u30E5\u30FC\u30EB\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u884C\u3046\u3053\u3068\u304C\u8003\u3048\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u3053\u306E\u63A5\u7D9A\u3092\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306B\u63A8\u5968\u3055\u308C\u308B\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6700\u521D\u306E\u65B9\u6CD5\u306F`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `\u30AF\u30A4\u30C3\u30AF\uFF65\u30A2\u30F3\u30C9\uFF65\u30C0\u30FC\u30C6\u30A3`), `\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u3001\u4E3B\u306B\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u76EE\u7684\u3068\u3059\u308B\u3082\u306E\u3067\u3059\u3002\u4E00\u65B9\u3067\u3001`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `2\u756A\u76EE\u306E\u65B9\u6CD5`), `\u306F\u3001\u73FE\u5B9F\u4E16\u754C\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067UI\u3092\u305D\u306E\u4ED6\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u6B63\u3057\u304F\u63A5\u7D9A\u3059\u308B\u305F\u3081\u306E\u5805\u5B9F\u306A\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC\u306B\u57FA\u3065\u304F\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u306E\u6700\u5F8C\u306B\u306F\u3001\u4E21\u65B9\u306E\u65B9\u6CD5\u3092\u7D39\u4ECB\u3059\u308B\u30B5\u30F3\u30D7\u30EB\u3078\u306E\u30EA\u30F3\u30AF\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "the-model-class"
  }), `\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3059\u3079\u3066\u306ETouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u306F\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001UI\u306E\u72B6\u614B\u60C5\u5831\u3092\u4FDD\u5B58\u3059\u308B\u306E\u3068\u306F\u5225\u306B\u3001\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3078\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u76EE\u7684\u3082\u6301\u3063\u3066\u3044\u307E\u3059\u3002 \u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306B\u3088\u3063\u3066\u3001\u4E21\u65B9\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u53C2\u7167\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u30B7\u30B9\u30C6\u30E0\u5185\u306E\u4ED6\u306EOS\u30BF\u30B9\u30AF\u3068\u3082\u901A\u4FE1\u3057\u307E\u3059\u3002 \u901A\u5E38\u3001\u4ED6\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30E2\u30B8\u30E5\u30FC\u30EB\u3084\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u3001\u500B\u5225\u306E\u30D3\u30E5\u30FC\uFF65\u30AF\u30E9\u30B9\u3067\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306E\u306F\u826F\u3044\u8A2D\u8A08\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "\u30E2\u30C7\u30EB\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "../software-architecture/model-view-presenter-design-pattern",
    mdxType: "Link"
  }, "MVP\u306E\u30D1\u30BF\u30FC\u30F3\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4EE5\u4E0B\u306E\u7406\u7531\u304B\u3089\u3001\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306F\u3053\u3046\u3057\u305F\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306E\u914D\u7F6E\u306B\u3088\u304F\u9069\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306B\u306F `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `tick()`), ` \u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u6BCE\u30D5\u30EC\u30FC\u30E0\u3067\u81EA\u52D5\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u3001\u4ED6\u306E\u30B5\u30D6\u30E2\u30B8\u30E5\u30FC\u30EB\u304B\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u63A2\u3057\u3066\u53CD\u5FDC\u3059\u308B\u305F\u3081\u306B\u5B9F\u88C5\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306B\u306F\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30D7\u30EC\u30BC\u30F3\u30BF\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u53D7\u4FE1\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3092UI\u306B\u901A\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "system-interfacing"
  }), `\u30B7\u30B9\u30C6\u30E0\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u306F2\u3064\u306E\u65B9\u6CD5\u304C\u3042\u308A\u307E\u3059\u3002GUI\u30BF\u30B9\u30AF\u304B\u3089\u76F4\u63A5\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u65B9\u6CD5\u3068\u3001\u30BB\u30AB\u30F3\u30C0\u30EA\uFF65\u30BF\u30B9\u30AF\u304B\u3089\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u65B9\u6CD5\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-gui-task"
  }), `GUI\u30BF\u30B9\u30AF\u304B\u3089\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3068\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u305F\u3081\u306B\u6700\u9069\u306A\u65B9\u6CD5\u306F\u3001\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u304C\u5FC5\u8981\u3068\u3055\u308C\u308B\u983B\u5EA6\u3001\u305D\u308C\u306B\u304B\u304B\u308B\u6642\u9593\u306E\u9577\u3055\u3001\u304B\u304B\u308B\u6642\u9593\u304C\u3069\u308C\u307B\u3069\u91CD\u8981\u304B\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u308C\u3089\u306E\u70B9\u3067\u306E\u8981\u4EF6\u304C\u7DE9\u3084\u304B\u306A\u5834\u5408\u3001\u6700\u3082\u5358\u7D14\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u95A2\u6570\u3067\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3092\u76F4\u63A5\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u306E\u5B9F\u884C\u983B\u5EA6\u304C\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\uFF08\u901A\u5E38\u306F60Hz\u524D\u5F8C\uFF09\u3088\u308A\u3082\u4F4E\u3044\u5834\u5408\u306F\u3001\u5358\u7D14\u306B\u30AB\u30A6\u30F3\u30BF\u3092\u8FFD\u52A0\u3057\u3001N\u756A\u76EE\u306E\u30C6\u30A3\u30C3\u30AF\u3054\u3068\u306B\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u3067\u5B9F\u884C\u3059\u308B\u5834\u5408\u3001\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u64CD\u4F5C\u3092\u3042\u308B\u7A0B\u5EA6\u9AD8\u901F\uFF08\u901A\u5E38\u306F1ms\u4EE5\u4E0B\uFF09\u3067\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u3001\u305D\u3046\u3067\u306A\u3044\u3068\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u306B\u652F\u969C\u304C\u51FA\u59CB\u3081\u307E\u3059\u3002\u3053\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u306FGUI\u30BF\u30B9\u30AF\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u5B9F\u884C\u3055\u308C\u3001\u30D5\u30EC\u30FC\u30E0\u306E\u63CF\u753B\u3092\u9045\u5EF6\u3055\u305B\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-secondary-task"
  }), `\u30BB\u30AB\u30F3\u30C0\u30EA\uFF65\u30BF\u30B9\u30AF\u304B\u3089\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3042\u308B\u3044\u306F\u3001GUI\u30BF\u30B9\u30AF\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3068\u76F4\u63A5\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u306E\u304C\u671B\u307E\u3057\u304F\u306A\u3044\u5834\u5408\u3001\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3092\u5B9F\u884C\u3059\u308B\u65B0\u3057\u3044OS\u30BF\u30B9\u30AF\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30BF\u30B9\u30AF\u306F\u3001\u7279\u5B9A\u306E\u30B7\u30CA\u30EA\u30AA\u3067\u5FC5\u8981\u3068\u3055\u308C\u308B\u6B63\u78BA\u306A\u6642\u9593\u9593\u9694\u3067\u5B9F\u884C\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001\u30E6\u30FC\u30B6\u306E\u30CB\u30FC\u30BA\u306B\u5FDC\u3058\u3066\u3001\u3053\u306E\u65B0\u3057\u3044\u30BF\u30B9\u30AF\u306E\u512A\u5148\u9806\u4F4D\u3092GUI\u30BF\u30B9\u30AF\u3088\u308A\u3082\u4F4E\u304F\u3001\u307E\u305F\u306F\u9AD8\u304F\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u512A\u5148\u9806\u4F4D\u3092\u9AD8\u304F\u3059\u308B\u3068\u3001\u5B9F\u884C\u4E2D\u306EGUI\u30BF\u30B9\u30AF\u306E\u5185\u5BB9\u306B\u95A2\u308F\u3089\u305A\u3001\u6307\u5B9A\u3057\u305F\u6B63\u78BA\u306A\u6642\u9593\u306B\u3053\u3061\u3089\u306E\u30BF\u30B9\u30AF\u304C\u5B9F\u884C\u3055\u308C\u308B\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u307E\u3059\u3002 \u305F\u3060\u3057\u6B20\u70B9\u3068\u3057\u3066\u3001\u305D\u308C\u304CCPU\u306E\u8CA0\u8377\u304C\u9AD8\u3044\u30D7\u30ED\u30BB\u30B9\u3067\u3042\u308B\u5834\u5408\u3001UI\u306E\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u306B\u5F71\u97FF\u3059\u308B\u6050\u308C\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u65B9\u3001\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u304C\u6642\u9593\u7684\u306B\u91CD\u8981\u3067\u306A\u3044\u5834\u5408\u306F\u3001GUI\u30BF\u30B9\u30AF\u3088\u308A\u4F4E\u3044\u512A\u5148\u5EA6\u3092\u5272\u308A\u5F53\u3066\u3001UI\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u304C\u5468\u56F2\u306E\u30B7\u30B9\u30C6\u30E0\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u306B\u5F71\u97FF\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u3067\u304D\u307E\u3059\u3002 \u63CF\u753B\u4E2D\u306F\u3001GUI\u30BF\u30B9\u30AF\u306E\u30B9\u30EA\u30FC\u30D7\u6642\u9593\u304C\u9577\u304F\uFF08DMA\u30D9\u30FC\u30B9\u306E\u30D4\u30AF\u30BB\u30EB\u8EE2\u9001\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u5834\u5408\u306A\u3069\uFF09\u3001\u512A\u5148\u5EA6\u306E\u4F4E\u3044\u30BF\u30B9\u30AF\u3067\u3082\u304B\u306A\u308A\u306E\u983B\u5EA6\u3067\u5B9F\u884C\u53EF\u80FD\u306B\u306A\u308B\u305F\u3081\u3001\u5927\u534A\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3068\u3063\u3066\u306F\u3053\u308C\u3067\u5341\u5206\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30BB\u30AB\u30F3\u30C0\u30EA\uFF65\u30BF\u30B9\u30AF\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001RTOS\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30BF\u30B9\u30AF\u9593\u30E1\u30C3\u30BB\u30FC\u30B8\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002 \u3059\u3079\u3066\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u307B\u3068\u3093\u3069\u306ERTOS\u306F\u30AD\u30E5\u30FC / \u30E1\u30FC\u30EB\uFF65\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u5099\u3048\u3066\u3044\u308B\u306E\u3067\u3001\u30BF\u30B9\u30AF\u9593\u3067\u30C7\u30FC\u30BF\uFF08\u901A\u5E38\u306F\u30E6\u30FC\u30B6\u5B9A\u7FA9\u306EC\u69CB\u9020\u4F53\u3001\u30D0\u30A4\u30C8\u914D\u5217\u3001\u307E\u305F\u306F\u5358\u7D14\u306A\u6574\u6570\uFF09\u306E\u9001\u4FE1\u304C\u53EF\u80FD\u3067\u3059\u3002 \u65B0\u3057\u3044\u30C7\u30FC\u30BF\u3092GUI\u30BF\u30B9\u30AF\u306B\u4F1D\u9001\u3059\u308B\u306B\u306F\u3001UI\u30BF\u30B9\u30AF\u7528\u306E\u30E1\u30FC\u30EB\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3057\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u3092GUI\u30BF\u30B9\u30AF\u306B\u9001\u4FE1\u3057\u307E\u3059\u3002 \u6B21\u306B\u3001 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u3067GUI\u30BF\u30B9\u30AF\u306E\u30E1\u30FC\u30EB\u30DC\u30C3\u30AF\u30B9\u3092\u30DD\u30FC\u30EA\u30F3\u30B0\u3057\u3066\u3001\u65B0\u7740\u30C7\u30FC\u30BF\u304C\u306A\u3044\u304B\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002 \u305D\u306E\u5834\u5408\u3001\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308A\u3001\u305D\u308C\u306B\u5FDC\u3058\u3066UI\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "propagating-data-to-ui"
  }), `UI\u3078\u306E\u30C7\u30FC\u30BF\u306E\u4F1D\u64AD`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `GUI\u30BF\u30B9\u30AF\u304B\u3089\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0`), `\u3068`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\u30BB\u30AB\u30F3\u30C0\u30EA\uFF65\u30BF\u30B9\u30AF\u304B\u3089\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0`), `\u306E\u3069\u3061\u3089\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3067\u3082\u3001 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u95A2\u6570\u306B\u3088\u3063\u3066\u3001GUI\u30BF\u30B9\u30AF\u306FUI\u306B\u8868\u793A\u3059\u3079\u304D\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u3092\u8A8D\u8B58\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3078\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u306E\u3068\u306F\u5225\u306B\u3001\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306B\u306F\u72B6\u614B\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u5F79\u76EE\u3082\u3042\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3064\u307E\u308A\u3001\u3044\u304F\u3064\u304B\u72B6\u614B\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u3082\u3042\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6E29\u5EA6\u30BB\u30F3\u30B5\u304C\u30B7\u30B9\u30C6\u30E0\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u30B7\u30F3\u30D7\u30EB\u306A\u4F8B\u3092\u8003\u3048\u3066\u307F\u307E\u3057\u3087\u3046\u3002\u3053\u3053\u3067\u306F\u73FE\u5728\u306E\u6E29\u5EA6\u304CUI\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u6E96\u5099\u3068\u3057\u3066\u3001\u4EE5\u4E0B\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u3092\u62E1\u5F35\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Model
{
public:
  // Function that allow your Presenters to read current temperature.
  int getCurrentTemperature() const { return currentTemperature; }

  // Called automatically by framework every tick.
  void tick();
  ...
private:
  // Variable storing last received temperature;
  int currentTemperature;
  ...
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0A\u8A18\u306B\u3088\u3063\u3066\u3001 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenter`), ` \u304C\u73FE\u5728\u306E\u6E29\u5EA6\u3092\u30E2\u30C7\u30EB\u306B\u8981\u6C42\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u3067\u3001\u6E29\u5EA6\u3092\u8868\u793A\u3059\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5165\u308B\u3068\u3001Presenter\u304C\u3053\u306E\u5024\u3092UI\uFF08\u30D3\u30E5\u30FC\uFF09\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u6B21\u306B\u5FC5\u8981\u306A\u306E\u306F\u3001\u65B0\u3057\u3044\u6E29\u5EA6\u60C5\u5831\u3092\u53D7\u4FE1\u3057\u305F\u3068\u304D\u306B\u518D\u3073UI\u3092\u66F4\u65B0\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30E2\u30C7\u30EB\u304C\u73FE\u5728\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30D7\u30EC\u30BC\u30F3\u30BF\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u6301\u3063\u3066\u3044\u308B\u3053\u3068\u3092\u5229\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30DD\u30A4\u30F3\u30BF\u306E\u30BF\u30A4\u30D7\u306F\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF08`, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `ModelListener`), `\uFF09\u3067\u3001\u9069\u5207\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u56FA\u6709\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u53CD\u6620\u3059\u308B\u3088\u3046\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "ModelListener.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class ModelListener
{
public:
  // Call this function to notify that temperature has changed.
  // Per default, use an empty implementation so that only those
  // Presenters interested in this specific event need to
  // override this function.
  virtual void notifyTemperatureChanged(int newTemperature) {}
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u308C\u3067\u3001\u3053\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u63A5\u7D9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u3042\u3068\u306F\u3001\u53D7\u4FE1\u3059\u308B"`, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `\u65B0\u3057\u3044\u6E29\u5EA6`), `"\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u5B9F\u969B\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3092\u884C\u3044\u307E\u3059\u3002 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
  // Pseudo-code for sampling data
  if (OS_Poll(GuiTaskMBox))
  {
    // Here we assume that you have defined a "Message" struct containing type and data,
    // along with some event definitions.
    struct Message msg = OS_Read(GuiTaskMBox);
    if (msg.eventType == EVT_TEMP_CHANGED)
    {
       // We received information that temperature has changed.
       // First, update Model state variable
       currentTemperature = msg.data;

      // Second, notify the currently active Presenter that temperature has changed.
      // The modelListener pointer points to the currently active Presenter.
      if (modelListener != 0)
      {
        modelListener->notifyTemperatureChanged(currentTemperature);
      }
    }
  }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0A\u8A18\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u306F\u6B21\u306E2\u3064\u304C\u78BA\u5B9F\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `\u3053\u306E `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `currentTemperature`), ` \u5909\u6570\u306F\u5E38\u306B\u6700\u65B0\u72B6\u614B\u306A\u306E\u3067\u3001Presenter\u306F\u3044\u3064\u3067\u3082\u73FE\u5728\u306E\u6E29\u5EA6\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `\u3053\u306E `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenter\u306B\u306F`), ` \u6E29\u5EA6\u306E\u5909\u5316\u304C\u5373\u5EA7\u306B\u901A\u77E5\u3055\u308C\u3001\u9069\u5207\u306A\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `MVP\u30D1\u30BF\u30FC\u30F3\u306E1\u3064\u306E\u5229\u70B9\u306F\u3001\u73FE\u5728\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5FDC\u3058\u3066\u901A\u77E5\u3092\u500B\u5225\u306B\u51E6\u7406\u3067\u304D\u308B\u3053\u3068\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u4F55\u304B\u306E\u8A2D\u5B9A\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u3066\u3044\u308B\u3068\u304D `, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `\uFF08MainMenuPresenter/MainMenuView\u304C\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5834\u5408\u306A\u3069\uFF09`), ` \u306B\u6E29\u5EA6\u5909\u5316\u306E\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u3001\u305D\u3053\u306B\u73FE\u5728\u306E\u6E29\u5EA6\u306F\u95A2\u4FC2\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \u95A2\u6570\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7A7A\u5B9F\u88C5\u306A\u306E\u3067\u3001\u3053\u306E\u901A\u77E5\u306F `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `MainMenuPresenter\u306B\u3088\u3063\u3066\u5358\u306B\u7121\u8996\u3055\u308C\u307E\u3059\u3002`), `. \u4E00\u65B9\u3001 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlPresenter`), ` \u304C\u3042\u308B\u5834\u5408\u306F\u3001\u3053\u306EPresenter\u3067 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \u95A2\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u3001\u66F4\u65B0\u5F8C\u306E\u6E29\u5EA6\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u306B\u30D3\u30E5\u30FC\u306B\u901A\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "TemperatureControlPresenter.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemperatureControlPresenter : public ModelListener
{
public:
  // override the empty function.
  virtual void notifyTemperatureChanged(int newTemperature) {
    view.setTemp(newTemperature);
  }
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `View\u30AF\u30E9\u30B9 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlView`), `\u3067\u306F\u3001\u5F53\u7136\u306A\u304C\u3089 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setTemp`), ` \u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "transmitting-data-from-ui-to-surrounding-system"
  }), `UI\u304B\u3089\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3078\u306E\u30C7\u30FC\u30BF\u306E\u4F1D\u9001`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `UI\u304B\u3089\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3078\u306E\u30C7\u30FC\u30BF / \u30A4\u30D9\u30F3\u30C8\u306E\u53CD\u5BFE\u65B9\u5411\u306E\u4F1D\u9001\u3082\u3001\u30E2\u30C7\u30EB\u3092\u901A\u3057\u3066\u307B\u307C\u540C\u3058\u65B9\u6CD5\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u65B0\u3057\u3044\u30BF\u30FC\u30B2\u30C3\u30C8\u6E29\u5EA6\u3092\u8A2D\u5B9A\u3059\u308B\u6A5F\u80FD\u3092\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u305F\u5834\u5408\u3001\u3053\u308C\u307E\u3067\u306E\u4F8B\u3092\u7D9A\u884C\u3059\u308B\u3068\u3001\u30E2\u30C7\u30EB\u306B\u4EE5\u4E0B\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setNewTargetTemperature(int newTargetTemp)
{
  // Pseudo-code for sending an event to a task responsible for controlling temperature.
  struct Message msg;
  msg.eventType = EVT_SET_TARGET_TEMP;
  msg.data = newTargetTemp;
  OS_Send(SystemTaskMBox, &msg);
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30E6\u30FC\u30B6\u304CUI\u3067\u65B0\u3057\u3044\u30BF\u30FC\u30B2\u30C3\u30C8\u6E29\u5EA6\u3092\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30D3\u30E5\u30FC\u304C\u3001\u30E2\u30C7\u30EB\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u4FDD\u6301\u3059\u308B\u30D7\u30EC\u30BC\u30F3\u30BF\u306B\u901A\u77E5\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u3001\u305D\u306E\u7D50\u679C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setNewTargetTemperature\u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), ` \u95A2\u6570\u3067\u5468\u8FBA\u30B7\u30B9\u30C6\u30E0\u3092\u76F4\u63A5\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u4F8B`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001Board Specific Demo\uFF08\u30DC\u30FC\u30C9\u56FA\u6709\u306E\u30C7\u30E2: BSD\uFF09\u3067\u3059\u304C\u3001\u3053\u3053\u306B\u793A\u3055\u308C\u3066\u3044\u308B\u30B3\u30FC\u30C9\u306E\u591A\u304F\u306F\u3001\u4ED6\u306E\u30C7\u30E2\uFF65\u30DC\u30FC\u30C9\u3084\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067\u518D\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u4F8B\u3067\u306F\u3001STM32CubeMX\u3067\u30BF\u30B9\u30AF\u3068\u30AD\u30E5\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u6B21\u306B\u3001\u751F\u6210\u3055\u308C\u305F\u30BF\u30B9\u30AF\u3092\u8A2D\u5B9A\u3057\u3001 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `\u30B5\u30F3\u30D7\u30EB\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092main_user.c\u306B\u5B9F\u88C5\u3057\u307E\u3059\u3002`), `. \u3053\u306E\u4F8B\u3067\u306F\u3001STM32CubeMX BSP\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u7528\u3057\u3066\u3001STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u4E0A\u306ELED\u3001\u30E6\u30FC\u30B6\uFF65\u30DC\u30BF\u30F3\u3001\u305D\u306E\u4ED6\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u5236\u5FA1\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-gui-task"
  }), `GUI\u30BF\u30B9\u30AF\u304B\u3089`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u306EBSD\u306F\u3001TouchGFX Designer\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3042\u308A\u307E\u3059\u3002GUI\u3067\u3001\uFF3BDemos\uFF3D->\uFF3BBoard Specific Demo\uFF3D->\uFF3BSTM32F46G Discovery kit Control LED\uFF3D\u306E\u9806\u306B\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30DC\u30BF\u30F3\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u304A\u3088\u3073LED\u306E\u5236\u5FA1\u65B9\u6CD5\u3092\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u307E\u3059\u3002 \u30E2\u30C7\u30EB\uFF65\u30AF\u30E9\u30B9\u306F\u30DC\u30BF\u30F3\u3092\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u72B6\u614B\u3068\u4E00\u81F4\u3059\u308B\u3088\u3046\u306BLED\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-other-task"
  }), `\u4ED6\u306E\u30BF\u30B9\u30AF\u304B\u3089`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u306EBSD\u306F\u3001TouchGFX Designer\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3042\u308A\u307E\u3059\u3002\uFF3BDemos\uFF3D->\uFF3BBoard Specific Demo\uFF3D->\uFF3BSTM32H7B3I Evaluation Board Analog Sampler Task\uFF3D\u306E\u9806\u306B\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u5225\u500B\u306E\u30B9\u30EC\u30C3\u30C9\u3067\u30A2\u30CA\u30ED\u30B0\u5165\u529B\u3092\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u65B9\u6CD5\u3092\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001MVP\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30CA\u30ED\u30B0\u5024\u3092\u30D3\u30E5\u30FC\u306B\u8EE2\u9001\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u306EBSD\u306F\u3001TouchGFX Designer\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3042\u308A\u307E\u3059\u3002\uFF3BDemos\uFF3D->\uFF3BBoard Specific Demo\uFF3D->\uFF3BSTM32F46G Discovery kit Intertask Communication\uFF3D\u306E\u9806\u306B\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30BF\u30B9\u30AF\u9593\u306E\u901A\u4FE1\u3068UI\u3068\u306E\u9593\u306E\u4F1D\u64AD\u306E\u30C7\u30E2\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u72EC\u81EA\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306E\u969B\u306B\u3001\u30D2\u30F3\u30C8\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001C\u30B3\u30FC\u30C9\u3067\u5B9F\u88C5\u3055\u308C\u305F\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\uFF65\u30B7\u30B9\u30C6\u30E0\u3068C++\u306ETouchGFX GUI\u306E\u9593\u3067\u901A\u4FE1\u304C\u884C\u308F\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u4F8B\u306FSTM32F746G-DISCO\u30DC\u30FC\u30C9\u3067\u3001FreeRTOS\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-multiple-tasks"
  }), `\u8907\u6570\u30BF\u30B9\u30AF\u304B\u3089`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u306EBSD\u306F\u3001TouchGFX Designer\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3042\u308A\u307E\u3059\u3002\uFF3BDemos\uFF3D->\uFF3BBoard Specific Demo\uFF3D->\uFF3BSTM32F769I Discovery Multitast Communication Demo\uFF3D\u306E\u9806\u306B\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30DC\u30BF\u30F3\u306E\u72B6\u614B\u3092\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3057\u3001\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3089\u3001GUI\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u3092\u901A\u3057\u3066\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u6E21\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u307E\u307E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9032\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F3\u3064\u306EFreeRTOS\u30BF\u30B9\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 1\u3064\u306FGUI\u7528\u3001\u6B8B\u308A2\u3064\u306F\u5404\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\uFF08LED\u3068USER Button\uFF09\u7528\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-task-and-external-interrupt-line"
  }), `\u30BF\u30B9\u30AF\u304A\u3088\u3073\u5916\u90E8\u306E\u5272\u8FBC\u307F\u30E9\u30A4\u30F3\u304B\u3089`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u306EBSD\u306F\u3001TouchGFX Designer\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3042\u308A\u307E\u3059\u3002\uFF3BDemos\uFF3D->\uFF3BBoard Specific Demo\uFF3D->\uFF3BSTM32F769I Discovery External Interrup Line Demo\uFF3D\u306E\u9806\u306B\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306FSTM32F769I-DISCO\u30DC\u30FC\u30C9\u5411\u3051\u306B\u8A2D\u8A08\u3055\u308C\u3066\u304A\u308A\u3001LED\u304A\u3088\u3073USER BUTTON\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u3001C\u30B3\u30FC\u30C9\u3068\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306E\u4E21\u65B9\u3092TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u7D71\u5408\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001EXTI\u30E2\u30FC\u30C9\u3067\u30DC\u30BF\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3059\uFF08\u5916\u90E8\u5272\u8FBC\u307F\u30E9\u30A4\u30F30\uFF09\u3002 \u30DC\u30BF\u30F3\u304C\u62BC\u4E0B\u3055\u308C\u308B\u3068\u5272\u8FBC\u307F\u3092\u53D7\u4FE1\u3057\u3001\u305D\u306E\u5F8C\u5272\u8FBC\u307F\u304C\u6D88\u53BB\u3055\u308C\u308B\u3068\u3044\u3046\u52D5\u4F5C\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 GPIO\u3068\u540C\u3058\u52D5\u4F5C\u306F\u3067\u304D\u305A\u3001\u4EE3\u308F\u308A\u306B1\u30B9\u30C6\u30C3\u30D7\u305A\u3064\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9032\u3081\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002\u5272\u8FBC\u307F\u3092\u53D7\u4FE1\u3059\u308B\u305F\u3073\u306B\u3001GUI\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u3092\u901A\u3057\u3066\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u9001\u4FE1\u3055\u308C\u308B\u306E\u307F\u3060\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F2\u3064\u306EFreeRTOS\u30BF\u30B9\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 1\u3064\u306FGUI\u7528\u3001\u3082\u30461\u3064\u306FLED\u7528\u3067\u3059\u3002 \uFF08\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#from-multiple-tasks"
  }), `\u8907\u6570\u30BF\u30B9\u30AF\u306E\u30C7\u30E2`), `\u306E\u30DC\u30BF\u30F3\uFF65\u30BF\u30B9\u30AF\u304C\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u307E\u307E\u306B\u306A\u3063\u3066\u304A\u308A\u3001\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\uFF65\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u304C\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9\u306B\u79FB\u52D5\u3057\u305F\u4F8B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002\uFF09`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);