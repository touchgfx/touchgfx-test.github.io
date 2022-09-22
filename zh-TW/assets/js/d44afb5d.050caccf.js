"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2717],{

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

/***/ 52717:
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
  title: "\u6587\u5B57\u548C\u5B57\u9AD4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "id": "development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "title": "\u6587\u5B57\u548C\u5B57\u9AD4",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/texts-and-fonts.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "texts-and-fonts",
    "title": "\u6587\u5B57\u548C\u5B57\u9AD4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Mixins",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/mixins"
  },
  "next": {
    "title": "\u8A9E\u8A00\u548C\u5B57\u5143",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  }
};
const assets = {};





const toc = [{
  value: "\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370",
  id: "texts-and-typographies",
  level: 2
}, {
  value: "\u6587\u5B57\u8F49\u63DB\u5668",
  id: "the-text-converter",
  level: 2
}, {
  value: "\u7FFB\u8B6F",
  id: "translations",
  level: 3
}, {
  value: "\u5EFA\u8B70",
  id: "recommendations",
  level: 4
}, {
  value: "\u6587\u5B57\u8F49\u63DB\u5668",
  id: "the-font-converter",
  level: 2
}, {
  value: "\u5B57\u5143\u5B58\u5132\u7A7A\u9593\u512A\u5316",
  id: "character-memory-optimization",
  level: 2
}, {
  value: "\u842C\u7528\u5B57\u5143",
  id: "wildcards",
  level: 2
}, {
  value: "\u5728TouchGFX Designer\u4E2D\u4F7F\u7528\u842C\u7528\u5B57\u5143",
  id: "using-wildcards-in-touchgfx-designer",
  level: 3
}, {
  value: "\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u842C\u7528\u5B57\u5143",
  id: "using-wildcards-in-user-code",
  level: 3
}, {
  value: "\u6587\u5B57\u653E\u7F6E",
  id: "text-placement",
  level: 2
}, {
  value: "\u5C0D\u9F4A",
  id: "alignment",
  level: 3
}, {
  value: "\u8A2D\u7F6ETextArea\u7684\u6B63\u78BA\u5BEC\u5EA6\u548C\u9AD8\u5EA6",
  id: "setting-the-correct-width-and-height-of-a-textarea",
  level: 3
}, {
  value: "\u70BATextArea\u8A2D\u7F6E\u6B63\u78BA\u7684X\u548CY\u503C",
  id: "setting-the-correct-x-and-y-for-a-textarea",
  level: 3
}, {
  value: "\u9577\u6587\u5B57\u7684\u81EA\u52D5\u63DB\u884C",
  id: "automatic-wrapping-of-long-text-lines",
  level: 3
}, {
  value: "\u53EF\u7528\u5BEC\u6587\u5B57\u64CD\u4F5C",
  id: "available-wide-text-actions",
  level: 4
}, {
  value: "\u5207\u63DB\u8A9E\u8A00",
  id: "switching-language",
  level: 2
}, {
  value: "TouchGFX Designer\u4E2D",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u548C\u5B57\u9AD4\u662F\u65B0\u5F0F\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u4E00\u500B\u5341\u5206\u91CD\u8981\u7684\u65B9\u9762\u3002 \u5FC5\u9808\u80FD\u5920\u4EE5\u61C9\u7528\u652F\u63F4\u7684\u6240\u6709\u8A9E\u8A00\u986F\u793A\u9AD8\u54C1\u8CEA\u6297\u92F8\u9F52\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u63F4\u901A\u904ETouchGFX Designer\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `\u6587\u5B57\u8996\u5716`), `\u5275\u5EFA\u548C\u4FEE\u6539\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370\u3002 TouchGFX Designer\u5C07\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370\u914D\u7F6E\u8F38\u51FA\u5230\u8CC7\u6599\u5EAB\uFF08\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xml`), `\uFF09\u3002 \u5C07\u6B64\u8CC7\u6599\u5EAB\u8207\u5B57\u9AD4\u6A94\u4E00\u8D77\u8F38\u5165\u5B57\u9AD4\u548C\u6587\u5B57\u8F49\u63DB\u5668\u5DE5\u5177\uFF0C\u8F38\u51FA\u751F\u6210\u7684TouchGFX\u53EF\u6E32\u67D3\u7684C++\u7A0B\u5F0F\u78BC\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u4ECB\u7D39\u6587\u5B57\u548C\u5B57\u9AD4\u8F49\u63DB\u5668\u5DE5\u5177\uFF0C\u4E26\u8AAA\u660E\u5982\u4F55\u901A\u904E\u7A0B\u5F0F\u78BC\u548CTouchGFX Designer\u4F7F\u7528\u5728\u61C9\u7528\u4E2D\u751F\u6210\u7684\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts-and-typographies"
  }), `\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u61C9\u7528\u4E2D\u7684\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370\u5B58\u5132\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xml`), `\u8CC7\u6599\u5EAB\u4E2D\u3002 \u8A72\u8CC7\u6599\u5EAB\u5305\u542B\u61C9\u7528\u4E2D\u4F7F\u7528\u7684\u5E36\u6709\u7FFB\u8B6F\u7684\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370\u3002 \u6B64\u8CC7\u6599\u5EAB\u901A\u5E38\u88AB\u7A31\u70BA\u201C\u6587\u5B57\u8CC7\u6599\u5EAB\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u548C\u6392\u7248\u53EF\u4EE5\u5728TouchGFX Designer\u4E2D\u901A\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `\u6587\u5B57\u8996\u5716`), `\u9032\u884C\u7DE8\u8F2F\uFF0C\u9019\u4F7F\u7DE8\u8F2F\u8B8A\u5F97\u7C21\u55AE\u548C\u65B9\u4FBF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u53EF\u4EE5\u5728texts.xml\u4E2D\u76F4\u63A5\u7DE8\u8F2F\u5B57\u9AD4\u6392\u5370\u548C\u6587\u5B57\uFF1B\u70BA\u4E86\u8F14\u52A9\u7DE8\u8F2F\uFF0C\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `validation assets/text /text.xsd`), `\u63D0\u4F9B\u4E86\u4E00\u500BXML\u6A21\u5F0F\u3002 \u8A31\u591A\u5DF2\u77E5\u7684\u6587\u5B57\u7DE8\u8F2F\u5668\u90FD\u901A\u904EXML\u5916\u639B\u7A0B\u5F0F\u652F\u63F4XML\u6A21\u5F0F\u9A57\u8B49\uFF0C\u4F8B\u5982VS code\u3001notepad++\u3001\u6216Emacs\u3001Visual Studio\u3002 \u901A\u5E38\u5EFA\u8B70\u5728\u7DE8\u8F2F\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370\u6642\u4F7F\u7528TouchGFX Designer\uFF0C\u4EE5\u907F\u514D\u5B57\u9AD4\u6392\u5370\u7684\u4E0D\u4E00\u81F4\u548C\u7FFB\u8B6F\u7F3A\u5931\uFF0C\u9019\u662FXML\u6A21\u5F0F\u7121\u6CD5\u9A57\u8B49\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u652F\u63F4\u5728TouchGFX Designer\u4E4B\u5916\u9032\u884C\u6587\u5B57\u7FFB\u8B6F\uFF08\u4F8B\u5982\u4F7F\u7528\u5916\u90E8\u7FFB\u8B6F\u5DE5\u5177\u9032\u884C\u7FFB\u8B6F\uFF09\uFF0C\u6587\u5B57\u8F49\u63DB\u5668\u73FE\u5728\u914D\u6709\u65B0\u7684\u7368\u7ACB\u5F0F\u5DE5\u5177\uFF0C\u5141\u8A31\u5F9E\u6587\u5B57\u8CC7\u6599\u5EAB\u532F\u51FA\u6587\u5B57\u7FFB\u8B6F\u5230Excel\u8A66\u7B97\u8868\u3002 \u8A72Excel\u8868\u683C\u53EF\u4EE5\u8207\u5916\u90E8\u7FFB\u8B6F\u5DE5\u5177\u5171\u7528\u3002 \u7576\u7FFB\u8B6F\u66F4\u65B0\u5F8C\uFF0C\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684\u5DE5\u5177\u5C07Excel\u8A66\u7B97\u8868\u91CD\u65B0\u5C0E\u5165\u6587\u5B57\u8CC7\u6599\u5EAB\u3002 \u8A73\u7D30\u77AD\u89E3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#translations"
  }), `\u7FFB\u8B6F`), `\u76F8\u95DC\u4E8B\u5B9C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u9700\u7372\u53D6\u95DC\u65BC\u5982\u4F55\u5275\u5EFA\u548C\u7DE8\u8F2F\u5B57\u9AD4\u6392\u5370\u3001\u6587\u5B57\u3001\u7FFB\u8B6F\u6A94\u548C\u8A9E\u8A00\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u8ACB\u8F49\u81F3", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/texts-view",
    mdxType: "Link"
  }, "\u6587\u5B57\u8996\u5716")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-text-converter"
  }), `\u6587\u5B57\u8F49\u63DB\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u8F49\u63DB\u5668\u662F\u5C07\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u6587\u5B57\u8CC7\u8A0A\u8F49\u63DB\u70BATouchGFX\u61C9\u7528\u4F7F\u7528\u7684\u5167\u90E8C++\u683C\u5F0F\u7684\u5DE5\u5177\u3002 \u8A72\u5DE5\u5177\u662F\u69CB\u5EFA\u5DE5\u5177\u93C8\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u90E8\u5206\uFF0C\u5C07\u5728\u69CB\u5EFA\u61C9\u7528\u6642\u81EA\u52D5\u57F7\u884C\u3002 \u53EA\u6709\u5728\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u7FFB\u8B6F\u6216\u6587\u5B57\u5C6C\u6027\u88AB\u4FEE\u6539\u6216\u6DFB\u52A0\u4E86\u65B0\u7684\u6587\u5B57\u6216\u7FFB\u8B6F\u4E4B\u5F8C\uFF0C\u6587\u5B57\u8F49\u63DB\u5668\u624D\u6703\u751F\u6210\u65B0\u7684C++\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-converter-4.18.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u6587\u5B57\u8F49\u63DB\u5668\u7684\u8F38\u51FA\u76EE\u9304\u70BAgenerated/texts/\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u8F49\u63DB\u5668\u5C07\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u6240\u6709\u6307\u5B9A\u6587\u5B57\u8F49\u63DB\u70BATouchGFX\u4F7F\u7528\u7684\u6587\u5B57\u683C\u5F0F\u3002 \u683C\u5F0F\u88AB\u5C01\u88DD\u6210\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedText`), `\u7684\u5C0D\u8C61\u3002 TouchGFX\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedText`), `\u662F\u6587\u5B57\u5167\u5BB9\u672C\u8EAB\u8207\u6587\u5B57\u5B57\u9AD4\u6392\u5370\u7684\u7D44\u5408\u5BE6\u9AD4\u3002 \u5B57\u9AD4\u6392\u5370\u5305\u542B\u6587\u5B57\u7684\u5B57\u9AD4\u548C\u5B57\u578B\u5927\u5C0F\uFF0C\u4EE5\u53CA\u5B57\u9AD4\u5B57\u5F62\u6297\u92F8\u9F52\u6642\u4F7F\u7528\u7684\u6BCF\u4E00\u50CF\u7D20\u4F4D\u5143\u6578\uFF08bpp\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u8F49\u63DB\u5668\u751F\u6210\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/texts/include/texts/TextKeysAndLanguages.hpp`), `\u7684\u6587\u4EF6\u3002 \u6B64\u6A94\u5305\u542B\u5F15\u7528\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u6240\u6709\u6587\u5B57\u7684\u679A\u8209`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TEXTS`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0C\u679A\u8209\u4E2D\u7684\u6240\u6709\u689D\u76EE\u5747\u751F\u6210\u81EA\u6587\u5B57\u8CC7\u6599\u5EAB\u6BCF\u500B\u6587\u5B57\u7BC0\u9EDE\u4E2D\u898F\u5B9A\u7684ID\uFF0C\u4F46\u5177\u6709\u524D\u7F6E\u7684T_\u4E26\u8F49\u63DB\u6210\u5927\u5BEB\u5B57\u6BCD\u3002 \u61C9\u7528\u4E2D\u4F7F\u7528\u9019\u4E9B\u679A\u8209\u503C\u521D\u59CB\u5316TypedText\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextKeysAndLanguages.hpp`), `\u9084\u5305\u542B\u679A\u8209`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LANGUAGES`), `\uFF0C\u5B83\u6307\u5B9A\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u73FE\u6709\u7684\u6240\u6709\u8A9E\u8A00\u3002 \u547D\u540D\u8207\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u8A9E\u8A00\u5217\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `\u7FFB\u8B6F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u7C21\u8981\u4ECB\u7D39\u532F\u51FA\u548C\u5C0E\u5165\u6587\u5B57\u7FFB\u8B6F\u6642\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8003\u616E\u9019\u6A23\u4E00\u500B\u5834\u666F\uFF1A\u958B\u767C\u4EBA\u54E1\u5275\u5EFA\u4E86\u4E00\u500B\u5305\u542B\u6587\u5B57\u7684\u61C9\u7528\u7A0B\u5F0F\uFF0C\u9019\u4E9B\u6587\u5B57\u9700\u8981\u7FFB\u8B6F\u6210\u591A\u7A2E\u4E0D\u540C\u7684\u8A9E\u8A00\u3002 \u958B\u767C\u4EBA\u54E1\u4F7F\u7528\u5916\u90E8\u7FFB\u8B6F\u5DE5\u5177\uFF0C\u9700\u8981\u532F\u51FA\u6587\u5B57\uFF0C\u7136\u5F8C\u767C\u9001\u7D66\u7FFB\u8B6F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u532F\u51FA\u6587\u5B57\uFF0C\u958B\u767C\u4EBA\u54E1\u4F7F\u7528\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/tools/textconvert/translations.rb`), `\u7684\u65B0\u5DE5\u5177\u3002 \u8A72\u5DE5\u5177\u53EF\u4EE5\u5728TouchGFX\u74B0\u5883\u4E2D\u904B\u884C\u3002 \u904B\u884C\u4E0D\u5E36\u4EFB\u4F55\u53C3\u6578\u7684\u5DE5\u5177\uFF0C\u5C07\u5217\u5370\u4EE5\u4E0B\u8AAC\u660E\u6587\u5B57\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb
\u4F7F\u7528Excel\u7B49\u5DE5\u5177\u532F\u51FA\u548C\u5C0E\u5165\u6587\u5B57\u8CC7\u6599\u5EAB\uFF0C\u4EE5\u9032\u884C\u7FFB\u8B6F

\u7528\u6CD5\uFF1Atranslations.rb {export|import} assets/texts/texts.xml translations.xlsx [language]*

\u532F\u51FA\uFF1A\u5C07\u5275\u5EFA\u201Ctranslations.xlsx\u201D \uFF0C\u65B9\u6CD5\u662F
      \u5F9E\u7D66\u5B9A\u7684assets/texts/texts.xml\u63D0\u53D6\u6240\u6709\u8A9E\u8A00\u7684\u6587\u5B57

\u5C0E\u5165\uFF1A \u5C07\u6587\u5B57\u7FFB\u8B6F\u5F9E\u201Ctranslations.xlsx\u201D \u5408\u4F75\u5230\u7D66\u5B9A\u7684assets/texts/texts.xml\u3002 \u53EA\u5C0E\u5165\u5BE6\u969B\u6587\u5B57
        \u4E0D\u5C0E\u5165\u5C0D\u9F4A\u548C\u6587\u5B57\u65B9\u5411\u3002

\u5982\u679C\u672A\u6307\u5B9A\u8A9E\u8A00\uFF0C\u5C07\u8655\u7406\u6240\u6709\u8A9E\u8A00\uFF0C\u5426\u5247\u53EA\u5C0E\u5165/\u532F\u51FA\u6307\u5B9A\u7684\u8A9E\u8A00
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u532F\u51FA\u6240\u6709\u8A9E\u8A00\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb export assets/texts/texts.xml translations.xlsx
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u532F\u51FA\u6307\u5B9A\u8A9E\u8A00\uFF0C\u4F8B\u5982\u82F1\u8A9E\u3001\u6CD5\u8A9E\u548C\u963F\u62C9\u4F2F\u8A9E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb export assets/texts/texts.xml translations.xlsx English French Arabic
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0CExcel\u8A66\u7B97\u8868 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/tools/textconvert/translations.xlsx `), `\u53EF\u4EE5\u8207\u7FFB\u8B6F\u5DE5\u5177\u5171\u7528\uFF0C\u8ACB\u53C3\u898B\u4E0B\u9762\u7684\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-empty-translations.png",
    mdxType: "Figure"
  }, "Excel\u8A66\u7B97\u8868 - \u7A7A\u767D\u7684\u7FFB\u8B6F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8A9E\u8A00\u5FC5\u9808\u6DFB\u52A0\u5728TouchGFX\u8A2D\u8A08\u5668\u4E2D\uFF0C\u800C\u4E0D\u662FExcel\u8A66\u7B97\u8868\u4E2D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5B57\u9AD4\u6392\u5370\u3001\u5C0D\u9F4A\u548C\u65B9\u5411\u5FC5\u9808\u5728TouchGFX Designer\uFF08\u800C\u4E0D\u662FExcel\u8A66\u7B97\u8868\uFF09\u4E2D\u8A2D\u7F6E\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u53EA\u6709\u5305\u542B\u7FFB\u8B6F\u7684\u5132\u5B58\u683C\u624D\u6703\u89E3\u9396\uFF0C\u4EE5\u4FBF\u5728Excel\u8A66\u7B97\u8868\u4E2D\u9032\u884C\u7DE8\u8F2F\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u4E2D\u5C0D\u61C9\u7684\u6587\u5B57\u8996\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-empty-translations.png",
    mdxType: "Figure"
  }, "\u6587\u5B57\u8996\u5716 - \u7A7A\u767D\u7684\u7FFB\u8B6F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u7FFB\u8B6F\u5B8C\u6210\u4E26\u8FD4\u56DE\u7D66\u958B\u767C\u4EBA\u54E1\u6642\uFF0C\u53EF\u4EE5\u5C07\u5B83\u5011\u5C0E\u5165\u6587\u5B57\u8CC7\u6599\u5EAB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-updated-translations.png",
    mdxType: "Figure"
  }, "Excel\u8A66\u7B97\u8868 - \u66F4\u65B0\u5F8C\u7684\u7FFB\u8B6F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u5C0E\u5165\u6240\u6709\u8A9E\u8A00\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb import assets/texts/texts.xml translations.xlsx
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u5C0E\u5165\u6307\u5B9A\u8A9E\u8A00\uFF0C\u4F8B\u5982\u6CD5\u8A9E\u548C\u963F\u62C9\u4F2F\u8A9E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb import assets/texts/texts.xml translations.xlsx French Arabic
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u7FFB\u8B6F\u5DF2\u7D93\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-updated-translations.png",
    mdxType: "Figure"
  }, "\u6587\u5B57\u8996\u5716 - \u66F4\u65B0\u5F8C\u7684\u7FFB\u8B6F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "recommendations"
  }), `\u5EFA\u8B70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u532F\u51FA\u6587\u5B57\u7528\u65BC\u7FFB\u8B6F\uFF0C\u7136\u5F8C\u518D\u6B21\u5C0E\u5165\uFF0C\u61C9\u8A72\u5728\u6587\u5B57\u8CC7\u6599\u5EAB\u7684\u540C\u4E00\u57FA\u7DDA\u4E0A\u9032\u884C\uFF0C\u9019\u6A23\u53EF\u4EE5\u907F\u514D\u5C0E\u5165\u904E\u7A0B\u4E2D\u7684\u6F5B\u5728\u885D\u7A81\u3002 \u5982\u679C\u4F60\u4F7F\u7528\u7248\u672C\u63A7\u5236\u7CFB\u7D71\uFF08\u4F8B\u5982Git\uFF09\uFF0C\u5EFA\u8B70\u5728\u532F\u51FA\u4E4B\u524D\u5275\u5EFA\u4E00\u500B\u5206\u652F\uFF0C\u7136\u5F8C\u5728\u532F\u51FA\u5B8C\u6210\u5F8C\u7528\u6587\u5B57\u7FFB\u8B6F\u66F4\u65B0\u8A72\u5206\u652F\uFF0C\u6700\u5F8C\u5C07\u8A72\u5206\u652F\u5408\u4F75\u56DE\u4E3B\u679D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u986F\u793A\u4E86\u4E00\u500B\u7BC4\u4F8B\uFF0C\u7BC4\u4F8B\u4E2D\u5C07\u963F\u62C9\u4F2F\u8A9E\u548C\u6CD5\u8A9E\u7FFB\u8B6F\u5C0E\u5165\u5230\u7FFB\u8B6F\u5206\u652F\uFF0C\u7136\u5F8C\u5408\u4F75\u56DE\u4E3B\u679D\u3002 \u7BC4\u4F8B\u9084\u5C55\u793A\u4E86\uFF1A\u5728\u7FFB\u8B6F\u5206\u652F\u4E0A\u9032\u884C\u5DE5\u4F5C\u7684\u540C\u6642\uFF0C\u5C0D\u4E3B\u679D\u4E0A\u7684\u6587\u5B57\u8CC7\u6599\u5EAB\u9032\u884C\u66F4\u6539\u6642\u61C9\u8A72\u5C0F\u5FC3\uFF0C\u56E0\u70BA\u6703\u51FA\u73FE\u5408\u4F75\u885D\u7A81\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/branch-example.png",
    mdxType: "Figure"
  }, "\u5206\u652F\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5408\u4F75\u885D\u7A81\u6703\u5728\u9019\u4E9B\u60C5\u6CC1\u4E0B\u51FA\u73FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E3B\u679D\u4E0A\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u6587\u5B57ID\u6642`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u4E3B\u679D\u4E0A\u7684\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u6DFB\u52A0\u6587\u5B57ID\u6642`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0D\u4E3B\u679D\u4E0A\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u6587\u5B57ID\u9032\u884C\u91CD\u547D\u540D\u6642`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-font-converter"
  }), `\u6587\u5B57\u8F49\u63DB\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u8F49\u63DB\u5668\u662F\u5C07\u5B57\u9AD4\u6A94\u4E2D\u7684\u8CC7\u8A0A\u8207\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u7684\u8CC7\u8A0A\u9032\u884C\u7D44\u5408\u4E26\u751F\u6210\u61C9\u7528\u9700\u8981\u7684\u5B57\u5143\u7684\u5DE5\u5177\u3002 \u8F38\u51FA\u683C\u5F0F\u662FTouchGFX\u61C9\u7528\u4F7F\u7528\u7684\u5167\u90E8C++\u683C\u5F0F\u3002 \u8A72\u5DE5\u5177\u662F\u69CB\u5EFA\u5DE5\u5177\u93C8\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u90E8\u5206\uFF0C\u5C07\u5728\u69CB\u5EFA\u6A21\u64EC\u5668\u6642\u81EA\u52D5\u57F7\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/font-converter-4.18.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u8F49\u63DB\u5668\u63A5\u53D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TrueType (.ttf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `OpenType (.otf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Glyph Bitmap Distribution Format (.bdf).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5C0D\u65BC\u5B57\u5F62\u9EDE\u9663\u5716\u5206\u4F48\u683C\u5F0F\u5B57\u9AD4\uFF08.bdf\uFF09\uFF0C\u4E26\u4E0D\u80FD\u6E32\u67D3\u5B57\u9AD4\u7684\u6240\u6709\u5B57\u578B\u5927\u5C0F\u3002 \u5982\u679C\u5B57\u9AD4\u6392\u5370\u7D19\u4E2D\u7684\u7D66\u5B9A\u5B57\u578B\u5927\u5C0F\u8207\u7D66\u5B9A\u5B57\u9AD4\u4E0D\u5339\u914D\uFF0C\u5B57\u9AD4\u8F49\u63DB\u5DE5\u5177\u5C07\u56DE\u5831\u652F\u63F4\u7684\u5B57\u578B\u5927\u5C0F\u3002 \u5C07\u5B57\u9AD4\u6392\u5370\u7D19\u4E2D\u7684\u5B57\u578B\u5927\u5C0F\u66F4\u65B0\u70BA\u652F\u63F4\u7684\u5B57\u578B\u5927\u5C0F\u4E4B\u4E00\uFF0C\u5373\u53EF\u89E3\u6C7A\u554F\u984C\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EA\u9700\u5C07\u5B57\u9AD4\u653E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts/`), `\u8CC7\u6599\u593E\u4E2D\uFF0CTouchGFX Designer\u5C31\u53EF\u4EE5\u5F15\u7528\u8A72\u5B57\u9AD4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uFF08\u5982\u679C\u5728TouchGFX Designer\u904B\u884C\u6642\u6DFB\u52A0\u5B57\u9AD4\uFF0C\u5FC5\u9808\u91CD\u555F\u8EDF\u9AD4\u624D\u80FD\u66F4\u65B0\u53EF\u7528\u5B57\u9AD4\uFF09`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u9084\u53EF\u4EE5\u4F7F\u7528Windows\u4F5C\u696D\u7CFB\u7D71\u4E2D\u5B89\u88DD\u7684\u5B57\u9AD4\uFF0C\u9078\u64C7\u9019\u4E9B\u5B57\u9AD4\u4E2D\u7684\u4EFB\u4F55\u5B57\u9AD4\uFF0C\u5B83\u5011\u5C31\u6703\u88AB\u81EA\u52D5\u6DFB\u52A0\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts/`), `\u8CC7\u6599\u593E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u8F49\u63DB\u5668\u4F7F\u7528\u63D0\u4F9B\u7684\u5B57\u9AD4\u4E2D\u7684\u5B57\u8DDD\u8ABF\u6574\u8CC7\u8A0A\u9032\u884C\u5B57\u8DDD\u8ABF\u6574\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u4F7F\u7528TouchGFX\u4E26\u4E0D\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u63D0\u4F9B\u4EFB\u4F55TrueType\u3001OpenType\u6216Bitmap\u5B57\u9AD4\u7684\u5546\u696D\u4F7F\u7528\u8A31\u53EF\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5B57\u9AD4\u8F49\u63DB\u5668\u7684\u8F38\u51FA\u76EE\u9304\u70BAgenerated/fonts/\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "character-memory-optimization"
  }), `\u5B57\u5143\u5B58\u5132\u7A7A\u9593\u512A\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u70BA\u6E1B\u5C11\u5B58\u5132\u7A7A\u9593\u6D88\u8017\u800C\u9032\u884C\u4E86\u512A\u5316\u3002 \u901A\u904E\u5206\u6790\u5C0D\u7279\u5B9A\u5B57\u9AD4\u6392\u5370\u4F7F\u7528\u7684\u5B57\u5143\uFF0C\u5C07\u751F\u6210\u7684\u5B57\u5143\uFF08\u5167\u90E8C++\u683C\u5F0F\uFF09\u6578\u91CF\u6700\u5927\u9650\u5EA6\u58D3\u7E2E\u81F3\u61C9\u7528\u5BE6\u969B\u4F7F\u7528\u7684\u5B57\u5143\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u5916\uFF0C\u901A\u904E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#text-configuration"
  }), `\u6587\u5B57\u914D\u7F6E`), `\u4E2D\u555F\u7528\u91CD\u65B0\u6620\u5C04\u6587\u5B57\u7684\u9078\u9805\uFF0C\u58D3\u7E2E\u4F7F\u7528\u5E38\u7528\u5C3E\u78BC\u7684\u6587\u5B57\uFF0C\u5F9E\u800C\u512A\u5316\u6587\u5B57\u5B58\u5132\u7A7A\u9593\u6D88\u8017\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wildcards"
  }), `\u842C\u7528\u5B57\u5143`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5C07\u57F7\u884C\u6642\u9593\u503C\u4F5C\u70BA\u6587\u5B57\u7684\u4E00\u90E8\u5206\u4F86\u4F7F\u7528\u3002 \u9019\u53EF\u4EE5\u901A\u904E\u5728\u6587\u5B57\u4E2D\u4F7F\u7528\u842C\u7528\u5B57\u5143\u4F86\u5BE6\u73FE\u3002 \u6309\u7D66\u5B9A\u683C\u5F0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<*>`), `\u6307\u5B9A\u842C\u7528\u5B57\u5143\uFF0C\u5176\u4E2D\u7684*\u8868\u793A\u4E0D\u6703\u5305\u542B\u5728\u7D50\u679C\u6587\u5B57\u4E2D\u7684\u53EF\u9078\u8F14\u52A9\u6587\u5B57\u3002 \u4E00\u500B\u6587\u5B57\u4E2D\u53EF\u4EE5\u6709\u81F3\u591A2\u500B\u842C\u7528\u5B57\u5143\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D66\u5B9A\u6587\u5B57\u7684\u6240\u6709\u7FFB\u8B6F\u6A94\u5FC5\u9808\u5305\u542B\u76F8\u540C\u6578\u91CF\u7684\u842C\u7528\u5B57\u5143\u3002 \u5728\u57F7\u884C\u6642\u9593\u5728\u61C9\u7528C++\u7A0B\u5F0F\u78BC\u4E2D\u63D2\u5165\u842C\u7528\u5B57\u5143\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u842C\u7528\u5B57\u5143\u4F7F\u7528\u7BC4\u4F8B\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6EAB\u5EA6\u70BA `, `<`, `insert_temperature`, `>`, `\xB0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u6CE8\u610F\u7684\u4E00\u500B\u7D30\u7BC0\u662F\uFF0C\u7531\u65BC\u5B57\u5143\u5B58\u5132\u7A7A\u9593\u512A\u5316\uFF08\u53C3\u898B\u4E0A\u4E00\u7BC0\uFF09\uFF0C\u53EA\u70BA\u7279\u5B9A\u5B57\u9AD4\u6392\u5370\u751F\u6210\u4E86\u63A1\u7528\u6B64\u5B57\u9AD4\u6392\u5370\u7684\u6587\u5B57\u4E2D\u4F7F\u7528\u7684\u5B57\u5143\u3002 \u70BA\u5F37\u5236\u5B57\u9AD4\u751F\u6210\u5668\u5305\u542B\u7279\u5B9A\u5B57\u5143\uFF0C\u60A8\u53EF\u4EE5\u5C0D\u6BCF\u7A2E\u5B57\u9AD4\u6392\u5370\u4F7F\u7528\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u842C\u7528\u5B57\u5143\u5B57\u5143`), `\u201D\u548C\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5B57\u5143\u7BC4\u570D`), `\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u4E0B\u9762\u9019\u6A23\u4F7F\u7528\u53CD\u659C\u7DDA\u8A18\u865F\u53EF\u4EE5\u907F\u514D\u842C\u7528\u5B57\u5143\u683C\u5F0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<*>`), `\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\\`, `<`, `not a wildcard\\`, `>`), `\u3002 \u9019\u6703\u5C0E\u81F4\u61C9\u7528\u4E2D\u4F7F\u7528\u539F\u7FA9\u6587\u5B57"`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `<`, `not a wildcard`, `>`), `" \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-wildcards-in-touchgfx-designer"
  }), `\u5728TouchGFX Designer\u4E2D\u4F7F\u7528\u842C\u7528\u5B57\u5143`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u4EE5\u5C07\u842C\u7528\u5B57\u5143\u6DFB\u52A0\u5230\u5E38\u898FTextArea\u3002 \u73FE\u5728\uFF0C\u5118\u7BA1TouchGFX\u4E2D\u751F\u6210\u7A0B\u5F0F\u78BC\u7684\u65B9\u5F0F\u4E26\u7121\u8B8A\u5316\uFF0C\u4F46\u6709\u6548\u5730\u8B93TextArea\u5C0F\u90E8\u4EF6\u8986\u84CB\u4E86\u4E4B\u524D\u88ABTextAreaWithOneWildcard/TextAreaWithTwoWildcards\u5C0F\u90E8\u4EF6\u8986\u84CB\u7684\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In TouchGFX Designer you can add Wildcards to TextAreas by simply clicking the '+' button `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Add Wildcard`), ` in properties for the selected TextArea. Click the corresponding '-' button to remove wildcards. \u4E00\u500B\u719F\u6089\u7684\u7BC4\u4F8B\u662F\u5C07\u6EAB\u5EA6\u8B80\u6578\u6DFB\u52A0\u5230TextArea\uFF0C\u53EF\u986F\u793A\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6EAB\u5EA6\u70BA \xB0`), `\u3002 \u9019\u7A2E\u60C5\u6CC1\u4E0B\u53EF\u80FD\u662F\u5BA4\u5916\u6EAB\u5EA6\u8B80\u6578\u3002 \u4E0B\u9762\u6211\u5011\u8981\u63D2\u5165\u4E00\u500B\u842C\u7528\u5B57\u5143\uFF0C\u4E0D\u50C5\u986F\u793A\u975C\u614B\u6578\u503C\uFF0C\u9084\u5C07\u6839\u64DA\u6EAB\u5EA6\u8B80\u6578\u9032\u884C\u66F4\u65B0\u3002 \u842C\u7528\u5B57\u5143\u6703\u88AB\u6DFB\u52A0\u5230\u6587\u5B57\u4E2D\u63D2\u5165\u9EDE\u6E38\u6A19\u7684\u7576\u524D\u4F4D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/adding-wild-card-to-text-area-4.17.png",
    mdxType: "Figure"
  }, "\u5C07\u842C\u7528\u5B57\u5143\u6DFB\u52A0\u5230Text Area\u5C0F\u90E8\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u5C6C\u6027\u4E2D\u7684\u6587\u5B57\u5C07\u986F\u793A\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6EAB\u5EA6\u70BA`, `<`, `value`, `>`, `\xB0`), `\u201D\uFF0C\u800C\u756B\u5E03\u4E0A\u7684\u6587\u5B57\u986F\u793A\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6EAB\u5EA6\u70BA\xB0`), `\u201D:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/temperature-wildcard-example.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u5E36\u842C\u7528\u5B57\u5143\u7684Text Area\u5C0F\u90E8\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u8A2D\u7F6E\u7279\u5B9A\u7684\u842C\u7528\u5B57\u5143\uFF0C\u60A8\u53EF\u4EE5\u9EDE\u64CA\u76F8\u61C9\u7684\u201C\u842C\u7528\u5B57\u5143\u201D\u6309\u9215\uFF08\u672C\u4F8B\u4E2D\u70BA\u842C\u7528\u5B57\u51431\uFF09\uFF0C\u5C31\u53EF\u4EE5\u7DE8\u8F2F\u525B\u624D\u6DFB\u52A0\u7684\u842C\u7528\u5B57\u5143\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u88E1\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u5982\u4F55\u66F4\u65B0\u842C\u7528\u5B57\u5143\u3002 \u8981\u9EBC\u901A\u904E\u9810\u5B9A\u7FA9\u8CC7\u6E90\u6587\u5B57\uFF0C\u8981\u9EBC\u901A\u904E\u52D5\u614B\u57F7\u884C\u6642\u9593\u5275\u5EFA\u7684\u6587\u5B57\u3002 \u5728\u5169\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u90FD\u53EF\u4EE5\u5728\u57F7\u884C\u6642\u9593\u66F4\u65B0\u6587\u5B57\u3002 To use an auto-generated text, click the '+' `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Create auto-generated text`), ` or select an existing text. Use a wildcard buffer if dynamic text is needed. Such a buffer is created by selecting the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Use wildcard Buffer`), ` check mark. \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u9084\u9700\u8981\u6307\u5B9A\u7DE9\u885D\u5340\u5927\u5C0F\uFF08\u5B57\u5143\u6578\uFF09\u3002 \u5982\u679C\u60F3\u8981\u9AD8\u6548\u5730\u5229\u7528\u5B58\u5132\u7A7A\u9593\uFF0C\u9700\u4F7F\u6307\u5B9A\u5927\u5C0F\u76E1\u53EF\u80FD\u63A5\u8FD1\u5BE6\u969B\u9700\u8981\u7684\u6587\u5B57\u5927\u5C0F\u3002 \u8A18\u4F4F\uFF0C\u70BA\u5B57\u4E32\u7D50\u675F\u7B26\uFF08\u201C\\0\u201D\uFF09\u589E\u52A0\u4E00\u500B\u984D\u5916\u7A7A\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-add-auto-generated-text.png",
    mdxType: "Figure"
  }, "Add auto-generated text to wildcard in TouchGFX Designer"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can also set an initial value for the Wildcard, enabling you to see how the final TextArea could look with a temperature reading:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-setup-in-touchgfx-deisgner-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u842C\u7528\u5B57\u5143\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-wildcards-in-user-code"
  }), `\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u842C\u7528\u5B57\u5143`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9084\u53EF\u901A\u904E\u7528\u6236\u7A0B\u5F0F\u78BC\u6DFB\u52A0\u548C\u66F4\u65B0\u842C\u7528\u5B57\u5143\uFF0C\u5982\u4E0B\u9762\u7684\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\u6240\u793A\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Unicode::UnicodeChar`), `\u9663\u5217\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u9032\u884C\u7BA1\u7406\u548C\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `\u6587\u5B57\u653E\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u6240\u6709TouchGFX\u5C0F\u90E8\u4EF6\uFF0C\u901A\u904E\u6307\u5B9A\u4F4D\u7F6E\uFF08X\u548CY\uFF09\u548C\u5C3A\u5BF8\uFF08\u5BEC\u548C\u9AD8\uFF09\u5C07TextArea\u653E\u7F6E\u5230\u87A2\u5E55\u4E0A\u3002 \u53EF\u4EE5\u5728TouchGFX Designer\u7684\u5C0F\u90E8\u4EF6\u5C6C\u6027\u4E2D\u8F15\u9B06\u505A\u5230\u9019\u4E00\u9EDE\uFF0C\u4F46\u662F\u8207TouchGFX\u6E32\u67D3\u6587\u5B57\u76F8\u6BD4\uFF0CTouchGFX Designer\u4E2D\u7684\u6587\u5B57\u6E32\u67D3\u4E26\u975E\u7E3D\u662F100%\u6E96\u78BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u9084\u63CF\u8FF0\u4E86\u5728\u8655\u7406\u6587\u5B57\u6642\u8981\u6CE8\u610F\u7684\u66F4\u591A\u7D30\u7BC0\u548C\u53EF\u80FD\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "alignment"
  }), `\u5C0D\u9F4A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u7167\u70BA\u6587\u5B57\u8CC7\u6599\u5EAB\u4E2D\u9078\u4E2D\u6587\u5B57\u689D\u76EE\u6307\u5B9A\u7684\u5C0D\u9F4A\u65B9\u5F0F\u5C0D\u9F4ATextArea\u4E2D\u7684\u6587\u5B57\u3002 \u6587\u5B57\u5C0D\u9F4A\u662F\u5C31TextArea\u7684\u5340\u57DF\u800C\u8A00\u3002 \u5728\u4E0B\u9762\u7684\u87A2\u5E55\u622A\u5716\u4E2D\uFF0CTextArea\u7684\u5340\u57DFhighlighte\u986F\u793A\u70BA\u85CD\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-left-align.png",
    mdxType: "Figure"
  }, "\u5DE6\u5C0D\u9F4A\u6587\u5B57"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-center-align.png",
    mdxType: "Figure"
  }, "\u4E2D\u5FC3\u5C0D\u9F4A\u6587\u5B57"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-right-align.png",
    mdxType: "Figure"
  }, "\u53F3\u5C0D\u9F4A\u6587\u5B57"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u4E9B\u8A2D\u7F6E\u53EF\u4EE5\u5728TouchGFX Designer\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `\u6587\u5B57\u8996\u5716`), `\u4E2D\u9032\u884C\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-correct-width-and-height-of-a-textarea"
  }), `\u8A2D\u7F6ETextArea\u7684\u6B63\u78BA\u5BEC\u5EA6\u548C\u9AD8\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u80FD\u5920\u6839\u64DA\u76EE\u524D\u9078\u64C7\u7684\u6587\u5B57\u8ABF\u6574\u5176\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002 \u9019\u662F\u901A\u904E\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::resizeToCurrentText()`), `\u65B9\u6CD5\u4F86\u5B8C\u6210\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "`resizeToCurrentText()`\u6703\u88AB\u81EA\u52D5\u547C\u53EB\uFF0C\u524D\u63D0\u662F\u5728\u7522\u751F\u5BE6\u9AD4\u5177\u6709\u65B0TypedText\u7684TextArea\u6642\u6C92\u6709\u8A2D\u7F6E\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528\u4E2D\u5FC3/\u53F3\u5C0D\u9F4A\u6587\u5B57\u6642\uFF0C\u901A\u5E38\u4E0D\u5E0C\u671B\u8ABF\u6574\u5BEC\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u56E0\u70BA\u6587\u5B57\u9700\u8981\u5728\u56FA\u5B9A\u5340\u57DF\u5167\u5BE6\u73FE\u4E2D\u5FC3/\u53F3\u5C0D\u9F4A\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u53EF\u4EE5\u624B\u52D5\u8A2D\u7F6E\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002 \u9019\u53EF\u4EE5\u901A\u904E\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setPosition(x, y, width, height)`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setWidth(width)`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setHeight(height)`), `\u4F86\u5B8C\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5BEC\u5EA6\u6216\u9AD8\u5EA6\u904E\u5C0F\uFF0C\u7121\u6CD5\u5BB9\u7D0D\u6587\u5B57\uFF0C\u5C07\u6309\u7167\u5340\u57DF\u526A\u5207\u6587\u5B57\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-cutoff.png",
    mdxType: "Figure"
  }, "\u88ABTextArea\u5C0F\u90E8\u4EF6\u908A\u754C\u6846\u526A\u5207\u6389\u7684\u6587\u5B57"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-correct-x-and-y-for-a-textarea"
  }), `\u70BATextArea\u8A2D\u7F6E\u6B63\u78BA\u7684X\u548CY\u503C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u5C07TextArea\u653E\u5728\u6B63\u78BA\u7684X\u548CY\u4F4D\u7F6E\uFF0C\u9700\u6CE8\u610F\u4F7F\u7528\u7684\u5B57\u9AD4\u7684\u5B57\u5143\u4E0A\u65B9\u6703\u6709\u4E00\u4E9B\u984D\u5916\u7684\u9593\u9694\uFF0C\u53EF\u4EE5\u5BB9\u7D0D\u5927\u5B57\u5143\u3002 \u7531\u65BC\u4E0D\u77E5\u9053\u6587\u5B57\u4E0A\u65B9\u7684\u5177\u9AD4\u9593\u9694\uFF0C\u4F7F\u5F97\u6839\u64DA\u5DE6\u4E0A\u89D2\u7684Y\u4F4D\u7F6E\u653E\u7F6ETextArea\u8B8A\u5F97\u6709\u9EDE\u56F0\u96E3\u3002 \u653E\u7F6E\u6587\u5B57\u7684\u4E00\u7A2E\u65B9\u5F0F\u662F\u6307\u5B9A\u60A8\u8A8D\u70BA\u5B83\u61C9\u7576\u8655\u65BC\u7684\u4F4D\u7F6E\uFF0C\u7136\u5F8C\u901A\u904E\u5728\u6A21\u64EC\u5668\u4E2D\u6AA2\u67E5\u653E\u7F6E\u6548\u679C\u4F86\u9032\u884C\u5FAE\u8ABF\u3002 \u9019\u901A\u5E38\u662F\u4E00\u9805\u5341\u5206\u7C21\u55AE\u7684\u4EFB\u52D9\uFF0C\u4F46\u5982\u679C\u4E4B\u5F8C\u66F4\u6539\u5B57\u9AD4\u6216\u5B57\u578B\u5927\u5C0F\uFF0C\u5247\u9700\u8981\u91CD\u65B0\u57F7\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u7A2E\u66F4\u7A69\u5065\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u6587\u5B57\u57FA\u7DDA\u3002 \u57FA\u7DDA\u662F\u4E00\u689D\u7DDA\uFF0C\u5927\u591A\u6578\u5B57\u6BCD\u201C\u5750\u201D\u5728\u57FA\u7DDA\u4E0A\uFF0C\u800C\u4E0B\u884C\u5B57\u6BCD\uFF08\u50CFp\u548Cj\u9019\u6A23\u7684\u5B57\u5143\uFF09\u6703\u5EF6\u4F38\u5230\u57FA\u7DDA\u4E4B\u4E0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-baseline.png",
    mdxType: "Figure"
  }, "\u6587\u5B57\u57FA\u7DDA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u8A2D\u7F6E\u6587\u5B57\u57FA\u7DDA\uFF0C\u53EF\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setBaselineY(y)`), `\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setXBaselineY(x, y)`), `\u3002 \u5C0D\u65BC\u9019\u4E9B\u65B9\u6CD5\uFF0C\u4E0D\u6307\u5B9ATextArea\u7684\u5DE6\u4E0A\u89D2\uFF0C\u800C\u662F\u6307\u5B9A\u7B2C\u4E00\u500B\u6587\u5B57\u884C\u7684\u57FA\u7DDA\u3002 \u9019\u6703\u8003\u616E\u5B57\u578B\u5927\u5C0F\u548C\u9593\u8DDD\uFF0C\u4E26\u76F8\u61C9\u5730\u8A2D\u7F6ETextArea\u7684Y\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u901A\u904ETouchGFX Designer\u756B\u5E03\u53EF\u4EE5\u8F15\u9B06\u5730\u653E\u7F6ETextArea\u5C0F\u90E8\u4EF6\uFF0C\u56E0\u6B64TouchGFX Designer\u4E2D\u6C92\u6709\u57FA\u7DDA\u529F\u80FD\uFF0C\u53EA\u80FD\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u7531\u65BCsetBaselineY\u4F9D\u8CF4\u65BC\u5B57\u9AD4\uFF0CTextArea\u9700\u5728\u547C\u53EBsetBaselineY\u4E4B\u524D\u8A2D\u7F6E\u5176TypedText\u3002 \u53E6\u5916\u9084\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u5C07TextAreas TypedText\u4FEE\u6539\u70BA\u63A1\u7528\u5176\u4ED6\u5B57\u9AD4\u6216\u5B57\u578B\u5927\u5C0F\uFF0C\u5247\u9700\u8981\u518D\u6B21\u547C\u53EBsetBaselineY\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "automatic-wrapping-of-long-text-lines"
  }), `\u9577\u6587\u5B57\u7684\u81EA\u52D5\u63DB\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u6709\u6642\u9700\u8981\u5305\u542B\u6975\u9577\u7684\u6587\u5B57\u3002 \u9810\u8A2D\u60C5\u6CC1\u4E0B\uFF0C\u53EA\u9700\u5C07\u6B64\u985E\u6587\u5B57\u5BEB\u6210\u4E00\u884C\uFF0C\u4E26\u76F4\u63A5\u5C07\u8D85\u51FATextArea\u7684\u6240\u6709\u6587\u5B57\u526A\u5207\u6389\u3002 \u5982\u679C\u6587\u5B57\u61C9\u5728\u7A7A\u683C\u8655\u63DB\u884C\u4E26\u56DE\u6D41\u4EE5\u4FBF\u5F62\u6210\u591A\u884C\uFF0C\u53EA\u9700\u547C\u53EB\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myTextArea.setWideTextAction(WIDE_TEXT_WORDWRAP); // Default is WIDE_TEXT_NONE
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "available-wide-text-actions"
  }), `\u53EF\u7528\u5BEC\u6587\u5B57\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_NONE`), `\uFF1A\u53EA\u9700\u5F9E\u8D85\u51FATextArea\u5BEC\u5EA6\u7684\u4EFB\u4F55\u5B57\u5143\u7684\u4E2D\u9593\u5207\u5272\u6587\u5B57\uFF0C\u7121\u9700\u5176\u4ED6\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_WORDWRAP`), `: \u5728\u5B57\u4E4B\u9593\u63DB\u884C\uFF0C\u5728\u4EFB\u610F\u4F4D\u7F6E\u6DFB\u52A0\u7701\u7565\u865F\u201CVery long t...\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_WORDWRAP_ELLIPSIS_AFTER_SPACE`), `: \u5728\u5B57\u4E4B\u9593\u63DB\u884C\uFF0C\u53EA\u5728\u7A7A\u683C\u5F8C\u7684\u4EFB\u610F\u4F4D\u7F6E\u6DFB\u52A0\u7701\u7565\u865F\u201CVery long ...\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_CHARWRAP`), `\uFF1A\u5728\u4EFB\u610F\u5169\u500B\u5B57\u5143\u4E4B\u9593\u63DB\u884C\uFF0C\u6309\u7167\u4E2D\u6587\u4E2D\u7684\u7528\u6CD5\u5728\u4EFB\u610F\u4F4D\u7F6E\u6DFB\u52A0\u7701\u7565\u865F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_CHARWRAP_DOUBLE_ELLIPSIS`), `:\u5728\u4EFB\u610F\u5169\u500B\u5B57\u5143\u4E4B\u9593\u63DB\u884C\uFF0C\u6309\u7167\u4E2D\u6587\u4E2D\u7684\u7528\u6CD5\u5728\u4EFB\u610F\u4F4D\u7F6E\u6DFB\u52A0\u96D9\u7701\u7565\u865F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/namespacetouchgfx#ad7afabd7637aed4278f7e26434b860c7",
    mdxType: "Link"
  }, "WideTextAction\u679A\u8209\u7684API\u53C3\u8003")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u53EF\u80FD\u6703\u4F7FTextArea\u9700\u8981\u66F4\u591A\u5782\u76F4\u7A7A\u9593\u3002 \u53EF\u901A\u904E\u589E\u52A0TouchGFX Designer\u4E2DTextArea\u7684\u9AD8\u5EA6\u6216\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u7528\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u4F86\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myTextArea.setWidth(200);
myTextArea.resizeHeightToCurrentText(); // Will set height by wrapping text at 200px long lines
myTextArea.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6E96\u5099\u7E2E\u5C0F\u6587\u5B57\u5340\u7684\u5C3A\u5BF8\uFF0C\u8A18\u5F97\u5728\u8ABF\u6574`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` myTextArea`), ` \u5C3A\u5BF8\u4E4B\u524D\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myTextArea.invalidate()`), `\u3002 \u5982\u679C\u6C92\u6709\uFF0C\u7531\u65BC\u539F\u6587\u5B57\u5340\u672A\u88AB\u66F4\u5C0F\u7684\u65B0\u6587\u5B57\u5340\u8986\u84CB\uFF0C\u56E0\u6B64\u60A8\u6703\u770B\u5230\u5B83\u7684\u4E00\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "switching-language"
  }), `\u5207\u63DB\u8A9E\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u63F4\u591A\u8A9E\u8A00\u4ECB\u9762\u3002 \u53EF\u4EE5\u66F4\u6539\u4ECB\u9762\u7576\u524D\u4F7F\u7528\u7684\u8A9E\u8A00\uFF0C\u65B9\u6CD5\u662F\u547C\u53EB\u975C\u614B\u51FD\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Texts::setLanguage`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Texts::setLanguage(GB)\uFF1B
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u503C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `GB`), `\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LANGUAGES`), `\u679A\u8209\uFF08\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextKeysAndLanguages.hpp`), `\u4E2D\uFF09\u4E2D\uFF0C\u5982\u201C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#the-text-converter"
  }), `\u6587\u5B57\u8F49\u63DB\u5668`), `\u201D\u4E00\u7BC0\u4E2D\u7684\u7BC4\u4F8B\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u6B21\u547C\u53EB\u5F8C\uFF0C\u4F7F\u6240\u6709\u986F\u793A\u6587\u5B57\u7684\u5C0F\u90E8\u4EF6\u7121\u6548\uFF08\u6216\u7C21\u55AE\u5730\u4F7F\u6574\u500B\u87A2\u5E55\u7121\u6548\uFF09\uFF0C\u5B83\u5011\u5C07\u4EE5\u65B0\u9078\u64C7\u7684\u8A9E\u8A00\u986F\u793A\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u5728\u4E0D\u540C\u8A9E\u8A00\u4E4B\u9593\u5207\u63DB\uFF0C\u4EE5\u4FBF\u6E2C\u8A66\u6240\u6709\u7FFB\u8B6F\u6A94\u3002 \u53EF\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#general"
  }), `\u914D\u7F6E\u8996\u5716\u7684\u5E38\u898F\u90E8\u5206`), `\u57F7\u884C\u6B64\u64CD\u4F5C\u3002 \u9019\u88E1\u53EA\u9700\u66F4\u6539\u61C9\u7528\u7684\u555F\u52D5\u8A9E\u8A00\uFF0C\u65B9\u6CD5\u662F\u66F4\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u9078\u4E2D\u8A9E\u8A00`), `\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);