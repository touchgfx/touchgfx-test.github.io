"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5591],{

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

/***/ 21235:
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
  title: "Canvas View\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D3\u30E5\u30FC\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/canvas-view",
  "id": "development/ui-development/designer-user-guide/canvas-view",
  "title": "Canvas View\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D3\u30E5\u30FC\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/canvas-view",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/canvas-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-view",
    "title": "Canvas View\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D3\u30E5\u30FC\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Main Window\uFF08\u30E1\u30A4\u30F3\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/main-window"
  },
  "next": {
    "title": "Images View\uFF08\u753B\u50CF\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/images-view"
  }
};
const assets = {};





const toc = [{
  value: "Left Side Bar\uFF08\u5DE6\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\uFF09",
  id: "left-side-bar",
  level: 2
}, {
  value: "Screens\u3068Custom Containers",
  id: "screens--custom-containers",
  level: 3
}, {
  value: "Canvas\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF09",
  id: "canvas",
  level: 2
}, {
  value: "Widget Menu\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\uFF09",
  id: "widget-menu",
  level: 3
}, {
  value: "Widget Selection\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u9078\u629E\uFF09",
  id: "widget-selection",
  level: 3
}, {
  value: "Widget Positioning\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u914D\u7F6E\uFF09",
  id: "widget-positioning",
  level: 3
}, {
  value: "Widget Order Controls\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u9806\u5E8F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09",
  id: "widget-order-controls",
  level: 3
}, {
  value: "Content Clipping Control\uFF08\u30B3\u30F3\u30C6\u30F3\u30C4\uFF65\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09",
  id: "content-clipping-control",
  level: 3
}, {
  value: "History Controls\uFF08\u5C65\u6B74\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09",
  id: "history-controls",
  level: 3
}, {
  value: "Zoom Controls\uFF08\u30BA\u30FC\u30E0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09",
  id: "zoom-controls",
  level: 3
}, {
  value: "Right Side Bar\uFF08\u53F3\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\uFF09",
  id: "right-side-bar",
  level: 2
}, {
  value: "Properties\uFF08\u30D7\u30ED\u30D1\u30C6\u30A3\uFF09",
  id: "properties",
  level: 3
}, {
  value: "Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30F3\u30D0\u30B9\u306F\u3001\u5B9F\u884C\u4E2D\u306B\u8868\u793A\u3055\u308C\u308B\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u8996\u899A\u8868\u73FE\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\u90E8\u5206\u306E\u69CB\u7BC9\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D3\u30E5\u30FC\u3067\u3059\u3002 \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3084\u30B7\u30B9\u30C6\u30E0\u5404\u90E8\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306A\u3069\u3001\u52D5\u7684\u306A\u8981\u7D20\u3092\u3053\u3053\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306ECanvas View"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "left-side-bar"
  }), `Left Side Bar\uFF08\u5DE6\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5DE6\u5074\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\u306B\u306F\u30BF\u30D6\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u3042\u308A\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#screens--custom-containers"
  }), `Screens\u3068Custom Containers`), `\u306E\u9593\u3092\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens--custom-containers"
  }), `Screens\u3068Custom Containers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screens\u30BF\u30D6\u3068Custom Containers\u30BF\u30D6\u306E\u3069\u3061\u3089\u306B\u3082\u3001\u5404\u30B9\u30AF\u30EA\u30FC\u30F3\u304A\u3088\u3073\u5404\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u3042\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u6982\u8981\u3092\u793A\u3059\u30C4\u30EA\u30FC\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u308B\u3001\u30C4\u30EA\u30FC\u5185\u306E\u3059\u3079\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u540D\u306E\u6A2A\u306E\u30B7\u30A7\u30D6\u30ED\u30F3\uFF08\u5C71\u5F62\u306E\u77E2\u5370\uFF09\u3092\u62BC\u3059\u3068\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u6298\u308A\u305F\u305F\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30EA\u30FC\u30F3\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3001\u305D\u306E\u4E2D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u9806\u5E8F\u306F\u3001\u4ED6\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E0A\u307E\u305F\u306F\u4E0B\u306B\u305D\u308C\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3053\u3068\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-order-controls"
  }), `widget order controls`), `\u3092\u4F7F\u7528\u3057\u3066\u9806\u5E8F\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u9806\u5E8F\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u9806\u5E8F\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30F3\u30C6\u30CA\uFF65\u30BF\u30A4\u30D7\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F\u5B50\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u5B50\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u30C4\u30EA\u30FC\u8868\u793A\u5185\u3067\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E0A\u306B\u5225\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u9593\u3067\u79FB\u52D5\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8907\u6570\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u9078\u629E\u3059\u308B\u306B\u306F\u3001Ctrl\u30AD\u30FC\u3092\u62BC\u3057\u306A\u304C\u3089\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screens / Custom Containers\u306F\u3001"+"\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3053\u3068\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 Custom Containers\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `Widget Menu`), `\u304B\u3089\u30B9\u30AF\u30EA\u30FC\u30F3\u3084\u4ED6\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30B3\u30F3\u30C6\u30CA\u306F'Custom Containers'\u3068\u3044\u3046\u540D\u524D\u306E\u72EC\u81EA\u306E\u30AB\u30C6\u30B4\u30EA\u3067\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screens\u3001Custom Containers\u3001Widgets\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u53F3\u30AF\u30EA\u30C3\u30AF\uFF65\u30E1\u30CB\u30E5\u30FC\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\u540D\u524D\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u524A\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Del`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B3\u30D4\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8CBC\u308A\u4ED8\u3051`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + V`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0A\u3078\u79FB\u52D5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0B\u3078\u79FB\u52D5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + B`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30BD\u30FC\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` `, `*`, `\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u307F\u3067\u4F7F\u7528\u53EF\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    width: "40%",
    height: "40%",
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",
    mdxType: "LoopVideo"
  }, "\u5DE6\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\u306EScreens\u306E\u30C4\u30EA\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas"
  }), `Canvas\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306E\u4E0A\u90E8\u306B\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `Widget Menu`), `\u304C\u3042\u308A\u3001\u3053\u3053\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306E\u4E2D\u592E\u306B\u306F\u30AD\u30E3\u30F3\u30D0\u30B9\u304C\u3042\u308A\u3001\u73FE\u5728\u9078\u629E\u4E2D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30D3\u30E5\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306E\u4E0B\u90E8\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#zoom-controls"
  }), `Zoom Controls`), `\u3084`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#content-clipping-control"
  }), `Content Clipping Control`), `\u306A\u3069\u3001\u3055\u307E\u3056\u307E\u306A\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",
    mdxType: "LoopVideo"
  }, "Canvas View\u306E\u4E2D\u306ECanvas"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-menu"
  }), `Widget Menu\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Widget Menu\u306E\u4E2D\u306EAll widget group\u30BF\u30D6\u3001\u307E\u305F\u306F\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `A`), ` \u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AB\u30C6\u30B4\u30EA\u5206\u985E\u3055\u308C\u305F\u30EA\u30B9\u30C8\u304C\u958B\u304D\u307E\u3059\u3002 \u7279\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u306E\u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u305D\u306E\u30AB\u30C6\u30B4\u30EA\u5185\u306E\u4F7F\u7528\u53EF\u80FD\u306A\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u304C\u958B\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `All widget group\u306B\u306F\u691C\u7D22\u30D5\u30A3\u30FC\u30EB\u30C9\u3082\u3042\u308A\u3001\u3053\u3053\u3067\u306F\u30D5\u30A1\u30B8\u30FC\u691C\u7D22\u3092\u5229\u7528\u3057\u3066\u3001\u691C\u7D22\u5165\u529B\u306B\u6700\u3082\u9069\u5408\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u6700\u9069\u306A\u7D50\u679C\u304C\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30D5\u30A1\u30B8\u30FC\u691C\u7D22\u306A\u306E\u3067\u3001\u305F\u3068\u3048\u3070"bwl"\u3068\u5165\u529B\u3057\u3066"Button With Label"\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u7565\u8A9E\u30821\u3064\u306E\u30D5\u30A1\u30AF\u30BF\u30FC\u3060\u304B\u3089\u3067\u3059\u3002 \u691C\u7D22\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u4F55\u304B\u5165\u529B\u3057\u305F\u5F8C\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Enter`), ` \u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u633F\u5165\u3055\u308C\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u304C\u9589\u3058\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",
    mdxType: "LoopVideo"
  }, "Canvas view\u306EWidget Menu"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-selection"
  }), `Widget Selection\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u9078\u629E\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u5358\u7D14\u306B\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3060\u3051\u3067\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u8907\u6570\u9078\u629E\u3082\u53EF\u80FD\u3067\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u4E0A\u3067 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl`), ` \u30AD\u30FC\u3092\u62BC\u3057\u306A\u304C\u3089\u8907\u6570\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-positioning"
  }), `Widget Positioning\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u914D\u7F6E\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306FThumb\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3053\u3068\u3067\u79FB\u52D5\u3084\u30B5\u30A4\u30BA\u5909\u66F4\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u3001\u9078\u629E\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u30921\u30D4\u30AF\u30BB\u30EB\u3060\u3051\u79FB\u52D5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 Ctrl\u30AD\u30FC\u3092 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl`), ` \u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u9078\u629E\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C10\u30D4\u30AF\u30BB\u30EB\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-order-controls"
  }), `Widget Order Controls\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u9806\u5E8F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306Ez-\u30AA\u30FC\u30C0\u30FC\u306F\u3001Bring Forward\u304A\u3088\u3073Send Backwards\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306B\u3088\u3063\u3066\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u3063\u3066Screens\u307E\u305F\u306FCustom Containers\u30C4\u30EA\u30FC\u5185\u306E\u9806\u5E8F\u3082\u5909\u66F4\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Bring Forward\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + F`), `\u3092\u62BC\u3059\u3053\u3068\u3067\u30C8\u30EA\u30AC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Send Backward\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + B`), `\u3092\u62BC\u3059\u3053\u3068\u3067\u30C8\u30EA\u30AC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "content-clipping-control"
  }), `Content Clipping Control\uFF08\u30B3\u30F3\u30C6\u30F3\u30C4\uFF65\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30F3\u30D0\u30B9\u3067\u306F\u3001Screen\u3001Custom Container\u3001\u304A\u3088\u3073\u30B3\u30F3\u30C6\u30CA\uFF65\u30BF\u30A4\u30D7\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5B50\u306E\u5883\u754C\u5916\u306B\u3042\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 \u30B3\u30F3\u30C6\u30F3\u30C4\uFF65\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306B\u3088\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u5B8C\u5168\u306B\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3059\u308B\u306E\u304B\u3001\u90E8\u5206\u7684\u306B\u8868\u793A\u3059\u308B\u306E\u304B\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.png",
    mdxType: "Figure"
  }, "Canvas View\u3067\u306E\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u8868\u793A / \u975E\u8868\u793A\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u753B\u50CF\u3067\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5883\u754C\u304B\u3089\u534A\u5206\u306F\u307F\u51FA\u305F\u72B6\u614B\u3067\u30DC\u30C3\u30AF\u30B9\u304C\u914D\u7F6E\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30B3\u30F3\u30C6\u30F3\u30C4\uFF65\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u3001\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u30DC\u30C3\u30AF\u30B9\u306F\u5B8C\u5168\u306B\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u304C\u3001\u5883\u754C\u5916\u306B\u3042\u308B\u90E8\u5206\u306F\u4F4E\u3044\u5F69\u5EA6\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.png",
    mdxType: "Figure"
  }, "\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A / \u975E\u8868\u793A\u306B\u3057\u305F\u5834\u5408\u306E\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8868\u793A\u306E\u9055\u3044"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "history-controls"
  }), `History Controls\uFF08\u5C65\u6B74\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u305F\u5909\u66F4\u306E\u5C65\u6B74\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu"
  }), `File Menu`), `\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu#edit"
  }), `Edit`), `\u3067\u3001\u5143\u306B\u623B\u3057\u305F\u308A\u3084\u308A\u76F4\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30B9\u30AF\u30EA\u30FC\u30F3\u304A\u3088\u3073\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3054\u3068\u306B\u3001\u305D\u308C\u305E\u308C\u72EC\u81EA\u306E\u5C65\u6B74\u304C\u7DAD\u6301\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u7279\u5B9A\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u305F\u5909\u66F4\u3092\u5143\u306B\u623B\u3057\u305F\u308A\u3084\u308A\u76F4\u3057\u305F\u308A\u3059\u308B\u306B\u306F\u3001\u305D\u306E\u5F53\u8A72\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u306B\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C65\u6B74\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306F\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + Z`), ` \u304A\u3088\u3073 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl + Y`), `\u3092\u62BC\u3059\u3053\u3068\u3067\u30C8\u30EA\u30AC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "zoom-controls"
  }), `Zoom Controls\uFF08\u30BA\u30FC\u30E0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u30BA\u30FC\u30E0\uFF65\u30EC\u30D9\u30EB\u306F\u3001\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0B\u90E8\u306E\u30BA\u30FC\u30E0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u5236\u5FA1\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30F3\u30D0\u30B9\u3092\u4E2D\u592E\u306B\u914D\u7F6E\u3057\u3066100%\u306E\u30BA\u30FC\u30E0\u500D\u7387\u306B\u623B\u3059\u306B\u306F\u3001Reset Canvas\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.png",
    mdxType: "Figure"
  }, "Canvas View\u3067\u306E\u30BA\u30FC\u30E0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BA\u30FC\u30E0\u64CD\u4F5C\u306F\u4EE5\u4E0B\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "25%\u30BA\u30FC\u30E0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + 1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30C6\u30F3\u30AD\u30FC1"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "50%\u30BA\u30FC\u30E0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + 2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30C6\u30F3\u30AD\u30FC2"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "75%\u30BA\u30FC\u30E0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + 3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30C6\u30F3\u30AD\u30FC3"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "100%\u30BA\u30FC\u30E0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + 4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30C6\u30F3\u30AD\u30FC4"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u62E1\u5927"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30DE\u30A6\u30B9\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4E0A\u3078")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + '+'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u7E2E\u5C0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30DE\u30A6\u30B9\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4E0B\u3078")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + '-'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\u30BA\u30FC\u30E0\u306E\u30EA\u30BB\u30C3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + 0")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl + \u30C6\u30F3\u30AD\u30FC0")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "right-side-bar"
  }), `Right Side Bar\uFF08\u53F3\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u5074\u306E\u30B5\u30A4\u30C9\uFF65\u30D0\u30FC\u306B\u306F\u30BF\u30D6\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u3042\u308A\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#properties"
  }), `Properties`), `\u3084\u3001\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#interactions"
  }), `Interactions`), `\u306B\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "properties"
  }), `Properties\uFF08\u30D7\u30ED\u30D1\u30C6\u30A3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Properties\u30BF\u30D6\u306B\u306F\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308BWidget / Screen / Custom Container\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u540D\u524D\u304C\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30EA\u30B9\u30C8\u306E\u4E0A\u90E8\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u540D\u524D\u306E\u5DE6\u5074\u306B\u3042\u308B\u30A2\u30A4\u30B3\u30F3\u306E\u4E0A\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068\u3001\u8AAC\u660E\u30C6\u30AD\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u3001\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.png",
    mdxType: "Figure"
  }, "\u30DC\u30C3\u30AF\u30B9\u306E\u30D7\u30ED\u30D1\u30C6\u30A3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interactions"
  }), `Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Interactions\u30BF\u30D6\u306B\u306F\u3001\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001"+"\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.png",
    mdxType: "Figure"
  }, "Interactions\u306E\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "interactions-view",
    mdxType: "Link"
  }, "Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);