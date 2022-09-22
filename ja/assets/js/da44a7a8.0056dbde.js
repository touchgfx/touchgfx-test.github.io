"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2472],{

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

/***/ 34864:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
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
  id: "texts-and-fonts",
  title: "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "id": "development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "title": "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/texts-and-fonts.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "texts-and-fonts",
    "title": "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/mixins"
  },
  "next": {
    "title": "\u8A00\u8A9E\u3068\u6587\u5B57",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  }
};
const assets = {};





const toc = [{
  value: "\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3",
  id: "texts-and-typographies",
  level: 2
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF",
  id: "the-text-converter",
  level: 2
}, {
  value: "Translations\uFF08\u7FFB\u8A33\uFF09",
  id: "translations",
  level: 3
}, {
  value: "\u63A8\u5968\u4E8B\u9805",
  id: "recommendations",
  level: 4
}, {
  value: "\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF",
  id: "the-font-converter",
  level: 2
}, {
  value: "\u6587\u5B57\u30E1\u30E2\u30EA\u6700\u9069\u5316",
  id: "character-memory-optimization",
  level: 2
}, {
  value: "\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9",
  id: "wildcards",
  level: 2
}, {
  value: "TouchGFX Designer\u3067\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u4F7F\u7528",
  id: "using-wildcards-in-touchgfx-designer",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u4F7F\u7528",
  id: "using-wildcards-in-user-code",
  level: 3
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\u306E\u914D\u7F6E",
  id: "text-placement",
  level: 2
}, {
  value: "\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8",
  id: "alignment",
  level: 3
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u6B63\u3057\u3044\u5E45\u3068\u9AD8\u3055\u306E\u8A2D\u5B9A",
  id: "setting-the-correct-width-and-height-of-a-textarea",
  level: 3
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u6B63\u3057\u3044X\u304A\u3088\u3073Y\u306E\u8A2D\u5B9A",
  id: "setting-the-correct-x-and-y-for-a-textarea",
  level: 3
}, {
  value: "\u9577\u3044\u30C6\u30AD\u30B9\u30C8\u884C\u306E\u81EA\u52D5\u30E9\u30C3\u30D7",
  id: "automatic-wrapping-of-long-text-lines",
  level: 3
}, {
  value: "\u4F7F\u7528\u53EF\u80FD\u306AWide Text Action",
  id: "available-wide-text-actions",
  level: 4
}, {
  value: "\u8A00\u8A9E\u306E\u5207\u66FF\u3048",
  id: "switching-language",
  level: 2
}, {
  value: "TouchGFX Designer\u3067\u306E\u64CD\u4F5C",
  id: "in-touchgfx-designer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u306F\u3001\u73FE\u4EE3\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u975E\u5E38\u306B\u91CD\u8981\u306A\u8981\u7D20\u3067\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3059\u3079\u3066\u306E\u8A00\u8A9E\u3067\u3001\u9AD8\u54C1\u8CEA\u3067\u306A\u3081\u3089\u304B\u306A\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u306F\u3068\u3066\u3082\u91CD\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001TouchGFX Designer\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `Texts View`), `\u306B\u3088\u3063\u3066\u3001\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u4F5C\u6210\u304A\u3088\u3073\u5909\u66F4\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 TouchGFX Designer\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A2D\u5B9A\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xml`), `\u306B\u3042\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u51FA\u529B\u3057\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3068\u4E00\u7DD2\u306B\u3001\u30D5\u30A9\u30F3\u30C8\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\uFF65\u30C4\u30FC\u30EB\u306B\u4F9B\u7D66\u3055\u308C\u3001\u3053\u308C\u306B\u3088\u3063\u3066\u751F\u6210\u6E08\u307F\u306EC++\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u3001TouchGFX\u304C\u63CF\u753B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u30D5\u30A9\u30F3\u30C8\u5909\u63DB\u30C4\u30FC\u30EB\u3092\u7D39\u4ECB\u3057\u3001\u30B3\u30FC\u30C9\u3068TouchGFX Designer\u3092\u901A\u3058\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u751F\u6210\u6E08\u307F\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts-and-typographies"
  }), `\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xml`), `\u306B\u3042\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u306F\u3001\u7FFB\u8A33\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u4F7F\u7528\u3055\u308C\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u4E00\u822C\u306B\u306F\u300C\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u300D\u3068\u547C\u3070\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306FTouchGFX Designer\u3067\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `Texts View`), `\u3092\u4F7F\u7528\u3057\u3066\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u7DE8\u96C6\u3092\u7C21\u5358\u304B\u3064\u4FBF\u5229\u306B\u884C\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001texts.xml\u5185\u3067\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3068\u30C6\u30AD\u30B9\u30C8\u3092\u76F4\u63A5\u7DE8\u96C6\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u7DE8\u96C6\u3092\u652F\u63F4\u3059\u308B\u305F\u3081\u306B\u3001\u691C\u8A3C\u7528\u306EXML\u30B9\u30AD\u30FC\u30DE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xsd`), `\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u591A\u304F\u306E\u65E2\u77E5\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30C7\u30A3\u30BF\u306B\u306F\u3001XML\u30B9\u30AD\u30FC\u30DE\u691C\u8A3C\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306BXML\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\uFF08VS code\u3001Notepad++\u307E\u305F\u306FEmacs\u3001Visual Studio\u306A\u3069\uFF09\u3002 \u4E00\u822C\u7684\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u7DE8\u96C6\u3059\u308B\u969B\u306B\u306F\u3001\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u5185\u306E\u4E0D\u6574\u5408\u3084\u7FFB\u8A33\u306E\u6B20\u843D\u3092\u9632\u3050\u305F\u3081\u306B\u3001TouchGFX Designer\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002XML\u30B9\u30AD\u30FC\u30DE\u3067\u306F\u3053\u308C\u3089\u3092\u691C\u8A3C\u3067\u304D\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u4EE5\u5916\u3067\u306E\u30C6\u30AD\u30B9\u30C8\u7FFB\u8A33\uFF08\u5916\u90E8\u30C8\u30E9\u30F3\u30B9\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u305F\u7FFB\u8A33\u306A\u3069\uFF09\u306E\u64CD\u4F5C\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u306B\u30C6\u30AD\u30B9\u30C8\u7FFB\u8A33\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3067\u304D\u308B\u65B0\u3057\u3044\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u306E\u30C4\u30FC\u30EB\u304C\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306B\u88C5\u5099\u3055\u308C\u307E\u3057\u305F\u3002 \u3055\u3089\u306B\u3001\u3053\u306EExcel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u5916\u90E8\u30C8\u30E9\u30F3\u30B9\u30EC\u30FC\u30BF\u3068\u5171\u6709\u3067\u304D\u307E\u3059\u3002 \u7FFB\u8A33\u304C\u66F4\u65B0\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u540C\u3058\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#translations"
  }), `Translations\uFF08\u7FFB\u8A33\uFF09`), `\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u7FFB\u8A33\u3001\u8A00\u8A9E\u306E\u4F5C\u6210\u304A\u3088\u3073\u7DE8\u96C6\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/texts-view",
    mdxType: "Link"
  }, "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-text-converter"
  }), `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u60C5\u5831\u3092\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u308B\u5185\u90E8C++\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3059\u308B\u30C4\u30FC\u30EB\u3067\u3059\u3002 \u3053\u306E\u30C4\u30FC\u30EB\u306F\u3001\u30D3\u30EB\u30C9\uFF65\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u306E\u7D71\u5408\u30D1\u30FC\u30C8\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u7BC9\u6642\u306B\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u7FFB\u8A33\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5909\u66F4\u3055\u308C\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u7FFB\u8A33\u304C\u8FFD\u52A0\u3055\u308C\u305F\u5834\u5408\u306B\u3001\u65B0\u3057\u3044C++\u30B3\u30FC\u30C9\u306E\u307F\u3092\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-converter-4.18.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u51FA\u529B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306F\u300Cgenerated/texts/\u300D\u3067\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u6307\u5B9A\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u3001TouchGFX\u3067\u4F7F\u7528\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedText`), `\u3068\u547C\u3070\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u30E9\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002 TouchGFX\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedText`), `\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30C6\u30F3\u30C4\u305D\u306E\u3082\u306E\u3068\u30C6\u30AD\u30B9\u30C8\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5B9F\u614B\u3067\u3059\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30F3\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3001\u304A\u3088\u3073\u30D5\u30A9\u30F3\u30C8\u306E\u30B0\u30EA\u30D5\u306E\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B7\u30F3\u30B0\uFF08\u306A\u3081\u3089\u304B\u51E6\u7406\uFF09\u3067\u4F7F\u7528\u3055\u308C\u308B\u30D4\u30AF\u30BB\u30EB\u3042\u305F\u308A\u30D3\u30C3\u30C8\u6570\uFF08bpp\uFF09\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/texts/include/texts/TextKeysAndLanguages.hpp`), `\u3068\u3044\u3046\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u3059\u3079\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u53C2\u7167\u3059\u308Benum\uFF08\u5217\u6319\u578B\uFF09\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TEXTS`), `\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `enum\u5185\u306E\u3059\u3079\u3066\u306E\u30A8\u30F3\u30C8\u30EA\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u5404\u30C6\u30AD\u30B9\u30C8\uFF65\u30CE\u30FC\u30C9\u306B\u793A\u3055\u308C\u305FID\u304B\u3089\u751F\u6210\u3055\u308C\u307E\u3059\u304C\u3001\u5148\u982D\u306BT_\u304C\u4ED8\u304D\u3001\u5927\u6587\u5B57\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u5217\u6319\u5024\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067TypedText\u3092\u521D\u671F\u5316\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextKeysAndLanguages.hpp`), `\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u8A00\u8A9E\u3092\u6307\u5B9A\u3059\u308Benum\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LANGUAGES`), `\u3082\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u547D\u540D\u65B9\u6CD5\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u8A00\u8A9E\u306E\u5217\u3068\u540C\u3058\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/texts/include/texts/TextKeysAndLanguages.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* DO NOT EDIT THIS FILE */
/* This file is autogenerated by the text-database code generator */

#ifndef TEXT_KEYS_AND_LANGUAGES_HPP
#define TEXT_KEYS_AND_LANGUAGES_HPP


typedef enum {
    GB,
    DE,
    NUMBER_OF_LANGUAGES
} LANGUAGES;


typedef enum {
    T_TEMPERATURE_READOUT,
    T_TEMPERATURE_HEADLINE,
    NUMBER_OF_TEXT_KEYS
} TEXTS;

#endif /* TEXT_KEYS_AND_LANGUAGES_HPP */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `Translations\uFF08\u7FFB\u8A33\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u7FFB\u8A33\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u304A\u3088\u3073\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3068\u304D\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306B\u3064\u3044\u3066\u7C21\u5358\u306B\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u958B\u767A\u8005\u304C\u30C6\u30AD\u30B9\u30C8\u3092\u542B\u3080\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8907\u6570\u306E\u7570\u306A\u308B\u8A00\u8A9E\u306B\u7FFB\u8A33\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u30B7\u30CA\u30EA\u30AA\u306B\u3064\u3044\u3066\u8003\u3048\u3066\u307F\u307E\u3059\u3002 \u958B\u767A\u8005\u306F\u5916\u90E8\u306E\u30C8\u30E9\u30F3\u30B9\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3057\u3066\u3001\u30C8\u30E9\u30F3\u30B9\u30EC\u30FC\u30BF\u306B\u9001\u4FE1\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u958B\u767A\u8005\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/tools/textconvert/translations.rb`), `\u306B\u3042\u308B\u65B0\u3057\u3044\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30C4\u30FC\u30EB\u306FTouchGFX\u74B0\u5883\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u5F15\u6570\u306A\u3057\u3067\u30C4\u30FC\u30EB\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306E\u30D8\u30EB\u30D7\uFF65\u30C6\u30AD\u30B9\u30C8\u304C\u51FA\u529B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb
Export and import the text database for translation using e.g. Excel

Usage: translations.rb {export|import} assets/texts/texts.xml translations.xlsx [language]*

Export: Will create the "translations.xlsx" by extracting the texts for
        all languages from the given assets/texts/texts.xml

Import: Will merge the text translations from "translations.xlsx" into
        the given assets/texts/texts.xml. Only the actual texts are
        imported, not alignment and text direction.

If no languages are specified, all languages will be handled,
otherwise only the specified languages are imported/exported.
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u8A00\u8A9E\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb export assets/texts/texts.xml translations.xlsx
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u306E\u8A00\u8A9E\uFF08\u82F1\u8A9E\u3001\u30D5\u30E9\u30F3\u30B9\u8A9E\u3001\u30A2\u30E9\u30D3\u30A2\u8A9E\u306A\u3069\uFF09\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb export assets/texts/texts.xml translations.xlsx English French Arabic
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/tools/textconvert/translations.xlsx`), `\u3092\u30C8\u30E9\u30F3\u30B9\u30EC\u30FC\u30BF\u3068\u5171\u6709\u3067\u304D\u307E\u3059\u3002\u6B21\u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-empty-translations.png",
    mdxType: "Figure"
  }, "Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8 - \u7A7A\u306E\u7FFB\u8A33"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8A00\u8A9E\u306F\u3001Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3067\u306F\u306A\u304F\u3001TouchGFX Designer\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3001\u914D\u7F6E\u3001\u65B9\u5411\u306F\u3001Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3067\u306F\u306A\u304F\u3001TouchGFX Designer\u3067\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u7FFB\u8A33\u3092\u542B\u3080\u30BB\u30EB\u306E\u307F\u304C\u3001Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3067\u7DE8\u96C6\u3059\u308B\u305F\u3081\u306B\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u307E\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u5185\u306E\u5BFE\u5FDC\u3059\u308BTexts View\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-empty-translations.png",
    mdxType: "Figure"
  }, "Texts View - \u7A7A\u306E\u7FFB\u8A33"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7FFB\u8A33\u304C\u5B8C\u4E86\u3057\u3066\u958B\u767A\u8005\u306B\u623B\u3055\u308C\u305F\u3089\u3001\u305D\u306E\u7FFB\u8A33\u3092\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-updated-translations.png",
    mdxType: "Figure"
  }, "Excel\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8 - \u66F4\u65B0\u3055\u308C\u305F\u7FFB\u8A33"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u8A00\u8A9E\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb import assets/texts/texts.xml translations.xlsx
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u306E\u8A00\u8A9E\uFF08\u30D5\u30E9\u30F3\u30B9\u8A9E\u3001\u30A2\u30E9\u30D3\u30A2\u8A9E\u306A\u3069\uFF09\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb import assets/texts/texts.xml translations.xlsx French Arabic
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u3053\u308C\u3089\u306E\u7FFB\u8A33\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-updated-translations.png",
    mdxType: "Figure"
  }, "Texts View - \u66F4\u65B0\u3055\u308C\u305F\u7FFB\u8A33"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "recommendations"
  }), `\u63A8\u5968\u4E8B\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7FFB\u8A33\u7528\u30C6\u30AD\u30B9\u30C8\u306E\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3068\u518D\u30A4\u30F3\u30DD\u30FC\u30C8\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u540C\u3058\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u65B9\u6CD5\u306B\u3088\u308A\u3001\u30A4\u30F3\u30DD\u30FC\u30C8\uFF65\u30D7\u30ED\u30BB\u30B9\u3067\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u7AF6\u5408\u3092\u56DE\u907F\u3067\u304D\u307E\u3059\u3002 Git\u306A\u3069\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u524D\u306B"branch"\u3092\u4F5C\u6210\u3057\u3001\u7FFB\u8A33\u5B8C\u4E86\u5F8C\u306B\u305D\u306E\u30C6\u30AD\u30B9\u30C8\u7FFB\u8A33\u3067\u3053\u306E"branch"\u3092\u66F4\u65B0\u3057\u3066\u3001\u6700\u7D42\u7684\u306B\u3053\u306E"branch"\u3092\u30E1\u30A4\u30F3\u306E"branch"\u306B\u30DE\u30FC\u30B8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u56F3\u306F\u3001\u30A2\u30E9\u30D3\u30A2\u8A9E\u3068\u30D5\u30E9\u30F3\u30B9\u8A9E\u306E\u7FFB\u8A33\u304C\u7FFB\u8A33"branch"\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3055\u308C\u3001\u30E1\u30A4\u30F3"branch"\u306B\u30DE\u30FC\u30B8\u3057\u3066\u623B\u3055\u308C\u305F\u4F8B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u7FFB\u8A33"branch"\u3067\u306E\u4F5C\u696D\u306E\u5B9F\u884C\u4E2D\u306B\u3001\u30E1\u30A4\u30F3"branch"\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5909\u66F4\u3092\u52A0\u3048\u308B\u5834\u5408\u306B\u306F\u3001\u7D30\u5FC3\u306E\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3042\u308B\u3053\u3068\u304C\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30DE\u30FC\u30B8\u7AF6\u5408\u304C\u767A\u751F\u3059\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/branch-example.png",
    mdxType: "Figure"
  }, '"branch"\u306E\u4F8B'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DE\u30FC\u30B8\u7AF6\u5408\u304C\u767A\u751F\u3059\u308B\u306E\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5834\u5408\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E1\u30A4\u30F3"branch"\u3067\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u30C6\u30AD\u30B9\u30C8ID\u3092\u524A\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E1\u30A4\u30F3"branch"\u3067\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30C6\u30AD\u30B9\u30C8ID\u3092\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E1\u30A4\u30F3"branch"\u3067\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u30C6\u30AD\u30B9\u30C8ID\u306E\u540D\u524D\u3092\u5909\u66F4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-font-converter"
  }), `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u60C5\u5831\u3068\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u60C5\u5831\u3092\u7D50\u5408\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5FC5\u8981\u3068\u3055\u308C\u308B\u6587\u5B57\u3092\u751F\u6210\u3059\u308B\u30C4\u30FC\u30EB\u3067\u3059\u3002 \u51FA\u529B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u308B\u5185\u90E8C++\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3059\u3002 \u3053\u306E\u30C4\u30FC\u30EB\u306F\u3001\u30D3\u30EB\u30C9\uFF65\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u306E\u7D71\u5408\u30D1\u30FC\u30C8\u3067\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u69CB\u7BC9\u6642\u306B\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/font-converter-4.18.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u5229\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TrueType\uFF08.ttf\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `OpenType\uFF08.otf\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Glyph Bitmap Distribution Format\uFF08.bdf\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "Glyph Bitmap Distribution Format\u30D5\u30A9\u30F3\u30C8\uFF08.bdf\uFF09\u306E\u5834\u5408\u3001\u3053\u306E\u30D5\u30A9\u30F3\u30C8\u3067\u3059\u3079\u3066\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3092\u63CF\u753B\u3067\u304D\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30B7\u30FC\u30C8\u306E\u6240\u5B9A\u306E\u30B5\u30A4\u30BA\u304C\u6240\u5B9A\u306E\u30D5\u30A9\u30F3\u30C8\u3068\u4E00\u81F4\u3057\u306A\u3044\u5834\u5408\u3001\u30D5\u30A9\u30F3\u30C8\u5909\u63DB\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3092\u30EC\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30B7\u30FC\u30C8\u5185\u306E\u30B5\u30A4\u30BA\u3092\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30B5\u30A4\u30BA\u306E\u3044\u305A\u308C\u304B\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3001\u554F\u984C\u304C\u89E3\u6C7A\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\u306F\u5358\u7D14\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts/`), `\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u914D\u7F6E\u3055\u308C\u3001TouchGFX Designer\u3067\u53C2\u7167\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\uFF08TouchGFX Designer\u306E\u5B9F\u884C\u4E2D\u306B\u30D5\u30A9\u30F3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u305F\u5834\u5408\u3001\u518D\u8D77\u52D5\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30A9\u30F3\u30C8\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001Windows\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u3082\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u81EA\u52D5\u7684\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts/`), `\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306F\u3001\u63D0\u4F9B\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u5185\u306E\u30AB\u30FC\u30CB\u30F3\u30B0\u60C5\u5831\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u30AB\u30FC\u30F3\u30CB\u30F3\u30B0\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "TouchGFX\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001TrueType\u3001OpenType\u3001\u307E\u305F\u306FBitmap\u30D5\u30A9\u30F3\u30C8\u306E\u5546\u7528\u5229\u7528\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u63D0\u4F9B\u3055\u308C\u308B\u308F\u3051\u3067\u306F\u6C7A\u3057\u3066\u3042\u308A\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u51FA\u529B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306Fgenerated/fonts/\u3067\u3059\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "character-memory-optimization"
  }), `\u6587\u5B57\u30E1\u30E2\u30EA\u6700\u9069\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u3092\u5C11\u306A\u304F\u3059\u308B\u305F\u3081\u306B\u6700\u9069\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u7279\u5B9A\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306B\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u306E\u89E3\u6790\u306B\u3088\u3063\u3066\u3001\u751F\u6210\u3055\u308C\u308B\u6587\u5B57\u6570\uFF08\u5185\u90E8C++\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF09\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5B9F\u969B\u306B\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u6570\u307E\u3067\u6700\u5C0F\u5316\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u306E\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u3082\u3001\u5171\u901A\u306E\u63A5\u5C3E\u6587\u5B57\u3092\u4F7F\u7528\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u5727\u7E2E\u3059\u308B\u3053\u3068\u3067\u6700\u9069\u5316\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#text-configuration"
  }), `Text Configuration`), `\u3067\u30C6\u30AD\u30B9\u30C8\u306E\u518D\u914D\u7F6E\u3092\u884C\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\uFF08Remap texts\uFF09\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wildcards"
  }), `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9F\u884C\u6642\u306E\u5024\u3092\u30C6\u30AD\u30B9\u30C8\u306E\u4E00\u90E8\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u3089\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<*>`), `\u3068\u3044\u3046\u6240\u5B9A\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u6307\u5B9A\u3055\u308C\u3001*\u306F\u5909\u63DB\u7D50\u679C\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u542B\u307E\u308C\u306A\u3044\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u88DC\u52A9\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002 1\u3064\u306E\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u6700\u59272\u3064\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u3059\u3079\u3066\u306E\u7FFB\u8A33\u306B\u3001\u540C\u3058\u6570\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u5024\u306F\u3001\u5B9F\u884C\u6642\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306EC++\u30B3\u30FC\u30C9\u3067\u633F\u5165\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u4F7F\u7528\u4F8B: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `The temperature is `, `<`, `insert_temperature`, `>`, `\xB0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\u3059\u3079\u304D\u8A73\u7D30\u4E8B\u9805\u306E1\u3064\u3068\u3057\u3066\u3001\u6587\u5B57\u30E1\u30E2\u30EA\u6700\u9069\u5316\uFF08\u524D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\uFF09\u306E\u305F\u3081\u306B\u3001\u7279\u5B9A\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u6301\u3064\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u306F\u3001\u305D\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u7528\u306B\u751F\u6210\u3055\u308C\u305F\u6587\u5B57\u306E\u307F\u304C\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u30D5\u30A9\u30F3\u30C8\uFF65\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u306B\u7279\u5B9A\u306E\u6587\u5B57\u3092\u5F37\u5236\u7684\u306B\u542B\u3081\u308B\u306B\u306F\u3001\u5404\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3067"Wildcard Characters"\u304A\u3088\u3073"Character Ranges"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<*>`), `\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\\`, `<`, `not a wildcard\\`, `>`), `\u306E\u3088\u3046\u306B\u3001\u30D0\u30C3\u30AF\u30B9\u30E9\u30C3\u30B7\u30E5\u8868\u8A18\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u30A8\u30B9\u30B1\u30FC\u30D7\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u4F8B\u306E\u7D50\u679C\u3068\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u306F"`, `<`, `not a wildcard`, `>`, `<`, `not a wildcard`, `>`, `"\u3068\u3044\u3046\u6587\u5B57\u30C6\u30AD\u30B9\u30C8\u304C\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-wildcards-in-touchgfx-designer"
  }), `TouchGFX Designer\u3067\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u901A\u5E38\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u4E8B\u5B9F\u4E0A\u3001\u3053\u308C\u306B\u3088\u3063\u3066TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3001\u3053\u308C\u307E\u3067TextAreaWithOneWildcard  / TextAreaWithTwoWildcards\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5BFE\u5FDC\u3057\u3066\u3044\u305F\u6A5F\u80FD\u3092\u7DB2\u7F85\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u304C\u3001TouchGFX\u3067\u306E\u30B3\u30FC\u30C9\u751F\u6210\u65B9\u6CD5\u306B\u5909\u66F4\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u9078\u629E\u3057\u305FTextArea\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\uFF3B+\uFF3D\u30DC\u30BF\u30F3\uFF08Add Wildcard\uFF09\u3092\u5358\u7D14\u306B\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u5BFE\u5FDC\u3059\u308B\uFF3B-\uFF3D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002 \u3088\u304F\u4F7F\u7528\u3055\u308C\u308B\u4F8B\u3068\u3057\u3066\u3001The temperature is \xB0\u3068\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u3001\u8AAD\u307F\u53D6\u3063\u305F\u6E29\u5EA6\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u5C4B\u5916\u6E29\u5EA6\u306E\u8AAD\u53D6\u308A\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u9759\u7684\u306A\u6570\u5024\u3092\u8868\u793A\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u8AAD\u307F\u53D6\u3063\u305F\u6E29\u5EA6\u306B\u5FDC\u3058\u3066\u66F4\u65B0\u3055\u308C\u308B\u3088\u3046\u306B\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u633F\u5165\u3057\u3066\u307F\u307E\u3059\u3002 \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5185\u306E\u30AD\u30E3\u30EC\u30C3\u30C8\uFF08\u633F\u5165\u8A18\u53F7\uFF09\u306E\u73FE\u5728\u306E\u4F4D\u7F6E\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/adding-wild-card-to-text-area-4.17.png",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30D7\u30ED\u30D1\u30C6\u30A3\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u8868\u793A\u306FThe temperature is `, `<`, `value`, `>`, `\xB0\u306B\u306A\u308A\u3001\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u306E\u30C6\u30AD\u30B9\u30C8\u8868\u793A\u306FThe temperature is  \xB0\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/temperature-wildcard-example.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u305F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308BWildcard\u30DC\u30BF\u30F3\uFF08\u3053\u306E\u4F8B\u3067\u306FWildcard 1\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u8FFD\u52A0\u3057\u305F\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u7DE8\u96C6\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u66F4\u65B0\u65B9\u6CD5\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u4E8B\u524D\u5B9A\u7FA9\u3055\u308C\u305F\u30EA\u30BD\u30FC\u30B9\uFF65\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u5B9F\u884C\u6642\u306B\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3069\u3061\u3089\u306E\u5834\u5408\u3082\u3001\u5B9F\u884C\u6642\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u66F4\u65B0\u3067\u304D\u307E\u3059\u3002 \u81EA\u52D5\u751F\u6210\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\uFF3B+\uFF3D\uFF08Create auto-generated text\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u65E2\u5B58\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30C6\u30AD\u30B9\u30C8\u304C\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30D0\u30C3\u30D5\u30A1\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001Use wildcard Buffer\u306E\u30C1\u30A7\u30C3\u30AF\uFF65\u30DE\u30FC\u30AF\u3092\u30AA\u30F3\u306B\u3057\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\uFF08\u6587\u5B57\u6570\uFF09\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002 \u30E1\u30E2\u30EA\u3092\u52B9\u7387\u5316\u3059\u308B\u306B\u306F\u3001\u6307\u5B9A\u3059\u308B\u30B5\u30A4\u30BA\u3092\u3001\u5B9F\u969B\u306B\u5FC5\u8981\u306A\u30C6\u30AD\u30B9\u30C8\uFF65\u30B5\u30A4\u30BA\u3068\u3067\u304D\u308B\u9650\u308A\u8FD1\u3065\u3051\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6587\u5B57\u5217\u306E\u7D42\u4E86\u3092\u793A\u3059\u305F\u3081\u306B\u3001\u4F59\u5206\u306A\u30B9\u30DA\u30FC\u30B9\u30921\u3064\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF08\u2018\\0\u2019\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-add-auto-generated-text.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067\u81EA\u52D5\u751F\u6210\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306B\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u521D\u671F\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u6E29\u5EA6\u306E\u8AAD\u53D6\u308A\u306B\u3088\u3063\u3066\u6700\u7D42\u7684\u306B\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u304C\u3069\u306E\u3088\u3046\u306A\u8868\u793A\u306B\u306A\u308B\u306E\u304B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-setup-in-touchgfx-deisgner-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-wildcards-in-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u4F8B\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u8FFD\u52A0\u304A\u3088\u3073\u66F4\u65B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u4F8B\u3067\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Unicode::UnicodeChar`), `\u914D\u5217\u304C\u7BA1\u7406\u3055\u308C\u66F4\u65B0\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gui/include/gui/some_screen/SomeView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/TextAreaWithWildcard.hpp>
...
class SomeView : public View<SomePresenter>
{
  TextAreaWithOneWildcard txt;
  Unicode::UnicodeChar txtBuffer[10];
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gui/src/some_screen/SomeView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <texts/TextKeysAndLanguages.hpp>

void SomeView::setupScreen()
{
  txt.setTypedText(TypedText(T_TEMPERATURE_READOUT));
  txt.setXY(10, 20);
  txt.setWildcard(txtBuffer);
  add(txt);

  updateTxt(5);
}

void SomeView::updateTxt(int newValue)
{
  Unicode::snprintf(txtBuffer, 10, "%d", newValue);
  txt.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "text-placement"
  }), `\u30C6\u30AD\u30B9\u30C8\u306E\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306E\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u540C\u69D8\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3092\u914D\u7F6E\u3059\u308B\u306B\u306F\u3001\u4F4D\u7F6E\uFF08X\u304A\u3088\u3073Y\uFF09\u3068\u5BF8\u6CD5\uFF08\u5E45\u304A\u3088\u3073\u9AD8\u3055\uFF09\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u3053\u308C\u306FTouchGFX Designer\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u304C\u3001TouchGFX Designer\u306B\u304A\u3051\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u306F\u3001TouchGFX\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B\u3059\u308B\u65B9\u6CD5\u3068\u6BD4\u3079\u308B\u3068\u3001\u5FC5\u305A\u3057\u3082100%\u6B63\u78BA\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3059\u308B\u3088\u3046\u306A\u6CE8\u610F\u3059\u3079\u304D\u8A73\u7D30\u4E8B\u9805\u3084\u305D\u306E\u53EF\u80FD\u6027\u304C\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "alignment"
  }), `\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u9078\u629E\u3057\u305F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30F3\u30C8\u30EA\u306B\u5BFE\u3057\u3066\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u30A2\u30E9\u30A4\u30F3\u30E1\u30F3\u30C8\u306B\u5F93\u3063\u3066\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u9818\u57DF\u3092\u57FA\u6E96\u306B\u3057\u3066\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u6B21\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u9818\u57DF\u304C\u9752\u8272\u3067\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-left-align.png",
    mdxType: "Figure"
  }, "\u5DE6\u8A70\u3081\u306E\u30C6\u30AD\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-center-align.png",
    mdxType: "Figure"
  }, "\u4E2D\u592E\u63C3\u3048\u306E\u30C6\u30AD\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-right-align.png",
    mdxType: "Figure"
  }, "\u53F3\u8A70\u3081\u306E\u30C6\u30AD\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u8A2D\u5B9A\u306FTouchGFX Designer\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `Texts View`), `\u3067\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-correct-width-and-height-of-a-textarea"
  }), `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u6B63\u3057\u3044\u5E45\u3068\u9AD8\u3055\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3067\u306F\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u306B\u5FDC\u3058\u3066\u5E45\u3068\u9AD8\u3055\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::resizeToCurrentText()`), `\u30E1\u30BD\u30C3\u30C9\u3092\u8AAD\u307F\u51FA\u3057\u3066\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u300CresizeToCurrentText()\u300D\u306F\u3001\u5E45\u3068\u9AD8\u3055\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u3001\u65B0\u3057\u3044TypedText\u306B\u3088\u3063\u3066TextArea\u3092\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3059\u308B\u3068\u81EA\u52D5\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E2D\u592E\u63C3\u3048 / \u53F3\u8A70\u3081\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u56FA\u5B9A\u9818\u57DF\u5185\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u4E2D\u592E\u63C3\u3048 / \u53F3\u8A70\u3081\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u306E\u3067\u3001\u5E45\u3084\u9AD8\u3055\u306E\u30B5\u30A4\u30BA\u5909\u66F4\u3092\u3057\u306A\u3044\u3053\u3068\u304C\u307B\u3068\u3093\u3069\u3067\u3059\u3002 \u3053\u306E\u5834\u5408\u306F\u3001\u5E45\u3068\u9AD8\u3055\u3092\u624B\u52D5\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setPosition(x, y, width, height)`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setWidth(width)`), `\u304A\u3088\u3073`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setHeight(height)`), `\u3092\u547C\u3073\u51FA\u3057\u3066\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E45\u307E\u305F\u306F\u9AD8\u3055\uFF08\u3042\u308B\u3044\u306F\u4E21\u65B9\uFF09\u304C\u5C0F\u3055\u3059\u304E\u3066\u30C6\u30AD\u30B9\u30C8\u306B\u9069\u5408\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u4E0B\u306B\u793A\u3059\u3088\u3046\u306B\u9818\u57DF\u306B\u5408\u308F\u305B\u3066\u30C6\u30AD\u30B9\u30C8\u304C\u5207\u308A\u53D6\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-cutoff.png",
    mdxType: "Figure"
  }, "TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u5883\u754C\u3067\u30C6\u30AD\u30B9\u30C8\u304C\u5207\u308A\u53D6\u3089\u308C\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-correct-x-and-y-for-a-textarea"
  }), `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u6B63\u3057\u3044X\u304A\u3088\u3073Y\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3092\u6B63\u3057\u3044XY\u4F4D\u7F6E\u306B\u914D\u7F6E\u3059\u308B\u306B\u306F\u3001\u5927\u304D\u306A\u6587\u5B57\u306E\u8868\u793A\u3092\u53EF\u80FD\u306B\u3059\u308B\u305F\u3081\u306B\u3001\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30F3\u30C8\u306B\u306F\u6587\u5B57\u306E\u4E0A\u306B\u5C11\u3057\u4F59\u767D\u304C\u8A2D\u3051\u3089\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u3001\u5DE6\u4E0A\u9685\u306EY\u4F4D\u7F6E\u306B\u5F93\u3063\u3066\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3092\u914D\u7F6E\u3059\u308B\u3053\u3068\u304C\u5C11\u3057\u96E3\u3057\u304F\u306A\u308A\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u4E0A\u90E8\u306E\u30B9\u30DA\u30FC\u30B9\u306E\u6B63\u78BA\u306A\u5927\u304D\u3055\u304C\u308F\u304B\u3089\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u3092\u914D\u7F6E\u3059\u308B1\u3064\u306E\u65B9\u6CD5\u306F\u3001\u307B\u307C\u9593\u9055\u3044\u306A\u3044\u3068\u601D\u308F\u308C\u308B\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u3001\u305D\u306E\u5F8C\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u914D\u7F6E\u3092\u8ABF\u3079\u3066\u4F4D\u7F6E\u3092\u5FAE\u8ABF\u6574\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3053\u306E\u65B9\u6CD5\u306F\u975E\u5E38\u306B\u5358\u7D14\u306A\u4F5C\u696D\u3067\u3059\u304C\u3001\u30D5\u30A9\u30F3\u30C8\u307E\u305F\u306F\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3092\u5F8C\u3067\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u518D\u5B9F\u884C\u306E\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u3063\u3068\u5805\u5B9F\u306A\u65B9\u6CD5\u3068\u3057\u3066\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u306E\u4F7F\u7528\u304C\u3042\u308A\u307E\u3059\u3002 \u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u3068\u306F\u3001\u307B\u3068\u3093\u3069\u306E\u6587\u5B57\u306E\u300C\u304A\u5C3B\u304C\u63C3\u3046\u300D\u4F4D\u7F6E\u3092\u793A\u3059\u30E9\u30A4\u30F3\u3067\u3001\u305D\u306E\u4E0B\u306B\u30C7\u30A3\u30BB\u30F3\u30C0\uFF08p\u3084j\u306A\u3069\u306E\u6587\u5B57\uFF09\u304C\u5EF6\u3073\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-baseline.png",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u306E\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setBaselineY(y)`), `\u307E\u305F\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setXBaselineY(x, y)`), `\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u5DE6\u4E0A\u9685\u3092\u6307\u5B9A\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u6700\u521D\u306E\u30C6\u30AD\u30B9\u30C8\u884C\u306E\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3068\u30B9\u30DA\u30FC\u30B9\u306E\u5927\u304D\u3055\u304C\u8003\u616E\u3055\u308C\u3001\u305D\u308C\u306B\u5FDC\u3058\u3066\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306EY\u4F4D\u7F6E\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u6A5F\u80FD\u306FTouchGFX Designer\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u914D\u7F6E\u306FTouchGFX Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u3067\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u308B\u304B\u3089\u3067\u3059\u3002\u3053\u306E\u305F\u3081\u3001\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u6A5F\u80FD\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TextArea\u3067\u306FsetBaselineY\u3092\u547C\u3073\u51FA\u3059\u524D\u306BTypedText\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30D5\u30A9\u30F3\u30C8\u306B\u4F9D\u5B58\u3057\u3066\u3044\u308B\u304B\u3089\u3067\u3059\u3002 \u307E\u305F\u3001TextAreas\u306ETypedText\u3092\u5225\u306E\u30D5\u30A9\u30F3\u30C8\u307E\u305F\u306F\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u306E\u3082\u306E\u306B\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u300CsetBaselineY\u300D\u3092\u518D\u3073\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u306B\u3082\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "automatic-wrapping-of-long-text-lines"
  }), `\u9577\u3044\u30C6\u30AD\u30B9\u30C8\u884C\u306E\u81EA\u52D5\u30E9\u30C3\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u975E\u5E38\u306B\u9577\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u542B\u3080\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3053\u3046\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u306F\u5358\u7D14\u306B1\u884C\u3067\u8A18\u8FF0\u3055\u308C\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u5185\u306B\u53CE\u307E\u3089\u306A\u3044\u30C6\u30AD\u30B9\u30C8\u306F\u3059\u3079\u3066\u5358\u7D14\u306B\u5207\u308A\u53D6\u3089\u308C\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u3092\u30B9\u30DA\u30FC\u30B9\u306E\u4F4D\u7F6E\u3067\u30E9\u30C3\u30D7\u3057\u3066\uFF08\u6298\u308A\u8FD4\u3057\u3066\uFF09\u30EA\u30D5\u30ED\u30FC\u3055\u305B\u3001\u8907\u6570\u306E\u884C\u3067\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u5358\u7D14\u306B\u4EE5\u4E0B\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myTextArea.setWideTextAction(WIDE_TEXT_WORDWRAP); // Default is WIDE_TEXT_NONE
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "available-wide-text-actions"
  }), `\u4F7F\u7528\u53EF\u80FD\u306AWide Text Action`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_NONE`), `: \u4F55\u3082\u5B9F\u884C\u305B\u305A\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u5E45\u3092\u8D8A\u3048\u3066\u5EF6\u3073\u308B\u6587\u5B57\u306E\u534A\u3070\u3067\u5358\u7D14\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u5207\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_WORDWRAP`), `:: \u5358\u8A9E\u9593\u3067\u30E9\u30C3\u30D7\u3057\u3001\u4EFB\u610F\u306E\u5834\u6240\u306B\u7701\u7565\u8A18\u53F7\u3092\u8868\u793A\u3057\u307E\u3059\uFF08"Very long t..."\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_WORDWRAP_ELLIPSIS_AFTER_SPACE`), `: \u5358\u8A9E\u9593\u3067\u30E9\u30C3\u30D7\u3057\u3001\u30B9\u30DA\u30FC\u30B9\u306E\u5F8C\u306E\u4EFB\u610F\u306E\u5834\u6240\u306B\u7701\u7565\u8A18\u53F7\u3092\u8868\u793A\u3057\u307E\u3059\uFF08"Very long ..."\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_CHARWRAP`), `: \u4EFB\u610F\u306E2\u6587\u5B57\u306E\u9593\u3067\u30E9\u30C3\u30D7\u3057\u3001\u4EFB\u610F\u306E\u5834\u6240\u306B\u7701\u7565\u8A18\u53F7\u3092\u8868\u793A\u3057\u307E\u3059\uFF08\u4E2D\u56FD\u8A9E\u3067\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_CHARWRAP_DOUBLE_ELLIPSIS`), `: \u4EFB\u610F\u306E2\u6587\u5B57\u306E\u9593\u3067\u30E9\u30C3\u30D7\u3057\u3001\u4EFB\u610F\u306E\u5834\u6240\u306B\u7701\u7565\u8A18\u53F7\u3092\u4E8C\u91CD\u306B\u8868\u793A\u3057\u307E\u3059\uFF08\u4E2D\u56FD\u8A9E\u3067\u4F7F\u7528\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/namespacetouchgfx#ad7afabd7637aed4278f7e26434b860c7",
    mdxType: "Link"
  }, "WideTextAction enum\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u304A\u305D\u3089\u304F\u3053\u308C\u306B\u3088\u3063\u3066\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u306F\u7E26\u65B9\u5411\u306E\u30B9\u30DA\u30FC\u30B9\u304C\u591A\u304F\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u30B9\u30DA\u30FC\u30B9\u3092\u5897\u3084\u3059\u306B\u306F\u3001Designer\u3067\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u9AD8\u3055\u3092\u5897\u3059\u304B\u3001\u6B21\u306E\u3088\u3046\u306A\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myTextArea.setWidth(200);
myTextArea.resizeHeightToCurrentText(); // Will set height by wrapping text at 200px long lines
myTextArea.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5C0F\u3055\u304F\u3059\u308B\u5834\u5408\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myTextArea`), `\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u524D\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myTextArea.invalidate()`), `\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 \u305D\u3046\u3057\u306A\u3044\u3068\u3001\u65B0\u3057\u3044\u5C0F\u3055\u304F\u306A\u3063\u305F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3067\u306F\u30AB\u30D0\u30FC\u3055\u308C\u306A\u3044\u53E4\u3044\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u4E00\u90E8\u304C\u8868\u793A\u3055\u308C\u305F\u307E\u307E\u306B\u306A\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "switching-language"
  }), `\u8A00\u8A9E\u306E\u5207\u66FF\u3048`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u591A\u8A00\u8A9E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002 \u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u73FE\u5728\u306E\u8A00\u8A9E\u306F\u3001\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30E1\u30BD\u30C3\u30C9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Texts::setLanguage`), `\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Texts::setLanguage(GB);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `GB`), `\u5024\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#the-text-converter"
  }), `The Text Converter`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u4F8B\u306B\u793A\u3059\u3088\u3046\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextKeysAndLanguages.hpp`), `\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LANGUAGES`), ` enum\uFF08\u5217\u6319\u578B\uFF09\u306E\u4E2D\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u547C\u51FA\u3057\u306E\u5F8C\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3059\u308B\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u7121\u52B9\u5316\uFF08\u307E\u305F\u306F\u5358\u7D14\u306B\u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u3092\u7121\u52B9\u5316\uFF09\u3059\u308B\u3068\u3001\u65B0\u3057\u304F\u9078\u629E\u3057\u305F\u8A00\u8A9E\u3067\u30C6\u30AD\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\u3067\u306E\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A00\u8A9E\u9593\u3092\u5207\u308A\u66FF\u3048\u3066\u3001\u3059\u3079\u3066\u306E\u7FFB\u8A33\u3092\u30C6\u30B9\u30C8\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u64CD\u4F5C\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#general"
  }), `Config View\u306EGeneral\u30BB\u30AF\u30B7\u30E7\u30F3`), `\u3067\u884C\u3044\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u5358\u7D14\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Selected Language`), `\u3092\u5909\u66F4\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);