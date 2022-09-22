"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8926],{

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

/***/ 36401:
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
  id: "creating-dynamic-l8-images",
  title: "\u521B\u5EFA\u52A8\u6001L8\u56FE\u50CF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/creating-dynamic-l8-images",
  "id": "development/ui-development/scenarios/creating-dynamic-l8-images",
  "title": "\u521B\u5EFA\u52A8\u6001L8\u56FE\u50CF",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/creating-dynamic-l8-images",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/creating-dynamic-l8-images",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "creating-dynamic-l8-images",
    "title": "\u521B\u5EFA\u52A8\u6001L8\u56FE\u50CF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4F7F\u7528L8\u56FE\u50CF\u683C\u5F0F\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/zh-CN/docs/category/scenarios-2"
  }
};
const assets = {};


const toc = [{
  value: "\u52A8\u6001L8\u56FE\u50CF",
  id: "dynamic-l8-images",
  level: 2
}, {
  value: "\u752824\u4F4D\u8C03\u8272\u677F\u521B\u5EFA\u52A8\u6001L8\u56FE\u50CF",
  id: "creating-a-dynamic-l8-image-with-24-bit-palette",
  level: 3
}, {
  value: "\u8BBF\u95EE\u8C03\u8272\u677F",
  id: "accessing-the-palette",
  level: 3
}, {
  value: "\u52A8\u6001L8\u4F4D\u56FE\u793A\u4F8B",
  id: "dynamic-l8-bitmap-example",
  level: 2
}, {
  value: "\u64CD\u4F5C\u8C03\u8272\u677F",
  id: "manipulating-the-palette",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u4ECB\u7ECD\u52A8\u6001L8\u56FE\u50CF\u7684\u4F7F\u7528\uFF0C\u7279\u522B\u662F\u5982\u4F55\u521B\u5EFA\u8C03\u8272\u677F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8BFB\u6B64\u5904\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/dynamic-bitmaps"
  }), `\u52A8\u6001\u4F4D\u56FE`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-the-l8-image-format-to-reduce-memory-consumption"
  }), `L8\u56FE\u50CF\u683C\u5F0F`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-l8-images"
  }), `\u52A8\u6001L8\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u52A8\u6001L8\u56FE\u50CF\u7684\u521B\u5EFA\u4E0E\u4EFB\u4F55\u5176\u4ED6\u52A8\u6001\u4F4D\u56FE\u4E00\u6837\uFF0C\u533A\u522B\u5728\u4E8E\u8FD8\u5FC5\u987B\u6307\u5B9A\u8981\u4E3A\u4F4D\u56FE\u5176\u521B\u5EFA\u7684\u8C03\u8272\u677F\u7C7B\u578B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u652F\u63013\u79CD\u8C03\u8272\u677F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8C03\u8272\u677F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8BF4\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\u4F4D\uFF0C\u7EA2\u3001\u7EFF\u3001\u84DD\u8272\u548C\u50CF\u7D20\u963F\u5C14\u6CD5\u901A\u9053\u54048\u4F4D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\u4F4D\uFF0C\u7EA2\u3001\u7EFF\u548C\u84DD\u8272\u54048\u4F4D\uFF0C\u65E0\u50CF\u7D20\u963F\u5C14\u6CD5\u901A\u9053`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\u4F4D\uFF0C\u7EA2\u3001\u7EFF\u548C\u84DD\u8272\u5206\u522B\u4E3A5\u4F4D\u30016\u4F4D\u548C5\u4F4D\uFF0C\u65E0\u50CF\u7D20\u963F\u5C14\u6CD5\u901A\u9053`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-dynamic-l8-image-with-24-bit-palette"
  }), `\u752824\u4F4D\u8C03\u8272\u677F\u521B\u5EFA\u52A8\u6001L8\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u4EEC\u752824\u4F4D\u8C03\u8272\u677F\u521B\u5EFA\u4E00\u5E45100x100\u50CF\u7D20L8\u4F4D\u56FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u53E5\u5B9E\u73B0\u4E86\u5728\u4F4D\u56FE\u7F13\u5B58\u4E2D\u5206\u914D\u4E86100x100\u50CF\u7D20L8\u4F4D\u56FE\u548C24\u4F4D\u8C03\u8272\u677F\u3002 \u8BE5\u8C03\u8272\u677F\u53EF\u4EE5\u4E3A\u52A8\u6001\u4F4D\u56FE\u63D0\u4F9B\u7684256\u79CD\u989C\u8272\uFF0C\u4F46\u4E3A\u4E86\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u7684\u6D6A\u8D39\uFF0C\u53EF\u4EE5\u8C03\u6574\u4E3A\u9700\u8981\u7684\u6570\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "accessing-the-palette"
  }), `\u8BBF\u95EE\u8C03\u8272\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u7D20\uFF08\u524D32\u4F4D\u5BF9\u9F50\u5730\u5740\uFF09\u540E\u9762\u4F9D\u6B21\u662F\u5305\u542BL8\u8C03\u8272\u677F\u683C\u5F0F\uFF08\u4EE5\u5C0F\u7AEF\u6A21\u5F0F\u4FDD\u5B58\uFF09\u76842\u4E2A\u5B57\u8282\u3001\u5305\u542B\u8C03\u8272\u677F\u4E2D\u6761\u76EE\u6570\u91CF\u76842\u4E2A\u5B57\u8282\uFF08\u4EE5\u5C0F\u7AEF\u6A21\u5F0F\u4FDD\u5B58\uFF09\u7136\u540E\u662F\u5B9E\u9645\u8C03\u8272\u677F\u989C\u8272\u3002 \u8FD9\u610F\u5473\u7740\u8C03\u8272\u677F\u989C\u8272\u6570\u636E\u4F4D\u4E8E\u50CF\u7D20\u6570\u636E\u540E\u97624\u4E2A\u5B57\u8282\u4E4B\u540E\uFF0832\u4F4D\u5BF9\u9F50\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u6307\u5411\uFF08\u76EE\u524D\u4E3A\u6B62\u672A\u521D\u59CB\u5316\uFF09\u8C03\u8272\u677F\u7684\u6307\u9488\uFF0C\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Get a pointer to the bitmap data (pixels and palette)
uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);

//1 byte pr pixel, round up to 32-bit
uint32_t byteSize = 100*100;
byteSize = ((byteSize + 3) & ~3);

//Palette size is saved in byte 2 and 3
int palSize = (data[3] << 8) | data[2];

//Palette starts four bytes after the pixels
uint8_t* pal = (data + byteSize + 4);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-l8-bitmap-example"
  }), `\u52A8\u6001L8\u4F4D\u56FE\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u521B\u5EFA\u52A8\u6001L8\u4F4D\u56FE\u548C\u64CD\u4F5C\u8C03\u8272\u677F\u7684\u5B8C\u6574\u793A\u4F8B\u3002 \u901A\u5E38\u4E0D\u4F1A\u5BF9\u4E00\u822C\u5E94\u7528\u8FDB\u884C\u8C03\u8272\u677F\u64CD\u4F5C\u3002 \u8BE5\u793A\u4F8B\u65E8\u5728\u63CF\u8FF0\u5982\u4F55\u8BBF\u95EE\u548C\u751F\u6210\u8C03\u8272\u677F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u4F7F\u7528TouchGFX Designer\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5C4F\u5E55\uFF0C\u5E76\u5728\u80CC\u666F\u4E0A\u63D2\u5165\u4E00\u4E2A\u767D\u8272\u65B9\u6846\u548C\u4E00\u5E45\u56FE\u50CF\uFF0C\u4F8B\u5982\u5728(x=140, y=8)\u7684\u4F4D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.png",
    mdxType: "Figure"
  }, "\u521B\u5EFA\u5C4F\u5E55"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u751F\u6210\u4EE3\u7801\u5E76\u6253\u5F00Screen1View.cpp\u6587\u4EF6\u3002 \u6211\u4EEC\u5FC5\u987B\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `setupScreen`), `\u4E2D\u63D2\u5165\u4EE3\u7801\uFF0C\u8FDB\u884C\u4F4D\u56FE\u7F13\u5B58\u521D\u59CB\u5316\u5E76\u521B\u5EFA\u52A8\u6001\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u5E45200*256\u50CF\u7D20\u7684\u4F4D\u56FE\u3002 \u8BB0\u4F4F\uFF0CL8\u4F4D\u56FE\u4E2D\u7684\u6BCF\u4E2A\u50CF\u7D20\u4E3A\u4E00\u4E2A\u5B57\u8282\u3002 \u6211\u4EEC\u5BF9\u56FE\u50CF\u7684\u6BCF\u4E00\u884C\u4F7F\u7528\u4E0D\u540C\u989C\u8272\u3002 \u7B2C\u4E00\u884C\u4E3A0\u53F7\u8272\uFF0C\u6700\u540E\u4E00\u884C\u4E3A255\u53F7\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u6211\u4EEC\u521D\u59CB\u5316\u8C03\u8272\u677F\u4E2D\u7684\u989C\u8272\u3002 \u8BA1\u7B97\u51FA\u8C03\u8272\u677F\u7684\u8D77\u59CB\u5730\u5740\uFF0C\u5E76\u8BBE\u7F6E256\u79CD\u989C\u8272\u7684RGB\u503C\u3002 \u8FD9\u91CC\uFF0C\u6211\u4EEC\u521B\u5EFA\u7684\u989C\u8272\u4ECE\u7EFF\u8272\u6E10\u53D8\u4E3A\u7EA2\u8272\u5E76\u518D\u6B21\u6E10\u53D8\u56DE\u7EFF\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
uint32_t cacheBuffer[320*1024/4]; //simulate PSRAM
uint16_t* psram = (uint16_t*)cacheBuffer;
#else
uint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers
#endif

Screen1View::Screen1View()
{
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();

    //Create one dynamic bitmap
    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache
    const uint16_t palSize = 256;
    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);
    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));

    if (dynamicBitmap1 == BITMAP_INVALID)
    {
        touchgfx_printf("Unable to create dynamic bitmap\\n");
    }
    else
    {
        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);

        uint8_t* pixel = data;
        //make colored rows
        for (int y = 0; y<256; y++)
        {
            for (int x = 0; x<200; x++)
            {
                *pixel++ = y;
            }
        }

        uint32_t byteSize = 200*256;
        byteSize = ((byteSize + 3) & ~3);

        //Palette starts four bytes after the pixels
        uint8_t* pal = (data + byteSize + 4);

        //Make palette with 256 colors from green to red to green
        for (int i = 0; i < palSize; i++)
        {
            //BGR
            pal[i * 3 + 0] = 0x00;
            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));
            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5F97\u5230\u4E86\u4E00\u4E2A\u8FD9\u6837\u7684\u5C4F\u5E55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",
    mdxType: "Figure"
  }, "\u663E\u793AL8\u56FE\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "manipulating-the-palette"
  }), `\u64CD\u4F5C\u8C03\u8272\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u6211\u4EEC\u53EF\u4EE5\u8BBF\u95EE\u52A8\u6001L8\u4F4D\u56FE\u4F7F\u7528\u7684\u8C03\u8272\u677F\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8F7B\u677E\u5730\u64CD\u4F5C\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5C06\u8C03\u8272\u677F\u989C\u8272\u5FAA\u73AF\u6539\u53D8\uFF0C\u6BCF\u6B21\u5411\u4E0B\u5FAA\u73AF\u4E00\u4E2A\u989C\u8272\u503C\uFF0C\u5E76\u5F3A\u5236\u6BCF\u5E27\u91CD\u65B0\u7ED8\u5236\u56FE\u50CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
void Screen1View::handleTickEvent()
{
    //get palette address
    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());
    uint32_t byteSize = 200*256;
    byteSize = ((byteSize + 3) & ~3);
    const int palSize = (data[3] << 8) | data[2];
    uint8_t* pal = (data + byteSize + 4);

    //Cycle palette, copy color 0
    int8_t blue = pal[0], green = pal[1], red = pal[2];

    //Move palette down, 1->0, 2->1, ...
    for (int i = 3; i < palSize * 3; i++)
    {
        pal[i - 3] = pal[i];
    }

    //Insert color 0 as color 255
    pal[(palSize - 1) * 3 + 0] = blue;
    pal[(palSize - 1) * 3 + 1] = green;
    pal[(palSize - 1) * 3 + 2] = red;

    //Force redraw by invalidating
    imageDynamic.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4F1A\u9020\u6210\u52A8\u6001\u5411\u4E0A\u79FB\u52A8\u52A8\u6001\u4F4D\u56FE\u4E2D\u7684\u989C\u8272\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "200",
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",
    mdxType: "Figure"
  }, "L8\u8C03\u8272\u677F\u5FAA\u73AF\u8272"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);