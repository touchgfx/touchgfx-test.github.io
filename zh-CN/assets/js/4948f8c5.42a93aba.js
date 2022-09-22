"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[602],{

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

/***/ 18434:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22425);
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
  id: "operating-system",
  title: "\u64CD\u4F5C\u7CFB\u7EDF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/operating-system",
  "id": "basic-concepts/operating-system",
  "title": "\u64CD\u4F5C\u7CFB\u7EDF",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/operating-system",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/operating-system",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "operating-system",
    "title": "\u64CD\u4F5C\u7CFB\u7EDF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6027\u80FD",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/performance"
  },
  "next": {
    "title": "\u5185\u5B58\u4F7F\u7528",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/memory-usage"
  }
};
const assets = {};

const toc = [{
  value: "\u5F15\u8A00",
  id: "introduction",
  level: 2
}, {
  value: "\u5176\u4ED6\u4EFB\u52A1\u4E0E\u7528\u6237\u754C\u9762\u7684\u4EA4\u4E92",
  id: "interleaving-other-tasks-with-the-user-interface",
  level: 3
}, {
  value: "\u793A\u4F8B",
  id: "an-example",
  level: 3
}, {
  value: "RTOS",
  id: "rtos",
  level: 2
}, {
  value: "Task communication",
  id: "task-communication",
  level: 3
}, {
  value: "\u5904\u7406\u4E2D\u65AD",
  id: "handling-interrupts",
  level: 3
}, {
  value: "FreeRTOS",
  id: "freertos",
  level: 3
}, {
  value: "TouchGFX OS Wrappers",
  id: "touchgfx-os-wrappers",
  level: 3
}, {
  value: "\u65E0RTOS",
  id: "no-rtos",
  level: 2
}, {
  value: "Model::tick",
  id: "modeltick",
  level: 3
}, {
  value: "OSWrappers",
  id: "oswrappers",
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
    "id": "introduction"
  }), `\u5F15\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u8BA8\u8BBA\u56FE\u5F62\u7528\u6237\u754C\u9762\u5E94\u7528\u4E2D\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5D4C\u5165\u5F0F\u8BBE\u5907\u8D8A\u6765\u8D8A\u5148\u8FDB\u3002 \u7CFB\u7EDF\u7684\u5927\u90E8\u5206\u8BBE\u5907\u4E0D\u4EC5\u5904\u7406\u56FE\u5F62\u7528\u6237\u754C\u9762\uFF0C\u901A\u5E38\u8FD8\u5904\u7406\u590D\u6742\u7684\u63A7\u5236\u7B97\u6CD5\u548C\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u53EF\u4EE5\u662F\u7535\u673A\u63A7\u5236\u3001\u6570\u636E\u83B7\u53D6\u6216\u5B89\u5168\u76F8\u5173\u4EFB\u52A1\u3002 \u8BB8\u591A\u5148\u8FDB\u8BBE\u5907\u5305\u542B\u7528\u6765\u4E0E\u6570\u636E\u4E2D\u5FC3\u901A\u4FE1\u7684\u901A\u4FE1\u534F\u8BAE\u6808\uFF08\u5982TCP/IP\uFF09\u6216\u7528\u6765\u4E0E\u5176\u4ED6\u672C\u5730\u8BBE\u5907\u901A\u4FE1\u7684\u5C04\u9891\u534F\u8BAE\u6808\uFF08\u5982\u84DD\u7259\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interleaving-other-tasks-with-the-user-interface"
  }), `\u5176\u4ED6\u4EFB\u52A1\u4E0E\u7528\u6237\u754C\u9762\u7684\u4EA4\u4E92`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5177\u6709\u56FE\u5F62\u7528\u6237\u754C\u9762\u5E76\u53EA\u652F\u6301\u51E0\u9879\u7B80\u5355\u4EFB\u52A1\u7684\u7B80\u5355\u8BBE\u5907\u4E2D\uFF0C\u53EF\u56F4\u7ED5\u7528\u6237\u754C\u9762\u4EE3\u7801\u6784\u5EFA\u6574\u4E2A\u5E94\u7528\u3002 \u9664\u4E86\u5E38\u89C4\u7684\u7528\u6237\u754C\u9762\u5347\u7EA7\uFF0C\u5E94\u7528\u6267\u884C\u7684\u4EFB\u52A1\u975E\u5E38\u5C11\uFF0C\u56E0\u6B64\u53EF\u5C06\u5176\u4ED6\u4EFB\u52A1\u7684\u6267\u884C\u76F8\u5F53\u6210\u529F\u5730\u5D4C\u5165\u7528\u6237\u754C\u9762\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u8BBE\u5907\u5305\u542B\u5177\u6709\u72EC\u4EAB\u65F6\u5E8F\u8981\u6C42\u7684\u66F4\u9AD8\u7EA7\u7684\u201C\u540E\u53F0\u8FD0\u884C\u201D\u529F\u80FD\uFF08\u5982\u8C03\u5236\u7535\u673A\uFF09\u65F6\uFF0C\u5C06\u5F88\u96BE\u5C06\u8FD9\u4E24\u4E2A\u4EFB\u52A1\u5408\u4E8C\u4E3A\u4E00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B63\u5982\u6211\u4EEC\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u4E2D\u8BA8\u8BBA\u7684\u90A3\u6837\uFF0C\u56FE\u5F62\u5F15\u64CE\u5FC5\u987B\u6301\u7EED\u7ED8\u5236\u65B0\u5E27\uFF0C\u624D\u80FD\u652F\u6301\u6D41\u7545\u7684\u7528\u6237\u754C\u9762\u3002 \u5982\u679C\u5728\u8FD0\u884C\u5176\u4ED6\u4EFB\u52A1\u65F6\u9700\u8981\u6682\u505C\u56FE\u5F62\u5F15\u64CE\u4EFB\u52A1\u7684\u8FD0\u884C\uFF0C\u5E27\u7387\u5C06\u4F1A\u4E0B\u964D\u3002 \u540C\u6837\u5730\uFF0C\u5982\u679C\u5176\u4ED6\u4EFB\u52A1\u53EA\u5728\u5E27\u95F4\u3001\u7A7A\u95F2\u65F6\u95F4\u8FD0\u884C\uFF0C\u90A3\u4E48\u5728\u7528\u6237\u754C\u9762\u6E32\u67D3\u590D\u6742\u573A\u666F\u65F6\uFF0C\u7531\u4E8E\u7A7A\u95F2\u65F6\u95F4\u8F83\u5C11\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u4F1A\u53D7\u5230\u5F71\u54CD\u3002 \u8FD9\u4E9B\u5F71\u54CD\u4F7F\u5F97UI\u4EFB\u52A1\u4E0E\u5176\u4ED6\u590D\u6742\u4EFB\u52A1\u7684\u624B\u52A8\u4EA4\u66FF\u53D8\u5F97\u56F0\u96BE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "an-example"
  }), `\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u8282\u5269\u4F59\u90E8\u5206\uFF0C\u6211\u4EEC\u5C06\u6784\u5EFA\u4E00\u4E2A\u5177\u6709\u663E\u793A\u5668\u7684\u84DD\u7259\u626C\u58F0\u5668\u3002 \u6211\u4EEC\u67093\u4E2A\u4E3B\u8981\u4EFB\u52A1\uFF1A\u8FD0\u884C\u56FE\u5F62\u7528\u6237\u754C\u9762\uFF0C\u5C06\u97F3\u4E50\u8F93\u5165\u626C\u58F0\u5668\uFF0C\u4EE5\u53CA\u5904\u7406\u84DD\u7259\u6808\u4EE5\u4FBF\u4E0E\u5176\u4ED6\u8BBE\u5907\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u96BE\u770B\u51FA\uFF0C\u4EE5\u7528\u6237\u754C\u9762\u4E3A\u4E2D\u5FC3\u7684\u5E94\u7528\u67B6\u6784\u5E76\u4E0D\u662F\u597D\u7684\u9009\u62E9\uFF1A\u5047\u8BBE\u6211\u4EEC\u5C06\u97F3\u4E50\u4EE3\u7801\u4E0E\u7528\u6237\u754C\u9762\u6DF7\u5408\uFF0C\u5E76\u5C06\u542F\u52A8\u56DE\u653E\u7684\u4EE3\u7801\u653E\u5728\u7528\u6237\u754C\u9762\u4E0A\u67D0\u4E2A\u6309\u94AE\u7684\u4E8B\u4EF6\u5904\u7406\u4E2D\u3002 \u73B0\u5728\uFF0C\u9700\u8981\u4E00\u70B9\u65F6\u95F4\u624D\u80FD\u5F00\u59CB\u64AD\u653E\u97F3\u4E50\uFF0C\u671F\u95F4\u7528\u6237\u754C\u9762\u88AB\u9501\u5B9A\u3002 \u4E0E\u6B64\u540C\u65F6\uFF0C\u8FD0\u884C\u7684\u4EFB\u4F55\u52A8\u753B\u90FD\u5C06\u505C\u6B62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u754C\u9762\u7684\u54CD\u5E94\u6027\u5F00\u59CB\u4F9D\u8D56\u4E8E\u97F3\u4E50\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\uFF08\u5F00\u59CB\u3001\u505C\u6B62\u548C\u4E0B\u4E00\u9996\u7B49\uFF09\u3002 \u8FD9\u662F\u4E00\u4E2A\u7B3C\u7EDF\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u7A0D\u540E\u518D\u505A\u8BA8\u8BBA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u8FD8\u60F3\u4ECE\u84DD\u7259\u64AD\u653E\u97F3\u4E50\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F \u7528\u6237\u754C\u9762\u662F\u5426\u5E94\u4EE5\u67D0\u79CD\u65B9\u5F0F\u4ECB\u5165\u5176\u4E2D\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5982\u4F55\u4E3A\u97F3\u4E50\u4EFB\u52A1\u5206\u914D\u4F18\u5148\u7EA7\uFF0C\u4EE5\u907F\u514D\u97F3\u4E50\u6682\u505C\uFF1F \u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u8FD8\u5E0C\u671B\u5728\u6CA1\u6709\u97F3\u4E50\u4EFB\u52A1\u8FD0\u884C\u65F6\u7528\u6237\u754C\u9762\u4EE5\u6700\u9AD8\u6027\u80FD\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u901A\u8FC7\u4EFB\u52A1\u3001\u901A\u4FE1\u624B\u6BB5\u548C\u540C\u6B65\u6765\u89E3\u51B3\u6240\u6709\u8FD9\u4E9B\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "rtos"
  }), `RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9E\u65F6\u64CD\u4F5C\u7CFB\u7EDF\u662F\u4E00\u4E2A\u5C0F\u8F6F\u4EF6\uFF0C\u5B83\u901A\u8FC7\u5404\u79CD\u670D\u52A1\u4E3A\u5E94\u7528\u63D0\u4F9B\u652F\u6301\uFF0C\u5E76\u4E3A\u5E94\u7528\u4E2D\u7684\u4EFB\u52A1\u5206\u914D\u8BA1\u7B97\u8D44\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\u5E2E\u52A9\u60A8\u5728\u8BB8\u591A\u72EC\u7ACB\u4F46\u76F8\u4E92\u534F\u4F5C\u7684\u4EFB\u52A1\u4E2D\u6784\u5EFA\u5E94\u7528\u3002 \u7136\u540E\uFF0C\u5728\u8981\u7528\u5230\u8FD9\u4E9B\u4EFB\u52A1\u65F6\uFF0CRTOS\u4F1A\u6839\u636E\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u5E76\u53D1\u6267\u884C\u8FD9\u4E9B\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u751A\u81F3\u53EF\u4EE5\u5C06\u4E00\u9879\u4F5C\u4E1A\u5206\u5272\u6210\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u548C\u4E00\u4E2A\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u3002 \u5047\u8BBE\u6211\u4EEC\u5FC5\u987B\u5728\u84DD\u7259\u6570\u636E\u5230\u8FBE\u65F6\u975E\u5E38\u5FEB\u901F\u5730\u4ECE\u7F13\u51B2\u533A\u8BFB\u53D6\u6570\u636E\uFF0C\u5E76\u5C06\u5B83\u4EEC\u653E\u5165\u8F83\u5927\u7684\u5E94\u7528\u7F13\u51B2\u533A\u3002 \u6570\u636E\u5904\u7406\u53EF\u80FD\u4F1A\u7A0D\u5FAE\u5EF6\u8FDF\u3002 \u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u5C06\u6709\u4E24\u4E2A\u84DD\u7259\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4ECE\u4E3B\u51FD\u6570\u5F00\u59CB4\u9879\u4EFB\u52A1\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main() {
  ...
  os_start_task(gui_task,      medium_priority);
  os_start_task(music_task,    low_priority);
  os_start_task(bt_comm_task,  high_priority);
  os_start_task(bt_appl_task,  low_priority);
  os_start_scheduler();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u6837\u53EF\u4EE5\u5C06\u97F3\u4E50\u7684\u4EFB\u52A1\u5206\u4E3A\u4E24\u4E2A\uFF1A
\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u5C06\u6570\u636E\u8F93\u9001\u5230\u626C\u58F0\u5668\uFF0C\u4E00\u4E2A\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u63A7\u5236\u64AD\u653E\u54EA\u9996\u6B4C\u66F2
\u5E76\u5411\u7528\u6237\u754C\u9762\u53D1\u9001\u901A\u77E5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u4E0A\u8FF0\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u7ED3\u679C\u662F\uFF1A\u5F53\u6709\u6570\u636E\u8981\u5904\u7406\u65F6\uFF0C\u8FD0\u884Cbt_comm_task\u4EFB\u52A1\uFF1B\u5426\u5219\uFF0C\u8FD0\u884C\u7528\u6237\u754C\u9762\u4EFB\u52A1\u3002 \u5F53\u7528\u6237\u754C\u9762\u4EFB\u52A1\u7B49\u5F85\u663E\u793A\u5668\u65F6\uFF0C\u4E24\u4E2A\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u53EF\u4EE5\u8FD0\u884C\u3002 \u64CD\u4F5C\u7CFB\u7EDF\u8C03\u5EA6\u7A0B\u5E8F\u5C06\u4E3A\u6211\u4EEC\u5904\u7406\u6B64\u7C7B\u65F6\u95F4\u5206\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5178\u578B\u7684TouchGFX\u5E94\u7528\u4E2D\uFF0C\u7528\u6237\u754C\u9762\u5728\u6BCF\u4E00\u5E27\u4E2D\u7B49\u5F85\u663E\u793A\u5668\uFF0C\u5B83\u8FD8\u5B9A\u671F\u7B49\u5F85
\u56FE\u5F62\u52A0\u901F\u5668ChromArt\uFF0C\u4EE5\u4FBF\u5B8C\u6210\u7ED8\u5236\u5143\u7D20\u3002
\u8FD9\u610F\u5473\u7740\u9AD8\u4F18\u5148\u4EFB\u52A1\u4F1A\u6709\u8BB8\u591A\u77ED\u6682\u7684\u6682\u505C\uFF0C\u4F18\u5148\u7EA7\u8F83\u4F4E\u7684\u4EFB\u52A1\u53EF\u4EE5\u5728\u6682\u505C\u671F\u95F4\u8FD0\u884C\u3002 \u64CD\u4F5C\u7CFB\u7EDF\u8C03\u5EA6\u7A0B\u5E8F\u5C06\u81EA\u52A8\u66F4\u6539MCU\uFF0C\u4EE5\u4FBF\u5728\u4F18\u5148\u7EA7\u8F83\u9AD8\u7684\u4EFB\u52A1\u7B49\u5F85\u65F6\u8FD0\u884C\u8FD9\u4E9B\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "task-communication"
  }), `Task communication`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u6211\u4EEC\u4F7F\u7528\u591A\u4E2A\u4EFB\u52A1\u65F6\uFF0C\u8FD8\u9700\u8981\u4E00\u79CD\u5B89\u5168\u7684\u901A\u4FE1\u65B9\u5F0F\u7528\u4E8E\u4EFB\u52A1\u95F4\u7684\u901A\u4FE1\u3002 \u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u4ECE\u7528\u6237\u754C\u9762\u5230\u97F3\u4E50\u4EFB\u52A1\u3002 \u9664\u5176\u4ED6\u60C5\u51B5\u5916\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u97F3\u4E50\u4EFB\u52A1\u8FDB\u884C\u7B49\u5F85\uFF0C\u76F4\u81F3gui_task\u4EFB\u52A1\u8981\u6C42\u5176\u5F00\u59CB\u64AD\u653E\u6B4C\u66F2\u3002 \u4E00\u79CD\u7B80\u5355\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\u4F7F\u7528\u6D88\u606F\u961F\u5217\u3002 \u5728\u961F\u5217\u4E2D\u51FA\u73B0\u6D88\u606F\u4E4B\u524D\uFF0C\u97F3\u4E50\u4EFB\u52A1\u4F11\u7720\u3002 \u5F53\u961F\u5217\u4E2D\u51FA\u73B0\u6D88\u606F\u65F6\u4EE5\u53CA\u4F18\u5148\u7EA7\u8F83\u9AD8\u7684\u4EFB\u52A1\u4E0D\u5FD9\u788C\u65F6\uFF0C\u8C03\u5EA6\u7A0B\u5E8F
\u5524\u9192\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `   ...
   music_task_input_queue = os_create_queue(10); //10 element queue
   ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7528\u6237\u754C\u9762\u4E2D\uFF0C\u5F53\u6309\u4E0B\u201C\u64AD\u653E\u201D\u65F6\uFF0C\u6211\u4EEC\u5411\u97F3\u4E50\u4EFB\u52A1\u7684\u961F\u5217\u53D1\u9001\u4E00\u6761\u6D88\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenMusic::handlePlayPressed()
{
   os_send_message(music_task_input_queue, play_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u97F3\u4E50\u4EFB\u52A1\u80FD\u591F\u4EE5\u8BFB\u53D6\u961F\u5217\u7684\u65B9\u5F0F\u7B49\u5F85\u6D88\u606F\u3002 \u8FD9\u4F1A\u5728\u6709\u6D88\u606F\u5230\u8FBE\u524D\u963B\u585E\u4EFB\u52A1\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
Message message;
os_receive_message(music_task_input_queue, &message);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5C06\u6D88\u606F\u653E\u5165\u97F3\u4E50\u4EFB\u52A1\u7684\u961F\u5217\u540E\uFF0C\u7528\u6237\u754C\u9762\u7EE7\u7EED\u8FD0\u884C\u5E76\u5C3D\u5FEB\u6E32\u67D3\u5E27\u3002 \u6211\u4EEC\u4E0D\u5C06\u65F6\u95F4\u6D6A\u8D39\u5728\u7ACB\u5373\u5904\u7406\u64AD\u653E\u6D88\u606F\u4E0A\u3002 \u4F46\u662F\uFF0C\u5728\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C\u5728\u6E32\u67D3\u4E0B\u4E00\u5E27\u4E4B\u524DUI\u4EFB\u52A1\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u8C03\u5EA6\u7A0B\u5E8F\u8F6C\u53BB\u6267\u884C\u97F3\u4E50\u4EFB\u52A1\uFF0C\u6B64\u4EFB\u52A1\u5C06\u5904\u7406\u4F20\u5165\u6D88\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u6837\u5730\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7ED9\u4E88\u7528\u6237\u754C\u9762\u4E00\u4E2A\u8F93\u5165\u961F\u5217\u3002 \u7136\u540E\uFF0C\u97F3\u4E50\u4EFB\u52A1\u53EF\u4EE5\u53D1\u9001\u901A\u77E5\u6D88\u606F\uFF0C\u4F8B\u5982\u5728\u6B4C\u66F2\u7ED3\u675F\u65F6\u3002 \u7528\u6237\u754C\u9762\u4EFB\u52A1\u4E0D\u5E94\u7B49\u5F85\u6D88\u606F\uFF0C\u800C\u5E94\u5FEB\u901F\u68C0\u67E5\u662F\u5426\u6709\u6D88\u606F\uFF08\u65E0\u963B\u585E\uFF09\u5E76\u8BFB\u53D6\u5B83\uFF08\u5982\u679C\u6709\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8BBE\u7F6E\u5728\u7CFB\u7EDF\u4E2D\u7684\u4EFB\u52A1\u4E4B\u95F4\u63D0\u4F9B\u4E86\u4E00\u79CD\u5341\u5206\u7075\u6D3B\u7684\u8FDE\u63A5\u3002 \u6211\u4EEC\u5B9E\u9645\u4E0A\u65E0\u9700\u4F7F\u7528\u7528\u6237\u754C\u9762\u5373\u53EF\u6D4B\u8BD5\u97F3\u4E50\u4EFB\u52A1\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u8F7B\u677E\u5730\u4ECE\u84DD\u7259\u4EFB\u52A1\u64AD\u653E\u97F3\u4E50\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "handling-interrupts"
  }), `\u5904\u7406\u4E2D\u65AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u4EFB\u52A1\u9700\u8981\u4F5C\u4E3A\u5BF9\u4E2D\u65AD\u7684\u54CD\u5E94\u6765\u8FD0\u884C\u3002 \u5728\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u84DD\u7259\u901A\u4FE1\u4EFB\u52A1\u5C31\u662F\u8FD9\u6837\u4E00\u4E2A\u4F8B\u5B50\u3002 \u6211\u4EEC\u5E0C\u671B\u4EFB\u52A1\u5728\u84DD\u7259\u82AF\u7247\u6709\u65B0\u7684\u6570\u636E\u5305\u65F6\u8FD0\u884C\u3002 \u5047\u8BBE\u6211\u4EEC\u80FD\u591F\u5728\u90A3\u79CD\u60C5\u51B5\u4E0B\u4EA7\u751F\u4E00\u4E2A\u4E2D\u65AD\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4ECE\u4E2D\u65AD\u5904\u7406\u5668\u53D1\u9001\u4E00\u6761\u6D88\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void BT_DataAvailable_Handler(void)
{
  os_send_message(bt_data_queue, data_available_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u961F\u5217\uFF0C\u8FD8\u6709\u5176\u4ED6\u540C\u6B65\u7684\u7B56\u7565\u53EF\u7528\u3002 \u4F8B\u5982\uFF0C\u8BB8\u591A\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u90FD\u6709\u4FE1\u53F7\u91CF\u548C\u4E92\u65A5\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "freertos"
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5F00\u53D1\u671F\u95F4\uFF0CTouchGFX\u7684\u6D4B\u8BD5\u662F\u57FA\u4E8EFreeRTOS\u64CD\u4F5C\u7CFB\u7EDF\u7684\u3002 TouchGFX\u5BF9\u7CFB\u7EDF\u7684\u8981\u6C42\u975E\u5E38\u5C11\u5E76\u80FD\u5728\u8BB8\u591A\u5176\u4ED6\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u8FD0\u884C\uFF0C\u4F46FreeRTOS\u662F\u4E00\u4E2A\u5F88\u597D\u4E0A\u624B\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u9664\u975E\u60A8\u6709\u5176\u5B83\u7279\u522B\u7684\u8981\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\u662F\u4E00\u79CD\u7B80\u5355\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5728\u5546\u4E1A\u5E94\u7528\u4E2D\u53EF\u514D\u8D39\u4F7F\u7528\u3002 \u5B83\u4EE5\u6E90\u4EE3\u7801\u7684\u5F62\u5F0F\u968FSTM32Cube\u56FA\u4EF6\u4E00\u8D77\u4F9B\u5E94\uFF0C\u4E3A\u6240\u6709STM32\u5FAE\u63A7\u5236\u5668\u63D0\u4F9B\u4E86\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u8BBF\u95EE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.freertos.org/"
  }), `freertos.org`), `\u4E86\u89E3FreeRTOS\u7684\u66F4\u591A\u4FE1\u606F\u548C\u8BB8\u53EF\u6761\u6B3E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-os-wrappers"
  }), `TouchGFX OS Wrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u9ED8\u8BA4\u914D\u7F6E\u662F\u5728FreeRTOS\u4E0A\u8FD0\u884C\uFF0C\u4F7F\u7528\u4E00\u4E2A\u6D88\u606F\u961F\u5217\u5B9E\u73B0\u4E0E\u663E\u793A\u5668\u63A7\u5236\u5668\u7684\u540C\u6B65\uFF0C\u5E76\u4F7F\u7528\u4FE1\u53F7\u91CF\u4FDD\u62A4\u5BF9\u5E27\u7F13\u51B2\u7684\u8BBF\u95EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u662F\u901A\u8FC7\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/os/OSWrappers.cpp`), `\u4E2D\u5B9A\u4E49\u7684OSWrappers\u7C7B\u6765\u5904\u7406\u7684\u3002 \u8FD9\u4E2A\u7C7B\u5177\u6709\u4E0B\u5217\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E94\u5728\u663E\u793A\u5668\u4E3A\u4E0B\u4E00\u5E27\u505A\u597D\u51C6\u5907\u65F6\u4ECE\u663E\u793A\u5668\u9A71\u52A8\u8C03\u7528\u6B64\u65B9\u6CD5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `waitForVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7531\u56FE\u5F62\u5F15\u64CE\u8C03\u7528\u7528\u4E8E\u7B49\u5F85\u3002 \u5728signalVSync\u88AB\u8C03\u7528\u524D\u4E0D\u5E94\u8FD4\u56DE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `isVSyncAvailable()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uFF08\u53EF\u9009\uFF09\u5982\u679C\u53D1\u751F\u4E86VSync\uFF0C\u5219\u8FD4\u56DEtrue\u3002 \u5728waitForVSync\u4E2D\u53EF\u7528\u4E8E\u907F\u514D\u963B\u585E\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalRenderingDone()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uFF08\u53EF\u9009\uFF09\u5220\u9664\u4EFB\u4F55\u672A\u5904\u7406\u7684VSync\u4FE1\u53F7\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `takeFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7531\u56FE\u5F62\u5F15\u64CE\u548C\u52A0\u901F\u5668\u8C03\u7528\uFF0C\u7528\u6765\u83B7\u53D6\u5BF9\u5E27\u7F13\u51B2\u7684\u76F4\u63A5\u8BBF\u95EE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `giveFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7528\u4E8E\u518D\u6B21\u91CA\u653E\u76F4\u63A5\u8BBF\u95EE\u65F6\u88AB\u8C03\u7528\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9ED8\u8BA4\u5B9E\u73B0\u662F\u4F7F\u7528\u6D88\u606F\u961F\u5217\u5B9E\u73B0VSync\uFF08\u5E27\uFF09\u540C\u6B65\u3002 \u5728\u4E0B\u4E00\u4E2AVSync\u5230\u8FBE\u524D\uFF0C\u56FE\u5F62\u5F15\u64CE\u4EFB\u52A1\u4F11\u7720\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64OSWrapper\u7C7B\u7531TouchGFX Generator\u751F\u6210\u3002 \u70B9\u51FB\u6B64\u5904\u9605\u8BFB\u5173\u4E8EGenerator\u7684\u66F4\u591A\u5185\u5BB9\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"
  }), `here`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "no-rtos"
  }), `\u65E0RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u8FD8\u53EF\u4EE5\u5728\u6CA1\u6709\u64CD\u4F5C\u7CFB\u7EDF\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5FC5\u987B\u5728\u4E3B\u51FD\u6570\u4E2D\u76F4\u63A5\u5F00\u59CB\u56FE\u5F62\u5F15\u64CE\u4E3B\u5FAA\u73AF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main()
{
    ...
    touchgfx::HAL::getInstance()->taskEntry();

    //never returns
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u4F7F\u7528RTOS\u5E76\u4E0D\u4F1A\u964D\u4F4ETouchGFX\u7684\u6027\u80FD\u3002 \u53EF\u80FD\u4F1A\u589E\u52A0MCU\u8D1F\u8F7D\uFF0C\u5E76\u589E\u52A0\u4E0ETouchGFX\u4E00\u8D77\u8FD0\u884C\u5176\u4ED6\u4EFB\u52A1\u7684\u96BE\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u73B0\u5728\u60A8\u9700\u8981\u5728\u4E3B\u51FD\u6570\u4E2D\u7528\u6237\u754C\u9762\u8FD0\u884C\u65F6\u624B\u52A8\u63A7\u5236\u5176\u4ED6\u7684\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "modeltick"
  }), `Model::tick`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u79CD\u65B9\u5F0F\u662F\u5728\u6BCF\u4E00\u5E27\u4E2D\u7684Model\u7C7B\u4E2D\u68C0\u67E5\u6240\u6709\u7684\u4EFB\u52A1\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
   //run other tasks here
   music_task_tick();
   bluetooth_task_tick();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u65B9\u6CD5\u53EF\u5728\u6BCF\u4E00\u5E27\u5C06\u6240\u6709\u4EFB\u52A1\u6267\u884C\u4E00\u6B21\u3002 \u4EFB\u52A1\u6D88\u8017\u7684\u65F6\u95F4\u4F1A\u88AB\u6DFB\u52A0\u5230\u7528\u6237\u754C\u9762\u7684\u6E32\u67D3\u65F6\u95F4\u4E2D\u53BB\u3002 \u5BF9\u4E8E\u6240\u6709\u4EFB\u52A1\u5747\u53EF\u5FEB\u901F\u7ED3\u675F\u7684\u7B80\u5355\u7CFB\u7EDF\u800C\u8A00\uFF0C\u8FD9\u662F\u4E00\u79CD\u7B80\u5355\u4E14\u53EF\u63A5\u53D7\u7684\u89E3\u51B3\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "oswrappers"
  }), `OSWrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u5728OSWrappers\u7C7B\u4E2D\u4F7F\u7528\u94A9\u5B50\u51FD\u6570\u3002 \u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u56FE\u5F62\u5F15\u64CE\u5728\u9700\u8981\u7B49\u5F85\u4E8B\u4EF6\u65F6\u8C03\u7528\u6B64\u7C7B\u4E0A\u7684\u65B9\u6CD5\u3002 \u60A8\u53EF\u4EE5\u5728\u7B49\u5F85\u6240\u8FF0\u4E8B\u4EF6\u65F6\u4F7F\u7528\u6B64\u65B9\u6CD5\u6267\u884C\u5176\u4ED6\u5DE5\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}

void OSWrappers::waitForVSync()
{
    vsync_sem = 0; //clear the flag, so we wait for the next vsync
    do {
        // Perform other work while waiting
        music_task_tick();
        bluetooth_task_tick();
    } while(!vsync_sem);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u65B9\u6CD5\u65F6\uFF0C\u5176\u4ED6\u4EFB\u52A1\u53EF\u4EE5\u5145\u5206\u4F7F\u7528\u5E27\u95F4\u7684\u7A7A\u95F2\u4EFB\u52A1\uFF0C\u4F46\u4EFB\u52A1\u53EF\u7528\u7684\u65F6\u95F4\u4F1A\u4E0D\u4E00\u6837\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u662F\u4F7F\u7528OSWrappers::isVSyncAvailable\u548COSWrappers::signalRenderingDone\u51FD\u6570\u3002 \u8FD9\u5C06\u5E2E\u52A9\u5E94\u7528\u907F\u514D\u62E5\u6709\u591A\u4E2Awhile\u5FAA\u73AF\u3002 \u5F53\u9009\u62E9\u65E0\u64CD\u4F5C\u7CFB\u7EDF\u914D\u7F6E\u65F6\uFF0CTouchGFXGenerator\u5C06\u4F7F\u7528\u8FD9\u4E9B\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EFB\u52A1\u5FC5\u987B\u80FD\u591F\u5C06\u5176\u5DE5\u4F5C\u5206\u5272\u6210\u65F6\u957F\u5927\u69821\u6BEB\u79D2\u7684\u5C0F\u6B65\u9AA4\u3002 \u5426\u5219\uFF0C\u5C06\u5F71\u54CD\u7528\u6237\u754C\u9762\u6027\u80FD\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);