"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3824],{

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

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


/***/ }),

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 8347:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65407);
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
  id: "simulator",
  title: "\u6A21\u64EC\u5668"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/simulator",
  "id": "development/ui-development/working-with-touchgfx/simulator",
  "title": "\u6A21\u64EC\u5668",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/simulator",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/simulator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "simulator",
    "title": "\u6A21\u64EC\u5668"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  },
  "next": {
    "title": "\u7DE8\u8B6F\u8207\u71D2\u9304",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }
};
const assets = {};



const toc = [{
  value: "\u5982\u4F55\u904B\u884C",
  id: "how-to-run",
  level: 2
}, {
  value: "\u4F7F\u7528TouchGFX Designer",
  id: "using-touchgfx-designer",
  level: 3
}, {
  value: "\u4F7F\u7528TouchGFX Environment",
  id: "using-touchgfx-environment",
  level: 3
}, {
  value: "\u6A21\u64EC\u5668\u529F\u80FD",
  id: "simulator-features",
  level: 2
}, {
  value: "\u50C5\u53EF\u901A\u904E\u6A21\u64EC\u5668\u904B\u884C\u7684\u7A0B\u5F0F\u78BC",
  id: "simulator-only-user-code",
  level: 2
}, {
  value: "\u9396\u5B9A\u548C\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "locking-and-unlocking-the-framebuffer",
  level: 2
}, {
  value: "\u9396\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "locking-the-framebuffer",
  level: 3
}, {
  value: "\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "unlocking-the-framebuffer",
  level: 3
}, {
  value: "\u5FD8\u8A18\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "forgetting-to-unlock-the-framebuffer",
  level: 3
}, {
  value: "\u985E\u6BD4\u786C\u9AD4\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u5C3A\u5BF8\u8207\u986F\u793A\u5668\u4E0D\u540C",
  id: "simulating-hardware-framebuffer-with-a-different-size-than-the-display",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u69CB\u5EFATouchGFX UI\u901A\u5E38\u6D89\u53CA\u5927\u91CF\u7684\u5716\u5F62\u7D30\u7BC0\uFF0C\u4EE5\u5339\u914DUI\u7684\u898F\u7BC4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u52A0\u5FEB\u958B\u767C\u904E\u7A0B\uFF0C\u5728\u5BE6\u9A57\u548C\u9664\u932F\u61C9\u7528\u7A0B\u5F0F\u6642\uFF0C\u6709\u4E00\u500B\u5FEB\u901F\u7684\u5468\u8F49\u6642\u9593\u5F88\u91CD\u8981\u3002 \u71D2\u9304\u4E00\u500B\u958B\u767C\u677F\u901A\u5E38\u9700\u8981\u76F8\u7576\u9577\u4E00\u6BB5\u6642\u9593\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5C0D\u61C9\u7528\u7A0B\u5F0F\u9032\u884C\u5C0F\u7684\u6539\u52D5\u90FD\u6703\u6E1B\u6162\u958B\u767C\u901F\u5EA6\u3002 \u70BA\u4E86\u7DE9\u89E3\u9019\u7A2E\u60C5\u6CC1\uFF0CTouchGFX PC\u6A21\u64EC\u5668\u662F\u4E00\u500B\u5F88\u597D\u7684\u958B\u767C\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EA\u9700\u5C0DPC\u7DE8\u8B6F\u61C9\u7528\u7A0B\u5F0F\u4E26\u5728PC\u4E0A\u904B\u884C\u61C9\u7528\u7A0B\u5F0F\u3002 \u9664\u4E86Board Bring Up\u7A0B\u5F0F\u78BC\u548C\u62BD\u8C61\u5C64\uFF08\u9019\u662F\u5C0DPC\uFF08\u800C\u4E0D\u662F\u958B\u767C\u677F\uFF09\u7684\uFF09\uFF0C\u57F7\u884C\u7684\u7A0B\u5F0F\u78BC\u8207\u76EE\u6A19\u786C\u9AD4\u4E0A\u904B\u884C\u7684\u7A0B\u5F0F\u78BC\u5B8C\u5168\u76F8\u540C\u3002 \u9019\u610F\u5473\u8457\u53EF\u4EE5\u50CF\u5728\u76EE\u6A19\u786C\u9AD4\u4E0A\u4E00\u6A23\u7CBE\u78BA\u5730\u6E2C\u8A66\u5C0F\u90E8\u4EF6\u7684\u4F4D\u7F6E\u5B89\u6392\u3001\u4EA4\u4E92\u3001\u52D5\u756B\u3001\u72C0\u614B\u6A5F\u7B49\u3002 \u5982\u679C\u9858\u610F\uFF0C\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528Visual Studio\u9019\u6A23\u7684IDE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\u9664\u932F`), `\u81EA\u5DF1\u7684\u7A0B\u5F0F\u78BC\u3002 \u7576\u7136\uFF0C\u50CF\u6027\u80FD\u5206\u6790\u548C\u8207\u771F\u6B63\u7684\u5F8C\u7AEF\u7CFB\u7D71\u9032\u884C\u4EA4\u4E92\u9019\u6A23\u7684\u4E8B\u60C5\u5FC5\u9808\u5728\u958B\u767C\u4E0A\u9032\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",
    mdxType: "LoopVideo"
  }, "\u6A21\u64EC\u5668\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "how-to-run"
  }), `\u5982\u4F55\u904B\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-designer"
  }), `\u4F7F\u7528TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u5F9ETouchGFX Designer\u5167\u90E8\u555F\u52D5\u6A21\u64EC\u5668\uFF0C\u53EA\u9700\u6309\u4E0B\u53F3\u4E0A\u89D2\u7684\u201CRun Simulator\uFF08\u904B\u884C\u6A21\u64EC\u5668\uFF09\u201D\u6309\u9215\uFF0C\u6216\u8005\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u9375\u76E4\u4E0A\u7684F5`), ` \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.png",
    mdxType: "Figure"
  }, "\u5F9ETouchGFX Designer\u555F\u52D5\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-environment"
  }), `\u4F7F\u7528TouchGFX Environment`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u4F7F\u7528TouchGFX\u74B0\u5883\u555F\u52D5\u6A21\u64EC\u5668\uFF0C\u8ACB\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9A5F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6253\u958BTouchGFX Environment`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C0E\u822A\u5230TouchGFX\u61C9\u7528\u7A0B\u5F0F\u6240\u5728\u4F4D\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C0D\u65BC\u50C5\u6A21\u64EC\u5668\u5C08\u6848\uFF0C\u7BC4\u4F8B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C0D\u65BC\u76EE\u6A19\u5C08\u6848\uFF0C\u7BC4\u4F8B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1/TouchGFX/`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u904B\u884C\u6307\u4EE4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `make -f simulator/gcc/Makefile -j6`), `\u4EE5\u7DE8\u8B6F\u6A21\u64EC\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u904B\u884C\u6307\u4EE4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `./build/bin/simulator.exe`), `\u4EE5\u555F\u52D5\u6A21\u64EC\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5C0DTouchGFX\u61C9\u7528\u7A0B\u5F0F\u9032\u884C\u4E86\u66F4\u6539\uFF0C\u8ACB\u904B\u884C\u6B65\u9A5F3\u548C\u6B65\u9A5F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-features"
  }), `\u6A21\u64EC\u5668\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u6355\u6349\u6ED1\u9F20\u8F38\u5165\uFF0CTouchGFX\u6A21\u64EC\u5668\u9084\u5305\u62EC\u5176\u4ED6\u6709\u7528\u7684\u529F\u80FD\uFF0C\u5982\u4E0B\u6240\u5217\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\u5FEB\u901F\u9375"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\u7279\u5FB5")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u555F\u7528/\u7981\u7528\u6307\u6A19\u5EA7\u6A19\u7684\u986F\u793A\u4EE5\u53CA\u8A72\u5EA7\u6A19\u4E0A\u50CF\u7D20\u7684RGB\u984F\u8272\uFF08\u5341\u516D\u9032\u4F4D\uFF09\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u555F\u7528/\u7981\u7528\u7A81\u51FA\u986F\u793A\u7121\u6548\u5340\u57DF\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u64F7\u53D6\u87A2\u5E55\u4E26\u5C07\u5716\u7247\u7F6E\u65BC", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots"), "\u8CC7\u6599\u593E\u4E2D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u5C0D\u63A5\u4E0B\u4F86\u768450\u5E40\u9032\u884C\u622A\u5716\u4E26\u5C07\u5716\u7247\u7F6E\u65BC", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots"), "\u8CC7\u6599\u593E\u4E2D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "SHIFT + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u622A\u5716\u4E26\u5C07\u5716\u7247\u7F6E\u65BC\u526A\u8CBC\u677F\u4E2D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u5982\u679C\u4F7F\u7528\u6A21\u64EC\u5668\u76AE\u819A - \u555F\u7528/\u7981\u7528\u6A21\u64EC\u5668\u76AE\u819A\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\u5982\u679C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u672A"), " \u4F7F\u7528\u6A21\u64EC\u5668\u76AE\u819A - \u555F\u7528/\u7981\u7528\u8996\u7A97\u908A\u6846\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "\u9375\u76E4\u4E0A\u7684F5")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "Sends the application straight back to the startup screen by calling FrontendApplication::changeToStartScreen().")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F9")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u901A\u904E\u963B\u6B62\u5411\u61C9\u7528\u7A0B\u5F0F\u767C\u9001\u6642\u9418\u4FE1\u865F\u4F86\u66AB\u505C\u6A21\u64EC\u5668\u3002 \u518D\u6B21\u6309\u4E0BF9\u53EF\u6062\u5FA9\u6B63\u5E38\u57F7\u884C\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F10")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7576\uFF08\u6309\u4E0BF9\uFF09\u6A21\u64EC\u5668\u66AB\u505C\u5F8C\uFF0C\u53EF\u4EE5\u901A\u904E\u6309\u4E0BF10\u767C\u9001\u4E00\u500B\u6642\u9418\u4FE1\u865F\u5230\u61C9\u7528\u7A0B\u5F0F\uFF0C\u5F9E\u800C\u5C0D\u61C9\u7528\u7A0B\u5F0F\u9032\u884C\u201C\u55AE\u6B65\u4F5C\u696D\u201D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "ESC")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u95DC\u9589\u6A21\u64EC\u5668\u3002"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-only-user-code"
  }), `\u50C5\u53EF\u901A\u904E\u6A21\u64EC\u5668\u904B\u884C\u7684\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6709\u4E00\u4E9B\u7A0B\u5F0F\u78BC\u53EA\u80FD\u5728\u4F7F\u7528TouchGFX\u6A21\u64EC\u5668\u6642\u904B\u884C, \u53EF\u4EE5\u5728\u60A8\u7684C++\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), ` \uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
  // Your simulator specific user code here
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u8981\u5C07\u9664\u932F\u6587\u5B57\u8F38\u51FA\u5230\u63A7\u5236\u53F0\uFF0C\u53EF\u4EE5\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `\u51FD\u6578\u3002 \u9019\u662F\u4E00\u500B\u985E\u4F3C\u65BCprintf\u7684\u51FD\u6578\uFF0C\u53EA\u6703\u5728\u69CB\u5EFA\u6A21\u64EC\u5668\u7A0B\u5F0F\u78BC\u6642\u5305\u542B\uFF0C\u56E0\u6B64\u5728\u76EE\u6A19\u786C\u9AD4\u4E0A\u904B\u884C\u6642\u4E0D\u6703\u5E72\u64FE\u3002 \u56E0\u6B64\uFF0C\u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\u4E0D\u9700\u8981\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int i = 0;
touchgfx_printf("Application is running through simulator! \\n");
touchgfx_printf("Print our value for integer i = %i \\n", i);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "locking-and-unlocking-the-framebuffer"
  }), `\u9396\u5B9A\u548C\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u7DE8\u5BEB\u76F4\u63A5\u64CD\u4F5C\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u7A0B\u5F0F\u78BC\uFF0C\u91CD\u8981\u7684\u662F\u8981\u5728\u5C07\u50CF\u7D20\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u5340\u8A18\u61B6\u9AD4\u4E4B\u524D\u9396\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u540C\u6A23\u91CD\u8981\u7684\u662F\u8A18\u4F4F\u8981\u5728\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u5340\u4E4B\u5F8C\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "locking-the-framebuffer"
  }), `\u9396\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u8A72\u7A0B\u5F0F\u78BC\u7247\u6BB5\u9396\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u6B77\u53F2\u539F\u56E0\uFF0C\u8FD4\u56DE\u503C\u662F\u6307\u5411\u5F71\u50CF\u7DE9\u885D\u5340\u768416\u4F4D\u6307\u6A19\u3002 \u5C07\u6307\u91DD\u5F37\u5236\u8F49\u63DB\u70BA\u9069\u7576\u7684\u6307\u91DD\u985E\u578B\uFF0C\u4EE5\u4FBF\u66F4\u8F15\u9B06\u5730\u5B58\u53D6\u5F71\u50CF\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unlocking-the-framebuffer"
  }), `\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u89E3\u9396\u4F7F\u7528\u5F8C\u7684\u5F71\u50CF\u7DE9\u885D\u5340\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL::getInstance()->unlockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "forgetting-to-unlock-the-framebuffer"
  }), `\u5FD8\u8A18\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5FD8\u8A18\u89E3\u9396\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u5247\u786C\u9AD4\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u8B8A\u5F97\u53EF\u7528\u4E4B\u524D\u6703\u4E00\u76F4\u7B49\u5F85\u4E26\u4E14\u66AB\u6642\u51CD\u7D50\u3002 \u70BA\u4E86\u5E6B\u52A9\u6AA2\u6E2C\u9019\u7A2E\u60C5\u6CC1\uFF0C\u5982\u679CTouchGFX\u6846\u67B6\u8981\u6C42\u9396\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u800C\u5F71\u50CF\u7DE9\u885D\u5340\u4ECD\u7136\u8655\u65BC\u9396\u5B9A\u72C0\u614B\uFF0C\u5C31\u6703\u6536\u5230\u4E00\u500B\u5831\u932F\u8CC7\u8A0A\u3002 \u5831\u932F\u8CC7\u8A0A\u5C31\u50CFMicrosoft Visual Studio\u6240\u63D0\u793A\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\u5F71\u50CF\u7DE9\u885D\u5340\u672A\u89E3\u9396\u6642\u7684Window\u5C0D\u8A71\u65B9\u584A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u63A7\u5236\u53F0\u7A0B\u5F0F\uFF0C\u5831\u932F\u8CC7\u8A0A\u5C31\u50CF\u9019\u6A23\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\u5F71\u50CF\u7DE9\u885D\u5340\u672A\u89E3\u9396\u6642\u7684\u63A7\u5236\u53F0\u5217\u5370\u8F38\u51FA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "simulating-hardware-framebuffer-with-a-different-size-than-the-display"
  }), `\u985E\u6BD4\u786C\u9AD4\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u5C3A\u5BF8\u8207\u986F\u793A\u5668\u4E0D\u540C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E9B\u8A2D\u7F6E\u7684\u986F\u793A\u5668\u5C3A\u5BF8\u53EF\u80FD\u5C0F\u65BC\u5BE6\u969B\u786C\u9AD4\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u8A72\u554F\u984C\u4E5F\u53EF\u4EE5\u7531\u6A21\u64EC\u5668\u8655\u7406\uFF0C\u4E26\u5728\u547C\u53EBtouchgfx_generic_init()\u4E4B\u5F8C\u5728\u6A94\u6A21\u64EC\u5668/main.cpp\u4E2D\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50B3\u905E\u7D66touchgfx_generic_init()\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u5B9A\u7FA9\u4E86\u986F\u793A\u5668\u548C\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5927\u5C0F\uFF0C\u4F46\u662F\u5982\u679C\u786C\u9AD4\u5F71\u50CF\u7DE9\u885D\u5340\u6709\u4E0D\u540C\u7684\u5C3A\u5BF8\uFF0C\u53EA\u9700\u5728\u547C\u53EBtouchgfx_generic_init()\u4E4B\u5F8C\u547C\u53EBsetFrameBufferSize()\u4F86\u6307\u5B9A\u5BE6\u969B\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5927\u5C0F\uFF0C\u4F8B\u5982\uFF0CSIM_WIDTH=800\u548CSIM_HEIGHT==480\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);
hal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);