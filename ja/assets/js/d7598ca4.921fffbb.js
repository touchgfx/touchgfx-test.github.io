"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2245],{

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

/***/ 17549:
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
  id: "widgets-and-containers",
  title: "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/widgets-and-containers",
  "id": "development/ui-development/working-with-touchgfx/widgets-and-containers",
  "title": "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/widgets-and-containers",
  "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "widgets-and-containers",
    "title": "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX\u306B\u304A\u3051\u308BIDE\u306E\u4F7F\u7528",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"
  },
  "next": {
    "title": "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF",
    "permalink": "/4.20/ja/docs/development/ui-development/working-with-touchgfx/simulator"
  }
};
const assets = {};



const toc = [{
  value: "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
  id: "widgets",
  level: 2
}, {
  value: "\u30B3\u30F3\u30C6\u30CA",
  id: "containers",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u3067\u6700\u3082\u6839\u5E79\u7684\u306A\u6982\u5FF5\u306E2\u3064\u3092\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002\u305D\u308C\u306F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA\u3067\u3059\u3002 \u3053\u308C\u3089\u306F\u3001\u30E6\u30FC\u30B6\u304CUI\u306E\u958B\u767A\u5168\u4F53\u3092\u901A\u3057\u3066\u4F7F\u7528\u3059\u308B\u69CB\u6210\u8981\u7D20\u306E2\u3064\u3067\u3059\u3002 \u3069\u3061\u3089\u3082TouchGFX\u3067\u63D0\u4F9B\u3055\u308C\u308B\u65E2\u88FD\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u542B\u3080\u3068\u540C\u6642\u306B\u3001\u30AB\u30B9\u30BF\u30E0\u5B9F\u88C5\u306E\u4F5C\u6210\u3092\u5341\u5206\u306B\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u30AA\u30FC\u30D7\u30F3\u30A8\u30F3\u30C9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widgets"
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u304A\u3088\u3073TouchGFX Designer\u30C4\u30FC\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `Text Area`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `Texture Mapper`), `\u306A\u3069\u306E\u591A\u6570\u306E\u6A19\u6E96\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u63D0\u4F9B\u3057\u3066\u304A\u308A\u3001\u30E6\u30FC\u30B6\u306F\u3053\u308C\u3092\u81EA\u7531\u306B\u4F7F\u7528\u3057\u3066UI\u3092\u69CB\u7BC9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u57FA\u672C\u7684\u306A\u30EC\u30D9\u30EB\u3067\u306F\u3001TouchGFX\u306B\u304A\u3051\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u63CF\u304B\u308C\u3001\u76F8\u4E92\u4F5C\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u4F55\u304B\u306E\u62BD\u8C61\u7684\u306A\u5B9A\u7FA9\u306B\u3059\u304E\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/button/widget-appearance.png",
    mdxType: "Figure"
  }, "Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u4F7F\u7528\u3059\u308BButton\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30E6\u30FC\u30B6\u306F\u76EE\u7684\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u3001\u5404\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u56FA\u6709\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3057\u3066\u597D\u304D\u306A\u3088\u3046\u306B\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001TouchGFX\u304B\u3089\u63D0\u4F9B\u3055\u308C\u308B\u3055\u307E\u3056\u307E\u306A\u30BF\u30A4\u30D7\u306E\u30B3\u30F3\u30C6\u30CA\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B0\u30EB\u30FC\u30D7\u5206\u3051\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `add(widget_instance_name);`), `\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3042\u308B\u3044\u306F\u3001\u30B3\u30F3\u30C6\u30CA\u8FFD\u52A0\u95A2\u6570\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myContainer.add(widget_instance_name);`), `\u306A\u3069\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B3\u30F3\u30C6\u30CA\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8FFD\u52A0\u9806\u5E8F\u306B\u3088\u3063\u3066\u3001Z\u30AA\u30FC\u30C0\u30FC\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002 \u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6700\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5EA7\u6A19\u306F\u5E38\u306B\u3001\u30EB\u30FC\u30C8\uFF65\u30B3\u30F3\u30C6\u30CA\uFF08\u30B9\u30AF\u30EA\u30FC\u30F3\uFF09\u307E\u305F\u306F\u30B3\u30F3\u30C6\u30CA\u306E\u3044\u305A\u308C\u304B\u306E\u89AA\u30CE\u30FC\u30C9\u3092\u57FA\u6E96\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30E6\u30FC\u30B6\u306F\u56FA\u6709\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u72EC\u81EA\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/custom-widgets",
    mdxType: "Link"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"), "\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "containers"
  }), `\u30B3\u30F3\u30C6\u30CA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30C6\u30CA\u306FTouchGFX\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3084\u305D\u306E\u4ED6\u306E\u30B3\u30F3\u30C6\u30CA\u306A\u3069\u306E\u5B50\u30CE\u30FC\u30C9\u3092\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u30B3\u30F3\u30C6\u30CA\u306FWidgets\u30BF\u30D6\u306EContainers\u30AB\u30C6\u30B4\u30EA\u4E0B\u306B\u3042\u308A\u3001\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u3067\u30B3\u30F3\u30C6\u30CA\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3053\u3068\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B3\u30F3\u30C6\u30CA\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B50\u306EZ\u65B9\u5411\u306E\u9806\u5E8F\u306F\u3001\u30B3\u30F3\u30C6\u30CA\u306B\u5B50\u304C\u8FFD\u52A0\u3055\u308C\u305F\u9806\u5E8F\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u5B50\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6700\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u304A\u3051\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F4D\u7F6E\u306F\u305D\u308C\u305E\u308C\u306E\u89AA\u3092\u57FA\u6E96\u306B\u6C7A\u307E\u308B\u306E\u3067\u3001\u89AA\u306E\u30B3\u30F3\u30C6\u30CA\u306E\u4F4D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u3068\u3001\u305D\u308C\u306B\u5408\u308F\u305B\u3066\u5B50\u3082\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30C6\u30CA\u306F\u30D3\u30E5\u30FC\u30DD\u30FC\u30C8\u3068\u3057\u3066\u6A5F\u80FD\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30B3\u30F3\u30C6\u30CA\u306E\u5F62\u72B6\u3068\u4EA4\u308F\u308B\u5B50\u306E\u90E8\u5206\u306E\u307F\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30B3\u30F3\u30C6\u30CA\u304C\u30D3\u30E5\u30FC\u30DD\u30FC\u30C8\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u69D8\u5B50\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u6700\u521D\u306B\u8868\u793A\u3055\u308C\u308B\u306E\u306F\u30B3\u30F3\u30C6\u30CA\u306E\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3\u3067\u3001\u3053\u306E\u30B3\u30F3\u30C6\u30CA\u306E\u5B50\u304C\u30DC\u30BF\u30F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",
    mdxType: "Figure"
  }, "\u30D3\u30E5\u30FC\u30DD\u30FC\u30C8\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u30B3\u30F3\u30C6\u30CA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30E6\u30FC\u30B6\u306F\u56FA\u6709\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u72EC\u81EA\u306E\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"), "\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);