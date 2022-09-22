"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4633],{

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

/***/ 26312:
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
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/performance.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/performance",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "performance",
    "title": "\u6027\u80FD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E3B\u5FAA\u73AF",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/rendering"
  },
  "next": {
    "title": "\u64CD\u4F5C\u7CFB\u7EDF",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/operating-system"
  }
};
const assets = {};


const toc = [{
  value: "\u6D4B\u91CF\u6E32\u67D3\u65F6\u95F4",
  id: "measuring-the-rendering-time",
  level: 2
}, {
  value: "\u4E22\u5E27\u8BA1\u6570",
  id: "counting-the-lost-frames",
  level: 2
}, {
  value: "\u4E22\u5E27\u8865\u507F",
  id: "compensating-for-lost-frames",
  level: 3
}, {
  value: "\u5F71\u54CD\u6E32\u67D3\u65F6\u95F4\u7684\u56E0\u7D20\u6709\u54EA\u4E9B\uFF1F",
  id: "what-affects-the-rendering-time",
  level: 2
}, {
  value: "\u754C\u9762\u66F4\u65B0\u4E86\u591A\u5C11\uFF1F",
  id: "how-much-of-the-screen-is-updated",
  level: 3
}, {
  value: "\u56FE\u5F62\u4E2D\u7684\u5C42\u6570",
  id: "the-number-of-layers-in-the-graphics",
  level: 3
}, {
  value: "\u6E32\u67D3\u50CF\u7D20\u7684\u590D\u6742\u5EA6",
  id: "the-complexity-of-rendering-the-pixels",
  level: 3
}, {
  value: "\u6E32\u67D3\u7684\u786C\u4EF6\u652F\u6301",
  id: "hardware-support-for-rendering",
  level: 3
}, {
  value: "\u4F55\u65F6\u5E94\u8003\u8651\u6E32\u67D3\u65F6\u95F4",
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
  value: "\u83B7\u5F97\u826F\u597D\u6027\u80FD\u7684\u5EFA\u8BAE",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u8BA8\u8BBA\u5D4C\u5165\u5F0F\u56FE\u5F62\u7528\u6237\u754C\u9762\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u91CC\u7684\u9AD8\u6027\u80FD\u662F\u6307\u5728\u83B7\u5F97\u6240\u9700\u56FE\u5F62\u6548\u679C\u548C\u52A8\u753B\u65F6\u5B9E\u73B0\u9AD8\u5E27\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u56DE\u987E\u4E00\u4E0B\u4E0A\u4E00\u8282\u4E2D\u5173\u4E8E\u4E3B\u5FAA\u73AF\u5982\u4F55\u5F71\u54CD\u7528\u6237\u754C\u9762\u5E27\u7387\u7684\u5185\u5BB9\u3002 \u518D\u6B21\u5047\u8BBE\u6709\u4E00\u53F0\u8FDE\u63A5\u5230LTDC\u7684\u5E76\u884CRGB\u663E\u793A\u5668\u548C\u4E24\u4E2A\u5E27\u7F13\u51B2\u3002 \u57FA\u672C\u60C5\u51B5\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u53CC\u5E27\u7F13\u51B2"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5047\u8BBE\u663E\u793A\u5668\u6BCF\u79D2\u5237\u65B060\u6B21\uFF0C\u5219\u6BCF\u6B21\u5237\u65B0\u4E4B\u95F4\u7684\u95F4\u9694\u7EA616 ms\u3002 \u8BA1\u7B97\u8FC7\u7A0B\u5982\u4E0B\uFF1A1 s / 60 = 0.01667 s = 16.67 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57281\u53F7\u5E27\u7F13\u51B2\u7684\u4F20\u8F93\u5F00\u59CB\u65F6\uFF0CTouchGFX\u5F00\u59CB\u5C061\u53F7\u5E27\u7ED8\u5236\u52302\u53F7\u5E27\u7F13\u51B2\u3002 \u5982\u679C1\u53F7\u5E27\u7684\u6E32\u67D3\u5728\u4E0B\u4E00\u6B21\u4F20\u8F93\u5F00\u59CB\u524D\u5B8C\u6210\uFF0C\u5219\u53EF\u4EE5\u4F20\u8F932\u53F7\u5E27\u7F13\u51B2\u3002 \u5982\u679C\u6CA1\u6709\u572816.67 ms\u5185\u5B8C\u6210\uFF0C\u5219\u518D\u6B21\u4F20\u8F931\u53F7\u5E27\u7F13\u51B2\uFF0C\u5E76\u4E14\u663E\u793A\u5668\u7684\u663E\u793A\u5185\u5BB9\u4E0D\u53D8\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u4E3B\u5FAA\u73AF\u65F6\u95F4\u8D85\u8FC716.67 ms"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u79CD\u60C5\u51B5\u610F\u5473\u7740\u4E22\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u91C7\u96C6\u548C\u66F4\u65B0\u9636\u6BB5\u7684\u65F6\u95F4\u901A\u5E38\u662F\u6781\u77ED\u7684\uFF0C\u5982\u5C11\u4E8E1 ms\uFF0C\u5728\u8003\u8651\u4E3B\u5FAA\u73AF\u6D88\u8017\u7684\u603B\u65F6\u95F4\u65F6\uFF0C\u591A\u5C11\u6709\u4E9B\u5FAE\u4E0D\u8DB3\u9053\u3002 \u56E0\u6B64\uFF0C\u5728\u4E0B\u6587\u548C\u5168\u6587\u4E2D\uFF0C\u5728\u8003\u8651\u6E32\u67D3\u65F6\u95F4\u65F6\uFF0C\u5176\u4E2D\u5305\u62EC\u91C7\u96C6\u548C\u66F4\u65B0\u9636\u6BB5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u8BB8\u591A\u5E27\u7684\u6E32\u67D3\u65F6\u95F4\u8D85\u8FC716.67 ms\u7684\u65F6\u9650\uFF0C\u663E\u793A\u5668\u4E0A\u7684\u5E27\u7387\u5C06\u662F30\u5E27\u6BCF\u79D2\uFF08fps\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u6E32\u67D3\u65F6\u95F4\u5927\u4F53\u4E0A\u77ED\u4E8E16.67 ms\uFF0C\u4F46\u6709\u4E00\u4E9B\u5E27\u8D85\u8FC716.67 ms\uFF0C\u5219\u5E73\u5747\u5E27\u7387\u53EF\u80FD\u63A5\u8FD160 fps\uFF0C\u4F46\u5728\u7528\u6237\u770B\u6765\u52A8\u753B\u53EF\u80FD\u4E0D\u6D41\u7545\u3002 \u52A8\u753B\u4E2D\u7684\u67D0\u4E9B\u6B65\u9AA4\u53EF\u80FD\u770B\u8D77\u6765\u8FC7\u5FEB\u800C\u67D0\u4E9B\u53C8\u8FC7\u6162\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u5E94\u7528\u3002 \u8FD9\u4E0D\u7B26\u5408\u6211\u4EEC\u7684\u671F\u671B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u65F6\u95F4\u8FD8\u53EF\u80FD\u66F4\u957F\u3002 \u5982\u679C\u521A\u597D\u8D85\u8FC733 ms\uFF0C\u7531\u4E8E\u6BCF\u4E09\u6B21\u4F20\u8F93\u53EA\u6709\u4E00\u4E2A\u65B0\u5E27\u5C31\u7EEA\uFF0C\u5E27\u7387\u5C06\u964D\u81F320 fps\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `FPS(\u5E27\u7387)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u957F\u6E32\u67D3\u65F6\u95F4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `66.67 ms`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8868\u663E\u793A\u4E86\u7ED9\u5B9A\u5E27\u7387\u53EF\u83B7\u5F97\u7684\u6700\u957F\u6E32\u67D3\u65F6\u95F4\uFF08\u5305\u62EC\u91C7\u96C6\u548C\u66F4\u65B0\u9636\u6BB5\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u83B7\u5F97\u826F\u597D\u7684\u7528\u6237\u754C\u9762\u6027\u80FD\uFF0C\u6700\u597D\u5B9A\u671F\u68C0\u67E5\u548C\u76D1\u6D4B\u5E27\u7387\u3002 \u53EF\u4F7F\u7528\u4E24\u79CD\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6D4B\u91CF\u6E32\u67D3\u65F6\u95F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E22\u5E27\u8BA1\u6570`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "measuring-the-rendering-time"
  }), `\u6D4B\u91CF\u6E32\u67D3\u65F6\u95F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6D4B\u91CF\u6E32\u67D3\u65F6\u95F4\u7684\u7B2C\u4E00\u79CD\u65B9\u6CD5\u63D0\u4F9B\u4E86\u6700\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002 \u5176\u7406\u5FF5\u5B9E\u9645\u4E0A\u662F\u6D4B\u91CF\u4ECE\u5E27\u4F20\u8F93\u5230\u6E32\u67D3\u9636\u6BB5\u7ED3\u675F\u4E4B\u95F4\u7684\u65F6\u95F4\u3002 \u56FE\u5F62\u5F15\u64CE\u5728\u91C7\u96C6\u9636\u6BB5\u5F00\u59CB\u65F6\u8C03\u7528GPIO\u7C7B\u7684\u51FD\u6570\uFF0C\u5E76\u5728\u6E32\u67D3\u9636\u6BB5\u7ED3\u675F\u65F6\u518D\u6B21\u8C03\u7528\u3002 The application defines these function and can hook into them to perform measurements.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6D4B\u91CF\u53EF\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u6765\u6267\u884C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u5916\u90E8\u8BA1\u65F6\u8BBE\u5907\uFF0C\u5982\u793A\u6CE2\u5668\uFF1A\u4E3A\u4E86\u4F7F\u7528\u793A\u6CE2\u5668\u8FDB\u884C\u6D4B\u91CF\uFF0C\u5E94\u7528\u5E94\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `GPIO`), `\u63A5\u53E3\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `set(GPIO_ID)`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `clear(GPIO_ID)`), `\u65B9\u6CD5\u3002 \u7136\u540E\uFF0C\u793A\u6CE2\u5668\u53EF\u4EE5\u6D4B\u91CF\u8F93\u51FA\u4E3A\u9AD8\u7535\u5E73\u7684\u6301\u7EED\u65F6\u95F4\uFF0C\u4EE5\u6B64\u4F5C\u4E3A\u6E32\u67D3\u65F6\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u5185\u90E8\u8BA1\u65F6\u5668\uFF1A\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528\u5185\u90E8\u8BA1\u65F6\u5668\uFF0C\u5982sysTick\u8BA1\u65F6\u5668\u3002 \u5728\u8C03\u7528GPIO::set(RENDER_TIME)\uFF0C\u5E94\u7528\u53EF\u5C06\u8BA1\u65F6\u5668\u7684\u503C\u4FDD\u5B58\u5728\u53D8\u91CF\u4E2D\u3002 \u5728\u8FDB\u884C\u6E05\u96F6\u8C03\u7528\u65F6\uFF0C\u5E94\u7528\u53EF\u518D\u6B21\u8BFB\u53D6\u8BA1\u65F6\u5668\u5E76\u51CF\u53BB\u524D\u503C\uFF0C\u4ECE\u800C\u83B7\u5F97\u6E32\u67D3\u65F6\u95F4\u3002 \u8BA1\u65F6\u5668\u7684\u901F\u5EA6\u5C06\u51B3\u5B9A\u6D4B\u91CF\u7CBE\u5EA6\u3002 \u5E94\u7528\u5FC5\u987B\u4EE5\u67D0\u79CD\u65B9\u5F0F\u4F7F\u6E32\u67D3\u65F6\u95F4\u53EF\u89C1\u3002 \u4E00\u79CD\u65B9\u5F0F\u662F\u5C06\u503C\u4FDD\u5B58\u5728\u5168\u5C40\u53D8\u91CF\u4E2D\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u754C\u9762\u4E0A\u7684TextArea\u4E2D\u663E\u793A\u503C\u3002 \u4E5F\u53EF\u4F7F\u7528\u8C03\u8BD5\u5668\u68C0\u67E5\u503C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "counting-the-lost-frames"
  }), `\u4E22\u5E27\u8BA1\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine counts the number of transfers that has occurred during the last collect-update-rendering phase. \u5E94\u7528\u53EF\u8F7B\u677E\u5730\u68C0\u67E5\u6B64\u503C\uFF0C\u4EE5\u4FBF\u4E86\u89E3\u662F\u5426\u4E22\u5E27\u4EE5\u53CA\u5E27\u7387\u662F\u5426\u4E0B\u964D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BA1\u6570\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `HAL`), `\u7C7B\u4E2D\u63D0\u4F9B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u4E22\u5E27\u8865\u507F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E22\u5E27\u4E14\u67D0\u4E2A\u52A8\u753B\u7684\u5E27\u7387\u56E0\u6B64\u4E0B\u964D\uFF0C\u53EF\u8FDB\u884C\u4E00\u5B9A\u7A0B\u5EA6\u7684\u8865\u507F\u3002 \u6211\u4EEC\u53EF\u4EE5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7B49\u5F85\u5176\u7ED3\u675F - \u8BA9\u52A8\u753B\u7EE7\u7EED\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u53D8\u957F\uFF0C\u5E76\u4E14\u52A8\u753B\u53EF\u80FD\u4E0D\u6D41\u7545\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8DF3\u8FC7\u4E00\u4E9B\u5E27 - \u901A\u8FC7\u8DF3\u5E27\u786E\u4FDD\u6574\u4E2A\u52A8\u753B\u7684\u6301\u7EED\u65F6\u95F4\u4E0D\u4F1A\u8D85\u8FC7\u9884\u5B9A\u65F6\u95F4\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E22\u5E27\uFF0C\u53EF\u6307\u793ATouchGFX\u81EA\u52A8\u8DF3\u8FC7\u4E00\u4E9B\u5E27\u3002 \u53EF\u901A\u8FC7\u5728\u6BCF\u4E2A\u5B9E\u9645\u5E27\u5C06\u52A8\u753Btick\u4E00\u6B21\u4EE5\u4E0A\u6765\u5B9E\u73B0\u3002 \u5F53\u6E32\u67D3\u65F6\u95F4\u4E0D\u7A33\u5B9A\u65F6\uFF0C\u8FD9\u6709\u52A9\u4E8E\u8BA9\u52A8\u753B\u66F4\u6D41\u7545\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setFrameRateCompensation(bool enabled)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "what-affects-the-rendering-time"
  }), `\u5F71\u54CD\u6E32\u67D3\u65F6\u95F4\u7684\u56E0\u7D20\u6709\u54EA\u4E9B\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F71\u54CD\u6E32\u67D3\u65F6\u95F4\u7684\u56E0\u7D20\u6709\u8BB8\u591A\uFF1A\u66F4\u65B0\u90E8\u5206\u7684\u5927\u5C0F\u3001\u5206\u5C42\u7684\u4F7F\u7528\u3001\u63A7\u4EF6\u7684\u590D\u6742\u5EA6\u548C\u6E32\u67D3\u53EF\u4F7F\u7528\u7684\u786C\u4EF6\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "how-much-of-the-screen-is-updated"
  }), `\u754C\u9762\u66F4\u65B0\u4E86\u591A\u5C11\uFF1F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u65F6\u95F4\u901A\u5E38\u4E0E\u5FC5\u987B\u66F4\u65B0\u7684\u50CF\u7D20\u6570\u6210\u6B63\u6BD4\u3002 \u5982\u679C\u52A8\u753B\u9700\u8981\u7684\u6E32\u67D3\u65F6\u95F4\u8FC7\u957F\uFF0C\u4E00\u79CD\u53EF\u80FD\u7684\u89E3\u51B3\u529E\u6CD5\u662F\u7F29\u5C0F\u52A8\u753B\u9762\u79EF\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u6709\u4E00\u5F20\u65CB\u8F6C\u56FE\u50CF\u800C\u6027\u80FD\u4E0D\u591F\u597D\uFF0C\u5219\u53EF\u901A\u8FC7\u7F29\u5C0F\u56FE\u50CF\u5C3A\u5BF8\u6765\u6539\u5584\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/reducing-image-size.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u901A\u8FC7\u7F29\u5C0F\u56FE\u50CF\u5C3A\u5BF8\u7F29\u77ED\u6E32\u67D3\u65F6\u95F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BB0\u4F4F\uFF0C\u56FE\u5F62\u5F15\u64CE\u4F1A\u91CD\u7ED8\u5E94\u7528\u4F7F\u4E4B\u65E0\u6548\u7684\u533A\u57DF\u3002 \u8FD9\u610F\u5473\u7740\u5FC5\u987B\u53EA\u4F7F\u5B9E\u9645\u9700\u8981\u5237\u65B0\u7684\u533A\u57DF\u65E0\u6548\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u65E0\u6548\u533A\u57DF\u8D8A\u5927\uFF0C\u6E32\u67D3\u65F6\u95F4\u8D8A\u957F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-number-of-layers-in-the-graphics"
  }), `\u56FE\u5F62\u4E2D\u7684\u5C42\u6570`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5178\u578B\u5E94\u7528\u4E2D\uFF0C\u56FE\u5F62\u5C06\u5305\u542B\u5F7C\u6B64\u5806\u53E0\u7684\u4E0D\u540C\u5143\u7D20\u3002 \u5982\u679C\u66F4\u65B0\u4E86\u5143\u7D20\u4E2D\u7684\u4E00\u4E2A\uFF0C\u901A\u5E38\u5FC5\u987B\u91CD\u7ED8\u6240\u6709\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5178\u578B\u7684\u4F8B\u5B50\u662F\u80CC\u666F\u56FE\u50CF\u3001\u5E27\u548C\u4E00\u4E9B\u6587\u672C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5206\u5C42\u56FE\u5F62\u5143\u7D20"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u7528\u6237\u754C\u9762\u7684\u521B\u5EFA\u65B9\u6CD5\u662F\u5C06TextArea\u63A7\u4EF6\u653E\u5728\u663E\u793A\u4E86\u4E00\u4E2A\u900F\u660E\u5E27\u7684Image\u63A7\u4EF6\u4E0A\u65B9\u3002 \u4E8C\u8005\u90FD\u5728\u80CC\u666F\u56FE\u50CF\u4E0A\u5C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame-designer-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u5206\u5C42\u56FE\u5F62\u5143\u7D20"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u89E3\u51B3\u65B9\u6848\u5728\u5E94\u7528\u4E2D\u7ECF\u5E38\u7528\u5230\u3002 \u8FD9\u662F\u4E00\u79CD\u5341\u5206\u7B80\u5355\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5177\u6709\u9AD8\u5EA6\u7684\u7075\u6D3B\u6027\uFF0C\u4F8B\u5982\uFF0C\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u95F4\u66F4\u6539\u5E27\u6216\u5728\u80CC\u666F\u4E0A\u79FB\u52A8\u5E27\u548C\u6587\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5173\u4E8E\u6E32\u67D3\u65F6\u95F4\u7684\u95EE\u9898\u662F\u5982\u679C\u5728\u8FD0\u884C\u65F6\u95F4\u66F4\u65B0\u4E86\u6587\u672C\u4E14\u9700\u8981\u91CD\u7ED8\uFF0C\u56FE\u5F62\u5F15\u64CE\u8FD8\u9700\u8981\u91CD\u7ED8\u80CC\u666F\u548C\u5E27\uFF0C\u7136\u540E\u662F\u65B0\u7684\u6587\u672C\u3002 \u8FD9\u4F1A\u663E\u8457\u589E\u52A0\u6587\u672C\u7684\u6E32\u67D3\u65F6\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u65E0\u6548\u533A\u57DF\u7684\u5C42\u6570\u8D8A\u591A\uFF0C\u6E32\u67D3\u65F6\u95F4\u5C31\u8D8A\u957F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-complexity-of-rendering-the-pixels"
  }), `\u6E32\u67D3\u50CF\u7D20\u7684\u590D\u6742\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C06\u6BCF\u4E2A\u50CF\u7D20\u6E32\u67D3\u5230\u5E27\u7F13\u51B2\u7684\u96BE\u5EA6\u5E76\u4E0D\u4E00\u81F4\u3002 \u5728\u6240\u6709\u7C7B\u578B\u7684\u6E32\u67D3\u4E2D\uFF0C\u56FE\u5F62\u5F15\u64CE\u5FC5\u987B\u5C06\u6700\u7EC8\u7684\u50CF\u7D20\u5199\u5165\u5E27\u7F13\u51B2\u3002 \u4F46\u662F\uFF0C\u8981\u5199\u5165\u50CF\u7D20\u7684\u8BA1\u7B97\u9700\u8981\u7684\u6D88\u8017\u5E76\u4E0D\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FA\u5B9A\u8272\u5F69\uFF08\u5982Box Widget\u4E2D\u4F7F\u7528\u7684\u8272\u5F69\uFF09\u7684\u6D88\u8017\u6700\u4F4E\uFF0C\u53EA\u9700\u8BA1\u7B97\u4E00\u4E2A\u50CF\u7D20\u5E76\u5C06\u7ED3\u679C\u91CD\u590D\u7528\u4E8E\u6240\u6709\u50CF\u7D20\u3002 \u8FD9\u610F\u5473\u7740\u4F7F\u7528\u8BB8\u591ABox\u53EF\u83B7\u5F97\u975E\u5E38\u9AD8\u7684\u6027\u80FD\u3002 \u7531\u4E8E\u8FD9\u4F1A\u5BFC\u81F4\u7528\u6237\u754C\u9762\u8D28\u91CF\u4E0D\u9AD8\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u4F4E\u7684\u662F\u56FE\u50CF\u7684\u50CF\u7D20\u8BA1\u7B97\u6D88\u8017\uFF0C\u8FD9\u662F\u56E0\u4E3A\u50CF\u7D20\u5747\u4EE5\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u683C\u5F0F\u5B58\u50A8\u5728\u4F4D\u56FE\u4E2D\u3002 \u8BA1\u7B97\u8981\u5199\u5165\u5E27\u7F13\u51B2\u7684\u50CF\u7D20\u5173\u7CFB\u5230\u4ECE\u4F4D\u56FE\u4E2D\u7684\u6B63\u786E\u4F4D\u7F6E\u52A0\u8F7D\u8272\u5F69\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u672C\u7684\u6D88\u8017\u4E0E\u56FE\u50CF\u76F8\u5F53\uFF0C\u6BCF\u4E2A\u5B57\u6BCD\u5B9E\u9645\u4E0A\u90FD\u662F\u4E00\u5E45\u5C0F\u56FE\u50CF\u3002 \u4E8B\u5B9E\u4E0A\uFF0C\u7531\u4E8E\u5927\u91CF\u5C0F\u56FE\u50CF\u5BFC\u81F4\u4E86\u76F8\u5F53\u9AD8\u7684\u201C\u5F00\u59CB-\u505C\u6B62\u201D\u6D88\u8017\uFF0C\u56E0\u6B64\u6587\u672C\u7684\u6D88\u8017\u66F4\u9AD8\u3002 \u4F8B\u5982\uFF0C\u6BCF\u4E2A\u5B57\u6BCD\u7684\u4F4D\u7F6E\u8BA1\u7B97\u3002 \u4E3A\u4E86\u8BA9\u6587\u672C\u770B\u8D77\u6765\u5C3D\u53EF\u80FD\u7F8E\u89C2\uFF0C\u4F1A\u5C06\u6587\u672C\u663E\u793A\u4E3A\u5177\u6709\u900F\u660E\u5EA6\u7684\u5C0F\u56FE\u50CF\uFF0C\u8BF7\u53C2\u89C1\u4E0B\u6587\u5173\u4E8E\u900F\u660E\u7684\u6CE8\u91CA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65CB\u8F6C\u6216\u7F29\u653E\u540E\u7684\u56FE\u50CF\u6D88\u8017\u66F4\u9AD8\u3002 \u4EFB\u52A1\u540C\u6837\u662F\u4ECE\u4F4D\u56FE\u52A0\u8F7D\u50CF\u7D20\u503C\uFF0C\u4F46\u7531\u4E8E\u56FE\u5F62\u5F15\u64CE\u5FC5\u987B\u5305\u542B\u7F29\u653E\u548C\u65CB\u8F6C\uFF0C\u56E0\u6B64\u8FD9\u65F6\u7684\u8BA1\u7B97\u66F4\u8017\u65F6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51E0\u4F55\u5143\u7D20\uFF08\u5982\u5706\uFF09\u7684\u6D88\u8017\u6BD4\u4E4B\u66F4\u9AD8\u3002 \u8FD9\u65F6\u6211\u4EEC\u4E0D\u80FD\u4ECE\u4F4D\u56FE\u52A0\u8F7D\u50CF\u7D20\u8272\u5F69\uFF0C\u800C\u662F\u5FC5\u987B\u8BA1\u7B97\u5706\u7684\u5F62\u72B6\u548C\u5706\u4E2D\u6BCF\u4E2A\u50CF\u7D20\u7684\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u5EA6\u589E\u52A0\u4E86\u5143\u7D20\u7684\u7ED8\u5236\u6D88\u8017\u3002 \u5982\u679C\u4E00\u4E9B\u50CF\u7D20\u4E0D\u662F\u5B9E\u5FC3\u7684\uFF0C\u90A3\u4E48\u5143\u7D20\u662F\u900F\u660E\u7684\u3002 \u56FE\u5F62\u5F15\u64CE\u9996\u5148\u5FC5\u987B\u7ED8\u5236\u900F\u660E\u5143\u7D20\u540E\u65B9\u7684\u5143\u7D20\uFF08\u5982\u201C\u5E27\u4E2D\u7684\u6587\u672C\u201D\u90E8\u5206\u6240\u8FF0\uFF09\uFF0C\u8FD9\u4F1A\u589E\u52A0\u7ED8\u5236\u7684\u6D88\u8017\u3002 \u5176\u6B21\uFF0C\u56FE\u5F62\u5F15\u64CE\u968F\u540E\u5FC5\u987B\u5C06\u80CC\u666F\u50CF\u7D20\u4E0E\u900F\u660E\u5143\u7D20\u7684\u50CF\u7D20\u8FDB\u884C\u7EC4\u5408\uFF0C\u5E76\u5C06\u7ED3\u679C\u5199\u5165\u5E27\u7F13\u51B2\u3002 \u6B64\u7C7B\u8BA1\u7B97\u7684\u8017\u65F6\u663E\u8457\u591A\u4E8E\u53EA\u5199\u5165\u8BA1\u7B97\u8FC7\u7684\u50CF\u7D20\u7684\u573A\u666F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/box-image-texture-circle.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Box\u3001Image\u3001\u65CB\u8F6CImage\u548C\u5706\u3002 \u5B9E\u5FC3\u5143\u7D20\u4F4D\u4E8E\u7B2C\u4E00\u884C\u3002 \u900F\u660E\u5143\u7D20\u5728\u4E0B\u65B9\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u900F\u660E\u603B\u662F\u9700\u8981\u591A\u51FA\u4E00\u5C42\u3002 \u4F46\u662F\uFF0C\u5C06\u5B9E\u5FC3\u50CF\u7D20\u653E\u5728\u5176\u4ED6\u5B9E\u5FC3\u50CF\u7D20\u7684\u4E0A\u65B9\u5E76\u4E0D\u4E00\u5B9A\u4F1A\u589E\u52A0\u5C42\u6570\u3002 \u56FE\u5F62\u5F15\u64CE\u5C3D\u91CF\u4E0D\u7ED8\u5236\u88AB\u5176\u4ED6\u5B9E\u5FC3\u50CF\u7D20\u8986\u76D6\u7684\u50CF\u7D20\uFF0C\u56E0\u4E3A\u8FD9\u662F\u5728\u6D6A\u8D39\u5B9D\u8D35\u7684\u65F6\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u65E0\u6548\u533A\u57DF\u4E2D\u5143\u7D20\u7684\u590D\u6742\u5EA6\u8D8A\u9AD8\uFF0C\u6E32\u67D3\u65F6\u95F4\u5C31\u8D8A\u957F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BB0\u4F4F\uFF0C\u53EA\u6709\u65E0\u6548\u533A\u57DF\u4E2D\u7684\u5143\u7D20\u624D\u4F1A\u589E\u52A0\u6E32\u67D3\u65F6\u95F4\u3002 \u65E0\u6548\u533A\u57DF\u4E4B\u5916\u7684\u5143\u7D20\u5BF9\u6E32\u67D3\u65F6\u95F4\u65E0\u5F71\u54CD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/general-ui-component-performance"
  }), `\u6B64\u5904`), `\u9605\u8BFB\u5173\u4E8EUI\u7EC4\u4EF6\u548C\u6027\u80FD\u7684\u66F4\u591A\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-rendering"
  }), `\u6E32\u67D3\u7684\u786C\u4EF6\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9BSTM32\u5FAE\u63A7\u5236\u5668\u5305\u542B\u56FE\u5F62\u52A0\u901F\u5668Chrom-ART\uFF08\u6216DMA2D\uFF09\u3002 \u6B64\u52A0\u901F\u5668\u53EF\u7F29\u77ED\u6E32\u67D3\u65F6\u95F4\u3002 \u7531\u4E8E\u52A0\u901F\u5668\u4E0E\u5FAE\u63A7\u5236\u5668\u6838\u5FC3\u5E76\u884C\u8FD0\u884C\uFF0C\u5FAE\u63A7\u5236\u5668\u53EF\u4EE5\u5728\u52A0\u901F\u5668\u6E32\u67D3\u56FE\u5F62\u65F6\u81EA\u7531\u5730\u8FD0\u884C\u5176\u4ED6\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u4E3B\u8981\u7528\u4E8E\u56FE\u50CF\u548C\u6587\u672C\u3002 \u5982\u679C\u6709\uFF0C\u56FE\u5F62\u5F15\u64CE\u4F1A\u81EA\u52A8\u4F7F\u7528\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "when-should-you-consider-rendering-time"
  }), `\u4F55\u65F6\u5E94\u8003\u8651\u6E32\u67D3\u65F6\u95F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E32\u67D3\u65F6\u95F4\u5E76\u975E\u603B\u662F\u90A3\u4E48\u91CD\u8981\u3002 \u5F53\u4F4E\u5E27\u7387\u53EF\u88AB\u7528\u6237\u89C2\u5BDF\u5230\u65F6\uFF0C\u5E94\u6CE8\u610F\u6E32\u67D3\u65F6\u95F4\u3002 \u5F53\u52A8\u753B\u5728\u5C4F\u5E55\u7684\u4E00\u90E8\u5206\u4E0A\u8FD0\u884C\uFF08\u5982\u65CB\u8F6C\u7684\u56FE\u6807\uFF09\u6216\u60A8\u5728\u754C\u9762\u4E0A\u79FB\u52A8\u6216\u6ED1\u52A8\u67D0\u5143\u7D20\u65F6\uFF0C\u901A\u5E38\u5C31\u5C5E\u4E8E\u8FD9\u79CD\u60C5\u51B5\u3002 \u5982\u679C\u66F4\u65B0\u9891\u7387\u4F4E\uFF0C\u90A3\u4E48\u5728\u7528\u6237\u770B\u6765\uFF0C\u52A8\u753B\u5C06\u5448\u73B0\u51FA\u5206\u6B65\u663E\u793A\u800C\u975E\u6D41\u7545\u7684\u72B6\u6001\u3002 \u5982\u679C\u662F\u8FD9\u6837\uFF0C\u5E94\u68C0\u67E5\u6E32\u67D3\u65F6\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u7528\u65B0\u754C\u9762\u66FF\u4EE3\u6574\u4E2A\u754C\u9762\uFF0C\u5F53\u66F4\u6362\u671F\u95F4\u5E27\u7387\u663E\u8457\u4E0B\u964D\u65F6\uFF0C\u7528\u6237\u901A\u5E38\u6CE8\u610F\u4E0D\u5230\u3002 \u8FD9\u662F\u56E0\u4E3A\u7528\u6237\u770B\u4E0D\u5230\u6E32\u67D3\u4F55\u65F6\u5F00\u59CB\uFF0C\u53EA\u80FD\u770B\u5230\u5B83\u4F55\u65F6\u7ED3\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E24\u6761\u89C4\u5219\u610F\u5473\u7740\u5BF9\u4E8E\u52A8\u753B\u5143\u7D20\uFF08\u5982\u79FB\u52A8\u5143\u7D20\uFF09\u800C\u8A00\uFF0C\u5E94\u4F7F\u7528\u8F83\u5C11\u7684\u5C42\u6570\uFF0C\u907F\u514D\u4F7F\u7528\u590D\u6742\u5143\u7D20\u548C\u8BB8\u591A\u5C42\u6570\u3002 \u5BF9\u4E8E\u754C\u9762\u7684\u5176\u4F59\u90E8\u5206\uFF0C\u8FD9\u4E9B\u4E0D\u662F\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/clock-and-scrolllist.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u6A21\u62DF\u65F6\u949F\u548C\u6EDA\u52A8\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u5DE6\u4FA7\u6709\u4E00\u4E2A\u6A21\u62DF\u65F6\u949F\u3002 \u901A\u8FC7\u65CB\u8F6C\u4E09\u5E45\u7EC6\u957F\u7684\u56FE\u50CF\u6E32\u67D3\u4E09\u6839\u6307\u9488\u3002 \u8FD9\u901A\u5E38\u4E0D\u96BE\u5B9E\u73B0\uFF0C\u56E0\u4E3A\u6307\u9488\u5E76\u975E\u603B\u662F\u5728\u79FB\u52A8\u3002 \u4F46\u5982\u679C\u6211\u4EEC\u8981\u8BA9\u65F6\u949F\u5728\u754C\u9762\u4E0A\u5230\u5904\u79FB\u52A8\uFF0C\u5C06\u4F1A\u5728\u6BCF\u4E00\u5E27\u4E2D\u91CD\u7ED8\u6307\u9488\uFF0C\u7531\u4E8E\u7ED8\u5236\u65CB\u8F6C\u56FE\u50CF\u901A\u5E38\u6BD4\u8F83\u8017\u65F6\uFF0C\u56E0\u6B64\u4F1A\u6BD4\u8F83\u590D\u6742\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u4FA7\u662F\u4E00\u4E2A\u6EDA\u52A8\u5217\u8868\u3002 \u7528\u6237\u53EF\u4EE5\u4E0A\u4E0B\u79FB\u52A8\u6B64\u6570\u5B57\u5217\u8868\uFF0C\u4E3A\u4E86\u8BA9\u7528\u6237\u754C\u9762\u663E\u793A\u51FA\u9AD8\u54CD\u5E94\u6027\uFF0C\u9700\u8981\u9AD8\u5E27\u7387\u3002 \u56E0\u6B64\uFF0C\u5FC5\u987B\u8003\u8651\u6EDA\u52A8\u5217\u8868\u4E2D\u5143\u7D20\u7684\u6E32\u67D3\u65F6\u95F4\uFF0C\u6216\u8005\u7F29\u5C0F\u6EDA\u52A8\u5217\u8868\u7684\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
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
  }), `\u83B7\u5F97\u826F\u597D\u6027\u80FD\u7684\u5EFA\u8BAE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u603B\u7ED3\u4E86\u83B7\u5F97\u826F\u597D\u6027\u80FD\u7684\u5EFA\u8BAE\uFF0C\u4EE5\u7ED3\u675F\u672C\u8282\u5185\u5BB9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Do not redraw unchanged things`), ` Make sure that you do not accidentally invalidate unnecessary parts of the display. This reduces the performance without any benefit.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728\u8D28\u91CF\u4E0E\u901F\u5EA6\u4E4B\u95F4\u5BFB\u6C42\u5E73\u8861`), ` \u964D\u4F4E\u5143\u7D20\u7684\u590D\u6742\u5EA6\u6709\u52A9\u4E8E\u63D0\u9AD8\u6027\u80FD\u3002 \u590D\u6742\u5EA6\u4E0E\u6027\u80FD\u4E4B\u95F4\u7684\u826F\u597D\u5E73\u8861\u901A\u5E38\u6781\u4E3A\u5173\u952E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5229\u7528\u786C\u4EF6\u80FD\u529B`), ` \u5177\u6709\u786C\u4EF6\u52A0\u901F\uFF08Chrom-ART\uFF09\u7684\u5FAE\u63A7\u5236\u5668\u7684\u80FD\u529B\u901A\u5E38\u9AD8\u4E8E\u6CA1\u6709\u786C\u4EF6\u52A0\u901F\u7684\u5FAE\u63A7\u5236\u5668\u3002 \u8003\u8651\u4F7F\u7528\u5177\u6709Chrom-ART\u7684\u5FAE\u63A7\u5236\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7528\u56FE\u50CF\u66FF\u4EE3\u8BA1\u7B97\u56FE\u5F62`), ` \u8BA1\u7B97\u5F97\u5230\u7684\u5706\u6BD4\u5706\u56FE\u50CF\u6162\u3002 \u4E00\u822C\u800C\u8A00\uFF0C\u56FE\u50CF\u53EF\u66FF\u4EE3\u8BB8\u591A\u9759\u6001\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8C03\u6574\u663E\u793A\u5668\u5237\u65B0\u7387`), ` \u5982\u672C\u8282\u5F00\u5934\u6240\u8FF0\uFF0C\u5237\u65B0\u7387\u662F\u6E32\u67D3\u65F6\u95F4\u7684\u786C\u6027\u9650\u5236\u3002 \u5982\u679C\u6E32\u67D3\u65F6\u95F4\u8D85\u8FC7\u5237\u65B0\u7387\uFF0C\u5E27\u7387\u5C06\u4E0B\u964D\u3002 \u5982\u679C\u6E32\u67D3\u65F6\u95F4\u53EA\u8D85\u8FC7\u5237\u65B0\u7387\u4E00\u70B9\u70B9\uFF0C\u4E5F\u8BB8\u80FD\u591F\u5C06\u663E\u793A\u5668\u7684\u5237\u65B0\u7387\u964D\u81F3\u598255 Hz\uFF08\u76F8\u5F53\u4E8E18.2 ms\uFF09\u8FD9\u6837\u7684\u6C34\u5E73\uFF0C\u5E76\u7EF4\u6301\u9AD8\u5E27\u7387\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);