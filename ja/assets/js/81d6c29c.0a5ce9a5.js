"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3716],{

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

/***/ 67239:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37793);
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
  id: "prerequisites",
  title: "\u524D\u63D0\u6761\u4EF6"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/prerequisites",
  "id": "introduction/prerequisites",
  "title": "\u524D\u63D0\u6761\u4EF6",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/prerequisites.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/prerequisites",
  "permalink": "/4.20/ja/docs/introduction/prerequisites",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "prerequisites",
    "title": "\u524D\u63D0\u6761\u4EF6"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX\u3068\u306F",
    "permalink": "/4.20/ja/docs/introduction/what-is-touchgfx"
  },
  "next": {
    "title": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
    "permalink": "/4.20/ja/docs/introduction/installation"
  }
};
const assets = {};


const toc = [{
  value: "Windows\u4E0A\u3067\u306ETouchGFX\u306E\u4F7F\u7528",
  id: "windows\u4E0A\u3067\u306Etouchgfx\u306E\u4F7F\u7528",
  level: 2
}, {
  value: "Linux\u4E0A\u3067\u306ETouchGFX\u306E\u4F7F\u7528",
  id: "linux\u4E0A\u3067\u306Etouchgfx\u306E\u4F7F\u7528",
  level: 2
}, {
  value: "Ubuntu 20.04\u3067\u306ETouchGFX\u306E\u4F7F\u7528",
  id: "ubuntu-2004\u3067\u306Etouchgfx\u306E\u4F7F\u7528",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u4E3B\u306B\u3001Windows 10\u3067\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u958B\u767A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 TouchGFX Designer\u306FWindows\u4E0A\u3067\u3057\u304B\u52D5\u4F5C\u3057\u307E\u305B\u3093\u304C\u3001\u57FA\u76E4\u3068\u306A\u308B\u30C4\u30FC\u30EB\u306FLinux\u4E0A\u3067\u3082\u52D5\u4F5C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "windows\u4E0A\u3067\u306Etouchgfx\u306E\u4F7F\u7528"
  }), `Windows\u4E0A\u3067\u306ETouchGFX\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30FC\u30B8\u30E7\u30F34.18\u4EE5\u964D\u3001TouchGFX\u306FWindows 10\u4E0A\u3067\u306E\u307F\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u306F\u3001\u958B\u767A\u306B\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E\u57FA\u672C\u30C4\u30FC\u30EB\u304C\u5099\u308F\u3063\u3066\u3044\u307E\u3059\u3002 TouchGFX\u306B\u306Fg++\u304C\u30D0\u30F3\u30C9\u30EB\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001C++\u30B3\u30F3\u30D1\u30A4\u30E9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u624B\u9806\u3068\u30B3\u30FC\u30C9Flash\u7528\u306E\u8FFD\u52A0\u30C4\u30FC\u30EB\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "installation"
  }), `\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306B\u95A2\u3059\u308B\u8A18\u4E8B`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "Windows 7\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30D0\u30FC\u30B8\u30E7\u30F34.16\u3092\u5F15\u304D\u7D9A\u304D\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linux\u4E0A\u3067\u306Etouchgfx\u306E\u4F7F\u7528"
  }), `Linux\u4E0A\u3067\u306ETouchGFX\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306FLinux\u4E0A\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002TouchGFX Designer\u306FLinux\u4E0A\u3067\u306F\u30CD\u30A4\u30C6\u30A3\u30D6\u3067\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u304C\u3001TouchGFX Designer\u3067\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306FLinux\u3068Windows\u306E\u4E21\u65B9\u3067\u52D5\u4F5C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u5BFE\u3057\u3066\u63A8\u5968\u3055\u308C\u308B\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u3001Windows\u3092\u5B9F\u884C\u3059\u308B\u4EEE\u60F3\u30DE\u30B7\u30F3\u3067TouchGFX Designer\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u958B\u767A\u8005\u306F\u5FC5\u8981\u306A\u3068\u304D\u306BDesigner\u3092\u4F7F\u7528\u3057\u3001\u305D\u308C\u4EE5\u5916\u3067\u306F\u901A\u5E38\u306ELinux\u74B0\u5883\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Linux\u3067TouchGFX\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u3044\u304F\u3064\u304B\u306E\u30C4\u30FC\u30EB\u3068\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u8FFD\u52A0\u3067\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u6B21\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001Ubuntu\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u793A\u3057\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u8981\u4EF6\u306F\u3001\u4ED6\u306ELinux\u30C7\u30A3\u30B9\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u3082\u985E\u4F3C\u3057\u305F\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ubuntu-2004\u3067\u306Etouchgfx\u306E\u4F7F\u7528"
  }), `Ubuntu 20.04\u3067\u306ETouchGFX\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u65B0\u306EUbuntu 20.04 LTS\u3067TouchGFX\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305A\u3001ruby\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo apt install ruby
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306B\u3088\u308Aruby\u30D0\u30FC\u30B8\u30E7\u30F32.7\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002 Windows\u7528\u306ETouchGFX\u306B\u306F\u30D0\u30FC\u30B8\u30E7\u30F33.0\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u73FE\u6642\u70B9\u3067\u3053\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306FUbuntu\u30EA\u30DD\u30B8\u30C8\u30EA\u5185\u3067\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002 \u901A\u5E38\u306E\u4F7F\u7528\u3067\u306F\u3001\u30D0\u30FC\u30B8\u30E7\u30F32.7\u3067\u5341\u5206\u306B\u6A5F\u80FD\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001"roo" gem\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo gem install roo
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `make\u304A\u3088\u3073g++\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3001C++\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo  apt install make g++
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306E\u30D1\u30FC\u30C4\u306F\u3001SDL2\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `sudo apt install libsdl2-dev libsdl2-image-dev
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D5\u30A9\u30EB\u30C8\u306Eg++\u30D0\u30FC\u30B8\u30E7\u30F3\u306F9.3.0\u3067\u3059\u3002 \u3053\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F7F\u7528\u3059\u308B\u8B66\u544A\u30EC\u30D9\u30EB\u306F\u3001TouchGFX\u306B\u542B\u307E\u308C\u3066\u3044\u308BWindows\u7528\u306Eg++\u3068\u7570\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306Eg++\u30D5\u30E9\u30B0\u3068\u30EA\u30F3\u30AB\uFF65\u30D5\u30E9\u30B0\u306B\u30012\u3064\u306E\u5909\u66F4\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "config/gcc/app.mk"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{15-16}",
    "{15-16}": true
  }), `# Copyright (c) 2018(-2021) STMicroelectronics.
# All rights reserved.
#
# This file is part of the TouchGFX 4.18.1 distribution.
#
# This software is licensed under terms that can be found in the LICENSE file in
# the root directory of this software component.
# If no LICENSE file comes with this software, it is provided AS-IS.
#
###############################################################################/
# Relative location of the TouchGFX framework from root of application
touchgfx_path := ../../../touchgfx

# Optional additional compiler flags
user_cflags := -DUSE_BPP=16 -Wformat-truncation=0
linker_options := -no-pie
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30D5\u30A1\u30A4\u30EB\u304CWindows\u306E\u30E9\u30A4\u30F3\u7D42\u4E86\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u305F\u3081\u3001Linux ruby\u304C\u8B66\u544A\u3092\u767A\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ruby: warning: shebang line ending with \\r may cause problems
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8B66\u544A\u306F\u30012\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u3092Unix\u306E\u30E9\u30A4\u30F3\u7D42\u4E86\u306B\u5909\u66F4\u3059\u308B\uFF08\u307E\u305F\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#!`), `\u3067\u59CB\u307E\u308B\u6700\u521D\u306E\u884C\u5168\u4F53\u3092\u524A\u9664\u3059\u308B\uFF09\u3053\u3068\u3067\u524A\u9664\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `dos2unix touchgfx/framework/tools/textconvert/main.rb
dos2unix touchgfx/framework/tools/videoconvert/videoconvert.rb
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);