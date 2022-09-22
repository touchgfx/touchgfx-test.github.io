"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[965],{

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

/***/ 77696:
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
  title: "\u6559\u7A0B4\uFF1A\u5275\u5EFA\u5177\u6709\u81EA\u8A02\u884C\u70BA\u7684\u6EFE\u8F2A\u3002"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-04",
  "id": "tutorials/tutorial-04",
  "title": "\u6559\u7A0B4\uFF1A\u5275\u5EFA\u5177\u6709\u81EA\u8A02\u884C\u70BA\u7684\u6EFE\u8F2A\u3002",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-04.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-04",
  "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-04",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-04",
    "title": "\u6559\u7A0B4\uFF1A\u5275\u5EFA\u5177\u6709\u81EA\u8A02\u884C\u70BA\u7684\u6EFE\u8F2A\u3002"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6559\u7A0B3\uFF1A\u591A\u500B\u87A2\u5E55\u7684\u61C9\u7528",
    "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-03"
  },
  "next": {
    "title": "\u6559\u7A0B5\uFF1A\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C",
    "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-05"
  }
};
const assets = {};





const toc = [{
  value: "\u7B2C1\u6B65\uFF1A\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668",
  id: "step-1-creating-a-custom-container",
  level: 2
}, {
  value: "\u5C07\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u5230\u81EA\u8A02\u5BB9\u5668",
  id: "adding-widgets-to-the-custom-container",
  level: 3
}, {
  value: "\u5C07\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0\u5230\u87A2\u5E55",
  id: "adding-the-custom-container-to-a-screen",
  level: 3
}, {
  value: "\u7B2C2\u6B65\uFF1A\u5275\u5EFA\u6EFE\u8F2A",
  id: "step-2-creating-a-scroll-wheel",
  level: 2
}, {
  value: "\u5275\u5EFA\u6EFE\u8F2A",
  id: "creating-the-scroll-wheel",
  level: 3
}, {
  value: "\u5C07\u9078\u9805\u6DFB\u52A0\u5230\u6EFE\u8F2A",
  id: "adding-items-to-the-scroll-wheel",
  level: 3
}, {
  value: "\u7B2C3\u6B65\uFF1A\u5C07\u7528\u6236\u7A0B\u5F0F\u78BC\u6DFB\u52A0\u5230\u6EFE\u8F2A",
  id: "step-3-adding-user-code-to-scroll-wheel",
  level: 2
}, {
  value: "\u66F4\u6539MenuElement\u4E2D\u7684\u5716\u50CF\u548C\u6587\u5B57",
  id: "change-image-and-text-in-menuelement",
  level: 3
}, {
  value: "\u66F4\u65B0\u6EFE\u8F2A\u4E2D\u7684\u9078\u9805",
  id: "update-the-items-in-the-scroll-wheel",
  level: 3
}, {
  value: "\u7B2C4\u6B65\uFF1A\u5C07\u81EA\u8A02\u884C\u70BA\u6DFB\u52A0\u5230\u6EFE\u8F2A",
  id: "step-4-adding-custom-behavior-to-scroll-wheel",
  level: 2
}, {
  value: "\u5C07\u81EA\u8A02\u884C\u70BA\u6DFB\u52A0\u5230MenuElement",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u6559\u7A0B\u4E2D\uFF0C\u60A8\u5C07\u5B78\u7FD2\u5982\u4F55\u5275\u5EFA\u548C\u914D\u7F6E\u5169\u500B\u5C0F\u90E8\u4EF6 - \u81EA\u8A02\u5BB9\u5668\u548C\u6EFE\u8F2A\u3002 \u81EA\u8A02\u5BB9\u5668\u5C0F\u90E8\u4EF6\u4F7F\u4F7F\u7528\u8005\u80FD\u5920\u901A\u904E\u7D44\u5408\u591A\u500B\u5176\u4ED6\u5C0F\u90E8\u4EF6\u4F86\u5275\u5EFA\u65B0\u7684\u5C0F\u90E8\u4EF6\uFF0C\u4E26\u70BA\u81EA\u8A02\u5BB9\u5668\u4E2D\u7684\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u7279\u5B9A\u884C\u70BA\u3002 \u6EFE\u8F2A\u662F\u7528\u4F86\u5275\u5EFA\u53EF\u6372\u52D5\u529F\u80FD\u8868\u7684\u5C0F\u90E8\u4EF6\uFF0C\u83DC\u55AE\u7531\u591A\u500B\u53EF\u9078\u9805\u7FA4\u7D44\u6210\u3002 \u672C\u6559\u7A0B\u5C07\u5C55\u793A\u5982\u4F55\u5275\u5EFA\u7528\u6236\u7A0B\u5F0F\u78BC\u4EE5\u4FBF\u4FEE\u6539\u5C0F\u90E8\u4EF6\u7684\u884C\u70BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u6B21\u6211\u5011\u5C07\u4F7F\u7528\u8F03\u5927\u7684\u87A2\u5E55\uFF0C\u56E0\u6B64\u7528800 x 480\u50CF\u7D20\u7684\u89E3\u6790\u5EA6\u70BA\u958B\u767C\u677F\u555F\u52D5\u65B0\u5C08\u6848\uFF08\u5982STM32F469\u63A2\u7D22\u5957\u4EF6\uFF09\uFF0C\u6216\u8005\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6A21\u64EC\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u81EA\u8A02\u5BB9\u5668\u548C\u6EFE\u8F2A\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/custom-containers"
  }), `\u201C\u81EA\u8A02\u5BB9\u5668\u201D`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/containers/scroll-wheel"
  }), `\u201C\u6EFE\u8F2A\u201D`), `\u9801\u9762\u4E0A\u627E\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6559\u7A0B\u4F7F\u7528\u7684\u5716\u5F62\u53EF\u5F9E\u6B64`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(38197)/* ["default"] */ .Z)
  }, "\u9023\u7D50"), `\u4E0B\u8F09\u3002 \u5C07\u8CC7\u7522\u4E0B\u7684images\u8CC7\u6599\u593E\u4E2D\u7684\u6A94\u6848\u89E3\u58D3\u7E2E\uFF0C\u5C31\u672C\u6559\u7A0B\u4E2D\u4F7F\u7528\u7684\u5C08\u6848\u800C\u8A00\uFF0C\u8DEF\u5F91\u70BAMyApplication2\\assets\\images\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-creating-a-custom-container"
  }), `\u7B2C1\u6B65\uFF1A\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8207\u6559\u7A0B2\u4E2D\u7684\u7B2C1\u6B65\u985E\u4F3C\uFF0C\u9996\u5148\u7528TouchGFX Designer\u65B0\u5EFA\u5C08\u6848\u3002 \u9019\u4E00\u6B21\uFF0C\u7576\u65B0\u5C08\u6848\u5C31\u7DD2\u6642\uFF0C\u5728TouchGFX Designer\u4E2D\u5F9E\u201Cscreens\u201D\u9078\u9805\u5361\u5207\u63DB\u5230\u201CContainer\u201D\u9078\u9805\u5361 (1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 5]],
    imageSource: "/img/tutorials/tutorial-04/selecting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u9078\u64C7\u201CCustom Container\u201D\u529F\u80FD\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u65BC\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668\u7684\u9078\u9805\u5361\u8207\u201CScreens\u201D\u9078\u9805\u5361\u985E\u4F3C\uFF0C\u4EE5\u8207\u65B0\u5EFA\u87A2\u5E55\u76F8\u540C\u7684\u65B9\u5F0F\u65B0\u5EFA\u81EA\u8A02\u5BB9\u5668\u3002 \u5728\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668\u5F8C\uFF0C\u53EF\u4EE5\u70BA\u5176\u6DFB\u52A0\u5C0F\u90E8\u4EF6\uFF0C\u4E26\u4E14\u53EF\u4EE5\u4FEE\u6539\u81EA\u8A02\u5BB9\u5668\u7684\u5927\u5C0F\u548C\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u81EA\u8A02\u5BB9\u5668\u201D\u9078\u9805\u5361\u4E0A\uFF0C\u4F7F\u7528\u201C+\u201D\u6309\u9215 (1) \u65B0\u5EFA\u4E00\u500B\u81EA\u8A02\u5BB9\u5668\uFF0C\u5C07\u5176\u91CD\u547D\u540D\u70BA\u201CMenuElement\u201D(2)\uFF0C\u4E26\u5C07\u5BEC\u5EA6\u4FEE\u6539\u70BA390\u3001\u9AD8\u5EA6\u4FEE\u6539\u70BA70 (3)\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 8], [435, 8], [435, 35]],
    imageSource: "/img/tutorials/tutorial-04/creating-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668\u4E26\u8A2D\u7F6E\u5176\u5C6C\u6027`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-widgets-to-the-custom-container"
  }), `\u5C07\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u5230\u81EA\u8A02\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668\u4E26\u8A2D\u7F6E\u5176\u5C6C\u6027\u5F8C\uFF0C\u53EF\u4EE5\u5C07\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u5230\u81EA\u8A02\u5BB9\u5668\u3002 \u672C\u6559\u7A0B\u4E2D\u7684\u81EA\u8A02\u5BB9\u5668\u5C07\u5305\u542B\u4E00\u5F35\u5716\u50CF\u548C\u4E00\u500B\u4F7F\u7528\u842C\u7528\u5B57\u5143\u7684\u6587\u5B57\u5340\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u95DC\u65BC\u5982\u4F55\u4F7F\u7528\u542B\u842C\u7528\u5B57\u5143\u7684\u6587\u5B57\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",
    mdxType: "Link"
  }, "\u201C\u6587\u5B57\u548C\u5B57\u9AD4\u201D"), "\u9801\u9762\u7684\u842C\u7528\u5B57\u5143\u90E8\u5206\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u7167\u4EE5\u4E0B\u65B9\u5F0F\u63D2\u5165\u5169\u500B\u5C0F\u90E8\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C0F\u90E8\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C6C\u6027`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5716\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u540D\u7A31\uFF1A\u5716\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5716\u50CF\uFF1Aicon00.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u4F4D\u7F6E:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 34`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Y: 17`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u540D\u7A31\uFF1Atext`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u4F4D\u7F6E:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 93, Y: 23`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u6587\u5B57:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u6587\u5B57\uFF1AMenu Element `, `<`, `value`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 1:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u521D\u59CB\u503C\uFF1A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u7DE9\u5B58\u5927\u5C0F\uFF1A3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5B57\u9AD4\u6392\u5370\uFF1A20px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5C0D\u9F4A\uFF1A\u5DE6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u5916\u89C0:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\u984F\u8272\uFF1A#FFFFFFFF`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/adding-content-cc-4-17.png",
    mdxType: "Figure"
  }, "\u5C07\u5167\u5BB9\u6DFB\u52A0\u5230\u81EA\u8A02\u5BB9\u5668\uFF08\u9078\u4E2DTextArea\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-custom-container-to-a-screen"
  }), `\u5C07\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0\u5230\u87A2\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Going back to the Screens tab, it is now possible to select the "MenuElement" in the widget menu under Custom Container (1). Place a black box as background and add a couple of the created Custom Container on the canvas. Note that you can move the inserted Containers freely on the Screen. The Custom Containers will appear as one element in the Widget list on the left (2).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[330, 10], [50, 25]],
    imageSource: "/img/tutorials/tutorial-04/inserting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u5728\u87A2\u5E55\u4E0A\u5C07\u81EA\u8A02\u5BB9\u5668\u4F5C\u70BA\u5C0F\u90E8\u4EF6\u63D2\u5165`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-creating-a-scroll-wheel"
  }), `\u7B2C2\u6B65\uFF1A\u5275\u5EFA\u6EFE\u8F2A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6559\u7A0B4\u7684\u9019\u4E00\u6B65\u4E2D\uFF0C\u6211\u5011\u5C07\u4F7F\u7528\u7B2C1\u6B65\u4E2D\u5275\u5EFA\u7684\u81EA\u8A02\u5BB9\u5668\u201CMenuElement\u201D\u5275\u5EFA\u6EFE\u8F2A\u3002 \u5982\u7B2C1\u6B65\u4E2D\u6240\u8FF0\uFF0C\u6EFE\u8F2A\u7528\u65BC\u5275\u5EFA\u5305\u542B\u591A\u500B\u53EF\u9078\u9805\u7684\u53EF\u6372\u52D5\u529F\u80FD\u8868\u3002 \u5728\u6EFE\u52D5\u6642\uFF0C\u6EFE\u8F2A\u4E2D\u7684\u9078\u9805\u6703\u81EA\u52D5\u66F4\u65B0\uFF1B\u7576\u9078\u4E2D\u4E00\u500B\u9078\u9805\u6642\uFF0C\u8A72\u9078\u9805\u6703\u7A81\u51FA\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u9078\u64C7\u8981\u7528\u4F5C\u201C\u9078\u9805\u7BC4\u672C\u201D\u7684\u81EA\u8A02\u5BB9\u5668\uFF0C\u5C07\u9078\u9805\u6DFB\u52A0\u5230\u6EFE\u8F2A\u3002 \u201C\u9078\u9805\u7BC4\u672C\u201D\u7684\u6982\u5FF5\u662F\u4F7F\u7528\u81EA\u8A02\u5BB9\u5668\u4E2D\u7684\u5C0F\u90E8\u4EF6\u4F5C\u70BA\u6EFE\u8F2A\u4E2D\u9078\u9805\u7684\u57FA\u790E\uFF0C\u4E26\u5728\u57F7\u884C\u6642\u9593\u4F7F\u7528\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u66F4\u65B0\u9078\u9805\u4E2D\u7684\u5C0F\u90E8\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-the-scroll-wheel"
  }), `\u5275\u5EFA\u6EFE\u8F2A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u6EFE\u8F2A\u524D\uFF0C\u522A\u9664\u87A2\u5E55\u4E0A\u5DF2\u63D2\u5165\u7684\u81EA\u8A02\u5BB9\u5668\uFF0C\u50C5\u7559\u4E0B\u9ED1\u8272\u65B9\u584A\u4F5C\u70BA\u80CC\u666F\u3002 \u5728\u201CContainers \u201D\u5340\u4E0B\u7684\u5C0F\u90E8\u4EF6\u529F\u80FD\u8868\u4E2D\u9078\u64C7\u201CScroll Wheel\u201D(1)\u3002 \u5275\u5EFA\u4E00\u500B\u6EFE\u8F2A\uFF0C\u5C07\u4F4D\u7F6E\u5C6C\u6027\u8A2D\u7F6E\u70BAX = 208\u3001Y = 45\u548CH = 390\uFF0C\u4E26\u5C07\u540D\u7A31\u4FEE\u6539\u70BA\u201CscrollWheel\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[280, 65]],
    imageSource: "/img/tutorials/tutorial-04/insert-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u63D2\u5165\u6EFE\u8F2A\u4E26\u8A2D\u7F6E\u540D\u7A31\u548C\u4F4D\u7F6E\u5C6C\u6027"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-items-to-the-scroll-wheel"
  }), `\u5C07\u9078\u9805\u6DFB\u52A0\u5230\u6EFE\u8F2A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6EFE\u8F2A\u5C6C\u6027\u201CItem Template\u201D\u4E0B\u7684\u4E0B\u62C9\u6E05\u55AE\uFF0C\u9078\u64C7\u7B2C1\u6B65\u4E2D\u5275\u5EFA\u7684\u201CMenuElement\u201D\u4F5C\u70BA\u201C\u9078\u9805\u7BC4\u672C\u201D(1)\u3002 \u6EFE\u8F2A\u4E2D\u7684\u9078\u9805\u6578\u4E5F\u5728\u201C\u9078\u9805\u7BC4\u672C\u201D\u4E0B\u8A2D\u7F6E\u3002 Set this to 20 items. Since the Scroll Wheel works by having a selected item in focus, setting where the selected item is positioned in the UI, is done by setting "Selected Item Offset" under the property "List Apperance" (2). \u6211\u5011\u5E0C\u671B\u9078\u4E2D\u9805\u4F4D\u65BC\u6EFE\u8F2A\u7684\u4E2D\u9593\uFF0C\u56E0\u6B64\u5C07\u201CSelected Item Offset\u201D\u8A2D\u7F6E\u70BA (390-70)/2 = 160\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[435, 80], [435, 130]],
    imageSource: "/img/tutorials/tutorial-04/add-cc-to-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5C07\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0\u5230\u6EFE\u8F2A\u4E26\u8ABF\u6574\u5176\u5C6C\u6027"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u7A81\u51FA\u986F\u793A\u201CscrollWheel\u201D\u7684\u5340\u57DF\uFF0C\u4F7F\u7528\u7B2C1\u6B65\u4E2D\u4E0B\u8F09\u7684.zip\u6A94\u4E2D\u7684\u5169\u5F35\u5716\u50CFbackground.png\u548Coverlay.png\uFF0C\u4E26\u5C07\u5B83\u5011\u4F5C\u70BA\u5716\u50CF\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u5230\u61C9\u7528\u3002 \u5169\u5F35\u5716\u50CF\u662F\u80CC\u666F\uFF0C\u7A81\u51FA\u986F\u793A\u201CscrollWheel\u201D\u7684\u5340\u57DF\u548C\u4E00\u500B\u8986\u84CB\u5C64\uFF0C\u5F8C\u8005\u6703\u5728\u79FB\u52D5\u5230\u201CscrollWheel\u201D\u7684\u908A\u7DE3\u6642\u96B1\u85CF\u201CscrollWheel\u201D\u4E2D\u7684\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u50CFbackground.png\u7684\u5EA7\u6A19\u70BAX = 205\u548CY = 45\uFF0C\u4F4D\u65BC\u201CscrollWheel\u201D\u5F8C\u65B9\uFF0C\u56E0\u6B64\u5728\u80CC\u666F\u4E0A\u65B9\u7E6A\u88FD\u201CscrollWheel\u201D\u4E2D\u7684\u9078\u9805\u3002 overlay.png\u7684\u5EA7\u6A19\u70BAX = 0\u548CY = 0\uFF0C\u4F4D\u65BC\u201CscrollWheel\u201D\u4E0A\u65B9\uFF0C\u9019\u610F\u5473\u8457\u5728overlay.png\u4E0B\u65B9\u7E6A\u88FD\u9078\u9805\uFF0C\u4EE5\u4FBF\u96B1\u85CFoverlay.png\u4E0D\u900F\u660E\u90E8\u5206\u7684\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0BCTRL-B\u548CCTRL-F\u9375\u53EF\u4EE5\u524D\u5F8C\u79FB\u52D5\u201C\u5C0F\u90E8\u4EF6\u201D\u5217\u8868\u4E2D\u7684\u5C0F\u90E8\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/graphics-added-4-17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u5230\u6709\u6EFE\u8F2A\u7684\u87A2\u5E55\u4E2D\u7684\u5716\u5F62"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u53EA\u8ABF\u6574\u4E86\u201CscrollWheel\u201D\u7684\u975C\u614B\u5C6C\u6027\uFF0C\u5C1A\u672A\u70BA\u5176\u6DFB\u52A0\u908F\u8F2F\u3002 \u56E0\u6B64\uFF0C\u904B\u884C\u61C9\u7528\u5C07\u5F97\u5230\u4E00\u500B\u53EF\u6372\u52D5\u529F\u80FD\u8868\uFF0C\u5176\u4E2D\u5305\u542B\u768420\u500B\u9078\u9805\u5916\u89C0\u5168\u90E8\u76F8\u540C\u3002 \u5728\u4E0B\u4E00\u6B65\u4E2D\uFF0C\u6211\u5011\u5C07\u7528\u7528\u6236\u7A0B\u5F0F\u78BC\u70BA\u201CscrollWheel\u201D\u6DFB\u52A0\u908F\u8F2F\uFF0C\u4EE5\u4FBF\u5728\u57F7\u884C\u6642\u9593\u66F4\u65B0\u6EFE\u8F2A\u4E2D\u7684\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-user-code-to-scroll-wheel"
  }), `\u7B2C3\u6B65\uFF1A\u5C07\u7528\u6236\u7A0B\u5F0F\u78BC\u6DFB\u52A0\u5230\u6EFE\u8F2A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5DF2\u5728TouchGFX Designer\u4E2D\u5275\u5EFA\u4E26\u914D\u7F6E\u4E86\u6EFE\u8F2A\u201CscrollWheel\u201D\uFF0C\u9019\u4E00\u6B65\u5C07\u901A\u904E\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u5275\u5EFA\u908F\u8F2F\uFF0C\u908F\u8F2F\u66F4\u65B0\u201CscrollWheel\u201D\u4E2D\u7684\u9078\u9805\uFF0C\u4EE5\u4FBF\u57FA\u65BC\u6EFE\u8F2A\u4E2D\u9078\u9805\u7684\u4F4D\u7F6E\u986F\u793A\u4E0D\u540C\u5716\u5F62\u3002 \u56E0\u6B64\uFF0C\u9019\u4E00\u6B65\u5C07\u6574\u5408TouchGFX Designer\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u548C\u7528\u6236\u7A0B\u5F0F\u78BC\u3002 \u95DC\u65BC\u6574\u5408TouchGFX Designer\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u548C\u7528\u6236\u7A0B\u5F0F\u78BC\u7684\u8A73\u7D30\u8AAA\u660E\uFF0C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/code-structure"
  }), `\u201C\u7A0B\u5F0F\u78BC\u7D50\u69CB\u201D`), `\u9801\u9762\u4E0A\u627E\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-image-and-text-in-menuelement"
  }), `\u66F4\u6539MenuElement\u4E2D\u7684\u5716\u50CF\u548C\u6587\u5B57`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Since the items in the Scroll Wheel are based on the Custom Container "MenuElement", created in step 1, user code for changing the icon and updating the wildcard needs to be added to "MenuElement". When a Custom Container is created in the TouchGFX Designer it generates a .hpp and .cpp file with the same name as the Custom Container. \u61C9\u5728\u9019\u4E9B\u6A94\u6848\u4E2D\u6574\u5408\u7528\u6236\u7A0B\u5F0F\u78BC\u3002 \u61C9\u7528\u7BC4\u4F8B\u4E2D\u70BA\u201CMenuElement\u201D\u751F\u6210\u7684\u6587\u4EF6\u7684\u4F4D\u7F6E\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\src\\containers\\MenuElement.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u5C07\u51FD\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\u6DFB\u52A0\u5230\u201CMenuElement\u201D\uFF0C\u53EF\u4EE5\u66F4\u6539\u201CscrollWheel\u201D\u4E2D\u9078\u9805\u7684\u6587\u5B57\u548C\u5716\u793A\u3002 \u8A72\u51FD\u6578\u4F7F\u7528\u8B8A\u6578\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `no`), `\u4F86\u6C7A\u5B9A\u61C9\u986F\u793A\u54EA\u500B\u5716\u793A\u548C\u5716\u50CF\u5C0F\u90E8\u4EF6\uFF0C\u4E26\u5C07TextArea\u5C0F\u90E8\u4EF6\u4E2D\u7684\u842C\u7528\u5B57\u5143\u66F4\u6539\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `no`), `\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u6211\u5011\u5728TextArea\u4E2D\u4F7F\u7528\u4E86\u6578\u5B570-9\uFF0C\u56E0\u6B64\u9084\u9700\u8981\u5C07\u7BC4\u570D\u201C0-9\u201D\u6DFB\u52A0\u5230\u201C\u9810\u8A2D\u201D\u5B57\u9AD4\u6392\u5370\u7684\u201C\u842C\u7528\u5B57\u5143\u7BC4\u570D\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0BF4\u9375\u7372\u53D6TouchGFX Designer\u751F\u6210\u7684\u6A94\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\u7684\u5BA3\u544A\u548C\u5BE6\u73FE\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), ` \u4E2D\u5B8C\u6210\u7684\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7A0B\u5F0F\u78BC\u4F7F\u7528BITMAP\u5B9A\u7FA9\u4F86\u53C3\u7167\u5C08\u6848\u4E2D\u7684\u5716\u50CF\u3002 \u70BA\u4E86\u80FD\u5920\u4F7F\u7528\u9019\u4E9B\u5716\u50CF\uFF0C\u5FC5\u9808\u50CF\u4E4B\u524D\u4E00\u6A23\u5305\u542B\u6A94\u6848\u201CBitmapDatabase.hpp\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6DFB\u52A0\u7A0B\u5F0F\u78BC\u66F4\u65B0MenuElement\u7684\u5167\u5BB9\u5F8C\uFF0C\u4E0B\u4E00\u4EF6\u8981\u505A\u7684\u4E8B\u662F\u6DFB\u52A0\u7528\u65BC\u66F4\u65B0\u6EFE\u8F2A\u4E2D\u9078\u9805\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "update-the-items-in-the-scroll-wheel"
  }), `\u66F4\u65B0\u6EFE\u8F2A\u4E2D\u7684\u9078\u9805`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u6EFE\u8F2A\u6642\uFF0CTouchGFX Designer\u5728Screen\u57FA\u985E\u4E2D\u751F\u6210\u865B\u64EC\u51FD\u6578\uFF0C\u6BCF\u7576\u6EFE\u8F2A\u4E2D\u7684\u65B0\u9078\u9805\u8B8A\u5F97\u53EF\u898B\u6642\u90FD\u6703\u547C\u53EB\u6B64\u51FD\u6578\u3002 \u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u4E2D\u8986\u5BEB\u6B64\u51FD\u6578\u5C07\u4F7F\u7A0B\u5F0F\u78BC\u80FD\u5920\u8207\u6EFE\u8F2A\u4E2D\u7684\u9078\u9805\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u51FD\u6578\u540D\u7A31\u662F\u6EFE\u8F2A\u540D\u7A31 + UpdatedItem\u3002 \u5C31\u672C\u6559\u7A0B\u800C\u8A00\uFF0C\u51FD\u6578\u540D\u7A31\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53C3\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u662F\u7D22\u5F15\u503C\uFF0C\u6307\u793A\u7576\u524D\u6B63\u5728\u66F4\u65B0\u7684\u9078\u9805\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u9078\u9805`), `\u662F\u5C0D\u6EFE\u8F2A\u4E2D\u7576\u524D\u53EF\u898B\u7684MenuElement\u5BE6\u4F8B\u7684\u5F15\u7528\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u6307\u793A\u6B63\u5728\u66F4\u65B0\u7684\u9078\u9805\uFF0C\u70BA\u9078\u9805\u547C\u53EB\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber()`), `\u5C07\u57FA\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\u7684\u503C\u4FEE\u6539\u6B63\u5728\u66F4\u65B0\u7684\u9078\u9805\u7684\u5167\u5BB9\u3002 \u4E0B\u9762\u662F\u7528\u65BC\u66F4\u65B0\u6EFE\u8F2A\u9078\u9805\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u904B\u884C\u61C9\u7528\u7684\u6A21\u64EC\u5668\uFF0C\u7D50\u679C\u986F\u793A\u9078\u9805\u7684\u6587\u5B57\u5305\u542B\u5176\u7D22\u5F15\u503C\uFF0C\u4E26\u4E14\u5716\u793A\u96A8\u986F\u793A\u7684\u9078\u9805\u800C\u8B8A\u5316\u3002 \u4E0B\u5716\u986F\u793A\u4E86\u7528\u5BE6\u73FE\u7684\u7A0B\u5F0F\u78BC\u904B\u884C\u6A21\u64EC\u5668\u7684\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim.png",
    mdxType: "Figure"
  }, "\u904B\u884C\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-custom-behavior-to-scroll-wheel"
  }), `\u7B2C4\u6B65\uFF1A\u5C07\u81EA\u8A02\u884C\u70BA\u6DFB\u52A0\u5230\u6EFE\u8F2A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6559\u7A0B4\u7684\u6700\u5F8C\u4E00\u6B65\u4E2D\uFF0C\u6211\u5011\u5C07\u70BA\u6EFE\u8F2A\u6DFB\u52A0\u81EA\u8A02\u884C\u70BA\uFF0C\u4F7F\u5176\u5728\u6EFE\u52D5\u9078\u9805\u6642\u4EE5\u74B0\u5F62\u6A21\u5F0F\uFF0C\u5373\u985E\u4F3C\u65BC\u9336\u76E4\u7684\u6A21\u5F0F\u79FB\u52D5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "add-custom-behavior-to-menuelement"
  }), `\u5C07\u81EA\u8A02\u884C\u70BA\u6DFB\u52A0\u5230MenuElement`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8B93\u6EFE\u8F2A\u4EE5\u9336\u76E4\u6A21\u5F0F\u79FB\u52D5\uFF0C\u662F\u901A\u904E\u79FB\u52D5\u6EFE\u8F2A\u4E2D\u6BCF\u500B\u53EF\u898B\u9078\u9805\u7684\u5716\u50CF\u548C\u6587\u5B57\u5C0F\u90E8\u4EF6\u7684\u6C34\u5E73\u4F4D\u7F6E\u4F86\u5BE6\u73FE\u7684\u3002 \u70BA\u6B64\uFF0C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u4E2D\u91CD\u5BEB\u201CMenuElement\u201D\u7684\u51FD\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u3002 \u6BCF\u6B21\u6CBF\u5782\u76F4\u65B9\u5411\u79FB\u52D5\u81EA\u8A02\u5BB9\u5668\u6642\uFF0C\u90FD\u6703\u547C\u53EB\u5B83\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u51FD\u6578\uFF0C\u8A72\u51FD\u6578\u7528\u65BC\u5728\u65B0\u4F4D\u7F6E\u91CD\u7E6A\u81EA\u8A02\u5BB9\u5668\u3002 \u901A\u904E\u91CD\u5BEB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\uFF0C\u5728\u6BCF\u6B21\u6EFE\u52D5\u6EFE\u8F2A\u6642\uFF0C\u9084\u80FD\u5920\u5728\u5BB9\u5668\u5167\u90E8\u6C34\u5E73\u79FB\u52D5\u5716\u50CF\u548C\u6587\u5B57\u5C0F\u90E8\u4EF6\u3002 \u4E0B\u5716\u986F\u793A\u4E86\u5982\u4F55\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\u4E2D\u5BE6\u73FE\u65B0\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u51FD\u6578\u4EE5\u53CA\u79FB\u52D5\u5169\u500B\u5C0F\u90E8\u4EF6\u3002 \u8ACB\u6CE8\u610F\uFF0C\u9700\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `math.h`), `\u5305\u542B\u5728\u5167\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BE6\u73FE\u65B0\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\u51FD\u6578\u5F8C\uFF0C\u904B\u884C\u6A21\u64EC\u5668\uFF0C\u7D50\u679C\u986F\u793A\u6EFE\u8F2A\u4EE5\u9336\u76E4\u6A21\u5F0F\uFF08\u8207\u8986\u84CB\u5C64\u7684\u66F2\u7DDA\u5C0D\u9F4A\uFF09\u79FB\u52D5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim-02.png",
    mdxType: "Figure"
  }, "\u904B\u884C\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6559\u7A0B4\u5230\u6B64\u7D50\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u70BA\u4E86\u5B78\u7FD2\u95DC\u65BC\u6559\u7A0B\u4E2D\u4F7F\u7528\u7684\u6982\u5FF5\u7684\u66F4\u591A\u77E5\u8B58\uFF0C\u4E0B\u9762\u7684\u7AE0\u7BC0\u5C07\u8A0E\u8AD6\u60A8\u5DF2\u4F7F\u7528\u7684\u4E00\u4E9B\u6982\u5FF5\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/containers/scroll-wheel",
    mdxType: "Link"
  }, "\u201C\u6EFE\u8F2A\u201D\u9801\u9762"), "\u63CF\u8FF0\u4E86\u5982\u4F55\u5728TouchGFX Designer\u4E2D\u5275\u5EFA\u548C\u914D\u7F6E\u6EFE\u8F2A\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u4E2D\u5275\u5EFA\u908F\u8F2F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "\u201C\u81EA\u8A02\u5BB9\u5668\u201D\u9801\u9762"), "\u8A0E\u8AD6\u4E86\u81EA\u8A02\u5BB9\u5668\u7684\u6982\u5FF5\u548C\u7528\u6CD5\u3002"))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 38197:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip");

/***/ })

}]);