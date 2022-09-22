"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2825],{

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

/***/ 38419:
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
  title: "MJPEG\u89C6\u9891"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/video",
  "id": "development/ui-development/touchgfx-engine-features/video",
  "title": "MJPEG\u89C6\u9891",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/video.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/video",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/video",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "video",
    "title": "MJPEG\u89C6\u9891"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8BED\u8A00\u548C\u5B57\u7B26",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  },
  "next": {
    "title": "UI Components",
    "permalink": "/4.20/zh-CN/docs/category/ui-components"
  }
};
const assets = {};



const toc = [{
  value: "MJPEG\u89C6\u9891",
  id: "mjpeg-video",
  level: 2
}, {
  value: "\u901A\u8FC7TouchGFX\u4F7F\u7528\u89C6\u9891",
  id: "using-video-with-touchgfx",
  level: 2
}, {
  value: "TouchGFX\u9879\u76EE\u4E2D\u7684\u89C6\u9891\u6587\u4EF6",
  id: "video-files-in-a-touchgfx-project",
  level: 3
}, {
  value: "\u4ECE\u7528\u6237\u4EE3\u7801\u4F7F\u7528\u89C6\u9891\u6587\u4EF6",
  id: "using-video-files-from-user-code",
  level: 3
}, {
  value: "\u652F\u6301\u89C6\u9891\u529F\u80FD\u7684\u5F00\u53D1\u5957\u4EF6\u5217\u8868",
  id: "list-of-video-enabled-development-kits",
  level: 2
}, {
  value: "\u521B\u5EFAMJPEG AVI\u6587\u4EF6",
  id: "creating-mjpeg-avi-files",
  level: 2
}, {
  value: "\u4F7F\u7528FFMPEG",
  id: "using-ffmpeg",
  level: 3
}, {
  value: "\u89E3\u7801\u7B56\u7565",
  id: "decoding-strategies",
  level: 2
}, {
  value: "\u76F4\u63A5\u89E3\u7801\u5E27\u5230\u7F13\u51B2\u533A",
  id: "direct-to-frame-buffer",
  level: 3
}, {
  value: "\u4E13\u7528\u7F13\u51B2\u533A",
  id: "dedicated-buffer",
  level: 3
}, {
  value: "\u53CC\u7F13\u51B2\u533A",
  id: "double-buffer",
  level: 3
}, {
  value: "\u89C6\u9891\u5E27\u901F\u7387\u548C\u7528\u6237\u754C\u9762\u5E27\u901F\u7387",
  id: "video-frame-rate-and-user-interface-frame-rate",
  level: 3
}, {
  value: "\u76F8\u5173\u6587\u7AE0",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECE4.18\u7248\u672C\u5F00\u59CB\uFF0CTouchGFX\u652F\u6301\u4F7F\u7528MJPEG\u89C6\u9891\u3002 \u89C6\u9891\u53EF\u4EE5\u7528\u4E8E\u521B\u5EFA\u66F4\u751F\u52A8\u7684\u7528\u6237\u754C\u9762\u6216\u663E\u793A\u7B80\u77ED\u8BF4\u660E\u6216\u7528\u6237\u6307\u5357\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u9891\u901A\u8FC7\u201C\u89C6\u9891\uFF08Video\uFF09\u201D\u63A7\u4EF6\u5305\u542B\u5728\u7528\u6237\u754C\u9762\u4E2D\u3002 \u8BE5\u63A7\u4EF6\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u53EF\u7528\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4EFB\u610F\u5176\u4ED6\u63A7\u4EF6\u6DFB\u52A0\u5230\u7528\u6237\u754C\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "60%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",
    mdxType: "Figure"
  }, "\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u4F7F\u7528\u201C\u89C6\u9891\uFF08Video\uFF09\u201D\u63A7\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32\u5FAE\u63A7\u5236\u5668\u4E0A\u89E3\u7801\u89C6\u9891\u9700\u8981\u989D\u5916\u7684\u652F\u6301\u8F6F\u4EF6\u5305\u3002 \u8BE5\u8F6F\u4EF6\u901A\u8FC7\u5728TouchGFX Generator\u4E2D\u542F\u7528\u89C6\u9891\u652F\u6301\uFF0C\u4ECE\u800C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5305\u542B\u5728\u9879\u76EE\u4E2D\u3002 \u5728\u5DF2\u4F7F\u80FDvideo\u529F\u80FD\u7684TouchGFX\u5DE5\u7A0B\u5F00\u53D1\u677F\u4E0A\uFF08\u89C1\u4E0B\u9762\u7684\u5217\u8868\uFF09\uFF0C\u53EF\u4EE5\u8F7B\u677E\u8FD0\u884C\u89C6\u9891\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u65B9\u6CD5`), `\u662F\u50CF\u5E73\u5E38\u4E00\u6837\u6309\u4E0B\u201C\u8FD0\u884C\u76EE\u6807\uFF08F6\uFF09\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",
    mdxType: "Figure"
  }, "\u901A\u8FC7STM32F746Discovery\u4F7F\u7528\u201C\u89C6\u9891\uFF08Video\uFF09\u201D\u63A7\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4F60\u7684\u76EE\u6807\u4EE3\u7801\u4E2D\u6CA1\u6709\u89C6\u9891\u652F\u6301\uFF0C\u4F1A\u5F97\u5230\u7F16\u8BD1\u6216\u94FE\u63A5\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mjpeg-video"
  }), `MJPEG\u89C6\u9891`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u89C6\u9891\u7531\u6253\u5305\u5728\u5BB9\u5668\u6587\u4EF6(.avi)\u4E2D\u7684\u5927\u91CFJPEG\u56FE\u50CF\uFF08\u5E27\uFF09\u7EC4\u6210\u3002 \u538B\u7F29\u540E\u7684JPEG\u5E27\u4E0D\u80FD\u76F4\u63A5\u590D\u5236\u5230\u5E27\u7F13\u5B58\u533A\u3002 \u6BCF\u4E00\u5E27\u5FC5\u987B\u88AB\u89E3\u538B\u4E3ARGB\u683C\u5F0F\uFF0816\u621624\u4F4D\uFF09\uFF0C\u7136\u540E\u624D\u80FD\u5728\u663E\u793A\u5668\u4E0A\u663E\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E\u4F7F\u7528RGB\u4F4D\u56FE\u76F8\u6BD4\uFF0C\u8FD9\u79CD\u89E3\u538B\u7F29\u65B9\u5F0F\u7684\u8BA1\u7B97\u6210\u672C\u8F83\u9AD8\uFF0C\u5E76\u4E14\u5927\u5927\u964D\u4F4E\u4E86\u6027\u80FD\uFF08\u5373\u6BCF\u79D2\u5E27\u6570\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u538B\u7F29\u7684\u4F18\u70B9\u662F\u5927\u5927\u51CF\u5C11\u4E86\u6570\u636E\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u9762\u622A\u56FE\u4E2D\u4F7F\u7528\u7684\u89C6\u9891\u50CF\u7D20\u4E3A240 x 135\u3002 \u8FD9\u610F\u5473\u7740\u6BCF\u4E2A16\u4F4DRGB\u683C\u5F0F\u7684\u5E27\u5C06\u5360\u7528240 x 135 x 2\u5B57\u8282= 64,800\u5B57\u8282\u3002 \u8BE5\u89C6\u9891\u542B\u6709178\u5E27\uFF08\u65F6\u957F\u5927\u7EA67\u79D2\uFF09 \u56E0\u6B64\uFF0C\u4EE5\u4F4D\u56FE\u683C\u5F0F\u5B58\u50A8\u7684\u89C6\u9891\u603B\u5927\u5C0F\u4E3A178 x 64,800\u5B57\u8282= 11,534,400\u5B57\u8282\u3002 MJPEG AVI\u6587\u4EF6\u53EA\u67091,242,282\u5B57\u8282\uFF0C\u4E3A\u4F4D\u56FE\u5927\u5C0F\u768410.7%\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C3A\u5BF8\u7684\u7F29\u51CF\u4F7F\u5F97MJPEG\u89C6\u9891\u6587\u4EF6\u5BF9\u4E8E\u5C0F\u6BB5\u89C6\u9891\u975E\u5E38\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C3A\u5BF8\u7684\u7F29\u51CF\u4F1A\u4F34\u968F\u4E00\u4E9B\u538B\u7F29\u4F2A\u5F71\uFF08\u5DEE\u9519\uFF09\u3002 \u8FD9\u4E9B\u5BF9\u4E8E\u771F\u5B9E\u753B\u9762\u901A\u5E38\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\uFF0C\u4F46\u5BF9\u4E8E\u9AD8\u5BF9\u6BD4\u5EA6\u56FE\u5F62\u662F\u4E0D\u53EF\u63A5\u53D7\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u90E8\u5206STM32\u5FAE\u63A7\u5236\u5668\uFF08\u5982STM32F769\u6216STM32H750\uFF09\u652F\u6301JPEG\u56FE\u50CF\u7684\u786C\u4EF6\u52A0\u901F\u89E3\u7801\u3002 \u8FD9\u52A0\u5FEB\u4E86JPEG\u89E3\u7801\uFF0C\u5E76\u63D0\u9AD8\u4E86\u89C6\u9891\u7684\u53EF\u80FD\u5E27\u901F\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG\u5E27\u7684\u89E3\u7801\u5F88\u5BB9\u6613\u5360\u752816ms\u4EE5\u4E0A\u7684\u65F6\u95F4\uFF08\u53D6\u51B3\u4E8EMCU\u7684\u901F\u5EA6\u548C\u89C6\u9891\u5206\u8FA8\u7387\uFF09\u3002 \u8FD9\u610F\u5473\u7740\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0CMJPEG\u89C6\u9891\u7684\u89E3\u7801\u901F\u7387\u4F4E\u4E8E\u7528\u6237\u754C\u9762\u7684\u6B63\u5E38\u5E27\u901F\u7387\u3002 \u5BF9\u4E8E\u67D0\u4E9B\u5E94\u7528\uFF0C\u5C06\u6574\u4F53\u5E27\u901F\u7387\u964D\u4F4E\u5230\u89E3\u7801\u901F\u7387\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u3002 \u5BF9\u4E8E\u5176\u4ED6\u5E94\u7528\uFF0C\u5373\u4F7F\u89C6\u9891\u4EE520 fps\u7684\u901F\u7387\u8FD0\u884C\uFF0C\u4E5F\u9700\u8981\u4FDD\u6301\u7528\u6237\u754C\u976260 fps\u7684\u5E27\u7387\u3002 \u6709\u4E00\u4E2A\u5E94\u7528\u53EF\u4F5C\u4E3A\u793A\u4F8B\uFF1A\u5728\u89C6\u9891\u65C1\u8FB9\u6709\u4E00\u4E2A\u5177\u6709\u52A8\u753B\u6548\u679C\u7684\u8FDB\u5EA6\u5706\u73AF\u3002 60 fps\u7684\u52A8\u753B\u901F\u7387\u8BA9\u8FDB\u5EA6\u5706\u73AF\u7684\u6548\u679C\u8FBE\u5230\u6700\u4F73\uFF0C\u5373\u4F7F\u89C6\u9891\u53EA\u663E\u793A20 fps\u5E27\u7387\u7684\u65B0\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u9762\u5173\u4E8ESTM32F746\u7684\u793A\u4F8B\u5728\u89E3\u7801\u5355\u4E2AJPEG\u5E27\u65F6\u8017\u8D3918-20 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-video-with-touchgfx"
  }), `\u901A\u8FC7TouchGFX\u4F7F\u7528\u89C6\u9891`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E86TouchGFX\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5C06\u89C6\u9891\u53D8\u4E3A\u60A8\u7528\u6237\u754C\u9762\u7684\u4E00\u90E8\u5206\u3002 \u9700\u8981\u4E09\u6837\u4E1C\u897F\uFF1A\u4E00\u4E2A\u89C6\u9891\u63A7\u4EF6\u3001\u4E00\u4E2A\u89C6\u9891\u63A7\u5236\u5668\u3001\u5F53\u7136\u8FD8\u6709MJPEG\u89C6\u9891\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u9891\u63A7\u4EF6\u5728\u7528\u6237\u754C\u9762\u4E2D\u4F7F\u7528\uFF0C\u4E0E\u6240\u6709\u5176\u4ED6\u63A7\u4EF6\u4E00\u6837\u3002 \u89C6\u9891\u63A7\u5236\u5668\u662F\u6784\u6210\u5B8C\u6574TouchGFX\u73AF\u5883\uFF08HAL\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u9A71\u52A8\u7A0B\u5E8F\u7B49\uFF09\u7684\u5E95\u5C42\u8F6F\u4EF6\u7684\u4E00\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",
    mdxType: "Figure"
  }, "\u89C6\u9891\u63A7\u4EF6\u548C\u89C6\u9891\u63A7\u5236\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u9891\u63A7\u5236\u5668\u7531\u63A7\u5236MJPEG\u6587\u4EF6\u89E3\u7801\u548C\u7F13\u51B2\u533A\u7BA1\u7406\u7684\u8F6F\u4EF6\u7EC4\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u8BBE\u8BA1\u5668\u81EA\u52A8\u5C06\u89C6\u9891\u63A7\u5236\u5668\u5305\u542B\u5230\u6240\u6709\u6A21\u62DF\u5668\u9879\u76EE\u4E2D\u3002 \u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u6A21\u62DF\u5668\u539F\u578B\u4E2D\u8F7B\u677E\u4F7F\u7528\u89C6\u9891\uFF1A\u53EA\u9700\u6DFB\u52A0\u4E00\u4E2A\u89C6\u9891\u63A7\u4EF6\uFF0C\u9009\u62E9\u4E00\u4E2A\u89C6\u9891\u6587\u4EF6\uFF0C\u7136\u540E\u6309\u4E0B \u201CRun Simulator\uFF08\u8FD0\u884C\u6A21\u62DF\u5668\uFF09\u201D\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, ` F5`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u5728\u786C\u4EF6\u4E0A\u4F7F\u7528\u89C6\u9891\uFF0C\u8FD8\u9700\u76EE\u6807\u9879\u76EE\uFF08IAR\u3001Keil\u3001arm-gcc\u3001CubeIDE\uFF09\u4E2D\u6709\u89C6\u9891\u63A7\u5236\u5668\u3002 \u8FD9\u5DF2\u7ECF\u6DFB\u52A0\u5230\u4E00\u4E9BTouchGFX\u677F\u4EF6\u89C4\u8303\u5305\uFF08\u89C1\u4E0B\u9762\u7684\u5217\u8868\uFF09\uFF0C\u4F46\u60A8\u53EF\u4EE5\u901A\u8FC7TouchGFX Generator\u5411\u4EFB\u610F\u9879\u76EE\u6DFB\u52A0\u89C6\u9891\u652F\u6301\u3002 \u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `\u7528\u6237\u6307\u5357`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u60A8\u62E5\u6709\u652F\u6301\u89C6\u9891\u7684\u5E73\u53F0\u65F6\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u6DFB\u52A0\u548C\u914D\u7F6E\u89C6\u9891\u63A7\u4EF6\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\u6B64\u5904`), `\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u4F7F\u7528\u89C6\u9891\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-files-in-a-touchgfx-project"
  }), `TouchGFX\u9879\u76EE\u4E2D\u7684\u89C6\u9891\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u5305\u542B\u89C6\u9891\u6587\u4EF6\u540E\uFF0C\u5B83\u5C06.avi\u6587\u4EF6\u590D\u5236\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/vidoes`), `\u6587\u4EF6\u5939\u3002 \u5728\u4EE3\u7801\u751F\u6210\u671F\u95F4\uFF0C\u89C6\u9891\u4EE5.bin\u6587\u4EF6\u683C\u5F0F\u88AB\u590D\u5236\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/bin`), `\uFF0C\u4EE5.o\u6587\u4EF6\u683C\u5F0F\u88AB\u590D\u5236\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/obj`), `\u3002 .O\u548C.bin\u6587\u4EF6\u5305\u542B\u76F8\u540C\u7684\u6570\u636E\uFF0C\u4F46\u662F.O\u6587\u4EF6\u662FELF\u683C\u5F0F\uFF08\u8FD9\u662F\u4E00\u4E9B\u7F16\u8BD1\u5668\u548CIDE\u7684\u9996\u9009\u683C\u5F0F\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u751F\u6210\u4EE3\u7801\u65F6\u6267\u884C\u7684\u9879\u76EE\u66F4\u65B0\u7A0B\u5E8F\u5C06\u89C6\u9891\u6587\u4EF6\u5305\u542B\u5728\u76EE\u6807\u9879\u76EE\u4E2D\u3002 \u8FD9\u610F\u5473\u7740\u89C6\u9891\u6587\u4EF6\u88AB\u94FE\u63A5\u5230\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4E14\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u7528\u7F16\u7A0B\u5668\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u89C6\u9891\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u6587\u4EF6\u5939\u3002 \u8FD9\u4E9B\u4E5F\u5C06\u5305\u62EC\u5728\u9879\u76EE\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/include/videos/VideoDatabase.hpp`), `\u5305\u542B\u4E0E\u7F16\u8BD1\u5230\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u89C6\u9891\u6709\u5173\u7684\u7B26\u53F7\u6027\u4FE1\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_SampleVideo1_240x135_bin_start;
#else
extern const uint8_t video_SampleVideo1_240x135_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u901A\u8FC7\u8FD9\u4E9B\u58F0\u660E\u5C06\u89C6\u9891\u5206\u914D\u7ED9\u89C6\u9891\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-video-files-from-user-code"
  }), `\u4ECE\u7528\u6237\u4EE3\u7801\u4F7F\u7528\u89C6\u9891\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E00\u4E9B\u9879\u76EE\u4E2D\uFF0C\u4EC5\u4ECETouchGFX\u8BBE\u8BA1\u5668\u4E2D\u9009\u62E9\u4E00\u4E2A\u89C6\u9891\u662F\u4E0D\u591F\u7684\u3002 \u4F8B\u5982\uFF0C \u60A8\u60F3\u5728\u542F\u52A8\u65F6\u9009\u62E9\u4E0D\u540C\u7684\u89C6\u9891\u3002 \u9996\u5148\uFF0C\u5FC5\u987B\u6DFB\u52A0\u89C6\u9891\u6587\u4EF6\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u89C6\u9891\u5230assets/videos"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u751F\u6210\u4EE3\u7801\uFF08\u6216\u8FD0\u884Cmake assets\uFF09\u65F6\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u6587\u4EF6\u5939\u4E2D\u7684\u89C6\u9891\u6587\u4EF6\u5C06\u5305\u542B\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `VideoDatabase.hpp`), `\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_myVideo_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_myVideo_bin_start;
#else
extern const uint8_t video_myVideo_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u73B0\u5728\u53EF\u4EE5\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u58F0\u660E\uFF0C\u8BA9\u89C6\u9891\u63A7\u4EF6\u64AD\u653E\u6211\u4EEC\u7684\u7535\u5F71\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF01\u89C6\u9891\u6570\u636E\u73B0\u5728\u94FE\u63A5\u5230\u5E94\u7528\u7A0B\u5E8F\u4E2D\u3002 \u53EF\u4EE5\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u65B9\u6CD5\u662F\u4E0D\u5C06\u4EFB\u4F55\u89C6\u9891\u653E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u4E2D\uFF0C\u4E14\u624B\u52A8\u5C06\u89C6\u9891\u5237\u5199\u5230\u5916\u90E8flash\u5B58\u50A8\u7684\u4E13\u7528\u533A\u57DF\u3002 \u7136\u540E\u4F7F\u7528flash\u5730\u5740\u4F20\u9012\u5730\u5740\u548C\u957F\u5EA6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u652F\u6301\u89C6\u9891\u529F\u80FD\u7684\u5F00\u53D1\u5957\u4EF6\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u7684TouchGFX\u677F\u4EF6\u8BBE\u7F6E\u5305\u9ED8\u8BA4\u4E3A\u8FD9\u4E9B\u5F00\u53D1\u5957\u4EF6\u542F\u7528\u4E86\u89C6\u9891\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769Discovery\uFF08\u786C\u4EF6\u52A0\u901F\u89E3\u7801\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32H750BDiscovery\uFF08\u786C\u4EF6\u52A0\u901F\u89E3\u7801\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746Discovery\uFF08\u57FA\u4E8E\u8F6F\u4EF6\u7684\u89E3\u7801\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528\u5176\u4ED6\u5F00\u53D1\u5957\u4EF6\u6216\u5B9A\u5236\u786C\u4EF6\uFF0C\u8BF7\u8BB0\u4F4F\u5728TouchGFX Generator\u4E2D\u542F\u7528\u89C6\u9891\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "creating-mjpeg-avi-files"
  }), `\u521B\u5EFAMJPEG AVI\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u591A\u6570\u89C6\u9891\u4E0D\u4EE5MJPEG AVI\u6587\u4EF6\u683C\u5F0F\u5B58\u50A8\uFF0C\u56E0\u4E3A\u8FD9\u4E0D\u662F\u5E38\u89C1\u7684\u89C6\u9891\u683C\u5F0F\u3002 \u56E0\u6B64\uFF0C\u5728TouchGFX\u9879\u76EE\u4E2D\u4F7F\u7528\u89C6\u9891\u6587\u4EF6\u4E4B\u524D\uFF0C\u901A\u5E38\u9700\u8981\u5C06\u5176\u8F6C\u6362\u4E3AMJPEG\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5B8C\u6210\u8F6C\u6362\uFF0C\u4F8B\u5982\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/FFmpeg"
  }), `FFMPEG`), `\u3002 \u8FD8\u63D0\u4F9B\u5176\u4ED6\u5E94\u7528\u548C\u5728\u7EBF\u670D\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-ffmpeg"
  }), `\u4F7F\u7528FFMPEG`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.gyan.dev/ffmpeg/builds/"
  }), `\u6B64\u5904`), `\u53EF\u4EE5\u627E\u5230\u7528\u4E8EFFMPEG\u7684Windows\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u5C06\u89C6\u9891\u6587\u4EF6input.mov\u8F6C\u6362\u4E3AMJPEG\u683C\u5F0F\uFF0C\u53EF\u4F7F\u7528\u8BE5\u547D\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG\u89C6\u9891\u5728output.avi\u6587\u4EF6\u4E2D\u3002 \u8BE5\u6587\u4EF6\u53EF\u4EE5\u590D\u5236\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u89C6\u9891\u80FD\u4FDD\u6301\u6B63\u786E\u7684\u957F\u5BBD\u6BD4\uFF0C\u53EF\u4EE5\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\u6307\u5B9A\u5BBD\u5EA6\uFF08\u8FD9\u91CC\u662F480\uFF09\uFF0C\u9AD8\u5EA6\u201C-1\u201D\uFF08-1\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u526A\u5207\u89C6\u9891\uFF1A\u4F7F\u7528-ss\u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\uFF0C\u4F7F\u7528-t\u6216-to\u6307\u5B9A\u6301\u7EED\u65F6\u95F4\u6216\u505C\u6B62\u65F6\u95F4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u9009\u9879`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `-s`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8F93\u51FA\u89C6\u9891\u5206\u8FA8\u7387`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-qscale`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8D28\u91CF\u7B49\u7EA7\u8303\u56F41 - 31\uFF08\u4ECE\u4F18\u5230\u5DEE\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-an`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53BB\u9664\u97F3\u9891`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-vf`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BBE\u7F6E\u8FC7\u6EE4\u5668\u56FE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-ss`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F00\u59CB\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-t`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6301\u7EED\u65F6\u95F4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-to`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u505C\u6B62\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "decoding-strategies"
  }), `\u89E3\u7801\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u6240\u8FF0\uFF0CTouchGFX\u9700\u8981\u5C06\u5355\u72EC\u7684MJPEG\u5E27\u4ECEJPEG\u8F6C\u6362\u4E3ARGB\uFF0C\u7136\u540E\u624D\u5728\u5E27\u7F13\u5B58\u533A\u663E\u793A\u3002 \u8FD9\u79CD\u89E3\u7801\u53EF\u4EE5\u5728\u9700\u8981\u65F6\u5B9E\u65F6\u5B8C\u6210\uFF0C\u4E5F\u53EF\u4EE5\u5F02\u6B65\u5B8C\u6210 - \u63D0\u524D\u5C06\u4E0B\u4E00\u5E27\u89E3\u7801\u5230\u89C6\u9891\u7F13\u51B2\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F02\u6B65\u89E3\u7801\u662F\u7531\u7B2C\u4E8C\u4E2A\u4EFB\u52A1\uFF08\u800C\u4E0D\u662FUI\u4EFB\u52A1\uFF09\u5B8C\u6210\u7684\u3002 \u8FD9\u610F\u5473\u7740\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u89E3\u7801\u53EF\u4EE5\u4E0EUI\u4EFB\u52A1\u7684\u7ED8\u5236\u5E76\u884C\u8FDB\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u67093\u79CD\u7B56\u7565\uFF0C\u6BCF\u79CD\u7B56\u7565\u90FD\u6709\u4F18\u70B9\u548C\u7F3A\u70B9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76F4\u63A5\u89E3\u7801\u5E27\u5230\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u9700\u8981\u65F6\uFF0C\u5C06\u5F53\u524D\u89C6\u9891\u5E27\u76F4\u63A5\u89E3\u7801\u5230\u5E27\u7F13\u5B58\u533A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E13\u7528\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C06\u4E0B\u4E00\u4E2A\u89C6\u9891\u5E27\u89E3\u7801\u5230\u89C6\u9891\u7F13\u51B2\u533A\uFF0C \u4ECE\u89C6\u9891\u7F13\u51B2\u533A\u590D\u5236\u5230\u5E27\u7F13\u5B58\u533A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53CC\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C06\u4E0B\u4E00\u4E2A\u89C6\u9891\u5E27\u89E3\u7801\u5230\u7B2C\u4E8C\u89C6\u9891\u7F13\u51B2\u533A\uFF0C \u89E3\u7801\u5B8C\u6210\u540E\uFF0C\u4EA4\u6362\u89C6\u9891\u7F13\u51B2\u533A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\u603B\u662F\u4E3A\u6A21\u62DF\u5668\u9879\u76EE\u9009\u62E9\u201C\u76F4\u63A5\u89E3\u7801\u5230\u5E27\u7F13\u5B58\u533A\u201D\u7B56\u7565\u3002 \u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator`), `\u4E2D\u914D\u7F6E\u5BF9\u76EE\u6807\u4F7F\u7528\u4EC0\u4E48\u6837\u7684\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u6587\u5C06\u8BE6\u7EC6\u8BB2\u89E3\u8FD9\u4E9B\u7B56\u7565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "direct-to-frame-buffer"
  }), `\u76F4\u63A5\u89E3\u7801\u5E27\u5230\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u76F4\u63A5\u89E3\u7801\u5230\u5E27\u7F13\u5B58\u533A\u201D\u7B56\u7565\u5728TouchGFX\u5F15\u64CE\u7684\u6E32\u67D3\u9636\u6BB5\u89E3\u7801JPEG\u5E27\uFF08\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#render"
  }), `\u2018\u6E32\u67D3\u2019`), `\u7AE0\u8282\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",
    mdxType: "Figure"
  }, "\u76F4\u63A5\u89E3\u7801\u5230\u5E27\u7F13\u51B2\u533A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u66F4\u65B0\u9636\u6BB5\uFF08\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#update"
  }), `\u2018\u66F4\u65B0\u2019`), `\u7AE0\u8282\uFF09\uFF0C\u89C6\u9891\u63A7\u4EF6\u51B3\u5B9A\u662F\u5426\u5E94\u8BE5\u5C06\u7535\u5F71\u63D0\u524D\u5230\u4E0B\u4E00\u5E27\u3002 \u5728\u63A5\u4E0B\u6765\u7684\u6E32\u67D3\u9636\u6BB5\uFF0CJPEG\u5E27\u88AB\u9010\u884C\u89E3\u7801\u5230\u4E00\u4E2A\u201C\u884C\u7F13\u51B2\u533A\u201D\u3002 \u7136\u540E\u5BF9\u50CF\u7D20\u8FDB\u884C\u8F6C\u6362\u4EE5\u5339\u914D\u5E27\u7F13\u5B58\u533A\u683C\u5F0F\uFF0C\u5E76\u590D\u5236\u5230\u5E27\u7F13\u5B58\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u89C6\u9891\u63A7\u4EF6\u88AB\u5176\u4ED6\u63A7\u4EF6\u8986\u76D6\uFF0C\u5B83\u4F1A\u88AB\u91CD\u7ED8\u6210\u591A\u4E2A\u5757\uFF08\u53EF\u89C1\u90E8\u5206\u88AB\u5206\u5272\u6210\u77E9\u5F62\uFF09\u3002 \u7ED8\u5236\u6BCF\u4E00\u4E2A\u8FD9\u6837\u7684\u5757\u9700\u8981\u53CD\u590D\u8FDB\u884C\u89E3\u538B\u7F29\u5DE5\u4F5C\u3002 \u8FD9\u4F7F\u5F97\u8BE5\u7B56\u7565\u4E0D\u9002\u5408\u7528\u6237\u754C\u9762\uFF0C\u56E0\u4E3A\u968F\u7740\u89E3\u7801\u65F6\u95F4\u7684\u589E\u52A0\uFF0C\u90A3\u91CC\u7684\u5176\u4ED6UI\u5143\u7D20\uFF08\u5982\u6309\u94AE\uFF09\u4F1A\u88AB\u7F6E\u4E8E\u89C6\u9891\u7684\u9876\u90E8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u89E3\u51B3\u65B9\u6848\u7684\u4F18\u70B9\u662F\u53EA\u4F7F\u7528\u4E86\u5F88\u5C11\u989D\u5916\u5185\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dedicated-buffer"
  }), `\u4E13\u7528\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E13\u7528\u6216\u5355\u7F13\u51B2\u533A\u89E3\u7801\u7B56\u7565\u9996\u5148\u5C06JPEG\u5E27\u89E3\u7801\u5230\u4E13\u7528RGB\u7F13\u51B2\u533A\uFF0C\u7136\u540E\u518D\u4ECE\u8BE5\u7F13\u51B2\u533A\u590D\u5236\u5230\u5E27\u7F13\u5B58\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",
    mdxType: "Figure"
  }, "\u89E3\u7801\u5230\u5355\u72EC\u7684\u7F13\u51B2\u533A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E\u76F4\u63A5\u7B56\u7565\u76F8\u53CD\uFF0C\u73B0\u5728\u89E3\u7801\u5DE5\u4F5C\u5728\u4E00\u4E2A\u5355\u72EC\u4EFB\u52A1\uFF08\u800C\u4E0D\u662F\u901A\u5E38\u7684TouchGFX\u4EFB\u52A1\uFF09\u4E2D\u8FD0\u884C\u3002 \u89C6\u9891\u63A7\u4EF6\u8BA1\u7B97\u4E00\u4E2A\u65B0\u7684\u7535\u5F71\u5E27\u662F\u5426\u5E94\u8BE5\u5728\u4E0B\u4E00\u4E2A\u7528\u6237\u754C\u9762tick\u4E2D\u663E\u793A\uFF0C\u5E76\u901A\u8FC7\u4FE1\u53F7\u544A\u77E5\u89E3\u7801\u4EFB\u52A1\u5F00\u59CB\u89E3\u7801\u4E0B\u4E00\u5E27\u3002 \u5728\u89E3\u7801\u8FC7\u7A0B\u4E2D\uFF0C\u89C6\u9891\u7F13\u51B2\u533A\u4E0D\u80FD\u88AB\u7ED8\u5236\u5230\u5E27\u7F13\u5B58\u533A\uFF08\u5B83\u88AB\u90E8\u5206\u66F4\u65B0\uFF09\u3002 \u5F53\u89E3\u7801\u4EFB\u52A1\u6B63\u5728\u8FD0\u884C\u65F6\uFF0C\u7528\u6237\u754C\u9762\u4E0D\u5F97\u91CD\u7ED8\u89C6\u9891\u63A7\u4EF6\u3002 \u7ED8\u5236\u5B8C\u6210\u540E\uFF0C\u5B83\u5C06\u7EE7\u7EED\u3002 \u5982\u679C\u7528\u6237\u754C\u9762\u4E0D\u9700\u8981\u91CD\u7ED8\u89C6\u9891\uFF0C\u5219\u7528\u6237\u754C\u9762\u53EF\u4EE5\u7167\u5E38\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u89C6\u9891\u88AB\u5B8C\u5168\u89E3\u7801\u540E\uFF0C\u5C06\u89C6\u9891\u6E32\u67D3\u5230\u5E27\u7F13\u5B58\u533A\u7684\u6210\u672C\u4E0E\u7ED8\u5236\u4F4D\u56FE\u7684\u6210\u672C\uFF08\u4F4E\uFF09\u76F8\u540C\u3002 \u901A\u8FC7\u8BE5\u7B56\u7565\uFF0C\u5728\u89C6\u9891\u4E0A\u653E\u7F6E\u6309\u94AE\u6216\u6587\u672C\u4E0D\u6210\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u7B56\u7565\u7684\u7F3A\u70B9\u662F\u4EFB\u52A1\u548C\u89C6\u9891\u7F13\u51B2\u533A\u5360\u7528\u5185\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "double-buffer"
  }), `\u53CC\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53CC\u7F13\u51B2\u533A\u89E3\u7801\u7B56\u7565\u4F7F\u7528\u4E24\u4E2ARGB\u7F13\u51B2\u533A\u3002 \u89E3\u7801\u5728\u8FD9\u4E24\u4E2A\u7F13\u51B2\u533A\u4E2D\u5B8C\u6210\uFF0C\u800C\u6E32\u67D3\u5230\u5E27\u7F13\u5B58\u533A\u5219\u53D1\u751F\u4E8E\u53E6\u4E00\u4E2ARGB\u7F13\u51B2\u533A\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",
    mdxType: "Figure"
  }, "\u89E3\u7801\u5230\u4E24\u4E2A\u89C6\u9891\u7F13\u51B2\u533A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u4E00\u4E2A\u5E27\u88AB\u89E3\u7801\u540E\uFF0C\u89E3\u7801\u4EFB\u52A1\u7B49\u5F85UI\u663E\u793A\u8BE5\u89C6\u9891\u7F13\u51B2\u533A\u5E76\u91CA\u653E\u524D\u4E00\u4E2A\u7F13\u51B2\u533A\u3002 \u4E00\u65E6\u7528\u6237\u754C\u9762\u6539\u53D8\u4E86\u7F13\u51B2\u533A\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u89E3\u7801\u4E0B\u4E00\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u7B56\u7565\u7684\u4E00\u4E2A\u660E\u663E\u7F3A\u70B9\u662F\u5185\u5B58\u4F7F\u7528\u662F\u524D\u4E00\u79CD\u7B56\u7565\u7684\u4E24\u500D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-frame-rate-and-user-interface-frame-rate"
  }), `\u89C6\u9891\u5E27\u901F\u7387\u548C\u7528\u6237\u754C\u9762\u5E27\u901F\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u7684\u89E3\u7801\u7B56\u7565\u5BF9\u7528\u6237\u754C\u9762\u5E27\u901F\u7387\u7684\u5F71\u54CD\u4E5F\u4E0D\u540C\u3002 \u7528\u6237\u754C\u9762\u5E27\u901F\u7387\u662F\u6BCF\u79D2\u5728\u5E27\u7F13\u5B58\u533A\u4E2D\u4EA7\u751F\u7684\uFF08\u4E0D\u540C\uFF09\u5E27\u6570\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u91C7\u7528\u201C\u76F4\u63A5\u89E3\u7801\u5230\u5E27\u7F13\u5B58\u533A\u201D\u7B56\u7565\uFF0C\u89C6\u9891\u89E3\u7801\u901F\u5EA6\u5BB9\u6613\u5F71\u54CD\u7528\u6237\u754C\u9762\u7684\u6709\u6548\u5E27\u901F\u7387\u3002 \u5047\u8BBE\u89E3\u7801\u4E00\u4E2AJPEG\u5E27\u9700\u898128 ms\uFF0C\u5E76\u4E14\u6211\u4EEC\u5E0C\u671B\u6BCF\u79D2\u663E\u793A20\u5E27\u89C6\u9891\uFF0820 fps\uFF09\u3002 \u8FD9\u662F\u6BD4\u8F83\u5B9E\u9645\u7684\uFF0C\u56E0\u4E3A\u603B\u89E3\u7801\u65F6\u95F4\u662F\uFF1A28 ms x 20/s = 560 ms/s\u3002  20 fps\u5BF9\u5E94\u4E8E\u6BCF3\u5E27\uFF0860 fps\uFF09\u6709\u4E00\u4E2A\u65B0\u89C6\u9891\u5E27\u3002 \u6240\u4EE5\u5728\u6BCF\u4E09\u4E2AUI\u5E27\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u65B0\u7684\u89C6\u9891\u5E27\uFF0C\u4F46\u662F\u7531\u4E8E\u89E3\u7801\u65F6\u95F4\u662F\u6E32\u67D3\u9636\u6BB5\u7684\u4E00\u90E8\u5206\uFF0C\u6E32\u67D3\u4E00\u5E27\u9700\u898128 ms\uFF0C\u52A0\u4E0A\u6E32\u67D3\u7528\u6237\u754C\u9762\u7684\u5176\u4ED6\u90E8\u5206\u9700\u8981\uFF08\u6BD4\u5982\uFF092 ms\u3002 \u603B\u7684\u5E27\u6E32\u67D3\u65F6\u95F4\u662F30 ms\uFF0C\u6211\u4EEC\u5931\u53BB\u4E86\u4E00\u4E2Atick\uFF0C\u4F46\u6211\u4EEC\u51C6\u5907\u4E3A\u4E0B\u4E00\u4E2Atick\u751F\u6210\u4E00\u4E2A\u65B0\u5E27\u3002 \u5728\u4E0B\u4E00\u5E27\u4E2D\uFF0C\u6211\u4EEC\u6CA1\u6709\u89E3\u7801\u89C6\u9891\uFF0C\u6240\u4EE5\u6E32\u67D3\u65F6\u95F4\u4F4E\u4E8E16 ms\uFF0C\u7B26\u5408\u9650\u5236\u8981\u6C42\u3002 \u7136\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7B2C\u56DB\u4E2Atick\u4E2D\u5F00\u59CB\u89E3\u7801\u7B2C\u4E8C\u4E2A\u89C6\u9891\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.png",
    mdxType: "Figure"
  }, "20 fps\u89C6\u9891"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u89C6\u9891\u5E27\u901F\u7387\u662F20 fps\uFF0C\u7528\u6237\u754C\u9762\u5E27\u901F\u7387\u662F40 fps\uFF08\u5171\u8BA160 fps\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7ED3\u679C\u662F\u6211\u4EEC\u4E0D\u80FD\u8BA9UI\u7684\u5176\u4ED6\u5143\u7D20\u5177\u670960 fps\u7684\u52A8\u753B\u6548\u679C\uFF0C\u56E0\u4E3A\u89C6\u9891\u89E3\u7801\u9650\u5236\u4E86\u5E27\u901F\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u91C7\u7528\u201C\u53CC\u7F13\u51B2\u533A\u201D\u7B56\u7565\uFF0C\u8FD9\u79CD\u95EE\u9898\u5F97\u5230\u7F13\u89E3\u3002 \u7528\u6237\u754C\u9762\u603B\u662F\u6709\u4E00\u4E2A\u53EF\u7528\u7684\u89C6\u9891\u7F13\u51B2\u533A\u7528\u4E8E\u6700\u65B0\u7684\u5E27\u3002 \u89E3\u7801\u4EFB\u52A1\u53EF\u4EE5\u5C06\u8BE5\u7F13\u51B2\u533A\u4E0E\u53E6\u4E00\u4E2A\u7F13\u51B2\u533A\uFF08\u5305\u542B\u4E0B\u4E00\u5E27\uFF09\u4EA4\u6362\uFF08\u5F53\u5B83\u53EF\u7528\u65F6\uFF09\uFF0C\u800C\u6E32\u67D3\u7EBF\u7A0B\u6CA1\u6709\u4E3B\u52A8\u7ED8\u5236\u3002 \u4EA4\u6362\u4E4B\u540E\uFF0C\u89E3\u7801\u4EFB\u52A1\u53EF\u4EE5\u7ACB\u5373\u5F00\u59CB\u89E3\u7801\u4E0B\u4E00\u5E27\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.png",
    mdxType: "Figure"
  }, "20 fps\u89C6\u9891"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728UI\u5E271\u548CUI\u5E272\u4E2D\uFF0CUI\u663E\u793A\u7684\u662F\u7B2C\u4E00\u4E2A\u89E3\u7801\u7684\u89C6\u9891\u5E27\u3002 \u540C\u65F6\uFF0C\u89E3\u7801\u5668\u5728\u751F\u6210\u5E272\u3002 \u5728UI\u5E273\u4E2D\uFF0C\u8BE5\u5E27\u5DF2\u7ECF\u51C6\u5907\u5C31\u7EEA\u5E76\u5C06\u88AB\u4F7F\u7528\u3002 \u89E3\u7801\u5668\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\uFF0C\u53EF\u4EE5\u5F00\u59CB\u89E3\u7801\u4E0B\u4E00\u5E27\uFF08\u56FE\u4E2D\u6CA1\u6709\u663E\u793A\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5373\u4F7F\u89C6\u9891\u89E3\u7801\u53EA\u80FD\u6BCF2\u4E2Aticks\u4E2D\u751F\u6210\u4E00\u4E2A\u65B0\u5E27\uFF0C\u4E5F\u53EF\u4EE5\u5728\u6BCF\u5E27\u4E2D\u66F4\u65B0\u7528\u6237\u754C\u9762\u7684\u5176\u4ED6\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "related-articles"
  }), `\u76F8\u5173\u6587\u7AE0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As mentioned above the video support for target project is configured in the TouchGFX Generator. See the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator User Guide`), ` for instructions.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u9891\u63A7\u4EF6\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u53EF\u7528\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\u6B64\u5904`), `\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728TouchGFX\u8BBE\u8BA1\u5668\u4E2D\u4F7F\u7528\u89C6\u9891\u63A7\u4EF6\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);