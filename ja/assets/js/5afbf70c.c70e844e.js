"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5439],{

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

/***/ 45075:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22425);
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
  id: "operating-system",
  title: "\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/operating-system",
  "id": "basic-concepts/operating-system",
  "title": "\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/operating-system",
  "permalink": "/4.20/ja/docs/basic-concepts/operating-system",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "operating-system",
    "title": "\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
    "permalink": "/4.20/ja/docs/basic-concepts/performance"
  },
  "next": {
    "title": "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF",
    "permalink": "/4.20/ja/docs/basic-concepts/memory-usage"
  }
};
const assets = {};

const toc = [{
  value: "\u6982\u8981",
  id: "introduction",
  level: 2
}, {
  value: "\u4ED6\u306E\u30BF\u30B9\u30AF\u3078\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30A4\u30F3\u30BF\u30EA\u30FC\u30D6",
  id: "interleaving-other-tasks-with-the-user-interface",
  level: 3
}, {
  value: "\u4F8B",
  id: "an-example",
  level: 3
}, {
  value: "RTOS",
  id: "rtos",
  level: 2
}, {
  value: "\u30BF\u30B9\u30AF\u306E\u901A\u4FE1",
  id: "task-communication",
  level: 3
}, {
  value: "\u5272\u8FBC\u307F\u306E\u51E6\u7406",
  id: "handling-interrupts",
  level: 3
}, {
  value: "FreeRTOS",
  id: "freertos",
  level: 3
}, {
  value: "TouchGFX OS Wrappers",
  id: "touchgfx-os-wrappers",
  level: 3
}, {
  value: "RTOS\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408",
  id: "no-rtos",
  level: 2
}, {
  value: "Model::tick",
  id: "modeltick",
  level: 3
}, {
  value: "OSWrappers",
  id: "oswrappers",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "introduction"
  }), `\u6982\u8981`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306E\u4F7F\u7528\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D44\u8FBC\u307F\u30C7\u30D0\u30A4\u30B9\u306F\u9032\u5316\u3092\u7D9A\u3051\u3066\u3044\u307E\u3059\u3002 \u307B\u3068\u3093\u3069\u306E\u30B7\u30B9\u30C6\u30E0\u3067\u3001\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u51E6\u7406\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3084\u30BF\u30B9\u30AF\u306E\u8907\u96D1\u306A\u5236\u5FA1\u3092\u884C\u3046\u3053\u3068\u304C\u591A\u304F\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30BF\u30B9\u30AF\u306E\u4F8B\u306B\u306F\u3001\u30E2\u30FC\u30BF\u5236\u5FA1\u3001\u30C7\u30FC\u30BF\u53CE\u96C6\u3001\u307E\u305F\u306F\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u95A2\u9023\u30BF\u30B9\u30AF\u306A\u3069\u304C\u3042\u308A\u307E\u3059\u3002 \u591A\u304F\u306E\u6700\u65B0\u30C7\u30D0\u30A4\u30B9\u306B\u306F\u3001\u30C7\u30FC\u30BF\uFF65\u30BB\u30F3\u30BF\u30FC\u3068\u306E\u901A\u4FE1\u7528\u306ETCP/IP\u306A\u3069\u306E\u901A\u4FE1\u30D7\u30ED\u30C8\u30B3\u30EB\uFF65\u30B9\u30BF\u30C3\u30AF\u3084\u3001\u4ED6\u306E\u30ED\u30FC\u30AB\u30EB\uFF65\u30C7\u30D0\u30A4\u30B9\u3068\u306E\u901A\u4FE1\u7528\u306EBluetooth\u306A\u3069\u306E\u7121\u7DDA\u30B9\u30BF\u30C3\u30AF\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interleaving-other-tasks-with-the-user-interface"
  }), `\u4ED6\u306E\u30BF\u30B9\u30AF\u3078\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30A4\u30F3\u30BF\u30EA\u30FC\u30D6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3068\u5C11\u6570\u306E\u5358\u7D14\u306A\u30B5\u30DD\u30FC\u30C8\uFF65\u30BF\u30B9\u30AF\u306B\u3088\u308B\u3001\u5358\u7D14\u306A\u30C7\u30D0\u30A4\u30B9\uFF08\u30A8\u30C3\u30B0\uFF65\u30BF\u30A4\u30DE\u30FC\u306A\u3069\uFF09\u3067\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u3092\u69CB\u7BC9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5B9A\u671F\u7684\u306A\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u66F4\u65B0\u306E\u4ED6\u306B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3059\u308B\u30BF\u30B9\u30AF\u306F\u307B\u3068\u3093\u3069\u306A\u3044\u306E\u3067\u3001\u4ED6\u306E\u30BF\u30B9\u30AF\u306E\u5B9F\u884C\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306B\u304B\u306A\u308A\u4E0A\u624B\u304F\u7D44\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u30E2\u30FC\u30BF\u306E\u8ABF\u7BC0\u306A\u3069\u3001\u500B\u5225\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u300C\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3067\u5B9F\u884C\u300D\u3055\u308C\u308B\u975E\u5E38\u306B\u9AD8\u5EA6\u306A\u6A5F\u80FD\u304C\u30C7\u30D0\u30A4\u30B9\u306B\u542B\u307E\u308C\u305F\u9014\u7AEF\u306B\u3001\u305D\u3046\u3057\u305F\u8981\u4EF6\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u306A\u304C\u30892\u3064\u306E\u30BF\u30B9\u30AF\u30921\u3064\u306B\u7D71\u5408\u3059\u308B\u3053\u3068\u306F\u56F0\u96E3\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306E\u8A18\u4E8B\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u6ED1\u3089\u304B\u306A\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u3001\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u3092\u63CF\u753B\u3057\u7D9A\u3051\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4ED6\u306E\u30BF\u30B9\u30AF\u306E\u5B9F\u884C\u4E2D\u306B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u304C\u3053\u308C\u3092\u4E00\u6642\u505C\u6B62\u3059\u308B\u3068\u3001\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u4F4E\u4E0B\u3057\u307E\u3059\u3002 \u540C\u69D8\u306B\u3001\u4ED6\u306E\u30BF\u30B9\u30AF\u3092\u30D5\u30EC\u30FC\u30E0\u3068\u30D5\u30EC\u30FC\u30E0\u306E\u9593\uFF08\u30A2\u30A4\u30C9\u30EB\u6642\u9593\uFF09\u306B\u306E\u307F\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u8907\u96D1\u306A\u30B7\u30FC\u30F3\u3092\u63CF\u753B\u3057\u3066\u3044\u3066\u30A2\u30A4\u30C9\u30EB\u6642\u9593\u304C\u5C11\u306A\u304F\u306A\u308B\u3068\u3001\u3053\u308C\u3089\u306E\u30BF\u30B9\u30AF\u306B\u652F\u969C\u304C\u51FA\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u5F71\u97FF\u304B\u3089\u3001UI\u30BF\u30B9\u30AF\u306B\u4ED6\u306E\u8907\u96D1\u306A\u30BF\u30B9\u30AF\u3092\u624B\u52D5\u3067\u30A4\u30F3\u30BF\u30EA\u30FC\u30D6\u3059\u308B\u3053\u3068\u306F\u56F0\u96E3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "an-example"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u6B8B\u308A\u306E\u90E8\u5206\u3067\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4ED8\u304D\u306EBluetooth\u30B9\u30D4\u30FC\u30AB\u3092\u69CB\u7BC9\u3059\u308B\u3053\u3068\u306B\u3057\u307E\u3059\u3002 \u6B21\u306E3\u3064\u306E\u4E3B\u306A\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5B9F\u884C\u3059\u308B\u3001\u97F3\u697D\u3092\u30B9\u30D4\u30FC\u30AB\u306B\u9001\u308B\u3001\u4ED6\u306E\u30C7\u30D0\u30A4\u30B9\u3068\u901A\u4FE1\u3059\u308B\u305F\u3081\u306BBluetooth\u30B9\u30BF\u30C3\u30AF\u3092\u51E6\u7406\u3059\u308B\u3001\u3068\u3044\u30463\u3064\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4E2D\u5FC3\u306B\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u304C\u3001\u3053\u306E\u30B1\u30FC\u30B9\u3067\u306F\u9069\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u306F\u3059\u3050\u306B\u308F\u304B\u308B\u3067\u3057\u3087\u3046\u3002\u305F\u3068\u3048\u3070\u3001\u97F3\u697D\u306E\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u30D6\u30EC\u30F3\u30C9\u3057\u3001\u518D\u751F\u958B\u59CB\u7528\u306E\u30B3\u30FC\u30C9\u3092\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u5185\u306E\u30DC\u30BF\u30F3\u7528\u306E\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30E9\u306B\u914D\u7F6E\u3059\u308B\u3088\u3046\u306A\u3053\u3068\u3092\u60F3\u50CF\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002 \u97F3\u697D\u304C\u59CB\u307E\u308B\u307E\u3067\u306E\u6642\u9593\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002 \u5B9F\u884C\u4E2D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u3057\u3070\u3089\u304F\u306E\u9593\u505C\u6B62\u3057\u3066\u3057\u307E\u3046\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306B\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u5FDC\u7B54\u6027\u306F\u3001\u97F3\u697D\u306E\u30BF\u30B9\u30AF\uFF08\u958B\u59CB\u3001\u505C\u6B62\u3001\u6B21\u3078\u306A\u3069\uFF09\u306E\u5B9F\u884C\u6642\u9593\u306B\u4F9D\u5B58\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u4E00\u822C\u7684\u306A\u554F\u984C\u306A\u306E\u3067\u3001\u3053\u308C\u304B\u3089\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3067\u306F\u3001Bluetooth\u304B\u3089\u97F3\u697D\u3082\u958B\u59CB\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5834\u5408\u306F\u3069\u3046\u306A\u308B\u3067\u3057\u3087\u3046\u304B\uFF1F \u4F55\u3089\u304B\u306E\u65B9\u6CD5\u3067\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u95A2\u4E0E\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308B\u3067\u3057\u3087\u3046\u304B\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305F\u3001\u97F3\u697D\u306E\u30BF\u30B9\u30AF\u306E\u512A\u5148\u5EA6\u3092\u4E0A\u3052\u3066\u3001\u97F3\u697D\u304C\u9014\u5207\u308C\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3069\u3046\u3057\u305F\u3089\u3088\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F \u540C\u6642\u306B\u3001\u97F3\u697D\u306E\u30BF\u30B9\u30AF\u304C\u5B9F\u884C\u3055\u308C\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u6700\u9AD8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3067\u5B9F\u884C\u3055\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u3059\u3079\u3066\u306F\u3001\u30BF\u30B9\u30AF\u51E6\u7406\u3001\u901A\u4FE1\u624B\u6BB5\u3001\u540C\u671F\u5316\u3092\u5099\u3048\u305F\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u3001\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u89E3\u6C7A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "rtos"
  }), `RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\uFF65\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\uFF08RTOS\uFF09\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u30B5\u30FC\u30D3\u30B9\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u30BF\u30B9\u30AF\u306B\u30B3\u30F3\u30D4\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30EA\u30BD\u30FC\u30B9\u3092\u914D\u5E03\u3059\u308B\u5C0F\u898F\u6A21\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u72EC\u7ACB\u3057\u306A\u304C\u3089\u3082\u9023\u643A\u3057\u3042\u3046\u591A\u6570\u306E\u30BF\u30B9\u30AF\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u69CB\u7BC9\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30BF\u30B9\u30AF\u306F\u3001\u4F5C\u696D\u767A\u751F\u6642\u306B\u3001RTOS\u306B\u3088\u3063\u3066\u512A\u5148\u5EA6\u306B\u5F93\u3063\u3066\u540C\u6642\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u306E\u30B8\u30E7\u30D6\u3092\u3001\u512A\u5148\u5EA6\u306E\u9AD8\u3044\u30BF\u30B9\u30AF\u3068\u512A\u5148\u5EA6\u306E\u4F4E\u3044\u30BF\u30B9\u30AF\u306B\u5206\u5272\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 Bluetooth\u30C7\u30FC\u30BF\u304C\u5230\u7740\u3057\u305F\u3089\u3001\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u975E\u5E38\u306B\u9AD8\u901F\u3067\u8AAD\u307F\u53D6\u308A\u3001\u3088\u308A\u5927\u304D\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u305D\u308C\u3092\u914D\u7F6E\u3059\u308B\u3053\u3068\u3092\u8003\u3048\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002 \u30C7\u30FC\u30BF\u306E\u51E6\u7406\u306F\u3001\u5C11\u3057\u5EF6\u671F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u3088\u3046\u306B\u3001\u6700\u7D42\u7684\u306B\u306F2\u3064\u306EBluetooth\u30BF\u30B9\u30AF\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F8B\u3067\u306F\u3001\u30E1\u30A4\u30F3\u95A2\u6570\u304B\u30894\u3064\u306E\u30BF\u30B9\u30AF\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main() {
  ...
  os_start_task(gui_task,      medium_priority);
  os_start_task(music_task,    low_priority);
  os_start_task(bt_comm_task,  high_priority);
  os_start_task(bt_appl_task,  low_priority);
  os_start_scheduler();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u3067\u3082\u3001\u540C\u3058\u3088\u3046\u306A\u5206\u5272\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C7\u30FC\u30BF\u3092\u30B9\u30D4\u30FC\u30AB\u306B\u9001\u308B\u30BF\u30B9\u30AF\u306F\u512A\u5148\u5EA6\u304C\u9AD8\u304F\u3001\u518D\u751F\u4E2D\u306E\u6B4C\u3092\u5236\u5FA1\u3057\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u901A\u77E5\u3092\u9001\u308B\u30BF\u30B9\u30AF\u306F\u512A\u5148\u5EA6\u304C\u4F4E\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E\u3088\u3046\u306B\u7570\u306A\u308B\u512A\u5148\u5EA6\u3092\u4F7F\u7528\u3057\u305F\u7D50\u679C\u3001\u51E6\u7406\u3059\u3079\u304D\u30C7\u30FC\u30BF\u304C\u5B58\u5728\u3059\u308B\u3068\u304D\u306B\u306Fbt_comm_task\u304C\u5B9F\u884C\u3055\u308C\u3001\u305D\u308C\u4EE5\u5916\u306F\u30E6\u30FC\u30B6\u30FB\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30BF\u30B9\u30AF\u304C\u5B9F\u884C\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30BF\u30B9\u30AF\u304C\u8868\u793A\u3092\u5F85\u6A5F\u3057\u3066\u3044\u308B\u9593\u306B\u30012\u3064\u306E\u512A\u5148\u5EA6\u306E\u4F4E\u3044\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u304C\u3001\u3053\u306E\u6642\u9593\u914D\u5206\u3092\u81EA\u52D5\u7684\u306B\u51E6\u7406\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u306ETouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u8868\u793A\u3092\u5F85\u6A5F\u3057\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\uFF08ChromArt\uFF09\u304C\u8981\u7D20\u306E\u63CF\u753B\u3092\u5B8C\u4E86\u3059\u308B\u306E\u3092\u5FC5\u305A\u5F85\u6A5F\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u512A\u5148\u5EA6\u306E\u4F4E\u3044\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3067\u304D\u308B\u3001\u7D30\u5207\u308C\u306E\u4E00\u6642\u505C\u6B62\u304C\u591A\u6570\u767A\u751F\u3059\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u306F\u3001\u512A\u5148\u5EA6\u306E\u9AD8\u3044\u30BF\u30B9\u30AF\u304C\u5F85\u6A5F\u4E2D\u3067\u3042\u308C\u3070\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u3053\u308C\u3089\u306E\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3059\u308B\u3088\u3046\u306B\u81EA\u52D5\u7684\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "task-communication"
  }), `\u30BF\u30B9\u30AF\u306E\u901A\u4FE1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8907\u6570\u306E\u30BF\u30B9\u30AF\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u3053\u308C\u3089\u306E\u30BF\u30B9\u30AF\u9593\u306E\u901A\u4FE1\u304C\u5B89\u5168\u306B\u884C\u308F\u308C\u308B\u305F\u3081\u306E\u65B9\u6CD5\u3082\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 1\u3064\u306E\u7C21\u5358\u306A\u4F8B\u3068\u3057\u3066\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\u30FB\u30BF\u30B9\u30AF\u3078\u306E\u901A\u4FE1\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u7279\u306B\u3001gui_task\u306B\u3088\u3063\u3066\u6B4C\u306E\u518D\u751F\u958B\u59CB\u304C\u8981\u6C42\u3055\u308C\u308B\u307E\u3067\u3001\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\u30FB\u30BF\u30B9\u30AF\u304C\u5F85\u6A5F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u3092\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306E\u7C21\u5358\u306A\u65B9\u6CD5\u306F\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\u30FB\u30BF\u30B9\u30AF\u306F\u3001\u30AD\u30E5\u30FC\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u5165\u308C\u3089\u308C\u308B\u307E\u3067\u3001\u30B9\u30EA\u30FC\u30D7\u72B6\u614B\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u30AD\u30E5\u30FC\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u5165\u308C\u3089\u308C\u3001\u512A\u5148\u5EA6\u306E\u9AD8\u3044\u30BF\u30B9\u30AF\u304C\u30D3\u30B8\u30FC\u72B6\u614B\u3067\u306A\u3051\u308C\u3070\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u304C\u30BF\u30B9\u30AF\u3092\u30A6\u30A7\u30A4\u30AF\u30A2\u30C3\u30D7\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `   ...
   music_task_input_queue = os_create_queue(10); //10 element queue
   ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067"Play"\u304C\u62BC\u3055\u308C\u305F\u3089\u3001\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u306E\u30AD\u30E5\u30FC\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenMusic::handlePlayPressed()
{
   os_send_message(music_task_input_queue, play_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u306F\u3001\u30AD\u30E5\u30FC\u3092\u8AAD\u307F\u8FBC\u307F\u306A\u304C\u3089\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5230\u7740\u3092\u5F85\u3061\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u5230\u7740\u3059\u308B\u307E\u3067\u30BF\u30B9\u30AF\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
Message message;
os_receive_message(music_task_input_queue, &message);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u306E\u30AD\u30E5\u30FC\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u308C\u305F\u5F8C\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u5B9F\u884C\u3092\u7D9A\u3051\u3001\u3067\u304D\u308B\u9650\u308A\u9AD8\u901F\u3067\u30D5\u30EC\u30FC\u30E0\u3092\u63CF\u753B\u3057\u307E\u3059\u3002 \u518D\u751F\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u3059\u3050\u306B\u51E6\u7406\u3059\u308B\u306E\u306B\u3001\u6642\u9593\u3092\u7121\u99C4\u306B\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3057\u304B\u3057\u3001\u305D\u306E\u63CF\u753B\u304C\u5B8C\u4E86\u3057\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u63CF\u753B\u306E\u524D\u306BUI\u30BF\u30B9\u30AF\u304C\u5F85\u6A5F\u4E2D\u3067\u3042\u308C\u3070\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u304C\u5B9F\u884C\u5BFE\u8C61\u3092\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u306B\u5909\u66F4\u3057\u3001\u7740\u4FE1\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u51E6\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u69D8\u306B\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u5165\u529B\u30AD\u30E5\u30FC\u3092\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3067\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u306F\u3001\u6B4C\u304C\u7D42\u4E86\u3057\u305F\u3068\u304D\u306A\u3069\u306B\u3001\u901A\u77E5\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30BF\u30B9\u30AF\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5F85\u3064\u306E\u3067\u306F\u306A\u304F\u3001\u30D6\u30ED\u30C3\u30AF\u3059\u308B\u3053\u3068\u306A\u304F\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u7740\u4FE1\u3057\u3066\u3044\u308B\u304B\u3059\u3070\u3084\u304F\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u7740\u4FE1\u3057\u3066\u3044\u308C\u3070\u3053\u308C\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u5185\u306E\u30BF\u30B9\u30AF\u9593\u306B\u975E\u5E38\u306B\u7DE9\u3044\u3064\u306A\u304C\u308A\u3092\u3082\u305F\u3089\u3057\u307E\u3059\u3002 \u5B9F\u969B\u306B\u306F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u305B\u305A\u306B\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF\uFF65\u30BF\u30B9\u30AF\u3092\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001Bluetooth\u30BF\u30B9\u30AF\u304B\u3089\u97F3\u697D\u3092\u7C21\u5358\u306B\u958B\u59CB\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "handling-interrupts"
  }), `\u5272\u8FBC\u307F\u306E\u51E6\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306E\u30BF\u30B9\u30AF\u306F\u3001\u5272\u8FBC\u307F\u3078\u306E\u5FDC\u7B54\u3068\u3057\u3066\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u3053\u306E\u4F8B\u3068\u3057\u3066Bluetooth\u901A\u4FE1\u30BF\u30B9\u30AF\u3092\u6319\u3052\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30BF\u30B9\u30AF\u306F\u3001Bluetooth\u30C1\u30C3\u30D7\u306B\u65B0\u3057\u3044\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u63D0\u4F9B\u3055\u308C\u305F\u3068\u304D\u306B\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u5272\u8FBC\u307F\u3092\u53D7\u3051\u53D6\u3063\u305F\u3068\u304D\u3001\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9\u304B\u3089\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void BT_DataAvailable_Handler(void)
{
  os_send_message(bt_data_queue, data_available_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E5\u30FC\u4EE5\u5916\u306E\u540C\u671F\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30BB\u30DE\u30D5\u30A9\u3084\u30DF\u30E5\u30FC\u30C6\u30C3\u30AF\u30B9\u306A\u3069\u304C\u591A\u304F\u306E\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u898B\u53D7\u3051\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "freertos"
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u958B\u767A\u6642\u306B\u3001FreeRTOS\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u30C6\u30B9\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 TouchGFX\u306F\u8981\u4EF6\u304C\u975E\u5E38\u306B\u5C11\u306A\u304F\u3001\u4ED6\u306E\u591A\u304F\u306E\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u4E0A\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u304C\u3001\u30E6\u30FC\u30B6\u304COS\u306B\u95A2\u3057\u3066\u7279\u5B9A\u306E\u8981\u4EF6\u3092\u6301\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u3001FreeRTOS\u3067\u958B\u59CB\u3059\u308B\u306E\u304C\u3088\u3044\u3067\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\u306F\u3001\u5E02\u8CA9\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u7121\u6599\u3067\u4F7F\u7528\u3067\u304D\u308B\u30B7\u30F3\u30D7\u30EB\u306A\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u3059\u3002 STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3068\u5171\u306B\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u3067\u63D0\u4F9B\u3055\u308C\u3001\u3059\u3079\u3066\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5411\u3051\u306B\u3059\u3050\u5229\u7528\u3067\u304D\u308B\u30B5\u30F3\u30D7\u30EB\u3082\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\u306B\u95A2\u3059\u308B\u8A73\u7D30\u3068\u30E9\u30A4\u30BB\u30F3\u30B9\u6761\u9805\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.freertos.org/"
  }), `freertos.org`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-os-wrappers"
  }), `TouchGFX OS Wrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3067\u306F\u3001FreeRTOS\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u30011\u3064\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304A\u3088\u3073\u30BB\u30DE\u30D5\u30A9\u3068\u306E\u540C\u671F\u3092\u53D6\u308A\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u4FDD\u8B77\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/os/OSWrappers.cpp`), `\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308BOSWrappers\u30AF\u30E9\u30B9\u3067\u51E6\u7406\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30AF\u30E9\u30B9\u306B\u306F\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E1\u30BD\u30C3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAC\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u3078\u306E\u6E96\u5099\u304C\u3067\u304D\u305F\u3089\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u308B\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `waitForVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F85\u6A5F\u306E\u305F\u3081\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 signalVSync\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u307E\u3067\u3001\u623B\u308A\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `isVSyncAvailable()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09VSync\u304C\u767A\u51FA\u3057\u305F\u3089true\u3092\u8FD4\u3057\u307E\u3059\u3002 waitForVSync\u3067\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u9632\u3050\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalRenderingDone()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u672A\u51E6\u7406\u306EVSync\u4FE1\u53F7\u3092\u3059\u3079\u3066\u524A\u9664\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `takeFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30C0\u30A4\u30EC\u30AF\u30C8\uFF65\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u305F\u3081\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u3068\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `giveFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C0\u30A4\u30EC\u30AF\u30C8\uFF65\u30A2\u30AF\u30BB\u30B9\u3092\u518D\u5EA6\u89E3\u653E\u3059\u308B\u305F\u3081\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5B9F\u88C5\u3067\u306F\u3001VSync\uFF08\u30D5\u30EC\u30FC\u30E0\uFF09\u540C\u671F\u3092\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\uFF65\u30AD\u30E5\u30FC\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\uFF65\u30BF\u30B9\u30AF\u306F\u3001\u6B21\u306EVSync\u304C\u767A\u51FA\u3055\u308C\u308B\u307E\u3067\u30B9\u30EA\u30FC\u30D7\u72B6\u614B\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306EOSWrapper\u30AF\u30E9\u30B9\u306F\u3001TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002 Generator\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "no-rtos"
  }), `RTOS\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306A\u3057\u3067\u3082\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306B\u306F\u3001\u30E1\u30A4\u30F3\u95A2\u6570\u5185\u3067\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u76F4\u63A5\u958B\u59CB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main()
{
    ...
    touchgfx::HAL::getInstance()->taskEntry();

    //never returns
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\u3092\u4F7F\u7528\u3057\u306A\u304F\u3066\u3082\u3001TouchGFX\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306F\u4F4E\u4E0B\u3057\u307E\u305B\u3093\u3002 \u305F\u3060\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8CA0\u8377\u304C\u5897\u3048\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u3001TouchGFX\u3068\u4E00\u7DD2\u306B\u4ED6\u306E\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u96E3\u3057\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u8FF0\u3057\u305F\u3088\u3046\u306B\u3001\u30E1\u30A4\u30F3\u95A2\u6570\u5185\u3067\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5B9F\u884C\u4E2D\u306B\u3001\u4ED6\u306E\u30BF\u30B9\u30AF\u3092\u624B\u52D5\u3067\u99C6\u52D5\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "modeltick"
  }), `Model::tick`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u306E\u65B9\u6CD5\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u3054\u3068\u306B1\u56DE\u305A\u3064Model\u30AF\u30E9\u30B9\u5185\u3067\u30BF\u30B9\u30AF\uFF65\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
   //run other tasks here
   music_task_tick();
   bluetooth_task_tick();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30EC\u30FC\u30E0\u3054\u3068\u306B1\u56DE\u305A\u3064\u3001\u3059\u3079\u3066\u306E\u30BF\u30B9\u30AF\u304C\u5B9F\u884C\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u63CF\u753B\u6642\u9593\u306B\u3001\u30BF\u30B9\u30AF\u306E\u5B9F\u884C\u306B\u304B\u304B\u308B\u6642\u9593\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 \u3059\u3079\u3066\u306E\u30BF\u30B9\u30AF\u304C\u3059\u3070\u3084\u304F\u7D42\u4E86\u3059\u308B\u3088\u3046\u306A\u5358\u7D14\u306A\u30B7\u30B9\u30C6\u30E0\u3067\u3042\u308C\u3070\u3001\u3053\u308C\u306F\u30B7\u30F3\u30D7\u30EB\u3067\u8A31\u5BB9\u3067\u304D\u308B\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "oswrappers"
  }), `OSWrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u30461\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001OSWrappers\u30AF\u30E9\u30B9\u5185\u3067\u30D5\u30C3\u30AF\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u524D\u8FF0\u306E\u3068\u304A\u308A\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u5F85\u6A5F\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u308B\u3068\u3001\u3053\u306E\u30AF\u30E9\u30B9\u3067\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u308C\u3092\u5229\u7528\u3057\u3066\u3001\u3053\u3046\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u3092\u5F85\u6A5F\u3059\u308B\u9593\u306B\u5225\u306E\u4F5C\u696D\u3092\u5B9F\u884C\u3059\u308B\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}

void OSWrappers::waitForVSync()
{
    vsync_sem = 0; //clear the flag, so we wait for the next vsync
    do {
        // Perform other work while waiting
        music_task_tick();
        bluetooth_task_tick();
    } while(!vsync_sem);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30EC\u30FC\u30E0\u9593\u306E\u30A2\u30A4\u30C9\u30EB\uFF65\u30BF\u30B9\u30AF\u3092\u4ED6\u306E\u30BF\u30B9\u30AF\u306B\u3088\u3063\u3066\u5B8C\u5168\u306B\u5229\u7528\u3067\u304D\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30BF\u30B9\u30AF\u304C\u53D6\u5F97\u3059\u308B\u6642\u9593\u306E\u9577\u3055\u306F\u3055\u307E\u3056\u307E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u30461\u3064\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u3001OSWrappers::isVSyncAvailable\u95A2\u6570\u3068OSWrappers::signalRenderingDone\u95A2\u6570\u306E\u4F7F\u7528\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u8907\u6570\u306Ewhile\u30EB\u30FC\u30D7\u3092\u6301\u3064\u3053\u3068\u3092\u56DE\u907F\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u95A2\u6570\u306F\u3001No-operating-system\u8A2D\u5B9A\u304C\u9078\u629E\u3055\u308C\u305F\u3068\u304D\u306B\u3001TouchGFXGenerator\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u91CD\u8981\u306A\u3053\u3068\u306F\u3001\u30BF\u30B9\u30AF\u304C\u305D\u306E\u4F5C\u696D\u3092\u3001\u304A\u3088\u305D1\u30DF\u30EA\u79D2\u306E\u5C0F\u3055\u306A\u30B9\u30C6\u30C3\u30D7\u306B\u5206\u5272\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u3068\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u963B\u5BB3\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);