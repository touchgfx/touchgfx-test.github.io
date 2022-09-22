"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5261],{

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

/***/ 88159:
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
  title: "\u4F5C\u696D\u7CFB\u7D71"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/operating-system",
  "id": "basic-concepts/operating-system",
  "title": "\u4F5C\u696D\u7CFB\u7D71",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/operating-system",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/operating-system",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "operating-system",
    "title": "\u4F5C\u696D\u7CFB\u7D71"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6027\u80FD",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/performance"
  },
  "next": {
    "title": "\u8A18\u61B6\u9AD4\u4F7F\u7528",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/memory-usage"
  }
};
const assets = {};

const toc = [{
  value: "\u5F15\u8A00",
  id: "introduction",
  level: 2
}, {
  value: "\u5176\u4ED6\u4EFB\u52D9\u8207\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u4EA4\u66FF",
  id: "interleaving-other-tasks-with-the-user-interface",
  level: 3
}, {
  value: "\u7BC4\u4F8B",
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
  value: "\u8655\u7406\u4E2D\u65B7",
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
  value: "\u7121RTOS",
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
  }), `\u5F15\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u8A0E\u8AD6\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u61C9\u7528\u4E2D\u4F5C\u696D\u7CFB\u7D71\u7684\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5D4C\u5165\u5F0F\u8A2D\u5099\u8D8A\u4F86\u8D8A\u5148\u9032\u3002 \u7CFB\u7D71\u7684\u5927\u90E8\u5206\u8A2D\u5099\u4E0D\u50C5\u8655\u7406\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\uFF0C\u901A\u5E38\u9084\u8655\u7406\u8907\u96DC\u7684\u63A7\u5236\u6F14\u7B97\u6CD5\u548C\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8209\u4F8B\u4F86\u8AAA\uFF0C\u9019\u4E9B\u4EFB\u52D9\u53EF\u4EE5\u662F\u96FB\u6A5F\u63A7\u5236\u3001\u8CC7\u6599\u7372\u53D6\u6216\u5B89\u5168\u76F8\u95DC\u4EFB\u52D9\u3002 \u8A31\u591A\u5148\u9032\u8A2D\u5099\u5305\u542B\u7528\u4F86\u8207\u8CC7\u6599\u4E2D\u5FC3\u901A\u4FE1\u7684\u901A\u4FE1\u5354\u8B70\u68E7\uFF08\u5982TCP/IP\uFF09\u6216\u7528\u4F86\u8207\u5176\u4ED6\u672C\u5730\u8A2D\u5099\u901A\u4FE1\u7684\u5C04\u983B\u5354\u5B9A\u68E7\uFF08\u5982\u85CD\u7259\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interleaving-other-tasks-with-the-user-interface"
  }), `\u5176\u4ED6\u4EFB\u52D9\u8207\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u4EA4\u66FF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5177\u6709\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u4E26\u53EA\u652F\u63F4\u5E7E\u9805\u7C21\u55AE\u4EFB\u52D9\u7684\u7C21\u55AE\u8A2D\u5099\u4E2D\uFF0C\u53EF\u570D\u7E5E\u4F7F\u7528\u8005\u4ECB\u9762\u7A0B\u5F0F\u78BC\u5EFA\u69CB\u6574\u500B\u61C9\u7528\u3002 \u9664\u4E86\u5E38\u898F\u7684\u4F7F\u7528\u8005\u4ECB\u9762\u5347\u7D1A\uFF0C\u61C9\u7528\u57F7\u884C\u7684\u4EFB\u52D9\u975E\u5E38\u5C11\uFF0C\u56E0\u6B64\u53EF\u5C07\u5176\u4ED6\u4EFB\u52D9\u7684\u57F7\u884C\u76F8\u7576\u6210\u529F\u5730\u5D4C\u5165\u4F7F\u7528\u8005\u4ECB\u9762\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u8A2D\u5099\u5305\u542B\u5177\u6709\u55AE\u7368\u6642\u5E8F\u8981\u6C42\u7684\u66F4\u9AD8\u7D1A\u7684\u201C\u5F8C\u81FA\u904B\u884C\u201D\u529F\u80FD\uFF08\u5982\u99AC\u9054\u8ABF\u63A7\uFF09\u6642\uFF0C\u5C07\u96E3\u4EE5\u5728\u6EFF\u8DB3\u8981\u6C42\u7684\u540C\u6642\u5C07\u5169\u9805\u4EFB\u52D9\u5408\u4E8C\u70BA\u4E00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B63\u5982\u6211\u5011\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u4E2D\u8A0E\u8AD6\u7684\u90A3\u6A23\uFF0C\u5716\u5F62\u5F15\u64CE\u5FC5\u9808\u6301\u7E8C\u7E6A\u88FD\u65B0\u5E40\uFF0C\u624D\u80FD\u652F\u63F4\u6D41\u66A2\u7684\u4F7F\u7528\u8005\u4ECB\u9762\u3002 \u5982\u679C\u5728\u904B\u884C\u5176\u4ED6\u4EFB\u52D9\u6642\u5716\u5F62\u5F15\u64CE\u66AB\u505C\u6B64\u904E\u7A0B\uFF0C\u5E40\u7387\u5C07\u6703\u4E0B\u964D\u3002 \u540C\u6A23\u5730\uFF0C\u5982\u679C\u5176\u4ED6\u4EFB\u52D9\u53EA\u5728\u5E40\u4E4B\u9593\u3001\u9592\u7F6E\u6642\u9593\u904B\u884C\uFF0C\u90A3\u9EBC\u5728\u4F7F\u7528\u8005\u4ECB\u9762\u6E32\u67D3\u8907\u96DC\u5834\u666F\u6642\uFF0C\u7531\u65BC\u9592\u7F6E\u6642\u9593\u8F03\u5C11\uFF0C\u9019\u4E9B\u4EFB\u52D9\u6703\u53D7\u5230\u5F71\u97FF\u3002 \u9019\u4E9B\u5F71\u97FF\u4F7F\u5F97UI\u4EFB\u52D9\u8207\u5176\u4ED6\u8907\u96DC\u4EFB\u52D9\u7684\u624B\u52D5\u4EA4\u66FF\u8B8A\u5F97\u56F0\u96E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "an-example"
  }), `\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u7BC0\u5269\u9918\u90E8\u5206\uFF0C\u6211\u5011\u5C07\u5EFA\u69CB\u4E00\u500B\u5177\u6709\u986F\u793A\u5668\u7684\u85CD\u7259\u63DA\u8072\u5668\u3002 \u6211\u5011\u67093\u500B\u4E3B\u8981\u4EFB\u52D9\uFF1A\u904B\u884C\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\uFF0C\u5C07\u97F3\u6A02\u8F38\u5165\u63DA\u8072\u5668\uFF0C\u4EE5\u53CA\u8655\u7406\u85CD\u7259\u68E7\u4EE5\u4FBF\u8207\u5176\u4ED6\u8A2D\u5099\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u96E3\u770B\u51FA\uFF0C\u4EE5\u4F7F\u7528\u8005\u4ECB\u9762\u70BA\u4E2D\u5FC3\u7684\u61C9\u7528\u67B6\u69CB\u4E26\u4E0D\u662F\u597D\u7684\u9078\u64C7\uFF1A\u5047\u8A2D\u6211\u5011\u5C07\u97F3\u6A02\u7A0B\u5F0F\u78BC\u8207\u4F7F\u7528\u8005\u4ECB\u9762\u6DF7\u5408\uFF0C\u4E26\u5C07\u555F\u52D5\u91CD\u64AD\u7684\u7A0B\u5F0F\u78BC\u653E\u5728\u4F7F\u7528\u8005\u4ECB\u9762\u4E0A\u67D0\u500B\u6309\u9215\u7684\u4E8B\u4EF6\u8655\u7406\u5668\u4E2D\u3002 \u73FE\u5728\uFF0C\u9700\u8981\u4E00\u9EDE\u6642\u9593\u624D\u80FD\u958B\u59CB\u64AD\u653E\u97F3\u6A02\uFF0C\u671F\u9593\u4F7F\u7528\u8005\u4ECB\u9762\u88AB\u9396\u5B9A\u3002 \u8207\u6B64\u540C\u6642\uFF0C\u904B\u884C\u7684\u4EFB\u4F55\u52D5\u756B\u90FD\u5C07\u505C\u6B62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u60C5\u6CC1\u4E0B\uFF0C\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u56DE\u61C9\u6027\u958B\u59CB\u4F9D\u8CF4\u65BC\u97F3\u6A02\u4EFB\u52D9\u7684\u57F7\u884C\u6642\u9593\uFF08\u958B\u59CB\u3001\u505C\u6B62\u548C\u4E0B\u4E00\u9996\u7B49\uFF09\u3002 \u9019\u662F\u4E00\u500B\u4E00\u822C\u7684\u554F\u984C\uFF0C\u6211\u5011\u7A0D\u5F8C\u518D\u505A\u8A0E\u8AD6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u9084\u60F3\u5F9E\u85CD\u7259\u64AD\u653E\u97F3\u6A02\uFF0C\u6703\u767C\u751F\u4EC0\u9EBC\uFF1F \u4F7F\u7528\u8005\u4ECB\u9762\u662F\u5426\u61C9\u4EE5\u67D0\u7A2E\u65B9\u5F0F\u4ECB\u5165\u5176\u4E2D\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5982\u4F55\u70BA\u97F3\u6A02\u4EFB\u52D9\u5206\u914D\u512A\u5148\u9806\u5E8F\uFF0C\u4EE5\u907F\u514D\u97F3\u6A02\u66AB\u505C\uFF1F \u8207\u6B64\u540C\u6642\uFF0C\u6211\u5011\u9084\u5E0C\u671B\u5728\u6C92\u6709\u97F3\u6A02\u4EFB\u52D9\u904B\u884C\u6642\u4F7F\u7528\u8005\u4ECB\u9762\u4EE5\u6700\u9AD8\u6027\u80FD\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u696D\u7CFB\u7D71\u53EF\u901A\u904E\u4EFB\u52D9\u3001\u901A\u4FE1\u624B\u6BB5\u548C\u540C\u6B65\u4F86\u89E3\u6C7A\u6240\u6709\u9019\u4E9B\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "rtos"
  }), `RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5373\u6642\u4F5C\u696D\u7CFB\u7D71\u662F\u4E00\u500B\u5C0F\u8EDF\u9AD4\uFF0C\u5B83\u901A\u904E\u5404\u7A2E\u670D\u52D9\u70BA\u61C9\u7528\u63D0\u4F9B\u652F\u63F4\uFF0C\u4E26\u70BA\u61C9\u7528\u4E2D\u7684\u4EFB\u52D9\u5206\u914D\u8A08\u7B97\u8CC7\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\u5E6B\u52A9\u60A8\u5728\u8A31\u591A\u7368\u7ACB\u4F46\u76F8\u4E92\u5354\u4F5C\u7684\u4EFB\u52D9\u4E2D\u69CB\u5EFA\u61C9\u7528\u3002 \u7136\u5F8C\uFF0C\u5728\u8981\u7528\u5230\u9019\u4E9B\u4EFB\u52D9\u6642\uFF0CRTOS\u6703\u6839\u64DA\u4EFB\u52D9\u7684\u512A\u5148\u9806\u5E8F\u57F7\u884C\u9019\u4E9B\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u751A\u81F3\u53EF\u4EE5\u5C07\u4E00\u9805\u4F5C\u696D\u5206\u5272\u6210\u4E00\u500B\u9AD8\u512A\u5148\u9806\u5E8F\u4EFB\u52D9\u548C\u4E00\u500B\u4F4E\u512A\u5148\u9806\u5E8F\u4EFB\u52D9\u3002 \u5047\u8A2D\u6211\u5011\u5FC5\u9808\u5728\u85CD\u7259\u8CC7\u6599\u5230\u9054\u6642\u975E\u5E38\u5FEB\u901F\u5730\u5F9E\u7DE9\u885D\u5340\u8B80\u53D6\u8CC7\u6599\uFF0C\u4E26\u5C07\u5B83\u5011\u653E\u5165\u8F03\u5927\u7684\u61C9\u7528\u7DE9\u885D\u5340\u3002 \u8CC7\u6599\u8655\u7406\u53EF\u80FD\u6703\u7A0D\u5FAE\u5EF6\u9072\u3002 \u9019\u6A23\u4E00\u4F86\uFF0C\u6211\u5011\u5C07\u6709\u5169\u500B\u85CD\u7259\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u5F9E\u4E3B\u51FD\u6578\u958B\u59CB4\u9805\u4EFB\u52D9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u97F3\u6A02\u4EFB\u52D9\u9032\u884C\u985E\u4F3C\u5206\u5272\uFF1A\u4E00\u500B\u5C07\u8CC7\u6599\u8F38\u9001\u5230\u63DA\u8072\u5668\u7684\u9AD8\u512A\u5148\u9806\u5E8F\u4EFB\u52D9\uFF0C\u4E00\u500B\u63A7\u5236\u64AD\u653E\u54EA\u9996\u6B4C\u66F2\u4E26\u5411\u4F7F\u7528\u8005\u4ECB\u9762\u767C\u9001\u901A\u77E5\u7684\u4F4E\u512A\u5148\u9806\u5E8F\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u4E0A\u8FF0\u4E0D\u540C\u512A\u5148\u9806\u5E8F\u7684\u7D50\u679C\u662F\uFF1A\u7576\u6709\u8CC7\u6599\u8981\u8655\u7406\u6642\uFF0C\u904B\u884Cbt_comm_task\uFF1B\u5426\u5247\uFF0C\u904B\u884C\u4F7F\u7528\u8005\u4ECB\u9762\u4EFB\u52D9\u3002 \u7576\u4F7F\u7528\u8005\u4ECB\u9762\u4EFB\u52D9\u7B49\u5F85\u986F\u793A\u5668\u6642\uFF0C\u5169\u500B\u4F4E\u512A\u5148\u9806\u5E8F\u4EFB\u52D9\u53EF\u4EE5\u904B\u884C\u3002 \u64CD\u4F5C\u7CFB\u7D71\u8ABF\u5EA6\u7A0B\u5F0F\u5C07\u70BA\u6211\u5011\u8655\u7406\u6B64\u985E\u6642\u9593\u5206\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5178\u578B\u7684TouchGFX\u61C9\u7528\u4E2D\uFF0C\u4F7F\u7528\u8005\u4ECB\u9762\u5728\u6BCF\u4E00\u5E40\u4E2D\u7B49\u5F85\u986F\u793A\u5668\uFF0C\u5B83\u9084\u5B9A\u671F\u7B49\u5F85\u5716\u5F62\u52A0\u901F\u5668ChromArt\uFF0C\u4EE5\u4FBF\u5B8C\u6210\u7E6A\u88FD\u5143\u7D20\u3002 \u9019\u610F\u5473\u8457\u6703\u6709\u8A31\u591A\u77ED\u66AB\u7684\u66AB\u505C\uFF0C\u512A\u5148\u9806\u5E8F\u8F03\u4F4E\u7684\u4EFB\u52D9\u53EF\u4EE5\u5728\u66AB\u505C\u671F\u9593\u904B\u884C\u3002 \u4F5C\u696D\u7CFB\u7D71\u8ABF\u5EA6\u7A0B\u5F0F\u5C07\u81EA\u52D5\u66F4\u6539MCU\uFF0C\u4EE5\u4FBF\u5728\u512A\u5148\u9806\u5E8F\u8F03\u9AD8\u7684\u4EFB\u52D9\u7B49\u5F85\u6642\u904B\u884C\u9019\u4E9B\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "task-communication"
  }), `Task communication`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u6211\u5011\u4F7F\u7528\u591A\u500B\u4EFB\u52D9\u6642\uFF0C\u9084\u9700\u8981\u4E00\u7A2E\u5B89\u5168\u7684\u901A\u4FE1\u65B9\u5F0F\u7528\u65BC\u4EFB\u52D9\u9593\u7684\u901A\u4FE1\u3002 \u8209\u500B\u7C21\u55AE\u7684\u4F8B\u5B50\uFF0C\u5F9E\u4F7F\u7528\u8005\u4ECB\u9762\u5230\u97F3\u6A02\u4EFB\u52D9\u3002 \u9664\u5176\u4ED6\u60C5\u6CC1\u5916\uFF0C\u9019\u88E1\u6211\u5011\u9700\u8981\u97F3\u6A02\u4EFB\u52D9\u9032\u884C\u7B49\u5F85\uFF0C\u76F4\u81F3gui_task\u8981\u6C42\u5176\u958B\u59CB\u64AD\u653E\u6B4C\u66F2\u3002 \u4E00\u7A2E\u7C21\u55AE\u7684\u5BE6\u73FE\u65B9\u5F0F\u662F\u4F7F\u7528\u8A0A\u606F\u4F47\u5217(queue)\u3002 \u5728\u4F47\u5217\u4E2D\u51FA\u73FE\u8A0A\u606F\u4E4B\u524D\uFF0C\u97F3\u6A02\u4EFB\u52D9\u4F11\u7720\u3002 \u7576\u4F47\u5217\u4E2D\u51FA\u73FE\u6D88\u606F\u6642\u4EE5\u53CA\u512A\u5148\u9806\u5E8F\u8F03\u9AD8\u7684\u4EFB\u52D9\u4E0D\u5FD9\u788C\u6642\uFF0C\u8ABF\u5EA6\u7A0B\u5F0F
\u559A\u9192\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `   ...
   music_task_input_queue = os_create_queue(10); //10 element queue
   ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528\u8005\u4ECB\u9762\u4E2D\uFF0C\u7576\u6309\u4E0B\u201C\u64AD\u653E\u201D\u6642\uFF0C\u6211\u5011\u5411\u97F3\u6A02\u4EFB\u52D9\u7684\u4F47\u5217\u767C\u9001\u4E00\u689D\u8A0A\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenMusic::handlePlayPressed()
{
   os_send_message(music_task_input_queue, play_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u97F3\u6A02\u4EFB\u52D9\u80FD\u5920\u4EE5\u8B80\u53D6\u4F47\u5217\u7684\u65B9\u5F0F\u7B49\u5F85\u6D88\u606F\u3002 \u9019\u6703\u5728\u6709\u6D88\u606F\u5230\u9054\u524D\u963B\u6B62\u4EFB\u52D9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
Message message;
os_receive_message(music_task_input_queue, &message);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5C07\u8A0A\u606F\u653E\u5165\u97F3\u6A02\u4EFB\u52D9\u7684\u4F47\u5217\u5F8C\uFF0C\u4F7F\u7528\u8005\u4ECB\u9762\u7E7C\u7E8C\u904B\u884C\u4E26\u5118\u5FEB\u6E32\u67D3\u5E40\u3002 \u6211\u5011\u4E0D\u5C07\u6642\u9593\u6D6A\u8CBB\u5728\u7ACB\u5373\u8655\u7406\u64AD\u653E\u8A0A\u606F\u4E0A\u3002 \u4F46\u662F\uFF0C\u5728\u6E32\u67D3\u5B8C\u6210\u5F8C\uFF0C\u5728\u6E32\u67D3\u4E0B\u4E00\u5E40\u4E4B\u524DUI\u4EFB\u52D9\u8655\u65BC\u7B49\u5019\u72C0\u614B\uFF0C\u8ABF\u5EA6\u7A0B\u5F0F\u6539\u70BA\u57F7\u884C\u97F3\u6A02\u4EFB\u52D9\uFF0C\u6B64\u4EFB\u52D9\u5C07\u8655\u7406\u50B3\u5165\u7684\u8A0A\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u6A23\u5730\uFF0C\u6211\u5011\u9084\u53EF\u4EE5\u7D66\u4E88\u4F7F\u7528\u8005\u4ECB\u9762\u4E00\u500B\u8F38\u5165\u4F47\u5217\u3002 \u7136\u5F8C\uFF0C\u97F3\u6A02\u4EFB\u52D9\u53EF\u4EE5\u767C\u9001\u901A\u77E5\u6D88\u606F\uFF0C\u4F8B\u5982\u5728\u6B4C\u66F2\u7D50\u675F\u6642\u3002 \u4F7F\u7528\u8005\u4ECB\u9762\u4EFB\u52D9\u4E0D\u61C9\u7B49\u5F85\u8A0A\u606F\uFF0C\u800C\u61C9\u5FEB\u901F\u6AA2\u67E5\u662F\u5426\u6709\u8A0A\u606F\uFF08\u7121\u6514\u622A\uFF09\u4E26\u8B80\u53D6\u5B83\uFF08\u5982\u679C\u6709\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8A2D\u7F6E\u5728\u7CFB\u7D71\u4E2D\u7684\u4EFB\u52D9\u4E4B\u9593\u63D0\u4F9B\u4E86\u4E00\u7A2E\u5341\u5206\u9B06\u6563\u7684\u9023\u63A5\u3002 \u6211\u5011\u5BE6\u969B\u4E0A\u7121\u9700\u4F7F\u7528\u4F7F\u7528\u8005\u4ECB\u9762\u5373\u53EF\u6E2C\u8A66\u97F3\u6A02\u4EFB\u52D9\uFF0C\u6211\u5011\u9084\u53EF\u4EE5\u8F15\u9B06\u5730\u5F9E\u85CD\u7259\u4EFB\u52D9\u64AD\u653E\u97F3\u6A02\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "handling-interrupts"
  }), `\u8655\u7406\u4E2D\u65B7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u4EFB\u52D9\u9700\u8981\u4F5C\u70BA\u5C0D\u4E2D\u65B7\u7684\u56DE\u61C9\u4F86\u904B\u884C\u3002 \u5728\u6211\u5011\u7684\u7BC4\u4F8B\u4E2D\uFF0C\u85CD\u7259\u901A\u4FE1\u4EFB\u52D9\u5C31\u662F\u9019\u6A23\u4E00\u500B\u4F8B\u5B50\u3002 \u6211\u5011\u5E0C\u671B\u4EFB\u52D9\u5728\u85CD\u7259\u6676\u7247\u6709\u65B0\u7684\u8CC7\u6599\u5305\u6642\u904B\u884C\u3002 \u5047\u8A2D\u6211\u5011\u80FD\u5920\u5728\u90A3\u7A2E\u60C5\u6CC1\u4E0B\u5BE6\u73FE\u4E2D\u65B7\uFF0C\u6211\u5011\u53EF\u4EE5\u5F9E\u4E2D\u65B7\u8655\u7406\u5668\u767C\u9001\u4E00\u689D\u6D88\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void BT_DataAvailable_Handler(void)
{
  os_send_message(bt_data_queue, data_available_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u4F47\u5217\uFF0C\u9084\u6709\u5176\u4ED6\u540C\u6B65\u57FA\u5143\u53EF\u7528\u3002 \u4F8B\u5982\uFF0C\u8A31\u591A\u4F5C\u696D\u7CFB\u7D71\u4E2D\u90FD\u6709Semaphore\u548Cmutexe\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "freertos"
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u958B\u767C\u671F\u9593\uFF0C\u7528FreeRTOS\u4F5C\u696D\u7CFB\u7D71\u6E2C\u8A66\u4E86TouchGFX\u3002 TouchGFX\u7684\u8981\u6C42\u975E\u5E38\u4F4E\u4E26\u80FD\u5728\u8A31\u591A\u5176\u4ED6\u4F5C\u696D\u7CFB\u7D71\u4E0A\u904B\u884C\uFF0C\u4F46FreeRTOS\u662F\u4E00\u500B\u597D\u7684\u8D77\u9EDE\uFF0C\u9664\u975E\u60A8\u6709\u8A31\u591A\u7279\u6B8A\u7684\u8981\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\u662F\u4E00\u7A2E\u7C21\u55AE\u7684\u4F5C\u696D\u7CFB\u7D71\uFF0C\u5728\u5546\u696D\u61C9\u7528\u4E2D\u53EF\u514D\u8CBB\u4F7F\u7528\u3002 \u5B83\u4EE5\u539F\u59CB\u7A0B\u5F0F\u78BC\u7684\u5F62\u5F0F\u96A8STM32Cube\u97CC\u9AD4\u7684\u63D0\u4F9B\uFF0C\u70BA\u6240\u6709STM32\u5FAE\u63A7\u5236\u5668\u63D0\u4F9B\u4E86\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u53C3\u8003`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.freertos.org/"
  }), `freertos.org`), `\u77AD\u89E3FreeRTOS\u7684\u66F4\u591A\u8CC7\u8A0A\u548C\u8A31\u53EF\u689D\u6B3E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-os-wrappers"
  }), `TouchGFX OS Wrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u6709\u9810\u8A2D\u914D\u7F6E\u7684TouchGFX\u5728FreeRTOS\u4E0A\u904B\u884C\uFF0C\u4F7F\u7528\u4E00\u500B\u8A0A\u606F\u4F47\u5217\u5BE6\u73FE\u8207\u986F\u793A\u5668\u63A7\u5236\u5668\u7684\u540C\u6B65\uFF0C\u4E26\u4F7F\u7528semaphore\u4FDD\u8B77\u5C0D\u5F71\u50CF\u7DE9\u885D\u7684\u5B58\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u662F\u901A\u904E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/os/OSWrappers.cpp`), `\u4E2D\u5B9A\u7FA9\u7684OSWrappers\u985E\u4F86\u8655\u7406\u7684\u3002 \u6B64\u985E\u5177\u6709\u4E0B\u5217\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7269\u4EF6\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63CF\u8FF0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u61C9\u5728\u986F\u793A\u5668\u70BA\u4E0B\u4E00\u5E40\u505A\u597D\u6E96\u5099\u6642\u5F9E\u986F\u793A\u5668\u9A45\u52D5\u547C\u53EB\u6B64\u65B9\u6CD5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `waitForVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7531\u5716\u5F62\u5F15\u64CE\u547C\u53EB\u7528\u65BC\u7B49\u5F85\u3002 \u5728signalVSync\u88AB\u547C\u53EB\u524D\u4E0D\u61C9\u8FD4\u56DE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `isVSyncAvailable()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uFF08\u53EF\u9078\uFF09\u5982\u679C\u767C\u751F\u4E86VSync\uFF0C\u5247\u8FD4\u56DEtrue\u3002 \u5728waitForVSync\u4E2D\u53EF\u7528\u65BC\u907F\u514D\u6514\u622A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalRenderingDone()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uFF08\u53EF\u9078\uFF09\u522A\u9664\u4EFB\u4F55\u672A\u8655\u7406\u7684VSync\u4FE1\u865F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `takeFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7531\u5716\u5F62\u5F15\u64CE\u548C\u52A0\u901F\u5668\u547C\u53EB\uFF0C\u7528\u4F86\u7372\u53D6\u5C0D\u5F71\u50CF\u7DE9\u885D\u7684\u76F4\u63A5\u5B58\u53D6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `giveFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u88AB\u547C\u53EB\u7528\u65BC\u518D\u6B21\u91CB\u653E\u76F4\u63A5\u5B58\u53D6\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9ED8\u8A8D\u5BE6\u73FE\u4F7F\u7528\u8A0A\u606F\u4F47\u5217\u5BE6\u73FEVSync\uFF08\u5E40\uFF09\u540C\u6B65\u3002 \u5728\u4E0B\u4E00\u500BVSync\u5230\u9054\u524D\uFF0C\u5716\u5F62\u5F15\u64CE\u4EFB\u52D9\u4F11\u7720\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64OSWrapper\u985E\u7531TouchGFX Generator\u751F\u6210\u3002 \u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"
  }), `\u6B64\u8655`), `\u95B1\u8B80\u95DC\u65BCGenerator\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "no-rtos"
  }), `\u7121RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u9084\u53EF\u4EE5\u5728\u6C92\u6709\u4F5C\u696D\u7CFB\u7D71\u7684\u60C5\u6CC1\u4E0B\u904B\u884C\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u5FC5\u9808\u5728\u4E3B\u51FD\u6578\u4E2D\u76F4\u63A5\u958B\u59CB\u5716\u5F62\u5F15\u64CE\u4E3B\u8FF4\u5708\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main()
{
    ...
    touchgfx::HAL::getInstance()->taskEntry();

    //never returns
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u4F7F\u7528RTOS\u4E26\u4E0D\u6703\u964D\u4F4ETouchGFX\u7684\u6027\u80FD\u3002 \u53EF\u80FD\u6703\u589E\u52A0MCU\u8CA0\u8F09\uFF0C\u4E26\u589E\u52A0\u8207TouchGFX\u4E00\u8D77\u904B\u884C\u7684\u5176\u4ED6\u4EFB\u52D9\u7684\u96E3\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u73FE\u5728\u60A8\u9700\u8981\u5728\u4E3B\u51FD\u6578\u4E2D\u4F7F\u7528\u8005\u4ECB\u9762\u904B\u884C\u6642\u624B\u52D5\u9A45\u52D5\u5176\u4ED6\u7684\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "modeltick"
  }), `Model::tick`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u7A2E\u65B9\u5F0F\u662F\u5728\u6BCF\u4E00\u5E40\u57F7\u884C\u4E00\u6B21\u6AA2\u67E5Model\u985E\u7684\u4EFB\u52D9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u65B9\u6CD5\u53EF\u5728\u6BCF\u4E00\u5E40\u5C07\u6240\u6709\u4EFB\u52D9\u57F7\u884C\u4E00\u6B21\u3002 \u4EFB\u52D9\u6D88\u8017\u7684\u6642\u9593\u6703\u88AB\u6DFB\u52A0\u5230\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u6E32\u67D3\u6642\u9593\u4E2D\u3002 \u5C0D\u65BC\u6240\u6709\u4EFB\u52D9\u5747\u53EF\u5FEB\u901F\u7D50\u675F\u7684\u7C21\u55AE\u7CFB\u7D71\u800C\u8A00\uFF0C\u9019\u662F\u4E00\u7A2E\u7C21\u55AE\u4E14\u53EF\u63A5\u53D7\u7684\u89E3\u6C7A\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "oswrappers"
  }), `OSWrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u7A2E\u65B9\u6CD5\u662F\u5728OSWrappers\u985E\u4E2D\u4F7F\u7528\u9264\u5B50\u51FD\u6578\u3002 \u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u5716\u5F62\u5F15\u64CE\u5728\u9700\u8981\u7B49\u5F85\u4E8B\u4EF6\u6642\u547C\u53EB\u6B64\u985E\u4E0A\u7684\u65B9\u6CD5\u3002 \u60A8\u53EF\u4EE5\u5728\u7B49\u5F85\u6240\u8FF0\u4E8B\u4EF6\u6642\u4F7F\u7528\u6B64\u65B9\u6CD5\u57F7\u884C\u5176\u4ED6\u5DE5\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u65B9\u6CD5\u6642\uFF0C\u5176\u4ED6\u4EFB\u52D9\u53EF\u4EE5\u5145\u5206\u4F7F\u7528\u5E40\u9593\u7684\u7A7A\u9592\u4EFB\u52D9\uFF0C\u4F46\u4EFB\u52D9\u5F97\u5230\u7684\u6642\u9593\u91CF\u6703\u6709\u8B8A\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u7A2E\u89E3\u6C7A\u65B9\u6848\u662F\u4F7F\u7528OSWrappers::isVSyncAvailable\u548COSWrappers::signalRenderingDone\u51FD\u6578\u3002 \u9019\u5C07\u5E6B\u52A9\u61C9\u7528\u907F\u514D\u64C1\u6709\u591A\u500Bwhile\u8FF4\u5708\u3002 \u7576\u9078\u64C7\u7121\u4F5C\u696D\u7CFB\u7D71\u914D\u7F6E\u6642\uFF0CTouchGFXGenerator\u5C07\u4F7F\u7528\u9019\u4E9B\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EFB\u52D9\u5FC5\u9808\u80FD\u5920\u5C07\u5176\u5DE5\u4F5C\u5206\u5272\u6210\u6642\u9577\u5927\u69821\u6BEB\u79D2\u7684\u5C0F\u6B65\u9A5F\u3002 \u5426\u5247\uFF0C\u5C07\u5F71\u97FF\u4F7F\u7528\u8005\u4ECB\u9762\u6027\u80FD\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);