"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4989],{

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

/***/ 61847:
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
  title: "\u8BED\u8A00\u548C\u5B57\u7B26"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "id": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "title": "\u8BED\u8A00\u548C\u5B57\u7B26",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "languages-and-characters",
    "title": "\u8BED\u8A00\u548C\u5B57\u7B26"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6587\u672C\u548C\u5B57\u4F53",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  },
  "next": {
    "title": "MJPEG\u89C6\u9891",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/video"
  }
};
const assets = {};
const toc = [{
  value: "\u8BED\u8A00",
  id: "languages",
  level: 2
}, {
  value: "\u5B57\u7B26",
  id: "characters",
  level: 2
}, {
  value: "\u4E66\u5199\u65B9\u5411",
  id: "writing-direction",
  level: 2
}, {
  value: "\u4E0A\u4E0B\u6587\u5851\u9020",
  id: "contextual-shaping",
  level: 2
}, {
  value: "\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868",
  id: "list-of-supported-languages",
  level: 2
}, {
  value: "\u4ECE\u5DE6\u5411\u53F3\u5F0F\u8BED\u8A00",
  id: "left-to-right-languages",
  level: 3
}, {
  value: "\u4ECE\u53F3\u5411\u5DE6\u5F0F\u8BED\u8A00",
  id: "right-to-left-languages",
  level: 3
}, {
  value: "\u4E0D\u652F\u6301\u7684\u8BED\u8A00",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u6B64\uFF0CTouchGFX\u652F\u6301\u5404\u79CD\u8BED\u8A00\u548C\u5B57\u7B26\uFF0C\u5E76\u7406\u89E3\u6587\u672C\u5E03\u5C40\u673A\u5236\uFF0C\u5982\u4E66\u5199\u65B9\u5411\u548C\u4E0A\u4E0B\u6587\u5851\u9020\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "languages"
  }), `\u8BED\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u652F\u6301\u7684\u8BED\u8A00\u662F Unicode \u57FA\u672C\u591A\u8BED\u8A00\u5E73\u9762\u7684\u8BED\u8A00\uFF0C\u5176\u9650\u5236\u662F\u4EC5\u652F\u6301\u4ECE\u5DE6\u5230\u53F3\u6216\u4ECE\u53F3\u5230\u5DE6\u4E66\u5199\u7CFB\u7EDF\u3002 \u8FD9\u610F\u5473\u7740\u652F\u6301\u963F\u62C9\u4F2F\u8BED\u3001\u4E2D\u6587\u3001\u82F1\u8BED\u548C\u8BB8\u591A\u5176\u4ED6\u8BED\u8A00\uFF0C\u4F46\u53EF\u80FD\u6709\u4E00\u70B9\u9650\u5236\u3002 \u4E4C\u5C14\u90FD\u8BED\u548C\u7F05\u7538\u8BED\u662F\u76EE\u524D\u4E0D\u652F\u6301\u7684\u8BED\u8A00\u7684\u4F8B\u5B50\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "characters"
  }), `\u5B57\u7B26`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u7B26\u7F16\u7801\u57FA\u4E8E\u7EDF\u4E00\u7801\u6807\u51C6\u3002 16-bit Unicodes are supported, i.e. \u652F\u6301\u4ECE0x0000\u81F30xFFFF\u7684\u7EDF\u4E00\u7801\u3002 \u4E00\u4E9B\u8BED\u8A00\u53EF\u80FD\u5BF9\u91C7\u7528\u7ED9\u5B9A\u5B57\u4F53\u7684\u7279\u6B8A\u5B57\u7B26\uFF08\u5982\u5929\u57CE\u4F53\uFF09\u4F7F\u75280xE000-0xE3FF\u4E2D\u7684\u79C1\u4EBA\u4F7F\u7528\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "writing-direction"
  }), `\u4E66\u5199\u65B9\u5411`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u6301\u4ECE\u5DE6\u5411\u53F3\uFF08LTR\uFF09\u548C\u4ECE\u53F3\u5411\u5DE6\uFF08RTL\uFF09\u4E66\u5199\u4F53\u7CFB\u3002 \u6CA1\u6709\u5BF9\u4ECE\u4E0A\u81F3\u4E0B\u4E66\u5199\u4F53\u7CFB\u7684\u5185\u7F6E\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u6CE8\u610F\uFF0CRTL\u4E0D\u662F\u6307\u5411\u540E\u4E66\u5199\u6587\u672C\uFF08\u4E0ELTR\u76F8\u6BD4\uFF09\u3002 \u5B83\u8868\u793A\u4ECE\u53F3\u8FB9\u5F00\u59CB\u5411\u5DE6\u4E66\u5199\u6587\u5B57\u3002 \u5BF9\u4E8E\u963F\u62C9\u4F2F\u8BED\u548C\u5E0C\u4F2F\u6765\u8BED\u800C\u8A00\uFF0C\u8FD9\u662F\u6B63\u786E\u8BBE\u7F6E\u3002 "TouchGFX" will not be written "XFGhcuoT" but the direction of words (or collection of words) can be controlled using the RTL/LTR setting.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u5BF9LTR\u548CRTL\u4E66\u5199\u7684\u5904\u7406\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5141\u8BB8\u4E24\u8005\u6DF7\u5408\u4F7F\u7528\u3002 \u8FD9\u79F0\u4E3A\u53CC\u5411\u811A\u672C\u652F\u6301\u3002 TouchGFX\u652F\u6301\u53CC\u5411\u4E66\u5199\u7684\u5B98\u65B9\u89C4\u5219\u5B50\u96C6\u3002 \u8FD9\u610F\u5473\u7740\u627F\u8BA4\u8BF8\u5982\u201C10:45\u201D\u3001\u201C3.14159\u201D\u3001\u201CSTMicroelectronics TouchGFX\u201D\u7B49\u4EE5\u53CA\u5176\u4ED6\u5199\u6CD5\uFF0C\u751A\u81F3\u5728RTL\u6587\u672C\u4E2D\u5B8C\u5168\u4F7F\u7528LTR\u4E66\u5199\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E RTL \u6587\u672C\uFF0C\u6587\u672C\u7684\u67D0\u4E9B\u90E8\u5206\u56E0\u6B64\u5FC5\u987B\u5199\u4E3A LTR\u3002 \u6B64\u6587\u672C\u5DF2\u627E\u5230\u5E76\u6536\u96C6\uFF1B \u6536\u96C6\u6240\u6709\u975E RTL \u5B57\u6BCD\u7684\u5B57\u7B26\u3002 \u989C\u8272 (:)\u3001\u70B9 (.)\u3001\u9017\u53F7 (,)\u3001\u7A7A\u683C ( ) \u7B49\u5B57\u7B26\u4E5F\u4F1A\u201C\u6346\u7ED1\u201D\u4E24\u4E2A\u8FDE\u7EED\u7684 LTR \u90E8\u5206\u3002 \u8FD9\u662F\u786E\u4FDD\u201C10:45\u201D\u4F5C\u4E3A\u5355\u4E2A LTR \u5B9E\u4F53\u5904\u7406\u7684\u539F\u56E0\uFF0C\u800C\u201CMark:\u201D\uFF08\u4EE5\u989C\u8272\u7ED3\u5C3E\uFF09\u5C06\u628A\u5192\u53F7\u653E\u5728\u5DE6\u8FB9\uFF0C\u5C31\u50CF\u963F\u62C9\u4F2F\u8BED\u548C\u5E0C\u4F2F\u6765\u8BED\u56FD\u5BB6\u6240\u671F\u671B\u7684\u90A3\u6837\uFF0C\u5373\u201C`, `<`, `some Arabic message`, `>`, ` :Mark"\uFF0C\u5176\u4E2D\u5192\u53F7\u4F4D\u4E8E RTL \u6587\u672C\u7684\u5DE6\u4FA7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u6CE8\u610F\uFF0C\u62C9\u4E01\u5B57\u7B26\u96C6\uFF080-9\uFF09\u4E2D\u4F7F\u7528\u7684\u6570\u5B57\u548C\u963F\u62C9\u4F2F\u8BED\u5B57\u7B26\u96C6\u4E2D\u4F7F\u7528\u7684\u6570\u5B57\u90FD\u6309LTR\u5B57\u7B26\u5904\u7406\uFF0C\u76EE\u7684\u662F\u786E\u4FDD\u6570\u5B57\u5728\u663E\u793A\u5668\u4E0A\u6B63\u5E38\u663E\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD8\u5E94\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u6587\u672C\u5305\u542BLTR\u5B9E\u4F53\u548CRTL\u5B9E\u4F53\u7684\u6DF7\u5408\u4F53\u65F6\uFF0C\u4E66\u5199\u65B9\u5411\u5341\u5206\u91CD\u8981\u3002 \u53E6\u5916\uFF0C\u5982\u679C\u6587\u672C\u662FRTL\u6216LTR\uFF0C\u5C06\u4E0D\u80FD\u901A\u8FC7\u68C0\u67E5\u6587\u672C\u4E2D\u7684\u5B57\u7B26\u6765\u786E\u5B9A\u3002 If a text contains first a Hebrew word (RTL) and then an English word (LTR), the output on display will depend on the writing direction of the text. \u5982\u679C\u5C06\u6587\u672C\u8BBE\u7F6E\u4E3ARTL\uFF0C\u8F93\u51FA\u770B\u8D77\u6765\u4F1A\u662F\u8FD9\u6837\uFF1A\u201CEnglish werbeH\u201D\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6574\u4E2A\u6587\u672C\u662FRTL\uFF0C\u56E0\u6B64\u7B2C\u4E00\u4E2A\u5B57\u5FC5\u987B\u5199\u5728\u6700\u53F3\u7AEF\uFF0C\u4F46\u5982\u679C\u5C06\u6587\u672C\u8BBE\u7F6E\u4E3ALTR\uFF0C\u5219\u8F93\u51FA\u770B\u8D77\u6765\u4F1A\u662F\u8FD9\u6837\uFF1A\u201CwerbeH English\u201D\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6587\u672C\u5E94\u5728\u6700\u5DE6\u7AEF\u5F00\u59CB\u4E66\u5199\u7B2C\u4E00\u4E2A\u5B57\u3002 \u7531\u4E8E\u82F1\u8BED\u6587\u672C\u53EF\u80FD\u5305\u542B\u5E0C\u4F2F\u6765\u8BED\u5B57\u8BCD\uFF0C\u5C31\u50CF\u5E0C\u4F2F\u6765\u8BED\u6587\u672C\u53EF\u80FD\u5305\u542B\u82F1\u8BED\u5B57\u8BCD\u4E00\u6837\uFF0C\u56E0\u6B64\u4E0D\u80FD\u81EA\u52A8\u786E\u5B9A\u91C7\u7528RTL\u8FD8\u662FLTR\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u4E2A\u4E0ERTL\u6587\u672C\u6709\u5173\u7684\u91CD\u8981\u95EE\u9898\u662F\u62EC\u53F7\u5B57\u7B26\u7684\u81EA\u52A8\u66FF\u6362\u3002 \u5B83\u4EEC\u662F (, ), {, }, `, `[, ]`, `, <, >\u3002 \u6240\u6709\u8FD9\u4E9B\u90FD\u4F1A\u81EA\u52A8\u4E0E\u76F8\u53CD\u7684\u5B57\u7B26\u4EA4\u6362\uFF0C\u4EE5\u786E\u4FDD\u6587\u672C\u770B\u8D77\u6765\u6B63\u786E\u3002 \u8BF7\u6CE8\u610F\uFF0C\u62C9\u4E01\u6570\u5B57\u4E0D\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A\u963F\u62C9\u4F2F\u6570\u5B57\u3002 \u5982\u679C\u9700\u8981\uFF0C\u8FD9\u5FC5\u987B\u7531\u7528\u6237\u5728\u663E\u793A\u6587\u672C\u4E4B\u524D\u5B8C\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "contextual-shaping"
  }), `\u4E0A\u4E0B\u6587\u5851\u9020`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u5B57\u7B26\u7684\u4E0A\u4E0B\u6587\uFF0C\u7279\u5B9A\u811A\u672C\u5C06\u9009\u62E9\u4E0D\u540C\u5F62\u5F0F\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26/\u5B57\u5F62\u3002 \u4F8B\u5982\uFF0C\u6839\u636E\u5B57\u4E2D\u7684\u5B57\u6BCD\u4F4D\u7F6E\uFF0C\u963F\u62C9\u4F2F\u5B57\u6BCD\u8868\u4E2D\u7684\u5B57\u6BCD\u6709\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\u5F62\u5F0F\u3002 TouchGFX supports such contextual shaping of languages by implementing a simplified set of rules for combining characters. \u6B64\u5916\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u903B\u8F91\u653E\u7F6E\u4E00\u4E9B\u53D8\u97F3\u7B26\u53F7\u6765\u786E\u5B9A\u5782\u76F4\u4F4D\u7F6E - \u8FD9\u5BF9\u4E8E\u963F\u62C9\u4F2F\u8BED\u3001\u6CF0\u8BED\u548C\u68B5\u6587\u5C24\u5176\u5982\u6B64\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "list-of-supported-languages"
  }), `\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F88\u96BE\u63D0\u4F9B\u6240\u6709\u53D7\u652F\u6301\u8BED\u8A00\u7684\u8BE6\u5C3D\u5217\u8868\u3002 \u901A\u5E38\uFF0C\u652F\u6301\u6CA1\u6709\u7279\u6B8A\u91CD\u65B0\u6392\u5E8F\u6216\u5B9A\u4F4D\u89C4\u5219\u7684\u6807\u51C6\u5B57\u5F62\u3002 TouchGFX \u4E2D\u5305\u542B\u4E86\u4E00\u4E9B\u5177\u6709\u7279\u6B8A\u89C4\u5219\u7684\u8BED\u8A00\uFF0C\u4F8B\u5982\u5370\u5730\u8BED\uFF08\u5929\u57CE\u6587\uFF09\u548C\u963F\u62C9\u4F2F\u8BED\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "left-to-right-languages"
  }), `\u4ECE\u5DE6\u5411\u53F3\u5F0F\u8BED\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Simple languages using Latin characters`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u603B\u4F53\u800C\u8A00\uFF0C\u652F\u6301\u4F7F\u7528\u65E0\u9700\u4E13\u95E8\u91CD\u65B0\u6392\u5217\u6216\u5B9A\u4F4D\u7684\u5B57\u7B26\u548C\u5B57\u5F62\u7684\u7B80\u5355\u8BED\u8A00\u3002 \u8FD9\u4E9B\u8BED\u8A00\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26\u96C6\u7684\u7B80\u5355\u8BED\u8A00`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u8BED\u8A00\u4ECD\u7136\u9075\u5FAA\u7B80\u5355\u7684\u5B9A\u4F4D\u89C4\u5219\uFF0C\u4F46\u4F7F\u7528\u4E0D\u540C\u7684\u5B57\u7B26\u548C\u5B57\u5F62\u96C6\u3002 \u6B64\u5916\uFF0C\u8FD8\u652F\u6301\u548C\u5305\u542B\uFF08\u4F46\u4E0D\u9650\u4E8E\uFF09\u4EE5\u4E0B\u8BED\u8A00\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E2D\u6587\u3001\u5E0C\u814A\u8BED\u3001\u65E5\u8BED\u548C\u4FC4\u8BED`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5176\u5B83`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u9650\u652F\u6301\u6CF0\u8BED\u3002 \u4F7F\u7528 TouchGFX \u89C4\u5219\uFF08\u5782\u76F4\uFF09\u5B9A\u4F4D\u97F3\u8C03\u6807\u8BB0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u9650\u652F\u6301\u5370\u5730\u8BED\uFF08\u5929\u57CE\u4F53\uFF09\u3002 \u4E00\u4E9B\u5B57\u7B26\u53EF\u4EE5\u7A0D\u5FAE\u653E\u9519\uFF0C\u4F46\u6587\u672C\u4E0D\u5E94\u4E0D\u53EF\u8BFB\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "right-to-left-languages"
  }), `\u4ECE\u53F3\u5411\u5DE6\u5F0F\u8BED\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26\u96C6\u7684\u7B80\u5355\u8BED\u8A00`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Hebrew, Indonesian, Kazakh`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5177\u6709\u4E0D\u540C\u5F62\u5F0F\uFF08\u5355\u72EC\u3001\u521D\u59CB\u3001\u4E2D\u95F4\u548C\u6700\u7EC8\uFF09\u7684\u4E0D\u7528\u8FDE\u5B57\u7684\u8BED\u8A00`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u963F\u62C9\u4F2F\u8BED\uFF08\u8D85\u8FC7\u56DB\u4E2A\u5B57\u7B26\u7684\u5E8F\u5217\u4E0D\u4F1A\u88AB\u8BC6\u522B\u548C\u8F6C\u6362\u4E3A\u4E00\u4E2A\u8FDE\u5B57\u3002 \u5305\u62EC\uFF1ASallallahou Alayhe Wasallam\u3001Jallajalalouhou\u548CRial Sign\uFF09\u3002 \u4E00\u4E9B\u53D8\u97F3\u7B26\u7684\u4F4D\u7F6E\u53EF\u80FD\u7A0D\u6709\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6CE2\u65AF\u8BED`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9A6C\u6765\u8BED\uFF08\u4EC5\u652F\u6301\u9694\u79BB\u5F0F\u7684\u0762 \u201C\u4E0A\u65B9\u6709\u70B9\u7684Keheh\u201D\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "unsupported-languages"
  }), `\u4E0D\u652F\u6301\u7684\u8BED\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5DF2\u77E5\u4E0D\u652F\u6301\u4E0B\u5217\u5927\u91CF\u4F7F\u7528\u8FDE\u5B57\u3001\u5408\u4F53\u5B57\u6BCD\u548C\u5782\u76F4\u5B9A\u4F4D\u7684\u8BED\u8A00\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E4C\u5C14\u90FD\u8BED\u3001\u7F05\u7538\u8BED`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);