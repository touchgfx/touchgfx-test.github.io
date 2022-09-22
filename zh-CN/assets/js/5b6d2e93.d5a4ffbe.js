"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9295],{

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

/***/ 29415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  viewBox: "0 0 14 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class FurtherReading extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-further-reading)",
      header: "Further reading",
      type: "further-reading",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (FurtherReading);


/***/ }),

/***/ 88678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Highlight extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const className = `highlight highlight-${this.props.type}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-heading"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-icon"
    }, this.props.icon), this.props.header)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-content"
    }, this.props.children));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Highlight);


/***/ }),

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


/***/ }),

/***/ 38580:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65407);
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
  id: "examples",
  title: "\u793A\u4F8B\u548C\u7279\u5B9A\u677F\u5361\u7684\u6F14\u793A"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/examples",
  "id": "development/ui-development/working-with-touchgfx/examples",
  "title": "\u793A\u4F8B\u548C\u7279\u5B9A\u677F\u5361\u7684\u6F14\u793A",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/examples",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/examples",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "examples",
    "title": "\u793A\u4F8B\u548C\u7279\u5B9A\u677F\u5361\u7684\u6F14\u793A"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8C03\u8BD5",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging"
  },
  "next": {
    "title": "\u952E\u76D8\u5FEB\u6377\u952E",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"
  }
};
const assets = {};



const toc = [{
  value: "\u793A\u4F8B\u548C\u6F14\u793A",
  id: "ui-templates",
  level: 2
}, {
  value: "\u7279\u5B9A\u4E8E\u677F\u5361\u7684\u6F14\u793A",
  id: "online-applications",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u6709\u52A9\u4E8E\u8FDB\u4E00\u6B65\u63A2\u7D22TouchGFX\u7684\u53EF\u80FD\u6027\u548C\u7279\u6027\uFF0C\u591A\u4E2A\u9884\u5148\u5236\u4F5C\u7684\u793A\u4F8B\u548C\u6F14\u793A\u5BF9\u7528\u6237\u53EF\u7528\u3002 \u53EF\u4EE5\u901A\u8FC7TouchGFX Designer\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/startup-window"
  }), `\u8D77\u59CB\u754C\u9762`), `\u8BBF\u95EE\u8FD9\u4E9B\u793A\u4F8B\u548C\u6F14\u793A\uFF08\u5747\u5305\u62EC\u514D\u8D39\u4F7F\u7528\u7684\u56FE\u50CF\u548C\u4EE3\u7801\u7B49\uFF09\uFF0C\u8FD9\u610F\u5473\u7740\u53EF\u4EE5\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u57FA\u7840\uFF0C\u4EE5\u6784\u5EFA\u81EA\u5DF1\u72EC\u6709\u7684\u5E94\u7528\u7A0B\u5E8F\u3002 \u5C06\u793A\u4F8B\u548C\u6F14\u793A\u4E0E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../development-introduction#application-templates-ats"
  }), `TouchGFX\u677F\u5361\u8BBE\u7F6E`), `\u7ED3\u5408\u53EF\u4EE5\u521B\u5EFATouchGFX\u5E94\u7528\u7A0B\u5E8F\u3002 \u5982\u679C\u60A8\u4E0D\u592A\u719F\u6089TouchGFX\uFF0C\u53EF\u4EE5\u4EE5\u6B64\u4E3A\u826F\u597D\u7684\u8D77\u70B9\uFF0C\u6DF1\u5165\u4E86\u89E3TouchGFX\u5E94\u7528\u7A0B\u5E8F\u7684\u5DE5\u4F5C\u539F\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u793A\u4F8B\u548C\u6F14\u793A\u53EA\u5173\u6CE8\u5355\u4E2A\u7279\u6027\uFF0C\u800C\u53E6\u4E00\u4E9B\u5219\u5B9E\u73B0TouchGFX\u4E2D\u7684\u51E0\u4E2A\u4E0D\u540C\u529F\u80FD\u3002 \u6F14\u793A\u5206\u4E3A\u4E24\u4E2A\u4E0D\u540C\u7C7B\u578B\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#ui-templates"
  }), `\u6F14\u793A`), ` \u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#online-applications"
  }), `\u7279\u5B9A\u677F\u5361\u6F14\u793A`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-templates"
  }), `\u793A\u4F8B\u548C\u6F14\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u793A\u4F8B\u901A\u5E38\u662F\u66F4\u5C0F\u3001\u66F4\u72EC\u7ACB\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4E3B\u8981\u5173\u6CE8\u7279\u5B9A\u7279\u6027\uFF0C\u6BD4\u5982\u4E0D\u540C\u7684\u5C0F\u90E8\u4EF6\u3002 \u793A\u4F8B\u53EF\u4EE5\u5728\u4EFB\u4F55STM32\u8BC4\u4F30\u5957\u4EF6\u548CPC\u6A21\u62DF\u5668\u4E0A\u8FD0\u884C\uFF0C\u4F46\u4E3A\u4E86\u83B7\u5F97\u6700\u4F73\u4F53\u9A8C\uFF0C\u5EFA\u8BAE\u5728\u793A\u4F8B\u7684\u5206\u8FA8\u7387\u4E0E\u60A8\u7684\u677F\u4EF6\u5206\u8FA8\u7387\u5339\u914D\u7684\u60C5\u51B5\u4E0B\u521B\u5EFA\u9879\u76EE\u3002 \u6709\u4E9B\u793A\u4F8B\u5728\u6784\u5EFA\u65F6\u4E5F\u8003\u8651\u5230\u4E86\u7279\u5B9A\u7684\u8272\u6DF1\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u5728\u8F83\u4F4E\u7684\u8272\u6DF1\u663E\u793A\u5E94\u7528\u4E2D\u7684\u663E\u793A\u6548\u679C\u53EF\u80FD\u4E0D\u4F1A\u5F88\u597D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6F14\u793A\u5305\u62EC\u8BB8\u591ATouchGFX\u56E2\u961F\u5236\u4F5C\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u4EEC\u5C55\u793A\u4E86\u66F4\u591A\u91C7\u7528\u66F4\u9AD8\u8D28\u91CFUI\u8BBE\u8BA1\u7684\u7279\u6027\u3002 \u8FD9\u4E9B\u80FD\u591F\u8BA9\u60A8\u5F00\u59CB\u611F\u53D7TouchGFX\u7684\u80FD\u529B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4F7F\u7528\u793A\u4F8B\u6216\u6F14\u793A\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\uFF0C\u9996\u5148\u70B9\u51FB\u8D77\u59CB\u754C\u9762\u5DE6\u4E0A\u65B9\u7684\u201C\u793A\u4F8B\u201D\u6216\u201C\u6F14\u793A\u201D\uFF0C\u4EE5\u67E5\u770B\u53EF\u7528\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u7136\u540E\u70B9\u51FB\u60A8\u9700\u8981\u7684\u5E94\u7528\u7A0B\u5E8F\u3002 \u6216\u8005\uFF0C\u53EF\u4EE5\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\u9009\u62E9\u53E6\u5916\u7684\u5206\u8FA8\u7387\u548C\u8272\u6DF1\u3002 \u5982\u679C\u60F3\u5728\u4E00\u4E2A\u652F\u6301\u7684\u786C\u4EF6\u4E0A\u8FD0\u884C\uFF0C\u70B9\u51FB\u7A97\u53E3\u9876\u90E8\u7684\u201CSelect Hardware\u201D\uFF0C\u9009\u62E9\u60F3\u8981\u7684\u677F\u5361\uFF0C\u7136\u540E\u6309\u201C\u9009\u62E9\u201D\u3002 \u6700\u540E\uFF0C\u6309\u201CCreate\u201D\u901A\u8FC7\u9009\u5B9A\u7684TouchGFX\u677F\u5361\u8BBE\u7F6E\u548C\u793A\u4F8B\u6216\u6F14\u793A\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\u3002 \u6309\u201CRun Simulator\u201D\u6216\u201CRun Target\u201D\u67E5\u770B\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E9B\u6B65\u9AA4\u7684\u52A8\u753B\u6F14\u793A\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",
    mdxType: "LoopVideo"
  }, "\u4F7F\u7528\u793A\u4F8B\u521B\u5EFA\u9879\u76EE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "online-applications"
  }), `\u7279\u5B9A\u4E8E\u677F\u5361\u7684\u6F14\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7279\u5B9A\u4E8E\u677F\u4EF6\u7684\u6F14\u793A\u662F\u9488\u5BF9\u7279\u5B9A\u786C\u4EF6\u89E3\u51B3\u65B9\u6848\u7684\u5F00\u7BB1\u5373\u7528\u578B\u5E94\u7528\u7A0B\u5E8F\uFF0C\u56E0\u6B64\u4E0D\u53EF\u80FD\u5728\u4EFB\u4F55\u5176\u4ED6STM32\u8BC4\u4F30\u5957\u4EF6\uFF08\u9664\u4E86PC\u6A21\u62DF\u5668\uFF09\u4E0A\u8FD0\u884C\u3002 \u8FD9\u4E9B\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u8981\u5927\u5F97\u591A\uFF0C\u5E76\u4E14\u63A2\u7D22TouchGFX\u6846\u67B6\u7684\u591A\u4E2A\u4E0D\u540C\u7279\u6027\uFF0C\u8FD8\u53EF\u4EE5\u5305\u542B\u4E0E\u786C\u4EF6\u7684\u96C6\u6210\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u4F7F\u7528\u7279\u5B9A\u4E8E\u677F\u4EF6\u7684\u6F14\u793A\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\uFF0C\u9996\u5148\u70B9\u51FB\u8D77\u59CB\u754C\u9762\u5DE6\u4E0A\u89D2\u7684\u2018Demos\u2019\u9009\u9879\u5361\u8FDB\u884C\u8BBF\u95EE\u3002 \u70B9\u51FB\u7A97\u53E3\u9876\u90E8\u7684\u201CBoard Specific Demo\u201D\u6807\u7B7E\uFF0C\u4EE5\u663E\u793A\u53EF\u7528\u7684\u5E94\u7528\u7A0B\u5E8F\u3002 \u70B9\u51FB\u60F3\u8981\u7684\u5E94\u7528\u7A0B\u5E8F\u5E76\u6309\u201CCreate\u201D\u3002 \u6309\u201CRun Simulator\u201D\u6216\u201CRun Target\u201D\u67E5\u770B\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E9B\u6B65\u9AA4\u7684\u52A8\u753B\u6F14\u793A\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",
    mdxType: "LoopVideo"
  }, "\u4F7F\u7528\u7279\u5B9A\u4E8E\u677F\u5361\u7684\u6F14\u793A\u521B\u5EFA\u9879\u76EE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u9700\u8BE6\u7EC6\u4E86\u89E3\u5982\u4F55\u901A\u8FC7\u793A\u4F8B\u6216\u6F14\u793A\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\uFF0C\u8BF7\u53C2\u9605", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    to: "../designer-user-guide/startup-window",
    mdxType: "Link"
  }, "\u8D77\u59CB\u754C\u9762\u90E8\u5206\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);