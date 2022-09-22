"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3],{

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

/***/ 4637:
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
  title: "\u6559\u7A0B5\uFF1A\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-05",
  "id": "tutorials/tutorial-05",
  "title": "\u6559\u7A0B5\uFF1A\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-05",
  "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-05",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-05",
    "title": "\u6559\u7A0B5\uFF1A\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6559\u7A0B4\uFF1A\u5275\u5EFA\u5177\u6709\u81EA\u8A02\u884C\u70BA\u7684\u6EFE\u8F2A\u3002",
    "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-04"
  },
  "next": {
    "title": "AbstractButton",
    "permalink": "/4.20/zh-TW/docs/api/classes/classtouchgfx_1_1_abstract_button"
  }
};
const assets = {};



const toc = [{
  value: "\u5C07\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u5230\u87A2\u5E55",
  id: "adding-a-custom-action-to-a-screen",
  level: 2
}, {
  value: "\u5C07\u503C\u50B3\u905E\u7D66\u81EA\u8A02\u64CD\u4F5C",
  id: "passing-a-value-to-a-custom-action",
  level: 2
}, {
  value: "\u5728\u81EA\u8A02\u5BB9\u5668\u4E2D\u4F7F\u7528\u81EA\u8A02\u89F8\u767C\u689D\u4EF6",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904ETouchGFX Designer\uFF0C\u53EF\u4EE5\u5B9A\u7FA9\u5177\u6709\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C\u7684\u4EA4\u4E92\u5143\u4EF6\u3002 \u61C9\u7528\u4E2D\u7684\u6BCF\u500B\u87A2\u5E55\u90FD\u53EF\u80FD\u5305\u542B\u64CD\u4F5C\u96C6\u5408`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uFF08\u9019\u4E9B\u662FC++\u4E2D\u7684\u7C21\u55AEvoid\u65B9\u6CD5\uFF09`), `\uFF0C\u60A8\u53EF\u4EE5\u5F9ETouchGFX Designer\u5167\u90E8\u548C\u7A0B\u5F0F\u78BC\u4E2D\u547C\u53EB\u9019\u4E9B\u64CD\u4F5C\uFF0C\u800C\u81EA\u8A02\u5BB9\u5668\u4E5F\u53EF\u80FD\u6709\u60A8\u7684\u61C9\u7528\u53EF\u80FD\u56DE\u61C9\u7684\u89F8\u767C\u689D\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uFF08\u76F8\u7576\u65BCC++\u4E2D\u7684callback `), `\u96C6\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u6559\u7A0B\u4E2D\uFF0C\u6211\u5011\u5C07\u8A73\u7D30\u4ECB\u7D39\u6B64\u529F\u80FD\uFF0C\u4EE5\u63A2\u7D22\u4F7F\u7528\u5B83\u5275\u5EFA\u66F4\u7C21\u6F54\u3001\u52D5\u614B\u7684TouchGFX\u61C9\u7528\u7684\u53EF\u80FD\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6559\u7A0B\u4E0D\u9069\u5408TouchGFX\u7684\u65B0\u4F7F\u7528\u8005\u3002 \u5EFA\u8B70\u4EE5\u5F8C\u518D\u5B78\u7FD2\u672C\u6559\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "adding-a-custom-action-to-a-screen"
  }), `\u5C07\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u5230\u87A2\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E00\u7BC0\u4E2D\uFF0C\u6211\u5011\u5C07\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u5EFA\u4E00\u500B\u5305\u542B\u80CC\u666F\u65B9\u584A\u548C\u6309\u9215\u7684\u61C9\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u5230\u61C9\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6309\u9215\u88AB\u6309\u4E0B\u6642\u4F7F\u7528\u81EA\u8A02\u64CD\u4F5C\u4FEE\u6539\u80CC\u666F\u8272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u7528\u5C3A\u5BF8\u70BA480x272\u7684\u5716\u50CF\uFF08\u9069\u7528\u65BCSTM32F746\u6216\u6A21\u64EC\u5668\u7B49\uFF09\u65B0\u5EFA\u4E00\u500B\u7A7A\u767D\u61C9\u7528\uFF0C\u4E26\u63D2\u5165\u4E00\u500B\u7528\u4F5C\u80CC\u666F\u7684\u65B9\u584A\uFF08\u5C07\u5176\u547D\u540D\u70BA\u201Cbackground\u201D\uFF09\u548C\u4E00\u500B\u6309\u9215\uFF08\u5C07\u5176\u547D\u540D\u70BA\u201Cbutton\u201D\uFF09\u3002 \u7D50\u679C\u61C9\u985E\u4F3C\u65BC\u4E0B\u5716\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 85]],
    imageSource: "/img/tutorials/tutorial-05/white-background-and-button-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u6DFB\u52A0\u4E00\u500B\u767D\u8272\u80CC\u666F\u65B9\u584A\u548C\u4E00\u500B\u6309\u9215"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u5C07\u4E00\u500B\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u5230\u87A2\u5E55\u3002 \u60A8\u53EF\u4EE5\u5F9E\u87A2\u5E55\u7684\u201C\u5C6C\u6027\u201D\u9078\u9805\u5361\u5B8C\u6210\u6B64\u64CD\u4F5C\uFF0C\u65B9\u6CD5\u662F\u9078\u64C7\u201CScreen\u201D\u4E26\u6309\u4E0B\u201CActions\u201D\u7D44\u4E2D\u7684\u201C+\u201D\u6309\u9215\uFF08\u4E0A\u9762\u7684\u57161\uFF09\u3002 \u5C07\u64CD\u4F5C\u547D\u540D\u70BA\u201CsetBackgroundColor\u201D\uFF0C\u63D0\u4F9B\u8AF8\u5982\u201C\u8A2D\u7F6E\u80CC\u666F\u8272\u201D\u4E4B\u985E\u7684\u63CF\u8FF0\u3002 \u4E0D\u8981\u8A2D\u7F6E\u6B64\u64CD\u4F5C\u7684\u985E\u578B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.png",
    mdxType: "Figure"
  }, "\u5C07\u65B0\u7684\u81EA\u8A02\u64CD\u4F5C\u6DFB\u52A0\u5230\u87A2\u5E55"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F4`), ` \u9375\u751F\u6210\u5C08\u6848\u7A0B\u5F0F\u78BC\u3002 \u9019\u5C07\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp`), `\u4E2D\u751F\u6210\u4E00\u500B\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor()`), `\u7684\u865B\u64EC\u65B9\u6CD5\uFF0C\u5B83\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase.cpp`), `\u4E2D\u6709\u4E00\u500B\u7A7A\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can add functionality to this method by overriding it in user code in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), ` file or by creating interactions through TouchGFX Designer. Let's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.png",
    mdxType: "Figure"
  }, "\u5728\u9EDE\u64CA\u6309\u9215\u6642\u547C\u53EBsetBackgroundColor"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u5FC5\u9808\u6307\u5B9A\u5728\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u6642\u5BE6\u969B\u767C\u751F\u7684\u64CD\u4F5C\u3002 \u70BA\u6B64\uFF0C\u5728\u53E6\u4E00\u500B\u4EA4\u4E92\u4E2D\u4F7F\u7528\u65B0\u7684\u81EA\u8A02\u64CD\u4F5C (1) \u4F5C\u70BA\u89F8\u767C\u689D\u4EF6\u3002 \u9996\u5148\uFF0C\u5728\u89F8\u767C\u689D\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u547C\u53EBsetBackgroundColor\u201D`), `\u767C\u751F\u6642\uFF0C\u4F7F\u7528\u64CD\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201CChange box color\u201D`), `(2) \u5C07\u80CC\u666F\u65B9\u584A\u7684\u8272\u5F69\u7C21\u55AE\u5730\u8A2D\u7F6E\u70BA\u9ED1\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 60], [410, 76]],
    imageSource: "/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5BE6\u73FE\u81EA\u8A02\u64CD\u4F5CsetBackgroundColor\u7684\u529F\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u904B\u884C\u6A21\u64EC\u5668\u4E26\u6309\u4E0B\u6309\u9215\uFF1B\u80CC\u666F\u61C9\u8B8A\u70BA\u9ED1\u8272\u3002 \u60A8\u5DF2\u6210\u529F\u5275\u5EFA\u7B2C\u4E00\u500B\u81EA\u8A02\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/black-color-result-4-17.png",
    mdxType: "Figure"
  }, "\u6309\u4E0B\u6309\u9215\u5C07\u80CC\u666F\u8B8A\u70BA\u9ED1\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "passing-a-value-to-a-custom-action"
  }), `\u5C07\u503C\u50B3\u905E\u7D66\u81EA\u8A02\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u5728\u525B\u5275\u5EFA\u7684\u61C9\u7528\u7684\u57FA\u790E\u4E0A\uFF0C\u57FA\u65BC\u81EA\u8A02\u64CD\u4F5C\u7684\u6982\u5FF5\u9032\u884C\u5982\u4E0B\u62D3\u5C55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u53C3\u6578\u6DFB\u52A0\u5230setBackgroundColor\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u96A8\u6A5F\u8272\u50B3\u905E\u5230setBackgroundColor`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6309\u4E0B\u6309\u9215\u6642\u5C07\u80CC\u666F\u4FEE\u6539\u70BA\u96A8\u6A5F\u8272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u8B93\u8A72\u61C9\u7528\u66F4\u6709\u8DA3\uFF0C\u6211\u5011\u5C07\u4E00\u500B\u503C\u50B3\u905E\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \u81EA\u8A02\u64CD\u4F5C\uFF0C\u4F7F\u4E4B\u8B8A\u5F97\u66F4\u52D5\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F49\u81F3\u87A2\u5E55\u7684\u201Cinteractions\u201D\u9078\u9805\u5361\uFF0C\u70BA\u64CD\u4F5C\u6309\u4E0Bx\u6309\u9215\u522A\u9664\u5169\u500B\u7576\u524D\u64CD\u4F5C\uFF0C\u7136\u5F8C\u6211\u5011\u5C07\u8A2D\u7F6E\u65B0\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F49\u81F3\u87A2\u5E55\u7684\u201C\u5C6C\u6027\u201D\u9078\u9805\u5361\uFF0C\u627E\u5230\u81EA\u8A02\u64CD\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \uFF0C\u53D6\u6D88\u9078\u4E2D\u985E\u578B\u6838\u53D6\u65B9\u584A\u4E26\u8F38\u5165\u201Ccolortype\u201D\uFF0C\u9019\u5C07\u662F\u6211\u5011\u8981\u50B3\u905E\u7D66\u64CD\u4F5C\u7684\u53C3\u6578\u985E\u578B\uFF08colortype\u662F\u7528\u65BC\u63CF\u8FF0\u8272\u5F69\u7684\u81EA\u5E36TouchGFX\u985E\u578B\uFF09\u3002 \u4E0D\u80FD\u547D\u540D\u53C3\u6578\uFF0C\u5B83\u7684\u540D\u7A31\u5C07\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"value"`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-type-to-action-4-17.png",
    mdxType: "Figure"
  }, "\u70BA\u81EA\u8A02\u64CD\u4F5C\u8A2D\u7F6E\u53C3\u6578"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u4F86\u8A2D\u7F6E\u4EA4\u4E92\uFF0C\u5B83\u4F7F\u7528\u6211\u5011\u65B0\u6DFB\u52A0\u7684\u53C3\u6578\u503C\u3002 \u6211\u5011\u4F7F\u7528\u89F8\u767C\u689D\u4EF6\u201CsetBackgroundColor is called\u201D\u548C\u64CD\u4F5C\u201CExecute C++ code\u201D\u9032\u884C\u8A2D\u7F6E\u3002 \u6211\u5011\u8981\u7528\u65B0\u53C3\u6578\u8A2D\u7F6E\u80CC\u666F\u65B9\u584A\u7684\u8272\u5F69\uFF0C\u56E0\u6B64\u8981\u57F7\u884C\u7684\u7A0B\u5F0F\u78BC\u61C9\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `background.setColor(value);
background.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u884C\u5F37\u5236\u7528\u65B0\u8272\u5F69\u91CD\u7E6A\u80CC\u666F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/set-color-execute-code-4-17.png",
    mdxType: "Figure"
  }, "\u4F7F\u7528\u50B3\u905E\u7684\u503C\u4FEE\u6539\u80CC\u666F\u8272\u5F69"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0C\u89F8\u767C\u689D\u4EF6\u986F\u793A\u4E86\u53C3\u6578\u7684\u540D\u7A31\u548C\u985E\u578B\u201Cvalue : colortype\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u6211\u5011\u5C07\u8A2D\u7F6E\u5728\u9EDE\u64CA\u6309\u9215\u6642\u5BE6\u969B\u547C\u53EBsetBackgroundColor\u7684\u4EA4\u4E92\u3002 \u6DFB\u52A0\u53E6\u4E00\u500B\u5177\u6709\u89F8\u767C\u689D\u4EF6\u201CButton is clicked\u201D\u548C\u64CD\u4F5C\u201CCall Screen1 setBackgroundColor\u201D\u7684\u4EA4\u4E92\uFF0C\u8ACB\u6CE8\u610F\uFF0C\u503C\u7684\u5C6C\u6027\u4E5F\u986F\u793A\u4E86\u5B83\u7684\u9810\u671F\u985E\u578B\u3002 \u6211\u5011\u5C07\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `stdlib.h`), `\u4E2D\u5229\u7528\u96A8\u6A5F\u5316\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\u5C07\u96A8\u6A5F\u8272\u50B3\u905E\u7D66setBackgroundColor\uFF0C\u4EE5\u4FBF\u7372\u53D6\u4E09\u500B0\u81F3255\u4E4B\u9593\u7684\u4E82\u6578\u4E26\u7528\u5B83\u5011\u6307\u5B9A\u8272\u5F69\u3002 \u70BA\u4E86\u5B58\u53D6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\uFF0C\u6211\u5011\u9700\u8981\u5C07\u5176\u5305\u542B\u5728\u61C9\u7528\u4E2D\u3002 \u9084\u53EF\u4EE5\u5F9ETouchGFX Designer\u5167\u90E8\u70BA\u87A2\u5E55\u548C\u81EA\u8A02\u5BB9\u5668\u63D0\u4F9B\u60A8\u81EA\u5DF1\u7684includes\u51FD\u6578\uFF0C\u5728\u672C\u4F8B\u4E2D\u6211\u5011\u9700\u8981\u9019\u6A23\u505A\u3002 \u8F49\u81F3\u87A2\u5E55\u7684\u201C\u5C6C\u6027\u201D\u9078\u9805\u5361\uFF0C\u5728\u201CINCLUDES\u201D\u7D44\u4E0B\u9762\u8F38\u5165\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <stdlib.h>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/include-stdlib-4-17.png",
    mdxType: "Figure"
  }, "\u5305\u542Bstdlib\u4EE5\u4FBF\u5B58\u53D6rand()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u5C0D\u65BC\u503C\u5C6C\u6027\uFF0C\u6211\u5011\u5C07\u8F38\u5165 (1)\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 110]],
    imageSource: "/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5728\u9EDE\u64CA\u6309\u9215\u6642\u50B3\u905E\u96A8\u6A5F\u8272\u5F69\u503C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u904B\u884C\u6A21\u64EC\u5668\u4E26\u5617\u8A66\u591A\u6B21\u6309\u4E0B\u6309\u9215\u3002 \u60A8\u61C9\u770B\u5230\u80CC\u666F\u8B8A\u70BA\u96A8\u6A5F\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-initial-4-17.png",
    mdxType: "Figure"
  }, "\u9EDE\u64CA\u6309\u9215\u6642\u5F97\u5230\u7684\u96A8\u6A5F\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-custom-triggers-in-custom-containers"
  }), `\u5728\u81EA\u8A02\u5BB9\u5668\u4E2D\u4F7F\u7528\u81EA\u8A02\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\uFF0C\u81EA\u8A02\u5BB9\u5668\u9084\u53EF\u4EE5\u5B9A\u7FA9\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u96C6\uFF0C\u5728\u672C\u7BC0\u4E2D\uFF0C\u6211\u5011\u5C07\u57FA\u65BC\u61C9\u7528\u9032\u884C\u5982\u4E0B\u62D3\u5C55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5275\u5EFA\u65B0\u7684\u540D\u70BAColorEmitter\u7684\u81EA\u8A02\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u540D\u70BA\u201CcolorChanged\u201D\u7684\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u6DFB\u52A0\u5230ColorEmitter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6309\u4E0B\u6309\u9215\u6642\u7528\u89F8\u767C\u689D\u4EF6colorChanged\u5C07\u96A8\u6A5F\u8272\u50B3\u905E\u7D66\u61C9\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u87A2\u5E55\u4E2D\u8A2D\u7F6E\u4EA4\u4E92\u4EE5\u76E3\u6E2C\u89F8\u767C\u689D\u4EF6colorChanged`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528ColorEmitter\u767C\u9001\u7684\u4EFB\u4F55\u8272\u5F69\u8A2D\u7F6E\u80CC\u666F\u65B9\u584A\u7684\u8272\u5F69`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u6211\u5011\u5617\u8A66\u7528\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u4F86\u6307\u793A\u61C9\u7528\u4E2D\u7684\u4E00\u4E9B\u4E8B\u4EF6\u3002 \u6211\u5011\u4E0D\u4F7F\u7528\u5C07\u96A8\u6A5F\u8272\u50B3\u905E\u7D66`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u7684\u6309\u9215\u4EA4\u4E92\uFF0C\u800C\u662F\u5617\u8A66\u8B93\u81EA\u8A02\u5BB9\u5668\u5C07\u96A8\u6A5F\u8272\u767C\u9001\u5230\u87A2\u5E55\uFF0C\u7136\u5F8C\u8B93\u87A2\u5E55\u4F7F\u7528\u81EA\u8A02\u5BB9\u5668\u50B3\u905E\u7684\u4EFB\u4F55\u503C\u3002 \u9019\u6703\u662F\u4E00\u500B\u7C21\u55AE\u7684\u7BC4\u4F8B\uFF0C\u61C9\u7528\u4E2D\u7684\u4E0D\u540CUI\u5143\u4EF6\u76F8\u4E92\u901A\u4FE1\uFF0C\u4F7F\u61C9\u7528\u5177\u6709\u66F4\u5C0F\u7684\u9AD4\u7A4D\u548C\u66F4\u9AD8\u7684\u53EF\u8907\u7528\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u6211\u5011\u65B0\u5EFA\u4E00\u500B\u81EA\u8A02\u5BB9\u5668\u4E26\u5C07\u5176\u547D\u540D\u70BA\u201CColorEmitter\u201D\u3002 \u63D2\u5165\u4E00\u500B\u6309\u9215\u4E26\u5C07\u5176\u547D\u540D\u70BA\u201Cbutton\u201D\u3002 \u7D50\u679C\u61C9\u985E\u4F3C\u65BC\u4E0B\u5716\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.png",
    mdxType: "Figure"
  }, "\u81EA\u8A02\u5BB9\u5668ColorEmitter"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u6211\u5011\u8981\u8B93ColorEmitter\u5728\u6309\u9215\u88AB\u9EDE\u64CA\u6642\u767C\u9001\u96A8\u6A5F\u8272\u3002 \u7136\u5F8C\uFF0C\u4EFB\u4F55\u7269\u4EF6\u90FD\u53EF\u4EE5\u6C7A\u5B9A\u76E3\u6E2C\u6B64\u985E\u767C\u9001\u4E26\u4F7F\u7528\u6B64\u8272\u5F69\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u53EA\u6A21\u4EFF\u4E4B\u524D\u7684\u884C\u70BA\uFF0C\u4F7F\u7528\u6B64\u8272\u5F69\u8A2D\u7F6E\u80CC\u666F\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u8B93\u81EA\u8A02\u5BB9\u5668\u767C\u9001\u984F\u8272\uFF0C\u9996\u5148\u9700\u8981\u5275\u5EFA\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u3002 \u8F49\u81F3\u81EA\u8A02\u5BB9\u5668\u7684\u201C\u5C6C\u6027\u201D\u9078\u9805\u5361\uFF0C\u6309\u4E0B\u201CTriggers\u201D\u7D44\u4E2D\u7684\u201C+\u201D\u6309\u9215 (1)\u3002 \u5C07\u89F8\u767C\u689D\u4EF6\u547D\u540D\u70BA\u201CcolorChanged\u201D\uFF0C\u8F38\u5165\u8AAA\u660E\u201CThe color has changed\u201D\uFF0C\u4E26\u5C07\u985E\u578B\u8A2D\u7F6E\u70BA\u201Ccolortype\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 78]],
    imageSource: "/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5C07\u81EA\u8A02\u89F8\u767C\u689D\u4EF6\u6DFB\u52A0\u5230\u81EA\u8A02\u5BB9\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\uFF0C\u8F49\u81F3\u81EA\u8A02\u5BB9\u5668\u7684\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u4E26\u65B0\u5EFA\u4E00\u500B\u4EA4\u4E92\u3002 \u4F7F\u7528\u89F8\u767C\u689D\u4EF6\u201CButton is clicked\u201D\u548C\u64CD\u4F5C\u201CEmit colorChanged\u201D\u3002 \u73FE\u5728\u6211\u5011\u8981\u767C\u9001\u96A8\u6A5F\u8272\uFF0C\u5C0D\u503C\u5C6C\u6027\u4F7F\u7528\u8207\u4E4B\u524D\u76F8\u540C\u7684\u7A0B\u5F0F\u78BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emitting-color-changed-4-17.png",
    mdxType: "Figure"
  }, "\u767C\u9001\u81EA\u8A02\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u7531\u65BC\u81EA\u8A02\u5BB9\u5668\u4E2D\u672A\u81EA\u52D5\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Color`), `\u547D\u540D\u7A7A\u9593\uFF0C\u56E0\u6B64\u6700\u521D\u4E26\u4E0D\u8D77\u4F5C\u7528\u3002 \u8207\u4EE5\u524D\u4E00\u6A23\uFF0C\u6211\u5011\u5C07\u70BA\u81EA\u8A02\u5BB9\u5668\u63D0\u4F9B\u81EA\u5DF1\u7684include\u51FD\u6578\u3002 \u8F49\u81F3\u81EA\u8A02\u5BB9\u5668\u7684\u201Cproperties\u201D\u9078\u9805\u5361\uFF0C\u5728\u201CIncludes\u201D\u7D44(1) \u4E0B\u9762\u8F38\u5165\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 115]],
    imageSource: "/img/tutorials/tutorial-05/extra-includes-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u63D0\u4F9B\u984D\u5916\u7684includes\u51FD\u6578"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u8981\u7528\u65B0\u5EFA\u7684\u81EA\u8A02\u5BB9\u5668ColorEmitter\u66FF\u4EE3\u820A\u6309\u9215\u3002 \u9078\u64C7Screen1\u4E26\u522A\u9664\u9019\u88E1\u7684\u6309\u9215\u3002 \u9019\u61C9\u7576\u6703\u5728\u4F7F\u7528\u6B64\u6309\u9215\u7684\u4EA4\u4E92\u4E2D\u751F\u6210\u932F\u8AA4\uFF0C\u56E0\u6B64\u9084\u9700\u8981\u522A\u9664\u6B64\u4EA4\u4E92\uFF0C\u6211\u5011\u5C07\u70BAColorEmitter\u5275\u5EFA\u65B0\u7684\u4EA4\u4E92\u3002 \u73FE\u5728\uFF0C\u5728Screen1\u4E0A\u63D2\u5165ColorEmitter\u5BE6\u4F8B\uFF0C\u7136\u5F8C\u5728Screen1\u4E0A\u65B0\u5EFA\u4E00\u500B\u4EA4\u4E92\u3002 \u5C0D\u65BC\u89F8\u767C\u689D\u4EF6\uFF0C\u60A8\u61C9\u7576\u6703\u770B\u5230\u4E00\u500B\u540D\u70BA\u201CColorEmitter colorChanged happens\u201D\u7684\u9078\u9805\u3002 \u9078\u64C7\u8A72\u9078\u9805\uFF0C\u4E26\u70BA\u64CD\u4F5C\u9078\u64C7\u201CCall Screen1 setBackgroundColor\u201D\u3002 \u73FE\u5728\uFF0C\u6211\u5011\u9700\u4F7F\u7528colorChanged\u767C\u9001\u7684\u503C\uFF0C\u5176\u540D\u7A31\u59CB\u7D42\u70BA\u201Cvalue\u201D\uFF08\u5982\u4E0A\u6587\u6240\u8FF0\uFF09\u3002 \u56E0\u6B64\uFF0C\u5728\u503C\u5C6C\u6027\u4E2D\u8F38\u5165\u201Cvalue\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.png",
    mdxType: "Figure"
  }, "\u8A2D\u7F6E\u4EA4\u4E92\u4EE5\u76E3\u6E2CcolorChanged\u81EA\u8A02\u89F8\u767C\u689D\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u904B\u884C\u6A21\u64EC\u5668\u4E26\u518D\u6B21\u5617\u8A66\u6309\u4E0B\u6309\u9215\u3002 \u61C9\u7528\u61C9\u986F\u793A\u76F8\u540C\u884C\u70BA\uFF0C\u80CC\u666F\u8B8A\u70BA\u96A8\u6A5F\u8272\u3002 \u73FE\u5728\uFF0C\u6211\u5011\u4E0D\u50C5\u5728\u87A2\u5E55\u4E0A\u5BE6\u73FE\u4E86\u6240\u6709\u529F\u80FD\uFF0C\u9084\u6210\u529F\u5730\u5728\u87A2\u5E55\u8207\u5B83\u7684\u4E00\u4E9B\u8F03\u5C0F\u7684\u53EF\u8907\u7528\u5143\u4EF6\uFF08\u5373\u7C21\u55AE\u7684ColorEmitter\uFF09\u4E4B\u9593\u5EFA\u7ACB\u4E86\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-final-4-17.png",
    mdxType: "Figure"
  }, "\u9EDE\u64CA\u6309\u9215\u6642\u5F97\u5230\u7684\u96A8\u6A5F\u8272"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);