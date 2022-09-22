"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7084],{

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

/***/ 88373:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "02-cpu-running",
  title: "2. CPU\u52D5\u4F5C",
  sidebar_label: "2. CPU\u52D5\u4F5C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/02-cpu-running",
  "id": "development/board-bring-up/how-to/02-cpu-running",
  "title": "2. CPU\u52D5\u4F5C",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/02-cpu-running.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/02-cpu-running",
  "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/02-cpu-running",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "02-cpu-running",
    "title": "2. CPU\u52D5\u4F5C",
    "sidebar_label": "2. CPU\u52D5\u4F5C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/01-create-project"
  },
  "next": {
    "title": "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/03-display-internal"
  }
};
const assets = {};



const toc = [{
  value: "\u52D5\u6A5F",
  id: "motivation",
  level: 2
}, {
  value: "\u76EE\u6A19",
  id: "goal",
  level: 2
}, {
  value: "\u691C\u8A3C",
  id: "verification",
  level: 3
}, {
  value: "\u524D\u63D0\u6761\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u4F5C\u696D\u5185\u5BB9",
  id: "do",
  level: 2
}, {
  value: "\u30B7\u30B9\u30C6\u30E0\uFF65\u30AF\u30ED\u30C3\u30AF",
  id: "system-clock",
  level: 3
}, {
  value: "Flash\u3068RAM\u306E\u30B5\u30A4\u30BA\u304A\u3088\u3073\u901F\u5EA6",
  id: "flash-and-ram-size-and-speed",
  level: 3
}, {
  value: "\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8",
  id: "linker-script",
  level: 3
}, {
  value: "F7\u304A\u3088\u3073H7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",
  id: "cache-on-f7-and-h7",
  level: 3
}, {
  value: "TouchGFX\u5185\u90E8\u306EDCache\u30B9\u30C6\u30FC\u30C8\uFF65\u30DE\u30B7\u30F3",
  id: "touchgfx-internal-dcache-state-machine",
  level: 4
}, {
  value: "\u53C2\u8003\u8CC7\u6599",
  id: "further-readings",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30B3\u30A2\u3001\u5185\u8535RAM\u3001Flash\u304C\u76EE\u7684\u3068\u3059\u308B\u30AF\u30ED\u30C3\u30AF\u901F\u5EA6\u3067\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306F\u3001\u3069\u306E\u3088\u3046\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u901F\u5EA6\u3067\u3082\u52D5\u4F5C\u53EF\u80FD\u3067\u3059\u304C\u3001\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A\u3092\u8AA4\u308B\u3068\u3001\u5FC5\u8981\u306A\u6027\u80FD\u3092\u6E80\u305F\u305B\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5F8C\u306E\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u3067\u306F\u3001\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306EI2C\u30AF\u30ED\u30C3\u30AF\u306A\u3069\u3001\u7279\u5B9A\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\uFF65\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305D\u306E\u3088\u3046\u306A\u8A2D\u5B9A\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u6B63\u3057\u3044\u901F\u5EA6\u3067\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u306A\u3044\u9650\u308A\u3001\u884C\u3048\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u306F\u30B7\u30B9\u30C6\u30E0\uFF65\u30AF\u30ED\u30C3\u30AF\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30AF\u30ED\u30C3\u30AF\u306F\u5206\u5468\u3055\u308C\u3066\u3001FCLK\u30B3\u30A2\uFF65\u30AF\u30ED\u30C3\u30AF\u3084\u3001APB1\u306A\u3069\u306E\u5404\u7A2E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\u3092\u751F\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u76EE\u6A19\u306F\u3001\u30AF\u30ED\u30C3\u30AF\u304C\u9069\u5207\u306B\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3055\u3089\u306B\u3001\u5185\u8535RAM\u304A\u3088\u3073Flash\u304C\u671F\u5F85\u901A\u308A\u306E\u901F\u5EA6\u3067\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3053\u3068\u3082\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u691C\u8A3C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306B\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u691C\u8A3C\u5185\u5BB9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `SystemCoreClock\u5909\u6570\u306E\u5024\u304C\u6B63\u3057\u3044`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u3001\u76EE\u7684\u306E\u5468\u6CE2\u6570\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u8535RAM\u3092\u8AAD\u307F\u51FA\u305B\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u671F\u5F85\u3055\u308C\u308B\u5BB9\u91CF\u306E\u5185\u8535RAM\u3092\u5099\u3048\u3001\u3053\u308C\u304C\u8AAD\u51FA\u3057\u53EF\u80FD\u3067\u3001\u305D\u306E\u901F\u5EA6\u3092\u6E2C\u5B9A\u3067\u304D\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u8535Flash\u3092\u8AAD\u307F\u51FA\u305B\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u671F\u5F85\u3055\u308C\u308B\u5BB9\u91CF\u306E\u5185\u8535Flash\u3092\u5099\u3048\u3001\u3053\u308C\u304C\u8AAD\u51FA\u3057\u53EF\u80FD\u3067\u3001\u305D\u306E\u901F\u5EA6\u3092\u6E2C\u5B9A\u3067\u304D\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u7121\u52B9\u306B\u3057\u3066\u5B9F\u884C\u3059\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u8907\u96D1\u3055\u304C\u6291\u3048\u3089\u308C\u3001\u52D5\u4F5C\u304C\u308F\u304B\u308A\u3084\u3059\u304F\u306A\u308B\u3053\u3068\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u524D\u63D0\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u524D\u63D0\u6761\u4EF6\u3092\u793A\u3057\u307E\u3059\u3002\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30AF\u30ED\u30C3\u30AF\uFF65\u30BD\u30FC\u30B9\u306B\u95A2\u3059\u308B\u60C5\u5831\u3002 \u30AF\u30EA\u30B9\u30BF\u30EB\u3092\u4F7F\u7528\u3059\u308B\u306E\u304C\u4E00\u822C\u7684\u3067\u3059\u304C\u3001\u305D\u306E\u4ED6\u306E\u65B9\u6CD5\u3082\u53EF\u80FD\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u4F5C\u696D\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u304B\u3089\u306F\u3001\u5FC5\u8981\u306A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u5468\u6CE2\u6570\u3092\u5F97\u308B\u305F\u3081\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A\u3092\u8ABF\u6574\u3059\u308B\u30B9\u30C6\u30C3\u30D7\u3092\u9032\u3081\u3066\u3044\u304D\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001\u5185\u8535Flash\u306E\u8AAD\u51FA\u3057\u901F\u5EA6\u306E\u6E2C\u5B9A\u65B9\u6CD5\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "system-clock"
  }), `\u30B7\u30B9\u30C6\u30E0\uFF65\u30AF\u30ED\u30C3\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u306E\uFF3BClock Configuration\uFF3D\u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u4F7F\u7528\u3059\u308B\u7279\u5B9A\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30AF\u30ED\u30C3\u30AF\uFF65\u30C4\u30EA\u30FC\u306E\u6982\u8981\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F8B\u3067\u306F\u3001\u30AF\u30ED\u30C3\u30AF\uFF65\u30BD\u30FC\u30B9\u3068\u3057\u3066HSI\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u591A\u304F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5916\u90E8\u30AF\u30EA\u30B9\u30BF\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u304C\u3001\u305D\u306E\u5834\u5408\u306FHSE\u3092\u9069\u5207\u306A\u5206\u5468\u56DE\u8DEF(/M) \u3084\u9013\u500D\u56DE\u8DEF(/N) \u3068\u3068\u3082\u306B\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30A2\u30C9\u30D0\u30A4\u30B9\u306F\u3001\u672C\u30AC\u30A4\u30C9\u306E\u5BFE\u8C61\u5916\u3067\u3059\u3002 \u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u305F\u3089\u3001STM32CubeMX\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(\u53F3\u4E0A\u9685\u306E\uFF3BGenerate Code\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30A2\uFF65\u30AF\u30ED\u30C3\u30AF(HCLK) \u306F\u3001\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306B\u3088\u308A\u3001\u5B9F\u884C\u6642\u306B\u8A08\u7B97\u3055\u308C\u3001\u5909\u6570\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5909\u6570\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B3\u30FC\u30C9\u3067\u4F7F\u7528\u3059\u308C\u3070\u3001\u30AF\u30ED\u30C3\u30AF\uFF65\u30B5\u30A4\u30AF\u30EB\u6570\u3068\u79D2\u6570\u3084\u8D77\u52D5\u30BF\u30A4\u30DE\u306A\u3069\u306E\u9593\u306E\u6B63\u78BA\u306A\u5909\u63DB\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u5909\u6570\u3092\u518D\u8A08\u7B97\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `SystemCoreClockUpdate()`), `\u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 Call\u6587\u306F\u3001main.c(\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30BB\u30AF\u30B7\u30E7\u30F3)\u306B\u633F\u5165\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SystemCoreClockUpdate"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u95A2\u6570\u306E\u6700\u5F8C\u306B\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u3066\u304A\u3051\u3070\u3001\u30B3\u30A2\uFF65\u30AF\u30ED\u30C3\u30AF\u3092\u78BA\u8A8D(\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066) \u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SystemCoreClock"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u3046\u4E00\u3064\u306E\u91CD\u8981\u306A\u30C6\u30B9\u30C8\uFF65\u30DD\u30A4\u30F3\u30C8\u306F\u30B7\u30B9\u30C6\u30E0\uFF65\u30BF\u30A4\u30DE\u3067\u3059\u3002 \u3053\u306E\u30BF\u30A4\u30DE\u306F\u3001HCLK\u3067\u52D5\u4F5C\u3057\u30011ms\u3054\u3068\u306B\u5272\u8FBC\u307F\u3092\u767A\u751F\u3059\u308B\u3088\u3046\u306B\u5206\u5468\u3055\u308C\u3066\u3044\u307E\u3059\u3002 STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306F\u3001\u30DF\u30EA\u79D2\u5358\u4F4D\u306E\u9045\u5EF6\u3092\u5B9F\u73FE\u3059\u308B\u305F\u3081\u306B\u3001\u3053\u306E\u30BF\u30A4\u30DE\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BF\u30A4\u30DE\u306E\u52D5\u4F5C\u306F\u3001main\u306B\u305F\u3068\u3048\u30705\u79D2\u306E\u9045\u5EF6\u3092\u633F\u5165\u3059\u308B\u3053\u3068\u3067\u30C6\u30B9\u30C8\u3067\u304D\u307E\u3059\u3002 \u9045\u5EF6\u6642\u9593\u306F\u30B9\u30C8\u30C3\u30D7\uFF65\u30A6\u30A9\u30C3\u30C1\u306A\u3069\u3067\u691C\u8A3C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u9045\u5EF6\u306E\u6E2C\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash-and-ram-size-and-speed"
  }), `Flash\u3068RAM\u306E\u30B5\u30A4\u30BA\u304A\u3088\u3073\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B7\u30B9\u30C6\u30E0\uFF65\u30BF\u30A4\u30DE\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u30E1\u30E2\u30EA\u306E\u8AAD\u51FA\u3057\u901F\u5EA6\u306E\u78BA\u8A8D\u306F\u7C21\u5358\u3067\u3059\u3002 \u30B7\u30B9\u30C6\u30E0\uFF65\u30BF\u30A4\u30DE\u306E\u5272\u8FBC\u307F\u306B\u3088\u308A\u30011\u30DF\u30EA\u79D2\u3054\u3068\u306B\u5909\u6570\u304C\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002 \u30B3\u30FC\u30C9\u306E\u524D\u5F8C\u3067\u3053\u306E\u5909\u6570\u3092\u8AAD\u307F\u51FA\u3059\u3053\u3068\u3067\u3001\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u6642\u9593\u3092(1ms\u5358\u4F4D\u3067) \u6E2C\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5404\u6240\u3067\u6642\u9593\u3092\u6E2C\u5B9A\u3067\u304D\u307E\u3059\u3002 \u7CBE\u5EA6\u306F\u3001\u305D\u308C\u307B\u3069\u9AD8\u304F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30AA\u30B7\u30ED\u30B9\u30B3\u30FC\u30D7\u306A\u3069\u306E\u5916\u90E8\u30C7\u30D0\u30A4\u30B9\u306A\u3057\u3067\u6E2C\u5B9A\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u305F\u3081\u306B\u306F\u3001\u307E\u305A\u7D50\u679C\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306E2\u3064\u306Evolatile\u5909\u6570\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u3053\u3067\u7D50\u679C\u3092\u4FDD\u5B58\u3057\u306A\u3044\u3068\u3001\u6700\u9069\u5316\u30B3\u30F3\u30D1\u30A4\u30E9\u3067\u6E2C\u5B9A\u7528\u306E\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u6E2C\u5B9A\u7D50\u679C\u3092\u4FDD\u6301\u3059\u308B\u30B0\u30ED\u30FC\u30D0\u30EB\u306Avolatile\u5909\u6570"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u3001Flash\u306E0x08000000\u304B\u30890x08020000\u307E\u3067(128Kb) \u3092\u8AAD\u307F\u51FA\u3057\u3001\u305D\u306E\u30B3\u30FC\u30C9\u306E\u6642\u9593\u3092\u6E2C\u5B9A\u3059\u308B\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8AAD\u51FA\u3057\u30EB\u30FC\u30D7\u306E\u6642\u9593\u6E2C\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u306F\u3001\u5404\u7A2E\u30E1\u30E2\u30EA\u306E\u901F\u5EA6\u306E\u691C\u8A3C\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 STM32CubeMX\u3067\u8A2D\u5B9A\u3092\u4F5C\u6210\u3057\u305F\u3089\u3001\u8AAD\u51FA\u3057\u901F\u5EA6\u3092\u6E2C\u5B9A\u3057\u3066\u7D50\u679C\u3092\u8A18\u9332\u3057\u307E\u3059\u3002 \u3053\u306E\u6E2C\u5B9A\u306F\u3001\u5F8C\u3067\u7E70\u308A\u8FD4\u3057\u691C\u8A3C\u3067\u304D\u307E\u3059\u3002  \u30E1\u30E2\u30EA\u30D0\u30F3\u30C9\u5E45(kb/s\u5358\u4F4D\u3067\u306E\u8AAD\u51FA\u3057\u901F\u5EA6) \u3092\u6E2C\u5B9A\u3059\u308B\u5834\u5408\u306F\u3001\u30C7\u30FC\u30BF\u91CF\u3068\u6E2C\u5B9A\u3055\u308C\u305F\u6642\u9593\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `16MHz\u306ESTM32F429\u3067\u306F\u3001\u30B3\u30FC\u30C9\u306F12ms\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001(\u3053\u306E\u65B9\u6CD5\u306B\u3088\u308B) \u5185\u8535Flash\u306E\u8AAD\u51FA\u3057\u901F\u5EA6\u306F\u3001128kb / 0.012s = 10,666kb/s\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E\u30EB\u30FC\u30D7\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3001\u5185\u8535Flash\u306E\u5168\u9818\u57DF\u304C\u6709\u52B9\u5316\u3055\u308C\u8AAD\u51FA\u3057\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068\u3092\u7C21\u5358\u306B\u691C\u8A3C\u3067\u304D\u307E\u3059\u3002 \u5909\u66F4\u3059\u308B\u306E\u306F\u3001\u958B\u59CB\u30A2\u30C9\u30EC\u30B9\u3068\u7D42\u4E86\u30A2\u30C9\u30EC\u30B9\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30FC\u30C9\u3067\u5185\u8535RAM\u3082\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 F429\u306E\u5834\u5408\u3001RAM\u306F\u30A2\u30C9\u30EC\u30B90x20000000\u304B\u3089\u59CB\u307E\u308A\u307E\u3059\u3002 \u30B3\u30A2\u76F4\u7D50\u30E1\u30E2\u30EA\u306F0x10000000\u3067\u3059\u3002 \u4F7F\u7528\u3059\u308B\u7279\u5B9A\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3067\u3001\u3053\u308C\u3089\u306B\u8A72\u5F53\u3059\u308B\u30E1\u30E2\u30EA\uFF65\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u307E\u3056\u307E\u306A\u30E1\u30E2\u30EA\u306B\u3064\u3044\u3066\u3001\u4F55\u5EA6\u304B\u6E2C\u5B9A\u3092\u884C\u3044\u3001\u7D50\u679C\u3092\u8A18\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002 RAM\u306B\u3064\u3044\u3066\u306F\u8AAD\u51FA\u3057\u3068\u66F8\u8FBC\u307F\u306E\u4E21\u65B9\u306E\u901F\u5EA6\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker-script"
  }), `\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3082\u3046\u4E00\u3064\u306E\u6CE8\u76EE\u3059\u3079\u304D\u3082\u306E\u3068\u3057\u3066\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u4E0A\u306ERAM\u3068Flash\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u30EA\u30F3\u30AB\u306B\u4F1D\u3048\u307E\u3059\u3002 \u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3068\u3068\u3082\u306BCubeMX\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u304C\u3001\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002 \u591A\u304F\u306E\u5834\u5408\u3001\u4ECA\u5F8C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u307E\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cache-on-f7-and-h7"
  }), `F7\u304A\u3088\u3073H7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Arm Cortex-M7\u30D9\u30FC\u30B9\u306ESTM32F7\u3068STM32H7\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u306F\u3001\u30C7\u30FC\u30BF\u304A\u3088\u3073\u547D\u4EE4\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u5B89\u5B9A\u3057\u305F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u5F97\u3089\u308C\u308B\u307E\u3067\u3001\u5C11\u306A\u304F\u3068\u3082\u30C7\u30FC\u30BF\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u7121\u52B9\u5316\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u591A\u304F\u306E\u5834\u5408\u3001\u6027\u80FD\u3092\u5927\u5E45\u306B\u5411\u4E0A\u3055\u305B\u307E\u3059\u304C\u3001\u30C6\u30B9\u30C8\u3092\u8907\u96D1\u306B\u3059\u308B\u8981\u56E0\u306B\u3082\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u5B89\u5B9A\u3057\u305F\u3089\u3001\u30C7\u30FC\u30BF\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u6709\u52B9\u5316\u3057\u3066\u69CB\u3044\u307E\u305B\u3093\u3002 \u305D\u306E\u6BB5\u968E\u306B\u306A\u308C\u3070\u3001\u554F\u984C\u306E\u539F\u56E0\u304C\u30C7\u30FC\u30BF\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u7BA1\u7406\u3067\u3042\u308B\u3053\u3068\u3092\u5BB9\u6613\u306B\u7279\u5B9A\u3067\u304D\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306F\u6B63\u5E38\u306B\u6A5F\u80FD\u3059\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30FC\u30BF\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8907\u96D1\u3055\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30B3\u30A2\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u5BFE\u3057\u3066\u8AAD\u307F\u66F8\u304D\u3092\u884C\u3046\u306E\u306B\u5BFE\u3057\u3001DMA2\u3084LTDC\u306A\u3069\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306F(\u30AD\u30E3\u30C3\u30B7\u30E5\u3067\u306F\u306A\u304F) \u30E1\u30E2\u30EA\u304B\u3089\u76F4\u63A5\u8AAD\u307F\u51FA\u3059\u3053\u3068\u306B\u8D77\u56E0\u3057\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001\u305F\u3068\u3048\u3070\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3093\u3067\u3082\u3001\u305D\u306E\u30C7\u30FC\u30BF\u306E\u4E00\u90E8\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3055\u308C\u306A\u3044\u3088\u3046\u306A\u72B6\u6CC1\u304C\u767A\u751F\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u305D\u306E\u6642\u70B9\u3067\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u304C\u307E\u3060\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3057\u304B\u66F8\u304D\u8FBC\u307E\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001LTDC\u304CRAM\u304B\u3089\u305D\u306E\u30C7\u30FC\u30BF\u3092\u898B\u3064\u3051\u3089\u308C\u306A\u304B\u3063\u305F\u305F\u3081\u3067\u3059\u3002 \u89E3\u6C7A\u7B56\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u7279\u5B9A\u306E\u6642\u70B9\u3067\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u3067\u3059\u304C\u3001\u305D\u306E\u3088\u3046\u306A\u51E6\u7406\u306F\u3082\u3063\u3068\u5F8C\u3067\u884C\u3046\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30C3\u30B7\u30E5\u52D5\u4F5C\u306F\u3001STM32CubeMX\u306E\u30B7\u30B9\u30C6\u30E0\uFF65\u30B3\u30A2\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u7121\u52B9\u5316 / \u6709\u52B9\u5316\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "touchgfx-internal-dcache-state-machine"
  }), `TouchGFX\u5185\u90E8\u306EDCache\u30B9\u30C6\u30FC\u30C8\uFF65\u30DE\u30B7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u73FE\u5728\u304A\u3088\u3073\u76F4\u8FD1\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u52D5\u4F5C\u3092\u8A18\u9332\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HARDWARE`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `SOFTWARE`), `\u306E2\u3064\u306E\u72B6\u614B\u304C\u3042\u308A\u307E\u3059\u3002 \u63CF\u753B\u52D5\u4F5C\u306E\u5927\u90E8\u5206\u304C\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u308B\u305F\u3081\u3001\u521D\u671F\u72B6\u614B\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HARDWARE`), ` \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002 \u72B6\u614B\u9077\u79FB\u304C\u767A\u751F\u3059\u308B\u3068\u3001\u30B9\u30C6\u30FC\u30C8\uFF65\u30DE\u30B7\u30F3\u304C\u9069\u5207\u306A\u4EEE\u60F3\u95A2\u6570\u3092\u547C\u3073\u51FA\u3057\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u7121\u52B9\u5316\u3092\u51E6\u7406\u3057\u307E\u3059\u3002 \u72B6\u614B\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HARDWARE`), `\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `SOFTWARE`), `\u306B\u9077\u79FB\u3059\u308B\u5834\u5408\u306F\u3001\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `void touchgfx::HAL::InvalidateCache()`), `\u3092\u547C\u3073\u51FA\u3057\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `SOFTWARE`), `\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HARDWARE`), `\u3078\u306E\u9077\u79FB\u306E\u5834\u5408\u306F\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `void touchgfx::HAL::FlushCache()`), `\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u308C\u30892\u3064\u306E\u95A2\u6570\u306E\u6A5F\u80FD\u306E\u6D3E\u751FHAL\u30AF\u30E9\u30B9\u3078\u306E\u5B9F\u88C5\u306F\u30E6\u30FC\u30B6\u306B\u59D4\u306D\u3089\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u5185\u8535DCache\u306E\u30B9\u30C6\u30FC\u30C8\uFF65\u30DE\u30B7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u3053\u308C\u3089\u306E\u6D3E\u751F\u30E1\u30BD\u30C3\u30C9\u304CDCache\u7121\u52B9\u5316\u306E\u95A2\u6570\u547C\u3073\u51FA\u3057\u3068\u3068\u3082\u306BTouchGFXGeneratedHAL\u30AF\u30E9\u30B9\u5185\u306B\u5B9F\u88C5\u3055\u308C\u308B\u305F\u3081\u3001\u7279\u6BB5\u306E\u4F5C\u696D\u306F\u4E0D\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-readings"
  }), `\u53C2\u8003\u8CC7\u6599`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u306B\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u306F\u3001STM32CubeMX\u3068STM32\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u95A2\u3059\u308B\u8A73\u7D30\u60C5\u5831\u304C\u63B2\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32CubeMX\u30E6\u30FC\u30B6\uFF65\u30DE\u30CB\u30E5\u30A2\u30EB", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "\u306E\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A\u306B\u95A2\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "STM32F7\u304A\u3088\u3073STM32H7\u306EL1\u30AD\u30E3\u30C3\u30B7\u30E5")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);