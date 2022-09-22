"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9359],{

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

/***/ 80355:
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
  title: "MJPEG\u5F71\u7247"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/video",
  "id": "development/ui-development/touchgfx-engine-features/video",
  "title": "MJPEG\u5F71\u7247",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/video.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/video",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/video",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "video",
    "title": "MJPEG\u5F71\u7247"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8A9E\u8A00\u548C\u5B57\u5143",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  },
  "next": {
    "title": "UI Components",
    "permalink": "/4.20/zh-TW/docs/category/ui-components"
  }
};
const assets = {};



const toc = [{
  value: "MJPEG\u5F71\u7247",
  id: "mjpeg-video",
  level: 2
}, {
  value: "\u901A\u904ETouchGFX\u4F7F\u7528\u5F71\u7247",
  id: "using-video-with-touchgfx",
  level: 2
}, {
  value: "TouchGFX\u5C08\u6848\u4E2D\u7684\u5F71\u7247\u6A94",
  id: "video-files-in-a-touchgfx-project",
  level: 3
}, {
  value: "\u5F9E\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u4F7F\u7528\u5F71\u7247\u6A94",
  id: "using-video-files-from-user-code",
  level: 3
}, {
  value: "\u652F\u63F4\u5F71\u7247\u529F\u80FD\u7684\u958B\u767C\u5957\u4EF6\u5217\u8868",
  id: "list-of-video-enabled-development-kits",
  level: 2
}, {
  value: "\u5275\u5EFAMJPEG AVI\u6587\u4EF6",
  id: "creating-mjpeg-avi-files",
  level: 2
}, {
  value: "\u4F7F\u7528FFMPEG",
  id: "using-ffmpeg",
  level: 3
}, {
  value: "\u89E3\u78BC\u7B56\u7565",
  id: "decoding-strategies",
  level: 2
}, {
  value: "\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "direct-to-frame-buffer",
  level: 3
}, {
  value: "\u5C08\u7528\u7DE9\u885D\u5340",
  id: "dedicated-buffer",
  level: 3
}, {
  value: "\u96D9\u7DE9\u885D\u5340",
  id: "double-buffer",
  level: 3
}, {
  value: "\u5F71\u7247\u756B\u9762\u64AD\u653E\u901F\u7387\u548C\u4F7F\u7528\u8005\u4ECB\u9762\u756B\u9762\u64AD\u653E\u901F\u7387",
  id: "video-frame-rate-and-user-interface-frame-rate",
  level: 3
}, {
  value: "\u76F8\u95DC\u6587\u7AE0",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F9E4.18\u7248\u672C\u958B\u59CB\uFF0CTouchGFX\u652F\u63F4\u4F7F\u7528MJPEG\u5F71\u7247\u3002 \u5F71\u7247\u53EF\u4EE5\u7528\u65BC\u5275\u5EFA\u66F4\u751F\u52D5\u7684\u4F7F\u7528\u8005\u4ECB\u9762\uFF0C\u6216\u986F\u793A\u7C21\u77ED\u8AAA\u660E\u6216\u4F7F\u7528\u8005\u6307\u5357\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u901A\u904E\u201C\u5F71\u7247\uFF08Video\uFF09\u201D\u5C0F\u5DE5\u5177\u5305\u542B\u5728\u4F7F\u7528\u8005\u4ECB\u9762\u4E2D\u3002 \u8A72\u5C0F\u5DE5\u5177\u5728TouchGFX Designer\u4E2D\u53EF\u7528\uFF0C\u53EF\u4EE5\u4F5C\u70BA\u4EFB\u610F\u5176\u4ED6\u5C0F\u5DE5\u5177\u6DFB\u52A0\u5230\u4F7F\u7528\u8005\u4ECB\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "60%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",
    mdxType: "Figure"
  }, "\u5728TouchGFX Designer\u4E2D\u4F7F\u7528\u201C\u5F71\u7247\uFF08Video\uFF09\u201D\u5C0F\u5DE5\u5177"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32\u5FAE\u63A7\u5236\u5668\u4E0A\u89E3\u78BC\u5F71\u7247\u9700\u8981\u984D\u5916\u7684\u652F\u63F4\u8EDF\u9AD4\u3002 \u8A72\u8EDF\u9AD4\u5728TouchGFX Generator\u4E2D\u555F\u7528\u5F71\u7247\u652F\u63F4\uFF0C\u5F9E\u800C\u8F15\u9B06\u5305\u542B\u5728\u5C08\u6848\u4E2D\u3002 \u6709\u4E86TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF08\u5176\u4E2D\u5DF2\u555F\u7528\u5F71\u7247\uFF08\u898B\u4E0B\u9762\u7684\u6E05\u55AE\uFF09\uFF09\uFF0C\u53EF\u4EE5\u8F15\u9B06\u5728\u76EE\u6A19\u4E0A\u904B\u884C\u5F71\u7247\uFF0C\u65B9\u6CD5\u662F\u50CF\u5E73\u5E38\u4E00\u6A23\u6309\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u201C\u904B\u884C\u76EE\u6A19`), `\uFF08F6\uFF09\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",
    mdxType: "Figure"
  }, "\u901A\u904ESTM32F746Discovery\u4F7F\u7528\u201C\u5F71\u7247\uFF08Video\uFF09\u201D\u5C0F\u5DE5\u5177"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4F60\u7684\u76EE\u6A19\u7A0B\u5F0F\u78BC\u4E2D\u6C92\u6709\u5F71\u7247\u652F\u63F4\uFF0C\u6703\u5F97\u5230\u7DE8\u8B6F\u6216\u9023\u7D50\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mjpeg-video"
  }), `MJPEG\u5F71\u7247`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u5F71\u7247\u7531\u6253\u5305\u5728\u5BB9\u5668\u6A94(.avi)\u4E2D\u7684\u5927\u91CFJPEG\u5716\u50CF\uFF08\u5E40\uFF09\u7D44\u6210\u3002 \u58D3\u7E2E\u5F8C\u7684JPEG\u5E40\u4E0D\u80FD\u76F4\u63A5\u8907\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u6BCF\u4E00\u5E40\u5FC5\u9808\u88AB\u89E3\u58D3\u70BARGB\u683C\u5F0F\uFF0816\u621624\u4F4D\uFF09\uFF0C\u7136\u5F8C\u624D\u80FD\u5728\u986F\u793A\u5668\u4E0A\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8207\u4F7F\u7528RGB\u9EDE\u9663\u5716\u76F8\u6BD4\uFF0C\u9019\u7A2E\u89E3\u58D3\u7E2E\u65B9\u5F0F\u7684\u8A08\u7B97\u6210\u672C\u8F03\u9AD8\uFF0C\u4E26\u4E14\u5927\u5927\u964D\u4F4E\u4E86\u6027\u80FD\uFF08\u5373\u6BCF\u79D2\u5E40\u6578\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u58D3\u7E2E\u7684\u512A\u9EDE\u662F\u5927\u5927\u6E1B\u5C11\u4E86\u8CC7\u6599\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u9762\u622A\u5716\u4E2D\u4F7F\u7528\u7684\u5F71\u7247\u50CF\u7D20\u70BA240 x 135\u3002 \u9019\u610F\u5473\u8457\u6BCF\u500B16\u4F4DRGB\u683C\u5F0F\u7684\u5E40\u5C07\u4F54\u7528240 x 135 x 2\u4F4D\u5143\u7D44= 64,800\u4F4D\u5143\u7D44\u3002 \u8A72\u5F71\u7247\u542B\u6709178\u5E40\uFF08\u6642\u9577\u5927\u7D047\u79D2\uFF09 \u56E0\u6B64\uFF0C\u4EE5\u9EDE\u9663\u5716\u683C\u5F0F\u5B58\u5132\u7684\u5F71\u7247\u7E3D\u5927\u5C0F\u70BA178 x 64,800\u4F4D\u5143\u7D44= 11,534,400\u4F4D\u5143\u7D44\u3002 MJPEG AVI\u6A94\u53EA\u67091,242,282\u4F4D\u5143\u7D44\uFF0C\u6216\u9EDE\u9663\u5716\u5927\u5C0F\u768410.7%\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C3A\u5BF8\u7684\u7E2E\u6E1B\u4F7F\u5F97MJPEG\u5F71\u7247\u6A94\u5C0D\u65BC\u5C0F\u6BB5\u5F71\u7247\u975E\u5E38\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C3A\u5BF8\u7684\u7E2E\u6E1B\u6703\u4F34\u96A8\u4E00\u4E9B\u58D3\u7E2E\u5931\u771F\u3002 \u9019\u4E9B\u5C0D\u65BC\u771F\u5BE6\u756B\u9762\u901A\u5E38\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\uFF0C\u4F46\u5C0D\u65BC\u9AD8\u5C0D\u6BD4\u5716\u5F62\u662F\u4E0D\u53EF\u63A5\u53D7\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u90E8\u5206STM32\u5FAE\u63A7\u5236\u5668\uFF08\u5982STM32F769\u6216STM32H750\uFF09\u652F\u63F4JPEG\u5716\u50CF\u7684\u786C\u9AD4\u52A0\u901F\u89E3\u78BC\u3002 \u9019\u52A0\u5FEB\u4E86JPEG\u89E3\u78BC\uFF0C\u4E26\u63D0\u9AD8\u4E86\u5F71\u7247\u7684\u53EF\u80FD\u7684\u756B\u9762\u64AD\u653E\u901F\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u5E40\u7684\u89E3\u78BC\u5F88\u5BB9\u6613\u4F54\u752816ms\u4EE5\u4E0A\u7684\u6642\u9593\uFF08\u53D6\u6C7A\u65BCMCU\u7684\u901F\u5EA6\u548C\u5F71\u7247\u89E3\u6790\u5EA6\uFF09\u3002 \u9019\u610F\u5473\u8457\u5728\u5927\u591A\u6578\u60C5\u6CC1\u4E0B\uFF0CMJPEG\u5F71\u7247\u7684\u89E3\u78BC\u901F\u7387\u4F4E\u65BC\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u6B63\u5E38\u756B\u9762\u64AD\u653E\u901F\u7387\u3002 \u5C0D\u65BC\u67D0\u4E9B\u61C9\u7528\uFF0C\u5C07\u6574\u9AD4\u756B\u9762\u64AD\u653E\u901F\u7387\u964D\u4F4E\u5230\u89E3\u78BC\u901F\u7387\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u3002 \u5C0D\u65BC\u5176\u4ED6\u61C9\u7528\uFF0C\u5373\u4F7F\u5F71\u7247\u4EE520 fps\u7684\u901F\u7387\u904B\u884C\uFF0C\u4E5F\u9700\u8981\u4FDD\u6301\u4F7F\u7528\u8005\u4ECB\u976260 fps\u7684\u5E40\u7387\u3002 \u6709\u4E00\u500B\u61C9\u7528\u53EF\u4F5C\u70BA\u7BC4\u4F8B\uFF1A\u5728\u5F71\u7247\u65C1\u908A\u6709\u4E00\u500B\u5177\u6709\u52D5\u756B\u6548\u679C\u7684\u9032\u5EA6\u5713\u74B0\u3002 60 fps\u7684\u52D5\u756B\u901F\u7387\u8B93\u9032\u5EA6\u5713\u74B0\u7684\u6548\u679C\u9054\u5230\u6700\u4F73\uFF0C\u5373\u4F7F\u5F71\u7247\u53EA\u986F\u793A20 fps\u5E40\u7387\u7684\u65B0\u5E40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u9762\u95DC\u65BCSTM32F746\u7684\u7BC4\u4F8B\u5728\u89E3\u78BC\u55AE\u500BJPEG\u5E40\u6642\u8017\u8CBB18-20 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-video-with-touchgfx"
  }), `\u901A\u904ETouchGFX\u4F7F\u7528\u5F71\u7247`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E86TouchGFX\uFF0C\u53EF\u4EE5\u8F15\u9B06\u5C07\u5F71\u7247\u8B8A\u70BA\u60A8\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u4E00\u90E8\u5206\u3002 \u9700\u8981\u4E09\u6A23\u6771\u897F\uFF1A\u4E00\u500B\u5F71\u7247\u5C0F\u5DE5\u5177\u3001\u4E00\u500B\u5F71\u7247\u63A7\u5236\u5668\u3001\u7576\u7136\u9084\u6709MJPEG\u5F71\u7247\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u5C0F\u5DE5\u5177\u5728\u4F7F\u7528\u8005\u4ECB\u9762\u4E2D\u4F7F\u7528\uFF0C\u8207\u6240\u6709\u5176\u4ED6\u5C0F\u5DE5\u5177\u4E00\u6A23\u3002 \u5F71\u7247\u63A7\u5236\u5668\u662F\u69CB\u6210\u5B8C\u6574TouchGFX\u74B0\u5883\uFF08HAL\u3001\u4F5C\u696D\u7CFB\u7D71\u3001\u9A45\u52D5\u7A0B\u5F0F\u7B49\uFF09\u7684\u5E95\u5C64\u8EDF\u9AD4\u7684\u4E00\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",
    mdxType: "Figure"
  }, "\u5F71\u7247\u5C0F\u5DE5\u5177\u548C\u5F71\u7247\u63A7\u5236\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u63A7\u5236\u5668\u7531\u63A7\u5236MJPEG\u6A94\u89E3\u78BC\u548C\u7DE9\u885D\u5340\u7BA1\u7406\u7684\u8EDF\u9AD4\u7D44\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u81EA\u52D5\u5C07\u5F71\u7247\u63A7\u5236\u5668\u5305\u542B\u5230\u6240\u6709\u6A21\u64EC\u5668\u5C08\u6848\u4E2D\u3002 \u9019\u6A23\u5C31\u53EF\u4EE5\u5728\u6A21\u64EC\u5668\u539F\u578B\u4E2D\u8F15\u9B06\u4F7F\u7528\u5F71\u7247\uFF1A\u53EA\u9700\u6DFB\u52A0\u4E00\u500B\u5F71\u7247\u5C0F\u5DE5\u5177\uFF0C\u9078\u64C7\u4E00\u500B\u5F71\u7247\u6A94\uFF0C\u7136\u5F8C\u6309\u4E0B \u201CRun Simulator\uFF08\u904B\u884C\u6A21\u64EC\u5668\uFF09\u201D\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u5728\u786C\u9AD4\u4E0A\u4F7F\u7528\u5F71\u7247\uFF0C\u9084\u9700\u76EE\u6A19\u5C08\u6848\uFF08IAR\u3001Keil\u3001arm-gcc\u3001CubeIDE\uFF09\u4E2D\u6709\u5F71\u7247\u63A7\u5236\u5668\u3002 \u9019\u5DF2\u7D93\u6DFB\u52A0\u5230\u4E00\u4E9BTouchGFX\u958B\u767C\u677F\u898F\u7BC4\u5305\uFF08\u898B\u4E0B\u9762\u7684\u5217\u8868\uFF09\uFF0C\u4F46\u60A8\u53EF\u4EE5\u901A\u904ETouchGFX Generator\u5411\u4EFB\u610F\u5C08\u6848\u6DFB\u52A0\u5F71\u7247\u652F\u63F4\u3002 \u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `TouchGFX Generator\u4F7F\u7528\u8005\u6307\u5357`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u60A8\u64C1\u6709\u652F\u63F4\u5F71\u7247\u7684\u5E73\u81FA\u6642\uFF0C\u53EF\u4EE5\u8F15\u9B06\u5728TouchGFX Designer\u4E2D\u6DFB\u52A0\u548C\u914D\u7F6E\u5F71\u7247\u5C0F\u5DE5\u5177\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\u6B64\u8655`), `\u8A73\u7D30\u4ECB\u7D39\u4E86\u5982\u4F55\u5728TouchGFX Designer\u4E2D\u4F7F\u7528\u5F71\u7247\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-files-in-a-touchgfx-project"
  }), `TouchGFX\u5C08\u6848\u4E2D\u7684\u5F71\u7247\u6A94`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5728TouchGFX Designer\u4E2D\u5305\u542B\u5F71\u7247\u6A94\u5F8C\uFF0C\u5B83\u5C07.avi\u6A94\u8907\u88FD\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/vidoes`), `\u8CC7\u6599\u593E\u3002 \u5728\u7A0B\u5F0F\u78BC\u751F\u6210\u671F\u9593\uFF0C\u5F71\u7247\u4EE5.bin\u6A94\u6848\u683C\u5F0F\u88AB\u8907\u88FD\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/bin`), `\uFF0C\u4EE5.o\u6A94\u6848\u683C\u5F0F\u88AB\u8907\u88FD\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/obj`), `\u3002 .o\u548C.bin\u6A94\u5305\u542B\u76F8\u540C\u7684\u8CC7\u6599\uFF0C\u4F46\u662F.O\u6A94\u662FELF\u683C\u5F0F\uFF08\u9019\u662F\u4E00\u4E9B\u7DE8\u8B6F\u5668\u548CIDE\u7684\u9996\u9078\u683C\u5F0F\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u751F\u6210\u7A0B\u5F0F\u78BC\u6642\u57F7\u884C\u7684\u5C08\u6848\u66F4\u65B0\u7A0B\u5F0F\u5C07\u5F71\u7247\u6A94\u5305\u542B\u5728\u76EE\u6A19\u5C08\u6848\u4E2D\u3002 \u9019\u610F\u5473\u8457\u5F71\u7247\u6A94\u88AB\u9023\u7D50\u5230\u53EF\u57F7\u884C\u6A94\u4E2D\uFF0C\u4E26\u4E14\u5728\u61C9\u7528\u7A0B\u5F0F\u4E2D\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u7A0B\u5F0F\u8A2D\u8A08\u5668\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u5F71\u7247\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u8CC7\u6599\u593E\u3002 \u9019\u4E9B\u4E5F\u5C07\u5305\u62EC\u5728\u5C08\u6848\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/include/videos/VideoDatabase.hpp`), `\u5305\u542B\u8207\u7DE8\u8B6F\u5230\u61C9\u7528\u7A0B\u5F0F\u4E2D\u7684\u5F71\u7247\u6709\u95DC\u7684\u7B26\u865F\u6027\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_SampleVideo1_240x135_bin_start;
#else
extern const uint8_t video_SampleVideo1_240x135_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u4E2D\u901A\u904E\u9019\u4E9B\u5BA3\u544A\u5C07\u5F71\u7247\u5206\u914D\u7D66\u5F71\u7247\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-video-files-from-user-code"
  }), `\u5F9E\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u4F7F\u7528\u5F71\u7247\u6A94`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E00\u4E9B\u5C08\u6848\u4E2D\uFF0C\u50C5\u5F9ETouchGFX Designer\u4E2D\u9078\u64C7\u4E00\u500B\u5F71\u7247\u662F\u4E0D\u5920\u7684\u3002 \u4F8B\u5982\uFF0C \u60A8\u60F3\u5728\u555F\u52D5\u6642\u9078\u64C7\u4E0D\u540C\u7684\u5F71\u7247\u3002 \u9996\u5148\uFF0C\u5FC5\u9808\u6DFB\u52A0\u5F71\u7247\u6A94\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u5F71\u7247\u5230assets/videos"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u751F\u6210\u7A0B\u5F0F\u78BC\uFF08\u6216\u904B\u884Cmake assets\uFF09\u6642\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u8CC7\u6599\u593E\u4E2D\u7684\u5F71\u7247\u6A94\u5C07\u5305\u542B\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `VideoDatabase.hpp`), `\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_myVideo_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_myVideo_bin_start;
#else
extern const uint8_t video_myVideo_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u73FE\u5728\u53EF\u4EE5\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u9019\u4E9B\u5BA3\u544A\uFF0C\u8B93\u5F71\u7247\u5C0F\u5DE5\u5177\u64AD\u653E\u6211\u5011\u7684\u96FB\u5F71\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF01\u5F71\u7247\u8CC7\u6599\u73FE\u5728\u9023\u7D50\u5230\u61C9\u7528\u7A0B\u5F0F\u4E2D\u3002 \u53EF\u4EE5\u907F\u514D\u9019\u7A2E\u60C5\u6CC1\uFF0C\u65B9\u6CD5\u662F\u4E0D\u5C07\u4EFB\u4F55\u5F71\u7247\u653E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u4E2D\uFF0C\u4E14\u624B\u52D5\u5C07\u5F71\u7247\u71D2\u9304\u5230\u5916\u90E8flash\u5B58\u5132\u7684\u5C08\u7528\u5340\u57DF\u3002 \u7136\u5F8C\u4F7F\u7528flash\u4F4D\u5740\u50B3\u905E\u4F4D\u5740\u548C\u9577\u5EA6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u652F\u63F4\u5F71\u7247\u529F\u80FD\u7684\u958B\u767C\u5957\u4EF6\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u4E2D\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u5305\u9ED8\u8A8D\u70BA\u9019\u4E9B\u958B\u767C\u5957\u4EF6\u555F\u7528\u4E86\u5F71\u7247\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769Discovery\uFF08\u786C\u9AD4\u52A0\u901F\u89E3\u78BC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32H750BDiscovery\uFF08\u786C\u9AD4\u52A0\u901F\u89E3\u78BC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746Discovery\uFF08\u57FA\u65BC\u8EDF\u9AD4\u7684\u89E3\u78BC\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528\u5176\u4ED6\u958B\u767C\u5957\u4EF6\u6216\u5BA2\u88FD\u786C\u9AD4\uFF0C\u8ACB\u8A18\u4F4F\u5728TouchGFX Generator\u4E2D\u555F\u7528\u5F71\u7247\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "creating-mjpeg-avi-files"
  }), `\u5275\u5EFAMJPEG AVI\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u591A\u6578\u5F71\u7247\u4E0D\u4EE5MJPEG AVI\u6A94\u6848\u683C\u5F0F\u5B58\u5132\uFF0C\u56E0\u70BA\u9019\u4E0D\u662F\u5E38\u898B\u7684\u5F71\u7247\u683C\u5F0F\u3002 \u56E0\u6B64\uFF0C\u5728TouchGFX\u5C08\u6848\u4E2D\u4F7F\u7528\u5F71\u7247\u6A94\u4E4B\u524D\uFF0C\u901A\u5E38\u9700\u8981\u5C07\u5176\u8F49\u63DB\u70BAMJPEG\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5B8C\u6210\u8F49\u63DB\uFF0C\u4F8B\u5982\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/FFmpeg"
  }), `FFMPEG`), `\u3002 \u9084\u63D0\u4F9B\u5176\u4ED6\u61C9\u7528\u548C\u7DDA\u4E0A\u670D\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-ffmpeg"
  }), `\u4F7F\u7528FFMPEG`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.gyan.dev/ffmpeg/builds/"
  }), `\u6B64\u8655`), `\u53EF\u4EE5\u627E\u5230\u7528\u65BCFFMPEG\u7684Windows\u4E8C\u9032\u4F4D\u6A94\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u5C07\u5F71\u7247\u6A94input.mov\u8F49\u63DB\u70BAMJPEG\u683C\u5F0F\uFF0C\u53EF\u4F7F\u7528\u8A72\u6307\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u5F71\u7247\u5728output.avi\u6587\u4EF6\u4E2D\u3002 \u8A72\u6A94\u53EF\u4EE5\u8907\u88FD\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u5F71\u7247\u80FD\u4FDD\u6301\u6B63\u78BA\u7684\u9577\u5BEC\u6BD4\uFF0C\u53EF\u4EE5\u4EE5\u50CF\u7D20\u70BA\u55AE\u4F4D\u6307\u5B9A\u5BEC\u5EA6\uFF08\u9019\u88E1\u662F480\uFF09\uFF0C\u9AD8\u5EA6\u201C-1\u201D\uFF08-1\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u526A\u5207\u5F71\u7247\uFF1A\u4F7F\u7528-ss\u6307\u5B9A\u958B\u59CB\u6642\u9593\uFF0C\u4F7F\u7528-t\u6216-to\u6307\u5B9A\u6301\u7E8C\u6642\u9593\u6216\u505C\u6B62\u6642\u9593\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6216\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u9078\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAA\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u8F38\u51FA\u5F71\u7247\u89E3\u6790\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-qscale`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u54C1\u8CEA\u7B49\u7D1A\u7BC4\u570D1 - 31\uFF08\u5F9E\u512A\u5230\u5DEE\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-an`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53BB\u9664\u97F3\u8A0A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-vf`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A2D\u7F6Efilter graph`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-ss`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u958B\u59CB\u6642\u9593\uFF08\u4EE5\u79D2\u70BA\u55AE\u4F4D\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-t`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6301\u7E8C\u6642\u9593`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-to`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u505C\u6B62\u6642\u9593\uFF08\u4EE5\u79D2\u70BA\u55AE\u4F4D\uFF09`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "decoding-strategies"
  }), `\u89E3\u78BC\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u6240\u8FF0\uFF0CTouchGFX\u9700\u8981\u5C07\u55AE\u7368\u7684MJPEG\u5E40\u5F9EJPEG\u8F49\u63DB\u70BARGB\uFF0C\u7136\u5F8C\u624D\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u986F\u793A\u3002 \u9019\u7A2E\u89E3\u78BC\u53EF\u4EE5\u5728\u9700\u8981\u6642\u5373\u6642\u5B8C\u6210\uFF0C\u4E5F\u53EF\u4EE5\u975E\u540C\u6B65\u5B8C\u6210 - \u63D0\u524D\u5C07\u4E0B\u4E00\u5E40\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u540C\u6B65\u89E3\u78BC\u662F\u7531\u7B2C\u4E8C\u500B\u4EFB\u52D9\uFF08\u800C\u4E0D\u662FUI\u4EFB\u52D9\uFF09\u5B8C\u6210\u7684\u3002 \u9019\u610F\u5473\u8457\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u89E3\u78BC\u53EF\u4EE5\u8207UI\u4EFB\u52D9\u7684\u7E6A\u88FD\u4E26\u884C\u9032\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u67093\u7A2E\u7B56\u7565\uFF0C\u6BCF\u7A2E\u7B56\u7565\u90FD\u6709\u512A\u9EDE\u548C\u7F3A\u9EDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAA\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u9700\u8981\u6642\uFF0C\u5C07\u7576\u524D\u5F71\u7247\u5E40\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C08\u7528\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C07\u4E0B\u4E00\u500B\u5F71\u7247\u5E40\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u5F9E\u5F71\u7247\u7DE9\u885D\u5340\u8907\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u96D9\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C07\u4E0B\u4E00\u500B\u5F71\u7247\u5E40\u89E3\u78BC\u5230\u7B2C\u4E8C\u5F71\u7247\u7DE9\u885D\u5340\u3002 \u89E3\u78BC\u5B8C\u6210\u5F8C\uFF0C\u4EA4\u63DB\u5F71\u7247\u7DE9\u885D\u5340`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\u7E3D\u662F\u70BA\u6A21\u64EC\u5668\u5C08\u6848\u9078\u64C7\u201C\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u201D\u7B56\u7565\u3002 \u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator`), `\u4E2D\u914D\u7F6E\u5C0D\u76EE\u6A19\u4F7F\u7528\u4EC0\u9EBC\u6A23\u7684\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u6587\u5C07\u8A73\u7D30\u8B1B\u89E3\u9019\u4E9B\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "direct-to-frame-buffer"
  }), `\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u201D\u7B56\u7565\u5728TouchGFX\u5F15\u64CE\u7684\u6E32\u67D3\u968E\u6BB5\u89E3\u78BCJPEG\u5E40\uFF08\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#render"
  }), `\u2018\u6E32\u67D3\u2019`), `\u7AE0\u7BC0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",
    mdxType: "Figure"
  }, "\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u66F4\u65B0\u968E\u6BB5\uFF08\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#update"
  }), `\u2018\u66F4\u65B0\u2019`), `\u7AE0\u7BC0\uFF09\uFF0C\u5F71\u7247\u5C0F\u5DE5\u5177\u6C7A\u5B9A\u662F\u5426\u61C9\u8A72\u5C07\u96FB\u5F71\u63D0\u524D\u5230\u4E0B\u4E00\u5E40\u3002 \u5728\u63A5\u4E0B\u4F86\u7684\u6E32\u67D3\u968E\u6BB5\uFF0CJPEG\u5E40\u88AB\u9010\u884C\u89E3\u78BC\u5230\u4E00\u500B\u201C\u884C\u7DE9\u885D\u5340\u201D\u3002 \u7136\u5F8C\u5C0D\u50CF\u7D20\u9032\u884C\u8F49\u63DB\u4EE5\u5339\u914D\u5E40\u7DE9\u5B58\u5340\u683C\u5F0F\uFF0C\u4E26\u8907\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5F71\u7247\u5C0F\u5DE5\u5177\u88AB\u5176\u4ED6\u5C0F\u5DE5\u5177\u8986\u84CB\uFF0C\u5B83\u6703\u88AB\u91CD\u7E6A\u6210\u591A\u500B\u584A\uFF08\u53EF\u898B\u90E8\u5206\u88AB\u5206\u5272\u6210\u77E9\u5F62\uFF09\u3002 \u7E6A\u88FD\u6BCF\u4E00\u500B\u9019\u6A23\u7684\u584A\u9700\u8981\u53CD\u5FA9\u9032\u884C\u89E3\u58D3\u7E2E\u5DE5\u4F5C\u3002 \u9019\u4F7F\u5F97\u8A72\u7B56\u7565\u4E0D\u9069\u5408\u4F7F\u7528\u8005\u4ECB\u9762\uFF0C\u56E0\u70BA\u96A8\u8457\u89E3\u78BC\u6642\u9593\u7684\u589E\u52A0\uFF0C\u90A3\u88E1\u7684\u5176\u4ED6UI\u5143\u7D20\uFF08\u5982\u6309\u9215\uFF09\u6703\u88AB\u7F6E\u65BC\u5F71\u7247\u7684\u9802\u90E8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u89E3\u6C7A\u65B9\u6848\u7684\u512A\u9EDE\u662F\u53EA\u4F7F\u7528\u4E86\u5F88\u5C11\u984D\u5916\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dedicated-buffer"
  }), `\u5C08\u7528\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C08\u7528\u6216\u55AE\u7DE9\u885D\u5340\u89E3\u78BC\u7B56\u7565\u9996\u5148\u5C07JPEG\u5E40\u89E3\u78BC\u5230\u5C08\u7528RGB\u7DE9\u885D\u5340\uFF0C\u7136\u5F8C\u518D\u5F9E\u8A72\u7DE9\u885D\u5340\u8907\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",
    mdxType: "Figure"
  }, "\u89E3\u78BC\u5230\u55AE\u7368\u7684\u7DE9\u885D\u5340"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8207\u76F4\u63A5\u7B56\u7565\u76F8\u53CD\uFF0C\u73FE\u5728\u89E3\u78BC\u5DE5\u4F5C\u5728\u4E00\u500B\u55AE\u7368\u4EFB\u52D9\uFF08\u800C\u4E0D\u662F\u901A\u5E38\u7684TouchGFX\u4EFB\u52D9\uFF09\u4E2D\u904B\u884C\u3002 \u5F71\u7247\u5C0F\u5DE5\u5177\u8A08\u7B97\u4E00\u500B\u65B0\u7684\u96FB\u5F71\u5E40\u662F\u5426\u61C9\u8A72\u5728\u4E0B\u4E00\u500B\u4F7F\u7528\u8005\u4ECB\u9762tick\u4E2D\u986F\u793A\uFF0C\u4E26\u901A\u904E\u4FE1\u865F\u544A\u77E5\u89E3\u78BC\u4EFB\u52D9\u958B\u59CB\u89E3\u78BC\u4E0B\u4E00\u5E40\u3002 \u5728\u89E3\u78BC\u904E\u7A0B\u4E2D\uFF0C\u5F71\u7247\u7DE9\u885D\u5340\u4E0D\u80FD\u88AB\u7E6A\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u5340\uFF08\u5B83\u88AB\u90E8\u5206\u66F4\u65B0\uFF09\u3002 \u7576\u89E3\u78BC\u4EFB\u52D9\u6B63\u5728\u904B\u884C\u6642\uFF0C\u4F7F\u7528\u8005\u4ECB\u9762\u4E0D\u5F97\u91CD\u7E6A\u5F71\u7247\u5C0F\u5DE5\u5177\u3002 \u7E6A\u88FD\u5B8C\u6210\u5F8C\uFF0C\u5B83\u5C07\u7E7C\u7E8C\u3002 \u5982\u679C\u4F7F\u7528\u8005\u4ECB\u9762\u4E0D\u9700\u8981\u91CD\u7E6A\u5F71\u7247\uFF0C\u5247\u4F7F\u7528\u8005\u4ECB\u9762\u53EF\u4EE5\u7167\u5E38\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u5F71\u7247\u88AB\u5B8C\u5168\u89E3\u78BC\u5F8C\uFF0C\u5C07\u5F71\u7247\u6E32\u67D3\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u6210\u672C\u8207\u7E6A\u88FD\u9EDE\u9663\u5716\u7684\u6210\u672C\uFF08\u4F4E\uFF09\u76F8\u540C\u3002 \u901A\u904E\u8A72\u7B56\u7565\uFF0C\u5728\u5F71\u7247\u4E0A\u653E\u7F6E\u6309\u9215\u6216\u6587\u5B57\u4E0D\u6210\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u7B56\u7565\u7684\u7F3A\u9EDE\u662F\u4EFB\u52D9\u548C\u5F71\u7247\u7DE9\u885D\u5340\u4F54\u7528\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "double-buffer"
  }), `\u96D9\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u96D9\u7DE9\u885D\u5340\u89E3\u78BC\u7B56\u7565\u4F7F\u7528\u5169\u500BRGB\u7DE9\u885D\u5340\u3002 \u89E3\u78BC\u5728\u9019\u5169\u500B\u7DE9\u885D\u5340\u4E2D\u5B8C\u6210\uFF0C\u800C\u6E32\u67D3\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u5247\u767C\u751F\u65BC\u53E6\u4E00\u500BRGB\u7DE9\u885D\u5340\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",
    mdxType: "Figure"
  }, "\u89E3\u78BC\u5230\u5169\u500B\u5F71\u7247\u7DE9\u885D\u5340"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u4E00\u500B\u5E40\u88AB\u89E3\u78BC\u5F8C\uFF0C\u89E3\u78BC\u4EFB\u52D9\u7B49\u5F85UI\u986F\u793A\u8A72\u5F71\u7247\u7DE9\u885D\u5340\u4E26\u91CB\u653E\u524D\u4E00\u500B\u7DE9\u885D\u5340\u3002 \u4E00\u65E6\u4F7F\u7528\u8005\u4ECB\u9762\u6539\u8B8A\u4E86\u7DE9\u885D\u5340\uFF0C\u5C31\u53EF\u4EE5\u958B\u59CB\u89E3\u78BC\u4E0B\u4E00\u5E40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u7B56\u7565\u7684\u4E00\u500B\u660E\u986F\u7F3A\u9EDE\u662F\u8A18\u61B6\u9AD4\u4F7F\u7528\u662F\u524D\u4E00\u7A2E\u7B56\u7565\u7684\u5169\u500D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-frame-rate-and-user-interface-frame-rate"
  }), `\u5F71\u7247\u756B\u9762\u64AD\u653E\u901F\u7387\u548C\u4F7F\u7528\u8005\u4ECB\u9762\u756B\u9762\u64AD\u653E\u901F\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u7684\u89E3\u78BC\u7B56\u7565\u5C0D\u4F7F\u7528\u8005\u4ECB\u9762\u756B\u9762\u64AD\u653E\u901F\u7387\u7684\u5F71\u97FF\u4E5F\u4E0D\u540C\u3002 \u4F7F\u7528\u8005\u4ECB\u9762\u756B\u9762\u64AD\u653E\u901F\u7387\u662F\u6BCF\u79D2\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u7522\u751F\u7684\uFF08\u4E0D\u540C\uFF09\u5E40\u6578\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u63A1\u7528\u201C\u76F4\u63A5\u89E3\u78BC\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u201D\u7B56\u7565\uFF0C\u5F71\u7247\u89E3\u78BC\u901F\u5EA6\u5BB9\u6613\u5F71\u97FF\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u6709\u6548\u756B\u9762\u64AD\u653E\u901F\u7387\u3002 \u5047\u8A2D\u89E3\u78BC\u4E00\u500BJPEG\u5E40\u9700\u898128 ms\uFF0C\u4E26\u4E14\u6211\u5011\u5E0C\u671B\u6BCF\u79D2\u986F\u793A20\u5E40\u5F71\u7247\uFF0820 fps\uFF09\u3002 \u9019\u662F\u6BD4\u8F03\u5BE6\u969B\u7684\uFF0C\u56E0\u70BA\u7E3D\u89E3\u78BC\u6642\u9593\u662F: 28 ms x 20/s = 560 ms/s\u3002  20 fps\u5C0D\u61C9\u65BC\u6BCF3\u5E40\uFF0860 fps\uFF09\u6709\u4E00\u500B\u65B0\u5F71\u7247\u5E40\u3002 \u6240\u4EE5\u5728\u6BCF\u4E09\u500BUI\u5E40\u4E2D\uFF0C\u6211\u5011\u9700\u8981\u4E00\u500B\u65B0\u7684\u5F71\u7247\u5E40\uFF0C\u4F46\u662F\u7531\u65BC\u89E3\u78BC\u6642\u9593\u662F\u6E32\u67D3\u968E\u6BB5\u7684\u4E00\u90E8\u5206\uFF0C\u6E32\u67D3\u4E00\u5E40\u9700\u898128 ms\uFF0C\u52A0\u4E0A\u6E32\u67D3\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u5176\u4ED6\u90E8\u5206\u9700\u8981\uFF08\u6BD4\u5982\uFF092 ms\u3002 \u7E3D\u7684\u5E40\u6E32\u67D3\u6642\u9593\u662F30 ms\uFF0C\u6211\u5011\u5931\u53BB\u4E86\u4E00\u500Btick\uFF0C\u4F46\u6211\u5011\u6E96\u5099\u70BA\u4E0B\u4E00\u500Btick\u751F\u6210\u4E00\u500B\u65B0\u5E40\u3002 \u5728\u4E0B\u4E00\u5E40\u4E2D\uFF0C\u6211\u5011\u6C92\u6709\u89E3\u78BC\u5F71\u7247\uFF0C\u6240\u4EE5\u6E32\u67D3\u6642\u9593\u4F4E\u65BC16 ms\uFF0C\u7B26\u5408\u9650\u5236\u8981\u6C42\u3002 \u7136\u5F8C\uFF0C\u6211\u5011\u53EF\u4EE5\u5728\u7B2C\u56DB\u500Btick\u4E2D\u958B\u59CB\u89E3\u78BC\u7B2C\u4E8C\u500B\u5F71\u7247\u5E40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.png",
    mdxType: "Figure"
  }, "20 fps\u5F71\u7247"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5F71\u7247\u756B\u9762\u64AD\u653E\u901F\u7387\u662F20 fps\uFF0C\u4F7F\u7528\u8005\u4ECB\u9762\u756B\u9762\u64AD\u653E\u901F\u7387\u662F40 fps\uFF08\u5171\u8A0860 fps\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7D50\u679C\u662F\u6211\u5011\u4E0D\u80FD\u8B93UI\u7684\u5176\u4ED6\u5143\u7D20\u5177\u670960 fps\u7684\u52D5\u756B\u6548\u679C\uFF0C\u56E0\u70BA\u5F71\u7247\u89E3\u78BC\u9650\u5236\u4E86\u756B\u9762\u64AD\u653E\u901F\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u63A1\u7528\u201C\u96D9\u7DE9\u885D\u5340\u201D\u7B56\u7565\uFF0C\u9019\u7A2E\u554F\u984C\u5F97\u5230\u7DE9\u89E3\u3002 \u4F7F\u7528\u8005\u4ECB\u9762\u7E3D\u662F\u6709\u4E00\u500B\u53EF\u7528\u7684\u5F71\u7247\u7DE9\u885D\u5340\u7528\u65BC\u6700\u65B0\u7684\u5E40\u3002 \u89E3\u78BC\u4EFB\u52D9\u53EF\u4EE5\u5C07\u8A72\u7DE9\u885D\u5340\u8207\u53E6\u4E00\u500B\u7DE9\u885D\u5340\uFF08\u5305\u542B\u4E0B\u4E00\u5E40\uFF09\u4EA4\u63DB\uFF08\u7576\u5B83\u53EF\u7528\u6642\uFF09\uFF0C\u800C\u6E32\u67D3\u57F7\u884C\u7DD2\u6C92\u6709\u4E3B\u52D5\u7E6A\u88FD\u3002 \u4EA4\u63DB\u4E4B\u5F8C\uFF0C\u89E3\u78BC\u4EFB\u52D9\u53EF\u4EE5\u7ACB\u5373\u958B\u59CB\u89E3\u78BC\u4E0B\u4E00\u5E40\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.png",
    mdxType: "Figure"
  }, "20 fps\u5F71\u7247"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728UI\u5E401\u548CUI\u5E402\u4E2D\uFF0CUI\u986F\u793A\u7684\u662F\u7B2C\u4E00\u500B\u89E3\u78BC\u7684\u5F71\u7247\u5E40\u3002 \u540C\u6642\uFF0C\u89E3\u78BC\u5668\u5728\u751F\u6210\u5E402\u3002 \u5728UI\u5E403\u4E2D\uFF0C\u8A72\u5E40\u5DF2\u7D93\u6E96\u5099\u5C31\u7DD2\u4E26\u5C07\u88AB\u4F7F\u7528\u3002 \u89E3\u78BC\u5668\u8655\u65BC\u7A7A\u9592\u72C0\u614B\uFF0C\u53EF\u4EE5\u958B\u59CB\u89E3\u78BC\u4E0B\u4E00\u5E40\uFF08\u5716\u4E2D\u6C92\u6709\u986F\u793A\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5373\u4F7F\u5F71\u7247\u89E3\u78BC\u53EA\u80FD\u6BCF2\u500Bticks\u4E2D\u751F\u6210\u4E00\u500B\u65B0\u5E40\uFF0C\u4E5F\u53EF\u4EE5\u5728\u6BCF\u5E40\u4E2D\u66F4\u65B0\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u5176\u4ED6\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "related-articles"
  }), `\u76F8\u95DC\u6587\u7AE0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As mentioned above the video support for target project is configured in the TouchGFX Generator. See the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator User Guide`), ` for instructions.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u7247\u5C0F\u5DE5\u5177\u5728TouchGFX Designer\u4E2D\u53EF\u7528\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\u6B64\u8655`), `\u8A73\u7D30\u4ECB\u7D39\u4E86\u5982\u4F55\u5728TouchGFX\u8A2D\u8A08\u5668\u4E2D\u4F7F\u7528\u5F71\u7247\u5C0F\u5DE5\u5177\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);