"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[859],{

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

/***/ 17079:
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
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82985);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65407);
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
  id: "canvas-view",
  title: "\u756B\u5E03\u8996\u5716"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/canvas-view",
  "id": "development/ui-development/designer-user-guide/canvas-view",
  "title": "\u756B\u5E03\u8996\u5716",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/canvas-view",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/canvas-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-view",
    "title": "\u756B\u5E03\u8996\u5716"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E3B\u8996\u7A97",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/main-window"
  },
  "next": {
    "title": "\u5716\u50CF\u8996\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/images-view"
  }
};
const assets = {};





const toc = [{
  value: "\u5DE6\u5074\u908A\u6B04",
  id: "left-side-bar",
  level: 2
}, {
  value: "Screens &amp; Custom Containers",
  id: "screens--custom-containers",
  level: 3
}, {
  value: "\u756B\u5E03",
  id: "canvas",
  level: 2
}, {
  value: "\u5C0F\u5DE5\u5177\u529F\u80FD\u8868",
  id: "widget-menu",
  level: 3
}, {
  value: "\u5C0F\u5DE5\u5177\u9078\u64C7",
  id: "widget-selection",
  level: 3
}, {
  value: "\u5C0F\u5DE5\u5177\u5B9A\u4F4D",
  id: "widget-positioning",
  level: 3
}, {
  value: "\u5C0F\u5DE5\u5177\u9806\u5E8F\u63A7\u5236\u9805",
  id: "widget-order-controls",
  level: 3
}, {
  value: "\u5167\u5BB9\u4FEE\u526A\u63A7\u5236",
  id: "content-clipping-control",
  level: 3
}, {
  value: "\u6B77\u53F2\u63A7\u5236\u9805",
  id: "history-controls",
  level: 3
}, {
  value: "\u7E2E\u653E\u63A7\u5236\u9805",
  id: "zoom-controls",
  level: 3
}, {
  value: "\u53F3\u5074\u908A\u6B04",
  id: "right-side-bar",
  level: 2
}, {
  value: "Properties\u5C6C\u6027",
  id: "properties",
  level: 3
}, {
  value: "Interactions\u4EA4\u4E92",
  id: "interactions",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u756B\u5E03\u662F\u7528\u65BC\u69CB\u5EFA\u61C9\u7528\u5716\u5F62\u90E8\u4EF6\u7684\u8996\u5716\uFF0C\u5B83\u63D0\u4F9B\u904B\u884C\u6642\u4ECB\u9762\u5916\u89C0\u7684\u8996\u89BA\u5448\u73FE\u3002 \u9019\u88E1\u63CF\u8FF0\u52D5\u614B\u65B9\u9762\uFF0C\u5982\u52D5\u756B\u548C\u7CFB\u7D71\u4E4B\u9593\u7684\u76F8\u4E92\u4F5C\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u7684\u756B\u5E03\u8996\u5716"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "left-side-bar"
  }), `\u5DE6\u5074\u908A\u6B04`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5DE6\u5074\u7684\u5074\u908A\u6B04\u5305\u542B\u4E00\u500B\u7D22\u5F15\u6A19\u7C64\u63A7\u5236\u9805\uFF0C\u53EF\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#screens--custom-containers"
  }), `screen& Custom Containers`), `\u4E4B\u9593\u5C0E\u822A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens--custom-containers"
  }), `Screens & Custom Containers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201CScreens \u201D\u9078\u9805\u5361\u548C\u201CCustom Containers\u201D\u9078\u9805\u5361\u90FD\u5305\u542B\u6A39\u72C0\u7D50\u69CB\uFF0C\u63D0\u4F9B\u6BCF\u500Bscreen/custom container\u4E2D\u5C0F\u5DE5\u5177\u7684\u7E3D\u89BD\uFF0C\u901A\u904E\u9EDE\u64CA\u5C0F\u5DE5\u5177\u540D\u7A31\u65C1\u908A\u7684V\u5F62\u6A19\u8A18\uFF0C\u53EF\u4EE5\u6298\u758A\u6A39\u72C0\u4E2D\u6BCF\u500B\u53EF\u80FD\u5305\u542B\u5176\u4ED6\u5C0F\u5DE5\u5177\u7684\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u66F4\u6539screen/custom container\u548C\u5176\u4E2D\u5C0F\u5DE5\u5177\u7684\u9806\u5E8F\uFF0C\u53EF\u5C07\u5B83\u5011\u62D6\u653E\u5230\u5176\u4ED6\u87A2\u5E55\u3001\u81EA\u8A02\u5BB9\u5668\u548C\u5C0F\u5DE5\u5177\u4E4B\u4E0B\u6216\u4E4B\u4E0A\uFF0C\u4E5F\u53EF\u901A\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-order-controls"
  }), `widget order controls`), `\u4F86\u66F4\u6539\u3002 \u66F4\u6539\u5C0F\u5DE5\u5177\u9806\u5E8F\uFF0C\u6C7A\u5B9A\u5C07\u54EA\u500B\u5C0F\u5DE5\u5177\u653E\u5728\u5176\u4ED6\u5C0F\u5DE5\u5177\u4E4B\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u5C6C\u65BC\u5BB9\u5668\u985E\u578B\u7684\u5C0F\u5DE5\u5177\uFF0C\u53EF\u4EE5\u70BA\u5176\u6DFB\u52A0\u5B50\u5DE5\u5177\uFF0C\u65B9\u6CD5\u662F\u5728\u6A39\u72C0\u6AA2\u8996\u4E2D\u5C07\u5C0F\u5DE5\u5177\u62D6\u653E\u5230\u5176\u4ED6\u5C0F\u5DE5\u5177\u4E4B\u4E0A\u3002 \u6B64\u5916\uFF0C\u9084\u53EF\u4EE5\u5C07\u5C0F\u5DE5\u5177\u5F9E\u4E00\u500B\u87A2\u5E55\u62D6\u653E\u5230\u53E6\u4E00\u500B\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9EDE\u64CA\u5C0F\u5DE5\u5177\u7684\u540C\u6642\u6309\u4F4FCTRL\u9375\u53EF\u4EE5\u9078\u64C7\u591A\u500B\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u201C+\u201D\u6309\u9215\u53EF\u5C07Screens/Custom Containers\u6DFB\u52A0\u5230\u5C08\u6848\u3002 \u53EF\u4EE5\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `Widget Menu`), `\u5C07\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0\u5230\u87A2\u5E55\u548C\u5176\u4ED6\u81EA\u8A02\u5BB9\u5668\uFF0C\u53EF\u4EE5\u5728\u5B83\u5011\u81EA\u5DF1\u7684\u540D\u70BA\u201CCustom Containers\u201D\u7684\u985E\u5225\u4E2D\u627E\u5230\u5B83\u5011\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u87A2\u5E55\u3001\u81EA\u8A02\u5BB9\u5668\u548C\u5C0F\u5DE5\u5177\u90FD\u53EF\u6309\u53F3\u9375\u547C\u53EB\u529F\u80FD\u8868\uFF0C\u60A8\u53EF\u4EE5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u91CD\u65B0\u547D\u540D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F2`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u522A\u9664\u5C0F\u5DE5\u5177`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `DEL`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8907\u88FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8CBC\u4E0A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + V`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0A\u79FB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0B\u79FB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + B`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7DE8\u8F2F\u539F\u59CB\u6A94\u6848*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` `, `*`, `\u53EA\u80FD\u7528\u65BC\u87A2\u5E55\u548C\u81EA\u8A02\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    width: "40%",
    height: "40%",
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",
    mdxType: "LoopVideo"
  }, "\u5DE6\u5074\u908A\u6B04\u4E2D\u7684\u87A2\u5E55\u6A39\u72C0\u5716"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas"
  }), `\u756B\u5E03`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8996\u5716\u9802\u90E8\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `Widget Menu`), `\uFF0C\u5176\u4E2D\u5305\u542B\u6240\u6709\u53EF\u7528\u7684\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8996\u5716\u4E2D\u5FC3\u5305\u542B\u756B\u5E03\uFF0C\u986F\u793A\u4E86\u7576\u524D\u9078\u4E2D\u7684\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8996\u5716\u5E95\u90E8\u5305\u542B\u5404\u7A2E\u63A7\u5236\u9805\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#zoom-controls"
  }), `\u7E2E\u653E\u63A7\u5236\u9805`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#content-clipping-control"
  }), `\u5167\u5BB9\u4FEE\u526A\u63A7\u5236`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",
    mdxType: "LoopVideo"
  }, "\u756B\u5E03\u8996\u5716\u4E2D\u7684\u756B\u5E03"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-menu"
  }), `\u5C0F\u5DE5\u5177\u529F\u80FD\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u5C0F\u5DE5\u5177\u529F\u80FD\u8868\u4E2D\u7684\u201CAll widget group\u201D\u9078\u9805\u5361\u6216\u5176\u6309\u4E0B\u5176\u5FEB\u901F\u9375 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `A`), ` \u6253\u958B\u5305\u542B\u5DF2\u5206\u985E\u7684\u6240\u6709\u53EF\u7528\u5C0F\u5DE5\u5177\u7684\u5217\u8868\u3002 \u9EDE\u64CA\u7279\u5B9A\u7684\u5C0F\u5DE5\u5177\u7D44\u9078\u9805\u5361\uFF0C\u6253\u958B\u8A72\u7279\u5B9A\u5206\u985E\u5305\u542B\u7684\u53EF\u7528\u5C0F\u5DE5\u5177\u7684\u5217\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u4E00\u500B\u5C0F\u5DE5\u5177\uFF0C\u53EF\u5C07\u5176\u6DFB\u52A0\u5230\u7576\u524D\u9078\u4E2D\u4E26\u986F\u793A\u7684\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u756B\u5E03\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201CAll widget group\u201D\u9084\u5305\u542B\u4E00\u500B\u641C\u7D22\u6B04\u4F4D\uFF0C\u5B83\u63A1\u7528\u6A21\u7CCA\u641C\u7D22\u6280\u8853\uFF0C\u5E6B\u52A9\u7528\u6236\u67E5\u627E\u8207\u641C\u7D22\u8F38\u5165\u5339\u914D\u5EA6\u6700\u9AD8\u7684\u5C0F\u5DE5\u5177\u3002 \u6700\u4F73\u7D50\u679C\u5C07highlight\u986F\u793A\u3002 \u8209\u4F8B\u4F86\u8AAA\uFF0C\u7531\u65BC\u4F7F\u7528\u6A21\u7CCA\u641C\u7D22\uFF0C\u53EF\u4EE5\u8F38\u5165\u201Cbwl\u201D\u4E26\u5F97\u5230\u201CButton With Label\u201D\uFF08\u5E36\u6A19\u7C64\u7684\u6309\u9215\uFF09\uFF0C\u56E0\u70BA\u7C21\u5BEB\u662F\u5176\u4E2D\u4E00\u500B\u56E0\u5B50\u3002 \u5728\u641C\u7D22\u6B04\u4F4D\u4E2D\u8F38\u5165\u5167\u5BB9\u5F8C\uFF0C\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Enter\u9375`), ` \u5C07\u9AD8\u4EAE\u986F\u793A\u7684\u5C0F\u5DE5\u5177\u63D2\u5165\u756B\u5E03\u4E26\u95DC\u9589\u201C\u5C0F\u5DE5\u5177\u529F\u80FD\u8868\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",
    mdxType: "LoopVideo"
  }, "\u201C\u756B\u5E03\u201D\u8996\u5716\u4E2D\u7684\u201C\u5C0F\u5DE5\u5177\u529F\u80FD\u8868\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-selection"
  }), `\u5C0F\u5DE5\u5177\u9078\u64C7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u9762\u7684\u52D5\u756B\u6240\u793A\uFF0C\u53EA\u9700\u5728\u756B\u5E03\u4E0A\u9EDE\u64CA\u5C0F\u5DE5\u5177\u5373\u53EF\u9078\u4E2D\u5B83\u3002 \u9084\u53EF\u4EE5\u591A\u9078\uFF0C\u65B9\u6CD5\u662F\u5728\u6309\u4F4F\u9375\u76E4\u4E0A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl\u9375`), ` \u7684\u540C\u6642\u6309\u4E00\u4E0B\u591A\u500B\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-positioning"
  }), `\u5C0F\u5DE5\u5177\u5B9A\u4F4D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u9762\u7684\u52D5\u756B\u6240\u793A\uFF0C\u53EF\u901A\u904E\u62D6\u62FD\u5C0F\u5DE5\u5177\u7684\u7E2E\u7565\u5716\u4F86\u79FB\u52D5\u5B83\u548C\u6539\u8B8A\u5B83\u7684\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u9084\u53EF\u4EE5\u7528\u65B9\u5411\u9375\u5C07\u9078\u4E2D\u7684\u5C0F\u5DE5\u5177\u79FB\u52D51\u500B\u50CF\u7D20\u3002 \u5728\u4F7F\u7528\u65B9\u5411\u9375\u7684\u540C\u6642\u6309\u4F4F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl\u9375`), ` \u53EF\u4EE5\u5C07\u9078\u4E2D\u7684\u5C0F\u5DE5\u5177\u79FB\u52D510\u500B\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-order-controls"
  }), `\u5C0F\u5DE5\u5177\u9806\u5E8F\u63A7\u5236\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0F\u5DE5\u5177\u7684\u9806\u5E8F\u53EF\u901A\u904E\u201C\u5411\u524D\u201D\u548C\u201C\u5411\u5F8C\u201D\u5FEB\u6377\u65B9\u5F0F\u9032\u884C\u8ABF\u6574\uFF0C\u5B83\u5011\u5728\u201C\u87A2\u5E55\u201D\u6216\u201C\u81EA\u8A02\u5BB9\u5668\u201D\u6A39\u4E2D\u7684\u9806\u5E8F\u4E5F\u6703\u96A8\u4E4B\u6539\u8B8A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5411\u524D\u201D\u7684\u89F8\u767C\u65B9\u5F0F\u662F\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + F`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5411\u5F8C\u201D\u7684\u89F8\u767C\u65B9\u5F0F\u662F\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + B`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "content-clipping-control"
  }), `\u5167\u5BB9\u4FEE\u526A\u63A7\u5236`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u756B\u5E03\u4E0A\uFF0C\u87A2\u5E55\u3001\u81EA\u8A02\u5BB9\u5668\u548C\u5BB9\u5668\u985E\u578B\u5C0F\u5DE5\u5177\u7684\u5B50\u5DE5\u5177\u7684\u908A\u754C\u4E4B\u5916\u7684\u5C0F\u5DE5\u5177\u6703\u88AB\u4FEE\u526A\u3002 \u5167\u5BB9\u4FEE\u526A\u63A7\u5236\u5728\u5B8C\u5168\u4FEE\u526A\u5C0F\u5DE5\u5177\u548C\u90E8\u5206\u986F\u793A\u5C0F\u5DE5\u5177\u4E4B\u9593\u5207\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.png",
    mdxType: "Figure"
  }, "\u756B\u5E03\u8996\u5716\u4E2D\u7684\u201C\u986F\u793A/\u96B1\u85CF\u4FEE\u526A\u5167\u5BB9\u201D\u63A7\u5236"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u5716\u4E2D\uFF0C\u6709\u4E00\u500B\u4E00\u534A\u4F4D\u65BC\u87A2\u5E55\u908A\u754C\u4E4B\u5916\u7684\u65B9\u6846\uFF0C\u7576\u5167\u5BB9\u4FEE\u526A\u63A7\u5236\u8A2D\u7F6E\u70BA\u986F\u793A\u4FEE\u526A\u904E\u7684\u5C0F\u5DE5\u5177\u6642\uFF0C\u65B9\u6846\u5C07\u4E0D\u5B8C\u5168\u986F\u793A\uFF0C\u800C\u662F\u5C07\u908A\u754C\u4E4B\u5916\u7684\u90E8\u5206\u53BB\u98FD\u548C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.png",
    mdxType: "Figure"
  }, "\u986F\u793A\u548C\u96B1\u85CF\u4FEE\u526A\u5167\u5BB9\u6642\u65B9\u6846\u5C0F\u5DE5\u5177\u7684\u5916\u89C0\u5B58\u5728\u5DEE\u7570"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "history-controls"
  }), `\u6B77\u53F2\u63A7\u5236\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu"
  }), `File Menu`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu#edit"
  }), `Edit`), `\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C07\u5728\u756B\u5E03\u4E0A\u57F7\u884C\u7684\u4FEE\u6539\u6B77\u53F2\u64A4\u92B7\u548C\u91CD\u505A\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7CFB\u7D71\u8A18\u9304\u4E86\u6BCF\u500B\u87A2\u5E55\u548C\u81EA\u8A02\u5BB9\u5668\u7684\u6B77\u53F2\uFF0C\u70BA\u4E86\u64A4\u92B7\u6216\u91CD\u505A\u5728\u7279\u5B9A\u87A2\u5E55\u4E0A\u57F7\u884C\u7684\u4FEE\u6539\uFF0C\u8A72\u7279\u5B9A\u87A2\u5E55\u5FC5\u9808\u986F\u793A\u5728\u756B\u5E03\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B77\u53F2\u63A7\u5236\u9805\u7684\u53E6\u4E00\u7A2E\u89F8\u767C\u65B9\u5F0F\u662F\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + Z`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + Y`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "zoom-controls"
  }), `\u7E2E\u653E\u63A7\u5236\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u756B\u5E03\u7684\u7E2E\u653E\u6C34\u6E96\u53EF\u901A\u904E\u756B\u5E03\u5E95\u90E8\u7684\u7E2E\u653E\u63A7\u5236\u9805\u9032\u884C\u63A7\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u5C07\u756B\u5E03\u5C0D\u4E2D\u4E26\u6062\u5FA9\u81F3100%\u7E2E\u653E\u6BD4\u4F8B\uFF0C\u9EDE\u64CA\u201CReset Canvas\u201D\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.png",
    mdxType: "Figure"
  }, "\u756B\u5E03\u8996\u5716\u4E2D\u7684\u7E2E\u653E\u63A7\u5236\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9084\u53EF\u4EE5\u4F7F\u7528\u4E0B\u5217\u5FEB\u901F\u9375\u57F7\u884C\u7E2E\u653E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7E2E\u653E\u6BD4\u4F8B25%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 1"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7E2E\u653E\u6BD4\u4F8B50%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 2"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7E2E\u653E\u6BD4\u4F8B75%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 3"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7E2E\u653E\u6BD4\u4F8B100%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 4"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u653E\u5927"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + \u6ED1\u9F20\u6EFE\u8F2A\u5411\u4E0A\u6EFE")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + '+'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7E2E\u5C0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + \u6ED1\u9F20\u6EFE\u8F2A\u5411\u4E0B\u6EFE")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + '-'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u91CD\u7F6E\u7E2E\u653E\u6BD4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 0")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 0")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "right-side-bar"
  }), `\u53F3\u5074\u908A\u6B04`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u5074\u7684\u5074\u908A\u6B04\u5305\u542B\u4E00\u500B\u7D22\u5F15\u6A19\u7C64\u63A7\u5236\u9805\uFF0C\u53EF\u5C0E\u822A\u5230\u7576\u524D\u9078\u4E2D\u5C0F\u5DE5\u5177\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#properties"
  }), `Properties`), `\u9078\u9805\u5361\u548C\u756B\u5E03\u4E0A\u7576\u524D\u770B\u5230\u7684\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#interactions"
  }), `Interactions`), `\u9078\u9805\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "properties"
  }), `Properties\u5C6C\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201CProperties\u201D\u9078\u9805\u5361\u5C07\u986F\u793A\u7576\u524D\u9078\u4E2D\u7684\u5C0F\u5DE5\u5177/\u87A2\u5E55/\u81EA\u8A02\u5BB9\u5668\u7684\u5C6C\u6027\u3002 \u9078\u4E2D\u5143\u4EF6\u7684\u540D\u7A31\u986F\u793A\u5728\u5C6C\u6027\u6E05\u55AE\u7684\u9802\u90E8\u3002 \u540D\u7A31\u5DE6\u5074\u6709\u4E00\u500B\u5716\u793A\uFF0C\u5C07\u6ED1\u9F20\u61F8\u505C\u5728\u8A72\u5716\u793A\u4E0A\u6703\u986F\u793A\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u9EDE\u64CA\u8A72\u5716\u793A\u5C07\u9023\u7D50\u5230\u8A72\u5143\u4EF6\u7684\u6587\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.png",
    mdxType: "Figure"
  }, "\u65B9\u6846\u5C6C\u6027"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interactions"
  }), `Interactions\u4EA4\u4E92`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C Interactions\u201D\u9078\u9805\u5361\u5C07\u986F\u793A\u7576\u524D\u756B\u5E03\u4E0A\u986F\u793A\u7684\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u201C+\u201D\u6309\u9215\u53EF\u6DFB\u52A0\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "interactions-view",
    mdxType: "Link"
  }, "Interactions\u4EA4\u4E92"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);