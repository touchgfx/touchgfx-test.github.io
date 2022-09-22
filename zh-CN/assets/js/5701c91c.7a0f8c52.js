"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8960],{

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

/***/ 22588:
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
  id: "rendering",
  title: "\u4E3B\u5FAA\u73AF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/rendering",
  "id": "basic-concepts/rendering",
  "title": "\u4E3B\u5FAA\u73AF",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/rendering.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/rendering",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/rendering",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "rendering",
    "title": "\u4E3B\u5FAA\u73AF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u56FE\u5F62\u5F15\u64CE",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/graphics-engine"
  },
  "next": {
    "title": "\u6027\u80FD",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/performance"
  }
};
const assets = {};


const toc = [{
  value: "\u91C7\u96C6",
  id: "collect",
  level: 2
}, {
  value: "\u66F4\u65B0",
  id: "update",
  level: 2
}, {
  value: "\u57FA\u4E8E\u65F6\u95F4\u7684\u66F4\u65B0",
  id: "time-based-updates",
  level: 3
}, {
  value: "\u8BF7\u6C42\u91CD\u7ED8",
  id: "requesting-a-redraw",
  level: 3
}, {
  value: "\u6E32\u67D3",
  id: "render",
  level: 2
}, {
  value: "Wait",
  id: "wait",
  level: 2
}, {
  value: "\u5904\u7406\u5E27\u7F13\u51B2",
  id: "handling-the-framebuffers",
  level: 2
}, {
  value: "\u4E24\u4E2A\u5E27\u7F13\u51B2",
  id: "two-framebuffers",
  level: 3
}, {
  value: "\u4E00\u4E2A\u5E27\u7F13\u51B2",
  id: "one-framebuffer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u8282\u4E2D\uFF0C\u60A8\u5C06\u5B66\u4E60\u66F4\u591A\u5173\u4E8ETouchGFX\u4E2D\u56FE\u5F62\u5F15\u64CE\u7684\u5DE5\u4F5C\u65B9\u5F0F\u7279\u522B\u662F\u4E3B\u5FAA\u73AF\u7684\u5185\u5BB9\u3002 \u56DE\u60F3\u4E00\u4E0B\uFF0C\u56FE\u5F62\u5F15\u64CE\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u5C06\u5E94\u7528\u7684\u56FE\u5F62\uFF08ui\u6A21\u578B\uFF09\u6E32\u67D3\u5230\u5E27\u7F13\u51B2\u3002 \u6B64\u8FC7\u7A0B\u53CD\u590D\u53D1\u751F\uFF0C\u4EE5\u4FBF\u5728\u663E\u793A\u5668\u4E0A\u4EA7\u751F\u65B0\u7684\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u91C7\u96C6`), `\u90E8\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u663E\u793A\u5C4F\u89E6\u6478\u6216\u6309\u94AE\u6309\u4E0B\u4E8B\u4EF6\u3002 \u8FD9\u4E9B\u4E8B\u4EF6\u7ECF\u8FC7\u7B5B\u9009\u540E\u88AB\u8F6C\u53D1\u5230\u5E94\u7528\u3002 \u5E94\u7528\u53EF\u4F7F\u7528\u8FD9\u4E9B\u4E8B\u4EF6\u66F4\u65B0UI\u6A21\u578B\u3002 \u5982 \u5728\u7528\u6237\u89E6\u6478\u5C4F\u5E55\u4E0A\u7684\u6309\u94AE\u65F6\u5C06\u6309\u94AE\u66F4\u6539\u4E3A\u6309\u4E0B\u72B6\u6001\uFF0C\u7136\u540E\u5728\u7528\u6237\u4E0D\u518D\u89E6\u6478\u5C4F\u5E55\u65F6\u5C06\u6309\u94AE\u6539\u56DE\u91CA\u653E\u72B6\u6001\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\uFF0C\u56FE\u5F62\u5F15\u64CE\u5C06\u66F4\u65B0\u540E\u7684\u6A21\u578B\u6E32\u67D3\u5230\u5E27\u7F13\u51B2\u3002 \u6B64\u8FC7\u7A0B\u65E0\u9650\u5FAA\u73AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u5E27\u540E\uFF0C\u5E27\u7F13\u51B2\u88AB\u4F20\u8F93\u5230\u663E\u793A\u5668\uFF0C\u7528\u6237\u53EF\u4ECE\u663E\u793A\u5668\u4E0A\u770B\u5230\u56FE\u5F62\u3002 \u4E3A\u907F\u514D\u663E\u793A\u5668\u4E0A\u7684\u6296\u52A8\u6BDB\u523A\u5E72\u6270\uFF0C\u4F20\u8F93\u8FC7\u7A0B\u5FC5\u987B\u4E0E\u663E\u793A\u5668\u540C\u6B65\u3002 For some displays the transfers must happen regularly with a minimum time interval. \u5BF9\u4E8E\u5176\u4F59\u663E\u793A\u5668\uFF0C\u5FC5\u987B\u5728\u663E\u793A\u5668\u53D1\u51FA\u4FE1\u53F7\u65F6\u8FDB\u884C\u4F20\u8F93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine implements this synchronization by waiting for a "go" signal from the hardware abstraction layer. \u70B9\u51FB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\u6B64\u5904`), `\u9605\u8BFB\u5173\u4E8E\u786C\u4EF6\u62BD\u8C61\u5C42\u7684\u66F4\u591A\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F2A\u4EE3\u7801\u4E2D\uFF0CTouchGFX\u56FE\u5F62\u5F15\u64CE\u5185\u90E8\u7684\u4E3B\u5FAA\u73AF\u5927\u81F4\u662F\u8FD9\u6837\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `while(true) {
    collect();    // Collect events from outside
    update();     // Update the application ui model
    render();     // Render new updated graphics to the framebuffer
    wait();       // Wait for 'go' from display
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE3\u7801\u66F4\u591A\u5730\u6D89\u53CA\u5B9E\u9645\u5B9E\u73B0\uFF0C\u4F46\u4E0A\u8FF0\u4F2A\u4EE3\u7801\u6709\u52A9\u4E8E\u7406\u89E3\u5F15\u64CE\u7684\u4E3B\u8981\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u4EEC\u5C06\u8BE6\u7EC6\u8BA8\u8BBA\u8FD9\u56DB\u4E2A\u9636\u6BB5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "collect"
  }), `\u91C7\u96C6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u9636\u6BB5\uFF0C\u56FE\u5F62\u5F15\u64CE\u4ECE\u5916\u90E8\u73AF\u5883\u91C7\u96C6\u4E8B\u4EF6\u3002 \u8FD9\u4E9B\u4E8B\u4EF6\u901A\u5E38\u662F\u89E6\u6478\u4E8B\u4EF6\u548C\u6309\u94AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5BF9\u4E8B\u4EF6\u8FDB\u884C\u91C7\u96C6\u5E76\u4F20\u9012\u5230\u5E94\u7528\u3002 \u539F\u59CB\u89E6\u6478\u4E8B\u4EF6\u4F1A\u88AB\u8F6C\u6362\u4E3A\u66F4\u5177\u4F53\u7684\u89E6\u6478\u4E8B\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u70B9\u51FB\uFF1A`), `\u7528\u6237\u7528\u624B\u6307\u5728\u5C4F\u5E55\u4E0A\u6309\u4E0B\u6216\u677E\u5F00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u62D6\u66F3\uFF1A`), `\u7528\u6237\u5728\u5C4F\u5E55\u4E0A\u79FB\u52A8\u5176\u624B\u6307\uFF08\u5728\u89E6\u6478\u5C4F\u5E55\u7684\u540C\u65F6\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u624B\u52BF\uFF1A`), `\u7528\u6237\u6CBF\u67D0\u4E2A\u65B9\u5411\u5FEB\u901F\u79FB\u52A8\u5176\u624B\u6307\u7136\u540E\u91CA\u653E\u3002 \u8FD9\u88AB\u79F0\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u6ED1\u52A8`), `\uFF0C\u7531\u56FE\u5F62\u5F15\u64CE\u8BC6\u522B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E8B\u4EF6\u88AB\u8F6C\u53D1\u5230\u5F53\u524D\u6D3B\u52A8\u7684UI\u5143\u7D20\uFF08\u5982\u63A7\u4EF6\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u8FD8\u8F6C\u53D1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tick`), `\u4E8B\u4EF6\u3002 \u6B64\u4E8B\u4EF6\u8868\u793A\u65B0\u7684\u5E27\uFF08\u6216\u65F6\u95F4\u8282\u62CD\uFF09\uFF0C\u4F1A\u4E00\u76F4\u53D1\u9001\uFF0C\u5728\u6CA1\u6709\u5176\u4ED6\u5916\u90E8\u8F93\u5165\u65F6\u4E5F\u4F1A\u53D1\u9001\u3002 This event is used by applications to drive animations, or other time-based actions like changing to a pause screen after a specific time has elapsed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update"
  }), `\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE\u4E0E\u5E94\u7528\u4E00\u8D77\u66F4\u65B0UI\uFF0C\u4EE5\u4FBF\u53CD\u6620\u91C7\u96C6\u7684\u4E8B\u4EF6\u3002 \u56FE\u5F62\u5F15\u64CE\u77E5\u6653\u5F53\u524D\u6D3B\u52A8\u7684\u754C\u9762\uFF0C\u5E76\u5C06\u4E8B\u4EF6\u4F20\u9012\u7ED9\u8BE5\u5BF9\u8C61\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u672C\u539F\u7406\u662F\u5F15\u64CE\u5C06\u4E8B\u4EF6\u901A\u77E5\u5E94\u7528\uFF08\u5373UI\u6A21\u578B\u4E2D\u7684Screen\u548CWidget\u5BF9\u8C61\uFF09\u3002 \u4F5C\u4E3A\u54CD\u5E94\uFF0C\u5E94\u7528\u8BF7\u6C42\u91CD\u7ED8\u754C\u9762\u7684\u7279\u5B9A\u90E8\u5206\u3002 The application does not draw directly as response to the events, it changes the properties of Widgets and requests a redraw of the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If for example a Click event occurs, the graphics engine searches the scene model of the Screen object to find the Widget that should receive the event (the topmost widget below the touch point). Some Widgets like Image and TextArea do not wish to receive Click events, so they are disregarded. They also have an empty event handler.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u4ED6Widget\uFF08\u5982Button\uFF09\u4F1A\u54CD\u5E94Click\u4E8B\u4EF6\uFF08\u6309\u4E0B\u6216\u91CA\u653E\uFF09\u3002 The Button widget, for example, changes its state to show another image when pressed, and changes the state back again when the touch is released again.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-on-image.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "Image\u63A7\u4EF6\u5728\u80CC\u666F\u5C42\uFF0CButton\u63A7\u4EF6\u5728\u9876\u5C42"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53Widget\uFF08\u5982Button\uFF09\u6539\u53D8\u5176\u72B6\u6001\u65F6\uFF0C\u4E5F\u5FC5\u987B\u5728\u5E27\u7F13\u51B2\u4E2D\u91CD\u7ED8\u5B83\u3002 \u4F5C\u4E3A\u5BF9\u4E8B\u4EF6\u7684\u54CD\u5E94\uFF0CWidget\u8D1F\u8D23\u5C06\u6B64\u4FE1\u606F\u4F20\u56DE\u56FE\u5F62\u5F15\u64CE\u3002 The graphics engine does not on its own redraw any Widgets based on the collected events. The Widgets keep track of their own internal state (for a Button, what image to draw), and instruct the graphics engine to redraw the part (a rectangle) of the display that is covered by the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u7528\u672C\u8EAB\u4E5F\u80FD\u5BF9\u4E8B\u4EF6\u505A\u51FA\u54CD\u5E94\u3002 \u901A\u5E38\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4E2D\u7684\u4E00\u79CD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728TouchGFX Designer\u4E2D\u4E3AWidget\u914D\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "strong"
  }, {
    "href": "../development/ui-development/designer-user-guide/interactions-view"
  }), `\u4EA4\u4E92`)), ` \u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u914D\u7F6E\u4EA4\u4E92\uFF0C\u8BA9\u53E6\u4E00\u4E2AWidget\u5728Button\u88AB\u6309\u4E0B\u65F6\u53EF\u89C1\u3002 \u6B64\u4EA4\u4E92\u5728Button\u66F4\u6539\u5176\u72B6\u6001\u5E76\u4ECE\u56FE\u5F62\u5F15\u64CE\u8BF7\u6C42\u91CD\u7ED8\u81EA\u8EAB\u4E4B\u540E\u6267\u884C\u3002 \u5982\u679C\u4F7F\u7528\u6B64\u4EA4\u4E92\u663E\u793A\u53E6\u4E00\u4E2A\uFF08\u4E0D\u53EF\u89C1\uFF09Widget\uFF0C\u5E94\u7528\u8FD8\u5E94\u4ECE\u56FE\u5F62\u5F15\u64CE\u8BF7\u6C42\u91CD\u7ED8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728\u754C\u9762\u4E0A\u54CD\u5E94\u4E8B\u4EF6`), ` \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u754C\u9762\u4E0A\u54CD\u5E94\u4E8B\u4EF6\u3002 The event handlers are virtual functions on the Screen class (see list below). \u8FD9\u4E9B\u51FD\u6570\u53EF\u5728\u5E94\u7528\u7684Screen\u4E2D\u91CD\u590D\u5B9E\u73B0\u3002 This can e.g. be used to perform an action whenever the user touches the screen (no matter where if the touch is on a Widget).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u7C7B\u5177\u6709\u4E0B\u5217\u4E8B\u4EF6\u5904\u7406\u5668\u3002 \u5728\u91C7\u96C6\u5230\u76F8\u5E94\u5916\u90E8\u4E8B\u4EF6\u540E\uFF0C\u56FE\u5F62\u5F15\u64CE\u4F1A\u8C03\u7528\u8FD9\u4E9B\u51FD\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "framework/include/touchgfx/Screen.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
virtual void handleClickEvent(const ClickEvent& event);

virtual void handleDragEvent(const DragEvent& event);

virtual void handleGestureEvent(const GestureEvent& event);

virtual void handleTickEvent();

virtual void handleKeyEvent(uint8_t key);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5728\u8FD9\u4E9B\u4E8B\u4EF6\u5904\u7406\u5668\u4E2D\u63D2\u5165\u4EFB\u4F55C++\u4EE3\u7801\u3002 \u5E94\u7528\u901A\u5E38\u4F1A\u66F4\u65B0\u4E00\u4E9BWidget\u7684\u72B6\u6001\u548C/\u6216\u8C03\u7528\u4E00\u4E9B\u5E94\u7528\u7279\u5B9A\u7684\u51FD\u6570\uFF08\u4E1A\u52A1\u903B\u8F91\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "time-based-updates"
  }), `\u57FA\u4E8E\u65F6\u95F4\u7684\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `handleTickEvent\u4E8B\u4EF6\u5904\u7406\u5668\u5728\u6BCF\u4E00\u5E27\u90FD\u4F1A\u88AB\u8C03\u7528\u3002 \u8FD9\u4F7F\u5F97\u5E94\u7528\u80FD\u591F\u57FA\u4E8E\u65F6\u95F4\u66F4\u65B0\u7528\u6237\u754C\u9762\u3002 \u4F8B\u5982\uFF0C\u572810\u79D2\u540EWidget\u6E10\u9690\u3002 Assuming that we have 60 frames in a second (10 seconds is then 600 ticks), the code could look like:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent()
{
    Screen1ViewBase::handleTickEvent();     // Call superclass eventhandler
    tickCounter += 1;
    if (tickCounter == 600)
    {
        myWidget.startFadeAnimation(0, 20); // Fade to 0 = invisible in 20 frames
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE\u8FD8\u5C06\u8C03\u7528Model\u7C7B\u4E0A\u7684\u4E8B\u4EF6\u5904\u7406\u5668\u3002 \u6B64\u4E8B\u4EF6\u5904\u7406\u5668\u901A\u5E38\u7528\u4E8E\u6267\u884C\u91CD\u590D\u64CD\u4F5C\uFF0C\u5982\u68C0\u67E5\u6D88\u606F\u961F\u5217\u6216\u8FDB\u884CGPIO\u91C7\u6837\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
    bool b = sampleGPIO_Input1(); // Sample polled IO
    if (b)
    {
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The eventhandler on a specific Screen subclass is only called when that screen is the active screen. The eventhandler on the Model class is always called (independently of which Screen is active). This makes the Model eventhandler suitable for "application wide" logic.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "requesting-a-redraw"
  }), `\u8BF7\u6C42\u91CD\u7ED8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B63\u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u4EE5Button\u4E3A\u4F8B\uFF0CWidget\u8D1F\u8D23\u5728\u5176\u72B6\u6001\u6539\u53D8\u65F6\u8BF7\u6C42\u91CD\u7ED8\u3002 \u8FD9\u80CC\u540E\u7684\u673A\u5236\u79F0\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u65E0\u6548\u533A\u57DF`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53Button\u6539\u53D8\u72B6\u6001\uFF08\u5982\u4ECE\u91CA\u653E\u53D8\u4E3A\u6309\u4E0B\uFF09\u5E76\u9700\u8981\u91CD\u7ED8\u65F6\uFF0CButton Widget\u8986\u76D6\u7684\u533A\u57DF\u5373\u4E3A\u65E0\u6548\u533A\u57DF\u3002 \u56FE\u5F62\u5F15\u64CE\u4FDD\u7559\u4E86\u4E3A\u5E27\u8BF7\u6C42\u7684\u8FD9\u4E9B\u65E0\u6548\u533A\u57DF\u7684\u5217\u8868\u3002 \u91C7\u96C6\u7684\u6240\u6709\u4E8B\u4EF6\uFF08\u89E6\u6478\u3001\u6309\u94AE\u548Ctick\uFF09\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E2A\u6216\u591A\u4E2A\u65E0\u6548\u533A\u57DF\uFF0C\u56E0\u6B64\u6BCF\u4E00\u5E27\u53EF\u80FD\u6709\u8BB8\u591A\u4E2A\u65E0\u6548\u533A\u57DF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u7C7B\u4E0A\u7684\u4E8B\u4EF6\u5904\u7406\u5668\u4E5F\u53EF\u4EE5\u8BF7\u6C42\u533A\u57DF\u91CD\u7ED8\u3002 \u4E0B\u9762\u6211\u4EEC\u66F4\u6539\u7B2C10\u5E27\u7684Box\u63A7\u4EF6box1\u7684\u8272\u5F69\uFF0C\u5E76\u901A\u8FC7\u8C03\u7528Box\u4E0A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Invalidate`), `\u65B9\u6CD5\u8BF7\u6C42\u91CD\u7ED8\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent()
{
    Screen1ViewBase::handleTickEvent();                          // Call superclass eventhandler
    tickCounter += 1;
    if (tickCounter == 10)
    {
        box1.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00)); // Set color to red
        box1.invalidate();                                       // Request redraw
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u56FE\u5F62\u5F15\u64CE\u5C06\u5728\u6BCF\u4E00\u5E27\u4E2D\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleTickEvent`), `handler\u3002 \u5728\u7B2C10\u5E27\uFF0C\u5E94\u7528\u4EE3\u7801\u8BF7\u6C42\u91CD\u7ED8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), `\u8986\u76D6\u7684\u533A\u57DF\u3002 \u4F5C\u4E3A\u5BF9\u8BE5\u8BF7\u6C42\u7684\u54CD\u5E94\uFF0C\u56FE\u5F62\u5F15\u64CE\u5C06\u5728\u5E27\u7F13\u51B2\u4E2D\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), `\u63A7\u4EF6\u4E2D\u4FDD\u5B58\u7684\u8272\u5F69\u91CD\u7ED8\u8BE5\u533A\u57DF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u7528\u6237\u754C\u9762\u4E2D\uFF0C\u80CC\u666F\u56FE\u50CF\u4E0A\u65B9\u6709\u4E00\u4E2AButton Widget\u548C\u4E00\u4E2ABox Widget\u3002 \u5982\u679C\u6211\u4EEC\u5728Button\u4E0A\u63D2\u5165\u4E00\u4E2A\u4EA4\u4E92\uFF0C\u4EE5\u4FBF\u5728Button\u88AB\u70B9\u51FB\u65F6\u66F4\u6539Box\u7684\u8272\u5F69\uFF0C\u90A3\u4E48\u5F53\u7528\u6237\u70B9\u51FBButton\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u4E24\u4E2A\u65E0\u6548\u533A\u57DF\uFF08\u7528\u7EA2\u8272\u8868\u793A\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-and-box.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\u4E24\u4E2A\u65E0\u6548\u533A\u57DF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u83B7\u5F97\u5E27\u7F13\u51B2\u4E2D\u7ED8\u5236\u7684\u65B0\u8272\u5F69\uFF0C\u9700\u8981\u5148\u5C06Box\u7684\u533A\u57DF\u65E0\u6548\u5316\u3002 \u4E3A\u4E86\u91CD\u65B0\u7ED8\u5236\u91CA\u653E\u72B6\u6001\uFF0CButton\u8FD8\u5C06\u81EA\u8EAB\u65E0\u6548\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "render"
  }), `\u6E32\u67D3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u6587\u6240\u8FF0\uFF0C\u66F4\u65B0\u9636\u6BB5\u7684\u7ED3\u679C\u662F\u5F85\u91CD\u7ED8\u533A\u57DF\uFF08\u65E0\u6548\u533A\u57DF\uFF09\u7684\u5217\u8868\u3002 \u6E32\u67D3\u9636\u6BB5\u7684\u4EFB\u52A1\u5B9E\u9645\u4E0A\u662F\u904D\u5386\u6B64\u5217\u8868\uFF0C\u5E76\u5C06\u8986\u76D6\u8FD9\u4E9B\u533A\u57DF\u7684Widget\u7ED8\u5236\u5230\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u9636\u6BB5\u7531\u56FE\u5F62\u5F15\u64CE\u81EA\u52A8\u5904\u7406\u3002 \u5E94\u7528\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u573A\u666F\u6A21\u578B\uFF08ui\u4E2D\u7684Widget\uFF09\u5E76\u4F7F\u4E00\u4E9B\u533A\u57DF\u65E0\u6548\u5316\u3002 \u5176\u4F59\u7684\u5DE5\u4F5C\u7531\u5F15\u64CE\u6765\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE\u9010\u4E00\u5904\u7406\u65E0\u6548\u533A\u57DF\u3002 \u5F15\u64CE\u626B\u63CF\u6BCF\u4E2A\u533A\u57DF\u7684\u573A\u666F\u6A21\u578B\uFF0C\u5E76\u91C7\u96C6\u533A\u57DF\u8986\u76D6\uFF08\u90E8\u5206\u6216\u5168\u90E8\uFF09\u7684Widget\u7684\u5217\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u6B64Widget\u5217\u8868\uFF0C\u56FE\u5F62\u5F15\u64CE\u8C03\u7528Widget\u4E0A\u7684\u7ED8\u5236\u65B9\u6CD5\u3002 \u4ECE\u80CC\u666F\u5C42\u4E2D\u7684Widget\u5F00\u59CB\uFF0C\u5230\u6700\u524D\u9762\u7684Widget\u7ED3\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7ED8\u5236\u5230\u5E27\u7F13\u51B2\u65F6\uFF0CWidget\u7684\u7ED8\u5236\u65B9\u6CD5\u4F1A\u7528\u5230Widget\u7684\u72B6\u6001\uFF08\u5982\u8272\u5F69\uFF09\u3002 \u5728\u66F4\u65B0\u9636\u6BB5\uFF0C\u7ED8\u5236Widget\u6240\u9700\u7684\u4EFB\u4F55\u4FE1\u606F\u90FD\u5FC5\u987B\u4FDD\u5B58\u5230Widget\u3002 \u5426\u5219\uFF0C\u5728\u6E32\u67D3\u9636\u6BB5\u5C06\u65E0\u6CD5\u83B7\u53D6\u6B64\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wait"
  }), `Wait`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u56FE\u5F62\u5F15\u64CE\u5728\u66F4\u65B0\u548C\u6E32\u67D3\u4E0B\u4E00\u5E27\u4E4B\u524D\u7B49\u5F85\u4E00\u4E2A\u4FE1\u53F7\u3002 \u4E4B\u6240\u4EE5\u5728\u5E27\u4E4B\u95F4\u7B49\u5F85\u800C\u4E0D\u662F\u5C3D\u5FEB\u5730\u7EE7\u7EED\u6E32\u67D3\u5E27\uFF0C\u539F\u56E0\u6709\u4E24\u4E2A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6E32\u67D3\u4E0E\u663E\u793A\u5668\u540C\u6B65\u3002 \u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u4E00\u4E9B\u663E\u793A\u5668\u9700\u8981\u53CD\u590D\u53D1\u9001\u5E27\u7F13\u51B2\u3002 While this transmission is ongoing, it is not advisable to render arbitrarily to the framebuffer. \u56E0\u6B64\uFF0C\u56FE\u5F62\u5F15\u64CE\u4F1A\u5728\u53D1\u9001\u5F00\u59CB\u540E\u7B49\u5F85\u4E00\u5C0F\u6BB5\u65F6\u95F4\uFF0C\u7136\u540E\u518D\u5F00\u59CB\u6E32\u67D3\u3002 \u5728\u5E94\u53D1\u9001\u5E27\u7F13\u51B2\u65F6\uFF0C\u5176\u4ED6\u663E\u793A\u5668\u5411\u5FAE\u63A7\u5236\u5668\u53D1\u9001\u4FE1\u53F7\u3002 \u56FE\u5F62\u5F15\u64CE\u7B49\u5F85\u8BE5\u4FE1\u53F7\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6309\u56FA\u5B9A\u901F\u7387\u6E32\u67D3\u5E27\u3002 \u5BF9\u4E8E\u5E94\u7528\u800C\u8A00\uFF0C\u6309\u56FA\u5B9A\u901F\u7387\u6E32\u67D3\u5E27\u7684\u597D\u5904\u662F\u66F4\u5BB9\u6613\u521B\u5EFA\u6301\u7EED\u7279\u5B9A\u65F6\u95F4\u7684\u52A8\u753B\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u663E\u793A\u5668\u9891\u7387\u4E3A60 Hz\uFF0C\u5219\u5E94\u5C06\u4E24\u79D2\u949F\u7684\u52A8\u753B\u8BBE\u5B9A\u4E3A\u5728120\u5E27\u5185\u5B8C\u6210\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE\u7684\u7B49\u5F85\u65F6\u95F4\u901A\u5E38\u88AB\u5E94\u7528\u4E2D\u5176\u4ED6\u4F18\u5148\u7EA7\u8F83\u4F4E\u7684\u8FDB\u7A0B\u5229\u7528\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u65F6\u95F4\u4E0D\u4F1A\u88AB\u6D6A\u8D39\uFF0C\u4F18\u5148\u7EA7\u8F83\u4F4E\u7684\u8FDB\u7A0B\u53CD\u6B63\u90FD\u5E94\u5728\u67D0\u4E9B\u65F6\u95F4\u70B9\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handling-the-framebuffers"
  }), `\u5904\u7406\u5E27\u7F13\u51B2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u6587\u6240\u8FF0\uFF0C\u56FE\u5F62\u5F15\u64CE\u4F1A\u5728\u66F4\u65B0\u5E27\u7F13\u51B2\u4E4B\u524D\u4E0E\u663E\u793A\u5668\u540C\u6B65\u3002 \u5728\u6E32\u67D3\u5230\u5E27\u7F13\u51B2\u540E\uFF0C\u5F15\u64CE\u8FD8\u9700\u786E\u4FDD\u663E\u793A\u5668\u663E\u793A\u66F4\u65B0\u540E\u7684\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "two-framebuffers"
  }), `\u4E24\u4E2A\u5E27\u7F13\u51B2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6700\u7B80\u5355\u7684\u8BBE\u7F6E\u4E2D\uFF0C\u6709\u4E24\u4E2A\u5E27\u7F13\u51B2\u53EF\u4F9B\u4F7F\u7528\u3002 \u56FE\u5F62\u5F15\u64CE\u5728\u4E24\u4E2A\u5E27\u7F13\u51B2\u4E4B\u95F4\u5207\u6362\u3002 \u5728\u5C06\u5E27\u7ED8\u5236\u5230\u4E00\u4E2A\u5E27\u7F13\u51B2\u7684\u540C\u65F6\uFF0C\u5C06\u53E6\u4E00\u4E2A\u5E27\u7F13\u51B2\u4F20\u8F93\u5230\uFF08\u5E76\u663E\u793A\u5728\uFF09\u663E\u793A\u5668\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u53CC\u5E27\u7F13\u51B2"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6B64\u6B21\u7ED8\u5236\u4E2D\uFF0C\u5047\u8BBE\u5E76\u884CRGB\u663E\u793A\u5668\u8FDE\u63A5\u4E86LTDC\u63A7\u5236\u5668\u3002 \u8FD9\u610F\u5473\u7740\u5728\u6BCF\u4E00\u5E27\u4E2D\u90FD\u5FC5\u987B\u5C06\u5E27\u7F13\u51B2\u53D1\u9001\u5230\u663E\u793A\u5668\u3002 \u7531\u4E8E\u6709\u4E24\u4E2A\u5E27\u7F13\u51B2\uFF0C\u56FE\u5F62\u5F15\u64CE\u53EF\u4EE5\u5728\u53D1\u9001\u4E00\u4E2A\u5E27\u7F13\u51B2\u7684\u540C\u65F6\u5C06\u5E27\u7ED8\u5236\u5230\u53E6\u4E00\u4E2A\u5E27\u7F13\u51B2\u3002 \u6B64\u65B9\u6848\u6548\u679C\u5F88\u597D\uFF0C\u5982\u53EF\u80FD\uFF0C\u5E94\u4F5C\u4E3A\u9996\u9009\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u56FE\u5F62\u5F15\u64CE\u5728\u6BCF\u4E00\u5E27\u90FD\u8FDB\u884C\u7ED8\u5236\uFF0C\u5728\u4E0A\u9762\u7684\u7ED8\u5236\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u5728\u6240\u6709\u5E27\u53D1\u9001\u65B0\u7684\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E38\u5E38\u4F1A\u6709\u5E94\u7528\u4E0D\u66F4\u65B0\u5E27\u4EFB\u4F55\u5185\u5BB9\u7684\u60C5\u51B5\u3002 \u8FD9\u8868\u793A\u4E0D\u8FDB\u884C\u4EFB\u4F55\u6E32\u67D3\u3002 \u56E0\u6B64\uFF0C\u5728\u4E0B\u4E00\u5E27\u4F1A\u518D\u6B21\u53D1\u9001\u76F8\u540C\u7684\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-no-update.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "2\u53F7\u5E27\u4E2D\u65E0\u66F4\u65B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u7528\u57282\u53F7\u5E27\u672A\u7ED8\u5236\u4EFB\u4F55\u5185\u5BB9\uFF0C\u56E0\u6B64\u56FE\u5F62\u5F15\u64CE\u57283\u53F7\u5E27\u518D\u6B21\u91CD\u53D12\u53F7\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5178\u578B\u7684\u5E76\u884CRGB\u663E\u793A\u5668\u7684\u5237\u65B0\u7387\u7EA6\u4E3A60 Hz\u3002 This update frequency must be maintained by the microcontroller. \u6B64\u66F4\u65B0\u9891\u7387\u610F\u5473\u7740\u5728\u518D\u6B21\u5F00\u59CB\u53D1\u9001\u524D\uFF0C\u670916 ms\u7684\u65F6\u95F4\u53EF\u7528\u6765\u6E32\u67D3\u65B0\u5E27\u3002 \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6E32\u67D3\u65B0\u5E27\u7684\u65F6\u95F4\u8D85\u8FC716 ms\u3002 \u6B64\u65F6\uFF0C\u56FE\u5F62\u5F15\u64CE\u53EA\u518D\u6B21\u91CD\u53D1\u76F8\u540C\u7684\u5E27\uFF08\u540C\u4E4B\u524D\u4E00\u6837\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u6E32\u67D3\u65F6\u95F4\u957F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u53F7\u5E27\u7684\u6E32\u67D3\u65F6\u95F4\u8D85\u8FC716 ms\uFF0C\u56E0\u6B64\u91CD\u53D1\u4E4B\u524D\u6E32\u67D3\u52301\u53F7\u5E27\u7F13\u51B2\u76840\u53F7\u5E27\u3002 \u57283\u53F7\u5E27\u53D1\u90012\u53F7\u5E27\u7F13\u51B2\u4E2D\u7684\u65B0\u5E27\u3002 \u5F53\u6709\u4E24\u4E2A\u5E27\u7F13\u51B2\u53EF\u4F9B\u4F7F\u7528\u65F6\uFF0C\u6E32\u67D3\u65F6\u95F4\u53EF\u80FD\u4F1A\u975E\u5E38\u957F\u3002 \u5728\u6709\u65B0\u5E27\u53EF\u7528\u4E4B\u524D\uFF0C\u4F1A\u4E00\u76F4\u91CD\u53D1\u4E0A\u4E00\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `\u4E00\u4E2A\u5E27\u7F13\u51B2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u7CFB\u7EDF\u4E2D\uFF0C\u7531\u4E8E\u5B58\u50A8\u7A7A\u95F4\u7684\u9650\u5236\uFF0C\u53EA\u80FD\u4F7F\u75281\u4E2A\u5E27\u7F13\u51B2\u3002 \u5982\u679C\u4F7F\u7528\u5E76\u884CRGB\u663E\u793A\u5668\uFF0C\u5219\u5FC5\u987B\u5728\u6BCF\u4E00\u5E27\u53D1\u90011\u53F7\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u56FE\u5F62\u5F15\u64CE\u4E0D\u5F97\u4E0D\u5728\u5411\u663E\u793A\u5668\u53D1\u9001\u5E27\u7F13\u51B2\u7684\u540C\u65F6\u5C06\u5E27\u7ED8\u5236\u5230\u540C\u4E00\u4E2A\u5E27\u7F13\u51B2\uFF0C\u56E0\u6B64\u4F1A\u4EA7\u751F\u95EE\u9898\u3002 \u5982\u679C\u4E0D\u52A0\u6CE8\u610F\u5C31\u8FD9\u6837\u505A\uFF0C\u4F1A\u6709\u4E00\u4E2A\u6781\u5927\u7684\u98CE\u9669\uFF0C\u5373\u663E\u793A\u5668\u4F1A\u663E\u793A\u4E0A\u4E00\u5E27\u4E0E\u65B0\u5E27\u7684\u6DF7\u5408\u5E27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `One solution is to hold back the drawing until the transfer is complete and only draw in the time-slot before the transfer starts again. \u7531\u4E8E\u4F20\u8F93\u5360\u7528\u4E86\u6574\u4E2A\u5E27\u65F6\u95F4\u7684\u5F88\u5927\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\u53EF\u7528\u4E8E\u7ED8\u5236\u5E27\u7684\u65F6\u95F4\u6781\u5C11\u3002 \u53E6\u4E00\u4E2A\u7F3A\u70B9\u662F\u5982\u679C\u5728\u4E0B\u4E00\u6B21\u4F20\u8F93\u5F00\u59CB\u65F6\u7ED8\u5236\u672A\u5B8C\u6210\uFF0C\u5219\u4ECD\u53EF\u80FD\u51FA\u73B0\u4E0D\u5B8C\u6574\u7684\u5E27\uFF08\u6495\u88C2\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u79CD\u66F4\u6709\u6F5C\u529B\u7684\u89E3\u51B3\u65B9\u6848\u662F\u76D1\u6D4B\u5E27\u7F13\u51B2\u5DF2\u53D1\u9001\u7684\u91CF\uFF0C\u7136\u540E\u5C06\u6E32\u67D3\u9650\u5236\u5728\u5E27\u7F13\u51B2\u7684\u5408\u9002\u90E8\u5206\u3002 \u867D\u7136\u4F20\u8F93\u7684\u8FDB\u884C\uFF0C\u5E27\u7F13\u51B2\u6709\u8D8A\u6765\u8D8A\u591A\u7684\u90E8\u5206\u53EF\u4F9B\u6E32\u67D3\u7B97\u6CD5\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE\u5305\u542B\u5E2E\u52A9\u7A0B\u5E8F\u5458\u786E\u4FDD\u7ED8\u5236\u6B63\u786E\u6267\u884C\u7684\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u7528\u5728\u6BCF\u4E00\u5E27\u66F4\u65B0\u5E76\u6E32\u67D3\u5E27\u7F13\u51B2\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5728\u6BCF\u4E00\u5E27\u91CD\u53D1\u4E00\u4E2A\u5E27\u7F13\u51B2"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5E27\u6CA1\u6709\u66F4\u65B0\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5219\u91CD\u53D1\u5E27\u7F13\u51B2\uFF0C\u4E0D\u505A\u4EFB\u4F55\u66F4\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u6E32\u67D3\u65F6\u95F4\u8D85\u8FC716 ms\uFF0C\u5F53\u518D\u6B21\u5F00\u59CB\u91CD\u53D1\u65F6\uFF0C\u6E32\u67D3\u5C1A\u672A\u7ED3\u675F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u6E32\u67D3\u65F6\u95F4\u957F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u56FE\u5F62\u5F15\u64CE\u5FC5\u987B\u786E\u4FDD\u6B63\u5728\u53D1\u9001\u7684\u90E8\u5206\u5DF2\u5B8C\u6210\u6E32\u67D3\u3002 \u5426\u5219\uFF0C\u663E\u793A\u5668\u5C06\u663E\u793A\u672A\u5B8C\u6210\u7684\u5E27\u7F13\u51B2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u5404\u4E2AWidget\u7684\u6E32\u67D3\u65F6\u95F4\u3002 \u8FD9\u5C06\u6709\u52A9\u4E8E\u7A0B\u5E8F\u5458\u7F16\u5199\u51FA\u9AD8\u6027\u80FD\u7684\u5E94\u7528\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);