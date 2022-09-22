"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3890],{

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

/***/ 81600:
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
  id: "custom-triggers-and-actions",
  title: "\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u884C\u70BA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "id": "development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "title": "\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u884C\u70BA",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-triggers-and-actions",
    "title": "\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u884C\u70BA"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX Engine Features",
    "permalink": "/4.20/zh-TW/docs/category/touchgfx-engine-features"
  },
  "next": {
    "title": "Position and size",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/position-size"
  }
};
const assets = {};




const toc = [{
  value: "\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
  id: "custom-triggers",
  level: 2
}, {
  value: "\u6DFB\u52A0\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
  id: "adding-custom-triggers",
  level: 3
}, {
  value: "\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
  id: "emitting-custom-triggers-from-interactions",
  level: 3
}, {
  value: "\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
  id: "emitting-custom-triggers-from-user-code",
  level: 3
}, {
  value: "\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u56DE\u61C9\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
  id: "reacting-to-custom-triggers-from-interactions",
  level: 3
}, {
  value: "\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u56DE\u61C9\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
  id: "reacting-to-custom-triggers-from-user-code",
  level: 3
}, {
  value: "\u81EA\u8A02\u64CD\u4F5C",
  id: "custom-actions",
  level: 2
}, {
  value: "\u6DFB\u52A0\u81EA\u8A02\u64CD\u4F5C",
  id: "adding-custom-actions",
  level: 3
}, {
  value: "\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C",
  id: "calling-custom-action-from-interactions",
  level: 3
}, {
  value: "\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C",
  id: "calling-custom-action-from-user-code",
  level: 3
}, {
  value: "\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u70BA\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u884C\u70BA",
  id: "adding-behaviour-to-custom-actions-from-interactions",
  level: 3
}, {
  value: "\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u70BA\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u884C\u70BA",
  id: "adding-behaviour-to-custom-actions-from-user-code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904ETouchGFX Designer\uFF0C\u53EF\u4EE5\u5B9A\u7FA9\u5177\u6709\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C\u7684\u4EA4\u4E92\u5143\u4EF6\u3002 \u61C9\u7528\u4E2D\u7684\u6BCF\u500B\u87A2\u5E55\u90FD\u53EF\u80FD\u5305\u542B\u64CD\u4F5C\u96C6\u5408\uFF08\u9019\u4E9B\u662FC++\u4E2D\u7684\u7C21\u55AEvoid\u65B9\u6CD5\uFF09\uFF0C\u60A8\u53EF\u4EE5\u5F9ETouchGFX Designer\u5167\u90E8\u548C\u7A0B\u5F0F\u78BC\u4E2D\u547C\u53EB\u9019\u4E9B\u64CD\u4F5C\uFF0C\u800C\u81EA\u8A02\u5BB9\u5668\u4E5F\u53EF\u80FD\u6709\u60A8\u7684\u61C9\u7528\u53EF\u56DE\u61C9\u7684\u89F8\u767C\u689D\u4EF6\uFF08\u76F8\u7576\u65BCC++\u4E2D\u7684callback\uFF09\u96C6\u5408\u3002 \u5728\u672C\u6587\u4E2D\uFF0C\u6211\u5011\u5C07\u8A73\u7D30\u4ECB\u7D39\u6B64\u529F\u80FD\uFF0C\u4F7F\u5F97\u6211\u5011\u80FD\u5275\u5EFA\u51FA\u66F4\u7C21\u6F54\u3001\u66F4\u6709\u52D5\u614B\u7684TouchGFX\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-triggers"
  }), `\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u8A02\u5BB9\u5668\u80FD\u5920\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002 \u5B83\u5011\u4EE5C++ callback\u7684\u5F62\u5F0F\u751F\u6210\uFF0C\u53EF\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u6216\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u767C\u9001\u6216\u505A\u51FA\u56DE\u61C9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-custom-triggers"
  }), `\u6DFB\u52A0\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u81EA\u8A02\u5BB9\u5668\u7684\u5C6C\u6027\u9078\u9805\u5361\u6DFB\u52A0\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\uFF0C\u65B9\u6CD5\u662F\u9EDE\u64CA\u4E0B\u5716\u4E2D\u7A81\u51FA\u986F\u793A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Triggers`), `\u90E8\u5206\u4E2D\u7684\u201C+\u201D\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-trigger-4.17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u81EA\u8A02\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u5F8C\uFF0C\u6703\u6709\u66F4\u591A\u9078\u9805\u53EF\u4F9B\u4F7F\u7528\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-trigger-4.17.png",
    mdxType: "Figure"
  }, "\u7DE8\u8F2F\u81EA\u8A02\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u540D\u7A31`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u6B64\u6307\u5B9A\u7684\u540D\u7A31\u5C07\u7528\u65BC\u4EA4\u4E92\u7CFB\u7D71\u5167\u90E8\u548C\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u6A94\u4E2D\u7684\u53C3\u7167\uFF0C\u5982\u4E0B\u9762\u7684\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14,24-30,37}",
    "{11-14,24-30,37}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Trigger Callback Setters
     */
    void setTrigger1Callback(touchgfx::GenericCallback<>& callback)
    {
        this->trigger1Callback = &callback;
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Custom Trigger Emitters
     */
    virtual void emitTrigger1Callback()
    {
        if (trigger1Callback && trigger1Callback->isValid())
        {
            this->trigger1Callback->execute();
        }
    }

private:

    /*
     * Custom Trigger Callback Declarations
     */
    touchgfx::GenericCallback<>* trigger1Callback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2}",
    "{2}": true
  }), `CustomContainer1Base::CustomContainer1Base() :
    trigger1Callback(0)
{
    setWidth(250);
    setHeight(250);
}

void CustomContainer1Base::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8AAA\u660E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u8655\u5BEB\u5165\u7684\u6587\u5B57\u5C07\u7528\u5728\u4EA4\u4E92\u7CFB\u7D71\u4E2D\uFF0C\u5728\u4EA4\u4E92\u7CFB\u7D71\u4E2D\u9078\u4E2D\u89F8\u767C\u689D\u4EF6\u6642\uFF0C\u5C07\u6ED1\u9F20\u6E38\u6A19\u505C\u5728\u89F8\u767C\u689D\u4EF6\u4E0A\u53EF\u986F\u793A\u6B64\u6587\u5B57\u3002 \u5982\u679C\u6C92\u6709\u6307\u5B9A\u8AAA\u660E\uFF0C\u5C07\u5275\u5EFA\u6A19\u6E96\u8AAA\u660E\uFF0C\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#emitting-custom-triggers-from-interactions"
  }), `\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), `\u4E00\u7BC0\u4E2D\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u985E\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u555F\u7528\u201C\u985E\u578B\u201D\u5C07\u80FD\u5275\u5EFA\u89F8\u767C\u689D\u4EF6\uFF0C\u89F8\u767C\u689D\u4EF6\u53EF\u8FD4\u56DE\u7D66\u5B9A\u985E\u578B\u7684\u503C\u3002 \u985E\u578B\u65E2\u53EF\u4EE5\u5F9E\u5217\u8868\u4E2D\u9078\u64C7\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u3002 \u4E0B\u9762\u986F\u793A\u7684\u662F\u7576\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u985E\u578B\u6642\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14,24-30,37}",
    "{11-14,24-30,37}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Trigger Callback Setters
     */
    void setTrigger1Callback(touchgfx::GenericCallback<bool>& callback)
    {
        this->trigger1Callback = &callback;
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Custom Trigger Emitters
     */
    virtual void emitTrigger1Callback(bool value)
    {
        if (trigger1Callback && trigger1Callback->isValid())
        {
            this->trigger1Callback->execute(value);
        }
    }

private:

    /*
     * Custom Trigger Callback Declarations
     */
    touchgfx::GenericCallback<bool>* trigger1Callback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emitting-custom-triggers-from-interactions"
  }), `\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4F7F\u7528\u4EA4\u4E92\u7CFB\u7D71\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002 \u53EA\u9700\u8F49\u81F3\u64C1\u6709\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u7684\u81EA\u8A02\u5BB9\u5668\u7684\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\uFF0C\u5275\u5EFA\u65B0\u7684\u4EA4\u4E92\u4E26\u9078\u64C7\u201C\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u201D\u4F5C\u70BA\u64CD\u4F5C\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/emitting-a-custom-trigger-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u5716\u6240\u793A\uFF0C\u5728\u9EDE\u64CA\u5DF2\u6DFB\u52A0\u5230\u81EA\u8A02\u5BB9\u5668\u7684\u6309\u9215\u6642\uFF0C\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u6709\u555F\u7528\u7684\u985E\u578B\uFF0C\u5247\u5FC5\u9808\u5982\u4E0B\u5716\u6240\u793A\u6307\u5B9A\u53C3\u6578\u503C\u6216\u8B8A\u6578\uFF0C\u5176\u4E2D\u5DF2\u5C07\u201C\u985E\u578B\u201D\u6307\u5B9A\u70BA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), ` \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-emitting-custom-trigger-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u6307\u5B9A\u53C3\u6578\u5230\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u767C\u9001\u7684\u81EA\u8A02\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emitting-custom-triggers-from-user-code"
  }), `\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u5F9E\u7E7C\u627F\u81EA\u751F\u6210\u7684\u81EA\u8A02\u5BB9\u5668\u7684\u7528\u6236\u7A0B\u5F0F\u78BC\u985E\u6A94\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002 \u5728\u751F\u6210\u7684\u81EA\u8A02\u5BB9\u5668\u4E2D\uFF0C\u70BA\u540D\u70BA\u201Ctrigger1\u201D\u7684CustomTrigger\u751F\u6210\u4E86\u4EE5\u4E0B\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{24-30}",
    "{24-30}": true
  }), `virtual void emitTrigger1Callback(bool value)
{
    if (trigger1Callback && trigger1Callback->isValid())
    {
        this->trigger1Callback->execute(value);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u51FD\u6578\u53EF\u5728\u7E7C\u627F\u81EA\u5B83\u7684\u7528\u6236\u7A0B\u5F0F\u78BC\u985E\u6A94\u4E2D\u9032\u884C\u91CD\u5BEB\u6216\u547C\u53EB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "reacting-to-custom-triggers-from-interactions"
  }), `\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u56DE\u61C9\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5411\u87A2\u5E55\u6DFB\u52A0\u4E86\u5177\u6709\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u7684\u81EA\u8A02\u5BB9\u5668\uFF0C\u53EF\u5C07\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u7528\u4F5C\u87A2\u5E55\u4E0A\u4EA4\u4E92\u7CFB\u7D71\u7684\u89F8\u767C\u689D\u4EF6\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u9078\u64C7\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u4F5C\u70BA\u4EA4\u4E92\u7684\u201C\u89F8\u767C\u689D\u4EF6\u201D\u6642\uFF0C\u5176\u547D\u540D\u6A21\u5F0F\u70BA\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<Custom Container Name>\u767C\u751F`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-trigger-as-trigger-on-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u5728\u4EA4\u4E92\u7CFB\u7D71\u4E0A\u9078\u64C7\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u4F5C\u70BA\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9078\u64C7\u201C\u89F8\u767C\u689D\u4EF6\u201D\u5F8C\uFF0C\u5982\u6709\u5305\u542B\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u7684\u540C\u4E00\u81EA\u8A02\u5BB9\u5668\u7684\u591A\u500B\u5BE6\u4F8B\uFF0C\u5247\u9700\u8981\u9078\u64C7\u5143\u4EF6\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u500B\u5BE6\u4F8B\uFF0C\u5B83\u6703\u88AB\u81EA\u52D5\u9078\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "reacting-to-custom-triggers-from-user-code"
  }), `\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u56DE\u61C9\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u5BE6\u73FE\u4E0B\u5217\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\uFF08\u5411\u87A2\u5E55\u6DFB\u52A0\u5177\u6709\u540D\u70BA\u201Ctrigger1\u201D\u7684\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u7684\u81EA\u8A02\u5BB9\u5668\uFF09\u6240\u793A\u7684callback\uFF0C\u9084\u53EF\u4EE5\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u56DE\u61C9\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002 \u5728\u7E7C\u627F\u81EA\u87A2\u5E55\u7684\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u985E\u6A94\u4E2D\uFF0C\u6DFB\u52A0\u4E86\u4E0B\u5217highlighted \u986F\u793A\u884C\u4F86\u5BE6\u73FEcallback/\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{10-18}",
    "{10-18}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();

private:
    /*
     * Callback Declarations
     */
    touchgfx::Callback<Screen1View> customContainer1Trigger1Callback;

    /*
     * Callback Handler Declarations
     */
    void customContainer1Trigger1CallbackHandler();
};

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4,6,19-22}",
    "{4,6,19-22}": true
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View():
    customContainer1Trigger1Callback(this, &Screen1View::customContainer1Trigger1CallbackHandler)
{
    customContainer1.setTrigger1Callback(customContainer1Trigger1Callback);
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}

void Screen1View::customContainer1Trigger1CallbackHandler()
{
    //Your code here.
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-actions"
  }), `\u81EA\u8A02\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u87A2\u5E55\u548C\u81EA\u8A02\u5BB9\u5668\u80FD\u5920\u5275\u5EFA\u81EA\u8A02\u64CD\u4F5C\u3002 \u5B83\u5011\u4EE5\u865B\u64ECC++\u65B9\u6CD5\u7684\u5F62\u5F0F\u751F\u6210\uFF0C\u53EF\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u6216\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u57F7\u884C\u3002 \u81EA\u8A02\u64CD\u4F5C\u7684\u5BE6\u73FE\u548C\u884C\u70BA\u65E2\u53EF\u4EE5\u5728\u4EA4\u4E92\u7CFB\u7D71\u5167\u90E8\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u904E\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u985E\u6A94\u4E2D\u91CD\u5BEB\u751F\u6210\u7684C++\u65B9\u6CD5\u9032\u884C\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-custom-actions"
  }), `\u6DFB\u52A0\u81EA\u8A02\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u81EA\u8A02\u64CD\u4F5C\u901A\u904E\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u5C6C\u6027\u9078\u9805\u5361\u6DFB\u52A0\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\uFF0C\u65B9\u6CD5\u662F\u9EDE\u64CA\u4E0B\u5716\u4E2D\u7A81\u51FA\u986F\u793A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Actions`), `\u90E8\u5206\u4E2D\u7684\u201C+\u201D\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-action-4.17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u81EA\u8A02\u64CD\u4F5C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u81EA\u8A02\u64CD\u4F5C\u5F8C\uFF0C\u6703\u6709\u66F4\u591A\u9078\u9805\u53EF\u4F9B\u4F7F\u7528\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-action-4.17.png",
    mdxType: "Figure"
  }, "\u7DE8\u8F2F\u81EA\u8A02\u64CD\u4F5C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u540D\u7A31`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u6B64\u6307\u5B9A\u7684\u540D\u7A31\u5C07\u7528\u65BC\u4EA4\u4E92\u7CFB\u7D71\u5167\u90E8\u548C\u751F\u6210\u7684\u7A0B\u5F0F\u6A94\u4E2D\u7684\u9032\u4E00\u6B65\u53C3\u7167\uFF0C\u5982\u4E0B\u9762\u7684\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Actions
     */
    virtual void action1();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{12-15}",
    "{12-15}": true
  }), `CustomContainer1Base::CustomContainer1Base()
{
    setWidth(250);
    setHeight(250);
}

void CustomContainer1Base::initialize()
{

}

void CustomContainer1Base::action1()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8AAA\u660E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u8655\u5BEB\u5165\u7684\u6587\u5B57\u5C07\u7528\u5728\u4EA4\u4E92\u7CFB\u7D71\u4E2D\uFF0C\u5728\u4EA4\u4E92\u7CFB\u7D71\u4E2D\u9078\u4E2D\u64CD\u4F5C\u6642\uFF0C\u5C07\u6ED1\u9F20\u6E38\u6A19\u505C\u5728\u64CD\u4F5C\u4E0A\u53EF\u986F\u793A\u6B64\u6587\u5B57\u3002 \u5982\u679C\u6C92\u6709\u6307\u5B9A\u8AAA\u660E\uFF0C\u5C07\u6309\u7167\u4EE5\u4E0B\u6A21\u5F0F\u5275\u5EFA\u6A19\u6E96\u8AAA\u660E\uFF0C\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#calling-custom-action-from-interactions"
  }), `\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C`), `\u4E00\u7BC0\u4E2D\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u985E\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u555F\u7528\u201C\u985E\u578B\u201D\u5C07\u80FD\u5275\u5EFA\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u9700\u8981\u7D66\u5B9A\u985E\u578B\u7684\u53C3\u6578\u3002 \u985E\u578B\u65E2\u53EF\u4EE5\u5F9E\u5217\u8868\u4E2D\u9078\u64C7\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u3002 \u4E0B\u9762\u986F\u793A\u7684\u662F\u7576\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u985E\u578B\u6642\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `/*
 * Custom Actions
 */
virtual void action1(bool value);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void CustomContainer1Base::action1(bool value)
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "calling-custom-action-from-interactions"
  }), `\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u81EA\u8A02\u64CD\u4F5C\u5F8C\uFF0C\u53EF\u4EE5\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u5167\u90E8\u57F7\u884C\u64CD\u4F5C\u3002 \u5982\u679C\u5728\u81EA\u8A02\u5BB9\u5668\u4E0A\u5275\u5EFA\u64CD\u4F5C\u4E26\u5C07\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0\u5230\u87A2\u5E55\uFF0C\u5247\u53EF\u4EE5\u5F9E\u87A2\u5E55\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u57F7\u884C\u64CD\u4F5C\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/executing-custom-action-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u5F9E\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u57F7\u884C\u81EA\u8A02\u64CD\u4F5C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9078\u64C7\u64CD\u4F5C\u5F8C\uFF0C\u5982\u6709\u540C\u4E00\u81EA\u8A02\u5BB9\u5668\u7684\u591A\u500B\u5BE6\u4F8B\uFF0C\u5247\u9700\u8981\u9078\u64C7\u5143\u4EF6\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u500B\u5BE6\u4F8B\uFF0C\u5B83\u6703\u88AB\u81EA\u52D5\u9078\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u81EA\u8A02\u64CD\u4F5C\u6709\u555F\u7528\u7684\u985E\u578B\uFF0C\u5247\u5FC5\u9808\u5982\u4E0B\u5716\u6240\u793A\u6307\u5B9A\u53C3\u6578\u503C\u6216\u8B8A\u6578\uFF0C\u5176\u4E2D\u5DF2\u5C07\u201C\u985E\u578B\u201D\u6307\u5B9A\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-executing-custom-action-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u70BA\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u57F7\u884C\u7684\u81EA\u8A02\u64CD\u4F5C\u6307\u5B9A\u53C3\u6578"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "calling-custom-action-from-user-code"
  }), `\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u4EE5\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u76F4\u63A5\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C\u3002 \u5728\u4E0B\u9762\u7684\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\u4E2D\uFF0C\u5275\u5EFA\u4E86\u4E00\u500B\u81EA\u8A02\u5BB9\u5668\uFF0C\u5B83\u5177\u6709\u540D\u70BA\u201Caction1\u201D\u7684\u81EA\u8A02\u64CD\u4F5C\u3002 \u5C07\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0\u5230\u87A2\u5E55\uFF0C\u7D50\u679C\u751F\u6210\u4E86\u4E0B\u5217\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-6}",
    "{4-6}": true
  }), `Screen1ViewBase::Screen1ViewBase()
{

    customContainer11.setXY(50, 11);

    add(customContainer11);
}

void Screen1ViewBase::setupScreen()
{
    customContainer11.initialize();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u985E\u6A94`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `\uFF08\u7E7C\u627F\u81EA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase`), `\uFF09\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C\u201Caction1\u201D\uFF0C\u5982\u4E0B\u6587\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3}",
    "{3}": true
  }), `Screen1View::Screen1View()
{
    customContainer11.action1();
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-behaviour-to-custom-actions-from-interactions"
  }), `\u5F9E\u4EA4\u4E92\u7CFB\u7D71\u70BA\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u884C\u70BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4F7F\u7528\u4EA4\u4E92\u7CFB\u7D71\u70BA\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u884C\u70BA\u3002 \u53EA\u9700\u8F49\u81F3\u64C1\u6709\u81EA\u8A02\u64CD\u4F5C\u7684\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\uFF0C\u5275\u5EFA\u65B0\u7684\u4EA4\u4E92\u4E26\u9078\u64C7\u201C\u81EA\u8A02\u64CD\u4F5C\u201D\u4F5C\u70BA\u89F8\u767C\u689D\u4EF6\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-action-as-trigger-on-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u5728\u4EA4\u4E92\u7CFB\u7D71\u4E0A\u9078\u64C7\u81EA\u8A02\u64CD\u4F5C\u4F5C\u70BA\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\uFF0C\u5728\u4EFB\u4F55\u6642\u5019\u547C\u53EB\u81EA\u8A02\u64CD\u4F5C\uFF0C\u90FD\u5C07\u57F7\u884C\u5728\u4EA4\u4E92\u4E2D\u5B9A\u7FA9\u7684\u4EFB\u4F55\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-behaviour-to-custom-actions-from-user-code"
  }), `\u5F9E\u7528\u6236\u7A0B\u5F0F\u78BC\u70BA\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u884C\u70BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u8A02\u64CD\u4F5C\u9084\u53EF\u901A\u904E\u91CD\u5BEB\u7528\u6236\u7A0B\u5F0F\u78BC\u985E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CustomContainer1`), `\uFF08\u7E7C\u627F\u81EA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CustomContainer1Base`), `\uFF09\u4E2D\u7684\u64CD\u4F5C\u4F86\u5BE6\u73FE\u5176\u884C\u70BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9}",
    "{9}": true
  }), `class CustomContainer1 : public CustomContainer1Base
{
public:
    CustomContainer1();
    virtual ~CustomContainer1() {}

    virtual void initialize();

    void action1();

protected:
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14}",
    "{11-14}": true
  }), `CustomContainer1::CustomContainer1()
{

}

void CustomContainer1::initialize()
{
    CustomContainer1Base::initialize();
}

void CustomContainer1::action1()
{
    //Your code here
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../../tutorials/tutorial-05",
    mdxType: "Link"
  }, "\u6559\u7A0B5\uFF1A\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);