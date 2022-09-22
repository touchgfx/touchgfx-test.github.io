"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2265],{

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

/***/ 15963:
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
  title: "\u6A21\u62DF\u5668"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/simulator",
  "id": "development/ui-development/working-with-touchgfx/simulator",
  "title": "\u6A21\u62DF\u5668",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/simulator",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/simulator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "simulator",
    "title": "\u6A21\u62DF\u5668"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u63A7\u4EF6\u548C\u5BB9\u5668",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  },
  "next": {
    "title": "\u7F16\u8BD1& \u70E7\u5F55",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }
};
const assets = {};



const toc = [{
  value: "\u5982\u4F55\u8FD0\u884C",
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
  value: "\u6A21\u62DF\u5668\u529F\u80FD",
  id: "simulator-features",
  level: 2
}, {
  value: "\u4EC5\u53EF\u901A\u8FC7\u6A21\u62DF\u5668\u8FD0\u884C\u7684\u4EE3\u7801",
  id: "simulator-only-user-code",
  level: 2
}, {
  value: "\u9501\u5B9A\u548C\u89E3\u9501\u5E27\u7F13\u51B2\u533A",
  id: "locking-and-unlocking-the-framebuffer",
  level: 2
}, {
  value: "\u9501\u5B9A\u5E27\u7F13\u51B2\u533A",
  id: "locking-the-framebuffer",
  level: 3
}, {
  value: "\u89E3\u9501\u5E27\u7F13\u51B2\u533A",
  id: "unlocking-the-framebuffer",
  level: 3
}, {
  value: "\u5FD8\u8BB0\u89E3\u9501\u5E27\u7F13\u51B2\u533A",
  id: "forgetting-to-unlock-the-framebuffer",
  level: 3
}, {
  value: "\u6A21\u62DF\u786C\u4EF6\u5E27\u7F13\u5B58\u533A\uFF0C\u5C3A\u5BF8\u4E0E\u663E\u793A\u5668\u4E0D\u540C",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6784\u5EFATouchGFX UI\u901A\u5E38\u6D89\u53CA\u5927\u91CF\u7684\u56FE\u5F62\u7EC6\u8282\uFF0C\u4EE5\u5339\u914DUI\u7684\u89C4\u8303\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u52A0\u5FEB\u5F00\u53D1\u8FC7\u7A0B\uFF0C\u5728\u8BD5\u9A8C\u548C\u8C03\u8BD5\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u6709\u4E00\u4E2A\u5FEB\u901F\u7684\u5468\u8F6C\u65F6\u95F4\u5F88\u91CD\u8981\u3002 \u70E7\u5F55\u4E00\u4E2A\u677F\u5361\u901A\u5E38\u9700\u8981\u76F8\u5F53\u957F\u4E00\u6BB5\u65F6\u95F4\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5BF9\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u5C0F\u7684\u6539\u52A8\u90FD\u4F1A\u771F\u6B63\u51CF\u6162\u5F00\u53D1\u901F\u5EA6\u3002 \u4E3A\u4E86\u7F13\u89E3\u8FD9\u79CD\u60C5\u51B5\uFF0CTouchGFX PC\u6A21\u62DF\u5668\u662F\u5BF9\u5F00\u53D1\u5DE5\u5177\u7684\u4E00\u4E2A\u5F88\u597D\u8865\u5145\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EA\u9700\u9762\u5411PC\u7F16\u8BD1\u5E94\u7528\u7A0B\u5E8F\u5E76\u5728PC\u4E0A\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u3002 \u9664\u4E86\u542F\u52A8\u677F\u5361\u4EE3\u7801\u548C\u62BD\u8C61\u5C42\uFF08\u8FD9\u662F\u9762\u5411PC\uFF08\u800C\u4E0D\u662F\u60A8\u7684\u677F\u5361\uFF09\u7684\uFF09\uFF0C\u6267\u884C\u7684\u4EE3\u7801\u4E0E\u76EE\u6807\u786C\u4EF6\u4E0A\u8FD0\u884C\u7684\u4EE3\u7801\u5B8C\u5168\u76F8\u540C\u3002 \u8FD9\u610F\u5473\u7740\u53EF\u4EE5\u50CF\u5728\u76EE\u6807\u786C\u4EF6\u4E0A\u4E00\u6837\u7CBE\u786E\u5730\u6D4B\u8BD5\u5C0F\u90E8\u4EF6\u7684\u4F4D\u7F6E\u5B89\u6392\u3001\u4EA4\u4E92\u3001\u52A8\u753B\u3001\u72B6\u6001\u673A\u7B49\u3002 \u5982\u679C\u613F\u610F\uFF0C\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528Visual Studio\u8FD9\u6837\u7684IDE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\u8C03\u8BD5`), `\u81EA\u5DF1\u7684\u4EE3\u7801\u3002 \u5F53\u7136\u50CF\u6027\u80FD\u5206\u6790\u548C\u4E0E\u771F\u6B63\u7684\u540E\u7AEF\u7CFB\u7EDF\u8FDB\u884C\u4EA4\u4E92\u8FD9\u6837\u7684\u4E8B\u60C5\u5FC5\u987B\u5728\u677F\u5361\u4E0A\u8FDB\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",
    mdxType: "LoopVideo"
  }, "\u6A21\u62DF\u5668\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "how-to-run"
  }), `\u5982\u4F55\u8FD0\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-designer"
  }), `\u4F7F\u7528TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u4ECETouchGFX Designer\u5185\u90E8\u542F\u52A8\u6A21\u62DF\u5668\uFF0C\u53EA\u9700\u6309\u4E0B\u53F3\u4E0A\u89D2\u7684\u201CRun Simulator\u201D\u6309\u94AE\uFF0C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u6216`), ` \u8005\u6309\u4E0B\u952E\u76D8\u4E0A\u7684F5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.png",
    mdxType: "Figure"
  }, "\u4ECETouchGFX Designer\u542F\u52A8\u6A21\u62DF\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-environment"
  }), `\u4F7F\u7528TouchGFX Environment`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u8981\u4F7F\u7528TouchGFX\u73AF\u5883\u542F\u52A8\u6A21\u62DF\u5668\uFF0C\u8BF7\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6253\u5F00TouchGFX Environment`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5BFC\u822A\u5230TouchGFX\u5E94\u7528\u7A0B\u5E8F\u6240\u5728\u4F4D\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5BF9\u4E8E\u4EC5\u6A21\u62DF\u5668\u9879\u76EE\uFF0C\u793A\u4F8B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\uFF0C\u793A\u4F8B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1/TouchGFX/`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8FD0\u884C\u547D\u4EE4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `make -f simulator/gcc/Makefile -j6`), `\u4EE5\u7F16\u8BD1\u6A21\u62DF\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u8FD0\u884C\u547D\u4EE4`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `./build/bin/simulator.exe`), `\u4EE5\u542F\u52A8\u6A21\u62DF\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5BF9TouchGFX\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u4E86\u66F4\u6539\uFF0C\u8BF7\u8FD0\u884C\u6B65\u9AA43\u548C\u6B65\u9AA44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-features"
  }), `\u6A21\u62DF\u5668\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u6355\u6349\u9F20\u6807\u8F93\u5165\uFF0CTouchGFX\u6A21\u62DF\u5668\u8FD8\u5305\u62EC\u5176\u4ED6\u6709\u7528\u7684\u529F\u80FD\uFF0C\u5982\u4E0B\u6240\u5217\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\u5FEB\u6377\u952E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\u7279\u5F81")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u542F\u7528/\u7981\u7528\u6307\u9488\u5750\u6807\u7684\u663E\u793A\u4EE5\u53CA\u8BE5\u5750\u6807\u4E0A\u50CF\u7D20\u7684RGB\u989C\u8272\uFF08\u5341\u516D\u8FDB\u5236\uFF09\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u542F\u7528/\u7981\u7528\u7A81\u51FA\u663E\u793A\u65E0\u6548\u533A\u57DF\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u622A\u5C4F\u5E76\u5C06\u56FE\u7247\u7F6E\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots\uFF08\u622A\u5C4F\uFF09"), "\u6587\u4EF6\u5939\u4E2D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u5BF9\u63A5\u4E0B\u6765\u768450\u5E27\u8FDB\u884C\u622A\u5C4F\u5E76\u5C06\u56FE\u7247\u7F6E\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots\uFF08\u622A\u5C4F\uFF09"), "\u6587\u4EF6\u5939\u4E2D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "SHIFT + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u622A\u5C4F\u5E76\u5C06\u56FE\u7247\u7F6E\u4E8E\u526A\u8D34\u677F\u4E2D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u5982\u679C\u4F7F\u7528\u6A21\u62DF\u5668\u76AE\u80A4 - \u542F\u7528/\u7981\u7528\u6A21\u62DF\u5668\u76AE\u80A4\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\u5982\u679C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u672A"), " \u4F7F\u7528\u6A21\u62DF\u5668\u76AE\u80A4 - \u542F\u7528/\u7981\u7528\u7A97\u53E3\u8FB9\u6846\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "\u6216")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "Sends the application straight back to the startup screen by calling FrontendApplication::changeToStartScreen().")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F9")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u901A\u8FC7\u963B\u6B62\u5411\u5E94\u7528\u7A0B\u5E8F\u53D1\u9001\u65F6\u949F\u4FE1\u53F7\u62CD\u6765\u6682\u505C\u6A21\u62DF\u5668\u3002 \u518D\u6B21\u6309\u4E0BF9\u53EF\u6062\u590D\u6B63\u5E38\u6267\u884C\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F10")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u5F53\uFF08\u6309\u4E0BF9\uFF09\u6A21\u62DF\u5668\u6682\u505C\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0BF10\u53D1\u9001\u4E00\u4E2A\u65F6\u949F\u4FE1\u53F7\u5230\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4ECE\u800C\u5BF9\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u201C\u5355\u6B65\u64CD\u4F5C\u201D\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "ESC")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u5173\u95ED\u6A21\u62DF\u5668\u3002"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-only-user-code"
  }), `\u4EC5\u53EF\u901A\u8FC7\u6A21\u62DF\u5668\u8FD0\u884C\u7684\u4EE3\u7801`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6709\u4E00\u4E9B\u4EE3\u7801\u53EA\u80FD\u5728\u4F7F\u7528TouchGFX\u6A21\u62DF\u5668\u65F6\u8FD0\u884C, \u53EF\u4EE5\u5728\u60A8\u7684C++\u4EE3\u7801\u4E2D\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), ` in your C++ code\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
  // Your simulator specific user code here
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u8981\u5C06\u8C03\u8BD5\u6587\u672C\u8F93\u51FA\u5230\u63A7\u5236\u53F0\uFF0C\u53EF\u4EE5\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `\u51FD\u6570\u3002 \u8FD9\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8Eprintf\u7684\u51FD\u6570\uFF0C\u53EA\u4F1A\u5728\u6784\u5EFA\u6A21\u62DF\u5668\u4EE3\u7801\u65F6\u5305\u542B\uFF0C\u56E0\u6B64\u5728\u76EE\u6807\u786C\u4EF6\u4E0A\u8FD0\u884C\u65F6\u4E0D\u4F1A\u5E72\u6270\u3002 \u56E0\u6B64\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` #ifdef SIMULATOR`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int i = 0;
touchgfx_printf("Application is running through simulator! \\n");
touchgfx_printf("Print our value for integer i = %i \\n", i);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "locking-and-unlocking-the-framebuffer"
  }), `\u9501\u5B9A\u548C\u89E3\u9501\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u7F16\u5199\u76F4\u63A5\u64CD\u4F5C\u5E27\u7F13\u5B58\u533A\u7684\u4EE3\u7801\uFF0C\u91CD\u8981\u7684\u662F\u8981\u5728\u5C06\u50CF\u7D20\u5199\u5165\u5E27\u7F13\u5B58\u533A\u5185\u5B58\u4E4B\u524D\u9501\u5B9A\u5E27\u7F13\u5B58\u533A\uFF0C\u540C\u6837\u91CD\u8981\u7684\u662F\u8BB0\u4F4F\u8981\u5728\u5199\u5165\u5E27\u7F13\u5B58\u533A\u4E4B\u540E\u89E3\u9501\u5E27\u7F13\u5B58\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "locking-the-framebuffer"
  }), `\u9501\u5B9A\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u8BE5\u4EE3\u7801\u7247\u6BB5\u9501\u5B9A\u5E27\u7F13\u51B2\u533A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C\u8FD4\u56DE\u503C\u662F\u6307\u5411\u5E27\u7F13\u51B2\u533A\u768416\u4F4D\u6307\u9488\u3002 \u5C06\u6307\u9488\u5F3A\u5236\u8F6C\u6362\u4E3A\u9002\u5F53\u7684\u6307\u9488\u7C7B\u578B\uFF0C\u4EE5\u4FBF\u66F4\u8F7B\u677E\u5730\u8BBF\u95EE\u5E27\u7F13\u51B2\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unlocking-the-framebuffer"
  }), `\u89E3\u9501\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u89E3\u9501\u4F7F\u7528\u540E\u7684\u5E27\u7F13\u51B2\u533A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL::getInstance()->unlockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "forgetting-to-unlock-the-framebuffer"
  }), `\u5FD8\u8BB0\u89E3\u9501\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5FD8\u8BB0\u89E3\u9501\u5E27\u7F13\u51B2\u533A\uFF0C\u5219\u786C\u4EF6\u5728\u5E27\u7F13\u51B2\u533A\u53D8\u5F97\u53EF\u7528\u4E4B\u524D\u4F1A\u4E00\u76F4\u7B49\u5F85\u5E76\u4E14\u6682\u65F6\u51BB\u7ED3\u3002 \u4E3A\u4E86\u5E2E\u52A9\u68C0\u6D4B\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5982\u679CTouchGFX\u6846\u67B6\u8981\u6C42\u9501\u5B9A\u5E27\u7F13\u51B2\u533A\uFF0C\u800C\u5E27\u7F13\u51B2\u533A\u4ECD\u7136\u5904\u4E8E\u9501\u5B9A\u72B6\u6001\uFF0C\u4F60\u4F1A\u5F97\u5230\u4E00\u4E2A\u65AD\u8A00. \u62A5\u9519\u4FE1\u606F\u5C31\u50CFMicrosoft Visual Studio\u6240\u63D0\u793A\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\u5E27\u7F13\u51B2\u533A\u672A\u89E3\u9501\u65F6\u7684Window\u5BF9\u8BDD\u6846"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u63A7\u5236\u53F0\u7A0B\u5E8F\uFF0C\u62A5\u9519\u4FE1\u606F\u5C31\u50CF\u8FD9\u6837\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\u5E27\u7F13\u51B2\u533A\u672A\u89E3\u9501\u65F6\u7684\u63A7\u5236\u53F0\u6253\u5370\u8F93\u51FA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "simulating-hardware-framebuffer-with-a-different-size-than-the-display"
  }), `\u6A21\u62DF\u786C\u4EF6\u5E27\u7F13\u5B58\u533A\uFF0C\u5C3A\u5BF8\u4E0E\u663E\u793A\u5668\u4E0D\u540C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E9B\u8BBE\u7F6E\u7684\u663E\u793A\u5668\u5C3A\u5BF8\u53EF\u80FD\u5C0F\u4E8E\u5B9E\u9645\u786C\u4EF6\u7684\u5E27\u7F13\u5B58\u533A\u3002 \u8BE5\u95EE\u9898\u4E5F\u53EF\u4EE5\u7531\u6A21\u62DF\u5668\u5904\u7406\uFF0C\u5E76\u5728\u8C03\u7528touchgfx_generic_init()\u4E4B\u540E\u5728\u6587\u4EF6\u6A21\u62DF\u5668/main.cpp\u4E2D\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F20\u9012\u7ED9touchgfx_generic_init()\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5B9A\u4E49\u4E86\u663E\u793A\u5668\u548C\u5E27\u7F13\u5B58\u533A\u7684\u5927\u5C0F\uFF0C\u4F46\u662F\u5982\u679C\u786C\u4EF6\u5E27\u7F13\u5B58\u533A\u6709\u4E0D\u540C\u7684\u5C3A\u5BF8\uFF0C\u53EA\u9700\u5728\u8C03\u7528touchgfx_generic_init()\u4E4B\u540E\u8C03\u7528setFrameBufferSize()\u6765\u6307\u5B9A\u5B9E\u9645\u5E27\u7F13\u5B58\u533A\u7684\u5927\u5C0F\uFF0C\u4F8B\u5982\uFF0CSIM_WIDTH=800\u548CSIM_HEIGHT==480\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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