"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9041],{

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

/***/ 63564:
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
  title: "\u7528\u53EF\u7DE9\u5B58\u5BB9\u5668\u5BE6\u73FE\u66F4\u512A\u6027\u80FD"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "id": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "title": "\u7528\u53EF\u7DE9\u5B58\u5BB9\u5668\u5BE6\u73FE\u66F4\u512A\u6027\u80FD",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "achieving-better-performance-with-cacheable-container",
    "title": "\u7528\u53EF\u7DE9\u5B58\u5BB9\u5668\u5BE6\u73FE\u66F4\u512A\u6027\u80FD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-TW/docs/category/scenarios-1"
  },
  "next": {
    "title": "\u5728\u57F7\u884C\u6642\u9593\u8F09\u5165\u5716\u50CF",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/scenarios/loading-images-at-runtime"
  }
};
const assets = {};





const toc = [{
  value: "\u6027\u80FD\u5F71\u97FF",
  id: "performance-impact",
  level: 2
}, {
  value: "\u6E2C\u8A66\u61C9\u7528",
  id: "test-application",
  level: 2
}, {
  value: "\u91CD\u65B0\u7E6A\u88FD\u8907\u96DC\u5BB9\u5668\u7684\u6027\u80FD",
  id: "performance-of-redrawing-complex-containers",
  level: 2
}, {
  value: "\u901A\u904E\u7DE9\u5B58\u6539\u5584\u6027\u80FD",
  id: "improving-performance-through-caching",
  level: 2
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u4ECB\u7D39\u5982\u4F55\u901A\u904E\u4F7F\u7528RAM\u4F86\u7BC0\u7D04\u4E00\u4E9B\u53EF\u91CD\u8907\u4F7F\u7528\u7684\u7E6A\u88FD\uFF0C\u5F9E\u800C\u5728\u4E00\u4E9B\u52D5\u756B\u5834\u666F\u4E2D\u5BE6\u73FE\u66F4\u512A\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u61C9\u7528\u4E2D\u901A\u904E\u62D6\u62FD\u6216\u52D5\u756B\u79FB\u52D5\u5C0F\u5DE5\u5177\uFF08\u5982Image\u6216TextArea\uFF09\u6642\uFF0CTouchGFX\u9700\u8981\u5728\u6BCF\u4E00\u5E40\u4E2D\u7684\u65B0\u4F4D\u7F6E\u91CD\u65B0\u7E6A\u88FD\u9019\u4E9B\u5C0F\u5DE5\u5177\uFF0C\u53E6\u5916\u5728\u5927\u591A\u6578\u60C5\u6CC1\u4E0B\uFF0C\u9084\u9700\u8981\u91CD\u65B0\u7E6A\u88FD\u4E4B\u524D\u88AB\u9019\u4E9B\u5C0F\u5DE5\u5177\u8986\u84CB\u7684\u90E8\u5206\u80CC\u666F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u9019\u4E9B\u5C0F\u5DE5\u5177\u5728\u8A08\u7B97\u4E0A\u5341\u5206\u8907\u96DC\u6642\uFF0C\u5982\u6587\u5B57\u6620\u5C04\u5668\u5C0F\u5DE5\u5177\u3001\u5F62\u72C0\u548C\u5927\u5C3A\u5BF8\u900F\u660E\u5716\u50CF\uFF0C\u7531\u65BC\u6C92\u6709\u786C\u9AD4\u52A0\u901F\uFF0CMCU\u5C07\u96E3\u4EE5\u9AD8\u6548\u5730\u9032\u884C\u6E32\u67D3\u3002 \u9019\u6703\u5C0E\u81F4\u87A2\u5E55\u91CD\u65B0\u7E6A\u88FD\uFF0C\u5C07\u8017\u8CBB\u5E7E\u6BEB\u79D2\u7684\u6642\u9593\u4E26\u5F71\u97FF\u61C9\u7528\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u5011\u5C07\u8A0E\u8AD6\u5982\u4F55\u4F7F\u7528\u53EF\u7DE9\u5B58\u5BB9\u5668\uFF0C\u901A\u904E\u907F\u514D\u9AD8\u6210\u672C\u7684\u91CD\u65B0\u7E6A\u88FD\u70BA\u5305\u542B\u8A08\u7B97\u8907\u96DC\u5143\u7D20\u7684\u52D5\u756B\u52A0\u901F\u3002  \u5728\u4F7F\u7528STM32F429Discovery\u958B\u767C\u677F\u57F7\u884C\u672C\u6587\u4E2D\u7684\u6E2C\u91CF\u540C\u6642\uFF0C\u53EF\u7DE9\u5B58\u5BB9\u5668\u6280\u8853\u5EE3\u6CDB\u5730\u61C9\u7528\u65BC\u5176\u4ED6\u786C\u9AD4\u5E73\u81FA\u3002 \u70BA\u4E86\u5275\u5EFA\u9EDE\u9663\u5716\u7DE9\u5B58\uFF0C\u9700\u8981\u4E00\u4E9B\u53EF\u7528\u7684RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53E6\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u52D5\u614B\u9EDE\u9663\u5716"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-impact"
  }), `\u6027\u80FD\u5F71\u97FF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u4F7F\u7528MCU\u79FB\u52D5\u8A08\u7B97\u6210\u672C\u9AD8\u7684\u5C0F\u5DE5\u5177\u6703\u5F71\u97FF\u6027\u80FD\uFF0C\u5305\u542B\u8A31\u591A\u5C0F\u6B65\u9A5F\u7684\u52D5\u756B\u6703\u56E0\u70BA\u6BCF\u4E00\u5E40\u7684\u6E32\u67D3\u6642\u9593\u904E\u9577\u800C\u986F\u5F97\u7DE9\u6162\u548C\u9072\u6EEF\u3002 \u70BA\u4E86\u66F4\u5FEB\u7D50\u675F\u52D5\u756B\uFF08\u5728\u6642\u9593\u4E0A\uFF09\u800C\u5C0D\u52D5\u756B\u9032\u884C\u7A0B\u5F0F\u8A2D\u8A08\u6703\u5C0E\u81F4\u6BCF\u500B\u6B65\u9A5F\u7684\u91CF\u8B8A\u5927\uFF0C\u4E26\u4E14\u52D5\u756B\u6703\u986F\u5F97\u4E0D\u6D41\u66A2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u500B\u5728STM32F429-DISCO\u958B\u767C\u677F\uFF08240x320\uFF09\u4E0A\u904B\u884C\u7684\u7BC4\u4F8B\uFF0C\u5176\u4E2D\u7684\u6EFF\u5C4F\u5BB9\u5668\u5782\u76F4\u5411\u4E0A\u79FB\u52D5\uFF0C\u800C\u4E00\u500B\u76F8\u4F3C\u5BB9\u5668\u5F9E\u5E95\u90E8\u79FB\u5165\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u5F71\u7247\u4E2D\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/toggle-button"
  }), `ToggleButton`), `\u5728\u53EF\u7DE9\u5B58\u5BB9\u5668\u555F\u7528\u548C\u505C\u7528\u4E4B\u9593\u5207\u63DB\u3002 \u6027\u80FD\u5DEE\u7570\u986F\u800C\u6613\u898B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u79FB\u52D5\u7684\u5169\u500B\u5BB9\u5668\u90FD\u5305\u542B\u80CC\u666F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u6846`), `\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `TextArea`), `, \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `\u6587\u5B57\u6620\u5C04\u5668`), `\u3002 \u5C07\u6587\u5B57\u6620\u5C04\u5668\u914D\u7F6E\u70BA\u4F7F\u7528\u96D9\u7DDA\u6027\u6E32\u67D3\u6F14\u7B97\u6CD5\u548C174\u7684\u5168\u57DF\u963F\u723E\u6CD5\u503C\uFF0C\u4F7F\u5176\u7E6A\u88FD\u6210\u672C\u9AD8\u6602\u3002 \u5728STM32F429-DISCO\u958B\u767C\u677F\u4E0A\uFF0C\u6574\u500B\u87A2\u5E55\u7684\u6E32\u67D3\u6642\u9593\u7D04\u70BA100 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-application"
  }), `\u6E2C\u8A66\u61C9\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u79FB\u52D5\u5169\u500B\u5143\u7D20\u540C\u6642\u7DAD\u6301\u5B83\u5011\u7684\u76F8\u5C0D\u4F4D\u7F6E\uFF0C\u5C07\u5B83\u5011\u653E\u5728\u4E00\u500B\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u7684\u7236\u5BB9\u5668\u4E2D\uFF0C\u7236\u5BB9\u5668\u7684\u9AD8\u5EA6\u662F\u4EFB\u4F55\u4E00\u500B\u5B50\u5BB9\u5668\u7684\u5169\u500D\uFF0C\u5F97\u5230\u5176\u5C3A\u5BF8\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `240 x 640 (2*320)`), `\u3002 \u901A\u904E\u5728TouchGFX Designer\u4E2D\u5C07\u5BB9\u5668\u5BA3\u544A\u70BA\u79FB\u52D5\u52D5\u756B\u5668\uFF0C\u5B83\u5C07\u80FD\u5920\u63A5\u6536\u61C9\u7528\u6A19\u8A18\u4E26\u96A8\u6642\u9593\u6D41\u901D\u5F62\u6210\u52D5\u756B\uFF0C\u5728\u9019\u6BB5\u6642\u9593\u88E1\u53EF\u4EE5\u6E2C\u91CF\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.png",
    mdxType: "Figure"
  }, "\u53EF\u7DE9\u5B58\u5BB9\u5668\u6E2C\u8A66\u61C9\u7528\u7E3D\u89BD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u65B9\u5BB9\u5668\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uFF0C\u8655\u65BC\u4F4D\u7F6E (x=0, y=0)\u3002 \u4E0B\u65B9\u5BB9\u5668\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uFF0C\u8655\u65BC\u4F4D\u7F6E (x=0, y=320)\uFF0C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u4E2D\uFF0C\u5B83\u4F4D\u65BCcontainer1\u7684\u6B63\u4E0B\u65B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u4E2D\uFF0C\u5728\u6211\u5011\u79FB\u52D5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u6642\uFF0C\u5169\u500B\u5143\u7D20\u6703\u4E00\u8D77\u79FB\u52D5\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u6211\u5011\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u79FB\u52D5\u5230\u4F4D\u7F6E (x=0, y=320)\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u5C07\u4E0D\u53EF\u898B\uFF0C\u800C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u5C07\u5B8C\u5168\u53EF\u898B\u3002 \u9019\u5169\u7A2E\u72C0\u614B\u4E4B\u9593\u7684\u52D5\u756B\u53EF\u4F7F\u7528TouchGFX Designer\u4E2D\u7684\u4EA4\u4E92\u4F86\u5275\u5EFA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u7A0B\u5F0F\u78BC\u6703\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u4F4D\u65BC\u4E0B\u65B9\u6642\u5411\u4E0A\u79FB\u52D5\u5B83\uFF0C\u4E26\u5728\u5B83\u5DF2\u7D93\u4F4D\u65BC\u4E0A\u65B9\u6642\u5411\u4E0B\u79FB\u52D5\u5B83\u3002 \u70BA\u7C21\u55AE\u8D77\u898B\uFF0C\u5C07\u7A0B\u5F0F\u78BC\u63D2\u5165\u8996\u5716\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleClickEvent`), ` \u4E8B\u4EF6\u8655\u7406\u5668\uFF0C\u4EE5\u4FBF\u5728\u7528\u6236\u89F8\u63A7\u5F0F\u87A2\u5E55\u5E55\u4E0A\u7684\u4EFB\u4F55\u4F4D\u7F6E\uFF08ToggleButton\u4EE5\u4E0B\uFF09\u6642\u57F7\u884C\u7A0B\u5F0F\u78BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `\u91CD\u65B0\u7E6A\u88FD\u8907\u96DC\u5BB9\u5668\u7684\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u6587\u6240\u8FF0\uFF0C\u7576MCU\u5FC5\u9808\u5728\u52D5\u756B\u7684\u6BCF\u4E00\u500B\u5C0F\u6B65\u9A5F\u91CD\u65B0\u7E6A\u88FD\u9AD8\u6210\u672C\u7684\u6587\u5B57\u6620\u5C04\u5668\u6642\uFF0C\u4E00\u500B\u5E40\u7684\u6E32\u67D3\u6642\u9593\u7D04\u70BA100 ms\u3002 \u76F8\u7576\u65BC\u6BCF\u79D210\u5E40\uFF08fps\uFF09\u3002 \u6574\u500B\u52D5\u756B\u670920\u5E40\uFF0C\u56E0\u6B64\u9700\u8981\u7D04\u5169\u79D2\u9418\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32F429-DISCO\u8A55\u4F30\u5957\u4EF6\u4E0A\uFF0C\u6E32\u67D3\u6642\u9593\u4F5C\u70BAGPIO G14\u4E0A\u7684\u6578\u4F4D\u4FE1\u865F\u4F86\u63D0\u4F9B\u3002 VSYNC\u4FE1\u865F\u5728G13\u4E0A\u63D0\u4F9B\u3002 GPIO\u914D\u7F6E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `GPIO.cpp`), `\u6A94\u4E2D\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u5716\u662F\u5411\u4E0A\u79FB\u52D5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\u6642\uFF0C\u61C9\u7528\u7684VSYNC\u548CRENDER_TIME\u7684\u6E2C\u91CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",
    mdxType: "Figure"
  }, "Saleae Logic Software VSYNC\u548C\u6E32\u67D3\u6642\u9593\u6E2C\u91CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u6642\u9593\u662F\u7B2C\u4E00\u500B\u4FE1\u865F\uFF08\u4F4E\u96FB\u4F4D\u6709\u6548\uFF09\u3002 \u6211\u5011\u53EF\u4EE5\u770B\u5230\uFF0C\u79FB\u52D5\u52D5\u756B\u4E2D\u7B2C\u4E00\u5E40\u7684\u6E32\u67D3\u6642\u9593\u662F99.29 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F03\u4F4E\u7684\u4FE1\u865F\u662FVSYNC\uFF0C\u5728\u50CF\u7D20\u6642\u9418\u8F38\u51FA\u5230\u986F\u793A\u5668\u6642\uFF0C\u5B83\u5728\u6BCF\u4E00\u5E40\u5F9E\u9AD8\u5411\u4F4E\u8F49\u63DB\u3002 \u5728\u4E0A\u9762\u7684\u6E2C\u91CF\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u7E6A\u88FD\u55AE\u500B\u5E40\u4F54\u7528\u4E86\u986F\u793A\u5668\u4E0A7\u500B\u5E40\u7684\u6642\u9593\u3002 \u5728\u7B2C8\u500BVSYNC\u4FE1\u865F\u958B\u59CB\u4E0B\u4E00\u5E40\u7684\u6E32\u67D3\u3002 \u5728\u6E32\u67D3\u904E\u7A0B\u4E2D\uFF0C\u986F\u793A\u5668\u91CD\u8907\u986F\u793A\u4E0A\u4E00\u500B\u5DF2\u7E6A\u88FD\u7684\u5E40\uFF08\u5728\u53E6\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u4E2D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "improving-performance-through-caching"
  }), `\u901A\u904E\u7DE9\u5B58\u6539\u5584\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u901A\u904E\u5C07\u5BB9\u5668\u6E32\u67D3\u7DE9\u5B58\u5230\u8A18\u61B6\u9AD4\u4F86\u6539\u5584\u4EE5\u4E0A\u79FB\u52D5\u52D5\u756B\u7684\u6027\u80FD\u3002 \u6B64\u5F8C\uFF0C\u6211\u5011\u53EA\u9700\u5C07\u8A72\u8A18\u61B6\u9AD4\u4E2D\u7684\u50CF\u7D20\u79FB\u52D5\u5230\u5F71\u50CF\u7DE9\u885D\uFF08\u4F7F\u7528DMA\uFF09\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528MCU\u91CD\u65B0\u7E6A\u88FD\u8907\u96DC\u7684\u5C0F\u5DE5\u5177\u3002 \u5373\u4F7F\u61C9\u7528\u53EA\u4F7F\u7528MCU\u5C31\u53EF\u4EE5\u9054\u5230\u6BCF\u79D260\u5E40\uFF0C\u4E5F\u6703\u5FD9\u65BC\uFF08\u53EF\u80FD\u662F100% MCU\u8CA0\u8F09\uFF09\u91CD\u8907\u57F7\u884C\u76F8\u540C\u8A08\u7B97\uFF0C\u800C\u4E0D\u662F\u57F7\u884C\u66F4\u91CD\u8981\u7684\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u5BB9\u5668\u7684\u201Cin-memory-image\u201D\u53EF\u4EE5\u986F\u793A\u5728\u87A2\u5E55\u4E0A\u7684\u4E0D\u540C\u4F4D\u7F6E\uFF0C\u7121\u9700\u91CD\u65B0\u6E32\u67D3\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The first thing to do is to enable caching through TouchGFX Designer by checking the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cacheable`), ` property on the two Containers `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u5BB9\u5668\u201D\u5C0F\u5DE5\u5177\u4E0A\u7684\u201C\u53EF\u7DE9\u5B58\u5BB9\u5668\u201D\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u6B65\u662F\u5728\u53EF\u4EE5\u5C07\u5BB9\u5668\u7DE9\u5B58\u5230\u5176\u4E2D\u7684RAM\u4E2D\u5275\u5EFA\u5169\u5E45\u52D5\u614B\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6C7A\u5B9A\u9EDE\u9663\u5716\u7DE9\u5B58\u5728RAM\u4E2D\u7684\u5B58\u5132\u4F4D\u5740\u3002 \u5C31\u672C\u4F8B\u800C\u8A00\uFF0C\u6211\u5011\u5C07\u5B83\u653E\u5728SDRAM\u4E2D\uFF08STM32F429\u4E0A\u5F9E\u4F4D\u57400xd0000000\u958B\u59CB\uFF09\uFF0C\u5C31\u5728\u5F71\u50CF\u7DE9\u885D\u4E4B\u5F8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u8996\u7A97\u6A21\u64EC\u5668\uFF0C\u5728\u5168\u57DF\u8B8A\u6578\u4E2D\u5206\u914D\u7DE9\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u521D\u59CB\u5316\u9EDE\u9663\u5716\u7DE9\u5B58\u4E26\u5275\u5EFA\u5169\u5E45\u52D5\u614B\u9EDE\u9663\u5716\u7528\u65BC\u7DE9\u5B58\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u52D5\u614B\u9EDE\u9663\u5716\u5206\u914D\u7D66\u5BB9\u5668\u4E26\u5C07\u5B83\u5011\u8A2D\u7F6E\u70BA\u7DE9\u5B58\u6A21\u5F0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container::updateCache()`), `\u6703\u5C07\u5169\u500B\u5BB9\u5668\u6E32\u67D3\u5230\u5B83\u5011\u5404\u81EA\u7684\u9EDE\u9663\u5716\u4E2D\u3002 \u5728\u4EFB\u4F55\u9700\u8981\u5BB9\u5668\u66F4\u65B0\u72C0\u614B\u7684\u6642\u5019\u547C\u53EB\u6B64\u65B9\u6CD5\u3002 \u9019\u5FC5\u9808\u7531\u958B\u767C\u8005\u5728\u61C9\u7528\u7A0B\u5F0F\u78BC\u4E2D\u9032\u884C\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\u555F\u7528\u7DE9\u5B58\u5F8C\uFF0C\u73FE\u5728\u7684\u6027\u80FD\u6E2C\u91CF\u986F\u793A\uFF0C\u6E32\u67D3\u6642\u9593\u5F9E~99ms\u7E2E\u77ED\u5230~5ms\uFF0C\u9019\u610F\u5473\u8457\u53EF\u4EE5\u8F15\u9B06\u5730\u4EE560\u5E40\u6BCF\u79D2\u7684\u901F\u5EA6\u9032\u884C\u6E32\u67D3\uFF0C\u4E26\u572820\u5E40\u5167\u5B8C\u6210\u6574\u500B\u52D5\u756B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",
    mdxType: "Figure"
  }, "Saleae Logic Software VSYNC\u548C\u6E32\u67D3\u6642\u9593\u6E2C\u91CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7D50\u8AD6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u7269\u4EF6\u5728\u8A08\u7B97\u4E0A\u5341\u5206\u8907\u96DC\u4E14\u5728\u4E0D\u540C\u52D5\u756B\u6B65\u9A5F\u4E4B\u9593\u7121\u8B8A\u5316\uFF0C\u5728\u88FD\u6210\u52D5\u756B\uFF08\u983B\u7E41\u79FB\u52D5\uFF09\u6642\uFF0C\u4F7F\u7528\u5305\u542BDynamicBitmap\u7684\u53EF\u7DE9\u5B58\u5BB9\u5668\u53EF\u986F\u8457\u7E2E\u77ED\u6E32\u67D3\u6642\u9593\u3002 \u5982\u679C\u7DE9\u5B58\u5FC5\u9808\u66F4\u65B0\uFF08\u5982\u6642\u9593\u66F4\u65B0\u6642\u7684\u624B\u9336\uFF09\uFF0C\u5728\u61C9\u7528\u63A7\u5236\u52D5\u756B\u671F\u9593\uFF0C\u53EF\u4EE5\u5728\u7279\u5B9A\u7684\u9EDE\u91CD\u65B0\u8A08\u7B97\u7DE9\u5B58\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u52D5\u614B\u9EDE\u9663\u5716")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "loading-images-at-runtime",
    mdxType: "Link"
  }, "\u52D5\u614B\u9EDE\u9663\u5716\uFF1A\u5728\u57F7\u884C\u6642\u9593\u8F09\u5165\u5716\u50CF"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);