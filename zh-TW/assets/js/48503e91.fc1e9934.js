"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5220],{

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

/***/ 27842:
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
  id: "performance",
  title: "\u6027\u80FD"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/performance",
  "id": "basic-concepts/performance",
  "title": "\u6027\u80FD",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/performance.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/performance",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "performance",
    "title": "\u6027\u80FD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E3B\u8FF4\u5708",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/rendering"
  },
  "next": {
    "title": "\u4F5C\u696D\u7CFB\u7D71",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/operating-system"
  }
};
const assets = {};


const toc = [{
  value: "\u6E2C\u91CF\u6E32\u67D3\u6642\u9593",
  id: "measuring-the-rendering-time",
  level: 2
}, {
  value: "\u4E1F\u5E40\u8A08\u6578",
  id: "counting-the-lost-frames",
  level: 2
}, {
  value: "\u4E1F\u5E40\u88DC\u511F",
  id: "compensating-for-lost-frames",
  level: 3
}, {
  value: "\u5F71\u97FF\u6E32\u67D3\u6642\u9593\u7684\u56E0\u7D20\u6709\u54EA\u4E9B\uFF1F",
  id: "what-affects-the-rendering-time",
  level: 2
}, {
  value: "\u4ECB\u9762\u66F4\u65B0\u4E86\u591A\u5C11\uFF1F",
  id: "how-much-of-the-screen-is-updated",
  level: 3
}, {
  value: "\u5716\u5F62\u4E2D\u7684\u5C64\u6578",
  id: "the-number-of-layers-in-the-graphics",
  level: 3
}, {
  value: "\u6E32\u67D3\u50CF\u7D20\u7684\u8907\u96DC\u5EA6",
  id: "the-complexity-of-rendering-the-pixels",
  level: 3
}, {
  value: "\u6E32\u67D3\u7684\u786C\u9AD4\u652F\u63F4",
  id: "hardware-support-for-rendering",
  level: 3
}, {
  value: "\u4F55\u6642\u61C9\u8003\u616E\u6E32\u67D3\u6642\u9593",
  id: "when-should-you-consider-rendering-time",
  level: 2
}, {
  value: "Optimize Performance by Invalidating Content",
  id: "optimize-performance-by-invalidating-content",
  level: 2
}, {
  value: "Example using TextArea::invalidateContent()",
  id: "example-using-textareainvalidatecontent",
  level: 3
}, {
  value: "\u7372\u5F97\u826F\u597D\u6027\u80FD\u7684\u5EFA\u8B70",
  id: "tips-to-get-good-performance",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u8A0E\u8AD6\u5D4C\u5165\u5F0F\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u88E1\u7684\u9AD8\u6027\u80FD\u662F\u6307\u5728\u7372\u5F97\u6240\u9700\u5716\u5F62\u6548\u679C\u548C\u52D5\u756B\u6642\u5BE6\u73FE\u9AD8\u5E40\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u56DE\u9867\u4E00\u4E0B\u4E0A\u4E00\u7BC0\u4E2D\u95DC\u65BC\u4E3B\u8FF4\u5708\u5982\u4F55\u5F71\u97FF\u4F7F\u7528\u8005\u4ECB\u9762\u5E40\u7387\u7684\u5167\u5BB9\u3002 \u518D\u6B21\u5047\u8A2D\u6709\u4E00\u53F0\u9023\u63A5\u5230LTDC\u7684\u5E73\u884CRGB\u986F\u793A\u5668\u548C\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u3002 \u57FA\u672C\u60C5\u6CC1\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u96D9\u5F71\u50CF\u7DE9\u885D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5047\u8A2D\u986F\u793A\u5668\u6BCF\u79D2\u5237\u65B060\u6B21\uFF0C\u5247\u6BCF\u6B21\u5237\u65B0\u4E4B\u9593\u7684\u9593\u9694\u7D0416 ms\u3002 \u8A08\u7B97\u904E\u7A0B\u5982\u4E0B\uFF1A1 s / 60 = 0.01667 s = 16.67 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57281\u865F\u5F71\u50CF\u7DE9\u885D\u7684\u50B3\u8F38\u958B\u59CB\u6642\uFF0CTouchGFX\u958B\u59CB\u5C071\u865F\u5F71\u50CF\u7E6A\u88FD\u52302\u865F\u5F71\u50CF\u7DE9\u885D\u3002 \u5982\u679C1\u865F\u5F71\u50CF\u7684\u6E32\u67D3\u5728\u4E0B\u4E00\u6B21\u50B3\u8F38\u958B\u59CB\u524D\u5B8C\u6210\uFF0C\u5247\u53EF\u4EE5\u50B3\u8F382\u865F\u5F71\u50CF\u7DE9\u885D\u3002 \u5982\u679C\u6C92\u6709\u572816.67 ms\u5167\u5B8C\u6210\uFF0C\u5247\u518D\u6B21\u50B3\u8F381\u865F\u5F71\u50CF\u7DE9\u885D\uFF0C\u4E26\u4E14\u986F\u793A\u5668\u7684\u986F\u793A\u5167\u5BB9\u4E0D\u8B8A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u4E3B\u8FF4\u5708\u6642\u9593\u8D85\u904E16.67 ms"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u7A2E\u60C5\u6CC1\u610F\u5473\u8457\u4E1F\u5E40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A1\u96C6\u548C\u66F4\u65B0\u968E\u6BB5\u7684\u6642\u9593\u901A\u5E38\u662F\u6975\u77ED\u7684\uFF0C\u5982\u5C11\u65BC1 ms\uFF0C\u5728\u8003\u616E\u4E3B\u8FF4\u5708\u6D88\u8017\u7684\u7E3D\u6642\u9593\u6642\uFF0C\u591A\u5C11\u6709\u4E9B\u5FAE\u4E0D\u8DB3\u9053\u3002 \u56E0\u6B64\uFF0C\u4E00\u822C\u5728\u8003\u616E\u6E32\u67D3\u6642\u9593\u6642\uFF0C\u5176\u4E2D\u5305\u62EC\u63A1\u96C6\u548C\u66F4\u65B0\u968E\u6BB5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u8A31\u591A\u5F71\u50CF\u7684\u6E32\u67D3\u6642\u9593\u8D85\u904E16.67 ms\u7684\u6642\u9650\uFF0C\u986F\u793A\u5668\u4E0A\u7684\u5E40\u7387\u5C07\u662F30\u5E40\u6BCF\u79D2\uFF08fps\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u6E32\u67D3\u6642\u9593\u5927\u9AD4\u4E0A\u77ED\u65BC16.67 ms\uFF0C\u4F46\u6709\u4E00\u4E9B\u5E40\u8D85\u904E16.67 ms\uFF0C\u5247\u5E73\u5747\u5E40\u7387\u53EF\u80FD\u63A5\u8FD160 fps\uFF0C\u4F46\u5728\u7528\u6236\u770B\u4F86\u52D5\u756B\u53EF\u80FD\u4E0D\u6D41\u66A2\u3002 \u52D5\u756B\u4E2D\u7684\u67D0\u4E9B\u6B65\u9A5F\u53EF\u80FD\u770B\u8D77\u4F86\u904E\u5FEB\u800C\u67D0\u4E9B\u53C8\u904E\u6162\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u61C9\u7528\u3002 \u9019\u4E26\u4E0D\u7B26\u5408\u6211\u5011\u7684\u671F\u671B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u6642\u9593\u9084\u53EF\u4EE5\u66F4\u9577\u3002 \u5982\u679C\u525B\u597D\u8D85\u904E33 ms\uFF0C\u7531\u65BC\u6BCF\u4E09\u6B21\u50B3\u8F38\u53EA\u6709\u4E00\u500B\u65B0\u5F71\u50CF\u5C31\u7DD2\uFF0C\u5E40\u7387\u5C07\u964D\u81F320 fps\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `FPS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u9577\u6E32\u67D3\u6642\u9593`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `60`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16.67 ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `33.34 ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `20`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `50.00 ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `15`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.67 ms`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8868\u986F\u793A\u4E86\u7D66\u5B9A\u5E40\u7387\u53EF\u7372\u5F97\u7684\u6700\u9577\u6E32\u67D3\u6642\u9593\uFF08\u5305\u62EC\u63A1\u96C6\u548C\u66F4\u65B0\u968E\u6BB5\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u7372\u5F97\u826F\u597D\u7684\u4F7F\u7528\u8005\u4ECB\u9762\u6027\u80FD\uFF0C\u6700\u597D\u5B9A\u671F\u6AA2\u67E5\u548C\u76E3\u6E2C\u5E40\u7387\u3002 \u53EF\u4F7F\u7528\u5169\u7A2E\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6E2C\u91CF\u6E32\u67D3\u6642\u9593`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E1F\u5E40\u8A08\u6578`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "measuring-the-rendering-time"
  }), `\u6E2C\u91CF\u6E32\u67D3\u6642\u9593`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E2C\u91CF\u6E32\u67D3\u6642\u9593\u7684\u7B2C\u4E00\u7A2E\u65B9\u6CD5\u63D0\u4F9B\u4E86\u6700\u8A73\u7D30\u7684\u8CC7\u8A0A\u3002 \u5176\u7406\u5FF5\u5BE6\u969B\u4E0A\u662F\u6E2C\u91CF\u5F9E\u5F71\u50CF\u50B3\u8F38\u5230\u6E32\u67D3\u968E\u6BB5\u7D50\u675F\u4E4B\u9593\u7684\u6642\u9593\u3002 \u5716\u5F62\u5F15\u64CE\u5728\u63A1\u96C6\u968E\u6BB5\u958B\u59CB\u6642\u547C\u53EBGPIO\u985E\u7684\u51FD\u6578\uFF0C\u4E26\u5728\u6E32\u67D3\u968E\u6BB5\u7D50\u675F\u6642\u518D\u6B21\u547C\u53EB\u3002 The application defines these function and can hook into them to perform measurements.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E2C\u91CF\u53EF\u901A\u904E\u5169\u7A2E\u65B9\u5F0F\u4F86\u57F7\u884C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u5916\u90E8\u8A08\u6642\u8A2D\u5099\uFF0C\u5982\u793A\u6CE2\u5668\uFF1A\u70BA\u4E86\u4F7F\u7528\u793A\u6CE2\u5668\u9032\u884C\u6E2C\u91CF\uFF0C\u61C9\u7528\u61C9\u4F7F\u7528\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `GPIO`), `\u4ECB\u9762\u53BB\u5BE6\u73FE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `set(GPIO_ID)`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `clear(GPIO_ID)`), `\u7684\u65B9\u6CD5\u3002 \u7136\u5F8C\uFF0C\u793A\u6CE2\u5668\u53EF\u4EE5\u6E2C\u91CF\u8F38\u51FA\u70BA\u9AD8\u96FB\u4F4D\u7684\u6301\u7E8C\u6642\u9593\uFF0C\u4EE5\u6B64\u4F5C\u70BA\u6E32\u67D3\u6642\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u5167\u90E8\u8A08\u6642\u5668\uFF1A\u53E6\u4E00\u7A2E\u65B9\u6CD5\u662F\u4F7F\u7528\u5167\u90E8\u8A08\u6642\u5668\uFF0C\u5982sysTick\u8A08\u6642\u5668\u3002 \u5728\u547C\u53EBGPIO::set(RENDER_TIME)\uFF0C\u61C9\u7528\u53EF\u5C07\u8A08\u6642\u5668\u7684\u503C\u4FDD\u5B58\u5728\u8B8A\u6578\u4E2D\u3002 \u5728\u9032\u884C\u6E05\u96F6\u547C\u53EB\u6642\uFF0C\u61C9\u7528\u53EF\u518D\u6B21\u8B80\u53D6\u8A08\u6642\u5668\u4E26\u6E1B\u53BB\u524D\u503C\uFF0C\u5F9E\u800C\u7372\u5F97\u6E32\u67D3\u6642\u9593\u3002 \u8A08\u6642\u5668\u7684\u901F\u5EA6\u5C07\u6C7A\u5B9A\u6E2C\u91CF\u7CBE\u5EA6\u3002 \u61C9\u7528\u5FC5\u9808\u4EE5\u67D0\u7A2E\u65B9\u5F0F\u4F7F\u6E32\u67D3\u6642\u9593\u53EF\u898B\u3002 \u4E00\u7A2E\u65B9\u5F0F\u662F\u5C07\u503C\u4FDD\u5B58\u5728\u5168\u57DF\u8B8A\u6578\u4E2D\uFF0C\u4E26\u4E14\u53EF\u4EE5\u5728\u4ECB\u9762\u4E0A\u7684TextArea\u4E2D\u986F\u793A\u503C\u3002 \u4E5F\u53EF\u4F7F\u7528\u9664\u932F\u5668\u6AA2\u67E5\u503C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "counting-the-lost-frames"
  }), `\u4E1F\u5E40\u8A08\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine counts the number of transfers that has occurred during the last collect-update-rendering phase. \u61C9\u7528\u53EF\u8F15\u9B06\u5730\u6AA2\u67E5\u6B64\u503C\uFF0C\u4EE5\u4FBF\u77AD\u89E3\u662F\u5426\u4E1F\u5E40\u4EE5\u53CA\u5E40\u7387\u662F\u5426\u4E0B\u964D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A08\u6578\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `HAL`), `\u985E\u4E2D\u63D0\u4F9B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent() {
  tickCounter += 1;
  if (HAL::getInstance()->getLCDRefreshCount() > 1) {
    //Alert programmer somehow
    ...
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compensating-for-lost-frames"
  }), `\u4E1F\u5E40\u88DC\u511F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E1F\u5E40\u4E14\u67D0\u500B\u52D5\u756B\u7684\u5E40\u7387\u56E0\u6B64\u4E0B\u964D\uFF0C\u53EF\u9032\u884C\u4E00\u5B9A\u7A0B\u5EA6\u7684\u88DC\u511F\u3002 \u6211\u5011\u53EF\u4EE5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7B49\u5F85\u5176\u7D50\u675F - \u8B93\u52D5\u756B\u7E7C\u7E8C\uFF0C\u9019\u6703\u5C0E\u81F4\u52D5\u756B\u6301\u7E8C\u6642\u9593\u8B8A\u9577\uFF0C\u4E26\u4E14\u52D5\u756B\u53EF\u80FD\u4E0D\u6D41\u66A2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8DF3\u904E\u4E00\u4E9B\u5E40 - \u901A\u904E\u8DF3\u5E40\u78BA\u4FDD\u6574\u500B\u52D5\u756B\u7684\u6301\u7E8C\u6642\u9593\u4E0D\u6703\u8D85\u904E\u9810\u5B9A\u6642\u9593\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E1F\u5E40\uFF0C\u53EF\u6307\u793ATouchGFX\u81EA\u52D5\u8DF3\u904E\u4E00\u4E9B\u5E40\u3002 \u9019\u53EF\u4EE5\u901A\u904E\u5728\u6BCF\u500B\u5BE6\u969B\u5E40\u4E2D\u591A\u6B21\u52FE\u9078\u52D5\u756B\u4F86\u5BE6\u73FE\u3002  \u7576\u6E32\u67D3\u6642\u9593\u4E0D\u7A69\u5B9A\u6642\uFF0C\u9019\u6709\u52A9\u65BC\u8B93\u52D5\u756B\u66F4\u6D41\u66A2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setFrameRateCompensation(bool enabled)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "what-affects-the-rendering-time"
  }), `\u5F71\u97FF\u6E32\u67D3\u6642\u9593\u7684\u56E0\u7D20\u6709\u54EA\u4E9B\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u97FF\u6E32\u67D3\u6642\u9593\u7684\u56E0\u7D20\u6709\u8A31\u591A\uFF1A\u66F4\u65B0\u90E8\u5206\u7684\u5927\u5C0F\u3001\u5206\u5C64\u7684\u4F7F\u7528\u3001\u5C0F\u5DE5\u5177\u7684\u8907\u96DC\u5EA6\u548C\u53EF\u4F7F\u7528\u65BC\u6E32\u67D3\u7684\u786C\u9AD4\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "how-much-of-the-screen-is-updated"
  }), `\u4ECB\u9762\u66F4\u65B0\u4E86\u591A\u5C11\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u6642\u9593\u901A\u5E38\u8207\u5FC5\u9808\u66F4\u65B0\u7684\u50CF\u7D20\u6578\u6210\u6B63\u6BD4\u3002 \u5982\u679C\u52D5\u756B\u9700\u8981\u7684\u6E32\u67D3\u6642\u9593\u904E\u9577\uFF0C\u4E00\u7A2E\u53EF\u80FD\u7684\u89E3\u6C7A\u8FA6\u6CD5\u662F\u7E2E\u5C0F\u52D5\u756B\u9762\u7A4D\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u6709\u4E00\u5F35\u65CB\u8F49\u5716\u50CF\u800C\u6027\u80FD\u4E0D\u5920\u597D\uFF0C\u5247\u53EF\u901A\u904E\u7E2E\u5C0F\u5716\u50CF\u5C3A\u5BF8\u4F86\u6539\u5584\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/reducing-image-size.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u901A\u904E\u7E2E\u5C0F\u5716\u50CF\u5C3A\u5BF8\u7E2E\u77ED\u6E32\u67D3\u6642\u9593"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u6703\u91CD\u7E6A\u61C9\u7528\u4E2D\u7121\u6548\u7684\u5340\u57DF\u3002 \u9019\u610F\u5473\u8457\u5FC5\u9808\u53EA\u4F7F\u5BE6\u969B\u9700\u8981\u5237\u65B0\u7684\u5340\u57DF\u7121\u6548\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u6548\u5340\u57DF\u8D8A\u5927\uFF0C\u6E32\u67D3\u6642\u9593\u8D8A\u9577\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-number-of-layers-in-the-graphics"
  }), `\u5716\u5F62\u4E2D\u7684\u5C64\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5178\u578B\u61C9\u7528\u4E2D\uFF0C\u5716\u5F62\u5C07\u5305\u542B\u5F7C\u6B64\u5806\u758A\u7684\u4E0D\u540C\u5143\u7D20\u3002 \u5982\u679C\u66F4\u65B0\u4E86\u5143\u7D20\u4E2D\u7684\u4E00\u500B\uFF0C\u901A\u5E38\u5FC5\u9808\u91CD\u7E6A\u6240\u6709\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5178\u578B\u7684\u4F8B\u5B50\u662F\u80CC\u666F\u5716\u50CF\u3001\u5E40\u548C\u4E00\u4E9B\u6587\u5B57\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5206\u5C64\u5716\u5F62\u5143\u7D20"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u5275\u5EFA\u65B9\u6CD5\u662F\u5C07TextArea\u5C0F\u5DE5\u5177\u653E\u5728\u986F\u793A\u4E86\u4E00\u500B\u900F\u660E\u5F71\u50CF\u7684Image\u5C0F\u5DE5\u5177\u4E0A\u65B9\u3002 \u4E8C\u8005\u90FD\u5728\u80CC\u666F\u5716\u50CF\u4E0A\u65B9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame-designer-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u5206\u5C64\u5716\u5F62\u5143\u7D20"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u89E3\u6C7A\u65B9\u6848\u5728\u61C9\u7528\u4E2D\u7D93\u5E38\u7528\u5230\u3002 \u9019\u662F\u4E00\u7A2E\u5341\u5206\u7C21\u55AE\u7684\u89E3\u6C7A\u65B9\u6848\uFF0C\u5177\u6709\u9AD8\u5EA6\u7684\u9748\u6D3B\u6027\uFF0C\u4F8B\u5982\uFF0C\u53EF\u4EE5\u5728\u57F7\u884C\u6642\u9593\u66F4\u6539\u5F71\u50CF\u6216\u5728\u80CC\u666F\u4E0A\u79FB\u52D5\u5F71\u50CF\u548C\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u6E32\u67D3\u6642\u9593\u7684\u554F\u984C\u662F\u5982\u679C\u5728\u57F7\u884C\u6642\u9593\u66F4\u65B0\u4E86\u6587\u5B57\u4E14\u9700\u8981\u91CD\u7E6A\uFF0C\u5716\u5F62\u5F15\u64CE\u9084\u9700\u8981\u91CD\u7E6A\u80CC\u666F\u548C\u5F71\u50CF\uFF0C\u7136\u5F8C\u662F\u65B0\u7684\u6587\u5B57\u3002 \u9019\u6703\u986F\u8457\u589E\u52A0\u6587\u5B57\u7684\u6E32\u67D3\u6642\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u6548\u5340\u57DF\u7684\u5C64\u6578\u8D8A\u591A\uFF0C\u6E32\u67D3\u6642\u9593\u5C31\u8D8A\u9577\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-complexity-of-rendering-the-pixels"
  }), `\u6E32\u67D3\u50CF\u7D20\u7684\u8907\u96DC\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u6BCF\u500B\u50CF\u7D20\u6E32\u67D3\u5230\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u96E3\u5EA6\u4E26\u4E0D\u4E00\u81F4\u3002 \u5728\u6240\u6709\u985E\u578B\u7684\u6E32\u67D3\u4E2D\uFF0C\u5716\u5F62\u5F15\u64CE\u5FC5\u9808\u5C07\u6240\u5F97\u50CF\u7D20\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u3002 \u4F46\u662F\uFF0C\u8981\u5BEB\u5165\u7684\u50CF\u7D20\u7684\u8A08\u7B97\u6210\u672C\u4E26\u4E0D\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FA\u5B9A\u8272\u5F69\uFF08\u5982Box Widget\u4E2D\u4F7F\u7528\u7684\u8272\u5F69\uFF09\u7684\u6210\u672C\u6700\u4F4E\uFF0C\u53EA\u9700\u8A08\u7B97\u4E00\u500B\u50CF\u7D20\u4E26\u5C07\u7D50\u679C\u91CD\u8907\u7528\u65BC\u6240\u6709\u50CF\u7D20\u3002 \u9019\u610F\u5473\u8457\u4F7F\u7528\u8A31\u591ABox\u53EF\u7372\u5F97\u975E\u5E38\u9AD8\u7684\u6027\u80FD\u3002 \u7531\u65BC\u9019\u6703\u5C0E\u81F4\u4F7F\u7528\u8005\u4ECB\u9762\u54C1\u8CEA\u4E0D\u9AD8\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8B70\u9019\u6A23\u505A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u4F4E\u7684\u662F\u5716\u50CF\u7684\u50CF\u7D20\u8A08\u7B97\u6210\u672C\uFF0C\u9019\u662F\u56E0\u70BA\u50CF\u7D20\u5747\u4EE5\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u683C\u5F0F\u5132\u5B58\u5728\u9EDE\u9663\u5716\u4E2D\u3002 \u8A08\u7B97\u8981\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u7684\u50CF\u7D20\u95DC\u4FC2\u5230\u5F9E\u9EDE\u9663\u5716\u4E2D\u7684\u6B63\u78BA\u4F4D\u7F6E\u8F09\u5165\u8272\u5F69\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u5B57\u7684\u6210\u672C\u8207\u5716\u50CF\u76F8\u7576\uFF0C\u6BCF\u500B\u5B57\u6BCD\u5BE6\u969B\u4E0A\u90FD\u662F\u4E00\u5E45\u5C0F\u5716\u50CF\u3002 \u4E8B\u5BE6\u4E0A\uFF0C\u7531\u65BC\u5927\u91CF\u5C0F\u5716\u50CF\u5C0E\u81F4\u4E86\u76F8\u7576\u9AD8\u7684\u201C\u958B\u59CB-\u505C\u6B62\u201D\u6210\u672C\uFF0C\u56E0\u6B64\u6587\u5B57\u7684\u6210\u672C\u66F4\u9AD8\u3002 \u4F8B\u5982\uFF0C\u6BCF\u500B\u5B57\u6BCD\u7684\u4F4D\u7F6E\u8A08\u7B97\u3002 \u70BA\u4E86\u8B93\u6587\u5B57\u770B\u8D77\u4F86\u76E1\u53EF\u80FD\u7F8E\u89C0\uFF0C\u6703\u5C07\u6587\u5B57\u986F\u793A\u70BA\u5177\u6709\u900F\u660E\u5EA6\u7684\u5C0F\u5716\u50CF\uFF0C\u8ACB\u53C3\u898B\u4E0B\u6587\u95DC\u65BC\u900F\u660E\u7684\u6CE8\u91CB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65CB\u8F49\u6216\u7E2E\u653E\u5F8C\u7684\u5716\u50CF\u6210\u672C\u66F4\u9AD8\u3002 \u4EFB\u52D9\u540C\u6A23\u662F\u5F9E\u9EDE\u9663\u5716\u8F09\u5165\u50CF\u7D20\u503C\uFF0C\u4F46\u7531\u65BC\u5716\u5F62\u5F15\u64CE\u5FC5\u9808\u5305\u542B\u7E2E\u653E\u548C\u65CB\u8F49\uFF0C\u56E0\u6B64\u9019\u6642\u7684\u8A08\u7B97\u66F4\u8017\u6642\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E7E\u4F55\u5143\u7D20\uFF08\u5982\u5713\u5F62\uFF09\u7684\u6210\u672C\u66F4\u9AD8\u3002 \u9019\u6642\u6211\u5011\u4E0D\u80FD\u5F9E\u9EDE\u9663\u5716\u8F09\u5165\u50CF\u7D20\u8272\u5F69\uFF0C\u800C\u662F\u5FC5\u9808\u8A08\u7B97\u5713\u7684\u5F62\u72C0\u548C\u5713\u4E2D\u6BCF\u500B\u50CF\u7D20\u7684\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u5EA6\u589E\u52A0\u4E86\u5143\u7D20\u7684\u7E6A\u88FD\u6210\u672C\u3002 \u5982\u679C\u4E00\u4E9B\u50CF\u7D20\u4E0D\u662F\u5BE6\u5FC3\u7684\uFF0C\u90A3\u9EBC\u5143\u7D20\u662F\u900F\u660E\u7684\u3002 \u5716\u5F62\u5F15\u64CE\u9996\u5148\u5FC5\u9808\u7E6A\u88FD\u900F\u660E\u5143\u7D20\u5F8C\u65B9\u7684\u5143\u7D20\uFF08\u5982\u201C\u5F71\u50CF\u4E2D\u7684\u6587\u5B57\u201D\u7AE0\u7BC0\u6240\u8FF0\uFF09\uFF0C\u9019\u6703\u589E\u52A0\u7E6A\u88FD\u6210\u672C\u3002 \u5176\u6B21\uFF0C\u5716\u5F62\u5F15\u64CE\u96A8\u5F8C\u5FC5\u9808\u5C07\u80CC\u666F\u50CF\u7D20\u8207\u900F\u660E\u5143\u7D20\u7684\u50CF\u7D20\u9032\u884C\u7D44\u5408\uFF0C\u4E26\u5C07\u7D50\u679C\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u3002 \u6B64\u985E\u8A08\u7B97\u7684\u8017\u6642\u986F\u8457\u591A\u65BC\u53EA\u5BEB\u5165\u8A08\u7B97\u7684\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/box-image-texture-circle.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Box\u3001Image\u3001\u65CB\u8F49Image\u548C\u5713\u3002 \u5BE6\u5FC3\u5143\u7D20\u4F4D\u65BC\u7B2C\u4E00\u884C\u3002 \u900F\u660E\u5143\u7D20\u5728\u4E0B\u65B9\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u7E3D\u662F\u6703\u591A\u51FA\u4E00\u5C64\u3002 \u4F46\u662F\uFF0C\u5C07\u5BE6\u5FC3\u50CF\u7D20\u653E\u5728\u5176\u4ED6\u5BE6\u5FC3\u50CF\u7D20\u7684\u4E0A\u65B9\u4E26\u4E0D\u4E00\u5B9A\u6703\u589E\u52A0\u5C64\u6578\u3002 \u5716\u5F62\u5F15\u64CE\u5118\u91CF\u4E0D\u7E6A\u88FD\u88AB\u5176\u4ED6\u5BE6\u5FC3\u5716\u5143\u8986\u84CB\u7684\u50CF\u7D20\uFF0C\u56E0\u70BA\u9019\u662F\u5728\u6D6A\u8CBB\u5BF6\u8CB4\u7684\u6642\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u6548\u5340\u57DF\u4E2D\u5143\u7D20\u7684\u6210\u672C\u8D8A\u9AD8\uFF0C\u6E32\u67D3\u6642\u9593\u5C31\u8D8A\u9577\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A18\u4F4F\uFF0C\u53EA\u6709\u7121\u6548\u5340\u57DF\u4E2D\u7684\u5143\u7D20\u624D\u6703\u589E\u52A0\u6E32\u67D3\u6642\u9593\u3002 \u7121\u6548\u5340\u57DF\u4E4B\u5916\u7684\u5143\u7D20\u5C0D\u6E32\u67D3\u6642\u9593\u7121\u5F71\u97FF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/general-ui-component-performance"
  }), `\u6B64\u8655`), `\u95B1\u8B80\u95DC\u65BCUI\u5143\u4EF6\u548C\u6027\u80FD\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-rendering"
  }), `\u6E32\u67D3\u7684\u786C\u9AD4\u652F\u63F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9BSTM32\u5FAE\u63A7\u5236\u5668\u5305\u542B\u5716\u5F62\u52A0\u901F\u5668Chrom-ART\uFF08\u6216DMA2D\uFF09\u3002 \u6B64\u52A0\u901F\u5668\u53EF\u7E2E\u77ED\u6E32\u67D3\u6642\u9593\u3002 \u7531\u65BC\u52A0\u901F\u5668\u8207\u5FAE\u63A7\u5236\u5668\u6838\u5FC3\u5E73\u884C\u904B\u884C\uFF0C\u5FAE\u63A7\u5236\u5668\u53EF\u4EE5\u5728\u52A0\u901F\u5668\u6E32\u67D3\u5716\u5F62\u6642\u81EA\u7531\u5730\u904B\u884C\u5176\u4ED6\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u4E3B\u8981\u7528\u65BC\u5716\u50CF\u548C\u6587\u5B57\u3002 \u7576\u555F\u7528\u6642\u5716\u5F62\u5F15\u64CE\u6703\u81EA\u52D5\u4F7F\u7528\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "when-should-you-consider-rendering-time"
  }), `\u4F55\u6642\u61C9\u8003\u616E\u6E32\u67D3\u6642\u9593`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u6642\u9593\u4E26\u975E\u7E3D\u662F\u90A3\u9EBC\u91CD\u8981\u3002 \u7576\u4F4E\u5E40\u7387\u53EF\u88AB\u7528\u6236\u89C0\u5BDF\u5230\u6642\uFF0C\u61C9\u6CE8\u610F\u6E32\u67D3\u6642\u9593\u3002 \u7576\u52D5\u756B\u5728\u90E8\u5206\u4ECB\u9762\u4E0A\u904B\u884C\uFF08\u5982\u65CB\u8F49\u7684\u5716\u793A\uFF09\u6216\u60A8\u5728\u4ECB\u9762\u4E0A\u79FB\u52D5\u6216\u6ED1\u52D5\u67D0\u5143\u7D20\u6642\uFF0C\u901A\u5E38\u5C31\u5C6C\u65BC\u9019\u7A2E\u60C5\u6CC1\u3002 \u5982\u679C\u66F4\u65B0\u983B\u7387\u4F4E\uFF0C\u90A3\u9EBC\u5728\u4F7F\u7528\u8005\u770B\u4F86\uFF0C\u52D5\u756B\u5C07\u5448\u73FE\u51FA\u5206\u6B65\u986F\u793A\u800C\u975E\u6D41\u66A2\u7684\u72C0\u614B\u3002 \u5982\u679C\u662F\u9019\u6A23\uFF0C\u61C9\u6AA2\u67E5\u6E32\u67D3\u6642\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u7528\u65B0\u4ECB\u9762\u66FF\u4EE3\u6574\u500B\u4ECB\u9762\uFF0C\u7576\u66F4\u63DB\u671F\u9593\u5E40\u7387\u986F\u8457\u4E0B\u964D\u6642\uFF0C\u7528\u6236\u901A\u5E38\u6CE8\u610F\u4E0D\u5230\u3002 \u9019\u662F\u56E0\u70BA\u7528\u6236\u770B\u4E0D\u5230\u6E32\u67D3\u4F55\u6642\u958B\u59CB\uFF0C\u53EA\u80FD\u770B\u5230\u5B83\u4F55\u6642\u7D50\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u5169\u689D\u898F\u5247\u610F\u5473\u8457\u5C0D\u65BC\u52D5\u756B\u5143\u7D20\uFF08\u5982\u79FB\u52D5\u5143\u7D20\uFF09\u800C\u8A00\uFF0C\u61C9\u4F7F\u7528\u8F03\u5C11\u7684\u5C64\u6578\uFF0C\u907F\u514D\u4F7F\u7528\u8907\u96DC\u5143\u7D20\u548C\u8A31\u591A\u5C64\u6578\u3002 \u5C0D\u65BC\u4ECB\u9762\u7684\u5176\u9918\u90E8\u5206\uFF0C\u9019\u4E9B\u4E0D\u662F\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/clock-and-scrolllist.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u985E\u6BD4\u6642\u9418\u548C\u6EFE\u52D5\u6E05\u55AE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u5DE6\u5074\u6709\u4E00\u500B\u985E\u6BD4\u6642\u9418\u3002 \u901A\u904E\u65CB\u8F49\u4E09\u5E45\u7D30\u9577\u7684\u5716\u50CF\u6E32\u67D3\u4E09\u6839\u6307\u91DD\u3002 \u9019\u901A\u5E38\u4E0D\u96E3\u5BE6\u73FE\uFF0C\u56E0\u70BA\u6307\u91DD\u4E26\u975E\u7E3D\u662F\u5728\u79FB\u52D5\u3002 \u4F46\u5982\u679C\u6211\u5011\u8981\u8B93\u6642\u9418\u5728\u4ECB\u9762\u4E0A\u5230\u8655\u79FB\u52D5\uFF0C\u5C07\u6703\u5728\u6BCF\u4E00\u5E40\u4E2D\u91CD\u7E6A\u6307\u91DD\uFF0C\u7531\u65BC\u7E6A\u88FD\u65CB\u8F49\u5716\u50CF\u901A\u5E38\u6BD4\u8F03\u8017\u6642\uFF0C\u56E0\u6B64\u6703\u6BD4\u8F03\u9EBB\u7169\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u5074\u662F\u4E00\u500B\u6EFE\u52D5\u5217\u8868\u3002 \u4F7F\u7528\u8005\u53EF\u4EE5\u4E0A\u4E0B\u79FB\u52D5\u6B64\u6578\u5B57\u6E05\u55AE\uFF0C\u70BA\u4E86\u8B93\u4F7F\u7528\u8005\u4ECB\u9762\u986F\u793A\u51FA\u9AD8\u56DE\u61C9\u6027\uFF0C\u9700\u8981\u9AD8\u5E40\u7387\u3002 \u56E0\u6B64\uFF0C\u5FC5\u9808\u8003\u616E\u6EFE\u52D5\u6E05\u55AE\u4E2D\u5143\u7D20\u7684\u6E32\u67D3\u6642\u9593\uFF0C\u6216\u8005\u7E2E\u5C0F\u6EFE\u52D5\u5217\u8868\u7684\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "optimize-performance-by-invalidating-content"
  }), `Optimize Performance by Invalidating Content`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Normally the entire widget is invalidated, but the graphics engine has the ability to only invalidate the content of a widget, instead of the entire widget. By reducing the area to invalidate, the render time will often be noticeably shorter. The improvement in render time depends on:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `The size of the area covered by the widget content relative to the size of the entire widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `The background widget(s) partly or fully covered by the widget.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following figures illustrates the concept of invalidating content, by using the TextArea widget as example. Figure 1 shows the entire area of the widget. Figure 2 shows the invalidated area when using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `. Figure 3 shows the invalidated area when using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-area-expanded-across-screen.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Figure 1. TextArea spanning across the entire screen width"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Figure 2. Invalidated area (red) when using TextArea::invalidate()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-content-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Figure 3. Invalidated area (green) when using TextArea::invalidateContent()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "example-using-textareainvalidatecontent"
  }), `Example using TextArea::invalidateContent()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In cases where the widget is overlapping other widgets, these other widgets will need to be redrawn when the entire TextArea is invalidated using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `. By using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), ` instead, we minimize the risk of unnecessary invalidating and redrawing widgets. This is especially true for expensive widgets, e.g. Circle, Gauge, etc.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The figure below illustrates how we avoid invalidating a background widget (Image - ST logo) using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `. The background widget would have been invalidated and redrawn if we used `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-content-improvement-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Example using TextArea::invalidateContent()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tips-to-get-good-performance"
  }), `\u7372\u5F97\u826F\u597D\u6027\u80FD\u7684\u5EFA\u8B70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u7E3D\u7D50\u4E86\u7372\u5F97\u826F\u597D\u6027\u80FD\u7684\u5EFA\u8B70\uFF0C\u4EE5\u7D50\u675F\u672C\u7BC0\u5167\u5BB9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Do not redraw unchanged things`), ` Make sure that you do not accidentally invalidate unnecessary parts of the display. This reduces the performance without any benefit.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728\u54C1\u8CEA\u8207\u901F\u5EA6\u4E4B\u9593\u5C0B\u6C42\u5E73\u8861`), ` \u964D\u4F4E\u5143\u7D20\u7684\u8907\u96DC\u5EA6\u6709\u52A9\u65BC\u63D0\u9AD8\u6027\u80FD\u3002 \u8907\u96DC\u5EA6\u8207\u6027\u80FD\u4E4B\u9593\u7684\u826F\u597D\u5E73\u8861\u901A\u5E38\u6975\u70BA\u95DC\u9375\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5229\u7528\u786C\u9AD4\u80FD\u529B`), ` \u5177\u6709\u786C\u9AD4\u52A0\u901F\uFF08Chrom-ART\uFF09\u7684\u5FAE\u63A7\u5236\u5668\u7684\u80FD\u529B\u901A\u5E38\u9AD8\u65BC\u6C92\u6709\u786C\u9AD4\u52A0\u901F\u7684\u5FAE\u63A7\u5236\u5668\u3002 \u8003\u616E\u4F7F\u7528\u5177\u6709Chrom-ART\u7684\u5FAE\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7528\u5716\u50CF\u66FF\u4EE3\u8A08\u7B97\u5716\u5F62`), ` \u8A08\u7B97\u6240\u5F97\u5230\u7684\u5713\u6703\u6BD4\u5713\u5716\u50CF\u6162\u3002 \u4E00\u822C\u800C\u8A00\uFF0C\u5716\u50CF\u53EF\u66FF\u4EE3\u8A31\u591A\u975C\u614B\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8ABF\u6574\u986F\u793A\u5668\u5237\u65B0\u7387`), ` \u5982\u672C\u7BC0\u958B\u982D\u6240\u8FF0\uFF0C\u5237\u65B0\u7387\u662F\u6E32\u67D3\u6642\u9593\u7684\u786C\u6027\u9650\u5236\u3002 \u5982\u679C\u6E32\u67D3\u6642\u9593\u8D85\u904E\u5237\u65B0\u7387\uFF0C\u5E40\u7387\u5C07\u4E0B\u964D\u3002 \u5982\u679C\u6E32\u67D3\u6642\u9593\u53EA\u8D85\u904E\u5237\u65B0\u7387\u4E00\u9EDE\u9EDE\uFF0C\u4E5F\u8A31\u80FD\u5920\u5C07\u986F\u793A\u5668\u7684\u5237\u65B0\u7387\u964D\u81F3\u598255 Hz\uFF08\u76F8\u7576\u65BC18.2 ms\uFF09\u9019\u6A23\u7684\u6C34\u6E96\uFF0C\u4E26\u7DAD\u6301\u9AD8\u5E40\u7387\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);