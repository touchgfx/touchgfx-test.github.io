"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8547],{

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

/***/ 88626:
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
  id: "preliminary-considerations",
  title: "\u521D\u6B65\u8003\u8651"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/preliminary-considerations",
  "id": "development/hardware-selection/preliminary-considerations",
  "title": "\u521D\u6B65\u8003\u8651",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/preliminary-considerations.mdx",
  "sourceDirName": "development/hardware-selection",
  "slug": "/development/hardware-selection/preliminary-considerations",
  "permalink": "/4.20/zh-CN/docs/development/hardware-selection/preliminary-considerations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "preliminary-considerations",
    "title": "\u521D\u6B65\u8003\u8651"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u786C\u4EF6\u9009\u62E9\u4ECB\u7ECD",
    "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-selection-introduction"
  },
  "next": {
    "title": "Hardware Components",
    "permalink": "/4.20/zh-CN/docs/category/hardware-components"
  }
};
const assets = {};



const toc = [{
  value: "\u663E\u793A\u5206\u8FA8\u7387",
  id: "display-resolution",
  level: 2
}, {
  value: "\u8272\u6DF1",
  id: "color-depth",
  level: 2
}, {
  value: "\u5E27\u7F13\u51B2\u533A\u5927\u5C0F\u7684\u8BA1\u7B97",
  id: "framebuffer-size-calculation",
  level: 2
}, {
  value: "\u663E\u793A",
  id: "display",
  level: 2
}, {
  value: "\u63A5\u53E3",
  id: "interface",
  level: 3
}, {
  value: "\u5C3A\u5BF8",
  id: "size",
  level: 3
}, {
  value: "\u89E6\u63A7",
  id: "touch",
  level: 3
}, {
  value: "\u7535\u5BB9\u5F0F",
  id: "capacitive",
  level: 4
}, {
  value: "\u7535\u963B\u5F0F",
  id: "resistive",
  level: 4
}, {
  value: "\u52A8\u753B",
  id: "animations",
  level: 2
}, {
  value: "\u673A\u68B0\u8BBE\u8BA1\u8981\u6C42",
  id: "mechanical-design-requirements",
  level: 2
}, {
  value: "\u6BCF\u79D2\u5E27\u6570",
  id: "frames-per-second",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u90E8\u5206\u7684\u76EE\u7684\u662F\u9488\u5BF9\u786C\u4EF6\u51B3\u7B56\u524D\u5E94\u8003\u8651\u7684\u4E8B\u9879\u63D0\u4F9B\u4E00\u4E9B\u6307\u5BFC\u3002 \u6BCF\u4E2A\u4EA7\u54C1\u90FD\u662F\u4E0D\u540C\u7684\uFF0C\u56E0\u6B64\u6709\u4E0D\u540C\u7684\u6807\u51C6\u548C\u8981\u6C42\u3002\u4E0B\u9762\u7684\u5185\u5BB9\u5C06\u9488\u5BF9\u5728\u51B3\u7B56\u524D\u5E94\u8BE5\u8003\u8651\u4E9B\u4EC0\u4E48\u4E3A\u60A8\u63D0\u4F9B\u7075\u611F\u6765\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/hardware-selection.png",
    noShadow: true,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u4E3B\u9898\u6DB5\u76D6\u663E\u793A\u5668\u5916\u89C2\u3001\u7CFB\u7EDF\u5185\u5B58\u9700\u6C42\u3001\u6240\u9700\u7684UI\u6027\u80FD\u548C\u4EA7\u54C1\u7269\u7406\u8BBE\u8BA1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-resolution"
  }), `\u663E\u793A\u5206\u8FA8\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5668\u6709\u591A\u79CD\u4E0D\u540C\u7684\u5206\u8FA8\u7387\u548C\u957F\u5BBD\u6BD4\u3002 \u901A\u5E38\uFF0CTouchGFX\u4E0D\u4F9D\u8D56\u4E8E\u8FD9\u4E9B\u53C2\u6570\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u3002 \u663E\u793A\u5206\u8FA8\u7387\u662F\u9009\u62E9\u5408\u9002\u786C\u4EF6\u7684\u4E3B\u8981\u8003\u8651\u56E0\u7D20\u4E4B\u4E00\uFF0C\u4E00\u822C\u6765\u8BB2\uFF0C\u5206\u8FA8\u7387\u8D8A\u9AD8\uFF0C\u50CF\u7D20\u8D8A\u591A\uFF0C\u56E0\u6B64\u8981\u6E32\u67D3\u548C\u4F20\u8F93\u7684\u6570\u636E\u5C31\u8D8A\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u5FAE\u63A7\u5236\u5668\u901A\u5E38\u652F\u6301\u9AD8\u8FBE16/24 bpp\u7684XGA\u5206\u8FA8\u7387\uFF081024*768\uFF09\uFF0C\u4E5F\u652F\u6301\u975E\u6807\u51C6\u5206\u8FA8\u7387\uFF0C\u5982\u5BBD\u663E\u793A\u5668\u6216\u5706\u5F62\u663E\u793A\u5668\u3002 \u5BF9\u4E8E\u9AD8\u4E8EXGA\u7684\u5206\u8FA8\u7387\uFF0C\u901A\u5E38\u9700\u8981\u5728\u8272\u6DF1\u3001\u6BCF\u79D2\u5E27\u6570\u7B49\u65B9\u9762\u505A\u6298\u8877\u2026\u2026`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F3\u4E2A\u6807\u51C6\u5206\u8FA8\u7387\u7684\u793A\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/display-resolution.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u663E\u793A\u5206\u8FA8\u7387\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD8\u5E94\u8003\u8651\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u867D\u7136\u663E\u793A\u5668\u5C3A\u5BF8\u8D8A\u5927\uFF0C\u5206\u8FA8\u7387\u8D8A\u9AD8\uFF0C\u663E\u793A\u8D8A\u6E05\u6670\uFF0C\u4F46\u50CF\u7D20\u5BC6\u5EA6\u8D8A\u9AD8\uFF0C\u6210\u672C\u4E5F\u8D8A\u9AD8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E3A\u60A8\u7684\u5E94\u7528\u9009\u62E9\u5206\u8FA8\u7387\u65F6\uFF0C\u5E94\u8BE5\u95EE\u81EA\u5DF1\u7684\u4E00\u4E9B\u95EE\u9898\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6700\u7EC8\u76EE\u6807\u7528\u6237\u7FA4\u4F53\u662F\u4EC0\u4E48\uFF1F`), ` \u4F5C\u4E3A\u6D88\u8D39\u8005\u81EA\u7136\u671F\u671B\u66F4\u9AD8\u7684\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u800C\u5B9E\u9645\u5DE5\u4E1A\u5E94\u7528\u5F80\u5F80\u4F1A\u7EFC\u5408\u8003\u8651\u4EA7\u54C1\u6210\u672C\u548C\u96C6\u6210\u5EA6\u590D\u6742\u6027\u6765\u6700\u7EC8\u9009\u62E9\u5408\u9002\u7684\u50CF\u7D20\u5BC6\u5EA6\u53C2\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u5728\u5E94\u7528\u4E2D\u4F1A\u4F7F\u7528\u5230\u5927\u91CF\u7684\u6587\u672C\u663E\u793A\u5417\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u5E38\u5E38\u4F1A\u5728\u5C4F\u5E55\u4E0A\u4E00\u6B21\u6027\u663E\u793A\u5927\u91CF\u4E0D\u540C\u5143\u7D20\u5417\uFF1F`), `\u56E0\u4E3A\u66F4\u5927\u7684\u663E\u793A\u7A7A\u95F4\u53EF\u4EE5\u663E\u793A\u66F4\u591A\u5143\u7D20\uFF0C\u6216\u4F7F\u88AB\u90E8\u5206\u5143\u7D20\u663E\u793A\u66F4\u4E3A\u6E05\u6670\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\u8272\u6DF1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u4E2A\u4E3B\u8981\u8003\u8651\u56E0\u7D20\u662F\u8272\u6DF1(\u6BCF\u4E2A\u50CF\u7D20\u6240\u5BF9\u5E94\u7684\u5B58\u50A8\u4F4D\u6570)\uFF0C\u5B83\u51B3\u5B9A\u4E86\u56FE\u50CF\u4E2D\u6BCF\u4E2A\u50CF\u7D20\u53EF\u4EE5\u5B58\u50A8\u7684\u4FE1\u606F\u91CF\uFF0C\u4E5F\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u4E3A\u5355\u4E2A\u50CF\u7D20\u5206\u914D\u7684\u989C\u8272\u6570\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u6BCF\u50CF\u7D201\u4F4D\u548C\u6BCF\u50CF\u7D2024\u4F4D\u7684\u5E94\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5668\u53EF\u4EE5\u652F\u6301\u4E0D\u540C\u7684\u8272\u6DF1\uFF0C16bpp GUI\u5E94\u7528\u53EF\u4EE5\u572824bpp\u663E\u793A\u5668\u4E0A\u8FD0\u884C\uFF0C\u4F46\u65E0\u6CD5\u5728\u53EA\u80FD\u663E\u793A16\u4F4D\u8272\u6DF1\u7684\u663E\u793A\u5668\u4E0A\u8FD0\u884C24bpp\u5E94\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5E26\u6709\u5F88\u591A\u7EC6\u5FAE\u989C\u8272\u5DEE\u522B\u7684\u590D\u6742\u56FE\u50CF\u5F80\u5F80\u9700\u8981\u66F4\u9AD8\u7684\u8272\u6DF1\uFF0C\u4EE5\u5C3D\u53EF\u80FD\u63A5\u8FD1\u6E90\u56FE\u50CF\u3002 \u8272\u6DF1\u7684\u9009\u62E9\u4E0E\u663E\u793A\u6240\u9700\u5185\u5B58\u91CF\u5F80\u5F80\u5B58\u5728\u51B2\u7A81\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u8981\u4F4E\u4F30\u5728\u8F83\u4F4E\u8272\u6DF1\u4E0A\u53EF\u4EE5\u5B9E\u73B0\u7684\u6548\u679C\uFF0C\u56E0\u4E3A\u8BB8\u591A\u73B0\u4EE3UI\u8BBE\u8BA1\u7406\u5FF5\u90FD\u56F4\u7ED5\u6241\u5E73\u5316\u548C\u989C\u8272\u5BC6\u96C6\u7A0B\u5EA6\u8F83\u4F4E\u7684\u5E94\u7528\uFF08\u4F8B\u5982Google\u7684\u8D28\u611F\u8BBE\u8BA1\uFF09\u3002 \u901A\u8FC7\u5E94\u7528\u67D0\u79CD\u6296\u52A8\u7B97\u6CD5\uFF0CTouchGFX\u53EF\u4EE5\u6709\u6548\u5730\u5728\u8F83\u4F4E\u8272\u6DF1\u6761\u4EF6\u4E0B\u5B9E\u73B0\u590D\u6742\u56FE\u50CF\u3002 \u4E0B\u9762\u7684\u793A\u4F8B\u5C55\u793A\u4E86\u53EF\u5728\u8F83\u4F4E\u8272\u6DF1\u57FA\u7840\u4E0A\u5B9E\u73B0\u7684\u6548\u679C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/low-color.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }, "\u4F4E\u8272\u6DF1\u5E94\u7528\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E3A\u60A8\u7684\u5E94\u7528\u9009\u62E9\u8272\u6DF1\u65F6\uFF0C\u60A8\u5E94\u8BE5\u95EE\u81EA\u5DF1\u7684\u4E00\u4E9B\u5982\u4E0B\u95EE\u9898\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u9700\u8981\u663E\u793A\u771F\u5B9E\u751F\u6D3B\u56FE\u50CF\u5417\uFF1F`), `\u5982\u679C\u8981\u4F7F\u7528\u771F\u5B9E\u751F\u6D3B\u56FE\u50CF\u6216\u591A\u5C42\u5408\u6210\u56FE\u50CF\uFF0C\u5EFA\u8BAE\u5728\u5E94\u7528\u548C\u663E\u793A\u5668\u4E2D\u90FD\u4F7F\u752824 bpp\u50CF\u7D20\uFF0C\u56E0\u4E3A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C16bpp\u4E0D\u8DB3\u4EE5\u663E\u793A\u6240\u6709\u9700\u8981\u7684\u989C\u8272\u3002 16bpp\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u662F\u8DB3\u591F\u7684\uFF0C\u5E76\u4E14\u4ECD\u7136\u662F\u884C\u4E1A\u6807\u51C6\u4E4B\u4E00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9009\u7528\u7070\u5EA6\u989C\u8272\u8FD8\u662F\u7B80\u5355\u76846/8 bpp?\u60A8\u771F\u6B63\u9700\u8981\u5B9E\u73B0\u7684\u5E94\u7528\u9700\u6C42\u662F\u4EC0\u4E48\uFF1F`), `\u4E5F\u8BB8\u60A8\u7684\u5E94\u7528\u4E0D\u9700\u8981\u5927\u91CF\u989C\u8272\u6765\u6B63\u786E\u4F20\u8FBE\u5176\u529F\u80FD\uFF0C\u56E0\u6B64\u53EF\u4EE5\u9009\u62E9\u8F83\u4F4E\u8272\u6DF1\u3002 \u8FD9\u4E5F\u51CF\u5C11\u4E86\u5E27\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u4ECE\u800C\u51CF\u5C11RAM\u9700\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u5BF9RAM\u548C/\u6216\u95EA\u5B58\u5BB9\u91CF\u6709\u9650\u5236\u5417\uFF1F`), `\u9650\u5236\u8272\u6DF1\u5C06\u540C\u65F6\u51CF\u5C11\u4F4D\u56FE\u548C\u5E27\u7F13\u51B2\u533A(RAM) \u7684\u9700\u6C42\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framebuffer-size-calculation"
  }), `\u5E27\u7F13\u51B2\u533A\u5927\u5C0F\u7684\u8BA1\u7B97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u533A\u662F\u7528\u6765\u5B58\u50A8\u50CF\u7D20\u6570\u636E\u7684\u5730\u65B9\uFF0C\u50CF\u7D20\u6570\u636E\u7ECF\u8FC7\u6E32\u67D3\u540E\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002 \u5E27\u7F13\u51B2\u533A\u5927\u5C0F\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u66F4\u9AD8\u7684\u50CF\u7D20\u6570\u91CF\u548C\u66F4\u9AD8\u7684\u8272\u6DF1\u9700\u8981\u66F4\u9AD8\u7684RAM\u548C\u663E\u793A\u63A5\u53E3\u7684\u6570\u636E\u541E\u5410\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u51B2\u533A\u5927\u5C0F\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8BA1\u7B97\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u663E\u793A\u5BBD\u5EA6*\u663E\u793A\u9AD8\u5EA6*\uFF08\u6BCF\u50CF\u7D20\u4F4D\u6570/8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982\uFF0C\u4E00\u4E2A\u5206\u8FA8\u7387\u4E3A800x480\u5177\u670916bpp\u8272\u6DF1\u7684\u5355\u5E27\u663E\u793A\u5E27\u7F13\u51B2\u533A\u5927\u5C0F\u4E3A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `800 * 480 * (16 / 8) = 768.000 b (768.000/1024 = 750 Kb)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5F53\u60A8\u51B3\u5B9A\u5206\u8FA8\u7387\u548C\u8272\u6DF1\u65F6\uFF0C\u8BF7\u786E\u4FDD\u60A8\u6709\u8DB3\u591F\u7684RAM\u63D0\u4F9B\u652F\u6301\u3002 \u67D0\u4E9B\u5E94\u7528\u9700\u89812\u4E2A\u5E27\u7F13\u51B2\u533A\uFF0C\u56E0\u6B64\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6240\u9700\u7684RAM\u4E3A750 KB * 2 = 1500 KB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u5E27\u7F13\u51B2\u533A\u8BA1\u7B97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u6CE8\u610F\uFF0C\u652F\u6301\u5E27\u7F13\u51B2\u533A\u6240\u9700\u7684\u5185\u5B58\u8FD8\u9AD8\u5EA6\u4F9D\u8D56\u4E8E\u6240\u9009\u7684\u5E27\u7F13\u51B2\u533A\u7B56\u7565\uFF08\u5355\u3001\u53CC\u3001\u90E8\u5206\uFF09\uFF0C\u60A8\u53EF\u4EE5\u5728\u5E27\u7F13\u51B2\u533A\u7B56\u7565\u6587\u7AE0", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../basic-concepts/framebuffer",
    mdxType: "Link"
  }, "\u201C\u5E27\u7F13\u51B2\u533A\u201D"), "\u4E2D\u9605\u8BFB\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u3002 \u4E00\u4E9BSTM32\u5FAE\u63A7\u5236\u5668\u6700\u9AD8\u652F\u6301\u53EA\u8FD0\u884C\u5185\u90E8RAM\u7684HVGA\u5206\u8FA8\u7387\uFF0C\u8FD9\u662F\u4E00\u79CD\u975E\u5E38\u7ECF\u6D4E\u9AD8\u6548\u7684\u89E3\u51B3\u65B9\u6848\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u663E\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface"
  }), `\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u9009\u62E9\u5177\u6709\u4E0D\u540C\u663E\u793A\u63A5\u53E3\uFF08\u4F8B\u5982SPI\u3001LTDC\u3001MIPI-DSI\uFF09\u7684\u663E\u793A\u5668\uFF0C\u8FD9\u4E9B\u63A5\u53E3\u5BF9\u6240\u9700\u7684\u9488\u6570\u3001\u5E26\u5BBD\u3001\u652F\u6301\u7684\u5206\u8FA8\u7387\u4EE5\u53CA\u53EF\u80FD\u9700\u8981\u7684\u5916\u90E8RAM\u5BB9\u91CF\u90FD\u6709\u4E0D\u540C\u7684\u5F71\u54CD\u3002 \u6709\u5173\u8BE6\u60C5\u4EE5\u53CA\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF0C\u8BF7\u9605\u8BFB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, `\u201C\u663E\u793A\u201D`), `\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "size"
  }), `\u5C3A\u5BF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5668\u7684\u7269\u7406\u5C3A\u5BF8\u4E5F\u662F\u91CD\u8981\u7684\u8003\u8651\u56E0\u7D20\u4E4B\u4E00\u3002 \u66F4\u5927\u7684\u663E\u793A\u5668\u901A\u5E38\u66F4\u5BB9\u6613\u64CD\u4F5C\uFF0C\u66F4\u5BB9\u6613\u7ED9\u51FA\u7CBE\u786E\u7684\u89E6\u6478\u547D\u4EE4\uFF0C\u4F46\u4E5F\u9700\u8981\u66F4\u5927\u7684\u5206\u8FA8\u7387\u624D\u80FD\u8BA9\u773C\u775B\u66F4\u8212\u9002\uFF0C\u4ECE\u800C\u5F71\u54CD\u5BF9\u66F4\u591A\u5185\u5B58\u548C\u541E\u5410\u7387\u7684\u9700\u6C42\u3002 \u5982\u679C\u663E\u793A\u5C4F\u4E0A\u7684\u4FE1\u606F\u57281-2\u7C73\u5916\u663E\u793A\uFF0C\u5219\u6587\u672C\u3001\u56FE\u6807\u7B49\u9700\u8981\u8DB3\u591F\u5927\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch"
  }), `\u89E6\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89E6\u63A7\u663E\u793A\u5668\u4E3B\u8981\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive"
  }), `\u7535\u5BB9\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7535\u5BB9\u5F0F\u89E6\u63A7\u663E\u793A\u5668\u5177\u6709\u66F4\u9AD8\u7684\u89E6\u63A7\u7075\u654F\u5EA6\uFF0C\u5982\u679C\u5E94\u7528\u9700\u8981\u66F4\u9AD8\u7EA7\u7684\u89E6\u63A7\u64CD\u4F5C\uFF08\u5982\u62D6\u52A8\u3001\u6ED1\u52A8\u7B49\uFF09\uFF0C\u8FD9\u4E00\u70B9\u5F88\u91CD\u8981\uFF0C\u8FD9\u79CD\u7C7B\u578B\u4E5F\u662F\u73B0\u4EE3\u8BBE\u5907\u4E2D\u4F7F\u7528\u6700\u591A\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u800C\uFF0C\u5B83\u4EEC\u4E5F\u66F4\u8D35\uFF0C\u800C\u4E14\u901A\u5E38\u4E0D\u80FD\u6234\u624B\u5957\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5982\u679C\u8FD9\u5F88\u91CD\u8981\uFF0C\u4E5F\u8BB8\u7535\u963B\u5F0F\u662F\u89E3\u51B3\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive"
  }), `\u7535\u963B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u79CD\u66F4\u4FBF\u5B9C\u7684\u66FF\u4EE3\u54C1\u7075\u654F\u5EA6\u8981\u4F4E\u5F97\u591A\uFF0C\u5728\u9633\u5149\u4E0B\u7684\u53EF\u89C1\u6027\u4E5F\u5F88\u5DEE\uFF0C\u4F46\u53EF\u4EE5\u6234\u624B\u5957\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u5B83\u5BF9\u610F\u5916\u4EA4\u4E92\u7684\u654F\u611F\u6027\u8F83\u4F4E\uFF0C\u800C\u4E14\u901A\u5E38\u6297\u6027\u66F4\u597D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u6240\u6709\u7684\u89E6\u63A7\u64CD\u4F5C\u90FD\u7531\u7B80\u5355\u7684\u6309\u6309\u94AE\u7EC4\u6210\uFF0C\u90A3\u4E48\u4E5F\u8BB8\u7535\u963B\u5F0F\u663E\u793A\u5668\u5C31\u8DB3\u591F\u4E86\u3002 STM32F429-DISCO\u677F\u4F7F\u7528\u7535\u963B\u5F0F\u89E6\u63A7\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "animations"
  }), `\u52A8\u753B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u786C\u4EF6\u7684\u541E\u5410\u7387\u548C\u8BA1\u7B97\u80FD\u529B\u4E0D\u8DB3\uFF0C\u8FD0\u884C\u590D\u6742\u7684\u52A8\u753B\uFF08\u5982\u5168\u5C4F\u8F6C\u6362\u3001\u65CB\u8F6C\u548C\u7F29\u653E\uFF09\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u91CD\u5927\u5F71\u54CD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u51B3\u5B9A\u5E94\u7528\u4E2D\u7684\u52A8\u753B\u7EA7\u522B\u65F6\uFF0C\u60A8\u9700\u8981\u95EE\u81EA\u5DF1\u7684\u4E00\u4E9B\u95EE\u9898\u5305\u62EC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u9700\u8981\u9AD8\u901F\u5168\u5C4F\u8F6C\u6362\u5417\uFF1F`), `\u5168\u5C4F\u8F6C\u6362\u9700\u8981\u6E32\u67D3\u5B8C\u6574\u7684\u5E27\u7F13\u51B2\u533A\uFF0C\u56E0\u6B64\u4F9D\u8D56\u4E8E\u8DB3\u591F\u7684MCU\u5468\u671F\uFF0C\u4EE5\u53CA\u8DB3\u591F\u5FEB\u7684\u50CF\u7D20\u6570\u636E\u8BBF\u95EE\u548C\u4F20\u8F93\u3002 \u6240\u9700\u7684\u7CFB\u7EDF\u6027\u80FD\u8FD8\u53D6\u51B3\u4E8E\u5206\u8FA8\u7387\u548C\u8272\u6DF1\u3002 \u9AD8\u5206\u8FA8\u7387\u5168\u5C4F\u8F6C\u6362\u901A\u5E38\u63A8\u8350\u7528\u4E8ESTM32\u9AD8\u6027\u80FD\u4EA7\u54C1\u3002 \u67D0\u4E9B\u8F6C\u6362\u9700\u8981\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u56E0\u6B64\u53EF\u80FD\u9700\u8981\u66F4\u5927\u5185\u5B58\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u662F\u5426\u9700\u8981\u590D\u6742\u7684\u7EB9\u7406\u6620\u5C04\u5668\u52A8\u753B\uFF0C\u5982\u65CB\u8F6C\u548C\u7F29\u653E\uFF1F`), `\u5F53\u6D89\u53CA\u5230\u8BA1\u7B97\u548C\u4F20\u8F93\u4F4D\u56FE\u65F6\uFF0C\u52A8\u753B\u7EB9\u7406\u6620\u5C04\u5668\u5728\u7CFB\u7EDF\u4E0A\u53EF\u80FD\u975E\u5E38\u5BC6\u96C6\uFF0C\u56E0\u6B64\u901A\u5E38\u9700\u8981\u66F4\u9AD8\u7684MHz\u548C\u9AD8\u5185\u5B58\u541E\u5410\u7387\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/animations.gif",
    width: "480",
    mdxType: "Figure"
  }, "\u52A8\u753B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mechanical-design-requirements"
  }), `\u673A\u68B0\u8BBE\u8BA1\u8981\u6C42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EA7\u54C1\u7684\u7269\u7406\u5916\u58F3\u8981\u6C42\u4F1A\u6709\u5F88\u5927\u5DEE\u5F02\uFF0C\u5E76\u4E14\u4F1A\u5BF9\u6240\u9009\u786C\u4EF6\u4EA7\u751F\u5F71\u54CD\u3002 \u5BB6\u7528\u7535\u5668\u5BF9\u5371\u9669\u5DE5\u4E1A\u7528\u9014\u6709\u5176\u4ED6\u8981\u6C42\uFF0C\u56E0\u6B64\uFF0C\u5728\u63ED\u793A\u7269\u7406\u9650\u5236\u65F6\uFF0C\u60A8\u5E94\u8BE5\u95EE\u81EA\u5DF1\u7684\u4E00\u4E9B\u95EE\u9898\u53EF\u80FD\u5305\u62EC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u4EA7\u54C1\u9700\u8981\u975E\u5E38\u5C0F\u5417\uFF1F`), `\u4F8B\u5982\uFF0C\u667A\u80FD\u624B\u8868\uFF0C\u5B83\u7684\u5916\u58F3\u5927\u5C0F\u6709\u9650\uFF0C\u8FD9\u9650\u5236\u4E86PCB\u7684\u5927\u5C0F\uFF0C\u56E0\u6B64\u9009\u62E9\u6B63\u786E\u7684\u7EC4\u4EF6\u5F88\u91CD\u8981\u3002 STM32\u63D0\u4F9B\u591A\u79CDMCU\u5C01\u88C5\uFF0C\u4F8B\u5982WLCSP\u5C01\u88C5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u4EA7\u54C1\u4F1A\u66B4\u9732\u4E8E\u6781\u7AEF\u6E29\u5EA6\u5417\uFF1F`), `\u7535\u5BB9\u5F0F\u663E\u793A\u5668\u5728\u6781\u70ED\u6216\u6781\u51B7\u65F6\u6027\u80FD\u4E0D\u4F73\u3002 \u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u5C06\u4EA7\u54C1\u5B89\u88C5\u5728\u5982\u51B7\u5E93\u7B49\u4F4D\u7F6E\uFF0C\u5219\u7535\u963B\u5F0F\u663E\u793A\u5668\u53EF\u80FD\u4F1A\u63D0\u4F9B\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002 STM32\u4EA7\u54C1\u7EC4\u5408\u63D0\u4F9B\u73AF\u5883\u6E29\u5EA6\u8303\u56F4\u9AD8\u8FBE85\u3001105\u548C125\u5EA6\u7684\u5FAE\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u4EA7\u54C1\u662F\u5426\u9700\u8981\u5BF9\u5BA4\u5916\u73AF\u5883\u56E0\u7D20\uFF08\u4F8B\u5982\uFF0C\u6C34\u6216\u7070\u5C18\uFF09\u5177\u6709\u5F88\u5F3A\u6297\u6027\uFF1F`), `\u4E0D\u540C\u7684\u6280\u672F\u63D0\u4F9B\u4E0D\u540C\u7684\u8D28\u91CF\u548C\u529F\u80FD\uFF0C\u6DFB\u52A0\u4FDD\u62A4\u76D6\u677F\u53EF\u80FD\u662F\u4E00\u79CD\u9009\u62E9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5F3A\u5149\u4E0B\u53EF\u89C1\u6027\u91CD\u8981\u5417\uFF1F`), `\u663E\u793A\u5668\u7684\u53D1\u5149\u5F3A\u5EA6\u548C\u5149\u901A\u91CF\u5404\u4E0D\u76F8\u540C\uFF0C\u663E\u793A\u5668\u7684\u5149\u901A\u91CF\u548C\u53D1\u5149\u5F3A\u5EA6\u8D8A\u9AD8\uFF0C\u663E\u793A\u5668\u7684\u53EF\u8BFB\u6027\u5C31\u8D8A\u9AD8\u3002 \u6DFB\u52A0\u4E00\u4E2A\u7279\u6B8A\u76D6\u677F\u4E5F\u53EF\u4EE5\u6539\u5584\u8FD9\u4E00\u70B9\u3002 \u6216\u8005\u4F7F\u7528\u53E6\u4E00\u79CD\u4E5F\u53EF\u4EE5\u63D0\u4F9B\u53CD\u5C04\u529F\u80FD\u7684\u663E\u793A\u6280\u672F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frames-per-second"
  }), `\u6BCF\u79D2\u5E27\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u66F4\u9AD8\u4E14\u7A33\u5B9A\u7684\u6BCF\u79D2\u5E27\u6570\uFF08FPS\uFF09\u8BA1\u6570\u901A\u5E38\u66F4\u597D\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u4F7F\u5E94\u7528\u770B\u8D77\u6765\u66F4\u6D41\u7545\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u65F6FPS\u4E0D\u90A3\u4E48\u91CD\u8981\u3002 \u4F8B\u5982\uFF0C\u5728\u663E\u793A\u52A8\u753B\u66F4\u65B0\u6700\u5C11\u7684\u9759\u6001GUI\u4E2D\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F4E\u6210\u672C\u786C\u4EF6\u53EF\u80FD\u66F4\u5408\u9002\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u6839\u636E\u76EE\u6807\u7528\u6237\u7FA4\uFF0C\u62E5\u6709\u6F02\u4EAE\u6D41\u7545\u7684\u5E94\u7528\u548C\u5927\u91CF\u534E\u4E3D\u7684\u52A8\u753B\u4E5F\u53EF\u4EE5\u6210\u4E3A\u4E00\u4E2A\u5DE8\u5927\u7684\u5356\u70B9\uFF0C\u56E0\u6B64\u4E0E\u786C\u4EF6\u9009\u62E9\u76F8\u5173\u7684\u4EFB\u4F55\u65B9\u9762\u90FD\u662F\u4E00\u6837\uFF0C\u90FD\u662F\u4E3A\u4E86\u6EE1\u8DB3\u6700\u7EC8\u7528\u6237\u671F\u671B\uFF0C\u5E76\u63D0\u4F9B\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u7528\u6237\u754C\u9762\u7684\u6574\u4F53\u6027\u80FD\u5F52\u7ED3\u4E3A\u7CFB\u7EDF\u7EA7\u6027\u80FD\uFF0C\u5305\u62EC\u5982MCU\u3001RAM\u3001\u95EA\u5B58\u3001\u663E\u793A\u5668\u3001\u63A5\u53E3\u541E\u5410\u7387\u7B49\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u5982STM32 Chrom-ART\u7B49\u786C\u4EF6\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56FE\u63CF\u7ED8\u4E86\u4E00\u4E9B\u4E0D\u540C\u53C2\u6570\u5F71\u54CD\u7684\u6982\u62EC\u56FE\u3002 \u8981\u9009\u62E9\u6B63\u786E\u7684\u786C\u4EF6\uFF0C\u9700\u8981\u8003\u8651\u8FD9\u4E9B\u53C2\u6570\u3002 \u8FD8\u8003\u8651\u5230STM32 Chrom-ART\u53EF\u964D\u4F4EMCU\u8D1F\u8377\uFF0C\u56E0\u6B64\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u964D\u4F4E\u4E86\u9AD8MCU\u9891\u7387\u7684\u91CD\u8981\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/fps-figures.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4E0D\u540C\u53C2\u6570\u5BF9FPS\u7684\u5F71\u54CD"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);