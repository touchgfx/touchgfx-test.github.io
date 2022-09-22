"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5372],{

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

/***/ 55225:
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
  title: "\u4E3B\u8FF4\u5708"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/rendering",
  "id": "basic-concepts/rendering",
  "title": "\u4E3B\u8FF4\u5708",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/rendering.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/rendering",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/rendering",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "rendering",
    "title": "\u4E3B\u8FF4\u5708"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5716\u5F62\u5F15\u64CE",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/graphics-engine"
  },
  "next": {
    "title": "\u6027\u80FD",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/performance"
  }
};
const assets = {};


const toc = [{
  value: "\u63A1\u96C6",
  id: "collect",
  level: 2
}, {
  value: "\u66F4\u65B0",
  id: "update",
  level: 2
}, {
  value: "\u57FA\u65BC\u6642\u9593\u7684\u66F4\u65B0",
  id: "time-based-updates",
  level: 3
}, {
  value: "\u8ACB\u6C42\u91CD\u7E6A",
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
  value: "\u8655\u7406\u5F71\u50CF\u7DE9\u885D",
  id: "handling-the-framebuffers",
  level: 2
}, {
  value: "\u5169\u500B\u5F71\u50CF\u7DE9\u885D",
  id: "two-framebuffers",
  level: 3
}, {
  value: "\u4E00\u500B\u5F71\u50CF\u7DE9\u885D",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u7BC0\u4E2D\uFF0C\u60A8\u5C07\u5B78\u7FD2\u66F4\u591A\u95DC\u65BCTouchGFX\u4E2D\u5716\u5F62\u5F15\u64CE\u7684\u5DE5\u4F5C\u65B9\u5F0F\u7279\u5225\u662F\u4E3B\u8FF4\u5708\u7684\u5167\u5BB9\u3002 \u56DE\u60F3\u4E00\u4E0B\uFF0C\u5716\u5F62\u5F15\u64CE\u7684\u4E3B\u8981\u4EFB\u52D9\u662F\u5C07\u61C9\u7528\u7684\u5716\u5F62\uFF08ui\u6A21\u578B\uFF09\u6E32\u67D3\u5230\u5F71\u50CF\u7DE9\u885D\u3002 \u6B64\u904E\u7A0B\u53CD\u5FA9\u767C\u751F\uFF0C\u4EE5\u4FBF\u5728\u986F\u793A\u5668\u4E0A\u7522\u751F\u65B0\u7684\u5F71\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u63A1\u96C6`), `\u5916\u90E8\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u986F\u793A\u5668\u89F8\u6478\u6216\u6309\u9215\u6309\u4E0B\u4E8B\u4EF6\u3002 \u9019\u4E9B\u4E8B\u4EF6\u7D93\u904E\u7BE9\u9078\u5F8C\u88AB\u50B3\u905E\u5230\u61C9\u7528\u3002 \u61C9\u7528\u53EF\u4F7F\u7528\u9019\u4E9B\u4E8B\u4EF6\u66F4\u65B0UI\u6A21\u578B\u3002 \u4F8B\u5982 \u5728\u4F7F\u7528\u8005\u89F8\u63A7\u87A2\u5E55\u4E0A\u7684\u6309\u9215\u6642\u5C07\u6309\u9215\u72C0\u614B\u66F4\u6539\u70BA\u6309\u4E0B\u72C0\u614B\uFF0C\u7136\u5F8C\u5728\u4F7F\u7528\u8005\u4E0D\u518D\u89F8\u63A7\u87A2\u5E55\u6642\u5C07\u6309\u9215\u72C0\u614B\u6539\u56DE\u91CB\u653E\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\uFF0C\u5716\u5F62\u5F15\u64CE\u5C07\u66F4\u65B0\u5F8C\u7684\u6A21\u578B\u6E32\u67D3\u5230\u5F71\u50CF\u7DE9\u885D\u3002 \u6B64\u904E\u7A0B\u7121\u9650\u8F2A\u8FF4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u5F71\u50CF\u5F8C\uFF0C\u5F71\u50CF\u7DE9\u885D\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u7528\u6236\u53EF\u5F9E\u986F\u793A\u5668\u4E0A\u770B\u5230\u5716\u5F62\u3002 \u70BA\u907F\u514D\u986F\u793A\u5668\u4E0A\u7684\u77ED\u6642\u8108\u885D\u6CE2\u5E72\u64FE\uFF0C\u50B3\u8F38\u904E\u7A0B\u5FC5\u9808\u8207\u986F\u793A\u5668\u540C\u6B65\u3002 For some displays the transfers must happen regularly with a minimum time interval. \u5C0D\u65BC\u5176\u9918\u986F\u793A\u5668\uFF0C\u5FC5\u9808\u5728\u986F\u793A\u5668\u767C\u51FA\u4FE1\u865F\u6642\u9032\u884C\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine implements this synchronization by waiting for a "go" signal from the hardware abstraction layer. \u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\u6B64`), `\u8655\u95B1\u8B80\u95DC\u65BC\u786C\u9AD4\u62BD\u8C61\u5C64\u7684\u66F4\u591A\u5167\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7A0B\u5F0F\u78BC\u4E2D\uFF0CTouchGFX\u5716\u5F62\u5F15\u64CE\u5167\u90E8\u7684\u4E3B\u8FF4\u5708\u5927\u81F4\u662F\u9019\u6A23\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `while(true) {
    collect();    // Collect events from outside
    update();     // Update the application ui model
    render();     // Render new updated graphics to the framebuffer
    wait();       // Wait for 'go' from display
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7A0B\u5F0F\u78BC\u66F4\u591A\u5730\u6D89\u53CA\u5BE6\u969B\u5BE6\u73FE\uFF0C\u4F46\u4E0A\u8FF0\u7A0B\u5F0F\u78BC\u6709\u52A9\u65BC\u7406\u89E3\u5F15\u64CE\u7684\u4E3B\u8981\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u5011\u5C07\u8A73\u7D30\u8A0E\u8AD6\u9019\u56DB\u500B\u968E\u6BB5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "collect"
  }), `\u63A1\u96C6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u968E\u6BB5\uFF0C\u5716\u5F62\u5F15\u64CE\u5F9E\u5916\u90E8\u74B0\u5883\u63A1\u96C6\u4E8B\u4EF6\u3002 \u9019\u4E9B\u4E8B\u4EF6\u901A\u5E38\u662F\u89F8\u6478\u4E8B\u4EF6\u548C\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5C0D\u4E8B\u4EF6\u9032\u884C\u63A1\u6A23\u4E26\u50B3\u905E\u5230\u61C9\u7528\u3002 \u539F\u59CB\u89F8\u6478\u4E8B\u4EF6\u6703\u88AB\u8F49\u63DB\u70BA\u66F4\u5177\u9AD4\u7684\u89F8\u6478\u4E8B\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9EDE\u64CA\uFF1A`), `\u4F7F\u7528\u8005\u7528\u624B\u6307\u5728\u87A2\u5E55\u4E0A\u6309\u4E0B\u6216\u9B06\u958B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u62D6\u66F3\uFF1A`), `\u4F7F\u7528\u8005\u5728\u87A2\u5E55\u4E0A\u79FB\u52D5\u5176\u624B\u6307\uFF08\u5728\u89F8\u63A7\u5F0F\u87A2\u5E55\u7684\u540C\u6642\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u624B\u52E2\uFF1A`), `\u7528\u6236\u6CBF\u67D0\u500B\u65B9\u5411\u5FEB\u901F\u79FB\u52D5\u5176\u624B\u6307\u7136\u5F8C\u91CB\u653E\u3002 \u9019\u88AB\u7A31\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u6ED1\u52D5`), `\uFF0C\u7531\u5716\u5F62\u5F15\u64CE\u8B58\u5225\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E8B\u4EF6\u88AB\u50B3\u905E\u5230\u7576\u524D\u6D3B\u52D5\u7684UI\u5143\u7D20\uFF08\u5982\u5C0F\u5DE5\u5177\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u9084\u50B3\u905E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tick`), `\u4E8B\u4EF6\u3002 \u6B64\u4E8B\u4EF6\u8868\u793A\u65B0\u7684\u5E40\uFF08\u6216\u6642\u9593\u7BC0\u62CD\uFF09\uFF0C\u6703\u4E00\u76F4\u767C\u9001\uFF0C\u5728\u6C92\u6709\u5176\u4ED6\u5916\u90E8\u8F38\u5165\u6642\u4E5F\u6703\u767C\u9001\u3002 This event is used by applications to drive animations, or other time-based actions like changing to a pause screen after a specific time has elapsed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update"
  }), `\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u8207\u61C9\u7528\u4E00\u8D77\u66F4\u65B0UI\uFF0C\u4EE5\u4FBF\u53CD\u6620\u63A1\u96C6\u7684\u4E8B\u4EF6\u3002 \u5716\u5F62\u5F15\u64CE\u77E5\u66C9\u7576\u524D\u6D3B\u52D5\u7684\u4ECB\u9762\uFF0C\u4E26\u5C07\u4E8B\u4EF6\u50B3\u905E\u7D66\u8A72\u7269\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u672C\u539F\u7406\u662F\u5F15\u64CE\u5C07\u4E8B\u4EF6\u901A\u77E5\u7D66\u61C9\u7528\uFF08\u5373UI\u6A21\u578B\u4E2D\u7684Screen\u548CWidget\u7269\u4EF6\uFF09\u3002 \u4F5C\u70BA\u56DE\u61C9\uFF0C\u61C9\u7528\u8ACB\u6C42\u91CD\u7E6A\u4ECB\u9762\u7684\u7279\u5B9A\u90E8\u5206\u3002 The application does not draw directly as response to the events, it changes the properties of Widgets and requests a redraw of the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If for example a Click event occurs, the graphics engine searches the scene model of the Screen object to find the Widget that should receive the event (the topmost widget below the touch point). Some Widgets like Image and TextArea do not wish to receive Click events, so they are disregarded. They also have an empty event handler.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u4ED6Widget\uFF08\u5982Button\uFF09\u6703\u56DE\u61C9Click\u4E8B\u4EF6\uFF08\u6309\u4E0B\u6216\u91CB\u653E\uFF09\u3002 The Button widget, for example, changes its state to show another image when pressed, and changes the state back again when the touch is released again.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-on-image.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\u80CC\u666F\u4E2D\u524D\u65B9\u6709Button\u5C0F\u5DE5\u5177\u7684Image\u5C0F\u5DE5\u5177"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576Widget\uFF08\u5982Button\uFF09\u6539\u8B8A\u5176\u72C0\u614B\u6642\uFF0C\u4E5F\u5FC5\u9808\u5728\u5F71\u50CF\u7DE9\u885D\u4E2D\u91CD\u7E6A\u5B83\u3002 \u4F5C\u70BA\u5C0D\u4E8B\u4EF6\u7684\u56DE\u61C9\uFF0CWidget\u8CA0\u8CAC\u5C07\u6B64\u8CC7\u8A0A\u50B3\u56DE\u5716\u5F62\u5F15\u64CE\u3002 The graphics engine does not on its own redraw any Widgets based on the collected events. The Widgets keep track of their own internal state (for a Button, what image to draw), and instruct the graphics engine to redraw the part (a rectangle) of the display that is covered by the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u672C\u8EAB\u4E5F\u80FD\u5C0D\u4E8B\u4EF6\u505A\u51FA\u56DE\u61C9\u3002 \u901A\u5E38\u4F7F\u7528\u4EE5\u4E0B\u5169\u7A2E\u65B9\u5F0F\u4E2D\u7684\u4E00\u7A2E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728TouchGFX Designer\u4E2D\u70BAWidget\u914D\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "strong"
  }, {
    "href": "../development/ui-development/designer-user-guide/interactions-view"
  }), `\u4EA4\u4E92`)), ` \u4F8B\u5982\uFF0C\u6211\u5011\u53EF\u4EE5\u914D\u7F6E\u4EA4\u4E92\uFF0C\u8B93\u53E6\u4E00\u500BWidget\u5728Button\u88AB\u6309\u4E0B\u6642\u53EF\u898B\u3002 \u6B64\u4EA4\u4E92\u5728Button\u66F4\u6539\u5176\u72C0\u614B\u4E26\u5F9E\u5716\u5F62\u5F15\u64CE\u8ACB\u6C42\u91CD\u7E6A\u81EA\u8EAB\u4E4B\u5F8C\u57F7\u884C\u3002 \u5982\u679C\u4F7F\u7528\u6B64\u4EA4\u4E92\u986F\u793A\u53E6\u4E00\u500B\uFF08\u4E0D\u53EF\u898B\uFF09Widget\uFF0C\u61C9\u7528\u9084\u61C9\u5F9E\u5716\u5F62\u5F15\u64CE\u8ACB\u6C42\u91CD\u7E6A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728\u4ECB\u9762\u4E0A\u56DE\u61C9\u4E8B\u4EF6`), ` \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u4ECB\u9762\u4E0A\u56DE\u61C9\u4E8B\u4EF6\u3002 The event handlers are virtual functions on the Screen class (see list below). \u9019\u4E9B\u51FD\u6578\u53EF\u5728\u61C9\u7528\u7684Screen\u4E2D\u91CD\u8907\u5BE6\u73FE\u3002 This can e.g. be used to perform an action whenever the user touches the screen (no matter where if the touch is on a Widget).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u985E\u5177\u6709\u4E0B\u5217\u4E8B\u4EF6\u8655\u7406\u5668\u3002 \u5728\u63A1\u96C6\u5230\u76F8\u61C9\u5916\u90E8\u4E8B\u4EF6\u5F8C\uFF0C\u5716\u5F62\u5F15\u64CE\u6703\u547C\u53EB\u9019\u4E9B\u51FD\u6578\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5728\u9019\u4E9B\u4E8B\u4EF6\u8655\u7406\u5668\u4E2D\u63D2\u5165\u4EFB\u4F55C++\u7A0B\u5F0F\u78BC\u3002 \u61C9\u7528\u901A\u5E38\u6703\u66F4\u65B0\u4E00\u4E9BWidget\u7684\u72C0\u614B\u548C/\u6216\u547C\u53EB\u4E00\u4E9B\u61C9\u7528\u7279\u5B9A\u7684\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "time-based-updates"
  }), `\u57FA\u65BC\u6642\u9593\u7684\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `handleTickEvent\u4E8B\u4EF6\u8655\u7406\u5668\u5728\u6BCF\u4E00\u5E40\u90FD\u6703\u88AB\u547C\u53EB\u3002 \u9019\u4F7F\u5F97\u61C9\u7528\u80FD\u5920\u57FA\u65BC\u6642\u9593\u66F4\u65B0\u4F7F\u7528\u8005\u4ECB\u9762\u3002 \u4F8B\u5982\uFF0C\u572810\u79D2\u5F8CWidget\u6F38\u96B1\u3002 Assuming that we have 60 frames in a second (10 seconds is then 600 ticks), the code could look like:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u9084\u5C07\u547C\u53EBModel\u985E\u4E0A\u7684\u4E8B\u4EF6\u8655\u7406\u5668\u3002 \u6B64\u4E8B\u4EF6\u8655\u7406\u5668\u901A\u5E38\u7528\u65BC\u57F7\u884C\u91CD\u8907\u64CD\u4F5C\uFF0C\u5982\u6AA2\u67E5\u8A0A\u606F\u4F47\u5217\u6216\u9032\u884CGPIO\u63A1\u6A23\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `\u8ACB\u6C42\u91CD\u7E6A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B63\u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u4EE5Button\u70BA\u4F8B\uFF0CWidget\u8CA0\u8CAC\u5728\u5176\u72C0\u614B\u6539\u8B8A\u6642\u8ACB\u6C42\u91CD\u7E6A\u3002 \u9019\u80CC\u5F8C\u7684\u6A5F\u5236\u7A31\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7121\u6548\u5340\u57DF`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576Button\u6539\u8B8A\u72C0\u614B\uFF08\u5982\u5F9E\u91CB\u653E\u8B8A\u70BA\u6309\u4E0B\uFF09\u4E26\u9700\u8981\u91CD\u7E6A\u6642\uFF0CButton Widget\u8986\u84CB\u7684\u5340\u57DF\u5373\u70BA\u7121\u6548\u5340\u57DF\u3002 \u5716\u5F62\u5F15\u64CE\u4FDD\u7559\u4E86\u70BA\u5E40\u8ACB\u6C42\u7684\u9019\u4E9B\u7121\u6548\u5340\u57DF\u7684\u6E05\u55AE\u3002 \u63A1\u96C6\u7684\u6240\u6709\u4E8B\u4EF6\uFF08\u89F8\u6478\u3001\u6309\u9215\u548Ctick\uFF09\u53EF\u80FD\u5C0E\u81F4\u4E00\u500B\u6216\u591A\u500B\u7121\u6548\u5340\u57DF\uFF0C\u56E0\u6B64\u6BCF\u4E00\u5E40\u53EF\u80FD\u6709\u8A31\u591A\u500B\u7121\u6548\u5340\u57DF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen\u985E\u4E0A\u7684\u4E8B\u4EF6\u8655\u7406\u5668\u4E5F\u53EF\u4EE5\u8ACB\u6C42\u5340\u57DF\u91CD\u7E6A\u3002 \u4E0B\u9762\u6211\u5011\u66F4\u6539\u7B2C10\u5E40\u7684Box\u5C0F\u5DE5\u5177box1\u7684\u8272\u5F69\uFF0C\u4E26\u901A\u904E\u547C\u53EBBox\u4E0A\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Invalidate`), `\u65B9\u6CD5\u8ACB\u6C42\u91CD\u7E6A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u4F8B\u4E2D\uFF0C\u5716\u5F62\u5F15\u64CE\u5C07\u5728\u6BCF\u4E00\u5E40\u4E2D\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleTickEvent`), `\u8655\u7406\u5668\u3002 \u5728\u7B2C10\u5E40\uFF0C\u61C9\u7528\u7A0B\u5F0F\u78BC\u8ACB\u6C42\u91CD\u7E6A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), `\u8986\u84CB\u7684\u5340\u57DF\u3002 \u4F5C\u70BA\u5C0D\u8A72\u8ACB\u6C42\u7684\u56DE\u61C9\uFF0C\u5716\u5F62\u5F15\u64CE\u5C07\u5728\u5F71\u50CF\u7DE9\u885D\u4E2D\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), `\u5C0F\u5DE5\u5177\u4E2D\u4FDD\u5B58\u7684\u8272\u5F69\u91CD\u7E6A\u8A72\u5340\u57DF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u4F7F\u7528\u8005\u4ECB\u9762\u4E2D\uFF0C\u80CC\u666F\u5716\u50CF\u4E0A\u65B9\u6709\u4E00\u500BButton Widget\u548C\u4E00\u500BBox Widget\u3002 \u5982\u679C\u6211\u5011\u5728Button\u4E0A\u63D2\u5165\u4E00\u500B\u4EA4\u4E92\uFF0C\u4EE5\u4FBF\u5728Button\u88AB\u9EDE\u64CA\u6642\u66F4\u6539Box\u7684\u8272\u5F69\uFF0C\u90A3\u9EBC\u7576\u7528\u6236\u9EDE\u64CAButton\u6642\uFF0C\u6211\u5011\u6703\u5F97\u5230\u5169\u500B\u7121\u6548\u5340\u57DF\uFF08\u7528\u7D05\u8272\u8868\u793A\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-and-box.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\u5169\u500B\u7121\u6548\u5340\u57DF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u7372\u5F97\u5F71\u50CF\u7DE9\u885D\u4E2D\u7E6A\u88FD\u7684\u65B0\u8272\u5F69\uFF0CBox\u7684\u5340\u57DF\u7121\u6548\u5316\u3002 \u70BA\u4E86\u91CD\u65B0\u7E6A\u88FD\u91CB\u653E\u72C0\u614B\uFF0CButton\u9084\u5C07\u81EA\u8EAB\u7121\u6548\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "render"
  }), `\u6E32\u67D3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u6587\u6240\u8FF0\uFF0C\u66F4\u65B0\u968E\u6BB5\u7684\u7D50\u679C\u662F\u5F85\u91CD\u7E6A\u5340\u57DF\uFF08\u7121\u6548\u5340\u57DF\uFF09\u7684\u6E05\u55AE\u3002 \u6E32\u67D3\u968E\u6BB5\u7684\u4EFB\u52D9\u5BE6\u969B\u4E0A\u662F\u904D\u6B77\u6B64\u5217\u8868\uFF0C\u4E26\u5C07\u8986\u84CB\u9019\u4E9B\u5340\u57DF\u7684Widget\u7E6A\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u968E\u6BB5\u7531\u5716\u5F62\u5F15\u64CE\u81EA\u52D5\u8655\u7406\u3002 \u61C9\u7528\u5DF2\u7D93\u5B9A\u7FA9\u7684\u5834\u666F\u6A21\u578B\uFF08ui\u4E2D\u7684Widget\uFF09\u4E26\u4F7F\u4E00\u4E9B\u5340\u57DF\u7121\u6548\u5316\u3002 \u5176\u9918\u7684\u5DE5\u4F5C\u7531\u5F15\u64CE\u4F86\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u9010\u4E00\u8655\u7406\u7121\u6548\u5340\u57DF\u3002 \u5F15\u64CE\u6383\u63CF\u6BCF\u500B\u5340\u57DF\u7684\u5834\u666F\u6A21\u578B\uFF0C\u4E26\u63A1\u96C6\u5340\u57DF\u8986\u84CB\uFF08\u90E8\u5206\u6216\u5168\u90E8\uFF09\u7684Widget\u7684\u6E05\u55AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u6B64Widget\u6E05\u55AE\uFF0C\u5716\u5F62\u5F15\u64CE\u547C\u53EBWidget\u4E0A\u7684\u7E6A\u88FD\u65B9\u6CD5\u3002 \u5F9E\u80CC\u666F\u4E2D\u7684Widget\u958B\u59CB\uFF0C\u5230\u6700\u524D\u9762\u7684Widget\u7D50\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7E6A\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u6642\uFF0CWidget\u7684\u7E6A\u88FD\u65B9\u6CD5\u6703\u7528\u5230Widget\u7684\u72C0\u614B\uFF08\u5982\u8272\u5F69\uFF09\u3002 \u5728\u66F4\u65B0\u968E\u6BB5\uFF0C\u7E6A\u88FDWidget\u6240\u9700\u7684\u4EFB\u4F55\u8CC7\u8A0A\u90FD\u5FC5\u9808\u4FDD\u5B58\u5230Widget\u3002 \u5426\u5247\uFF0C\u5728\u6E32\u67D3\u968E\u6BB5\u5C07\u7121\u6CD5\u7372\u53D6\u6B64\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wait"
  }), `Wait`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5716\u5F62\u5F15\u64CE\u5728\u66F4\u65B0\u548C\u6E32\u67D3\u4E0B\u4E00\u5E40\u4E4B\u524D\u7B49\u5F85\u4E00\u500B\u4FE1\u865F\u3002 \u4E4B\u6240\u4EE5\u5728\u5E40\u4E4B\u9593\u7B49\u5F85\u800C\u4E0D\u662F\u5118\u5FEB\u5730\u7E7C\u7E8C\u6E32\u67D3\u5E40\uFF0C\u539F\u56E0\u6709\u5169\u500B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6E32\u67D3\u8207\u986F\u793A\u5668\u540C\u6B65\u3002 \u5982\u4E0A\u6587\u6240\u8FF0\uFF0C\u4E00\u4E9B\u986F\u793A\u5668\u9700\u8981\u53CD\u5FA9\u767C\u9001\u5F71\u50CF\u7DE9\u885D\u3002 While this transmission is ongoing, it is not advisable to render arbitrarily to the framebuffer. \u56E0\u6B64\uFF0C\u5716\u5F62\u5F15\u64CE\u6703\u5728\u767C\u9001\u958B\u59CB\u5F8C\u7B49\u5F85\u4E00\u5C0F\u6BB5\u6642\u9593\uFF0C\u7136\u5F8C\u518D\u958B\u59CB\u6E32\u67D3\u3002 \u5728\u61C9\u767C\u9001\u5F71\u50CF\u7DE9\u885D\u6642\uFF0C\u5176\u4ED6\u986F\u793A\u5668\u5411\u5FAE\u63A7\u5236\u5668\u767C\u9001\u4FE1\u865F\u3002 \u5716\u5F62\u5F15\u64CE\u7B49\u5F85\u8A72\u4FE1\u865F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6309\u56FA\u5B9A\u901F\u7387\u6E32\u67D3\u5E40\u3002 \u5C0D\u65BC\u61C9\u7528\u800C\u8A00\uFF0C\u6309\u56FA\u5B9A\u901F\u7387\u6E32\u67D3\u5F71\u50CF\u7684\u597D\u8655\u662F\u66F4\u5BB9\u6613\u5275\u5EFA\u6301\u7E8C\u7279\u5B9A\u6642\u9593\u7684\u52D5\u756B\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u986F\u793A\u5668\u983B\u7387\u70BA60 Hz\uFF0C\u5247\u61C9\u5C07\u5169\u79D2\u9418\u7684\u52D5\u756B\u8A2D\u5B9A\u70BA\u5728120\u5E40\u5167\u5B8C\u6210\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u7684\u7B49\u5F85\u6642\u9593\u901A\u5E38\u88AB\u61C9\u7528\u4E2D\u5176\u4ED6\u512A\u5148\u9806\u5E8F\u8F03\u4F4E\u7684\u7A0B\u5E8F\u5229\u7528\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u6642\u9593\u4E0D\u6703\u88AB\u6D6A\u8CBB\uFF0C\u512A\u5148\u9806\u5E8F\u8F03\u4F4E\u7684\u7A0B\u5E8F\u53CD\u6B63\u90FD\u61C9\u5728\u67D0\u4E9B\u6642\u9593\u9EDE\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handling-the-framebuffers"
  }), `\u8655\u7406\u5F71\u50CF\u7DE9\u885D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u6587\u6240\u8FF0\uFF0C\u5716\u5F62\u5F15\u64CE\u6703\u5728\u66F4\u65B0\u5F71\u50CF\u7DE9\u885D\u4E4B\u524D\u8207\u986F\u793A\u5668\u540C\u6B65\u3002 \u5728\u6E32\u67D3\u5230\u5F71\u50CF\u7DE9\u885D\u5F8C\uFF0C\u5F15\u64CE\u9084\u9700\u78BA\u4FDD\u986F\u793A\u5668\u986F\u793A\u66F4\u65B0\u5F8C\u7684\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "two-framebuffers"
  }), `\u5169\u500B\u5F71\u50CF\u7DE9\u885D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6700\u7C21\u55AE\u7684\u8A2D\u7F6E\u4E2D\uFF0C\u6709\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u53EF\u4F9B\u4F7F\u7528\u3002 \u5716\u5F62\u5F15\u64CE\u5728\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u4E4B\u9593\u5207\u63DB\u3002 \u5728\u5C07\u5F71\u50CF\u7E6A\u88FD\u5230\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u7684\u540C\u6642\uFF0C\u5C07\u53E6\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u50B3\u8F38\u5230\uFF08\u4E26\u986F\u793A\u5728\uFF09\u986F\u793A\u5668\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u96D9\u5F71\u50CF\u7DE9\u885D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6B64\u6B21\u7E6A\u88FD\u4E2D\uFF0C\u5047\u8A2D\u4E26\u884CRGB\u986F\u793A\u5668\u9023\u63A5\u4E86LTDC\u63A7\u5236\u5668\u3002 \u9019\u610F\u5473\u8457\u5728\u6BCF\u4E00\u5E40\u4E2D\u90FD\u5FC5\u9808\u5C07\u5F71\u50CF\u7DE9\u885D\u767C\u9001\u5230\u986F\u793A\u5668\u3002 \u7531\u65BC\u6709\u5169\u500B\u5F71\u50CF\u7DE9\u885D\uFF0C\u5716\u5F62\u5F15\u64CE\u53EF\u4EE5\u5728\u767C\u9001\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u7684\u540C\u6642\u5C07\u5F71\u50CF\u7E6A\u88FD\u5230\u53E6\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u3002 \u6B64\u65B9\u6848\u6548\u679C\u5F88\u597D\uFF0C\u5982\u53EF\u80FD\uFF0C\u61C9\u4F5C\u70BA\u9996\u9078\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u5716\u5F62\u5F15\u64CE\u5728\u6BCF\u4E00\u5E40\u90FD\u9032\u884C\u7E6A\u88FD\uFF0C\u5728\u4E0A\u9762\u7684\u7E6A\u88FD\u4E2D\uFF0C\u6211\u5011\u4E5F\u5728\u6240\u6709\u5F71\u50CF\u767C\u9001\u65B0\u7684\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E38\u5E38\u6703\u6709\u61C9\u7528\u4E0D\u66F4\u65B0\u4EFB\u4F55\u5167\u5BB9\u7684\u5E40\u3002 \u9019\u8868\u793A\u4E0D\u9032\u884C\u4EFB\u4F55\u6E32\u67D3\u3002 \u56E0\u6B64\uFF0C\u5728\u4E0B\u4E00\u5E40\u6703\u518D\u6B21\u767C\u9001\u76F8\u540C\u7684\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-no-update.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "2\u865F\u5E40\u4E2D\u7121\u66F4\u65B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u57282\u865F\u5E40\u672A\u7E6A\u88FD\u4EFB\u4F55\u5167\u5BB9\uFF0C\u56E0\u6B64\u5716\u5F62\u5F15\u64CE\u57283\u865F\u5E40\u518D\u6B21\u91CD\u767C2\u865F\u5E40\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5178\u578B\u7684\u5E73\u884CRGB\u986F\u793A\u5668\u7684\u5237\u65B0\u7387\u7D04\u70BA60 Hz\u3002 This update frequency must be maintained by the microcontroller. \u6B64\u66F4\u65B0\u983B\u7387\u610F\u5473\u8457\u5728\u518D\u6B21\u958B\u59CB\u767C\u9001\u524D\uFF0C\u670916 ms\u7684\u6642\u9593\u53EF\u7528\u4F86\u6E32\u67D3\u65B0\u5E40\u3002 \u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u6E32\u67D3\u65B0\u5E40\u7684\u6642\u9593\u8D85\u904E16 ms\u3002 \u6B64\u6642\uFF0C\u5716\u5F62\u5F15\u64CE\u53EA\u518D\u6B21\u91CD\u767C\u76F8\u540C\u7684\u5E40\uFF08\u540C\u4E4B\u524D\u4E00\u6A23\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u6E32\u67D3\u6642\u9593\u9577"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\u865F\u5E40\u7684\u6E32\u67D3\u6642\u9593\u8D85\u904E16 ms\uFF0C\u56E0\u6B64\u91CD\u767C\u4E4B\u524D\u6E32\u67D3\u52301\u865F\u5F71\u50CF\u7DE9\u885D\u76840\u865F\u5E40\u3002 \u57283\u865F\u5E40\u767C\u90012\u865F\u5F71\u50CF\u7DE9\u885D\u4E2D\u7684\u65B0\u5E40\u3002 \u7576\u6709\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u53EF\u4F9B\u4F7F\u7528\u6642\uFF0C\u6E32\u67D3\u6642\u9593\u53EF\u80FD\u6703\u975E\u5E38\u9577\u3002 \u5728\u6709\u65B0\u5E40\u53EF\u7528\u4E4B\u524D\uFF0C\u6703\u4E00\u76F4\u91CD\u767C\u4E0A\u4E00\u5E40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `\u4E00\u500B\u5F71\u50CF\u7DE9\u885D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u7CFB\u7D71\u4E2D\uFF0C\u53EA\u6709\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u7684\u5B58\u5132\u7A7A\u9593\u3002 \u5982\u679C\u4F7F\u7528\u5E73\u884CRGB\u986F\u793A\u5668\uFF0C\u5247\u5FC5\u9808\u5728\u6BCF\u4E00\u5E40\u767C\u90011\u865F\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u5716\u5F62\u5F15\u64CE\u4E0D\u5F97\u4E0D\u5728\u5411\u986F\u793A\u5668\u767C\u9001\u5F71\u50CF\u7DE9\u885D\u7684\u540C\u6642\u5C07\u5F71\u50CF\u7E6A\u88FD\u5230\u540C\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\uFF0C\u56E0\u6B64\u6703\u7522\u751F\u554F\u984C\u3002 \u5982\u679C\u4E0D\u52A0\u6CE8\u610F\u5C31\u9019\u6A23\u505A\uFF0C\u6703\u6709\u4E00\u500B\u6975\u5927\u7684\u98A8\u96AA\uFF0C\u5373\u986F\u793A\u5668\u6703\u986F\u793A\u4E0A\u4E00\u5F71\u50CF\u8207\u65B0\u5F71\u50CF\u7684\u6DF7\u5408\u5F71\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `One solution is to hold back the drawing until the transfer is complete and only draw in the time-slot before the transfer starts again. \u7531\u65BC\u50B3\u8F38\u4F54\u7528\u4E86\u6574\u500B\u5F71\u50CF\u6642\u9593\u7684\u5F88\u5927\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\u53EF\u7528\u65BC\u7E6A\u88FD\u5F71\u50CF\u7684\u6642\u9593\u6975\u5C11\u3002 \u53E6\u4E00\u500B\u7F3A\u9EDE\u662F\u5982\u679C\u5728\u4E0B\u4E00\u6B21\u50B3\u8F38\u958B\u59CB\u6642\u7E6A\u88FD\u672A\u5B8C\u6210\uFF0C\u5247\u4ECD\u53EF\u80FD\u51FA\u73FE\u4E0D\u5B8C\u6574\u7684\u5F71\u50CF\uFF08\u6495\u88C2\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u7A2E\u66F4\u6709\u6F5B\u529B\u7684\u89E3\u6C7A\u65B9\u6848\u662F\u76E3\u6E2C\u5F71\u50CF\u7DE9\u885D\u5DF2\u767C\u9001\u7684\u91CF\uFF0C\u7136\u5F8C\u5C07\u6E32\u67D3\u6B21\u6578\u9650\u5236\u5728\u5F71\u50CF\u7DE9\u885D\u7684\u5408\u9069\u7BC4\u570D\u5167\u3002 \u96D6\u7136\u50B3\u8F38\u7684\u9032\u884C\uFF0C\u5F71\u50CF\u7DE9\u885D\u6709\u8D8A\u4F86\u8D8A\u591A\u7684\u90E8\u5206\u53EF\u4F9B\u6E32\u67D3\u6F14\u7B97\u6CD5\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u5305\u542B\u5354\u52A9\u5DE5\u7A0B\u5E2B\u78BA\u4FDD\u7E6A\u88FD\u6B63\u78BA\u57F7\u884C\u7684\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u5728\u6BCF\u4E00\u5E40\u66F4\u65B0\u4E26\u6E32\u67D3\u5F71\u50CF\u7DE9\u885D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5728\u6BCF\u4E00\u5E40\u91CD\u767C\u4E00\u500B\u5F71\u50CF\u7DE9\u885D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5E40\u6C92\u6709\u66F4\u65B0\u4EFB\u4F55\u5167\u5BB9\uFF0C\u5247\u91CD\u767C\u5F71\u50CF\u7DE9\u885D\uFF0C\u4E0D\u505A\u4EFB\u4F55\u66F4\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u6E32\u67D3\u6642\u9593\u8D85\u904E16 ms\uFF0C\u7576\u518D\u6B21\u958B\u59CB\u91CD\u767C\u6642\uFF0C\u6E32\u67D3\u5C1A\u672A\u7D50\u675F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u6E32\u67D3\u6642\u9593\u9577"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u5716\u5F62\u5F15\u64CE\u5FC5\u9808\u78BA\u4FDD\u6B63\u5728\u767C\u9001\u7684\u90E8\u5206\u5DF2\u5B8C\u6210\u6E32\u67D3\u3002 \u5426\u5247\uFF0C\u986F\u793A\u5668\u5C07\u986F\u793A\u672A\u5B8C\u6210\u7684\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u4E00\u7BC0\u4E2D\uFF0C\u6211\u5011\u5C07\u8A0E\u8AD6\u5404\u500BWidget\u7684\u6E32\u67D3\u6642\u9593\u3002 \u9019\u5C07\u6709\u52A9\u65BC\u5DE5\u7A0B\u5E2B\u958B\u767C\u51FA\u9AD8\u6027\u80FD\u7684\u61C9\u7528\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);