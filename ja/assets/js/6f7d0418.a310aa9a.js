"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6898],{

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

/***/ 53143:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
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
  id: "startup-window",
  title: "Lobby\uFF08\u30ED\u30D3\u30FC\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/startup-window",
  "id": "development/ui-development/designer-user-guide/startup-window",
  "title": "Lobby\uFF08\u30ED\u30D3\u30FC\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/startup-window.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/startup-window",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/startup-window",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "startup-window",
    "title": "Lobby\uFF08\u30ED\u30D3\u30FC\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Designer User Guide",
    "permalink": "/4.20/ja/docs/category/designer-user-guide"
  },
  "next": {
    "title": "File Menu\uFF08\u30D5\u30A1\u30A4\u30EB\u30FB\u30E1\u30CB\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/file-menu"
  }
};
const assets = {};


const toc = [{
  value: "Home\uFF08\u30DB\u30FC\u30E0\uFF09",
  id: "home",
  level: 2
}, {
  value: "Create\uFF08\u4F5C\u6210\uFF09",
  id: "create",
  level: 2
}, {
  value: "Examples\uFF08\u30B5\u30F3\u30D7\u30EB\uFF09",
  id: "examples",
  level: 2
}, {
  value: "Demos\uFF08\u30C7\u30E2\uFF09",
  id: "demos",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Lobby\uFF08\u30ED\u30D3\u30FC\uFF09\u306F\u3001TouchGFX Designer\u306E\u958B\u59CB\u6642\u306B\u6700\u521D\u306B\u8868\u793A\u3055\u308C\u308B\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u3059\u3002 \u30ED\u30D3\u30FC\u304B\u3089\u306F\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u30C7\u30E2\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u691C\u7D22\u3057\u3001\u65E2\u5B58\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + N`), `\u30AD\u30FC\u3092\u62BC\u3059\u3053\u3068\u3067\u3001\u30ED\u30D3\u30FC\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306E\u521D\u56DE\u5B9F\u884C\u6642\u306B\u306F\u3001\u30ED\u30D3\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u524D\u306B\u3001Welcome\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#theme"
  }), `Light\u304A\u3088\u3073Dark\u30C6\u30FC\u30DE`), `\u306E\u9078\u629E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-welcome-pop-up.png",
    width: "630",
    height: "455",
    mdxType: "Figure"
  }, "Welcome\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-theme-selector-pop-up.png",
    width: "630",
    height: "420",
    mdxType: "Figure"
  }, "\u30C6\u30FC\u30DE\u9078\u629E\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "home"
  }), `Home\uFF08\u30DB\u30FC\u30E0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Home\u30BF\u30D6\u3067\u306F\u3001\u6700\u8FD1\u4F7F\u7528\u3057\u305FTouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\uFF08TBS\uFF09\u306B\u57FA\u3065\u3044\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u305F\u308A\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u3044\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-home.png",
    mdxType: "Figure"
  }, "Lobby\u306EHome\u30BF\u30D6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Recently used TouchGFX Board Setups`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u6700\u8FD1\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3055\u308C\u305FTBS\u3092\u9078\u629E\u3057\u3001\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u3001Blank UI\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 TBS\u3092\u9078\u629E\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#create"
  }), `Create`), `\u3067TBS\u3092\u9078\u629E\u3057\u305F\u3068\u304D\u3068\u540C\u3058\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `My Recent Projects`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u6700\u8FD1\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u3059\u3070\u3084\u304F\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Open`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Open\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u30D5\u30A1\u30A4\u30EB\uFF65\u30D6\u30E9\u30A6\u30B6\u304C\u958B\u304D\u3001\u624B\u52D5\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3067.touchgfx\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create New`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create New\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001Lobby\u306E\u30BF\u30D6\u304CHome\u304B\u3089Create\u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create"
  }), `Create\uFF08\u4F5C\u6210\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Create\u30BF\u30D6\u3067\u306F\u3001Blank UI\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3059\u308BTBS\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create.png",
    mdxType: "Figure"
  }, "Lobby\u306ECreate\u30BF\u30D6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Searchbar`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B5\u30FC\u30C1\u30D0\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30DC\u30FC\u30C9\u540D\u3067TBS\u3092\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "Searchbar"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Producer Filter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30D7\u30ED\u30C7\u30E5\u30FC\u30B5\uFF65\u30D5\u30A3\u30EB\u30BF\u306F3\u3064\u306E\u30D5\u30A3\u30EB\u30BF\u306B\u5206\u304B\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-filter.png",
    mdxType: "Figure"
  }, "Producer Filter"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS List`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u629E\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u306B\u57FA\u3065\u3044\u3066\u3001TBS\u306E\u30EA\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u5404TBS\u306B\u8868\u793A\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u540D\u524D\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3001\u89E3\u50CF\u5EA6\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-list.png",
    mdxType: "Figure"
  }, "TBS List\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Selected TBS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TBS\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u53F3\u5074\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u305D\u306ETBS\u306B\u95A2\u3059\u308B\u8A73\u7D30\u60C5\u5831\u3068\u3001\u305D\u306ETBS\u3092\u30D9\u30FC\u30B9\u306B\u3057\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-info-and-create.png",
    mdxType: "Figure"
  }, "Selected TBS\u306E\u8AAC\u660E\u304A\u3088\u3073\u30AA\u30D7\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u306B\u3088\u308A\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3068\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u4FDD\u5B58\u3055\u308C\u308B\u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u306B\u3088\u308A\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u6240\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u9078\u629E\u3055\u308C\u305FTBS\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308BColor Depth\uFF08\u8272\u6DF1\u5EA6\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u9078\u629E\u3055\u308C\u305FTBS\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3055\u307E\u3056\u307E\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u89E3\u50CF\u5EA6\u306E\u8ABF\u6574\u306F\u3001\u9078\u629E\u3055\u308C\u305FTBS\u306B\u5FDC\u3058\u3066\u3055\u307E\u3056\u307E\u306B\u7570\u306A\u308A\u307E\u3059\u3002 Simulator TBS\u3067\u306F\u30010x0\u304B\u30892000x2000\u307E\u3067\u306E\u7BC4\u56F2\u306E\u3059\u3079\u3066\u306E\u89E3\u50CF\u5EA6\u30B5\u30A4\u30BA\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u9078\u629E\u3055\u308C\u305FTBS\u3068Blank UI\u306B\u57FA\u3065\u304D\u3001\u4E0A\u8A18\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `Examples\uFF08\u30B5\u30F3\u30D7\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Examples\u30BF\u30D6\u3067\u306F\u3001\u30B5\u30F3\u30D7\u30EB\u3068TBS\u306B\u57FA\u3065\u304D\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples.png",
    mdxType: "Figure"
  }, "Lobby\u306EExamples\u30BF\u30D6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Searchbar`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Searchbar\uFF08\u30B5\u30FC\u30C1\u30D0\u30FC\uFF09\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30B5\u30F3\u30D7\u30EB\u3092\u540D\u524D\u3067\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "Searchbar"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Examples List`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u629E\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u306B\u57FA\u3065\u3044\u3066\u3001\u30B5\u30F3\u30D7\u30EB\u306E\u30EA\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u5404\u30B5\u30F3\u30D7\u30EB\u306B\u8868\u793A\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u540D\u524D\u3068\u3001\u305D\u306E\u30B5\u30F3\u30D7\u30EB\u3068\u4E92\u63DB\u6027\u304C\u3042\u308B\u89E3\u50CF\u5EA6\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-example-list.png",
    mdxType: "Figure"
  }, "Examples List\u306E\u30B5\u30F3\u30D7\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Select Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Select Board Setup\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u958B\u304D\u3001\u305D\u3053\u304B\u3089TBS\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "Select Board Setup\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Searchbar`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B5\u30FC\u30C1\u30D0\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001TBS\u3092\u540D\u524D\u3067\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Producer Filter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30D7\u30ED\u30C7\u30E5\u30FC\u30B5\uFF65\u30D5\u30A3\u30EB\u30BF\u306F3\u3064\u306E\u30D5\u30A3\u30EB\u30BF\u306B\u5206\u304B\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS List`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u629E\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u306B\u57FA\u3065\u3044\u3066\u3001TBS\u306E\u30EA\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u5404TBS\u306B\u8868\u793A\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u540D\u524D\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3001\u89E3\u50CF\u5EA6\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS Info`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TBS\u3092\u9078\u629E\u3059\u308B\u3068\u53F3\u5074\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u3001\u305D\u306ETBS\u306B\u95A2\u3059\u308B\u8A73\u7D30\u60C5\u5831\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u3001TBS\u3092\u9078\u629E\u3059\u308B\u305F\u3081\u306ESelect\u30DC\u30BF\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Select Board Setup\u30DC\u30BF\u30F3\u306E\u4EE3\u308F\u308A\u306B\u3001\u9078\u629E\u3057\u305FTBS\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u89E3\u50CF\u5EA6\u304C\u4E00\u81F4\u3057\u306A\u3044\u30B5\u30F3\u30D7\u30EB\u306F\u30B0\u30EC\u30FC\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-board.png",
    mdxType: "Figure"
  }, "\u9078\u629E\u3055\u308C\u305FTBS\u304C\u4E0A\u90E8\u306B\u793A\u3055\u308C\u305FExamples List\u3068\u3001\u305D\u306ETBS\u3068\u306E\u4E92\u63DB\u6027\u3092\u6301\u305F\u306A\u3044\u89E3\u50CF\u5EA6\u306E\u30B5\u30F3\u30D7\u30EB\u306F\u30B0\u30EC\u30FC\u8868\u793A\u306B\u306A\u3063\u3066\u3044\u308B\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Selected Example`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B5\u30F3\u30D7\u30EB\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u53F3\u5074\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u8AAC\u660E\u3068\u3001\u305D\u306E\u30B5\u30F3\u30D7\u30EB\u306B\u57FA\u3065\u3044\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-example.png",
    mdxType: "Figure"
  }, "Selected Example\u306E\u8AAC\u660E\u304A\u3088\u3073\u30AA\u30D7\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u306B\u3088\u308A\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3068\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u4FDD\u5B58\u3055\u308C\u308B\u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u306B\u3088\u308A\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u6240\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308BColor Depth\uFF08\u8272\u6DF1\u5EA6\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u30B5\u30F3\u30D7\u30EB\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3055\u307E\u3056\u307E\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u89E3\u50CF\u5EA6\u306E\u8ABF\u6574\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u3068TBS\u306B\u5FDC\u3058\u3066\u3055\u307E\u3056\u307E\u306B\u7570\u306A\u308A\u307E\u3059\u3002 Blank UI\u3068Simulator\u306E\u7D44\u307F\u5408\u308F\u305B\u306B\u3088\u308A\u30010x0\u304B\u30892000x2000\u307E\u3067\u306E\u7BC4\u56F2\u306E\u3059\u3079\u3066\u306E\u89E3\u50CF\u5EA6\u30B5\u30A4\u30BA\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u9078\u629E\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u3068TBS\u306B\u57FA\u3065\u304D\u3001\u4E0A\u8A18\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demos"
  }), `Demos\uFF08\u30C7\u30E2\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Demos\u30BF\u30D6\u3067\u306F\u3001\u30C7\u30E2\u3068TBS\u306B\u57FA\u3065\u304F\u3001\u307E\u305F\u306FBoard Specific Demo\uFF08BSD\uFF09\u306B\u57FA\u3065\u304F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo.png",
    mdxType: "Figure"
  }, "Lobby\u306EDemos\u30BF\u30D6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Demos Filter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u4E0A\u90E8\u306E\u30D5\u30A3\u30EB\u30BF\u3067\u3001Demo\u307E\u305F\u306FBoard Specific Demo\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u30C7\u30E2\u307E\u305F\u306FBSD\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-filter.png",
    mdxType: "Figure"
  }, "\u30C7\u30E2\uFF65\u30D5\u30A3\u30EB\u30BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Searchbar`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B5\u30FC\u30C1\u30D0\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30C7\u30E2\u307E\u305F\u306FBSD\u3092\u540D\u524D\u3067\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "Searchbar"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Demos List`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u629E\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u306B\u57FA\u3065\u3044\u3066\u3001\u30C7\u30E2\u306E\u30EA\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u5404\u30C7\u30E2\u307E\u305F\u306FBSD\u306B\u8868\u793A\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u540D\u524D\u3068\u5FC5\u8981\u306A\u89E3\u50CF\u5EA6\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo-list.png",
    mdxType: "Figure"
  }, "\u30C7\u30E2\uFF65\u30D5\u30A3\u30EB\u30BF\u3092\u9069\u7528\u3057\u305F\u30C7\u30E2\u306E\u30EA\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-board-specific-demo-list.png",
    mdxType: "Figure"
  }, "Board Specific Demo\u30D5\u30A3\u30EB\u30BF\u3092\u9069\u7528\u3057\u305F\u30C7\u30E2\u306E\u30EA\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Select Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Select Board Setup\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u958B\u304D\u3001\u305D\u3053\u304B\u3089TBS\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "Select Board Setup\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Selected Demo or BSD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B5\u30F3\u30D7\u30EB\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u53F3\u5074\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u8AAC\u660E\u3068\u3001\u305D\u306E\u30B5\u30F3\u30D7\u30EB\u306B\u57FA\u3065\u3044\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-selected-demo-or-bsd.png",
    mdxType: "Figure"
  }, "\u9078\u629E\u3055\u308C\u305F\u30C7\u30E2\u307E\u305F\u306FBSD\u3068\u8AAC\u660E\u304A\u3088\u3073\u30AA\u30D7\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u306B\u3088\u308A\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3068\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u4FDD\u5B58\u3055\u308C\u308B\u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u308C\u306B\u3088\u308A\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u6240\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30C7\u30E2\u307E\u305F\u306FBSD\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308BColor Depth\uFF08\u8272\u6DF1\u5EA6\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u30C7\u30E2\u307E\u305F\u306FBSD\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3055\u307E\u3056\u307E\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u89E3\u50CF\u5EA6\u306E\u8ABF\u6574\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30C7\u30E2\u307E\u305F\u306FBSD\u306B\u5FDC\u3058\u3066\u3055\u307E\u3056\u307E\u306B\u7570\u306A\u308A\u307E\u3059\u3002 Blank UI\u3068Simulator\u306E\u7D44\u307F\u5408\u308F\u305B\u306B\u3088\u308A\u30010x0\u304B\u30892000x2000\u307E\u3067\u306E\u7BC4\u56F2\u306E\u3059\u3079\u3066\u306E\u89E3\u50CF\u5EA6\u30B5\u30A4\u30BA\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u9078\u629E\u3055\u308C\u305F\u30C7\u30E2\u3068TBS\u3001\u307E\u305F\u306FBSD\u306B\u57FA\u3065\u304D\u3001\u4E0A\u8A18\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);