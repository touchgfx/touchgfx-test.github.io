"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2852],{

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

/***/ 60888:
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
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
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
  id: "position-size",
  title: "\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/position-size",
  "id": "development/ui-development/touchgfx-engine-features/position-size",
  "title": "\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/position-size.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/position-size",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/position-size",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "position-size",
    "title": "\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"
  },
  "next": {
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-containers"
  }
};
const assets = {};


const toc = [{
  value: "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8FFD\u52A0",
  id: "adding-widgets",
  level: 2
}, {
  value: "\u30B5\u30A4\u30BA\u3068\u4F4D\u7F6E\u306E\u8A2D\u5B9A",
  id: "setting-size-position",
  level: 2
}, {
  value: "\u30D8\u30EB\u30D1\uFF65\u30E1\u30BD\u30C3\u30C9",
  id: "helper-methods",
  level: 2
}, {
  value: "\u62E1\u5F35",
  id: "expanding",
  level: 3
}, {
  value: "\u4E2D\u592E\u63C3\u3048",
  id: "centering",
  level: 3
}, {
  value: "\u7121\u52B9\u5316",
  id: "invalidation",
  level: 3
}, {
  value: "\u79FB\u52D5",
  id: "moving",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306ATouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306EUI\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306E\u5927\u90E8\u5206\u306F\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u4F5C\u6210\u3067\u304D\u307E\u3059\u304C\u3001\u901A\u5E38\u306F\u30E6\u30FC\u30B6\u304C\u624B\u52D5\u3067\u5C11\u3057\u8A18\u8FF0\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u3092\u5897\u3084\u3057\u305F\u308A\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30D9\u30F3\u30C8\u3084\u8A2D\u5B9A\u30C7\u30FC\u30BF\u306B\u5FDC\u3058\u3066\u7570\u306A\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3092\u4F5C\u6210\u3059\u308B\u3088\u3046\u306A\u5834\u5408\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BF\u30B9\u30AF\u3092\u958B\u59CB\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u5F79\u306B\u7ACB\u3064\u30AF\u30E9\u30B9\u5185\u306E\u3044\u304F\u3064\u304B\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u77E5\u3063\u3066\u304A\u304F\u3068\u6709\u5229\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001Drawable\u30AF\u30E9\u30B9\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u3067\u3059\u3002 \u3053\u306E\u30AF\u30E9\u30B9\u306B\u306F\u3001\u30B5\u30A4\u30BA\u3068\u4F4D\u7F6E\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306E\u4E00\u822C\u7684\u306A\u30E1\u30BD\u30C3\u30C9\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/position-size/widgets1.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u968E\u5C64\uFF08\u90E8\u5206\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u591A\u304F\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u69CB\u7BC9\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001View\u30B5\u30D6\u30AF\u30E9\u30B9\u306B\u30E1\u30F3\u30D0\u30FC\u3068\u3057\u3066\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 View\u30AF\u30E9\u30B9\u306FScreen\u30AF\u30E9\u30B9\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/position-size/screen1.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u968E\u5C64"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u30AF\u30E9\u30B9\u306B\u306F\u30B3\u30F3\u30C6\u30CA\uFF65\u30E1\u30F3\u30D0\u30FC\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30EB\u30FC\u30C8\uFF65\u30B3\u30F3\u30C6\u30CA\u3068\u547C\u3070\u308C\u307E\u3059\u3002 \u30EB\u30FC\u30C8\uFF65\u30B3\u30F3\u30C6\u30CA\u306F\u3001(0,0)\u3067\u958B\u59CB\u3055\u308C\u3001\u8868\u793A\u30A8\u30EA\u30A2\u5168\u4F53\uFF08\u5E45= HAL::DISPLAY_WIDTH\u3001\u9AD8\u3055= HAL::DISPLAY_HEIGHT\uFF09\u3092\u57CB\u3081\u308B\u3088\u3046\u306B\u521D\u671F\u5316\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "adding-widgets"
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001View\u30AF\u30E9\u30B9\u5185\u306B\u30E1\u30F3\u30D0\u30FC\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3067View\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001myBox\u3068\u3044\u3046\u540D\u524D\u306E\u30DC\u30C3\u30AF\u30B9\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3,13-13}",
    "{3-3,13-13}": true
  }), `#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include <gui/screen1_screen/Screen1Presenter.hpp>
#include <touchgfx/widgets/Box.hpp>

class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
protected:
    Box myBox;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306E\u30B3\u30FC\u30C9\u5185\u3067Box\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001Box.hpp\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF08\u57FA\u5E95\u30AF\u30E9\u30B9\u306E\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u5834\u5408\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Box\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u63CF\u753B\u3059\u308B\u306B\u306F\u3001\u3053\u308C\u3092\u30B7\u30FC\u30F3\uFF65\u30B0\u30E9\u30D5\uFF08Screen\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C4\u30EA\u30FC\uFF09\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/scene-model.svg",
    noShadow: "true",
    width: 280,
    mdxType: "Figure"
  }, "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C4\u30EA\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306Fadd\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u3057\u307E\u3059\u3002 \u901A\u5E38\u306FsetupScreen\u5185\u3067\u884C\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{10-10}",
    "{10-10}": true
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View()
{
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
    add(myBox);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u4E0A\u306Eadd\u30E1\u30BD\u30C3\u30C9\u304C\u3001\u30EB\u30FC\u30C8\uFF65\u30B3\u30F3\u30C6\u30CA\u3067add\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void add(Drawable& d)
{
    container.add(d);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u306B\u5225\u306E\u30B3\u30F3\u30C6\u30CA\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u305D\u306E\u30B3\u30F3\u30C6\u30CA\u3067add\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u305D\u3053\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `void Screen1View::setupScreen()
{
    ...
    myContainer.add(myBox);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "setting-size-position"
  }), `\u30B5\u30A4\u30BA\u3068\u4F4D\u7F6E\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u4F4D\u7F6E(0,0)\u304C\u3042\u308A\u3001\u5E45\u3068\u9AD8\u3055\u306F\u30BC\u30ED\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u307B\u3068\u3093\u3069\u3044\u3064\u3082\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3068\u4F4D\u7F6E\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F4D\u7F6E\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306E\u57FA\u672C\u30E1\u30BD\u30C3\u30C9\u306F\u3001setXY\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `   myBox.setXY(10, 10); // Put myBox in x=10, y=10
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E45\u3068\u9AD8\u3055\u306F\u3001setWidthHeight\u30E1\u30BD\u30C3\u30C9\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3042\u308B\u3044\u306F\u3001setWidth\u304A\u3088\u3073setHeight\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `   myBox.setWidthHeight(200, 100); // Give myBox a width of 200, height 100
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E2\u3064\u306F\u3001setPosition\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u7D50\u5408\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `   myBox.setPosition(10, 10, 200, 100); // Put myBox in x=10, y=10, with a width of 200, height 100
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "helper-methods"
  }), `\u30D8\u30EB\u30D1\uFF65\u30E1\u30BD\u30C3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Drawable\u30AF\u30E9\u30B9\u306B\u306F\u3001Drawable\u306E\u8A2D\u5B9A\u3092\u652F\u63F4\u3059\u308B\u30D8\u30EB\u30D1\uFF65\u30E1\u30BD\u30C3\u30C9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../api/classes/classtouchgfx_1_1_drawable"
  }), `Drawable\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "expanding"
  }), `\u62E1\u5F35`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::expand()`), `\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF08Drawable\uFF09\u3092\u89AA\u3068\u540C\u3058\u30B5\u30A4\u30BA\u306B\u3057\u307E\u3059\u3002 \u4F59\u767D\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u5DE6\u4E0A\u9685\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\uFF08\u4F59\u767D\u3092\u542B\u3080\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `   myBox.expand(10); // Put myBox in x=10, y=10, same size as parent except for margin of 10 pix
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "centering"
  }), `\u4E2D\u592E\u63C3\u3048`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::centerX())`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::centerY())`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::center()`), `\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u89AA\u5185\u90E8\u306E\u4E2D\u592E\u306B\u914D\u7F6E\u3057\u307E\u3059\uFF08\u6A2A\u65B9\u5411\u3001\u7E26\u65B9\u5411\u3001\u4E21\u65B9\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `   myBox.centerX(); // Center myBox horizontally in its parent
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "invalidation"
  }), `\u7121\u52B9\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u3001\u518D\u63CF\u753B\u306E\u5FC5\u8981\u304C\u3042\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D1\u30FC\u30C4\u3092\u7121\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u5927\u304D\u304F\u3059\u308B\u5834\u5408\u306F\u3001\u65B0\u3057\u3044\u30B5\u30A4\u30BA\u3092\u7121\u52B9\u5316\u3059\u308B\u3060\u3051\u3067\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u5C0F\u3055\u304F\u3059\u308B\u5834\u5408\u306F\u3001\u30B5\u30A4\u30BA\u306E\u5909\u66F4\u524D\u306B\u7121\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `   // Expand the Box, invalidate after to get the new size redrawn
   myBox.expand(10);
   myBox.invalidate();
   ...
   // Reduce the Box to small size, invalidate before, to get background redrawn
   myBox.invalidate();
   myBox.myBox.setPosition(10, 10, 200, 100);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u7121\u52B9\u5316\u3059\u308B\u3068\u3001\uFF08\u305D\u306E\u6642\u70B9\u3067\uFF09\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5360\u6709\u3057\u3066\u3044\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u9818\u57DF\u304C\u3001\u6B21\u306E\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\u3067\u518D\u63CF\u753B\u3055\u308C\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 \u3064\u307E\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u7121\u52B9\u5316\u3057\u3066\u305D\u308C\u3092\u5C0F\u3055\u304F\u3059\u308B\u5834\u5408\u3001\u7121\u52B9\u5316\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3060\u3051\u3067\u306A\u304F\u3001\u8868\u793A\u3055\u308C\u3066\u3044\u308B\uFF08\u80CC\u5F8C\u306E\uFF09\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D1\u30FC\u30C4\u3082\u518D\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "moving"
  }), `\u79FB\u52D5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Drawable\u30AF\u30E9\u30B9\u306B\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F4D\u7F6E\u3092\u79FB\u52D5\u3059\u308B\u305F\u3081\u306E\u30E1\u30BD\u30C3\u30C9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::moveRelative(int16_t x, int16_t y)`), `\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u4E00\u74B0\u3068\u3057\u3066\u4F7F\u7528\u3057\u305F\u308A\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D1\u30FC\u30C4\u3092\u5358\u7D14\u306B\u518D\u6574\u5217\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::moveRelative(int16_t x, int16_t y)`), `\u306Finvalidate\u3092\u547C\u3073\u51FA\u3059\u306E\u3067\u3001\u7121\u52B9\u5316\u306E\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `    myBox.moveRelative(1, 0); // Move 1 pixel to the right
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u30461\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Drawable::moveTo(int16_t x, int16_t y)`), `\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u305F\u4F4D\u7F6E\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `    myBox.moveTo(100, 100); // Move to 100, 100 from current position
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3082\u3001invalidate\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);