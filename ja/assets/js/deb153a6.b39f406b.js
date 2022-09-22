"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2999],{

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

/***/ 47013:
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
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
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
  id: "video",
  title: "MJPEG\u30D3\u30C7\u30AA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/video",
  "id": "development/ui-development/touchgfx-engine-features/video",
  "title": "MJPEG\u30D3\u30C7\u30AA",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/video.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/video",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/video",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "video",
    "title": "MJPEG\u30D3\u30C7\u30AA"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8A00\u8A9E\u3068\u6587\u5B57",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  },
  "next": {
    "title": "UI Components",
    "permalink": "/4.20/ja/docs/category/ui-components"
  }
};
const assets = {};



const toc = [{
  value: "MJPEG\u30D3\u30C7\u30AA",
  id: "mjpeg-video",
  level: 2
}, {
  value: "TouchGFX\u306B\u304A\u3051\u308B\u30D3\u30C7\u30AA\u306E\u4F7F\u7528",
  id: "using-video-with-touchgfx",
  level: 2
}, {
  value: "TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB",
  id: "video-files-in-a-touchgfx-project",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u306E\u4F7F\u7528",
  id: "using-video-files-from-user-code",
  level: 3
}, {
  value: "\u30D3\u30C7\u30AA\u5BFE\u5FDC\u306E\u958B\u767A\u30AD\u30C3\u30C8\u306E\u30EA\u30B9\u30C8",
  id: "list-of-video-enabled-development-kits",
  level: 2
}, {
  value: "MJPEG AVI\u30D5\u30A1\u30A4\u30EB\u306E\u4F5C\u6210",
  id: "creating-mjpeg-avi-files",
  level: 2
}, {
  value: "FFMPEG\u306E\u4F7F\u7528",
  id: "using-ffmpeg",
  level: 3
}, {
  value: "\u30C7\u30B3\u30FC\u30C9\u306E\u6226\u7565",
  id: "decoding-strategies",
  level: 2
}, {
  value: "Direct To Frame Buffer",
  id: "direct-to-frame-buffer",
  level: 3
}, {
  value: "Dedicated Buffer",
  id: "dedicated-buffer",
  level: 3
}, {
  value: "Double Buffer",
  id: "double-buffer",
  level: 3
}, {
  value: "\u30D3\u30C7\u30AA\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3068\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8",
  id: "video-frame-rate-and-user-interface-frame-rate",
  level: 3
}, {
  value: "\u95A2\u9023\u8A18\u4E8B",
  id: "related-articles",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30D0\u30FC\u30B8\u30E7\u30F34.18\u304B\u3089\u3001MJPEG\u30D3\u30C7\u30AA\u306E\u4F7F\u7528\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D3\u30C7\u30AA\u3092\u4F7F\u7528\u3057\u3066\u3001\u3088\u308A\u751F\u304D\u751F\u304D\u3068\u3057\u305F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u4F5C\u6210\u3057\u305F\u308A\u3001\u7C21\u5358\u306A\u624B\u9806\u3084\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9\u3092\u8868\u793A\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\u306FVideo\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u901A\u3057\u305F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u540C\u3058\u3088\u3046\u306B\u3001TouchGFX Designer\u3067\u4F7F\u7528\u3067\u304D\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "60%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067\u306EVideo\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F7F\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u30D3\u30C7\u30AA\u3092\u30C7\u30B3\u30FC\u30C9\u3059\u308B\u306B\u306F\u3001\u8FFD\u52A0\u306E\u30B5\u30DD\u30FC\u30C8\uFF65\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306F\u3001TouchGFX Generator\u5185\u3067\u30D3\u30C7\u30AA\uFF65\u30B5\u30DD\u30FC\u30C8\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u7C21\u5358\u306B\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30D3\u30C7\u30AA\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308BTouchGFX Board Setup\uFF08\u4E0B\u306E\u30EA\u30B9\u30C8\u3092\u53C2\u7167\uFF09\u3067\u306F\u3001\u901A\u5E38\u3069\u304A\u308ARun Target\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F6`), `\uFF09\u3092\u62BC\u3059\u3053\u3068\u3067\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067\u30D3\u30C7\u30AA\u3092\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",
    mdxType: "Figure"
  }, "STM32F746Discovery\u306B\u3088\u308BVideo\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F7F\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30B3\u30FC\u30C9\u3067\u30D3\u30C7\u30AA\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30A8\u30E9\u30FC\u307E\u305F\u306F\u30EA\u30F3\u30AB\uFF65\u30A8\u30E9\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mjpeg-video"
  }), `MJPEG\u30D3\u30C7\u30AA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u30D3\u30C7\u30AA\u306F\u3001\u30B3\u30F3\u30C6\u30CA\uFF65\u30D5\u30A1\u30A4\u30EB\uFF08.avi\uFF09\u306B\u30D1\u30C3\u30AD\u30F3\u30B0\u3055\u308C\u305F\u591A\u6570\u306EJPEG\u753B\u50CF\uFF08\u30D5\u30EC\u30FC\u30E0\uFF09\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 JPEG\u30D5\u30EC\u30FC\u30E0\u306F\u5727\u7E2E\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u76F4\u63A5\u30B3\u30D4\u30FC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u3042\u3089\u304B\u3058\u3081\u500B\u3005\u306E\u30D5\u30EC\u30FC\u30E0\u3092RGB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF0816\u307E\u305F\u306F24\u30D3\u30C3\u30C8\uFF09\u306B\u5727\u7E2E\u89E3\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u5727\u7E2E\u89E3\u9664\u306F\u3001RGB\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3068\u6BD4\u3079\u3066\u8A08\u7B97\u306B\u6642\u9593\u304C\u304B\u304B\u308A\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\uFF081\u79D2\u5F53\u305F\u308A\u306E\u30D5\u30EC\u30FC\u30E0\u6570\uFF09\u3092\u4F4E\u4E0B\u3055\u305B\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u5727\u7E2E\u306E\u5229\u70B9\u306F\u3001\u30C7\u30FC\u30BF\u306E\u30B5\u30A4\u30BA\u304C\u5927\u304D\u304F\u524A\u6E1B\u3055\u308C\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30D3\u30C7\u30AA\u306F240 x 135\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002 \u3064\u307E\u308A\u300116\u30D3\u30C3\u30C8RGB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5404\u30D5\u30EC\u30FC\u30E0\u306F\u3001240 x 135 x 2\u30D0\u30A4\u30C8\u3001\u3064\u307E\u308A64,800\u30D0\u30A4\u30C8\u3092\u5FC5\u8981\u3068\u3057\u307E\u3059\u3002 \u30D3\u30C7\u30AA\u306B\u306F178\u30D5\u30EC\u30FC\u30E0\uFF08\u304A\u3088\u305D7\u79D2\u9593\uFF09\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3067\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D3\u30C7\u30AA\u306E\u5408\u8A08\u30B5\u30A4\u30BA\u306F\u3001178 x 64,800\u30D0\u30A4\u30C8= 11,534,400\u30D0\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059\u3002 MJPEG AVI\u30D5\u30A1\u30A4\u30EB\u306F\u308F\u305A\u304B1,242,282\u30D0\u30A4\u30C8\u3067\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E10.7%\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B5\u30A4\u30BA\u524A\u6E1B\u306B\u3088\u308A\u3001MJPEG\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u77ED\u9023\u7D9A\u306E\u30D3\u30C7\u30AA\u306B\u975E\u5E38\u306B\u5F79\u7ACB\u3064\u3082\u306E\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B5\u30A4\u30BA\u306E\u524A\u6E1B\u306B\u3088\u3063\u3066\u3001\u5727\u7E2E\u306B\u5C11\u3057\u4E71\u308C\uFF08\u30A8\u30E9\u30FC\uFF09\u304C\u751F\u3058\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u73FE\u5B9F\u4E16\u754C\u306E\u6620\u50CF\u306E\u591A\u304F\u3067\u8A31\u5BB9\u3055\u308C\u308B\u3082\u306E\u3067\u3059\u304C\u3001\u9AD8\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\uFF65\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3067\u306F\u8A31\u5BB9\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u90E8\u306ESTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u3001JPEG\u753B\u50CF\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u308B\u30C7\u30B3\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\uFF08STM32F769\u3084STM32H750\u306A\u3069\uFF09\u3002 \u3053\u308C\u306B\u3088\u308AJPEG\u306E\u30C7\u30B3\u30FC\u30C9\u901F\u5EA6\u304C\u30A2\u30C3\u30D7\u3057\u3001\u30D3\u30C7\u30AA\u306E\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u304C\u5411\u4E0A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u6642\u9593\u306F\u7C21\u5358\u306B16\u30DF\u30EA\u79D2\u3092\u8D85\u3048\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\uFF08\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u30D3\u30C7\u30AA\u306E\u89E3\u50CF\u5EA6\u306B\u3088\u308A\u307E\u3059\uFF09\u3002 \u3064\u307E\u308A\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001MJPEG\u30D3\u30C7\u30AA\u306E\u30C7\u30B3\u30FC\u30C9\u901F\u5EA6\u306F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u901A\u5E38\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u4E0B\u56DE\u308B\u306E\u3067\u3059\u3002 \u4E00\u90E8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u5168\u4F53\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u304C\u30C7\u30B3\u30FC\u30C9\u901F\u5EA6\u3088\u308A\u4F4E\u3044\u3053\u3068\u304C\u8A31\u5BB9\u3055\u308C\u307E\u3059\u3002 \u3057\u304B\u3057\u305D\u308C\u4EE5\u5916\u3067\u306F\u3001\u305F\u3068\u3048\u3070\u30D3\u30C7\u30AA\u304C20 fps\u3067\u5B9F\u884C\u3055\u308C\u308B\u5834\u5408\u3067\u3082\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u309260 fps\u306B\u7DAD\u6301\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u4F8B\u3068\u3057\u3066\u3001\u30D3\u30C7\u30AA\u306E\u6A2A\u306B\u9032\u6357\u72B6\u6CC1\u3092\u793A\u3059\u5186\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002 \u30D3\u30C7\u30AA\u304C20 fps\u3067\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u3067\u3082\u300160 fps\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u5186\u306F\u6700\u9069\u306A\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32F746\u306B\u3088\u308B\u4E0A\u306E\u4F8B\u3067\u306F\u3001\u500B\u3005\u306EJPEG\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u306B18 \uFF5E20\u30DF\u30EA\u79D2\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-video-with-touchgfx"
  }), `TouchGFX\u306B\u304A\u3051\u308B\u30D3\u30C7\u30AA\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u3067\u306F\u3001\u30D3\u30C7\u30AA\u3092\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u4E00\u90E8\u3068\u3057\u3066\u7C21\u5358\u306B\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3001VideoController\u3001\u305D\u3057\u3066\uFF08\u5F53\u7136\u306A\u304C\u3089\uFF09MJPEG\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u306E3\u3064\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u4ED6\u306E\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u540C\u69D8\u306B\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u5185\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30D3\u30C7\u30AA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001\u5B8C\u5168\u306ATouchGFX\u74B0\u5883\uFF08HAL\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3001\u30C9\u30E9\u30A4\u30D0\u306A\u3069\uFF09\u3092\u69CB\u6210\u3059\u308B\u4F4E\u30EC\u30D9\u30EB\uFF65\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u4E00\u90E8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",
    mdxType: "Figure"
  }, "Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30D3\u30C7\u30AA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `VideoController\u306F\u3001MJPEG\u30D5\u30A1\u30A4\u30EB\u306E\u30C7\u30B3\u30FC\u30C9\u3068\u30D0\u30C3\u30D5\u30A1\u7BA1\u7406\u3092\u5236\u5FA1\u3059\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306F\u3059\u3079\u3066\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30D3\u30C7\u30AA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u81EA\u52D5\u7684\u306B\u542B\u3081\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3067\u30D3\u30C7\u30AA\u3092\u975E\u5E38\u306B\u7C21\u5358\u306B\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3057\u3001\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u3001"Run Simulator"\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5\uFF09\u3092\u62BC\u3059\u3060\u3051\u3067\u3059\u3002`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\u3092\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF08IAR\u3001Keil\u3001arm-gcc\u3001CubeIDE\uFF09\u5185\u306B\u3082\u30D3\u30C7\u30AA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u308C\u306F\u4E00\u90E8\u306ETouchGFX Board Specification\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u306F\u3059\u3067\u306B\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u304C\uFF08\u4E0B\u306E\u30EA\u30B9\u30C8\u3092\u53C2\u7167\uFF09\u3001TouchGFX Generator\u306B\u3088\u3063\u3066\u3001\u4EFB\u610F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30D3\u30C7\u30AA\uFF65\u30B5\u30DD\u30FC\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\u304C\u6709\u52B9\u5316\u3055\u308C\u305F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001Designer\u3067Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u7C21\u5358\u306B\u8FFD\u52A0\u3057\u3066\u69CB\u6210\u3067\u304D\u307E\u3059\u3002 Designer\u3067\u306EVideo\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\u3053\u3061\u3089`), `\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-files-in-a-touchgfx-project"
  }), `TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306B\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u542B\u3081\u308B\u3068\u304D\u306B\u306F\u3001.avi\u30D5\u30A1\u30A4\u30EB\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/vidoes`), `\u30D5\u30A9\u30EB\u30C0\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002 \u30B3\u30FC\u30C9\u751F\u6210\u4E2D\u306B\u3001\u30D3\u30C7\u30AA\u304C.bin\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/bin`), `\u306B\u3001.o\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/obj`), `\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002 .o\u3068.bin\u306B\u306F\u540C\u3058\u30C7\u30FC\u30BF\u304C\u542B\u307E\u308C\u307E\u3059\u304C\u3001.o\u30D5\u30A1\u30A4\u30EB\u306F\uFF08\u4E00\u90E8\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\u3084IDE\u3067\u63A8\u5968\u3055\u308C\u308B\uFF09ELF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30FC\u30C9\u306E\u751F\u6210\u6642\u306B\u5B9F\u884C\u3055\u308C\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u306B\u3088\u308A\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u542B\u3081\u3089\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EB\u306B\u30EA\u30F3\u30AF\u3055\u308C\u3066\u304A\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D7\u30ED\u30B0\u30E9\u30DE\u306F\u3001\u305D\u306E\u4ED6\u306E\u30D3\u30C7\u30AA\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u3082\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u542B\u3081\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/include/videos/VideoDatabase.hpp`), `\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30D3\u30C7\u30AA\u306B\u95A2\u3059\u308B\u30B7\u30F3\u30DC\u30EB\u7684\u306A\u60C5\u5831\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_SampleVideo1_240x135_bin_start;
#else
extern const uint8_t video_SampleVideo1_240x135_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u5BA3\u8A00\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u5185\u3067Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u30D3\u30C7\u30AA\u3092\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-video-files-from-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u304B\u3089\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u306F\u3001TouchGFX Designer\u5185\u3067\u30D3\u30C7\u30AA\u3092\u9078\u629E\u3059\u308B\u3060\u3051\u3067\u306F\u5341\u5206\u3067\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001 \u8D77\u52D5\u6642\u306B\u5225\u306E\u30D3\u30C7\u30AA\u3092\u9078\u629E\u3057\u305F\u3044\u5834\u5408\u306A\u3069\u3067\u3059\u3002 \u6700\u521D\u306B\u3001\u305D\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.png",
    mdxType: "Figure"
  }, "assets/videos\u306B\u30D3\u30C7\u30AA\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30B3\u30FC\u30C9\u306E\u751F\u6210\u6642\uFF08\u307E\u305F\u306Fmake assets\u306E\u5B9F\u884C\u6642\uFF09\u306B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `VideoDatabase.hpp`), `\u306B\u542B\u3081\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_myVideo_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_myVideo_bin_start;
#else
extern const uint8_t video_myVideo_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u5185\u3067\u3053\u308C\u3089\u306E\u5BA3\u8A00\u3092\u4F7F\u7528\u3057\u3066\u3001\u52D5\u753B\u3092\u518D\u751F\u3059\u308B\u305F\u3081\u306EVideo\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,12-14}",
    "{2-2,12-14}": true
  }), `#include <gui/screen1_screen/Screen1View.hpp>
#include <videos/VideoDatabase.hpp>

Screen1View::Screen1View()
{
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();

    video.setVideoData(video_myVideo_bin_start, video_myVideo_bin_length);
    video.setWidthHeight(240, 136);
    video.play();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30C7\u30FC\u30BF\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3055\u308C\u305F\u3053\u3068\u306B\u6CE8\u76EE\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u308C\u3092\u907F\u3051\u308B\u306B\u306F\u3001\u30D3\u30C7\u30AA\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u5185\u306B\u914D\u7F6E\u305B\u305A\u3001\u5916\u90E8Flash\u306E\u5C02\u7528\u9818\u57DF\u306B\u30D3\u30C7\u30AA\u3092\u624B\u52D5\u3067\u30D5\u30E9\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u6B21\u306B\u3001Flash\u30A2\u30C9\u30EC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30C9\u30EC\u30B9\u3068\u9577\u3055\u306E\u307F\u3092\u6E21\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::setupScreen()
{
   ...
   video.setVideoData((const uint8_t*)0xA0200000, 1242282);
   ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "list-of-video-enabled-development-kits"
  }), `\u30D3\u30C7\u30AA\u5BFE\u5FDC\u306E\u958B\u767A\u30AD\u30C3\u30C8\u306E\u30EA\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u4F7F\u7528\u3067\u304D\u308BTouchGFX Board Setup\u30D1\u30C3\u30B1\u30FC\u30B8\u5185\u3067\u3001\u4EE5\u4E0B\u306E\u958B\u767A\u30AD\u30C3\u30C8\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30D3\u30C7\u30AA\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769Discovery\uFF08\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u308B\u30C7\u30B3\u30FC\u30C9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32H750BDiscovery\uFF08\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u308B\u30C7\u30B3\u30FC\u30C9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746Discovery\uFF08\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D9\u30FC\u30B9\u306E\u30C7\u30B3\u30FC\u30C9\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5225\u306E\u958B\u767A\u30AD\u30C3\u30C8\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u3001TouchGFX Generator\u3067\u30D3\u30C7\u30AA\uFF65\u30B5\u30DD\u30FC\u30C8\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "creating-mjpeg-avi-files"
  }), `MJPEG AVI\u30D5\u30A1\u30A4\u30EB\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307B\u3068\u3093\u3069\u306E\u30D3\u30C7\u30AA\u306FMJPEG AVI\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u3082\u3046\u5171\u901A\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u591A\u304F\u306E\u5834\u5408\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u524D\u306B\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EB\u3092MJPEG\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5909\u63DB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/FFmpeg"
  }), `FFMPEG`), `\u306A\u3069\u3092\u4F7F\u7528\u3057\u3066\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u305D\u306E\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3084\u30AA\u30F3\u30E9\u30A4\u30F3\uFF65\u30B5\u30FC\u30D3\u30B9\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-ffmpeg"
  }), `FFMPEG\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FFMPEG\u306EWindows\u30D0\u30A4\u30CA\u30EA\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.gyan.dev/ffmpeg/builds/"
  }), `\u3053\u3061\u3089`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\uFF65\u30D5\u30A1\u30A4\u30EBinput.mov\u3092MJPEG\u306B\u5909\u63DB\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u30D3\u30C7\u30AA\u306Foutput.avi\u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u306B\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30C7\u30AA\u306E\u6B63\u78BA\u306A\u30A2\u30B9\u30DA\u30AF\u30C8\u6BD4\u3092\u7DAD\u6301\u3059\u308B\u305F\u3081\u306B\u3001\u5E45\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\uFF08\u3053\u3053\u3067\u306F480\uFF09\u3057\u3001\u9AD8\u3055\u3092\u300C-1\u300D\uFF08\u30DE\u30A4\u30CA\u30B91\uFF09\u306B\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `-ss\u3092\u4F7F\u7528\u3057\u3066\u958B\u59CB\u6642\u9593\u3092\u6307\u5B9A\u3057\u3001-t\u307E\u305F\u306F-to\u3092\u4F7F\u7528\u3057\u3066\u6301\u7D9A\u6642\u9593\u307E\u305F\u306F\u505C\u6B62\u6642\u9593\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u30D3\u30C7\u30AA\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u5207\u308A\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u307E\u305F\u306F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -ss 3 -i input.mov -to 5 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AA\u30D7\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAC\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-s`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u51FA\u529B\u30D3\u30C7\u30AA\u89E3\u50CF\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-qscale`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\uFF5E31\u307E\u3067\uFF08\u826F\u304B\u3089\u60AA\u3078\uFF09\u306E\u54C1\u8CEA\u30B9\u30B1\u30FC\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-an`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u524A\u9664`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-vf`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30A3\u30EB\u30BF\uFF65\u30B0\u30E9\u30D5\u306E\u8A2D\u5B9A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-ss`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u958B\u59CB\u6642\u9593\uFF08\u79D2\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-t`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6301\u7D9A\u6642\u9593\uFF08\u79D2\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-to`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u505C\u6B62\u6642\u9593\uFF08\u79D2\uFF09`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "decoding-strategies"
  }), `\u30C7\u30B3\u30FC\u30C9\u306E\u6226\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E\u3088\u3046\u306B\u3001TouchGFX\u3067\u306F\u3001\u500B\u3005\u306EMJPEG\u30D5\u30EC\u30FC\u30E0\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u4E0A\u3067\u8868\u793A\u3059\u308B\u524D\u306B\u3001JPEG\u304B\u3089RGB\u306B\u5909\u63DB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30C7\u30B3\u30FC\u30C9\u306F\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u52D5\u4F5C\u4E2D\u306B\u5B9F\u884C\u3059\u308B\u304B\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u3042\u3089\u304B\u3058\u3081\u30C7\u30B3\u30FC\u30C9\u3059\u308B\u3053\u3068\u3067\u975E\u540C\u671F\u306B\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u540C\u671F\u30C7\u30B3\u30FC\u30C9\u306F\u3001UI\u30BF\u30B9\u30AF\u3067\u306F\u306A\u304F\u3001\u7B2C2\u30BF\u30B9\u30AF\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u3053\u306E\u30C7\u30B3\u30FC\u30C9\u3092UI\u30BF\u30B9\u30AF\u306B\u3088\u308B\u63CF\u753B\u3068\u4E26\u884C\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u306F3\u3064\u306E\u6226\u7565\u304C\u3042\u308A\u3001\u305D\u308C\u305E\u308C\u306B\u9577\u6240\u3068\u77ED\u6240\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6226\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAC\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Direct To Frame Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001\u73FE\u5728\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u3092\u76F4\u63A5\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Dedicated Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B21\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u3092\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002 \u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Double Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B21\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u30922\u756A\u76EE\u306E\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002 \u30C7\u30B3\u30FC\u30C9\u304C\u5B8C\u4E86\u3057\u305F\u3089\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u3092\u30B9\u30EF\u30C3\u30D7\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\u306F\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u306F\u5E38\u306BDirect To Frame Buffer\u6226\u7565\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\u3067\u4F7F\u7528\u3055\u308C\u308B\u6226\u7565\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator`), `\u3067\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u5404\u6226\u7565\u3092\u8A73\u3057\u304F\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "direct-to-frame-buffer"
  }), `Direct To Frame Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Direct To Frame Buffer\u6226\u7565\u3067\u306F\u3001TouchGFX Engine\u306E\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\uFF08\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#render"
  }), `Rendering`), `\u300D\u3092\u53C2\u7167\uFF09\u306E\u5B9F\u884C\u6642\u306BJPEG\u30D5\u30EC\u30FC\u30E0\u3092\u30C7\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",
    mdxType: "Figure"
  }, "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u76F4\u63A5\u30C7\u30B3\u30FC\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u66F4\u65B0\u30D5\u30A7\u30FC\u30BA\uFF08\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#update"
  }), `Update`), `\u300D\u3092\u53C2\u7167\uFF09\u306E\u5B9F\u884C\u6642\u306B\u3001Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u52D5\u753B\u3092\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306B\u9032\u3081\u308B\u3079\u304D\u304B\u3069\u3046\u304B\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002 \u305D\u306E\u6B21\u306E\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\u306E\u5B9F\u884C\u6642\u306B\u3001JPEG\u30D5\u30EC\u30FC\u30E0\u304C\u300C\u30E9\u30A4\u30F3\u30D0\u30C3\u30D5\u30A1\u300D\u306B1\u884C\u305A\u3064\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002 \u6B21\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u4E00\u81F4\u3059\u308B\u3088\u3046\u306B\u30D4\u30AF\u30BB\u30EB\u304C\u5909\u63DB\u3055\u308C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u3088\u3063\u3066\u30AB\u30D0\u30FC\u3055\u308C\u308B\u5834\u5408\u306F\u3001\u8907\u6570\u30D6\u30ED\u30C3\u30AF\u5185\u3067\u518D\u63CF\u753B\u3055\u308C\u307E\u3059\uFF08\u8868\u793A\u90E8\u5206\u304C\u9577\u65B9\u5F62\u306B\u5206\u5272\u3055\u308C\u307E\u3059\uFF09\u3002 \u3053\u308C\u3089\u306E\u30D6\u30ED\u30C3\u30AF\u306E\u5404\u3005\u3092\u63CF\u753B\u3059\u308B\u306B\u306F\u3001\u5727\u7E2E\u89E3\u9664\u4F5C\u696D\u3092\u7E70\u308A\u8FD4\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001\u3053\u306E\u6226\u7565\u306F\u3001\u30DC\u30BF\u30F3\u306A\u3069\u4ED6\u306EUI\u8981\u7D20\u304C\u30D3\u30C7\u30AA\u4E0A\u306B\u914D\u7F6E\u3055\u308C\u308B\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u306F\u4E0D\u5411\u304D\u3067\u3059\u3002\u30C7\u30B3\u30FC\u30C9\u6642\u9593\u304C\u5897\u5927\u3059\u308B\u305F\u3081\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306E\u9577\u6240\u306F\u3001\u8FFD\u52A0\u3067\u4F7F\u7528\u3055\u308C\u308B\u30E1\u30E2\u30EA\u91CF\u304C\u975E\u5E38\u306B\u5C11\u306A\u3044\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dedicated-buffer"
  }), `Dedicated Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Dedicated Buffer\u307E\u305F\u306F\u30B7\u30F3\u30B0\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\uFF65\u30C7\u30B3\u30FC\u30C9\u6226\u7565\u3067\u306F\u3001\u307E\u305AJPEG\u30D5\u30EC\u30FC\u30E0\u3092\u5C02\u7528\u306ERGB\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30B3\u30FC\u30C9\u3057\u3066\u3001\u5F8C\u3067\u305D\u306E\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",
    mdxType: "Figure"
  }, "\u5225\u306E\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30B3\u30FC\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Direct\u6226\u7565\u3068\u306F\u5BFE\u7167\u7684\u306B\u3001\u3053\u306E\u30C7\u30B3\u30FC\u30C9\u306F\u901A\u5E38\u306ETouchGFX\u30BF\u30B9\u30AF\u3067\u306F\u306A\u304F\u3001\u5225\u306E\u30BF\u30B9\u30AF\u5185\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u65B0\u3057\u3044\u52D5\u753B\u30D5\u30EC\u30FC\u30E0\u3092\u6B21\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30C6\u30A3\u30C3\u30AF\u3067\u8868\u793A\u3059\u308B\u3079\u304D\u304B\u3069\u3046\u304B\u3092\u8A08\u7B97\u3057\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u3092\u958B\u59CB\u3059\u308B\u3088\u3046\u30C7\u30B3\u30FC\u30C9\uFF65\u30BF\u30B9\u30AF\u306B\u4FE1\u53F7\u3092\u9001\u308A\u307E\u3059\u3002 \u3053\u306E\u30C7\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u4E2D\u306F\u3001\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u63CF\u753B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\uFF08\u90E8\u5206\u7684\u306B\u66F4\u65B0\u3055\u308C\u308B\u304B\u3089\u3067\u3059\uFF09\u3002 \u30C7\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u4E2D\u306F\u3001Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u518D\u63CF\u753B\u3092\u9632\u3050\u305F\u3081\u306B\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u3059\u3002 \u63CF\u753B\u304C\u5B8C\u4E86\u3057\u305F\u3089\u3001\u7D9A\u884C\u3055\u308C\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u3088\u308B\u30D3\u30C7\u30AA\u306E\u518D\u63CF\u753B\u306E\u5FC5\u8981\u304C\u306A\u3044\u5834\u5408\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306F\u901A\u5E38\u3069\u304A\u308A\u7D9A\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u30D3\u30C7\u30AA\u304C\u5B8C\u5168\u306B\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u308B\u5834\u5408\u3001\u30D3\u30C7\u30AA\u304B\u3089\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u30B3\u30B9\u30C8\u306F\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u63CF\u753B\u3068\u540C\u3058\u3067\u3059\uFF08\u4F4E\u30B3\u30B9\u30C8\uFF09\u3002 \u3064\u307E\u308A\u3053\u306E\u6226\u7565\u3067\u306F\u3001\u30D3\u30C7\u30AA\u4E0A\u306B\u30DC\u30BF\u30F3\u3084\u30C6\u30AD\u30B9\u30C8\u3092\u914D\u7F6E\u3059\u308B\u3053\u3068\u306F\u554F\u984C\u306B\u306A\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6226\u7565\u306E\u77ED\u6240\u306F\u3001\u30BF\u30B9\u30AF\u3068\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u3088\u3063\u3066\u30E1\u30E2\u30EA\u304C\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "double-buffer"
  }), `Double Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Double Buffer\u30C7\u30B3\u30FC\u30C9\u6226\u7565\u3067\u306F2\u3064\u306ERGB\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30C7\u30B3\u30FC\u30C9\u306F\u3053\u308C\u3089\u306E\u30D0\u30C3\u30D5\u30A1\u306E\u7247\u65B9\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306F\u3082\u3046\u4E00\u65B9\u306ERGB\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u884C\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",
    mdxType: "Figure"
  }, "2\u3064\u306E\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30B3\u30FC\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u304C\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u308B\u3068\u3001\u30C7\u30B3\u30FC\u30C9\uFF65\u30BF\u30B9\u30AF\u306F\u3001UI\u304C\u305D\u306E\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u3092\u8868\u793A\u3057\u3066\u524D\u306E\u30D0\u30C3\u30D5\u30A1\u3092\u89E3\u653E\u3059\u308B\u306E\u3092\u5F85\u3061\u307E\u3059\u3002 \u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u30D0\u30C3\u30D5\u30A1\u304C\u5909\u66F4\u3055\u308C\u305F\u3089\u3059\u3050\u306B\u958B\u59CB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u6226\u7565\u306E\u660E\u3089\u304B\u306A\u77ED\u6240\u306F\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u3067\u3001\u524D\u306E\u6226\u7565\u306E2\u500D\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-frame-rate-and-user-interface-frame-rate"
  }), `\u30D3\u30C7\u30AA\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3068\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30B3\u30FC\u30C9\u6226\u7565\u306F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306B\u3055\u307E\u3056\u307E\u306A\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3068\u306F\u30011\u79D2\u3054\u3068\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u751F\u6210\u3055\u308C\u308B\uFF08\u7570\u306A\u308B\uFF09\u30D5\u30EC\u30FC\u30E0\u306E\u6570\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Direct To Frame Buffer\u6226\u7565\u3067\u306F\u3001\u30D3\u30C7\u30AA\u306E\u30C7\u30B3\u30FC\u30C9\u901F\u5EA6\u304C\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u52B9\u679C\u7684\u306A\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306B\u5BB9\u6613\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u30011\u3064\u306EJPEG\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u306B28\u30DF\u30EA\u79D2\u304B\u304B\u308B\u3068\u304D\u306B\u3001\u6BCE\u79D220\u500B\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\uFF0820 fps\uFF09\u3092\u8868\u793A\u3055\u305B\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u3066\u307F\u307E\u3059\u3002 \u30C7\u30B3\u30FC\u30C9\u6642\u9593\u306E\u5408\u8A08\u306F28 ms x 20/s = 560 ms/s\u306B\u306A\u308A\u3001\u3053\u308C\u306F\u73FE\u5B9F\u7684\u3067\u3059\u3002  20 fps\u306F\u30013\u3064\u5358\u4F4D\u306E\u30D5\u30EC\u30FC\u30E0\uFF0860 fps\uFF09\u306E\u65B0\u3057\u3044\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u30013\u3064\u5358\u4F4D\u306EUI\u30D5\u30EC\u30FC\u30E0\u5185\u306B\u65B0\u3057\u3044\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u3092\u5165\u308C\u3088\u3046\u3068\u3059\u308B\u3082\u306E\u306E\u3001\u30C7\u30B3\u30FC\u30C9\u6642\u9593\u306F\u63CF\u753B\u30D5\u30A7\u30FC\u30BA\u306E\u4E00\u90E8\u306A\u306E\u3067\u3001\u3053\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306B28\u30DF\u30EA\u79D2\u304B\u304B\u308A\u3001\u3055\u3089\u306B\u6B8B\u308A\u306E\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306B\u304A\u3088\u305D2\u30DF\u30EA\u79D2\u304B\u304B\u308A\u307E\u3059\u3002 \u3053\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u9593\u306E\u5408\u8A08\u306F30\u30DF\u30EA\u79D2\u3067\u30011\u30C6\u30A3\u30C3\u30AF\u3092\u5931\u3044\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u65B0\u3057\u3044\u30C6\u30A3\u30C3\u30AF\u7528\u306E\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u3092\u751F\u6210\u3059\u308B\u6E96\u5099\u306F\u3067\u304D\u3066\u3044\u307E\u3059\u3002 \u6B21\u306E\u3053\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u306F\u30D3\u30C7\u30AA\u3092\u30C7\u30B3\u30FC\u30C9\u3057\u306A\u3044\u306E\u3067\u3001\u3053\u3053\u3067\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306F16\u30DF\u30EA\u79D2\u672A\u6E80\u3068\u306A\u308A\u5236\u9650\u306B\u9069\u5408\u3057\u307E\u3059\u3002 \u6B21\u306B\u30014\u756A\u76EE\u306E\u30C6\u30A3\u30C3\u30AF\u30672\u3064\u76EE\u306E\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u3092\u958B\u59CB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.png",
    mdxType: "Figure"
  }, "20 fps\u306E\u30D3\u30C7\u30AA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u30D3\u30C7\u30AA\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306F20 fps\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306F40\uFF0860\u304C\u4E0A\u9650\uFF09\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D50\u679C\u3068\u3057\u3066\u3001UI\u306E\u4ED6\u306E\u8981\u7D20\u309260 fps\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8868\u793A\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C9\u304C\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u5236\u9650\u3059\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Double Buffer\u30C7\u30B3\u30FC\u30C9\u6226\u7565\u3067\u306F\u3001\u3053\u306E\u70B9\u304C\u6539\u5584\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306B\u306F\u3001\u6700\u65B0\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30D3\u30C7\u30AA\uFF65\u30D0\u30C3\u30D5\u30A1\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30D0\u30C3\u30D5\u30A1\u304C\u4F7F\u7528\u53EF\u80FD\u3067\u3001\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF65\u30B9\u30EC\u30C3\u30C9\u304C\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u63CF\u753B\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30C7\u30B3\u30FC\u30C0\uFF65\u30BF\u30B9\u30AF\u306F\u3053\u306E\u30D0\u30C3\u30D5\u30A1\u3092\uFF08\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u542B\u3080\uFF09\u4ED6\u306E\u30D0\u30C3\u30D5\u30A1\u3068\u30B9\u30EF\u30C3\u30D7\u3067\u304D\u307E\u3059\u3002 \u30B9\u30EF\u30C3\u30D7\u5F8C\u3001\u30C7\u30B3\u30FC\u30C9\uFF65\u30BF\u30B9\u30AF\u306F\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u3092\u3059\u3050\u306B\u958B\u59CB\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.png",
    mdxType: "Figure"
  }, "20 fps\u306E\u30D3\u30C7\u30AA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u30D5\u30EC\u30FC\u30E01\u30682\u3067\u306F\u3001\u6700\u521D\u306B\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u305F\u30D3\u30C7\u30AA\uFF65\u30D5\u30EC\u30FC\u30E0\u304CUI\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u9593\u306B\u30C7\u30B3\u30FC\u30C0\u306F\u30D5\u30EC\u30FC\u30E02\u3092\u751F\u6210\u3057\u307E\u3059\u3002 UI\u30D5\u30EC\u30FC\u30E03\u3067\u306F\u3001\u3053\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u6E96\u5099\u304C\u5B8C\u4E86\u3057\u3001\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u30C7\u30B3\u30FC\u30C0\u306F\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30B3\u30FC\u30C9\u3092\u81EA\u7531\u306B\u958B\u59CB\u3067\u304D\u307E\u3059\uFF08\u56F3\u306B\u306F\u793A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3064\u307E\u308A\u3001\u30D3\u30C7\u30AA\uFF65\u30C7\u30B3\u30FC\u30C9\u3067\u306F2\u30C6\u30A3\u30C3\u30AF\u5358\u4F4D\u3067\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u3092\u751F\u6210\u3059\u308B\u3053\u3068\u3057\u304B\u3067\u304D\u306A\u3044\u5834\u5408\u3067\u3082\u3001\u4ED6\u306E\u8981\u7D20\u3092\u542B\u3080\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u6BCE\u30D5\u30EC\u30FC\u30E0\u66F4\u65B0\u3055\u305B\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "related-articles"
  }), `\u95A2\u9023\u8A18\u4E8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u8FF0\u306E\u3088\u3046\u306B\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3059\u308B\u30D3\u30C7\u30AA\uFF65\u30B5\u30DD\u30FC\u30C8\u306FTouchGFX Generator\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u624B\u9806\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator\u30E6\u30FC\u30B6\u30AC\u30A4\u30C9`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306FDesigner\u3067\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002 Designer\u3067\u306EVideo\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\u3053\u3061\u3089`), `\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);