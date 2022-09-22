"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7124],{

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

/***/ 28810:
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
  id: "fonts-in-unmapped-flash",
  title: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u7528\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/fonts-in-unmapped-flash",
  "id": "development/scenarios/fonts-in-unmapped-flash",
  "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u7528\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/fonts-in-unmapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/fonts-in-unmapped-flash",
  "permalink": "/4.20/ja/docs/development/scenarios/fonts-in-unmapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "fonts-in-unmapped-flash",
    "title": "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u7528\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u3092\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u7528\u306B\u30B7\u30EA\u30A2\u30EBFlash\u306E\u4F7F\u7528",
    "permalink": "/4.20/ja/docs/development/scenarios/using-serial-flash"
  },
  "next": {
    "title": "\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5909\u66F4",
    "permalink": "/4.20/ja/docs/development/scenarios/scenarios-change-pixelformat-bpp"
  }
};
const assets = {};


const toc = [{
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8",
  id: "font-layouts",
  level: 2
}, {
  value: "\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "mapped-storage-format",
  level: 3
}, {
  value: "\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
  id: "unmapped-storage-format",
  level: 3
}, {
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0",
  id: "font-data-reader",
  level: 4
}, {
  value: "\u30B5\u30DE\u30EA",
  id: "summary",
  level: 3
}, {
  value: "\u4F8B",
  id: "example",
  level: 2
}, {
  value: "\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u66F4\u65B0",
  id: "linker-script-modifications",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u307B\u307C\u3059\u3079\u3066\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u975E\u30DE\u30C3\u30D7\u30C9\u306E\u5916\u90E8Flash\u306B\u914D\u7F6E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3001\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30D5\u30A9\u30F3\u30C8\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3088\u308A\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u7528\u306B\u308F\u305A\u304B10 KB\u306E\u5185\u90E8Flash\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u30011\u3064\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u6570\u5343\u306E\u6587\u5B57\u3092\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-layouts"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u30E6\u30FC\u30B6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u7528\u306B\u30012\u3064\u306E\u7570\u306A\u308B\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u4F7F\u7528\u3059\u308B\u30EC\u30A4\u30A2\u30A6\u30C8\u306F\u3001TouchGFX Designer\u306E\u8A2D\u5B9A\uFF08Configurations\uFF09\u30BF\u30D6\u3067\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/designer-configuration-4.17.png",
    mdxType: "Figure"
  }, "\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Mapped storage format`), `\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u3067\u3001\u30D5\u30A9\u30F3\u30C8\u304C\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\uFF08\u5185\u90E8Flash\u3001\u307E\u305F\u306F\u5916\u90E8\u306EQSPI Flash\u306A\u3069\uFF09\u306B\u4FDD\u5B58\u3055\u308C\u308B\u30B7\u30B9\u30C6\u30E0\u3067\u306F\u3053\u308C\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Unmapped storage format`), `\u306F\u65B0\u3057\u3044\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u3067\u3059\u3002 \u5927\u90E8\u5206\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u975E\u30DE\u30C3\u30D7\u30C9Flash\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u901A\u5E38\u306FSPI Flash\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u304C\u3001\u4EFB\u610F\u306E\u30BF\u30A4\u30D7\u306E\u30B9\u30C8\u30EC\u30FC\u30B8\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mapped-storage-format"
  }), `\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u304C2\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u3064\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306Ftouchgfx::GlyphNode\u306E\u30A2\u30EC\u30A4\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3053\u306B\u306F\u500B\u3005\u306E\u6587\u5B57\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08\u9AD8\u3055\u3001\u5E45\u3001Unicode\u306A\u3069\uFF09\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Table_verdana_20_4bpp.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_TABLE_LOCATION_FLASH_PRAGMA
KEEP extern const touchgfx::GlyphNode glyphs_verdana_20_4bpp[] FONT_TABLE_LOCATION_FLASH_ATTRIBUTE =
{
    {     0, 0x0020,   0,   0,   0,   0,   7,   0,   0, 0x00 },
    {     0, 0x002C,   5,   7,   3,   1,   7,   0,   2, 0x00 },
    {    21, 0x0030,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   105, 0x0032,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   189, 0x0033,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   273, 0x0034,  12,  14,  14,   0,  13,   0,   0, 0x00 },
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u3064\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\uFF08\u5927\u304D\u306A\u30D5\u30A9\u30F3\u30C8\u3067\u306F\u8907\u6570\u30D5\u30A1\u30A4\u30EB\u306B\u5206\u5272\u3055\u308C\u308B\uFF09\u306B\u306F\u3001\u6587\u5B57\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D1\u30BF\u30FC\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Font_verdana_20_4bpp_0.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_GLYPH_LOCATION_FLASH_PRAGMA
KEEP extern const uint8_t unicodes_verdana_20_4bpp_0[] FONT_GLYPH_LOCATION_FLASH_ATTRIBUTE =
{
    // Unicode: [0x0020]
    // (Has no glyph data)
    // Unicode: [0x002C]
    0x00, 0x87, 0x04, 0x20, 0xFF, 0x03, 0x60, 0xBF, 0x00, 0xA0, 0x5F, 0x00, 0xE0, 0x0D, 0x00, 0xF3,
    0x07, 0x00, 0xF6, 0x01, 0x00,
    // Unicode: [0x0030]
    0x00, 0xA3, 0xFE, 0x9D, 0x01, 0x00, 0x40, 0xFF, 0x9B, 0xFC, 0x1D, 0x00, 0xD0, 0x4F, 0x00, 0x80,
    0x9F, 0x00, 0xF3, 0x0B, 0x00, 0x10, 0xEE, 0x00, 0xF7, 0x07, 0x00, 0x00, 0xFB, 0x03, 0xF9, 0x06,
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u306E\u30EC\u30A4\u30A2\u30A6\u30C8\u6642\u306B\u306F\u3001GlyphNodes\u304CTouchGFX\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\u306F\u63CF\u753B\u6642\u306B\u3001DMA2D\u307E\u305F\u306F\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30EB\u30FC\u30C1\u30F3\u306B\u3088\u3063\u3066\u8AAD\u307F\u53D6\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u306ELCD\u30AF\u30E9\u30B9\uFF08LCD16bpp\u3084LCD24bpp\u306A\u3069\uFF09\u3092\u4F7F\u7528\u3059\u308B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u5185\u90E8Flash\u307E\u305F\u306F\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\u306E\u5916\u90E8Flash\u306B\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCD16bppSerialFlash\u3092\u4F7F\u7528\u3059\u308B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001\u63CF\u753B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3067\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B7\u30EA\u30A2\u30EBFlash\u304B\u3089\u30D4\u30AF\u30BB\u30EB\u30D1\u30BF\u30FC\u30F3\u3092\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001GlyphNodes\u304C\u5185\u90E8Flash\u5185\u306B\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\uFF08\u3053\u308C\u306F\u76F4\u63A5\u691C\u7D22\u3055\u308C\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30EC\u30A4\u30A2\u30A6\u30C8\u3067\u306F\u30011\u6587\u5B57\u306B\u3064\u304D\u5185\u90E8Flash\u304C14\u30D0\u30A4\u30C8\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unmapped-storage-format"
  }), `\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u304C3\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u5206\u5272\u3055\u308C\u307E\u3059\u3002 \u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u306E2\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u518D\u5229\u7528\u3055\u308C\u307E\u3059\u304C\u3001\u6B21\u306B\u793A\u30593\u3064\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Table_verdana_20_4bpp.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_SEARCHTABLE_LOCATION_FLASH_PRAGMA
KEEP extern const uint16_t unicodelist_verdana_20_4bpp[] FONT_SEARCHTABLE_LOCATION_FLASH_ATTRIBUTE =
{
    0x0020,
    0x002E,
    0x003F,
    0x004E,
    0x0054,
    ....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E3\u3064\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u3001\u30D5\u30A9\u30F3\u30C8\u3092\u8868\u3059Unicode\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u30013\u3064\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u5185\u90E8Flash\u5185\u306B\u7F6E\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u4ED6\u306E2\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u5916\u90E8Flash\u306B\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u5927\u5E45\u306A\u7BC0\u7D04\u306B\u306A\u308A\u307E\u3059\u30023\u3064\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u3067\u306F\u30011\u6587\u5B57\u306B\u4F7F\u7528\u3055\u308C\u308B\u306E\u306F2\u30D0\u30A4\u30C8\u3067\u3059\u304C\u3001GlyphNode\u30C6\u30FC\u30D6\u30EB\u3067\u306F14\u30D0\u30A4\u30C8\u4F7F\u7528\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u5185\u90E8Flash\u306B\u5FC5\u8981\u306A\u5BB9\u91CF\u304C\u8EFD\u6E1B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "font-data-reader"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\uFF65\u30EA\u30FC\u30C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u304C\u975E\u30DE\u30C3\u30D7\u30C9Flash\u306B\u7F6E\u304B\u308C\u308B\u3068\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u76F4\u63A5\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001Flash\u30EA\u30FC\u30C0\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30D6\u30B7\u30B9\u30C6\u30E0\u306B\u7528\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306E\u30B3\u30FC\u30C9\u306FTouchGFX Generator\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{12-12}",
    "{12-12}": true
  }), `static TouchGFXDataReader dataReader;
static LCD16bppSerialFlash display(dataReader);
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 240, 320);
void touchgfx_init()
{
  Bitmap::registerBitmapDatabase(BitmapDatabase::getInstance(), BitmapDatabase::getInstanceSize());
  TypedText::registerTexts(&texts);
  Texts::setLanguage(0);
  hal.setDataReader(&dataReader);
  fontProvider.setFlashReader(&dataReader);
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Generator\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u624B\u52D5\u3067\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u969B\u306B\u30C7\u30FC\u30BF\u3092Flash\u304B\u3089\u8AAD\u307F\u8FBC\u3080\u305F\u3081\u306B\u306F\u3001TouchGFXDataReader\u306E\u6A5F\u80FD\u306E\u5B9F\u88C5\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary"
  }), `\u30B5\u30DE\u30EA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u306F2\u3064\u307E\u305F\u306F3\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u6B21\u306E\u8868\u306B\u3001Flash\u3078\u306E\u914D\u7F6E\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C6\u30FC\u30D6\u30EB\uFF08\u30B5\u30F3\u30D7\u30EB\u540D\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GlyphNodes\uFF08glyphs_verdana_20_4bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\uFF08unicodes_verdana_20_4bpp_0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Unicode\uFF08unicodelist_verdana_20_4bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0D\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u65B0\u3057\u3044\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/example1.png",
    mdxType: "Figure"
  }, "\u6F22\u5B574,000\u6587\u5B57\u3092\u542B\u3080\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001MB1642A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30E2\u30B8\u30E5\u30FC\u30EB\u642D\u8F09\u306ESTM32G071 Nucleo\u30DC\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/g071.png",
    width: "400",
    mdxType: "Figure"
  }, "STM32G071 Nucleo\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u306F\u3001\u30B5\u30A4\u30BA\u304C20\u30014bit/pixel\u306E\u6F22\u5B574,000\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u30C7\u30FC\u30BF\u306F\u3001STM32G071\u4E0A\u3067\u4F7F\u7528\u53EF\u80FD\u306A128 KB\u306E\u3046\u306161 KB\u3092\u5360\u6709\u3057\u307E\u3059\u3002 \u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u306F\u6B21\u306E\u3088\u3046\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\uFF08\u30DE\u30A4\u30CA\u30FC\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u9664\u304F\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C6\u30FC\u30D6\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5834\u6240`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B5\u30A4\u30BA`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GlyphNodes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8SPI Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `57,372\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D4\u30AF\u30BB\u30EB\u30D1\u30BF\u30FC\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8SPI Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3,116,296\u30D0\u30A4\u30C8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Unicode \u30EA\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8,000\u30D0\u30A4\u30C8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30D5\u30A9\u30F3\u30C8\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u6B63\u3057\u304F\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u304C\u6B63\u3057\u304F\u914D\u7F6E\u3055\u308C\u308B\u3088\u3046\u306B\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `define symbol __ICFEDIT_region_ROM_start__ = 0x08000000;
define symbol __ICFEDIT_region_ROM_end__   = 0x0801FFFF;
define symbol __ICFEDIT_region_RAM_start__ = 0x20000000;
define symbol __ICFEDIT_region_RAM_end__   = 0x20008FFF;
define symbol __ICFEDIT_region_SERIAL_FLASH_start__ = 0x90000000;
define symbol __ICFEDIT_region_SERIAL_FLASH_end__   = 0x91000000;

place in ROM_region   { readonly };
place in RAM_region   { readwrite,
                        block CSTACK, block HEAP };

place in SERIAL_FLASH_region {section ExtFlashSection, section FontFlashSection };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u306F\u3001ExtFlashSection\uFF08\u753B\u50CF\u304A\u3088\u3073\u30D5\u30A9\u30F3\u30C8\u306E\u30D4\u30AF\u30BB\u30EB\uFF09\u3068FontFlashSection\uFF08GlyphNodes\uFF09\u3092\u4E21\u65B9\u3068\u3082\u5916\u90E8Flash\u306B\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059\u3002 \u305D\u306E\u4ED6\u306E\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30C7\u30FC\u30BF\u306F\u3059\u3079\u3066\u5185\u90E8Flash\uFF08ROM_region\uFF09\u306B\u3042\u308A\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);