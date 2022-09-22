"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3586],{

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

/***/ 73770:
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
  title: "\u6559\u7A0B4\uFF1A\u521B\u5EFA\u5177\u6709\u81EA\u5B9A\u4E49\u884C\u4E3A\u7684\u6EDA\u8F6E\u3002"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-04",
  "id": "tutorials/tutorial-04",
  "title": "\u6559\u7A0B4\uFF1A\u521B\u5EFA\u5177\u6709\u81EA\u5B9A\u4E49\u884C\u4E3A\u7684\u6EDA\u8F6E\u3002",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-04.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-04",
  "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-04",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-04",
    "title": "\u6559\u7A0B4\uFF1A\u521B\u5EFA\u5177\u6709\u81EA\u5B9A\u4E49\u884C\u4E3A\u7684\u6EDA\u8F6E\u3002"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6559\u7A0B3\uFF1A\u6709\u591A\u4E2A\u5C4F\u5E55\u7684\u5E94\u7528",
    "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-03"
  },
  "next": {
    "title": "\u6559\u7A0B5\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C",
    "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-05"
  }
};
const assets = {};





const toc = [{
  value: "\u7B2C1\u6B65\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668",
  id: "step-1-creating-a-custom-container",
  level: 2
}, {
  value: "\u5C06\u63A7\u4EF6\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668",
  id: "adding-widgets-to-the-custom-container",
  level: 3
}, {
  value: "\u5C06\u81EA\u5B9A\u4E49\u5BB9\u5668\u6DFB\u52A0\u5230\u5C4F\u5E55",
  id: "adding-the-custom-container-to-a-screen",
  level: 3
}, {
  value: "\u7B2C2\u6B65\uFF1A\u521B\u5EFA\u6EDA\u8F6E",
  id: "step-2-creating-a-scroll-wheel",
  level: 2
}, {
  value: "\u521B\u5EFA\u6EDA\u8F6E",
  id: "creating-the-scroll-wheel",
  level: 3
}, {
  value: "\u5C06\u9009\u9879\u6DFB\u52A0\u5230\u6EDA\u8F6E",
  id: "adding-items-to-the-scroll-wheel",
  level: 3
}, {
  value: "\u7B2C3\u6B65\uFF1A\u5C06\u7528\u6237\u4EE3\u7801\u6DFB\u52A0\u5230\u6EDA\u8F6E",
  id: "step-3-adding-user-code-to-scroll-wheel",
  level: 2
}, {
  value: "\u66F4\u6539MenuElement\u4E2D\u7684\u56FE\u50CF\u548C\u6587\u672C",
  id: "change-image-and-text-in-menuelement",
  level: 3
}, {
  value: "\u66F4\u65B0\u6EDA\u8F6E\u4E2D\u7684\u9009\u9879",
  id: "update-the-items-in-the-scroll-wheel",
  level: 3
}, {
  value: "\u7B2C4\u6B65\uFF1A\u5C06\u81EA\u5B9A\u4E49\u884C\u4E3A\u6DFB\u52A0\u5230\u6EDA\u8F6E",
  id: "step-4-adding-custom-behavior-to-scroll-wheel",
  level: 2
}, {
  value: "\u5C06\u81EA\u5B9A\u4E49\u884C\u4E3A\u6DFB\u52A0\u5230MenuElement",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u6559\u7A0B\u4E2D\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u521B\u5EFA\u548C\u914D\u7F6E\u4E24\u4E2A\u63A7\u4EF6 - \u81EA\u5B9A\u4E49\u5BB9\u5668\u548C\u6EDA\u8F6E\u3002 \u81EA\u5B9A\u4E49\u5BB9\u5668\u63A7\u4EF6\u4F7F\u7528\u6237\u80FD\u591F\u901A\u8FC7\u7EC4\u5408\u591A\u4E2A\u5176\u4ED6\u63A7\u4EF6\u6765\u521B\u5EFA\u65B0\u7684\u63A7\u4EF6\uFF0C\u5E76\u4E3A\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u7684\u63A7\u4EF6\u6DFB\u52A0\u7279\u5B9A\u884C\u4E3A\u3002 \u6EDA\u8F6E\u662F\u7528\u6765\u521B\u5EFA\u53EF\u6EDA\u52A8\u83DC\u5355\u7684\u63A7\u4EF6\uFF0C\u83DC\u5355\u7531\u591A\u4E2A\u53EF\u9009\u9879\u7EC4\u6210\u3002 \u672C\u6559\u7A0B\u5C06\u5C55\u793A\u5982\u4F55\u521B\u5EFA\u7528\u6237\u4EE3\u7801\u4EE5\u4FBF\u4FEE\u6539\u63A7\u4EF6\u7684\u884C\u4E3A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u6B21\u6211\u4EEC\u5C06\u4F7F\u7528\u8F83\u5927\u7684\u5C4F\u5E55\uFF0C\u56E0\u6B64\u7528800 x 480\u50CF\u7D20\u7684\u5206\u8FA8\u7387\u4E3A\u677F\u5361\u542F\u52A8\u65B0\u9879\u76EE\uFF08\u5982STM32F469\u63A2\u7D22\u5957\u4EF6\uFF09\uFF0C\u6216\u8005\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6A21\u62DF\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5173\u4E8E\u81EA\u5B9A\u4E49\u5BB9\u5668\u548C\u6EDA\u8F6E\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/custom-containers"
  }), `\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/containers/scroll-wheel"
  }), `\u201C\u6EDA\u8F6E\u201D`), `\u9875\u9762\u4E0A\u627E\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6559\u7A0B\u4F7F\u7528\u7684\u56FE\u5F62\u53EF\u4ECE\u6B64`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(38197)/* ["default"] */ .Z)
  }, "\u94FE\u63A5"), `\u4E0B\u8F7D\u3002 \u5C06\u8D44\u6E90\u4E0B\u7684images\u6587\u4EF6\u5939\u4E2D\u7684\u6587\u4EF6\u89E3\u538B\u7F29\uFF0C\u5C31\u672C\u6559\u7A0B\u4E2D\u4F7F\u7528\u7684\u9879\u76EE\u800C\u8A00\uFF0C\u8DEF\u5F84\u4E3AMyApplication2\\assets\\images\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-creating-a-custom-container"
  }), `\u7B2C1\u6B65\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0E\u6559\u7A0B2\u4E2D\u7684\u7B2C1\u6B65\u7C7B\u4F3C\uFF0C\u9996\u5148\u7528TouchGFX Designer\u65B0\u5EFA\u9879\u76EE\u3002 \u8FD9\u4E00\u6B21\uFF0C\u5F53\u65B0\u9879\u76EE\u5C31\u7EEA\u65F6\uFF0C\u5728TouchGFX Designer\u4E2D\u4ECE\u201C\u5C4F\u5E55\u201D\u9009\u9879\u5361\u5207\u6362\u5230\u201C\u5BB9\u5668\u201D\u9009\u9879\u5361 (1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 5]],
    imageSource: "/img/tutorials/tutorial-04/selecting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u9009\u62E9\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D\u83DC\u5355"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u9009\u9879\u5361\u4E0E\u201C\u5C4F\u5E55\u201D\u9009\u9879\u5361\u7C7B\u4F3C\uFF0C\u4EE5\u4E0E\u65B0\u5EFA\u5C4F\u5E55\u76F8\u540C\u7684\u65B9\u5F0F\u65B0\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668\u3002 \u5728\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668\u540E\uFF0C\u53EF\u4EE5\u4E3A\u5176\u6DFB\u52A0\u63A7\u4EF6\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4FEE\u6539\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u5927\u5C0F\u548C\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D\u9009\u9879\u5361\u4E0A\uFF0C\u4F7F\u7528\u201C+\u201D\u6309\u94AE (1) \u65B0\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BB9\u5668\uFF0C\u5C06\u5176\u91CD\u547D\u540D\u4E3A\u201CMenuElement\u201D(2)\uFF0C\u5E76\u5C06\u5BBD\u5EA6\u4FEE\u6539\u4E3A390\u3001\u9AD8\u5EA6\u4FEE\u6539\u4E3A70 (3)\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 8], [435, 8], [435, 35]],
    imageSource: "/img/tutorials/tutorial-04/creating-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668\u5E76\u8BBE\u7F6E\u5176\u5C5E\u6027`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-widgets-to-the-custom-container"
  }), `\u5C06\u63A7\u4EF6\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BB9\u5668\u5E76\u8BBE\u7F6E\u5176\u5C5E\u6027\u540E\uFF0C\u53EF\u4EE5\u5C06\u63A7\u4EF6\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668\u3002 \u672C\u6559\u7A0B\u4E2D\u7684\u81EA\u5B9A\u4E49\u5BB9\u5668\u5C06\u5305\u542B\u4E00\u5F20\u56FE\u50CF\u548C\u4E00\u4E2A\u4F7F\u7528\u901A\u914D\u7B26\u7684\u6587\u672C\u533A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u5173\u4E8E\u5982\u4F55\u4F7F\u7528\u542B\u901A\u914D\u7B26\u7684\u6587\u672C\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u9605\u8BFB", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",
    mdxType: "Link"
  }, "\u201C\u6587\u672C\u548C\u5B57\u4F53\u201D\u9875\u9762"), "\u7684\u901A\u914D\u7B26\u90E8\u5206\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u7167\u4EE5\u4E0B\u65B9\u5F0F\u63D2\u5165\u4E24\u4E2A\u63A7\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63A7\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C5E\u6027`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u540D\u79F0\uFF1A\u56FE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u56FE\u50CF\uFF1Aicon00.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u4F4D\u7F6E:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 34`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Y: 17`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u540D\u79F0\uFF1Atext`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u4F4D\u7F6E:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 93, Y: 23`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u6587\u672C:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u6587\u672C\uFF1AMenu Element `, `<`, `value`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u901A\u914D\u7B26: 1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u521D\u59CB\u503C\uFF1A 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u7F13\u5B58\u5927\u5C0F\uFF1A3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5B57\u4F53\u6392\u5370\uFF1A20px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5BF9\u9F50\uFF1A\u5DE6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5916\u89C2:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u989C\u8272\uFF1A#FFFFFFFF`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/adding-content-cc-4-17.png",
    mdxType: "Figure"
  }, "\u5C06\u5185\u5BB9\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668\uFF08\u9009\u4E2DTextArea\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-custom-container-to-a-screen"
  }), `\u5C06\u81EA\u5B9A\u4E49\u5BB9\u5668\u6DFB\u52A0\u5230\u5C4F\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Going back to the Screens tab, it is now possible to select the "MenuElement" in the widget menu under Custom Container (1). Place a black box as background and add a couple of the created Custom Container on the canvas. Note that you can move the inserted Containers freely on the Screen. The Custom Containers will appear as one element in the Widget list on the left (2).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[330, 10], [50, 25]],
    imageSource: "/img/tutorials/tutorial-04/inserting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u5728\u5C4F\u5E55\u4E0A\u5C06\u81EA\u5B9A\u4E49\u5BB9\u5668\u4F5C\u4E3A\u63A7\u4EF6\u63D2\u5165`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-creating-a-scroll-wheel"
  }), `\u7B2C2\u6B65\uFF1A\u521B\u5EFA\u6EDA\u8F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6559\u7A0B4\u7684\u8FD9\u4E00\u6B65\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u7B2C1\u6B65\u4E2D\u521B\u5EFA\u7684\u81EA\u5B9A\u4E49\u5BB9\u5668\u201CMenuElement\u201D\u521B\u5EFA\u6EDA\u8F6E\u3002 \u5982\u7B2C1\u6B65\u4E2D\u6240\u8FF0\uFF0C\u6EDA\u8F6E\u7528\u4E8E\u521B\u5EFA\u5305\u542B\u591A\u4E2A\u53EF\u9009\u9879\u7684\u53EF\u6EDA\u52A8\u83DC\u5355\u3002 \u5728\u6EDA\u52A8\u65F6\uFF0C\u6EDA\u8F6E\u4E2D\u7684\u9009\u9879\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF1B\u5F53\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u65F6\uFF0C\u8BE5\u9009\u9879\u4F1A\u7A81\u51FA\u663E\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u9009\u62E9\u8981\u7528\u4F5C\u201C\u9009\u9879\u6A21\u677F\u201D\u7684\u81EA\u5B9A\u4E49\u5BB9\u5668\uFF0C\u5C06\u9009\u9879\u6DFB\u52A0\u5230\u6EDA\u8F6E\u3002 \u201C\u9009\u9879\u6A21\u677F\u201D\u7684\u7406\u5FF5\u662F\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u7684\u63A7\u4EF6\u4F5C\u4E3A\u6EDA\u8F6E\u4E2D\u9009\u9879\u7684\u57FA\u7840\uFF0C\u5E76\u5728\u8FD0\u884C\u65F6\u95F4\u4F7F\u7528\u7528\u6237\u4EE3\u7801\u66F4\u65B0\u9009\u9879\u4E2D\u7684\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-the-scroll-wheel"
  }), `\u521B\u5EFA\u6EDA\u8F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u521B\u5EFA\u6EDA\u8F6E\u524D\uFF0C\u5220\u9664\u5C4F\u5E55\u4E0A\u5DF2\u63D2\u5165\u7684\u81EA\u5B9A\u4E49\u5BB9\u5668\uFF0C\u4EC5\u7559\u4E0B\u9ED1\u8272\u65B9\u5757\u4F5C\u4E3A\u80CC\u666F\u3002 \u5728\u201C\u5BB9\u5668\u201D\u533A\u4E0B\u7684\u63A7\u4EF6\u83DC\u5355\u4E2D\u9009\u62E9\u201C\u6EDA\u8F6E\u201D(1)\u3002 \u521B\u5EFA\u4E00\u4E2A\u6EDA\u8F6E\uFF0C\u5C06\u4F4D\u7F6E\u5C5E\u6027\u8BBE\u7F6E\u4E3AX = 208\u3001Y = 45\u548CH = 390\uFF0C\u5E76\u5C06\u540D\u79F0\u4FEE\u6539\u4E3A\u201CscrollWheel\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[280, 65]],
    imageSource: "/img/tutorials/tutorial-04/insert-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u63D2\u5165\u6EDA\u8F6E\u5E76\u8BBE\u7F6E\u540D\u79F0\u548C\u4F4D\u7F6E\u5C5E\u6027"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-items-to-the-scroll-wheel"
  }), `\u5C06\u9009\u9879\u6DFB\u52A0\u5230\u6EDA\u8F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6EDA\u8F6E\u5C5E\u6027\u201C\u9009\u9879\u6A21\u677F\u201D\u4E0B\u7684\u4E0B\u62C9\u5217\u8868\uFF0C\u9009\u62E9\u7B2C1\u6B65\u4E2D\u521B\u5EFA\u7684\u201CMenuElement\u201D\u4F5C\u4E3A\u201C\u9009\u9879\u6A21\u677F\u201D(1)\u3002 \u6EDA\u8F6E\u4E2D\u7684\u9009\u9879\u6570\u4E5F\u5728\u201C\u9009\u9879\u6A21\u677F\u201D\u4E0B\u8BBE\u7F6E\u3002 Set this to 20 items. Since the Scroll Wheel works by having a selected item in focus, setting where the selected item is positioned in the UI, is done by setting "Selected Item Offset" under the property "List Apperance" (2). \u6211\u4EEC\u5E0C\u671B\u9009\u4E2D\u9879\u4F4D\u4E8E\u6EDA\u8F6E\u7684\u4E2D\u95F4\uFF0C\u56E0\u6B64\u5C06\u201C\u9009\u4E2D\u9879\u504F\u79FB\u91CF\u201D\u8BBE\u7F6E\u4E3A (390-70)/2 = 160\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[435, 80], [435, 130]],
    imageSource: "/img/tutorials/tutorial-04/add-cc-to-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5C06\u81EA\u5B9A\u4E49\u5BB9\u5668\u6DFB\u52A0\u5230\u6EDA\u8F6E\u5E76\u8C03\u6574\u5176\u5C5E\u6027"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u7A81\u51FA\u663E\u793A\u201CscrollWheel\u201D\u7684\u533A\u57DF\uFF0C\u4F7F\u7528\u7B2C1\u6B65\u4E2D\u4E0B\u8F7D\u7684.zip\u6587\u4EF6\u4E2D\u7684\u4E24\u5F20\u56FE\u50CFbackground.png\u548Coverlay.png\uFF0C\u5E76\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u56FE\u50CF\u63A7\u4EF6\u6DFB\u52A0\u5230\u5E94\u7528\u3002 \u4E24\u5F20\u56FE\u50CF\u662F\u80CC\u666F\uFF0C\u7A81\u51FA\u663E\u793A\u201CscrollWheel\u201D\u7684\u533A\u57DF\u548C\u4E00\u4E2A\u8986\u76D6\u5C42\uFF0C\u540E\u8005\u4F1A\u5728\u79FB\u52A8\u5230\u201CscrollWheel\u201D\u7684\u8FB9\u7F18\u65F6\u9690\u85CF\u201CscrollWheel\u201D\u4E2D\u7684\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u50CFbackground.png\u7684\u5750\u6807\u4E3AX = 205\u548CY = 45\uFF0C\u4F4D\u4E8E\u201CscrollWheel\u201D\u540E\u65B9\uFF0C\u56E0\u6B64\u5728\u80CC\u666F\u4E0A\u65B9\u7ED8\u5236\u201CscrollWheel\u201D\u4E2D\u7684\u9009\u9879\u3002 overlay.png\u7684\u5750\u6807\u4E3AX = 0\u548CY = 0\uFF0C\u4F4D\u4E8E\u201CscrollWheel\u201D\u4E0A\u65B9\uFF0C\u8FD9\u610F\u5473\u7740\u5728overlay.png\u4E0B\u65B9\u7ED8\u5236\u9009\u9879\uFF0C\u4EE5\u4FBF\u9690\u85CFoverlay.png\u4E0D\u900F\u660E\u90E8\u5206\u7684\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0BCTRL-B\u548CCTRL-F\u952E\u53EF\u4EE5\u524D\u540E\u79FB\u52A8\u201C\u63A7\u4EF6\u201D\u5217\u8868\u4E2D\u7684\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/graphics-added-4-17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u5230\u6709\u6EDA\u8F6E\u7684\u5C4F\u5E55\u4E2D\u7684\u56FE\u5F62"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EA\u8C03\u6574\u4E86\u201CscrollWheel\u201D\u7684\u9759\u6001\u5C5E\u6027\uFF0C\u5C1A\u672A\u4E3A\u5176\u6DFB\u52A0\u903B\u8F91\u3002 \u56E0\u6B64\uFF0C\u8FD0\u884C\u5E94\u7528\u5C06\u5F97\u5230\u4E00\u4E2A\u53EF\u6EDA\u52A8\u83DC\u5355\uFF0C\u5176\u4E2D\u5305\u542B\u768420\u4E2A\u9009\u9879\u5916\u89C2\u5168\u90E8\u76F8\u540C\u3002 \u5728\u4E0B\u4E00\u6B65\u4E2D\uFF0C\u6211\u4EEC\u5C06\u7528\u7528\u6237\u4EE3\u7801\u4E3A\u201CscrollWheel\u201D\u6DFB\u52A0\u903B\u8F91\uFF0C\u4EE5\u4FBF\u5728\u8FD0\u884C\u65F6\u95F4\u66F4\u65B0\u6EDA\u8F6E\u4E2D\u7684\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-user-code-to-scroll-wheel"
  }), `\u7B2C3\u6B65\uFF1A\u5C06\u7528\u6237\u4EE3\u7801\u6DFB\u52A0\u5230\u6EDA\u8F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5DF2\u5728TouchGFX Designer\u4E2D\u521B\u5EFA\u5E76\u914D\u7F6E\u4E86\u6EDA\u8F6E\u201CscrollWheel\u201D\uFF0C\u8FD9\u4E00\u6B65\u5C06\u901A\u8FC7\u7528\u6237\u4EE3\u7801\u521B\u5EFA\u903B\u8F91\uFF0C\u903B\u8F91\u66F4\u65B0\u201CscrollWheel\u201D\u4E2D\u7684\u9009\u9879\uFF0C\u4EE5\u4FBF\u57FA\u4E8E\u6EDA\u8F6E\u4E2D\u9009\u9879\u7684\u4F4D\u7F6E\u663E\u793A\u4E0D\u540C\u56FE\u5F62\u3002 \u56E0\u6B64\uFF0C\u8FD9\u4E00\u6B65\u5C06\u6574\u5408TouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801\u3002 \u5173\u4E8E\u6574\u5408TouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/code-structure"
  }), `\u201C\u4EE3\u7801\u7ED3\u6784\u201D\u9875\u9762`), `\u4E0A\u627E\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-image-and-text-in-menuelement"
  }), `\u66F4\u6539MenuElement\u4E2D\u7684\u56FE\u50CF\u548C\u6587\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Since the items in the Scroll Wheel are based on the Custom Container "MenuElement", created in step 1, user code for changing the icon and updating the wildcard needs to be added to "MenuElement". When a Custom Container is created in the TouchGFX Designer it generates a .hpp and .cpp file with the same name as the Custom Container. \u5E94\u5728\u8FD9\u4E9B\u6587\u4EF6\u4E2D\u6574\u5408\u7528\u6237\u4EE3\u7801\u3002 \u5E94\u7528\u793A\u4F8B\u4E2D\u4E3A\u201CMenuElement\u201D\u751F\u6210\u7684\u6587\u4EF6\u7684\u4F4D\u7F6E\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\src\\containers\\MenuElement.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u5C06\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\u6DFB\u52A0\u5230\u201CMenuElement\u201D\uFF0C\u53EF\u4EE5\u66F4\u6539\u201CscrollWheel\u201D\u4E2D\u9009\u9879\u7684\u6587\u672C\u548C\u56FE\u6807\u3002 \u8BE5\u51FD\u6570\u4F7F\u7528\u53D8\u5316\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u7F16\u53F7`), `\u6765\u51B3\u5B9A\u5E94\u663E\u793A\u54EA\u4E2A\u56FE\u6807\u548C\u56FE\u50CF\u63A7\u4EF6\uFF0C\u5E76\u5C06TextArea\u63A7\u4EF6\u4E2D\u7684\u901A\u914D\u7B26\u66F4\u6539\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u7F16\u53F7`), `\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u6211\u4EEC\u5728TextArea\u4E2D\u4F7F\u7528\u4E86\u6570\u5B570-9\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u5C06\u8303\u56F4\u201C0-9\u201D\u6DFB\u52A0\u5230\u201C\u9ED8\u8BA4\u201D\u5B57\u4F53\u6392\u5370\u7684\u201C\u901A\u914D\u7B26\u8303\u56F4\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0BF4\u952E\u83B7\u53D6TouchGFX Designer\u751F\u6210\u7684\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\u7684\u58F0\u660E\u548C\u5B9E\u73B0\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u4E2D\u5B8C\u6210\u7684\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE3\u7801\u4F7F\u7528BITMAP\u5B9A\u4E49\u6765\u5F15\u7528\u9879\u76EE\u4E2D\u7684\u56FE\u50CF\u3002 \u4E3A\u4E86\u80FD\u591F\u4F7F\u7528\u8FD9\u4E9B\u56FE\u50CF\uFF0C\u5FC5\u987B\u50CF\u4E4B\u524D\u4E00\u6837\u5305\u542B\u6587\u4EF6\u201CBitmapDatabase.hpp\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6DFB\u52A0\u4EE3\u7801\u66F4\u65B0MenuElement\u7684\u5185\u5BB9\u540E\uFF0C\u4E0B\u4E00\u4EF6\u8981\u505A\u7684\u4E8B\u662F\u6DFB\u52A0\u7528\u4E8E\u66F4\u65B0\u6EDA\u8F6E\u4E2D\u9009\u9879\u7684\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "update-the-items-in-the-scroll-wheel"
  }), `\u66F4\u65B0\u6EDA\u8F6E\u4E2D\u7684\u9009\u9879`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u521B\u5EFA\u6EDA\u8F6E\u65F6\uFF0CTouchGFX Designer\u5728Screen\u57FA\u7C7B\u4E2D\u751F\u6210\u865A\u62DF\u51FD\u6570\uFF0C\u6BCF\u5F53\u6EDA\u8F6E\u4E2D\u7684\u65B0\u9009\u9879\u53D8\u5F97\u53EF\u89C1\u65F6\u90FD\u4F1A\u8C03\u7528\u6B64\u51FD\u6570\u3002 \u5728\u7528\u6237\u4EE3\u7801\u4E2D\u91CD\u5199\u6B64\u51FD\u6570\u5C06\u4F7F\u4EE3\u7801\u80FD\u591F\u4E0E\u6EDA\u8F6E\u4E2D\u7684\u9009\u9879\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51FD\u6570\u540D\u79F0\u662F\u6EDA\u8F6E\u540D\u79F0+UpdatedItem\u3002 \u5C31\u672C\u6559\u7A0B\u800C\u8A00\uFF0C\u51FD\u6570\u540D\u79F0\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheelUpdateItem(MenuElement& item&  int16_t itemIndex)`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53C2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u662F\u7D22\u5F15\u503C\uFF0C\u6307\u793A\u5F53\u524D\u6B63\u5728\u66F4\u65B0\u7684\u9009\u9879\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u9009\u9879`), `\u662F\u5BF9\u6EDA\u8F6E\u4E2D\u5F53\u524D\u53EF\u89C1\u7684MenuElement\u5B9E\u4F8B\u7684\u5F15\u7528\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u6307\u793A\u6B63\u5728\u66F4\u65B0\u7684\u9009\u9879\uFF0C\u4E3A\u9009\u9879\u8C03\u7528\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber()`), `\u5C06\u57FA\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u7684\u503C\u4FEE\u6539\u6B63\u5728\u66F4\u65B0\u7684\u9009\u9879\u7684\u5185\u5BB9\u3002 \u4E0B\u9762\u662F\u7528\u4E8E\u66F4\u65B0\u6EDA\u8F6E\u9009\u9879\u7684\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u8FD0\u884C\u5E94\u7528\u7684\u6A21\u62DF\u5668\uFF0C\u7ED3\u679C\u663E\u793A\u9009\u9879\u7684\u6587\u672C\u5305\u542B\u5176\u7D22\u5F15\u503C\uFF0C\u5E76\u4E14\u56FE\u6807\u968F\u663E\u793A\u7684\u9009\u9879\u800C\u53D8\u5316\u3002 \u4E0B\u56FE\u663E\u793A\u4E86\u7528\u5B9E\u73B0\u7684\u4EE3\u7801\u8FD0\u884C\u6A21\u62DF\u5668\u7684\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim.png",
    mdxType: "Figure"
  }, "\u8FD0\u884C\u6A21\u62DF\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-custom-behavior-to-scroll-wheel"
  }), `\u7B2C4\u6B65\uFF1A\u5C06\u81EA\u5B9A\u4E49\u884C\u4E3A\u6DFB\u52A0\u5230\u6EDA\u8F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6559\u7A0B4\u7684\u6700\u540E\u4E00\u6B65\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4E3A\u6EDA\u8F6E\u6DFB\u52A0\u81EA\u5B9A\u4E49\u884C\u4E3A\uFF0C\u4F7F\u5176\u5728\u6EDA\u52A8\u9009\u9879\u65F6\u4EE5\u73AF\u5F62\u6A21\u5F0F\uFF0C\u5373\u7C7B\u4F3C\u4E8E\u8868\u76D8\u7684\u6A21\u5F0F\u79FB\u52A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "add-custom-behavior-to-menuelement"
  }), `\u5C06\u81EA\u5B9A\u4E49\u884C\u4E3A\u6DFB\u52A0\u5230MenuElement`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BA9\u6EDA\u8F6E\u4EE5\u8868\u76D8\u6A21\u5F0F\u79FB\u52A8\uFF0C\u662F\u901A\u8FC7\u79FB\u52A8\u6EDA\u8F6E\u4E2D\u6BCF\u4E2A\u53EF\u89C1\u9009\u9879\u7684\u56FE\u50CF\u548C\u6587\u672C\u63A7\u4EF6\u7684\u6C34\u5E73\u4F4D\u7F6E\u6765\u5B9E\u73B0\u7684\u3002 \u4E3A\u6B64\uFF0C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u4E2D\u91CD\u5199`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u201CMenuElement\u201D`), `\u7684\u51FD\u6570setY()\u3002 \u6BCF\u6B21\u6CBF\u5782\u76F4\u65B9\u5411\u79FB\u52A8\u81EA\u5B9A\u4E49\u5BB9\u5668\u65F6\uFF0C\u90FD\u4F1A\u8C03\u7528\u5B83\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7528\u4E8E\u5728\u65B0\u4F4D\u7F6E\u91CD\u7ED8\u81EA\u5B9A\u4E49\u5BB9\u5668\u3002 \u901A\u8FC7\u91CD\u5199`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\uFF0C\u5728\u6BCF\u6B21\u6EDA\u52A8\u6EDA\u8F6E\u65F6\uFF0C\u8FD8\u80FD\u591F\u5728\u5BB9\u5668\u5185\u90E8\u6C34\u5E73\u79FB\u52A8\u56FE\u50CF\u548C\u6587\u672C\u63A7\u4EF6\u3002 \u4E0B\u56FE\u663E\u793A\u4E86\u5982\u4F55\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u4E2D\u5B9E\u73B0\u65B0\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY(`), `)\u51FD\u6570\u4EE5\u53CA\u79FB\u52A8\u4E24\u4E2A\u63A7\u4EF6\u3002 \u8BF7\u6CE8\u610F\uFF0C\u9700\u5C06`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `math.h`), `\u5305\u542B\u5728\u5185\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9E\u73B0\u65B0\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u51FD\u6570\u540E\uFF0C\u8FD0\u884C\u6A21\u62DF\u5668\uFF0C\u7ED3\u679C\u663E\u793A\u6EDA\u8F6E\u4EE5\u8868\u76D8\u6A21\u5F0F\uFF08\u4E0E\u8986\u76D6\u5C42\u7684\u66F2\u7EBF\u5BF9\u9F50\uFF09\u79FB\u52A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim-02.png",
    mdxType: "Figure"
  }, "\u8FD0\u884C\u6A21\u62DF\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6559\u7A0B4\u5230\u6B64\u7ED3\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u4E3A\u4E86\u5B66\u4E60\u5173\u4E8E\u6559\u7A0B\u4E2D\u4F7F\u7528\u7684\u6982\u5FF5\u7684\u66F4\u591A\u77E5\u8BC6\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u8BA8\u8BBA\u4E86\u60A8\u5DF2\u4F7F\u7528\u7684\u4E00\u4E9B\u6982\u5FF5\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/containers/scroll-wheel",
    mdxType: "Link"
  }, "\u201C\u6EDA\u8F6E\u201D\u9875\u9762"), "\u63CF\u8FF0\u4E86\u5982\u4F55\u5728TouchGFX Designer\u4E2D\u521B\u5EFA\u548C\u914D\u7F6E\u6EDA\u8F6E\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u521B\u5EFA\u903B\u8F91\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "\u201C\u81EA\u5B9A\u4E49\u5BB9\u5668\u201D\u9875\u9762"), "\u8BA8\u8BBA\u4E86\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u6982\u5FF5\u548C\u7528\u6CD5\u3002"))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 38197:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip");

/***/ })

}]);