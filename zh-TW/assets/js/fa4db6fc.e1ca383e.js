"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9302],{

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

/***/ 97821:
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
  id: "font-cache",
  title: "\u5B57\u9AD4\u5FEB\u53D6"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/font-cache",
  "id": "development/ui-development/touchgfx-engine-features/font-cache",
  "title": "\u5B57\u9AD4\u5FEB\u53D6",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/font-cache",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "font-cache",
    "title": "\u5B57\u9AD4\u5FEB\u53D6"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E8C\u9032\u4F4D\u5B57\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  },
  "next": {
    "title": "\u4E8C\u9032\u4F4D\u7FFB\u8B6F",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  }
};
const assets = {};


const toc = [{
  value: "\u5B57\u9AD4\u5FEB\u53D6",
  id: "font-caching",
  level: 2
}, {
  value: "\u5728\u61C9\u7528\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u5B57\u9AD4\u5FEB\u53D6",
  id: "using-the-font-cache-in-application-code",
  level: 2
}, {
  value: "\u5FEB\u53D6\u5B57\u6BCD",
  id: "caching-letters",
  level: 2
}, {
  value: "Caching Ligatures",
  id: "caching-ligatures",
  level: 2
}, {
  value: "\u8A18\u61B6\u9AD4\u4F7F\u7528",
  id: "memory-usage",
  level: 2
}, {
  value: "\u5FEB\u53D6GSUB\u8868",
  id: "caching-gsub-tables",
  level: 2
}, {
  value: "\u5BE6\u73FE\u5B57\u9AD4\u6A94\u95B1\u8B80\u5668",
  id: "implementing-the-font-file-reader",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u63CF\u8FF0\u5982\u4F55\u4F7F\u7528\u5B57\u9AD4\u5FEB\u53D6\u8655\u7406TouchGFX\u4E2D\u7684\u4E8C\u9032\u4F4D\u5B57\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u5148\u95B1\u8B80`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-binary-fonts"
  }), `\u4E8C\u9032\u4F4D\u5B57\u9AD4`), `\u7684\u76F8\u95DC\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-caching"
  }), `\u5B57\u9AD4\u5FEB\u53D6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4\u9700\u8981\u5C07\u6574\u500B\u5B57\u9AD4\u8F09\u5165\u5230\u8A18\u61B6\u9AD4\u3002 \u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u5982\u679C\u5B57\u9AD4\u5F88\u5927\uFF0C\u5982\u5927\u5B57\u578B\u4E2D\u6587\u5B57\u9AD4\uFF0C\u5247\u9019\u6A23\u505A\u53EF\u80FD\u4E0D\u53EF\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u5FEB\u53D6\u4F7F\u61C9\u7528\u80FD\u5920\u53EA\u5F9E\u5916\u90E8\u8A18\u61B6\u9AD4\u8F09\u5165\u986F\u793A\u5B57\u4E32\u6240\u9700\u7684\u5B57\u6BCD\u3002 \u9019\u610F\u5473\u8457\u6574\u500B\u5B57\u9AD4\u7121\u9700\u99D0\u7559\u5728\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4\u6216RAM\u4E0A\uFF0C\u800C\u662F\u53EF\u4EE5\u4FDD\u5B58\u5728\u66F4\u5927\u7684\u6A94\u6848\u7CFB\u7D71\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u5716\u4E2D\uFF0C\u5167\u7DE8\u8B6F\u5B57\u9AD4Font2\u5DF2\u88AB\u5B57\u9AD4\u5FEB\u53D6\u66FF\u4EE3\u3002 \u7576TouchGFX\u4F7F\u7528Font2\u7E6A\u88FD\u6587\u5B57\u6642\uFF0C TouchGFX\u6703\u627E\u5230\u6307\u5411\u5B57\u9AD4\u8868\u4E2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CachedFont`), `\u7684\u6307\u6A19\u3002 \u6B64\u7279\u6B8A\u5B57\u9AD4\u5C07\u67E5\u627EFontCache\u7269\u4EF6\u4E2D\u7684\u5B57\u6BCD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u4F7F\u7528\u5FEB\u53D6\u5B57\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CachedFont\u8A2D\u7F6E\u4E86\u6307\u5411\u5167\u9023\u5B57\u9AD4\uFF08\u4E0A\u9762\u7684Font2\uFF09\u7684\u6307\u91DD\u3002 \u7576TouchGFX\u8981\u6C42CachedFont\u63D0\u4F9B\u7279\u6B8A\u5B57\u6BCD\u6642\uFF0CcachedFont\u5C07\u9996\u5148\u67E5\u627E\u5B83\u66FF\u4EE3\u7684\u666E\u901A\u5B57\u9AD4\uFF08Font2\uFF09\u3002 \u8A72\u5B57\u9AD4\u53EF\u80FD\u662F\u7A7A\u5B57\u9AD4\uFF0C\u4F46\u4E5F\u53EF\u80FD\u662F\u5305\u542B\u4E00\u4E9B\u5E38\u7528\u5B57\u6BCD\u7684\u201C\u666E\u901A\u201D\u5B57\u9AD4\u3002 \u5982\u679C\u5B57\u9AD4\u4E0D\u5305\u542B\u9700\u8981\u7684\u5B57\u6BCD\uFF0CFontCache\u5C07\u67E5\u627EFontCache\uFF0C\u4EE5\u4FBF\u78BA\u5B9A\u662F\u5426\u5DF2\u5F9E\u6A94\u6848\u7CFB\u7D71\u8F09\u5165\u4E86\u5B57\u6BCD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u7121\u9700\u5FEB\u53D6\u6B63\u5E38\u5B57\u9AD4\u4E2D\u5DF2\u6709\u7684\u5B57\u6BCD\uFF0C\u6B64\u539F\u5247\u9650\u5236\u4E86\u5FC5\u9808\u5FEB\u53D6\u7684\u5B57\u6BCD\u6578\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-the-font-cache-in-application-code"
  }), `\u5728\u61C9\u7528\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u5B57\u9AD4\u5FEB\u53D6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u9808\u5148\u5275\u5EFAFontCache\u3001\u8A18\u61B6\u9AD4\u7DE9\u885D\u5340\u548C\u6A94\u6848\u7CFB\u7D71\u95B1\u8B80\u5668\u7269\u4EF6\uFF0C\u7136\u5F8C\u61C9\u7528\u624D\u80FD\u5B89\u88DDCachedFont\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb
FontCache fontCache;
CachedFont cachedFont;  //Cached Font object
FileDataReader reader;  //Filesystem reader object
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FontCache\u5FC5\u9808\u9023\u7D50\u5230\u7DE9\u885D\u5340\u548C\u95B1\u8B80\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//setup the font cache with buffer and size; and file reader object
fontCache.setMemory(fontdata, 5120);
fontCache.setReader(&reader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u61C9\u7528\u53EF\u4EE5\u8A2D\u7F6E\u5B57\u9AD4\u5FEB\u53D6\uFF0C\u521D\u59CB\u5316CachedFont\u4E26\u5C07\u5B83\u50B3\u905E\u7D66TouchGFX\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u5FEB\u53D6\u9700\u8981\u7528TextId\u4F86\u521D\u59CB\u5316CachedFont\u7269\u4EF6\u3002 TextId\u7528\u65BC\u67E5\u627ECachedFont\u5FC5\u9808\u6307\u5411\u7684\u5B57\u9AD4\u3002 \u9019\u78BA\u4FDD\u60A8\u66FF\u63DB\u7684\u662F\u986F\u793A\u5668\u4E0A\u7684\u6587\u5B57\u4F7F\u7528\u7684\u5B57\u9AD4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//initialize the cachedFont object to the font used by T_SINGLEUSEID1
TypedText text = TypedText(T_SINGLEUSEID1);
fontCache.initializeCachedFont(text, &cachedFont);

//replace the linked in font in TouchGFX with cachedFont
TypedTextDatabase::setFont(DEFAULT, &cachedFont);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0A\u7A0B\u5F0F\u78BC\u53EF\u4EE5\u653E\u5728\u61C9\u7528\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u3002 \u5982\u679C\u5FEB\u53D6\u5B57\u9AD4\u53EA\u7528\u5728\u7279\u5B9A\u8996\u5716\u4E2D\uFF0C\u6B64\u8996\u5716\u53EF\u80FD\u662F\u63D2\u5165\u7A0B\u5F0F\u78BC\u7684\u7406\u60F3\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-letters"
  }), `\u5FEB\u53D6\u5B57\u6BCD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u5FEB\u53D6\u4ECD\u7136\u70BA\u7A7A\u3002 \u5FC5\u9808\u5148\u5F9E\u5B57\u9AD4\u5FEB\u53D6\u8B80\u53D6\u5B57\u6BCD\uFF0C\u7136\u5F8C\u624D\u80FD\u986F\u793A\u5B57\u6BCD\u3002 \u9019\u662F\u901A\u904E\u5C07unicodes\uFF08\u5B57\u4E32\uFF09\u9663\u5217\u50B3\u905E\u5230\u5B57\u9AD4\u5FEB\u53D6\u4F86\u5B8C\u6210\u7684\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u53EA\u5F9ET_SINGLEUSEID1\u50B3\u905E\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheString(text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u7DE9\u5B58\u5C07\u901A\u904E\u95B1\u8B80\u5668\u5C0D\u8C61\u8F09\u5165\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `str`), `\u9663\u5217\u4E2D\u627E\u5230\u7684\u5B57\u6BCD\u3002 \u8B80\u53D6\u7684unicodes\u5C07\u9023\u7D50\u5230TextId `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `text`), `\u53C3\u6578\u4F7F\u7528\u7684\u5B57\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u61C9\u7528\u8CA0\u8CAC\u914D\u7F6E\u8981\u5F9E\u6B63\u78BA\u7684\u6A94\u6848\u8F09\u5165\u7684\u95B1\u8B80\u5668\u7269\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-ligatures"
  }), `Caching Ligatures`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u5728\u986F\u793A\u524D\u5C07unicodes\u5E8F\u5217\u8F49\u63DB\u70BA\u5176\u4ED6unicodes\u7684\u8A9E\u8A00\uFF08\u5982\u963F\u62C9\u4F2F\u8A9E\uFF09\uFF0C\u4EE5\u4E0A\u65B9\u6CD5\u4E0D\u9069\u5408\u3002 \u5B83\u5FEB\u53D6\u539F\u59CBunicodes \u800C\u4E0D\u662F\u8F49\u63DB\u5F8C\u986F\u793A\u7684unicodes \u3002 \u6B64\u65B9\u6CD5\u5C07\u8F49\u63DB\u7D66\u5B9Aunicodes \u4E26\u5FEB\u53D6\u9700\u8981\u7684unicodes \uFF08\u8F49\u63DB\u5F8C\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1 after conversion
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheLigatures(cachedFont, text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-usage"
  }), `\u8A18\u61B6\u9AD4\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u5FEB\u53D6\u53EF\u4EE5\u8A08\u7B97\u7576\u524D\u8A18\u61B6\u9AD4\u4F7F\u7528\u91CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-gsub-tables"
  }), `\u5FEB\u53D6GSUB\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u6642\uFF0C\u4E00\u4E9B\u5B57\u9AD4\u4F7F\u7528GSUB\u8868\u3002 \u9019\u53EA\u662F\u6771\u65B9\u8A9E\u8A00\u7684\u5E7E\u7A2E\u5B57\u9AD4\uFF0C\u5982\u5929\u57CE\u9AD4\u5B57\u9AD4\u3002 GSUB\u8868\u4F7F\u5B57\u9AD4\u7CFB\u7D71\u80FD\u5920\u91CD\u65B0\u6392\u5217\u5B57\u5143\u4E26\u7528\u5B57\u5143\u5E8F\u5217\u4EE3\u66FF\u5176\u4ED6\u201C\u7D44\u5408\u201D\u5B57\u5143\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u9AD4\u5FEB\u53D6\u53EF\u4EE5\u5F9E\u6A94\u6848\u7CFB\u7D71\u8F09\u5165\u6B64GSUB\u8868\u3002 \u5982\u672A\u8F09\u5165\uFF0C\u5247\u6587\u5B57\u6E32\u67D3\u7CFB\u7D71\u7121GSUB\u8868\u53EF\u7528\uFF0C\u5C07\u7121\u6CD5\u6B63\u78BA\u986F\u793A\u5B57\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u521D\u59CB\u5316\u5FEB\u53D6\u5B57\u9AD4\u6642\uFF0C\u901A\u904E\u63D0\u4F9B\u984D\u5916\u53C3\u6578\u8F09\u5165GSUB\u8868\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `//initialize the cachedFont and load the GSUB table
text = TypedText(T_SINGLEUSEID1);
fontCache.initializeCachedFont(text, &cachedFont, true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "implementing-the-font-file-reader"
  }), `\u5BE6\u73FE\u5B57\u9AD4\u6A94\u95B1\u8B80\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E0D\u5305\u542B\u4EE5\u4E0A\u7BC4\u4F8B\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u7684FileDataReader\u985E\uFF0C\u5B83\u53D6\u6C7A\u65BC\u4F7F\u7528\u7684\u4F5C\u696D\u7CFB\u7D71\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u666E\u901A\u201Cstdio\u201D\u76F8\u5BB9\u6A94\u6848\u7CFB\u7D71\u7684\u4E00\u500B\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,13-13,17-17,21-21}",
    "{5-5,13-13,17-17,21-21}": true
  }), `class FileDataReader : public FontDataReader
{
public:
    virtual ~FileDataReader() { }
    virtual void open()
    {
        fp = fopen("Font_verdana_20_4bpp.bin", "rb");
        if (!fp)
        {
            touchgfx_printf("Unable to open font file!!!\\n");
        }
    }
    virtual void close()
    {
        fclose(fp);
    }
    virtual void setPosition(uint32_t position)
    {
        fseek(fp, position, SEEK_SET);
    }
    virtual void readData(void* out, uint32_t numberOfBytes)
    {
        fread(out, numberOfBytes, 1, fp);
    }
private:
    FILE* fp;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FileDataReader\u985E\u5F9EFontCache.hpp\u5BE6\u73FEFontDataReader\u4ECB\u9762\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FontCache.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-8}",
    "{5-8}": true
  }), `class FontDataReader
{
public:
    virtual ~FontDataReader() { }
    virtual void open() = 0;
    virtual void close() = 0;
    virtual void setPosition(uint32_t position) = 0;
    virtual void readData(void* out, uint32_t numberOfBytes) = 0;
};
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);