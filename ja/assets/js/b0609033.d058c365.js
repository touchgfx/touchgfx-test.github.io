"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8243],{

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

/***/ 59301:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
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
  id: "performance",
  title: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/performance",
  "id": "basic-concepts/performance",
  "title": "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/performance.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/performance",
  "permalink": "/4.20/ja/docs/basic-concepts/performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "performance",
    "title": "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7",
    "permalink": "/4.20/ja/docs/basic-concepts/rendering"
  },
  "next": {
    "title": "\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0",
    "permalink": "/4.20/ja/docs/basic-concepts/operating-system"
  }
};
const assets = {};


const toc = [{
  value: "\u63CF\u753B\u6642\u9593\u306E\u6E2C\u5B9A",
  id: "measuring-the-rendering-time",
  level: 2
}, {
  value: "\u30ED\u30B9\u30C8\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u30AB\u30A6\u30F3\u30C8",
  id: "counting-the-lost-frames",
  level: 2
}, {
  value: "\u30ED\u30B9\u30C8\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u88DC\u6B63",
  id: "compensating-for-lost-frames",
  level: 3
}, {
  value: "\u63CF\u753B\u6642\u9593\u3078\u306E\u5F71\u97FF\u8981\u56E0",
  id: "what-affects-the-rendering-time",
  level: 2
}, {
  value: "\u66F4\u65B0\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u91CF",
  id: "how-much-of-the-screen-is-updated",
  level: 3
}, {
  value: "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u5185\u306E\u30EC\u30A4\u30E4\u6570",
  id: "the-number-of-layers-in-the-graphics",
  level: 3
}, {
  value: "\u30D4\u30AF\u30BB\u30EB\u63CF\u753B\u306E\u8907\u96D1\u3055",
  id: "the-complexity-of-rendering-the-pixels",
  level: 3
}, {
  value: "\u63CF\u753B\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2",
  id: "hardware-support-for-rendering",
  level: 3
}, {
  value: "\u63CF\u753B\u6642\u9593\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408",
  id: "when-should-you-consider-rendering-time",
  level: 2
}, {
  value: "\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u7121\u52B9\u5316\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u6700\u9069\u5316",
  id: "optimize-performance-by-invalidating-content",
  level: 2
}, {
  value: "TextArea::invalidateContent()\u3092\u4F7F\u7528\u3059\u308B\u4F8B",
  id: "textareainvalidatecontent\u3092\u4F7F\u7528\u3059\u308B\u4F8B",
  level: 3
}, {
  value: "\u6700\u9069\u306A\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5F97\u308B\u305F\u3081\u306E\u30D2\u30F3\u30C8",
  id: "tips-to-get-good-performance",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306E\u9AD8\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3068\u306F\u3001\u5FC5\u8981\u306A\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\u52B9\u679C\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3082\u5B9F\u73FE\u3057\u306A\u304C\u3089\u3001\u9AD8\u3044\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u3092\u9054\u6210\u3067\u304D\u3066\u3044\u308B\u72B6\u614B\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u305F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u304B\u3089\u53D7\u3051\u308B\u5F71\u97FF\u306B\u3064\u3044\u3066\u601D\u3044\u51FA\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u4ECA\u56DE\u3082\u3001\u30D1\u30E9\u30EC\u30EBRGB\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304CLTDC\u304A\u3088\u30732\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u3068\u4EEE\u5B9A\u3057\u307E\u3059\u3002 \u57FA\u672C\u7684\u306A\u72B6\u6CC1\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30C0\u30D6\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u6BCE\u79D260\u56DE\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3055\u308C\u308B\u3068\u60F3\u5B9A\u3055\u308C\u308B\u306E\u3067\u3001\u5404\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u9593\u9694\u306F\u304A\u3088\u305D16 ms\u3067\u3059\u3002 \u6B21\u306E\u3088\u3046\u306A\u8A08\u7B97\u306B\u306A\u308A\u307E\u3059\u3002 1\u79D2/ 60 = 0.01667\u79D2= 16.67 ms`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A11\u306E\u8EE2\u9001\u304C\u958B\u59CB\u3057\u305F\u6642\u70B9\u3067\u3001\u30D5\u30EC\u30FC\u30E01\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A12\u306B\u63CF\u753B\u3059\u308B\u3053\u3068\u3092\u958B\u59CB\u3057\u307E\u3059\u3002 \u6B21\u306E\u8EE2\u9001\u304C\u958B\u59CB\u3055\u308C\u308B\u524D\u306B\u3001\u30D5\u30EC\u30FC\u30E01\u306E\u63CF\u753B\u304C\u7D42\u4E86\u3059\u308C\u3070\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A12\u3092\u8EE2\u9001\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 16.67 ms\u4EE5\u5185\u306B\u63CF\u753B\u304C\u7D42\u4E86\u3057\u306A\u3044\u5834\u5408\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A11\u304C\u518D\u5EA6\u8EE2\u9001\u3055\u308C\u308B\u306E\u3067\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8868\u793A\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306E\u6642\u9593\u304C16.67 ms\u3092\u8D85\u3048\u308B\u5834\u5408"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u72B6\u6CC1\u306F\u30ED\u30B9\u30C8\uFF65\u30D5\u30EC\u30FC\u30E0\u3068\u547C\u3070\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53CE\u96C6\u304A\u3088\u3073\u66F4\u65B0\u30D5\u30A7\u30FC\u30BA\u306B\u304B\u304B\u308B\u6642\u9593\u306F\u901A\u5E38\u306F\u6975\u3081\u3066\u77ED\u3044\uFF081 ms\u672A\u6E80\u306A\u3069\uFF09\u306E\u3067\u3001\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306B\u304B\u304B\u308B\u6642\u9593\u5168\u4F53\u3092\u8003\u3048\u308C\u3070\u3001\u4E8B\u5B9F\u4E0A\u7121\u8996\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u4EE5\u4E0B\u306E\u8AAC\u660E\u3067\u3082\u4E00\u822C\u7684\u306B\u3082\u3001\u63CF\u753B\u6642\u9593\u3092\u8003\u3048\u308B\u969B\u3001\u305D\u3053\u306B\u306F\u53CE\u96C6\u304A\u3088\u3073\u66F4\u65B0\u30D5\u30A7\u30FC\u30BA\u3092\u542B\u3081\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u304F\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u63CF\u753B\u6642\u9593\u304C16.67 ms\u306E\u5236\u9650\u3092\u8D85\u3048\u308B\u5834\u5408\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u306F\u6BCE\u79D230\u30D5\u30EC\u30FC\u30E0\uFF0830 fps\uFF09\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u304C\u5168\u822C\u7684\u306B16.67 ms\u3092\u4E0B\u56DE\u308B\u3082\u306E\u306E\u3001\u4E00\u90E8\u306E\u30D5\u30EC\u30FC\u30E0\u306716.67 ms\u3088\u308A\u3082\u9577\u304F\u304B\u304B\u308B\u5834\u5408\u306F\u3001\u5E73\u5747\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u306F60 fps\u306B\u8FD1\u3065\u304F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u30E6\u30FC\u30B6\u306B\u6ED1\u3089\u304B\u306B\u8868\u793A\u3055\u308C\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u306F\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u4E00\u90E8\u304C\u901F\u304F\u8868\u793A\u3055\u308C\u305F\u308A\u3001\u9045\u304F\u8868\u793A\u3055\u308C\u305F\u308A\u3059\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u671B\u307E\u3057\u3044\u73FE\u8C61\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u304C\u9577\u304F\u306A\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002 33 ms\u3092\u5C11\u3057\u4E0A\u56DE\u308B\u3068\u3001\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u304C\u6E96\u5099\u3055\u308C\u308B\u306E\u304C\u8EE2\u90013\u56DE\u3054\u3068\u306B\u306A\u308A\u3001\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u306F20 fps\u306B\u4F4E\u4E0B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `FPS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u5927\u63CF\u753B\u6642\u9593`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `60`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16.67 ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `33.34 ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `20`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `50.00 ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `15`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.67 ms`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8868\u306F\u3001\u6240\u5B9A\u306E\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u306B\u5BFE\u5FDC\u3067\u304D\u308B\u6700\u5927\u63CF\u753B\u6642\u9593\uFF08\u53CE\u96C6\u304A\u3088\u3073\u66F4\u65B0\u30D5\u30A7\u30FC\u30BA\u3092\u542B\u3080\uFF09\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u6700\u9069\u306A\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5B9F\u73FE\u3059\u308B\u306B\u306F\u3001\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u3092\u5B9A\u671F\u7684\u306B\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u76E3\u8996\u3059\u308B\u3053\u3068\u304C\u975E\u5E38\u306B\u6709\u76CA\u3067\u3042\u308B\u3068\u601D\u308F\u308C\u307E\u3059\u3002 \u6B21\u306E2\u3064\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63CF\u753B\u6642\u9593\u306E\u6E2C\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30ED\u30B9\u30C8\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u30AB\u30A6\u30F3\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "measuring-the-rendering-time"
  }), `\u63CF\u753B\u6642\u9593\u306E\u6E2C\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u3092\u6E2C\u5B9A\u3059\u308B\u3068\u3044\u3046\u6700\u521D\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001\u6700\u3082\u8A73\u7D30\u306A\u60C5\u5831\u3092\u3082\u305F\u3089\u3057\u307E\u3059\u3002 \u57FA\u672C\u7684\u306A\u8003\u3048\u65B9\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u8EE2\u9001\u304B\u3089\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\u7D42\u4E86\u307E\u3067\u306E\u6642\u9593\u3092\u6E2C\u5B9A\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u53CE\u96C6\u30D5\u30A7\u30FC\u30BA\u306E\u958B\u59CB\u6642\u306BGPIO\u30AF\u30E9\u30B9\u306E\u95A2\u6570\u3092\u547C\u3073\u51FA\u3057\u3001\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\u306E\u7D42\u4E86\u6642\u306B\u5225\u306E\u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u3088\u3046\u306B\u3057\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3053\u308C\u3089\u306E\u95A2\u6570\u3092\u5B9A\u7FA9\u3057\u3001\u6E2C\u5B9A\u3092\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E2C\u5B9A\u306F\u4EE5\u4E0B\u306E2\u3064\u306E\u65B9\u6CD5\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AA\u30B7\u30ED\u30B9\u30B3\u30FC\u30D7\u306A\u3069\u306E\u5916\u90E8\u306E\u8A08\u6642\u30C7\u30D0\u30A4\u30B9\u3092\u4F7F\u7528: \u30AA\u30B7\u30ED\u30B9\u30B3\u30FC\u30D7\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `set(GPIO_ID)`), `\u30E1\u30BD\u30C3\u30C9\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `clear(GPIO_ID)`), `\u30E1\u30BD\u30C3\u30C9\u3092\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `GPIO`), `\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u3067\u30AA\u30B7\u30ED\u30B9\u30B3\u30FC\u30D7\u306F\u3001\u63CF\u753B\u6642\u9593\u3092\u51FA\u529B\u304C\u30CF\u30A4\u306E\u3068\u304D\u306E\u7D4C\u904E\u6642\u9593\u3068\u3057\u3066\u6E2C\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8\u30BF\u30A4\u30DE\u3092\u4F7F\u7528: \u3082\u30461\u3064\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u306F\u3001sysTick\u30BF\u30A4\u30DE\u306A\u3069\u306E\u5185\u90E8\u30BF\u30A4\u30DE\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 GPIO::set(RENDER_TIME)\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30BF\u30A4\u30DE\u306E\u5024\u3092\u3042\u308B\u5909\u6570\u306B\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002 \u30AF\u30EA\u30A2\uFF65\u30B3\u30FC\u30EB\u304C\u884C\u308F\u308C\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u518D\u5EA6\u30BF\u30A4\u30DE\u3092\u8AAD\u307F\u53D6\u308A\u3001\u524D\u306E\u5024\u3092\u5DEE\u3057\u5F15\u3044\u3066\u63CF\u753B\u6642\u9593\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002 \u30BF\u30A4\u30DE\u306E\u901F\u5EA6\u306B\u3088\u3063\u3066\u6E2C\u5B9A\u306E\u89E3\u50CF\u5EA6\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u4F55\u3089\u304B\u306E\u65B9\u6CD5\u3067\u63CF\u753B\u6642\u9593\u3092\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 1\u3064\u306E\u65B9\u6CD5\u3068\u3057\u3066\u3001\u5024\u3092\u30B0\u30ED\u30FC\u30D0\u30EB\u5909\u6570\u306B\u4FDD\u5B58\u3057\u3001\u305D\u306E\u5024\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u8003\u3048\u3089\u308C\u307E\u3059\u3002 \u3053\u306E\u5024\u306F\u30C7\u30D0\u30C3\u30AC\u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "counting-the-lost-frames"
  }), `\u30ED\u30B9\u30C8\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u30AB\u30A6\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u76F4\u524D\u306E\u53CE\u96C6-\u66F4\u65B0-\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\u3067\u767A\u751F\u3057\u305F\u8EE2\u9001\u306E\u56DE\u6570\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3053\u306E\u5024\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u304C\u5931\u308F\u308C\u3066\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u4F4E\u4E0B\u3057\u3066\u3044\u306A\u3044\u304B\u3069\u3046\u304B\u3001\u7C21\u5358\u306B\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30A6\u30F3\u30C8\u306FHAL\u30AF\u30E9\u30B9\u3067\u5229\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent() {
  tickCounter += 1;
  if (HAL::getInstance()->getLCDRefreshCount() > 1) {
    //Alert programmer somehow
    ...
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compensating-for-lost-frames"
  }), `\u30ED\u30B9\u30C8\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u88DC\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u304C\u5931\u308F\u308C\u3001\u3044\u305A\u308C\u304B\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u4F4E\u4E0B\u3057\u305F\u5834\u5408\u306F\u3001\u3042\u308B\u7A0B\u5EA6\u307E\u3067\u88DC\u6B63\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F85\u3061\u7D9A\u3051\u308B - \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u305D\u306E\u307E\u307E\u7D9A\u3051\u307E\u3059\u3002\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6642\u9593\u304C\u9577\u5F15\u304D\u3001\u30B9\u30E0\u30FC\u30BA\u3067\u306A\u304F\u306A\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u30B9\u30AD\u30C3\u30D7 - \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u306E\u6642\u9593\u304C\u4E88\u5B9A\u3088\u308A\u9577\u304F\u306A\u3089\u306A\u3044\u3088\u3046\u306B\u3001\u4E00\u90E8\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u304C\u5931\u308F\u308C\u305F\u5834\u5408\u3001\u4E00\u90E8\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u81EA\u52D5\u7684\u306B\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u3088\u3046\u306B\u3001TouchGFX\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u5B9F\u969B\u306E\u30D5\u30EC\u30FC\u30E0\u3042\u305F\u308A\u8907\u6570\u56DE\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u30C6\u30A3\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u63CF\u753B\u6642\u9593\u304C\u4E0D\u5747\u7B49\u306A\u5834\u5408\u3067\u3082\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u3088\u308A\u6ED1\u3089\u304B\u306B\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setFrameRateCompensation(bool enabled)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "what-affects-the-rendering-time"
  }), `\u63CF\u753B\u6642\u9593\u3078\u306E\u5F71\u97FF\u8981\u56E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u306B\u306F\u591A\u69D8\u306A\u8981\u56E0\u304C\u5F71\u97FF\u3057\u307E\u3059\u3002\u66F4\u65B0\u90E8\u5206\u306E\u30B5\u30A4\u30BA\u3001\u30EC\u30A4\u30E4\u5316\u306E\u5229\u7528\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8907\u96D1\u3055\u3001\u63CF\u753B\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306A\u3069\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "how-much-of-the-screen-is-updated"
  }), `\u66F4\u65B0\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u306F\u4E00\u822C\u306B\u3001\u66F4\u65B0\u306E\u5FC5\u8981\u304C\u3042\u308B\u30D4\u30AF\u30BB\u30EB\u6570\u306B\u6BD4\u4F8B\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u63CF\u753B\u306B\u6642\u9593\u304C\u304B\u304B\u308A\u3059\u304E\u3066\u3044\u308B\u5834\u5408\u3001\u8003\u3048\u3089\u308C\u308B\u4FEE\u6B63\u306F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u9818\u57DF\u3092\u6E1B\u3089\u3059\u3053\u3068\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u56DE\u8EE2\u3059\u308B\u753B\u50CF\u304C\u3042\u308A\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5341\u5206\u3067\u306A\u3044\u5834\u5408\u3001\u305D\u306E\u753B\u50CF\u306E\u30B5\u30A4\u30BA\u3092\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u3067\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5411\u4E0A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/reducing-image-size.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u753B\u50CF\u30B5\u30A4\u30BA\u3092\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u3067\u63CF\u753B\u6642\u9593\u3092\u77ED\u7E2E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u7121\u52B9\u5316\u3057\u305F\u9818\u57DF\u3092\u518D\u63CF\u753B\u3059\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3064\u307E\u308A\u3001\u5B9F\u969B\u306B\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u304C\u5FC5\u8981\u306A\u9818\u57DF\u306E\u307F\u3092\u7121\u52B9\u5316\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u52B9\u5316\u9818\u57DF\u304C\u5927\u304D\u3044\u307B\u3069\u3001\u63CF\u753B\u6642\u9593\u304C\u9577\u304F\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-number-of-layers-in-the-graphics"
  }), `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u5185\u306E\u30EC\u30A4\u30E4\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306F\u4E92\u3044\u306B\u7A4D\u307F\u91CD\u306A\u308B\u3055\u307E\u3056\u307E\u306A\u8981\u7D20\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 \u8981\u7D20\u306E\u3044\u305A\u308C\u304B\u304C\u66F4\u65B0\u3055\u308C\u308B\u3068\u3001\u901A\u5E38\u306F\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4EE3\u8868\u7684\u306A\u4F8B\u304C\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3001\u30D5\u30EC\u30FC\u30E0\u3001\u3044\u304F\u3064\u304B\u306E\u30C6\u30AD\u30B9\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8981\u7D20\u306E\u30EC\u30A4\u30E4\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u3001\u900F\u660E\u306A\u30D5\u30EC\u30FC\u30E0\u3092\u8868\u793A\u3059\u308BImage\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E0A\u306BTextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u3002 \u3069\u3061\u3089\u3082\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u4E0A\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame-designer-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8981\u7D20\u306E\u30EC\u30A4\u30E4\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u975E\u5E38\u306B\u3088\u304F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u5B9F\u306F\u67D4\u8EDF\u6027\u306E\u9AD8\u3044\u975E\u5E38\u306B\u5BB9\u6613\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u3001\u305F\u3068\u3048\u3070\u3001\u5B9F\u884C\u6642\u306B\u30D5\u30EC\u30FC\u30E0\u3092\u5909\u66F4\u3057\u305F\u308A\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u4E0A\u3067\u30D5\u30EC\u30FC\u30E0\u3084\u30C6\u30AD\u30B9\u30C8\u3092\u79FB\u52D5\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u306B\u95A2\u3059\u308B\u554F\u984C\u306F\u3001\u5B9F\u884C\u6642\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u66F4\u65B0\u3055\u308C\u3001\u518D\u63CF\u753B\u306E\u5FC5\u8981\u304C\u751F\u3058\u305F\u5834\u5408\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3068\u30D5\u30EC\u30FC\u30E0\u3082\u518D\u63CF\u753B\u3057\u3001\u305D\u308C\u304B\u3089\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u6642\u9593\u304C\u5927\u5E45\u306B\u5897\u5927\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u52B9\u5316\u9818\u57DF\u5185\u306E\u30EC\u30A4\u30E4\u304C\u591A\u3044\u307B\u3069\u3001\u63CF\u753B\u6642\u9593\u304C\u9577\u304F\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-complexity-of-rendering-the-pixels"
  }), `\u30D4\u30AF\u30BB\u30EB\u63CF\u753B\u306E\u8907\u96D1\u3055`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u63CF\u753B\u306E\u96E3\u3057\u3055\u306F\u3001\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3067\u540C\u3058\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3069\u306E\u30BF\u30A4\u30D7\u306E\u63CF\u753B\u3067\u3082\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u8A08\u7B97\u7D50\u679C\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u66F8\u304D\u8FBC\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u66F8\u304D\u8FBC\u3080\u30D4\u30AF\u30BB\u30EB\u306E\u8A08\u7B97\u6642\u9593\u306F\u3055\u307E\u3056\u307E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Box\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306A\u3069\u3067\u4F7F\u7528\u3055\u308C\u308B\u56FA\u5B9A\u306E\u8272\u306E\u8A08\u7B97\u6642\u9593\u306F\u4F4E\u304F\u306A\u308A\u307E\u3059\u3002\u30D4\u30AF\u30BB\u30EB\u306E\u8A08\u7B97\u306F\u4E00\u5EA6\u3060\u3051\u884C\u308F\u308C\u3001\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u306B\u518D\u5229\u7528\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u591A\u6570\u306E\u30DC\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306F\u975E\u5E38\u306B\u9AD8\u304F\u306A\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u9AD8\u54C1\u8CEA\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u306A\u3089\u306A\u3044\u306E\u3067\u3001\u3053\u306E\u65B9\u6CD5\u306F\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u306E\u8A08\u7B97\u6642\u9593\u304C\u6B21\u306B\u4F4E\u3044\u306E\u306F\u753B\u50CF\u3067\u3059\u3002\u30D4\u30AF\u30BB\u30EB\u304C\u3059\u3050\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u304B\u3089\u3067\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u66F8\u304D\u8FBC\u3080\u30D4\u30AF\u30BB\u30EB\u306E\u8A08\u7B97\u3067\u554F\u984C\u306B\u306A\u308B\u306E\u306F\u3001\u8272\u306E\u5024\u3092\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u5185\u306E\u6B63\u3057\u3044\u4F4D\u7F6E\u304B\u3089\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u306F\u753B\u50CF\u3088\u308A\u3082\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002\u500B\u3005\u306E\u6587\u5B57\u304C\u5B9F\u969B\u306B\u306F\u5C0F\u3055\u306A\u753B\u50CF\u3068\u3057\u3066\u8868\u73FE\u3055\u308C\u3066\u3044\u308B\u304B\u3089\u3067\u3059\u3002 \u5B9F\u969B\u306E\u3068\u3053\u308D\u3001\u6642\u9593\u304C\u304B\u304B\u308B\u3088\u3046\u306B\u306A\u308B\u306E\u306F\u3001\u591A\u6570\u306E\u5C0F\u3055\u306A\u753B\u50CF\u304C\u3042\u308B\u305F\u3081\u306B\u300C\u958B\u59CB-\u505C\u6B62\u300D\u306E\u6642\u9593\u304C\u5927\u5E45\u306B\u5897\u3048\u308B\u305F\u3081\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u500B\u3005\u306E\u6587\u5B57\u4F4D\u7F6E\u306E\u8A08\u7B97\u304C\u3042\u308A\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u306E\u898B\u6804\u3048\u3092\u3067\u304D\u308B\u9650\u308A\u3088\u304F\u3059\u308B\u305F\u3081\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u306F\u900F\u660E\u6027\u306E\u3042\u308B\u5C0F\u3055\u306A\u753B\u50CF\u3067\u8868\u73FE\u3055\u308C\u307E\u3059\u3002\u900F\u660E\u5EA6\u306B\u95A2\u3059\u308B\u4E0B\u306E\u6CE8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u8EE2\u753B\u50CF\u3084\u62E1\u5927\u753B\u50CF\u306F\u4E0A\u8A18\u3088\u308A\u3082\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002 \u3053\u3053\u3067\u306E\u30BF\u30B9\u30AF\u306F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304B\u3089\u30D4\u30AF\u30BB\u30EB\u5024\u3092\u518D\u3073\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u3067\u3059\u304C\u3001\u3053\u3061\u3089\u306E\u8A08\u7B97\u306E\u65B9\u304C\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u304C\u753B\u50CF\u306E\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3084\u56DE\u8EE2\u3092\u7D44\u307F\u8FBC\u3080\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5186\u306A\u3069\u306E\u5E7E\u4F55\u5B66\u7684\u8981\u7D20\u306F\u3055\u3089\u306B\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002 \u4ECA\u5EA6\u306F\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304B\u3089\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u305A\u3001\u5186\u306E\u5F62\u72B6\u3068\u3001\u5186\u306E\u4E2D\u306E\u500B\u3005\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u8272\u3092\u8A08\u7B97\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u5EA6\u306F\u8981\u7D20\u306E\u63CF\u753B\u6642\u9593\u3092\u5897\u3084\u3057\u307E\u3059\u3002 \u4E00\u90E8\u306E\u30D4\u30AF\u30BB\u30EB\u304C\u5857\u308A\u3064\u3076\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u8981\u7D20\u306F\u900F\u660E\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u3053\u3068\u304C\u63CF\u753B\u6642\u9593\u3092\u5897\u5927\u3055\u305B\u307E\u3059\u3002\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u6700\u521D\u306B\u3001\u900F\u660E\u306A\u8981\u7D20\u306E\u80CC\u5F8C\u306B\u3042\u308B\u8981\u7D20\u3092\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\uFF08\u300C\u30D5\u30EC\u30FC\u30E0\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u300D\u306B\u95A2\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\uFF09\u3002 \u6B21\u306B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30D4\u30AF\u30BB\u30EB\u3068\u900F\u660E\u306A\u8981\u7D20\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u7D50\u5408\u3055\u305B\u3001\u7D50\u679C\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u66F8\u304D\u8FBC\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u8A08\u7B97\u6E08\u307F\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u305F\u3060\u66F8\u304D\u8FBC\u3080\u3088\u308A\u3082\u3001\u3053\u306E\u8A08\u7B97\u306B\u306F\u306F\u308B\u304B\u306B\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/box-image-texture-circle.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30DC\u30C3\u30AF\u30B9\u3001\u753B\u50CF\u3001\u56DE\u8EE2\u753B\u50CF\u3001\u5186\u3002 \u4E0A\u306E\u884C\u306F\u5857\u308A\u3064\u3076\u3057\u306E\u8981\u7D20\u3002 \u4E0B\u306E\u884C\u306F\u900F\u660E\u306A\u8981\u7D20\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u5EA6\u3092\u6301\u305F\u305B\u308B\u3068\u3001\u5E38\u306B\u4F59\u5206\u306A\u30EC\u30A4\u30E4\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5857\u308A\u3064\u3076\u3057\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u4ED6\u306E\u5857\u308A\u3064\u3076\u3057\u30D4\u30AF\u30BB\u30EB\u306E\u4E0A\u306B\u914D\u7F6E\u3057\u3066\u3082\u3001\u5FC5\u305A\u3057\u3082\u30EC\u30A4\u30E4\u306E\u6570\u304C\u5897\u3048\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u6642\u9593\u306E\u7121\u99C4\u3092\u9632\u3050\u305F\u3081\u306B\u3001\u4ED6\u306E\u5857\u308A\u3064\u3076\u3057\u30D4\u30AF\u30BB\u30EB\u3067\u30AB\u30D0\u30FC\u3055\u308C\u308B\u30D4\u30AF\u30BB\u30EB\u306F\u63CF\u753B\u3057\u306A\u3044\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u52B9\u5316\u9818\u57DF\u5185\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u8981\u7D20\u304C\u591A\u3044\u307B\u3069\u3001\u63CF\u753B\u6642\u9593\u304C\u9577\u304F\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u3092\u5897\u3084\u3059\u306E\u306F\u3001\u7121\u52B9\u5316\u9818\u57DF\u306B\u3042\u308B\u8981\u7D20\u306E\u307F\u3067\u3042\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u7121\u52B9\u5316\u9818\u57DF\u4EE5\u5916\u306B\u3042\u308B\u8981\u7D20\u306F\u3001\u63CF\u753B\u6642\u9593\u306B\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/general-ui-component-performance"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-rendering"
  }), `\u63CF\u753B\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001Chrom-ART\uFF08\u307E\u305F\u306FDMA2D\uFF09\u3068\u547C\u3070\u308C\u308B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306F\u63CF\u753B\u6642\u9593\u3092\u77ED\u7E2E\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30B3\u30A2\u3068\u4E26\u5217\u5B9F\u884C\u3055\u308C\u308B\u306E\u3067\u3001\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u304C\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u63CF\u753B\u3059\u308B\u9593\u306B\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u4ED6\u306E\u30BF\u30B9\u30AF\u3092\u81EA\u7531\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u306F\u3001\u4E3B\u306B\u753B\u50CF\u3068\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u6709\u7528\u3067\u3059\u3002 Chrom-ART\u304C\u5B9F\u88C5\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "when-should-you-consider-rendering-time"
  }), `\u63CF\u753B\u6642\u9593\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u6642\u9593\u306F\u3001\u3044\u3064\u3082\u540C\u3058\u3088\u3046\u306B\u91CD\u8981\u306A\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u4F4E\u901F\u306A\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u30E6\u30FC\u30B6\u306E\u76EE\u306B\u89E6\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u63CF\u753B\u6642\u9593\u306B\u6CE8\u610F\u3092\u6255\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u901A\u5E38\u3053\u308C\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u4E00\u90E8\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\uFF08\u56DE\u8EE2\u30A2\u30A4\u30B3\u30F3\u306A\u3069\uFF09\u3092\u5B9F\u884C\u3057\u3066\u3044\u308B\u5834\u5408\u3084\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u4F55\u304B\u3092\u79FB\u52D5\u307E\u305F\u306F\u30B9\u30E9\u30A4\u30C9\u3055\u305B\u3066\u3044\u308B\u5834\u5408\u306A\u3069\u3067\u3059\u3002 \u66F4\u65B0\u983B\u5EA6\u304C\u4F4E\u304F\u306A\u308B\u3068\u3001\u30E6\u30FC\u30B6\u3078\u306E\u8868\u793A\u304C\u6ED1\u3089\u304B\u3067\u306A\u304F\u306A\u308A\u3001\u6BB5\u968E\u7684\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u63CF\u753B\u6642\u9593\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u65B9\u3067\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u3092\u65B0\u3057\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u7F6E\u304D\u63DB\u3048\u308B\u5834\u5408\u3001\u5909\u66F4\u4E2D\u306B\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u5927\u5E45\u306B\u4F4E\u4E0B\u3057\u3066\u3082\u3001\u901A\u5E38\u305D\u306E\u3053\u3068\u306F\u30E6\u30FC\u30B6\u306B\u306F\u308F\u304B\u308A\u307E\u305B\u3093\u3002 \u30E6\u30FC\u30B6\u306F\u63CF\u753B\u306E\u958B\u59CB\u6642\u304C\u308F\u304B\u3089\u305A\u3001\u7D42\u4E86\u6642\u306E\u307F\u304C\u308F\u304B\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E2\u3064\u306E\u30EB\u30FC\u30EB\u306F\u3001\uFF08\u79FB\u52D5\u306A\u3069\u306E\uFF09\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3059\u308B\u8981\u7D20\u306B\u306F\u3001\u308F\u305A\u304B\u306A\u30EC\u30A4\u30E4\u3092\u4F7F\u7528\u3057\u3066\u3001\u8907\u96D1\u306A\u8981\u7D20\u3084\u591A\u6570\u306E\u30EC\u30A4\u30E4\u306E\u4F7F\u7528\u3092\u63A7\u3048\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u4ED6\u306E\u30D1\u30FC\u30C4\u3067\u306F\u3001\u3053\u306E\u3053\u3068\u306F\u554F\u984C\u3067\u306F\u306A\u3044\u3068\u601D\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/clock-and-scrolllist.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30A2\u30CA\u30ED\u30B0\uFF65\u30AF\u30ED\u30C3\u30AF\u3068\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30EA\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F8B\u3067\u306F\u3001\u5DE6\u5074\u306B\u30A2\u30CA\u30ED\u30B0\uFF65\u30AF\u30ED\u30C3\u30AF\u304C\u3042\u308A\u307E\u3059\u3002 \u6642\u8A08\u306E3\u672C\u306E\u91DD\u306F\u3001\u56DE\u8EE2\u3059\u308B\u5C0F\u3055\u304F\u7D30\u9577\u3044\u753B\u50CF\u306B\u3088\u3063\u3066\u63CF\u753B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u91DD\u306F\u5E38\u306B\u52D5\u3044\u3066\u3044\u308B\u308F\u3051\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u901A\u5E38\u306F\u3053\u308C\u3067\u5927\u4E08\u592B\u3067\u3059\u3002 \u3057\u304B\u3057\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u30AF\u30ED\u30C3\u30AF\u304C\u52D5\u304D\u56DE\u308B\u3088\u3046\u306B\u3059\u308B\u5834\u5408\u306F\u3001\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u518D\u63CF\u753B\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u3001\u554F\u984C\u304C\u751F\u3058\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u56DE\u8EE2\u753B\u50CF\u306E\u63CF\u753B\u306F\u3001\u5178\u578B\u7684\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u5074\u306B\u306F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u306F\u3001\u3053\u306E\u6570\u5B57\u306E\u30EA\u30B9\u30C8\u3092\u4E0A\u4E0B\u306B\u79FB\u52D5\u3055\u305B\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u53CD\u5FDC\u3088\u304F\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u3001\u9AD8\u3044\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30EA\u30B9\u30C8\u5185\u306E\u8981\u7D20\u306E\u63CF\u753B\u6642\u9593\u3092\u8003\u616E\u3059\u308B\u304B\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30EA\u30B9\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "optimize-performance-by-invalidating-content"
  }), `\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u7121\u52B9\u5316\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u6700\u9069\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u306F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5168\u4F53\u304C\u7121\u52B9\u5316\u3055\u308C\u307E\u3059\u304C\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A8\u30F3\u30B8\u30F3\u306B\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5168\u4F53\u3067\u306F\u306A\u304F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u307F\u3092\u7121\u52B9\u5316\u3059\u308B\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u3002 \u7121\u52B9\u5316\u3059\u308B\u9818\u57DF\u3092\u6E1B\u3089\u3059\u3053\u3068\u3067\u3001\u63CF\u753B\u6642\u9593\u304C\u660E\u3089\u304B\u306B\u77ED\u7E2E\u3055\u308C\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u63CF\u753B\u6642\u9593\u306E\u6539\u5584\u306F\u4EE5\u4E0B\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5168\u4F53\u306E\u30B5\u30A4\u30BA\u306B\u5BFE\u3057\u3066\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u30AB\u30D0\u30FC\u3059\u308B\u9818\u57DF\u306E\u30B5\u30A4\u30BA\u306E\u5272\u5408`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4E00\u90E8\u30AB\u30D0\u30FC\u3059\u308B\u306E\u304B\u3001\u5B8C\u5168\u306B\u30AB\u30D0\u30FC\u3059\u308B\u306E\u304B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u56F3\u306F\u3001\u4F8B\u3068\u3057\u3066TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u306E\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u7121\u52B9\u5316\u306E\u6982\u5FF5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u56F31\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5168\u4F53\u306E\u9818\u57DF\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u56F32\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `\u3092\u4F7F\u7528\u3057\u305F\u3068\u304D\u306B\u7121\u52B9\u5316\u3055\u308C\u308B\u9818\u57DF\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u56F33\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `\u3092\u4F7F\u7528\u3057\u305F\u3068\u304D\u306B\u7121\u52B9\u5316\u3055\u308C\u308B\u9818\u57DF\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-area-expanded-across-screen.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u56F31: \u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5E45\u5168\u4F53\u306B\u5E83\u304C\u308BTextArea"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u56F32: TextArea::invalidate()\u3092\u4F7F\u7528\u3057\u305F\u3068\u304D\u306E\u7121\u52B9\u5316\u9818\u57DF\uFF08\u8D64\u8272\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-content-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u56F33: TextArea::invalidateContent()\u3092\u4F7F\u7528\u3057\u305F\u3068\u304D\u306E\u7121\u52B9\u5316\u9818\u57DF\uFF08\u7DD1\u8272\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "textareainvalidatecontent\u3092\u4F7F\u7528\u3059\u308B\u4F8B"
  }), `TextArea::invalidateContent()\u3092\u4F7F\u7528\u3059\u308B\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u30AA\u30FC\u30D0\u30FC\u30E9\u30C3\u30D7\u3057\u3066\u3044\u308B\u5834\u5408\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `\u3092\u4F7F\u7528\u3057\u3066TextArea\u5168\u4F53\u3092\u7121\u52B9\u5316\u3059\u308B\u3068\u3001\u3053\u3046\u3057\u305F\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u518D\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4EE3\u308F\u308A\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E0D\u8981\u306A\u7121\u52B9\u5316\u3084\u518D\u63CF\u753B\u306E\u30EA\u30B9\u30AF\u3092\u6700\u5C0F\u9650\u306B\u6291\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u3001Circle\u3084Gauge\u306A\u3069\u3001\u63CF\u753B\u30B3\u30B9\u30C8\u306E\u304B\u304B\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5834\u5408\u306F\u7279\u306B\u5F53\u3066\u306F\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u56F3\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF08\u753B\u50CF- ST\u30ED\u30B4\uFF09\u306E\u7121\u52B9\u5316\u3092\u907F\u3051\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `\u3092\u4F7F\u7528\u3057\u3066\u3044\u308C\u3070\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u7121\u52B9\u5316\u3055\u308C\u518D\u63CF\u753B\u306E\u5FC5\u8981\u304C\u3042\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-content-improvement-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "TextArea::invalidateContent()\u3092\u4F7F\u7528\u3059\u308B\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tips-to-get-good-performance"
  }), `\u6700\u9069\u306A\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5F97\u308B\u305F\u3081\u306E\u30D2\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306B\u3001\u6700\u9069\u306A\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5F97\u308B\u305F\u3081\u306E\u30D2\u30F3\u30C8\u3092\u307E\u3068\u3081\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5909\u66F4\u306A\u3044\u3082\u306E\u3092\u518D\u63CF\u753B\u3057\u306A\u3044`), `: \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4E0D\u5FC5\u8981\u306A\u30D1\u30FC\u30C4\u3092\u8AA4\u3063\u3066\u7121\u52B9\u5316\u3057\u306A\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u4F4E\u4E0B\u3057\u3001\u4F55\u3082\u3044\u3044\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u54C1\u8CEA\u3068\u901F\u5EA6\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u898B\u3044\u3060\u3059`), `: \u8981\u7D20\u306E\u8907\u96D1\u3055\u3092\u8EFD\u6E1B\u3059\u308B\u3053\u3068\u3067\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5411\u4E0A\u3067\u304D\u307E\u3059\u3002 \u8907\u96D1\u3055\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3068\u306E\u9069\u5207\u306A\u30D0\u30E9\u30F3\u30B9\u304C\u3001\u9375\u3068\u306A\u308B\u3053\u3068\u306F\u591A\u304F\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u6A5F\u80FD\u3092\u5229\u7528\u3059\u308B`), `: \u591A\u304F\u306E\u5834\u5408\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\uFF08Chrom-ART\uFF09\u642D\u8F09\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001\u642D\u8F09\u306A\u3057\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3088\u308A\u9AD8\u6A5F\u80FD\u3067\u3059\u3002 Chrom-ART\u642D\u8F09\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u4F7F\u7528\u3092\u691C\u8A0E\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8A08\u7B97\u3055\u308C\u305F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u753B\u50CF\u306B\u7F6E\u304D\u63DB\u3048\u308B`), `: \u5186\u3092\u8A08\u7B97\u3057\u3066\u63CF\u304F\u3053\u3068\u306F\u3001\u5186\u306E\u753B\u50CF\u3092\u4F7F\u7528\u3059\u308B\u3088\u308A\u3082\u4F4E\u901F\u3067\u3059\u3002 \u4E00\u822C\u306B\u3001\u753B\u50CF\u306F\u591A\u304F\u306E\u9759\u7684\u8981\u7D20\u3068\u7F6E\u63DB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u3092\u8ABF\u6574\u3059\u308B`), `: \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u521D\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u306F\u63CF\u753B\u6642\u9593\u306B\u5BFE\u3057\u3066\u53B3\u3057\u3044\u5236\u9650\u306B\u306A\u308A\u307E\u3059\u3002 \u63CF\u753B\u6642\u9593\u304C\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u3092\u8D85\u3048\u308B\u3068\u3001\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u4F4E\u4E0B\u3057\u307E\u3059\u3002 \u63CF\u753B\u6642\u9593\u304C\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u3092\u5C11\u3057\u3060\u3051\u4E0A\u56DE\u308B\u5834\u5408\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF65\u30EC\u30FC\u30C8\u3092\u3001\u305F\u3068\u3048\u307055 Hz\uFF0818.2 ms\u306B\u5BFE\u5FDC\uFF09\u307E\u3067\u4E0B\u3052\u3066\u3001\u9AD8\u3044\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u3092\u7DAD\u6301\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);