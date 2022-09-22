"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[441],{

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

/***/ 6771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Video extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
      controls: true
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
      src: this.props.url,
      type: "video/mp4"
    }))));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Video);


/***/ }),

/***/ 80203:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6771);
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
  id: "lowering-memory-usage-with-partial-framebuffer",
  title: "\u901A\u904E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u964D\u4F4E\u8A18\u61B6\u9AD4\u4F7F\u7528\u7387"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "id": "development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "title": "\u901A\u904E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u964D\u4F4E\u8A18\u61B6\u9AD4\u4F7F\u7528\u7387",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/lowering-memory-usage-with-partial-framebuffer.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "permalink": "/4.20/zh-TW/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "lowering-memory-usage-with-partial-framebuffer",
    "title": "\u901A\u904E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u964D\u4F4E\u8A18\u61B6\u9AD4\u4F7F\u7528\u7387"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX on NeoChrom",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/touchgfx-on-gpu2d"
  },
  "next": {
    "title": "\u4F7F\u7528\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5F71\u50CF",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/using-non-memory-mapped-flash"
  }
};
const assets = {};



const toc = [{
  value: "\u5B8C\u6574\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4",
  id: "full-size-frame-buffer-memory",
  level: 2
}, {
  value: "\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4",
  id: "partial-frame-buffer-memory",
  level: 2
}, {
  value: "\u986F\u793A\u5668\u756B\u9762\u6495\u88C2",
  id: "display-tearing",
  level: 2
}, {
  value: "\u986F\u793A\u5668\u66F4\u65B0\u7BC4\u4F8B",
  id: "display-update-example",
  level: 2
}, {
  value: "\u914D\u7F6E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "configuring-partial-frame-buffers",
  level: 2
}, {
  value: "\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u87A2\u5E55",
  id: "transferring-frame-buffers-to-the-screen",
  level: 2
}, {
  value: "\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230X-NUCLEO-GFX01M1 SPI\u986F\u793A\u5668",
  id: "transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display",
  level: 3
}, {
  value: "DSI\u986F\u793A\u5668\u4E0A\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38",
  id: "transferring-frame-buffers-on-dsi-display",
  level: 3
}, {
  value: "SPI\u986F\u793A\u5668\u4E0A\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38",
  id: "transferring-frame-buffers-on-spi-display",
  level: 3
}, {
  value: "\u7D50\u8AD6",
  id: "conclusion",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u4EE5\u6642\u9418\u61C9\u7528\u70BA\u4F8B\uFF0C\u89E3\u91CB\u4E86\u5982\u4F55\u914D\u7F6E\u548C\u4F7F\u7528\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4E26\u4EE5\u72A7\u7272\u4E00\u4E9B\u6027\u80FD\u70BA\u4EE3\u50F9\u4F86\u964D\u4F4E\u5B58\u5132\u7A7A\u9593\u7684\u8981\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u5728STM32L4R9Discovery\u8A55\u4F30\u5957\u4EF6\u4E0A\u904B\u884C\u7684\u61C9\u7528\u7684\u5F71\u7247`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Partial%20framebuffer/Partial%20framebuffer.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "full-size-frame-buffer-memory"
  }), `\u5B8C\u6574\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u5340\u901A\u5E38\u662F\u4E00\u500B\u5927\u578B\u8A18\u61B6\u9AD4\u9663\u5217\uFF0C\u5176\u5B58\u5132\u7A7A\u9593\u8DB3\u4EE5\u5BB9\u7D0D\u986F\u793A\u5668\u4E0A\u7684\u6240\u6709\u53EF\u7528\u50CF\u7D20\u3002 \u5982\u679C\u5728\u89E3\u6790\u5EA6\u70BA480 x 272\u768424\u4F4D\u5143\u986F\u793A\u5668\u4E0A\u904B\u884C\uFF0C\u5247\u5B8C\u6574\u5927\u5C0F\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u53EF\u5BB9\u7D0D480 x 272 x 3\u4F4D\u5143\u7D44 = 391,680\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u61C9\u7528\u53EF\u80FD\u67092\uFF08\u201C\u96D9\u91CD\u7DE9\u885D\u201D\uFF09\u751A\u81F33\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u8981\u6C42\u7684\u7E3D\u5B58\u5132\u7A7A\u9593\u5C07\u662F783,360\u548C1,175,040\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7E6A\u88FDUI\u7684\u4EFB\u4F55\u4E00\u500B\u90E8\u5206\u6642\uFF0CTouchGFX\u5411\u5F71\u50CF\u7DE9\u885D\u5340\u5BEB\u5165\u50CF\u7D20\u503C\uFF0C\u5728\u6240\u6709\u7E6A\u88FD\u64CD\u4F5C\u5B8C\u6210\u5F8C\uFF0C\u5F71\u50CF\u7DE9\u885D\u5340\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u901A\u5E38\u6703\u5C07\u6574\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u5373\u4F7F\u53EA\u66F4\u65B0\u4E86UI\u7684\u4E00\u90E8\u5206\u3002 \u5728\u50B3\u8F38\u524D\uFF0C\u901A\u5E38\u53EF\u4EE5\u5C07\u5F71\u50CF\u7DE9\u885D\u5206\u6210\u8A31\u591A\u5C0F\u584A\u9032\u884C\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u66F4\u65B01\u3001\u66F4\u65B02\u3001\u66F4\u65B03\u3001\u2026\u2026\u3001\u66F4\u65B0N\uFF0C\u50B3\u8F38\u81F3\u986F\u793A\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u7279\u5225\u662F\u5728\u6C92\u6709\u5916\u90E8RAM\u7684\u4F4E\u6210\u672C\u89E3\u6C7A\u65B9\u6848\u4E2D\uFF0C\u5F71\u50CF\u7DE9\u885D\u5340\u5FC5\u9808\u8DB3\u5920\u5C0F\uFF0C\u4EE5\u4F7F\u61C9\u7528\u7A0B\u5F0F\u7684\u5176\u9918\u90E8\u5206\u80FD\u5920\u548C\u5F71\u50CF\u7DE9\u885D\u5171\u7528\u5167\u90E8RAM\u3002 \u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\u5341\u5206\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "partial-frame-buffer-memory"
  }), `\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u4F7FTouchGFX\u61C9\u7528\u7A0B\u5F0F\u80FD\u5920\u5728\u5E7E\u500B\u5C0F\u65BC\u5B8C\u6574\u5927\u5C0F\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u4E4B\u4E0A\u904B\u884C\u3002 \u5F71\u50CF\u7DE9\u885D\u5340\u7684\u6578\u91CF\u548C\u5927\u5C0F\u662F\u53EF\u914D\u7F6E\u7684\u3002 \u6B64\u6280\u8853\u53EF\u5927\u5E45\u964D\u4F4E\u61C9\u7528\u7A0B\u5F0F\u7684\u5B58\u5132\u7A7A\u9593\u8981\u6C42\uFF0C\u4F46\u4E5F\u5E36\u4F86\u4E86\u4E00\u4E9B\u9650\u5236\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u53EA\u80FD\u5728\u5177\u6709\u5167\u7F6E\u8A18\u61B6\u9AD4\u7684\u986F\u793A\u5668\u4E0A\u5DE5\u4F5C\u3002 \u9019\u4E9B\u986F\u793A\u5668\u901A\u5E38\u662FDSI\u986F\u793A\u5668\u6216\u5177\u6709\u5E73\u884C\u532F\u6D41\u6392\u9023\u63A5\uFF08DBI A/B\u578B\uFF0C8080/6800\uFF09\u6216SPI\u532F\u6D41\u6392\u9023\u63A5\u7684\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8907\u96DC\u61C9\u7528\u53EF\u80FD\u767C\u751F\u6495\u88C2\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u65BC\u4F7F\u7528\u5F71\u50CF\u7DE9\u885D\u5340\u5C07\u6BCF\u4E00\u500B\u50CF\u7D20\u986F\u793A\u5728\u986F\u793A\u5668\u4E0A\uFF0C\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u901A\u5E38\u53EA\u8986\u84CB\u90E8\u5206\u5340\u57DF\u3002 \u5728\u672C\u6587\u4F7F\u7528\u7684\u6642\u9418\u7BC4\u4F8B\u4E2D\uFF0C\u4F7F\u7528\u4E86\u4E09\u500B\u5927\u5C0F\u5747\u70BA11,700\u4F4D\u5143\u7D44\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u9019\u6703\u5C0E\u81F4\u5F71\u50CF\u7DE9\u885D\u5340\u4F54\u7528\u8A18\u61B6\u9AD435,100\u4F4D\u5143\u7D44\u7684\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u61C9\u7528\u7A0B\u5F0F\u9700\u8981\u66F4\u65B0UI\u7684\u67D0\u4E00\u90E8\u5206\u6642\uFF0CTouchGFX\u5C07\u9078\u64C7\u914D\u7F6E\u7684\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u7684\u5176\u4E2D\u4E00\u500B\uFF0C\u5728\u8A72\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u4E2D\u5B8C\u6210\u5176\u7E6A\u5716\u64CD\u4F5C\uFF0C\u4E26\u5C07\u8A72\u90E8\u5206\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u5C07\u5C0D\u9700\u8981\u6E32\u67D3\u7684\u6240\u6709UI\u5340\u57DF\u91CD\u8907\u6B64\u64CD\u4F5C - \u9019\u6703\u5C07\u66F4\u65B0\u548C\u50B3\u8F38\u8CC7\u6599\u7684\u516C\u5F0F\u8B8A\u66F4\u70BA\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u66F4\u65B01\u3001\u50B3\u8F381\u3001\u66F4\u65B02\u3001\u50B3\u8F382\u3001\u66F4\u65B03\u3001\u50B3\u8F383\u3001\u2026\u2026\u3001\u66F4\u65B0N\u3001\u50B3\u8F38N`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u53EF\u4EE5\u5728\u66F4\u65B0\u4E0B\u4E00\u500B\u7DE9\u885D\u5340\u7684\u540C\u6642\u9032\u884C\u4E00\u500B\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-tearing"
  }), `\u986F\u793A\u5668\u756B\u9762\u6495\u88C2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76F8\u6BD4\u65BC\u4F7F\u7528\u5B8C\u6574\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u5728\u4F7F\u7528\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u6642\uFF0CTouchGFX\u50B3\u8F38UI\u4E0A\u66F4\u65B0\u7684\u66F4\u5FEB\u3002 \u7531\u65BC\u986F\u793A\u5668\u9700\u8981\u5B9A\u671F\u5237\u65B0\uFF0C\u5728\u6700\u591A16 ms\u5F8C\uFF08\u5C3160 fps\u986F\u793A\u5668\u800C\u8A00\uFF09\uFF0C\u986F\u793A\u5668\u5C07\u5728\u5176\u87A2\u5E55\u4E0A\u986F\u793A\u63A5\u6536\u5230\u7684\u66F4\u65B0\u3002 \u56E0\u6B64\uFF0C\u5728\u6240\u6709\u66F4\u65B0\u50B3\u8F38\u5B8C\u7562\u4E4B\u524D\uFF0C\u5C0D\u986F\u793A\u5668\u7684\u6700\u521D\u66F4\u65B0\u53EF\u80FD\u6703\u88AB\u7528\u6236\u6CE8\u610F\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u7E6A\u5716\u64CD\u4F5C\u548C\u50B3\u8F38\u7684\u5B8C\u6574\u5E8F\u5217\u9700\u8981\u82B1\u8CBB\u8F03\u9577\u6642\u9593\u624D\u80FD\u5B8C\u6210\uFF08 > 16 ms\uFF09\uFF0C\u5247\u7528\u6236\u5F88\u53EF\u80FD\u6703\u770B\u5230\u4E0A\u4E00\u5E40\u8207\u4E0B\u4E00\u5E40\u7684\u7D44\u5408\u3002 \u9019\u88AB\u7A31\u70BA\u756B\u9762\u6495\u88C2\u3002 \u56E0\u6B64\uFF0C\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u4E0D\u9069\u5408\u4F7F\u7528\u8907\u96DC\u52D5\u756B\u3001\u9700\u8981\u9577\u6642\u9593\u6E32\u67D3\u7684\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-update-example"
  }), `\u986F\u793A\u5668\u66F4\u65B0\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A0E\u8AD6\u5982\u4F55\u5728\u61C9\u7528\u7A0B\u5F0F\u4E2D\u914D\u7F6E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u4E4B\u524D\uFF0C\u6211\u5011\u5148\u4F86\u770B\u4E00\u500B\u5177\u9AD4\u7BC4\u4F8B\uFF0C\u8A72\u7BC4\u4F8B\u986F\u793A\u4E86\u4E00\u500B\u7528\u79FB\u52D5\u7684\u5713\u5F27\u4EE3\u8868\u79D2\u6578\u7684\u6578\u4F4D\u6642\u9418\u3002 \u7DA0\u8272\u5713\u5F27\u6BCF\u79D2\u79FB\u52D56\u5EA6\uFF0C\u4E00\u5206\u9418\u5B8C\u6210\u4E00\u6574\u5708\u3002 \u7528\u5982\u4E0B\u5716\u6240\u793A\u7684\u56DB\u500B\u5C0F\u90E8\u4EF6\u69CB\u5EFAUI\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/line"
  }), `\u884C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/circle"
  }), `\u5713`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/miscellaneous/digital-clock"
  }), `\u6578\u4F4D\u6642\u9418`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/box"
  }), `\u5916\u6846`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/touchgfx-designer-with-widgets-4.17.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u66F4\u65B0\u6578\u4F4D\u6642\u9418\u548C\u5713\u5F27\u7684\u7A0B\u5F0F\u78BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{21-25}",
    "{21-25}": true
  }), `void MainView::handleTickEvent()
{
  ticks++;
  if (ticks == 10)
  {
      ticks = 0;
      secs += 1;
      if (secs == 60)  //increment minutes
      {
        secs = 0;
        min += 1;
        if (min == 60) //increment hours
        {
          min = 0;
          hour += 1;
          if (hour == 24)
          {
            hour = 0;
          }
        }
        //Only update digital clock when minutes or hours change
        digitalClock.setTime24Hour(hour, min, secs);
      }
    //Always update seconds
    circleSeconds.updateArc(secs*6 - 20, secs*6);
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u6240\u793A\u70BA\u5728\u5713\u5F27\u63A5\u8FD1\u9802\u9EDE\u548C\u6578\u4F4D\u6642\u9418\u66F4\u65B0\u6642\u524D\u5E7E\u79D2\u66F4\u65B0\u7684\u5340\u57DF\uFF08\u7070\u8272\u77E9\u5F62\uFF09\u3002 \u5728\u524D\u5169\u5E40\u4E2D\uFF0C\u53EA\u6709\u79D2\u6578\u5728\u8B8A\u5316\uFF08\u7B2C58\u548C59\u79D2\uFF09\u3002 \u5728\u7B2C\u4E09\u5E40\u4E2D\uFF0C\u79D2\u6578\u9054\u523060\uFF0C\u5C0F\u6642\u548C\u5206\u9418\u7684\u6587\u5B57\u66F4\u65B0\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-1.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-2.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-3.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-4.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u9762\u7B2C\u4E09\u5E45\u5716\u50CF\u4E2D\u66F4\u65B0\u7684\u77E9\u5F62\u70BA154 x 60\u500B\u50CF\u7D20\u300120 x 12\u500B\u50CF\u7D20\u548C33 x 8\u500B\u50CF\u7D20\u3002 \u5728\u4F7F\u7528\u6A19\u6E96\u5F71\u50CF\u7DE9\u885D\u5340\u6642\uFF0C\u9019\u4E9B\u77E9\u5F62\u6703\u88AB\u5B58\u5165\u5B8C\u6574\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\uFF08\u8986\u84CB\u4E4B\u524D\u7684\u50CF\u7D20\uFF09\uFF0C\u5B8C\u6574\u5F71\u50CF\u7DE9\u885D\u5340\u96A8\u5F8C\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u5728\u4F7F\u7528\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u6642\uFF0C\u9019\u4E09\u500B\u77E9\u5F62\u6703\u88AB\u5B58\u5165\u5B83\u5011\u81EA\u5DF1\u7684\u5C0F\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\uFF0C\u5C0F\u5F71\u50CF\u7DE9\u885D\u5340\u96A8\u5F8C\u7ACB\u5373\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\u4E26\u4E88\u4EE5\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configuring-partial-frame-buffers"
  }), `\u914D\u7F6E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u9700\u901A\u904E\u4E0B\u9762\u7684\u6B65\u9A5F\u4F86\u4F7F\u7528\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u7528\u8A18\u61B6\u9AD4\u7DE9\u885D\u5340\u5275\u5EFA\u5F71\u50CF\u7DE9\u885D\u5340\u5206\u914D\u5668\u7269\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u914D\u7F6ETouchGFX HAL\u985E\u4EE5\u4F7F\u7528\u8A72\u5206\u914D\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5BEB\u5165\u7A0B\u5F0F\u78BC\u4EE5\u5C07\u7DE9\u885D\u5340\u50B3\u8F38\u81F3\u986F\u793A\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B65\u9A5F1\u548C2\u7531TouchGFX Generator\u901A\u904ESTM32CubeMX\u81EA\u52D5\u751F\u6210\uFF0C\u800C\u6B65\u9A5F3\u662F\u4E00\u500B\u5C08\u7528\u9A45\u52D5\u7A0B\u5F0F\uFF0C\u7528\u65BC\u5C07\u50CF\u7D20\u50B3\u8F38\u81F3\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/partial-strategy.png",
    width: "450",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0A\u914D\u7F6E\u751F\u6210\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `// Block Allocator for Partial Framebuffer strategy
static ManyBlockAllocator<1920, /* block size */
                          3,    /* number of blocks */
                          2     /* bytes per pixel */
                          > blockAllocator;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u5F71\u50CF\u7DE9\u885D\u5340\u5206\u914D\u5668\u5206\u914D3\u500B\u584A\uFF0C\u6BCF\u500B1920\u4F4D\u5143\u7D44\u3002 TouchGFX HAL\u88AB\u81EA\u52D5\u914D\u7F6E\u70BA\u4F7F\u7528\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u7B56\u7565\uFF0C\u4E26\u4F7F\u7528Block Allocator\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-10}",
    "{8-10}": true
  }), `void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    registerEventListener(*(Application::getInstance()));
    enableLCDControllerInterrupt();
    enableInterrupts();
    // Partial framebuffer strategy
    setFrameBufferAllocator(&blockAllocator);
    setFrameRefreshStrategy(HAL::REFRESH_STRATEGY_PARTIAL_FRAMEBUFFER);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u914D\u7F6E\uFF0CTouchGFX\u5C07\u5206\u914D\u5C0F\u7684\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4E26\u5728\u5176\u4E2D\u7E6A\u88FDUI\u3002 \u73FE\u5728\uFF0C\u53EA\u9700\u5C07\u5C0F\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\u4F86\u770B\u5206\u914D\u7528\u65BC\u7E6A\u88FD\u5C0F\u5713\u5708\u66F4\u65B0\u7684\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\uFF08\u4E0A\u9762\u7B2C\u4E8C\u5E45\u5716\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u77E9\u5F62`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `x`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `y`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5BEC\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9AD8\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u50CF\u7D20`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u77E9\u5F621`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `112`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `56`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `22`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `14`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `308\u500B\u50CF\u7D20 = 924\u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u77E9\u5F622`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `153`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `29`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `319\u500B\u50CF\u7D20 = 957\u4F4D\u5143\u7D44`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u4E9B\u77E9\u5F62\u90FD\u5F88\u5C0F\uFF0C\u53EF\u4EE5\u653E\u5165\u7531\u5F71\u50CF\u7DE9\u885D\u5340\u5206\u914D\u5668\u5206\u914D\u7684\u584A\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0A\u9762\u7684\u7B2C\u4E09\u5E45\u5716\u4E2D\uFF0C\u66F4\u65B0\u4E863\u500B\u77E9\u5F62\uFF1A\u5C0F\u77E9\u5F62\u66F4\u65B0\u5713\u5708\uFF0C\u8F03\u5927\u7684\u77E9\u5F62\u8986\u84CB\u6587\u5B57\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u77E9\u5F62`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `x`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `y`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5BEC\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u9AD8\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u50CF\u7D20`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u77E9\u5F621`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `126`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `51`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `20`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `12`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `240\u500B\u50CF\u7D20 = 720\u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u77E9\u5F622`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `264\u500B\u50CF\u7D20 = 792\u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u77E9\u5F623`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `118`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `154`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `60`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `9.240\u500B\u50CF\u7D20 = 27.720\u4F4D\u5143\u7D44`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u6A23\u5730\uFF0C\u77E9\u5F621\u548C2\u5F88\u5C0F\uFF0C\u53EF\u4EE5\u653E\u5165\u7531\u5F71\u50CF\u7DE9\u885D\u5340\u5206\u914D\u5668\u5206\u914D\u7684\u584A\u4E2D\uFF0C\u4F46\u5F71\u50CF\u7DE9\u885D\u53403\u904E\u5927\u3002 \u6B64\u77E9\u5F62\u904E\u5927\uFF0C\u5C07\u88AB\u5206\u6210\u591A\u500B\u53EF\u653E\u5165\u5F71\u50CF\u7DE9\u885D\u5340\uFF0811,700\u4F4D\u5143\u7D44\uFF09\u7684\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u88E1\u6211\u5011\u66F4\u65B0\u4E863\u500B\u77E9\u5F62\uFF0C\u4F46\u5206\u914D\u5668\u53EA\u67092\u500B\u584A\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0CTouchGFX\u5C07\u7B49\u5F85\u7B2C\u4E00\u500B\u584A\u50B3\u8F38\u5B8C\u7562\uFF0C\u7136\u5F8C\u91CD\u8907\u4F7F\u7528\u584A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transferring-frame-buffers-to-the-screen"
  }), `\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u87A2\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u9700\u8981\u91CD\u65B0\u7E6A\u88FD\u77E9\u5F62\u6642\uFF0CTouchGFX\u5C07\u5F9EFrameBufferAllocator\u5206\u914D\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u5728\u5B58\u5165\u7DE9\u885D\u5340\u5F8C\uFF0CTouchGFX\u5C07\u547C\u53EB\u6B64\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void HAL::flushFrameBuffer(const Rect& rect);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728HAL\u5B50\u985E\u4E2D\uFF0C\u6B64\u51FD\u6578\u53EF\u4EE5\u88AB\u91CD\u5BEB\uFF0C\u4EE5\u4FBF\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u81F3\u87A2\u5E55\u3002 \u70BA\u4E86\u8B93\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u767C\u63EE\u4F5C\u7528\uFF0C\u9700\u8981\u7528\u5230\u6B64\u7279\u6B8A\u5BE6\u73FE\u3002 \u4E0B\u9762\u5E7E\u7BC0\u5C07\u63CF\u8FF0\u5982\u4F55\u5C0D\u642D\u8F09SPI\u986F\u793A\u5668\u7684STM32G071\u8A55\u4F30\u5957\u4EF6\u548C\u642D\u8F09DSI\u986F\u793A\u5668\u7684STM32L4R9Discovery\u8A55\u4F30\u5957\u4EF6\u9032\u884C\u76F8\u95DC\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display"
  }), `\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230X-NUCLEO-GFX01M1 SPI\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u8A0E\u8AD6STM32G071 nucleo\u677F\u548CX-Nucleo-GFX01M1\u64F4\u5C55\u677F\u7684TouchGFX\u8A2D\u7F6E\u3002 \u6B64\u64F4\u5C55\u677F\uFF08MB1642B\uFF09\u5305\u542B\u4E00\u500B2.2\u201D 240x320 SPI\u986F\u793A\u5668\u548C\u4E00\u500B64-Mbit SPI NOR Flash\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",
    width: "400px",
    mdxType: "Figure"
  }, "Nucleo-G071RB\u548CX-Nucleo-GFX01M1\u64F4\u5C55\u677F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u4E2D\uFF0C\u6211\u5011\u4F7F\u7528\u6846\u67B6\u4E2D\u7684\u4E00\u500BC++\u985E\u5225\u4F86\u7BA1\u7406\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u584A\u3002 \u9019\u6A23\u53EF\u4EE5\u7A0D\u5FAE\u7E2E\u77EDTouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u4E2D\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528TouchGFX Generator\u69CB\u5EFATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002 \u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-hal-development/touchgfx-generator#display"
  }), `\u6B64\u8655`), `\u95B1\u8B80\u66F4\u591A\u76F8\u95DC\u5167\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u91CD\u8981\u7684\u90E8\u5206\u662FflushFrameBuffer\u51FD\u6578\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    // Try transmitting a block
    PartialFrameBufferManager::tryTransmitBlock();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u88E1\u6211\u5011\u53EA\u9700\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), ` \u6846\u67B6\u985E\u4F86\u7372\u53D6\u767C\u9001\u7684\u584A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFXGeneratedHAL::endFrame\u51FD\u6578\u4E2D\uFF0C\u6211\u5011\u4E5F\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), ` \u4F86\u7372\u53D6\u767C\u9001\u7684\u4EFB\u4F55\u5269\u9918\u5F71\u50CF\u7DE9\u885D\u584A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void TouchGFXGeneratedHAL::endFrame()
{
    // We must guard the next frame until we're done transferring all blocks over our display interface
    // through either a semaphore if user is running an OS or a simple variable if not
    PartialFrameBufferManager::transmitRemainingBlocks();

    HAL::endFrame();
    touchgfx::OSWrappers::signalRenderingDone();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), ` \u4F7F\u7528\u4E09\u500B\u51FD\u6578\u8207\u986F\u793A\u5668\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u9032\u884C\u4EA4\u4E92\u3002 \u9019\u4E9B\u5FC5\u9808\u5728TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u4E2D\u5BE6\u73FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-4,12-12,20-20}",
    "{4-4,12-12,20-20}": true
  }), `/**
 * Check if a Frame Buffer Block is beeing transmitted.
 */
__weak int transmitActive()
{
    return touchgfxDisplayDriverTransmitActive();
}

/**
 * Check if a Frame Buffer Block ending at bottom may be sent.
 */
__weak int shouldTransferBlock(uint16_t bottom)
{
    return touchgfxDisplayDriverShouldTransferBlock(bottom);
}

/**
 * Transmit a Frame Buffer Block.
 */
__weak void transmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)
{
    touchgfxDisplayDriverTransmitBlock(pixels, x, y, w, h);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0A\u7A0B\u5F0F\u78BC\u5C07\u8F49\u767C\u5230MB1642B\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u4E2D\u7684C\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int touchgfxDisplayDriverTransmitActive(void)
{
  return IsTransmittingBlock_;
}

void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)
{
  Display_Bitmap((uint16_t*)pixels, x, y, w, h);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u7684\u5BE6\u73FE\u9AD8\u5EA6\u4F9D\u8CF4\u65BC\u4F7F\u7528\u7684\u986F\u793A\u5668\u3002 \u5728MB1642B\u5305\u542B\u5169\u500B\u7528\u65BC\u63A7\u5236SPI\u6676\u7247\u9078\u64C7\u548C\u8CC7\u6599/\u6307\u4EE4\u6A21\u5F0F\u7684GPIO\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u63EE\u767C\u6027uint8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `t\u8B8A\u6578(volatile uint8_t) *IsTransmittingBlock`), `*\u5BE6\u73FE\u767C\u9001\u72C0\u614B\u3002 \u5728\u958B\u59CB\u767C\u9001\u6642\uFF0C\u6B64\u8B8A\u6578\u7F6E\u70BA1\uFF0C\u4E26\u5728DMA\u56DE\u6A94\u4E2D\u7F6E\u70BA0\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void MB1642BDisplayDriver_DMACallback(void)
{
  /* Transfer Complete Interrupt management ***********************************/
  if ((0U != (DMA1->ISR & (DMA_FLAG_TC1))) && (0U != (hdma_spi1_tx.Instance->CCR & DMA_IT_TC)))
  {
    /* Disable the transfer complete and error interrupt */
    __HAL_DMA_DISABLE_IT(&hdma_spi1_tx, DMA_IT_TE | DMA_IT_TC);

    /* Clear the transfer complete flag */
    __HAL_DMA_CLEAR_FLAG(&hdma_spi1_tx, DMA_FLAG_TC1);

    IsTransmittingBlock_ = 0;

    ...

    // Signal Transfer Complete to TouchGFX
    DisplayDriver_TransferCompleteCallback();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0A\u6587\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0CDMA callback \u4E5F\u547C\u53EBtransfer complete callback\u3002 \u5728\u751F\u6210\u7684HAL\u4E2D\u5BE6\u73FE\u6B64\u51FD\u6578\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C"
void DisplayDriver_TransferCompleteCallback()
{
    // After completed transmission start new transfer if blocks are ready.
    PartialFrameBufferManager::tryTransmitBlockFromIRQ();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8655\u5C0D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), ` \u7684\u547C\u53EB\u80FD\u5920\u958B\u59CB\u65B0\u7684\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-on-dsi-display"
  }), `DSI\u986F\u793A\u5668\u4E0A\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32L4R9Discovery\u8A55\u4F30\u5957\u4EF6\u4F7F\u7528DSI\u986F\u793A\u5668\u3002 \u666E\u901A\u7684HAL\u985E\u7A31\u70BASTM32HAL_DSI\uFF08\u4F4D\u65BCSTM32HAL_DSI.cpp\u4E2D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6211\u5011\u91CD\u5BEBHAL::flushFrameBuffer\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u901A\u77E5FrameBufferAllocator\u584A\u5DF2\u7E6A\u88FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const Rect& rect)
{
    frameBufferAllocator->markBlockReadyForTransfer();
    HAL::flushFrameBuffer(rect); //call normal implementation
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u584A\u53EF\u4EE5\u9032\u884C\u50B3\u8F38\u6642\uFF0CFrameBufferAllocator\u5B50\u985EManyBlockAllocator\u5C07\u547C\u53EB\u5168\u57DF\u51FD\u6578FrameBufferAllocatorSignalBlockDrawn()\u3002 \u6B64\u65B9\u6CD5\u5FC5\u9808\u5728BSP\u5C64\u5BE6\u73FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void FrameBufferAllocatorSignalBlockDrawn()
  {
    if (!dsiIsTransferring)
    {
      sendBlock();
    }
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u51FD\u5F0F\u547C\u53EBsendBlock\u51FD\u6578\uFF0C\u9664\u975EDSI\u4E0A\u5DF2\u7D93\u5728\u9032\u884C\u50B3\u8F38\u3002 \u5C0D\u65BCTouchGFX\u7E6A\u88FD\u7684\u7B2C\u4E00\u500B\u584A\uFF0C\u4E0D\u5B58\u5728\u9019\u7A2E\u60C5\u6CC1\uFF0C\u56E0\u6B64\u958B\u59CB\u50B3\u8F38\u3002 \u5982\u679C\u5728DSI\u50B3\u8F38\u4ECD\u5728\u904B\u884C\u6642\u5B8C\u6210\u4E86\u53E6\u4E00\u500B\u584A\u7684\u7E6A\u88FD\uFF0C\u584A\u5C07\u4FDD\u6301\u201C\u6E96\u5099\u50B3\u8F38\u72C0\u614B\u201D\uFF0C\u4E26\u5C07\u7E7C\u7E8C\u53E6\u4E00\u500B\u7A7A\u9592\u584A\uFF08\u5982\u53EF\u7528\uFF09\u7684\u7E6A\u88FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576DSI\u50B3\u8F38\u5B8C\u6210\u6642\uFF0C\u6211\u5011\u5FC5\u9808\u9996\u5148\u91CB\u653E\u5DF2\u50B3\u8F38\u7684\u584A\uFF0C\u4EE5\u4FBF\u5C07\u5176\u91CD\u8907\u7528\u65BC\u53E6\u4E00\u500B\u77E9\u5F62\uFF0C\u7136\u5F8C\u6AA2\u67E5\u4E0B\u4E00\u500B\u584A\u662F\u5426\u53EF\u4EE5\u958B\u59CB\u50B3\u8F38\u3002 \u9019\u4E9B\u5168\u90E8\u5728ER\u4E2D\u65B7\u4E2D\u5B8C\u6210\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-8,11-11}",
    "{8-8,11-11}": true
  }), `__irq void DSI_IRQHandler(void) {
  if (__HAL_DSI_GET_FLAG(&hdsi, DSI_IT_ER))
  {
    // End-of-refresh interrupt. Meaning last DSI transfer is complete
    __HAL_DSI_CLEAR_FLAG(&hdsi, DSI_IT_ER);
    if (dsiIsTransferring)
    {
      HAL::getInstance()->getFrameBufferAllocator()->freeBlockAfterTransfer();
      dsiIsTransferring = 0;
    }
    sendBlock(); //transfer next block if availble
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51FD\u6578sendBlock\u66F4\u70BA\u8907\u96DC\u3002 \u4E0B\u9762\u6211\u5011\u914D\u7F6ELTDC\u548CDSI\u5916\u8A2D\uFF0C\u4EE5\u4FBF\u50B3\u8F38\u5F71\u50CF\u7DE9\u885D\u3002 \u6211\u5011\u9084\u5C07\u914D\u7F6E\u986F\u793A\u5668\uFF0C\u4EE5\u4FBF\u5C07\u50B3\u8F38\u7684\u8CC7\u6599\u653E\u5165\u986F\u793A\u5668\u8A18\u61B6\u9AD4\u4E2D\u7684\u6B63\u78BA\u4F4D\u7F6E\u3002 \u9019\u90E8\u5206\u7A0B\u5F0F\u78BC\u4F9D\u8CF4\u65BC\u7279\u5B9A\u7684\u986F\u793A\u5668\u3002 \u8ACB\u6AA2\u67E5\u986F\u793A\u5668\u8CC7\u6599\u624B\u518A\u77AD\u89E3\u6307\u4EE4\u898F\u7BC4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{18-18,40-40,51-51}",
    "{18-18,40-40,51-51}": true
  }), `static void sendBlock()
{
    FrameBufferAllocator* fbAllocator = HAL::getInstance()->getFrameBufferAllocator();

    //Is a block ready for transfer?
    if (fbAllocator->hasBlockReadyForTransfer())
    {
        Rect transfer_rect;
        const uint8_t* src = fbAllocator->getBlockForTransfer(transfer_rect);
        dsiIsTransferring = 1;

        //1. Setup LTDC and layer address and dimension
        //2. Configure display active area
        //3. Start DSI

        __HAL_DSI_WRAPPER_DISABLE(&hdsi);

        //1: Setup LTDC
        LTDC_Layer1->CFBAR = (uint32_t)src;

        const uint32_t width = transfer_rect.width;
        const uint32_t height = transfer_rect.height;

        LTDC->AWCR = ((width + 1) << 16) | (height + 1);
        LTDC->TWCR = ((width + 1 + 1) << 16) | (height + 1 + 1);

        const uint16_t layer_x0 = 2 + 0;
        const uint16_t layer_x1 = 2 + width - 1;
        LTDC_Layer1->WHPCR = (layer_x1 << 16) | layer_x0;

        const uint16_t layer_y0 = 2 + 0;
        const uint16_t layer_y1 = 2 + height - 1;
        LTDC_Layer1->WVPCR = (layer_y1 << 16) | layer_y0;

        LTDC_Layer1->CFBLR = ((width * 3) << 16) | (width * 3 + 3);
        LTDC_Layer1->CFBLNR = height;

        LTDC->SRCR = (uint32_t)LTDC_SRCR_IMR;

        //2: Configure display
        const int16_t x = transfer_rect.x + 4;
        const int16_t x2 = transfer_rect.x + 4 + width - 1;
        uint8_t InitParam1[4] = { (uint8_t)(x >> 8), (uint8_t)(x & 0xFF), (uint8_t)(x2 >> 8), (uint8_t)(x2 & 0xFF)};
        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_COLUMN_ADDRESS, InitParam1);

        const int16_t y = transfer_rect.y;
        const int16_t y2 = transfer_rect.y + height - 1;
        uint8_t InitParam2[4] = { (uint8_t)(y >> 8), (uint8_t)(y & 0xFF), (uint8_t)(y2 >> 8), (uint8_t)(y2 & 0xFF) };
        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_PAGE_ADDRESS, InitParam2);

        //3: Start DSI transfer
        __HAL_DSI_WRAPPER_ENABLE(&hdsi);
        HAL_DSI_Refresh(&hdsi);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-on-spi-display"
  }), `SPI\u986F\u793A\u5668\u4E0A\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u77E9\u5F62\u50B3\u8F38\u5230\u986F\u793A\u5668\u7684\u539F\u7406\u8207DSI\u7684\u76F8\u540C\uFF0C\u4F46\u5728\u7D30\u7BC0\u4E0A\u5B58\u5728\u4E00\u4E9B\u5DEE\u7570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u5728\u7E6A\u88FD\u77E9\u5F62\u6642\uFF0C\u6211\u5011\u5728\u76EE\u524D\u6C92\u6709\u9032\u884C\u4EFB\u4F55\u50B3\u8F38\u7684\u60C5\u6CC1\u4E0B\u958B\u59CB\u50B3\u8F38\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-4,10-10}",
    "{4-4,10-10}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    frameBufferAllocator->markBlockReadyForTransfer();
    //start transfer if not running already!
    if (!LCDManager_IsTransmittingData())
    {
        touchgfx::Rect r;
        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);
        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51FD\u6578 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LCDManager_SendFrameBufferBlockWithPosition`), ` \u4F7F\u7528DMA\uFF0C\u958B\u59CB\u5C0D\u986F\u793A\u5668\u7684SPI\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u50B3\u8F38\u5B8C\u6210\u6642\uFF0CSPI\u50B3\u8F38\u5B8C\u6210\u8655\u7406\u51FD\u6578\u547C\u53EB\u53E6\u4E00\u500B\u51FD\u6578\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-11}",
    "{11-11}": true
  }), `void HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *hspi)
{
    UNUSED(hspi);
    LCD_CS_HIGH();
    isTransmittingData = 0;

    //Change to SPI datasize to 8 bit from 16 bit
    heval_Spi.Instance->CR2 &= ~(SPI_DATASIZE_16BIT - SPI_DATASIZE_8BIT);

    //signal transfer complete
    LCDManager_TransferComplete();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCDManager_TransferComplete\u51FD\u6578\u767C\u8D77\u65B0\u7684\u50B3\u8F38\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3,16-16}",
    "{3-3,16-16}": true
  }), `void LCDManager_TransferComplete()
{
    touchgfx::startNewTransfer();
}

void startNewTransfer()
{
    FrameBufferAllocator* fba = HAL::getInstance()->getFrameBufferAllocator();
    fba->freeBlockAfterTransfer();
    blockIsTransferred = true;

    if (fba->hasBlockReadyForTransfer())
    {
        touchgfx::Rect r;
        const uint8_t* pixels = fba->getBlockForTransfer(r);
        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7D50\u8AD6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u6587\u4E2D\uFF0C\u6211\u5011\u8A0E\u8AD6\u4E86\u5C0D\u65BC\u986F\u793A\u5668\u5177\u6709\u96C6\u6210\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4\u7684\u5E73\u81FA\u800C\u8A00\uFF0C\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565\u5982\u4F55\u964D\u4F4E\u5176\u5B58\u5132\u7A7A\u9593\u8981\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u914D\u7F6E\u548C\u8A2D\u7F6E\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u7684\u65B9\u6CD5\u5728\u6240\u6709\u5E73\u81FA\u4E0A\u90FD\u662F\u4E00\u6A23\u7684\uFF0C\u4F46\u5411\u986F\u793A\u5668\u767C\u9001\u584A\u5167\u5BB9\u7684\u65B9\u6CD5\u4E26\u4E0D\u76F8\u540C\u3002 \u6211\u5011\u770B\u5230\uFF0C\u5C0D\u65BC\u57FA\u65BCLTDC/DSI\u7684\u5E73\u81FA\uFF08STM32L4R9-DISCO\uFF09\uFF0C\u6211\u5011\u80FD\u5920\u91CD\u65B0\u914D\u7F6ELTDC\u5C64\uFF0C\u4EE5\u4F7F\u4E0B\u4E00\u500B\u584A\u9069\u5408\u901A\u904EDSI\u9032\u884C\u50B3\u8F38\uFF0C\u800C\u5728\u6C92\u6709LCD\u63A7\u5236\u5668\uFF08STM32G071\uFF09\u7684\u5E73\u81FA\u4E0A\uFF0C\u6211\u5011\u80FD\u5920\u4F7F\u7528SPI\u5411\u986F\u793A\u5668\u767C\u9001\u584A\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);