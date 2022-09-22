"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2337],{

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

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 66147:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70814);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
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
  id: "updating-to-a-new-touchgfx-version",
  title: "\u65B0\u3057\u3044TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u3078\u306E\u66F4\u65B0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/updating-to-a-new-touchgfx-version",
  "id": "miscellaneous/updating-to-a-new-touchgfx-version",
  "title": "\u65B0\u3057\u3044TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u3078\u306E\u66F4\u65B0",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/updating-to-a-new-touchgfx-version",
  "permalink": "/4.20/ja/docs/miscellaneous/updating-to-a-new-touchgfx-version",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "updating-to-a-new-touchgfx-version",
    "title": "\u65B0\u3057\u3044TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u3078\u306E\u66F4\u65B0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Miscellaneous",
    "permalink": "/4.20/ja/docs/category/miscellaneous-1"
  },
  "next": {
    "title": "\u30D8\u30EB\u30D7\u60C5\u5831",
    "permalink": "/4.20/ja/docs/miscellaneous/getting-help"
  }
};
const assets = {};



const toc = [{
  value: "TouchGFX Generator\u306E\u66F4\u65B0",
  id: "update-touchgfx-generator",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3068\u3001\u305D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u306B\u4F7F\u7528\u3057\u305FTouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u3068\u540C\u3058\u30D0\u30FC\u30B8\u30E7\u30F3\u306E.touchgfx\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3055\u3089\u306B\u958B\u767A\u3059\u308B\u305F\u3081\u306B\u3001\u305D\u306E\u7279\u5B9A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306ETouchGFX\u3057\u304B\u4F7F\u7528\u3067\u304D\u306A\u3044\u3068\u3044\u3046\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u5F8C\u65B9\u4E92\u63DB\u6027\u3092\u6301\u3064\u8A2D\u8A08\u306B\u306A\u3063\u3066\u304A\u308A\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u975E\u5E38\u306B\u7C21\u5358\u306A\u624B\u9806\u306B\u3088\u308A\u53E4\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306ETouchGFX\u3067\u3001\u52D5\u4F5C\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5358\u7D14\u306B\u65B0\u3057\u304F\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u306ETouchGFX Designer\u3092\u958B\u304D\u3001\u6700\u8FD1\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306FOpen\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u4ECB\u3057\u3066\u3001\u53E4\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u3044\u3066\u307F\u307E\u3059\u3002 \u6B21\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",
    mdxType: "Figure"
  }, "\u66F4\u65B0\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u306B\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u3001\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u306E\u5B9F\u884C\u524D\u306B\u306F\u3001\u5FC5\u305A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `'Yes'\u3092\u62BC\u3059\u3068\u3001\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u304C\u8D77\u52D5\u3057\u307E\u3059\u3002 \u5B8C\u4E86\u5F8C\u3001TouchGFX Designer\u3067\u901A\u5E38\u3069\u304A\u308A\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u958B\u304D\u3001\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3054\u304F\u7A00\u306B\u3001\u65B0\u3057\u3044TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u5B8C\u5168\u66F4\u65B0\u3059\u308B\u305F\u3081\u3001\u4F55\u3089\u304B\u306E\u624B\u52D5\u306E\u5909\u66F4\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u884C\u3046\u5FC5\u8981\u304C\u751F\u3058\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u66F4\u65B0\u3059\u308B\u4E0A\u3067\u3055\u3089\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "known-issues"
  }), `\u300C\u65E2\u77E5\u306E\u554F\u984C\u300D\u30BB\u30AF\u30B7\u30E7\u30F3`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update-touchgfx-generator"
  }), `TouchGFX Generator\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"
  }), `STM32CubeMX\u3067\u306ETouchGFX Generator\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), `\u300D\u306E\u8A18\u8FF0\u306B\u5F93\u3063\u3066\u3001STM32CubeMX 6.2.1\u4EE5\u964D\u306BX-Cube-TouchGFX-4.17.0\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u5F8C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304D\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Software Packs`), ` -> `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Select Components`), `\u306E\u9806\u306B\u79FB\u52D5\u3057\u307E\u3059\uFF08\u307E\u305F\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Alt + U`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",
    mdxType: "Figure"
  }, "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30FB\u30D1\u30C3\u30AF\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30FB\u30BB\u30EC\u30AF\u30BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `details and warnings\u30DA\u30A4\u30F3\u3067\u3001\u79FB\u884C\u5148\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u9078\u629E\u3057\u3066try\u3092\u62BC\u3057\u307E\u3059\u3002 STM32CubeMX\u304C\u72B6\u6CC1\u3092\u793A\u3057\u306A\u304C\u3089\u79FB\u884C\u3092\u884C\u3044\u3001\u7D50\u679C\u304C\u793A\u3055\u308C\u307E\u3059\u3002\u4E00\u90E8\u306ERefParameter\u306F\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u79FB\u884C\u3067\u304D\u306A\u3044\u306E\u3067\u3001null\u5024\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002 Accept\u3092\u9078\u629E\u3057\u3066\u79FB\u884C\u3092\u4FDD\u5B58\u3057\u3001\u3055\u3089\u306BOK\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001Software Pack Component Selector\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u9589\u3058\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",
    mdxType: "Figure"
  }, "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30FB\u30D1\u30C3\u30AF\u30FB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30FB\u30BB\u30EC\u30AF\u30BF\uFF1A TouchGFX Generator\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u79FB\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067TouchGFX Generator\u304C\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u79FB\u884C\u3055\u308C\u3001\u5909\u66F4\u5185\u5BB9\u304C.ioc\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F\u3002 STM32CubeMX\u3067\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u524D\u306B\u3001TouchGFX Generator\u306E\u8A2D\u5B9A\u3092\u691C\u8A3C\u3057\u3066\u304F\u3060\u3055\u3044\u3002 STM32CubeMX\u3067\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u305F\u5F8C\u3001TouchGFX Designer\u3092\u958B\u304D\u3001UI\u3092\u691C\u8A3C\u3057\u305F\u5F8C\u3067\u3001TouchGFX Designer\u304B\u3089\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u3053\u306E\u79FB\u884C\u3067\u306F\u30012\u30B9\u30C6\u30C3\u30D7\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066TouchGFX\u3092\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u66F4\u65B0\u3057\u307E\u3059\u3002 STM32CubeMX\u3068TouchGFX Designer\u306E\u4E21\u65B9\u304B\u3089\u306E\u30B3\u30FC\u30C9\u751F\u6210\u304C\u5FC5\u8981\u3067\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "TouchGFX Generator\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u305FC++\u30B3\u30FC\u30C9\u304C\u3001STM32CubeMX\u306EGenerate Code\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u5F8C\u3001\u6700\u521D\u306B\u30C7\u30A3\u30B9\u30AF\u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);