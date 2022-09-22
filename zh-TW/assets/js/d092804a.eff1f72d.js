"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4816],{

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

/***/ 22059:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "framebuffer",
  title: "\u5F71\u50CF\u7DE9\u885D\u5340"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/framebuffer",
  "id": "basic-concepts/framebuffer",
  "title": "\u5F71\u50CF\u7DE9\u885D\u5340",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/framebuffer",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "framebuffer",
    "title": "\u5F71\u50CF\u7DE9\u885D\u5340"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8272\u5F69\u683C\u5F0F",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/color-formats"
  },
  "next": {
    "title": "\u5716\u5F62\u5F15\u64CE",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/graphics-engine"
  }
};
const assets = {};



const toc = [{
  value: "\u984F\u8272",
  id: "colors",
  level: 2
}, {
  value: "Display",
  id: "display",
  level: 2
}, {
  value: "\u5F71\u50CF\u7DE9\u885D\u7684\u4F4D\u7F6E",
  id: "location-of-framebuffer",
  level: 2
}, {
  value: "\u5167\u90E8RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "\u5916\u90E8RAM",
  id: "external-ram",
  level: 3
}, {
  value: "\u5177\u6709\u5D4C\u5165\u5F0FRAM\u7684\u986F\u793A\u5668",
  id: "display-with-embedded-ram",
  level: 3
}, {
  value: "\u5F71\u50CF\u7DE9\u885D\u7684\u6578\u91CF",
  id: "amount-of-framebuffers",
  level: 2
}, {
  value: "\u4E00\u500B\u5F71\u50CF\u7DE9\u885D",
  id: "one-framebuffer",
  level: 3
}, {
  value: "\u591A\u65BC\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D",
  id: "more-than-one-framebuffer",
  level: 3
}, {
  value: "\u5C11\u65BC\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D",
  id: "less-than-one-framebuffer",
  level: 3
}, {
  value: "\u5132\u5B58\u7A7A\u9593\u6D88\u8017",
  id: "memory-consumption",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u662F\u8A18\u61B6\u9AD4\u7684\u4E00\u90E8\u5206\uFF0C\u5716\u5F62\u5F15\u64CE\u901A\u904E\u66F4\u65B0\u5F71\u50CF\u7DE9\u885D\uFF0C\u5C07\u8981\u5728\u986F\u793A\u5668\u4E0A\u986F\u793A\u7684\u4E0B\u4E00\u5E45\u5716\u50CF\u5305\u542B\u9032\u4F86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E40\u7DE9\u885D\u662FRAM\u7684\u4E00\u500B\u9023\u7E8C\u90E8\u5206\uFF0C\u5177\u6709\u6307\u5B9A\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-contiguous-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u5177\u6709\u76F8\u61C9\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002 \u56E0\u6B64\uFF0C\u6211\u5011\u901A\u5E38\u5C07\u5F71\u50CF\u7DE9\u885D\u8996\u70BA\u8A18\u61B6\u9AD4\u7684\u4E00\u500B\u4E8C\u7DAD\u90E8\u5206\uFF0C\u53EF\u901A\u904Ex\u3001y\u5EA7\u6A19\u6AA2\u7D22\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-2d-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u4E8C\u7DAD\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u5177\u6709\u76F8\u61C9\u7684\u8272\u5F69\u683C\u5F0F\u3002 \u5F71\u50CF\u7DE9\u885D\u4E2D\u7684\u6BCF\u500B\u689D\u76EE\u90FD\u662F\u8A72\u8272\u5F69\u683C\u5F0F\u4E0B\u7684\u8272\u5F69\u3002 \u6211\u5011\u5C07\u5F71\u50CF\u7DE9\u885D\u4E2D\u7684\u6BCF\u4E00\u500B\u9019\u6A23\u7684\u689D\u76EE\u7A31\u70BA\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u8A08\u7B97\u5F71\u50CF\u7DE9\u885D\u4E2D\u50CF\u7D20\u7684\u5132\u5B58\u4F4D\u5740\u548C\u66F4\u65B0\u5B58\u5132\u7684\u8272\u5F69\uFF0C\u53EF\u4EE5\u66F4\u65B0\u5F71\u50CF\u7DE9\u885D\u4E2D\u4F4D\u7F6E x,y \u8655\u7684\u50CF\u7D20\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = newColor;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u6A23\u5730\uFF0C\u6211\u5011\u53EF\u4EE5\u7372\u53D6\u5F71\u50CF\u7DE9\u885D\u4E2D\u50CF\u7D20\u7684\u8272\u5F69\u4E26\u7528\u5728\u8A08\u7B97\u4E2D\u3002 \u4F8B\u5982\uFF0C\u6697\u5316\u5F71\u50CF\u7DE9\u885D\u4E2D\u50CF\u7D20\u7684\u8272\u5F69\uFF08\u5047\u8A2D\u6709`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u6697\u5316`), `\u51FD\u6578\u53EF\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u5F71\u50CF\u7DE9\u885D\u8A18\u61B6\u9AD4\uFF0C\u901A\u5E38\u4E0D\u6703\u5982\u524D\u6587\u6240\u8FF0\u9010\u4E00\u8B80\u5BEB\u50CF\u7D20\uFF0C\u800C\u662F\u5229\u7528\u7CFB\u7D71\u7684\u5E95\u5C64\u786C\u9AD4\u529F\u80FD\uFF08\u5982Chrom-ART DMA\uFF09\u9032\u884C\u8B80\u5BEB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "colors"
  }), `\u984F\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u5F71\u50CF\u7DE9\u885D\u7684\u50CF\u7D20\u8272\u5F69\u683C\u5F0F\u53EF\u4EE5\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7070\u5EA6`), `1\u30012\u62164\u4F4D\u5143\u6BCF\u50CF\u7D20\uFF08bpp\uFF09\u7070\u5EA6\uFF0C\u6216\u8005`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9AD8\u6216\u771F\u5F69`), `16\u300124\u621632 bpp\u8272\u5F69`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u500B\u50CF\u7D20\u4F7F\u7528\u7684\u4F4D\u5143\u6578\u8D8A\u591A\uFF0C\u5F71\u50CF\u7DE9\u885D\u80FD\u5920\u5448\u73FE\u7684\u984F\u8272\u5C31\u8D8A\u6E05\u6670\uFF0C\u6B64\u5916\uFF0C\u6BCF\u500B\u50CF\u7D20\u4F7F\u7528\u7684\u4F4D\u5143\u6578\u8D8A\u591A\uFF0C\u5F71\u50CF\u7DE9\u885D\u6D88\u8017\u7684\u5132\u5B58\u7A7A\u9593\u5C31\u8D8A\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `Display`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u7684\u5167\u5BB9\u6700\u7D42\u6703\u88AB\u50B3\u8F38\u4E26\u986F\u793A\u5728\u986F\u793A\u5668\u4E0A\u3002 \u56E0\u6B64\uFF0C\u5F71\u50CF\u7DE9\u885D\u8207\u986F\u793A\u5668\u7684\u50CF\u7D20\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u76F8\u540C\u662F\u5341\u5206\u5E38\u898B\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/display-and-framebuffer.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "24 bpp\u5F71\u50CF\u7DE9\u885D\u5167\u5BB9\u548C\u986F\u793A\u5668\u986F\u793A\u5167\u5BB9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C3\u898B\u95DC\u65BC", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u986F\u793A\u5668\u6280\u8853"), "\u7684\u90E8\u5206\u77AD\u89E3\u4E0D\u540C\u986F\u793A\u5668\u985E\u578B\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "location-of-framebuffer"
  }), `\u5F71\u50CF\u7DE9\u885D\u7684\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u500B\u57FA\u65BC\u5FAE\u63A7\u5236\u5668\u7684\u7E6A\u5716\u7CFB\u7D71\u7684\u7C21\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/simplified-graphics-system.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, "\u7E6A\u5716\u7CFB\u7D71\u7C21\u5716"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u53EF\u4EE5\u4F4D\u65BCMCU\u6216\u5916\u90E8RAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-placement.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u5F71\u50CF\u7DE9\u885D\u7684\u53EF\u80FD\u4F4D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u500B\u53EF\u80FD\u4F4D\u7F6E\u90FD\u5177\u6709\u6F5B\u5728\u7684\u512A\u52E2\u548C\u4E0D\u8DB3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5167\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5F71\u50CF\u7DE9\u885D\u4F4D\u65BCMCU\u5167\u90E8\u7684RAM\u4E2D\uFF0C\u5C0D\u5F71\u50CF\u7DE9\u885D\u7684\u8B80\u548C\u5BEB\u5B58\u53D6\u6703\u76E1\u53EF\u80FD\u5FEB\u5730\u5B8C\u6210\u3002 \u9019\u610F\u5473\u8457TouchGFX\u61C9\u7528\u7684\u904B\u884C\u6703\u76E1\u53EF\u80FD\u5E73\u7A69\u3002 \u53CD\u904E\u4F86\uFF0C\u5167\u90E8RAM\u662F\u5341\u5206\u7A00\u5C11\u7684\u8CC7\u6E90\uFF0C\u88AB\u7CFB\u7D71\u7684\u8A31\u591A\u5143\u4EF6\u4F7F\u7528\uFF0C\u56E0\u6B64\uFF0C\u5F71\u50CF\u7DE9\u885D\u5927\u91CF\u4F54\u7528\u5167\u90E8RAM\u4E5F\u4E0D\u53EF\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u53EF\u884C\uFF0C\u7531\u65BC\u7121\u9700\u984D\u5916\u7684RAM\uFF0C\u5728\u5167\u90E8RAM\u4E2D\u63D0\u4F9B\u5F71\u50CF\u7DE9\u885D\u53EF\u4EE5\u964D\u4F4E\u7CFB\u7D71\u7684\u7E3D\u9AD4\u6210\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-ram"
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u7CFB\u7D71\u6709\u5916\u90E8RAM\uFF0C\u53EF\u4EE5\u9078\u64C7\u5728\u5916\u90E8RAM\u800C\u4E0D\u662F\u5167\u90E8RAM\u4E2D\u63D0\u4F9B\u5F71\u50CF\u7DE9\u885D\u3002 \u5C0D\u5916\u90E8RAM\u7684\u8B80\u548C\u5BEB\u5B58\u53D6\u901A\u5E38\u6703\u6BD4\u5167\u90E8RAM\u6162\uFF0C\u4F46\u5916\u90E8RAM\u7684\u7A7A\u9593\u91CF\u901A\u5E38\u5927\u5F97\u591A\u3002 \u56E0\u6B64\uFF0C\u6709\u6642\u5019\u9019\u662F\u552F\u4E00\u53EF\u884C\u7684\u89E3\u6C7A\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\u53EF\u80FD\u5177\u6709\u4E00\u4E9B\u529F\u80FD\uFF08\u5982\u5FEB\u53D6\u8A18\u61B6\u9AD4\uFF09\uFF0C\u53EF\u52A0\u5FEB\u5916\u90E8RAM\u7684\u5B58\u53D6\u901F\u5EA6\u3002 \u53C3\u898B\u95DC\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/hardware-selection/hardware-components/hardware-selection-mcu"
  }), `MCU`), `\u7684\u90E8\u5206\u77AD\u89E3\u8A73\u7D30\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-with-embedded-ram"
  }), `\u5177\u6709\u5D4C\u5165\u5F0FRAM\u7684\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u4E0A\u53EF\u80FD\u5D4C\u5165\u4E86\u8A18\u61B6\u9AD4\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u7CFB\u7D71\u4E2D\u986F\u793A\u5668\u7684\u985E\u578B\u3002 \u6B64\u8A18\u61B6\u9AD4\u5132\u5B58\u986F\u793A\u5668\u201C\u5BE6\u969B\u201D\u50CF\u7D20\u7684\u5167\u5BB9\u3002 \u986F\u793A\u5668\u4E2D\u6709\u6B64\u50CF\u7D20\u8A18\u61B6\u9AD4\uFF0C\u610F\u5473\u8457\u5728\u986F\u793A\u5668\u4ECD\u6D3B\u52D5\u6642\uFF0CMCU\u53EF\u80FD\u8655\u65BC\u7A7A\u9592\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u986F\u793A\u5668\u8A18\u61B6\u9AD4\u4E26\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\uFF0C\u65E2\u4E0D\u6253\u7B97\u4E5F\u4E0D\u9069\u5408\u7528\u65BC\u50CF\u7D20\u7684\u96A8\u6A5F\u8B80\u53D6\u6216\u5BEB\u5165\uFF0C\u56E0\u6B64\u4E0D\u53EF\u80FD\u5728\u986F\u793A\u5668RAM\u4E2D\u63D0\u4F9BTouchGFX\u5F71\u50CF\u7DE9\u885D\u3002 \u76F8\u53CD\uFF0CTouchGFX\u5C07\u5F71\u50CF\u7DE9\u885D\u7F6E\u65BC\u5167\u90E8\u6216\u5916\u90E8RAM\u4E2D\uFF0C\u4E26\u5728\u9069\u7576\u7684\u6642\u5019\u5C07\u5176\u50B3\u8F38\u5230\u986F\u793A\u5668RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "amount-of-framebuffers"
  }), `\u5F71\u50CF\u7DE9\u885D\u7684\u6578\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u53EF\u5728\u61C9\u7528\u4E2D\u4F7F\u7528\u4E00\u500B\u3001\u591A\u500B\u6216\u5C11\u65BC\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D\u3002 \u5F71\u50CF\u7DE9\u885D\u7684\u6578\u91CF\u6703\u5F71\u97FF\u61C9\u7528\u7684\u8996\u89BA\u4E0A\u7684\u8868\u73FE\u3001\u6027\u80FD\u548C\u5132\u5B58\u7A7A\u9593\u6D88\u8017\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `\u4E00\u500B\u5F71\u50CF\u7DE9\u885D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u8DB3\u4EE5\u5B8C\u5168\u5BB9\u7D0D\u8981\u50B3\u8F38\u5230\u986F\u793A\u5668\u7684\u6240\u6709\u50CF\u7D20\u3002 \u7576\u958B\u767C\u677F\u4E0A\u6C92\u6709\u986F\u793A\u5668RAM\u6642\uFF0C\u9700\u8981\uFF08\u81F3\u5C11\uFF09\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u5982\u679C\u6240\u986F\u793A\u5716\u5F62\u7684\u8907\u96DC\u5EA6\u4E0D\u6703\u7522\u751F\u4EFB\u4F55\u8996\u89BA\u5931\u771F\uFF0C\u5247\u53EA\u9700\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "more-than-one-framebuffer"
  }), `\u591A\u65BC\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u5177\u6709\u591A\u500B\u5F71\u50CF\u7DE9\u885D\u8868\u793A\u6709\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u3002 \u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u7528\u65BC\u5BEB\u5165\u4E0B\u4E00\u5E45\u5716\u50CF\uFF0C\u53E6\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u7528\u65BC\u5C07\u5716\u50CF\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u9019\u610F\u5473\u8457\u4E0D\u6703\u767C\u751F\u5931\u771F\uFF08\u5982\u6495\u88C2\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "less-than-one-framebuffer"
  }), `\u5C11\u65BC\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C11\u65BC\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D\u901A\u5E38\u610F\u5473\u8457`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6D88\u8017\u7684\u5132\u5B58\u7A7A\u9593\u8F03\u5C11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u57F7\u884C\u66F4\u591A\u7E6A\u88FD\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9700\u8981\u5411\u986F\u793A\u5668\u50B3\u8F38\u66F4\u591A\u5167\u5BB9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u4E0D\u8DB3\u4E00\u500B\u7684\u5F71\u50CF\u7DE9\u885D\u8868\u793A\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u3002 \u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u65B9\u6848\u53EA\u9069\u7528\u65BC\u5177\u6709\u986F\u793A\u5668RAM\u7684\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-consumption"
  }), `\u5132\u5B58\u7A7A\u9593\u6D88\u8017`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u4E2D\u7684\u8272\u5F69\u6578\u91CF\u548C\u50CF\u7D20\u6578\u91CF\u6C7A\u5B9A\u4E86\u5F71\u50CF\u7DE9\u885D\u6D88\u8017\u7684\u5132\u5B58\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u4F7F\u7528\u7684\u5132\u5B58\u7A7A\u9593\u901A\u5E38\u70BA \u5BEC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, ` \u9AD8 `), ` \u4EE5\u4F4D\u5143\u6578\u8A08\u7684\u8272\u6DF1 / 8 \u4F4D\u5143\u7D44\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u89E3\u6790\u5EA6\uFF08\u50CF\u7D20\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u8272\u5F69\uFF08bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u8A08\u7B97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u6D88\u8017\u7684\u5132\u5B58\u7A7A\u9593\uFF08\u4F4D\u5143\u7D44\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `800x480`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `16 bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, ` 480 `), ` 16 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `768.000 B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `480x272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `24 bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `480 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, ` 272 `), ` 24 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `391.680 B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `100x100`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `8 bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `100 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, ` 100 `), `  8 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `10.000 B`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5177\u6709\u4E00\u500B\u4EE5\u4E0A\u7684\u5F71\u50CF\u7DE9\u885D\u6642\uFF0C\u6D88\u8017\u7684\u5B58\u5132\u7A7A\u9593\u76F8\u5C0D\u5730\u8F03\u5927\u3002 \u4F8B\u5982\uFF0C\u7576\u4F7F\u7528\u96D9\u91CD\u5F71\u50CF\u7DE9\u885D\u65B9\u6848\u6642\uFF0C\u4F7F\u7528\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u6703\u6D88\u8017\u5169\u500D\u7684\u5132\u5B58\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5F71\u50CF\u7DE9\u885D\u4E0D\u8DB3\u4E00\u500B\u6642\uFF0C\u7531\u61C9\u7528\u660E\u78BA\u5730\u5206\u914D\u548C\u63A7\u5236\u5B58\u5132\u7A7A\u9593\u7684\u91CF\u3002 \u56E0\u6B64\uFF0C\u5B58\u5132\u7A7A\u9593\u7684\u6D88\u8017\u91CF\u662F\u5B8C\u5168\u53EF\u5B9A\u5236\u7684\uFF0C\u4F46\u61C9\u6CE8\u610F\u7684\u662F\uFF0C\u4F7F\u7528\u91CF\u904E\u5C11\u6703\u5F71\u97FF\u6574\u9AD4\u5716\u5F62\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",
    mdxType: "Link"
  }, "LTDC"), "\u986F\u793A\u5668\u63A7\u5236\u5668\u6587\u4EF6\u63D0\u4F9B\u4E86\u95DC\u65BC\u5F71\u50CF\u7DE9\u885D\u7684\u66F4\u591A\u8CC7\u8A0A")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);