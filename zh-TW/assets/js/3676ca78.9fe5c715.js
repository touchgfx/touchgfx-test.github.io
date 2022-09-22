"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3960],{

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

/***/ 98398:
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
  id: "languages-and-characters",
  title: "\u8A9E\u8A00\u548C\u5B57\u5143"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "id": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "title": "\u8A9E\u8A00\u548C\u5B57\u5143",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "languages-and-characters",
    "title": "\u8A9E\u8A00\u548C\u5B57\u5143"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6587\u5B57\u548C\u5B57\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  },
  "next": {
    "title": "MJPEG\u5F71\u7247",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/video"
  }
};
const assets = {};
const toc = [{
  value: "\u8A9E\u8A00",
  id: "languages",
  level: 2
}, {
  value: "\u5B57\u5143",
  id: "characters",
  level: 2
}, {
  value: "\u66F8\u5BEB\u65B9\u5411",
  id: "writing-direction",
  level: 2
}, {
  value: "\u4E0A\u4E0B\u6587\u5851\u9020",
  id: "contextual-shaping",
  level: 2
}, {
  value: "\u652F\u63F4\u7684\u8A9E\u8A00\u6E05\u55AE",
  id: "list-of-supported-languages",
  level: 2
}, {
  value: "\u5F9E\u5DE6\u5411\u53F3\u5F0F\u8A9E\u8A00",
  id: "left-to-right-languages",
  level: 3
}, {
  value: "\u5F9E\u53F3\u5411\u5DE6\u5F0F\u8A9E\u8A00",
  id: "right-to-left-languages",
  level: 3
}, {
  value: "\u4E0D\u652F\u63F4\u7684\u8A9E\u8A00",
  id: "unsupported-languages",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u63F4\u61C9\u7528\u7684\u570B\u969B\u5316\u548C\u7576\u5730\u8A9E\u7CFB\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "languages"
  }), `\u8A9E\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u652F\u63F4\u7684\u8A9E\u8A00\u662FUnicode\u7684\u57FA\u790E\u591A\u8A9E\u8A00\uFF0C\u5177\u6709\u53EA\u652F\u63F4\u5F9E\u5DE6\u5411\u53F3\u6216\u5F9E\u53F3\u5411\u5DE6\u66F8\u5BEB\u9AD4\u7CFB\u7684\u9650\u5236\u3002 \u9019\u610F\u5473\u8457\u652F\u63F4\u963F\u62C9\u4F2F\u8A9E\u3001\u4E2D\u6587\u3001\u82F1\u8A9E\u548C\u8A31\u591A\u5176\u4ED6\u8A9E\u8A00\uFF0C\u4F46\u53EF\u80FD\u6709\u4E00\u9EDE\u9650\u5236\u3002 \u4F8B\u5982\u76EE\u524D\u4E0D\u652F\u63F4\u70CF\u723E\u90FD\u8A9E\u548C\u7DEC\u7538\u8A9E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "characters"
  }), `\u5B57\u5143`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u652F\u63F4\u7684\u8A9E\u8A00\u662FUnicode\u7684\u57FA\u790E\u591A\u8A9E\u8A00\uFF0C\u5177\u6709\u53EA\u652F\u63F4\u5F9E\u5DE6\u5411\u53F3\u6216\u5F9E\u53F3\u5411\u5DE6\u66F8\u5BEB\u9AD4\u7CFB\u7684\u9650\u5236\u3002 16-bit Unicodes are supported, i.e. \u4F8B\u5982\u76EE\u524D\u4E0D\u652F\u63F4\u70CF\u723E\u90FD\u8A9E\u548C\u7DEC\u7538\u8A9E\u3002 \u4E00\u4E9B\u8A9E\u8A00\u53EF\u80FD\u5C0D\u63A1\u7528\u5B57\u9AD4\u7684\u7279\u6B8A\u5B57\u5143\uFF08\u5982\u5929\u57CE\u9AD4\uFF09\u4F7F\u75280xE000-0xE3FF\u4E2D\u7684\u79C1\u4EBA\u4F7F\u7528\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "writing-direction"
  }), `\u66F8\u5BEB\u65B9\u5411`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u5143\u7DE8\u78BC\u57FA\u65BCUnicode\u6A19\u6E96\u3002 \u652F\u63F416\u4F4D\u5143unicode\uFF0C\u5373`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u63F4\u5F9E\u5DE6\u5411\u53F3\uFF08LTR\uFF09\u548C\u5F9E\u53F3\u5411\u5DE6\uFF08RTL\uFF09\u66F8\u5BEB\u9AD4\u7CFB\u3002 \u6C92\u6709\u5167\u5EFA\u652F\u63F4\u5F9E\u4E0A\u81F3\u4E0B\u66F8\u5BEB\u9AD4\u7CFB\u3002 \u5C0D\u65BC\u963F\u62C9\u4F2F\u8A9E\u548C\u5E0C\u4F2F\u4F86\u8A9E\u800C\u8A00\uFF0C\u9019\u662F\u6B63\u78BA\u8A2D\u7F6E\u3002 "TouchGFX" will not be written "XFGhcuoT" but the direction of words (or collection of words) can be controlled using the RTL/LTR setting.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u6CE8\u610F\uFF0CRTL\u4E0D\u662F\u6307\u5411\u5F8C\u66F8\u5BEB\u6587\u5B57\uFF08\u8207LTR\u76F8\u6BD4\uFF09\u3002 \u5B83\u8868\u793A\u5F9E\u53F3\u908A\u958B\u59CB\u5411\u5DE6\u66F8\u5BEB\u6587\u5B57\u3002 \u5C0D\u65BC\u963F\u62C9\u4F2F\u8A9E\u548C\u5E0C\u4F2F\u4F86\u8A9E\u800C\u8A00\uFF0C\u9019\u662F\u6B63\u78BA\u8A2D\u7F6E\u3002 \u201CTouchGFX\u201D\u4E0D\u6703\u88AB\u5BEB\u6210\u201CXFGhcuoT\u201D\uFF0C\u4F46\u53EF\u4EE5\u7528RTL/LTR\u8A2D\u7F6E\u63A7\u5236\u6587\u5B57\u65B9\u5411\uFF08\u6216workds\u96C6\u5408\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u5C0DLTR\u548CRTL\u66F8\u5BEB\u7684\u8655\u7406\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5141\u8A31\u5169\u8005\u6DF7\u5408\u4F7F\u7528\u3002 \u9019\u7A31\u70BA\u96D9\u5411\u8173\u672C\u652F\u6301\u3002 TouchGFX\u652F\u63F4\u96D9\u5411\u66F8\u5BEB\u7684\u5B98\u65B9\u898F\u5247\u5B50\u96C6\u3002 \u9019\u610F\u5473\u8457\u627F\u8A8D\u8AF8\u5982\u201C10:45\u201D\u3001\u201C3.14159\u201D\u3001\u201CSTMicroelectronics TouchGFX\u201D\u7B49\u4EE5\u53CA\u5176\u4ED6\u5BEB\u6CD5\uFF0C\u751A\u81F3\u5728RTL\u6587\u5B57\u4E2D\u5B8C\u5168\u4F7F\u7528LTR\u66F8\u5BEB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0C\u62C9\u4E01\u5B57\u5143\u96C6\u4E2D\u4F7F\u7528\u7684\u6578\u5B57\uFF080-9\uFF09\u548C\u963F\u62C9\u4F2F\u8A9E\u5B57\u5143\u96C6\u4E2D\u4F7F\u7528\u7684\u6578\u5B57\u90FD\u6309LTR\u5B57\u5143\u8655\u7406\uFF0C\u76EE\u7684\u662F\u78BA\u4FDD\u6578\u5B57\u5728\u986F\u793A\u5668\u4E0A\u6B63\u5E38\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9084\u61C9\u6CE8\u610F\u7684\u662F\uFF0C\u7576\u6587\u5B57\u5305\u542BLTR\u5BE6\u9AD4\u548CRTL\u5BE6\u9AD4\u7684\u6DF7\u5408\u9AD4\u6642\uFF0C\u66F8\u5BEB\u65B9\u5411\u5341\u5206\u91CD\u8981\u3002 \u53E6\u5916\uFF0C\u5982\u679C\u6587\u5B57\u662FRTL\u6216LTR\uFF0C\u5C07\u4E0D\u80FD\u901A\u904E\u6AA2\u67E5\u6587\u5B57\u4E2D\u7684\u5B57\u5143\u4F86\u78BA\u5B9A\u3002 If a text contains first a Hebrew word (RTL) and then an English word (LTR), the output on display will depend on the writing direction of the text. \u5982\u679C\u5C07\u6587\u5B57\u8A2D\u7F6E\u70BARTL\uFF0C\u8F38\u51FA\u770B\u8D77\u4F86\u6703\u662F\u9019\u6A23\uFF1A\u201CEnglish werbeH\u201D\uFF0C\u9019\u662F\u56E0\u70BA\u6574\u500B\u6587\u5B57\u662FRTL\uFF0C\u56E0\u6B64\u7B2C\u4E00\u500B\u5B57\u5FC5\u9808\u5BEB\u5728\u6700\u53F3\u7AEF\uFF0C\u4F46\u5982\u679C\u5C07\u6587\u5B57\u8A2D\u7F6E\u70BALTR\uFF0C\u5247\u8F38\u51FA\u770B\u8D77\u4F86\u6703\u662F\u9019\u6A23\uFF1A\u201CwerbeH English\u201D\uFF0C\u9019\u662F\u56E0\u70BA\u6587\u5B57\u61C9\u5728\u6700\u5DE6\u7AEF\u958B\u59CB\u66F8\u5BEB\u7B2C\u4E00\u500B\u5B57\u3002 \u7531\u65BC\u82F1\u8A9E\u6587\u5B57\u53EF\u80FD\u5305\u542B\u5E0C\u4F2F\u4F86\u8A9E\u5B57\u8A5E\uFF0C\u5C31\u50CF\u5E0C\u4F2F\u4F86\u8A9E\u6587\u5B57\u53EF\u80FD\u5305\u542B\u82F1\u8A9E\u5B57\u8A5E\u4E00\u6A23\uFF0C\u56E0\u6B64\u4E0D\u80FD\u81EA\u52D5\u78BA\u5B9A\u63A1\u7528RTL\u9084\u662FLTR\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9084\u61C9\u6CE8\u610F\u7684\u662F\uFF0C\u7576\u6587\u5B57\u5305\u542BLTR\u5BE6\u9AD4\u548CRTL\u5BE6\u9AD4\u7684\u6DF7\u5408\u9AD4\u6642\uFF0C\u66F8\u5BEB\u65B9\u5411\u5341\u5206\u91CD\u8981\u3002 \u53E6\u5916\uFF0C\u5982\u679C\u6587\u5B57\u662FRTL\u6216LTR\uFF0C\u5C07\u4E0D\u80FD\u901A\u904E\u6AA2\u67E5\u6587\u5B57\u4E2D\u7684\u5B57\u5143\u4F86\u78BA\u5B9A\u3002 \u5982\u679C\u6587\u5B57\u4E2D\u7684\u7B2C\u4E00\u500B\u5B57\u662F\u5E0C\u4F2F\u4F86\u8A9E\uFF08RTL\uFF09\uFF0C\u7B2C\u4E8C\u500B\u5B57\u662F\u82F1\u8A9E\uFF08LTR\uFF09\uFF0C\u986F\u793A\u5668\u4E0A\u7684\u8F38\u51FA\u5C07\u53D6\u6C7A\u65BC\u6587\u5B57\u7684\u66F8\u5BEB\u65B9\u5411\u3002 \u5982\u679C\u5C07\u6587\u5B57\u8A2D\u7F6E\u70BARTL\uFF0C\u8F38\u51FA\u770B\u8D77\u4F86\u6703\u662F\u9019\u6A23\uFF1A\u201CEnglish werbeH\u201D\uFF0C\u9019\u662F\u56E0\u70BA\u6574\u500B\u6587\u5B57\u662FRTL\uFF0C\u56E0\u6B64\u7B2C\u4E00\u500B\u5B57\u5FC5\u9808\u5BEB\u5728\u6700\u53F3\u7AEF\uFF0C\u4F46\u5982\u679C\u5C07\u6587\u5B57\u8A2D\u7F6E\u70BALTR\uFF0C\u5247\u8F38\u51FA\u770B\u8D77\u4F86\u6703\u662F\u9019\u6A23\uFF1A\u201CwerbeH English\u201D\uFF0C\u9019\u662F\u56E0\u70BA\u6587\u5B57\u61C9\u5728\u6700\u5DE6\u7AEF\u958B\u59CB\u66F8\u5BEB\u7B2C\u4E00\u500B\u5B57\u3002 \u7531\u65BC\u82F1\u8A9E\u6587\u5B57\u53EF\u80FD\u5305\u542B\u5E0C\u4F2F\u4F86\u8A9E\u5B57\u8A5E\uFF0C\u5C31\u50CF\u5E0C\u4F2F\u4F86\u8A9E\u6587\u5B57\u53EF\u80FD\u5305\u542B\u82F1\u8A9E\u5B57\u8A5E\u4E00\u6A23\uFF0C\u56E0\u6B64\u4E0D\u80FD\u81EA\u52D5\u78BA\u5B9A\u63A1\u7528RTL\u9084\u662FLTR\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "contextual-shaping"
  }), `\u4E0A\u4E0B\u6587\u5851\u9020`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u500B\u8207RTL\u6587\u5B57\u6709\u95DC\u7684\u91CD\u8981\u554F\u984C\u662F\u62EC\u5F27\u5B57\u5143\u7684\u81EA\u52D5\u66FF\u63DB\u3002 \u9019\u4E9B\u5B57\u5143\u70BA(, )\u3001{, }\u3001`, `[, ]`, `\u3001`, `<`, `, `, `>`, `\u3002 TouchGFX supports such contextual shaping of languages by implementing a simplified set of rules for combining characters. \u8ACB\u6CE8\u610F\uFF0C\u62C9\u4E01\u6578\u5B57\u4E0D\u6703\u81EA\u52D5\u8F49\u63DB\u70BA\u963F\u62C9\u4F2F\u6578\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "list-of-supported-languages"
  }), `\u652F\u63F4\u7684\u8A9E\u8A00\u6E05\u55AE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u5B57\u5143\u7684\u4E0A\u4E0B\u6587\uFF0C\u7279\u5B9A\u8173\u672C\u5C07\u9078\u64C7\u4E0D\u540C\u5F62\u5F0F\u7684\u4E00\u500B\u6216\u591A\u500B\u5B57\u5143/\u5B57\u5F62\u3002 \u4F8B\u5982\uFF0C\u6839\u64DA\u5B57\u4E32\u4E2D\u7684\u5B57\u6BCD\u4F4D\u7F6E\uFF0C\u963F\u62C9\u4F2F\u5B57\u6BCD\u8868\u4E2D\u7684\u5B57\u6BCD\u6709\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\u5F62\u5F0F\u3002 TouchGFX\u901A\u904E\u5BE6\u73FE\u7C21\u5316\u7684\u5B57\u5143\u7D44\u5408\u898F\u5247\u96C6\u5408\uFF0C\u652F\u63F4\u8A9E\u8A00\u7684\u4E0A\u4E0B\u6587\u5851\u9020\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "left-to-right-languages"
  }), `\u5F9E\u5DE6\u5411\u53F3\u5F0F\u8A9E\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Simple languages using Latin characters`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7E3D\u9AD4\u800C\u8A00\uFF0C\u652F\u63F4\u4F7F\u7528\u7121\u9700\u5C08\u9580\u91CD\u65B0\u6392\u5217\u6216\u5B9A\u4F4D\u7684\u5B57\u5143\u548C\u5B57\u5F62\u7684\u7C21\u55AE\u8A9E\u8A00\u3002 \u9019\u4E9B\u8A9E\u8A00\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5176\u5B83`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u8A9E\u8A00\u4ECD\u7136\u9075\u5FAA\u7C21\u55AE\u7684\u5B9A\u4F4D\u898F\u5247\uFF0C\u4F46\u4F7F\u7528\u4E0D\u540C\u7684\u5B57\u5143\u548C\u5B57\u5F62\u96C6\u3002 \u6B64\u5916\uFF0C\u9084\u652F\u63F4\u548C\u5305\u542B\uFF08\u4F46\u4E0D\u9650\u65BC\uFF09\u4EE5\u4E0B\u8A9E\u8A00\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E2D\u6587\u3001\u5E0C\u81D8\u8A9E\u3001\u65E5\u8A9E\u548C\u4FC4\u8A9E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5176\u5B83`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u9650\u652F\u6301\u6CF0\u8A9E\u3002 \u4F7F\u7528TouchGFX\u898F\u5247\u5B9A\u4F4D\uFF08\u5782\u76F4\uFF09\u8072\u8ABF\u7B26\u865F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u9650\u652F\u6301\u5370\u5730\u8A9E\uFF08\u5929\u57CE\u9AD4\uFF09\u3002 \u4E00\u4E9B\u5B57\u53EF\u80FD\u7A0D\u5FAE\u653E\u932F\uFF0C\u4F46\u6587\u5B57\u4ECD\u61C9\u53EF\u8B80\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "right-to-left-languages"
  }), `\u5F9E\u53F3\u5411\u5DE6\u5F0F\u8A9E\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5176\u5B83`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Hebrew, Indonesian, Kazakh`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4F7F\u7528\u7279\u6B8A\u5B57\u5143\u96C6\u7684\u7C21\u55AE\u8A9E\u8A00`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u963F\u62C9\u4F2F\u8A9E\uFF08\u8D85\u904E\u56DB\u500B\u5B57\u5143\u7684\u5E8F\u5217\u4E0D\u6703\u88AB\u8B58\u5225\u548C\u8F49\u63DB\u70BA\u4E00\u500B\u9023\u5B57\u3002 \u5305\u62EC\uFF1ASallallahou Alayhe Wasallam\u3001Jallajalalouhou\u548CRial Sign\uFF09\u3002 \u4E00\u4E9B\u8B8A\u97F3\u7B26\u7684\u4F4D\u7F6E\u53EF\u80FD\u7A0D\u6709\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6CE2\u65AF\u8A9E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u99AC\u4F86\u8A9E\uFF08\u50C5\u652F\u6301\u9694\u96E2\u5F0F\u7684\u0762 \u201C\u4E0A\u65B9\u6709\u9EDE\u7684Keheh\u201D\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "unsupported-languages"
  }), `\u4E0D\u652F\u63F4\u7684\u8A9E\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5DF2\u77E5\u4E0D\u652F\u63F4\u4E0B\u5217\u5927\u91CF\u4F7F\u7528\u9023\u5B57\u3001\u5408\u9AD4\u5B57\u6BCD\u548C\u5782\u76F4\u5B9A\u4F4D\u7684\u8A9E\u8A00\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70CF\u723E\u90FD\u8A9E\u3001\u7DEC\u7538\u8A9E`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);