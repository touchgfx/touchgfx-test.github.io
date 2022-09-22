"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3996],{

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

/***/ 2664:
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
  id: "tutorial-05",
  title: "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB5: \u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F5C\u6210"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-05",
  "id": "tutorials/tutorial-05",
  "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB5: \u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F5C\u6210",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-05",
  "permalink": "/4.20/ja/docs/tutorials/tutorial-05",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-05",
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB5: \u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F5C\u6210"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4: \u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u3092\u5099\u3048\u305F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210",
    "permalink": "/4.20/ja/docs/tutorials/tutorial-04"
  },
  "next": {
    "title": "AbstractButton",
    "permalink": "/4.20/ja/docs/api/classes/classtouchgfx_1_1_abstract_button"
  }
};
const assets = {};



const toc = [{
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0",
  id: "adding-a-custom-action-to-a-screen",
  level: 2
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u5024\u3092\u6E21\u3059\u65B9\u6CD5",
  id: "passing-a-value-to-a-custom-action",
  level: 2
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u4F7F\u7528",
  id: "using-custom-triggers-in-custom-containers",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u3001\u72EC\u81EA\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5404\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u306F\u3001\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uFF08C++\u306E\u30B7\u30F3\u30D7\u30EB\u306Avoid\u30E1\u30BD\u30C3\u30C9\uFF09\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u3001\u3053\u308C\u3089\u306FTouchGFX Designer\u5185\u304B\u3089\u3001\u307E\u305F\u306F\u30B3\u30FC\u30C9\u3067\u3082\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u540C\u6642\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u3082\u30C8\u30EA\u30AC\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3`), `\uFF08C++\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3068\u7B49\u3057\u3044\uFF09\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u3001\u3053\u308C\u306B\u5BFE\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u53CD\u5FDC\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001\u3053\u306E\u6A5F\u80FD\u3092\u5229\u7528\u3057\u3066\u3001\u975E\u5E38\u306B\u30AF\u30EA\u30FC\u30F3\u3067\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306ATouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306F\u3001TouchGFX\u3092\u521D\u3081\u3066\u4F7F\u7528\u3059\u308B\u30E6\u30FC\u30B6\u306B\u306F\u9069\u3057\u3066\u3044\u307E\u305B\u3093\u3002 \u5F8C\u3067\u518D\u3073\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u3054\u89A7\u306B\u306A\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "adding-a-custom-action-to-a-screen"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u4EE5\u4E0B\u306E\u64CD\u4F5C\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1\u3064\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30DC\u30C3\u30AF\u30B9\u30681\u3064\u306E\u30DC\u30BF\u30F3\u306B\u3088\u308B\u3001\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u8272\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306B\u3001\u89E3\u50CF\u5EA6\u304C480 x 272\u306E\u65B0\u3057\u3044\u7A7A\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF08\u305F\u3068\u3048\u3070STM32F746\u307E\u305F\u306F\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5411\u3051\uFF09\u3092\u4F5C\u6210\u3057\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30DC\u30C3\u30AF\u30B9\uFF08"background"\u3068\u3044\u3046\u540D\u524D\uFF091\u3064\u3068\u30DC\u30BF\u30F3\uFF08"button"\u3068\u3044\u3046\u540D\u524D\uFF091\u3064\u3092\u633F\u5165\u3057\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306E\u3088\u3046\u306A\u72B6\u614B\u306B\u306A\u308B\u306F\u305A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 85]],
    imageSource: "/img/tutorials/tutorial-05/white-background-and-button-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u767D\u3044\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30DC\u30C3\u30AF\u30B9\u3068\u30DC\u30BF\u30F3\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3057\u307E\u3057\u3087\u3046\u3002 \u3053\u306E\u64CD\u4F5C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306EProperties\u30BF\u30D6\u3067\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u9078\u629E\u3057\u3066\u3001"Actions"\u30B0\u30EB\u30FC\u30D7\uFF08\u4E0A\u8A18\u306E1\uFF09\u306E+\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002 \u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306B"setBackgroundColor"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u3001"Sets the background color"\u306A\u3069\u306E\u8AAC\u660E\u3092\u5165\u529B\u3057\u307E\u3059\u3002 \u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u306F\u30BF\u30A4\u30D7\u3092\u8A2D\u5B9A\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.png",
    mdxType: "Figure"
  }, "\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u65B0\u3057\u3044\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `F4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u30AD\u30FC`), ` \u3092\u62BC\u3057\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp`), `\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor()`), `\u3068\u547C\u3070\u308C\u308B\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9\u304C\u751F\u6210\u3055\u308C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase.cpp`), `\u5185\u306B\u7A7A\u306E\u5B9F\u88C5\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u6A5F\u80FD\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), `\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u3053\u308C\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3059\u308B\u304B\u3001TouchGFX Designer\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u5F8C\u8005\u306E\u65B9\u6CD5\u3092\u8A66\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002\u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306EInteractions\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3089\u65B0\u3057\u3044\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3059\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u6642\u306BsetBackgroundColor\u3092\u547C\u3073\u51FA\u3059"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306B\u3001\u5B9F\u969B\u306B\u5B9F\u884C\u3055\u308C\u308B\u5185\u5BB9\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u3001\u65B0\u3057\u304F\u4F5C\u6210\u3057\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\uFF081\uFF09\u3092\u3001\u5225\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u30C8\u30EA\u30AC\u3068\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002 \u307E\u305A\u306F\u3001\u30C8\u30EA\u30AC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `"setBackgroundColor is called"\u306E\u767A\u751F\u6642\u306B\u3001`), `"Change box color"\u3068\u3044\u3046\u30A2\u30AF\u30B7\u30E7\u30F3\uFF082\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u5358\u7D14\u306B\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30DC\u30C3\u30AF\u30B9\u306E\u8272\u3092\u9ED2\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 60], [410, 76]],
    imageSource: "/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3setBackgroundColor\u306E\u6A5F\u80FD\u306E\u5B9F\u88C5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3057\u3001\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u304C\u9ED2\u8272\u306B\u306A\u308B\u306F\u305A\u3067\u3059\u3002 \u3053\u308C\u30671\u3064\u76EE\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u6B63\u5E38\u306B\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/black-color-result-4-17.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u304C\u9ED2\u8272\u306B\u5909\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "passing-a-value-to-a-custom-action"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u5024\u3092\u6E21\u3059\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u307E\u3067\u306B\u4F5C\u6210\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u57FA\u306B\u3057\u3066\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u64CD\u4F5C\u3092\u884C\u3046\u3053\u3068\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u6982\u5FF5\u3092\u62E1\u5F35\u3055\u305B\u3066\u3044\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setBackgroundColor\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u8FFD\u52A0\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setBackgroundColor\u306B\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092\u6E21\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u3001\u30DC\u30BF\u30F3\u306E\u62BC\u4E0B\u6642\u306B\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3092\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306B\u5909\u66F4\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u5024\u3092\u6E21\u3057\u3066\u3001\u3088\u308A\u52D5\u7684\u306B\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3082\u3046\u5C11\u3057\u8208\u5473\u6DF1\u3044\u3082\u306E\u306B\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306EInteractions\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u30012\u3064\u306E\u73FE\u5728\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u305D\u308C\u305E\u308C\u306Ex\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u4E21\u65B9\u3092\u524A\u9664\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30EA\u30FC\u30F3\u306EProperties\u30BF\u30D6\u304B\u3089`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u3068\u3044\u3046\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u79FB\u52D5\u3057\u3066\u3001Type\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AA\u30F3\u306B\u3057\u3066"colortype"\u3068\u5165\u529B\u3057\u307E\u3059\u3002\u3053\u308C\u304C\u3001\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u6E21\u3059\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u30BF\u30A4\u30D7\u306B\u306A\u308A\u307E\u3059\uFF08colortype\u306F\u8272\u3092\u8A18\u8FF0\u3059\u308B\u305F\u3081\u306E\u7D44\u8FBC\u307F\u306ETouchGFX\u30BF\u30A4\u30D7\u3067\u3059\uFF09\u3002 \u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u540D\u524D\u3092\u4ED8\u3051\u308B\u3053\u3068\u306F\u3067\u304D\u306A\u3044\u306E\u3067\u3001\u81EA\u52D5\u7684\u306B**"value"\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-type-to-action-4-17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u65B0\u3057\u304F\u8FFD\u52A0\u3057\u305F\u30D1\u30E9\u30E1\u30FC\u30BF\u5024\u3092\u4F7F\u7528\u3059\u308B\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3057\u3087\u3046\u3002 \u3053\u308C\u306B\u306F\u3001"setBackgroundColor is called"\u3068\u3044\u3046\u30C8\u30EA\u30AC\u3068\u3001"Execute C++ code"\u3068\u3044\u3046\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u307E\u305F\u3001\u65B0\u3057\u3044\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30DC\u30C3\u30AF\u30B9\u306E\u8272\u3092\u8A2D\u5B9A\u3057\u305F\u3044\u306E\u3067\u3001\u5B9F\u884C\u3059\u308B\u30B3\u30FC\u30C9\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `background.setColor(value);
background.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\u884C\u76EE\u3067\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u304C\u65B0\u3057\u3044\u8272\u3067\u5F37\u5236\u7684\u306B\u518D\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/set-color-execute-code-4-17.png",
    mdxType: "Figure"
  }, "\u6E21\u3055\u308C\u305F\u5024\u3092\u4F7F\u7528\u3057\u3066\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u8272\u3092\u5909\u66F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C8\u30EA\u30AC\u306B\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u540D\u524D\u3068\u30BF\u30A4\u30D7\uFF08"value : colortype"\uFF09\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u306B\u6CE8\u76EE\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u6642\u306B\u5B9F\u969B\u306BsetBackgroundColor\u3092\u547C\u3073\u51FA\u3059\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30C8\u30EA\u30AC"Button is clicked"\u3068\u30A2\u30AF\u30B7\u30E7\u30F3"Call Screen1 setBackgroundColor"\u306B\u5225\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u5024\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u671F\u5F85\u3055\u308C\u308B\u30BF\u30A4\u30D7\u3082\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `stdlib.h`), `\u306B\u3042\u308B\u30E9\u30F3\u30C0\u30E0\u5316\u30E1\u30BD\u30C3\u30C9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\u3092\u5229\u7528\u3057\u3066\u30010\uFF5E255\u306E\u7BC4\u56F2\u304B\u30893\u3064\u306E\u6570\u5B57\u3092\u7121\u4F5C\u70BA\u306B\u53D6\u5F97\u3057\u3001\u3053\u308C\u3089\u3092\u4F7F\u7528\u3057\u3066\u8272\u3092\u6307\u5B9A\u3057setBackgroundColor\u306B\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092\u6E21\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306B\u306F\u3001\u3053\u308C\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u542B\u3081\u308B\uFF08\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\u3059\u308B\uFF09\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4E21\u65B9\u306B\u3001TouchGFX Designer\u5185\u304B\u3089\u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u4F8B\u3067\u306F\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u306EProperties\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3001"INCLUDES"\u30B0\u30EB\u30FC\u30D7\u306B\u6B21\u306E\u3088\u3046\u306B\u5165\u529B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <stdlib.h>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/include-stdlib-4-17.png",
    mdxType: "Figure"
  }, "rand()\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u305F\u3081\u306Bstdlib\u3092\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001Value\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u3001\u6B21\u306E\u3088\u3046\u306B\u5165\u529B\u3057\u307E\u3059\uFF081\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 110]],
    imageSource: "/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u6642\u306B\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306E\u5024\u3092\u6E21\u3059"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3057\u3001\u4F55\u5EA6\u304B\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u307F\u307E\u3059\u3002 \u305D\u3057\u3066\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u304C\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306B\u5909\u5316\u3059\u308B\u306E\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-initial-4-17.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u7D50\u679C\u3001\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306B\u306A\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-custom-triggers-in-custom-containers"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3067\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3082\u5B9A\u7FA9\u3067\u304D\u308B\u306E\u3067\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u6B21\u306E\u64CD\u4F5C\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u767A\u5C55\u3055\u305B\u3066\u3044\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ColorEmitter\u3068\u3044\u3046\u540D\u524D\u306E\u65B0\u3057\u3044\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ColorEmitter\u306B"colorChanged"\u3068\u3044\u3046\u540D\u524D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u8FFD\u52A0\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `colorChanged\u30C8\u30EA\u30AC\u3092\u4F7F\u7528\u3057\u3066\u3001\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306B\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4FE1\u53F7\u3067\u9001\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `colorChanged\u30C8\u30EA\u30AC\u3092\u53D7\u3051\u53D6\u308B\u305F\u3081\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u8A2D\u5B9A\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ColorEmitter\u304C\u9001\u4FE1\u3057\u305F\u8272\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u30DC\u30C3\u30AF\u30B9\u306E\u8272\u3092\u8A2D\u5B9A\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u4F55\u304B\u9001\u3063\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u30DC\u30BF\u30F3\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u306B\u6E21\u3059\u4EE3\u308F\u308A\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u304B\u3089\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u9001\u308A\u3001\u305D\u306E\u5024\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u304C\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u3053\u308C\u306F\u6700\u7D42\u7684\u306B\u30011\u3064\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u3055\u307E\u3056\u307E\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u76F8\u4E92\u306B\u3084\u308A\u53D6\u308A\u3057\u3001\u3088\u308A\u5C0F\u3055\u304F\u3001\u3088\u308A\u518D\u5229\u7528\u53EF\u80FD\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F5C\u308A\u51FA\u3059\u30B7\u30F3\u30D7\u30EB\u306A\u4F8B\u306B\u306A\u308B\u306F\u305A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306B\u3001\u65B0\u3057\u3044\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3057\u3001"ColorEmitter"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u307E\u3059\u3002 \u30DC\u30BF\u30F3\u3092\u633F\u5165\u3057\u3001"button"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306E\u3088\u3046\u306A\u72B6\u614B\u306B\u306A\u308B\u306F\u305A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.png",
    mdxType: "Figure"
  }, "ColorEmitter\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u308B\u305F\u3073\u306B\u3001ColorEmitter\u304C\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092\u5916\u754C\u306B\u653E\u3064\uFF08\u30A8\u30DF\u30C3\u30C8\uFF09\u3088\u3046\u306B\u3057\u307E\u3059\u3002 \u3053\u308C\u3067\u8AB0\u3082\u304C\u3053\u306E\u653E\u305F\u308C\u305F\u8272\u3092\u541F\u5473\u3057\u3066\u3001\u76EE\u7684\u306B\u5408\u3063\u305F\u8272\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u3053\u306E\u8272\u3092\u4F7F\u7528\u3057\u3066\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u8272\u3092\u8A2D\u5B9A\u3057\u3001\u524D\u306B\u5B9F\u884C\u3057\u305F\u52D5\u4F5C\u3068\u540C\u3058\u3088\u3046\u306A\u3053\u3068\u3092\u3059\u308B\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3067\u8272\u3092\u653E\u3064\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u307E\u305A\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306EProperties\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001"Triggers"\u30B0\u30EB\u30FC\u30D7\uFF081\uFF09\u3067+\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002 \u30C8\u30EA\u30AC\u306B"colorChanged"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u3001"The color has changed"\u3068\u3044\u3046\u8AAC\u660E\u3092\u5165\u529B\u3057\u3066\u3001\u30BF\u30A4\u30D7\u3092"colortype"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 78]],
    imageSource: "/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306EInteractions\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30C8\u30EA\u30AC"Button is clicked"\u3068\u3001\u30A2\u30AF\u30B7\u30E7\u30F3"Emit colorChanged"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u3092\u4F1D\u3048\u305F\u3044\u306E\u3067\u3001Value\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u524D\u3068\u540C\u3058\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emitting-color-changed-4-17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u306E\u767A\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u3053\u308C\u306F\u6700\u521D\u306F\u6A5F\u80FD\u3057\u307E\u305B\u3093\u3002\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Color`), `\u304C\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306B\u81EA\u52D5\u7684\u306B\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\u3055\u308C\u306A\u3044\u304B\u3089\u3067\u3059\u3002 \u305D\u3053\u3067\u524D\u3068\u540C\u3058\u3088\u3046\u306B\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u72EC\u81EA\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306EProperties\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3001"Includes"\u30B0\u30EB\u30FC\u30D7\uFF081\uFF09\u306B\u6B21\u306E\u3088\u3046\u306B\u5165\u529B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 115]],
    imageSource: "/img/tutorials/tutorial-05/extra-includes-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u8FFD\u52A0\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\u306E\u63D0\u4F9B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u53E4\u3044\u30DC\u30BF\u30F3\u3092\u3001\u3053\u3053\u3067\u4F5C\u6210\u3057\u305F\u65B0\u3057\u3044ColorEmitter\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u7F6E\u304D\u63DB\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 Screen1\u3092\u9078\u629E\u3057\u3001\u3053\u3053\u306B\u3042\u308B\u30DC\u30BF\u30F3\u3092\u524A\u9664\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u3053\u306E\u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u305F\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u30C9\u30E1\u30A4\u30F3\uFF65\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u306E\u3067\u3001\u305D\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u524A\u9664\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001ColorEmitter\u7528\u306B\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 ColorEmitter\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092Screen1\u306B\u633F\u5165\u3057\u3001Screen1\u306B\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30C8\u30EA\u30AC\u306B\u306F\u3001"ColorEmitter colorChanged happens"\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u308B\u306F\u305A\u3067\u3059\u3002 \u3053\u308C\u3092\u9078\u629E\u3057\u3001\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u306F"Call Screen1 setBackgroundColor"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u6B21\u306B\u3001colorChanged\u30A8\u30DF\u30C3\u30C8\u304B\u3089\u306E\u5024\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u308C\u306F\u5E38\u306B"value"\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3059\uFF08\u3053\u306E\u8A18\u4E8B\u306E\u524D\u534A\u306E\u8AAC\u660E\u3092\u53C2\u7167\uFF09\u3002 \u3057\u305F\u304C\u3063\u3066\u3001Value\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F"value"\u3068\u5165\u529B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.png",
    mdxType: "Figure"
  }, "colorChanged\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3092\u541F\u5473\u3059\u308B\u305F\u3081\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3057\u3001\u518D\u3073\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u307F\u307E\u3059\u3002 \u540C\u3058\u52D5\u4F5C\u304C\u73FE\u308C\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u304C\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306B\u5909\u5316\u3057\u307E\u3059\u3002 \u305F\u3060\u3057\u4ECA\u5EA6\u306F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3059\u3079\u3066\u306E\u6A5F\u80FD\u3092\u5B9F\u88C5\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u3088\u308A\u5C0F\u578B\u3067\u518D\u5229\u7528\u53EF\u80FD\u306A\u3044\u304F\u3064\u304B\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08\u3059\u306A\u308F\u3061\u3001\u30B7\u30F3\u30D7\u30EB\u306AColorEmitter\uFF09\u3068\u306E\u9593\u3067\u3001\u72EC\u81EA\u306E\u3084\u308A\u53D6\u308A\u304C\u3046\u307E\u304F\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-final-4-17.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306B\u306A\u308B"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);