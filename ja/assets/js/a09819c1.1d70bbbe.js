"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2997],{

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

/***/ 4933:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
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
  id: "custom-triggers-and-actions",
  title: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "id": "development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-triggers-and-actions",
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX Engine Features",
    "permalink": "/4.20/ja/docs/category/touchgfx-engine-features"
  },
  "next": {
    "title": "\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/position-size"
  }
};
const assets = {};




const toc = [{
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC",
  id: "custom-triggers",
  level: 2
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u8FFD\u52A0",
  id: "adding-custom-triggers",
  level: 3
}, {
  value: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u767A\u884C",
  id: "emitting-custom-triggers-from-interactions",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u767A\u884C",
  id: "emitting-custom-triggers-from-user-code",
  level: 3
}, {
  value: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306B\u53CD\u5FDC",
  id: "reacting-to-custom-triggers-from-interactions",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306B\u53CD\u5FDC",
  id: "reacting-to-custom-triggers-from-user-code",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3",
  id: "custom-actions",
  level: 2
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u8FFD\u52A0",
  id: "adding-custom-actions",
  level: 3
}, {
  value: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3057",
  id: "calling-custom-action-from-interactions",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3057",
  id: "calling-custom-action-from-user-code",
  level: 3
}, {
  value: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0",
  id: "adding-behaviour-to-custom-actions-from-interactions",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0",
  id: "adding-behaviour-to-custom-actions-from-user-code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u3001\u72EC\u81EA\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5404\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u306F\u3001\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\uFF08C++\u306E\u30B7\u30F3\u30D7\u30EB\u306Avoid\u30E1\u30BD\u30C3\u30C9\uFF09\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u3001\u3053\u308C\u3089\u306FTouchGFX Designer\u5185\u304B\u3089\u3001\u307E\u305F\u306F\u30B3\u30FC\u30C9\u3067\u3082\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u540C\u6642\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u3082\u30C8\u30EA\u30AC\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\uFF08C++\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3068\u7B49\u3057\u3044\uFF09\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u3001\u3053\u308C\u306B\u5BFE\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u53CD\u5FDC\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u3053\u306E\u6A5F\u80FD\u3092\u5229\u7528\u3057\u3066\u3001\u975E\u5E38\u306B\u30AF\u30EA\u30FC\u30F3\u3067\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306ATouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-triggers"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u4F5C\u6210\u3059\u308B\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u3089\u306FC++\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3068\u3057\u3066\u751F\u6210\u3055\u308C\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u307E\u305F\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u767A\u884C\u3057\u3001\u53CD\u5FDC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-custom-triggers"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u8FFD\u52A0\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30BF\u30D6\u3067\u884C\u3044\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TRIGGERS`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u306E"+"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-trigger-4.17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u304C\u4F5C\u6210\u3055\u308C\u308B\u3068\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u8A73\u7D30\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-trigger-4.17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u7DE8\u96C6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u3053\u3067\u6307\u5B9A\u3059\u308B\u540D\u524D\u306F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3068\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u4F8B\u3067\u793A\u3059\u3088\u3046\u306B\u3001\u53C2\u7167\u7528\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14,24-30,37}",
    "{11-14,24-30,37}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Trigger Callback Setters
     */
    void setTrigger1Callback(touchgfx::GenericCallback<>& callback)
    {
        this->trigger1Callback = &callback;
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Custom Trigger Emitters
     */
    virtual void emitTrigger1Callback()
    {
        if (trigger1Callback && trigger1Callback->isValid())
        {
            this->trigger1Callback->execute();
        }
    }

private:

    /*
     * Custom Trigger Callback Declarations
     */
    touchgfx::GenericCallback<>* trigger1Callback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2}",
    "{2}": true
  }), `CustomContainer1Base::CustomContainer1Base() :
    trigger1Callback(0)
{
    setWidth(250);
    setHeight(250);
}

void CustomContainer1Base::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Description`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u3053\u306B\u8A18\u8FF0\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u306F\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u4F7F\u7528\u3055\u308C\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u30C8\u30EA\u30AC\u3092\u9078\u629E\u3059\u308B\u3068\u304D\u306B\u3001\u305D\u306E\u30C8\u30EA\u30AC\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u8AAC\u660E\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#emitting-custom-triggers-from-interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u767A\u884C`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6A19\u6E96\u306E\u8AAC\u660E\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Type`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30BF\u30A4\u30D7\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u7279\u5B9A\u306E\u30BF\u30A4\u30D7\u306E\u5024\u3092\u8FD4\u3059\u30C8\u30EA\u30AC\u3092\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30BF\u30A4\u30D7\u306F\u30EA\u30B9\u30C8\u304B\u3089\u9078\u629E\u3059\u308B\u304B\u3001\u624B\u52D5\u3067\u8A18\u8FF0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306B\u793A\u3059\u306E\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u3092\u9078\u629E\u3057\u305F\u3068\u304D\u306B\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14,24-30,37}",
    "{11-14,24-30,37}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Trigger Callback Setters
     */
    void setTrigger1Callback(touchgfx::GenericCallback<bool>& callback)
    {
        this->trigger1Callback = &callback;
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Custom Trigger Emitters
     */
    virtual void emitTrigger1Callback(bool value)
    {
        if (trigger1Callback && trigger1Callback->isValid())
        {
            this->trigger1Callback->execute(value);
        }
    }

private:

    /*
     * Custom Trigger Callback Declarations
     */
    touchgfx::GenericCallback<bool>* trigger1Callback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emitting-custom-triggers-from-interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u767A\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3057\u3066\u767A\u884C\u3067\u304D\u307E\u3059\u3002 \u5358\u7D14\u306B\u3001\u305D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u304C\u5C5E\u3059\u308B\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u6B21\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u3057\u3066\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/emitting-a-custom-trigger-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u767A\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u56F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u305F\u3073\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3067\u30BF\u30A4\u30D7\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30D1\u30E9\u30E1\u30FC\u30BF\u5024\u307E\u305F\u306F\u5909\u6570\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u304C\u30BF\u30A4\u30D7\u3068\u3057\u3066\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-emitting-custom-trigger-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u767A\u884C\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6307\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emitting-custom-triggers-from-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u767A\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306F\u3001\u751F\u6210\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u304B\u3089\u7D99\u627F\u3059\u308B\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u767A\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 "trigger1"\u3068\u3044\u3046\u540D\u524D\u306ECustomTrigger\u306E\u5834\u5408\u3001\u751F\u6210\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306B\u3001\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{24-30}",
    "{24-30}": true
  }), `virtual void emitTrigger1Callback(bool value)
{
    if (trigger1Callback && trigger1Callback->isValid())
    {
        this->trigger1Callback->execute(value);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u95A2\u6570\u306F\u3001\u305D\u3053\u304B\u3089\u7D99\u627F\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u4E0A\u66F8\u304D\u307E\u305F\u306F\u547C\u3073\u51FA\u3057\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "reacting-to-custom-triggers-from-interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306B\u53CD\u5FDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u542B\u3080\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u305F\u5834\u5408\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u3001\u305D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u30C8\u30EA\u30AC\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u30C8\u30EA\u30AC\u3068\u3057\u3066\u9078\u629E\u3059\u308B\u5834\u5408\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u547D\u540D\u30B9\u30AD\u30FC\u30E0\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<Custom Container Name><Custom Trigger name>happens`), `\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-trigger-as-trigger-on-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u30C8\u30EA\u30AC\u3068\u3057\u3066\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C8\u30EA\u30AC\u306E\u9078\u629E\u5F8C\u3001\u305D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u542B\u30801\u3064\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u8907\u6570\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C1\u3064\u3057\u304B\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u305D\u308C\u304C\u81EA\u52D5\u7684\u306B\u9078\u629E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "reacting-to-custom-triggers-from-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306B\u53CD\u5FDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u53CD\u5FDC\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u6B21\u306E\u30B3\u30FC\u30C9\u4F8B\u306B\u793A\u3059\u3088\u3046\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u5B9F\u88C5\u3057\u307E\u3059\u3002\u3053\u306E\u4F8B\u3067\u306F\u3001"trigger1"\u3068\u3044\u3046\u540D\u524D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u542B\u3080\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u304B\u3089\u7D99\u627F\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF / \u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306B\u3001\u4EE5\u4E0B\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3055\u308C\u305F\u884C\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{10-18}",
    "{10-18}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();

private:
    /*
     * Callback Declarations
     */
    touchgfx::Callback<Screen1View> customContainer1Trigger1Callback;

    /*
     * Callback Handler Declarations
     */
    void customContainer1Trigger1CallbackHandler();
};

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4,6,19-22}",
    "{4,6,19-22}": true
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View():
    customContainer1Trigger1Callback(this, &Screen1View::customContainer1Trigger1CallbackHandler)
{
    customContainer1.setTrigger1Callback(customContainer1Trigger1Callback);
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}

void Screen1View::customContainer1Trigger1CallbackHandler()
{
    //Your code here.
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-actions"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u4EEE\u60F3C++\u30E1\u30BD\u30C3\u30C9\u3068\u3057\u3066\u751F\u6210\u3055\u308C\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u307E\u305F\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5B9F\u88C5\u3068\u52D5\u4F5C\u306F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u5185\u3067\u8A2D\u5B9A\u3059\u308B\u304B\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u751F\u6210\u6E08\u307F\u306EC++\u30E1\u30BD\u30C3\u30C9\u3092\u4E0A\u66F8\u304D\u3059\u308B\u3053\u3068\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-custom-actions"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u8FFD\u52A0\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30BF\u30D6\u3067\u884C\u3044\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `ACTIONS`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u306E"+"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-action-4.17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u308B\u3068\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u8A73\u7D30\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-action-4.17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u7DE8\u96C6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u3053\u3067\u6307\u5B9A\u3059\u308B\u540D\u524D\u306F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3068\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u4F8B\u3067\u793A\u3059\u3088\u3046\u306B\u3001\u53C2\u7167\u7528\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Actions
     */
    virtual void action1();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{12-15}",
    "{12-15}": true
  }), `CustomContainer1Base::CustomContainer1Base()
{
    setWidth(250);
    setHeight(250);
}

void CustomContainer1Base::initialize()
{

}

void CustomContainer1Base::action1()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Description`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u3053\u306B\u8A18\u8FF0\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u306F\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u4F7F\u7528\u3055\u308C\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3067\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u3068\u304D\u306B\u3001\u305D\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u8AAC\u660E\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#calling-custom-action-from-interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3057`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6B21\u306E\u30B9\u30AD\u30FC\u30E0\u306B\u5F93\u3063\u3066\u6A19\u6E96\u306E\u8AAC\u660E\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Call<Name><Screen or Custom Container Name>\u3067\u547C\u3073\u51FA\u3059`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Type`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30BF\u30A4\u30D7\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u7279\u5B9A\u306E\u30BF\u30A4\u30D7\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u5FC5\u8981\u3068\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u30BF\u30A4\u30D7\u306F\u30EA\u30B9\u30C8\u304B\u3089\u9078\u629E\u3059\u308B\u304B\u3001\u624B\u52D5\u3067\u8A18\u8FF0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4EE5\u4E0B\u306B\u793A\u3059\u306E\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u3092\u9078\u629E\u3057\u305F\u3068\u304D\u306B\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `/*
 * Custom Actions
 */
virtual void action1(bool value);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void CustomContainer1Base::action1(bool value)
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "calling-custom-action-from-interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u305F\u3089\u3001\u305D\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u4E0A\u306B\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u305F\u3089\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30BF\u30D6\u304B\u3089\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/executing-custom-action-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u9078\u629E\u5F8C\u30011\u3064\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u8907\u6570\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C1\u3064\u3057\u304B\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u305D\u308C\u304C\u81EA\u52D5\u7684\u306B\u9078\u629E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30BF\u30A4\u30D7\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30D1\u30E9\u30E1\u30FC\u30BF\u5024\u307E\u305F\u306F\u5909\u6570\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u304C\u30BF\u30A4\u30D7\u3068\u3057\u3066\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-executing-custom-action-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u5B9F\u884C\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6307\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "calling-custom-action-from-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3057`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u76F4\u63A5\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u6B21\u306E\u30B3\u30FC\u30C9\u4F8B\u3067\u306F\u3001"action1"\u3068\u3044\u3046\u540D\u524D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u542B\u3080\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-6}",
    "{4-6}": true
  }), `Screen1ViewBase::Screen1ViewBase()
{

    customContainer11.setXY(50, 11);

    add(customContainer11);
}

void Screen1ViewBase::setupScreen()
{
    customContainer11.initialize();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase`), `\u304B\u3089\u7D99\u627F\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `\u3067\u306F\u3001\u4EE5\u4E0B\u306B\u793A\u3059\u3088\u3046\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3"action1"\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3}",
    "{3}": true
  }), `Screen1View::Screen1View()
{
    customContainer11.action1();
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-behaviour-to-custom-actions-from-interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u5358\u7D14\u306B\u3001\u305D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u5C5E\u3059\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u6B21\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30C8\u30EA\u30AC\u3068\u3057\u3066\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-action-as-trigger-on-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30C8\u30EA\u30AC\u3068\u3057\u3066\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3059\u305F\u3073\u306B\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-behaviour-to-custom-actions-from-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u52D5\u4F5C\u3092\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u4EE5\u4E0B\u306B\u793A\u3059\u3088\u3046\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CustomContainer1Base`), `\u304B\u3089\u7D99\u627F\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CustomContainer1`), `\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4E0A\u66F8\u304D\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u305D\u306E\u52D5\u4F5C\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9}",
    "{9}": true
  }), `class CustomContainer1 : public CustomContainer1Base
{
public:
    CustomContainer1();
    virtual ~CustomContainer1() {}

    virtual void initialize();

    void action1();

protected:
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14}",
    "{11-14}": true
  }), `CustomContainer1::CustomContainer1()
{

}

void CustomContainer1::initialize()
{
    CustomContainer1Base::initialize();
}

void CustomContainer1::action1()
{
    //Your code here
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../../tutorials/tutorial-05",
    mdxType: "Link"
  }, "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB5: \u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F5C\u6210"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);