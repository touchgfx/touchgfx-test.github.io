"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2788],{

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

/***/ 64593:
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
  title: "\u5B57\u4F53\u7F13\u5B58"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/font-cache",
  "id": "development/ui-development/touchgfx-engine-features/font-cache",
  "title": "\u5B57\u4F53\u7F13\u5B58",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/font-cache",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/font-cache",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "font-cache",
    "title": "\u5B57\u4F53\u7F13\u5B58"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E8C\u8FDB\u5236\u5B57\u4F53",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  },
  "next": {
    "title": "\u4E8C\u8FDB\u5236\u7FFB\u8BD1",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  }
};
const assets = {};


const toc = [{
  value: "\u5B57\u4F53\u7F13\u5B58",
  id: "font-caching",
  level: 2
}, {
  value: "\u5728\u5E94\u7528\u4EE3\u7801\u4E2D\u4F7F\u7528\u5B57\u4F53\u7F13\u5B58",
  id: "using-the-font-cache-in-application-code",
  level: 2
}, {
  value: "\u7F13\u5B58\u5B57\u6BCD",
  id: "caching-letters",
  level: 2
}, {
  value: "\u7F13\u5B58\u8FDE\u5B57",
  id: "caching-ligatures",
  level: 2
}, {
  value: "\u5185\u5B58\u4F7F\u7528",
  id: "memory-usage",
  level: 2
}, {
  value: "\u7F13\u5B58GSUB\u8868",
  id: "caching-gsub-tables",
  level: 2
}, {
  value: "\u5B9E\u73B0\u5B57\u4F53\u6587\u4EF6\u9605\u8BFB\u5668",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u63CF\u8FF0\u5982\u4F55\u4F7F\u7528\u5B57\u4F53\u7F13\u5B58\u5904\u7406TouchGFX\u4E2D\u7684\u4E8C\u8FDB\u5236\u5B57\u4F53\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u5148\u9605\u8BFB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-binary-fonts"
  }), `\u4E8C\u8FDB\u5236\u5B57\u4F53`), `\u7684\u76F8\u5173\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-caching"
  }), `\u5B57\u4F53\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u4F7F\u7528\u4E8C\u8FDB\u5236\u5B57\u4F53\u9700\u8981\u5C06\u6574\u4E2A\u5B57\u4F53\u52A0\u8F7D\u5230\u5B58\u50A8\u5668\u3002 \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5B57\u4F53\u5F88\u5927\uFF0C\u5982\u5927\u5B57\u53F7\u4E2D\u6587\u5B57\u4F53\uFF0C\u5219\u8FD9\u6837\u505A\u53EF\u80FD\u4E0D\u53EF\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u7F13\u5B58\u4F7F\u5E94\u7528\u80FD\u591F\u4ECE\u5916\u90E8\u5B58\u50A8\u5668\u53EA\u80FD\u52A0\u8F7D\u663E\u793A\u5B57\u7B26\u4E32\u6240\u9700\u7684\u5B57\u6BCD\u3002 \u8FD9\u610F\u5473\u7740\u6574\u4E2A\u5B57\u4F53\u65E0\u9700\u4FDD\u5B58\u5230\u5728\u53EF\u5BFB\u5740\u95EA\u5B58\u6216RAM\u4E0A\uFF0C\u800C\u662F\u53EA\u9700\u4FDD\u5B58\u5728\u66F4\u5927\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u56FE\u4E2D\uFF0C\u5185\u7F16\u8BD1\u5B57\u4F53Font2\u5DF2\u88AB\u5B57\u4F53\u7F13\u5B58\u66FF\u4EE3\u3002 \u5F53TouchGFX\u4F7F\u7528Font2\u7ED8\u5236\u6587\u672C\u65F6\uFF0C TouchGFX\u4F1A\u627E\u5230\u6307\u5411\u5B57\u4F53\u8868\u4E2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CachedFont`), `\u5BF9\u8C61\u7684\u6307\u9488\u3002 \u6B64\u7279\u6B8A\u5B57\u4F53\u5C06\u67E5\u627EFontCache\u5BF9\u8C61\u4E2D\u7684\u5B57\u6BCD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u4F7F\u7528\u7F13\u5B58\u5B57\u4F53"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CachedFont\u8BBE\u7F6E\u4E86\u6307\u5411\u5185\u8054\u5B57\u4F53\uFF08\u4E0A\u9762\u7684Font2\uFF09\u7684\u6307\u9488\u3002 \u5F53TouchGFX\u8981\u6C42CachedFont\u63D0\u4F9B\u7279\u6B8A\u5B57\u6BCD\u65F6\uFF0CcachedFont\u5C06\u9996\u5148\u67E5\u627E\u5B83\u66FF\u4EE3\u7684\u666E\u901A\u5B57\u4F53\uFF08Font2\uFF09\u3002 \u8BE5\u5B57\u4F53\u53EF\u80FD\u662F\u7A7A\u5B57\u4F53\uFF0C\u4F46\u4E5F\u53EF\u80FD\u662F\u5305\u542B\u4E00\u4E9B\u5E38\u7528\u5B57\u6BCD\u7684\u201C\u666E\u901A\u201D\u5B57\u4F53\u3002 \u5982\u679C\u5B57\u4F53\u4E0D\u5305\u542B\u9700\u8981\u7684\u5B57\u6BCD\uFF0CCachedFont\u5C06\u67E5\u627EFontCache\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u662F\u5426\u5DF2\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u52A0\u8F7D\u4E86\u5B57\u6BCD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u65E0\u9700\u7F13\u5B58\u6B63\u5E38\u5B57\u4F53\u4E2D\u5DF2\u6709\u7684\u5B57\u6BCD\uFF0C\u6B64\u539F\u5219\u9650\u5236\u4E86\u5FC5\u987B\u7F13\u5B58\u7684\u5B57\u6BCD\u6570\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-the-font-cache-in-application-code"
  }), `\u5728\u5E94\u7528\u4EE3\u7801\u4E2D\u4F7F\u7528\u5B57\u4F53\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5CachedFont\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u521B\u5EFAFontCache\u3001\u5B58\u50A8\u7F13\u51B2\u533A\u548C\u6587\u4EF6\u7CFB\u7EDF\u9605\u8BFB\u5668\u5BF9\u8C61\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb
FontCache fontCache;
CachedFont cachedFont;  //Cached Font object
FileDataReader reader;  //Filesystem reader object
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FontCache\u5FC5\u987B\u94FE\u63A5\u5230\u7F13\u51B2\u533A\u548C\u9605\u8BFB\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//setup the font cache with buffer and size; and file reader object
fontCache.setMemory(fontdata, 5120);
fontCache.setReader(&reader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u5E94\u7528\u53EF\u4EE5\u8BBE\u7F6E\u5B57\u4F53\u7F13\u5B58\uFF0C\u521D\u59CB\u5316CachedFont\u5E76\u5C06\u5B83\u4F20\u9012\u7ED9TouchGFX\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u7F13\u5B58\u9700\u8981\u7528TextId\u6765\u521D\u59CB\u5316CachedFont\u5BF9\u8C61\u3002 TextId\u7528\u4E8E\u67E5\u627ECachedFont\u5FC5\u987B\u6307\u5411\u7684\u5B57\u4F53\u3002 \u8FD9\u786E\u4FDD\u60A8\u66FF\u6362\u7684\u662F\u663E\u793A\u5668\u4E0A\u7684\u6587\u672C\u4F7F\u7528\u7684\u5B57\u4F53\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0A\u4EE3\u7801\u53EF\u4EE5\u653E\u5728\u5E94\u7528\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u3002 \u5982\u679C\u7F13\u5B58\u5B57\u4F53\u53EA\u7528\u5728\u7279\u5B9A\u89C6\u56FE\u4E2D\uFF0C\u6B64\u89C6\u56FE\u53EF\u80FD\u662F\u63D2\u5165\u4EE3\u7801\u7684\u7406\u60F3\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-letters"
  }), `\u7F13\u5B58\u5B57\u6BCD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u7F13\u5B58\u4ECD\u7136\u4E3A\u7A7A\u3002 \u5FC5\u987B\u5148\u4ECE\u5B57\u4F53\u7F13\u5B58\u8BFB\u53D6\u5B57\u6BCD\uFF0C\u7136\u540E\u624D\u80FD\u663E\u793A\u5B57\u6BCD\u3002 \u8FD9\u662F\u901A\u8FC7\u5C06\u7EDF\u4E00\u7801\uFF08\u5B57\u7B26\u4E32\uFF09\u9635\u5217\u4F20\u9012\u5230\u5B57\u4F53\u7F13\u5B58\u6765\u5B8C\u6210\u7684\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u53EA\u4ECET_SINGLEUSEID1\u4F20\u9012\u6587\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheString(text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u7F13\u5B58\u5C06\u901A\u8FC7\u9605\u8BFB\u5668\u5BF9\u8C61\u52A0\u8F7D\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `str`), `\u9635\u5217\u4E2D\u627E\u5230\u7684\u5B57\u6BCD\u3002 \u8BFB\u53D6\u7684\u7EDF\u4E00\u7801\u5C06\u94FE\u63A5\u5230TextId `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `text`), `\u53C2\u6570\u4F7F\u7528\u7684\u5B57\u4F53\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5E94\u7528\u8D1F\u8D23\u914D\u7F6E\u8981\u4ECE\u6B63\u786E\u7684\u6587\u4EF6\u52A0\u8F7D\u7684\u9605\u8BFB\u5668\u5BF9\u8C61\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-ligatures"
  }), `\u7F13\u5B58\u8FDE\u5B57`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5728\u663E\u793A\u524D\u5C06\u7EDF\u4E00\u7801\u5E8F\u5217\u8F6C\u6362\u4E3A\u5176\u4ED6\u7EDF\u4E00\u7801\u7684\u8BED\u8A00\uFF08\u5982\u963F\u62C9\u4F2F\u8BED\u548C\u5929\u57CE\u4F53\uFF09\uFF0C\u4EE5\u4E0A\u65B9\u6CD5\u4E0D\u9002\u5408\u3002 \u5B83\u7F13\u5B58\u539F\u59CB\u7EDF\u4E00\u7801\u800C\u4E0D\u662F\u8F6C\u6362\u540E\u663E\u793A\u7684\u7EDF\u4E00\u7801\u3002 \u6B64\u65B9\u6CD5\u5C06\u8F6C\u6362\u7ED9\u5B9A\u7EDF\u4E00\u7801\u5E76\u7F13\u5B58\u9700\u8981\u7684\u7EDF\u4E00\u7801\uFF08\u8F6C\u6362\u540E\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u5185\u5B58\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u7F13\u5B58\u53EF\u4EE5\u8BA1\u7B97\u5F53\u524D\u5185\u5B58\u4F7F\u7528\u91CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-gsub-tables"
  }), `\u7F13\u5B58GSUB\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u65F6\uFF0C\u4E00\u4E9B\u5B57\u4F53\u4F7F\u7528GSUB\u8868\u3002 \u8FD9\u53EA\u662F\u4E1C\u65B9\u8BED\u8A00\u7684\u51E0\u79CD\u5B57\u4F53\uFF0C\u5982\u5929\u57CE\u4F53\u5B57\u4F53\u3002 GSUB\u8868\u4F7F\u5B57\u4F53\u7CFB\u7EDF\u80FD\u591F\u91CD\u65B0\u6392\u5217\u5B57\u7B26\u5E76\u7528\u5B57\u7B26\u5E8F\u5217\u4EE3\u66FF\u5176\u4ED6\u201C\u7EC4\u5408\u201D\u5B57\u7B26\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u7F13\u5B58\u53EF\u4EE5\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u52A0\u8F7D\u6B64GSUB\u8868\u3002 \u5982\u672A\u52A0\u8F7D\uFF0C\u5219\u6587\u672C\u6E32\u67D3\u7CFB\u7EDF\u65E0GSUB\u8868\u53EF\u7528\uFF0C\u5C06\u65E0\u6CD5\u6B63\u786E\u663E\u793A\u5B57\u4F53\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u521D\u59CB\u5316\u7F13\u5B58\u5B57\u4F53\u65F6\uFF0C\u901A\u8FC7\u63D0\u4F9B\u989D\u5916\u53C2\u6570\u52A0\u8F7DGSUB\u8868\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `\u5B9E\u73B0\u5B57\u4F53\u6587\u4EF6\u9605\u8BFB\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E0D\u5305\u542B\u4EE5\u4E0A\u793A\u4F8B\u4EE3\u7801\u4E2D\u4F7F\u7528\u7684FileDataReader\u7C7B\uFF0C\u5B83\u53D6\u51B3\u4E8E\u4F7F\u7528\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u666E\u901A\u201Cstdio\u201D\u517C\u5BB9\u6587\u4EF6\u7CFB\u7EDF\u7684\u4E00\u4E2A\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FileDataReader\u7C7B\u4ECEFontCache.hpp\u5B9E\u73B0FontDataReader\u63A5\u53E3\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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