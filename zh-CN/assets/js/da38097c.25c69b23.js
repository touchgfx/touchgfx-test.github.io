"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1077],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 3265:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31217);
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
  id: "canvas-widgets",
  title: "\u753B\u5E03\u63A7\u4EF6"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/canvas-widgets",
  "id": "development/ui-development/touchgfx-engine-features/canvas-widgets",
  "title": "\u753B\u5E03\u63A7\u4EF6",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/canvas-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/canvas-widgets",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/canvas-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-widgets",
    "title": "\u753B\u5E03\u63A7\u4EF6"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u81EA\u5B9A\u4E49\u63A7\u4EF6",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-widgets"
  },
  "next": {
    "title": "\u52A8\u6001\u4F4D\u56FE",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  }
};
const assets = {};



const toc = [{
  value: "Using Canvas Widgets",
  id: "using-canvaswidgets",
  level: 2
}, {
  value: "\u5B58\u50A8\u7A7A\u95F4\u5206\u914D\u548C\u4F7F\u7528",
  id: "memory-allocation-and-usage",
  level: 2
}, {
  value: "TouchGFX Designer\u4E2D\u7684\u5B58\u50A8\u7A7A\u95F4\u5206\u914D",
  id: "memory-allocation-in-touchgfx-designer",
  level: 3
}, {
  value: "\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u5B58\u50A8\u7A7A\u95F4\u5206\u914D",
  id: "memory-allocation-in-user-code",
  level: 3
}, {
  value: "CWR\u5750\u6807\u7CFB",
  id: "the-cwr-coordinate-system",
  level: 2
}, {
  value: "\u81EA\u5B9A\u4E49\u753B\u5E03\u63A7\u4EF6",
  id: "custom-canvas-widgets",
  level: 2
}, {
  value: "Painter",
  id: "painters-painters",
  level: 2
}, {
  value: "Painter classes",
  id: "painters-classes",
  level: 3
}, {
  value: "Tiled bitmaps",
  id: "painters-tiled",
  level: 3
}, {
  value: "\u5B9A\u5236\u7ED8\u56FE\u5668",
  id: "custom-painters",
  level: 2
}, {
  value: "Color painters",
  id: "painters-color",
  level: 3
}, {
  value: "Changing the framebuffer",
  id: "painters-framebuffer",
  level: 3
}, {
  value: "Custom Containers on rotated displays",
  id: "painters-custom",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u63A7\u4EF6\u548C\u753B\u5E03\u63A7\u4EF6\u6E32\u67D3\u5668\u662F\u5F3A\u5927\u7684\u591A\u529F\u80FDTouchGFX\u63D2\u4EF6\uFF0C\u5728\u4F7F\u7528\u76F8\u5BF9\u8F83\u5C0F\u7684\u5B58\u50A8\u7A7A\u95F4\u7684\u540C\u65F6\u4FDD\u6301\u9AD8\u6027\u80FD\uFF0C\u53EF\u63D0\u4F9B\u5E73\u6ED1\u3001\u6297\u952F\u9F7F\u6548\u679C\u826F\u597D\u7684\u51E0\u4F55\u56FE\u5F62\u7ED8\u5236\u3002 \u4F46\u662F\uFF0C\u6E32\u67D3\u51E0\u4F55\u56FE\u5F62\u5FC5\u7136\u662F\u6210\u672C\u975E\u5E38\u9AD8\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u4F7F\u7528\u4E0D\u5C0F\u5FC3\uFF0C\u5F88\u5BB9\u6613\u5BF9\u5FAE\u63A7\u5236\u5668\u8D44\u6E90\u9020\u6210\u6D6A\u8D39\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u63A7\u4EF6\u6E32\u67D3\u5668\uFF08Canvas Widget Renderer\uFF0C\u4EE5\u4E0B\u7B80\u79F0CWR\uFF09\u662F\u4E00\u79CD\u901A\u7528\u56FE\u5F62API\uFF0C\u4E3A\u56FE\u5143\u63D0\u4F9B\u4F18\u5316\u7ED8\u5236\uFF0C\u81EA\u52A8\u6D88\u9664\u6700\u591A\u4F59\u7684\u7ED8\u5236\u3002 TouchGFX\u4F7F\u7528CWR\u53EF\u7ED8\u5236\u590D\u6742\u7684\u51E0\u4F55\u56FE\u5F62\u3002 \u901A\u8FC7\u753B\u5E03\u63A7\u4EF6\uFF08Canvas Widget\uFF09\u5B9A\u4E49\u51E0\u4F55\u56FE\u5F62\u3002 TouchGFX\u652F\u6301\u8BB8\u591A\u753B\u5E03\u63A7\u4EF6\uFF0C\u4F46\u662F\u5C31\u50CF\u666E\u901A\u63A7\u4EF6\u4E00\u6837\uFF0C\u60A8\u53EF\u4EE5\u521B\u81EA\u5B9A\u4E49\u753B\u5E03\u63A7\u4EF6\u6765\u6EE1\u8DB3\u60A8\u7684\u9700\u6C42\u3002 \u753B\u5E03\u63A7\u4EF6\u5B9A\u4E49\u8981\u901A\u8FC7CWR\u7ED8\u5236\u7684\u56FE\u5F62\u7684\u51E0\u4F55\u5F62\u72B6\uFF0C\u800C\u56FE\u5F62\u4E2D\u6BCF\u4E2A\u50CF\u7D20\u7684\u5B9E\u9645\u989C\u8272\u5219\u7531\u76F8\u5173Painter\u7C7B\u5B9A\u4E49\u3002 \u540C\u6837\u5730\uFF0CTouchGFX\u81EA\u5E26\u8BB8\u591APainter\uFF0C\u4F46\u662F\u60A8\u4E5F\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49Painter\u6765\u6EE1\u8DB3\u60A8\u7684\u9700\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-canvaswidgets"
  }), `Using Canvas Widgets`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u5176\u4ED6\u63A7\u4EF6\u7684\u5927\u5C0F\u662F\u81EA\u52A8\u8BBE\u7F6E\u7684\u3002 \u4F8B\u5982\uFF0C\u53EF\u4EE5\u81EA\u52A8\u83B7\u53D6\u4F4D\u56FE\u63A7\u4EF6\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002 \u56E0\u6B64\uFF0C\u5728\u4F4D\u56FE\u63A7\u4EF6\u4E0A\u4F7F\u7528 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setXY()`), ` \u5C06\u4F4D\u56FE\u653E\u7F6E\u5728\u663E\u793A\u5668\u4E0A\u5C31\u8DB3\u591F\u4E86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u63A7\u4EF6\u6CA1\u6709\u9ED8\u8BA4\u5927\u5C0F\uFF0C\u5176\u503C\u65E2\u53EF\u4EE5\u81EA\u52A8\u786E\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u4E00\u5F00\u59CB\u5C31\u8BBE\u7F6E\u3002 \u4E0D\u4EC5\u8981\u6CE8\u610F\u4F4D\u7F6E\uFF0C\u8FD8\u8981\u6B63\u786E\u5730\u786E\u5B9A\u63A7\u4EF6\u7684\u5927\u5C0F\uFF0C\u5426\u5219\u753B\u5E03\u63A7\u4EF6\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5C06\u4E3A\u96F6\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5728\u663E\u793A\u5668\u4E0A\u7ED8\u5236\u4EFB\u4F55\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u4E0D\u8981\u4F7F\u7528 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setXY()`), `\uFF0C\u800C\u662F\u4F7F\u7528 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setPosition()`), ` \u6765\u653E\u7F6E\u548C\u8C03\u6574\u753B\u5E03\u63A7\u4EF6\u7684\u5927\u5C0F\u3002 \u5173\u4E8E\u5982\u4F55\u521B\u5EFA\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u753B\u5E03\u63A7\u4EF6\u7684\u793A\u4F8B\u53E6\u8BF7\u53C2\u89C1\u4E0B\u6587Custom Canvas Widget\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BBE\u7F6E\u4E86\u753B\u5E03\u7A7A\u95F4\u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\u540E\uFF0C\u53EF\u4EE5\u5728\u5176\u5185\u90E8\u7ED8\u5236\u51E0\u4F55\u56FE\u5F62\u3002 \u5750\u6807\u7CFB\u5C06\u4F7F (0, 0) \u4F4D\u4E8E\u5C0F\u90E8\u4EF6\uFF08\u4E0D\u662F\u663E\u793A\u5668\uFF09\u7684\u5DE6\u4E0A\u89D2\uFF0CX\u8F74\u5411\u53F3\u5EF6\u4F38\u4E14Y\u8F74\u5411\u4E0B\u5EF6\u4F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u8BBE\u8BA1\u5668\u4E5F\u652F\u6301\u201C\u753B\u5E03\u63A7\u4EF6\uFF08Canvas Widget\uFF09\u201D\uFF0C\u8BA9\u4F7F\u7528\u53D8\u5F97\u7B80\u5355\uFF0C\u53EF\u81EA\u52A8\u8BA1\u7B97\u5185\u5B58\u9700\u6C42\u548C\u81EA\u52A8\u5206\u914D\u5185\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Available Canvas Widgets in the TouchGFX Designer:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/line"
  }), `Line`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/circle"
  }), `Circle`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/shape"
  }), `Shape`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/progress-indicators/line-progress"
  }), `Line Progress`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/progress-indicators/circle-progress"
  }), `Circle Progress`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7TouchGFX Designer\u4F7F\u7528\u8FD9\u4E9B\u63A7\u4EF6\u65F6\uFF0C\u53EF\u901A\u8FC7\u663E\u793A\u63A7\u4EF6\u5728\u8FD0\u884C\u65F6\u7684\u72B6\u6001\uFF0C\u4F7F\u5F97\u653E\u7F6E\u548C\u5927\u5C0F\u8C03\u6574\u975E\u5E38\u7B80\u5355\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-allocation-and-usage"
  }), `\u5B58\u50A8\u7A7A\u95F4\u5206\u914D\u548C\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u751F\u6210\u53CD\u952F\u9F7F\u6548\u679C\u826F\u597D\u7684\u590D\u6742\u51E0\u4F55\u56FE\u5F62\uFF0C\u9700\u8981\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\u3002 \u4E3A\u6B64\uFF0CCWR\u5FC5\u987B\u5177\u6709\u4E13\u95E8\u5206\u914D\u7684\u5B58\u50A8\u7F13\u51B2\u533A\uFF0C\u4EE5\u4FBF\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u3002 CWR\u4E0ETouchGFX\u7684\u5176\u4F59\u90E8\u5206\u4E00\u6837\uFF0C\u6CA1\u6709\u52A8\u6001\u5B58\u50A8\u7A7A\u95F4\u5206\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-allocation-in-touchgfx-designer"
  }), `TouchGFX Designer\u4E2D\u7684\u5B58\u50A8\u7A7A\u95F4\u5206\u914D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5411\u5C4F\u5E55\u7684\u753B\u5E03\u6DFB\u52A0\u63A7\u4EF6\u65F6\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210\u5B58\u50A8\u7F13\u51B2\u533A\u3002 \u7F13\u51B2\u533A\u5927\u5C0F\u57FA\u4E8E\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u5BBD\u5EA6 `, `\xD7`, ` 3) `, `\xD7`, ` 5\u3002 \u4F46\u662F\uFF0C\u8FD9\u5E76\u975E\u6240\u6709\u60C5\u51B5\u4E0B\u7684\u7406\u60F3\u7F13\u51B2\u533A\u5927\u5C0F\u3002 \u56E0\u6B64\uFF0C\u53EF\u4EE5\u91CD\u5199\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/screen-canvas-buffer-override-4.17.png",
    mdxType: "Figure"
  }, "\u5728\u5C4F\u5E55\u5C5E\u6027\u4E2D\u91CD\u5199\u753B\u5E03\u7F13\u51B2\u533A\u5927\u5C0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-allocation-in-user-code"
  }), `\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u5B58\u50A8\u7A7A\u95F4\u5206\u914D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The TouchGFX Designer only allocates a memory buffer for screens that uses Canvas Widgets in the Designer. If you add Canvas Widgets in user code in a screen that does not have Canvas Widgets in the Designer you must manually setup a buffer. It is recommended to do this in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen::setupScreen`), ` method.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Add this to your Screen class definition as private members:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `private:
  static const uint16_t CANVAS_BUFFER_SIZE = 3600;
  static uint8_t canvasBuffer[CANVAS_BUFFER_SIZE]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Then in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` method of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ScreenView.cpp`), ` the following line setting up the buffer can be added.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenView::setupScreen()
{
    ...
    CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9700\u8981\u7684CWR\u5B58\u50A8\u7A7A\u95F4\u7684\u91CF\u53D6\u51B3\u4E8E\u8981\u5728\u5E94\u7528\u4E2D\u7ED8\u5236\u7684\u6700\u5927\u56FE\u5F62\u5927\u5C0F\u3002 \u4F46\u662F\uFF0C\u60A8\u53EF\u4EE5\u4FDD\u7559\u6BD4\u6700\u590D\u6742\u5F62\u72B6\u6240\u9700\u5185\u5B58\u7A7A\u95F4\u66F4\u5C11\u7684\u5185\u5B58\u3002 \u4E3A\u4E86\u5E94\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0CCWR\u5C06\u56FE\u5F62\u7ED8\u5236\u5206\u5272\u6210\u8F83\u5C0F\u7684\u5E27\u7F13\u51B2\u533A\u90E8\u5206\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u7531\u4E8E\u6709\u65F6\u9700\u8981\u4E0D\u6B62\u4E00\u6B21\u5730\u6E32\u67D3\u56FE\u50CF\uFF0C\u56E0\u6B64\u6E32\u67D3\u65F6\u95F4\u7A0D\u957F\u3002 \u5728\u6A21\u62DF\u5668\u6A21\u5F0F\u4E0B\u8FD0\u884C\u65F6\uFF0C\u53EF\u4EE5\u66F4\u7EC6\u81F4\u5730\u67E5\u770B\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017\u5E76\u8FDB\u884C\u5FAE\u8C03\u3002 \u53EA\u9700\u5411main.cpp\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u51FD\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `CanvasWidgetRenderer::setWriteMemoryUsageReport(true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u65E0\u8BBA\u7ED8\u5236\u64CD\u4F5C\u4F55\u65F6\u7ED3\u675F\uFF0CCWR\u90FD\u5C06\u62A5\u544A\uFF08\u5728\u63A7\u5236\u53F0\u4E0A\u6253\u5370\uFF09\u6240\u9700\u5B58\u50A8\u7A7A\u95F4\u7684\u5927\u5C0F\u3002 \u5BF9\u4E8Ecanvas_widget_example\uFF0C\u53EF\u4EE5\u662F\u201CCWR\u9700\u89813604\u5B57\u8282\u201D\uFF08\u7B2C\u4E00\u4E2A\u7ED8\u5236\u64CD\u4F5C\uFF09\uFF0C\u7136\u540E\u662F\u201CCWR\u9700\u89817932\u5B57\u8282\uFF084328\u5B57\u8282\u7F3A\u5931\uFF09\u201D\uFF08\u7B2C\u4E8C\u4E2A\u7ED8\u5236\u64CD\u4F5C\uFF09\u3002 \u5C3D\u7BA1\u663E\u793ACWR\u6CA1\u6709\u8DB3\u591F\u5B58\u50A8\u7A7A\u95F4\uFF08\u672C\u4F8B\u4E2D\u4E3A4328\u5B57\u8282\u7F3A\u5931\uFF09\uFF0C\u5E94\u7528\u4ECD\u6B63\u5E38\u8FD0\u884C\u3002 \u8FD9\u662F\u56E0\u4E3ACWR\u68C0\u6D4B\u5230\u53EF\u7528\u4E8E\u5B8C\u6210\u4E00\u6B21\u8FD0\u884C\u4E2D\u590D\u6742\u7ED8\u5236\u64CD\u4F5C\u7684\u5B58\u50A8\u7A7A\u95F4\u592A\u5C11\u3002 \u4E3A\u6B64\uFF0C\u5B83\u5C06\u7ED8\u5236\u64CD\u4F5C\u5206\u5272\u6210\u4E24\u9879\u72EC\u7ACB\u7684\u7ED8\u5236\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u7ED8\u5236\u56FE\u5F62\uFF0C\u4F46\u9700\u8981\u66F4\u591A\u65F6\u95F4\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u8BBE\u7F6E\u6B63\u786E\u7684\u5B58\u50A8\u7F13\u51B2\u533A\u5927\u5C0F\u4EE5\u4FBF\u5728\u5B58\u50A8\u7A7A\u95F4\u4E0E\u6027\u80FD\uFF08\u6E32\u67D3\u65F6\u95F4\uFF09\u4E4B\u95F4\u53D6\u5F97\u5E73\u8861\u3002 \u597D\u7684\u8D77\u59CB\u503C\u901A\u5E38\u7EA6\u4E3A3000\uFF0C\u4F46\u4F7F\u7528\u4E0A\u8FF0\u6280\u5DE7\u901A\u5E38\u53EF\u4EE5\u786E\u5B9A\u66F4\u4F18\u503C\u3002 If the shape is too complex and the allocated memory buffer is way too small, part of the shape will not be drawn (some vertical pixel lines will be skipped) and it is possible that nothing is drawn at all. \u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6E32\u67D3\u65F6\u95F4\u90FD\u4F1A\u589E\u52A0\u8BB8\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u610F\u5473\u7740\u5982\u679C\u60A8\u5E0C\u671B\u5E94\u7528\u4EE5\u6700\u5FEB\u901F\u5EA6\u6E32\u67D3CWR\u7ED8\u56FE\uFF0C\u60A8\u9700\u8981\u6EE1\u8DB3\u5206\u914D\u8BF7\u6C42\u7684\u5B58\u50A8\u7A7A\u95F4\u5927\u5C0F\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u80FD\u591F\u63A5\u53D7\u66F4\u957F\u7684\u6E32\u67D3\u65F6\u95F4\uFF0C\u5B8C\u5168\u53EF\u4EE5\u7F29\u5C0F\u5B58\u50A8\u7F13\u51B2\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-cwr-coordinate-system"
  }), `CWR\u5750\u6807\u7CFB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u7684\u5750\u6807\u7CFB\u901A\u5E38\u7528\u4E8E\u5BFB\u5740\u50CF\u7D20\uFF0C\u4EE5\u4FBF\u5728\u663E\u793A\u5668\u4E0A\u5B9A\u4F4D\u4F4D\u56FE\u3002 \u4F4D\u56FE\u3001\u6587\u672C\u548C\u5176\u4ED6\u56FE\u5F62\u5143\u7D20\u90FD\u4F4D\u4E8E\u5750\u6807\u7CFB\u4E2D\uFF0C\u5176\u4E2D (0,0) \u662F\u5DE6\u4E0A\u89D2\u50CF\u7D20\uFF0CX\u8F74\u5411\u53F3\u5EF6\u4F38\uFF0CY\u8F74\u5411\u4E0B\u5EF6\u4F38\u3002 \u5728CWR\u4E2D\uFF0C\u80FD\u591F\u4F7F\u7528\u6574\u6570\u5BFB\u5740\u50CF\u7D20\u662F\u4E0D\u591F\u7684\uFF0C\u5C3D\u7BA1\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u5DF2\u7ECF\u8DB3\u591F\uFF0C\u5728\u4E00\u822C\u60C5\u51B5\u4E0B\u8FDC\u8FDC\u4E0D\u591F\u3002 \u4E3A\u4E86\u8BC1\u660E\u8FD9\u4E00\u70B9\uFF0C\u5047\u8BBE\u6709\u4E00\u4E2A\u7EBF\u5BBD\u4E3A1\u7684\u5706\uFF0C\u5FC5\u987B\u88AB\u7CBE\u786E\u5730\u5D4C\u5165\u4E00\u4E2A5x5\u50CF\u7D20\u7684\u65B9\u5757\u4E2D\u3002 The center of this circle must be at (2.5, 2.5) and the radius must be 2 (the line is drawn .5 out from both sides of the circumference), so fractions are required for the center coordinate. \u7C7B\u4F3C\u5730\uFF0C\u5982\u679C\u5706\u5E94\u5D4C\u5165\u4E00\u4E2A6x6\u50CF\u7D20\u7684\u65B9\u5757\uFF0C\u5219\u4E2D\u5FC3\u5FC5\u987B\u4F4D\u4E8E (3, 3)\uFF0C\u534A\u5F84\u5FC5\u987B\u662F2.5\uFF0C\u56E0\u6B64\u534A\u5F84\u9700\u4E3A\u5C0F\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u79CD\u65B0\u7684\u56FE\u5F62\u7ED8\u5236\u5750\u6807\u5BFB\u5740\u65B9\u5F0F\u610F\u5473\u7740 (0,0) \u5904\u50CF\u7D20\u7684\u4E2D\u5FC3\u7684CWR\u5750\u6807\u4E3A (0.5, 0.5)\u3002 \u56E0\u6B64\uFF0C\u5305\u542B\u5C4F\u5E55\u5DE6\u4E0A\u89D2\u50CF\u7D20\u7684\u65B9\u5757\u7684\u8F6E\u5ED3\u5982\u4E0B\uFF1A(0,0) -> (1,0) -> (1,1) -> (0,1) -> (0,0)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/cwr-coordinate-system.png",
    mdxType: "Figure"
  }, "(0,0) \u5904\u50CF\u7D20\u7684CWR\u5750\u6807\u7CFB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C3D\u7BA1\u6700\u521D\u770B\u8D77\u6765\u4EE4\u4EBA\u56F0\u60D1\uFF0C\u4F46\u5F88\u5FEB\u4F1A\u53D1\u73B0\u8FD9\u662F\u5341\u5206\u81EA\u7136\u7684\u3002 \u4F4D\u56FE\u7684\u5750\u6807\u7CFB\u5BFB\u5740\u50CF\u7D20\uFF0C\u753B\u5E03\u63A7\u4EF6\u7684\u540C\u4E00\u5750\u6807\u7CFB\u5BFB\u5740\u50CF\u7D20\u4E4B\u524D\u6709\u95F4\u9699\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Since circles are shapes that often will have to be moved half a pixel to place the center correctly, the function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Circle::setPixelCenter()`), ` will place the circle center at the center of the given pixel, i.e. half a pixel further to the right and down, compared to the coordinates specified.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-canvas-widgets"
  }), `\u81EA\u5B9A\u4E49\u753B\u5E03\u63A7\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9E\u73B0\u81EA\u5B9A\u4E49\u753B\u5E03\u63A7\u4EF6\u9700\u8981\u7528\u4E0B\u5217\u51FD\u6570\u5B9E\u73B0\u65B0\u7C7B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual bool drawCanvasWidget(const Rect& invalidatedArea) const;
virtual Rect getMinimalRect() const;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `drawCanvasWidget()`), ` \u5FC5\u987B\u7ED8\u5236\u81EA\u5B9A\u4E49\u63A7\u4EF6\u9700\u8981\u7ED8\u5236\u7684\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5E76\u4E14 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `getMinimalRect()`), ` \u5E94\u8BE5\u8FD4\u56DE Widget \u4E2D\u5305\u542B\u51E0\u4F55\u5F62\u72B6\u7684\u5B9E\u9645\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4F7F\u7528 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "getMinimalRect()"), " \u7684\u539F\u56E0\u5728\u4E8E\u53EF\u4EE5\u5728\u5176\u63A7\u4EF6\u5185\u90E8\u5230\u5904\u79FB\u52A8\u51E0\u4F55\u56FE\u5F62\uFF0C\u5E76\u4E14\u5F53\u5F62\u72B6\u53D8\u4E3A\u4EC5\u4F7F\u6700\u5C0F\u53EF\u80FD\u533A\u57DF\u65E0\u6548\u65F6\uFF0C\u6539\u53D8\u63A7\u4EF6\u7684\u5927\u5C0F\u548C\u91CD\u65B0\u5B9A\u4F4D\u63A7\u4EF6\u901A\u5E38\u90FD\u4E0D\u5207\u5B9E\u9645\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `  \u51FD\u6570 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `getMinimalRect()`), ` \u7684\u865A\u62DF\u5B9E\u73B0\u53EF\u80FD\u53EA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `\u8FD4\u56DErect;`), `\u8FD9\u662F\u63A7\u4EF6\u7684\u5927\u5C0F\uFF0C\u4F46\u8FD9\u4F1A\u5BFC\u81F4\u88AB\u753B\u5E03\u63A7\u4EF6\u8986\u76D6\u7684\u6574\u4E2A\u533A\u57DF\u7684\u91CD\u65B0\u7ED8\u5236\uFF0C\u800C\u4E0D\u53EA\u662F\u5305\u542B\u51E0\u4F55\u56FE\u5F62\u7684\u753B\u5E03\u63A7\u4EF6\u7684\u4E00\u90E8\u5206\u3002 \u51E0\u4F55\u56FE\u5F62\u901A\u5E38\u53EA\u5360\u636E\u753B\u5E03\u63A7\u4EF6\u7684\u4E00\u5C0F\u90E8\u5206\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u63A7\u4EF6\u5168\u90E8\u4F7F\u7528Canvas\u7C7B\uFF0C\u5B83\u5982\u4E0A\u6587\u6240\u8FF0\u538B\u7F29Canvas Widget Renderer\u3002 CWR\u6709\u8BB8\u591A\u81EA\u52A8\u5E94\u7528\u7684\u4F18\u5316\uFF0C\u5C3D\u7BA1\u77E5\u9053\u51E0\u4F55\u56FE\u5F62\u4E0E\u65E0\u6548\u533A\u57DF\u6709\u5173\uFF0C\u907F\u514D\u65E0\u6548\u533A\u57DF\u4E4B\u5916\u7684\u4E0D\u5FC5\u8981\u7ED8\u5236\uFF0C\u59CB\u7EC8\u662F\u4E00\u79CD\u63D0\u5347\u6027\u80FD\u7684\u597D\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u572810x10\u65B9\u5757\u5185\u90E8\u7C97\u7565\u5B9E\u73B0\u4E00\u4E2A\u83F1\u5F62\u5757\uFF0C\u65B9\u5F0F\u53EF\u80FD\u50CF\u8FD9\u6837\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/canvas/CanvasWidget.hpp>
#include <touchgfx/widgets/canvas/Canvas.hpp>

using namespace touchgfx;

class Diamond10x10 : public CanvasWidget
{
public:
  virtual Rect getMinimalRect() const
  {
    return Rect(0,0,10,10);
  }
  virtual bool drawCanvasWidget(const Rect& invalidatedArea) const
  {
    Canvas canvas(this, invalidatedArea);
    canvas.moveTo(5,0);
    canvas.lineTo(10,5);
    canvas.lineTo(5,10);
    canvas.lineTo(0,5);
    return canvas.render(); // Shape is automatically closed
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u540C\u6837\u5730\uFF0C\u6CE8\u610F ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "getMinimalRect()"), " \u8FD4\u56DE\u5230\u6B63\u786E\u77E9\u5F62\uFF0C\u5426\u5219\u5C4F\u5E55\u4E0A\u7684\u56FE\u5F62\u53EF\u80FD\u662F\u9519\u8BEF\u7684\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to see the Diamond10x10 on the display, the color must be set up by passing a Painter to the diamond. Read more about Painters in the next section. \u53E6\u5916\uFF0C\u5FC5\u987B\u6B63\u786E\u5730\u653E\u7F6EDiamond10x10\u5E76\u8C03\u6574\u5176\u5927\u5C0F\u3002 \u65B9\u5F0F\u53EF\u80FD\u50CF\u8FD9\u6837\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5934\u6587\u4EF6\u4E2D\u58F0\u660E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Diamond10x10 box;
PainterRGB565 myPainter; // For 16bpp displays
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and in the code you should have something like this in setupScreen():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myPainter.setColor(Color::getColorFromRGB(0xFF, 0x0, 0x0));
box.setPosition(100,100,10,10);
box.setPainter(myPainter);
add(box);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "painters-painters"
  }), `Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7ED8\u56FE\u5668\u5B9A\u4E49\u4E00\u4E2A\u914D\u8272\u65B9\u6848\uFF0C\u7528\u4E8E\u586B\u5145\u2018Canvas Widget\u2019\u5BF9\u8C61\uFF0C\u56E0\u6B64\u7ED8\u56FE\u5668\u9700\u8981\u4F7F\u5F62\u72B6\u53EF\u89C1\u3002 \u7ED8\u56FE\u5668\u53EF\u4EE5\u4E3A\u6240\u6709\u50CF\u7D20\u63D0\u4F9B\u5355\u4E00\u989C\u8272\uFF08\u4F8B\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PainterRGB565`), `\uFF09\uFF0C\u6216\u8005\u4ECE\u63D0\u4F9B\u7684\u4F4D\u56FE\u4E2D\u590D\u5236\u6BCF\u4E2A\u50CF\u7D20\uFF08\u4F8B\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PainterRGB565Bitmap`), `\uFF09\u3002 Since a painter writes the pixels directly to the framebuffer, the selected painter must match the format of the framebuffer or dynamic bitmap. TouchGFX\u63D0\u4F9B\u7684\u7ED8\u56FE\u5668\u9762\u5411\u6240\u6709\u652F\u6301\u7684\u663E\u793A\u5668\uFF0C\u4E13\u95E8\u7528\u4E8E\u7EAF\u8272\u6216\u4F4D\u56FE\u7ED8\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-classes"
  }), `Painter classes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following table lists the available painters in TouchGFX. When you use Canvas Widgets with the TouchGFX Designer, the Designer will select the correct painter, but if you write code yourself that uses Canvas Widgets, you must select a suitable painter.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Framebuffer format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Color Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Bitmap painters`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBWBitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565Bitmap, PainterRGB565L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888Bitmap, PainterRGB888L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888Bitmap, PainterARGB8888L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `XRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888Bitmap, PainterXRGB8888L8Bitmap`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The bitmap painters support various bitmap formats:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Supported bitmap formats`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBWBitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW, BW_RLE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565, RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565 (no transparency), RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-tiled"
  }), `Tiled bitmaps`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Painters that draw pixels from a bitmap puts the bitmap in upper left corner of the Canvas Widget. The pixels of the shape that are outside of the bitmap dimension is not drawn.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The bitmap painters can be configured to repeat the widget (tiled) to cover the whole shape.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tiling is enabled by calling the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setTiled(bool)`), ` method on your painter:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    PainterRGB888Bitmap bitmapPainter;
    ...
    bitmapPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));
    bitmapPainter.setTiled(true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tiling can not be enabled in the Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/tiled-bitmap-painters.png",
    mdxType: "Figure"
  }, "An application showing an Image, Circle with bitmap painter, and Circle with tiling bitmap painter."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-painters"
  }), `\u5B9A\u5236\u7ED8\u56FE\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Even though TouchGFX comes with a set of predefined painter classes covering most use case scenarios, custom painters can also be implemented.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this section we will give a few examples, that can be used as inspiration. The examples are for 16bpp RGB565 only. Slight modifications must be done for other framebuffer formats.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A custom painter is just a subclass of the AbstractPainter class. Painters for 16bpp (RGB565) framebuffers can use the AbstractPainterRGB565 class as superclass. Painters for 24bpp (RGB888) framebuffers can use AbstractPainterRGB888 as superclass.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `These super classes are abstract classes. The custom painter class must implement the method:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const = 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `destination`), ` points to the start position in the framebuffer (the left edge of the widget).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `offset`), ` is how many pixels from this start position to put the first pixel.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetY`), ` are the coordinates of the first pixel relative to widget (given in the framebuffer coordinate system).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `count`), ` is the number of pixels to draw with the specified `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alpha`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Canvas Widgets will call this method many times, so it is very important that the implementation of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `paint`), ` is not slow. If the Canvas Widget is not updated often, this is less important.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-color"
  }), `Color painters`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The simplest painter just writes a fixed color to the framebuffer. Here is how to implement that:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class RedPainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset; // Address of first pixel to paint
        const uint16_t* const lineend = framebuffer + count; // Address of last pixel to paint
        const uint16_t redColor565 = 0xF800;  // Full red in RGB565
        do
        {
            *framebuffer = redColor565;
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Remember to create an instance of your painter and assign it to your Canvas widget. Add a member of the painter type to your class:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Circle myCircle;
RedPainter myPainter;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and in the code you should have something like this in setupScreen():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
myCircle.setPainter(myPainter);
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/red-painter.png",
    mdxType: "Figure"
  }, "The RedPainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `RedPainter`), ` class above ignores the alpha parameter. This makes the edges harsh (no alpha-blending) as all pixels are made fully red. We can improve this with a slight code update where we use the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alpha`), ` parameter to do blending if needed:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-20}",
    "{13-20}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class AlphaRedPainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset; // Address of first pixel to paint
        const uint16_t* const lineend = framebuffer + count;
        const uint16_t redColor565 = 0xF800;  // Full red in RGB565
        do
        {
            if (alpha == 0xFF)
            {
                *framebuffer = redColor565; // Write red to framebuffer
            }
            else
            {
                *framebuffer = alphaBlend(redColor565, *framebuffer, alpha); // Blend red with the framebuffer color
            }
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alphaBlend`), ` blends two RGB565 pixels with a given alpha for the first pixel. The function is provided by the super class `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `AbstractPainterRGB565`), `. The circle now has smooth edges with this code:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/red-alpha-painter.png",
    mdxType: "Figure"
  }, "The RedAlphaPainter painting a Circle. On the right a magnified part showing alpha blending."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetX`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetY`), ` parameters can be used to restrict the drawing to certain areas. Here is for example a painter that only draws on every other horizontal line. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetY`), ` is used to control that:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-11}",
    "{8-11}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class StripePainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        if ((widgetY & 2) == 0)
        {
            return; // Do not draw anything on line 0,1, 4,5, 8,9, etc.
        }
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        if (alpha == 0xFF)
        {
            do
            {
                *framebuffer = 0xF800;
            } while (++framebuffer < lineend);
        }
        else
        {
            do
            {
                *framebuffer = alphaBlend(0xF800, *framebuffer, alpha);
            } while (++framebuffer < lineend);
        }
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter.png",
    mdxType: "Figure"
  }, "The StripePainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-framebuffer"
  }), `Changing the framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The painter in this section does not paint a specific content to the framebuffer, but changes the framebuffer to be gray-scale. It does this by reading the pixel value in the framebuffer (written by the Widgets that are in the background of the Circle), extracting the green component, using this to create a gray color (same value for red, green, blue), and writing that back to the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Many similar techniques can be developed using this principle of reading and modifying the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-14}",
    "{13-14}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
#include <touchgfx/Color.hpp>
using namespace touchgfx;
class GrayscalePainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        do
        {
            const uint8_t green = Color::getGreenFromRGB565(*framebuffer) & 0xF8; // Keep only 5 bits of the green
            const uint16_t color565 = LCD16bpp::getNativeColorFromRGB(green, green, green);
            if (alpha == 0xFF)
            {
                *framebuffer = color565;
            }
            else
            {
                *framebuffer = alphaBlend(color565, *framebuffer, alpha);
            }
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/gray-painter.png",
    mdxType: "Figure"
  }, "Original background on the left. On the right the Circle painter has changed the inner pixels in the circle to gray-scale."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-custom"
  }), `Custom Containers on rotated displays`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If your application is using a rotated display, the custom container code must take this into account, if it is using the coordinates in the painting.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here is the StripePainter used with a rotated display:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter-rotate90.png",
    mdxType: "Figure"
  }, "The StripePainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Image, text, and the Button has been rotated by the TouchGFX engine, but we see that the stripes are now perpendicular to the text, where it is supposed to parallel. The lines have not been rotated.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `The problem is that the framebuffer is not rotated, so as the painter paints in sequential addresses (pixels in the framebuffer), the lines are oriented as before (not rotated).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We can fix that by using the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetX`), ` to decide if we are painting or not. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetY`), ` parameters are given in the framebuffer coordinate system. This means that `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), ` grows when we go down on the display and corresponds to y in the display coordinate system.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{15-18,25-28}",
    "{15-18,25-28}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
#include <touchgfx/Color.hpp>
using namespace touchgfx;
class StripePainterRotate90 : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        if (alpha == 0xFF)
        {
            do
            {
                if (widgetX++ & 2)
                {
                    *framebuffer = 0xF800;
                }
            } while (++framebuffer < lineend);
        }
        else
        {
            do
            {
                if (widgetX++ & 2)
                {
                    *framebuffer = alphaBlend(0xF800, *framebuffer, alpha);
                }
            } while (++framebuffer < lineend);
        }
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The stripes are now correctly oriented:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter-rotate90-fixed.png",
    mdxType: "Figure"
  }, "The StripePainterRotate90 painting a Circle."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);