"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1905],{

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

/***/ 46749:
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
  id: "box-progress",
  title: "Box Progress\uFF08\u30DC\u30C3\u30AF\u30B9\uFF65\u30D7\u30ED\u30B0\u30EC\u30B9\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/progress-indicators/box-progress",
  "id": "development/ui-development/ui-components/progress-indicators/box-progress",
  "title": "Box Progress\uFF08\u30DC\u30C3\u30AF\u30B9\uFF65\u30D7\u30ED\u30B0\u30EC\u30B9\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/box-progress.mdx",
  "sourceDirName": "development/ui-development/ui-components/progress-indicators",
  "slug": "/development/ui-development/ui-components/progress-indicators/box-progress",
  "permalink": "/4.20/ja/docs/development/ui-development/ui-components/progress-indicators/box-progress",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "box-progress",
    "title": "Box Progress\uFF08\u30DC\u30C3\u30AF\u30B9\uFF65\u30D7\u30ED\u30B0\u30EC\u30B9\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Progress Indicators",
    "permalink": "/4.20/ja/docs/category/progress-indicators"
  },
  "next": {
    "title": "Image Progress\uFF08\u753B\u50CF\u30D7\u30ED\u30B0\u30EC\u30B9\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/ui-components/progress-indicators/image-progress"
  }
};
const assets = {};


const toc = [{
  value: "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7",
  id: "widget-group",
  level: 2
}, {
  value: "\u30D7\u30ED\u30D1\u30C6\u30A3",
  id: "properties",
  level: 2
}, {
  value: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3",
  id: "interactions",
  level: 2
}, {
  value: "\u30A2\u30AF\u30B7\u30E7\u30F3",
  id: "actions",
  level: 3
}, {
  value: "\u30C8\u30EA\u30AC",
  id: "triggers",
  level: 3
}, {
  value: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
  id: "performance",
  level: 2
}, {
  value: "\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9",
  id: "generated-code",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9",
  id: "user-code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Box Progress\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../images/image"
  }), `Image\uFF08\u753B\u50CF\uFF09`), `\u4E0A\u3067\u30B7\u30F3\u30D7\u30EB\u306A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../shapes/box"
  }), `Box\uFF08\u30DC\u30C3\u30AF\u30B9\uFF09`), `\u3092\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u3068\u3057\u3066\u4F7F\u7528\u3057\u3066\u3001\u73FE\u5728\u306E\u9032\u6357\u72B6\u6CC1\u3092\u793A\u3057\u307E\u3059\u3002 \u30DC\u30C3\u30AF\u30B9\u306E\u8272\u3001\u30A2\u30EB\u30D5\u30A1\u5024\u3001\u30DC\u30C3\u30AF\u30B9\u304C\u9032\u3080\u65B9\u5411\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3092\u4F5C\u6210\u3057\u3001\u305D\u308C\u306B\u5408\u3046\u3088\u3046\u306B\u3001\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u3055\u307E\u3056\u307E\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\uFF08\u4F4D\u7F6E\u3084\u30B5\u30A4\u30BA\u306A\u3069\uFF09\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/box-progress/widget-appearance.gif",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u5B9F\u884C\u3055\u308C\u308BBox Progress"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widget-group"
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Box Progress\u306F\u3001TouchGFX Designer\u306EProgress Indicators\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u5185\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/box-progress/widget-group-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EBox Progress"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "properties"
  }), `\u30D7\u30ED\u30D1\u30C6\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306EBox Progress\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30B0\u30EB\u30FC\u30D7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Name`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u540D\u524D\u3002 Name\u306F\u3001TouchGFX Designer\u304A\u3088\u3073\u30B3\u30FC\u30C9\u3067\u4F7F\u7528\u3055\u308C\u308B\u4E00\u610F\u306E\u8B58\u5225\u5B50\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Location`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `X\u304A\u3088\u3073Y\u306F\u3001\u89AA\u3092\u57FA\u6E96\u3068\u3057\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5DE6\u4E0A\u9685\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `W\u304A\u3088\u3073H\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5E45\u3068\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Box Progress\u306E\u30B5\u30A4\u30BA\u306F\u3001\u9078\u629E\u3057\u305F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u306E\u30B5\u30A4\u30BA\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Lock\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u73FE\u5728\u306EX\u3001Y\u3001W\u3001H\u3067\u30ED\u30C3\u30AF\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30ED\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u901A\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Visible\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u53EF\u8996\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u901A\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Style`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Style\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4E8B\u524D\u5B9A\u7FA9\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u9078\u629E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u4E8B\u524D\u5B9A\u7FA9\u3055\u308C\u305F\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u3053\u308C\u3089\u306E\u30B9\u30BF\u30A4\u30EB\u306B\u306F\u3001\u81EA\u7531\u306B\u4F7F\u7528\u3067\u304D\u308B\u753B\u50CF\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Image & Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Background\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Progress\u306F\u3001\u9032\u6357\u30DC\u30C3\u30AF\u30B9\u306E\u8272\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Progress Position`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `X\u304A\u3088\u3073Y\u5EA7\u6A19\u306F\u3001\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u4F4D\u7F6E\u3092\u57FA\u6E96\u3068\u3057\u3066\u9032\u6357\u30DC\u30C3\u30AF\u30B9\u306E\u5DE6\u4E0A\u9685\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `W\u304A\u3088\u3073H\u306F\u3001\u9032\u6357\u30DC\u30C3\u30AF\u30B9\u306E\u5E45\u3068\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Values`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Range Min\u304A\u3088\u3073Range Max\u306F\u3001\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u6700\u5C0F\u304A\u3088\u3073\u6700\u5927\u6574\u6570\u5024\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Initial\u306F\u3001\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u521D\u671F\u5024\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002Steps Total\u306F\u3001\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u304C\u65B0\u3057\u3044\u5024\u3092\u30EC\u30DD\u30FC\u30C8\u3059\u308B\u3068\u304D\u306E\u9593\u9694\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u9032\u6357\u30920%\u300110%\u300120%\u3001...100%\u3068\u3044\u3046\u7C92\u5EA6\u3067\u30EC\u30DD\u30FC\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3001\u30C8\u30FC\u30BF\u30EB\u5024\u306F10\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Steps Min\u306F\u3001\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u304C\u793A\u3059\u6700\u5C0F\u30B9\u30C6\u30C3\u30D7\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Appearance`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Direction\u306F\u3001\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u9032\u884C\u65B9\u5411\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Alpha\u306F\u3001\u9032\u6357\u30DC\u30C3\u30AF\u30B9\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Mixins`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Draggable\u306F\u3001\u5B9F\u884C\u6642\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u53EF\u80FD\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `ClickListener\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u767A\u884C\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `FadeAnimator\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CAlpha\u5024\u3078\u306E\u5909\u66F4\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `MoveAnimator\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CX\u304A\u3088\u3073Y\u5024\u3078\u306E\u5909\u66F4\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001Box Progress\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u30C8\u30EA\u30AC\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "actions"
  }), `\u30A2\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u56FA\u6709\u306E\u30A2\u30AF\u30B7\u30E7\u30F3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Set value`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u6A19\u6E96\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Move widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6642\u9593\u306E\u7D4C\u904E\u306B\u4F34\u3063\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u65B0\u3057\u3044\u4F4D\u7F6E\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Fade widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6642\u9593\u306E\u7D4C\u904E\u306B\u4F34\u3063\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Hide widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u975E\u8868\u793A\u306B\u3057\u307E\u3059\uFF08\u53EF\u8996\u6027\u3092false\u306B\u8A2D\u5B9A\u3057\u307E\u3059\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Show widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u975E\u8868\u793A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\uFF08\u53EF\u8996\u6027\u3092true\u306B\u8A2D\u5B9A\u3057\u307E\u3059\uFF09\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "triggers"
  }), `\u30C8\u30EA\u30AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Box Progress\u306F\u30C8\u30EA\u30AC\u3092\u767A\u884C\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Box Progress\u306F\u30DC\u30C3\u30AF\u30B9\u3068\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u3001Box Progress\u306F\u753B\u50CF\u63CF\u753B\u306B\u4F9D\u5B58\u3057\u3001\u307B\u3068\u3093\u3069\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u9AD8\u901F\u51E6\u7406\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3042\u308B\u3068\u898B\u306A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../general-ui-component-performance"
  }), `\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code"
  }), `\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306E\u57FA\u5E95\u30AF\u30E9\u30B9\u306E\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9\u3092\u898B\u308B\u3068\u3001TouchGFX Designer\u306B\u3088\u308BBox Progress\u306E\u8A2D\u5B9A\u65B9\u6CD5\u304C\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `boxProgress.setXY(148, 126);
boxProgress.setProgressIndicatorPosition(2, 2, 180, 16);
boxProgress.setRange(0, 100);
boxProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);
boxProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_0_DEGREES_ID));
boxProgress.setColor(touchgfx::Color::getColorFromRGB(0, 151, 255));
boxProgress.setValue(0);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u4F8B\u306F\u3001\u9032\u6357\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3059\u308B\u305F\u3081\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent()`), `\u95A2\u6570\u3092\u5B9F\u88C5\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "box-progress"
  }), `\u3053\u306E\u8A18\u4E8B\u306E\u5192\u982D`), `\u3067\u793A\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
    virtual void handleTickEvent();
protected:
    bool increase = true;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::handleTickEvent()
{
    int currentValue = boxProgress.getValue();
    int16_t max;
    int16_t min;
    boxProgress.getRange(min, max);

    if (currentValue == min)
    {
        increase = true;
    }
    else if (currentValue == max)
    {
        increase = false;
    }

    int nextValue = increase == true ? currentValue+1 : currentValue-1;

    boxProgress.setValue(nextValue);
}\`\`\`
 currentValue+1 : currentValue-1; boxProgress.setValue(nextValue); } </code></pre>

<Tip>
\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u95A2\u6570\u3084\u3001BoxProgress\u30AF\u30E9\u30B9\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u305D\u306E\u4ED6\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5916\u89B3\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001 <InlineCode>boxProgress.invalidate()</InlineCode> \u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u518D\u63CF\u753B\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002
</Tip>

### TouchGFX Designer\u306E\u4F8B {#touchgfx-designer-examples}

Box Progress\u3092\u3055\u3089\u306B\u63A2\u7D22\u3059\u308B\u306B\u306F\u3001\u6B21\u306EUI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002

<Figure imageSource="/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png">TouchGFX Designer\u306EProgress Indicator Example UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8</Figure>

## API\u53C2\u7167 {#api-reference}

<FurtherReading>
  <li>
    <Link to="../../../../api/classes/classtouchgfx_1_1_box_progress">BoxProgress\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167</Link>
  </li>
</FurtherReading>
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);