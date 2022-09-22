"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2182],{

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

/***/ 18270:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "06-flash-external-addressable",
  title: "6. \u5916\u90E8Flash\uFF08\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09",
  sidebar_label: "6. \u5916\u90E8Flash\uFF08\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/06-flash-external-addressable",
  "id": "development/board-bring-up/how-to/06-flash-external-addressable",
  "title": "6. \u5916\u90E8Flash\uFF08\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/06-flash-external-addressable.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/06-flash-external-addressable",
  "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/06-flash-external-addressable",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 6,
  "frontMatter": {
    "id": "06-flash-external-addressable",
    "title": "6. \u5916\u90E8Flash\uFF08\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09",
    "sidebar_label": "6. \u5916\u90E8Flash\uFF08\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "5. \u5916\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/05-display-external"
  },
  "next": {
    "title": "7. \u5916\u90E8Flash\uFF08\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"
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
  value: "\u30D6\u30ED\u30C3\u30AF\uFF65\u30E2\u30FC\u30C9",
  id: "block-mode",
  level: 3
}, {
  value: "\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9",
  id: "memory-mapped-mode",
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
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u5916\u90E8\u306EQuad SPI\u307E\u305F\u306FOctal SPI Flash\u3092\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u3067\u6709\u52B9\u5316\u3057\u307E\u3059\u3002 \u5927\u5BB9\u91CF\u306E\u753B\u50CF\u3092\u591A\u6570\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u304B\u3089\u3001\u307B\u3068\u3093\u3069\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5916\u90E8Flash\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 \u4E2D\u7A0B\u5EA6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3082\u3001\u5185\u8535Flash\u306F\u3059\u3050\u306B\u3044\u3063\u3071\u3044\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u306B\u5916\u90E8Flash\u304C\u95A2\u4FC2\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30FC\u30BF\u3092\u5916\u90E8Flash\u306B\u914D\u7F6E\u3059\u308B\u5834\u5408\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u5916\u90E8Flash\u3092\u8AAD\u307F\u51FA\u305B\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u6700\u9069\u6027\u80FD\u3092\u5F97\u308B\u305F\u3081\u306B\u3001\u5916\u90E8Flash\u306F\u76EE\u7684\u306E\u901F\u5EA6(\u901A\u5E38\u306F\u6700\u5927) \u3067\u52D5\u4F5C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u76EE\u6A19\u306F\u3001\u5916\u90E8Flash\u3092\u6709\u52B9\u5316\u3057\u3066\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u306B\u5909\u66F4\u3057\u3001\u305D\u3053\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u51FA\u3059\u3053\u3068\u3067\u3059\u3002 \u5916\u90E8Flash\u306E\u8AAD\u51FA\u3057\u901F\u5EA6\u306F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u306B\u3068\u3063\u3066\u6975\u3081\u3066\u91CD\u8981\u3067\u3042\u308B\u305F\u3081\u3001\u8AAD\u51FA\u3057\u901F\u5EA6\u306E\u30C6\u30B9\u30C8\u3082\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\u5916\u90E8Flash\u3092\u8AAD\u307F\u51FA\u305B\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u753B\u50CF\u306E\u683C\u7D0D\u306B\u5916\u90E8Flash\u3092\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash\u306E\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u6027\u80FD\u306F\u3001\u753B\u50CF\u30E1\u30E2\u30EA\u306E\u6027\u80FD\u306B\u5927\u304D\u304F\u4F9D\u5B58\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u524D\u63D0\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u524D\u63D0\u6761\u4EF6\u3092\u793A\u3057\u307E\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash\u306B\u95A2\u3059\u308B\u60C5\u5831(\u901A\u5E38\u306F\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u5916\u90E8Flash\u306E\u63A5\u7D9A\u306B\u95A2\u3059\u308B\u60C5\u5831`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u4F5C\u696D\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `QSPI\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001STM32CubeMX\u306E\uFF3BConnectivity\uFF3D>\uFF3BQUADSPI\uFF3D\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/qspi/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "QSPI Flash\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E2\u30FC\u30C9\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001Flash\u306E\u30C7\u30FC\u30BF\uFF65\u30E9\u30A4\u30F3\u3092\u30B7\u30F3\u30B0\u30EB / \u30C7\u30E5\u30A2\u30EB / \u30AF\u30EF\u30C3\u30C9\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u30AF\u30EF\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u304C\u6700\u901F\u3067\u3059\u3002 \u5916\u90E8RAM\u3068\u540C\u69D8\u306B\u3001\u3053\u3053\u3067\u306F\u30C7\u30FC\u30BF\uFF65\u30E9\u30A4\u30F3\u3001\u30C1\u30C3\u30D7\uFF65\u30BB\u30EC\u30AF\u30C8\u3001\u30AF\u30ED\u30C3\u30AF\u4FE1\u53F7\u306B\u4F7F\u7528\u3059\u308BGPIO\u3092\u9078\u629E\u304A\u3088\u3073\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "block-mode"
  }), `\u30D6\u30ED\u30C3\u30AF\uFF65\u30E2\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u3092\u6709\u52B9\u5316\u3057\u305F\u3089\u3001\u3053\u3053\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u51FA\u3057\u3066\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002 STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u306F\u3001\u305D\u306E\u305F\u3081\u306E\u30B5\u30F3\u30D7\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-mapped-mode"
  }), `\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u3092\u6709\u52B9\u5316\u3057\u3066\u30D6\u30ED\u30C3\u30AF\uFF65\u30E2\u30FC\u30C9\u3067\u30C6\u30B9\u30C8\u3057\u305F\u3089\u3001\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u3063\u3066\u3001CPU\u306FFlash\u304B\u3089\u76F4\u63A5\u30C7\u30FC\u30BF\u3092\u30D5\u30A7\u30C3\u30C1\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32Cube HAL\u306B\u306F\u3001\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u306B\u5909\u66F4\u3059\u308B\u305F\u3081\u306E\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u3002 \u4EE5\u4E0B\u306B\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002 \u8A2D\u5B9A\u30C7\u30FC\u30BF\u306B\u3064\u3044\u3066\u306F\u3001\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3067\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4F7F\u7528\u3059\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u5BFE\u5FDC\u3059\u308BSTM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u306F\u3001\u305D\u306E\u4ED6\u306E\u30B5\u30F3\u30D7\u30EB\u3082\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `QSPI_CommandTypeDef      s_command;
QSPI_MemoryMappedTypeDef s_mem_mapped_cfg;

/* Configure the command for the read instruction */
s_command.InstructionMode   = QSPI_INSTRUCTION_1_LINE;
s_command.Instruction       = QUAD_INOUT_FAST_READ_CMD;
s_command.AddressMode       = QSPI_ADDRESS_4_LINES;
s_command.AddressSize       = QSPI_ADDRESS_24_BITS;
s_command.AlternateByteMode = QSPI_ALTERNATE_BYTES_NONE;
s_command.DataMode          = QSPI_DATA_4_LINES;
s_command.DummyCycles       = N25Q128A_DUMMY_CYCLES_READ_QUAD;
s_command.DdrMode           = QSPI_DDR_MODE_DISABLE;
s_command.DdrHoldHalfCycle  = QSPI_DDR_HHC_ANALOG_DELAY;
s_command.SIOOMode          = QSPI_SIOO_INST_EVERY_CMD;

/* Configure the memory mapped mode */
s_mem_mapped_cfg.TimeOutActivation = QSPI_TIMEOUT_COUNTER_DISABLE;

if (HAL_QSPI_MemoryMapped(&QSPIHandle, &s_command, &s_mem_mapped_cfg) != HAL_OK)
{
  return QSPI_ERROR;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3068\u540C\u3058Flash\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u308C\u3089\u306E\u30DC\u30FC\u30C9\uFF08\u304A\u3088\u3073STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\uFF09\u306EBSP\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u306F\u3001\u3054\u81EA\u8EAB\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u5408\u308F\u305B\u3066\u5909\u66F4\u53EF\u80FD\u306A\u8CB4\u91CD\u306A\u30B5\u30F3\u30D7\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash\u3092\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u5916\u90E8RAM\u3067\u4F7F\u7528\u3057\u305F\u3082\u306E\u3068\u540C\u69D8\u306E\u30B3\u30FC\u30C9\u3067\u3053\u308C\u3092\u30C6\u30B9\u30C8\u3067\u304D\u307E\u3059(\u30A2\u30C9\u30EC\u30B9\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `volatile uint32_t *externalFlash = 0x90000000;
const uint32_t size = 1000;
volatile uint32_t result = 0;

//read external Flash
for(int i = 0; i < size; i++)
{
    result += externalFlash[i];
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u884C\u3063\u305F\u30E1\u30E2\u30EA\u6027\u80FD\u30C6\u30B9\u30C8\u3092\u518D\u5229\u7528\u3057\u3066\u3001\u5916\u90E8Flash\u306E\u6027\u80FD\u3082\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);