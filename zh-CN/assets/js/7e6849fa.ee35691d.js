"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3715],{

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

/***/ 86359:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6771);
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
  id: "achieving-better-performance-with-cacheable-container",
  title: "\u7528\u53EF\u7F13\u5B58\u5BB9\u5668\u5B9E\u73B0\u66F4\u4F18\u6027\u80FD"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "id": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "title": "\u7528\u53EF\u7F13\u5B58\u5BB9\u5668\u5B9E\u73B0\u66F4\u4F18\u6027\u80FD",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "achieving-better-performance-with-cacheable-container",
    "title": "\u7528\u53EF\u7F13\u5B58\u5BB9\u5668\u5B9E\u73B0\u66F4\u4F18\u6027\u80FD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-CN/docs/category/scenarios-1"
  },
  "next": {
    "title": "\u52A8\u6001\u52A0\u8F7D\u56FE\u50CF",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/loading-images-at-runtime"
  }
};
const assets = {};





const toc = [{
  value: "\u6027\u80FD\u5F71\u54CD",
  id: "performance-impact",
  level: 2
}, {
  value: "\u6D4B\u8BD5\u5E94\u7528",
  id: "test-application",
  level: 2
}, {
  value: "\u91CD\u7ED8\u590D\u6742\u5BB9\u5668\u7684\u6027\u80FD",
  id: "performance-of-redrawing-complex-containers",
  level: 2
}, {
  value: "\u901A\u8FC7\u7F13\u5B58\u6539\u5584\u6027\u80FD",
  id: "improving-performance-through-caching",
  level: 2
}, {
  value: "\u7ED3\u8BBA",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u4ECB\u7ECD\u5982\u4F55\u901A\u8FC7\u4F7F\u7528RAM\u6765\u8282\u7EA6\u4E00\u4E9B\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u7ED8\u5236\uFF0C\u4ECE\u800C\u5728\u4E00\u4E9B\u52A8\u753B\u573A\u666F\u4E2D\u5B9E\u73B0\u66F4\u4F18\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5E94\u7528\u4E2D\u901A\u8FC7\u62D6\u62FD\u6216\u52A8\u753B\u79FB\u52A8\u63A7\u4EF6\uFF08\u5982Image\u6216TextArea\uFF09\u65F6\uFF0CTouchGFX\u9700\u8981\u5728\u6BCF\u4E00\u5E27\u4E2D\u7684\u65B0\u4F4D\u7F6E\u91CD\u65B0\u7ED8\u5236\u8FD9\u4E9B\u63A7\u4EF6\uFF0C\u53E6\u5916\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD8\u9700\u8981\u91CD\u65B0\u7ED8\u5236\u4E4B\u524D\u88AB\u8FD9\u4E9B\u63A7\u4EF6\u8986\u76D6\u7684\u90E8\u5206\u80CC\u666F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u8FD9\u4E9B\u63A7\u4EF6\u5728\u8BA1\u7B97\u4E0A\u5341\u5206\u590D\u6742\u65F6\uFF0C\u5982\u7EB9\u7406\u6620\u5C04\u5668\u3001\u5F62\u72B6\u548C\u5927\u5C3A\u5BF8\u900F\u660E\u56FE\u50CF\uFF0C\u7531\u4E8E\u6CA1\u6709\u786C\u4EF6\u52A0\u901F\uFF0CMCU\u96BE\u4EE5\u9AD8\u6548\u5730\u8FDB\u884C\u6E32\u67D3\u3002 \u5BFC\u81F4\u5C4F\u5E55\u91CD\u65B0\u7ED8\u5236\u4F1A\u8017\u8D39\u5F88\u591A\u95F4\uFF0C\u8FDB\u800C\u5F71\u54CD\u5E94\u7528\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u4EEC\u5C06\u8BA8\u8BBA\u5982\u4F55\u4F7F\u7528\u53EF\u7F13\u5B58\u5BB9\u5668\uFF0C\u901A\u8FC7\u907F\u514D\u9AD8\u6210\u672C\u7684\u91CD\u65B0\u7ED8\u5236\u4E3A\u5305\u542B\u8BA1\u7B97\u590D\u6742\u5143\u7D20\u7684\u52A8\u753B\u52A0\u901F\u3002  \u867D\u7136\u6211\u4EEC\u4F7F\u7528\u7684\u662FSTM32F429Discovery\u677F\u6267\u884C\u7684\u672C\u6587\u4E2D\u7684\u6D4B\u91CF\uFF0C\u53EF\u7F13\u5B58\u5BB9\u5668\u6280\u672F\u4E5F\u5E7F\u6CDB\u5730\u5E94\u7528\u4E8E\u5176\u4ED6\u786C\u4EF6\u5E73\u53F0\u3002 \u4E3A\u4E86\u521B\u5EFA\u4F4D\u56FE\u7F13\u5B58\uFF0C\u9700\u8981\u4E00\u4E9B\u53EF\u7528\u7684RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53E6\u8BF7\u9605\u8BFB", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u52A8\u6001\u4F4D\u56FE"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-impact"
  }), `\u6027\u80FD\u5F71\u54CD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u4F7F\u7528MCU\u79FB\u52A8\u8BA1\u7B97\u6210\u672C\u9AD8\u7684\u63A7\u4EF6\u4F1A\u5F71\u54CD\u6027\u80FD\uFF0C\u5305\u542B\u8BB8\u591A\u5C0F\u6B65\u9AA4\u7684\u52A8\u753B\u4F1A\u56E0\u4E3A\u6BCF\u4E00\u5E27\u7684\u6E32\u67D3\u65F6\u95F4\u8FC7\u957F\u800C\u663E\u5F97\u7F13\u6162\u548C\u8FDF\u6EDE\u3002 \u4E3A\u4E86\u66F4\u5FEB\u5B8C\u6210\u52A8\u753B\uFF08\u5728\u65F6\u95F4\u4E0A\uFF09\u5BF9\u52A8\u753B\u8FDB\u884C\u7F16\u7A0B\u4F1A\u5BFC\u81F4\u6BCF\u6B65\u53D8\u5927\uFF0C\u5E76\u4E14\u52A8\u753B\u4F1A\u663E\u5F97\u6D41\u7545\u5EA6\u4E0D\u591F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u4E2A\u5728STM32F429-DISCO\u677F\uFF08240x320\uFF09\u4E0A\u8FD0\u884C\u7684\u4F8B\u5B50\uFF0C\u5176\u4E2D\u6709\u4E00\u4E2A\u5168\u5C4F\u5BB9\u5668\u5782\u76F4\u5411\u4E0A\u79FB\u52A8\uFF0C\u53E6\u4E00\u4E2A\u7C7B\u4F3C\u7684\u5BB9\u5668\u4ECE\u5E95\u90E8\u79FB\u5165\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u89C6\u9891\u4E2D\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/toggle-button"
  }), `ToggleButton`), `\u7528\u4E8E\u5207\u6362\u53EF\u7F13\u5B58\u5BB9\u5668\u542F\u7528\u548C\u7981\u7528\u3002 \u6027\u80FD\u5DEE\u5F02\u663E\u800C\u6613\u89C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E24\u4E2A\u79FB\u52A8\u7684\u5BB9\u5668\u90FD\u5305\u542B\u4E00\u4E2A\u80CC\u666F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u6846`), `\u3001\u4E00\u4E2A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `\u6587\u672C\u533A`), `\u3001 \u548C\u4E00\u4E2A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `\u7EB9\u7406\u6620\u5C04\u5668`), `\u3002 \u7EB9\u7406\u6620\u5C04\u5668\u914D\u7F6E\u4E3A\u4F7F\u7528\u53CC\u7EBF\u6027\u6E32\u67D3\u7B97\u6CD5\uFF0C\u5168\u5C40\u963F\u5C14\u6CD5\u503C\u4E3A174\uFF0C\u8FD9\u4F7F\u5F97\u5176\u7ED8\u5236\u6210\u672C\u9AD8\u6602\u3002 \u5728STM32F429-DISCO\u677F\u4E0A\uFF0C\u6574\u4E2A\u5C4F\u5E55\u7684\u6E32\u67D3\u65F6\u95F4\u7EA6\u4E3A100 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-application"
  }), `\u6D4B\u8BD5\u5E94\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u79FB\u52A8\u8FD9\u4E24\u4E2A\u5143\u7D20\uFF0C\u540C\u65F6\u7EF4\u6301\u5B83\u4EEC\u7684\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u5C06\u5B83\u4EEC\u653E\u5728\u4E00\u4E2A\u540D\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u7684\u7236\u5BB9\u5668\u4E2D\uFF0C\u7236\u5BB9\u5668\u7684\u9AD8\u5EA6\u662F\u4EFB\u4F55\u4E00\u4E2A\u5B50\u5BB9\u5668\u7684\u4E24\u500D\uFF0C\u5176\u5C3A\u5BF8\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `240 x 640 (2*320)`), `\u3002 \u901A\u8FC7\u5728TouchGFX Designer\u4E2D\u5C06\u5BB9\u5668\u58F0\u660E\u4E3A\u79FB\u52A8\u52A8\u753B\u7C7B\uFF0C\u4F7F\u5176\u80FD\u591F\u63A5\u6536\u5E94\u7528ticks\u5E76\u968F\u65F6\u95F4\u7684\u63A8\u79FB\u5F62\u6210\u52A8\u753B\uFF0C\u5728\u8FD9\u6BB5\u65F6\u95F4\u91CC\u53EF\u4EE5\u6D4B\u91CF\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.png",
    mdxType: "Figure"
  }, "\u53EF\u7F13\u5B58\u5BB9\u5668\u6D4B\u8BD5\u5E94\u7528\u603B\u89C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u65B9\u5BB9\u5668\u540D\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uFF0C\u5904\u4E8E\u4F4D\u7F6E (x=0, y=0)\u3002 \u4E0B\u65B9\u5BB9\u5668\u540D\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uFF0C\u5904\u4E8E\u4F4D\u7F6E (x=0, y=320)\uFF0C\u5728\u7236\u5BB9\u5668`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u4E2D\uFF0C\u5B83\u4F4D\u4E8Econtainer1\u7684\u6B63\u4E0B\u65B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u4E2D\uFF0C\u5728\u6211\u4EEC\u79FB\u52A8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u65F6\uFF0C\u4E24\u4E2A\u5143\u7D20\u4F1A\u4E00\u8D77\u79FB\u52A8\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u5C06`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u79FB\u52A8\u5230\u4F4D\u7F6E (x=0, y=320)\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u5C06\u4E0D\u53EF\u89C1\uFF0C\u800C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u5C06\u5B8C\u5168\u53EF\u89C1\u3002 \u8FD9\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u52A8\u753B\u53EF\u4F7F\u7528TouchGFX Designer\u4E2D\u7684\u4EA4\u4E92\u6765\u521B\u5EFA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u4EE3\u7801\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u4F4D\u4E8E\u4E0B\u65B9\u65F6\u5411\u4E0A\u79FB\u52A8\uFF0C\u5728\u5B83\u5DF2\u7ECF\u4F4D\u4E8E\u4E0A\u65B9\u65F6\u5411\u4E0B\u79FB\u52A8\u3002 \u4E3A\u7B80\u5355\u8D77\u89C1\uFF0C\u5C06\u4EE3\u7801\u63D2\u5165\u89C6\u56FE\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleClickEvent`), ` \u4E8B\u4EF6\u53E5\u67C4\u4E2D\uFF0C\u5B9E\u73B0\u5728\u7528\u6237\u89E6\u6478\u5C4F\u5E55\u4E0A\u7684\u4EFB\u4F55\u4F4D\u7F6E\uFF08ToggleButton\u4EE5\u4E0B\uFF09\u65F6\u6267\u884C\u4EE3\u7801\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-12}",
    "{9-12}": true
  }), `void Screen1View::handleClickEvent(const ClickEvent& evt)
{
    //Forward event to base View (for the ToggleButton to work)
    View::handleClickEvent(evt);
    //If touch is released and y > 50 (below the ToggleButton), move masterContainer
    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)
    {
        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;
        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,
                            20 /* ticks */,
                            EasingEquations::cubicEaseInOut,
                            EasingEquations::cubicEaseInOut);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-of-redrawing-complex-containers"
  }), `\u91CD\u7ED8\u590D\u6742\u5BB9\u5668\u7684\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u6587\u6240\u8FF0\uFF0C\u5F53MCU\u5FC5\u987B\u5728\u52A8\u753B\u7684\u6BCF\u4E00\u4E2A\u5C0F\u6B65\u9AA4\u91CD\u65B0\u7ED8\u5236\u9AD8\u6210\u672C\u7684\u7EB9\u7406\u6620\u5C04\u5668\u65F6\uFF0C\u4E00\u4E2A\u5E27\u7684\u6E32\u67D3\u65F6\u95F4\u7EA6\u4E3A100 ms\u3002 \u76F8\u5F53\u4E8E\u6BCF\u79D210\u5E27\uFF08fps\uFF09\u3002 \u6574\u4E2A\u52A8\u753B\u670920\u5E27\uFF0C\u56E0\u6B64\u9700\u8981\u7EA6\u4E24\u79D2\u949F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32F429-DISCO\u8BC4\u4F30\u5957\u4EF6\u4E0A\uFF0C\u6E32\u67D3\u65F6\u95F4\u4F5C\u4E3AGPIO G14\u4E0A\u7684\u6570\u5B57\u4FE1\u53F7\u6765\u63D0\u4F9B\u3002 VSYNC\u4FE1\u53F7\u5728G13\u4E0A\u63D0\u4F9B\u3002 GPIO\u914D\u7F6E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `GPIO.cpp`), `\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u56FE\u662F\u5411\u4E0A\u79FB\u52A8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u65F6\uFF0C\u5E94\u7528\u7684VSYNC\u548CRENDER_TIME\u7684\u6D4B\u91CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",
    mdxType: "Figure"
  }, "Saleae Logic Software VSYNC\u548C\u6E32\u67D3\u65F6\u95F4\u6D4B\u91CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u65F6\u95F4\u662F\u7B2C\u4E00\u4E2A\u4FE1\u53F7\uFF08\u4F4E\u7535\u5E73\u6709\u6548\uFF09\u3002 \u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u79FB\u52A8\u52A8\u753B\u4E2D\u7B2C\u4E00\u5E27\u7684\u6E32\u67D3\u65F6\u95F4\u662F99.29 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F83\u4F4E\u7684\u4FE1\u53F7\u662FVSYNC\uFF0C\u5728\u50CF\u7D20\u65F6\u949F\u5F00\u59CB\u8F93\u51FA\u5230\u5C4F\u65F6\uFF0C\u6BCF\u5E27\u90FD\u6709\u4E00\u4E2A\u4ECE\u9AD8\u5411\u4F4E\u7684\u8F6C\u6362\u8FC7\u7A0B\u3002 \u5728\u4E0A\u9762\u6D4B\u91CF\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u7ED8\u5236\u5355\u5E27\u5360\u4E86\u5C4F\u663E7\u5E27\u7684\u65F6\u95F4\u3002 \u5728\u7B2C8\u4E2AVSYNC\u4FE1\u53F7\u65F6\u5F00\u59CB\u4E0B\u4E00\u5E27\u7684\u6E32\u67D3\u3002 \u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\uFF0C\u663E\u793A\u5C4F\u91CD\u590D\u663E\u793A\u5DF2\u7ED8\u5236\u7684\u4E0A\u4E00\u5E27\u7684\u5185\u5BB9\uFF08\u5728\u53E6\u4E00\u4E2A\u5E27\u7F13\u51B2\u4E2D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "improving-performance-through-caching"
  }), `\u901A\u8FC7\u7F13\u5B58\u6539\u5584\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u5BB9\u5668\u6E32\u67D3\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\u6765\u6539\u5584\u4E0A\u9762\u79FB\u52A8\u52A8\u753B\u7684\u6027\u80FD\u3002 \u6B64\u540E\uFF0C\u6211\u4EEC\u53EA\u9700\u5C06\u8BE5\u5185\u5B58\u4E2D\u7684\u50CF\u7D20\u79FB\u52A8\u5230\u5E27\u7F13\u51B2\uFF08\u4F7F\u7528DMA\uFF09\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528MCU\u91CD\u65B0\u7ED8\u5236\u590D\u6742\u7684\u63A7\u4EF6\u3002 \u5373\u4F7F\u5E94\u7528\u53EA\u4F7F\u7528MCU\u5C31\u53EF\u4EE5\u8FBE\u5230\u6BCF\u79D260\u5E27\uFF0C\u4E5F\u4F1A\u5FD9\u4E8E\uFF08\u53EF\u80FD\u662F100% MCU\u8D1F\u8F7D\uFF09\u91CD\u590D\u6267\u884C\u76F8\u540C\u8BA1\u7B97\uFF0C\u800C\u4E0D\u662F\u6267\u884C\u66F4\u91CD\u8981\u7684\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u5BB9\u5668\u7684\u8FD9\u4E2A\u201C\u5185\u5B58\u56FE\u50CF\u201D\u53EF\u4EE5\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u7684\u4E0D\u540C\u4F4D\u7F6E\uFF0C\u65E0\u9700\u91CD\u65B0\u6E32\u67D3\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E00\u6B65\u5C31\u662F\u901A\u8FC7TouchGFX Designer\u4F7F\u80FD\u7F13\u5B58\uFF0C\u52FE\u9009\u5BB9\u5668\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cacheable`), ` \u5C5E\u6027\uFF0C\u5305\u62EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u5BB9\u5668\u201D\u63A7\u4EF6\u7684\u201C\u53EF\u7F13\u5B58\u5BB9\u5668\u201D\u9009\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u6B65\u662F\u5728\u53EF\u4EE5\u5C06\u5BB9\u5668\u7F13\u5B58\u5230\u5176\u4E2D\u7684RAM\u4E2D\u521B\u5EFA\u4E24\u5E45\u52A8\u6001\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u786E\u5B9A\u4F4D\u56FE\u7F13\u5B58\u5728RAM\u4E2D\u7684\u5B58\u50A8\u5730\u5740\u3002 \u5C31\u672C\u4F8B\u800C\u8A00\uFF0C\u6211\u4EEC\u5C06\u5B83\u653E\u5728SDRAM\u4E2D\uFF08STM32F429\u4E0A\u4ECE\u5730\u57400xd0000000\u5F00\u59CB\uFF09\uFF0C\u5C31\u5728\u5E27\u7F13\u51B2\u4E4B\u540E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8EWindows\u4EFF\u771F\u5668\uFF0C\u5728\u5168\u5C40\u53D8\u91CF\u4E2D\u5206\u914D\u7F13\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
    uint32_t sdramBuffer[8*1024*1024/4];
    uint16_t* sdram = (uint16_t*)sdramBuffer;
#else
    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u521D\u59CB\u5316\u4F4D\u56FE\u7F13\u5B58\u5E76\u521B\u5EFA\u4E24\u5E45\u52A8\u6001\u4F4D\u56FE\u7528\u4E8E\u7F13\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2}",
    "{2-2}": true
  }), `//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb
Bitmap::setCache(sdram, 320*1024, 2); //320Kb cache
dynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);
dynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C06\u52A8\u6001\u4F4D\u56FE\u5206\u914D\u7ED9\u5BB9\u5668\u5E76\u5C06\u5B83\u4EEC\u8BBE\u7F6E\u4E3A\u7F13\u5B58\u6A21\u5F0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Assign the bitmaps to the Cacheable Containers
container1.setCacheBitmap(dynamicBitmap1);
container2.setCacheBitmap(dynamicBitmap2);

//Enable caching
container1.enableCachedMode(true);
container2.enableCachedMode(true);

//Finally update the cached bitmaps
container1.updateCache();
container2.updateCache();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container::updateCache()`), `\u4F1A\u5C06\u4E24\u4E2A\u5BB9\u5668\u6E32\u67D3\u5230\u5B83\u4EEC\u5404\u81EA\u7684\u4F4D\u56FE\u4E2D\u3002 \u5728\u4EFB\u4F55\u9700\u8981\u5BB9\u5668\u66F4\u65B0\u72B6\u6001\u7684\u65F6\u5019\u8C03\u7528\u6B64\u65B9\u6CD5\u3002 \u8FD9\u5FC5\u987B\u7531\u5F00\u53D1\u8005\u5728\u5E94\u7528\u4EE3\u7801\u4E2D\u8FDB\u884C\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u542F\u7528\u7F13\u5B58\u540E\uFF0C\u73B0\u5728\u7684\u6027\u80FD\u6D4B\u91CF\u663E\u793A\uFF0C\u6E32\u67D3\u65F6\u95F4\u4ECE~99ms\u7F29\u77ED\u5230~5ms\uFF0C\u8FD9\u610F\u5473\u7740\u53EF\u4EE5\u8F7B\u677E\u5730\u4EE560\u5E27\u6BCF\u79D2\u7684\u901F\u5EA6\u8FDB\u884C\u6E32\u67D3\uFF0C\u5E76\u572820\u5E27\u5185\u5B8C\u6210\u6574\u4E2A\u52A8\u753B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",
    mdxType: "Figure"
  }, "Saleae Logic Software VSYNC\u548C\u6E32\u67D3\u65F6\u95F4\u6D4B\u91CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7ED3\u8BBA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5BF9\u8C61\u5728\u8BA1\u7B97\u4E0A\u5341\u5206\u590D\u6742\u4E14\u5728\u4E0D\u540C\u52A8\u753B\u6B65\u9AA4\u4E4B\u95F4\u65E0\u53D8\u5316\uFF0C\u5728\u5236\u6210\u52A8\u753B\uFF08\u9891\u7E41\u79FB\u52A8\uFF09\u65F6\uFF0C\u4F7F\u7528\u5305\u542B\u52A8\u6001\u4F4D\u56FE\u7684\u53EF\u7F13\u5B58\u5BB9\u5668\u53EF\u663E\u8457\u7F29\u77ED\u6E32\u67D3\u65F6\u95F4\u3002 \u5982\u679C\u7F13\u5B58\u5FC5\u987B\u66F4\u65B0\uFF08\u5982\u65F6\u95F4\u66F4\u65B0\u65F6\u7684\u8868\u76D8\uFF09\uFF0C\u5728\u5E94\u7528\u63A7\u5236\u52A8\u753B\u671F\u95F4\uFF0C\u53EF\u4EE5\u5728\u7279\u5B9A\u7684\u70B9\u91CD\u65B0\u8BA1\u7B97\u7F13\u5B58\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u52A8\u6001\u4F4D\u56FE")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "loading-images-at-runtime",
    mdxType: "Link"
  }, "\u52A8\u6001\u4F4D\u56FE\uFF1A\u5728\u8FD0\u884C\u65F6\u52A0\u8F7D\u56FE\u50CF"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);