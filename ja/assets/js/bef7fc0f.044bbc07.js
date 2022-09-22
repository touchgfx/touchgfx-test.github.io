"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8782],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


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

/***/ 24098:
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
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31217);
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
  id: "canvas-widgets",
  title: "Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/canvas-widgets",
  "id": "development/ui-development/touchgfx-engine-features/canvas-widgets",
  "title": "Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/canvas-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/canvas-widgets",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/canvas-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-widgets",
    "title": "Canvas Widget\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/custom-widgets"
  },
  "next": {
    "title": "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  }
};
const assets = {};



const toc = [{
  value: "Using Canvas Widgets",
  id: "using-canvaswidgets",
  level: 2
}, {
  value: "\u30E1\u30E2\u30EA\u5272\u5F53\u3066\u3068\u4F7F\u7528\u91CF",
  id: "memory-allocation-and-usage",
  level: 2
}, {
  value: "TouchGFX Designer\u3067\u306E\u30E1\u30E2\u30EA\u5272\u5F53\u3066",
  id: "memory-allocation-in-touchgfx-designer",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30E1\u30E2\u30EA\u5272\u5F53\u3066",
  id: "memory-allocation-in-user-code",
  level: 3
}, {
  value: "CWR\u306E\u5EA7\u6A19\u7CFB",
  id: "the-cwr-coordinate-system",
  level: 2
}, {
  value: "\u30AB\u30B9\u30BF\u30E0Canvas Widget",
  id: "custom-canvas-widgets",
  level: 2
}, {
  value: "Painter\uFF08\u30DA\u30A4\u30F3\u30BF\uFF09",
  id: "painters-painters",
  level: 2
}, {
  value: "Painter classes",
  id: "painters-classes",
  level: 3
}, {
  value: "Tiled bitmaps",
  id: "painters-tiled",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0Painter",
  id: "custom-painters",
  level: 2
}, {
  value: "Color painters",
  id: "painters-color",
  level: 3
}, {
  value: "Changing the framebuffer",
  id: "painters-framebuffer",
  level: 3
}, {
  value: "Custom Containers on rotated displays",
  id: "painters-custom",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget\u3068Canvas Widget Renderer\u306F\u3001\u5F37\u529B\u3067\u7528\u9014\u306E\u5E83\u3044TouchGFX\u306E\u30A2\u30C9\u30AA\u30F3\u3067\u3001\u76F8\u5BFE\u7684\u306B\u5C11\u306A\u3044\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u3067\u9AD8\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u7DAD\u6301\u3057\u306A\u304C\u3089\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u306B\u5BFE\u3057\u3066\u975E\u5E38\u306B\u6ED1\u3089\u304B\u3067\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B9\u3055\u308C\u305F\u63CF\u753B\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u306E\u63CF\u753B\u306F\u6975\u3081\u3066\u8CA0\u8377\u306E\u9AD8\u3044\u64CD\u4F5C\u3067\u3059\u306E\u3067\u3001\u6CE8\u610F\u3057\u3066\u4F7F\u7528\u3057\u306A\u3044\u3068\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30EA\u30BD\u30FC\u30B9\u304C\u7C21\u5358\u306B\u3072\u3063\u8FEB\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget Renderer\uFF08\u4EE5\u4E0B\u3001CWR\uFF09\u306F\u4E00\u822C\u7684\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AFAPI\u3067\u3001\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u306A\u6700\u9069\u5316\u3055\u308C\u305F\u63CF\u753B\u3092\u5B9F\u73FE\u3057\u3001\u307B\u3068\u3093\u3069\u306E\u4E0D\u8981\u306A\u63CF\u753B\u3092\u81EA\u52D5\u7684\u306B\u9664\u53BB\u3057\u3066\u304F\u308C\u307E\u3059\u3002 TouchGFX\u306F\u3001\u8907\u96D1\u306A\u5E7E\u4F55\u5B66\u5F62\u72B6\u306E\u63CF\u753B\u306BCWR\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u5E7E\u4F55\u5B66\u5F62\u72B6\u306FCanvas Widget\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 TouchGFX\u306B\u306F\u591A\u304F\u306ECanvas Widget\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u901A\u5E38\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u540C\u69D8\u306B\u3001\u30E6\u30FC\u30B6\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u72EC\u81EA\u306E\u30AB\u30B9\u30BF\u30E0Canvas Widget\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 CWR\u304C\u63CF\u753B\u3059\u308B\u56F3\u306E\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092Canvas Widget\u304C\u5B9A\u7FA9\u3059\u308B\u3068\u304D\u3001\u56F3\u306E\u4E2D\u306E\u5404\u30D4\u30AF\u30BB\u30EB\u306E\u5B9F\u969B\u306E\u8272\u304C\u3001\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305FPainter\u30AF\u30E9\u30B9\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3082\u3001TouchGFX\u306B\u306F\u591A\u6570\u306EPainter\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u30E6\u30FC\u30B6\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u72EC\u81EA\u306E\u30AB\u30B9\u30BF\u30E0Painter\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-canvaswidgets"
  }), `Using Canvas Widgets`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u3042\u308B\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u30B5\u30A4\u30BA\u304C\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u542B\u307E\u308C\u3066\u3044\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5E45\u3068\u9AD8\u3055\u3092\u81EA\u52D5\u7684\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u4E0A\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setXY()`), `\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u753B\u9762\u4E0A\u306B\u914D\u7F6E\u3059\u308B\u3060\u3051\u3067\u5341\u5206\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget\u306B\u306F\u3001\u81EA\u52D5\u7684\u306B\u6C7A\u3081\u3089\u308C\u521D\u671F\u8A2D\u5B9A\u3055\u308C\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\uFF65\u30B5\u30A4\u30BA\u304C\u3042\u308A\u307E\u305B\u3093\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u914D\u7F6E\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u6B63\u3057\u304F\u30B5\u30A4\u30BA\u8A2D\u5B9A\u3059\u308B\u3088\u3046\u306B\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u3068\u3001Canvas Widget\u306E\u5E45\u3068\u9AD8\u3055\u306F\u30BC\u30ED\u306B\u306A\u308A\u3001\u753B\u9762\u4E0A\u306B\u4F55\u3082\u63CF\u753B\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setXY()`), `\u3092\u4F7F\u7528\u3059\u308B\u4EE3\u308F\u308A\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setPosition()`), `\u3092\u4F7F\u7528\u3057\u3066Canvas Widget\u306E\u914D\u7F6E\u3068\u30B5\u30A4\u30BA\u8A2D\u5B9A\u3092\u884C\u3044\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0Canvas Widget\u3092\u4F5C\u6210\u3057\u3066\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u4E0B\u306B\u3042\u308B\u4F8B\u300C\u30AB\u30B9\u30BF\u30E0Canvas Widget\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget\u306E\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3057\u305F\u5F8C\u306F\u3001\u305D\u306E\u4E2D\u306B\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092\u63CF\u753B\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF08\u753B\u9762\u3067\u306F\u306A\u3044\uFF09\u306E\u5DE6\u4E0A\u9685\u306E\u5EA7\u6A19\u304C(0, 0)\u306B\u306A\u308A\u3001X\u8EF8\u306F\u53F3\u65B9\u5411\u306B\u3001Y\u8EF8\u306F\u4E0B\u65B9\u5411\u306B\u4F38\u3073\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget\u306FTouchGFX Designer\u3067\u3082\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3001\u4F7F\u3044\u52DD\u624B\u304C\u3088\u304F\u306A\u308A\u3001\u30E1\u30E2\u30EA\u306E\u8A08\u7B97\u3084\u30E1\u30E2\u30EA\u306E\u5272\u308A\u5F53\u3066\u304C\u81EA\u52D5\u7684\u306B\u884C\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Available Canvas Widgets in the TouchGFX Designer:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/line"
  }), `Line\uFF08\u30E9\u30A4\u30F3\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/circle"
  }), `Circle\uFF08\u30B5\u30FC\u30AF\u30EB\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/shape"
  }), `Shape\uFF08\u30B7\u30A7\u30FC\u30D7\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/progress-indicators/line-progress"
  }), `Line Progress\uFF08\u30E9\u30A4\u30F3\uFF65\u30D7\u30ED\u30B0\u30EC\u30B9\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/progress-indicators/circle-progress"
  }), `Circle Progress`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u3053\u308C\u3089\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u5B9F\u884C\u6642\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u898B\u3048\u65B9\u304C\u793A\u3055\u308C\u308B\u306E\u3067\u3001\u914D\u7F6E\u3084\u30B5\u30A4\u30BA\u8ABF\u6574\u304C\u306F\u308B\u304B\u306B\u5BB9\u6613\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-allocation-and-usage"
  }), `\u30E1\u30E2\u30EA\u5272\u5F53\u3066\u3068\u4F7F\u7528\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3046\u307E\u304F\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B9\u3055\u308C\u305F\u8907\u96D1\u306A\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092\u751F\u6210\u3059\u308B\u306B\u306F\u3001\u8FFD\u52A0\u306E\u30E1\u30E2\u30EA\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u306E\u305F\u3081CWR\u306B\u306F\u3001\u63CF\u753B\u6642\u306B\u4F7F\u7528\u3055\u308C\u308B\u7279\u5225\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u3067\u3059\u3002 TouchGFX\u306E\u305D\u306E\u4ED6\u306E\u90E8\u5206\u3068\u540C\u69D8\u306B\u3001CWR\u3067\u306F\u52D5\u7684\u306A\u30E1\u30E2\u30EA\u5272\u308A\u5F53\u3066\u306F\u884C\u308F\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-allocation-in-touchgfx-designer"
  }), `TouchGFX Designer\u3067\u306E\u30E1\u30E2\u30EA\u5272\u5F53\u3066`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u304C\u81EA\u52D5\u7684\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5E45\u306B\u57FA\u3065\u304D\u3001\uFF08\u5E45 `, `\xD7`, ` 3\uFF09`, `\xD7`, ` 5\u3068\u3044\u3046\u5F0F\u3092\u4F7F\u7528\u3057\u3066\u6C7A\u3081\u3089\u308C\u307E\u3059\u3002 \u305F\u3060\u3057\u3053\u308C\u306F\u3001\u3059\u3079\u3066\u306E\u30B7\u30CA\u30EA\u30AA\u306B\u5BFE\u3057\u3066\u5E38\u306B\u6700\u9069\u306A\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001\u4E0B\u8A18\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/screen-canvas-buffer-override-4.17.png",
    mdxType: "Figure"
  }, "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3055\u308C\u308B\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-allocation-in-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30E1\u30E2\u30EA\u5272\u5F53\u3066`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The TouchGFX Designer only allocates a memory buffer for screens that uses Canvas Widgets in the Designer. If you add Canvas Widgets in user code in a screen that does not have Canvas Widgets in the Designer you must manually setup a buffer. It is recommended to do this in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen::setupScreen`), ` method.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Add this to your Screen class definition as private members:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `private:
  static const uint16_t CANVAS_BUFFER_SIZE = 3600;
  static uint8_t canvasBuffer[CANVAS_BUFFER_SIZE]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Then in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` method of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ScreenView.cpp`), ` the following line setting up the buffer can be added.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenView::setupScreen()
{
    ...
    CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CWR\u306E\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u91CF\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u63CF\u753B\u3059\u308B\u5F62\u72B6\u306E\u6700\u5927\u30B5\u30A4\u30BA\u306B\u5FDC\u3058\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u6700\u3082\u8907\u96D1\u306A\u5F62\u72B6\u304C\u5FC5\u8981\u3068\u3059\u308B\u30E1\u30E2\u30EA\u91CF\u3088\u308A\u5C11\u306A\u304F\u6291\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u72B6\u6CC1\u306B\u5BFE\u51E6\u3059\u308B\u305F\u3081\u3001CWR\u306F\u5F62\u72B6\u306E\u63CF\u753B\u3092\u5C0F\u3055\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D1\u30FC\u30C4\u306B\u5206\u5272\u3057\u307E\u3059\u3002\u3053\u306E\u7D50\u679C\u3001\u63CF\u753B\u6642\u9593\u306F\u5C11\u3057\u9577\u304F\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u3068\u304D\u306B\u306F\u5F62\u72B6\u3092\u63CF\u753B\u3059\u308B\u306E\u306B1\u56DE\u3067\u306F\u3059\u307E\u306A\u3044\u3053\u3068\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002 \u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3059\u308B\u3068\u3001\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u3092\u7DBF\u5BC6\u306B\u8ABF\u3079\u3066\u5FAE\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 main.cpp\u306B\u6B21\u306E\u95A2\u6570\u547C\u3073\u51FA\u3057\u3092\u8FFD\u52A0\u3059\u308B\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `CanvasWidgetRenderer::setWriteMemoryUsageReport(true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001\u63CF\u753B\u64CD\u4F5C\u304C\u7D42\u4E86\u3059\u308B\u305F\u3073\u306B\u3001\u5FC5\u8981\u3068\u3055\u308C\u305F\u30E1\u30E2\u30EA\u91CF\u3092CWR\u304C\u30EC\u30DD\u30FC\u30C8\uFF08\u30B3\u30F3\u30BD\u30FC\u30EB\u3067\u51FA\u529B\uFF09\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 canvas_widget_example\u306E\u5834\u5408\u306F\u3001\u201CCWR requires 3604 bytes\u201D\uFF08\u6700\u521D\u306E\u63CF\u753B\u64CD\u4F5C\u6642\u306B\uFF09\u306E\u5F8C\u306B\u3001\u201CCWR requires 7932 bytes (4328 bytes missing)\u201D\uFF082\u56DE\u76EE\u306E\u63CF\u753B\u64CD\u4F5C\u6642\u306B\uFF09\u304C\u7D9A\u304F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 CWR\u306E\u30E1\u30E2\u30EA\u91CF\u306F\u5341\u5206\u3067\u306A\u3044\u3088\u3046\u306B\u898B\u3048\u307E\u3059\u304C\uFF08\u3053\u306E\u4F8B\u3067\u306F4328\u30D0\u30A4\u30C8\u6B20\u843D\uFF09\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u6B63\u5E38\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u30011\u56DE\u306E\u5B9F\u884C\u3067\u8907\u96D1\u306A\u63CF\u753B\u64CD\u4F5C\u3092\u5B8C\u4E86\u3059\u308B\u306B\u306F\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u306E\u91CF\u304C\u5C11\u306A\u3059\u304E\u308B\u3053\u3068\u3092CWR\u304C\u691C\u51FA\u3057\u305F\u304B\u3089\u3067\u3059\u3002 \u4EE3\u308F\u308A\u306B\u3001CWR\u306F\u63CF\u753B\u64CD\u4F5C\u30922\u3064\u306E\u5225\u3005\u306E\u63CF\u753B\u64CD\u4F5C\u306B\u5206\u5272\u3059\u308B\u306E\u3067\u3001\u5F62\u72B6\u306E\u63CF\u753B\u306F\u554F\u984C\u306A\u304F\u884C\u308F\u308C\u307E\u3059\u304C\u3001\u63CF\u753B\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u6B63\u3057\u3044\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u306E\u8A2D\u5B9A\u306F\u3001\u30E1\u30E2\u30EA\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\uFF08\u63CF\u753B\u6642\u9593\uFF09\u306E\u9593\u306E\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306A\u306E\u3067\u3059\u3002 \u901A\u5E38\u306E\u9069\u5207\u306A\u958B\u59CB\u5024\u306F3000\u524D\u5F8C\u3067\u3059\u304C\u3001\u4E0A\u8A18\u306E\u6280\u6CD5\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u3082\u3063\u3068\u9069\u3057\u305F\u5024\u3092\u8A2D\u5B9A\u3067\u304D\u308B\u3053\u3068\u304C\u591A\u304F\u306A\u308A\u307E\u3059\u3002 If the shape is too complex and the allocated memory buffer is way too small, part of the shape will not be drawn (some vertical pixel lines will be skipped) and it is possible that nothing is drawn at all. \u3044\u305A\u308C\u306B\u305B\u3088\u63CF\u753B\u6642\u9593\u306F\u975E\u5E38\u306B\u9577\u304F\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3064\u307E\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067CWR\u63CF\u753B\u3092\u6700\u5927\u901F\u5EA6\u3067\u63CF\u753B\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u8981\u6C42\u3055\u308C\u305F\u30E1\u30E2\u30EA\u91CF\u3092\u5272\u308A\u5F53\u3066\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u305F\u3060\u3057\u3001\u63CF\u753B\u6642\u9593\u304C\u9577\u304F\u304B\u304B\u3063\u3066\u3082\u69CB\u308F\u306A\u3044\u5834\u5408\u306F\u3001\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u3092\u6E1B\u3089\u3057\u3066\u3082\u307E\u3063\u305F\u304F\u554F\u984C\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-cwr-coordinate-system"
  }), `CWR\u306E\u5EA7\u6A19\u7CFB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001TouchGFX\u306E\u5EA7\u6A19\u7CFB\u306F\u3001\u753B\u9762\u4E0A\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u914D\u7F6E\u3059\u308B\u305F\u3081\u306E\u30D4\u30AF\u30BB\u30EB\u51E6\u7406\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u305D\u306E\u4ED6\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8981\u7D20\u306F\u3059\u3079\u3066\u5EA7\u6A19\u7CFB\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u3067\u306F(0,0)\u304C\u5DE6\u4E0A\u306E\u30D4\u30AF\u30BB\u30EB\u3067\u3001X\u8EF8\u306F\u53F3\u65B9\u5411\u306B\u3001Y\u8EF8\u306F\u4E0B\u65B9\u5411\u306B\u4F38\u3073\u307E\u3059\u3002 CWR\u3067\u306F\u3001\u6574\u6570\u3092\u4F7F\u7528\u3057\u3066\u30D4\u30AF\u30BB\u30EB\u3092\u5341\u5206\u306B\u51E6\u7406\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u7279\u6B8A\u306A\u30B1\u30FC\u30B9\u3067\u306F\u5341\u5206\u306A\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u304C\u3001\u4E00\u822C\u7684\u306B\u3068\u3066\u3082\u5341\u5206\u3068\u306F\u8A00\u3048\u307E\u305B\u3093\u3002 \u3053\u306E\u4F8B\u3092\u793A\u3059\u305F\u3081\u3001\u7DDA\u5E45\u304C1\u306E\u5186\u306B\u3064\u3044\u3066\u8003\u3048\u3066\u307F\u307E\u3059\u3002\u3053\u306E\u5186\u30925 x 5\u30D4\u30AF\u30BB\u30EB\u306E\u30DC\u30C3\u30AF\u30B9\u5185\u306B\u3074\u3063\u305F\u308A\u3068\u53CE\u3081\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3057\u307E\u3059\u3002 The center of this circle must be at (2.5, 2.5) and the radius must be 2 (the line is drawn .5 out from both sides of the circumference), so fractions are required for the center coordinate. \u540C\u69D8\u306B\u3001\u3053\u306E\u5186\u30926 x 6\u30D4\u30AF\u30BB\u30EB\u306E\u30DC\u30C3\u30AF\u30B9\u5185\u306B\u53CE\u3081\u308B\u5834\u5408\u306B\u306F\u3001\u4E2D\u5FC3\u3092(3, 3)\u306B\u3057\u3066\u534A\u5F84\u30922.5\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u4ECA\u5EA6\u306F\u534A\u5F84\u306B\u5C0F\u6570\u90E8\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u63CF\u753B\u306E\u305F\u3081\u306E\u3053\u306E\u65B0\u3057\u3044\u5EA7\u6A19\u51E6\u7406\u65B9\u6CD5\u306F\u3001(0,0)\u306B\u3042\u308B\u30D4\u30AF\u30BB\u30EB\u306E\u4E2D\u5FC3\u306ECWR\u5EA7\u6A19\u306F(0.5, 0.5)\u306B\u306A\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3066\u3044\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5DE6\u4E0A\u9685\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u542B\u3080\u30DC\u30C3\u30AF\u30B9\u306E\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3\u5EA7\u6A19\u306F\u3001(0,0) -> (1,0) -> (1,1) -> (0,1) -> (0,0)\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/cwr-coordinate-system.png",
    mdxType: "Figure"
  }, "(0,0)\u306B\u3042\u308B\u30D4\u30AF\u30BB\u30EB\u306ECWR\u5EA7\u6A19\u7CFB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u51E6\u7406\u65B9\u6CD5\u306B\u6700\u521D\u306F\u6238\u60D1\u3046\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001\u3059\u3050\u306B\u975E\u5E38\u306B\u81EA\u7136\u306A\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002 \u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5EA7\u6A19\u7CFB\u3067\u30D4\u30AF\u30BB\u30EB\u3092\u51E6\u7406\u3059\u308B\u5834\u6240\u3067\u306F\u3001Canvas Widget\u306E\u540C\u3058\u5EA7\u6A19\u3067\u30D4\u30AF\u30BB\u30EB\u306E\u76F4\u524D\u3068\u4E0A\u306E\u30AE\u30E3\u30C3\u30D7\u3092\u51E6\u7406\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Since circles are shapes that often will have to be moved half a pixel to place the center correctly, the function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Circle::setPixelCenter()`), ` will place the circle center at the center of the given pixel, i.e. half a pixel further to the right and down, compared to the coordinates specified.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-canvas-widgets"
  }), `\u30AB\u30B9\u30BF\u30E0Canvas Widget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0Canvas Widget\u3092\u5B9F\u88C5\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30AF\u30E9\u30B9\u3092\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual bool drawCanvasWidget(const Rect& invalidatedArea) const;
virtual Rect getMinimalRect() const;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `drawCanvasWidget()`), `\u3067\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u63CF\u753B\u3059\u308B\u5FC5\u8981\u306E\u3042\u308B\u3082\u306E\u3059\u3079\u3066\u3092\u63CF\u753B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `getMinimalRect()`), `\u306F\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092\u683C\u7D0D\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5185\u306B\u5B9F\u969B\u306E\u9577\u65B9\u5F62\u3092\u8FD4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "**\u5206\u7BC0\u4E0D\u5099** ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "getMinimalRect()"), " \u3092\u4F7F\u7528\u3059\u308B\u7406\u7531\u306F\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u304C\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5185\u3092\u52D5\u304D\u56DE\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u304B\u3089\u3067\u3059\u3002\u307E\u305F\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u3054\u304F\u308F\u305A\u304B\u306A\u9818\u57DF\u3092\u7121\u52B9\u5316\u3059\u308B\u305F\u3081\u3060\u3051\u306B\u5F62\u72B6\u3092\u5909\u66F4\u3059\u308B\u305F\u3073\u306B\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u5909\u66F4\u3084\u518D\u914D\u7F6E\u3092\u884C\u3046\u306E\u306F\u5B9F\u7528\u7684\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `<InlineCode>getMinimalRect()</InlineCode> \u306E\u30C0\u30DF\u30FC\u5B9F\u88C5\u3067\u306F\u3001\u5358\u7D14\u306B <InlineCode>return rect;</InlineCode>\u3092\u4F7F\u7528\u3059\u308C\u3070\u3088\u3044\u306E\u3067\u3059\u304C\u3001\u8FD4\u3055\u308C\u308B\u306E\u306F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3067\u3059\u3002\u305F\u3060\u3057\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092\u542B\u3080Canvas Widget\u306E\u90E8\u5206\u3060\u3051\u3067\u306A\u304F\u3001Canvas Widget\u306B\u3088\u3063\u3066\u30AB\u30D0\u30FC\u3055\u308C\u308B\u9818\u57DF\u5168\u4F53\u304C\u518D\u63CF\u753B\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u5E7E\u4F55\u5B66\u5F62\u72B6\u306FCanvas Widget\u306E\u307B\u3093\u306E\u4E00\u90E8\u5206\u3057\u304B\u5360\u6709\u3057\u307E\u305B\u3093\u3002
`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Canvas Widget\u306F\u3059\u3079\u3066Canvas\u30AF\u30E9\u30B9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u524D\u8FF0\u306E\u3088\u3046\u306B\u3001Canvas Widget Renderer\u3092\u30AB\u30D7\u30BB\u30EB\u5316\u3059\u308B\u3082\u306E\u3067\u3059\u3002 CWR\u306B\u306F\u591A\u304F\u306E\u6700\u9069\u5316\u304C\u81EA\u52D5\u7684\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u304C\u3001\u7121\u52B9\u5316\u3055\u308C\u305F\u9818\u57DF\u306B\u95A2\u9023\u3059\u308B\u5E7E\u4F55\u5B66\u5F62\u72B6\u3092\u8A8D\u8B58\u3057\u3001\u7121\u52B9\u5316\u9818\u57DF\u5916\u306E\u4E0D\u8981\u306A\u63CF\u753B\u3092\u907F\u3051\u308B\u3053\u3068\u306F\u3001\u5E38\u306B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A\u306E\u305F\u3081\u306E\u65E9\u9053\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `10x10\u306E\u30DC\u30C3\u30AF\u30B9\u5185\u306B\u3001\u3072\u3057\u5F62\u306E\u6B63\u65B9\u5F62\u3092\u5927\u307E\u304B\u306B\u5B9F\u88C5\u3059\u308B\u65B9\u6CD5\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/canvas/CanvasWidget.hpp>
#include <touchgfx/widgets/canvas/Canvas.hpp>

using namespace touchgfx;

class Diamond10x10 : public CanvasWidget
{
public:
  virtual Rect getMinimalRect() const
  {
    return Rect(0,0,10,10);
  }
  virtual bool drawCanvasWidget(const Rect& invalidatedArea) const
  {
    Canvas canvas(this, invalidatedArea);
    canvas.moveTo(5,0);
    canvas.lineTo(10,5);
    canvas.lineTo(5,10);
    canvas.lineTo(0,5);
    return canvas.render(); // Shape is automatically closed
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u518D\u3073\u3001 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "getMinimalRect()"), " \u304C\u6B63\u3057\u3044\u9577\u65B9\u5F62\u3092\u8FD4\u3059\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u3068\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to see the Diamond10x10 on the display, the color must be set up by passing a Painter to the diamond. Read more about Painters in the next section. \u3055\u3089\u306B\u3001Diamond10x10\u3092\u6B63\u3057\u304F\u914D\u7F6E\u3057\u3066\u30B5\u30A4\u30BA\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306F\u6B21\u306E\u3088\u3046\u306A\u8A2D\u5B9A\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u6B21\u306E\u3088\u3046\u306B\u5BA3\u8A00\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Diamond10x10 box;
PainterRGB565 myPainter; // For 16bpp displays
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and in the code you should have something like this in setupScreen():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myPainter.setColor(Color::getColorFromRGB(0xFF, 0x0, 0x0));
box.setPosition(100,100,10,10);
box.setPainter(myPainter);
add(box);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "painters-painters"
  }), `Painter\uFF08\u30DA\u30A4\u30F3\u30BF\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Painter\u306F\u3001Canvas Widget\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5857\u308A\u3064\u3076\u3059\u305F\u3081\u306E\u30AB\u30E9\u30FC\uFF65\u30B9\u30AD\u30FC\u30E0\u3092\u5B9A\u7FA9\u3059\u308B\u3082\u306E\u3067\u3001\u5F62\u72B6\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 Painter\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u306B1\u3064\u306E\u8272\u3092\u63D0\u4F9B\u3057\u305F\u308A\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PainterRGB565`), `\u306A\u3069\uFF09\u3001\u63D0\u4F9B\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304B\u3089\u5404\u30D4\u30AF\u30BB\u30EB\u3092\u30B3\u30D4\u30FC\u3057\u305F\u308A\u3067\u304D\u307E\u3059\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PainterRGB565Bitmap`), `\u306A\u3069\uFF09\u3002 Since a painter writes the pixels directly to the framebuffer, the selected painter must match the format of the framebuffer or dynamic bitmap. TouchGFX\u306B\u306F\u3001\u5857\u308A\u3064\u3076\u3057\u8272\u3001\u307E\u305F\u306F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u63CF\u753B\u306B\u7279\u5316\u3057\u305FPainter\u306A\u3069\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u7528\u306EPainter\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-classes"
  }), `Painter classes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following table lists the available painters in TouchGFX. When you use Canvas Widgets with the TouchGFX Designer, the Designer will select the correct painter, but if you write code yourself that uses Canvas Widgets, you must select a suitable painter.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Framebuffer format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Color Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Bitmap painters`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBWBitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565Bitmap, PainterRGB565L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888Bitmap, PainterRGB888L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888Bitmap, PainterARGB8888L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `XRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888Bitmap, PainterXRGB8888L8Bitmap`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The bitmap painters support various bitmap formats:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Supported bitmap formats`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBWBitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW, BW_RLE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565, RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565 (no transparency), RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-tiled"
  }), `Tiled bitmaps`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Painters that draw pixels from a bitmap puts the bitmap in upper left corner of the Canvas Widget. The pixels of the shape that are outside of the bitmap dimension is not drawn.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The bitmap painters can be configured to repeat the widget (tiled) to cover the whole shape.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tiling is enabled by calling the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setTiled(bool)`), ` method on your painter:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    PainterRGB888Bitmap bitmapPainter;
    ...
    bitmapPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));
    bitmapPainter.setTiled(true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tiling can not be enabled in the Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/tiled-bitmap-painters.png",
    mdxType: "Figure"
  }, "An application showing an Image, Circle with bitmap painter, and Circle with tiling bitmap painter."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-painters"
  }), `\u30AB\u30B9\u30BF\u30E0Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Even though TouchGFX comes with a set of predefined painter classes covering most use case scenarios, custom painters can also be implemented.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this section we will give a few examples, that can be used as inspiration. The examples are for 16bpp RGB565 only. Slight modifications must be done for other framebuffer formats.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A custom painter is just a subclass of the AbstractPainter class. Painters for 16bpp (RGB565) framebuffers can use the AbstractPainterRGB565 class as superclass. Painters for 24bpp (RGB888) framebuffers can use AbstractPainterRGB888 as superclass.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `These super classes are abstract classes. The custom painter class must implement the method:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const = 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `destination`), ` points to the start position in the framebuffer (the left edge of the widget).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `offset`), ` is how many pixels from this start position to put the first pixel.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetY`), ` are the coordinates of the first pixel relative to widget (given in the framebuffer coordinate system).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `count`), ` is the number of pixels to draw with the specified `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alpha`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Canvas Widgets will call this method many times, so it is very important that the implementation of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `paint`), ` is not slow. If the Canvas Widget is not updated often, this is less important.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-color"
  }), `Color painters`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The simplest painter just writes a fixed color to the framebuffer. Here is how to implement that:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class RedPainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset; // Address of first pixel to paint
        const uint16_t* const lineend = framebuffer + count; // Address of last pixel to paint
        const uint16_t redColor565 = 0xF800;  // Full red in RGB565
        do
        {
            *framebuffer = redColor565;
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Remember to create an instance of your painter and assign it to your Canvas widget. Add a member of the painter type to your class:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Circle myCircle;
RedPainter myPainter;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and in the code you should have something like this in setupScreen():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
myCircle.setPainter(myPainter);
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/red-painter.png",
    mdxType: "Figure"
  }, "The RedPainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `RedPainter`), ` class above ignores the alpha parameter. This makes the edges harsh (no alpha-blending) as all pixels are made fully red. We can improve this with a slight code update where we use the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alpha`), ` parameter to do blending if needed:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-20}",
    "{13-20}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class AlphaRedPainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset; // Address of first pixel to paint
        const uint16_t* const lineend = framebuffer + count;
        const uint16_t redColor565 = 0xF800;  // Full red in RGB565
        do
        {
            if (alpha == 0xFF)
            {
                *framebuffer = redColor565; // Write red to framebuffer
            }
            else
            {
                *framebuffer = alphaBlend(redColor565, *framebuffer, alpha); // Blend red with the framebuffer color
            }
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alphaBlend`), ` blends two RGB565 pixels with a given alpha for the first pixel. The function is provided by the super class `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `AbstractPainterRGB565`), `. The circle now has smooth edges with this code:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/red-alpha-painter.png",
    mdxType: "Figure"
  }, "The RedAlphaPainter painting a Circle. On the right a magnified part showing alpha blending."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetX`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetY`), ` parameters can be used to restrict the drawing to certain areas. Here is for example a painter that only draws on every other horizontal line. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetY`), ` is used to control that:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-11}",
    "{8-11}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class StripePainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        if ((widgetY & 2) == 0)
        {
            return; // Do not draw anything on line 0,1, 4,5, 8,9, etc.
        }
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        if (alpha == 0xFF)
        {
            do
            {
                *framebuffer = 0xF800;
            } while (++framebuffer < lineend);
        }
        else
        {
            do
            {
                *framebuffer = alphaBlend(0xF800, *framebuffer, alpha);
            } while (++framebuffer < lineend);
        }
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter.png",
    mdxType: "Figure"
  }, "The StripePainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-framebuffer"
  }), `Changing the framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The painter in this section does not paint a specific content to the framebuffer, but changes the framebuffer to be gray-scale. It does this by reading the pixel value in the framebuffer (written by the Widgets that are in the background of the Circle), extracting the green component, using this to create a gray color (same value for red, green, blue), and writing that back to the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Many similar techniques can be developed using this principle of reading and modifying the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-14}",
    "{13-14}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
#include <touchgfx/Color.hpp>
using namespace touchgfx;
class GrayscalePainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        do
        {
            const uint8_t green = Color::getGreenFromRGB565(*framebuffer) & 0xF8; // Keep only 5 bits of the green
            const uint16_t color565 = LCD16bpp::getNativeColorFromRGB(green, green, green);
            if (alpha == 0xFF)
            {
                *framebuffer = color565;
            }
            else
            {
                *framebuffer = alphaBlend(color565, *framebuffer, alpha);
            }
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/gray-painter.png",
    mdxType: "Figure"
  }, "Original background on the left. On the right the Circle painter has changed the inner pixels in the circle to gray-scale."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-custom"
  }), `Custom Containers on rotated displays`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If your application is using a rotated display, the custom container code must take this into account, if it is using the coordinates in the painting.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here is the StripePainter used with a rotated display:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter-rotate90.png",
    mdxType: "Figure"
  }, "The StripePainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Image, text, and the Button has been rotated by the TouchGFX engine, but we see that the stripes are now perpendicular to the text, where it is supposed to parallel. The lines have not been rotated.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `The problem is that the framebuffer is not rotated, so as the painter paints in sequential addresses (pixels in the framebuffer), the lines are oriented as before (not rotated).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We can fix that by using the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetX`), ` to decide if we are painting or not. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetY`), ` parameters are given in the framebuffer coordinate system. This means that `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), ` grows when we go down on the display and corresponds to y in the display coordinate system.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{15-18,25-28}",
    "{15-18,25-28}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
#include <touchgfx/Color.hpp>
using namespace touchgfx;
class StripePainterRotate90 : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        if (alpha == 0xFF)
        {
            do
            {
                if (widgetX++ & 2)
                {
                    *framebuffer = 0xF800;
                }
            } while (++framebuffer < lineend);
        }
        else
        {
            do
            {
                if (widgetX++ & 2)
                {
                    *framebuffer = alphaBlend(0xF800, *framebuffer, alpha);
                }
            } while (++framebuffer < lineend);
        }
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The stripes are now correctly oriented:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter-rotate90-fixed.png",
    mdxType: "Figure"
  }, "The StripePainterRotate90 painting a Circle."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);