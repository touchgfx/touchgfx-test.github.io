"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4701],{

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

/***/ 68433:
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
  title: "\u4F7F\u7528\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5F71\u50CF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-non-memory-mapped-flash",
  "id": "development/scenarios/using-non-memory-mapped-flash",
  "title": "\u4F7F\u7528\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5F71\u50CF",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-non-memory-mapped-flash",
  "permalink": "/4.20/zh-TW/docs/development/scenarios/using-non-memory-mapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-non-memory-mapped-flash",
    "title": "\u4F7F\u7528\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5F71\u50CF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u901A\u904E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u964D\u4F4E\u8A18\u61B6\u9AD4\u4F7F\u7528\u7387",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"
  },
  "next": {
    "title": "\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5716\u50CF\u548C\u5B57\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/using-serial-flash"
  }
};
const assets = {};


const toc = [{
  value: "\u5C07\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u9EDE\u9663\u5716\u8CC7\u6599\u8907\u88FD\u5230\u7DE9\u5B58",
  id: "copying-bitmap-data-from-flash-to-cache",
  level: 3
}, {
  value: "BitmapDatabase\u8868",
  id: "the-bitmapdatabase-table",
  level: 2
}, {
  value: "\u9023\u7D50\u5668\u8173\u672C\u4FEE\u6539",
  id: "linker-script-modifications",
  level: 2
}, {
  value: "\u4FEE\u6539BlockCopy\u51FD\u6578",
  id: "modifying-the-blockcopy-function",
  level: 2
}, {
  value: "\u5C07\u5716\u50CF\u9023\u7D50\u5230RAM",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u8A0E\u8AD6\u5982\u4F55\u5C07\u6240\u6709\u5716\u50CF\u9023\u7D50\u5230\u53EF\u4EE5\u653E\u5165\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u4E8C\u9032\u4F4D\u6A94\u6848\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u57F7\u884C\u6642\u9593\u4F7F\u7528\u8A72\u6A94\u548C\u9EDE\u9663\u5716\u7DE9\u5B58\u3002 TouchGFX\u4E0D\u80FD\u7E6A\u88FD\u5B58\u5132\u5728\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u9EDE\u9663\u5716\uFF0C\u4F46\u5C07\u9EDE\u9663\u5716\u5B58\u5728RAM\u7684\u7DE9\u5B58\u4E2D\uFF0C\u5C31\u80FD\u5728\u61C9\u7528\u4E2D\u4F7F\u7528\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\u7DE9\u5B58\u9EDE\u9663\u5716`), `\u4E00\u6587\u4E2D\u95DC\u65BC\u9EDE\u9663\u5716\u7DE9\u5B58\u7684\u7D9C\u5408\u8A0E\u8AD6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u6587\u4E2D\uFF0C\u6211\u5011\u5047\u8A2D\u60A8\u8A2D\u7F6E\u4E86\u9EDE\u9663\u5716\u7DE9\u5B58\uFF0C\u4E26\u5E0C\u671B\u5C07\u9EDE\u9663\u5716\u5B58\u5132\u5728\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002 \u8A72\u5FEB\u9583\u8A18\u61B6\u9AD4\u53EF\u4EE5\u662FUSB\u5132\u5B58\u88DD\u7F6E\u3001NAND flash\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u6A19\u662F\u5C07\u5716\u50CF\u9023\u7D50\u5230\u7279\u5B9A\u4F4D\u5740\uFF0C\u5C07\u5716\u50CF\u8907\u88FD\u5230\u6A94\u6848\u4E2D\uFF0C\u4E26\u5E6B\u52A9TouchGFX\u5C07\u5176\u5F9E\u6A94\u6848\u8907\u88FD\u5230\u7DE9\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "copying-bitmap-data-from-flash-to-cache"
  }), `\u5C07\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u9EDE\u9663\u5716\u8CC7\u6599\u8907\u88FD\u5230\u7DE9\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u5728\u7DE9\u5B58\u9EDE\u9663\u5716\u6642\uFF0CTouchGFX\u6703\u5C07\u50CF\u7D20\u5F9E\u539F\u59CB\u4F4D\u7F6E\u8907\u88FD\u5230\u9EDE\u9663\u5716\u7DE9\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u5F9EHAL\u985E\u547C\u53EB\u6B64\u65B9\u6CD5\u4F86\u5B8C\u6210\u9019\u7A2E\u8907\u88FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u9EDE\u9663\u5716\u5B58\u5132\u5728\u666E\u901A\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF08\u5982\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u6216\u8A18\u61B6\u9AD4\u6620\u5C04\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF09\u4E2D\uFF0C\u5247\u4F7F\u7528TouchGFX\u5EAB\u4E2D\u63D0\u4F9B\u7684\u666E\u901AblockCopy\u51FD\u6578\u5373\u53EF\uFF0C\u7121\u9700\u4EFB\u4F55\u984D\u5916\u7684\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u9EDE\u9663\u5716\u5B58\u5132\u5728\u4E0D\u53EF\u5B9A\u5740\u7684\u5B58\u5132\u4F4D\u7F6E\uFF08\u5982\u6A94\u6848\u7CFB\u7D71\uFF09\uFF0C\u5247\u4E00\u822C\u7684\u64CD\u4F5C\u662F\u4E0D\u5920\u7684\uFF0C\u60A8\u9700\u8981\u63D0\u4F9B\u66F4\u65B0\u904E\u7684\u7248\u672C\uFF0C\u4EE5\u4FBF\u80FD\u5920\u5F9E\u7279\u5B9A\u5FEB\u9583\u8A18\u61B6\u9AD4\u8B80\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u9996\u5148\u6211\u5011\u9700\u8981\u78BA\u4FDD\u9EDE\u9663\u5716\u5DF2\u9023\u7D50\u5230\u56FA\u5B9A\u4F4D\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-bitmapdatabase-table"
  }), `BitmapDatabase\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u7684\u6240\u6709\u9EDE\u9663\u5716\u90FD\u751F\u6210\u5230generated/images/src\u8CC7\u6599\u593E\u4E2D\u7684.cpp\u6587\u4EF6\u3002 \u5728\u9019\u88E1\u9EDE\u9663\u5716\u8868\u793A\u70BA\u4F4D\u5143\u7D44\u9663\u5217\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `C++\u7DE8\u8B6F\u5668\u548C\u7DE8\u8B6F\u5176\u4ED6\u539F\u59CB\u7A0B\u5F0F\u78BC\u4E00\u6A23\u7DE8\u8B6F\u9019\u4E9B\u9663\u5217\uFF0C\u4E26\u4E14\u5C07\u5B83\u5011\u9023\u7D50\u5230\u61C9\u7528\u7A0B\u5F0F\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u662F\u4E00\u500B\u7C21\u55AE\u61C9\u7528\u7A0B\u5F0F\u7684\u87A2\u5E55\u622A\u5716\uFF0C\u8A72\u61C9\u7528\u7A0B\u5F0F\u6709\u4E00\u500B\u6309\u9215\u548C\u4E00\u500B\u986F\u793A\u65CB\u8F49\u6A19\u793A\u7684\u7D0B\u7406\u6620\u5C04\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",
    mdxType: "Figure"
  }, "\u6309\u9215\u548C\u7D0B\u7406\u6620\u5C04\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u61C9\u7528\u4F7F\u75283\u5F35\u5716\u50CF\uFF1AButton_Pressed\u3001Button_Released\u548CLogo\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u90193\u5F35\u9EDE\u9663\u5716\u88AB\u8F49\u63DB\u70BA.cpp\u6A94\uFF0C\u4E26\u4F5C\u70BA\u61C9\u7528\u7A0B\u5F0F\u7684\u4E00\u90E8\u5206\u9032\u884C\u9023\u7D50\u3002 \u5728\u540D\u70BAbitmap_database\u7684\u8868\u4E2D\u5F15\u7528\u9EDE\u9663\u5716\u3002 \u6B64\u8868\u4F4D\u65BC\u6587\u4EF6BitmapDatabase.cpp\u4E2D\u3002 \u4E0B\u8868\u4F86\u81EA\u4E0A\u9762\u7684\u7BC4\u4F8B\uFF08\u522A\u6E1B\u4E86\u4E00\u4E9B\u7D30\u7BC0\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\u5BA3\u544A\u7684\u9663\u5217\u662F\u5305\u542B\u5404\u9EDE\u9663\u5716\u7684\u50CF\u7D20\u7684\u9663\u5217\u3002 \u9019\u4E9B\u9663\u5217\u5728\u5176\u4ED6.cpp\u6A94\u4E2D\u5B9A\u7FA9\u3002 bitmap_database\u9663\u5217\u4FDD\u5B58\u4E86\u9019\u4E9B\u9663\u5217\u7684\u4F4D\u5740\u3002 TouchGFX\u4F7F\u7528\u6B64\u9663\u5217\u67E5\u627E\u9EDE\u9663\u5716\u50CF\u7D20\u7684\u4F4D\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u958B\u767C\u8005\u8ACB\u6C42\u7DE9\u5B58\u9EDE\u9663\u5716\u6642\uFF0CTouchGFX\u67E5\u627E\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u9EDE\u9663\u5716\u4F4D\u5740\uFF08\u5728bitmap_database\u9663\u5217\u4E2D\uFF09\u4E26\u5F9E\u9019\u88E1\u8907\u88FD\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\u9023\u7D50\u5668\u8173\u672C\u4FEE\u6539`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9023\u7D50\u5668\u70BA\u9EDE\u9663\u5716\u9078\u64C7\u4F4D\u5740\u3002 \u6B64\u985E\u9078\u64C7\u57FA\u65BC\u9EDE\u9663\u5716\u6240\u5728\u7684\u5340\u6BB5\u3002 TouchGFX\u4E2D\u7684\u6240\u6709\u9EDE\u9663\u5716\u9ED8\u8A8D\u653E\u5165`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `ExtFlashSection`), `\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6A19\u6E96\u9023\u7D50\u5668\u8173\u672C\uFF08\u6B64\u8655\u662F\u5C31GCC\u800C\u8A00\uFF09\u5C07\u6B64\u5206\u5340\u9023\u540C\u5176\u4ED6\u552F\u8B80\u8CC7\u6599\u4E00\u8D77\u653E\u5165\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u5C07\u5716\u50CF\u8CC7\u6599\u653E\u5165ExtFlashSection\u4E2D\u7684\u5730\u5740`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `0x24000000`), `\u3002 \u60A8\u53EF\u4EE5\u9078\u64C7\u672A\u4F7F\u7528\u904E\u7684\u4EFB\u4F55\u4F4D\u5740\uFF08\u4E0D\u662F\u7A0B\u5F0F\u78BC\u6216\u8CC7\u6599\u4F4D\u5740\u7A7A\u9593\u7684\u4E00\u90E8\u5206\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u9664\u4E86\u666E\u901A\u7684\u5167\u90E8FLASH\u548CRAM\uFF0C\u6211\u5011\u5B9A\u7FA9\u4E00\u500B\u65B0\u7684\u5B58\u5132\u5340\uFF08USB\u5FEB\u9583\u8A18\u61B6\u9AD4\u4F4D\u57400x24000000\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K
  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K
  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\uFF0C\u6211\u5011\u6307\u793A\u9023\u7D50\u5668\u5C07ExtFlashSection\u653E\u5165USB\u5340\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection :
{
   *(ExtFlashSection ExtFlashSection.*)
} >USB
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9023\u7D50\u6210\u529F\u5F8C\uFF0C\u53EF\u901A\u904E\u6AA2\u67E5.map\u6587\u4EF6\uFF08application.map\uFF09\u4F86\u6AA2\u67E5\u9EDE\u9663\u5716\u5730\u5740\u3002 \u4E0B\u9762\u662Fapplication.map\u7684\u4E00\u90E8\u5206\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u88E1\u6211\u5011\u53EF\u4EE5\u770B\u5230\uFF0C\u5716\u50CF\u7684\u7E3D\u5927\u5C0F\u70BA0x23ec0 = 147,136\u4F4D\u5143\u7D44\u3002 \u4FDD\u5B58\u9EDE\u9663\u5716\u76843\u500B\u9663\u5217\u7684\u4F4D\u5740\u5F9E0x24000000\u958B\u59CB\u76F8\u7E7C\u6392\u5217\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u5047\u8A2D\u60A8\u60F3\u8981\u5C07\u9EDE\u9663\u5716\u8CC7\u6599\u50B3\u8F38\u5230SD\u5361\u4E2D\u3002 \u6211\u5011\u53EF\u4EE5\u7528\u7C21\u55AE\u7684objcopy\u6307\u4EE4\u5F9E.elf\u6A94\u4E2D\u63D0\u53D6\u9EDE\u9663\u5716\u7684\u4E8C\u9032\u4F4D\u8CC7\u6599\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf
$ ls -l images.bin
-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u6A23\u53EF\u4EE5\u5F97\u5230\u4E00\u500B\u53EA\u5305\u542B\u5716\u50CF\u4F4D\u5143\u7D44\u9663\u5217\u7684\u6A94\uFF08images.bin\uFF09\u3002 \u6B64\u6A94\u53EF\u4EE5\u8907\u88FD\u5230USB\u5FEB\u9583\u8A18\u61B6\u9AD4\u3001SD\u5361\u751A\u81F3\u662F\u5FEB\u9583\u8A18\u61B6\u9AD4\u6676\u7247\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u7684\u89C0\u5FF5\u662F\uFF0C\u7576TouchGFX\u8ACB\u6C42\u4F4D\u57400x24000000\u4EE5\u4E0A\u7684\u8CC7\u6599\u6642\uFF0C\u6211\u5011\u5F9ESD\u5361\u4E0A\u7684images.bin\u6A94\u7372\u53D6\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-the-blockcopy-function"
  }), `\u4FEE\u6539BlockCopy\u51FD\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A18\u4F4F\uFF0C\u5728\u5C07\u9EDE\u9663\u5716\u7DE9\u5B58\u5230RAM\u6642\uFF0CTouchGFX\u547C\u53EBHAL::BlockCopy\u4EE5\u7372\u53D6\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u9023\u7D50\u5230SD\u5361\u4E0A\u7684\u8CC7\u6599\uFF0C\u6211\u5011\u53EF\u4EE5\u5728\u7279\u5B9AHAL\u985E\u4E2D\u5BE6\u73FE\u65B0\u7684BlockCopy\u3002 \u9019\u88E1\u6211\u5011\u5047\u8A2D\u985E\u7684\u540D\u7A31\u70BATouchGFXHAL\uFF08\u7531TouchGFX Generator\u751F\u6210\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }), `// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source
// to the cache.
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u53EF\u4EE5\u958B\u59CB\u5F9ESD\u5361\u7DE9\u5B58\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CTouchGFX\u5617\u8A66\u7E6A\u88FD\u6C92\u6709\u7DE9\u5B58\u7684\u9EDE\u9663\u5716\uFF0C\u5B83\u5C07\u5617\u8A66\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bitmap_database`), `\u8868\u4E2D\u627E\u5230\u7684\u4F4D\u5740\u8B80\u53D6\u50CF\u7D20\u3002 \u6B64\u5730\u5740\u5C07\u8655\u65BC\u7BC4\u570D0x24000000 - 0x24100000\u4EE5\u5167\uFF0C\u8B80\u53D6\u5C07\u5C0E\u81F4\u7570\u5E38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linking-images-to-ram"
  }), `\u5C07\u5716\u50CF\u9023\u7D50\u5230RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u53EF\u7528RAM\u8DB3\u5920\u5927\uFF0C\u80FD\u5920\u5B58\u5132\u6240\u6709\u5716\u50CF\uFF08\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0CRAM\u5927\u65BC147,136\u4F4D\u5143\u7D44\uFF09\uFF0C\u5247\u7121\u9700\u4F7F\u7528\u9EDE\u9663\u5716\u7DE9\u5B58\u4F86\u8907\u88FD\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B9\u5F0F\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u5716\u50CF\u9078\u64C7RAM\u4E2D\u7684\u56FA\u5B9A\u4F4D\u5740\u548C\u7BC4\u570D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u9023\u7D50\u5668\u8173\u672C\u4E2D\u522A\u9664RAM\u5340\u4E2D\u7684\u7BC4\u570D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5275\u5EFA\u5177\u6709\u9078\u5B9A\u4F4D\u5740\u548C\u5927\u5C0F\u7684\u65B0\u5340IMAGES`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07ExtFlashSection\u653E\u5728IMAGES\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9023\u7D50\u61C9\u7528\u4E26\u6AA2\u67E5.map\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9Eapplication.elf\u5275\u5EFAimages.bin\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u555F\u52D5TouchGFX\u4E4B\u524D\uFF0C\u5C07\u6574\u500Bimages.bin\u6A94\u5F9ESD\u5361\u8907\u88FD\u5230RAM\u4E2D\u7684\u9078\u5B9A\u4F4D\u5740`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u89E3\u6C7A\u65B9\u6848\u8F03\u70BA\u7C21\u55AE\uFF0C\u4F46\u6709\u4E00\u4E9B\u7F3A\u9EDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u7528RAM\u5FC5\u9808\u8DB3\u5920\u5927\uFF0C\u80FD\u5920\u4FDD\u5B58\u6240\u6709\u5716\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7531\u65BC\u8981\u5F9ESD\u5361\u8907\u88FD\uFF0C\u56E0\u6B64\u555F\u52D5\u6642\u9593\u6703\u6BD4\u8F03\u9577\uFF08\u767E\u842C\u4F4D\u5143\u7D44\u53EF\u80FD\u9700\u8981\u6578\u79D2\uFF09`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);