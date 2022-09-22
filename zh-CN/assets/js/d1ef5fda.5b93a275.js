"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7687],{

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

/***/ 88121:
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
  title: "\u753B\u5E03\u89C6\u56FE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/canvas-view",
  "id": "development/ui-development/designer-user-guide/canvas-view",
  "title": "\u753B\u5E03\u89C6\u56FE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/canvas-view",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-view",
    "title": "\u753B\u5E03\u89C6\u56FE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E3B\u7A97\u53E3",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/main-window"
  },
  "next": {
    "title": "\u56FE\u50CF\u89C6\u56FE",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/images-view"
  }
};
const assets = {};





const toc = [{
  value: "\u5DE6\u4FA7\u8FB9\u680F",
  id: "left-side-bar",
  level: 2
}, {
  value: "\u5C4F\u5E55 &amp; \u81EA\u5B9A\u4E49\u5BB9\u5668",
  id: "screens--custom-containers",
  level: 3
}, {
  value: "\u753B\u5E03",
  id: "canvas",
  level: 2
}, {
  value: "\u63A7\u4EF6\u83DC\u5355",
  id: "widget-menu",
  level: 3
}, {
  value: "\u63A7\u4EF6\u9009\u62E9",
  id: "widget-selection",
  level: 3
}, {
  value: "\u63A7\u4EF6\u5B9A\u4F4D",
  id: "widget-positioning",
  level: 3
}, {
  value: "\u63A7\u4EF6Z\u987A\u5E8F\u8C03\u8282",
  id: "widget-order-controls",
  level: 3
}, {
  value: "\u5185\u5BB9\u88C1\u526A\u63A7\u5236",
  id: "content-clipping-control",
  level: 3
}, {
  value: "\u4FEE\u6539\u5386\u53F2",
  id: "history-controls",
  level: 3
}, {
  value: "\u7F29\u653E",
  id: "zoom-controls",
  level: 3
}, {
  value: "\u53F3\u4FA7\u8FB9\u680F",
  id: "right-side-bar",
  level: 2
}, {
  value: "\u5C5E\u6027",
  id: "properties",
  level: 3
}, {
  value: "\u4EA4\u4E92",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u662F\u6784\u5EFA\u5E94\u7528\u56FE\u5F62\u754C\u9762\u7684\u89C6\u56FE\uFF0C\u5B83\u53EF\u4EE5\u5728\u8BBE\u8BA1\u65F6\u76F4\u89C2\u5C55\u793A\u5E94\u7528\u8FD0\u884C\u65F6\u754C\u9762\u7684\u5916\u89C2\u3002 \u5BF9\u4E8E\u52A8\u6001\u754C\u9762\u65B9\u9762\uFF0C\u4F8B\u5982\u52A8\u753B\u4EE5\u53CA\u7CFB\u7EDF\u5404\u63A7\u4EF6\u4E4B\u95F4\u7684\u4EA4\u4E92\u663E\u793A\uFF0C\u4EA6\u53EF\u5728\u6B64\u8FDB\u884C\u63CF\u8FF0\u8BBE\u8BA1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u7684\u753B\u5E03\u89C6\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "left-side-bar"
  }), `\u5DE6\u4FA7\u8FB9\u680F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5DE6\u4FA7\u8FB9\u680F\u5305\u542B\u4E00\u4E2A\u9009\u9879\u5361\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#screens--custom-containers"
  }), `\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens--custom-containers"
  }), `\u5C4F\u5E55 & \u81EA\u5B9A\u4E49\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5C4F\u5E55\u201D\u9009\u9879\u9875\u548C\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D\u9009\u9879\u9875\u5747\u53EF\u6811\u72B6\u663E\u793A\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u6D4F\u89C8\u6BCF\u4E2A\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u7684\u63A7\u4EF6\uFF0C\u901A\u8FC7\u70B9\u51FB\u5176\u540D\u79F0\u5DE6\u4FA7\u7684 >\u578B \u6216 v \u578B\u6807\u5FD7\uFF0C\u53EF\u4EE5\u5C55\u5F00\u6216\u6298\u53E0\u5176\u5305\u542B\u7684\u63A7\u4EF6\u5217\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u66F4\u6539\u5C4F\u5E55\u3001\u81EA\u5B9A\u4E49\u5BB9\u5668\u4EEC\u7684\u663E\u793A\u987A\u5E8F\u6216\u5B83\u4EEC\u5305\u542B\u7684\u63A7\u4EF6\u95F4\u7684\u987A\u5E8F\uFF0C\u53EF\u76F4\u63A5\u62D6\u653E\u5B8C\u6210\uFF08\u5373\u7528\u9F20\u6807\u62D6\u52A8\u5C06\u5176\u653E\u5230\u5176\u4ED6\u5C4F\u5E55\u3001\u81EA\u5B9A\u4E49\u5BB9\u5668\u6216\u63A7\u4EF6\u7684\u4E0A\u9762\u6216\u4E0B\u9762\uFF09\uFF0C\u4E5F\u53EF\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-order-controls"
  }), `\u63A7\u4EF6\u6392\u5E8F`), `\u6765\u66F4\u6539\u3002 \u66F4\u6539\u63A7\u4EF6\u7684\u663E\u793A\u987A\u5E8F\uFF0C\u5C06\u786E\u5B9A\u6E32\u67D3\u65F6\u54EA\u4E9B\u63A7\u4EF6\u4F1A\u653E\u5728\u5176\u4ED6\u63A7\u4EF6\u7684\u9876\u90E8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u5BB9\u5668\u7C7B\u7684\u63A7\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u6811\u72B6\u56FE\u91CC\u5C06\u5176\u5B83\u63A7\u4EF6\u62D6\u653E\u5230\u5176\u4E0A\u6765\u6DFB\u52A0\u5B50\u63A7\u4EF6\u3002 \u6B64\u5916\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u63A7\u4EF6\u4ECE\u4E00\u4E2A\u5C4F\u5E55\u62D6\u653E\u5230\u53E6\u4E00\u4E2A\u5C4F\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u70B9\u51FB\u63A7\u4EF6\u7684\u540C\u65F6\u6309\u4F4FCTRL\u952E\u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u201C+\u201D\u6309\u94AE\u53EF\u5728\u5DE5\u7A0B\u4E2D\u6DFB\u52A0\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u3002 \u53EF\u4EE5\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `\u63A7\u4EF6\u83DC\u5355`), `\u5C06\u81EA\u5B9A\u4E49\u5BB9\u5668\u6DFB\u52A0\u5230\u5C4F\u5E55\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u5728\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D\u9875\u4E2D\u627E\u5230\u5B83\u4EEC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u5BF9\u4E8E\u5C4F\u5E55\u3001\u81EA\u5B9A\u4E49\u5BB9\u5668\u548C\u63A7\u4EF6\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u5355\u51FB\u4E0A\u4E0B\u6587\u83DC\u5355\uFF0C\u60A8\u53EF\u4EE5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\u91CD\u547D\u540D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u5220\u9664\u63A7\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u590D\u5236`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u7C98\u8D34`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u7F16\u8F91\u6E90\u6587\u4EF6*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` `, `*`, `\u4EC5\u7528\u4E8E\u5C4F\u5E55\u548C\u81EA\u5B9A\u4E49\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    width: "40%",
    height: "40%",
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",
    mdxType: "LoopVideo"
  }, "\u5DE6\u4FA7\u8FB9\u680F\u4E2D\u7684\u5C4F\u5E55\u6811\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas"
  }), `\u753B\u5E03`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u56FE\u9876\u90E8\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `\u63A7\u4EF6\u83DC\u5355`), `\uFF0C\u5176\u4E2D\u5305\u542B\u6240\u6709\u53EF\u7528\u7684\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u56FE\u4E2D\u5FC3\u90E8\u5206\u662F\u753B\u5E03\uFF0C\u663E\u793A\u5F53\u524D\u9009\u4E2D\u7684\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u89C6\u56FE\u5E95\u90E8\u7684\u63A7\u4EF6\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#zoom-controls"
  }), `\u7F29\u653E\u63A7\u4EF6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#content-clipping-control"
  }), `\u5185\u5BB9\u4FEE\u526A\u63A7\u4EF6`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",
    mdxType: "LoopVideo"
  }, "\u753B\u5E03\u89C6\u56FE\u4E2D\u7684\u753B\u5E03"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-menu"
  }), `\u63A7\u4EF6\u83DC\u5355`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u63A7\u4EF6\u83DC\u5355\u4E2D\u7684\u201C\u5168\u90E8\u63A7\u4EF6\u201D\u7EC4\u9009\u9879\u5361\u6216\u6309\u5FEB\u6377\u952E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `A`), ` \u5C06\u6253\u5F00\u4E00\u4E2A\u5305\u542B\u6240\u6709\u5DF2\u5206\u7C7B\u7684\u53EF\u7528\u63A7\u4EF6\u5217\u8868\u3002 \u70B9\u51FB\u67D0\u7C7B\u7684\u63A7\u4EF6\u7EC4\u9009\u9879\u5361\uFF0C\u5C06\u4F1A\u6253\u5F00\u8BE5\u7C7B\u63A7\u4EF6\u5305\u542B\u7684\u53EF\u7528\u63A7\u4EF6\u5217\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u5176\u4E2D\u4E00\u4E2A\u63A7\u4EF6\uFF0C\u53EF\u5C06\u5176\u6DFB\u52A0\u5230\u5F53\u524D\u9009\u4E2D\u7684\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u753B\u5E03\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5168\u90E8\u63A7\u4EF6\u201D\u7EC4\u91CC\u6709\u4E00\u4E2A\u641C\u7D22\u680F\uFF0C\u91C7\u7528\u6A21\u7CCA\u641C\u7D22\u6280\u672F\uFF0C\u53EF\u5E2E\u52A9\u7528\u6237\u67E5\u627E\u6700\u4F73\u5339\u914D\u7684\u63A7\u4EF6\u3002 \u6700\u4F73\u5339\u914D\u5C06\u9AD8\u4EAE\u663E\u793A\u3002 \u7531\u4E8E\u4F7F\u7528\u4E86\u6A21\u7CCA\u641C\u7D22\uFF0C\u4F8B\u5982\uFF0C\u5F53\u8F93\u5165\u201Cbwl\u201D\u65F6\u53EF\u4EE5\u641C\u7D22\u5230\u201CButton With Label\u201D\uFF08\u5E26\u6807\u7B7E\u7684\u6309\u94AE\uFF09\uFF0C\u8FD9\u5F97\u76CA\u4E8E\u7F29\u7565\u8BCD\u7D22\u5F15\u56E0\u5B50\u3002 \u5728\u641C\u7D22\u680F\u4E2D\u8F93\u5165\u5185\u5BB9\u540E\uFF0C\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Enter`), ` \u952E\u53EF\u5C06\u9AD8\u4EAE\u663E\u793A\u7684\u63A7\u4EF6\u6DFB\u52A0\u5230\u753B\u5E03\u4E0A\uFF0C\u5E76\u5173\u95ED\u201C\u63A7\u4EF6\u83DC\u5355\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",
    mdxType: "LoopVideo"
  }, "\u201C\u753B\u5E03\u201D\u89C6\u56FE\u4E2D\u7684\u201C\u63A7\u4EF6\u83DC\u5355\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-selection"
  }), `\u63A7\u4EF6\u9009\u62E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u9762\u7684\u52A8\u753B\u6240\u793A\uFF0C\u53EA\u9700\u5728\u753B\u5E03\u4E0A\u70B9\u51FB\u67D0\u63A7\u4EF6\u5373\u53EF\u9009\u4E2D\u5B83\u3002 \u4EA6\u53EF\u591A\u9009\uFF0C\u65B9\u6CD5\u662F\u5728\u6309\u4F4F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl`), ` \u952E\u7684\u540C\u65F6\u5355\u51FB\u591A\u4E2A\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-positioning"
  }), `\u63A7\u4EF6\u5B9A\u4F4D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u9762\u7684\u52A8\u753B\u6240\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62D6\u62FD\u63A7\u4EF6\u7684\u7F29\u7565\u56FE\u6765\u79FB\u52A8\u6216\u6539\u53D8\u5176\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u7528\u7BAD\u5934\u952E\u5C06\u9009\u4E2D\u7684\u63A7\u4EF6\u79FB\u52A81\u4E2A\u50CF\u7D20\u3002 \u5728\u4F7F\u7528\u7BAD\u5934\u952E\u7684\u540C\u65F6\u6309\u4F4F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl`), ` Ctrl\u952E\u53EF\u4EE5\u5C06\u9009\u4E2D\u7684\u63A7\u4EF6\u79FB\u52A810\u4E2A\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-order-controls"
  }), `\u63A7\u4EF6Z\u987A\u5E8F\u8C03\u8282`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A7\u4EF6\u7684Z\u987A\u5E8F\u53EF\u4EE5\u901A\u8FC7\u201C\u7F6E\u524D\u201D\u548C\u201C\u7F6E\u540E\u201D\u5FEB\u6377\u65B9\u5F0F\u8FDB\u884C\u8C03\u6574\uFF0C\u5B83\u4EEC\u5728\u201C\u5C4F\u5E55\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D\u6811\u4E2D\u7684\u987A\u5E8F\u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u7F6E\u524D\u201D\u7684\u89E6\u53D1\u65B9\u5F0F\u662F\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + F`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u7F6E\u540E\u201D\u7684\u89E6\u53D1\u65B9\u5F0F\u662F\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + B`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "content-clipping-control"
  }), `\u5185\u5BB9\u88C1\u526A\u63A7\u5236`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u753B\u5E03\u4E0A\uFF0C\u5C4F\u5E55\u3001\u81EA\u5B9A\u4E49\u5BB9\u5668\u53CA\u5176\u5B50\u7C7B\u7684\u8FB9\u754C\u4E4B\u5916\u7684\u63A7\u4EF6\u5C06\u4F1A\u88AB\u88C1\u526A\u6389\u3002 \u88AB\u88C1\u526A\u7684\u90E8\u5206\u53EF\u5728\u4E0D\u663E\u793A\u548C\u90E8\u5206\u663E\u793A\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.png",
    mdxType: "Figure"
  }, "\u753B\u5E03\u89C6\u56FE\u4E2D\u7684\u201C\u663E\u793A/\u9690\u85CF\u88C1\u526A\u5185\u5BB9\u201D\u6309\u94AE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u56FE\u4E2D\uFF0C\u6709\u4E00\u4E2A\u4E00\u534A\u4F4D\u4E8E\u5C4F\u5E55\u5916\u7684\u7EA2\u8272\u65B9\u6846\uFF0C\u5F53\u88C1\u526A\u63A7\u5236\u8BBE\u7F6E\u4E3A\u663E\u793A\u88C1\u526A\u5185\u5BB9\u65F6\uFF0C\u7EA2\u8272\u65B9\u6846\u4E0D\u4F1A\u5B8C\u5168\u663E\u793A\uFF0C\u800C\u662F\u5C06\u5176\u5C4F\u5E55\u4E4B\u5916\u7684\u90E8\u5206\u5F31\u5316\u663E\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.png",
    mdxType: "Figure"
  }, "\u663E\u793A\u548C\u9690\u85CF\u88C1\u526A\u5185\u5BB9\u65F6\u65B9\u6846\u63A7\u4EF6\u7684\u5916\u89C2\u5DEE\u5F02"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "history-controls"
  }), `\u4FEE\u6539\u5386\u53F2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu"
  }), `\u6587\u4EF6\u83DC\u5355`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu#edit"
  }), `\u7F16\u8F91`), `\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C06\u5728\u753B\u5E03\u4E0A\u6267\u884C\u8FC7\u7684\u4FEE\u6539\u64CD\u4F5C\u64A4\u9500\u6216\u91CD\u505A\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7CFB\u7EDF\u8BB0\u5F55\u4E86\u6BCF\u4E2A\u5C4F\u5E55\u548C\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u4FEE\u6539\u5386\u53F2\uFF0C\u4E3A\u4E86\u64A4\u9500\u6216\u91CD\u505A\u5728\u67D0\u7279\u5B9A\u5C4F\u5E55\u4E0A\u6267\u884C\u7684\u4FEE\u6539\uFF0C\u8BE5\u7279\u5B9A\u5C4F\u5E55\u5FC5\u987B\u663E\u793A\u5728\u753B\u5E03\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4FEE\u6539\u5386\u53F2\u63A7\u5236\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5FEB\u6377\u952E\u89E6\u53D1 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + Z`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + Y`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "zoom-controls"
  }), `\u7F29\u653E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u5E03\u7684\u7F29\u653E\u7A0B\u5EA6\u53EF\u4EE5\u901A\u8FC7\u753B\u5E03\u5E95\u90E8\u7684\u7F29\u653E\u63A7\u4EF6\u8FDB\u884C\u63A7\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u5C06\u753B\u5E03\u5C45\u4E2D\u5E76\u6062\u590D\u81F3100%\u7F29\u653E\u6BD4\u4F8B\uFF0C\u70B9\u51FB\u201C\u753B\u5E03\u91CD\u7F6E\u201D\u6309\u94AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.png",
    mdxType: "Figure"
  }, "\u753B\u5E03\u89C6\u56FE\u4E2D\u7684\u7F29\u653E\u63A7\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u5217\u5FEB\u6377\u952E\u8FDB\u884C\u7F29\u653E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7F29\u653E\u6BD4\u4F8B25%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 1"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7F29\u653E\u6BD4\u4F8B50%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 2"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7F29\u653E\u6BD4\u4F8B75%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 3"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7F29\u653E\u6BD4\u4F8B100%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 4"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u653E\u5927"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + \u9F20\u6807\u6EDA\u8F6E\u5411\u4E0A\u6EDA")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + '+'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7F29\u5C0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + \u9F20\u6807\u6EDA\u8F6E\u5411\u4E0B\u6EDA")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + '-'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u91CD\u7F6E\u7F29\u653E\u6BD4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 0")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 0")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "right-side-bar"
  }), `\u53F3\u4FA7\u8FB9\u680F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u4FA7\u8FB9\u680F\u5305\u542B\u4E00\u4E2A\u9009\u9879\u5361\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u5F53\u524D\u9009\u4E2D\u63A7\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#properties"
  }), `\u5C5E\u6027`), `\u9009\u9879\u5361\u6216\u753B\u5E03\u4E0A\u5F53\u524D\u53EF\u89C1\u7684\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#interactions"
  }), `\u4EA4\u4E92`), `\u9009\u9879\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "properties"
  }), `\u5C5E\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\u5C06\u663E\u793A\u5F53\u524D\u9009\u4E2D\u7684\u63A7\u4EF6/\u5C4F\u5E55/\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u5C5E\u6027\u3002 \u9009\u4E2D\u7EC4\u4EF6\u7684\u540D\u79F0\u663E\u793A\u5728\u5C5E\u6027\u5217\u8868\u7684\u9876\u90E8\u3002 \u540D\u79F0\u5DE6\u4FA7\u6709\u4E00\u4E2A\u56FE\u6807\uFF0C\u5C06\u9F20\u6807\u60AC\u505C\u5728\u8BE5\u56FE\u6807\u4E0A\u4F1A\u663E\u793A\u63CF\u8FF0\u6027\u6587\u672C\uFF0C\u70B9\u51FB\u8BE5\u56FE\u6807\u5C06\u94FE\u63A5\u5230\u8BE5\u7EC4\u4EF6\u7684\u6587\u6863\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.png",
    mdxType: "Figure"
  }, "\u5C5E\u6027\u6846"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interactions"
  }), `\u4EA4\u4E92`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u4EA4\u4E92\u201D\u9009\u9879\u5361\u663E\u793A\u753B\u5E03\u4E0A\u5F53\u524D\u663E\u793A\u7684\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u201C+\u201D\u6309\u94AE\u53EF\u6DFB\u52A0\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "interactions-view",
    mdxType: "Link"
  }, "\u4EA4\u4E92"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);