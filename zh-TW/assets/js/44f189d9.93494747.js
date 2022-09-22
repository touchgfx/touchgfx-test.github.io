"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5073],{

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

/***/ 864:
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
  id: "screen-definition-and-mvp",
  title: "\u87A2\u5E55\u6982\u5FF5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "id": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "title": "\u87A2\u5E55\u6982\u5FF5",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/screen-definition-and-mvp",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/software-architecture/screen-definition-and-mvp",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "screen-definition-and-mvp",
    "title": "\u87A2\u5E55\u6982\u5FF5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Model-View-Presenter\u8A2D\u8A08\u6A21\u5F0F",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"
  },
  "next": {
    "title": "\u7A0B\u5F0F\u78BC\u7D50\u69CB",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/software-architecture/code-structure"
  }
};
const assets = {};

const toc = [{
  value: "\u5B9A\u7FA9\u87A2\u5E55",
  id: "defining-screens",
  level: 3
}, {
  value: "\u7576\u524D\u6D3B\u52D5\u87A2\u5E55",
  id: "currently-active-screen",
  level: 3
}, {
  value: "TouchGFX\u4E2D\u7684Model-View-Presenter",
  id: "model-view-presenter-in-touchgfx",
  level: 2
}, {
  value: "Model",
  id: "model",
  level: 3
}, {
  value: "View",
  id: "view",
  level: 3
}, {
  value: "Presenter",
  id: "presenter",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u61C9\u7528\u4E2D\uFF0C\u53EF\u4EE5\u6709\u4EFB\u610F\u6578\u91CF\u7684\u201C\u87A2\u5E55\u201D\uFF08\u4E0B\u9762\u7684\u7BC4\u4F8B\u6709\u5169\u500B\u87A2\u5E55\uFF09\u3002 TouchGFX\u4E2D\u7684\u87A2\u5E55\u662FUI\u5143\u7D20\uFF08\u5C0F\u5DE5\u5177\uFF09\u53CA\u5176\u76F8\u95DC\u4E8B\u52D9\u908F\u8F2F\u7684\u908F\u8F2F\u5206\u7D44\u3002 \u87A2\u5E55\u5305\u542B\u5169\u500B\u985E\uFF1A\u5305\u542B\u8A72\u87A2\u5E55\u4E0A\u986F\u793A\u7684\u6240\u6709\u5C0F\u5DE5\u5177\u7684View\u985E\uFF0C\u4EE5\u53CA\u5305\u542B\u8A72\u87A2\u5E55\u7684\u4E8B\u52D9\u908F\u8F2F\u7684Presenter\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.png",
    mdxType: "Figure"
  }, "\u4E3B\u8996\u7A97\uFF08\u87A2\u5E55 1\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.png",
    mdxType: "Figure"
  }, "\u8A2D\u7F6E\u8996\u7A97\uFF08\u87A2\u5E55 2\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u9078\u64C7\u5728\u55AE\u500B\u87A2\u5E55\u7684\u80CC\u666F\u4E0B\u5BE6\u73FE\u6574\u500B\u61C9\u7528\uFF08\u610F\u5473\u8457\u53EA\u6709\u4E00\u500BView\u548C\u4E00\u500BPresenter\uFF09\uFF0C\u4F46\u6211\u5011\u5EFA\u8B70\u5C07UI\u7684\u4E0D\u76F8\u95DC\u90E8\u5206\u5206\u5272\u6210\u4E0D\u540C\u87A2\u5E55\uFF0C\u539F\u56E0\u6709\u5169\u500B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u5305\u542B\u8A18\u61B6\u9AD4\u5206\u914D\u65B9\u6848\uFF0C\u53EF\u81EA\u52D5\u5206\u914D\u5927\u591A\u6578RAM\u5360\u7528\u91CF\u5927\u7684\u87A2\u5E55\u6240\u9700\u7684\u5FC5\u8981RAM\u3002 \u53EA\u6703\u5206\u914D\u5FC5\u8981\u7684\u91CF\uFF0C\u6B64RAM\u5340\u584A\u5C07\u5728\u61C9\u7528\u4E2D\u7684\u6240\u6709\u87A2\u5E55\u4E4B\u9593\u91CD\u8907\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6709\u591A\u500B\u87A2\u5E55\u6703\u4F7FUI\u7A0B\u5F0F\u78BC\u7684\u7DAD\u8B77\u5BB9\u6613\u5F97\u591A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "defining-screens"
  }), `\u5B9A\u7FA9\u87A2\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u61C9\u5982\u4F55\u5C07\u61C9\u7528\u5283\u5206\u6210\u591A\u500B\u87A2\u5E55\uFF0C\u4E26\u6C92\u6709\u5177\u9AD4\u7684\u898F\u5247\uFF0C\u4F46\u6709\u7279\u5B9A\u7684\u6307\u5357\uFF0C\u4E5F\u8A31\u80FD\u8AAC\u660E\u60A8\u6C7A\u5B9A\u61C9\u7576\u7528\u54EA\u4E9B\u87A2\u5E55\u69CB\u6210\u60A8\u7684\u7279\u5B9A\u61C9\u7528\u3002 \u5728\u8996\u89BA\u548C\u529F\u80FD\u4E0A\u7121\u95DC\u7684UI\u5340\u57DF\u61C9\u4FDD\u5B58\u5728\u4E0D\u540C\u87A2\u5E55\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u662F\u5341\u5206\u7C21\u55AE\u7684\u6709\u4E3B\u6EAB\u5EA6\u8B80\u51FA\u986F\u793A\u5668\u548C\u914D\u7F6E\u529F\u80FD\u8868\u7684\u6052\u6EAB\u5668\u61C9\u7528\uFF0C\u5EFA\u8B70\u5275\u5EFA\u201C\u4E3B\u87A2\u5E55\u201D\u7528\u65BC\u6EAB\u5EA6\u8B80\u51FA\uFF0C\u4E26\u5275\u5EFA\u201C\u8A2D\u7F6E\u87A2\u5E55\u201D\u7528\u65BC\u986F\u793A\u914D\u7F6E\u529F\u80FD\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u87A2\u5E55\u7684\u8996\u5716\u5C07\u5305\u542B\u7528\u65BC\u80CC\u666F\u5716\u50CF\u7684\u5C0F\u5DE5\u5177\uFF0C\u5E7E\u500B\u986F\u793A\u6EAB\u5EA6\u7684\u6587\u5B57\u5340\u548C\u4E00\u500B\u7528\u65BC\u5207\u63DB\u81F3\u914D\u7F6E\u529F\u80FD\u8868\u7684\u6309\u9215\u3002 \u53E6\u4E00\u65B9\u9762\uFF0C\u7528\u65BC\u914D\u7F6E\u7684\u8996\u5716\u53EF\u80FD\u5305\u542B\u986F\u793A\u914D\u7F6E\u9078\u9805\u6E05\u55AE\u548C\u4E0D\u540C\u80CC\u666F\u5716\u50CF\u7684\u5C0F\u5DE5\u5177\u3002 \u5982\u679C\u914D\u7F6E\u529F\u80FD\u8868\u80FD\u5920\u7DE8\u8F2F\u8A31\u591A\u4E0D\u540C\u985E\u578B\u7684\u8A2D\u7F6E\uFF08\u65E5\u671F\u3001\u540D\u7A31\u548C\u9375\u76E4\u3001\u6EAB\u5EA6\u3001\u55AE\u4F4D\u7B49\uFF09\uFF0C\u6B64\u87A2\u5E55\u7684\u8907\u96DC\u6027\u5C07\u5927\u5E45\u63D0\u5347\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u87A2\u5E55\u7684\u8996\u5716\u5C07\u5305\u542B\u7528\u65BC\u80CC\u666F\u5716\u50CF\u7684\u5C0F\u5DE5\u5177\uFF0C\u5E7E\u500B\u986F\u793A\u6EAB\u5EA6\u7684\u6587\u5B57\u5340\u548C\u4E00\u500B\u7528\u65BC\u5207\u63DB\u81F3\u914D\u7F6E\u529F\u80FD\u8868\u7684\u6309\u9215\u3002 \u53E6\u4E00\u65B9\u9762\uFF0C\u7528\u65BC\u914D\u7F6E\u7684\u8996\u5716\u53EF\u80FD\u5305\u542B\u986F\u793A\u914D\u7F6E\u9078\u9805\u6E05\u55AE\u548C\u4E0D\u540C\u80CC\u666F\u5716\u50CF\u7684\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "currently-active-screen"
  }), `\u7576\u524D\u6D3B\u52D5\u87A2\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u6700\u597D\u5C07\u914D\u7F6E\u529F\u80FD\u8868\u9032\u4E00\u6B65\u5206\u5272\u6210\u4E00\u500B\u986F\u793A\u5B8C\u6574\u529F\u80FD\u8868\u9078\u9805\u6A39\u7684\u87A2\u5E55\u548C\u53E6\u4E00\u500B\u7528\u65BC\u7DE8\u8F2F\u7279\u5B9A\u503C\u7684\u87A2\u5E55\u3002 \u60A8\u6703\u5728\u5C08\u6848\u958B\u767C\u7684\u904E\u7A0B\u4E2D\u5B78\u5230\u9019\u4E9B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5F9E\u201C\u5F8C\u7AEF\u201D\uFF08\u6240\u6709\u57F7\u884C\u6052\u6EAB\u5668\u5BE6\u969B\u5DE5\u4F5C\u7684\u975EUI\u7A0B\u5F0F\u78BC\uFF09\u6216\u786C\u9AD4\u5916\u8A2D\u63A5\u6536\u5230\u4E8B\u4EF6\uFF0C\u5247\u53EF\u4EE5\u5C07\u9019\u4E9B\u4E8B\u4EF6\u59D4\u8A17\u7D66\u7576\u524D\u6D3B\u52D5\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u4E00\u4E9B\u4E8B\u4EF6\u5C07\u53EA\u8207\u61C9\u7528\u4E2D\u7684\u7279\u5B9A\u87A2\u5E55\u6709\u95DC\uFF0C\u56E0\u6B64\u6709\u6548\u5730\u9694\u96E2\u4E86\u554F\u984C\u3002 \u4F8B\u5982\uFF0C\u53EA\u6709\u4E3B\u87A2\u5E55\u624D\u80FD\u8655\u7406\u901A\u77E5\u7576\u524D\u6EAB\u5EA6\u8B8A\u5316\u7684\u5DF2\u63A5\u6536\u4E8B\u4EF6\uFF08\u5C07\u66F4\u65B0\u986F\u793A\u7576\u524D\u6EAB\u5EA6\u7684\u6587\u5B57\u5340\uFF09\uFF0C\u800C\u7531\u65BC\u7576\u524D\u6EAB\u5EA6\u672A\u986F\u793A\u5728\u914D\u7F6E\u87A2\u5E55\u4E0A\uFF0C\u914D\u7F6E\u87A2\u5E55\u53EF\u4EE5\u76F4\u63A5\u4E1F\u68C4\u6B64\u7121\u95DC\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "model-view-presenter-in-touchgfx"
  }), `TouchGFX\u4E2D\u7684Model-View-Presenter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u4E00\u4E9B\u4E8B\u4EF6\u5C07\u53EA\u8207\u61C9\u7528\u4E2D\u7684\u7279\u5B9A\u87A2\u5E55\u6709\u95DC\uFF0C\u56E0\u6B64\u6709\u6548\u5730\u9694\u96E2\u4E86\u554F\u984C\u3002 \u4F8B\u5982\uFF0C\u53EA\u6709\u4E3B\u87A2\u5E55\u624D\u80FD\u8655\u7406\u901A\u77E5\u7576\u524D\u6EAB\u5EA6\u8B8A\u5316\u7684\u5DF2\u63A5\u6536\u4E8B\u4EF6\uFF08\u5C07\u66F4\u65B0\u986F\u793A\u7576\u524D\u6EAB\u5EA6\u7684\u6587\u5B57\u5340\uFF09\uFF0C\u800C\u7531\u65BC\u7576\u524D\u6EAB\u5EA6\u672A\u986F\u793A\u5728\u914D\u7F6E\u87A2\u5E55\u4E0A\uFF0C\u914D\u7F6E\u87A2\u5E55\u53EF\u4EE5\u76F4\u63A5\u4E1F\u68C4\u6B64\u7121\u95DC\u4E8B\u4EF6\u3002 \u56E0\u6B64\uFF0C\u5728TouchGFX Designer\u4E2D\u5C07\u65B0\u87A2\u5E55\u6DFB\u52A0\u5230\u61C9\u7528\u6642\uFF0C\u6703\u5275\u5EFA\u65B0\u7684\u7279\u5B9AView\u985E\u548CPresenter\u985E\u4EE5\u4EE3\u8868\u8A72\u7279\u5B9A\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u61C9\u7528\u4E2DMVP\u985E\u7684\u5167\u5BB9\u548C\u8CAC\u4EFB\u5982\u4E0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "model"
  }), `Model`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u61C9\u7528\u4E2DMVP\u985E\u7684\u5167\u5BB9\u548C\u8CAC\u4EFB\u5982\u4E0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4FDD\u5B58UI\u7684\u72C0\u614B\u8CC7\u8A0A\u3002 \u5728\u5207\u63DB\u87A2\u5E55\u6642\uFF0CView\u548CPresenter\u7684\u5206\u914D\u6703\u88AB\u89E3\u9664\uFF0C\u56E0\u6B64\u5B83\u5011\u4E0D\u80FD\u7528\u65BC\u5B58\u5132\u5728\u87A2\u5E55\u8F49\u63DB\u6642\u61C9\u7576\u4FDD\u7559\u7684\u8CC7\u8A0A\u3002 \u70BA\u6B64\uFF0C\u5C07\u6539\u7528Model\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4F5C\u70BA\u9762\u5411\u5F8C\u7AEF\u7CFB\u7D71\u7684\u4ECB\u9762\uFF0C\u5411/\u5F9E\u7576\u524D\u6D3B\u52D5\u87A2\u5E55\u767C\u9001\u4E8B\u4EF6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model\u985E\u662F\u81EA\u52D5\u8A2D\u7F6E\u7684\uFF0C\u5177\u6709\u6307\u5411\u7576\u524D\u6D3B\u52D5Presenter\u7684\u6307\u6A19\u3002 \u7576Model\u4E2D\u767C\u751F\u8B8A\u5316\u6642\uFF0C\u5C07\u8B8A\u5316\u901A\u77E5\u7576\u524D\u6D3B\u52D5Presenter\u3002 \u9019\u662F\u901A\u904E\u61C9\u7528\u4E2DModelListener\u4ECB\u9762\u4E2D\u7684\u65B9\u6CD5\u4F86\u5B8C\u6210\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u751F\u6210\u7684\u65B0\u61C9\u7528\u5C07\u81EA\u52D5\u64C1\u6709\u53EF\u76F4\u63A5\u4F9BUI\u4F7F\u7528\u7684Model\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "view"
  }), `View`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View\u985E\uFF08\u6216\u8005\u66F4\u5177\u9AD4\u5730\u8AAA\uFF0C\u884D\u751F\u81EATouchGFX View\u985E\u7684\u985E\uFF09\u5305\u542B\u4E86\u8A72\u8996\u5716\u4E2D\u986F\u793A\u7684\u5C0F\u5DE5\u5177\u4F5C\u70BA\u6210\u54E1\u5C0D\u8C61\u3002 \u5B83\u9084\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen`), `\u51FD\u6578\uFF0C\u7576\u9032\u5165/\u9000\u51FA\u8A72\u87A2\u5E55\u6642\uFF0C\u6703\u81EA\u52D5\u547C\u53EB\u5B83\u5011\u3002 \u901A\u5E38\u6703\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), `\u51FD\u6578\u4E2D\u914D\u7F6E\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View\u9084\u5C07\u5305\u542B\u6307\u5411\u76F8\u95DCPresenter\u7684\u6307\u6A19\u3002 \u8A72\u6307\u6A19\u901A\u904E\u6846\u67B6\u81EA\u52D5\u8A2D\u7F6E\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528\u8A72\u6307\u6A19\u8207Presenter\u9032\u884CUI\u4E8B\u4EF6\uFF08\u5982\u6309\u9215\u9EDE\u64CA\uFF09\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "presenter"
  }), `Presenter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View\u9084\u5C07\u5305\u542B\u6307\u5411\u76F8\u95DCPresenter\u7684\u6307\u6A19\u3002 \u8A72\u6307\u6A19\u901A\u904E\u6846\u67B6\u81EA\u52D5\u8A2D\u7F6E\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528\u8A72\u6307\u6A19\u8207Presenter\u9032\u884CUI\u4E8B\u4EF6\uFF08\u5982\u6309\u9215\u9EDE\u64CA\uFF09\u901A\u4FE1\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);