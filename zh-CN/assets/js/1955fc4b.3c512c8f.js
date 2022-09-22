"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2162],{

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

/***/ 78709:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44035);
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
  id: "color-formats",
  title: "\u8272\u5F69\u683C\u5F0F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/color-formats",
  "id": "basic-concepts/color-formats",
  "title": "\u8272\u5F69\u683C\u5F0F",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/color-formats.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/color-formats",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/color-formats",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "color-formats",
    "title": "\u8272\u5F69\u683C\u5F0F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5D4C\u5165\u5F0F\u7ED8\u56FE\u7CFB\u7EDF",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/embedded-graphics"
  },
  "next": {
    "title": "\u5E27\u7F13\u51B2\u533A",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/framebuffer"
  }
};
const assets = {};



const toc = [{
  value: "\u8272\u5F69",
  id: "color",
  level: 2
}, {
  value: "\u7070\u5EA6",
  id: "grayscale",
  level: 3
}, {
  value: "\u4E0D\u900F\u660E\u5EA6",
  id: "opacity",
  level: 3
}, {
  value: "\u8272\u6DF1",
  id: "color-depth",
  level: 2
}, {
  value: "\u683C\u5F0F",
  id: "formats",
  level: 2
}, {
  value: "\u50CF\u7D20\u8272\u5F69\u683C\u5F0F",
  id: "pixel-color-formats",
  level: 3
}, {
  value: "RGB888",
  id: "rgb888",
  level: 4
}, {
  value: "RGB565",
  id: "rgb565",
  level: 4
}, {
  value: "RGBx2222, xRGB2222, BGRx2222, xBGR2222",
  id: "rgbx2222-xrgb2222-bgrx2222-xbgr2222",
  level: 4
}, {
  value: "GRAY4, GRAY2, BW",
  id: "gray4-gray2-bw",
  level: 4
}, {
  value: "\u56FE\u50CF\u683C\u5F0F",
  id: "image-formats",
  level: 3
}, {
  value: "Framebuffer formats",
  id: "framebuffer-formats",
  level: 3
}, {
  value: "Byte and pixel order",
  id: "byte-and-pixel-order",
  level: 4
}, {
  value: "\u6587\u672C\u683C\u5F0F",
  id: "text-formats",
  level: 3
}, {
  value: "\u89C6\u89C9\u8D28\u91CF",
  id: "visual-quality",
  level: 2
}, {
  value: "\u6296\u52A8",
  id: "dithering",
  level: 3
}, {
  value: "\u6027\u80FD",
  id: "performance",
  level: 2
}, {
  value: "Alpha \u6DF7\u5408",
  id: "alpha-blending",
  level: 3
}, {
  value: "\u5176\u4ED6\u56FE\u50CF\u683C\u5F0F",
  id: "other-image-formats",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u5F69\u662F\u663E\u793A\u5668\u7684\u50CF\u7D20\u5448\u73B0\u51FA\u7684\u6837\u5B50\u3002 \u8FD9\u4E9B\u8272\u5F69\u6765\u81EA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "framebuffer"
  }), `\u5E27\u7F13\u51B2`), `\u5B58\u50A8\u7684\u503C\u3002 \u5728\u4F20\u7EDF\u610F\u4E49\u4E0A\uFF0C\u7ED8\u56FE\u7CFB\u7EDF\u4E2D\u80FD\u591F\u8868\u73B0\u3001\u4F7F\u7528\u548C\u663E\u793A\u7684\u8272\u5F69\u6570\u91CF\u662F\u6709\u9650\u7684\u3002 \u8FD9\u540C\u6837\u9002\u7528\u4E8ETouchGFX\u548CTouchGFX\u5E94\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E94\u7528\u53EF\u80FD\u6709\u7684\u50CF\u7D20\u8272\u5F69\u6570\u91CF\u4F1A\u5F71\u54CD\u5230\u5E94\u7528\u7684\u8BB8\u591A\u65B9\u9762\u3002 \u4ECE\u663E\u793A\u5668\u4E0A\u770B\u5230\u7684\u5B9E\u9645\u5185\u5BB9\u5230\u5E27\u7F13\u51B2\u6240\u9700\u7684\u5185\u5B58\u6D88\u8017\uFF0C\u4EE5\u53CA\u6574\u4F53\u6027\u80FD\u3002 \u672C\u8282\u5C06\u8FDB\u4E00\u6B65\u4ECB\u7ECDTouchGFX\u4E2D\u7684\u8272\u5F69\u548C\u53EF\u7528\u7684\u8272\u5F69\u683C\u5F0F\uFF0C\u5E76\u6307\u51FA\u5176\u4F18\u7F3A\u70B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color"
  }), `\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u7684\u8272\u5F69\u662F\u7EA2\u3001\u7EFF\u548C\u84DD\u5206\u91CF\u7684\u4E09\u5143\u7EC4\uFF0C\u5373RGB\u8272\u5F69\u3002 \u6BCF\u4E2A\u8272\u5F69\u5206\u91CF\u7684\u8303\u56F4\u4E3A0\u81F3255\u3002 0\u8868\u793A\u8BE5\u5206\u91CF\u65E0\u4F5C\u7528\uFF0C255\u8868\u793A\u8BE5\u5206\u91CF\u5904\u4E8E\u6700\u5927\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5168\u9ED1\u8272\u8868\u793A\u4E3ARGB\u8272\u5F69 (0,0,0)\uFF0C\u5168\u767D\u8272\u8868\u793A\u4E3A (255,255,255)\u3002 \u4EAE\u7EFF\u8272\u4E3A (0,255,0)\uFF0C\u534A\u4EAE\u7EA2\u4E3A (128,0,0)\uFF0C\u6697\u7D2B\u8272\u4E3A (64,0,64)\uFF0C\u8BF8\u5982\u6B64\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb-colors.svg",
    noShadow: "true",
    height: "70",
    mdxType: "Figure"
  }, "\u4E00\u4E9BRGB\u8272\u5F69"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "grayscale"
  }), `\u7070\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7070\u5EA6\u5E94\u7528\u7684\u6240\u6709\u8272\u5F69\u5747\u4E3A\u7070\u8272\uFF0C\u5305\u62EC\u4ECE\u9ED1\u8272\u5230\u767D\u8272\u4E4B\u95F4\u7684\u6240\u6709\u7070\u8272\uFF0C\u56E0\u6B64\u7528\u7070\u8272\u5F3A\u5EA6\uFF08\u800C\u4E0D\u662FRGB\u503C\uFF09\u8868\u793A\u3002 \u53EF\u5C06\u7070\u5EA6\u8272\u5F69\u7406\u89E3\u4E3AR = G = B\u7684RGB\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "opacity"
  }), `\u4E0D\u900F\u660E\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u8003\u8651\u4E3A\u8272\u5F69\u589E\u52A0\u4E00\u4E2A\u63CF\u8FF0\u8272\u5F69\u4E0D\u900F\u660E\u7684\u5206\u91CF\u3002 \u4E0E\u8272\u5F69\u7684\u5176\u4ED6\u5206\u91CF\u4E00\u6837\uFF0C\u4E0D\u900F\u660E\u5EA6\u7684\u8303\u56F4\u4E3A0\u81F3255\u3002 \u6709\u4E0D\u900F\u660E\u5EA6\u7684\u8272\u5F69\u79F0\u4E3ARGBA\u8272\u5F69\u3002 A\u8868\u793Aalpha\uFF0C\u662F\u4E0D\u900F\u660E\u5EA6\u4F7F\u7528\u7684\u4F20\u7EDF\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B8C\u5168\u4E0D\u900F\u660E\u7684\u9ED1\u8272\u8868\u793A\u4E3A (0,0,0,255)\uFF0C\u6709\u4E00\u4E9B\u900F\u660E\u7684\u7EA2\u8272\u8868\u793A\u4E3A (255,0,0,128)\uFF0C\u8BF8\u5982\u6B64\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgba-colors.svg",
    noShadow: "true",
    height: "70",
    mdxType: "Figure"
  }, "\u767D\u8272\u548C\u7070\u8272\u4E4B\u4E0A\u7684\u4E00\u4E9BRGBA\u8272\u5F69"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u8272\u5F69\u5E76\u975E\u5B8C\u5168\u4E0D\u900F\u660E\u65F6\uFF0C\u9700\u5C06\u5B83\u4E0E\u5DF2\u5B58\u5728\u7684\u8272\u5F69\u8FDB\u884C\u6DF7\u5408\u3002 \u8FD9\u79CD\u8272\u5F69\u6DF7\u5408\u79F0\u4E3AAlpha\u6DF7\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\u8272\u6DF1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8272\u6DF1\u662F\u6307\u5E27\u7F13\u51B2\u5B58\u50A8\u7684\u7528\u4E8E\u63CF\u8FF0\u6BCF\u79CD\u8272\u5F69\u7684\u4F4D\u6570\u3002 \u6211\u4EEC\u5C06\u8BE5\u503C\u8868\u793A\u4E3A\u6BCF\u50CF\u7D20\u4F4D\u6570\uFF0C\u7B80\u79F0bpp\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u7684\u4F4D\u6570\u8D8A\u591A\uFF0C\u53EF\u63CF\u8FF0\u7684\u8272\u5F69\u8D8A\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E38\u7528\u7684\u8272\u6DF1\u4E3A24 bpp\u3002 \u7531\u4E8E\u6BCF\u4E00\u4F4D\u90FD\u53EF\u4EE5\u662F\u6709\u6216\u65E0\uFF0C\u8FD9\u8868\u793A\u53EF\u4EE5\u5448\u73B02`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `24`), ` = 16777216\u79CD\u4E0D\u540C\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u4E2A\u8F83\u5C11\u4F7F\u7528\u5F97\u7A0D\u8272\u6DF1\u662F1 bpp\u3002 \u6B64\u8272\u6DF1\u9002\u7528\u4E8E\u9ED1\u767D\u5E94\u7528\uFF0C\u53EA\u80FD\u5448\u73B02`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `1`), ` = 2\u79CD\u4E0D\u540C\u8272\u5F69\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u6301\u4E0B\u5217\u8272\u6DF1\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `32 bpp - 16777216\u79CD\u8272\u5F69\u53CA\u76F8\u5E94\u4E0D\u900F\u660E\u5EA6\u503C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24 bpp - 16777216\u79CD\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16 bpp - 65536\u79CD\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6/8 bpp - 64 colors`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4 bpp - 16\u79CD\u7070\u5EA6\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2 bpp - 4\u79CD\u7070\u5EA6\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1 bpp - 2\u79CD\u7070\u5EA6\u8272\u5F69`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5173\u4E8E\u8272\u5F69\u5206\u91CF\u8303\u56F4\u7684\u6CE8\u91CA\u3002 \u5F53\u4F7F\u7528\u7684\u8272\u6DF1\u5C0F\u4E8E24 bpp\u65F6\uFF0C\u7EA2\u3001\u7EFF\u548C\u84DD\u5206\u91CF\u4E2D\u6BCF\u4E00\u4E2A\u7684\u8303\u56F4\u5E76\u4E0D\u76F4\u63A5\u53D60\u81F3255\u3002 \u4EE516 bpp\u7684\u7EA2\u8272\u5206\u91CF\u4E3A\u4F8B\uFF0C\u8303\u56F4\u4E3A0\u81F331\u3002 \u6211\u4EEC\u5C06\u503C31\u89C6\u4E3A16 bpp\u8272\u6DF1\u65F6\u80FD\u591F\u8868\u73B0\u7684\u6700\u7EA2\u7684\u8272\u5F69\uFF0C\u537324 bpp\u8272\u6DF1\u65F6\u7684\u503C255\u3002 \u4E00\u79CD\u7406\u89E3\u65B9\u5F0F\u662F16 bpp\u8272\u6DF1\u7684\u8272\u5F69\u53EA\u662F24 bpp\u8272\u6DF1\u53EF\u80FD\u8868\u73B0\u7684\u8272\u5F69\u7684\u4E00\u4E2A\u5B50\u96C6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In 6/8 bpp color depts, each pixels uses 6 bits for the color information (2 bits each for red, green, and blue). To simplify the framebuffer access each pixel is increased from 6 bits to 8 bits (1 byte). The extra two bits in the framebuffer are unused.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "formats"
  }), `\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u786E\u5B9A\u8868\u793A\u8272\u5F69\u6240\u9700\u7684\u4F4D\u6570\u540E\uFF0C\u6211\u4EEC\u8FDB\u4E00\u6B65\u7814\u7A76\u4F4D\u7684\u5185\u5BB9\u3002 A color will have some bits describing the red component, some the green and some the blue, but the color depth alone does not specify the order (format) of the bits in a pixel. E.g. blue first, then green, then red, or maybe in the reverse order.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-color-formats"
  }), `\u50CF\u7D20\u8272\u5F69\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u5E94\u7528\u7684\u8272\u6DF1\uFF0C\u53EF\u4F7F\u7528\u67D0\u4E9B\u7279\u5B9A\u7684\u8272\u5F69\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgb888"
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u8272\u6DF1\u4E3A24 bpp\u7684\u8272\u5F69\u7684\u8272\u5F69\u683C\u5F0F\u4E3ARGB888\u3002 \u8FD9\u610F\u5473\u7740\u5BF9\u7EA2\u3001\u7EFF\u548C\u84DD\u5206\u91CF\u4E2D\u7684\u6BCF\u4E00\u4E2A\u4F7F\u75288\u4E2A\u6BD4\u7279\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4EAE\u7D2B\u8272RGB (255,0,255) \u4E3A\u4F8B\uFF0C\u901A\u8FC7\u5C06\u5206\u91CF\u7EC4\u5408\u6210\u4E00\u4E2A\u8272\u5F69\u503C\u6765\u8868\u793A\u8FD9\u79CD\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this format, red is in the highest 8 bits, then green, and blue in the low 8 bit.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgb565"
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5BF916 bpp\u8272\u5F69\u4F7F\u7528\u8272\u5F69\u683C\u5F0FRGB565\uFF0C \u5373\u7EA2\u3001\u7EFF\u548C\u84DD\u8272\u5206\u522B\u4E3A5\u4F4D\u30016\u4F4D\u548C5\u4F4D\u3002 As we have 5 bits for red, fully lit is 31, so the bright purple in code is`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 31 << 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgbx2222-xrgb2222-bgrx2222-xbgr2222"
  }), `RGBx2222, xRGB2222, BGRx2222, xBGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E6 bpp\u8272\u5F69\uFF0CTouchGFX\u652F\u63014\u79CD\u4E0D\u540C\u8272\u5F69\u683C\u5F0F\uFF1ARGBx2222\u3001xRGB2222\u3001BGRx2222\u548CxBGR222\u3002 \u524D\u8FF0\u683C\u5F0F\u4E2D\u4E4B\u6240\u4EE5\u6709x\uFF0C\u662F\u56E0\u4E3A6\u4F4D\u8272\u5F69\u6309\u5B57\u8282\u7684\u5F62\u5F0F\u5B58\u50A8\u3002 \u4E3A\u4E86\u6784\u6210\u5B57\u8282\uFF0C\u75282\u4E2A\u6BD4\u7279\u4F4D\u586B\u5145\u8272\u5F69\u3002 \u540C\u65F6\u63D0\u4F9BRGB\u548CBGR\u662F\u8003\u8651\u5230\u4E00\u4E9B\u663E\u793A\u5668\u7684\u9700\u8981\uFF0C\u8FD9\u6837\u5219\u65E0\u9700\u5728\u5411\u663E\u793A\u5668\u53D1\u9001\u50CF\u7D20\u524D\u8F6C\u6362\u50CF\u7D20\u3002 \u5728RGBx2222\u6A21\u5F0F\u4E0B\uFF0C\u8868\u793A\u4EAE\u9EC4\u8272\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "gray4-gray2-bw"
  }), `GRAY4, GRAY2, BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u6BCF\u79CD\u7070\u5EA6\u8272\u6DF1\uFF0CTouchGFX\u90FD\u76F8\u5E94\u7684\u652F\u6301\u5176\u5BF9\u5E94\u7684\u8272\u5F69\u683C\u5F0F\u3002 4 bpp\u7684\u8272\u5F69\u683C\u5F0F\u8868\u793A\u4E3AGRAY4\uFF0C2 bpp\u4E3AGRAY2\uFF0C1 bpp\u4E3ABW\uFF08\u8868\u793A\u9ED1\u8272\u548C\u767D\u8272\uFF09\u3002 \u5BF9\u4E8E4 bpp\uFF0C\u5168\u767D\u8272\u4E3A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t whiteGRAY4 = 15;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u6709\u4E00\u9879\u8F85\u52A9\u529F\u80FD\uFF0C\u53EF\u8FD4\u56DE\u8272\u5F69\u5728\u5F53\u524D\u8272\u5F69\u683C\u5F0F\u4E0B\u7684\u6B63\u786E\u8868\u793A\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
...
aColor = Color::getColorFromRGB(255,0,128);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-formats"
  }), `\u56FE\u50CF\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u50CF\u662F\u5927\u591A\u6570UI\u5E94\u7528\u7684\u91CD\u8981\u90E8\u5206\uFF0C\u56FE\u50CF\u7531\u8272\u5F69\u586B\u5145\u800C\u6210\u3002 \u5728TouchGFX\u4E2D\uFF0C\u56FE\u50CF\u5B58\u50A8\u5728\u5B58\u50A8\u5668\u4E2D\uFF0C\u7531\u7279\u5B9A\u683C\u5F0F\u7684\u8272\u5F69\u586B\u5145\u800C\u6210\u3002 \u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u56FE\u50CF\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#pixel-color-formats"
  }), `\u652F\u6301\u7684\u50CF\u7D20\u8272\u5F69\u683C\u5F0F`), `\u4E2D\u7684\u4E00\u79CD\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u56FE\u50CF\u683C\u5F0F\u3002 \u5728\u7ED8\u5236\u524D\uFF0C\u7279\u5B9A\u56FE\u50CF\u8272\u5F69\u683C\u5F0F\u4E0B\u7684\u56FE\u50CF\u4E2D\u7684\u50CF\u7D20\u4F1A\u88AB\u8F6C\u6362\u4E3A\u5408\u9002\u7684\u50CF\u7D20\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u56FE\u50CF\u8272\u5F69\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF8\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\u7D22\u5F15\u683C\u5F0F\uFF0CARGB8888\u8C03\u8272\u677F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF8\u4F4D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\u7D22\u5F15\u683C\u5F0F\uFF0CRGB888\u8C03\u8272\u677F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB666`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF6\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u4F4D\uFF0C\u7EA2\u82725\u4F4D\u3001\u7EFF\u82726\u4F4D\u548C\u84DD\u82725\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\u7D22\u5F15\u683C\u5F0F\uFF0CRGB565\u8C03\u8272\u677F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u4F4D\u7070\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\u4F4D\u7070\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u4F4D\u7070\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW_RLE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u4F4D\u7070\u5EA6\u8FD0\u884C\u957F\u5EA6\u7F16\u7801`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E9B\u56FE\u50CF\u683C\u5F0F\u4E2D\u7684\u4E00\u4E9B\u683C\u5F0F\uFF08L8\uFF09\u6309\u7167\u8272\u5F69\u67E5\u627E\u8868\uFF08\u79F0\u4E3ACLUT\uFF09\u6765\u5448\u73B0\u76F8\u5173\u56FE\u50CF\u5E76\u7D22\u5F15\u5230\u8BE5\u8868\u4E2D\u3002 L8\u56FE\u50CF\u4E2D\u8272\u5F69\u6570\u91CF\u7684\u6700\u5927\u53EF\u80FD\u503C\u4E3A2`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `8`), ` = 256\u3002 L8\u683C\u5F0F\u5360\u7528\u7684\u7A7A\u95F4\u6BD4\u975EL8\u683C\u5F0F\u5C11\uFF0C\u4EE5\u5305\u542B200\u79CD\u4E0D\u540C\u8272\u5F69\u7684100x100\u56FE\u50CF\u4E3A\u4F8B\uFF0C\u5B58\u50A8\u4E3AARGB8888\u683C\u5F0F\u65F6\u7684\u7A7A\u95F4\u5360\u7528\u91CF\u4E3A100x100x32\u4F4D = 40000\u5B57\u8282\uFF0C\u5B58\u50A8\u4E3AL8_ARGB8888\u683C\u5F0F\u65F6\u4E3A100x100x8\u4F4D + 200x32\u4F4D = 10800\u5B57\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u50CF\u683C\u5F0FBW_RLE\u6309\u8FDE\u7EED\u7684\u9ED1\u8272\u548C\u767D\u8272\u5B58\u50A8\u8272\u5F69\uFF0C\u800C\u4E0D\u662F\u5B58\u50A8\u5355\u4E00\u50CF\u7D20\u8272\u5F69\u3002 \u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u79CD\u683C\u5F0F\u4E5F\u53EF\u4EE5\u66F4\u9AD8\u6548\u5730\u5229\u7528\u5B58\u50A8\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u4F59\u683C\u5F0F\u4E0E\u4EE5\u4E0A\u50CF\u7D20\u8272\u5F69\u683C\u5F0F\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-formats"
  }), `Framebuffer formats`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Not all image formats are available as framebuffer formats. The L8 formats cannot be used as framebuffer formats in TouchGFX. This is because it is not practical blend to two images in the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "byte-and-pixel-order"
  }), `Byte and pixel order`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The 24 bits format RGB888, and 32 bits format ARGB888, is often accessed using a byte pointer. When doing that it is necessary to understand that the pixels are stored in little endian order.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Take as an example the 32 bits color 0xFFFF7700 (alpha = 0xFF, red = 0xFF, green = 0x77, blue = 0x00). When the color is in a 32 bit variable or register, the value is 0xFFFF7700. When the color is stored in memory the bytes stored are { 0x00, 0x77, 0xFF, 0xFF }. This corresponds to the order BGRA.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Similarly, the 16 bits format, RGB565, is always accessed through a 16 bit pointer, so the byte order is not interesting, but it is swapped in memory.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For the 8 bits formats, e.g. ARGB2222, the color fits into a byte (alpha in the two highest bits), which is stored without change.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The smaller formats, GRAY4, GRAY2, and BW, can be stored in two orders. The low bits can be the leftmost pixel or the rightmost pixel. If the low bits are the leftmost we call this LSB-mode, otherwise it is MSB-mode.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Framebuffer format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Order`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF8\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `XRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32 bits, 8 bits per component, alpha byte ignored`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF8\u4F4D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u4F4D\uFF0C\u7EA2\u82725\u4F4D\u3001\u7EFF\u82726\u4F4D\u548C\u84DD\u82725\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u6BCF\u4E2A\u5206\u91CF2\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u4F4D\u7070\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\u4F4D\u7070\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u4F4D\u7070\u5EA6`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-formats"
  }), `\u6587\u672C\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6587\u672C\uFF0C\u66F4\u51C6\u786E\u5730\u8BF4\u662F\u5B57\u5F62\uFF0C\u4E5F\u4EE5\u7279\u5B9A\u8272\u5F69\u683C\u5F0F\u5B58\u50A8\u5728\u5B58\u50A8\u5668\u4E2D\u3002 TouchGFX\u4E2D\u53EF\u4F9B\u4F7F\u7528\u7684\u6587\u672C\u8272\u5F69\u683C\u5F0F\u4E3A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6587\u672C\u8272\u5F69\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\u4F4D\uFF0C\u4E0D\u542B\u900F\u660E\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u4F4D\uFF0C\u4E0D\u542B\u900F\u660E\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\u4F4D\uFF0C\u4E0D\u542B\u900F\u660E\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u4F4D\uFF0C\u4E0D\u542B\u900F\u660E\u5EA6`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u5F62\u683C\u5F0F\u72B9\u5982\u5C0F\u5E45\u56FE\u50CF\uFF0C\u6BCF\u4E2A\u8272\u5F69\u6761\u76EE\u90FD\u5B58\u50A8\u4E86\u6BCF\u4E2A\u50CF\u7D20\u7684\u4E0D\u900F\u660E\u5EA6\u3002 \u56E0\u6B64\uFF0C\u4E4B\u540E\u4E0D\u4EC5\u80FD\u5E94\u7528\u5B9E\u9645\u8272\u5F69\u4EE5\u53CA\u7EA2\u3001\u7EFF\u548C\u84DD\u5206\u91CF\uFF0C\u8FD8\u80FD\u7ED8\u5236\u5982\u5B58\u50A8\u5B57\u5F62\u201CA\u201D\u7684\u84DD\u8272\u548C\u7EA2\u8272\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E2A\u5B57\u5F62\u4F7F\u7528\u7684\u4F4D\u6570\u8D8A\u591A\uFF0C\u901A\u5E38\u5C31\u4F1A\u663E\u5F97\u8D8A\u5E73\u6ED1\u548C\u7F8E\u89C2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "visual-quality"
  }), `\u89C6\u89C9\u8D28\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5D4C\u5165\u5F0F\u56FE\u5F62\uFF0C\u6211\u4EEC\u5E0C\u671B\u83B7\u5F97\u6700\u9AD8\u89C6\u89C9\u8D28\u91CF\uFF0C\u4F46\u540C\u65F6\u4E5F\u9700\u8003\u8651\u5185\u5B58\u7684\u6D88\u8017\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u901A\u5E38\u8D8B\u5411\u4E8E\u4F7F\u7528RGB565\u8272\u5F69\u683C\u5F0F\uFF0C\u800C\u4E0D\u662F\u5185\u5B58\u6D88\u8017\u91CF\u66F4\u5927\u7684RGB888\u8272\u5F69\u683C\u5F0F\uFF0C\u4E00\u822C\u800C\u8A00\uFF0C\u5E94\u5728\u8003\u8651\u5B58\u50A8\u9700\u6C42\u7684\u540C\u65F6\u9009\u62E9\u89C6\u89C9\u8D28\u91CF\u6700\u9AD8\u7684\u8272\u5F69\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dithering"
  }), `\u6296\u52A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0D\u540C\u8272\u5F69\u683C\u5F0F\u4E0B\u5448\u73B0\u56FE\u50CF\u65F6\uFF0CTouchGFX\u4F7F\u7528\u6296\u52A8\u6280\u672F\u6765\u6539\u5584\u56FE\u50CF\u7684\u89C6\u89C9\u8D28\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6296\u52A8\u662F\u4E00\u9879\u5E7F\u4E3A\u4EBA\u77E5\u7684\u6280\u672F\uFF0C\u5B83\u8BA9\u56FE\u50CF\u7684\u8272\u5F69\u770B\u8D77\u6765\u6BD4\u5B9E\u9645\u8272\u5F69\u66F4\u4E30\u5BCC\u3002 \u8FD9\u662F\u901A\u8FC7\u589E\u52A0\u56FE\u50CF\u8272\u5F69\u7684\u566A\u58F0\u6765\u5B9E\u73B0\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982\uFF0C\u5728\u5C06RGB888\u56FE\u50CF\u8F6C\u6362\u4E3ARGB565\u56FE\u50CF\u65F6\uFF0C\u4E0D\u662F\u7B80\u5355\u5730\u5BF9\u6BCF\u4E2A\u8272\u5F69\u5206\u91CF\u7684\u4F4E\u4F4D\u8FDB\u884C\u65A9\u6CE2\uFF0C\u800C\u662F\u5728\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u4E3A\u5F97\u5230\u7684\u6BCF\u79CD\u8272\u5F69\u6DFB\u52A0\u4E00\u4E9B\u566A\u58F0\uFF0C\u4ECE\u800C\u4F7F\u8F6C\u6362\u540E\u7684\u56FE\u50CF\u770B\u8D77\u6765\u4E0E\u539F\u59CBRGB888\u56FE\u50CF\u76F8\u4F3C\u4F46\u66F4\u4E30\u5BCC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7528\u56FE\u50CF\u800C\u4E0D\u662F\u8BED\u8A00\u6765\u8868\u793A\uFF0C\u6211\u4EEC\u6709\u4E00\u5F20\u539F\u59CBRGB888\u56FE\u50CF\u548C\u8BB8\u591A\u8F6C\u6362\u540E\u7684\u56FE\u50CF\u3002 \u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684RGB565\u683C\u5F0F\u56FE\u50CF\u3001xRGB2222\u683C\u5F0F\u56FE\u50CF\u548CGRAY4\u683C\u5F0F\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb888.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u539F\u59CBRGB888\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb565.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684RGB565\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/xrgb2222.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684xRGB2222\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/gray4.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684GRAY4\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u6B64\u53EF\u89C1\uFF0C\u6296\u52A8\u53EF\u663E\u8457\u6539\u5584\u56FE\u50CF\u7684\u611F\u77E5\u8D28\u91CF\u3002 \u5728\u8FD1\u8DDD\u79BB\u89C2\u5BDF\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684RGB565\u56FE\u50CF\u65F6\uFF0C\u53EF\u4EE5\u770B\u5230\u6709\u6296\u52A8\u7684\u56FE\u50CF\u4E0E\u539F\u56FE\u50CF\u51E0\u4E4E\u5B8C\u5168\u76F8\u4F3C\uFF0C\u800C\u6CA1\u6709\u6296\u52A8\u7684\u56FE\u50CF\u7684\u4E00\u4E9B\u533A\u57DF\u5219\u5B58\u5728\u660E\u663E\u7684\u8272\u5E26\u3002 \u8FD9\u8868\u660E\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u752816\u4F4D\u8272\u5F69\u8DB3\u4EE5\u83B7\u5F97\u770B\u8D77\u6765\u4E0D\u9519\u7684\u754C\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u9700\u8981\u663E\u793A\u7684\u56FE\u50CF\u8D44\u6E90\u7684\u6E10\u53D8\u660E\u663E\uFF0C\u5373\u4F7F\u5728\u4F7F\u7528\u4E86\u6296\u52A8\u7684\u56FE\u50CF\u4E2D\uFF0C\u4E5F\u4F1A\u770B\u5230\u4E00\u4E9B\u8272\u5E26\u3002 \u4E0B\u9762\u662F\u4E24\u4E2A\u793A\u4F8B\u3002 \u4ECERGB888 (64,190,222) \u5230\u9ED1\u8272\u7684\u5E26\u84DD\u8272\u7684\u6E10\u53D8\u53CA\u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684RGB565\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/bluish.png",
    noShadow: "true",
    width: "800",
    mdxType: "Figure"
  }, "\u539F\u59CBRGB888\u548C\u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684RGB565\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u5E45\u4ECE (255,0,0) \u5230\u9ED1\u8272\u7684\u7EA2\u8272\u6E10\u53D8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/red.png",
    noShadow: "true",
    width: "800",
    mdxType: "Figure"
  }, "\u539F\u59CBRGB888\u548C\u8F6C\u6362\u540E\u7684\u6709\u548C\u6CA1\u6709\u6296\u52A8\u7684RGB565\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD1\u8DDD\u79BB\u89C2\u5BDF\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6709\u6296\u52A8\u548C\u65E0\u6296\u52A8\u7684RGB565\u56FE\u50CF\u4E2D\u5747\u5B58\u5728\u8272\u5E26\u3002 \u7EA2\u8272\u56FE\u50CF\u4E2D\u7684\u8272\u5E26\u6700\u4E3A\u660E\u663E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u52A1\u5FC5\u5BC6\u5207\u6CE8\u610F\u6240\u5F97\u56FE\u50CF\u548C\u8272\u5F69\u683C\u5F0F\uFF0C\u5FC5\u8981\u65F6\u4FEE\u6539\u539F\u59CB\u56FE\u50CF\u6216\u9009\u62E9\u5176\u4ED6\u8272\u5F69\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BA8\u8BBA\u7684\u6240\u6709\u56FE\u50CF\u683C\u5F0F\u5747\u9488\u5BF9\u7ED8\u5236\u7684\u201C\u6613\u7528\u6027\u201D\u8FDB\u884C\u4E86\u4F18\u5316\u3002 \u8FD9\u610F\u5473\u7740\u53EF\u4EE5\u5C06\u56FE\u50CF\u6216\u591A\u6216\u5C11\u5730\u590D\u5236\u5230\u5E27\u7F13\u51B2\uFF0C\u65E0\u9700\u8FDB\u884C\u5927\u91CF\u8F6C\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u662F\u6709\u610F\u4E3A\u4E4B\uFF0C\u662FTouchGFX\u80FD\u591F\u5728\u5FAE\u63A7\u5236\u5668\u4E0A\u83B7\u5F97\u6D41\u7545\u56FE\u5F62\u7684\u539F\u56E0\u4E4B\u4E00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7528TouchGFX\u8BBE\u8BA1UI\u65F6\u53EF\u4F7F\u7528.png\u56FE\u50CF\uFF0C\u5728\u7F16\u8BD1\u65F6\uFF0C\u4F1A\u5C06\u6BCF\u4E00\u5E45\u56FE\u50CF\u8F6C\u6362\u4E3A\u4E0A\u8FF0\u9AD8\u6548\u7684\u56FE\u50CF\u683C\u5F0F\u4E2D\u7684\u4E00\u79CD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "alpha-blending"
  }), `Alpha \u6DF7\u5408`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD0\u884C\u65F6\u95F4\uFF0C\u56FE\u50CF\u6570\u636E\u7684\u590D\u5236\u662F\u901A\u8FC7\u5E38\u89C4CPU\u590D\u5236\u64CD\u4F5C\u6216\u4F7F\u7528MCU\u7279\u6027\u6765\u5B8C\u6210\u7684\u3002 \u5982\u679C\u56FE\u50CF\u5305\u542B\u4E0D\u5B8C\u5168\u900F\u660E\u6216\u4E0D\u900F\u660E\u7684\u50CF\u7D20\uFF0C\u5219\u9700\u8981\u7528alpha\u6DF7\u5408\u6280\u672F\u5C06\u50CF\u7D20\u6DF7\u5408\u5230\u80CC\u666F\u4E0A\u3002 \u5728\u4E00\u4E9BSTM32 MCU\u4E2D\uFF0C\u786C\u4EF6\u652F\u6301\u8FD9\u79CD\u6DF7\u5408\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "other-image-formats"
  }), `\u5176\u4ED6\u56FE\u50CF\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u5728\u8FD0\u884C\u65F6\u95F4\u652F\u6301\u5176\u4ED6\u56FE\u50CF\u683C\u5F0F\uFF0C\u5982\u538B\u7F29\u56FE\u50CF\u683C\u5F0F.jpg\u6216.png\uFF0C\u53EF\u4EE5\u5229\u7528TouchGFX `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  }), `\u5BF9\u52A8\u6001\u4F4D\u56FE\u7684\u652F\u6301\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://en.wikipedia.org/wiki/Color_depth",
    mdxType: "Link"
  }, "\u8272\u6DF1"), "\u7684Wikipedia\u6587\u7AE0\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);