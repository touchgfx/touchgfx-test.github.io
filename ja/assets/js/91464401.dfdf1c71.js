"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[506],{

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

/***/ 39487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function FigureWithPoints(props) {
  const width = props.width;
  const height = props.height;
  const points_array = props.points || [];
  const imgSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.imageSource);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: imgSrc,
    target: "_blank"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    width,
    height,
    src: imgSrc
  })), points_array.map(function(point, index) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" },
      viewBox: "0 0 500 500"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(" + point[0] + ", " + point[1] + ")"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      id: "p1",
      d: "M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",
      fill: "white",
      stroke: "black"
    }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
      x: "11.7",
      y: "9.5",
      "font-size": "x-small",
      "dominant-baseline": "middle",
      "text-anchor": "middle"
    }, index + 1)));
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children)));
}
/* harmony default export */ __webpack_exports__["Z"] = (FigureWithPoints);


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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


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

/***/ 52177:
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
/* harmony import */ var _site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39487);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
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
  id: "tutorial-01",
  title: "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB1: \u30B5\u30F3\u30D7\u30EB\u3092\u8A66\u3059"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-01",
  "id": "tutorials/tutorial-01",
  "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB1: \u30B5\u30F3\u30D7\u30EB\u3092\u8A66\u3059",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-01",
  "permalink": "/4.20/ja/docs/tutorials/tutorial-01",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-01",
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB1: \u30B5\u30F3\u30D7\u30EB\u3092\u8A66\u3059"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Tutorials",
    "permalink": "/4.20/ja/docs/category/tutorials"
  },
  "next": {
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB2: \u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210",
    "permalink": "/4.20/ja/docs/tutorials/tutorial-02"
  }
};
const assets = {};





const toc = [{
  value: "\u306F\u3058\u3081\u306B",
  id: "getting-started",
  level: 2
}, {
  value: "TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30F3\u30D7\u30EB\u3092\u5B9F\u884C",
  id: "running-an-example-using-touchgfx-simulator",
  level: 2
}, {
  value: "\u30C6\u30FC\u30DE\u306E\u9078\u629E",
  id: "selecting-theme",
  level: 3
}, {
  value: "UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u9078\u629E",
  id: "selecting-a-ui-template",
  level: 3
}, {
  value: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",
  id: "creating-a-project",
  level: 3
}, {
  value: "TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C",
  id: "running-touchgfx-simulator",
  level: 3
}, {
  value: "STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u30B5\u30F3\u30D7\u30EB\u3092\u5B9F\u884C",
  id: "running-an-example-on-an-stm32-evaluation-kit",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001TouchGFX\u306E\u57FA\u672C\u306B\u3064\u3044\u3066\u5B66\u3073\u307E\u3059\u3002 TouchGFX\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u65B9\u6CD5\u3084\u3001\u63D0\u4F9B\u3055\u308C\u305F\u30B5\u30F3\u30D7\u30EB\u3092TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u304A\u3088\u3073STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u898B\u3066\u3044\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "getting-started"
  }), `\u306F\u3058\u3081\u306B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u306F\u3058\u3081\u306B\u3001TouchGFX Designer\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 TouchGFX\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation"
  }), `\u3053\u3061\u3089`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-using-touchgfx-simulator"
  }), `TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30F3\u30D7\u30EB\u3092\u5B9F\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306B\u306F\u3001TouchGFX Designer\u3067\u4F7F\u7528\u3067\u304D\u308BUI\u30B5\u30F3\u30D7\u30EB\u304C\u3001\u591A\u6570\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30B5\u30F3\u30D7\u30EB\u306FTouchGFX\u306E\u5177\u4F53\u7684\u306A\u30C8\u30D4\u30C3\u30AF\u306B\u3064\u3044\u3066\u5B66\u3076\u305F\u3081\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002\u3059\u3079\u3066\u3001TouchGFX\u306E1\u3064\u306E\u7279\u5B9A\u306E\u30C8\u30D4\u30C3\u30AF\u307E\u305F\u306F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u7126\u70B9\u3092\u7D5E\u3063\u3066\u3044\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-theme"
  }), `\u30C6\u30FC\u30DE\u306E\u9078\u629E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306B\u306F\u3001Light\uFF08\u660E\uFF09\u3068Dark\uFF08\u6697\uFF09\u3068\u3044\u30462\u3064\u306E\u30AB\u30E9\u30FC\uFF65\u30B9\u30AD\u30FC\u30E0\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX Designer\u3092\u4F7F\u3044\u59CB\u3081\u308B\u3068\u3001\u307E\u305A\u30B9\u30AD\u30FC\u30E0\u3092\u9078\u629E\u3059\u308B\u3088\u3046\u306B\u6C42\u3081\u3089\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u5F8C\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[270, 172]],
    imageSource: "/img/tutorials/tutorial-01/select-theme.png",
    mdxType: "FigureWithPoints"
  }, "\u30C6\u30FC\u30DE\u3092\u9078\u629E\u3059\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30FC\u30DE\u3092\u9078\u629E\u3057\u3066\u3001"OK"\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001Light\uFF08\u660E\uFF09\u30B9\u30AD\u30FC\u30E0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-a-ui-template"
  }), `UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u9078\u629E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3089\u306E\u30B5\u30F3\u30D7\u30EB\u3092\u3001\u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u6700\u521D\u306E\u4E00\u6B69\u3068\u3057\u3066\u30B5\u30F3\u30D7\u30EB\u3092\u4F7F\u7528\u3057\u305F\u308A\u3001\u53C2\u7167\u4F8B\u3068\u3057\u3066\u4F7F\u7528\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u3001TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30E6\u30FC\u30B6\u306EPC\u4E0A\u3067\u5B9F\u884C\u3001STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u5B9F\u884C\u3001\u3042\u308B\u3044\u306F\u30AB\u30B9\u30BF\u30E0\u306ESTM32\u30D9\u30FC\u30B9\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30F3\u30D7\u30EB\u304B\u3089\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3059\u308B\u306B\u306F\u3001\u5DE6\u4E0A\u9685\u306E"Examples"\u30A2\u30A4\u30B3\u30F3\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u30B5\u30F3\u30D7\u30EB\u3092\u958B\u304F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u3001\u4F7F\u7528\u53EF\u80FD\u306AUI\u30B5\u30F3\u30D7\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[110, 50]],
    imageSource: "/img/tutorials/tutorial-01/all-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u30B5\u30F3\u30D7\u30EB\u3092\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Animated Image Example"\uFF081\uFF09\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 200]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "Animated Image Example\u3092\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-project"
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u6E96\u5099\u304C\u6574\u3044\u307E\u3057\u305F\u3002 \u3053\u3053\u3067\u306F\u3001"MyAnimatedImageExample"\u3068\u3044\u3046\u540D\u524D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u63D0\u4F9B\u3055\u308C\u3001\u53F3\u5074\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u914D\u7F6E\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u3092\u3001\u9078\u629E\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\uFF081\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Create"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 TouchGFX Designer\u304C\u3001\u30B5\u30F3\u30D7\u30EB\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u5B8C\u5168\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u304B\u304B\u308B\u6642\u9593\u306F\u3001\u30E6\u30FC\u30B6\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u901F\u5EA6\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "running-touchgfx-simulator"
  }), `TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306B\u3001\u7D50\u5408\u6E08\u307F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 Windows\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u53F3\u4E0B\u306B\u3042\u308B"Run Simulator"\u30DC\u30BF\u30F3\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u306E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5`), ` \u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[463, 245]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u6E96\u5099\u5B8C\u4E86"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u304C\u3001\u901A\u5E38\u306EWindows\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30BF\u30A4\u30C8\u30EB\u30D0\u30FC\u306B\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 "Start"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B5\u30F3\u30D7\u30EB\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",
    mdxType: "Figure"
  }, "TouchGFX\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u5148\u306B\u9032\u3081\u308B\u524D\u306B\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3055\u3089\u306B\u3044\u304F\u3064\u304B\u306E\u30B5\u30F3\u30D7\u30EB\u3092\u8A66\u3057\u3066\u307F\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 File->New\u306E\u9806\u306B\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u524D\u3068\u540C\u3058\u3088\u3046\u306B\u65B0\u3057\u3044UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u9078\u629E\u3059\u308B\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-on-an-stm32-evaluation-kit"
  }), `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u30B5\u30F3\u30D7\u30EB\u3092\u5B9F\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001STM32F746-Disco\u30DC\u30FC\u30C9\u7528\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3059\u308B\u65B9\u6CD5\u3068\u3001\u305D\u306E\u30DC\u30FC\u30C9\u4E0A\u3067TouchGFX\u306E\u3044\u305A\u308C\u304B\u306E\u30B5\u30F3\u30D7\u30EB\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u5B66\u7FD2\u3057\u307E\u3059\u3002 STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u98DB\u3070\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5225\u306ESMT32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30DC\u30FC\u30C9\u306E\u30EA\u30B9\u30C8\u3092\u898B\u3066\u3001\u305D\u306E\u30DC\u30FC\u30C9\u304C\u30EA\u30B9\u30C8\u306B\u3042\u308B\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306B\u306F\u3001\u5E83\u7BC4\u56F2\u306ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3068\u5408\u81F4\u3059\u308B\u65E2\u6210\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u30EA\u30B9\u30C8\u304C\u4ED8\u5C5E\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u30D9\u30FC\u30B9\u306B\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u5DE6\u4E0A\u9685\u306B\u3042\u308B"Examples"\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001TouchGFX Designer\u3067\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3068\u3053\u308D\u304B\u3089\u3084\u308A\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u30B5\u30F3\u30D7\u30EB\u304B\u3089\u958B\u59CB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Animated Image Example"\u3092\u9078\u629E\u3057\u307E\u3059\uFF08\u307E\u3060\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\uFF09\u3002 "Select Hardware"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u4F7F\u7528\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067"Simulator"\u306F\u3001Windows\u4E0A\u3067\u3057\u304B\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[70, 10]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "Animated Image Example\u3092\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u69CB\u6210\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[176, 140], [440, 215]],
    imageSource: "/img/tutorials/tutorial-01/select-hardware.png",
    mdxType: "FigureWithPoints"
  }, "Animated Image Example\u3092\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001STM32F746-Disco\u30DC\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001"STM32F746G Discovery Kit"\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u6B21\u306B"Select"\uFF082\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u6E96\u5099\u304C\u6574\u3044\u307E\u3057\u305F\u3002 \u304A\u597D\u304D\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001"MyAnimatedImageExample746"\u306B\u5909\u66F4\u3057\u307E\u3057\u305F\u3002 "Create"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D9A\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[460, 240]],
    imageSource: "/img/tutorials/tutorial-01/create-the-final-project-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5916\u89B3\u306F\u3001\u524D\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u898B\u305F\u3082\u306E\u3068\u4F3C\u3066\u3044\u307E\u3059\u3002 \u552F\u4E00\u306E\u76F8\u9055\u70B9\u306F\u3001"Run Simulator"\u30DC\u30BF\u30F3\uFF082\uFF09\u306E\u6A2A\u306B"Run Target"\u30DC\u30BF\u30F3\uFF081\uFF09\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u30DC\u30BF\u30F3\uFF08\u307E\u305F\u306F\u30AD\u30FC\u30DC\u30FC\u30C9\u306E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F6`), ` \u30AD\u30FC\uFF09\u3092\u62BC\u3059\u3068\u3001TouchGFX Designer\u304CGNU ARM C++\u30B3\u30F3\u30D1\u30A4\u30E9\u3092\u4F7F\u7528\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u30D5\u30E9\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306F\u3001\u304A\u4F7F\u3044\u306E\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u901F\u5EA6\u3068\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8907\u96D1\u3055\u306B\u3088\u3063\u3066\u3001\u6570\u5206\u7A0B\u5EA6\u304B\u304B\u308A\u307E\u3059\u3002 \u9032\u6357\u72B6\u6CC1\u306F\u3001TouchGFX Designer\u4E0B\u90E8\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\uFF65\u30D0\u30FC\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 "Detailed Log"\u30DC\u30BF\u30F3\uFF083\uFF09\uFF08\u307E\u305F\u306F\u30AD\u30FC\u30DC\u30FC\u30C9\u306E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + L`), ` \u30AD\u30FC\uFF09\u3092\u62BC\u3059\u3068\u3001\u30D3\u30EB\u30C9\u304A\u3088\u3073\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30B9\u30C6\u30C3\u30D7\u306E\u8A73\u7D30\u3092\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[480, 250], [465, 250], [100, 250], [0, 240]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u6E96\u5099\u5B8C\u4E86"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30E9\u30C3\u30B7\u30E5\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001TouchGFX Designer\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\uFF65\u30D0\u30FC\u306B"Flashing Done"\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30DC\u30FC\u30C9\u4E0A\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u7A3C\u50CD\u3057\u3066\u3044\u308B\u306E\u3092\u78BA\u8A8D\u3067\u304D\u308B\u306F\u305A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30BF\u30FC\u30B2\u30C3\u30C8\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u306B\u306F\u3001STM32CubeProgrammer / ST-Link\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeprog.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stsw-link004.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u4E0B\u306E"Files"\u30DC\u30BF\u30F3\uFF084\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u30D6\u30E9\u30A6\u30B6\u304C\u958B\u304D\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u914D\u7F6E\u5148\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `build\\bin`), `\u306B\u79FB\u52D5\u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-01/the-projects-binary-files.png",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A1\u30A4\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `target.hex`), `\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u304A\u4F7F\u3044\u306E\u30DC\u30FC\u30C9\u306ESTM32\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002 \u3053\u308C\u306F\u3001TouchGFX Designer\u304C\u30E6\u30FC\u30B6\u306E\u30DC\u30FC\u30C9\u7528\u306B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeProgrammer\u307E\u305F\u306FST-Link\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30DC\u30FC\u30C9\u3092\u624B\u52D5\u3067\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }), `\u300C\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30D5\u30E9\u30C3\u30B7\u30E5\u300D\u30DA\u30FC\u30B8`), `\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);