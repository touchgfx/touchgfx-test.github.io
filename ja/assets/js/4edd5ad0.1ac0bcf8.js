"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1889],{

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

/***/ 8765:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
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
  id: "01-create-project",
  title: "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210",
  sidebar_label: "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/01-create-project",
  "id": "development/board-bring-up/how-to/01-create-project",
  "title": "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/01-create-project",
  "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/01-create-project",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "01-create-project",
    "title": "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210",
    "sidebar_label": "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/board-bring-up/board-introduction"
  },
  "next": {
    "title": "2. CPU\u52D5\u4F5C",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/02-cpu-running"
  }
};
const assets = {};





const toc = [{
  value: "\u52D5\u6A5F",
  id: "motivation",
  level: 2
}, {
  value: "\u76EE\u6A19",
  id: "goal",
  level: 2
}, {
  value: "\u691C\u8A3C",
  id: "verification",
  level: 3
}, {
  value: "\u524D\u63D0\u6761\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u4F5C\u696D\u5185\u5BB9",
  id: "do",
  level: 2
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3",
  id: "user-code-sections",
  level: 3
}, {
  value: "\u53C2\u8003\u8CC7\u6599",
  id: "further-reading",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001STM32CubeMX\u3092\u4F7F\u7528\u3057\u3066\u3001\u7279\u5B9A\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5411\u3051\u306E\u4F5C\u696D\u7528\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u3053\u306E\u30CF\u30A6\u30C4\u30FC\uFF65\u30AC\u30A4\u30C9\u4EE5\u964D\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u57FA\u76E4\u3068\u306A\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECA\u5F8C\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001STM32CubeMX\u306B\u3088\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u3055\u3089\u306B\u8A73\u7D30\u306B\u8A2D\u5B9A\u3057\u3001\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u304C\u6A5F\u80FD\u3059\u308B\u3088\u3046\u306B\u3001\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u3066\u7D44\u307F\u8FBC\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u9577\u671F\u306B\u308F\u305F\u3063\u3066\u5B58\u7D9A\u3055\u305B\u308B\u3082\u306E\u3067\u3042\u308A\u3001\u7DAD\u6301\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3055\u307E\u3056\u307E\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u5F15\u304D\u7D9A\u304D\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u3001\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u3082\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306E\u65B9\u7B56\u306E\u6C7A\u5B9A\u304C\u5FC5\u8981\u3067\u3059\u3002 \u65B0\u3057\u3044\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306E\u304B\u3001\u307E\u305F\u306F\u5358\u306B\u305D\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u518D\u78BA\u8A8D\u3059\u308B\u306E\u304B\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0F\u3055\u306A\u30C6\u30B9\u30C8\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u304C\u591A\u6570\u5FC5\u8981\u306B\u306A\u308B\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002 \u305D\u306E\u3088\u3046\u306A\u5834\u5408\u306F\u3001\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u51FA\u767A\u70B9\u3068\u3057\u3066\u9069\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u6A19\u306F\u3001\u30DC\u30FC\u30C9\u306BFlash\u3057\u3066\u5B9F\u884C\u3067\u304D\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092STM32CubeMX\u3067\u4F5C\u6210\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30C7\u30D0\u30C3\u30AC\u6A5F\u80FD\u3092\u5099\u3048\u305FIDE\uFF08\u4F8B: STM32CubeIDE\u307E\u305F\u306FIAR Embedded Workbench\uFF09\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u4E0A\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30C7\u30D0\u30C3\u30B0\u304A\u3088\u3073\u30B9\u30C6\u30C3\u30D7\u5B9F\u884C\u3067\u304D\u308B\u3053\u3068\u3082\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D0\u30C3\u30AC\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3055\u307E\u3056\u307E\u306A\u6BB5\u968E\u3067\u30C7\u30D0\u30C3\u30B0\uFF65\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3092\u51FA\u529B\u3059\u308B\u65B9\u6CD5\u3092\u898B\u3064\u3051\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001 \u30B7\u30EA\u30A2\u30EB\uFF65\u30DD\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u691C\u8A3C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306B\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u691C\u8A3C\u5185\u5BB9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304CSTM32CubeMX\u3067\u9069\u5207\u306B\u751F\u6210\u3055\u308C\u3001\u3053\u306E\u5F8C\u306E\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u51FA\u767A\u70B9\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30D1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u30C9\u30E9\u30A4\u30D0\u306B\u3088\u3063\u3066\u30D1\u30B9\u3082\u542B\u3081\u3066\u9069\u5207\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3002 \u30B3\u30FC\u30C9\u3092\u3055\u3089\u306B\u4F5C\u6210\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7E70\u308A\u8FD4\u3057\u518D\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306E\u30D2\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u30C7\u30D0\u30C3\u30B0\u53EF\u80FD\u3067\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3067\u505C\u6B62\u3059\u308B\u3053\u3068\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u72B6\u614B\u3092\u8ABF\u3079\u3001\u30A8\u30E9\u30FC\u3092\u8ABF\u67FB\u3067\u304D\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u524D\u63D0\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u524D\u63D0\u6761\u4EF6\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32\u30D9\u30FC\u30B9\u306E\u30DC\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0 / \u30C7\u30D0\u30C3\u30B0\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9 - ST-LINK\u3001JLINK\u3001\u307E\u305F\u306F\u3053\u308C\u3089\u306B\u985E\u3059\u308B\u3082\u306E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IDE\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3053\u3068 - STM32CubeIDE\u3001IAR Embedded Workbench\u3001Keil uVision\u3001\u307E\u305F\u306F\u3053\u308C\u3089\u306B\u985E\u3059\u308B\u3082\u306E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u4F5C\u696D\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u304B\u3089\u306F\u3001STM32CubeMX\u3067\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u30B9\u30C6\u30C3\u30D7\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001STM32F429\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u5F53\u7136\u3001\u3054\u81EA\u8EAB\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u642D\u8F09\u3055\u308C\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u3001\uFF3BStart My Project from MCU\uFF3D\u306E\uFF3BACCESS TO MCU SELECTOR\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\uFF08STM32F429Discovery\u30DC\u30FC\u30C9\u306A\u3069\uFF09\u3092\u57FA\u306B\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002 \u3044\u305A\u308C\u304B\u306E\u8A55\u4FA1\u30AD\u30C3\u30C8\u306B\u57FA\u3065\u3044\u3066\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u8A2D\u8A08\u3092\u884C\u3046\u5834\u5408\u306B\u306F\u3001\u3053\u306E\u65B9\u6CD5\u3092\u63A8\u5968\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u95A2\u9023\u3059\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001STM32F429ZIT6U\u3092\u9078\u629E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BProject Manager\uFF3D\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u5165\u529B\u3057\u307E\u3059\u3002 \u5F53\u7136\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u6240\u3082\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \uFF3BApplication Structure\uFF3D\u306E\u4E0B\u3067\uFF3BAdvanced\uFF3D\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \uFF3BToolchain / IDE\uFF3D\u3067\u306F\u3001IDE\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001IAR\u3092\u9078\u629E\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u3068IDE\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u53F3\u4E0A\u9685\u306E\uFF3BGenerate Code\uFF3D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3053\u308C\u304C\u9078\u629E\u3057\u305F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D5\u30A1\u30DF\u30EA\uFF08F4 / F7 / H7\uFF09\u3067\u6700\u521D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308B\u5834\u5408\u3001\u95A2\u9023\u3059\u308BSTM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u3088\u3046\u3001\u81EA\u52D5\u7684\u306B\u4FC3\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3092\u53D7\u3051\u5165\u308C\u3001\u5F8C\u307B\u3069\u4F7F\u7528\u3059\u308B\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u5165\u624B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "STM32CubeMX\u3067STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u304C\u53EF\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BOpen Project\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001IDE\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u751F\u6210\u3055\u308C\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304CIAR Embedded Workbench\u3067\u958B\u304B\u308C\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u751F\u6210\u3055\u308C\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u56FA\u6709\u306E\u8D77\u52D5\u30B3\u30FC\u30C9\u3001\u5272\u8FBC\u307F\u30C6\u30FC\u30D6\u30EB\u3001\u30B7\u30B9\u30C6\u30E0\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5185\u306E\u3059\u3079\u3066\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u7528\u306EHAL\u30C9\u30E9\u30A4\u30D0\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u3001IDE\u304B\u3089\u30C7\u30D0\u30C3\u30B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 IAR\u3067\u3001\uFF3BProject\uFF3D>\uFF3BMake\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u3001\uFF3BProject\uFF3D>\uFF3BDownload and Debug\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30C7\u30D0\u30C3\u30B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "IAR Embedded Workbench\u3067\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30C7\u30D0\u30C3\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001STLink\u30C7\u30D0\u30C3\u30AC\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u5225\u306E\u30C7\u30D0\u30C3\u30AC\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001IDE\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30C7\u30D0\u30C3\u30AC\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx08.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30E1\u30A4\u30F3\u30EB\u30FC\u30D7\u304C\u9023\u7D9A\u7684\u306B\u5B9F\u884C\u3055\u308C\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u306A\u3057\u3067\u5B9F\u884C\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306Fmain\u306Ewhile\u30EB\u30FC\u30D7\u304C\u91CD\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u3001\u305D\u3053\u306B\u79FB\u52D5\u3067\u304D\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002\u30EB\u30FC\u30D7\u306B\u4F55\u3089\u304B\u306E\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3057\u3066\u307F\u3066\u3082\u3044\u3044\u3067\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IDE\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3055\u307E\u3056\u307E\u306A\u5834\u6240\u3092\u53C2\u7167\u3057\u3001\u305D\u306E\u69CB\u9020\u306B\u6163\u308C\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002 SystemInit\u304B\u3089main\u307E\u3067\u306E\u30B9\u30C6\u30C3\u30D7\u5B9F\u884C\u3082\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code-sections"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u91CD\u8981\u306A\u30DD\u30A4\u30F3\u30C8\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u7DE8\u96C6\u306B\u7740\u624B\u3059\u308B\u524D\u306B\u3001STM32CubeMX\u3067\u4F7F\u7528\u3055\u308C\u308B\u300C\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u300D\u306E\u6982\u5FF5\u3092\u7406\u89E3\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306ECore/Src\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u3059\u3079\u3066STM32CubeMX\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001STM32CubeMX\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u3068\uFF08UART\u3092\u6709\u52B9\u5316\u3059\u308B\u306A\u3069\uFF09\u3001\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u4E00\u90E8\u306F\u518D\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u30B3\u30FC\u30C9\u3092\u633F\u5165\u3057\u305F\u5834\u5408\u3001 \u305D\u306E\u30B3\u30FC\u30C9\u306F\u3001STM32CubeMX\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u751F\u6210\u3059\u308B\u3068\u5931\u308F\u308C\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u6B21\u306E\u30EB\u30FC\u30EB\u306B\u5F93\u3046\u3053\u3068\u3067\u3001\u305D\u3046\u3057\u305F\u4E8B\u614B\u3092\u9632\u3050\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30B3\u30FC\u30C9\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u306E\u307F\u66F8\u304D\u8FBC\u3080`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u4EE5\u5916\u306E\u5834\u6240\u306B\u66F8\u304D\u8FBC\u3093\u3060\u30B3\u30FC\u30C9\u306F\u3001\u3059\u3079\u3066STM32CubeMX\u306B\u3088\u3063\u3066\u524A\u9664\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u3068\u3057\u3066\u3001Core/Src/main.c\u306E\u6700\u521D\u306E\u6570\u884C\u3092\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-5}",
    "{3-5}": true
  }), `int main(void)
{
  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */


  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();
  ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5834\u6240\uFF08main\u95A2\u6570\u306E\u5192\u982D\uFF09\u306B\u30B3\u30FC\u30C9\u3092\u633F\u5165\u3059\u308B\u5834\u5408\u306F\u3001USER CODE BEGIN 1\u3068USER CODE END 1\u306E\u9593\u306B\u5165\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30D6\u30ED\u30C3\u30AF\u4EE5\u5916\u306B\u66F8\u8FBC\u3093\u3060\u30B3\u30FC\u30C9\u306F\u3001STM32CubeMX\u306B\u3088\u3063\u3066\u524A\u9664\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3\u4EE5\u5916\u306B\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u8FBC\u307E\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 \u305D\u308C\u3089\u306E\u30B3\u30FC\u30C9\u306F\u3001STM32CubeMX\u304C\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u969B\u306B\u524A\u9664\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-reading"
  }), `\u53C2\u8003\u8CC7\u6599`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u306B\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u306F\u3001CubeMX\u306E\u8A73\u7D30\u60C5\u5831\u304C\u63B2\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "STM32CubeMX\u30E6\u30FC\u30B6\uFF65\u30DE\u30CB\u30E5\u30A2\u30EB")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeide.html#resource",
    mdxType: "Link"
  }, "STM32CubeIDE\u8CC7\u6599")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",
    mdxType: "Link"
  }, "STM32CubeMX\u304A\u3088\u3073STM32Cube\u306B\u95A2\u3059\u308B\u5927\u898F\u6A21\u516C\u958B\u30AA\u30F3\u30E9\u30A4\u30F3\uFF65\u30B3\u30FC\u30B9")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);