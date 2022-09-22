"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4037],{

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

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 60611:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
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
  id: "main-window",
  title: "Main Window\uFF08\u30E1\u30A4\u30F3\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/main-window",
  "id": "development/ui-development/designer-user-guide/main-window",
  "title": "Main Window\uFF08\u30E1\u30A4\u30F3\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/main-window.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/main-window",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/main-window",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "main-window",
    "title": "Main Window\uFF08\u30E1\u30A4\u30F3\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "File Menu\uFF08\u30D5\u30A1\u30A4\u30EB\u30FB\u30E1\u30CB\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/file-menu"
  },
  "next": {
    "title": "Canvas View\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/canvas-view"
  }
};
const assets = {};



const toc = [{
  value: "Navigation Bar\uFF08\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30FC\uFF09",
  id: "navigation-bar",
  level: 2
}, {
  value: "Commands\uFF08\u30B3\u30DE\u30F3\u30C9\uFF09",
  id: "commands",
  level: 2
}, {
  value: "Generate Code\uFF08\u30B3\u30FC\u30C9\u751F\u6210\uFF09",
  id: "generate-code",
  level: 3
}, {
  value: "Run Simulator\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C\uFF09",
  id: "run-simulator",
  level: 3
}, {
  value: "Run Target\uFF08\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u5B9F\u884C\uFF09",
  id: "run-target",
  level: 3
}, {
  value: "Notification Bar\uFF08\u901A\u77E5\u30D0\u30FC\uFF09",
  id: "notification-bar",
  level: 2
}, {
  value: "Detailed Log\uFF08\u8A73\u7D30\u30ED\u30B0\uFF09",
  id: "detailed-log",
  level: 2
}, {
  value: "Theme\uFF08\u30C6\u30FC\u30DE\uFF09",
  id: "theme",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306EMain Window\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#navigation-bar"
  }), `Navigation Bar`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#commands"
  }), `Command Buttons`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#notification-bar"
  }), `Notification Bar`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#detailed-log"
  }), `Detailed log`), `\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002 Main Window\u3067\u306F\u3001\u30D3\u30E5\u30FC\u306E\u5468\u56F2\u306F\u30D5\u30EC\u30FC\u30E0\u3067\u56F2\u307E\u308C\u3066\u3044\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uFF08\u30D3\u30E5\u30FC\u306E\u9818\u57DF\u306F\u3001\u4E0B\u306E\u753B\u50CF\u3067\u307C\u3084\u3051\u305F\u8868\u793A\u306B\u306A\u3063\u3066\u3044\u308B\u90E8\u5206\u3067\u3059\u3002\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EMain Window"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "navigation-bar"
  }), `Navigation Bar\uFF08\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30FC\u3092\u7528\u3044\u3066\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u3059\uFF08\u4E0B\u306E\u753B\u50CF\u3092\u53C2\u7167\uFF09\u3002\u3053\u3053\u3067\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u30D3\u30E5\u30FC\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "canvas-view"
  }), `Canvas\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF09`), ` \u30C9\u30E9\u30C3\u30B0\uFF65\u30A2\u30F3\u30C9\uFF65\u30C9\u30ED\u30C3\u30D7\u306B\u3088\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u69CB\u7BC9\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "images-view"
  }), `Images\uFF08\u753B\u50CF\uFF09`), ` \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306E\u7BA1\u7406\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "texts-view"
  }), `Texts\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09`), ` \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u7BA1\u7406\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "config-view"
  }), `Config\uFF08\u8A2D\u5B9A\uFF09`), ` \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3055\u307E\u3056\u307E\u306A\u8A2D\u5B9A\u3092\u884C\u3046\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Files`), `\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u65B0\u3057\u3044File Explorer\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u958B\u304F\u306E\u3067\u3001\u30B3\u30FC\u30C9\u3092\u7C21\u5358\u306B\u53C2\u7167\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "commands"
  }), `Commands\uFF08\u30B3\u30DE\u30F3\u30C9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306ECommands\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u306F\u3001'Generate Code'\u3001'Run Simulator'\u3001'Run Target'\u306E3\u3064\u306E\u30DC\u30BF\u30F3\u304C\u3042\u308A\u307E\u3059 \uFF08\u4E0B\u306E\u753B\u50CF\u3092\u53C2\u7167\uFF09\u3002\u3053\u308C\u3089\u306E\u5404\u30DC\u30BF\u30F3\u3067\u306F\u3001\u8907\u6570\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u7D44\u307F\u5408\u308F\u305B\u3066\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30B3\u30DE\u30F3\u30C9\uFF65\u30DC\u30BF\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30DC\u30BF\u30F3\u3067\u5B9F\u884C\u3055\u308C\u308B\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u3001Config\uFF08\u8A2D\u5B9A\uFF09\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view#build"
  }), `Build`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generate-code"
  }), `Generate Code\uFF08\u30B3\u30FC\u30C9\u751F\u6210\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Generate Code\u30B3\u30DE\u30F3\u30C9\u306F\u5B8C\u5168\u306A\u30B3\u30FC\u30C9\u751F\u6210\u3092\u30C8\u30EA\u30AC\u3057\u305F\u5F8C\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate Target\u30B3\u30DE\u30F3\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "run-simulator"
  }), `Run Simulator\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Simulator\u30B3\u30DE\u30F3\u30C9\u306F\u5B8C\u5168\u306A\u30B3\u30FC\u30C9\u751F\u6210\u3092\u30C8\u30EA\u30AC\u3057\u305F\u5F8C\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Compile Simulator\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Run Simulator\u30B3\u30DE\u30F3\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Simulator\u30B3\u30DE\u30F3\u30C9\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5\u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C8\u30EA\u30AC\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "run-target"
  }), `Run Target\uFF08\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u5B9F\u884C\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Target\u30B3\u30DE\u30F3\u30C9\u306F\u5B8C\u5168\u306A\u30B3\u30FC\u30C9\u751F\u6210\u3092\u30C8\u30EA\u30AC\u3057\u305F\u5F8C\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Target\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Compile Target\u30B3\u30DE\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash Target\u30B3\u30DE\u30F3\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Target\u30B3\u30DE\u30F3\u30C9\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F6\u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C8\u30EA\u30AC\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Generate Code\u30B3\u30DE\u30F3\u30C9\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F7\u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C8\u30EA\u30AC\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "notification-bar"
  }), `Notification Bar\uFF08\u901A\u77E5\u30D0\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Main Window\u306E\u4E0B\u90E8\u306ENotification Bar\u306B\u306F\u3001\u73FE\u5728\u5B9F\u884C\u4E2D\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u304C\u5931\u6557\u3059\u308B\u3068\u3001\u30D0\u30FC\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u304C\u8D64\u8272\u306B\u5909\u308F\u308A\u3001\u5931\u6557\u3057\u305F\u30B3\u30DE\u30F3\u30C9\u306E\u6A2A\u306B\u30A8\u30E9\u30FC\uFF65\u30A2\u30A4\u30B3\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u6210\u529F\u3057\u305F\u30B3\u30DE\u30F3\u30C9\u306F\u307E\u305A\u7DD1\u8272\u306B\u5909\u308F\u308A\u3001\u6B21\u306BNotification Bar\u304B\u3089\u6D88\u3048\u307E\u3059\u3002\u4E00\u65B9\u3067\u5931\u6557\u3057\u305F\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5225\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u958B\u59CB\u3055\u308C\u308B\u307E\u3067\u8868\u793A\u3055\u308C\u305F\u307E\u307E\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Designer\u306E\u901A\u77E5\u30D0\u30FC\uFF08\u6210\u529F\u6642\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Designer\u306E\u901A\u77E5\u30D0\u30FC\uFF08\u5931\u6557\u6642\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "detailed-log"
  }), `Detailed Log\uFF08\u8A73\u7D30\u30ED\u30B0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Notification Bar\u306E\u4EFB\u610F\u306E\u5834\u6240\u3092\u62BC\u3059\u3068\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u958B\u304D\u3001Designer\u306B\u3088\u3063\u3066\u76F4\u524D\u306B\u5B9F\u884C\u3055\u308C\u305F\u30B3\u30DE\u30F3\u30C9\u306E\u5B8C\u5168\u306A\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30B3\u30DE\u30F3\u30C9\u306E\u51FA\u529B\u304C\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u8868\u793A\u3055\u308C\u307E\u3059\uFF08\u4E0B\u306EGIF\u3092\u53C2\u7167\uFF09\u3002Detailed Log\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u53F3\u4E0A\u9685\u306B\u3042\u308Bundock / dock\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3059\u3053\u3068\u3067\u3001\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u3092Main Window\u3068\u30C9\u30C3\u30AD\u30F3\u30B0 / \u30C9\u30C3\u30AD\u30F3\u30B0\u89E3\u9664\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Detailed Log\u30A6\u30A3\u30F3\u30C9\u30A6\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + L`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Designer\u306E\u8A73\u7D30\u30ED\u30B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "theme"
  }), `Theme\uFF08\u30C6\u30FC\u30DE\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306F\u3001Light\uFF08\u660E\uFF09\u30C6\u30FC\u30DE\u3068Dark\uFF08\u6697\uFF09\u30C6\u30FC\u30DE\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\uFF08\u4E0B\u306E\u753B\u50CF\u3092\u53C2\u7167\uFF09\u3002 \u30E6\u30FC\u30B6\u306E\u597D\u307F\u306B\u5408\u308F\u305B\u3066\u3001\u30C6\u30FC\u30DE\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu#file"
  }), `File Menu`), `\u3067\u5207\u308A\u66FF\u3048\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306ELight\u30C6\u30FC\u30DE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EDark\u30C6\u30FC\u30DE"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);