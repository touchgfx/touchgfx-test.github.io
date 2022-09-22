"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5573],{

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

/***/ 72085:
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
  title: "\u9810\u5148\u61C9\u8003\u91CF\u4E8B\u9805"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/preliminary-considerations",
  "id": "development/hardware-selection/preliminary-considerations",
  "title": "\u9810\u5148\u61C9\u8003\u91CF\u4E8B\u9805",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/preliminary-considerations.mdx",
  "sourceDirName": "development/hardware-selection",
  "slug": "/development/hardware-selection/preliminary-considerations",
  "permalink": "/4.20/zh-TW/docs/development/hardware-selection/preliminary-considerations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "preliminary-considerations",
    "title": "\u9810\u5148\u61C9\u8003\u91CF\u4E8B\u9805"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u786C\u9AD4\u9078\u64C7\u4ECB\u7D39",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-selection-introduction"
  },
  "next": {
    "title": "Hardware Components",
    "permalink": "/4.20/zh-TW/docs/category/hardware-components"
  }
};
const assets = {};



const toc = [{
  value: "\u986F\u793A\u89E3\u6790\u5EA6",
  id: "display-resolution",
  level: 2
}, {
  value: "\u984F\u8272\u6DF1\u5EA6",
  id: "color-depth",
  level: 2
}, {
  value: "\u5F71\u50CF\u7DE9\u885D\u5340\u5927\u5C0F\u8A08\u7B97",
  id: "framebuffer-size-calculation",
  level: 2
}, {
  value: "\u986F\u793A",
  id: "display",
  level: 2
}, {
  value: "\u4ECB\u9762",
  id: "interface",
  level: 3
}, {
  value: "\u5C3A\u5BF8",
  id: "size",
  level: 3
}, {
  value: "\u89F8\u63A7",
  id: "touch",
  level: 3
}, {
  value: "\u96FB\u5BB9\u578B",
  id: "capacitive",
  level: 4
}, {
  value: "\u96FB\u963B\u578B",
  id: "resistive",
  level: 4
}, {
  value: "Animations",
  id: "animations",
  level: 2
}, {
  value: "\u6A5F\u68B0\u8A2D\u8A08\u8981\u6C42",
  id: "mechanical-design-requirements",
  level: 2
}, {
  value: "\u6BCF\u79D2\u5E40\u6578",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u7684\u76EE\u7684\u662F\u5728\u6C7A\u5B9A\u786C\u9AD4\u4E4B\u524D\u7D66\u51FA\u4E00\u4E9B\u5EFA\u8B70\uFF0C\u8AAA\u660E\u61C9\u8003\u616E\u54EA\u4E9B\u56E0\u7D20\u3002 \u6BCF\u500B\u7522\u54C1\u90FD\u662F\u4E0D\u540C\u7684\uFF0C\u56E0\u6B64\u6709\u4E0D\u540C\u7684\u6A19\u6E96\u548C\u8981\u6C42\uFF0C\u56E0\u6B64\uFF0C\u8ACB\u53C3\u8003\u4EE5\u4E0B\u5167\u5BB9\uFF0C\u4EE5\u4FBF\u60A8\u5728\u505A\u6C7A\u5B9A\u4E4B\u524D\u4E86\u89E3\u61C9\u8A72\u8003\u616E\u7684\u56E0\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/hardware-selection.png",
    noShadow: true,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u4E3B\u984C\u6D89\u53CA\u986F\u793A\u5E55\u7684\u5916\u89C0\u3001\u7CFB\u7D71\u4E2D\u8A18\u61B6\u9AD4\u7684\u9700\u6C42\u3001UI \u7684\u9810\u671F\u6548\u80FD\u4EE5\u53CA\u7522\u54C1\u7684\u7269\u7406\u8A2D\u8A08\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-resolution"
  }), `\u986F\u793A\u89E3\u6790\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u6709\u591A\u7A2E\u4E0D\u540C\u7684\u89E3\u6790\u5EA6\u548C\u9577\u5BEC\u6BD4\u3002 \u4E00\u822C\u4F86\u8AAA\uFF0CTouchGFX \u4E0D\u4F9D\u8CF4\u65BC\u9019\u4E9B\u53C3\u6578\u4E2D\u7684\u4EFB\u4F55\u4E00\u500B\u3002 \u5728\u9078\u64C7\u5408\u9069\u7684\u786C\u9AD4\u6642\uFF0C\u986F\u793A\u89E3\u6790\u5EA6\u662F\u4E3B\u8981\u56E0\u7D20\u4E4B\u4E00\uFF0C\u8F03\u9AD8\u7684\u89E3\u6790\u5EA6\u901A\u5E38\u7B49\u65BC\u66F4\u591A\u50CF\u7D20\uFF0C\u56E0\u6B64\u9700\u8981\u6E32\u67D3\u548C\u50B3\u8F38\u7684\u8CC7\u6599\u66F4\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728 16/24 bpp \u4E0B\uFF0CSTM32 \u5FAE\u63A7\u5236\u5668\u901A\u5E38\u652F\u63F4 XGA \u89E3\u6790\u5EA6 \uFF081024*768\uFF09\uFF0C \u4E5F\u652F\u63F4\u975E\u6A19\u6E96\u89E3\u6790\u5EA6\uFF0C\u5982\u5BEC\u6216\u5713\u986F\u793A\u3002 \u5C0D\u65BC XGA \u4EE5\u4E0A\u7684\u89E3\u6790\u5EA6\uFF0C\u901A\u5E38\u5FC5\u9808\u5728\u984F\u8272\u6DF1\u5EA6\u3001\u6BCF\u79D2\u5E40\u6578... \u7B49\u505A\u51FA\u59A5\u5354\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6A19\u6E96\u89E3\u6790\u5EA6\u7684 3 \u500B\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/display-resolution.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u986F\u793A\u89E3\u6790\u5EA6\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9084\u61C9\u8003\u616E\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u56E0\u70BA\u8F03\u5927\u7684\u986F\u793A\u5668\u5C3A\u5BF8\u9700\u8981\u66F4\u9AD8\u7684\u89E3\u6790\u5EA6\u624D\u80FD\u770B\u8D77\u4F86\u6BD4\u8F03\u92B3\u5229\uFF0C\u4F46\u8F03\u9AD8\u7684\u50CF\u7D20\u5BC6\u5EA6\u901A\u5E38\u9700\u8981\u66F4\u9AD8\u7684\u6210\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u70BA\u61C9\u7528\u7A0B\u5F0F\u9078\u64C7\u89E3\u6C7A\u65B9\u6848\u6642\uFF0C\u60A8\u61C9\u8A72\u554F\u81EA\u5DF1\u7684\u4E00\u4E9B\u554F\u984C\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4EC0\u9EBC\u662F\u7D42\u7AEF\u4F7F\u7528\u8005\u7684\u76EE\u6A19\u5340\u9593\uFF1F`), `\u6D88\u8CBB\u8005\u901A\u5E38\u9700\u8981\u66F4\u9AD8\u7684\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u800C\u4E00\u4E9B\u5DE5\u696D\u61C9\u7528\u53EF\u80FD\u6703\u7232\u4E86\u964D\u4F4E\u6210\u672C\u6216\u66F4\u5BB9\u6613\u6574\u5408\u800C\u5728\u9019\u4E00\u65B9\u9762\u59A5\u5354\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u6253\u7B97\u5728\u61C9\u7528\u7A0B\u5F0F\u4E2D\u4F7F\u7528\u5927\u91CF\u7684\u5C0F\u6587\u5B57\u55CE\uFF1F`), `\u7531\u65BC\u50CF\u7D20\u5BC6\u5EA6\u66F4\u9AD8\uFF0C\u5927\u584A\u7684\u5C0F\u6587\u5B57\u901A\u5E38\u5728\u89E3\u6790\u5EA6\u8F03\u9AD8\u7684\u986F\u793A\u5E55\u4E0A\u66F4\u6613\u8B80\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u901A\u5E38\u6703\u540C\u6642\u5728\u87A2\u5E55\u4E0A\u986F\u793A\u8A31\u591A\u4E0D\u540C\u7684\u5143\u7D20\u55CE\uFF1F`), `\u8F03\u5927\u7684\u986F\u793A\u5668\u5141\u8A31\u986F\u793A\u66F4\u591A\u5143\u7D20\uFF0C\u6216\u4F7F\u67D0\u4E9B\u5143\u7D20\u66F4\u6E05\u6670\uFF0C\u56E0\u70BA\u6709\u66F4\u591A\u7684\u87A2\u5E55\u5C3A\u5BF8\u53EF\u7528\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\u984F\u8272\u6DF1\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u500B\u4E3B\u8981\u56E0\u7D20\u662F\u984F\u8272\u6DF1\u5EA6\uFF08\u5404\u50CF\u7D20\u4F4D\u5143\u6578\uFF09\uFF0C\u5B83\u6C7A\u5B9A\u4E86\u5F71\u50CF\u4E2D\u6BCF\u500B\u50CF\u7D20\u53EF\u4EE5\u5132\u5B58\u7684\u8CC7\u8A0A\u91CF\uFF0C\u9019\u610F\u5473\u8457\u60A8\u80FD\u5920\u5C07\u591A\u5C11\u7A2E\u4E0D\u540C\u7684\u984F\u8272\u8CE6\u503C\u7D66\u4E00\u500B\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u6BCF\u50CF\u7D20 1 \u4F4D\u5143\u548C\u6BCF\u50CF\u7D20\u61C9\u7528 24 \u4F4D\u5143"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u652F\u63F4\u4E0D\u540C\u7684\u984F\u8272\u6DF1\u5EA6\uFF0C\u5728 24bpp \u986F\u793A\u5E55\u4E0A\u57F7\u884C 16bpp GUI \u61C9\u7528\u7A0B\u5F0F\u662F\u53EF\u80FD\u7684\uFF0C\u4F46\u5728\u50C5\u80FD\u5920\u986F\u793A 16 \u4F4D\u984F\u8272\u7684\u986F\u793A\u5668\u4E0A\u57F7\u884C 24bpp \u61C9\u7528\u7A0B\u5F0F\u5C07\u7522\u751F\u53CD\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u8272\u5F69\u4E0A\u6709\u5F88\u591A\u7D30\u5FAE\u5DEE\u5225\u7684\u8907\u96DC\u5F71\u50CF\u9700\u8981\u66F4\u9AD8\u7684\u8272\u5F69\u6DF1\u5EA6\u624D\u80FD\u76E1\u53EF\u80FD\u63A5\u8FD1\u6E90\u5F71\u50CF\u3002 \u6240\u9078\u7684\u984F\u8272\u6DF1\u5EA6\u5C0D\u6240\u9700\u7684\u8A18\u61B6\u9AD4\u91CF\u6709\u5F71\u97FF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u8981\u4F4E\u4F30\u5728\u4F4E\u8272\u5F69\u6DF1\u5EA6\u4E0A\u53EF\u4EE5\u5BE6\u73FE\u7684\u76EE\u6A19\uFF0C\u56E0\u70BA\u8A31\u591A\u73FE\u4EE3 UI \u8A2D\u8A08\u7406\u5FF5\u90FD\u570D\u7E5E\u8457\u6241\u5E73\u5316\u548C\u8272\u5F69\u5BC6\u96C6\u5EA6\u8F03\u4F4E\u7684\u61C9\u7528\uFF08\u4F8B\u5982 Google \u7684\u6750\u6599\u8A2D\u8A08\uFF09\u3002 TouchGFX \u53EF\u4EE5\u900F\u904E\u61C9\u7528\u4E00\u7A2E\u6296\u52D5\u6F14\u7B97\u6CD5\uFF0C\u5E6B\u52A9\u8907\u96DC\u5F71\u50CF\u5728\u4F4E\u984F\u8272\u6DF1\u5EA6\u4E0A\u8B8A\u5F97\u6709\u7528\u3002 \u4F60\u53EF\u4EE5\u5728\u8F03\u4F4E\u7684\u984F\u8272\u6DF1\u5EA6\u4E0A\u5BE6\u73FE\uFF0C\u4E0B\u9762\u662F\u4E00\u4E9B\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/low-color.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }, "\u4F4E\u8272\u6DF1\u5EA6\u61C9\u7528\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u70BA\u61C9\u7528\u7A0B\u5F0F\u9078\u64C7\u984F\u8272\u6DF1\u5EA6\u6642\uFF0C\u60A8\u61C9\u8A72\u554F\u81EA\u5DF1\u7684\u4E00\u4E9B\u554F\u984C\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u662F\u5426\u9700\u8981\u986F\u793A\u771F\u5BE6\u751F\u6D3B\u4E2D\u7684\u5F71\u50CF\uFF1F`), `\u5982\u679C\u4F7F\u7528\u771F\u5BE6\u5F71\u50CF\u6216\u591A\u5C64\u7D44\u5408\u5F71\u50CF\uFF0C\u5EFA\u8B70\u5728\u61C9\u7528\u7A0B\u5F0F\u548C\u986F\u793A\u5668\u4F7F\u7528 24 bpp \u50CF\u7D20\uFF0C\u56E0\u70BA\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C16bpp \u4E0D\u8DB3\u4EE5\u986F\u793A\u6240\u6709\u6240\u9700\u7684\u984F\u8272\u3002 16bpp \u5728\u8A31\u591A\u60C5\u6CC1\u4E0B\u5DF2\u7D93\u8DB3\u5920\u4E86\uFF0C\u4E26\u4E14\u4ECD\u7136\u662F\u696D\u754C\u6A19\u6E96\u4E4B\u4E00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7070\u5EA6\u984F\u8272\u6216\u7C21\u55AE\u7684 6/8 bpp \u662F\u60A8\u7684\u61C9\u7528\u7A0B\u5F0F\u6240\u9700\u50B3\u9054\u7684\u5168\u90E8\u5167\u5BB9\u55CE\uFF1F`), `\u4E5F\u8A31\u60A8\u7684\u61C9\u7528\u7A0B\u5F0F\u4E0D\u9700\u8981\u5206\u6563\u7684\u984F\u8272\u4F86\u6B63\u78BA\u50B3\u9054\u5176\u529F\u80FD\uFF0C\u56E0\u6B64\u53EF\u4EE5\u9078\u64C7\u8F03\u4F4E\u7684\u984F\u8272\u6DF1\u5EA6\u3002 \u9019\u4E5F\u6E1B\u5C11\u4E86\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5927\u5C0F\uFF0C\u5F9E\u800C\u6E1B\u5C11\u4E86RAM\u7684\u9700\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u662F\u5426\u5C0D\u8A18\u61B6\u9AD4\u548C/\u6216\u5FEB\u9583\u8A18\u61B6\u9AD4\u6709\u9650\u5236\uFF1F`), `\u9650\u5236\u984F\u8272\u6DF1\u5EA6\u5C07\u6E1B\u5C11\u9EDE\u9663\u5716\u548C\u5F71\u50CF\u7DE9\u885D\u5340 \uFF08RAM\uFF09 \u9700\u6C42\u7684\u5927\u5C0F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framebuffer-size-calculation"
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u5927\u5C0F\u8A08\u7B97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u5340\u662F\u5B58\u5132\u3001\u6E32\u67D3\u548C\u50B3\u8F38\u5E40\u50CF\u7D20\u8CC7\u6599\u5230\u986F\u793A\u5668\u7684\u4F4D\u7F6E\u3002 \u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5927\u5C0F\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u70BA\u66F4\u9AD8\u7684\u50CF\u7D20\u91CF\u548C\u66F4\u9AD8\u7684\u984F\u8272\u6DF1\u5EA6\u8981\u6C42\u5728 RAM \u548C\u986F\u793A\u4ECB\u9762\u4E0A\u7372\u5F97\u66F4\u9AD8\u7684\u50B3\u8F38\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u4F4D\u5143\u5927\u5C0F\u70BA\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u986F\u793A\u5668\u5BEC\u5EA6*\u986F\u793A\u5668\u9AD8\u5EA6*\uFF08\u6BCF\u50CF\u7D20\u4F4D/8\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982\uFF0C\u984F\u8272\u6DF1\u5EA6\u70BA 16bpp \u7684 800x480 \u61C9\u7528\u7A0B\u5F0F\u548C\u55AE\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u9700\u8981\u5206\u914D\u4E00\u500B\u5927\u5C0F\u70BA\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `800 * 480 * \uFF0816 / 8\uFF09 = 768.000 \u4F4D\u5143\u7D44\uFF08768.000/1024 = 750KB\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u7576\u60A8\u6C7A\u5B9A\u89E3\u6790\u5EA6\u548C\u984F\u8272\u6DF1\u5EA6\u6642\uFF0C\u8ACB\u78BA\u4FDD\u60A8\u6709\u8DB3\u5920\u7684 RAM \u4F86\u652F\u63F4\u5B83\u3002 \u6709\u4E9B\u61C9\u7528\u7A0B\u5F0F\u9700\u8981 2 \u500B\u6846\u67B6\u7DE9\u885D\u5340\uFF0C\u56E0\u6B64\u5728\u4E0A\u8FF0\u7BC4\u4F8B\u4E2D\uFF0C\u6240\u9700\u7684 RAM \u70BA 750 \u5343\u5146\u4F4D\u5143\u7D44 * 2 = 1500 \u5343\u5146\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u5F71\u50CF\u7DE9\u885D\u5340\u8A08\u7B97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8ACB\u6CE8\u610F\uFF0C\u652F\u63F4\u5F71\u50CF\u7DE9\u885D\u5340\u6240\u9700\u7684\u8A18\u61B6\u9AD4\u4E5F\u56B4\u91CD\u4F9D\u8CF4\u65BC\u6240\u9078\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565\uFF08\u55AE\u3001\u96D9\u3001\u90E8\u5206\uFF09\uFF0C\u60A8\u53EF\u4EE5\u5728", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../basic-concepts/framebuffer",
    mdxType: "Link"
  }, "\u5F71\u50CF\u7DE9\u885D"), "\u7B56\u7565\u6587\u7AE0\u5F71\u50CF\u7DE9\u885D\u4E2D\u95B1\u8B80\u66F4\u591A\u5167\u5BB9\u3002 \u4E00\u4E9B STM32 \u5FAE\u63A7\u5236\u5668\u7684\u5167\u90E8 RAM\u6700\u591A\u53EA\u80FD\u652F\u63F4HVGA \u89E3\u6790\u5EA6 \uFF0C\u4EE5\u7372\u5F97\u975E\u5E38\u7D93\u6FDF\u9AD8\u6548\u7684\u89E3\u6C7A\u65B9\u6848\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u986F\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface"
  }), `\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u9078\u64C7\u5177\u6709\u4E0D\u540C\u986F\u793A\u4ECB\u9762\uFF08\u5982 SPI\u3001LTDC\u3001MIPI-DSI\uFF09\u7684\u986F\u793A\u5668\uFF0C\u9019\u4E9B\u986F\u793A\u5668\u5C0D\u6240\u9700\u7684\u5F15\u8173\u6578\u91CF\u3001\u983B\u5BEC\u3001\u652F\u63F4\u89E3\u6790\u5EA6\u4EE5\u53CA\u53EF\u80FD\u9700\u8981\u7684\u5916\u90E8 RAM \u6578\u91CF\u90FD\u6709\u4E0D\u540C\u7684\u5F71\u97FF\u3002 \u95B1\u8B80\u66F4\u591A\u8207\u6B64\u6709\u95DC\u7684\u5167\u5BB9\u4EE5\u53CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, `\u986F\u793A\u5E55`), `\u7AE0\u7BC0\u4E2D\u6BCF\u500B\u512A\u9EDE\u548C\u7F3A\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "size"
  }), `\u5C3A\u5BF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u7684\u7269\u7406\u5C3A\u5BF8\u4E5F\u5F88\u91CD\u8981\u3002 \u8F03\u5927\u7684\u986F\u793A\u5E55\u901A\u5E38\u64CD\u4F5C\u66F4\u65B9\u4FBF\uFF0C\u63D0\u4F9B\u7CBE\u78BA\u7684\u89F8\u6478\u6307\u4EE4\u4E5F\u66F4\u5BB9\u6613\uFF0C\u4F46\u4E5F\u9700\u8981\u66F4\u5927\u7684\u89E3\u6790\u5EA6\u624D\u80FD\u8F15\u9B06\u89C0\u770B\uFF0C\u5F9E\u800C\u5F71\u97FF\u5C0D\u66F4\u591A\u8A18\u61B6\u9AD4\u548C\u50B3\u8F38\u91CF\u7684\u9700\u6C42\u3002 \u5982\u679C\u986F\u793A\u5668\u4E0A\u7684\u8CC7\u8A0A\u986F\u793A\u5728 1-2 \u7C73\u4E4B\u5916\uFF0C\u5247\u6587\u5B57\u3001\u5716\u793A\u7B49\u9700\u8981\u8DB3\u5920\u5927\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch"
  }), `\u89F8\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89F8\u63A7\u986F\u793A\u5668\u6709\u5169\u7A2E\u4E3B\u8981\u985E\u578B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive"
  }), `\u96FB\u5BB9\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u96FB\u5BB9\u5F0F\u89F8\u63A7\u986F\u793A\u5668\u5177\u6709\u66F4\u9AD8\u7684\u89F8\u63A7\u9748\u654F\u5EA6\uFF0C\u9019\u5728\u9700\u8981\u66F4\u5148\u9032\u7684\u89F8\u63A7\u64CD\u4F5C\uFF08\u5982\u62D6\u62C9\u3001\u8F15\u6383\u7B49\uFF09\u4E2D\u662F\u5F88\u91CD\u8981\u7684\u5B83\u4E5F\u662F\u73FE\u4EE3\u88DD\u7F6E\u4E2D\u4F7F\u7528\u6700\u591A\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u800C\u5B83\u5011\u4E5F\u66F4\u6602\u8CB4\uFF0C\u4E14\u5F80\u5F80\u4E0D\u80FD\u6234\u624B\u5957\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5982\u679C\u9019\u4E00\u9EDE\u5F88\u91CD\u8981\uFF0C\u4E5F\u8A31\u96FB\u963B\u5F0F\u662F\u89E3\u6C7A\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive"
  }), `\u96FB\u963B\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u7A2E\u66F4\u4FBF\u5B9C\u7684\u66FF\u4EE3\u54C1\u4E0D\u592A\u654F\u611F\uFF0C\u5728\u967D\u5149\u4E0B\u80FD\u898B\u5EA6\u4F4E\uFF0C\u4F46\u53EF\u4EE5\u6234\u624B\u5957\u64CD\u4F5C\uFF0C\u800C\u4E14\u5B83\u5C0D\u610F\u5916\u7684\u63A5\u89F8\u4E0D\u592A\u654F\u611F\uFF0C\u901A\u5E38\u4E5F\u66F4\u8010\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u6240\u6709\u7684\u89F8\u63A7\u64CD\u4F5C\u90FD\u7531\u7C21\u55AE\u7684\u9EDE\u6309\u6309\u9215\u7D44\u6210\uFF0C\u5247\u96FB\u963B\u986F\u793A\u5668\u53EF\u80FD\u5C31\u8DB3\u5920\u4E86\u3002 STM32F429-DISCO \u677F\u4F7F\u7528\u96FB\u963B\u5F0F\u89F8\u63A7\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "animations"
  }), `Animations`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u786C\u9AD4\u7684\u50B3\u8F38\u91CF\u548C\u8A08\u7B97\u80FD\u529B\u4E0D\u8DB3\uFF0C\u57F7\u884C\u8907\u96DC\u7684\u52D5\u756B\uFF08\u5982\u5168\u5C4F\u8F49\u63DB\u3001\u65CB\u8F49\u548C\u7E2E\u653E\uFF09\u53EF\u80FD\u6703\u5C0D\u6548\u80FD\u7522\u751F\u91CD\u5927\u5F71\u97FF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6C7A\u5B9A\u61C9\u7528\u7A0B\u5F0F\u4E2D\u7684\u52D5\u756B\u7B49\u7D1A\u6642\uFF0C\u60A8\u9700\u8981\u554F\u81EA\u5DF1\u7684\u4E00\u4E9B\u554F\u984C\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u662F\u5426\u9700\u8981\u9AD8\u901F\u5168\u5C4F\u8F49\u63DB\uFF1F`), `\u5168\u87A2\u5E55\u8F49\u63DB\u9700\u8981\u6E32\u67D3\u5B8C\u6574\u7684\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u56E0\u6B64\u4F9D\u8CF4\u65BC\u8DB3\u5920\u7684 MCU \u6642\u8108\uFF0C\u4EE5\u53CA\u8DB3\u5920\u5FEB\u7684\u5B58\u53D6\u548C\u50B3\u8F38\u50CF\u7D20\u8CC7\u6599 \u6240\u9700\u7684\u7CFB\u7D71\u6548\u80FD\u9084\u53D6\u6C7A\u65BC\u89E3\u6790\u5EA6\u548C\u984F\u8272\u6DF1\u5EA6\u3002 \u5EFA\u8B70\u5728STM32\u9AD8\u6548\u80FD\u7522\u54C1\u4E0A\u4F7F\u7528\u9AD8\u89E3\u6790\u5EA6\u5168\u5C4F\u8F49\u63DB\u3002 \u67D0\u4E9B\u8F49\u63DB\u9700\u8981\u984D\u5916\u7684\u5132\u5B58\u7A7A\u9593\uFF0C\u56E0\u6B64\u53EF\u80FD\u5C0E\u81F4\u9700\u8981\u66F4\u5927\u7684\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u662F\u5426\u9700\u8981\u8907\u96DC\u7684\u7D0B\u7406\u8CBC\u5716\u52D5\u756B\uFF0C\u5982\u65CB\u8F49\u548C\u7E2E\u653E\uFF1F`), `\u5728\u8A08\u7B97\u548C\u50B3\u8F38\u9EDE\u9663\u5716\u6642\uFF0C\u9A45\u52D5\u7D0B\u7406\u8CBC\u5716\u9032\u884C\u52D5\u756B\u7E6A\u88FD\u5728\u7CFB\u7D71\u4E0A\u53EF\u80FD\u76F8\u7576\u5BC6\u96C6\uFF0C\u56E0\u6B64\u901A\u5E38\u9700\u8981\u66F4\u9AD8\u7684 MHz \u548C\u8F03\u9AD8\u7684\u8A18\u61B6\u9AD4\u8F38\u9001\u91CF\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/animations.gif",
    width: "480",
    mdxType: "Figure"
  }, "Animations"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mechanical-design-requirements"
  }), `\u6A5F\u68B0\u8A2D\u8A08\u8981\u6C42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7522\u54C1\u7684\u7269\u7406\u5916\u6BBC\u8981\u6C42\u6703\u6709\u5F88\u5927\u7684\u5DEE\u7570\uFF0C\u4E26\u53EF\u80FD\u5C0D\u9078\u64C7\u7684\u786C\u9AD4\u7522\u751F\u5F71\u97FF\u3002 \u5BB6\u7528\u96FB\u5668\u8207\u5DE5\u696D\u7528\u9014\u6709\u4E0D\u540C\u7684\u8981\u6C42\uFF0C\u56E0\u6B64\uFF0C\u5728\u4E86\u89E3\u7269\u7406\u9650\u5236\u4E4B\u5F8C\uFF0C\u60A8\u61C9\u8A72\u8003\u616E\u7684\u4E00\u4E9B\u554F\u984C\u53EF\u80FD\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u7522\u54C1\u9700\u6C42\u662F\u5426\u975E\u5E38\u5C0F\uFF1F`), `\u4F8B\u5982\u667A\u6167\u578B\u624B\u9336\uFF0C\u5176\u5916\u6BBC\u5C3A\u5BF8\u6709\u9650\uFF0C\u9650\u5236\u4E86\u96FB\u8DEF\u677F\u7684\u5927\u5C0F\uFF0C\u56E0\u6B64\u9078\u64C7\u6B63\u78BA\u7684\u5143\u4EF6\u975E\u5E38\u91CD\u8981\u3002 STM32 \u63D0\u4F9B\u5404\u7A2E\u5404\u6A23\u7684 MCU \u5957\u4EF6\uFF0C\u5982 WLCSP \u5957\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u7522\u54C1\u662F\u5426\u6703\u53D7\u5230\u6975\u7AEF\u6EAB\u5EA6\u7684\u50B7\u5BB3\uFF1F`), `\u96FB\u5BB9\u986F\u793A\u5668\u5728\u7570\u5E38\u9AD8\u6EAB\u6216\u7570\u5E38\u5BD2\u51B7\u6642\u53EF\u80FD\u6703\u6548\u80FD\u4E0D\u4F73\u3002 \u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u5728\u51B7\u51CD\u5EAB\u4E2D\u5B89\u88DD\u7522\u54C1\uFF0C\u96FB\u963B\u986F\u793A\u5668\u53EF\u80FD\u6703\u7372\u5F97\u66F4\u597D\u7684\u4F7F\u7528\u8005\u9AD4\u9A57\u3002 STM32 \u7522\u54C1\u7D44\u5408\u63D0\u4F9B\u74B0\u5883\u6EAB\u5EA6\u7BC4\u570D\u9AD8\u905485\u3001105\u548C125\u5EA6\u7684\u5FAE\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u7522\u54C1\u662F\u5426\u9700\u8981\u5C0D\u5BA4\u5916\u74B0\u5883\u56E0\u7D20\uFF08\u5982\u6C34\u6216\u7070\u5875\uFF09\u5177\u6709\u5F88\u5F37\u7684\u62B5\u6297\u529B\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5F37\u967D\u5149\u4E0B\u7684\u53EF\u8996\u6027\u91CD\u8981\u55CE\uFF1F`), `\u986F\u793A\u5668\u5728\u71ED\u5149\u548C\u6D41\u660E\u4E2D\u5404\u4E0D\u76F8\u540C\uFF0C\u986F\u793A\u5668\u7684\u6D41\u660E\u548C\u71ED\u5149\u8D8A\u9AD8\uFF0C\u986F\u793A\u5668\u7684\u53EF\u8B80\u6027\u8D8A\u9AD8\u3002 \u6DFB\u52A0\u7279\u6B8A\u7684\u4FDD\u8B77\u677F\u4E5F\u53EF\u4EE5\u6539\u5584\u9019\u4E00\u9EDE\u3002 \u6216\u8005\u4F7F\u7528\u53E6\u4E00\u7A2E\u53EF\u80FD\u63D0\u4F9B\u53CD\u5149\u529F\u80FD\u7684\u986F\u793A\u6280\u8853\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frames-per-second"
  }), `\u6BCF\u79D2\u5E40\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u79D2\u66F4\u9AD8\u7A69\u5B9A\u7684\u756B\u9762\u5E40\u6578 \uFF08FPS\uFF09\u901A\u5E38\u66F4\u597D\uFF0C\u56E0\u70BA\u9019\u6A23\u53EF\u4EE5\u4F7F\u61C9\u7528\u7A0B\u5F0F\u770B\u8D77\u4F86\u66F4\u6D41\u66A2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u6709\u6642 FPS \u4E0D\u592A\u91CD\u8981\u3002 \u4F8B\u5982\uFF0C\u5728\u975C\u614BGUI\u4E2D\uFF0C\u5177\u6709\u6700\u5C0F\u986F\u793A\u52D5\u756B\u66F4\u65B0\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u4F4E\u6210\u672C\u786C\u9AD4\u53EF\u80FD\u66F4\u52A0\u5408\u9069\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u64C1\u6709\u4E00\u500B\u6F02\u4EAE\u6D41\u66A2\u4E26\u5E36\u6709\u8A31\u591A\u83EF\u9E97\u52D5\u756B\u7684\u61C9\u7528\u7A0B\u5F0F\u4E5F\u53EF\u4EE5\u662F\u4E00\u500B\u5DE8\u5927\u7684\u8CE3\u9EDE\uFF0C\u9019\u53D6\u6C7A\u65BC\u76EE\u6A19\u4F7F\u7528\u8005\u6240\u5728\u7684\u884C\u696D\uFF0C\u56E0\u6B64\u8207\u786C\u9AD4\u9078\u64C7\u76F8\u95DC\u7684\u4EFB\u4F55\u4E8B\u60C5\u90FD\u662F\u70BA\u4E86\u6EFF\u8DB3\u6700\u7D42\u4F7F\u7528\u8005\u7684\u671F\u671B\uFF0C\u4E26\u63D0\u4F9B\u826F\u597D\u7684\u4F7F\u7528\u8005\u9AD4\u9A57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u6574\u9AD4\u6548\u80FD\u6B78\u7D50\u70BA\u7CFB\u7D71\u5C64\u9762\u7684\u6548\u80FD\uFF0C\u5305\u62EC MCU\u3001RAM\u3001Flash\u3001\u986F\u793A\u3001\u4ECB\u9762\u50B3\u8F38\u91CF\u7B49\u5143\u4EF6\uFF0C\u4EE5\u53CA STM32 Chrom -ART \u7B49\u786C\u9AD4\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u5716\u793A\u6982\u62EC\u7684\u63CF\u7E6A\u4E86\u4E00\u4E9B\u4E0D\u540C\u53C3\u6578\u7684\u5F71\u97FF\u3002 \u8981\u9078\u64C7\u6B63\u78BA\u7684\u786C\u9AD4\uFF0C\u9700\u8981\u8003\u616E\u9019\u4E9B\u53C3\u6578\u3002 \u540C\u6642\u8003\u616E\u5230STM32 Chrom -ART\u6B63\u5728\u6E1B\u8F15MCU\u7684\u5DE5\u4F5C\u91CF\uFF0C\u56E0\u6B64\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\u964D\u4F4E\u4E86\u9AD8MCU\u983B\u7387\u7684\u91CD\u8981\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/fps-figures.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4E0D\u540C\u53C3\u6578\u5C0D FPS \u7684\u5F71\u97FF"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);