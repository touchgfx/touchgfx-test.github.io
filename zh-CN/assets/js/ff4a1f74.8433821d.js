"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4868],{

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

/***/ 36082:
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
  id: "using-non-memory-mapped-flash",
  title: "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u56FE\u50CF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-non-memory-mapped-flash",
  "id": "development/scenarios/using-non-memory-mapped-flash",
  "title": "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u56FE\u50CF",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-non-memory-mapped-flash",
  "permalink": "/4.20/zh-CN/docs/development/scenarios/using-non-memory-mapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-non-memory-mapped-flash",
    "title": "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u56FE\u50CF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u901A\u8FC7\u90E8\u5206\u5E27\u7F13\u51B2\u964D\u4F4E\u5185\u5B58\u4F7F\u7528\u7387",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"
  },
  "next": {
    "title": "\u4F7F\u7528\u4E32\u884C\u95EA\u5B58\u5B58\u50A8\u56FE\u50CF\u548C\u5B57\u4F53",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/using-serial-flash"
  }
};
const assets = {};


const toc = [{
  value: "\u5C06\u95EA\u5B58\u4E2D\u7684\u4F4D\u56FE\u6570\u636E\u590D\u5236\u5230\u7F13\u5B58",
  id: "copying-bitmap-data-from-flash-to-cache",
  level: 3
}, {
  value: "BitmapDatabase\u8868",
  id: "the-bitmapdatabase-table",
  level: 2
}, {
  value: "\u94FE\u63A5\u811A\u672C\u4FEE\u6539",
  id: "linker-script-modifications",
  level: 2
}, {
  value: "\u4FEE\u6539BlockCopy\u51FD\u6570",
  id: "modifying-the-blockcopy-function",
  level: 2
}, {
  value: "\u5C06\u56FE\u50CF\u94FE\u63A5\u5230RAM",
  id: "linking-images-to-ram",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u8BA8\u8BBA\u5982\u4F55\u5C06\u6240\u6709\u56FE\u50CF\u94FE\u63A5\u5230\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u6837\u53EF\u4EE5\u653E\u5165\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u8FD0\u884C\u65F6\u7ED3\u5408\u4F4D\u56FE\u7F13\u5B58\u6765\u4F7F\u7528\u8BE5\u6587\u4EF6\u3002 TouchGFX\u4E0D\u80FD\u7ED8\u5236\u5B58\u50A8\u5728\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u4E2D\u7684\u4F4D\u56FE\uFF0C\u4F46\u662F\u901A\u8FC7\u5C06\u4F4D\u56FE\u7F13\u5B58\u5728RAM\u4E2D\uFF0C\u5C31\u80FD\u5728\u5E94\u7528\u4E2D\u4F7F\u7528\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\u7F13\u5B58\u4F4D\u56FE`), `\u4E00\u6587\u4E2D\u5173\u4E8E\u4F4D\u56FE\u7F13\u5B58\u7684\u7EFC\u5408\u8BA8\u8BBA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u6587\u4E2D\uFF0C\u6211\u4EEC\u5047\u8BBE\u60A8\u8BBE\u7F6E\u4E86\u4F4D\u56FE\u7F13\u5B58\uFF0C\u5E76\u5E0C\u671B\u5C06\u4F4D\u56FE\u5B58\u50A8\u5728\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u4E2D\u3002 \u8BE5\u95EA\u5B58\u53EF\u4EE5\u662FUSB\u5B58\u50A8\u3001NAND flash\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u6807\u662F\u5C06\u56FE\u50CF\u94FE\u63A5\u5230\u7279\u5B9A\u5730\u5740\uFF0C\u5C06\u56FE\u50CF\u590D\u5236\u5230\u6587\u4EF6\uFF0C\u5E76\u5E2E\u52A9TouchGFX\u5C06\u5176\u4ECE\u6587\u4EF6\u590D\u5236\u5230\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "copying-bitmap-data-from-flash-to-cache"
  }), `\u5C06\u95EA\u5B58\u4E2D\u7684\u4F4D\u56FE\u6570\u636E\u590D\u5236\u5230\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u5728\u7F13\u5B58\u4F4D\u56FE\u65F6\uFF0CTouchGFX\u4F1A\u5C06\u50CF\u7D20\u4ECE\u539F\u59CB\u4F4D\u7F6E\u590D\u5236\u5230\u4F4D\u56FE\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u4ECEHAL\u7C7B\u8C03\u7528\u6B64\u65B9\u6CD5\u6765\u5B8C\u6210\u590D\u5236\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4F4D\u56FE\u5B58\u50A8\u5728\u666E\u901A\u53EF\u5BFB\u5740\u95EA\u5B58\uFF08\u5982\u5185\u90E8\u95EA\u5B58\u6216\u5185\u5B58\u6620\u5C04\u5916\u90E8\u95EA\u5B58\uFF09\u4E2D\uFF0C\u5219\u4F7F\u7528TouchGFX\u5E93\u4E2D\u63D0\u4F9B\u7684\u666E\u901AblockCopy\u51FD\u6570\u5373\u53EF\uFF0C\u60A8\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u4F4D\u56FE\u5B58\u50A8\u5728\u4E0D\u53EF\u5BFB\u5740\u7684\u5B58\u50A8\u4F4D\u7F6E\uFF08\u5982\u6587\u4EF6\u7CFB\u7EDF\uFF09\uFF0C\u5219\u666E\u901A\u5B9E\u73B0\u662F\u4E0D\u591F\u7684\uFF0C\u60A8\u9700\u8981\u63D0\u4F9B\u66F4\u65B0\u8FC7\u7684\u7248\u672C\uFF0C\u4EE5\u4FBF\u80FD\u591F\u4ECE\u7279\u5B9A\u95EA\u5B58\u8BFB\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u9996\u5148\u6211\u4EEC\u9700\u8981\u786E\u4FDD\u4F4D\u56FE\u5DF2\u94FE\u63A5\u5230\u56FA\u5B9A\u5730\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-bitmapdatabase-table"
  }), `BitmapDatabase\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u7684\u6240\u6709\u4F4D\u56FE\u90FD\u4F1A\u751F\u6210.cpp\u6587\u4EF6\uFF0C\u5B58\u653E\u5230generated/images/src\u6587\u4EF6\u5939\u4E2D\u3002 \u5728\u8FD9\u91CC\uFF0C\u4F4D\u56FE\u88AB\u8868\u793A\u4E3A\u5B57\u8282\u6570\u7EC4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E\u5176\u5B83\u6E90\u7801\u6587\u4EF6\u4E00\u6837\uFF0C\u8FD9\u4E9B\u4F4D\u56FE\u6570\u7EC4\u4F1A\u88ABC++\u7F16\u8BD1\u5668\u94FE\u63A5\u5230\u5E94\u7528\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u5E94\u7528\u7684\u5C4F\u5E55\u622A\u56FE\uFF0C\u8BE5\u5E94\u7528\u5305\u542B\u4E00\u4E2A\u6309\u94AE\u548C\u4E00\u4E2ATexture Mapper\u63A7\u4EF6\uFF0C\u5176\u4E2DTexture Mapper\u63A7\u4EF6\u7528\u6765\u663E\u793A\u4E00\u4E2A\u65CB\u8F6C\u7684\u5FBD\u6807\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",
    mdxType: "Figure"
  }, "\u6309\u94AE\u548C\u7EB9\u7406\u6620\u5C04\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u5E94\u7528\u4F7F\u75283\u5F20\u56FE\u50CF\uFF1AButton_Pressed\u3001Button_Released\u548CLogo\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD93\u5F20\u4F4D\u56FE\u88AB\u8F6C\u6362\u4E3A.cpp\u6587\u4EF6\uFF0C\u5E76\u94FE\u63A5\u6210\u5E94\u7528\u7684\u4E00\u90E8\u5206\u3002 \u5728\u540D\u4E3Abitmap_database\u7684\u8868\u4E2D\u5F15\u7528\u4F4D\u56FE\u3002 \u6B64\u8868\u4F4D\u4E8E\u6587\u4EF6BitmapDatabase.cpp\u4E2D\u3002 \u4E0B\u8868\u6765\u81EA\u4E0A\u9762\u7684\u793A\u4F8B\uFF08\u5220\u9664\u4E86\u4E00\u4E9B\u7EC6\u8282\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BitmapDatabase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `extern const unsigned char _blue_buttons_round_edge_small[];
extern const unsigned char _blue_buttons_round_edge_small_pressed[];
extern const unsigned char _blue_logo_touchgfx_logo[];

const touchgfx::Bitmap::BitmapData bitmap_database[] =
{
    { _blue_buttons_round_edge_small, ... },
    { _blue_buttons_round_edge_small_pressed, ... },
    { _blue_logo_touchgfx_logo, ... }
};

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\u58F0\u660E\u7684\u6570\u7EC4\u662F\u5305\u542B\u5404\u4F4D\u56FE\u7684\u50CF\u7D20\u6570\u636E\u7684\u6570\u7EC4\u3002 \u8FD9\u4E9B\u6570\u7EC4\u5728\u5176\u4ED6.cpp\u6587\u4EF6\u4E2D\u5B9A\u4E49\u3002 bitmap_database\u6570\u7EC4\u4FDD\u5B58\u4E86\u8FD9\u4E9B\u6570\u7EC4\u7684\u5730\u5740\u3002 TouchGFX\u4F7F\u7528\u6B64\u6570\u7EC4\u67E5\u627E\u4F4D\u56FE\u50CF\u7D20\u7684\u5730\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u7A0B\u5E8F\u5458\u8BF7\u6C42\u7F13\u5B58\u4F4D\u56FE\u65F6\uFF0CTouchGFX\u67E5\u627E\u95EA\u5B58\u4E2D\u7684\u4F4D\u56FE\u5730\u5740\uFF08\u5728bitmap_database\u6570\u7EC4\u4E2D\uFF09\u5E76\u4ECE\u8FD9\u91CC\u590D\u5236\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\u94FE\u63A5\u811A\u672C\u4FEE\u6539`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u94FE\u63A5\u5668\u4E3A\u4F4D\u56FE\u9009\u62E9\u5730\u5740\u3002 \u6B64\u7C7B\u9009\u62E9\u57FA\u4E8E\u4F4D\u56FE\u6240\u5728\u7684\u6BB5\u3002 TouchGFX\u4E2D\u7684\u6240\u6709\u4F4D\u56FE\u9ED8\u8BA4\u653E\u5165`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `ExtFlashSection`), `\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6807\u51C6\u94FE\u63A5\u811A\u672C\uFF08\u6B64\u5904\u662F\u5C31GCC\u800C\u8A00\uFF09\u5C06\u6B64\u6BB5\u8FDE\u540C\u5176\u4ED6\u53EA\u8BFB\u6570\u636E\u4E00\u8D77\u653E\u5165\u95EA\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u56FE\u50CF\u6570\u636E\u653E\u5165ExtFlashSection\u4E2D\uFF0C\u5730\u5740\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `0x24000000`), `\u3002 \u60A8\u53EF\u4EE5\u9009\u62E9\u672A\u5728\u5176\u4ED6\u5730\u65B9\u4F7F\u7528\u7684\u4EFB\u4F55\u5730\u5740\uFF08\u4E0D\u662F\u4EE3\u7801\u6216\u6570\u636E\u5730\u5740\u7A7A\u95F4\u7684\u4E00\u90E8\u5206\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u9664\u4E86\u666E\u901A\u7684\u5185\u90E8FLASH\u548CRAM\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u5B58\u50A8\u533A\uFF08USB\u95EA\u5B58\u5730\u57400x24000000\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K
  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K
  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7\u94FE\u63A5\u811A\u672C\u5C06ExtFlashSection\u653E\u5165USB\u533A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection :
{
   *(ExtFlashSection ExtFlashSection.*)
} >USB
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u94FE\u63A5\u6210\u529F\u540E\uFF0C\u53EF\u901A\u8FC7\u68C0\u67E5.map\u6587\u4EF6\uFF08application.map\uFF09\u6765\u68C0\u67E5\u4F4D\u56FE\u5730\u5740\u3002 \u4E0B\u9762\u662F\u76F8\u5173\u90E8\u5206\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection
                0x24000000    0x23ec0
 *(ExtFlashSection ExtFlashSection.*)
 ExtFlashSection
                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o
                0x24000000                _blue_logo_touchgfx_logo
 ExtFlashSection
                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o
                0x24010000                _blue_buttons_round_edge_small
 ExtFlashSection
                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o
                0x24019f60                _blue_buttons_round_edge_small_pressed
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u56FE\u50CF\u7684\u603B\u5927\u5C0F\u4E3A0x23ec0 = 147,136\u5B57\u8282\u3002 \u4FDD\u5B58\u4F4D\u56FE\u76843\u4E2A\u6570\u7EC4\u7684\u5730\u5740\u4ECE0x24000000\u5F00\u59CB\u76F8\u7EE7\u6392\u5217\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u5047\u8BBE\u60A8\u60F3\u8981\u5C06\u4F4D\u56FE\u6570\u636E\u5B58\u5230SD\u5361\u4E2D\u3002 \u6211\u4EEC\u53EF\u4EE5\u7528\u7B80\u5355\u7684objcopy\u6307\u4EE4\u4ECE.elf\u6587\u4EF6\u4E2D\u63D0\u53D6\u4F4D\u56FE\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf
$ ls -l images.bin
-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u6837\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u53EA\u5305\u542B\u56FE\u50CF\u5B57\u8282\u6570\u7EC4\u7684\u6587\u4EF6\uFF08images.bin\uFF09\u3002 \u6B64\u6587\u4EF6\u53EF\u4EE5\u590D\u5236\u5230USB\u95EA\u5B58\u3001SD\u5361\u751A\u81F3\u7F16\u7A0B\u5230\u95EA\u5B58\u82AF\u7247\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u8981\u505A\u7684\u662F\uFF0C\u5F53TouchGFX\u8BF7\u6C42\u5730\u57400x24000000\u4EE5\u4E0A\u7684\u6570\u636E\u65F6\uFF0C\u6211\u4EEC\u4ECESD\u5361\u4E0A\u7684images.bin\u6587\u4EF6\u83B7\u53D6\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-the-blockcopy-function"
  }), `\u4FEE\u6539BlockCopy\u51FD\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BB0\u4F4F\uFF0C\u5728\u5C06\u4F4D\u56FE\u7F13\u5B58\u5230RAM\u65F6\uFF0CTouchGFX\u8C03\u7528HAL::BlockCopy\u4EE5\u83B7\u53D6\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u5173\u8054\u4E0ASD\u5361\u4E2D\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7279\u5B9AHAL\u7C7B\u4E2D\u5B9E\u73B0\u65B0\u7684BlockCopy\u3002 \u8FD9\u91CC\u6211\u4EEC\u5047\u8BBE\u7C7B\u7684\u540D\u79F0\u4E3ATouchGFXHAL\uFF08\u7531TouchGFX Generator\u751F\u6210\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHal.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TouchGFXHAL : public TouchGFXGeneratedHAL
{
public:
    ...
    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHal.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `// This function is called whenever a bitmap is cached. \u5FC5\u987B\u4ECE\uFF08\u975E\u5185\u5B58\u6620\u5C04\uFF09\u6E90//\u590D\u5236\u591A\u4E2A\u5B57\u8282\u5230\u7F13\u5B58\u3002
bool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)
{
  // If requested data is located within the memory block we have assigned for ExtFlashSection,
  // provide an implementation for data copying.
  if (src >= 0x24000000 && src < 0x24100000)
  {
    void* dataOffset = src - 0x24000000;
    // In this example we assume graphics is placed in SD card, and that we have an appropriate function
    // for copying data from there.
    sdcard_read(dest, dataOffset, numBytes);
    return true;
  }
  else
  {
    // For all other addresses, just use the default implementation.
    // This is important, as blockCopy is also used for other things in the core framework.
    return HAL::blockCopy(dest, src, numBytes);
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u53EF\u4EE5\u5F00\u59CB\u4ECESD\u5361\u7F13\u5B58\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CTouchGFX\u5C1D\u8BD5\u7ED8\u5236\u6CA1\u6709\u7F13\u5B58\u7684\u4F4D\u56FE\uFF0C\u5B83\u5C06\u5C1D\u8BD5\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bitmap_database`), `\u8868\u4E2D\u627E\u5230\u7684\u5730\u5740\u8BFB\u53D6\u50CF\u7D20\u3002 \u6B64\u5730\u5740\u5C06\u5904\u4E8E\u8303\u56F40x24000000 - 0x24100000\u4EE5\u5185\uFF0C\u76F4\u63A5\u8BFB\u53D6\u5C06\u5BFC\u81F4\u5F02\u5E38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linking-images-to-ram"
  }), `\u5C06\u56FE\u50CF\u94FE\u63A5\u5230RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u53EF\u7528RAM\u8DB3\u591F\u5927\uFF0C\u80FD\u591F\u5B58\u50A8\u6240\u6709\u56FE\u50CF\uFF08\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0CRAM\u5927\u4E8E147,136\u5B57\u8282\uFF09\uFF0C\u5219\u65E0\u9700\u4F7F\u7528\u4F4D\u56FE\u7F13\u5B58\u6765\u590D\u5236\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B56\u7565\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u56FE\u50CF\u9009\u62E9RAM\u4E2D\u7684\u56FA\u5B9A\u5730\u5740\u548C\u8303\u56F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u94FE\u63A5\u811A\u672C\u4E2D\u5220\u9664RAM\u533A\u4E2D\u7684\u8FD9\u4E00\u8303\u56F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u521B\u5EFA\u5177\u6709\u9009\u5B9A\u5730\u5740\u548C\u5927\u5C0F\u7684\u65B0\u533AIMAGES`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06ExtFlashSection\u653E\u5728IMAGES\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u94FE\u63A5\u5E94\u7528\u5E76\u68C0\u67E5.map\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECEapplication.elf\u521B\u5EFAimages.bin\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u542F\u52A8TouchGFX\u4E4B\u524D\uFF0C\u5C06\u6574\u4E2Aimages.bin\u6587\u4EF6\u4ECESD\u5361\u590D\u5236\u5230RAM\u4E2D\u7684\u9009\u5B9A\u5730\u5740`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u89E3\u51B3\u65B9\u6848\u8F83\u4E3A\u7B80\u5355\uFF0C\u4F46\u6709\u4E00\u4E9B\u7F3A\u70B9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u7528RAM\u5FC5\u987B\u8DB3\u591F\u5927\uFF0C\u80FD\u591F\u4FDD\u5B58\u6240\u6709\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7531\u4E8E\u8981\u4ECESD\u5361\u590D\u5236\uFF0C\u56E0\u6B64\u542F\u52A8\u65F6\u95F4\u4F1A\u6BD4\u8F83\u957F\uFF08\u5146\u5B57\u8282\u53EF\u80FD\u9700\u8981\u6570\u79D2\uFF09`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);