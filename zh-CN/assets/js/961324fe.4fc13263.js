"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3102],{

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

/***/ 68186:
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
  title: "\u5C4F\u5E55\u6982\u5FF5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "id": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "title": "\u5C4F\u5E55\u6982\u5FF5",
  "description": "\u4ECE\u201C@site/components/Figure\u201D\u5BFC\u5165\u56FE\u7247\uFF1B",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/screen-definition-and-mvp",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/software-architecture/screen-definition-and-mvp",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "screen-definition-and-mvp",
    "title": "\u5C4F\u5E55\u6982\u5FF5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Model-View-Presenter\u8BBE\u8BA1\u6A21\u5F0F",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"
  },
  "next": {
    "title": "\u4EE3\u7801\u7ED3\u6784",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/software-architecture/code-structure"
  }
};
const assets = {};
const toc = [{
  value: "\u5B9A\u4E49\u5C4F\u5E55",
  id: "defining-screens",
  level: 3
}, {
  value: "\u5F53\u524D\u6D3B\u52A8\u5C4F\u5E55",
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
const makeShortcode = (name) => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("div", __spreadValues({}, props));
};
const Figure = makeShortcode("Figure");
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECE\u201C@site/components/Figure\u201D\u5BFC\u5165\u56FE\u7247\uFF1B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u5E94\u7528\u4E2D\uFF0C\u53EF\u4EE5\u6709\u4EFB\u610F\u6570\u91CF\u7684\u201C\u5C4F\u5E55\u201D\uFF08\u4E0B\u9762\u7684\u793A\u4F8B\u6709\u4E24\u4E2A\u5C4F\u5E55\uFF09\u3002 TouchGFX\u4E2D\u7684\u5C4F\u5E55\u662FUI\u5143\u7D20\uFF08\u5C0F\u5DE5\u5177\uFF09\u53CA\u5176\u76F8\u5173\u4E1A\u52A1\u903B\u8F91\u7684\u903B\u8F91\u5206\u7EC4\u3002 \u5C4F\u5E55\u5305\u542B\u4E24\u4E2A\u7C7B\uFF1A\u5305\u542B\u8BE5\u5C4F\u5E55\u4E0A\u663E\u793A\u7684\u6240\u6709\u5C0F\u5DE5\u5177\u7684View\u7C7B\uFF0C\u4EE5\u53CA\u5305\u542B\u8BE5\u5C4F\u5E55\u7684\u4E1A\u52A1\u903B\u8F91\u7684Presenter\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(Figure, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.png",
    mdxType: "Figure"
  }, "\u4E3B\u89C6\u56FE\uFF08\u5C4F\u5E55 1\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(Figure, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.png",
    mdxType: "Figure"
  }, "\u8BBE\u7F6E\u89C6\u56FE\uFF08\u5C4F\u5E55 2\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u9009\u62E9\u5728\u5355\u4E2A\u5C4F\u5E55\u7684\u80CC\u666F\u4E0B\u5B9E\u73B0\u6574\u4E2A\u5E94\u7528\uFF08\u610F\u5473\u7740\u53EA\u6709\u4E00\u4E2AView\u548C\u4E00\u4E2APresenter\uFF09\uFF0C\u4F46\u6211\u4EEC\u5EFA\u8BAE\u5C06UI\u7684\u4E0D\u76F8\u5173\u90E8\u5206\u5206\u5272\u6210\u4E0D\u540C\u5C4F\u5E55\uFF0C\u539F\u56E0\u6709\u4E24\u4E2A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u5305\u542B\u5B58\u50A8\u5668\u5206\u914D\u65B9\u6848\uFF0C\u53EF\u81EA\u52A8\u5206\u914D\u5927\u591A\u6570RAM\u5360\u7528\u91CF\u5927\u7684\u5C4F\u5E55\u6240\u9700\u7684\u5FC5\u8981RAM\u3002 \u53EA\u4F1A\u5206\u914D\u5FC5\u8981\u7684\u91CF\uFF0C\u6B64RAM\u5757\u5C06\u5728\u5E94\u7528\u4E2D\u7684\u6240\u6709\u5C4F\u5E55\u4E4B\u95F4\u91CD\u590D\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6709\u591A\u4E2A\u5C4F\u5E55\u4F1A\u4F7FUI\u4EE3\u7801\u7684\u7EF4\u62A4\u5BB9\u6613\u5F97\u591A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "defining-screens"
  }), `\u5B9A\u4E49\u5C4F\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5173\u4E8E\u5E94\u5982\u4F55\u5C06\u5E94\u7528\u5212\u5206\u6210\u591A\u4E2A\u5C4F\u5E55\uFF0C\u5E76\u6CA1\u6709\u5177\u4F53\u7684\u89C4\u5219\uFF0C\u4F46\u6709\u7279\u5B9A\u7684\u6307\u5357\uFF0C\u4E5F\u8BB8\u80FD\u5E2E\u52A9\u60A8\u51B3\u5B9A\u5E94\u5F53\u7528\u54EA\u4E9B\u5C4F\u5E55\u6784\u6210\u60A8\u7684\u7279\u5B9A\u5E94\u7528\u3002 \u5728\u89C6\u89C9\u548C\u529F\u80FD\u4E0A\u65E0\u5173\u7684UI\u533A\u57DF\u5E94\u4FDD\u5B58\u5728\u4E0D\u540C\u5C4F\u5E55\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u662F\u5341\u5206\u7B80\u5355\u7684\u6709\u4E3B\u6E29\u5EA6\u8BFB\u51FA\u663E\u793A\u5668\u548C\u914D\u7F6E\u83DC\u5355\u7684\u6052\u6E29\u5668\u5E94\u7528\uFF0C\u5EFA\u8BAE\u521B\u5EFA\u201C\u4E3B\u5C4F\u5E55\u201D\u7528\u4E8E\u6E29\u5EA6\u8BFB\u51FA\uFF0C\u5E76\u521B\u5EFA\u201C\u8BBE\u7F6E\u5C4F\u5E55\u201D\u7528\u4E8E\u663E\u793A\u914D\u7F6E\u83DC\u5355\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u5C4F\u5E55\u7684\u89C6\u56FE\u5C06\u5305\u542B\u7528\u4E8E\u80CC\u666F\u56FE\u50CF\u7684\u5C0F\u5DE5\u5177\uFF0C\u51E0\u4E2A\u663E\u793A\u6E29\u5EA6\u7684\u6587\u672C\u533A\u548C\u4E00\u4E2A\u7528\u4E8E\u5207\u6362\u81F3\u914D\u7F6E\u83DC\u5355\u7684\u6309\u94AE\u3002 \u53E6\u4E00\u65B9\u9762\uFF0C\u7528\u4E8E\u914D\u7F6E\u7684\u89C6\u56FE\u53EF\u80FD\u5305\u542B\u663E\u793A\u914D\u7F6E\u9009\u9879\u5217\u8868\u548C\u4E0D\u540C\u80CC\u666F\u56FE\u50CF\u7684\u5C0F\u5DE5\u5177\u3002 \u5982\u679C\u914D\u7F6E\u83DC\u5355\u80FD\u591F\u7F16\u8F91\u8BB8\u591A\u4E0D\u540C\u7C7B\u578B\u7684\u8BBE\u7F6E\uFF08\u65E5\u671F\u3001\u540D\u79F0\u548C\u952E\u76D8\u3001\u6E29\u5EA6\u3001\u5355\u4F4D\u7B49\uFF09\uFF0C\u6B64\u5C4F\u5E55\u7684\u590D\u6742\u6027\u5C06\u5927\u5E45\u63D0\u5347\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u5C4F\u5E55\u7684\u89C6\u56FE\u5C06\u5305\u542B\u7528\u4E8E\u80CC\u666F\u56FE\u50CF\u7684\u5C0F\u5DE5\u5177\uFF0C\u51E0\u4E2A\u663E\u793A\u6E29\u5EA6\u7684\u6587\u672C\u533A\u548C\u4E00\u4E2A\u7528\u4E8E\u5207\u6362\u81F3\u914D\u7F6E\u83DC\u5355\u7684\u6309\u94AE\u3002 \u4F46\u968F\u7740\u9879\u76EE\u7684\u8FDB\u5C55\uFF0C\u8FD9\u662F\u60A8\u5C06\u5B66\u5230\u7684\u4E1C\u897F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "currently-active-screen"
  }), `\u5F53\u524D\u6D3B\u52A8\u5C4F\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E TouchGFX \u4E3A\u5C4F\u5E55\u5206\u914D\u5185\u5B58\u7684\u65B9\u5F0F\uFF08\u53EA\u4E3A\u6700\u5927\u7684 View \u548C\u6700\u5927\u7684 Presenter \u5206\u914D\uFF09\uFF0C\u4E00\u6B21\u53EA\u80FD\u6709\u4E00\u4E2A View \u548C\u4E00\u4E2A Presenter \u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u3002 \u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u7684\u6052\u6E29\u5668\u5E94\u7528\u7A0B\u5E8F\u6B63\u5728\u663E\u793A\u6E29\u5EA6\u8BFB\u6570\uFF0C\u90A3\u4E48\u914D\u7F6E\u83DC\u5355\u5C4F\u5E55\u4E0D\u4F1A\u5728\u4EFB\u4F55\u5730\u65B9\u8FD0\u884C\uFF0C\u5B9E\u9645\u4E0A\u751A\u81F3\u6CA1\u6709\u5206\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4ECE\u201C\u540E\u7AEF\u201D\uFF08\u6240\u6709\u6267\u884C\u6052\u6E29\u5668\u5B9E\u9645\u5DE5\u4F5C\u7684\u975EUI\u4EE3\u7801\uFF09\u6216\u786C\u4EF6\u5916\u8BBE\u63A5\u6536\u5230\u4E8B\u4EF6\uFF0C\u5219\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u4E8B\u4EF6\u4F20\u9012\u7ED9\u5F53\u524D\u6D3B\u52A8\u5C4F\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u4E00\u4E9B\u4E8B\u4EF6\u5C06\u53EA\u4E0E\u5E94\u7528\u4E2D\u7684\u7279\u5B9A\u5C4F\u5E55\u6709\u5173\uFF0C\u56E0\u6B64\u8FD9\u63D0\u4F9B\u4E86\u6709\u6548\u7684\u9694\u79BB\u65B9\u5F0F\u3002 \u4F8B\u5982\uFF0C\u53EA\u6709\u4E3B\u5C4F\u5E55\u624D\u80FD\u5904\u7406\u901A\u77E5\u5F53\u524D\u6E29\u5EA6\u53D8\u5316\u7684\u5DF2\u63A5\u6536\u4E8B\u4EF6\uFF08\u5C06\u66F4\u65B0\u663E\u793A\u5F53\u524D\u6E29\u5EA6\u7684\u6587\u672C\u533A\uFF09\uFF0C\u800C\u7531\u4E8E\u5F53\u524D\u6E29\u5EA6\u672A\u663E\u793A\u5728\u914D\u7F6E\u5C4F\u5E55\u4E0A\uFF0C\u914D\u7F6E\u5C4F\u5E55\u53EF\u4EE5\u76F4\u63A5\u4E22\u5F03\u6B64\u65E0\u5173\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "model-view-presenter-in-touchgfx"
  }), `TouchGFX\u4E2D\u7684Model-View-Presenter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \u9075\u5FAA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "model-view-presenter-design-pattern"
  }), `Model-View-Presenter Design Pattern`), `\u63CF\u8FF0\u7684Model-View-Presenter \u8BBE\u8BA1\u6A21\u5F0F\u3002 TouchGFX \u5C4F\u5E55\u6982\u5FF5\u901A\u8FC7\u7EE7\u627F\u81EA TouchGFX \u4E2D\u7684 View \u548C Presenter \u7C7B\u7684\u7C7B\u4E0E\u6574\u4E2A Model-View-Presenter \u67B6\u6784\u8054\u7CFB\u5728\u4E00\u8D77\u3002 \u56E0\u6B64\uFF0C\u5728TouchGFX Designer\u4E2D\u5C06\u65B0\u5C4F\u5E55\u6DFB\u52A0\u5230\u5E94\u7528\u65F6\uFF0C\u4F1A\u521B\u5EFA\u65B0\u7684\u7279\u5B9AView\u7C7B\u548CPresenter\u7C7B\u4EE5\u4EE3\u8868\u8BE5\u7279\u5B9A\u5C4F\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5E94\u7528\u4E2DMVP\u7C7B\u7684\u5185\u5BB9\u548C\u8D23\u4EFB\u5982\u4E0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "model"
  }), `Model`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model \u7C7B\u662F\u4E00\u4E2A\u6C38\u8FDC\u5B58\u5728\u7684\u5355\u7C7B\uFF0C\u5B83\u6709\u4E24\u4E2A\u7528\u9014\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4FDD\u5B58UI\u7684\u72B6\u6001\u4FE1\u606F\u3002 \u5728\u5207\u6362\u5C4F\u5E55\u65F6\uFF0CView\u548CPresenter\u7684\u5206\u914D\u4F1A\u88AB\u6E05\u9664\uFF0C\u56E0\u6B64\u5B83\u4EEC\u4E0D\u80FD\u7528\u4E8E\u5B58\u50A8\u5728\u5C4F\u5E55\u8F6C\u6362\u65F6\u5E94\u5F53\u4FDD\u7559\u7684\u4FE1\u606F\u3002 \u4E3A\u6B64\uFF0C\u4F7F\u7528Mode\u4FDD\u5B58\u4FE1\u606Fl\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4F5C\u4E3A\u9762\u5411\u540E\u7AEF\u7CFB\u7EDF\u7684\u63A5\u53E3\uFF0C\u5411/\u4ECE\u5F53\u524D\u6D3B\u52A8\u5C4F\u5E55\u53D1\u9001\u4E8B\u4EF6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model\u7C7B\u662F\u81EA\u52A8\u8BBE\u7F6E\u7684\uFF0C\u5177\u6709\u6307\u5411\u5F53\u524D\u6D3B\u52A8Presenter\u7684\u6307\u9488\u3002 \u5F53Model\u4E2D\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u53D8\u5316\u901A\u77E5\u5F53\u524D\u6D3B\u52A8Presenter\u3002 \u8FD9\u662F\u901A\u8FC7\u5E94\u7528\u4E2DModelListener\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u6765\u5B8C\u6210\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u751F\u6210\u7684\u65B0\u5E94\u7528\u5C06\u81EA\u52A8\u62E5\u6709\u53EF\u76F4\u63A5\u4F9BUI\u4F7F\u7528\u7684Model\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "view"
  }), `View`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View\u7C7B\uFF08\u6216\u8005\u66F4\u5177\u4F53\u5730\u8BF4\uFF0C\u6D3E\u751F\u81EATouchGFX View\u7C7B\u7684\u7C7B\uFF09\u5305\u542B\u4E86\u8BE5\u89C6\u56FE\u4E2D\u663E\u793A\u7684\u63A7\u4EF6\u4F5C\u4E3A\u6210\u5458\u5BF9\u8C61\u3002 \u5B83\u8FD8\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen`), `\u51FD\u6570\uFF0C\u5F53\u8FDB\u5165/\u9000\u51FA\u8BE5\u5C4F\u5E55\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528\u5B83\u4EEC\u3002 \u901A\u5E38\u4F1A\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), `\u51FD\u6570\u4E2D\u914D\u7F6E\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View\u8FD8\u5C06\u5305\u542B\u6307\u5411\u76F8\u5173Presenter\u7684\u6307\u9488\u3002 \u8BE5\u6307\u9488\u901A\u8FC7\u6846\u67B6\u81EA\u52A8\u8BBE\u7F6E\u3002 \u4F7F\u7528\u6B64\u6307\u9488\uFF0C\u60A8\u53EF\u4EE5\u5C06 UI \u4E8B\u4EF6\uFF08\u5982\u6309\u94AE\u5355\u51FB\uFF09\u4F20\u8FBE\u7ED9 Presenter\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "presenter"
  }), `Presenter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u7684 Presenter \u7C7B\uFF08\u540C\u6837\uFF0C\u4E00\u4E2A\u6D3E\u751F\u81EA TouchGFX Presenter \u7C7B\u7684\u7C7B\uFF09\u8D1F\u8D23\u5F53\u524D\u6D3B\u52A8\u5C4F\u5E55\u7684\u4E1A\u52A1\u903B\u8F91\u3002 \u5B83\u5C06\u63A5\u6536\u6765\u81EA\u6A21\u578B\u7684\u201C\u540E\u7AEF\u201D\u4E8B\u4EF6\uFF0C\u4EE5\u53CA\u6765\u81EA\u89C6\u56FE\u7684 UI \u4E8B\u4EF6\uFF0C\u5E76\u51B3\u5B9A\u91C7\u53D6\u4F55\u79CD\u884C\u52A8\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u4ECE Model \u63A5\u6536\u5230\u8B66\u62A5\u4E8B\u4EF6\uFF0CPresenter \u53EF\u80FD\u51B3\u5B9A\u544A\u8BC9 View \u5E94\u8BE5\u663E\u793A\u8B66\u62A5\u5F39\u51FA\u5BF9\u8BDD\u6846\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);