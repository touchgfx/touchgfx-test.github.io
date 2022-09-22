"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7275],{

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

/***/ 64575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/PresentationTable.js

class PresentationTable extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Description"), /* @__PURE__ */ react.createElement("td", null, this.props.description)), /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Target Audience"), /* @__PURE__ */ react.createElement("td", null, this.props.level)), /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Duration"), /* @__PURE__ */ react.createElement("td", null, this.props.duration)), /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Links"), /* @__PURE__ */ react.createElement("td", null, this.props.links))));
  }
}
/* harmony default export */ var components_PresentationTable = (PresentationTable);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/resources/presentations.mdx
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
  id: "presentations",
  title: "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "resources/presentations",
  "id": "resources/presentations",
  "title": "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/resources/presentations.mdx",
  "sourceDirName": "resources",
  "slug": "/resources/presentations",
  "permalink": "/4.20/ja/docs/resources/presentations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "presentations",
    "title": "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Resources",
    "permalink": "/4.20/ja/docs/category/resources"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3",
  id: "touchgfx-presentations",
  level: 2
}, {
  value: "TouchGFX\u306E\u6982\u8981",
  id: "touchgfx-introduction",
  level: 3
}, {
  value: "TouchGFX\u306E\u6280\u8853\u7684\u6982\u8981",
  id: "touchgfx-technical-introduction",
  level: 3
}, {
  value: "\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9 - \u57FA\u672C\u6982\u5FF5",
  id: "embedded-graphics---basic-concepts",
  level: 3
}, {
  value: "\u8A55\u4FA1\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052 - \u6982\u8981",
  id: "board-bring-up---introduction",
  level: 3
}, {
  value: "Abstraction Layer\u306E\u958B\u767A - \u6982\u8981",
  id: "abstraction-layer-development---introduction",
  level: 3
}, {
  value: "Abstraction Layer\u306E\u958B\u767A - \u9AD8\u5EA6\u306A\u30C8\u30D4\u30C3\u30AF",
  id: "abstraction-layer-development---advanced-topics",
  level: 3
}, {
  value: "UI\u306E\u958B\u767A - \u57FA\u672C\u4E8B\u9805",
  id: "ui-development---fundamentals",
  level: 3
}, {
  value: "UI\u306E\u958B\u767A - \u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528",
  id: "ui-development---using-texts-and-fonts",
  level: 3
}, {
  value: "UI\u306E\u958B\u767A - \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1",
  id: "ui-development---backend-communication",
  level: 3
}, {
  value: "TouchGFX\u30CF\u30F3\u30BA\u30AA\u30F3\uFF65\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7",
  id: "touchgfx-hands-on-workshops",
  level: 2
}, {
  value: "UI\u306E\u958B\u767A - \u306F\u3058\u3081\u306B",
  id: "ui-development---getting-started",
  level: 3
}, {
  value: "UI\u306E\u958B\u767A - \u57FA\u672C\u4E8B\u9805 - \u30CF\u30F3\u30BA\u30AA\u30F3",
  id: "ui-development---fundamentals---hands-on",
  level: 3
}, {
  value: "Abstraction Layer\u306E\u958B\u767A - \u6982\u8981 - \u30CF\u30F3\u30BA\u30AA\u30F3",
  id: "abstraction-layer-development---introduction---hands-on",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C7\u30E2\u3001\u30BB\u30DF\u30CA\u30FC\u3001\u30A6\u30A7\u30D3\u30CA\u30FC\u3001\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u3067\u4F7F\u7528\u3059\u308B\u5E83\u7BC4\u56F2\u306ETouchGFX\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002 \u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u76F4\u63A5\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3001\u30E6\u30FC\u30B6\u72EC\u81EA\u306ETouchGFX\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306E\u30D2\u30F3\u30C8\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3001\u5358\u7D14\u306B\u7279\u5B9A\u306E\u30C8\u30D4\u30C3\u30AF\u306E\u60C5\u5831\u30BD\u30FC\u30B9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX\u306E\u30C7\u30E2\u3084\u30BB\u30DF\u30CA\u30FC\u306E\u30C8\u30D4\u30C3\u30AF\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u3001\u4E00\u9023\u306E\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u30E6\u30FC\u30B6\u304C\u81EA\u7531\u306B\u7D44\u307F\u7ACB\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3059\u3079\u3066\u306E\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306B\u3001\u95A2\u9023\u3059\u308B\u8A18\u4E8B\u304A\u3088\u3073\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\uFF65\u30B5\u30A4\u30C8\u306E\u7AE0\u3084\u30BB\u30AF\u30B7\u30E7\u30F3\u3078\u306E\u53C2\u7167\u304C\u4ED8\u968F\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u30B9\u30E9\u30A4\u30C9\u5F62\u5F0F\u306EPDF\u3001\u304A\u3088\u3073\u300C\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8\u300D\u30D0\u30FC\u30B8\u30E7\u30F3\u3068\u3057\u3066\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002\u5F8C\u8005\u3067\u306F\u3001\u30B9\u30D4\u30FC\u30AB\u5411\u3051\u306E\u8FFD\u52A0\u306E\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u60C5\u5831\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u73FE\u6642\u70B9\u3067\u306F\u3059\u3079\u3066\u306E\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u5229\u7528\u3067\u304D\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u6E96\u5099\u304C\u3067\u304D\u6B21\u7B2C\u3001\u5229\u7528\u53EF\u80FD\u306B\u306A\u308B\u4E88\u5B9A\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5C06\u6765\u7684\u306B\u306F\u3001\u307B\u3068\u3093\u3069\u306E\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306B\u3001\u30B9\u30E9\u30A4\u30C9\u3092\u4F7F\u7528\u3057\u305F\u30C8\u30D4\u30C3\u30AF\u306E\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u793A\u3059\u30D3\u30C7\u30AA\u304C\u6DFB\u4ED8\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "touchgfx-presentations"
  }), `TouchGFX\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,esm/* mdx */.kt)("div", {
    class: "table-with-anchor-header presentation-table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "touchgfx-introduction"
  }), `TouchGFX\u306E\u6982\u8981`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX\u306B\u95A2\u3059\u308B\u4E00\u822C\u7684\u306A\u3001\u6280\u8853\u7684\u3067\u306F\u306A\u3044\u7C21\u6F54\u306A\u6982\u8981\u3002",
    level: "\u521D\u7D1A - \u5168\u54E1",
    duration: "15\u5206",
    links: "\u307E\u3060\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "touchgfx-technical-introduction"
  }), `TouchGFX\u306E\u6280\u8853\u7684\u6982\u8981`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX\u306E\u958B\u767A\u3092\u884C\u3046\u305F\u3081\u306E\u7C21\u6F54\u306A\u6280\u8853\u7684\u6982\u8981\u3002 \u5FC5\u8981\u306A\u30C4\u30FC\u30EB\u3092\u53D6\u308A\u4E0A\u3052\u3001\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002",
    level: "\u521D\u7D1A - TouchGFX\u306E\u3059\u3079\u3066\u306E\u958B\u767A\u8005",
    duration: "14\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-speakers-note.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rYqeppW46iU",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube\u3067\u8996\u8074\u53EF\u80FD\u306A\u30D3\u30C7\u30AA"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "embedded-graphics---basic-concepts"
  }), `\u7D44\u8FBC\u307F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9 - \u57FA\u672C\u6982\u5FF5`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\u7D44\u8FBC\u307F\u30C7\u30D0\u30A4\u30B9\u4E0A\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306E\u4E3B\u8981\u6982\u5FF5\u306B\u95A2\u3059\u308B\u4E00\u822C\u7684\u306A\u6982\u8981\u3002 TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u767A\u3092\u884C\u3046\u305F\u3081\u306E\u9069\u5207\u306A\u80CC\u666F\u77E5\u8B58\u3002",
    level: "\u521D\u7D1A - TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005",
    duration: "55\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rBaV4hk4-M4",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube\u3067\u8996\u8074\u53EF\u80FD\u306A\u30D3\u30C7\u30AA"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "board-bring-up---introduction"
  }), `\u8A55\u4FA1\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052 - \u6982\u8981`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8A55\u4FA1\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u3092\u884C\u3046\u3068\u304D\u306B\u3001\u53D6\u308A\u7D44\u3080\u5FC5\u8981\u304C\u3042\u308B\u4E3B\u306A\u30C8\u30D4\u30C3\u30AF\u306B\u3064\u3044\u3066\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002",
    level: "\u521D\u7D1A - \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A4\u30F3\u30C6\u30B0\u30EC\u30FC\u30BF",
    duration: "55\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://youtu.be/KVRtVtVUZoc",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube\u3067\u8996\u8074\u53EF\u80FD\u306A\u30D3\u30C7\u30AA"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---introduction"
  }), `Abstraction Layer\u306E\u958B\u767A - \u6982\u8981`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX Abstraction Layer\u306E\u958B\u767A\u30D7\u30ED\u30BB\u30B9\u306E\u6982\u8981\u3002 Abstraction Layer\u306E\u4E3B\u306A\u5F79\u5272\u3068TouchGFX Generator\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002",
    level: "\u521D\u7D1A - TouchGFX AL\u306E\u958B\u767A\u8005",
    duration: "12\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://youtu.be/zs7YCP8oqXo",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube\u3067\u8996\u8074\u53EF\u80FD\u306A\u30D3\u30C7\u30AA"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---advanced-topics"
  }), `Abstraction Layer\u306E\u958B\u767A - \u9AD8\u5EA6\u306A\u30C8\u30D4\u30C3\u30AF`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX Abstraction Layer\u306E\u958B\u767A\u306B\u95A2\u3059\u308B\u9AD8\u5EA6\u306A\u30C8\u30D4\u30C3\u30AF\u3092\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002 TouchGFX AL\uFF08TouchGFX Generator\u306B\u3088\u3063\u3066\u751F\u6210\uFF09\u3068CubeMX\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A2D\u5B9A\u3092\u7D71\u5408\u3059\u308B\u65B9\u6CD5\u3001\u30E6\u30FC\u30B6\u72EC\u81EA\u306EBSP\u3092\u8FFD\u52A0\u3059\u308B\u65B9\u6CD5\u3001TouchGFX\u3092\u624B\u52D5\u3067\u8A2D\u5B9A\u3057\u3001CubeMX\u3067\u306F\u8A2D\u5B9A\u3067\u304D\u306A\u3044\u30B7\u30CA\u30EA\u30AA\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002",
    level: "\u4E2D\u7D1A - TouchGFX AL\u306E\u958B\u767A\u8005",
    duration: "60\u5206",
    links: "\u307E\u3060\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---fundamentals"
  }), `UI\u306E\u958B\u767A - \u57FA\u672C\u4E8B\u9805`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "UI\u306E\u958B\u767A\u306B\u4E0D\u53EF\u6B20\u306A\u4E3B\u8981\u306ATouchGFX\u30C8\u30D4\u30C3\u30AF\u306E\u6982\u8981\u3002 UI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3001\u958B\u767A\u6642\u306ETouchGFX Designer\u3068\u306E\u9023\u643A\u65B9\u6CD5\u3001PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4F7F\u7528\u3001\u6B63\u78BA\u3067\u52B9\u7387\u7684\u306A\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u8A18\u8FF0\u3068\u3044\u3063\u305F\u30C8\u30D4\u30C3\u30AF\u3092\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002",
    level: "\u4E2D\u7D1A - TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005",
    duration: "60\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rKAIu2zSHU0",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube\u3067\u8996\u8074\u53EF\u80FD\u306A\u30D3\u30C7\u30AA"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---using-texts-and-fonts"
  }), `UI\u306E\u958B\u767A - \u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B\u958B\u767A\u8005\u304C\u906D\u9047\u3059\u308B\u4E8B\u9805\u306E\u8A73\u7D30\u3092\u3059\u3079\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002",
    level: "\u4E2D\u7D1A - TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005",
    duration: "60\u5206",
    links: "\u307E\u3060\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---backend-communication"
  }), `UI\u306E\u958B\u767A - \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\u30B7\u30B9\u30C6\u30E0\u306E\u975EGUI\u90E8\u5206\u3068\u3084\u308A\u53D6\u308A\u3059\u308B\u305F\u3081\u306B\u63A8\u5968\u3055\u308C\u308B\u65B9\u6CD5\u3092\u8AAC\u660E\u3057\u3001\u305D\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002",
    level: "\u4E2D\u7D1A - TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005",
    duration: "60\u5206",
    links: "\u307E\u3060\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
    mdxType: "PresentationTable"
  })), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "touchgfx-hands-on-workshops"
  }), `TouchGFX\u30CF\u30F3\u30BA\u30AA\u30F3\uFF65\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7`), /* @__PURE__ */ (0,esm/* mdx */.kt)("div", {
    class: "table-with-anchor-header presentation-table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---getting-started"
  }), `UI\u306E\u958B\u767A - \u306F\u3058\u3081\u306B`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306E\u6982\u8981\u3002 \u30C4\u30FC\u30EB\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u3068\u5909\u66F4\u3092\u521D\u3081\u3066\u884C\u3044\u307E\u3059\u3002",
    level: "\u521D\u7D1A - TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005",
    duration: "60\u5206\uFF5E90\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-ui-development-getting-started.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-ui-development-getting-started-speakers-note.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30B9\u30D4\u30FC\u30AB\uFF65\u30CE\u30FC\u30C8"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---fundamentals---hands-on"
  }), `UI\u306E\u958B\u767A - \u57FA\u672C\u4E8B\u9805 - \u30CF\u30F3\u30BA\u30AA\u30F3`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\u30E6\u30FC\u30B6\u5165\u529B\u3078\u306E\u53CD\u5FDC\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5909\u66F4\u3001\u30C7\u30FC\u30BF\u306E\u4FDD\u6301\u3068\u5FA9\u5143\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u3001\u52B9\u7387\u7684\u306A\u958B\u767A\u306E\u305F\u3081\u306E\u30D2\u30F3\u30C8\u3068\u30B3\u30C4\u306A\u3069\u3001UI\u958B\u767A\u306E\u57FA\u672C\u4E8B\u9805\u306B\u3064\u3044\u3066\u53D6\u308A\u4E0A\u3052\u307E\u3059\u3002",
    level: "\u4E2D\u7D1A - TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005",
    duration: "2\u6642\u9593",
    links: "\u307E\u3060\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---introduction---hands-on"
  }), `Abstraction Layer\u306E\u958B\u767A - \u6982\u8981 - \u30CF\u30F3\u30BA\u30AA\u30F3`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX Generator\u3068STM32CubeIDE\u3092\u4F7F\u7528\u3057\u305F\u3001STM32H7B3I-DK\u30DC\u30FC\u30C9\u5411\u3051\u306ETouchGFX AL\u958B\u767A\u306E\u6982\u8981\u3002",
    level: "\u521D\u7D1A - TouchGFX AL\u306E\u958B\u767A\u8005",
    duration: "90\u5206",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-al-development-hands-on.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")),
    mdxType: "PresentationTable"
  })));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);