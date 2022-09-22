"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8208],{

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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 84130:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
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
  id: "11-flash-loader",
  title: "11. Flash\u30ED\u30FC\u30C0",
  sidebar_label: "11. Flash\u30ED\u30FC\u30C0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/11-flash-loader",
  "id": "development/board-bring-up/how-to/11-flash-loader",
  "title": "11. Flash\u30ED\u30FC\u30C0",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/11-flash-loader",
  "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/11-flash-loader",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 11,
  "frontMatter": {
    "id": "11-flash-loader",
    "title": "11. Flash\u30ED\u30FC\u30C0",
    "sidebar_label": "11. Flash\u30ED\u30FC\u30C0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "10. \u7269\u7406\u30DC\u30BF\u30F3",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/10-physical-buttons"
  },
  "next": {
    "title": "TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
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
  value: "STM32CubeProgrammer\u306EFlash\u30ED\u30FC\u30C0",
  id: "flash-loader-for-stm32cubeprogrammer",
  level: 3
}, {
  value: "\u72EC\u81EA\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u304F\u65B9\u6CD5",
  id: "proprietary-application-based-solution",
  level: 3
}, {
  value: "\u30C6\u30B9\u30C8",
  id: "testing",
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
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u5916\u90E8Flash\u3078\u306E\u30C7\u30FC\u30BF\u306E\u30ED\u30FC\u30C9\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u30B3\u30F3\u30D1\u30A4\u30E9\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3001\u30D5\u30A9\u30F3\u30C8\u3001\u753B\u50CF\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u3066\u3001\u305D\u306E\u30C7\u30FC\u30BF\u306B\u3088\u3063\u3066\u30D0\u30A4\u30CA\u30EA\u307E\u305F\u306FHEX\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u306F\u3001\u901A\u5E38\u3001\u5916\u90E8Flash\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 \u5185\u90E8Flash\u306F\u30B3\u30FC\u30C9\u7528\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u4E2D\u306F\u3001\u5916\u90E8Flash\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u624B\u6BB5\u304C\u5FC5\u8981\u3067\u3059\u304C\u3001\u5B9F\u884C\u6642\u306FFlash\u304B\u3089\u8AAD\u307F\u51FA\u3059\u3060\u3051\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u308C\u306F\u4E0D\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767A\u4E2D\u306F\u3001\u5916\u90E8Flash\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u624B\u6BB5\u304C\u5FC5\u8981\u3067\u3059\u304C\u3001\u5B9F\u884C\u6642\u306FFlash\u304B\u3089\u8AAD\u307F\u51FA\u3059\u3060\u3051\u3067\u3042\u308B\u305F\u3081\u3001\u3053\u308C\u306F\u4E0D\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer\u306EFlash\u30ED\u30FC\u30C0\u3092\u4F5C\u6210\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u72EC\u81EA\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u304F\u65B9\u6CD5\u3092\u4F7F\u7528\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5916\u90E8Flash\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8Flash\u3078\u306E\u30C7\u30FC\u30BF\u66F8\u8FBC\u307F\u306B\u306F\u4E00\u822C\u7684\u306B\u6B21\u306E2\u3064\u306E\u65B9\u6CD5\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u691C\u8A3C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u76EE\u6A19\u306F\u3001\u5916\u90E8Flash\u306B\u30C7\u30FC\u30BF\u3092\u30ED\u30FC\u30C9\u3059\u308B\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u9078\u629E\u3057\u3001\u958B\u767A\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\u30C7\u30FC\u30BF\u3092Flash\u3067\u304D\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u753B\u50CF\u306E\u683C\u7D0D\u306B\u5916\u90E8Flash\u3092\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u524D\u63D0\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306B\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash\u306B\u95A2\u3059\u308B\u60C5\u5831(\u901A\u5E38\u306F\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u5916\u90E8Flash\u306E\u63A5\u7D9A\u306B\u95A2\u3059\u308B\u60C5\u5831`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u4F5C\u696D\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash-loader-for-stm32cubeprogrammer"
  }), `STM32CubeProgrammer\u306EFlash\u30ED\u30FC\u30C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer`), `\u306B\u306F\u3001\u5404\u7A2ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u7528\u306EFlash\u30ED\u30FC\u30C0\u304C\u4ED8\u5C5E\u3057\u3066\u3044\u307E\u3059\u3002 Flash\u30ED\u30FC\u30C0\u3068\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306ERAM\u306B\u30ED\u30FC\u30C9\u3055\u308C\u3001Flash\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3092\u5BB9\u6613\u306B\u3059\u308B\u3001\u5C0F\u3055\u306A\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u30ED\u30FC\u30C0\u306F\u4EE5\u4E0B\u306E2\u3064\u306E\u90E8\u5206\u304B\u3089\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash\u3068\u306E\u901A\u4FE1\u306B\u5FC5\u8981\u306AGPIO\u3068Flash\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash\u3078\u306E\u66F8\u8FBC\u307F\u306B\u5FC5\u8981\u306A\u30B3\u30DE\u30F3\u30C9\uFF65\u30B7\u30FC\u30B1\u30F3\u30B9\u306B\u5BFE\u5FDC\u3057\u305FFlash\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u90E8\u5206\u306F\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u65E2\u5B58\u306EFlash\u30ED\u30FC\u30C0\u306B\u57FA\u3065\u304D\u307E\u3059\u3002 \u4F7F\u7528\u3059\u308BFlash\u306E\u30ED\u30FC\u30C0\u3092\u5165\u624B\u3067\u304D\u305F\u5834\u5408\u306F\u3001\u305D\u308C\u3092\u8D77\u70B9\u3068\u3057\u3066\u3001GPIO\u306E\u90E8\u5206\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 \u8A55\u4FA1\u30AD\u30C3\u30C8\u306EFlash\u56DE\u8DEF\u3092\u30B3\u30D4\u30FC\u3057\u3066\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u8A2D\u8A08\u3059\u308B\u5834\u5408\u306F\u3001\u305D\u306E\u30AD\u30C3\u30C8\u306EFlash\u30ED\u30FC\u30C0\u3092\u305D\u306E\u307E\u307E\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 This is the way.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeProgrammer\u306B\u4ED8\u5C5E\u3059\u308BFlash\u30ED\u30FC\u30C0\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u901A\u5E38\u306F\u3001\u6B21\u306E\u30D5\u30A9\u30EB\u30C0\u3067\u3059\u3002C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash loader projects can also be found on github:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    to: "https://github.com/STMicroelectronics/stm32-external-loader",
    mdxType: "Link"
  }, "STM32 External Flashloaders on GitHub"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "proprietary-application-based-solution"
  }), `\u72EC\u81EA\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u304F\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u3046\u4E00\u3064\u306E\u65B9\u6CD5\u3068\u3057\u3066\u3001Flash\u306E\u30ED\u30FC\u30C9\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u81EA\u4F53\u306B\u7D44\u307F\u8FBC\u3080\u65B9\u6CD5\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3059\u3067\u306BFlash\u306E\u8A2D\u5B9A\uFF08Flash\u304B\u3089\u30ED\u30FC\u30C9\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\uFF09\u304C\u3042\u308B\u306E\u3067\u3001\u524D\u306E\u30C6\u30B9\u30C8\u3067\u5B9F\u884C\u3057\u305F\u3088\u3046\u306BFlash\u306B\u30D6\u30ED\u30C3\u30AF\u3092\u66F8\u304D\u8FBC\u3080\u65B9\u6CD5\u3082\u308F\u304B\u3063\u3066\u3044\u308B\u3060\u308D\u3046\u3068\u3044\u3046\u8003\u3048\u65B9\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002 \u305D\u306E\u5834\u5408\u306B\u5FC5\u8981\u306B\u306A\u308B\u306E\u306F\u3001\u65B0\u3057\u3044Flash\u30C7\u30FC\u30BF\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u8EE2\u9001\u3059\u308B\u65B9\u6CD5\u3060\u3051\u306B\u306A\u308A\u307E\u3059\u3002 \u305D\u306E\u65B9\u6CD5\u306E\u4E00\u3064\u304CUART\u3067\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30C7\u30FC\u30BF\uFF65\u30B9\u30C8\u30EA\u30FC\u30E0\u3092\u53D7\u4FE1\u3057\u3001\u305D\u306E\u30C7\u30FC\u30BF\u3092\u30D6\u30ED\u30C3\u30AF\u5358\u4F4D\u3067Flash\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u306F\u52D5\u4F5C\u4E2D\u306B\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u306B\u306F\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u901A\u5E38\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7279\u5225\u306A\u30E2\u30FC\u30C9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30C8\u9001\u4FE1\u306E\u30AA\u30FC\u30D7\u30F3\uFF65\u30BD\u30FC\u30B9\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u304B\u3089\u5165\u624B\u3067\u304D\u307E\u3059\u3002 \u30B5\u30F3\u30D7\u30EB\u306EY-modem\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u306F\u3001\u30C7\u30FC\u30BF\u306B16bit\u306ECRC\u304C\u4ED8\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "testing"
  }), `\u30C6\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D0\u30A4\u30C8\u9001\u4FE1\u306E\u30AA\u30FC\u30D7\u30F3\uFF65\u30BD\u30FC\u30B9\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u304B\u3089\u5165\u624B\u3067\u304D\u307E\u3059\u3002 \u30B5\u30F3\u30D7\u30EB\u306EY-modem\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u306F\u3001\u30C7\u30FC\u30BF\u306B16bit\u306ECRC\u304C\u4ED8\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u30D0\u30B0\u3092\u65E9\u671F\u306B\u767A\u898B\u3059\u308B\u305F\u3081\u306B\u3001\u3053\u3053\u3067Flash\u5168\u4F53\u3092\u5FB9\u5E95\u7684\u306B\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);