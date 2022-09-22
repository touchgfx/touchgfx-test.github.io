"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8792],{

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

/***/ 56739:
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
/* harmony import */ var _site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39487);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22425);
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
  id: "tutorial-04",
  title: "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4: \u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u3092\u5099\u3048\u305F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-04",
  "id": "tutorials/tutorial-04",
  "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4: \u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u3092\u5099\u3048\u305F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-04.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-04",
  "permalink": "/4.20/ja/docs/tutorials/tutorial-04",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-04",
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4: \u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u3092\u5099\u3048\u305F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB3: \u8907\u6570\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3",
    "permalink": "/4.20/ja/docs/tutorials/tutorial-03"
  },
  "next": {
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB5: \u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F5C\u6210",
    "permalink": "/4.20/ja/docs/tutorials/tutorial-05"
  }
};
const assets = {};





const toc = [{
  value: "\u30B9\u30C6\u30C3\u30D71: \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4F5C\u6210",
  id: "step-1-creating-a-custom-container",
  level: 2
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0",
  id: "adding-widgets-to-the-custom-container",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0",
  id: "adding-the-custom-container-to-a-screen",
  level: 3
}, {
  value: "\u30B9\u30C6\u30C3\u30D72: \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210",
  id: "step-2-creating-a-scroll-wheel",
  level: 2
}, {
  value: "\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210",
  id: "creating-the-scroll-wheel",
  level: 3
}, {
  value: "\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3078\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u8FFD\u52A0",
  id: "adding-items-to-the-scroll-wheel",
  level: 3
}, {
  value: "\u30B9\u30C6\u30C3\u30D73: \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3078\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u8FFD\u52A0",
  id: "step-3-adding-user-code-to-scroll-wheel",
  level: 2
}, {
  value: "MenuElement\u5185\u306E\u753B\u50CF\u3068\u30C6\u30AD\u30B9\u30C8\u306E\u5909\u66F4",
  id: "change-image-and-text-in-menuelement",
  level: 3
}, {
  value: "\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u66F4\u65B0",
  id: "update-the-items-in-the-scroll-wheel",
  level: 3
}, {
  value: "\u30B9\u30C6\u30C3\u30D74: \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3078\u306E\u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u306E\u8FFD\u52A0",
  id: "step-4-adding-custom-behavior-to-scroll-wheel",
  level: 2
}, {
  value: "MenuElement\u3078\u306E\u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u306E\u8FFD\u52A0",
  id: "add-custom-behavior-to-menuelement",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001Custom Container\uFF08\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF09\u3068Scroll Wheel\uFF08\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\uFF09\u3068\u3044\u30462\u3064\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F5C\u6210\u304A\u3088\u3073\u8A2D\u5B9A\u65B9\u6CD5\u306B\u3064\u3044\u3066\u5B66\u3073\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306F\u3001\u4ED6\u306E\u8907\u6570\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F\u7279\u5B9A\u306E\u52D5\u4F5C\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306F\u3001\u8907\u6570\u306E\u9078\u629E\u53EF\u80FD\u306A\u30A2\u30A4\u30C6\u30E0\u3067\u69CB\u6210\u3055\u308C\u308B\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306A\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3059\u3002 \u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u52D5\u4F5C\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u3082\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECA\u56DE\u306F\u3082\u3063\u3068\u5927\u304D\u306A\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001\u89E3\u50CF\u5EA6800 x 480\u30D4\u30AF\u30BB\u30EB\u306E\u30DC\u30FC\u30C9\uFF08STM32F469 Discovery\u306A\u3069\uFF09\u3067\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3059\u308B\u304B\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u305D\u306E\u307E\u307E\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3068\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/custom-containers"
  }), `Custom Containers\uFF08\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF09`), `\u300D\u30DA\u30FC\u30B8\u3068\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/containers/scroll-wheel"
  }), `Scroll Wheel\uFF08\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\uFF09`), `\u300D\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u7528\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u306F\u3001\u3053\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(38197)/* ["default"] */ .Z)
  }, "\u30EA\u30F3\u30AF"), `\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002 assets\u306E\u4E0B\u306Eimages\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u51CD\u3057\u307E\u3059\u3002\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u4F7F\u7528\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001MyApplication2\\assets\\images\u306B\u3042\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-creating-a-custom-container"
  }), `\u30B9\u30C6\u30C3\u30D71: \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB2\u306E\u30B9\u30C6\u30C3\u30D71\u3068\u540C\u69D8\u306B\u3001\u6700\u521D\u306BTouchGFX Designer\u3067\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u4ECA\u56DE\u306F\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u6E96\u5099\u304C\u3067\u304D\u305F\u3089\u3001TouchGFX Designer\u3067Screens\u30BF\u30D6\u304B\u3089Container\u30BF\u30D6\uFF081\uFF09\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 5]],
    imageSource: "/img/tutorials/tutorial-04/selecting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Custom Container\u30E1\u30CB\u30E5\u30FC\u306E\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3059\u308B\u30BF\u30D6\u306FScreens\u30BF\u30D6\u3068\u4F3C\u3066\u304A\u308A\u3001\u65B0\u3057\u3044\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306F\u65B0\u3057\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u3068\u540C\u3058\u65B9\u6CD5\u3067\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4F5C\u6210\u5F8C\u306F\u3001\u305D\u3053\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3057\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30B5\u30A4\u30BA\u3068\u540D\u524D\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30BF\u30D6\u3067\u3001"+"\u30DC\u30BF\u30F3\uFF081\uFF09\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3057\u3001\u540D\u524D\u3092"MenuElement"\uFF082\uFF09\u306B\u5909\u66F4\u3057\u3066\u3001\u5E45\u3092390\u3001\u9AD8\u3055\u309270\uFF083\uFF09\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 8], [435, 8], [435, 35]],
    imageSource: "/img/tutorials/tutorial-04/creating-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4F5C\u6210\u3068\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A2D\u5B9A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-widgets-to-the-custom-container"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3057\u3066\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A\u3057\u305F\u3089\u3001\u305D\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306F\u30011\u3064\u306E\u753B\u50CF\u3068\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u542B\u30801\u3064\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u3067\u69CB\u6210\u3059\u308B\u3053\u3068\u3068\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",
    mdxType: "Link"
  }, "\u300C\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u300D\u30DA\u30FC\u30B8"), "\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u65B9\u6CD5\u3067\u30012\u3064\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u633F\u5165\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D7\u30ED\u30D1\u30C6\u30A3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Image`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Name: icon`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image: icon00.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 34`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Y: 17`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Name: text`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 93\u3001Y: 23`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Menu Element `, `<`, `value`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 1:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Initial Value: 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Buffer size: 3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 20px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: Left`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFFFFFFF`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/adding-content-cc-4-17.png",
    mdxType: "Figure"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3078\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u8FFD\u52A0\uFF08TextArea\u3092\u9078\u629E\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-custom-container-to-a-screen"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screens\u30BF\u30D6\u306B\u623B\u308B\u3068\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF081\uFF09\u306E\u4E0B\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u3067"MenuElement"\u304C\u9078\u629E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3068\u3057\u3066\u9ED2\u3044\u30DC\u30C3\u30AF\u30B9\u3092\u914D\u7F6E\u3057\u3001\u4F5C\u6210\u3057\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u3044\u304F\u3064\u304B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u633F\u5165\u3057\u305F\u30B3\u30F3\u30C6\u30CA\u306F\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u81EA\u7531\u306B\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306F\u3001\u5DE6\u5074\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30EA\u30B9\u30C8\uFF082\uFF09\u306B1\u3064\u306E\u8981\u7D20\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[330, 10], [50, 25]],
    imageSource: "/img/tutorials/tutorial-04/inserting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u3057\u3066\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u633F\u5165`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-creating-a-scroll-wheel"
  }), `\u30B9\u30C6\u30C3\u30D72: \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4\u306E\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30B9\u30C6\u30C3\u30D71\u3067\u4F5C\u6210\u3057\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"MenuElement"\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30B9\u30C6\u30C3\u30D71\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306F\u3001\u8907\u6570\u306E\u9078\u629E\u53EF\u80FD\u306A\u30A2\u30A4\u30C6\u30E0\u3092\u542B\u3080\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306A\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306F\u30B9\u30AF\u30ED\u30FC\u30EB\u4E2D\u306B\u52D5\u7684\u306B\u66F4\u65B0\u3055\u308C\u3001\u30A2\u30A4\u30C6\u30E0\u304C\u9078\u629E\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30A2\u30A4\u30C6\u30E0\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306B\u30A2\u30A4\u30C6\u30E0\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001"Item Template"\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u9078\u629E\u3057\u307E\u3059\u3002 "Item Template"\u306E\u30B3\u30F3\u30BB\u30D7\u30C8\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u30D9\u30FC\u30B9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u6A5F\u80FD\u3057\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u5B9F\u884C\u6642\u306B\u30A2\u30A4\u30C6\u30E0\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-the-scroll-wheel"
  }), `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4F5C\u6210\u3059\u308B\u524D\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3059\u3067\u306B\u633F\u5165\u6E08\u307F\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u524A\u9664\u3057\u3066\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3068\u3057\u3066\u9ED2\u8272\u306E\u30DC\u30C3\u30AF\u30B9\u3092\u6B8B\u3059\u306E\u307F\u306B\u3057\u307E\u3059\u3002 Containers\u30BB\u30AF\u30B7\u30E7\u30F3\uFF081\uFF09\u306E\u4E0B\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u306B\u3042\u308BScroll Wheel\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4F5C\u6210\u3057\u3066\u3001Location\u30D7\u30ED\u30D1\u30C6\u30A3\u3092X = 208\u3001Y = 45\u3001H = 390\u306B\u8A2D\u5B9A\u3057\u3001\u540D\u524D\u3092"scrollWheel"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[280, 65]],
    imageSource: "/img/tutorials/tutorial-04/insert-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u633F\u5165\u3057\u3066\u3001\u540D\u524D\u3068\u4F4D\u7F6E\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-items-to-the-scroll-wheel"
  }), `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3078\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30C6\u30C3\u30D71\u3067\u4F5C\u6210\u3057\u305F"MenuElement"\u3092"Item Template"\u3068\u3057\u3066\u9078\u629E\u3057\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u3001Scroll Wheel\u30D7\u30ED\u30D1\u30C6\u30A3"Item Template"\uFF081\uFF09\u306E\u4E0B\u306B\u8868\u793A\u3055\u308C\u308B\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\uFF65\u30EA\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u6570\u3082"Item Template"\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30A2\u30A4\u30C6\u30E0\u6570\u306F20\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306F\u3001\u9078\u629E\u3057\u305F\u30A2\u30A4\u30C6\u30E0\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u3055\u308C\u308B\u3053\u3068\u3067\u6A5F\u80FD\u3059\u308B\u306E\u3067\u3001\u30D7\u30ED\u30D1\u30C6\u30A3"List Apperance"\uFF082\uFF09\u306E\u4E0B\u306E"Selected Item Offset"\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u9078\u629E\u3057\u305F\u30A2\u30A4\u30C6\u30E0\u304CUI\u306E\u3069\u3053\u306B\u914D\u7F6E\u3055\u308C\u308B\u306E\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u9078\u629E\u3057\u305F\u30A2\u30A4\u30C6\u30E0\u3092\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u771F\u3093\u4E2D\u306B\u914D\u7F6E\u3057\u305F\u3044\u306E\u3067\u3001"Selected Item Offset"\u3092\u3001(390-70)/2 = 160\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[435, 80], [435, 130]],
    imageSource: "/img/tutorials/tutorial-04/add-cc-to-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8ABF\u6574"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"scrollWheel"\u306E\u9818\u57DF\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u30B9\u30C6\u30C3\u30D71\u3067\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F.zip\u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308Bbackground.png\u3068overlay.png\u3068\u3044\u30462\u3064\u306E\u753B\u50CF\u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u3089\u3092Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u3053\u306E2\u3064\u306E\u753B\u50CF\u306F\u3001"scrollWheel"\u306E\u9818\u57DF\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u3059\u308B\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3068\u3001"scrollWheel"\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u304C"scrollWheel"\u306E\u7AEF\u306B\u79FB\u52D5\u3057\u305F\u3068\u304D\u306B\u3001\u305D\u308C\u3089\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u305F\u3081\u306E\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `background.png\u306E\u753B\u50CF\u306F\u3001X = 205\u3001Y = 45\u306E\u4F4D\u7F6E\u3067"scrollWheel"\u306E\u80CC\u5F8C\u306B\u914D\u7F6E\u3055\u308C\u308B\u306E\u3067\u3001"scrollWheel"\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u4E0A\u306B\u63CF\u753B\u3055\u308C\u307E\u3059\u3002 overlay.png\u306F\u3001"scrollWheel"\u4E0A\u306EX = 0\u3001Y = 0\u306B\u4F4D\u7F6E\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u30A2\u30A4\u30C6\u30E0\u306Foverlay.png\u306E\u4E0B\u306B\u63CF\u753B\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u3001overlay.png\u304C\u900F\u660E\u3067\u306A\u3051\u308C\u3070\u30A2\u30A4\u30C6\u30E0\u306F\u975E\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30EA\u30B9\u30C8\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001Ctrl +F\u30AD\u30FC\u304A\u3088\u3073Ctrl +B\u30AD\u30FC\u3092\u62BC\u3059\u3053\u3068\u3067\u524D\u304A\u3088\u3073\u5F8C\u306B\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/graphics-added-4-17.png",
    mdxType: "Figure"
  }, "\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u307E\u3067\u306B\u8ABF\u6574\u3057\u305F\u306E\u306F"scrollWheel"\u306E\u9759\u7684\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u307F\u306A\u306E\u3067\u3001\u30ED\u30B8\u30C3\u30AF\u306F\u307E\u3060\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002 \u3053\u306E\u305F\u3081\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u304C\u540C\u3058\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u308B20\u500B\u306E\u30A2\u30A4\u30C6\u30E0\u3067\u69CB\u6210\u3055\u308C\u308B\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306A\u30E1\u30CB\u30E5\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u5B9F\u884C\u6642\u306B\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u66F4\u65B0\u3059\u308B\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001"scrollWheel"\u306B\u30ED\u30B8\u30C3\u30AF\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-user-code-to-scroll-wheel"
  }), `\u30B9\u30C6\u30C3\u30D73: \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3078\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u307E\u3067\u306B\u3001TouchGFX Designer\u3067"scrollWheel"\u3068\u3044\u3046\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4F5C\u6210\u304A\u3088\u3073\u8A2D\u5B9A\u3067\u304D\u305F\u306E\u3067\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u4ECB\u3057\u3066"scrollWheel"\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u66F4\u65B0\u3059\u308B\u30ED\u30B8\u30C3\u30AF\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u4F4D\u7F6E\u306B\u57FA\u3065\u3044\u3066\u3055\u307E\u3056\u307E\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u7D71\u5408\u3092\u884C\u3044\u307E\u3059\u3002 Designer\u306B\u3088\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u7D71\u5408\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/code-structure"
  }), `\u30B3\u30FC\u30C9\u69CB\u9020`), `\u300D\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-image-and-text-in-menuelement"
  }), `MenuElement\u5185\u306E\u753B\u50CF\u3068\u30C6\u30AD\u30B9\u30C8\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306F\u3001\u30B9\u30C6\u30C3\u30D71\u3067\u4F5C\u6210\u3057\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"MenuElement"\u306B\u57FA\u3065\u3044\u3066\u3044\u308B\u306E\u3067\u3001\u30A2\u30A4\u30B3\u30F3\u306E\u5909\u66F4\u304A\u3088\u3073\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u66F4\u65B0\u306E\u305F\u3081\u306E\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092"MenuElement"\u306B\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX Designer\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u4F5C\u6210\u3059\u308B\u3068\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3068\u540C\u3058\u540D\u524D\u306E.hpp\u30D5\u30A1\u30A4\u30EB\u3068.cpp\u30D5\u30A1\u30A4\u30EB\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3092\u3001\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u7D71\u5408\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u3067\u3001"MenuElement"\u7528\u306B\u751F\u6210\u3055\u308C\u308B\u30D5\u30A1\u30A4\u30EB\u306F\u6B21\u306E\u5834\u6240\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\src\\containers\\MenuElement.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"scrollWheel"\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u30C6\u30AD\u30B9\u30C8\u3084\u30A2\u30A4\u30B3\u30F3\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\u95A2\u6570\u3092"MenuElement"\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306F\u3001\u5909\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `no`), `\u3092\u4F7F\u7528\u3057\u3066\u3001Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u8868\u793A\u3059\u308B\u30A2\u30A4\u30B3\u30F3\u3092\u6C7A\u5B9A\u3057\u3001Text Area\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5185\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `no`), `\u306E\u5024\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u3067\u306F0\uFF5E9\u306E\u6570\u5B57\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001Default\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E"Wildcard Ranges"\u306B\u7BC4\u56F2"0-9"\u3092\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `F4\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u30D5\u30A1\u30A4\u30EB\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u793A\u3059`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u3067\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\u306E\u5BA3\u8A00\u3068\u5B9F\u88C5\u304C\u884C\u308F\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/include/gui/containers/MenuElement.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5,15-42}",
    "{5,15-42}": true
  }), `#ifndef MENUELEMENT_HPP
#define MENUELEMENT_HPP

#include <gui_generated/containers/MenuElementBase.hpp>
#include <BitmapDatabase.hpp>

class MenuElement : public MenuElementBase
{
public:
    MenuElement();
    virtual ~MenuElement() {}

    virtual void initialize();

    void setNumber(int no)
    {
        Unicode::itoa(no, textBuffer, TEXT_SIZE, 10);
        switch (no % 7)
        {
        case 0:
        icon.setBitmap(Bitmap(BITMAP_ICON00_ID));
            break;
        case 1:
        icon.setBitmap(Bitmap(BITMAP_ICON01_ID));
            break;
        case 2:
        icon.setBitmap(Bitmap(BITMAP_ICON02_ID));
            break;
        case 3:
        icon.setBitmap(Bitmap(BITMAP_ICON03_ID));
            break;
        case 4:
        icon.setBitmap(Bitmap(BITMAP_ICON04_ID));
            break;
        case 5:
        icon.setBitmap(Bitmap(BITMAP_ICON05_ID));
            break;
        case 6:
        icon.setBitmap(Bitmap(BITMAP_ICON06_ID));
            break;
        }
    }
protected:
};

#endif // MENUELEMENT_HPP

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30FC\u30C9\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u753B\u50CF\u3092\u53C2\u7167\u3059\u308B\u305F\u3081\u306B\u3001BITMAP\u5B9A\u7FA9\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u3092\u4F7F\u7528\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B"BitmapDatabase.hpp"\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MenuElement\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u66F4\u65B0\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u304C\u8FFD\u52A0\u3055\u308C\u305F\u306E\u3067\u3001\u6B21\u306B\u3084\u308B\u3079\u304D\u3053\u3068\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u66F4\u65B0\u3059\u308B\u30B3\u30FC\u30C9\u306E\u8FFD\u52A0\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "update-the-items-in-the-scroll-wheel"
  }), `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F5C\u6210\u6642\u306B\u3001TouchGFX Designer\u306F\u30B9\u30AF\u30EA\u30FC\u30F3\u57FA\u5E95\u30AF\u30E9\u30B9\u306B\u4EEE\u60F3\u95A2\u6570\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u5185\u3067\u65B0\u3057\u3044\u30A2\u30A4\u30C6\u30E0\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308B\u305F\u3073\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u3053\u306E\u95A2\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3059\u308B\u3068\u3001\u30B3\u30FC\u30C9\u304C\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u3068\u3084\u308A\u53D6\u308A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u95A2\u6570\u306E\u540D\u524D\u306F\u3001Scroll Wheel\u306E\u540D\u524D\u306BUpdatedItem\u304C\u4ED8\u52A0\u3055\u308C\u305F\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)`), `\u3068\u3044\u3046\u95A2\u6570\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D1\u30E9\u30E1\u30FC\u30BF`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u306F\u3001\u73FE\u5728\u66F4\u65B0\u3055\u308C\u3066\u3044\u308B\u30A2\u30A4\u30C6\u30E0\u3092\u77E5\u3089\u305B\u308B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u5024\u3067\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `item`), `\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3067\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308BMenuElement\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3078\u306E\u53C2\u7167\u3067\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u304C\u66F4\u65B0\u4E2D\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u77E5\u3089\u305B\u308B\u3068\u3001\u305D\u306E\u30A2\u30A4\u30C6\u30E0\u306B\u5BFE\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber()`), `\u304C\u547C\u3073\u51FA\u3055\u308C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u306E\u5024\u306B\u57FA\u3065\u3044\u3066\u66F4\u65B0\u3055\u308C\u308B\u30A2\u30A4\u30C6\u30E0\u306E\u5185\u5BB9\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002 \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u66F4\u65B0\u306B\u4F7F\u7528\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-17}",
    "{14-17}": true
  }), `#ifndef SCREEN1VIEW_HPP
#define SCREEN1VIEW_HPP

#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include <gui/screen1_screen/Screen1Presenter.hpp>

class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
    virtual void scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)
    {
        item.setNumber(itemIndex);
    }
protected:
};

#endif // SCREEN1VIEW_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30A2\u30A4\u30C6\u30E0\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u305D\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u5024\u304C\u542B\u307E\u308C\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u3001\u8868\u793A\u3055\u308C\u308B\u30A2\u30A4\u30C6\u30E0\u306B\u57FA\u3065\u3044\u3066\u30A2\u30A4\u30B3\u30F3\u304C\u5909\u5316\u3059\u308B\u69D8\u5B50\u304C\u793A\u3055\u308C\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306F\u3001\u5B9F\u88C5\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4F8B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim.png",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-custom-behavior-to-scroll-wheel"
  }), `\u30B9\u30C6\u30C3\u30D74: \u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3078\u306E\u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4\u306E\u6700\u5F8C\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306B\u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u30A2\u30A4\u30C6\u30E0\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B\u3068\u304D\u306B\u3001\u5186\u3092\u63CF\u304F\u3088\u3046\u306B\u52D5\u304B\u3059\u3068\u3001\u30C0\u30A4\u30A2\u30EB\u306B\u4F3C\u305F\u52D5\u304D\u3092\u898B\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "add-custom-behavior-to-menuelement"
  }), `MenuElement\u3078\u306E\u30AB\u30B9\u30BF\u30E0\u52D5\u4F5C\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u304C\u30C0\u30A4\u30A2\u30EB\u306E\u3088\u3046\u306A\u30D1\u30BF\u30FC\u30F3\u3067\u52D5\u304F\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306B\u8868\u793A\u3055\u308C\u308B\u5404\u30A2\u30A4\u30C6\u30E0\u306EImage\u304A\u3088\u3073Text\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u6C34\u5E73\u4F4D\u7F6E\u3092\u30B7\u30D5\u30C8\u3055\u305B\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u3067\u3001"MenuElement"\u306B\u5BFE\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u95A2\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u95A2\u6570\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u304C\u5782\u76F4\u65B9\u5411\u306B\u79FB\u52D5\u3059\u308B\u305F\u3073\u306B\u547C\u3073\u51FA\u3055\u308C\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u65B0\u3057\u3044\u4F4D\u7F6E\u306B\u518D\u63CF\u753B\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3059\u308B\u3053\u3068\u3067\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u304C\u30B9\u30AF\u30ED\u30FC\u30EB\u3055\u308C\u308B\u305F\u3073\u306B\u3001\u30B3\u30F3\u30C6\u30CA\u5185\u3067Image\u304A\u3088\u3073Text\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u6C34\u5E73\u65B9\u5411\u306B\u79FB\u52D5\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u3067\u3001\u65B0\u3057\u3044`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u95A2\u6570\u3092\u5B9F\u88C5\u3057\u30012\u3064\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B7\u30D5\u30C8\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `math.h`), `\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MenuElement.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6,16-39}",
    "{6,16-39}": true
  }), `#ifndef MENUELEMENT_HPP
#define MENUELEMENT_HPP

#include <gui_generated/containers/MenuElementBase.hpp>
#include <BitmapDatabase.hpp>
#include <math.h>

class MenuElement : public MenuElementBase
{
public:
    MenuElement();
    virtual ~MenuElement() {}

    virtual void initialize();

    //Adjusts the position of the text and the icon, based in the calculated offset(x)
    void offset(int16_t x)
    {
        icon.setX(30 + x);
        text.setX(80 + x);
    }

    //The new declaration and implementation of the setY() function
    virtual void setY(int16_t y)
    {
        //set Y as normal
        MenuElementBase::setY(y);

        const int circleRadius = 250;

        //center around middle of background
        y = y + getHeight() / 2 - 390 /2;

        //calculate x
        float x_f = circleRadius - sqrtf((float)((circleRadius * circleRadius) - (y * y)));
        int16_t x = (int16_t)(x_f + 0.5f);

        offset(x);
    }

    ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u95A2\u6570\u304C\u5B9F\u88C5\u3055\u308C\u305F\u306E\u3067\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u4ECA\u5EA6\u306F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u304C\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u306B\u3088\u308B\u66F2\u7DDA\u306B\u6CBF\u3063\u3066\u30C0\u30A4\u30A2\u30EB\u72B6\u306B\u52D5\u304F\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim-02.png",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB4\u306F\u7D42\u4E86\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u4F7F\u7528\u3057\u305F\u6982\u5FF5\u3092\u8A73\u3057\u304F\u5B66\u3076\u305F\u3081\u3001\u4EE5\u4E0B\u306E\u7AE0\u3067\u306F\u3053\u3053\u3067\u53D6\u308A\u7D44\u3093\u3060\u3044\u304F\u3064\u304B\u306E\u6982\u5FF5\u3092\u53D6\u308A\u4E0A\u3052\u3066\u3044\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/containers/scroll-wheel",
    mdxType: "Link"
  }, "\u300CScroll Wheel\uFF08\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\uFF09"), "\u300D\u30DA\u30FC\u30B8\u3067\u306F\u3001TouchGFX Designer\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4F5C\u6210\u304A\u3088\u3073\u8A2D\u5B9A\u3059\u308B\u65B9\u6CD5\u3068\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u30ED\u30B8\u30C3\u30AF\u3092\u4F5C\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "\u300C\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA"), "\u300D\u30DA\u30FC\u30B8\u3067\u306F\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u6982\u5FF5\u3068\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059\u3002"))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 38197:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip");

/***/ })

}]);