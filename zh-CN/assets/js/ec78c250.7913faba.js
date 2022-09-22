"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4760],{

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

/***/ 43041:
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
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65407);
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
  id: "getting-started",
  title: "\u5165\u95E8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/getting-started",
  "id": "introduction/getting-started",
  "title": "\u5165\u95E8",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/getting-started",
  "permalink": "/4.20/zh-CN/docs/introduction/getting-started",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-started",
    "title": "\u5165\u95E8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5B89\u88C5",
    "permalink": "/4.20/zh-CN/docs/introduction/installation"
  },
  "next": {
    "title": "Basic Concepts",
    "permalink": "/4.20/zh-CN/docs/category/basic-concepts"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX Designer\u5FEB\u901F\u5165\u95E8",
  id: "touchgfx-designer-quick-start",
  level: 2
}, {
  value: "TouchGFX \u677F\u7EA7\u8BBE\u7F6E + \u793A\u4F8B \u53CA Demos",
  id: "application-template--ui-template",
  level: 3
}, {
  value: "\u7279\u5B9A\u5355\u677F\u7684Demos",
  id: "online-applications",
  level: 3
}, {
  value: "\u4E0B\u4E00\u6B65",
  id: "whats-next",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5F00\u59CB\u4F7F\u7528TouchGFX\u524D\uFF0C\u9700\u8981\u5B89\u88C5\u6700\u65B0\u7248\u7684TouchGFX\uFF0C\u8FD9\u5C06\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "installation"
  }), `\u5B89\u88C5`), `\u90E8\u5206\u4E2D\u4ECB\u7ECD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/getting-started/computer-2-screens.png",
    noShadow: true,
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B8C\u6210\u8BE5\u64CD\u4F5C\u540E\uFF0C\u60A8\u5C31\u53EF\u4EE5\u5F00\u59CB\u7B2C\u4E00\u4E2ATouchGFX\u9879\u76EE\u3002 \u5F3A\u70C8\u5EFA\u8BAE\u60A8\u9605\u8BFB\u672C\u6587\u7684\u5173\u952E\u7AE0\u8282\uFF0C\u4EE5\u719F\u6089\u6700\u57FA\u672C\u7684TouchGFX\u6982\u5FF5\u3002 \u6700\u57FA\u672C\u7684\u7AE0\u8282\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/development-introduction"
  }), `\u5F00\u53D1\u7B80\u4ECB`), `\uFF0C\u6B64\u90E8\u5206\u5C06\u4E3A\u60A8\u4ECB\u7ECD\u5B8C\u6574\u7684TouchGFX\u9879\u76EE\u6240\u9700\u7684\u8F6F\u786C\u4EF6\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u521B\u5EFA\u5B83\u4EEC\u6240\u9700\u7684\u64CD\u4F5C\u53CA\u5DE5\u5177\u3002 \u8BE5\u7AE0\u8282\u8FD8\u4ECB\u7ECD\u4E86\u5982\u4F55\u4F7F\u7528\u9884\u5236\u7EC4\u4EF6\u5F00\u59CB\u5FEB\u901F\u539F\u578B\u8BBE\u8BA1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-quick-start"
  }), `TouchGFX Designer\u5FEB\u901F\u5165\u95E8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-template--ui-template"
  }), `TouchGFX \u677F\u7EA7\u8BBE\u7F6E + \u793A\u4F8B \u53CA Demos`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6E34\u671B\u5F00\u59CB\u4F53\u9A8CTouchGFX\uFF0C\u8BF7\u5C1D\u8BD5\u4E00\u4E2AUI\u793A\u4F8B\u9879\u76EE\uFF0C\u5E76\u5728STM32\u8BC4\u4F30\u5957\u4EF6\u4E0A\u8FD0\u884C\u8BE5\u9879\u76EE\uFF0C\u751A\u81F3\u53EF\u4EE5\u542F\u52A8TouchGFX Designer\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",
    mdxType: "LoopVideo"
  }, "\u57FA\u4E8ETouchGFX\u677F\u7EA7\u8BBE\u7F6E\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E3B\u754C\u9762\uFF0C\u6709\u5927\u91CF\u7684\u793A\u4F8B\u548CDEMO\u53EF\u4F9B\u9009\u62E9. \u60A8\u751A\u81F3\u53EF\u4EE5\u5C06\u8BE5\u793A\u4F8B\u4E0E\u4E00\u7CFB\u5217STM32\u8BC4\u4F30\u5957\u4EF6\u7684\u677F\u7279\u5B9A\u4EE3\u7801\u76F8\u7ED3\u5408\uFF0C\u4EE5\u4FBF\u7ACB\u5373\u5728\u786C\u4EF6\u4E0A\u5C1D\u8BD5\u8BE5\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u6CA1\u6709STM32\u8BC4\u4F30\u5957\u4EF6\uFF0C\u60A8\u53EA\u9700\u5728PC\u4E0A\u8FD0\u884CTouchGFX\u5E94\u7528\u7A0B\u5E8F\u3002 \u5982\u679C\u60A8\u5E0C\u671B\u6839\u636E\u64CD\u4F5C\u6307\u5357\u5B8C\u6210\u7B2C\u4E00\u6B65\uFF0C\u5219\u53EF\u4EE5\u67E5\u770B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../tutorials/tutorial-01"
  }), `\u6559\u7A0B`), `\u7AE0\u8282\u3002 \u8FD9\u91CC\u5C06\u5411\u60A8\u5C55\u793A\u5982\u4F55\u542F\u52A8\u5E76\u8FD0\u884C\u9879\u76EE\uFF0C\u6700\u7EC8\u5B8C\u6210\u4E00\u4E2A\u76F8\u5F53\u590D\u6742\u7684UI\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "online-applications"
  }), `\u7279\u5B9A\u5355\u677F\u7684Demos`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u80FD\u591F\u5C06\u5E94\u7528\u7A0B\u5E8F\u6A21\u677F\u4E0EUI\u6A21\u677F\u76F8\u7ED3\u5408\u4EE5\u5916\uFF0CTouchGFX Designer\u8FD8\u5305\u62EC\u4E00\u4E9B\u9488\u5BF9\u7279\u5B9ASTM32\u8BC4\u4F30\u5957\u4EF6\u7684\u73B0\u6210\u6F14\u793A\u3002 \u8FD9\u4E9B\u4F4D\u4E8E\u7279\u5B9A\u5355\u677F\u7684Demos\u7AE0\u8282.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",
    mdxType: "LoopVideo"
  }, "\u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8E\u7279\u5B9A\u677F\u7EA7Demo\u7684\u5E94\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "whats-next"
  }), `\u4E0B\u4E00\u6B65`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u65F6\uFF0C\u5EFA\u8BAE\u60A8\u6D4F\u89C8\u6587\u6863\u5E76\u9605\u8BFB\u76F8\u5173\u7AE0\u8282\u3002 \u8FD9\u5C06\u4F7F\u60A8\u5BF9\u6587\u6863\u6709\u4E00\u4E2A\u5927\u81F4\u7684\u4E86\u89E3\uFF0C\u4ECE\u800C\u8BA9\u60A8\u77E5\u9053\u4ECE\u54EA\u91CC\u67E5\u627E\u66F4\u591A\u4FE1\u606F\uFF0C\u5E76\u4E86\u89E3TouchGFX\u5173\u952E\u6982\u5FF5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u8981\u7AE0\u8282\u5305\u62EC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../basic-concepts/embedded-graphics"
  }), `\u57FA\u672C\u6982\u5FF5`), `: \u672C\u7AE0\u4E3A\u672C\u6587\u6863\u7684\u5176\u4F59\u7AE0\u8282\u63D0\u4F9B\u80CC\u666F\u77E5\u8BC6\u3002 \u5176\u4E2D\u5C06\u4ECB\u7ECD\u7A0D\u540E\u8981\u5F15\u7528\u7684\u6240\u6709\u5173\u952E\u56FE\u5F62\u6982\u5FF5\u3002 \u6839\u636E\u60A8\u5F53\u524D\u7684\u77E5\u8BC6\u4EE5\u53CA\u60A8\u5C06\u8FDB\u884C\u7684TouchGFX\u5F00\u53D1\u64CD\u4F5C\uFF0C\u60A8\u53EF\u80FD\u60F3\u5148\u8DF3\u8FC7\u67D0\u4E9B\u7AE0\u8282\uFF0C\u5E76\u5728\u4EE5\u540E\u4E0D\u4E86\u89E3\u67D0\u4E9B\u7EC6\u8282\u7684\u60C5\u51B5\u4E0B\u56DE\u8FC7\u5934\u6765\u67E5\u770B\u8FD9\u4E9B\u7AE0\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/development-introduction"
  }), `\u7814\u53D1`), `: \u672C\u7AE0\u4E3A\u672C\u6587\u6863\u7684\u4E3B\u8981\u7AE0\u8282\u3002 \u5B83\u89E3\u91CA\u4E86TouchGFX\u9879\u76EE\u7684\u7ED3\u6784\u4EE5\u53CA\u6574\u4E2A\u9879\u76EE\u5F00\u53D1\u5468\u671F\u4E2D\u6D89\u53CA\u7684\u5DE5\u4F5C\u6D41\u7A0B\u548C\u5DE5\u5177\u3002 \u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u7684\u6BCF\u4E2A\u6B65\u9AA4\u90FD\u6709\u81EA\u5DF1\u7684\u7AE0\u8282\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u4E86\u8BE6\u7EC6\u63CF\u8FF0\u3002 \u60A8\u53EF\u4EE5\u5728\u5176\u4E2D\u627E\u5230\u6709\u5173\u5982\u4F55\u4F7F\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u5728\u786C\u4EF6\u4E0A\u8FD0\u884C\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884CUI\u5F00\u53D1\u7684\u5168\u90E8\u6240\u9700\u77E5\u8BC6\uFF0C\u5305\u62EC\u5BF9TouchGFX Framework\u4E2D\u7684\u6240\u6709\u529F\u80FD\u548C\u7EC4\u4EF6\u7684\u63CF\u8FF0\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);