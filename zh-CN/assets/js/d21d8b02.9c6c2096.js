"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1984],{

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

/***/ 80529:
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
  title: "\u5E27\u7F13\u51B2\u533A"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/framebuffer",
  "id": "basic-concepts/framebuffer",
  "title": "\u5E27\u7F13\u51B2\u533A",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/framebuffer",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "framebuffer",
    "title": "\u5E27\u7F13\u51B2\u533A"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8272\u5F69\u683C\u5F0F",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/color-formats"
  },
  "next": {
    "title": "\u56FE\u5F62\u5F15\u64CE",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/graphics-engine"
  }
};
const assets = {};



const toc = [{
  value: "\u8272\u5F69",
  id: "colors",
  level: 2
}, {
  value: "\u663E\u793A\u5668",
  id: "display",
  level: 2
}, {
  value: "\u5E27\u7F13\u51B2\u7684\u4F4D\u7F6E",
  id: "location-of-framebuffer",
  level: 2
}, {
  value: "\u5185\u90E8RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "\u5916\u90E8RAM",
  id: "external-ram",
  level: 3
}, {
  value: "\u81EA\u5E26RAM\u7684\u663E\u793A\u5668",
  id: "display-with-embedded-ram",
  level: 3
}, {
  value: "\u5E27\u7F13\u51B2\u7684\u6570\u91CF",
  id: "amount-of-framebuffers",
  level: 2
}, {
  value: "\u4E00\u4E2A\u5E27\u7F13\u51B2",
  id: "one-framebuffer",
  level: 3
}, {
  value: "\u591A\u4E8E\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2",
  id: "more-than-one-framebuffer",
  level: 3
}, {
  value: "\u5C11\u4E8E\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2",
  id: "less-than-one-framebuffer",
  level: 3
}, {
  value: "\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u662F\u5B58\u50A8\u5668\u7684\u4E00\u90E8\u5206\uFF0C\u56FE\u5F62\u5F15\u64CE\u901A\u8FC7\u66F4\u65B0\u5E27\u7F13\u51B2\uFF0C\u5C06\u9700\u8981\u663E\u793A\u7684\u4E0B\u4E00\u5E27\u56FE\u50CF\u5305\u542B\u8FDB\u6765\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u662FRAM\u7684\u4E00\u4E2A\u8FDE\u7EED\u90E8\u5206\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8BBE\u5B9A\u5408\u9002\u7684\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-contiguous-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5E27\u7F13\u5B58\u7A7A\u95F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u5177\u6709\u76F8\u5E94\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002 \u56E0\u6B64\uFF0C\u6211\u4EEC\u901A\u5E38\u5C06\u5E27\u7F13\u51B2\u89C6\u4E3A\u5B58\u50A8\u5668\u7684\u4E00\u4E2A\u4E8C\u7EF4\u90E8\u5206\uFF0C\u53EF\u901A\u8FC7x\u3001y\u5750\u6807\u68C0\u7D22\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-2d-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "2D\u5E27\u7F13\u5B58\u7A7A\u95F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u5177\u6709\u76F8\u5E94\u7684\u8272\u5F69\u683C\u5F0F\u3002 \u5E27\u7F13\u51B2\u4E2D\u7684\u6BCF\u4E2A\u6761\u76EE\u90FD\u662F\u8BE5\u8272\u5F69\u683C\u5F0F\u4E0B\u7684\u8272\u5F69\u3002 \u6211\u4EEC\u5C06\u5E27\u7F13\u51B2\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8FD9\u6837\u7684\u6761\u76EE\u79F0\u4E3A\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u8BA1\u7B97\u5E27\u7F13\u51B2\u4E2D\u50CF\u7D20\u7684\u5B58\u50A8\u5730\u5740\u548C\u66F4\u65B0\u5B58\u50A8\u7684\u8272\u5F69\uFF0C\u53EF\u4EE5\u66F4\u65B0\u5E27\u7F13\u51B2\u4E2D\u4F4D\u7F6E x,y \u5904\u7684\u50CF\u7D20\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = newColor;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u6837\u5730\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u5E27\u7F13\u51B2\u4E2D\u50CF\u7D20\u7684\u8272\u5F69\u5E76\u7528\u5728\u8BA1\u7B97\u4E2D\u3002 \u4F8B\u5982\uFF0C\u6697\u5316\u5E27\u7F13\u51B2\u4E2D\u50CF\u7D20\u7684\u8272\u5F69\uFF08\u5047\u8BBE\u6709`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u6697\u5316`), `\u51FD\u6570\u53EF\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5E27\u7F13\u51B2\u5B58\u50A8\u5668\uFF0C\u901A\u5E38\u4E0D\u4F1A\u5982\u524D\u6587\u6240\u8FF0\u9010\u4E00\u8BFB\u5199\u50CF\u7D20\uFF0C\u800C\u662F\u5229\u7528\u7CFB\u7EDF\u7684\u5E95\u5C42\u786C\u4EF6\u529F\u80FD\uFF08\u5982Chrom-ART DMA\uFF09\u8FDB\u884C\u8BFB\u5199\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "colors"
  }), `\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u5E27\u7F13\u51B2\u7684\u50CF\u7D20\u8272\u5F69\u683C\u5F0F\u53EF\u4EE5\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7070\u5EA6`), `1\u30012\u62164\u4F4D\u6BCF\u50CF\u7D20\uFF08bpp\uFF09\u7070\u5EA6\uFF0C\u6216\u8005`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9AD8\u6216\u771F\u5F69`), `16\u300124\u621632 bpp\u8272\u5F69`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E2A\u50CF\u7D20\u4F7F\u7528\u7684\u4F4D\u6570\u8D8A\u591A\uFF0C\u5E27\u7F13\u51B2\u80FD\u591F\u5448\u73B0\u7684\u989C\u8272\u5C31\u8D8A\u6E05\u6670\uFF0C\u6B64\u5916\uFF0C\u6BCF\u4E2A\u50CF\u7D20\u4F7F\u7528\u7684\u4F4D\u6570\u8D8A\u591A\uFF0C\u5E27\u7F13\u51B2\u6D88\u8017\u7684\u5B58\u50A8\u7A7A\u95F4\u5C31\u8D8A\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u663E\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u7684\u5185\u5BB9\u6700\u7EC8\u4F1A\u88AB\u4F20\u8F93\u5230\u5E76\u663E\u793A\u5728\u7269\u7406\u663E\u793A\u5668\u4E0A\u3002 \u56E0\u6B64\uFF0C\u5E27\u7F13\u51B2\u4E0E\u663E\u793A\u5668\u7684\u50CF\u7D20\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u76F8\u540C\u662F\u5341\u5206\u5E38\u89C1\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/display-and-framebuffer.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "24 bpp\u5E27\u7F13\u51B2\u5185\u5BB9\u548C\u663E\u793A\u5668\u663E\u793A\u5185\u5BB9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C2\u89C1\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u663E\u793A\u5668\u6280\u672F"), "\u7684\u90E8\u5206\u4E86\u89E3\u4E0D\u540C\u663E\u793A\u5668\u7C7B\u578B\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "location-of-framebuffer"
  }), `\u5E27\u7F13\u51B2\u7684\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u4E8E\u5FAE\u63A7\u5236\u5668\u7684\u7ED8\u56FE\u7CFB\u7EDF\u7684\u6781\u7B80\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/simplified-graphics-system.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, "\u7ED8\u56FE\u7CFB\u7EDF\u6781\u7B80\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u53EF\u4EE5\u4F4D\u4E8EMCU\u5185\u90E8\u6216\u5916\u90E8RAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-placement.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u5E27\u7F13\u51B2\u7684\u53EF\u80FD\u4F4D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E2A\u53EF\u80FD\u4F4D\u7F6E\u90FD\u5177\u6709\u6F5C\u5728\u7684\u4F18\u52BF\u548C\u4E0D\u8DB3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5185\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5E27\u7F13\u51B2\u4F4D\u4E8EMCU\u5185\u90E8\u7684RAM\u4E2D\uFF0C\u5BF9\u5E27\u7F13\u51B2\u7684\u8BFB\u548C\u5199\u8BBF\u95EE\u4F1A\u5C3D\u53EF\u80FD\u5FEB\u5730\u5B8C\u6210\u3002 \u8FD9\u610F\u5473\u7740TouchGFX\u5E94\u7528\u7684\u8FD0\u884C\u4F1A\u975E\u5E38\u6D41\u7545\u3002 \u53CD\u8FC7\u6765\uFF0C\u5185\u90E8RAM\u662F\u5341\u5206\u7A00\u5C11\u7684\u8D44\u6E90\uFF0C\u88AB\u7CFB\u7EDF\u7684\u8BB8\u591A\u90E8\u4EF6\u4F7F\u7528\uFF0C\u56E0\u6B64\uFF0C\u5E27\u7F13\u51B2\u5927\u91CF\u5360\u7528\u5185\u90E8RAM\u4E5F\u8BB8\u4E0D\u53EF\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u53EF\u884C\uFF0C\u7531\u4E8E\u65E0\u9700\u989D\u5916\u7684RAM\uFF0C\u5728\u5185\u90E8RAM\u4E2D\u63D0\u4F9B\u5E27\u7F13\u51B2\u53EF\u4EE5\u964D\u4F4E\u7CFB\u7EDF\u7684\u603B\u4F53\u6210\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-ram"
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u7CFB\u7EDF\u6709\u5916\u90E8RAM\uFF0C\u53EF\u4EE5\u9009\u62E9\u5728\u5916\u90E8RAM\u800C\u4E0D\u662F\u5185\u90E8RAM\u4E2D\u63D0\u4F9B\u5E27\u7F13\u51B2\u3002 \u5BF9\u5916\u90E8RAM\u7684\u8BFB\u548C\u5199\u8BBF\u95EE\u901A\u5E38\u4F1A\u6BD4\u5185\u90E8RAM\u6162\uFF0C\u4F46\u5916\u90E8RAM\u7684\u7A7A\u95F4\u91CF\u901A\u5E38\u5927\u5F97\u591A\u3002 \u56E0\u6B64\uFF0C\u6709\u65F6\u5019\u8FD9\u662F\u552F\u4E00\u53EF\u884C\u7684\u89E3\u51B3\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\u53EF\u80FD\u5177\u6709\u4E00\u4E9B\u529F\u80FD\uFF08\u5982\u7F13\u5B58\uFF09\uFF0C\u53EF\u52A0\u5FEB\u5916\u90E8RAM\u7684\u8BBF\u95EE\u901F\u5EA6\u3002 \u53C2\u89C1\u5173\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/hardware-selection/hardware-components/hardware-selection-mcu"
  }), `MCU`), `\u7684\u90E8\u5206\u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-with-embedded-ram"
  }), `\u81EA\u5E26RAM\u7684\u663E\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5668\u4E0A\u53EF\u80FD\u5D4C\u5165\u4E86\u5B58\u50A8\u5668\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u7CFB\u7EDF\u4E2D\u663E\u793A\u5668\u7684\u7C7B\u578B\u3002 \u8FD9\u6BB5\u5B58\u50A8\u7A7A\u95F4\u7528\u6765\u4FDD\u5B58\u663E\u793A\u5668\u201C\u5B9E\u9645\u201D\u50CF\u7D20\u7684\u5185\u5BB9\u3002 \u663E\u793A\u5668\u4E2D\u4FDD\u5B58\u50CF\u7D20\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u610F\u5473\u7740\u5728\u663E\u793A\u5668\u4ECD\u6D3B\u52A8\u65F6\uFF0CMCU\u53EF\u80FD\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u663E\u793A\u5668\u5B58\u50A8\u5668\u5E76\u975E\u5B58\u50A8\u5668\u6620\u5C04\uFF0C\u65E2\u4E0D\u6253\u7B97\u4E5F\u4E0D\u9002\u5408\u7528\u4E8E\u50CF\u7D20\u7684\u968F\u673A\u8BFB\u53D6\u6216\u5199\u5165\uFF0C\u56E0\u6B64\u4E0D\u53EF\u80FD\u5C06TouchGFX\u5E27\u7F13\u51B2\u653E\u5728\u5728\u663E\u793A\u5668\u81EA\u5E26\u7684RAM\u4E2D\u3002 \u76F8\u53CD\uFF0CTouchGFX\u5C06\u5E27\u7F13\u51B2\u7F6E\u4E8E\u5185\u90E8\u6216\u5916\u90E8RAM\u4E2D\uFF0C\u5E76\u5728\u9002\u5F53\u7684\u65F6\u5019\u5C06\u5176\u4F20\u8F93\u5230\u663E\u793A\u5668RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "amount-of-framebuffers"
  }), `\u5E27\u7F13\u51B2\u7684\u6570\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u53EF\u5728\u5E94\u7528\u4E2D\u4F7F\u7528\u4E00\u4E2A\u3001\u591A\u4E2A\u6216\u4E0D\u8DB3\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2\u3002 \u5E27\u7F13\u51B2\u7684\u6570\u91CF\u4F1A\u5F71\u54CD\u5E94\u7528\u7684\u89C6\u89C9\u8868\u73B0\u3001\u6027\u80FD\u548C\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `\u4E00\u4E2A\u5E27\u7F13\u51B2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E2A\u5E27\u7F13\u51B2\u8DB3\u4EE5\u5B8C\u5168\u5BB9\u7EB3\u8981\u4F20\u8F93\u5230\u663E\u793A\u5668\u7684\u6240\u6709\u50CF\u7D20\u3002 \u5F53\u677F\u4E0A\u7684\u663E\u793A\u5668\u6CA1\u6709\u81EA\u5E26RAM\u65F6\uFF0C\u9700\u8981\uFF08\u81F3\u5C11\uFF09\u4E00\u4E2A\u5E27\u7F13\u51B2\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6240\u663E\u793A\u56FE\u5F62\u7684\u590D\u6742\u5EA6\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u89C6\u89C9\u5931\u771F\uFF0C\u5219\u53EA\u9700\u4E00\u4E2A\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "more-than-one-framebuffer"
  }), `\u591A\u4E8E\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u5177\u6709\u591A\u4E2A\u5E27\u7F13\u51B2\u8868\u793A\u6709\u4E24\u4E2A\u5E27\u7F13\u51B2\u3002 \u4E00\u4E2A\u5E27\u7F13\u51B2\u7528\u4E8E\u5199\u5165\u4E0B\u4E00\u5E45\u9700\u8981\u663E\u793A\u7684\u56FE\u50CF\uFF0C\u53E6\u4E00\u4E2A\u5E27\u7F13\u51B2\u7528\u4E8E\u5C06\u56FE\u50CF\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002 \u8FD9\u610F\u5473\u7740\u4E0D\u4F1A\u53D1\u751F\u5931\u771F\uFF08\u5982\u6495\u88C2\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "less-than-one-framebuffer"
  }), `\u5C11\u4E8E\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C11\u4E8E\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2\u901A\u5E38\u610F\u5473\u7740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6D88\u8017\u7684\u5B58\u50A8\u7A7A\u95F4\u8F83\u5C11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u6267\u884C\u66F4\u591A\u7ED8\u5236\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9700\u8981\u5411\u663E\u793A\u5668\u4F20\u8F93\u66F4\u591A\u5185\u5BB9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u4E0D\u8DB3\u4E00\u4E2A\u7684\u5E27\u7F13\u51B2\u8868\u793A\u90E8\u5206\u5E27\u7F13\u51B2\u3002 \u90E8\u5206\u5E27\u7F13\u51B2\u65B9\u6848\u53EA\u9002\u7528\u4E8E\u5177\u6709\u81EA\u5E26\u663E\u793ARAM\u7684\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-consumption"
  }), `\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u4E2D\u7684\u8272\u5F69\u6570\u91CF\u548C\u50CF\u7D20\u6570\u91CF\u51B3\u5B9A\u4E86\u5E27\u7F13\u51B2\u6D88\u8017\u7684\u5B58\u50A8\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u4F7F\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u901A\u5E38\u4E3A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, ` \u5BBD `, `*`, ` \u9AD8 `, `*`, ` \u4EE5\u4F4D\u6570\u8BA1\u7684\u8272\u6DF1 / 8 `), ` \u5B57\u8282\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u5206\u8FA8\u7387\uFF08\u50CF\u7D20\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u8272\u5F69\uFF08bpp\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u8BA1\u7B97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\u6D88\u8017\u7684\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `800 `, `*`, ` 480 `, `*`, ` 16 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `768000 B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `480 `, `*`, ` 272 `, `*`, ` 24 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `391680 B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `100 `, `*`, ` 100 `, `*`, `  8 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `10000 B`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5177\u6709\u4E00\u4E2A\u4EE5\u4E0A\u7684\u5E27\u7F13\u51B2\u65F6\uFF0C\u6D88\u8017\u7684\u5B58\u50A8\u7A7A\u95F4\u76F8\u5E94\u5730\u8F83\u5927\u3002 \u4F8B\u5982\uFF0C\u5F53\u4F7F\u7528\u53CC\u91CD\u7F13\u51B2\u65B9\u6848\u65F6\uFF0C\u4F7F\u7528\u4E24\u4E2A\u5E27\u7F13\u51B2\u4F1A\u6D88\u8017\u4E24\u500D\u7684\u5B58\u50A8\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5E27\u7F13\u51B2\u4E0D\u8DB3\u4E00\u4E2A\u65F6\uFF0C\u7531\u5E94\u7528\u660E\u786E\u5730\u5206\u914D\u548C\u63A7\u5236\u5B58\u50A8\u7A7A\u95F4\u7684\u91CF\u3002 \u56E0\u6B64\uFF0C\u5B58\u50A8\u7A7A\u95F4\u7684\u6D88\u8017\u91CF\u662F\u5B8C\u5168\u53EF\u5B9A\u5236\u7684\uFF0C\u4F46\u5E94\u6CE8\u610F\u7684\u662F\uFF0C\u4F7F\u7528\u91CF\u8FC7\u5C11\u4F1A\u5F71\u54CD\u6574\u4F53\u56FE\u5F62\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",
    mdxType: "Link"
  }, "LTDC"), "\u663E\u793A\u5668\u63A7\u5236\u5668\u6587\u6863\u63D0\u4F9B\u4E86\u5173\u4E8E\u5E27\u7F13\u51B2\u7684\u66F4\u591A\u4FE1\u606F")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);